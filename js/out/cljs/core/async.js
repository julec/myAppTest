// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args32067 = [];
var len__30494__auto___32073 = arguments.length;
var i__30495__auto___32074 = (0);
while(true){
if((i__30495__auto___32074 < len__30494__auto___32073)){
args32067.push((arguments[i__30495__auto___32074]));

var G__32075 = (i__30495__auto___32074 + (1));
i__30495__auto___32074 = G__32075;
continue;
} else {
}
break;
}

var G__32069 = args32067.length;
switch (G__32069) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32067.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async32070 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32070 = (function (f,blockable,meta32071){
this.f = f;
this.blockable = blockable;
this.meta32071 = meta32071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32072,meta32071__$1){
var self__ = this;
var _32072__$1 = this;
return (new cljs.core.async.t_cljs$core$async32070(self__.f,self__.blockable,meta32071__$1));
});

cljs.core.async.t_cljs$core$async32070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32072){
var self__ = this;
var _32072__$1 = this;
return self__.meta32071;
});

cljs.core.async.t_cljs$core$async32070.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32070.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32070.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32070.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32071","meta32071",862889962,null)], null);
});

cljs.core.async.t_cljs$core$async32070.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32070";

cljs.core.async.t_cljs$core$async32070.cljs$lang$ctorPrWriter = (function (this__29930__auto__,writer__29931__auto__,opt__29932__auto__){
return cljs.core._write.call(null,writer__29931__auto__,"cljs.core.async/t_cljs$core$async32070");
});

cljs.core.async.__GT_t_cljs$core$async32070 = (function cljs$core$async$__GT_t_cljs$core$async32070(f__$1,blockable__$1,meta32071){
return (new cljs.core.async.t_cljs$core$async32070(f__$1,blockable__$1,meta32071));
});

}

return (new cljs.core.async.t_cljs$core$async32070(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args32079 = [];
var len__30494__auto___32082 = arguments.length;
var i__30495__auto___32083 = (0);
while(true){
if((i__30495__auto___32083 < len__30494__auto___32082)){
args32079.push((arguments[i__30495__auto___32083]));

var G__32084 = (i__30495__auto___32083 + (1));
i__30495__auto___32083 = G__32084;
continue;
} else {
}
break;
}

var G__32081 = args32079.length;
switch (G__32081) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32079.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args32086 = [];
var len__30494__auto___32089 = arguments.length;
var i__30495__auto___32090 = (0);
while(true){
if((i__30495__auto___32090 < len__30494__auto___32089)){
args32086.push((arguments[i__30495__auto___32090]));

var G__32091 = (i__30495__auto___32090 + (1));
i__30495__auto___32090 = G__32091;
continue;
} else {
}
break;
}

var G__32088 = args32086.length;
switch (G__32088) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32086.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args32093 = [];
var len__30494__auto___32096 = arguments.length;
var i__30495__auto___32097 = (0);
while(true){
if((i__30495__auto___32097 < len__30494__auto___32096)){
args32093.push((arguments[i__30495__auto___32097]));

var G__32098 = (i__30495__auto___32097 + (1));
i__30495__auto___32097 = G__32098;
continue;
} else {
}
break;
}

var G__32095 = args32093.length;
switch (G__32095) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32093.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32100 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32100);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32100,ret){
return (function (){
return fn1.call(null,val_32100);
});})(val_32100,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args32101 = [];
var len__30494__auto___32104 = arguments.length;
var i__30495__auto___32105 = (0);
while(true){
if((i__30495__auto___32105 < len__30494__auto___32104)){
args32101.push((arguments[i__30495__auto___32105]));

var G__32106 = (i__30495__auto___32105 + (1));
i__30495__auto___32105 = G__32106;
continue;
} else {
}
break;
}

var G__32103 = args32101.length;
switch (G__32103) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32101.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__30294__auto___32108 = n;
var x_32109 = (0);
while(true){
if((x_32109 < n__30294__auto___32108)){
(a[x_32109] = (0));

var G__32110 = (x_32109 + (1));
x_32109 = G__32110;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__32111 = (i + (1));
i = G__32111;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32115 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32115 = (function (flag,meta32116){
this.flag = flag;
this.meta32116 = meta32116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32117,meta32116__$1){
var self__ = this;
var _32117__$1 = this;
return (new cljs.core.async.t_cljs$core$async32115(self__.flag,meta32116__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32115.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32117){
var self__ = this;
var _32117__$1 = this;
return self__.meta32116;
});})(flag))
;

cljs.core.async.t_cljs$core$async32115.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32115.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32115.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32115.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32115.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32116","meta32116",1060671560,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32115.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32115";

cljs.core.async.t_cljs$core$async32115.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29930__auto__,writer__29931__auto__,opt__29932__auto__){
return cljs.core._write.call(null,writer__29931__auto__,"cljs.core.async/t_cljs$core$async32115");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32115 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32115(flag__$1,meta32116){
return (new cljs.core.async.t_cljs$core$async32115(flag__$1,meta32116));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32115(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32121 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32121 = (function (flag,cb,meta32122){
this.flag = flag;
this.cb = cb;
this.meta32122 = meta32122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32123,meta32122__$1){
var self__ = this;
var _32123__$1 = this;
return (new cljs.core.async.t_cljs$core$async32121(self__.flag,self__.cb,meta32122__$1));
});

cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32123){
var self__ = this;
var _32123__$1 = this;
return self__.meta32122;
});

cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32121.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32122","meta32122",-101084968,null)], null);
});

cljs.core.async.t_cljs$core$async32121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32121";

cljs.core.async.t_cljs$core$async32121.cljs$lang$ctorPrWriter = (function (this__29930__auto__,writer__29931__auto__,opt__29932__auto__){
return cljs.core._write.call(null,writer__29931__auto__,"cljs.core.async/t_cljs$core$async32121");
});

cljs.core.async.__GT_t_cljs$core$async32121 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32121(flag__$1,cb__$1,meta32122){
return (new cljs.core.async.t_cljs$core$async32121(flag__$1,cb__$1,meta32122));
});

}

return (new cljs.core.async.t_cljs$core$async32121(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32124_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32124_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32125_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32125_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__29273__auto__ = wport;
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32126 = (i + (1));
i = G__32126;
continue;
}
} else {
return null;
}
break;
}
})();
var or__29273__auto__ = ret;
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__29261__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__29261__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__29261__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__30501__auto__ = [];
var len__30494__auto___32132 = arguments.length;
var i__30495__auto___32133 = (0);
while(true){
if((i__30495__auto___32133 < len__30494__auto___32132)){
args__30501__auto__.push((arguments[i__30495__auto___32133]));

var G__32134 = (i__30495__auto___32133 + (1));
i__30495__auto___32133 = G__32134;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((1) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30502__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32129){
var map__32130 = p__32129;
var map__32130__$1 = ((((!((map__32130 == null)))?((((map__32130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32130):map__32130);
var opts = map__32130__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32127){
var G__32128 = cljs.core.first.call(null,seq32127);
var seq32127__$1 = cljs.core.next.call(null,seq32127);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32128,seq32127__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args32135 = [];
var len__30494__auto___32185 = arguments.length;
var i__30495__auto___32186 = (0);
while(true){
if((i__30495__auto___32186 < len__30494__auto___32185)){
args32135.push((arguments[i__30495__auto___32186]));

var G__32187 = (i__30495__auto___32186 + (1));
i__30495__auto___32186 = G__32187;
continue;
} else {
}
break;
}

var G__32137 = args32135.length;
switch (G__32137) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32135.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32008__auto___32189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto___32189){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto___32189){
return (function (state_32161){
var state_val_32162 = (state_32161[(1)]);
if((state_val_32162 === (7))){
var inst_32157 = (state_32161[(2)]);
var state_32161__$1 = state_32161;
var statearr_32163_32190 = state_32161__$1;
(statearr_32163_32190[(2)] = inst_32157);

(statearr_32163_32190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (1))){
var state_32161__$1 = state_32161;
var statearr_32164_32191 = state_32161__$1;
(statearr_32164_32191[(2)] = null);

(statearr_32164_32191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (4))){
var inst_32140 = (state_32161[(7)]);
var inst_32140__$1 = (state_32161[(2)]);
var inst_32141 = (inst_32140__$1 == null);
var state_32161__$1 = (function (){var statearr_32165 = state_32161;
(statearr_32165[(7)] = inst_32140__$1);

return statearr_32165;
})();
if(cljs.core.truth_(inst_32141)){
var statearr_32166_32192 = state_32161__$1;
(statearr_32166_32192[(1)] = (5));

} else {
var statearr_32167_32193 = state_32161__$1;
(statearr_32167_32193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (13))){
var state_32161__$1 = state_32161;
var statearr_32168_32194 = state_32161__$1;
(statearr_32168_32194[(2)] = null);

(statearr_32168_32194[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (6))){
var inst_32140 = (state_32161[(7)]);
var state_32161__$1 = state_32161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32161__$1,(11),to,inst_32140);
} else {
if((state_val_32162 === (3))){
var inst_32159 = (state_32161[(2)]);
var state_32161__$1 = state_32161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32161__$1,inst_32159);
} else {
if((state_val_32162 === (12))){
var state_32161__$1 = state_32161;
var statearr_32169_32195 = state_32161__$1;
(statearr_32169_32195[(2)] = null);

(statearr_32169_32195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (2))){
var state_32161__$1 = state_32161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32161__$1,(4),from);
} else {
if((state_val_32162 === (11))){
var inst_32150 = (state_32161[(2)]);
var state_32161__$1 = state_32161;
if(cljs.core.truth_(inst_32150)){
var statearr_32170_32196 = state_32161__$1;
(statearr_32170_32196[(1)] = (12));

} else {
var statearr_32171_32197 = state_32161__$1;
(statearr_32171_32197[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (9))){
var state_32161__$1 = state_32161;
var statearr_32172_32198 = state_32161__$1;
(statearr_32172_32198[(2)] = null);

(statearr_32172_32198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (5))){
var state_32161__$1 = state_32161;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32173_32199 = state_32161__$1;
(statearr_32173_32199[(1)] = (8));

} else {
var statearr_32174_32200 = state_32161__$1;
(statearr_32174_32200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (14))){
var inst_32155 = (state_32161[(2)]);
var state_32161__$1 = state_32161;
var statearr_32175_32201 = state_32161__$1;
(statearr_32175_32201[(2)] = inst_32155);

(statearr_32175_32201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (10))){
var inst_32147 = (state_32161[(2)]);
var state_32161__$1 = state_32161;
var statearr_32176_32202 = state_32161__$1;
(statearr_32176_32202[(2)] = inst_32147);

(statearr_32176_32202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (8))){
var inst_32144 = cljs.core.async.close_BANG_.call(null,to);
var state_32161__$1 = state_32161;
var statearr_32177_32203 = state_32161__$1;
(statearr_32177_32203[(2)] = inst_32144);

(statearr_32177_32203[(1)] = (10));


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
});})(c__32008__auto___32189))
;
return ((function (switch__31894__auto__,c__32008__auto___32189){
return (function() {
var cljs$core$async$state_machine__31895__auto__ = null;
var cljs$core$async$state_machine__31895__auto____0 = (function (){
var statearr_32181 = [null,null,null,null,null,null,null,null];
(statearr_32181[(0)] = cljs$core$async$state_machine__31895__auto__);

(statearr_32181[(1)] = (1));

return statearr_32181;
});
var cljs$core$async$state_machine__31895__auto____1 = (function (state_32161){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_32161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e32182){if((e32182 instanceof Object)){
var ex__31898__auto__ = e32182;
var statearr_32183_32204 = state_32161;
(statearr_32183_32204[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32205 = state_32161;
state_32161 = G__32205;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
cljs$core$async$state_machine__31895__auto__ = function(state_32161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31895__auto____1.call(this,state_32161);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31895__auto____0;
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31895__auto____1;
return cljs$core$async$state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto___32189))
})();
var state__32010__auto__ = (function (){var statearr_32184 = f__32009__auto__.call(null);
(statearr_32184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___32189);

return statearr_32184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto___32189))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32393){
var vec__32394 = p__32393;
var v = cljs.core.nth.call(null,vec__32394,(0),null);
var p = cljs.core.nth.call(null,vec__32394,(1),null);
var job = vec__32394;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32008__auto___32580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto___32580,res,vec__32394,v,p,job,jobs,results){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto___32580,res,vec__32394,v,p,job,jobs,results){
return (function (state_32401){
var state_val_32402 = (state_32401[(1)]);
if((state_val_32402 === (1))){
var state_32401__$1 = state_32401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32401__$1,(2),res,v);
} else {
if((state_val_32402 === (2))){
var inst_32398 = (state_32401[(2)]);
var inst_32399 = cljs.core.async.close_BANG_.call(null,res);
var state_32401__$1 = (function (){var statearr_32403 = state_32401;
(statearr_32403[(7)] = inst_32398);

return statearr_32403;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32401__$1,inst_32399);
} else {
return null;
}
}
});})(c__32008__auto___32580,res,vec__32394,v,p,job,jobs,results))
;
return ((function (switch__31894__auto__,c__32008__auto___32580,res,vec__32394,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____0 = (function (){
var statearr_32407 = [null,null,null,null,null,null,null,null];
(statearr_32407[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__);

(statearr_32407[(1)] = (1));

return statearr_32407;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____1 = (function (state_32401){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_32401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e32408){if((e32408 instanceof Object)){
var ex__31898__auto__ = e32408;
var statearr_32409_32581 = state_32401;
(statearr_32409_32581[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32582 = state_32401;
state_32401 = G__32582;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__ = function(state_32401){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____1.call(this,state_32401);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto___32580,res,vec__32394,v,p,job,jobs,results))
})();
var state__32010__auto__ = (function (){var statearr_32410 = f__32009__auto__.call(null);
(statearr_32410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___32580);

return statearr_32410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto___32580,res,vec__32394,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32411){
var vec__32412 = p__32411;
var v = cljs.core.nth.call(null,vec__32412,(0),null);
var p = cljs.core.nth.call(null,vec__32412,(1),null);
var job = vec__32412;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__30294__auto___32583 = n;
var __32584 = (0);
while(true){
if((__32584 < n__30294__auto___32583)){
var G__32415_32585 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32415_32585) {
case "compute":
var c__32008__auto___32587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32584,c__32008__auto___32587,G__32415_32585,n__30294__auto___32583,jobs,results,process,async){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (__32584,c__32008__auto___32587,G__32415_32585,n__30294__auto___32583,jobs,results,process,async){
return (function (state_32428){
var state_val_32429 = (state_32428[(1)]);
if((state_val_32429 === (1))){
var state_32428__$1 = state_32428;
var statearr_32430_32588 = state_32428__$1;
(statearr_32430_32588[(2)] = null);

(statearr_32430_32588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (2))){
var state_32428__$1 = state_32428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32428__$1,(4),jobs);
} else {
if((state_val_32429 === (3))){
var inst_32426 = (state_32428[(2)]);
var state_32428__$1 = state_32428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32428__$1,inst_32426);
} else {
if((state_val_32429 === (4))){
var inst_32418 = (state_32428[(2)]);
var inst_32419 = process.call(null,inst_32418);
var state_32428__$1 = state_32428;
if(cljs.core.truth_(inst_32419)){
var statearr_32431_32589 = state_32428__$1;
(statearr_32431_32589[(1)] = (5));

} else {
var statearr_32432_32590 = state_32428__$1;
(statearr_32432_32590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (5))){
var state_32428__$1 = state_32428;
var statearr_32433_32591 = state_32428__$1;
(statearr_32433_32591[(2)] = null);

(statearr_32433_32591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (6))){
var state_32428__$1 = state_32428;
var statearr_32434_32592 = state_32428__$1;
(statearr_32434_32592[(2)] = null);

(statearr_32434_32592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (7))){
var inst_32424 = (state_32428[(2)]);
var state_32428__$1 = state_32428;
var statearr_32435_32593 = state_32428__$1;
(statearr_32435_32593[(2)] = inst_32424);

(statearr_32435_32593[(1)] = (3));


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
});})(__32584,c__32008__auto___32587,G__32415_32585,n__30294__auto___32583,jobs,results,process,async))
;
return ((function (__32584,switch__31894__auto__,c__32008__auto___32587,G__32415_32585,n__30294__auto___32583,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____0 = (function (){
var statearr_32439 = [null,null,null,null,null,null,null];
(statearr_32439[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__);

(statearr_32439[(1)] = (1));

return statearr_32439;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____1 = (function (state_32428){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_32428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e32440){if((e32440 instanceof Object)){
var ex__31898__auto__ = e32440;
var statearr_32441_32594 = state_32428;
(statearr_32441_32594[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32595 = state_32428;
state_32428 = G__32595;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__ = function(state_32428){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____1.call(this,state_32428);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__;
})()
;})(__32584,switch__31894__auto__,c__32008__auto___32587,G__32415_32585,n__30294__auto___32583,jobs,results,process,async))
})();
var state__32010__auto__ = (function (){var statearr_32442 = f__32009__auto__.call(null);
(statearr_32442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___32587);

return statearr_32442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(__32584,c__32008__auto___32587,G__32415_32585,n__30294__auto___32583,jobs,results,process,async))
);


break;
case "async":
var c__32008__auto___32596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32584,c__32008__auto___32596,G__32415_32585,n__30294__auto___32583,jobs,results,process,async){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (__32584,c__32008__auto___32596,G__32415_32585,n__30294__auto___32583,jobs,results,process,async){
return (function (state_32455){
var state_val_32456 = (state_32455[(1)]);
if((state_val_32456 === (1))){
var state_32455__$1 = state_32455;
var statearr_32457_32597 = state_32455__$1;
(statearr_32457_32597[(2)] = null);

(statearr_32457_32597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32456 === (2))){
var state_32455__$1 = state_32455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32455__$1,(4),jobs);
} else {
if((state_val_32456 === (3))){
var inst_32453 = (state_32455[(2)]);
var state_32455__$1 = state_32455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32455__$1,inst_32453);
} else {
if((state_val_32456 === (4))){
var inst_32445 = (state_32455[(2)]);
var inst_32446 = async.call(null,inst_32445);
var state_32455__$1 = state_32455;
if(cljs.core.truth_(inst_32446)){
var statearr_32458_32598 = state_32455__$1;
(statearr_32458_32598[(1)] = (5));

} else {
var statearr_32459_32599 = state_32455__$1;
(statearr_32459_32599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32456 === (5))){
var state_32455__$1 = state_32455;
var statearr_32460_32600 = state_32455__$1;
(statearr_32460_32600[(2)] = null);

(statearr_32460_32600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32456 === (6))){
var state_32455__$1 = state_32455;
var statearr_32461_32601 = state_32455__$1;
(statearr_32461_32601[(2)] = null);

(statearr_32461_32601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32456 === (7))){
var inst_32451 = (state_32455[(2)]);
var state_32455__$1 = state_32455;
var statearr_32462_32602 = state_32455__$1;
(statearr_32462_32602[(2)] = inst_32451);

(statearr_32462_32602[(1)] = (3));


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
});})(__32584,c__32008__auto___32596,G__32415_32585,n__30294__auto___32583,jobs,results,process,async))
;
return ((function (__32584,switch__31894__auto__,c__32008__auto___32596,G__32415_32585,n__30294__auto___32583,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____0 = (function (){
var statearr_32466 = [null,null,null,null,null,null,null];
(statearr_32466[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__);

(statearr_32466[(1)] = (1));

return statearr_32466;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____1 = (function (state_32455){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_32455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e32467){if((e32467 instanceof Object)){
var ex__31898__auto__ = e32467;
var statearr_32468_32603 = state_32455;
(statearr_32468_32603[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32604 = state_32455;
state_32455 = G__32604;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__ = function(state_32455){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____1.call(this,state_32455);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__;
})()
;})(__32584,switch__31894__auto__,c__32008__auto___32596,G__32415_32585,n__30294__auto___32583,jobs,results,process,async))
})();
var state__32010__auto__ = (function (){var statearr_32469 = f__32009__auto__.call(null);
(statearr_32469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___32596);

return statearr_32469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(__32584,c__32008__auto___32596,G__32415_32585,n__30294__auto___32583,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__32605 = (__32584 + (1));
__32584 = G__32605;
continue;
} else {
}
break;
}

var c__32008__auto___32606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto___32606,jobs,results,process,async){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto___32606,jobs,results,process,async){
return (function (state_32491){
var state_val_32492 = (state_32491[(1)]);
if((state_val_32492 === (1))){
var state_32491__$1 = state_32491;
var statearr_32493_32607 = state_32491__$1;
(statearr_32493_32607[(2)] = null);

(statearr_32493_32607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (2))){
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32491__$1,(4),from);
} else {
if((state_val_32492 === (3))){
var inst_32489 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32491__$1,inst_32489);
} else {
if((state_val_32492 === (4))){
var inst_32472 = (state_32491[(7)]);
var inst_32472__$1 = (state_32491[(2)]);
var inst_32473 = (inst_32472__$1 == null);
var state_32491__$1 = (function (){var statearr_32494 = state_32491;
(statearr_32494[(7)] = inst_32472__$1);

return statearr_32494;
})();
if(cljs.core.truth_(inst_32473)){
var statearr_32495_32608 = state_32491__$1;
(statearr_32495_32608[(1)] = (5));

} else {
var statearr_32496_32609 = state_32491__$1;
(statearr_32496_32609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (5))){
var inst_32475 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32491__$1 = state_32491;
var statearr_32497_32610 = state_32491__$1;
(statearr_32497_32610[(2)] = inst_32475);

(statearr_32497_32610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (6))){
var inst_32477 = (state_32491[(8)]);
var inst_32472 = (state_32491[(7)]);
var inst_32477__$1 = cljs.core.async.chan.call(null,(1));
var inst_32478 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32479 = [inst_32472,inst_32477__$1];
var inst_32480 = (new cljs.core.PersistentVector(null,2,(5),inst_32478,inst_32479,null));
var state_32491__$1 = (function (){var statearr_32498 = state_32491;
(statearr_32498[(8)] = inst_32477__$1);

return statearr_32498;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32491__$1,(8),jobs,inst_32480);
} else {
if((state_val_32492 === (7))){
var inst_32487 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32499_32611 = state_32491__$1;
(statearr_32499_32611[(2)] = inst_32487);

(statearr_32499_32611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (8))){
var inst_32477 = (state_32491[(8)]);
var inst_32482 = (state_32491[(2)]);
var state_32491__$1 = (function (){var statearr_32500 = state_32491;
(statearr_32500[(9)] = inst_32482);

return statearr_32500;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32491__$1,(9),results,inst_32477);
} else {
if((state_val_32492 === (9))){
var inst_32484 = (state_32491[(2)]);
var state_32491__$1 = (function (){var statearr_32501 = state_32491;
(statearr_32501[(10)] = inst_32484);

return statearr_32501;
})();
var statearr_32502_32612 = state_32491__$1;
(statearr_32502_32612[(2)] = null);

(statearr_32502_32612[(1)] = (2));


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
});})(c__32008__auto___32606,jobs,results,process,async))
;
return ((function (switch__31894__auto__,c__32008__auto___32606,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____0 = (function (){
var statearr_32506 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32506[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__);

(statearr_32506[(1)] = (1));

return statearr_32506;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____1 = (function (state_32491){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_32491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e32507){if((e32507 instanceof Object)){
var ex__31898__auto__ = e32507;
var statearr_32508_32613 = state_32491;
(statearr_32508_32613[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32614 = state_32491;
state_32491 = G__32614;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__ = function(state_32491){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____1.call(this,state_32491);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto___32606,jobs,results,process,async))
})();
var state__32010__auto__ = (function (){var statearr_32509 = f__32009__auto__.call(null);
(statearr_32509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___32606);

return statearr_32509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto___32606,jobs,results,process,async))
);


var c__32008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto__,jobs,results,process,async){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto__,jobs,results,process,async){
return (function (state_32547){
var state_val_32548 = (state_32547[(1)]);
if((state_val_32548 === (7))){
var inst_32543 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32549_32615 = state_32547__$1;
(statearr_32549_32615[(2)] = inst_32543);

(statearr_32549_32615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (20))){
var state_32547__$1 = state_32547;
var statearr_32550_32616 = state_32547__$1;
(statearr_32550_32616[(2)] = null);

(statearr_32550_32616[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (1))){
var state_32547__$1 = state_32547;
var statearr_32551_32617 = state_32547__$1;
(statearr_32551_32617[(2)] = null);

(statearr_32551_32617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (4))){
var inst_32512 = (state_32547[(7)]);
var inst_32512__$1 = (state_32547[(2)]);
var inst_32513 = (inst_32512__$1 == null);
var state_32547__$1 = (function (){var statearr_32552 = state_32547;
(statearr_32552[(7)] = inst_32512__$1);

return statearr_32552;
})();
if(cljs.core.truth_(inst_32513)){
var statearr_32553_32618 = state_32547__$1;
(statearr_32553_32618[(1)] = (5));

} else {
var statearr_32554_32619 = state_32547__$1;
(statearr_32554_32619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (15))){
var inst_32525 = (state_32547[(8)]);
var state_32547__$1 = state_32547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32547__$1,(18),to,inst_32525);
} else {
if((state_val_32548 === (21))){
var inst_32538 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32555_32620 = state_32547__$1;
(statearr_32555_32620[(2)] = inst_32538);

(statearr_32555_32620[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (13))){
var inst_32540 = (state_32547[(2)]);
var state_32547__$1 = (function (){var statearr_32556 = state_32547;
(statearr_32556[(9)] = inst_32540);

return statearr_32556;
})();
var statearr_32557_32621 = state_32547__$1;
(statearr_32557_32621[(2)] = null);

(statearr_32557_32621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (6))){
var inst_32512 = (state_32547[(7)]);
var state_32547__$1 = state_32547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32547__$1,(11),inst_32512);
} else {
if((state_val_32548 === (17))){
var inst_32533 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
if(cljs.core.truth_(inst_32533)){
var statearr_32558_32622 = state_32547__$1;
(statearr_32558_32622[(1)] = (19));

} else {
var statearr_32559_32623 = state_32547__$1;
(statearr_32559_32623[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (3))){
var inst_32545 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32547__$1,inst_32545);
} else {
if((state_val_32548 === (12))){
var inst_32522 = (state_32547[(10)]);
var state_32547__$1 = state_32547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32547__$1,(14),inst_32522);
} else {
if((state_val_32548 === (2))){
var state_32547__$1 = state_32547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32547__$1,(4),results);
} else {
if((state_val_32548 === (19))){
var state_32547__$1 = state_32547;
var statearr_32560_32624 = state_32547__$1;
(statearr_32560_32624[(2)] = null);

(statearr_32560_32624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (11))){
var inst_32522 = (state_32547[(2)]);
var state_32547__$1 = (function (){var statearr_32561 = state_32547;
(statearr_32561[(10)] = inst_32522);

return statearr_32561;
})();
var statearr_32562_32625 = state_32547__$1;
(statearr_32562_32625[(2)] = null);

(statearr_32562_32625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (9))){
var state_32547__$1 = state_32547;
var statearr_32563_32626 = state_32547__$1;
(statearr_32563_32626[(2)] = null);

(statearr_32563_32626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (5))){
var state_32547__$1 = state_32547;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32564_32627 = state_32547__$1;
(statearr_32564_32627[(1)] = (8));

} else {
var statearr_32565_32628 = state_32547__$1;
(statearr_32565_32628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (14))){
var inst_32527 = (state_32547[(11)]);
var inst_32525 = (state_32547[(8)]);
var inst_32525__$1 = (state_32547[(2)]);
var inst_32526 = (inst_32525__$1 == null);
var inst_32527__$1 = cljs.core.not.call(null,inst_32526);
var state_32547__$1 = (function (){var statearr_32566 = state_32547;
(statearr_32566[(11)] = inst_32527__$1);

(statearr_32566[(8)] = inst_32525__$1);

return statearr_32566;
})();
if(inst_32527__$1){
var statearr_32567_32629 = state_32547__$1;
(statearr_32567_32629[(1)] = (15));

} else {
var statearr_32568_32630 = state_32547__$1;
(statearr_32568_32630[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (16))){
var inst_32527 = (state_32547[(11)]);
var state_32547__$1 = state_32547;
var statearr_32569_32631 = state_32547__$1;
(statearr_32569_32631[(2)] = inst_32527);

(statearr_32569_32631[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (10))){
var inst_32519 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32570_32632 = state_32547__$1;
(statearr_32570_32632[(2)] = inst_32519);

(statearr_32570_32632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (18))){
var inst_32530 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32571_32633 = state_32547__$1;
(statearr_32571_32633[(2)] = inst_32530);

(statearr_32571_32633[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (8))){
var inst_32516 = cljs.core.async.close_BANG_.call(null,to);
var state_32547__$1 = state_32547;
var statearr_32572_32634 = state_32547__$1;
(statearr_32572_32634[(2)] = inst_32516);

(statearr_32572_32634[(1)] = (10));


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
});})(c__32008__auto__,jobs,results,process,async))
;
return ((function (switch__31894__auto__,c__32008__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____0 = (function (){
var statearr_32576 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32576[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__);

(statearr_32576[(1)] = (1));

return statearr_32576;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____1 = (function (state_32547){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_32547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e32577){if((e32577 instanceof Object)){
var ex__31898__auto__ = e32577;
var statearr_32578_32635 = state_32547;
(statearr_32578_32635[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32636 = state_32547;
state_32547 = G__32636;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__ = function(state_32547){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____1.call(this,state_32547);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto__,jobs,results,process,async))
})();
var state__32010__auto__ = (function (){var statearr_32579 = f__32009__auto__.call(null);
(statearr_32579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto__);

return statearr_32579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto__,jobs,results,process,async))
);

return c__32008__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args32637 = [];
var len__30494__auto___32640 = arguments.length;
var i__30495__auto___32641 = (0);
while(true){
if((i__30495__auto___32641 < len__30494__auto___32640)){
args32637.push((arguments[i__30495__auto___32641]));

var G__32642 = (i__30495__auto___32641 + (1));
i__30495__auto___32641 = G__32642;
continue;
} else {
}
break;
}

var G__32639 = args32637.length;
switch (G__32639) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32637.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args32644 = [];
var len__30494__auto___32647 = arguments.length;
var i__30495__auto___32648 = (0);
while(true){
if((i__30495__auto___32648 < len__30494__auto___32647)){
args32644.push((arguments[i__30495__auto___32648]));

var G__32649 = (i__30495__auto___32648 + (1));
i__30495__auto___32648 = G__32649;
continue;
} else {
}
break;
}

var G__32646 = args32644.length;
switch (G__32646) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32644.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args32651 = [];
var len__30494__auto___32704 = arguments.length;
var i__30495__auto___32705 = (0);
while(true){
if((i__30495__auto___32705 < len__30494__auto___32704)){
args32651.push((arguments[i__30495__auto___32705]));

var G__32706 = (i__30495__auto___32705 + (1));
i__30495__auto___32705 = G__32706;
continue;
} else {
}
break;
}

var G__32653 = args32651.length;
switch (G__32653) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32651.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32008__auto___32708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto___32708,tc,fc){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto___32708,tc,fc){
return (function (state_32679){
var state_val_32680 = (state_32679[(1)]);
if((state_val_32680 === (7))){
var inst_32675 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32681_32709 = state_32679__$1;
(statearr_32681_32709[(2)] = inst_32675);

(statearr_32681_32709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (1))){
var state_32679__$1 = state_32679;
var statearr_32682_32710 = state_32679__$1;
(statearr_32682_32710[(2)] = null);

(statearr_32682_32710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (4))){
var inst_32656 = (state_32679[(7)]);
var inst_32656__$1 = (state_32679[(2)]);
var inst_32657 = (inst_32656__$1 == null);
var state_32679__$1 = (function (){var statearr_32683 = state_32679;
(statearr_32683[(7)] = inst_32656__$1);

return statearr_32683;
})();
if(cljs.core.truth_(inst_32657)){
var statearr_32684_32711 = state_32679__$1;
(statearr_32684_32711[(1)] = (5));

} else {
var statearr_32685_32712 = state_32679__$1;
(statearr_32685_32712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (13))){
var state_32679__$1 = state_32679;
var statearr_32686_32713 = state_32679__$1;
(statearr_32686_32713[(2)] = null);

(statearr_32686_32713[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (6))){
var inst_32656 = (state_32679[(7)]);
var inst_32662 = p.call(null,inst_32656);
var state_32679__$1 = state_32679;
if(cljs.core.truth_(inst_32662)){
var statearr_32687_32714 = state_32679__$1;
(statearr_32687_32714[(1)] = (9));

} else {
var statearr_32688_32715 = state_32679__$1;
(statearr_32688_32715[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (3))){
var inst_32677 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32679__$1,inst_32677);
} else {
if((state_val_32680 === (12))){
var state_32679__$1 = state_32679;
var statearr_32689_32716 = state_32679__$1;
(statearr_32689_32716[(2)] = null);

(statearr_32689_32716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (2))){
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32679__$1,(4),ch);
} else {
if((state_val_32680 === (11))){
var inst_32656 = (state_32679[(7)]);
var inst_32666 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32679__$1,(8),inst_32666,inst_32656);
} else {
if((state_val_32680 === (9))){
var state_32679__$1 = state_32679;
var statearr_32690_32717 = state_32679__$1;
(statearr_32690_32717[(2)] = tc);

(statearr_32690_32717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (5))){
var inst_32659 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32660 = cljs.core.async.close_BANG_.call(null,fc);
var state_32679__$1 = (function (){var statearr_32691 = state_32679;
(statearr_32691[(8)] = inst_32659);

return statearr_32691;
})();
var statearr_32692_32718 = state_32679__$1;
(statearr_32692_32718[(2)] = inst_32660);

(statearr_32692_32718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (14))){
var inst_32673 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32693_32719 = state_32679__$1;
(statearr_32693_32719[(2)] = inst_32673);

(statearr_32693_32719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (10))){
var state_32679__$1 = state_32679;
var statearr_32694_32720 = state_32679__$1;
(statearr_32694_32720[(2)] = fc);

(statearr_32694_32720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (8))){
var inst_32668 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
if(cljs.core.truth_(inst_32668)){
var statearr_32695_32721 = state_32679__$1;
(statearr_32695_32721[(1)] = (12));

} else {
var statearr_32696_32722 = state_32679__$1;
(statearr_32696_32722[(1)] = (13));

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
});})(c__32008__auto___32708,tc,fc))
;
return ((function (switch__31894__auto__,c__32008__auto___32708,tc,fc){
return (function() {
var cljs$core$async$state_machine__31895__auto__ = null;
var cljs$core$async$state_machine__31895__auto____0 = (function (){
var statearr_32700 = [null,null,null,null,null,null,null,null,null];
(statearr_32700[(0)] = cljs$core$async$state_machine__31895__auto__);

(statearr_32700[(1)] = (1));

return statearr_32700;
});
var cljs$core$async$state_machine__31895__auto____1 = (function (state_32679){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_32679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e32701){if((e32701 instanceof Object)){
var ex__31898__auto__ = e32701;
var statearr_32702_32723 = state_32679;
(statearr_32702_32723[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32724 = state_32679;
state_32679 = G__32724;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
cljs$core$async$state_machine__31895__auto__ = function(state_32679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31895__auto____1.call(this,state_32679);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31895__auto____0;
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31895__auto____1;
return cljs$core$async$state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto___32708,tc,fc))
})();
var state__32010__auto__ = (function (){var statearr_32703 = f__32009__auto__.call(null);
(statearr_32703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___32708);

return statearr_32703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto___32708,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto__){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto__){
return (function (state_32788){
var state_val_32789 = (state_32788[(1)]);
if((state_val_32789 === (7))){
var inst_32784 = (state_32788[(2)]);
var state_32788__$1 = state_32788;
var statearr_32790_32811 = state_32788__$1;
(statearr_32790_32811[(2)] = inst_32784);

(statearr_32790_32811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (1))){
var inst_32768 = init;
var state_32788__$1 = (function (){var statearr_32791 = state_32788;
(statearr_32791[(7)] = inst_32768);

return statearr_32791;
})();
var statearr_32792_32812 = state_32788__$1;
(statearr_32792_32812[(2)] = null);

(statearr_32792_32812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (4))){
var inst_32771 = (state_32788[(8)]);
var inst_32771__$1 = (state_32788[(2)]);
var inst_32772 = (inst_32771__$1 == null);
var state_32788__$1 = (function (){var statearr_32793 = state_32788;
(statearr_32793[(8)] = inst_32771__$1);

return statearr_32793;
})();
if(cljs.core.truth_(inst_32772)){
var statearr_32794_32813 = state_32788__$1;
(statearr_32794_32813[(1)] = (5));

} else {
var statearr_32795_32814 = state_32788__$1;
(statearr_32795_32814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (6))){
var inst_32771 = (state_32788[(8)]);
var inst_32768 = (state_32788[(7)]);
var inst_32775 = (state_32788[(9)]);
var inst_32775__$1 = f.call(null,inst_32768,inst_32771);
var inst_32776 = cljs.core.reduced_QMARK_.call(null,inst_32775__$1);
var state_32788__$1 = (function (){var statearr_32796 = state_32788;
(statearr_32796[(9)] = inst_32775__$1);

return statearr_32796;
})();
if(inst_32776){
var statearr_32797_32815 = state_32788__$1;
(statearr_32797_32815[(1)] = (8));

} else {
var statearr_32798_32816 = state_32788__$1;
(statearr_32798_32816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (3))){
var inst_32786 = (state_32788[(2)]);
var state_32788__$1 = state_32788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32788__$1,inst_32786);
} else {
if((state_val_32789 === (2))){
var state_32788__$1 = state_32788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32788__$1,(4),ch);
} else {
if((state_val_32789 === (9))){
var inst_32775 = (state_32788[(9)]);
var inst_32768 = inst_32775;
var state_32788__$1 = (function (){var statearr_32799 = state_32788;
(statearr_32799[(7)] = inst_32768);

return statearr_32799;
})();
var statearr_32800_32817 = state_32788__$1;
(statearr_32800_32817[(2)] = null);

(statearr_32800_32817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (5))){
var inst_32768 = (state_32788[(7)]);
var state_32788__$1 = state_32788;
var statearr_32801_32818 = state_32788__$1;
(statearr_32801_32818[(2)] = inst_32768);

(statearr_32801_32818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (10))){
var inst_32782 = (state_32788[(2)]);
var state_32788__$1 = state_32788;
var statearr_32802_32819 = state_32788__$1;
(statearr_32802_32819[(2)] = inst_32782);

(statearr_32802_32819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (8))){
var inst_32775 = (state_32788[(9)]);
var inst_32778 = cljs.core.deref.call(null,inst_32775);
var state_32788__$1 = state_32788;
var statearr_32803_32820 = state_32788__$1;
(statearr_32803_32820[(2)] = inst_32778);

(statearr_32803_32820[(1)] = (10));


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
});})(c__32008__auto__))
;
return ((function (switch__31894__auto__,c__32008__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31895__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31895__auto____0 = (function (){
var statearr_32807 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32807[(0)] = cljs$core$async$reduce_$_state_machine__31895__auto__);

(statearr_32807[(1)] = (1));

return statearr_32807;
});
var cljs$core$async$reduce_$_state_machine__31895__auto____1 = (function (state_32788){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_32788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e32808){if((e32808 instanceof Object)){
var ex__31898__auto__ = e32808;
var statearr_32809_32821 = state_32788;
(statearr_32809_32821[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32822 = state_32788;
state_32788 = G__32822;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31895__auto__ = function(state_32788){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31895__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31895__auto____1.call(this,state_32788);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31895__auto____0;
cljs$core$async$reduce_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31895__auto____1;
return cljs$core$async$reduce_$_state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto__))
})();
var state__32010__auto__ = (function (){var statearr_32810 = f__32009__auto__.call(null);
(statearr_32810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto__);

return statearr_32810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto__))
);

return c__32008__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto__,f__$1){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto__,f__$1){
return (function (state_32842){
var state_val_32843 = (state_32842[(1)]);
if((state_val_32843 === (1))){
var inst_32837 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32842__$1 = state_32842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32842__$1,(2),inst_32837);
} else {
if((state_val_32843 === (2))){
var inst_32839 = (state_32842[(2)]);
var inst_32840 = f__$1.call(null,inst_32839);
var state_32842__$1 = state_32842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32842__$1,inst_32840);
} else {
return null;
}
}
});})(c__32008__auto__,f__$1))
;
return ((function (switch__31894__auto__,c__32008__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31895__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31895__auto____0 = (function (){
var statearr_32847 = [null,null,null,null,null,null,null];
(statearr_32847[(0)] = cljs$core$async$transduce_$_state_machine__31895__auto__);

(statearr_32847[(1)] = (1));

return statearr_32847;
});
var cljs$core$async$transduce_$_state_machine__31895__auto____1 = (function (state_32842){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_32842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e32848){if((e32848 instanceof Object)){
var ex__31898__auto__ = e32848;
var statearr_32849_32851 = state_32842;
(statearr_32849_32851[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32852 = state_32842;
state_32842 = G__32852;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31895__auto__ = function(state_32842){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31895__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31895__auto____1.call(this,state_32842);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31895__auto____0;
cljs$core$async$transduce_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31895__auto____1;
return cljs$core$async$transduce_$_state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto__,f__$1))
})();
var state__32010__auto__ = (function (){var statearr_32850 = f__32009__auto__.call(null);
(statearr_32850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto__);

return statearr_32850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto__,f__$1))
);

return c__32008__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args32853 = [];
var len__30494__auto___32905 = arguments.length;
var i__30495__auto___32906 = (0);
while(true){
if((i__30495__auto___32906 < len__30494__auto___32905)){
args32853.push((arguments[i__30495__auto___32906]));

var G__32907 = (i__30495__auto___32906 + (1));
i__30495__auto___32906 = G__32907;
continue;
} else {
}
break;
}

var G__32855 = args32853.length;
switch (G__32855) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32853.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto__){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto__){
return (function (state_32880){
var state_val_32881 = (state_32880[(1)]);
if((state_val_32881 === (7))){
var inst_32862 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
var statearr_32882_32909 = state_32880__$1;
(statearr_32882_32909[(2)] = inst_32862);

(statearr_32882_32909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (1))){
var inst_32856 = cljs.core.seq.call(null,coll);
var inst_32857 = inst_32856;
var state_32880__$1 = (function (){var statearr_32883 = state_32880;
(statearr_32883[(7)] = inst_32857);

return statearr_32883;
})();
var statearr_32884_32910 = state_32880__$1;
(statearr_32884_32910[(2)] = null);

(statearr_32884_32910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (4))){
var inst_32857 = (state_32880[(7)]);
var inst_32860 = cljs.core.first.call(null,inst_32857);
var state_32880__$1 = state_32880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32880__$1,(7),ch,inst_32860);
} else {
if((state_val_32881 === (13))){
var inst_32874 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
var statearr_32885_32911 = state_32880__$1;
(statearr_32885_32911[(2)] = inst_32874);

(statearr_32885_32911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (6))){
var inst_32865 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
if(cljs.core.truth_(inst_32865)){
var statearr_32886_32912 = state_32880__$1;
(statearr_32886_32912[(1)] = (8));

} else {
var statearr_32887_32913 = state_32880__$1;
(statearr_32887_32913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (3))){
var inst_32878 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32880__$1,inst_32878);
} else {
if((state_val_32881 === (12))){
var state_32880__$1 = state_32880;
var statearr_32888_32914 = state_32880__$1;
(statearr_32888_32914[(2)] = null);

(statearr_32888_32914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (2))){
var inst_32857 = (state_32880[(7)]);
var state_32880__$1 = state_32880;
if(cljs.core.truth_(inst_32857)){
var statearr_32889_32915 = state_32880__$1;
(statearr_32889_32915[(1)] = (4));

} else {
var statearr_32890_32916 = state_32880__$1;
(statearr_32890_32916[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (11))){
var inst_32871 = cljs.core.async.close_BANG_.call(null,ch);
var state_32880__$1 = state_32880;
var statearr_32891_32917 = state_32880__$1;
(statearr_32891_32917[(2)] = inst_32871);

(statearr_32891_32917[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (9))){
var state_32880__$1 = state_32880;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32892_32918 = state_32880__$1;
(statearr_32892_32918[(1)] = (11));

} else {
var statearr_32893_32919 = state_32880__$1;
(statearr_32893_32919[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (5))){
var inst_32857 = (state_32880[(7)]);
var state_32880__$1 = state_32880;
var statearr_32894_32920 = state_32880__$1;
(statearr_32894_32920[(2)] = inst_32857);

(statearr_32894_32920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (10))){
var inst_32876 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
var statearr_32895_32921 = state_32880__$1;
(statearr_32895_32921[(2)] = inst_32876);

(statearr_32895_32921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (8))){
var inst_32857 = (state_32880[(7)]);
var inst_32867 = cljs.core.next.call(null,inst_32857);
var inst_32857__$1 = inst_32867;
var state_32880__$1 = (function (){var statearr_32896 = state_32880;
(statearr_32896[(7)] = inst_32857__$1);

return statearr_32896;
})();
var statearr_32897_32922 = state_32880__$1;
(statearr_32897_32922[(2)] = null);

(statearr_32897_32922[(1)] = (2));


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
});})(c__32008__auto__))
;
return ((function (switch__31894__auto__,c__32008__auto__){
return (function() {
var cljs$core$async$state_machine__31895__auto__ = null;
var cljs$core$async$state_machine__31895__auto____0 = (function (){
var statearr_32901 = [null,null,null,null,null,null,null,null];
(statearr_32901[(0)] = cljs$core$async$state_machine__31895__auto__);

(statearr_32901[(1)] = (1));

return statearr_32901;
});
var cljs$core$async$state_machine__31895__auto____1 = (function (state_32880){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_32880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e32902){if((e32902 instanceof Object)){
var ex__31898__auto__ = e32902;
var statearr_32903_32923 = state_32880;
(statearr_32903_32923[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32924 = state_32880;
state_32880 = G__32924;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
cljs$core$async$state_machine__31895__auto__ = function(state_32880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31895__auto____1.call(this,state_32880);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31895__auto____0;
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31895__auto____1;
return cljs$core$async$state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto__))
})();
var state__32010__auto__ = (function (){var statearr_32904 = f__32009__auto__.call(null);
(statearr_32904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto__);

return statearr_32904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto__))
);

return c__32008__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__29991__auto__ = (((_ == null))?null:_);
var m__29992__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29991__auto__)]);
if(!((m__29992__auto__ == null))){
return m__29992__auto__.call(null,_);
} else {
var m__29992__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__29992__auto____$1 == null))){
return m__29992__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__29991__auto__ = (((m == null))?null:m);
var m__29992__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29991__auto__)]);
if(!((m__29992__auto__ == null))){
return m__29992__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__29992__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__29992__auto____$1 == null))){
return m__29992__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__29991__auto__ = (((m == null))?null:m);
var m__29992__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29991__auto__)]);
if(!((m__29992__auto__ == null))){
return m__29992__auto__.call(null,m,ch);
} else {
var m__29992__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__29992__auto____$1 == null))){
return m__29992__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__29991__auto__ = (((m == null))?null:m);
var m__29992__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29991__auto__)]);
if(!((m__29992__auto__ == null))){
return m__29992__auto__.call(null,m);
} else {
var m__29992__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__29992__auto____$1 == null))){
return m__29992__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33150 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33150 = (function (ch,cs,meta33151){
this.ch = ch;
this.cs = cs;
this.meta33151 = meta33151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33152,meta33151__$1){
var self__ = this;
var _33152__$1 = this;
return (new cljs.core.async.t_cljs$core$async33150(self__.ch,self__.cs,meta33151__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33150.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33152){
var self__ = this;
var _33152__$1 = this;
return self__.meta33151;
});})(cs))
;

cljs.core.async.t_cljs$core$async33150.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33150.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33150.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33150.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33150.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33150.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33150.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33151","meta33151",-2102379044,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33150.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33150.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33150";

cljs.core.async.t_cljs$core$async33150.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29930__auto__,writer__29931__auto__,opt__29932__auto__){
return cljs.core._write.call(null,writer__29931__auto__,"cljs.core.async/t_cljs$core$async33150");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33150 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33150(ch__$1,cs__$1,meta33151){
return (new cljs.core.async.t_cljs$core$async33150(ch__$1,cs__$1,meta33151));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33150(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32008__auto___33375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto___33375,cs,m,dchan,dctr,done){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto___33375,cs,m,dchan,dctr,done){
return (function (state_33287){
var state_val_33288 = (state_33287[(1)]);
if((state_val_33288 === (7))){
var inst_33283 = (state_33287[(2)]);
var state_33287__$1 = state_33287;
var statearr_33289_33376 = state_33287__$1;
(statearr_33289_33376[(2)] = inst_33283);

(statearr_33289_33376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (20))){
var inst_33186 = (state_33287[(7)]);
var inst_33198 = cljs.core.first.call(null,inst_33186);
var inst_33199 = cljs.core.nth.call(null,inst_33198,(0),null);
var inst_33200 = cljs.core.nth.call(null,inst_33198,(1),null);
var state_33287__$1 = (function (){var statearr_33290 = state_33287;
(statearr_33290[(8)] = inst_33199);

return statearr_33290;
})();
if(cljs.core.truth_(inst_33200)){
var statearr_33291_33377 = state_33287__$1;
(statearr_33291_33377[(1)] = (22));

} else {
var statearr_33292_33378 = state_33287__$1;
(statearr_33292_33378[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (27))){
var inst_33230 = (state_33287[(9)]);
var inst_33228 = (state_33287[(10)]);
var inst_33155 = (state_33287[(11)]);
var inst_33235 = (state_33287[(12)]);
var inst_33235__$1 = cljs.core._nth.call(null,inst_33228,inst_33230);
var inst_33236 = cljs.core.async.put_BANG_.call(null,inst_33235__$1,inst_33155,done);
var state_33287__$1 = (function (){var statearr_33293 = state_33287;
(statearr_33293[(12)] = inst_33235__$1);

return statearr_33293;
})();
if(cljs.core.truth_(inst_33236)){
var statearr_33294_33379 = state_33287__$1;
(statearr_33294_33379[(1)] = (30));

} else {
var statearr_33295_33380 = state_33287__$1;
(statearr_33295_33380[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (1))){
var state_33287__$1 = state_33287;
var statearr_33296_33381 = state_33287__$1;
(statearr_33296_33381[(2)] = null);

(statearr_33296_33381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (24))){
var inst_33186 = (state_33287[(7)]);
var inst_33205 = (state_33287[(2)]);
var inst_33206 = cljs.core.next.call(null,inst_33186);
var inst_33164 = inst_33206;
var inst_33165 = null;
var inst_33166 = (0);
var inst_33167 = (0);
var state_33287__$1 = (function (){var statearr_33297 = state_33287;
(statearr_33297[(13)] = inst_33165);

(statearr_33297[(14)] = inst_33164);

(statearr_33297[(15)] = inst_33205);

(statearr_33297[(16)] = inst_33167);

(statearr_33297[(17)] = inst_33166);

return statearr_33297;
})();
var statearr_33298_33382 = state_33287__$1;
(statearr_33298_33382[(2)] = null);

(statearr_33298_33382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (39))){
var state_33287__$1 = state_33287;
var statearr_33302_33383 = state_33287__$1;
(statearr_33302_33383[(2)] = null);

(statearr_33302_33383[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (4))){
var inst_33155 = (state_33287[(11)]);
var inst_33155__$1 = (state_33287[(2)]);
var inst_33156 = (inst_33155__$1 == null);
var state_33287__$1 = (function (){var statearr_33303 = state_33287;
(statearr_33303[(11)] = inst_33155__$1);

return statearr_33303;
})();
if(cljs.core.truth_(inst_33156)){
var statearr_33304_33384 = state_33287__$1;
(statearr_33304_33384[(1)] = (5));

} else {
var statearr_33305_33385 = state_33287__$1;
(statearr_33305_33385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (15))){
var inst_33165 = (state_33287[(13)]);
var inst_33164 = (state_33287[(14)]);
var inst_33167 = (state_33287[(16)]);
var inst_33166 = (state_33287[(17)]);
var inst_33182 = (state_33287[(2)]);
var inst_33183 = (inst_33167 + (1));
var tmp33299 = inst_33165;
var tmp33300 = inst_33164;
var tmp33301 = inst_33166;
var inst_33164__$1 = tmp33300;
var inst_33165__$1 = tmp33299;
var inst_33166__$1 = tmp33301;
var inst_33167__$1 = inst_33183;
var state_33287__$1 = (function (){var statearr_33306 = state_33287;
(statearr_33306[(13)] = inst_33165__$1);

(statearr_33306[(14)] = inst_33164__$1);

(statearr_33306[(16)] = inst_33167__$1);

(statearr_33306[(18)] = inst_33182);

(statearr_33306[(17)] = inst_33166__$1);

return statearr_33306;
})();
var statearr_33307_33386 = state_33287__$1;
(statearr_33307_33386[(2)] = null);

(statearr_33307_33386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (21))){
var inst_33209 = (state_33287[(2)]);
var state_33287__$1 = state_33287;
var statearr_33311_33387 = state_33287__$1;
(statearr_33311_33387[(2)] = inst_33209);

(statearr_33311_33387[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (31))){
var inst_33235 = (state_33287[(12)]);
var inst_33239 = done.call(null,null);
var inst_33240 = cljs.core.async.untap_STAR_.call(null,m,inst_33235);
var state_33287__$1 = (function (){var statearr_33312 = state_33287;
(statearr_33312[(19)] = inst_33239);

return statearr_33312;
})();
var statearr_33313_33388 = state_33287__$1;
(statearr_33313_33388[(2)] = inst_33240);

(statearr_33313_33388[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (32))){
var inst_33229 = (state_33287[(20)]);
var inst_33227 = (state_33287[(21)]);
var inst_33230 = (state_33287[(9)]);
var inst_33228 = (state_33287[(10)]);
var inst_33242 = (state_33287[(2)]);
var inst_33243 = (inst_33230 + (1));
var tmp33308 = inst_33229;
var tmp33309 = inst_33227;
var tmp33310 = inst_33228;
var inst_33227__$1 = tmp33309;
var inst_33228__$1 = tmp33310;
var inst_33229__$1 = tmp33308;
var inst_33230__$1 = inst_33243;
var state_33287__$1 = (function (){var statearr_33314 = state_33287;
(statearr_33314[(20)] = inst_33229__$1);

(statearr_33314[(21)] = inst_33227__$1);

(statearr_33314[(9)] = inst_33230__$1);

(statearr_33314[(10)] = inst_33228__$1);

(statearr_33314[(22)] = inst_33242);

return statearr_33314;
})();
var statearr_33315_33389 = state_33287__$1;
(statearr_33315_33389[(2)] = null);

(statearr_33315_33389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (40))){
var inst_33255 = (state_33287[(23)]);
var inst_33259 = done.call(null,null);
var inst_33260 = cljs.core.async.untap_STAR_.call(null,m,inst_33255);
var state_33287__$1 = (function (){var statearr_33316 = state_33287;
(statearr_33316[(24)] = inst_33259);

return statearr_33316;
})();
var statearr_33317_33390 = state_33287__$1;
(statearr_33317_33390[(2)] = inst_33260);

(statearr_33317_33390[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (33))){
var inst_33246 = (state_33287[(25)]);
var inst_33248 = cljs.core.chunked_seq_QMARK_.call(null,inst_33246);
var state_33287__$1 = state_33287;
if(inst_33248){
var statearr_33318_33391 = state_33287__$1;
(statearr_33318_33391[(1)] = (36));

} else {
var statearr_33319_33392 = state_33287__$1;
(statearr_33319_33392[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (13))){
var inst_33176 = (state_33287[(26)]);
var inst_33179 = cljs.core.async.close_BANG_.call(null,inst_33176);
var state_33287__$1 = state_33287;
var statearr_33320_33393 = state_33287__$1;
(statearr_33320_33393[(2)] = inst_33179);

(statearr_33320_33393[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (22))){
var inst_33199 = (state_33287[(8)]);
var inst_33202 = cljs.core.async.close_BANG_.call(null,inst_33199);
var state_33287__$1 = state_33287;
var statearr_33321_33394 = state_33287__$1;
(statearr_33321_33394[(2)] = inst_33202);

(statearr_33321_33394[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (36))){
var inst_33246 = (state_33287[(25)]);
var inst_33250 = cljs.core.chunk_first.call(null,inst_33246);
var inst_33251 = cljs.core.chunk_rest.call(null,inst_33246);
var inst_33252 = cljs.core.count.call(null,inst_33250);
var inst_33227 = inst_33251;
var inst_33228 = inst_33250;
var inst_33229 = inst_33252;
var inst_33230 = (0);
var state_33287__$1 = (function (){var statearr_33322 = state_33287;
(statearr_33322[(20)] = inst_33229);

(statearr_33322[(21)] = inst_33227);

(statearr_33322[(9)] = inst_33230);

(statearr_33322[(10)] = inst_33228);

return statearr_33322;
})();
var statearr_33323_33395 = state_33287__$1;
(statearr_33323_33395[(2)] = null);

(statearr_33323_33395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (41))){
var inst_33246 = (state_33287[(25)]);
var inst_33262 = (state_33287[(2)]);
var inst_33263 = cljs.core.next.call(null,inst_33246);
var inst_33227 = inst_33263;
var inst_33228 = null;
var inst_33229 = (0);
var inst_33230 = (0);
var state_33287__$1 = (function (){var statearr_33324 = state_33287;
(statearr_33324[(20)] = inst_33229);

(statearr_33324[(21)] = inst_33227);

(statearr_33324[(9)] = inst_33230);

(statearr_33324[(10)] = inst_33228);

(statearr_33324[(27)] = inst_33262);

return statearr_33324;
})();
var statearr_33325_33396 = state_33287__$1;
(statearr_33325_33396[(2)] = null);

(statearr_33325_33396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (43))){
var state_33287__$1 = state_33287;
var statearr_33326_33397 = state_33287__$1;
(statearr_33326_33397[(2)] = null);

(statearr_33326_33397[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (29))){
var inst_33271 = (state_33287[(2)]);
var state_33287__$1 = state_33287;
var statearr_33327_33398 = state_33287__$1;
(statearr_33327_33398[(2)] = inst_33271);

(statearr_33327_33398[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (44))){
var inst_33280 = (state_33287[(2)]);
var state_33287__$1 = (function (){var statearr_33328 = state_33287;
(statearr_33328[(28)] = inst_33280);

return statearr_33328;
})();
var statearr_33329_33399 = state_33287__$1;
(statearr_33329_33399[(2)] = null);

(statearr_33329_33399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (6))){
var inst_33219 = (state_33287[(29)]);
var inst_33218 = cljs.core.deref.call(null,cs);
var inst_33219__$1 = cljs.core.keys.call(null,inst_33218);
var inst_33220 = cljs.core.count.call(null,inst_33219__$1);
var inst_33221 = cljs.core.reset_BANG_.call(null,dctr,inst_33220);
var inst_33226 = cljs.core.seq.call(null,inst_33219__$1);
var inst_33227 = inst_33226;
var inst_33228 = null;
var inst_33229 = (0);
var inst_33230 = (0);
var state_33287__$1 = (function (){var statearr_33330 = state_33287;
(statearr_33330[(20)] = inst_33229);

(statearr_33330[(21)] = inst_33227);

(statearr_33330[(9)] = inst_33230);

(statearr_33330[(10)] = inst_33228);

(statearr_33330[(30)] = inst_33221);

(statearr_33330[(29)] = inst_33219__$1);

return statearr_33330;
})();
var statearr_33331_33400 = state_33287__$1;
(statearr_33331_33400[(2)] = null);

(statearr_33331_33400[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (28))){
var inst_33227 = (state_33287[(21)]);
var inst_33246 = (state_33287[(25)]);
var inst_33246__$1 = cljs.core.seq.call(null,inst_33227);
var state_33287__$1 = (function (){var statearr_33332 = state_33287;
(statearr_33332[(25)] = inst_33246__$1);

return statearr_33332;
})();
if(inst_33246__$1){
var statearr_33333_33401 = state_33287__$1;
(statearr_33333_33401[(1)] = (33));

} else {
var statearr_33334_33402 = state_33287__$1;
(statearr_33334_33402[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (25))){
var inst_33229 = (state_33287[(20)]);
var inst_33230 = (state_33287[(9)]);
var inst_33232 = (inst_33230 < inst_33229);
var inst_33233 = inst_33232;
var state_33287__$1 = state_33287;
if(cljs.core.truth_(inst_33233)){
var statearr_33335_33403 = state_33287__$1;
(statearr_33335_33403[(1)] = (27));

} else {
var statearr_33336_33404 = state_33287__$1;
(statearr_33336_33404[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (34))){
var state_33287__$1 = state_33287;
var statearr_33337_33405 = state_33287__$1;
(statearr_33337_33405[(2)] = null);

(statearr_33337_33405[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (17))){
var state_33287__$1 = state_33287;
var statearr_33338_33406 = state_33287__$1;
(statearr_33338_33406[(2)] = null);

(statearr_33338_33406[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (3))){
var inst_33285 = (state_33287[(2)]);
var state_33287__$1 = state_33287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33287__$1,inst_33285);
} else {
if((state_val_33288 === (12))){
var inst_33214 = (state_33287[(2)]);
var state_33287__$1 = state_33287;
var statearr_33339_33407 = state_33287__$1;
(statearr_33339_33407[(2)] = inst_33214);

(statearr_33339_33407[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (2))){
var state_33287__$1 = state_33287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33287__$1,(4),ch);
} else {
if((state_val_33288 === (23))){
var state_33287__$1 = state_33287;
var statearr_33340_33408 = state_33287__$1;
(statearr_33340_33408[(2)] = null);

(statearr_33340_33408[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (35))){
var inst_33269 = (state_33287[(2)]);
var state_33287__$1 = state_33287;
var statearr_33341_33409 = state_33287__$1;
(statearr_33341_33409[(2)] = inst_33269);

(statearr_33341_33409[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (19))){
var inst_33186 = (state_33287[(7)]);
var inst_33190 = cljs.core.chunk_first.call(null,inst_33186);
var inst_33191 = cljs.core.chunk_rest.call(null,inst_33186);
var inst_33192 = cljs.core.count.call(null,inst_33190);
var inst_33164 = inst_33191;
var inst_33165 = inst_33190;
var inst_33166 = inst_33192;
var inst_33167 = (0);
var state_33287__$1 = (function (){var statearr_33342 = state_33287;
(statearr_33342[(13)] = inst_33165);

(statearr_33342[(14)] = inst_33164);

(statearr_33342[(16)] = inst_33167);

(statearr_33342[(17)] = inst_33166);

return statearr_33342;
})();
var statearr_33343_33410 = state_33287__$1;
(statearr_33343_33410[(2)] = null);

(statearr_33343_33410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (11))){
var inst_33164 = (state_33287[(14)]);
var inst_33186 = (state_33287[(7)]);
var inst_33186__$1 = cljs.core.seq.call(null,inst_33164);
var state_33287__$1 = (function (){var statearr_33344 = state_33287;
(statearr_33344[(7)] = inst_33186__$1);

return statearr_33344;
})();
if(inst_33186__$1){
var statearr_33345_33411 = state_33287__$1;
(statearr_33345_33411[(1)] = (16));

} else {
var statearr_33346_33412 = state_33287__$1;
(statearr_33346_33412[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (9))){
var inst_33216 = (state_33287[(2)]);
var state_33287__$1 = state_33287;
var statearr_33347_33413 = state_33287__$1;
(statearr_33347_33413[(2)] = inst_33216);

(statearr_33347_33413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (5))){
var inst_33162 = cljs.core.deref.call(null,cs);
var inst_33163 = cljs.core.seq.call(null,inst_33162);
var inst_33164 = inst_33163;
var inst_33165 = null;
var inst_33166 = (0);
var inst_33167 = (0);
var state_33287__$1 = (function (){var statearr_33348 = state_33287;
(statearr_33348[(13)] = inst_33165);

(statearr_33348[(14)] = inst_33164);

(statearr_33348[(16)] = inst_33167);

(statearr_33348[(17)] = inst_33166);

return statearr_33348;
})();
var statearr_33349_33414 = state_33287__$1;
(statearr_33349_33414[(2)] = null);

(statearr_33349_33414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (14))){
var state_33287__$1 = state_33287;
var statearr_33350_33415 = state_33287__$1;
(statearr_33350_33415[(2)] = null);

(statearr_33350_33415[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (45))){
var inst_33277 = (state_33287[(2)]);
var state_33287__$1 = state_33287;
var statearr_33351_33416 = state_33287__$1;
(statearr_33351_33416[(2)] = inst_33277);

(statearr_33351_33416[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (26))){
var inst_33219 = (state_33287[(29)]);
var inst_33273 = (state_33287[(2)]);
var inst_33274 = cljs.core.seq.call(null,inst_33219);
var state_33287__$1 = (function (){var statearr_33352 = state_33287;
(statearr_33352[(31)] = inst_33273);

return statearr_33352;
})();
if(inst_33274){
var statearr_33353_33417 = state_33287__$1;
(statearr_33353_33417[(1)] = (42));

} else {
var statearr_33354_33418 = state_33287__$1;
(statearr_33354_33418[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (16))){
var inst_33186 = (state_33287[(7)]);
var inst_33188 = cljs.core.chunked_seq_QMARK_.call(null,inst_33186);
var state_33287__$1 = state_33287;
if(inst_33188){
var statearr_33355_33419 = state_33287__$1;
(statearr_33355_33419[(1)] = (19));

} else {
var statearr_33356_33420 = state_33287__$1;
(statearr_33356_33420[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (38))){
var inst_33266 = (state_33287[(2)]);
var state_33287__$1 = state_33287;
var statearr_33357_33421 = state_33287__$1;
(statearr_33357_33421[(2)] = inst_33266);

(statearr_33357_33421[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (30))){
var state_33287__$1 = state_33287;
var statearr_33358_33422 = state_33287__$1;
(statearr_33358_33422[(2)] = null);

(statearr_33358_33422[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (10))){
var inst_33165 = (state_33287[(13)]);
var inst_33167 = (state_33287[(16)]);
var inst_33175 = cljs.core._nth.call(null,inst_33165,inst_33167);
var inst_33176 = cljs.core.nth.call(null,inst_33175,(0),null);
var inst_33177 = cljs.core.nth.call(null,inst_33175,(1),null);
var state_33287__$1 = (function (){var statearr_33359 = state_33287;
(statearr_33359[(26)] = inst_33176);

return statearr_33359;
})();
if(cljs.core.truth_(inst_33177)){
var statearr_33360_33423 = state_33287__$1;
(statearr_33360_33423[(1)] = (13));

} else {
var statearr_33361_33424 = state_33287__$1;
(statearr_33361_33424[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (18))){
var inst_33212 = (state_33287[(2)]);
var state_33287__$1 = state_33287;
var statearr_33362_33425 = state_33287__$1;
(statearr_33362_33425[(2)] = inst_33212);

(statearr_33362_33425[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (42))){
var state_33287__$1 = state_33287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33287__$1,(45),dchan);
} else {
if((state_val_33288 === (37))){
var inst_33255 = (state_33287[(23)]);
var inst_33155 = (state_33287[(11)]);
var inst_33246 = (state_33287[(25)]);
var inst_33255__$1 = cljs.core.first.call(null,inst_33246);
var inst_33256 = cljs.core.async.put_BANG_.call(null,inst_33255__$1,inst_33155,done);
var state_33287__$1 = (function (){var statearr_33363 = state_33287;
(statearr_33363[(23)] = inst_33255__$1);

return statearr_33363;
})();
if(cljs.core.truth_(inst_33256)){
var statearr_33364_33426 = state_33287__$1;
(statearr_33364_33426[(1)] = (39));

} else {
var statearr_33365_33427 = state_33287__$1;
(statearr_33365_33427[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (8))){
var inst_33167 = (state_33287[(16)]);
var inst_33166 = (state_33287[(17)]);
var inst_33169 = (inst_33167 < inst_33166);
var inst_33170 = inst_33169;
var state_33287__$1 = state_33287;
if(cljs.core.truth_(inst_33170)){
var statearr_33366_33428 = state_33287__$1;
(statearr_33366_33428[(1)] = (10));

} else {
var statearr_33367_33429 = state_33287__$1;
(statearr_33367_33429[(1)] = (11));

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
});})(c__32008__auto___33375,cs,m,dchan,dctr,done))
;
return ((function (switch__31894__auto__,c__32008__auto___33375,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31895__auto__ = null;
var cljs$core$async$mult_$_state_machine__31895__auto____0 = (function (){
var statearr_33371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33371[(0)] = cljs$core$async$mult_$_state_machine__31895__auto__);

(statearr_33371[(1)] = (1));

return statearr_33371;
});
var cljs$core$async$mult_$_state_machine__31895__auto____1 = (function (state_33287){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_33287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e33372){if((e33372 instanceof Object)){
var ex__31898__auto__ = e33372;
var statearr_33373_33430 = state_33287;
(statearr_33373_33430[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33431 = state_33287;
state_33287 = G__33431;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31895__auto__ = function(state_33287){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31895__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31895__auto____1.call(this,state_33287);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31895__auto____0;
cljs$core$async$mult_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31895__auto____1;
return cljs$core$async$mult_$_state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto___33375,cs,m,dchan,dctr,done))
})();
var state__32010__auto__ = (function (){var statearr_33374 = f__32009__auto__.call(null);
(statearr_33374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___33375);

return statearr_33374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto___33375,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args33432 = [];
var len__30494__auto___33435 = arguments.length;
var i__30495__auto___33436 = (0);
while(true){
if((i__30495__auto___33436 < len__30494__auto___33435)){
args33432.push((arguments[i__30495__auto___33436]));

var G__33437 = (i__30495__auto___33436 + (1));
i__30495__auto___33436 = G__33437;
continue;
} else {
}
break;
}

var G__33434 = args33432.length;
switch (G__33434) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33432.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__29991__auto__ = (((m == null))?null:m);
var m__29992__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29991__auto__)]);
if(!((m__29992__auto__ == null))){
return m__29992__auto__.call(null,m,ch);
} else {
var m__29992__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__29992__auto____$1 == null))){
return m__29992__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__29991__auto__ = (((m == null))?null:m);
var m__29992__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29991__auto__)]);
if(!((m__29992__auto__ == null))){
return m__29992__auto__.call(null,m,ch);
} else {
var m__29992__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__29992__auto____$1 == null))){
return m__29992__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__29991__auto__ = (((m == null))?null:m);
var m__29992__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29991__auto__)]);
if(!((m__29992__auto__ == null))){
return m__29992__auto__.call(null,m);
} else {
var m__29992__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__29992__auto____$1 == null))){
return m__29992__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__29991__auto__ = (((m == null))?null:m);
var m__29992__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29991__auto__)]);
if(!((m__29992__auto__ == null))){
return m__29992__auto__.call(null,m,state_map);
} else {
var m__29992__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__29992__auto____$1 == null))){
return m__29992__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__29991__auto__ = (((m == null))?null:m);
var m__29992__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29991__auto__)]);
if(!((m__29992__auto__ == null))){
return m__29992__auto__.call(null,m,mode);
} else {
var m__29992__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__29992__auto____$1 == null))){
return m__29992__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__30501__auto__ = [];
var len__30494__auto___33449 = arguments.length;
var i__30495__auto___33450 = (0);
while(true){
if((i__30495__auto___33450 < len__30494__auto___33449)){
args__30501__auto__.push((arguments[i__30495__auto___33450]));

var G__33451 = (i__30495__auto___33450 + (1));
i__30495__auto___33450 = G__33451;
continue;
} else {
}
break;
}

var argseq__30502__auto__ = ((((3) < args__30501__auto__.length))?(new cljs.core.IndexedSeq(args__30501__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30502__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33443){
var map__33444 = p__33443;
var map__33444__$1 = ((((!((map__33444 == null)))?((((map__33444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33444.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33444):map__33444);
var opts = map__33444__$1;
var statearr_33446_33452 = state;
(statearr_33446_33452[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__33444,map__33444__$1,opts){
return (function (val){
var statearr_33447_33453 = state;
(statearr_33447_33453[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33444,map__33444__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_33448_33454 = state;
(statearr_33448_33454[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33439){
var G__33440 = cljs.core.first.call(null,seq33439);
var seq33439__$1 = cljs.core.next.call(null,seq33439);
var G__33441 = cljs.core.first.call(null,seq33439__$1);
var seq33439__$2 = cljs.core.next.call(null,seq33439__$1);
var G__33442 = cljs.core.first.call(null,seq33439__$2);
var seq33439__$3 = cljs.core.next.call(null,seq33439__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33440,G__33441,G__33442,seq33439__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33622 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33622 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta33623){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta33623 = meta33623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33624,meta33623__$1){
var self__ = this;
var _33624__$1 = this;
return (new cljs.core.async.t_cljs$core$async33622(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta33623__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33622.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33624){
var self__ = this;
var _33624__$1 = this;
return self__.meta33623;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33622.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33622.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33622.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33622.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33622.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33622.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33622.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33622.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33622.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta33623","meta33623",-1364844113,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33622.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33622";

cljs.core.async.t_cljs$core$async33622.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29930__auto__,writer__29931__auto__,opt__29932__auto__){
return cljs.core._write.call(null,writer__29931__auto__,"cljs.core.async/t_cljs$core$async33622");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33622 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33622(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33623){
return (new cljs.core.async.t_cljs$core$async33622(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33623));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33622(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32008__auto___33789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto___33789,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto___33789,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33726){
var state_val_33727 = (state_33726[(1)]);
if((state_val_33727 === (7))){
var inst_33641 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
var statearr_33728_33790 = state_33726__$1;
(statearr_33728_33790[(2)] = inst_33641);

(statearr_33728_33790[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (20))){
var inst_33653 = (state_33726[(7)]);
var state_33726__$1 = state_33726;
var statearr_33729_33791 = state_33726__$1;
(statearr_33729_33791[(2)] = inst_33653);

(statearr_33729_33791[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (27))){
var state_33726__$1 = state_33726;
var statearr_33730_33792 = state_33726__$1;
(statearr_33730_33792[(2)] = null);

(statearr_33730_33792[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (1))){
var inst_33628 = (state_33726[(8)]);
var inst_33628__$1 = calc_state.call(null);
var inst_33630 = (inst_33628__$1 == null);
var inst_33631 = cljs.core.not.call(null,inst_33630);
var state_33726__$1 = (function (){var statearr_33731 = state_33726;
(statearr_33731[(8)] = inst_33628__$1);

return statearr_33731;
})();
if(inst_33631){
var statearr_33732_33793 = state_33726__$1;
(statearr_33732_33793[(1)] = (2));

} else {
var statearr_33733_33794 = state_33726__$1;
(statearr_33733_33794[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (24))){
var inst_33700 = (state_33726[(9)]);
var inst_33677 = (state_33726[(10)]);
var inst_33686 = (state_33726[(11)]);
var inst_33700__$1 = inst_33677.call(null,inst_33686);
var state_33726__$1 = (function (){var statearr_33734 = state_33726;
(statearr_33734[(9)] = inst_33700__$1);

return statearr_33734;
})();
if(cljs.core.truth_(inst_33700__$1)){
var statearr_33735_33795 = state_33726__$1;
(statearr_33735_33795[(1)] = (29));

} else {
var statearr_33736_33796 = state_33726__$1;
(statearr_33736_33796[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (4))){
var inst_33644 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
if(cljs.core.truth_(inst_33644)){
var statearr_33737_33797 = state_33726__$1;
(statearr_33737_33797[(1)] = (8));

} else {
var statearr_33738_33798 = state_33726__$1;
(statearr_33738_33798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (15))){
var inst_33671 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
if(cljs.core.truth_(inst_33671)){
var statearr_33739_33799 = state_33726__$1;
(statearr_33739_33799[(1)] = (19));

} else {
var statearr_33740_33800 = state_33726__$1;
(statearr_33740_33800[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (21))){
var inst_33676 = (state_33726[(12)]);
var inst_33676__$1 = (state_33726[(2)]);
var inst_33677 = cljs.core.get.call(null,inst_33676__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33678 = cljs.core.get.call(null,inst_33676__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33679 = cljs.core.get.call(null,inst_33676__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33726__$1 = (function (){var statearr_33741 = state_33726;
(statearr_33741[(12)] = inst_33676__$1);

(statearr_33741[(10)] = inst_33677);

(statearr_33741[(13)] = inst_33678);

return statearr_33741;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33726__$1,(22),inst_33679);
} else {
if((state_val_33727 === (31))){
var inst_33708 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
if(cljs.core.truth_(inst_33708)){
var statearr_33742_33801 = state_33726__$1;
(statearr_33742_33801[(1)] = (32));

} else {
var statearr_33743_33802 = state_33726__$1;
(statearr_33743_33802[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (32))){
var inst_33685 = (state_33726[(14)]);
var state_33726__$1 = state_33726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33726__$1,(35),out,inst_33685);
} else {
if((state_val_33727 === (33))){
var inst_33676 = (state_33726[(12)]);
var inst_33653 = inst_33676;
var state_33726__$1 = (function (){var statearr_33744 = state_33726;
(statearr_33744[(7)] = inst_33653);

return statearr_33744;
})();
var statearr_33745_33803 = state_33726__$1;
(statearr_33745_33803[(2)] = null);

(statearr_33745_33803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (13))){
var inst_33653 = (state_33726[(7)]);
var inst_33660 = inst_33653.cljs$lang$protocol_mask$partition0$;
var inst_33661 = (inst_33660 & (64));
var inst_33662 = inst_33653.cljs$core$ISeq$;
var inst_33663 = (cljs.core.PROTOCOL_SENTINEL === inst_33662);
var inst_33664 = (inst_33661) || (inst_33663);
var state_33726__$1 = state_33726;
if(cljs.core.truth_(inst_33664)){
var statearr_33746_33804 = state_33726__$1;
(statearr_33746_33804[(1)] = (16));

} else {
var statearr_33747_33805 = state_33726__$1;
(statearr_33747_33805[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (22))){
var inst_33685 = (state_33726[(14)]);
var inst_33686 = (state_33726[(11)]);
var inst_33684 = (state_33726[(2)]);
var inst_33685__$1 = cljs.core.nth.call(null,inst_33684,(0),null);
var inst_33686__$1 = cljs.core.nth.call(null,inst_33684,(1),null);
var inst_33687 = (inst_33685__$1 == null);
var inst_33688 = cljs.core._EQ_.call(null,inst_33686__$1,change);
var inst_33689 = (inst_33687) || (inst_33688);
var state_33726__$1 = (function (){var statearr_33748 = state_33726;
(statearr_33748[(14)] = inst_33685__$1);

(statearr_33748[(11)] = inst_33686__$1);

return statearr_33748;
})();
if(cljs.core.truth_(inst_33689)){
var statearr_33749_33806 = state_33726__$1;
(statearr_33749_33806[(1)] = (23));

} else {
var statearr_33750_33807 = state_33726__$1;
(statearr_33750_33807[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (36))){
var inst_33676 = (state_33726[(12)]);
var inst_33653 = inst_33676;
var state_33726__$1 = (function (){var statearr_33751 = state_33726;
(statearr_33751[(7)] = inst_33653);

return statearr_33751;
})();
var statearr_33752_33808 = state_33726__$1;
(statearr_33752_33808[(2)] = null);

(statearr_33752_33808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (29))){
var inst_33700 = (state_33726[(9)]);
var state_33726__$1 = state_33726;
var statearr_33753_33809 = state_33726__$1;
(statearr_33753_33809[(2)] = inst_33700);

(statearr_33753_33809[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (6))){
var state_33726__$1 = state_33726;
var statearr_33754_33810 = state_33726__$1;
(statearr_33754_33810[(2)] = false);

(statearr_33754_33810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (28))){
var inst_33696 = (state_33726[(2)]);
var inst_33697 = calc_state.call(null);
var inst_33653 = inst_33697;
var state_33726__$1 = (function (){var statearr_33755 = state_33726;
(statearr_33755[(7)] = inst_33653);

(statearr_33755[(15)] = inst_33696);

return statearr_33755;
})();
var statearr_33756_33811 = state_33726__$1;
(statearr_33756_33811[(2)] = null);

(statearr_33756_33811[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (25))){
var inst_33722 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
var statearr_33757_33812 = state_33726__$1;
(statearr_33757_33812[(2)] = inst_33722);

(statearr_33757_33812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (34))){
var inst_33720 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
var statearr_33758_33813 = state_33726__$1;
(statearr_33758_33813[(2)] = inst_33720);

(statearr_33758_33813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (17))){
var state_33726__$1 = state_33726;
var statearr_33759_33814 = state_33726__$1;
(statearr_33759_33814[(2)] = false);

(statearr_33759_33814[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (3))){
var state_33726__$1 = state_33726;
var statearr_33760_33815 = state_33726__$1;
(statearr_33760_33815[(2)] = false);

(statearr_33760_33815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (12))){
var inst_33724 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33726__$1,inst_33724);
} else {
if((state_val_33727 === (2))){
var inst_33628 = (state_33726[(8)]);
var inst_33633 = inst_33628.cljs$lang$protocol_mask$partition0$;
var inst_33634 = (inst_33633 & (64));
var inst_33635 = inst_33628.cljs$core$ISeq$;
var inst_33636 = (cljs.core.PROTOCOL_SENTINEL === inst_33635);
var inst_33637 = (inst_33634) || (inst_33636);
var state_33726__$1 = state_33726;
if(cljs.core.truth_(inst_33637)){
var statearr_33761_33816 = state_33726__$1;
(statearr_33761_33816[(1)] = (5));

} else {
var statearr_33762_33817 = state_33726__$1;
(statearr_33762_33817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (23))){
var inst_33685 = (state_33726[(14)]);
var inst_33691 = (inst_33685 == null);
var state_33726__$1 = state_33726;
if(cljs.core.truth_(inst_33691)){
var statearr_33763_33818 = state_33726__$1;
(statearr_33763_33818[(1)] = (26));

} else {
var statearr_33764_33819 = state_33726__$1;
(statearr_33764_33819[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (35))){
var inst_33711 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
if(cljs.core.truth_(inst_33711)){
var statearr_33765_33820 = state_33726__$1;
(statearr_33765_33820[(1)] = (36));

} else {
var statearr_33766_33821 = state_33726__$1;
(statearr_33766_33821[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (19))){
var inst_33653 = (state_33726[(7)]);
var inst_33673 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33653);
var state_33726__$1 = state_33726;
var statearr_33767_33822 = state_33726__$1;
(statearr_33767_33822[(2)] = inst_33673);

(statearr_33767_33822[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (11))){
var inst_33653 = (state_33726[(7)]);
var inst_33657 = (inst_33653 == null);
var inst_33658 = cljs.core.not.call(null,inst_33657);
var state_33726__$1 = state_33726;
if(inst_33658){
var statearr_33768_33823 = state_33726__$1;
(statearr_33768_33823[(1)] = (13));

} else {
var statearr_33769_33824 = state_33726__$1;
(statearr_33769_33824[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (9))){
var inst_33628 = (state_33726[(8)]);
var state_33726__$1 = state_33726;
var statearr_33770_33825 = state_33726__$1;
(statearr_33770_33825[(2)] = inst_33628);

(statearr_33770_33825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (5))){
var state_33726__$1 = state_33726;
var statearr_33771_33826 = state_33726__$1;
(statearr_33771_33826[(2)] = true);

(statearr_33771_33826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (14))){
var state_33726__$1 = state_33726;
var statearr_33772_33827 = state_33726__$1;
(statearr_33772_33827[(2)] = false);

(statearr_33772_33827[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (26))){
var inst_33686 = (state_33726[(11)]);
var inst_33693 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33686);
var state_33726__$1 = state_33726;
var statearr_33773_33828 = state_33726__$1;
(statearr_33773_33828[(2)] = inst_33693);

(statearr_33773_33828[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (16))){
var state_33726__$1 = state_33726;
var statearr_33774_33829 = state_33726__$1;
(statearr_33774_33829[(2)] = true);

(statearr_33774_33829[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (38))){
var inst_33716 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
var statearr_33775_33830 = state_33726__$1;
(statearr_33775_33830[(2)] = inst_33716);

(statearr_33775_33830[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (30))){
var inst_33677 = (state_33726[(10)]);
var inst_33678 = (state_33726[(13)]);
var inst_33686 = (state_33726[(11)]);
var inst_33703 = cljs.core.empty_QMARK_.call(null,inst_33677);
var inst_33704 = inst_33678.call(null,inst_33686);
var inst_33705 = cljs.core.not.call(null,inst_33704);
var inst_33706 = (inst_33703) && (inst_33705);
var state_33726__$1 = state_33726;
var statearr_33776_33831 = state_33726__$1;
(statearr_33776_33831[(2)] = inst_33706);

(statearr_33776_33831[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (10))){
var inst_33628 = (state_33726[(8)]);
var inst_33649 = (state_33726[(2)]);
var inst_33650 = cljs.core.get.call(null,inst_33649,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33651 = cljs.core.get.call(null,inst_33649,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33652 = cljs.core.get.call(null,inst_33649,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33653 = inst_33628;
var state_33726__$1 = (function (){var statearr_33777 = state_33726;
(statearr_33777[(16)] = inst_33652);

(statearr_33777[(7)] = inst_33653);

(statearr_33777[(17)] = inst_33650);

(statearr_33777[(18)] = inst_33651);

return statearr_33777;
})();
var statearr_33778_33832 = state_33726__$1;
(statearr_33778_33832[(2)] = null);

(statearr_33778_33832[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (18))){
var inst_33668 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
var statearr_33779_33833 = state_33726__$1;
(statearr_33779_33833[(2)] = inst_33668);

(statearr_33779_33833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (37))){
var state_33726__$1 = state_33726;
var statearr_33780_33834 = state_33726__$1;
(statearr_33780_33834[(2)] = null);

(statearr_33780_33834[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (8))){
var inst_33628 = (state_33726[(8)]);
var inst_33646 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33628);
var state_33726__$1 = state_33726;
var statearr_33781_33835 = state_33726__$1;
(statearr_33781_33835[(2)] = inst_33646);

(statearr_33781_33835[(1)] = (10));


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
});})(c__32008__auto___33789,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31894__auto__,c__32008__auto___33789,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31895__auto__ = null;
var cljs$core$async$mix_$_state_machine__31895__auto____0 = (function (){
var statearr_33785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33785[(0)] = cljs$core$async$mix_$_state_machine__31895__auto__);

(statearr_33785[(1)] = (1));

return statearr_33785;
});
var cljs$core$async$mix_$_state_machine__31895__auto____1 = (function (state_33726){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_33726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e33786){if((e33786 instanceof Object)){
var ex__31898__auto__ = e33786;
var statearr_33787_33836 = state_33726;
(statearr_33787_33836[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33837 = state_33726;
state_33726 = G__33837;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31895__auto__ = function(state_33726){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31895__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31895__auto____1.call(this,state_33726);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31895__auto____0;
cljs$core$async$mix_$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31895__auto____1;
return cljs$core$async$mix_$_state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto___33789,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32010__auto__ = (function (){var statearr_33788 = f__32009__auto__.call(null);
(statearr_33788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___33789);

return statearr_33788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto___33789,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__29991__auto__ = (((p == null))?null:p);
var m__29992__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29991__auto__)]);
if(!((m__29992__auto__ == null))){
return m__29992__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__29992__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__29992__auto____$1 == null))){
return m__29992__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__29991__auto__ = (((p == null))?null:p);
var m__29992__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29991__auto__)]);
if(!((m__29992__auto__ == null))){
return m__29992__auto__.call(null,p,v,ch);
} else {
var m__29992__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__29992__auto____$1 == null))){
return m__29992__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args33838 = [];
var len__30494__auto___33841 = arguments.length;
var i__30495__auto___33842 = (0);
while(true){
if((i__30495__auto___33842 < len__30494__auto___33841)){
args33838.push((arguments[i__30495__auto___33842]));

var G__33843 = (i__30495__auto___33842 + (1));
i__30495__auto___33842 = G__33843;
continue;
} else {
}
break;
}

var G__33840 = args33838.length;
switch (G__33840) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33838.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__29991__auto__ = (((p == null))?null:p);
var m__29992__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29991__auto__)]);
if(!((m__29992__auto__ == null))){
return m__29992__auto__.call(null,p);
} else {
var m__29992__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29992__auto____$1 == null))){
return m__29992__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__29991__auto__ = (((p == null))?null:p);
var m__29992__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29991__auto__)]);
if(!((m__29992__auto__ == null))){
return m__29992__auto__.call(null,p,v);
} else {
var m__29992__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29992__auto____$1 == null))){
return m__29992__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args33846 = [];
var len__30494__auto___33971 = arguments.length;
var i__30495__auto___33972 = (0);
while(true){
if((i__30495__auto___33972 < len__30494__auto___33971)){
args33846.push((arguments[i__30495__auto___33972]));

var G__33973 = (i__30495__auto___33972 + (1));
i__30495__auto___33972 = G__33973;
continue;
} else {
}
break;
}

var G__33848 = args33846.length;
switch (G__33848) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33846.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__29273__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__29273__auto__,mults){
return (function (p1__33845_SHARP_){
if(cljs.core.truth_(p1__33845_SHARP_.call(null,topic))){
return p1__33845_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33845_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__29273__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33849 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33849 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33850){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33850 = meta33850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33851,meta33850__$1){
var self__ = this;
var _33851__$1 = this;
return (new cljs.core.async.t_cljs$core$async33849(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33850__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33849.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33851){
var self__ = this;
var _33851__$1 = this;
return self__.meta33850;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33849.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33849.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33849.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33849.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33849.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33849.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33849.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33849.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33850","meta33850",-875398947,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33849.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33849";

cljs.core.async.t_cljs$core$async33849.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29930__auto__,writer__29931__auto__,opt__29932__auto__){
return cljs.core._write.call(null,writer__29931__auto__,"cljs.core.async/t_cljs$core$async33849");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33849 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33849(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33850){
return (new cljs.core.async.t_cljs$core$async33849(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33850));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33849(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32008__auto___33975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto___33975,mults,ensure_mult,p){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto___33975,mults,ensure_mult,p){
return (function (state_33923){
var state_val_33924 = (state_33923[(1)]);
if((state_val_33924 === (7))){
var inst_33919 = (state_33923[(2)]);
var state_33923__$1 = state_33923;
var statearr_33925_33976 = state_33923__$1;
(statearr_33925_33976[(2)] = inst_33919);

(statearr_33925_33976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (20))){
var state_33923__$1 = state_33923;
var statearr_33926_33977 = state_33923__$1;
(statearr_33926_33977[(2)] = null);

(statearr_33926_33977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (1))){
var state_33923__$1 = state_33923;
var statearr_33927_33978 = state_33923__$1;
(statearr_33927_33978[(2)] = null);

(statearr_33927_33978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (24))){
var inst_33902 = (state_33923[(7)]);
var inst_33911 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33902);
var state_33923__$1 = state_33923;
var statearr_33928_33979 = state_33923__$1;
(statearr_33928_33979[(2)] = inst_33911);

(statearr_33928_33979[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (4))){
var inst_33854 = (state_33923[(8)]);
var inst_33854__$1 = (state_33923[(2)]);
var inst_33855 = (inst_33854__$1 == null);
var state_33923__$1 = (function (){var statearr_33929 = state_33923;
(statearr_33929[(8)] = inst_33854__$1);

return statearr_33929;
})();
if(cljs.core.truth_(inst_33855)){
var statearr_33930_33980 = state_33923__$1;
(statearr_33930_33980[(1)] = (5));

} else {
var statearr_33931_33981 = state_33923__$1;
(statearr_33931_33981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (15))){
var inst_33896 = (state_33923[(2)]);
var state_33923__$1 = state_33923;
var statearr_33932_33982 = state_33923__$1;
(statearr_33932_33982[(2)] = inst_33896);

(statearr_33932_33982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (21))){
var inst_33916 = (state_33923[(2)]);
var state_33923__$1 = (function (){var statearr_33933 = state_33923;
(statearr_33933[(9)] = inst_33916);

return statearr_33933;
})();
var statearr_33934_33983 = state_33923__$1;
(statearr_33934_33983[(2)] = null);

(statearr_33934_33983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (13))){
var inst_33878 = (state_33923[(10)]);
var inst_33880 = cljs.core.chunked_seq_QMARK_.call(null,inst_33878);
var state_33923__$1 = state_33923;
if(inst_33880){
var statearr_33935_33984 = state_33923__$1;
(statearr_33935_33984[(1)] = (16));

} else {
var statearr_33936_33985 = state_33923__$1;
(statearr_33936_33985[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (22))){
var inst_33908 = (state_33923[(2)]);
var state_33923__$1 = state_33923;
if(cljs.core.truth_(inst_33908)){
var statearr_33937_33986 = state_33923__$1;
(statearr_33937_33986[(1)] = (23));

} else {
var statearr_33938_33987 = state_33923__$1;
(statearr_33938_33987[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (6))){
var inst_33904 = (state_33923[(11)]);
var inst_33902 = (state_33923[(7)]);
var inst_33854 = (state_33923[(8)]);
var inst_33902__$1 = topic_fn.call(null,inst_33854);
var inst_33903 = cljs.core.deref.call(null,mults);
var inst_33904__$1 = cljs.core.get.call(null,inst_33903,inst_33902__$1);
var state_33923__$1 = (function (){var statearr_33939 = state_33923;
(statearr_33939[(11)] = inst_33904__$1);

(statearr_33939[(7)] = inst_33902__$1);

return statearr_33939;
})();
if(cljs.core.truth_(inst_33904__$1)){
var statearr_33940_33988 = state_33923__$1;
(statearr_33940_33988[(1)] = (19));

} else {
var statearr_33941_33989 = state_33923__$1;
(statearr_33941_33989[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (25))){
var inst_33913 = (state_33923[(2)]);
var state_33923__$1 = state_33923;
var statearr_33942_33990 = state_33923__$1;
(statearr_33942_33990[(2)] = inst_33913);

(statearr_33942_33990[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (17))){
var inst_33878 = (state_33923[(10)]);
var inst_33887 = cljs.core.first.call(null,inst_33878);
var inst_33888 = cljs.core.async.muxch_STAR_.call(null,inst_33887);
var inst_33889 = cljs.core.async.close_BANG_.call(null,inst_33888);
var inst_33890 = cljs.core.next.call(null,inst_33878);
var inst_33864 = inst_33890;
var inst_33865 = null;
var inst_33866 = (0);
var inst_33867 = (0);
var state_33923__$1 = (function (){var statearr_33943 = state_33923;
(statearr_33943[(12)] = inst_33889);

(statearr_33943[(13)] = inst_33865);

(statearr_33943[(14)] = inst_33864);

(statearr_33943[(15)] = inst_33866);

(statearr_33943[(16)] = inst_33867);

return statearr_33943;
})();
var statearr_33944_33991 = state_33923__$1;
(statearr_33944_33991[(2)] = null);

(statearr_33944_33991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (3))){
var inst_33921 = (state_33923[(2)]);
var state_33923__$1 = state_33923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33923__$1,inst_33921);
} else {
if((state_val_33924 === (12))){
var inst_33898 = (state_33923[(2)]);
var state_33923__$1 = state_33923;
var statearr_33945_33992 = state_33923__$1;
(statearr_33945_33992[(2)] = inst_33898);

(statearr_33945_33992[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (2))){
var state_33923__$1 = state_33923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33923__$1,(4),ch);
} else {
if((state_val_33924 === (23))){
var state_33923__$1 = state_33923;
var statearr_33946_33993 = state_33923__$1;
(statearr_33946_33993[(2)] = null);

(statearr_33946_33993[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (19))){
var inst_33904 = (state_33923[(11)]);
var inst_33854 = (state_33923[(8)]);
var inst_33906 = cljs.core.async.muxch_STAR_.call(null,inst_33904);
var state_33923__$1 = state_33923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33923__$1,(22),inst_33906,inst_33854);
} else {
if((state_val_33924 === (11))){
var inst_33878 = (state_33923[(10)]);
var inst_33864 = (state_33923[(14)]);
var inst_33878__$1 = cljs.core.seq.call(null,inst_33864);
var state_33923__$1 = (function (){var statearr_33947 = state_33923;
(statearr_33947[(10)] = inst_33878__$1);

return statearr_33947;
})();
if(inst_33878__$1){
var statearr_33948_33994 = state_33923__$1;
(statearr_33948_33994[(1)] = (13));

} else {
var statearr_33949_33995 = state_33923__$1;
(statearr_33949_33995[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (9))){
var inst_33900 = (state_33923[(2)]);
var state_33923__$1 = state_33923;
var statearr_33950_33996 = state_33923__$1;
(statearr_33950_33996[(2)] = inst_33900);

(statearr_33950_33996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (5))){
var inst_33861 = cljs.core.deref.call(null,mults);
var inst_33862 = cljs.core.vals.call(null,inst_33861);
var inst_33863 = cljs.core.seq.call(null,inst_33862);
var inst_33864 = inst_33863;
var inst_33865 = null;
var inst_33866 = (0);
var inst_33867 = (0);
var state_33923__$1 = (function (){var statearr_33951 = state_33923;
(statearr_33951[(13)] = inst_33865);

(statearr_33951[(14)] = inst_33864);

(statearr_33951[(15)] = inst_33866);

(statearr_33951[(16)] = inst_33867);

return statearr_33951;
})();
var statearr_33952_33997 = state_33923__$1;
(statearr_33952_33997[(2)] = null);

(statearr_33952_33997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (14))){
var state_33923__$1 = state_33923;
var statearr_33956_33998 = state_33923__$1;
(statearr_33956_33998[(2)] = null);

(statearr_33956_33998[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (16))){
var inst_33878 = (state_33923[(10)]);
var inst_33882 = cljs.core.chunk_first.call(null,inst_33878);
var inst_33883 = cljs.core.chunk_rest.call(null,inst_33878);
var inst_33884 = cljs.core.count.call(null,inst_33882);
var inst_33864 = inst_33883;
var inst_33865 = inst_33882;
var inst_33866 = inst_33884;
var inst_33867 = (0);
var state_33923__$1 = (function (){var statearr_33957 = state_33923;
(statearr_33957[(13)] = inst_33865);

(statearr_33957[(14)] = inst_33864);

(statearr_33957[(15)] = inst_33866);

(statearr_33957[(16)] = inst_33867);

return statearr_33957;
})();
var statearr_33958_33999 = state_33923__$1;
(statearr_33958_33999[(2)] = null);

(statearr_33958_33999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (10))){
var inst_33865 = (state_33923[(13)]);
var inst_33864 = (state_33923[(14)]);
var inst_33866 = (state_33923[(15)]);
var inst_33867 = (state_33923[(16)]);
var inst_33872 = cljs.core._nth.call(null,inst_33865,inst_33867);
var inst_33873 = cljs.core.async.muxch_STAR_.call(null,inst_33872);
var inst_33874 = cljs.core.async.close_BANG_.call(null,inst_33873);
var inst_33875 = (inst_33867 + (1));
var tmp33953 = inst_33865;
var tmp33954 = inst_33864;
var tmp33955 = inst_33866;
var inst_33864__$1 = tmp33954;
var inst_33865__$1 = tmp33953;
var inst_33866__$1 = tmp33955;
var inst_33867__$1 = inst_33875;
var state_33923__$1 = (function (){var statearr_33959 = state_33923;
(statearr_33959[(13)] = inst_33865__$1);

(statearr_33959[(17)] = inst_33874);

(statearr_33959[(14)] = inst_33864__$1);

(statearr_33959[(15)] = inst_33866__$1);

(statearr_33959[(16)] = inst_33867__$1);

return statearr_33959;
})();
var statearr_33960_34000 = state_33923__$1;
(statearr_33960_34000[(2)] = null);

(statearr_33960_34000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (18))){
var inst_33893 = (state_33923[(2)]);
var state_33923__$1 = state_33923;
var statearr_33961_34001 = state_33923__$1;
(statearr_33961_34001[(2)] = inst_33893);

(statearr_33961_34001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33924 === (8))){
var inst_33866 = (state_33923[(15)]);
var inst_33867 = (state_33923[(16)]);
var inst_33869 = (inst_33867 < inst_33866);
var inst_33870 = inst_33869;
var state_33923__$1 = state_33923;
if(cljs.core.truth_(inst_33870)){
var statearr_33962_34002 = state_33923__$1;
(statearr_33962_34002[(1)] = (10));

} else {
var statearr_33963_34003 = state_33923__$1;
(statearr_33963_34003[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__32008__auto___33975,mults,ensure_mult,p))
;
return ((function (switch__31894__auto__,c__32008__auto___33975,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31895__auto__ = null;
var cljs$core$async$state_machine__31895__auto____0 = (function (){
var statearr_33967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33967[(0)] = cljs$core$async$state_machine__31895__auto__);

(statearr_33967[(1)] = (1));

return statearr_33967;
});
var cljs$core$async$state_machine__31895__auto____1 = (function (state_33923){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_33923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e33968){if((e33968 instanceof Object)){
var ex__31898__auto__ = e33968;
var statearr_33969_34004 = state_33923;
(statearr_33969_34004[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34005 = state_33923;
state_33923 = G__34005;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
cljs$core$async$state_machine__31895__auto__ = function(state_33923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31895__auto____1.call(this,state_33923);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31895__auto____0;
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31895__auto____1;
return cljs$core$async$state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto___33975,mults,ensure_mult,p))
})();
var state__32010__auto__ = (function (){var statearr_33970 = f__32009__auto__.call(null);
(statearr_33970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___33975);

return statearr_33970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto___33975,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args34006 = [];
var len__30494__auto___34009 = arguments.length;
var i__30495__auto___34010 = (0);
while(true){
if((i__30495__auto___34010 < len__30494__auto___34009)){
args34006.push((arguments[i__30495__auto___34010]));

var G__34011 = (i__30495__auto___34010 + (1));
i__30495__auto___34010 = G__34011;
continue;
} else {
}
break;
}

var G__34008 = args34006.length;
switch (G__34008) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34006.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args34013 = [];
var len__30494__auto___34016 = arguments.length;
var i__30495__auto___34017 = (0);
while(true){
if((i__30495__auto___34017 < len__30494__auto___34016)){
args34013.push((arguments[i__30495__auto___34017]));

var G__34018 = (i__30495__auto___34017 + (1));
i__30495__auto___34017 = G__34018;
continue;
} else {
}
break;
}

var G__34015 = args34013.length;
switch (G__34015) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34013.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args34020 = [];
var len__30494__auto___34091 = arguments.length;
var i__30495__auto___34092 = (0);
while(true){
if((i__30495__auto___34092 < len__30494__auto___34091)){
args34020.push((arguments[i__30495__auto___34092]));

var G__34093 = (i__30495__auto___34092 + (1));
i__30495__auto___34092 = G__34093;
continue;
} else {
}
break;
}

var G__34022 = args34020.length;
switch (G__34022) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34020.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__32008__auto___34095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto___34095,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto___34095,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34061){
var state_val_34062 = (state_34061[(1)]);
if((state_val_34062 === (7))){
var state_34061__$1 = state_34061;
var statearr_34063_34096 = state_34061__$1;
(statearr_34063_34096[(2)] = null);

(statearr_34063_34096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (1))){
var state_34061__$1 = state_34061;
var statearr_34064_34097 = state_34061__$1;
(statearr_34064_34097[(2)] = null);

(statearr_34064_34097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (4))){
var inst_34025 = (state_34061[(7)]);
var inst_34027 = (inst_34025 < cnt);
var state_34061__$1 = state_34061;
if(cljs.core.truth_(inst_34027)){
var statearr_34065_34098 = state_34061__$1;
(statearr_34065_34098[(1)] = (6));

} else {
var statearr_34066_34099 = state_34061__$1;
(statearr_34066_34099[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (15))){
var inst_34057 = (state_34061[(2)]);
var state_34061__$1 = state_34061;
var statearr_34067_34100 = state_34061__$1;
(statearr_34067_34100[(2)] = inst_34057);

(statearr_34067_34100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (13))){
var inst_34050 = cljs.core.async.close_BANG_.call(null,out);
var state_34061__$1 = state_34061;
var statearr_34068_34101 = state_34061__$1;
(statearr_34068_34101[(2)] = inst_34050);

(statearr_34068_34101[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (6))){
var state_34061__$1 = state_34061;
var statearr_34069_34102 = state_34061__$1;
(statearr_34069_34102[(2)] = null);

(statearr_34069_34102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (3))){
var inst_34059 = (state_34061[(2)]);
var state_34061__$1 = state_34061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34061__$1,inst_34059);
} else {
if((state_val_34062 === (12))){
var inst_34047 = (state_34061[(8)]);
var inst_34047__$1 = (state_34061[(2)]);
var inst_34048 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34047__$1);
var state_34061__$1 = (function (){var statearr_34070 = state_34061;
(statearr_34070[(8)] = inst_34047__$1);

return statearr_34070;
})();
if(cljs.core.truth_(inst_34048)){
var statearr_34071_34103 = state_34061__$1;
(statearr_34071_34103[(1)] = (13));

} else {
var statearr_34072_34104 = state_34061__$1;
(statearr_34072_34104[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (2))){
var inst_34024 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34025 = (0);
var state_34061__$1 = (function (){var statearr_34073 = state_34061;
(statearr_34073[(9)] = inst_34024);

(statearr_34073[(7)] = inst_34025);

return statearr_34073;
})();
var statearr_34074_34105 = state_34061__$1;
(statearr_34074_34105[(2)] = null);

(statearr_34074_34105[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (11))){
var inst_34025 = (state_34061[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34061,(10),Object,null,(9));
var inst_34034 = chs__$1.call(null,inst_34025);
var inst_34035 = done.call(null,inst_34025);
var inst_34036 = cljs.core.async.take_BANG_.call(null,inst_34034,inst_34035);
var state_34061__$1 = state_34061;
var statearr_34075_34106 = state_34061__$1;
(statearr_34075_34106[(2)] = inst_34036);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34061__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (9))){
var inst_34025 = (state_34061[(7)]);
var inst_34038 = (state_34061[(2)]);
var inst_34039 = (inst_34025 + (1));
var inst_34025__$1 = inst_34039;
var state_34061__$1 = (function (){var statearr_34076 = state_34061;
(statearr_34076[(7)] = inst_34025__$1);

(statearr_34076[(10)] = inst_34038);

return statearr_34076;
})();
var statearr_34077_34107 = state_34061__$1;
(statearr_34077_34107[(2)] = null);

(statearr_34077_34107[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (5))){
var inst_34045 = (state_34061[(2)]);
var state_34061__$1 = (function (){var statearr_34078 = state_34061;
(statearr_34078[(11)] = inst_34045);

return statearr_34078;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34061__$1,(12),dchan);
} else {
if((state_val_34062 === (14))){
var inst_34047 = (state_34061[(8)]);
var inst_34052 = cljs.core.apply.call(null,f,inst_34047);
var state_34061__$1 = state_34061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34061__$1,(16),out,inst_34052);
} else {
if((state_val_34062 === (16))){
var inst_34054 = (state_34061[(2)]);
var state_34061__$1 = (function (){var statearr_34079 = state_34061;
(statearr_34079[(12)] = inst_34054);

return statearr_34079;
})();
var statearr_34080_34108 = state_34061__$1;
(statearr_34080_34108[(2)] = null);

(statearr_34080_34108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (10))){
var inst_34029 = (state_34061[(2)]);
var inst_34030 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34061__$1 = (function (){var statearr_34081 = state_34061;
(statearr_34081[(13)] = inst_34029);

return statearr_34081;
})();
var statearr_34082_34109 = state_34061__$1;
(statearr_34082_34109[(2)] = inst_34030);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34061__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (8))){
var inst_34043 = (state_34061[(2)]);
var state_34061__$1 = state_34061;
var statearr_34083_34110 = state_34061__$1;
(statearr_34083_34110[(2)] = inst_34043);

(statearr_34083_34110[(1)] = (5));


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
});})(c__32008__auto___34095,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31894__auto__,c__32008__auto___34095,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31895__auto__ = null;
var cljs$core$async$state_machine__31895__auto____0 = (function (){
var statearr_34087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34087[(0)] = cljs$core$async$state_machine__31895__auto__);

(statearr_34087[(1)] = (1));

return statearr_34087;
});
var cljs$core$async$state_machine__31895__auto____1 = (function (state_34061){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_34061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e34088){if((e34088 instanceof Object)){
var ex__31898__auto__ = e34088;
var statearr_34089_34111 = state_34061;
(statearr_34089_34111[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34112 = state_34061;
state_34061 = G__34112;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
cljs$core$async$state_machine__31895__auto__ = function(state_34061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31895__auto____1.call(this,state_34061);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31895__auto____0;
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31895__auto____1;
return cljs$core$async$state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto___34095,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32010__auto__ = (function (){var statearr_34090 = f__32009__auto__.call(null);
(statearr_34090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___34095);

return statearr_34090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto___34095,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args34114 = [];
var len__30494__auto___34172 = arguments.length;
var i__30495__auto___34173 = (0);
while(true){
if((i__30495__auto___34173 < len__30494__auto___34172)){
args34114.push((arguments[i__30495__auto___34173]));

var G__34174 = (i__30495__auto___34173 + (1));
i__30495__auto___34173 = G__34174;
continue;
} else {
}
break;
}

var G__34116 = args34114.length;
switch (G__34116) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34114.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32008__auto___34176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto___34176,out){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto___34176,out){
return (function (state_34148){
var state_val_34149 = (state_34148[(1)]);
if((state_val_34149 === (7))){
var inst_34127 = (state_34148[(7)]);
var inst_34128 = (state_34148[(8)]);
var inst_34127__$1 = (state_34148[(2)]);
var inst_34128__$1 = cljs.core.nth.call(null,inst_34127__$1,(0),null);
var inst_34129 = cljs.core.nth.call(null,inst_34127__$1,(1),null);
var inst_34130 = (inst_34128__$1 == null);
var state_34148__$1 = (function (){var statearr_34150 = state_34148;
(statearr_34150[(7)] = inst_34127__$1);

(statearr_34150[(8)] = inst_34128__$1);

(statearr_34150[(9)] = inst_34129);

return statearr_34150;
})();
if(cljs.core.truth_(inst_34130)){
var statearr_34151_34177 = state_34148__$1;
(statearr_34151_34177[(1)] = (8));

} else {
var statearr_34152_34178 = state_34148__$1;
(statearr_34152_34178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (1))){
var inst_34117 = cljs.core.vec.call(null,chs);
var inst_34118 = inst_34117;
var state_34148__$1 = (function (){var statearr_34153 = state_34148;
(statearr_34153[(10)] = inst_34118);

return statearr_34153;
})();
var statearr_34154_34179 = state_34148__$1;
(statearr_34154_34179[(2)] = null);

(statearr_34154_34179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (4))){
var inst_34118 = (state_34148[(10)]);
var state_34148__$1 = state_34148;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34148__$1,(7),inst_34118);
} else {
if((state_val_34149 === (6))){
var inst_34144 = (state_34148[(2)]);
var state_34148__$1 = state_34148;
var statearr_34155_34180 = state_34148__$1;
(statearr_34155_34180[(2)] = inst_34144);

(statearr_34155_34180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (3))){
var inst_34146 = (state_34148[(2)]);
var state_34148__$1 = state_34148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34148__$1,inst_34146);
} else {
if((state_val_34149 === (2))){
var inst_34118 = (state_34148[(10)]);
var inst_34120 = cljs.core.count.call(null,inst_34118);
var inst_34121 = (inst_34120 > (0));
var state_34148__$1 = state_34148;
if(cljs.core.truth_(inst_34121)){
var statearr_34157_34181 = state_34148__$1;
(statearr_34157_34181[(1)] = (4));

} else {
var statearr_34158_34182 = state_34148__$1;
(statearr_34158_34182[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (11))){
var inst_34118 = (state_34148[(10)]);
var inst_34137 = (state_34148[(2)]);
var tmp34156 = inst_34118;
var inst_34118__$1 = tmp34156;
var state_34148__$1 = (function (){var statearr_34159 = state_34148;
(statearr_34159[(10)] = inst_34118__$1);

(statearr_34159[(11)] = inst_34137);

return statearr_34159;
})();
var statearr_34160_34183 = state_34148__$1;
(statearr_34160_34183[(2)] = null);

(statearr_34160_34183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (9))){
var inst_34128 = (state_34148[(8)]);
var state_34148__$1 = state_34148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34148__$1,(11),out,inst_34128);
} else {
if((state_val_34149 === (5))){
var inst_34142 = cljs.core.async.close_BANG_.call(null,out);
var state_34148__$1 = state_34148;
var statearr_34161_34184 = state_34148__$1;
(statearr_34161_34184[(2)] = inst_34142);

(statearr_34161_34184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (10))){
var inst_34140 = (state_34148[(2)]);
var state_34148__$1 = state_34148;
var statearr_34162_34185 = state_34148__$1;
(statearr_34162_34185[(2)] = inst_34140);

(statearr_34162_34185[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (8))){
var inst_34127 = (state_34148[(7)]);
var inst_34118 = (state_34148[(10)]);
var inst_34128 = (state_34148[(8)]);
var inst_34129 = (state_34148[(9)]);
var inst_34132 = (function (){var cs = inst_34118;
var vec__34123 = inst_34127;
var v = inst_34128;
var c = inst_34129;
return ((function (cs,vec__34123,v,c,inst_34127,inst_34118,inst_34128,inst_34129,state_val_34149,c__32008__auto___34176,out){
return (function (p1__34113_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34113_SHARP_);
});
;})(cs,vec__34123,v,c,inst_34127,inst_34118,inst_34128,inst_34129,state_val_34149,c__32008__auto___34176,out))
})();
var inst_34133 = cljs.core.filterv.call(null,inst_34132,inst_34118);
var inst_34118__$1 = inst_34133;
var state_34148__$1 = (function (){var statearr_34163 = state_34148;
(statearr_34163[(10)] = inst_34118__$1);

return statearr_34163;
})();
var statearr_34164_34186 = state_34148__$1;
(statearr_34164_34186[(2)] = null);

(statearr_34164_34186[(1)] = (2));


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
});})(c__32008__auto___34176,out))
;
return ((function (switch__31894__auto__,c__32008__auto___34176,out){
return (function() {
var cljs$core$async$state_machine__31895__auto__ = null;
var cljs$core$async$state_machine__31895__auto____0 = (function (){
var statearr_34168 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34168[(0)] = cljs$core$async$state_machine__31895__auto__);

(statearr_34168[(1)] = (1));

return statearr_34168;
});
var cljs$core$async$state_machine__31895__auto____1 = (function (state_34148){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_34148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e34169){if((e34169 instanceof Object)){
var ex__31898__auto__ = e34169;
var statearr_34170_34187 = state_34148;
(statearr_34170_34187[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34188 = state_34148;
state_34148 = G__34188;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
cljs$core$async$state_machine__31895__auto__ = function(state_34148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31895__auto____1.call(this,state_34148);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31895__auto____0;
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31895__auto____1;
return cljs$core$async$state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto___34176,out))
})();
var state__32010__auto__ = (function (){var statearr_34171 = f__32009__auto__.call(null);
(statearr_34171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___34176);

return statearr_34171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto___34176,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args34189 = [];
var len__30494__auto___34238 = arguments.length;
var i__30495__auto___34239 = (0);
while(true){
if((i__30495__auto___34239 < len__30494__auto___34238)){
args34189.push((arguments[i__30495__auto___34239]));

var G__34240 = (i__30495__auto___34239 + (1));
i__30495__auto___34239 = G__34240;
continue;
} else {
}
break;
}

var G__34191 = args34189.length;
switch (G__34191) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34189.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32008__auto___34242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto___34242,out){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto___34242,out){
return (function (state_34215){
var state_val_34216 = (state_34215[(1)]);
if((state_val_34216 === (7))){
var inst_34197 = (state_34215[(7)]);
var inst_34197__$1 = (state_34215[(2)]);
var inst_34198 = (inst_34197__$1 == null);
var inst_34199 = cljs.core.not.call(null,inst_34198);
var state_34215__$1 = (function (){var statearr_34217 = state_34215;
(statearr_34217[(7)] = inst_34197__$1);

return statearr_34217;
})();
if(inst_34199){
var statearr_34218_34243 = state_34215__$1;
(statearr_34218_34243[(1)] = (8));

} else {
var statearr_34219_34244 = state_34215__$1;
(statearr_34219_34244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (1))){
var inst_34192 = (0);
var state_34215__$1 = (function (){var statearr_34220 = state_34215;
(statearr_34220[(8)] = inst_34192);

return statearr_34220;
})();
var statearr_34221_34245 = state_34215__$1;
(statearr_34221_34245[(2)] = null);

(statearr_34221_34245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (4))){
var state_34215__$1 = state_34215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34215__$1,(7),ch);
} else {
if((state_val_34216 === (6))){
var inst_34210 = (state_34215[(2)]);
var state_34215__$1 = state_34215;
var statearr_34222_34246 = state_34215__$1;
(statearr_34222_34246[(2)] = inst_34210);

(statearr_34222_34246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (3))){
var inst_34212 = (state_34215[(2)]);
var inst_34213 = cljs.core.async.close_BANG_.call(null,out);
var state_34215__$1 = (function (){var statearr_34223 = state_34215;
(statearr_34223[(9)] = inst_34212);

return statearr_34223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34215__$1,inst_34213);
} else {
if((state_val_34216 === (2))){
var inst_34192 = (state_34215[(8)]);
var inst_34194 = (inst_34192 < n);
var state_34215__$1 = state_34215;
if(cljs.core.truth_(inst_34194)){
var statearr_34224_34247 = state_34215__$1;
(statearr_34224_34247[(1)] = (4));

} else {
var statearr_34225_34248 = state_34215__$1;
(statearr_34225_34248[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (11))){
var inst_34192 = (state_34215[(8)]);
var inst_34202 = (state_34215[(2)]);
var inst_34203 = (inst_34192 + (1));
var inst_34192__$1 = inst_34203;
var state_34215__$1 = (function (){var statearr_34226 = state_34215;
(statearr_34226[(10)] = inst_34202);

(statearr_34226[(8)] = inst_34192__$1);

return statearr_34226;
})();
var statearr_34227_34249 = state_34215__$1;
(statearr_34227_34249[(2)] = null);

(statearr_34227_34249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (9))){
var state_34215__$1 = state_34215;
var statearr_34228_34250 = state_34215__$1;
(statearr_34228_34250[(2)] = null);

(statearr_34228_34250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (5))){
var state_34215__$1 = state_34215;
var statearr_34229_34251 = state_34215__$1;
(statearr_34229_34251[(2)] = null);

(statearr_34229_34251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (10))){
var inst_34207 = (state_34215[(2)]);
var state_34215__$1 = state_34215;
var statearr_34230_34252 = state_34215__$1;
(statearr_34230_34252[(2)] = inst_34207);

(statearr_34230_34252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (8))){
var inst_34197 = (state_34215[(7)]);
var state_34215__$1 = state_34215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34215__$1,(11),out,inst_34197);
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
});})(c__32008__auto___34242,out))
;
return ((function (switch__31894__auto__,c__32008__auto___34242,out){
return (function() {
var cljs$core$async$state_machine__31895__auto__ = null;
var cljs$core$async$state_machine__31895__auto____0 = (function (){
var statearr_34234 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34234[(0)] = cljs$core$async$state_machine__31895__auto__);

(statearr_34234[(1)] = (1));

return statearr_34234;
});
var cljs$core$async$state_machine__31895__auto____1 = (function (state_34215){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_34215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e34235){if((e34235 instanceof Object)){
var ex__31898__auto__ = e34235;
var statearr_34236_34253 = state_34215;
(statearr_34236_34253[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34254 = state_34215;
state_34215 = G__34254;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
cljs$core$async$state_machine__31895__auto__ = function(state_34215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31895__auto____1.call(this,state_34215);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31895__auto____0;
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31895__auto____1;
return cljs$core$async$state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto___34242,out))
})();
var state__32010__auto__ = (function (){var statearr_34237 = f__32009__auto__.call(null);
(statearr_34237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___34242);

return statearr_34237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto___34242,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34262 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34262 = (function (f,ch,meta34263){
this.f = f;
this.ch = ch;
this.meta34263 = meta34263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34264,meta34263__$1){
var self__ = this;
var _34264__$1 = this;
return (new cljs.core.async.t_cljs$core$async34262(self__.f,self__.ch,meta34263__$1));
});

cljs.core.async.t_cljs$core$async34262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34264){
var self__ = this;
var _34264__$1 = this;
return self__.meta34263;
});

cljs.core.async.t_cljs$core$async34262.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34262.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34262.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34262.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34262.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34265 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34265 = (function (f,ch,meta34263,_,fn1,meta34266){
this.f = f;
this.ch = ch;
this.meta34263 = meta34263;
this._ = _;
this.fn1 = fn1;
this.meta34266 = meta34266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34267,meta34266__$1){
var self__ = this;
var _34267__$1 = this;
return (new cljs.core.async.t_cljs$core$async34265(self__.f,self__.ch,self__.meta34263,self__._,self__.fn1,meta34266__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34265.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34267){
var self__ = this;
var _34267__$1 = this;
return self__.meta34266;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34265.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34265.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34265.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34265.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34255_SHARP_){
return f1.call(null,(((p1__34255_SHARP_ == null))?null:self__.f.call(null,p1__34255_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34265.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34263","meta34263",1915581390,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34262","cljs.core.async/t_cljs$core$async34262",1587101302,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34266","meta34266",843599840,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34265.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34265";

cljs.core.async.t_cljs$core$async34265.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29930__auto__,writer__29931__auto__,opt__29932__auto__){
return cljs.core._write.call(null,writer__29931__auto__,"cljs.core.async/t_cljs$core$async34265");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34265 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34265(f__$1,ch__$1,meta34263__$1,___$2,fn1__$1,meta34266){
return (new cljs.core.async.t_cljs$core$async34265(f__$1,ch__$1,meta34263__$1,___$2,fn1__$1,meta34266));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34265(self__.f,self__.ch,self__.meta34263,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__29261__auto__ = ret;
if(cljs.core.truth_(and__29261__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__29261__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34262.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34262.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34263","meta34263",1915581390,null)], null);
});

cljs.core.async.t_cljs$core$async34262.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34262";

cljs.core.async.t_cljs$core$async34262.cljs$lang$ctorPrWriter = (function (this__29930__auto__,writer__29931__auto__,opt__29932__auto__){
return cljs.core._write.call(null,writer__29931__auto__,"cljs.core.async/t_cljs$core$async34262");
});

cljs.core.async.__GT_t_cljs$core$async34262 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34262(f__$1,ch__$1,meta34263){
return (new cljs.core.async.t_cljs$core$async34262(f__$1,ch__$1,meta34263));
});

}

return (new cljs.core.async.t_cljs$core$async34262(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34271 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34271 = (function (f,ch,meta34272){
this.f = f;
this.ch = ch;
this.meta34272 = meta34272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34273,meta34272__$1){
var self__ = this;
var _34273__$1 = this;
return (new cljs.core.async.t_cljs$core$async34271(self__.f,self__.ch,meta34272__$1));
});

cljs.core.async.t_cljs$core$async34271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34273){
var self__ = this;
var _34273__$1 = this;
return self__.meta34272;
});

cljs.core.async.t_cljs$core$async34271.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34271.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34271.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34271.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34271.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34271.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34272","meta34272",1468655981,null)], null);
});

cljs.core.async.t_cljs$core$async34271.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34271";

cljs.core.async.t_cljs$core$async34271.cljs$lang$ctorPrWriter = (function (this__29930__auto__,writer__29931__auto__,opt__29932__auto__){
return cljs.core._write.call(null,writer__29931__auto__,"cljs.core.async/t_cljs$core$async34271");
});

cljs.core.async.__GT_t_cljs$core$async34271 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34271(f__$1,ch__$1,meta34272){
return (new cljs.core.async.t_cljs$core$async34271(f__$1,ch__$1,meta34272));
});

}

return (new cljs.core.async.t_cljs$core$async34271(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34277 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34277 = (function (p,ch,meta34278){
this.p = p;
this.ch = ch;
this.meta34278 = meta34278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34279,meta34278__$1){
var self__ = this;
var _34279__$1 = this;
return (new cljs.core.async.t_cljs$core$async34277(self__.p,self__.ch,meta34278__$1));
});

cljs.core.async.t_cljs$core$async34277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34279){
var self__ = this;
var _34279__$1 = this;
return self__.meta34278;
});

cljs.core.async.t_cljs$core$async34277.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34277.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34277.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34277.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34277.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34277.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34277.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34278","meta34278",1056036992,null)], null);
});

cljs.core.async.t_cljs$core$async34277.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34277";

cljs.core.async.t_cljs$core$async34277.cljs$lang$ctorPrWriter = (function (this__29930__auto__,writer__29931__auto__,opt__29932__auto__){
return cljs.core._write.call(null,writer__29931__auto__,"cljs.core.async/t_cljs$core$async34277");
});

cljs.core.async.__GT_t_cljs$core$async34277 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34277(p__$1,ch__$1,meta34278){
return (new cljs.core.async.t_cljs$core$async34277(p__$1,ch__$1,meta34278));
});

}

return (new cljs.core.async.t_cljs$core$async34277(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args34280 = [];
var len__30494__auto___34324 = arguments.length;
var i__30495__auto___34325 = (0);
while(true){
if((i__30495__auto___34325 < len__30494__auto___34324)){
args34280.push((arguments[i__30495__auto___34325]));

var G__34326 = (i__30495__auto___34325 + (1));
i__30495__auto___34325 = G__34326;
continue;
} else {
}
break;
}

var G__34282 = args34280.length;
switch (G__34282) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34280.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32008__auto___34328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto___34328,out){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto___34328,out){
return (function (state_34303){
var state_val_34304 = (state_34303[(1)]);
if((state_val_34304 === (7))){
var inst_34299 = (state_34303[(2)]);
var state_34303__$1 = state_34303;
var statearr_34305_34329 = state_34303__$1;
(statearr_34305_34329[(2)] = inst_34299);

(statearr_34305_34329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (1))){
var state_34303__$1 = state_34303;
var statearr_34306_34330 = state_34303__$1;
(statearr_34306_34330[(2)] = null);

(statearr_34306_34330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (4))){
var inst_34285 = (state_34303[(7)]);
var inst_34285__$1 = (state_34303[(2)]);
var inst_34286 = (inst_34285__$1 == null);
var state_34303__$1 = (function (){var statearr_34307 = state_34303;
(statearr_34307[(7)] = inst_34285__$1);

return statearr_34307;
})();
if(cljs.core.truth_(inst_34286)){
var statearr_34308_34331 = state_34303__$1;
(statearr_34308_34331[(1)] = (5));

} else {
var statearr_34309_34332 = state_34303__$1;
(statearr_34309_34332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (6))){
var inst_34285 = (state_34303[(7)]);
var inst_34290 = p.call(null,inst_34285);
var state_34303__$1 = state_34303;
if(cljs.core.truth_(inst_34290)){
var statearr_34310_34333 = state_34303__$1;
(statearr_34310_34333[(1)] = (8));

} else {
var statearr_34311_34334 = state_34303__$1;
(statearr_34311_34334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (3))){
var inst_34301 = (state_34303[(2)]);
var state_34303__$1 = state_34303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34303__$1,inst_34301);
} else {
if((state_val_34304 === (2))){
var state_34303__$1 = state_34303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34303__$1,(4),ch);
} else {
if((state_val_34304 === (11))){
var inst_34293 = (state_34303[(2)]);
var state_34303__$1 = state_34303;
var statearr_34312_34335 = state_34303__$1;
(statearr_34312_34335[(2)] = inst_34293);

(statearr_34312_34335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (9))){
var state_34303__$1 = state_34303;
var statearr_34313_34336 = state_34303__$1;
(statearr_34313_34336[(2)] = null);

(statearr_34313_34336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (5))){
var inst_34288 = cljs.core.async.close_BANG_.call(null,out);
var state_34303__$1 = state_34303;
var statearr_34314_34337 = state_34303__$1;
(statearr_34314_34337[(2)] = inst_34288);

(statearr_34314_34337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (10))){
var inst_34296 = (state_34303[(2)]);
var state_34303__$1 = (function (){var statearr_34315 = state_34303;
(statearr_34315[(8)] = inst_34296);

return statearr_34315;
})();
var statearr_34316_34338 = state_34303__$1;
(statearr_34316_34338[(2)] = null);

(statearr_34316_34338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (8))){
var inst_34285 = (state_34303[(7)]);
var state_34303__$1 = state_34303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34303__$1,(11),out,inst_34285);
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
});})(c__32008__auto___34328,out))
;
return ((function (switch__31894__auto__,c__32008__auto___34328,out){
return (function() {
var cljs$core$async$state_machine__31895__auto__ = null;
var cljs$core$async$state_machine__31895__auto____0 = (function (){
var statearr_34320 = [null,null,null,null,null,null,null,null,null];
(statearr_34320[(0)] = cljs$core$async$state_machine__31895__auto__);

(statearr_34320[(1)] = (1));

return statearr_34320;
});
var cljs$core$async$state_machine__31895__auto____1 = (function (state_34303){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_34303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e34321){if((e34321 instanceof Object)){
var ex__31898__auto__ = e34321;
var statearr_34322_34339 = state_34303;
(statearr_34322_34339[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34340 = state_34303;
state_34303 = G__34340;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
cljs$core$async$state_machine__31895__auto__ = function(state_34303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31895__auto____1.call(this,state_34303);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31895__auto____0;
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31895__auto____1;
return cljs$core$async$state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto___34328,out))
})();
var state__32010__auto__ = (function (){var statearr_34323 = f__32009__auto__.call(null);
(statearr_34323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___34328);

return statearr_34323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto___34328,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34341 = [];
var len__30494__auto___34344 = arguments.length;
var i__30495__auto___34345 = (0);
while(true){
if((i__30495__auto___34345 < len__30494__auto___34344)){
args34341.push((arguments[i__30495__auto___34345]));

var G__34346 = (i__30495__auto___34345 + (1));
i__30495__auto___34345 = G__34346;
continue;
} else {
}
break;
}

var G__34343 = args34341.length;
switch (G__34343) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34341.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto__){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto__){
return (function (state_34513){
var state_val_34514 = (state_34513[(1)]);
if((state_val_34514 === (7))){
var inst_34509 = (state_34513[(2)]);
var state_34513__$1 = state_34513;
var statearr_34515_34556 = state_34513__$1;
(statearr_34515_34556[(2)] = inst_34509);

(statearr_34515_34556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (20))){
var inst_34479 = (state_34513[(7)]);
var inst_34490 = (state_34513[(2)]);
var inst_34491 = cljs.core.next.call(null,inst_34479);
var inst_34465 = inst_34491;
var inst_34466 = null;
var inst_34467 = (0);
var inst_34468 = (0);
var state_34513__$1 = (function (){var statearr_34516 = state_34513;
(statearr_34516[(8)] = inst_34467);

(statearr_34516[(9)] = inst_34466);

(statearr_34516[(10)] = inst_34468);

(statearr_34516[(11)] = inst_34490);

(statearr_34516[(12)] = inst_34465);

return statearr_34516;
})();
var statearr_34517_34557 = state_34513__$1;
(statearr_34517_34557[(2)] = null);

(statearr_34517_34557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (1))){
var state_34513__$1 = state_34513;
var statearr_34518_34558 = state_34513__$1;
(statearr_34518_34558[(2)] = null);

(statearr_34518_34558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (4))){
var inst_34454 = (state_34513[(13)]);
var inst_34454__$1 = (state_34513[(2)]);
var inst_34455 = (inst_34454__$1 == null);
var state_34513__$1 = (function (){var statearr_34519 = state_34513;
(statearr_34519[(13)] = inst_34454__$1);

return statearr_34519;
})();
if(cljs.core.truth_(inst_34455)){
var statearr_34520_34559 = state_34513__$1;
(statearr_34520_34559[(1)] = (5));

} else {
var statearr_34521_34560 = state_34513__$1;
(statearr_34521_34560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (15))){
var state_34513__$1 = state_34513;
var statearr_34525_34561 = state_34513__$1;
(statearr_34525_34561[(2)] = null);

(statearr_34525_34561[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (21))){
var state_34513__$1 = state_34513;
var statearr_34526_34562 = state_34513__$1;
(statearr_34526_34562[(2)] = null);

(statearr_34526_34562[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (13))){
var inst_34467 = (state_34513[(8)]);
var inst_34466 = (state_34513[(9)]);
var inst_34468 = (state_34513[(10)]);
var inst_34465 = (state_34513[(12)]);
var inst_34475 = (state_34513[(2)]);
var inst_34476 = (inst_34468 + (1));
var tmp34522 = inst_34467;
var tmp34523 = inst_34466;
var tmp34524 = inst_34465;
var inst_34465__$1 = tmp34524;
var inst_34466__$1 = tmp34523;
var inst_34467__$1 = tmp34522;
var inst_34468__$1 = inst_34476;
var state_34513__$1 = (function (){var statearr_34527 = state_34513;
(statearr_34527[(8)] = inst_34467__$1);

(statearr_34527[(14)] = inst_34475);

(statearr_34527[(9)] = inst_34466__$1);

(statearr_34527[(10)] = inst_34468__$1);

(statearr_34527[(12)] = inst_34465__$1);

return statearr_34527;
})();
var statearr_34528_34563 = state_34513__$1;
(statearr_34528_34563[(2)] = null);

(statearr_34528_34563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (22))){
var state_34513__$1 = state_34513;
var statearr_34529_34564 = state_34513__$1;
(statearr_34529_34564[(2)] = null);

(statearr_34529_34564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (6))){
var inst_34454 = (state_34513[(13)]);
var inst_34463 = f.call(null,inst_34454);
var inst_34464 = cljs.core.seq.call(null,inst_34463);
var inst_34465 = inst_34464;
var inst_34466 = null;
var inst_34467 = (0);
var inst_34468 = (0);
var state_34513__$1 = (function (){var statearr_34530 = state_34513;
(statearr_34530[(8)] = inst_34467);

(statearr_34530[(9)] = inst_34466);

(statearr_34530[(10)] = inst_34468);

(statearr_34530[(12)] = inst_34465);

return statearr_34530;
})();
var statearr_34531_34565 = state_34513__$1;
(statearr_34531_34565[(2)] = null);

(statearr_34531_34565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (17))){
var inst_34479 = (state_34513[(7)]);
var inst_34483 = cljs.core.chunk_first.call(null,inst_34479);
var inst_34484 = cljs.core.chunk_rest.call(null,inst_34479);
var inst_34485 = cljs.core.count.call(null,inst_34483);
var inst_34465 = inst_34484;
var inst_34466 = inst_34483;
var inst_34467 = inst_34485;
var inst_34468 = (0);
var state_34513__$1 = (function (){var statearr_34532 = state_34513;
(statearr_34532[(8)] = inst_34467);

(statearr_34532[(9)] = inst_34466);

(statearr_34532[(10)] = inst_34468);

(statearr_34532[(12)] = inst_34465);

return statearr_34532;
})();
var statearr_34533_34566 = state_34513__$1;
(statearr_34533_34566[(2)] = null);

(statearr_34533_34566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (3))){
var inst_34511 = (state_34513[(2)]);
var state_34513__$1 = state_34513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34513__$1,inst_34511);
} else {
if((state_val_34514 === (12))){
var inst_34499 = (state_34513[(2)]);
var state_34513__$1 = state_34513;
var statearr_34534_34567 = state_34513__$1;
(statearr_34534_34567[(2)] = inst_34499);

(statearr_34534_34567[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (2))){
var state_34513__$1 = state_34513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34513__$1,(4),in$);
} else {
if((state_val_34514 === (23))){
var inst_34507 = (state_34513[(2)]);
var state_34513__$1 = state_34513;
var statearr_34535_34568 = state_34513__$1;
(statearr_34535_34568[(2)] = inst_34507);

(statearr_34535_34568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (19))){
var inst_34494 = (state_34513[(2)]);
var state_34513__$1 = state_34513;
var statearr_34536_34569 = state_34513__$1;
(statearr_34536_34569[(2)] = inst_34494);

(statearr_34536_34569[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (11))){
var inst_34479 = (state_34513[(7)]);
var inst_34465 = (state_34513[(12)]);
var inst_34479__$1 = cljs.core.seq.call(null,inst_34465);
var state_34513__$1 = (function (){var statearr_34537 = state_34513;
(statearr_34537[(7)] = inst_34479__$1);

return statearr_34537;
})();
if(inst_34479__$1){
var statearr_34538_34570 = state_34513__$1;
(statearr_34538_34570[(1)] = (14));

} else {
var statearr_34539_34571 = state_34513__$1;
(statearr_34539_34571[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (9))){
var inst_34501 = (state_34513[(2)]);
var inst_34502 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34513__$1 = (function (){var statearr_34540 = state_34513;
(statearr_34540[(15)] = inst_34501);

return statearr_34540;
})();
if(cljs.core.truth_(inst_34502)){
var statearr_34541_34572 = state_34513__$1;
(statearr_34541_34572[(1)] = (21));

} else {
var statearr_34542_34573 = state_34513__$1;
(statearr_34542_34573[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (5))){
var inst_34457 = cljs.core.async.close_BANG_.call(null,out);
var state_34513__$1 = state_34513;
var statearr_34543_34574 = state_34513__$1;
(statearr_34543_34574[(2)] = inst_34457);

(statearr_34543_34574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (14))){
var inst_34479 = (state_34513[(7)]);
var inst_34481 = cljs.core.chunked_seq_QMARK_.call(null,inst_34479);
var state_34513__$1 = state_34513;
if(inst_34481){
var statearr_34544_34575 = state_34513__$1;
(statearr_34544_34575[(1)] = (17));

} else {
var statearr_34545_34576 = state_34513__$1;
(statearr_34545_34576[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (16))){
var inst_34497 = (state_34513[(2)]);
var state_34513__$1 = state_34513;
var statearr_34546_34577 = state_34513__$1;
(statearr_34546_34577[(2)] = inst_34497);

(statearr_34546_34577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (10))){
var inst_34466 = (state_34513[(9)]);
var inst_34468 = (state_34513[(10)]);
var inst_34473 = cljs.core._nth.call(null,inst_34466,inst_34468);
var state_34513__$1 = state_34513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34513__$1,(13),out,inst_34473);
} else {
if((state_val_34514 === (18))){
var inst_34479 = (state_34513[(7)]);
var inst_34488 = cljs.core.first.call(null,inst_34479);
var state_34513__$1 = state_34513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34513__$1,(20),out,inst_34488);
} else {
if((state_val_34514 === (8))){
var inst_34467 = (state_34513[(8)]);
var inst_34468 = (state_34513[(10)]);
var inst_34470 = (inst_34468 < inst_34467);
var inst_34471 = inst_34470;
var state_34513__$1 = state_34513;
if(cljs.core.truth_(inst_34471)){
var statearr_34547_34578 = state_34513__$1;
(statearr_34547_34578[(1)] = (10));

} else {
var statearr_34548_34579 = state_34513__$1;
(statearr_34548_34579[(1)] = (11));

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
}
}
}
}
}
}
});})(c__32008__auto__))
;
return ((function (switch__31894__auto__,c__32008__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31895__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31895__auto____0 = (function (){
var statearr_34552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34552[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31895__auto__);

(statearr_34552[(1)] = (1));

return statearr_34552;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31895__auto____1 = (function (state_34513){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_34513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e34553){if((e34553 instanceof Object)){
var ex__31898__auto__ = e34553;
var statearr_34554_34580 = state_34513;
(statearr_34554_34580[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34581 = state_34513;
state_34513 = G__34581;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31895__auto__ = function(state_34513){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31895__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31895__auto____1.call(this,state_34513);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31895__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31895__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto__))
})();
var state__32010__auto__ = (function (){var statearr_34555 = f__32009__auto__.call(null);
(statearr_34555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto__);

return statearr_34555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto__))
);

return c__32008__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args34582 = [];
var len__30494__auto___34585 = arguments.length;
var i__30495__auto___34586 = (0);
while(true){
if((i__30495__auto___34586 < len__30494__auto___34585)){
args34582.push((arguments[i__30495__auto___34586]));

var G__34587 = (i__30495__auto___34586 + (1));
i__30495__auto___34586 = G__34587;
continue;
} else {
}
break;
}

var G__34584 = args34582.length;
switch (G__34584) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34582.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args34589 = [];
var len__30494__auto___34592 = arguments.length;
var i__30495__auto___34593 = (0);
while(true){
if((i__30495__auto___34593 < len__30494__auto___34592)){
args34589.push((arguments[i__30495__auto___34593]));

var G__34594 = (i__30495__auto___34593 + (1));
i__30495__auto___34593 = G__34594;
continue;
} else {
}
break;
}

var G__34591 = args34589.length;
switch (G__34591) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34589.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args34596 = [];
var len__30494__auto___34647 = arguments.length;
var i__30495__auto___34648 = (0);
while(true){
if((i__30495__auto___34648 < len__30494__auto___34647)){
args34596.push((arguments[i__30495__auto___34648]));

var G__34649 = (i__30495__auto___34648 + (1));
i__30495__auto___34648 = G__34649;
continue;
} else {
}
break;
}

var G__34598 = args34596.length;
switch (G__34598) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34596.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32008__auto___34651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto___34651,out){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto___34651,out){
return (function (state_34622){
var state_val_34623 = (state_34622[(1)]);
if((state_val_34623 === (7))){
var inst_34617 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
var statearr_34624_34652 = state_34622__$1;
(statearr_34624_34652[(2)] = inst_34617);

(statearr_34624_34652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (1))){
var inst_34599 = null;
var state_34622__$1 = (function (){var statearr_34625 = state_34622;
(statearr_34625[(7)] = inst_34599);

return statearr_34625;
})();
var statearr_34626_34653 = state_34622__$1;
(statearr_34626_34653[(2)] = null);

(statearr_34626_34653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (4))){
var inst_34602 = (state_34622[(8)]);
var inst_34602__$1 = (state_34622[(2)]);
var inst_34603 = (inst_34602__$1 == null);
var inst_34604 = cljs.core.not.call(null,inst_34603);
var state_34622__$1 = (function (){var statearr_34627 = state_34622;
(statearr_34627[(8)] = inst_34602__$1);

return statearr_34627;
})();
if(inst_34604){
var statearr_34628_34654 = state_34622__$1;
(statearr_34628_34654[(1)] = (5));

} else {
var statearr_34629_34655 = state_34622__$1;
(statearr_34629_34655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (6))){
var state_34622__$1 = state_34622;
var statearr_34630_34656 = state_34622__$1;
(statearr_34630_34656[(2)] = null);

(statearr_34630_34656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (3))){
var inst_34619 = (state_34622[(2)]);
var inst_34620 = cljs.core.async.close_BANG_.call(null,out);
var state_34622__$1 = (function (){var statearr_34631 = state_34622;
(statearr_34631[(9)] = inst_34619);

return statearr_34631;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34622__$1,inst_34620);
} else {
if((state_val_34623 === (2))){
var state_34622__$1 = state_34622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34622__$1,(4),ch);
} else {
if((state_val_34623 === (11))){
var inst_34602 = (state_34622[(8)]);
var inst_34611 = (state_34622[(2)]);
var inst_34599 = inst_34602;
var state_34622__$1 = (function (){var statearr_34632 = state_34622;
(statearr_34632[(7)] = inst_34599);

(statearr_34632[(10)] = inst_34611);

return statearr_34632;
})();
var statearr_34633_34657 = state_34622__$1;
(statearr_34633_34657[(2)] = null);

(statearr_34633_34657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (9))){
var inst_34602 = (state_34622[(8)]);
var state_34622__$1 = state_34622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34622__$1,(11),out,inst_34602);
} else {
if((state_val_34623 === (5))){
var inst_34599 = (state_34622[(7)]);
var inst_34602 = (state_34622[(8)]);
var inst_34606 = cljs.core._EQ_.call(null,inst_34602,inst_34599);
var state_34622__$1 = state_34622;
if(inst_34606){
var statearr_34635_34658 = state_34622__$1;
(statearr_34635_34658[(1)] = (8));

} else {
var statearr_34636_34659 = state_34622__$1;
(statearr_34636_34659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (10))){
var inst_34614 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
var statearr_34637_34660 = state_34622__$1;
(statearr_34637_34660[(2)] = inst_34614);

(statearr_34637_34660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (8))){
var inst_34599 = (state_34622[(7)]);
var tmp34634 = inst_34599;
var inst_34599__$1 = tmp34634;
var state_34622__$1 = (function (){var statearr_34638 = state_34622;
(statearr_34638[(7)] = inst_34599__$1);

return statearr_34638;
})();
var statearr_34639_34661 = state_34622__$1;
(statearr_34639_34661[(2)] = null);

(statearr_34639_34661[(1)] = (2));


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
});})(c__32008__auto___34651,out))
;
return ((function (switch__31894__auto__,c__32008__auto___34651,out){
return (function() {
var cljs$core$async$state_machine__31895__auto__ = null;
var cljs$core$async$state_machine__31895__auto____0 = (function (){
var statearr_34643 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34643[(0)] = cljs$core$async$state_machine__31895__auto__);

(statearr_34643[(1)] = (1));

return statearr_34643;
});
var cljs$core$async$state_machine__31895__auto____1 = (function (state_34622){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_34622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e34644){if((e34644 instanceof Object)){
var ex__31898__auto__ = e34644;
var statearr_34645_34662 = state_34622;
(statearr_34645_34662[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34663 = state_34622;
state_34622 = G__34663;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
cljs$core$async$state_machine__31895__auto__ = function(state_34622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31895__auto____1.call(this,state_34622);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31895__auto____0;
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31895__auto____1;
return cljs$core$async$state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto___34651,out))
})();
var state__32010__auto__ = (function (){var statearr_34646 = f__32009__auto__.call(null);
(statearr_34646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___34651);

return statearr_34646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto___34651,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args34664 = [];
var len__30494__auto___34734 = arguments.length;
var i__30495__auto___34735 = (0);
while(true){
if((i__30495__auto___34735 < len__30494__auto___34734)){
args34664.push((arguments[i__30495__auto___34735]));

var G__34736 = (i__30495__auto___34735 + (1));
i__30495__auto___34735 = G__34736;
continue;
} else {
}
break;
}

var G__34666 = args34664.length;
switch (G__34666) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34664.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32008__auto___34738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto___34738,out){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto___34738,out){
return (function (state_34704){
var state_val_34705 = (state_34704[(1)]);
if((state_val_34705 === (7))){
var inst_34700 = (state_34704[(2)]);
var state_34704__$1 = state_34704;
var statearr_34706_34739 = state_34704__$1;
(statearr_34706_34739[(2)] = inst_34700);

(statearr_34706_34739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (1))){
var inst_34667 = (new Array(n));
var inst_34668 = inst_34667;
var inst_34669 = (0);
var state_34704__$1 = (function (){var statearr_34707 = state_34704;
(statearr_34707[(7)] = inst_34668);

(statearr_34707[(8)] = inst_34669);

return statearr_34707;
})();
var statearr_34708_34740 = state_34704__$1;
(statearr_34708_34740[(2)] = null);

(statearr_34708_34740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (4))){
var inst_34672 = (state_34704[(9)]);
var inst_34672__$1 = (state_34704[(2)]);
var inst_34673 = (inst_34672__$1 == null);
var inst_34674 = cljs.core.not.call(null,inst_34673);
var state_34704__$1 = (function (){var statearr_34709 = state_34704;
(statearr_34709[(9)] = inst_34672__$1);

return statearr_34709;
})();
if(inst_34674){
var statearr_34710_34741 = state_34704__$1;
(statearr_34710_34741[(1)] = (5));

} else {
var statearr_34711_34742 = state_34704__$1;
(statearr_34711_34742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (15))){
var inst_34694 = (state_34704[(2)]);
var state_34704__$1 = state_34704;
var statearr_34712_34743 = state_34704__$1;
(statearr_34712_34743[(2)] = inst_34694);

(statearr_34712_34743[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (13))){
var state_34704__$1 = state_34704;
var statearr_34713_34744 = state_34704__$1;
(statearr_34713_34744[(2)] = null);

(statearr_34713_34744[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (6))){
var inst_34669 = (state_34704[(8)]);
var inst_34690 = (inst_34669 > (0));
var state_34704__$1 = state_34704;
if(cljs.core.truth_(inst_34690)){
var statearr_34714_34745 = state_34704__$1;
(statearr_34714_34745[(1)] = (12));

} else {
var statearr_34715_34746 = state_34704__$1;
(statearr_34715_34746[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (3))){
var inst_34702 = (state_34704[(2)]);
var state_34704__$1 = state_34704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34704__$1,inst_34702);
} else {
if((state_val_34705 === (12))){
var inst_34668 = (state_34704[(7)]);
var inst_34692 = cljs.core.vec.call(null,inst_34668);
var state_34704__$1 = state_34704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34704__$1,(15),out,inst_34692);
} else {
if((state_val_34705 === (2))){
var state_34704__$1 = state_34704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34704__$1,(4),ch);
} else {
if((state_val_34705 === (11))){
var inst_34684 = (state_34704[(2)]);
var inst_34685 = (new Array(n));
var inst_34668 = inst_34685;
var inst_34669 = (0);
var state_34704__$1 = (function (){var statearr_34716 = state_34704;
(statearr_34716[(10)] = inst_34684);

(statearr_34716[(7)] = inst_34668);

(statearr_34716[(8)] = inst_34669);

return statearr_34716;
})();
var statearr_34717_34747 = state_34704__$1;
(statearr_34717_34747[(2)] = null);

(statearr_34717_34747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (9))){
var inst_34668 = (state_34704[(7)]);
var inst_34682 = cljs.core.vec.call(null,inst_34668);
var state_34704__$1 = state_34704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34704__$1,(11),out,inst_34682);
} else {
if((state_val_34705 === (5))){
var inst_34677 = (state_34704[(11)]);
var inst_34668 = (state_34704[(7)]);
var inst_34672 = (state_34704[(9)]);
var inst_34669 = (state_34704[(8)]);
var inst_34676 = (inst_34668[inst_34669] = inst_34672);
var inst_34677__$1 = (inst_34669 + (1));
var inst_34678 = (inst_34677__$1 < n);
var state_34704__$1 = (function (){var statearr_34718 = state_34704;
(statearr_34718[(11)] = inst_34677__$1);

(statearr_34718[(12)] = inst_34676);

return statearr_34718;
})();
if(cljs.core.truth_(inst_34678)){
var statearr_34719_34748 = state_34704__$1;
(statearr_34719_34748[(1)] = (8));

} else {
var statearr_34720_34749 = state_34704__$1;
(statearr_34720_34749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (14))){
var inst_34697 = (state_34704[(2)]);
var inst_34698 = cljs.core.async.close_BANG_.call(null,out);
var state_34704__$1 = (function (){var statearr_34722 = state_34704;
(statearr_34722[(13)] = inst_34697);

return statearr_34722;
})();
var statearr_34723_34750 = state_34704__$1;
(statearr_34723_34750[(2)] = inst_34698);

(statearr_34723_34750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (10))){
var inst_34688 = (state_34704[(2)]);
var state_34704__$1 = state_34704;
var statearr_34724_34751 = state_34704__$1;
(statearr_34724_34751[(2)] = inst_34688);

(statearr_34724_34751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (8))){
var inst_34677 = (state_34704[(11)]);
var inst_34668 = (state_34704[(7)]);
var tmp34721 = inst_34668;
var inst_34668__$1 = tmp34721;
var inst_34669 = inst_34677;
var state_34704__$1 = (function (){var statearr_34725 = state_34704;
(statearr_34725[(7)] = inst_34668__$1);

(statearr_34725[(8)] = inst_34669);

return statearr_34725;
})();
var statearr_34726_34752 = state_34704__$1;
(statearr_34726_34752[(2)] = null);

(statearr_34726_34752[(1)] = (2));


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
});})(c__32008__auto___34738,out))
;
return ((function (switch__31894__auto__,c__32008__auto___34738,out){
return (function() {
var cljs$core$async$state_machine__31895__auto__ = null;
var cljs$core$async$state_machine__31895__auto____0 = (function (){
var statearr_34730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34730[(0)] = cljs$core$async$state_machine__31895__auto__);

(statearr_34730[(1)] = (1));

return statearr_34730;
});
var cljs$core$async$state_machine__31895__auto____1 = (function (state_34704){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_34704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e34731){if((e34731 instanceof Object)){
var ex__31898__auto__ = e34731;
var statearr_34732_34753 = state_34704;
(statearr_34732_34753[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34754 = state_34704;
state_34704 = G__34754;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
cljs$core$async$state_machine__31895__auto__ = function(state_34704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31895__auto____1.call(this,state_34704);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31895__auto____0;
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31895__auto____1;
return cljs$core$async$state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto___34738,out))
})();
var state__32010__auto__ = (function (){var statearr_34733 = f__32009__auto__.call(null);
(statearr_34733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___34738);

return statearr_34733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto___34738,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args34755 = [];
var len__30494__auto___34829 = arguments.length;
var i__30495__auto___34830 = (0);
while(true){
if((i__30495__auto___34830 < len__30494__auto___34829)){
args34755.push((arguments[i__30495__auto___34830]));

var G__34831 = (i__30495__auto___34830 + (1));
i__30495__auto___34830 = G__34831;
continue;
} else {
}
break;
}

var G__34757 = args34755.length;
switch (G__34757) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34755.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32008__auto___34833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32008__auto___34833,out){
return (function (){
var f__32009__auto__ = (function (){var switch__31894__auto__ = ((function (c__32008__auto___34833,out){
return (function (state_34799){
var state_val_34800 = (state_34799[(1)]);
if((state_val_34800 === (7))){
var inst_34795 = (state_34799[(2)]);
var state_34799__$1 = state_34799;
var statearr_34801_34834 = state_34799__$1;
(statearr_34801_34834[(2)] = inst_34795);

(statearr_34801_34834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (1))){
var inst_34758 = [];
var inst_34759 = inst_34758;
var inst_34760 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34799__$1 = (function (){var statearr_34802 = state_34799;
(statearr_34802[(7)] = inst_34760);

(statearr_34802[(8)] = inst_34759);

return statearr_34802;
})();
var statearr_34803_34835 = state_34799__$1;
(statearr_34803_34835[(2)] = null);

(statearr_34803_34835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (4))){
var inst_34763 = (state_34799[(9)]);
var inst_34763__$1 = (state_34799[(2)]);
var inst_34764 = (inst_34763__$1 == null);
var inst_34765 = cljs.core.not.call(null,inst_34764);
var state_34799__$1 = (function (){var statearr_34804 = state_34799;
(statearr_34804[(9)] = inst_34763__$1);

return statearr_34804;
})();
if(inst_34765){
var statearr_34805_34836 = state_34799__$1;
(statearr_34805_34836[(1)] = (5));

} else {
var statearr_34806_34837 = state_34799__$1;
(statearr_34806_34837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (15))){
var inst_34789 = (state_34799[(2)]);
var state_34799__$1 = state_34799;
var statearr_34807_34838 = state_34799__$1;
(statearr_34807_34838[(2)] = inst_34789);

(statearr_34807_34838[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (13))){
var state_34799__$1 = state_34799;
var statearr_34808_34839 = state_34799__$1;
(statearr_34808_34839[(2)] = null);

(statearr_34808_34839[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (6))){
var inst_34759 = (state_34799[(8)]);
var inst_34784 = inst_34759.length;
var inst_34785 = (inst_34784 > (0));
var state_34799__$1 = state_34799;
if(cljs.core.truth_(inst_34785)){
var statearr_34809_34840 = state_34799__$1;
(statearr_34809_34840[(1)] = (12));

} else {
var statearr_34810_34841 = state_34799__$1;
(statearr_34810_34841[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (3))){
var inst_34797 = (state_34799[(2)]);
var state_34799__$1 = state_34799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34799__$1,inst_34797);
} else {
if((state_val_34800 === (12))){
var inst_34759 = (state_34799[(8)]);
var inst_34787 = cljs.core.vec.call(null,inst_34759);
var state_34799__$1 = state_34799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34799__$1,(15),out,inst_34787);
} else {
if((state_val_34800 === (2))){
var state_34799__$1 = state_34799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34799__$1,(4),ch);
} else {
if((state_val_34800 === (11))){
var inst_34767 = (state_34799[(10)]);
var inst_34763 = (state_34799[(9)]);
var inst_34777 = (state_34799[(2)]);
var inst_34778 = [];
var inst_34779 = inst_34778.push(inst_34763);
var inst_34759 = inst_34778;
var inst_34760 = inst_34767;
var state_34799__$1 = (function (){var statearr_34811 = state_34799;
(statearr_34811[(7)] = inst_34760);

(statearr_34811[(11)] = inst_34779);

(statearr_34811[(8)] = inst_34759);

(statearr_34811[(12)] = inst_34777);

return statearr_34811;
})();
var statearr_34812_34842 = state_34799__$1;
(statearr_34812_34842[(2)] = null);

(statearr_34812_34842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (9))){
var inst_34759 = (state_34799[(8)]);
var inst_34775 = cljs.core.vec.call(null,inst_34759);
var state_34799__$1 = state_34799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34799__$1,(11),out,inst_34775);
} else {
if((state_val_34800 === (5))){
var inst_34760 = (state_34799[(7)]);
var inst_34767 = (state_34799[(10)]);
var inst_34763 = (state_34799[(9)]);
var inst_34767__$1 = f.call(null,inst_34763);
var inst_34768 = cljs.core._EQ_.call(null,inst_34767__$1,inst_34760);
var inst_34769 = cljs.core.keyword_identical_QMARK_.call(null,inst_34760,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34770 = (inst_34768) || (inst_34769);
var state_34799__$1 = (function (){var statearr_34813 = state_34799;
(statearr_34813[(10)] = inst_34767__$1);

return statearr_34813;
})();
if(cljs.core.truth_(inst_34770)){
var statearr_34814_34843 = state_34799__$1;
(statearr_34814_34843[(1)] = (8));

} else {
var statearr_34815_34844 = state_34799__$1;
(statearr_34815_34844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (14))){
var inst_34792 = (state_34799[(2)]);
var inst_34793 = cljs.core.async.close_BANG_.call(null,out);
var state_34799__$1 = (function (){var statearr_34817 = state_34799;
(statearr_34817[(13)] = inst_34792);

return statearr_34817;
})();
var statearr_34818_34845 = state_34799__$1;
(statearr_34818_34845[(2)] = inst_34793);

(statearr_34818_34845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (10))){
var inst_34782 = (state_34799[(2)]);
var state_34799__$1 = state_34799;
var statearr_34819_34846 = state_34799__$1;
(statearr_34819_34846[(2)] = inst_34782);

(statearr_34819_34846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (8))){
var inst_34767 = (state_34799[(10)]);
var inst_34763 = (state_34799[(9)]);
var inst_34759 = (state_34799[(8)]);
var inst_34772 = inst_34759.push(inst_34763);
var tmp34816 = inst_34759;
var inst_34759__$1 = tmp34816;
var inst_34760 = inst_34767;
var state_34799__$1 = (function (){var statearr_34820 = state_34799;
(statearr_34820[(14)] = inst_34772);

(statearr_34820[(7)] = inst_34760);

(statearr_34820[(8)] = inst_34759__$1);

return statearr_34820;
})();
var statearr_34821_34847 = state_34799__$1;
(statearr_34821_34847[(2)] = null);

(statearr_34821_34847[(1)] = (2));


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
});})(c__32008__auto___34833,out))
;
return ((function (switch__31894__auto__,c__32008__auto___34833,out){
return (function() {
var cljs$core$async$state_machine__31895__auto__ = null;
var cljs$core$async$state_machine__31895__auto____0 = (function (){
var statearr_34825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34825[(0)] = cljs$core$async$state_machine__31895__auto__);

(statearr_34825[(1)] = (1));

return statearr_34825;
});
var cljs$core$async$state_machine__31895__auto____1 = (function (state_34799){
while(true){
var ret_value__31896__auto__ = (function (){try{while(true){
var result__31897__auto__ = switch__31894__auto__.call(null,state_34799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31897__auto__;
}
break;
}
}catch (e34826){if((e34826 instanceof Object)){
var ex__31898__auto__ = e34826;
var statearr_34827_34848 = state_34799;
(statearr_34827_34848[(5)] = ex__31898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34849 = state_34799;
state_34799 = G__34849;
continue;
} else {
return ret_value__31896__auto__;
}
break;
}
});
cljs$core$async$state_machine__31895__auto__ = function(state_34799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31895__auto____1.call(this,state_34799);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31895__auto____0;
cljs$core$async$state_machine__31895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31895__auto____1;
return cljs$core$async$state_machine__31895__auto__;
})()
;})(switch__31894__auto__,c__32008__auto___34833,out))
})();
var state__32010__auto__ = (function (){var statearr_34828 = f__32009__auto__.call(null);
(statearr_34828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32008__auto___34833);

return statearr_34828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32010__auto__);
});})(c__32008__auto___34833,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1513965917134