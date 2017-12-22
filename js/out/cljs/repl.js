// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39316){
var map__39341 = p__39316;
var map__39341__$1 = ((((!((map__39341 == null)))?((((map__39341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39341):map__39341);
var m = map__39341__$1;
var n = cljs.core.get.call(null,map__39341__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39341__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
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
var seq__39343_39365 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39344_39366 = null;
var count__39345_39367 = (0);
var i__39346_39368 = (0);
while(true){
if((i__39346_39368 < count__39345_39367)){
var f_39369 = cljs.core._nth.call(null,chunk__39344_39366,i__39346_39368);
cljs.core.println.call(null,"  ",f_39369);

var G__39370 = seq__39343_39365;
var G__39371 = chunk__39344_39366;
var G__39372 = count__39345_39367;
var G__39373 = (i__39346_39368 + (1));
seq__39343_39365 = G__39370;
chunk__39344_39366 = G__39371;
count__39345_39367 = G__39372;
i__39346_39368 = G__39373;
continue;
} else {
var temp__5457__auto___39374 = cljs.core.seq.call(null,seq__39343_39365);
if(temp__5457__auto___39374){
var seq__39343_39375__$1 = temp__5457__auto___39374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39343_39375__$1)){
var c__30184__auto___39376 = cljs.core.chunk_first.call(null,seq__39343_39375__$1);
var G__39377 = cljs.core.chunk_rest.call(null,seq__39343_39375__$1);
var G__39378 = c__30184__auto___39376;
var G__39379 = cljs.core.count.call(null,c__30184__auto___39376);
var G__39380 = (0);
seq__39343_39365 = G__39377;
chunk__39344_39366 = G__39378;
count__39345_39367 = G__39379;
i__39346_39368 = G__39380;
continue;
} else {
var f_39381 = cljs.core.first.call(null,seq__39343_39375__$1);
cljs.core.println.call(null,"  ",f_39381);

var G__39382 = cljs.core.next.call(null,seq__39343_39375__$1);
var G__39383 = null;
var G__39384 = (0);
var G__39385 = (0);
seq__39343_39365 = G__39382;
chunk__39344_39366 = G__39383;
count__39345_39367 = G__39384;
i__39346_39368 = G__39385;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39386 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__29273__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39386);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39386)))?cljs.core.second.call(null,arglists_39386):arglists_39386));
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
var seq__39347_39387 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39348_39388 = null;
var count__39349_39389 = (0);
var i__39350_39390 = (0);
while(true){
if((i__39350_39390 < count__39349_39389)){
var vec__39351_39391 = cljs.core._nth.call(null,chunk__39348_39388,i__39350_39390);
var name_39392 = cljs.core.nth.call(null,vec__39351_39391,(0),null);
var map__39354_39393 = cljs.core.nth.call(null,vec__39351_39391,(1),null);
var map__39354_39394__$1 = ((((!((map__39354_39393 == null)))?((((map__39354_39393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39354_39393.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39354_39393):map__39354_39393);
var doc_39395 = cljs.core.get.call(null,map__39354_39394__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39396 = cljs.core.get.call(null,map__39354_39394__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39392);

cljs.core.println.call(null," ",arglists_39396);

if(cljs.core.truth_(doc_39395)){
cljs.core.println.call(null," ",doc_39395);
} else {
}

var G__39397 = seq__39347_39387;
var G__39398 = chunk__39348_39388;
var G__39399 = count__39349_39389;
var G__39400 = (i__39350_39390 + (1));
seq__39347_39387 = G__39397;
chunk__39348_39388 = G__39398;
count__39349_39389 = G__39399;
i__39350_39390 = G__39400;
continue;
} else {
var temp__5457__auto___39401 = cljs.core.seq.call(null,seq__39347_39387);
if(temp__5457__auto___39401){
var seq__39347_39402__$1 = temp__5457__auto___39401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39347_39402__$1)){
var c__30184__auto___39403 = cljs.core.chunk_first.call(null,seq__39347_39402__$1);
var G__39404 = cljs.core.chunk_rest.call(null,seq__39347_39402__$1);
var G__39405 = c__30184__auto___39403;
var G__39406 = cljs.core.count.call(null,c__30184__auto___39403);
var G__39407 = (0);
seq__39347_39387 = G__39404;
chunk__39348_39388 = G__39405;
count__39349_39389 = G__39406;
i__39350_39390 = G__39407;
continue;
} else {
var vec__39356_39408 = cljs.core.first.call(null,seq__39347_39402__$1);
var name_39409 = cljs.core.nth.call(null,vec__39356_39408,(0),null);
var map__39359_39410 = cljs.core.nth.call(null,vec__39356_39408,(1),null);
var map__39359_39411__$1 = ((((!((map__39359_39410 == null)))?((((map__39359_39410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39359_39410.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39359_39410):map__39359_39410);
var doc_39412 = cljs.core.get.call(null,map__39359_39411__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39413 = cljs.core.get.call(null,map__39359_39411__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39409);

cljs.core.println.call(null," ",arglists_39413);

if(cljs.core.truth_(doc_39412)){
cljs.core.println.call(null," ",doc_39412);
} else {
}

var G__39414 = cljs.core.next.call(null,seq__39347_39402__$1);
var G__39415 = null;
var G__39416 = (0);
var G__39417 = (0);
seq__39347_39387 = G__39414;
chunk__39348_39388 = G__39415;
count__39349_39389 = G__39416;
i__39350_39390 = G__39417;
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
var temp__5457__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__39361 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39362 = null;
var count__39363 = (0);
var i__39364 = (0);
while(true){
if((i__39364 < count__39363)){
var role = cljs.core._nth.call(null,chunk__39362,i__39364);
var temp__5457__auto___39418__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39418__$1)){
var spec_39419 = temp__5457__auto___39418__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_39419));
} else {
}

var G__39420 = seq__39361;
var G__39421 = chunk__39362;
var G__39422 = count__39363;
var G__39423 = (i__39364 + (1));
seq__39361 = G__39420;
chunk__39362 = G__39421;
count__39363 = G__39422;
i__39364 = G__39423;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__39361);
if(temp__5457__auto____$1){
var seq__39361__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39361__$1)){
var c__30184__auto__ = cljs.core.chunk_first.call(null,seq__39361__$1);
var G__39424 = cljs.core.chunk_rest.call(null,seq__39361__$1);
var G__39425 = c__30184__auto__;
var G__39426 = cljs.core.count.call(null,c__30184__auto__);
var G__39427 = (0);
seq__39361 = G__39424;
chunk__39362 = G__39425;
count__39363 = G__39426;
i__39364 = G__39427;
continue;
} else {
var role = cljs.core.first.call(null,seq__39361__$1);
var temp__5457__auto___39428__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39428__$2)){
var spec_39429 = temp__5457__auto___39428__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_39429));
} else {
}

var G__39430 = cljs.core.next.call(null,seq__39361__$1);
var G__39431 = null;
var G__39432 = (0);
var G__39433 = (0);
seq__39361 = G__39430;
chunk__39362 = G__39431;
count__39363 = G__39432;
i__39364 = G__39433;
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

//# sourceMappingURL=repl.js.map?rel=1513965925433