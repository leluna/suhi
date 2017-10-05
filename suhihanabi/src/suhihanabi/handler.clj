(ns suhihanabi.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.adapter.jetty :refer [run-jetty]]))

(defroutes app-routes
  (GET "/" [] "Hallo Welt!")
  (GET "/lobby" [] "Welcome to the HANABI lobby!")
  (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes site-defaults))

(defn -main [& args]
  (defonce jetty (run-jetty (var app) {:port 8080 :join? false})))

;;(.stop jetty)


;;(-main)




