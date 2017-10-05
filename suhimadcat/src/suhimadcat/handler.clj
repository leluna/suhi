(ns suhimadcat.handler
  (:use compojure.core)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]))

(defn- str-to [num]
  (apply str (interpose ", " (range 1 (inc num)))))

(defn- str-from [num]
  (apply str (interpose ", " (reverse (range 1 (inc num))))))

(defroutes app
  (GET "/count-up/:to" [to] (str-to (Integer. to)))
  (GET "/count-down/:from" [from] (str-from (Integer. from)))
  (route/resources "/")
  (route/not-found "404"))
