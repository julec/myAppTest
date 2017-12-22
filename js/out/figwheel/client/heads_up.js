// Compiled by ClojureScript 1.9.521 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__30501__auto__ = [];
var len__30494__auto___39456 = arguments.length;
var i__30495__auto___39457 = (0);
while(true){
if((i__30495__auto___39457 < len__30494__auto___39456)){
args__30501__auto__.push((arguments[i__30495__auto___39457]));

var G__39458 = (i__30495__auto___39457 + (1));
i__30495__auto___39457 = G__39458;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((2) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30502__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__39448_39459 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__39449_39460 = null;
var count__39450_39461 = (0);
var i__39451_39462 = (0);
while(true){
if((i__39451_39462 < count__39450_39461)){
var k_39463 = cljs.core._nth.call(null,chunk__39449_39460,i__39451_39462);
e.setAttribute(cljs.core.name.call(null,k_39463),cljs.core.get.call(null,attrs,k_39463));

var G__39464 = seq__39448_39459;
var G__39465 = chunk__39449_39460;
var G__39466 = count__39450_39461;
var G__39467 = (i__39451_39462 + (1));
seq__39448_39459 = G__39464;
chunk__39449_39460 = G__39465;
count__39450_39461 = G__39466;
i__39451_39462 = G__39467;
continue;
} else {
var temp__5457__auto___39468 = cljs.core.seq.call(null,seq__39448_39459);
if(temp__5457__auto___39468){
var seq__39448_39469__$1 = temp__5457__auto___39468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39448_39469__$1)){
var c__30184__auto___39470 = cljs.core.chunk_first.call(null,seq__39448_39469__$1);
var G__39471 = cljs.core.chunk_rest.call(null,seq__39448_39469__$1);
var G__39472 = c__30184__auto___39470;
var G__39473 = cljs.core.count.call(null,c__30184__auto___39470);
var G__39474 = (0);
seq__39448_39459 = G__39471;
chunk__39449_39460 = G__39472;
count__39450_39461 = G__39473;
i__39451_39462 = G__39474;
continue;
} else {
var k_39475 = cljs.core.first.call(null,seq__39448_39469__$1);
e.setAttribute(cljs.core.name.call(null,k_39475),cljs.core.get.call(null,attrs,k_39475));

var G__39476 = cljs.core.next.call(null,seq__39448_39469__$1);
var G__39477 = null;
var G__39478 = (0);
var G__39479 = (0);
seq__39448_39459 = G__39476;
chunk__39449_39460 = G__39477;
count__39450_39461 = G__39478;
i__39451_39462 = G__39479;
continue;
}
} else {
}
}
break;
}

var seq__39452_39480 = cljs.core.seq.call(null,children);
var chunk__39453_39481 = null;
var count__39454_39482 = (0);
var i__39455_39483 = (0);
while(true){
if((i__39455_39483 < count__39454_39482)){
var ch_39484 = cljs.core._nth.call(null,chunk__39453_39481,i__39455_39483);
e.appendChild(ch_39484);

var G__39485 = seq__39452_39480;
var G__39486 = chunk__39453_39481;
var G__39487 = count__39454_39482;
var G__39488 = (i__39455_39483 + (1));
seq__39452_39480 = G__39485;
chunk__39453_39481 = G__39486;
count__39454_39482 = G__39487;
i__39455_39483 = G__39488;
continue;
} else {
var temp__5457__auto___39489 = cljs.core.seq.call(null,seq__39452_39480);
if(temp__5457__auto___39489){
var seq__39452_39490__$1 = temp__5457__auto___39489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39452_39490__$1)){
var c__30184__auto___39491 = cljs.core.chunk_first.call(null,seq__39452_39490__$1);
var G__39492 = cljs.core.chunk_rest.call(null,seq__39452_39490__$1);
var G__39493 = c__30184__auto___39491;
var G__39494 = cljs.core.count.call(null,c__30184__auto___39491);
var G__39495 = (0);
seq__39452_39480 = G__39492;
chunk__39453_39481 = G__39493;
count__39454_39482 = G__39494;
i__39455_39483 = G__39495;
continue;
} else {
var ch_39496 = cljs.core.first.call(null,seq__39452_39490__$1);
e.appendChild(ch_39496);

var G__39497 = cljs.core.next.call(null,seq__39452_39490__$1);
var G__39498 = null;
var G__39499 = (0);
var G__39500 = (0);
seq__39452_39480 = G__39497;
chunk__39453_39481 = G__39498;
count__39454_39482 = G__39499;
i__39455_39483 = G__39500;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq39445){
var G__39446 = cljs.core.first.call(null,seq39445);
var seq39445__$1 = cljs.core.next.call(null,seq39445);
var G__39447 = cljs.core.first.call(null,seq39445__$1);
var seq39445__$2 = cljs.core.next.call(null,seq39445__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__39446,G__39447,seq39445__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__30304__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__30305__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__30306__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__30307__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__30308__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__30304__auto__,prefer_table__30305__auto__,method_cache__30306__auto__,cached_hierarchy__30307__auto__,hierarchy__30308__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__30304__auto__,prefer_table__30305__auto__,method_cache__30306__auto__,cached_hierarchy__30307__auto__,hierarchy__30308__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__30308__auto__,method_table__30304__auto__,prefer_table__30305__auto__,method_cache__30306__auto__,cached_hierarchy__30307__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_39501 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: left;")].join('')], null));
el_39501.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_39501.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_39501.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_39501);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__39502,st_map){
var map__39509 = p__39502;
var map__39509__$1 = ((((!((map__39509 == null)))?((((map__39509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39509):map__39509);
var container_el = cljs.core.get.call(null,map__39509__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__39509,map__39509__$1,container_el){
return (function (p__39511){
var vec__39512 = p__39511;
var k = cljs.core.nth.call(null,vec__39512,(0),null);
var v = cljs.core.nth.call(null,vec__39512,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
});})(map__39509,map__39509__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__39515,dom_str){
var map__39518 = p__39515;
var map__39518__$1 = ((((!((map__39518 == null)))?((((map__39518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39518):map__39518);
var c = map__39518__$1;
var content_area_el = cljs.core.get.call(null,map__39518__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__39520){
var map__39523 = p__39520;
var map__39523__$1 = ((((!((map__39523 == null)))?((((map__39523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39523):map__39523);
var content_area_el = cljs.core.get.call(null,map__39523__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__32008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto__){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto__){
return (function (state_39566){
var state_val_39567 = (state_39566[(1)]);
if((state_val_39567 === (1))){
var inst_39551 = (state_39566[(7)]);
var inst_39551__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_39552 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_39553 = ["10px","10px","100%","68px","1.0"];
var inst_39554 = cljs.core.PersistentHashMap.fromArrays(inst_39552,inst_39553);
var inst_39555 = cljs.core.merge.call(null,inst_39554,style);
var inst_39556 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39551__$1,inst_39555);
var inst_39557 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_39551__$1,msg);
var inst_39558 = cljs.core.async.timeout.call(null,(300));
var state_39566__$1 = (function (){var statearr_39568 = state_39566;
(statearr_39568[(7)] = inst_39551__$1);

(statearr_39568[(8)] = inst_39556);

(statearr_39568[(9)] = inst_39557);

return statearr_39568;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39566__$1,(2),inst_39558);
} else {
if((state_val_39567 === (2))){
var inst_39551 = (state_39566[(7)]);
var inst_39560 = (state_39566[(2)]);
var inst_39561 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_39562 = ["auto"];
var inst_39563 = cljs.core.PersistentHashMap.fromArrays(inst_39561,inst_39562);
var inst_39564 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39551,inst_39563);
var state_39566__$1 = (function (){var statearr_39569 = state_39566;
(statearr_39569[(10)] = inst_39560);

return statearr_39569;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39566__$1,inst_39564);
} else {
return null;
}
}
});})(c__32008__auto__))
;
return ((function (switch__31894__auto__,c__32008__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__31895__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__31895__auto____0 = (function (){
var statearr_39573 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39573[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__31895__auto__);

(statearr_39573[(1)] = (1));

return statearr_39573;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__31895__auto____1 = (function (state_39566){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_39566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e39574){if((e39574 instanceof Object)){
var ex__31898__auto__ = e39574;
var statearr_39575_39577 = state_39566;
(statearr_39575_39577[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39578 = state_39566;
state_39566 = G__39578;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__31895__auto__ = function(state_39566){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__31895__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__31895__auto____1.call(this,state_39566);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__31895__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__31895__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto__))
})();
var state__32010__auto__ = (function (){var statearr_39576 = f__32009__auto__.call(null);
(statearr_39576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto__);

return statearr_39576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto__))
);

return c__32008__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args39579 = [];
var len__30494__auto___39582 = arguments.length;
var i__30495__auto___39583 = (0);
while(true){
if((i__30495__auto___39583 < len__30494__auto___39582)){
args39579.push((arguments[i__30495__auto___39583]));

var G__39584 = (i__30495__auto___39583 + (1));
i__30495__auto___39583 = G__39584;
continue;
} else {
}
break;
}

var G__39581 = args39579.length;
switch (G__39581) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39579.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" <span style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("display: inline-block;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-column=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__39586){
var map__39589 = p__39586;
var map__39589__$1 = ((((!((map__39589 == null)))?((((map__39589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39589):map__39589);
var file = cljs.core.get.call(null,map__39589__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39589__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39589__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__29273__auto__ = file;
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='color: #757575;'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  </span>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__39591){
var vec__39598 = p__39591;
var typ = cljs.core.nth.call(null,vec__39598,(0),null);
var line_number = cljs.core.nth.call(null,vec__39598,(1),null);
var line = cljs.core.nth.call(null,vec__39598,(2),null);
var pred__39601 = cljs.core._EQ_;
var expr__39602 = typ;
if(cljs.core.truth_(pred__39601.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__39602))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__39601.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__39602))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__39601.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__39602))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__39604_SHARP_){
return cljs.core.update_in.call(null,p1__39604_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__39605_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__39605_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__39608){
var map__39611 = p__39608;
var map__39611__$1 = ((((!((map__39611 == null)))?((((map__39611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39611.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39611):map__39611);
var exception = map__39611__$1;
var message = cljs.core.get.call(null,map__39611__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__39611__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__39611__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__39611__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__39611__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__39611__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__39611__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__39611__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__39611__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__39611__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__39611__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__29261__auto__ = file;
if(cljs.core.truth_(and__29261__auto__)){
return line;
} else {
return and__29261__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__39611,map__39611__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__39606_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39606_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__39611,map__39611__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__39611,map__39611__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__39607_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__39607_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__39607_SHARP_)))].join('');
});})(last_message,map__39611,map__39611__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__39613){
var map__39616 = p__39613;
var map__39616__$1 = ((((!((map__39616 == null)))?((((map__39616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39616):map__39616);
var file = cljs.core.get.call(null,map__39616__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39616__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39616__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__39621 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__39621__$1 = ((((!((map__39621 == null)))?((((map__39621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39621):map__39621);
var head = cljs.core.get.call(null,map__39621__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__39621__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__39621__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__39621__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__39621__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39621__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39621__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__39624){
var map__39627 = p__39624;
var map__39627__$1 = ((((!((map__39627 == null)))?((((map__39627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39627):map__39627);
var warning_data = map__39627__$1;
var file = cljs.core.get.call(null,map__39627__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39627__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39627__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__39627__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__39627__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__29261__auto__ = file;
if(cljs.core.truth_(and__29261__auto__)){
return line;
} else {
return and__29261__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__39627,map__39627__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__39623_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39623_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__39627,map__39627__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__39631 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__39631__$1 = ((((!((map__39631 == null)))?((((map__39631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39631.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39631):map__39631);
var head = cljs.core.get.call(null,map__39631__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__39631__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__39631__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__39631__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__39631__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39631__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39631__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__39633){
var map__39637 = p__39633;
var map__39637__$1 = ((((!((map__39637 == null)))?((((map__39637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39637):map__39637);
var warning_data = map__39637__$1;
var message = cljs.core.get.call(null,map__39637__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__39637__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39637__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39637__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39639 = message;
var G__39639__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39639),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39639);
var G__39639__$2 = (cljs.core.truth_((function (){var and__29261__auto__ = line;
if(cljs.core.truth_(and__29261__auto__)){
return column;
} else {
return and__29261__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39639__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__39639__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39639__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__39639__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__39640){
var map__39645 = p__39640;
var map__39645__$1 = ((((!((map__39645 == null)))?((((map__39645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39645.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39645):map__39645);
var warning_data = map__39645__$1;
var message = cljs.core.get.call(null,map__39645__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__39645__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39645__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39645__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__39647 = figwheel.client.heads_up.ensure_container.call(null);
var map__39647__$1 = ((((!((map__39647 == null)))?((((map__39647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39647):map__39647);
var content_area_el = cljs.core.get.call(null,map__39647__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__5457__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5457__auto__)){
var last_child = temp__5457__auto__;
var temp__5455__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5455__auto__)){
var message_count = temp__5455__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__32008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto__){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto__){
return (function (state_39695){
var state_val_39696 = (state_39695[(1)]);
if((state_val_39696 === (1))){
var inst_39678 = (state_39695[(7)]);
var inst_39678__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_39679 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_39680 = ["0.0"];
var inst_39681 = cljs.core.PersistentHashMap.fromArrays(inst_39679,inst_39680);
var inst_39682 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39678__$1,inst_39681);
var inst_39683 = cljs.core.async.timeout.call(null,(300));
var state_39695__$1 = (function (){var statearr_39697 = state_39695;
(statearr_39697[(7)] = inst_39678__$1);

(statearr_39697[(8)] = inst_39682);

return statearr_39697;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39695__$1,(2),inst_39683);
} else {
if((state_val_39696 === (2))){
var inst_39678 = (state_39695[(7)]);
var inst_39685 = (state_39695[(2)]);
var inst_39686 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_39687 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_39688 = cljs.core.PersistentHashMap.fromArrays(inst_39686,inst_39687);
var inst_39689 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39678,inst_39688);
var inst_39690 = cljs.core.async.timeout.call(null,(200));
var state_39695__$1 = (function (){var statearr_39698 = state_39695;
(statearr_39698[(9)] = inst_39685);

(statearr_39698[(10)] = inst_39689);

return statearr_39698;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39695__$1,(3),inst_39690);
} else {
if((state_val_39696 === (3))){
var inst_39678 = (state_39695[(7)]);
var inst_39692 = (state_39695[(2)]);
var inst_39693 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_39678,"");
var state_39695__$1 = (function (){var statearr_39699 = state_39695;
(statearr_39699[(11)] = inst_39692);

return statearr_39699;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39695__$1,inst_39693);
} else {
return null;
}
}
}
});})(c__32008__auto__))
;
return ((function (switch__31894__auto__,c__32008__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__31895__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__31895__auto____0 = (function (){
var statearr_39703 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39703[(0)] = figwheel$client$heads_up$clear_$_state_machine__31895__auto__);

(statearr_39703[(1)] = (1));

return statearr_39703;
});
var figwheel$client$heads_up$clear_$_state_machine__31895__auto____1 = (function (state_39695){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_39695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e39704){if((e39704 instanceof Object)){
var ex__31898__auto__ = e39704;
var statearr_39705_39707 = state_39695;
(statearr_39705_39707[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39708 = state_39695;
state_39695 = G__39708;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__31895__auto__ = function(state_39695){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__31895__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__31895__auto____1.call(this,state_39695);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__31895__auto____0;
figwheel$client$heads_up$clear_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__31895__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto__))
})();
var state__32010__auto__ = (function (){var statearr_39706 = f__32009__auto__.call(null);
(statearr_39706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto__);

return statearr_39706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto__))
);

return c__32008__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__32008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto__){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto__){
return (function (state_39740){
var state_val_39741 = (state_39740[(1)]);
if((state_val_39741 === (1))){
var inst_39730 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_39740__$1 = state_39740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39740__$1,(2),inst_39730);
} else {
if((state_val_39741 === (2))){
var inst_39732 = (state_39740[(2)]);
var inst_39733 = cljs.core.async.timeout.call(null,(400));
var state_39740__$1 = (function (){var statearr_39742 = state_39740;
(statearr_39742[(7)] = inst_39732);

return statearr_39742;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39740__$1,(3),inst_39733);
} else {
if((state_val_39741 === (3))){
var inst_39735 = (state_39740[(2)]);
var inst_39736 = figwheel.client.heads_up.clear.call(null);
var state_39740__$1 = (function (){var statearr_39743 = state_39740;
(statearr_39743[(8)] = inst_39735);

return statearr_39743;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39740__$1,(4),inst_39736);
} else {
if((state_val_39741 === (4))){
var inst_39738 = (state_39740[(2)]);
var state_39740__$1 = state_39740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39740__$1,inst_39738);
} else {
return null;
}
}
}
}
});})(c__32008__auto__))
;
return ((function (switch__31894__auto__,c__32008__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__31895__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__31895__auto____0 = (function (){
var statearr_39747 = [null,null,null,null,null,null,null,null,null];
(statearr_39747[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__31895__auto__);

(statearr_39747[(1)] = (1));

return statearr_39747;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__31895__auto____1 = (function (state_39740){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_39740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e39748){if((e39748 instanceof Object)){
var ex__31898__auto__ = e39748;
var statearr_39749_39751 = state_39740;
(statearr_39749_39751[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39752 = state_39740;
state_39740 = G__39752;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__31895__auto__ = function(state_39740){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__31895__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__31895__auto____1.call(this,state_39740);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__31895__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__31895__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto__))
})();
var state__32010__auto__ = (function (){var statearr_39750 = f__32009__auto__.call(null);
(statearr_39750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto__);

return statearr_39750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto__))
);

return c__32008__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5457__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: absolute;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 9000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 100vh;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("top: 0px; left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #FFF5DB;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin: auto;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-top: 10px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: center; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 2px 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1513965925974