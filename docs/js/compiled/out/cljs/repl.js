// Compiled by ClojureScript 1.9.495 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36318){
var map__36343 = p__36318;
var map__36343__$1 = ((((!((map__36343 == null)))?((((map__36343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36343):map__36343);
var m = map__36343__$1;
var n = cljs.core.get.call(null,map__36343__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36343__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36345_36367 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36346_36368 = null;
var count__36347_36369 = (0);
var i__36348_36370 = (0);
while(true){
if((i__36348_36370 < count__36347_36369)){
var f_36371 = cljs.core._nth.call(null,chunk__36346_36368,i__36348_36370);
cljs.core.println.call(null,"  ",f_36371);

var G__36372 = seq__36345_36367;
var G__36373 = chunk__36346_36368;
var G__36374 = count__36347_36369;
var G__36375 = (i__36348_36370 + (1));
seq__36345_36367 = G__36372;
chunk__36346_36368 = G__36373;
count__36347_36369 = G__36374;
i__36348_36370 = G__36375;
continue;
} else {
var temp__4657__auto___36376 = cljs.core.seq.call(null,seq__36345_36367);
if(temp__4657__auto___36376){
var seq__36345_36377__$1 = temp__4657__auto___36376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36345_36377__$1)){
var c__27189__auto___36378 = cljs.core.chunk_first.call(null,seq__36345_36377__$1);
var G__36379 = cljs.core.chunk_rest.call(null,seq__36345_36377__$1);
var G__36380 = c__27189__auto___36378;
var G__36381 = cljs.core.count.call(null,c__27189__auto___36378);
var G__36382 = (0);
seq__36345_36367 = G__36379;
chunk__36346_36368 = G__36380;
count__36347_36369 = G__36381;
i__36348_36370 = G__36382;
continue;
} else {
var f_36383 = cljs.core.first.call(null,seq__36345_36377__$1);
cljs.core.println.call(null,"  ",f_36383);

var G__36384 = cljs.core.next.call(null,seq__36345_36377__$1);
var G__36385 = null;
var G__36386 = (0);
var G__36387 = (0);
seq__36345_36367 = G__36384;
chunk__36346_36368 = G__36385;
count__36347_36369 = G__36386;
i__36348_36370 = G__36387;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36388 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26370__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26370__auto__)){
return or__26370__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36388);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36388)))?cljs.core.second.call(null,arglists_36388):arglists_36388));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36349_36389 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36350_36390 = null;
var count__36351_36391 = (0);
var i__36352_36392 = (0);
while(true){
if((i__36352_36392 < count__36351_36391)){
var vec__36353_36393 = cljs.core._nth.call(null,chunk__36350_36390,i__36352_36392);
var name_36394 = cljs.core.nth.call(null,vec__36353_36393,(0),null);
var map__36356_36395 = cljs.core.nth.call(null,vec__36353_36393,(1),null);
var map__36356_36396__$1 = ((((!((map__36356_36395 == null)))?((((map__36356_36395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36356_36395.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36356_36395):map__36356_36395);
var doc_36397 = cljs.core.get.call(null,map__36356_36396__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36398 = cljs.core.get.call(null,map__36356_36396__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36394);

cljs.core.println.call(null," ",arglists_36398);

if(cljs.core.truth_(doc_36397)){
cljs.core.println.call(null," ",doc_36397);
} else {
}

var G__36399 = seq__36349_36389;
var G__36400 = chunk__36350_36390;
var G__36401 = count__36351_36391;
var G__36402 = (i__36352_36392 + (1));
seq__36349_36389 = G__36399;
chunk__36350_36390 = G__36400;
count__36351_36391 = G__36401;
i__36352_36392 = G__36402;
continue;
} else {
var temp__4657__auto___36403 = cljs.core.seq.call(null,seq__36349_36389);
if(temp__4657__auto___36403){
var seq__36349_36404__$1 = temp__4657__auto___36403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36349_36404__$1)){
var c__27189__auto___36405 = cljs.core.chunk_first.call(null,seq__36349_36404__$1);
var G__36406 = cljs.core.chunk_rest.call(null,seq__36349_36404__$1);
var G__36407 = c__27189__auto___36405;
var G__36408 = cljs.core.count.call(null,c__27189__auto___36405);
var G__36409 = (0);
seq__36349_36389 = G__36406;
chunk__36350_36390 = G__36407;
count__36351_36391 = G__36408;
i__36352_36392 = G__36409;
continue;
} else {
var vec__36358_36410 = cljs.core.first.call(null,seq__36349_36404__$1);
var name_36411 = cljs.core.nth.call(null,vec__36358_36410,(0),null);
var map__36361_36412 = cljs.core.nth.call(null,vec__36358_36410,(1),null);
var map__36361_36413__$1 = ((((!((map__36361_36412 == null)))?((((map__36361_36412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36361_36412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36361_36412):map__36361_36412);
var doc_36414 = cljs.core.get.call(null,map__36361_36413__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36415 = cljs.core.get.call(null,map__36361_36413__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36411);

cljs.core.println.call(null," ",arglists_36415);

if(cljs.core.truth_(doc_36414)){
cljs.core.println.call(null," ",doc_36414);
} else {
}

var G__36416 = cljs.core.next.call(null,seq__36349_36404__$1);
var G__36417 = null;
var G__36418 = (0);
var G__36419 = (0);
seq__36349_36389 = G__36416;
chunk__36350_36390 = G__36417;
count__36351_36391 = G__36418;
i__36352_36392 = G__36419;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36363 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36364 = null;
var count__36365 = (0);
var i__36366 = (0);
while(true){
if((i__36366 < count__36365)){
var role = cljs.core._nth.call(null,chunk__36364,i__36366);
var temp__4657__auto___36420__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36420__$1)){
var spec_36421 = temp__4657__auto___36420__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_36421));
} else {
}

var G__36422 = seq__36363;
var G__36423 = chunk__36364;
var G__36424 = count__36365;
var G__36425 = (i__36366 + (1));
seq__36363 = G__36422;
chunk__36364 = G__36423;
count__36365 = G__36424;
i__36366 = G__36425;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36363);
if(temp__4657__auto____$1){
var seq__36363__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36363__$1)){
var c__27189__auto__ = cljs.core.chunk_first.call(null,seq__36363__$1);
var G__36426 = cljs.core.chunk_rest.call(null,seq__36363__$1);
var G__36427 = c__27189__auto__;
var G__36428 = cljs.core.count.call(null,c__27189__auto__);
var G__36429 = (0);
seq__36363 = G__36426;
chunk__36364 = G__36427;
count__36365 = G__36428;
i__36366 = G__36429;
continue;
} else {
var role = cljs.core.first.call(null,seq__36363__$1);
var temp__4657__auto___36430__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36430__$2)){
var spec_36431 = temp__4657__auto___36430__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_36431));
} else {
}

var G__36432 = cljs.core.next.call(null,seq__36363__$1);
var G__36433 = null;
var G__36434 = (0);
var G__36435 = (0);
seq__36363 = G__36432;
chunk__36364 = G__36433;
count__36365 = G__36434;
i__36366 = G__36435;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1492960138200