(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1QcF":function(e,t,n){},DMNx:function(e,t,n){},EfCr:function(e,t,n){},"Lmb+":function(e,t,n){},RPjP:function(e,t,n){"use strict";e.exports=n("SLms")},SLms:function(e,t,n){"use strict";n("pIFo"),n("8+KV"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("DNiP"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=c(n("q1tI")),i=c(n("17x9"));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=["shortname","identifier","title","url","category_id","onNewComment","language"],f=!1;function m(e,t){var n=t.onNewComment,r=t.language,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["onNewComment","language"]);for(var a in o)e.page[a]=o[a];e.language=r,n&&(e.callbacks={onNewComment:[n]})}var p=function(e){function t(){return s(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return u.some((function(e){return e===n}))?t:r({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))}),{});return a.default.createElement("div",t,a.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!f){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),f=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};u.forEach((function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){m(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){m(this,t)},this.addDisqusScript())}}]),t}(a.default.Component);p.displayName="DisqusThread",p.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},p.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=p},TsVF:function(e,t,n){},"h/M4":function(e,t,n){var r=n("XKFU");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},hUWy:function(e,t,n){},jmfv:function(e,t,n){},"n1n/":function(e,t,n){},uhgt:function(e,t,n){},vg9a:function(e,t,n){},weRM:function(e,t,n){},yZlL:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return q}));var r=n("q1tI"),o=n.n(r),a=(n("TsVF"),function(){return o.a.createElement("hr",{className:"custom-hr"})}),i=n("hpys"),c=n("CC2r"),s=function(e){var t=e.title;return o.a.createElement("h1",null,t)},l=(n("1QcF"),function(e){var t=e.date;return o.a.createElement("p",{className:"post-date"},t)}),u=(n("Lmb+"),function(e){var t=e.html;return o.a.createElement("div",{className:"post-container",dangerouslySetInnerHTML:{__html:t}})}),f=(n("weRM"),function(e){var t=e.onClick;return o.a.createElement("a",{className:"resp-sharing-button__link",href:"#",target:"_blank",rel:"noopener","aria-label":"Share on Facebook",onClick:t},o.a.createElement("div",{className:"resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"},o.a.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"}))),o.a.createElement("span",{className:"service-label"},"Share on Facebook")))}),m=(n("hUWy"),function(e){var t=e.onClick;return o.a.createElement("a",{className:"resp-sharing-button__link",href:"#",rel:"noopener","aria-label":"Share on Twitter",onClick:t},o.a.createElement("div",{className:"resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"},o.a.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"}))),o.a.createElement("span",{className:"service-label"},"Share on Twitter")))}),p=(n("DMNx"),function(e){var t='Recommend on "'+e.title+'" written by @'+e.author;return o.a.createElement("div",{className:"social-share"},o.a.createElement(f,{onClick:function(e){return e.preventDefault(),function(e,t){window.FB.ui({method:"share",mobile_iframe:!0,href:e,quote:t})}(window.location.href,t)}}),o.a.createElement(m,{onClick:function(e){return e.preventDefault(),function(e,t){window.open("https://twitter.com/share?url="+encodeURI(encodeURI(e))+"&text="+t,"sharer","toolbar=0,status=0,width=626,height=436")}(window.location.href,t)}}))}),d=(n("jmfv"),function(e){var t=e.sponsorId;return o.a.createElement("div",{className:"sponsor-button"},o.a.createElement("a",{className:"bmc-button",target:"_blank",rel:"noopener noreferrer",href:"https://www.buymeacoffee.com/"+t},o.a.createElement("img",{src:"https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg",alt:"Buy me a coffee"}),o.a.createElement("span",null,"Buy me a coffee")))}),h=n("lbRd"),v=n("Wbzz"),g=(n("n1n/"),function(e){var t=e.pageContext,n=t.previous,r=t.next;return o.a.createElement("ul",{className:"navigator"},o.a.createElement("li",null,n&&o.a.createElement(v.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),o.a.createElement("li",null,r&&o.a.createElement(v.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →")))}),b=(n("a1Th"),n("Btvt"),n("I5cv"),n("RPjP")),y=n.n(b);function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var w=function(e){var t,n;n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r;r=a;function a(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(E(n)),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(E(n)),n}var i=a.prototype;return i.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},i.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},i.render=function(){var e=this.props,t=e.post,n=e.shortName,r=e.siteUrl+e.slug;return o.a.createElement(y.a,{shortname:n,identifier:t.frontmatter.title,title:t.frontmatter.title,url:r,category_id:t.frontmatter.category_id,onNewComment:this.notifyAboutComment})},a}(r.Component),T=(n("rGqo"),n("yt8O"),n("RW0V"),n("JqEL")),_=n("WlAH"),C=function(e){var t=e.repo,n=o.a.createRef();return Object(r.useEffect)((function(){var e=T.f(_.d.DARK),r=document.createElement("script"),o={src:"https://utteranc.es/client.js",repo:t,branch:"master",theme:e?"photon-dark":"github-light",label:"comment",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(o).forEach((function(e){r.setAttribute(e,o[e])})),n.current.appendChild(r)}),[]),o.a.createElement("div",{className:"utterances",ref:n})},N=n("EXIE");n("uhgt"),n("vg9a"),n("EfCr"),n("f3/d"),n("HEwt"),n("rE2o"),n("ioFf"),n("xfY5"),n("h/M4"),n("KKXr"),n("pIFo"),n("Z2Ku"),n("L9s1"),n("XfO3"),n("9AAn");function k(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var H,O,x,j={indexOfH1:1,indexOfH2:2,indexOfH3:3,indexOfH4:4,levelsByH1:new Map([[1,1],[2,2],[3,3],[4,4]]),levelsByH2:new Map([[2,1],[3,2],[4,3]]),levelsByH3:new Map([[3,1],[4,2]]),levelsByH4:new Map([[4,1]])},M=(O=function(){var e=new x;return{init:function(){var t;e.checkExistenceOfHTags()&&(e.initTocElementsCard(),e.giveIdToHTags(),t=e.getLevelsByHighestTag(),e.registerTagsOnToc(t))},onscroll:function(){var t=e.findCurrentHTag();t&&(e.markCurrentHTag(t),e.scrollToMainTocTag(t),e.detectTocCardPosition())}}},x=function(){var e=document.querySelector("#toc-elements"),t=document.querySelector(".post-container"),n=k(t?t.querySelectorAll("h1, h2, h3, h4"):[]).filter((function(e){return!e.parentElement.classList.contains("another_category")})),r=function(){return k(n).reduce((function(e,t){return parseInt(e.tagName[1])<parseInt(t.tagName[1])?e:t}))},o=function(e,t,n){void 0===e&&(e=j.NUM_OF_H1);var r=a(t,n);return c(r,n),r.classList.add("toc-level-"+e),r},a=function(e,t){var n=document.createElement("a"),r=e.innerText;return e.innerText.includes("<")&&(r=(r=r.replace(/&lt;/g,"&amp;lt;")).replace(/</g,"&lt;")),e.innerText.includes(">")&&(r=(r=r.replace(/&gt;/g,"&amp;gt;")).replace(/>/g,"&gt;")),n.innerHTML+=r,n.id="toc-"+t,n.classList="toc-common",n},i=function(e){return"h-tag-"+e},c=function(e,t){var n=document.querySelector("#"+i(t));e.addEventListener("click",(function(){return window.scrollTo({top:n.offsetTop-10,behavior:"smooth"})}))},s=function(){var e=document.querySelector(".area_head"),t=0;e&&(t=e.offsetHeight);var r=window.scrollY+window.innerHeight/4-t;return k(n).reduce((function(e,t){return r<e.offsetTop&&r<t.offsetTop||e.offsetTop<r&&r<=t.offsetTop?e:t}))},l=function(e){var t=u(e);return document.querySelector("#toc-"+t)},u=function(e){var t=e.id.split("-");return parseInt(t[t.length-1])},f=function(t){Array.prototype.slice.call(e.children).forEach((function(e){e.classList.remove(t)}))},m=function(e){var t=u(e),n=d(e);f("toc-parent-active"),p(n,t)},p=function e(t,n){if(!(t<=1||n<0)){var r=document.querySelector("#toc-"+n);if(t<=d(r))return e(t,n-1);r.classList.add("toc-parent-active"),e(t-1,n-1)}},d=function(e){var t=e.classList;return t.contains("toc-level-4")?4:t.contains("toc-level-3")?3:t.contains("toc-level-2")?2:1};return{checkExistenceOfHTags:function(){return 0!==n.length},initTocElementsCard:function(){e.classList.add("toc-app-common","items","toc-app-basic")},getLevelsByHighestTag:function(){return{H1:j.levelsByH1,H2:j.levelsByH2,H3:j.levelsByH3}[r().tagName]||j.levelsByH4},registerTagsOnToc:function(t){n.forEach((function(n,r){var a;t.forEach((function(e,t){n.matches("h"+t)&&(a=o(e,n,r))})),e.appendChild(a)}))},giveIdToHTags:function(){n.forEach((function(e,t){e.id=i(t)}))},findCurrentHTag:function(){if(0!=n.length){var e=s();return l(e)}},markCurrentHTag:function(e){f("toc-active"),e.classList.add("toc-active"),m(e)},scrollToMainTocTag:function(t){e.scroll({top:t.offsetTop-.3*t.offsetParent.offsetHeight,behavior:"smooth"})},detectTocCardPosition:function(){var t=document.documentElement.scrollTop,n=document.querySelector("#mEtc"),r=Number.MAX_SAFE_INTEGER;n&&(r=n.offsetTop);var o=t+e.offsetHeight;e.classList.remove("toc-app-basic","toc-app-bottom"),o>=r?e.classList.add("toc-app-bottom"):e.classList.add("toc-app-basic")}}},{init:function(){var e=new O;e.init(),H=e},onscroll:function(){H.onscroll()}}),q=(t.default=function(e){var t=e.data,n=e.pageContext,f=e.location;Object(r.useEffect)((function(){return N.c(),M.init(),window.onscroll=function(){M.onscroll()},function(){return N.a()}}),[]);var m=t.markdownRemark,v=t.site.siteMetadata,b=v.title,y=v.comment,E=v.siteUrl,T=v.author,_=v.sponsor,k=y.disqusShortName,S=y.utterances,H=m.frontmatter,O=H.title,x=H.date;return o.a.createElement(i.a,{location:f,title:b},o.a.createElement(c.a,{title:O,description:m.excerpt}),o.a.createElement(s,{title:O}),o.a.createElement(l,{date:x}),o.a.createElement(u,{html:m.html}),o.a.createElement(p,{title:O,author:T}),!!_.buyMeACoffeeId&&o.a.createElement(d,{sponsorId:_.buyMeACoffeeId}),o.a.createElement(a,null),o.a.createElement(h.a,null),o.a.createElement(g,{pageContext:n}),!!k&&o.a.createElement(w,{post:m,shortName:k,siteUrl:E,slug:n.slug}),!!S&&o.a.createElement(C,{repo:S}))},"1559320954")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-05b002f315b6e998bba3.js.map