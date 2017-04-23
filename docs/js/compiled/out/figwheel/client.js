// Compiled by ClojureScript 1.9.495 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36757 = [];
var len__27483__auto___36760 = arguments.length;
var i__27484__auto___36761 = (0);
while(true){
if((i__27484__auto___36761 < len__27483__auto___36760)){
args36757.push((arguments[i__27484__auto___36761]));

var G__36762 = (i__27484__auto___36761 + (1));
i__27484__auto___36761 = G__36762;
continue;
} else {
}
break;
}

var G__36759 = args36757.length;
switch (G__36759) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36757.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27490__auto__ = [];
var len__27483__auto___36765 = arguments.length;
var i__27484__auto___36766 = (0);
while(true){
if((i__27484__auto___36766 < len__27483__auto___36765)){
args__27490__auto__.push((arguments[i__27484__auto___36766]));

var G__36767 = (i__27484__auto___36766 + (1));
i__27484__auto___36766 = G__36767;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36764){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36764));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27490__auto__ = [];
var len__27483__auto___36769 = arguments.length;
var i__27484__auto___36770 = (0);
while(true){
if((i__27484__auto___36770 < len__27483__auto___36769)){
args__27490__auto__.push((arguments[i__27484__auto___36770]));

var G__36771 = (i__27484__auto___36770 + (1));
i__27484__auto___36770 = G__36771;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36768){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36768));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36772){
var map__36775 = p__36772;
var map__36775__$1 = ((((!((map__36775 == null)))?((((map__36775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36775):map__36775);
var message = cljs.core.get.call(null,map__36775__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36775__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__26370__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26370__auto__)){
return or__26370__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__26358__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__26358__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__26358__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29262__auto___36937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto___36937,ch){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto___36937,ch){
return (function (state_36906){
var state_val_36907 = (state_36906[(1)]);
if((state_val_36907 === (7))){
var inst_36902 = (state_36906[(2)]);
var state_36906__$1 = state_36906;
var statearr_36908_36938 = state_36906__$1;
(statearr_36908_36938[(2)] = inst_36902);

(statearr_36908_36938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (1))){
var state_36906__$1 = state_36906;
var statearr_36909_36939 = state_36906__$1;
(statearr_36909_36939[(2)] = null);

(statearr_36909_36939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (4))){
var inst_36859 = (state_36906[(7)]);
var inst_36859__$1 = (state_36906[(2)]);
var state_36906__$1 = (function (){var statearr_36910 = state_36906;
(statearr_36910[(7)] = inst_36859__$1);

return statearr_36910;
})();
if(cljs.core.truth_(inst_36859__$1)){
var statearr_36911_36940 = state_36906__$1;
(statearr_36911_36940[(1)] = (5));

} else {
var statearr_36912_36941 = state_36906__$1;
(statearr_36912_36941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (15))){
var inst_36866 = (state_36906[(8)]);
var inst_36881 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36866);
var inst_36882 = cljs.core.first.call(null,inst_36881);
var inst_36883 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36882);
var inst_36884 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36883)].join('');
var inst_36885 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36884);
var state_36906__$1 = state_36906;
var statearr_36913_36942 = state_36906__$1;
(statearr_36913_36942[(2)] = inst_36885);

(statearr_36913_36942[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (13))){
var inst_36890 = (state_36906[(2)]);
var state_36906__$1 = state_36906;
var statearr_36914_36943 = state_36906__$1;
(statearr_36914_36943[(2)] = inst_36890);

(statearr_36914_36943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (6))){
var state_36906__$1 = state_36906;
var statearr_36915_36944 = state_36906__$1;
(statearr_36915_36944[(2)] = null);

(statearr_36915_36944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (17))){
var inst_36888 = (state_36906[(2)]);
var state_36906__$1 = state_36906;
var statearr_36916_36945 = state_36906__$1;
(statearr_36916_36945[(2)] = inst_36888);

(statearr_36916_36945[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (3))){
var inst_36904 = (state_36906[(2)]);
var state_36906__$1 = state_36906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36906__$1,inst_36904);
} else {
if((state_val_36907 === (12))){
var inst_36865 = (state_36906[(9)]);
var inst_36879 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36865,opts);
var state_36906__$1 = state_36906;
if(cljs.core.truth_(inst_36879)){
var statearr_36917_36946 = state_36906__$1;
(statearr_36917_36946[(1)] = (15));

} else {
var statearr_36918_36947 = state_36906__$1;
(statearr_36918_36947[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (2))){
var state_36906__$1 = state_36906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36906__$1,(4),ch);
} else {
if((state_val_36907 === (11))){
var inst_36866 = (state_36906[(8)]);
var inst_36871 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36872 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36866);
var inst_36873 = cljs.core.async.timeout.call(null,(1000));
var inst_36874 = [inst_36872,inst_36873];
var inst_36875 = (new cljs.core.PersistentVector(null,2,(5),inst_36871,inst_36874,null));
var state_36906__$1 = state_36906;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36906__$1,(14),inst_36875);
} else {
if((state_val_36907 === (9))){
var inst_36866 = (state_36906[(8)]);
var inst_36892 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36893 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36866);
var inst_36894 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36893);
var inst_36895 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36894)].join('');
var inst_36896 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36895);
var state_36906__$1 = (function (){var statearr_36919 = state_36906;
(statearr_36919[(10)] = inst_36892);

return statearr_36919;
})();
var statearr_36920_36948 = state_36906__$1;
(statearr_36920_36948[(2)] = inst_36896);

(statearr_36920_36948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (5))){
var inst_36859 = (state_36906[(7)]);
var inst_36861 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36862 = (new cljs.core.PersistentArrayMap(null,2,inst_36861,null));
var inst_36863 = (new cljs.core.PersistentHashSet(null,inst_36862,null));
var inst_36864 = figwheel.client.focus_msgs.call(null,inst_36863,inst_36859);
var inst_36865 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36864);
var inst_36866 = cljs.core.first.call(null,inst_36864);
var inst_36867 = figwheel.client.autoload_QMARK_.call(null);
var state_36906__$1 = (function (){var statearr_36921 = state_36906;
(statearr_36921[(8)] = inst_36866);

(statearr_36921[(9)] = inst_36865);

return statearr_36921;
})();
if(cljs.core.truth_(inst_36867)){
var statearr_36922_36949 = state_36906__$1;
(statearr_36922_36949[(1)] = (8));

} else {
var statearr_36923_36950 = state_36906__$1;
(statearr_36923_36950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (14))){
var inst_36877 = (state_36906[(2)]);
var state_36906__$1 = state_36906;
var statearr_36924_36951 = state_36906__$1;
(statearr_36924_36951[(2)] = inst_36877);

(statearr_36924_36951[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (16))){
var state_36906__$1 = state_36906;
var statearr_36925_36952 = state_36906__$1;
(statearr_36925_36952[(2)] = null);

(statearr_36925_36952[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (10))){
var inst_36898 = (state_36906[(2)]);
var state_36906__$1 = (function (){var statearr_36926 = state_36906;
(statearr_36926[(11)] = inst_36898);

return statearr_36926;
})();
var statearr_36927_36953 = state_36906__$1;
(statearr_36927_36953[(2)] = null);

(statearr_36927_36953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (8))){
var inst_36865 = (state_36906[(9)]);
var inst_36869 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36865,opts);
var state_36906__$1 = state_36906;
if(cljs.core.truth_(inst_36869)){
var statearr_36928_36954 = state_36906__$1;
(statearr_36928_36954[(1)] = (11));

} else {
var statearr_36929_36955 = state_36906__$1;
(statearr_36929_36955[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29262__auto___36937,ch))
;
return ((function (switch__29150__auto__,c__29262__auto___36937,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29151__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29151__auto____0 = (function (){
var statearr_36933 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36933[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29151__auto__);

(statearr_36933[(1)] = (1));

return statearr_36933;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29151__auto____1 = (function (state_36906){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_36906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e36934){if((e36934 instanceof Object)){
var ex__29154__auto__ = e36934;
var statearr_36935_36956 = state_36906;
(statearr_36935_36956[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36957 = state_36906;
state_36906 = G__36957;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29151__auto__ = function(state_36906){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29151__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29151__auto____1.call(this,state_36906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29151__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29151__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto___36937,ch))
})();
var state__29264__auto__ = (function (){var statearr_36936 = f__29263__auto__.call(null);
(statearr_36936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto___36937);

return statearr_36936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto___36937,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36958_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36958_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36961 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36961){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36960){if((e36960 instanceof Error)){
var e = e36960;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36961], null));
} else {
var e = e36960;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36961))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36962){
var map__36971 = p__36962;
var map__36971__$1 = ((((!((map__36971 == null)))?((((map__36971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36971):map__36971);
var opts = map__36971__$1;
var build_id = cljs.core.get.call(null,map__36971__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36971,map__36971__$1,opts,build_id){
return (function (p__36973){
var vec__36974 = p__36973;
var seq__36975 = cljs.core.seq.call(null,vec__36974);
var first__36976 = cljs.core.first.call(null,seq__36975);
var seq__36975__$1 = cljs.core.next.call(null,seq__36975);
var map__36977 = first__36976;
var map__36977__$1 = ((((!((map__36977 == null)))?((((map__36977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36977.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36977):map__36977);
var msg = map__36977__$1;
var msg_name = cljs.core.get.call(null,map__36977__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36975__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36974,seq__36975,first__36976,seq__36975__$1,map__36977,map__36977__$1,msg,msg_name,_,map__36971,map__36971__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36974,seq__36975,first__36976,seq__36975__$1,map__36977,map__36977__$1,msg,msg_name,_,map__36971,map__36971__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36971,map__36971__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36985){
var vec__36986 = p__36985;
var seq__36987 = cljs.core.seq.call(null,vec__36986);
var first__36988 = cljs.core.first.call(null,seq__36987);
var seq__36987__$1 = cljs.core.next.call(null,seq__36987);
var map__36989 = first__36988;
var map__36989__$1 = ((((!((map__36989 == null)))?((((map__36989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36989.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36989):map__36989);
var msg = map__36989__$1;
var msg_name = cljs.core.get.call(null,map__36989__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36987__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36991){
var map__37003 = p__36991;
var map__37003__$1 = ((((!((map__37003 == null)))?((((map__37003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37003):map__37003);
var on_compile_warning = cljs.core.get.call(null,map__37003__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37003__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37003,map__37003__$1,on_compile_warning,on_compile_fail){
return (function (p__37005){
var vec__37006 = p__37005;
var seq__37007 = cljs.core.seq.call(null,vec__37006);
var first__37008 = cljs.core.first.call(null,seq__37007);
var seq__37007__$1 = cljs.core.next.call(null,seq__37007);
var map__37009 = first__37008;
var map__37009__$1 = ((((!((map__37009 == null)))?((((map__37009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37009):map__37009);
var msg = map__37009__$1;
var msg_name = cljs.core.get.call(null,map__37009__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37007__$1;
var pred__37011 = cljs.core._EQ_;
var expr__37012 = msg_name;
if(cljs.core.truth_(pred__37011.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37012))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37011.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37012))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37003,map__37003__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29262__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto__,msg_hist,msg_names,msg){
return (function (state_37240){
var state_val_37241 = (state_37240[(1)]);
if((state_val_37241 === (7))){
var inst_37160 = (state_37240[(2)]);
var state_37240__$1 = state_37240;
if(cljs.core.truth_(inst_37160)){
var statearr_37242_37292 = state_37240__$1;
(statearr_37242_37292[(1)] = (8));

} else {
var statearr_37243_37293 = state_37240__$1;
(statearr_37243_37293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (20))){
var inst_37234 = (state_37240[(2)]);
var state_37240__$1 = state_37240;
var statearr_37244_37294 = state_37240__$1;
(statearr_37244_37294[(2)] = inst_37234);

(statearr_37244_37294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (27))){
var inst_37230 = (state_37240[(2)]);
var state_37240__$1 = state_37240;
var statearr_37245_37295 = state_37240__$1;
(statearr_37245_37295[(2)] = inst_37230);

(statearr_37245_37295[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (1))){
var inst_37153 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37240__$1 = state_37240;
if(cljs.core.truth_(inst_37153)){
var statearr_37246_37296 = state_37240__$1;
(statearr_37246_37296[(1)] = (2));

} else {
var statearr_37247_37297 = state_37240__$1;
(statearr_37247_37297[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (24))){
var inst_37232 = (state_37240[(2)]);
var state_37240__$1 = state_37240;
var statearr_37248_37298 = state_37240__$1;
(statearr_37248_37298[(2)] = inst_37232);

(statearr_37248_37298[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (4))){
var inst_37238 = (state_37240[(2)]);
var state_37240__$1 = state_37240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37240__$1,inst_37238);
} else {
if((state_val_37241 === (15))){
var inst_37236 = (state_37240[(2)]);
var state_37240__$1 = state_37240;
var statearr_37249_37299 = state_37240__$1;
(statearr_37249_37299[(2)] = inst_37236);

(statearr_37249_37299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (21))){
var inst_37189 = (state_37240[(2)]);
var inst_37190 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37191 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37190);
var state_37240__$1 = (function (){var statearr_37250 = state_37240;
(statearr_37250[(7)] = inst_37189);

return statearr_37250;
})();
var statearr_37251_37300 = state_37240__$1;
(statearr_37251_37300[(2)] = inst_37191);

(statearr_37251_37300[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (31))){
var inst_37219 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37240__$1 = state_37240;
if(cljs.core.truth_(inst_37219)){
var statearr_37252_37301 = state_37240__$1;
(statearr_37252_37301[(1)] = (34));

} else {
var statearr_37253_37302 = state_37240__$1;
(statearr_37253_37302[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (32))){
var inst_37228 = (state_37240[(2)]);
var state_37240__$1 = state_37240;
var statearr_37254_37303 = state_37240__$1;
(statearr_37254_37303[(2)] = inst_37228);

(statearr_37254_37303[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (33))){
var inst_37215 = (state_37240[(2)]);
var inst_37216 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37217 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37216);
var state_37240__$1 = (function (){var statearr_37255 = state_37240;
(statearr_37255[(8)] = inst_37215);

return statearr_37255;
})();
var statearr_37256_37304 = state_37240__$1;
(statearr_37256_37304[(2)] = inst_37217);

(statearr_37256_37304[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (13))){
var inst_37174 = figwheel.client.heads_up.clear.call(null);
var state_37240__$1 = state_37240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37240__$1,(16),inst_37174);
} else {
if((state_val_37241 === (22))){
var inst_37195 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37196 = figwheel.client.heads_up.append_warning_message.call(null,inst_37195);
var state_37240__$1 = state_37240;
var statearr_37257_37305 = state_37240__$1;
(statearr_37257_37305[(2)] = inst_37196);

(statearr_37257_37305[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (36))){
var inst_37226 = (state_37240[(2)]);
var state_37240__$1 = state_37240;
var statearr_37258_37306 = state_37240__$1;
(statearr_37258_37306[(2)] = inst_37226);

(statearr_37258_37306[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (29))){
var inst_37206 = (state_37240[(2)]);
var inst_37207 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37208 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37207);
var state_37240__$1 = (function (){var statearr_37259 = state_37240;
(statearr_37259[(9)] = inst_37206);

return statearr_37259;
})();
var statearr_37260_37307 = state_37240__$1;
(statearr_37260_37307[(2)] = inst_37208);

(statearr_37260_37307[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (6))){
var inst_37155 = (state_37240[(10)]);
var state_37240__$1 = state_37240;
var statearr_37261_37308 = state_37240__$1;
(statearr_37261_37308[(2)] = inst_37155);

(statearr_37261_37308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (28))){
var inst_37202 = (state_37240[(2)]);
var inst_37203 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37204 = figwheel.client.heads_up.display_warning.call(null,inst_37203);
var state_37240__$1 = (function (){var statearr_37262 = state_37240;
(statearr_37262[(11)] = inst_37202);

return statearr_37262;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37240__$1,(29),inst_37204);
} else {
if((state_val_37241 === (25))){
var inst_37200 = figwheel.client.heads_up.clear.call(null);
var state_37240__$1 = state_37240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37240__$1,(28),inst_37200);
} else {
if((state_val_37241 === (34))){
var inst_37221 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37240__$1 = state_37240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37240__$1,(37),inst_37221);
} else {
if((state_val_37241 === (17))){
var inst_37180 = (state_37240[(2)]);
var inst_37181 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37182 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37181);
var state_37240__$1 = (function (){var statearr_37263 = state_37240;
(statearr_37263[(12)] = inst_37180);

return statearr_37263;
})();
var statearr_37264_37309 = state_37240__$1;
(statearr_37264_37309[(2)] = inst_37182);

(statearr_37264_37309[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (3))){
var inst_37172 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37240__$1 = state_37240;
if(cljs.core.truth_(inst_37172)){
var statearr_37265_37310 = state_37240__$1;
(statearr_37265_37310[(1)] = (13));

} else {
var statearr_37266_37311 = state_37240__$1;
(statearr_37266_37311[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (12))){
var inst_37168 = (state_37240[(2)]);
var state_37240__$1 = state_37240;
var statearr_37267_37312 = state_37240__$1;
(statearr_37267_37312[(2)] = inst_37168);

(statearr_37267_37312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (2))){
var inst_37155 = (state_37240[(10)]);
var inst_37155__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37240__$1 = (function (){var statearr_37268 = state_37240;
(statearr_37268[(10)] = inst_37155__$1);

return statearr_37268;
})();
if(cljs.core.truth_(inst_37155__$1)){
var statearr_37269_37313 = state_37240__$1;
(statearr_37269_37313[(1)] = (5));

} else {
var statearr_37270_37314 = state_37240__$1;
(statearr_37270_37314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (23))){
var inst_37198 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37240__$1 = state_37240;
if(cljs.core.truth_(inst_37198)){
var statearr_37271_37315 = state_37240__$1;
(statearr_37271_37315[(1)] = (25));

} else {
var statearr_37272_37316 = state_37240__$1;
(statearr_37272_37316[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (35))){
var state_37240__$1 = state_37240;
var statearr_37273_37317 = state_37240__$1;
(statearr_37273_37317[(2)] = null);

(statearr_37273_37317[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (19))){
var inst_37193 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37240__$1 = state_37240;
if(cljs.core.truth_(inst_37193)){
var statearr_37274_37318 = state_37240__$1;
(statearr_37274_37318[(1)] = (22));

} else {
var statearr_37275_37319 = state_37240__$1;
(statearr_37275_37319[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (11))){
var inst_37164 = (state_37240[(2)]);
var state_37240__$1 = state_37240;
var statearr_37276_37320 = state_37240__$1;
(statearr_37276_37320[(2)] = inst_37164);

(statearr_37276_37320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (9))){
var inst_37166 = figwheel.client.heads_up.clear.call(null);
var state_37240__$1 = state_37240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37240__$1,(12),inst_37166);
} else {
if((state_val_37241 === (5))){
var inst_37157 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37240__$1 = state_37240;
var statearr_37277_37321 = state_37240__$1;
(statearr_37277_37321[(2)] = inst_37157);

(statearr_37277_37321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (14))){
var inst_37184 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37240__$1 = state_37240;
if(cljs.core.truth_(inst_37184)){
var statearr_37278_37322 = state_37240__$1;
(statearr_37278_37322[(1)] = (18));

} else {
var statearr_37279_37323 = state_37240__$1;
(statearr_37279_37323[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (26))){
var inst_37210 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37240__$1 = state_37240;
if(cljs.core.truth_(inst_37210)){
var statearr_37280_37324 = state_37240__$1;
(statearr_37280_37324[(1)] = (30));

} else {
var statearr_37281_37325 = state_37240__$1;
(statearr_37281_37325[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (16))){
var inst_37176 = (state_37240[(2)]);
var inst_37177 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37178 = figwheel.client.heads_up.display_exception.call(null,inst_37177);
var state_37240__$1 = (function (){var statearr_37282 = state_37240;
(statearr_37282[(13)] = inst_37176);

return statearr_37282;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37240__$1,(17),inst_37178);
} else {
if((state_val_37241 === (30))){
var inst_37212 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37213 = figwheel.client.heads_up.display_warning.call(null,inst_37212);
var state_37240__$1 = state_37240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37240__$1,(33),inst_37213);
} else {
if((state_val_37241 === (10))){
var inst_37170 = (state_37240[(2)]);
var state_37240__$1 = state_37240;
var statearr_37283_37326 = state_37240__$1;
(statearr_37283_37326[(2)] = inst_37170);

(statearr_37283_37326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (18))){
var inst_37186 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37187 = figwheel.client.heads_up.display_exception.call(null,inst_37186);
var state_37240__$1 = state_37240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37240__$1,(21),inst_37187);
} else {
if((state_val_37241 === (37))){
var inst_37223 = (state_37240[(2)]);
var state_37240__$1 = state_37240;
var statearr_37284_37327 = state_37240__$1;
(statearr_37284_37327[(2)] = inst_37223);

(statearr_37284_37327[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37241 === (8))){
var inst_37162 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37240__$1 = state_37240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37240__$1,(11),inst_37162);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29262__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29150__auto__,c__29262__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29151__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29151__auto____0 = (function (){
var statearr_37288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37288[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29151__auto__);

(statearr_37288[(1)] = (1));

return statearr_37288;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29151__auto____1 = (function (state_37240){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_37240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e37289){if((e37289 instanceof Object)){
var ex__29154__auto__ = e37289;
var statearr_37290_37328 = state_37240;
(statearr_37290_37328[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37329 = state_37240;
state_37240 = G__37329;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29151__auto__ = function(state_37240){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29151__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29151__auto____1.call(this,state_37240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29151__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29151__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto__,msg_hist,msg_names,msg))
})();
var state__29264__auto__ = (function (){var statearr_37291 = f__29263__auto__.call(null);
(statearr_37291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto__);

return statearr_37291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto__,msg_hist,msg_names,msg))
);

return c__29262__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29262__auto___37392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto___37392,ch){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto___37392,ch){
return (function (state_37375){
var state_val_37376 = (state_37375[(1)]);
if((state_val_37376 === (1))){
var state_37375__$1 = state_37375;
var statearr_37377_37393 = state_37375__$1;
(statearr_37377_37393[(2)] = null);

(statearr_37377_37393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37376 === (2))){
var state_37375__$1 = state_37375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37375__$1,(4),ch);
} else {
if((state_val_37376 === (3))){
var inst_37373 = (state_37375[(2)]);
var state_37375__$1 = state_37375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37375__$1,inst_37373);
} else {
if((state_val_37376 === (4))){
var inst_37363 = (state_37375[(7)]);
var inst_37363__$1 = (state_37375[(2)]);
var state_37375__$1 = (function (){var statearr_37378 = state_37375;
(statearr_37378[(7)] = inst_37363__$1);

return statearr_37378;
})();
if(cljs.core.truth_(inst_37363__$1)){
var statearr_37379_37394 = state_37375__$1;
(statearr_37379_37394[(1)] = (5));

} else {
var statearr_37380_37395 = state_37375__$1;
(statearr_37380_37395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37376 === (5))){
var inst_37363 = (state_37375[(7)]);
var inst_37365 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37363);
var state_37375__$1 = state_37375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37375__$1,(8),inst_37365);
} else {
if((state_val_37376 === (6))){
var state_37375__$1 = state_37375;
var statearr_37381_37396 = state_37375__$1;
(statearr_37381_37396[(2)] = null);

(statearr_37381_37396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37376 === (7))){
var inst_37371 = (state_37375[(2)]);
var state_37375__$1 = state_37375;
var statearr_37382_37397 = state_37375__$1;
(statearr_37382_37397[(2)] = inst_37371);

(statearr_37382_37397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37376 === (8))){
var inst_37367 = (state_37375[(2)]);
var state_37375__$1 = (function (){var statearr_37383 = state_37375;
(statearr_37383[(8)] = inst_37367);

return statearr_37383;
})();
var statearr_37384_37398 = state_37375__$1;
(statearr_37384_37398[(2)] = null);

(statearr_37384_37398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__29262__auto___37392,ch))
;
return ((function (switch__29150__auto__,c__29262__auto___37392,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29151__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29151__auto____0 = (function (){
var statearr_37388 = [null,null,null,null,null,null,null,null,null];
(statearr_37388[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29151__auto__);

(statearr_37388[(1)] = (1));

return statearr_37388;
});
var figwheel$client$heads_up_plugin_$_state_machine__29151__auto____1 = (function (state_37375){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_37375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e37389){if((e37389 instanceof Object)){
var ex__29154__auto__ = e37389;
var statearr_37390_37399 = state_37375;
(statearr_37390_37399[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37400 = state_37375;
state_37375 = G__37400;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29151__auto__ = function(state_37375){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29151__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29151__auto____1.call(this,state_37375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29151__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29151__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto___37392,ch))
})();
var state__29264__auto__ = (function (){var statearr_37391 = f__29263__auto__.call(null);
(statearr_37391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto___37392);

return statearr_37391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto___37392,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29262__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto__){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto__){
return (function (state_37421){
var state_val_37422 = (state_37421[(1)]);
if((state_val_37422 === (1))){
var inst_37416 = cljs.core.async.timeout.call(null,(3000));
var state_37421__$1 = state_37421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37421__$1,(2),inst_37416);
} else {
if((state_val_37422 === (2))){
var inst_37418 = (state_37421[(2)]);
var inst_37419 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37421__$1 = (function (){var statearr_37423 = state_37421;
(statearr_37423[(7)] = inst_37418);

return statearr_37423;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37421__$1,inst_37419);
} else {
return null;
}
}
});})(c__29262__auto__))
;
return ((function (switch__29150__auto__,c__29262__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29151__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29151__auto____0 = (function (){
var statearr_37427 = [null,null,null,null,null,null,null,null];
(statearr_37427[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29151__auto__);

(statearr_37427[(1)] = (1));

return statearr_37427;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29151__auto____1 = (function (state_37421){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_37421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e37428){if((e37428 instanceof Object)){
var ex__29154__auto__ = e37428;
var statearr_37429_37431 = state_37421;
(statearr_37429_37431[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37432 = state_37421;
state_37421 = G__37432;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29151__auto__ = function(state_37421){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29151__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29151__auto____1.call(this,state_37421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29151__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29151__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto__))
})();
var state__29264__auto__ = (function (){var statearr_37430 = f__29263__auto__.call(null);
(statearr_37430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto__);

return statearr_37430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto__))
);

return c__29262__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29262__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37455){
var state_val_37456 = (state_37455[(1)]);
if((state_val_37456 === (1))){
var inst_37449 = cljs.core.async.timeout.call(null,(2000));
var state_37455__$1 = state_37455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37455__$1,(2),inst_37449);
} else {
if((state_val_37456 === (2))){
var inst_37451 = (state_37455[(2)]);
var inst_37452 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37453 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37452);
var state_37455__$1 = (function (){var statearr_37457 = state_37455;
(statearr_37457[(7)] = inst_37451);

return statearr_37457;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37455__$1,inst_37453);
} else {
return null;
}
}
});})(c__29262__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__29150__auto__,c__29262__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29151__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29151__auto____0 = (function (){
var statearr_37461 = [null,null,null,null,null,null,null,null];
(statearr_37461[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29151__auto__);

(statearr_37461[(1)] = (1));

return statearr_37461;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29151__auto____1 = (function (state_37455){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_37455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e37462){if((e37462 instanceof Object)){
var ex__29154__auto__ = e37462;
var statearr_37463_37465 = state_37455;
(statearr_37463_37465[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37466 = state_37455;
state_37455 = G__37466;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29151__auto__ = function(state_37455){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29151__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29151__auto____1.call(this,state_37455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29151__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29151__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto__,figwheel_version,temp__4657__auto__))
})();
var state__29264__auto__ = (function (){var statearr_37464 = f__29263__auto__.call(null);
(statearr_37464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto__);

return statearr_37464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto__,figwheel_version,temp__4657__auto__))
);

return c__29262__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37467){
var map__37471 = p__37467;
var map__37471__$1 = ((((!((map__37471 == null)))?((((map__37471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37471.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37471):map__37471);
var file = cljs.core.get.call(null,map__37471__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37471__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37471__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37473 = "";
var G__37473__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37473),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37473);
var G__37473__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37473__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37473__$1);
if(cljs.core.truth_((function (){var and__26358__auto__ = line;
if(cljs.core.truth_(and__26358__auto__)){
return column;
} else {
return and__26358__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37473__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37473__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37474){
var map__37481 = p__37474;
var map__37481__$1 = ((((!((map__37481 == null)))?((((map__37481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37481):map__37481);
var ed = map__37481__$1;
var formatted_exception = cljs.core.get.call(null,map__37481__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37481__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37481__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37483_37487 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37484_37488 = null;
var count__37485_37489 = (0);
var i__37486_37490 = (0);
while(true){
if((i__37486_37490 < count__37485_37489)){
var msg_37491 = cljs.core._nth.call(null,chunk__37484_37488,i__37486_37490);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37491);

var G__37492 = seq__37483_37487;
var G__37493 = chunk__37484_37488;
var G__37494 = count__37485_37489;
var G__37495 = (i__37486_37490 + (1));
seq__37483_37487 = G__37492;
chunk__37484_37488 = G__37493;
count__37485_37489 = G__37494;
i__37486_37490 = G__37495;
continue;
} else {
var temp__4657__auto___37496 = cljs.core.seq.call(null,seq__37483_37487);
if(temp__4657__auto___37496){
var seq__37483_37497__$1 = temp__4657__auto___37496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37483_37497__$1)){
var c__27189__auto___37498 = cljs.core.chunk_first.call(null,seq__37483_37497__$1);
var G__37499 = cljs.core.chunk_rest.call(null,seq__37483_37497__$1);
var G__37500 = c__27189__auto___37498;
var G__37501 = cljs.core.count.call(null,c__27189__auto___37498);
var G__37502 = (0);
seq__37483_37487 = G__37499;
chunk__37484_37488 = G__37500;
count__37485_37489 = G__37501;
i__37486_37490 = G__37502;
continue;
} else {
var msg_37503 = cljs.core.first.call(null,seq__37483_37497__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37503);

var G__37504 = cljs.core.next.call(null,seq__37483_37497__$1);
var G__37505 = null;
var G__37506 = (0);
var G__37507 = (0);
seq__37483_37487 = G__37504;
chunk__37484_37488 = G__37505;
count__37485_37489 = G__37506;
i__37486_37490 = G__37507;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37508){
var map__37511 = p__37508;
var map__37511__$1 = ((((!((map__37511 == null)))?((((map__37511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37511.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37511):map__37511);
var w = map__37511__$1;
var message = cljs.core.get.call(null,map__37511__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__26358__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__26358__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__26358__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37523 = cljs.core.seq.call(null,plugins);
var chunk__37524 = null;
var count__37525 = (0);
var i__37526 = (0);
while(true){
if((i__37526 < count__37525)){
var vec__37527 = cljs.core._nth.call(null,chunk__37524,i__37526);
var k = cljs.core.nth.call(null,vec__37527,(0),null);
var plugin = cljs.core.nth.call(null,vec__37527,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37533 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37523,chunk__37524,count__37525,i__37526,pl_37533,vec__37527,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37533.call(null,msg_hist);
});})(seq__37523,chunk__37524,count__37525,i__37526,pl_37533,vec__37527,k,plugin))
);
} else {
}

var G__37534 = seq__37523;
var G__37535 = chunk__37524;
var G__37536 = count__37525;
var G__37537 = (i__37526 + (1));
seq__37523 = G__37534;
chunk__37524 = G__37535;
count__37525 = G__37536;
i__37526 = G__37537;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37523);
if(temp__4657__auto__){
var seq__37523__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37523__$1)){
var c__27189__auto__ = cljs.core.chunk_first.call(null,seq__37523__$1);
var G__37538 = cljs.core.chunk_rest.call(null,seq__37523__$1);
var G__37539 = c__27189__auto__;
var G__37540 = cljs.core.count.call(null,c__27189__auto__);
var G__37541 = (0);
seq__37523 = G__37538;
chunk__37524 = G__37539;
count__37525 = G__37540;
i__37526 = G__37541;
continue;
} else {
var vec__37530 = cljs.core.first.call(null,seq__37523__$1);
var k = cljs.core.nth.call(null,vec__37530,(0),null);
var plugin = cljs.core.nth.call(null,vec__37530,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37542 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37523,chunk__37524,count__37525,i__37526,pl_37542,vec__37530,k,plugin,seq__37523__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37542.call(null,msg_hist);
});})(seq__37523,chunk__37524,count__37525,i__37526,pl_37542,vec__37530,k,plugin,seq__37523__$1,temp__4657__auto__))
);
} else {
}

var G__37543 = cljs.core.next.call(null,seq__37523__$1);
var G__37544 = null;
var G__37545 = (0);
var G__37546 = (0);
seq__37523 = G__37543;
chunk__37524 = G__37544;
count__37525 = G__37545;
i__37526 = G__37546;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37547 = [];
var len__27483__auto___37554 = arguments.length;
var i__27484__auto___37555 = (0);
while(true){
if((i__27484__auto___37555 < len__27483__auto___37554)){
args37547.push((arguments[i__27484__auto___37555]));

var G__37556 = (i__27484__auto___37555 + (1));
i__27484__auto___37555 = G__37556;
continue;
} else {
}
break;
}

var G__37549 = args37547.length;
switch (G__37549) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37547.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37550_37558 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37551_37559 = null;
var count__37552_37560 = (0);
var i__37553_37561 = (0);
while(true){
if((i__37553_37561 < count__37552_37560)){
var msg_37562 = cljs.core._nth.call(null,chunk__37551_37559,i__37553_37561);
figwheel.client.socket.handle_incoming_message.call(null,msg_37562);

var G__37563 = seq__37550_37558;
var G__37564 = chunk__37551_37559;
var G__37565 = count__37552_37560;
var G__37566 = (i__37553_37561 + (1));
seq__37550_37558 = G__37563;
chunk__37551_37559 = G__37564;
count__37552_37560 = G__37565;
i__37553_37561 = G__37566;
continue;
} else {
var temp__4657__auto___37567 = cljs.core.seq.call(null,seq__37550_37558);
if(temp__4657__auto___37567){
var seq__37550_37568__$1 = temp__4657__auto___37567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37550_37568__$1)){
var c__27189__auto___37569 = cljs.core.chunk_first.call(null,seq__37550_37568__$1);
var G__37570 = cljs.core.chunk_rest.call(null,seq__37550_37568__$1);
var G__37571 = c__27189__auto___37569;
var G__37572 = cljs.core.count.call(null,c__27189__auto___37569);
var G__37573 = (0);
seq__37550_37558 = G__37570;
chunk__37551_37559 = G__37571;
count__37552_37560 = G__37572;
i__37553_37561 = G__37573;
continue;
} else {
var msg_37574 = cljs.core.first.call(null,seq__37550_37568__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37574);

var G__37575 = cljs.core.next.call(null,seq__37550_37568__$1);
var G__37576 = null;
var G__37577 = (0);
var G__37578 = (0);
seq__37550_37558 = G__37575;
chunk__37551_37559 = G__37576;
count__37552_37560 = G__37577;
i__37553_37561 = G__37578;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27490__auto__ = [];
var len__27483__auto___37583 = arguments.length;
var i__27484__auto___37584 = (0);
while(true){
if((i__27484__auto___37584 < len__27483__auto___37583)){
args__27490__auto__.push((arguments[i__27484__auto___37584]));

var G__37585 = (i__27484__auto___37584 + (1));
i__27484__auto___37584 = G__37585;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((0) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27491__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37580){
var map__37581 = p__37580;
var map__37581__$1 = ((((!((map__37581 == null)))?((((map__37581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37581):map__37581);
var opts = map__37581__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37579){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37579));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37587){if((e37587 instanceof Error)){
var e = e37587;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37587;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37591){
var map__37592 = p__37591;
var map__37592__$1 = ((((!((map__37592 == null)))?((((map__37592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37592):map__37592);
var msg_name = cljs.core.get.call(null,map__37592__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1492960139145