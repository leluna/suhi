// Compiled by ClojureScript 1.9.495 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__26981__auto__,writer__26982__auto__,opt__26983__auto__){
return cljs.core._write.call(null,writer__26982__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__27490__auto__ = [];
var len__27483__auto___34984 = arguments.length;
var i__27484__auto___34985 = (0);
while(true){
if((i__27484__auto___34985 < len__27483__auto___34984)){
args__27490__auto__.push((arguments[i__27484__auto___34985]));

var G__34986 = (i__27484__auto___34985 + (1));
i__27484__auto___34985 = G__34986;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq34983){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34983));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__27490__auto__ = [];
var len__27483__auto___34988 = arguments.length;
var i__27484__auto___34989 = (0);
while(true){
if((i__27484__auto___34989 < len__27483__auto___34988)){
args__27490__auto__.push((arguments[i__27484__auto___34989]));

var G__34990 = (i__27484__auto___34989 + (1));
i__27484__auto___34989 = G__34990;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq34987){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34987));
});

var g_QMARK__34991 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_34992 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__34991){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__34991))
,null));
var mkg_34993 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__34991,g_34992){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__34991,g_34992))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__34991,g_34992,mkg_34993){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__34991).call(null,x);
});})(g_QMARK__34991,g_34992,mkg_34993))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__34991,g_34992,mkg_34993){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_34993).call(null,gfn);
});})(g_QMARK__34991,g_34992,mkg_34993))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__34991,g_34992,mkg_34993){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_34992).call(null,generator);
});})(g_QMARK__34991,g_34992,mkg_34993))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__34955__auto___35013 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__34955__auto___35013){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35014 = arguments.length;
var i__27484__auto___35015 = (0);
while(true){
if((i__27484__auto___35015 < len__27483__auto___35014)){
args__27490__auto__.push((arguments[i__27484__auto___35015]));

var G__35016 = (i__27484__auto___35015 + (1));
i__27484__auto___35015 = G__35016;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34955__auto___35013))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34955__auto___35013){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34955__auto___35013),args);
});})(g__34955__auto___35013))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__34955__auto___35013){
return (function (seq34994){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34994));
});})(g__34955__auto___35013))
;


var g__34955__auto___35017 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__34955__auto___35017){
return (function cljs$spec$impl$gen$list(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35018 = arguments.length;
var i__27484__auto___35019 = (0);
while(true){
if((i__27484__auto___35019 < len__27483__auto___35018)){
args__27490__auto__.push((arguments[i__27484__auto___35019]));

var G__35020 = (i__27484__auto___35019 + (1));
i__27484__auto___35019 = G__35020;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34955__auto___35017))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34955__auto___35017){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34955__auto___35017),args);
});})(g__34955__auto___35017))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__34955__auto___35017){
return (function (seq34995){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34995));
});})(g__34955__auto___35017))
;


var g__34955__auto___35021 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__34955__auto___35021){
return (function cljs$spec$impl$gen$map(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35022 = arguments.length;
var i__27484__auto___35023 = (0);
while(true){
if((i__27484__auto___35023 < len__27483__auto___35022)){
args__27490__auto__.push((arguments[i__27484__auto___35023]));

var G__35024 = (i__27484__auto___35023 + (1));
i__27484__auto___35023 = G__35024;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34955__auto___35021))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34955__auto___35021){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34955__auto___35021),args);
});})(g__34955__auto___35021))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__34955__auto___35021){
return (function (seq34996){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34996));
});})(g__34955__auto___35021))
;


var g__34955__auto___35025 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__34955__auto___35025){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35026 = arguments.length;
var i__27484__auto___35027 = (0);
while(true){
if((i__27484__auto___35027 < len__27483__auto___35026)){
args__27490__auto__.push((arguments[i__27484__auto___35027]));

var G__35028 = (i__27484__auto___35027 + (1));
i__27484__auto___35027 = G__35028;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34955__auto___35025))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34955__auto___35025){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34955__auto___35025),args);
});})(g__34955__auto___35025))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__34955__auto___35025){
return (function (seq34997){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34997));
});})(g__34955__auto___35025))
;


var g__34955__auto___35029 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__34955__auto___35029){
return (function cljs$spec$impl$gen$set(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35030 = arguments.length;
var i__27484__auto___35031 = (0);
while(true){
if((i__27484__auto___35031 < len__27483__auto___35030)){
args__27490__auto__.push((arguments[i__27484__auto___35031]));

var G__35032 = (i__27484__auto___35031 + (1));
i__27484__auto___35031 = G__35032;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34955__auto___35029))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34955__auto___35029){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34955__auto___35029),args);
});})(g__34955__auto___35029))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__34955__auto___35029){
return (function (seq34998){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34998));
});})(g__34955__auto___35029))
;


var g__34955__auto___35033 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__34955__auto___35033){
return (function cljs$spec$impl$gen$vector(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35034 = arguments.length;
var i__27484__auto___35035 = (0);
while(true){
if((i__27484__auto___35035 < len__27483__auto___35034)){
args__27490__auto__.push((arguments[i__27484__auto___35035]));

var G__35036 = (i__27484__auto___35035 + (1));
i__27484__auto___35035 = G__35036;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34955__auto___35033))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34955__auto___35033){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34955__auto___35033),args);
});})(g__34955__auto___35033))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__34955__auto___35033){
return (function (seq34999){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34999));
});})(g__34955__auto___35033))
;


var g__34955__auto___35037 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__34955__auto___35037){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35038 = arguments.length;
var i__27484__auto___35039 = (0);
while(true){
if((i__27484__auto___35039 < len__27483__auto___35038)){
args__27490__auto__.push((arguments[i__27484__auto___35039]));

var G__35040 = (i__27484__auto___35039 + (1));
i__27484__auto___35039 = G__35040;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34955__auto___35037))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34955__auto___35037){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34955__auto___35037),args);
});})(g__34955__auto___35037))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__34955__auto___35037){
return (function (seq35000){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35000));
});})(g__34955__auto___35037))
;


var g__34955__auto___35041 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__34955__auto___35041){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35042 = arguments.length;
var i__27484__auto___35043 = (0);
while(true){
if((i__27484__auto___35043 < len__27483__auto___35042)){
args__27490__auto__.push((arguments[i__27484__auto___35043]));

var G__35044 = (i__27484__auto___35043 + (1));
i__27484__auto___35043 = G__35044;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34955__auto___35041))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34955__auto___35041){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34955__auto___35041),args);
});})(g__34955__auto___35041))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__34955__auto___35041){
return (function (seq35001){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35001));
});})(g__34955__auto___35041))
;


var g__34955__auto___35045 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__34955__auto___35045){
return (function cljs$spec$impl$gen$elements(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35046 = arguments.length;
var i__27484__auto___35047 = (0);
while(true){
if((i__27484__auto___35047 < len__27483__auto___35046)){
args__27490__auto__.push((arguments[i__27484__auto___35047]));

var G__35048 = (i__27484__auto___35047 + (1));
i__27484__auto___35047 = G__35048;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34955__auto___35045))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34955__auto___35045){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34955__auto___35045),args);
});})(g__34955__auto___35045))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__34955__auto___35045){
return (function (seq35002){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35002));
});})(g__34955__auto___35045))
;


var g__34955__auto___35049 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__34955__auto___35049){
return (function cljs$spec$impl$gen$bind(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35050 = arguments.length;
var i__27484__auto___35051 = (0);
while(true){
if((i__27484__auto___35051 < len__27483__auto___35050)){
args__27490__auto__.push((arguments[i__27484__auto___35051]));

var G__35052 = (i__27484__auto___35051 + (1));
i__27484__auto___35051 = G__35052;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34955__auto___35049))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34955__auto___35049){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34955__auto___35049),args);
});})(g__34955__auto___35049))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__34955__auto___35049){
return (function (seq35003){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35003));
});})(g__34955__auto___35049))
;


var g__34955__auto___35053 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__34955__auto___35053){
return (function cljs$spec$impl$gen$choose(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35054 = arguments.length;
var i__27484__auto___35055 = (0);
while(true){
if((i__27484__auto___35055 < len__27483__auto___35054)){
args__27490__auto__.push((arguments[i__27484__auto___35055]));

var G__35056 = (i__27484__auto___35055 + (1));
i__27484__auto___35055 = G__35056;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34955__auto___35053))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34955__auto___35053){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34955__auto___35053),args);
});})(g__34955__auto___35053))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__34955__auto___35053){
return (function (seq35004){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35004));
});})(g__34955__auto___35053))
;


var g__34955__auto___35057 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__34955__auto___35057){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35058 = arguments.length;
var i__27484__auto___35059 = (0);
while(true){
if((i__27484__auto___35059 < len__27483__auto___35058)){
args__27490__auto__.push((arguments[i__27484__auto___35059]));

var G__35060 = (i__27484__auto___35059 + (1));
i__27484__auto___35059 = G__35060;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34955__auto___35057))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34955__auto___35057){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34955__auto___35057),args);
});})(g__34955__auto___35057))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__34955__auto___35057){
return (function (seq35005){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35005));
});})(g__34955__auto___35057))
;


var g__34955__auto___35061 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__34955__auto___35061){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35062 = arguments.length;
var i__27484__auto___35063 = (0);
while(true){
if((i__27484__auto___35063 < len__27483__auto___35062)){
args__27490__auto__.push((arguments[i__27484__auto___35063]));

var G__35064 = (i__27484__auto___35063 + (1));
i__27484__auto___35063 = G__35064;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34955__auto___35061))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34955__auto___35061){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34955__auto___35061),args);
});})(g__34955__auto___35061))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__34955__auto___35061){
return (function (seq35006){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35006));
});})(g__34955__auto___35061))
;


var g__34955__auto___35065 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__34955__auto___35065){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35066 = arguments.length;
var i__27484__auto___35067 = (0);
while(true){
if((i__27484__auto___35067 < len__27483__auto___35066)){
args__27490__auto__.push((arguments[i__27484__auto___35067]));

var G__35068 = (i__27484__auto___35067 + (1));
i__27484__auto___35067 = G__35068;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34955__auto___35065))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34955__auto___35065){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34955__auto___35065),args);
});})(g__34955__auto___35065))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__34955__auto___35065){
return (function (seq35007){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35007));
});})(g__34955__auto___35065))
;


var g__34955__auto___35069 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__34955__auto___35069){
return (function cljs$spec$impl$gen$sample(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35070 = arguments.length;
var i__27484__auto___35071 = (0);
while(true){
if((i__27484__auto___35071 < len__27483__auto___35070)){
args__27490__auto__.push((arguments[i__27484__auto___35071]));

var G__35072 = (i__27484__auto___35071 + (1));
i__27484__auto___35071 = G__35072;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34955__auto___35069))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34955__auto___35069){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34955__auto___35069),args);
});})(g__34955__auto___35069))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__34955__auto___35069){
return (function (seq35008){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35008));
});})(g__34955__auto___35069))
;


var g__34955__auto___35073 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__34955__auto___35073){
return (function cljs$spec$impl$gen$return(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35074 = arguments.length;
var i__27484__auto___35075 = (0);
while(true){
if((i__27484__auto___35075 < len__27483__auto___35074)){
args__27490__auto__.push((arguments[i__27484__auto___35075]));

var G__35076 = (i__27484__auto___35075 + (1));
i__27484__auto___35075 = G__35076;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34955__auto___35073))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34955__auto___35073){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34955__auto___35073),args);
});})(g__34955__auto___35073))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__34955__auto___35073){
return (function (seq35009){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35009));
});})(g__34955__auto___35073))
;


var g__34955__auto___35077 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__34955__auto___35077){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35078 = arguments.length;
var i__27484__auto___35079 = (0);
while(true){
if((i__27484__auto___35079 < len__27483__auto___35078)){
args__27490__auto__.push((arguments[i__27484__auto___35079]));

var G__35080 = (i__27484__auto___35079 + (1));
i__27484__auto___35079 = G__35080;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34955__auto___35077))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34955__auto___35077){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34955__auto___35077),args);
});})(g__34955__auto___35077))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__34955__auto___35077){
return (function (seq35010){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35010));
});})(g__34955__auto___35077))
;


var g__34955__auto___35081 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__34955__auto___35081){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35082 = arguments.length;
var i__27484__auto___35083 = (0);
while(true){
if((i__27484__auto___35083 < len__27483__auto___35082)){
args__27490__auto__.push((arguments[i__27484__auto___35083]));

var G__35084 = (i__27484__auto___35083 + (1));
i__27484__auto___35083 = G__35084;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34955__auto___35081))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34955__auto___35081){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34955__auto___35081),args);
});})(g__34955__auto___35081))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__34955__auto___35081){
return (function (seq35011){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35011));
});})(g__34955__auto___35081))
;


var g__34955__auto___35085 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__34955__auto___35085){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35086 = arguments.length;
var i__27484__auto___35087 = (0);
while(true){
if((i__27484__auto___35087 < len__27483__auto___35086)){
args__27490__auto__.push((arguments[i__27484__auto___35087]));

var G__35088 = (i__27484__auto___35087 + (1));
i__27484__auto___35087 = G__35088;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34955__auto___35085))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34955__auto___35085){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34955__auto___35085),args);
});})(g__34955__auto___35085))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__34955__auto___35085){
return (function (seq35012){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35012));
});})(g__34955__auto___35085))
;

var g__34968__auto___35110 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__34968__auto___35110){
return (function cljs$spec$impl$gen$any(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35111 = arguments.length;
var i__27484__auto___35112 = (0);
while(true){
if((i__27484__auto___35112 < len__27483__auto___35111)){
args__27490__auto__.push((arguments[i__27484__auto___35112]));

var G__35113 = (i__27484__auto___35112 + (1));
i__27484__auto___35112 = G__35113;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34968__auto___35110))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34968__auto___35110){
return (function (args){
return cljs.core.deref.call(null,g__34968__auto___35110);
});})(g__34968__auto___35110))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__34968__auto___35110){
return (function (seq35089){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35089));
});})(g__34968__auto___35110))
;


var g__34968__auto___35114 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__34968__auto___35114){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35115 = arguments.length;
var i__27484__auto___35116 = (0);
while(true){
if((i__27484__auto___35116 < len__27483__auto___35115)){
args__27490__auto__.push((arguments[i__27484__auto___35116]));

var G__35117 = (i__27484__auto___35116 + (1));
i__27484__auto___35116 = G__35117;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34968__auto___35114))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34968__auto___35114){
return (function (args){
return cljs.core.deref.call(null,g__34968__auto___35114);
});})(g__34968__auto___35114))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__34968__auto___35114){
return (function (seq35090){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35090));
});})(g__34968__auto___35114))
;


var g__34968__auto___35118 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__34968__auto___35118){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35119 = arguments.length;
var i__27484__auto___35120 = (0);
while(true){
if((i__27484__auto___35120 < len__27483__auto___35119)){
args__27490__auto__.push((arguments[i__27484__auto___35120]));

var G__35121 = (i__27484__auto___35120 + (1));
i__27484__auto___35120 = G__35121;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34968__auto___35118))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34968__auto___35118){
return (function (args){
return cljs.core.deref.call(null,g__34968__auto___35118);
});})(g__34968__auto___35118))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__34968__auto___35118){
return (function (seq35091){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35091));
});})(g__34968__auto___35118))
;


var g__34968__auto___35122 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__34968__auto___35122){
return (function cljs$spec$impl$gen$char(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35123 = arguments.length;
var i__27484__auto___35124 = (0);
while(true){
if((i__27484__auto___35124 < len__27483__auto___35123)){
args__27490__auto__.push((arguments[i__27484__auto___35124]));

var G__35125 = (i__27484__auto___35124 + (1));
i__27484__auto___35124 = G__35125;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34968__auto___35122))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34968__auto___35122){
return (function (args){
return cljs.core.deref.call(null,g__34968__auto___35122);
});})(g__34968__auto___35122))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__34968__auto___35122){
return (function (seq35092){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35092));
});})(g__34968__auto___35122))
;


var g__34968__auto___35126 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__34968__auto___35126){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35127 = arguments.length;
var i__27484__auto___35128 = (0);
while(true){
if((i__27484__auto___35128 < len__27483__auto___35127)){
args__27490__auto__.push((arguments[i__27484__auto___35128]));

var G__35129 = (i__27484__auto___35128 + (1));
i__27484__auto___35128 = G__35129;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34968__auto___35126))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34968__auto___35126){
return (function (args){
return cljs.core.deref.call(null,g__34968__auto___35126);
});})(g__34968__auto___35126))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__34968__auto___35126){
return (function (seq35093){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35093));
});})(g__34968__auto___35126))
;


var g__34968__auto___35130 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__34968__auto___35130){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35131 = arguments.length;
var i__27484__auto___35132 = (0);
while(true){
if((i__27484__auto___35132 < len__27483__auto___35131)){
args__27490__auto__.push((arguments[i__27484__auto___35132]));

var G__35133 = (i__27484__auto___35132 + (1));
i__27484__auto___35132 = G__35133;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34968__auto___35130))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34968__auto___35130){
return (function (args){
return cljs.core.deref.call(null,g__34968__auto___35130);
});})(g__34968__auto___35130))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__34968__auto___35130){
return (function (seq35094){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35094));
});})(g__34968__auto___35130))
;


var g__34968__auto___35134 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__34968__auto___35134){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35135 = arguments.length;
var i__27484__auto___35136 = (0);
while(true){
if((i__27484__auto___35136 < len__27483__auto___35135)){
args__27490__auto__.push((arguments[i__27484__auto___35136]));

var G__35137 = (i__27484__auto___35136 + (1));
i__27484__auto___35136 = G__35137;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34968__auto___35134))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34968__auto___35134){
return (function (args){
return cljs.core.deref.call(null,g__34968__auto___35134);
});})(g__34968__auto___35134))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__34968__auto___35134){
return (function (seq35095){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35095));
});})(g__34968__auto___35134))
;


var g__34968__auto___35138 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__34968__auto___35138){
return (function cljs$spec$impl$gen$double(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35139 = arguments.length;
var i__27484__auto___35140 = (0);
while(true){
if((i__27484__auto___35140 < len__27483__auto___35139)){
args__27490__auto__.push((arguments[i__27484__auto___35140]));

var G__35141 = (i__27484__auto___35140 + (1));
i__27484__auto___35140 = G__35141;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34968__auto___35138))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34968__auto___35138){
return (function (args){
return cljs.core.deref.call(null,g__34968__auto___35138);
});})(g__34968__auto___35138))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__34968__auto___35138){
return (function (seq35096){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35096));
});})(g__34968__auto___35138))
;


var g__34968__auto___35142 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__34968__auto___35142){
return (function cljs$spec$impl$gen$int(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35143 = arguments.length;
var i__27484__auto___35144 = (0);
while(true){
if((i__27484__auto___35144 < len__27483__auto___35143)){
args__27490__auto__.push((arguments[i__27484__auto___35144]));

var G__35145 = (i__27484__auto___35144 + (1));
i__27484__auto___35144 = G__35145;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34968__auto___35142))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34968__auto___35142){
return (function (args){
return cljs.core.deref.call(null,g__34968__auto___35142);
});})(g__34968__auto___35142))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__34968__auto___35142){
return (function (seq35097){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35097));
});})(g__34968__auto___35142))
;


var g__34968__auto___35146 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__34968__auto___35146){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35147 = arguments.length;
var i__27484__auto___35148 = (0);
while(true){
if((i__27484__auto___35148 < len__27483__auto___35147)){
args__27490__auto__.push((arguments[i__27484__auto___35148]));

var G__35149 = (i__27484__auto___35148 + (1));
i__27484__auto___35148 = G__35149;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34968__auto___35146))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34968__auto___35146){
return (function (args){
return cljs.core.deref.call(null,g__34968__auto___35146);
});})(g__34968__auto___35146))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__34968__auto___35146){
return (function (seq35098){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35098));
});})(g__34968__auto___35146))
;


var g__34968__auto___35150 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__34968__auto___35150){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35151 = arguments.length;
var i__27484__auto___35152 = (0);
while(true){
if((i__27484__auto___35152 < len__27483__auto___35151)){
args__27490__auto__.push((arguments[i__27484__auto___35152]));

var G__35153 = (i__27484__auto___35152 + (1));
i__27484__auto___35152 = G__35153;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34968__auto___35150))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34968__auto___35150){
return (function (args){
return cljs.core.deref.call(null,g__34968__auto___35150);
});})(g__34968__auto___35150))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__34968__auto___35150){
return (function (seq35099){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35099));
});})(g__34968__auto___35150))
;


var g__34968__auto___35154 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__34968__auto___35154){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35155 = arguments.length;
var i__27484__auto___35156 = (0);
while(true){
if((i__27484__auto___35156 < len__27483__auto___35155)){
args__27490__auto__.push((arguments[i__27484__auto___35156]));

var G__35157 = (i__27484__auto___35156 + (1));
i__27484__auto___35156 = G__35157;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34968__auto___35154))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34968__auto___35154){
return (function (args){
return cljs.core.deref.call(null,g__34968__auto___35154);
});})(g__34968__auto___35154))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__34968__auto___35154){
return (function (seq35100){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35100));
});})(g__34968__auto___35154))
;


var g__34968__auto___35158 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__34968__auto___35158){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35159 = arguments.length;
var i__27484__auto___35160 = (0);
while(true){
if((i__27484__auto___35160 < len__27483__auto___35159)){
args__27490__auto__.push((arguments[i__27484__auto___35160]));

var G__35161 = (i__27484__auto___35160 + (1));
i__27484__auto___35160 = G__35161;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34968__auto___35158))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34968__auto___35158){
return (function (args){
return cljs.core.deref.call(null,g__34968__auto___35158);
});})(g__34968__auto___35158))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__34968__auto___35158){
return (function (seq35101){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35101));
});})(g__34968__auto___35158))
;


var g__34968__auto___35162 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__34968__auto___35162){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35163 = arguments.length;
var i__27484__auto___35164 = (0);
while(true){
if((i__27484__auto___35164 < len__27483__auto___35163)){
args__27490__auto__.push((arguments[i__27484__auto___35164]));

var G__35165 = (i__27484__auto___35164 + (1));
i__27484__auto___35164 = G__35165;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34968__auto___35162))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34968__auto___35162){
return (function (args){
return cljs.core.deref.call(null,g__34968__auto___35162);
});})(g__34968__auto___35162))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__34968__auto___35162){
return (function (seq35102){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35102));
});})(g__34968__auto___35162))
;


var g__34968__auto___35166 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__34968__auto___35166){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35167 = arguments.length;
var i__27484__auto___35168 = (0);
while(true){
if((i__27484__auto___35168 < len__27483__auto___35167)){
args__27490__auto__.push((arguments[i__27484__auto___35168]));

var G__35169 = (i__27484__auto___35168 + (1));
i__27484__auto___35168 = G__35169;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34968__auto___35166))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34968__auto___35166){
return (function (args){
return cljs.core.deref.call(null,g__34968__auto___35166);
});})(g__34968__auto___35166))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__34968__auto___35166){
return (function (seq35103){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35103));
});})(g__34968__auto___35166))
;


var g__34968__auto___35170 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__34968__auto___35170){
return (function cljs$spec$impl$gen$string(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35171 = arguments.length;
var i__27484__auto___35172 = (0);
while(true){
if((i__27484__auto___35172 < len__27483__auto___35171)){
args__27490__auto__.push((arguments[i__27484__auto___35172]));

var G__35173 = (i__27484__auto___35172 + (1));
i__27484__auto___35172 = G__35173;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34968__auto___35170))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34968__auto___35170){
return (function (args){
return cljs.core.deref.call(null,g__34968__auto___35170);
});})(g__34968__auto___35170))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__34968__auto___35170){
return (function (seq35104){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35104));
});})(g__34968__auto___35170))
;


var g__34968__auto___35174 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__34968__auto___35174){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35175 = arguments.length;
var i__27484__auto___35176 = (0);
while(true){
if((i__27484__auto___35176 < len__27483__auto___35175)){
args__27490__auto__.push((arguments[i__27484__auto___35176]));

var G__35177 = (i__27484__auto___35176 + (1));
i__27484__auto___35176 = G__35177;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34968__auto___35174))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34968__auto___35174){
return (function (args){
return cljs.core.deref.call(null,g__34968__auto___35174);
});})(g__34968__auto___35174))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__34968__auto___35174){
return (function (seq35105){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35105));
});})(g__34968__auto___35174))
;


var g__34968__auto___35178 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__34968__auto___35178){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35179 = arguments.length;
var i__27484__auto___35180 = (0);
while(true){
if((i__27484__auto___35180 < len__27483__auto___35179)){
args__27490__auto__.push((arguments[i__27484__auto___35180]));

var G__35181 = (i__27484__auto___35180 + (1));
i__27484__auto___35180 = G__35181;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34968__auto___35178))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34968__auto___35178){
return (function (args){
return cljs.core.deref.call(null,g__34968__auto___35178);
});})(g__34968__auto___35178))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__34968__auto___35178){
return (function (seq35106){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35106));
});})(g__34968__auto___35178))
;


var g__34968__auto___35182 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__34968__auto___35182){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35183 = arguments.length;
var i__27484__auto___35184 = (0);
while(true){
if((i__27484__auto___35184 < len__27483__auto___35183)){
args__27490__auto__.push((arguments[i__27484__auto___35184]));

var G__35185 = (i__27484__auto___35184 + (1));
i__27484__auto___35184 = G__35185;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34968__auto___35182))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34968__auto___35182){
return (function (args){
return cljs.core.deref.call(null,g__34968__auto___35182);
});})(g__34968__auto___35182))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__34968__auto___35182){
return (function (seq35107){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35107));
});})(g__34968__auto___35182))
;


var g__34968__auto___35186 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__34968__auto___35186){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35187 = arguments.length;
var i__27484__auto___35188 = (0);
while(true){
if((i__27484__auto___35188 < len__27483__auto___35187)){
args__27490__auto__.push((arguments[i__27484__auto___35188]));

var G__35189 = (i__27484__auto___35188 + (1));
i__27484__auto___35188 = G__35189;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34968__auto___35186))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34968__auto___35186){
return (function (args){
return cljs.core.deref.call(null,g__34968__auto___35186);
});})(g__34968__auto___35186))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__34968__auto___35186){
return (function (seq35108){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35108));
});})(g__34968__auto___35186))
;


var g__34968__auto___35190 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__34968__auto___35190){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35191 = arguments.length;
var i__27484__auto___35192 = (0);
while(true){
if((i__27484__auto___35192 < len__27483__auto___35191)){
args__27490__auto__.push((arguments[i__27484__auto___35192]));

var G__35193 = (i__27484__auto___35192 + (1));
i__27484__auto___35192 = G__35193;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});})(g__34968__auto___35190))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34968__auto___35190){
return (function (args){
return cljs.core.deref.call(null,g__34968__auto___35190);
});})(g__34968__auto___35190))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__34968__auto___35190){
return (function (seq35109){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35109));
});})(g__34968__auto___35190))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__27490__auto__ = [];
var len__27483__auto___35196 = arguments.length;
var i__27484__auto___35197 = (0);
while(true){
if((i__27484__auto___35197 < len__27483__auto___35196)){
args__27490__auto__.push((arguments[i__27484__auto___35197]));

var G__35198 = (i__27484__auto___35197 + (1));
i__27484__auto___35197 = G__35198;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__35194_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35194_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq35195){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35195));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__35199_SHARP_){
return (new Date(p1__35199_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1492960135922