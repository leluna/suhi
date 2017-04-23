// Compiled by ClojureScript 1.9.495 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args29307 = [];
var len__27483__auto___29313 = arguments.length;
var i__27484__auto___29314 = (0);
while(true){
if((i__27484__auto___29314 < len__27483__auto___29313)){
args29307.push((arguments[i__27484__auto___29314]));

var G__29315 = (i__27484__auto___29314 + (1));
i__27484__auto___29314 = G__29315;
continue;
} else {
}
break;
}

var G__29309 = args29307.length;
switch (G__29309) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29307.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29310 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29310 = (function (f,blockable,meta29311){
this.f = f;
this.blockable = blockable;
this.meta29311 = meta29311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29312,meta29311__$1){
var self__ = this;
var _29312__$1 = this;
return (new cljs.core.async.t_cljs$core$async29310(self__.f,self__.blockable,meta29311__$1));
});

cljs.core.async.t_cljs$core$async29310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29312){
var self__ = this;
var _29312__$1 = this;
return self__.meta29311;
});

cljs.core.async.t_cljs$core$async29310.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29310.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29310.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29310.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29311","meta29311",-94958809,null)], null);
});

cljs.core.async.t_cljs$core$async29310.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29310";

cljs.core.async.t_cljs$core$async29310.cljs$lang$ctorPrWriter = (function (this__26981__auto__,writer__26982__auto__,opt__26983__auto__){
return cljs.core._write.call(null,writer__26982__auto__,"cljs.core.async/t_cljs$core$async29310");
});

cljs.core.async.__GT_t_cljs$core$async29310 = (function cljs$core$async$__GT_t_cljs$core$async29310(f__$1,blockable__$1,meta29311){
return (new cljs.core.async.t_cljs$core$async29310(f__$1,blockable__$1,meta29311));
});

}

return (new cljs.core.async.t_cljs$core$async29310(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args29319 = [];
var len__27483__auto___29322 = arguments.length;
var i__27484__auto___29323 = (0);
while(true){
if((i__27484__auto___29323 < len__27483__auto___29322)){
args29319.push((arguments[i__27484__auto___29323]));

var G__29324 = (i__27484__auto___29323 + (1));
i__27484__auto___29323 = G__29324;
continue;
} else {
}
break;
}

var G__29321 = args29319.length;
switch (G__29321) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29319.length)].join('')));

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
var args29326 = [];
var len__27483__auto___29329 = arguments.length;
var i__27484__auto___29330 = (0);
while(true){
if((i__27484__auto___29330 < len__27483__auto___29329)){
args29326.push((arguments[i__27484__auto___29330]));

var G__29331 = (i__27484__auto___29330 + (1));
i__27484__auto___29330 = G__29331;
continue;
} else {
}
break;
}

var G__29328 = args29326.length;
switch (G__29328) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29326.length)].join('')));

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
var args29333 = [];
var len__27483__auto___29336 = arguments.length;
var i__27484__auto___29337 = (0);
while(true){
if((i__27484__auto___29337 < len__27483__auto___29336)){
args29333.push((arguments[i__27484__auto___29337]));

var G__29338 = (i__27484__auto___29337 + (1));
i__27484__auto___29337 = G__29338;
continue;
} else {
}
break;
}

var G__29335 = args29333.length;
switch (G__29335) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29333.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29340 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29340);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29340,ret){
return (function (){
return fn1.call(null,val_29340);
});})(val_29340,ret))
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
var args29341 = [];
var len__27483__auto___29344 = arguments.length;
var i__27484__auto___29345 = (0);
while(true){
if((i__27484__auto___29345 < len__27483__auto___29344)){
args29341.push((arguments[i__27484__auto___29345]));

var G__29346 = (i__27484__auto___29345 + (1));
i__27484__auto___29345 = G__29346;
continue;
} else {
}
break;
}

var G__29343 = args29341.length;
switch (G__29343) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29341.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__27293__auto___29348 = n;
var x_29349 = (0);
while(true){
if((x_29349 < n__27293__auto___29348)){
(a[x_29349] = (0));

var G__29350 = (x_29349 + (1));
x_29349 = G__29350;
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

var G__29351 = (i + (1));
i = G__29351;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29355 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29355 = (function (flag,meta29356){
this.flag = flag;
this.meta29356 = meta29356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29357,meta29356__$1){
var self__ = this;
var _29357__$1 = this;
return (new cljs.core.async.t_cljs$core$async29355(self__.flag,meta29356__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29357){
var self__ = this;
var _29357__$1 = this;
return self__.meta29356;
});})(flag))
;

cljs.core.async.t_cljs$core$async29355.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29355.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29355.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29356","meta29356",-110622906,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29355";

cljs.core.async.t_cljs$core$async29355.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26981__auto__,writer__26982__auto__,opt__26983__auto__){
return cljs.core._write.call(null,writer__26982__auto__,"cljs.core.async/t_cljs$core$async29355");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29355 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29355(flag__$1,meta29356){
return (new cljs.core.async.t_cljs$core$async29355(flag__$1,meta29356));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29355(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29361 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29361 = (function (flag,cb,meta29362){
this.flag = flag;
this.cb = cb;
this.meta29362 = meta29362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29363,meta29362__$1){
var self__ = this;
var _29363__$1 = this;
return (new cljs.core.async.t_cljs$core$async29361(self__.flag,self__.cb,meta29362__$1));
});

cljs.core.async.t_cljs$core$async29361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29363){
var self__ = this;
var _29363__$1 = this;
return self__.meta29362;
});

cljs.core.async.t_cljs$core$async29361.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29361.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29361.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29361.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29362","meta29362",979851602,null)], null);
});

cljs.core.async.t_cljs$core$async29361.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29361";

cljs.core.async.t_cljs$core$async29361.cljs$lang$ctorPrWriter = (function (this__26981__auto__,writer__26982__auto__,opt__26983__auto__){
return cljs.core._write.call(null,writer__26982__auto__,"cljs.core.async/t_cljs$core$async29361");
});

cljs.core.async.__GT_t_cljs$core$async29361 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29361(flag__$1,cb__$1,meta29362){
return (new cljs.core.async.t_cljs$core$async29361(flag__$1,cb__$1,meta29362));
});

}

return (new cljs.core.async.t_cljs$core$async29361(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29364_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29364_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29365_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29365_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26370__auto__ = wport;
if(cljs.core.truth_(or__26370__auto__)){
return or__26370__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29366 = (i + (1));
i = G__29366;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26370__auto__ = ret;
if(cljs.core.truth_(or__26370__auto__)){
return or__26370__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__26358__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26358__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26358__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__27490__auto__ = [];
var len__27483__auto___29372 = arguments.length;
var i__27484__auto___29373 = (0);
while(true){
if((i__27484__auto___29373 < len__27483__auto___29372)){
args__27490__auto__.push((arguments[i__27484__auto___29373]));

var G__29374 = (i__27484__auto___29373 + (1));
i__27484__auto___29373 = G__29374;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((1) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27491__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29369){
var map__29370 = p__29369;
var map__29370__$1 = ((((!((map__29370 == null)))?((((map__29370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29370):map__29370);
var opts = map__29370__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29367){
var G__29368 = cljs.core.first.call(null,seq29367);
var seq29367__$1 = cljs.core.next.call(null,seq29367);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29368,seq29367__$1);
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
var args29375 = [];
var len__27483__auto___29425 = arguments.length;
var i__27484__auto___29426 = (0);
while(true){
if((i__27484__auto___29426 < len__27483__auto___29425)){
args29375.push((arguments[i__27484__auto___29426]));

var G__29427 = (i__27484__auto___29426 + (1));
i__27484__auto___29426 = G__29427;
continue;
} else {
}
break;
}

var G__29377 = args29375.length;
switch (G__29377) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29375.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29262__auto___29429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto___29429){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto___29429){
return (function (state_29401){
var state_val_29402 = (state_29401[(1)]);
if((state_val_29402 === (7))){
var inst_29397 = (state_29401[(2)]);
var state_29401__$1 = state_29401;
var statearr_29403_29430 = state_29401__$1;
(statearr_29403_29430[(2)] = inst_29397);

(statearr_29403_29430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (1))){
var state_29401__$1 = state_29401;
var statearr_29404_29431 = state_29401__$1;
(statearr_29404_29431[(2)] = null);

(statearr_29404_29431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (4))){
var inst_29380 = (state_29401[(7)]);
var inst_29380__$1 = (state_29401[(2)]);
var inst_29381 = (inst_29380__$1 == null);
var state_29401__$1 = (function (){var statearr_29405 = state_29401;
(statearr_29405[(7)] = inst_29380__$1);

return statearr_29405;
})();
if(cljs.core.truth_(inst_29381)){
var statearr_29406_29432 = state_29401__$1;
(statearr_29406_29432[(1)] = (5));

} else {
var statearr_29407_29433 = state_29401__$1;
(statearr_29407_29433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (13))){
var state_29401__$1 = state_29401;
var statearr_29408_29434 = state_29401__$1;
(statearr_29408_29434[(2)] = null);

(statearr_29408_29434[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (6))){
var inst_29380 = (state_29401[(7)]);
var state_29401__$1 = state_29401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29401__$1,(11),to,inst_29380);
} else {
if((state_val_29402 === (3))){
var inst_29399 = (state_29401[(2)]);
var state_29401__$1 = state_29401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29401__$1,inst_29399);
} else {
if((state_val_29402 === (12))){
var state_29401__$1 = state_29401;
var statearr_29409_29435 = state_29401__$1;
(statearr_29409_29435[(2)] = null);

(statearr_29409_29435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (2))){
var state_29401__$1 = state_29401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29401__$1,(4),from);
} else {
if((state_val_29402 === (11))){
var inst_29390 = (state_29401[(2)]);
var state_29401__$1 = state_29401;
if(cljs.core.truth_(inst_29390)){
var statearr_29410_29436 = state_29401__$1;
(statearr_29410_29436[(1)] = (12));

} else {
var statearr_29411_29437 = state_29401__$1;
(statearr_29411_29437[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (9))){
var state_29401__$1 = state_29401;
var statearr_29412_29438 = state_29401__$1;
(statearr_29412_29438[(2)] = null);

(statearr_29412_29438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (5))){
var state_29401__$1 = state_29401;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29413_29439 = state_29401__$1;
(statearr_29413_29439[(1)] = (8));

} else {
var statearr_29414_29440 = state_29401__$1;
(statearr_29414_29440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (14))){
var inst_29395 = (state_29401[(2)]);
var state_29401__$1 = state_29401;
var statearr_29415_29441 = state_29401__$1;
(statearr_29415_29441[(2)] = inst_29395);

(statearr_29415_29441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (10))){
var inst_29387 = (state_29401[(2)]);
var state_29401__$1 = state_29401;
var statearr_29416_29442 = state_29401__$1;
(statearr_29416_29442[(2)] = inst_29387);

(statearr_29416_29442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (8))){
var inst_29384 = cljs.core.async.close_BANG_.call(null,to);
var state_29401__$1 = state_29401;
var statearr_29417_29443 = state_29401__$1;
(statearr_29417_29443[(2)] = inst_29384);

(statearr_29417_29443[(1)] = (10));


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
});})(c__29262__auto___29429))
;
return ((function (switch__29150__auto__,c__29262__auto___29429){
return (function() {
var cljs$core$async$state_machine__29151__auto__ = null;
var cljs$core$async$state_machine__29151__auto____0 = (function (){
var statearr_29421 = [null,null,null,null,null,null,null,null];
(statearr_29421[(0)] = cljs$core$async$state_machine__29151__auto__);

(statearr_29421[(1)] = (1));

return statearr_29421;
});
var cljs$core$async$state_machine__29151__auto____1 = (function (state_29401){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_29401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e29422){if((e29422 instanceof Object)){
var ex__29154__auto__ = e29422;
var statearr_29423_29444 = state_29401;
(statearr_29423_29444[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29445 = state_29401;
state_29401 = G__29445;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
cljs$core$async$state_machine__29151__auto__ = function(state_29401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29151__auto____1.call(this,state_29401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29151__auto____0;
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29151__auto____1;
return cljs$core$async$state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto___29429))
})();
var state__29264__auto__ = (function (){var statearr_29424 = f__29263__auto__.call(null);
(statearr_29424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto___29429);

return statearr_29424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto___29429))
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
return (function (p__29633){
var vec__29634 = p__29633;
var v = cljs.core.nth.call(null,vec__29634,(0),null);
var p = cljs.core.nth.call(null,vec__29634,(1),null);
var job = vec__29634;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29262__auto___29820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto___29820,res,vec__29634,v,p,job,jobs,results){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto___29820,res,vec__29634,v,p,job,jobs,results){
return (function (state_29641){
var state_val_29642 = (state_29641[(1)]);
if((state_val_29642 === (1))){
var state_29641__$1 = state_29641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29641__$1,(2),res,v);
} else {
if((state_val_29642 === (2))){
var inst_29638 = (state_29641[(2)]);
var inst_29639 = cljs.core.async.close_BANG_.call(null,res);
var state_29641__$1 = (function (){var statearr_29643 = state_29641;
(statearr_29643[(7)] = inst_29638);

return statearr_29643;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29641__$1,inst_29639);
} else {
return null;
}
}
});})(c__29262__auto___29820,res,vec__29634,v,p,job,jobs,results))
;
return ((function (switch__29150__auto__,c__29262__auto___29820,res,vec__29634,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____0 = (function (){
var statearr_29647 = [null,null,null,null,null,null,null,null];
(statearr_29647[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__);

(statearr_29647[(1)] = (1));

return statearr_29647;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____1 = (function (state_29641){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_29641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e29648){if((e29648 instanceof Object)){
var ex__29154__auto__ = e29648;
var statearr_29649_29821 = state_29641;
(statearr_29649_29821[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29822 = state_29641;
state_29641 = G__29822;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__ = function(state_29641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____1.call(this,state_29641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto___29820,res,vec__29634,v,p,job,jobs,results))
})();
var state__29264__auto__ = (function (){var statearr_29650 = f__29263__auto__.call(null);
(statearr_29650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto___29820);

return statearr_29650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto___29820,res,vec__29634,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29651){
var vec__29652 = p__29651;
var v = cljs.core.nth.call(null,vec__29652,(0),null);
var p = cljs.core.nth.call(null,vec__29652,(1),null);
var job = vec__29652;
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
var n__27293__auto___29823 = n;
var __29824 = (0);
while(true){
if((__29824 < n__27293__auto___29823)){
var G__29655_29825 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29655_29825) {
case "compute":
var c__29262__auto___29827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29824,c__29262__auto___29827,G__29655_29825,n__27293__auto___29823,jobs,results,process,async){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (__29824,c__29262__auto___29827,G__29655_29825,n__27293__auto___29823,jobs,results,process,async){
return (function (state_29668){
var state_val_29669 = (state_29668[(1)]);
if((state_val_29669 === (1))){
var state_29668__$1 = state_29668;
var statearr_29670_29828 = state_29668__$1;
(statearr_29670_29828[(2)] = null);

(statearr_29670_29828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (2))){
var state_29668__$1 = state_29668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29668__$1,(4),jobs);
} else {
if((state_val_29669 === (3))){
var inst_29666 = (state_29668[(2)]);
var state_29668__$1 = state_29668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29668__$1,inst_29666);
} else {
if((state_val_29669 === (4))){
var inst_29658 = (state_29668[(2)]);
var inst_29659 = process.call(null,inst_29658);
var state_29668__$1 = state_29668;
if(cljs.core.truth_(inst_29659)){
var statearr_29671_29829 = state_29668__$1;
(statearr_29671_29829[(1)] = (5));

} else {
var statearr_29672_29830 = state_29668__$1;
(statearr_29672_29830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (5))){
var state_29668__$1 = state_29668;
var statearr_29673_29831 = state_29668__$1;
(statearr_29673_29831[(2)] = null);

(statearr_29673_29831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (6))){
var state_29668__$1 = state_29668;
var statearr_29674_29832 = state_29668__$1;
(statearr_29674_29832[(2)] = null);

(statearr_29674_29832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (7))){
var inst_29664 = (state_29668[(2)]);
var state_29668__$1 = state_29668;
var statearr_29675_29833 = state_29668__$1;
(statearr_29675_29833[(2)] = inst_29664);

(statearr_29675_29833[(1)] = (3));


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
});})(__29824,c__29262__auto___29827,G__29655_29825,n__27293__auto___29823,jobs,results,process,async))
;
return ((function (__29824,switch__29150__auto__,c__29262__auto___29827,G__29655_29825,n__27293__auto___29823,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____0 = (function (){
var statearr_29679 = [null,null,null,null,null,null,null];
(statearr_29679[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__);

(statearr_29679[(1)] = (1));

return statearr_29679;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____1 = (function (state_29668){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_29668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e29680){if((e29680 instanceof Object)){
var ex__29154__auto__ = e29680;
var statearr_29681_29834 = state_29668;
(statearr_29681_29834[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29835 = state_29668;
state_29668 = G__29835;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__ = function(state_29668){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____1.call(this,state_29668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__;
})()
;})(__29824,switch__29150__auto__,c__29262__auto___29827,G__29655_29825,n__27293__auto___29823,jobs,results,process,async))
})();
var state__29264__auto__ = (function (){var statearr_29682 = f__29263__auto__.call(null);
(statearr_29682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto___29827);

return statearr_29682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(__29824,c__29262__auto___29827,G__29655_29825,n__27293__auto___29823,jobs,results,process,async))
);


break;
case "async":
var c__29262__auto___29836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29824,c__29262__auto___29836,G__29655_29825,n__27293__auto___29823,jobs,results,process,async){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (__29824,c__29262__auto___29836,G__29655_29825,n__27293__auto___29823,jobs,results,process,async){
return (function (state_29695){
var state_val_29696 = (state_29695[(1)]);
if((state_val_29696 === (1))){
var state_29695__$1 = state_29695;
var statearr_29697_29837 = state_29695__$1;
(statearr_29697_29837[(2)] = null);

(statearr_29697_29837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29696 === (2))){
var state_29695__$1 = state_29695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29695__$1,(4),jobs);
} else {
if((state_val_29696 === (3))){
var inst_29693 = (state_29695[(2)]);
var state_29695__$1 = state_29695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29695__$1,inst_29693);
} else {
if((state_val_29696 === (4))){
var inst_29685 = (state_29695[(2)]);
var inst_29686 = async.call(null,inst_29685);
var state_29695__$1 = state_29695;
if(cljs.core.truth_(inst_29686)){
var statearr_29698_29838 = state_29695__$1;
(statearr_29698_29838[(1)] = (5));

} else {
var statearr_29699_29839 = state_29695__$1;
(statearr_29699_29839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29696 === (5))){
var state_29695__$1 = state_29695;
var statearr_29700_29840 = state_29695__$1;
(statearr_29700_29840[(2)] = null);

(statearr_29700_29840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29696 === (6))){
var state_29695__$1 = state_29695;
var statearr_29701_29841 = state_29695__$1;
(statearr_29701_29841[(2)] = null);

(statearr_29701_29841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29696 === (7))){
var inst_29691 = (state_29695[(2)]);
var state_29695__$1 = state_29695;
var statearr_29702_29842 = state_29695__$1;
(statearr_29702_29842[(2)] = inst_29691);

(statearr_29702_29842[(1)] = (3));


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
});})(__29824,c__29262__auto___29836,G__29655_29825,n__27293__auto___29823,jobs,results,process,async))
;
return ((function (__29824,switch__29150__auto__,c__29262__auto___29836,G__29655_29825,n__27293__auto___29823,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____0 = (function (){
var statearr_29706 = [null,null,null,null,null,null,null];
(statearr_29706[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__);

(statearr_29706[(1)] = (1));

return statearr_29706;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____1 = (function (state_29695){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_29695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e29707){if((e29707 instanceof Object)){
var ex__29154__auto__ = e29707;
var statearr_29708_29843 = state_29695;
(statearr_29708_29843[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29844 = state_29695;
state_29695 = G__29844;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__ = function(state_29695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____1.call(this,state_29695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__;
})()
;})(__29824,switch__29150__auto__,c__29262__auto___29836,G__29655_29825,n__27293__auto___29823,jobs,results,process,async))
})();
var state__29264__auto__ = (function (){var statearr_29709 = f__29263__auto__.call(null);
(statearr_29709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto___29836);

return statearr_29709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(__29824,c__29262__auto___29836,G__29655_29825,n__27293__auto___29823,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__29845 = (__29824 + (1));
__29824 = G__29845;
continue;
} else {
}
break;
}

var c__29262__auto___29846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto___29846,jobs,results,process,async){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto___29846,jobs,results,process,async){
return (function (state_29731){
var state_val_29732 = (state_29731[(1)]);
if((state_val_29732 === (1))){
var state_29731__$1 = state_29731;
var statearr_29733_29847 = state_29731__$1;
(statearr_29733_29847[(2)] = null);

(statearr_29733_29847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29732 === (2))){
var state_29731__$1 = state_29731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29731__$1,(4),from);
} else {
if((state_val_29732 === (3))){
var inst_29729 = (state_29731[(2)]);
var state_29731__$1 = state_29731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29731__$1,inst_29729);
} else {
if((state_val_29732 === (4))){
var inst_29712 = (state_29731[(7)]);
var inst_29712__$1 = (state_29731[(2)]);
var inst_29713 = (inst_29712__$1 == null);
var state_29731__$1 = (function (){var statearr_29734 = state_29731;
(statearr_29734[(7)] = inst_29712__$1);

return statearr_29734;
})();
if(cljs.core.truth_(inst_29713)){
var statearr_29735_29848 = state_29731__$1;
(statearr_29735_29848[(1)] = (5));

} else {
var statearr_29736_29849 = state_29731__$1;
(statearr_29736_29849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29732 === (5))){
var inst_29715 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29731__$1 = state_29731;
var statearr_29737_29850 = state_29731__$1;
(statearr_29737_29850[(2)] = inst_29715);

(statearr_29737_29850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29732 === (6))){
var inst_29717 = (state_29731[(8)]);
var inst_29712 = (state_29731[(7)]);
var inst_29717__$1 = cljs.core.async.chan.call(null,(1));
var inst_29718 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29719 = [inst_29712,inst_29717__$1];
var inst_29720 = (new cljs.core.PersistentVector(null,2,(5),inst_29718,inst_29719,null));
var state_29731__$1 = (function (){var statearr_29738 = state_29731;
(statearr_29738[(8)] = inst_29717__$1);

return statearr_29738;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29731__$1,(8),jobs,inst_29720);
} else {
if((state_val_29732 === (7))){
var inst_29727 = (state_29731[(2)]);
var state_29731__$1 = state_29731;
var statearr_29739_29851 = state_29731__$1;
(statearr_29739_29851[(2)] = inst_29727);

(statearr_29739_29851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29732 === (8))){
var inst_29717 = (state_29731[(8)]);
var inst_29722 = (state_29731[(2)]);
var state_29731__$1 = (function (){var statearr_29740 = state_29731;
(statearr_29740[(9)] = inst_29722);

return statearr_29740;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29731__$1,(9),results,inst_29717);
} else {
if((state_val_29732 === (9))){
var inst_29724 = (state_29731[(2)]);
var state_29731__$1 = (function (){var statearr_29741 = state_29731;
(statearr_29741[(10)] = inst_29724);

return statearr_29741;
})();
var statearr_29742_29852 = state_29731__$1;
(statearr_29742_29852[(2)] = null);

(statearr_29742_29852[(1)] = (2));


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
});})(c__29262__auto___29846,jobs,results,process,async))
;
return ((function (switch__29150__auto__,c__29262__auto___29846,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____0 = (function (){
var statearr_29746 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29746[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__);

(statearr_29746[(1)] = (1));

return statearr_29746;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____1 = (function (state_29731){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_29731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e29747){if((e29747 instanceof Object)){
var ex__29154__auto__ = e29747;
var statearr_29748_29853 = state_29731;
(statearr_29748_29853[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29854 = state_29731;
state_29731 = G__29854;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__ = function(state_29731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____1.call(this,state_29731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto___29846,jobs,results,process,async))
})();
var state__29264__auto__ = (function (){var statearr_29749 = f__29263__auto__.call(null);
(statearr_29749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto___29846);

return statearr_29749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto___29846,jobs,results,process,async))
);


var c__29262__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto__,jobs,results,process,async){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto__,jobs,results,process,async){
return (function (state_29787){
var state_val_29788 = (state_29787[(1)]);
if((state_val_29788 === (7))){
var inst_29783 = (state_29787[(2)]);
var state_29787__$1 = state_29787;
var statearr_29789_29855 = state_29787__$1;
(statearr_29789_29855[(2)] = inst_29783);

(statearr_29789_29855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (20))){
var state_29787__$1 = state_29787;
var statearr_29790_29856 = state_29787__$1;
(statearr_29790_29856[(2)] = null);

(statearr_29790_29856[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (1))){
var state_29787__$1 = state_29787;
var statearr_29791_29857 = state_29787__$1;
(statearr_29791_29857[(2)] = null);

(statearr_29791_29857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (4))){
var inst_29752 = (state_29787[(7)]);
var inst_29752__$1 = (state_29787[(2)]);
var inst_29753 = (inst_29752__$1 == null);
var state_29787__$1 = (function (){var statearr_29792 = state_29787;
(statearr_29792[(7)] = inst_29752__$1);

return statearr_29792;
})();
if(cljs.core.truth_(inst_29753)){
var statearr_29793_29858 = state_29787__$1;
(statearr_29793_29858[(1)] = (5));

} else {
var statearr_29794_29859 = state_29787__$1;
(statearr_29794_29859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (15))){
var inst_29765 = (state_29787[(8)]);
var state_29787__$1 = state_29787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29787__$1,(18),to,inst_29765);
} else {
if((state_val_29788 === (21))){
var inst_29778 = (state_29787[(2)]);
var state_29787__$1 = state_29787;
var statearr_29795_29860 = state_29787__$1;
(statearr_29795_29860[(2)] = inst_29778);

(statearr_29795_29860[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (13))){
var inst_29780 = (state_29787[(2)]);
var state_29787__$1 = (function (){var statearr_29796 = state_29787;
(statearr_29796[(9)] = inst_29780);

return statearr_29796;
})();
var statearr_29797_29861 = state_29787__$1;
(statearr_29797_29861[(2)] = null);

(statearr_29797_29861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (6))){
var inst_29752 = (state_29787[(7)]);
var state_29787__$1 = state_29787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29787__$1,(11),inst_29752);
} else {
if((state_val_29788 === (17))){
var inst_29773 = (state_29787[(2)]);
var state_29787__$1 = state_29787;
if(cljs.core.truth_(inst_29773)){
var statearr_29798_29862 = state_29787__$1;
(statearr_29798_29862[(1)] = (19));

} else {
var statearr_29799_29863 = state_29787__$1;
(statearr_29799_29863[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (3))){
var inst_29785 = (state_29787[(2)]);
var state_29787__$1 = state_29787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29787__$1,inst_29785);
} else {
if((state_val_29788 === (12))){
var inst_29762 = (state_29787[(10)]);
var state_29787__$1 = state_29787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29787__$1,(14),inst_29762);
} else {
if((state_val_29788 === (2))){
var state_29787__$1 = state_29787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29787__$1,(4),results);
} else {
if((state_val_29788 === (19))){
var state_29787__$1 = state_29787;
var statearr_29800_29864 = state_29787__$1;
(statearr_29800_29864[(2)] = null);

(statearr_29800_29864[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (11))){
var inst_29762 = (state_29787[(2)]);
var state_29787__$1 = (function (){var statearr_29801 = state_29787;
(statearr_29801[(10)] = inst_29762);

return statearr_29801;
})();
var statearr_29802_29865 = state_29787__$1;
(statearr_29802_29865[(2)] = null);

(statearr_29802_29865[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (9))){
var state_29787__$1 = state_29787;
var statearr_29803_29866 = state_29787__$1;
(statearr_29803_29866[(2)] = null);

(statearr_29803_29866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (5))){
var state_29787__$1 = state_29787;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29804_29867 = state_29787__$1;
(statearr_29804_29867[(1)] = (8));

} else {
var statearr_29805_29868 = state_29787__$1;
(statearr_29805_29868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (14))){
var inst_29767 = (state_29787[(11)]);
var inst_29765 = (state_29787[(8)]);
var inst_29765__$1 = (state_29787[(2)]);
var inst_29766 = (inst_29765__$1 == null);
var inst_29767__$1 = cljs.core.not.call(null,inst_29766);
var state_29787__$1 = (function (){var statearr_29806 = state_29787;
(statearr_29806[(11)] = inst_29767__$1);

(statearr_29806[(8)] = inst_29765__$1);

return statearr_29806;
})();
if(inst_29767__$1){
var statearr_29807_29869 = state_29787__$1;
(statearr_29807_29869[(1)] = (15));

} else {
var statearr_29808_29870 = state_29787__$1;
(statearr_29808_29870[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (16))){
var inst_29767 = (state_29787[(11)]);
var state_29787__$1 = state_29787;
var statearr_29809_29871 = state_29787__$1;
(statearr_29809_29871[(2)] = inst_29767);

(statearr_29809_29871[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (10))){
var inst_29759 = (state_29787[(2)]);
var state_29787__$1 = state_29787;
var statearr_29810_29872 = state_29787__$1;
(statearr_29810_29872[(2)] = inst_29759);

(statearr_29810_29872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (18))){
var inst_29770 = (state_29787[(2)]);
var state_29787__$1 = state_29787;
var statearr_29811_29873 = state_29787__$1;
(statearr_29811_29873[(2)] = inst_29770);

(statearr_29811_29873[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29788 === (8))){
var inst_29756 = cljs.core.async.close_BANG_.call(null,to);
var state_29787__$1 = state_29787;
var statearr_29812_29874 = state_29787__$1;
(statearr_29812_29874[(2)] = inst_29756);

(statearr_29812_29874[(1)] = (10));


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
});})(c__29262__auto__,jobs,results,process,async))
;
return ((function (switch__29150__auto__,c__29262__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____0 = (function (){
var statearr_29816 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29816[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__);

(statearr_29816[(1)] = (1));

return statearr_29816;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____1 = (function (state_29787){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_29787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e29817){if((e29817 instanceof Object)){
var ex__29154__auto__ = e29817;
var statearr_29818_29875 = state_29787;
(statearr_29818_29875[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29876 = state_29787;
state_29787 = G__29876;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__ = function(state_29787){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____1.call(this,state_29787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto__,jobs,results,process,async))
})();
var state__29264__auto__ = (function (){var statearr_29819 = f__29263__auto__.call(null);
(statearr_29819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto__);

return statearr_29819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto__,jobs,results,process,async))
);

return c__29262__auto__;
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
var args29877 = [];
var len__27483__auto___29880 = arguments.length;
var i__27484__auto___29881 = (0);
while(true){
if((i__27484__auto___29881 < len__27483__auto___29880)){
args29877.push((arguments[i__27484__auto___29881]));

var G__29882 = (i__27484__auto___29881 + (1));
i__27484__auto___29881 = G__29882;
continue;
} else {
}
break;
}

var G__29879 = args29877.length;
switch (G__29879) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29877.length)].join('')));

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
var args29884 = [];
var len__27483__auto___29887 = arguments.length;
var i__27484__auto___29888 = (0);
while(true){
if((i__27484__auto___29888 < len__27483__auto___29887)){
args29884.push((arguments[i__27484__auto___29888]));

var G__29889 = (i__27484__auto___29888 + (1));
i__27484__auto___29888 = G__29889;
continue;
} else {
}
break;
}

var G__29886 = args29884.length;
switch (G__29886) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29884.length)].join('')));

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
var args29891 = [];
var len__27483__auto___29944 = arguments.length;
var i__27484__auto___29945 = (0);
while(true){
if((i__27484__auto___29945 < len__27483__auto___29944)){
args29891.push((arguments[i__27484__auto___29945]));

var G__29946 = (i__27484__auto___29945 + (1));
i__27484__auto___29945 = G__29946;
continue;
} else {
}
break;
}

var G__29893 = args29891.length;
switch (G__29893) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29891.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29262__auto___29948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto___29948,tc,fc){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto___29948,tc,fc){
return (function (state_29919){
var state_val_29920 = (state_29919[(1)]);
if((state_val_29920 === (7))){
var inst_29915 = (state_29919[(2)]);
var state_29919__$1 = state_29919;
var statearr_29921_29949 = state_29919__$1;
(statearr_29921_29949[(2)] = inst_29915);

(statearr_29921_29949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (1))){
var state_29919__$1 = state_29919;
var statearr_29922_29950 = state_29919__$1;
(statearr_29922_29950[(2)] = null);

(statearr_29922_29950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (4))){
var inst_29896 = (state_29919[(7)]);
var inst_29896__$1 = (state_29919[(2)]);
var inst_29897 = (inst_29896__$1 == null);
var state_29919__$1 = (function (){var statearr_29923 = state_29919;
(statearr_29923[(7)] = inst_29896__$1);

return statearr_29923;
})();
if(cljs.core.truth_(inst_29897)){
var statearr_29924_29951 = state_29919__$1;
(statearr_29924_29951[(1)] = (5));

} else {
var statearr_29925_29952 = state_29919__$1;
(statearr_29925_29952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (13))){
var state_29919__$1 = state_29919;
var statearr_29926_29953 = state_29919__$1;
(statearr_29926_29953[(2)] = null);

(statearr_29926_29953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (6))){
var inst_29896 = (state_29919[(7)]);
var inst_29902 = p.call(null,inst_29896);
var state_29919__$1 = state_29919;
if(cljs.core.truth_(inst_29902)){
var statearr_29927_29954 = state_29919__$1;
(statearr_29927_29954[(1)] = (9));

} else {
var statearr_29928_29955 = state_29919__$1;
(statearr_29928_29955[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (3))){
var inst_29917 = (state_29919[(2)]);
var state_29919__$1 = state_29919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29919__$1,inst_29917);
} else {
if((state_val_29920 === (12))){
var state_29919__$1 = state_29919;
var statearr_29929_29956 = state_29919__$1;
(statearr_29929_29956[(2)] = null);

(statearr_29929_29956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (2))){
var state_29919__$1 = state_29919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29919__$1,(4),ch);
} else {
if((state_val_29920 === (11))){
var inst_29896 = (state_29919[(7)]);
var inst_29906 = (state_29919[(2)]);
var state_29919__$1 = state_29919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29919__$1,(8),inst_29906,inst_29896);
} else {
if((state_val_29920 === (9))){
var state_29919__$1 = state_29919;
var statearr_29930_29957 = state_29919__$1;
(statearr_29930_29957[(2)] = tc);

(statearr_29930_29957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (5))){
var inst_29899 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29900 = cljs.core.async.close_BANG_.call(null,fc);
var state_29919__$1 = (function (){var statearr_29931 = state_29919;
(statearr_29931[(8)] = inst_29899);

return statearr_29931;
})();
var statearr_29932_29958 = state_29919__$1;
(statearr_29932_29958[(2)] = inst_29900);

(statearr_29932_29958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (14))){
var inst_29913 = (state_29919[(2)]);
var state_29919__$1 = state_29919;
var statearr_29933_29959 = state_29919__$1;
(statearr_29933_29959[(2)] = inst_29913);

(statearr_29933_29959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (10))){
var state_29919__$1 = state_29919;
var statearr_29934_29960 = state_29919__$1;
(statearr_29934_29960[(2)] = fc);

(statearr_29934_29960[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (8))){
var inst_29908 = (state_29919[(2)]);
var state_29919__$1 = state_29919;
if(cljs.core.truth_(inst_29908)){
var statearr_29935_29961 = state_29919__$1;
(statearr_29935_29961[(1)] = (12));

} else {
var statearr_29936_29962 = state_29919__$1;
(statearr_29936_29962[(1)] = (13));

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
});})(c__29262__auto___29948,tc,fc))
;
return ((function (switch__29150__auto__,c__29262__auto___29948,tc,fc){
return (function() {
var cljs$core$async$state_machine__29151__auto__ = null;
var cljs$core$async$state_machine__29151__auto____0 = (function (){
var statearr_29940 = [null,null,null,null,null,null,null,null,null];
(statearr_29940[(0)] = cljs$core$async$state_machine__29151__auto__);

(statearr_29940[(1)] = (1));

return statearr_29940;
});
var cljs$core$async$state_machine__29151__auto____1 = (function (state_29919){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_29919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e29941){if((e29941 instanceof Object)){
var ex__29154__auto__ = e29941;
var statearr_29942_29963 = state_29919;
(statearr_29942_29963[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29964 = state_29919;
state_29919 = G__29964;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
cljs$core$async$state_machine__29151__auto__ = function(state_29919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29151__auto____1.call(this,state_29919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29151__auto____0;
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29151__auto____1;
return cljs$core$async$state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto___29948,tc,fc))
})();
var state__29264__auto__ = (function (){var statearr_29943 = f__29263__auto__.call(null);
(statearr_29943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto___29948);

return statearr_29943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto___29948,tc,fc))
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
var c__29262__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto__){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto__){
return (function (state_30028){
var state_val_30029 = (state_30028[(1)]);
if((state_val_30029 === (7))){
var inst_30024 = (state_30028[(2)]);
var state_30028__$1 = state_30028;
var statearr_30030_30051 = state_30028__$1;
(statearr_30030_30051[(2)] = inst_30024);

(statearr_30030_30051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30029 === (1))){
var inst_30008 = init;
var state_30028__$1 = (function (){var statearr_30031 = state_30028;
(statearr_30031[(7)] = inst_30008);

return statearr_30031;
})();
var statearr_30032_30052 = state_30028__$1;
(statearr_30032_30052[(2)] = null);

(statearr_30032_30052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30029 === (4))){
var inst_30011 = (state_30028[(8)]);
var inst_30011__$1 = (state_30028[(2)]);
var inst_30012 = (inst_30011__$1 == null);
var state_30028__$1 = (function (){var statearr_30033 = state_30028;
(statearr_30033[(8)] = inst_30011__$1);

return statearr_30033;
})();
if(cljs.core.truth_(inst_30012)){
var statearr_30034_30053 = state_30028__$1;
(statearr_30034_30053[(1)] = (5));

} else {
var statearr_30035_30054 = state_30028__$1;
(statearr_30035_30054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30029 === (6))){
var inst_30011 = (state_30028[(8)]);
var inst_30015 = (state_30028[(9)]);
var inst_30008 = (state_30028[(7)]);
var inst_30015__$1 = f.call(null,inst_30008,inst_30011);
var inst_30016 = cljs.core.reduced_QMARK_.call(null,inst_30015__$1);
var state_30028__$1 = (function (){var statearr_30036 = state_30028;
(statearr_30036[(9)] = inst_30015__$1);

return statearr_30036;
})();
if(inst_30016){
var statearr_30037_30055 = state_30028__$1;
(statearr_30037_30055[(1)] = (8));

} else {
var statearr_30038_30056 = state_30028__$1;
(statearr_30038_30056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30029 === (3))){
var inst_30026 = (state_30028[(2)]);
var state_30028__$1 = state_30028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30028__$1,inst_30026);
} else {
if((state_val_30029 === (2))){
var state_30028__$1 = state_30028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30028__$1,(4),ch);
} else {
if((state_val_30029 === (9))){
var inst_30015 = (state_30028[(9)]);
var inst_30008 = inst_30015;
var state_30028__$1 = (function (){var statearr_30039 = state_30028;
(statearr_30039[(7)] = inst_30008);

return statearr_30039;
})();
var statearr_30040_30057 = state_30028__$1;
(statearr_30040_30057[(2)] = null);

(statearr_30040_30057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30029 === (5))){
var inst_30008 = (state_30028[(7)]);
var state_30028__$1 = state_30028;
var statearr_30041_30058 = state_30028__$1;
(statearr_30041_30058[(2)] = inst_30008);

(statearr_30041_30058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30029 === (10))){
var inst_30022 = (state_30028[(2)]);
var state_30028__$1 = state_30028;
var statearr_30042_30059 = state_30028__$1;
(statearr_30042_30059[(2)] = inst_30022);

(statearr_30042_30059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30029 === (8))){
var inst_30015 = (state_30028[(9)]);
var inst_30018 = cljs.core.deref.call(null,inst_30015);
var state_30028__$1 = state_30028;
var statearr_30043_30060 = state_30028__$1;
(statearr_30043_30060[(2)] = inst_30018);

(statearr_30043_30060[(1)] = (10));


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
});})(c__29262__auto__))
;
return ((function (switch__29150__auto__,c__29262__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29151__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29151__auto____0 = (function (){
var statearr_30047 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30047[(0)] = cljs$core$async$reduce_$_state_machine__29151__auto__);

(statearr_30047[(1)] = (1));

return statearr_30047;
});
var cljs$core$async$reduce_$_state_machine__29151__auto____1 = (function (state_30028){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_30028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e30048){if((e30048 instanceof Object)){
var ex__29154__auto__ = e30048;
var statearr_30049_30061 = state_30028;
(statearr_30049_30061[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30062 = state_30028;
state_30028 = G__30062;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29151__auto__ = function(state_30028){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29151__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29151__auto____1.call(this,state_30028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29151__auto____0;
cljs$core$async$reduce_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29151__auto____1;
return cljs$core$async$reduce_$_state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto__))
})();
var state__29264__auto__ = (function (){var statearr_30050 = f__29263__auto__.call(null);
(statearr_30050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto__);

return statearr_30050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto__))
);

return c__29262__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29262__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto__,f__$1){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto__,f__$1){
return (function (state_30082){
var state_val_30083 = (state_30082[(1)]);
if((state_val_30083 === (1))){
var inst_30077 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30082__$1 = state_30082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30082__$1,(2),inst_30077);
} else {
if((state_val_30083 === (2))){
var inst_30079 = (state_30082[(2)]);
var inst_30080 = f__$1.call(null,inst_30079);
var state_30082__$1 = state_30082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30082__$1,inst_30080);
} else {
return null;
}
}
});})(c__29262__auto__,f__$1))
;
return ((function (switch__29150__auto__,c__29262__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29151__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29151__auto____0 = (function (){
var statearr_30087 = [null,null,null,null,null,null,null];
(statearr_30087[(0)] = cljs$core$async$transduce_$_state_machine__29151__auto__);

(statearr_30087[(1)] = (1));

return statearr_30087;
});
var cljs$core$async$transduce_$_state_machine__29151__auto____1 = (function (state_30082){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_30082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e30088){if((e30088 instanceof Object)){
var ex__29154__auto__ = e30088;
var statearr_30089_30091 = state_30082;
(statearr_30089_30091[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30092 = state_30082;
state_30082 = G__30092;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29151__auto__ = function(state_30082){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29151__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29151__auto____1.call(this,state_30082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29151__auto____0;
cljs$core$async$transduce_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29151__auto____1;
return cljs$core$async$transduce_$_state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto__,f__$1))
})();
var state__29264__auto__ = (function (){var statearr_30090 = f__29263__auto__.call(null);
(statearr_30090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto__);

return statearr_30090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto__,f__$1))
);

return c__29262__auto__;
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
var args30093 = [];
var len__27483__auto___30145 = arguments.length;
var i__27484__auto___30146 = (0);
while(true){
if((i__27484__auto___30146 < len__27483__auto___30145)){
args30093.push((arguments[i__27484__auto___30146]));

var G__30147 = (i__27484__auto___30146 + (1));
i__27484__auto___30146 = G__30147;
continue;
} else {
}
break;
}

var G__30095 = args30093.length;
switch (G__30095) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30093.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29262__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto__){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto__){
return (function (state_30120){
var state_val_30121 = (state_30120[(1)]);
if((state_val_30121 === (7))){
var inst_30102 = (state_30120[(2)]);
var state_30120__$1 = state_30120;
var statearr_30122_30149 = state_30120__$1;
(statearr_30122_30149[(2)] = inst_30102);

(statearr_30122_30149[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30121 === (1))){
var inst_30096 = cljs.core.seq.call(null,coll);
var inst_30097 = inst_30096;
var state_30120__$1 = (function (){var statearr_30123 = state_30120;
(statearr_30123[(7)] = inst_30097);

return statearr_30123;
})();
var statearr_30124_30150 = state_30120__$1;
(statearr_30124_30150[(2)] = null);

(statearr_30124_30150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30121 === (4))){
var inst_30097 = (state_30120[(7)]);
var inst_30100 = cljs.core.first.call(null,inst_30097);
var state_30120__$1 = state_30120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30120__$1,(7),ch,inst_30100);
} else {
if((state_val_30121 === (13))){
var inst_30114 = (state_30120[(2)]);
var state_30120__$1 = state_30120;
var statearr_30125_30151 = state_30120__$1;
(statearr_30125_30151[(2)] = inst_30114);

(statearr_30125_30151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30121 === (6))){
var inst_30105 = (state_30120[(2)]);
var state_30120__$1 = state_30120;
if(cljs.core.truth_(inst_30105)){
var statearr_30126_30152 = state_30120__$1;
(statearr_30126_30152[(1)] = (8));

} else {
var statearr_30127_30153 = state_30120__$1;
(statearr_30127_30153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30121 === (3))){
var inst_30118 = (state_30120[(2)]);
var state_30120__$1 = state_30120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30120__$1,inst_30118);
} else {
if((state_val_30121 === (12))){
var state_30120__$1 = state_30120;
var statearr_30128_30154 = state_30120__$1;
(statearr_30128_30154[(2)] = null);

(statearr_30128_30154[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30121 === (2))){
var inst_30097 = (state_30120[(7)]);
var state_30120__$1 = state_30120;
if(cljs.core.truth_(inst_30097)){
var statearr_30129_30155 = state_30120__$1;
(statearr_30129_30155[(1)] = (4));

} else {
var statearr_30130_30156 = state_30120__$1;
(statearr_30130_30156[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30121 === (11))){
var inst_30111 = cljs.core.async.close_BANG_.call(null,ch);
var state_30120__$1 = state_30120;
var statearr_30131_30157 = state_30120__$1;
(statearr_30131_30157[(2)] = inst_30111);

(statearr_30131_30157[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30121 === (9))){
var state_30120__$1 = state_30120;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30132_30158 = state_30120__$1;
(statearr_30132_30158[(1)] = (11));

} else {
var statearr_30133_30159 = state_30120__$1;
(statearr_30133_30159[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30121 === (5))){
var inst_30097 = (state_30120[(7)]);
var state_30120__$1 = state_30120;
var statearr_30134_30160 = state_30120__$1;
(statearr_30134_30160[(2)] = inst_30097);

(statearr_30134_30160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30121 === (10))){
var inst_30116 = (state_30120[(2)]);
var state_30120__$1 = state_30120;
var statearr_30135_30161 = state_30120__$1;
(statearr_30135_30161[(2)] = inst_30116);

(statearr_30135_30161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30121 === (8))){
var inst_30097 = (state_30120[(7)]);
var inst_30107 = cljs.core.next.call(null,inst_30097);
var inst_30097__$1 = inst_30107;
var state_30120__$1 = (function (){var statearr_30136 = state_30120;
(statearr_30136[(7)] = inst_30097__$1);

return statearr_30136;
})();
var statearr_30137_30162 = state_30120__$1;
(statearr_30137_30162[(2)] = null);

(statearr_30137_30162[(1)] = (2));


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
});})(c__29262__auto__))
;
return ((function (switch__29150__auto__,c__29262__auto__){
return (function() {
var cljs$core$async$state_machine__29151__auto__ = null;
var cljs$core$async$state_machine__29151__auto____0 = (function (){
var statearr_30141 = [null,null,null,null,null,null,null,null];
(statearr_30141[(0)] = cljs$core$async$state_machine__29151__auto__);

(statearr_30141[(1)] = (1));

return statearr_30141;
});
var cljs$core$async$state_machine__29151__auto____1 = (function (state_30120){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_30120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e30142){if((e30142 instanceof Object)){
var ex__29154__auto__ = e30142;
var statearr_30143_30163 = state_30120;
(statearr_30143_30163[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30164 = state_30120;
state_30120 = G__30164;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
cljs$core$async$state_machine__29151__auto__ = function(state_30120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29151__auto____1.call(this,state_30120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29151__auto____0;
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29151__auto____1;
return cljs$core$async$state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto__))
})();
var state__29264__auto__ = (function (){var statearr_30144 = f__29263__auto__.call(null);
(statearr_30144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto__);

return statearr_30144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto__))
);

return c__29262__auto__;
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
var x__27038__auto__ = (((_ == null))?null:_);
var m__27039__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27038__auto__)]);
if(!((m__27039__auto__ == null))){
return m__27039__auto__.call(null,_);
} else {
var m__27039__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27039__auto____$1 == null))){
return m__27039__auto____$1.call(null,_);
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
var x__27038__auto__ = (((m == null))?null:m);
var m__27039__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27038__auto__)]);
if(!((m__27039__auto__ == null))){
return m__27039__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27039__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27039__auto____$1 == null))){
return m__27039__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__27038__auto__ = (((m == null))?null:m);
var m__27039__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27038__auto__)]);
if(!((m__27039__auto__ == null))){
return m__27039__auto__.call(null,m,ch);
} else {
var m__27039__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27039__auto____$1 == null))){
return m__27039__auto____$1.call(null,m,ch);
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
var x__27038__auto__ = (((m == null))?null:m);
var m__27039__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27038__auto__)]);
if(!((m__27039__auto__ == null))){
return m__27039__auto__.call(null,m);
} else {
var m__27039__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27039__auto____$1 == null))){
return m__27039__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async30390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30390 = (function (ch,cs,meta30391){
this.ch = ch;
this.cs = cs;
this.meta30391 = meta30391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30392,meta30391__$1){
var self__ = this;
var _30392__$1 = this;
return (new cljs.core.async.t_cljs$core$async30390(self__.ch,self__.cs,meta30391__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30390.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30392){
var self__ = this;
var _30392__$1 = this;
return self__.meta30391;
});})(cs))
;

cljs.core.async.t_cljs$core$async30390.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30390.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30390.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30390.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30390.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30390.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30390.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30391","meta30391",-1348870981,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30390";

cljs.core.async.t_cljs$core$async30390.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26981__auto__,writer__26982__auto__,opt__26983__auto__){
return cljs.core._write.call(null,writer__26982__auto__,"cljs.core.async/t_cljs$core$async30390");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30390 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30390(ch__$1,cs__$1,meta30391){
return (new cljs.core.async.t_cljs$core$async30390(ch__$1,cs__$1,meta30391));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30390(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29262__auto___30615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto___30615,cs,m,dchan,dctr,done){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto___30615,cs,m,dchan,dctr,done){
return (function (state_30527){
var state_val_30528 = (state_30527[(1)]);
if((state_val_30528 === (7))){
var inst_30523 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30529_30616 = state_30527__$1;
(statearr_30529_30616[(2)] = inst_30523);

(statearr_30529_30616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (20))){
var inst_30426 = (state_30527[(7)]);
var inst_30438 = cljs.core.first.call(null,inst_30426);
var inst_30439 = cljs.core.nth.call(null,inst_30438,(0),null);
var inst_30440 = cljs.core.nth.call(null,inst_30438,(1),null);
var state_30527__$1 = (function (){var statearr_30530 = state_30527;
(statearr_30530[(8)] = inst_30439);

return statearr_30530;
})();
if(cljs.core.truth_(inst_30440)){
var statearr_30531_30617 = state_30527__$1;
(statearr_30531_30617[(1)] = (22));

} else {
var statearr_30532_30618 = state_30527__$1;
(statearr_30532_30618[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (27))){
var inst_30475 = (state_30527[(9)]);
var inst_30468 = (state_30527[(10)]);
var inst_30470 = (state_30527[(11)]);
var inst_30395 = (state_30527[(12)]);
var inst_30475__$1 = cljs.core._nth.call(null,inst_30468,inst_30470);
var inst_30476 = cljs.core.async.put_BANG_.call(null,inst_30475__$1,inst_30395,done);
var state_30527__$1 = (function (){var statearr_30533 = state_30527;
(statearr_30533[(9)] = inst_30475__$1);

return statearr_30533;
})();
if(cljs.core.truth_(inst_30476)){
var statearr_30534_30619 = state_30527__$1;
(statearr_30534_30619[(1)] = (30));

} else {
var statearr_30535_30620 = state_30527__$1;
(statearr_30535_30620[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (1))){
var state_30527__$1 = state_30527;
var statearr_30536_30621 = state_30527__$1;
(statearr_30536_30621[(2)] = null);

(statearr_30536_30621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (24))){
var inst_30426 = (state_30527[(7)]);
var inst_30445 = (state_30527[(2)]);
var inst_30446 = cljs.core.next.call(null,inst_30426);
var inst_30404 = inst_30446;
var inst_30405 = null;
var inst_30406 = (0);
var inst_30407 = (0);
var state_30527__$1 = (function (){var statearr_30537 = state_30527;
(statearr_30537[(13)] = inst_30407);

(statearr_30537[(14)] = inst_30404);

(statearr_30537[(15)] = inst_30445);

(statearr_30537[(16)] = inst_30406);

(statearr_30537[(17)] = inst_30405);

return statearr_30537;
})();
var statearr_30538_30622 = state_30527__$1;
(statearr_30538_30622[(2)] = null);

(statearr_30538_30622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (39))){
var state_30527__$1 = state_30527;
var statearr_30542_30623 = state_30527__$1;
(statearr_30542_30623[(2)] = null);

(statearr_30542_30623[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (4))){
var inst_30395 = (state_30527[(12)]);
var inst_30395__$1 = (state_30527[(2)]);
var inst_30396 = (inst_30395__$1 == null);
var state_30527__$1 = (function (){var statearr_30543 = state_30527;
(statearr_30543[(12)] = inst_30395__$1);

return statearr_30543;
})();
if(cljs.core.truth_(inst_30396)){
var statearr_30544_30624 = state_30527__$1;
(statearr_30544_30624[(1)] = (5));

} else {
var statearr_30545_30625 = state_30527__$1;
(statearr_30545_30625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (15))){
var inst_30407 = (state_30527[(13)]);
var inst_30404 = (state_30527[(14)]);
var inst_30406 = (state_30527[(16)]);
var inst_30405 = (state_30527[(17)]);
var inst_30422 = (state_30527[(2)]);
var inst_30423 = (inst_30407 + (1));
var tmp30539 = inst_30404;
var tmp30540 = inst_30406;
var tmp30541 = inst_30405;
var inst_30404__$1 = tmp30539;
var inst_30405__$1 = tmp30541;
var inst_30406__$1 = tmp30540;
var inst_30407__$1 = inst_30423;
var state_30527__$1 = (function (){var statearr_30546 = state_30527;
(statearr_30546[(13)] = inst_30407__$1);

(statearr_30546[(14)] = inst_30404__$1);

(statearr_30546[(16)] = inst_30406__$1);

(statearr_30546[(17)] = inst_30405__$1);

(statearr_30546[(18)] = inst_30422);

return statearr_30546;
})();
var statearr_30547_30626 = state_30527__$1;
(statearr_30547_30626[(2)] = null);

(statearr_30547_30626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (21))){
var inst_30449 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30551_30627 = state_30527__$1;
(statearr_30551_30627[(2)] = inst_30449);

(statearr_30551_30627[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (31))){
var inst_30475 = (state_30527[(9)]);
var inst_30479 = done.call(null,null);
var inst_30480 = cljs.core.async.untap_STAR_.call(null,m,inst_30475);
var state_30527__$1 = (function (){var statearr_30552 = state_30527;
(statearr_30552[(19)] = inst_30479);

return statearr_30552;
})();
var statearr_30553_30628 = state_30527__$1;
(statearr_30553_30628[(2)] = inst_30480);

(statearr_30553_30628[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (32))){
var inst_30467 = (state_30527[(20)]);
var inst_30468 = (state_30527[(10)]);
var inst_30470 = (state_30527[(11)]);
var inst_30469 = (state_30527[(21)]);
var inst_30482 = (state_30527[(2)]);
var inst_30483 = (inst_30470 + (1));
var tmp30548 = inst_30467;
var tmp30549 = inst_30468;
var tmp30550 = inst_30469;
var inst_30467__$1 = tmp30548;
var inst_30468__$1 = tmp30549;
var inst_30469__$1 = tmp30550;
var inst_30470__$1 = inst_30483;
var state_30527__$1 = (function (){var statearr_30554 = state_30527;
(statearr_30554[(20)] = inst_30467__$1);

(statearr_30554[(10)] = inst_30468__$1);

(statearr_30554[(11)] = inst_30470__$1);

(statearr_30554[(21)] = inst_30469__$1);

(statearr_30554[(22)] = inst_30482);

return statearr_30554;
})();
var statearr_30555_30629 = state_30527__$1;
(statearr_30555_30629[(2)] = null);

(statearr_30555_30629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (40))){
var inst_30495 = (state_30527[(23)]);
var inst_30499 = done.call(null,null);
var inst_30500 = cljs.core.async.untap_STAR_.call(null,m,inst_30495);
var state_30527__$1 = (function (){var statearr_30556 = state_30527;
(statearr_30556[(24)] = inst_30499);

return statearr_30556;
})();
var statearr_30557_30630 = state_30527__$1;
(statearr_30557_30630[(2)] = inst_30500);

(statearr_30557_30630[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (33))){
var inst_30486 = (state_30527[(25)]);
var inst_30488 = cljs.core.chunked_seq_QMARK_.call(null,inst_30486);
var state_30527__$1 = state_30527;
if(inst_30488){
var statearr_30558_30631 = state_30527__$1;
(statearr_30558_30631[(1)] = (36));

} else {
var statearr_30559_30632 = state_30527__$1;
(statearr_30559_30632[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (13))){
var inst_30416 = (state_30527[(26)]);
var inst_30419 = cljs.core.async.close_BANG_.call(null,inst_30416);
var state_30527__$1 = state_30527;
var statearr_30560_30633 = state_30527__$1;
(statearr_30560_30633[(2)] = inst_30419);

(statearr_30560_30633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (22))){
var inst_30439 = (state_30527[(8)]);
var inst_30442 = cljs.core.async.close_BANG_.call(null,inst_30439);
var state_30527__$1 = state_30527;
var statearr_30561_30634 = state_30527__$1;
(statearr_30561_30634[(2)] = inst_30442);

(statearr_30561_30634[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (36))){
var inst_30486 = (state_30527[(25)]);
var inst_30490 = cljs.core.chunk_first.call(null,inst_30486);
var inst_30491 = cljs.core.chunk_rest.call(null,inst_30486);
var inst_30492 = cljs.core.count.call(null,inst_30490);
var inst_30467 = inst_30491;
var inst_30468 = inst_30490;
var inst_30469 = inst_30492;
var inst_30470 = (0);
var state_30527__$1 = (function (){var statearr_30562 = state_30527;
(statearr_30562[(20)] = inst_30467);

(statearr_30562[(10)] = inst_30468);

(statearr_30562[(11)] = inst_30470);

(statearr_30562[(21)] = inst_30469);

return statearr_30562;
})();
var statearr_30563_30635 = state_30527__$1;
(statearr_30563_30635[(2)] = null);

(statearr_30563_30635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (41))){
var inst_30486 = (state_30527[(25)]);
var inst_30502 = (state_30527[(2)]);
var inst_30503 = cljs.core.next.call(null,inst_30486);
var inst_30467 = inst_30503;
var inst_30468 = null;
var inst_30469 = (0);
var inst_30470 = (0);
var state_30527__$1 = (function (){var statearr_30564 = state_30527;
(statearr_30564[(20)] = inst_30467);

(statearr_30564[(27)] = inst_30502);

(statearr_30564[(10)] = inst_30468);

(statearr_30564[(11)] = inst_30470);

(statearr_30564[(21)] = inst_30469);

return statearr_30564;
})();
var statearr_30565_30636 = state_30527__$1;
(statearr_30565_30636[(2)] = null);

(statearr_30565_30636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (43))){
var state_30527__$1 = state_30527;
var statearr_30566_30637 = state_30527__$1;
(statearr_30566_30637[(2)] = null);

(statearr_30566_30637[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (29))){
var inst_30511 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30567_30638 = state_30527__$1;
(statearr_30567_30638[(2)] = inst_30511);

(statearr_30567_30638[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (44))){
var inst_30520 = (state_30527[(2)]);
var state_30527__$1 = (function (){var statearr_30568 = state_30527;
(statearr_30568[(28)] = inst_30520);

return statearr_30568;
})();
var statearr_30569_30639 = state_30527__$1;
(statearr_30569_30639[(2)] = null);

(statearr_30569_30639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (6))){
var inst_30459 = (state_30527[(29)]);
var inst_30458 = cljs.core.deref.call(null,cs);
var inst_30459__$1 = cljs.core.keys.call(null,inst_30458);
var inst_30460 = cljs.core.count.call(null,inst_30459__$1);
var inst_30461 = cljs.core.reset_BANG_.call(null,dctr,inst_30460);
var inst_30466 = cljs.core.seq.call(null,inst_30459__$1);
var inst_30467 = inst_30466;
var inst_30468 = null;
var inst_30469 = (0);
var inst_30470 = (0);
var state_30527__$1 = (function (){var statearr_30570 = state_30527;
(statearr_30570[(20)] = inst_30467);

(statearr_30570[(30)] = inst_30461);

(statearr_30570[(29)] = inst_30459__$1);

(statearr_30570[(10)] = inst_30468);

(statearr_30570[(11)] = inst_30470);

(statearr_30570[(21)] = inst_30469);

return statearr_30570;
})();
var statearr_30571_30640 = state_30527__$1;
(statearr_30571_30640[(2)] = null);

(statearr_30571_30640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (28))){
var inst_30467 = (state_30527[(20)]);
var inst_30486 = (state_30527[(25)]);
var inst_30486__$1 = cljs.core.seq.call(null,inst_30467);
var state_30527__$1 = (function (){var statearr_30572 = state_30527;
(statearr_30572[(25)] = inst_30486__$1);

return statearr_30572;
})();
if(inst_30486__$1){
var statearr_30573_30641 = state_30527__$1;
(statearr_30573_30641[(1)] = (33));

} else {
var statearr_30574_30642 = state_30527__$1;
(statearr_30574_30642[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (25))){
var inst_30470 = (state_30527[(11)]);
var inst_30469 = (state_30527[(21)]);
var inst_30472 = (inst_30470 < inst_30469);
var inst_30473 = inst_30472;
var state_30527__$1 = state_30527;
if(cljs.core.truth_(inst_30473)){
var statearr_30575_30643 = state_30527__$1;
(statearr_30575_30643[(1)] = (27));

} else {
var statearr_30576_30644 = state_30527__$1;
(statearr_30576_30644[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (34))){
var state_30527__$1 = state_30527;
var statearr_30577_30645 = state_30527__$1;
(statearr_30577_30645[(2)] = null);

(statearr_30577_30645[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (17))){
var state_30527__$1 = state_30527;
var statearr_30578_30646 = state_30527__$1;
(statearr_30578_30646[(2)] = null);

(statearr_30578_30646[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (3))){
var inst_30525 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30527__$1,inst_30525);
} else {
if((state_val_30528 === (12))){
var inst_30454 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30579_30647 = state_30527__$1;
(statearr_30579_30647[(2)] = inst_30454);

(statearr_30579_30647[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (2))){
var state_30527__$1 = state_30527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30527__$1,(4),ch);
} else {
if((state_val_30528 === (23))){
var state_30527__$1 = state_30527;
var statearr_30580_30648 = state_30527__$1;
(statearr_30580_30648[(2)] = null);

(statearr_30580_30648[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (35))){
var inst_30509 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30581_30649 = state_30527__$1;
(statearr_30581_30649[(2)] = inst_30509);

(statearr_30581_30649[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (19))){
var inst_30426 = (state_30527[(7)]);
var inst_30430 = cljs.core.chunk_first.call(null,inst_30426);
var inst_30431 = cljs.core.chunk_rest.call(null,inst_30426);
var inst_30432 = cljs.core.count.call(null,inst_30430);
var inst_30404 = inst_30431;
var inst_30405 = inst_30430;
var inst_30406 = inst_30432;
var inst_30407 = (0);
var state_30527__$1 = (function (){var statearr_30582 = state_30527;
(statearr_30582[(13)] = inst_30407);

(statearr_30582[(14)] = inst_30404);

(statearr_30582[(16)] = inst_30406);

(statearr_30582[(17)] = inst_30405);

return statearr_30582;
})();
var statearr_30583_30650 = state_30527__$1;
(statearr_30583_30650[(2)] = null);

(statearr_30583_30650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (11))){
var inst_30404 = (state_30527[(14)]);
var inst_30426 = (state_30527[(7)]);
var inst_30426__$1 = cljs.core.seq.call(null,inst_30404);
var state_30527__$1 = (function (){var statearr_30584 = state_30527;
(statearr_30584[(7)] = inst_30426__$1);

return statearr_30584;
})();
if(inst_30426__$1){
var statearr_30585_30651 = state_30527__$1;
(statearr_30585_30651[(1)] = (16));

} else {
var statearr_30586_30652 = state_30527__$1;
(statearr_30586_30652[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (9))){
var inst_30456 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30587_30653 = state_30527__$1;
(statearr_30587_30653[(2)] = inst_30456);

(statearr_30587_30653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (5))){
var inst_30402 = cljs.core.deref.call(null,cs);
var inst_30403 = cljs.core.seq.call(null,inst_30402);
var inst_30404 = inst_30403;
var inst_30405 = null;
var inst_30406 = (0);
var inst_30407 = (0);
var state_30527__$1 = (function (){var statearr_30588 = state_30527;
(statearr_30588[(13)] = inst_30407);

(statearr_30588[(14)] = inst_30404);

(statearr_30588[(16)] = inst_30406);

(statearr_30588[(17)] = inst_30405);

return statearr_30588;
})();
var statearr_30589_30654 = state_30527__$1;
(statearr_30589_30654[(2)] = null);

(statearr_30589_30654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (14))){
var state_30527__$1 = state_30527;
var statearr_30590_30655 = state_30527__$1;
(statearr_30590_30655[(2)] = null);

(statearr_30590_30655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (45))){
var inst_30517 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30591_30656 = state_30527__$1;
(statearr_30591_30656[(2)] = inst_30517);

(statearr_30591_30656[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (26))){
var inst_30459 = (state_30527[(29)]);
var inst_30513 = (state_30527[(2)]);
var inst_30514 = cljs.core.seq.call(null,inst_30459);
var state_30527__$1 = (function (){var statearr_30592 = state_30527;
(statearr_30592[(31)] = inst_30513);

return statearr_30592;
})();
if(inst_30514){
var statearr_30593_30657 = state_30527__$1;
(statearr_30593_30657[(1)] = (42));

} else {
var statearr_30594_30658 = state_30527__$1;
(statearr_30594_30658[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (16))){
var inst_30426 = (state_30527[(7)]);
var inst_30428 = cljs.core.chunked_seq_QMARK_.call(null,inst_30426);
var state_30527__$1 = state_30527;
if(inst_30428){
var statearr_30595_30659 = state_30527__$1;
(statearr_30595_30659[(1)] = (19));

} else {
var statearr_30596_30660 = state_30527__$1;
(statearr_30596_30660[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (38))){
var inst_30506 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30597_30661 = state_30527__$1;
(statearr_30597_30661[(2)] = inst_30506);

(statearr_30597_30661[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (30))){
var state_30527__$1 = state_30527;
var statearr_30598_30662 = state_30527__$1;
(statearr_30598_30662[(2)] = null);

(statearr_30598_30662[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (10))){
var inst_30407 = (state_30527[(13)]);
var inst_30405 = (state_30527[(17)]);
var inst_30415 = cljs.core._nth.call(null,inst_30405,inst_30407);
var inst_30416 = cljs.core.nth.call(null,inst_30415,(0),null);
var inst_30417 = cljs.core.nth.call(null,inst_30415,(1),null);
var state_30527__$1 = (function (){var statearr_30599 = state_30527;
(statearr_30599[(26)] = inst_30416);

return statearr_30599;
})();
if(cljs.core.truth_(inst_30417)){
var statearr_30600_30663 = state_30527__$1;
(statearr_30600_30663[(1)] = (13));

} else {
var statearr_30601_30664 = state_30527__$1;
(statearr_30601_30664[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (18))){
var inst_30452 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30602_30665 = state_30527__$1;
(statearr_30602_30665[(2)] = inst_30452);

(statearr_30602_30665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (42))){
var state_30527__$1 = state_30527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30527__$1,(45),dchan);
} else {
if((state_val_30528 === (37))){
var inst_30495 = (state_30527[(23)]);
var inst_30486 = (state_30527[(25)]);
var inst_30395 = (state_30527[(12)]);
var inst_30495__$1 = cljs.core.first.call(null,inst_30486);
var inst_30496 = cljs.core.async.put_BANG_.call(null,inst_30495__$1,inst_30395,done);
var state_30527__$1 = (function (){var statearr_30603 = state_30527;
(statearr_30603[(23)] = inst_30495__$1);

return statearr_30603;
})();
if(cljs.core.truth_(inst_30496)){
var statearr_30604_30666 = state_30527__$1;
(statearr_30604_30666[(1)] = (39));

} else {
var statearr_30605_30667 = state_30527__$1;
(statearr_30605_30667[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (8))){
var inst_30407 = (state_30527[(13)]);
var inst_30406 = (state_30527[(16)]);
var inst_30409 = (inst_30407 < inst_30406);
var inst_30410 = inst_30409;
var state_30527__$1 = state_30527;
if(cljs.core.truth_(inst_30410)){
var statearr_30606_30668 = state_30527__$1;
(statearr_30606_30668[(1)] = (10));

} else {
var statearr_30607_30669 = state_30527__$1;
(statearr_30607_30669[(1)] = (11));

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
});})(c__29262__auto___30615,cs,m,dchan,dctr,done))
;
return ((function (switch__29150__auto__,c__29262__auto___30615,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29151__auto__ = null;
var cljs$core$async$mult_$_state_machine__29151__auto____0 = (function (){
var statearr_30611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30611[(0)] = cljs$core$async$mult_$_state_machine__29151__auto__);

(statearr_30611[(1)] = (1));

return statearr_30611;
});
var cljs$core$async$mult_$_state_machine__29151__auto____1 = (function (state_30527){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_30527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e30612){if((e30612 instanceof Object)){
var ex__29154__auto__ = e30612;
var statearr_30613_30670 = state_30527;
(statearr_30613_30670[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30671 = state_30527;
state_30527 = G__30671;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29151__auto__ = function(state_30527){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29151__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29151__auto____1.call(this,state_30527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29151__auto____0;
cljs$core$async$mult_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29151__auto____1;
return cljs$core$async$mult_$_state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto___30615,cs,m,dchan,dctr,done))
})();
var state__29264__auto__ = (function (){var statearr_30614 = f__29263__auto__.call(null);
(statearr_30614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto___30615);

return statearr_30614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto___30615,cs,m,dchan,dctr,done))
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
var args30672 = [];
var len__27483__auto___30675 = arguments.length;
var i__27484__auto___30676 = (0);
while(true){
if((i__27484__auto___30676 < len__27483__auto___30675)){
args30672.push((arguments[i__27484__auto___30676]));

var G__30677 = (i__27484__auto___30676 + (1));
i__27484__auto___30676 = G__30677;
continue;
} else {
}
break;
}

var G__30674 = args30672.length;
switch (G__30674) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30672.length)].join('')));

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
var x__27038__auto__ = (((m == null))?null:m);
var m__27039__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27038__auto__)]);
if(!((m__27039__auto__ == null))){
return m__27039__auto__.call(null,m,ch);
} else {
var m__27039__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27039__auto____$1 == null))){
return m__27039__auto____$1.call(null,m,ch);
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
var x__27038__auto__ = (((m == null))?null:m);
var m__27039__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27038__auto__)]);
if(!((m__27039__auto__ == null))){
return m__27039__auto__.call(null,m,ch);
} else {
var m__27039__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27039__auto____$1 == null))){
return m__27039__auto____$1.call(null,m,ch);
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
var x__27038__auto__ = (((m == null))?null:m);
var m__27039__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27038__auto__)]);
if(!((m__27039__auto__ == null))){
return m__27039__auto__.call(null,m);
} else {
var m__27039__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27039__auto____$1 == null))){
return m__27039__auto____$1.call(null,m);
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
var x__27038__auto__ = (((m == null))?null:m);
var m__27039__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27038__auto__)]);
if(!((m__27039__auto__ == null))){
return m__27039__auto__.call(null,m,state_map);
} else {
var m__27039__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27039__auto____$1 == null))){
return m__27039__auto____$1.call(null,m,state_map);
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
var x__27038__auto__ = (((m == null))?null:m);
var m__27039__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27038__auto__)]);
if(!((m__27039__auto__ == null))){
return m__27039__auto__.call(null,m,mode);
} else {
var m__27039__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27039__auto____$1 == null))){
return m__27039__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27490__auto__ = [];
var len__27483__auto___30689 = arguments.length;
var i__27484__auto___30690 = (0);
while(true){
if((i__27484__auto___30690 < len__27483__auto___30689)){
args__27490__auto__.push((arguments[i__27484__auto___30690]));

var G__30691 = (i__27484__auto___30690 + (1));
i__27484__auto___30690 = G__30691;
continue;
} else {
}
break;
}

var argseq__27491__auto__ = ((((3) < args__27490__auto__.length))?(new cljs.core.IndexedSeq(args__27490__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27491__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30683){
var map__30684 = p__30683;
var map__30684__$1 = ((((!((map__30684 == null)))?((((map__30684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30684):map__30684);
var opts = map__30684__$1;
var statearr_30686_30692 = state;
(statearr_30686_30692[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30684,map__30684__$1,opts){
return (function (val){
var statearr_30687_30693 = state;
(statearr_30687_30693[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30684,map__30684__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30688_30694 = state;
(statearr_30688_30694[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30679){
var G__30680 = cljs.core.first.call(null,seq30679);
var seq30679__$1 = cljs.core.next.call(null,seq30679);
var G__30681 = cljs.core.first.call(null,seq30679__$1);
var seq30679__$2 = cljs.core.next.call(null,seq30679__$1);
var G__30682 = cljs.core.first.call(null,seq30679__$2);
var seq30679__$3 = cljs.core.next.call(null,seq30679__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30680,G__30681,G__30682,seq30679__$3);
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
if(typeof cljs.core.async.t_cljs$core$async30862 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30862 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta30863){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta30863 = meta30863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30864,meta30863__$1){
var self__ = this;
var _30864__$1 = this;
return (new cljs.core.async.t_cljs$core$async30862(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta30863__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30862.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30864){
var self__ = this;
var _30864__$1 = this;
return self__.meta30863;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30862.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30862.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30862.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30862.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30862.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30862.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30862.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30862.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async30862.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta30863","meta30863",-1726334172,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30862.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30862";

cljs.core.async.t_cljs$core$async30862.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26981__auto__,writer__26982__auto__,opt__26983__auto__){
return cljs.core._write.call(null,writer__26982__auto__,"cljs.core.async/t_cljs$core$async30862");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30862 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30862(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30863){
return (new cljs.core.async.t_cljs$core$async30862(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30863));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30862(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29262__auto___31029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto___31029,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto___31029,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30966){
var state_val_30967 = (state_30966[(1)]);
if((state_val_30967 === (7))){
var inst_30881 = (state_30966[(2)]);
var state_30966__$1 = state_30966;
var statearr_30968_31030 = state_30966__$1;
(statearr_30968_31030[(2)] = inst_30881);

(statearr_30968_31030[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (20))){
var inst_30893 = (state_30966[(7)]);
var state_30966__$1 = state_30966;
var statearr_30969_31031 = state_30966__$1;
(statearr_30969_31031[(2)] = inst_30893);

(statearr_30969_31031[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (27))){
var state_30966__$1 = state_30966;
var statearr_30970_31032 = state_30966__$1;
(statearr_30970_31032[(2)] = null);

(statearr_30970_31032[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (1))){
var inst_30868 = (state_30966[(8)]);
var inst_30868__$1 = calc_state.call(null);
var inst_30870 = (inst_30868__$1 == null);
var inst_30871 = cljs.core.not.call(null,inst_30870);
var state_30966__$1 = (function (){var statearr_30971 = state_30966;
(statearr_30971[(8)] = inst_30868__$1);

return statearr_30971;
})();
if(inst_30871){
var statearr_30972_31033 = state_30966__$1;
(statearr_30972_31033[(1)] = (2));

} else {
var statearr_30973_31034 = state_30966__$1;
(statearr_30973_31034[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (24))){
var inst_30926 = (state_30966[(9)]);
var inst_30940 = (state_30966[(10)]);
var inst_30917 = (state_30966[(11)]);
var inst_30940__$1 = inst_30917.call(null,inst_30926);
var state_30966__$1 = (function (){var statearr_30974 = state_30966;
(statearr_30974[(10)] = inst_30940__$1);

return statearr_30974;
})();
if(cljs.core.truth_(inst_30940__$1)){
var statearr_30975_31035 = state_30966__$1;
(statearr_30975_31035[(1)] = (29));

} else {
var statearr_30976_31036 = state_30966__$1;
(statearr_30976_31036[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (4))){
var inst_30884 = (state_30966[(2)]);
var state_30966__$1 = state_30966;
if(cljs.core.truth_(inst_30884)){
var statearr_30977_31037 = state_30966__$1;
(statearr_30977_31037[(1)] = (8));

} else {
var statearr_30978_31038 = state_30966__$1;
(statearr_30978_31038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (15))){
var inst_30911 = (state_30966[(2)]);
var state_30966__$1 = state_30966;
if(cljs.core.truth_(inst_30911)){
var statearr_30979_31039 = state_30966__$1;
(statearr_30979_31039[(1)] = (19));

} else {
var statearr_30980_31040 = state_30966__$1;
(statearr_30980_31040[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (21))){
var inst_30916 = (state_30966[(12)]);
var inst_30916__$1 = (state_30966[(2)]);
var inst_30917 = cljs.core.get.call(null,inst_30916__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30918 = cljs.core.get.call(null,inst_30916__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30919 = cljs.core.get.call(null,inst_30916__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30966__$1 = (function (){var statearr_30981 = state_30966;
(statearr_30981[(13)] = inst_30918);

(statearr_30981[(11)] = inst_30917);

(statearr_30981[(12)] = inst_30916__$1);

return statearr_30981;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30966__$1,(22),inst_30919);
} else {
if((state_val_30967 === (31))){
var inst_30948 = (state_30966[(2)]);
var state_30966__$1 = state_30966;
if(cljs.core.truth_(inst_30948)){
var statearr_30982_31041 = state_30966__$1;
(statearr_30982_31041[(1)] = (32));

} else {
var statearr_30983_31042 = state_30966__$1;
(statearr_30983_31042[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (32))){
var inst_30925 = (state_30966[(14)]);
var state_30966__$1 = state_30966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30966__$1,(35),out,inst_30925);
} else {
if((state_val_30967 === (33))){
var inst_30916 = (state_30966[(12)]);
var inst_30893 = inst_30916;
var state_30966__$1 = (function (){var statearr_30984 = state_30966;
(statearr_30984[(7)] = inst_30893);

return statearr_30984;
})();
var statearr_30985_31043 = state_30966__$1;
(statearr_30985_31043[(2)] = null);

(statearr_30985_31043[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (13))){
var inst_30893 = (state_30966[(7)]);
var inst_30900 = inst_30893.cljs$lang$protocol_mask$partition0$;
var inst_30901 = (inst_30900 & (64));
var inst_30902 = inst_30893.cljs$core$ISeq$;
var inst_30903 = (cljs.core.PROTOCOL_SENTINEL === inst_30902);
var inst_30904 = (inst_30901) || (inst_30903);
var state_30966__$1 = state_30966;
if(cljs.core.truth_(inst_30904)){
var statearr_30986_31044 = state_30966__$1;
(statearr_30986_31044[(1)] = (16));

} else {
var statearr_30987_31045 = state_30966__$1;
(statearr_30987_31045[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (22))){
var inst_30925 = (state_30966[(14)]);
var inst_30926 = (state_30966[(9)]);
var inst_30924 = (state_30966[(2)]);
var inst_30925__$1 = cljs.core.nth.call(null,inst_30924,(0),null);
var inst_30926__$1 = cljs.core.nth.call(null,inst_30924,(1),null);
var inst_30927 = (inst_30925__$1 == null);
var inst_30928 = cljs.core._EQ_.call(null,inst_30926__$1,change);
var inst_30929 = (inst_30927) || (inst_30928);
var state_30966__$1 = (function (){var statearr_30988 = state_30966;
(statearr_30988[(14)] = inst_30925__$1);

(statearr_30988[(9)] = inst_30926__$1);

return statearr_30988;
})();
if(cljs.core.truth_(inst_30929)){
var statearr_30989_31046 = state_30966__$1;
(statearr_30989_31046[(1)] = (23));

} else {
var statearr_30990_31047 = state_30966__$1;
(statearr_30990_31047[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (36))){
var inst_30916 = (state_30966[(12)]);
var inst_30893 = inst_30916;
var state_30966__$1 = (function (){var statearr_30991 = state_30966;
(statearr_30991[(7)] = inst_30893);

return statearr_30991;
})();
var statearr_30992_31048 = state_30966__$1;
(statearr_30992_31048[(2)] = null);

(statearr_30992_31048[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (29))){
var inst_30940 = (state_30966[(10)]);
var state_30966__$1 = state_30966;
var statearr_30993_31049 = state_30966__$1;
(statearr_30993_31049[(2)] = inst_30940);

(statearr_30993_31049[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (6))){
var state_30966__$1 = state_30966;
var statearr_30994_31050 = state_30966__$1;
(statearr_30994_31050[(2)] = false);

(statearr_30994_31050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (28))){
var inst_30936 = (state_30966[(2)]);
var inst_30937 = calc_state.call(null);
var inst_30893 = inst_30937;
var state_30966__$1 = (function (){var statearr_30995 = state_30966;
(statearr_30995[(15)] = inst_30936);

(statearr_30995[(7)] = inst_30893);

return statearr_30995;
})();
var statearr_30996_31051 = state_30966__$1;
(statearr_30996_31051[(2)] = null);

(statearr_30996_31051[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (25))){
var inst_30962 = (state_30966[(2)]);
var state_30966__$1 = state_30966;
var statearr_30997_31052 = state_30966__$1;
(statearr_30997_31052[(2)] = inst_30962);

(statearr_30997_31052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (34))){
var inst_30960 = (state_30966[(2)]);
var state_30966__$1 = state_30966;
var statearr_30998_31053 = state_30966__$1;
(statearr_30998_31053[(2)] = inst_30960);

(statearr_30998_31053[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (17))){
var state_30966__$1 = state_30966;
var statearr_30999_31054 = state_30966__$1;
(statearr_30999_31054[(2)] = false);

(statearr_30999_31054[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (3))){
var state_30966__$1 = state_30966;
var statearr_31000_31055 = state_30966__$1;
(statearr_31000_31055[(2)] = false);

(statearr_31000_31055[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (12))){
var inst_30964 = (state_30966[(2)]);
var state_30966__$1 = state_30966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30966__$1,inst_30964);
} else {
if((state_val_30967 === (2))){
var inst_30868 = (state_30966[(8)]);
var inst_30873 = inst_30868.cljs$lang$protocol_mask$partition0$;
var inst_30874 = (inst_30873 & (64));
var inst_30875 = inst_30868.cljs$core$ISeq$;
var inst_30876 = (cljs.core.PROTOCOL_SENTINEL === inst_30875);
var inst_30877 = (inst_30874) || (inst_30876);
var state_30966__$1 = state_30966;
if(cljs.core.truth_(inst_30877)){
var statearr_31001_31056 = state_30966__$1;
(statearr_31001_31056[(1)] = (5));

} else {
var statearr_31002_31057 = state_30966__$1;
(statearr_31002_31057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (23))){
var inst_30925 = (state_30966[(14)]);
var inst_30931 = (inst_30925 == null);
var state_30966__$1 = state_30966;
if(cljs.core.truth_(inst_30931)){
var statearr_31003_31058 = state_30966__$1;
(statearr_31003_31058[(1)] = (26));

} else {
var statearr_31004_31059 = state_30966__$1;
(statearr_31004_31059[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (35))){
var inst_30951 = (state_30966[(2)]);
var state_30966__$1 = state_30966;
if(cljs.core.truth_(inst_30951)){
var statearr_31005_31060 = state_30966__$1;
(statearr_31005_31060[(1)] = (36));

} else {
var statearr_31006_31061 = state_30966__$1;
(statearr_31006_31061[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (19))){
var inst_30893 = (state_30966[(7)]);
var inst_30913 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30893);
var state_30966__$1 = state_30966;
var statearr_31007_31062 = state_30966__$1;
(statearr_31007_31062[(2)] = inst_30913);

(statearr_31007_31062[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (11))){
var inst_30893 = (state_30966[(7)]);
var inst_30897 = (inst_30893 == null);
var inst_30898 = cljs.core.not.call(null,inst_30897);
var state_30966__$1 = state_30966;
if(inst_30898){
var statearr_31008_31063 = state_30966__$1;
(statearr_31008_31063[(1)] = (13));

} else {
var statearr_31009_31064 = state_30966__$1;
(statearr_31009_31064[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (9))){
var inst_30868 = (state_30966[(8)]);
var state_30966__$1 = state_30966;
var statearr_31010_31065 = state_30966__$1;
(statearr_31010_31065[(2)] = inst_30868);

(statearr_31010_31065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (5))){
var state_30966__$1 = state_30966;
var statearr_31011_31066 = state_30966__$1;
(statearr_31011_31066[(2)] = true);

(statearr_31011_31066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (14))){
var state_30966__$1 = state_30966;
var statearr_31012_31067 = state_30966__$1;
(statearr_31012_31067[(2)] = false);

(statearr_31012_31067[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (26))){
var inst_30926 = (state_30966[(9)]);
var inst_30933 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30926);
var state_30966__$1 = state_30966;
var statearr_31013_31068 = state_30966__$1;
(statearr_31013_31068[(2)] = inst_30933);

(statearr_31013_31068[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (16))){
var state_30966__$1 = state_30966;
var statearr_31014_31069 = state_30966__$1;
(statearr_31014_31069[(2)] = true);

(statearr_31014_31069[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (38))){
var inst_30956 = (state_30966[(2)]);
var state_30966__$1 = state_30966;
var statearr_31015_31070 = state_30966__$1;
(statearr_31015_31070[(2)] = inst_30956);

(statearr_31015_31070[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (30))){
var inst_30918 = (state_30966[(13)]);
var inst_30926 = (state_30966[(9)]);
var inst_30917 = (state_30966[(11)]);
var inst_30943 = cljs.core.empty_QMARK_.call(null,inst_30917);
var inst_30944 = inst_30918.call(null,inst_30926);
var inst_30945 = cljs.core.not.call(null,inst_30944);
var inst_30946 = (inst_30943) && (inst_30945);
var state_30966__$1 = state_30966;
var statearr_31016_31071 = state_30966__$1;
(statearr_31016_31071[(2)] = inst_30946);

(statearr_31016_31071[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (10))){
var inst_30868 = (state_30966[(8)]);
var inst_30889 = (state_30966[(2)]);
var inst_30890 = cljs.core.get.call(null,inst_30889,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30891 = cljs.core.get.call(null,inst_30889,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30892 = cljs.core.get.call(null,inst_30889,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30893 = inst_30868;
var state_30966__$1 = (function (){var statearr_31017 = state_30966;
(statearr_31017[(16)] = inst_30890);

(statearr_31017[(17)] = inst_30892);

(statearr_31017[(7)] = inst_30893);

(statearr_31017[(18)] = inst_30891);

return statearr_31017;
})();
var statearr_31018_31072 = state_30966__$1;
(statearr_31018_31072[(2)] = null);

(statearr_31018_31072[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (18))){
var inst_30908 = (state_30966[(2)]);
var state_30966__$1 = state_30966;
var statearr_31019_31073 = state_30966__$1;
(statearr_31019_31073[(2)] = inst_30908);

(statearr_31019_31073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (37))){
var state_30966__$1 = state_30966;
var statearr_31020_31074 = state_30966__$1;
(statearr_31020_31074[(2)] = null);

(statearr_31020_31074[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (8))){
var inst_30868 = (state_30966[(8)]);
var inst_30886 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30868);
var state_30966__$1 = state_30966;
var statearr_31021_31075 = state_30966__$1;
(statearr_31021_31075[(2)] = inst_30886);

(statearr_31021_31075[(1)] = (10));


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
});})(c__29262__auto___31029,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29150__auto__,c__29262__auto___31029,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29151__auto__ = null;
var cljs$core$async$mix_$_state_machine__29151__auto____0 = (function (){
var statearr_31025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31025[(0)] = cljs$core$async$mix_$_state_machine__29151__auto__);

(statearr_31025[(1)] = (1));

return statearr_31025;
});
var cljs$core$async$mix_$_state_machine__29151__auto____1 = (function (state_30966){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_30966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e31026){if((e31026 instanceof Object)){
var ex__29154__auto__ = e31026;
var statearr_31027_31076 = state_30966;
(statearr_31027_31076[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31077 = state_30966;
state_30966 = G__31077;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29151__auto__ = function(state_30966){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29151__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29151__auto____1.call(this,state_30966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29151__auto____0;
cljs$core$async$mix_$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29151__auto____1;
return cljs$core$async$mix_$_state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto___31029,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29264__auto__ = (function (){var statearr_31028 = f__29263__auto__.call(null);
(statearr_31028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto___31029);

return statearr_31028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto___31029,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__27038__auto__ = (((p == null))?null:p);
var m__27039__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27038__auto__)]);
if(!((m__27039__auto__ == null))){
return m__27039__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27039__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27039__auto____$1 == null))){
return m__27039__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__27038__auto__ = (((p == null))?null:p);
var m__27039__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27038__auto__)]);
if(!((m__27039__auto__ == null))){
return m__27039__auto__.call(null,p,v,ch);
} else {
var m__27039__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27039__auto____$1 == null))){
return m__27039__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31078 = [];
var len__27483__auto___31081 = arguments.length;
var i__27484__auto___31082 = (0);
while(true){
if((i__27484__auto___31082 < len__27483__auto___31081)){
args31078.push((arguments[i__27484__auto___31082]));

var G__31083 = (i__27484__auto___31082 + (1));
i__27484__auto___31082 = G__31083;
continue;
} else {
}
break;
}

var G__31080 = args31078.length;
switch (G__31080) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31078.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27038__auto__ = (((p == null))?null:p);
var m__27039__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27038__auto__)]);
if(!((m__27039__auto__ == null))){
return m__27039__auto__.call(null,p);
} else {
var m__27039__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27039__auto____$1 == null))){
return m__27039__auto____$1.call(null,p);
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
var x__27038__auto__ = (((p == null))?null:p);
var m__27039__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27038__auto__)]);
if(!((m__27039__auto__ == null))){
return m__27039__auto__.call(null,p,v);
} else {
var m__27039__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27039__auto____$1 == null))){
return m__27039__auto____$1.call(null,p,v);
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
var args31086 = [];
var len__27483__auto___31211 = arguments.length;
var i__27484__auto___31212 = (0);
while(true){
if((i__27484__auto___31212 < len__27483__auto___31211)){
args31086.push((arguments[i__27484__auto___31212]));

var G__31213 = (i__27484__auto___31212 + (1));
i__27484__auto___31212 = G__31213;
continue;
} else {
}
break;
}

var G__31088 = args31086.length;
switch (G__31088) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31086.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26370__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26370__auto__)){
return or__26370__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26370__auto__,mults){
return (function (p1__31085_SHARP_){
if(cljs.core.truth_(p1__31085_SHARP_.call(null,topic))){
return p1__31085_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31085_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26370__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31089 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31089 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31090){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31090 = meta31090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31091,meta31090__$1){
var self__ = this;
var _31091__$1 = this;
return (new cljs.core.async.t_cljs$core$async31089(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31090__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31091){
var self__ = this;
var _31091__$1 = this;
return self__.meta31090;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31089.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31090","meta31090",578862395,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31089.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31089";

cljs.core.async.t_cljs$core$async31089.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26981__auto__,writer__26982__auto__,opt__26983__auto__){
return cljs.core._write.call(null,writer__26982__auto__,"cljs.core.async/t_cljs$core$async31089");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31089 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31089(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31090){
return (new cljs.core.async.t_cljs$core$async31089(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31090));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31089(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29262__auto___31215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto___31215,mults,ensure_mult,p){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto___31215,mults,ensure_mult,p){
return (function (state_31163){
var state_val_31164 = (state_31163[(1)]);
if((state_val_31164 === (7))){
var inst_31159 = (state_31163[(2)]);
var state_31163__$1 = state_31163;
var statearr_31165_31216 = state_31163__$1;
(statearr_31165_31216[(2)] = inst_31159);

(statearr_31165_31216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (20))){
var state_31163__$1 = state_31163;
var statearr_31166_31217 = state_31163__$1;
(statearr_31166_31217[(2)] = null);

(statearr_31166_31217[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (1))){
var state_31163__$1 = state_31163;
var statearr_31167_31218 = state_31163__$1;
(statearr_31167_31218[(2)] = null);

(statearr_31167_31218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (24))){
var inst_31142 = (state_31163[(7)]);
var inst_31151 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31142);
var state_31163__$1 = state_31163;
var statearr_31168_31219 = state_31163__$1;
(statearr_31168_31219[(2)] = inst_31151);

(statearr_31168_31219[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (4))){
var inst_31094 = (state_31163[(8)]);
var inst_31094__$1 = (state_31163[(2)]);
var inst_31095 = (inst_31094__$1 == null);
var state_31163__$1 = (function (){var statearr_31169 = state_31163;
(statearr_31169[(8)] = inst_31094__$1);

return statearr_31169;
})();
if(cljs.core.truth_(inst_31095)){
var statearr_31170_31220 = state_31163__$1;
(statearr_31170_31220[(1)] = (5));

} else {
var statearr_31171_31221 = state_31163__$1;
(statearr_31171_31221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (15))){
var inst_31136 = (state_31163[(2)]);
var state_31163__$1 = state_31163;
var statearr_31172_31222 = state_31163__$1;
(statearr_31172_31222[(2)] = inst_31136);

(statearr_31172_31222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (21))){
var inst_31156 = (state_31163[(2)]);
var state_31163__$1 = (function (){var statearr_31173 = state_31163;
(statearr_31173[(9)] = inst_31156);

return statearr_31173;
})();
var statearr_31174_31223 = state_31163__$1;
(statearr_31174_31223[(2)] = null);

(statearr_31174_31223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (13))){
var inst_31118 = (state_31163[(10)]);
var inst_31120 = cljs.core.chunked_seq_QMARK_.call(null,inst_31118);
var state_31163__$1 = state_31163;
if(inst_31120){
var statearr_31175_31224 = state_31163__$1;
(statearr_31175_31224[(1)] = (16));

} else {
var statearr_31176_31225 = state_31163__$1;
(statearr_31176_31225[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (22))){
var inst_31148 = (state_31163[(2)]);
var state_31163__$1 = state_31163;
if(cljs.core.truth_(inst_31148)){
var statearr_31177_31226 = state_31163__$1;
(statearr_31177_31226[(1)] = (23));

} else {
var statearr_31178_31227 = state_31163__$1;
(statearr_31178_31227[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (6))){
var inst_31144 = (state_31163[(11)]);
var inst_31094 = (state_31163[(8)]);
var inst_31142 = (state_31163[(7)]);
var inst_31142__$1 = topic_fn.call(null,inst_31094);
var inst_31143 = cljs.core.deref.call(null,mults);
var inst_31144__$1 = cljs.core.get.call(null,inst_31143,inst_31142__$1);
var state_31163__$1 = (function (){var statearr_31179 = state_31163;
(statearr_31179[(11)] = inst_31144__$1);

(statearr_31179[(7)] = inst_31142__$1);

return statearr_31179;
})();
if(cljs.core.truth_(inst_31144__$1)){
var statearr_31180_31228 = state_31163__$1;
(statearr_31180_31228[(1)] = (19));

} else {
var statearr_31181_31229 = state_31163__$1;
(statearr_31181_31229[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (25))){
var inst_31153 = (state_31163[(2)]);
var state_31163__$1 = state_31163;
var statearr_31182_31230 = state_31163__$1;
(statearr_31182_31230[(2)] = inst_31153);

(statearr_31182_31230[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (17))){
var inst_31118 = (state_31163[(10)]);
var inst_31127 = cljs.core.first.call(null,inst_31118);
var inst_31128 = cljs.core.async.muxch_STAR_.call(null,inst_31127);
var inst_31129 = cljs.core.async.close_BANG_.call(null,inst_31128);
var inst_31130 = cljs.core.next.call(null,inst_31118);
var inst_31104 = inst_31130;
var inst_31105 = null;
var inst_31106 = (0);
var inst_31107 = (0);
var state_31163__$1 = (function (){var statearr_31183 = state_31163;
(statearr_31183[(12)] = inst_31129);

(statearr_31183[(13)] = inst_31107);

(statearr_31183[(14)] = inst_31104);

(statearr_31183[(15)] = inst_31105);

(statearr_31183[(16)] = inst_31106);

return statearr_31183;
})();
var statearr_31184_31231 = state_31163__$1;
(statearr_31184_31231[(2)] = null);

(statearr_31184_31231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (3))){
var inst_31161 = (state_31163[(2)]);
var state_31163__$1 = state_31163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31163__$1,inst_31161);
} else {
if((state_val_31164 === (12))){
var inst_31138 = (state_31163[(2)]);
var state_31163__$1 = state_31163;
var statearr_31185_31232 = state_31163__$1;
(statearr_31185_31232[(2)] = inst_31138);

(statearr_31185_31232[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (2))){
var state_31163__$1 = state_31163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31163__$1,(4),ch);
} else {
if((state_val_31164 === (23))){
var state_31163__$1 = state_31163;
var statearr_31186_31233 = state_31163__$1;
(statearr_31186_31233[(2)] = null);

(statearr_31186_31233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (19))){
var inst_31144 = (state_31163[(11)]);
var inst_31094 = (state_31163[(8)]);
var inst_31146 = cljs.core.async.muxch_STAR_.call(null,inst_31144);
var state_31163__$1 = state_31163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31163__$1,(22),inst_31146,inst_31094);
} else {
if((state_val_31164 === (11))){
var inst_31118 = (state_31163[(10)]);
var inst_31104 = (state_31163[(14)]);
var inst_31118__$1 = cljs.core.seq.call(null,inst_31104);
var state_31163__$1 = (function (){var statearr_31187 = state_31163;
(statearr_31187[(10)] = inst_31118__$1);

return statearr_31187;
})();
if(inst_31118__$1){
var statearr_31188_31234 = state_31163__$1;
(statearr_31188_31234[(1)] = (13));

} else {
var statearr_31189_31235 = state_31163__$1;
(statearr_31189_31235[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (9))){
var inst_31140 = (state_31163[(2)]);
var state_31163__$1 = state_31163;
var statearr_31190_31236 = state_31163__$1;
(statearr_31190_31236[(2)] = inst_31140);

(statearr_31190_31236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (5))){
var inst_31101 = cljs.core.deref.call(null,mults);
var inst_31102 = cljs.core.vals.call(null,inst_31101);
var inst_31103 = cljs.core.seq.call(null,inst_31102);
var inst_31104 = inst_31103;
var inst_31105 = null;
var inst_31106 = (0);
var inst_31107 = (0);
var state_31163__$1 = (function (){var statearr_31191 = state_31163;
(statearr_31191[(13)] = inst_31107);

(statearr_31191[(14)] = inst_31104);

(statearr_31191[(15)] = inst_31105);

(statearr_31191[(16)] = inst_31106);

return statearr_31191;
})();
var statearr_31192_31237 = state_31163__$1;
(statearr_31192_31237[(2)] = null);

(statearr_31192_31237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (14))){
var state_31163__$1 = state_31163;
var statearr_31196_31238 = state_31163__$1;
(statearr_31196_31238[(2)] = null);

(statearr_31196_31238[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (16))){
var inst_31118 = (state_31163[(10)]);
var inst_31122 = cljs.core.chunk_first.call(null,inst_31118);
var inst_31123 = cljs.core.chunk_rest.call(null,inst_31118);
var inst_31124 = cljs.core.count.call(null,inst_31122);
var inst_31104 = inst_31123;
var inst_31105 = inst_31122;
var inst_31106 = inst_31124;
var inst_31107 = (0);
var state_31163__$1 = (function (){var statearr_31197 = state_31163;
(statearr_31197[(13)] = inst_31107);

(statearr_31197[(14)] = inst_31104);

(statearr_31197[(15)] = inst_31105);

(statearr_31197[(16)] = inst_31106);

return statearr_31197;
})();
var statearr_31198_31239 = state_31163__$1;
(statearr_31198_31239[(2)] = null);

(statearr_31198_31239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (10))){
var inst_31107 = (state_31163[(13)]);
var inst_31104 = (state_31163[(14)]);
var inst_31105 = (state_31163[(15)]);
var inst_31106 = (state_31163[(16)]);
var inst_31112 = cljs.core._nth.call(null,inst_31105,inst_31107);
var inst_31113 = cljs.core.async.muxch_STAR_.call(null,inst_31112);
var inst_31114 = cljs.core.async.close_BANG_.call(null,inst_31113);
var inst_31115 = (inst_31107 + (1));
var tmp31193 = inst_31104;
var tmp31194 = inst_31105;
var tmp31195 = inst_31106;
var inst_31104__$1 = tmp31193;
var inst_31105__$1 = tmp31194;
var inst_31106__$1 = tmp31195;
var inst_31107__$1 = inst_31115;
var state_31163__$1 = (function (){var statearr_31199 = state_31163;
(statearr_31199[(13)] = inst_31107__$1);

(statearr_31199[(14)] = inst_31104__$1);

(statearr_31199[(15)] = inst_31105__$1);

(statearr_31199[(17)] = inst_31114);

(statearr_31199[(16)] = inst_31106__$1);

return statearr_31199;
})();
var statearr_31200_31240 = state_31163__$1;
(statearr_31200_31240[(2)] = null);

(statearr_31200_31240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (18))){
var inst_31133 = (state_31163[(2)]);
var state_31163__$1 = state_31163;
var statearr_31201_31241 = state_31163__$1;
(statearr_31201_31241[(2)] = inst_31133);

(statearr_31201_31241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (8))){
var inst_31107 = (state_31163[(13)]);
var inst_31106 = (state_31163[(16)]);
var inst_31109 = (inst_31107 < inst_31106);
var inst_31110 = inst_31109;
var state_31163__$1 = state_31163;
if(cljs.core.truth_(inst_31110)){
var statearr_31202_31242 = state_31163__$1;
(statearr_31202_31242[(1)] = (10));

} else {
var statearr_31203_31243 = state_31163__$1;
(statearr_31203_31243[(1)] = (11));

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
});})(c__29262__auto___31215,mults,ensure_mult,p))
;
return ((function (switch__29150__auto__,c__29262__auto___31215,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29151__auto__ = null;
var cljs$core$async$state_machine__29151__auto____0 = (function (){
var statearr_31207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31207[(0)] = cljs$core$async$state_machine__29151__auto__);

(statearr_31207[(1)] = (1));

return statearr_31207;
});
var cljs$core$async$state_machine__29151__auto____1 = (function (state_31163){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_31163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e31208){if((e31208 instanceof Object)){
var ex__29154__auto__ = e31208;
var statearr_31209_31244 = state_31163;
(statearr_31209_31244[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31245 = state_31163;
state_31163 = G__31245;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
cljs$core$async$state_machine__29151__auto__ = function(state_31163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29151__auto____1.call(this,state_31163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29151__auto____0;
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29151__auto____1;
return cljs$core$async$state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto___31215,mults,ensure_mult,p))
})();
var state__29264__auto__ = (function (){var statearr_31210 = f__29263__auto__.call(null);
(statearr_31210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto___31215);

return statearr_31210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto___31215,mults,ensure_mult,p))
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
var args31246 = [];
var len__27483__auto___31249 = arguments.length;
var i__27484__auto___31250 = (0);
while(true){
if((i__27484__auto___31250 < len__27483__auto___31249)){
args31246.push((arguments[i__27484__auto___31250]));

var G__31251 = (i__27484__auto___31250 + (1));
i__27484__auto___31250 = G__31251;
continue;
} else {
}
break;
}

var G__31248 = args31246.length;
switch (G__31248) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31246.length)].join('')));

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
var args31253 = [];
var len__27483__auto___31256 = arguments.length;
var i__27484__auto___31257 = (0);
while(true){
if((i__27484__auto___31257 < len__27483__auto___31256)){
args31253.push((arguments[i__27484__auto___31257]));

var G__31258 = (i__27484__auto___31257 + (1));
i__27484__auto___31257 = G__31258;
continue;
} else {
}
break;
}

var G__31255 = args31253.length;
switch (G__31255) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31253.length)].join('')));

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
var args31260 = [];
var len__27483__auto___31331 = arguments.length;
var i__27484__auto___31332 = (0);
while(true){
if((i__27484__auto___31332 < len__27483__auto___31331)){
args31260.push((arguments[i__27484__auto___31332]));

var G__31333 = (i__27484__auto___31332 + (1));
i__27484__auto___31332 = G__31333;
continue;
} else {
}
break;
}

var G__31262 = args31260.length;
switch (G__31262) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31260.length)].join('')));

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
var c__29262__auto___31335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto___31335,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto___31335,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31301){
var state_val_31302 = (state_31301[(1)]);
if((state_val_31302 === (7))){
var state_31301__$1 = state_31301;
var statearr_31303_31336 = state_31301__$1;
(statearr_31303_31336[(2)] = null);

(statearr_31303_31336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (1))){
var state_31301__$1 = state_31301;
var statearr_31304_31337 = state_31301__$1;
(statearr_31304_31337[(2)] = null);

(statearr_31304_31337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (4))){
var inst_31265 = (state_31301[(7)]);
var inst_31267 = (inst_31265 < cnt);
var state_31301__$1 = state_31301;
if(cljs.core.truth_(inst_31267)){
var statearr_31305_31338 = state_31301__$1;
(statearr_31305_31338[(1)] = (6));

} else {
var statearr_31306_31339 = state_31301__$1;
(statearr_31306_31339[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (15))){
var inst_31297 = (state_31301[(2)]);
var state_31301__$1 = state_31301;
var statearr_31307_31340 = state_31301__$1;
(statearr_31307_31340[(2)] = inst_31297);

(statearr_31307_31340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (13))){
var inst_31290 = cljs.core.async.close_BANG_.call(null,out);
var state_31301__$1 = state_31301;
var statearr_31308_31341 = state_31301__$1;
(statearr_31308_31341[(2)] = inst_31290);

(statearr_31308_31341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (6))){
var state_31301__$1 = state_31301;
var statearr_31309_31342 = state_31301__$1;
(statearr_31309_31342[(2)] = null);

(statearr_31309_31342[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (3))){
var inst_31299 = (state_31301[(2)]);
var state_31301__$1 = state_31301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31301__$1,inst_31299);
} else {
if((state_val_31302 === (12))){
var inst_31287 = (state_31301[(8)]);
var inst_31287__$1 = (state_31301[(2)]);
var inst_31288 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31287__$1);
var state_31301__$1 = (function (){var statearr_31310 = state_31301;
(statearr_31310[(8)] = inst_31287__$1);

return statearr_31310;
})();
if(cljs.core.truth_(inst_31288)){
var statearr_31311_31343 = state_31301__$1;
(statearr_31311_31343[(1)] = (13));

} else {
var statearr_31312_31344 = state_31301__$1;
(statearr_31312_31344[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (2))){
var inst_31264 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31265 = (0);
var state_31301__$1 = (function (){var statearr_31313 = state_31301;
(statearr_31313[(7)] = inst_31265);

(statearr_31313[(9)] = inst_31264);

return statearr_31313;
})();
var statearr_31314_31345 = state_31301__$1;
(statearr_31314_31345[(2)] = null);

(statearr_31314_31345[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (11))){
var inst_31265 = (state_31301[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31301,(10),Object,null,(9));
var inst_31274 = chs__$1.call(null,inst_31265);
var inst_31275 = done.call(null,inst_31265);
var inst_31276 = cljs.core.async.take_BANG_.call(null,inst_31274,inst_31275);
var state_31301__$1 = state_31301;
var statearr_31315_31346 = state_31301__$1;
(statearr_31315_31346[(2)] = inst_31276);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31301__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (9))){
var inst_31265 = (state_31301[(7)]);
var inst_31278 = (state_31301[(2)]);
var inst_31279 = (inst_31265 + (1));
var inst_31265__$1 = inst_31279;
var state_31301__$1 = (function (){var statearr_31316 = state_31301;
(statearr_31316[(7)] = inst_31265__$1);

(statearr_31316[(10)] = inst_31278);

return statearr_31316;
})();
var statearr_31317_31347 = state_31301__$1;
(statearr_31317_31347[(2)] = null);

(statearr_31317_31347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (5))){
var inst_31285 = (state_31301[(2)]);
var state_31301__$1 = (function (){var statearr_31318 = state_31301;
(statearr_31318[(11)] = inst_31285);

return statearr_31318;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31301__$1,(12),dchan);
} else {
if((state_val_31302 === (14))){
var inst_31287 = (state_31301[(8)]);
var inst_31292 = cljs.core.apply.call(null,f,inst_31287);
var state_31301__$1 = state_31301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31301__$1,(16),out,inst_31292);
} else {
if((state_val_31302 === (16))){
var inst_31294 = (state_31301[(2)]);
var state_31301__$1 = (function (){var statearr_31319 = state_31301;
(statearr_31319[(12)] = inst_31294);

return statearr_31319;
})();
var statearr_31320_31348 = state_31301__$1;
(statearr_31320_31348[(2)] = null);

(statearr_31320_31348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (10))){
var inst_31269 = (state_31301[(2)]);
var inst_31270 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31301__$1 = (function (){var statearr_31321 = state_31301;
(statearr_31321[(13)] = inst_31269);

return statearr_31321;
})();
var statearr_31322_31349 = state_31301__$1;
(statearr_31322_31349[(2)] = inst_31270);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31301__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (8))){
var inst_31283 = (state_31301[(2)]);
var state_31301__$1 = state_31301;
var statearr_31323_31350 = state_31301__$1;
(statearr_31323_31350[(2)] = inst_31283);

(statearr_31323_31350[(1)] = (5));


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
});})(c__29262__auto___31335,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29150__auto__,c__29262__auto___31335,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29151__auto__ = null;
var cljs$core$async$state_machine__29151__auto____0 = (function (){
var statearr_31327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31327[(0)] = cljs$core$async$state_machine__29151__auto__);

(statearr_31327[(1)] = (1));

return statearr_31327;
});
var cljs$core$async$state_machine__29151__auto____1 = (function (state_31301){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_31301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e31328){if((e31328 instanceof Object)){
var ex__29154__auto__ = e31328;
var statearr_31329_31351 = state_31301;
(statearr_31329_31351[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31352 = state_31301;
state_31301 = G__31352;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
cljs$core$async$state_machine__29151__auto__ = function(state_31301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29151__auto____1.call(this,state_31301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29151__auto____0;
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29151__auto____1;
return cljs$core$async$state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto___31335,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29264__auto__ = (function (){var statearr_31330 = f__29263__auto__.call(null);
(statearr_31330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto___31335);

return statearr_31330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto___31335,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args31354 = [];
var len__27483__auto___31412 = arguments.length;
var i__27484__auto___31413 = (0);
while(true){
if((i__27484__auto___31413 < len__27483__auto___31412)){
args31354.push((arguments[i__27484__auto___31413]));

var G__31414 = (i__27484__auto___31413 + (1));
i__27484__auto___31413 = G__31414;
continue;
} else {
}
break;
}

var G__31356 = args31354.length;
switch (G__31356) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31354.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29262__auto___31416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto___31416,out){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto___31416,out){
return (function (state_31388){
var state_val_31389 = (state_31388[(1)]);
if((state_val_31389 === (7))){
var inst_31367 = (state_31388[(7)]);
var inst_31368 = (state_31388[(8)]);
var inst_31367__$1 = (state_31388[(2)]);
var inst_31368__$1 = cljs.core.nth.call(null,inst_31367__$1,(0),null);
var inst_31369 = cljs.core.nth.call(null,inst_31367__$1,(1),null);
var inst_31370 = (inst_31368__$1 == null);
var state_31388__$1 = (function (){var statearr_31390 = state_31388;
(statearr_31390[(9)] = inst_31369);

(statearr_31390[(7)] = inst_31367__$1);

(statearr_31390[(8)] = inst_31368__$1);

return statearr_31390;
})();
if(cljs.core.truth_(inst_31370)){
var statearr_31391_31417 = state_31388__$1;
(statearr_31391_31417[(1)] = (8));

} else {
var statearr_31392_31418 = state_31388__$1;
(statearr_31392_31418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31389 === (1))){
var inst_31357 = cljs.core.vec.call(null,chs);
var inst_31358 = inst_31357;
var state_31388__$1 = (function (){var statearr_31393 = state_31388;
(statearr_31393[(10)] = inst_31358);

return statearr_31393;
})();
var statearr_31394_31419 = state_31388__$1;
(statearr_31394_31419[(2)] = null);

(statearr_31394_31419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31389 === (4))){
var inst_31358 = (state_31388[(10)]);
var state_31388__$1 = state_31388;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31388__$1,(7),inst_31358);
} else {
if((state_val_31389 === (6))){
var inst_31384 = (state_31388[(2)]);
var state_31388__$1 = state_31388;
var statearr_31395_31420 = state_31388__$1;
(statearr_31395_31420[(2)] = inst_31384);

(statearr_31395_31420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31389 === (3))){
var inst_31386 = (state_31388[(2)]);
var state_31388__$1 = state_31388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31388__$1,inst_31386);
} else {
if((state_val_31389 === (2))){
var inst_31358 = (state_31388[(10)]);
var inst_31360 = cljs.core.count.call(null,inst_31358);
var inst_31361 = (inst_31360 > (0));
var state_31388__$1 = state_31388;
if(cljs.core.truth_(inst_31361)){
var statearr_31397_31421 = state_31388__$1;
(statearr_31397_31421[(1)] = (4));

} else {
var statearr_31398_31422 = state_31388__$1;
(statearr_31398_31422[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31389 === (11))){
var inst_31358 = (state_31388[(10)]);
var inst_31377 = (state_31388[(2)]);
var tmp31396 = inst_31358;
var inst_31358__$1 = tmp31396;
var state_31388__$1 = (function (){var statearr_31399 = state_31388;
(statearr_31399[(11)] = inst_31377);

(statearr_31399[(10)] = inst_31358__$1);

return statearr_31399;
})();
var statearr_31400_31423 = state_31388__$1;
(statearr_31400_31423[(2)] = null);

(statearr_31400_31423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31389 === (9))){
var inst_31368 = (state_31388[(8)]);
var state_31388__$1 = state_31388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31388__$1,(11),out,inst_31368);
} else {
if((state_val_31389 === (5))){
var inst_31382 = cljs.core.async.close_BANG_.call(null,out);
var state_31388__$1 = state_31388;
var statearr_31401_31424 = state_31388__$1;
(statearr_31401_31424[(2)] = inst_31382);

(statearr_31401_31424[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31389 === (10))){
var inst_31380 = (state_31388[(2)]);
var state_31388__$1 = state_31388;
var statearr_31402_31425 = state_31388__$1;
(statearr_31402_31425[(2)] = inst_31380);

(statearr_31402_31425[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31389 === (8))){
var inst_31369 = (state_31388[(9)]);
var inst_31367 = (state_31388[(7)]);
var inst_31368 = (state_31388[(8)]);
var inst_31358 = (state_31388[(10)]);
var inst_31372 = (function (){var cs = inst_31358;
var vec__31363 = inst_31367;
var v = inst_31368;
var c = inst_31369;
return ((function (cs,vec__31363,v,c,inst_31369,inst_31367,inst_31368,inst_31358,state_val_31389,c__29262__auto___31416,out){
return (function (p1__31353_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31353_SHARP_);
});
;})(cs,vec__31363,v,c,inst_31369,inst_31367,inst_31368,inst_31358,state_val_31389,c__29262__auto___31416,out))
})();
var inst_31373 = cljs.core.filterv.call(null,inst_31372,inst_31358);
var inst_31358__$1 = inst_31373;
var state_31388__$1 = (function (){var statearr_31403 = state_31388;
(statearr_31403[(10)] = inst_31358__$1);

return statearr_31403;
})();
var statearr_31404_31426 = state_31388__$1;
(statearr_31404_31426[(2)] = null);

(statearr_31404_31426[(1)] = (2));


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
});})(c__29262__auto___31416,out))
;
return ((function (switch__29150__auto__,c__29262__auto___31416,out){
return (function() {
var cljs$core$async$state_machine__29151__auto__ = null;
var cljs$core$async$state_machine__29151__auto____0 = (function (){
var statearr_31408 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31408[(0)] = cljs$core$async$state_machine__29151__auto__);

(statearr_31408[(1)] = (1));

return statearr_31408;
});
var cljs$core$async$state_machine__29151__auto____1 = (function (state_31388){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_31388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e31409){if((e31409 instanceof Object)){
var ex__29154__auto__ = e31409;
var statearr_31410_31427 = state_31388;
(statearr_31410_31427[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31428 = state_31388;
state_31388 = G__31428;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
cljs$core$async$state_machine__29151__auto__ = function(state_31388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29151__auto____1.call(this,state_31388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29151__auto____0;
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29151__auto____1;
return cljs$core$async$state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto___31416,out))
})();
var state__29264__auto__ = (function (){var statearr_31411 = f__29263__auto__.call(null);
(statearr_31411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto___31416);

return statearr_31411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto___31416,out))
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
var args31429 = [];
var len__27483__auto___31478 = arguments.length;
var i__27484__auto___31479 = (0);
while(true){
if((i__27484__auto___31479 < len__27483__auto___31478)){
args31429.push((arguments[i__27484__auto___31479]));

var G__31480 = (i__27484__auto___31479 + (1));
i__27484__auto___31479 = G__31480;
continue;
} else {
}
break;
}

var G__31431 = args31429.length;
switch (G__31431) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31429.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29262__auto___31482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto___31482,out){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto___31482,out){
return (function (state_31455){
var state_val_31456 = (state_31455[(1)]);
if((state_val_31456 === (7))){
var inst_31437 = (state_31455[(7)]);
var inst_31437__$1 = (state_31455[(2)]);
var inst_31438 = (inst_31437__$1 == null);
var inst_31439 = cljs.core.not.call(null,inst_31438);
var state_31455__$1 = (function (){var statearr_31457 = state_31455;
(statearr_31457[(7)] = inst_31437__$1);

return statearr_31457;
})();
if(inst_31439){
var statearr_31458_31483 = state_31455__$1;
(statearr_31458_31483[(1)] = (8));

} else {
var statearr_31459_31484 = state_31455__$1;
(statearr_31459_31484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (1))){
var inst_31432 = (0);
var state_31455__$1 = (function (){var statearr_31460 = state_31455;
(statearr_31460[(8)] = inst_31432);

return statearr_31460;
})();
var statearr_31461_31485 = state_31455__$1;
(statearr_31461_31485[(2)] = null);

(statearr_31461_31485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (4))){
var state_31455__$1 = state_31455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31455__$1,(7),ch);
} else {
if((state_val_31456 === (6))){
var inst_31450 = (state_31455[(2)]);
var state_31455__$1 = state_31455;
var statearr_31462_31486 = state_31455__$1;
(statearr_31462_31486[(2)] = inst_31450);

(statearr_31462_31486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (3))){
var inst_31452 = (state_31455[(2)]);
var inst_31453 = cljs.core.async.close_BANG_.call(null,out);
var state_31455__$1 = (function (){var statearr_31463 = state_31455;
(statearr_31463[(9)] = inst_31452);

return statearr_31463;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31455__$1,inst_31453);
} else {
if((state_val_31456 === (2))){
var inst_31432 = (state_31455[(8)]);
var inst_31434 = (inst_31432 < n);
var state_31455__$1 = state_31455;
if(cljs.core.truth_(inst_31434)){
var statearr_31464_31487 = state_31455__$1;
(statearr_31464_31487[(1)] = (4));

} else {
var statearr_31465_31488 = state_31455__$1;
(statearr_31465_31488[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (11))){
var inst_31432 = (state_31455[(8)]);
var inst_31442 = (state_31455[(2)]);
var inst_31443 = (inst_31432 + (1));
var inst_31432__$1 = inst_31443;
var state_31455__$1 = (function (){var statearr_31466 = state_31455;
(statearr_31466[(10)] = inst_31442);

(statearr_31466[(8)] = inst_31432__$1);

return statearr_31466;
})();
var statearr_31467_31489 = state_31455__$1;
(statearr_31467_31489[(2)] = null);

(statearr_31467_31489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (9))){
var state_31455__$1 = state_31455;
var statearr_31468_31490 = state_31455__$1;
(statearr_31468_31490[(2)] = null);

(statearr_31468_31490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (5))){
var state_31455__$1 = state_31455;
var statearr_31469_31491 = state_31455__$1;
(statearr_31469_31491[(2)] = null);

(statearr_31469_31491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (10))){
var inst_31447 = (state_31455[(2)]);
var state_31455__$1 = state_31455;
var statearr_31470_31492 = state_31455__$1;
(statearr_31470_31492[(2)] = inst_31447);

(statearr_31470_31492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (8))){
var inst_31437 = (state_31455[(7)]);
var state_31455__$1 = state_31455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31455__$1,(11),out,inst_31437);
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
});})(c__29262__auto___31482,out))
;
return ((function (switch__29150__auto__,c__29262__auto___31482,out){
return (function() {
var cljs$core$async$state_machine__29151__auto__ = null;
var cljs$core$async$state_machine__29151__auto____0 = (function (){
var statearr_31474 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31474[(0)] = cljs$core$async$state_machine__29151__auto__);

(statearr_31474[(1)] = (1));

return statearr_31474;
});
var cljs$core$async$state_machine__29151__auto____1 = (function (state_31455){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_31455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e31475){if((e31475 instanceof Object)){
var ex__29154__auto__ = e31475;
var statearr_31476_31493 = state_31455;
(statearr_31476_31493[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31494 = state_31455;
state_31455 = G__31494;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
cljs$core$async$state_machine__29151__auto__ = function(state_31455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29151__auto____1.call(this,state_31455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29151__auto____0;
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29151__auto____1;
return cljs$core$async$state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto___31482,out))
})();
var state__29264__auto__ = (function (){var statearr_31477 = f__29263__auto__.call(null);
(statearr_31477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto___31482);

return statearr_31477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto___31482,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31502 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31502 = (function (f,ch,meta31503){
this.f = f;
this.ch = ch;
this.meta31503 = meta31503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31504,meta31503__$1){
var self__ = this;
var _31504__$1 = this;
return (new cljs.core.async.t_cljs$core$async31502(self__.f,self__.ch,meta31503__$1));
});

cljs.core.async.t_cljs$core$async31502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31504){
var self__ = this;
var _31504__$1 = this;
return self__.meta31503;
});

cljs.core.async.t_cljs$core$async31502.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31502.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31502.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31502.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31502.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31505 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31505 = (function (f,ch,meta31503,_,fn1,meta31506){
this.f = f;
this.ch = ch;
this.meta31503 = meta31503;
this._ = _;
this.fn1 = fn1;
this.meta31506 = meta31506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31507,meta31506__$1){
var self__ = this;
var _31507__$1 = this;
return (new cljs.core.async.t_cljs$core$async31505(self__.f,self__.ch,self__.meta31503,self__._,self__.fn1,meta31506__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31505.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31507){
var self__ = this;
var _31507__$1 = this;
return self__.meta31506;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31505.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31505.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31505.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31505.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31495_SHARP_){
return f1.call(null,(((p1__31495_SHARP_ == null))?null:self__.f.call(null,p1__31495_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31505.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31503","meta31503",1067112145,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31502","cljs.core.async/t_cljs$core$async31502",1395397456,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31506","meta31506",1048679469,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31505.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31505";

cljs.core.async.t_cljs$core$async31505.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26981__auto__,writer__26982__auto__,opt__26983__auto__){
return cljs.core._write.call(null,writer__26982__auto__,"cljs.core.async/t_cljs$core$async31505");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31505 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31505(f__$1,ch__$1,meta31503__$1,___$2,fn1__$1,meta31506){
return (new cljs.core.async.t_cljs$core$async31505(f__$1,ch__$1,meta31503__$1,___$2,fn1__$1,meta31506));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31505(self__.f,self__.ch,self__.meta31503,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26358__auto__ = ret;
if(cljs.core.truth_(and__26358__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26358__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31502.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31502.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31502.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31503","meta31503",1067112145,null)], null);
});

cljs.core.async.t_cljs$core$async31502.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31502.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31502";

cljs.core.async.t_cljs$core$async31502.cljs$lang$ctorPrWriter = (function (this__26981__auto__,writer__26982__auto__,opt__26983__auto__){
return cljs.core._write.call(null,writer__26982__auto__,"cljs.core.async/t_cljs$core$async31502");
});

cljs.core.async.__GT_t_cljs$core$async31502 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31502(f__$1,ch__$1,meta31503){
return (new cljs.core.async.t_cljs$core$async31502(f__$1,ch__$1,meta31503));
});

}

return (new cljs.core.async.t_cljs$core$async31502(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31511 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31511 = (function (f,ch,meta31512){
this.f = f;
this.ch = ch;
this.meta31512 = meta31512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31513,meta31512__$1){
var self__ = this;
var _31513__$1 = this;
return (new cljs.core.async.t_cljs$core$async31511(self__.f,self__.ch,meta31512__$1));
});

cljs.core.async.t_cljs$core$async31511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31513){
var self__ = this;
var _31513__$1 = this;
return self__.meta31512;
});

cljs.core.async.t_cljs$core$async31511.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31511.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31511.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31511.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31511.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31511.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31512","meta31512",-1036367285,null)], null);
});

cljs.core.async.t_cljs$core$async31511.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31511";

cljs.core.async.t_cljs$core$async31511.cljs$lang$ctorPrWriter = (function (this__26981__auto__,writer__26982__auto__,opt__26983__auto__){
return cljs.core._write.call(null,writer__26982__auto__,"cljs.core.async/t_cljs$core$async31511");
});

cljs.core.async.__GT_t_cljs$core$async31511 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31511(f__$1,ch__$1,meta31512){
return (new cljs.core.async.t_cljs$core$async31511(f__$1,ch__$1,meta31512));
});

}

return (new cljs.core.async.t_cljs$core$async31511(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31517 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31517 = (function (p,ch,meta31518){
this.p = p;
this.ch = ch;
this.meta31518 = meta31518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31519,meta31518__$1){
var self__ = this;
var _31519__$1 = this;
return (new cljs.core.async.t_cljs$core$async31517(self__.p,self__.ch,meta31518__$1));
});

cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31519){
var self__ = this;
var _31519__$1 = this;
return self__.meta31518;
});

cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31518","meta31518",536170084,null)], null);
});

cljs.core.async.t_cljs$core$async31517.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31517";

cljs.core.async.t_cljs$core$async31517.cljs$lang$ctorPrWriter = (function (this__26981__auto__,writer__26982__auto__,opt__26983__auto__){
return cljs.core._write.call(null,writer__26982__auto__,"cljs.core.async/t_cljs$core$async31517");
});

cljs.core.async.__GT_t_cljs$core$async31517 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31517(p__$1,ch__$1,meta31518){
return (new cljs.core.async.t_cljs$core$async31517(p__$1,ch__$1,meta31518));
});

}

return (new cljs.core.async.t_cljs$core$async31517(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args31520 = [];
var len__27483__auto___31564 = arguments.length;
var i__27484__auto___31565 = (0);
while(true){
if((i__27484__auto___31565 < len__27483__auto___31564)){
args31520.push((arguments[i__27484__auto___31565]));

var G__31566 = (i__27484__auto___31565 + (1));
i__27484__auto___31565 = G__31566;
continue;
} else {
}
break;
}

var G__31522 = args31520.length;
switch (G__31522) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31520.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29262__auto___31568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto___31568,out){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto___31568,out){
return (function (state_31543){
var state_val_31544 = (state_31543[(1)]);
if((state_val_31544 === (7))){
var inst_31539 = (state_31543[(2)]);
var state_31543__$1 = state_31543;
var statearr_31545_31569 = state_31543__$1;
(statearr_31545_31569[(2)] = inst_31539);

(statearr_31545_31569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (1))){
var state_31543__$1 = state_31543;
var statearr_31546_31570 = state_31543__$1;
(statearr_31546_31570[(2)] = null);

(statearr_31546_31570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (4))){
var inst_31525 = (state_31543[(7)]);
var inst_31525__$1 = (state_31543[(2)]);
var inst_31526 = (inst_31525__$1 == null);
var state_31543__$1 = (function (){var statearr_31547 = state_31543;
(statearr_31547[(7)] = inst_31525__$1);

return statearr_31547;
})();
if(cljs.core.truth_(inst_31526)){
var statearr_31548_31571 = state_31543__$1;
(statearr_31548_31571[(1)] = (5));

} else {
var statearr_31549_31572 = state_31543__$1;
(statearr_31549_31572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (6))){
var inst_31525 = (state_31543[(7)]);
var inst_31530 = p.call(null,inst_31525);
var state_31543__$1 = state_31543;
if(cljs.core.truth_(inst_31530)){
var statearr_31550_31573 = state_31543__$1;
(statearr_31550_31573[(1)] = (8));

} else {
var statearr_31551_31574 = state_31543__$1;
(statearr_31551_31574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (3))){
var inst_31541 = (state_31543[(2)]);
var state_31543__$1 = state_31543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31543__$1,inst_31541);
} else {
if((state_val_31544 === (2))){
var state_31543__$1 = state_31543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31543__$1,(4),ch);
} else {
if((state_val_31544 === (11))){
var inst_31533 = (state_31543[(2)]);
var state_31543__$1 = state_31543;
var statearr_31552_31575 = state_31543__$1;
(statearr_31552_31575[(2)] = inst_31533);

(statearr_31552_31575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (9))){
var state_31543__$1 = state_31543;
var statearr_31553_31576 = state_31543__$1;
(statearr_31553_31576[(2)] = null);

(statearr_31553_31576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (5))){
var inst_31528 = cljs.core.async.close_BANG_.call(null,out);
var state_31543__$1 = state_31543;
var statearr_31554_31577 = state_31543__$1;
(statearr_31554_31577[(2)] = inst_31528);

(statearr_31554_31577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (10))){
var inst_31536 = (state_31543[(2)]);
var state_31543__$1 = (function (){var statearr_31555 = state_31543;
(statearr_31555[(8)] = inst_31536);

return statearr_31555;
})();
var statearr_31556_31578 = state_31543__$1;
(statearr_31556_31578[(2)] = null);

(statearr_31556_31578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (8))){
var inst_31525 = (state_31543[(7)]);
var state_31543__$1 = state_31543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31543__$1,(11),out,inst_31525);
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
});})(c__29262__auto___31568,out))
;
return ((function (switch__29150__auto__,c__29262__auto___31568,out){
return (function() {
var cljs$core$async$state_machine__29151__auto__ = null;
var cljs$core$async$state_machine__29151__auto____0 = (function (){
var statearr_31560 = [null,null,null,null,null,null,null,null,null];
(statearr_31560[(0)] = cljs$core$async$state_machine__29151__auto__);

(statearr_31560[(1)] = (1));

return statearr_31560;
});
var cljs$core$async$state_machine__29151__auto____1 = (function (state_31543){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_31543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e31561){if((e31561 instanceof Object)){
var ex__29154__auto__ = e31561;
var statearr_31562_31579 = state_31543;
(statearr_31562_31579[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31580 = state_31543;
state_31543 = G__31580;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
cljs$core$async$state_machine__29151__auto__ = function(state_31543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29151__auto____1.call(this,state_31543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29151__auto____0;
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29151__auto____1;
return cljs$core$async$state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto___31568,out))
})();
var state__29264__auto__ = (function (){var statearr_31563 = f__29263__auto__.call(null);
(statearr_31563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto___31568);

return statearr_31563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto___31568,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31581 = [];
var len__27483__auto___31584 = arguments.length;
var i__27484__auto___31585 = (0);
while(true){
if((i__27484__auto___31585 < len__27483__auto___31584)){
args31581.push((arguments[i__27484__auto___31585]));

var G__31586 = (i__27484__auto___31585 + (1));
i__27484__auto___31585 = G__31586;
continue;
} else {
}
break;
}

var G__31583 = args31581.length;
switch (G__31583) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31581.length)].join('')));

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
var c__29262__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto__){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto__){
return (function (state_31753){
var state_val_31754 = (state_31753[(1)]);
if((state_val_31754 === (7))){
var inst_31749 = (state_31753[(2)]);
var state_31753__$1 = state_31753;
var statearr_31755_31796 = state_31753__$1;
(statearr_31755_31796[(2)] = inst_31749);

(statearr_31755_31796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (20))){
var inst_31719 = (state_31753[(7)]);
var inst_31730 = (state_31753[(2)]);
var inst_31731 = cljs.core.next.call(null,inst_31719);
var inst_31705 = inst_31731;
var inst_31706 = null;
var inst_31707 = (0);
var inst_31708 = (0);
var state_31753__$1 = (function (){var statearr_31756 = state_31753;
(statearr_31756[(8)] = inst_31707);

(statearr_31756[(9)] = inst_31708);

(statearr_31756[(10)] = inst_31705);

(statearr_31756[(11)] = inst_31730);

(statearr_31756[(12)] = inst_31706);

return statearr_31756;
})();
var statearr_31757_31797 = state_31753__$1;
(statearr_31757_31797[(2)] = null);

(statearr_31757_31797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (1))){
var state_31753__$1 = state_31753;
var statearr_31758_31798 = state_31753__$1;
(statearr_31758_31798[(2)] = null);

(statearr_31758_31798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (4))){
var inst_31694 = (state_31753[(13)]);
var inst_31694__$1 = (state_31753[(2)]);
var inst_31695 = (inst_31694__$1 == null);
var state_31753__$1 = (function (){var statearr_31759 = state_31753;
(statearr_31759[(13)] = inst_31694__$1);

return statearr_31759;
})();
if(cljs.core.truth_(inst_31695)){
var statearr_31760_31799 = state_31753__$1;
(statearr_31760_31799[(1)] = (5));

} else {
var statearr_31761_31800 = state_31753__$1;
(statearr_31761_31800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (15))){
var state_31753__$1 = state_31753;
var statearr_31765_31801 = state_31753__$1;
(statearr_31765_31801[(2)] = null);

(statearr_31765_31801[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (21))){
var state_31753__$1 = state_31753;
var statearr_31766_31802 = state_31753__$1;
(statearr_31766_31802[(2)] = null);

(statearr_31766_31802[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (13))){
var inst_31707 = (state_31753[(8)]);
var inst_31708 = (state_31753[(9)]);
var inst_31705 = (state_31753[(10)]);
var inst_31706 = (state_31753[(12)]);
var inst_31715 = (state_31753[(2)]);
var inst_31716 = (inst_31708 + (1));
var tmp31762 = inst_31707;
var tmp31763 = inst_31705;
var tmp31764 = inst_31706;
var inst_31705__$1 = tmp31763;
var inst_31706__$1 = tmp31764;
var inst_31707__$1 = tmp31762;
var inst_31708__$1 = inst_31716;
var state_31753__$1 = (function (){var statearr_31767 = state_31753;
(statearr_31767[(8)] = inst_31707__$1);

(statearr_31767[(9)] = inst_31708__$1);

(statearr_31767[(10)] = inst_31705__$1);

(statearr_31767[(14)] = inst_31715);

(statearr_31767[(12)] = inst_31706__$1);

return statearr_31767;
})();
var statearr_31768_31803 = state_31753__$1;
(statearr_31768_31803[(2)] = null);

(statearr_31768_31803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (22))){
var state_31753__$1 = state_31753;
var statearr_31769_31804 = state_31753__$1;
(statearr_31769_31804[(2)] = null);

(statearr_31769_31804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (6))){
var inst_31694 = (state_31753[(13)]);
var inst_31703 = f.call(null,inst_31694);
var inst_31704 = cljs.core.seq.call(null,inst_31703);
var inst_31705 = inst_31704;
var inst_31706 = null;
var inst_31707 = (0);
var inst_31708 = (0);
var state_31753__$1 = (function (){var statearr_31770 = state_31753;
(statearr_31770[(8)] = inst_31707);

(statearr_31770[(9)] = inst_31708);

(statearr_31770[(10)] = inst_31705);

(statearr_31770[(12)] = inst_31706);

return statearr_31770;
})();
var statearr_31771_31805 = state_31753__$1;
(statearr_31771_31805[(2)] = null);

(statearr_31771_31805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (17))){
var inst_31719 = (state_31753[(7)]);
var inst_31723 = cljs.core.chunk_first.call(null,inst_31719);
var inst_31724 = cljs.core.chunk_rest.call(null,inst_31719);
var inst_31725 = cljs.core.count.call(null,inst_31723);
var inst_31705 = inst_31724;
var inst_31706 = inst_31723;
var inst_31707 = inst_31725;
var inst_31708 = (0);
var state_31753__$1 = (function (){var statearr_31772 = state_31753;
(statearr_31772[(8)] = inst_31707);

(statearr_31772[(9)] = inst_31708);

(statearr_31772[(10)] = inst_31705);

(statearr_31772[(12)] = inst_31706);

return statearr_31772;
})();
var statearr_31773_31806 = state_31753__$1;
(statearr_31773_31806[(2)] = null);

(statearr_31773_31806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (3))){
var inst_31751 = (state_31753[(2)]);
var state_31753__$1 = state_31753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31753__$1,inst_31751);
} else {
if((state_val_31754 === (12))){
var inst_31739 = (state_31753[(2)]);
var state_31753__$1 = state_31753;
var statearr_31774_31807 = state_31753__$1;
(statearr_31774_31807[(2)] = inst_31739);

(statearr_31774_31807[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (2))){
var state_31753__$1 = state_31753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31753__$1,(4),in$);
} else {
if((state_val_31754 === (23))){
var inst_31747 = (state_31753[(2)]);
var state_31753__$1 = state_31753;
var statearr_31775_31808 = state_31753__$1;
(statearr_31775_31808[(2)] = inst_31747);

(statearr_31775_31808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (19))){
var inst_31734 = (state_31753[(2)]);
var state_31753__$1 = state_31753;
var statearr_31776_31809 = state_31753__$1;
(statearr_31776_31809[(2)] = inst_31734);

(statearr_31776_31809[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (11))){
var inst_31705 = (state_31753[(10)]);
var inst_31719 = (state_31753[(7)]);
var inst_31719__$1 = cljs.core.seq.call(null,inst_31705);
var state_31753__$1 = (function (){var statearr_31777 = state_31753;
(statearr_31777[(7)] = inst_31719__$1);

return statearr_31777;
})();
if(inst_31719__$1){
var statearr_31778_31810 = state_31753__$1;
(statearr_31778_31810[(1)] = (14));

} else {
var statearr_31779_31811 = state_31753__$1;
(statearr_31779_31811[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (9))){
var inst_31741 = (state_31753[(2)]);
var inst_31742 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31753__$1 = (function (){var statearr_31780 = state_31753;
(statearr_31780[(15)] = inst_31741);

return statearr_31780;
})();
if(cljs.core.truth_(inst_31742)){
var statearr_31781_31812 = state_31753__$1;
(statearr_31781_31812[(1)] = (21));

} else {
var statearr_31782_31813 = state_31753__$1;
(statearr_31782_31813[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (5))){
var inst_31697 = cljs.core.async.close_BANG_.call(null,out);
var state_31753__$1 = state_31753;
var statearr_31783_31814 = state_31753__$1;
(statearr_31783_31814[(2)] = inst_31697);

(statearr_31783_31814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (14))){
var inst_31719 = (state_31753[(7)]);
var inst_31721 = cljs.core.chunked_seq_QMARK_.call(null,inst_31719);
var state_31753__$1 = state_31753;
if(inst_31721){
var statearr_31784_31815 = state_31753__$1;
(statearr_31784_31815[(1)] = (17));

} else {
var statearr_31785_31816 = state_31753__$1;
(statearr_31785_31816[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (16))){
var inst_31737 = (state_31753[(2)]);
var state_31753__$1 = state_31753;
var statearr_31786_31817 = state_31753__$1;
(statearr_31786_31817[(2)] = inst_31737);

(statearr_31786_31817[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (10))){
var inst_31708 = (state_31753[(9)]);
var inst_31706 = (state_31753[(12)]);
var inst_31713 = cljs.core._nth.call(null,inst_31706,inst_31708);
var state_31753__$1 = state_31753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31753__$1,(13),out,inst_31713);
} else {
if((state_val_31754 === (18))){
var inst_31719 = (state_31753[(7)]);
var inst_31728 = cljs.core.first.call(null,inst_31719);
var state_31753__$1 = state_31753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31753__$1,(20),out,inst_31728);
} else {
if((state_val_31754 === (8))){
var inst_31707 = (state_31753[(8)]);
var inst_31708 = (state_31753[(9)]);
var inst_31710 = (inst_31708 < inst_31707);
var inst_31711 = inst_31710;
var state_31753__$1 = state_31753;
if(cljs.core.truth_(inst_31711)){
var statearr_31787_31818 = state_31753__$1;
(statearr_31787_31818[(1)] = (10));

} else {
var statearr_31788_31819 = state_31753__$1;
(statearr_31788_31819[(1)] = (11));

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
});})(c__29262__auto__))
;
return ((function (switch__29150__auto__,c__29262__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29151__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29151__auto____0 = (function (){
var statearr_31792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31792[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29151__auto__);

(statearr_31792[(1)] = (1));

return statearr_31792;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29151__auto____1 = (function (state_31753){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_31753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e31793){if((e31793 instanceof Object)){
var ex__29154__auto__ = e31793;
var statearr_31794_31820 = state_31753;
(statearr_31794_31820[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31821 = state_31753;
state_31753 = G__31821;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29151__auto__ = function(state_31753){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29151__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29151__auto____1.call(this,state_31753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29151__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29151__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto__))
})();
var state__29264__auto__ = (function (){var statearr_31795 = f__29263__auto__.call(null);
(statearr_31795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto__);

return statearr_31795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto__))
);

return c__29262__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31822 = [];
var len__27483__auto___31825 = arguments.length;
var i__27484__auto___31826 = (0);
while(true){
if((i__27484__auto___31826 < len__27483__auto___31825)){
args31822.push((arguments[i__27484__auto___31826]));

var G__31827 = (i__27484__auto___31826 + (1));
i__27484__auto___31826 = G__31827;
continue;
} else {
}
break;
}

var G__31824 = args31822.length;
switch (G__31824) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31822.length)].join('')));

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
var args31829 = [];
var len__27483__auto___31832 = arguments.length;
var i__27484__auto___31833 = (0);
while(true){
if((i__27484__auto___31833 < len__27483__auto___31832)){
args31829.push((arguments[i__27484__auto___31833]));

var G__31834 = (i__27484__auto___31833 + (1));
i__27484__auto___31833 = G__31834;
continue;
} else {
}
break;
}

var G__31831 = args31829.length;
switch (G__31831) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31829.length)].join('')));

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
var args31836 = [];
var len__27483__auto___31887 = arguments.length;
var i__27484__auto___31888 = (0);
while(true){
if((i__27484__auto___31888 < len__27483__auto___31887)){
args31836.push((arguments[i__27484__auto___31888]));

var G__31889 = (i__27484__auto___31888 + (1));
i__27484__auto___31888 = G__31889;
continue;
} else {
}
break;
}

var G__31838 = args31836.length;
switch (G__31838) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31836.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29262__auto___31891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto___31891,out){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto___31891,out){
return (function (state_31862){
var state_val_31863 = (state_31862[(1)]);
if((state_val_31863 === (7))){
var inst_31857 = (state_31862[(2)]);
var state_31862__$1 = state_31862;
var statearr_31864_31892 = state_31862__$1;
(statearr_31864_31892[(2)] = inst_31857);

(statearr_31864_31892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31863 === (1))){
var inst_31839 = null;
var state_31862__$1 = (function (){var statearr_31865 = state_31862;
(statearr_31865[(7)] = inst_31839);

return statearr_31865;
})();
var statearr_31866_31893 = state_31862__$1;
(statearr_31866_31893[(2)] = null);

(statearr_31866_31893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31863 === (4))){
var inst_31842 = (state_31862[(8)]);
var inst_31842__$1 = (state_31862[(2)]);
var inst_31843 = (inst_31842__$1 == null);
var inst_31844 = cljs.core.not.call(null,inst_31843);
var state_31862__$1 = (function (){var statearr_31867 = state_31862;
(statearr_31867[(8)] = inst_31842__$1);

return statearr_31867;
})();
if(inst_31844){
var statearr_31868_31894 = state_31862__$1;
(statearr_31868_31894[(1)] = (5));

} else {
var statearr_31869_31895 = state_31862__$1;
(statearr_31869_31895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31863 === (6))){
var state_31862__$1 = state_31862;
var statearr_31870_31896 = state_31862__$1;
(statearr_31870_31896[(2)] = null);

(statearr_31870_31896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31863 === (3))){
var inst_31859 = (state_31862[(2)]);
var inst_31860 = cljs.core.async.close_BANG_.call(null,out);
var state_31862__$1 = (function (){var statearr_31871 = state_31862;
(statearr_31871[(9)] = inst_31859);

return statearr_31871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31862__$1,inst_31860);
} else {
if((state_val_31863 === (2))){
var state_31862__$1 = state_31862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31862__$1,(4),ch);
} else {
if((state_val_31863 === (11))){
var inst_31842 = (state_31862[(8)]);
var inst_31851 = (state_31862[(2)]);
var inst_31839 = inst_31842;
var state_31862__$1 = (function (){var statearr_31872 = state_31862;
(statearr_31872[(10)] = inst_31851);

(statearr_31872[(7)] = inst_31839);

return statearr_31872;
})();
var statearr_31873_31897 = state_31862__$1;
(statearr_31873_31897[(2)] = null);

(statearr_31873_31897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31863 === (9))){
var inst_31842 = (state_31862[(8)]);
var state_31862__$1 = state_31862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31862__$1,(11),out,inst_31842);
} else {
if((state_val_31863 === (5))){
var inst_31842 = (state_31862[(8)]);
var inst_31839 = (state_31862[(7)]);
var inst_31846 = cljs.core._EQ_.call(null,inst_31842,inst_31839);
var state_31862__$1 = state_31862;
if(inst_31846){
var statearr_31875_31898 = state_31862__$1;
(statearr_31875_31898[(1)] = (8));

} else {
var statearr_31876_31899 = state_31862__$1;
(statearr_31876_31899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31863 === (10))){
var inst_31854 = (state_31862[(2)]);
var state_31862__$1 = state_31862;
var statearr_31877_31900 = state_31862__$1;
(statearr_31877_31900[(2)] = inst_31854);

(statearr_31877_31900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31863 === (8))){
var inst_31839 = (state_31862[(7)]);
var tmp31874 = inst_31839;
var inst_31839__$1 = tmp31874;
var state_31862__$1 = (function (){var statearr_31878 = state_31862;
(statearr_31878[(7)] = inst_31839__$1);

return statearr_31878;
})();
var statearr_31879_31901 = state_31862__$1;
(statearr_31879_31901[(2)] = null);

(statearr_31879_31901[(1)] = (2));


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
});})(c__29262__auto___31891,out))
;
return ((function (switch__29150__auto__,c__29262__auto___31891,out){
return (function() {
var cljs$core$async$state_machine__29151__auto__ = null;
var cljs$core$async$state_machine__29151__auto____0 = (function (){
var statearr_31883 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31883[(0)] = cljs$core$async$state_machine__29151__auto__);

(statearr_31883[(1)] = (1));

return statearr_31883;
});
var cljs$core$async$state_machine__29151__auto____1 = (function (state_31862){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_31862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e31884){if((e31884 instanceof Object)){
var ex__29154__auto__ = e31884;
var statearr_31885_31902 = state_31862;
(statearr_31885_31902[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31903 = state_31862;
state_31862 = G__31903;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
cljs$core$async$state_machine__29151__auto__ = function(state_31862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29151__auto____1.call(this,state_31862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29151__auto____0;
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29151__auto____1;
return cljs$core$async$state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto___31891,out))
})();
var state__29264__auto__ = (function (){var statearr_31886 = f__29263__auto__.call(null);
(statearr_31886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto___31891);

return statearr_31886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto___31891,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31904 = [];
var len__27483__auto___31974 = arguments.length;
var i__27484__auto___31975 = (0);
while(true){
if((i__27484__auto___31975 < len__27483__auto___31974)){
args31904.push((arguments[i__27484__auto___31975]));

var G__31976 = (i__27484__auto___31975 + (1));
i__27484__auto___31975 = G__31976;
continue;
} else {
}
break;
}

var G__31906 = args31904.length;
switch (G__31906) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31904.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29262__auto___31978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto___31978,out){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto___31978,out){
return (function (state_31944){
var state_val_31945 = (state_31944[(1)]);
if((state_val_31945 === (7))){
var inst_31940 = (state_31944[(2)]);
var state_31944__$1 = state_31944;
var statearr_31946_31979 = state_31944__$1;
(statearr_31946_31979[(2)] = inst_31940);

(statearr_31946_31979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (1))){
var inst_31907 = (new Array(n));
var inst_31908 = inst_31907;
var inst_31909 = (0);
var state_31944__$1 = (function (){var statearr_31947 = state_31944;
(statearr_31947[(7)] = inst_31908);

(statearr_31947[(8)] = inst_31909);

return statearr_31947;
})();
var statearr_31948_31980 = state_31944__$1;
(statearr_31948_31980[(2)] = null);

(statearr_31948_31980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (4))){
var inst_31912 = (state_31944[(9)]);
var inst_31912__$1 = (state_31944[(2)]);
var inst_31913 = (inst_31912__$1 == null);
var inst_31914 = cljs.core.not.call(null,inst_31913);
var state_31944__$1 = (function (){var statearr_31949 = state_31944;
(statearr_31949[(9)] = inst_31912__$1);

return statearr_31949;
})();
if(inst_31914){
var statearr_31950_31981 = state_31944__$1;
(statearr_31950_31981[(1)] = (5));

} else {
var statearr_31951_31982 = state_31944__$1;
(statearr_31951_31982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (15))){
var inst_31934 = (state_31944[(2)]);
var state_31944__$1 = state_31944;
var statearr_31952_31983 = state_31944__$1;
(statearr_31952_31983[(2)] = inst_31934);

(statearr_31952_31983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (13))){
var state_31944__$1 = state_31944;
var statearr_31953_31984 = state_31944__$1;
(statearr_31953_31984[(2)] = null);

(statearr_31953_31984[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (6))){
var inst_31909 = (state_31944[(8)]);
var inst_31930 = (inst_31909 > (0));
var state_31944__$1 = state_31944;
if(cljs.core.truth_(inst_31930)){
var statearr_31954_31985 = state_31944__$1;
(statearr_31954_31985[(1)] = (12));

} else {
var statearr_31955_31986 = state_31944__$1;
(statearr_31955_31986[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (3))){
var inst_31942 = (state_31944[(2)]);
var state_31944__$1 = state_31944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31944__$1,inst_31942);
} else {
if((state_val_31945 === (12))){
var inst_31908 = (state_31944[(7)]);
var inst_31932 = cljs.core.vec.call(null,inst_31908);
var state_31944__$1 = state_31944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31944__$1,(15),out,inst_31932);
} else {
if((state_val_31945 === (2))){
var state_31944__$1 = state_31944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31944__$1,(4),ch);
} else {
if((state_val_31945 === (11))){
var inst_31924 = (state_31944[(2)]);
var inst_31925 = (new Array(n));
var inst_31908 = inst_31925;
var inst_31909 = (0);
var state_31944__$1 = (function (){var statearr_31956 = state_31944;
(statearr_31956[(7)] = inst_31908);

(statearr_31956[(8)] = inst_31909);

(statearr_31956[(10)] = inst_31924);

return statearr_31956;
})();
var statearr_31957_31987 = state_31944__$1;
(statearr_31957_31987[(2)] = null);

(statearr_31957_31987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (9))){
var inst_31908 = (state_31944[(7)]);
var inst_31922 = cljs.core.vec.call(null,inst_31908);
var state_31944__$1 = state_31944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31944__$1,(11),out,inst_31922);
} else {
if((state_val_31945 === (5))){
var inst_31912 = (state_31944[(9)]);
var inst_31908 = (state_31944[(7)]);
var inst_31909 = (state_31944[(8)]);
var inst_31917 = (state_31944[(11)]);
var inst_31916 = (inst_31908[inst_31909] = inst_31912);
var inst_31917__$1 = (inst_31909 + (1));
var inst_31918 = (inst_31917__$1 < n);
var state_31944__$1 = (function (){var statearr_31958 = state_31944;
(statearr_31958[(12)] = inst_31916);

(statearr_31958[(11)] = inst_31917__$1);

return statearr_31958;
})();
if(cljs.core.truth_(inst_31918)){
var statearr_31959_31988 = state_31944__$1;
(statearr_31959_31988[(1)] = (8));

} else {
var statearr_31960_31989 = state_31944__$1;
(statearr_31960_31989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (14))){
var inst_31937 = (state_31944[(2)]);
var inst_31938 = cljs.core.async.close_BANG_.call(null,out);
var state_31944__$1 = (function (){var statearr_31962 = state_31944;
(statearr_31962[(13)] = inst_31937);

return statearr_31962;
})();
var statearr_31963_31990 = state_31944__$1;
(statearr_31963_31990[(2)] = inst_31938);

(statearr_31963_31990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (10))){
var inst_31928 = (state_31944[(2)]);
var state_31944__$1 = state_31944;
var statearr_31964_31991 = state_31944__$1;
(statearr_31964_31991[(2)] = inst_31928);

(statearr_31964_31991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (8))){
var inst_31908 = (state_31944[(7)]);
var inst_31917 = (state_31944[(11)]);
var tmp31961 = inst_31908;
var inst_31908__$1 = tmp31961;
var inst_31909 = inst_31917;
var state_31944__$1 = (function (){var statearr_31965 = state_31944;
(statearr_31965[(7)] = inst_31908__$1);

(statearr_31965[(8)] = inst_31909);

return statearr_31965;
})();
var statearr_31966_31992 = state_31944__$1;
(statearr_31966_31992[(2)] = null);

(statearr_31966_31992[(1)] = (2));


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
});})(c__29262__auto___31978,out))
;
return ((function (switch__29150__auto__,c__29262__auto___31978,out){
return (function() {
var cljs$core$async$state_machine__29151__auto__ = null;
var cljs$core$async$state_machine__29151__auto____0 = (function (){
var statearr_31970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31970[(0)] = cljs$core$async$state_machine__29151__auto__);

(statearr_31970[(1)] = (1));

return statearr_31970;
});
var cljs$core$async$state_machine__29151__auto____1 = (function (state_31944){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_31944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e31971){if((e31971 instanceof Object)){
var ex__29154__auto__ = e31971;
var statearr_31972_31993 = state_31944;
(statearr_31972_31993[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31994 = state_31944;
state_31944 = G__31994;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
cljs$core$async$state_machine__29151__auto__ = function(state_31944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29151__auto____1.call(this,state_31944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29151__auto____0;
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29151__auto____1;
return cljs$core$async$state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto___31978,out))
})();
var state__29264__auto__ = (function (){var statearr_31973 = f__29263__auto__.call(null);
(statearr_31973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto___31978);

return statearr_31973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto___31978,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31995 = [];
var len__27483__auto___32069 = arguments.length;
var i__27484__auto___32070 = (0);
while(true){
if((i__27484__auto___32070 < len__27483__auto___32069)){
args31995.push((arguments[i__27484__auto___32070]));

var G__32071 = (i__27484__auto___32070 + (1));
i__27484__auto___32070 = G__32071;
continue;
} else {
}
break;
}

var G__31997 = args31995.length;
switch (G__31997) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31995.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29262__auto___32073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29262__auto___32073,out){
return (function (){
var f__29263__auto__ = (function (){var switch__29150__auto__ = ((function (c__29262__auto___32073,out){
return (function (state_32039){
var state_val_32040 = (state_32039[(1)]);
if((state_val_32040 === (7))){
var inst_32035 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32041_32074 = state_32039__$1;
(statearr_32041_32074[(2)] = inst_32035);

(statearr_32041_32074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (1))){
var inst_31998 = [];
var inst_31999 = inst_31998;
var inst_32000 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32039__$1 = (function (){var statearr_32042 = state_32039;
(statearr_32042[(7)] = inst_32000);

(statearr_32042[(8)] = inst_31999);

return statearr_32042;
})();
var statearr_32043_32075 = state_32039__$1;
(statearr_32043_32075[(2)] = null);

(statearr_32043_32075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (4))){
var inst_32003 = (state_32039[(9)]);
var inst_32003__$1 = (state_32039[(2)]);
var inst_32004 = (inst_32003__$1 == null);
var inst_32005 = cljs.core.not.call(null,inst_32004);
var state_32039__$1 = (function (){var statearr_32044 = state_32039;
(statearr_32044[(9)] = inst_32003__$1);

return statearr_32044;
})();
if(inst_32005){
var statearr_32045_32076 = state_32039__$1;
(statearr_32045_32076[(1)] = (5));

} else {
var statearr_32046_32077 = state_32039__$1;
(statearr_32046_32077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (15))){
var inst_32029 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32047_32078 = state_32039__$1;
(statearr_32047_32078[(2)] = inst_32029);

(statearr_32047_32078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (13))){
var state_32039__$1 = state_32039;
var statearr_32048_32079 = state_32039__$1;
(statearr_32048_32079[(2)] = null);

(statearr_32048_32079[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (6))){
var inst_31999 = (state_32039[(8)]);
var inst_32024 = inst_31999.length;
var inst_32025 = (inst_32024 > (0));
var state_32039__$1 = state_32039;
if(cljs.core.truth_(inst_32025)){
var statearr_32049_32080 = state_32039__$1;
(statearr_32049_32080[(1)] = (12));

} else {
var statearr_32050_32081 = state_32039__$1;
(statearr_32050_32081[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (3))){
var inst_32037 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32039__$1,inst_32037);
} else {
if((state_val_32040 === (12))){
var inst_31999 = (state_32039[(8)]);
var inst_32027 = cljs.core.vec.call(null,inst_31999);
var state_32039__$1 = state_32039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32039__$1,(15),out,inst_32027);
} else {
if((state_val_32040 === (2))){
var state_32039__$1 = state_32039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32039__$1,(4),ch);
} else {
if((state_val_32040 === (11))){
var inst_32003 = (state_32039[(9)]);
var inst_32007 = (state_32039[(10)]);
var inst_32017 = (state_32039[(2)]);
var inst_32018 = [];
var inst_32019 = inst_32018.push(inst_32003);
var inst_31999 = inst_32018;
var inst_32000 = inst_32007;
var state_32039__$1 = (function (){var statearr_32051 = state_32039;
(statearr_32051[(7)] = inst_32000);

(statearr_32051[(8)] = inst_31999);

(statearr_32051[(11)] = inst_32017);

(statearr_32051[(12)] = inst_32019);

return statearr_32051;
})();
var statearr_32052_32082 = state_32039__$1;
(statearr_32052_32082[(2)] = null);

(statearr_32052_32082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (9))){
var inst_31999 = (state_32039[(8)]);
var inst_32015 = cljs.core.vec.call(null,inst_31999);
var state_32039__$1 = state_32039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32039__$1,(11),out,inst_32015);
} else {
if((state_val_32040 === (5))){
var inst_32000 = (state_32039[(7)]);
var inst_32003 = (state_32039[(9)]);
var inst_32007 = (state_32039[(10)]);
var inst_32007__$1 = f.call(null,inst_32003);
var inst_32008 = cljs.core._EQ_.call(null,inst_32007__$1,inst_32000);
var inst_32009 = cljs.core.keyword_identical_QMARK_.call(null,inst_32000,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32010 = (inst_32008) || (inst_32009);
var state_32039__$1 = (function (){var statearr_32053 = state_32039;
(statearr_32053[(10)] = inst_32007__$1);

return statearr_32053;
})();
if(cljs.core.truth_(inst_32010)){
var statearr_32054_32083 = state_32039__$1;
(statearr_32054_32083[(1)] = (8));

} else {
var statearr_32055_32084 = state_32039__$1;
(statearr_32055_32084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (14))){
var inst_32032 = (state_32039[(2)]);
var inst_32033 = cljs.core.async.close_BANG_.call(null,out);
var state_32039__$1 = (function (){var statearr_32057 = state_32039;
(statearr_32057[(13)] = inst_32032);

return statearr_32057;
})();
var statearr_32058_32085 = state_32039__$1;
(statearr_32058_32085[(2)] = inst_32033);

(statearr_32058_32085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (10))){
var inst_32022 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32059_32086 = state_32039__$1;
(statearr_32059_32086[(2)] = inst_32022);

(statearr_32059_32086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (8))){
var inst_31999 = (state_32039[(8)]);
var inst_32003 = (state_32039[(9)]);
var inst_32007 = (state_32039[(10)]);
var inst_32012 = inst_31999.push(inst_32003);
var tmp32056 = inst_31999;
var inst_31999__$1 = tmp32056;
var inst_32000 = inst_32007;
var state_32039__$1 = (function (){var statearr_32060 = state_32039;
(statearr_32060[(7)] = inst_32000);

(statearr_32060[(8)] = inst_31999__$1);

(statearr_32060[(14)] = inst_32012);

return statearr_32060;
})();
var statearr_32061_32087 = state_32039__$1;
(statearr_32061_32087[(2)] = null);

(statearr_32061_32087[(1)] = (2));


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
});})(c__29262__auto___32073,out))
;
return ((function (switch__29150__auto__,c__29262__auto___32073,out){
return (function() {
var cljs$core$async$state_machine__29151__auto__ = null;
var cljs$core$async$state_machine__29151__auto____0 = (function (){
var statearr_32065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32065[(0)] = cljs$core$async$state_machine__29151__auto__);

(statearr_32065[(1)] = (1));

return statearr_32065;
});
var cljs$core$async$state_machine__29151__auto____1 = (function (state_32039){
while(true){
var ret_value__29152__auto__ = (function (){try{while(true){
var result__29153__auto__ = switch__29150__auto__.call(null,state_32039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29153__auto__;
}
break;
}
}catch (e32066){if((e32066 instanceof Object)){
var ex__29154__auto__ = e32066;
var statearr_32067_32088 = state_32039;
(statearr_32067_32088[(5)] = ex__29154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32089 = state_32039;
state_32039 = G__32089;
continue;
} else {
return ret_value__29152__auto__;
}
break;
}
});
cljs$core$async$state_machine__29151__auto__ = function(state_32039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29151__auto____1.call(this,state_32039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29151__auto____0;
cljs$core$async$state_machine__29151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29151__auto____1;
return cljs$core$async$state_machine__29151__auto__;
})()
;})(switch__29150__auto__,c__29262__auto___32073,out))
})();
var state__29264__auto__ = (function (){var statearr_32068 = f__29263__auto__.call(null);
(statearr_32068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29262__auto___32073);

return statearr_32068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29264__auto__);
});})(c__29262__auto___32073,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1492960131385