(ns suhitetris.core
  (:require [reagent.core :as r]))

(enable-console-print!)

(def pieces {})


(def app-state (r/atom {:board [[nil nil 1 nil nil nil nil nil nil nil]
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
                                [nil nil nil nil nil nil nil nil nil nil]]}))

(defn board []
  [:div.container 
   [:div 
    (for [line (:board @app-state)]
      [:div.line (for [cell line]
                   [:div.cell {:class (if cell "block" "empty")}])])]]) 
   

(defn mount-root []
  (r/render-component [board] 
    (.getElementById js/document "app")))

(defn on-js-reload [] 
  (mount-root))

(mount-root)
