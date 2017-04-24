# suhimadcat

A kitty cat ...

## Overview

Goals:

1. mood & petting

- a cat with constantly dropping mood
- mood can be negative and caps in both direction
- petting increases mood for a fixed amount
- mood is not displayed exactly but on certain levels

2. hunger (fullness) & feeding

- fullness feature unlocks after certain times of petting
- a message "The cat is hungry" appears on unlock
- fullness drops at a constant rate
- fullness is a non negative value and caps at a certain value
- hunger is displayed in certain levels for certain fullness values
- feeding increases mood and fullness if fullness is not capped, drops mood otherwise

3. mood modifier

- mood influences rate of fullness and mood (linearly)
- happy cat loose mood slowlier but loose fullness quicker
- (for later: happiness should also increase other productivity rates)

4. cool down for petting/feeding

- petting and feeding are disabled while on cool down
- cooldown is display by background color

Extras/Ideas/Problems:

- feature: a more detailed display of cat state
- problem: player needs an objective after some time
- idea: player is a game tester and plays games (other learning projects) to unlock new features
- idea: player gains ideas (features) from games, such as crafting, gardening, statistics
- idea: if a hidden negative value of mood is reached, pet button disappears upon clicking and the following text appears "The kitty cat is so mad that it bares her claws and scratches your hands, arms and face. You die in excruciating pain..." 

## Setup

To get an interactive development environment run:

    lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    lein clean

To create a production build run:

    lein do clean, cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL. 

## License

Copyright © 2014 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
