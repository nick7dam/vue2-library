function r(e, n, t, s, d, f, m, u) {
  var o = typeof e == "function" ? e.options : e;
  return n && (o.render = n, o.staticRenderFns = t, o._compiled = !0), {
    exports: e,
    options: o
  };
}
const l = {
  name: "HelloWorld"
};
var i = function() {
  var n = this;
  return n._self._c, n._m(0);
}, _ = [function() {
  var e = this, n = e._self._c;
  return n("div", [n("h2", [e._v("Hello from Vue 2 Library!")])]);
}], a = /* @__PURE__ */ r(
  l,
  i,
  _
);
const c = a.exports, v = {
  install(e) {
    e.component("HelloWorld", c);
  }
};
export {
  c as HelloWorld,
  v as default
};
