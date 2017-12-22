// Compiled by ClojureScript 1.9.521 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args40620 = [];
var len__30494__auto___40640 = arguments.length;
var i__30495__auto___40641 = (0);
while(true){
if((i__30495__auto___40641 < len__30494__auto___40640)){
args40620.push((arguments[i__30495__auto___40641]));

var G__40642 = (i__30495__auto___40641 + (1));
i__30495__auto___40641 = G__40642;
continue;
} else {
}
break;
}

var G__40622 = args40620.length;
switch (G__40622) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40620.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__40623 = opts;
var map__40623__$1 = ((((!((map__40623 == null)))?((((map__40623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40623.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40623):map__40623);
var ref = cljs.core.get.call(null,map__40623__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__40623__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__40625 = cljs.core.count.call(null,refs);
switch (G__40625) {
case (1):
var vec__40626 = refs;
var a = cljs.core.nth.call(null,vec__40626,(0),null);
return ((function (vec__40626,a,G__40625,map__40623,map__40623__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__40626,a,G__40625,map__40623,map__40623__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__40629 = refs;
var a = cljs.core.nth.call(null,vec__40629,(0),null);
var b = cljs.core.nth.call(null,vec__40629,(1),null);
return ((function (vec__40629,a,b,G__40625,map__40623,map__40623__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__40629,a,b,G__40625,map__40623,map__40623__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__40632 = refs;
var a = cljs.core.nth.call(null,vec__40632,(0),null);
var b = cljs.core.nth.call(null,vec__40632,(1),null);
var c = cljs.core.nth.call(null,vec__40632,(2),null);
return ((function (vec__40632,a,b,c,G__40625,map__40623,map__40623__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__40632,a,b,c,G__40625,map__40623,map__40623__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__40625,map__40623,map__40623__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__40625,map__40623,map__40623__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__40635 = ref;
cljs.core.reset_BANG_.call(null,G__40635,recalc.call(null));

return G__40635;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__40623,map__40623__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__40623,map__40623__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__40623,map__40623__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__40623,map__40623__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__40636_40645 = cljs.core.seq.call(null,refs);
var chunk__40637_40646 = null;
var count__40638_40647 = (0);
var i__40639_40648 = (0);
while(true){
if((i__40639_40648 < count__40638_40647)){
var ref_40649__$1 = cljs.core._nth.call(null,chunk__40637_40646,i__40639_40648);
cljs.core.add_watch.call(null,ref_40649__$1,key,watch);

var G__40650 = seq__40636_40645;
var G__40651 = chunk__40637_40646;
var G__40652 = count__40638_40647;
var G__40653 = (i__40639_40648 + (1));
seq__40636_40645 = G__40650;
chunk__40637_40646 = G__40651;
count__40638_40647 = G__40652;
i__40639_40648 = G__40653;
continue;
} else {
var temp__5457__auto___40654 = cljs.core.seq.call(null,seq__40636_40645);
if(temp__5457__auto___40654){
var seq__40636_40655__$1 = temp__5457__auto___40654;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40636_40655__$1)){
var c__30184__auto___40656 = cljs.core.chunk_first.call(null,seq__40636_40655__$1);
var G__40657 = cljs.core.chunk_rest.call(null,seq__40636_40655__$1);
var G__40658 = c__30184__auto___40656;
var G__40659 = cljs.core.count.call(null,c__30184__auto___40656);
var G__40660 = (0);
seq__40636_40645 = G__40657;
chunk__40637_40646 = G__40658;
count__40638_40647 = G__40659;
i__40639_40648 = G__40660;
continue;
} else {
var ref_40661__$1 = cljs.core.first.call(null,seq__40636_40655__$1);
cljs.core.add_watch.call(null,ref_40661__$1,key,watch);

var G__40662 = cljs.core.next.call(null,seq__40636_40655__$1);
var G__40663 = null;
var G__40664 = (0);
var G__40665 = (0);
seq__40636_40645 = G__40662;
chunk__40637_40646 = G__40663;
count__40638_40647 = G__40664;
i__40639_40648 = G__40665;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map?rel=1513965927223