// Compiled by ClojureScript 1.9.521 {}
goog.provide('app.upload');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('goog.labs.format.csv');
goog.require('cljs.core.async');
goog.require('app.common');
goog.require('app.validation');
app.upload.first_file = cljs.core.map.call(null,(function (e){
var target = e.currentTarget;
var file = (target.files[(0)]);
target.value = "";

return file;
}));
app.upload.extract_result = cljs.core.map.call(null,(function (p1__42153_SHARP_){
return cljs.core.js__GT_clj.call(null,goog.labs.format.csv.parse(p1__42153_SHARP_.target.result));
}));
app.upload.upload_reqs = cljs.core.async.chan.call(null,(1),app.upload.first_file);
app.upload.file_reads = cljs.core.async.chan.call(null,(1),app.upload.extract_result);
app.upload.handle_change = (function app$upload$handle_change(e){
return cljs.core.async.put_BANG_.call(null,app.upload.upload_reqs,e);
});
var c__32008__auto___42213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto___42213){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto___42213){
return (function (state_42186){
var state_val_42187 = (state_42186[(1)]);
if((state_val_42187 === (7))){
var inst_42181 = (state_42186[(2)]);
var state_42186__$1 = (function (){var statearr_42188 = state_42186;
(statearr_42188[(7)] = inst_42181);

return statearr_42188;
})();
var statearr_42189_42214 = state_42186__$1;
(statearr_42189_42214[(2)] = null);

(statearr_42189_42214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42187 === (1))){
var state_42186__$1 = state_42186;
var statearr_42190_42215 = state_42186__$1;
(statearr_42190_42215[(2)] = null);

(statearr_42190_42215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42187 === (4))){
var inst_42158 = (state_42186[(8)]);
var inst_42158__$1 = (state_42186[(2)]);
var inst_42159 = app.validation.valid_file_type_QMARK_.call(null,inst_42158__$1);
var inst_42160 = cljs.core.not.call(null,inst_42159);
var state_42186__$1 = (function (){var statearr_42191 = state_42186;
(statearr_42191[(8)] = inst_42158__$1);

return statearr_42191;
})();
if(inst_42160){
var statearr_42192_42216 = state_42186__$1;
(statearr_42192_42216[(1)] = (5));

} else {
var statearr_42193_42217 = state_42186__$1;
(statearr_42193_42217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42187 === (13))){
var inst_42177 = (state_42186[(2)]);
var state_42186__$1 = state_42186;
var statearr_42194_42218 = state_42186__$1;
(statearr_42194_42218[(2)] = inst_42177);

(statearr_42194_42218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42187 === (6))){
var inst_42158 = (state_42186[(8)]);
var inst_42164 = app.validation.valid_file_size_QMARK_.call(null,inst_42158);
var inst_42165 = cljs.core.not.call(null,inst_42164);
var state_42186__$1 = state_42186;
if(inst_42165){
var statearr_42195_42219 = state_42186__$1;
(statearr_42195_42219[(1)] = (8));

} else {
var statearr_42196_42220 = state_42186__$1;
(statearr_42196_42220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42187 === (3))){
var inst_42184 = (state_42186[(2)]);
var state_42186__$1 = state_42186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42186__$1,inst_42184);
} else {
if((state_val_42187 === (12))){
var state_42186__$1 = state_42186;
var statearr_42197_42221 = state_42186__$1;
(statearr_42197_42221[(2)] = null);

(statearr_42197_42221[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42187 === (2))){
var inst_42156 = (new FileReader());
var state_42186__$1 = (function (){var statearr_42198 = state_42186;
(statearr_42198[(9)] = inst_42156);

return statearr_42198;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42186__$1,(4),app.upload.upload_reqs);
} else {
if((state_val_42187 === (11))){
var inst_42158 = (state_42186[(8)]);
var inst_42156 = (state_42186[(9)]);
var inst_42170 = inst_42158.name;
var inst_42171 = cljs.core.swap_BANG_.call(null,app.common.state,cljs.core.assoc,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),inst_42170,new cljs.core.Keyword(null,"file-error","file-error",1419078490),"");
var inst_42172 = (function (){var reader = inst_42156;
var file = inst_42158;
return ((function (reader,file,inst_42158,inst_42156,inst_42170,inst_42171,state_val_42187,c__32008__auto___42213){
return (function (p1__42154_SHARP_){
return cljs.core.async.put_BANG_.call(null,app.upload.file_reads,p1__42154_SHARP_);
});
;})(reader,file,inst_42158,inst_42156,inst_42170,inst_42171,state_val_42187,c__32008__auto___42213))
})();
var inst_42173 = inst_42156.onload = inst_42172;
var inst_42174 = inst_42156.readAsText(inst_42158);
var state_42186__$1 = (function (){var statearr_42199 = state_42186;
(statearr_42199[(10)] = inst_42173);

(statearr_42199[(11)] = inst_42171);

return statearr_42199;
})();
var statearr_42200_42222 = state_42186__$1;
(statearr_42200_42222[(2)] = inst_42174);

(statearr_42200_42222[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42187 === (9))){
var state_42186__$1 = state_42186;
var statearr_42201_42223 = state_42186__$1;
(statearr_42201_42223[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42187 === (5))){
var inst_42162 = app.common.write_error_to_state.call(null,"Upload a .csv-file!",false);
var state_42186__$1 = state_42186;
var statearr_42203_42224 = state_42186__$1;
(statearr_42203_42224[(2)] = inst_42162);

(statearr_42203_42224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42187 === (10))){
var inst_42179 = (state_42186[(2)]);
var state_42186__$1 = state_42186;
var statearr_42204_42225 = state_42186__$1;
(statearr_42204_42225[(2)] = inst_42179);

(statearr_42204_42225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42187 === (8))){
var inst_42167 = app.common.write_error_to_state.call(null,"File should be no more than 10Kb!",false);
var state_42186__$1 = state_42186;
var statearr_42205_42226 = state_42186__$1;
(statearr_42205_42226[(2)] = inst_42167);

(statearr_42205_42226[(1)] = (10));


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
});})(c__32008__auto___42213))
;
return ((function (switch__31894__auto__,c__32008__auto___42213){
return (function() {
var app$upload$state_machine__31895__auto__ = null;
var app$upload$state_machine__31895__auto____0 = (function (){
var statearr_42209 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42209[(0)] = app$upload$state_machine__31895__auto__);

(statearr_42209[(1)] = (1));

return statearr_42209;
});
var app$upload$state_machine__31895__auto____1 = (function (state_42186){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_42186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e42210){if((e42210 instanceof Object)){
var ex__31898__auto__ = e42210;
var statearr_42211_42227 = state_42186;
(statearr_42211_42227[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42228 = state_42186;
state_42186 = G__42228;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
app$upload$state_machine__31895__auto__ = function(state_42186){
switch(arguments.length){
case 0:
return app$upload$state_machine__31895__auto____0.call(this);
case 1:
return app$upload$state_machine__31895__auto____1.call(this,state_42186);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$upload$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = app$upload$state_machine__31895__auto____0;
app$upload$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = app$upload$state_machine__31895__auto____1;
return app$upload$state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto___42213))
})();
var state__32010__auto__ = (function (){var statearr_42212 = f__32009__auto__.call(null);
(statearr_42212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___42213);

return statearr_42212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto___42213))
);

var c__32008__auto___42324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto___42324){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto___42324){
return (function (state_42282){
var state_val_42283 = (state_42282[(1)]);
if((state_val_42283 === (7))){
var inst_42277 = (state_42282[(2)]);
var state_42282__$1 = (function (){var statearr_42284 = state_42282;
(statearr_42284[(7)] = inst_42277);

return statearr_42284;
})();
var statearr_42285_42325 = state_42282__$1;
(statearr_42285_42325[(2)] = null);

(statearr_42285_42325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (20))){
var inst_42258 = app.common.write_error_to_state.call(null,"Data in second column should be a number!",true);
var state_42282__$1 = state_42282;
var statearr_42286_42326 = state_42282__$1;
(statearr_42286_42326[(2)] = inst_42258);

(statearr_42286_42326[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (1))){
var state_42282__$1 = state_42282;
var statearr_42287_42327 = state_42282__$1;
(statearr_42287_42327[(2)] = null);

(statearr_42287_42327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (24))){
var state_42282__$1 = state_42282;
var statearr_42288_42328 = state_42282__$1;
(statearr_42288_42328[(2)] = null);

(statearr_42288_42328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (4))){
var inst_42232 = (state_42282[(8)]);
var inst_42232__$1 = (state_42282[(2)]);
var inst_42233 = cljs.core.empty_QMARK_.call(null,inst_42232__$1);
var state_42282__$1 = (function (){var statearr_42289 = state_42282;
(statearr_42289[(8)] = inst_42232__$1);

return statearr_42289;
})();
if(inst_42233){
var statearr_42290_42329 = state_42282__$1;
(statearr_42290_42329[(1)] = (5));

} else {
var statearr_42291_42330 = state_42282__$1;
(statearr_42291_42330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (15))){
var inst_42244 = (state_42282[(9)]);
var inst_42250 = app.validation.valid_first_col_QMARK_.call(null,inst_42244);
var inst_42251 = cljs.core.not.call(null,inst_42250);
var state_42282__$1 = state_42282;
if(inst_42251){
var statearr_42292_42331 = state_42282__$1;
(statearr_42292_42331[(1)] = (17));

} else {
var statearr_42293_42332 = state_42282__$1;
(statearr_42293_42332[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (21))){
var state_42282__$1 = state_42282;
var statearr_42294_42333 = state_42282__$1;
(statearr_42294_42333[(1)] = (23));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (13))){
var inst_42273 = (state_42282[(2)]);
var state_42282__$1 = state_42282;
var statearr_42296_42334 = state_42282__$1;
(statearr_42296_42334[(2)] = inst_42273);

(statearr_42296_42334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (22))){
var inst_42266 = (state_42282[(2)]);
var state_42282__$1 = state_42282;
var statearr_42297_42335 = state_42282__$1;
(statearr_42297_42335[(2)] = inst_42266);

(statearr_42297_42335[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (6))){
var inst_42232 = (state_42282[(8)]);
var inst_42237 = app.validation.valid_cols_QMARK_.call(null,inst_42232);
var inst_42238 = cljs.core.not.call(null,inst_42237);
var state_42282__$1 = state_42282;
if(inst_42238){
var statearr_42298_42336 = state_42282__$1;
(statearr_42298_42336[(1)] = (8));

} else {
var statearr_42299_42337 = state_42282__$1;
(statearr_42299_42337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (25))){
var inst_42264 = (state_42282[(2)]);
var state_42282__$1 = state_42282;
var statearr_42300_42338 = state_42282__$1;
(statearr_42300_42338[(2)] = inst_42264);

(statearr_42300_42338[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (17))){
var inst_42253 = app.common.write_error_to_state.call(null,"Data in first column should be a no longer than 20 symbols!",true);
var state_42282__$1 = state_42282;
var statearr_42301_42339 = state_42282__$1;
(statearr_42301_42339[(2)] = inst_42253);

(statearr_42301_42339[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (3))){
var inst_42280 = (state_42282[(2)]);
var state_42282__$1 = state_42282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42282__$1,inst_42280);
} else {
if((state_val_42283 === (12))){
var state_42282__$1 = state_42282;
var statearr_42302_42340 = state_42282__$1;
(statearr_42302_42340[(2)] = null);

(statearr_42302_42340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (2))){
var state_42282__$1 = state_42282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42282__$1,(4),app.upload.file_reads);
} else {
if((state_val_42283 === (23))){
var inst_42244 = (state_42282[(9)]);
var inst_42261 = cljs.core.swap_BANG_.call(null,app.common.state,cljs.core.assoc,new cljs.core.Keyword(null,"file-content","file-content",-1595262238),inst_42244,new cljs.core.Keyword(null,"file-error","file-error",1419078490),"");
var state_42282__$1 = state_42282;
var statearr_42303_42341 = state_42282__$1;
(statearr_42303_42341[(2)] = inst_42261);

(statearr_42303_42341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (19))){
var inst_42268 = (state_42282[(2)]);
var state_42282__$1 = state_42282;
var statearr_42304_42342 = state_42282__$1;
(statearr_42304_42342[(2)] = inst_42268);

(statearr_42304_42342[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (11))){
var inst_42244 = (state_42282[(9)]);
var inst_42232 = (state_42282[(8)]);
var inst_42243 = (function (){var content = inst_42232;
return ((function (content,inst_42244,inst_42232,state_val_42283,c__32008__auto___42324){
return (function (p1__42229_SHARP_){
return cljs.core.mapv.call(null,((function (content,inst_42244,inst_42232,state_val_42283,c__32008__auto___42324){
return (function (arg){
return arg.trim();
});})(content,inst_42244,inst_42232,state_val_42283,c__32008__auto___42324))
,p1__42229_SHARP_);
});
;})(content,inst_42244,inst_42232,state_val_42283,c__32008__auto___42324))
})();
var inst_42244__$1 = cljs.core.mapv.call(null,inst_42243,inst_42232);
var inst_42245 = app.validation.valid_titles_QMARK_.call(null,inst_42244__$1);
var inst_42246 = cljs.core.not.call(null,inst_42245);
var state_42282__$1 = (function (){var statearr_42305 = state_42282;
(statearr_42305[(9)] = inst_42244__$1);

return statearr_42305;
})();
if(inst_42246){
var statearr_42306_42343 = state_42282__$1;
(statearr_42306_42343[(1)] = (14));

} else {
var statearr_42307_42344 = state_42282__$1;
(statearr_42307_42344[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (9))){
var state_42282__$1 = state_42282;
var statearr_42308_42345 = state_42282__$1;
(statearr_42308_42345[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (5))){
var inst_42235 = app.common.write_error_to_state.call(null,"Your file is empty!",true);
var state_42282__$1 = state_42282;
var statearr_42310_42346 = state_42282__$1;
(statearr_42310_42346[(2)] = inst_42235);

(statearr_42310_42346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (14))){
var inst_42248 = app.common.write_error_to_state.call(null,"Titles should be no longer than 20 symbols!",true);
var state_42282__$1 = state_42282;
var statearr_42311_42347 = state_42282__$1;
(statearr_42311_42347[(2)] = inst_42248);

(statearr_42311_42347[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (16))){
var inst_42270 = (state_42282[(2)]);
var state_42282__$1 = state_42282;
var statearr_42312_42348 = state_42282__$1;
(statearr_42312_42348[(2)] = inst_42270);

(statearr_42312_42348[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (10))){
var inst_42275 = (state_42282[(2)]);
var state_42282__$1 = state_42282;
var statearr_42313_42349 = state_42282__$1;
(statearr_42313_42349[(2)] = inst_42275);

(statearr_42313_42349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (18))){
var inst_42244 = (state_42282[(9)]);
var inst_42255 = app.validation.valid_second_col_QMARK_.call(null,inst_42244);
var inst_42256 = cljs.core.not.call(null,inst_42255);
var state_42282__$1 = state_42282;
if(inst_42256){
var statearr_42314_42350 = state_42282__$1;
(statearr_42314_42350[(1)] = (20));

} else {
var statearr_42315_42351 = state_42282__$1;
(statearr_42315_42351[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42283 === (8))){
var inst_42240 = app.common.write_error_to_state.call(null,"Wrong number of columns!",true);
var state_42282__$1 = state_42282;
var statearr_42316_42352 = state_42282__$1;
(statearr_42316_42352[(2)] = inst_42240);

(statearr_42316_42352[(1)] = (10));


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
});})(c__32008__auto___42324))
;
return ((function (switch__31894__auto__,c__32008__auto___42324){
return (function() {
var app$upload$state_machine__31895__auto__ = null;
var app$upload$state_machine__31895__auto____0 = (function (){
var statearr_42320 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42320[(0)] = app$upload$state_machine__31895__auto__);

(statearr_42320[(1)] = (1));

return statearr_42320;
});
var app$upload$state_machine__31895__auto____1 = (function (state_42282){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_42282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e42321){if((e42321 instanceof Object)){
var ex__31898__auto__ = e42321;
var statearr_42322_42353 = state_42282;
(statearr_42322_42353[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42354 = state_42282;
state_42282 = G__42354;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
app$upload$state_machine__31895__auto__ = function(state_42282){
switch(arguments.length){
case 0:
return app$upload$state_machine__31895__auto____0.call(this);
case 1:
return app$upload$state_machine__31895__auto____1.call(this,state_42282);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$upload$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = app$upload$state_machine__31895__auto____0;
app$upload$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = app$upload$state_machine__31895__auto____1;
return app$upload$state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto___42324))
})();
var state__32010__auto__ = (function (){var statearr_42323 = f__32009__auto__.call(null);
(statearr_42323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___42324);

return statearr_42323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto___42324))
);

app.upload.input_upload = rum.core.build_defc.call(null,(function (error_msg){
return React.createElement("div",({"className": "container upload"}),((cljs.core._EQ_.call(null,error_msg,""))?React.createElement("p",({"className": "upload-title"}),"Upload a .csv-file that is no more than 10Kb."):React.createElement("p",({"className": "upload-error"}),sablono.interpreter.interpret.call(null,error_msg))),React.createElement("label",({"className": "upload-label", "htmlFor": "upload-input"}),"Upload",sablono.interpreter.create_element.call(null,"input",({"type": "file", "id": "upload-input", "onChange": app.upload.handle_change, "className": "upload-input"}))));
}),null,"input-upload");

//# sourceMappingURL=upload.js.map?rel=1513965929279