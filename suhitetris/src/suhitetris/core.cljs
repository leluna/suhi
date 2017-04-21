(ns suhitetris.core
  (:require [reagent.core :as r]))

(enable-console-print!)

(def app-state (r/atom [""]))

(defn tetris-component []
  [:div
   [:p "this is a " 
    (for [mad @app-state]
      [:strong mad]) " cat"]
   [:div [:input {:type "button"
                  :value "Clickbait!" 
                  :on-click #(swap! app-state conj "mad")}]]])



;; in case I need to call this from JS
(defn ^:export run []
  (r/render [tetris-component]
            (js/document.getElementById "app")))

(defn on-js-reload []
  (run) 
)

  

