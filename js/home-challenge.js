(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home-challenge"],{"04b7":function(t,e,n){},"057f":function(t,e,n){var i=n("fc6a"),r=n("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):r(i(t))}},"0653":function(t,e,n){"use strict";n("68ef"),n("5c56")},"14c3":function(t,e,n){var i=n("c6b6"),r=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"1dde":function(t,e,n){var i=n("d039"),r=n("b622"),o=n("2d00"),a=r("species");t.exports=function(t){return o>=51||!i((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,n){"use strict";var i=n("6eeb"),r=n("825a"),o=n("d039"),a=n("ad6d"),s="toString",c=RegExp.prototype,l=c[s],u=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),f=l.name!=s;(u||f)&&i(RegExp.prototype,s,(function(){var t=r(this),e=String(t.source),n=t.flags,i=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?a.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},"2b28":function(t,e,n){"use strict";n("68ef"),n("7c7f")},"2fcb":function(t,e,n){},"34e9":function(t,e,n){"use strict";var i=n("2638"),r=n.n(i),o=n("d282"),a=n("ba31"),s=n("b1d2"),c=Object(o["a"])("cell-group"),l=c[0],u=c[1];function f(t,e,n,i){var o,c,l=t("div",r()([{class:[u(),(o={},o[s["e"]]=e.border,o)]},Object(a["b"])(i,!0)]),[null===(c=n.default)||void 0===c?void 0:c.call(n)]);return e.title||n.title?t("div",[t("div",{class:u("title")},[n.title?n.title():e.title]),l]):l}f.props={title:String,border:{type:Boolean,default:!0}},e["a"]=l(f)},"3ca3":function(t,e,n){"use strict";var i=n("6547").charAt,r=n("69f3"),o=n("7dd0"),a="String Iterator",s=r.set,c=r.getterFor(a);o(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,r=e.index;return r>=n.length?{value:void 0,done:!0}:(t=i(n,r),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,n){"use strict";var i=n("0366"),r=n("7b0b"),o=n("9bdd"),a=n("e95a"),s=n("50c4"),c=n("8418"),l=n("35a1");t.exports=function(t){var e,n,u,f,d,h,b=r(t),g="function"==typeof this?this:Array,v=arguments.length,p=v>1?arguments[1]:void 0,S=void 0!==p,m=l(b),y=0;if(S&&(p=i(p,v>2?arguments[2]:void 0,2)),void 0==m||g==Array&&a(m))for(e=s(b.length),n=new g(e);e>y;y++)h=S?p(b[y],y):b[y],c(n,y,h);else for(f=m.call(b),d=f.next,n=new g;!(u=d.call(f)).done;y++)h=S?o(f,p,[u.value,y],!0):u.value,c(n,y,h);return n.length=y,n}},5246:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("8a0b")},5319:function(t,e,n){"use strict";var i=n("d784"),r=n("825a"),o=n("7b0b"),a=n("50c4"),s=n("a691"),c=n("1d80"),l=n("8aa5"),u=n("14c3"),f=Math.max,d=Math.min,h=Math.floor,b=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};i("replace",2,(function(t,e,n,i){var p=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,S=i.REPLACE_KEEPS_$0,m=p?"$":"$0";return[function(n,i){var r=c(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,r,i):e.call(String(r),n,i)},function(t,i){if(!p&&S||"string"===typeof i&&-1===i.indexOf(m)){var o=n(e,t,this,i);if(o.done)return o.value}var c=r(t),h=String(this),b="function"===typeof i;b||(i=String(i));var g=c.global;if(g){var x=c.unicode;c.lastIndex=0}var C=[];while(1){var w=u(c,h);if(null===w)break;if(C.push(w),!g)break;var T=String(w[0]);""===T&&(c.lastIndex=l(h,a(c.lastIndex),x))}for(var E="",O=0,k=0;k<C.length;k++){w=C[k];for(var I=String(w[0]),A=f(d(s(w.index),h.length),0),P=[],L=1;L<w.length;L++)P.push(v(w[L]));var B=w.groups;if(b){var D=[I].concat(P,A,h);void 0!==B&&D.push(B);var _=String(i.apply(void 0,D))}else _=y(I,h,A,P,B,i);A>=O&&(E+=h.slice(O,A)+_,O=A+I.length)}return E+h.slice(O)}];function y(t,n,i,r,a,s){var c=i+t.length,l=r.length,u=g;return void 0!==a&&(a=o(a),u=b),e.call(s,u,(function(e,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,i);case"'":return n.slice(c);case"<":s=a[o.slice(1,-1)];break;default:var u=+o;if(0===u)return e;if(u>l){var f=h(u/10);return 0===f?e:f<=l?void 0===r[f-1]?o.charAt(1):r[f-1]+o.charAt(1):e}s=r[u-1]}return void 0===s?"":s}))}}))},"5c56":function(t,e,n){},6547:function(t,e,n){var i=n("a691"),r=n("1d80"),o=function(t){return function(e,n){var o,a,s=String(r(e)),c=i(n),l=s.length;return c<0||c>=l?t?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(t,e,n){var i=n("861d"),r=n("e8b5"),o=n("b622"),a=o("species");t.exports=function(t,e){var n;return r(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?i(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"6b41":function(t,e,n){"use strict";var i=n("2638"),r=n.n(i),o=n("d282"),a=n("a142"),s=n("ba31"),c=n("b1d2"),l=n("ad06"),u=Object(o["a"])("nav-bar"),f=u[0],d=u[1];function h(t,e,n,i){var o;function u(){return n.left?n.left():[e.leftArrow&&t(l["a"],{class:d("arrow"),attrs:{name:"arrow-left"}}),e.leftText&&t("span",{class:d("text")},[e.leftText])]}function f(){return n.right?n.right():e.rightText?t("span",{class:d("text")},[e.rightText]):void 0}return t("div",r()([{style:{zIndex:e.zIndex},class:[d({fixed:e.fixed}),(o={},o[c["a"]]=e.border,o)]},Object(s["b"])(i)]),[t("div",{class:d("left"),on:{click:i.listeners["click-left"]||a["f"]}},[u()]),t("div",{class:[d("title"),"van-ellipsis"]},[n.title?n.title():e.title]),t("div",{class:d("right"),on:{click:i.listeners["click-right"]||a["f"]}},[f()])])}h.props={title:String,fixed:Boolean,leftText:String,rightText:String,leftArrow:Boolean,border:{type:Boolean,default:!0},zIndex:{type:Number,default:1}},e["a"]=f(h)},"746f":function(t,e,n){var i=n("428f"),r=n("5135"),o=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});r(e,t)||a(e,t,{value:o.f(t)})}},"7c7f":function(t,e,n){},8418:function(t,e,n){"use strict";var i=n("c04e"),r=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var a=i(e);a in t?r.f(t,a,o(0,n)):t[a]=n}},"8a0b":function(t,e,n){},"8aa5":function(t,e,n){"use strict";var i=n("6547").charAt;t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},9263:function(t,e,n){"use strict";var i=n("ad6d"),r=n("9f7f"),o=RegExp.prototype.exec,a=String.prototype.replace,s=o,c=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=c||u||l;f&&(s=function(t){var e,n,r,s,f=this,d=l&&f.sticky,h=i.call(f),b=f.source,g=0,v=t;return d&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),v=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(b="(?: "+b+")",v=" "+v,g++),n=new RegExp("^(?:"+b+")",h)),u&&(n=new RegExp("^"+b+"$(?!\\s)",h)),c&&(e=f.lastIndex),r=o.call(d?n:f,v),d?r?(r.input=r.input.slice(g),r[0]=r[0].slice(g),r.index=f.lastIndex,f.lastIndex+=r[0].length):f.lastIndex=0:c&&r&&(f.lastIndex=f.global?r.index+r[0].length:e),u&&r&&r.length>1&&a.call(r[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(r[s]=void 0)})),r}),t.exports=s},"9ed2":function(t,e,n){"use strict";var i=n("2638"),r=n.n(i),o=n("d282"),a=n("ba31"),s=Object(o["a"])("divider"),c=s[0],l=s[1];function u(t,e,n,i){var o;return t("div",r()([{attrs:{role:"separator"},style:{borderColor:e.borderColor},class:l((o={dashed:e.dashed,hairline:e.hairline},o["content-"+e.contentPosition]=n.default,o))},Object(a["b"])(i,!0)]),[n.default&&n.default()])}u.props={dashed:Boolean,hairline:{type:Boolean,default:!0},contentPosition:{type:String,default:"center"}},e["a"]=c(u)},"9f7f":function(t,e,n){"use strict";var i=n("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=i((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a4d3:function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),o=n("d066"),a=n("c430"),s=n("83ab"),c=n("4930"),l=n("fdbf"),u=n("d039"),f=n("5135"),d=n("e8b5"),h=n("861d"),b=n("825a"),g=n("7b0b"),v=n("fc6a"),p=n("c04e"),S=n("5c6c"),m=n("7c73"),y=n("df75"),x=n("241c"),C=n("057f"),w=n("7418"),T=n("06cf"),E=n("9bf2"),O=n("d1e7"),k=n("9112"),I=n("6eeb"),A=n("5692"),P=n("f772"),L=n("d012"),B=n("90e3"),D=n("b622"),_=n("e538"),j=n("746f"),R=n("d44e"),$=n("69f3"),q=n("b727").forEach,N=P("hidden"),M="Symbol",H="prototype",Q=D("toPrimitive"),F=$.set,z=$.getterFor(M),U=Object[H],G=r.Symbol,V=o("JSON","stringify"),J=T.f,K=E.f,W=C.f,X=O.f,Y=A("symbols"),Z=A("op-symbols"),tt=A("string-to-symbol-registry"),et=A("symbol-to-string-registry"),nt=A("wks"),it=r.QObject,rt=!it||!it[H]||!it[H].findChild,ot=s&&u((function(){return 7!=m(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=J(U,e);i&&delete U[e],K(t,e,n),i&&t!==U&&K(U,e,i)}:K,at=function(t,e){var n=Y[t]=m(G[H]);return F(n,{type:M,tag:t,description:e}),s||(n.description=e),n},st=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},ct=function(t,e,n){t===U&&ct(Z,e,n),b(t);var i=p(e,!0);return b(n),f(Y,i)?(n.enumerable?(f(t,N)&&t[N][i]&&(t[N][i]=!1),n=m(n,{enumerable:S(0,!1)})):(f(t,N)||K(t,N,S(1,{})),t[N][i]=!0),ot(t,i,n)):K(t,i,n)},lt=function(t,e){b(t);var n=v(e),i=y(n).concat(bt(n));return q(i,(function(e){s&&!ft.call(n,e)||ct(t,e,n[e])})),t},ut=function(t,e){return void 0===e?m(t):lt(m(t),e)},ft=function(t){var e=p(t,!0),n=X.call(this,e);return!(this===U&&f(Y,e)&&!f(Z,e))&&(!(n||!f(this,e)||!f(Y,e)||f(this,N)&&this[N][e])||n)},dt=function(t,e){var n=v(t),i=p(e,!0);if(n!==U||!f(Y,i)||f(Z,i)){var r=J(n,i);return!r||!f(Y,i)||f(n,N)&&n[N][i]||(r.enumerable=!0),r}},ht=function(t){var e=W(v(t)),n=[];return q(e,(function(t){f(Y,t)||f(L,t)||n.push(t)})),n},bt=function(t){var e=t===U,n=W(e?Z:v(t)),i=[];return q(n,(function(t){!f(Y,t)||e&&!f(U,t)||i.push(Y[t])})),i};if(c||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=B(t),n=function(t){this===U&&n.call(Z,t),f(this,N)&&f(this[N],e)&&(this[N][e]=!1),ot(this,e,S(1,t))};return s&&rt&&ot(U,e,{configurable:!0,set:n}),at(e,t)},I(G[H],"toString",(function(){return z(this).tag})),I(G,"withoutSetter",(function(t){return at(B(t),t)})),O.f=ft,E.f=ct,T.f=dt,x.f=C.f=ht,w.f=bt,_.f=function(t){return at(D(t),t)},s&&(K(G[H],"description",{configurable:!0,get:function(){return z(this).description}}),a||I(U,"propertyIsEnumerable",ft,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:G}),q(y(nt),(function(t){j(t)})),i({target:M,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var n=G(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!s},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:dt}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ht,getOwnPropertySymbols:bt}),i({target:"Object",stat:!0,forced:u((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(g(t))}}),V){var gt=!c||u((function(){var t=G();return"[null]"!=V([t])||"{}"!=V({a:t})||"{}"!=V(Object(t))}));i({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,n){var i,r=[t],o=1;while(arguments.length>o)r.push(arguments[o++]);if(i=e,(h(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!st(e))return e}),r[1]=e,V.apply(null,r)}})}G[H][Q]||k(G[H],Q,G[H].valueOf),R(G,M),L[N]=!0},a630:function(t,e,n){var i=n("23e7"),r=n("4df4"),o=n("1c7e"),a=!o((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:a},{from:r})},aaaf:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"challenge"}},["menu"===t.scene?n("div",{staticClass:"challenge-menu"},[n("p",{staticStyle:{color:"#ffffff"}},[t._v("{ 扣 题 }")]),t._m(0),n("div",{staticClass:"challenge-menu-item"},[n("van-button",{attrs:{round:"",type:"primary",size:"large",disabled:t.btnDisabled.startChallenge},on:{click:t.startChallenge}},[t._v("开始挑战")])],1),n("div",{staticClass:"challenge-menu-item"},[n("van-button",{attrs:{round:"",type:"default",size:"large"},on:{click:t.backToHome}},[t._v("返回主页")])],1),n("p",{staticClass:"challenge-tips"},[t._v("注①：游客也可以挑战，但战绩不计入全网排名")]),n("p",{staticClass:"challenge-tips"},[t._v("注②：登录后，挑战 1 次会消耗 1 体力值")]),n("p",{staticClass:"challenge-tips"},[t._v("注③：休息休息，体力值会在第二天满血恢复哦")])]):"start"===t.scene?n("div",{staticClass:"challenge-start"},[n("van-nav-bar",{attrs:{title:"已用 "+t.sceneStart.totalTime+" 秒","left-text":t.sceneStart.leftText,"right-text":t.sceneStart.rightText,fixed:""},on:{"click-left":t.onLeftClickForChallengeStart,"click-right":t.onRightClickForChallengeStart}}),n("van-cell",{staticClass:"challenge-question",attrs:{icon:"question-o",title:t.sceneStart.questions[t.sceneStart.currentQuestionIndex]["question"]}}),n("van-radio-group",{staticClass:"challenge-option",attrs:{"checked-color":"#07c160"},model:{value:t.sceneStart.answers[t.sceneStart.currentQuestionIndex],callback:function(e){t.$set(t.sceneStart.answers,t.sceneStart.currentQuestionIndex,e)},expression:"sceneStart.answers[sceneStart.currentQuestionIndex]"}},[n("van-cell-group",t._l(t.sceneStart.questions[t.sceneStart.currentQuestionIndex]["content"],(function(e,i){return n("van-cell",{key:i,attrs:{title:"("+(i+1)+") "+e.option,clickable:""},on:{click:function(e){t.sceneStart.answers[t.sceneStart.currentQuestionIndex]=i}}},[n("van-radio",{attrs:{slot:"right-icon",name:i},slot:"right-icon"})],1)})),1)],1)],1):"end"===t.scene?n("div",{staticClass:"challenge-end"},[n("van-nav-bar",{attrs:{title:"总共用时 "+t.sceneEnd.totalTime+" 秒","left-text":"返回主页","right-text":"再次挑战",fixed:""},on:{"click-left":t.backToHome,"click-right":t.challengeAgain}}),n("div",{staticClass:"end-score"},[n("div",{staticClass:"end-score-label"},[t._v("本次挑战得分")]),n("span",{staticClass:"end-score-value"},[t._v(t._s(t.sceneEnd.score)+" 分")])]),t._l(t.sceneStart.questions,(function(e,i){return n("van-cell-group",{key:i,attrs:{title:" "}},[n("van-cell",{attrs:{icon:"question-o",title:e.question}},[t.sceneEnd.results[i]?n("van-icon",{staticStyle:{"line-height":"inherit","padding-left":"5px","font-weight":"bolder"},attrs:{slot:"right-icon",name:"success",color:"#00ff00"},slot:"right-icon"}):n("van-icon",{staticStyle:{"line-height":"inherit","padding-left":"5px","font-weight":"bolder"},attrs:{slot:"right-icon",name:"cross",color:"#ff0000"},slot:"right-icon"})],1),n("van-radio-group",{staticClass:"challenge-option",attrs:{disabled:""}},[n("van-cell-group",t._l(e.content,(function(e,r){return n("van-cell",{key:r,attrs:{title:"("+(r+1)+") "+e.option}},[t.sceneStart.answers[i]===r?n("van-radio",{attrs:{slot:"right-icon"},slot:"right-icon"}):t._e()],1)})),1)],1)],1)})),n("van-divider",{staticClass:"challenge-divider"},[t._v(t._s(t.version))])],2):t._e()])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"challenge-desc"},[t._v("开始挑战后，系统会随机给出 10 道题目并开始计时，挑战目标是在最短时间内答对最多题目。答对得 10 分，答错不得分。"),n("br"),t._v("答完提交后，系统会根据本次所得分数和所用时间自动计算全网排名。"),n("br"),n("br"),t._v("想成为全网 No.1 吗？还在等什么！")])}];n("fb6a"),n("ac1f"),n("5319");function o(t){if(Array.isArray(t))return t}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0");function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function c(t){return o(t)||a(t)||s()}n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75"),n("e3b3"),n("bc1b"),n("2fcb");var l,u=n("c31d"),f=n("2b0e"),d=n("d282"),h=n("ea8e"),b=n("b1d2"),g=n("6605"),v=n("b650"),p=Object(d["a"])("dialog"),S=p[0],m=p[1],y=p[2],x=S({mixins:[Object(g["a"])()],props:{title:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.value&&(this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,(function(n){!1!==n&&e.loading[t]&&e.onClose(t),e.loading.confirm=!1,e.loading.cancel=!1}))):this.onClose(t))},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){this.$emit("opened")},onClosed:function(){this.$emit("closed")},genButtons:function(){var t,e=this,n=this.$createElement,i=this.showCancelButton&&this.showConfirmButton;return n("div",{class:[b["d"],m("footer",{buttons:i})]},[this.showCancelButton&&n(v["a"],{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||y("cancel")},class:m("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){e.handleAction("cancel")}}}),this.showConfirmButton&&n(v["a"],{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||y("confirm")},class:[m("confirm"),(t={},t[b["b"]]=i,t)],style:{color:this.confirmButtonColor},on:{click:function(){e.handleAction("confirm")}}})])}},render:function(){var t,e=arguments[0];if(this.shouldRender){var n=this.message,i=this.messageAlign,r=this.slots(),o=this.slots("title")||this.title,a=o&&e("div",{class:m("header",{isolated:!n&&!r})},[o]),s=(r||n)&&e("div",{class:m("content")},[r||e("div",{domProps:{innerHTML:n},class:m("message",(t={"has-title":o},t[i]=i,t))})]);return e("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||n},class:[m(),this.className],style:{width:Object(h["a"])(this.width)}},[a,s,this.genButtons()])])}}}),C=n("a142");function w(t){return document.body.contains(t)}function T(){l&&l.$destroy(),l=new(f["a"].extend(x))({el:document.createElement("div"),propsData:{lazyRender:!1}}),l.$on("input",(function(t){l.value=t}))}function E(t){return C["e"]?Promise.resolve():new Promise((function(e,n){l&&w(l.$el)||T(),Object(u["a"])(l,E.currentOptions,t,{resolve:e,reject:n})}))}E.defaultOptions={value:!0,title:"",width:"",message:"",overlay:!0,className:"",lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(t){l["confirm"===t?"resolve":"reject"](t)}},E.alert=E,E.confirm=function(t){return E(Object(u["a"])({showCancelButton:!0},t))},E.close=function(){l&&(l.value=!1)},E.setDefaultOptions=function(t){Object(u["a"])(E.currentOptions,t)},E.resetDefaultOptions=function(){E.currentOptions=Object(u["a"])({},E.defaultOptions)},E.resetDefaultOptions(),E.install=function(){f["a"].use(x)},E.Component=x,f["a"].prototype.$dialog=E;var O=E,k=(n("2b28"),n("9ed2")),I=(n("c3a6"),n("ad06")),A=(n("e7e5"),n("d399")),P=n("9884"),L=Object(d["a"])("radio-group"),B=L[0],D=L[1],_=B({mixins:[Object(P["b"])("vanRadio")],props:{value:null,disabled:Boolean,checkedColor:String,iconSize:[Number,String]},watch:{value:function(t){this.$emit("change",t)}},render:function(){var t=arguments[0];return t("div",{class:D(),attrs:{role:"radiogroup"}},[this.slots()])}}),j=(n("dde9"),function(t){var e=t.parent,n=t.bem,i=t.role;return{mixins:[Object(P["a"])(e)],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},iconStyle:function(){var t=this.checkedColor||this.parent&&this.parent.checkedColor;if(t&&this.checked&&!this.isDisabled)return{borderColor:t,backgroundColor:t}},tabindex:function(){return this.isDisabled||"radio"===i&&!this.checked?-1:0}},methods:{onClick:function(t){var e=t.target,n=this.$refs.icon,i=n===e||n.contains(e);this.isDisabled||!i&&this.labelDisabled||this.toggle(),this.$emit("click",t)},genIcon:function(){var t=this.$createElement,e=this.checked,i=this.iconSize||this.parent&&this.parent.iconSize;return t("div",{ref:"icon",class:n("icon",[this.shape,{disabled:this.isDisabled,checked:e}]),style:{fontSize:Object(h["a"])(i)}},[this.slots("icon",{checked:e})||t(I["a"],{attrs:{name:"success"},style:this.iconStyle})])},genLabel:function(){var t=this.$createElement,e=this.slots();if(e)return t("span",{class:n("label",[this.labelPosition,{disabled:this.isDisabled}])},[e])}},render:function(){var t=arguments[0],e=[this.genIcon()];return"left"===this.labelPosition?e.unshift(this.genLabel()):e.push(this.genLabel()),t("div",{attrs:{role:i,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:n({disabled:this.isDisabled,"label-disabled":this.labelDisabled}),on:{click:this.onClick}},[e])}}}),R=Object(d["a"])("radio"),$=R[0],q=R[1],N=$({mixins:[j({bem:q,role:"radio",parent:"vanRadio"})],computed:{currentValue:{get:function(){return this.parent?this.parent.value:this.value},set:function(t){(this.parent||this).$emit("input",t)}},checked:function(){return this.currentValue===this.name}},methods:{toggle:function(){this.currentValue=this.name}}}),M=(n("0653"),n("34e9")),H=(n("c194"),n("7744")),Q=(n("5246"),n("6b41")),F=(n("66b9"),n("db49")),z=n("e0eb"),U=[{question:"HTML 的全称是什么？",content:[{option:"Hyper XML 5.0",bool:!1},{option:"How To Make Love",bool:!1},{option:"Hyper Text Markup Language",bool:!0},{option:"Hyper Tag Makefile Language",bool:!1}]},{question:"数据库 MySQL 的默认端口是？",content:[{option:"3306",bool:!0},{option:"8080",bool:!1},{option:"80",bool:!1},{option:"443",bool:!1}]},{question:"PHP 的全称是什么？",content:[{option:"Pai Huang Pian",bool:!1},{option:"Personal Home Page",bool:!1},{option:"Pretty Huge Penis",bool:!1},{option:"PHP: Hypertext Preprocessor",bool:!0}]},{question:"易语言的文件扩展名是？",content:[{option:".yi",bool:!1},{option:".e",bool:!0},{option:".1",bool:!1},{option:".i",bool:!1}]},{question:"网络安全领域常说的 0day 是指？",content:[{option:"著名软件破解组织",bool:!1},{option:"黑客头目",bool:!1},{option:"暗网暗号",bool:!1},{option:"未公开的漏洞",bool:!0}]},{question:"iapp 编写的软件可以运行在什么平台上？",content:[{option:"Windows",bool:!1},{option:"Linux",bool:!1},{option:"MacOS",bool:!1},{option:"Android",bool:!0},{option:"iOS",bool:!1}]},{question:"IIS 是什么？",content:[{option:"美国黑客组织",bool:!1},{option:"黑客攻击工具",bool:!1},{option:"Web 服务器软件",bool:!0},{option:"Linux 服务器软件",bool:!1}]},{question:"Kali 是基于哪个 Linux 发行版衍生出来的？",content:[{option:"Debian",bool:!0},{option:"CentOS",bool:!1},{option:"Arch Linux",bool:!1},{option:"MacOS",bool:!1}]},{question:"sqlmap 是一个著名的渗透测试工具，它是用什么语言编写的？",content:[{option:"PHP",bool:!1},{option:"C",bool:!1},{option:"Python",bool:!0},{option:"Java",bool:!1}]},{question:"以下 PHP 代码，语法完全正确的是？",content:[{option:"echo `你好`;",bool:!1},{option:"echo “你好”；",bool:!1},{option:'echo "你好";',bool:!0},{option:"echo (你好);",bool:!1}]}];f["a"].use(v["a"]),f["a"].use(Q["a"]),f["a"].use(H["a"]),f["a"].use(M["a"]),f["a"].use(N),f["a"].use(_),f["a"].use(A["a"]),f["a"].use(I["a"]),f["a"].use(k["a"]);var G=10,V={data:function(){return{version:"",scene:"menu",btnDisabled:{startChallenge:!1,submitChallenge:!1},sceneStart:{questions:[],answers:[],currentQuestionIndex:0,totalTime:0,totalTimeIntervalID:0,challengeID:"",leftText:"",rightText:""},sceneEnd:{score:0,totalTime:0,results:[]}}},created:function(){this.version="扣题 v".concat(F["a"].version),document.body.style.minHeight="".concat(window.innerHeight,"px"),document.body.style.backgroundImage="linear-gradient(135deg, #CE9FFC 10%, #7367F0 100%)",this.$store.state.system.showTabbar=!1},destroyed:function(){document.body.style.minHeight="",document.body.style.backgroundImage="",this.$store.state.system.showTabbar=!0,clearInterval(this.sceneStart.totalTimeIntervalID)},methods:{backToHome:function(){this.$router.replace("/")},startChallenge:function(){var t=this;this.$store.state.user?(this.btnDisabled.startChallenge=!0,z["a"].ajaxGet({url:F["a"].api.gameChallenge,callback:function(e){z["a"].setLocalStorageByKey("user",e.user_info),t.$store.state.user=e.user_info,t.btnDisabled.startChallenge=!1,t.sceneStart.challengeID=e.challenge_id,t.sceneStart.questions=e.questions,t.afterStartChallenge()}})):(this.sceneStart.questions=this.initLocalQuestionBank(),this.afterStartChallenge())},afterStartChallenge:function(){var t=this;this.scene="start",this.refreshChallengeStartNavBar(),this.sceneStart.totalTimeIntervalID=setInterval((function(){t.sceneStart.totalTime++}),1e3)},refreshChallengeStartNavBar:function(){0===this.sceneStart.currentQuestionIndex?(this.sceneStart.leftText="放弃",this.sceneStart.rightText="下一题"):this.sceneStart.currentQuestionIndex===this.sceneStart.questions.length-1?(this.sceneStart.leftText="上一题",this.sceneStart.rightText="提交"):(this.sceneStart.leftText="上一题",this.sceneStart.rightText="下一题")},onLeftClickForChallengeStart:function(){var t=this;this.sceneStart.currentQuestionIndex>0?(this.sceneStart.currentQuestionIndex--,this.refreshChallengeStartNavBar()):0===this.sceneStart.currentQuestionIndex&&O.confirm({title:"温馨提示",message:"三思而后行，你确定要放弃本次挑战吗？"}).then((function(){t.challengeAgain()})).catch((function(){}))},onRightClickForChallengeStart:function(){if(this.sceneStart.currentQuestionIndex<this.sceneStart.questions.length-1)this.sceneStart.currentQuestionIndex++,this.refreshChallengeStartNavBar();else if(this.sceneStart.currentQuestionIndex===this.sceneStart.questions.length-1){for(var t=0,e=0;e<this.sceneStart.questions.length;e++)void 0===this.sceneStart.answers[e]&&t++;if(t>0)return void Object(A["a"])("你还有 ".concat(t," 道题目未完成，抓紧时间哦，加油！"));this.submitChallenge()}},submitChallenge:function(){var t=this;this.btnDisabled.submitChallenge||(clearInterval(this.sceneStart.totalTimeIntervalID),this.$store.state.user&&this.sceneStart.challengeID?(this.btnDisabled.submitChallenge=!0,z["a"].ajaxPost({url:F["a"].api.gameChallengeSubmit,data:{challenge_id:this.sceneStart.challengeID,answers:JSON.stringify(this.sceneStart.answers)},callback:function(e){t.btnDisabled.submitChallenge=!1,t.sceneEnd.score=e.score,t.sceneEnd.totalTime=e.total_time,t.sceneEnd.results=e.results,t.afterSubmitChallenge()}})):(this.submitLocalChallenge(),this.afterSubmitChallenge()))},afterSubmitChallenge:function(){this.scene="end"},initLocalQuestionBank:function(){for(var t=c(U),e=t.slice(0),n=0;n<e.length;n++){var i=Math.floor(Math.random()*(n+1)),r=[e[i],e[n]];e[n]=r[0],e[i]=r[1]}for(var o=0;o<e.length;o++)for(var a=0;a<e[o]["content"].length;a++){var s=Math.floor(Math.random()*(a+1)),l=[e[o]["content"][s],e[o]["content"][a]];e[o]["content"][a]=l[0],e[o]["content"][s]=l[1]}return e},submitLocalChallenge:function(){for(var t=0;t<this.sceneStart.questions.length;t++){var e=this.sceneStart.answers[t],n=this.sceneStart.questions[t]["content"];void 0!==n[e]&&n[e]["bool"]?(this.sceneEnd.score+=G,this.sceneEnd.results[t]=!0):this.sceneEnd.results[t]=!1}this.sceneEnd.totalTime=this.sceneStart.totalTime},challengeAgain:function(){clearInterval(this.sceneStart.totalTimeIntervalID),this.btnDisabled.startChallenge=!1,this.btnDisabled.submitChallenge=!1,this.sceneStart.questions=[],this.sceneStart.answers=[],this.sceneStart.currentQuestionIndex=0,this.sceneStart.totalTime=0,this.sceneStart.totalTimeIntervalID=0,this.sceneStart.challengeID="",this.sceneEnd.score=0,this.sceneEnd.totalTime=0,this.sceneEnd.results=[],this.scene="menu"}}},J=V,K=(n("d927"),n("2877")),W=Object(K["a"])(J,i,r,!1,null,null,null);e["default"]=W.exports},ac1f:function(t,e,n){"use strict";var i=n("23e7"),r=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,n){var i=n("83ab"),r=n("d039"),o=n("5135"),a=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(o(s,t))return s[t];e||(e={});var n=[][t],l=!!o(e,"ACCESSORS")&&e.ACCESSORS,u=o(e,0)?e[0]:c,f=o(e,1)?e[1]:void 0;return s[t]=!!n&&!r((function(){if(l&&!i)return!0;var t={length:-1};l?a(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,u,f)}))}},b727:function(t,e,n){var i=n("0366"),r=n("44ad"),o=n("7b0b"),a=n("50c4"),s=n("65f0"),c=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,f=6==t,d=5==t||f;return function(h,b,g,v){for(var p,S,m=o(h),y=r(m),x=i(b,g,3),C=a(y.length),w=0,T=v||s,E=e?T(h,C):n?T(h,0):void 0;C>w;w++)if((d||w in y)&&(p=y[w],S=x(p,w,m),t))if(e)E[w]=S;else if(S)switch(t){case 3:return!0;case 5:return p;case 6:return w;case 2:c.call(E,p)}else if(u)return!1;return f?-1:l||u?u:E}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},c3a6:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743")},d28b:function(t,e,n){var i=n("746f");i("iterator")},d784:function(t,e,n){"use strict";n("ac1f");var i=n("6eeb"),r=n("d039"),o=n("b622"),a=n("9263"),s=n("9112"),c=o("species"),l=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=o("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),h=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var b=o(t),g=!r((function(){var e={};return e[b]=function(){return 7},7!=""[t](e)})),v=g&&!r((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[b]=/./[b]),n.exec=function(){return e=!0,null},n[b](""),!e}));if(!g||!v||"replace"===t&&(!l||!u||d)||"split"===t&&!h){var p=/./[b],S=n(b,""[t],(function(t,e,n,i,r){return e.exec===a?g&&!r?{done:!0,value:p.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),m=S[0],y=S[1];i(String.prototype,t,m),i(RegExp.prototype,b,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}f&&s(RegExp.prototype[b],"sham",!0)}},d927:function(t,e,n){"use strict";var i=n("04b7"),r=n.n(i);r.a},ddb0:function(t,e,n){var i=n("da84"),r=n("fdbc"),o=n("e260"),a=n("9112"),s=n("b622"),c=s("iterator"),l=s("toStringTag"),u=o.values;for(var f in r){var d=i[f],h=d&&d.prototype;if(h){if(h[c]!==u)try{a(h,c,u)}catch(g){h[c]=u}if(h[l]||a(h,l,f),r[f])for(var b in o)if(h[b]!==o[b])try{a(h,b,o[b])}catch(g){h[b]=o[b]}}}},dde9:function(t,e,n){},e01a:function(t,e,n){"use strict";var i=n("23e7"),r=n("83ab"),o=n("da84"),a=n("5135"),s=n("861d"),c=n("9bf2").f,l=n("e893"),u=o.Symbol;if(r&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(d,u);var h=d.prototype=u.prototype;h.constructor=d;var b=h.toString,g="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;c(h,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=b.call(t);if(a(f,t))return"";var n=g?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,n){var i=n("b622");e.f=i},e8b5:function(t,e,n){var i=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},fb6a:function(t,e,n){"use strict";var i=n("23e7"),r=n("861d"),o=n("e8b5"),a=n("23cb"),s=n("50c4"),c=n("fc6a"),l=n("8418"),u=n("b622"),f=n("1dde"),d=n("ae40"),h=f("slice"),b=d("slice",{ACCESSORS:!0,0:0,1:2}),g=u("species"),v=[].slice,p=Math.max;i({target:"Array",proto:!0,forced:!h||!b},{slice:function(t,e){var n,i,u,f=c(this),d=s(f.length),h=a(t,d),b=a(void 0===e?d:e,d);if(o(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[g],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return v.call(f,h,b);for(i=new(void 0===n?Array:n)(p(b-h,0)),u=0;h<b;h++,u++)h in f&&l(i,u,f[h]);return i.length=u,i}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);