// Compiled by ClojureScript 1.9.495 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x40335_40336 = value;
x40335_40336.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x40340_40341 = value;
x40340_40341.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x40345_40346 = value;
x40345_40346.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__26358__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__26358__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__26358__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__27490__auto__ = [];
var len__27483__auto___40354 = arguments.length;
var i__27484__auto___40355 = (0);
while(true){
if((i__27484__auto___40355 < len__27483__auto___40354)){
args__27490__auto__.push((arguments[i__27484__auto___40355]));

var G__40356 = (i__27484__auto___40355 + (1));
i__27484__auto___40355 = G__40356;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__40350_40357 = cljs.core.seq.call(null,items);
var chunk__40351_40358 = null;
var count__40352_40359 = (0);
var i__40353_40360 = (0);
while(true){
if((i__40353_40360 < count__40352_40359)){
var item_40361 = cljs.core._nth.call(null,chunk__40351_40358,i__40353_40360);
if(!((item_40361 == null))){
if(cljs.core.coll_QMARK_.call(null,item_40361)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40361)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40361));
}
} else {
}

var G__40362 = seq__40350_40357;
var G__40363 = chunk__40351_40358;
var G__40364 = count__40352_40359;
var G__40365 = (i__40353_40360 + (1));
seq__40350_40357 = G__40362;
chunk__40351_40358 = G__40363;
count__40352_40359 = G__40364;
i__40353_40360 = G__40365;
continue;
} else {
var temp__4657__auto___40366 = cljs.core.seq.call(null,seq__40350_40357);
if(temp__4657__auto___40366){
var seq__40350_40367__$1 = temp__4657__auto___40366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40350_40367__$1)){
var c__27189__auto___40368 = cljs.core.chunk_first.call(null,seq__40350_40367__$1);
var G__40369 = cljs.core.chunk_rest.call(null,seq__40350_40367__$1);
var G__40370 = c__27189__auto___40368;
var G__40371 = cljs.core.count.call(null,c__27189__auto___40368);
var G__40372 = (0);
seq__40350_40357 = G__40369;
chunk__40351_40358 = G__40370;
count__40352_40359 = G__40371;
i__40353_40360 = G__40372;
continue;
} else {
var item_40373 = cljs.core.first.call(null,seq__40350_40367__$1);
if(!((item_40373 == null))){
if(cljs.core.coll_QMARK_.call(null,item_40373)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40373)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40373));
}
} else {
}

var G__40374 = cljs.core.next.call(null,seq__40350_40367__$1);
var G__40375 = null;
var G__40376 = (0);
var G__40377 = (0);
seq__40350_40357 = G__40374;
chunk__40351_40358 = G__40375;
count__40352_40359 = G__40376;
i__40353_40360 = G__40377;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq40349){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40349));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__27490__auto__ = [];
var len__27483__auto___40385 = arguments.length;
var i__27484__auto___40386 = (0);
while(true){
if((i__27484__auto___40386 < len__27483__auto___40385)){
args__27490__auto__.push((arguments[i__27484__auto___40386]));

var G__40387 = (i__27484__auto___40386 + (1));
i__27484__auto___40386 = G__40387;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((2) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27491__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__40381_40388 = cljs.core.seq.call(null,children);
var chunk__40382_40389 = null;
var count__40383_40390 = (0);
var i__40384_40391 = (0);
while(true){
if((i__40384_40391 < count__40383_40390)){
var child_40392 = cljs.core._nth.call(null,chunk__40382_40389,i__40384_40391);
if(!((child_40392 == null))){
if(cljs.core.coll_QMARK_.call(null,child_40392)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40392))));
} else {
var temp__4655__auto___40393 = devtools.formatters.helpers.pref.call(null,child_40392);
if(cljs.core.truth_(temp__4655__auto___40393)){
var child_value_40394 = temp__4655__auto___40393;
template.push(child_value_40394);
} else {
}
}
} else {
}

var G__40395 = seq__40381_40388;
var G__40396 = chunk__40382_40389;
var G__40397 = count__40383_40390;
var G__40398 = (i__40384_40391 + (1));
seq__40381_40388 = G__40395;
chunk__40382_40389 = G__40396;
count__40383_40390 = G__40397;
i__40384_40391 = G__40398;
continue;
} else {
var temp__4657__auto___40399 = cljs.core.seq.call(null,seq__40381_40388);
if(temp__4657__auto___40399){
var seq__40381_40400__$1 = temp__4657__auto___40399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40381_40400__$1)){
var c__27189__auto___40401 = cljs.core.chunk_first.call(null,seq__40381_40400__$1);
var G__40402 = cljs.core.chunk_rest.call(null,seq__40381_40400__$1);
var G__40403 = c__27189__auto___40401;
var G__40404 = cljs.core.count.call(null,c__27189__auto___40401);
var G__40405 = (0);
seq__40381_40388 = G__40402;
chunk__40382_40389 = G__40403;
count__40383_40390 = G__40404;
i__40384_40391 = G__40405;
continue;
} else {
var child_40406 = cljs.core.first.call(null,seq__40381_40400__$1);
if(!((child_40406 == null))){
if(cljs.core.coll_QMARK_.call(null,child_40406)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40406))));
} else {
var temp__4655__auto___40407 = devtools.formatters.helpers.pref.call(null,child_40406);
if(cljs.core.truth_(temp__4655__auto___40407)){
var child_value_40408 = temp__4655__auto___40407;
template.push(child_value_40408);
} else {
}
}
} else {
}

var G__40409 = cljs.core.next.call(null,seq__40381_40400__$1);
var G__40410 = null;
var G__40411 = (0);
var G__40412 = (0);
seq__40381_40388 = G__40409;
chunk__40382_40389 = G__40410;
count__40383_40390 = G__40411;
i__40384_40391 = G__40412;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq40378){
var G__40379 = cljs.core.first.call(null,seq40378);
var seq40378__$1 = cljs.core.next.call(null,seq40378);
var G__40380 = cljs.core.first.call(null,seq40378__$1);
var seq40378__$2 = cljs.core.next.call(null,seq40378__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__40379,G__40380,seq40378__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__27490__auto__ = [];
var len__27483__auto___40415 = arguments.length;
var i__27484__auto___40416 = (0);
while(true){
if((i__27484__auto___40416 < len__27483__auto___40415)){
args__27490__auto__.push((arguments[i__27484__auto___40416]));

var G__40417 = (i__27484__auto___40416 + (1));
i__27484__auto___40416 = G__40417;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((1) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27491__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq40413){
var G__40414 = cljs.core.first.call(null,seq40413);
var seq40413__$1 = cljs.core.next.call(null,seq40413);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40414,seq40413__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__27490__auto__ = [];
var len__27483__auto___40420 = arguments.length;
var i__27484__auto___40421 = (0);
while(true){
if((i__27484__auto___40421 < len__27483__auto___40420)){
args__27490__auto__.push((arguments[i__27484__auto___40421]));

var G__40422 = (i__27484__auto___40421 + (1));
i__27484__auto___40421 = G__40422;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((1) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27491__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq40418){
var G__40419 = cljs.core.first.call(null,seq40418);
var seq40418__$1 = cljs.core.next.call(null,seq40418);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40419,seq40418__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args40423 = [];
var len__27483__auto___40428 = arguments.length;
var i__27484__auto___40429 = (0);
while(true){
if((i__27484__auto___40429 < len__27483__auto___40428)){
args40423.push((arguments[i__27484__auto___40429]));

var G__40430 = (i__27484__auto___40429 + (1));
i__27484__auto___40429 = G__40430;
continue;
} else {
}
break;
}

var G__40425 = args40423.length;
switch (G__40425) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40423.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj40427 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__26370__auto__ = start_index;
if(cljs.core.truth_(or__26370__auto__)){
return or__26370__auto__;
} else {
return (0);
}
})()};
return obj40427;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__27490__auto__ = [];
var len__27483__auto___40438 = arguments.length;
var i__27484__auto___40439 = (0);
while(true){
if((i__27484__auto___40439 < len__27483__auto___40438)){
args__27490__auto__.push((arguments[i__27484__auto___40439]));

var G__40440 = (i__27484__auto___40439 + (1));
i__27484__auto___40439 = G__40440;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((1) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27491__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__40434){
var vec__40435 = p__40434;
var state_override_fn = cljs.core.nth.call(null,vec__40435,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq40432){
var G__40433 = cljs.core.first.call(null,seq40432);
var seq40432__$1 = cljs.core.next.call(null,seq40432);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__40433,seq40432__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__27364__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40444_40447 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40445_40448 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40444_40447,_STAR_print_fn_STAR_40445_40448,sb__27364__auto__){
return (function (x__27365__auto__){
return sb__27364__auto__.append(x__27365__auto__);
});})(_STAR_print_newline_STAR_40444_40447,_STAR_print_fn_STAR_40445_40448,sb__27364__auto__))
;

try{var _STAR_print_level_STAR_40446_40449 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_40446_40449;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40445_40448;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40444_40447;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__27364__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_40451 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_40451;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render path: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render stack:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__40453 = name;
switch (G__40453) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("no matching special tag name: '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__40458 = tag;
var html_tag = cljs.core.nth.call(null,vec__40458,(0),null);
var style = cljs.core.nth.call(null,vec__40458,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_40462 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid json-ml markup at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40462;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_40465 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_40466 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40466;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_40465;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__40467 = initial_value;
var G__40468 = value.call(null);
initial_value = G__40467;
value = G__40468;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__40469 = initial_value;
var G__40470 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__40469;
value = G__40470;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__40471 = initial_value;
var G__40472 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__40471;
value = G__40472;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1492960143665