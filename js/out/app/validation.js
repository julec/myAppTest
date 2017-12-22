// Compiled by ClojureScript 1.9.521 {}
goog.provide('app.validation');
goog.require('cljs.core');
goog.require('rum.core');
app.validation.valid_file_type_QMARK_ = (function app$validation$valid_file_type_QMARK_(file){
if(cljs.core.truth_(cljs.core.re_find.call(null,/\.csv/,file.name))){
return file;
} else {
return false;
}
});
app.validation.valid_file_size_QMARK_ = (function app$validation$valid_file_size_QMARK_(file){
if((file.size < ((5) * (1024)))){
return file;
} else {
return false;
}
});
app.validation.valid_cols_number_QMARK_ = (function app$validation$valid_cols_number_QMARK_(arg){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,arg),(2));
});
app.validation.valid_number_QMARK_ = (function app$validation$valid_number_QMARK_(arg){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/(\-|\+)?(\d+)?(\.)?(\d+)?/,arg));
});
app.validation.valid_length_QMARK_ = (function app$validation$valid_length_QMARK_(arg){
return (arg.length <= (20));
});
app.validation.valid_cols_QMARK_ = (function app$validation$valid_cols_QMARK_(content){
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,app.validation.valid_cols_number_QMARK_,content));
});
app.validation.valid_titles_QMARK_ = (function app$validation$valid_titles_QMARK_(content){
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__31496_SHARP_){
return app.validation.valid_length_QMARK_.call(null,p1__31496_SHARP_);
}),content.call(null,(0))));
});
app.validation.valid_first_col_QMARK_ = (function app$validation$valid_first_col_QMARK_(content){
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__31497_SHARP_){
return app.validation.valid_length_QMARK_.call(null,p1__31497_SHARP_.call(null,(0)));
}),cljs.core.subvec.call(null,content,(1))));
});
app.validation.valid_second_col_QMARK_ = (function app$validation$valid_second_col_QMARK_(content){
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__31498_SHARP_){
return app.validation.valid_number_QMARK_.call(null,p1__31498_SHARP_.call(null,(1)));
}),cljs.core.subvec.call(null,content,(1))));
});

//# sourceMappingURL=validation.js.map?rel=1513969494006