(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["my-about"],{"0653":function(t,e,r){"use strict";r("68ef"),r("5c56")},"14c3":function(t,e,r){var n=r("c6b6"),a=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"34e9":function(t,e,r){"use strict";var n=r("2638"),a=r.n(n),i=r("d282"),c=r("ba31"),l=r("b1d2"),o=Object(i["a"])("cell-group"),s=o[0],u=o[1];function f(t,e,r,n){var i,o,s=t("div",a()([{class:[u(),(i={},i[l["e"]]=e.border,i)]},Object(c["b"])(n,!0)]),[null===(o=r.default)||void 0===o?void 0:o.call(r)]);return e.title||r.title?t("div",[t("div",{class:u("title")},[r.title?r.title():e.title]),s]):s}f.props={title:String,border:{type:Boolean,default:!0}},e["a"]=s(f)},5246:function(t,e,r){"use strict";r("68ef"),r("9d70"),r("3743"),r("8a0b")},5319:function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),i=r("7b0b"),c=r("50c4"),l=r("a691"),o=r("1d80"),s=r("8aa5"),u=r("14c3"),f=Math.max,d=Math.min,v=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,x=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var h=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=n.REPLACE_KEEPS_$0,E=h?"$":"$0";return[function(r,n){var a=o(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,a,n):e.call(String(a),r,n)},function(t,n){if(!h&&b||"string"===typeof n&&-1===n.indexOf(E)){var i=r(e,t,this,n);if(i.done)return i.value}var o=a(t),v=String(this),p="function"===typeof n;p||(n=String(n));var x=o.global;if(x){var T=o.unicode;o.lastIndex=0}var S=[];while(1){var _=u(o,v);if(null===_)break;if(S.push(_),!x)break;var R=String(_[0]);""===R&&(o.lastIndex=s(v,c(o.lastIndex),T))}for(var I="",A=0,m=0;m<S.length;m++){_=S[m];for(var $=String(_[0]),w=f(d(l(_.index),v.length),0),P=[],k=1;k<_.length;k++)P.push(g(_[k]));var C=_.groups;if(p){var O=[$].concat(P,w,v);void 0!==C&&O.push(C);var U=String(n.apply(void 0,O))}else U=y($,v,w,P,C,n);w>=A&&(I+=v.slice(A,w)+U,A=w+$.length)}return I+v.slice(A)}];function y(t,r,n,a,c,l){var o=n+t.length,s=a.length,u=x;return void 0!==c&&(c=i(c),u=p),e.call(l,u,(function(e,i){var l;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(o);case"<":l=c[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>s){var f=v(u/10);return 0===f?e:f<=s?void 0===a[f-1]?i.charAt(1):a[f-1]+i.charAt(1):e}l=a[u-1]}return void 0===l?"":l}))}}))},"5c56":function(t,e,r){},6547:function(t,e,r){var n=r("a691"),a=r("1d80"),i=function(t){return function(e,r){var i,c,l=String(a(e)),o=n(r),s=l.length;return o<0||o>=s?t?"":void 0:(i=l.charCodeAt(o),i<55296||i>56319||o+1===s||(c=l.charCodeAt(o+1))<56320||c>57343?t?l.charAt(o):i:t?l.slice(o,o+2):c-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"6b41":function(t,e,r){"use strict";var n=r("2638"),a=r.n(n),i=r("d282"),c=r("a142"),l=r("ba31"),o=r("b1d2"),s=r("ad06"),u=Object(i["a"])("nav-bar"),f=u[0],d=u[1];function v(t,e,r,n){var i;function u(){return r.left?r.left():[e.leftArrow&&t(s["a"],{class:d("arrow"),attrs:{name:"arrow-left"}}),e.leftText&&t("span",{class:d("text")},[e.leftText])]}function f(){return r.right?r.right():e.rightText?t("span",{class:d("text")},[e.rightText]):void 0}return t("div",a()([{style:{zIndex:e.zIndex},class:[d({fixed:e.fixed}),(i={},i[o["a"]]=e.border,i)]},Object(l["b"])(n)]),[t("div",{class:d("left"),on:{click:n.listeners["click-left"]||c["f"]}},[u()]),t("div",{class:[d("title"),"van-ellipsis"]},[r.title?r.title():e.title]),t("div",{class:d("right"),on:{click:n.listeners["click-right"]||c["f"]}},[f()])])}v.props={title:String,fixed:Boolean,leftText:String,rightText:String,leftArrow:Boolean,border:{type:Boolean,default:!0},zIndex:{type:Number,default:1}},e["a"]=f(v)},"77d3":function(t,e,r){},"8a0b":function(t,e,r){},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},"8bf4":function(t,e,r){"use strict";var n=r("77d3"),a=r.n(n);a.a},9263:function(t,e,r){"use strict";var n=r("ad6d"),a=r("9f7f"),i=RegExp.prototype.exec,c=String.prototype.replace,l=i,o=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=o||u||s;f&&(l=function(t){var e,r,a,l,f=this,d=s&&f.sticky,v=n.call(f),p=f.source,x=0,g=t;return d&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,x++),r=new RegExp("^(?:"+p+")",v)),u&&(r=new RegExp("^"+p+"$(?!\\s)",v)),o&&(e=f.lastIndex),a=i.call(d?r:f,g),d?a?(a.input=a.input.slice(x),a[0]=a[0].slice(x),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:o&&a&&(f.lastIndex=f.global?a.index+a[0].length:e),u&&a&&a.length>1&&c.call(a[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)})),a}),t.exports=l},"9f7f":function(t,e,r){"use strict";var n=r("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae21:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"about"}},[r("van-nav-bar",{attrs:{title:"关于扣题",fixed:"","left-arrow":""},on:{"click-left":t.backToMyPage}}),r("h3",{staticClass:"about-title"},[t._v("QT - 扣 题")]),t._m(0),r("van-cell-group",{attrs:{title:" "}},[r("van-cell",{attrs:{title:"版本",value:t.version}}),r("van-cell",{attrs:{title:"作者",value:"Veleven","is-link":"",url:"https://veleven.tk"}}),r("van-cell",{attrs:{title:"联系QQ",value:"1878957669"}})],1)],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"about-desc"},[t._v(" “扣题”是一个以答题为核心的竞技 APP，在这里你可以和全网的朋友们比一比各自的知识广度、知识深度以及飞一般的手速。目前，题目多以网络安全、编程等计算机领域为主。 "),r("br"),t._v(" “扣题”二字，其灵感来源于“扣字”，但这里比的不是打字，而是你的知识和能力。 "),r("br"),t._v(" 如果你对 QT 有什么想法和建议，请联系并反馈给我们，“扣题”会陪你一起学习一起成长。 ")])}],i=(r("ac1f"),r("5319"),r("0653"),r("34e9")),c=(r("c194"),r("7744")),l=(r("5246"),r("6b41")),o=r("2b0e"),s=r("db49");o["a"].use(l["a"]),o["a"].use(c["a"]),o["a"].use(i["a"]);var u={data:function(){return{version:""}},created:function(){this.version=s["a"].version,this.$store.state.system.showTabbar=!1},destroyed:function(){this.$store.state.system.showTabbar=!0},methods:{backToMyPage:function(){this.$router.replace("/my")}}},f=u,d=(r("8bf4"),r("2877")),v=Object(d["a"])(f,n,a,!1,null,"0365b99b",null);e["default"]=v.exports},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),i=r("b622"),c=r("9263"),l=r("9112"),o=i("species"),s=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),v=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var p=i(t),x=!a((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=x&&!a((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[o]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return e=!0,null},r[p](""),!e}));if(!x||!g||"replace"===t&&(!s||!u||d)||"split"===t&&!v){var h=/./[p],b=r(p,""[t],(function(t,e,r,n,a){return e.exec===c?x&&!a?{done:!0,value:h.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),E=b[0],y=b[1];n(String.prototype,t,E),n(RegExp.prototype,p,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}f&&l(RegExp.prototype[p],"sham",!0)}}}]);