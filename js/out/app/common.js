// Compiled by ClojureScript 1.9.521 {}
goog.provide('app.common');
goog.require('cljs.core');
goog.require('rum.core');
app.common.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),"",new cljs.core.Keyword(null,"file-error","file-error",1419078490),"",new cljs.core.Keyword(null,"file-content","file-content",-1595262238),cljs.core.PersistentVector.EMPTY], null));
app.common.write_error_to_state = (function app$common$write_error_to_state(msg,remove_file){
cljs.core.swap_BANG_.call(null,app.common.state,cljs.core.assoc,new cljs.core.Keyword(null,"file-error","file-error",1419078490),msg);

if(cljs.core.truth_(remove_file)){
return cljs.core.swap_BANG_.call(null,app.common.state,cljs.core.assoc,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),"");
} else {
return null;
}
});

//# sourceMappingURL=common.js.map?rel=1513968608682