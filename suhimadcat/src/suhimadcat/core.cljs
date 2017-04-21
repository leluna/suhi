(ns suhimadcat.core
  (:require [reagent.core :as r]))

(enable-console-print!)

(def app-state (r/atom {:text ""}))

(defn mutate-text [input]
  (apply str (conj (butlast input) "mad")))

(defn kitty-cat []
  [:div
    "I am " (:text @app-state) " kitty cat."
    [:div
      [:input {:type "button"
               :value "Pet me"
               :on-click #(swap! app-state update-in [:text] mutate-text)}]]])

(defn on-js-reload []
  (r/render-component [kitty-cat] 
    (.getElementById js/document "app")))
