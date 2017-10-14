(ns suhihanabi.actions-test
  (:require [clojure.test :refer :all]
            [suhihanabi.game.actions :refer :all]
            [suhihanabi.shorthands :refer :all]))

(def test-hand [{:color :green
                 :number 1}
                {:color :red
                 :number 1}
                {:color :green
                 :number 2}
                {:color :yellow
                 :number 5}])

(deftest t-new-deck
  (testing "total number of cards"
    (is (= (count (new-deck)) 50))))


(deftest t-remove-card
  (testing "if index exists"
    (let [result (remove-card 1 test-hand)]
      (is (= (count result) 3))
      (is (.contains test-hand {:color :red :number 1}) false)))
  (testing "if index does not exists"
    (let [result (remove-card 6 test-hand)]
      (is (= (count result) 4)))))


(deftest t-draw
  (testing "hand of current player is not full"
    (let [result (draw (new-game))
          player (:current-player result)
          new-hand (get-in result [:players player])]
      (is (= (count new-hand) 1))
      (is (= (count (:deck result)) 49))))
  (testing "hand of current player is full"
    (let [result (nth (iterate draw (new-game)) 4)
          player (:current-player result)
          new-hand (get-in result [:players player])]
      (is (= (count new-hand) 4))
      (is (= (count (:deck result)) 46)))))


(deftest t-next-player
  (testing "not last player"
    (let [state  (assoc-in (new-game) [:current-player] 0)
          result (next-player state)]
      (is (= (:current-player result) 1))))
  (testing "last player"
    (let [state (assoc-in (new-game) [:current-player] 3)
          result (next-player state)]
      (is (= (:current-player result) 0)))))


(deftest t-deal
  (let [state (new-game)
        start-player (:current-player state)
        result (deal state)
        ndeck (count (:deck state))]
    (testing "every player should get 4 cards from deck"
      (is (every? #(= (count %) 4) (vals (:players result)))))
    (testing "deck should have less cards"
      (is (= (count (:deck result)) (- ndeck 16))))
    (testing "it should be the turn of the start player again"
      (is (= start-player (:current-player result))))))


#_(deftest t-play
    (let [state (deal (new-game))
          initial-hand (get-in state [:players (:current-player state)])]
      (testing "valid play")
      (let [result (play 0 state)]
        (is (= (get-in result [:table :green]) 1)))))
