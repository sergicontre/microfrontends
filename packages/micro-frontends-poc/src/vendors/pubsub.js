var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};function e(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}function r(t){return"function"==typeof t}var n=!1,i={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;n=t},get useDeprecatedSynchronousErrorHandling(){return n}};function o(t){setTimeout(function(){throw t})}var s={closed:!0,next:function(t){},error:function(t){if(i.useDeprecatedSynchronousErrorHandling)throw t;o(t)},complete:function(){}},u=Array.isArray||function(t){return t&&"number"==typeof t.length};function c(t){return null!=t&&"object"==typeof t}var h,l={e:{}};function a(){try{return h.apply(this,arguments)}catch(t){return l.e=t,l}}function p(t){return h=t,a}function f(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}f.prototype=Object.create(Error.prototype);var d=f,b=function(){function t(t){this.closed=!1,this._parent=null,this._parents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}var e;return t.prototype.unsubscribe=function(){var t,e=!1;if(!this.closed){var n=this._parent,i=this._parents,o=this._unsubscribe,s=this._subscriptions;this.closed=!0,this._parent=null,this._parents=null,this._subscriptions=null;for(var h=-1,a=i?i.length:0;n;)n.remove(this),n=++h<a&&i[h]||null;if(r(o))p(o).call(this)===l&&(e=!0,t=t||(l.e instanceof d?y(l.e.errors):[l.e]));if(u(s))for(h=-1,a=s.length;++h<a;){var f=s[h];if(c(f))if(p(f.unsubscribe).call(f)===l){e=!0,t=t||[];var b=l.e;b instanceof d?t=t.concat(y(b.errors)):t.push(b)}}if(e)throw new d(t)}},t.prototype.add=function(e){if(!e||e===t.EMPTY)return t.EMPTY;if(e===this)return this;var r=e;switch(typeof e){case"function":r=new t(e);case"object":if(r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if("function"!=typeof r._addParent){var n=r;(r=new t)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}return(this._subscriptions||(this._subscriptions=[])).push(r),r._addParent(this),r},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var r=e.indexOf(t);-1!==r&&e.splice(r,1)}},t.prototype._addParent=function(t){var e=this._parent,r=this._parents;e&&e!==t?r?-1===r.indexOf(t)&&r.push(t):this._parents=[t]:this._parent=t},t.EMPTY=((e=new t).closed=!0,e),t}();function y(t){return t.reduce(function(t,e){return t.concat(e instanceof d?e.errors:e)},[])}var v="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),_=function(t){function r(e,n,i){var o=t.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,o._parentSubscription=null,arguments.length){case 0:o.destination=s;break;case 1:if(!e){o.destination=s;break}if("object"==typeof e){e instanceof r?(o.syncErrorThrowable=e.syncErrorThrowable,o.destination=e,e.add(o)):(o.syncErrorThrowable=!0,o.destination=new m(o,e));break}default:o.syncErrorThrowable=!0,o.destination=new m(o,e,n,i)}return o}return e(r,t),r.prototype[v]=function(){return this},r.create=function(t,e,n){var i=new r(t,e,n);return i.syncErrorThrowable=!1,i},r.prototype.next=function(t){this.isStopped||this._next(t)},r.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},r.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},r.prototype._unsubscribeAndRecycle=function(){var t=this._parent,e=this._parents;return this._parent=null,this._parents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parent=t,this._parents=e,this._parentSubscription=null,this},r}(b),m=function(t){function n(e,n,i,o){var u,c=t.call(this)||this;c._parentSubscriber=e;var h=c;return r(n)?u=n:n&&(u=n.next,i=n.error,o=n.complete,n!==s&&(r((h=Object.create(n)).unsubscribe)&&c.add(h.unsubscribe.bind(h)),h.unsubscribe=c.unsubscribe.bind(c))),c._context=h,c._next=u,c._error=i,c._complete=o,c}return e(n,t),n.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;i.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},n.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,r=i.useDeprecatedSynchronousErrorHandling;if(this._error)r&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)r?(e.syncErrorValue=t,e.syncErrorThrown=!0):o(t),this.unsubscribe();else{if(this.unsubscribe(),r)throw t;o(t)}}},n.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var r=function(){return t._complete.call(t._context)};i.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,r),this.unsubscribe()):(this.__tryOrUnsub(r),this.unsubscribe())}else this.unsubscribe()}},n.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),i.useDeprecatedSynchronousErrorHandling)throw t;o(t)}},n.prototype.__tryOrSetError=function(t,e,r){if(!i.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,r)}catch(e){return i.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(o(e),!0)}return!1},n.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},n}(_);function w(t){for(;t;){var e=t,r=e.closed,n=e.destination,i=e.isStopped;if(r||i)return!1;t=n&&n instanceof _?n:null}return!0}function x(t,e,r){if(t){if(t instanceof _)return t;if(t[v])return t[v]()}return t||e||r?new _(t,e,r):new _(s)}var S="function"==typeof Symbol&&Symbol.observable||"@@observable";function g(){}function E(t){return t?1===t.length?t[0]:function(e){return t.reduce(function(t,e){return e(t)},e)}:g}var I=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var r=new t;return r.source=this,r.operator=e,r},t.prototype.subscribe=function(t,e,r){var n=this.operator,o=x(t,e,r);if(n?n.call(o,this.source):o.add(this.source||i.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),i.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){i.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),w(t)?t.error(e):console.warn(e)}},t.prototype.forEach=function(t,e){var r=this;return new(e=T(e))(function(e,n){var i;i=r.subscribe(function(e){try{t(e)}catch(t){n(t),i&&i.unsubscribe()}},n,e)})},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[S]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:E(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=T(t))(function(t,r){var n;e.subscribe(function(t){return n=t},function(t){return r(t)},function(){return t(n)})})},t.create=function(e){return new t(e)},t}();function T(t){if(t||(t=i.Promise||Promise),!t)throw new Error("no Promise impl found");return t}function C(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}C.prototype=Object.create(Error.prototype);var N=C,j=function(t){function r(e,r){var n=t.call(this)||this;return n.subject=e,n.subscriber=r,n.closed=!1,n}return e(r,t),r.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,e=t.observers;if(this.subject=null,e&&0!==e.length&&!t.isStopped&&!t.closed){var r=e.indexOf(this.subscriber);-1!==r&&e.splice(r,1)}}},r}(b),A=function(t){function r(e){var r=t.call(this,e)||this;return r.destination=e,r}return e(r,t),r}(_),k=function(t){function r(){var e=t.call(this)||this;return e.observers=[],e.closed=!1,e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return e(r,t),r.prototype[v]=function(){return new A(this)},r.prototype.lift=function(t){var e=new O(this,this);return e.operator=t,e},r.prototype.next=function(t){if(this.closed)throw new N;if(!this.isStopped)for(var e=this.observers,r=e.length,n=e.slice(),i=0;i<r;i++)n[i].next(t)},r.prototype.error=function(t){if(this.closed)throw new N;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var e=this.observers,r=e.length,n=e.slice(),i=0;i<r;i++)n[i].error(t);this.observers.length=0},r.prototype.complete=function(){if(this.closed)throw new N;this.isStopped=!0;for(var t=this.observers,e=t.length,r=t.slice(),n=0;n<e;n++)r[n].complete();this.observers.length=0},r.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},r.prototype._trySubscribe=function(e){if(this.closed)throw new N;return t.prototype._trySubscribe.call(this,e)},r.prototype._subscribe=function(t){if(this.closed)throw new N;return this.hasError?(t.error(this.thrownError),b.EMPTY):this.isStopped?(t.complete(),b.EMPTY):(this.observers.push(t),new j(this,t))},r.prototype.asObservable=function(){var t=new I;return t.source=this,t},r.create=function(t,e){return new O(t,e)},r}(I),O=function(t){function r(e,r){var n=t.call(this)||this;return n.destination=e,n.source=r,n}return e(r,t),r.prototype.next=function(t){var e=this.destination;e&&e.next&&e.next(t)},r.prototype.error=function(t){var e=this.destination;e&&e.error&&this.destination.error(t)},r.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},r.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):b.EMPTY},r}(k);function P(){return function(t){return t.lift(new V(t))}}var V=function(){function t(t){this.connectable=t}return t.prototype.call=function(t,e){var r=this.connectable;r._refCount++;var n=new Y(t,r),i=e.subscribe(n);return n.closed||(n.connection=r.connect()),i},t}(),Y=function(t){function r(e,r){var n=t.call(this,e)||this;return n.connectable=r,n}return e(r,t),r.prototype._unsubscribe=function(){var t=this.connectable;if(t){this.connectable=null;var e=t._refCount;if(e<=0)this.connection=null;else if(t._refCount=e-1,e>1)this.connection=null;else{var r=this.connection,n=t._connection;this.connection=null,!n||r&&n!==r||n.unsubscribe()}}else this.connection=null},r}(_),M=function(t){function r(e,r){var n=t.call(this)||this;return n.source=e,n.subjectFactory=r,n._refCount=0,n._isComplete=!1,n}return e(r,t),r.prototype._subscribe=function(t){return this.getSubject().subscribe(t)},r.prototype.getSubject=function(){var t=this._subject;return t&&!t.isStopped||(this._subject=this.subjectFactory()),this._subject},r.prototype.connect=function(){var t=this._connection;return t||(this._isComplete=!1,(t=this._connection=new b).add(this.source.subscribe(new H(this.getSubject(),this))),t.closed?(this._connection=null,t=b.EMPTY):this._connection=t),t},r.prototype.refCount=function(){return P()(this)},r}(I),F=M.prototype,D={operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:F._subscribe},_isComplete:{value:F._isComplete,writable:!0},getSubject:{value:F.getSubject},connect:{value:F.connect},refCount:{value:F.refCount}},H=function(t){function r(e,r){var n=t.call(this,e)||this;return n.connectable=r,n}return e(r,t),r.prototype._error=function(e){this._unsubscribe(),t.prototype._error.call(this,e)},r.prototype._complete=function(){this.connectable._isComplete=!0,this._unsubscribe(),t.prototype._complete.call(this)},r.prototype._unsubscribe=function(){var t=this.connectable;if(t){this.connectable=null;var e=t._connection;t._refCount=0,t._subject=null,t._connection=null,e&&e.unsubscribe()}},r}(A),R=function(t){function r(e,r){var n=t.call(this,e)||this;return n.connectable=r,n}return e(r,t),r.prototype._unsubscribe=function(){var t=this.connectable;if(t){this.connectable=null;var e=t._refCount;if(e<=0)this.connection=null;else if(t._refCount=e-1,e>1)this.connection=null;else{var r=this.connection,n=t._connection;this.connection=null,!n||r&&n!==r||n.unsubscribe()}}else this.connection=null},r}(_),U=function(t){function r(e,r,n,i,o){var s=t.call(this,e)||this;return s.keySelector=r,s.elementSelector=n,s.durationSelector=i,s.subjectSelector=o,s.groups=null,s.attemptedToUnsubscribe=!1,s.count=0,s}return e(r,t),r.prototype._next=function(t){var e;try{e=this.keySelector(t)}catch(t){return void this.error(t)}this._group(t,e)},r.prototype._group=function(t,e){var r=this.groups;r||(r=this.groups=new Map);var n,i=r.get(e);if(this.elementSelector)try{n=this.elementSelector(t)}catch(t){this.error(t)}else n=t;if(!i){i=this.subjectSelector?this.subjectSelector():new k,r.set(e,i);var o=new W(e,i,this);if(this.destination.next(o),this.durationSelector){var s=void 0;try{s=this.durationSelector(new W(e,i))}catch(t){return void this.error(t)}this.add(s.subscribe(new q(e,i,this)))}}i.closed||i.next(n)},r.prototype._error=function(t){var e=this.groups;e&&(e.forEach(function(e,r){e.error(t)}),e.clear()),this.destination.error(t)},r.prototype._complete=function(){var t=this.groups;t&&(t.forEach(function(t,e){t.complete()}),t.clear()),this.destination.complete()},r.prototype.removeGroup=function(t){this.groups.delete(t)},r.prototype.unsubscribe=function(){this.closed||(this.attemptedToUnsubscribe=!0,0===this.count&&t.prototype.unsubscribe.call(this))},r}(_),q=function(t){function r(e,r,n){var i=t.call(this,r)||this;return i.key=e,i.group=r,i.parent=n,i}return e(r,t),r.prototype._next=function(t){this.complete()},r.prototype._unsubscribe=function(){var t=this.parent,e=this.key;this.key=this.parent=null,t&&t.removeGroup(e)},r}(_),W=function(t){function r(e,r,n){var i=t.call(this)||this;return i.key=e,i.groupSubject=r,i.refCountSubscription=n,i}return e(r,t),r.prototype._subscribe=function(t){var e=new b,r=this.refCountSubscription,n=this.groupSubject;return r&&!r.closed&&e.add(new G(r)),e.add(n.subscribe(t)),e},r}(I),G=function(t){function r(e){var r=t.call(this)||this;return r.parent=e,e.count++,r}return e(r,t),r.prototype.unsubscribe=function(){var e=this.parent;e.closed||this.closed||(t.prototype.unsubscribe.call(this),e.count-=1,0===e.count&&e.attemptedToUnsubscribe&&e.unsubscribe())},r}(b),z=function(t){function r(e){var r=t.call(this)||this;return r._value=e,r}return e(r,t),Object.defineProperty(r.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),r.prototype._subscribe=function(e){var r=t.prototype._subscribe.call(this,e);return r&&!r.closed&&e.next(this._value),r},r.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new N;return this._value},r.prototype.next=function(e){t.prototype.next.call(this,this._value=e)},r}(k),B=function(t){function r(e,r){return t.call(this)||this}return e(r,t),r.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},r}(b),J=function(t){function r(e,r){var n=t.call(this,e,r)||this;return n.scheduler=e,n.work=r,n.pending=!1,n}return e(r,t),r.prototype.schedule=function(t,e){if(void 0===e&&(e=0),this.closed)return this;this.state=t;var r=this.id,n=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(n,r,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(n,this.id,e),this},r.prototype.requestAsyncId=function(t,e,r){return void 0===r&&(r=0),setInterval(t.flush.bind(t,this),r)},r.prototype.recycleAsyncId=function(t,e,r){if(void 0===r&&(r=0),null!==r&&this.delay===r&&!1===this.pending)return e;clearInterval(e)},r.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,e);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},r.prototype._execute=function(t,e){var r=!1,n=void 0;try{this.work(t)}catch(t){r=!0,n=!!t&&t||new Error(t)}if(r)return this.unsubscribe(),n},r.prototype._unsubscribe=function(){var t=this.id,e=this.scheduler,r=e.actions,n=r.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==n&&r.splice(n,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null},r}(B),K=function(t){function r(e,r){var n=t.call(this,e,r)||this;return n.scheduler=e,n.work=r,n}return e(r,t),r.prototype.schedule=function(e,r){return void 0===r&&(r=0),r>0?t.prototype.schedule.call(this,e,r):(this.delay=r,this.state=e,this.scheduler.flush(this),this)},r.prototype.execute=function(e,r){return r>0||this.closed?t.prototype.execute.call(this,e,r):this._execute(e,r)},r.prototype.requestAsyncId=function(e,r,n){return void 0===n&&(n=0),null!==n&&n>0||null===n&&this.delay>0?t.prototype.requestAsyncId.call(this,e,r,n):e.flush(this)},r}(J),L=function(){function t(e,r){void 0===r&&(r=t.now),this.SchedulerAction=e,this.now=r}return t.prototype.schedule=function(t,e,r){return void 0===e&&(e=0),new this.SchedulerAction(this,t).schedule(r,e)},t.now=function(){return Date.now()},t}(),Q=function(t){function r(e,n){void 0===n&&(n=L.now);var i=t.call(this,e,function(){return r.delegate&&r.delegate!==i?r.delegate.now():n()})||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return e(r,t),r.prototype.schedule=function(e,n,i){return void 0===n&&(n=0),r.delegate&&r.delegate!==this?r.delegate.schedule(e,n,i):t.prototype.schedule.call(this,e,n,i)},r.prototype.flush=function(t){var e=this.actions;if(this.active)e.push(t);else{var r;this.active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,r){for(;t=e.shift();)t.unsubscribe();throw r}}},r}(L),X=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return e(r,t),r}(Q),Z=new X(K),$=new I(function(t){return t.complete()});function tt(t){return t?et(t):$}function et(t){return new I(function(e){return t.schedule(function(){return e.complete()})})}function rt(t){return t&&"function"==typeof t.schedule}var nt=function(t){return function(e){for(var r=0,n=t.length;r<n&&!e.closed;r++)e.next(t[r]);e.closed||e.complete()}};function it(t,e){return new I(e?function(r){var n=new b,i=0;return n.add(e.schedule(function(){i!==t.length?(r.next(t[i++]),r.closed||n.add(this.schedule())):r.complete()})),n}:nt(t))}function ot(t){var e=new I(function(e){e.next(t),e.complete()});return e._isScalar=!0,e.value=t,e}function st(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=t[t.length-1];switch(rt(r)?t.pop():r=void 0,t.length){case 0:return tt(r);case 1:return r?it(t,r):ot(t[0]);default:return it(t,r)}}function ut(t,e){return new I(e?function(r){return e.schedule(ct,0,{error:t,subscriber:r})}:function(e){return e.error(t)})}function ct(t){var e=t.error;t.subscriber.error(e)}var ht=function(){function t(t,e,r){this.kind=t,this.value=e,this.error=r,this.hasValue="N"===t}return t.prototype.observe=function(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}},t.prototype.do=function(t,e,r){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return r&&r()}},t.prototype.accept=function(t,e,r){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,r)},t.prototype.toObservable=function(){switch(this.kind){case"N":return st(this.value);case"E":return ut(this.error);case"C":return tt()}throw new Error("unexpected notification kind value")},t.createNext=function(e){return void 0!==e?new t("N",e):t.undefinedValueNotification},t.createError=function(e){return new t("E",void 0,e)},t.createComplete=function(){return t.completeNotification},t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t}(),lt=function(t){function r(e,r,n){void 0===n&&(n=0);var i=t.call(this,e)||this;return i.scheduler=r,i.delay=n,i}return e(r,t),r.dispatch=function(t){var e=t.notification,r=t.destination;e.observe(r),this.unsubscribe()},r.prototype.scheduleMessage=function(t){this.destination.add(this.scheduler.schedule(r.dispatch,this.delay,new at(t,this.destination)))},r.prototype._next=function(t){this.scheduleMessage(ht.createNext(t))},r.prototype._error=function(t){this.scheduleMessage(ht.createError(t)),this.unsubscribe()},r.prototype._complete=function(){this.scheduleMessage(ht.createComplete()),this.unsubscribe()},r}(_),at=function(){return function(t,e){this.notification=t,this.destination=e}}(),pt=function(t){function r(e,r,n){void 0===e&&(e=Number.POSITIVE_INFINITY),void 0===r&&(r=Number.POSITIVE_INFINITY);var i=t.call(this)||this;return i.scheduler=n,i._events=[],i._infiniteTimeWindow=!1,i._bufferSize=e<1?1:e,i._windowTime=r<1?1:r,r===Number.POSITIVE_INFINITY?(i._infiniteTimeWindow=!0,i.next=i.nextInfiniteTimeWindow):i.next=i.nextTimeWindow,i}return e(r,t),r.prototype.nextInfiniteTimeWindow=function(e){var r=this._events;r.push(e),r.length>this._bufferSize&&r.shift(),t.prototype.next.call(this,e)},r.prototype.nextTimeWindow=function(e){this._events.push(new ft(this._getNow(),e)),this._trimBufferThenGetEvents(),t.prototype.next.call(this,e)},r.prototype._subscribe=function(t){var e,r=this._infiniteTimeWindow,n=r?this._events:this._trimBufferThenGetEvents(),i=this.scheduler,o=n.length;if(this.closed)throw new N;if(this.isStopped||this.hasError?e=b.EMPTY:(this.observers.push(t),e=new j(this,t)),i&&t.add(t=new lt(t,i)),r)for(var s=0;s<o&&!t.closed;s++)t.next(n[s]);else for(s=0;s<o&&!t.closed;s++)t.next(n[s].value);return this.hasError?t.error(this.thrownError):this.isStopped&&t.complete(),e},r.prototype._getNow=function(){return(this.scheduler||Z).now()},r.prototype._trimBufferThenGetEvents=function(){for(var t=this._getNow(),e=this._bufferSize,r=this._windowTime,n=this._events,i=n.length,o=0;o<i&&!(t-n[o].time<r);)o++;return i>e&&(o=Math.max(o,i-e)),o>0&&n.splice(0,o),n},r}(k),ft=function(){return function(t,e){this.time=t,this.value=e}}(),dt=function(t){function r(){var e=null!==t&&t.apply(this,arguments)||this;return e.value=null,e.hasNext=!1,e.hasCompleted=!1,e}return e(r,t),r.prototype._subscribe=function(e){return this.hasError?(e.error(this.thrownError),b.EMPTY):this.hasCompleted&&this.hasNext?(e.next(this.value),e.complete(),b.EMPTY):t.prototype._subscribe.call(this,e)},r.prototype.next=function(t){this.hasCompleted||(this.value=t,this.hasNext=!0)},r.prototype.error=function(e){this.hasCompleted||t.prototype.error.call(this,e)},r.prototype.complete=function(){this.hasCompleted=!0,this.hasNext&&t.prototype.next.call(this,this.value),t.prototype.complete.call(this)},r}(k),bt=1,yt={};function vt(t){var e=yt[t];e&&e()}var _t={setImmediate:function(t){var e=bt++;return yt[e]=t,Promise.resolve().then(function(){return vt(e)}),e},clearImmediate:function(t){delete yt[t]}},mt=function(t){function r(e,r){var n=t.call(this,e,r)||this;return n.scheduler=e,n.work=r,n}return e(r,t),r.prototype.requestAsyncId=function(e,r,n){return void 0===n&&(n=0),null!==n&&n>0?t.prototype.requestAsyncId.call(this,e,r,n):(e.actions.push(this),e.scheduled||(e.scheduled=_t.setImmediate(e.flush.bind(e,null))))},r.prototype.recycleAsyncId=function(e,r,n){if(void 0===n&&(n=0),null!==n&&n>0||null===n&&this.delay>0)return t.prototype.recycleAsyncId.call(this,e,r,n);0===e.actions.length&&(_t.clearImmediate(r),e.scheduled=void 0)},r}(J),wt=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return e(r,t),r.prototype.flush=function(t){this.active=!0,this.scheduled=void 0;var e,r=this.actions,n=-1,i=r.length;t=t||r.shift();do{if(e=t.execute(t.state,t.delay))break}while(++n<i&&(t=r.shift()));if(this.active=!1,e){for(;++n<i&&(t=r.shift());)t.unsubscribe();throw e}},r}(Q),xt=new wt(mt),St=new Q(J),gt=function(t){function r(e,r){var n=t.call(this,e,r)||this;return n.scheduler=e,n.work=r,n}return e(r,t),r.prototype.requestAsyncId=function(e,r,n){return void 0===n&&(n=0),null!==n&&n>0?t.prototype.requestAsyncId.call(this,e,r,n):(e.actions.push(this),e.scheduled||(e.scheduled=requestAnimationFrame(function(){return e.flush(null)})))},r.prototype.recycleAsyncId=function(e,r,n){if(void 0===n&&(n=0),null!==n&&n>0||null===n&&this.delay>0)return t.prototype.recycleAsyncId.call(this,e,r,n);0===e.actions.length&&(cancelAnimationFrame(r),e.scheduled=void 0)},r}(J),Et=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return e(r,t),r.prototype.flush=function(t){this.active=!0,this.scheduled=void 0;var e,r=this.actions,n=-1,i=r.length;t=t||r.shift();do{if(e=t.execute(t.state,t.delay))break}while(++n<i&&(t=r.shift()));if(this.active=!1,e){for(;++n<i&&(t=r.shift());)t.unsubscribe();throw e}},r}(Q),It=new Et(gt),Tt=function(t){function r(e,r){void 0===e&&(e=Ct),void 0===r&&(r=Number.POSITIVE_INFINITY);var n=t.call(this,e,function(){return n.frame})||this;return n.maxFrames=r,n.frame=0,n.index=-1,n}return e(r,t),r.prototype.flush=function(){for(var t,e,r=this.actions,n=this.maxFrames;(e=r.shift())&&(this.frame=e.delay)<=n&&!(t=e.execute(e.state,e.delay)););if(t){for(;e=r.shift();)e.unsubscribe();throw t}},r.frameTimeFactor=10,r}(Q),Ct=function(t){function r(e,r,n){void 0===n&&(n=e.index+=1);var i=t.call(this,e,r)||this;return i.scheduler=e,i.work=r,i.index=n,i.active=!0,i.index=e.index=n,i}return e(r,t),r.prototype.schedule=function(e,n){if(void 0===n&&(n=0),!this.id)return t.prototype.schedule.call(this,e,n);this.active=!1;var i=new r(this.scheduler,this.work);return this.add(i),i.schedule(e,n)},r.prototype.requestAsyncId=function(t,e,n){void 0===n&&(n=0),this.delay=t.frame+n;var i=t.actions;return i.push(this),i.sort(r.sortActions),!0},r.prototype.recycleAsyncId=function(t,e,r){void 0===r&&(r=0)},r.prototype._execute=function(e,r){if(!0===this.active)return t.prototype._execute.call(this,e,r)},r.sortActions=function(t,e){return t.delay===e.delay?t.index===e.index?0:t.index>e.index?1:-1:t.delay>e.delay?1:-1},r}(J),Nt=function(t){function r(e,r,n){var i=t.call(this,e)||this;return i.project=r,i.count=0,i.thisArg=n||i,i}return e(r,t),r.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},r}(_),jt=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return e(r,t),r.prototype.notifyNext=function(t,e,r,n,i){this.destination.next(e)},r.prototype.notifyError=function(t,e){this.destination.error(t)},r.prototype.notifyComplete=function(t){this.destination.complete()},r}(_),At=function(t){function r(e,r,n){var i=t.call(this)||this;return i.parent=e,i.outerValue=r,i.outerIndex=n,i.index=0,i}return e(r,t),r.prototype._next=function(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)},r.prototype._error=function(t){this.parent.notifyError(t,this),this.unsubscribe()},r.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},r}(_),kt=function(t){return function(e){return t.then(function(t){e.closed||(e.next(t),e.complete())},function(t){return e.error(t)}).then(null,o),e}};function Ot(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var Pt=Ot(),Vt=function(t){return function(e){for(var r=t[Pt]();;){var n=r.next();if(n.done){e.complete();break}if(e.next(n.value),e.closed)break}return"function"==typeof r.return&&e.add(function(){r.return&&r.return()}),e}},Yt=function(t){return function(e){var r=t[S]();if("function"!=typeof r.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return r.subscribe(e)}},Mt=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function Ft(t){return t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}var Dt=function(t){if(t instanceof I)return function(e){return t._isScalar?(e.next(t.value),void e.complete()):t.subscribe(e)};if(t&&"function"==typeof t[S])return Yt(t);if(Mt(t))return nt(t);if(Ft(t))return kt(t);if(t&&"function"==typeof t[Pt])return Vt(t);var e=c(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+e+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function Ht(t,e,r,n,i){if(void 0===i&&(i=new At(t,r,n)),!i.closed)return Dt(e)(i)}var Rt={},Ut=function(t){function r(e,r){var n=t.call(this,e)||this;return n.resultSelector=r,n.active=0,n.values=[],n.observables=[],n}return e(r,t),r.prototype._next=function(t){this.values.push(Rt),this.observables.push(t)},r.prototype._complete=function(){var t=this.observables,e=t.length;if(0===e)this.destination.complete();else{this.active=e,this.toRespond=e;for(var r=0;r<e;r++){var n=t[r];this.add(Ht(this,n,n,r))}}},r.prototype.notifyComplete=function(t){0==(this.active-=1)&&this.destination.complete()},r.prototype.notifyNext=function(t,e,r,n,i){var o=this.values,s=o[r],u=this.toRespond?s===Rt?--this.toRespond:this.toRespond:0;o[r]=e,0===u&&(this.resultSelector?this._tryResultSelector(o):this.destination.next(o.slice()))},r.prototype._tryResultSelector=function(t){var e;try{e=this.resultSelector.apply(this,t)}catch(t){return void this.destination.error(t)}this.destination.next(e)},r}(jt),qt=function(t){function r(e,r,n){void 0===n&&(n=Number.POSITIVE_INFINITY);var i=t.call(this,e)||this;return i.project=r,i.concurrent=n,i.hasCompleted=!1,i.buffer=[],i.active=0,i.index=0,i}return e(r,t),r.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},r.prototype._tryNext=function(t){var e,r=this.index++;try{e=this.project(t,r)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(e,t,r)},r.prototype._innerSub=function(t,e,r){var n=new At(this,void 0,void 0);this.destination.add(n),Ht(this,t,e,r,n)},r.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},r.prototype.notifyNext=function(t,e,r,n,i){this.destination.next(e)},r.prototype.notifyComplete=function(t){var e=this.buffer;this.remove(t),this.active--,e.length>0?this._next(e.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},r}(jt),Wt=function(t){function r(e,r){var n=t.call(this,e)||this;n.sources=r,n.completed=0,n.haveValues=0;var i=r.length;n.values=new Array(i);for(var o=0;o<i;o++){var s=Ht(n,r[o],null,o);s&&n.add(s)}return n}return e(r,t),r.prototype.notifyNext=function(t,e,r,n,i){this.values[r]=e,i._hasValue||(i._hasValue=!0,this.haveValues++)},r.prototype.notifyComplete=function(t){var e=this.destination,r=this.haveValues,n=this.values,i=n.length;t._hasValue?(this.completed++,this.completed===i&&(r===i&&e.next(n),e.complete())):e.complete()},r}(jt),Gt=new I(g),zt=function(t){function r(e){var r=t.call(this,e)||this;return r.hasFirst=!1,r.observables=[],r.subscriptions=[],r}return e(r,t),r.prototype._next=function(t){this.observables.push(t)},r.prototype._complete=function(){var t=this.observables,e=t.length;if(0===e)this.destination.complete();else{for(var r=0;r<e&&!this.hasFirst;r++){var n=t[r],i=Ht(this,n,n,r);this.subscriptions&&this.subscriptions.push(i),this.add(i)}this.observables=null}},r.prototype.notifyNext=function(t,e,r,n,i){if(!this.hasFirst){this.hasFirst=!0;for(var o=0;o<this.subscriptions.length;o++)if(o!==r){var s=this.subscriptions[o];s.unsubscribe(),this.remove(s)}this.subscriptions=null}this.destination.next(e)},r}(jt),Bt=function(t){function r(e,r,n){void 0===n&&(n=Object.create(null));var i=t.call(this,e)||this;return i.iterators=[],i.active=0,i.resultSelector="function"==typeof r?r:null,i.values=n,i}return e(r,t),r.prototype._next=function(t){var e=this.iterators;u(t)?e.push(new Kt(t)):"function"==typeof t[Pt]?e.push(new Jt(t[Pt]())):e.push(new Lt(this.destination,this,t))},r.prototype._complete=function(){var t=this.iterators,e=t.length;if(this.unsubscribe(),0!==e){this.active=e;for(var r=0;r<e;r++){var n=t[r];if(n.stillUnsubscribed)this.destination.add(n.subscribe(n,r));else this.active--}}else this.destination.complete()},r.prototype.notifyInactive=function(){this.active--,0===this.active&&this.destination.complete()},r.prototype.checkIterators=function(){for(var t=this.iterators,e=t.length,r=this.destination,n=0;n<e;n++){if("function"==typeof(s=t[n]).hasValue&&!s.hasValue())return}var i=!1,o=[];for(n=0;n<e;n++){var s,u=(s=t[n]).next();if(s.hasCompleted()&&(i=!0),u.done)return void r.complete();o.push(u.value)}this.resultSelector?this._tryresultSelector(o):r.next(o),i&&r.complete()},r.prototype._tryresultSelector=function(t){var e;try{e=this.resultSelector.apply(this,t)}catch(t){return void this.destination.error(t)}this.destination.next(e)},r}(_),Jt=function(){function t(t){this.iterator=t,this.nextResult=t.next()}return t.prototype.hasValue=function(){return!0},t.prototype.next=function(){var t=this.nextResult;return this.nextResult=this.iterator.next(),t},t.prototype.hasCompleted=function(){var t=this.nextResult;return t&&t.done},t}(),Kt=function(){function t(t){this.array=t,this.index=0,this.length=0,this.length=t.length}return t.prototype[Pt]=function(){return this},t.prototype.next=function(t){var e=this.index++,r=this.array;return e<this.length?{value:r[e],done:!1}:{value:null,done:!0}},t.prototype.hasValue=function(){return this.array.length>this.index},t.prototype.hasCompleted=function(){return this.array.length===this.index},t}(),Lt=function(t){function r(e,r,n){var i=t.call(this,e)||this;return i.parent=r,i.observable=n,i.stillUnsubscribed=!0,i.buffer=[],i.isComplete=!1,i}return e(r,t),r.prototype[Pt]=function(){return this},r.prototype.next=function(){var t=this.buffer;return 0===t.length&&this.isComplete?{value:null,done:!0}:{value:t.shift(),done:!1}},r.prototype.hasValue=function(){return this.buffer.length>0},r.prototype.hasCompleted=function(){return 0===this.buffer.length&&this.isComplete},r.prototype.notifyComplete=function(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()},r.prototype.notifyNext=function(t,e,r,n,i){this.buffer.push(e),this.parent.checkIterators()},r.prototype.subscribe=function(t,e){return Ht(this,this.observable,this,e)},r}(jt);class Qt extends pt{constructor(t){super(t),this.on=super.subscribe}}class Xt{constructor(t){this.channels=[]}subscribe(t){let e=this.channels[t];return null==e&&(this.channels[t]=e=new Qt(1)),e}publish(t,e){if(t){let r=this.channels[t];null==r&&(r=this.subscribe(t)),r.next(e)}else console.error("You must define a name of a channel to publish a value")}}window.PubSub=new Xt;