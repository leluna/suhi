(ns suhihanabi.game.actions
  (:require [suhihanabi.game.setup :as setup]
            [suhihanabi.shorthands :refer :all]))

(defn new-deck [] (shuffle (for [color setup/colors
                                 number setup/numbers]
                             {:color color
                              :number number})))

(defn new-game [] {:deck (new-deck)
                   :players {0 []
                             1 []
                             2 []
                             3 []}
                   :current-player 0
                   :hints setup/initial-hints
                   :trash []
                   :storms 0
                   :table (->> setup/colors
                               (map #(vector % []))
                               (into {}))
                   :last-round 0})

(defn color-matches? [[color cards]]
  (every? #(= color (:color %)) cards))

(defn valid-move? [state]
  (and (every? #(<= (count %) 4) (:players state))
       (>= (:hints state) 0)
       (< (:storms state) 3)
       (every? some? (vals (:players state)))
       (= (+ (count (:deck state))
             (count-vec-vals (:players state))
             (count-vec-vals (:table state))
             (count (:trash state)))
          50)
       (every? color-matches? (:table state))))

(defn current-hand [state]
  (get-in state [:players (:current-player state)]))


(defn remove-card [card-idx hand]
  (keep-indexed #(when (not= %1 card-idx) %2) hand))


#_(defn can-draw? [state]
    (and (seq (:deck state))
         (every? #(<= (count %) 4) (:players state))))

(defn draw [state]
  (let [deck (:deck state)
        player (:current-player state)]
      (-> state
          (update-in [:players player] #(conj % (first deck)))
          (update-in [:deck] (partial drop 1)))))

(defn next-player [state]
  (update-in state [:current-player] #(mod (inc %) 4)))


(defn deal-current-player [state]
  (-> (first (filter #(= (count (current-hand %)) 4) (iterate draw state)))
      (next-player)))

(defn deal [state]
  (applytimes 4 deal-current-player state))



(defn can-play? [card table]
  (= (:number card) (+ 1 ((:color card) table))))

(defn play [card-idx state]
  (let [player (:current-player state)
        hand (get-in state [:players player])
        {:keys [number color] :as card} (nth hand card-idx)]
      (-> (update-in state [:table color] #(conj % card))
          (assoc-in [:players player] (remove-card card-idx hand))
          (draw)
          (next-player))))


(defn discard [player index])

(defn hint-number [from to hint])
