(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function (t, e, n) {
      t.exports = n("zUnb");
    },
    "9AGB": function (t, e, n) {
      "use strict";
      var r = n("yoF8");
      function s(t) {
        return 0 === t.length
          ? r.identity
          : 1 === t.length
          ? t[0]
          : function (e) {
              return t.reduce(function (t, e) {
                return e(t);
              }, e);
            };
      }
      (e.pipe = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return s(t);
      }),
        (e.pipeFromArray = s);
    },
    FWf1: function (t, e, n) {
      "use strict";
      var r =
          (this && this.__extends) ||
          (function () {
            var t = function (e, n) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(e, n);
            };
            return function (e, n) {
              function r() {
                this.constructor = e;
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
        s = n("pshJ"),
        i = n("GiSu"),
        o = n("zB/H"),
        a = n("p//D"),
        l = n("n3uD"),
        c = n("MkmW"),
        u = (function (t) {
          function e(n, r, s) {
            var o = t.call(this) || this;
            switch (
              ((o.syncErrorValue = null),
              (o.syncErrorThrown = !1),
              (o.syncErrorThrowable = !1),
              (o.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                o.destination = i.empty;
                break;
              case 1:
                if (!n) {
                  o.destination = i.empty;
                  break;
                }
                if ("object" == typeof n) {
                  n instanceof e
                    ? ((o.syncErrorThrowable = n.syncErrorThrowable),
                      (o.destination = n),
                      n.add(o))
                    : ((o.syncErrorThrowable = !0),
                      (o.destination = new h(o, n)));
                  break;
                }
              default:
                (o.syncErrorThrowable = !0),
                  (o.destination = new h(o, n, r, s));
            }
            return o;
          }
          return (
            r(e, t),
            (e.prototype[a.rxSubscriber] = function () {
              return this;
            }),
            (e.create = function (t, n, r) {
              var s = new e(t, n, r);
              return (s.syncErrorThrowable = !1), s;
            }),
            (e.prototype.next = function (t) {
              this.isStopped || this._next(t);
            }),
            (e.prototype.error = function (t) {
              this.isStopped || ((this.isStopped = !0), this._error(t));
            }),
            (e.prototype.complete = function () {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (e.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
            }),
            (e.prototype._next = function (t) {
              this.destination.next(t);
            }),
            (e.prototype._error = function (t) {
              this.destination.error(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.destination.complete(), this.unsubscribe();
            }),
            (e.prototype._unsubscribeAndRecycle = function () {
              var t = this._parentOrParents;
              return (
                (this._parentOrParents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parentOrParents = t),
                this
              );
            }),
            e
          );
        })(o.Subscription);
      e.Subscriber = u;
      var h = (function (t) {
        function e(e, n, r, o) {
          var a,
            l = t.call(this) || this;
          l._parentSubscriber = e;
          var c = l;
          return (
            s.isFunction(n)
              ? (a = n)
              : n &&
                ((a = n.next),
                (r = n.error),
                (o = n.complete),
                n !== i.empty &&
                  ((c = Object.create(n)),
                  s.isFunction(c.unsubscribe) && l.add(c.unsubscribe.bind(c)),
                  (c.unsubscribe = l.unsubscribe.bind(l)))),
            (l._context = c),
            (l._next = a),
            (l._error = r),
            (l._complete = o),
            l
          );
        }
        return (
          r(e, t),
          (e.prototype.next = function (t) {
            if (!this.isStopped && this._next) {
              var e = this._parentSubscriber;
              l.config.useDeprecatedSynchronousErrorHandling &&
              e.syncErrorThrowable
                ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
                : this.__tryOrUnsub(this._next, t);
            }
          }),
          (e.prototype.error = function (t) {
            if (!this.isStopped) {
              var e = this._parentSubscriber,
                n = l.config.useDeprecatedSynchronousErrorHandling;
              if (this._error)
                n && e.syncErrorThrowable
                  ? (this.__tryOrSetError(e, this._error, t),
                    this.unsubscribe())
                  : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
              else if (e.syncErrorThrowable)
                n
                  ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0))
                  : c.hostReportError(t),
                  this.unsubscribe();
              else {
                if ((this.unsubscribe(), n)) throw t;
                c.hostReportError(t);
              }
            }
          }),
          (e.prototype.complete = function () {
            var t = this;
            if (!this.isStopped) {
              var e = this._parentSubscriber;
              if (this._complete) {
                var n = function () {
                  return t._complete.call(t._context);
                };
                l.config.useDeprecatedSynchronousErrorHandling &&
                e.syncErrorThrowable
                  ? (this.__tryOrSetError(e, n), this.unsubscribe())
                  : (this.__tryOrUnsub(n), this.unsubscribe());
              } else this.unsubscribe();
            }
          }),
          (e.prototype.__tryOrUnsub = function (t, e) {
            try {
              t.call(this._context, e);
            } catch (n) {
              if (
                (this.unsubscribe(),
                l.config.useDeprecatedSynchronousErrorHandling)
              )
                throw n;
              c.hostReportError(n);
            }
          }),
          (e.prototype.__tryOrSetError = function (t, e, n) {
            if (!l.config.useDeprecatedSynchronousErrorHandling)
              throw new Error("bad call");
            try {
              e.call(this._context, n);
            } catch (r) {
              return l.config.useDeprecatedSynchronousErrorHandling
                ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
                : (c.hostReportError(r), !0);
            }
            return !1;
          }),
          (e.prototype._unsubscribe = function () {
            var t = this._parentSubscriber;
            (this._context = null),
              (this._parentSubscriber = null),
              t.unsubscribe();
          }),
          e
        );
      })(u);
      e.SafeSubscriber = h;
    },
    FiyT: function (t, e, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      e.SubjectSubscription = (function (t) {
        function e(e, n) {
          var r = t.call(this) || this;
          return (r.subject = e), (r.subscriber = n), (r.closed = !1), r;
        }
        return (
          r(e, t),
          (e.prototype.unsubscribe = function () {
            if (!this.closed) {
              this.closed = !0;
              var t = this.subject,
                e = t.observers;
              if (
                ((this.subject = null),
                e && 0 !== e.length && !t.isStopped && !t.closed)
              ) {
                var n = e.indexOf(this.subscriber);
                -1 !== n && e.splice(n, 1);
              }
            }
          }),
          e
        );
      })(n("zB/H").Subscription);
    },
    GMZp: function (t, e, n) {
      "use strict";
      e.isObject = function (t) {
        return null !== t && "object" == typeof t;
      };
    },
    GiSu: function (t, e, n) {
      "use strict";
      var r = n("n3uD"),
        s = n("MkmW");
      e.empty = {
        closed: !0,
        next: function (t) {},
        error: function (t) {
          if (r.config.useDeprecatedSynchronousErrorHandling) throw t;
          s.hostReportError(t);
        },
        complete: function () {},
      };
    },
    LBXl: function (t, e, n) {
      "use strict";
      e.UnsubscriptionError = (function () {
        function t(t) {
          return (
            Error.call(this),
            (this.message = t
              ? t.length +
                " errors occurred during unsubscription:\n" +
                t
                  .map(function (t, e) {
                    return e + 1 + ") " + t.toString();
                  })
                  .join("\n  ")
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = t),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
    },
    MkmW: function (t, e, n) {
      "use strict";
      e.hostReportError = function (t) {
        setTimeout(function () {
          throw t;
        }, 0);
      };
    },
    Mxlh: function (t, e, n) {
      "use strict";
      e.ObjectUnsubscribedError = (function () {
        function t() {
          return (
            Error.call(this),
            (this.message = "object unsubscribed"),
            (this.name = "ObjectUnsubscribedError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
    },
    Q1FS: function (t, e, n) {
      "use strict";
      var r = n("yx2s"),
        s = n("Xwq/"),
        i = n("zfKp"),
        o = n("9AGB"),
        a = n("n3uD");
      function l(t) {
        if ((t || (t = a.config.Promise || Promise), !t))
          throw new Error("no Promise impl found");
        return t;
      }
      e.Observable = (function () {
        function t(t) {
          (this._isScalar = !1), t && (this._subscribe = t);
        }
        return (
          (t.prototype.lift = function (e) {
            var n = new t();
            return (n.source = this), (n.operator = e), n;
          }),
          (t.prototype.subscribe = function (t, e, n) {
            var r = this.operator,
              i = s.toSubscriber(t, e, n);
            if (
              (i.add(
                r
                  ? r.call(i, this.source)
                  : this.source ||
                    (a.config.useDeprecatedSynchronousErrorHandling &&
                      !i.syncErrorThrowable)
                  ? this._subscribe(i)
                  : this._trySubscribe(i)
              ),
              a.config.useDeprecatedSynchronousErrorHandling &&
                i.syncErrorThrowable &&
                ((i.syncErrorThrowable = !1), i.syncErrorThrown))
            )
              throw i.syncErrorValue;
            return i;
          }),
          (t.prototype._trySubscribe = function (t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              a.config.useDeprecatedSynchronousErrorHandling &&
                ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                r.canReportError(t) ? t.error(e) : console.warn(e);
            }
          }),
          (t.prototype.forEach = function (t, e) {
            var n = this;
            return new (e = l(e))(function (e, r) {
              var s;
              s = n.subscribe(
                function (e) {
                  try {
                    t(e);
                  } catch (n) {
                    r(n), s && s.unsubscribe();
                  }
                },
                r,
                e
              );
            });
          }),
          (t.prototype._subscribe = function (t) {
            var e = this.source;
            return e && e.subscribe(t);
          }),
          (t.prototype[i.observable] = function () {
            return this;
          }),
          (t.prototype.pipe = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            return 0 === t.length ? this : o.pipeFromArray(t)(this);
          }),
          (t.prototype.toPromise = function (t) {
            var e = this;
            return new (t = l(t))(function (t, n) {
              var r;
              e.subscribe(
                function (t) {
                  return (r = t);
                },
                function (t) {
                  return n(t);
                },
                function () {
                  return t(r);
                }
              );
            });
          }),
          (t.create = function (e) {
            return new t(e);
          }),
          t
        );
      })();
    },
    "Xwq/": function (t, e, n) {
      "use strict";
      var r = n("FWf1"),
        s = n("p//D"),
        i = n("GiSu");
      e.toSubscriber = function (t, e, n) {
        if (t) {
          if (t instanceof r.Subscriber) return t;
          if (t[s.rxSubscriber]) return t[s.rxSubscriber]();
        }
        return t || e || n
          ? new r.Subscriber(t, e, n)
          : new r.Subscriber(i.empty);
      };
    },
    ds6q: function (t, e, n) {
      "use strict";
      var r =
          (this && this.__extends) ||
          (function () {
            var t = function (e, n) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(e, n);
            };
            return function (e, n) {
              function r() {
                this.constructor = e;
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
        s = n("Q1FS"),
        i = n("FWf1"),
        o = n("zB/H"),
        a = n("Mxlh"),
        l = n("FiyT"),
        c = n("p//D"),
        u = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n.destination = e), n;
          }
          return r(e, t), e;
        })(i.Subscriber);
      e.SubjectSubscriber = u;
      var h = (function (t) {
        function e() {
          var e = t.call(this) || this;
          return (
            (e.observers = []),
            (e.closed = !1),
            (e.isStopped = !1),
            (e.hasError = !1),
            (e.thrownError = null),
            e
          );
        }
        return (
          r(e, t),
          (e.prototype[c.rxSubscriber] = function () {
            return new u(this);
          }),
          (e.prototype.lift = function (t) {
            var e = new d(this, this);
            return (e.operator = t), e;
          }),
          (e.prototype.next = function (t) {
            if (this.closed) throw new a.ObjectUnsubscribedError();
            if (!this.isStopped)
              for (
                var e = this.observers, n = e.length, r = e.slice(), s = 0;
                s < n;
                s++
              )
                r[s].next(t);
          }),
          (e.prototype.error = function (t) {
            if (this.closed) throw new a.ObjectUnsubscribedError();
            (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
            for (
              var e = this.observers, n = e.length, r = e.slice(), s = 0;
              s < n;
              s++
            )
              r[s].error(t);
            this.observers.length = 0;
          }),
          (e.prototype.complete = function () {
            if (this.closed) throw new a.ObjectUnsubscribedError();
            this.isStopped = !0;
            for (
              var t = this.observers, e = t.length, n = t.slice(), r = 0;
              r < e;
              r++
            )
              n[r].complete();
            this.observers.length = 0;
          }),
          (e.prototype.unsubscribe = function () {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }),
          (e.prototype._trySubscribe = function (e) {
            if (this.closed) throw new a.ObjectUnsubscribedError();
            return t.prototype._trySubscribe.call(this, e);
          }),
          (e.prototype._subscribe = function (t) {
            if (this.closed) throw new a.ObjectUnsubscribedError();
            return this.hasError
              ? (t.error(this.thrownError), o.Subscription.EMPTY)
              : this.isStopped
              ? (t.complete(), o.Subscription.EMPTY)
              : (this.observers.push(t), new l.SubjectSubscription(this, t));
          }),
          (e.prototype.asObservable = function () {
            var t = new s.Observable();
            return (t.source = this), t;
          }),
          (e.create = function (t, e) {
            return new d(t, e);
          }),
          e
        );
      })(s.Observable);
      e.Subject = h;
      var d = (function (t) {
        function e(e, n) {
          var r = t.call(this) || this;
          return (r.destination = e), (r.source = n), r;
        }
        return (
          r(e, t),
          (e.prototype.next = function (t) {
            var e = this.destination;
            e && e.next && e.next(t);
          }),
          (e.prototype.error = function (t) {
            var e = this.destination;
            e && e.error && this.destination.error(t);
          }),
          (e.prototype.complete = function () {
            var t = this.destination;
            t && t.complete && this.destination.complete();
          }),
          (e.prototype._subscribe = function (t) {
            return this.source
              ? this.source.subscribe(t)
              : o.Subscription.EMPTY;
          }),
          e
        );
      })(h);
      e.AnonymousSubject = d;
    },
    mbIT: function (t, e, n) {
      "use strict";
      e.isArray = (function () {
        return (
          Array.isArray ||
          function (t) {
            return t && "number" == typeof t.length;
          }
        );
      })();
    },
    n3uD: function (t, e, n) {
      "use strict";
      var r = !1;
      e.config = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(t) {
          if (t) {
            var e = new Error();
            console.warn(
              "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                e.stack
            );
          } else
            r &&
              console.log(
                "RxJS: Back to a better error behavior. Thank you. <3"
              );
          r = t;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return r;
        },
      };
    },
    "p//D": function (t, e, n) {
      "use strict";
      (e.rxSubscriber = (function () {
        return "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random();
      })()),
        (e.$$rxSubscriber = e.rxSubscriber);
    },
    pshJ: function (t, e, n) {
      "use strict";
      e.isFunction = function (t) {
        return "function" == typeof t;
      };
    },
    vLqr: function (t, e, n) {
      "use strict";
      var r = n("Q1FS");
      function s(t) {
        t.subscriber.error(t.error);
      }
      e.throwError = function (t, e) {
        return new r.Observable(
          e
            ? function (n) {
                return e.schedule(s, 0, { error: t, subscriber: n });
              }
            : function (e) {
                return e.error(t);
              }
        );
      };
    },
    yoF8: function (t, e, n) {
      "use strict";
      e.identity = function (t) {
        return t;
      };
    },
    yx2s: function (t, e, n) {
      "use strict";
      var r = n("FWf1");
      e.canReportError = function (t) {
        for (; t; ) {
          var e = t.destination;
          if (t.closed || t.isStopped) return !1;
          t = e && e instanceof r.Subscriber ? e : null;
        }
        return !0;
      };
    },
    "zB/H": function (t, e, n) {
      "use strict";
      var r = n("mbIT"),
        s = n("GMZp"),
        i = n("pshJ"),
        o = n("LBXl");
      function a(t) {
        return t.reduce(function (t, e) {
          return t.concat(e instanceof o.UnsubscriptionError ? e.errors : e);
        }, []);
      }
      e.Subscription = (function () {
        function t(t) {
          (this.closed = !1),
            (this._parentOrParents = null),
            (this._subscriptions = null),
            t && (this._unsubscribe = t);
        }
        var e;
        return (
          (t.prototype.unsubscribe = function () {
            var e;
            if (!this.closed) {
              var n = this._parentOrParents,
                l = this._unsubscribe,
                c = this._subscriptions;
              if (
                ((this.closed = !0),
                (this._parentOrParents = null),
                (this._subscriptions = null),
                n instanceof t)
              )
                n.remove(this);
              else if (null !== n)
                for (var u = 0; u < n.length; ++u) n[u].remove(this);
              if (i.isFunction(l))
                try {
                  l.call(this);
                } catch (p) {
                  e = p instanceof o.UnsubscriptionError ? a(p.errors) : [p];
                }
              if (r.isArray(c)) {
                u = -1;
                for (var h = c.length; ++u < h; ) {
                  var d = c[u];
                  if (s.isObject(d))
                    try {
                      d.unsubscribe();
                    } catch (p) {
                      (e = e || []),
                        p instanceof o.UnsubscriptionError
                          ? (e = e.concat(a(p.errors)))
                          : e.push(p);
                    }
                }
              }
              if (e) throw new o.UnsubscriptionError(e);
            }
          }),
          (t.prototype.add = function (e) {
            var n = e;
            if (!e) return t.EMPTY;
            switch (typeof e) {
              case "function":
                n = new t(e);
              case "object":
                if (
                  n === this ||
                  n.closed ||
                  "function" != typeof n.unsubscribe
                )
                  return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof t)) {
                  var r = n;
                  (n = new t())._subscriptions = [r];
                }
                break;
              default:
                throw new Error(
                  "unrecognized teardown " + e + " added to Subscription."
                );
            }
            var s = n._parentOrParents;
            if (null === s) n._parentOrParents = this;
            else if (s instanceof t) {
              if (s === this) return n;
              n._parentOrParents = [s, this];
            } else {
              if (-1 !== s.indexOf(this)) return n;
              s.push(this);
            }
            var i = this._subscriptions;
            return null === i ? (this._subscriptions = [n]) : i.push(n), n;
          }),
          (t.prototype.remove = function (t) {
            var e = this._subscriptions;
            if (e) {
              var n = e.indexOf(t);
              -1 !== n && e.splice(n, 1);
            }
          }),
          (t.EMPTY = (((e = new t()).closed = !0), e)),
          t
        );
      })();
    },
    zUnb: function (t, e, n) {
      "use strict";
      function r(t) {
        return "function" == typeof t;
      }
      n.r(e);
      let s = !1;
      const i = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(t) {
          if (t) {
            const t = new Error();
            console.warn(
              "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                t.stack
            );
          } else
            s &&
              console.log(
                "RxJS: Back to a better error behavior. Thank you. <3"
              );
          s = t;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return s;
        },
      };
      function o(t) {
        setTimeout(() => {
          throw t;
        }, 0);
      }
      const a = {
          closed: !0,
          next(t) {},
          error(t) {
            if (i.useDeprecatedSynchronousErrorHandling) throw t;
            o(t);
          },
          complete() {},
        },
        l = (() =>
          Array.isArray || ((t) => t && "number" == typeof t.length))();
      function c(t) {
        return null !== t && "object" == typeof t;
      }
      const u = (() => {
        function t(t) {
          return (
            Error.call(this),
            (this.message = t
              ? `${t.length} errors occurred during unsubscription:\n${t
                  .map((t, e) => `${e + 1}) ${t.toString()}`)
                  .join("\n  ")}`
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = t),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      let h = (() => {
        class t {
          constructor(t) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && (this._unsubscribe = t);
          }
          unsubscribe() {
            let e;
            if (this.closed) return;
            let {
              _parentOrParents: n,
              _unsubscribe: s,
              _subscriptions: i,
            } = this;
            if (
              ((this.closed = !0),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              n instanceof t)
            )
              n.remove(this);
            else if (null !== n)
              for (let t = 0; t < n.length; ++t) n[t].remove(this);
            if (r(s))
              try {
                s.call(this);
              } catch (o) {
                e = o instanceof u ? d(o.errors) : [o];
              }
            if (l(i)) {
              let t = -1,
                n = i.length;
              for (; ++t < n; ) {
                const n = i[t];
                if (c(n))
                  try {
                    n.unsubscribe();
                  } catch (o) {
                    (e = e || []),
                      o instanceof u ? (e = e.concat(d(o.errors))) : e.push(o);
                  }
              }
            }
            if (e) throw new u(e);
          }
          add(e) {
            let n = e;
            if (!e) return t.EMPTY;
            switch (typeof e) {
              case "function":
                n = new t(e);
              case "object":
                if (
                  n === this ||
                  n.closed ||
                  "function" != typeof n.unsubscribe
                )
                  return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof t)) {
                  const e = n;
                  (n = new t()), (n._subscriptions = [e]);
                }
                break;
              default:
                throw new Error(
                  "unrecognized teardown " + e + " added to Subscription."
                );
            }
            let { _parentOrParents: r } = n;
            if (null === r) n._parentOrParents = this;
            else if (r instanceof t) {
              if (r === this) return n;
              n._parentOrParents = [r, this];
            } else {
              if (-1 !== r.indexOf(this)) return n;
              r.push(this);
            }
            const s = this._subscriptions;
            return null === s ? (this._subscriptions = [n]) : s.push(n), n;
          }
          remove(t) {
            const e = this._subscriptions;
            if (e) {
              const n = e.indexOf(t);
              -1 !== n && e.splice(n, 1);
            }
          }
        }
        return (
          (t.EMPTY = (function (t) {
            return (t.closed = !0), t;
          })(new t())),
          t
        );
      })();
      function d(t) {
        return t.reduce((t, e) => t.concat(e instanceof u ? e.errors : e), []);
      }
      const p = (() =>
        "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random())();
      class f extends h {
        constructor(t, e, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = a;
              break;
            case 1:
              if (!t) {
                this.destination = a;
                break;
              }
              if ("object" == typeof t) {
                t instanceof f
                  ? ((this.syncErrorThrowable = t.syncErrorThrowable),
                    (this.destination = t),
                    t.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new g(this, t)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new g(this, t, e, n));
          }
        }
        [p]() {
          return this;
        }
        static create(t, e, n) {
          const r = new f(t, e, n);
          return (r.syncErrorThrowable = !1), r;
        }
        next(t) {
          this.isStopped || this._next(t);
        }
        error(t) {
          this.isStopped || ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(t) {
          this.destination.next(t);
        }
        _error(t) {
          this.destination.error(t), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: t } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = t),
            this
          );
        }
      }
      class g extends f {
        constructor(t, e, n, s) {
          let i;
          super(), (this._parentSubscriber = t);
          let o = this;
          r(e)
            ? (i = e)
            : e &&
              ((i = e.next),
              (n = e.error),
              (s = e.complete),
              e !== a &&
                ((o = Object.create(e)),
                r(o.unsubscribe) && this.add(o.unsubscribe.bind(o)),
                (o.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = o),
            (this._next = i),
            (this._error = n),
            (this._complete = s);
        }
        next(t) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: e } = this;
            i.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
              ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, t);
          }
        }
        error(t) {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this,
              { useDeprecatedSynchronousErrorHandling: n } = i;
            if (this._error)
              n && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
            else if (e.syncErrorThrowable)
              n ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : o(t),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw t;
              o(t);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this;
            if (this._complete) {
              const e = () => this._complete.call(this._context);
              i.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, e), this.unsubscribe())
                : (this.__tryOrUnsub(e), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(t, e) {
          try {
            t.call(this._context, e);
          } catch (n) {
            if ((this.unsubscribe(), i.useDeprecatedSynchronousErrorHandling))
              throw n;
            o(n);
          }
        }
        __tryOrSetError(t, e, n) {
          if (!i.useDeprecatedSynchronousErrorHandling)
            throw new Error("bad call");
          try {
            e.call(this._context, n);
          } catch (r) {
            return i.useDeprecatedSynchronousErrorHandling
              ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
              : (o(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: t } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            t.unsubscribe();
        }
      }
      const m = (() =>
        ("function" == typeof Symbol && Symbol.observable) || "@@observable")();
      function y(t) {
        return t;
      }
      function v(...t) {
        return _(t);
      }
      function _(t) {
        return 0 === t.length
          ? y
          : 1 === t.length
          ? t[0]
          : function (e) {
              return t.reduce((t, e) => e(t), e);
            };
      }
      let w = (() => {
        class t {
          constructor(t) {
            (this._isScalar = !1), t && (this._subscribe = t);
          }
          lift(e) {
            const n = new t();
            return (n.source = this), (n.operator = e), n;
          }
          subscribe(t, e, n) {
            const { operator: r } = this,
              s = (function (t, e, n) {
                if (t) {
                  if (t instanceof f) return t;
                  if (t[p]) return t[p]();
                }
                return t || e || n ? new f(t, e, n) : new f(a);
              })(t, e, n);
            if (
              (s.add(
                r
                  ? r.call(s, this.source)
                  : this.source ||
                    (i.useDeprecatedSynchronousErrorHandling &&
                      !s.syncErrorThrowable)
                  ? this._subscribe(s)
                  : this._trySubscribe(s)
              ),
              i.useDeprecatedSynchronousErrorHandling &&
                s.syncErrorThrowable &&
                ((s.syncErrorThrowable = !1), s.syncErrorThrown))
            )
              throw s.syncErrorValue;
            return s;
          }
          _trySubscribe(t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              i.useDeprecatedSynchronousErrorHandling &&
                ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                (function (t) {
                  for (; t; ) {
                    const { closed: e, destination: n, isStopped: r } = t;
                    if (e || r) return !1;
                    t = n && n instanceof f ? n : null;
                  }
                  return !0;
                })(t)
                  ? t.error(e)
                  : console.warn(e);
            }
          }
          forEach(t, e) {
            return new (e = b(e))((e, n) => {
              let r;
              r = this.subscribe(
                (e) => {
                  try {
                    t(e);
                  } catch (s) {
                    n(s), r && r.unsubscribe();
                  }
                },
                n,
                e
              );
            });
          }
          _subscribe(t) {
            const { source: e } = this;
            return e && e.subscribe(t);
          }
          [m]() {
            return this;
          }
          pipe(...t) {
            return 0 === t.length ? this : _(t)(this);
          }
          toPromise(t) {
            return new (t = b(t))((t, e) => {
              let n;
              this.subscribe(
                (t) => (n = t),
                (t) => e(t),
                () => t(n)
              );
            });
          }
        }
        return (t.create = (e) => new t(e)), t;
      })();
      function b(t) {
        if ((t || (t = i.Promise || Promise), !t))
          throw new Error("no Promise impl found");
        return t;
      }
      const C = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = "object unsubscribed"),
            (this.name = "ObjectUnsubscribedError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      class S extends h {
        constructor(t, e) {
          super(),
            (this.subject = t),
            (this.subscriber = e),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const t = this.subject,
            e = t.observers;
          if (
            ((this.subject = null),
            !e || 0 === e.length || t.isStopped || t.closed)
          )
            return;
          const n = e.indexOf(this.subscriber);
          -1 !== n && e.splice(n, 1);
        }
      }
      class x extends f {
        constructor(t) {
          super(t), (this.destination = t);
        }
      }
      let E = (() => {
        class t extends w {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [p]() {
            return new x(this);
          }
          lift(t) {
            const e = new k(this, this);
            return (e.operator = t), e;
          }
          next(t) {
            if (this.closed) throw new C();
            if (!this.isStopped) {
              const { observers: e } = this,
                n = e.length,
                r = e.slice();
              for (let s = 0; s < n; s++) r[s].next(t);
            }
          }
          error(t) {
            if (this.closed) throw new C();
            (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
            const { observers: e } = this,
              n = e.length,
              r = e.slice();
            for (let s = 0; s < n; s++) r[s].error(t);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new C();
            this.isStopped = !0;
            const { observers: t } = this,
              e = t.length,
              n = t.slice();
            for (let r = 0; r < e; r++) n[r].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(t) {
            if (this.closed) throw new C();
            return super._trySubscribe(t);
          }
          _subscribe(t) {
            if (this.closed) throw new C();
            return this.hasError
              ? (t.error(this.thrownError), h.EMPTY)
              : this.isStopped
              ? (t.complete(), h.EMPTY)
              : (this.observers.push(t), new S(this, t));
          }
          asObservable() {
            const t = new w();
            return (t.source = this), t;
          }
        }
        return (t.create = (t, e) => new k(t, e)), t;
      })();
      class k extends E {
        constructor(t, e) {
          super(), (this.destination = t), (this.source = e);
        }
        next(t) {
          const { destination: e } = this;
          e && e.next && e.next(t);
        }
        error(t) {
          const { destination: e } = this;
          e && e.error && this.destination.error(t);
        }
        complete() {
          const { destination: t } = this;
          t && t.complete && this.destination.complete();
        }
        _subscribe(t) {
          const { source: e } = this;
          return e ? this.source.subscribe(t) : h.EMPTY;
        }
      }
      function O(t) {
        return t && "function" == typeof t.schedule;
      }
      class P extends f {
        constructor(t, e, n) {
          super(),
            (this.parent = t),
            (this.outerValue = e),
            (this.outerIndex = n),
            (this.index = 0);
        }
        _next(t) {
          this.parent.notifyNext(
            this.outerValue,
            t,
            this.outerIndex,
            this.index++,
            this
          );
        }
        _error(t) {
          this.parent.notifyError(t, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      const T = (t) => (e) => {
        for (let n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
        e.complete();
      };
      function M() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      }
      const A = M(),
        I = (t) => t && "number" == typeof t.length && "function" != typeof t;
      function R(t) {
        return (
          !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        );
      }
      const D = (t) => {
        if (t && "function" == typeof t[m])
          return (
            (r = t),
            (t) => {
              const e = r[m]();
              if ("function" != typeof e.subscribe)
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              return e.subscribe(t);
            }
          );
        if (I(t)) return T(t);
        if (R(t))
          return (
            (n = t),
            (t) => (
              n
                .then(
                  (e) => {
                    t.closed || (t.next(e), t.complete());
                  },
                  (e) => t.error(e)
                )
                .then(null, o),
              t
            )
          );
        if (t && "function" == typeof t[A])
          return (
            (e = t),
            (t) => {
              const n = e[A]();
              for (;;) {
                const e = n.next();
                if (e.done) {
                  t.complete();
                  break;
                }
                if ((t.next(e.value), t.closed)) break;
              }
              return (
                "function" == typeof n.return &&
                  t.add(() => {
                    n.return && n.return();
                  }),
                t
              );
            }
          );
        {
          const e = c(t) ? "an invalid object" : `'${t}'`;
          throw new TypeError(
            `You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`
          );
        }
        var e, n, r;
      };
      function j(t, e, n, r, s = new P(t, n, r)) {
        if (!s.closed) return e instanceof w ? e.subscribe(s) : D(e)(s);
      }
      class N extends f {
        notifyNext(t, e, n, r, s) {
          this.destination.next(e);
        }
        notifyError(t, e) {
          this.destination.error(t);
        }
        notifyComplete(t) {
          this.destination.complete();
        }
      }
      function U(t, e) {
        return function (n) {
          if ("function" != typeof t)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return n.lift(new L(t, e));
        };
      }
      class L {
        constructor(t, e) {
          (this.project = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new F(t, this.project, this.thisArg));
        }
      }
      class F extends f {
        constructor(t, e, n) {
          super(t),
            (this.project = e),
            (this.count = 0),
            (this.thisArg = n || this);
        }
        _next(t) {
          let e;
          try {
            e = this.project.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      function H(t, e) {
        return new w((n) => {
          const r = new h();
          let s = 0;
          return (
            r.add(
              e.schedule(function () {
                s !== t.length
                  ? (n.next(t[s++]), n.closed || r.add(this.schedule()))
                  : n.complete();
              })
            ),
            r
          );
        });
      }
      function V(t, e) {
        return e
          ? (function (t, e) {
              if (null != t) {
                if (
                  (function (t) {
                    return t && "function" == typeof t[m];
                  })(t)
                )
                  return (function (t, e) {
                    return new w((n) => {
                      const r = new h();
                      return (
                        r.add(
                          e.schedule(() => {
                            const s = t[m]();
                            r.add(
                              s.subscribe({
                                next(t) {
                                  r.add(e.schedule(() => n.next(t)));
                                },
                                error(t) {
                                  r.add(e.schedule(() => n.error(t)));
                                },
                                complete() {
                                  r.add(e.schedule(() => n.complete()));
                                },
                              })
                            );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (R(t))
                  return (function (t, e) {
                    return new w((n) => {
                      const r = new h();
                      return (
                        r.add(
                          e.schedule(() =>
                            t.then(
                              (t) => {
                                r.add(
                                  e.schedule(() => {
                                    n.next(t),
                                      r.add(e.schedule(() => n.complete()));
                                  })
                                );
                              },
                              (t) => {
                                r.add(e.schedule(() => n.error(t)));
                              }
                            )
                          )
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (I(t)) return H(t, e);
                if (
                  (function (t) {
                    return t && "function" == typeof t[A];
                  })(t) ||
                  "string" == typeof t
                )
                  return (function (t, e) {
                    if (!t) throw new Error("Iterable cannot be null");
                    return new w((n) => {
                      const r = new h();
                      let s;
                      return (
                        r.add(() => {
                          s && "function" == typeof s.return && s.return();
                        }),
                        r.add(
                          e.schedule(() => {
                            (s = t[A]()),
                              r.add(
                                e.schedule(function () {
                                  if (n.closed) return;
                                  let t, e;
                                  try {
                                    const n = s.next();
                                    (t = n.value), (e = n.done);
                                  } catch (r) {
                                    return void n.error(r);
                                  }
                                  e
                                    ? n.complete()
                                    : (n.next(t), this.schedule());
                                })
                              );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
              }
              throw new TypeError(
                ((null !== t && typeof t) || t) + " is not observable"
              );
            })(t, e)
          : t instanceof w
          ? t
          : new w(D(t));
      }
      function $(t, e, n = Number.POSITIVE_INFINITY) {
        return "function" == typeof e
          ? (r) =>
              r.pipe(
                $((n, r) => V(t(n, r)).pipe(U((t, s) => e(n, t, r, s))), n)
              )
          : ("number" == typeof e && (n = e), (e) => e.lift(new z(t, n)));
      }
      class z {
        constructor(t, e = Number.POSITIVE_INFINITY) {
          (this.project = t), (this.concurrent = e);
        }
        call(t, e) {
          return e.subscribe(new q(t, this.project, this.concurrent));
        }
      }
      class q extends N {
        constructor(t, e, n = Number.POSITIVE_INFINITY) {
          super(t),
            (this.project = e),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(t) {
          this.active < this.concurrent
            ? this._tryNext(t)
            : this.buffer.push(t);
        }
        _tryNext(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(e, t, n);
        }
        _innerSub(t, e, n) {
          const r = new P(this, e, n),
            s = this.destination;
          s.add(r);
          const i = j(this, t, void 0, void 0, r);
          i !== r && s.add(i);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(t, e, n, r, s) {
          this.destination.next(e);
        }
        notifyComplete(t) {
          const e = this.buffer;
          this.remove(t),
            this.active--,
            e.length > 0
              ? this._next(e.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
      function B(t = Number.POSITIVE_INFINITY) {
        return $(y, t);
      }
      function W(t, e) {
        return e ? H(t, e) : new w(T(t));
      }
      function G() {
        return function (t) {
          return t.lift(new Z(t));
        };
      }
      class Z {
        constructor(t) {
          this.connectable = t;
        }
        call(t, e) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new Q(t, n),
            s = e.subscribe(r);
          return r.closed || (r.connection = n.connect()), s;
        }
      }
      class Q extends f {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _unsubscribe() {
          const { connectable: t } = this;
          if (!t) return void (this.connection = null);
          this.connectable = null;
          const e = t._refCount;
          if (e <= 0) return void (this.connection = null);
          if (((t._refCount = e - 1), e > 1))
            return void (this.connection = null);
          const { connection: n } = this,
            r = t._connection;
          (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
        }
      }
      class Y extends w {
        constructor(t, e) {
          super(),
            (this.source = t),
            (this.subjectFactory = e),
            (this._refCount = 0),
            (this._isComplete = !1);
        }
        _subscribe(t) {
          return this.getSubject().subscribe(t);
        }
        getSubject() {
          const t = this._subject;
          return (
            (t && !t.isStopped) || (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        connect() {
          let t = this._connection;
          return (
            t ||
              ((this._isComplete = !1),
              (t = this._connection = new h()),
              t.add(this.source.subscribe(new J(this.getSubject(), this))),
              t.closed && ((this._connection = null), (t = h.EMPTY))),
            t
          );
        }
        refCount() {
          return G()(this);
        }
      }
      const K = (() => {
        const t = Y.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: t._subscribe },
          _isComplete: { value: t._isComplete, writable: !0 },
          getSubject: { value: t.getSubject },
          connect: { value: t.connect },
          refCount: { value: t.refCount },
        };
      })();
      class J extends x {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _error(t) {
          this._unsubscribe(), super._error(t);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const t = this.connectable;
          if (t) {
            this.connectable = null;
            const e = t._connection;
            (t._refCount = 0),
              (t._subject = null),
              (t._connection = null),
              e && e.unsubscribe();
          }
        }
      }
      function X() {
        return new E();
      }
      function tt(t) {
        return { toString: t }.toString();
      }
      function et(t, e, n) {
        return tt(() => {
          const r = (function (t) {
            return function (...e) {
              if (t) {
                const n = t(...e);
                for (const t in n) this[t] = n[t];
              }
            };
          })(e);
          function s(...t) {
            if (this instanceof s) return r.apply(this, t), this;
            const e = new s(...t);
            return (n.annotation = e), n;
            function n(t, n, r) {
              const s = t.hasOwnProperty("__parameters__")
                ? t.__parameters__
                : Object.defineProperty(t, "__parameters__", { value: [] })
                    .__parameters__;
              for (; s.length <= r; ) s.push(null);
              return (s[r] = s[r] || []).push(e), t;
            }
          }
          return (
            n && (s.prototype = Object.create(n.prototype)),
            (s.prototype.ngMetadataName = t),
            (s.annotationCls = s),
            s
          );
        });
      }
      const nt = et("Inject", (t) => ({ token: t })),
        rt = et("Optional"),
        st = et("Self"),
        it = et("SkipSelf");
      var ot = (function (t) {
        return (
          (t[(t.Default = 0)] = "Default"),
          (t[(t.Host = 1)] = "Host"),
          (t[(t.Self = 2)] = "Self"),
          (t[(t.SkipSelf = 4)] = "SkipSelf"),
          (t[(t.Optional = 8)] = "Optional"),
          t
        );
      })({});
      function at(t) {
        for (let e in t) if (t[e] === at) return e;
        throw Error("Could not find renamed property on target object.");
      }
      function lt(t) {
        return {
          token: t.token,
          providedIn: t.providedIn || null,
          factory: t.factory,
          value: void 0,
        };
      }
      function ct(t) {
        return {
          factory: t.factory,
          providers: t.providers || [],
          imports: t.imports || [],
        };
      }
      function ut(t) {
        return ht(t, t[pt]) || ht(t, t[mt]);
      }
      function ht(t, e) {
        return e && e.token === t ? e : null;
      }
      function dt(t) {
        return t && (t.hasOwnProperty(ft) || t.hasOwnProperty(yt))
          ? t[ft]
          : null;
      }
      const pt = at({ ɵprov: at }),
        ft = at({ ɵinj: at }),
        gt = at({ ɵprovFallback: at }),
        mt = at({ ngInjectableDef: at }),
        yt = at({ ngInjectorDef: at });
      function vt(t) {
        if ("string" == typeof t) return t;
        if (Array.isArray(t)) return "[" + t.map(vt).join(", ") + "]";
        if (null == t) return "" + t;
        if (t.overriddenName) return "" + t.overriddenName;
        if (t.name) return "" + t.name;
        const e = t.toString();
        if (null == e) return "" + e;
        const n = e.indexOf("\n");
        return -1 === n ? e : e.substring(0, n);
      }
      function _t(t, e) {
        return null == t || "" === t
          ? null === e
            ? ""
            : e
          : null == e || "" === e
          ? t
          : t + " " + e;
      }
      const wt = at({ __forward_ref__: at });
      function bt(t) {
        return (
          (t.__forward_ref__ = bt),
          (t.toString = function () {
            return vt(this());
          }),
          t
        );
      }
      function Ct(t) {
        return "function" == typeof (e = t) &&
          e.hasOwnProperty(wt) &&
          e.__forward_ref__ === bt
          ? t()
          : t;
        var e;
      }
      const St = "undefined" != typeof globalThis && globalThis,
        xt = "undefined" != typeof window && window,
        Et =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        kt = "undefined" != typeof global && global,
        Ot = St || kt || xt || Et,
        Pt = at({ ɵcmp: at }),
        Tt = at({ ɵdir: at }),
        Mt = at({ ɵpipe: at }),
        At = at({ ɵmod: at }),
        It = at({ ɵloc: at }),
        Rt = at({ ɵfac: at }),
        Dt = at({ __NG_ELEMENT_ID__: at });
      class jt {
        constructor(t, e) {
          (this._desc = t),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof e
              ? (this.__NG_ELEMENT_ID__ = e)
              : void 0 !== e &&
                (this.ɵprov = lt({
                  token: this,
                  providedIn: e.providedIn || "root",
                  factory: e.factory,
                }));
        }
        toString() {
          return "InjectionToken " + this._desc;
        }
      }
      const Nt = new jt("INJECTOR", -1),
        Ut = {},
        Lt = /\n/gm,
        Ft = at({ provide: String, useValue: at });
      let Ht,
        Vt = void 0;
      function $t(t) {
        const e = Vt;
        return (Vt = t), e;
      }
      function zt(t) {
        const e = Ht;
        return (Ht = t), e;
      }
      function qt(t, e = ot.Default) {
        if (void 0 === Vt)
          throw new Error("inject() must be called from an injection context");
        return null === Vt
          ? Wt(t, void 0, e)
          : Vt.get(t, e & ot.Optional ? null : void 0, e);
      }
      function Bt(t, e = ot.Default) {
        return (Ht || qt)(Ct(t), e);
      }
      function Wt(t, e, n) {
        const r = ut(t);
        if (r && "root" == r.providedIn)
          return void 0 === r.value ? (r.value = r.factory()) : r.value;
        if (n & ot.Optional) return null;
        if (void 0 !== e) return e;
        throw new Error(`Injector: NOT_FOUND [${vt(t)}]`);
      }
      function Gt(t) {
        const e = [];
        for (let n = 0; n < t.length; n++) {
          const r = Ct(t[n]);
          if (Array.isArray(r)) {
            if (0 === r.length)
              throw new Error("Arguments array must have arguments.");
            let t = void 0,
              n = ot.Default;
            for (let e = 0; e < r.length; e++) {
              const s = r[e];
              s instanceof rt || "Optional" === s.ngMetadataName || s === rt
                ? (n |= ot.Optional)
                : s instanceof it || "SkipSelf" === s.ngMetadataName || s === it
                ? (n |= ot.SkipSelf)
                : s instanceof st || "Self" === s.ngMetadataName || s === st
                ? (n |= ot.Self)
                : (t = s instanceof nt || s === nt ? s.token : s);
            }
            e.push(Bt(t, n));
          } else e.push(Bt(r));
        }
        return e;
      }
      class Zt {
        get(t, e = Ut) {
          if (e === Ut) {
            const e = new Error(`NullInjectorError: No provider for ${vt(t)}!`);
            throw ((e.name = "NullInjectorError"), e);
          }
          return e;
        }
      }
      class Qt {}
      class Yt {}
      function Kt(t, e) {
        t.forEach((t) => (Array.isArray(t) ? Kt(t, e) : e(t)));
      }
      function Jt(t, e, n) {
        e >= t.length ? t.push(n) : t.splice(e, 0, n);
      }
      function Xt(t, e) {
        return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
      }
      const te = (function () {
          var t = { OnPush: 0, Default: 1 };
          return (t[t.OnPush] = "OnPush"), (t[t.Default] = "Default"), t;
        })(),
        ee = (function () {
          var t = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
          return (
            (t[t.Emulated] = "Emulated"),
            (t[t.Native] = "Native"),
            (t[t.None] = "None"),
            (t[t.ShadowDom] = "ShadowDom"),
            t
          );
        })(),
        ne = {},
        re = [];
      let se = 0;
      function ie(t) {
        return tt(() => {
          const e = t.type,
            n = e.prototype,
            r = {},
            s = {
              type: e,
              providersResolver: null,
              decls: t.decls,
              vars: t.vars,
              factory: null,
              template: t.template || null,
              consts: t.consts || null,
              ngContentSelectors: t.ngContentSelectors,
              hostBindings: t.hostBindings || null,
              hostVars: t.hostVars || 0,
              hostAttrs: t.hostAttrs || null,
              contentQueries: t.contentQueries || null,
              declaredInputs: r,
              inputs: null,
              outputs: null,
              exportAs: t.exportAs || null,
              onChanges: null,
              onInit: n.ngOnInit || null,
              doCheck: n.ngDoCheck || null,
              afterContentInit: n.ngAfterContentInit || null,
              afterContentChecked: n.ngAfterContentChecked || null,
              afterViewInit: n.ngAfterViewInit || null,
              afterViewChecked: n.ngAfterViewChecked || null,
              onDestroy: n.ngOnDestroy || null,
              onPush: t.changeDetection === te.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: t.selectors || re,
              viewQuery: t.viewQuery || null,
              features: t.features || null,
              data: t.data || {},
              encapsulation: t.encapsulation || ee.Emulated,
              id: "c",
              styles: t.styles || re,
              _: null,
              setInput: null,
              schemas: t.schemas || null,
              tView: null,
            },
            i = t.directives,
            o = t.features,
            a = t.pipes;
          return (
            (s.id += se++),
            (s.inputs = ue(t.inputs, r)),
            (s.outputs = ue(t.outputs)),
            o && o.forEach((t) => t(s)),
            (s.directiveDefs = i
              ? () => ("function" == typeof i ? i() : i).map(oe)
              : null),
            (s.pipeDefs = a
              ? () => ("function" == typeof a ? a() : a).map(ae)
              : null),
            s
          );
        });
      }
      function oe(t) {
        return (
          pe(t) ||
          (function (t) {
            return t[Tt] || null;
          })(t)
        );
      }
      function ae(t) {
        return (function (t) {
          return t[Mt] || null;
        })(t);
      }
      const le = {};
      function ce(t) {
        const e = {
          type: t.type,
          bootstrap: t.bootstrap || re,
          declarations: t.declarations || re,
          imports: t.imports || re,
          exports: t.exports || re,
          transitiveCompileScopes: null,
          schemas: t.schemas || null,
          id: t.id || null,
        };
        return (
          null != t.id &&
            tt(() => {
              le[t.id] = t.type;
            }),
          e
        );
      }
      function ue(t, e) {
        if (null == t) return ne;
        const n = {};
        for (const r in t)
          if (t.hasOwnProperty(r)) {
            let s = t[r],
              i = s;
            Array.isArray(s) && ((i = s[1]), (s = s[0])),
              (n[s] = r),
              e && (e[s] = i);
          }
        return n;
      }
      const he = ie;
      function de(t) {
        return {
          type: t.type,
          name: t.name,
          factory: null,
          pure: !1 !== t.pure,
          onDestroy: t.type.prototype.ngOnDestroy || null,
        };
      }
      function pe(t) {
        return t[Pt] || null;
      }
      function fe(t, e) {
        return t.hasOwnProperty(Rt) ? t[Rt] : null;
      }
      function ge(t, e) {
        const n = t[At] || null;
        if (!n && !0 === e)
          throw new Error(`Type ${vt(t)} does not have '\u0275mod' property.`);
        return n;
      }
      function me(t) {
        return Array.isArray(t) && "object" == typeof t[1];
      }
      function ye(t) {
        return Array.isArray(t) && !0 === t[1];
      }
      function ve(t) {
        return 0 != (8 & t.flags);
      }
      function _e(t) {
        return 2 == (2 & t.flags);
      }
      function we(t) {
        return 1 == (1 & t.flags);
      }
      function be(t) {
        return null !== t.template;
      }
      function Ce(t) {
        return 0 != (512 & t[2]);
      }
      let Se = void 0;
      function xe(t) {
        return !!t.listen;
      }
      const Ee = {
        createRenderer: (t, e) =>
          void 0 !== Se
            ? Se
            : "undefined" != typeof document
            ? document
            : void 0,
      };
      function ke(t) {
        for (; Array.isArray(t); ) t = t[0];
        return t;
      }
      function Oe(t, e) {
        return ke(e[t.index]);
      }
      function Pe(t, e) {
        return t.data[e + 20];
      }
      function Te(t, e) {
        return t[e + 20];
      }
      function Me(t, e) {
        const n = e[t];
        return me(n) ? n : n[0];
      }
      function Ae(t) {
        const e = (function (t) {
          return t.__ngContext__ || null;
        })(t);
        return e ? (Array.isArray(e) ? e : e.lView) : null;
      }
      function Ie(t) {
        return 4 == (4 & t[2]);
      }
      function Re(t) {
        return 128 == (128 & t[2]);
      }
      function De(t, e) {
        return null === t || null == e ? null : t[e];
      }
      function je(t) {
        t[18] = 0;
      }
      function Ne(t, e) {
        t[5] += e;
        let n = t,
          r = t[3];
        for (
          ;
          null !== r && ((1 === e && 1 === n[5]) || (-1 === e && 0 === n[5]));

        )
          (r[5] += e), (n = r), (r = r[3]);
      }
      const Ue = {
        lFrame: rn(null),
        bindingsEnabled: !0,
        checkNoChangesMode: !1,
      };
      function Le() {
        return Ue.bindingsEnabled;
      }
      function Fe() {
        return Ue.lFrame.lView;
      }
      function He() {
        return Ue.lFrame.tView;
      }
      function Ve(t) {
        Ue.lFrame.contextLView = t;
      }
      function $e() {
        return Ue.lFrame.previousOrParentTNode;
      }
      function ze(t, e) {
        (Ue.lFrame.previousOrParentTNode = t), (Ue.lFrame.isParent = e);
      }
      function qe() {
        return Ue.lFrame.isParent;
      }
      function Be() {
        return Ue.checkNoChangesMode;
      }
      function We(t) {
        Ue.checkNoChangesMode = t;
      }
      function Ge() {
        const t = Ue.lFrame;
        let e = t.bindingRootIndex;
        return (
          -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e
        );
      }
      function Ze() {
        return Ue.lFrame.bindingIndex;
      }
      function Qe() {
        return Ue.lFrame.bindingIndex++;
      }
      function Ye(t, e) {
        const n = Ue.lFrame;
        (n.bindingIndex = n.bindingRootIndex = t), Ke(e);
      }
      function Ke(t) {
        Ue.lFrame.currentDirectiveIndex = t;
      }
      function Je() {
        return Ue.lFrame.currentQueryIndex;
      }
      function Xe(t) {
        Ue.lFrame.currentQueryIndex = t;
      }
      function tn(t, e) {
        const n = nn();
        (Ue.lFrame = n), (n.previousOrParentTNode = e), (n.lView = t);
      }
      function en(t, e) {
        const n = nn(),
          r = t[1];
        (Ue.lFrame = n),
          (n.previousOrParentTNode = e),
          (n.lView = t),
          (n.tView = r),
          (n.contextLView = t),
          (n.bindingIndex = r.bindingStartIndex);
      }
      function nn() {
        const t = Ue.lFrame,
          e = null === t ? null : t.child;
        return null === e ? rn(t) : e;
      }
      function rn(t) {
        const e = {
          previousOrParentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: 0,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentSanitizer: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: t,
          child: null,
        };
        return null !== t && (t.child = e), e;
      }
      function sn() {
        const t = Ue.lFrame;
        return (
          (Ue.lFrame = t.parent),
          (t.previousOrParentTNode = null),
          (t.lView = null),
          t
        );
      }
      const on = sn;
      function an() {
        const t = sn();
        (t.isParent = !0),
          (t.tView = null),
          (t.selectedIndex = 0),
          (t.contextLView = null),
          (t.elementDepthCount = 0),
          (t.currentDirectiveIndex = -1),
          (t.currentNamespace = null),
          (t.currentSanitizer = null),
          (t.bindingRootIndex = -1),
          (t.bindingIndex = -1),
          (t.currentQueryIndex = 0);
      }
      function ln() {
        return Ue.lFrame.selectedIndex;
      }
      function cn(t) {
        Ue.lFrame.selectedIndex = t;
      }
      function un() {
        const t = Ue.lFrame;
        return Pe(t.tView, t.selectedIndex);
      }
      function hn(t, e) {
        for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
          const e = t.data[n];
          e.afterContentInit &&
            (t.contentHooks || (t.contentHooks = [])).push(
              -n,
              e.afterContentInit
            ),
            e.afterContentChecked &&
              ((t.contentHooks || (t.contentHooks = [])).push(
                n,
                e.afterContentChecked
              ),
              (t.contentCheckHooks || (t.contentCheckHooks = [])).push(
                n,
                e.afterContentChecked
              )),
            e.afterViewInit &&
              (t.viewHooks || (t.viewHooks = [])).push(-n, e.afterViewInit),
            e.afterViewChecked &&
              ((t.viewHooks || (t.viewHooks = [])).push(n, e.afterViewChecked),
              (t.viewCheckHooks || (t.viewCheckHooks = [])).push(
                n,
                e.afterViewChecked
              )),
            null != e.onDestroy &&
              (t.destroyHooks || (t.destroyHooks = [])).push(n, e.onDestroy);
        }
      }
      function dn(t, e, n) {
        gn(t, e, 3, n);
      }
      function pn(t, e, n, r) {
        (3 & t[2]) === n && gn(t, e, n, r);
      }
      function fn(t, e) {
        let n = t[2];
        (3 & n) === e && ((n &= 2047), (n += 1), (t[2] = n));
      }
      function gn(t, e, n, r) {
        const s = null != r ? r : -1;
        let i = 0;
        for (let o = void 0 !== r ? 65535 & t[18] : 0; o < e.length; o++)
          if ("number" == typeof e[o + 1]) {
            if (((i = e[o]), null != r && i >= r)) break;
          } else
            e[o] < 0 && (t[18] += 65536),
              (i < s || -1 == s) &&
                (mn(t, n, e, o), (t[18] = (4294901760 & t[18]) + o + 2)),
              o++;
      }
      function mn(t, e, n, r) {
        const s = n[r] < 0,
          i = n[r + 1],
          o = t[s ? -n[r] : n[r]];
        s
          ? t[2] >> 11 < t[18] >> 16 &&
            (3 & t[2]) === e &&
            ((t[2] += 2048), i.call(o))
          : i.call(o);
      }
      class yn {
        constructor(t, e, n) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = e),
            (this.injectImpl = n);
        }
      }
      function vn(t, e, n) {
        const r = xe(t);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if ("number" == typeof i) {
            if (0 !== i) break;
            s++;
            const o = n[s++],
              a = n[s++],
              l = n[s++];
            r ? t.setAttribute(e, a, l, o) : e.setAttributeNS(o, a, l);
          } else {
            const o = i,
              a = n[++s];
            wn(o)
              ? r && t.setProperty(e, o, a)
              : r
              ? t.setAttribute(e, o, a)
              : e.setAttribute(o, a),
              s++;
          }
        }
        return s;
      }
      function _n(t) {
        return 3 === t || 4 === t || 6 === t;
      }
      function wn(t) {
        return 64 === t.charCodeAt(0);
      }
      function bn(t, e) {
        if (null === e || 0 === e.length);
        else if (null === t || 0 === t.length) t = e.slice();
        else {
          let n = -1;
          for (let r = 0; r < e.length; r++) {
            const s = e[r];
            "number" == typeof s
              ? (n = s)
              : 0 === n ||
                Cn(t, n, s, null, -1 === n || 2 === n ? e[++r] : null);
          }
        }
        return t;
      }
      function Cn(t, e, n, r, s) {
        let i = 0,
          o = t.length;
        if (-1 === e) o = -1;
        else
          for (; i < t.length; ) {
            const n = t[i++];
            if ("number" == typeof n) {
              if (n === e) {
                o = -1;
                break;
              }
              if (n > e) {
                o = i - 1;
                break;
              }
            }
          }
        for (; i < t.length; ) {
          const e = t[i];
          if ("number" == typeof e) break;
          if (e === n) {
            if (null === r) return void (null !== s && (t[i + 1] = s));
            if (r === t[i + 1]) return void (t[i + 2] = s);
          }
          i++, null !== r && i++, null !== s && i++;
        }
        -1 !== o && (t.splice(o, 0, e), (i = o + 1)),
          t.splice(i++, 0, n),
          null !== r && t.splice(i++, 0, r),
          null !== s && t.splice(i++, 0, s);
      }
      function Sn(t) {
        return -1 !== t;
      }
      function xn(t) {
        return 32767 & t;
      }
      function En(t) {
        return t >> 16;
      }
      function kn(t, e) {
        let n = En(t),
          r = e;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      function On(t) {
        return "string" == typeof t ? t : null == t ? "" : "" + t;
      }
      function Pn(t) {
        return "function" == typeof t
          ? t.name || t.toString()
          : "object" == typeof t && null != t && "function" == typeof t.type
          ? t.type.name || t.type.toString()
          : On(t);
      }
      const Tn = (() =>
        (
          ("undefined" != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(Ot))();
      function Mn(t) {
        return t instanceof Function ? t() : t;
      }
      let An = !0;
      function In(t) {
        const e = An;
        return (An = t), e;
      }
      let Rn = 0;
      function Dn(t, e) {
        const n = Nn(t, e);
        if (-1 !== n) return n;
        const r = e[1];
        r.firstCreatePass &&
          ((t.injectorIndex = e.length),
          jn(r.data, t),
          jn(e, null),
          jn(r.blueprint, null));
        const s = Un(t, e),
          i = t.injectorIndex;
        if (Sn(s)) {
          const t = xn(s),
            n = kn(s, e),
            r = n[1].data;
          for (let s = 0; s < 8; s++) e[i + s] = n[t + s] | r[t + s];
        }
        return (e[i + 8] = s), i;
      }
      function jn(t, e) {
        t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
      }
      function Nn(t, e) {
        return -1 === t.injectorIndex ||
          (t.parent && t.parent.injectorIndex === t.injectorIndex) ||
          null == e[t.injectorIndex + 8]
          ? -1
          : t.injectorIndex;
      }
      function Un(t, e) {
        if (t.parent && -1 !== t.parent.injectorIndex)
          return t.parent.injectorIndex;
        let n = e[6],
          r = 1;
        for (; n && -1 === n.injectorIndex; )
          (n = (e = e[15]) ? e[6] : null), r++;
        return n ? n.injectorIndex | (r << 16) : -1;
      }
      function Ln(t, e, n) {
        !(function (t, e, n) {
          let r = "string" != typeof n ? n[Dt] : n.charCodeAt(0) || 0;
          null == r && (r = n[Dt] = Rn++);
          const s = 255 & r,
            i = 1 << s,
            o = 64 & s,
            a = 32 & s,
            l = e.data;
          128 & s
            ? o
              ? a
                ? (l[t + 7] |= i)
                : (l[t + 6] |= i)
              : a
              ? (l[t + 5] |= i)
              : (l[t + 4] |= i)
            : o
            ? a
              ? (l[t + 3] |= i)
              : (l[t + 2] |= i)
            : a
            ? (l[t + 1] |= i)
            : (l[t] |= i);
        })(t, e, n);
      }
      function Fn(t, e, n, r = ot.Default, s) {
        if (null !== t) {
          const s = (function (t) {
            if ("string" == typeof t) return t.charCodeAt(0) || 0;
            const e = t[Dt];
            return "number" == typeof e && e > 0 ? 255 & e : e;
          })(n);
          if ("function" == typeof s) {
            tn(e, t);
            try {
              const t = s();
              if (null != t || r & ot.Optional) return t;
              throw new Error(`No provider for ${Pn(n)}!`);
            } finally {
              on();
            }
          } else if ("number" == typeof s) {
            if (-1 === s) return new Wn(t, e);
            let i = null,
              o = Nn(t, e),
              a = -1,
              l = r & ot.Host ? e[16][6] : null;
            for (
              (-1 === o || r & ot.SkipSelf) &&
              ((a = -1 === o ? Un(t, e) : e[o + 8]),
              Bn(r, !1) ? ((i = e[1]), (o = xn(a)), (e = kn(a, e))) : (o = -1));
              -1 !== o;

            ) {
              a = e[o + 8];
              const t = e[1];
              if (qn(s, o, t.data)) {
                const t = Vn(o, e, n, i, r, l);
                if (t !== Hn) return t;
              }
              Bn(r, e[1].data[o + 8] === l) && qn(s, o, e)
                ? ((i = t), (o = xn(a)), (e = kn(a, e)))
                : (o = -1);
            }
          }
        }
        if (
          (r & ot.Optional && void 0 === s && (s = null),
          0 == (r & (ot.Self | ot.Host)))
        ) {
          const t = e[9],
            i = zt(void 0);
          try {
            return t ? t.get(n, s, r & ot.Optional) : Wt(n, s, r & ot.Optional);
          } finally {
            zt(i);
          }
        }
        if (r & ot.Optional) return s;
        throw new Error(`NodeInjector: NOT_FOUND [${Pn(n)}]`);
      }
      const Hn = {};
      function Vn(t, e, n, r, s, i) {
        const o = e[1],
          a = o.data[t + 8],
          l = $n(
            a,
            o,
            n,
            null == r ? _e(a) && An : r != o && 3 === a.type,
            s & ot.Host && i === a
          );
        return null !== l ? zn(e, o, l, a) : Hn;
      }
      function $n(t, e, n, r, s) {
        const i = t.providerIndexes,
          o = e.data,
          a = 65535 & i,
          l = t.directiveStart,
          c = i >> 16,
          u = s ? a + c : t.directiveEnd;
        for (let h = r ? a : a + c; h < u; h++) {
          const t = o[h];
          if ((h < l && n === t) || (h >= l && t.type === n)) return h;
        }
        if (s) {
          const t = o[l];
          if (t && be(t) && t.type === n) return l;
        }
        return null;
      }
      function zn(t, e, n, r) {
        let s = t[n];
        const i = e.data;
        if (s instanceof yn) {
          const o = s;
          if (o.resolving) throw new Error("Circular dep for " + Pn(i[n]));
          const a = In(o.canSeeViewProviders);
          let l;
          (o.resolving = !0), o.injectImpl && (l = zt(o.injectImpl)), tn(t, r);
          try {
            (s = t[n] = o.factory(void 0, i, t, r)),
              e.firstCreatePass &&
                n >= r.directiveStart &&
                (function (t, e, n) {
                  const { onChanges: r, onInit: s, doCheck: i } = e;
                  r &&
                    ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, r),
                    (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(
                      t,
                      r
                    )),
                    s &&
                      (n.preOrderHooks || (n.preOrderHooks = [])).push(-t, s),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(t, i));
                })(n, i[n], e);
          } finally {
            o.injectImpl && zt(l), In(a), (o.resolving = !1), on();
          }
        }
        return s;
      }
      function qn(t, e, n) {
        const r = 64 & t,
          s = 32 & t;
        let i;
        return (
          (i =
            128 & t
              ? r
                ? s
                  ? n[e + 7]
                  : n[e + 6]
                : s
                ? n[e + 5]
                : n[e + 4]
              : r
              ? s
                ? n[e + 3]
                : n[e + 2]
              : s
              ? n[e + 1]
              : n[e]),
          !!(i & (1 << t))
        );
      }
      function Bn(t, e) {
        return !(t & ot.Self || (t & ot.Host && e));
      }
      class Wn {
        constructor(t, e) {
          (this._tNode = t), (this._lView = e);
        }
        get(t, e) {
          return Fn(this._tNode, this._lView, t, void 0, e);
        }
      }
      function Gn(t) {
        return t.ngDebugContext;
      }
      function Zn(t) {
        return t.ngOriginalError;
      }
      function Qn(t, ...e) {
        t.error(...e);
      }
      class Yn {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const e = this._findOriginalError(t),
            n = this._findContext(t),
            r = (function (t) {
              return t.ngErrorLogger || Qn;
            })(t);
          r(this._console, "ERROR", t),
            e && r(this._console, "ORIGINAL ERROR", e),
            n && r(this._console, "ERROR CONTEXT", n);
        }
        _findContext(t) {
          return t ? (Gn(t) ? Gn(t) : this._findContext(Zn(t))) : null;
        }
        _findOriginalError(t) {
          let e = Zn(t);
          for (; e && Zn(e); ) e = Zn(e);
          return e;
        }
      }
      class Kn {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return (
            "SafeValue must use [property]=binding: " +
            this.changingThisBreaksApplicationSecurity +
            " (see http://g.co/ng/security#xss)"
          );
        }
      }
      let Jn = !0,
        Xn = !1;
      function tr() {
        return (Xn = !0), Jn;
      }
      const er = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        nr = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i,
        rr = (function () {
          var t = {
            NONE: 0,
            HTML: 1,
            STYLE: 2,
            SCRIPT: 3,
            URL: 4,
            RESOURCE_URL: 5,
          };
          return (
            (t[t.NONE] = "NONE"),
            (t[t.HTML] = "HTML"),
            (t[t.STYLE] = "STYLE"),
            (t[t.SCRIPT] = "SCRIPT"),
            (t[t.URL] = "URL"),
            (t[t.RESOURCE_URL] = "RESOURCE_URL"),
            t
          );
        })();
      function sr(t) {
        const e = (function () {
          const t = Fe();
          return t && t[12];
        })();
        return e
          ? e.sanitize(rr.URL, t) || ""
          : (function (t, e) {
              const n = (function (t) {
                return (t instanceof Kn && t.getTypeName()) || null;
              })(t);
              if (null != n && n !== e) {
                if ("ResourceURL" === n && "URL" === e) return !0;
                throw new Error(
                  `Required a safe ${e}, got a ${n} (see http://g.co/ng/security#xss)`
                );
              }
              return n === e;
            })(t, "URL")
          ? (r = t) instanceof Kn
            ? r.changingThisBreaksApplicationSecurity
            : r
          : ((n = On(t)),
            (n = String(n)).match(er) || n.match(nr)
              ? n
              : (tr() &&
                  console.warn(
                    `WARNING: sanitizing unsafe URL value ${n} (see http://g.co/ng/security#xss)`
                  ),
                "unsafe:" + n));
        var n, r;
      }
      function ir(t, e) {
        t.__ngContext__ = e;
      }
      function or(t) {
        throw new Error(
          "Multiple components match node with tagname " + t.tagName
        );
      }
      function ar() {
        throw new Error("Cannot mix multi providers and regular providers");
      }
      function lr(t, e, n) {
        let r = t.length;
        for (;;) {
          const s = t.indexOf(e, n);
          if (-1 === s) return s;
          if (0 === s || t.charCodeAt(s - 1) <= 32) {
            const n = e.length;
            if (s + n === r || t.charCodeAt(s + n) <= 32) return s;
          }
          n = s + 1;
        }
      }
      function cr(t, e, n) {
        let r = 0;
        for (; r < t.length; ) {
          let s = t[r++];
          if (n && "class" === s) {
            if (((s = t[r]), -1 !== lr(s.toLowerCase(), e, 0))) return !0;
          } else if (1 === s) {
            for (; r < t.length && "string" == typeof (s = t[r++]); )
              if (s.toLowerCase() === e) return !0;
            return !1;
          }
        }
        return !1;
      }
      function ur(t) {
        return 0 === t.type && "ng-template" !== t.tagName;
      }
      function hr(t, e, n) {
        return e === (0 !== t.type || n ? t.tagName : "ng-template");
      }
      function dr(t, e, n) {
        let r = 4;
        const s = t.attrs || [],
          i = (function (t) {
            for (let e = 0; e < t.length; e++) if (_n(t[e])) return e;
            return t.length;
          })(s);
        let o = !1;
        for (let a = 0; a < e.length; a++) {
          const l = e[a];
          if ("number" != typeof l) {
            if (!o)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== l && !hr(t, l, n)) || ("" === l && 1 === e.length))
                ) {
                  if (pr(r)) return !1;
                  o = !0;
                }
              } else {
                const c = 8 & r ? l : e[++a];
                if (8 & r && null !== t.attrs) {
                  if (!cr(t.attrs, c, n)) {
                    if (pr(r)) return !1;
                    o = !0;
                  }
                  continue;
                }
                const u = fr(8 & r ? "class" : l, s, ur(t), n);
                if (-1 === u) {
                  if (pr(r)) return !1;
                  o = !0;
                  continue;
                }
                if ("" !== c) {
                  let t;
                  t = u > i ? "" : s[u + 1].toLowerCase();
                  const e = 8 & r ? t : null;
                  if ((e && -1 !== lr(e, c, 0)) || (2 & r && c !== t)) {
                    if (pr(r)) return !1;
                    o = !0;
                  }
                }
              }
          } else {
            if (!o && !pr(r) && !pr(l)) return !1;
            if (o && pr(l)) continue;
            (o = !1), (r = l | (1 & r));
          }
        }
        return pr(r) || o;
      }
      function pr(t) {
        return 0 == (1 & t);
      }
      function fr(t, e, n, r) {
        if (null === e) return -1;
        let s = 0;
        if (r || !n) {
          let n = !1;
          for (; s < e.length; ) {
            const r = e[s];
            if (r === t) return s;
            if (3 === r || 6 === r) n = !0;
            else {
              if (1 === r || 2 === r) {
                let t = e[++s];
                for (; "string" == typeof t; ) t = e[++s];
                continue;
              }
              if (4 === r) break;
              if (0 === r) {
                s += 4;
                continue;
              }
            }
            s += n ? 1 : 2;
          }
          return -1;
        }
        return (function (t, e) {
          let n = t.indexOf(4);
          if (n > -1)
            for (n++; n < t.length; ) {
              const r = t[n];
              if ("number" == typeof r) return -1;
              if (r === e) return n;
              n++;
            }
          return -1;
        })(e, t);
      }
      function gr(t, e, n = !1) {
        for (let r = 0; r < e.length; r++) if (dr(t, e[r], n)) return !0;
        return !1;
      }
      function mr(t, e) {
        return t ? ":not(" + e.trim() + ")" : e;
      }
      function yr(t) {
        let e = t[0],
          n = 1,
          r = 2,
          s = "",
          i = !1;
        for (; n < t.length; ) {
          let o = t[n];
          if ("string" == typeof o)
            if (2 & r) {
              const e = t[++n];
              s += "[" + o + (e.length > 0 ? '="' + e + '"' : "") + "]";
            } else 8 & r ? (s += "." + o) : 4 & r && (s += " " + o);
          else
            "" === s || pr(o) || ((e += mr(i, s)), (s = "")),
              (r = o),
              (i = i || !pr(r));
          n++;
        }
        return "" !== s && (e += mr(i, s)), e;
      }
      const vr = {};
      function _r(t) {
        const e = t[3];
        return ye(e) ? e[3] : e;
      }
      function wr(t) {
        return Cr(t[13]);
      }
      function br(t) {
        return Cr(t[4]);
      }
      function Cr(t) {
        for (; null !== t && !ye(t); ) t = t[4];
        return t;
      }
      function Sr(t) {
        xr(He(), Fe(), ln() + t, Be());
      }
      function xr(t, e, n, r) {
        if (!r)
          if (3 == (3 & e[2])) {
            const r = t.preOrderCheckHooks;
            null !== r && dn(e, r, n);
          } else {
            const r = t.preOrderHooks;
            null !== r && pn(e, r, 0, n);
          }
        cn(n);
      }
      function Er(t, e) {
        const n = t.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const s = n[r],
              i = n[r + 1];
            if (-1 !== i) {
              const n = t.data[i];
              Xe(s), n.contentQueries(2, e[i], i);
            }
          }
      }
      function kr(t, e, n) {
        return xe(e)
          ? e.createElement(t, n)
          : null === n
          ? e.createElement(t)
          : e.createElementNS(n, t);
      }
      function Or(t, e, n, r, s, i, o, a, l, c) {
        const u = e.blueprint.slice();
        return (
          (u[0] = s),
          (u[2] = 140 | r),
          je(u),
          (u[3] = u[15] = t),
          (u[8] = n),
          (u[10] = o || (t && t[10])),
          (u[11] = a || (t && t[11])),
          (u[12] = l || (t && t[12]) || null),
          (u[9] = c || (t && t[9]) || null),
          (u[6] = i),
          (u[16] = 2 == e.type ? t[16] : u),
          u
        );
      }
      function Pr(t, e, n, r, s, i) {
        const o = n + 20,
          a =
            t.data[o] ||
            (function (t, e, n, r, s, i) {
              const o = $e(),
                a = qe(),
                l = a ? o : o && o.parent,
                c = (t.data[n] = Ur(0, l && l !== e ? l : null, r, n, s, i));
              return (
                null === t.firstChild && (t.firstChild = c),
                o &&
                  (!a || null != o.child || (null === c.parent && 2 !== o.type)
                    ? a || (o.next = c)
                    : (o.child = c)),
                c
              );
            })(t, e, o, r, s, i);
        return ze(a, !0), a;
      }
      function Tr(t, e, n) {
        en(e, e[6]);
        try {
          const r = t.viewQuery;
          null !== r && is(1, r, n);
          const s = t.template;
          null !== s && Ir(t, e, s, 1, n),
            t.firstCreatePass && (t.firstCreatePass = !1),
            t.staticContentQueries && Er(t, e),
            t.staticViewQueries && is(2, t.viewQuery, n);
          const i = t.components;
          null !== i &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) ts(t, e[n]);
            })(e, i);
        } catch (r) {
          throw (t.firstCreatePass && (t.incompleteFirstPass = !0), r);
        } finally {
          (e[2] &= -5), an();
        }
      }
      function Mr(t, e, n, r) {
        const s = e[2];
        if (256 == (256 & s)) return;
        en(e, e[6]);
        const i = Be();
        try {
          je(e),
            (Ue.lFrame.bindingIndex = t.bindingStartIndex),
            null !== n && Ir(t, e, n, 2, r);
          const o = 3 == (3 & s);
          if (!i)
            if (o) {
              const n = t.preOrderCheckHooks;
              null !== n && dn(e, n, null);
            } else {
              const n = t.preOrderHooks;
              null !== n && pn(e, n, 0, null), fn(e, 0);
            }
          if (
            ((function (t) {
              for (let e = wr(t); null !== e; e = br(e)) {
                if (!e[2]) continue;
                const t = e[9];
                for (let e = 0; e < t.length; e++) {
                  const n = t[e],
                    r = n[3];
                  0 == (1024 & n[2]) && Ne(r, 1), (n[2] |= 1024);
                }
              }
            })(e),
            (function (t) {
              for (let e = wr(t); null !== e; e = br(e))
                for (let t = 10; t < e.length; t++) {
                  const n = e[t],
                    r = n[1];
                  Re(n) && Mr(r, n, r.template, n[8]);
                }
            })(e),
            null !== t.contentQueries && Er(t, e),
            !i)
          )
            if (o) {
              const n = t.contentCheckHooks;
              null !== n && dn(e, n);
            } else {
              const n = t.contentHooks;
              null !== n && pn(e, n, 1), fn(e, 1);
            }
          !(function (t, e) {
            try {
              const n = t.expandoInstructions;
              if (null !== n) {
                let r = t.expandoStartIndex,
                  s = -1,
                  i = -1;
                for (let t = 0; t < n.length; t++) {
                  const o = n[t];
                  "number" == typeof o
                    ? o <= 0
                      ? ((i = 0 - o), cn(i), (r += 9 + n[++t]), (s = r))
                      : (r += o)
                    : (null !== o && (Ye(r, s), o(2, e[s])), s++);
                }
              }
            } finally {
              cn(-1);
            }
          })(t, e);
          const a = t.components;
          null !== a &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) Xr(t, e[n]);
            })(e, a);
          const l = t.viewQuery;
          if ((null !== l && is(2, l, r), !i))
            if (o) {
              const n = t.viewCheckHooks;
              null !== n && dn(e, n);
            } else {
              const n = t.viewHooks;
              null !== n && pn(e, n, 2), fn(e, 2);
            }
          !0 === t.firstUpdatePass && (t.firstUpdatePass = !1),
            i || (e[2] &= -73),
            1024 & e[2] && ((e[2] &= -1025), Ne(e[3], -1));
        } finally {
          an();
        }
      }
      function Ar(t, e, n, r) {
        const s = e[10],
          i = !Be(),
          o = Ie(e);
        try {
          i && !o && s.begin && s.begin(), o && Tr(t, e, r), Mr(t, e, n, r);
        } finally {
          i && !o && s.end && s.end();
        }
      }
      function Ir(t, e, n, r, s) {
        const i = ln();
        try {
          cn(-1), 2 & r && e.length > 20 && xr(t, e, 0, Be()), n(r, s);
        } finally {
          cn(i);
        }
      }
      function Rr(t, e, n) {
        Le() &&
          ((function (t, e, n, r) {
            const s = n.directiveStart,
              i = n.directiveEnd;
            t.firstCreatePass || Dn(n, e), ir(r, e);
            const o = n.initialInputs;
            for (let a = s; a < i; a++) {
              const r = t.data[a],
                i = be(r);
              i && Qr(e, n, r);
              const l = zn(e, t, a, n);
              ir(l, e),
                null !== o && Yr(0, a - s, l, r, 0, o),
                i && (Me(n.index, e)[8] = l);
            }
          })(t, e, n, Oe(n, e)),
          128 == (128 & n.flags) &&
            (function (t, e, n) {
              const r = n.directiveStart,
                s = n.directiveEnd,
                i = t.expandoInstructions,
                o = t.firstCreatePass,
                a = n.index - 20,
                l = Ue.lFrame.currentDirectiveIndex;
              try {
                cn(a);
                for (let n = r; n < s; n++) {
                  const r = t.data[n],
                    s = e[n];
                  Ke(n),
                    null !== r.hostBindings ||
                    0 !== r.hostVars ||
                    null !== r.hostAttrs
                      ? zr(r, s)
                      : o && i.push(null);
                }
              } finally {
                cn(-1), Ke(l);
              }
            })(t, e, n));
      }
      function Dr(t, e, n = Oe) {
        const r = e.localNames;
        if (null !== r) {
          let s = e.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const o = r[i + 1],
              a = -1 === o ? n(e, t) : t[o];
            t[s++] = a;
          }
        }
      }
      function jr(t) {
        const e = t.tView;
        return null === e || e.incompleteFirstPass
          ? (t.tView = Nr(
              1,
              -1,
              t.template,
              t.decls,
              t.vars,
              t.directiveDefs,
              t.pipeDefs,
              t.viewQuery,
              t.schemas,
              t.consts
            ))
          : e;
      }
      function Nr(t, e, n, r, s, i, o, a, l, c) {
        const u = 20 + r,
          h = u + s,
          d = (function (t, e) {
            const n = [];
            for (let r = 0; r < e; r++) n.push(r < t ? null : vr);
            return n;
          })(u, h);
        return (d[1] = {
          type: t,
          id: e,
          blueprint: d,
          template: n,
          queries: null,
          viewQuery: a,
          node: null,
          data: d.slice().fill(null, u),
          bindingStartIndex: u,
          expandoStartIndex: h,
          expandoInstructions: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof i ? i() : i,
          pipeRegistry: "function" == typeof o ? o() : o,
          firstChild: null,
          schemas: l,
          consts: c,
          incompleteFirstPass: !1,
        });
      }
      function Ur(t, e, n, r, s, i) {
        return {
          type: n,
          index: r,
          injectorIndex: e ? e.injectorIndex : -1,
          directiveStart: -1,
          directiveEnd: -1,
          directiveStylingLast: -1,
          propertyBindings: null,
          flags: 0,
          providerIndexes: 0,
          tagName: s,
          attrs: i,
          mergedAttrs: null,
          localNames: null,
          initialInputs: void 0,
          inputs: null,
          outputs: null,
          tViews: null,
          next: null,
          projectionNext: null,
          child: null,
          parent: e,
          projection: null,
          styles: null,
          stylesWithoutHost: null,
          residualStyles: void 0,
          classes: null,
          classesWithoutHost: null,
          residualClasses: void 0,
          classBindings: 0,
          styleBindings: 0,
        };
      }
      function Lr(t, e, n) {
        for (let r in t)
          if (t.hasOwnProperty(r)) {
            const s = t[r];
            (n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(e, s)
              : (n[r] = [e, s]);
          }
        return n;
      }
      function Fr(t, e, n, r, s, i, o, a) {
        const l = Oe(e, n);
        let c,
          u = e.inputs;
        var h;
        !a && null != u && (c = u[r])
          ? (us(t, n, c, r, s),
            _e(e) &&
              (function (t, e) {
                const n = Me(e, t);
                16 & n[2] || (n[2] |= 64);
              })(n, e.index))
          : 3 === e.type &&
            ((r =
              "class" === (h = r)
                ? "className"
                : "for" === h
                ? "htmlFor"
                : "formaction" === h
                ? "formAction"
                : "innerHtml" === h
                ? "innerHTML"
                : "readonly" === h
                ? "readOnly"
                : "tabindex" === h
                ? "tabIndex"
                : h),
            (s = null != o ? o(s, e.tagName || "", r) : s),
            xe(i)
              ? i.setProperty(l, r, s)
              : wn(r) || (l.setProperty ? l.setProperty(r, s) : (l[r] = s)));
      }
      function Hr(t, e, n, r) {
        let s = !1;
        if (Le()) {
          const i = (function (t, e, n) {
              const r = t.directiveRegistry;
              let s = null;
              if (r)
                for (let i = 0; i < r.length; i++) {
                  const o = r[i];
                  gr(n, o.selectors, !1) &&
                    (s || (s = []),
                    Ln(Dn(n, e), t, o.type),
                    be(o)
                      ? (2 & n.flags && or(n), Br(t, n), s.unshift(o))
                      : s.push(o));
                }
              return s;
            })(t, e, n),
            o = null === r ? null : { "": -1 };
          if (null !== i) {
            let r = 0;
            (s = !0), Gr(n, t.data.length, i.length);
            for (let t = 0; t < i.length; t++) {
              const e = i[t];
              e.providersResolver && e.providersResolver(e);
            }
            qr(t, n, i.length);
            let a = !1,
              l = !1;
            for (let s = 0; s < i.length; s++) {
              const c = i[s];
              (n.mergedAttrs = bn(n.mergedAttrs, c.hostAttrs)),
                Zr(t, e, c),
                Wr(t.data.length - 1, c, o),
                null !== c.contentQueries && (n.flags |= 8),
                (null === c.hostBindings &&
                  null === c.hostAttrs &&
                  0 === c.hostVars) ||
                  (n.flags |= 128),
                !a &&
                  (c.onChanges || c.onInit || c.doCheck) &&
                  ((t.preOrderHooks || (t.preOrderHooks = [])).push(
                    n.index - 20
                  ),
                  (a = !0)),
                l ||
                  (!c.onChanges && !c.doCheck) ||
                  ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(
                    n.index - 20
                  ),
                  (l = !0)),
                Vr(t, c),
                (r += c.hostVars);
            }
            !(function (t, e) {
              const n = e.directiveEnd,
                r = t.data,
                s = e.attrs,
                i = [];
              let o = null,
                a = null;
              for (let l = e.directiveStart; l < n; l++) {
                const t = r[l],
                  n = t.inputs,
                  c = null === s || ur(e) ? null : Kr(n, s);
                i.push(c), (o = Lr(n, l, o)), (a = Lr(t.outputs, l, a));
              }
              null !== o &&
                (o.hasOwnProperty("class") && (e.flags |= 16),
                o.hasOwnProperty("style") && (e.flags |= 32)),
                (e.initialInputs = i),
                (e.inputs = o),
                (e.outputs = a);
            })(t, n),
              $r(t, e, r);
          }
          o &&
            (function (t, e, n) {
              if (e) {
                const r = (t.localNames = []);
                for (let t = 0; t < e.length; t += 2) {
                  const s = n[e[t + 1]];
                  if (null == s)
                    throw new Error(`Export of name '${e[t + 1]}' not found!`);
                  r.push(e[t], s);
                }
              }
            })(n, r, o);
        }
        return (n.mergedAttrs = bn(n.mergedAttrs, n.attrs)), s;
      }
      function Vr(t, e) {
        const n = t.expandoInstructions;
        n.push(e.hostBindings), 0 !== e.hostVars && n.push(e.hostVars);
      }
      function $r(t, e, n) {
        for (let r = 0; r < n; r++)
          e.push(vr), t.blueprint.push(vr), t.data.push(null);
      }
      function zr(t, e) {
        null !== t.hostBindings && t.hostBindings(1, e);
      }
      function qr(t, e, n) {
        const r = 20 - e.index,
          s = t.data.length - (65535 & e.providerIndexes);
        (t.expandoInstructions || (t.expandoInstructions = [])).push(r, s, n);
      }
      function Br(t, e) {
        (e.flags |= 2), (t.components || (t.components = [])).push(e.index);
      }
      function Wr(t, e, n) {
        if (n) {
          if (e.exportAs)
            for (let r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
          be(e) && (n[""] = t);
        }
      }
      function Gr(t, e, n) {
        (t.flags |= 1),
          (t.directiveStart = e),
          (t.directiveEnd = e + n),
          (t.providerIndexes = e);
      }
      function Zr(t, e, n) {
        t.data.push(n);
        const r = n.factory || (n.factory = fe(n.type)),
          s = new yn(r, be(n), null);
        t.blueprint.push(s), e.push(s);
      }
      function Qr(t, e, n) {
        const r = Oe(e, t),
          s = jr(n),
          i = t[10],
          o = es(
            t,
            Or(t, s, null, n.onPush ? 64 : 16, r, e, i, i.createRenderer(r, n))
          );
        t[e.index] = o;
      }
      function Yr(t, e, n, r, s, i) {
        const o = i[e];
        if (null !== o) {
          const t = r.setInput;
          for (let e = 0; e < o.length; ) {
            const s = o[e++],
              i = o[e++],
              a = o[e++];
            null !== t ? r.setInput(n, a, s, i) : (n[i] = a);
          }
        }
      }
      function Kr(t, e) {
        let n = null,
          r = 0;
        for (; r < e.length; ) {
          const s = e[r];
          if (0 !== s)
            if (5 !== s) {
              if ("number" == typeof s) break;
              t.hasOwnProperty(s) &&
                (null === n && (n = []), n.push(s, t[s], e[r + 1])),
                (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function Jr(t, e, n, r) {
        return new Array(t, !0, !1, e, null, 0, r, n, null, null);
      }
      function Xr(t, e) {
        const n = Me(e, t);
        if (Re(n)) {
          const t = n[1];
          80 & n[2]
            ? Mr(t, n, t.template, n[8])
            : n[5] > 0 &&
              (function t(e) {
                for (let r = wr(e); null !== r; r = br(r))
                  for (let e = 10; e < r.length; e++) {
                    const n = r[e];
                    if (1024 & n[2]) {
                      const t = n[1];
                      Mr(t, n, t.template, n[8]);
                    } else n[5] > 0 && t(n);
                  }
                const n = e[1].components;
                if (null !== n)
                  for (let r = 0; r < n.length; r++) {
                    const s = Me(n[r], e);
                    Re(s) && s[5] > 0 && t(s);
                  }
              })(n);
        }
      }
      function ts(t, e) {
        const n = Me(e, t),
          r = n[1];
        !(function (t, e) {
          for (let n = e.length; n < t.blueprint.length; n++)
            e.push(t.blueprint[n]);
        })(r, n),
          Tr(r, n, n[8]);
      }
      function es(t, e) {
        return t[13] ? (t[14][4] = e) : (t[13] = e), (t[14] = e), e;
      }
      function ns(t) {
        for (; t; ) {
          t[2] |= 64;
          const e = _r(t);
          if (Ce(t) && !e) return t;
          t = e;
        }
        return null;
      }
      function rs(t, e, n) {
        const r = e[10];
        r.begin && r.begin();
        try {
          Mr(t, e, t.template, n);
        } catch (s) {
          throw (cs(e, s), s);
        } finally {
          r.end && r.end();
        }
      }
      function ss(t) {
        !(function (t) {
          for (let e = 0; e < t.components.length; e++) {
            const n = t.components[e],
              r = Ae(n),
              s = r[1];
            Ar(s, r, s.template, n);
          }
        })(t[8]);
      }
      function is(t, e, n) {
        Xe(0), e(t, n);
      }
      const os = (() => Promise.resolve(null))();
      function as(t) {
        return t[7] || (t[7] = []);
      }
      function ls(t) {
        return t.cleanup || (t.cleanup = []);
      }
      function cs(t, e) {
        const n = t[9],
          r = n ? n.get(Yn, null) : null;
        r && r.handleError(e);
      }
      function us(t, e, n, r, s) {
        for (let i = 0; i < n.length; ) {
          const o = n[i++],
            a = n[i++],
            l = e[o],
            c = t.data[o];
          null !== c.setInput ? c.setInput(l, s, r, a) : (l[a] = s);
        }
      }
      function hs(t, e, n) {
        const r = (function (t, e) {
            return ke(e[t + 20]);
          })(e, t),
          s = t[11];
        xe(s) ? s.setValue(r, n) : (r.textContent = n);
      }
      function ds(t, e) {
        const n = e[3];
        return -1 === t.index ? (ye(n) ? n : null) : n;
      }
      function ps(t, e) {
        const n = ds(t, e);
        return n ? xs(e[11], n[7]) : null;
      }
      function fs(t, e, n, r, s) {
        if (null != r) {
          let i,
            o = !1;
          ye(r) ? (i = r) : me(r) && ((o = !0), (r = r[0]));
          const a = ke(r);
          0 === t && null !== n
            ? null == s
              ? Cs(e, n, a)
              : bs(e, n, a, s || null)
            : 1 === t && null !== n
            ? bs(e, n, a, s || null)
            : 2 === t
            ? (function (t, e, n) {
                const r = xs(t, e);
                r &&
                  (function (t, e, n, r) {
                    xe(t) ? t.removeChild(e, n, r) : e.removeChild(n);
                  })(t, r, e, n);
              })(e, a, o)
            : 3 === t && e.destroyNode(a),
            null != i &&
              (function (t, e, n, r, s) {
                const i = n[7];
                i !== ke(n) && fs(e, t, r, i, s);
                for (let o = 10; o < n.length; o++) {
                  const s = n[o];
                  Ps(s[1], s, t, e, r, i);
                }
              })(e, t, i, n, s);
        }
      }
      function gs(t, e, n, r) {
        const s = ps(t.node, e);
        s && Ps(t, e, e[11], n ? 1 : 2, s, r);
      }
      function ms(t, e) {
        const n = t[9],
          r = n.indexOf(e);
        1024 & e[2] && Ne(e[3], -1), n.splice(r, 1);
      }
      function ys(t, e) {
        if (t.length <= 10) return;
        const n = 10 + e,
          r = t[n];
        if (r) {
          const s = r[17];
          null !== s && s !== t && ms(s, r), e > 0 && (t[n - 1][4] = r[4]);
          const i = Xt(t, 10 + e);
          gs(r[1], r, !1, null);
          const o = i[19];
          null !== o && o.detachView(i[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -129);
        }
        return r;
      }
      function vs(t, e) {
        if (!(256 & e[2])) {
          const n = e[11];
          xe(n) && n.destroyNode && Ps(t, e, n, 3, null, null),
            (function (t) {
              let e = t[13];
              if (!e) return ws(t[1], t);
              for (; e; ) {
                let n = null;
                if (me(e)) n = e[13];
                else {
                  const t = e[10];
                  t && (n = t);
                }
                if (!n) {
                  for (; e && !e[4] && e !== t; )
                    me(e) && ws(e[1], e), (e = _s(e, t));
                  null === e && (e = t), me(e) && ws(e[1], e), (n = e && e[4]);
                }
                e = n;
              }
            })(e);
        }
      }
      function _s(t, e) {
        let n;
        return me(t) && (n = t[6]) && 2 === n.type
          ? ds(n, t)
          : t[3] === e
          ? null
          : t[3];
      }
      function ws(t, e) {
        if (!(256 & e[2])) {
          (e[2] &= -129),
            (e[2] |= 256),
            (function (t, e) {
              let n;
              if (null != t && null != (n = t.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const t = e[n[r]];
                  if (!(t instanceof yn)) {
                    const e = n[r + 1];
                    if (Array.isArray(e))
                      for (let n = 0; n < e.length; n += 2)
                        e[n + 1].call(t[e[n]]);
                    else e.call(t);
                  }
                }
            })(t, e),
            (function (t, e) {
              const n = t.cleanup;
              if (null !== n) {
                const t = e[7];
                for (let r = 0; r < n.length - 1; r += 2)
                  if ("string" == typeof n[r]) {
                    const s = n[r + 1],
                      i = "function" == typeof s ? s(e) : ke(e[s]),
                      o = t[n[r + 2]],
                      a = n[r + 3];
                    "boolean" == typeof a
                      ? i.removeEventListener(n[r], o, a)
                      : a >= 0
                      ? t[a]()
                      : t[-a].unsubscribe(),
                      (r += 2);
                  } else n[r].call(t[n[r + 1]]);
                e[7] = null;
              }
            })(t, e);
          const n = e[6];
          n && 3 === n.type && xe(e[11]) && e[11].destroy();
          const r = e[17];
          if (null !== r && ye(e[3])) {
            r !== e[3] && ms(r, e);
            const n = e[19];
            null !== n && n.detachView(t);
          }
        }
      }
      function bs(t, e, n, r) {
        xe(t) ? t.insertBefore(e, n, r) : e.insertBefore(n, r, !0);
      }
      function Cs(t, e, n) {
        xe(t) ? t.appendChild(e, n) : e.appendChild(n);
      }
      function Ss(t, e, n, r) {
        null !== r ? bs(t, e, n, r) : Cs(t, e, n);
      }
      function xs(t, e) {
        return xe(t) ? t.parentNode(e) : e.parentNode;
      }
      function Es(t, e, n, r) {
        const s = (function (t, e, n) {
          let r = e.parent;
          for (; null != r && (4 === r.type || 5 === r.type); )
            r = (e = r).parent;
          if (null == r) {
            const t = n[6];
            return 2 === t.type ? ps(t, n) : n[0];
          }
          if (e && 5 === e.type && 4 & e.flags) return Oe(e, n).parentNode;
          if (2 & r.flags) {
            const e = t.data,
              n = e[e[r.index].directiveStart].encapsulation;
            if (n !== ee.ShadowDom && n !== ee.Native) return null;
          }
          return Oe(r, n);
        })(t, r, e);
        if (null != s) {
          const t = e[11],
            i = (function (t, e) {
              if (2 === t.type) {
                const n = ds(t, e);
                return null === n ? null : ks(n.indexOf(e, 10) - 10, n);
              }
              return 4 === t.type || 5 === t.type ? Oe(t, e) : null;
            })(r.parent || e[6], e);
          if (Array.isArray(n))
            for (let e = 0; e < n.length; e++) Ss(t, s, n[e], i);
          else Ss(t, s, n, i);
        }
      }
      function ks(t, e) {
        const n = 10 + t + 1;
        if (n < e.length) {
          const t = e[n],
            r = t[1].firstChild;
          if (null !== r)
            return (function t(e, n) {
              if (null !== n) {
                const r = n.type;
                if (3 === r) return Oe(n, e);
                if (0 === r) return ks(-1, e[n.index]);
                if (4 === r || 5 === r) {
                  const r = n.child;
                  if (null !== r) return t(e, r);
                  {
                    const t = e[n.index];
                    return ye(t) ? ks(-1, t) : ke(t);
                  }
                }
                {
                  const r = e[16],
                    s = r[6],
                    i = _r(r),
                    o = s.projection[n.projection];
                  return null != o ? t(i, o) : t(e, n.next);
                }
              }
              return null;
            })(t, r);
        }
        return e[7];
      }
      function Os(t, e, n, r, s, i, o) {
        for (; null != n; ) {
          const a = r[n.index],
            l = n.type;
          o && 0 === e && (a && ir(ke(a), r), (n.flags |= 4)),
            64 != (64 & n.flags) &&
              (4 === l || 5 === l
                ? (Os(t, e, n.child, r, s, i, !1), fs(e, t, s, a, i))
                : 1 === l
                ? Ts(t, e, r, n, s, i)
                : fs(e, t, s, a, i)),
            (n = o ? n.projectionNext : n.next);
        }
      }
      function Ps(t, e, n, r, s, i) {
        Os(n, r, t.node.child, e, s, i, !1);
      }
      function Ts(t, e, n, r, s, i) {
        const o = n[16],
          a = o[6].projection[r.projection];
        if (Array.isArray(a))
          for (let l = 0; l < a.length; l++) fs(e, t, s, a[l], i);
        else Os(t, e, a, o[3], s, i, !0);
      }
      function Ms(t, e, n) {
        xe(t) ? t.setAttribute(e, "style", n) : (e.style.cssText = n);
      }
      function As(t, e, n) {
        xe(t)
          ? "" === n
            ? t.removeAttribute(e, "class")
            : t.setAttribute(e, "class", n)
          : (e.className = n);
      }
      class Is {
        constructor(t, e) {
          (this._lView = t),
            (this._cdRefInjectingView = e),
            (this._appRef = null),
            (this._viewContainerRef = null);
        }
        get rootNodes() {
          const t = this._lView;
          return null == t[0]
            ? (function t(e, n, r, s, i = !1) {
                for (; null !== r; ) {
                  const o = n[r.index];
                  if ((null !== o && s.push(ke(o)), ye(o)))
                    for (let e = 10; e < o.length; e++) {
                      const n = o[e],
                        r = n[1].firstChild;
                      null !== r && t(n[1], n, r, s);
                    }
                  const a = r.type;
                  if (4 === a || 5 === a) t(e, n, r.child, s);
                  else if (1 === a) {
                    const e = n[16],
                      i = e[6].projection[r.projection];
                    if (Array.isArray(i)) s.push(...i);
                    else {
                      const n = _r(e);
                      t(n[1], n, i, s, !0);
                    }
                  }
                  r = i ? r.projectionNext : r.next;
                }
                return s;
              })(t[1], t, t[6].child, [])
            : [];
        }
        get context() {
          return this._lView[8];
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._viewContainerRef) {
            const t = this._viewContainerRef.indexOf(this);
            t > -1 && this._viewContainerRef.detach(t),
              (this._viewContainerRef = null);
          }
          vs(this._lView[1], this._lView);
        }
        onDestroy(t) {
          var e, n, r;
          (e = this._lView[1]),
            (r = t),
            as((n = this._lView)).push(r),
            e.firstCreatePass && ls(e).push(n[7].length - 1, null);
        }
        markForCheck() {
          ns(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          rs(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function (t, e, n) {
            We(!0);
            try {
              rs(t, e, n);
            } finally {
              We(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef(t) {
          if (this._appRef)
            throw new Error(
              "This view is already attached directly to the ApplicationRef!"
            );
          this._viewContainerRef = t;
        }
        detachFromAppRef() {
          var t;
          (this._appRef = null),
            Ps(this._lView[1], (t = this._lView), t[11], 2, null, null);
        }
        attachToAppRef(t) {
          if (this._viewContainerRef)
            throw new Error(
              "This view is already attached to a ViewContainer!"
            );
          this._appRef = t;
        }
      }
      class Rs extends Is {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          ss(this._view);
        }
        checkNoChanges() {
          !(function (t) {
            We(!0);
            try {
              ss(t);
            } finally {
              We(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      let Ds, js, Ns;
      function Us(t, e, n) {
        return Ds || (Ds = class extends t {}), new Ds(Oe(e, n));
      }
      function Ls(t, e, n, r) {
        return (
          js ||
            (js = class extends t {
              constructor(t, e, n) {
                super(),
                  (this._declarationView = t),
                  (this._declarationTContainer = e),
                  (this.elementRef = n);
              }
              createEmbeddedView(t) {
                const e = this._declarationTContainer.tViews,
                  n = Or(this._declarationView, e, t, 16, null, e.node);
                n[17] = this._declarationView[
                  this._declarationTContainer.index
                ];
                const r = this._declarationView[19];
                return (
                  null !== r && (n[19] = r.createEmbeddedView(e)),
                  Tr(e, n, t),
                  new Is(n)
                );
              }
            }),
          0 === n.type ? new js(r, n, Us(e, n, r)) : null
        );
      }
      function Fs(t, e, n, r) {
        let s;
        Ns ||
          (Ns = class extends t {
            constructor(t, e, n) {
              super(),
                (this._lContainer = t),
                (this._hostTNode = e),
                (this._hostView = n);
            }
            get element() {
              return Us(e, this._hostTNode, this._hostView);
            }
            get injector() {
              return new Wn(this._hostTNode, this._hostView);
            }
            get parentInjector() {
              const t = Un(this._hostTNode, this._hostView),
                e = kn(t, this._hostView),
                n = (function (t, e, n) {
                  if (n.parent && -1 !== n.parent.injectorIndex) {
                    const t = n.parent.injectorIndex;
                    let e = n.parent;
                    for (; null != e.parent && t == e.parent.injectorIndex; )
                      e = e.parent;
                    return e;
                  }
                  let r = En(t),
                    s = e,
                    i = e[6];
                  for (; r > 1; ) (s = s[15]), (i = s[6]), r--;
                  return i;
                })(t, this._hostView, this._hostTNode);
              return Sn(t) && null != n
                ? new Wn(n, e)
                : new Wn(null, this._hostView);
            }
            clear() {
              for (; this.length > 0; ) this.remove(this.length - 1);
            }
            get(t) {
              return (
                (null !== this._lContainer[8] && this._lContainer[8][t]) || null
              );
            }
            get length() {
              return this._lContainer.length - 10;
            }
            createEmbeddedView(t, e, n) {
              const r = t.createEmbeddedView(e || {});
              return this.insert(r, n), r;
            }
            createComponent(t, e, n, r, s) {
              const i = n || this.parentInjector;
              if (!s && null == t.ngModule && i) {
                const t = i.get(Qt, null);
                t && (s = t);
              }
              const o = t.create(i, r, void 0, s);
              return this.insert(o.hostView, e), o;
            }
            insert(t, e) {
              const n = t._lView,
                r = n[1];
              if (t.destroyed)
                throw new Error(
                  "Cannot insert a destroyed View in a ViewContainer!"
                );
              if ((this.allocateContainerIfNeeded(), ye(n[3]))) {
                const e = this.indexOf(t);
                if (-1 !== e) this.detach(e);
                else {
                  const e = n[3],
                    r = new Ns(e, e[6], e[3]);
                  r.detach(r.indexOf(t));
                }
              }
              const s = this._adjustIndex(e);
              return (
                (function (t, e, n, r) {
                  const s = 10 + r,
                    i = n.length;
                  r > 0 && (n[s - 1][4] = e),
                    r < i - 10
                      ? ((e[4] = n[s]), Jt(n, 10 + r, e))
                      : (n.push(e), (e[4] = null)),
                    (e[3] = n);
                  const o = e[17];
                  null !== o &&
                    n !== o &&
                    (function (t, e) {
                      const n = t[9];
                      e[16] !== e[3][3][16] && (t[2] = !0),
                        null === n ? (t[9] = [e]) : n.push(e);
                    })(o, e);
                  const a = e[19];
                  null !== a && a.insertView(t), (e[2] |= 128);
                })(r, n, this._lContainer, s),
                gs(r, n, !0, ks(s, this._lContainer)),
                t.attachToViewContainerRef(this),
                Jt(this._lContainer[8], s, t),
                t
              );
            }
            move(t, e) {
              if (t.destroyed)
                throw new Error(
                  "Cannot move a destroyed View in a ViewContainer!"
                );
              return this.insert(t, e);
            }
            indexOf(t) {
              const e = this._lContainer[8];
              return null !== e ? e.indexOf(t) : -1;
            }
            remove(t) {
              this.allocateContainerIfNeeded();
              const e = this._adjustIndex(t, -1);
              !(function (t, e) {
                const n = ys(t, e);
                n && vs(n[1], n);
              })(this._lContainer, e),
                Xt(this._lContainer[8], e);
            }
            detach(t) {
              this.allocateContainerIfNeeded();
              const e = this._adjustIndex(t, -1),
                n = ys(this._lContainer, e);
              return n && null != Xt(this._lContainer[8], e) ? new Is(n) : null;
            }
            _adjustIndex(t, e = 0) {
              return null == t ? this.length + e : t;
            }
            allocateContainerIfNeeded() {
              null === this._lContainer[8] && (this._lContainer[8] = []);
            }
          });
        const i = r[n.index];
        if (ye(i)) s = i;
        else {
          let t;
          if (4 === n.type) t = ke(i);
          else if (((t = r[11].createComment("")), Ce(r))) {
            const e = r[11],
              s = Oe(n, r);
            bs(
              e,
              xs(e, s),
              t,
              (function (t, e) {
                return xe(t) ? t.nextSibling(e) : e.nextSibling;
              })(e, s)
            );
          } else Es(r[1], r, t, n);
          (r[n.index] = s = Jr(i, r, t, n)), es(r, s);
        }
        return new Ns(s, n, r);
      }
      let Hs = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => Vs()), t;
      })();
      const Vs = function (t = !1) {
          return (function (t, e, n) {
            if (!n && _e(t)) {
              const n = Me(t.index, e);
              return new Is(n, n);
            }
            return 3 === t.type || 0 === t.type || 4 === t.type || 5 === t.type
              ? new Is(e[16], e)
              : null;
          })($e(), Fe(), t);
        },
        $s = new jt("Set Injector scope."),
        zs = {},
        qs = {},
        Bs = [];
      let Ws = void 0;
      function Gs() {
        return void 0 === Ws && (Ws = new Zt()), Ws;
      }
      function Zs(t, e = null, n = null, r) {
        return new Qs(t, n, e || Gs(), r);
      }
      class Qs {
        constructor(t, e, n, r = null) {
          (this.parent = n),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const s = [];
          e && Kt(e, (n) => this.processProvider(n, t, e)),
            Kt([t], (t) => this.processInjectorType(t, [], s)),
            this.records.set(Nt, Ks(void 0, this));
          const i = this.records.get($s);
          (this.scope = null != i ? i.value : null),
            (this.source = r || ("object" == typeof t ? null : vt(t)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach((t) => t.ngOnDestroy());
          } finally {
            this.records.clear(),
              this.onDestroy.clear(),
              this.injectorDefTypes.clear();
          }
        }
        get(t, e = Ut, n = ot.Default) {
          this.assertNotDestroyed();
          const r = $t(this);
          try {
            if (!(n & ot.SkipSelf)) {
              let e = this.records.get(t);
              if (void 0 === e) {
                const n =
                  ("function" == typeof (s = t) ||
                    ("object" == typeof s && s instanceof jt)) &&
                  ut(t);
                (e = n && this.injectableDefInScope(n) ? Ks(Ys(t), zs) : null),
                  this.records.set(t, e);
              }
              if (null != e) return this.hydrate(t, e);
            }
            return (n & ot.Self ? Gs() : this.parent).get(
              t,
              (e = n & ot.Optional && e === Ut ? null : e)
            );
          } catch (i) {
            if ("NullInjectorError" === i.name) {
              if (
                ((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(vt(t)),
                r)
              )
                throw i;
              return (function (t, e, n, r) {
                const s = t.ngTempTokenPath;
                throw (
                  (e.__source && s.unshift(e.__source),
                  (t.message = (function (t, e, n, r = null) {
                    t =
                      t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1)
                        ? t.substr(2)
                        : t;
                    let s = vt(e);
                    if (Array.isArray(e)) s = e.map(vt).join(" -> ");
                    else if ("object" == typeof e) {
                      let t = [];
                      for (let n in e)
                        if (e.hasOwnProperty(n)) {
                          let r = e[n];
                          t.push(
                            n +
                              ":" +
                              ("string" == typeof r ? JSON.stringify(r) : vt(r))
                          );
                        }
                      s = `{${t.join(", ")}}`;
                    }
                    return `${n}${r ? "(" + r + ")" : ""}[${s}]: ${t.replace(
                      Lt,
                      "\n  "
                    )}`;
                  })("\n" + t.message, s, n, r)),
                  (t.ngTokenPath = s),
                  (t.ngTempTokenPath = null),
                  t)
                );
              })(i, t, "R3InjectorError", this.source);
            }
            throw i;
          } finally {
            $t(r);
          }
          var s;
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach((t) => this.get(t));
        }
        toString() {
          const t = [];
          return (
            this.records.forEach((e, n) => t.push(vt(n))),
            `R3Injector[${t.join(", ")}]`
          );
        }
        assertNotDestroyed() {
          if (this._destroyed)
            throw new Error("Injector has already been destroyed.");
        }
        processInjectorType(t, e, n) {
          if (!(t = Ct(t))) return !1;
          let r = dt(t);
          const s = (null == r && t.ngModule) || void 0,
            i = void 0 === s ? t : s,
            o = -1 !== n.indexOf(i);
          if ((void 0 !== s && (r = dt(s)), null == r)) return !1;
          if (null != r.imports && !o) {
            let t;
            n.push(i);
            try {
              Kt(r.imports, (r) => {
                this.processInjectorType(r, e, n) &&
                  (void 0 === t && (t = []), t.push(r));
              });
            } finally {
            }
            if (void 0 !== t)
              for (let e = 0; e < t.length; e++) {
                const { ngModule: n, providers: r } = t[e];
                Kt(r, (t) => this.processProvider(t, n, r || Bs));
              }
          }
          this.injectorDefTypes.add(i), this.records.set(i, Ks(r.factory, zs));
          const a = r.providers;
          if (null != a && !o) {
            const e = t;
            Kt(a, (t) => this.processProvider(t, e, a));
          }
          return void 0 !== s && void 0 !== t.providers;
        }
        processProvider(t, e, n) {
          let r = Xs((t = Ct(t))) ? t : Ct(t && t.provide);
          const s = (function (t, e, n) {
            return Js(t)
              ? Ks(void 0, t.useValue)
              : Ks(
                  (function (t, e, n) {
                    let r = void 0;
                    if (Xs(t)) {
                      const e = Ct(t);
                      return fe(e) || Ys(e);
                    }
                    if (Js(t)) r = () => Ct(t.useValue);
                    else if ((s = t) && s.useFactory)
                      r = () => t.useFactory(...Gt(t.deps || []));
                    else if (
                      (function (t) {
                        return !(!t || !t.useExisting);
                      })(t)
                    )
                      r = () => Bt(Ct(t.useExisting));
                    else {
                      const s = Ct(t && (t.useClass || t.provide));
                      if (
                        (s ||
                          (function (t, e, n) {
                            let r = "";
                            throw (
                              (t &&
                                e &&
                                (r = ` - only instances of Provider and Type are allowed, got: [${e
                                  .map((t) => (t == n ? "?" + n + "?" : "..."))
                                  .join(", ")}]`),
                              new Error(
                                `Invalid provider for the NgModule '${vt(t)}'` +
                                  r
                              ))
                            );
                          })(e, n, t),
                        !(function (t) {
                          return !!t.deps;
                        })(t))
                      )
                        return fe(s) || Ys(s);
                      r = () => new s(...Gt(t.deps));
                    }
                    var s;
                    return r;
                  })(t, e, n),
                  zs
                );
          })(t, e, n);
          if (Xs(t) || !0 !== t.multi) {
            const t = this.records.get(r);
            t && void 0 !== t.multi && ar();
          } else {
            let e = this.records.get(r);
            e
              ? void 0 === e.multi && ar()
              : ((e = Ks(void 0, zs, !0)),
                (e.factory = () => Gt(e.multi)),
                this.records.set(r, e)),
              (r = t),
              e.multi.push(t);
          }
          this.records.set(r, s);
        }
        hydrate(t, e) {
          var n;
          return (
            e.value === qs
              ? (function (t) {
                  throw new Error("Cannot instantiate cyclic dependency! " + t);
                })(vt(t))
              : e.value === zs && ((e.value = qs), (e.value = e.factory())),
            "object" == typeof e.value &&
              e.value &&
              null !== (n = e.value) &&
              "object" == typeof n &&
              "function" == typeof n.ngOnDestroy &&
              this.onDestroy.add(e.value),
            e.value
          );
        }
        injectableDefInScope(t) {
          return (
            !!t.providedIn &&
            ("string" == typeof t.providedIn
              ? "any" === t.providedIn || t.providedIn === this.scope
              : this.injectorDefTypes.has(t.providedIn))
          );
        }
      }
      function Ys(t) {
        const e = ut(t),
          n = null !== e ? e.factory : fe(t);
        if (null !== n) return n;
        const r = dt(t);
        if (null !== r) return r.factory;
        if (t instanceof jt)
          throw new Error(`Token ${vt(t)} is missing a \u0275prov definition.`);
        if (t instanceof Function)
          return (function (t) {
            const e = t.length;
            if (e > 0) {
              const n = (function (t, e) {
                const n = [];
                for (let r = 0; r < t; r++) n.push("?");
                return n;
              })(e);
              throw new Error(
                `Can't resolve all parameters for ${vt(t)}: (${n.join(", ")}).`
              );
            }
            const n = (function (t) {
              const e = t && (t[pt] || t[mt] || (t[gt] && t[gt]()));
              if (e) {
                const n = (function (t) {
                  if (t.hasOwnProperty("name")) return t.name;
                  const e = ("" + t).match(/^function\s*([^\s(]+)/);
                  return null === e ? "" : e[1];
                })(t);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in v10. Please add @Injectable() to the "${n}" class.`
                  ),
                  e
                );
              }
              return null;
            })(t);
            return null !== n ? () => n.factory(t) : () => new t();
          })(t);
        throw new Error("unreachable");
      }
      function Ks(t, e, n = !1) {
        return { factory: t, value: e, multi: n ? [] : void 0 };
      }
      function Js(t) {
        return null !== t && "object" == typeof t && Ft in t;
      }
      function Xs(t) {
        return "function" == typeof t;
      }
      const ti = function (t, e, n) {
        return (function (t, e = null, n = null, r) {
          const s = Zs(t, e, n, r);
          return s._resolveInjectorDefTypes(), s;
        })({ name: n }, e, t, n);
      };
      let ei = (() => {
        class t {
          static create(t, e) {
            return Array.isArray(t)
              ? ti(t, e, "")
              : ti(t.providers, t.parent, t.name || "");
          }
        }
        return (
          (t.THROW_IF_NOT_FOUND = Ut),
          (t.NULL = new Zt()),
          (t.ɵprov = lt({
            token: t,
            providedIn: "any",
            factory: () => Bt(Nt),
          })),
          (t.__NG_ELEMENT_ID__ = -1),
          t
        );
      })();
      const ni = new jt("AnalyzeForEntryComponents");
      let ri = new Map();
      const si = new Set();
      function ii(t) {
        return "string" == typeof t ? t : t.text();
      }
      function oi(t, e, n) {
        let r = n ? t.styles : null,
          s = n ? t.classes : null,
          i = 0;
        if (null !== e)
          for (let o = 0; o < e.length; o++) {
            const t = e[o];
            "number" == typeof t
              ? (i = t)
              : 1 == i
              ? (s = _t(s, t))
              : 2 == i && (r = _t(r, t + ": " + e[++o] + ";"));
          }
        n ? (t.styles = r) : (t.stylesWithoutHost = r),
          n ? (t.classes = s) : (t.classesWithoutHost = s);
      }
      let ai = null;
      function li() {
        if (!ai) {
          const t = Ot.Symbol;
          if (t && t.iterator) ai = t.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let e = 0; e < t.length; ++e) {
              const n = t[e];
              "entries" !== n &&
                "size" !== n &&
                Map.prototype[n] === Map.prototype.entries &&
                (ai = n);
            }
          }
        }
        return ai;
      }
      function ci(t, e) {
        return (
          t === e ||
          ("number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e))
        );
      }
      class ui {
        constructor(t) {
          this.wrapped = t;
        }
        static wrap(t) {
          return new ui(t);
        }
        static unwrap(t) {
          return ui.isWrapped(t) ? t.wrapped : t;
        }
        static isWrapped(t) {
          return t instanceof ui;
        }
      }
      function hi(t) {
        return (
          !!di(t) && (Array.isArray(t) || (!(t instanceof Map) && li() in t))
        );
      }
      function di(t) {
        return null !== t && ("function" == typeof t || "object" == typeof t);
      }
      function pi(t, e, n) {
        return (t[e] = n);
      }
      function fi(t, e, n) {
        return !Object.is(t[e], n) && ((t[e] = n), !0);
      }
      function gi(t, e, n, r) {
        const s = fi(t, e, n);
        return fi(t, e + 1, r) || s;
      }
      function mi(t, e, n, r) {
        const s = Fe();
        return (
          fi(s, Qe(), e) &&
            (He(),
            (function (t, e, n, r, s, i) {
              const o = Oe(t, e),
                a = e[11];
              if (null == r)
                xe(a) ? a.removeAttribute(o, n, i) : o.removeAttribute(n);
              else {
                const e = null == s ? On(r) : s(r, t.tagName || "", n);
                xe(a)
                  ? a.setAttribute(o, n, e, i)
                  : i
                  ? o.setAttributeNS(i, n, e)
                  : o.setAttribute(n, e);
              }
            })(un(), s, t, e, n, r)),
          mi
        );
      }
      function yi(t, e, n, r) {
        return fi(t, Qe(), n) ? e + On(n) + r : vr;
      }
      function vi(t, e, n, r, s, i, o, a) {
        const l = Fe(),
          c = He(),
          u = t + 20,
          h = c.firstCreatePass
            ? (function (t, e, n, r, s, i, o, a, l) {
                const c = e.consts,
                  u = Pr(e, n[6], t, 0, o || null, De(c, a));
                Hr(e, n, u, De(c, l)), hn(e, u);
                const h = (u.tViews = Nr(
                    2,
                    -1,
                    r,
                    s,
                    i,
                    e.directiveRegistry,
                    e.pipeRegistry,
                    null,
                    e.schemas,
                    c
                  )),
                  d = Ur(0, null, 2, -1, null, null);
                return (
                  (d.injectorIndex = u.injectorIndex),
                  (h.node = d),
                  null !== e.queries &&
                    (e.queries.template(e, u),
                    (h.queries = e.queries.embeddedTView(u))),
                  u
                );
              })(t, c, l, e, n, r, s, i, o)
            : c.data[u];
        ze(h, !1);
        const d = l[11].createComment("");
        Es(c, l, d, h),
          ir(d, l),
          es(l, (l[u] = Jr(d, l, d, h))),
          we(h) && Rr(c, l, h),
          null != o && Dr(l, h, a);
      }
      function _i(t, e = ot.Default) {
        const n = Fe();
        return null == n ? Bt(t, e) : Fn($e(), n, Ct(t), e);
      }
      function wi(t) {
        return (function (t, e) {
          if ("class" === e) return t.classes;
          if ("style" === e) return t.styles;
          const n = t.attrs;
          if (n) {
            const t = n.length;
            let r = 0;
            for (; r < t; ) {
              const s = n[r];
              if (_n(s)) break;
              if (0 === s) r += 2;
              else if ("number" == typeof s)
                for (r++; r < t && "string" == typeof n[r]; ) r++;
              else {
                if (s === e) return n[r + 1];
                r += 2;
              }
            }
          }
          return null;
        })($e(), t);
      }
      function bi() {
        throw new Error("invalid");
      }
      function Ci(t, e, n) {
        const r = Fe();
        return fi(r, Qe(), e) && Fr(He(), un(), r, t, e, r[11], n, !1), Ci;
      }
      function Si(t, e, n, r, s) {
        const i = s ? "class" : "style";
        us(t, n, e.inputs[i], i, r);
      }
      function xi(t, e, n, r) {
        const s = Fe(),
          i = He(),
          o = 20 + t,
          a = s[11],
          l = (s[o] = kr(e, a, Ue.lFrame.currentNamespace)),
          c = i.firstCreatePass
            ? (function (t, e, n, r, s, i, o) {
                const a = e.consts,
                  l = De(a, i),
                  c = Pr(e, n[6], t, 3, s, l);
                return (
                  Hr(e, n, c, De(a, o)),
                  null !== c.attrs && oi(c, c.attrs, !1),
                  null !== c.mergedAttrs && oi(c, c.mergedAttrs, !0),
                  null !== e.queries && e.queries.elementStart(e, c),
                  c
                );
              })(t, i, s, 0, e, n, r)
            : i.data[o];
        ze(c, !0);
        const u = c.mergedAttrs;
        null !== u && vn(a, l, u);
        const h = c.classes;
        null !== h && As(a, l, h);
        const d = c.styles;
        null !== d && Ms(a, l, d),
          Es(i, s, l, c),
          0 === Ue.lFrame.elementDepthCount && ir(l, s),
          Ue.lFrame.elementDepthCount++,
          we(c) &&
            (Rr(i, s, c),
            (function (t, e, n) {
              if (ve(e)) {
                const r = e.directiveEnd;
                for (let s = e.directiveStart; s < r; s++) {
                  const e = t.data[s];
                  e.contentQueries && e.contentQueries(1, n[s], s);
                }
              }
            })(i, c, s)),
          null !== r && Dr(s, c);
      }
      function Ei() {
        let t = $e();
        qe() ? (Ue.lFrame.isParent = !1) : ((t = t.parent), ze(t, !1));
        const e = t;
        Ue.lFrame.elementDepthCount--;
        const n = He();
        n.firstCreatePass && (hn(n, t), ve(t) && n.queries.elementEnd(t)),
          null != e.classesWithoutHost &&
            (function (t) {
              return 0 != (16 & t.flags);
            })(e) &&
            Si(n, e, Fe(), e.classesWithoutHost, !0),
          null != e.stylesWithoutHost &&
            (function (t) {
              return 0 != (32 & t.flags);
            })(e) &&
            Si(n, e, Fe(), e.stylesWithoutHost, !1);
      }
      function ki(t, e, n, r) {
        xi(t, e, n, r), Ei();
      }
      function Oi() {
        return Fe();
      }
      function Pi(t) {
        return !!t && "function" == typeof t.then;
      }
      function Ti(t, e, n = !1, r) {
        const s = Fe(),
          i = He(),
          o = $e();
        return (
          (function (t, e, n, r, s, i, o = !1, a) {
            const l = we(r),
              c = t.firstCreatePass && (t.cleanup || (t.cleanup = [])),
              u = as(e);
            let h = !0;
            if (3 === r.type) {
              const d = Oe(r, e),
                p = a ? a(d) : ne,
                f = p.target || d,
                g = u.length,
                m = a ? (t) => a(ke(t[r.index])).target : r.index;
              if (xe(n)) {
                let o = null;
                if (
                  (!a &&
                    l &&
                    (o = (function (t, e, n, r) {
                      const s = t.cleanup;
                      if (null != s)
                        for (let i = 0; i < s.length - 1; i += 2) {
                          const t = s[i];
                          if (t === n && s[i + 1] === r) {
                            const t = e[7],
                              n = s[i + 2];
                            return t.length > n ? t[n] : null;
                          }
                          "string" == typeof t && (i += 2);
                        }
                      return null;
                    })(t, e, s, r.index)),
                  null !== o)
                )
                  ((o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = i),
                    (o.__ngLastListenerFn__ = i),
                    (h = !1);
                else {
                  i = Ai(r, e, i, !1);
                  const t = n.listen(p.name || f, s, i);
                  u.push(i, t), c && c.push(s, m, g, g + 1);
                }
              } else
                (i = Ai(r, e, i, !0)),
                  f.addEventListener(s, i, o),
                  u.push(i),
                  c && c.push(s, m, g, o);
            }
            const d = r.outputs;
            let p;
            if (h && null !== d && (p = d[s])) {
              const t = p.length;
              if (t)
                for (let n = 0; n < t; n += 2) {
                  const t = e[p[n]][p[n + 1]].subscribe(i),
                    o = u.length;
                  u.push(i, t), c && c.push(s, r.index, o, -(o + 1));
                }
            }
          })(i, s, s[11], o, t, e, n, r),
          Ti
        );
      }
      function Mi(t, e, n) {
        try {
          return !1 !== e(n);
        } catch (r) {
          return cs(t, r), !1;
        }
      }
      function Ai(t, e, n, r) {
        return function s(i) {
          if (i === Function) return n;
          const o = 2 & t.flags ? Me(t.index, e) : e;
          0 == (32 & e[2]) && ns(o);
          let a = Mi(e, n, i),
            l = s.__ngNextListenerFn__;
          for (; l; ) (a = Mi(e, l, i) && a), (l = l.__ngNextListenerFn__);
          return r && !1 === a && (i.preventDefault(), (i.returnValue = !1)), a;
        };
      }
      function Ii(t = 1) {
        return (function (t) {
          return (Ue.lFrame.contextLView = (function (t, e) {
            for (; t > 0; ) (e = e[15]), t--;
            return e;
          })(t, Ue.lFrame.contextLView))[8];
        })(t);
      }
      function Ri(t, e, n) {
        return Di(t, "", e, "", n), Ri;
      }
      function Di(t, e, n, r, s) {
        const i = Fe(),
          o = yi(i, e, n, r);
        return o !== vr && Fr(He(), un(), i, t, o, i[11], s, !1), Di;
      }
      function ji(t, e = "") {
        const n = Fe(),
          r = He(),
          s = t + 20,
          i = r.firstCreatePass ? Pr(r, n[6], t, 3, null, null) : r.data[s],
          o = (n[s] = (function (t, e) {
            return xe(e) ? e.createText(t) : e.createTextNode(t);
          })(e, n[11]));
        Es(r, n, o, i), ze(i, !1);
      }
      function Ni(t) {
        return Ui("", t, ""), Ni;
      }
      function Ui(t, e, n) {
        const r = Fe(),
          s = yi(r, t, e, n);
        return s !== vr && hs(r, ln(), s), Ui;
      }
      function Li(t, e, n, r, s) {
        const i = Fe(),
          o = (function (t, e, n, r, s, i) {
            const o = gi(t, Ze(), n, s);
            return (
              (function (t) {
                const e = Ue.lFrame;
                e.bindingIndex = e.bindingIndex + 2;
              })(),
              o ? e + On(n) + r + On(s) + i : vr
            );
          })(i, t, e, n, r, s);
        return o !== vr && hs(i, ln(), o), Li;
      }
      function Fi(t, e, n) {
        const r = Fe();
        return fi(r, Qe(), e) && Fr(He(), un(), r, t, e, r[11], n, !0), Fi;
      }
      function Hi(t, e) {
        const n = Ae(t)[1],
          r = n.data.length - 1;
        hn(n, { directiveStart: r, directiveEnd: r + 1 });
      }
      class Vi {
        constructor(t, e, n) {
          (this.previousValue = t),
            (this.currentValue = e),
            (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function $i(t) {
        t.type.prototype.ngOnChanges &&
          ((t.setInput = zi),
          (t.onChanges = function () {
            const t = qi(this),
              e = t && t.current;
            if (e) {
              const n = t.previous;
              if (n === ne) t.previous = e;
              else for (let t in e) n[t] = e[t];
              (t.current = null), this.ngOnChanges(e);
            }
          }));
      }
      function zi(t, e, n, r) {
        const s =
            qi(t) ||
            (function (t, e) {
              return (t.__ngSimpleChanges__ = e);
            })(t, { previous: ne, current: null }),
          i = s.current || (s.current = {}),
          o = s.previous,
          a = this.declaredInputs[n],
          l = o[a];
        (i[a] = new Vi(l && l.currentValue, e, o === ne)), (t[r] = e);
      }
      function qi(t) {
        return t.__ngSimpleChanges__ || null;
      }
      $i.ngInherit = !0;
      class Bi {}
      class Wi {
        resolveComponentFactory(t) {
          throw (function (t) {
            const e = Error(
              `No component factory found for ${vt(
                t
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (e.ngComponent = t), e;
          })(t);
        }
      }
      let Gi = (() => {
          class t {}
          return (t.NULL = new Wi()), t;
        })(),
        Zi = (() => {
          class t {
            constructor(t) {
              this.nativeElement = t;
            }
          }
          return (t.__NG_ELEMENT_ID__ = () => Qi(t)), t;
        })();
      const Qi = function (t) {
        return Us(t, $e(), Fe());
      };
      class Yi {}
      const Ki = (function () {
        var t = { Important: 1, DashCase: 2 };
        return (t[t.Important] = "Important"), (t[t.DashCase] = "DashCase"), t;
      })();
      let Ji = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => Xi()), t;
      })();
      const Xi = function () {
        const t = Fe(),
          e = Me($e().index, t);
        return (function (t) {
          const e = t[11];
          if (xe(e)) return e;
          throw new Error(
            "Cannot inject Renderer2 when the application uses Renderer3!"
          );
        })(me(e) ? e : t);
      };
      let to = (() => {
        class t {}
        return (
          (t.ɵprov = lt({ token: t, providedIn: "root", factory: () => null })),
          t
        );
      })();
      class eo {
        constructor(t) {
          (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        }
      }
      const no = new eo("9.1.12");
      class ro {
        constructor() {}
        supports(t) {
          return hi(t);
        }
        create(t) {
          return new io(t);
        }
      }
      const so = (t, e) => e;
      class io {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || so);
        }
        forEachItem(t) {
          let e;
          for (e = this._itHead; null !== e; e = e._next) t(e);
        }
        forEachOperation(t) {
          let e = this._itHead,
            n = this._removalsHead,
            r = 0,
            s = null;
          for (; e || n; ) {
            const i = !n || (e && e.currentIndex < co(n, r, s)) ? e : n,
              o = co(i, r, s),
              a = i.currentIndex;
            if (i === n) r--, (n = n._nextRemoved);
            else if (((e = e._next), null == i.previousIndex)) r++;
            else {
              s || (s = []);
              const t = o - r,
                e = a - r;
              if (t != e) {
                for (let n = 0; n < t; n++) {
                  const r = n < s.length ? s[n] : (s[n] = 0),
                    i = r + n;
                  e <= i && i < t && (s[n] = r + 1);
                }
                s[i.previousIndex] = e - t;
              }
            }
            o !== a && t(i, o, a);
          }
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachMovedItem(t) {
          let e;
          for (e = this._movesHead; null !== e; e = e._nextMoved) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        forEachIdentityChange(t) {
          let e;
          for (
            e = this._identityChangesHead;
            null !== e;
            e = e._nextIdentityChange
          )
            t(e);
        }
        diff(t) {
          if ((null == t && (t = []), !hi(t)))
            throw new Error(
              `Error trying to diff '${vt(
                t
              )}'. Only arrays and iterables are allowed`
            );
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e,
            n,
            r,
            s = this._itHead,
            i = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let e = 0; e < this.length; e++)
              (n = t[e]),
                (r = this._trackByFn(e, n)),
                null !== s && ci(s.trackById, r)
                  ? (i && (s = this._verifyReinsertion(s, n, r, e)),
                    ci(s.item, n) || this._addIdentityChange(s, n))
                  : ((s = this._mismatch(s, n, r, e)), (i = !0)),
                (s = s._next);
          } else
            (e = 0),
              (function (t, e) {
                if (Array.isArray(t))
                  for (let n = 0; n < t.length; n++) e(t[n]);
                else {
                  const n = t[li()]();
                  let r;
                  for (; !(r = n.next()).done; ) e(r.value);
                }
              })(t, (t) => {
                (r = this._trackByFn(e, t)),
                  null !== s && ci(s.trackById, r)
                    ? (i && (s = this._verifyReinsertion(s, t, r, e)),
                      ci(s.item, t) || this._addIdentityChange(s, t))
                    : ((s = this._mismatch(s, t, r, e)), (i = !0)),
                  (s = s._next),
                  e++;
              }),
              (this.length = e);
          return this._truncate(s), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t, e;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = e
            )
              (t.previousIndex = t.currentIndex), (e = t._nextMoved);
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, e, n, r) {
          let s;
          return (
            null === t ? (s = this._itTail) : ((s = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._linkedRecords
                ? null
                : this._linkedRecords.get(n, r))
              ? (ci(t.item, e) || this._addIdentityChange(t, e),
                this._moveAfter(t, s, r))
              : null !==
                (t =
                  null === this._unlinkedRecords
                    ? null
                    : this._unlinkedRecords.get(n, null))
              ? (ci(t.item, e) || this._addIdentityChange(t, e),
                this._reinsertAfter(t, s, r))
              : (t = this._addAfter(new oo(e, n), s, r)),
            t
          );
        }
        _verifyReinsertion(t, e, n, r) {
          let s =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(n, null);
          return (
            null !== s
              ? (t = this._reinsertAfter(s, t._prev, r))
              : t.currentIndex != r &&
                ((t.currentIndex = r), this._addToMoves(t, r)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const e = t._next;
            this._addToRemovals(this._unlink(t)), (t = e);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, e, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const r = t._prevRemoved,
            s = t._nextRemoved;
          return (
            null === r ? (this._removalsHead = s) : (r._nextRemoved = s),
            null === s ? (this._removalsTail = r) : (s._prevRemoved = r),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _moveAfter(t, e, n) {
          return (
            this._unlink(t),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _addAfter(t, e, n) {
          return (
            this._insertAfter(t, e, n),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, e, n) {
          const r = null === e ? this._itHead : e._next;
          return (
            (t._next = r),
            (t._prev = e),
            null === r ? (this._itTail = t) : (r._prev = t),
            null === e ? (this._itHead = t) : (e._next = t),
            null === this._linkedRecords && (this._linkedRecords = new lo()),
            this._linkedRecords.put(t),
            (t.currentIndex = n),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const e = t._prev,
            n = t._next;
          return (
            null === e ? (this._itHead = n) : (e._next = n),
            null === n ? (this._itTail = e) : (n._prev = e),
            t
          );
        }
        _addToMoves(t, e) {
          return (
            t.previousIndex === e ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new lo()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, e) {
          return (
            (t.item = e),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class oo {
        constructor(t, e) {
          (this.item = t),
            (this.trackById = e),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class ao {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, e) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if ((null === e || e <= n.currentIndex) && ci(n.trackById, t))
              return n;
          return null;
        }
        remove(t) {
          const e = t._prevDup,
            n = t._nextDup;
          return (
            null === e ? (this._head = n) : (e._nextDup = n),
            null === n ? (this._tail = e) : (n._prevDup = e),
            null === this._head
          );
        }
      }
      class lo {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const e = t.trackById;
          let n = this.map.get(e);
          n || ((n = new ao()), this.map.set(e, n)), n.add(t);
        }
        get(t, e) {
          const n = this.map.get(t);
          return n ? n.get(t, e) : null;
        }
        remove(t) {
          const e = t.trackById;
          return this.map.get(e).remove(t) && this.map.delete(e), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function co(t, e, n) {
        const r = t.previousIndex;
        if (null === r) return r;
        let s = 0;
        return n && r < n.length && (s = n[r]), r + e + s;
      }
      class uo {
        constructor() {}
        supports(t) {
          return t instanceof Map || di(t);
        }
        create() {
          return new ho();
        }
      }
      class ho {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let e;
          for (e = this._mapHead; null !== e; e = e._next) t(e);
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachChangedItem(t) {
          let e;
          for (e = this._changesHead; null !== e; e = e._nextChanged) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || di(t)))
              throw new Error(
                `Error trying to diff '${vt(
                  t
                )}'. Only maps and objects are allowed`
              );
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (t, n) => {
              if (e && e.key === n)
                this._maybeAddToChanges(e, t),
                  (this._appendAfter = e),
                  (e = e._next);
              else {
                const r = this._getOrCreateRecordForKey(n, t);
                e = this._insertBeforeOrAppend(e, r);
              }
            }),
            e)
          ) {
            e._prev && (e._prev._next = null), (this._removalsHead = e);
            for (let t = e; null !== t; t = t._nextRemoved)
              t === this._mapHead && (this._mapHead = null),
                this._records.delete(t.key),
                (t._nextRemoved = t._next),
                (t.previousValue = t.currentValue),
                (t.currentValue = null),
                (t._prev = null),
                (t._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, e) {
          if (t) {
            const n = t._prev;
            return (
              (e._next = t),
              (e._prev = n),
              (t._prev = e),
              n && (n._next = e),
              t === this._mapHead && (this._mapHead = e),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = e), (e._prev = this._appendAfter))
              : (this._mapHead = e),
            (this._appendAfter = e),
            null
          );
        }
        _getOrCreateRecordForKey(t, e) {
          if (this._records.has(t)) {
            const n = this._records.get(t);
            this._maybeAddToChanges(n, e);
            const r = n._prev,
              s = n._next;
            return (
              r && (r._next = s),
              s && (s._prev = r),
              (n._next = null),
              (n._prev = null),
              n
            );
          }
          const n = new po(t);
          return (
            this._records.set(t, n),
            (n.currentValue = e),
            this._addToAdditions(n),
            n
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, e) {
          ci(e, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = e),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, e) {
          t instanceof Map
            ? t.forEach(e)
            : Object.keys(t).forEach((n) => e(t[n], n));
        }
      }
      class po {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      let fo = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(e, n) {
              if (null != n) {
                const t = n.factories.slice();
                e = e.concat(t);
              }
              return new t(e);
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: (n) => {
                  if (!n)
                    throw new Error(
                      "Cannot extend IterableDiffers without a parent injector"
                    );
                  return t.create(e, n);
                },
                deps: [[t, new it(), new rt()]],
              };
            }
            find(t) {
              const e = this.factories.find((e) => e.supports(t));
              if (null != e) return e;
              throw new Error(
                `Cannot find a differ supporting object '${t}' of type '${
                  ((n = t), n.name || typeof n)
                }'`
              );
              var n;
            }
          }
          return (
            (t.ɵprov = lt({
              token: t,
              providedIn: "root",
              factory: () => new t([new ro()]),
            })),
            t
          );
        })(),
        go = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(e, n) {
              if (n) {
                const t = n.factories.slice();
                e = e.concat(t);
              }
              return new t(e);
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: (n) => {
                  if (!n)
                    throw new Error(
                      "Cannot extend KeyValueDiffers without a parent injector"
                    );
                  return t.create(e, n);
                },
                deps: [[t, new it(), new rt()]],
              };
            }
            find(t) {
              const e = this.factories.find((e) => e.supports(t));
              if (e) return e;
              throw new Error(`Cannot find a differ supporting object '${t}'`);
            }
          }
          return (
            (t.ɵprov = lt({
              token: t,
              providedIn: "root",
              factory: () => new t([new uo()]),
            })),
            t
          );
        })();
      const mo = [new uo()],
        yo = new fo([new ro()]),
        vo = new go(mo);
      let _o = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => wo(t, Zi)), t;
      })();
      const wo = function (t, e) {
        return Ls(t, e, $e(), Fe());
      };
      let bo = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => Co(t, Zi)), t;
      })();
      const Co = function (t, e) {
          return Fs(t, e, $e(), Fe());
        },
        So = {};
      class xo extends Gi {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const e = pe(t);
          return new Oo(e, this.ngModule);
        }
      }
      function Eo(t) {
        const e = [];
        for (let n in t)
          t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n });
        return e;
      }
      const ko = new jt("SCHEDULER_TOKEN", {
        providedIn: "root",
        factory: () => Tn,
      });
      class Oo extends Bi {
        constructor(t, e) {
          super(),
            (this.componentDef = t),
            (this.ngModule = e),
            (this.componentType = t.type),
            (this.selector = t.selectors.map(yr).join(",")),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!e);
        }
        get inputs() {
          return Eo(this.componentDef.inputs);
        }
        get outputs() {
          return Eo(this.componentDef.outputs);
        }
        create(t, e, n, r) {
          const s = (r = r || this.ngModule)
              ? (function (t, e) {
                  return {
                    get: (n, r, s) => {
                      const i = t.get(n, So, s);
                      return i !== So || r === So ? i : e.get(n, r, s);
                    },
                  };
                })(t, r.injector)
              : t,
            i = s.get(Yi, Ee),
            o = s.get(to, null),
            a = i.createRenderer(null, this.componentDef),
            l = this.componentDef.selectors[0][0] || "div",
            c = n
              ? (function (t, e, n) {
                  if (xe(t)) return t.selectRootElement(e, n === ee.ShadowDom);
                  let r = "string" == typeof e ? t.querySelector(e) : e;
                  return (r.textContent = ""), r;
                })(a, n, this.componentDef.encapsulation)
              : kr(
                  l,
                  i.createRenderer(null, this.componentDef),
                  (function (t) {
                    const e = t.toLowerCase();
                    return "svg" === e
                      ? "http://www.w3.org/2000/svg"
                      : "math" === e
                      ? "http://www.w3.org/1998/MathML/"
                      : null;
                  })(l)
                ),
            u = this.componentDef.onPush ? 576 : 528,
            h =
              "string" == typeof n && /^#root-ng-internal-isolated-\d+/.test(n),
            d = {
              components: [],
              scheduler: Tn,
              clean: os,
              playerHandler: null,
              flags: 0,
            },
            p = Nr(0, -1, null, 1, 0, null, null, null, null, null),
            f = Or(null, p, d, u, null, null, i, a, o, s);
          let g, m;
          en(f, null);
          try {
            const t = (function (t, e, n, r, s, i) {
              const o = n[1];
              n[20] = t;
              const a = Pr(o, null, 0, 3, null, null),
                l = (a.mergedAttrs = e.hostAttrs);
              null !== l &&
                (oi(a, l, !0),
                null !== t &&
                  (vn(s, t, l),
                  null !== a.classes && As(s, t, a.classes),
                  null !== a.styles && Ms(s, t, a.styles)));
              const c = r.createRenderer(t, e),
                u = Or(
                  n,
                  jr(e),
                  null,
                  e.onPush ? 64 : 16,
                  n[20],
                  a,
                  r,
                  c,
                  void 0
                );
              return (
                o.firstCreatePass &&
                  (Ln(Dn(a, n), o, e.type), Br(o, a), Gr(a, n.length, 1)),
                es(n, u),
                (n[20] = u)
              );
            })(c, this.componentDef, f, i, a);
            if (c)
              if (n) vn(a, c, ["ng-version", no.full]);
              else {
                const { attrs: t, classes: e } = (function (t) {
                  const e = [],
                    n = [];
                  let r = 1,
                    s = 2;
                  for (; r < t.length; ) {
                    let i = t[r];
                    if ("string" == typeof i)
                      2 === s
                        ? "" !== i && e.push(i, t[++r])
                        : 8 === s && n.push(i);
                    else {
                      if (!pr(s)) break;
                      s = i;
                    }
                    r++;
                  }
                  return { attrs: e, classes: n };
                })(this.componentDef.selectors[0]);
                t && vn(a, c, t), e && e.length > 0 && As(a, c, e.join(" "));
              }
            if (((m = Pe(p, 0)), void 0 !== e)) {
              const t = (m.projection = []);
              for (let n = 0; n < this.ngContentSelectors.length; n++) {
                const r = e[n];
                t.push(null != r ? Array.from(r) : null);
              }
            }
            (g = (function (t, e, n, r, s) {
              const i = n[1],
                o = (function (t, e, n) {
                  const r = $e();
                  t.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    qr(t, r, 1),
                    Zr(t, e, n));
                  const s = zn(e, t, e.length - 1, r);
                  ir(s, e);
                  const i = Oe(r, e);
                  return i && ir(i, e), s;
                })(i, n, e);
              r.components.push(o),
                (t[8] = o),
                s && s.forEach((t) => t(o, e)),
                e.contentQueries && e.contentQueries(1, o, n.length - 1);
              const a = $e();
              if (
                i.firstCreatePass &&
                (null !== e.hostBindings || null !== e.hostAttrs)
              ) {
                cn(a.index - 20);
                const t = n[1];
                Vr(t, e), $r(t, n, e.hostVars), zr(e, o);
              }
              return o;
            })(t, this.componentDef, f, d, [Hi])),
              Tr(p, f, null);
          } finally {
            an();
          }
          const y = new Po(this.componentType, g, Us(Zi, m, f), f, m);
          return (n && !h) || (p.node.child = m), y;
        }
      }
      class Po extends class {} {
        constructor(t, e, n, r, s) {
          super(),
            (this.location = n),
            (this._rootLView = r),
            (this._tNode = s),
            (this.destroyCbs = []),
            (this.instance = e),
            (this.hostView = this.changeDetectorRef = new Rs(r)),
            (function (t, e, n, r) {
              let s = t.node;
              null == s && (t.node = s = Ur(0, null, 2, -1, null, null)),
                (r[6] = s);
            })(r[1], 0, 0, r),
            (this.componentType = t);
        }
        get injector() {
          return new Wn(this._tNode, this._rootLView);
        }
        destroy() {
          this.destroyCbs &&
            (this.destroyCbs.forEach((t) => t()),
            (this.destroyCbs = null),
            !this.hostView.destroyed && this.hostView.destroy());
        }
        onDestroy(t) {
          this.destroyCbs && this.destroyCbs.push(t);
        }
      }
      const To = void 0;
      var Mo = [
        "en",
        [["a", "p"], ["AM", "PM"], To],
        [["AM", "PM"], To, To],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        ],
        To,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        ],
        To,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", To, "{1} 'at' {0}", To],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":",
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "USD",
        "$",
        "US Dollar",
        {},
        "ltr",
        function (t) {
          let e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === e && 0 === n ? 1 : 5;
        },
      ];
      let Ao = {};
      function Io(t) {
        const e = (function (t) {
          return t.toLowerCase().replace(/_/g, "-");
        })(t);
        let n = Ro(e);
        if (n) return n;
        const r = e.split("-")[0];
        if (((n = Ro(r)), n)) return n;
        if ("en" === r) return Mo;
        throw new Error(`Missing locale data for the locale "${t}".`);
      }
      function Ro(t) {
        return (
          t in Ao ||
            (Ao[t] =
              Ot.ng &&
              Ot.ng.common &&
              Ot.ng.common.locales &&
              Ot.ng.common.locales[t]),
          Ao[t]
        );
      }
      const Do = (function () {
        var t = {
          LocaleId: 0,
          DayPeriodsFormat: 1,
          DayPeriodsStandalone: 2,
          DaysFormat: 3,
          DaysStandalone: 4,
          MonthsFormat: 5,
          MonthsStandalone: 6,
          Eras: 7,
          FirstDayOfWeek: 8,
          WeekendRange: 9,
          DateFormat: 10,
          TimeFormat: 11,
          DateTimeFormat: 12,
          NumberSymbols: 13,
          NumberFormats: 14,
          CurrencyCode: 15,
          CurrencySymbol: 16,
          CurrencyName: 17,
          Currencies: 18,
          Directionality: 19,
          PluralCase: 20,
          ExtraData: 21,
        };
        return (
          (t[t.LocaleId] = "LocaleId"),
          (t[t.DayPeriodsFormat] = "DayPeriodsFormat"),
          (t[t.DayPeriodsStandalone] = "DayPeriodsStandalone"),
          (t[t.DaysFormat] = "DaysFormat"),
          (t[t.DaysStandalone] = "DaysStandalone"),
          (t[t.MonthsFormat] = "MonthsFormat"),
          (t[t.MonthsStandalone] = "MonthsStandalone"),
          (t[t.Eras] = "Eras"),
          (t[t.FirstDayOfWeek] = "FirstDayOfWeek"),
          (t[t.WeekendRange] = "WeekendRange"),
          (t[t.DateFormat] = "DateFormat"),
          (t[t.TimeFormat] = "TimeFormat"),
          (t[t.DateTimeFormat] = "DateTimeFormat"),
          (t[t.NumberSymbols] = "NumberSymbols"),
          (t[t.NumberFormats] = "NumberFormats"),
          (t[t.CurrencyCode] = "CurrencyCode"),
          (t[t.CurrencySymbol] = "CurrencySymbol"),
          (t[t.CurrencyName] = "CurrencyName"),
          (t[t.Currencies] = "Currencies"),
          (t[t.Directionality] = "Directionality"),
          (t[t.PluralCase] = "PluralCase"),
          (t[t.ExtraData] = "ExtraData"),
          t
        );
      })();
      let jo = "en-US";
      function No(t) {
        var e, n;
        (n = "Expected localeId to be defined"),
          null == (e = t) &&
            (function (t, e, n, r) {
              throw new Error(
                "ASSERTION ERROR: " + t + ` [Expected=> null != ${e} <=Actual]`
              );
            })(n, e),
          "string" == typeof t && (jo = t.toLowerCase().replace(/_/g, "-"));
      }
      const Uo = new Map();
      class Lo extends Qt {
        constructor(t, e) {
          super(),
            (this._parent = e),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new xo(this));
          const n = ge(t),
            r = t[It] || null;
          r && No(r),
            (this._bootstrapComponents = Mn(n.bootstrap)),
            (this._r3Injector = Zs(
              t,
              e,
              [
                { provide: Qt, useValue: this },
                { provide: Gi, useValue: this.componentFactoryResolver },
              ],
              vt(t)
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(t));
        }
        get(t, e = ei.THROW_IF_NOT_FOUND, n = ot.Default) {
          return t === ei || t === Qt || t === Nt
            ? this
            : this._r3Injector.get(t, e, n);
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((t) => t()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class Fo extends Yt {
        constructor(t) {
          super(),
            (this.moduleType = t),
            null !== ge(t) &&
              (function t(e) {
                if (null !== e.ɵmod.id) {
                  const t = e.ɵmod.id;
                  (function (t, e, n) {
                    if (e && e !== n)
                      throw new Error(
                        `Duplicate module registered for ${t} - ${vt(
                          e
                        )} vs ${vt(e.name)}`
                      );
                  })(t, Uo.get(t), e),
                    Uo.set(t, e);
                }
                let n = e.ɵmod.imports;
                n instanceof Function && (n = n()), n && n.forEach((e) => t(e));
              })(t);
        }
        create(t) {
          return new Lo(this.moduleType, t);
        }
      }
      function Ho(t, e, n) {
        const r = Ge() + t,
          s = Fe();
        return s[r] === vr
          ? pi(s, r, n ? e.call(n) : e())
          : (function (t, e) {
              return t[e];
            })(s, r);
      }
      function Vo(t, e, n, r) {
        return zo(Fe(), Ge(), t, e, n, r);
      }
      function $o(t, e) {
        const n = t[e];
        return n === vr ? void 0 : n;
      }
      function zo(t, e, n, r, s, i) {
        const o = e + n;
        return fi(t, o, s)
          ? pi(t, o + 1, i ? r.call(i, s) : r(s))
          : $o(t, o + 1);
      }
      function qo(t, e, n, r, s, i, o) {
        const a = e + n;
        return gi(t, a, s, i)
          ? pi(t, a + 2, o ? r.call(o, s, i) : r(s, i))
          : $o(t, a + 2);
      }
      function Bo(t, e) {
        const n = He();
        let r;
        const s = t + 20;
        n.firstCreatePass
          ? ((r = (function (t, e) {
              if (e)
                for (let n = e.length - 1; n >= 0; n--) {
                  const r = e[n];
                  if (t === r.name) return r;
                }
              throw new Error(`The pipe '${t}' could not be found!`);
            })(e, n.pipeRegistry)),
            (n.data[s] = r),
            r.onDestroy &&
              (n.destroyHooks || (n.destroyHooks = [])).push(s, r.onDestroy))
          : (r = n.data[s]);
        const i = r.factory || (r.factory = fe(r.type)),
          o = zt(_i),
          a = In(!1),
          l = i();
        return (
          In(a),
          zt(o),
          (function (t, e, n, r) {
            const s = n + 20;
            s >= t.data.length && ((t.data[s] = null), (t.blueprint[s] = null)),
              (e[s] = r);
          })(n, Fe(), t, l),
          l
        );
      }
      function Wo(t, e, n, r) {
        const s = Fe(),
          i = Te(s, t);
        return Zo(
          s,
          Go(s, t) ? qo(s, Ge(), e, i.transform, n, r, i) : i.transform(n, r)
        );
      }
      function Go(t, e) {
        return t[1].data[e + 20].pure;
      }
      function Zo(t, e) {
        return ui.isWrapped(e) && ((e = ui.unwrap(e)), (t[Ze()] = vr)), e;
      }
      class Qo extends E {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, e, n) {
          let r,
            s = (t) => null,
            i = () => null;
          t && "object" == typeof t
            ? ((r = this.__isAsync
                ? (e) => {
                    setTimeout(() => t.next(e));
                  }
                : (e) => {
                    t.next(e);
                  }),
              t.error &&
                (s = this.__isAsync
                  ? (e) => {
                      setTimeout(() => t.error(e));
                    }
                  : (e) => {
                      t.error(e);
                    }),
              t.complete &&
                (i = this.__isAsync
                  ? () => {
                      setTimeout(() => t.complete());
                    }
                  : () => {
                      t.complete();
                    }))
            : ((r = this.__isAsync
                ? (e) => {
                    setTimeout(() => t(e));
                  }
                : (e) => {
                    t(e);
                  }),
              e &&
                (s = this.__isAsync
                  ? (t) => {
                      setTimeout(() => e(t));
                    }
                  : (t) => {
                      e(t);
                    }),
              n &&
                (i = this.__isAsync
                  ? () => {
                      setTimeout(() => n());
                    }
                  : () => {
                      n();
                    }));
          const o = super.subscribe(r, s, i);
          return t instanceof h && t.add(o), o;
        }
      }
      function Yo() {
        return this._results[li()]();
      }
      class Ko {
        constructor() {
          (this.dirty = !0),
            (this._results = []),
            (this.changes = new Qo()),
            (this.length = 0);
          const t = li(),
            e = Ko.prototype;
          e[t] || (e[t] = Yo);
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, e) {
          return this._results.reduce(t, e);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t) {
          (this._results = (function t(e, n) {
            void 0 === n && (n = e);
            for (let r = 0; r < e.length; r++) {
              let s = e[r];
              Array.isArray(s)
                ? (n === e && (n = e.slice(0, r)), t(s, n))
                : n !== e && n.push(s);
            }
            return n;
          })(t)),
            (this.dirty = !1),
            (this.length = this._results.length),
            (this.last = this._results[this.length - 1]),
            (this.first = this._results[0]);
        }
        notifyOnChanges() {
          this.changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      class Jo {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new Jo(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Xo {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const e = t.queries;
          if (null !== e) {
            const n =
                null !== t.contentQueries ? t.contentQueries[0] : e.length,
              r = [];
            for (let t = 0; t < n; t++) {
              const n = e.getByIndex(t);
              r.push(this.queries[n.indexInDeclarationView].clone());
            }
            return new Xo(r);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let e = 0; e < this.queries.length; e++)
            null !== fa(t, e).matches && this.queries[e].setDirty();
        }
      }
      class ta {
        constructor(t, e, n, r = null) {
          (this.predicate = t),
            (this.descendants = e),
            (this.isStatic = n),
            (this.read = r);
        }
      }
      class ea {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, e) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementStart(t, e);
        }
        elementEnd(t) {
          for (let e = 0; e < this.queries.length; e++)
            this.queries[e].elementEnd(t);
        }
        embeddedTView(t) {
          let e = null;
          for (let n = 0; n < this.length; n++) {
            const r = null !== e ? e.length : 0,
              s = this.getByIndex(n).embeddedTView(t, r);
            s &&
              ((s.indexInDeclarationView = n),
              null !== e ? e.push(s) : (e = [s]));
          }
          return null !== e ? new ea(e) : null;
        }
        template(t, e) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].template(t, e);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class na {
        constructor(t, e = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = e);
        }
        elementStart(t, e) {
          this.isApplyingToNode(e) && this.matchTNode(t, e);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, e) {
          this.elementStart(t, e);
        }
        embeddedTView(t, e) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, e),
              new na(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && !1 === this.metadata.descendants) {
            const e = this._declarationNodeIndex;
            let n = t.parent;
            for (; null !== n && 4 === n.type && n.index !== e; ) n = n.parent;
            return e === (null !== n ? n.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, e) {
          if (Array.isArray(this.metadata.predicate)) {
            const n = this.metadata.predicate;
            for (let r = 0; r < n.length; r++)
              this.matchTNodeWithReadOption(t, e, ra(e, n[r]));
          } else {
            const n = this.metadata.predicate;
            n === _o
              ? 0 === e.type && this.matchTNodeWithReadOption(t, e, -1)
              : this.matchTNodeWithReadOption(t, e, $n(e, t, n, !1, !1));
          }
        }
        matchTNodeWithReadOption(t, e, n) {
          if (null !== n) {
            const r = this.metadata.read;
            if (null !== r)
              if (r === Zi || r === bo || (r === _o && 0 === e.type))
                this.addMatch(e.index, -2);
              else {
                const n = $n(e, t, r, !1, !1);
                null !== n && this.addMatch(e.index, n);
              }
            else this.addMatch(e.index, n);
          }
        }
        addMatch(t, e) {
          null === this.matches
            ? (this.matches = [t, e])
            : this.matches.push(t, e);
        }
      }
      function ra(t, e) {
        const n = t.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === e) return n[r + 1];
        return null;
      }
      function sa(t, e, n, r) {
        return -1 === n
          ? (function (t, e) {
              return 3 === t.type || 4 === t.type
                ? Us(Zi, t, e)
                : 0 === t.type
                ? Ls(_o, Zi, t, e)
                : null;
            })(e, t)
          : -2 === n
          ? (function (t, e, n) {
              return n === Zi
                ? Us(Zi, e, t)
                : n === _o
                ? Ls(_o, Zi, e, t)
                : n === bo
                ? Fs(bo, Zi, e, t)
                : void 0;
            })(t, e, r)
          : zn(t, t[1], n, e);
      }
      function ia(t, e, n, r) {
        const s = e[19].queries[r];
        if (null === s.matches) {
          const r = t.data,
            i = n.matches,
            o = [];
          for (let t = 0; t < i.length; t += 2) {
            const s = i[t];
            o.push(s < 0 ? null : sa(e, r[s], i[t + 1], n.metadata.read));
          }
          s.matches = o;
        }
        return s.matches;
      }
      function oa(t) {
        const e = Fe(),
          n = He(),
          r = Je();
        Xe(r + 1);
        const s = fa(n, r);
        if (t.dirty && Ie(e) === s.metadata.isStatic) {
          if (null === s.matches) t.reset([]);
          else {
            const i = s.crossesNgTemplate
              ? (function t(e, n, r, s) {
                  const i = e.queries.getByIndex(r),
                    o = i.matches;
                  if (null !== o) {
                    const a = ia(e, n, i, r);
                    for (let e = 0; e < o.length; e += 2) {
                      const r = o[e];
                      if (r > 0) s.push(a[e / 2]);
                      else {
                        const i = o[e + 1],
                          a = n[-r];
                        for (let e = 10; e < a.length; e++) {
                          const n = a[e];
                          n[17] === n[3] && t(n[1], n, i, s);
                        }
                        if (null !== a[9]) {
                          const e = a[9];
                          for (let n = 0; n < e.length; n++) {
                            const r = e[n];
                            t(r[1], r, i, s);
                          }
                        }
                      }
                    }
                  }
                  return s;
                })(n, e, r, [])
              : ia(n, e, s, r);
            t.reset(i), t.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function aa(t, e, n) {
        ca(He(), Fe(), t, e, n, !0);
      }
      function la(t, e, n) {
        ca(He(), Fe(), t, e, n, !1);
      }
      function ca(t, e, n, r, s, i) {
        t.firstCreatePass &&
          (pa(t, new ta(n, r, i, s), -1), i && (t.staticViewQueries = !0)),
          da(t, e);
      }
      function ua(t, e, n, r) {
        !(function (t, e, n, r, s, i, o, a) {
          t.firstCreatePass &&
            (pa(t, new ta(n, r, !1, s), o.index),
            (function (t, e) {
              const n = t.contentQueries || (t.contentQueries = []);
              e !== (t.contentQueries.length ? n[n.length - 1] : -1) &&
                n.push(t.queries.length - 1, e);
            })(t, a)),
            da(t, e);
        })(He(), Fe(), e, n, r, 0, $e(), t);
      }
      function ha() {
        return (t = Fe()), (e = Je()), t[19].queries[e].queryList;
        var t, e;
      }
      function da(t, e) {
        const n = new Ko();
        !(function (t, e, n, r) {
          const s = as(e);
          s.push(n), t.firstCreatePass && ls(t).push(r, s.length - 1);
        })(t, e, n, n.destroy),
          null === e[19] && (e[19] = new Xo()),
          e[19].queries.push(new Jo(n));
      }
      function pa(t, e, n) {
        null === t.queries && (t.queries = new ea()),
          t.queries.track(new na(e, n));
      }
      function fa(t, e) {
        return t.queries.getByIndex(e);
      }
      const ga = new jt("Application Initializer");
      let ma = (() => {
        class t {
          constructor(t) {
            (this.appInits = t),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((t, e) => {
                (this.resolve = t), (this.reject = e);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const t = [],
              e = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let n = 0; n < this.appInits.length; n++) {
                const e = this.appInits[n]();
                Pi(e) && t.push(e);
              }
            Promise.all(t)
              .then(() => {
                e();
              })
              .catch((t) => {
                this.reject(t);
              }),
              0 === t.length && e(),
              (this.initialized = !0);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Bt(ga, 8));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const ya = new jt("AppId"),
        va = {
          provide: ya,
          useFactory: function () {
            return `${_a()}${_a()}${_a()}`;
          },
          deps: [],
        };
      function _a() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const wa = new jt("Platform Initializer"),
        ba = new jt("Platform ID"),
        Ca = new jt("appBootstrapListener");
      let Sa = (() => {
        class t {
          log(t) {
            console.log(t);
          }
          warn(t) {
            console.warn(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const xa = new jt("LocaleId"),
        Ea = new jt("DefaultCurrencyCode");
      class ka {
        constructor(t, e) {
          (this.ngModuleFactory = t), (this.componentFactories = e);
        }
      }
      const Oa = function (t) {
          return new Fo(t);
        },
        Pa = Oa,
        Ta = function (t) {
          return Promise.resolve(Oa(t));
        },
        Ma = function (t) {
          const e = Oa(t),
            n = Mn(ge(t).declarations).reduce((t, e) => {
              const n = pe(e);
              return n && t.push(new Oo(n)), t;
            }, []);
          return new ka(e, n);
        },
        Aa = Ma,
        Ia = function (t) {
          return Promise.resolve(Ma(t));
        };
      let Ra = (() => {
        class t {
          constructor() {
            (this.compileModuleSync = Pa),
              (this.compileModuleAsync = Ta),
              (this.compileModuleAndAllComponentsSync = Aa),
              (this.compileModuleAndAllComponentsAsync = Ia);
          }
          clearCache() {}
          clearCacheFor(t) {}
          getModuleId(t) {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Da = new jt("compilerOptions"),
        ja = (() => Promise.resolve(0))();
      function Na(t) {
        "undefined" == typeof Zone
          ? ja.then(() => {
              t && t.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", t);
      }
      class Ua {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: e = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Qo(!1)),
            (this.onMicrotaskEmpty = new Qo(!1)),
            (this.onStable = new Qo(!1)),
            (this.onError = new Qo(!1)),
            "undefined" == typeof Zone)
          )
            throw new Error("In this configuration Angular requires Zone.js");
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec &&
              (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            (this.shouldCoalesceEventChangeDetection = e),
            (this.lastRequestAnimationFrameId = -1),
            (this.nativeRequestAnimationFrame = (function () {
              let t = Ot.requestAnimationFrame,
                e = Ot.cancelAnimationFrame;
              if ("undefined" != typeof Zone && t && e) {
                const n = t[Zone.__symbol__("OriginalDelegate")];
                n && (t = n);
                const r = e[Zone.__symbol__("OriginalDelegate")];
                r && (e = r);
              }
              return {
                nativeRequestAnimationFrame: t,
                nativeCancelAnimationFrame: e,
              };
            })().nativeRequestAnimationFrame),
            (function (t) {
              const e =
                !!t.shouldCoalesceEventChangeDetection &&
                t.nativeRequestAnimationFrame &&
                (() => {
                  !(function (t) {
                    -1 === t.lastRequestAnimationFrameId &&
                      ((t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(
                        Ot,
                        () => {
                          (t.lastRequestAnimationFrameId = -1), Va(t), Ha(t);
                        }
                      )),
                      Va(t));
                  })(t);
                });
              t._inner = t._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0, maybeDelayChangeDetection: e },
                onInvokeTask: (n, r, s, i, o, a) => {
                  try {
                    return $a(t), n.invokeTask(s, i, o, a);
                  } finally {
                    e && "eventTask" === i.type && e(), za(t);
                  }
                },
                onInvoke: (e, n, r, s, i, o, a) => {
                  try {
                    return $a(t), e.invoke(r, s, i, o, a);
                  } finally {
                    za(t);
                  }
                },
                onHasTask: (e, n, r, s) => {
                  e.hasTask(r, s),
                    n === r &&
                      ("microTask" == s.change
                        ? ((t._hasPendingMicrotasks = s.microTask),
                          Va(t),
                          Ha(t))
                        : "macroTask" == s.change &&
                          (t.hasPendingMacrotasks = s.macroTask));
                },
                onHandleError: (e, n, r, s) => (
                  e.handleError(r, s),
                  t.runOutsideAngular(() => t.onError.emit(s)),
                  !1
                ),
              });
            })(this);
        }
        static isInAngularZone() {
          return !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!Ua.isInAngularZone())
            throw new Error("Expected to be in Angular Zone, but it is not!");
        }
        static assertNotInAngularZone() {
          if (Ua.isInAngularZone())
            throw new Error("Expected to not be in Angular Zone, but it is!");
        }
        run(t, e, n) {
          return this._inner.run(t, e, n);
        }
        runTask(t, e, n, r) {
          const s = this._inner,
            i = s.scheduleEventTask("NgZoneEvent: " + r, t, Fa, La, La);
          try {
            return s.runTask(i, e, n);
          } finally {
            s.cancelTask(i);
          }
        }
        runGuarded(t, e, n) {
          return this._inner.runGuarded(t, e, n);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      function La() {}
      const Fa = {};
      function Ha(t) {
        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
          try {
            t._nesting++, t.onMicrotaskEmpty.emit(null);
          } finally {
            if ((t._nesting--, !t.hasPendingMicrotasks))
              try {
                t.runOutsideAngular(() => t.onStable.emit(null));
              } finally {
                t.isStable = !0;
              }
          }
      }
      function Va(t) {
        t.hasPendingMicrotasks = !!(
          t._hasPendingMicrotasks ||
          (t.shouldCoalesceEventChangeDetection &&
            -1 !== t.lastRequestAnimationFrameId)
        );
      }
      function $a(t) {
        t._nesting++,
          t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
      }
      function za(t) {
        t._nesting--, Ha(t);
      }
      class qa {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Qo()),
            (this.onMicrotaskEmpty = new Qo()),
            (this.onStable = new Qo()),
            (this.onError = new Qo());
        }
        run(t, e, n) {
          return t.apply(e, n);
        }
        runGuarded(t, e, n) {
          return t.apply(e, n);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, e, n, r) {
          return t.apply(e, n);
        }
      }
      let Ba = (() => {
          class t {
            constructor(t) {
              (this._ngZone = t),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                t.run(() => {
                  this.taskTrackingZone =
                    "undefined" == typeof Zone
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      Ua.assertNotInAngularZone(),
                        Na(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                Na(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let t = this._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let t = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (e) =>
                    !e.updateCb ||
                    !e.updateCb(t) ||
                    (clearTimeout(e.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((t) => ({
                    source: t.source,
                    creationLocation: t.creationLocation,
                    data: t.data,
                  }))
                : [];
            }
            addCallback(t, e, n) {
              let r = -1;
              e &&
                e > 0 &&
                (r = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (t) => t.timeoutId !== r
                  )),
                    t(this._didWork, this.getPendingTasks());
                }, e)),
                this._callbacks.push({ doneCb: t, timeoutId: r, updateCb: n });
            }
            whenStable(t, e, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                );
              this.addCallback(t, e, n), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(t, e, n) {
              return [];
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Bt(Ua));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Wa = (() => {
          class t {
            constructor() {
              (this._applications = new Map()), Qa.addToWindow(this);
            }
            registerApplication(t, e) {
              this._applications.set(t, e);
            }
            unregisterApplication(t) {
              this._applications.delete(t);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(t) {
              return this._applications.get(t) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(t, e = !0) {
              return Qa.findTestabilityInTree(this, t, e);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      class Ga {
        addToWindow(t) {}
        findTestabilityInTree(t, e, n) {
          return null;
        }
      }
      let Za,
        Qa = new Ga(),
        Ya = function (t, e, n) {
          const r = t.get(Da, []).concat(e),
            s = new Fo(n);
          if (0 === ri.size) return Promise.resolve(s);
          const i = (function (t) {
            const e = [];
            return t.forEach((t) => t && e.push(...t)), e;
          })(r.map((t) => t.providers));
          if (0 === i.length) return Promise.resolve(s);
          const o = (function () {
              const t = Ot.ng;
              if (!t || !t.ɵcompilerFacade)
                throw new Error(
                  "Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping."
                );
              return t.ɵcompilerFacade;
            })(),
            a = ei.create({ providers: i }).get(o.ResourceLoader);
          return (function (t) {
            const e = [],
              n = new Map();
            function r(t) {
              let e = n.get(t);
              if (!e) {
                const r = ((t) => Promise.resolve(a.get(t)))(t);
                n.set(t, (e = r.then(ii)));
              }
              return e;
            }
            return (
              ri.forEach((t, n) => {
                const s = [];
                t.templateUrl &&
                  s.push(
                    r(t.templateUrl).then((e) => {
                      t.template = e;
                    })
                  );
                const i = t.styleUrls,
                  o = t.styles || (t.styles = []),
                  a = t.styles.length;
                i &&
                  i.forEach((e, n) => {
                    o.push(""),
                      s.push(
                        r(e).then((r) => {
                          (o[a + n] = r),
                            i.splice(i.indexOf(e), 1),
                            0 == i.length && (t.styleUrls = void 0);
                        })
                      );
                  });
                const l = Promise.all(s).then(() =>
                  (function (t) {
                    si.delete(t);
                  })(n)
                );
                e.push(l);
              }),
              (ri = new Map()),
              Promise.all(e).then(() => {})
            );
          })().then(() => s);
        };
      const Ka = new jt("AllowMultipleToken");
      class Ja {
        constructor(t, e) {
          (this.name = t), (this.token = e);
        }
      }
      function Xa(t, e, n = []) {
        const r = "Platform: " + e,
          s = new jt(r);
        return (e = []) => {
          let i = tl();
          if (!i || i.injector.get(Ka, !1))
            if (t) t(n.concat(e).concat({ provide: s, useValue: !0 }));
            else {
              const t = n
                .concat(e)
                .concat(
                  { provide: s, useValue: !0 },
                  { provide: $s, useValue: "platform" }
                );
              !(function (t) {
                if (Za && !Za.destroyed && !Za.injector.get(Ka, !1))
                  throw new Error(
                    "There can be only one platform. Destroy the previous one to create a new one."
                  );
                Za = t.get(el);
                const e = t.get(wa, null);
                e && e.forEach((t) => t());
              })(ei.create({ providers: t, name: r }));
            }
          return (function (t) {
            const e = tl();
            if (!e) throw new Error("No platform exists!");
            if (!e.injector.get(t, null))
              throw new Error(
                "A platform with a different configuration has been created. Please destroy it first."
              );
            return e;
          })(s);
        };
      }
      function tl() {
        return Za && !Za.destroyed ? Za : null;
      }
      let el = (() => {
        class t {
          constructor(t) {
            (this._injector = t),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(t, e) {
            const n = (function (t, e) {
                let n;
                return (
                  (n =
                    "noop" === t
                      ? new qa()
                      : ("zone.js" === t ? void 0 : t) ||
                        new Ua({
                          enableLongStackTrace: tr(),
                          shouldCoalesceEventChangeDetection: e,
                        })),
                  n
                );
              })(e ? e.ngZone : void 0, (e && e.ngZoneEventCoalescing) || !1),
              r = [{ provide: Ua, useValue: n }];
            return n.run(() => {
              const e = ei.create({
                  providers: r,
                  parent: this.injector,
                  name: t.moduleType.name,
                }),
                s = t.create(e),
                i = s.injector.get(Yn, null);
              if (!i)
                throw new Error(
                  "No ErrorHandler. Is platform module (BrowserModule) included?"
                );
              return (
                s.onDestroy(() => sl(this._modules, s)),
                n.runOutsideAngular(() =>
                  n.onError.subscribe({
                    next: (t) => {
                      i.handleError(t);
                    },
                  })
                ),
                (function (t, e, n) {
                  try {
                    const r = n();
                    return Pi(r)
                      ? r.catch((n) => {
                          throw (
                            (e.runOutsideAngular(() => t.handleError(n)), n)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (e.runOutsideAngular(() => t.handleError(r)), r);
                  }
                })(i, n, () => {
                  const t = s.injector.get(ma);
                  return (
                    t.runInitializers(),
                    t.donePromise.then(
                      () => (
                        No(s.injector.get(xa, "en-US") || "en-US"),
                        this._moduleDoBootstrap(s),
                        s
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(t, e = []) {
            const n = nl({}, e);
            return Ya(this.injector, n, t).then((t) =>
              this.bootstrapModuleFactory(t, n)
            );
          }
          _moduleDoBootstrap(t) {
            const e = t.injector.get(rl);
            if (t._bootstrapComponents.length > 0)
              t._bootstrapComponents.forEach((t) => e.bootstrap(t));
            else {
              if (!t.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${vt(
                    t.instance.constructor
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`
                );
              t.instance.ngDoBootstrap(e);
            }
            this._modules.push(t);
          }
          onDestroy(t) {
            this._destroyListeners.push(t);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed)
              throw new Error("The platform has already been destroyed!");
            this._modules.slice().forEach((t) => t.destroy()),
              this._destroyListeners.forEach((t) => t()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Bt(ei));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function nl(t, e) {
        return Array.isArray(e)
          ? e.reduce(nl, t)
          : Object.assign(Object.assign({}, t), e);
      }
      let rl = (() => {
        class t {
          constructor(t, e, n, r, s, i) {
            (this._zone = t),
              (this._console = e),
              (this._injector = n),
              (this._exceptionHandler = r),
              (this._componentFactoryResolver = s),
              (this._initStatus = i),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._enforceNoNewChanges = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._enforceNoNewChanges = tr()),
              this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                },
              });
            const o = new w((t) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    t.next(this._stable), t.complete();
                  });
              }),
              a = new w((t) => {
                let e;
                this._zone.runOutsideAngular(() => {
                  e = this._zone.onStable.subscribe(() => {
                    Ua.assertNotInAngularZone(),
                      Na(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), t.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  Ua.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        t.next(!1);
                      }));
                });
                return () => {
                  e.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = (function (...t) {
              let e = Number.POSITIVE_INFINITY,
                n = null,
                r = t[t.length - 1];
              return (
                O(r)
                  ? ((n = t.pop()),
                    t.length > 1 &&
                      "number" == typeof t[t.length - 1] &&
                      (e = t.pop()))
                  : "number" == typeof r && (e = t.pop()),
                null === n && 1 === t.length && t[0] instanceof w
                  ? t[0]
                  : B(e)(W(t, n))
              );
            })(
              o,
              a.pipe((t) => {
                return G()(
                  ((e = X),
                  function (t) {
                    let n;
                    n =
                      "function" == typeof e
                        ? e
                        : function () {
                            return e;
                          };
                    const r = Object.create(t, K);
                    return (r.source = t), (r.subjectFactory = n), r;
                  })(t)
                );
                var e;
              })
            );
          }
          bootstrap(t, e) {
            if (!this._initStatus.done)
              throw new Error(
                "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."
              );
            let n;
            (n =
              t instanceof Bi
                ? t
                : this._componentFactoryResolver.resolveComponentFactory(t)),
              this.componentTypes.push(n.componentType);
            const r = n.isBoundToModule ? void 0 : this._injector.get(Qt),
              s = n.create(ei.NULL, [], e || n.selector, r);
            s.onDestroy(() => {
              this._unloadComponent(s);
            });
            const i = s.injector.get(Ba, null);
            return (
              i &&
                s.injector
                  .get(Wa)
                  .registerApplication(s.location.nativeElement, i),
              this._loadComponent(s),
              tr() &&
                this._console.log(
                  "Angular is running in the development mode. Call enableProdMode() to enable the production mode."
                ),
              s
            );
          }
          tick() {
            if (this._runningTick)
              throw new Error("ApplicationRef.tick is called recursively");
            try {
              this._runningTick = !0;
              for (let t of this._views) t.detectChanges();
              if (this._enforceNoNewChanges)
                for (let t of this._views) t.checkNoChanges();
            } catch (t) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(t)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(t) {
            const e = t;
            this._views.push(e), e.attachToAppRef(this);
          }
          detachView(t) {
            const e = t;
            sl(this._views, e), e.detachFromAppRef();
          }
          _loadComponent(t) {
            this.attachView(t.hostView),
              this.tick(),
              this.components.push(t),
              this._injector
                .get(Ca, [])
                .concat(this._bootstrapListeners)
                .forEach((e) => e(t));
          }
          _unloadComponent(t) {
            this.detachView(t.hostView), sl(this.components, t);
          }
          ngOnDestroy() {
            this._views.slice().forEach((t) => t.destroy());
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Bt(Ua), Bt(Sa), Bt(ei), Bt(Yn), Bt(Gi), Bt(ma));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function sl(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      class il {}
      class ol {}
      const al = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" };
      let ll = (() => {
        class t {
          constructor(t, e) {
            (this._compiler = t), (this._config = e || al);
          }
          load(t) {
            return this.loadAndCompile(t);
          }
          loadAndCompile(t) {
            let [e, r] = t.split("#");
            return (
              void 0 === r && (r = "default"),
              n("zn8P")(e)
                .then((t) => t[r])
                .then((t) => cl(t, e, r))
                .then((t) => this._compiler.compileModuleAsync(t))
            );
          }
          loadFactory(t) {
            let [e, r] = t.split("#"),
              s = "NgFactory";
            return (
              void 0 === r && ((r = "default"), (s = "")),
              n("zn8P")(
                this._config.factoryPathPrefix +
                  e +
                  this._config.factoryPathSuffix
              )
                .then((t) => t[r + s])
                .then((t) => cl(t, e, r))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Bt(Ra), Bt(ol, 8));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function cl(t, e, n) {
        if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
        return t;
      }
      const ul = Xa(null, "core", [
          { provide: ba, useValue: "unknown" },
          { provide: el, deps: [ei] },
          { provide: Wa, deps: [] },
          { provide: Sa, deps: [] },
        ]),
        hl = [
          { provide: rl, useClass: rl, deps: [Ua, Sa, ei, Yn, Gi, ma] },
          {
            provide: ko,
            deps: [Ua],
            useFactory: function (t) {
              let e = [];
              return (
                t.onStable.subscribe(() => {
                  for (; e.length; ) e.pop()();
                }),
                function (t) {
                  e.push(t);
                }
              );
            },
          },
          { provide: ma, useClass: ma, deps: [[new rt(), ga]] },
          { provide: Ra, useClass: Ra, deps: [] },
          va,
          {
            provide: fo,
            useFactory: function () {
              return yo;
            },
            deps: [],
          },
          {
            provide: go,
            useFactory: function () {
              return vo;
            },
            deps: [],
          },
          {
            provide: xa,
            useFactory: function (t) {
              return (
                No(
                  (t =
                    t ||
                    ("undefined" != typeof $localize && $localize.locale) ||
                    "en-US")
                ),
                t
              );
            },
            deps: [[new nt(xa), new rt(), new it()]],
          },
          { provide: Ea, useValue: "USD" },
        ];
      let dl = (() => {
          class t {
            constructor(t) {}
          }
          return (
            (t.ɵmod = ce({ type: t })),
            (t.ɵinj = ct({
              factory: function (e) {
                return new (e || t)(Bt(rl));
              },
              providers: hl,
            })),
            t
          );
        })(),
        pl = null;
      function fl() {
        return pl;
      }
      const gl = new jt("DocumentToken");
      let ml = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = lt({ factory: yl, token: t, providedIn: "platform" })),
          t
        );
      })();
      function yl() {
        return Bt(_l);
      }
      const vl = new jt("Location Initialized");
      let _l = (() => {
        class t extends ml {
          constructor(t) {
            super(), (this._doc = t), this._init();
          }
          _init() {
            (this.location = fl().getLocation()),
              (this._history = fl().getHistory());
          }
          getBaseHrefFromDOM() {
            return fl().getBaseHref(this._doc);
          }
          onPopState(t) {
            fl()
              .getGlobalEventTarget(this._doc, "window")
              .addEventListener("popstate", t, !1);
          }
          onHashChange(t) {
            fl()
              .getGlobalEventTarget(this._doc, "window")
              .addEventListener("hashchange", t, !1);
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(t) {
            this.location.pathname = t;
          }
          pushState(t, e, n) {
            wl() ? this._history.pushState(t, e, n) : (this.location.hash = n);
          }
          replaceState(t, e, n) {
            wl()
              ? this._history.replaceState(t, e, n)
              : (this.location.hash = n);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Bt(gl));
          }),
          (t.ɵprov = lt({ factory: bl, token: t, providedIn: "platform" })),
          t
        );
      })();
      function wl() {
        return !!window.history.pushState;
      }
      function bl() {
        return new _l(Bt(gl));
      }
      function Cl(t, e) {
        if (0 == t.length) return e;
        if (0 == e.length) return t;
        let n = 0;
        return (
          t.endsWith("/") && n++,
          e.startsWith("/") && n++,
          2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
        );
      }
      function Sl(t) {
        const e = t.match(/#|\?|$/),
          n = (e && e.index) || t.length;
        return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n);
      }
      function xl(t) {
        return t && "?" !== t[0] ? "?" + t : t;
      }
      let El = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = lt({ factory: kl, token: t, providedIn: "root" })),
          t
        );
      })();
      function kl(t) {
        const e = Bt(gl).location;
        return new Pl(Bt(ml), (e && e.origin) || "");
      }
      const Ol = new jt("appBaseHref");
      let Pl = (() => {
          class t extends El {
            constructor(t, e) {
              if (
                (super(),
                (this._platformLocation = t),
                null == e && (e = this._platformLocation.getBaseHrefFromDOM()),
                null == e)
              )
                throw new Error(
                  "No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."
                );
              this._baseHref = e;
            }
            onPopState(t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(t) {
              return Cl(this._baseHref, t);
            }
            path(t = !1) {
              const e =
                  this._platformLocation.pathname +
                  xl(this._platformLocation.search),
                n = this._platformLocation.hash;
              return n && t ? `${e}${n}` : e;
            }
            pushState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + xl(r));
              this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + xl(r));
              this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Bt(ml), Bt(Ol, 8));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Tl = (() => {
          class t extends El {
            constructor(t, e) {
              super(),
                (this._platformLocation = t),
                (this._baseHref = ""),
                null != e && (this._baseHref = e);
            }
            onPopState(t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(t = !1) {
              let e = this._platformLocation.hash;
              return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e;
            }
            prepareExternalUrl(t) {
              const e = Cl(this._baseHref, t);
              return e.length > 0 ? "#" + e : e;
            }
            pushState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + xl(r));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + xl(r));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Bt(ml), Bt(Ol, 8));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Ml = (() => {
          class t {
            constructor(t, e) {
              (this._subject = new Qo()),
                (this._urlChangeListeners = []),
                (this._platformStrategy = t);
              const n = this._platformStrategy.getBaseHref();
              (this._platformLocation = e),
                (this._baseHref = Sl(Il(n))),
                this._platformStrategy.onPopState((t) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: t.state,
                    type: t.type,
                  });
                });
            }
            path(t = !1) {
              return this.normalize(this._platformStrategy.path(t));
            }
            getState() {
              return this._platformLocation.getState();
            }
            isCurrentPathEqualTo(t, e = "") {
              return this.path() == this.normalize(t + xl(e));
            }
            normalize(e) {
              return t.stripTrailingSlash(
                (function (t, e) {
                  return t && e.startsWith(t) ? e.substring(t.length) : e;
                })(this._baseHref, Il(e))
              );
            }
            prepareExternalUrl(t) {
              return (
                t && "/" !== t[0] && (t = "/" + t),
                this._platformStrategy.prepareExternalUrl(t)
              );
            }
            go(t, e = "", n = null) {
              this._platformStrategy.pushState(n, "", t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + xl(e)),
                  n
                );
            }
            replaceState(t, e = "", n = null) {
              this._platformStrategy.replaceState(n, "", t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + xl(e)),
                  n
                );
            }
            forward() {
              this._platformStrategy.forward();
            }
            back() {
              this._platformStrategy.back();
            }
            onUrlChange(t) {
              this._urlChangeListeners.push(t),
                this.subscribe((t) => {
                  this._notifyUrlChangeListeners(t.url, t.state);
                });
            }
            _notifyUrlChangeListeners(t = "", e) {
              this._urlChangeListeners.forEach((n) => n(t, e));
            }
            subscribe(t, e, n) {
              return this._subject.subscribe({
                next: t,
                error: e,
                complete: n,
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Bt(El), Bt(ml));
            }),
            (t.normalizeQueryParams = xl),
            (t.joinWithSlash = Cl),
            (t.stripTrailingSlash = Sl),
            (t.ɵprov = lt({ factory: Al, token: t, providedIn: "root" })),
            t
          );
        })();
      function Al() {
        return new Ml(Bt(El), Bt(ml));
      }
      function Il(t) {
        return t.replace(/\/index.html$/, "");
      }
      const Rl = (function () {
          var t = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
          return (
            (t[t.Zero] = "Zero"),
            (t[t.One] = "One"),
            (t[t.Two] = "Two"),
            (t[t.Few] = "Few"),
            (t[t.Many] = "Many"),
            (t[t.Other] = "Other"),
            t
          );
        })(),
        Dl = (function () {
          var t = { Format: 0, Standalone: 1 };
          return (t[t.Format] = "Format"), (t[t.Standalone] = "Standalone"), t;
        })(),
        jl = (function () {
          var t = { Narrow: 0, Abbreviated: 1, Wide: 2, Short: 3 };
          return (
            (t[t.Narrow] = "Narrow"),
            (t[t.Abbreviated] = "Abbreviated"),
            (t[t.Wide] = "Wide"),
            (t[t.Short] = "Short"),
            t
          );
        })(),
        Nl = (function () {
          var t = { Short: 0, Medium: 1, Long: 2, Full: 3 };
          return (
            (t[t.Short] = "Short"),
            (t[t.Medium] = "Medium"),
            (t[t.Long] = "Long"),
            (t[t.Full] = "Full"),
            t
          );
        })(),
        Ul = (function () {
          var t = {
            Decimal: 0,
            Group: 1,
            List: 2,
            PercentSign: 3,
            PlusSign: 4,
            MinusSign: 5,
            Exponential: 6,
            SuperscriptingExponent: 7,
            PerMille: 8,
            Infinity: 9,
            NaN: 10,
            TimeSeparator: 11,
            CurrencyDecimal: 12,
            CurrencyGroup: 13,
          };
          return (
            (t[t.Decimal] = "Decimal"),
            (t[t.Group] = "Group"),
            (t[t.List] = "List"),
            (t[t.PercentSign] = "PercentSign"),
            (t[t.PlusSign] = "PlusSign"),
            (t[t.MinusSign] = "MinusSign"),
            (t[t.Exponential] = "Exponential"),
            (t[t.SuperscriptingExponent] = "SuperscriptingExponent"),
            (t[t.PerMille] = "PerMille"),
            (t[t.Infinity] = "Infinity"),
            (t[t.NaN] = "NaN"),
            (t[t.TimeSeparator] = "TimeSeparator"),
            (t[t.CurrencyDecimal] = "CurrencyDecimal"),
            (t[t.CurrencyGroup] = "CurrencyGroup"),
            t
          );
        })();
      function Ll(t, e) {
        return zl(Io(t)[Do.DateFormat], e);
      }
      function Fl(t, e) {
        return zl(Io(t)[Do.TimeFormat], e);
      }
      function Hl(t, e) {
        return zl(Io(t)[Do.DateTimeFormat], e);
      }
      function Vl(t, e) {
        const n = Io(t),
          r = n[Do.NumberSymbols][e];
        if (void 0 === r) {
          if (e === Ul.CurrencyDecimal) return n[Do.NumberSymbols][Ul.Decimal];
          if (e === Ul.CurrencyGroup) return n[Do.NumberSymbols][Ul.Group];
        }
        return r;
      }
      function $l(t) {
        if (!t[Do.ExtraData])
          throw new Error(
            `Missing extra locale data for the locale "${
              t[Do.LocaleId]
            }". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`
          );
      }
      function zl(t, e) {
        for (let n = e; n > -1; n--) if (void 0 !== t[n]) return t[n];
        throw new Error("Locale data API: locale data undefined");
      }
      function ql(t) {
        const [e, n] = t.split(":");
        return { hours: +e, minutes: +n };
      }
      const Bl = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        Wl = {},
        Gl = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
        Zl = (function () {
          var t = { Short: 0, ShortGMT: 1, Long: 2, Extended: 3 };
          return (
            (t[t.Short] = "Short"),
            (t[t.ShortGMT] = "ShortGMT"),
            (t[t.Long] = "Long"),
            (t[t.Extended] = "Extended"),
            t
          );
        })(),
        Ql = (function () {
          var t = {
            FullYear: 0,
            Month: 1,
            Date: 2,
            Hours: 3,
            Minutes: 4,
            Seconds: 5,
            FractionalSeconds: 6,
            Day: 7,
          };
          return (
            (t[t.FullYear] = "FullYear"),
            (t[t.Month] = "Month"),
            (t[t.Date] = "Date"),
            (t[t.Hours] = "Hours"),
            (t[t.Minutes] = "Minutes"),
            (t[t.Seconds] = "Seconds"),
            (t[t.FractionalSeconds] = "FractionalSeconds"),
            (t[t.Day] = "Day"),
            t
          );
        })(),
        Yl = (function () {
          var t = { DayPeriods: 0, Days: 1, Months: 2, Eras: 3 };
          return (
            (t[t.DayPeriods] = "DayPeriods"),
            (t[t.Days] = "Days"),
            (t[t.Months] = "Months"),
            (t[t.Eras] = "Eras"),
            t
          );
        })();
      function Kl(t, e) {
        return (
          e &&
            (t = t.replace(/\{([^}]+)}/g, function (t, n) {
              return null != e && n in e ? e[n] : t;
            })),
          t
        );
      }
      function Jl(t, e, n = "-", r, s) {
        let i = "";
        (t < 0 || (s && t <= 0)) && (s ? (t = 1 - t) : ((t = -t), (i = n)));
        let o = String(t);
        for (; o.length < e; ) o = "0" + o;
        return r && (o = o.substr(o.length - e)), i + o;
      }
      function Xl(t, e, n = 0, r = !1, s = !1) {
        return function (i, o) {
          let a = (function (t, e) {
            switch (t) {
              case Ql.FullYear:
                return e.getFullYear();
              case Ql.Month:
                return e.getMonth();
              case Ql.Date:
                return e.getDate();
              case Ql.Hours:
                return e.getHours();
              case Ql.Minutes:
                return e.getMinutes();
              case Ql.Seconds:
                return e.getSeconds();
              case Ql.FractionalSeconds:
                return e.getMilliseconds();
              case Ql.Day:
                return e.getDay();
              default:
                throw new Error(`Unknown DateType value "${t}".`);
            }
          })(t, i);
          if (((n > 0 || a > -n) && (a += n), t === Ql.Hours))
            0 === a && -12 === n && (a = 12);
          else if (t === Ql.FractionalSeconds)
            return (l = e), Jl(a, 3).substr(0, l);
          var l;
          const c = Vl(o, Ul.MinusSign);
          return Jl(a, e, c, r, s);
        };
      }
      function tc(t, e, n = Dl.Format, r = !1) {
        return function (s, i) {
          return (function (t, e, n, r, s, i) {
            switch (n) {
              case Yl.Months:
                return (function (t, e, n) {
                  const r = Io(t),
                    s = zl([r[Do.MonthsFormat], r[Do.MonthsStandalone]], e);
                  return zl(s, n);
                })(e, s, r)[t.getMonth()];
              case Yl.Days:
                return (function (t, e, n) {
                  const r = Io(t),
                    s = zl([r[Do.DaysFormat], r[Do.DaysStandalone]], e);
                  return zl(s, n);
                })(e, s, r)[t.getDay()];
              case Yl.DayPeriods:
                const o = t.getHours(),
                  a = t.getMinutes();
                if (i) {
                  const t = (function (t) {
                      const e = Io(t);
                      return (
                        $l(e),
                        (e[Do.ExtraData][2] || []).map((t) =>
                          "string" == typeof t ? ql(t) : [ql(t[0]), ql(t[1])]
                        )
                      );
                    })(e),
                    n = (function (t, e, n) {
                      const r = Io(t);
                      $l(r);
                      const s =
                        zl([r[Do.ExtraData][0], r[Do.ExtraData][1]], e) || [];
                      return zl(s, n) || [];
                    })(e, s, r);
                  let i;
                  if (
                    (t.forEach((t, e) => {
                      if (Array.isArray(t)) {
                        const { hours: r, minutes: s } = t[0],
                          { hours: l, minutes: c } = t[1];
                        o >= r &&
                          a >= s &&
                          (o < l || (o === l && a < c)) &&
                          (i = n[e]);
                      } else {
                        const { hours: r, minutes: s } = t;
                        r === o && s === a && (i = n[e]);
                      }
                    }),
                    i)
                  )
                    return i;
                }
                return (function (t, e, n) {
                  const r = Io(t),
                    s = zl(
                      [r[Do.DayPeriodsFormat], r[Do.DayPeriodsStandalone]],
                      e
                    );
                  return zl(s, n);
                })(e, s, r)[o < 12 ? 0 : 1];
              case Yl.Eras:
                return (function (t, e) {
                  return zl(Io(t)[Do.Eras], e);
                })(e, r)[t.getFullYear() <= 0 ? 0 : 1];
              default:
                throw new Error("unexpected translation type " + n);
            }
          })(s, i, t, e, n, r);
        };
      }
      function ec(t) {
        return function (e, n, r) {
          const s = -1 * r,
            i = Vl(n, Ul.MinusSign),
            o = s > 0 ? Math.floor(s / 60) : Math.ceil(s / 60);
          switch (t) {
            case Zl.Short:
              return (
                (s >= 0 ? "+" : "") + Jl(o, 2, i) + Jl(Math.abs(s % 60), 2, i)
              );
            case Zl.ShortGMT:
              return "GMT" + (s >= 0 ? "+" : "") + Jl(o, 1, i);
            case Zl.Long:
              return (
                "GMT" +
                (s >= 0 ? "+" : "") +
                Jl(o, 2, i) +
                ":" +
                Jl(Math.abs(s % 60), 2, i)
              );
            case Zl.Extended:
              return 0 === r
                ? "Z"
                : (s >= 0 ? "+" : "") +
                    Jl(o, 2, i) +
                    ":" +
                    Jl(Math.abs(s % 60), 2, i);
            default:
              throw new Error(`Unknown zone width "${t}"`);
          }
        };
      }
      function nc(t, e = !1) {
        return function (n, r) {
          let s;
          if (e) {
            const t = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
              e = n.getDate();
            s = 1 + Math.floor((e + t) / 7);
          } else {
            const t = (function (t) {
                const e = new Date(t, 0, 1).getDay();
                return new Date(t, 0, 1 + (e <= 4 ? 4 : 11) - e);
              })(n.getFullYear()),
              e =
                ((i = n),
                new Date(
                  i.getFullYear(),
                  i.getMonth(),
                  i.getDate() + (4 - i.getDay())
                )).getTime() - t.getTime();
            s = 1 + Math.round(e / 6048e5);
          }
          var i;
          return Jl(s, t, Vl(r, Ul.MinusSign));
        };
      }
      const rc = {};
      function sc(t, e) {
        t = t.replace(/:/g, "");
        const n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4;
        return isNaN(n) ? e : n;
      }
      function ic(t) {
        return t instanceof Date && !isNaN(t.valueOf());
      }
      class oc {}
      let ac = (() => {
        class t extends oc {
          constructor(t) {
            super(), (this.locale = t);
          }
          getPluralCategory(t, e) {
            switch (
              (function (t) {
                return Io(t)[Do.PluralCase];
              })(e || this.locale)(t)
            ) {
              case Rl.Zero:
                return "zero";
              case Rl.One:
                return "one";
              case Rl.Two:
                return "two";
              case Rl.Few:
                return "few";
              case Rl.Many:
                return "many";
              default:
                return "other";
            }
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Bt(xa));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function lc(t, e) {
        e = encodeURIComponent(e);
        for (const n of t.split(";")) {
          const t = n.indexOf("="),
            [r, s] = -1 == t ? [n, ""] : [n.slice(0, t), n.slice(t + 1)];
          if (r.trim() === e) return decodeURIComponent(s);
        }
        return null;
      }
      let cc = (() => {
        class t {
          constructor(t, e, n, r) {
            (this._iterableDiffers = t),
              (this._keyValueDiffers = e),
              (this._ngEl = n),
              (this._renderer = r),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._initialClasses = []),
              (this._rawClass = null);
          }
          set klass(t) {
            this._removeClasses(this._initialClasses),
              (this._initialClasses =
                "string" == typeof t ? t.split(/\s+/) : []),
              this._applyClasses(this._initialClasses),
              this._applyClasses(this._rawClass);
          }
          set ngClass(t) {
            this._removeClasses(this._rawClass),
              this._applyClasses(this._initialClasses),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._rawClass = "string" == typeof t ? t.split(/\s+/) : t),
              this._rawClass &&
                (hi(this._rawClass)
                  ? (this._iterableDiffer = this._iterableDiffers
                      .find(this._rawClass)
                      .create())
                  : (this._keyValueDiffer = this._keyValueDiffers
                      .find(this._rawClass)
                      .create()));
          }
          ngDoCheck() {
            if (this._iterableDiffer) {
              const t = this._iterableDiffer.diff(this._rawClass);
              t && this._applyIterableChanges(t);
            } else if (this._keyValueDiffer) {
              const t = this._keyValueDiffer.diff(this._rawClass);
              t && this._applyKeyValueChanges(t);
            }
          }
          _applyKeyValueChanges(t) {
            t.forEachAddedItem((t) => this._toggleClass(t.key, t.currentValue)),
              t.forEachChangedItem((t) =>
                this._toggleClass(t.key, t.currentValue)
              ),
              t.forEachRemovedItem((t) => {
                t.previousValue && this._toggleClass(t.key, !1);
              });
          }
          _applyIterableChanges(t) {
            t.forEachAddedItem((t) => {
              if ("string" != typeof t.item)
                throw new Error(
                  "NgClass can only toggle CSS classes expressed as strings, got " +
                    vt(t.item)
                );
              this._toggleClass(t.item, !0);
            }),
              t.forEachRemovedItem((t) => this._toggleClass(t.item, !1));
          }
          _applyClasses(t) {
            t &&
              (Array.isArray(t) || t instanceof Set
                ? t.forEach((t) => this._toggleClass(t, !0))
                : Object.keys(t).forEach((e) => this._toggleClass(e, !!t[e])));
          }
          _removeClasses(t) {
            t &&
              (Array.isArray(t) || t instanceof Set
                ? t.forEach((t) => this._toggleClass(t, !1))
                : Object.keys(t).forEach((t) => this._toggleClass(t, !1)));
          }
          _toggleClass(t, e) {
            (t = t.trim()) &&
              t.split(/\s+/g).forEach((t) => {
                e
                  ? this._renderer.addClass(this._ngEl.nativeElement, t)
                  : this._renderer.removeClass(this._ngEl.nativeElement, t);
              });
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(_i(fo), _i(go), _i(Zi), _i(Ji));
          }),
          (t.ɵdir = he({
            type: t,
            selectors: [["", "ngClass", ""]],
            inputs: { klass: ["class", "klass"], ngClass: "ngClass" },
          })),
          t
        );
      })();
      class uc {
        constructor(t, e, n, r) {
          (this.$implicit = t),
            (this.ngForOf = e),
            (this.index = n),
            (this.count = r);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let hc = (() => {
        class t {
          constructor(t, e, n) {
            (this._viewContainer = t),
              (this._template = e),
              (this._differs = n),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(t) {
            (this._ngForOf = t), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(t) {
            tr() &&
              null != t &&
              "function" != typeof t &&
              console &&
              console.warn &&
              console.warn(
                `trackBy must be a function, but received ${JSON.stringify(
                  t
                )}. See https://angular.io/api/common/NgForOf#change-propagation for more information.`
              ),
              (this._trackByFn = t);
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(t) {
            t && (this._template = t);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const n = this._ngForOf;
              if (!this._differ && n)
                try {
                  this._differ = this._differs
                    .find(n)
                    .create(this.ngForTrackBy);
                } catch (e) {
                  throw new Error(
                    `Cannot find a differ supporting object '${n}' of type '${
                      ((t = n), t.name || typeof t)
                    }'. NgFor only supports binding to Iterables such as Arrays.`
                  );
                }
            }
            var t;
            if (this._differ) {
              const t = this._differ.diff(this._ngForOf);
              t && this._applyChanges(t);
            }
          }
          _applyChanges(t) {
            const e = [];
            t.forEachOperation((t, n, r) => {
              if (null == t.previousIndex) {
                const n = this._viewContainer.createEmbeddedView(
                    this._template,
                    new uc(null, this._ngForOf, -1, -1),
                    null === r ? void 0 : r
                  ),
                  s = new dc(t, n);
                e.push(s);
              } else if (null == r)
                this._viewContainer.remove(null === n ? void 0 : n);
              else if (null !== n) {
                const s = this._viewContainer.get(n);
                this._viewContainer.move(s, r);
                const i = new dc(t, s);
                e.push(i);
              }
            });
            for (let n = 0; n < e.length; n++)
              this._perViewChange(e[n].view, e[n].record);
            for (let n = 0, r = this._viewContainer.length; n < r; n++) {
              const t = this._viewContainer.get(n);
              (t.context.index = n),
                (t.context.count = r),
                (t.context.ngForOf = this._ngForOf);
            }
            t.forEachIdentityChange((t) => {
              this._viewContainer.get(t.currentIndex).context.$implicit =
                t.item;
            });
          }
          _perViewChange(t, e) {
            t.context.$implicit = e.item;
          }
          static ngTemplateContextGuard(t, e) {
            return !0;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(_i(bo), _i(_o), _i(fo));
          }),
          (t.ɵdir = he({
            type: t,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
          })),
          t
        );
      })();
      class dc {
        constructor(t, e) {
          (this.record = t), (this.view = e);
        }
      }
      let pc = (() => {
        class t {
          constructor(t, e) {
            (this._viewContainer = t),
              (this._context = new fc()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = e);
          }
          set ngIf(t) {
            (this._context.$implicit = this._context.ngIf = t),
              this._updateView();
          }
          set ngIfThen(t) {
            gc("ngIfThen", t),
              (this._thenTemplateRef = t),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(t) {
            gc("ngIfElse", t),
              (this._elseTemplateRef = t),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(t, e) {
            return !0;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(_i(bo), _i(_o));
          }),
          (t.ɵdir = he({
            type: t,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse",
            },
          })),
          t
        );
      })();
      class fc {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function gc(t, e) {
        if (e && !e.createEmbeddedView)
          throw new Error(
            `${t} must be a TemplateRef, but received '${vt(e)}'.`
          );
      }
      let mc = (() => {
          class t {
            constructor(t) {
              this.locale = t;
            }
            transform(e, n = "mediumDate", r, s) {
              if (null == e || "" === e || e != e) return null;
              try {
                return (function (t, e, n, r) {
                  let s = (function (t) {
                    if (ic(t)) return t;
                    if ("number" == typeof t && !isNaN(t)) return new Date(t);
                    if ("string" == typeof t) {
                      t = t.trim();
                      const e = parseFloat(t);
                      if (!isNaN(t - e)) return new Date(e);
                      if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(t)) {
                        const [e, n, r] = t.split("-").map((t) => +t);
                        return new Date(e, n - 1, r);
                      }
                      let n;
                      if ((n = t.match(Bl)))
                        return (function (t) {
                          const e = new Date(0);
                          let n = 0,
                            r = 0;
                          const s = t[8] ? e.setUTCFullYear : e.setFullYear,
                            i = t[8] ? e.setUTCHours : e.setHours;
                          t[9] &&
                            ((n = Number(t[9] + t[10])),
                            (r = Number(t[9] + t[11]))),
                            s.call(
                              e,
                              Number(t[1]),
                              Number(t[2]) - 1,
                              Number(t[3])
                            );
                          const o = Number(t[4] || 0) - n,
                            a = Number(t[5] || 0) - r,
                            l = Number(t[6] || 0),
                            c = Math.round(
                              1e3 * parseFloat("0." + (t[7] || 0))
                            );
                          return i.call(e, o, a, l, c), e;
                        })(n);
                    }
                    const e = new Date(t);
                    if (!ic(e))
                      throw new Error(`Unable to convert "${t}" into a date`);
                    return e;
                  })(t);
                  e =
                    (function t(e, n) {
                      const r = (function (t) {
                        return Io(t)[Do.LocaleId];
                      })(e);
                      if (((Wl[r] = Wl[r] || {}), Wl[r][n])) return Wl[r][n];
                      let s = "";
                      switch (n) {
                        case "shortDate":
                          s = Ll(e, Nl.Short);
                          break;
                        case "mediumDate":
                          s = Ll(e, Nl.Medium);
                          break;
                        case "longDate":
                          s = Ll(e, Nl.Long);
                          break;
                        case "fullDate":
                          s = Ll(e, Nl.Full);
                          break;
                        case "shortTime":
                          s = Fl(e, Nl.Short);
                          break;
                        case "mediumTime":
                          s = Fl(e, Nl.Medium);
                          break;
                        case "longTime":
                          s = Fl(e, Nl.Long);
                          break;
                        case "fullTime":
                          s = Fl(e, Nl.Full);
                          break;
                        case "short":
                          const n = t(e, "shortTime"),
                            r = t(e, "shortDate");
                          s = Kl(Hl(e, Nl.Short), [n, r]);
                          break;
                        case "medium":
                          const i = t(e, "mediumTime"),
                            o = t(e, "mediumDate");
                          s = Kl(Hl(e, Nl.Medium), [i, o]);
                          break;
                        case "long":
                          const a = t(e, "longTime"),
                            l = t(e, "longDate");
                          s = Kl(Hl(e, Nl.Long), [a, l]);
                          break;
                        case "full":
                          const c = t(e, "fullTime"),
                            u = t(e, "fullDate");
                          s = Kl(Hl(e, Nl.Full), [c, u]);
                      }
                      return s && (Wl[r][n] = s), s;
                    })(n, e) || e;
                  let i,
                    o = [];
                  for (; e; ) {
                    if (((i = Gl.exec(e)), !i)) {
                      o.push(e);
                      break;
                    }
                    {
                      o = o.concat(i.slice(1));
                      const t = o.pop();
                      if (!t) break;
                      e = t;
                    }
                  }
                  let a = s.getTimezoneOffset();
                  r &&
                    ((a = sc(r, a)),
                    (s = (function (t, e, n) {
                      const r = t.getTimezoneOffset();
                      return (function (t, e) {
                        return (
                          (t = new Date(t.getTime())).setMinutes(
                            t.getMinutes() + e
                          ),
                          t
                        );
                      })(t, -1 * (sc(e, r) - r));
                    })(s, r)));
                  let l = "";
                  return (
                    o.forEach((t) => {
                      const e = (function (t) {
                        if (rc[t]) return rc[t];
                        let e;
                        switch (t) {
                          case "G":
                          case "GG":
                          case "GGG":
                            e = tc(Yl.Eras, jl.Abbreviated);
                            break;
                          case "GGGG":
                            e = tc(Yl.Eras, jl.Wide);
                            break;
                          case "GGGGG":
                            e = tc(Yl.Eras, jl.Narrow);
                            break;
                          case "y":
                            e = Xl(Ql.FullYear, 1, 0, !1, !0);
                            break;
                          case "yy":
                            e = Xl(Ql.FullYear, 2, 0, !0, !0);
                            break;
                          case "yyy":
                            e = Xl(Ql.FullYear, 3, 0, !1, !0);
                            break;
                          case "yyyy":
                            e = Xl(Ql.FullYear, 4, 0, !1, !0);
                            break;
                          case "M":
                          case "L":
                            e = Xl(Ql.Month, 1, 1);
                            break;
                          case "MM":
                          case "LL":
                            e = Xl(Ql.Month, 2, 1);
                            break;
                          case "MMM":
                            e = tc(Yl.Months, jl.Abbreviated);
                            break;
                          case "MMMM":
                            e = tc(Yl.Months, jl.Wide);
                            break;
                          case "MMMMM":
                            e = tc(Yl.Months, jl.Narrow);
                            break;
                          case "LLL":
                            e = tc(Yl.Months, jl.Abbreviated, Dl.Standalone);
                            break;
                          case "LLLL":
                            e = tc(Yl.Months, jl.Wide, Dl.Standalone);
                            break;
                          case "LLLLL":
                            e = tc(Yl.Months, jl.Narrow, Dl.Standalone);
                            break;
                          case "w":
                            e = nc(1);
                            break;
                          case "ww":
                            e = nc(2);
                            break;
                          case "W":
                            e = nc(1, !0);
                            break;
                          case "d":
                            e = Xl(Ql.Date, 1);
                            break;
                          case "dd":
                            e = Xl(Ql.Date, 2);
                            break;
                          case "E":
                          case "EE":
                          case "EEE":
                            e = tc(Yl.Days, jl.Abbreviated);
                            break;
                          case "EEEE":
                            e = tc(Yl.Days, jl.Wide);
                            break;
                          case "EEEEE":
                            e = tc(Yl.Days, jl.Narrow);
                            break;
                          case "EEEEEE":
                            e = tc(Yl.Days, jl.Short);
                            break;
                          case "a":
                          case "aa":
                          case "aaa":
                            e = tc(Yl.DayPeriods, jl.Abbreviated);
                            break;
                          case "aaaa":
                            e = tc(Yl.DayPeriods, jl.Wide);
                            break;
                          case "aaaaa":
                            e = tc(Yl.DayPeriods, jl.Narrow);
                            break;
                          case "b":
                          case "bb":
                          case "bbb":
                            e = tc(
                              Yl.DayPeriods,
                              jl.Abbreviated,
                              Dl.Standalone,
                              !0
                            );
                            break;
                          case "bbbb":
                            e = tc(Yl.DayPeriods, jl.Wide, Dl.Standalone, !0);
                            break;
                          case "bbbbb":
                            e = tc(Yl.DayPeriods, jl.Narrow, Dl.Standalone, !0);
                            break;
                          case "B":
                          case "BB":
                          case "BBB":
                            e = tc(
                              Yl.DayPeriods,
                              jl.Abbreviated,
                              Dl.Format,
                              !0
                            );
                            break;
                          case "BBBB":
                            e = tc(Yl.DayPeriods, jl.Wide, Dl.Format, !0);
                            break;
                          case "BBBBB":
                            e = tc(Yl.DayPeriods, jl.Narrow, Dl.Format, !0);
                            break;
                          case "h":
                            e = Xl(Ql.Hours, 1, -12);
                            break;
                          case "hh":
                            e = Xl(Ql.Hours, 2, -12);
                            break;
                          case "H":
                            e = Xl(Ql.Hours, 1);
                            break;
                          case "HH":
                            e = Xl(Ql.Hours, 2);
                            break;
                          case "m":
                            e = Xl(Ql.Minutes, 1);
                            break;
                          case "mm":
                            e = Xl(Ql.Minutes, 2);
                            break;
                          case "s":
                            e = Xl(Ql.Seconds, 1);
                            break;
                          case "ss":
                            e = Xl(Ql.Seconds, 2);
                            break;
                          case "S":
                            e = Xl(Ql.FractionalSeconds, 1);
                            break;
                          case "SS":
                            e = Xl(Ql.FractionalSeconds, 2);
                            break;
                          case "SSS":
                            e = Xl(Ql.FractionalSeconds, 3);
                            break;
                          case "Z":
                          case "ZZ":
                          case "ZZZ":
                            e = ec(Zl.Short);
                            break;
                          case "ZZZZZ":
                            e = ec(Zl.Extended);
                            break;
                          case "O":
                          case "OO":
                          case "OOO":
                          case "z":
                          case "zz":
                          case "zzz":
                            e = ec(Zl.ShortGMT);
                            break;
                          case "OOOO":
                          case "ZZZZ":
                          case "zzzz":
                            e = ec(Zl.Long);
                            break;
                          default:
                            return null;
                        }
                        return (rc[t] = e), e;
                      })(t);
                      l += e
                        ? e(s, n, a)
                        : "''" === t
                        ? "'"
                        : t.replace(/(^'|'$)/g, "").replace(/''/g, "'");
                    }),
                    l
                  );
                })(e, n, s || this.locale, r);
              } catch (i) {
                throw (function (t, e) {
                  return Error(
                    `InvalidPipeArgument: '${e}' for pipe '${vt(t)}'`
                  );
                })(t, i.message);
              }
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(_i(xa));
            }),
            (t.ɵpipe = de({ name: "date", type: t, pure: !0 })),
            t
          );
        })(),
        yc = (() => {
          class t {
            constructor(t) {
              (this.differs = t), (this.keyValues = []);
            }
            transform(t, e = vc) {
              if (!t || (!(t instanceof Map) && "object" != typeof t))
                return null;
              this.differ || (this.differ = this.differs.find(t).create());
              const n = this.differ.diff(t);
              return (
                n &&
                  ((this.keyValues = []),
                  n.forEachItem((t) => {
                    this.keyValues.push({ key: t.key, value: t.currentValue });
                  }),
                  this.keyValues.sort(e)),
                this.keyValues
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(_i(go));
            }),
            (t.ɵpipe = de({ name: "keyvalue", type: t, pure: !1 })),
            t
          );
        })();
      function vc(t, e) {
        const n = t.key,
          r = e.key;
        if (n === r) return 0;
        if (void 0 === n) return 1;
        if (void 0 === r) return -1;
        if (null === n) return 1;
        if (null === r) return -1;
        if ("string" == typeof n && "string" == typeof r) return n < r ? -1 : 1;
        if ("number" == typeof n && "number" == typeof r) return n - r;
        if ("boolean" == typeof n && "boolean" == typeof r)
          return n < r ? -1 : 1;
        const s = String(n),
          i = String(r);
        return s == i ? 0 : s < i ? -1 : 1;
      }
      let _c = (() => {
          class t {}
          return (
            (t.ɵmod = ce({ type: t })),
            (t.ɵinj = ct({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [{ provide: oc, useClass: ac }],
            })),
            t
          );
        })(),
        wc = (() => {
          class t {}
          return (
            (t.ɵprov = lt({
              token: t,
              providedIn: "root",
              factory: () => new bc(Bt(gl), window, Bt(Yn)),
            })),
            t
          );
        })();
      class bc {
        constructor(t, e, n) {
          (this.document = t),
            (this.window = e),
            (this.errorHandler = n),
            (this.offset = () => [0, 0]);
        }
        setOffset(t) {
          this.offset = Array.isArray(t) ? () => t : t;
        }
        getScrollPosition() {
          return this.supportScrollRestoration()
            ? [this.window.scrollX, this.window.scrollY]
            : [0, 0];
        }
        scrollToPosition(t) {
          this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1]);
        }
        scrollToAnchor(t) {
          if (this.supportScrollRestoration()) {
            t =
              this.window.CSS && this.window.CSS.escape
                ? this.window.CSS.escape(t)
                : t.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, "\\$1");
            try {
              const e = this.document.querySelector("#" + t);
              if (e) return void this.scrollToElement(e);
              const n = this.document.querySelector(`[name='${t}']`);
              if (n) return void this.scrollToElement(n);
            } catch (e) {
              this.errorHandler.handleError(e);
            }
          }
        }
        setHistoryScrollRestoration(t) {
          if (this.supportScrollRestoration()) {
            const e = this.window.history;
            e && e.scrollRestoration && (e.scrollRestoration = t);
          }
        }
        scrollToElement(t) {
          const e = t.getBoundingClientRect(),
            n = e.left + this.window.pageXOffset,
            r = e.top + this.window.pageYOffset,
            s = this.offset();
          this.window.scrollTo(n - s[0], r - s[1]);
        }
        supportScrollRestoration() {
          try {
            return !!this.window && !!this.window.scrollTo;
          } catch (t) {
            return !1;
          }
        }
      }
      class Cc extends class extends class {} {
        constructor() {
          super();
        }
        supportsDOMEvents() {
          return !0;
        }
      } {
        static makeCurrent() {
          var t;
          (t = new Cc()), pl || (pl = t);
        }
        getProperty(t, e) {
          return t[e];
        }
        log(t) {
          window.console && window.console.log && window.console.log(t);
        }
        logGroup(t) {
          window.console && window.console.group && window.console.group(t);
        }
        logGroupEnd() {
          window.console &&
            window.console.groupEnd &&
            window.console.groupEnd();
        }
        onAndCancel(t, e, n) {
          return (
            t.addEventListener(e, n, !1),
            () => {
              t.removeEventListener(e, n, !1);
            }
          );
        }
        dispatchEvent(t, e) {
          t.dispatchEvent(e);
        }
        remove(t) {
          return t.parentNode && t.parentNode.removeChild(t), t;
        }
        getValue(t) {
          return t.value;
        }
        createElement(t, e) {
          return (e = e || this.getDefaultDocument()).createElement(t);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(t) {
          return t instanceof DocumentFragment;
        }
        getGlobalEventTarget(t, e) {
          return "window" === e
            ? window
            : "document" === e
            ? t
            : "body" === e
            ? t.body
            : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(t) {
          const e =
            xc || ((xc = document.querySelector("base")), xc)
              ? xc.getAttribute("href")
              : null;
          return null == e
            ? null
            : ((n = e),
              Sc || (Sc = document.createElement("a")),
              Sc.setAttribute("href", n),
              "/" === Sc.pathname.charAt(0) ? Sc.pathname : "/" + Sc.pathname);
          var n;
        }
        resetBaseElement() {
          xc = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        performanceNow() {
          return window.performance && window.performance.now
            ? window.performance.now()
            : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(t) {
          return lc(document.cookie, t);
        }
      }
      let Sc,
        xc = null;
      const Ec = new jt("TRANSITION_ID"),
        kc = [
          {
            provide: ga,
            useFactory: function (t, e, n) {
              return () => {
                n.get(ma).donePromise.then(() => {
                  const n = fl();
                  Array.prototype.slice
                    .apply(e.querySelectorAll("style[ng-transition]"))
                    .filter((e) => e.getAttribute("ng-transition") === t)
                    .forEach((t) => n.remove(t));
                });
              };
            },
            deps: [Ec, gl, ei],
            multi: !0,
          },
        ];
      class Oc {
        static init() {
          var t;
          (t = new Oc()), (Qa = t);
        }
        addToWindow(t) {
          (Ot.getAngularTestability = (e, n = !0) => {
            const r = t.findTestabilityInTree(e, n);
            if (null == r)
              throw new Error("Could not find testability for element.");
            return r;
          }),
            (Ot.getAllAngularTestabilities = () => t.getAllTestabilities()),
            (Ot.getAllAngularRootElements = () => t.getAllRootElements()),
            Ot.frameworkStabilizers || (Ot.frameworkStabilizers = []),
            Ot.frameworkStabilizers.push((t) => {
              const e = Ot.getAllAngularTestabilities();
              let n = e.length,
                r = !1;
              const s = function (e) {
                (r = r || e), n--, 0 == n && t(r);
              };
              e.forEach(function (t) {
                t.whenStable(s);
              });
            });
        }
        findTestabilityInTree(t, e, n) {
          if (null == e) return null;
          const r = t.getTestability(e);
          return null != r
            ? r
            : n
            ? fl().isShadowRoot(e)
              ? this.findTestabilityInTree(t, e.host, !0)
              : this.findTestabilityInTree(t, e.parentElement, !0)
            : null;
        }
      }
      const Pc = new jt("EventManagerPlugins");
      let Tc = (() => {
        class t {
          constructor(t, e) {
            (this._zone = e),
              (this._eventNameToPlugin = new Map()),
              t.forEach((t) => (t.manager = this)),
              (this._plugins = t.slice().reverse());
          }
          addEventListener(t, e, n) {
            return this._findPluginFor(e).addEventListener(t, e, n);
          }
          addGlobalEventListener(t, e, n) {
            return this._findPluginFor(e).addGlobalEventListener(t, e, n);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(t) {
            const e = this._eventNameToPlugin.get(t);
            if (e) return e;
            const n = this._plugins;
            for (let r = 0; r < n.length; r++) {
              const e = n[r];
              if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e;
            }
            throw new Error("No event manager plugin found for event " + t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Bt(Pc), Bt(Ua));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class Mc {
        constructor(t) {
          this._doc = t;
        }
        addGlobalEventListener(t, e, n) {
          const r = fl().getGlobalEventTarget(this._doc, t);
          if (!r)
            throw new Error(`Unsupported event target ${r} for event ${e}`);
          return this.addEventListener(r, e, n);
        }
      }
      let Ac = (() => {
          class t {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(t) {
              const e = new Set();
              t.forEach((t) => {
                this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t));
              }),
                this.onStylesAdded(e);
            }
            onStylesAdded(t) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Ic = (() => {
          class t extends Ac {
            constructor(t) {
              super(),
                (this._doc = t),
                (this._hostNodes = new Set()),
                (this._styleNodes = new Set()),
                this._hostNodes.add(t.head);
            }
            _addStylesToHost(t, e) {
              t.forEach((t) => {
                const n = this._doc.createElement("style");
                (n.textContent = t), this._styleNodes.add(e.appendChild(n));
              });
            }
            addHost(t) {
              this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t);
            }
            removeHost(t) {
              this._hostNodes.delete(t);
            }
            onStylesAdded(t) {
              this._hostNodes.forEach((e) => this._addStylesToHost(t, e));
            }
            ngOnDestroy() {
              this._styleNodes.forEach((t) => fl().remove(t));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Bt(gl));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const Rc = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        Dc = /%COMP%/g;
      function jc(t, e, n) {
        for (let r = 0; r < e.length; r++) {
          let s = e[r];
          Array.isArray(s) ? jc(t, s, n) : ((s = s.replace(Dc, t)), n.push(s));
        }
        return n;
      }
      function Nc(t) {
        return (e) => {
          if ("__ngUnwrap__" === e) return t;
          !1 === t(e) && (e.preventDefault(), (e.returnValue = !1));
        };
      }
      let Uc = (() => {
        class t {
          constructor(t, e, n) {
            (this.eventManager = t),
              (this.sharedStylesHost = e),
              (this.appId = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new Lc(t));
          }
          createRenderer(t, e) {
            if (!t || !e) return this.defaultRenderer;
            switch (e.encapsulation) {
              case ee.Emulated: {
                let n = this.rendererByCompId.get(e.id);
                return (
                  n ||
                    ((n = new Fc(
                      this.eventManager,
                      this.sharedStylesHost,
                      e,
                      this.appId
                    )),
                    this.rendererByCompId.set(e.id, n)),
                  n.applyToHost(t),
                  n
                );
              }
              case ee.Native:
              case ee.ShadowDom:
                return new Hc(this.eventManager, this.sharedStylesHost, t, e);
              default:
                if (!this.rendererByCompId.has(e.id)) {
                  const t = jc(e.id, e.styles, []);
                  this.sharedStylesHost.addStyles(t),
                    this.rendererByCompId.set(e.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Bt(Tc), Bt(Ic), Bt(ya));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class Lc {
        constructor(t) {
          (this.eventManager = t), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(t, e) {
          return e
            ? document.createElementNS(Rc[e] || e, t)
            : document.createElement(t);
        }
        createComment(t) {
          return document.createComment(t);
        }
        createText(t) {
          return document.createTextNode(t);
        }
        appendChild(t, e) {
          t.appendChild(e);
        }
        insertBefore(t, e, n) {
          t && t.insertBefore(e, n);
        }
        removeChild(t, e) {
          t && t.removeChild(e);
        }
        selectRootElement(t, e) {
          let n = "string" == typeof t ? document.querySelector(t) : t;
          if (!n)
            throw new Error(`The selector "${t}" did not match any elements`);
          return e || (n.textContent = ""), n;
        }
        parentNode(t) {
          return t.parentNode;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        setAttribute(t, e, n, r) {
          if (r) {
            e = r + ":" + e;
            const s = Rc[r];
            s ? t.setAttributeNS(s, e, n) : t.setAttribute(e, n);
          } else t.setAttribute(e, n);
        }
        removeAttribute(t, e, n) {
          if (n) {
            const r = Rc[n];
            r ? t.removeAttributeNS(r, e) : t.removeAttribute(`${n}:${e}`);
          } else t.removeAttribute(e);
        }
        addClass(t, e) {
          t.classList.add(e);
        }
        removeClass(t, e) {
          t.classList.remove(e);
        }
        setStyle(t, e, n, r) {
          r & Ki.DashCase
            ? t.style.setProperty(e, n, r & Ki.Important ? "important" : "")
            : (t.style[e] = n);
        }
        removeStyle(t, e, n) {
          n & Ki.DashCase ? t.style.removeProperty(e) : (t.style[e] = "");
        }
        setProperty(t, e, n) {
          t[e] = n;
        }
        setValue(t, e) {
          t.nodeValue = e;
        }
        listen(t, e, n) {
          return "string" == typeof t
            ? this.eventManager.addGlobalEventListener(t, e, Nc(n))
            : this.eventManager.addEventListener(t, e, Nc(n));
        }
      }
      class Fc extends Lc {
        constructor(t, e, n, r) {
          super(t), (this.component = n);
          const s = jc(r + "-" + n.id, n.styles, []);
          e.addStyles(s),
            (this.contentAttr = "_ngcontent-%COMP%".replace(
              Dc,
              r + "-" + n.id
            )),
            (this.hostAttr = (function (t) {
              return "_nghost-%COMP%".replace(Dc, t);
            })(r + "-" + n.id));
        }
        applyToHost(t) {
          super.setAttribute(t, this.hostAttr, "");
        }
        createElement(t, e) {
          const n = super.createElement(t, e);
          return super.setAttribute(n, this.contentAttr, ""), n;
        }
      }
      class Hc extends Lc {
        constructor(t, e, n, r) {
          super(t),
            (this.sharedStylesHost = e),
            (this.hostEl = n),
            (this.component = r),
            (this.shadowRoot =
              r.encapsulation === ee.ShadowDom
                ? n.attachShadow({ mode: "open" })
                : n.createShadowRoot()),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const s = jc(r.id, r.styles, []);
          for (let i = 0; i < s.length; i++) {
            const t = document.createElement("style");
            (t.textContent = s[i]), this.shadowRoot.appendChild(t);
          }
        }
        nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(t, e) {
          return super.appendChild(this.nodeOrShadowRoot(t), e);
        }
        insertBefore(t, e, n) {
          return super.insertBefore(this.nodeOrShadowRoot(t), e, n);
        }
        removeChild(t, e) {
          return super.removeChild(this.nodeOrShadowRoot(t), e);
        }
        parentNode(t) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(t))
          );
        }
      }
      let Vc = (() => {
        class t extends Mc {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return !0;
          }
          addEventListener(t, e, n) {
            return (
              t.addEventListener(e, n, !1),
              () => this.removeEventListener(t, e, n)
            );
          }
          removeEventListener(t, e, n) {
            return t.removeEventListener(e, n);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Bt(gl));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const $c = ["alt", "control", "meta", "shift"],
        zc = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        qc = {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
          E: "5",
          F: "6",
          G: "7",
          H: "8",
          I: "9",
          J: "*",
          K: "+",
          M: "-",
          N: ".",
          O: "/",
          "`": "0",
          "\x90": "NumLock",
        },
        Bc = {
          alt: (t) => t.altKey,
          control: (t) => t.ctrlKey,
          meta: (t) => t.metaKey,
          shift: (t) => t.shiftKey,
        };
      let Wc = (() => {
        class t extends Mc {
          constructor(t) {
            super(t);
          }
          supports(e) {
            return null != t.parseEventName(e);
          }
          addEventListener(e, n, r) {
            const s = t.parseEventName(n),
              i = t.eventCallback(s.fullKey, r, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() => fl().onAndCancel(e, s.domEventName, i));
          }
          static parseEventName(e) {
            const n = e.toLowerCase().split("."),
              r = n.shift();
            if (0 === n.length || ("keydown" !== r && "keyup" !== r))
              return null;
            const s = t._normalizeKey(n.pop());
            let i = "";
            if (
              ($c.forEach((t) => {
                const e = n.indexOf(t);
                e > -1 && (n.splice(e, 1), (i += t + "."));
              }),
              (i += s),
              0 != n.length || 0 === s.length)
            )
              return null;
            const o = {};
            return (o.domEventName = r), (o.fullKey = i), o;
          }
          static getEventFullKey(t) {
            let e = "",
              n = (function (t) {
                let e = t.key;
                if (null == e) {
                  if (((e = t.keyIdentifier), null == e)) return "Unidentified";
                  e.startsWith("U+") &&
                    ((e = String.fromCharCode(parseInt(e.substring(2), 16))),
                    3 === t.location && qc.hasOwnProperty(e) && (e = qc[e]));
                }
                return zc[e] || e;
              })(t);
            return (
              (n = n.toLowerCase()),
              " " === n ? (n = "space") : "." === n && (n = "dot"),
              $c.forEach((r) => {
                r != n && (0, Bc[r])(t) && (e += r + ".");
              }),
              (e += n),
              e
            );
          }
          static eventCallback(e, n, r) {
            return (s) => {
              t.getEventFullKey(s) === e && r.runGuarded(() => n(s));
            };
          }
          static _normalizeKey(t) {
            switch (t) {
              case "esc":
                return "escape";
              default:
                return t;
            }
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Bt(gl));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Gc = Xa(ul, "browser", [
          { provide: ba, useValue: "browser" },
          {
            provide: wa,
            useValue: function () {
              Cc.makeCurrent(), Oc.init();
            },
            multi: !0,
          },
          {
            provide: gl,
            useFactory: function () {
              return (
                (function (t) {
                  Se = t;
                })(document),
                document
              );
            },
            deps: [],
          },
        ]),
        Zc = [
          [],
          { provide: $s, useValue: "root" },
          {
            provide: Yn,
            useFactory: function () {
              return new Yn();
            },
            deps: [],
          },
          { provide: Pc, useClass: Vc, multi: !0, deps: [gl, Ua, ba] },
          { provide: Pc, useClass: Wc, multi: !0, deps: [gl] },
          [],
          { provide: Uc, useClass: Uc, deps: [Tc, Ic, ya] },
          { provide: Yi, useExisting: Uc },
          { provide: Ac, useExisting: Ic },
          { provide: Ic, useClass: Ic, deps: [gl] },
          { provide: Ba, useClass: Ba, deps: [Ua] },
          { provide: Tc, useClass: Tc, deps: [Pc, Ua] },
          [],
        ];
      let Qc = (() => {
        class t {
          constructor(t) {
            if (t)
              throw new Error(
                "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
              );
          }
          static withServerTransition(e) {
            return {
              ngModule: t,
              providers: [
                { provide: ya, useValue: e.appId },
                { provide: Ec, useExisting: ya },
                kc,
              ],
            };
          }
        }
        return (
          (t.ɵmod = ce({ type: t })),
          (t.ɵinj = ct({
            factory: function (e) {
              return new (e || t)(Bt(t, 12));
            },
            providers: Zc,
            imports: [_c, dl],
          })),
          t
        );
      })();
      function Yc(...t) {
        let e = t[t.length - 1];
        return O(e) ? (t.pop(), H(t, e)) : W(t);
      }
      "undefined" != typeof window && window;
      class Kc extends E {
        constructor(t) {
          super(), (this._value = t);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(t) {
          const e = super._subscribe(t);
          return e && !e.closed && t.next(this._value), e;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new C();
          return this._value;
        }
        next(t) {
          super.next((this._value = t));
        }
      }
      const Jc = (() => {
          function t() {
            return (
              Error.call(this),
              (this.message = "no elements in sequence"),
              (this.name = "EmptyError"),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        Xc = {};
      class tu {
        constructor(t) {
          this.resultSelector = t;
        }
        call(t, e) {
          return e.subscribe(new eu(t, this.resultSelector));
        }
      }
      class eu extends N {
        constructor(t, e) {
          super(t),
            (this.resultSelector = e),
            (this.active = 0),
            (this.values = []),
            (this.observables = []);
        }
        _next(t) {
          this.values.push(Xc), this.observables.push(t);
        }
        _complete() {
          const t = this.observables,
            e = t.length;
          if (0 === e) this.destination.complete();
          else {
            (this.active = e), (this.toRespond = e);
            for (let n = 0; n < e; n++) {
              const e = t[n];
              this.add(j(this, e, e, n));
            }
          }
        }
        notifyComplete(t) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(t, e, n, r, s) {
          const i = this.values,
            o = this.toRespond
              ? i[n] === Xc
                ? --this.toRespond
                : this.toRespond
              : 0;
          (i[n] = e),
            0 === o &&
              (this.resultSelector
                ? this._tryResultSelector(i)
                : this.destination.next(i.slice()));
        }
        _tryResultSelector(t) {
          let e;
          try {
            e = this.resultSelector.apply(this, t);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      const nu = new w((t) => t.complete());
      function ru(t) {
        return t
          ? (function (t) {
              return new w((e) => t.schedule(() => e.complete()));
            })(t)
          : nu;
      }
      function su(t) {
        return new w((e) => {
          let n;
          try {
            n = t();
          } catch (r) {
            return void e.error(r);
          }
          return (n ? V(n) : ru()).subscribe(e);
        });
      }
      function iu() {
        return B(1);
      }
      function ou(t, e) {
        return function (n) {
          return n.lift(new au(t, e));
        };
      }
      class au {
        constructor(t, e) {
          (this.predicate = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new lu(t, this.predicate, this.thisArg));
        }
      }
      class lu extends f {
        constructor(t, e, n) {
          super(t), (this.predicate = e), (this.thisArg = n), (this.count = 0);
        }
        _next(t) {
          let e;
          try {
            e = this.predicate.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          e && this.destination.next(t);
        }
      }
      const cu = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = "argument out of range"),
            (this.name = "ArgumentOutOfRangeError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      function uu(t) {
        return function (e) {
          return 0 === t ? ru() : e.lift(new hu(t));
        };
      }
      class hu {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new cu();
        }
        call(t, e) {
          return e.subscribe(new du(t, this.total));
        }
      }
      class du extends f {
        constructor(t, e) {
          super(t),
            (this.total = e),
            (this.ring = new Array()),
            (this.count = 0);
        }
        _next(t) {
          const e = this.ring,
            n = this.total,
            r = this.count++;
          e.length < n ? e.push(t) : (e[r % n] = t);
        }
        _complete() {
          const t = this.destination;
          let e = this.count;
          if (e > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              r = this.ring;
            for (let s = 0; s < n; s++) {
              const s = e++ % n;
              t.next(r[s]);
            }
          }
          t.complete();
        }
      }
      function pu(t = mu) {
        return (e) => e.lift(new fu(t));
      }
      class fu {
        constructor(t) {
          this.errorFactory = t;
        }
        call(t, e) {
          return e.subscribe(new gu(t, this.errorFactory));
        }
      }
      class gu extends f {
        constructor(t, e) {
          super(t), (this.errorFactory = e), (this.hasValue = !1);
        }
        _next(t) {
          (this.hasValue = !0), this.destination.next(t);
        }
        _complete() {
          if (this.hasValue) return this.destination.complete();
          {
            let e;
            try {
              e = this.errorFactory();
            } catch (t) {
              e = t;
            }
            this.destination.error(e);
          }
        }
      }
      function mu() {
        return new Jc();
      }
      function yu(t = null) {
        return (e) => e.lift(new vu(t));
      }
      class vu {
        constructor(t) {
          this.defaultValue = t;
        }
        call(t, e) {
          return e.subscribe(new _u(t, this.defaultValue));
        }
      }
      class _u extends f {
        constructor(t, e) {
          super(t), (this.defaultValue = e), (this.isEmpty = !0);
        }
        _next(t) {
          (this.isEmpty = !1), this.destination.next(t);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue),
            this.destination.complete();
        }
      }
      function wu(t, e) {
        const n = arguments.length >= 2;
        return (r) =>
          r.pipe(
            t ? ou((e, n) => t(e, n, r)) : y,
            uu(1),
            n ? yu(e) : pu(() => new Jc())
          );
      }
      function bu(t) {
        return function (e) {
          const n = new Cu(t),
            r = e.lift(n);
          return (n.caught = r);
        };
      }
      class Cu {
        constructor(t) {
          this.selector = t;
        }
        call(t, e) {
          return e.subscribe(new Su(t, this.selector, this.caught));
        }
      }
      class Su extends N {
        constructor(t, e, n) {
          super(t), (this.selector = e), (this.caught = n);
        }
        error(t) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(t, this.caught);
            } catch (e) {
              return void super.error(e);
            }
            this._unsubscribeAndRecycle();
            const r = new P(this, void 0, void 0);
            this.add(r);
            const s = j(this, n, void 0, void 0, r);
            s !== r && this.add(s);
          }
        }
      }
      function xu(t) {
        return (e) => (0 === t ? ru() : e.lift(new Eu(t)));
      }
      class Eu {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new cu();
        }
        call(t, e) {
          return e.subscribe(new ku(t, this.total));
        }
      }
      class ku extends f {
        constructor(t, e) {
          super(t), (this.total = e), (this.count = 0);
        }
        _next(t) {
          const e = this.total,
            n = ++this.count;
          n <= e &&
            (this.destination.next(t),
            n === e && (this.destination.complete(), this.unsubscribe()));
        }
      }
      function Ou(t, e) {
        const n = arguments.length >= 2;
        return (r) =>
          r.pipe(
            t ? ou((e, n) => t(e, n, r)) : y,
            xu(1),
            n ? yu(e) : pu(() => new Jc())
          );
      }
      class Pu {
        constructor(t, e, n) {
          (this.predicate = t), (this.thisArg = e), (this.source = n);
        }
        call(t, e) {
          return e.subscribe(
            new Tu(t, this.predicate, this.thisArg, this.source)
          );
        }
      }
      class Tu extends f {
        constructor(t, e, n, r) {
          super(t),
            (this.predicate = e),
            (this.thisArg = n),
            (this.source = r),
            (this.index = 0),
            (this.thisArg = n || this);
        }
        notifyComplete(t) {
          this.destination.next(t), this.destination.complete();
        }
        _next(t) {
          let e = !1;
          try {
            e = this.predicate.call(this.thisArg, t, this.index++, this.source);
          } catch (n) {
            return void this.destination.error(n);
          }
          e || this.notifyComplete(!1);
        }
        _complete() {
          this.notifyComplete(!0);
        }
      }
      function Mu(t, e) {
        return "function" == typeof e
          ? (n) =>
              n.pipe(Mu((n, r) => V(t(n, r)).pipe(U((t, s) => e(n, t, r, s)))))
          : (e) => e.lift(new Au(t));
      }
      class Au {
        constructor(t) {
          this.project = t;
        }
        call(t, e) {
          return e.subscribe(new Iu(t, this.project));
        }
      }
      class Iu extends N {
        constructor(t, e) {
          super(t), (this.project = e), (this.index = 0);
        }
        _next(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this._innerSub(e, t, n);
        }
        _innerSub(t, e, n) {
          const r = this.innerSubscription;
          r && r.unsubscribe();
          const s = new P(this, e, n),
            i = this.destination;
          i.add(s),
            (this.innerSubscription = j(this, t, void 0, void 0, s)),
            this.innerSubscription !== s && i.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: t } = this;
          (t && !t.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = null;
        }
        notifyComplete(t) {
          this.destination.remove(t),
            (this.innerSubscription = null),
            this.isStopped && super._complete();
        }
        notifyNext(t, e, n, r, s) {
          this.destination.next(e);
        }
      }
      function Ru(...t) {
        return iu()(Yc(...t));
      }
      function Du(t, e) {
        let n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new ju(t, e, n));
          }
        );
      }
      class ju {
        constructor(t, e, n = !1) {
          (this.accumulator = t), (this.seed = e), (this.hasSeed = n);
        }
        call(t, e) {
          return e.subscribe(
            new Nu(t, this.accumulator, this.seed, this.hasSeed)
          );
        }
      }
      class Nu extends f {
        constructor(t, e, n, r) {
          super(t),
            (this.accumulator = e),
            (this._seed = n),
            (this.hasSeed = r),
            (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(t) {
          (this.hasSeed = !0), (this._seed = t);
        }
        _next(t) {
          if (this.hasSeed) return this._tryNext(t);
          (this.seed = t), this.destination.next(t);
        }
        _tryNext(t) {
          const e = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, t, e);
          } catch (r) {
            this.destination.error(r);
          }
          (this.seed = n), this.destination.next(n);
        }
      }
      function Uu(t, e) {
        return $(t, e, 1);
      }
      function Lu() {}
      function Fu(t, e, n) {
        return function (r) {
          return r.lift(new Hu(t, e, n));
        };
      }
      class Hu {
        constructor(t, e, n) {
          (this.nextOrObserver = t), (this.error = e), (this.complete = n);
        }
        call(t, e) {
          return e.subscribe(
            new Vu(t, this.nextOrObserver, this.error, this.complete)
          );
        }
      }
      class Vu extends f {
        constructor(t, e, n, s) {
          super(t),
            (this._tapNext = Lu),
            (this._tapError = Lu),
            (this._tapComplete = Lu),
            (this._tapError = n || Lu),
            (this._tapComplete = s || Lu),
            r(e)
              ? ((this._context = this), (this._tapNext = e))
              : e &&
                ((this._context = e),
                (this._tapNext = e.next || Lu),
                (this._tapError = e.error || Lu),
                (this._tapComplete = e.complete || Lu));
        }
        _next(t) {
          try {
            this._tapNext.call(this._context, t);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.next(t);
        }
        _error(t) {
          try {
            this._tapError.call(this._context, t);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.error(t);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (t) {
            return void this.destination.error(t);
          }
          return this.destination.complete();
        }
      }
      class $u {
        constructor(t) {
          this.callback = t;
        }
        call(t, e) {
          return e.subscribe(new zu(t, this.callback));
        }
      }
      class zu extends f {
        constructor(t, e) {
          super(t), this.add(new h(e));
        }
      }
      class qu {
        constructor(t, e) {
          (this.id = t), (this.url = e);
        }
      }
      class Bu extends qu {
        constructor(t, e, n = "imperative", r = null) {
          super(t, e), (this.navigationTrigger = n), (this.restoredState = r);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Wu extends qu {
        constructor(t, e, n) {
          super(t, e), (this.urlAfterRedirects = n);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class Gu extends qu {
        constructor(t, e, n) {
          super(t, e), (this.reason = n);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Zu extends qu {
        constructor(t, e, n) {
          super(t, e), (this.error = n);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class Qu extends qu {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Yu extends qu {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Ku extends qu {
        constructor(t, e, n, r, s) {
          super(t, e),
            (this.urlAfterRedirects = n),
            (this.state = r),
            (this.shouldActivate = s);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Ju extends qu {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Xu extends qu {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class th {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class eh {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class nh {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class rh {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class sh {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class ih {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class oh {
        constructor(t, e, n) {
          (this.routerEvent = t), (this.position = e), (this.anchor = n);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      let ah = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵcmp = ie({
            type: t,
            selectors: [["ng-component"]],
            decls: 1,
            vars: 0,
            template: function (t, e) {
              1 & t && ki(0, "router-outlet");
            },
            directives: function () {
              return [dp];
            },
            encapsulation: 2,
          })),
          t
        );
      })();
      class lh {
        constructor(t) {
          this.params = t || {};
        }
        has(t) {
          return this.params.hasOwnProperty(t);
        }
        get(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e[0] : e;
          }
          return null;
        }
        getAll(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e : [e];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function ch(t) {
        return new lh(t);
      }
      function uh(t) {
        const e = Error("NavigationCancelingError: " + t);
        return (e.ngNavigationCancelingError = !0), e;
      }
      function hh(t, e, n) {
        const r = n.path.split("/");
        if (r.length > t.length) return null;
        if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length))
          return null;
        const s = {};
        for (let i = 0; i < r.length; i++) {
          const e = r[i],
            n = t[i];
          if (e.startsWith(":")) s[e.substring(1)] = n;
          else if (e !== n.path) return null;
        }
        return { consumed: t.slice(0, r.length), posParams: s };
      }
      class dh {
        constructor(t, e) {
          (this.routes = t), (this.module = e);
        }
      }
      function ph(t, e = "") {
        for (let n = 0; n < t.length; n++) {
          const r = t[n];
          fh(r, gh(e, r));
        }
      }
      function fh(t, e) {
        if (!t)
          throw new Error(
            `\n      Invalid configuration of route '${e}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
          );
        if (Array.isArray(t))
          throw new Error(
            `Invalid configuration of route '${e}': Array cannot be specified`
          );
        if (
          !t.component &&
          !t.children &&
          !t.loadChildren &&
          t.outlet &&
          "primary" !== t.outlet
        )
          throw new Error(
            `Invalid configuration of route '${e}': a componentless route without children or loadChildren cannot have a named outlet set`
          );
        if (t.redirectTo && t.children)
          throw new Error(
            `Invalid configuration of route '${e}': redirectTo and children cannot be used together`
          );
        if (t.redirectTo && t.loadChildren)
          throw new Error(
            `Invalid configuration of route '${e}': redirectTo and loadChildren cannot be used together`
          );
        if (t.children && t.loadChildren)
          throw new Error(
            `Invalid configuration of route '${e}': children and loadChildren cannot be used together`
          );
        if (t.redirectTo && t.component)
          throw new Error(
            `Invalid configuration of route '${e}': redirectTo and component cannot be used together`
          );
        if (t.path && t.matcher)
          throw new Error(
            `Invalid configuration of route '${e}': path and matcher cannot be used together`
          );
        if (
          void 0 === t.redirectTo &&
          !t.component &&
          !t.children &&
          !t.loadChildren
        )
          throw new Error(
            `Invalid configuration of route '${e}'. One of the following must be provided: component, redirectTo, children or loadChildren`
          );
        if (void 0 === t.path && void 0 === t.matcher)
          throw new Error(
            `Invalid configuration of route '${e}': routes must have either a path or a matcher specified`
          );
        if ("string" == typeof t.path && "/" === t.path.charAt(0))
          throw new Error(
            `Invalid configuration of route '${e}': path cannot start with a slash`
          );
        if ("" === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch)
          throw new Error(
            `Invalid configuration of route '{path: "${e}", redirectTo: "${t.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`
          );
        if (
          void 0 !== t.pathMatch &&
          "full" !== t.pathMatch &&
          "prefix" !== t.pathMatch
        )
          throw new Error(
            `Invalid configuration of route '${e}': pathMatch can only be set to 'prefix' or 'full'`
          );
        t.children && ph(t.children, e);
      }
      function gh(t, e) {
        return e
          ? t || e.path
            ? t && !e.path
              ? t + "/"
              : !t && e.path
              ? e.path
              : `${t}/${e.path}`
            : ""
          : t;
      }
      function mh(t) {
        const e = t.children && t.children.map(mh),
          n = e
            ? Object.assign(Object.assign({}, t), { children: e })
            : Object.assign({}, t);
        return (
          !n.component &&
            (e || n.loadChildren) &&
            n.outlet &&
            "primary" !== n.outlet &&
            (n.component = ah),
          n
        );
      }
      function yh(t, e) {
        const n = Object.keys(t),
          r = Object.keys(e);
        if (!n || !r || n.length != r.length) return !1;
        let s;
        for (let i = 0; i < n.length; i++)
          if (((s = n[i]), !vh(t[s], e[s]))) return !1;
        return !0;
      }
      function vh(t, e) {
        return Array.isArray(t) && Array.isArray(e)
          ? t.length == e.length && t.every((t) => e.indexOf(t) > -1)
          : t === e;
      }
      function _h(t) {
        return Array.prototype.concat.apply([], t);
      }
      function wh(t) {
        return t.length > 0 ? t[t.length - 1] : null;
      }
      function bh(t, e) {
        for (const n in t) t.hasOwnProperty(n) && e(t[n], n);
      }
      function Ch(t) {
        return (e = t) && "function" == typeof e.subscribe
          ? t
          : Pi(t)
          ? V(Promise.resolve(t))
          : Yc(t);
        var e;
      }
      function Sh(t, e, n) {
        return n
          ? (function (t, e) {
              return yh(t, e);
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                if (!Oh(e.segments, n.segments)) return !1;
                if (e.numberOfChildren !== n.numberOfChildren) return !1;
                for (const r in n.children) {
                  if (!e.children[r]) return !1;
                  if (!t(e.children[r], n.children[r])) return !1;
                }
                return !0;
              })(t.root, e.root)
          : (function (t, e) {
              return (
                Object.keys(e).length <= Object.keys(t).length &&
                Object.keys(e).every((n) => vh(t[n], e[n]))
              );
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                return (function e(n, r, s) {
                  if (n.segments.length > s.length)
                    return (
                      !!Oh(n.segments.slice(0, s.length), s) && !r.hasChildren()
                    );
                  if (n.segments.length === s.length) {
                    if (!Oh(n.segments, s)) return !1;
                    for (const e in r.children) {
                      if (!n.children[e]) return !1;
                      if (!t(n.children[e], r.children[e])) return !1;
                    }
                    return !0;
                  }
                  {
                    const t = s.slice(0, n.segments.length),
                      i = s.slice(n.segments.length);
                    return (
                      !!Oh(n.segments, t) &&
                      !!n.children.primary &&
                      e(n.children.primary, r, i)
                    );
                  }
                })(e, n, n.segments);
              })(t.root, e.root);
      }
      class xh {
        constructor(t, e, n) {
          (this.root = t), (this.queryParams = e), (this.fragment = n);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = ch(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return Ah.serialize(this);
        }
      }
      class Eh {
        constructor(t, e) {
          (this.segments = t),
            (this.children = e),
            (this.parent = null),
            bh(e, (t, e) => (t.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return Ih(this);
        }
      }
      class kh {
        constructor(t, e) {
          (this.path = t), (this.parameters = e);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = ch(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return Lh(this);
        }
      }
      function Oh(t, e) {
        return t.length === e.length && t.every((t, n) => t.path === e[n].path);
      }
      function Ph(t, e) {
        let n = [];
        return (
          bh(t.children, (t, r) => {
            "primary" === r && (n = n.concat(e(t, r)));
          }),
          bh(t.children, (t, r) => {
            "primary" !== r && (n = n.concat(e(t, r)));
          }),
          n
        );
      }
      class Th {}
      class Mh {
        parse(t) {
          const e = new zh(t);
          return new xh(
            e.parseRootSegment(),
            e.parseQueryParams(),
            e.parseFragment()
          );
        }
        serialize(t) {
          return `${
            "/" +
            (function t(e, n) {
              if (!e.hasChildren()) return Ih(e);
              if (n) {
                const n = e.children.primary ? t(e.children.primary, !1) : "",
                  r = [];
                return (
                  bh(e.children, (e, n) => {
                    "primary" !== n && r.push(`${n}:${t(e, !1)}`);
                  }),
                  r.length > 0 ? `${n}(${r.join("//")})` : n
                );
              }
              {
                const n = Ph(e, (n, r) =>
                  "primary" === r
                    ? [t(e.children.primary, !1)]
                    : [`${r}:${t(n, !1)}`]
                );
                return `${Ih(e)}/(${n.join("//")})`;
              }
            })(t.root, !0)
          }${(function (t) {
            const e = Object.keys(t).map((e) => {
              const n = t[e];
              return Array.isArray(n)
                ? n.map((t) => `${Dh(e)}=${Dh(t)}`).join("&")
                : `${Dh(e)}=${Dh(n)}`;
            });
            return e.length ? "?" + e.join("&") : "";
          })(t.queryParams)}${
            "string" == typeof t.fragment ? "#" + encodeURI(t.fragment) : ""
          }`;
        }
      }
      const Ah = new Mh();
      function Ih(t) {
        return t.segments.map((t) => Lh(t)).join("/");
      }
      function Rh(t) {
        return encodeURIComponent(t)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function Dh(t) {
        return Rh(t).replace(/%3B/gi, ";");
      }
      function jh(t) {
        return Rh(t)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function Nh(t) {
        return decodeURIComponent(t);
      }
      function Uh(t) {
        return Nh(t.replace(/\+/g, "%20"));
      }
      function Lh(t) {
        return `${jh(t.path)}${
          ((e = t.parameters),
          Object.keys(e)
            .map((t) => `;${jh(t)}=${jh(e[t])}`)
            .join(""))
        }`;
        var e;
      }
      const Fh = /^[^\/()?;=#]+/;
      function Hh(t) {
        const e = t.match(Fh);
        return e ? e[0] : "";
      }
      const Vh = /^[^=?&#]+/,
        $h = /^[^?&#]+/;
      class zh {
        constructor(t) {
          (this.url = t), (this.remaining = t);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new Eh([], {})
              : new Eh([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const t = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(t);
            } while (this.consumeOptional("&"));
          return t;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const t = [];
          for (
            this.peekStartsWith("(") || t.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), t.push(this.parseSegment());
          let e = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (e = this.parseParens(!0)));
          let n = {};
          return (
            this.peekStartsWith("(") && (n = this.parseParens(!1)),
            (t.length > 0 || Object.keys(e).length > 0) &&
              (n.primary = new Eh(t, e)),
            n
          );
        }
        parseSegment() {
          const t = Hh(this.remaining);
          if ("" === t && this.peekStartsWith(";"))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            );
          return this.capture(t), new kh(Nh(t), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const t = {};
          for (; this.consumeOptional(";"); ) this.parseParam(t);
          return t;
        }
        parseParam(t) {
          const e = Hh(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = "";
          if (this.consumeOptional("=")) {
            const t = Hh(this.remaining);
            t && ((n = t), this.capture(n));
          }
          t[Nh(e)] = Nh(n);
        }
        parseQueryParam(t) {
          const e = (function (t) {
            const e = t.match(Vh);
            return e ? e[0] : "";
          })(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = "";
          if (this.consumeOptional("=")) {
            const t = (function (t) {
              const e = t.match($h);
              return e ? e[0] : "";
            })(this.remaining);
            t && ((n = t), this.capture(n));
          }
          const r = Uh(e),
            s = Uh(n);
          if (t.hasOwnProperty(r)) {
            let e = t[r];
            Array.isArray(e) || ((e = [e]), (t[r] = e)), e.push(s);
          } else t[r] = s;
        }
        parseParens(t) {
          const e = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const n = Hh(this.remaining),
              r = this.remaining[n.length];
            if ("/" !== r && ")" !== r && ";" !== r)
              throw new Error(`Cannot parse url '${this.url}'`);
            let s = void 0;
            n.indexOf(":") > -1
              ? ((s = n.substr(0, n.indexOf(":"))),
                this.capture(s),
                this.capture(":"))
              : t && (s = "primary");
            const i = this.parseChildren();
            (e[s] = 1 === Object.keys(i).length ? i.primary : new Eh([], i)),
              this.consumeOptional("//");
          }
          return e;
        }
        peekStartsWith(t) {
          return this.remaining.startsWith(t);
        }
        consumeOptional(t) {
          return (
            !!this.peekStartsWith(t) &&
            ((this.remaining = this.remaining.substring(t.length)), !0)
          );
        }
        capture(t) {
          if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`);
        }
      }
      class qh {
        constructor(t) {
          this._root = t;
        }
        get root() {
          return this._root.value;
        }
        parent(t) {
          const e = this.pathFromRoot(t);
          return e.length > 1 ? e[e.length - 2] : null;
        }
        children(t) {
          const e = Bh(t, this._root);
          return e ? e.children.map((t) => t.value) : [];
        }
        firstChild(t) {
          const e = Bh(t, this._root);
          return e && e.children.length > 0 ? e.children[0].value : null;
        }
        siblings(t) {
          const e = Wh(t, this._root);
          return e.length < 2
            ? []
            : e[e.length - 2].children
                .map((t) => t.value)
                .filter((e) => e !== t);
        }
        pathFromRoot(t) {
          return Wh(t, this._root).map((t) => t.value);
        }
      }
      function Bh(t, e) {
        if (t === e.value) return e;
        for (const n of e.children) {
          const e = Bh(t, n);
          if (e) return e;
        }
        return null;
      }
      function Wh(t, e) {
        if (t === e.value) return [e];
        for (const n of e.children) {
          const r = Wh(t, n);
          if (r.length) return r.unshift(e), r;
        }
        return [];
      }
      class Gh {
        constructor(t, e) {
          (this.value = t), (this.children = e);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Zh(t) {
        const e = {};
        return t && t.children.forEach((t) => (e[t.value.outlet] = t)), e;
      }
      class Qh extends qh {
        constructor(t, e) {
          super(t), (this.snapshot = e), ed(this, t);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function Yh(t, e) {
        const n = (function (t, e) {
            const n = new Xh(
              [],
              {},
              {},
              "",
              {},
              "primary",
              e,
              null,
              t.root,
              -1,
              {}
            );
            return new td("", new Gh(n, []));
          })(t, e),
          r = new Kc([new kh("", {})]),
          s = new Kc({}),
          i = new Kc({}),
          o = new Kc({}),
          a = new Kc(""),
          l = new Kh(r, s, o, a, i, "primary", e, n.root);
        return (l.snapshot = n.root), new Qh(new Gh(l, []), n);
      }
      class Kh {
        constructor(t, e, n, r, s, i, o, a) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this._futureSnapshot = a);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe(U((t) => ch(t)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(U((t) => ch(t)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function Jh(t, e = "emptyOnly") {
        const n = t.pathFromRoot;
        let r = 0;
        if ("always" !== e)
          for (r = n.length - 1; r >= 1; ) {
            const t = n[r],
              e = n[r - 1];
            if (t.routeConfig && "" === t.routeConfig.path) r--;
            else {
              if (e.component) break;
              r--;
            }
          }
        return (function (t) {
          return t.reduce(
            (t, e) => ({
              params: Object.assign(Object.assign({}, t.params), e.params),
              data: Object.assign(Object.assign({}, t.data), e.data),
              resolve: Object.assign(
                Object.assign({}, t.resolve),
                e._resolvedData
              ),
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      class Xh {
        constructor(t, e, n, r, s, i, o, a, l, c, u) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this.routeConfig = a),
            (this._urlSegment = l),
            (this._lastPathIndex = c),
            (this._resolve = u);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = ch(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = ch(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((t) => t.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class td extends qh {
        constructor(t, e) {
          super(e), (this.url = t), ed(this, e);
        }
        toString() {
          return nd(this._root);
        }
      }
      function ed(t, e) {
        (e.value._routerState = t), e.children.forEach((e) => ed(t, e));
      }
      function nd(t) {
        const e =
          t.children.length > 0 ? ` { ${t.children.map(nd).join(", ")} } ` : "";
        return `${t.value}${e}`;
      }
      function rd(t) {
        if (t.snapshot) {
          const e = t.snapshot,
            n = t._futureSnapshot;
          (t.snapshot = n),
            yh(e.queryParams, n.queryParams) ||
              t.queryParams.next(n.queryParams),
            e.fragment !== n.fragment && t.fragment.next(n.fragment),
            yh(e.params, n.params) || t.params.next(n.params),
            (function (t, e) {
              if (t.length !== e.length) return !1;
              for (let n = 0; n < t.length; ++n) if (!yh(t[n], e[n])) return !1;
              return !0;
            })(e.url, n.url) || t.url.next(n.url),
            yh(e.data, n.data) || t.data.next(n.data);
        } else
          (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data);
      }
      function sd(t, e) {
        var n, r;
        return (
          yh(t.params, e.params) &&
          Oh((n = t.url), (r = e.url)) &&
          n.every((t, e) => yh(t.parameters, r[e].parameters)) &&
          !(!t.parent != !e.parent) &&
          (!t.parent || sd(t.parent, e.parent))
        );
      }
      function id(t) {
        return (
          "object" == typeof t && null != t && !t.outlets && !t.segmentPath
        );
      }
      function od(t, e, n, r, s) {
        let i = {};
        return (
          r &&
            bh(r, (t, e) => {
              i[e] = Array.isArray(t) ? t.map((t) => "" + t) : "" + t;
            }),
          new xh(
            n.root === t
              ? e
              : (function t(e, n, r) {
                  const s = {};
                  return (
                    bh(e.children, (e, i) => {
                      s[i] = e === n ? r : t(e, n, r);
                    }),
                    new Eh(e.segments, s)
                  );
                })(n.root, t, e),
            i,
            s
          )
        );
      }
      class ad {
        constructor(t, e, n) {
          if (
            ((this.isAbsolute = t),
            (this.numberOfDoubleDots = e),
            (this.commands = n),
            t && n.length > 0 && id(n[0]))
          )
            throw new Error("Root segment cannot have matrix parameters");
          const r = n.find(
            (t) => "object" == typeof t && null != t && t.outlets
          );
          if (r && r !== wh(n))
            throw new Error("{outlets:{}} has to be the last command");
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class ld {
        constructor(t, e, n) {
          (this.segmentGroup = t), (this.processChildren = e), (this.index = n);
        }
      }
      function cd(t) {
        return "object" == typeof t && null != t && t.outlets
          ? t.outlets.primary
          : "" + t;
      }
      function ud(t, e, n) {
        if (
          (t || (t = new Eh([], {})),
          0 === t.segments.length && t.hasChildren())
        )
          return hd(t, e, n);
        const r = (function (t, e, n) {
            let r = 0,
              s = e;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; s < t.segments.length; ) {
              if (r >= n.length) return i;
              const e = t.segments[s],
                o = cd(n[r]),
                a = r < n.length - 1 ? n[r + 1] : null;
              if (s > 0 && void 0 === o) break;
              if (o && a && "object" == typeof a && void 0 === a.outlets) {
                if (!gd(o, a, e)) return i;
                r += 2;
              } else {
                if (!gd(o, {}, e)) return i;
                r++;
              }
              s++;
            }
            return { match: !0, pathIndex: s, commandIndex: r };
          })(t, e, n),
          s = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < t.segments.length) {
          const e = new Eh(t.segments.slice(0, r.pathIndex), {});
          return (
            (e.children.primary = new Eh(
              t.segments.slice(r.pathIndex),
              t.children
            )),
            hd(e, 0, s)
          );
        }
        return r.match && 0 === s.length
          ? new Eh(t.segments, {})
          : r.match && !t.hasChildren()
          ? dd(t, e, n)
          : r.match
          ? hd(t, 0, s)
          : dd(t, e, n);
      }
      function hd(t, e, n) {
        if (0 === n.length) return new Eh(t.segments, {});
        {
          const r = (function (t) {
              return "object" != typeof t[0] || void 0 === t[0].outlets
                ? { primary: t }
                : t[0].outlets;
            })(n),
            s = {};
          return (
            bh(r, (n, r) => {
              null !== n && (s[r] = ud(t.children[r], e, n));
            }),
            bh(t.children, (t, e) => {
              void 0 === r[e] && (s[e] = t);
            }),
            new Eh(t.segments, s)
          );
        }
      }
      function dd(t, e, n) {
        const r = t.segments.slice(0, e);
        let s = 0;
        for (; s < n.length; ) {
          if ("object" == typeof n[s] && void 0 !== n[s].outlets) {
            const t = pd(n[s].outlets);
            return new Eh(r, t);
          }
          if (0 === s && id(n[0])) {
            r.push(new kh(t.segments[e].path, n[0])), s++;
            continue;
          }
          const i = cd(n[s]),
            o = s < n.length - 1 ? n[s + 1] : null;
          i && o && id(o)
            ? (r.push(new kh(i, fd(o))), (s += 2))
            : (r.push(new kh(i, {})), s++);
        }
        return new Eh(r, {});
      }
      function pd(t) {
        const e = {};
        return (
          bh(t, (t, n) => {
            null !== t && (e[n] = dd(new Eh([], {}), 0, t));
          }),
          e
        );
      }
      function fd(t) {
        const e = {};
        return bh(t, (t, n) => (e[n] = "" + t)), e;
      }
      function gd(t, e, n) {
        return t == n.path && yh(e, n.parameters);
      }
      class md {
        constructor(t, e, n, r) {
          (this.routeReuseStrategy = t),
            (this.futureState = e),
            (this.currState = n),
            (this.forwardEvent = r);
        }
        activate(t) {
          const e = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(e, n, t),
            rd(this.futureState.root),
            this.activateChildRoutes(e, n, t);
        }
        deactivateChildRoutes(t, e, n) {
          const r = Zh(e);
          t.children.forEach((t) => {
            const e = t.value.outlet;
            this.deactivateRoutes(t, r[e], n), delete r[e];
          }),
            bh(r, (t, e) => {
              this.deactivateRouteAndItsChildren(t, n);
            });
        }
        deactivateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if (r === s)
            if (r.component) {
              const s = n.getContext(r.outlet);
              s && this.deactivateChildRoutes(t, e, s.children);
            } else this.deactivateChildRoutes(t, e, n);
          else s && this.deactivateRouteAndItsChildren(e, n);
        }
        deactivateRouteAndItsChildren(t, e) {
          this.routeReuseStrategy.shouldDetach(t.value.snapshot)
            ? this.detachAndStoreRouteSubtree(t, e)
            : this.deactivateRouteAndOutlet(t, e);
        }
        detachAndStoreRouteSubtree(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n && n.outlet) {
            const e = n.outlet.detach(),
              r = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, {
              componentRef: e,
              route: t,
              contexts: r,
            });
          }
        }
        deactivateRouteAndOutlet(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n) {
            const r = Zh(t),
              s = t.value.component ? n.children : e;
            bh(r, (t, e) => this.deactivateRouteAndItsChildren(t, s)),
              n.outlet &&
                (n.outlet.deactivate(), n.children.onOutletDeactivated());
          }
        }
        activateChildRoutes(t, e, n) {
          const r = Zh(e);
          t.children.forEach((t) => {
            this.activateRoutes(t, r[t.value.outlet], n),
              this.forwardEvent(new ih(t.value.snapshot));
          }),
            t.children.length && this.forwardEvent(new rh(t.value.snapshot));
        }
        activateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if ((rd(r), r === s))
            if (r.component) {
              const s = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(t, e, s.children);
            } else this.activateChildRoutes(t, e, n);
          else if (r.component) {
            const e = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              const t = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null),
                e.children.onOutletReAttached(t.contexts),
                (e.attachRef = t.componentRef),
                (e.route = t.route.value),
                e.outlet && e.outlet.attach(t.componentRef, t.route.value),
                yd(t.route);
            } else {
              const n = (function (t) {
                  for (let e = t.parent; e; e = e.parent) {
                    const t = e.routeConfig;
                    if (t && t._loadedConfig) return t._loadedConfig;
                    if (t && t.component) return null;
                  }
                  return null;
                })(r.snapshot),
                s = n ? n.module.componentFactoryResolver : null;
              (e.attachRef = null),
                (e.route = r),
                (e.resolver = s),
                e.outlet && e.outlet.activateWith(r, s),
                this.activateChildRoutes(t, null, e.children);
            }
          } else this.activateChildRoutes(t, null, n);
        }
      }
      function yd(t) {
        rd(t.value), t.children.forEach(yd);
      }
      function vd(t) {
        return "function" == typeof t;
      }
      function _d(t) {
        return t instanceof xh;
      }
      class wd {
        constructor(t) {
          this.segmentGroup = t || null;
        }
      }
      class bd {
        constructor(t) {
          this.urlTree = t;
        }
      }
      function Cd(t) {
        return new w((e) => e.error(new wd(t)));
      }
      function Sd(t) {
        return new w((e) => e.error(new bd(t)));
      }
      function xd(t) {
        return new w((e) =>
          e.error(
            new Error(
              `Only absolute redirects can have named outlets. redirectTo: '${t}'`
            )
          )
        );
      }
      class Ed {
        constructor(t, e, n, r, s) {
          (this.configLoader = e),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = s),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(Qt));
        }
        apply() {
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            this.urlTree.root,
            "primary"
          )
            .pipe(
              U((t) =>
                this.createUrlTree(
                  t,
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              bu((t) => {
                if (t instanceof bd)
                  return (this.allowRedirects = !1), this.match(t.urlTree);
                if (t instanceof wd) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        match(t) {
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            t.root,
            "primary"
          )
            .pipe(U((e) => this.createUrlTree(e, t.queryParams, t.fragment)))
            .pipe(
              bu((t) => {
                if (t instanceof wd) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        noMatchError(t) {
          return new Error(
            `Cannot match any routes. URL Segment: '${t.segmentGroup}'`
          );
        }
        createUrlTree(t, e, n) {
          const r = t.segments.length > 0 ? new Eh([], { primary: t }) : t;
          return new xh(r, e, n);
        }
        expandSegmentGroup(t, e, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(t, e, n).pipe(U((t) => new Eh([], t)))
            : this.expandSegment(t, n, e, n.segments, r, !0);
        }
        expandChildren(t, e, n) {
          return (function (t, e) {
            if (0 === Object.keys(t).length) return Yc({});
            const n = [],
              r = [],
              s = {};
            return (
              bh(t, (t, i) => {
                const o = e(i, t).pipe(U((t) => (s[i] = t)));
                "primary" === i ? n.push(o) : r.push(o);
              }),
              Yc.apply(null, n.concat(r)).pipe(
                iu(),
                wu(),
                U(() => s)
              )
            );
          })(n.children, (n, r) => this.expandSegmentGroup(t, e, r, n));
        }
        expandSegment(t, e, n, r, s, i) {
          return Yc(...n).pipe(
            U((o) =>
              this.expandSegmentAgainstRoute(t, e, n, o, r, s, i).pipe(
                bu((t) => {
                  if (t instanceof wd) return Yc(null);
                  throw t;
                })
              )
            ),
            iu(),
            Ou((t) => !!t),
            bu((t, n) => {
              if (t instanceof Jc || "EmptyError" === t.name) {
                if (this.noLeftoversInUrl(e, r, s)) return Yc(new Eh([], {}));
                throw new wd(e);
              }
              throw t;
            })
          );
        }
        noLeftoversInUrl(t, e, n) {
          return 0 === e.length && !t.children[n];
        }
        expandSegmentAgainstRoute(t, e, n, r, s, i, o) {
          return Td(r) !== i
            ? Cd(e)
            : void 0 === r.redirectTo
            ? this.matchSegmentAgainstRoute(t, e, r, s)
            : o && this.allowRedirects
            ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i)
            : Cd(e);
        }
        expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          return "**" === r.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                t,
                e,
                n,
                r,
                s,
                i
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, r) {
          const s = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith("/")
            ? Sd(s)
            : this.lineralizeSegments(n, s).pipe(
                $((n) => {
                  const s = new Eh(n, {});
                  return this.expandSegment(t, s, e, n, r, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          const {
            matched: o,
            consumedSegments: a,
            lastChild: l,
            positionalParamSegments: c,
          } = kd(e, r, s);
          if (!o) return Cd(e);
          const u = this.applyRedirectCommands(a, r.redirectTo, c);
          return r.redirectTo.startsWith("/")
            ? Sd(u)
            : this.lineralizeSegments(r, u).pipe(
                $((r) =>
                  this.expandSegment(t, e, n, r.concat(s.slice(l)), i, !1)
                )
              );
        }
        matchSegmentAgainstRoute(t, e, n, r) {
          if ("**" === n.path)
            return n.loadChildren
              ? this.configLoader
                  .load(t.injector, n)
                  .pipe(U((t) => ((n._loadedConfig = t), new Eh(r, {}))))
              : Yc(new Eh(r, {}));
          const { matched: s, consumedSegments: i, lastChild: o } = kd(e, n, r);
          if (!s) return Cd(e);
          const a = r.slice(o);
          return this.getChildConfig(t, n, r).pipe(
            $((t) => {
              const n = t.module,
                r = t.routes,
                { segmentGroup: s, slicedSegments: o } = (function (
                  t,
                  e,
                  n,
                  r
                ) {
                  return n.length > 0 &&
                    (function (t, e, n) {
                      return n.some((n) => Pd(t, e, n) && "primary" !== Td(n));
                    })(t, n, r)
                    ? {
                        segmentGroup: Od(
                          new Eh(
                            e,
                            (function (t, e) {
                              const n = {};
                              n.primary = e;
                              for (const r of t)
                                "" === r.path &&
                                  "primary" !== Td(r) &&
                                  (n[Td(r)] = new Eh([], {}));
                              return n;
                            })(r, new Eh(n, t.children))
                          )
                        ),
                        slicedSegments: [],
                      }
                    : 0 === n.length &&
                      (function (t, e, n) {
                        return n.some((n) => Pd(t, e, n));
                      })(t, n, r)
                    ? {
                        segmentGroup: Od(
                          new Eh(
                            t.segments,
                            (function (t, e, n, r) {
                              const s = {};
                              for (const i of n)
                                Pd(t, e, i) &&
                                  !r[Td(i)] &&
                                  (s[Td(i)] = new Eh([], {}));
                              return Object.assign(Object.assign({}, r), s);
                            })(t, n, r, t.children)
                          )
                        ),
                        slicedSegments: n,
                      }
                    : { segmentGroup: t, slicedSegments: n };
                })(e, i, a, r);
              return 0 === o.length && s.hasChildren()
                ? this.expandChildren(n, r, s).pipe(U((t) => new Eh(i, t)))
                : 0 === r.length && 0 === o.length
                ? Yc(new Eh(i, {}))
                : this.expandSegment(n, s, r, o, "primary", !0).pipe(
                    U((t) => new Eh(i.concat(t.segments), t.children))
                  );
            })
          );
        }
        getChildConfig(t, e, n) {
          return e.children
            ? Yc(new dh(e.children, t))
            : e.loadChildren
            ? void 0 !== e._loadedConfig
              ? Yc(e._loadedConfig)
              : (function (t, e, n) {
                  const r = e.canLoad;
                  return r && 0 !== r.length
                    ? V(r)
                        .pipe(
                          U((r) => {
                            const s = t.get(r);
                            let i;
                            if (
                              (function (t) {
                                return t && vd(t.canLoad);
                              })(s)
                            )
                              i = s.canLoad(e, n);
                            else {
                              if (!vd(s))
                                throw new Error("Invalid CanLoad guard");
                              i = s(e, n);
                            }
                            return Ch(i);
                          })
                        )
                        .pipe(
                          iu(),
                          ((s = (t) => !0 === t),
                          (t) => t.lift(new Pu(s, void 0, t)))
                        )
                    : Yc(!0);
                  var s;
                })(t.injector, e, n).pipe(
                  $((n) =>
                    n
                      ? this.configLoader
                          .load(t.injector, e)
                          .pipe(U((t) => ((e._loadedConfig = t), t)))
                      : (function (t) {
                          return new w((e) =>
                            e.error(
                              uh(
                                `Cannot load children because the guard of the route "path: '${t.path}'" returned false`
                              )
                            )
                          );
                        })(e)
                  )
                )
            : Yc(new dh([], t));
        }
        lineralizeSegments(t, e) {
          let n = [],
            r = e.root;
          for (;;) {
            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren))
              return Yc(n);
            if (r.numberOfChildren > 1 || !r.children.primary)
              return xd(t.redirectTo);
            r = r.children.primary;
          }
        }
        applyRedirectCommands(t, e, n) {
          return this.applyRedirectCreatreUrlTree(
            e,
            this.urlSerializer.parse(e),
            t,
            n
          );
        }
        applyRedirectCreatreUrlTree(t, e, n, r) {
          const s = this.createSegmentGroup(t, e.root, n, r);
          return new xh(
            s,
            this.createQueryParams(e.queryParams, this.urlTree.queryParams),
            e.fragment
          );
        }
        createQueryParams(t, e) {
          const n = {};
          return (
            bh(t, (t, r) => {
              if ("string" == typeof t && t.startsWith(":")) {
                const s = t.substring(1);
                n[r] = e[s];
              } else n[r] = t;
            }),
            n
          );
        }
        createSegmentGroup(t, e, n, r) {
          const s = this.createSegments(t, e.segments, n, r);
          let i = {};
          return (
            bh(e.children, (e, s) => {
              i[s] = this.createSegmentGroup(t, e, n, r);
            }),
            new Eh(s, i)
          );
        }
        createSegments(t, e, n, r) {
          return e.map((e) =>
            e.path.startsWith(":")
              ? this.findPosParam(t, e, r)
              : this.findOrReturn(e, n)
          );
        }
        findPosParam(t, e, n) {
          const r = n[e.path.substring(1)];
          if (!r)
            throw new Error(
              `Cannot redirect to '${t}'. Cannot find '${e.path}'.`
            );
          return r;
        }
        findOrReturn(t, e) {
          let n = 0;
          for (const r of e) {
            if (r.path === t.path) return e.splice(n), r;
            n++;
          }
          return t;
        }
      }
      function kd(t, e, n) {
        if ("" === e.path)
          return "full" === e.pathMatch && (t.hasChildren() || n.length > 0)
            ? {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              }
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              };
        const r = (e.matcher || hh)(n, t, e);
        return r
          ? {
              matched: !0,
              consumedSegments: r.consumed,
              lastChild: r.consumed.length,
              positionalParamSegments: r.posParams,
            }
          : {
              matched: !1,
              consumedSegments: [],
              lastChild: 0,
              positionalParamSegments: {},
            };
      }
      function Od(t) {
        if (1 === t.numberOfChildren && t.children.primary) {
          const e = t.children.primary;
          return new Eh(t.segments.concat(e.segments), e.children);
        }
        return t;
      }
      function Pd(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path &&
          void 0 !== n.redirectTo
        );
      }
      function Td(t) {
        return t.outlet || "primary";
      }
      class Md {
        constructor(t) {
          (this.path = t), (this.route = this.path[this.path.length - 1]);
        }
      }
      class Ad {
        constructor(t, e) {
          (this.component = t), (this.route = e);
        }
      }
      function Id(t, e, n) {
        const r = t._root;
        return (function t(
          e,
          n,
          r,
          s,
          i = { canDeactivateChecks: [], canActivateChecks: [] }
        ) {
          const o = Zh(n);
          return (
            e.children.forEach((e) => {
              !(function (
                e,
                n,
                r,
                s,
                i = { canDeactivateChecks: [], canActivateChecks: [] }
              ) {
                const o = e.value,
                  a = n ? n.value : null,
                  l = r ? r.getContext(e.value.outlet) : null;
                if (a && o.routeConfig === a.routeConfig) {
                  const c = (function (t, e, n) {
                    if ("function" == typeof n) return n(t, e);
                    switch (n) {
                      case "pathParamsChange":
                        return !Oh(t.url, e.url);
                      case "pathParamsOrQueryParamsChange":
                        return (
                          !Oh(t.url, e.url) || !yh(t.queryParams, e.queryParams)
                        );
                      case "always":
                        return !0;
                      case "paramsOrQueryParamsChange":
                        return !sd(t, e) || !yh(t.queryParams, e.queryParams);
                      case "paramsChange":
                      default:
                        return !sd(t, e);
                    }
                  })(a, o, o.routeConfig.runGuardsAndResolvers);
                  c
                    ? i.canActivateChecks.push(new Md(s))
                    : ((o.data = a.data), (o._resolvedData = a._resolvedData)),
                    t(e, n, o.component ? (l ? l.children : null) : r, s, i),
                    c &&
                      i.canDeactivateChecks.push(
                        new Ad((l && l.outlet && l.outlet.component) || null, a)
                      );
                } else
                  a && Dd(n, l, i),
                    i.canActivateChecks.push(new Md(s)),
                    t(e, null, o.component ? (l ? l.children : null) : r, s, i);
              })(e, o[e.value.outlet], r, s.concat([e.value]), i),
                delete o[e.value.outlet];
            }),
            bh(o, (t, e) => Dd(t, r.getContext(e), i)),
            i
          );
        })(r, e ? e._root : null, n, [r.value]);
      }
      function Rd(t, e, n) {
        const r = (function (t) {
          if (!t) return null;
          for (let e = t.parent; e; e = e.parent) {
            const t = e.routeConfig;
            if (t && t._loadedConfig) return t._loadedConfig;
          }
          return null;
        })(e);
        return (r ? r.module.injector : n).get(t);
      }
      function Dd(t, e, n) {
        const r = Zh(t),
          s = t.value;
        bh(r, (t, r) => {
          Dd(t, s.component ? (e ? e.children.getContext(r) : null) : e, n);
        }),
          n.canDeactivateChecks.push(
            new Ad(
              s.component && e && e.outlet && e.outlet.isActivated
                ? e.outlet.component
                : null,
              s
            )
          );
      }
      const jd = Symbol("INITIAL_VALUE");
      function Nd() {
        return Mu((t) =>
          (function (...t) {
            let e = null,
              n = null;
            return (
              O(t[t.length - 1]) && (n = t.pop()),
              "function" == typeof t[t.length - 1] && (e = t.pop()),
              1 === t.length && l(t[0]) && (t = t[0]),
              W(t, n).lift(new tu(e))
            );
          })(
            ...t.map((t) =>
              t.pipe(
                xu(1),
                (function (...t) {
                  const e = t[t.length - 1];
                  return O(e) ? (t.pop(), (n) => Ru(t, n, e)) : (e) => Ru(t, e);
                })(jd)
              )
            )
          ).pipe(
            Du((t, e) => {
              let n = !1;
              return e.reduce((t, r, s) => {
                if (t !== jd) return t;
                if ((r === jd && (n = !0), !n)) {
                  if (!1 === r) return r;
                  if (s === e.length - 1 || _d(r)) return r;
                }
                return t;
              }, t);
            }, jd),
            ou((t) => t !== jd),
            U((t) => (_d(t) ? t : !0 === t)),
            xu(1)
          )
        );
      }
      function Ud(t, e) {
        return null !== t && e && e(new sh(t)), Yc(!0);
      }
      function Ld(t, e) {
        return null !== t && e && e(new nh(t)), Yc(!0);
      }
      function Fd(t, e, n) {
        const r = e.routeConfig ? e.routeConfig.canActivate : null;
        return r && 0 !== r.length
          ? Yc(
              r.map((r) =>
                su(() => {
                  const s = Rd(r, e, n);
                  let i;
                  if (
                    (function (t) {
                      return t && vd(t.canActivate);
                    })(s)
                  )
                    i = Ch(s.canActivate(e, t));
                  else {
                    if (!vd(s)) throw new Error("Invalid CanActivate guard");
                    i = Ch(s(e, t));
                  }
                  return i.pipe(Ou());
                })
              )
            ).pipe(Nd())
          : Yc(!0);
      }
      function Hd(t, e, n) {
        const r = e[e.length - 1],
          s = e
            .slice(0, e.length - 1)
            .reverse()
            .map((t) =>
              (function (t) {
                const e = t.routeConfig ? t.routeConfig.canActivateChild : null;
                return e && 0 !== e.length ? { node: t, guards: e } : null;
              })(t)
            )
            .filter((t) => null !== t)
            .map((e) =>
              su(() =>
                Yc(
                  e.guards.map((s) => {
                    const i = Rd(s, e.node, n);
                    let o;
                    if (
                      (function (t) {
                        return t && vd(t.canActivateChild);
                      })(i)
                    )
                      o = Ch(i.canActivateChild(r, t));
                    else {
                      if (!vd(i))
                        throw new Error("Invalid CanActivateChild guard");
                      o = Ch(i(r, t));
                    }
                    return o.pipe(Ou());
                  })
                ).pipe(Nd())
              )
            );
        return Yc(s).pipe(Nd());
      }
      class Vd {}
      class $d {
        constructor(t, e, n, r, s, i) {
          (this.rootComponentType = t),
            (this.config = e),
            (this.urlTree = n),
            (this.url = r),
            (this.paramsInheritanceStrategy = s),
            (this.relativeLinkResolution = i);
        }
        recognize() {
          try {
            const t = Bd(
                this.urlTree.root,
                [],
                [],
                this.config,
                this.relativeLinkResolution
              ).segmentGroup,
              e = this.processSegmentGroup(this.config, t, "primary"),
              n = new Xh(
                [],
                Object.freeze({}),
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                {},
                "primary",
                this.rootComponentType,
                null,
                this.urlTree.root,
                -1,
                {}
              ),
              r = new Gh(n, e),
              s = new td(this.url, r);
            return this.inheritParamsAndData(s._root), Yc(s);
          } catch (t) {
            return new w((e) => e.error(t));
          }
        }
        inheritParamsAndData(t) {
          const e = t.value,
            n = Jh(e, this.paramsInheritanceStrategy);
          (e.params = Object.freeze(n.params)),
            (e.data = Object.freeze(n.data)),
            t.children.forEach((t) => this.inheritParamsAndData(t));
        }
        processSegmentGroup(t, e, n) {
          return 0 === e.segments.length && e.hasChildren()
            ? this.processChildren(t, e)
            : this.processSegment(t, e, e.segments, n);
        }
        processChildren(t, e) {
          const n = Ph(e, (e, n) => this.processSegmentGroup(t, e, n));
          return (
            (function (t) {
              const e = {};
              t.forEach((t) => {
                const n = e[t.value.outlet];
                if (n) {
                  const e = n.url.map((t) => t.toString()).join("/"),
                    r = t.value.url.map((t) => t.toString()).join("/");
                  throw new Error(
                    `Two segments cannot have the same outlet name: '${e}' and '${r}'.`
                  );
                }
                e[t.value.outlet] = t.value;
              });
            })(n),
            n.sort((t, e) =>
              "primary" === t.value.outlet
                ? -1
                : "primary" === e.value.outlet
                ? 1
                : t.value.outlet.localeCompare(e.value.outlet)
            ),
            n
          );
        }
        processSegment(t, e, n, r) {
          for (const i of t)
            try {
              return this.processSegmentAgainstRoute(i, e, n, r);
            } catch (s) {
              if (!(s instanceof Vd)) throw s;
            }
          if (this.noLeftoversInUrl(e, n, r)) return [];
          throw new Vd();
        }
        noLeftoversInUrl(t, e, n) {
          return 0 === e.length && !t.children[n];
        }
        processSegmentAgainstRoute(t, e, n, r) {
          if (t.redirectTo) throw new Vd();
          if ((t.outlet || "primary") !== r) throw new Vd();
          let s,
            i = [],
            o = [];
          if ("**" === t.path) {
            const i = n.length > 0 ? wh(n).parameters : {};
            s = new Xh(
              n,
              i,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              Zd(t),
              r,
              t.component,
              t,
              zd(e),
              qd(e) + n.length,
              Qd(t)
            );
          } else {
            const a = (function (t, e, n) {
              if ("" === e.path) {
                if ("full" === e.pathMatch && (t.hasChildren() || n.length > 0))
                  throw new Vd();
                return { consumedSegments: [], lastChild: 0, parameters: {} };
              }
              const r = (e.matcher || hh)(n, t, e);
              if (!r) throw new Vd();
              const s = {};
              bh(r.posParams, (t, e) => {
                s[e] = t.path;
              });
              const i =
                r.consumed.length > 0
                  ? Object.assign(
                      Object.assign({}, s),
                      r.consumed[r.consumed.length - 1].parameters
                    )
                  : s;
              return {
                consumedSegments: r.consumed,
                lastChild: r.consumed.length,
                parameters: i,
              };
            })(e, t, n);
            (i = a.consumedSegments),
              (o = n.slice(a.lastChild)),
              (s = new Xh(
                i,
                a.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                Zd(t),
                r,
                t.component,
                t,
                zd(e),
                qd(e) + i.length,
                Qd(t)
              ));
          }
          const a = (function (t) {
              return t.children
                ? t.children
                : t.loadChildren
                ? t._loadedConfig.routes
                : [];
            })(t),
            { segmentGroup: l, slicedSegments: c } = Bd(
              e,
              i,
              o,
              a,
              this.relativeLinkResolution
            );
          if (0 === c.length && l.hasChildren()) {
            const t = this.processChildren(a, l);
            return [new Gh(s, t)];
          }
          if (0 === a.length && 0 === c.length) return [new Gh(s, [])];
          const u = this.processSegment(a, l, c, "primary");
          return [new Gh(s, u)];
        }
      }
      function zd(t) {
        let e = t;
        for (; e._sourceSegment; ) e = e._sourceSegment;
        return e;
      }
      function qd(t) {
        let e = t,
          n = e._segmentIndexShift ? e._segmentIndexShift : 0;
        for (; e._sourceSegment; )
          (e = e._sourceSegment),
            (n += e._segmentIndexShift ? e._segmentIndexShift : 0);
        return n - 1;
      }
      function Bd(t, e, n, r, s) {
        if (
          n.length > 0 &&
          (function (t, e, n) {
            return n.some((n) => Wd(t, e, n) && "primary" !== Gd(n));
          })(t, n, r)
        ) {
          const s = new Eh(
            e,
            (function (t, e, n, r) {
              const s = {};
              (s.primary = r),
                (r._sourceSegment = t),
                (r._segmentIndexShift = e.length);
              for (const i of n)
                if ("" === i.path && "primary" !== Gd(i)) {
                  const n = new Eh([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift = e.length),
                    (s[Gd(i)] = n);
                }
              return s;
            })(t, e, r, new Eh(n, t.children))
          );
          return (
            (s._sourceSegment = t),
            (s._segmentIndexShift = e.length),
            { segmentGroup: s, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function (t, e, n) {
            return n.some((n) => Wd(t, e, n));
          })(t, n, r)
        ) {
          const i = new Eh(
            t.segments,
            (function (t, e, n, r, s, i) {
              const o = {};
              for (const a of r)
                if (Wd(t, n, a) && !s[Gd(a)]) {
                  const n = new Eh([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift =
                      "legacy" === i ? t.segments.length : e.length),
                    (o[Gd(a)] = n);
                }
              return Object.assign(Object.assign({}, s), o);
            })(t, e, n, r, t.children, s)
          );
          return (
            (i._sourceSegment = t),
            (i._segmentIndexShift = e.length),
            { segmentGroup: i, slicedSegments: n }
          );
        }
        const i = new Eh(t.segments, t.children);
        return (
          (i._sourceSegment = t),
          (i._segmentIndexShift = e.length),
          { segmentGroup: i, slicedSegments: n }
        );
      }
      function Wd(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path &&
          void 0 === n.redirectTo
        );
      }
      function Gd(t) {
        return t.outlet || "primary";
      }
      function Zd(t) {
        return t.data || {};
      }
      function Qd(t) {
        return t.resolve || {};
      }
      function Yd(t, e, n, r) {
        const s = Rd(t, e, r);
        return Ch(s.resolve ? s.resolve(e, n) : s(e, n));
      }
      function Kd(t) {
        return function (e) {
          return e.pipe(
            Mu((e) => {
              const n = t(e);
              return n ? V(n).pipe(U(() => e)) : V([e]);
            })
          );
        };
      }
      class Jd {
        shouldDetach(t) {
          return !1;
        }
        store(t, e) {}
        shouldAttach(t) {
          return !1;
        }
        retrieve(t) {
          return null;
        }
        shouldReuseRoute(t, e) {
          return t.routeConfig === e.routeConfig;
        }
      }
      const Xd = new jt("ROUTES");
      class tp {
        constructor(t, e, n, r) {
          (this.loader = t),
            (this.compiler = e),
            (this.onLoadStartListener = n),
            (this.onLoadEndListener = r);
        }
        load(t, e) {
          return (
            this.onLoadStartListener && this.onLoadStartListener(e),
            this.loadModuleFactory(e.loadChildren).pipe(
              U((n) => {
                this.onLoadEndListener && this.onLoadEndListener(e);
                const r = n.create(t);
                return new dh(_h(r.injector.get(Xd)).map(mh), r);
              })
            )
          );
        }
        loadModuleFactory(t) {
          return "string" == typeof t
            ? V(this.loader.load(t))
            : Ch(t()).pipe(
                $((t) =>
                  t instanceof Yt
                    ? Yc(t)
                    : V(this.compiler.compileModuleAsync(t))
                )
              );
        }
      }
      class ep {
        shouldProcessUrl(t) {
          return !0;
        }
        extract(t) {
          return t;
        }
        merge(t, e) {
          return t;
        }
      }
      function np(t) {
        throw t;
      }
      function rp(t, e, n) {
        return e.parse("/");
      }
      function sp(t, e) {
        return Yc(null);
      }
      let ip = (() => {
          class t {
            constructor(t, e, n, r, s, i, o, a) {
              (this.rootComponentType = t),
                (this.urlSerializer = e),
                (this.rootContexts = n),
                (this.location = r),
                (this.config = a),
                (this.lastSuccessfulNavigation = null),
                (this.currentNavigation = null),
                (this.navigationId = 0),
                (this.isNgZoneEnabled = !1),
                (this.events = new E()),
                (this.errorHandler = np),
                (this.malformedUriErrorHandler = rp),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.hooks = {
                  beforePreactivation: sp,
                  afterPreactivation: sp,
                }),
                (this.urlHandlingStrategy = new ep()),
                (this.routeReuseStrategy = new Jd()),
                (this.onSameUrlNavigation = "ignore"),
                (this.paramsInheritanceStrategy = "emptyOnly"),
                (this.urlUpdateStrategy = "deferred"),
                (this.relativeLinkResolution = "legacy"),
                (this.ngModule = s.get(Qt)),
                (this.console = s.get(Sa));
              const l = s.get(Ua);
              (this.isNgZoneEnabled = l instanceof Ua),
                this.resetConfig(a),
                (this.currentUrlTree = new xh(new Eh([], {}), {}, null)),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.configLoader = new tp(
                  i,
                  o,
                  (t) => this.triggerEvent(new th(t)),
                  (t) => this.triggerEvent(new eh(t))
                )),
                (this.routerState = Yh(
                  this.currentUrlTree,
                  this.rootComponentType
                )),
                (this.transitions = new Kc({
                  id: 0,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  extractedUrl: this.urlHandlingStrategy.extract(
                    this.currentUrlTree
                  ),
                  urlAfterRedirects: this.urlHandlingStrategy.extract(
                    this.currentUrlTree
                  ),
                  rawUrl: this.currentUrlTree,
                  extras: {},
                  resolve: null,
                  reject: null,
                  promise: Promise.resolve(!0),
                  source: "imperative",
                  restoredState: null,
                  currentSnapshot: this.routerState.snapshot,
                  targetSnapshot: null,
                  currentRouterState: this.routerState,
                  targetRouterState: null,
                  guards: { canActivateChecks: [], canDeactivateChecks: [] },
                  guardsResult: null,
                })),
                (this.navigations = this.setupNavigations(this.transitions)),
                this.processNavigations();
            }
            setupNavigations(t) {
              const e = this.events;
              return t.pipe(
                ou((t) => 0 !== t.id),
                U((t) =>
                  Object.assign(Object.assign({}, t), {
                    extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl),
                  })
                ),
                Mu((t) => {
                  let n = !1,
                    r = !1;
                  return Yc(t).pipe(
                    Fu((t) => {
                      this.currentNavigation = {
                        id: t.id,
                        initialUrl: t.currentRawUrl,
                        extractedUrl: t.extractedUrl,
                        trigger: t.source,
                        extras: t.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? Object.assign(
                              Object.assign({}, this.lastSuccessfulNavigation),
                              { previousNavigation: null }
                            )
                          : null,
                      };
                    }),
                    Mu((t) => {
                      const n =
                        !this.navigated ||
                        t.extractedUrl.toString() !==
                          this.browserUrlTree.toString();
                      if (
                        ("reload" === this.onSameUrlNavigation || n) &&
                        this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)
                      )
                        return Yc(t).pipe(
                          Mu((t) => {
                            const n = this.transitions.getValue();
                            return (
                              e.next(
                                new Bu(
                                  t.id,
                                  this.serializeUrl(t.extractedUrl),
                                  t.source,
                                  t.restoredState
                                )
                              ),
                              n !== this.transitions.getValue() ? nu : [t]
                            );
                          }),
                          Mu((t) => Promise.resolve(t)),
                          ((r = this.ngModule.injector),
                          (s = this.configLoader),
                          (i = this.urlSerializer),
                          (o = this.config),
                          function (t) {
                            return t.pipe(
                              Mu((t) =>
                                (function (t, e, n, r, s) {
                                  return new Ed(t, e, n, r, s).apply();
                                })(r, s, i, t.extractedUrl, o).pipe(
                                  U((e) =>
                                    Object.assign(Object.assign({}, t), {
                                      urlAfterRedirects: e,
                                    })
                                  )
                                )
                              )
                            );
                          }),
                          Fu((t) => {
                            this.currentNavigation = Object.assign(
                              Object.assign({}, this.currentNavigation),
                              { finalUrl: t.urlAfterRedirects }
                            );
                          }),
                          (function (t, e, n, r, s) {
                            return function (i) {
                              return i.pipe(
                                $((i) =>
                                  (function (
                                    t,
                                    e,
                                    n,
                                    r,
                                    s = "emptyOnly",
                                    i = "legacy"
                                  ) {
                                    return new $d(t, e, n, r, s, i).recognize();
                                  })(
                                    t,
                                    e,
                                    i.urlAfterRedirects,
                                    n(i.urlAfterRedirects),
                                    r,
                                    s
                                  ).pipe(
                                    U((t) =>
                                      Object.assign(Object.assign({}, i), {
                                        targetSnapshot: t,
                                      })
                                    )
                                  )
                                )
                              );
                            };
                          })(
                            this.rootComponentType,
                            this.config,
                            (t) => this.serializeUrl(t),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          Fu((t) => {
                            "eager" === this.urlUpdateStrategy &&
                              (t.extras.skipLocationChange ||
                                this.setBrowserUrl(
                                  t.urlAfterRedirects,
                                  !!t.extras.replaceUrl,
                                  t.id,
                                  t.extras.state
                                ),
                              (this.browserUrlTree = t.urlAfterRedirects));
                          }),
                          Fu((t) => {
                            const n = new Qu(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            e.next(n);
                          })
                        );
                      var r, s, i, o;
                      if (
                        n &&
                        this.rawUrlTree &&
                        this.urlHandlingStrategy.shouldProcessUrl(
                          this.rawUrlTree
                        )
                      ) {
                        const {
                            id: n,
                            extractedUrl: r,
                            source: s,
                            restoredState: i,
                            extras: o,
                          } = t,
                          a = new Bu(n, this.serializeUrl(r), s, i);
                        e.next(a);
                        const l = Yh(r, this.rootComponentType).snapshot;
                        return Yc(
                          Object.assign(Object.assign({}, t), {
                            targetSnapshot: l,
                            urlAfterRedirects: r,
                            extras: Object.assign(Object.assign({}, o), {
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            }),
                          })
                        );
                      }
                      return (
                        (this.rawUrlTree = t.rawUrl),
                        (this.browserUrlTree = t.urlAfterRedirects),
                        t.resolve(null),
                        nu
                      );
                    }),
                    Kd((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o },
                      } = t;
                      return this.hooks.beforePreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o,
                      });
                    }),
                    Fu((t) => {
                      const e = new Yu(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot
                      );
                      this.triggerEvent(e);
                    }),
                    U((t) =>
                      Object.assign(Object.assign({}, t), {
                        guards: Id(
                          t.targetSnapshot,
                          t.currentSnapshot,
                          this.rootContexts
                        ),
                      })
                    ),
                    (function (t, e) {
                      return function (n) {
                        return n.pipe(
                          $((n) => {
                            const {
                              targetSnapshot: r,
                              currentSnapshot: s,
                              guards: {
                                canActivateChecks: i,
                                canDeactivateChecks: o,
                              },
                            } = n;
                            return 0 === o.length && 0 === i.length
                              ? Yc(
                                  Object.assign(Object.assign({}, n), {
                                    guardsResult: !0,
                                  })
                                )
                              : (function (t, e, n, r) {
                                  return V(t).pipe(
                                    $((t) =>
                                      (function (t, e, n, r, s) {
                                        const i =
                                          e && e.routeConfig
                                            ? e.routeConfig.canDeactivate
                                            : null;
                                        return i && 0 !== i.length
                                          ? Yc(
                                              i.map((i) => {
                                                const o = Rd(i, e, s);
                                                let a;
                                                if (
                                                  (function (t) {
                                                    return (
                                                      t && vd(t.canDeactivate)
                                                    );
                                                  })(o)
                                                )
                                                  a = Ch(
                                                    o.canDeactivate(t, e, n, r)
                                                  );
                                                else {
                                                  if (!vd(o))
                                                    throw new Error(
                                                      "Invalid CanDeactivate guard"
                                                    );
                                                  a = Ch(o(t, e, n, r));
                                                }
                                                return a.pipe(Ou());
                                              })
                                            ).pipe(Nd())
                                          : Yc(!0);
                                      })(t.component, t.route, n, e, r)
                                    ),
                                    Ou((t) => !0 !== t, !0)
                                  );
                                })(o, r, s, t).pipe(
                                  $((n) =>
                                    n && "boolean" == typeof n
                                      ? (function (t, e, n, r) {
                                          return V(e).pipe(
                                            Uu((e) =>
                                              V([
                                                Ld(e.route.parent, r),
                                                Ud(e.route, r),
                                                Hd(t, e.path, n),
                                                Fd(t, e.route, n),
                                              ]).pipe(
                                                iu(),
                                                Ou((t) => !0 !== t, !0)
                                              )
                                            ),
                                            Ou((t) => !0 !== t, !0)
                                          );
                                        })(r, i, t, e)
                                      : Yc(n)
                                  ),
                                  U((t) =>
                                    Object.assign(Object.assign({}, n), {
                                      guardsResult: t,
                                    })
                                  )
                                );
                          })
                        );
                      };
                    })(this.ngModule.injector, (t) => this.triggerEvent(t)),
                    Fu((t) => {
                      if (_d(t.guardsResult)) {
                        const e = uh(
                          `Redirecting to "${this.serializeUrl(
                            t.guardsResult
                          )}"`
                        );
                        throw ((e.url = t.guardsResult), e);
                      }
                    }),
                    Fu((t) => {
                      const e = new Ku(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot,
                        !!t.guardsResult
                      );
                      this.triggerEvent(e);
                    }),
                    ou((t) => {
                      if (!t.guardsResult) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new Gu(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          ""
                        );
                        return e.next(n), t.resolve(!1), !1;
                      }
                      return !0;
                    }),
                    Kd((t) => {
                      if (t.guards.canActivateChecks.length)
                        return Yc(t).pipe(
                          Fu((t) => {
                            const e = new Ju(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          }),
                          ((e = this.paramsInheritanceStrategy),
                          (n = this.ngModule.injector),
                          function (t) {
                            return t.pipe(
                              $((t) => {
                                const {
                                  targetSnapshot: r,
                                  guards: { canActivateChecks: s },
                                } = t;
                                return s.length
                                  ? V(s).pipe(
                                      Uu((t) =>
                                        (function (t, e, n, r) {
                                          return (function (t, e, n, r) {
                                            const s = Object.keys(t);
                                            if (0 === s.length) return Yc({});
                                            if (1 === s.length) {
                                              const i = s[0];
                                              return Yd(t[i], e, n, r).pipe(
                                                U((t) => ({ [i]: t }))
                                              );
                                            }
                                            const i = {};
                                            return V(s)
                                              .pipe(
                                                $((s) =>
                                                  Yd(t[s], e, n, r).pipe(
                                                    U((t) => ((i[s] = t), t))
                                                  )
                                                )
                                              )
                                              .pipe(
                                                wu(),
                                                U(() => i)
                                              );
                                          })(t._resolve, t, e, r).pipe(
                                            U(
                                              (e) => (
                                                (t._resolvedData = e),
                                                (t.data = Object.assign(
                                                  Object.assign({}, t.data),
                                                  Jh(t, n).resolve
                                                )),
                                                null
                                              )
                                            )
                                          );
                                        })(t.route, r, e, n)
                                      ),
                                      (function (t, e) {
                                        return arguments.length >= 2
                                          ? function (n) {
                                              return v(
                                                Du(t, e),
                                                uu(1),
                                                yu(e)
                                              )(n);
                                            }
                                          : function (e) {
                                              return v(
                                                Du((e, n, r) => t(e, n, r + 1)),
                                                uu(1)
                                              )(e);
                                            };
                                      })((t, e) => t),
                                      U((e) => t)
                                    )
                                  : Yc(t);
                              })
                            );
                          }),
                          Fu((t) => {
                            const e = new Xu(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          })
                        );
                      var e, n;
                    }),
                    Kd((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o },
                      } = t;
                      return this.hooks.afterPreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o,
                      });
                    }),
                    U((t) => {
                      const e = (function (t, e, n) {
                        const r = (function t(e, n, r) {
                          if (
                            r &&
                            e.shouldReuseRoute(n.value, r.value.snapshot)
                          ) {
                            const s = r.value;
                            s._futureSnapshot = n.value;
                            const i = (function (e, n, r) {
                              return n.children.map((n) => {
                                for (const s of r.children)
                                  if (
                                    e.shouldReuseRoute(
                                      s.value.snapshot,
                                      n.value
                                    )
                                  )
                                    return t(e, n, s);
                                return t(e, n);
                              });
                            })(e, n, r);
                            return new Gh(s, i);
                          }
                          {
                            const r = e.retrieve(n.value);
                            if (r) {
                              const t = r.route;
                              return (
                                (function t(e, n) {
                                  if (
                                    e.value.routeConfig !== n.value.routeConfig
                                  )
                                    throw new Error(
                                      "Cannot reattach ActivatedRouteSnapshot created from a different route"
                                    );
                                  if (e.children.length !== n.children.length)
                                    throw new Error(
                                      "Cannot reattach ActivatedRouteSnapshot with a different number of children"
                                    );
                                  n.value._futureSnapshot = e.value;
                                  for (let r = 0; r < e.children.length; ++r)
                                    t(e.children[r], n.children[r]);
                                })(n, t),
                                t
                              );
                            }
                            {
                              const r = new Kh(
                                  new Kc((s = n.value).url),
                                  new Kc(s.params),
                                  new Kc(s.queryParams),
                                  new Kc(s.fragment),
                                  new Kc(s.data),
                                  s.outlet,
                                  s.component,
                                  s
                                ),
                                i = n.children.map((n) => t(e, n));
                              return new Gh(r, i);
                            }
                          }
                          var s;
                        })(t, e._root, n ? n._root : void 0);
                        return new Qh(r, e);
                      })(
                        this.routeReuseStrategy,
                        t.targetSnapshot,
                        t.currentRouterState
                      );
                      return Object.assign(Object.assign({}, t), {
                        targetRouterState: e,
                      });
                    }),
                    Fu((t) => {
                      (this.currentUrlTree = t.urlAfterRedirects),
                        (this.rawUrlTree = this.urlHandlingStrategy.merge(
                          this.currentUrlTree,
                          t.rawUrl
                        )),
                        (this.routerState = t.targetRouterState),
                        "deferred" === this.urlUpdateStrategy &&
                          (t.extras.skipLocationChange ||
                            this.setBrowserUrl(
                              this.rawUrlTree,
                              !!t.extras.replaceUrl,
                              t.id,
                              t.extras.state
                            ),
                          (this.browserUrlTree = t.urlAfterRedirects));
                    }),
                    ((i = this.rootContexts),
                    (o = this.routeReuseStrategy),
                    (a = (t) => this.triggerEvent(t)),
                    U(
                      (t) => (
                        new md(
                          o,
                          t.targetRouterState,
                          t.currentRouterState,
                          a
                        ).activate(i),
                        t
                      )
                    )),
                    Fu({
                      next() {
                        n = !0;
                      },
                      complete() {
                        n = !0;
                      },
                    }),
                    ((s = () => {
                      if (!n && !r) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new Gu(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`
                        );
                        e.next(n), t.resolve(!1);
                      }
                      this.currentNavigation = null;
                    }),
                    (t) => t.lift(new $u(s))),
                    bu((n) => {
                      if (((r = !0), (s = n) && s.ngNavigationCancelingError)) {
                        const r = _d(n.url);
                        r ||
                          ((this.navigated = !0),
                          this.resetStateAndUrl(
                            t.currentRouterState,
                            t.currentUrlTree,
                            t.rawUrl
                          ));
                        const s = new Gu(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          n.message
                        );
                        e.next(s),
                          r
                            ? setTimeout(() => {
                                const e = this.urlHandlingStrategy.merge(
                                  n.url,
                                  this.rawUrlTree
                                );
                                return this.scheduleNavigation(
                                  e,
                                  "imperative",
                                  null,
                                  {
                                    skipLocationChange:
                                      t.extras.skipLocationChange,
                                    replaceUrl:
                                      "eager" === this.urlUpdateStrategy,
                                  },
                                  {
                                    resolve: t.resolve,
                                    reject: t.reject,
                                    promise: t.promise,
                                  }
                                );
                              }, 0)
                            : t.resolve(!1);
                      } else {
                        this.resetStateAndUrl(
                          t.currentRouterState,
                          t.currentUrlTree,
                          t.rawUrl
                        );
                        const r = new Zu(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          n
                        );
                        e.next(r);
                        try {
                          t.resolve(this.errorHandler(n));
                        } catch (i) {
                          t.reject(i);
                        }
                      }
                      var s;
                      return nu;
                    })
                  );
                  var s, i, o, a;
                })
              );
            }
            resetRootComponentType(t) {
              (this.rootComponentType = t),
                (this.routerState.root.component = this.rootComponentType);
            }
            getTransition() {
              const t = this.transitions.value;
              return (t.urlAfterRedirects = this.browserUrlTree), t;
            }
            setTransition(t) {
              this.transitions.next(
                Object.assign(Object.assign({}, this.getTransition()), t)
              );
            }
            initialNavigation() {
              this.setUpLocationChangeListener(),
                0 === this.navigationId &&
                  this.navigateByUrl(this.location.path(!0), {
                    replaceUrl: !0,
                  });
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe((t) => {
                  let e = this.parseUrl(t.url);
                  const n = "popstate" === t.type ? "popstate" : "hashchange",
                    r = t.state && t.state.navigationId ? t.state : null;
                  setTimeout(() => {
                    this.scheduleNavigation(e, n, r, { replaceUrl: !0 });
                  }, 0);
                }));
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.currentNavigation;
            }
            triggerEvent(t) {
              this.events.next(t);
            }
            resetConfig(t) {
              ph(t),
                (this.config = t.map(mh)),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(),
                (this.locationSubscription = null));
            }
            createUrlTree(t, e = {}) {
              const {
                relativeTo: n,
                queryParams: r,
                fragment: s,
                preserveQueryParams: i,
                queryParamsHandling: o,
                preserveFragment: a,
              } = e;
              tr() &&
                i &&
                console &&
                console.warn &&
                console.warn(
                  "preserveQueryParams is deprecated, use queryParamsHandling instead."
                );
              const l = n || this.routerState.root,
                c = a ? this.currentUrlTree.fragment : s;
              let u = null;
              if (o)
                switch (o) {
                  case "merge":
                    u = Object.assign(
                      Object.assign({}, this.currentUrlTree.queryParams),
                      r
                    );
                    break;
                  case "preserve":
                    u = this.currentUrlTree.queryParams;
                    break;
                  default:
                    u = r || null;
                }
              else u = i ? this.currentUrlTree.queryParams : r || null;
              return (
                null !== u && (u = this.removeEmptyProps(u)),
                (function (t, e, n, r, s) {
                  if (0 === n.length) return od(e.root, e.root, e, r, s);
                  const i = (function (t) {
                    if (
                      "string" == typeof t[0] &&
                      1 === t.length &&
                      "/" === t[0]
                    )
                      return new ad(!0, 0, t);
                    let e = 0,
                      n = !1;
                    const r = t.reduce((t, r, s) => {
                      if ("object" == typeof r && null != r) {
                        if (r.outlets) {
                          const e = {};
                          return (
                            bh(r.outlets, (t, n) => {
                              e[n] = "string" == typeof t ? t.split("/") : t;
                            }),
                            [...t, { outlets: e }]
                          );
                        }
                        if (r.segmentPath) return [...t, r.segmentPath];
                      }
                      return "string" != typeof r
                        ? [...t, r]
                        : 0 === s
                        ? (r.split("/").forEach((r, s) => {
                            (0 == s && "." === r) ||
                              (0 == s && "" === r
                                ? (n = !0)
                                : ".." === r
                                ? e++
                                : "" != r && t.push(r));
                          }),
                          t)
                        : [...t, r];
                    }, []);
                    return new ad(n, e, r);
                  })(n);
                  if (i.toRoot()) return od(e.root, new Eh([], {}), e, r, s);
                  const o = (function (t, e, n) {
                      if (t.isAbsolute) return new ld(e.root, !0, 0);
                      if (-1 === n.snapshot._lastPathIndex)
                        return new ld(n.snapshot._urlSegment, !0, 0);
                      const r = id(t.commands[0]) ? 0 : 1;
                      return (function (t, e, n) {
                        let r = t,
                          s = e,
                          i = n;
                        for (; i > s; ) {
                          if (((i -= s), (r = r.parent), !r))
                            throw new Error("Invalid number of '../'");
                          s = r.segments.length;
                        }
                        return new ld(r, !1, s - i);
                      })(
                        n.snapshot._urlSegment,
                        n.snapshot._lastPathIndex + r,
                        t.numberOfDoubleDots
                      );
                    })(i, e, t),
                    a = o.processChildren
                      ? hd(o.segmentGroup, o.index, i.commands)
                      : ud(o.segmentGroup, o.index, i.commands);
                  return od(o.segmentGroup, a, e, r, s);
                })(l, this.currentUrlTree, t, u, c)
              );
            }
            navigateByUrl(t, e = { skipLocationChange: !1 }) {
              tr() &&
                this.isNgZoneEnabled &&
                !Ua.isInAngularZone() &&
                this.console.warn(
                  "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
                );
              const n = _d(t) ? t : this.parseUrl(t),
                r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
              return this.scheduleNavigation(r, "imperative", null, e);
            }
            navigate(t, e = { skipLocationChange: !1 }) {
              return (
                (function (t) {
                  for (let e = 0; e < t.length; e++) {
                    const n = t[e];
                    if (null == n)
                      throw new Error(
                        `The requested path contains ${n} segment at index ${e}`
                      );
                  }
                })(t),
                this.navigateByUrl(this.createUrlTree(t, e), e)
              );
            }
            serializeUrl(t) {
              return this.urlSerializer.serialize(t);
            }
            parseUrl(t) {
              let e;
              try {
                e = this.urlSerializer.parse(t);
              } catch (n) {
                e = this.malformedUriErrorHandler(n, this.urlSerializer, t);
              }
              return e;
            }
            isActive(t, e) {
              if (_d(t)) return Sh(this.currentUrlTree, t, e);
              const n = this.parseUrl(t);
              return Sh(this.currentUrlTree, n, e);
            }
            removeEmptyProps(t) {
              return Object.keys(t).reduce((e, n) => {
                const r = t[n];
                return null != r && (e[n] = r), e;
              }, {});
            }
            processNavigations() {
              this.navigations.subscribe(
                (t) => {
                  (this.navigated = !0),
                    (this.lastSuccessfulId = t.id),
                    this.events.next(
                      new Wu(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(this.currentUrlTree)
                      )
                    ),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    (this.currentNavigation = null),
                    t.resolve(!0);
                },
                (t) => {
                  this.console.warn("Unhandled Navigation Error: ");
                }
              );
            }
            scheduleNavigation(t, e, n, r, s) {
              const i = this.getTransition();
              if (
                i &&
                "imperative" !== e &&
                "imperative" === i.source &&
                i.rawUrl.toString() === t.toString()
              )
                return Promise.resolve(!0);
              if (
                i &&
                "hashchange" == e &&
                "popstate" === i.source &&
                i.rawUrl.toString() === t.toString()
              )
                return Promise.resolve(!0);
              if (
                i &&
                "popstate" == e &&
                "hashchange" === i.source &&
                i.rawUrl.toString() === t.toString()
              )
                return Promise.resolve(!0);
              let o, a, l;
              s
                ? ((o = s.resolve), (a = s.reject), (l = s.promise))
                : (l = new Promise((t, e) => {
                    (o = t), (a = e);
                  }));
              const c = ++this.navigationId;
              return (
                this.setTransition({
                  id: c,
                  source: e,
                  restoredState: n,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.rawUrlTree,
                  rawUrl: t,
                  extras: r,
                  resolve: o,
                  reject: a,
                  promise: l,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                l.catch((t) => Promise.reject(t))
              );
            }
            setBrowserUrl(t, e, n, r) {
              const s = this.urlSerializer.serialize(t);
              (r = r || {}),
                this.location.isCurrentPathEqualTo(s) || e
                  ? this.location.replaceState(
                      s,
                      "",
                      Object.assign(Object.assign({}, r), { navigationId: n })
                    )
                  : this.location.go(
                      s,
                      "",
                      Object.assign(Object.assign({}, r), { navigationId: n })
                    );
            }
            resetStateAndUrl(t, e, n) {
              (this.routerState = t),
                (this.currentUrlTree = e),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  n
                )),
                this.resetUrlToCurrentUrlTree();
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                "",
                { navigationId: this.lastSuccessfulId }
              );
            }
          }
          return (
            (t.ɵfac = function (t) {
              bi();
            }),
            (t.ɵdir = he({ type: t })),
            t
          );
        })(),
        op = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.router = t),
                (this.route = e),
                (this.commands = []),
                null == n && r.setAttribute(s.nativeElement, "tabindex", "0");
            }
            set routerLink(t) {
              this.commands = null != t ? (Array.isArray(t) ? t : [t]) : [];
            }
            set preserveQueryParams(t) {
              tr() &&
                console &&
                console.warn &&
                console.warn(
                  "preserveQueryParams is deprecated!, use queryParamsHandling instead."
                ),
                (this.preserve = t);
            }
            onClick() {
              const t = {
                skipLocationChange: lp(this.skipLocationChange),
                replaceUrl: lp(this.replaceUrl),
                state: this.state,
              };
              return this.router.navigateByUrl(this.urlTree, t), !0;
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: lp(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: lp(this.preserveFragment),
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                _i(ip),
                _i(Kh),
                wi("tabindex"),
                _i(Ji),
                _i(Zi)
              );
            }),
            (t.ɵdir = he({
              type: t,
              selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
              hostBindings: function (t, e) {
                1 & t &&
                  Ti("click", function () {
                    return e.onClick();
                  });
              },
              inputs: {
                routerLink: "routerLink",
                preserveQueryParams: "preserveQueryParams",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                preserveFragment: "preserveFragment",
                skipLocationChange: "skipLocationChange",
                replaceUrl: "replaceUrl",
                state: "state",
              },
            })),
            t
          );
        })(),
        ap = (() => {
          class t {
            constructor(t, e, n) {
              (this.router = t),
                (this.route = e),
                (this.locationStrategy = n),
                (this.commands = []),
                (this.subscription = t.events.subscribe((t) => {
                  t instanceof Wu && this.updateTargetUrlAndHref();
                }));
            }
            set routerLink(t) {
              this.commands = null != t ? (Array.isArray(t) ? t : [t]) : [];
            }
            set preserveQueryParams(t) {
              tr() &&
                console &&
                console.warn &&
                console.warn(
                  "preserveQueryParams is deprecated, use queryParamsHandling instead."
                ),
                (this.preserve = t);
            }
            ngOnChanges(t) {
              this.updateTargetUrlAndHref();
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            onClick(t, e, n, r) {
              if (0 !== t || e || n || r) return !0;
              if ("string" == typeof this.target && "_self" != this.target)
                return !0;
              const s = {
                skipLocationChange: lp(this.skipLocationChange),
                replaceUrl: lp(this.replaceUrl),
                state: this.state,
              };
              return this.router.navigateByUrl(this.urlTree, s), !1;
            }
            updateTargetUrlAndHref() {
              this.href = this.locationStrategy.prepareExternalUrl(
                this.router.serializeUrl(this.urlTree)
              );
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: lp(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: lp(this.preserveFragment),
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(_i(ip), _i(Kh), _i(El));
            }),
            (t.ɵdir = he({
              type: t,
              selectors: [
                ["a", "routerLink", ""],
                ["area", "routerLink", ""],
              ],
              hostVars: 2,
              hostBindings: function (t, e) {
                1 & t &&
                  Ti("click", function (t) {
                    return e.onClick(
                      t.button,
                      t.ctrlKey,
                      t.metaKey,
                      t.shiftKey
                    );
                  }),
                  2 & t && (Fi("href", e.href, sr), mi("target", e.target));
              },
              inputs: {
                routerLink: "routerLink",
                preserveQueryParams: "preserveQueryParams",
                target: "target",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                preserveFragment: "preserveFragment",
                skipLocationChange: "skipLocationChange",
                replaceUrl: "replaceUrl",
                state: "state",
              },
              features: [$i],
            })),
            t
          );
        })();
      function lp(t) {
        return "" === t || !!t;
      }
      let cp = (() => {
        class t {
          constructor(t, e, n, r, s) {
            (this.router = t),
              (this.element = e),
              (this.renderer = n),
              (this.link = r),
              (this.linkWithHref = s),
              (this.classes = []),
              (this.isActive = !1),
              (this.routerLinkActiveOptions = { exact: !1 }),
              (this.subscription = t.events.subscribe((t) => {
                t instanceof Wu && this.update();
              }));
          }
          ngAfterContentInit() {
            this.links.changes.subscribe((t) => this.update()),
              this.linksWithHrefs.changes.subscribe((t) => this.update()),
              this.update();
          }
          set routerLinkActive(t) {
            const e = Array.isArray(t) ? t : t.split(" ");
            this.classes = e.filter((t) => !!t);
          }
          ngOnChanges(t) {
            this.update();
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          update() {
            this.links &&
              this.linksWithHrefs &&
              this.router.navigated &&
              Promise.resolve().then(() => {
                const t = this.hasActiveLinks();
                this.isActive !== t &&
                  ((this.isActive = t),
                  this.classes.forEach((e) => {
                    t
                      ? this.renderer.addClass(this.element.nativeElement, e)
                      : this.renderer.removeClass(
                          this.element.nativeElement,
                          e
                        );
                  }));
              });
          }
          isLinkActive(t) {
            return (e) =>
              t.isActive(e.urlTree, this.routerLinkActiveOptions.exact);
          }
          hasActiveLinks() {
            const t = this.isLinkActive(this.router);
            return (
              (this.link && t(this.link)) ||
              (this.linkWithHref && t(this.linkWithHref)) ||
              this.links.some(t) ||
              this.linksWithHrefs.some(t)
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(_i(ip), _i(Zi), _i(Ji), _i(op, 8), _i(ap, 8));
          }),
          (t.ɵdir = he({
            type: t,
            selectors: [["", "routerLinkActive", ""]],
            contentQueries: function (t, e, n) {
              var r;
              1 & t && (ua(n, op, !0), ua(n, ap, !0)),
                2 & t &&
                  (oa((r = ha())) && (e.links = r),
                  oa((r = ha())) && (e.linksWithHrefs = r));
            },
            inputs: {
              routerLinkActiveOptions: "routerLinkActiveOptions",
              routerLinkActive: "routerLinkActive",
            },
            exportAs: ["routerLinkActive"],
            features: [$i],
          })),
          t
        );
      })();
      class up {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new hp()),
            (this.attachRef = null);
        }
      }
      class hp {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(t, e) {
          const n = this.getOrCreateContext(t);
          (n.outlet = e), this.contexts.set(t, n);
        }
        onChildOutletDestroyed(t) {
          const e = this.getContext(t);
          e && (e.outlet = null);
        }
        onOutletDeactivated() {
          const t = this.contexts;
          return (this.contexts = new Map()), t;
        }
        onOutletReAttached(t) {
          this.contexts = t;
        }
        getOrCreateContext(t) {
          let e = this.getContext(t);
          return e || ((e = new up()), this.contexts.set(t, e)), e;
        }
        getContext(t) {
          return this.contexts.get(t) || null;
        }
      }
      let dp = (() => {
        class t {
          constructor(t, e, n, r, s) {
            (this.parentContexts = t),
              (this.location = e),
              (this.resolver = n),
              (this.changeDetector = s),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new Qo()),
              (this.deactivateEvents = new Qo()),
              (this.name = r || "primary"),
              t.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const t = this.parentContexts.getContext(this.name);
              t &&
                t.route &&
                (t.attachRef
                  ? this.attach(t.attachRef, t.route)
                  : this.activateWith(t.route, t.resolver || null));
            }
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new Error("Outlet is not activated");
            this.location.detach();
            const t = this.activated;
            return (this.activated = null), (this._activatedRoute = null), t;
          }
          attach(t, e) {
            (this.activated = t),
              (this._activatedRoute = e),
              this.location.insert(t.hostView);
          }
          deactivate() {
            if (this.activated) {
              const t = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(t);
            }
          }
          activateWith(t, e) {
            if (this.isActivated)
              throw new Error("Cannot activate an already activated outlet");
            this._activatedRoute = t;
            const n = (e = e || this.resolver).resolveComponentFactory(
                t._futureSnapshot.routeConfig.component
              ),
              r = this.parentContexts.getOrCreateContext(this.name).children,
              s = new pp(t, r, this.location.injector);
            (this.activated = this.location.createComponent(
              n,
              this.location.length,
              s
            )),
              this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(_i(hp), _i(bo), _i(Gi), wi("name"), _i(Hs));
          }),
          (t.ɵdir = he({
            type: t,
            selectors: [["router-outlet"]],
            outputs: {
              activateEvents: "activate",
              deactivateEvents: "deactivate",
            },
            exportAs: ["outlet"],
          })),
          t
        );
      })();
      class pp {
        constructor(t, e, n) {
          (this.route = t), (this.childContexts = e), (this.parent = n);
        }
        get(t, e) {
          return t === Kh
            ? this.route
            : t === hp
            ? this.childContexts
            : this.parent.get(t, e);
        }
      }
      class fp {}
      class gp {
        preload(t, e) {
          return Yc(null);
        }
      }
      let mp = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.router = t),
                (this.injector = r),
                (this.preloadingStrategy = s),
                (this.loader = new tp(
                  e,
                  n,
                  (e) => t.triggerEvent(new th(e)),
                  (e) => t.triggerEvent(new eh(e))
                ));
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  ou((t) => t instanceof Wu),
                  Uu(() => this.preload())
                )
                .subscribe(() => {});
            }
            preload() {
              const t = this.injector.get(Qt);
              return this.processRoutes(t, this.router.config);
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            processRoutes(t, e) {
              const n = [];
              for (const r of e)
                if (r.loadChildren && !r.canLoad && r._loadedConfig) {
                  const t = r._loadedConfig;
                  n.push(this.processRoutes(t.module, t.routes));
                } else
                  r.loadChildren && !r.canLoad
                    ? n.push(this.preloadConfig(t, r))
                    : r.children && n.push(this.processRoutes(t, r.children));
              return V(n).pipe(
                B(),
                U((t) => {})
              );
            }
            preloadConfig(t, e) {
              return this.preloadingStrategy.preload(e, () =>
                this.loader
                  .load(t.injector, e)
                  .pipe(
                    $(
                      (t) => (
                        (e._loadedConfig = t),
                        this.processRoutes(t.module, t.routes)
                      )
                    )
                  )
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Bt(ip), Bt(il), Bt(Ra), Bt(ei), Bt(fp));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        yp = (() => {
          class t {
            constructor(t, e, n = {}) {
              (this.router = t),
                (this.viewportScroller = e),
                (this.options = n),
                (this.lastId = 0),
                (this.lastSource = "imperative"),
                (this.restoredId = 0),
                (this.store = {}),
                (n.scrollPositionRestoration =
                  n.scrollPositionRestoration || "disabled"),
                (n.anchorScrolling = n.anchorScrolling || "disabled");
            }
            init() {
              "disabled" !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration("manual"),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }
            createScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof Bu
                  ? ((this.store[
                      this.lastId
                    ] = this.viewportScroller.getScrollPosition()),
                    (this.lastSource = t.navigationTrigger),
                    (this.restoredId = t.restoredState
                      ? t.restoredState.navigationId
                      : 0))
                  : t instanceof Wu &&
                    ((this.lastId = t.id),
                    this.scheduleScrollEvent(
                      t,
                      this.router.parseUrl(t.urlAfterRedirects).fragment
                    ));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof oh &&
                  (t.position
                    ? "top" === this.options.scrollPositionRestoration
                      ? this.viewportScroller.scrollToPosition([0, 0])
                      : "enabled" === this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition(t.position)
                    : t.anchor && "enabled" === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(t.anchor)
                    : "disabled" !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition([0, 0]));
              });
            }
            scheduleScrollEvent(t, e) {
              this.router.triggerEvent(
                new oh(
                  t,
                  "popstate" === this.lastSource
                    ? this.store[this.restoredId]
                    : null,
                  e
                )
              );
            }
            ngOnDestroy() {
              this.routerEventsSubscription &&
                this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription &&
                  this.scrollEventsSubscription.unsubscribe();
            }
          }
          return (
            (t.ɵfac = function (t) {
              bi();
            }),
            (t.ɵdir = he({ type: t })),
            t
          );
        })();
      const vp = new jt("ROUTER_CONFIGURATION"),
        _p = new jt("ROUTER_FORROOT_GUARD"),
        wp = [
          Ml,
          { provide: Th, useClass: Mh },
          {
            provide: ip,
            useFactory: function (t, e, n, r, s, i, o, a = {}, l, c) {
              const u = new ip(null, t, e, n, r, s, i, _h(o));
              if (
                (l && (u.urlHandlingStrategy = l),
                c && (u.routeReuseStrategy = c),
                a.errorHandler && (u.errorHandler = a.errorHandler),
                a.malformedUriErrorHandler &&
                  (u.malformedUriErrorHandler = a.malformedUriErrorHandler),
                a.enableTracing)
              ) {
                const t = fl();
                u.events.subscribe((e) => {
                  t.logGroup("Router Event: " + e.constructor.name),
                    t.log(e.toString()),
                    t.log(e),
                    t.logGroupEnd();
                });
              }
              return (
                a.onSameUrlNavigation &&
                  (u.onSameUrlNavigation = a.onSameUrlNavigation),
                a.paramsInheritanceStrategy &&
                  (u.paramsInheritanceStrategy = a.paramsInheritanceStrategy),
                a.urlUpdateStrategy &&
                  (u.urlUpdateStrategy = a.urlUpdateStrategy),
                a.relativeLinkResolution &&
                  (u.relativeLinkResolution = a.relativeLinkResolution),
                u
              );
            },
            deps: [
              Th,
              hp,
              Ml,
              ei,
              il,
              Ra,
              Xd,
              vp,
              [class {}, new rt()],
              [class {}, new rt()],
            ],
          },
          hp,
          {
            provide: Kh,
            useFactory: function (t) {
              return t.routerState.root;
            },
            deps: [ip],
          },
          { provide: il, useClass: ll },
          mp,
          gp,
          class {
            preload(t, e) {
              return e().pipe(bu(() => Yc(null)));
            }
          },
          { provide: vp, useValue: { enableTracing: !1 } },
        ];
      function bp() {
        return new Ja("Router", ip);
      }
      let Cp = (() => {
        class t {
          constructor(t, e) {}
          static forRoot(e, n) {
            return {
              ngModule: t,
              providers: [
                wp,
                kp(e),
                {
                  provide: _p,
                  useFactory: Ep,
                  deps: [[ip, new rt(), new it()]],
                },
                { provide: vp, useValue: n || {} },
                {
                  provide: El,
                  useFactory: xp,
                  deps: [ml, [new nt(Ol), new rt()], vp],
                },
                { provide: yp, useFactory: Sp, deps: [ip, wc, vp] },
                {
                  provide: fp,
                  useExisting:
                    n && n.preloadingStrategy ? n.preloadingStrategy : gp,
                },
                { provide: Ja, multi: !0, useFactory: bp },
                [
                  Op,
                  { provide: ga, multi: !0, useFactory: Pp, deps: [Op] },
                  { provide: Mp, useFactory: Tp, deps: [Op] },
                  { provide: Ca, multi: !0, useExisting: Mp },
                ],
              ],
            };
          }
          static forChild(e) {
            return { ngModule: t, providers: [kp(e)] };
          }
        }
        return (
          (t.ɵmod = ce({ type: t })),
          (t.ɵinj = ct({
            factory: function (e) {
              return new (e || t)(Bt(_p, 8), Bt(ip, 8));
            },
          })),
          t
        );
      })();
      function Sp(t, e, n) {
        return n.scrollOffset && e.setOffset(n.scrollOffset), new yp(t, e, n);
      }
      function xp(t, e, n = {}) {
        return n.useHash ? new Tl(t, e) : new Pl(t, e);
      }
      function Ep(t) {
        if (t)
          throw new Error(
            "RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead."
          );
        return "guarded";
      }
      function kp(t) {
        return [
          { provide: ni, multi: !0, useValue: t },
          { provide: Xd, multi: !0, useValue: t },
        ];
      }
      let Op = (() => {
        class t {
          constructor(t) {
            (this.injector = t),
              (this.initNavigation = !1),
              (this.resultOfPreactivationDone = new E());
          }
          appInitializer() {
            return this.injector.get(vl, Promise.resolve(null)).then(() => {
              let t = null;
              const e = new Promise((e) => (t = e)),
                n = this.injector.get(ip),
                r = this.injector.get(vp);
              if (this.isLegacyDisabled(r) || this.isLegacyEnabled(r)) t(!0);
              else if ("disabled" === r.initialNavigation)
                n.setUpLocationChangeListener(), t(!0);
              else {
                if ("enabled" !== r.initialNavigation)
                  throw new Error(
                    `Invalid initialNavigation options: '${r.initialNavigation}'`
                  );
                (n.hooks.afterPreactivation = () =>
                  this.initNavigation
                    ? Yc(null)
                    : ((this.initNavigation = !0),
                      t(!0),
                      this.resultOfPreactivationDone)),
                  n.initialNavigation();
              }
              return e;
            });
          }
          bootstrapListener(t) {
            const e = this.injector.get(vp),
              n = this.injector.get(mp),
              r = this.injector.get(yp),
              s = this.injector.get(ip),
              i = this.injector.get(rl);
            t === i.components[0] &&
              (this.isLegacyEnabled(e)
                ? s.initialNavigation()
                : this.isLegacyDisabled(e) && s.setUpLocationChangeListener(),
              n.setUpPreloading(),
              r.init(),
              s.resetRootComponentType(i.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
          isLegacyEnabled(t) {
            return (
              "legacy_enabled" === t.initialNavigation ||
              !0 === t.initialNavigation ||
              void 0 === t.initialNavigation
            );
          }
          isLegacyDisabled(t) {
            return (
              "legacy_disabled" === t.initialNavigation ||
              !1 === t.initialNavigation
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Bt(ei));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function Pp(t) {
        return t.appInitializer.bind(t);
      }
      function Tp(t) {
        return t.bootstrapListener.bind(t);
      }
      const Mp = new jt("Router Initializer");
      class Ap {
        constructor(t, e, n, r) {
          (this.name = t),
            (this.x = e),
            (this.y = n),
            (this.width = null == r ? void 0 : r.width),
            (this.height = null == r ? void 0 : r.height),
            (this.found = (null == r ? void 0 : r.found) || !1),
            (this.hud = (null == r ? void 0 : r.hud) || !1);
        }
        getSrc() {
          return this.hud
            ? `assets/images/map/markers/${this.name}.svg`
            : `assets/images/map/markers/${
                this.found ? "found" : "not_found"
              }/${this.name}.svg`;
        }
      }
      class Ip {
        constructor(
          t = {
            health: {
              head: 100,
              leftarm: 100,
              leftleg: 100,
              rightarm: 100,
              rightleg: 100,
              addicted: 0,
              irradiated: 0,
            },
            atribute: {
              strength: 0,
              perception: 0,
              endurance: 0,
              charisma: 0,
              inteligence: 0,
              agility: 0,
              luck: 0,
            },
            experience: 0,
            total_action_points: 50,
            total_health_points: 150,
          }
        ) {
          (this.health = {
            members: {
              head: t.health.head,
              left_arm: t.health.leftarm,
              right_arm: t.health.rightarm,
              left_leg: t.health.leftleg,
              right_leg: t.health.rightleg,
            },
            irraidated: t.health.irradiated,
            Addicted: t.health.addicted,
          }),
            (this.special = {
              strength: t.atribute.strength,
              perception: t.atribute.perception,
              endurance: t.atribute.endurance,
              charisma: t.atribute.charisma,
              inteligence: t.atribute.inteligence,
              agility: t.atribute.agility,
              luck: t.atribute.luck,
            }),
            (this.inventory = {
              weapon: [],
              apparel: [],
              aid: [],
              misc: [],
              junk: [],
              ammunition: [],
            }),
            (this.equiped = {
              hand: null,
              head: null,
              leftArm: null,
              rightArm: null,
              leftLeg: null,
              rightLeg: null,
            }),
            (this.experience = t.experience),
            (this.total_action_points = t.total_action_points),
            (this.action_points = t.total_action_points),
            (this.total_health_points = t.total_health_points);
        }
        getStatus() {
          const t = Object.values(this.health.members);
          return t.reduce((t, e) => t + e, 0) == 100 * t.length
            ? "normal"
            : "hurt";
        }
        getLife() {
          const t = Object.values(this.health.members),
            e = t.reduce((t, e) => t + e, 0) / t.length / 100;
          return Math.floor(this.total_health_points * e);
        }
        loseLife(t, e) {
          (this.health.members[t] -= e),
            this.health.members[t] < 0 && (this.health.members[t] = 0);
        }
      }
      var Rp = (function (t) {
        return (
          (t.Ammo9Milimeter = "9mm Round"),
          (t.Ammo10Milimeter = "10mm Round"),
          (t.Ammo44Caliber = ".44mm Round"),
          (t.Ammo38Caliber = ".38 Round"),
          (t.Ammo45Caliber = ".45mm Round"),
          (t.Ammo308Caliber = ".308 Round"),
          (t.AmmoShotgunShell = "Shotgun Shell"),
          (t.Ammo556Caliber = "5.56mm Round"),
          (t.Ammo762Caliber = "7.62mm Round"),
          (t.Ammo5Milimeters = "5mm Round"),
          (t.AmmoMissile = "Missile"),
          (t.AmmoMiniNuke = "Mini Nuke"),
          (t.AmmoFusionCell = "Fusion Cell"),
          (t.AmmoPlasmaCartidge = "Plasma Cartridge"),
          (t.AmmoFlamerFuel = "Flamer Fuel"),
          (t.AmmoCryoRound = "Cryo Round"),
          (t.AmmoGammaRound = "Gamma Round"),
          (t.FusionCore = "Fusion Core"),
          t
        );
      })({});
      class Dp extends class extends class {
        constructor() {
          this.baseClass = "ammunition";
        }
      } {
        constructor(t) {
          super(),
            (this.quantity = t),
            t || (this.quantity = Math.floor(10 * Math.random()));
        }
      } {
        constructor() {
          super(...arguments), (this.type = Rp.Ammo10Milimeter);
        }
      }
      var jp = (function (t) {
        return (
          (t.pistol = "Pistol"),
          (t.shotgun = "Shotgun"),
          (t.smg = "SMG"),
          (t.rifle = "Rifle"),
          (t.heavy = "Heavy"),
          (t.semiautomatic = "Semi-automatic"),
          (t.automatic = "Automatic"),
          (t.pipe = "Pipe"),
          (t.special = "Special"),
          (t.melee = "Melee"),
          t
        );
      })({});
      class Np extends class {
        constructor() {
          this.baseClass = "weapon";
        }
        fire() {
          return this.ammunition.quantity - 1 > 0
            ? ((this.ammunition.quantity -= 1), Math.random() * this.damage)
            : null;
        }
      } {
        constructor(t) {
          super(),
            (this.type = jp.pistol),
            (this.imageSRC = "assets/images/HUD/Inventory/icon_82.svg"),
            (this.name = (null == t ? void 0 : t.name) || "10mm Pistol"),
            (this.ammunition = (null == t ? void 0 : t.ammunition) || new Dp()),
            (this.damage = (null == t ? void 0 : t.damage) || 18),
            (this.fireRate = (null == t ? void 0 : t.fireRate) || 4.66),
            (this.apCost = (null == t ? void 0 : t.apCost) || 28),
            (this.range = (null == t ? void 0 : t.range) || 21.93),
            (this.weight = (null == t ? void 0 : t.weight) || 3),
            (this.value = (null == t ? void 0 : t.value) || 45),
            (this.accuracy = Number.parseFloat(
              (
                (null == t ? void 0 : t.accuracy) || 100 * Math.random()
              ).toFixed(2)
            ));
        }
      }
      class Up {
        constructor(t) {
          (this.type = jp.melee),
            (this.baseClass = "weapon"),
            (this.imageSRC = "assets/images/HUD/Inventory/icon_102.svg"),
            (this.name = (null == t ? void 0 : t.name) || "Security Baton"),
            (this.damage = (null == t ? void 0 : t.damage) || 11),
            (this.fireRate = (null == t ? void 0 : t.fireRate) || "medium"),
            (this.apCost = (null == t ? void 0 : t.apCost) || 30),
            (this.weight = (null == t ? void 0 : t.weight) || 2),
            (this.value = (null == t ? void 0 : t.value) || 15);
        }
      }
      class Lp {}
      class Fp {}
      class Hp {
        constructor(t) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            t
              ? (this.lazyInit =
                  "string" == typeof t
                    ? () => {
                        (this.headers = new Map()),
                          t.split("\n").forEach((t) => {
                            const e = t.indexOf(":");
                            if (e > 0) {
                              const n = t.slice(0, e),
                                r = n.toLowerCase(),
                                s = t.slice(e + 1).trim();
                              this.maybeSetNormalizedName(n, r),
                                this.headers.has(r)
                                  ? this.headers.get(r).push(s)
                                  : this.headers.set(r, [s]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(t).forEach((e) => {
                            let n = t[e];
                            const r = e.toLowerCase();
                            "string" == typeof n && (n = [n]),
                              n.length > 0 &&
                                (this.headers.set(r, n),
                                this.maybeSetNormalizedName(e, r));
                          });
                      })
              : (this.headers = new Map());
        }
        has(t) {
          return this.init(), this.headers.has(t.toLowerCase());
        }
        get(t) {
          this.init();
          const e = this.headers.get(t.toLowerCase());
          return e && e.length > 0 ? e[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(t) {
          return this.init(), this.headers.get(t.toLowerCase()) || null;
        }
        append(t, e) {
          return this.clone({ name: t, value: e, op: "a" });
        }
        set(t, e) {
          return this.clone({ name: t, value: e, op: "s" });
        }
        delete(t, e) {
          return this.clone({ name: t, value: e, op: "d" });
        }
        maybeSetNormalizedName(t, e) {
          this.normalizedNames.has(e) || this.normalizedNames.set(e, t);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof Hp
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((t) => this.applyUpdate(t)),
              (this.lazyUpdate = null)));
        }
        copyFrom(t) {
          t.init(),
            Array.from(t.headers.keys()).forEach((e) => {
              this.headers.set(e, t.headers.get(e)),
                this.normalizedNames.set(e, t.normalizedNames.get(e));
            });
        }
        clone(t) {
          const e = new Hp();
          return (
            (e.lazyInit =
              this.lazyInit && this.lazyInit instanceof Hp
                ? this.lazyInit
                : this),
            (e.lazyUpdate = (this.lazyUpdate || []).concat([t])),
            e
          );
        }
        applyUpdate(t) {
          const e = t.name.toLowerCase();
          switch (t.op) {
            case "a":
            case "s":
              let n = t.value;
              if (("string" == typeof n && (n = [n]), 0 === n.length)) return;
              this.maybeSetNormalizedName(t.name, e);
              const r = ("a" === t.op ? this.headers.get(e) : void 0) || [];
              r.push(...n), this.headers.set(e, r);
              break;
            case "d":
              const s = t.value;
              if (s) {
                let t = this.headers.get(e);
                if (!t) return;
                (t = t.filter((t) => -1 === s.indexOf(t))),
                  0 === t.length
                    ? (this.headers.delete(e), this.normalizedNames.delete(e))
                    : this.headers.set(e, t);
              } else this.headers.delete(e), this.normalizedNames.delete(e);
          }
        }
        forEach(t) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((e) =>
              t(this.normalizedNames.get(e), this.headers.get(e))
            );
        }
      }
      class Vp {
        encodeKey(t) {
          return $p(t);
        }
        encodeValue(t) {
          return $p(t);
        }
        decodeKey(t) {
          return decodeURIComponent(t);
        }
        decodeValue(t) {
          return decodeURIComponent(t);
        }
      }
      function $p(t) {
        return encodeURIComponent(t)
          .replace(/%40/gi, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/gi, "$")
          .replace(/%2C/gi, ",")
          .replace(/%3B/gi, ";")
          .replace(/%2B/gi, "+")
          .replace(/%3D/gi, "=")
          .replace(/%3F/gi, "?")
          .replace(/%2F/gi, "/");
      }
      class zp {
        constructor(t = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = t.encoder || new Vp()),
            t.fromString)
          ) {
            if (t.fromObject)
              throw new Error("Cannot specify both fromString and fromObject.");
            this.map = (function (t, e) {
              const n = new Map();
              return (
                t.length > 0 &&
                  t.split("&").forEach((t) => {
                    const r = t.indexOf("="),
                      [s, i] =
                        -1 == r
                          ? [e.decodeKey(t), ""]
                          : [
                              e.decodeKey(t.slice(0, r)),
                              e.decodeValue(t.slice(r + 1)),
                            ],
                      o = n.get(s) || [];
                    o.push(i), n.set(s, o);
                  }),
                n
              );
            })(t.fromString, this.encoder);
          } else
            t.fromObject
              ? ((this.map = new Map()),
                Object.keys(t.fromObject).forEach((e) => {
                  const n = t.fromObject[e];
                  this.map.set(e, Array.isArray(n) ? n : [n]);
                }))
              : (this.map = null);
        }
        has(t) {
          return this.init(), this.map.has(t);
        }
        get(t) {
          this.init();
          const e = this.map.get(t);
          return e ? e[0] : null;
        }
        getAll(t) {
          return this.init(), this.map.get(t) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(t, e) {
          return this.clone({ param: t, value: e, op: "a" });
        }
        set(t, e) {
          return this.clone({ param: t, value: e, op: "s" });
        }
        delete(t, e) {
          return this.clone({ param: t, value: e, op: "d" });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((t) => {
                const e = this.encoder.encodeKey(t);
                return this.map
                  .get(t)
                  .map((t) => e + "=" + this.encoder.encodeValue(t))
                  .join("&");
              })
              .filter((t) => "" !== t)
              .join("&")
          );
        }
        clone(t) {
          const e = new zp({ encoder: this.encoder });
          return (
            (e.cloneFrom = this.cloneFrom || this),
            (e.updates = (this.updates || []).concat([t])),
            e
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((t) => this.map.set(t, this.cloneFrom.map.get(t))),
              this.updates.forEach((t) => {
                switch (t.op) {
                  case "a":
                  case "s":
                    const e =
                      ("a" === t.op ? this.map.get(t.param) : void 0) || [];
                    e.push(t.value), this.map.set(t.param, e);
                    break;
                  case "d":
                    if (void 0 === t.value) {
                      this.map.delete(t.param);
                      break;
                    }
                    {
                      let e = this.map.get(t.param) || [];
                      const n = e.indexOf(t.value);
                      -1 !== n && e.splice(n, 1),
                        e.length > 0
                          ? this.map.set(t.param, e)
                          : this.map.delete(t.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      function qp(t) {
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer;
      }
      function Bp(t) {
        return "undefined" != typeof Blob && t instanceof Blob;
      }
      function Wp(t) {
        return "undefined" != typeof FormData && t instanceof FormData;
      }
      class Gp {
        constructor(t, e, n, r) {
          let s;
          if (
            ((this.url = e),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = "json"),
            (this.method = t.toUpperCase()),
            (function (t) {
              switch (t) {
                case "DELETE":
                case "GET":
                case "HEAD":
                case "OPTIONS":
                case "JSONP":
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || r
              ? ((this.body = void 0 !== n ? n : null), (s = r))
              : (s = n),
            s &&
              ((this.reportProgress = !!s.reportProgress),
              (this.withCredentials = !!s.withCredentials),
              s.responseType && (this.responseType = s.responseType),
              s.headers && (this.headers = s.headers),
              s.params && (this.params = s.params)),
            this.headers || (this.headers = new Hp()),
            this.params)
          ) {
            const t = this.params.toString();
            if (0 === t.length) this.urlWithParams = e;
            else {
              const n = e.indexOf("?");
              this.urlWithParams =
                e + (-1 === n ? "?" : n < e.length - 1 ? "&" : "") + t;
            }
          } else (this.params = new zp()), (this.urlWithParams = e);
        }
        serializeBody() {
          return null === this.body
            ? null
            : qp(this.body) ||
              Bp(this.body) ||
              Wp(this.body) ||
              "string" == typeof this.body
            ? this.body
            : this.body instanceof zp
            ? this.body.toString()
            : "object" == typeof this.body ||
              "boolean" == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || Wp(this.body)
            ? null
            : Bp(this.body)
            ? this.body.type || null
            : qp(this.body)
            ? null
            : "string" == typeof this.body
            ? "text/plain"
            : this.body instanceof zp
            ? "application/x-www-form-urlencoded;charset=UTF-8"
            : "object" == typeof this.body ||
              "number" == typeof this.body ||
              Array.isArray(this.body)
            ? "application/json"
            : null;
        }
        clone(t = {}) {
          const e = t.method || this.method,
            n = t.url || this.url,
            r = t.responseType || this.responseType,
            s = void 0 !== t.body ? t.body : this.body,
            i =
              void 0 !== t.withCredentials
                ? t.withCredentials
                : this.withCredentials,
            o =
              void 0 !== t.reportProgress
                ? t.reportProgress
                : this.reportProgress;
          let a = t.headers || this.headers,
            l = t.params || this.params;
          return (
            void 0 !== t.setHeaders &&
              (a = Object.keys(t.setHeaders).reduce(
                (e, n) => e.set(n, t.setHeaders[n]),
                a
              )),
            t.setParams &&
              (l = Object.keys(t.setParams).reduce(
                (e, n) => e.set(n, t.setParams[n]),
                l
              )),
            new Gp(e, n, s, {
              params: l,
              headers: a,
              reportProgress: o,
              responseType: r,
              withCredentials: i,
            })
          );
        }
      }
      const Zp = (function () {
        var t = {
          Sent: 0,
          UploadProgress: 1,
          ResponseHeader: 2,
          DownloadProgress: 3,
          Response: 4,
          User: 5,
        };
        return (
          (t[t.Sent] = "Sent"),
          (t[t.UploadProgress] = "UploadProgress"),
          (t[t.ResponseHeader] = "ResponseHeader"),
          (t[t.DownloadProgress] = "DownloadProgress"),
          (t[t.Response] = "Response"),
          (t[t.User] = "User"),
          t
        );
      })();
      class Qp {
        constructor(t, e = 200, n = "OK") {
          (this.headers = t.headers || new Hp()),
            (this.status = void 0 !== t.status ? t.status : e),
            (this.statusText = t.statusText || n),
            (this.url = t.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class Yp extends Qp {
        constructor(t = {}) {
          super(t), (this.type = Zp.ResponseHeader);
        }
        clone(t = {}) {
          return new Yp({
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class Kp extends Qp {
        constructor(t = {}) {
          super(t),
            (this.type = Zp.Response),
            (this.body = void 0 !== t.body ? t.body : null);
        }
        clone(t = {}) {
          return new Kp({
            body: void 0 !== t.body ? t.body : this.body,
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class Jp extends Qp {
        constructor(t) {
          super(t, 0, "Unknown Error"),
            (this.name = "HttpErrorResponse"),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? "Http failure during parsing for " +
                  (t.url || "(unknown url)")
                : `Http failure response for ${t.url || "(unknown url)"}: ${
                    t.status
                  } ${t.statusText}`),
            (this.error = t.error || null);
        }
      }
      function Xp(t, e) {
        return {
          body: e,
          headers: t.headers,
          observe: t.observe,
          params: t.params,
          reportProgress: t.reportProgress,
          responseType: t.responseType,
          withCredentials: t.withCredentials,
        };
      }
      let tf = (() => {
        class t {
          constructor(t) {
            this.handler = t;
          }
          request(t, e, n = {}) {
            let r;
            if (t instanceof Gp) r = t;
            else {
              let s = void 0;
              s = n.headers instanceof Hp ? n.headers : new Hp(n.headers);
              let i = void 0;
              n.params &&
                (i =
                  n.params instanceof zp
                    ? n.params
                    : new zp({ fromObject: n.params })),
                (r = new Gp(t, e, void 0 !== n.body ? n.body : null, {
                  headers: s,
                  params: i,
                  reportProgress: n.reportProgress,
                  responseType: n.responseType || "json",
                  withCredentials: n.withCredentials,
                }));
            }
            const s = Yc(r).pipe(Uu((t) => this.handler.handle(t)));
            if (t instanceof Gp || "events" === n.observe) return s;
            const i = s.pipe(ou((t) => t instanceof Kp));
            switch (n.observe || "body") {
              case "body":
                switch (r.responseType) {
                  case "arraybuffer":
                    return i.pipe(
                      U((t) => {
                        if (null !== t.body && !(t.body instanceof ArrayBuffer))
                          throw new Error("Response is not an ArrayBuffer.");
                        return t.body;
                      })
                    );
                  case "blob":
                    return i.pipe(
                      U((t) => {
                        if (null !== t.body && !(t.body instanceof Blob))
                          throw new Error("Response is not a Blob.");
                        return t.body;
                      })
                    );
                  case "text":
                    return i.pipe(
                      U((t) => {
                        if (null !== t.body && "string" != typeof t.body)
                          throw new Error("Response is not a string.");
                        return t.body;
                      })
                    );
                  case "json":
                  default:
                    return i.pipe(U((t) => t.body));
                }
              case "response":
                return i;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${n.observe}}`
                );
            }
          }
          delete(t, e = {}) {
            return this.request("DELETE", t, e);
          }
          get(t, e = {}) {
            return this.request("GET", t, e);
          }
          head(t, e = {}) {
            return this.request("HEAD", t, e);
          }
          jsonp(t, e) {
            return this.request("JSONP", t, {
              params: new zp().append(e, "JSONP_CALLBACK"),
              observe: "body",
              responseType: "json",
            });
          }
          options(t, e = {}) {
            return this.request("OPTIONS", t, e);
          }
          patch(t, e, n = {}) {
            return this.request("PATCH", t, Xp(n, e));
          }
          post(t, e, n = {}) {
            return this.request("POST", t, Xp(n, e));
          }
          put(t, e, n = {}) {
            return this.request("PUT", t, Xp(n, e));
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Bt(Lp));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class ef {
        constructor(t, e) {
          (this.next = t), (this.interceptor = e);
        }
        handle(t) {
          return this.interceptor.intercept(t, this.next);
        }
      }
      const nf = new jt("HTTP_INTERCEPTORS");
      let rf = (() => {
        class t {
          intercept(t, e) {
            return e.handle(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const sf = /^\)\]\}',?\n/;
      class of {}
      let af = (() => {
          class t {
            constructor() {}
            build() {
              return new XMLHttpRequest();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        lf = (() => {
          class t {
            constructor(t) {
              this.xhrFactory = t;
            }
            handle(t) {
              if ("JSONP" === t.method)
                throw new Error(
                  "Attempted to construct Jsonp request without JsonpClientModule installed."
                );
              return new w((e) => {
                const n = this.xhrFactory.build();
                if (
                  (n.open(t.method, t.urlWithParams),
                  t.withCredentials && (n.withCredentials = !0),
                  t.headers.forEach((t, e) =>
                    n.setRequestHeader(t, e.join(","))
                  ),
                  t.headers.has("Accept") ||
                    n.setRequestHeader(
                      "Accept",
                      "application/json, text/plain, */*"
                    ),
                  !t.headers.has("Content-Type"))
                ) {
                  const e = t.detectContentTypeHeader();
                  null !== e && n.setRequestHeader("Content-Type", e);
                }
                if (t.responseType) {
                  const e = t.responseType.toLowerCase();
                  n.responseType = "json" !== e ? e : "text";
                }
                const r = t.serializeBody();
                let s = null;
                const i = () => {
                    if (null !== s) return s;
                    const e = 1223 === n.status ? 204 : n.status,
                      r = n.statusText || "OK",
                      i = new Hp(n.getAllResponseHeaders()),
                      o =
                        (function (t) {
                          return "responseURL" in t && t.responseURL
                            ? t.responseURL
                            : /^X-Request-URL:/m.test(t.getAllResponseHeaders())
                            ? t.getResponseHeader("X-Request-URL")
                            : null;
                        })(n) || t.url;
                    return (
                      (s = new Yp({
                        headers: i,
                        status: e,
                        statusText: r,
                        url: o,
                      })),
                      s
                    );
                  },
                  o = () => {
                    let { headers: r, status: s, statusText: o, url: a } = i(),
                      l = null;
                    204 !== s &&
                      (l = void 0 === n.response ? n.responseText : n.response),
                      0 === s && (s = l ? 200 : 0);
                    let c = s >= 200 && s < 300;
                    if ("json" === t.responseType && "string" == typeof l) {
                      const t = l;
                      l = l.replace(sf, "");
                      try {
                        l = "" !== l ? JSON.parse(l) : null;
                      } catch (u) {
                        (l = t), c && ((c = !1), (l = { error: u, text: l }));
                      }
                    }
                    c
                      ? (e.next(
                          new Kp({
                            body: l,
                            headers: r,
                            status: s,
                            statusText: o,
                            url: a || void 0,
                          })
                        ),
                        e.complete())
                      : e.error(
                          new Jp({
                            error: l,
                            headers: r,
                            status: s,
                            statusText: o,
                            url: a || void 0,
                          })
                        );
                  },
                  a = (t) => {
                    const { url: r } = i(),
                      s = new Jp({
                        error: t,
                        status: n.status || 0,
                        statusText: n.statusText || "Unknown Error",
                        url: r || void 0,
                      });
                    e.error(s);
                  };
                let l = !1;
                const c = (r) => {
                    l || (e.next(i()), (l = !0));
                    let s = { type: Zp.DownloadProgress, loaded: r.loaded };
                    r.lengthComputable && (s.total = r.total),
                      "text" === t.responseType &&
                        n.responseText &&
                        (s.partialText = n.responseText),
                      e.next(s);
                  },
                  u = (t) => {
                    let n = { type: Zp.UploadProgress, loaded: t.loaded };
                    t.lengthComputable && (n.total = t.total), e.next(n);
                  };
                return (
                  n.addEventListener("load", o),
                  n.addEventListener("error", a),
                  t.reportProgress &&
                    (n.addEventListener("progress", c),
                    null !== r &&
                      n.upload &&
                      n.upload.addEventListener("progress", u)),
                  n.send(r),
                  e.next({ type: Zp.Sent }),
                  () => {
                    n.removeEventListener("error", a),
                      n.removeEventListener("load", o),
                      t.reportProgress &&
                        (n.removeEventListener("progress", c),
                        null !== r &&
                          n.upload &&
                          n.upload.removeEventListener("progress", u)),
                      n.abort();
                  }
                );
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Bt(of));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const cf = new jt("XSRF_COOKIE_NAME"),
        uf = new jt("XSRF_HEADER_NAME");
      class hf {}
      let df = (() => {
          class t {
            constructor(t, e, n) {
              (this.doc = t),
                (this.platform = e),
                (this.cookieName = n),
                (this.lastCookieString = ""),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ("server" === this.platform) return null;
              const t = this.doc.cookie || "";
              return (
                t !== this.lastCookieString &&
                  (this.parseCount++,
                  (this.lastToken = lc(t, this.cookieName)),
                  (this.lastCookieString = t)),
                this.lastToken
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Bt(gl), Bt(ba), Bt(cf));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        pf = (() => {
          class t {
            constructor(t, e) {
              (this.tokenService = t), (this.headerName = e);
            }
            intercept(t, e) {
              const n = t.url.toLowerCase();
              if (
                "GET" === t.method ||
                "HEAD" === t.method ||
                n.startsWith("http://") ||
                n.startsWith("https://")
              )
                return e.handle(t);
              const r = this.tokenService.getToken();
              return (
                null === r ||
                  t.headers.has(this.headerName) ||
                  (t = t.clone({ headers: t.headers.set(this.headerName, r) })),
                e.handle(t)
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Bt(hf), Bt(uf));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        ff = (() => {
          class t {
            constructor(t, e) {
              (this.backend = t), (this.injector = e), (this.chain = null);
            }
            handle(t) {
              if (null === this.chain) {
                const t = this.injector.get(nf, []);
                this.chain = t.reduceRight(
                  (t, e) => new ef(t, e),
                  this.backend
                );
              }
              return this.chain.handle(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Bt(Fp), Bt(ei));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        gf = (() => {
          class t {
            static disable() {
              return {
                ngModule: t,
                providers: [{ provide: pf, useClass: rf }],
              };
            }
            static withOptions(e = {}) {
              return {
                ngModule: t,
                providers: [
                  e.cookieName ? { provide: cf, useValue: e.cookieName } : [],
                  e.headerName ? { provide: uf, useValue: e.headerName } : [],
                ],
              };
            }
          }
          return (
            (t.ɵmod = ce({ type: t })),
            (t.ɵinj = ct({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [
                pf,
                { provide: nf, useExisting: pf, multi: !0 },
                { provide: hf, useClass: df },
                { provide: cf, useValue: "XSRF-TOKEN" },
                { provide: uf, useValue: "X-XSRF-TOKEN" },
              ],
            })),
            t
          );
        })(),
        mf = (() => {
          class t {}
          return (
            (t.ɵmod = ce({ type: t })),
            (t.ɵinj = ct({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [
                tf,
                { provide: Lp, useClass: ff },
                lf,
                { provide: Fp, useExisting: lf },
                af,
                { provide: of, useExisting: af },
              ],
              imports: [
                [
                  gf.withOptions({
                    cookieName: "XSRF-TOKEN",
                    headerName: "X-XSRF-TOKEN",
                  }),
                ],
              ],
            })),
            t
          );
        })(),
        yf = (() => {
          class t {
            constructor(t) {
              this.http = t;
            }
            retrieveToken(t, e) {
              let n = new zp()
                .append("grant_type", "password")
                .append("username", t)
                .append("password", e)
                .append("client_id", "client-id")
                .append("client_secret", "secret-id");
              return this.http.get("http://localhost:8080/oauth/token", {
                params: n,
              });
            }
            refreshAccessToken() {
              let t = new zp()
                .append("grant_type", "refresh_token")
                .append(
                  "refresh_token",
                  sessionStorage.getItem("refresh_token")
                )
                .append("client_id", "client-id")
                .append("client_secret", "secret-id");
              return this.http.get("http://localhost:8080/oauth/token", {
                params: t,
              });
            }
            saveToken(t) {
              var e = new Date().getTime() + 1e3 * t.expires_in;
              sessionStorage.setItem("access_token", t.access_token),
                sessionStorage.setItem("refresh_token", t.refresh_token),
                sessionStorage.setItem("expire_date", e.toString()),
                sessionStorage.setItem(
                  "expire_date_string",
                  new Date(e).toString()
                ),
                console.log("Obtained Access token ");
            }
            checkCredentials() {
              const t = sessionStorage.getItem("expire_date"),
                e = sessionStorage.getItem("access_token");
              return !!(e && Number(t) > new Date().getTime()) && !!e;
            }
            getAccessToken() {
              return sessionStorage.getItem("access_token");
            }
            logout() {
              sessionStorage.removeItem("access_token");
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Bt(tf));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac, providedIn: "root" })),
            t
          );
        })(),
        vf = (() => {
          class t {
            constructor(t, e) {
              (this.http = t),
                (this.authService = e),
                (this.player_change = new Qo()),
                (this.player = new Ip()),
                this.authService.checkCredentials(),
                this.listPlayer("001").subscribe((t) => {
                  t.forEach((t) => {
                    const e = new Ip({
                      health: t.health,
                      atribute: t.atribute,
                      experience: t.experience,
                      total_action_points: 50,
                      total_health_points: 150,
                    });
                    this.player = e;
                  }),
                    this.addInventoryPlayer(new Np()),
                    this.addInventoryPlayer(new Np({ accuracy: 10.93 })),
                    this.addInventoryPlayer(new Np({ accuracy: 10.93 })),
                    this.addInventoryPlayer(new Up()),
                    console.log(this.getPlayerWeight()),
                    this.player_change.emit(this.player);
                });
            }
            listPlayer(t) {
              return this.http.get(
                "http://localhost:8080/fallout/player?pessoa=" + t
              );
            }
            loseLife(t, e) {
              this.attack(),
                this.player.loseLife(t, e),
                this.player_change.emit(this.player);
            }
            getPlayerLocations() {
              return [
                new Ap("vault", 409, 138, { found: !1 }),
                new Ap("sanctuary", 476, 162, { found: !1 }),
              ];
            }
            getPlayerPosition() {
              return new Ap("player", 370.1, 121.5, {
                width: 15,
                height: 20,
                hud: !0,
              });
            }
            getPlayerDestiny() {
              return new Ap("destiny", 525, 152, {
                width: 12,
                height: 30,
                found: !0,
              });
            }
            addInventoryPlayer(t) {
              this.player.inventory[t.baseClass].push(t),
                console.log(this.player.inventory);
            }
            setWeapon(t) {
              (this.player.equiped.hand = t),
                this.player_change.emit(this.player);
            }
            attack() {
              const t = this.player.equiped.hand;
              t && this.loseAP(t.apCost) && t.fire();
            }
            loseAP(t) {
              const e = this.player.action_points;
              return (
                e > t &&
                (console.log(e - t > 0 ? e - t : 0),
                (this.player.action_points = e - t > 0 ? e - t : 0),
                !0)
              );
            }
            getPlayerWeight() {
              return Object.values(this.player.inventory).reduce(
                (t, e) => t + e.reduce((t, e) => t + e.weight, 0),
                0
              );
            }
            getPlayerInventory(t) {
              return this.player.inventory[t].reduce(
                (t, e) => (
                  (t[e.name + e.accuracy] = [
                    ...(t[e.name + e.accuracy] || []),
                    e,
                  ]),
                  t
                ),
                {}
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Bt(tf), Bt(yf));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac, providedIn: "root" })),
            t
          );
        })(),
        _f = (() => {
          class t {
            constructor() {
              (this.DATE = new Date()),
                this.DATE.setFullYear(this.DATE.getFullYear() + 267);
            }
            ngOnInit() {}
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = ie({
              type: t,
              selectors: [["app-footer-map"]],
              decls: 11,
              vars: 8,
              consts: [
                [2, "width", "20%"],
                [2, "width", "19%"],
                [2, "width", "60%"],
                [1, "ap-status"],
              ],
              template: function (t, e) {
                1 & t &&
                  (xi(0, "footer"),
                  xi(1, "section", 0),
                  ji(2),
                  Bo(3, "date"),
                  Ei(),
                  xi(4, "section", 1),
                  xi(5, "div"),
                  ji(6),
                  Bo(7, "date"),
                  Ei(),
                  Ei(),
                  xi(8, "section", 2),
                  xi(9, "div", 3),
                  ji(10, " Commonwealth "),
                  Ei(),
                  Ei(),
                  Ei()),
                  2 & t &&
                    (Sr(2),
                    Ui(" ", Wo(3, 2, e.DATE, "MM.dd.yyyy"), " "),
                    Sr(4),
                    Ui(" ", Wo(7, 5, e.DATE, "hh:mm aaa"), " "));
              },
              pipes: [mc],
              styles: [
                "[_nghost-%COMP%]{position:relative;width:100%;color:var(--text-color);font-family:Monofonto;bottom:-15px}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{height:20px;background-color:var(--section-color);padding:0 10px;box-sizing:border-box;display:flex;flex-direction:row;line-height:20px}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .ap-status[_ngcontent-%COMP%]{text-align:right;width:100%}",
              ],
            })),
            t
          );
        })();
      const wf = ["canvas"],
        bf = ["destino"];
      let Cf = (() => {
        class t {
          constructor(t) {
            (this.dataService = t), (this.ITEMS = {}), (this.isDown = !0);
          }
          onScroll(t) {
            this.clearCanvas(this.ctx_destino),
              this.calculeMidPoint(
                this.dataService.getPlayerPosition(),
                this.dataService.getPlayerDestiny()
              );
          }
          ngOnInit() {
            (this.canvas.nativeElement.style.background =
              'url("assets/images/map/background_green.png") no-repeat center'),
              (this.ctx = this.canvas.nativeElement.getContext("2d")),
              (this.ctx_destino = this.canvas_destino.nativeElement.getContext(
                "2d"
              )),
              this.clearCanvas(),
              this.drawPlayerLocations(),
              this.drawPlayerPosition(),
              this.drawPlayerDestiny(),
              this.calculeMidPoint(
                this.dataService.getPlayerPosition(),
                this.dataService.getPlayerDestiny()
              );
          }
          clearCanvas(t = this.ctx) {
            t.clearRect(0, 0, t.canvas.width, t.canvas.height);
          }
          drawPlayerLocations() {
            this.dataService.getPlayerLocations().forEach((t) => {
              this.drawElement(t);
            });
          }
          drawPlayerPosition() {
            this.drawElement(this.dataService.getPlayerPosition());
          }
          drawPlayerDestiny() {
            this.drawElement(this.dataService.getPlayerDestiny());
          }
          drawElement(t, e = this.ctx) {
            const n = new Image();
            (n.onload = () => this.drawImageActualSize(n, t, e)),
              (n.src = t.getSrc());
          }
          drawImageActualSize(t, e, n) {
            const r = e.width
              ? n.drawImage(
                  t,
                  e.x - e.width / 2,
                  e.y - e.height / 2,
                  e.width,
                  e.height
                )
              : n.drawImage(
                  t,
                  e.x - t.width / 6 / 2,
                  e.y - t.height / 6 / 2,
                  t.width / 6,
                  t.height / 6
                );
            this.ITEMS[e.name] = r;
          }
          calculeMidPoint(t, e) {
            const n = this.calculeFakeMarker(),
              r =
                (this.dataService.getPlayerDestiny(),
                new Ap("destiny", n.x, n.y, { width: 12, height: 30 }));
            this.drawElement(r, this.ctx_destino);
          }
          calculeFakeMarker() {
            const t = this.canvas_destino.nativeElement.parentElement,
              e = t.scrollLeft,
              n = t.scrollLeft + t.clientWidth,
              r = t.scrollTop,
              s = t.scrollTop + t.clientHeight,
              i =
                (this.dataService.getPlayerPosition(),
                this.dataService.getPlayerDestiny());
            return {
              x: n < i.x ? n - 20 : i.x < e ? e + 20 : i.x,
              y: i.y < r ? r + 20 : s < i.y ? s - 20 : i.y - 0.1,
            };
          }
          onMouseUp(t) {
            this.isDown = !1;
          }
          onMouseDown(t) {
            (this.isDown = !0),
              (this.offset = [
                this.canvas.nativeElement.offsetLeft - t.clientX,
                this.canvas.nativeElement.offsetTop - t.clientY,
              ]);
          }
          onMouseMove(t) {
            if (this.isDown && this.offset) {
              const e = this.canvas.nativeElement.parentElement,
                n = { x: t.clientX, y: t.clientY },
                r = { x: n.x + this.offset[0], y: n.y + this.offset[1] };
              (e.scrollLeft += r.x / 10), (e.scrollTop += r.y / 10);
            }
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(_i(vf));
          }),
          (t.ɵcmp = ie({
            type: t,
            selectors: [["app-map"]],
            viewQuery: function (t, e) {
              var n;
              1 & t && (aa(wf, !0), aa(bf, !0)),
                2 & t &&
                  (oa((n = ha())) && (e.canvas = n.first),
                  oa((n = ha())) && (e.canvas_destino = n.first));
            },
            decls: 6,
            vars: 0,
            consts: [
              [
                "id",
                "scrollbar-custom",
                1,
                "map-wrapper",
                "scrollbar",
                3,
                "scroll",
              ],
              [
                "id",
                "destino",
                "width",
                "2048",
                "height",
                "2048",
                2,
                "position",
                "absolute",
              ],
              ["destino", ""],
              [
                "width",
                "2048",
                "height",
                "2048",
                3,
                "mouseup",
                "mousedown",
                "mousemove",
              ],
              ["canvas", ""],
            ],
            template: function (t, e) {
              1 & t &&
                (xi(0, "div", 0),
                Ti("scroll", function (t) {
                  return e.onScroll(t);
                }),
                ki(1, "canvas", 1, 2),
                xi(3, "canvas", 3, 4),
                Ti("mouseup", function (t) {
                  return e.onMouseUp(t);
                })("mousedown", function (t) {
                  return e.onMouseDown(t);
                })("mousemove", function (t) {
                  return e.onMouseMove(t);
                }),
                Ei(),
                Ei(),
                ki(5, "app-footer-map"));
            },
            directives: [_f],
            styles: [
              "[_nghost-%COMP%]{height:100%}[_nghost-%COMP%]   .map-wrapper[_ngcontent-%COMP%]{width:100%;height:85%;overflow:scroll;position:relative}[_nghost-%COMP%]   .map-wrapper[_ngcontent-%COMP%]   #destino[_ngcontent-%COMP%]{position:absolute;pointer-events:none}",
            ],
          })),
          t
        );
      })();
      const Sf = function () {
          return ["status"];
        },
        xf = function (t) {
          return { stat: t };
        },
        Ef = function (t) {
          return { outlets: t };
        },
        kf = function (t) {
          return [t];
        },
        Of = function () {
          return ["special"];
        },
        Pf = function () {
          return ["perks"];
        };
      let Tf = (() => {
        class t {
          constructor(t, e, n) {
            (this.route = t), (this.router = e), (this.dataService = n);
          }
          ngOnInit() {
            this.router.navigateByUrl("/stat/(stat:status)");
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(_i(Kh), _i(ip), _i(vf));
          }),
          (t.ɵcmp = ie({
            type: t,
            selectors: [["app-stat"]],
            decls: 9,
            vars: 24,
            consts: [
              [1, "breadcrumbs"],
              ["routerLinkActive", "active", 3, "routerLink"],
              ["name", "stat"],
            ],
            template: function (t, e) {
              1 & t &&
                (xi(0, "div", 0),
                xi(1, "ul"),
                xi(2, "li", 1),
                ji(3, " STATUS "),
                Ei(),
                xi(4, "li", 1),
                ji(5, " SPECIAL "),
                Ei(),
                xi(6, "li", 1),
                ji(7, " PERKS "),
                Ei(),
                Ei(),
                Ei(),
                ki(8, "router-outlet", 2)),
                2 & t &&
                  (Sr(2),
                  Ci("routerLink", Vo(8, kf, Vo(6, Ef, Vo(4, xf, Ho(3, Sf))))),
                  Sr(2),
                  Ci(
                    "routerLink",
                    Vo(15, kf, Vo(13, Ef, Vo(11, xf, Ho(10, Of))))
                  ),
                  Sr(2),
                  Ci(
                    "routerLink",
                    Vo(22, kf, Vo(20, Ef, Vo(18, xf, Ho(17, Pf))))
                  ));
            },
            directives: [cp, op, dp],
            styles: [
              "[_nghost-%COMP%]{height:100%}[_nghost-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]{width:30%}[_nghost-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;list-style:none;margin:0;padding:0 5px;font-family:Monofonto;color:var(--section-color)}[_nghost-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 5px}[_nghost-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{color:var(--text-color)}",
            ],
          })),
          t
        );
      })();
      const Mf = function () {
          return ["weapons"];
        },
        Af = function (t) {
          return { inv: t };
        },
        If = function (t) {
          return { outlets: t };
        },
        Rf = function (t) {
          return [t];
        },
        Df = function () {
          return ["apparel"];
        },
        jf = function () {
          return ["aid"];
        },
        Nf = function () {
          return ["misc"];
        },
        Uf = function () {
          return ["junk"];
        };
      let Lf = (() => {
          class t {
            constructor(t) {
              this.router = t;
            }
            ngOnInit() {
              this.router.navigateByUrl("/inv/(inv:weapons)");
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(_i(ip));
            }),
            (t.ɵcmp = ie({
              type: t,
              selectors: [["app-inv"]],
              decls: 13,
              vars: 40,
              consts: [
                [1, "breadcrumbs"],
                ["routerLinkActive", "active", 3, "routerLink"],
                ["name", "inv"],
              ],
              template: function (t, e) {
                1 & t &&
                  (xi(0, "div", 0),
                  xi(1, "ul"),
                  xi(2, "li", 1),
                  ji(3, " WEAPONS "),
                  Ei(),
                  xi(4, "li", 1),
                  ji(5, " APPAREL "),
                  Ei(),
                  xi(6, "li", 1),
                  ji(7, " AID "),
                  Ei(),
                  xi(8, "li", 1),
                  ji(9, " MISC "),
                  Ei(),
                  xi(10, "li", 1),
                  ji(11, " JUNK "),
                  Ei(),
                  Ei(),
                  Ei(),
                  ki(12, "router-outlet", 2)),
                  2 & t &&
                    (Sr(2),
                    Ci(
                      "routerLink",
                      Vo(10, Rf, Vo(8, If, Vo(6, Af, Ho(5, Mf))))
                    ),
                    Sr(2),
                    Ci(
                      "routerLink",
                      Vo(17, Rf, Vo(15, If, Vo(13, Af, Ho(12, Df))))
                    ),
                    Sr(2),
                    Ci(
                      "routerLink",
                      Vo(24, Rf, Vo(22, If, Vo(20, Af, Ho(19, jf))))
                    ),
                    Sr(2),
                    Ci(
                      "routerLink",
                      Vo(31, Rf, Vo(29, If, Vo(27, Af, Ho(26, Nf))))
                    ),
                    Sr(2),
                    Ci(
                      "routerLink",
                      Vo(38, Rf, Vo(36, If, Vo(34, Af, Ho(33, Uf))))
                    ));
              },
              directives: [cp, op, dp],
              styles: [
                "[_nghost-%COMP%]{height:100%}[_nghost-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]{width:30%}[_nghost-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;list-style:none;margin:0;padding:0 5px;font-family:Monofonto;color:var(--section-color)}[_nghost-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 5px}[_nghost-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{color:var(--text-color)}",
              ],
            })),
            t
          );
        })(),
        Ff = (() => {
          class t {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = ie({
              type: t,
              selectors: [["app-data"]],
              decls: 2,
              vars: 0,
              template: function (t, e) {
                1 & t && (xi(0, "p"), ji(1, "data works!"), Ei());
              },
              styles: ["[_nghost-%COMP%]{height:100%}"],
            })),
            t
          );
        })();
      class Hf {
        constructor(t, e) {
          (this.name = t), (this.url = e);
        }
      }
      let Vf = (() => {
          class t {
            constructor() {
              (this.RADIOS = [
                new Hf("Desligado", null),
                new Hf("Main Station", "http://fallout.fm:8000/falloutfm1.ogg"),
                new Hf(
                  "Diamond City Radio",
                  "http://fallout.fm:8000/falloutfm6.ogg?auth=0738886807-4069-0rj025o0-f0d12905c09026ce8f0285931e6d5504?retry=0"
                ),
                new Hf(
                  "South Virginia Radio",
                  "http://fallout.fm:8000/falloutfm10.ogg?_=1458026635?retry=0"
                ),
                new Hf(
                  "MWTCF",
                  "http://fallout.fm:8000/falloutfm8.ogg?token=a43aafe3f3856e610476328188c88087%2F5c7a8f7a?retry=0"
                ),
                new Hf(
                  "Megaton Radio",
                  "https://us2.internet-radio.com/proxy/megatoncafe?mp=/stream;"
                ),
                new Hf(
                  "Rockamolly",
                  "https://uk6.internet-radio.com/proxy/rockaroundtheblock?mp=/stream;"
                ),
                new Hf(
                  "Majestic Radio",
                  "https://uk3.internet-radio.com/proxy/majesticjukebox?mp=/live"
                ),
              ]),
                (this.radio_change = new Qo());
              const t = localStorage.getItem("radio") || "Desligado";
              console.log(this.RADIOS.filter((e) => e.name == t)[0]),
                this.setRadio(this.RADIOS.filter((e) => e.name == t)[0]);
            }
            getRadioList() {
              return this.RADIOS;
            }
            setRadio(t) {
              (this.radio = t),
                localStorage.setItem("radio", t.name),
                this.radio_change.emit(this.radio);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac, providedIn: "root" })),
            t
          );
        })(),
        $f = (() => {
          class t {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = ie({
              type: t,
              selectors: [["app-footer-radio"]],
              decls: 2,
              vars: 0,
              template: function (t, e) {
                1 & t && (xi(0, "footer"), ki(1, "section"), Ei());
              },
              styles: [
                "[_nghost-%COMP%]{position:absolute;width:88.7%;color:var(--text-color);font-family:Monofonto;bottom:35px}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:100%;height:20px;background-color:var(--section-color);padding:0 10px;box-sizing:border-box;display:flex;flex-direction:row;line-height:20px}",
              ],
            })),
            t
          );
        })();
      const zf = function (t) {
        return { selected: t };
      };
      function qf(t, e) {
        if (1 & t) {
          const t = Oi();
          xi(0, "li", 3),
            Ti("click", function () {
              Ve(t);
              const n = e.$implicit;
              return Ii().setRadio(n);
            }),
            ji(1),
            Ei();
        }
        if (2 & t) {
          const t = e.$implicit,
            n = Ii();
          Ci("ngClass", Vo(2, zf, n.isRadioSelected(t.value))),
            Sr(1),
            Ui(" ", t.value.name, " ");
        }
      }
      const Bf = [
        { path: "", pathMatch: "full", redirectTo: "stat" },
        { path: "stat", component: Tf },
        { path: "inv", component: Lf },
        { path: "data", component: Ff },
        { path: "map", component: Cf },
        {
          path: "radio",
          component: (() => {
            class t {
              constructor(t) {
                this.radioService = t;
              }
              ngOnInit() {
                (this.radios = this.radioService.getRadioList()),
                  (this.radio = this.radioService.radio),
                  this.radioService.radio_change.subscribe((t) => {
                    this.radio = t;
                  });
              }
              setRadio(t) {
                this.radioService.setRadio(t.value);
              }
              isRadioSelected(t) {
                return this.radio.name == t.name;
              }
            }
            return (
              (t.ɵfac = function (e) {
                return new (e || t)(_i(Vf));
              }),
              (t.ɵcmp = ie({
                type: t,
                selectors: [["app-radio"]],
                decls: 6,
                vars: 3,
                consts: [
                  [1, "wrapper"],
                  [1, "list"],
                  [3, "ngClass", "click", 4, "ngFor", "ngForOf"],
                  [3, "ngClass", "click"],
                ],
                template: function (t, e) {
                  1 & t &&
                    (xi(0, "div", 0),
                    xi(1, "div", 1),
                    xi(2, "ul"),
                    vi(3, qf, 2, 4, "li", 2),
                    Bo(4, "keyvalue"),
                    Ei(),
                    Ei(),
                    Ei(),
                    ki(5, "app-footer-radio")),
                    2 & t &&
                      (Sr(3),
                      Ci(
                        "ngForOf",
                        (function (t, e, n) {
                          const r = Fe(),
                            s = Te(r, 4);
                          return Zo(
                            r,
                            Go(r, 4)
                              ? zo(r, Ge(), 1, s.transform, n, s)
                              : s.transform(n)
                          );
                        })(0, 0, e.radios)
                      ));
                },
                directives: [hc, $f, cc],
                pipes: [yc],
                styles: [
                  '@charset "UTF-8";[_nghost-%COMP%]{height:100%}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\u25a0";font-weight:700;display:inline-block;margin-left:2px;color:var(--background-color)}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{background-color:var(--text-color);color:var(--background-color)}',
                ],
              })),
              t
            );
          })(),
        },
      ];
      let Wf = (() => {
          class t {}
          return (
            (t.ɵmod = ce({ type: t })),
            (t.ɵinj = ct({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[Cp.forRoot(Bf)], Cp],
            })),
            t
          );
        })(),
        Gf = (() => {
          class t {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = ie({
              type: t,
              selectors: [["app-header-menu"]],
              decls: 22,
              vars: 0,
              consts: [
                [1, "header-menu"],
                ["routerLink", "/stat", "routerLinkActive", "active"],
                [1, "bottom"],
                ["routerLink", "/inv", "routerLinkActive", "active"],
                ["routerLink", "/data", "routerLinkActive", "active"],
                ["routerLink", "/map", "routerLinkActive", "active"],
                ["routerLink", "/radio", "routerLinkActive", "active"],
              ],
              template: function (t, e) {
                1 & t &&
                  (xi(0, "nav"),
                  xi(1, "ul", 0),
                  xi(2, "li", 1),
                  xi(3, "p"),
                  ji(4, "stat"),
                  Ei(),
                  ki(5, "div", 2),
                  Ei(),
                  xi(6, "li", 3),
                  xi(7, "p"),
                  ji(8, "inv"),
                  Ei(),
                  ki(9, "div", 2),
                  Ei(),
                  xi(10, "li", 4),
                  xi(11, "p"),
                  ji(12, "data"),
                  Ei(),
                  ki(13, "div", 2),
                  Ei(),
                  xi(14, "li", 5),
                  xi(15, "p"),
                  ji(16, "map"),
                  Ei(),
                  ki(17, "div", 2),
                  Ei(),
                  xi(18, "li", 6),
                  xi(19, "p"),
                  ji(20, "radio"),
                  Ei(),
                  ki(21, "div", 2),
                  Ei(),
                  Ei(),
                  Ei());
              },
              directives: [op, cp],
              styles: [
                "[_nghost-%COMP%]   p[_ngcontent-%COMP%]{background-color:var(--background-color);width:80%;margin:-12px 0 0 10%}[_nghost-%COMP%]   ul.header-menu[_ngcontent-%COMP%]{list-style-type:none;display:flex;flex-direction:row;justify-content:space-around;text-transform:uppercase;border-bottom:3px solid var(--text-color);font-family:Monofonto;color:var(--text-color);margin:0 0 6px;font-size:25px;padding:0 10px 0 0}[_nghost-%COMP%]   ul.header-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{position:relative;width:100px;text-align:center;border-top:3px solid var(--text-color);border-left:3px solid var(--text-color);border-right:3px solid var(--text-color);margin-left:10px;margin-right:-5px}[_nghost-%COMP%]   ul.header-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:-15px}[_nghost-%COMP%]   ul.header-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{height:3px;overflow-x:visible;position:absolute;background-color:var(--background-color);width:100%}",
              ],
            })),
            t
          );
        })();
      const Zf = ["frame"];
      let Qf = (() => {
          class t {
            constructor(t) {
              (this.radioService = t),
                (this.title = "pipboy"),
                (this.radio = new Audio()),
                (this.src = "");
            }
            ngAfterViewInit() {
              this.playAudio(this.radioService.radio.url),
                this.radioService.radio_change.subscribe((t) => {
                  this.playAudio(t.url);
                });
            }
            playAudio(t) {
              null != t
                ? ((this.radio.src = t), this.radio.load(), this.radio.play())
                : this.radio.pause();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(_i(Vf));
            }),
            (t.ɵcmp = ie({
              type: t,
              selectors: [["app-root"]],
              viewQuery: function (t, e) {
                var n;
                1 & t && aa(Zf, !0),
                  2 & t && oa((n = ha())) && (e.video = n.first);
              },
              decls: 3,
              vars: 0,
              consts: [[1, "screen", "main-screen"]],
              template: function (t, e) {
                1 & t &&
                  (xi(0, "section", 0),
                  ki(1, "app-header-menu"),
                  ki(2, "router-outlet"),
                  Ei());
              },
              directives: [Gf, dp],
              styles: [
                "[_nghost-%COMP%]   .main-screen[_ngcontent-%COMP%]{max-width:950px;display:block;margin:auto;position:relative}",
              ],
            })),
            t
          );
        })(),
        Yf = (() => {
          class t {
            constructor() {
              (this.status = "normal"),
                (this.state = "normal"),
                (this.statusImage = `assets/images/vault-boy/head/${this.state}/${this.status[0]}.png`);
            }
            ngOnChanges() {
              this.statusImage = `assets/images/vault-boy/head/${this.state}/${this.status[0]}.png`;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = ie({
              type: t,
              selectors: [["vault-boy-head"]],
              inputs: { status: "status", state: "state" },
              features: [$i],
              decls: 1,
              vars: 1,
              consts: [["alt", "vault boy head", 3, "src"]],
              template: function (t, e) {
                1 & t && ki(0, "img", 0), 2 & t && Ri("src", e.statusImage, sr);
              },
              styles: [
                "[_nghost-%COMP%]{position:absolute;top:57px;left:169px}",
              ],
            })),
            t
          );
        })(),
        Kf = (() => {
          class t {
            constructor() {
              (this.left_arm = "normal"),
                (this.right_arm = "normal"),
                (this.left_leg = "normal"),
                (this.right_leg = "normal"),
                (this.image = "n_n_n_n"),
                (this.statusImage = `assets/images/vault-boy/body/${this.image}.gif`);
            }
            ngOnChanges() {
              (this.image = [
                this.right_arm[0],
                this.left_arm[0],
                this.right_leg[0],
                this.left_leg[0],
              ].join("_")),
                (this.statusImage = `assets/images/vault-boy/body/${this.image}.gif`);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = ie({
              type: t,
              selectors: [["vault-boy-body"]],
              inputs: {
                left_arm: "left_arm",
                right_arm: "right_arm",
                left_leg: "left_leg",
                right_leg: "right_leg",
              },
              features: [$i],
              decls: 1,
              vars: 1,
              consts: [["alt", "valt boy body", 3, "src"]],
              template: function (t, e) {
                1 & t && ki(0, "img", 0), 2 & t && Ri("src", e.statusImage, sr);
              },
              styles: [""],
            })),
            t
          );
        })();
      const Jf = ["head_status"],
        Xf = ["left_arm_status"],
        tg = ["left_leg_status"],
        eg = ["right_arm_status"],
        ng = ["right_leg_status"];
      let rg = (() => {
        class t {
          constructor(t) {
            (this.dataService = t),
              (this.status = this.dataService.player),
              (this.state = this.status.getStatus()),
              this.updateStatus();
          }
          ngOnChanges() {
            this.updateStatus(), this.updatePercentage();
          }
          ngAfterViewInit() {
            this.updateStatus(), this.updatePercentage();
          }
          updateStatus() {
            this.status = this.dataService.player;
            const t = this.status.health.members;
            (this.head = t.head < 10 ? "crippled" : "normal"),
              (this.left_arm = t.left_arm < 10 ? "crippled" : "normal"),
              (this.right_arm = t.right_arm < 10 ? "crippled" : "normal"),
              (this.left_leg = t.left_leg < 10 ? "crippled" : "normal"),
              (this.right_leg = t.right_leg < 10 ? "crippled" : "normal"),
              (this.state = this.status.getStatus());
          }
          updatePercentage() {
            const t = this.status.health.members;
            (this.head_status.nativeElement.style.width = t.head + "%"),
              (this.left_arm_status.nativeElement.style.width =
                t.left_arm + "%"),
              (this.right_arm_status.nativeElement.style.width =
                t.right_arm + "%"),
              (this.left_leg_status.nativeElement.style.width =
                t.left_leg + "%"),
              (this.right_leg_status.nativeElement.style.width =
                t.right_leg + "%");
          }
          loseLife(t) {
            this.dataService.loseLife(t, 10),
              this.updateStatus(),
              this.updatePercentage();
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(_i(vf));
          }),
          (t.ɵcmp = ie({
            type: t,
            selectors: [["app-vaultboy"]],
            viewQuery: function (t, e) {
              var n;
              1 & t &&
                (la(Jf, !0), la(Xf, !0), la(tg, !0), la(eg, !0), la(ng, !0)),
                2 & t &&
                  (oa((n = ha())) && (e.head_status = n.first),
                  oa((n = ha())) && (e.left_arm_status = n.first),
                  oa((n = ha())) && (e.left_leg_status = n.first),
                  oa((n = ha())) && (e.right_arm_status = n.first),
                  oa((n = ha())) && (e.right_leg_status = n.first));
            },
            features: [$i],
            decls: 18,
            vars: 6,
            consts: [
              [1, "status"],
              [1, "left_arm", "level", 3, "click"],
              [1, "complete"],
              ["left_arm_status", ""],
              [1, "head", "level", 3, "click"],
              ["head_status", ""],
              [1, "right_arm", "level", 3, "click"],
              ["right_arm_status", ""],
              [1, "left_leg", "level", 3, "click"],
              ["left_leg_status", ""],
              [1, "right_leg", "level", 3, "click"],
              ["right_leg_status", ""],
              [3, "state", "status"],
              [3, "left_arm", "right_arm", "left_leg", "right_leg"],
            ],
            template: function (t, e) {
              1 & t &&
                (xi(0, "div", 0),
                xi(1, "div", 1),
                Ti("click", function () {
                  return e.loseLife("left_arm");
                }),
                ki(2, "div", 2, 3),
                Ei(),
                xi(4, "div", 4),
                Ti("click", function () {
                  return e.loseLife("head");
                }),
                ki(5, "div", 2, 5),
                Ei(),
                xi(7, "div", 6),
                Ti("click", function () {
                  return e.loseLife("right_arm");
                }),
                ki(8, "div", 2, 7),
                Ei(),
                xi(10, "div", 8),
                Ti("click", function () {
                  return e.loseLife("left_leg");
                }),
                ki(11, "div", 2, 9),
                Ei(),
                xi(13, "div", 10),
                Ti("click", function () {
                  return e.loseLife("right_leg");
                }),
                ki(14, "div", 2, 11),
                Ei(),
                Ei(),
                ki(16, "vault-boy-head", 12),
                ki(17, "vault-boy-body", 13)),
                2 & t &&
                  (Sr(16),
                  Ci("state", e.state)("status", e.head),
                  Sr(1),
                  Ci("left_arm", e.left_arm)("right_arm", e.right_arm)(
                    "left_leg",
                    e.left_leg
                  )("right_leg", e.right_leg));
            },
            directives: [Yf, Kf],
            styles: [
              "[_nghost-%COMP%]{display:flex;position:relative}[_nghost-%COMP%]   .status[_ngcontent-%COMP%]{position:absolute}[_nghost-%COMP%]   .status[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{border:2px solid var(--text-color);width:50px;height:10px;margin:3px;position:relative;left:10%}[_nghost-%COMP%]   .status[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]   .complete[_ngcontent-%COMP%]{width:20px;background-color:var(--text-color);position:absolute;height:100%;z-index:1}[_nghost-%COMP%]   .status[_ngcontent-%COMP%]   .level.head[_ngcontent-%COMP%]{left:285%}[_nghost-%COMP%]   .status[_ngcontent-%COMP%]   .level.left_arm[_ngcontent-%COMP%]{left:500%;bottom:-175px}[_nghost-%COMP%]   .status[_ngcontent-%COMP%]   .level.right_arm[_ngcontent-%COMP%]{left:85%;bottom:-135px}[_nghost-%COMP%]   .status[_ngcontent-%COMP%]   .level.left_leg[_ngcontent-%COMP%]{left:380%;bottom:-275px}[_nghost-%COMP%]   .status[_ngcontent-%COMP%]   .level.right_leg[_ngcontent-%COMP%]{left:145%;bottom:-258px}",
            ],
          })),
          t
        );
      })();
      const sg = ["complete"];
      let ig = (() => {
        class t {
          constructor(t) {
            (this.dataService = t),
              (this.life = this.dataService.player.getLife()),
              (this.action_points = this.dataService.player.action_points),
              (this.total_action_points = this.dataService.player.total_action_points),
              (this.total_health_points = this.dataService.player.total_health_points);
          }
          ngAfterViewInit() {
            this.setStatus(this.dataService.player),
              this.dataService.player_change.subscribe((t) => {
                this.setStatus(t);
              });
          }
          setStatus(t) {
            (this.life = t.getLife()),
              (this.action_points = t.action_points),
              (this.complete.nativeElement.style.width = t.experience + "%");
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(_i(vf));
          }),
          (t.ɵcmp = ie({
            type: t,
            selectors: [["app-footer-status"]],
            viewQuery: function (t, e) {
              var n;
              1 & t && la(sg, !0),
                2 & t && oa((n = ha())) && (e.complete = n.first);
            },
            decls: 11,
            vars: 4,
            consts: [
              [2, "width", "20%"],
              [2, "width", "58%"],
              [1, "level"],
              [1, "complete"],
              ["complete", ""],
              [1, "ap-status"],
            ],
            template: function (t, e) {
              1 & t &&
                (xi(0, "footer"),
                xi(1, "section", 0),
                ji(2),
                Ei(),
                xi(3, "section", 1),
                ji(4, " LEVEL 1 "),
                xi(5, "div", 2),
                ki(6, "div", 3, 4),
                Ei(),
                Ei(),
                xi(8, "section", 0),
                xi(9, "div", 5),
                ji(10),
                Ei(),
                Ei(),
                Ei()),
                2 & t &&
                  (Sr(2),
                  Li("HP ", e.life, "/", e.total_health_points, ""),
                  Sr(8),
                  Li(" AP ", e.action_points, "/", e.total_action_points, " "));
            },
            styles: [
              "[_nghost-%COMP%]{position:absolute;width:88.7%;color:var(--text-color);font-family:Monofonto;bottom:35px}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{height:20px;background-color:var(--section-color);padding:0 10px;box-sizing:border-box;display:flex;flex-direction:row;line-height:20px}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{border:2px solid var(--text-color);width:70%;margin:3px;position:relative;left:10%}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]   .complete[_ngcontent-%COMP%]{width:0;background-color:var(--text-color);position:absolute;height:100%;z-index:1}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .ap-status[_ngcontent-%COMP%]{text-align:right;width:100%}",
            ],
          })),
          t
        );
      })();
      const og = ["vaultboy"];
      function ag(t, e) {
        1 & t && ki(0, "img", 12);
      }
      function lg(t, e) {
        1 & t && ki(0, "div", 13);
      }
      function cg(t, e) {
        1 & t && ki(0, "img", 14);
      }
      function ug(t, e) {
        1 & t && ki(0, "div", 13);
      }
      const hg = function (t) {
        return { selected: t };
      };
      function dg(t, e) {
        if (1 & t) {
          const t = Oi();
          xi(0, "li", 7),
            Ti("click", function () {
              Ve(t);
              const n = e.$implicit;
              return Ii().setSpecial(n);
            }),
            xi(1, "span"),
            ji(2),
            Ei(),
            xi(3, "div", 8),
            vi(4, ag, 1, 0, "img", 9),
            vi(5, lg, 1, 0, "div", 10),
            xi(6, "span"),
            ji(7),
            Ei(),
            vi(8, cg, 1, 0, "img", 11),
            vi(9, ug, 1, 0, "div", 10),
            Ei(),
            Ei();
        }
        if (2 & t) {
          const t = e.$implicit,
            n = Ii();
          Ci("ngClass", Vo(7, hg, t == n.selected)),
            Sr(2),
            Ni(t),
            Sr(2),
            Ci("ngIf", t == n.selected),
            Sr(1),
            Ci("ngIf", t != n.selected),
            Sr(2),
            Ni(n.getValue(t)),
            Sr(1),
            Ci("ngIf", t == n.selected),
            Sr(1),
            Ci("ngIf", t != n.selected);
        }
      }
      const pg = function (t) {
        return { selected: t };
      };
      function fg(t, e) {
        if (1 & t) {
          const t = Oi();
          xi(0, "li", 6),
            Ti("click", function () {
              Ve(t);
              const n = e.$implicit;
              return Ii().setPerk(n);
            }),
            xi(1, "span"),
            ji(2),
            Ei(),
            xi(3, "div", 7),
            ki(4, "img", 8),
            xi(5, "span"),
            ji(6),
            Ei(),
            ki(7, "img", 9),
            Ei(),
            Ei();
        }
        if (2 & t) {
          const t = e.$implicit,
            n = Ii();
          Ci("ngClass", Vo(3, pg, t == n.selected)),
            Sr(2),
            Ni(t),
            Sr(4),
            Ni(n.getValue(t));
        }
      }
      const gg = [
        {
          path: "stat",
          component: Tf,
          children: [
            { path: "", pathMatch: "full", redirectTo: "status" },
            {
              path: "status",
              component: (() => {
                class t {
                  constructor(t) {
                    (this.dataService = t), (this.subscriptions = new h());
                  }
                  ngOnInit() {
                    (this.player_status = this.dataService.player),
                      this.subscriptions.add(
                        this.dataService.player_change.subscribe((t) => {
                          (this.player_status = t),
                            this.vaultboy.updateStatus();
                        })
                      );
                  }
                  ngOnChanges() {
                    this.player_status = this.dataService.player;
                  }
                  ngOnDestroy() {
                    this.subscriptions.unsubscribe();
                  }
                }
                return (
                  (t.ɵfac = function (e) {
                    return new (e || t)(_i(vf));
                  }),
                  (t.ɵcmp = ie({
                    type: t,
                    selectors: [["app-status"]],
                    viewQuery: function (t, e) {
                      var n;
                      1 & t && la(og, !0),
                        2 & t && oa((n = ha())) && (e.vaultboy = n.first);
                    },
                    features: [$i],
                    decls: 19,
                    vars: 4,
                    consts: [
                      [1, "vault-boy-wrapper"],
                      ["vaultboy", ""],
                      [1, "info-bar"],
                      [1, "weapon"],
                      [1, "aim"],
                      [1, "helmet"],
                      [1, "shield"],
                      [1, "voltage"],
                      [1, "nuclear"],
                    ],
                    template: function (t, e) {
                      1 & t &&
                        (xi(0, "div", 0),
                        ki(1, "app-vaultboy", null, 1),
                        Ei(),
                        xi(3, "div", 2),
                        ki(4, "div", 3),
                        xi(5, "div", 4),
                        xi(6, "p"),
                        ji(7),
                        Ei(),
                        Ei(),
                        ki(8, "div", 5),
                        xi(9, "div", 6),
                        xi(10, "p"),
                        ji(11),
                        Ei(),
                        Ei(),
                        xi(12, "div", 7),
                        xi(13, "p"),
                        ji(14),
                        Ei(),
                        Ei(),
                        xi(15, "div", 8),
                        xi(16, "p"),
                        ji(17),
                        Ei(),
                        Ei(),
                        Ei(),
                        ki(18, "app-footer-status")),
                        2 & t &&
                          (Sr(7),
                          Ni(
                            (null == e.player_status ||
                            null == e.player_status.equiped ||
                            null == e.player_status.equiped.hand
                              ? null
                              : e.player_status.equiped.hand.damage) || 0
                          ),
                          Sr(4),
                          Ni(
                            (null == e.player_status
                              ? null
                              : e.player_status.shield) || 0
                          ),
                          Sr(3),
                          Ni(
                            (null == e.player_status
                              ? null
                              : e.player_status.voltage) || 0
                          ),
                          Sr(3),
                          Ni(
                            (null == e.player_status
                              ? null
                              : e.player_status.nuclear) || 0
                          ));
                    },
                    directives: [rg, ig],
                    styles: [
                      "[_nghost-%COMP%]   .vault-boy-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center}[_nghost-%COMP%]   .status-img[_ngcontent-%COMP%]{filter:brightness(2) blur(.9px);height:340px;display:block;margin:auto}",
                    ],
                  })),
                  t
                );
              })(),
              outlet: "stat",
            },
            {
              path: "special",
              component: (() => {
                class t {
                  constructor(t) {
                    (this.dataService = t),
                      (this.SPECIAL = {
                        strength: {
                          image: "assets/images/HUD/Special/strength.gif",
                          text:
                            "For\xe7a \xe9 uma medida de sua for\xe7a f\xedsica bruta. Isso afeta o quanto voc\xea pode carregar e determina a efic\xe1cia de todos os ataques corpo a corpo.",
                        },
                        perception: {
                          image: "assets/images/HUD/Special/perception2.gif",
                          text:
                            'A percep\xe7\xe3o \xe9 a sua consci\xeancia ambiental e "sexto sentido", e afeta a precis\xe3o da arma em VATS',
                        },
                        endurance: {
                          image: "assets/images/HUD/Special/endurance.gif",
                          text:
                            "A resist\xeancia \xe9 a medida da aptid\xe3o f\xedsica geral. Afeta sua sa\xfade total e o dreno de pontos de a\xe7\xe3o da corrida",
                        },
                        charisma: {
                          image: "assets/images/HUD/Special/charisma2.gif",
                          text:
                            "Carisma \xe9 sua habilidade de encantar e convencer os outros. Isso afeta seu sucesso em persuadir outras pessoas a dialogar e a estabelecer pre\xe7os quando voc\xea faz uma troca.",
                        },
                        inteligence: {
                          image: "assets/images/HUD/Special/inteligence.gif",
                          text:
                            "Intelig\xeancia \xe9 a medida de sua acuidade mental geral e afeta o n\xfamero de pontos de experi\xeancia ganhos.",
                        },
                        agility: {
                          image: "assets/images/HUD/Special/agility.gif",
                          text:
                            "Agilidade \xe9 uma medida de sua sutileza e reflexos gerais. Isso afeta o n\xfamero de pontos de a\xe7\xe3o em VATS e sua capacidade de esgueirar-se.",
                        },
                        luck: {
                          image: "assets/images/HUD/Special/luck2.gif",
                          text:
                            "A sorte \xe9 uma medida de sua boa sorte geral e afeta as taxas de recarga de acertos cr\xedticos.",
                        },
                      }),
                      (this.LABELS = Object.keys(this.SPECIAL));
                  }
                  ngOnInit() {
                    console.log(this.img, this.text),
                      this.setSpecial("strength");
                  }
                  setSpecial(t) {
                    const e = this.SPECIAL[t];
                    (this.selected = t),
                      (this.img = e.image),
                      (this.text = e.text);
                  }
                  getValue(t) {
                    return this.dataService.player.special[t];
                  }
                }
                return (
                  (t.ɵfac = function (e) {
                    return new (e || t)(_i(vf));
                  }),
                  (t.ɵcmp = ie({
                    type: t,
                    selectors: [["app-special"]],
                    decls: 10,
                    vars: 3,
                    consts: [
                      [1, "special-list"],
                      [3, "ngClass", "click", 4, "ngFor", "ngForOf"],
                      [1, "special-data"],
                      [1, "image"],
                      [
                        "alt",
                        "special image",
                        2,
                        "width",
                        "25vw",
                        "display",
                        "block",
                        "margin",
                        "auto",
                        3,
                        "src",
                      ],
                      [1, "text"],
                      [2, "width", "35vw"],
                      [3, "ngClass", "click"],
                      [2, "display", "flex"],
                      [
                        "class",
                        "selector",
                        "src",
                        "assets/images/HUD/Menu/icon_9.svg",
                        "width",
                        "15",
                        "alt",
                        "",
                        4,
                        "ngIf",
                      ],
                      ["style", "width: 15px;", 4, "ngIf"],
                      [
                        "class",
                        "selector",
                        "src",
                        "assets/images/HUD/Menu/icon_10.svg",
                        "width",
                        "15",
                        "alt",
                        "",
                        4,
                        "ngIf",
                      ],
                      [
                        "src",
                        "assets/images/HUD/Menu/icon_9.svg",
                        "width",
                        "15",
                        "alt",
                        "",
                        1,
                        "selector",
                      ],
                      [2, "width", "15px"],
                      [
                        "src",
                        "assets/images/HUD/Menu/icon_10.svg",
                        "width",
                        "15",
                        "alt",
                        "",
                        1,
                        "selector",
                      ],
                    ],
                    template: function (t, e) {
                      1 & t &&
                        (xi(0, "div", 0),
                        xi(1, "ul"),
                        vi(2, dg, 10, 9, "li", 1),
                        Ei(),
                        Ei(),
                        xi(3, "div", 2),
                        xi(4, "div", 3),
                        ki(5, "img", 4),
                        Ei(),
                        xi(6, "div", 5),
                        xi(7, "p", 6),
                        ji(8),
                        Ei(),
                        Ei(),
                        Ei(),
                        ki(9, "app-footer-status")),
                        2 & t &&
                          (Sr(2),
                          Ci("ngForOf", e.LABELS),
                          Sr(3),
                          Ri("src", e.img, sr),
                          Sr(3),
                          Ni(e.text));
                    },
                    directives: [hc, ig, cc, pc],
                    styles: [
                      "[_nghost-%COMP%]{display:flex;flex-direction:row;font-family:Monofonto}[_nghost-%COMP%]   .special-list[_ngcontent-%COMP%]{width:50vw}[_nghost-%COMP%]   .special-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;width:100%}[_nghost-%COMP%]   .special-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:2px 5px;text-transform:capitalize}[_nghost-%COMP%]   .special-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{background-color:var(--text-color);color:var(--background-color)}",
                    ],
                  })),
                  t
                );
              })(),
              outlet: "stat",
            },
            {
              path: "perks",
              component: (() => {
                class t {
                  constructor() {}
                  ngOnInit() {}
                  setPerk(t) {
                    const e = this.PERKS[t];
                    (this.selected = t),
                      (this.img = e.image),
                      (this.text = e.text);
                  }
                  getValue(t) {
                    return 0;
                  }
                }
                return (
                  (t.ɵfac = function (e) {
                    return new (e || t)();
                  }),
                  (t.ɵcmp = ie({
                    type: t,
                    selectors: [["app-perks"]],
                    decls: 10,
                    vars: 3,
                    consts: [
                      [1, "perk-list"],
                      [3, "ngClass", "click", 4, "ngFor", "ngForOf"],
                      [1, "perk-data"],
                      [1, "image"],
                      ["alt", "perk image", 3, "src"],
                      [1, "text"],
                      [3, "ngClass", "click"],
                      [2, "display", "flex"],
                      [
                        "src",
                        "assets/images/HUD/Menu/icon_9.svg",
                        "width",
                        "15",
                        "alt",
                        "",
                        1,
                        "selector",
                      ],
                      [
                        "src",
                        "assets/images/HUD/Menu/icon_10.svg",
                        "width",
                        "15",
                        "alt",
                        "",
                        1,
                        "selector",
                      ],
                    ],
                    template: function (t, e) {
                      1 & t &&
                        (xi(0, "div", 0),
                        xi(1, "ul"),
                        vi(2, fg, 8, 5, "li", 1),
                        Ei(),
                        Ei(),
                        xi(3, "div", 2),
                        xi(4, "div", 3),
                        ki(5, "img", 4),
                        Ei(),
                        xi(6, "div", 5),
                        xi(7, "p"),
                        ji(8),
                        Ei(),
                        Ei(),
                        Ei(),
                        ki(9, "app-footer-status")),
                        2 & t &&
                          (Sr(2),
                          Ci("ngForOf", e.PERKS),
                          Sr(3),
                          Ri("src", e.img, sr),
                          Sr(3),
                          Ni(e.text));
                    },
                    directives: [hc, ig, cc],
                    styles: [
                      "[_nghost-%COMP%]{display:flex;flex-direction:row}[_nghost-%COMP%]   .perk-list[_ngcontent-%COMP%]{width:50vw}[_nghost-%COMP%]   .perk-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;width:100%}[_nghost-%COMP%]   .perk-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:2px 5px;text-transform:capitalize}[_nghost-%COMP%]   .perk-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{background-color:var(--text-color);color:var(--background-color)}",
                    ],
                  })),
                  t
                );
              })(),
              outlet: "stat",
            },
          ],
        },
      ];
      let mg = (() => {
          class t {}
          return (
            (t.ɵmod = ce({ type: t })),
            (t.ɵinj = ct({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[Cp.forChild(gg)], Cp],
            })),
            t
          );
        })(),
        yg = (() => {
          class t {}
          return (
            (t.ɵmod = ce({ type: t })),
            (t.ɵinj = ct({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[_c]],
            })),
            t
          );
        })(),
        vg = (() => {
          class t {}
          return (
            (t.ɵmod = ce({ type: t })),
            (t.ɵinj = ct({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[_c]],
            })),
            t
          );
        })(),
        _g = (() => {
          class t {}
          return (
            (t.ɵmod = ce({ type: t })),
            (t.ɵinj = ct({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[_c, yg, vg, mg]],
            })),
            t
          );
        })();
      const wg = ["complete"],
        bg = ["possibility"];
      function Cg(t, e) {
        if (
          (1 & t &&
            (xi(0, "div"), ki(1, "img", 8), ki(2, "img", 9), ji(3), Ei()),
          2 & t)
        ) {
          const t = Ii();
          Sr(3),
            Ui(
              " ",
              null == t.player ||
                null == t.player.equiped ||
                null == t.player.equiped.hand
                ? null
                : t.player.equiped.hand.damage,
              " "
            );
        }
      }
      function Sg(t, e) {
        1 & t && (xi(0, "div"), ki(1, "img", 10), ki(2, "img", 11), Ei());
      }
      function xg(t, e) {
        1 & t &&
          (xi(0, "div", 12),
          ji(1, " HP "),
          xi(2, "div", 13),
          ki(3, "div", 14, 15),
          ki(5, "div", 16, 17),
          Ei(),
          Ei());
      }
      function Eg(t, e) {
        1 & t && ki(0, "div");
      }
      let kg = (() => {
        class t {
          constructor(t) {
            (this.dataService = t),
              (this.weight = this.dataService.getPlayerWeight()),
              (this.total_weight = 300);
          }
          ngAfterViewInit() {
            this.setStatus(this.dataService.player),
              this.checkHeal(20),
              this.dataService.player_change.subscribe((t) => {
                this.setStatus(t), this.checkHeal(20);
              });
          }
          setStatus(t) {
            (this.player = t),
              this.complete &&
                (this.complete.nativeElement.style.width = t.getLife() + "%");
          }
          checkHeal(t) {
            this.possibility &&
              (this.possibility.nativeElement.style.width =
                this.player.getLife() + t + "%");
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(_i(vf));
          }),
          (t.ɵcmp = ie({
            type: t,
            selectors: [["app-footer-inv"]],
            viewQuery: function (t, e) {
              var n;
              1 & t && (la(wg, !0), la(bg, !0)),
                2 & t &&
                  (oa((n = ha())) && (e.complete = n.first),
                  oa((n = ha())) && (e.possibility = n.first));
            },
            inputs: { menu: "menu" },
            decls: 14,
            vars: 6,
            consts: [
              [2, "width", "20%"],
              [
                "src",
                "assets/images/HUD/Menu/icon_67.svg",
                "width",
                "24px",
                "alt",
                "Carry weight",
              ],
              [2, "width", "19%"],
              [
                "src",
                "assets/images/HUD/Menu/icon_69.svg",
                "width",
                "24px",
                "alt",
                "Caps",
              ],
              [2, "width", "60%"],
              [1, "ap-status"],
              [4, "ngIf"],
              ["style", "display: flex;", 4, "ngIf"],
              [
                "src",
                "assets/images/HUD/Menu/icon_52.svg",
                "width",
                "30px",
                "alt",
                "Gun",
              ],
              [
                "src",
                "assets/images/HUD/Menu/icon_26.svg",
                "width",
                "15px",
                "alt",
                "Aim",
                2,
                "margin",
                "3px 0px 3px 15px",
              ],
              [
                "src",
                "assets/images/HUD/Menu/icon_54.svg",
                "width",
                "30px",
                "alt",
                "Gun",
              ],
              [
                "src",
                "assets/images/HUD/Menu/icon_14.svg",
                "width",
                "12px",
                "alt",
                "Shield",
              ],
              [2, "display", "flex"],
              [1, "level"],
              [1, "complete"],
              ["complete", ""],
              [1, "possibility"],
              ["possibility", ""],
            ],
            template: function (t, e) {
              1 & t &&
                (xi(0, "footer"),
                xi(1, "section", 0),
                xi(2, "div"),
                ki(3, "img", 1),
                ji(4),
                Ei(),
                Ei(),
                xi(5, "section", 2),
                xi(6, "div"),
                ki(7, "img", 3),
                Ei(),
                Ei(),
                xi(8, "section", 4),
                xi(9, "div", 5),
                vi(10, Cg, 4, 1, "div", 6),
                vi(11, Sg, 3, 0, "div", 6),
                vi(12, xg, 7, 0, "div", 7),
                vi(13, Eg, 1, 0, "div", 6),
                Ei(),
                Ei(),
                Ei()),
                2 & t &&
                  (Sr(4),
                  Li(" ", e.weight, "/", e.total_weight, " "),
                  Sr(6),
                  Ci("ngIf", "weapons" == e.menu),
                  Sr(1),
                  Ci("ngIf", "apparel" == e.menu),
                  Sr(1),
                  Ci("ngIf", "aid" == e.menu),
                  Sr(1),
                  Ci("ngIf", "misc" == e.menu || "junk" == e.menu));
            },
            directives: [pc],
            styles: [
              "[_nghost-%COMP%]{position:relative;width:100%;color:var(--text-color);font-family:Monofonto;bottom:-15px}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{height:30px;background-color:var(--section-color);padding:0 10px;box-sizing:border-box;line-height:20px;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-end;line-height:25px}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .ap-status[_ngcontent-%COMP%]{text-align:right;width:100%}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .ap-status[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{border:2px solid var(--text-color);width:70%;margin:3px;position:relative;left:10%}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .ap-status[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]   .complete[_ngcontent-%COMP%]{width:0;background-color:var(--text-color);position:absolute;height:100%;z-index:2}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .ap-status[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]   .possibility[_ngcontent-%COMP%]{width:0;background-color:#080;position:absolute;height:100%;z-index:1}",
            ],
          })),
          t
        );
      })();
      const Og = function (t, e) {
        return { selected: t, preview: e };
      };
      function Pg(t, e) {
        if (1 & t) {
          const t = Oi();
          xi(0, "li", 19),
            Ti("click", function () {
              Ve(t);
              const n = e.$implicit;
              return Ii().select(n);
            })("mouseover", function () {
              Ve(t);
              const n = e.$implicit;
              return Ii().setPreview(n);
            })("mouseout", function () {
              return Ve(t), Ii().clearPreview();
            }),
            ji(1),
            Ei();
        }
        if (2 & t) {
          const t = e.$implicit,
            i = Ii();
          Ci(
            "ngClass",
            (2,
            (n = Og),
            (r = i.isSelected(t)),
            (s = i.isPreview(t)),
            qo(Fe(), Ge(), 2, n, r, s, void 0))
          ),
            Sr(1),
            Ui(" ", t.name, " ");
        }
        var n, r, s;
      }
      function Tg(t, e) {
        if ((1 & t && ki(0, "img", 20), 2 & t)) {
          const t = Ii();
          Ri(
            "src",
            (null == t.preview ? null : t.preview.imageSRC) ||
              (null == t.selected ? null : t.selected.imageSRC),
            sr
          );
        }
      }
      function Mg(t, e) {
        if ((1 & t && ki(0, "img", 21), 2 & t)) {
          const t = Ii();
          Di(
            "src",
            "assets/images/HUD/Inventory/",
            null == t.preview_status ? null : t.preview_status.damage_image,
            ".svg",
            sr
          );
        }
      }
      function Ag(t, e) {
        if ((1 & t && ki(0, "img", 21), 2 & t)) {
          const t = Ii();
          Di(
            "src",
            "assets/images/HUD/Inventory/",
            null == t.preview_status ? null : t.preview_status.fire_rate_image,
            ".svg",
            sr
          );
        }
      }
      function Ig(t, e) {
        if ((1 & t && ki(0, "img", 21), 2 & t)) {
          const t = Ii();
          Di(
            "src",
            "assets/images/HUD/Inventory/",
            null == t.preview_status ? null : t.preview_status.range_image,
            ".svg",
            sr
          );
        }
      }
      function Rg(t, e) {
        if ((1 & t && ki(0, "img", 21), 2 & t)) {
          const t = Ii();
          Di(
            "src",
            "assets/images/HUD/Inventory/",
            null == t.preview_status ? null : t.preview_status.accuracy_image,
            ".svg",
            sr
          );
        }
      }
      function Dg(t, e) {
        if ((1 & t && ki(0, "img", 21), 2 & t)) {
          const t = Ii();
          Di(
            "src",
            "assets/images/HUD/Inventory/",
            null == t.preview_status ? null : t.preview_status.weight_image,
            ".svg",
            sr
          );
        }
      }
      function jg(t, e) {
        if ((1 & t && ki(0, "img", 21), 2 & t)) {
          const t = Ii();
          Di(
            "src",
            "assets/images/HUD/Inventory/",
            null == t.preview_status ? null : t.preview_status.value_image,
            ".svg",
            sr
          );
        }
      }
      const Ng = function () {
          return [];
        },
        Ug = [
          {
            path: "inv",
            component: Lf,
            children: [
              { path: "", pathMatch: "full", redirectTo: "weapons" },
              {
                path: "weapons",
                component: (() => {
                  class t {
                    constructor(t) {
                      (this.dataService = t),
                        (this.preview_status = {
                          damage_diff: 0,
                          damage_image: "icon_20",
                          fire_rate_diff: 0,
                          fire_rate_image: "icon_22",
                          range_diff: 0,
                          range_image: "icon_20",
                          accuracy_diff: 0,
                          accuracy_image: "icon_22",
                          weight_diff: 0,
                          weight_image: "icon_20",
                          value_diff: 0,
                          value_image: "icon_20",
                        });
                    }
                    ngOnInit() {
                      (this.weapons = this.dataService.player.inventory.weapon),
                        (this.selected = this.dataService.player.equiped.hand),
                        console.log(
                          this.dataService.getPlayerInventory("weapon")
                        );
                    }
                    isSelected(t) {
                      if (this.selected) {
                        const e = Object.keys(this.selected);
                        return (
                          e.filter((e) => this.selected[e] == t[e]).length ==
                          e.length
                        );
                      }
                      return !1;
                    }
                    isPreview(t) {
                      if (this.preview) {
                        const e = Object.keys(this.preview);
                        return (
                          e.filter((e) => this.preview[e] == t[e]).length ==
                            e.length && !this.isSelected(t)
                        );
                      }
                      return !1;
                    }
                    getDiff(t) {
                      const e = Math.abs(this.selected[t] - this.preview[t]);
                      return e / e || 0;
                    }
                    getImage(t, e = !1) {
                      return e
                        ? this.selected[t] - this.preview[t] > 0
                          ? "icon_20"
                          : "icon_22"
                        : this.selected[t] - this.preview[t] > 0
                        ? "icon_22"
                        : "icon_20";
                    }
                    setPreview(t) {
                      (this.preview = t),
                        this.preview &&
                          this.selected &&
                          (this.preview_status = {
                            damage_diff: this.getDiff("damage"),
                            damage_image: this.getImage("damage"),
                            fire_rate_diff: this.getDiff("fireRate"),
                            fire_rate_image: this.getImage("fireRate"),
                            range_diff: this.getDiff("range"),
                            range_image: this.getImage("range"),
                            accuracy_diff: this.getDiff("accuracy"),
                            accuracy_image: this.getImage("accuracy"),
                            weight_diff: this.getDiff("weight"),
                            weight_image: this.getImage("weight", !0),
                            value_diff: this.getDiff("value"),
                            value_image: this.getImage("value"),
                          });
                    }
                    select(t) {
                      (this.selected = t),
                        this.dataService.loseAP(10),
                        (this.dataService.player.equiped.hand = t);
                    }
                    clearPreview() {
                      (this.selected =
                        this.dataService.player.equiped.hand || null),
                        (this.preview = this.selected),
                        (this.preview_status = {
                          damage_diff: 0,
                          damage_image: "icon_20",
                          fire_rate_diff: 0,
                          fire_rate_image: "icon_22",
                          range_diff: 0,
                          range_image: "icon_20",
                          accuracy_diff: 0,
                          accuracy_image: "icon_22",
                          weight_diff: 0,
                          weight_image: "icon_20",
                          value_diff: 0,
                          value_image: "icon_20",
                        });
                    }
                  }
                  return (
                    (t.ɵfac = function (e) {
                      return new (e || t)(_i(vf));
                    }),
                    (t.ɵcmp = ie({
                      type: t,
                      selectors: [["app-weapons"]],
                      decls: 67,
                      vars: 22,
                      consts: [
                        [1, "wrapper", "row"],
                        [1, "list"],
                        [
                          3,
                          "ngClass",
                          "click",
                          "mouseover",
                          "mouseout",
                          4,
                          "ngFor",
                          "ngForOf",
                        ],
                        [1, "detail"],
                        [1, "image"],
                        [
                          "alt",
                          "weapon image",
                          "style",
                          "width: 85%; display: block; margin: auto;",
                          3,
                          "src",
                          4,
                          "ngIf",
                        ],
                        [1, "row"],
                        [1, "data", 2, "width", "80%"],
                        [1, "row", 2, "margin-bottom", "4px"],
                        [
                          1,
                          "line",
                          "attention",
                          2,
                          "width",
                          "70%",
                          "margin",
                          "0px -10px",
                        ],
                        [
                          1,
                          "line",
                          "attention",
                          2,
                          "width",
                          "38%",
                          "margin",
                          "0px -10px",
                          "display",
                          "flex",
                          "flex-direction",
                          "row",
                          "justify-content",
                          "space-between",
                          "align-items",
                          "center",
                        ],
                        [
                          "src",
                          "assets/images/HUD/Menu/icon_26.svg",
                          "alt",
                          "damage",
                          "width",
                          "21",
                        ],
                        [1, "row", "line", "attention"],
                        [
                          "src",
                          "assets/images/HUD/Inventory/icon_62.svg",
                          "width",
                          "21",
                          "alt",
                          "ammo",
                        ],
                        [1, "row", "line"],
                        [
                          2,
                          "width",
                          "20%",
                          "display",
                          "flex",
                          "flex-direction",
                          "column",
                          "justify-content",
                          "space-between",
                          "margin-top",
                          "6px",
                        ],
                        [2, "height", "30px"],
                        [
                          "alt",
                          "damage compare status",
                          "width",
                          "13",
                          "style",
                          "margin-left: 5px;",
                          3,
                          "src",
                          4,
                          "ngFor",
                          "ngForOf",
                        ],
                        ["menu", "weapons"],
                        [3, "ngClass", "click", "mouseover", "mouseout"],
                        [
                          "alt",
                          "weapon image",
                          2,
                          "width",
                          "85%",
                          "display",
                          "block",
                          "margin",
                          "auto",
                          3,
                          "src",
                        ],
                        [
                          "alt",
                          "damage compare status",
                          "width",
                          "13",
                          2,
                          "margin-left",
                          "5px",
                          3,
                          "src",
                        ],
                      ],
                      template: function (t, e) {
                        1 & t &&
                          (xi(0, "div", 0),
                          xi(1, "div", 1),
                          xi(2, "ul"),
                          vi(3, Pg, 2, 5, "li", 2),
                          Ei(),
                          Ei(),
                          xi(4, "div", 3),
                          xi(5, "div", 4),
                          vi(6, Tg, 1, 1, "img", 5),
                          Ei(),
                          xi(7, "div", 6),
                          xi(8, "div", 7),
                          xi(9, "div", 8),
                          xi(10, "div", 9),
                          ji(11, " Damage "),
                          Ei(),
                          xi(12, "div", 10),
                          ki(13, "img", 11),
                          ji(14),
                          Ei(),
                          Ei(),
                          xi(15, "div", 12),
                          xi(16, "div"),
                          ki(17, "img", 13),
                          ji(18),
                          Ei(),
                          xi(19, "div"),
                          ji(20),
                          Ei(),
                          Ei(),
                          xi(21, "div", 14),
                          xi(22, "div"),
                          ji(23, "Fire Rate"),
                          Ei(),
                          xi(24, "div"),
                          ji(25),
                          Ei(),
                          Ei(),
                          xi(26, "div", 14),
                          xi(27, "div"),
                          ji(28, "Range"),
                          Ei(),
                          xi(29, "div"),
                          ji(30),
                          Ei(),
                          Ei(),
                          xi(31, "div", 14),
                          xi(32, "div"),
                          ji(33, "Accuracy"),
                          Ei(),
                          xi(34, "div"),
                          ji(35),
                          Ei(),
                          Ei(),
                          xi(36, "div", 14),
                          xi(37, "div"),
                          ji(38, "Weight"),
                          Ei(),
                          xi(39, "div"),
                          ji(40),
                          Ei(),
                          Ei(),
                          xi(41, "div", 14),
                          xi(42, "div"),
                          ji(43, "Value"),
                          Ei(),
                          xi(44, "div"),
                          ji(45),
                          Ei(),
                          Ei(),
                          Ei(),
                          xi(46, "div", 15),
                          xi(47, "div", 16),
                          xi(48, "span"),
                          vi(49, Mg, 1, 1, "img", 17),
                          Ei(),
                          Ei(),
                          ki(50, "div", 16),
                          xi(51, "div", 16),
                          xi(52, "span"),
                          vi(53, Ag, 1, 1, "img", 17),
                          Ei(),
                          Ei(),
                          xi(54, "div", 16),
                          xi(55, "span"),
                          vi(56, Ig, 1, 1, "img", 17),
                          Ei(),
                          Ei(),
                          xi(57, "div", 16),
                          xi(58, "span"),
                          vi(59, Rg, 1, 1, "img", 17),
                          Ei(),
                          Ei(),
                          xi(60, "div", 16),
                          xi(61, "span"),
                          vi(62, Dg, 1, 1, "img", 17),
                          Ei(),
                          Ei(),
                          xi(63, "div", 16),
                          xi(64, "span"),
                          vi(65, jg, 1, 1, "img", 17),
                          Ei(),
                          Ei(),
                          Ei(),
                          Ei(),
                          Ei(),
                          Ei(),
                          ki(66, "app-footer-inv", 18)),
                          2 & t &&
                            (Sr(3),
                            Ci("ngForOf", e.weapons),
                            Sr(3),
                            Ci("ngIf", e.selected || e.preview),
                            Sr(8),
                            Ui(
                              " ",
                              (null == e.preview ? null : e.preview.damage) ||
                                (null == e.selected ? null : e.selected.damage),
                              " "
                            ),
                            Sr(4),
                            Ui(
                              " ",
                              null == e.preview || null == e.preview.ammunition
                                ? null
                                : e.preview.ammunition.type,
                              " "
                            ),
                            Sr(2),
                            Ui(
                              " ",
                              (null == e.preview || null == e.preview.ammunition
                                ? null
                                : e.preview.ammunition.quantity) || "",
                              " "
                            ),
                            Sr(5),
                            Ni(null == e.preview ? null : e.preview.fireRate),
                            Sr(5),
                            Ni(null == e.preview ? null : e.preview.range),
                            Sr(5),
                            Ni(null == e.preview ? null : e.preview.accuracy),
                            Sr(5),
                            Ni(null == e.preview ? null : e.preview.weight),
                            Sr(5),
                            Ni(null == e.preview ? null : e.preview.value),
                            Sr(4),
                            Ci(
                              "ngForOf",
                              Ho(16, Ng).constructor(
                                null == e.preview_status
                                  ? null
                                  : e.preview_status.damage_diff
                              )
                            ),
                            Sr(4),
                            Ci(
                              "ngForOf",
                              Ho(17, Ng).constructor(
                                null == e.preview_status
                                  ? null
                                  : e.preview_status.fire_rate_diff
                              )
                            ),
                            Sr(3),
                            Ci(
                              "ngForOf",
                              Ho(18, Ng).constructor(
                                null == e.preview_status
                                  ? null
                                  : e.preview_status.range_diff
                              )
                            ),
                            Sr(3),
                            Ci(
                              "ngForOf",
                              Ho(19, Ng).constructor(
                                null == e.preview_status
                                  ? null
                                  : e.preview_status.accuracy_diff
                              )
                            ),
                            Sr(3),
                            Ci(
                              "ngForOf",
                              Ho(20, Ng).constructor(
                                null == e.preview_status
                                  ? null
                                  : e.preview_status.weight_diff
                              )
                            ),
                            Sr(3),
                            Ci(
                              "ngForOf",
                              Ho(21, Ng).constructor(
                                null == e.preview_status
                                  ? null
                                  : e.preview_status.value_diff
                              )
                            ));
                      },
                      directives: [hc, pc, kg, cc],
                      styles: [
                        '@charset "UTF-8";[_nghost-%COMP%]{height:100%;color:#0e0;font-family:Monofonto}[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{height:70vh}[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{width:50vw}[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{width:50vh}[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:50%;display:flex;flex-direction:column;justify-content:center}[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{width:100%;justify-content:space-between;padding:2px 10px;margin:2px 0;box-sizing:border-box;height:30px;line-height:25px}[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .row.line[_ngcontent-%COMP%], [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{background-color:#040}[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .row.line.attention[_ngcontent-%COMP%], [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .line.attention[_ngcontent-%COMP%]{width:100%;height:30px;line-height:20px;padding:2px 10px;box-sizing:border-box;background-color:#060}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\u25a0";font-weight:700;display:inline-block;margin-left:2px;color:var(--background-color)}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{background-color:var(--text-color)}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li.preview[_ngcontent-%COMP%], [_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%], [_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:before{color:var(--background-color)}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li.preview[_ngcontent-%COMP%]{background-color:var(--text-color)}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li.preview[_ngcontent-%COMP%]:before{color:var(--text-color)}',
                      ],
                    })),
                    t
                  );
                })(),
                outlet: "inv",
              },
              {
                path: "apparel",
                component: (() => {
                  class t {
                    constructor() {}
                    ngOnInit() {}
                  }
                  return (
                    (t.ɵfac = function (e) {
                      return new (e || t)();
                    }),
                    (t.ɵcmp = ie({
                      type: t,
                      selectors: [["app-apparel"]],
                      decls: 3,
                      vars: 0,
                      consts: [["menu", "apparel"]],
                      template: function (t, e) {
                        1 & t &&
                          (xi(0, "p"),
                          ji(1, "apparel works!"),
                          Ei(),
                          ki(2, "app-footer-inv", 0));
                      },
                      directives: [kg],
                      styles: [""],
                    })),
                    t
                  );
                })(),
                outlet: "inv",
              },
              {
                path: "aid",
                component: (() => {
                  class t {
                    constructor() {}
                    ngOnInit() {}
                  }
                  return (
                    (t.ɵfac = function (e) {
                      return new (e || t)();
                    }),
                    (t.ɵcmp = ie({
                      type: t,
                      selectors: [["app-aid"]],
                      decls: 3,
                      vars: 0,
                      consts: [["menu", "aid"]],
                      template: function (t, e) {
                        1 & t &&
                          (xi(0, "p"),
                          ji(1, "aid works!"),
                          Ei(),
                          ki(2, "app-footer-inv", 0));
                      },
                      directives: [kg],
                      styles: [""],
                    })),
                    t
                  );
                })(),
                outlet: "inv",
              },
              {
                path: "misc",
                component: (() => {
                  class t {
                    constructor() {}
                    ngOnInit() {}
                  }
                  return (
                    (t.ɵfac = function (e) {
                      return new (e || t)();
                    }),
                    (t.ɵcmp = ie({
                      type: t,
                      selectors: [["app-misc"]],
                      decls: 3,
                      vars: 0,
                      consts: [["menu", "misc"]],
                      template: function (t, e) {
                        1 & t &&
                          (xi(0, "p"),
                          ji(1, "misc works!"),
                          Ei(),
                          ki(2, "app-footer-inv", 0));
                      },
                      directives: [kg],
                      styles: [""],
                    })),
                    t
                  );
                })(),
                outlet: "inv",
              },
              {
                path: "junk",
                component: (() => {
                  class t {
                    constructor() {}
                    ngOnInit() {}
                  }
                  return (
                    (t.ɵfac = function (e) {
                      return new (e || t)();
                    }),
                    (t.ɵcmp = ie({
                      type: t,
                      selectors: [["app-junk"]],
                      decls: 3,
                      vars: 0,
                      consts: [["menu", "junk"]],
                      template: function (t, e) {
                        1 & t &&
                          (xi(0, "p"),
                          ji(1, "junk works!"),
                          Ei(),
                          ki(2, "app-footer-inv", 0));
                      },
                      directives: [kg],
                      styles: [""],
                    })),
                    t
                  );
                })(),
                outlet: "inv",
              },
            ],
          },
        ];
      let Lg = (() => {
          class t {}
          return (
            (t.ɵmod = ce({ type: t })),
            (t.ɵinj = ct({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[Cp.forChild(Ug)], Cp],
            })),
            t
          );
        })(),
        Fg = (() => {
          class t {}
          return (
            (t.ɵmod = ce({ type: t })),
            (t.ɵinj = ct({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[_c, Lg, yg]],
            })),
            t
          );
        })();
      var Hg = n("Q1FS"),
        Vg = n("ds6q"),
        $g = n("vLqr");
      let zg = (() => {
          class t {
            constructor(t) {
              (this.authService = t),
                (this.refreshTokenInProgress = !1),
                (this.tokenRefreshedSource = new Vg.Subject()),
                (this.tokenRefreshed$ = this.tokenRefreshedSource.asObservable());
            }
            addAuthHeader(t) {
              const e = this.authService.getAccessToken();
              return e
                ? t.clone({ setHeaders: { Authorization: "Bearer " + e } })
                : t;
            }
            refreshToken() {
              return this.refreshTokenInProgress
                ? new Hg.Observable((t) => {
                    this.tokenRefreshed$.subscribe(() => {
                      t.next(), t.complete();
                    });
                  })
                : ((this.refreshTokenInProgress = !0),
                  this.authService.refreshAccessToken().pipe(
                    Fu((t) => {
                      this.authService.saveToken(t),
                        (this.refreshTokenInProgress = !1),
                        this.tokenRefreshedSource.next();
                    }),
                    bu(
                      (t) => (
                        (this.refreshTokenInProgress = !1), this.logout(), t
                      )
                    )
                  ));
            }
            logout() {
              this.authService.logout();
            }
            handleResponseError(t, e, n) {
              if (400 === t.status);
              else {
                if (401 === t.status)
                  return this.refreshToken().pipe(
                    Mu(() => ((e = this.addAuthHeader(e)), n.handle(e))),
                    bu((t) => {
                      if (401 !== t.status) return this.handleResponseError(t);
                      this.logout();
                    })
                  );
                403 === t.status && this.logout();
              }
              return Object($g.throwError)(t);
            }
            intercept(t, e) {
              return (
                (t = this.addAuthHeader(t)),
                e.handle(t).pipe(bu((n) => this.handleResponseError(n, t, e)))
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Bt(yf));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        qg = (() => {
          class t {}
          return (
            (t.ɵmod = ce({ type: t })),
            (t.ɵinj = ct({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [{ provide: nf, useClass: zg, multi: !0 }],
            })),
            t
          );
        })(),
        Bg = (() => {
          class t {}
          return (
            (t.ɵmod = ce({ type: t, bootstrap: [Qf] })),
            (t.ɵinj = ct({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [],
              imports: [[Qc, Wf, qg, mf, _g, Fg, yg]],
            })),
            t
          );
        })();
      (function () {
        if (Xn)
          throw new Error("Cannot enable prod mode after platform setup.");
        Jn = !1;
      })(),
        Gc()
          .bootstrapModule(Bg)
          .catch((t) => console.error(t));
    },
    zfKp: function (t, e, n) {
      "use strict";
      e.observable = (function () {
        return (
          ("function" == typeof Symbol && Symbol.observable) || "@@observable"
        );
      })();
    },
    zn8P: function (t, e) {
      function n(t) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        });
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (t.exports = n),
        (n.id = "zn8P");
    },
  },
  [[0, 0]],
]);
