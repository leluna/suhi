// Compiled by ClojureScript 1.9.495 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__27638__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27638 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27639__i = 0, G__27639__a = new Array(arguments.length -  0);
while (G__27639__i < G__27639__a.length) {G__27639__a[G__27639__i] = arguments[G__27639__i + 0]; ++G__27639__i;}
  args = new cljs.core.IndexedSeq(G__27639__a,0);
} 
return G__27638__delegate.call(this,args);};
G__27638.cljs$lang$maxFixedArity = 0;
G__27638.cljs$lang$applyTo = (function (arglist__27640){
var args = cljs.core.seq(arglist__27640);
return G__27638__delegate(args);
});
G__27638.cljs$core$IFn$_invoke$arity$variadic = G__27638__delegate;
return G__27638;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__27641__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27641 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27642__i = 0, G__27642__a = new Array(arguments.length -  0);
while (G__27642__i < G__27642__a.length) {G__27642__a[G__27642__i] = arguments[G__27642__i + 0]; ++G__27642__i;}
  args = new cljs.core.IndexedSeq(G__27642__a,0);
} 
return G__27641__delegate.call(this,args);};
G__27641.cljs$lang$maxFixedArity = 0;
G__27641.cljs$lang$applyTo = (function (arglist__27643){
var args = cljs.core.seq(arglist__27643);
return G__27641__delegate(args);
});
G__27641.cljs$core$IFn$_invoke$arity$variadic = G__27641__delegate;
return G__27641;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1492960125524