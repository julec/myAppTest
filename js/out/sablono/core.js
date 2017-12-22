// Compiled by ClojureScript 1.9.521 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__41271__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__41268 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__41269 = cljs.core.seq.call(null,vec__41268);
var first__41270 = cljs.core.first.call(null,seq__41269);
var seq__41269__$1 = cljs.core.next.call(null,seq__41269);
var tag = first__41270;
var body = seq__41269__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__41271 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41272__i = 0, G__41272__a = new Array(arguments.length -  0);
while (G__41272__i < G__41272__a.length) {G__41272__a[G__41272__i] = arguments[G__41272__i + 0]; ++G__41272__i;}
  args = new cljs.core.IndexedSeq(G__41272__a,0);
} 
return G__41271__delegate.call(this,args);};
G__41271.cljs$lang$maxFixedArity = 0;
G__41271.cljs$lang$applyTo = (function (arglist__41273){
var args = cljs.core.seq(arglist__41273);
return G__41271__delegate(args);
});
G__41271.cljs$core$IFn$_invoke$arity$variadic = G__41271__delegate;
return G__41271;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__30135__auto__ = (function sablono$core$update_arglists_$_iter__41278(s__41279){
return (new cljs.core.LazySeq(null,(function (){
var s__41279__$1 = s__41279;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__41279__$1);
if(temp__5457__auto__){
var s__41279__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41279__$2)){
var c__30133__auto__ = cljs.core.chunk_first.call(null,s__41279__$2);
var size__30134__auto__ = cljs.core.count.call(null,c__30133__auto__);
var b__41281 = cljs.core.chunk_buffer.call(null,size__30134__auto__);
if((function (){var i__41280 = (0);
while(true){
if((i__41280 < size__30134__auto__)){
var args = cljs.core._nth.call(null,c__30133__auto__,i__41280);
cljs.core.chunk_append.call(null,b__41281,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__41282 = (i__41280 + (1));
i__41280 = G__41282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41281),sablono$core$update_arglists_$_iter__41278.call(null,cljs.core.chunk_rest.call(null,s__41279__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41281),null);
}
} else {
var args = cljs.core.first.call(null,s__41279__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__41278.call(null,cljs.core.rest.call(null,s__41279__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30135__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__30501__auto__ = [];
var len__30494__auto___41288 = arguments.length;
var i__30495__auto___41289 = (0);
while(true){
if((i__30495__auto___41289 < len__30494__auto___41288)){
args__30501__auto__.push((arguments[i__30495__auto___41289]));

var G__41290 = (i__30495__auto___41289 + (1));
i__30495__auto___41289 = G__41290;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__30135__auto__ = (function sablono$core$iter__41284(s__41285){
return (new cljs.core.LazySeq(null,(function (){
var s__41285__$1 = s__41285;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__41285__$1);
if(temp__5457__auto__){
var s__41285__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41285__$2)){
var c__30133__auto__ = cljs.core.chunk_first.call(null,s__41285__$2);
var size__30134__auto__ = cljs.core.count.call(null,c__30133__auto__);
var b__41287 = cljs.core.chunk_buffer.call(null,size__30134__auto__);
if((function (){var i__41286 = (0);
while(true){
if((i__41286 < size__30134__auto__)){
var style = cljs.core._nth.call(null,c__30133__auto__,i__41286);
cljs.core.chunk_append.call(null,b__41287,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__41291 = (i__41286 + (1));
i__41286 = G__41291;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41287),sablono$core$iter__41284.call(null,cljs.core.chunk_rest.call(null,s__41285__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41287),null);
}
} else {
var style = cljs.core.first.call(null,s__41285__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__41284.call(null,cljs.core.rest.call(null,s__41285__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30135__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq41283){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41283));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to41292 = (function sablono$core$link_to41292(var_args){
var args__30501__auto__ = [];
var len__30494__auto___41295 = arguments.length;
var i__30495__auto___41296 = (0);
while(true){
if((i__30495__auto___41296 < len__30494__auto___41295)){
args__30501__auto__.push((arguments[i__30495__auto___41296]));

var G__41297 = (i__30495__auto___41296 + (1));
i__30495__auto___41296 = G__41297;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((1) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to41292.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30502__auto__);
});

sablono.core.link_to41292.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to41292.cljs$lang$maxFixedArity = (1);

sablono.core.link_to41292.cljs$lang$applyTo = (function (seq41293){
var G__41294 = cljs.core.first.call(null,seq41293);
var seq41293__$1 = cljs.core.next.call(null,seq41293);
return sablono.core.link_to41292.cljs$core$IFn$_invoke$arity$variadic(G__41294,seq41293__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to41292);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to41298 = (function sablono$core$mail_to41298(var_args){
var args__30501__auto__ = [];
var len__30494__auto___41305 = arguments.length;
var i__30495__auto___41306 = (0);
while(true){
if((i__30495__auto___41306 < len__30494__auto___41305)){
args__30501__auto__.push((arguments[i__30495__auto___41306]));

var G__41307 = (i__30495__auto___41306 + (1));
i__30495__auto___41306 = G__41307;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((1) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to41298.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30502__auto__);
});

sablono.core.mail_to41298.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__41301){
var vec__41302 = p__41301;
var content = cljs.core.nth.call(null,vec__41302,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__29273__auto__ = content;
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to41298.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to41298.cljs$lang$applyTo = (function (seq41299){
var G__41300 = cljs.core.first.call(null,seq41299);
var seq41299__$1 = cljs.core.next.call(null,seq41299);
return sablono.core.mail_to41298.cljs$core$IFn$_invoke$arity$variadic(G__41300,seq41299__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to41298);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list41308 = (function sablono$core$unordered_list41308(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__30135__auto__ = (function sablono$core$unordered_list41308_$_iter__41313(s__41314){
return (new cljs.core.LazySeq(null,(function (){
var s__41314__$1 = s__41314;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__41314__$1);
if(temp__5457__auto__){
var s__41314__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41314__$2)){
var c__30133__auto__ = cljs.core.chunk_first.call(null,s__41314__$2);
var size__30134__auto__ = cljs.core.count.call(null,c__30133__auto__);
var b__41316 = cljs.core.chunk_buffer.call(null,size__30134__auto__);
if((function (){var i__41315 = (0);
while(true){
if((i__41315 < size__30134__auto__)){
var x = cljs.core._nth.call(null,c__30133__auto__,i__41315);
cljs.core.chunk_append.call(null,b__41316,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41317 = (i__41315 + (1));
i__41315 = G__41317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41316),sablono$core$unordered_list41308_$_iter__41313.call(null,cljs.core.chunk_rest.call(null,s__41314__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41316),null);
}
} else {
var x = cljs.core.first.call(null,s__41314__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list41308_$_iter__41313.call(null,cljs.core.rest.call(null,s__41314__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30135__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list41308);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list41318 = (function sablono$core$ordered_list41318(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__30135__auto__ = (function sablono$core$ordered_list41318_$_iter__41323(s__41324){
return (new cljs.core.LazySeq(null,(function (){
var s__41324__$1 = s__41324;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__41324__$1);
if(temp__5457__auto__){
var s__41324__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41324__$2)){
var c__30133__auto__ = cljs.core.chunk_first.call(null,s__41324__$2);
var size__30134__auto__ = cljs.core.count.call(null,c__30133__auto__);
var b__41326 = cljs.core.chunk_buffer.call(null,size__30134__auto__);
if((function (){var i__41325 = (0);
while(true){
if((i__41325 < size__30134__auto__)){
var x = cljs.core._nth.call(null,c__30133__auto__,i__41325);
cljs.core.chunk_append.call(null,b__41326,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41327 = (i__41325 + (1));
i__41325 = G__41327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41326),sablono$core$ordered_list41318_$_iter__41323.call(null,cljs.core.chunk_rest.call(null,s__41324__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41326),null);
}
} else {
var x = cljs.core.first.call(null,s__41324__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list41318_$_iter__41323.call(null,cljs.core.rest.call(null,s__41324__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30135__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list41318);
/**
 * Create an image element.
 */
sablono.core.image41328 = (function sablono$core$image41328(var_args){
var args41329 = [];
var len__30494__auto___41332 = arguments.length;
var i__30495__auto___41333 = (0);
while(true){
if((i__30495__auto___41333 < len__30494__auto___41332)){
args41329.push((arguments[i__30495__auto___41333]));

var G__41334 = (i__30495__auto___41333 + (1));
i__30495__auto___41333 = G__41334;
continue;
} else {
}
break;
}

var G__41331 = args41329.length;
switch (G__41331) {
case 1:
return sablono.core.image41328.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image41328.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41329.length)].join('')));

}
});

sablono.core.image41328.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image41328.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image41328.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image41328);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__41336_SHARP_,p2__41337_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41336_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41337_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__41338_SHARP_,p2__41339_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41338_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41339_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__29273__auto__ = value;
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field41340 = (function sablono$core$color_field41340(var_args){
var args41341 = [];
var len__30494__auto___41408 = arguments.length;
var i__30495__auto___41409 = (0);
while(true){
if((i__30495__auto___41409 < len__30494__auto___41408)){
args41341.push((arguments[i__30495__auto___41409]));

var G__41410 = (i__30495__auto___41409 + (1));
i__30495__auto___41409 = G__41410;
continue;
} else {
}
break;
}

var G__41343 = args41341.length;
switch (G__41343) {
case 1:
return sablono.core.color_field41340.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field41340.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41341.length)].join('')));

}
});

sablono.core.color_field41340.cljs$core$IFn$_invoke$arity$1 = (function (name__41255__auto__){
return sablono.core.color_field41340.call(null,name__41255__auto__,null);
});

sablono.core.color_field41340.cljs$core$IFn$_invoke$arity$2 = (function (name__41255__auto__,value__41256__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__41255__auto__,value__41256__auto__);
});

sablono.core.color_field41340.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field41340);

/**
 * Creates a date input field.
 */
sablono.core.date_field41344 = (function sablono$core$date_field41344(var_args){
var args41345 = [];
var len__30494__auto___41412 = arguments.length;
var i__30495__auto___41413 = (0);
while(true){
if((i__30495__auto___41413 < len__30494__auto___41412)){
args41345.push((arguments[i__30495__auto___41413]));

var G__41414 = (i__30495__auto___41413 + (1));
i__30495__auto___41413 = G__41414;
continue;
} else {
}
break;
}

var G__41347 = args41345.length;
switch (G__41347) {
case 1:
return sablono.core.date_field41344.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field41344.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41345.length)].join('')));

}
});

sablono.core.date_field41344.cljs$core$IFn$_invoke$arity$1 = (function (name__41255__auto__){
return sablono.core.date_field41344.call(null,name__41255__auto__,null);
});

sablono.core.date_field41344.cljs$core$IFn$_invoke$arity$2 = (function (name__41255__auto__,value__41256__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__41255__auto__,value__41256__auto__);
});

sablono.core.date_field41344.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field41344);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field41348 = (function sablono$core$datetime_field41348(var_args){
var args41349 = [];
var len__30494__auto___41416 = arguments.length;
var i__30495__auto___41417 = (0);
while(true){
if((i__30495__auto___41417 < len__30494__auto___41416)){
args41349.push((arguments[i__30495__auto___41417]));

var G__41418 = (i__30495__auto___41417 + (1));
i__30495__auto___41417 = G__41418;
continue;
} else {
}
break;
}

var G__41351 = args41349.length;
switch (G__41351) {
case 1:
return sablono.core.datetime_field41348.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field41348.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41349.length)].join('')));

}
});

sablono.core.datetime_field41348.cljs$core$IFn$_invoke$arity$1 = (function (name__41255__auto__){
return sablono.core.datetime_field41348.call(null,name__41255__auto__,null);
});

sablono.core.datetime_field41348.cljs$core$IFn$_invoke$arity$2 = (function (name__41255__auto__,value__41256__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__41255__auto__,value__41256__auto__);
});

sablono.core.datetime_field41348.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field41348);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field41352 = (function sablono$core$datetime_local_field41352(var_args){
var args41353 = [];
var len__30494__auto___41420 = arguments.length;
var i__30495__auto___41421 = (0);
while(true){
if((i__30495__auto___41421 < len__30494__auto___41420)){
args41353.push((arguments[i__30495__auto___41421]));

var G__41422 = (i__30495__auto___41421 + (1));
i__30495__auto___41421 = G__41422;
continue;
} else {
}
break;
}

var G__41355 = args41353.length;
switch (G__41355) {
case 1:
return sablono.core.datetime_local_field41352.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field41352.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41353.length)].join('')));

}
});

sablono.core.datetime_local_field41352.cljs$core$IFn$_invoke$arity$1 = (function (name__41255__auto__){
return sablono.core.datetime_local_field41352.call(null,name__41255__auto__,null);
});

sablono.core.datetime_local_field41352.cljs$core$IFn$_invoke$arity$2 = (function (name__41255__auto__,value__41256__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__41255__auto__,value__41256__auto__);
});

sablono.core.datetime_local_field41352.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field41352);

/**
 * Creates a email input field.
 */
sablono.core.email_field41356 = (function sablono$core$email_field41356(var_args){
var args41357 = [];
var len__30494__auto___41424 = arguments.length;
var i__30495__auto___41425 = (0);
while(true){
if((i__30495__auto___41425 < len__30494__auto___41424)){
args41357.push((arguments[i__30495__auto___41425]));

var G__41426 = (i__30495__auto___41425 + (1));
i__30495__auto___41425 = G__41426;
continue;
} else {
}
break;
}

var G__41359 = args41357.length;
switch (G__41359) {
case 1:
return sablono.core.email_field41356.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field41356.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41357.length)].join('')));

}
});

sablono.core.email_field41356.cljs$core$IFn$_invoke$arity$1 = (function (name__41255__auto__){
return sablono.core.email_field41356.call(null,name__41255__auto__,null);
});

sablono.core.email_field41356.cljs$core$IFn$_invoke$arity$2 = (function (name__41255__auto__,value__41256__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__41255__auto__,value__41256__auto__);
});

sablono.core.email_field41356.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field41356);

/**
 * Creates a file input field.
 */
sablono.core.file_field41360 = (function sablono$core$file_field41360(var_args){
var args41361 = [];
var len__30494__auto___41428 = arguments.length;
var i__30495__auto___41429 = (0);
while(true){
if((i__30495__auto___41429 < len__30494__auto___41428)){
args41361.push((arguments[i__30495__auto___41429]));

var G__41430 = (i__30495__auto___41429 + (1));
i__30495__auto___41429 = G__41430;
continue;
} else {
}
break;
}

var G__41363 = args41361.length;
switch (G__41363) {
case 1:
return sablono.core.file_field41360.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field41360.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41361.length)].join('')));

}
});

sablono.core.file_field41360.cljs$core$IFn$_invoke$arity$1 = (function (name__41255__auto__){
return sablono.core.file_field41360.call(null,name__41255__auto__,null);
});

sablono.core.file_field41360.cljs$core$IFn$_invoke$arity$2 = (function (name__41255__auto__,value__41256__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__41255__auto__,value__41256__auto__);
});

sablono.core.file_field41360.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field41360);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field41364 = (function sablono$core$hidden_field41364(var_args){
var args41365 = [];
var len__30494__auto___41432 = arguments.length;
var i__30495__auto___41433 = (0);
while(true){
if((i__30495__auto___41433 < len__30494__auto___41432)){
args41365.push((arguments[i__30495__auto___41433]));

var G__41434 = (i__30495__auto___41433 + (1));
i__30495__auto___41433 = G__41434;
continue;
} else {
}
break;
}

var G__41367 = args41365.length;
switch (G__41367) {
case 1:
return sablono.core.hidden_field41364.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field41364.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41365.length)].join('')));

}
});

sablono.core.hidden_field41364.cljs$core$IFn$_invoke$arity$1 = (function (name__41255__auto__){
return sablono.core.hidden_field41364.call(null,name__41255__auto__,null);
});

sablono.core.hidden_field41364.cljs$core$IFn$_invoke$arity$2 = (function (name__41255__auto__,value__41256__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__41255__auto__,value__41256__auto__);
});

sablono.core.hidden_field41364.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field41364);

/**
 * Creates a month input field.
 */
sablono.core.month_field41368 = (function sablono$core$month_field41368(var_args){
var args41369 = [];
var len__30494__auto___41436 = arguments.length;
var i__30495__auto___41437 = (0);
while(true){
if((i__30495__auto___41437 < len__30494__auto___41436)){
args41369.push((arguments[i__30495__auto___41437]));

var G__41438 = (i__30495__auto___41437 + (1));
i__30495__auto___41437 = G__41438;
continue;
} else {
}
break;
}

var G__41371 = args41369.length;
switch (G__41371) {
case 1:
return sablono.core.month_field41368.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field41368.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41369.length)].join('')));

}
});

sablono.core.month_field41368.cljs$core$IFn$_invoke$arity$1 = (function (name__41255__auto__){
return sablono.core.month_field41368.call(null,name__41255__auto__,null);
});

sablono.core.month_field41368.cljs$core$IFn$_invoke$arity$2 = (function (name__41255__auto__,value__41256__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__41255__auto__,value__41256__auto__);
});

sablono.core.month_field41368.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field41368);

/**
 * Creates a number input field.
 */
sablono.core.number_field41372 = (function sablono$core$number_field41372(var_args){
var args41373 = [];
var len__30494__auto___41440 = arguments.length;
var i__30495__auto___41441 = (0);
while(true){
if((i__30495__auto___41441 < len__30494__auto___41440)){
args41373.push((arguments[i__30495__auto___41441]));

var G__41442 = (i__30495__auto___41441 + (1));
i__30495__auto___41441 = G__41442;
continue;
} else {
}
break;
}

var G__41375 = args41373.length;
switch (G__41375) {
case 1:
return sablono.core.number_field41372.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field41372.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41373.length)].join('')));

}
});

sablono.core.number_field41372.cljs$core$IFn$_invoke$arity$1 = (function (name__41255__auto__){
return sablono.core.number_field41372.call(null,name__41255__auto__,null);
});

sablono.core.number_field41372.cljs$core$IFn$_invoke$arity$2 = (function (name__41255__auto__,value__41256__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__41255__auto__,value__41256__auto__);
});

sablono.core.number_field41372.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field41372);

/**
 * Creates a password input field.
 */
sablono.core.password_field41376 = (function sablono$core$password_field41376(var_args){
var args41377 = [];
var len__30494__auto___41444 = arguments.length;
var i__30495__auto___41445 = (0);
while(true){
if((i__30495__auto___41445 < len__30494__auto___41444)){
args41377.push((arguments[i__30495__auto___41445]));

var G__41446 = (i__30495__auto___41445 + (1));
i__30495__auto___41445 = G__41446;
continue;
} else {
}
break;
}

var G__41379 = args41377.length;
switch (G__41379) {
case 1:
return sablono.core.password_field41376.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field41376.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41377.length)].join('')));

}
});

sablono.core.password_field41376.cljs$core$IFn$_invoke$arity$1 = (function (name__41255__auto__){
return sablono.core.password_field41376.call(null,name__41255__auto__,null);
});

sablono.core.password_field41376.cljs$core$IFn$_invoke$arity$2 = (function (name__41255__auto__,value__41256__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__41255__auto__,value__41256__auto__);
});

sablono.core.password_field41376.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field41376);

/**
 * Creates a range input field.
 */
sablono.core.range_field41380 = (function sablono$core$range_field41380(var_args){
var args41381 = [];
var len__30494__auto___41448 = arguments.length;
var i__30495__auto___41449 = (0);
while(true){
if((i__30495__auto___41449 < len__30494__auto___41448)){
args41381.push((arguments[i__30495__auto___41449]));

var G__41450 = (i__30495__auto___41449 + (1));
i__30495__auto___41449 = G__41450;
continue;
} else {
}
break;
}

var G__41383 = args41381.length;
switch (G__41383) {
case 1:
return sablono.core.range_field41380.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field41380.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41381.length)].join('')));

}
});

sablono.core.range_field41380.cljs$core$IFn$_invoke$arity$1 = (function (name__41255__auto__){
return sablono.core.range_field41380.call(null,name__41255__auto__,null);
});

sablono.core.range_field41380.cljs$core$IFn$_invoke$arity$2 = (function (name__41255__auto__,value__41256__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__41255__auto__,value__41256__auto__);
});

sablono.core.range_field41380.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field41380);

/**
 * Creates a search input field.
 */
sablono.core.search_field41384 = (function sablono$core$search_field41384(var_args){
var args41385 = [];
var len__30494__auto___41452 = arguments.length;
var i__30495__auto___41453 = (0);
while(true){
if((i__30495__auto___41453 < len__30494__auto___41452)){
args41385.push((arguments[i__30495__auto___41453]));

var G__41454 = (i__30495__auto___41453 + (1));
i__30495__auto___41453 = G__41454;
continue;
} else {
}
break;
}

var G__41387 = args41385.length;
switch (G__41387) {
case 1:
return sablono.core.search_field41384.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field41384.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41385.length)].join('')));

}
});

sablono.core.search_field41384.cljs$core$IFn$_invoke$arity$1 = (function (name__41255__auto__){
return sablono.core.search_field41384.call(null,name__41255__auto__,null);
});

sablono.core.search_field41384.cljs$core$IFn$_invoke$arity$2 = (function (name__41255__auto__,value__41256__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__41255__auto__,value__41256__auto__);
});

sablono.core.search_field41384.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field41384);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field41388 = (function sablono$core$tel_field41388(var_args){
var args41389 = [];
var len__30494__auto___41456 = arguments.length;
var i__30495__auto___41457 = (0);
while(true){
if((i__30495__auto___41457 < len__30494__auto___41456)){
args41389.push((arguments[i__30495__auto___41457]));

var G__41458 = (i__30495__auto___41457 + (1));
i__30495__auto___41457 = G__41458;
continue;
} else {
}
break;
}

var G__41391 = args41389.length;
switch (G__41391) {
case 1:
return sablono.core.tel_field41388.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field41388.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41389.length)].join('')));

}
});

sablono.core.tel_field41388.cljs$core$IFn$_invoke$arity$1 = (function (name__41255__auto__){
return sablono.core.tel_field41388.call(null,name__41255__auto__,null);
});

sablono.core.tel_field41388.cljs$core$IFn$_invoke$arity$2 = (function (name__41255__auto__,value__41256__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__41255__auto__,value__41256__auto__);
});

sablono.core.tel_field41388.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field41388);

/**
 * Creates a text input field.
 */
sablono.core.text_field41392 = (function sablono$core$text_field41392(var_args){
var args41393 = [];
var len__30494__auto___41460 = arguments.length;
var i__30495__auto___41461 = (0);
while(true){
if((i__30495__auto___41461 < len__30494__auto___41460)){
args41393.push((arguments[i__30495__auto___41461]));

var G__41462 = (i__30495__auto___41461 + (1));
i__30495__auto___41461 = G__41462;
continue;
} else {
}
break;
}

var G__41395 = args41393.length;
switch (G__41395) {
case 1:
return sablono.core.text_field41392.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field41392.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41393.length)].join('')));

}
});

sablono.core.text_field41392.cljs$core$IFn$_invoke$arity$1 = (function (name__41255__auto__){
return sablono.core.text_field41392.call(null,name__41255__auto__,null);
});

sablono.core.text_field41392.cljs$core$IFn$_invoke$arity$2 = (function (name__41255__auto__,value__41256__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__41255__auto__,value__41256__auto__);
});

sablono.core.text_field41392.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field41392);

/**
 * Creates a time input field.
 */
sablono.core.time_field41396 = (function sablono$core$time_field41396(var_args){
var args41397 = [];
var len__30494__auto___41464 = arguments.length;
var i__30495__auto___41465 = (0);
while(true){
if((i__30495__auto___41465 < len__30494__auto___41464)){
args41397.push((arguments[i__30495__auto___41465]));

var G__41466 = (i__30495__auto___41465 + (1));
i__30495__auto___41465 = G__41466;
continue;
} else {
}
break;
}

var G__41399 = args41397.length;
switch (G__41399) {
case 1:
return sablono.core.time_field41396.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field41396.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41397.length)].join('')));

}
});

sablono.core.time_field41396.cljs$core$IFn$_invoke$arity$1 = (function (name__41255__auto__){
return sablono.core.time_field41396.call(null,name__41255__auto__,null);
});

sablono.core.time_field41396.cljs$core$IFn$_invoke$arity$2 = (function (name__41255__auto__,value__41256__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__41255__auto__,value__41256__auto__);
});

sablono.core.time_field41396.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field41396);

/**
 * Creates a url input field.
 */
sablono.core.url_field41400 = (function sablono$core$url_field41400(var_args){
var args41401 = [];
var len__30494__auto___41468 = arguments.length;
var i__30495__auto___41469 = (0);
while(true){
if((i__30495__auto___41469 < len__30494__auto___41468)){
args41401.push((arguments[i__30495__auto___41469]));

var G__41470 = (i__30495__auto___41469 + (1));
i__30495__auto___41469 = G__41470;
continue;
} else {
}
break;
}

var G__41403 = args41401.length;
switch (G__41403) {
case 1:
return sablono.core.url_field41400.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field41400.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41401.length)].join('')));

}
});

sablono.core.url_field41400.cljs$core$IFn$_invoke$arity$1 = (function (name__41255__auto__){
return sablono.core.url_field41400.call(null,name__41255__auto__,null);
});

sablono.core.url_field41400.cljs$core$IFn$_invoke$arity$2 = (function (name__41255__auto__,value__41256__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__41255__auto__,value__41256__auto__);
});

sablono.core.url_field41400.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field41400);

/**
 * Creates a week input field.
 */
sablono.core.week_field41404 = (function sablono$core$week_field41404(var_args){
var args41405 = [];
var len__30494__auto___41472 = arguments.length;
var i__30495__auto___41473 = (0);
while(true){
if((i__30495__auto___41473 < len__30494__auto___41472)){
args41405.push((arguments[i__30495__auto___41473]));

var G__41474 = (i__30495__auto___41473 + (1));
i__30495__auto___41473 = G__41474;
continue;
} else {
}
break;
}

var G__41407 = args41405.length;
switch (G__41407) {
case 1:
return sablono.core.week_field41404.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field41404.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41405.length)].join('')));

}
});

sablono.core.week_field41404.cljs$core$IFn$_invoke$arity$1 = (function (name__41255__auto__){
return sablono.core.week_field41404.call(null,name__41255__auto__,null);
});

sablono.core.week_field41404.cljs$core$IFn$_invoke$arity$2 = (function (name__41255__auto__,value__41256__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__41255__auto__,value__41256__auto__);
});

sablono.core.week_field41404.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field41404);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box41476 = (function sablono$core$check_box41476(var_args){
var args41477 = [];
var len__30494__auto___41480 = arguments.length;
var i__30495__auto___41481 = (0);
while(true){
if((i__30495__auto___41481 < len__30494__auto___41480)){
args41477.push((arguments[i__30495__auto___41481]));

var G__41482 = (i__30495__auto___41481 + (1));
i__30495__auto___41481 = G__41482;
continue;
} else {
}
break;
}

var G__41479 = args41477.length;
switch (G__41479) {
case 1:
return sablono.core.check_box41476.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box41476.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box41476.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41477.length)].join('')));

}
});

sablono.core.check_box41476.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box41476.call(null,name,null);
});

sablono.core.check_box41476.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box41476.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box41476.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__29273__auto__ = value;
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box41476.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box41476);
/**
 * Creates a radio button.
 */
sablono.core.radio_button41484 = (function sablono$core$radio_button41484(var_args){
var args41485 = [];
var len__30494__auto___41488 = arguments.length;
var i__30495__auto___41489 = (0);
while(true){
if((i__30495__auto___41489 < len__30494__auto___41488)){
args41485.push((arguments[i__30495__auto___41489]));

var G__41490 = (i__30495__auto___41489 + (1));
i__30495__auto___41489 = G__41490;
continue;
} else {
}
break;
}

var G__41487 = args41485.length;
switch (G__41487) {
case 1:
return sablono.core.radio_button41484.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button41484.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button41484.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41485.length)].join('')));

}
});

sablono.core.radio_button41484.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button41484.call(null,group,null);
});

sablono.core.radio_button41484.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button41484.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button41484.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__29273__auto__ = value;
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button41484.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button41484);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options41492 = (function sablono$core$select_options41492(coll){
var iter__30135__auto__ = (function sablono$core$select_options41492_$_iter__41509(s__41510){
return (new cljs.core.LazySeq(null,(function (){
var s__41510__$1 = s__41510;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__41510__$1);
if(temp__5457__auto__){
var s__41510__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41510__$2)){
var c__30133__auto__ = cljs.core.chunk_first.call(null,s__41510__$2);
var size__30134__auto__ = cljs.core.count.call(null,c__30133__auto__);
var b__41512 = cljs.core.chunk_buffer.call(null,size__30134__auto__);
if((function (){var i__41511 = (0);
while(true){
if((i__41511 < size__30134__auto__)){
var x = cljs.core._nth.call(null,c__30133__auto__,i__41511);
cljs.core.chunk_append.call(null,b__41512,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__41519 = x;
var text = cljs.core.nth.call(null,vec__41519,(0),null);
var val = cljs.core.nth.call(null,vec__41519,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__41519,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options41492.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__41525 = (i__41511 + (1));
i__41511 = G__41525;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41512),sablono$core$select_options41492_$_iter__41509.call(null,cljs.core.chunk_rest.call(null,s__41510__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41512),null);
}
} else {
var x = cljs.core.first.call(null,s__41510__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__41522 = x;
var text = cljs.core.nth.call(null,vec__41522,(0),null);
var val = cljs.core.nth.call(null,vec__41522,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__41522,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options41492.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options41492_$_iter__41509.call(null,cljs.core.rest.call(null,s__41510__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30135__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options41492);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down41526 = (function sablono$core$drop_down41526(var_args){
var args41527 = [];
var len__30494__auto___41530 = arguments.length;
var i__30495__auto___41531 = (0);
while(true){
if((i__30495__auto___41531 < len__30494__auto___41530)){
args41527.push((arguments[i__30495__auto___41531]));

var G__41532 = (i__30495__auto___41531 + (1));
i__30495__auto___41531 = G__41532;
continue;
} else {
}
break;
}

var G__41529 = args41527.length;
switch (G__41529) {
case 2:
return sablono.core.drop_down41526.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down41526.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41527.length)].join('')));

}
});

sablono.core.drop_down41526.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down41526.call(null,name,options,null);
});

sablono.core.drop_down41526.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down41526.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down41526);
/**
 * Creates a text area element.
 */
sablono.core.text_area41534 = (function sablono$core$text_area41534(var_args){
var args41535 = [];
var len__30494__auto___41538 = arguments.length;
var i__30495__auto___41539 = (0);
while(true){
if((i__30495__auto___41539 < len__30494__auto___41538)){
args41535.push((arguments[i__30495__auto___41539]));

var G__41540 = (i__30495__auto___41539 + (1));
i__30495__auto___41539 = G__41540;
continue;
} else {
}
break;
}

var G__41537 = args41535.length;
switch (G__41537) {
case 1:
return sablono.core.text_area41534.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area41534.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41535.length)].join('')));

}
});

sablono.core.text_area41534.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area41534.call(null,name,null);
});

sablono.core.text_area41534.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__29273__auto__ = value;
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area41534.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area41534);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label41542 = (function sablono$core$label41542(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label41542);
/**
 * Creates a submit button.
 */
sablono.core.submit_button41543 = (function sablono$core$submit_button41543(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button41543);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button41544 = (function sablono$core$reset_button41544(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button41544);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to41545 = (function sablono$core$form_to41545(var_args){
var args__30501__auto__ = [];
var len__30494__auto___41552 = arguments.length;
var i__30495__auto___41553 = (0);
while(true){
if((i__30495__auto___41553 < len__30494__auto___41552)){
args__30501__auto__.push((arguments[i__30495__auto___41553]));

var G__41554 = (i__30495__auto___41553 + (1));
i__30495__auto___41553 = G__41554;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((1) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to41545.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30502__auto__);
});

sablono.core.form_to41545.cljs$core$IFn$_invoke$arity$variadic = (function (p__41548,body){
var vec__41549 = p__41548;
var method = cljs.core.nth.call(null,vec__41549,(0),null);
var action = cljs.core.nth.call(null,vec__41549,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to41545.cljs$lang$maxFixedArity = (1);

sablono.core.form_to41545.cljs$lang$applyTo = (function (seq41546){
var G__41547 = cljs.core.first.call(null,seq41546);
var seq41546__$1 = cljs.core.next.call(null,seq41546);
return sablono.core.form_to41545.cljs$core$IFn$_invoke$arity$variadic(G__41547,seq41546__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to41545);

//# sourceMappingURL=core.js.map?rel=1513968572639