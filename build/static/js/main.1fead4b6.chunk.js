(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t){e.exports={chain:"https://node.cryptape.com",contractAddress:"0x7cEB7D878a808B943F78a5089675aDe3EebA7F21",fromAddress:"0xD334C73C59ce914e5Ca1D1faF55A6BE264936D04",privateKey:"0xa835a9a9ec103b704ba990d25f51d039f47cb89061bd5fe55a05197f924832c4"}},137:function(e,t,a){e.exports=a.p+"static/media/logo.298dec47.svg"},141:function(e,t,a){e.exports=a(381)},146:function(e,t,a){},148:function(e,t,a){},153:function(e,t,a){},157:function(e,t,a){},159:function(e,t,a){},161:function(e,t,a){},17:function(e,t,a){var f=a(163).default,n=a(134),c=f(n.chain),r=c.base.accounts.privateKeyToAccount(n.privateKey);c.base.accounts.wallet.add(r),e.exports=c},196:function(e,t){},198:function(e,t){},223:function(e,t){},25:function(e,t,a){var f=a(17),n=a(374).abi,c=a(134).contractAddress,r=a(375),o=new f.base.Contract(n,c);e.exports={transaction:r,simpleStoreContract:o}},266:function(e,t){},374:function(e,t){e.exports={abi:[{constant:!1,inputs:[{name:"text",type:"string"},{name:"time",type:"uint256"}],name:"add",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getList",outputs:[{name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"time",type:"uint256"}],name:"get",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"_sender",type:"address"},{indexed:!0,name:"_text",type:"string"},{indexed:!0,name:"_time",type:"uint256"}],name:"Recorded",type:"event"}],bytecode:"608060405234801561001057600080fd5b506105de806100206000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806336555b851461005c578063942b765a146100cf5780639507d39a1461013b575b600080fd5b34801561006857600080fd5b506100cd600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001909291905050506101e1565b005b3480156100db57600080fd5b506100e461031a565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561012757808201518184015260208101905061010c565b505050509050019250505060405180910390f35b34801561014757600080fd5b50610166600480360381019080803590602001909291905050506103af565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101a657808201518184015260208101905061018b565b50505050905090810190601f1680156101d35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020908051906020019061024492919061050d565b5061024f33826104a0565b80826040518082805190602001908083835b6020831015156102865780518252602082019150602081019050602083039250610261565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207fe4af93ca7e370881e6f1b57272e42a3d851d3cc6d951b4f4d2e7a963914468a233604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a35050565b6060600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156103a557602002820191906000526020600020905b815481526020019060010190808311610391575b5050505050905090565b60606000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104945780601f1061046957610100808354040283529160200191610494565b820191906000526020600020905b81548152906001019060200180831161047757829003601f168201915b50505050509050919050565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061054e57805160ff191683800117855561057c565b8280016001018555821561057c579182015b8281111561057b578251825591602001919060010190610560565b5b509050610589919061058d565b5090565b6105af91905b808211156105ab576000816000905550600101610593565b5090565b905600a165627a7a7230582098ae02372b925c91c607cce5e2d87d4b212189f79b146f388e81f822758122690029"}},375:function(e,t,a){var f=a(17),n={from:f.base.accounts.wallet[0].address,privateKey:f.base.accounts.wallet[0].privateKey,nonce:999999,quota:1e6,chainId:1,version:1,validUntilBlock:999999,value:"0x0"};e.exports=n},376:function(e,t,a){},378:function(e,t,a){},381:function(e,t,a){"use strict";a.r(t);var f=a(0),n=a.n(f),c=a(135),r=a.n(c),o=(a(146),a(20)),i=a(21),s=a(23),l=a(22),m=a(24),u=(a(148),a(383)),d=a(384),b=a(385),p=a(136),h=a.n(p),v=a(137),g=a.n(v),E=a(386),w=(a(153),function(e){var t=e.active,a=e.showAdd,f=void 0===a||a;return n.a.createElement("div",{className:"bottomnav__bar--container"},n.a.createElement("div",{className:"bottomnav__button--add",style:{display:f?"flex":"none"}},n.a.createElement(E.a,{to:"/add"},n.a.createElement("svg",{className:"icon","aria-hidden":"true"},n.a.createElement("use",{xlinkHref:"#icon-plus"})))),n.a.createElement("div",{className:"bottomnav__navs--container"},n.a.createElement(E.a,{to:"/",className:"home"===t?"active":""},n.a.createElement("svg",{className:"icon","aria-hidden":"true"},n.a.createElement("use",{xlinkHref:"#icon-home"}))),n.a.createElement(E.a,{to:"/list",className:"list"===t?"active":""},n.a.createElement("svg",{className:"icon","aria-hidden":"true"},n.a.createElement("use",{xlinkHref:"#icon-user"})))))}),x=(a(157),function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"home__logo--container"},n.a.createElement("img",{src:g.a,alt:"logo"}),n.a.createElement("span",{className:"home__logo--text"},"First Forever ")),n.a.createElement("div",{className:"home__slogan--container"},n.a.createElement("h1",{className:"home__slogan--title"},"\u6700\u521d\u5373\u6c38\u6052"),n.a.createElement("p",{className:"home__slogan--text"},"\u4eba\u751f\u6709\u5f88\u591a\u7684\u7b2c\u4e00\u6b21\uff0c\u5982\u7b2c\u4e00\u6b21\u604b\u7231\uff0c\u7b2c\u4e00\u6b21\u627e\u5230\u5de5\u4f5c\uff0c\u7b2c\u4e00\u6b21\u9886\u5230\u5de5\u8d44\u7b49\u7b49\uff0c\u4f46\u662f\u968f\u7740\u65f6\u95f4\u7684\u6d41\u901d\uff0c\u8fd8\u6765\u4e0d\u53ca\u56de\u5473\u5c31\u5df2\u7ecf\u8fc7\u53bb\uff0c\u5982\u679c\u6709\u4e00\u4e2a\u5730\u65b9\u80fd\u8ba9\u4f60\u5b58\u4e0b\u8fd9\u4e00\u523b\u7684\u65f6\u5149\uff0c\u6c38\u6052\u6d41\u4f20\uff0c\u4f60\u613f\u610f\u7559\u4e0b\u4f60\u7684\u65f6\u5149\u5417\uff1f")),n.a.createElement(w,{active:"home"}))}),y=a(139),_=(a(159),function(e){var t=e.text,a=void 0===t?"\u613f\u6b64\u523b\u6c38\u6052":t,f=e.onClick,c=e.disabled,r=void 0!==c&&c;return n.a.createElement("button",{onClick:f,className:"confirm__button--primary ".concat(r?"confirm__button--disabled":""),disabled:r},a)}),N=(a(161),a(25)),k=a(17),O=a.n(k),j=function(e){return(""+e).padStart(2,"0")},S={normal:"\u613f\u6b64\u523b\u6c38\u6052",submitting:"\u4fdd\u5b58\u4e2d",submitted:"\u4fdd\u5b58\u6210\u529f"},C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var f=arguments.length,n=new Array(f),c=0;c<f;c++)n[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={text:"",time:new Date,submitText:S.normal,errorText:""},a.handleInput=function(e){a.setState({text:e.target.value})},a.handleSubmit=function(e){var t=a.state,f=t.time,n=t.text;O.a.base.getBlockNumber().then(function(e){var t=Object(y.a)({},N.transaction,{validUntilBlock:+e+88});return a.setState({submitText:S.submitting}),N.simpleStoreContract.methods.add(n,+f).send(t)}).then(function(e){if(e.hash)return O.a.listeners.listenToTransactionReceipt(e.hash);throw new Error("No Transaction Hash Received")}).then(function(e){if(e.errorMessage)throw new Error(e.errorMessage);a.setState({submitText:S.submitted})}).catch(function(e){a.setState({errorText:JSON.stringify(e)})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.time,a=e.text,f=e.submitText,c=e.errorText;return n.a.createElement("div",{className:"add__content--container"},n.a.createElement("div",{className:"add__time--container"},n.a.createElement("span",{className:"add__time--year"},t.getFullYear()),":",n.a.createElement("span",{className:"add__time--month"},t.getMonth()+1),":",n.a.createElement("span",{className:"add__time--day"},j(t.getDate())),":",n.a.createElement("span",{className:"add__time--hour"},j(t.getHours())),":",n.a.createElement("span",{className:"add__time--min"},j(t.getMinutes()))),n.a.createElement("div",{className:"add__content--prompt"},n.a.createElement("svg",{className:"icon","aria-hidden":"true"},n.a.createElement("use",{xlinkHref:"#icon-icon-time"})),n.a.createElement("span",null,"\u628a\u4f60\u89c9\u5f97\u91cd\u8981\u7684\u4e00\u523b\uff0c\u5b58\u653e\u5728\u94fe\u4e0a\uff0c\u6c38\u8fdc\u4fdd\u5b58\uff0c\u968f\u65f6\u67e5\u770b")),n.a.createElement("textarea",{cols:"32",rows:"10",className:"add__content--textarea",placeholder:"\u7559\u4e0b\u4f60\u7684\u65f6\u5149\u5427...",onChange:this.handleInput,value:a}),n.a.createElement(_,{text:f,onClick:this.handleSubmit,disabled:f!==S.normal}),c&&n.a.createElement("span",{className:"warning"},c),n.a.createElement(w,{showAdd:!1}))}}]),t}(n.a.Component);a(376);var T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var f=arguments.length,n=new Array(f),c=0;c<f;c++)n[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={time:0,text:"",errorText:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.time;t?N.simpleStoreContract.methods.get(t).call({from:O.a.base.accounts.wallet[0].address}).then(function(a){e.setState({time:t,text:a})}).catch(function(t){return e.setState({errorText:JSON.stringify(t)})}):this.setState({errorText:"No Time Specified"})}},{key:"render",value:function(){var e=this.state,t=e.time,a=e.text,f=new Date(+t);return t?n.a.createElement("div",{className:"show__container"},n.a.createElement("span",{className:"show__time"},f.toLocaleString()),n.a.createElement("div",{className:"show__text"},a),n.a.createElement("img",{src:"https://picsum.photos/200/100?random",alt:"rand_img",className:"show__photo"}),n.a.createElement(w,{active:"list"})):n.a.createElement("div",{style:{textAlign:"center"}},"\u6b63\u5728\u52a0\u8f7d\u60a8\u7684\u56de\u5fc6")}}]),t}(n.a.Component);a(378);var D=function(e){var t=e.time,a=e.text,f=e.hasYearLabel,c=new Date(+t);return n.a.createElement("div",{className:"list__record--container"},f?n.a.createElement("div",{className:"list__record--year"},c.getFullYear()):null,n.a.createElement("span",null,"".concat(c.getMonth()+1,"-").concat(c.getDate()," ").concat(c.getHours(),":").concat(c.getMinutes())),n.a.createElement(E.a,{to:"/show/".concat(t)},n.a.createElement("div",null,a)))},A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var f=arguments.length,n=new Array(f),c=0;c<f;c++)n[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={times:[],texts:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=O.a.base.accounts.wallet[0]?O.a.base.accounts.wallet[0].address:"";N.simpleStoreContract.methods.getList().call({from:t}).then(function(a){return a.reverse(),e.setState({times:a}),Promise.all(a.map(function(e){return N.simpleStoreContract.methods.get(e).call({from:t})}))}).then(function(t){e.setState({texts:t})}).catch(console.error)}},{key:"render",value:function(){var e=this.state,t=e.times,a=e.texts;return n.a.createElement("div",{className:"list__record--page"},t.map(function(e,f){return n.a.createElement(D,{time:e,text:a[f],key:e,hasYearLabel:0===f||new Date(+e).getFullYear()!==new Date(+t[f-1]).getFullYear()})}),n.a.createElement(w,{active:"list"}))}}]),t}(n.a.Component),M=h()(),F=function(e){return n.a.createElement(u.a,{history:M},n.a.createElement(d.a,null,n.a.createElement(b.a,{path:"/",exact:!0,component:x}),n.a.createElement(b.a,{path:"/add",exact:!0,component:C}),n.a.createElement(b.a,{path:"/list",exact:!0,component:A}),n.a.createElement(b.a,{path:"/show/:time",exact:!0,component:T})))},B=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(F,null)}}]),t}(f.Component),H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(n.a.createElement(B,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");H?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):L(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):L(e)})}}()}},[[141,2,1]]]);
//# sourceMappingURL=main.1fead4b6.chunk.js.map