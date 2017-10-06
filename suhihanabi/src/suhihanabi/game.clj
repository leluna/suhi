(ns suhihanabi.game)

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

(def deck (shuffle (for [color colors
                         number numbers]
                     {:color color
                      :number number})))

(defonce game-state (atom {:deck deck
                       :p1  []
                       :p2  []
                       :p3  []
                       :p4  []
                       :hints 8
                       :trash []
                       :storms 0
                       :table (into {} (for [c colors] [c 0]))
                       #_(->> colors
                                   (map #(vector % 0))
                                   (into {}))
                       }))

#_(dsui.swing/dsui @game-state)

(defn play [player index])

(defn discard [player index])

(defn hint-number [from to hint])
