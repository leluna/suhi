(ns suhitetris.core-test
  (:require [suhitetris.core :as tetris]
            [cljs.test :as t :include-macros true]))


(def test-state (tetris/initial-state))

(t/deftest test-rotate-left
  (t/is (= (:board (tetris/rotate-left test-state))
           (:board (tetris/initial-state)))))
