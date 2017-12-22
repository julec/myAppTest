// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30576 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30576 = (function (val,meta30577){
this.val = val;
this.meta30577 = meta30577;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30578,meta30577__$1){
var self__ = this;
var _30578__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30576(self__.val,meta30577__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30578){
var self__ = this;
var _30578__$1 = this;
return self__.meta30577;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30576.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta30577","meta30577",2047518322,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30576.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30576.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels30576";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30576.cljs$lang$ctorPrWriter = (function (this__29930__auto__,writer__29931__auto__,opt__29932__auto__){
return cljs.core._write.call(null,writer__29931__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels30576");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels30576 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels30576(val__$1,meta30577){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30576(val__$1,meta30577));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30576(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__29930__auto__,writer__29931__auto__,opt__29932__auto__){
return cljs.core._write.call(null,writer__29931__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__29991__auto__ = (((this$ == null))?null:this$);
var m__29992__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__29991__auto__)]);
if(!((m__29992__auto__ == null))){
return m__29992__auto__.call(null,this$);
} else {
var m__29992__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__29992__auto____$1 == null))){
return m__29992__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_30590 = self__.puts.pop();
if((putter_30590 == null)){
} else {
var put_handler_30591 = putter_30590.handler;
var val_30592 = putter_30590.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_30591)){
var put_cb_30593 = cljs.core.async.impl.protocols.commit.call(null,put_handler_30591);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_30593,put_handler_30591,val_30592,putter_30590,this$__$1){
return (function (){
return put_cb_30593.call(null,true);
});})(put_cb_30593,put_handler_30591,val_30592,putter_30590,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't put nil in on a channel"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(not (nil? val))")].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__29261__auto__ = self__.buf;
if(cljs.core.truth_(and__29261__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__29261__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__30594 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__30594;
continue;
} else {
var G__30595 = takers;
takers = G__30595;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__30579_30596 = cljs.core.seq.call(null,take_cbs);
var chunk__30580_30597 = null;
var count__30581_30598 = (0);
var i__30582_30599 = (0);
while(true){
if((i__30582_30599 < count__30581_30598)){
var f_30600 = cljs.core._nth.call(null,chunk__30580_30597,i__30582_30599);
cljs.core.async.impl.dispatch.run.call(null,f_30600);

var G__30601 = seq__30579_30596;
var G__30602 = chunk__30580_30597;
var G__30603 = count__30581_30598;
var G__30604 = (i__30582_30599 + (1));
seq__30579_30596 = G__30601;
chunk__30580_30597 = G__30602;
count__30581_30598 = G__30603;
i__30582_30599 = G__30604;
continue;
} else {
var temp__5457__auto___30605 = cljs.core.seq.call(null,seq__30579_30596);
if(temp__5457__auto___30605){
var seq__30579_30606__$1 = temp__5457__auto___30605;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30579_30606__$1)){
var c__30184__auto___30607 = cljs.core.chunk_first.call(null,seq__30579_30606__$1);
var G__30608 = cljs.core.chunk_rest.call(null,seq__30579_30606__$1);
var G__30609 = c__30184__auto___30607;
var G__30610 = cljs.core.count.call(null,c__30184__auto___30607);
var G__30611 = (0);
seq__30579_30596 = G__30608;
chunk__30580_30597 = G__30609;
count__30581_30598 = G__30610;
i__30582_30599 = G__30611;
continue;
} else {
var f_30612 = cljs.core.first.call(null,seq__30579_30606__$1);
cljs.core.async.impl.dispatch.run.call(null,f_30612);

var G__30613 = cljs.core.next.call(null,seq__30579_30606__$1);
var G__30614 = null;
var G__30615 = (0);
var G__30616 = (0);
seq__30579_30596 = G__30613;
chunk__30580_30597 = G__30614;
count__30581_30598 = G__30615;
i__30582_30599 = G__30616;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No more than "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" pending puts are allowed on a single channel."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" Consider using a windowed buffer.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(< (.-length puts) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var temp__5455__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5455__auto__)){
var take_cb = temp__5455__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__30583 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__29261__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__29261__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__29261__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))){
var G__30617 = cbs__$1;
cbs = G__30617;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__30583,(0),null);
var cbs = cljs.core.nth.call(null,vec__30583,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__30586_30618 = cljs.core.seq.call(null,cbs);
var chunk__30587_30619 = null;
var count__30588_30620 = (0);
var i__30589_30621 = (0);
while(true){
if((i__30589_30621 < count__30588_30620)){
var cb_30622 = cljs.core._nth.call(null,chunk__30587_30619,i__30589_30621);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__30586_30618,chunk__30587_30619,count__30588_30620,i__30589_30621,cb_30622,val,vec__30583,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return cb_30622.call(null,true);
});})(seq__30586_30618,chunk__30587_30619,count__30588_30620,i__30589_30621,cb_30622,val,vec__30583,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__30623 = seq__30586_30618;
var G__30624 = chunk__30587_30619;
var G__30625 = count__30588_30620;
var G__30626 = (i__30589_30621 + (1));
seq__30586_30618 = G__30623;
chunk__30587_30619 = G__30624;
count__30588_30620 = G__30625;
i__30589_30621 = G__30626;
continue;
} else {
var temp__5457__auto___30627 = cljs.core.seq.call(null,seq__30586_30618);
if(temp__5457__auto___30627){
var seq__30586_30628__$1 = temp__5457__auto___30627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30586_30628__$1)){
var c__30184__auto___30629 = cljs.core.chunk_first.call(null,seq__30586_30628__$1);
var G__30630 = cljs.core.chunk_rest.call(null,seq__30586_30628__$1);
var G__30631 = c__30184__auto___30629;
var G__30632 = cljs.core.count.call(null,c__30184__auto___30629);
var G__30633 = (0);
seq__30586_30618 = G__30630;
chunk__30587_30619 = G__30631;
count__30588_30620 = G__30632;
i__30589_30621 = G__30633;
continue;
} else {
var cb_30634 = cljs.core.first.call(null,seq__30586_30628__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__30586_30618,chunk__30587_30619,count__30588_30620,i__30589_30621,cb_30634,seq__30586_30628__$1,temp__5457__auto___30627,val,vec__30583,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return cb_30634.call(null,true);
});})(seq__30586_30618,chunk__30587_30619,count__30588_30620,i__30589_30621,cb_30634,seq__30586_30628__$1,temp__5457__auto___30627,val,vec__30583,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__30635 = cljs.core.next.call(null,seq__30586_30628__$1);
var G__30636 = null;
var G__30637 = (0);
var G__30638 = (0);
seq__30586_30618 = G__30635;
chunk__30587_30619 = G__30636;
count__30588_30620 = G__30637;
i__30589_30621 = G__30638;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__29261__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__29261__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__29261__auto__;
}
})())){
var has_val = (function (){var and__29261__auto__ = self__.buf;
if(cljs.core.truth_(and__29261__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__29261__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No more than "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" pending takes are allowed on a single channel.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(< (.-length takes) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__29261__auto__ = self__.buf;
if(cljs.core.truth_(and__29261__auto__)){
return (self__.puts.length === (0));
} else {
return and__29261__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_30639 = self__.takes.pop();
if((taker_30639 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_30639)){
var take_cb_30640 = cljs.core.async.impl.protocols.commit.call(null,taker_30639);
var val_30641 = (cljs.core.truth_((function (){var and__29261__auto__ = self__.buf;
if(cljs.core.truth_(and__29261__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__29261__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_30640,val_30641,taker_30639,this$__$1){
return (function (){
return take_cb_30640.call(null,val_30641);
});})(take_cb_30640,val_30641,taker_30639,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__29930__auto__,writer__29931__auto__,opt__29932__auto__){
return cljs.core._write.call(null,writer__29931__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__29273__auto__ = exh;
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var args30642 = [];
var len__30494__auto___30647 = arguments.length;
var i__30495__auto___30648 = (0);
while(true){
if((i__30495__auto___30648 < len__30494__auto___30647)){
args30642.push((arguments[i__30495__auto___30648]));

var G__30649 = (i__30495__auto___30648 + (1));
i__30495__auto___30648 = G__30649;
continue;
} else {
}
break;
}

var G__30644 = args30642.length;
switch (G__30644) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30642.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__30651 = null;
var G__30651__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e30645){var t = e30645;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__30651__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e30646){var t = e30646;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__30651 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__30651__1.call(this,buf__$1);
case 2:
return G__30651__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__30651.cljs$core$IFn$_invoke$arity$1 = G__30651__1;
G__30651.cljs$core$IFn$_invoke$arity$2 = G__30651__2;
return G__30651;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map?rel=1513965912841