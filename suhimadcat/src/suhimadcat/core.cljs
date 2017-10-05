(ns suhimadcat.core
  (:require [reagent.core :as r]))

(enable-console-print!)

(defonce app-state (r/atom {:mood 1
                            :hunger 0}))

(defn mood-label [mood]
  (if (< mood 0) "mad"
    (if (> mood 11) "happy"
      (case mood
        (0 1) "sad"
        (2 3 4 5) ""
        (6 7 8) "satisfied"
        (9 10 11) "purring"))))

(defn decrease-mood [current-state n]
  (if (> (:mood current-state) -10) (update-in current-state [:mood] #(- % n))
    current-state))


(defn increase-mood [current-state n]
  (update-in current-state [:mood] #(min (+ % n) 15)))

(defonce tick (js/setInterval #(swap! app-state decrease-mood 1) 2000))




(defn pet-cat! []
  (swap! app-state increase-mood 1))

(defn pet-cat-button []
  [:div
      [:button {:type "button"
                :on-click #(pet-cat!)}
       "pet"]])

(defn state-display []
   [:span
    "A " (mood-label (:mood @app-state)) " kitty cat ... "])


(defn mad-cat []
  [:div
   {:style {:line-height 2
            :font-size "xx-large"
            :padding-top "100px"
            :text-align "center"}}
   [state-display]
   [pet-cat-button]])


(defn mount-root []
  (r/render [mad-cat] (.getElementById js/document "app")))

(defn on-js-reload []
  (mount-root))

(mount-root)
