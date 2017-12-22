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
app.upload.extract_result = cljs.core.map.call(null,(function (p1__42612_SHARP_){
return cljs.core.js__GT_clj.call(null,goog.labs.format.csv.parse(p1__42612_SHARP_.target.result));
}));
app.upload.upload_reqs = cljs.core.async.chan.call(null,(1),app.upload.first_file);
app.upload.file_reads = cljs.core.async.chan.call(null,(1),app.upload.extract_result);
app.upload.handle_change = (function app$upload$handle_change(e){
return cljs.core.async.put_BANG_.call(null,app.upload.upload_reqs,e);
});
var c__32008__auto___42672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto___42672){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto___42672){
return (function (state_42645){
var state_val_42646 = (state_42645[(1)]);
if((state_val_42646 === (7))){
var inst_42640 = (state_42645[(2)]);
var state_42645__$1 = (function (){var statearr_42647 = state_42645;
(statearr_42647[(7)] = inst_42640);

return statearr_42647;
})();
var statearr_42648_42673 = state_42645__$1;
(statearr_42648_42673[(2)] = null);

(statearr_42648_42673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42646 === (1))){
var state_42645__$1 = state_42645;
var statearr_42649_42674 = state_42645__$1;
(statearr_42649_42674[(2)] = null);

(statearr_42649_42674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42646 === (4))){
var inst_42617 = (state_42645[(8)]);
var inst_42617__$1 = (state_42645[(2)]);
var inst_42618 = app.validation.valid_file_type_QMARK_.call(null,inst_42617__$1);
var inst_42619 = cljs.core.not.call(null,inst_42618);
var state_42645__$1 = (function (){var statearr_42650 = state_42645;
(statearr_42650[(8)] = inst_42617__$1);

return statearr_42650;
})();
if(inst_42619){
var statearr_42651_42675 = state_42645__$1;
(statearr_42651_42675[(1)] = (5));

} else {
var statearr_42652_42676 = state_42645__$1;
(statearr_42652_42676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42646 === (13))){
var inst_42636 = (state_42645[(2)]);
var state_42645__$1 = state_42645;
var statearr_42653_42677 = state_42645__$1;
(statearr_42653_42677[(2)] = inst_42636);

(statearr_42653_42677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42646 === (6))){
var inst_42617 = (state_42645[(8)]);
var inst_42623 = app.validation.valid_file_size_QMARK_.call(null,inst_42617);
var inst_42624 = cljs.core.not.call(null,inst_42623);
var state_42645__$1 = state_42645;
if(inst_42624){
var statearr_42654_42678 = state_42645__$1;
(statearr_42654_42678[(1)] = (8));

} else {
var statearr_42655_42679 = state_42645__$1;
(statearr_42655_42679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42646 === (3))){
var inst_42643 = (state_42645[(2)]);
var state_42645__$1 = state_42645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42645__$1,inst_42643);
} else {
if((state_val_42646 === (12))){
var state_42645__$1 = state_42645;
var statearr_42656_42680 = state_42645__$1;
(statearr_42656_42680[(2)] = null);

(statearr_42656_42680[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42646 === (2))){
var inst_42615 = (new FileReader());
var state_42645__$1 = (function (){var statearr_42657 = state_42645;
(statearr_42657[(9)] = inst_42615);

return statearr_42657;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42645__$1,(4),app.upload.upload_reqs);
} else {
if((state_val_42646 === (11))){
var inst_42615 = (state_42645[(9)]);
var inst_42617 = (state_42645[(8)]);
var inst_42629 = inst_42617.name;
var inst_42630 = cljs.core.swap_BANG_.call(null,app.common.state,cljs.core.assoc,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),inst_42629,new cljs.core.Keyword(null,"file-error","file-error",1419078490),"");
var inst_42631 = (function (){var reader = inst_42615;
var file = inst_42617;
return ((function (reader,file,inst_42615,inst_42617,inst_42629,inst_42630,state_val_42646,c__32008__auto___42672){
return (function (p1__42613_SHARP_){
return cljs.core.async.put_BANG_.call(null,app.upload.file_reads,p1__42613_SHARP_);
});
;})(reader,file,inst_42615,inst_42617,inst_42629,inst_42630,state_val_42646,c__32008__auto___42672))
})();
var inst_42632 = inst_42615.onload = inst_42631;
var inst_42633 = inst_42615.readAsText(inst_42617);
var state_42645__$1 = (function (){var statearr_42658 = state_42645;
(statearr_42658[(10)] = inst_42630);

(statearr_42658[(11)] = inst_42632);

return statearr_42658;
})();
var statearr_42659_42681 = state_42645__$1;
(statearr_42659_42681[(2)] = inst_42633);

(statearr_42659_42681[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42646 === (9))){
var state_42645__$1 = state_42645;
var statearr_42660_42682 = state_42645__$1;
(statearr_42660_42682[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42646 === (5))){
var inst_42621 = app.common.write_error_to_state.call(null,"Upload a .csv-file!",false);
var state_42645__$1 = state_42645;
var statearr_42662_42683 = state_42645__$1;
(statearr_42662_42683[(2)] = inst_42621);

(statearr_42662_42683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42646 === (10))){
var inst_42638 = (state_42645[(2)]);
var state_42645__$1 = state_42645;
var statearr_42663_42684 = state_42645__$1;
(statearr_42663_42684[(2)] = inst_42638);

(statearr_42663_42684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42646 === (8))){
var inst_42626 = app.common.write_error_to_state.call(null,"File should be no more than 10Kb!",false);
var state_42645__$1 = state_42645;
var statearr_42664_42685 = state_42645__$1;
(statearr_42664_42685[(2)] = inst_42626);

(statearr_42664_42685[(1)] = (10));


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
});})(c__32008__auto___42672))
;
return ((function (switch__31894__auto__,c__32008__auto___42672){
return (function() {
var app$upload$state_machine__31895__auto__ = null;
var app$upload$state_machine__31895__auto____0 = (function (){
var statearr_42668 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42668[(0)] = app$upload$state_machine__31895__auto__);

(statearr_42668[(1)] = (1));

return statearr_42668;
});
var app$upload$state_machine__31895__auto____1 = (function (state_42645){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_42645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e42669){if((e42669 instanceof Object)){
var ex__31898__auto__ = e42669;
var statearr_42670_42686 = state_42645;
(statearr_42670_42686[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42687 = state_42645;
state_42645 = G__42687;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
app$upload$state_machine__31895__auto__ = function(state_42645){
switch(arguments.length){
case 0:
return app$upload$state_machine__31895__auto____0.call(this);
case 1:
return app$upload$state_machine__31895__auto____1.call(this,state_42645);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$upload$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = app$upload$state_machine__31895__auto____0;
app$upload$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = app$upload$state_machine__31895__auto____1;
return app$upload$state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto___42672))
})();
var state__32010__auto__ = (function (){var statearr_42671 = f__32009__auto__.call(null);
(statearr_42671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___42672);

return statearr_42671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto___42672))
);

var c__32008__auto___42783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto___42783){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto___42783){
return (function (state_42741){
var state_val_42742 = (state_42741[(1)]);
if((state_val_42742 === (7))){
var inst_42736 = (state_42741[(2)]);
var state_42741__$1 = (function (){var statearr_42743 = state_42741;
(statearr_42743[(7)] = inst_42736);

return statearr_42743;
})();
var statearr_42744_42784 = state_42741__$1;
(statearr_42744_42784[(2)] = null);

(statearr_42744_42784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (20))){
var inst_42717 = app.common.write_error_to_state.call(null,"Data in second column should be a number!",true);
var state_42741__$1 = state_42741;
var statearr_42745_42785 = state_42741__$1;
(statearr_42745_42785[(2)] = inst_42717);

(statearr_42745_42785[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (1))){
var state_42741__$1 = state_42741;
var statearr_42746_42786 = state_42741__$1;
(statearr_42746_42786[(2)] = null);

(statearr_42746_42786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (24))){
var state_42741__$1 = state_42741;
var statearr_42747_42787 = state_42741__$1;
(statearr_42747_42787[(2)] = null);

(statearr_42747_42787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (4))){
var inst_42691 = (state_42741[(8)]);
var inst_42691__$1 = (state_42741[(2)]);
var inst_42692 = cljs.core.empty_QMARK_.call(null,inst_42691__$1);
var state_42741__$1 = (function (){var statearr_42748 = state_42741;
(statearr_42748[(8)] = inst_42691__$1);

return statearr_42748;
})();
if(inst_42692){
var statearr_42749_42788 = state_42741__$1;
(statearr_42749_42788[(1)] = (5));

} else {
var statearr_42750_42789 = state_42741__$1;
(statearr_42750_42789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (15))){
var inst_42703 = (state_42741[(9)]);
var inst_42709 = app.validation.valid_first_col_QMARK_.call(null,inst_42703);
var inst_42710 = cljs.core.not.call(null,inst_42709);
var state_42741__$1 = state_42741;
if(inst_42710){
var statearr_42751_42790 = state_42741__$1;
(statearr_42751_42790[(1)] = (17));

} else {
var statearr_42752_42791 = state_42741__$1;
(statearr_42752_42791[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (21))){
var state_42741__$1 = state_42741;
var statearr_42753_42792 = state_42741__$1;
(statearr_42753_42792[(1)] = (23));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (13))){
var inst_42732 = (state_42741[(2)]);
var state_42741__$1 = state_42741;
var statearr_42755_42793 = state_42741__$1;
(statearr_42755_42793[(2)] = inst_42732);

(statearr_42755_42793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (22))){
var inst_42725 = (state_42741[(2)]);
var state_42741__$1 = state_42741;
var statearr_42756_42794 = state_42741__$1;
(statearr_42756_42794[(2)] = inst_42725);

(statearr_42756_42794[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (6))){
var inst_42691 = (state_42741[(8)]);
var inst_42696 = app.validation.valid_cols_QMARK_.call(null,inst_42691);
var inst_42697 = cljs.core.not.call(null,inst_42696);
var state_42741__$1 = state_42741;
if(inst_42697){
var statearr_42757_42795 = state_42741__$1;
(statearr_42757_42795[(1)] = (8));

} else {
var statearr_42758_42796 = state_42741__$1;
(statearr_42758_42796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (25))){
var inst_42723 = (state_42741[(2)]);
var state_42741__$1 = state_42741;
var statearr_42759_42797 = state_42741__$1;
(statearr_42759_42797[(2)] = inst_42723);

(statearr_42759_42797[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (17))){
var inst_42712 = app.common.write_error_to_state.call(null,"Data in first column should be a no longer than 20 symbols!",true);
var state_42741__$1 = state_42741;
var statearr_42760_42798 = state_42741__$1;
(statearr_42760_42798[(2)] = inst_42712);

(statearr_42760_42798[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (3))){
var inst_42739 = (state_42741[(2)]);
var state_42741__$1 = state_42741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42741__$1,inst_42739);
} else {
if((state_val_42742 === (12))){
var state_42741__$1 = state_42741;
var statearr_42761_42799 = state_42741__$1;
(statearr_42761_42799[(2)] = null);

(statearr_42761_42799[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (2))){
var state_42741__$1 = state_42741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42741__$1,(4),app.upload.file_reads);
} else {
if((state_val_42742 === (23))){
var inst_42703 = (state_42741[(9)]);
var inst_42720 = cljs.core.swap_BANG_.call(null,app.common.state,cljs.core.assoc,new cljs.core.Keyword(null,"file-content","file-content",-1595262238),inst_42703,new cljs.core.Keyword(null,"file-error","file-error",1419078490),"");
var state_42741__$1 = state_42741;
var statearr_42762_42800 = state_42741__$1;
(statearr_42762_42800[(2)] = inst_42720);

(statearr_42762_42800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (19))){
var inst_42727 = (state_42741[(2)]);
var state_42741__$1 = state_42741;
var statearr_42763_42801 = state_42741__$1;
(statearr_42763_42801[(2)] = inst_42727);

(statearr_42763_42801[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (11))){
var inst_42691 = (state_42741[(8)]);
var inst_42703 = (state_42741[(9)]);
var inst_42702 = (function (){var content = inst_42691;
return ((function (content,inst_42691,inst_42703,state_val_42742,c__32008__auto___42783){
return (function (p1__42688_SHARP_){
return cljs.core.mapv.call(null,((function (content,inst_42691,inst_42703,state_val_42742,c__32008__auto___42783){
return (function (arg){
return arg.trim();
});})(content,inst_42691,inst_42703,state_val_42742,c__32008__auto___42783))
,p1__42688_SHARP_);
});
;})(content,inst_42691,inst_42703,state_val_42742,c__32008__auto___42783))
})();
var inst_42703__$1 = cljs.core.mapv.call(null,inst_42702,inst_42691);
var inst_42704 = app.validation.valid_titles_QMARK_.call(null,inst_42703__$1);
var inst_42705 = cljs.core.not.call(null,inst_42704);
var state_42741__$1 = (function (){var statearr_42764 = state_42741;
(statearr_42764[(9)] = inst_42703__$1);

return statearr_42764;
})();
if(inst_42705){
var statearr_42765_42802 = state_42741__$1;
(statearr_42765_42802[(1)] = (14));

} else {
var statearr_42766_42803 = state_42741__$1;
(statearr_42766_42803[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (9))){
var state_42741__$1 = state_42741;
var statearr_42767_42804 = state_42741__$1;
(statearr_42767_42804[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (5))){
var inst_42694 = app.common.write_error_to_state.call(null,"Your file is empty!",true);
var state_42741__$1 = state_42741;
var statearr_42769_42805 = state_42741__$1;
(statearr_42769_42805[(2)] = inst_42694);

(statearr_42769_42805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (14))){
var inst_42707 = app.common.write_error_to_state.call(null,"Titles should be no longer than 20 symbols!",true);
var state_42741__$1 = state_42741;
var statearr_42770_42806 = state_42741__$1;
(statearr_42770_42806[(2)] = inst_42707);

(statearr_42770_42806[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (16))){
var inst_42729 = (state_42741[(2)]);
var state_42741__$1 = state_42741;
var statearr_42771_42807 = state_42741__$1;
(statearr_42771_42807[(2)] = inst_42729);

(statearr_42771_42807[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (10))){
var inst_42734 = (state_42741[(2)]);
var state_42741__$1 = state_42741;
var statearr_42772_42808 = state_42741__$1;
(statearr_42772_42808[(2)] = inst_42734);

(statearr_42772_42808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (18))){
var inst_42703 = (state_42741[(9)]);
var inst_42714 = app.validation.valid_second_col_QMARK_.call(null,inst_42703);
var inst_42715 = cljs.core.not.call(null,inst_42714);
var state_42741__$1 = state_42741;
if(inst_42715){
var statearr_42773_42809 = state_42741__$1;
(statearr_42773_42809[(1)] = (20));

} else {
var statearr_42774_42810 = state_42741__$1;
(statearr_42774_42810[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (8))){
var inst_42699 = app.common.write_error_to_state.call(null,"Wrong number of columns!",true);
var state_42741__$1 = state_42741;
var statearr_42775_42811 = state_42741__$1;
(statearr_42775_42811[(2)] = inst_42699);

(statearr_42775_42811[(1)] = (10));


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
});})(c__32008__auto___42783))
;
return ((function (switch__31894__auto__,c__32008__auto___42783){
return (function() {
var app$upload$state_machine__31895__auto__ = null;
var app$upload$state_machine__31895__auto____0 = (function (){
var statearr_42779 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42779[(0)] = app$upload$state_machine__31895__auto__);

(statearr_42779[(1)] = (1));

return statearr_42779;
});
var app$upload$state_machine__31895__auto____1 = (function (state_42741){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_42741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e42780){if((e42780 instanceof Object)){
var ex__31898__auto__ = e42780;
var statearr_42781_42812 = state_42741;
(statearr_42781_42812[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42813 = state_42741;
state_42741 = G__42813;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
app$upload$state_machine__31895__auto__ = function(state_42741){
switch(arguments.length){
case 0:
return app$upload$state_machine__31895__auto____0.call(this);
case 1:
return app$upload$state_machine__31895__auto____1.call(this,state_42741);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$upload$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = app$upload$state_machine__31895__auto____0;
app$upload$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = app$upload$state_machine__31895__auto____1;
return app$upload$state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto___42783))
})();
var state__32010__auto__ = (function (){var statearr_42782 = f__32009__auto__.call(null);
(statearr_42782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___42783);

return statearr_42782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto___42783))
);

app.upload.input_upload = rum.core.build_defc.call(null,(function (error_msg){
return React.createElement("div",({"className": "container upload"}),((cljs.core._EQ_.call(null,error_msg,""))?React.createElement("p",({"className": "upload-title"}),"Upload a .csv-file that is no more than 5Kb."):React.createElement("p",({"className": "upload-error"}),sablono.interpreter.interpret.call(null,error_msg))),React.createElement("label",({"className": "upload-label", "htmlFor": "upload-input"}),"Upload",sablono.interpreter.create_element.call(null,"input",({"type": "file", "id": "upload-input", "onChange": app.upload.handle_change, "className": "upload-input"}))));
}),null,"input-upload");

//# sourceMappingURL=upload.js.map?rel=1513968672581