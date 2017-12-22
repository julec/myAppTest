(ns app.result
  (:require
    [rum.core :as rum]
    [app.validation :as validation]
    [app.common :as common]))


(enable-console-print!)

(rum/defcc result-input
  [comp value class placeholder validate-on-change on-change & [on-blur]]
  [:input {:class class
           :type "text"
           :placeholder placeholder
           :value value
           :on-blur #(let [new-value (.. % -target -value)]
                        (when on-blur
                          (on-blur new-value)))
           :on-change #(let [new-value (.. % -target -value)]
                          (if (validate-on-change new-value)
                            (on-change new-value)
                            (rum/request-render comp)))}])

(rum/defc result [data]
  (let [numbers (map #(js/Number (% 1)) (subvec data 1))
        aggregations #js []
        sum (reduce + numbers)
        avg (/ (js/Math.round (* (/ sum (count numbers)) 100)) 100)
        max (apply js/Math.max numbers)
        min (apply js/Math.min numbers)]

    (defn add-to-aggregations [value title]
      (.push aggregations (assoc {} :value value :title title)))

    (add-to-aggregations sum "Sum")
    (add-to-aggregations avg "Avg")
    (add-to-aggregations max "Max")
    (add-to-aggregations min "Min")

    [:div {:class "container"}
      [:div {:class "result"}

        [:div {:class "result-aggregations"}
          (map-indexed
            (fn [i aggregation]
              [:div {:class "result-table-row"
                     :key (str "aggregation" i)}
                [:div {:class "result-table-cell result-table-caption"} (aggregation :title)]
                [:div {:class "result-table-cell"} (aggregation :value)]
              ])
              aggregations)]

        [:div {:class "result-table"}

          ;; table titles
          [:div {:class "result-table-row"}
            (map-indexed
              (fn [i arg]
                (rum/with-key
                  (result-input
                    arg
                    "result-table-cell result-table-caption"
                    "Enter title"
                    #(validation/valid-length? %)
                    #(swap! common/state assoc-in [:file-content 0 i] %)
                    #(swap! common/state assoc-in [:file-content 0 i] (.trim %)))
                  (str "title-" i)))
              (data 0))
          ]

          ;; table data
          (map-indexed
            (fn [i arg]
              [:div {:class "result-table-row"
                     :key (str "row-" i)}
                (map-indexed
                  (fn [k arg-inner]
                    (if (= k 0)

                      ;; text field
                      (rum/with-key
                        (result-input
                          arg-inner
                          "result-table-cell"
                          "Enter company name"
                          #(validation/valid-length? %)
                          #(swap! common/state assoc-in [:file-content (inc i) k] %)
                          #(swap! common/state assoc-in [:file-content (inc i) k] (.trim %)))
                        (str "data-" i "-" k))

                      ;; number field
                      (rum/with-key
                        (result-input
                          arg-inner
                          "result-table-cell"
                          "0"
                          #(validation/valid-number? %)
                          #(swap! common/state assoc-in [:file-content (inc i) k] %)
                          (fn [arg]
                            (if (re-matches #"(\-|.|)" arg)
                              (swap! common/state assoc-in [:file-content (inc i) k] 0)
                              (swap! common/state assoc-in [:file-content (inc i) k] (js/Number arg))
                            )))
                        (str "data-" i "-" k))))
                  arg)
              ])
            (subvec data 1))
        ]
      ]
    ]))
