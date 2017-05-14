(ns suhitetris.core
  (:require [reagent.core :as r]))

(enable-console-print!)

(def pieces {})


(defonce app-state (r/atom {:board [[0 0 0 0 0 0 0 0 0 0]
                                    [0 0 0 0 0 0 0 0 0 0]
                                    [0 0 0 0 0 0 0 0 0 0]
                                    [0 0 0 0 0 0 0 0 0 0]
                                    [0 0 0 0 0 0 0 0 0 0]
                                    [0 0 0 0 0 0 0 0 0 0]
                                    [0 0 0 0 0 0 0 0 0 0]
                                    [0 0 0 0 0 0 0 0 0 0]
                                    [0 0 0 0 0 0 0 0 0 0]
                                    [0 0 0 0 0 0 0 0 0 0]
                                    [0 0 0 0 0 0 0 0 0 0]
                                    [0 0 0 0 0 0 0 0 0 0]
                                    [0 0 0 0 0 0 0 0 0 0]
                                    [0 0 0 0 0 0 0 0 0 0]
                                    [0 0 0 0 0 0 0 0 0 0]
                                    [0 0 0 0 0 0 0 0 0 0]
                                    [0 0 0 0 0 0 0 0 0 0]
                                    [0 0 0 0 0 0 0 0 0 0]
                                    [0 0 0 0 0 0 0 0 0 0]
                                    [0 0 0 0 0 0 0 0 0 0]
                                    [0 0 0 0 0 0 0 0 0 0]
                                    [0 0 0 0 0 0 0 0 1 1]]
                            :block {:position [5 3]}
                            :settings {:gravity true}}))

(defn valid-move? [board to]
  (= (get-in board to) 0))

(defn down [[v1 v2]]
  [(inc v1) v2])

(defn right [[v1 v2]]
  [v1 (inc v2)])

(defn left [[v1 v2]]
  [v1 (dec v2)])

;; todo: merge to one function...
(defn move-down [state]
  (let [to (down (get-in state [:block :position]))]
    (if (valid-move? (:board state) to)
      (assoc-in state [:block :position] to)
      state)))
    

(defn move-left [state]
  (let [to (left (get-in state [:block :position]))]
    (if (valid-move? (:board state) to)
      (assoc-in state [:block :position] to)
      state)))

(defn move-right [state]
  (let [to (right (get-in state [:block :position]))]
    (if (valid-move? (:board state) to)
      (assoc-in state [:block :position] to)
      state)))


(defonce tick! (js/setInterval
                #(when (get-in @app-state [:settings :gravity]) (swap! app-state move-down)) 750))




(defn merge-block [graveyard block]
  (assoc-in graveyard (:position block) 2))
  


(defn line-of-blocks [index values]
  ^{:key index}[:div.line]
    (map-indexed (fn [i v]
                   ^{:key i}[:div.cell (cond (= v 1) {:class "dead"}                                          
                                             (= v 2) {:class "alife"}
                                             :else   {:class "empty"})])
      values))

(defn board []
  [:div.game
   [:div.container 
    [:div.board
     (map-indexed line-of-blocks (merge-block (:board @app-state) (:block @app-state)))]]
    
   [:input {:type :checkbox
            :name "Gravity"
            :defaultChecked true
            :on-click #(swap! app-state update-in [:settings :gravity] not)}]
   [:div (str @app-state)]]) 



(defn mount-root []
  (r/render-component [board] 
    (.getElementById js/document "app")))

(defn on-js-reload [] 
  (mount-root))



(defn handle-arrow-keys! [event]
  (let [key-code (.-keyCode event)]
    (cond (= key-code 37) (swap! app-state move-left)
          (= key-code 38) (println "up arrow key pressed")
          (= key-code 39) (swap! app-state move-right)
          (= key-code 40) (println "down arrow key pressed"))))

(.addEventListener js/document "keydown" handle-arrow-keys!)

(mount-root)

