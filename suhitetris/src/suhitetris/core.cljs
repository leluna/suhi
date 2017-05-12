(ns suhitetris.core
  (:require [reagent.core :as r]))

(enable-console-print!)

(def pieces {})


(defonce app-state (r/atom {:board [[nil nil nil nil nil nil nil nil nil nil]
                                    [nil nil nil nil nil nil nil nil nil nil]
                                    [nil nil nil nil nil nil nil nil nil nil]
                                    [nil nil nil nil nil nil nil nil nil nil]
                                    [nil nil nil nil nil nil nil nil nil nil]
                                    [nil nil nil nil nil nil nil nil nil nil]
                                    [nil nil nil nil nil nil nil nil nil nil]
                                    [nil nil nil nil nil nil nil nil nil nil]
                                    [nil nil nil nil nil nil nil nil nil nil]
                                    [nil nil nil nil nil nil nil nil nil nil]
                                    [nil nil nil nil nil nil nil nil nil nil]
                                    [nil nil nil nil nil nil nil nil nil nil]
                                    [nil nil nil nil nil nil nil nil nil nil]
                                    [nil nil nil nil nil nil nil nil nil nil]
                                    [nil nil nil nil nil nil nil nil nil nil]
                                    [nil nil nil nil nil nil nil nil nil nil]
                                    [nil nil nil nil nil nil nil nil nil nil]
                                    [nil nil nil nil nil nil nil nil nil nil]
                                    [nil nil nil nil nil nil nil nil nil nil]
                                    [nil nil nil nil nil nil nil nil nil nil]
                                    [nil nil nil nil nil nil nil nil nil nil]
                                    [nil nil nil nil nil nil nil nil 0 0]]
                            :block {:position [5 0]}}))

(defn inc-y [[v1 v2]]
  [(min (inc v1) 21) v2])

(defn drop-block [state]
  (update-in state [:block :position] inc-y))


(defonce tick! (js/setInterval #(swap! app-state drop-block) 500))


(defn merge-block [graveyard block]
  (assoc-in graveyard (:position block) 1))
  

(defn board []
  [:div.container 
   [:div 
    (for [line (merge-block (:board @app-state) (:block @app-state))]
      [:div.line (for [cell line]
                   [:div.cell (cond (= cell 0) {:class "dead"}     
                                (= cell 1) {:class "alife"}
                                :else      {:class "empty"})])])]]) 
   

(defn mount-root []
  (r/render-component [board] 
    (.getElementById js/document "app")))

(defn on-js-reload [] 
  (mount-root))

(mount-root)
