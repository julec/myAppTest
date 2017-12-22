// Compiled by ClojureScript 1.9.521 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('app.common');
goog.require('app.result');
goog.require('app.upload');
cljs.core.enable_console_print_BANG_.call(null);
app.core.app = rum.core.build_defc.call(null,(function (){
if(cljs.core._EQ_.call(null,rum.core.react.call(null,rum.core.cursor_in.call(null,app.common.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-content","file-content",-1595262238)], null))),cljs.core.PersistentVector.EMPTY)){
return sablono.interpreter.interpret.call(null,app.upload.input_upload.call(null,rum.core.react.call(null,rum.core.cursor_in.call(null,app.common.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-error","file-error",1419078490)], null)))));
} else {
return sablono.interpreter.interpret.call(null,app.result.result.call(null,rum.core.react.call(null,rum.core.cursor_in.call(null,app.common.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-content","file-content",-1595262238)], null)))));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"app");
rum.core.mount.call(null,app.core.app.call(null,app.common.state),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1513969496052