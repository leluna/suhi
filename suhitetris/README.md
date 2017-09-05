# suhitetris

A clojurescript implementation of tetris with weird features.

Learning project to get started with:

 * clojure/clojurescript
 * [reagent][]
 * [leiningen][]
 * [figwheel][]

Attempt to try  http://timothypratley.blogspot.de/2015/07/you-should-be-using-figwheelreagent.html

[reagent]: https://reagent-project.github.io/
[leiningen]: https://github.com/technomancy/leiningen
[figwheel]: https://github.com/bhauman/lein-figwheel

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
