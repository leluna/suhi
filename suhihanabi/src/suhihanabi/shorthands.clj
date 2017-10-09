(ns suhihanabi.shorthands)

(defn applytimes [n f x]
  (nth (iterate f x) n))
