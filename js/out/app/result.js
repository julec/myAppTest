// Compiled by ClojureScript 1.9.521 {}
goog.provide('app.result');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('app.validation');
goog.require('app.common');
cljs.core.enable_console_print_BANG_.call(null);
app.result.result_input = rum.core.build_defcc.call(null,(function() { 
var G__42139__delegate = function (comp,value,class$,placeholder,validate_on_change,on_change,p__42135){
var vec__42136 = p__42135;
var on_blur = cljs.core.nth.call(null,vec__42136,(0),null);
return sablono.interpreter.create_element.call(null,"input",({"type": "text", "placeholder": placeholder, "value": value, "onBlur": ((function (vec__42136,on_blur){
return (function (p1__42133_SHARP_){
var new_value = p1__42133_SHARP_.target.value;
if(cljs.core.truth_(on_blur)){
return on_blur.call(null,new_value);
} else {
return null;
}
});})(vec__42136,on_blur))
, "onChange": ((function (vec__42136,on_blur){
return (function (p1__42134_SHARP_){
var new_value = p1__42134_SHARP_.target.value;
if(cljs.core.truth_(validate_on_change.call(null,new_value))){
return on_change.call(null,new_value);
} else {
return rum.core.request_render.call(null,comp);
}
});})(vec__42136,on_blur))
, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null))}));
};
var G__42139 = function (comp,value,class$,placeholder,validate_on_change,on_change,var_args){
var p__42135 = null;
if (arguments.length > 6) {
var G__42140__i = 0, G__42140__a = new Array(arguments.length -  6);
while (G__42140__i < G__42140__a.length) {G__42140__a[G__42140__i] = arguments[G__42140__i + 6]; ++G__42140__i;}
  p__42135 = new cljs.core.IndexedSeq(G__42140__a,0);
} 
return G__42139__delegate.call(this,comp,value,class$,placeholder,validate_on_change,on_change,p__42135);};
G__42139.cljs$lang$maxFixedArity = 6;
G__42139.cljs$lang$applyTo = (function (arglist__42141){
var comp = cljs.core.first(arglist__42141);
arglist__42141 = cljs.core.next(arglist__42141);
var value = cljs.core.first(arglist__42141);
arglist__42141 = cljs.core.next(arglist__42141);
var class$ = cljs.core.first(arglist__42141);
arglist__42141 = cljs.core.next(arglist__42141);
var placeholder = cljs.core.first(arglist__42141);
arglist__42141 = cljs.core.next(arglist__42141);
var validate_on_change = cljs.core.first(arglist__42141);
arglist__42141 = cljs.core.next(arglist__42141);
var on_change = cljs.core.first(arglist__42141);
var p__42135 = cljs.core.rest(arglist__42141);
return G__42139__delegate(comp,value,class$,placeholder,validate_on_change,on_change,p__42135);
});
G__42139.cljs$core$IFn$_invoke$arity$variadic = G__42139__delegate;
return G__42139;
})()
,null,"result-input");
app.result.result = rum.core.build_defc.call(null,(function (data){
var numbers = cljs.core.map.call(null,(function (p1__42142_SHARP_){
return Number(p1__42142_SHARP_.call(null,(1)));
}),cljs.core.subvec.call(null,data,(1)));
var aggregations = [];
var sum = cljs.core.reduce.call(null,cljs.core._PLUS_,numbers);
var avg = (Math.round(((sum / cljs.core.count.call(null,numbers)) * (100))) / (100));
var max = cljs.core.apply.call(null,Math.max,numbers);
var min = cljs.core.apply.call(null,Math.min,numbers);
app.result.add_to_aggregations = ((function (numbers,aggregations,sum,avg,max,min){
return (function app$result$add_to_aggregations(value,title){
return aggregations.push(cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"title","title",636505583),title));
});})(numbers,aggregations,sum,avg,max,min))
;

app.result.add_to_aggregations.call(null,sum,"Sum");

app.result.add_to_aggregations.call(null,avg,"Avg");

app.result.add_to_aggregations.call(null,max,"Max");

app.result.add_to_aggregations.call(null,min,"Min");

return React.createElement("div",({"className": "container"}),React.createElement("div",({"className": "result"}),React.createElement("div",({"className": "result-aggregations"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (numbers,aggregations,sum,avg,max,min){
return (function (i,aggregation){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"result-table-row",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("aggregation"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"result-table-cell result-table-caption"], null),aggregation.call(null,new cljs.core.Keyword(null,"title","title",636505583))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"result-table-cell"], null),aggregation.call(null,new cljs.core.Keyword(null,"value","value",305978217))], null)], null);
});})(numbers,aggregations,sum,avg,max,min))
,aggregations))),React.createElement("div",({"className": "result-table"}),React.createElement("div",({"className": "result-table-row"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (numbers,aggregations,sum,avg,max,min){
return (function (i,arg){
return rum.core.with_key.call(null,app.result.result_input.call(null,arg,"result-table-cell result-table-caption","Enter title",((function (numbers,aggregations,sum,avg,max,min){
return (function (p1__42143_SHARP_){
return app.validation.valid_length_QMARK_.call(null,p1__42143_SHARP_);
});})(numbers,aggregations,sum,avg,max,min))
,((function (numbers,aggregations,sum,avg,max,min){
return (function (p1__42144_SHARP_){
return cljs.core.swap_BANG_.call(null,app.common.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-content","file-content",-1595262238),(0),i], null),p1__42144_SHARP_);
});})(numbers,aggregations,sum,avg,max,min))
,((function (numbers,aggregations,sum,avg,max,min){
return (function (p1__42145_SHARP_){
return cljs.core.swap_BANG_.call(null,app.common.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-content","file-content",-1595262238),(0),i], null),p1__42145_SHARP_.trim());
});})(numbers,aggregations,sum,avg,max,min))
),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("title-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''));
});})(numbers,aggregations,sum,avg,max,min))
,data.call(null,(0))))),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (numbers,aggregations,sum,avg,max,min){
return (function (i,arg){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"result-table-row",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("row-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),cljs.core.map_indexed.call(null,((function (numbers,aggregations,sum,avg,max,min){
return (function (k,arg_inner){
if(cljs.core._EQ_.call(null,k,(0))){
return rum.core.with_key.call(null,app.result.result_input.call(null,arg_inner,"result-table-cell","Enter company name",((function (numbers,aggregations,sum,avg,max,min){
return (function (p1__42146_SHARP_){
return app.validation.valid_length_QMARK_.call(null,p1__42146_SHARP_);
});})(numbers,aggregations,sum,avg,max,min))
,((function (numbers,aggregations,sum,avg,max,min){
return (function (p1__42147_SHARP_){
return cljs.core.swap_BANG_.call(null,app.common.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-content","file-content",-1595262238),(i + (1)),k], null),p1__42147_SHARP_);
});})(numbers,aggregations,sum,avg,max,min))
,((function (numbers,aggregations,sum,avg,max,min){
return (function (p1__42148_SHARP_){
return cljs.core.swap_BANG_.call(null,app.common.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-content","file-content",-1595262238),(i + (1)),k], null),p1__42148_SHARP_.trim());
});})(numbers,aggregations,sum,avg,max,min))
),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("data-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
} else {
return rum.core.with_key.call(null,app.result.result_input.call(null,arg_inner,"result-table-cell","0",((function (numbers,aggregations,sum,avg,max,min){
return (function (p1__42149_SHARP_){
return app.validation.valid_number_QMARK_.call(null,p1__42149_SHARP_);
});})(numbers,aggregations,sum,avg,max,min))
,((function (numbers,aggregations,sum,avg,max,min){
return (function (p1__42150_SHARP_){
return cljs.core.swap_BANG_.call(null,app.common.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-content","file-content",-1595262238),(i + (1)),k], null),p1__42150_SHARP_);
});})(numbers,aggregations,sum,avg,max,min))
,((function (numbers,aggregations,sum,avg,max,min){
return (function (arg__$1){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/(\-|.|)/,arg__$1))){
return cljs.core.swap_BANG_.call(null,app.common.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-content","file-content",-1595262238),(i + (1)),k], null),(0));
} else {
return cljs.core.swap_BANG_.call(null,app.common.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-content","file-content",-1595262238),(i + (1)),k], null),Number(arg__$1));
}
});})(numbers,aggregations,sum,avg,max,min))
),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("data-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
}
});})(numbers,aggregations,sum,avg,max,min))
,arg)], null);
});})(numbers,aggregations,sum,avg,max,min))
,cljs.core.subvec.call(null,data,(1)))))));
}),null,"result");

//# sourceMappingURL=result.js.map?rel=1513965929107