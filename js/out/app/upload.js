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
app.upload.extract_result = cljs.core.map.call(null,(function (p1__32864_SHARP_){
return cljs.core.js__GT_clj.call(null,goog.labs.format.csv.parse(p1__32864_SHARP_.target.result));
}));
app.upload.upload_reqs = cljs.core.async.chan.call(null,(1),app.upload.first_file);
app.upload.file_reads = cljs.core.async.chan.call(null,(1),app.upload.extract_result);
app.upload.handle_change = (function app$upload$handle_change(e){
return cljs.core.async.put_BANG_.call(null,app.upload.upload_reqs,e);
});
var c__32786__auto___32924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32786__auto___32924){
return (function (){
var f__32787__auto__ = (function (){var switch__32763__auto__ = ((function (c__32786__auto___32924){
return (function (state_32897){
var state_val_32898 = (state_32897[(1)]);
if((state_val_32898 === (7))){
var inst_32892 = (state_32897[(2)]);
var state_32897__$1 = (function (){var statearr_32899 = state_32897;
(statearr_32899[(7)] = inst_32892);

return statearr_32899;
})();
var statearr_32900_32925 = state_32897__$1;
(statearr_32900_32925[(2)] = null);

(statearr_32900_32925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (1))){
var state_32897__$1 = state_32897;
var statearr_32901_32926 = state_32897__$1;
(statearr_32901_32926[(2)] = null);

(statearr_32901_32926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (4))){
var inst_32869 = (state_32897[(8)]);
var inst_32869__$1 = (state_32897[(2)]);
var inst_32870 = app.validation.valid_file_type_QMARK_.call(null,inst_32869__$1);
var inst_32871 = cljs.core.not.call(null,inst_32870);
var state_32897__$1 = (function (){var statearr_32902 = state_32897;
(statearr_32902[(8)] = inst_32869__$1);

return statearr_32902;
})();
if(inst_32871){
var statearr_32903_32927 = state_32897__$1;
(statearr_32903_32927[(1)] = (5));

} else {
var statearr_32904_32928 = state_32897__$1;
(statearr_32904_32928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (13))){
var inst_32888 = (state_32897[(2)]);
var state_32897__$1 = state_32897;
var statearr_32905_32929 = state_32897__$1;
(statearr_32905_32929[(2)] = inst_32888);

(statearr_32905_32929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (6))){
var inst_32869 = (state_32897[(8)]);
var inst_32875 = app.validation.valid_file_size_QMARK_.call(null,inst_32869);
var inst_32876 = cljs.core.not.call(null,inst_32875);
var state_32897__$1 = state_32897;
if(inst_32876){
var statearr_32906_32930 = state_32897__$1;
(statearr_32906_32930[(1)] = (8));

} else {
var statearr_32907_32931 = state_32897__$1;
(statearr_32907_32931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (3))){
var inst_32895 = (state_32897[(2)]);
var state_32897__$1 = state_32897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32897__$1,inst_32895);
} else {
if((state_val_32898 === (12))){
var state_32897__$1 = state_32897;
var statearr_32908_32932 = state_32897__$1;
(statearr_32908_32932[(2)] = null);

(statearr_32908_32932[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (2))){
var inst_32867 = (new FileReader());
var state_32897__$1 = (function (){var statearr_32909 = state_32897;
(statearr_32909[(9)] = inst_32867);

return statearr_32909;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32897__$1,(4),app.upload.upload_reqs);
} else {
if((state_val_32898 === (11))){
var inst_32867 = (state_32897[(9)]);
var inst_32869 = (state_32897[(8)]);
var inst_32881 = inst_32869.name;
var inst_32882 = cljs.core.swap_BANG_.call(null,app.common.state,cljs.core.assoc,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),inst_32881,new cljs.core.Keyword(null,"file-error","file-error",1419078490),"");
var inst_32883 = (function (){var reader = inst_32867;
var file = inst_32869;
return ((function (reader,file,inst_32867,inst_32869,inst_32881,inst_32882,state_val_32898,c__32786__auto___32924){
return (function (p1__32865_SHARP_){
return cljs.core.async.put_BANG_.call(null,app.upload.file_reads,p1__32865_SHARP_);
});
;})(reader,file,inst_32867,inst_32869,inst_32881,inst_32882,state_val_32898,c__32786__auto___32924))
})();
var inst_32884 = inst_32867.onload = inst_32883;
var inst_32885 = inst_32867.readAsText(inst_32869);
var state_32897__$1 = (function (){var statearr_32910 = state_32897;
(statearr_32910[(10)] = inst_32882);

(statearr_32910[(11)] = inst_32884);

return statearr_32910;
})();
var statearr_32911_32933 = state_32897__$1;
(statearr_32911_32933[(2)] = inst_32885);

(statearr_32911_32933[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (9))){
var state_32897__$1 = state_32897;
var statearr_32912_32934 = state_32897__$1;
(statearr_32912_32934[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (5))){
var inst_32873 = app.common.write_error_to_state.call(null,"Upload a .csv-file!",false);
var state_32897__$1 = state_32897;
var statearr_32914_32935 = state_32897__$1;
(statearr_32914_32935[(2)] = inst_32873);

(statearr_32914_32935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (10))){
var inst_32890 = (state_32897[(2)]);
var state_32897__$1 = state_32897;
var statearr_32915_32936 = state_32897__$1;
(statearr_32915_32936[(2)] = inst_32890);

(statearr_32915_32936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (8))){
var inst_32878 = app.common.write_error_to_state.call(null,"File should be no more than 10Kb!",false);
var state_32897__$1 = state_32897;
var statearr_32916_32937 = state_32897__$1;
(statearr_32916_32937[(2)] = inst_32878);

(statearr_32916_32937[(1)] = (10));


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
});})(c__32786__auto___32924))
;
return ((function (switch__32763__auto__,c__32786__auto___32924){
return (function() {
var app$upload$state_machine__32764__auto__ = null;
var app$upload$state_machine__32764__auto____0 = (function (){
var statearr_32920 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32920[(0)] = app$upload$state_machine__32764__auto__);

(statearr_32920[(1)] = (1));

return statearr_32920;
});
var app$upload$state_machine__32764__auto____1 = (function (state_32897){
while(true){
var ret_value__32765__auto__ = (function (){try{while(true){
var result__32766__auto__ = switch__32763__auto__.call(null,state_32897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32766__auto__;
}
break;
}
}catch (e32921){if((e32921 instanceof Object)){
var ex__32767__auto__ = e32921;
var statearr_32922_32938 = state_32897;
(statearr_32922_32938[(5)] = ex__32767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32939 = state_32897;
state_32897 = G__32939;
continue;
} else {
return ret_value__32765__auto__;
}
break;
}
});
app$upload$state_machine__32764__auto__ = function(state_32897){
switch(arguments.length){
case 0:
return app$upload$state_machine__32764__auto____0.call(this);
case 1:
return app$upload$state_machine__32764__auto____1.call(this,state_32897);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$upload$state_machine__32764__auto__.cljs$core$IFn$_invoke$arity$0 = app$upload$state_machine__32764__auto____0;
app$upload$state_machine__32764__auto__.cljs$core$IFn$_invoke$arity$1 = app$upload$state_machine__32764__auto____1;
return app$upload$state_machine__32764__auto__;
})()
;})(switch__32763__auto__,c__32786__auto___32924))
})();
var state__32788__auto__ = (function (){var statearr_32923 = f__32787__auto__.call(null);
(statearr_32923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32786__auto___32924);

return statearr_32923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32788__auto__);
});})(c__32786__auto___32924))
);

var c__32786__auto___33035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32786__auto___33035){
return (function (){
var f__32787__auto__ = (function (){var switch__32763__auto__ = ((function (c__32786__auto___33035){
return (function (state_32993){
var state_val_32994 = (state_32993[(1)]);
if((state_val_32994 === (7))){
var inst_32988 = (state_32993[(2)]);
var state_32993__$1 = (function (){var statearr_32995 = state_32993;
(statearr_32995[(7)] = inst_32988);

return statearr_32995;
})();
var statearr_32996_33036 = state_32993__$1;
(statearr_32996_33036[(2)] = null);

(statearr_32996_33036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (20))){
var inst_32969 = app.common.write_error_to_state.call(null,"Data in second column should be a number!",true);
var state_32993__$1 = state_32993;
var statearr_32997_33037 = state_32993__$1;
(statearr_32997_33037[(2)] = inst_32969);

(statearr_32997_33037[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (1))){
var state_32993__$1 = state_32993;
var statearr_32998_33038 = state_32993__$1;
(statearr_32998_33038[(2)] = null);

(statearr_32998_33038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (24))){
var state_32993__$1 = state_32993;
var statearr_32999_33039 = state_32993__$1;
(statearr_32999_33039[(2)] = null);

(statearr_32999_33039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (4))){
var inst_32943 = (state_32993[(8)]);
var inst_32943__$1 = (state_32993[(2)]);
var inst_32944 = cljs.core.empty_QMARK_.call(null,inst_32943__$1);
var state_32993__$1 = (function (){var statearr_33000 = state_32993;
(statearr_33000[(8)] = inst_32943__$1);

return statearr_33000;
})();
if(inst_32944){
var statearr_33001_33040 = state_32993__$1;
(statearr_33001_33040[(1)] = (5));

} else {
var statearr_33002_33041 = state_32993__$1;
(statearr_33002_33041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (15))){
var inst_32955 = (state_32993[(9)]);
var inst_32961 = app.validation.valid_first_col_QMARK_.call(null,inst_32955);
var inst_32962 = cljs.core.not.call(null,inst_32961);
var state_32993__$1 = state_32993;
if(inst_32962){
var statearr_33003_33042 = state_32993__$1;
(statearr_33003_33042[(1)] = (17));

} else {
var statearr_33004_33043 = state_32993__$1;
(statearr_33004_33043[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (21))){
var state_32993__$1 = state_32993;
var statearr_33005_33044 = state_32993__$1;
(statearr_33005_33044[(1)] = (23));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (13))){
var inst_32984 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
var statearr_33007_33045 = state_32993__$1;
(statearr_33007_33045[(2)] = inst_32984);

(statearr_33007_33045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (22))){
var inst_32977 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
var statearr_33008_33046 = state_32993__$1;
(statearr_33008_33046[(2)] = inst_32977);

(statearr_33008_33046[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (6))){
var inst_32943 = (state_32993[(8)]);
var inst_32948 = app.validation.valid_cols_QMARK_.call(null,inst_32943);
var inst_32949 = cljs.core.not.call(null,inst_32948);
var state_32993__$1 = state_32993;
if(inst_32949){
var statearr_33009_33047 = state_32993__$1;
(statearr_33009_33047[(1)] = (8));

} else {
var statearr_33010_33048 = state_32993__$1;
(statearr_33010_33048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (25))){
var inst_32975 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
var statearr_33011_33049 = state_32993__$1;
(statearr_33011_33049[(2)] = inst_32975);

(statearr_33011_33049[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (17))){
var inst_32964 = app.common.write_error_to_state.call(null,"Data in first column should be a no longer than 20 symbols!",true);
var state_32993__$1 = state_32993;
var statearr_33012_33050 = state_32993__$1;
(statearr_33012_33050[(2)] = inst_32964);

(statearr_33012_33050[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (3))){
var inst_32991 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32993__$1,inst_32991);
} else {
if((state_val_32994 === (12))){
var state_32993__$1 = state_32993;
var statearr_33013_33051 = state_32993__$1;
(statearr_33013_33051[(2)] = null);

(statearr_33013_33051[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (2))){
var state_32993__$1 = state_32993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32993__$1,(4),app.upload.file_reads);
} else {
if((state_val_32994 === (23))){
var inst_32955 = (state_32993[(9)]);
var inst_32972 = cljs.core.swap_BANG_.call(null,app.common.state,cljs.core.assoc,new cljs.core.Keyword(null,"file-content","file-content",-1595262238),inst_32955,new cljs.core.Keyword(null,"file-error","file-error",1419078490),"");
var state_32993__$1 = state_32993;
var statearr_33014_33052 = state_32993__$1;
(statearr_33014_33052[(2)] = inst_32972);

(statearr_33014_33052[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (19))){
var inst_32979 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
var statearr_33015_33053 = state_32993__$1;
(statearr_33015_33053[(2)] = inst_32979);

(statearr_33015_33053[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (11))){
var inst_32943 = (state_32993[(8)]);
var inst_32955 = (state_32993[(9)]);
var inst_32954 = (function (){var content = inst_32943;
return ((function (content,inst_32943,inst_32955,state_val_32994,c__32786__auto___33035){
return (function (p1__32940_SHARP_){
return cljs.core.mapv.call(null,((function (content,inst_32943,inst_32955,state_val_32994,c__32786__auto___33035){
return (function (arg){
return arg.trim();
});})(content,inst_32943,inst_32955,state_val_32994,c__32786__auto___33035))
,p1__32940_SHARP_);
});
;})(content,inst_32943,inst_32955,state_val_32994,c__32786__auto___33035))
})();
var inst_32955__$1 = cljs.core.mapv.call(null,inst_32954,inst_32943);
var inst_32956 = app.validation.valid_titles_QMARK_.call(null,inst_32955__$1);
var inst_32957 = cljs.core.not.call(null,inst_32956);
var state_32993__$1 = (function (){var statearr_33016 = state_32993;
(statearr_33016[(9)] = inst_32955__$1);

return statearr_33016;
})();
if(inst_32957){
var statearr_33017_33054 = state_32993__$1;
(statearr_33017_33054[(1)] = (14));

} else {
var statearr_33018_33055 = state_32993__$1;
(statearr_33018_33055[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (9))){
var state_32993__$1 = state_32993;
var statearr_33019_33056 = state_32993__$1;
(statearr_33019_33056[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (5))){
var inst_32946 = app.common.write_error_to_state.call(null,"Your file is empty!",true);
var state_32993__$1 = state_32993;
var statearr_33021_33057 = state_32993__$1;
(statearr_33021_33057[(2)] = inst_32946);

(statearr_33021_33057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (14))){
var inst_32959 = app.common.write_error_to_state.call(null,"Titles should be no longer than 20 symbols!",true);
var state_32993__$1 = state_32993;
var statearr_33022_33058 = state_32993__$1;
(statearr_33022_33058[(2)] = inst_32959);

(statearr_33022_33058[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (16))){
var inst_32981 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
var statearr_33023_33059 = state_32993__$1;
(statearr_33023_33059[(2)] = inst_32981);

(statearr_33023_33059[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (10))){
var inst_32986 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
var statearr_33024_33060 = state_32993__$1;
(statearr_33024_33060[(2)] = inst_32986);

(statearr_33024_33060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (18))){
var inst_32955 = (state_32993[(9)]);
var inst_32966 = app.validation.valid_second_col_QMARK_.call(null,inst_32955);
var inst_32967 = cljs.core.not.call(null,inst_32966);
var state_32993__$1 = state_32993;
if(inst_32967){
var statearr_33025_33061 = state_32993__$1;
(statearr_33025_33061[(1)] = (20));

} else {
var statearr_33026_33062 = state_32993__$1;
(statearr_33026_33062[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (8))){
var inst_32951 = app.common.write_error_to_state.call(null,"Wrong number of columns!",true);
var state_32993__$1 = state_32993;
var statearr_33027_33063 = state_32993__$1;
(statearr_33027_33063[(2)] = inst_32951);

(statearr_33027_33063[(1)] = (10));


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
});})(c__32786__auto___33035))
;
return ((function (switch__32763__auto__,c__32786__auto___33035){
return (function() {
var app$upload$state_machine__32764__auto__ = null;
var app$upload$state_machine__32764__auto____0 = (function (){
var statearr_33031 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33031[(0)] = app$upload$state_machine__32764__auto__);

(statearr_33031[(1)] = (1));

return statearr_33031;
});
var app$upload$state_machine__32764__auto____1 = (function (state_32993){
while(true){
var ret_value__32765__auto__ = (function (){try{while(true){
var result__32766__auto__ = switch__32763__auto__.call(null,state_32993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32766__auto__;
}
break;
}
}catch (e33032){if((e33032 instanceof Object)){
var ex__32767__auto__ = e33032;
var statearr_33033_33064 = state_32993;
(statearr_33033_33064[(5)] = ex__32767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33065 = state_32993;
state_32993 = G__33065;
continue;
} else {
return ret_value__32765__auto__;
}
break;
}
});
app$upload$state_machine__32764__auto__ = function(state_32993){
switch(arguments.length){
case 0:
return app$upload$state_machine__32764__auto____0.call(this);
case 1:
return app$upload$state_machine__32764__auto____1.call(this,state_32993);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$upload$state_machine__32764__auto__.cljs$core$IFn$_invoke$arity$0 = app$upload$state_machine__32764__auto____0;
app$upload$state_machine__32764__auto__.cljs$core$IFn$_invoke$arity$1 = app$upload$state_machine__32764__auto____1;
return app$upload$state_machine__32764__auto__;
})()
;})(switch__32763__auto__,c__32786__auto___33035))
})();
var state__32788__auto__ = (function (){var statearr_33034 = f__32787__auto__.call(null);
(statearr_33034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32786__auto___33035);

return statearr_33034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32788__auto__);
});})(c__32786__auto___33035))
);

app.upload.input_upload = rum.core.build_defc.call(null,(function (error_msg){
return React.createElement("div",({"className": "container upload"}),((cljs.core._EQ_.call(null,error_msg,""))?React.createElement("p",({"className": "upload-title"}),"Upload a .csv-file that is no more than 5Kb."):React.createElement("p",({"className": "upload-error"}),sablono.interpreter.interpret.call(null,error_msg))),React.createElement("label",({"className": "upload-label", "htmlFor": "upload-input"}),"Upload",sablono.interpreter.create_element.call(null,"input",({"type": "file", "id": "upload-input", "onChange": app.upload.handle_change, "className": "upload-input"}))));
}),null,"input-upload");

//# sourceMappingURL=upload.js.map?rel=1513969495967