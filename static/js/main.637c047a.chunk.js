(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/logo.8c7158bc.png"},21:function(e,t,a){e.exports=a(34)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),o=a.n(c),r=(a(26),a(18)),i=a(10),s=a(11),m=a(19),u=a(12),d=a(20),h=a(1),p=(a(27),a(28),a(17)),b=a(13);var E=function(e){var t=e.items.map(function(t){return l.a.createElement("div",{className:"list",key:t.key},l.a.createElement("p",null,l.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(a){e.setUpdate(a.target.value,t.key)}}),l.a.createElement("span",null,l.a.createElement(p.a,{className:"faicons",onClick:function(){e.deleteItem(t.key)},icon:"GoTrashcan"}))))});return l.a.createElement("div",null,l.a.createElement(b.a,{duration:300,easing:"ease-in-out"},t))},f=a(4),v=a(14),y=a.n(v),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={items:[],currentItem:{text:"",key:""}},a.addItem=a.addItem.bind(Object(h.a)(Object(h.a)(a))),a.handleInput=a.handleInput.bind(Object(h.a)(Object(h.a)(a))),a.deleteItem=a.deleteItem.bind(Object(h.a)(Object(h.a)(a))),a.setUpdate=a.setUpdate.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t.text){var a=[].concat(Object(r.a)(this.state.items),[t]);this.setState({items:a,currentItem:{text:"",key:""}})}}},{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"deleteItem",value:function(e){var t=this.state.items.filter(function(t){return t.key!==e});this.setState({items:t})}},{key:"setUpdate",value:function(e,t){console.log("items:"+this.state.items);var a=this.state.items;a.map(function(a){a.key===t&&(console.log(a.key+"    "+t),a.text=e)}),this.setState({items:a})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,null,l.a.createElement("div",{className:"MyApp"},l.a.createElement("ul",null,l.a.createElement("li",{className:"logo"},l.a.createElement("img",{src:y.a,alt:"Logo"})),l.a.createElement("li",null,l.a.createElement(f.b,{to:"/",style:{textDecoration:"none",color:"#19a0fa"}},"Home")),l.a.createElement("li",null,l.a.createElement(f.b,{to:"/contact",style:{textDecoration:"none",color:"rgb(252, 123, 3)"}},"Contact Us")),l.a.createElement("li",null,l.a.createElement(f.b,{to:"/about",style:{textDecoration:"none",color:"rgb(252, 123, 3)"}},"About Us"))))),l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},l.a.createElement("input",{type:"text",placeholder:"Enter Task",value:this.state.currentItem.text,onChange:this.handleInput}),l.a.createElement("button",{type:"submit"},"Add")),l.a.createElement("p",null,this.state.items.text),l.a.createElement(E,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate}))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[21,1,2]]]);
//# sourceMappingURL=main.637c047a.chunk.js.map