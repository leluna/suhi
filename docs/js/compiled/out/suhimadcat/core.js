// Compiled by ClojureScript 1.9.495 {}
goog.provide('suhimadcat.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof suhimadcat.core.app_state !== 'undefined'){
} else {
suhimadcat.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mood","mood",-616134094),(1),new cljs.core.Keyword(null,"hunger","hunger",-1187183907),(0)], null));
}
suhimadcat.core.mood_label = (function suhimadcat$core$mood_label(mood){
cljs.core.println.call(null,mood);

if((mood < (0))){
return "mad";
} else {
if((mood > (8))){
return "happy";
} else {
var G__41112 = mood;
switch (G__41112) {
case (0):
case (1):
return "sad";

break;
case (2):
case (3):
return "";

break;
case (4):
case (5):
case (6):
return "satisfied";

break;
case (7):
case (8):
return "purring";

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mood)].join('')));

}
}
}
});
suhimadcat.core.decrease_mood = (function suhimadcat$core$decrease_mood(current_state,n){
if((new cljs.core.Keyword(null,"mood","mood",-616134094).cljs$core$IFn$_invoke$arity$1(current_state) > (-10))){
return cljs.core.update_in.call(null,current_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mood","mood",-616134094)], null),(function (p1__41114_SHARP_){
return (p1__41114_SHARP_ - n);
}));
} else {
return current_state;
}
});
suhimadcat.core.increase_mood = (function suhimadcat$core$increase_mood(current_state,n){
return cljs.core.update_in.call(null,current_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mood","mood",-616134094)], null),(function (p1__41115_SHARP_){
var x__26713__auto__ = (p1__41115_SHARP_ + n);
var y__26714__auto__ = (15);
return ((x__26713__auto__ < y__26714__auto__) ? x__26713__auto__ : y__26714__auto__);
}));
});
if(typeof suhimadcat.core.tick !== 'undefined'){
} else {
suhimadcat.core.tick = setInterval((function (){
return cljs.core.swap_BANG_.call(null,suhimadcat.core.app_state,suhimadcat.core.decrease_mood,(1));
}),(2000));
}
suhimadcat.core.pet_cat_BANG_ = (function suhimadcat$core$pet_cat_BANG_(){
return cljs.core.swap_BANG_.call(null,suhimadcat.core.app_state,suhimadcat.core.increase_mood,(10));
});
suhimadcat.core.pet_cat_button = (function suhimadcat$core$pet_cat_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return suhimadcat.core.pet_cat_BANG_.call(null);
})], null),"pet"], null)], null);
});
suhimadcat.core.state_display = (function suhimadcat$core$state_display(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"A ",suhimadcat.core.mood_label.call(null,new cljs.core.Keyword(null,"mood","mood",-616134094).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,suhimadcat.core.app_state)))," kitty cat ... "], null);
});
suhimadcat.core.mad_cat = (function suhimadcat$core$mad_cat(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(2),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"xx-large",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"100px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [suhimadcat.core.state_display], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [suhimadcat.core.pet_cat_button], null)], null);
});
suhimadcat.core.mount_root = (function suhimadcat$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [suhimadcat.core.mad_cat], null),document.getElementById("app"));
});
suhimadcat.core.on_js_reload = (function suhimadcat$core$on_js_reload(){
return suhimadcat.core.mount_root.call(null);
});
suhimadcat.core.mount_root.call(null);

//# sourceMappingURL=core.js.map?rel=1492960187463