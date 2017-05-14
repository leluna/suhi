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
                            :block {:position [5 0]}
                            :settings {:gravity true}}))

(defn move-down [[v1 v2]]
  [(min (inc v1) 21) v2])

(defn move-right [[v1 v2]]
  [ v1 (min (inc v2) 9)])

(defn move-left [[v1 v2]]
  [v1 (max (inc v2) 0)])

(defn drop-block [state]
  (update-in state [:block :position] move-down))


(defonce tick! (js/setInterval
                #(when (get-in @app-state [:settings :gravity]) (swap! app-state drop-block)) 750))

(defn merge-block [graveyard block]
  (assoc-in graveyard (:position block) 1))
  


(defn line-of-blocks [index values]
  ^{:key index}[:div.line]
    (map-indexed (fn [i v]
                   ^{:key i}[:div.cell (cond (= v 0) {:class "dead"}                                          
                                             (= v 1) {:class "alife"}
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



(defn handle-arrow-keys [event]
  (let [key-code (.-keyCode event)]
    (cond (= key-code 37) (println "left arrow key pressed")
          (= key-code 38) (println "up arrow key pressed")
          (= key-code 39) (println "right arrow key pressed")
          (= key-code 40) (println "down arrow key pressed"))))

(.addEventListener js/document "keydown" handle-arrow-keys)

(mount-root)

