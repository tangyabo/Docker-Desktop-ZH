"use strict";(globalThis.webpackChunk_docker_desktop_ui=globalThis.webpackChunk_docker_desktop_ui||[]).push([[3509],{63509:(e,t,n)=>{function r(e){return{type:e,style:"keyword"}}n.r(t),n.d(t,{haxe:()=>ae,hxml:()=>ie});var a,i=r("keyword a"),o=r("keyword b"),l=r("keyword c"),u=r("operator"),c={type:"atom",style:"atom"},f={type:"attribute",style:"attribute"},s=r("typedef"),d={if:i,while:i,else:o,do:o,try:o,return:l,break:l,continue:l,new:l,throw:l,var:r("var"),inline:f,static:f,using:r("import"),public:f,private:f,cast:r("cast"),import:r("import"),macro:r("macro"),function:r("function"),catch:r("catch"),untyped:r("untyped"),callback:r("cb"),for:r("for"),switch:r("switch"),case:r("case"),default:r("default"),in:u,never:r("property_access"),trace:r("trace"),class:s,abstract:s,enum:s,interface:s,typedef:s,extends:s,implements:s,dynamic:s,true:c,false:c,null:c},p=/[+\-*&%=<>!?|]/;function m(e,t,n){return t.tokenize=n,n(e,t)}function v(e,t){for(var n,r=!1;null!=(n=e.next());){if(n==t&&!r)return!0;r=!r&&"\\"==n}}function k(e,t,n){return s=e,a=n,t}function y(e,t){var n=e.next();if('"'==n||"'"==n)return m(e,t,(r=n,function(e,t){return v(e,r)&&(t.tokenize=y),k("string","string")}));if(/[\[\]{}\(\),;\:\.]/.test(n))return k(n);if("0"==n&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),k("number","number");if(/\d/.test(n)||"-"==n&&e.eat(/\d/))return e.match(/^\d*(?:\.\d*(?!\.))?(?:[eE][+\-]?\d+)?/),k("number","number");if(t.reAllowed&&"~"==n&&e.eat(/\//))return v(e,"/"),e.eatWhile(/[gimsu]/),k("regexp","string.special");if("/"==n)return e.eat("*")?m(e,t,h):e.eat("/")?(e.skipToEnd(),k("comment","comment")):(e.eatWhile(p),k("operator",null,e.current()));if("#"==n)return e.skipToEnd(),k("conditional","meta");if("@"==n)return e.eat(/:/),e.eatWhile(/[\w_]/),k("metadata","meta");if(p.test(n))return e.eatWhile(p),k("operator",null,e.current());if(/[A-Z]/.test(n))return e.eatWhile(/[\w_<>]/),k("type","type",a=e.current());e.eatWhile(/[\w_]/);var r,a=e.current(),i=d.propertyIsEnumerable(a)&&d[a];return i&&t.kwAllowed?k(i.type,i.style,a):k("variable","variable",a)}function h(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=y;break}r="*"==n}return k("comment","comment")}var b={atom:!0,number:!0,variable:!0,string:!0,regexp:!0};function x(e,t,n,r,a,i){this.indented=e,this.column=t,this.type=n,this.prev=a,this.info=i,null!=r&&(this.align=r)}function w(e,t){for(var n=e.localVars;n;n=n.next)if(n.name==t)return!0}function g(e,t){if(/[a-z]/.test(t.charAt(0)))return!1;for(var n=e.importedtypes.length,r=0;r<n;r++)if(e.importedtypes[r]==t)return!0}function A(e){for(var t=V.state,n=t.importedtypes;n;n=n.next)if(n.name==e)return;t.importedtypes={name:e,next:t.importedtypes}}var V={state:null,column:null,marked:null,cc:null};function S(){for(var e=arguments.length-1;e>=0;e--)V.cc.push(arguments[e])}function _(){return S.apply(null,arguments),!0}function T(e,t){for(var n=t;n;n=n.next)if(n.name==e)return!0;return!1}function W(e){var t=V.state;if(t.context){if(V.marked="def",T(e,t.localVars))return;t.localVars={name:e,next:t.localVars}}else if(t.globalVars){if(T(e,t.globalVars))return;t.globalVars={name:e,next:t.globalVars}}}var z={name:"this",next:null};function E(){V.state.context||(V.state.localVars=z),V.state.context={prev:V.state.context,vars:V.state.localVars}}function D(){V.state.localVars=V.state.context.vars,V.state.context=V.state.context.prev}function O(e,t){var n=function(){var n=V.state;n.lexical=new x(n.indented,V.stream.column(),e,null,n.lexical,t)};return n.lex=!0,n}function Z(){var e=V.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function P(e){return function t(n){return n==e?_():";"==e?S():_(t)}}function I(e){return"@"==e?_(F):"var"==e?_(O("vardef"),Q,P(";"),Z):"keyword a"==e?_(O("form"),C,I,Z):"keyword b"==e?_(O("form"),I,Z):"{"==e?_(O("}"),E,M,Z,D):";"==e?_():"attribute"==e?_(B):"function"==e?_(Y):"for"==e?_(O("form"),P("("),O(")"),U,P(")"),Z,I,Z):"variable"==e?_(O("stat"),H):"switch"==e?_(O("form"),C,O("}","switch"),P("{"),M,Z,Z):"case"==e?_(C,P(":")):"default"==e?_(P(":")):"catch"==e?_(O("form"),E,P("("),re,P(")"),I,Z,D):"import"==e?_(q,P(";")):"typedef"==e?_(G):S(O("stat"),C,P(";"),Z)}function C(e){return b.hasOwnProperty(e)||"type"==e?_($):"function"==e?_(Y):"keyword c"==e?_(N):"("==e?_(O(")"),N,P(")"),Z,$):"operator"==e?_(C):"["==e?_(O("]"),L(N,"]"),Z,$):"{"==e?_(O("}"),L(K,"}"),Z,$):_()}function N(e){return e.match(/[;\}\)\],]/)?S():S(C)}function $(e,t){return"operator"==e&&/\+\+|--/.test(t)?_($):"operator"==e||":"==e?_(C):";"!=e?"("==e?_(O(")"),L(C,")"),Z,$):"."==e?_(J,$):"["==e?_(O("]"),C,P("]"),Z,$):void 0:void 0}function B(e){return"attribute"==e?_(B):"function"==e?_(Y):"var"==e?_(Q):void 0}function F(e){return":"==e||"variable"==e?_(F):"("==e?_(O(")"),L(j,")"),Z,I):void 0}function j(e){if("variable"==e)return _()}function q(e,t){return"variable"==e&&/[A-Z]/.test(t.charAt(0))?(A(t),_()):"variable"==e||"property"==e||"."==e||"*"==t?_(q):void 0}function G(e,t){return"variable"==e&&/[A-Z]/.test(t.charAt(0))?(A(t),_()):"type"==e&&/[A-Z]/.test(t.charAt(0))?_():void 0}function H(e){return":"==e?_(Z,I):S($,P(";"),Z)}function J(e){if("variable"==e)return V.marked="property",_()}function K(e){if("variable"==e&&(V.marked="property"),b.hasOwnProperty(e))return _(P(":"),C)}function L(e,t){function n(r){return","==r?_(e,n):r==t?_():_(P(t))}return function(r){return r==t?_():S(e,n)}}function M(e){return"}"==e?_():S(I,M)}function Q(e,t){return"variable"==e?(W(t),_(ee,R)):_()}function R(e,t){return"="==t?_(C,R):","==e?_(Q):void 0}function U(e,t){return"variable"==e?(W(t),_(X,C)):S()}function X(e,t){if("in"==t)return _()}function Y(e,t){return"variable"==e||"type"==e?(W(t),_(Y)):"new"==t?_(Y):"("==e?_(O(")"),E,L(re,")"),Z,ee,I,D):void 0}function ee(e){if(":"==e)return _(te)}function te(e){return"type"==e||"variable"==e?_():"{"==e?_(O("}"),L(ne,"}"),Z):void 0}function ne(e){if("variable"==e)return _(ee)}function re(e,t){if("variable"==e)return W(t),_(ee)}D.lex=!0,Z.lex=!0;const ae={name:"haxe",startState:function(e){return{tokenize:y,reAllowed:!0,kwAllowed:!0,cc:[],lexical:new x(-e,0,"block",!1),importedtypes:["Int","Float","String","Void","Std","Bool","Dynamic","Array"],context:null,indented:0}},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation()),e.eatSpace())return null;var n=t.tokenize(e,t);return"comment"==s?n:(t.reAllowed=!("operator"!=s&&"keyword c"!=s&&!s.match(/^[\[{}\(,;:]$/)),t.kwAllowed="."!=s,function(e,t,n,r,a){var i=e.cc;for(V.state=e,V.stream=a,V.marked=null,V.cc=i,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((i.length?i.pop():I)(n,r)){for(;i.length&&i[i.length-1].lex;)i.pop()();return V.marked?V.marked:"variable"==n&&w(e,r)?"variableName.local":"variable"==n&&g(e,r)?"variableName.special":t}}(t,n,s,a,e))},indent:function(e,t,n){if(e.tokenize!=y)return 0;var r=t&&t.charAt(0),a=e.lexical;"stat"==a.type&&"}"==r&&(a=a.prev);var i=a.type,o=r==i;return"vardef"==i?a.indented+4:"form"==i&&"{"==r?a.indented:"stat"==i||"form"==i?a.indented+n.unit:"switch"!=a.info||o?a.align?a.column+(o?0:1):a.indented+(o?0:n.unit):a.indented+(/^(?:case|default)\b/.test(t)?n.unit:2*n.unit)},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}},ie={name:"hxml",startState:function(){return{define:!1,inString:!1}},token:function(e,t){var n=e.peek(),r=e.sol();if("#"==n)return e.skipToEnd(),"comment";if(r&&"-"==n){var a="variable-2";return e.eat(/-/),"-"==e.peek()&&(e.eat(/-/),a="keyword a"),"D"==e.peek()&&(e.eat(/[D]/),a="keyword c",t.define=!0),e.eatWhile(/[A-Z]/i),a}return n=e.peek(),0==t.inString&&"'"==n&&(t.inString=!0,e.next()),1==t.inString?(e.skipTo("'")||e.skipToEnd(),"'"==e.peek()&&(e.next(),t.inString=!1),"string"):(e.next(),null)},languageData:{commentTokens:{line:"#"}}}}}]);
//# sourceMappingURL=sourcemaps/3509.bundle.js.map