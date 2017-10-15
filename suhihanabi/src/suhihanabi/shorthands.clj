(ns suhihanabi.shorthands)

(defn applytimes [n f x]
  (nth (iterate f x) n))

(defn count-vec-vals [m]
  (->> (vals m)
       (map count)
       (reduce +)))
