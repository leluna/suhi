(ns suhihanabi.game
  (:require [suhihanabi.shorthands :refer :all]))

(def colors #{:red
              :green
              :blue
              :yellow
              :white})

(def numbers [1 1 1
              2 2
              3 3
              4 4
              5])

(defn new-deck [] (shuffle (for [color colors
                                 number numbers]
                             {:color color
                              :number number})))


(def initial-state {:deck (new-deck)
                    :players {0 []
                              1 []
                              2 []
                              3 []}
                    :current-player 0
                    :hints 8
                    :trash []
                    :storms 0
                    :table (->> colors
                                (map #(vector % 0))
                                (into {}))})

(defn valid-state? [state]
  (and (every? #(<= (count %) 4) (:players state))
       (>= (:hints state) 0)
       (< (:storms state) 3)
       (>= (count (:deck state)) 0)))



(defonce game-state (atom initial-state))


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

(defn end-turn [state]
  (update-in state [:current-player] #(mod (inc %) 4)))


(defn deal-current-player [state]
  (-> (first (filter #(= (count (current-hand %)) 4) (iterate draw state)))
      (end-turn)))

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
