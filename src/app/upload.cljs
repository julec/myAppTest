(ns app.upload
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [rum.core :as rum]
    [goog.labs.format.csv :as csv]
    [cljs.core.async :as async :refer [<! >! put! take! close! chan]]
    [app.common :as common]
    [app.validation :as validation]))

(def first-file
  (map (fn [e]
    (let [target (.-currentTarget e)
          file (-> target .-files (aget 0))]
          (set! (.-value target) "")
          file))))

(def extract-result
  (map #(-> % .-target .-result csv/parse js->clj)))

(def upload-reqs (chan 1 first-file))
(def file-reads (chan 1 extract-result))

(defn handle-change [e]
  (put! upload-reqs e))

(go-loop []
  (let [reader (js/FileReader.)
        file (<! upload-reqs)]
    (cond
      (not (validation/valid-file-type? file))
        (common/write-error-to-state "Upload a .csv-file!" false)

      (not (validation/valid-file-size? file))
        (common/write-error-to-state "File should be no more than 5Kb!" false)
      :else
      (do
        (swap! common/state assoc :file-name (.-name file)
                                  :file-error "")
        (set! (.-onload reader) #(put! file-reads %))
        (.readAsText reader file)))
      (recur)))

(go-loop []
  (let [content (<! file-reads)]
  (cond
    (empty? content)
      (common/write-error-to-state "Your file is empty!" true)

    (not (validation/valid-cols? content))
      (common/write-error-to-state "Wrong number of columns!" true)

    :else
      (do
        (let [trimed-content (mapv #(mapv (fn [arg] (.trim arg)) %) content)]
          (cond
            (not (validation/valid-titles? trimed-content))
              (common/write-error-to-state "Titles should be no longer than 20 symbols!" true)

            (not (validation/valid-first-col? trimed-content))
              (common/write-error-to-state "Data in first column should be a no longer than 20 symbols!" true)

            (not (validation/valid-second-col? trimed-content))
              (common/write-error-to-state "Data in second column should be a number!" true)

            :else
              (swap!
                common/state
                assoc
                :file-content trimed-content
                :file-error "")))))
  (recur)))

(rum/defc input-upload [error-msg]
  [:div {:class "container upload"}
    (if (= error-msg "")
      [:p {:class "upload-title"} "Upload a .csv-file that is no more than 5Kb."]
      [:p {:class "upload-error"} error-msg]
    )
    [:label {:for "upload-input"
             :class "upload-label"}
      "Upload"
      [:input {:type "file"
               :id "upload-input"
               :class "upload-input"
               :on-change handle-change}]]
    ])
