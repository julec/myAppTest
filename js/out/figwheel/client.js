// Compiled by ClojureScript 1.9.521 {}
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
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#js "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e39755){if((e39755 instanceof Error)){
var e = e39755;
return "Error: Unable to stringify";
} else {
throw e39755;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args39757 = [];
var len__30494__auto___39760 = arguments.length;
var i__30495__auto___39761 = (0);
while(true){
if((i__30495__auto___39761 < len__30494__auto___39760)){
args39757.push((arguments[i__30495__auto___39761]));

var G__39762 = (i__30495__auto___39761 + (1));
i__30495__auto___39761 = G__39762;
continue;
} else {
}
break;
}

var G__39759 = args39757.length;
switch (G__39759) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39757.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39756_SHARP_){
if(typeof p1__39756_SHARP_ === 'string'){
return p1__39756_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__39756_SHARP_);
}
}),args)], null)], null));

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
var args__30501__auto__ = [];
var len__30494__auto___39765 = arguments.length;
var i__30495__auto___39766 = (0);
while(true){
if((i__30495__auto___39766 < len__30494__auto___39765)){
args__30501__auto__.push((arguments[i__30495__auto___39766]));

var G__39767 = (i__30495__auto___39766 + (1));
i__30495__auto___39766 = G__39767;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39764){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39764));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__30501__auto__ = [];
var len__30494__auto___39769 = arguments.length;
var i__30495__auto___39770 = (0);
while(true){
if((i__30495__auto___39770 < len__30494__auto___39769)){
args__30501__auto__.push((arguments[i__30495__auto___39770]));

var G__39771 = (i__30495__auto___39770 + (1));
i__30495__auto___39770 = G__39771;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39768){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39768));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39772){
var map__39775 = p__39772;
var map__39775__$1 = ((((!((map__39775 == null)))?((((map__39775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39775):map__39775);
var message = cljs.core.get.call(null,map__39775__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39775__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__29273__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__29261__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__29261__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__29261__auto__;
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
var c__32008__auto___39937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto___39937,ch){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto___39937,ch){
return (function (state_39906){
var state_val_39907 = (state_39906[(1)]);
if((state_val_39907 === (7))){
var inst_39902 = (state_39906[(2)]);
var state_39906__$1 = state_39906;
var statearr_39908_39938 = state_39906__$1;
(statearr_39908_39938[(2)] = inst_39902);

(statearr_39908_39938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (1))){
var state_39906__$1 = state_39906;
var statearr_39909_39939 = state_39906__$1;
(statearr_39909_39939[(2)] = null);

(statearr_39909_39939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (4))){
var inst_39859 = (state_39906[(7)]);
var inst_39859__$1 = (state_39906[(2)]);
var state_39906__$1 = (function (){var statearr_39910 = state_39906;
(statearr_39910[(7)] = inst_39859__$1);

return statearr_39910;
})();
if(cljs.core.truth_(inst_39859__$1)){
var statearr_39911_39940 = state_39906__$1;
(statearr_39911_39940[(1)] = (5));

} else {
var statearr_39912_39941 = state_39906__$1;
(statearr_39912_39941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (15))){
var inst_39866 = (state_39906[(8)]);
var inst_39881 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39866);
var inst_39882 = cljs.core.first.call(null,inst_39881);
var inst_39883 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39882);
var inst_39884 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39883)].join('');
var inst_39885 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39884);
var state_39906__$1 = state_39906;
var statearr_39913_39942 = state_39906__$1;
(statearr_39913_39942[(2)] = inst_39885);

(statearr_39913_39942[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (13))){
var inst_39890 = (state_39906[(2)]);
var state_39906__$1 = state_39906;
var statearr_39914_39943 = state_39906__$1;
(statearr_39914_39943[(2)] = inst_39890);

(statearr_39914_39943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (6))){
var state_39906__$1 = state_39906;
var statearr_39915_39944 = state_39906__$1;
(statearr_39915_39944[(2)] = null);

(statearr_39915_39944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (17))){
var inst_39888 = (state_39906[(2)]);
var state_39906__$1 = state_39906;
var statearr_39916_39945 = state_39906__$1;
(statearr_39916_39945[(2)] = inst_39888);

(statearr_39916_39945[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (3))){
var inst_39904 = (state_39906[(2)]);
var state_39906__$1 = state_39906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39906__$1,inst_39904);
} else {
if((state_val_39907 === (12))){
var inst_39865 = (state_39906[(9)]);
var inst_39879 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39865,opts);
var state_39906__$1 = state_39906;
if(cljs.core.truth_(inst_39879)){
var statearr_39917_39946 = state_39906__$1;
(statearr_39917_39946[(1)] = (15));

} else {
var statearr_39918_39947 = state_39906__$1;
(statearr_39918_39947[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (2))){
var state_39906__$1 = state_39906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39906__$1,(4),ch);
} else {
if((state_val_39907 === (11))){
var inst_39866 = (state_39906[(8)]);
var inst_39871 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39872 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39866);
var inst_39873 = cljs.core.async.timeout.call(null,(1000));
var inst_39874 = [inst_39872,inst_39873];
var inst_39875 = (new cljs.core.PersistentVector(null,2,(5),inst_39871,inst_39874,null));
var state_39906__$1 = state_39906;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39906__$1,(14),inst_39875);
} else {
if((state_val_39907 === (9))){
var inst_39866 = (state_39906[(8)]);
var inst_39892 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39893 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39866);
var inst_39894 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39893);
var inst_39895 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39894)].join('');
var inst_39896 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39895);
var state_39906__$1 = (function (){var statearr_39919 = state_39906;
(statearr_39919[(10)] = inst_39892);

return statearr_39919;
})();
var statearr_39920_39948 = state_39906__$1;
(statearr_39920_39948[(2)] = inst_39896);

(statearr_39920_39948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (5))){
var inst_39859 = (state_39906[(7)]);
var inst_39861 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39862 = (new cljs.core.PersistentArrayMap(null,2,inst_39861,null));
var inst_39863 = (new cljs.core.PersistentHashSet(null,inst_39862,null));
var inst_39864 = figwheel.client.focus_msgs.call(null,inst_39863,inst_39859);
var inst_39865 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39864);
var inst_39866 = cljs.core.first.call(null,inst_39864);
var inst_39867 = figwheel.client.autoload_QMARK_.call(null);
var state_39906__$1 = (function (){var statearr_39921 = state_39906;
(statearr_39921[(9)] = inst_39865);

(statearr_39921[(8)] = inst_39866);

return statearr_39921;
})();
if(cljs.core.truth_(inst_39867)){
var statearr_39922_39949 = state_39906__$1;
(statearr_39922_39949[(1)] = (8));

} else {
var statearr_39923_39950 = state_39906__$1;
(statearr_39923_39950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (14))){
var inst_39877 = (state_39906[(2)]);
var state_39906__$1 = state_39906;
var statearr_39924_39951 = state_39906__$1;
(statearr_39924_39951[(2)] = inst_39877);

(statearr_39924_39951[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (16))){
var state_39906__$1 = state_39906;
var statearr_39925_39952 = state_39906__$1;
(statearr_39925_39952[(2)] = null);

(statearr_39925_39952[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (10))){
var inst_39898 = (state_39906[(2)]);
var state_39906__$1 = (function (){var statearr_39926 = state_39906;
(statearr_39926[(11)] = inst_39898);

return statearr_39926;
})();
var statearr_39927_39953 = state_39906__$1;
(statearr_39927_39953[(2)] = null);

(statearr_39927_39953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (8))){
var inst_39865 = (state_39906[(9)]);
var inst_39869 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39865,opts);
var state_39906__$1 = state_39906;
if(cljs.core.truth_(inst_39869)){
var statearr_39928_39954 = state_39906__$1;
(statearr_39928_39954[(1)] = (11));

} else {
var statearr_39929_39955 = state_39906__$1;
(statearr_39929_39955[(1)] = (12));

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
});})(c__32008__auto___39937,ch))
;
return ((function (switch__31894__auto__,c__32008__auto___39937,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31895__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31895__auto____0 = (function (){
var statearr_39933 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39933[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31895__auto__);

(statearr_39933[(1)] = (1));

return statearr_39933;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31895__auto____1 = (function (state_39906){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_39906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e39934){if((e39934 instanceof Object)){
var ex__31898__auto__ = e39934;
var statearr_39935_39956 = state_39906;
(statearr_39935_39956[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39957 = state_39906;
state_39906 = G__39957;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31895__auto__ = function(state_39906){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31895__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31895__auto____1.call(this,state_39906);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31895__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31895__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto___39937,ch))
})();
var state__32010__auto__ = (function (){var statearr_39936 = f__32009__auto__.call(null);
(statearr_39936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___39937);

return statearr_39936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto___39937,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39958_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39958_SHARP_));
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
var base_path_39961 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39961){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39960){if((e39960 instanceof Error)){
var e = e39960;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39961], null));
} else {
var e = e39960;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39961))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39962){
var map__39971 = p__39962;
var map__39971__$1 = ((((!((map__39971 == null)))?((((map__39971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39971):map__39971);
var opts = map__39971__$1;
var build_id = cljs.core.get.call(null,map__39971__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39971,map__39971__$1,opts,build_id){
return (function (p__39973){
var vec__39974 = p__39973;
var seq__39975 = cljs.core.seq.call(null,vec__39974);
var first__39976 = cljs.core.first.call(null,seq__39975);
var seq__39975__$1 = cljs.core.next.call(null,seq__39975);
var map__39977 = first__39976;
var map__39977__$1 = ((((!((map__39977 == null)))?((((map__39977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39977.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39977):map__39977);
var msg = map__39977__$1;
var msg_name = cljs.core.get.call(null,map__39977__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39975__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39974,seq__39975,first__39976,seq__39975__$1,map__39977,map__39977__$1,msg,msg_name,_,map__39971,map__39971__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39974,seq__39975,first__39976,seq__39975__$1,map__39977,map__39977__$1,msg,msg_name,_,map__39971,map__39971__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39971,map__39971__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39985){
var vec__39986 = p__39985;
var seq__39987 = cljs.core.seq.call(null,vec__39986);
var first__39988 = cljs.core.first.call(null,seq__39987);
var seq__39987__$1 = cljs.core.next.call(null,seq__39987);
var map__39989 = first__39988;
var map__39989__$1 = ((((!((map__39989 == null)))?((((map__39989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39989.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39989):map__39989);
var msg = map__39989__$1;
var msg_name = cljs.core.get.call(null,map__39989__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39987__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39991){
var map__40003 = p__39991;
var map__40003__$1 = ((((!((map__40003 == null)))?((((map__40003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40003):map__40003);
var on_compile_warning = cljs.core.get.call(null,map__40003__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40003__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40003,map__40003__$1,on_compile_warning,on_compile_fail){
return (function (p__40005){
var vec__40006 = p__40005;
var seq__40007 = cljs.core.seq.call(null,vec__40006);
var first__40008 = cljs.core.first.call(null,seq__40007);
var seq__40007__$1 = cljs.core.next.call(null,seq__40007);
var map__40009 = first__40008;
var map__40009__$1 = ((((!((map__40009 == null)))?((((map__40009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40009):map__40009);
var msg = map__40009__$1;
var msg_name = cljs.core.get.call(null,map__40009__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40007__$1;
var pred__40011 = cljs.core._EQ_;
var expr__40012 = msg_name;
if(cljs.core.truth_(pred__40011.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40012))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40011.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40012))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40003,map__40003__$1,on_compile_warning,on_compile_fail))
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
var c__32008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto__,msg_hist,msg_names,msg){
return (function (state_40240){
var state_val_40241 = (state_40240[(1)]);
if((state_val_40241 === (7))){
var inst_40160 = (state_40240[(2)]);
var state_40240__$1 = state_40240;
if(cljs.core.truth_(inst_40160)){
var statearr_40242_40292 = state_40240__$1;
(statearr_40242_40292[(1)] = (8));

} else {
var statearr_40243_40293 = state_40240__$1;
(statearr_40243_40293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (20))){
var inst_40234 = (state_40240[(2)]);
var state_40240__$1 = state_40240;
var statearr_40244_40294 = state_40240__$1;
(statearr_40244_40294[(2)] = inst_40234);

(statearr_40244_40294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (27))){
var inst_40230 = (state_40240[(2)]);
var state_40240__$1 = state_40240;
var statearr_40245_40295 = state_40240__$1;
(statearr_40245_40295[(2)] = inst_40230);

(statearr_40245_40295[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (1))){
var inst_40153 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40240__$1 = state_40240;
if(cljs.core.truth_(inst_40153)){
var statearr_40246_40296 = state_40240__$1;
(statearr_40246_40296[(1)] = (2));

} else {
var statearr_40247_40297 = state_40240__$1;
(statearr_40247_40297[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (24))){
var inst_40232 = (state_40240[(2)]);
var state_40240__$1 = state_40240;
var statearr_40248_40298 = state_40240__$1;
(statearr_40248_40298[(2)] = inst_40232);

(statearr_40248_40298[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (4))){
var inst_40238 = (state_40240[(2)]);
var state_40240__$1 = state_40240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40240__$1,inst_40238);
} else {
if((state_val_40241 === (15))){
var inst_40236 = (state_40240[(2)]);
var state_40240__$1 = state_40240;
var statearr_40249_40299 = state_40240__$1;
(statearr_40249_40299[(2)] = inst_40236);

(statearr_40249_40299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (21))){
var inst_40189 = (state_40240[(2)]);
var inst_40190 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40191 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40190);
var state_40240__$1 = (function (){var statearr_40250 = state_40240;
(statearr_40250[(7)] = inst_40189);

return statearr_40250;
})();
var statearr_40251_40300 = state_40240__$1;
(statearr_40251_40300[(2)] = inst_40191);

(statearr_40251_40300[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (31))){
var inst_40219 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40240__$1 = state_40240;
if(cljs.core.truth_(inst_40219)){
var statearr_40252_40301 = state_40240__$1;
(statearr_40252_40301[(1)] = (34));

} else {
var statearr_40253_40302 = state_40240__$1;
(statearr_40253_40302[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (32))){
var inst_40228 = (state_40240[(2)]);
var state_40240__$1 = state_40240;
var statearr_40254_40303 = state_40240__$1;
(statearr_40254_40303[(2)] = inst_40228);

(statearr_40254_40303[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (33))){
var inst_40215 = (state_40240[(2)]);
var inst_40216 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40217 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40216);
var state_40240__$1 = (function (){var statearr_40255 = state_40240;
(statearr_40255[(8)] = inst_40215);

return statearr_40255;
})();
var statearr_40256_40304 = state_40240__$1;
(statearr_40256_40304[(2)] = inst_40217);

(statearr_40256_40304[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (13))){
var inst_40174 = figwheel.client.heads_up.clear.call(null);
var state_40240__$1 = state_40240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40240__$1,(16),inst_40174);
} else {
if((state_val_40241 === (22))){
var inst_40195 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40196 = figwheel.client.heads_up.append_warning_message.call(null,inst_40195);
var state_40240__$1 = state_40240;
var statearr_40257_40305 = state_40240__$1;
(statearr_40257_40305[(2)] = inst_40196);

(statearr_40257_40305[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (36))){
var inst_40226 = (state_40240[(2)]);
var state_40240__$1 = state_40240;
var statearr_40258_40306 = state_40240__$1;
(statearr_40258_40306[(2)] = inst_40226);

(statearr_40258_40306[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (29))){
var inst_40206 = (state_40240[(2)]);
var inst_40207 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40208 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40207);
var state_40240__$1 = (function (){var statearr_40259 = state_40240;
(statearr_40259[(9)] = inst_40206);

return statearr_40259;
})();
var statearr_40260_40307 = state_40240__$1;
(statearr_40260_40307[(2)] = inst_40208);

(statearr_40260_40307[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (6))){
var inst_40155 = (state_40240[(10)]);
var state_40240__$1 = state_40240;
var statearr_40261_40308 = state_40240__$1;
(statearr_40261_40308[(2)] = inst_40155);

(statearr_40261_40308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (28))){
var inst_40202 = (state_40240[(2)]);
var inst_40203 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40204 = figwheel.client.heads_up.display_warning.call(null,inst_40203);
var state_40240__$1 = (function (){var statearr_40262 = state_40240;
(statearr_40262[(11)] = inst_40202);

return statearr_40262;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40240__$1,(29),inst_40204);
} else {
if((state_val_40241 === (25))){
var inst_40200 = figwheel.client.heads_up.clear.call(null);
var state_40240__$1 = state_40240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40240__$1,(28),inst_40200);
} else {
if((state_val_40241 === (34))){
var inst_40221 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40240__$1 = state_40240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40240__$1,(37),inst_40221);
} else {
if((state_val_40241 === (17))){
var inst_40180 = (state_40240[(2)]);
var inst_40181 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40182 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40181);
var state_40240__$1 = (function (){var statearr_40263 = state_40240;
(statearr_40263[(12)] = inst_40180);

return statearr_40263;
})();
var statearr_40264_40309 = state_40240__$1;
(statearr_40264_40309[(2)] = inst_40182);

(statearr_40264_40309[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (3))){
var inst_40172 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40240__$1 = state_40240;
if(cljs.core.truth_(inst_40172)){
var statearr_40265_40310 = state_40240__$1;
(statearr_40265_40310[(1)] = (13));

} else {
var statearr_40266_40311 = state_40240__$1;
(statearr_40266_40311[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (12))){
var inst_40168 = (state_40240[(2)]);
var state_40240__$1 = state_40240;
var statearr_40267_40312 = state_40240__$1;
(statearr_40267_40312[(2)] = inst_40168);

(statearr_40267_40312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (2))){
var inst_40155 = (state_40240[(10)]);
var inst_40155__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40240__$1 = (function (){var statearr_40268 = state_40240;
(statearr_40268[(10)] = inst_40155__$1);

return statearr_40268;
})();
if(cljs.core.truth_(inst_40155__$1)){
var statearr_40269_40313 = state_40240__$1;
(statearr_40269_40313[(1)] = (5));

} else {
var statearr_40270_40314 = state_40240__$1;
(statearr_40270_40314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (23))){
var inst_40198 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40240__$1 = state_40240;
if(cljs.core.truth_(inst_40198)){
var statearr_40271_40315 = state_40240__$1;
(statearr_40271_40315[(1)] = (25));

} else {
var statearr_40272_40316 = state_40240__$1;
(statearr_40272_40316[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (35))){
var state_40240__$1 = state_40240;
var statearr_40273_40317 = state_40240__$1;
(statearr_40273_40317[(2)] = null);

(statearr_40273_40317[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (19))){
var inst_40193 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40240__$1 = state_40240;
if(cljs.core.truth_(inst_40193)){
var statearr_40274_40318 = state_40240__$1;
(statearr_40274_40318[(1)] = (22));

} else {
var statearr_40275_40319 = state_40240__$1;
(statearr_40275_40319[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (11))){
var inst_40164 = (state_40240[(2)]);
var state_40240__$1 = state_40240;
var statearr_40276_40320 = state_40240__$1;
(statearr_40276_40320[(2)] = inst_40164);

(statearr_40276_40320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (9))){
var inst_40166 = figwheel.client.heads_up.clear.call(null);
var state_40240__$1 = state_40240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40240__$1,(12),inst_40166);
} else {
if((state_val_40241 === (5))){
var inst_40157 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40240__$1 = state_40240;
var statearr_40277_40321 = state_40240__$1;
(statearr_40277_40321[(2)] = inst_40157);

(statearr_40277_40321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (14))){
var inst_40184 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40240__$1 = state_40240;
if(cljs.core.truth_(inst_40184)){
var statearr_40278_40322 = state_40240__$1;
(statearr_40278_40322[(1)] = (18));

} else {
var statearr_40279_40323 = state_40240__$1;
(statearr_40279_40323[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (26))){
var inst_40210 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40240__$1 = state_40240;
if(cljs.core.truth_(inst_40210)){
var statearr_40280_40324 = state_40240__$1;
(statearr_40280_40324[(1)] = (30));

} else {
var statearr_40281_40325 = state_40240__$1;
(statearr_40281_40325[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (16))){
var inst_40176 = (state_40240[(2)]);
var inst_40177 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40178 = figwheel.client.heads_up.display_exception.call(null,inst_40177);
var state_40240__$1 = (function (){var statearr_40282 = state_40240;
(statearr_40282[(13)] = inst_40176);

return statearr_40282;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40240__$1,(17),inst_40178);
} else {
if((state_val_40241 === (30))){
var inst_40212 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40213 = figwheel.client.heads_up.display_warning.call(null,inst_40212);
var state_40240__$1 = state_40240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40240__$1,(33),inst_40213);
} else {
if((state_val_40241 === (10))){
var inst_40170 = (state_40240[(2)]);
var state_40240__$1 = state_40240;
var statearr_40283_40326 = state_40240__$1;
(statearr_40283_40326[(2)] = inst_40170);

(statearr_40283_40326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (18))){
var inst_40186 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40187 = figwheel.client.heads_up.display_exception.call(null,inst_40186);
var state_40240__$1 = state_40240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40240__$1,(21),inst_40187);
} else {
if((state_val_40241 === (37))){
var inst_40223 = (state_40240[(2)]);
var state_40240__$1 = state_40240;
var statearr_40284_40327 = state_40240__$1;
(statearr_40284_40327[(2)] = inst_40223);

(statearr_40284_40327[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40241 === (8))){
var inst_40162 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40240__$1 = state_40240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40240__$1,(11),inst_40162);
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
});})(c__32008__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31894__auto__,c__32008__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31895__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31895__auto____0 = (function (){
var statearr_40288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40288[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31895__auto__);

(statearr_40288[(1)] = (1));

return statearr_40288;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31895__auto____1 = (function (state_40240){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_40240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e40289){if((e40289 instanceof Object)){
var ex__31898__auto__ = e40289;
var statearr_40290_40328 = state_40240;
(statearr_40290_40328[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40329 = state_40240;
state_40240 = G__40329;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31895__auto__ = function(state_40240){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31895__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31895__auto____1.call(this,state_40240);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31895__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31895__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto__,msg_hist,msg_names,msg))
})();
var state__32010__auto__ = (function (){var statearr_40291 = f__32009__auto__.call(null);
(statearr_40291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto__);

return statearr_40291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto__,msg_hist,msg_names,msg))
);

return c__32008__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32008__auto___40392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto___40392,ch){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto___40392,ch){
return (function (state_40375){
var state_val_40376 = (state_40375[(1)]);
if((state_val_40376 === (1))){
var state_40375__$1 = state_40375;
var statearr_40377_40393 = state_40375__$1;
(statearr_40377_40393[(2)] = null);

(statearr_40377_40393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40376 === (2))){
var state_40375__$1 = state_40375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40375__$1,(4),ch);
} else {
if((state_val_40376 === (3))){
var inst_40373 = (state_40375[(2)]);
var state_40375__$1 = state_40375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40375__$1,inst_40373);
} else {
if((state_val_40376 === (4))){
var inst_40363 = (state_40375[(7)]);
var inst_40363__$1 = (state_40375[(2)]);
var state_40375__$1 = (function (){var statearr_40378 = state_40375;
(statearr_40378[(7)] = inst_40363__$1);

return statearr_40378;
})();
if(cljs.core.truth_(inst_40363__$1)){
var statearr_40379_40394 = state_40375__$1;
(statearr_40379_40394[(1)] = (5));

} else {
var statearr_40380_40395 = state_40375__$1;
(statearr_40380_40395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40376 === (5))){
var inst_40363 = (state_40375[(7)]);
var inst_40365 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40363);
var state_40375__$1 = state_40375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40375__$1,(8),inst_40365);
} else {
if((state_val_40376 === (6))){
var state_40375__$1 = state_40375;
var statearr_40381_40396 = state_40375__$1;
(statearr_40381_40396[(2)] = null);

(statearr_40381_40396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40376 === (7))){
var inst_40371 = (state_40375[(2)]);
var state_40375__$1 = state_40375;
var statearr_40382_40397 = state_40375__$1;
(statearr_40382_40397[(2)] = inst_40371);

(statearr_40382_40397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40376 === (8))){
var inst_40367 = (state_40375[(2)]);
var state_40375__$1 = (function (){var statearr_40383 = state_40375;
(statearr_40383[(8)] = inst_40367);

return statearr_40383;
})();
var statearr_40384_40398 = state_40375__$1;
(statearr_40384_40398[(2)] = null);

(statearr_40384_40398[(1)] = (2));


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
});})(c__32008__auto___40392,ch))
;
return ((function (switch__31894__auto__,c__32008__auto___40392,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31895__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31895__auto____0 = (function (){
var statearr_40388 = [null,null,null,null,null,null,null,null,null];
(statearr_40388[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31895__auto__);

(statearr_40388[(1)] = (1));

return statearr_40388;
});
var figwheel$client$heads_up_plugin_$_state_machine__31895__auto____1 = (function (state_40375){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_40375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e40389){if((e40389 instanceof Object)){
var ex__31898__auto__ = e40389;
var statearr_40390_40399 = state_40375;
(statearr_40390_40399[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40400 = state_40375;
state_40375 = G__40400;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31895__auto__ = function(state_40375){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31895__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31895__auto____1.call(this,state_40375);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31895__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31895__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto___40392,ch))
})();
var state__32010__auto__ = (function (){var statearr_40391 = f__32009__auto__.call(null);
(statearr_40391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___40392);

return statearr_40391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto___40392,ch))
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
var c__32008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto__){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto__){
return (function (state_40421){
var state_val_40422 = (state_40421[(1)]);
if((state_val_40422 === (1))){
var inst_40416 = cljs.core.async.timeout.call(null,(3000));
var state_40421__$1 = state_40421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40421__$1,(2),inst_40416);
} else {
if((state_val_40422 === (2))){
var inst_40418 = (state_40421[(2)]);
var inst_40419 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40421__$1 = (function (){var statearr_40423 = state_40421;
(statearr_40423[(7)] = inst_40418);

return statearr_40423;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40421__$1,inst_40419);
} else {
return null;
}
}
});})(c__32008__auto__))
;
return ((function (switch__31894__auto__,c__32008__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31895__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31895__auto____0 = (function (){
var statearr_40427 = [null,null,null,null,null,null,null,null];
(statearr_40427[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31895__auto__);

(statearr_40427[(1)] = (1));

return statearr_40427;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31895__auto____1 = (function (state_40421){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_40421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e40428){if((e40428 instanceof Object)){
var ex__31898__auto__ = e40428;
var statearr_40429_40431 = state_40421;
(statearr_40429_40431[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40432 = state_40421;
state_40421 = G__40432;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31895__auto__ = function(state_40421){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31895__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31895__auto____1.call(this,state_40421);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31895__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31895__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto__))
})();
var state__32010__auto__ = (function (){var statearr_40430 = f__32009__auto__.call(null);
(statearr_40430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto__);

return statearr_40430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto__))
);

return c__32008__auto__;
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
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto__,figwheel_version,temp__5457__auto__){
return (function (state_40455){
var state_val_40456 = (state_40455[(1)]);
if((state_val_40456 === (1))){
var inst_40449 = cljs.core.async.timeout.call(null,(2000));
var state_40455__$1 = state_40455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40455__$1,(2),inst_40449);
} else {
if((state_val_40456 === (2))){
var inst_40451 = (state_40455[(2)]);
var inst_40452 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_40453 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_40452);
var state_40455__$1 = (function (){var statearr_40457 = state_40455;
(statearr_40457[(7)] = inst_40451);

return statearr_40457;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40455__$1,inst_40453);
} else {
return null;
}
}
});})(c__32008__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__31894__auto__,c__32008__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31895__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31895__auto____0 = (function (){
var statearr_40461 = [null,null,null,null,null,null,null,null];
(statearr_40461[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31895__auto__);

(statearr_40461[(1)] = (1));

return statearr_40461;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31895__auto____1 = (function (state_40455){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_40455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e40462){if((e40462 instanceof Object)){
var ex__31898__auto__ = e40462;
var statearr_40463_40465 = state_40455;
(statearr_40463_40465[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40466 = state_40455;
state_40455 = G__40466;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31895__auto__ = function(state_40455){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31895__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31895__auto____1.call(this,state_40455);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31895__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31895__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto__,figwheel_version,temp__5457__auto__))
})();
var state__32010__auto__ = (function (){var statearr_40464 = f__32009__auto__.call(null);
(statearr_40464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto__);

return statearr_40464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto__,figwheel_version,temp__5457__auto__))
);

return c__32008__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__40467){
var map__40471 = p__40467;
var map__40471__$1 = ((((!((map__40471 == null)))?((((map__40471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40471.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40471):map__40471);
var file = cljs.core.get.call(null,map__40471__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40471__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40471__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__40473 = "";
var G__40473__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40473),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__40473);
var G__40473__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40473__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__40473__$1);
if(cljs.core.truth_((function (){var and__29261__auto__ = line;
if(cljs.core.truth_(and__29261__auto__)){
return column;
} else {
return and__29261__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40473__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__40473__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40474){
var map__40481 = p__40474;
var map__40481__$1 = ((((!((map__40481 == null)))?((((map__40481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40481):map__40481);
var ed = map__40481__$1;
var formatted_exception = cljs.core.get.call(null,map__40481__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40481__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40481__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40483_40487 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40484_40488 = null;
var count__40485_40489 = (0);
var i__40486_40490 = (0);
while(true){
if((i__40486_40490 < count__40485_40489)){
var msg_40491 = cljs.core._nth.call(null,chunk__40484_40488,i__40486_40490);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40491);

var G__40492 = seq__40483_40487;
var G__40493 = chunk__40484_40488;
var G__40494 = count__40485_40489;
var G__40495 = (i__40486_40490 + (1));
seq__40483_40487 = G__40492;
chunk__40484_40488 = G__40493;
count__40485_40489 = G__40494;
i__40486_40490 = G__40495;
continue;
} else {
var temp__5457__auto___40496 = cljs.core.seq.call(null,seq__40483_40487);
if(temp__5457__auto___40496){
var seq__40483_40497__$1 = temp__5457__auto___40496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40483_40497__$1)){
var c__30184__auto___40498 = cljs.core.chunk_first.call(null,seq__40483_40497__$1);
var G__40499 = cljs.core.chunk_rest.call(null,seq__40483_40497__$1);
var G__40500 = c__30184__auto___40498;
var G__40501 = cljs.core.count.call(null,c__30184__auto___40498);
var G__40502 = (0);
seq__40483_40487 = G__40499;
chunk__40484_40488 = G__40500;
count__40485_40489 = G__40501;
i__40486_40490 = G__40502;
continue;
} else {
var msg_40503 = cljs.core.first.call(null,seq__40483_40497__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40503);

var G__40504 = cljs.core.next.call(null,seq__40483_40497__$1);
var G__40505 = null;
var G__40506 = (0);
var G__40507 = (0);
seq__40483_40487 = G__40504;
chunk__40484_40488 = G__40505;
count__40485_40489 = G__40506;
i__40486_40490 = G__40507;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40508){
var map__40511 = p__40508;
var map__40511__$1 = ((((!((map__40511 == null)))?((((map__40511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40511.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40511):map__40511);
var w = map__40511__$1;
var message = cljs.core.get.call(null,map__40511__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\out\\figwheel\\client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__29261__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__29261__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__29261__auto__;
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
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__40523 = cljs.core.seq.call(null,plugins);
var chunk__40524 = null;
var count__40525 = (0);
var i__40526 = (0);
while(true){
if((i__40526 < count__40525)){
var vec__40527 = cljs.core._nth.call(null,chunk__40524,i__40526);
var k = cljs.core.nth.call(null,vec__40527,(0),null);
var plugin = cljs.core.nth.call(null,vec__40527,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40533 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40523,chunk__40524,count__40525,i__40526,pl_40533,vec__40527,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40533.call(null,msg_hist);
});})(seq__40523,chunk__40524,count__40525,i__40526,pl_40533,vec__40527,k,plugin))
);
} else {
}

var G__40534 = seq__40523;
var G__40535 = chunk__40524;
var G__40536 = count__40525;
var G__40537 = (i__40526 + (1));
seq__40523 = G__40534;
chunk__40524 = G__40535;
count__40525 = G__40536;
i__40526 = G__40537;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__40523);
if(temp__5457__auto__){
var seq__40523__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40523__$1)){
var c__30184__auto__ = cljs.core.chunk_first.call(null,seq__40523__$1);
var G__40538 = cljs.core.chunk_rest.call(null,seq__40523__$1);
var G__40539 = c__30184__auto__;
var G__40540 = cljs.core.count.call(null,c__30184__auto__);
var G__40541 = (0);
seq__40523 = G__40538;
chunk__40524 = G__40539;
count__40525 = G__40540;
i__40526 = G__40541;
continue;
} else {
var vec__40530 = cljs.core.first.call(null,seq__40523__$1);
var k = cljs.core.nth.call(null,vec__40530,(0),null);
var plugin = cljs.core.nth.call(null,vec__40530,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40542 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40523,chunk__40524,count__40525,i__40526,pl_40542,vec__40530,k,plugin,seq__40523__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40542.call(null,msg_hist);
});})(seq__40523,chunk__40524,count__40525,i__40526,pl_40542,vec__40530,k,plugin,seq__40523__$1,temp__5457__auto__))
);
} else {
}

var G__40543 = cljs.core.next.call(null,seq__40523__$1);
var G__40544 = null;
var G__40545 = (0);
var G__40546 = (0);
seq__40523 = G__40543;
chunk__40524 = G__40544;
count__40525 = G__40545;
i__40526 = G__40546;
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
var args40547 = [];
var len__30494__auto___40554 = arguments.length;
var i__30495__auto___40555 = (0);
while(true){
if((i__30495__auto___40555 < len__30494__auto___40554)){
args40547.push((arguments[i__30495__auto___40555]));

var G__40556 = (i__30495__auto___40555 + (1));
i__30495__auto___40555 = G__40556;
continue;
} else {
}
break;
}

var G__40549 = args40547.length;
switch (G__40549) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40547.length)].join('')));

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

var seq__40550_40558 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40551_40559 = null;
var count__40552_40560 = (0);
var i__40553_40561 = (0);
while(true){
if((i__40553_40561 < count__40552_40560)){
var msg_40562 = cljs.core._nth.call(null,chunk__40551_40559,i__40553_40561);
figwheel.client.socket.handle_incoming_message.call(null,msg_40562);

var G__40563 = seq__40550_40558;
var G__40564 = chunk__40551_40559;
var G__40565 = count__40552_40560;
var G__40566 = (i__40553_40561 + (1));
seq__40550_40558 = G__40563;
chunk__40551_40559 = G__40564;
count__40552_40560 = G__40565;
i__40553_40561 = G__40566;
continue;
} else {
var temp__5457__auto___40567 = cljs.core.seq.call(null,seq__40550_40558);
if(temp__5457__auto___40567){
var seq__40550_40568__$1 = temp__5457__auto___40567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40550_40568__$1)){
var c__30184__auto___40569 = cljs.core.chunk_first.call(null,seq__40550_40568__$1);
var G__40570 = cljs.core.chunk_rest.call(null,seq__40550_40568__$1);
var G__40571 = c__30184__auto___40569;
var G__40572 = cljs.core.count.call(null,c__30184__auto___40569);
var G__40573 = (0);
seq__40550_40558 = G__40570;
chunk__40551_40559 = G__40571;
count__40552_40560 = G__40572;
i__40553_40561 = G__40573;
continue;
} else {
var msg_40574 = cljs.core.first.call(null,seq__40550_40568__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40574);

var G__40575 = cljs.core.next.call(null,seq__40550_40568__$1);
var G__40576 = null;
var G__40577 = (0);
var G__40578 = (0);
seq__40550_40558 = G__40575;
chunk__40551_40559 = G__40576;
count__40552_40560 = G__40577;
i__40553_40561 = G__40578;
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
var args__30501__auto__ = [];
var len__30494__auto___40583 = arguments.length;
var i__30495__auto___40584 = (0);
while(true){
if((i__30495__auto___40584 < len__30494__auto___40583)){
args__30501__auto__.push((arguments[i__30495__auto___40584]));

var G__40585 = (i__30495__auto___40584 + (1));
i__30495__auto___40584 = G__40585;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((0) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__30502__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40580){
var map__40581 = p__40580;
var map__40581__$1 = ((((!((map__40581 == null)))?((((map__40581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40581):map__40581);
var opts = map__40581__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40579){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40579));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40587){if((e40587 instanceof Error)){
var e = e40587;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40587;

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
return (function (p__40591){
var map__40592 = p__40591;
var map__40592__$1 = ((((!((map__40592 == null)))?((((map__40592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40592):map__40592);
var msg_name = cljs.core.get.call(null,map__40592__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1513965926646