(ns suhitetris.core
  (:require [reagent.core :as r]
            [suhitetris.vector :as v]))

(enable-console-print!)

(def pieces [:z #_:s :t #_:l #_:j #_:i #_:o])
(def shapes {:t [[-1 0] [0 0] [1 0]
                        [0 1]]
             :z [[-1 0] [0 0]
                        [0 1] [1 1]]})
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
                                    [0 0 0 0 0 0 0 0 1 1]]
                            :block {:position [5 1]
                                    :shape (shapes (random-piece))}
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
  (let [current-pos (get-in state [:block :position])
        to (down current-pos)
        [x y] current-pos]
    (if (valid-move? (:board state) to)
      (assoc-in state [:block :position] to)
      (-> (assoc-in state [:block :position] [0 5])
          (assoc-in [:board x y] 1)))))
    

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

(defn rotate-left [state]
  (update-in state [:block :shape] #(mapv v/rotl %)))

(defn rotate-right [state]
  (update-in state [:block :shape] #(mapv v/rotr %)))


(defonce tick! (js/setInterval
                #(when (get-in @app-state [:settings :gravity]) (swap! app-state move-down)) 750))


#_(merge-block [[nil nil nil nil][nil nil nil nil][nil nil nil nil][nil nil nil nil]] {:position [ 2 2] :shape [[-1 0] [0 0] [1 0] [0 1]]})

(defn merge-block [graveyard block]
  (let [pos (:position block)]
    (->> (:shape block)
         (map (partial v/vec+ pos))
         (reduce #(assoc-in %1 %2 2) graveyard))))
  


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
    (case key-code
      37 (swap! app-state move-left)
      32 (swap! app-state rotate-left)
      38 (swap! app-state rotate-right)
      39 (swap! app-state move-right)
      40 (swap! app-state move-down))))

(defonce listener (.addEventListener js/document "keydown" handle-arrow-keys!))

(mount-root)

