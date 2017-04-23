// Compiled by ClojureScript 1.9.495 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__26370__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26370__auto__){
return or__26370__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__26370__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__26370__auto__)){
return or__26370__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33904_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33904_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33909 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33910 = null;
var count__33911 = (0);
var i__33912 = (0);
while(true){
if((i__33912 < count__33911)){
var n = cljs.core._nth.call(null,chunk__33910,i__33912);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33913 = seq__33909;
var G__33914 = chunk__33910;
var G__33915 = count__33911;
var G__33916 = (i__33912 + (1));
seq__33909 = G__33913;
chunk__33910 = G__33914;
count__33911 = G__33915;
i__33912 = G__33916;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33909);
if(temp__4657__auto__){
var seq__33909__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33909__$1)){
var c__27189__auto__ = cljs.core.chunk_first.call(null,seq__33909__$1);
var G__33917 = cljs.core.chunk_rest.call(null,seq__33909__$1);
var G__33918 = c__27189__auto__;
var G__33919 = cljs.core.count.call(null,c__27189__auto__);
var G__33920 = (0);
seq__33909 = G__33917;
chunk__33910 = G__33918;
count__33911 = G__33919;
i__33912 = G__33920;
continue;
} else {
var n = cljs.core.first.call(null,seq__33909__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33921 = cljs.core.next.call(null,seq__33909__$1);
var G__33922 = null;
var G__33923 = (0);
var G__33924 = (0);
seq__33909 = G__33921;
chunk__33910 = G__33922;
count__33911 = G__33923;
i__33912 = G__33924;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__33975_33986 = cljs.core.seq.call(null,deps);
var chunk__33976_33987 = null;
var count__33977_33988 = (0);
var i__33978_33989 = (0);
while(true){
if((i__33978_33989 < count__33977_33988)){
var dep_33990 = cljs.core._nth.call(null,chunk__33976_33987,i__33978_33989);
topo_sort_helper_STAR_.call(null,dep_33990,(depth + (1)),state);

var G__33991 = seq__33975_33986;
var G__33992 = chunk__33976_33987;
var G__33993 = count__33977_33988;
var G__33994 = (i__33978_33989 + (1));
seq__33975_33986 = G__33991;
chunk__33976_33987 = G__33992;
count__33977_33988 = G__33993;
i__33978_33989 = G__33994;
continue;
} else {
var temp__4657__auto___33995 = cljs.core.seq.call(null,seq__33975_33986);
if(temp__4657__auto___33995){
var seq__33975_33996__$1 = temp__4657__auto___33995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33975_33996__$1)){
var c__27189__auto___33997 = cljs.core.chunk_first.call(null,seq__33975_33996__$1);
var G__33998 = cljs.core.chunk_rest.call(null,seq__33975_33996__$1);
var G__33999 = c__27189__auto___33997;
var G__34000 = cljs.core.count.call(null,c__27189__auto___33997);
var G__34001 = (0);
seq__33975_33986 = G__33998;
chunk__33976_33987 = G__33999;
count__33977_33988 = G__34000;
i__33978_33989 = G__34001;
continue;
} else {
var dep_34002 = cljs.core.first.call(null,seq__33975_33996__$1);
topo_sort_helper_STAR_.call(null,dep_34002,(depth + (1)),state);

var G__34003 = cljs.core.next.call(null,seq__33975_33996__$1);
var G__34004 = null;
var G__34005 = (0);
var G__34006 = (0);
seq__33975_33986 = G__34003;
chunk__33976_33987 = G__34004;
count__33977_33988 = G__34005;
i__33978_33989 = G__34006;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33979){
var vec__33983 = p__33979;
var seq__33984 = cljs.core.seq.call(null,vec__33983);
var first__33985 = cljs.core.first.call(null,seq__33984);
var seq__33984__$1 = cljs.core.next.call(null,seq__33984);
var x = first__33985;
var xs = seq__33984__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33983,seq__33984,first__33985,seq__33984__$1,x,xs,get_deps__$1){
return (function (p1__33925_SHARP_){
return clojure.set.difference.call(null,p1__33925_SHARP_,x);
});})(vec__33983,seq__33984,first__33985,seq__33984__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34019 = cljs.core.seq.call(null,provides);
var chunk__34020 = null;
var count__34021 = (0);
var i__34022 = (0);
while(true){
if((i__34022 < count__34021)){
var prov = cljs.core._nth.call(null,chunk__34020,i__34022);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34023_34031 = cljs.core.seq.call(null,requires);
var chunk__34024_34032 = null;
var count__34025_34033 = (0);
var i__34026_34034 = (0);
while(true){
if((i__34026_34034 < count__34025_34033)){
var req_34035 = cljs.core._nth.call(null,chunk__34024_34032,i__34026_34034);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34035,prov);

var G__34036 = seq__34023_34031;
var G__34037 = chunk__34024_34032;
var G__34038 = count__34025_34033;
var G__34039 = (i__34026_34034 + (1));
seq__34023_34031 = G__34036;
chunk__34024_34032 = G__34037;
count__34025_34033 = G__34038;
i__34026_34034 = G__34039;
continue;
} else {
var temp__4657__auto___34040 = cljs.core.seq.call(null,seq__34023_34031);
if(temp__4657__auto___34040){
var seq__34023_34041__$1 = temp__4657__auto___34040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34023_34041__$1)){
var c__27189__auto___34042 = cljs.core.chunk_first.call(null,seq__34023_34041__$1);
var G__34043 = cljs.core.chunk_rest.call(null,seq__34023_34041__$1);
var G__34044 = c__27189__auto___34042;
var G__34045 = cljs.core.count.call(null,c__27189__auto___34042);
var G__34046 = (0);
seq__34023_34031 = G__34043;
chunk__34024_34032 = G__34044;
count__34025_34033 = G__34045;
i__34026_34034 = G__34046;
continue;
} else {
var req_34047 = cljs.core.first.call(null,seq__34023_34041__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34047,prov);

var G__34048 = cljs.core.next.call(null,seq__34023_34041__$1);
var G__34049 = null;
var G__34050 = (0);
var G__34051 = (0);
seq__34023_34031 = G__34048;
chunk__34024_34032 = G__34049;
count__34025_34033 = G__34050;
i__34026_34034 = G__34051;
continue;
}
} else {
}
}
break;
}

var G__34052 = seq__34019;
var G__34053 = chunk__34020;
var G__34054 = count__34021;
var G__34055 = (i__34022 + (1));
seq__34019 = G__34052;
chunk__34020 = G__34053;
count__34021 = G__34054;
i__34022 = G__34055;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34019);
if(temp__4657__auto__){
var seq__34019__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34019__$1)){
var c__27189__auto__ = cljs.core.chunk_first.call(null,seq__34019__$1);
var G__34056 = cljs.core.chunk_rest.call(null,seq__34019__$1);
var G__34057 = c__27189__auto__;
var G__34058 = cljs.core.count.call(null,c__27189__auto__);
var G__34059 = (0);
seq__34019 = G__34056;
chunk__34020 = G__34057;
count__34021 = G__34058;
i__34022 = G__34059;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34019__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34027_34060 = cljs.core.seq.call(null,requires);
var chunk__34028_34061 = null;
var count__34029_34062 = (0);
var i__34030_34063 = (0);
while(true){
if((i__34030_34063 < count__34029_34062)){
var req_34064 = cljs.core._nth.call(null,chunk__34028_34061,i__34030_34063);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34064,prov);

var G__34065 = seq__34027_34060;
var G__34066 = chunk__34028_34061;
var G__34067 = count__34029_34062;
var G__34068 = (i__34030_34063 + (1));
seq__34027_34060 = G__34065;
chunk__34028_34061 = G__34066;
count__34029_34062 = G__34067;
i__34030_34063 = G__34068;
continue;
} else {
var temp__4657__auto___34069__$1 = cljs.core.seq.call(null,seq__34027_34060);
if(temp__4657__auto___34069__$1){
var seq__34027_34070__$1 = temp__4657__auto___34069__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34027_34070__$1)){
var c__27189__auto___34071 = cljs.core.chunk_first.call(null,seq__34027_34070__$1);
var G__34072 = cljs.core.chunk_rest.call(null,seq__34027_34070__$1);
var G__34073 = c__27189__auto___34071;
var G__34074 = cljs.core.count.call(null,c__27189__auto___34071);
var G__34075 = (0);
seq__34027_34060 = G__34072;
chunk__34028_34061 = G__34073;
count__34029_34062 = G__34074;
i__34030_34063 = G__34075;
continue;
} else {
var req_34076 = cljs.core.first.call(null,seq__34027_34070__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34076,prov);

var G__34077 = cljs.core.next.call(null,seq__34027_34070__$1);
var G__34078 = null;
var G__34079 = (0);
var G__34080 = (0);
seq__34027_34060 = G__34077;
chunk__34028_34061 = G__34078;
count__34029_34062 = G__34079;
i__34030_34063 = G__34080;
continue;
}
} else {
}
}
break;
}

var G__34081 = cljs.core.next.call(null,seq__34019__$1);
var G__34082 = null;
var G__34083 = (0);
var G__34084 = (0);
seq__34019 = G__34081;
chunk__34020 = G__34082;
count__34021 = G__34083;
i__34022 = G__34084;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34089_34093 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34090_34094 = null;
var count__34091_34095 = (0);
var i__34092_34096 = (0);
while(true){
if((i__34092_34096 < count__34091_34095)){
var ns_34097 = cljs.core._nth.call(null,chunk__34090_34094,i__34092_34096);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34097);

var G__34098 = seq__34089_34093;
var G__34099 = chunk__34090_34094;
var G__34100 = count__34091_34095;
var G__34101 = (i__34092_34096 + (1));
seq__34089_34093 = G__34098;
chunk__34090_34094 = G__34099;
count__34091_34095 = G__34100;
i__34092_34096 = G__34101;
continue;
} else {
var temp__4657__auto___34102 = cljs.core.seq.call(null,seq__34089_34093);
if(temp__4657__auto___34102){
var seq__34089_34103__$1 = temp__4657__auto___34102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34089_34103__$1)){
var c__27189__auto___34104 = cljs.core.chunk_first.call(null,seq__34089_34103__$1);
var G__34105 = cljs.core.chunk_rest.call(null,seq__34089_34103__$1);
var G__34106 = c__27189__auto___34104;
var G__34107 = cljs.core.count.call(null,c__27189__auto___34104);
var G__34108 = (0);
seq__34089_34093 = G__34105;
chunk__34090_34094 = G__34106;
count__34091_34095 = G__34107;
i__34092_34096 = G__34108;
continue;
} else {
var ns_34109 = cljs.core.first.call(null,seq__34089_34103__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34109);

var G__34110 = cljs.core.next.call(null,seq__34089_34103__$1);
var G__34111 = null;
var G__34112 = (0);
var G__34113 = (0);
seq__34089_34093 = G__34110;
chunk__34090_34094 = G__34111;
count__34091_34095 = G__34112;
i__34092_34096 = G__34113;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__26370__auto__ = goog.require__;
if(cljs.core.truth_(or__26370__auto__)){
return or__26370__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34114__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34115__i = 0, G__34115__a = new Array(arguments.length -  0);
while (G__34115__i < G__34115__a.length) {G__34115__a[G__34115__i] = arguments[G__34115__i + 0]; ++G__34115__i;}
  args = new cljs.core.IndexedSeq(G__34115__a,0);
} 
return G__34114__delegate.call(this,args);};
G__34114.cljs$lang$maxFixedArity = 0;
G__34114.cljs$lang$applyTo = (function (arglist__34116){
var args = cljs.core.seq(arglist__34116);
return G__34114__delegate(args);
});
G__34114.cljs$core$IFn$_invoke$arity$variadic = G__34114__delegate;
return G__34114;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34117 = cljs.core._EQ_;
var expr__34118 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34117.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34118))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34117,expr__34118){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34117,expr__34118))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34117,expr__34118){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34120){if((e34120 instanceof Error)){
var e = e34120;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34120;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34117,expr__34118))
} else {
if(cljs.core.truth_(pred__34117.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34118))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34117.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__34118))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34117.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34118))){
return ((function (pred__34117,expr__34118){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34121){if((e34121 instanceof Error)){
var e = e34121;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34121;

}
}})());
});
;})(pred__34117,expr__34118))
} else {
return ((function (pred__34117,expr__34118){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34117,expr__34118))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34122,callback){
var map__34125 = p__34122;
var map__34125__$1 = ((((!((map__34125 == null)))?((((map__34125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34125):map__34125);
var file_msg = map__34125__$1;
var request_url = cljs.core.get.call(null,map__34125__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34125,map__34125__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34125,map__34125__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29262__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto__){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto__){
return (function (state_34149){
var state_val_34150 = (state_34149[(1)]);
if((state_val_34150 === (7))){
var inst_34145 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
var statearr_34151_34171 = state_34149__$1;
(statearr_34151_34171[(2)] = inst_34145);

(statearr_34151_34171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (1))){
var state_34149__$1 = state_34149;
var statearr_34152_34172 = state_34149__$1;
(statearr_34152_34172[(2)] = null);

(statearr_34152_34172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (4))){
var inst_34129 = (state_34149[(7)]);
var inst_34129__$1 = (state_34149[(2)]);
var state_34149__$1 = (function (){var statearr_34153 = state_34149;
(statearr_34153[(7)] = inst_34129__$1);

return statearr_34153;
})();
if(cljs.core.truth_(inst_34129__$1)){
var statearr_34154_34173 = state_34149__$1;
(statearr_34154_34173[(1)] = (5));

} else {
var statearr_34155_34174 = state_34149__$1;
(statearr_34155_34174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (6))){
var state_34149__$1 = state_34149;
var statearr_34156_34175 = state_34149__$1;
(statearr_34156_34175[(2)] = null);

(statearr_34156_34175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (3))){
var inst_34147 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34149__$1,inst_34147);
} else {
if((state_val_34150 === (2))){
var state_34149__$1 = state_34149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34149__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34150 === (11))){
var inst_34141 = (state_34149[(2)]);
var state_34149__$1 = (function (){var statearr_34157 = state_34149;
(statearr_34157[(8)] = inst_34141);

return statearr_34157;
})();
var statearr_34158_34176 = state_34149__$1;
(statearr_34158_34176[(2)] = null);

(statearr_34158_34176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (9))){
var inst_34135 = (state_34149[(9)]);
var inst_34133 = (state_34149[(10)]);
var inst_34137 = inst_34135.call(null,inst_34133);
var state_34149__$1 = state_34149;
var statearr_34159_34177 = state_34149__$1;
(statearr_34159_34177[(2)] = inst_34137);

(statearr_34159_34177[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (5))){
var inst_34129 = (state_34149[(7)]);
var inst_34131 = figwheel.client.file_reloading.blocking_load.call(null,inst_34129);
var state_34149__$1 = state_34149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34149__$1,(8),inst_34131);
} else {
if((state_val_34150 === (10))){
var inst_34133 = (state_34149[(10)]);
var inst_34139 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34133);
var state_34149__$1 = state_34149;
var statearr_34160_34178 = state_34149__$1;
(statearr_34160_34178[(2)] = inst_34139);

(statearr_34160_34178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (8))){
var inst_34135 = (state_34149[(9)]);
var inst_34129 = (state_34149[(7)]);
var inst_34133 = (state_34149[(2)]);
var inst_34134 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34135__$1 = cljs.core.get.call(null,inst_34134,inst_34129);
var state_34149__$1 = (function (){var statearr_34161 = state_34149;
(statearr_34161[(9)] = inst_34135__$1);

(statearr_34161[(10)] = inst_34133);

return statearr_34161;
})();
if(cljs.core.truth_(inst_34135__$1)){
var statearr_34162_34179 = state_34149__$1;
(statearr_34162_34179[(1)] = (9));

} else {
var statearr_34163_34180 = state_34149__$1;
(statearr_34163_34180[(1)] = (10));

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
});})(c__29262__auto__))
;
return ((function (switch__29150__auto__,c__29262__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29151__auto__ = null;
var figwheel$client$file_reloading$state_machine__29151__auto____0 = (function (){
var statearr_34167 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34167[(0)] = figwheel$client$file_reloading$state_machine__29151__auto__);

(statearr_34167[(1)] = (1));

return statearr_34167;
});
var figwheel$client$file_reloading$state_machine__29151__auto____1 = (function (state_34149){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_34149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e34168){if((e34168 instanceof Object)){
var ex__29154__auto__ = e34168;
var statearr_34169_34181 = state_34149;
(statearr_34169_34181[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34182 = state_34149;
state_34149 = G__34182;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29151__auto__ = function(state_34149){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29151__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29151__auto____1.call(this,state_34149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29151__auto____0;
figwheel$client$file_reloading$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29151__auto____1;
return figwheel$client$file_reloading$state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto__))
})();
var state__29264__auto__ = (function (){var statearr_34170 = f__29263__auto__.call(null);
(statearr_34170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto__);

return statearr_34170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto__))
);

return c__29262__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34183,callback){
var map__34186 = p__34183;
var map__34186__$1 = ((((!((map__34186 == null)))?((((map__34186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34186):map__34186);
var file_msg = map__34186__$1;
var namespace = cljs.core.get.call(null,map__34186__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34186,map__34186__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34186,map__34186__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34188){
var map__34191 = p__34188;
var map__34191__$1 = ((((!((map__34191 == null)))?((((map__34191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34191):map__34191);
var file_msg = map__34191__$1;
var namespace = cljs.core.get.call(null,map__34191__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34193){
var map__34196 = p__34193;
var map__34196__$1 = ((((!((map__34196 == null)))?((((map__34196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34196):map__34196);
var file_msg = map__34196__$1;
var namespace = cljs.core.get.call(null,map__34196__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26358__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__26358__auto__){
var or__26370__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26370__auto__)){
return or__26370__auto__;
} else {
var or__26370__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26370__auto____$1)){
return or__26370__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26358__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34198,callback){
var map__34201 = p__34198;
var map__34201__$1 = ((((!((map__34201 == null)))?((((map__34201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34201):map__34201);
var file_msg = map__34201__$1;
var request_url = cljs.core.get.call(null,map__34201__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34201__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29262__auto___34305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto___34305,out){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto___34305,out){
return (function (state_34287){
var state_val_34288 = (state_34287[(1)]);
if((state_val_34288 === (1))){
var inst_34261 = cljs.core.seq.call(null,files);
var inst_34262 = cljs.core.first.call(null,inst_34261);
var inst_34263 = cljs.core.next.call(null,inst_34261);
var inst_34264 = files;
var state_34287__$1 = (function (){var statearr_34289 = state_34287;
(statearr_34289[(7)] = inst_34264);

(statearr_34289[(8)] = inst_34262);

(statearr_34289[(9)] = inst_34263);

return statearr_34289;
})();
var statearr_34290_34306 = state_34287__$1;
(statearr_34290_34306[(2)] = null);

(statearr_34290_34306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (2))){
var inst_34264 = (state_34287[(7)]);
var inst_34270 = (state_34287[(10)]);
var inst_34269 = cljs.core.seq.call(null,inst_34264);
var inst_34270__$1 = cljs.core.first.call(null,inst_34269);
var inst_34271 = cljs.core.next.call(null,inst_34269);
var inst_34272 = (inst_34270__$1 == null);
var inst_34273 = cljs.core.not.call(null,inst_34272);
var state_34287__$1 = (function (){var statearr_34291 = state_34287;
(statearr_34291[(11)] = inst_34271);

(statearr_34291[(10)] = inst_34270__$1);

return statearr_34291;
})();
if(inst_34273){
var statearr_34292_34307 = state_34287__$1;
(statearr_34292_34307[(1)] = (4));

} else {
var statearr_34293_34308 = state_34287__$1;
(statearr_34293_34308[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (3))){
var inst_34285 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34287__$1,inst_34285);
} else {
if((state_val_34288 === (4))){
var inst_34270 = (state_34287[(10)]);
var inst_34275 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34270);
var state_34287__$1 = state_34287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34287__$1,(7),inst_34275);
} else {
if((state_val_34288 === (5))){
var inst_34281 = cljs.core.async.close_BANG_.call(null,out);
var state_34287__$1 = state_34287;
var statearr_34294_34309 = state_34287__$1;
(statearr_34294_34309[(2)] = inst_34281);

(statearr_34294_34309[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (6))){
var inst_34283 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
var statearr_34295_34310 = state_34287__$1;
(statearr_34295_34310[(2)] = inst_34283);

(statearr_34295_34310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (7))){
var inst_34271 = (state_34287[(11)]);
var inst_34277 = (state_34287[(2)]);
var inst_34278 = cljs.core.async.put_BANG_.call(null,out,inst_34277);
var inst_34264 = inst_34271;
var state_34287__$1 = (function (){var statearr_34296 = state_34287;
(statearr_34296[(7)] = inst_34264);

(statearr_34296[(12)] = inst_34278);

return statearr_34296;
})();
var statearr_34297_34311 = state_34287__$1;
(statearr_34297_34311[(2)] = null);

(statearr_34297_34311[(1)] = (2));


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
});})(c__29262__auto___34305,out))
;
return ((function (switch__29150__auto__,c__29262__auto___34305,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29151__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29151__auto____0 = (function (){
var statearr_34301 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34301[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29151__auto__);

(statearr_34301[(1)] = (1));

return statearr_34301;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29151__auto____1 = (function (state_34287){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_34287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e34302){if((e34302 instanceof Object)){
var ex__29154__auto__ = e34302;
var statearr_34303_34312 = state_34287;
(statearr_34303_34312[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34313 = state_34287;
state_34287 = G__34313;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29151__auto__ = function(state_34287){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29151__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29151__auto____1.call(this,state_34287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29151__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29151__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto___34305,out))
})();
var state__29264__auto__ = (function (){var statearr_34304 = f__29263__auto__.call(null);
(statearr_34304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto___34305);

return statearr_34304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto___34305,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34314,opts){
var map__34318 = p__34314;
var map__34318__$1 = ((((!((map__34318 == null)))?((((map__34318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34318):map__34318);
var eval_body = cljs.core.get.call(null,map__34318__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34318__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26358__auto__ = eval_body;
if(cljs.core.truth_(and__26358__auto__)){
return typeof eval_body === 'string';
} else {
return and__26358__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34320){var e = e34320;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34321_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34321_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34330){
var vec__34331 = p__34330;
var k = cljs.core.nth.call(null,vec__34331,(0),null);
var v = cljs.core.nth.call(null,vec__34331,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34334){
var vec__34335 = p__34334;
var k = cljs.core.nth.call(null,vec__34335,(0),null);
var v = cljs.core.nth.call(null,vec__34335,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34341,p__34342){
var map__34590 = p__34341;
var map__34590__$1 = ((((!((map__34590 == null)))?((((map__34590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34590.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34590):map__34590);
var opts = map__34590__$1;
var before_jsload = cljs.core.get.call(null,map__34590__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34590__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34590__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34591 = p__34342;
var map__34591__$1 = ((((!((map__34591 == null)))?((((map__34591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34591):map__34591);
var msg = map__34591__$1;
var files = cljs.core.get.call(null,map__34591__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34591__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34591__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29262__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto__,map__34590,map__34590__$1,opts,before_jsload,on_jsload,reload_dependents,map__34591,map__34591__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto__,map__34590,map__34590__$1,opts,before_jsload,on_jsload,reload_dependents,map__34591,map__34591__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34745){
var state_val_34746 = (state_34745[(1)]);
if((state_val_34746 === (7))){
var inst_34605 = (state_34745[(7)]);
var inst_34607 = (state_34745[(8)]);
var inst_34608 = (state_34745[(9)]);
var inst_34606 = (state_34745[(10)]);
var inst_34613 = cljs.core._nth.call(null,inst_34606,inst_34608);
var inst_34614 = figwheel.client.file_reloading.eval_body.call(null,inst_34613,opts);
var inst_34615 = (inst_34608 + (1));
var tmp34747 = inst_34605;
var tmp34748 = inst_34607;
var tmp34749 = inst_34606;
var inst_34605__$1 = tmp34747;
var inst_34606__$1 = tmp34749;
var inst_34607__$1 = tmp34748;
var inst_34608__$1 = inst_34615;
var state_34745__$1 = (function (){var statearr_34750 = state_34745;
(statearr_34750[(7)] = inst_34605__$1);

(statearr_34750[(8)] = inst_34607__$1);

(statearr_34750[(11)] = inst_34614);

(statearr_34750[(9)] = inst_34608__$1);

(statearr_34750[(10)] = inst_34606__$1);

return statearr_34750;
})();
var statearr_34751_34837 = state_34745__$1;
(statearr_34751_34837[(2)] = null);

(statearr_34751_34837[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (20))){
var inst_34648 = (state_34745[(12)]);
var inst_34656 = figwheel.client.file_reloading.sort_files.call(null,inst_34648);
var state_34745__$1 = state_34745;
var statearr_34752_34838 = state_34745__$1;
(statearr_34752_34838[(2)] = inst_34656);

(statearr_34752_34838[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (27))){
var state_34745__$1 = state_34745;
var statearr_34753_34839 = state_34745__$1;
(statearr_34753_34839[(2)] = null);

(statearr_34753_34839[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (1))){
var inst_34597 = (state_34745[(13)]);
var inst_34594 = before_jsload.call(null,files);
var inst_34595 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34596 = (function (){return ((function (inst_34597,inst_34594,inst_34595,state_val_34746,c__29262__auto__,map__34590,map__34590__$1,opts,before_jsload,on_jsload,reload_dependents,map__34591,map__34591__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34338_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34338_SHARP_);
});
;})(inst_34597,inst_34594,inst_34595,state_val_34746,c__29262__auto__,map__34590,map__34590__$1,opts,before_jsload,on_jsload,reload_dependents,map__34591,map__34591__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34597__$1 = cljs.core.filter.call(null,inst_34596,files);
var inst_34598 = cljs.core.not_empty.call(null,inst_34597__$1);
var state_34745__$1 = (function (){var statearr_34754 = state_34745;
(statearr_34754[(14)] = inst_34595);

(statearr_34754[(15)] = inst_34594);

(statearr_34754[(13)] = inst_34597__$1);

return statearr_34754;
})();
if(cljs.core.truth_(inst_34598)){
var statearr_34755_34840 = state_34745__$1;
(statearr_34755_34840[(1)] = (2));

} else {
var statearr_34756_34841 = state_34745__$1;
(statearr_34756_34841[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (24))){
var state_34745__$1 = state_34745;
var statearr_34757_34842 = state_34745__$1;
(statearr_34757_34842[(2)] = null);

(statearr_34757_34842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (39))){
var inst_34698 = (state_34745[(16)]);
var state_34745__$1 = state_34745;
var statearr_34758_34843 = state_34745__$1;
(statearr_34758_34843[(2)] = inst_34698);

(statearr_34758_34843[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (46))){
var inst_34740 = (state_34745[(2)]);
var state_34745__$1 = state_34745;
var statearr_34759_34844 = state_34745__$1;
(statearr_34759_34844[(2)] = inst_34740);

(statearr_34759_34844[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (4))){
var inst_34642 = (state_34745[(2)]);
var inst_34643 = cljs.core.List.EMPTY;
var inst_34644 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34643);
var inst_34645 = (function (){return ((function (inst_34642,inst_34643,inst_34644,state_val_34746,c__29262__auto__,map__34590,map__34590__$1,opts,before_jsload,on_jsload,reload_dependents,map__34591,map__34591__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34339_SHARP_){
var and__26358__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34339_SHARP_);
if(cljs.core.truth_(and__26358__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34339_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34339_SHARP_)));
} else {
return and__26358__auto__;
}
});
;})(inst_34642,inst_34643,inst_34644,state_val_34746,c__29262__auto__,map__34590,map__34590__$1,opts,before_jsload,on_jsload,reload_dependents,map__34591,map__34591__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34646 = cljs.core.filter.call(null,inst_34645,files);
var inst_34647 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34648 = cljs.core.concat.call(null,inst_34646,inst_34647);
var state_34745__$1 = (function (){var statearr_34760 = state_34745;
(statearr_34760[(17)] = inst_34642);

(statearr_34760[(18)] = inst_34644);

(statearr_34760[(12)] = inst_34648);

return statearr_34760;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34761_34845 = state_34745__$1;
(statearr_34761_34845[(1)] = (16));

} else {
var statearr_34762_34846 = state_34745__$1;
(statearr_34762_34846[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (15))){
var inst_34632 = (state_34745[(2)]);
var state_34745__$1 = state_34745;
var statearr_34763_34847 = state_34745__$1;
(statearr_34763_34847[(2)] = inst_34632);

(statearr_34763_34847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (21))){
var inst_34658 = (state_34745[(19)]);
var inst_34658__$1 = (state_34745[(2)]);
var inst_34659 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34658__$1);
var state_34745__$1 = (function (){var statearr_34764 = state_34745;
(statearr_34764[(19)] = inst_34658__$1);

return statearr_34764;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34745__$1,(22),inst_34659);
} else {
if((state_val_34746 === (31))){
var inst_34743 = (state_34745[(2)]);
var state_34745__$1 = state_34745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34745__$1,inst_34743);
} else {
if((state_val_34746 === (32))){
var inst_34698 = (state_34745[(16)]);
var inst_34703 = inst_34698.cljs$lang$protocol_mask$partition0$;
var inst_34704 = (inst_34703 & (64));
var inst_34705 = inst_34698.cljs$core$ISeq$;
var inst_34706 = (cljs.core.PROTOCOL_SENTINEL === inst_34705);
var inst_34707 = (inst_34704) || (inst_34706);
var state_34745__$1 = state_34745;
if(cljs.core.truth_(inst_34707)){
var statearr_34765_34848 = state_34745__$1;
(statearr_34765_34848[(1)] = (35));

} else {
var statearr_34766_34849 = state_34745__$1;
(statearr_34766_34849[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (40))){
var inst_34720 = (state_34745[(20)]);
var inst_34719 = (state_34745[(2)]);
var inst_34720__$1 = cljs.core.get.call(null,inst_34719,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34721 = cljs.core.get.call(null,inst_34719,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34722 = cljs.core.not_empty.call(null,inst_34720__$1);
var state_34745__$1 = (function (){var statearr_34767 = state_34745;
(statearr_34767[(21)] = inst_34721);

(statearr_34767[(20)] = inst_34720__$1);

return statearr_34767;
})();
if(cljs.core.truth_(inst_34722)){
var statearr_34768_34850 = state_34745__$1;
(statearr_34768_34850[(1)] = (41));

} else {
var statearr_34769_34851 = state_34745__$1;
(statearr_34769_34851[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (33))){
var state_34745__$1 = state_34745;
var statearr_34770_34852 = state_34745__$1;
(statearr_34770_34852[(2)] = false);

(statearr_34770_34852[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (13))){
var inst_34618 = (state_34745[(22)]);
var inst_34622 = cljs.core.chunk_first.call(null,inst_34618);
var inst_34623 = cljs.core.chunk_rest.call(null,inst_34618);
var inst_34624 = cljs.core.count.call(null,inst_34622);
var inst_34605 = inst_34623;
var inst_34606 = inst_34622;
var inst_34607 = inst_34624;
var inst_34608 = (0);
var state_34745__$1 = (function (){var statearr_34771 = state_34745;
(statearr_34771[(7)] = inst_34605);

(statearr_34771[(8)] = inst_34607);

(statearr_34771[(9)] = inst_34608);

(statearr_34771[(10)] = inst_34606);

return statearr_34771;
})();
var statearr_34772_34853 = state_34745__$1;
(statearr_34772_34853[(2)] = null);

(statearr_34772_34853[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (22))){
var inst_34666 = (state_34745[(23)]);
var inst_34658 = (state_34745[(19)]);
var inst_34661 = (state_34745[(24)]);
var inst_34662 = (state_34745[(25)]);
var inst_34661__$1 = (state_34745[(2)]);
var inst_34662__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34661__$1);
var inst_34663 = (function (){var all_files = inst_34658;
var res_SINGLEQUOTE_ = inst_34661__$1;
var res = inst_34662__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34666,inst_34658,inst_34661,inst_34662,inst_34661__$1,inst_34662__$1,state_val_34746,c__29262__auto__,map__34590,map__34590__$1,opts,before_jsload,on_jsload,reload_dependents,map__34591,map__34591__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34340_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34340_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34666,inst_34658,inst_34661,inst_34662,inst_34661__$1,inst_34662__$1,state_val_34746,c__29262__auto__,map__34590,map__34590__$1,opts,before_jsload,on_jsload,reload_dependents,map__34591,map__34591__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34664 = cljs.core.filter.call(null,inst_34663,inst_34661__$1);
var inst_34665 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34666__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34665);
var inst_34667 = cljs.core.not_empty.call(null,inst_34666__$1);
var state_34745__$1 = (function (){var statearr_34773 = state_34745;
(statearr_34773[(23)] = inst_34666__$1);

(statearr_34773[(26)] = inst_34664);

(statearr_34773[(24)] = inst_34661__$1);

(statearr_34773[(25)] = inst_34662__$1);

return statearr_34773;
})();
if(cljs.core.truth_(inst_34667)){
var statearr_34774_34854 = state_34745__$1;
(statearr_34774_34854[(1)] = (23));

} else {
var statearr_34775_34855 = state_34745__$1;
(statearr_34775_34855[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (36))){
var state_34745__$1 = state_34745;
var statearr_34776_34856 = state_34745__$1;
(statearr_34776_34856[(2)] = false);

(statearr_34776_34856[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (41))){
var inst_34720 = (state_34745[(20)]);
var inst_34724 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34725 = cljs.core.map.call(null,inst_34724,inst_34720);
var inst_34726 = cljs.core.pr_str.call(null,inst_34725);
var inst_34727 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34726)].join('');
var inst_34728 = figwheel.client.utils.log.call(null,inst_34727);
var state_34745__$1 = state_34745;
var statearr_34777_34857 = state_34745__$1;
(statearr_34777_34857[(2)] = inst_34728);

(statearr_34777_34857[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (43))){
var inst_34721 = (state_34745[(21)]);
var inst_34731 = (state_34745[(2)]);
var inst_34732 = cljs.core.not_empty.call(null,inst_34721);
var state_34745__$1 = (function (){var statearr_34778 = state_34745;
(statearr_34778[(27)] = inst_34731);

return statearr_34778;
})();
if(cljs.core.truth_(inst_34732)){
var statearr_34779_34858 = state_34745__$1;
(statearr_34779_34858[(1)] = (44));

} else {
var statearr_34780_34859 = state_34745__$1;
(statearr_34780_34859[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (29))){
var inst_34698 = (state_34745[(16)]);
var inst_34666 = (state_34745[(23)]);
var inst_34658 = (state_34745[(19)]);
var inst_34664 = (state_34745[(26)]);
var inst_34661 = (state_34745[(24)]);
var inst_34662 = (state_34745[(25)]);
var inst_34694 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34697 = (function (){var all_files = inst_34658;
var res_SINGLEQUOTE_ = inst_34661;
var res = inst_34662;
var files_not_loaded = inst_34664;
var dependencies_that_loaded = inst_34666;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34698,inst_34666,inst_34658,inst_34664,inst_34661,inst_34662,inst_34694,state_val_34746,c__29262__auto__,map__34590,map__34590__$1,opts,before_jsload,on_jsload,reload_dependents,map__34591,map__34591__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34696){
var map__34781 = p__34696;
var map__34781__$1 = ((((!((map__34781 == null)))?((((map__34781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34781):map__34781);
var namespace = cljs.core.get.call(null,map__34781__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34698,inst_34666,inst_34658,inst_34664,inst_34661,inst_34662,inst_34694,state_val_34746,c__29262__auto__,map__34590,map__34590__$1,opts,before_jsload,on_jsload,reload_dependents,map__34591,map__34591__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34698__$1 = cljs.core.group_by.call(null,inst_34697,inst_34664);
var inst_34700 = (inst_34698__$1 == null);
var inst_34701 = cljs.core.not.call(null,inst_34700);
var state_34745__$1 = (function (){var statearr_34783 = state_34745;
(statearr_34783[(16)] = inst_34698__$1);

(statearr_34783[(28)] = inst_34694);

return statearr_34783;
})();
if(inst_34701){
var statearr_34784_34860 = state_34745__$1;
(statearr_34784_34860[(1)] = (32));

} else {
var statearr_34785_34861 = state_34745__$1;
(statearr_34785_34861[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (44))){
var inst_34721 = (state_34745[(21)]);
var inst_34734 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34721);
var inst_34735 = cljs.core.pr_str.call(null,inst_34734);
var inst_34736 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34735)].join('');
var inst_34737 = figwheel.client.utils.log.call(null,inst_34736);
var state_34745__$1 = state_34745;
var statearr_34786_34862 = state_34745__$1;
(statearr_34786_34862[(2)] = inst_34737);

(statearr_34786_34862[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (6))){
var inst_34639 = (state_34745[(2)]);
var state_34745__$1 = state_34745;
var statearr_34787_34863 = state_34745__$1;
(statearr_34787_34863[(2)] = inst_34639);

(statearr_34787_34863[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (28))){
var inst_34664 = (state_34745[(26)]);
var inst_34691 = (state_34745[(2)]);
var inst_34692 = cljs.core.not_empty.call(null,inst_34664);
var state_34745__$1 = (function (){var statearr_34788 = state_34745;
(statearr_34788[(29)] = inst_34691);

return statearr_34788;
})();
if(cljs.core.truth_(inst_34692)){
var statearr_34789_34864 = state_34745__$1;
(statearr_34789_34864[(1)] = (29));

} else {
var statearr_34790_34865 = state_34745__$1;
(statearr_34790_34865[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (25))){
var inst_34662 = (state_34745[(25)]);
var inst_34678 = (state_34745[(2)]);
var inst_34679 = cljs.core.not_empty.call(null,inst_34662);
var state_34745__$1 = (function (){var statearr_34791 = state_34745;
(statearr_34791[(30)] = inst_34678);

return statearr_34791;
})();
if(cljs.core.truth_(inst_34679)){
var statearr_34792_34866 = state_34745__$1;
(statearr_34792_34866[(1)] = (26));

} else {
var statearr_34793_34867 = state_34745__$1;
(statearr_34793_34867[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (34))){
var inst_34714 = (state_34745[(2)]);
var state_34745__$1 = state_34745;
if(cljs.core.truth_(inst_34714)){
var statearr_34794_34868 = state_34745__$1;
(statearr_34794_34868[(1)] = (38));

} else {
var statearr_34795_34869 = state_34745__$1;
(statearr_34795_34869[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (17))){
var state_34745__$1 = state_34745;
var statearr_34796_34870 = state_34745__$1;
(statearr_34796_34870[(2)] = recompile_dependents);

(statearr_34796_34870[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (3))){
var state_34745__$1 = state_34745;
var statearr_34797_34871 = state_34745__$1;
(statearr_34797_34871[(2)] = null);

(statearr_34797_34871[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (12))){
var inst_34635 = (state_34745[(2)]);
var state_34745__$1 = state_34745;
var statearr_34798_34872 = state_34745__$1;
(statearr_34798_34872[(2)] = inst_34635);

(statearr_34798_34872[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (2))){
var inst_34597 = (state_34745[(13)]);
var inst_34604 = cljs.core.seq.call(null,inst_34597);
var inst_34605 = inst_34604;
var inst_34606 = null;
var inst_34607 = (0);
var inst_34608 = (0);
var state_34745__$1 = (function (){var statearr_34799 = state_34745;
(statearr_34799[(7)] = inst_34605);

(statearr_34799[(8)] = inst_34607);

(statearr_34799[(9)] = inst_34608);

(statearr_34799[(10)] = inst_34606);

return statearr_34799;
})();
var statearr_34800_34873 = state_34745__$1;
(statearr_34800_34873[(2)] = null);

(statearr_34800_34873[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (23))){
var inst_34666 = (state_34745[(23)]);
var inst_34658 = (state_34745[(19)]);
var inst_34664 = (state_34745[(26)]);
var inst_34661 = (state_34745[(24)]);
var inst_34662 = (state_34745[(25)]);
var inst_34669 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34671 = (function (){var all_files = inst_34658;
var res_SINGLEQUOTE_ = inst_34661;
var res = inst_34662;
var files_not_loaded = inst_34664;
var dependencies_that_loaded = inst_34666;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34666,inst_34658,inst_34664,inst_34661,inst_34662,inst_34669,state_val_34746,c__29262__auto__,map__34590,map__34590__$1,opts,before_jsload,on_jsload,reload_dependents,map__34591,map__34591__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34670){
var map__34801 = p__34670;
var map__34801__$1 = ((((!((map__34801 == null)))?((((map__34801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34801):map__34801);
var request_url = cljs.core.get.call(null,map__34801__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34666,inst_34658,inst_34664,inst_34661,inst_34662,inst_34669,state_val_34746,c__29262__auto__,map__34590,map__34590__$1,opts,before_jsload,on_jsload,reload_dependents,map__34591,map__34591__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34672 = cljs.core.reverse.call(null,inst_34666);
var inst_34673 = cljs.core.map.call(null,inst_34671,inst_34672);
var inst_34674 = cljs.core.pr_str.call(null,inst_34673);
var inst_34675 = figwheel.client.utils.log.call(null,inst_34674);
var state_34745__$1 = (function (){var statearr_34803 = state_34745;
(statearr_34803[(31)] = inst_34669);

return statearr_34803;
})();
var statearr_34804_34874 = state_34745__$1;
(statearr_34804_34874[(2)] = inst_34675);

(statearr_34804_34874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (35))){
var state_34745__$1 = state_34745;
var statearr_34805_34875 = state_34745__$1;
(statearr_34805_34875[(2)] = true);

(statearr_34805_34875[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (19))){
var inst_34648 = (state_34745[(12)]);
var inst_34654 = figwheel.client.file_reloading.expand_files.call(null,inst_34648);
var state_34745__$1 = state_34745;
var statearr_34806_34876 = state_34745__$1;
(statearr_34806_34876[(2)] = inst_34654);

(statearr_34806_34876[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (11))){
var state_34745__$1 = state_34745;
var statearr_34807_34877 = state_34745__$1;
(statearr_34807_34877[(2)] = null);

(statearr_34807_34877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (9))){
var inst_34637 = (state_34745[(2)]);
var state_34745__$1 = state_34745;
var statearr_34808_34878 = state_34745__$1;
(statearr_34808_34878[(2)] = inst_34637);

(statearr_34808_34878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (5))){
var inst_34607 = (state_34745[(8)]);
var inst_34608 = (state_34745[(9)]);
var inst_34610 = (inst_34608 < inst_34607);
var inst_34611 = inst_34610;
var state_34745__$1 = state_34745;
if(cljs.core.truth_(inst_34611)){
var statearr_34809_34879 = state_34745__$1;
(statearr_34809_34879[(1)] = (7));

} else {
var statearr_34810_34880 = state_34745__$1;
(statearr_34810_34880[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (14))){
var inst_34618 = (state_34745[(22)]);
var inst_34627 = cljs.core.first.call(null,inst_34618);
var inst_34628 = figwheel.client.file_reloading.eval_body.call(null,inst_34627,opts);
var inst_34629 = cljs.core.next.call(null,inst_34618);
var inst_34605 = inst_34629;
var inst_34606 = null;
var inst_34607 = (0);
var inst_34608 = (0);
var state_34745__$1 = (function (){var statearr_34811 = state_34745;
(statearr_34811[(7)] = inst_34605);

(statearr_34811[(8)] = inst_34607);

(statearr_34811[(32)] = inst_34628);

(statearr_34811[(9)] = inst_34608);

(statearr_34811[(10)] = inst_34606);

return statearr_34811;
})();
var statearr_34812_34881 = state_34745__$1;
(statearr_34812_34881[(2)] = null);

(statearr_34812_34881[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (45))){
var state_34745__$1 = state_34745;
var statearr_34813_34882 = state_34745__$1;
(statearr_34813_34882[(2)] = null);

(statearr_34813_34882[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (26))){
var inst_34666 = (state_34745[(23)]);
var inst_34658 = (state_34745[(19)]);
var inst_34664 = (state_34745[(26)]);
var inst_34661 = (state_34745[(24)]);
var inst_34662 = (state_34745[(25)]);
var inst_34681 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34683 = (function (){var all_files = inst_34658;
var res_SINGLEQUOTE_ = inst_34661;
var res = inst_34662;
var files_not_loaded = inst_34664;
var dependencies_that_loaded = inst_34666;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34666,inst_34658,inst_34664,inst_34661,inst_34662,inst_34681,state_val_34746,c__29262__auto__,map__34590,map__34590__$1,opts,before_jsload,on_jsload,reload_dependents,map__34591,map__34591__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34682){
var map__34814 = p__34682;
var map__34814__$1 = ((((!((map__34814 == null)))?((((map__34814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34814.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34814):map__34814);
var namespace = cljs.core.get.call(null,map__34814__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34814__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34666,inst_34658,inst_34664,inst_34661,inst_34662,inst_34681,state_val_34746,c__29262__auto__,map__34590,map__34590__$1,opts,before_jsload,on_jsload,reload_dependents,map__34591,map__34591__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34684 = cljs.core.map.call(null,inst_34683,inst_34662);
var inst_34685 = cljs.core.pr_str.call(null,inst_34684);
var inst_34686 = figwheel.client.utils.log.call(null,inst_34685);
var inst_34687 = (function (){var all_files = inst_34658;
var res_SINGLEQUOTE_ = inst_34661;
var res = inst_34662;
var files_not_loaded = inst_34664;
var dependencies_that_loaded = inst_34666;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34666,inst_34658,inst_34664,inst_34661,inst_34662,inst_34681,inst_34683,inst_34684,inst_34685,inst_34686,state_val_34746,c__29262__auto__,map__34590,map__34590__$1,opts,before_jsload,on_jsload,reload_dependents,map__34591,map__34591__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34666,inst_34658,inst_34664,inst_34661,inst_34662,inst_34681,inst_34683,inst_34684,inst_34685,inst_34686,state_val_34746,c__29262__auto__,map__34590,map__34590__$1,opts,before_jsload,on_jsload,reload_dependents,map__34591,map__34591__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34688 = setTimeout(inst_34687,(10));
var state_34745__$1 = (function (){var statearr_34816 = state_34745;
(statearr_34816[(33)] = inst_34681);

(statearr_34816[(34)] = inst_34686);

return statearr_34816;
})();
var statearr_34817_34883 = state_34745__$1;
(statearr_34817_34883[(2)] = inst_34688);

(statearr_34817_34883[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (16))){
var state_34745__$1 = state_34745;
var statearr_34818_34884 = state_34745__$1;
(statearr_34818_34884[(2)] = reload_dependents);

(statearr_34818_34884[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (38))){
var inst_34698 = (state_34745[(16)]);
var inst_34716 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34698);
var state_34745__$1 = state_34745;
var statearr_34819_34885 = state_34745__$1;
(statearr_34819_34885[(2)] = inst_34716);

(statearr_34819_34885[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (30))){
var state_34745__$1 = state_34745;
var statearr_34820_34886 = state_34745__$1;
(statearr_34820_34886[(2)] = null);

(statearr_34820_34886[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (10))){
var inst_34618 = (state_34745[(22)]);
var inst_34620 = cljs.core.chunked_seq_QMARK_.call(null,inst_34618);
var state_34745__$1 = state_34745;
if(inst_34620){
var statearr_34821_34887 = state_34745__$1;
(statearr_34821_34887[(1)] = (13));

} else {
var statearr_34822_34888 = state_34745__$1;
(statearr_34822_34888[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (18))){
var inst_34652 = (state_34745[(2)]);
var state_34745__$1 = state_34745;
if(cljs.core.truth_(inst_34652)){
var statearr_34823_34889 = state_34745__$1;
(statearr_34823_34889[(1)] = (19));

} else {
var statearr_34824_34890 = state_34745__$1;
(statearr_34824_34890[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (42))){
var state_34745__$1 = state_34745;
var statearr_34825_34891 = state_34745__$1;
(statearr_34825_34891[(2)] = null);

(statearr_34825_34891[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (37))){
var inst_34711 = (state_34745[(2)]);
var state_34745__$1 = state_34745;
var statearr_34826_34892 = state_34745__$1;
(statearr_34826_34892[(2)] = inst_34711);

(statearr_34826_34892[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (8))){
var inst_34605 = (state_34745[(7)]);
var inst_34618 = (state_34745[(22)]);
var inst_34618__$1 = cljs.core.seq.call(null,inst_34605);
var state_34745__$1 = (function (){var statearr_34827 = state_34745;
(statearr_34827[(22)] = inst_34618__$1);

return statearr_34827;
})();
if(inst_34618__$1){
var statearr_34828_34893 = state_34745__$1;
(statearr_34828_34893[(1)] = (10));

} else {
var statearr_34829_34894 = state_34745__$1;
(statearr_34829_34894[(1)] = (11));

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
});})(c__29262__auto__,map__34590,map__34590__$1,opts,before_jsload,on_jsload,reload_dependents,map__34591,map__34591__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29150__auto__,c__29262__auto__,map__34590,map__34590__$1,opts,before_jsload,on_jsload,reload_dependents,map__34591,map__34591__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29151__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29151__auto____0 = (function (){
var statearr_34833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34833[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29151__auto__);

(statearr_34833[(1)] = (1));

return statearr_34833;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29151__auto____1 = (function (state_34745){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_34745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e34834){if((e34834 instanceof Object)){
var ex__29154__auto__ = e34834;
var statearr_34835_34895 = state_34745;
(statearr_34835_34895[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34896 = state_34745;
state_34745 = G__34896;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29151__auto__ = function(state_34745){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29151__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29151__auto____1.call(this,state_34745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29151__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29151__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto__,map__34590,map__34590__$1,opts,before_jsload,on_jsload,reload_dependents,map__34591,map__34591__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29264__auto__ = (function (){var statearr_34836 = f__29263__auto__.call(null);
(statearr_34836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto__);

return statearr_34836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto__,map__34590,map__34590__$1,opts,before_jsload,on_jsload,reload_dependents,map__34591,map__34591__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29262__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34899,link){
var map__34902 = p__34899;
var map__34902__$1 = ((((!((map__34902 == null)))?((((map__34902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34902.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34902):map__34902);
var file = cljs.core.get.call(null,map__34902__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34902,map__34902__$1,file){
return (function (p1__34897_SHARP_,p2__34898_SHARP_){
if(cljs.core._EQ_.call(null,p1__34897_SHARP_,p2__34898_SHARP_)){
return p1__34897_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34902,map__34902__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34908){
var map__34909 = p__34908;
var map__34909__$1 = ((((!((map__34909 == null)))?((((map__34909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34909):map__34909);
var match_length = cljs.core.get.call(null,map__34909__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34909__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34904_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34904_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34911_SHARP_,p2__34912_SHARP_){
return cljs.core.assoc.call(null,p1__34911_SHARP_,cljs.core.get.call(null,p2__34912_SHARP_,key),p2__34912_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_34913 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34913);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34913);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34914,p__34915){
var map__34920 = p__34914;
var map__34920__$1 = ((((!((map__34920 == null)))?((((map__34920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34920):map__34920);
var on_cssload = cljs.core.get.call(null,map__34920__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34921 = p__34915;
var map__34921__$1 = ((((!((map__34921 == null)))?((((map__34921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34921):map__34921);
var files_msg = map__34921__$1;
var files = cljs.core.get.call(null,map__34921__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1492960135354