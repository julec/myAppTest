// Compiled by ClojureScript 1.9.521 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
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
var or__29273__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__29273__auto__){
return or__29273__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__29273__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
var or__29273__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__29273__auto____$1)){
return or__29273__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36812_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36812_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
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
var seq__36817 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36818 = null;
var count__36819 = (0);
var i__36820 = (0);
while(true){
if((i__36820 < count__36819)){
var n = cljs.core._nth.call(null,chunk__36818,i__36820);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36821 = seq__36817;
var G__36822 = chunk__36818;
var G__36823 = count__36819;
var G__36824 = (i__36820 + (1));
seq__36817 = G__36821;
chunk__36818 = G__36822;
count__36819 = G__36823;
i__36820 = G__36824;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36817);
if(temp__5457__auto__){
var seq__36817__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36817__$1)){
var c__30184__auto__ = cljs.core.chunk_first.call(null,seq__36817__$1);
var G__36825 = cljs.core.chunk_rest.call(null,seq__36817__$1);
var G__36826 = c__30184__auto__;
var G__36827 = cljs.core.count.call(null,c__30184__auto__);
var G__36828 = (0);
seq__36817 = G__36825;
chunk__36818 = G__36826;
count__36819 = G__36827;
i__36820 = G__36828;
continue;
} else {
var n = cljs.core.first.call(null,seq__36817__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36829 = cljs.core.next.call(null,seq__36817__$1);
var G__36830 = null;
var G__36831 = (0);
var G__36832 = (0);
seq__36817 = G__36829;
chunk__36818 = G__36830;
count__36819 = G__36831;
i__36820 = G__36832;
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
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__36841){
var vec__36842 = p__36841;
var _ = cljs.core.nth.call(null,vec__36842,(0),null);
var v = cljs.core.nth.call(null,vec__36842,(1),null);
var and__29261__auto__ = v;
if(cljs.core.truth_(and__29261__auto__)){
return v.call(null,dep);
} else {
return and__29261__auto__;
}
}),cljs.core.filter.call(null,(function (p__36845){
var vec__36846 = p__36845;
var k = cljs.core.nth.call(null,vec__36846,(0),null);
var v = cljs.core.nth.call(null,vec__36846,(1),null);
return (k > current_depth);
}),topo_state));
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

var seq__36899_36910 = cljs.core.seq.call(null,deps);
var chunk__36900_36911 = null;
var count__36901_36912 = (0);
var i__36902_36913 = (0);
while(true){
if((i__36902_36913 < count__36901_36912)){
var dep_36914 = cljs.core._nth.call(null,chunk__36900_36911,i__36902_36913);
if(cljs.core.truth_((function (){var and__29261__auto__ = dep_36914;
if(cljs.core.truth_(and__29261__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36914));
} else {
return and__29261__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36914,(depth + (1)),state);
} else {
}

var G__36915 = seq__36899_36910;
var G__36916 = chunk__36900_36911;
var G__36917 = count__36901_36912;
var G__36918 = (i__36902_36913 + (1));
seq__36899_36910 = G__36915;
chunk__36900_36911 = G__36916;
count__36901_36912 = G__36917;
i__36902_36913 = G__36918;
continue;
} else {
var temp__5457__auto___36919 = cljs.core.seq.call(null,seq__36899_36910);
if(temp__5457__auto___36919){
var seq__36899_36920__$1 = temp__5457__auto___36919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36899_36920__$1)){
var c__30184__auto___36921 = cljs.core.chunk_first.call(null,seq__36899_36920__$1);
var G__36922 = cljs.core.chunk_rest.call(null,seq__36899_36920__$1);
var G__36923 = c__30184__auto___36921;
var G__36924 = cljs.core.count.call(null,c__30184__auto___36921);
var G__36925 = (0);
seq__36899_36910 = G__36922;
chunk__36900_36911 = G__36923;
count__36901_36912 = G__36924;
i__36902_36913 = G__36925;
continue;
} else {
var dep_36926 = cljs.core.first.call(null,seq__36899_36920__$1);
if(cljs.core.truth_((function (){var and__29261__auto__ = dep_36926;
if(cljs.core.truth_(and__29261__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36926));
} else {
return and__29261__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36926,(depth + (1)),state);
} else {
}

var G__36927 = cljs.core.next.call(null,seq__36899_36920__$1);
var G__36928 = null;
var G__36929 = (0);
var G__36930 = (0);
seq__36899_36910 = G__36927;
chunk__36900_36911 = G__36928;
count__36901_36912 = G__36929;
i__36902_36913 = G__36930;
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
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36903){
var vec__36907 = p__36903;
var seq__36908 = cljs.core.seq.call(null,vec__36907);
var first__36909 = cljs.core.first.call(null,seq__36908);
var seq__36908__$1 = cljs.core.next.call(null,seq__36908);
var x = first__36909;
var xs = seq__36908__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36907,seq__36908,first__36909,seq__36908__$1,x,xs,get_deps__$1){
return (function (p1__36849_SHARP_){
return clojure.set.difference.call(null,p1__36849_SHARP_,x);
});})(vec__36907,seq__36908,first__36909,seq__36908__$1,x,xs,get_deps__$1))
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
var seq__36943 = cljs.core.seq.call(null,provides);
var chunk__36944 = null;
var count__36945 = (0);
var i__36946 = (0);
while(true){
if((i__36946 < count__36945)){
var prov = cljs.core._nth.call(null,chunk__36944,i__36946);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36947_36955 = cljs.core.seq.call(null,requires);
var chunk__36948_36956 = null;
var count__36949_36957 = (0);
var i__36950_36958 = (0);
while(true){
if((i__36950_36958 < count__36949_36957)){
var req_36959 = cljs.core._nth.call(null,chunk__36948_36956,i__36950_36958);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36959,prov);

var G__36960 = seq__36947_36955;
var G__36961 = chunk__36948_36956;
var G__36962 = count__36949_36957;
var G__36963 = (i__36950_36958 + (1));
seq__36947_36955 = G__36960;
chunk__36948_36956 = G__36961;
count__36949_36957 = G__36962;
i__36950_36958 = G__36963;
continue;
} else {
var temp__5457__auto___36964 = cljs.core.seq.call(null,seq__36947_36955);
if(temp__5457__auto___36964){
var seq__36947_36965__$1 = temp__5457__auto___36964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36947_36965__$1)){
var c__30184__auto___36966 = cljs.core.chunk_first.call(null,seq__36947_36965__$1);
var G__36967 = cljs.core.chunk_rest.call(null,seq__36947_36965__$1);
var G__36968 = c__30184__auto___36966;
var G__36969 = cljs.core.count.call(null,c__30184__auto___36966);
var G__36970 = (0);
seq__36947_36955 = G__36967;
chunk__36948_36956 = G__36968;
count__36949_36957 = G__36969;
i__36950_36958 = G__36970;
continue;
} else {
var req_36971 = cljs.core.first.call(null,seq__36947_36965__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36971,prov);

var G__36972 = cljs.core.next.call(null,seq__36947_36965__$1);
var G__36973 = null;
var G__36974 = (0);
var G__36975 = (0);
seq__36947_36955 = G__36972;
chunk__36948_36956 = G__36973;
count__36949_36957 = G__36974;
i__36950_36958 = G__36975;
continue;
}
} else {
}
}
break;
}

var G__36976 = seq__36943;
var G__36977 = chunk__36944;
var G__36978 = count__36945;
var G__36979 = (i__36946 + (1));
seq__36943 = G__36976;
chunk__36944 = G__36977;
count__36945 = G__36978;
i__36946 = G__36979;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36943);
if(temp__5457__auto__){
var seq__36943__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36943__$1)){
var c__30184__auto__ = cljs.core.chunk_first.call(null,seq__36943__$1);
var G__36980 = cljs.core.chunk_rest.call(null,seq__36943__$1);
var G__36981 = c__30184__auto__;
var G__36982 = cljs.core.count.call(null,c__30184__auto__);
var G__36983 = (0);
seq__36943 = G__36980;
chunk__36944 = G__36981;
count__36945 = G__36982;
i__36946 = G__36983;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36943__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36951_36984 = cljs.core.seq.call(null,requires);
var chunk__36952_36985 = null;
var count__36953_36986 = (0);
var i__36954_36987 = (0);
while(true){
if((i__36954_36987 < count__36953_36986)){
var req_36988 = cljs.core._nth.call(null,chunk__36952_36985,i__36954_36987);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36988,prov);

var G__36989 = seq__36951_36984;
var G__36990 = chunk__36952_36985;
var G__36991 = count__36953_36986;
var G__36992 = (i__36954_36987 + (1));
seq__36951_36984 = G__36989;
chunk__36952_36985 = G__36990;
count__36953_36986 = G__36991;
i__36954_36987 = G__36992;
continue;
} else {
var temp__5457__auto___36993__$1 = cljs.core.seq.call(null,seq__36951_36984);
if(temp__5457__auto___36993__$1){
var seq__36951_36994__$1 = temp__5457__auto___36993__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36951_36994__$1)){
var c__30184__auto___36995 = cljs.core.chunk_first.call(null,seq__36951_36994__$1);
var G__36996 = cljs.core.chunk_rest.call(null,seq__36951_36994__$1);
var G__36997 = c__30184__auto___36995;
var G__36998 = cljs.core.count.call(null,c__30184__auto___36995);
var G__36999 = (0);
seq__36951_36984 = G__36996;
chunk__36952_36985 = G__36997;
count__36953_36986 = G__36998;
i__36954_36987 = G__36999;
continue;
} else {
var req_37000 = cljs.core.first.call(null,seq__36951_36994__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37000,prov);

var G__37001 = cljs.core.next.call(null,seq__36951_36994__$1);
var G__37002 = null;
var G__37003 = (0);
var G__37004 = (0);
seq__36951_36984 = G__37001;
chunk__36952_36985 = G__37002;
count__36953_36986 = G__37003;
i__36954_36987 = G__37004;
continue;
}
} else {
}
}
break;
}

var G__37005 = cljs.core.next.call(null,seq__36943__$1);
var G__37006 = null;
var G__37007 = (0);
var G__37008 = (0);
seq__36943 = G__37005;
chunk__36944 = G__37006;
count__36945 = G__37007;
i__36946 = G__37008;
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
var seq__37013_37017 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37014_37018 = null;
var count__37015_37019 = (0);
var i__37016_37020 = (0);
while(true){
if((i__37016_37020 < count__37015_37019)){
var ns_37021 = cljs.core._nth.call(null,chunk__37014_37018,i__37016_37020);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37021);

var G__37022 = seq__37013_37017;
var G__37023 = chunk__37014_37018;
var G__37024 = count__37015_37019;
var G__37025 = (i__37016_37020 + (1));
seq__37013_37017 = G__37022;
chunk__37014_37018 = G__37023;
count__37015_37019 = G__37024;
i__37016_37020 = G__37025;
continue;
} else {
var temp__5457__auto___37026 = cljs.core.seq.call(null,seq__37013_37017);
if(temp__5457__auto___37026){
var seq__37013_37027__$1 = temp__5457__auto___37026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37013_37027__$1)){
var c__30184__auto___37028 = cljs.core.chunk_first.call(null,seq__37013_37027__$1);
var G__37029 = cljs.core.chunk_rest.call(null,seq__37013_37027__$1);
var G__37030 = c__30184__auto___37028;
var G__37031 = cljs.core.count.call(null,c__30184__auto___37028);
var G__37032 = (0);
seq__37013_37017 = G__37029;
chunk__37014_37018 = G__37030;
count__37015_37019 = G__37031;
i__37016_37020 = G__37032;
continue;
} else {
var ns_37033 = cljs.core.first.call(null,seq__37013_37027__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37033);

var G__37034 = cljs.core.next.call(null,seq__37013_37027__$1);
var G__37035 = null;
var G__37036 = (0);
var G__37037 = (0);
seq__37013_37017 = G__37034;
chunk__37014_37018 = G__37035;
count__37015_37019 = G__37036;
i__37016_37020 = G__37037;
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
goog.require_figwheel_backup_ = (function (){var or__29273__auto__ = goog.require__;
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
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
var G__37038__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37038 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37039__i = 0, G__37039__a = new Array(arguments.length -  0);
while (G__37039__i < G__37039__a.length) {G__37039__a[G__37039__i] = arguments[G__37039__i + 0]; ++G__37039__i;}
  args = new cljs.core.IndexedSeq(G__37039__a,0);
} 
return G__37038__delegate.call(this,args);};
G__37038.cljs$lang$maxFixedArity = 0;
G__37038.cljs$lang$applyTo = (function (arglist__37040){
var args = cljs.core.seq(arglist__37040);
return G__37038__delegate(args);
});
G__37038.cljs$core$IFn$_invoke$arity$variadic = G__37038__delegate;
return G__37038;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37041_SHARP_,p2__37042_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37041_SHARP_)].join('')),p2__37042_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37043_SHARP_,p2__37044_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37043_SHARP_)].join(''),p2__37044_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37046 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37046.addCallback(((function (G__37046){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37046))
);

G__37046.addErrback(((function (G__37046){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37046))
);

return G__37046;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37048){if((e37048 instanceof Error)){
var e = e37048;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37048;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37050){if((e37050 instanceof Error)){
var e = e37050;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37050;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37051 = cljs.core._EQ_;
var expr__37052 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37051.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37052))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37051.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37052))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37051.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37052))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__37051,expr__37052){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37051,expr__37052))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37054,callback){
var map__37057 = p__37054;
var map__37057__$1 = ((((!((map__37057 == null)))?((((map__37057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37057):map__37057);
var file_msg = map__37057__$1;
var request_url = cljs.core.get.call(null,map__37057__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__29273__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__37057,map__37057__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37057,map__37057__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__32008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto__){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto__){
return (function (state_37097){
var state_val_37098 = (state_37097[(1)]);
if((state_val_37098 === (7))){
var inst_37093 = (state_37097[(2)]);
var state_37097__$1 = state_37097;
var statearr_37099_37129 = state_37097__$1;
(statearr_37099_37129[(2)] = inst_37093);

(statearr_37099_37129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37098 === (1))){
var state_37097__$1 = state_37097;
var statearr_37100_37130 = state_37097__$1;
(statearr_37100_37130[(2)] = null);

(statearr_37100_37130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37098 === (4))){
var inst_37061 = (state_37097[(7)]);
var inst_37061__$1 = (state_37097[(2)]);
var state_37097__$1 = (function (){var statearr_37101 = state_37097;
(statearr_37101[(7)] = inst_37061__$1);

return statearr_37101;
})();
if(cljs.core.truth_(inst_37061__$1)){
var statearr_37102_37131 = state_37097__$1;
(statearr_37102_37131[(1)] = (5));

} else {
var statearr_37103_37132 = state_37097__$1;
(statearr_37103_37132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37098 === (15))){
var inst_37078 = (state_37097[(8)]);
var inst_37075 = (state_37097[(9)]);
var inst_37080 = inst_37078.call(null,inst_37075);
var state_37097__$1 = state_37097;
var statearr_37104_37133 = state_37097__$1;
(statearr_37104_37133[(2)] = inst_37080);

(statearr_37104_37133[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37098 === (13))){
var inst_37087 = (state_37097[(2)]);
var state_37097__$1 = state_37097;
var statearr_37105_37134 = state_37097__$1;
(statearr_37105_37134[(2)] = inst_37087);

(statearr_37105_37134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37098 === (6))){
var state_37097__$1 = state_37097;
var statearr_37106_37135 = state_37097__$1;
(statearr_37106_37135[(2)] = null);

(statearr_37106_37135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37098 === (17))){
var inst_37084 = (state_37097[(2)]);
var state_37097__$1 = state_37097;
var statearr_37107_37136 = state_37097__$1;
(statearr_37107_37136[(2)] = inst_37084);

(statearr_37107_37136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37098 === (3))){
var inst_37095 = (state_37097[(2)]);
var state_37097__$1 = state_37097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37097__$1,inst_37095);
} else {
if((state_val_37098 === (12))){
var state_37097__$1 = state_37097;
var statearr_37108_37137 = state_37097__$1;
(statearr_37108_37137[(2)] = null);

(statearr_37108_37137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37098 === (2))){
var state_37097__$1 = state_37097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37097__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37098 === (11))){
var inst_37066 = (state_37097[(10)]);
var inst_37073 = figwheel.client.file_reloading.blocking_load.call(null,inst_37066);
var state_37097__$1 = state_37097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37097__$1,(14),inst_37073);
} else {
if((state_val_37098 === (9))){
var inst_37066 = (state_37097[(10)]);
var state_37097__$1 = state_37097;
if(cljs.core.truth_(inst_37066)){
var statearr_37109_37138 = state_37097__$1;
(statearr_37109_37138[(1)] = (11));

} else {
var statearr_37110_37139 = state_37097__$1;
(statearr_37110_37139[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37098 === (5))){
var inst_37067 = (state_37097[(11)]);
var inst_37061 = (state_37097[(7)]);
var inst_37066 = cljs.core.nth.call(null,inst_37061,(0),null);
var inst_37067__$1 = cljs.core.nth.call(null,inst_37061,(1),null);
var state_37097__$1 = (function (){var statearr_37111 = state_37097;
(statearr_37111[(11)] = inst_37067__$1);

(statearr_37111[(10)] = inst_37066);

return statearr_37111;
})();
if(cljs.core.truth_(inst_37067__$1)){
var statearr_37112_37140 = state_37097__$1;
(statearr_37112_37140[(1)] = (8));

} else {
var statearr_37113_37141 = state_37097__$1;
(statearr_37113_37141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37098 === (14))){
var inst_37078 = (state_37097[(8)]);
var inst_37066 = (state_37097[(10)]);
var inst_37075 = (state_37097[(2)]);
var inst_37076 = console.log("Loading!",inst_37066);
var inst_37077 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37078__$1 = cljs.core.get.call(null,inst_37077,inst_37066);
var state_37097__$1 = (function (){var statearr_37114 = state_37097;
(statearr_37114[(8)] = inst_37078__$1);

(statearr_37114[(12)] = inst_37076);

(statearr_37114[(9)] = inst_37075);

return statearr_37114;
})();
if(cljs.core.truth_(inst_37078__$1)){
var statearr_37115_37142 = state_37097__$1;
(statearr_37115_37142[(1)] = (15));

} else {
var statearr_37116_37143 = state_37097__$1;
(statearr_37116_37143[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37098 === (16))){
var inst_37075 = (state_37097[(9)]);
var inst_37082 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37075);
var state_37097__$1 = state_37097;
var statearr_37117_37144 = state_37097__$1;
(statearr_37117_37144[(2)] = inst_37082);

(statearr_37117_37144[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37098 === (10))){
var inst_37089 = (state_37097[(2)]);
var state_37097__$1 = (function (){var statearr_37118 = state_37097;
(statearr_37118[(13)] = inst_37089);

return statearr_37118;
})();
var statearr_37119_37145 = state_37097__$1;
(statearr_37119_37145[(2)] = null);

(statearr_37119_37145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37098 === (8))){
var inst_37067 = (state_37097[(11)]);
var inst_37069 = console.log("Evaling!",inst_37067);
var inst_37070 = eval(inst_37067);
var state_37097__$1 = (function (){var statearr_37120 = state_37097;
(statearr_37120[(14)] = inst_37069);

return statearr_37120;
})();
var statearr_37121_37146 = state_37097__$1;
(statearr_37121_37146[(2)] = inst_37070);

(statearr_37121_37146[(1)] = (10));


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
});})(c__32008__auto__))
;
return ((function (switch__31894__auto__,c__32008__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31895__auto__ = null;
var figwheel$client$file_reloading$state_machine__31895__auto____0 = (function (){
var statearr_37125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37125[(0)] = figwheel$client$file_reloading$state_machine__31895__auto__);

(statearr_37125[(1)] = (1));

return statearr_37125;
});
var figwheel$client$file_reloading$state_machine__31895__auto____1 = (function (state_37097){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_37097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e37126){if((e37126 instanceof Object)){
var ex__31898__auto__ = e37126;
var statearr_37127_37147 = state_37097;
(statearr_37127_37147[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37148 = state_37097;
state_37097 = G__37148;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31895__auto__ = function(state_37097){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31895__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31895__auto____1.call(this,state_37097);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31895__auto____0;
figwheel$client$file_reloading$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31895__auto____1;
return figwheel$client$file_reloading$state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto__))
})();
var state__32010__auto__ = (function (){var statearr_37128 = f__32009__auto__.call(null);
(statearr_37128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto__);

return statearr_37128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto__))
);

return c__32008__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var args37149 = [];
var len__30494__auto___37152 = arguments.length;
var i__30495__auto___37153 = (0);
while(true){
if((i__30495__auto___37153 < len__30494__auto___37152)){
args37149.push((arguments[i__30495__auto___37153]));

var G__37154 = (i__30495__auto___37153 + (1));
i__30495__auto___37153 = G__37154;
continue;
} else {
}
break;
}

var G__37151 = args37149.length;
switch (G__37151) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37149.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37156,callback){
var map__37159 = p__37156;
var map__37159__$1 = ((((!((map__37159 == null)))?((((map__37159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37159):map__37159);
var file_msg = map__37159__$1;
var namespace = cljs.core.get.call(null,map__37159__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37159,map__37159__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37159,map__37159__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37161){
var map__37164 = p__37161;
var map__37164__$1 = ((((!((map__37164 == null)))?((((map__37164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37164):map__37164);
var file_msg = map__37164__$1;
var namespace = cljs.core.get.call(null,map__37164__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37166){
var map__37169 = p__37166;
var map__37169__$1 = ((((!((map__37169 == null)))?((((map__37169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37169):map__37169);
var file_msg = map__37169__$1;
var namespace = cljs.core.get.call(null,map__37169__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__29261__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__29261__auto__){
var or__29273__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
var or__29273__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__29273__auto____$1)){
return or__29273__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__29261__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37171,callback){
var map__37174 = p__37171;
var map__37174__$1 = ((((!((map__37174 == null)))?((((map__37174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37174):map__37174);
var file_msg = map__37174__$1;
var request_url = cljs.core.get.call(null,map__37174__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37174__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__32008__auto___37278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto___37278,out){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto___37278,out){
return (function (state_37260){
var state_val_37261 = (state_37260[(1)]);
if((state_val_37261 === (1))){
var inst_37234 = cljs.core.seq.call(null,files);
var inst_37235 = cljs.core.first.call(null,inst_37234);
var inst_37236 = cljs.core.next.call(null,inst_37234);
var inst_37237 = files;
var state_37260__$1 = (function (){var statearr_37262 = state_37260;
(statearr_37262[(7)] = inst_37237);

(statearr_37262[(8)] = inst_37236);

(statearr_37262[(9)] = inst_37235);

return statearr_37262;
})();
var statearr_37263_37279 = state_37260__$1;
(statearr_37263_37279[(2)] = null);

(statearr_37263_37279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (2))){
var inst_37237 = (state_37260[(7)]);
var inst_37243 = (state_37260[(10)]);
var inst_37242 = cljs.core.seq.call(null,inst_37237);
var inst_37243__$1 = cljs.core.first.call(null,inst_37242);
var inst_37244 = cljs.core.next.call(null,inst_37242);
var inst_37245 = (inst_37243__$1 == null);
var inst_37246 = cljs.core.not.call(null,inst_37245);
var state_37260__$1 = (function (){var statearr_37264 = state_37260;
(statearr_37264[(11)] = inst_37244);

(statearr_37264[(10)] = inst_37243__$1);

return statearr_37264;
})();
if(inst_37246){
var statearr_37265_37280 = state_37260__$1;
(statearr_37265_37280[(1)] = (4));

} else {
var statearr_37266_37281 = state_37260__$1;
(statearr_37266_37281[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (3))){
var inst_37258 = (state_37260[(2)]);
var state_37260__$1 = state_37260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37260__$1,inst_37258);
} else {
if((state_val_37261 === (4))){
var inst_37243 = (state_37260[(10)]);
var inst_37248 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37243);
var state_37260__$1 = state_37260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37260__$1,(7),inst_37248);
} else {
if((state_val_37261 === (5))){
var inst_37254 = cljs.core.async.close_BANG_.call(null,out);
var state_37260__$1 = state_37260;
var statearr_37267_37282 = state_37260__$1;
(statearr_37267_37282[(2)] = inst_37254);

(statearr_37267_37282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (6))){
var inst_37256 = (state_37260[(2)]);
var state_37260__$1 = state_37260;
var statearr_37268_37283 = state_37260__$1;
(statearr_37268_37283[(2)] = inst_37256);

(statearr_37268_37283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (7))){
var inst_37244 = (state_37260[(11)]);
var inst_37250 = (state_37260[(2)]);
var inst_37251 = cljs.core.async.put_BANG_.call(null,out,inst_37250);
var inst_37237 = inst_37244;
var state_37260__$1 = (function (){var statearr_37269 = state_37260;
(statearr_37269[(12)] = inst_37251);

(statearr_37269[(7)] = inst_37237);

return statearr_37269;
})();
var statearr_37270_37284 = state_37260__$1;
(statearr_37270_37284[(2)] = null);

(statearr_37270_37284[(1)] = (2));


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
});})(c__32008__auto___37278,out))
;
return ((function (switch__31894__auto__,c__32008__auto___37278,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31895__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31895__auto____0 = (function (){
var statearr_37274 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37274[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31895__auto__);

(statearr_37274[(1)] = (1));

return statearr_37274;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31895__auto____1 = (function (state_37260){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_37260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e37275){if((e37275 instanceof Object)){
var ex__31898__auto__ = e37275;
var statearr_37276_37285 = state_37260;
(statearr_37276_37285[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37286 = state_37260;
state_37260 = G__37286;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31895__auto__ = function(state_37260){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31895__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31895__auto____1.call(this,state_37260);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31895__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31895__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto___37278,out))
})();
var state__32010__auto__ = (function (){var statearr_37277 = f__32009__auto__.call(null);
(statearr_37277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___37278);

return statearr_37277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto___37278,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37287,opts){
var map__37291 = p__37287;
var map__37291__$1 = ((((!((map__37291 == null)))?((((map__37291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37291):map__37291);
var eval_body = cljs.core.get.call(null,map__37291__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37291__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__29261__auto__ = eval_body;
if(cljs.core.truth_(and__29261__auto__)){
return typeof eval_body === 'string';
} else {
return and__29261__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37293){var e = e37293;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37294_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37294_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
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
return cljs.core.map.call(null,(function (p__37303){
var vec__37304 = p__37303;
var k = cljs.core.nth.call(null,vec__37304,(0),null);
var v = cljs.core.nth.call(null,vec__37304,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37307){
var vec__37308 = p__37307;
var k = cljs.core.nth.call(null,vec__37308,(0),null);
var v = cljs.core.nth.call(null,vec__37308,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37314,p__37315){
var map__37563 = p__37314;
var map__37563__$1 = ((((!((map__37563 == null)))?((((map__37563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37563):map__37563);
var opts = map__37563__$1;
var before_jsload = cljs.core.get.call(null,map__37563__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37563__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37563__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37564 = p__37315;
var map__37564__$1 = ((((!((map__37564 == null)))?((((map__37564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37564):map__37564);
var msg = map__37564__$1;
var files = cljs.core.get.call(null,map__37564__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37564__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37564__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto__,map__37563,map__37563__$1,opts,before_jsload,on_jsload,reload_dependents,map__37564,map__37564__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto__,map__37563,map__37563__$1,opts,before_jsload,on_jsload,reload_dependents,map__37564,map__37564__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37718){
var state_val_37719 = (state_37718[(1)]);
if((state_val_37719 === (7))){
var inst_37579 = (state_37718[(7)]);
var inst_37578 = (state_37718[(8)]);
var inst_37581 = (state_37718[(9)]);
var inst_37580 = (state_37718[(10)]);
var inst_37586 = cljs.core._nth.call(null,inst_37579,inst_37581);
var inst_37587 = figwheel.client.file_reloading.eval_body.call(null,inst_37586,opts);
var inst_37588 = (inst_37581 + (1));
var tmp37720 = inst_37579;
var tmp37721 = inst_37578;
var tmp37722 = inst_37580;
var inst_37578__$1 = tmp37721;
var inst_37579__$1 = tmp37720;
var inst_37580__$1 = tmp37722;
var inst_37581__$1 = inst_37588;
var state_37718__$1 = (function (){var statearr_37723 = state_37718;
(statearr_37723[(11)] = inst_37587);

(statearr_37723[(7)] = inst_37579__$1);

(statearr_37723[(8)] = inst_37578__$1);

(statearr_37723[(9)] = inst_37581__$1);

(statearr_37723[(10)] = inst_37580__$1);

return statearr_37723;
})();
var statearr_37724_37810 = state_37718__$1;
(statearr_37724_37810[(2)] = null);

(statearr_37724_37810[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (20))){
var inst_37621 = (state_37718[(12)]);
var inst_37629 = figwheel.client.file_reloading.sort_files.call(null,inst_37621);
var state_37718__$1 = state_37718;
var statearr_37725_37811 = state_37718__$1;
(statearr_37725_37811[(2)] = inst_37629);

(statearr_37725_37811[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (27))){
var state_37718__$1 = state_37718;
var statearr_37726_37812 = state_37718__$1;
(statearr_37726_37812[(2)] = null);

(statearr_37726_37812[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (1))){
var inst_37570 = (state_37718[(13)]);
var inst_37567 = before_jsload.call(null,files);
var inst_37568 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37569 = (function (){return ((function (inst_37570,inst_37567,inst_37568,state_val_37719,c__32008__auto__,map__37563,map__37563__$1,opts,before_jsload,on_jsload,reload_dependents,map__37564,map__37564__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37311_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37311_SHARP_);
});
;})(inst_37570,inst_37567,inst_37568,state_val_37719,c__32008__auto__,map__37563,map__37563__$1,opts,before_jsload,on_jsload,reload_dependents,map__37564,map__37564__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37570__$1 = cljs.core.filter.call(null,inst_37569,files);
var inst_37571 = cljs.core.not_empty.call(null,inst_37570__$1);
var state_37718__$1 = (function (){var statearr_37727 = state_37718;
(statearr_37727[(14)] = inst_37567);

(statearr_37727[(15)] = inst_37568);

(statearr_37727[(13)] = inst_37570__$1);

return statearr_37727;
})();
if(cljs.core.truth_(inst_37571)){
var statearr_37728_37813 = state_37718__$1;
(statearr_37728_37813[(1)] = (2));

} else {
var statearr_37729_37814 = state_37718__$1;
(statearr_37729_37814[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (24))){
var state_37718__$1 = state_37718;
var statearr_37730_37815 = state_37718__$1;
(statearr_37730_37815[(2)] = null);

(statearr_37730_37815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (39))){
var inst_37671 = (state_37718[(16)]);
var state_37718__$1 = state_37718;
var statearr_37731_37816 = state_37718__$1;
(statearr_37731_37816[(2)] = inst_37671);

(statearr_37731_37816[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (46))){
var inst_37713 = (state_37718[(2)]);
var state_37718__$1 = state_37718;
var statearr_37732_37817 = state_37718__$1;
(statearr_37732_37817[(2)] = inst_37713);

(statearr_37732_37817[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (4))){
var inst_37615 = (state_37718[(2)]);
var inst_37616 = cljs.core.List.EMPTY;
var inst_37617 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37616);
var inst_37618 = (function (){return ((function (inst_37615,inst_37616,inst_37617,state_val_37719,c__32008__auto__,map__37563,map__37563__$1,opts,before_jsload,on_jsload,reload_dependents,map__37564,map__37564__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37312_SHARP_){
var and__29261__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37312_SHARP_);
if(cljs.core.truth_(and__29261__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37312_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37312_SHARP_)));
} else {
return and__29261__auto__;
}
});
;})(inst_37615,inst_37616,inst_37617,state_val_37719,c__32008__auto__,map__37563,map__37563__$1,opts,before_jsload,on_jsload,reload_dependents,map__37564,map__37564__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37619 = cljs.core.filter.call(null,inst_37618,files);
var inst_37620 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37621 = cljs.core.concat.call(null,inst_37619,inst_37620);
var state_37718__$1 = (function (){var statearr_37733 = state_37718;
(statearr_37733[(17)] = inst_37615);

(statearr_37733[(12)] = inst_37621);

(statearr_37733[(18)] = inst_37617);

return statearr_37733;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37734_37818 = state_37718__$1;
(statearr_37734_37818[(1)] = (16));

} else {
var statearr_37735_37819 = state_37718__$1;
(statearr_37735_37819[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (15))){
var inst_37605 = (state_37718[(2)]);
var state_37718__$1 = state_37718;
var statearr_37736_37820 = state_37718__$1;
(statearr_37736_37820[(2)] = inst_37605);

(statearr_37736_37820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (21))){
var inst_37631 = (state_37718[(19)]);
var inst_37631__$1 = (state_37718[(2)]);
var inst_37632 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37631__$1);
var state_37718__$1 = (function (){var statearr_37737 = state_37718;
(statearr_37737[(19)] = inst_37631__$1);

return statearr_37737;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37718__$1,(22),inst_37632);
} else {
if((state_val_37719 === (31))){
var inst_37716 = (state_37718[(2)]);
var state_37718__$1 = state_37718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37718__$1,inst_37716);
} else {
if((state_val_37719 === (32))){
var inst_37671 = (state_37718[(16)]);
var inst_37676 = inst_37671.cljs$lang$protocol_mask$partition0$;
var inst_37677 = (inst_37676 & (64));
var inst_37678 = inst_37671.cljs$core$ISeq$;
var inst_37679 = (cljs.core.PROTOCOL_SENTINEL === inst_37678);
var inst_37680 = (inst_37677) || (inst_37679);
var state_37718__$1 = state_37718;
if(cljs.core.truth_(inst_37680)){
var statearr_37738_37821 = state_37718__$1;
(statearr_37738_37821[(1)] = (35));

} else {
var statearr_37739_37822 = state_37718__$1;
(statearr_37739_37822[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (40))){
var inst_37693 = (state_37718[(20)]);
var inst_37692 = (state_37718[(2)]);
var inst_37693__$1 = cljs.core.get.call(null,inst_37692,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37694 = cljs.core.get.call(null,inst_37692,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37695 = cljs.core.not_empty.call(null,inst_37693__$1);
var state_37718__$1 = (function (){var statearr_37740 = state_37718;
(statearr_37740[(20)] = inst_37693__$1);

(statearr_37740[(21)] = inst_37694);

return statearr_37740;
})();
if(cljs.core.truth_(inst_37695)){
var statearr_37741_37823 = state_37718__$1;
(statearr_37741_37823[(1)] = (41));

} else {
var statearr_37742_37824 = state_37718__$1;
(statearr_37742_37824[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (33))){
var state_37718__$1 = state_37718;
var statearr_37743_37825 = state_37718__$1;
(statearr_37743_37825[(2)] = false);

(statearr_37743_37825[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (13))){
var inst_37591 = (state_37718[(22)]);
var inst_37595 = cljs.core.chunk_first.call(null,inst_37591);
var inst_37596 = cljs.core.chunk_rest.call(null,inst_37591);
var inst_37597 = cljs.core.count.call(null,inst_37595);
var inst_37578 = inst_37596;
var inst_37579 = inst_37595;
var inst_37580 = inst_37597;
var inst_37581 = (0);
var state_37718__$1 = (function (){var statearr_37744 = state_37718;
(statearr_37744[(7)] = inst_37579);

(statearr_37744[(8)] = inst_37578);

(statearr_37744[(9)] = inst_37581);

(statearr_37744[(10)] = inst_37580);

return statearr_37744;
})();
var statearr_37745_37826 = state_37718__$1;
(statearr_37745_37826[(2)] = null);

(statearr_37745_37826[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (22))){
var inst_37634 = (state_37718[(23)]);
var inst_37631 = (state_37718[(19)]);
var inst_37635 = (state_37718[(24)]);
var inst_37639 = (state_37718[(25)]);
var inst_37634__$1 = (state_37718[(2)]);
var inst_37635__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37634__$1);
var inst_37636 = (function (){var all_files = inst_37631;
var res_SINGLEQUOTE_ = inst_37634__$1;
var res = inst_37635__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37634,inst_37631,inst_37635,inst_37639,inst_37634__$1,inst_37635__$1,state_val_37719,c__32008__auto__,map__37563,map__37563__$1,opts,before_jsload,on_jsload,reload_dependents,map__37564,map__37564__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37313_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37313_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37634,inst_37631,inst_37635,inst_37639,inst_37634__$1,inst_37635__$1,state_val_37719,c__32008__auto__,map__37563,map__37563__$1,opts,before_jsload,on_jsload,reload_dependents,map__37564,map__37564__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37637 = cljs.core.filter.call(null,inst_37636,inst_37634__$1);
var inst_37638 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37639__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37638);
var inst_37640 = cljs.core.not_empty.call(null,inst_37639__$1);
var state_37718__$1 = (function (){var statearr_37746 = state_37718;
(statearr_37746[(23)] = inst_37634__$1);

(statearr_37746[(24)] = inst_37635__$1);

(statearr_37746[(26)] = inst_37637);

(statearr_37746[(25)] = inst_37639__$1);

return statearr_37746;
})();
if(cljs.core.truth_(inst_37640)){
var statearr_37747_37827 = state_37718__$1;
(statearr_37747_37827[(1)] = (23));

} else {
var statearr_37748_37828 = state_37718__$1;
(statearr_37748_37828[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (36))){
var state_37718__$1 = state_37718;
var statearr_37749_37829 = state_37718__$1;
(statearr_37749_37829[(2)] = false);

(statearr_37749_37829[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (41))){
var inst_37693 = (state_37718[(20)]);
var inst_37697 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37698 = cljs.core.map.call(null,inst_37697,inst_37693);
var inst_37699 = cljs.core.pr_str.call(null,inst_37698);
var inst_37700 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37699)].join('');
var inst_37701 = figwheel.client.utils.log.call(null,inst_37700);
var state_37718__$1 = state_37718;
var statearr_37750_37830 = state_37718__$1;
(statearr_37750_37830[(2)] = inst_37701);

(statearr_37750_37830[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (43))){
var inst_37694 = (state_37718[(21)]);
var inst_37704 = (state_37718[(2)]);
var inst_37705 = cljs.core.not_empty.call(null,inst_37694);
var state_37718__$1 = (function (){var statearr_37751 = state_37718;
(statearr_37751[(27)] = inst_37704);

return statearr_37751;
})();
if(cljs.core.truth_(inst_37705)){
var statearr_37752_37831 = state_37718__$1;
(statearr_37752_37831[(1)] = (44));

} else {
var statearr_37753_37832 = state_37718__$1;
(statearr_37753_37832[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (29))){
var inst_37634 = (state_37718[(23)]);
var inst_37631 = (state_37718[(19)]);
var inst_37635 = (state_37718[(24)]);
var inst_37637 = (state_37718[(26)]);
var inst_37639 = (state_37718[(25)]);
var inst_37671 = (state_37718[(16)]);
var inst_37667 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37670 = (function (){var all_files = inst_37631;
var res_SINGLEQUOTE_ = inst_37634;
var res = inst_37635;
var files_not_loaded = inst_37637;
var dependencies_that_loaded = inst_37639;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37634,inst_37631,inst_37635,inst_37637,inst_37639,inst_37671,inst_37667,state_val_37719,c__32008__auto__,map__37563,map__37563__$1,opts,before_jsload,on_jsload,reload_dependents,map__37564,map__37564__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37669){
var map__37754 = p__37669;
var map__37754__$1 = ((((!((map__37754 == null)))?((((map__37754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37754):map__37754);
var namespace = cljs.core.get.call(null,map__37754__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37634,inst_37631,inst_37635,inst_37637,inst_37639,inst_37671,inst_37667,state_val_37719,c__32008__auto__,map__37563,map__37563__$1,opts,before_jsload,on_jsload,reload_dependents,map__37564,map__37564__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37671__$1 = cljs.core.group_by.call(null,inst_37670,inst_37637);
var inst_37673 = (inst_37671__$1 == null);
var inst_37674 = cljs.core.not.call(null,inst_37673);
var state_37718__$1 = (function (){var statearr_37756 = state_37718;
(statearr_37756[(28)] = inst_37667);

(statearr_37756[(16)] = inst_37671__$1);

return statearr_37756;
})();
if(inst_37674){
var statearr_37757_37833 = state_37718__$1;
(statearr_37757_37833[(1)] = (32));

} else {
var statearr_37758_37834 = state_37718__$1;
(statearr_37758_37834[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (44))){
var inst_37694 = (state_37718[(21)]);
var inst_37707 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37694);
var inst_37708 = cljs.core.pr_str.call(null,inst_37707);
var inst_37709 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37708)].join('');
var inst_37710 = figwheel.client.utils.log.call(null,inst_37709);
var state_37718__$1 = state_37718;
var statearr_37759_37835 = state_37718__$1;
(statearr_37759_37835[(2)] = inst_37710);

(statearr_37759_37835[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (6))){
var inst_37612 = (state_37718[(2)]);
var state_37718__$1 = state_37718;
var statearr_37760_37836 = state_37718__$1;
(statearr_37760_37836[(2)] = inst_37612);

(statearr_37760_37836[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (28))){
var inst_37637 = (state_37718[(26)]);
var inst_37664 = (state_37718[(2)]);
var inst_37665 = cljs.core.not_empty.call(null,inst_37637);
var state_37718__$1 = (function (){var statearr_37761 = state_37718;
(statearr_37761[(29)] = inst_37664);

return statearr_37761;
})();
if(cljs.core.truth_(inst_37665)){
var statearr_37762_37837 = state_37718__$1;
(statearr_37762_37837[(1)] = (29));

} else {
var statearr_37763_37838 = state_37718__$1;
(statearr_37763_37838[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (25))){
var inst_37635 = (state_37718[(24)]);
var inst_37651 = (state_37718[(2)]);
var inst_37652 = cljs.core.not_empty.call(null,inst_37635);
var state_37718__$1 = (function (){var statearr_37764 = state_37718;
(statearr_37764[(30)] = inst_37651);

return statearr_37764;
})();
if(cljs.core.truth_(inst_37652)){
var statearr_37765_37839 = state_37718__$1;
(statearr_37765_37839[(1)] = (26));

} else {
var statearr_37766_37840 = state_37718__$1;
(statearr_37766_37840[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (34))){
var inst_37687 = (state_37718[(2)]);
var state_37718__$1 = state_37718;
if(cljs.core.truth_(inst_37687)){
var statearr_37767_37841 = state_37718__$1;
(statearr_37767_37841[(1)] = (38));

} else {
var statearr_37768_37842 = state_37718__$1;
(statearr_37768_37842[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (17))){
var state_37718__$1 = state_37718;
var statearr_37769_37843 = state_37718__$1;
(statearr_37769_37843[(2)] = recompile_dependents);

(statearr_37769_37843[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (3))){
var state_37718__$1 = state_37718;
var statearr_37770_37844 = state_37718__$1;
(statearr_37770_37844[(2)] = null);

(statearr_37770_37844[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (12))){
var inst_37608 = (state_37718[(2)]);
var state_37718__$1 = state_37718;
var statearr_37771_37845 = state_37718__$1;
(statearr_37771_37845[(2)] = inst_37608);

(statearr_37771_37845[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (2))){
var inst_37570 = (state_37718[(13)]);
var inst_37577 = cljs.core.seq.call(null,inst_37570);
var inst_37578 = inst_37577;
var inst_37579 = null;
var inst_37580 = (0);
var inst_37581 = (0);
var state_37718__$1 = (function (){var statearr_37772 = state_37718;
(statearr_37772[(7)] = inst_37579);

(statearr_37772[(8)] = inst_37578);

(statearr_37772[(9)] = inst_37581);

(statearr_37772[(10)] = inst_37580);

return statearr_37772;
})();
var statearr_37773_37846 = state_37718__$1;
(statearr_37773_37846[(2)] = null);

(statearr_37773_37846[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (23))){
var inst_37634 = (state_37718[(23)]);
var inst_37631 = (state_37718[(19)]);
var inst_37635 = (state_37718[(24)]);
var inst_37637 = (state_37718[(26)]);
var inst_37639 = (state_37718[(25)]);
var inst_37642 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37644 = (function (){var all_files = inst_37631;
var res_SINGLEQUOTE_ = inst_37634;
var res = inst_37635;
var files_not_loaded = inst_37637;
var dependencies_that_loaded = inst_37639;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37634,inst_37631,inst_37635,inst_37637,inst_37639,inst_37642,state_val_37719,c__32008__auto__,map__37563,map__37563__$1,opts,before_jsload,on_jsload,reload_dependents,map__37564,map__37564__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37643){
var map__37774 = p__37643;
var map__37774__$1 = ((((!((map__37774 == null)))?((((map__37774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37774):map__37774);
var request_url = cljs.core.get.call(null,map__37774__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37634,inst_37631,inst_37635,inst_37637,inst_37639,inst_37642,state_val_37719,c__32008__auto__,map__37563,map__37563__$1,opts,before_jsload,on_jsload,reload_dependents,map__37564,map__37564__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37645 = cljs.core.reverse.call(null,inst_37639);
var inst_37646 = cljs.core.map.call(null,inst_37644,inst_37645);
var inst_37647 = cljs.core.pr_str.call(null,inst_37646);
var inst_37648 = figwheel.client.utils.log.call(null,inst_37647);
var state_37718__$1 = (function (){var statearr_37776 = state_37718;
(statearr_37776[(31)] = inst_37642);

return statearr_37776;
})();
var statearr_37777_37847 = state_37718__$1;
(statearr_37777_37847[(2)] = inst_37648);

(statearr_37777_37847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (35))){
var state_37718__$1 = state_37718;
var statearr_37778_37848 = state_37718__$1;
(statearr_37778_37848[(2)] = true);

(statearr_37778_37848[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (19))){
var inst_37621 = (state_37718[(12)]);
var inst_37627 = figwheel.client.file_reloading.expand_files.call(null,inst_37621);
var state_37718__$1 = state_37718;
var statearr_37779_37849 = state_37718__$1;
(statearr_37779_37849[(2)] = inst_37627);

(statearr_37779_37849[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (11))){
var state_37718__$1 = state_37718;
var statearr_37780_37850 = state_37718__$1;
(statearr_37780_37850[(2)] = null);

(statearr_37780_37850[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (9))){
var inst_37610 = (state_37718[(2)]);
var state_37718__$1 = state_37718;
var statearr_37781_37851 = state_37718__$1;
(statearr_37781_37851[(2)] = inst_37610);

(statearr_37781_37851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (5))){
var inst_37581 = (state_37718[(9)]);
var inst_37580 = (state_37718[(10)]);
var inst_37583 = (inst_37581 < inst_37580);
var inst_37584 = inst_37583;
var state_37718__$1 = state_37718;
if(cljs.core.truth_(inst_37584)){
var statearr_37782_37852 = state_37718__$1;
(statearr_37782_37852[(1)] = (7));

} else {
var statearr_37783_37853 = state_37718__$1;
(statearr_37783_37853[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (14))){
var inst_37591 = (state_37718[(22)]);
var inst_37600 = cljs.core.first.call(null,inst_37591);
var inst_37601 = figwheel.client.file_reloading.eval_body.call(null,inst_37600,opts);
var inst_37602 = cljs.core.next.call(null,inst_37591);
var inst_37578 = inst_37602;
var inst_37579 = null;
var inst_37580 = (0);
var inst_37581 = (0);
var state_37718__$1 = (function (){var statearr_37784 = state_37718;
(statearr_37784[(7)] = inst_37579);

(statearr_37784[(32)] = inst_37601);

(statearr_37784[(8)] = inst_37578);

(statearr_37784[(9)] = inst_37581);

(statearr_37784[(10)] = inst_37580);

return statearr_37784;
})();
var statearr_37785_37854 = state_37718__$1;
(statearr_37785_37854[(2)] = null);

(statearr_37785_37854[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (45))){
var state_37718__$1 = state_37718;
var statearr_37786_37855 = state_37718__$1;
(statearr_37786_37855[(2)] = null);

(statearr_37786_37855[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (26))){
var inst_37634 = (state_37718[(23)]);
var inst_37631 = (state_37718[(19)]);
var inst_37635 = (state_37718[(24)]);
var inst_37637 = (state_37718[(26)]);
var inst_37639 = (state_37718[(25)]);
var inst_37654 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37656 = (function (){var all_files = inst_37631;
var res_SINGLEQUOTE_ = inst_37634;
var res = inst_37635;
var files_not_loaded = inst_37637;
var dependencies_that_loaded = inst_37639;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37634,inst_37631,inst_37635,inst_37637,inst_37639,inst_37654,state_val_37719,c__32008__auto__,map__37563,map__37563__$1,opts,before_jsload,on_jsload,reload_dependents,map__37564,map__37564__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37655){
var map__37787 = p__37655;
var map__37787__$1 = ((((!((map__37787 == null)))?((((map__37787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37787):map__37787);
var namespace = cljs.core.get.call(null,map__37787__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37787__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37634,inst_37631,inst_37635,inst_37637,inst_37639,inst_37654,state_val_37719,c__32008__auto__,map__37563,map__37563__$1,opts,before_jsload,on_jsload,reload_dependents,map__37564,map__37564__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37657 = cljs.core.map.call(null,inst_37656,inst_37635);
var inst_37658 = cljs.core.pr_str.call(null,inst_37657);
var inst_37659 = figwheel.client.utils.log.call(null,inst_37658);
var inst_37660 = (function (){var all_files = inst_37631;
var res_SINGLEQUOTE_ = inst_37634;
var res = inst_37635;
var files_not_loaded = inst_37637;
var dependencies_that_loaded = inst_37639;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37634,inst_37631,inst_37635,inst_37637,inst_37639,inst_37654,inst_37656,inst_37657,inst_37658,inst_37659,state_val_37719,c__32008__auto__,map__37563,map__37563__$1,opts,before_jsload,on_jsload,reload_dependents,map__37564,map__37564__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37634,inst_37631,inst_37635,inst_37637,inst_37639,inst_37654,inst_37656,inst_37657,inst_37658,inst_37659,state_val_37719,c__32008__auto__,map__37563,map__37563__$1,opts,before_jsload,on_jsload,reload_dependents,map__37564,map__37564__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37661 = setTimeout(inst_37660,(10));
var state_37718__$1 = (function (){var statearr_37789 = state_37718;
(statearr_37789[(33)] = inst_37654);

(statearr_37789[(34)] = inst_37659);

return statearr_37789;
})();
var statearr_37790_37856 = state_37718__$1;
(statearr_37790_37856[(2)] = inst_37661);

(statearr_37790_37856[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (16))){
var state_37718__$1 = state_37718;
var statearr_37791_37857 = state_37718__$1;
(statearr_37791_37857[(2)] = reload_dependents);

(statearr_37791_37857[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (38))){
var inst_37671 = (state_37718[(16)]);
var inst_37689 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37671);
var state_37718__$1 = state_37718;
var statearr_37792_37858 = state_37718__$1;
(statearr_37792_37858[(2)] = inst_37689);

(statearr_37792_37858[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (30))){
var state_37718__$1 = state_37718;
var statearr_37793_37859 = state_37718__$1;
(statearr_37793_37859[(2)] = null);

(statearr_37793_37859[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (10))){
var inst_37591 = (state_37718[(22)]);
var inst_37593 = cljs.core.chunked_seq_QMARK_.call(null,inst_37591);
var state_37718__$1 = state_37718;
if(inst_37593){
var statearr_37794_37860 = state_37718__$1;
(statearr_37794_37860[(1)] = (13));

} else {
var statearr_37795_37861 = state_37718__$1;
(statearr_37795_37861[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (18))){
var inst_37625 = (state_37718[(2)]);
var state_37718__$1 = state_37718;
if(cljs.core.truth_(inst_37625)){
var statearr_37796_37862 = state_37718__$1;
(statearr_37796_37862[(1)] = (19));

} else {
var statearr_37797_37863 = state_37718__$1;
(statearr_37797_37863[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (42))){
var state_37718__$1 = state_37718;
var statearr_37798_37864 = state_37718__$1;
(statearr_37798_37864[(2)] = null);

(statearr_37798_37864[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (37))){
var inst_37684 = (state_37718[(2)]);
var state_37718__$1 = state_37718;
var statearr_37799_37865 = state_37718__$1;
(statearr_37799_37865[(2)] = inst_37684);

(statearr_37799_37865[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (8))){
var inst_37591 = (state_37718[(22)]);
var inst_37578 = (state_37718[(8)]);
var inst_37591__$1 = cljs.core.seq.call(null,inst_37578);
var state_37718__$1 = (function (){var statearr_37800 = state_37718;
(statearr_37800[(22)] = inst_37591__$1);

return statearr_37800;
})();
if(inst_37591__$1){
var statearr_37801_37866 = state_37718__$1;
(statearr_37801_37866[(1)] = (10));

} else {
var statearr_37802_37867 = state_37718__$1;
(statearr_37802_37867[(1)] = (11));

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
});})(c__32008__auto__,map__37563,map__37563__$1,opts,before_jsload,on_jsload,reload_dependents,map__37564,map__37564__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31894__auto__,c__32008__auto__,map__37563,map__37563__$1,opts,before_jsload,on_jsload,reload_dependents,map__37564,map__37564__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31895__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31895__auto____0 = (function (){
var statearr_37806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37806[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31895__auto__);

(statearr_37806[(1)] = (1));

return statearr_37806;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31895__auto____1 = (function (state_37718){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_37718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e37807){if((e37807 instanceof Object)){
var ex__31898__auto__ = e37807;
var statearr_37808_37868 = state_37718;
(statearr_37808_37868[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37869 = state_37718;
state_37718 = G__37869;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31895__auto__ = function(state_37718){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31895__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31895__auto____1.call(this,state_37718);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31895__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31895__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto__,map__37563,map__37563__$1,opts,before_jsload,on_jsload,reload_dependents,map__37564,map__37564__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32010__auto__ = (function (){var statearr_37809 = f__32009__auto__.call(null);
(statearr_37809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto__);

return statearr_37809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto__,map__37563,map__37563__$1,opts,before_jsload,on_jsload,reload_dependents,map__37564,map__37564__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32008__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37872,link){
var map__37875 = p__37872;
var map__37875__$1 = ((((!((map__37875 == null)))?((((map__37875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37875.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37875):map__37875);
var file = cljs.core.get.call(null,map__37875__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__37875,map__37875__$1,file){
return (function (p1__37870_SHARP_,p2__37871_SHARP_){
if(cljs.core._EQ_.call(null,p1__37870_SHARP_,p2__37871_SHARP_)){
return p1__37870_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__37875,map__37875__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37881){
var map__37882 = p__37881;
var map__37882__$1 = ((((!((map__37882 == null)))?((((map__37882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37882.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37882):map__37882);
var match_length = cljs.core.get.call(null,map__37882__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37882__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37877_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37877_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37884_SHARP_,p2__37885_SHARP_){
return cljs.core.assoc.call(null,p1__37884_SHARP_,cljs.core.get.call(null,p2__37885_SHARP_,key),p2__37885_SHARP_);
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
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37886 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37886);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37886);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37887,p__37888){
var map__37893 = p__37887;
var map__37893__$1 = ((((!((map__37893 == null)))?((((map__37893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37893):map__37893);
var on_cssload = cljs.core.get.call(null,map__37893__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37894 = p__37888;
var map__37894__$1 = ((((!((map__37894 == null)))?((((map__37894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37894.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37894):map__37894);
var files_msg = map__37894__$1;
var files = cljs.core.get.call(null,map__37894__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1513965922682