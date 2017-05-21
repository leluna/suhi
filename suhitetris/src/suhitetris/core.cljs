(ns suhitetris.core
  (:require [reagent.core :as r]
            [suhitetris.vector :as v]))

(enable-console-print!)

(def pieces [:z #_:s :t #_:l #_:j #_:i #_:o])
(def shapes {:t [[0 -1] [0 0] [0 1]
                        [1 0]]
             :z [[0 -1] [0 0]
                        [1 0] [1 1]]})
(defn random-piece []
  (rand-nth pieces))

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
                                    [0 0 0 0 0 0 0 0 0 0]]
                            :block {:position [0 5]
                                    :shape (shapes (random-piece))}
                            :settings {:gravity true}}))

(defn positions [block]
  (mapv (partial v/vec+ (:position block)) (:shape block)))

(defn merge-block [board block val]
    (reduce #(assoc-in %1 %2 val) board (positions block)))



;; todo: random rotation + choose position depending on shape
(defn respawn [state]
  (-> (assoc-in state [:block :position] [0 5])
      (assoc-in [:block :shape] (shapes (random-piece)))))

(defn kill-block [state]
  (update-in state [:board] #(merge-block % (:block state) 1)))




(defn valid-move? [block board]
  (every? #(= (get-in board %) 0) block))

;; todo: merge to one function...
(defn move-down [state]
  (let [current-pos   (get-in state [:block :position])
        current-block (positions (:block state))
        next-block    (mapv v/move-down current-block)
        [x y]         current-pos]
    (if (valid-move? next-block (:board state))
      (assoc-in state [:block :position] (v/move-down current-pos))
      (-> (kill-block state)
          (respawn)))))
          
    

(defn move-left [state]
  (let [current-pos   (get-in state [:block :position])
        current-block (positions (:block state))
        next-block    (mapv v/move-left current-block)]
    (if (valid-move? next-block (:board state))
      (assoc-in state [:block :position] (v/move-left current-pos))
      state)))

(defn move-right [state]
  (let [current-pos   (get-in state [:block :position])
        current-block (positions (:block state))
        next-block    (mapv v/move-right current-block)]
    (if (valid-move? next-block (:board state))
      (assoc-in state [:block :position] (v/move-right current-pos))
      state)))

#_(defn rotate-left [state]
   (let [block (:block state)
         next-shape (mapv v/rotl (:shape block))
         next-block (positions (assoc-in block [:shape] next-shape))]
    (if (valid-move? next-block (:board state))
      (update-in state [:block :shape] #(mapv v/rotl %))
      state)))


(defn rotate-right [state]
   (let [block (:block state)
         next-shape (mapv v/rotr (:shape block))
         next-block (positions (assoc-in block [:shape] next-shape))]
    (if (valid-move? next-block (:board state))
      (update-in state [:block :shape] #(mapv v/rotr %))
      state)))







(defonce tick! (js/setInterval
                #(when (get-in @app-state [:settings :gravity]) (swap! app-state move-down)) 750))  



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
     (map-indexed line-of-blocks (merge-block (:board @app-state) (:block @app-state) 2))]]
    
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
    (case key-code
      37 (swap! app-state move-left)
      32 (swap! app-state rotate-left)
      38 (swap! app-state rotate-right)
      39 (swap! app-state move-right)
      40 (swap! app-state move-down)
      :default)))

(defonce listener (.addEventListener js/document "keydown" handle-arrow-keys!))

(mount-root)

