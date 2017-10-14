(ns suhihanabi.core
  (:require [suhihanabi.game.actions :as actions]))

(defonce game-state (atom actions/new-game))

(defn restart! []
  (reset! game-state actions/new-game))

(defn deal! []
  (swap! game-state actions/deal))

(defn end-turn! []
  (swap! game-state (comp actions/draw actions/next-player)))
