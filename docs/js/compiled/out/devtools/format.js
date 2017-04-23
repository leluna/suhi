// Compiled by ClojureScript 1.9.495 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__27038__auto__ = (((value == null))?null:value);
var m__27039__auto__ = (devtools.format._header[goog.typeOf(x__27038__auto__)]);
if(!((m__27039__auto__ == null))){
return m__27039__auto__.call(null,value);
} else {
var m__27039__auto____$1 = (devtools.format._header["_"]);
if(!((m__27039__auto____$1 == null))){
return m__27039__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__27038__auto__ = (((value == null))?null:value);
var m__27039__auto__ = (devtools.format._has_body[goog.typeOf(x__27038__auto__)]);
if(!((m__27039__auto__ == null))){
return m__27039__auto__.call(null,value);
} else {
var m__27039__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__27039__auto____$1 == null))){
return m__27039__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__27038__auto__ = (((value == null))?null:value);
var m__27039__auto__ = (devtools.format._body[goog.typeOf(x__27038__auto__)]);
if(!((m__27039__auto__ == null))){
return m__27039__auto__.call(null,value);
} else {
var m__27039__auto____$1 = (devtools.format._body["_"]);
if(!((m__27039__auto____$1 == null))){
return m__27039__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37626__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37626__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37626__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37626__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37625__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37625__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37626__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37626__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37626__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37626__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37625__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37625__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37626__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37626__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37626__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37626__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37625__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37625__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37626__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37626__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37626__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37626__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37625__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37625__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37626__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37626__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37626__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37626__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37625__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37625__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37626__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37626__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37626__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37626__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37625__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37625__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37626__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37626__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37626__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37626__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37625__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37625__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__27490__auto__ = [];
var len__27483__auto___37647 = arguments.length;
var i__27484__auto___37648 = (0);
while(true){
if((i__27484__auto___37648 < len__27483__auto___37647)){
args__27490__auto__.push((arguments[i__27484__auto___37648]));

var G__37649 = (i__27484__auto___37648 + (1));
i__27484__auto___37648 = G__37649;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq37646){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37646));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__27490__auto__ = [];
var len__27483__auto___37651 = arguments.length;
var i__27484__auto___37652 = (0);
while(true){
if((i__27484__auto___37652 < len__27483__auto___37651)){
args__27490__auto__.push((arguments[i__27484__auto___37652]));

var G__37653 = (i__27484__auto___37652 + (1));
i__27484__auto___37652 = G__37653;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq37650){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37650));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__27490__auto__ = [];
var len__27483__auto___37655 = arguments.length;
var i__27484__auto___37656 = (0);
while(true){
if((i__27484__auto___37656 < len__27483__auto___37655)){
args__27490__auto__.push((arguments[i__27484__auto___37656]));

var G__37657 = (i__27484__auto___37656 + (1));
i__27484__auto___37656 = G__37657;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq37654){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37654));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__27490__auto__ = [];
var len__27483__auto___37659 = arguments.length;
var i__27484__auto___37660 = (0);
while(true){
if((i__27484__auto___37660 < len__27483__auto___37659)){
args__27490__auto__.push((arguments[i__27484__auto___37660]));

var G__37661 = (i__27484__auto___37660 + (1));
i__27484__auto___37660 = G__37661;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq37658){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37658));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__27490__auto__ = [];
var len__27483__auto___37663 = arguments.length;
var i__27484__auto___37664 = (0);
while(true){
if((i__27484__auto___37664 < len__27483__auto___37663)){
args__27490__auto__.push((arguments[i__27484__auto___37664]));

var G__37665 = (i__27484__auto___37664 + (1));
i__27484__auto___37664 = G__37665;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq37662){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37662));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__27490__auto__ = [];
var len__27483__auto___37667 = arguments.length;
var i__27484__auto___37668 = (0);
while(true){
if((i__27484__auto___37668 < len__27483__auto___37667)){
args__27490__auto__.push((arguments[i__27484__auto___37668]));

var G__37669 = (i__27484__auto___37668 + (1));
i__27484__auto___37668 = G__37669;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq37666){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37666));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__27490__auto__ = [];
var len__27483__auto___37671 = arguments.length;
var i__27484__auto___37672 = (0);
while(true){
if((i__27484__auto___37672 < len__27483__auto___37671)){
args__27490__auto__.push((arguments[i__27484__auto___37672]));

var G__37673 = (i__27484__auto___37672 + (1));
i__27484__auto___37672 = G__37673;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq37670){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37670));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__27490__auto__ = [];
var len__27483__auto___37681 = arguments.length;
var i__27484__auto___37682 = (0);
while(true){
if((i__27484__auto___37682 < len__27483__auto___37681)){
args__27490__auto__.push((arguments[i__27484__auto___37682]));

var G__37683 = (i__27484__auto___37682 + (1));
i__27484__auto___37682 = G__37683;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((1) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27491__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37677){
var vec__37678 = p__37677;
var state_override = cljs.core.nth.call(null,vec__37678,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__37678,state_override){
return (function (p1__37674_SHARP_){
return cljs.core.merge.call(null,p1__37674_SHARP_,state_override);
});})(vec__37678,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq37675){
var G__37676 = cljs.core.first.call(null,seq37675);
var seq37675__$1 = cljs.core.next.call(null,seq37675);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__37676,seq37675__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__27490__auto__ = [];
var len__27483__auto___37685 = arguments.length;
var i__27484__auto___37686 = (0);
while(true){
if((i__27484__auto___37686 < len__27483__auto___37685)){
args__27490__auto__.push((arguments[i__27484__auto___37686]));

var G__37687 = (i__27484__auto___37686 + (1));
i__27484__auto___37686 = G__37687;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq37684){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37684));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__27490__auto__ = [];
var len__27483__auto___37690 = arguments.length;
var i__27484__auto___37691 = (0);
while(true){
if((i__27484__auto___37691 < len__27483__auto___37690)){
args__27490__auto__.push((arguments[i__27484__auto___37691]));

var G__37692 = (i__27484__auto___37691 + (1));
i__27484__auto___37691 = G__37692;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((1) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27491__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq37688){
var G__37689 = cljs.core.first.call(null,seq37688);
var seq37688__$1 = cljs.core.next.call(null,seq37688);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__37689,seq37688__$1);
});


//# sourceMappingURL=format.js.map?rel=1492960139584