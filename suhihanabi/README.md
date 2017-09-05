# suhihanabi

A clojure/clojurescript implementation of Hanabi.

Learning project to get started with:

 * server client application with [ring][] + [compojure][]
 * any library for WebSocket??
 * [om][]
 * [heroku][]?!

and to improve noob skills in:

 * clojure/clojurescript
 * [leiningen][]
 * [figwheel][]

## Rules

### Artefacts

 * 50 cards: {1, 1, 1, 2, 2, 3, 3, 4, 4, 5} x colors
   * colors: {red, yellow, green, blue, white}
 * 8 hints
 * 3 storms
 * 4 players 

Global state consists of:

 * Pile of untouched cards (hidden)
 * Pile of discarded cards (visible)
 * Piles of played cards ordered by color (visible)
 * Number of storms (< 3) (visible)
 * Number of hints (<= 8) (visible)
 * 4 cards per player (visible to all but the owner of the card)
 * A hint (?) consisting of player, positions, color/number (visible)

### Start of game

1. All cards are shuffled
2. Each player gets 4 cards
3. Number of storms is set to 0
4. Number of hints is set to 8
5. Piles of played cards consists of 0s

### Actions

If the player has at least one card: 

* discard(card)
* play(card)

If number of hints > 0:

* hint(player, number/color)

####discard(card)

1. Card is put to discard pile
2. Player draws a new card from untouched cards if it is not empty
3. Number of hints increases by 1 if < 8

####play(card)

If number of the cards matches (number of any card in the piles of played cards) + 1:

* Card is added to the matching pile of played card
* Player draws a new card from untouched cards if it is not empty
* Number of hints increases by 1 if the number of the card is a 5

####hint(player, number/color)

* Show hint with positions of all cards of the chosen player that matches the given number/color
* Number of hints decreases by one 

### End of game

* One player cannot make any valid action
* Number of storms >= 3

### Score

The score is 0 if number of storms >= 3. Otherwise the score is the sum of the highest card of the piles of played cards.


## Goals

1. Playble server client application
2. Beautiful minimal UI with [om] (or reagent)
3. Deploy to [heroku]???

## Running

You will need [Leiningen][] 2.0.0 or above installed.

To start a web server for the application, run:

    lein ring server

[ring]: https://github.com/ring-clojure
[compojure]: https://github.com/weavejester/compojure
[leiningen]: https://github.com/technomancy/leiningen
[figwheel]: https://github.com/bhauman/lein-figwheel
[om]: https://github.com/omcljs/om
[heroku]: https://www.heroku.com/