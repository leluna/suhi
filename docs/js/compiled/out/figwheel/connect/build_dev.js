// Compiled by ClojureScript 1.9.495 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('suhimadcat.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__41118__delegate = function (x){
if(cljs.core.truth_(suhimadcat.core.on_js_reload)){
return cljs.core.apply.call(null,suhimadcat.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'suhimadcat.core/on-js-reload' is missing");
}
};
var G__41118 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__41119__i = 0, G__41119__a = new Array(arguments.length -  0);
while (G__41119__i < G__41119__a.length) {G__41119__a[G__41119__i] = arguments[G__41119__i + 0]; ++G__41119__i;}
  x = new cljs.core.IndexedSeq(G__41119__a,0);
} 
return G__41118__delegate.call(this,x);};
G__41118.cljs$lang$maxFixedArity = 0;
G__41118.cljs$lang$applyTo = (function (arglist__41120){
var x = cljs.core.seq(arglist__41120);
return G__41118__delegate(x);
});
G__41118.cljs$core$IFn$_invoke$arity$variadic = G__41118__delegate;
return G__41118;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1492960187545