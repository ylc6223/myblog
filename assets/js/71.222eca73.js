(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{678:function(s,t,n){"use strict";n.r(t);var a=n(6),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("一言以蔽之: 基本数据类型用"),n("code",[s._v("栈")]),s._v("存储，引用数据类型用"),n("code",[s._v("堆")]),s._v("存储。")]),s._v(" "),n("p",[s._v("具体而言，以下数据类型存储在栈中:")]),s._v(" "),n("ul",[n("li",[s._v("boolean")]),s._v(" "),n("li",[s._v("null")]),s._v(" "),n("li",[s._v("undefined")]),s._v(" "),n("li",[s._v("number")]),s._v(" "),n("li",[s._v("string")]),s._v(" "),n("li",[s._v("symbol")]),s._v(" "),n("li",[s._v("bigint")])]),s._v(" "),n("p",[s._v("而所有的对象数据类型存放在堆中。")]),s._v(" "),n("p",[s._v("值得注意的是，对于"),n("code",[s._v("赋值")]),s._v("操作，原始类型的数据直接完整地赋值变量值，对象数据类型的数据则是复制引用地址。")]),s._v(" "),n("p",[s._v("因此会有下面的情况:")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" newObj "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nnewObj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//变成了2")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("之所以会这样，是因为 obj 和 newObj 是同一份堆空间的地址，改变newObj，等于改变了共同的堆内存，这时候通过 obj 来获取这块内存的值当然会改变。")]),s._v(" "),n("p",[s._v("当然，你可能会问: 为什么不全部用栈来保存呢？")]),s._v(" "),n("p",[s._v("首先，对于系统栈来说，它的功能除了保存变量之外，还有创建并切换函数执行上下文的功能。举个例子:")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("a")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("a")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("假设用ESP指针来保存当前的执行状态，在系统栈中会产生如下的过程：")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("调用func, 将 func 函数的上下文压栈，ESP指向栈顶。")])]),s._v(" "),n("li",[n("p",[s._v("执行func，又调用f函数，将 f 函数的上下文压栈，ESP 指针上移。")])]),s._v(" "),n("li",[n("p",[s._v("执行完 f 函数，将ESP 下移，f函数对应的栈顶空间被回收。")])]),s._v(" "),n("li",[n("p",[s._v("执行完 func，ESP 下移，func对应的空间被回收。")])])]),s._v(" "),n("p",[s._v("图示如下:")]),s._v(" "),n("p",[n("img",{attrs:{src:s.$withBase("/week07/1.jpg"),alt:"project"}})]),s._v(" "),n("p",[s._v("因此你也看到了，如果采用栈来存储相对基本类型更加复杂的对象数据，那么切换上下文的开销将变得巨大！")]),s._v(" "),n("p",[s._v("不过堆内存虽然空间大，能存放大量的数据，但与此同时垃圾内存的回收会带来更大的开销，下一篇就来分析一下堆内存到底是如何进行垃圾回收并进行优化的。")])])}),[],!1,null,null,null);t.default=e.exports}}]);