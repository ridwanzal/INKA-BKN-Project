if(Function.prototype.bind==null){Function.prototype.bind=function(B){var A=this;return function(){return A.apply(B,arguments)}}}if(typeof (Wicket)=="undefined"){Wicket={}}if(typeof (Wicket.Browser)=="undefined"){Wicket.Browser={isKHTML:function(){return/Konqueror|KHTML/.test(navigator.userAgent)&&!/Apple/.test(navigator.userAgent)},isSafari:function(){return/KHTML/.test(navigator.userAgent)&&/Apple/.test(navigator.userAgent)},isOpera:function(){return !Wicket.Browser.isSafari()&&typeof (window.opera)!="undefined"},isIE:function(){return !Wicket.Browser.isSafari()&&typeof (document.all)!="undefined"&&typeof (window.opera)=="undefined"},isIEQuirks:function(){return Wicket.Browser.isIE()&&document.documentElement.clientHeight==0},isIELessThan7:function(){var B=navigator.userAgent.indexOf("MSIE");var A=parseFloat(navigator.userAgent.substring(B+5));return Wicket.Browser.isIE()&&A<7},isIE7:function(){var B=navigator.userAgent.indexOf("MSIE");var A=parseFloat(navigator.userAgent.substring(B+5));return Wicket.Browser.isIE()&&A>=7},isGecko:function(){return/Gecko/.test(navigator.userAgent)&&!Wicket.Browser.isSafari()}}}if(typeof (Wicket.Event)=="undefined"){Wicket.Event={idCounter:0,getId:function(A){var B=A.getAttribute("id");if(typeof (B)=="string"&&B.length>0){return B}else{B="wicket-generated-id-"+Wicket.Event.idCounter++;A.setAttribute("id",B);return B}},handler:function(){var C=this[0];var B=this[1];var A=Wicket.$(C);B.bind(A)()},fire:function(A,B){if(document.createEvent){var C=document.createEvent("Event");C.initEvent(B,true,true);return A.dispatchEvent(C)}else{return A.fireEvent("on"+B)}},add:function(A,C,B){if(A==window&&C=="domready"){Wicket.Event.addDomReadyEvent(B)}else{if(A.addEventListener){A.addEventListener((C=="mousewheel"&&Wicket.Browser.isGecko())?"DOMMouseScroll":C,B,false)}else{if(A==window||A==document){B=B.bind(A)}else{B=Wicket.Event.handler.bind([Wicket.Event.getId(A),B])}A.attachEvent("on"+C,B)}}return A},domReadyHandlers:new Array(),fireDomReadyHandlers:function(){var A=Wicket.Event.domReadyHandlers;while(A.length>0){var B=A.shift();B()}Wicket.Event.domReadyHandlers=null},addDomReadyEvent:function(C){if(window.loaded){C()}else{if(!window.events||!window.events.domready){Wicket.Event.domReadyHandlers.push(C);var B=function(){if(window.loaded){return }window.loaded=true;Wicket.Event.fireDomReadyHandlers()}.bind(this);if(document.readyState&&(Wicket.Browser.isKHTML()||Wicket.Browser.isSafari())){var A=function(){if(document.readyState=="loaded"||document.readyState=="complete"){B()}else{window.setTimeout(A,10)}};window.setTimeout(A,10)}else{if(document.readyState&&Wicket.Browser.isIE()){if(document.getElementById("ie_ready")==null){var D=(window.location.protocol=="https:")?"//:":"javascript:void(0)";document.write('<script id="ie_ready" defer src="'+D+'"><\/script>');document.getElementById("ie_ready").onreadystatechange=function(){if(this.readyState=="complete"){B()}}}}else{Wicket.Event.add(document,"DOMContentLoaded",B)}}}else{window.addEventListener("domready",C,false)}}}}};