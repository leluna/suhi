(ns suhihanabi.game-test
  (:require [clojure.test :refer :all]
            [suhihanabi.game :as game]))

(def test-hand [{:color :green
                 :number 1}
                {:color :red
                 :number 1}
                {:color :green
                 :number 2}
                {:color :yellow
                 :number 5}])

(deftest full-deck
  (testing "total number of cards"
    (is (= (count game/full-deck) 50))))

(deftest remove-card
  (testing "index exists"
    (let [result (game/remove-card 1 test-hand)]
      (is (= (count result) 3))
      (is (.contains test-hand {:color :red :number 1}) false)))
  (testing "index does not exists"
    (let [result (game/remove-card 6 test-hand)]
      (is (= (count result) 4)))))


(deftest draw
  (testing "hand of current player is not full"
    (let [result (game/draw game/initial-state)
          player (:current-player result)
          new-hand (get-in result [:players player])]
      (is (= (count new-hand) 1))
      (is (= (count (:deck result)) 49))))
  (testing "hand of current player is full"
    (let [result (nth (iterate game/draw game/initial-state) 4)
          player (:current-player result)
          new-hand (get-in result [:players player])]
      (is (= (count new-hand) 4))
      (is (= (count (:deck result)) 46)))))
