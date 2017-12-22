(ns app.validation
  (:require
    [rum.core :as rum]))

;; File validation
(defn valid-file-type? [file]
  (if (re-find #"\.csv" (.-name file))
    file
    false))

(defn valid-file-size? [file]
  (if (< (.-size file) (* 5 1024))
    file
    false))

;; Content validation
(defn valid-cols-number? [arg]
  (= (count arg) 2))

(defn valid-number? [arg]
  (boolean (re-matches #"(\-|\+)?(\d+)?(\.)?(\d+)?" arg)))

(defn valid-length? [arg]
  (<= (.-length arg) 20))

(defn valid-cols? [content]
  (every? true? (map valid-cols-number? content)))

(defn valid-titles? [content]
  (every? true?
    (map #(valid-length? %) (content 0))))

(defn valid-first-col? [content]
  (every? true?
    (map #(valid-length? (% 0)) (subvec content 1))))

(defn valid-second-col? [content]
  (every? true?
    (map #(valid-number? (% 1)) (subvec content 1))))
