(ns app.core
  (:require
    [rum.core :as rum]
    [app.common :as common]
    [app.result :as result]
    [app.upload :as upload]))

(enable-console-print!)

(rum/defc app < rum/reactive []
  (if (= (rum/react (rum/cursor-in common/state [:file-content])) [])
      (upload/input-upload (rum/react (rum/cursor-in common/state [:file-error])))
      (result/result (rum/react (rum/cursor-in common/state [:file-content])))))

(rum/mount
  (app common/state)
  (js/document.getElementById "app"))
