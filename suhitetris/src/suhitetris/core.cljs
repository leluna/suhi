(ns suhitetris.core
  (:require [reagent.core :as r]))

(enable-console-print!)

(println "This text is printed from src/suhitetris/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Blabla"}))


(defn tetris-component []
  [:div
   [:p "I am a component!"]
  ["" [:strong "bold"]
    [:span {:style {:color "red"}} " and red "] "text."]])

;; in case I need to call this from JS
(defn ^:export run []
  (r/render [tetris-component]
            (js/document.getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  (run)
)+
   [:p "I am a component!"]
  

