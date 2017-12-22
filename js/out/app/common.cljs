(ns app.common
  (:require
    [rum.core :as rum]))

(def state (atom {:file-name ""
                  :file-error ""
                  :file-content []}))

(defn write-error-to-state [msg remove-file]
  (swap! state assoc :file-error msg)

  (when remove-file
    (swap! state assoc :file-name "")))
