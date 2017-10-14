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
                               (map #(vector % 0))
                               (into {}))})

(defn valid-move? [state-after]
  (and (every? #(<= (count %) 4) (:players state-after))
       (>= (:hints state-after) 0)
       (< (:storms state-after) 3)
       (>= (count (:deck state-after)) 0)
       (= (+ (count (:deck state-after))))))

(defn current-hand [state]
  (get-in state [:players (:current-player state)]))


(defn remove-card [card-idx hand]
  (keep-indexed #(when (not= %1 card-idx) %2) hand))


(defn can-draw? [state]
    (and (seq (:deck state))
         (every? #(<= (count %) 4) (:players state))))

(defn draw [state]
  (if (can-draw? state)
      (let [deck (:deck state)
            player (:current-player state)]
          (-> state
              (update-in [:players player] #(conj % (first deck)))
              (update-in [:deck] (partial drop 1))))
      state))

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
    (if (can-play? card (:table state))
        (-> (update-in state [:table color] inc)
            (assoc-in [:players player] (remove-card card-idx hand))
            (draw))
        state)))


(defn discard [player index])

(defn hint-number [from to hint])
