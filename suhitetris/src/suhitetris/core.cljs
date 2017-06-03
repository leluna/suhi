(ns suhitetris.core
  (:require [reagent.core :as r]
            [suhitetris.vector :as v]))

(enable-console-print!)

(def pieces [:z :s :t :l :j :i :o])

;; todo: 0 0 currently has to be in 1st row
(def shapes {:t [[0 -1] [0 0] [0 1]
                        [1 0]]
             :s [       [0 0] [0 1]
                 [1 -1] [1 0]]
             :z [[0 -1] [0 0]
                        [1 0] [1 1]]
             :l [[0 0] [0 1] [0 2] 
                 [1 0]]
             :j [[0 -2] [0 -1] [0 0] 
                               [1 0]]
             :i [[0 -1] [0 0] [0 1] [0 2]]
             :o [[0 0] [0 1]
                 [1 0] [1 1]]})

(defn random-piece []
  (rand-nth pieces))

(defn empty-board []
  (apply vector (repeat 22 (apply vector (repeat 10 0)))))

(defonce app-state (r/atom {:board (empty-board)
                            :block {:position [0 5]
                                    :shape (shapes (random-piece))}
                            :alive false
                            :score 0
                            :settings {:gravity false
                                       :debug true}}))

(defn positions [block]
  (mapv (partial v/vec+ (:position block)) (:shape block)))

(defn merge-block [board block val]
    (reduce #(assoc-in %1 %2 val) board (positions block)))

(defn valid? [state]
  (let [blocks (positions (get-in state [:block]))
        board  (get-in state [:board])]
    (every? #(= (get-in board %) 0) blocks)))
  
  
  

;; todo: random rotation + choose position depending on shape
(defn respawn [state]
  (let [next-state (-> (assoc-in state [:block :position] [0 5])
                       (assoc-in [:block :shape] (shapes (random-piece))))]
    (if (valid? next-state) next-state
      (assoc-in state [:alive] false))))

      

(defn kill-block [state]
  (update-in state [:board] #(merge-block % (:block state) 1)))



;; todo: merge to one function...
(defn move-down [state]
  (let [next-state (update-in state [:block :position] v/move-down)]
    (if (valid? next-state) next-state
      (-> (kill-block state)
          (respawn)))))   

(defn move-left [state]
  (let [next-state (update-in state [:block :position] v/move-left)]
    (if (valid? next-state) next-state      
      state)))

(defn move-right [state]
  (let [next-state  (update-in state [:block :position] v/move-right)]
    (if (valid? next-state) next-state
      state)))

(defn rotate-left [state]
  (let [next-state (update-in state [:block :shape] #(mapv v/rotl %))]
    (if (valid? next-state) next-state
      state)))

(defn rotate-right [state]
   (let [next-state (update-in state [:block :shape] #(mapv v/rotr %))]
    (if (valid? next-state) next-state
      state)))

(defn reset [state]
  (-> (assoc-in state [:board] (empty-board))
      (assoc-in [:alive] true)
      (assoc-in [:score] 0)))



(defonce drop! (js/setInterval
                 #(when 
                    (and (:alive @app-state) 
                         (get-in @app-state [:settings :gravity])) 
                    (swap! app-state move-down)
                    (swap! app-state update-in [:score] inc)) 
                 100))  



(defn start-overlay [visible score resetfn]
  [:div
    [:input {:type :button
             :class (clojure.string/join " " (vector "start-button" (if visible "visible" "invisible")))
             :value (str "defying gravity for " score " ticks")
             :on-click resetfn}]])
  

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
      (map-indexed line-of-blocks (merge-block (:board @app-state) (:block @app-state) 2))
      [start-overlay (not (:alive @app-state)) (:score @app-state) #(swap! app-state reset)]]]
    
   (when (get-in @app-state [:settings :debug])
     [:div.debug
      [:input {:type :checkbox
               :name "Gravity"
               :defaultChecked true
               :on-click #(swap! app-state update-in [:settings :gravity] not)}]
      [:div (str @app-state)]])]) 



(defn mount-root []
  (r/render-component [board] 
    (.getElementById js/document "app")))

(defn on-js-reload [] 
  (mount-root))

(defn handle-arrow-keys! [event]
  (let [key-code (.-keyCode event)]
    (when (:alive @app-state)
      (case key-code
        37 (swap! app-state move-left)
        32 (swap! app-state rotate-left)
        38 (swap! app-state rotate-right)
        39 (swap! app-state move-right)
        40 (swap! app-state move-down)
        :default))))

(defonce listener (.addEventListener js/document "keydown" handle-arrow-keys!))

(mount-root)

