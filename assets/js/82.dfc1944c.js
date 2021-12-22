(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{672:function(t,v,_){"use strict";_.r(v);var a=_(6),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"http-特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-特点"}},[t._v("#")]),t._v(" HTTP 特点")]),t._v(" "),_("p",[t._v("HTTP 的特点概括如下:")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("灵活可扩展，主要体现在两个方面。一个是语义上的自由，只规定了基本格式，比如空格分隔单词，换行分隔字段，其他的各个部分都没有严格的语法限制。另一个是传输形式的多样性，不仅仅可以传输文本，还能传输图片、视频等任意数据，非常方便。")])]),t._v(" "),_("li",[_("p",[t._v("可靠传输。HTTP 基于 TCP/IP，因此把这一特性继承了下来。这属于 TCP 的特性，不具体介绍了。")])]),t._v(" "),_("li",[_("p",[t._v("请求-应答。也就是"),_("code",[t._v("一发一收")]),t._v("、"),_("code",[t._v("有来有回")]),t._v("， 当然这个请求方和应答方不单单指客户端和服务器之间，如果某台服务器作为代理来连接后端的服务端，那么这台服务器也会扮演"),_("strong",[t._v("请求方")]),t._v("的角色。")])]),t._v(" "),_("li",[_("p",[t._v("无状态。这里的状态是指"),_("strong",[t._v("通信过程的上下文信息")]),t._v("，而每次 http 请求都是独立、无关的，默认不需要保留状态信息。")])])]),t._v(" "),_("h2",{attrs:{id:"http-缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-缺点"}},[t._v("#")]),t._v(" HTTP 缺点")]),t._v(" "),_("h3",{attrs:{id:"无状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#无状态"}},[t._v("#")]),t._v(" 无状态")]),t._v(" "),_("p",[t._v("所谓的优点和缺点还是要分场景来看的，对于 HTTP 而言，最具争议的地方在于它的"),_("strong",[t._v("无状态")]),t._v("。")]),t._v(" "),_("p",[t._v("在需要长连接的场景中，需要保存大量的上下文信息，以免传输大量重复的信息，那么这时候无状态就是 http 的缺点了。")]),t._v(" "),_("p",[t._v("但与此同时，另外一些应用仅仅只是为了获取一些数据，不需要保存连接上下文信息，无状态反而减少了网络开销，成为了 http 的优点。")]),t._v(" "),_("h3",{attrs:{id:"明文传输"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#明文传输"}},[t._v("#")]),t._v(" 明文传输")]),t._v(" "),_("p",[t._v("即协议里的报文(主要指的是头部)不使用二进制数据，而是文本形式。")]),t._v(" "),_("p",[t._v("这当然对于调试提供了便利，但同时也让 HTTP 的报文信息暴露给了外界，给攻击者也提供了便利。"),_("code",[t._v("WIFI陷阱")]),t._v("就是利用 HTTP 明文传输的缺点，诱导你连上热点，然后疯狂抓你所有的流量，从而拿到你的敏感信息。")]),t._v(" "),_("h3",{attrs:{id:"队头阻塞问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#队头阻塞问题"}},[t._v("#")]),t._v(" 队头阻塞问题")]),t._v(" "),_("p",[t._v("当 http 开启长连接时，共用一个 TCP 连接，同一时刻只能处理一个请求，那么当前请求耗时过长的情况下，其它的请求只能处于阻塞状态，也就是著名的"),_("strong",[t._v("队头阻塞")]),t._v("问题。接下来会有一小节讨论这个问题。")])])}),[],!1,null,null,null);v.default=s.exports}}]);