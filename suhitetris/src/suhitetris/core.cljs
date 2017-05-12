(ns suhitetris.core
  (:require [reagent.core :as r]))

(enable-console-print!)

(def app-state (r/atom {:text "dumm"}))

(defn mutate-text [input]
  (println @app-state)
  (apply str (conj (butlast input) "mad")))

(defn my-cute-dummy []
  [:div
    "Hi, I am cute " (:text @app-state) " kitty cat!"
    [:div
      [:input {:type "button"
               :value "Transform me!"
               :on-click #(swap! app-state update-in [:text] mutate-text)}]]])

(defn mount-root []
  (r/render-component [my-cute-dummy] 
    (.getElementById js/document "app")))

(defn on-js-reload [] 
  (mount-root))

(mount-root)
