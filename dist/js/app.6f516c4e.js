(function(t){function s(s){for(var n,i,o=s[0],c=s[1],u=s[2],f=0,l=[];f<o.length;f++)i=o[f],a[i]&&l.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(s);while(l.length)l.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,s=0;s<r.length;s++){for(var e=r[s],n=!0,o=1;o<e.length;o++){var c=e[o];0!==a[c]&&(n=!1)}n&&(r.splice(s--,1),t=i(i.s=e[0]))}return t}var n={},a={app:0},r=[];function i(s){if(n[s])return n[s].exports;var e=n[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=n,i.d=function(t,s,e){i.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,s){if(1&s&&(t=i(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var n in t)i.d(e,n,function(s){return t[s]}.bind(null,n));return e},i.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(s,"a",s),s},i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=s,o=o.slice();for(var u=0;u<o.length;u++)s(o[u]);var d=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"034f":function(t,s,e){"use strict";var n=e("64a9"),a=e.n(n);a.a},"0800":function(t,s,e){},"1da6":function(t,s,e){"use strict";var n=e("1f23"),a=e.n(n);a.a},"1f23":function(t,s,e){},"27d7":function(t,s,e){},"2a05":function(t,s,e){"use strict";var n=e("0800"),a=e.n(n);a.a},"2e61":function(t,s,e){"use strict";var n=e("5575"),a=e.n(n);a.a},4678:function(t,s,e){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var s=r(t);return e(s)}function r(t){var s=n[t];if(!(s+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s}a.keys=function(){return Object.keys(n)},a.resolve=r,t.exports=a,a.id="4678"},5575:function(t,s,e){},"56d7":function(t,s,e){"use strict";e.r(s);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("app-header"),e("div",{staticClass:"pad screen"},[e("router-view")],1)],1)},r=[],i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("b-navbar",{attrs:{toggleable:"sm",type:"light",variant:"light"}},[e("b-navbar-brand",{attrs:{href:"#"}},[e("span",{staticClass:"blink"},[t._v("TradeBot")])]),e("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),e("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[e("b-navbar-nav",[e("b-nav-item",{class:{active:1==t.active_el},attrs:{to:"/"},on:{click:function(s){return t.activate(1)}}},[t._v("Home")]),e("b-nav-item",{class:{active:2==t.active_el},attrs:{to:"/portfolio"},on:{click:function(s){return t.activate(2)}}},[t._v("My Stocks")]),e("b-nav-item",{class:{active:3==t.active_el},attrs:{to:"/stocks"},on:{click:function(s){return t.activate(3)}}},[e("span",[t._v("Stock Market")])])],1),e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item",{attrs:{to:"/"}},[e("span",{staticClass:"hover_blue"},[t._v("$"+t._s(t.funds))])]),e("b-nav-item",{staticClass:"stop_trading",attrs:{href:"#"},on:{click:t.stopTrading}},[e("span",{staticClass:"hover_red"},[t._v("End Day")])]),e("b-nav-item-dropdown",{attrs:{text:"Settings",right:""}},[e("b-dropdown-item",{attrs:{href:"#"}},[t._v("Load")]),e("b-dropdown-item",{attrs:{href:"#"}},[t._v("Save")])],1)],1)],1)],1)],1)},o=[],c={name:"Header",data:function(){return{active_el:0,counter:this.$store.getters.funds,max:1e5}},methods:{activate:function(t){this.active_el=t},stopTrading:function(){this.$store.dispatch("randomizeStocks")}},computed:{funds:function(){return this.$store.getters.funds}}},u=c,d=(e("2a05"),e("2877")),f=Object(d["a"])(u,i,o,!1,null,"5b62f3a2",null),l=f.exports,p={components:{appHeader:l},created:function(){this.$store.dispatch("initStocks")}},b=p,h=(e("034f"),Object(d["a"])(b,a,r,!1,null,null,null)),m=h.exports,v=e("8c4f"),j=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"screen pad"},[e("div",{staticClass:"screen-1"},[e("b-jumbotron",{attrs:{header:"Portfolio"}},[e("p",[t._v("Available Funds : "),e("span",{staticClass:"blue"},[t._v(t._s(t.funds)+"$")])]),e("p",[t._v("Total Stocks Bought :  "),e("span",{staticClass:"blue"},[t._v(t._s(t.stocks_bought)+"$")])]),(t.set=!0)?e("p",[t._v("Total Amount Invested :  "),e("span",{staticClass:"blue"},[t._v(t._s(t.amounted_invested)+"$")])]):t._e(),e("p",[e("span",{class:t.juice},[t._v(" "+t._s(t.margin)+"$")])])])],1),e("div",{staticClass:"screen-2"},[e("rchart")],1)])},k=[],_=e("5d73"),g=e.n(_),y=(e("c5f6"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("reactive-bar-chart",{attrs:{"chart-data":t.chartData}})],1)}),S=[],w=e("1fca"),q=w["b"].reactiveProp,$={extends:w["a"],mixins:[q],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},C={name:"App",components:{ReactiveBarChart:$},data:function(){return{chartData:null}},methods:{generateData:function(){var t=[];t=this.$store.getters.getPrices;var s=[];s=this.$store.getters.getNames,this.chartData={labels:s,datasets:[{label:"My Stock Holdings | Live",backgroundColor:"#f87979",data:t}]}},generateLabels:function(){}},mounted:function(){setInterval(this.generateData,1e3)}},x=C,O=(e("78d3"),Object(d["a"])(x,y,S,!1,null,"19e37cc7",null)),T=O.exports,z={components:{rchart:T},data:function(){return{juice:"green",invested_amount:0,profit:0,loss:0,funds_i:0,set:!0}},computed:{funds:function(){return this.funds_i=this.$store.getters.funds,this.funds_i},stocks_bought:function(){return this.$store.getters.total_Stocks},amounted_invested:function(){if(!(this.profit>0))return this.invested_amount=1e5-Number(this.$store.getters.funds),this.set=!0,this.invested_amount;this.set=!1},margin:function(){return this.funds_i>1e5?(this.profit=this.funds_i-1e5,this.juice="green",this.profit):(this.loss=1e5-this.funds_i,this.juice="red",this.loss)},getStocks:function(){var t=this.$store.getters.stockIds,s=[],e=!0,n=!1,a=void 0;try{for(var r,i=g()(t);!(e=(r=i.next()).done);e=!0){var o=r.value;o.id&&s.push(o.id)}}catch(c){n=!0,a=c}finally{try{e||null==i.return||i.return()}finally{if(n)throw a}}return s},getStock_ids:function(){return this.$store.getters.getIds},getStock_names:function(){return this.$store.getters.getNames},getStock_prices:function(){return this.$store.getters.getPrices}}},P=z,D=(e("2e61"),Object(d["a"])(P,j,k,!1,null,"7755020a",null)),N=D.exports,E=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("b-card-group",{attrs:{deck:""}},t._l(t.stocks,function(t){return e("stock-data",{attrs:{stock:t}})}),1)],1)},I=[],B=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("b-col",{staticClass:"mr-auto p-3",attrs:{lg:"4"}},[e("b-input-group",[e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:"light"},on:{dismissed:function(s){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v("\n      Name : "),e("span",{staticClass:"blue"},[t._v(t._s(t.stock.name))]),t._v(" | Stocks Bought : "),e("span",{staticClass:"blue"},[t._v(t._s(t.quant))]),t._v(" | Total Amount Spent : "),e("span",{staticClass:"blue"},[t._v("$"+t._s(t.sale))])]),e("b-input-group-prepend",{attrs:{"is-text":""}},[t._v(t._s(t.stock.name))]),e("b-input-group-prepend",{attrs:{"is-text":""}},[t._v("Price: $"+t._s(t.stock.price))]),e("b-form-input",{attrs:{type:"number",placeholder:"Quantity"},model:{value:t.quantity,callback:function(s){t.quantity=s},expression:"quantity"}}),e("b-input-group-append",[e("b-button",{attrs:{variant:"outline-primary",disabled:t.insufficientFunds||t.quantity<=0},on:{click:t.buyStock}},[t._v(t._s(t.insufficientFunds?"Less Funds":"Buy"))])],1)],1)],1)},L=[],M={name:"Stock",props:["stock"],data:function(){return{quantity:0,show_quantity:0,dismissSecs:1,dismissCountDown:0}},computed:{funds:function(){return this.$store.getters.funds},quant:function(){return this.show_quantity},sale:function(){return Number(this.show_quantity)*Number(this.stock.price)},insufficientFunds:function(){return this.quantity*this.stock.price>this.funds}},methods:{countDownChanged:function(t){this.dismissCountDown=t},buyStock:function(){this.dismissCountDown=this.dismissSecs;var t={stockId:this.stock.id,stockPrice:this.stock.price,quantity:this.quantity};console.log(t),this.$store.dispatch("buyStock",t),this.show_quantity=this.quantity,this.quantity=0}}},A=M,F=(e("1da6"),Object(d["a"])(A,B,L,!1,null,"6465e5a2",null)),K=F.exports,H={name:"Stocks",components:{stockData:K},computed:{stocks:function(){return console.log(this.$store.getters.stocks),this.$store.getters.stocks}}},R=H,U=Object(d["a"])(R,E,I,!1,null,"a8e70a6c",null),Q=U.exports,G=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("b-card-group",{attrs:{deck:""}},t._l(t.stocks,function(t){return e("stock-data",{attrs:{stock:t}})}),1)],1)},J=[],Y=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("b-col",{staticClass:"mr-auto p-3",attrs:{lg:"4"}},[e("b-input-group",[e("b-input-group-prepend",{attrs:{"is-text":""}},[t._v(t._s(t.stock.name))]),e("b-input-group-prepend",{attrs:{"is-text":""}},[t._v("Price: $"+t._s(t.stock.price))]),e("b-input-group-prepend",{attrs:{"is-text":""}},[t._v("Quantity :"+t._s(t.stock.quantity))]),e("b-form-input",{attrs:{type:"number",placeholder:"Quantity"},model:{value:t.quantity,callback:function(s){t.quantity=s},expression:"quantity"}}),e("b-input-group-append",[e("b-button",{attrs:{variant:"outline-primary",disabled:t.insufficientStocks||t.quantity<=0},on:{click:t.sellStock}},[t._v(t._s(t.insufficientStocks?"Less Stocks":"Sell"))])],1)],1)],1)},V=[],W={name:"Stock",props:["stock"],data:function(){return{quantity:0}},computed:{insufficientStocks:function(){return this.quantity>this.stock.quantity}},methods:{sellStock:function(){var t={stockId:this.stock.id,stockPrice:this.stock.price,quantity:this.quantity};this.$store.dispatch("sellStock",t),this.quantity=0}}},X=W,Z=Object(d["a"])(X,Y,V,!1,null,"8cea3b6a",null),tt=Z.exports,st={name:"Stocks",components:{stockData:tt},computed:{stocks:function(){return console.log(this.$store.getters.stockPortfolio),this.$store.getters.stockPortfolio}}},et=st,nt=Object(d["a"])(et,G,J,!1,null,"6d337491",null),at=nt.exports;n["a"].use(v["a"]);var rt=new v["a"]({mode:"history",base:"/",routes:[{path:"/",component:N},{path:"/stocks",component:Q},{path:"/portfolio",component:at}]}),it=e("2f62"),ot=(e("ac6a"),[{id:1,name:"Apple",price:110},{id:2,name:"Sony",price:220},{id:3,name:"FB",price:320},{id:4,name:"Oracle",price:315},{id:5,name:"Hp",price:155},{id:6,name:"Bell",price:200},{id:7,name:"Chatr",price:180},{id:8,name:"Tesla",price:265},{id:9,name:"Tata",price:215},{id:10,name:"Honda",price:110},{id:11,name:"TD",price:150},{id:12,name:"Acer",price:190},{id:13,name:"Rogers",price:155},{id:14,name:"RBC",price:325},{id:15,name:"Kudo",price:305}]),ct={stocks:[]},ut={SET_STATES:function(t,s){t.stocks=s},RND_STOCKS:function(t){t.stocks.forEach(function(t){t.price=Math.round(t.price*(1+Math.random()-.4))})}},dt={buyStock:function(t,s){var e=t.commit;e("BUY_STOCK",s)},initStocks:function(t){var s=t.commit;s("SET_STATES",ot)},randomizeStocks:function(t){var s=t.commit;s("RND_STOCKS")}},ft={stocks:function(t){return t.stocks}},lt={state:ct,mutations:ut,actions:dt,getters:ft},pt=(e("7f7f"),e("7514"),{funds:1e5,stocks:[],total_Stocks:0,names:[],prices:[],ids:[]}),bt={BUY_STOCK:function(t,s){var e=s.stockId,n=s.quantity,a=s.stockPrice,r=t.stocks.find(function(t){return t.id==e});if(r){var i=Number(r.quantity);i+=Number(n),r.quantity=Number(i)}else t.stocks.push({id:e,quantity:n});t.total_Stocks+=Number(n),t.funds-=a*Number(n)},SELL_STOCK:function(t,s){var e=s.stockId,n=s.quantity,a=s.stockPrice,r=t.stocks.find(function(t){return t.id==e});r.quantity>n?(r.quantity-=n,t.total_Stocks-=Number(n)):(t.total_Stocks-=1,t.stocks.splice(t.stocks.indexOf(r),1)),t.funds+=a*Number(n)}},ht={sellStock:function(t,s){var e=t.commit;e("SELL_STOCK",s)}},mt={stockPortfolio:function(t,s){return t.stocks.map(function(e){var n=s.stocks.find(function(t){return t.id==e.id});return t.ids=e.id,t.names=n.names,t.prices=n.prices,{id:e.id,quantity:e.quantity,name:n.name,price:n.price}})},stockIds:function(t,s){return t.stocks.map(function(t){s.stocks.find(function(s){return s.id==t.id});var e=t.id;return{id:e}})},stockNames:function(t,s){return t.stocks.map(function(t){var e=s.stocks.find(function(s){return s.id==t.id}),n=e.name;return{id:n}})},stockPrices:function(t,s){return t.stocks.map(function(t){var e=s.stocks.find(function(s){return s.id==t.id}),n=e.price;return{id:n}})},getIds:function(t,s){var e=s.stockIds,n=[],a=!0,r=!1,i=void 0;try{for(var o,c=g()(e);!(a=(o=c.next()).done);a=!0){var u=o.value;u.id&&n.push(u.id)}}catch(d){r=!0,i=d}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n},getNames:function(t,s){var e=s.stockNames,n=[],a=!0,r=!1,i=void 0;try{for(var o,c=g()(e);!(a=(o=c.next()).done);a=!0){var u=o.value;u.id&&n.push(u.id)}}catch(d){r=!0,i=d}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n},getPrices:function(t,s){var e=s.stockPrices,n=[],a=!0,r=!1,i=void 0;try{for(var o,c=g()(e);!(a=(o=c.next()).done);a=!0){var u=o.value;u.id&&n.push(u.id)}}catch(d){r=!0,i=d}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n},funds:function(t){return t.funds},total_Stocks:function(t){return t.total_Stocks}},vt={state:pt,mutations:bt,actions:ht,getters:mt};n["a"].use(it["a"]);var jt=new it["a"].Store({modules:{stocks:lt,portfolio:vt}}),kt=e("9f7b"),_t=e.n(kt);e("f9e3"),e("2dd8");n["a"].use(_t.a),n["a"].config.productionTip=!1,new n["a"]({router:rt,store:jt,render:function(t){return t(m)}}).$mount("#app")},"64a9":function(t,s,e){},"78d3":function(t,s,e){"use strict";var n=e("27d7"),a=e.n(n);a.a}});
//# sourceMappingURL=app.6f516c4e.js.map