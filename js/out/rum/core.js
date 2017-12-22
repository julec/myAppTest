// Compiled by ClojureScript 1.9.521 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__41969_SHARP_,p2__41968_SHARP_){
return p2__41968_SHARP_.call(null,p1__41969_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
return React.createClass(cljs.core.clj__GT_js.call(null,rum.util.filter_vals.call(null,cljs.core.some_QMARK_,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__41971_SHARP_,p2__41970_SHARP_){
return p2__41970_SHARP_.call(null,old_state,p1__41971_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__29273__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__41972_SHARP_){
return p1__41972_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__41977 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__41977,(0),null);
var next_state = cljs.core.nth.call(null,vec__41977,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__41973_SHARP_){
return p1__41973_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.call(null,cljs.core.assoc.call(null,(props[":rum/initial-state"]),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props);
return ({":rum/state": cljs.core.volatile_BANG_.call(null,state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props))));
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__41980__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__41980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41981__i = 0, G__41981__a = new Array(arguments.length -  0);
while (G__41981__i < G__41981__a.length) {G__41981__a[G__41981__i] = arguments[G__41981__i + 0]; ++G__41981__i;}
  args = new cljs.core.IndexedSeq(G__41981__a,0);
} 
return G__41980__delegate.call(this,args);};
G__41980.cljs$lang$maxFixedArity = 0;
G__41980.cljs$lang$applyTo = (function (arglist__41982){
var args = cljs.core.seq(arglist__41982);
return G__41980__delegate(args);
});
G__41980.cljs$core$IFn$_invoke$arity$variadic = G__41980__delegate;
return G__41980;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__41983__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__41983 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41984__i = 0, G__41984__a = new Array(arguments.length -  0);
while (G__41984__i < G__41984__a.length) {G__41984__a[G__41984__i] = arguments[G__41984__i + 0]; ++G__41984__i;}
  args = new cljs.core.IndexedSeq(G__41984__a,0);
} 
return G__41983__delegate.call(this,args);};
G__41983.cljs$lang$maxFixedArity = 0;
G__41983.cljs$lang$applyTo = (function (arglist__41985){
var args = cljs.core.seq(arglist__41985);
return G__41983__delegate(args);
});
G__41983.cljs$core$IFn$_invoke$arity$variadic = G__41983__delegate;
return G__41983;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__41986__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__41986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41987__i = 0, G__41987__a = new Array(arguments.length -  0);
while (G__41987__i < G__41987__a.length) {G__41987__a[G__41987__i] = arguments[G__41987__i + 0]; ++G__41987__i;}
  args = new cljs.core.IndexedSeq(G__41987__a,0);
} 
return G__41986__delegate.call(this,args);};
G__41986.cljs$lang$maxFixedArity = 0;
G__41986.cljs$lang$applyTo = (function (arglist__41988){
var args = cljs.core.seq(arglist__41988);
return G__41986__delegate(args);
});
G__41986.cljs$core$IFn$_invoke$arity$variadic = G__41986__delegate;
return G__41986;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__29273__auto__ = (function (){var and__29261__auto__ = typeof window !== 'undefined';
if(and__29261__auto__){
var or__29273__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
var or__29273__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__29273__auto____$1)){
return or__29273__auto____$1;
} else {
var or__29273__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__29273__auto____$2)){
return or__29273__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__29261__auto__;
}
})();
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return ((function (or__29273__auto__){
return (function (p1__41989_SHARP_){
return setTimeout(p1__41989_SHARP_,(16));
});
;})(or__29273__auto__))
}
})();
rum.core.batch = (function (){var or__29273__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
var or__29273__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__29273__auto____$1)){
return or__29273__auto____$1;
} else {
return ((function (or__29273__auto____$1,or__29273__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__29273__auto____$1,or__29273__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__41996 = cljs.core.seq.call(null,queue);
var chunk__41998 = null;
var count__41999 = (0);
var i__42000 = (0);
while(true){
if((i__42000 < count__41999)){
var comp = cljs.core._nth.call(null,chunk__41998,i__42000);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__42002 = seq__41996;
var G__42003 = chunk__41998;
var G__42004 = count__41999;
var G__42005 = (i__42000 + (1));
seq__41996 = G__42002;
chunk__41998 = G__42003;
count__41999 = G__42004;
i__42000 = G__42005;
continue;
} else {
var G__42006 = seq__41996;
var G__42007 = chunk__41998;
var G__42008 = count__41999;
var G__42009 = (i__42000 + (1));
seq__41996 = G__42006;
chunk__41998 = G__42007;
count__41999 = G__42008;
i__42000 = G__42009;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41996);
if(temp__5457__auto__){
var seq__41996__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41996__$1)){
var c__30184__auto__ = cljs.core.chunk_first.call(null,seq__41996__$1);
var G__42010 = cljs.core.chunk_rest.call(null,seq__41996__$1);
var G__42011 = c__30184__auto__;
var G__42012 = cljs.core.count.call(null,c__30184__auto__);
var G__42013 = (0);
seq__41996 = G__42010;
chunk__41998 = G__42011;
count__41999 = G__42012;
i__42000 = G__42013;
continue;
} else {
var comp = cljs.core.first.call(null,seq__41996__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__42014 = cljs.core.next.call(null,seq__41996__$1);
var G__42015 = null;
var G__42016 = (0);
var G__42017 = (0);
seq__41996 = G__42014;
chunk__41998 = G__42015;
count__41999 = G__42016;
i__42000 = G__42017;
continue;
} else {
var G__42018 = cljs.core.next.call(null,seq__41996__$1);
var G__42019 = null;
var G__42020 = (0);
var G__42021 = (0);
seq__41996 = G__42018;
chunk__41998 = G__42019;
count__41999 = G__42020;
i__42000 = G__42021;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var args42022 = [];
var len__30494__auto___42025 = arguments.length;
var i__30495__auto___42026 = (0);
while(true){
if((i__30495__auto___42026 < len__30494__auto___42025)){
args42022.push((arguments[i__30495__auto___42026]));

var G__42027 = (i__30495__auto___42026 + (1));
i__30495__auto___42026 = G__42027;
continue;
} else {
}
break;
}

var G__42024 = args42022.length;
switch (G__42024) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42022.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_42029 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__42030 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__42030,(0),null);
var next_state = cljs.core.nth.call(null,vec__42030,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__42033_42045 = cljs.core.seq.call(null,old_reactions);
var chunk__42034_42046 = null;
var count__42035_42047 = (0);
var i__42036_42048 = (0);
while(true){
if((i__42036_42048 < count__42035_42047)){
var ref_42049 = cljs.core._nth.call(null,chunk__42034_42046,i__42036_42048);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_42049)){
} else {
cljs.core.remove_watch.call(null,ref_42049,key);
}

var G__42050 = seq__42033_42045;
var G__42051 = chunk__42034_42046;
var G__42052 = count__42035_42047;
var G__42053 = (i__42036_42048 + (1));
seq__42033_42045 = G__42050;
chunk__42034_42046 = G__42051;
count__42035_42047 = G__42052;
i__42036_42048 = G__42053;
continue;
} else {
var temp__5457__auto___42054 = cljs.core.seq.call(null,seq__42033_42045);
if(temp__5457__auto___42054){
var seq__42033_42055__$1 = temp__5457__auto___42054;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42033_42055__$1)){
var c__30184__auto___42056 = cljs.core.chunk_first.call(null,seq__42033_42055__$1);
var G__42057 = cljs.core.chunk_rest.call(null,seq__42033_42055__$1);
var G__42058 = c__30184__auto___42056;
var G__42059 = cljs.core.count.call(null,c__30184__auto___42056);
var G__42060 = (0);
seq__42033_42045 = G__42057;
chunk__42034_42046 = G__42058;
count__42035_42047 = G__42059;
i__42036_42048 = G__42060;
continue;
} else {
var ref_42061 = cljs.core.first.call(null,seq__42033_42055__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_42061)){
} else {
cljs.core.remove_watch.call(null,ref_42061,key);
}

var G__42062 = cljs.core.next.call(null,seq__42033_42055__$1);
var G__42063 = null;
var G__42064 = (0);
var G__42065 = (0);
seq__42033_42045 = G__42062;
chunk__42034_42046 = G__42063;
count__42035_42047 = G__42064;
i__42036_42048 = G__42065;
continue;
}
} else {
}
}
break;
}

var seq__42037_42066 = cljs.core.seq.call(null,new_reactions);
var chunk__42038_42067 = null;
var count__42039_42068 = (0);
var i__42040_42069 = (0);
while(true){
if((i__42040_42069 < count__42039_42068)){
var ref_42070 = cljs.core._nth.call(null,chunk__42038_42067,i__42040_42069);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_42070)){
} else {
cljs.core.add_watch.call(null,ref_42070,key,((function (seq__42037_42066,chunk__42038_42067,count__42039_42068,i__42040_42069,ref_42070,comp,old_reactions,vec__42030,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42029){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__42037_42066,chunk__42038_42067,count__42039_42068,i__42040_42069,ref_42070,comp,old_reactions,vec__42030,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42029))
);
}

var G__42071 = seq__42037_42066;
var G__42072 = chunk__42038_42067;
var G__42073 = count__42039_42068;
var G__42074 = (i__42040_42069 + (1));
seq__42037_42066 = G__42071;
chunk__42038_42067 = G__42072;
count__42039_42068 = G__42073;
i__42040_42069 = G__42074;
continue;
} else {
var temp__5457__auto___42075 = cljs.core.seq.call(null,seq__42037_42066);
if(temp__5457__auto___42075){
var seq__42037_42076__$1 = temp__5457__auto___42075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42037_42076__$1)){
var c__30184__auto___42077 = cljs.core.chunk_first.call(null,seq__42037_42076__$1);
var G__42078 = cljs.core.chunk_rest.call(null,seq__42037_42076__$1);
var G__42079 = c__30184__auto___42077;
var G__42080 = cljs.core.count.call(null,c__30184__auto___42077);
var G__42081 = (0);
seq__42037_42066 = G__42078;
chunk__42038_42067 = G__42079;
count__42039_42068 = G__42080;
i__42040_42069 = G__42081;
continue;
} else {
var ref_42082 = cljs.core.first.call(null,seq__42037_42076__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_42082)){
} else {
cljs.core.add_watch.call(null,ref_42082,key,((function (seq__42037_42066,chunk__42038_42067,count__42039_42068,i__42040_42069,ref_42082,seq__42037_42076__$1,temp__5457__auto___42075,comp,old_reactions,vec__42030,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42029){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__42037_42066,chunk__42038_42067,count__42039_42068,i__42040_42069,ref_42082,seq__42037_42076__$1,temp__5457__auto___42075,comp,old_reactions,vec__42030,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42029))
);
}

var G__42083 = cljs.core.next.call(null,seq__42037_42076__$1);
var G__42084 = null;
var G__42085 = (0);
var G__42086 = (0);
seq__42037_42066 = G__42083;
chunk__42038_42067 = G__42084;
count__42039_42068 = G__42085;
i__42040_42069 = G__42086;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_42029;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_42087 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__42041_42088 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__42042_42089 = null;
var count__42043_42090 = (0);
var i__42044_42091 = (0);
while(true){
if((i__42044_42091 < count__42043_42090)){
var ref_42092 = cljs.core._nth.call(null,chunk__42042_42089,i__42044_42091);
cljs.core.remove_watch.call(null,ref_42092,key_42087);

var G__42093 = seq__42041_42088;
var G__42094 = chunk__42042_42089;
var G__42095 = count__42043_42090;
var G__42096 = (i__42044_42091 + (1));
seq__42041_42088 = G__42093;
chunk__42042_42089 = G__42094;
count__42043_42090 = G__42095;
i__42044_42091 = G__42096;
continue;
} else {
var temp__5457__auto___42097 = cljs.core.seq.call(null,seq__42041_42088);
if(temp__5457__auto___42097){
var seq__42041_42098__$1 = temp__5457__auto___42097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42041_42098__$1)){
var c__30184__auto___42099 = cljs.core.chunk_first.call(null,seq__42041_42098__$1);
var G__42100 = cljs.core.chunk_rest.call(null,seq__42041_42098__$1);
var G__42101 = c__30184__auto___42099;
var G__42102 = cljs.core.count.call(null,c__30184__auto___42099);
var G__42103 = (0);
seq__42041_42088 = G__42100;
chunk__42042_42089 = G__42101;
count__42043_42090 = G__42102;
i__42044_42091 = G__42103;
continue;
} else {
var ref_42104 = cljs.core.first.call(null,seq__42041_42098__$1);
cljs.core.remove_watch.call(null,ref_42104,key_42087);

var G__42105 = cljs.core.next.call(null,seq__42041_42098__$1);
var G__42106 = null;
var G__42107 = (0);
var G__42108 = (0);
seq__42041_42088 = G__42105;
chunk__42042_42089 = G__42106;
count__42043_42090 = G__42107;
i__42044_42091 = G__42108;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rum.core/react is only supported in conjunction with rum.core/reactive"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("*reactions*")].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__30501__auto__ = [];
var len__30494__auto___42115 = arguments.length;
var i__30495__auto___42116 = (0);
while(true){
if((i__30495__auto___42116 < len__30494__auto___42115)){
args__30501__auto__.push((arguments[i__30495__auto___42116]));

var G__42117 = (i__30495__auto___42116 + (1));
i__30495__auto___42116 = G__42117;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((2) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30502__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__42112){
var map__42113 = p__42112;
var map__42113__$1 = ((((!((map__42113 == null)))?((((map__42113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42113):map__42113);
var options = map__42113__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq42109){
var G__42110 = cljs.core.first.call(null,seq42109);
var seq42109__$1 = cljs.core.next.call(null,seq42109);
var G__42111 = cljs.core.first.call(null,seq42109__$1);
var seq42109__$2 = cljs.core.next.call(null,seq42109__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__42110,G__42111,seq42109__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__30501__auto__ = [];
var len__30494__auto___42121 = arguments.length;
var i__30495__auto___42122 = (0);
while(true){
if((i__30495__auto___42122 < len__30494__auto___42121)){
args__30501__auto__.push((arguments[i__30495__auto___42122]));

var G__42123 = (i__30495__auto___42122 + (1));
i__30495__auto___42122 = G__42123;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((2) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30502__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq42118){
var G__42119 = cljs.core.first.call(null,seq42118);
var seq42118__$1 = cljs.core.next.call(null,seq42118);
var G__42120 = cljs.core.first.call(null,seq42118__$1);
var seq42118__$2 = cljs.core.next.call(null,seq42118__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__42119,G__42120,seq42118__$2);
});


//# sourceMappingURL=core.js.map?rel=1513968573255