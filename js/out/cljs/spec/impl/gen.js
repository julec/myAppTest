// Compiled by ClojureScript 1.9.521 {}
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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__29930__auto__,writer__29931__auto__,opt__29932__auto__){
return cljs.core._write.call(null,writer__29931__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__30501__auto__ = [];
var len__30494__auto___37952 = arguments.length;
var i__30495__auto___37953 = (0);
while(true){
if((i__30495__auto___37953 < len__30494__auto___37952)){
args__30501__auto__.push((arguments[i__30495__auto___37953]));

var G__37954 = (i__30495__auto___37953 + (1));
i__30495__auto___37953 = G__37954;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq37951){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37951));
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
var args__30501__auto__ = [];
var len__30494__auto___37956 = arguments.length;
var i__30495__auto___37957 = (0);
while(true){
if((i__30495__auto___37957 < len__30494__auto___37956)){
args__30501__auto__.push((arguments[i__30495__auto___37957]));

var G__37958 = (i__30495__auto___37957 + (1));
i__30495__auto___37957 = G__37958;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq37955){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37955));
});

var g_QMARK__37959 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_37960 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__37959){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__37959))
,null));
var mkg_37961 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__37959,g_37960){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__37959,g_37960))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__37959,g_37960,mkg_37961){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__37959).call(null,x);
});})(g_QMARK__37959,g_37960,mkg_37961))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__37959,g_37960,mkg_37961){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_37961).call(null,gfn);
});})(g_QMARK__37959,g_37960,mkg_37961))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__37959,g_37960,mkg_37961){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_37960).call(null,generator);
});})(g_QMARK__37959,g_37960,mkg_37961))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__37923__auto___37981 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__37923__auto___37981){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__30501__auto__ = [];
var len__30494__auto___37982 = arguments.length;
var i__30495__auto___37983 = (0);
while(true){
if((i__30495__auto___37983 < len__30494__auto___37982)){
args__30501__auto__.push((arguments[i__30495__auto___37983]));

var G__37984 = (i__30495__auto___37983 + (1));
i__30495__auto___37983 = G__37984;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37923__auto___37981))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37923__auto___37981){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37923__auto___37981),args);
});})(g__37923__auto___37981))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__37923__auto___37981){
return (function (seq37962){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37962));
});})(g__37923__auto___37981))
;


var g__37923__auto___37985 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__37923__auto___37985){
return (function cljs$spec$impl$gen$list(var_args){
var args__30501__auto__ = [];
var len__30494__auto___37986 = arguments.length;
var i__30495__auto___37987 = (0);
while(true){
if((i__30495__auto___37987 < len__30494__auto___37986)){
args__30501__auto__.push((arguments[i__30495__auto___37987]));

var G__37988 = (i__30495__auto___37987 + (1));
i__30495__auto___37987 = G__37988;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37923__auto___37985))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37923__auto___37985){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37923__auto___37985),args);
});})(g__37923__auto___37985))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__37923__auto___37985){
return (function (seq37963){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37963));
});})(g__37923__auto___37985))
;


var g__37923__auto___37989 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__37923__auto___37989){
return (function cljs$spec$impl$gen$map(var_args){
var args__30501__auto__ = [];
var len__30494__auto___37990 = arguments.length;
var i__30495__auto___37991 = (0);
while(true){
if((i__30495__auto___37991 < len__30494__auto___37990)){
args__30501__auto__.push((arguments[i__30495__auto___37991]));

var G__37992 = (i__30495__auto___37991 + (1));
i__30495__auto___37991 = G__37992;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37923__auto___37989))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37923__auto___37989){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37923__auto___37989),args);
});})(g__37923__auto___37989))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__37923__auto___37989){
return (function (seq37964){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37964));
});})(g__37923__auto___37989))
;


var g__37923__auto___37993 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__37923__auto___37993){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__30501__auto__ = [];
var len__30494__auto___37994 = arguments.length;
var i__30495__auto___37995 = (0);
while(true){
if((i__30495__auto___37995 < len__30494__auto___37994)){
args__30501__auto__.push((arguments[i__30495__auto___37995]));

var G__37996 = (i__30495__auto___37995 + (1));
i__30495__auto___37995 = G__37996;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37923__auto___37993))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37923__auto___37993){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37923__auto___37993),args);
});})(g__37923__auto___37993))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__37923__auto___37993){
return (function (seq37965){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37965));
});})(g__37923__auto___37993))
;


var g__37923__auto___37997 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__37923__auto___37997){
return (function cljs$spec$impl$gen$set(var_args){
var args__30501__auto__ = [];
var len__30494__auto___37998 = arguments.length;
var i__30495__auto___37999 = (0);
while(true){
if((i__30495__auto___37999 < len__30494__auto___37998)){
args__30501__auto__.push((arguments[i__30495__auto___37999]));

var G__38000 = (i__30495__auto___37999 + (1));
i__30495__auto___37999 = G__38000;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37923__auto___37997))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37923__auto___37997){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37923__auto___37997),args);
});})(g__37923__auto___37997))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__37923__auto___37997){
return (function (seq37966){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37966));
});})(g__37923__auto___37997))
;


var g__37923__auto___38001 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__37923__auto___38001){
return (function cljs$spec$impl$gen$vector(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38002 = arguments.length;
var i__30495__auto___38003 = (0);
while(true){
if((i__30495__auto___38003 < len__30494__auto___38002)){
args__30501__auto__.push((arguments[i__30495__auto___38003]));

var G__38004 = (i__30495__auto___38003 + (1));
i__30495__auto___38003 = G__38004;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37923__auto___38001))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37923__auto___38001){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37923__auto___38001),args);
});})(g__37923__auto___38001))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__37923__auto___38001){
return (function (seq37967){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37967));
});})(g__37923__auto___38001))
;


var g__37923__auto___38005 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__37923__auto___38005){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38006 = arguments.length;
var i__30495__auto___38007 = (0);
while(true){
if((i__30495__auto___38007 < len__30494__auto___38006)){
args__30501__auto__.push((arguments[i__30495__auto___38007]));

var G__38008 = (i__30495__auto___38007 + (1));
i__30495__auto___38007 = G__38008;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37923__auto___38005))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37923__auto___38005){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37923__auto___38005),args);
});})(g__37923__auto___38005))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__37923__auto___38005){
return (function (seq37968){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37968));
});})(g__37923__auto___38005))
;


var g__37923__auto___38009 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__37923__auto___38009){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38010 = arguments.length;
var i__30495__auto___38011 = (0);
while(true){
if((i__30495__auto___38011 < len__30494__auto___38010)){
args__30501__auto__.push((arguments[i__30495__auto___38011]));

var G__38012 = (i__30495__auto___38011 + (1));
i__30495__auto___38011 = G__38012;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37923__auto___38009))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37923__auto___38009){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37923__auto___38009),args);
});})(g__37923__auto___38009))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__37923__auto___38009){
return (function (seq37969){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37969));
});})(g__37923__auto___38009))
;


var g__37923__auto___38013 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__37923__auto___38013){
return (function cljs$spec$impl$gen$elements(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38014 = arguments.length;
var i__30495__auto___38015 = (0);
while(true){
if((i__30495__auto___38015 < len__30494__auto___38014)){
args__30501__auto__.push((arguments[i__30495__auto___38015]));

var G__38016 = (i__30495__auto___38015 + (1));
i__30495__auto___38015 = G__38016;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37923__auto___38013))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37923__auto___38013){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37923__auto___38013),args);
});})(g__37923__auto___38013))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__37923__auto___38013){
return (function (seq37970){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37970));
});})(g__37923__auto___38013))
;


var g__37923__auto___38017 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__37923__auto___38017){
return (function cljs$spec$impl$gen$bind(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38018 = arguments.length;
var i__30495__auto___38019 = (0);
while(true){
if((i__30495__auto___38019 < len__30494__auto___38018)){
args__30501__auto__.push((arguments[i__30495__auto___38019]));

var G__38020 = (i__30495__auto___38019 + (1));
i__30495__auto___38019 = G__38020;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37923__auto___38017))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37923__auto___38017){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37923__auto___38017),args);
});})(g__37923__auto___38017))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__37923__auto___38017){
return (function (seq37971){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37971));
});})(g__37923__auto___38017))
;


var g__37923__auto___38021 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__37923__auto___38021){
return (function cljs$spec$impl$gen$choose(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38022 = arguments.length;
var i__30495__auto___38023 = (0);
while(true){
if((i__30495__auto___38023 < len__30494__auto___38022)){
args__30501__auto__.push((arguments[i__30495__auto___38023]));

var G__38024 = (i__30495__auto___38023 + (1));
i__30495__auto___38023 = G__38024;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37923__auto___38021))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37923__auto___38021){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37923__auto___38021),args);
});})(g__37923__auto___38021))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__37923__auto___38021){
return (function (seq37972){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37972));
});})(g__37923__auto___38021))
;


var g__37923__auto___38025 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__37923__auto___38025){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38026 = arguments.length;
var i__30495__auto___38027 = (0);
while(true){
if((i__30495__auto___38027 < len__30494__auto___38026)){
args__30501__auto__.push((arguments[i__30495__auto___38027]));

var G__38028 = (i__30495__auto___38027 + (1));
i__30495__auto___38027 = G__38028;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37923__auto___38025))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37923__auto___38025){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37923__auto___38025),args);
});})(g__37923__auto___38025))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__37923__auto___38025){
return (function (seq37973){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37973));
});})(g__37923__auto___38025))
;


var g__37923__auto___38029 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__37923__auto___38029){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38030 = arguments.length;
var i__30495__auto___38031 = (0);
while(true){
if((i__30495__auto___38031 < len__30494__auto___38030)){
args__30501__auto__.push((arguments[i__30495__auto___38031]));

var G__38032 = (i__30495__auto___38031 + (1));
i__30495__auto___38031 = G__38032;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37923__auto___38029))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37923__auto___38029){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37923__auto___38029),args);
});})(g__37923__auto___38029))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__37923__auto___38029){
return (function (seq37974){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37974));
});})(g__37923__auto___38029))
;


var g__37923__auto___38033 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__37923__auto___38033){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38034 = arguments.length;
var i__30495__auto___38035 = (0);
while(true){
if((i__30495__auto___38035 < len__30494__auto___38034)){
args__30501__auto__.push((arguments[i__30495__auto___38035]));

var G__38036 = (i__30495__auto___38035 + (1));
i__30495__auto___38035 = G__38036;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37923__auto___38033))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37923__auto___38033){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37923__auto___38033),args);
});})(g__37923__auto___38033))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__37923__auto___38033){
return (function (seq37975){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37975));
});})(g__37923__auto___38033))
;


var g__37923__auto___38037 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__37923__auto___38037){
return (function cljs$spec$impl$gen$sample(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38038 = arguments.length;
var i__30495__auto___38039 = (0);
while(true){
if((i__30495__auto___38039 < len__30494__auto___38038)){
args__30501__auto__.push((arguments[i__30495__auto___38039]));

var G__38040 = (i__30495__auto___38039 + (1));
i__30495__auto___38039 = G__38040;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37923__auto___38037))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37923__auto___38037){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37923__auto___38037),args);
});})(g__37923__auto___38037))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__37923__auto___38037){
return (function (seq37976){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37976));
});})(g__37923__auto___38037))
;


var g__37923__auto___38041 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__37923__auto___38041){
return (function cljs$spec$impl$gen$return(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38042 = arguments.length;
var i__30495__auto___38043 = (0);
while(true){
if((i__30495__auto___38043 < len__30494__auto___38042)){
args__30501__auto__.push((arguments[i__30495__auto___38043]));

var G__38044 = (i__30495__auto___38043 + (1));
i__30495__auto___38043 = G__38044;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37923__auto___38041))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37923__auto___38041){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37923__auto___38041),args);
});})(g__37923__auto___38041))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__37923__auto___38041){
return (function (seq37977){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37977));
});})(g__37923__auto___38041))
;


var g__37923__auto___38045 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__37923__auto___38045){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38046 = arguments.length;
var i__30495__auto___38047 = (0);
while(true){
if((i__30495__auto___38047 < len__30494__auto___38046)){
args__30501__auto__.push((arguments[i__30495__auto___38047]));

var G__38048 = (i__30495__auto___38047 + (1));
i__30495__auto___38047 = G__38048;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37923__auto___38045))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37923__auto___38045){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37923__auto___38045),args);
});})(g__37923__auto___38045))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__37923__auto___38045){
return (function (seq37978){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37978));
});})(g__37923__auto___38045))
;


var g__37923__auto___38049 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__37923__auto___38049){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38050 = arguments.length;
var i__30495__auto___38051 = (0);
while(true){
if((i__30495__auto___38051 < len__30494__auto___38050)){
args__30501__auto__.push((arguments[i__30495__auto___38051]));

var G__38052 = (i__30495__auto___38051 + (1));
i__30495__auto___38051 = G__38052;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37923__auto___38049))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37923__auto___38049){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37923__auto___38049),args);
});})(g__37923__auto___38049))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__37923__auto___38049){
return (function (seq37979){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37979));
});})(g__37923__auto___38049))
;


var g__37923__auto___38053 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__37923__auto___38053){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38054 = arguments.length;
var i__30495__auto___38055 = (0);
while(true){
if((i__30495__auto___38055 < len__30494__auto___38054)){
args__30501__auto__.push((arguments[i__30495__auto___38055]));

var G__38056 = (i__30495__auto___38055 + (1));
i__30495__auto___38055 = G__38056;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37923__auto___38053))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37923__auto___38053){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37923__auto___38053),args);
});})(g__37923__auto___38053))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__37923__auto___38053){
return (function (seq37980){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37980));
});})(g__37923__auto___38053))
;

var g__37936__auto___38078 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__37936__auto___38078){
return (function cljs$spec$impl$gen$any(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38079 = arguments.length;
var i__30495__auto___38080 = (0);
while(true){
if((i__30495__auto___38080 < len__30494__auto___38079)){
args__30501__auto__.push((arguments[i__30495__auto___38080]));

var G__38081 = (i__30495__auto___38080 + (1));
i__30495__auto___38080 = G__38081;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37936__auto___38078))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37936__auto___38078){
return (function (args){
return cljs.core.deref.call(null,g__37936__auto___38078);
});})(g__37936__auto___38078))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__37936__auto___38078){
return (function (seq38057){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38057));
});})(g__37936__auto___38078))
;


var g__37936__auto___38082 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__37936__auto___38082){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38083 = arguments.length;
var i__30495__auto___38084 = (0);
while(true){
if((i__30495__auto___38084 < len__30494__auto___38083)){
args__30501__auto__.push((arguments[i__30495__auto___38084]));

var G__38085 = (i__30495__auto___38084 + (1));
i__30495__auto___38084 = G__38085;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37936__auto___38082))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37936__auto___38082){
return (function (args){
return cljs.core.deref.call(null,g__37936__auto___38082);
});})(g__37936__auto___38082))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__37936__auto___38082){
return (function (seq38058){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38058));
});})(g__37936__auto___38082))
;


var g__37936__auto___38086 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__37936__auto___38086){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38087 = arguments.length;
var i__30495__auto___38088 = (0);
while(true){
if((i__30495__auto___38088 < len__30494__auto___38087)){
args__30501__auto__.push((arguments[i__30495__auto___38088]));

var G__38089 = (i__30495__auto___38088 + (1));
i__30495__auto___38088 = G__38089;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37936__auto___38086))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37936__auto___38086){
return (function (args){
return cljs.core.deref.call(null,g__37936__auto___38086);
});})(g__37936__auto___38086))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__37936__auto___38086){
return (function (seq38059){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38059));
});})(g__37936__auto___38086))
;


var g__37936__auto___38090 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__37936__auto___38090){
return (function cljs$spec$impl$gen$char(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38091 = arguments.length;
var i__30495__auto___38092 = (0);
while(true){
if((i__30495__auto___38092 < len__30494__auto___38091)){
args__30501__auto__.push((arguments[i__30495__auto___38092]));

var G__38093 = (i__30495__auto___38092 + (1));
i__30495__auto___38092 = G__38093;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37936__auto___38090))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37936__auto___38090){
return (function (args){
return cljs.core.deref.call(null,g__37936__auto___38090);
});})(g__37936__auto___38090))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__37936__auto___38090){
return (function (seq38060){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38060));
});})(g__37936__auto___38090))
;


var g__37936__auto___38094 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__37936__auto___38094){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38095 = arguments.length;
var i__30495__auto___38096 = (0);
while(true){
if((i__30495__auto___38096 < len__30494__auto___38095)){
args__30501__auto__.push((arguments[i__30495__auto___38096]));

var G__38097 = (i__30495__auto___38096 + (1));
i__30495__auto___38096 = G__38097;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37936__auto___38094))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37936__auto___38094){
return (function (args){
return cljs.core.deref.call(null,g__37936__auto___38094);
});})(g__37936__auto___38094))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__37936__auto___38094){
return (function (seq38061){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38061));
});})(g__37936__auto___38094))
;


var g__37936__auto___38098 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__37936__auto___38098){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38099 = arguments.length;
var i__30495__auto___38100 = (0);
while(true){
if((i__30495__auto___38100 < len__30494__auto___38099)){
args__30501__auto__.push((arguments[i__30495__auto___38100]));

var G__38101 = (i__30495__auto___38100 + (1));
i__30495__auto___38100 = G__38101;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37936__auto___38098))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37936__auto___38098){
return (function (args){
return cljs.core.deref.call(null,g__37936__auto___38098);
});})(g__37936__auto___38098))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__37936__auto___38098){
return (function (seq38062){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38062));
});})(g__37936__auto___38098))
;


var g__37936__auto___38102 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__37936__auto___38102){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38103 = arguments.length;
var i__30495__auto___38104 = (0);
while(true){
if((i__30495__auto___38104 < len__30494__auto___38103)){
args__30501__auto__.push((arguments[i__30495__auto___38104]));

var G__38105 = (i__30495__auto___38104 + (1));
i__30495__auto___38104 = G__38105;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37936__auto___38102))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37936__auto___38102){
return (function (args){
return cljs.core.deref.call(null,g__37936__auto___38102);
});})(g__37936__auto___38102))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__37936__auto___38102){
return (function (seq38063){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38063));
});})(g__37936__auto___38102))
;


var g__37936__auto___38106 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__37936__auto___38106){
return (function cljs$spec$impl$gen$double(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38107 = arguments.length;
var i__30495__auto___38108 = (0);
while(true){
if((i__30495__auto___38108 < len__30494__auto___38107)){
args__30501__auto__.push((arguments[i__30495__auto___38108]));

var G__38109 = (i__30495__auto___38108 + (1));
i__30495__auto___38108 = G__38109;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37936__auto___38106))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37936__auto___38106){
return (function (args){
return cljs.core.deref.call(null,g__37936__auto___38106);
});})(g__37936__auto___38106))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__37936__auto___38106){
return (function (seq38064){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38064));
});})(g__37936__auto___38106))
;


var g__37936__auto___38110 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__37936__auto___38110){
return (function cljs$spec$impl$gen$int(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38111 = arguments.length;
var i__30495__auto___38112 = (0);
while(true){
if((i__30495__auto___38112 < len__30494__auto___38111)){
args__30501__auto__.push((arguments[i__30495__auto___38112]));

var G__38113 = (i__30495__auto___38112 + (1));
i__30495__auto___38112 = G__38113;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37936__auto___38110))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37936__auto___38110){
return (function (args){
return cljs.core.deref.call(null,g__37936__auto___38110);
});})(g__37936__auto___38110))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__37936__auto___38110){
return (function (seq38065){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38065));
});})(g__37936__auto___38110))
;


var g__37936__auto___38114 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__37936__auto___38114){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38115 = arguments.length;
var i__30495__auto___38116 = (0);
while(true){
if((i__30495__auto___38116 < len__30494__auto___38115)){
args__30501__auto__.push((arguments[i__30495__auto___38116]));

var G__38117 = (i__30495__auto___38116 + (1));
i__30495__auto___38116 = G__38117;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37936__auto___38114))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37936__auto___38114){
return (function (args){
return cljs.core.deref.call(null,g__37936__auto___38114);
});})(g__37936__auto___38114))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__37936__auto___38114){
return (function (seq38066){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38066));
});})(g__37936__auto___38114))
;


var g__37936__auto___38118 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__37936__auto___38118){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38119 = arguments.length;
var i__30495__auto___38120 = (0);
while(true){
if((i__30495__auto___38120 < len__30494__auto___38119)){
args__30501__auto__.push((arguments[i__30495__auto___38120]));

var G__38121 = (i__30495__auto___38120 + (1));
i__30495__auto___38120 = G__38121;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37936__auto___38118))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37936__auto___38118){
return (function (args){
return cljs.core.deref.call(null,g__37936__auto___38118);
});})(g__37936__auto___38118))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__37936__auto___38118){
return (function (seq38067){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38067));
});})(g__37936__auto___38118))
;


var g__37936__auto___38122 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__37936__auto___38122){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38123 = arguments.length;
var i__30495__auto___38124 = (0);
while(true){
if((i__30495__auto___38124 < len__30494__auto___38123)){
args__30501__auto__.push((arguments[i__30495__auto___38124]));

var G__38125 = (i__30495__auto___38124 + (1));
i__30495__auto___38124 = G__38125;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37936__auto___38122))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37936__auto___38122){
return (function (args){
return cljs.core.deref.call(null,g__37936__auto___38122);
});})(g__37936__auto___38122))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__37936__auto___38122){
return (function (seq38068){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38068));
});})(g__37936__auto___38122))
;


var g__37936__auto___38126 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__37936__auto___38126){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38127 = arguments.length;
var i__30495__auto___38128 = (0);
while(true){
if((i__30495__auto___38128 < len__30494__auto___38127)){
args__30501__auto__.push((arguments[i__30495__auto___38128]));

var G__38129 = (i__30495__auto___38128 + (1));
i__30495__auto___38128 = G__38129;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37936__auto___38126))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37936__auto___38126){
return (function (args){
return cljs.core.deref.call(null,g__37936__auto___38126);
});})(g__37936__auto___38126))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__37936__auto___38126){
return (function (seq38069){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38069));
});})(g__37936__auto___38126))
;


var g__37936__auto___38130 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__37936__auto___38130){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38131 = arguments.length;
var i__30495__auto___38132 = (0);
while(true){
if((i__30495__auto___38132 < len__30494__auto___38131)){
args__30501__auto__.push((arguments[i__30495__auto___38132]));

var G__38133 = (i__30495__auto___38132 + (1));
i__30495__auto___38132 = G__38133;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37936__auto___38130))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37936__auto___38130){
return (function (args){
return cljs.core.deref.call(null,g__37936__auto___38130);
});})(g__37936__auto___38130))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__37936__auto___38130){
return (function (seq38070){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38070));
});})(g__37936__auto___38130))
;


var g__37936__auto___38134 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__37936__auto___38134){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38135 = arguments.length;
var i__30495__auto___38136 = (0);
while(true){
if((i__30495__auto___38136 < len__30494__auto___38135)){
args__30501__auto__.push((arguments[i__30495__auto___38136]));

var G__38137 = (i__30495__auto___38136 + (1));
i__30495__auto___38136 = G__38137;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37936__auto___38134))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37936__auto___38134){
return (function (args){
return cljs.core.deref.call(null,g__37936__auto___38134);
});})(g__37936__auto___38134))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__37936__auto___38134){
return (function (seq38071){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38071));
});})(g__37936__auto___38134))
;


var g__37936__auto___38138 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__37936__auto___38138){
return (function cljs$spec$impl$gen$string(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38139 = arguments.length;
var i__30495__auto___38140 = (0);
while(true){
if((i__30495__auto___38140 < len__30494__auto___38139)){
args__30501__auto__.push((arguments[i__30495__auto___38140]));

var G__38141 = (i__30495__auto___38140 + (1));
i__30495__auto___38140 = G__38141;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37936__auto___38138))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37936__auto___38138){
return (function (args){
return cljs.core.deref.call(null,g__37936__auto___38138);
});})(g__37936__auto___38138))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__37936__auto___38138){
return (function (seq38072){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38072));
});})(g__37936__auto___38138))
;


var g__37936__auto___38142 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__37936__auto___38142){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38143 = arguments.length;
var i__30495__auto___38144 = (0);
while(true){
if((i__30495__auto___38144 < len__30494__auto___38143)){
args__30501__auto__.push((arguments[i__30495__auto___38144]));

var G__38145 = (i__30495__auto___38144 + (1));
i__30495__auto___38144 = G__38145;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37936__auto___38142))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37936__auto___38142){
return (function (args){
return cljs.core.deref.call(null,g__37936__auto___38142);
});})(g__37936__auto___38142))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__37936__auto___38142){
return (function (seq38073){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38073));
});})(g__37936__auto___38142))
;


var g__37936__auto___38146 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__37936__auto___38146){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38147 = arguments.length;
var i__30495__auto___38148 = (0);
while(true){
if((i__30495__auto___38148 < len__30494__auto___38147)){
args__30501__auto__.push((arguments[i__30495__auto___38148]));

var G__38149 = (i__30495__auto___38148 + (1));
i__30495__auto___38148 = G__38149;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37936__auto___38146))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37936__auto___38146){
return (function (args){
return cljs.core.deref.call(null,g__37936__auto___38146);
});})(g__37936__auto___38146))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__37936__auto___38146){
return (function (seq38074){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38074));
});})(g__37936__auto___38146))
;


var g__37936__auto___38150 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__37936__auto___38150){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38151 = arguments.length;
var i__30495__auto___38152 = (0);
while(true){
if((i__30495__auto___38152 < len__30494__auto___38151)){
args__30501__auto__.push((arguments[i__30495__auto___38152]));

var G__38153 = (i__30495__auto___38152 + (1));
i__30495__auto___38152 = G__38153;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37936__auto___38150))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37936__auto___38150){
return (function (args){
return cljs.core.deref.call(null,g__37936__auto___38150);
});})(g__37936__auto___38150))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__37936__auto___38150){
return (function (seq38075){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38075));
});})(g__37936__auto___38150))
;


var g__37936__auto___38154 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__37936__auto___38154){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38155 = arguments.length;
var i__30495__auto___38156 = (0);
while(true){
if((i__30495__auto___38156 < len__30494__auto___38155)){
args__30501__auto__.push((arguments[i__30495__auto___38156]));

var G__38157 = (i__30495__auto___38156 + (1));
i__30495__auto___38156 = G__38157;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37936__auto___38154))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37936__auto___38154){
return (function (args){
return cljs.core.deref.call(null,g__37936__auto___38154);
});})(g__37936__auto___38154))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__37936__auto___38154){
return (function (seq38076){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38076));
});})(g__37936__auto___38154))
;


var g__37936__auto___38158 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__37936__auto___38158){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38159 = arguments.length;
var i__30495__auto___38160 = (0);
while(true){
if((i__30495__auto___38160 < len__30494__auto___38159)){
args__30501__auto__.push((arguments[i__30495__auto___38160]));

var G__38161 = (i__30495__auto___38160 + (1));
i__30495__auto___38160 = G__38161;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});})(g__37936__auto___38158))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37936__auto___38158){
return (function (args){
return cljs.core.deref.call(null,g__37936__auto___38158);
});})(g__37936__auto___38158))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__37936__auto___38158){
return (function (seq38077){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38077));
});})(g__37936__auto___38158))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__30501__auto__ = [];
var len__30494__auto___38164 = arguments.length;
var i__30495__auto___38165 = (0);
while(true){
if((i__30495__auto___38165 < len__30494__auto___38164)){
args__30501__auto__.push((arguments[i__30495__auto___38165]));

var G__38166 = (i__30495__auto___38165 + (1));
i__30495__auto___38165 = G__38166;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__38162_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__38162_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq38163){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38163));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__38167_SHARP_){
return (new Date(p1__38167_SHARP_));
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

//# sourceMappingURL=gen.js.map?rel=1513968567795