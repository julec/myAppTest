// Compiled by ClojureScript 1.9.521 {}
goog.provide('rum.util');
goog.require('cljs.core');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (m){
return cljs.core.get.call(null,m,key);
}),mixins));
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,(function (m){
return cljs.core.map.call(null,(function (k){
return cljs.core.get.call(null,m,k);
}),keys);
}),mixins));
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__30501__auto__ = [];
var len__30494__auto___41560 = arguments.length;
var i__30495__auto___41561 = (0);
while(true){
if((i__30495__auto___41561 < len__30494__auto___41560)){
args__30501__auto__.push((arguments[i__30495__auto___41561]));

var G__41562 = (i__30495__auto___41561 + (1));
i__30495__auto___41561 = G__41562;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((2) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30502__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

rum.util.call_all.cljs$lang$applyTo = (function (seq41557){
var G__41558 = cljs.core.first.call(null,seq41557);
var seq41557__$1 = cljs.core.next.call(null,seq41557);
var G__41559 = cljs.core.first.call(null,seq41557__$1);
var seq41557__$2 = cljs.core.next.call(null,seq41557__$1);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(G__41558,G__41559,seq41557__$2);
});

rum.util.filter_vals = (function rum$util$filter_vals(pred,m){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.assoc.call(null,m__$1,k,v);
} else {
return m__$1;
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

//# sourceMappingURL=util.js.map?rel=1513965928212