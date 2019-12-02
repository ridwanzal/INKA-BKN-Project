!function(a,b,c){function d(a,b){return typeof a===b}function e(){var a,b,c,e,f,g,h;for(var i in s){if(a=[],b=s[i],b.name&&(a.push(b.name.toLowerCase()),b.options&&b.options.aliases&&b.options.aliases.length))for(c=0;c<b.options.aliases.length;c++)a.push(b.options.aliases[c].toLowerCase());for(e=d(b.fn,"function")?b.fn():b.fn,f=0;f<a.length;f++)g=a[f],h=g.split("."),1===h.length?u[h[0]]=e:(!u[h[0]]||u[h[0]]instanceof Boolean||(u[h[0]]=new Boolean(u[h[0]])),u[h[0]][h[1]]=e),r.push((e?"":"no-")+h.join("-"))}}function f(a){var b=y.className,c=u._config.classPrefix||"";if(u._config.enableJSClass){var d=new RegExp("(^|\\s)"+c+"no-js(\\s|$)");b=b.replace(d,"$1"+c+"js$2")}u._config.enableClasses&&(b+=" "+c+a.join(" "+c),y.className=b)}function g(a){return a.replace(/([a-z])-([a-z])/g,function(a,b,c){return b+c.toUpperCase()}).replace(/^-/,"")}function h(){var a=b.body;return a||(a=F("body"),a.fake=!0),a}function i(a,b,c,d){var e,f,g,i,j="modernizr",k=F("div"),l=h();if(parseInt(c,10))for(;c--;)g=F("div"),g.id=d?d[c]:j+(c+1),k.appendChild(g);return e=["&#173;",'<style id="s',j,'">',a,"</style>"].join(""),k.id=j,(l.fake?l:k).innerHTML+=e,l.appendChild(k),l.fake&&(l.style.background="",l.style.overflow="hidden",i=y.style.overflow,y.style.overflow="hidden",y.appendChild(l)),f=b(k,a),l.fake?(l.parentNode.removeChild(l),y.style.overflow=i,y.offsetHeight):k.parentNode.removeChild(k),!!f}function j(a,b){return!!~(""+a).indexOf(b)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b,c){var e;for(var f in a)if(a[f]in b)return c===!1?a[f]:(e=b[a[f]],d(e,"function")?k(e,c||b):e);return!1}function m(a){return a.replace(/([A-Z])/g,function(a,b){return"-"+b.toLowerCase()}).replace(/^ms-/,"-ms-")}function n(b,d){var e=b.length;if("CSS"in a&&"supports"in a.CSS){for(;e--;)if(a.CSS.supports(m(b[e]),d))return!0;return!1}if("CSSSupportsRule"in a){for(var f=[];e--;)f.push("("+m(b[e])+":"+d+")");return f=f.join(" or "),i("@supports ("+f+") { #modernizr { position: absolute; } }",function(a){return"absolute"==getComputedStyle(a,null).position})}return c}function o(a,b,e,f){function h(){k&&(delete I.style,delete I.modElem)}if(f=d(f,"undefined")?!1:f,!d(e,"undefined")){var i=n(a,e);if(!d(i,"undefined"))return i}var k,l,m,o,p;for(I.style||(k=!0,I.modElem=F("modernizr"),I.style=I.modElem.style),m=a.length,l=0;m>l;l++)if(o=a[l],p=I.style[o],j(o,"-")&&(o=g(o)),I.style[o]!==c){if(f||d(e,"undefined"))return h(),"pfx"==b?o:!0;try{I.style[o]=e}catch(q){}if(I.style[o]!=p)return h(),"pfx"==b?o:!0}return h(),!1}function p(a,b,c,e,f){var g=a.charAt(0).toUpperCase()+a.slice(1),h=(a+" "+D.join(g+" ")+g).split(" ");return d(b,"string")||d(b,"undefined")?o(h,b,e,f):(h=(a+" "+A.join(g+" ")+g).split(" "),l(h,b,c))}function q(a,b,d){return p(a,c,c,b,d)}var r=[],s=[],t={_version:"3.0.0-alpha.3",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(a,b){var c=this;setTimeout(function(){b(c[a])},0)},addTest:function(a,b,c){s.push({name:a,fn:b,options:c})},addAsyncTest:function(a){s.push({name:null,fn:a})}},u=function(){};u.prototype=t,u=new u;var v=function(){},w=function(){};a.console&&(v=function(){var b=console.error?"error":"log";a.console[b].apply(a.console,Array.prototype.slice.call(arguments))},w=function(){var b=console.warn?"warn":"log";a.console[b].apply(a.console,Array.prototype.slice.call(arguments))}),t.load=function(){"yepnope"in a?(w("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. yepnope appears to be available on the page, so we’ll use it to handle this call to Modernizr.load, but please update your code to use yepnope directly.\n See http://github.com/Modernizr/Modernizr/issues/1182 for more information."),a.yepnope.apply(a,[].slice.call(arguments,0))):v("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. Get it from http://yepnopejs.com. See http://github.com/Modernizr/Modernizr/issues/1182 for more information.")};var x=t._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];t._prefixes=x;var y=b.documentElement,z="Moz O ms Webkit",A=t._config.usePrefixes?z.toLowerCase().split(" "):[];t._domPrefixes=A;var B="CSS"in a&&"supports"in a.CSS,C="supportsCSS"in a;u.addTest("supports",B||C);var D=t._config.usePrefixes?z.split(" "):[];t._cssomPrefixes=D;var E=function(b){var d,e=x.length,f=a.CSSRule;if("undefined"==typeof f)return c;if(!b)return!1;if(b=b.replace(/^@/,""),d=b.replace(/-/g,"_").toUpperCase()+"_RULE",d in f)return"@"+b;for(var g=0;e>g;g++){var h=x[g],i=h.toUpperCase()+"_"+d;if(i in f)return"@-"+h.toLowerCase()+"-"+b}return!1},F=function(){return"function"!=typeof b.createElement?b.createElement(arguments[0]):b.createElement.apply(b,arguments)},G=t.testStyles=i,H={elem:F("modernizr")};u._q.push(function(){delete H.elem});var I={style:H.elem.style};u._q.unshift(function(){delete I.style});t.testProp=function(a,b,d){return o([a],c,b,d)};t.testAllProps=p;t.prefixed=function(a,b,c){return 0===a.indexOf("@")?E(a):(-1!=a.indexOf("-")&&(a=g(a)),b?p(a,b,c):p(a,"pfx"))};t.testAllProps=q,function(){u.addTest("csscolumns",function(){var a=!1,b=q("columnCount");try{(a=!!b)&&(a=new Boolean(a))}catch(c){}return a});for(var a,b,c=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],d=0;d<c.length;d++)a=c[d].toLowerCase(),b=q("column"+c[d]),("breakbefore"===a||"breakafter"===a||"breakinside"==a)&&(b=b||q(c[d])),u.addTest("csscolumns."+a,b)}(),u.addTest("overflowscrolling",q("overflowScrolling","touch",!0)),u.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&q("transform","scale(1)",!0)}),u.addTest("csstransforms3d",function(){var a=!!q("perspective","1px",!0),b=u._config.usePrefixes;if(a&&(!b||"webkitPerspective"in y.style)){var c;u.supports?c="@supports (perspective: 1px)":(c="@media (transform-3d)",b&&(c+=",(-webkit-transform-3d)")),c+="{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}",G(c,function(b){a=9===b.offsetLeft&&5===b.offsetHeight})}return a}),u.addTest("csstransitions",q("transition","all",!0)),u.addTest("flexbox",q("flexBasis","1px",!0)),u.addTest("flexboxlegacy",q("boxDirection","reverse",!0)),u.addTest("flexboxtweener",q("flexAlign","end",!0)),e(),f(r),delete t.addTest,delete t.addAsyncTest;for(var J=0;J<u._q.length;J++)u._q[J]();a.Modernizr=u}(window,document);
!function(a,b,c){function d(){k.on("click",f)}function e(){k.off("click",f)}function f(a){a.preventDefault(),g(k.attr("href"),"standard",600,800)}function g(c,d,e,f){var g,h,i=new Date,j=i.getTime();d=d.toLowerCase(),"fullscreen"==d&&(e=b.availWidth,f=b.availHeight),"standard"==d&&(h="resizable,toolbar=yes,location=yes,scrollbars=yes,menubar=yes,width="+e+",height="+f+",top=0,left=0"),("console"==d||"fullscreen"==d)&&(h="resizable,toolbar=no,location=no,scrollbars=yes,width="+e+",height="+f+",left=0,top=0"),g=a.open(c,j,h),g.focus()}function h(c,d){var e,f="directories=no,location=no,menubar=no,resizable=yes,scrollbars=yes,status=yes,toolbar=no,hotkeys=true",g=(b.availWidth-10).toString(),h=(b.availHeight-122).toString();d&&""!==d||(d="ib"),f=f+",width="+g.toString(),f=f+",height="+h.toString(),f+=",screenX=0,screenY=0,left=0,top=0",e=a.open("",d,f),e&&"function"==typeof e.moveTo&&e.moveTo(0,0),e.location=c}function i(b){return b.preventDefault(),document.documentElement.clientWidth>=nab.screenSm?h(c(this).attr("data-loginlink-desktop"),"ib"):a.open(c(this).attr("data-loginlink-mobile")),!1}var j=c(".login-options").find("button[data-loginlink-position]"),k=c(".secondary-links").find("a:first");a.openIBWindow=h,c(document).ready(function(){j.on("keydown",function(a){var b=a.which;(13===b||32===b)&&(c(this).click(),a.preventDefault())}).on("click",i)}),nab.addResponsiveFunctionXS(e,!1),nab.addResponsiveFunctionSM(e,!1),nab.addResponsiveFunctionMD(d,!1),nab.addResponsiveFunctionLG(d,!1),nab.addResponsiveFunctionXL(d,!1)}(window,screen,$);
function reflowElement(a,b,c){$(a).removeClass(b),$(a).offsetWidth=$(a).offsetWidth,$(a).addClass(c)}var nab=nab||{};if(nab.Modernizr=window.Modernizr,localStorage)try{localStorage.setItem("testitem","testvalue"),nab.localStorage={getItem:function(a){return localStorage.getItem(a)},setItem:function(a,b){localStorage.setItem(a,b)},removeItem:function(a){localStorage.removeItem(a)}}}catch(e){nab.localStorage={getItem:function(a){return"undefined"!=typeof nab.localStorage[a]?nab.localStorage[a]:null},setItem:function(a,b){nab.localStorage[a]=b},removeItem:function(a){delete nab.localStorage[a]}}}else nab.localStorage={getItem:function(a){},setItem:function(a,b){},removeItem:function(a){}};!function(){function a(){var a;do a=Math.floor(1e9*Math.random());while(a in b);return a}var b={};window.requestAnimationFrame||(window.requestAnimationFrame=function(a,b){var c=0,d=(new Date).getTime(),e=Math.max(0,16-(d-c)),f=window.setTimeout(function(){a(d+e)},e);return c=d+e,f}),window.requestNextAnimationFrame||(window.requestNextAnimationFrame=function(c,d){var e=a();return b[e]=requestAnimationFrame(function(){b[e]=requestAnimationFrame(function(a){delete b[e],c(a)},d)},d),e}),window.cancelNextAnimationFrame||(window.cancelNextAnimationFrame=function(a){b[a]&&(cancelAnimationFrame(b[a]),delete b[a])})}();var nab=nab||{};!function(){nab.updateIfChanged=function(){var a={};return function(b,c){var d=b.selector||"#"+b.attr("id")||b;c!==a[d]&&(a[d]=c,b.html(c))}}(),nab.getAsRows=function(a){for(var b=[{items:[]}],c=a.width(),d=0,e=0,f=a.children(),g=0;g<f.length;g++){var h=$(f[g]).width();c>d+h?d+=h:(e++,d=h,b[e]={items:[]}),b[e].items.push(f[g])}return b},nab.getMaxHeight=function(a,b){for(var c=0,d=0,e=0;e<a.length;e++)d=$(b(a[e])).height(),c=d>c?d:c;return c},nab.setMaxHeightInRows=function(a,b){a.each(function(){var a=$(this).find(b),c=$(a).map(function(){return $(this).height()}).get(),d=Math.max.apply(null,c);d>0&&$(a).height(d)})},nab.transitionEnd=function(a,b,c){var d=function(c){c.target==a[0]&&(b.call(this,c),a.off("transitionend",d))};nab.Modernizr.csstransitions?c?a.on("transitionend",d):a.one("transitionend",b):requestNextAnimationFrame(function(){b()})},nab.bindScroll=function(a,b){"object"==typeof window.ontouchmove?a.on("touchmove",b):a.on("scroll",b)},nab.unBindScroll=function(a,b){"object"==typeof window.ontouchmove?a.off("touchmove",b):a.off("scroll",b)},nab.scrollTo=function(a,b,c){var d=$(a),e=0;d.length&&(e=nab.getPosition(d[0])),$("main").animate({scrollTop:e+(b?b:0)-$("header").height()},c||"slow")},nab.getPosition=function(a){return+(a.offsetParent?nab.getPosition(a.offsetParent)+a.offsetTop:a.offsetTop||a.parentNode?nab.getPosition(a.parentNode):0)},nab.toggleAttr=function(a,b,c){return $(a).attr(b)==c[0]?$(a).attr(b,c[1]):$(a).attr(b)==c[1]&&$(a).attr(b,c[0]),$(a)},nab.skipLinks=function(){$(".skip-link").focusin(function(){$("header").addClass("show-skip-links"),$(this).removeClass("visually-hidden")}).focusout(function(){$(this).addClass("visually-hidden"),$("header").removeClass("show-skip-links")}).on("keydown",function(a){var b=a.which;if(13===b||32===b){var c=$(this).attr("data-skip");switch(c){case"skip-login":$("#login").focus(),a.preventDefault();break;case"skip-content":$("main h1").focus(),a.preventDefault();break;default:$("#login").focus(),a.preventDefault()}}})},nab.getLastNonEmptyChild=function(a){for(var b=null,c=a.length-1;c>-1;c--)if(b=$(a[c]),b.children().length<0||""!==$.trim(b.text()))return b;return null}}();var buttonAction;nab.buttonActions=function(a){var b="#"+a;return"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch?$(b).on("click",function(a){if(-1!=window.location.href.indexOf("business-asia")){a.preventDefault();var b="You’ll now be redirected from NAB to an external site. NAB doesn’t accept responsibility for the operation of the website you’re being redirected to.";window.confirm(b)&&(window.location.href=$(this).attr("href"))}}):($("#external-link-alert").on("mouseleave focusout",function(){-1!=window.location.href.indexOf("business-asia")&&$("#external-link-alert").removeClass("show")}),$("#external-link-alert").on("mouseenter focusin",function(){-1!=window.location.href.indexOf("business-asia")&&$("#external-link-alert").addClass("show")}),$(b).on("mouseleave focusout",function(){-1!=window.location.href.indexOf("business-asia")&&window.location.href.indexOf("event")&&$("#external-link-alert").removeClass("show")}),$(b).on("mouseenter focusin",function(){-1!=window.location.href.indexOf("business-asia")&&window.location.href.indexOf("event")&&$("#external-link-alert").addClass("show")}),$("#external-link-alert").on("click",function(){-1!=window.location.href.indexOf("business-asia")&&$("#external-link-alert").removeClass("show")})),!1},$(document).ready(function(){var a=nab.getLastNonEmptyChild($("main").children("div"));a&&!a.hasClass("tabs-component")&&(a.hasClass("iparys_inherited")&&(a=a.find(" > div > div")),a.hasClass("section-container")&&(a=a.find(" > div > div"),a.hasClass("feature-container")&&a.css("height","440px")),a.css("padding-bottom","50px")),$("header.survey").height()?$('[data-type="login-nav"]').addClass("show-survey"):$('[data-type="login-nav"]').removeClass("show-survey"),document.querySelectorAll("#header form input").value="",nab.chevron='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="14 84.419 22 35" enable-background="new 14 84.419 22 35" xml:space="preserve" alt="" aria-hidden="true" focusable="false" class="chevron ${classes}"><g id="chevrons"><polygon id="right" points="18.599,119.26 14.52,115.095 27.346,101.862 14.527,88.765 18.583,84.578 35.48,101.84"></polygon></g></svg>',$(".chevron-placeholder").each(function(){var a=this;requestNextAnimationFrame(function(){var b=$(a).attr("class");$(a).replaceWith(nab.chevron.replace("${classes}",b.replace("chevron-placeholder","")))})}),function(){function a(){return document.documentElement.clientWidth>=nab.screenSm?$('header [data-type="login-nav"]'):$('#main > [data-type="login-nav"]')}function b(){var b=a();return b.find("li:first-child button")}function c(a,b,c,d,g,i,j,k,l){var m=nab.styles.prefixedTransform,n=nab.styles.transform,o=nab.styles.loginHeight,p=nab.styles.difference,q='@media (min-width:768px) {header [data-type="login-nav"] {right:0; top: '+$("header").outerHeight()+"px;"+m+":"+n.replace("${translate}","-"+(o+15))+";}} @media (min-width:"+(1280+p)+'px) {header [data-type="login-nav"] {right:'+p+"px;}}";nab.updateIfChanged($("#login-styles"),q);var r=function(){nab.toggleAttr($(g),"aria-expanded",["true","false"]),c&&c.focus()};requestNextAnimationFrame(function(){h.on("click",k),j!==h&&nab.bindScroll(f,l),j.off("transitionend"),nab.transitionEnd(j,r,!0),e.addClass(b)}),a.removeClass("hidden")}function d(a,b,c,d,i,j,k,l){h.off("click",k),nab.unBindScroll(f,l),g=!0;var m=function(b){a.addClass("hidden"),nab.toggleAttr($(d),"aria-expanded",["true","false"])};c&&c.focus(),j.off("transitionend"),nab.transitionEnd(j,m,!0),e.removeClass(b)}var e=$("#main"),f=$("main"),g=!0,h=$("#wrapper"),i={wrapperClick:null,scroll:null},j=((new Date).getTime(),$('[data-type="login-nav"]')),k=j.find("li:first-child button"),l=$("#login"),m="show-login",n=function(a,b,f,i,j,k){var l="#main-navigation"==a.selector?"#menu":"#login",m="#main-navigation"==a.selector?"#logo":"#menu-logo-container",n=document.documentElement.clientWidth>=nab.screenSm?a:h,o=function(c){d(a,b,i,l,m,n,o,p)},p=function(c){g&&e.hasClass(b)&&(g=!1,d(a,b,i,l,m,n,o,p))};return e.hasClass(b)?d(a,b,i,l,m,n,j,k):c(a,b,f,i,l,m,n,o,p),{wrapperClick:o,scroll:p}};$(window).on("resize",function(){e.hasClass(m)&&(i=n(a(),m,b(),l,i.wrapperClick,i.scroll))}),l.off("click").on("click",function(c){c.preventDefault(),i=n(a(),m,b(),this,i.wrapperClick,i.scroll)}).keydown(function(c){var d=e.hasClass(m),f=b();9===c.which&&!c.shiftKey&&d?(c.preventDefault(),f.focus()):9===c.which&&c.shiftKey&&d&&(i=n(a(),m,b(),this,i.wrapperClick,i.scroll))}),$("#menu").on("click",function(a){a.preventDefault(),i=n($("#main-navigation"),"show-main-nav",$("#menu-nav").find("a:first"),this,i.wrapperClick,i.scroll)}),$('#main > [data-type="login-nav"]').find("li:last a").keydown(function(c){9!==c.which||c.shiftKey||(c.preventDefault(),i=n(a(),m,b(),l,i.wrapperClick,i.scroll))}),$('header [data-type="login-nav"]').find("li:last a").keydown(function(c){9!==c.which||c.shiftKey||(i=n(a(),m,b(),null,i.wrapperClick,i.scroll))}),k.keydown(function(a){9===a.which&&a.shiftKey&&(a.preventDefault(),l.focus())})}();var b=function(){$("#tools-menu").hasClass("show")?$("#tools-menu").removeClass("show").addClass("hide"):$("#tools-menu").removeClass("hide").addClass("show")};$("form input").on("blur",function(a){$(this).toggleClass("input-not-empty",!!$(this).val())}),$(".survey-header button").on("click",function(a){$("#main").hasClass("show-login")||$('[data-type="login-nav"]').toggleClass("show-survey",!!$('[data-type="login-nav"]').val())}),$("#header-quick-links li.search a:first").on("click",function(a){$("header").hasClass("show-search")?document.getElementById("header-search-form").submit():($("#header-search-form").removeClass("hidden"),$("#header-quick-links li.search a:last").removeClass("hidden"),$("header").addClass("show-search"),$("#header-search").focus())}),$("#header-quick-links li.search a:last").on("click",function(a){var b=function(){$("header").hasClass("show-search")||$("#header-search-form").addClass("hidden")},c=function(){$("header").hasClass("show-search")||$("#header-quick-links li.search a:last").addClass("hidden")};$("header").removeClass("show-search"),$("#header-quick-links li.search a:first").focus(),nab.transitionEnd($("#header-search"),b),nab.transitionEnd($("#header-quick-links li.search a:last"),c)}),function(a,b,c){var d=a("<style id='dynamic-styles'></style>").appendTo("body"),e=a("<style id='login-styles'></style>").appendTo("body"),f=a('header [data-type="login-nav"]'),g=f.outerHeight(),h=function(){var b=a('.primary-nav > ul > li > ul[data-type="mega-menu"]'),f="",h=c.csstransforms?c.prefixed("transform").replace(/([A-Z])/g,function(a,b){return"-"+b.toLowerCase()}).replace(/^ms-/,"-ms-"):"margin-top",i=a("main")[0],j=i.offsetWidth-i.clientWidth,k=c.csstransforms?c.csstransforms3d?"translate3d(0,${translate}px,0)":"translateY(${translate}px)":"${translate}px";nab.styles=nab.styles||{},nab.styles.loginHeight=g,nab.styles.difference=j,nab.styles.prefixedTransform=h,nab.styles.transform=k,a("#main").addClass("not-ready"),requestNextAnimationFrame(function(){for(var c=0;c<b.length;c++){for(var i=a(b[c]).outerHeight(),l=a(b[c]).find("> li"),m=0;m<l.length;m++){var n=a(l[m]).find("> .nav-container").outerHeight();i=i>n?i:n}f+=".primary-nav > ul > li:nth-child("+(c+1)+') > ul[data-type="mega-menu"] {height:'+i+"px;"+h+":"+k.replace("${translate}","-"+(i+20))+";}"}var o=f+"@media (min-width:1280px) {#header-container {padding-right:"+j+"px}}",p='@media (min-width:768px) {header [data-type="login-nav"] {right:0; top: '+a("header").outerHeight()+"px;"+h+":"+k.replace("${translate}","-"+(g+15))+";}} @media (min-width:"+(1280+j)+'px) {header [data-type="login-nav"] {right:'+j+"px;}}";nab.updateIfChanged(d,o),nab.updateIfChanged(e,p),a("#main").removeClass("not-ready")})};if(!c.flexbox){var i=function(){var c=b.innerHeight-a("header").outerHeight();a("#wrapper").find("main").height(c)};i(),a(b).on("resize",i)}h(),a(b).on("resize",h)}($,window,Modernizr),$("#tools").click(function(a){a.preventDefault(),b()}),$('.back-to-top a, a[href="#wrapper"]').click(function(a){a.preventDefault(),$("#logo").first().focus(),nab.scrollTo(null,0)}),$("#site-map-links li a").click(function(a){a.preventDefault();var b="#"+$(this).attr("id")+"-div";$(b).toggleClass("clicked"),$(b).siblings().removeClass("clicked"),nab.scrollTo("#site-map")}),$("#navigation>li").click(function(a){"yes"!=$(this).attr("data-islink")&&(a.preventDefault(),$(this).toggleClass("open"),nab.toggleAttr($(this).children("a"),"aria-expanded",["true","false"]),$(this).siblings().removeClass("open").children("a").attr("aria-expanded","false"))}),$("#navigation>li li").click(function(a){a.stopPropagation()}),$("#site-map-links li").click(function(){$(this).toggleClass("clicked"),$(this).siblings().removeClass("clicked"),$(this).children("a").toggleClass("open"),$(this).siblings().children("a").removeClass("open")}),function(a){function b(b,c,d,e){a(e).closest("ul").children().each(function(){a(this).removeClass("open").find("> .menu-trigger").attr("aria-expanded","false")}),a(b).removeClass(j),g.off("click",c),nab.unBindScroll(h,d);var f=function(){a(b).addClass(i).removeData(k)};f&&(a(b).data(k,f),nab.transitionEnd(a(b),f))}function c(c,e,l){var m=c.data(k);m&&c.off("transitionend",m),null!=e&&c[0]!=e&&b(e,f.mainClickHandler,f.mainScrollHandler,l),c.hasClass(i)&&c.removeClass(i),nab.toggleAttr(a(l),"aria-expanded",["true","false"]),l.parent().toggleClass("open"),requestNextAnimationFrame(function(){c.addClass(j).removeData(k)});var n=function(d){a(d.target).is(".primary-nav > ul > li *, a.menu-trigger")||(d.preventDefault(),b(c,n,o,l))},o=function(){b(c,n,o,l)};return setTimeout(function(){g.on("click",n),nab.bindScroll(h,o)},1),d=c,{mainClickHandler:n,mainScrollHandler:o}}var d=null,e=a(".primary-nav > ul > li"),f={mainClickHandler:null,mainScrollHandler:null},g=a("#wrapper"),h=g.find("main"),i="hidden",j="active",k="transitionEndEvent";a(".primary-nav > ul > li > a.menu-trigger").click(function(g){g.preventDefault();var h=a(this).attr("data-submenu-level"),i=a(this).attr("data-submenu-item"),k=e.children("ul[data-submenu-item='"+i+"'][data-submenu-level='"+h+"']");k.hasClass(j)?b(k[0],f.mainClickHandler,f.mainScrollHandler,a(this)):f=c(k,d?d[0]:null,a(this))}).on("keydown",function(b){var c,d;9!==b.which||b.shiftKey||"true"!=a(this).attr("aria-expanded")||(b.preventDefault(),c=a(this).attr("data-submenu-level"),d=a(this).attr("data-submenu-item"),e.children("ul[data-submenu-item='"+d+"'][data-submenu-level='"+c+"']").find("a:first").focus())}),e.find('[data-type="mega-menu"][data-submenu-level="1"]').on("keydown","a:first",function(b){if(9===b.which&&b.shiftKey){b.preventDefault();var c=a(this).closest('[data-type="mega-menu"][data-submenu-level="1"]'),d=c.attr("data-submenu-level"),e=c.attr("data-submenu-item");a(".primary-nav").find("a.menu-trigger[data-submenu-item='"+e+"'][data-submenu-level='"+d+"']").focus()}})}($),$('.primary-nav ul[data-type="mega-menu"] a.menu-trigger').click(function(a){a.preventDefault(),a.stopPropagation();var b=$(this).attr("data-submenu-level"),c=$(this).attr("data-submenu-item");$(this).closest("ul.dropdown").find("li.active").not("[data-submenu-item='"+c+"'][data-submenu-level='"+b+"']").removeClass("active").find("a.menu-trigger").attr("aria-expanded","false"),$(this).attr("aria-expanded","true").parent().addClass("active")}),function(){var a=function(){for(var a=document.querySelectorAll('ul[data-type="mega-menu"]'),b=0,c=a.length;c>b;b++)a[b].style.width=document.documentElement.clientWidth+"px"};a(),nab.addResponsiveFunctionXS(a,!1),nab.addResponsiveFunctionSM(a,!1),nab.addResponsiveFunctionMD(a,!1),nab.addResponsiveFunctionLG(a,!1)}(),nab.skipLinks(),nab.buttonActions("button-action"),$(window).on("eventButtonCreated",function(a,b){nab.buttonActions(b)})}),nab.scrollUpLogin=nab.scrollUpLogin||{},nab.scrollUpLogin.setButtonPos=function(){var a=$("#button-action").offset().top,b=$("header").height(),c=a-b,d=$("#button-action").outerHeight(),e=document.documentElement.clientWidth;c=-d>c?-d:c,nab.scrollUpLogin.variables.actionButtonClone.removeAttribute("style"),nab.scrollUpLogin.variables.loginButton.removeAttribute("style"),0>=c&&e<nab.screenSm?(nab.scrollUpLogin.variables.loginButton.style[nab.scrollUpLogin.variables.transformType]="translateY(-50px)",nab.scrollUpLogin.variables.loginButton.style.display="none"):50>=c&&e<nab.screenSm?(nab.scrollUpLogin.variables.loginButton.style[nab.scrollUpLogin.variables.transformType]="translateY("+Number(c-d)+"px)",nab.scrollUpLogin.variables.actionButtonClone.style[nab.scrollUpLogin.variables.transformType]="translateY("+c+"px)"):0>=c&&e>=nab.screenSm?(nab.scrollUpLogin.variables.loginButton.style[nab.scrollUpLogin.variables.transformType]="translateY("+c+"px)",nab.scrollUpLogin.variables.actionButtonClone.style[nab.scrollUpLogin.variables.transformType]="translateY("+c+"px)"):nab.scrollUpLogin.variables.actionButtonClone.style.display="none"},nab.scrollUpLogin.initialise=function(){actionBtnClone=document.getElementById("button-action").cloneNode(!0),actionBtnClone.id="button-action-clone",document.getElementsByTagName("header")[0].appendChild(actionBtnClone),nab.scrollUpLogin.variables={transformType:"transform",actionButtonClone:document.getElementById("button-action-clone"),loginButton:document.getElementById("login")},"transform"in document.body.style?nab.scrollUpLogin.variables.transformType="transform":"WebkitTransform"in document.body.style?nab.scrollUpLogin.variables.transformType="webkitTransform":"MozTransform"in document.body.style?nab.scrollUpLogin.variables.transformType="MozTransform":"msTransform"in document.body.style?nab.scrollUpLogin.variables.transformType="msTransform":"OTransform"in document.body.style&&(nab.scrollUpLogin.variables.transformType="OTransform"),nab.scrollUpLogin.setButtonPos(),$("main").on("touchmove",function(a){nab.scrollUpLogin.setButtonPos()}).on("scroll",function(a){nab.scrollUpLogin.setButtonPos()}).on("gesturechange",function(a){nab.scrollUpLogin.setButtonPos()}),nab.addResponsiveFunctionXS(nab.scrollUpLogin.setButtonPos,!1),nab.addResponsiveFunctionSM(nab.scrollUpLogin.setButtonPos,!1),nab.addResponsiveFunctionMD(nab.scrollUpLogin.setButtonPos,!1),nab.addResponsiveFunctionLG(nab.scrollUpLogin.setButtonPos,!1),nab.addResponsiveFunctionXL(nab.scrollUpLogin.setButtonPos,!1)};
(function(){$(function(){var a;return a=$('img[src$="svg"]').not(".background").hide(),a.each(function(a,b){var c=this;return $.get(this.src).success(function(a){var b,d,e,f,g,h,i,j=!1,k=!1;for(b=$(a).find("svg"),g=c.attributes,h=0,i=g.length;i>h;h++)d=g[h],e=d.name,f=d.value,"src"!==e&&"style"!==e&&b.attr(e,f),"aria-hidden"==e&&(j=!0),"aria-hidden"==e&&(k=!0);return j||b.attr("aria-hidden","true"),k||b.attr("focusable","false"),$(c).replaceWith(b)})})})}).call(this);
function updateCookie(a){var b,c=null,d=new Date,e=document.cookie.split(/;\s*/);if("undefined"!=typeof window.nab.localStorage&&(c=nab.localStorage.getItem(a)),!c||null===c)for(nameEQ=a+"=",b=0;b<e.length;b++)if(0===e[b].indexOf(nameEQ)){c=e[b].substring(nameEQ.length);break}c&&null!==c||(c=Math.round(1e13*Math.random()).toString(36)+Math.round(d.getTimezoneOffset()).toString()+"."+d.getTime().toString(36)+"."+screen.availHeight),d.setTime(d.getTime()+157248e5),document.cookie=a+"="+c+"; expires="+d.toGMTString()+"; path=/; domain=.nab.com.au","undefined"!=typeof window.nab.localStorage&&nab.localStorage.setItem(a,c)}updateCookie("cview3");
!function(){$(window).on("resize load",function(){var a,b=document.documentElement.clientWidth;if(b<nab.screenXs){a=nab.responsiveFunctions.xs;for(var c in a)a.hasOwnProperty(c)&&a[c]["function"]()}else if(b>=nab.screenXs&&b<nab.screenSm){a=nab.responsiveFunctions.sm;for(var c in a)a.hasOwnProperty(c)&&a[c]["function"]()}else if(b>=nab.screenSm&&b<nab.screenMd){a=nab.responsiveFunctions.md;for(var c in a)a.hasOwnProperty(c)&&a[c]["function"]()}else if(b>=nab.screenMd&&b<nab.screenLg){a=nab.responsiveFunctions.lg;for(var c in a)a.hasOwnProperty(c)&&a[c]["function"]()}else{a=nab.responsiveFunctions.xl;for(var c in a)a.hasOwnProperty(c)&&a[c]["function"]()}})}();
