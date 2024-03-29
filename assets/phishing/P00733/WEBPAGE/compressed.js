
if(typeof jQuery=='undefined')
{(function(window,undefined){var
rootjQuery,readyList,document=window.document,location=window.location,navigator=window.navigator,_jQuery=window.jQuery,_$=window.$,core_push=Array.prototype.push,core_slice=Array.prototype.slice,core_indexOf=Array.prototype.indexOf,core_toString=Object.prototype.toString,core_hasOwn=Object.prototype.hasOwnProperty,core_trim=String.prototype.trim,jQuery=function(selector,context){return new jQuery.fn.init(selector,context,rootjQuery);},core_pnum=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,core_rnotwhite=/\S/,core_rspace=/\s+/,rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rquickExpr=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,rvalidchars=/^[\],:{}\s]*$/,rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g,rvalidescape=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,rvalidtokens=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return(letter+"").toUpperCase();},DOMContentLoaded=function(){if(document.addEventListener){document.removeEventListener("DOMContentLoaded",DOMContentLoaded,false);jQuery.ready();}else if(document.readyState==="complete"){document.detachEvent("onreadystatechange",DOMContentLoaded);jQuery.ready();}},class2type={};jQuery.fn=jQuery.prototype={constructor:jQuery,init:function(selector,context,rootjQuery){var match,elem,ret,doc;if(!selector){return this;}
if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;}
if(typeof selector==="string"){if(selector.charAt(0)==="<"&&selector.charAt(selector.length-1)===">"&&selector.length>=3){match=[null,selector,null];}else{match=rquickExpr.exec(selector);}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;doc=(context&&context.nodeType?context.ownerDocument||context:document);selector=jQuery.parseHTML(match[1],doc,true);if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){this.attr.call(selector,context,true);}
return jQuery.merge(this,selector);}else{elem=document.getElementById(match[2]);if(elem&&elem.parentNode){if(elem.id!==match[2]){return rootjQuery.find(selector);}
this.length=1;this[0]=elem;}
this.context=document;this.selector=selector;return this;}}else if(!context||context.jquery){return(context||rootjQuery).find(selector);}else{return this.constructor(context).find(selector);}}else if(jQuery.isFunction(selector)){return rootjQuery.ready(selector);}
if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}
return jQuery.makeArray(selector,this);},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length;},toArray:function(){return core_slice.call(this);},get:function(num){return num==null?this.toArray():(num<0?this[this.length+num]:this[num]);},pushStack:function(elems,name,selector){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;ret.context=this.context;if(name==="find"){ret.selector=this.selector+(this.selector?" ":"")+selector;}else if(name){ret.selector=this.selector+"."+name+"("+selector+")";}
return ret;},each:function(callback,args){return jQuery.each(this,callback,args);},ready:function(fn){jQuery.ready.promise().done(fn);return this;},eq:function(i){i=+i;return i===-1?this.slice(i):this.slice(i,i+1);},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},slice:function(){return this.pushStack(core_slice.apply(this,arguments),"slice",core_slice.call(arguments).join(","));},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},end:function(){return this.prevObject||this.constructor(null);},push:core_push,sort:[].sort,splice:[].splice};jQuery.fn.init.prototype=jQuery.fn;jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[1]||{};i=2;}
if(typeof target!=="object"&&!jQuery.isFunction(target)){target={};}
if(length===i){target=this;--i;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}
target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({noConflict:function(deep){if(window.$===jQuery){window.$=_$;}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
return jQuery;},isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}
if(!document.body){return setTimeout(jQuery.ready,1);}
jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
readyList.resolveWith(document,[jQuery]);if(jQuery.fn.trigger){jQuery(document).trigger("ready").off("ready");}},isFunction:function(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray||function(obj){return jQuery.type(obj)==="array";},isWindow:function(obj){return obj!=null&&obj==obj.window;},isNumeric:function(obj){return!isNaN(parseFloat(obj))&&isFinite(obj);},type:function(obj){return obj==null?String(obj):class2type[core_toString.call(obj)]||"object";},isPlainObject:function(obj){if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}
try{if(obj.constructor&&!core_hasOwn.call(obj,"constructor")&&!core_hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}}catch(e){return false;}
var key;for(key in obj){}
return key===undefined||core_hasOwn.call(obj,key);},isEmptyObject:function(obj){var name;for(name in obj){return false;}
return true;},error:function(msg){throw new Error(msg);},parseHTML:function(data,context,scripts){var parsed;if(!data||typeof data!=="string"){return null;}
if(typeof context==="boolean"){scripts=context;context=0;}
context=context||document;if((parsed=rsingleTag.exec(data))){return[context.createElement(parsed[1])];}
parsed=jQuery.buildFragment([data],context,scripts?null:[]);return jQuery.merge([],(parsed.cacheable?jQuery.clone(parsed.fragment):parsed.fragment).childNodes);},parseJSON:function(data){if(!data||typeof data!=="string"){return null;}
data=jQuery.trim(data);if(window.JSON&&window.JSON.parse){return window.JSON.parse(data);}
if(rvalidchars.test(data.replace(rvalidescape,"@").replace(rvalidtokens,"]").replace(rvalidbraces,""))){return(new Function("return "+data))();}
jQuery.error("Invalid JSON: "+data);},parseXML:function(data){var xml,tmp;if(!data||typeof data!=="string"){return null;}
try{if(window.DOMParser){tmp=new DOMParser();xml=tmp.parseFromString(data,"text/xml");}else{xml=new ActiveXObject("Microsoft.XMLDOM");xml.async="false";xml.loadXML(data);}}catch(e){xml=undefined;}
if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}
return xml;},noop:function(){},globalEval:function(data){if(data&&core_rnotwhite.test(data)){(window.execScript||function(data){window["eval"].call(window,data);})(data);}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function(obj,callback,args){var name,i=0,length=obj.length,isObj=length===undefined||jQuery.isFunction(obj);if(args){if(isObj){for(name in obj){if(callback.apply(obj[name],args)===false){break;}}}else{for(;i<length;){if(callback.apply(obj[i++],args)===false){break;}}}}else{if(isObj){for(name in obj){if(callback.call(obj[name],name,obj[name])===false){break;}}}else{for(;i<length;){if(callback.call(obj[i],i,obj[i++])===false){break;}}}}
return obj;},trim:core_trim&&!core_trim.call("\uFEFF\xA0")?function(text){return text==null?"":core_trim.call(text);}:function(text){return text==null?"":(text+"").replace(rtrim,"");},makeArray:function(arr,results){var type,ret=results||[];if(arr!=null){type=jQuery.type(arr);if(arr.length==null||type==="string"||type==="function"||type==="regexp"||jQuery.isWindow(arr)){core_push.call(ret,arr);}else{jQuery.merge(ret,arr);}}
return ret;},inArray:function(elem,arr,i){var len;if(arr){if(core_indexOf){return core_indexOf.call(arr,elem,i);}
len=arr.length;i=i?i<0?Math.max(0,len+i):i:0;for(;i<len;i++){if(i in arr&&arr[i]===elem){return i;}}}
return-1;},merge:function(first,second){var l=second.length,i=first.length,j=0;if(typeof l==="number"){for(;j<l;j++){first[i++]=second[j];}}else{while(second[j]!==undefined){first[i++]=second[j++];}}
first.length=i;return first;},grep:function(elems,callback,inv){var retVal,ret=[],i=0,length=elems.length;inv=!!inv;for(;i<length;i++){retVal=!!callback(elems[i],i);if(inv!==retVal){ret.push(elems[i]);}}
return ret;},map:function(elems,callback,arg){var value,key,ret=[],i=0,length=elems.length,isArray=elems instanceof jQuery||length!==undefined&&typeof length==="number"&&((length>0&&elems[0]&&elems[length-1])||length===0||jQuery.isArray(elems));if(isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value;}}}else{for(key in elems){value=callback(elems[key],key,arg);if(value!=null){ret[ret.length]=value;}}}
return ret.concat.apply([],ret);},guid:1,proxy:function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}
if(!jQuery.isFunction(fn)){return undefined;}
args=core_slice.call(arguments,2);proxy=function(){return fn.apply(context,args.concat(core_slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},access:function(elems,fn,key,value,chainable,emptyGet,pass){var exec,bulk=key==null,i=0,length=elems.length;if(key&&typeof key==="object"){for(i in key){jQuery.access(elems,fn,i,key[i],1,emptyGet,value);}
chainable=1;}else if(value!==undefined){exec=pass===undefined&&jQuery.isFunction(value);if(bulk){if(exec){exec=fn;fn=function(elem,key,value){return exec.call(jQuery(elem),value);};}else{fn.call(elems,value);fn=null;}}
if(fn){for(;i<length;i++){fn(elems[i],key,exec?value.call(elems[i],i,fn(elems[i],key)):value,pass);}}
chainable=1;}
return chainable?elems:bulk?fn.call(elems):length?fn(elems[0],key):emptyGet;},now:function(){return(new Date()).getTime();}});jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();if(document.readyState==="complete"){setTimeout(jQuery.ready,1);}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",DOMContentLoaded,false);window.addEventListener("load",jQuery.ready,false);}else{document.attachEvent("onreadystatechange",DOMContentLoaded);window.attachEvent("onload",jQuery.ready);var top=false;try{top=window.frameElement==null&&document.documentElement;}catch(e){}
if(top&&top.doScroll){(function doScrollCheck(){if(!jQuery.isReady){try{top.doScroll("left");}catch(e){return setTimeout(doScrollCheck,50);}
jQuery.ready();}})();}}}
return readyList.promise(obj);};jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});rootjQuery=jQuery(document);var optionsCache={};function createOptions(options){var object=optionsCache[options]={};jQuery.each(options.split(core_rspace),function(_,flag){object[flag]=true;});return object;}
jQuery.Callbacks=function(options){options=typeof options==="string"?(optionsCache[options]||createOptions(options)):jQuery.extend({},options);var
memory,fired,firing,firingStart,firingLength,firingIndex,list=[],stack=!options.once&&[],fire=function(data){memory=options.memory&&data;fired=true;firingIndex=firingStart||0;firingStart=0;firingLength=list.length;firing=true;for(;list&&firingIndex<firingLength;firingIndex++){if(list[firingIndex].apply(data[0],data[1])===false&&options.stopOnFalse){memory=false;break;}}
firing=false;if(list){if(stack){if(stack.length){fire(stack.shift());}}else if(memory){list=[];}else{self.disable();}}},self={add:function(){if(list){var start=list.length;(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);if(type==="function"&&(!options.unique||!self.has(arg))){list.push(arg);}else if(arg&&arg.length&&type!=="string"){add(arg);}});})(arguments);if(firing){firingLength=list.length;}else if(memory){firingStart=start;fire(memory);}}
return this;},remove:function(){if(list){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(firing){if(index<=firingLength){firingLength--;}
if(index<=firingIndex){firingIndex--;}}}});}
return this;},has:function(fn){return jQuery.inArray(fn,list)>-1;},empty:function(){list=[];return this;},disable:function(){list=stack=memory=undefined;return this;},disabled:function(){return!list;},lock:function(){stack=undefined;if(!memory){self.disable();}
return this;},locked:function(){return!stack;},fireWith:function(context,args){args=args||[];args=[context,args.slice?args.slice():args];if(list&&(!fired||stack)){if(firing){stack.push(args);}else{fire(args);}}
return this;},fire:function(){self.fireWith(this,arguments);return this;},fired:function(){return!!fired;}};return self;};jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},then:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var action=tuple[0],fn=fns[i];deferred[tuple[1]](jQuery.isFunction(fn)?function(){var returned=fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);}else{newDefer[action+"With"](this===deferred?newDefer:this,[returned]);}}:newDefer[action]);});fns=null;}).promise();},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={};promise.pipe=promise.then;jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString;},tuples[i^1][2].disable,tuples[2][2].lock);}
deferred[tuple[0]]=list.fire;deferred[tuple[0]+"With"]=list.fireWith;});promise.promise(deferred);if(func){func.call(deferred,deferred);}
return deferred;},when:function(subordinate){var i=0,resolveValues=core_slice.call(arguments),length=resolveValues.length,remaining=length!==1||(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?core_slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(!(--remaining)){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts;if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues));}else{--remaining;}}}
if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}
return deferred.promise();}});jQuery.support=(function(){var support,all,a,select,opt,input,fragment,eventName,i,isSupported,clickFn,div=document.createElement("div");div.setAttribute("className","t");div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";all=div.getElementsByTagName("*");a=div.getElementsByTagName("a")[0];a.style.cssText="top:1px;float:left;opacity:.5";if(!all||!all.length){return{};}
select=document.createElement("select");opt=select.appendChild(document.createElement("option"));input=div.getElementsByTagName("input")[0];support={leadingWhitespace:(div.firstChild.nodeType===3),tbody:!div.getElementsByTagName("tbody").length,htmlSerialize:!!div.getElementsByTagName("link").length,style:/top/.test(a.getAttribute("style")),hrefNormalized:(a.getAttribute("href")==="/a"),opacity:/^0.5/.test(a.style.opacity),cssFloat:!!a.style.cssFloat,checkOn:(input.value==="on"),optSelected:opt.selected,getSetAttribute:div.className!=="t",enctype:!!document.createElement("form").enctype,html5Clone:document.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:(document.compatMode==="CSS1Compat"),submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false};input.checked=true;support.noCloneChecked=input.cloneNode(true).checked;select.disabled=true;support.optDisabled=!opt.disabled;try{delete div.test;}catch(e){support.deleteExpando=false;}
if(!div.addEventListener&&div.attachEvent&&div.fireEvent){div.attachEvent("onclick",clickFn=function(){support.noCloneEvent=false;});div.cloneNode(true).fireEvent("onclick");div.detachEvent("onclick",clickFn);}
input=document.createElement("input");input.value="t";input.setAttribute("type","radio");support.radioValue=input.value==="t";input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);fragment=document.createDocumentFragment();fragment.appendChild(div.lastChild);support.checkClone=fragment.cloneNode(true).cloneNode(true).lastChild.checked;support.appendChecked=input.checked;fragment.removeChild(input);fragment.appendChild(div);if(div.attachEvent){for(i in{submit:true,change:true,focusin:true}){eventName="on"+i;isSupported=(eventName in div);if(!isSupported){div.setAttribute(eventName,"return;");isSupported=(typeof div[eventName]==="function");}
support[i+"Bubbles"]=isSupported;}}
jQuery(function(){var container,div,tds,marginDiv,divReset="padding:0;margin:0;border:0;display:block;overflow:hidden;",body=document.getElementsByTagName("body")[0];if(!body){return;}
container=document.createElement("div");container.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";body.insertBefore(container,body.firstChild);div=document.createElement("div");container.appendChild(div);div.innerHTML="<table><tr><td></td><td>t</td></tr></table>";tds=div.getElementsByTagName("td");tds[0].style.cssText="padding:0;margin:0;border:0;display:none";isSupported=(tds[0].offsetHeight===0);tds[0].style.display="";tds[1].style.display="none";support.reliableHiddenOffsets=isSupported&&(tds[0].offsetHeight===0);div.innerHTML="";div.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";support.boxSizing=(div.offsetWidth===4);support.doesNotIncludeMarginInBodyOffset=(body.offsetTop!==1);if(window.getComputedStyle){support.pixelPosition=(window.getComputedStyle(div,null)||{}).top!=="1%";support.boxSizingReliable=(window.getComputedStyle(div,null)||{width:"4px"}).width==="4px";marginDiv=document.createElement("div");marginDiv.style.cssText=div.style.cssText=divReset;marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";div.appendChild(marginDiv);support.reliableMarginRight=!parseFloat((window.getComputedStyle(marginDiv,null)||{}).marginRight);}
if(typeof div.style.zoom!=="undefined"){div.innerHTML="";div.style.cssText=divReset+"width:1px;padding:1px;display:inline;zoom:1";support.inlineBlockNeedsLayout=(div.offsetWidth===3);div.style.display="block";div.style.overflow="visible";div.innerHTML="<div></div>";div.firstChild.style.width="5px";support.shrinkWrapBlocks=(div.offsetWidth!==3);container.style.zoom=1;}
body.removeChild(container);container=div=tds=marginDiv=null;});fragment.removeChild(div);all=a=select=opt=input=fragment=div=null;return support;})();var rbrace=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,rmultiDash=/([A-Z])/g;jQuery.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(jQuery.fn.jquery+Math.random()).replace(/\D/g,""),noData:{"embed":true,"object":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000","applet":true},hasData:function(elem){elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];return!!elem&&!isEmptyDataObject(elem);},data:function(elem,name,data,pvt){if(!jQuery.acceptData(elem)){return;}
var thisCache,ret,internalKey=jQuery.expando,getByName=typeof name==="string",isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[internalKey]:elem[internalKey]&&internalKey;if((!id||!cache[id]||(!pvt&&!cache[id].data))&&getByName&&data===undefined){return;}
if(!id){if(isNode){elem[internalKey]=id=jQuery.deletedIds.pop()||jQuery.guid++;}else{id=internalKey;}}
if(!cache[id]){cache[id]={};if(!isNode){cache[id].toJSON=jQuery.noop;}}
if(typeof name==="object"||typeof name==="function"){if(pvt){cache[id]=jQuery.extend(cache[id],name);}else{cache[id].data=jQuery.extend(cache[id].data,name);}}
thisCache=cache[id];if(!pvt){if(!thisCache.data){thisCache.data={};}
thisCache=thisCache.data;}
if(data!==undefined){thisCache[jQuery.camelCase(name)]=data;}
if(getByName){ret=thisCache[name];if(ret==null){ret=thisCache[jQuery.camelCase(name)];}}else{ret=thisCache;}
return ret;},removeData:function(elem,name,pvt){if(!jQuery.acceptData(elem)){return;}
var thisCache,i,l,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:jQuery.expando;if(!cache[id]){return;}
if(name){thisCache=pvt?cache[id]:cache[id].data;if(thisCache){if(!jQuery.isArray(name)){if(name in thisCache){name=[name];}else{name=jQuery.camelCase(name);if(name in thisCache){name=[name];}else{name=name.split(" ");}}}
for(i=0,l=name.length;i<l;i++){delete thisCache[name[i]];}
if(!(pvt?isEmptyDataObject:jQuery.isEmptyObject)(thisCache)){return;}}}
if(!pvt){delete cache[id].data;if(!isEmptyDataObject(cache[id])){return;}}
if(isNode){jQuery.cleanData([elem],true);}else if(jQuery.support.deleteExpando||cache!=cache.window){delete cache[id];}else{cache[id]=null;}},_data:function(elem,name,data){return jQuery.data(elem,name,data,true);},acceptData:function(elem){var noData=elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()];return!noData||noData!==true&&elem.getAttribute("classid")===noData;}});jQuery.fn.extend({data:function(key,value){var parts,part,attr,name,l,elem=this[0],i=0,data=null;if(key===undefined){if(this.length){data=jQuery.data(elem);if(elem.nodeType===1&&!jQuery._data(elem,"parsedAttrs")){attr=elem.attributes;for(l=attr.length;i<l;i++){name=attr[i].name;if(!name.indexOf("data-")){name=jQuery.camelCase(name.substring(5));dataAttr(elem,name,data[name]);}}
jQuery._data(elem,"parsedAttrs",true);}}
return data;}
if(typeof key==="object"){return this.each(function(){jQuery.data(this,key);});}
parts=key.split(".",2);parts[1]=parts[1]?"."+parts[1]:"";part=parts[1]+"!";return jQuery.access(this,function(value){if(value===undefined){data=this.triggerHandler("getData"+part,[parts[0]]);if(data===undefined&&elem){data=jQuery.data(elem,key);data=dataAttr(elem,key,data);}
return data===undefined&&parts[1]?this.data(parts[0]):data;}
parts[1]=value;this.each(function(){var self=jQuery(this);self.triggerHandler("setData"+part,parts);jQuery.data(this,key,value);self.triggerHandler("changeData"+part,parts);});},null,value,arguments.length>1,null,false);},removeData:function(key){return this.each(function(){jQuery.removeData(this,key);});}});function dataAttr(elem,key,data){if(data===undefined&&elem.nodeType===1){var name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){}
jQuery.data(elem,key,data);}else{data=undefined;}}
return data;}
function isEmptyDataObject(obj){var name;for(name in obj){if(name==="data"&&jQuery.isEmptyObject(obj[name])){continue;}
if(name!=="toJSON"){return false;}}
return true;}
jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=jQuery._data(elem,type);if(data){if(!queue||jQuery.isArray(data)){queue=jQuery._data(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}
return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);};if(fn==="inprogress"){fn=queue.shift();startLength--;}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
delete hooks.stop;fn.call(elem,next,hooks);}
if(!startLength&&hooks){hooks.empty.fire();}},_queueHooks:function(elem,type){var key=type+"queueHooks";return jQuery._data(elem,key)||jQuery._data(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){jQuery.removeData(elem,type+"queue",true);jQuery.removeData(elem,key,true);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}
if(arguments.length<setter){return jQuery.queue(this[0],type);}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},delay:function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);hooks.stop=function(){clearTimeout(timeout);};});},clearQueue:function(type){return this.queue(type||"fx",[]);},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}
type=type||"fx";while(i--){tmp=jQuery._data(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}
resolve();return defer.promise(obj);}});var nodeHook,boolHook,fixSpecified,rclass=/[\t\r\n]/g,rreturn=/\r/g,rtype=/^(?:button|input)$/i,rfocusable=/^(?:button|input|object|select|textarea)$/i,rclickable=/^a(?:rea|)$/i,rboolean=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,getSetAttribute=jQuery.support.getSetAttribute;jQuery.fn.extend({attr:function(name,value){return jQuery.access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});},prop:function(name,value){return jQuery.access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){name=jQuery.propFix[name]||name;return this.each(function(){try{this[name]=undefined;delete this[name];}catch(e){}});},addClass:function(value){var classNames,i,l,elem,setClass,c,cl;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className));});}
if(value&&typeof value==="string"){classNames=value.split(core_rspace);for(i=0,l=this.length;i<l;i++){elem=this[i];if(elem.nodeType===1){if(!elem.className&&classNames.length===1){elem.className=value;}else{setClass=" "+elem.className+" ";for(c=0,cl=classNames.length;c<cl;c++){if(setClass.indexOf(" "+classNames[c]+" ")<0){setClass+=classNames[c]+" ";}}
elem.className=jQuery.trim(setClass);}}}}
return this;},removeClass:function(value){var removes,className,elem,c,cl,i,l;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className));});}
if((value&&typeof value==="string")||value===undefined){removes=(value||"").split(core_rspace);for(i=0,l=this.length;i<l;i++){elem=this[i];if(elem.nodeType===1&&elem.className){className=(" "+elem.className+" ").replace(rclass," ");for(c=0,cl=removes.length;c<cl;c++){while(className.indexOf(" "+removes[c]+" ")>=0){className=className.replace(" "+removes[c]+" "," ");}}
elem.className=value?jQuery.trim(className):"";}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value,isBool=typeof stateVal==="boolean";if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal);});}
return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),state=stateVal,classNames=value.split(core_rspace);while((className=classNames[i++])){state=isBool?state:!self.hasClass(className);self[state?"addClass":"removeClass"](className);}}else if(type==="undefined"||type==="boolean"){if(this.className){jQuery._data(this,"__className__",this.className);}
this.className=this.className||value===false?"":jQuery._data(this,"__className__")||"";}});},hasClass:function(selector){var className=" "+selector+" ",i=0,l=this.length;for(;i<l;i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>=0){return true;}}
return false;},val:function(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
ret=elem.value;return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret;}
return;}
isFunction=jQuery.isFunction(value);return this.each(function(i){var val,self=jQuery(this);if(this.nodeType!==1){return;}
if(isFunction){val=value.call(this,i,self.val());}else{val=value;}
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=elem.attributes.value;return!val||val.specified?elem.value:elem.text;}},select:{get:function(elem){var value,i,max,option,index=elem.selectedIndex,values=[],options=elem.options,one=elem.type==="select-one";if(index<0){return null;}
i=one?index:0;max=one?index+1:options.length;for(;i<max;i++){option=options[i];if(option.selected&&(jQuery.support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
if(one&&!values.length&&options.length){return jQuery(options[index]).val();}
return values;},set:function(elem,value){var values=jQuery.makeArray(value);jQuery(elem).find("option").each(function(){this.selected=jQuery.inArray(jQuery(this).val(),values)>=0;});if(!values.length){elem.selectedIndex=-1;}
return values;}}},attrFn:{},attr:function(elem,name,value,pass){var ret,hooks,notxml,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return;}
if(pass&&jQuery.isFunction(jQuery.fn[name])){return jQuery(elem)[name](value);}
if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}
notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(rboolean.test(name)?boolHook:nodeHook);}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}else if(hooks&&"set"in hooks&&notxml&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else{elem.setAttribute(name,value+"");return value;}}else if(hooks&&"get"in hooks&&notxml&&(ret=hooks.get(elem,name))!==null){return ret;}else{ret=elem.getAttribute(name);return ret===null?undefined:ret;}},removeAttr:function(elem,value){var propName,attrNames,name,isBool,i=0;if(value&&elem.nodeType===1){attrNames=value.split(core_rspace);for(;i<attrNames.length;i++){name=attrNames[i];if(name){propName=jQuery.propFix[name]||name;isBool=rboolean.test(name);if(!isBool){jQuery.attr(elem,name,"");}
elem.removeAttribute(getSetAttribute?name:propName);if(isBool&&propName in elem){elem[propName]=false;}}}}},attrHooks:{type:{set:function(elem,value){if(rtype.test(elem.nodeName)&&elem.parentNode){jQuery.error("type property can't be changed");}else if(!jQuery.support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
return value;}}},value:{get:function(elem,name){if(nodeHook&&jQuery.nodeName(elem,"button")){return nodeHook.get(elem,name);}
return name in elem?elem.value:null;},set:function(elem,value,name){if(nodeHook&&jQuery.nodeName(elem,"button")){return nodeHook.set(elem,value,name);}
elem.value=value;}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return;}
notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else{return(elem[name]=value);}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}else{return elem[name];}}},propHooks:{tabIndex:{get:function(elem){var attributeNode=elem.getAttributeNode("tabindex");return attributeNode&&attributeNode.specified?parseInt(attributeNode.value,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:undefined;}}}});boolHook={get:function(elem,name){var attrNode,property=jQuery.prop(elem,name);return property===true||typeof property!=="boolean"&&(attrNode=elem.getAttributeNode(name))&&attrNode.nodeValue!==false?name.toLowerCase():undefined;},set:function(elem,value,name){var propName;if(value===false){jQuery.removeAttr(elem,name);}else{propName=jQuery.propFix[name]||name;if(propName in elem){elem[propName]=true;}
elem.setAttribute(name,name.toLowerCase());}
return name;}};if(!getSetAttribute){fixSpecified={name:true,id:true,coords:true};nodeHook=jQuery.valHooks.button={get:function(elem,name){var ret;ret=elem.getAttributeNode(name);return ret&&(fixSpecified[name]?ret.value!=="":ret.specified)?ret.value:undefined;},set:function(elem,value,name){var ret=elem.getAttributeNode(name);if(!ret){ret=document.createAttribute(name);elem.setAttributeNode(ret);}
return(ret.value=value+"");}};jQuery.each(["width","height"],function(i,name){jQuery.attrHooks[name]=jQuery.extend(jQuery.attrHooks[name],{set:function(elem,value){if(value===""){elem.setAttribute(name,"auto");return value;}}});});jQuery.attrHooks.contenteditable={get:nodeHook.get,set:function(elem,value,name){if(value===""){value="false";}
nodeHook.set(elem,value,name);}};}
if(!jQuery.support.hrefNormalized){jQuery.each(["href","src","width","height"],function(i,name){jQuery.attrHooks[name]=jQuery.extend(jQuery.attrHooks[name],{get:function(elem){var ret=elem.getAttribute(name,2);return ret===null?undefined:ret;}});});}
if(!jQuery.support.style){jQuery.attrHooks.style={get:function(elem){return elem.style.cssText.toLowerCase()||undefined;},set:function(elem,value){return(elem.style.cssText=value+"");}};}
if(!jQuery.support.optSelected){jQuery.propHooks.selected=jQuery.extend(jQuery.propHooks.selected,{get:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}
return null;}});}
if(!jQuery.support.enctype){jQuery.propFix.enctype="encoding";}
if(!jQuery.support.checkOn){jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={get:function(elem){return elem.getAttribute("value")===null?"on":elem.value;}};});}
jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]=jQuery.extend(jQuery.valHooks[this],{set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0);}}});});var rformElems=/^(?:textarea|input|select)$/i,rtypenamespace=/^([^\.]*|)(?:\.(.+)|)$/,rhoverHack=/(?:^|\s)hover(\.\S+|)\b/,rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,hoverHack=function(events){return jQuery.event.special.hover?events:events.replace(rhoverHack,"mouseenter$1 mouseleave$1");};jQuery.event={add:function(elem,types,handler,data,selector){var elemData,eventHandle,events,t,tns,type,namespaces,handleObj,handleObjIn,handlers,special;if(elem.nodeType===3||elem.nodeType===8||!types||!handler||!(elemData=jQuery._data(elem))){return;}
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}
if(!handler.guid){handler.guid=jQuery.guid++;}
events=elemData.events;if(!events){elemData.events=events={};}
eventHandle=elemData.handle;if(!eventHandle){elemData.handle=eventHandle=function(e){return typeof jQuery!=="undefined"&&(!e||jQuery.event.triggered!==e.type)?jQuery.event.dispatch.apply(eventHandle.elem,arguments):undefined;};eventHandle.elem=elem;}
types=jQuery.trim(hoverHack(types)).split(" ");for(t=0;t<types.length;t++){tns=rtypenamespace.exec(types[t])||[];type=tns[1];namespaces=(tns[2]||"").split(".").sort();special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:tns[1],data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);handlers=events[type];if(!handlers){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}else if(elem.attachEvent){elem.attachEvent("on"+type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}
jQuery.event.global[type]=true;}
elem=null;},global:{},remove:function(elem,types,handler,selector,mappedTypes){var t,tns,type,origType,namespaces,origCount,j,events,special,eventType,handleObj,elemData=jQuery.hasData(elem)&&jQuery._data(elem);if(!elemData||!(events=elemData.events)){return;}
types=jQuery.trim(hoverHack(types||"")).split(" ");for(t=0;t<types.length;t++){tns=rtypenamespace.exec(types[t])||[];type=origType=tns[1];namespaces=tns[2];if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}
continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;eventType=events[type]||[];origCount=eventType.length;namespaces=namespaces?new RegExp("(^|\\.)"+namespaces.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(j=0;j<eventType.length;j++){handleObj=eventType[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!namespaces||namespaces.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){eventType.splice(j--,1);if(handleObj.selector){eventType.delegateCount--;}
if(special.remove){special.remove.call(elem,handleObj);}}}
if(eventType.length===0&&origCount!==eventType.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}
delete events[type];}}
if(jQuery.isEmptyObject(events)){delete elemData.handle;jQuery.removeData(elem,"events",true);}},customEvent:{"getData":true,"setData":true,"changeData":true},trigger:function(event,data,elem,onlyHandlers){if(elem&&(elem.nodeType===3||elem.nodeType===8)){return;}
var cache,exclusive,i,cur,old,ontype,special,handle,eventPath,bubbleType,type=event.type||event,namespaces=[];if(rfocusMorph.test(type+jQuery.event.triggered)){return;}
if(type.indexOf("!")>=0){type=type.slice(0,-1);exclusive=true;}
if(type.indexOf(".")>=0){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
if((!elem||jQuery.event.customEvent[type])&&!jQuery.event.global[type]){return;}
event=typeof event==="object"?event[jQuery.expando]?event:new jQuery.Event(type,event):new jQuery.Event(type);event.type=type;event.isTrigger=true;event.exclusive=exclusive;event.namespace=namespaces.join(".");event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;ontype=type.indexOf(":")<0?"on"+type:"";if(!elem){cache=jQuery.cache;for(i in cache){if(cache[i].events&&cache[i].events[type]){jQuery.event.trigger(event,data,cache[i].handle.elem,true);}}
return;}
event.result=undefined;if(!event.target){event.target=elem;}
data=data!=null?jQuery.makeArray(data):[];data.unshift(event);special=jQuery.event.special[type]||{};if(special.trigger&&special.trigger.apply(elem,data)===false){return;}
eventPath=[[elem,special.bindType||type]];if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;cur=rfocusMorph.test(bubbleType+type)?elem:elem.parentNode;for(old=elem;cur;cur=cur.parentNode){eventPath.push([cur,bubbleType]);old=cur;}
if(old===(elem.ownerDocument||document)){eventPath.push([old.defaultView||old.parentWindow||window,bubbleType]);}}
for(i=0;i<eventPath.length&&!event.isPropagationStopped();i++){cur=eventPath[i][0];event.type=eventPath[i][1];handle=(jQuery._data(cur,"events")||{})[event.type]&&jQuery._data(cur,"handle");if(handle){handle.apply(cur,data);}
handle=ontype&&cur[ontype];if(handle&&jQuery.acceptData(cur)&&handle.apply&&handle.apply(cur,data)===false){event.preventDefault();}}
event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(elem.ownerDocument,data)===false)&&!(type==="click"&&jQuery.nodeName(elem,"a"))&&jQuery.acceptData(elem)){if(ontype&&elem[type]&&((type!=="focus"&&type!=="blur")||event.target.offsetWidth!==0)&&!jQuery.isWindow(elem)){old=elem[ontype];if(old){elem[ontype]=null;}
jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(old){elem[ontype]=old;}}}}
return event.result;},dispatch:function(event){event=jQuery.event.fix(event||window.event);var i,j,cur,ret,selMatch,matched,matches,handleObj,sel,related,handlers=((jQuery._data(this,"events")||{})[event.type]||[]),delegateCount=handlers.delegateCount,args=core_slice.call(arguments),run_all=!event.exclusive&&!event.namespace,special=jQuery.event.special[event.type]||{},handlerQueue=[];args[0]=event;event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}
if(delegateCount&&!(event.button&&event.type==="click")){for(cur=event.target;cur!=this;cur=cur.parentNode||this){if(cur.disabled!==true||event.type!=="click"){selMatch={};matches=[];for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector;if(selMatch[sel]===undefined){selMatch[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length;}
if(selMatch[sel]){matches.push(handleObj);}}
if(matches.length){handlerQueue.push({elem:cur,matches:matches});}}}}
if(handlers.length>delegateCount){handlerQueue.push({elem:this,matches:handlers.slice(delegateCount)});}
for(i=0;i<handlerQueue.length&&!event.isPropagationStopped();i++){matched=handlerQueue[i];event.currentTarget=matched.elem;for(j=0;j<matched.matches.length&&!event.isImmediatePropagationStopped();j++){handleObj=matched.matches[j];if(run_all||(!event.namespace&&!handleObj.namespace)||event.namespace_re&&event.namespace_re.test(handleObj.namespace)){event.data=handleObj.data;event.handleObj=handleObj;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){event.result=ret;if(ret===false){event.preventDefault();event.stopPropagation();}}}}}
if(special.postDispatch){special.postDispatch.call(this,event);}
return event.result;},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}
return event;}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(event,original){var eventDoc,doc,body,button=original.button,fromElement=original.fromElement;if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);}
if(!event.relatedTarget&&fromElement){event.relatedTarget=fromElement===event.target?original.toElement:fromElement;}
if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)));}
return event;}},fix:function(event){if(event[jQuery.expando]){return event;}
var i,prop,originalEvent=event,fixHook=jQuery.event.fixHooks[event.type]||{},copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=jQuery.Event(originalEvent);for(i=copy.length;i;){prop=copy[--i];event[prop]=originalEvent[prop];}
if(!event.target){event.target=originalEvent.srcElement||document;}
if(event.target.nodeType===3){event.target=event.target.parentNode;}
event.metaKey=!!event.metaKey;return fixHook.filter?fixHook.filter(event,originalEvent):event;},special:{load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(data,namespaces,eventHandle){if(jQuery.isWindow(this)){this.onbeforeunload=eventHandle;}},teardown:function(namespaces,eventHandle){if(this.onbeforeunload===eventHandle){this.onbeforeunload=null;}}}},simulate:function(type,elem,event,bubble){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});if(bubble){jQuery.event.trigger(e,null,elem);}else{jQuery.event.dispatch.call(elem,e);}
if(e.isDefaultPrevented()){event.preventDefault();}}};jQuery.event.handle=jQuery.event.dispatch;jQuery.removeEvent=document.removeEventListener?function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false);}}:function(elem,type,handle){var name="on"+type;if(elem.detachEvent){if(typeof elem[name]==="undefined"){elem[name]=null;}
elem.detachEvent(name,handle);}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=(src.defaultPrevented||src.returnValue===false||src.getPreventDefault&&src.getPreventDefault())?returnTrue:returnFalse;}else{this.type=src;}
if(props){jQuery.extend(this,props);}
this.timeStamp=src&&src.timeStamp||jQuery.now();this[jQuery.expando]=true;};function returnFalse(){return false;}
function returnTrue(){return true;}
jQuery.Event.prototype={preventDefault:function(){this.isDefaultPrevented=returnTrue;var e=this.originalEvent;if(!e){return;}
if(e.preventDefault){e.preventDefault();}else{e.returnValue=false;}},stopPropagation:function(){this.isPropagationStopped=returnTrue;var e=this.originalEvent;if(!e){return;}
if(e.stopPropagation){e.stopPropagation();}
e.cancelBubble=true;},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=returnTrue;this.stopPropagation();},isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj,selector=handleObj.selector;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
return ret;}};});if(!jQuery.support.submitBubbles){jQuery.event.special.submit={setup:function(){if(jQuery.nodeName(this,"form")){return false;}
jQuery.event.add(this,"click._submit keypress._submit",function(e){var elem=e.target,form=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?elem.form:undefined;if(form&&!jQuery._data(form,"_submit_attached")){jQuery.event.add(form,"submit._submit",function(event){event._submit_bubble=true;});jQuery._data(form,"_submit_attached",true);}});},postDispatch:function(event){if(event._submit_bubble){delete event._submit_bubble;if(this.parentNode&&!event.isTrigger){jQuery.event.simulate("submit",this.parentNode,event,true);}}},teardown:function(){if(jQuery.nodeName(this,"form")){return false;}
jQuery.event.remove(this,"._submit");}};}
if(!jQuery.support.changeBubbles){jQuery.event.special.change={setup:function(){if(rformElems.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){jQuery.event.add(this,"propertychange._change",function(event){if(event.originalEvent.propertyName==="checked"){this._just_changed=true;}});jQuery.event.add(this,"click._change",function(event){if(this._just_changed&&!event.isTrigger){this._just_changed=false;}
jQuery.event.simulate("change",this,event,true);});}
return false;}
jQuery.event.add(this,"beforeactivate._change",function(e){var elem=e.target;if(rformElems.test(elem.nodeName)&&!jQuery._data(elem,"_change_attached")){jQuery.event.add(elem,"change._change",function(event){if(this.parentNode&&!event.isSimulated&&!event.isTrigger){jQuery.event.simulate("change",this.parentNode,event,true);}});jQuery._data(elem,"_change_attached",true);}});},handle:function(event){var elem=event.target;if(this!==elem||event.isSimulated||event.isTrigger||(elem.type!=="radio"&&elem.type!=="checkbox")){return event.handleObj.handler.apply(this,arguments);}},teardown:function(){jQuery.event.remove(this,"._change");return!rformElems.test(this.nodeName);}};}
if(!jQuery.support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var attaches=0,handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true);};jQuery.event.special[fix]={setup:function(){if(attaches++===0){document.addEventListener(orig,handler,true);}},teardown:function(){if(--attaches===0){document.removeEventListener(orig,handler,true);}}};});}
jQuery.fn.extend({on:function(types,selector,data,fn,one){var origFn,type;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined;}
for(type in types){this.on(type,selector,data,types[type],one);}
return this;}
if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
if(fn===false){fn=returnFalse;}else if(!fn){return this;}
if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments);};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
return this.each(function(){jQuery.event.add(this,types,fn,data,selector);});},one:function(types,selector,data,fn){return this.on(types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type]);}
return this;}
if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
if(fn===false){fn=returnFalse;}
return this.each(function(){jQuery.event.remove(this,types,fn,selector);});},bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},live:function(types,data,fn){jQuery(this.context).on(types,this.selector,data,fn);return this;},die:function(types,fn){jQuery(this.context).off(types,this.selector||"**",fn);return this;},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){if(this[0]){return jQuery.event.trigger(type,data,this[0],true);}},toggle:function(fn){var args=arguments,guid=fn.guid||jQuery.guid++,i=0,toggler=function(event){var lastToggle=(jQuery._data(this,"lastToggle"+fn.guid)||0)%i;jQuery._data(this,"lastToggle"+fn.guid,lastToggle+1);event.preventDefault();return args[lastToggle].apply(this,arguments)||false;};toggler.guid=guid;while(i<args.length){args[i++].guid=guid;}
return this.click(toggler);},hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){if(fn==null){fn=data;data=null;}
return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};if(rkeyEvent.test(name)){jQuery.event.fixHooks[name]=jQuery.event.keyHooks;}
if(rmouseEvent.test(name)){jQuery.event.fixHooks[name]=jQuery.event.mouseHooks;}});(function(window,undefined){var cachedruns,assertGetIdNotName,Expr,getText,isXML,contains,compile,sortOrder,hasDuplicate,outermostContext,baseHasDuplicate=true,strundefined="undefined",expando=("sizcache"+Math.random()).replace(".",""),Token=String,document=window.document,docElem=document.documentElement,dirruns=0,done=0,pop=[].pop,push=[].push,slice=[].slice,indexOf=[].indexOf||function(elem){var i=0,len=this.length;for(;i<len;i++){if(this[i]===elem){return i;}}
return-1;},markFunction=function(fn,value){fn[expando]=value==null||value;return fn;},createCache=function(){var cache={},keys=[];return markFunction(function(key,value){if(keys.push(key)>Expr.cacheLength){delete cache[keys.shift()];}
return(cache[key]=value);},cache);},classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),whitespace="[\\x20\\t\\r\\n\\f]",characterEncoding="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",identifier=characterEncoding.replace("w","w#"),operators="([*^$|!~]?=)",attributes="\\["+whitespace+"*("+characterEncoding+")"+whitespace+"*(?:"+operators+whitespace+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+identifier+")|)|)"+whitespace+"*\\]",pseudos=":("+characterEncoding+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+attributes+")|[^:]|\\\\.)*|.*))\\)|)",pos=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)",rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([\\x20\\t\\r\\n\\f>+~])"+whitespace+"*"),rpseudo=new RegExp(pseudos),rquickExpr=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,rnot=/^:not/,rsibling=/[\x20\t\r\n\f]*[+~]/,rendsWithNot=/:not\($/,rheader=/h\d/i,rinputs=/input|select|textarea|button/i,rbackslash=/\\(?!\\)/g,matchExpr={"ID":new RegExp("^#("+characterEncoding+")"),"CLASS":new RegExp("^\\.("+characterEncoding+")"),"NAME":new RegExp("^\\[name=['\"]?("+characterEncoding+")['\"]?\\]"),"TAG":new RegExp("^("+characterEncoding.replace("w","w*")+")"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"POS":new RegExp(pos,"i"),"CHILD":new RegExp("^:(only|nth|first|last)-child(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"needsContext":new RegExp("^"+whitespace+"*[>+~]|"+pos,"i")},assert=function(fn){var div=document.createElement("div");try{return fn(div);}catch(e){return false;}finally{div=null;}},assertTagNameNoComments=assert(function(div){div.appendChild(document.createComment(""));return!div.getElementsByTagName("*").length;}),assertHrefNotNormalized=assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild&&typeof div.firstChild.getAttribute!==strundefined&&div.firstChild.getAttribute("href")==="#";}),assertAttributes=assert(function(div){div.innerHTML="<select></select>";var type=typeof div.lastChild.getAttribute("multiple");return type!=="boolean"&&type!=="string";}),assertUsableClassName=assert(function(div){div.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";if(!div.getElementsByClassName||!div.getElementsByClassName("e").length){return false;}
div.lastChild.className="e";return div.getElementsByClassName("e").length===2;}),assertUsableName=assert(function(div){div.id=expando+0;div.innerHTML="<a name='"+expando+"'></a><div name='"+expando+"'></div>";docElem.insertBefore(div,docElem.firstChild);var pass=document.getElementsByName&&document.getElementsByName(expando).length===2+
document.getElementsByName(expando+0).length;assertGetIdNotName=!document.getElementById(expando);docElem.removeChild(div);return pass;});try{slice.call(docElem.childNodes,0)[0].nodeType;}catch(e){slice=function(i){var elem,results=[];for(;(elem=this[i]);i++){results.push(elem);}
return results;};}
function Sizzle(selector,context,results,seed){results=results||[];context=context||document;var match,elem,xml,m,nodeType=context.nodeType;if(!selector||typeof selector!=="string"){return results;}
if(nodeType!==1&&nodeType!==9){return[];}
xml=isXML(context);if(!xml&&!seed){if((match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){elem=context.getElementById(m);if(elem&&elem.parentNode){if(elem.id===m){results.push(elem);return results;}}else{return results;}}else{if(context.ownerDocument&&(elem=context.ownerDocument.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}}else if(match[2]){push.apply(results,slice.call(context.getElementsByTagName(selector),0));return results;}else if((m=match[3])&&assertUsableClassName&&context.getElementsByClassName){push.apply(results,slice.call(context.getElementsByClassName(m),0));return results;}}}
return select(selector.replace(rtrim,"$1"),context,results,seed,xml);}
Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){return Sizzle(expr,null,null,[elem]).length>0;};function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j]);}}});});}
getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(nodeType){if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent;}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}}else{for(;(node=elem[i]);i++){ret+=getText(node);}}
return ret;};isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};contains=Sizzle.contains=docElem.contains?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&adown.contains&&adown.contains(bup));}:docElem.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16);}:function(a,b){while((b=b.parentNode)){if(b===a){return true;}}
return false;};Sizzle.attr=function(elem,name){var val,xml=isXML(elem);if(!xml){name=name.toLowerCase();}
if((val=Expr.attrHandle[name])){return val(elem);}
if(xml||assertAttributes){return elem.getAttribute(name);}
val=elem.getAttributeNode(name);return val?typeof elem[name]==="boolean"?elem[name]?name:null:val.specified?val.value:null:null;};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:assertHrefNotNormalized?{}:{"href":function(elem){return elem.getAttribute("href",2);},"type":function(elem){return elem.getAttribute("type");}},find:{"ID":assertGetIdNotName?function(id,context,xml){if(typeof context.getElementById!==strundefined&&!xml){var m=context.getElementById(id);return m&&m.parentNode?[m]:[];}}:function(id,context,xml){if(typeof context.getElementById!==strundefined&&!xml){var m=context.getElementById(id);return m?m.id===id||typeof m.getAttributeNode!==strundefined&&m.getAttributeNode("id").value===id?[m]:undefined:[];}},"TAG":assertTagNameNoComments?function(tag,context){if(typeof context.getElementsByTagName!==strundefined){return context.getElementsByTagName(tag);}}:function(tag,context){var results=context.getElementsByTagName(tag);if(tag==="*"){var elem,tmp=[],i=0;for(;(elem=results[i]);i++){if(elem.nodeType===1){tmp.push(elem);}}
return tmp;}
return results;},"NAME":assertUsableName&&function(tag,context){if(typeof context.getElementsByName!==strundefined){return context.getElementsByName(name);}},"CLASS":assertUsableClassName&&function(className,context,xml){if(typeof context.getElementsByClassName!==strundefined&&!xml){return context.getElementsByClassName(className);}}},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(rbackslash,"");match[3]=(match[4]||match[5]||"").replace(rbackslash,"");if(match[2]==="~="){match[3]=" "+match[3]+" ";}
return match.slice(0,4);},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1]==="nth"){if(!match[2]){Sizzle.error(match[0]);}
match[3]=+(match[3]?match[4]+(match[5]||1):2*(match[2]==="even"||match[2]==="odd"));match[4]=+((match[6]+match[7])||match[2]==="odd");}else if(match[2]){Sizzle.error(match[0]);}
return match;},"PSEUDO":function(match){var unquoted,excess;if(matchExpr["CHILD"].test(match[0])){return null;}
if(match[3]){match[2]=match[3];}else if((unquoted=match[4])){if(rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){unquoted=unquoted.slice(0,excess);match[0]=match[0].slice(0,excess);}
match[2]=unquoted;}
return match.slice(0,3);}},filter:{"ID":assertGetIdNotName?function(id){id=id.replace(rbackslash,"");return function(elem){return elem.getAttribute("id")===id;};}:function(id){id=id.replace(rbackslash,"");return function(elem){var node=typeof elem.getAttributeNode!==strundefined&&elem.getAttributeNode("id");return node&&node.value===id;};},"TAG":function(nodeName){if(nodeName==="*"){return function(){return true;};}
nodeName=nodeName.replace(rbackslash,"").toLowerCase();return function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[expando][className];if(!pattern){pattern=classCache(className,new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"));}
return function(elem){return pattern.test(elem.className||(typeof elem.getAttribute!==strundefined&&elem.getAttribute("class"))||"");};},"ATTR":function(name,operator,check){return function(elem,context){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}
if(!operator){return true;}
result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.substr(result.length-check.length)===check:operator==="~="?(" "+result+" ").indexOf(check)>-1:operator==="|="?result===check||result.substr(0,check.length+1)===check+"-":false;};},"CHILD":function(type,argument,first,last){if(type==="nth"){return function(elem){var node,diff,parent=elem.parentNode;if(first===1&&last===0){return true;}
if(parent){diff=0;for(node=parent.firstChild;node;node=node.nextSibling){if(node.nodeType===1){diff++;if(elem===node){break;}}}}
diff-=last;return diff===first||(diff%first===0&&diff/first>=0);};}
return function(elem){var node=elem;switch(type){case"only":case"first":while((node=node.previousSibling)){if(node.nodeType===1){return false;}}
if(type==="first"){return true;}
node=elem;case"last":while((node=node.nextSibling)){if(node.nodeType===1){return false;}}
return true;}};},"PSEUDO":function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument);}
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf.call(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}
return fn;}},pseudos:{"not":markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),"enabled":function(elem){return elem.disabled===false;},"disabled":function(elem){return elem.disabled===true;},"checked":function(elem){var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);},"selected":function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},"parent":function(elem){return!Expr.pseudos["empty"](elem);},"empty":function(elem){var nodeType;elem=elem.firstChild;while(elem){if(elem.nodeName>"@"||(nodeType=elem.nodeType)===3||nodeType===4){return false;}
elem=elem.nextSibling;}
return true;},"header":function(elem){return rheader.test(elem.nodeName);},"text":function(elem){var type,attr;return elem.nodeName.toLowerCase()==="input"&&(type=elem.type)==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()===type);},"radio":createInputPseudo("radio"),"checkbox":createInputPseudo("checkbox"),"file":createInputPseudo("file"),"password":createInputPseudo("password"),"image":createInputPseudo("image"),"submit":createButtonPseudo("submit"),"reset":createButtonPseudo("reset"),"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"input":function(elem){return rinputs.test(elem.nodeName);},"focus":function(elem){var doc=elem.ownerDocument;return elem===doc.activeElement&&(!doc.hasFocus||doc.hasFocus())&&!!(elem.type||elem.href);},"active":function(elem){return elem===elem.ownerDocument.activeElement;},"first":createPositionalPseudo(function(matchIndexes,length,argument){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length,argument){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length,argument){for(var i=0;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length,argument){for(var i=1;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){for(var i=argument<0?argument+length:argument;--i>=0;){matchIndexes.push(i);}
return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){for(var i=argument<0?argument+length:argument;++i<length;){matchIndexes.push(i);}
return matchIndexes;})}};function siblingCheck(a,b,ret){if(a===b){return ret;}
var cur=a.nextSibling;while(cur){if(cur===b){return-1;}
cur=cur.nextSibling;}
return 1;}
sortOrder=docElem.compareDocumentPosition?function(a,b){if(a===b){hasDuplicate=true;return 0;}
return(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1;}:function(a,b){if(a===b){hasDuplicate=true;return 0;}else if(a.sourceIndex&&b.sourceIndex){return a.sourceIndex-b.sourceIndex;}
var al,bl,ap=[],bp=[],aup=a.parentNode,bup=b.parentNode,cur=aup;if(aup===bup){return siblingCheck(a,b);}else if(!aup){return-1;}else if(!bup){return 1;}
while(cur){ap.unshift(cur);cur=cur.parentNode;}
cur=bup;while(cur){bp.unshift(cur);cur=cur.parentNode;}
al=ap.length;bl=bp.length;for(var i=0;i<al&&i<bl;i++){if(ap[i]!==bp[i]){return siblingCheck(ap[i],bp[i]);}}
return i===al?siblingCheck(a,bp[i],-1):siblingCheck(ap[i],b,1);};[0,0].sort(sortOrder);baseHasDuplicate=!hasDuplicate;Sizzle.uniqueSort=function(results){var elem,i=1;hasDuplicate=baseHasDuplicate;results.sort(sortOrder);if(hasDuplicate){for(;(elem=results[i]);i++){if(elem===results[i-1]){results.splice(i--,1);}}}
return results;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};function tokenize(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[expando][selector];if(cached){return parseOnly?0:cached.slice(0);}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length);}
groups.push(tokens=[]);}
matched=false;if((match=rcombinators.exec(soFar))){tokens.push(matched=new Token(match.shift()));soFar=soFar.slice(matched.length);matched.type=match[0].replace(rtrim," ");}
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match,document,true)))){tokens.push(matched=new Token(match.shift()));soFar=soFar.slice(matched.length);matched.type=type;matched.matches=match;}}
if(!matched){break;}}
return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0);}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&combinator.dir==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(checkNonElements||elem.nodeType===1){return matcher(elem,context,xml);}}}:function(elem,context,xml){if(!xml){var cache,dirkey=dirruns+" "+doneName+" ",cachedkey=dirkey+cachedruns;while((elem=elem[dir])){if(checkNonElements||elem.nodeType===1){if((cache=elem[expando])===cachedkey){return elem.sizset;}else if(typeof cache==="string"&&cache.indexOf(dirkey)===0){if(elem.sizset){return elem;}}else{elem[expando]=cachedkey;if(matcher(elem,context,xml)){elem.sizset=true;return elem;}
elem.sizset=false;}}}}else{while((elem=elem[dir])){if(checkNonElements||elem.nodeType===1){if(matcher(elem,context,xml)){return elem;}}}}};}
function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}
return true;}:matchers[0];}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}
return newUnmatched;}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}
return markFunction(function(seed,results,context,xml){if(seed&&postFinder){return;}
var i,elem,postFilterIn,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[],seed),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml);}
if(postFilter){postFilterIn=condense(matcherOut,postMap);postFilter(postFilterIn,[],context,xml);i=postFilterIn.length;while(i--){if((elem=postFilterIn[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}
if(seed){i=preFilter&&matcherOut.length;while(i--){if((elem=matcherOut[i])){seed[preMap[i]]=!(results[preMap[i]]=elem);}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf.call(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){return(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&tokens.slice(0,i-1).join("").replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&tokens.join(""));}
matchers.push(matcher);}}
return elementMatcher(matchers);}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,expandContext){var elem,j,matcher,setMatched=[],matchedCount=0,i="0",unmatched=seed&&[],outermost=expandContext!=null,contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",expandContext&&context.parentNode||context),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.E);if(outermost){outermostContext=context!==document&&context;cachedruns=superMatcher.el;}
for(;(elem=elems[i])!=null;i++){if(byElement&&elem){for(j=0;(matcher=elementMatchers[j]);j++){if(matcher(elem,context,xml)){results.push(elem);break;}}
if(outermost){dirruns=dirrunsUnique;cachedruns=++superMatcher.el;}}
if(bySet){if((elem=!matcher&&elem)){matchedCount--;}
if(seed){unmatched.push(elem);}}}
matchedCount+=i;if(bySet&&i!==matchedCount){for(j=0;(matcher=setMatchers[j]);j++){matcher(unmatched,setMatched,context,xml);}
if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}
setMatched=condense(setMatched);}
push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results);}}
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}
return unmatched;};superMatcher.el=0;return bySet?markFunction(superMatcher):superMatcher;}
compile=Sizzle.compile=function(selector,group){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[expando][selector];if(!cached){if(!group){group=tokenize(selector);}
i=group.length;while(i--){cached=matcherFromTokens(group[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));}
return cached;};function multipleContexts(selector,contexts,results,seed){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results,seed);}
return results;}
function select(selector,context,results,seed,xml){var i,tokens,token,type,find,match=tokenize(selector),j=match.length;if(!seed){if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&!xml&&Expr.relative[tokens[1].type]){context=Expr.find["ID"](token.matches[0].replace(rbackslash,""),context,xml)[0];if(!context){return results;}
selector=selector.slice(tokens.shift().length);}
for(i=matchExpr["POS"].test(selector)?-1:tokens.length-1;i>=0;i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break;}
if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(rbackslash,""),rsibling.test(tokens[0].type)&&context.parentNode||context,xml))){tokens.splice(i,1);selector=seed.length&&tokens.join("");if(!selector){push.apply(results,slice.call(seed,0));return results;}
break;}}}}}
compile(selector,match)(seed,context,xml,results,rsibling.test(selector));return results;}
if(document.querySelectorAll){(function(){var disconnectedMatch,oldSelect=select,rescape=/'|\\/g,rattributeQuotes=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,rbuggyQSA=[":focus"],rbuggyMatches=[":active",":focus"],matches=docElem.matchesSelector||docElem.mozMatchesSelector||docElem.webkitMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector;assert(function(div){div.innerHTML="<select><option selected=''></option></select>";if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)");}
if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}});assert(function(div){div.innerHTML="<p test=''></p>";if(div.querySelectorAll("[test^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:\"\"|'')");}
div.innerHTML="<input type='hidden'/>";if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");}});rbuggyQSA=new RegExp(rbuggyQSA.join("|"));select=function(selector,context,results,seed,xml){if(!seed&&!xml&&(!rbuggyQSA||!rbuggyQSA.test(selector))){var groups,i,old=true,nid=expando,newContext=context,newSelector=context.nodeType===9&&selector;if(context.nodeType===1&&context.nodeName.toLowerCase()!=="object"){groups=tokenize(selector);if((old=context.getAttribute("id"))){nid=old.replace(rescape,"\\$&");}else{context.setAttribute("id",nid);}
nid="[id='"+nid+"'] ";i=groups.length;while(i--){groups[i]=nid+groups[i].join("");}
newContext=rsibling.test(selector)&&context.parentNode||context;newSelector=groups.join(",");}
if(newSelector){try{push.apply(results,slice.call(newContext.querySelectorAll(newSelector),0));return results;}catch(qsaError){}finally{if(!old){context.removeAttribute("id");}}}}
return oldSelect(selector,context,results,seed,xml);};if(matches){assert(function(div){disconnectedMatch=matches.call(div,"div");try{matches.call(div,"[test!='']:sizzle");rbuggyMatches.push("!=",pseudos);}catch(e){}});rbuggyMatches=new RegExp(rbuggyMatches.join("|"));Sizzle.matchesSelector=function(elem,expr){expr=expr.replace(rattributeQuotes,"='$1']");if(!isXML(elem)&&!rbuggyMatches.test(expr)&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}
return Sizzle(expr,null,null,[elem]).length>0;};}})();}
Expr.pseudos["nth"]=Expr.pseudos["eq"];function setFilters(){}
Expr.filters=setFilters.prototype=Expr.pseudos;Expr.setFilters=new setFilters();Sizzle.attr=jQuery.attr;jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;})(window);var runtil=/Until$/,rparentsprev=/^(?:parents|prev(?:Until|All))/,isSimple=/^.[^:#\[\.,]*$/,rneedsContext=jQuery.expr.match.needsContext,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({find:function(selector){var i,l,length,n,r,ret,self=this;if(typeof selector!=="string"){return jQuery(selector).filter(function(){for(i=0,l=self.length;i<l;i++){if(jQuery.contains(self[i],this)){return true;}}});}
ret=this.pushStack("","find",selector);for(i=0,l=this.length;i<l;i++){length=ret.length;jQuery.find(selector,this[i],ret);if(i>0){for(n=length;n<ret.length;n++){for(r=0;r<length;r++){if(ret[r]===ret[n]){ret.splice(n--,1);break;}}}}}
return ret;},has:function(target){var i,targets=jQuery(target,this),len=targets.length;return this.filter(function(){for(i=0;i<len;i++){if(jQuery.contains(this,targets[i])){return true;}}});},not:function(selector){return this.pushStack(winnow(this,selector,false),"not",selector);},filter:function(selector){return this.pushStack(winnow(this,selector,true),"filter",selector);},is:function(selector){return!!selector&&(typeof selector==="string"?rneedsContext.test(selector)?jQuery(selector,this.context).index(this[0])>=0:jQuery.filter(selector,this).length>0:this.filter(selector).length>0);},closest:function(selectors,context){var cur,i=0,l=this.length,ret=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){cur=this[i];while(cur&&cur.ownerDocument&&cur!==context&&cur.nodeType!==11){if(pos?pos.index(cur)>-1:jQuery.find.matchesSelector(cur,selectors)){ret.push(cur);break;}
cur=cur.parentNode;}}
ret=ret.length>1?jQuery.unique(ret):ret;return this.pushStack(ret,"closest",selectors);},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1;}
if(typeof elem==="string"){return jQuery.inArray(this[0],jQuery(elem));}
return jQuery.inArray(elem.jquery?elem[0]:elem,this);},add:function(selector,context){var set=typeof selector==="string"?jQuery(selector,context):jQuery.makeArray(selector&&selector.nodeType?[selector]:selector),all=jQuery.merge(this.get(),set);return this.pushStack(isDisconnected(set[0])||isDisconnected(all[0])?all:jQuery.unique(all));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});jQuery.fn.andSelf=jQuery.fn.addBack;function isDisconnected(node){return!node||!node.parentNode||node.parentNode.nodeType===11;}
function sibling(cur,dir){do{cur=cur[dir];}while(cur&&cur.nodeType!==1);return cur;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return jQuery.dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function(elem){return jQuery.dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until);},siblings:function(elem){return jQuery.sibling((elem.parentNode||{}).firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until);if(!runtil.test(name)){selector=until;}
if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret);}
ret=this.length>1&&!guaranteedUnique[name]?jQuery.unique(ret):ret;if(this.length>1&&rparentsprev.test(name)){ret=ret.reverse();}
return this.pushStack(ret,name,core_slice.call(arguments).join(","));};});jQuery.extend({filter:function(expr,elems,not){if(not){expr=":not("+expr+")";}
return elems.length===1?jQuery.find.matchesSelector(elems[0],expr)?[elems[0]]:[]:jQuery.find.matches(expr,elems);},dir:function(elem,dir,until){var matched=[],cur=elem[dir];while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){if(cur.nodeType===1){matched.push(cur);}
cur=cur[dir];}
return matched;},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){r.push(n);}}
return r;}});function winnow(elements,qualifier,keep){qualifier=qualifier||0;if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){var retVal=!!qualifier.call(elem,i,elem);return retVal===keep;});}else if(qualifier.nodeType){return jQuery.grep(elements,function(elem,i){return(elem===qualifier)===keep;});}else if(typeof qualifier==="string"){var filtered=jQuery.grep(elements,function(elem){return elem.nodeType===1;});if(isSimple.test(qualifier)){return jQuery.filter(qualifier,filtered,!keep);}else{qualifier=jQuery.filter(qualifier,filtered);}}
return jQuery.grep(elements,function(elem,i){return(jQuery.inArray(elem,qualifier)>=0)===keep;});}
function createSafeFragment(document){var list=nodeNames.split("|"),safeFrag=document.createDocumentFragment();if(safeFrag.createElement){while(list.length){safeFrag.createElement(list.pop());}}
return safeFrag;}
var nodeNames="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",rinlinejQuery=/ jQuery\d+="(?:null|\d+)"/g,rleadingWhitespace=/^\s+/,rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i,rnocache=/<(?:script|object|embed|option|style)/i,rnoshimcache=new RegExp("<(?:"+nodeNames+")[\\s/>]","i"),rcheckableType=/^(?:checkbox|radio)$/,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/\/(java|ecma)script/i,rcleanScript=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},safeFragment=createSafeFragment(document),fragmentDiv=safeFragment.appendChild(document.createElement("div"));wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;if(!jQuery.support.htmlSerialize){wrapMap._default=[1,"X<div>","</div>"];}
jQuery.fn.extend({text:function(value){return jQuery.access(this,function(value){return value===undefined?jQuery.text(this):this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(value));},null,value,arguments.length);},wrapAll:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}
if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();},append:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1||this.nodeType===11){this.appendChild(elem);}});},prepend:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1||this.nodeType===11){this.insertBefore(elem,this.firstChild);}});},before:function(){if(!isDisconnected(this[0])){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this);});}
if(arguments.length){var set=jQuery.clean(arguments);return this.pushStack(jQuery.merge(set,this),"before",this.selector);}},after:function(){if(!isDisconnected(this[0])){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this.nextSibling);});}
if(arguments.length){var set=jQuery.clean(arguments);return this.pushStack(jQuery.merge(this,set),"after",this.selector);}},remove:function(selector,keepData){var elem,i=0;for(;(elem=this[i])!=null;i++){if(!selector||jQuery.filter(selector,[elem]).length){if(!keepData&&elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));jQuery.cleanData([elem]);}
if(elem.parentNode){elem.parentNode.removeChild(elem);}}}
return this;},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));}
while(elem.firstChild){elem.removeChild(elem.firstChild);}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return jQuery.access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined){return elem.nodeType===1?elem.innerHTML.replace(rinlinejQuery,""):undefined;}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&(jQuery.support.htmlSerialize||!rnoshimcache.test(value))&&(jQuery.support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));elem.innerHTML=value;}}
elem=0;}catch(e){}}
if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(value){if(!isDisconnected(this[0])){if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this),old=self.html();self.replaceWith(value.call(this,i,old));});}
if(typeof value!=="string"){value=jQuery(value).detach();}
return this.each(function(){var next=this.nextSibling,parent=this.parentNode;jQuery(this).remove();if(next){jQuery(next).before(value);}else{jQuery(parent).append(value);}});}
return this.length?this.pushStack(jQuery(jQuery.isFunction(value)?value():value),"replaceWith",value):this;},detach:function(selector){return this.remove(selector,true);},domManip:function(args,table,callback){args=[].concat.apply([],args);var results,first,fragment,iNoClone,i=0,value=args[0],scripts=[],l=this.length;if(!jQuery.support.checkClone&&l>1&&typeof value==="string"&&rchecked.test(value)){return this.each(function(){jQuery(this).domManip(args,table,callback);});}
if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this);args[0]=value.call(this,i,table?self.html():undefined);self.domManip(args,table,callback);});}
if(this[0]){results=jQuery.buildFragment(args,this,scripts);fragment=results.fragment;first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}
if(first){table=table&&jQuery.nodeName(first,"tr");for(iNoClone=results.cacheable||l-1;i<l;i++){callback.call(table&&jQuery.nodeName(this[i],"table")?findOrAppend(this[i],"tbody"):this[i],i===iNoClone?fragment:jQuery.clone(fragment,true,true));}}
fragment=first=null;if(scripts.length){jQuery.each(scripts,function(i,elem){if(elem.src){if(jQuery.ajax){jQuery.ajax({url:elem.src,type:"GET",dataType:"script",async:false,global:false,"throws":true});}else{jQuery.error("no ajax");}}else{jQuery.globalEval((elem.text||elem.textContent||elem.innerHTML||"").replace(rcleanScript,""));}
if(elem.parentNode){elem.parentNode.removeChild(elem);}});}}
return this;}});function findOrAppend(elem,tag){return elem.getElementsByTagName(tag)[0]||elem.appendChild(elem.ownerDocument.createElement(tag));}
function cloneCopyEvent(src,dest){if(dest.nodeType!==1||!jQuery.hasData(src)){return;}
var type,i,l,oldData=jQuery._data(src),curData=jQuery._data(dest,oldData),events=oldData.events;if(events){delete curData.handle;curData.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}
if(curData.data){curData.data=jQuery.extend({},curData.data);}}
function cloneFixAttributes(src,dest){var nodeName;if(dest.nodeType!==1){return;}
if(dest.clearAttributes){dest.clearAttributes();}
if(dest.mergeAttributes){dest.mergeAttributes(src);}
nodeName=dest.nodeName.toLowerCase();if(nodeName==="object"){if(dest.parentNode){dest.outerHTML=src.outerHTML;}
if(jQuery.support.html5Clone&&(src.innerHTML&&!jQuery.trim(dest.innerHTML))){dest.innerHTML=src.innerHTML;}}else if(nodeName==="input"&&rcheckableType.test(src.type)){dest.defaultChecked=dest.checked=src.checked;if(dest.value!==src.value){dest.value=src.value;}}else if(nodeName==="option"){dest.selected=src.defaultSelected;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}else if(nodeName==="script"&&dest.text!==src.text){dest.text=src.text;}
dest.removeAttribute(jQuery.expando);}
jQuery.buildFragment=function(args,context,scripts){var fragment,cacheable,cachehit,first=args[0];context=context||document;context=!context.nodeType&&context[0]||context;context=context.ownerDocument||context;if(args.length===1&&typeof first==="string"&&first.length<512&&context===document&&first.charAt(0)==="<"&&!rnocache.test(first)&&(jQuery.support.checkClone||!rchecked.test(first))&&(jQuery.support.html5Clone||!rnoshimcache.test(first))){cacheable=true;fragment=jQuery.fragments[first];cachehit=fragment!==undefined;}
if(!fragment){fragment=context.createDocumentFragment();jQuery.clean(args,context,fragment,scripts);if(cacheable){jQuery.fragments[first]=cachehit&&fragment;}}
return{fragment:fragment,cacheable:cacheable};};jQuery.fragments={};jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,i=0,ret=[],insert=jQuery(selector),l=insert.length,parent=this.length===1&&this[0].parentNode;if((parent==null||parent&&parent.nodeType===11&&parent.childNodes.length===1)&&l===1){insert[original](this[0]);return this;}else{for(;i<l;i++){elems=(i>0?this.clone(true):this).get();jQuery(insert[i])[original](elems);ret=ret.concat(elems);}
return this.pushStack(ret,name,insert.selector);}};});function getAll(elem){if(typeof elem.getElementsByTagName!=="undefined"){return elem.getElementsByTagName("*");}else if(typeof elem.querySelectorAll!=="undefined"){return elem.querySelectorAll("*");}else{return[];}}
function fixDefaultChecked(elem){if(rcheckableType.test(elem.type)){elem.defaultChecked=elem.checked;}}
jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var srcElements,destElements,i,clone;if(jQuery.support.html5Clone||jQuery.isXMLDoc(elem)||!rnoshimcache.test("<"+elem.nodeName+">")){clone=elem.cloneNode(true);}else{fragmentDiv.innerHTML=elem.outerHTML;fragmentDiv.removeChild(clone=fragmentDiv.firstChild);}
if((!jQuery.support.noCloneEvent||!jQuery.support.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){cloneFixAttributes(elem,clone);srcElements=getAll(elem);destElements=getAll(clone);for(i=0;srcElements[i];++i){if(destElements[i]){cloneFixAttributes(srcElements[i],destElements[i]);}}}
if(dataAndEvents){cloneCopyEvent(elem,clone);if(deepDataAndEvents){srcElements=getAll(elem);destElements=getAll(clone);for(i=0;srcElements[i];++i){cloneCopyEvent(srcElements[i],destElements[i]);}}}
srcElements=destElements=null;return clone;},clean:function(elems,context,fragment,scripts){var i,j,elem,tag,wrap,depth,div,hasBody,tbody,len,handleScript,jsTags,safe=context===document&&safeFragment,ret=[];if(!context||typeof context.createDocumentFragment==="undefined"){context=document;}
for(i=0;(elem=elems[i])!=null;i++){if(typeof elem==="number"){elem+="";}
if(!elem){continue;}
if(typeof elem==="string"){if(!rhtml.test(elem)){elem=context.createTextNode(elem);}else{safe=safe||createSafeFragment(context);div=context.createElement("div");safe.appendChild(div);elem=elem.replace(rxhtmlTag,"<$1></$2>");tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;depth=wrap[0];div.innerHTML=wrap[1]+elem+wrap[2];while(depth--){div=div.lastChild;}
if(!jQuery.support.tbody){hasBody=rtbody.test(elem);tbody=tag==="table"&&!hasBody?div.firstChild&&div.firstChild.childNodes:wrap[1]==="<table>"&&!hasBody?div.childNodes:[];for(j=tbody.length-1;j>=0;--j){if(jQuery.nodeName(tbody[j],"tbody")&&!tbody[j].childNodes.length){tbody[j].parentNode.removeChild(tbody[j]);}}}
if(!jQuery.support.leadingWhitespace&&rleadingWhitespace.test(elem)){div.insertBefore(context.createTextNode(rleadingWhitespace.exec(elem)[0]),div.firstChild);}
elem=div.childNodes;div.parentNode.removeChild(div);}}
if(elem.nodeType){ret.push(elem);}else{jQuery.merge(ret,elem);}}
if(div){elem=div=safe=null;}
if(!jQuery.support.appendChecked){for(i=0;(elem=ret[i])!=null;i++){if(jQuery.nodeName(elem,"input")){fixDefaultChecked(elem);}else if(typeof elem.getElementsByTagName!=="undefined"){jQuery.grep(elem.getElementsByTagName("input"),fixDefaultChecked);}}}
if(fragment){handleScript=function(elem){if(!elem.type||rscriptType.test(elem.type)){return scripts?scripts.push(elem.parentNode?elem.parentNode.removeChild(elem):elem):fragment.appendChild(elem);}};for(i=0;(elem=ret[i])!=null;i++){if(!(jQuery.nodeName(elem,"script")&&handleScript(elem))){fragment.appendChild(elem);if(typeof elem.getElementsByTagName!=="undefined"){jsTags=jQuery.grep(jQuery.merge([],elem.getElementsByTagName("script")),handleScript);ret.splice.apply(ret,[i+1,0].concat(jsTags));i+=jsTags.length;}}}}
return ret;},cleanData:function(elems,acceptData){var data,id,elem,type,i=0,internalKey=jQuery.expando,cache=jQuery.cache,deleteExpando=jQuery.support.deleteExpando,special=jQuery.event.special;for(;(elem=elems[i])!=null;i++){if(acceptData||jQuery.acceptData(elem)){id=elem[internalKey];data=id&&cache[id];if(data){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}}
if(cache[id]){delete cache[id];if(deleteExpando){delete elem[internalKey];}else if(elem.removeAttribute){elem.removeAttribute(internalKey);}else{elem[internalKey]=null;}
jQuery.deletedIds.push(id);}}}}}});(function(){var matched,browser;jQuery.uaMatch=function(ua){ua=ua.toLowerCase();var match=/(chrome)[ \/]([\w.]+)/.exec(ua)||/(webkit)[ \/]([\w.]+)/.exec(ua)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)||/(msie) ([\w.]+)/.exec(ua)||ua.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)||[];return{browser:match[1]||"",version:match[2]||"0"};};matched=jQuery.uaMatch(navigator.userAgent);browser={};if(matched.browser){browser[matched.browser]=true;browser.version=matched.version;}
if(browser.chrome){browser.webkit=true;}else if(browser.webkit){browser.safari=true;}
jQuery.browser=browser;jQuery.sub=function(){function jQuerySub(selector,context){return new jQuerySub.fn.init(selector,context);}
jQuery.extend(true,jQuerySub,this);jQuerySub.superclass=this;jQuerySub.fn=jQuerySub.prototype=this();jQuerySub.fn.constructor=jQuerySub;jQuerySub.sub=this.sub;jQuerySub.fn.init=function init(selector,context){if(context&&context instanceof jQuery&&!(context instanceof jQuerySub)){context=jQuerySub(context);}
return jQuery.fn.init.call(this,selector,context,rootjQuerySub);};jQuerySub.fn.init.prototype=jQuerySub.fn;var rootjQuerySub=jQuerySub(document);return jQuerySub;};})();var curCSS,iframe,iframeDoc,ralpha=/alpha\([^)]*\)/i,ropacity=/opacity=([^)]*)/,rposition=/^(top|right|bottom|left)$/,rdisplayswap=/^(none|table(?!-c[ea]).+)/,rmargin=/^margin/,rnumsplit=new RegExp("^("+core_pnum+")(.*)$","i"),rnumnonpx=new RegExp("^("+core_pnum+")(?!px)[a-z%]+$","i"),rrelNum=new RegExp("^([-+])=("+core_pnum+")","i"),elemdisplay={},cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:0,fontWeight:400},cssExpand=["Top","Right","Bottom","Left"],cssPrefixes=["Webkit","O","Moz","ms"],eventsToggle=jQuery.fn.toggle;function vendorPropName(style,name){if(name in style){return name;}
var capName=name.charAt(0).toUpperCase()+name.slice(1),origName=name,i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in style){return name;}}
return origName;}
function isHidden(elem,el){elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);}
function showHide(elements,show){var elem,display,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}
values[index]=jQuery._data(elem,"olddisplay");if(show){if(!values[index]&&elem.style.display==="none"){elem.style.display="";}
if(elem.style.display===""&&isHidden(elem)){values[index]=jQuery._data(elem,"olddisplay",css_defaultDisplay(elem.nodeName));}}else{display=curCSS(elem,"display");if(!values[index]&&display!=="none"){jQuery._data(elem,"olddisplay",display);}}}
for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}
if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}
return elements;}
jQuery.fn.extend({css:function(name,value){return jQuery.access(this,function(elem,name,value){return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state,fn2){var bool=typeof state==="boolean";if(jQuery.isFunction(state)&&jQuery.isFunction(fn2)){return eventsToggle.apply(this,arguments);}
return this.each(function(){if(bool?state:isHidden(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},cssNumber:{"fillOpacity":true,"fontWeight":true,"lineHeight":true,"opacity":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{"float":jQuery.support.cssFloat?"cssFloat":"styleFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rrelNum.exec(value))){value=(ret[1]+1)*ret[2]+parseFloat(jQuery.css(elem,name));type="number";}
if(value==null||type==="number"&&isNaN(value)){return;}
if(type==="number"&&!jQuery.cssNumber[origName]){value+="px";}
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){try{style[name]=value;}catch(e){}}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
return style[name];}},css:function(elem,name,numeric,extra){var val,num,hooks,origName=jQuery.camelCase(name);name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(elem.style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}
if(val===undefined){val=curCSS(elem,name);}
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}
if(numeric||extra!==undefined){num=parseFloat(val);return numeric||jQuery.isNumeric(num)?num||0:val;}
return val;},swap:function(elem,options,callback){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
ret=callback.call(elem);for(name in options){elem.style[name]=old[name];}
return ret;}});if(window.getComputedStyle){curCSS=function(elem,name){var ret,width,minWidth,maxWidth,computed=window.getComputedStyle(elem,null),style=elem.style;if(computed){ret=computed[name];if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}
if(rnumnonpx.test(ret)&&rmargin.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}
return ret;};}else if(document.documentElement.currentStyle){curCSS=function(elem,name){var left,rsLeft,ret=elem.currentStyle&&elem.currentStyle[name],style=elem.style;if(ret==null&&style&&style[name]){ret=style[name];}
if(rnumnonpx.test(ret)&&!rposition.test(name)){left=style.left;rsLeft=elem.runtimeStyle&&elem.runtimeStyle.left;if(rsLeft){elem.runtimeStyle.left=elem.currentStyle.left;}
style.left=name==="fontSize"?"1em":ret;ret=style.pixelLeft+"px";style.left=left;if(rsLeft){elem.runtimeStyle.left=rsLeft;}}
return ret===""?"auto":ret;};}
function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);return matches?Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value;}
function augmentWidthOrHeight(elem,name,extra,isBorderBox){var i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;for(;i<4;i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true);}
if(isBorderBox){if(extra==="content"){val-=parseFloat(curCSS(elem,"padding"+cssExpand[i]))||0;}
if(extra!=="margin"){val-=parseFloat(curCSS(elem,"border"+cssExpand[i]+"Width"))||0;}}else{val+=parseFloat(curCSS(elem,"padding"+cssExpand[i]))||0;if(extra!=="padding"){val+=parseFloat(curCSS(elem,"border"+cssExpand[i]+"Width"))||0;}}}
return val;}
function getWidthOrHeight(elem,name,extra){var val=name==="width"?elem.offsetWidth:elem.offsetHeight,valueIsBorderBox=true,isBorderBox=jQuery.support.boxSizing&&jQuery.css(elem,"boxSizing")==="border-box";if(val<=0||val==null){val=curCSS(elem,name);if(val<0||val==null){val=elem.style[name];}
if(rnumnonpx.test(val)){return val;}
valueIsBorderBox=isBorderBox&&(jQuery.support.boxSizingReliable||val===elem.style[name]);val=parseFloat(val)||0;}
return(val+
augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox))+"px";}
function css_defaultDisplay(nodeName){if(elemdisplay[nodeName]){return elemdisplay[nodeName];}
var elem=jQuery("<"+nodeName+">").appendTo(document.body),display=elem.css("display");elem.remove();if(display==="none"||display===""){iframe=document.body.appendChild(iframe||jQuery.extend(document.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!iframeDoc||!iframe.createElement){iframeDoc=(iframe.contentWindow||iframe.contentDocument).document;iframeDoc.write("<!doctype html><html><body>");iframeDoc.close();}
elem=iframeDoc.body.appendChild(iframeDoc.createElement(nodeName));display=curCSS(elem,"display");document.body.removeChild(iframe);}
elemdisplay[nodeName]=display;return display;}
jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){if(elem.offsetWidth===0&&rdisplayswap.test(curCSS(elem,"display"))){return jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);});}else{return getWidthOrHeight(elem,name,extra);}}},set:function(elem,value,extra){return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,jQuery.support.boxSizing&&jQuery.css(elem,"boxSizing")==="border-box"):0);}};});if(!jQuery.support.opacity){jQuery.cssHooks.opacity={get:function(elem,computed){return ropacity.test((computed&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":computed?"1":"";},set:function(elem,value){var style=elem.style,currentStyle=elem.currentStyle,opacity=jQuery.isNumeric(value)?"alpha(opacity="+value*100+")":"",filter=currentStyle&&currentStyle.filter||style.filter||"";style.zoom=1;if(value>=1&&jQuery.trim(filter.replace(ralpha,""))===""&&style.removeAttribute){style.removeAttribute("filter");if(currentStyle&&!currentStyle.filter){return;}}
style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):filter+" "+opacity;}};}
jQuery(function(){if(!jQuery.support.reliableMarginRight){jQuery.cssHooks.marginRight={get:function(elem,computed){return jQuery.swap(elem,{"display":"inline-block"},function(){if(computed){return curCSS(elem,"marginRight");}});}};}
if(!jQuery.support.pixelPosition&&jQuery.fn.position){jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]={get:function(elem,computed){if(computed){var ret=curCSS(elem,prop);return rnumnonpx.test(ret)?jQuery(elem).position()[prop]+"px":ret;}}};});}});if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.hidden=function(elem){return(elem.offsetWidth===0&&elem.offsetHeight===0)||(!jQuery.support.reliableHiddenOffsets&&((elem.style&&elem.style.display)||curCSS(elem,"display"))==="none");};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem);};}
jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i,parts=typeof value==="string"?value.split(" "):[value],expanded={};for(i=0;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}
return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rinput=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,rselectTextarea=/^(?:select|textarea)/i;jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){return this.elements?jQuery.makeArray(this.elements):this;}).filter(function(){return this.name&&!this.disabled&&(this.checked||rselectTextarea.test(this.nodeName)||rinput.test(this.type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val,i){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():(value==null?"":value);s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);};if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;}
if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
return s.join("&").replace(r20,"+");};function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}
var
ajaxLocParts,ajaxLocation,rhash=/#.*$/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,rlocalProtocol=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rquery=/\?/,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,rts=/([?&])_=[^&]*/,rurl=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,_load=jQuery.fn.load,prefilters={},transports={},allTypes=["*/"]+["*"];try{ajaxLocation=location.href;}catch(e){ajaxLocation=document.createElement("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href;}
ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
var dataType,list,placeBefore,dataTypes=dataTypeExpression.toLowerCase().split(core_rspace),i=0,length=dataTypes.length;if(jQuery.isFunction(func)){for(;i<length;i++){dataType=dataTypes[i];placeBefore=/^\+/.test(dataType);if(placeBefore){dataType=dataType.substr(1)||"*";}
list=structure[dataType]=structure[dataType]||[];list[placeBefore?"unshift":"push"](func);}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,dataType,inspected){dataType=dataType||options.dataTypes[0];inspected=inspected||{};inspected[dataType]=true;var selection,list=structure[dataType],i=0,length=list?list.length:0,executeOnly=(structure===prefilters);for(;i<length&&(executeOnly||!selection);i++){selection=list[i](options,originalOptions,jqXHR);if(typeof selection==="string"){if(!executeOnly||inspected[selection]){selection=undefined;}else{options.dataTypes.unshift(selection);selection=inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,selection,inspected);}}}
if((executeOnly||!selection)&&!inspected["*"]){selection=inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,"*",inspected);}
return selection;}
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
if(deep){jQuery.extend(true,target,deep);}}
jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}
if(!this.length){return this;}
var selector,type,response,self=this,off=url.indexOf(" ");if(off>=0){selector=url.slice(off,url.length);url=url.slice(0,off);}
if(jQuery.isFunction(params)){callback=params;params=undefined;}else if(params&&typeof params==="object"){type="POST";}
jQuery.ajax({url:url,type:type,dataType:"html",data:params,complete:function(jqXHR,status){if(callback){self.each(callback,response||[jqXHR.responseText,status,jqXHR]);}}}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(responseText.replace(rscript,"")).find(selector):responseText);});return this;};jQuery.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(i,o){jQuery.fn[o]=function(f){return this.on(o,f);};});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax({type:method,url:url,data:data,success:callback,dataType:type});};});jQuery.extend({getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},ajaxSetup:function(target,settings){if(settings){ajaxExtend(target,jQuery.ajaxSettings);}else{settings=target;target=jQuery.ajaxSettings;}
ajaxExtend(target,settings);return target;},ajaxSettings:{url:ajaxLocation,isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":allTypes},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":window.String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
options=options||{};var
ifModifiedKey,responseHeadersString,responseHeaders,transport,timeoutTimer,parts,fireGlobals,i,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=callbackContext!==s&&(callbackContext.nodeType||callbackContext instanceof jQuery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,setRequestHeader:function(name,value){if(!state){var lname=name.toLowerCase();name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}
return this;},getAllResponseHeaders:function(){return state===2?responseHeadersString:null;},getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2];}}
match=responseHeaders[key.toLowerCase()];}
return match===undefined?null:match;},overrideMimeType:function(type){if(!state){s.mimeType=type;}
return this;},abort:function(statusText){statusText=statusText||strAbort;if(transport){transport.abort(statusText);}
done(0,statusText);return this;}};function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(state===2){return;}
state=2;if(timeoutTimer){clearTimeout(timeoutTimer);}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}
if(status>=200&&status<300||status===304){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[ifModifiedKey]=modified;}
modified=jqXHR.getResponseHeader("Etag");if(modified){jQuery.etag[ifModifiedKey]=modified;}}
if(status===304){statusText="notmodified";isSuccess=true;}else{isSuccess=ajaxConvert(s,response);statusText=isSuccess.state;success=isSuccess.data;error=isSuccess.error;isSuccess=!error;}}else{error=statusText;if(!statusText||status){statusText="error";if(status<0){status=0;}}}
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger("ajax"+(isSuccess?"Success":"Error"),[jqXHR,s,isSuccess?success:error]);}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
deferred.promise(jqXHR);jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;jqXHR.complete=completeDeferred.add;jqXHR.statusCode=function(map){if(map){var tmp;if(state<2){for(tmp in map){statusCode[tmp]=[statusCode[tmp],map[tmp]];}}else{tmp=map[jqXHR.status];jqXHR.always(tmp);}}
return this;};s.url=((url||s.url)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().split(core_rspace);if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase())||false;s.crossDomain=parts&&(parts.join(":")+(parts[3]?"":parts[1]==="http:"?80:443))!==(ajaxLocParts.join(":")+(ajaxLocParts[3]?"":ajaxLocParts[1]==="http:"?80:443));}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2){return jqXHR;}
fireGlobals=s.global;s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
if(!s.hasContent){if(s.data){s.url+=(rquery.test(s.url)?"&":"?")+s.data;delete s.data;}
ifModifiedKey=s.url;if(s.cache===false){var ts=jQuery.now(),ret=s.url.replace(rts,"$1_="+ts);s.url=ret+((ret===s.url)?(rquery.test(s.url)?"&":"?")+"_="+ts:"");}}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}
if(s.ifModified){ifModifiedKey=ifModifiedKey||s.url;if(jQuery.lastModified[ifModifiedKey]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[ifModifiedKey]);}
if(jQuery.etag[ifModifiedKey]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[ifModifiedKey]);}}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return jqXHR.abort();}
strAbort="abort";for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i]);}
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{state=1;transport.send(requestHeaders,done);}catch(e){if(state<2){done(-1,e);}else{throw e;}}}
return jqXHR;},active:0,lastModified:{},etag:{}});function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes,responseFields=s.responseFields;for(type in responseFields){if(type in responses){jqXHR[responseFields[type]]=responses[type];}}
while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("content-type");}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}}
finalDataType=finalDataType||firstDataType;}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response){var conv,conv2,current,tmp,dataTypes=s.dataTypes.slice(),prev=dataTypes[0],converters={},i=0;if(s.dataFilter){response=s.dataFilter(response,s.dataType);}
if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}
for(;(current=dataTypes[++i]);){if(current!=="*"){if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2];}else if(converters[conv2]!==true){current=tmp[0];dataTypes.splice(i--,0,current);}
break;}}}}
if(conv!==true){if(conv&&s["throws"]){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}
prev=current;}}
return{state:"success",data:response};}
var oldCallbacks=[],rquestion=/\?/,rjsonp=/(=)\?(?=&|$)|\?\?/,nonce=jQuery.now();jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));this[callback]=true;return callback;}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,data=s.data,url=s.url,hasCallback=s.jsonp!==false,replaceInUrl=hasCallback&&rjsonp.test(url),replaceInData=hasCallback&&!replaceInUrl&&typeof data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(data);if(s.dataTypes[0]==="jsonp"||replaceInUrl||replaceInData){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;overwritten=window[callbackName];if(replaceInUrl){s.url=url.replace(rjsonp,"$1"+callbackName);}else if(replaceInData){s.data=data.replace(rjsonp,"$1"+callbackName);}else if(hasCallback){s.url+=(rquestion.test(url)?"&":"?")+s.jsonp+"="+callbackName;}
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}
return responseContainer[0];};s.dataTypes[0]="json";window[callbackName]=function(){responseContainer=arguments;};jqXHR.always(function(){window[callbackName]=overwritten;if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName);}
if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}
responseContainer=overwritten=undefined;});return"script";}});jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";s.global=false;}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,head=document.head||document.getElementsByTagName("head")[0]||document.documentElement;return{send:function(_,callback){script=document.createElement("script");script.async="async";if(s.scriptCharset){script.charset=s.scriptCharset;}
script.src=s.url;script.onload=script.onreadystatechange=function(_,isAbort){if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;if(head&&script.parentNode){head.removeChild(script);}
script=undefined;if(!isAbort){callback(200,"success");}}};head.insertBefore(script,head.firstChild);},abort:function(){if(script){script.onload(0,1);}}};}});var xhrCallbacks,xhrOnUnloadAbort=window.ActiveXObject?function(){for(var key in xhrCallbacks){xhrCallbacks[key](0,1);}}:false,xhrId=0;function createStandardXHR(){try{return new window.XMLHttpRequest();}catch(e){}}
function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}
jQuery.ajaxSettings.xhr=window.ActiveXObject?function(){return!this.isLocal&&createStandardXHR()||createActiveXHR();}:createStandardXHR;(function(xhr){jQuery.extend(jQuery.support,{ajax:!!xhr,cors:!!xhr&&("withCredentials"in xhr)});})(jQuery.ajaxSettings.xhr());if(jQuery.support.ajax){jQuery.ajaxTransport(function(s){if(!s.crossDomain||jQuery.support.cors){var callback;return{send:function(headers,complete){var handle,i,xhr=s.xhr();if(s.username){xhr.open(s.type,s.url,s.async,s.username,s.password);}else{xhr.open(s.type,s.url,s.async);}
if(s.xhrFields){for(i in s.xhrFields){xhr[i]=s.xhrFields[i];}}
if(s.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(s.mimeType);}
if(!s.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
try{for(i in headers){xhr.setRequestHeader(i,headers[i]);}}catch(_){}
xhr.send((s.hasContent&&s.data)||null);callback=function(_,isAbort){var status,statusText,responseHeaders,responses,xml;try{if(callback&&(isAbort||xhr.readyState===4)){callback=undefined;if(handle){xhr.onreadystatechange=jQuery.noop;if(xhrOnUnloadAbort){delete xhrCallbacks[handle];}}
if(isAbort){if(xhr.readyState!==4){xhr.abort();}}else{status=xhr.status;responseHeaders=xhr.getAllResponseHeaders();responses={};xml=xhr.responseXML;if(xml&&xml.documentElement){responses.xml=xml;}
try{responses.text=xhr.responseText;}catch(_){}
try{statusText=xhr.statusText;}catch(e){statusText="";}
if(!status&&s.isLocal&&!s.crossDomain){status=responses.text?200:404;}else if(status===1223){status=204;}}}}catch(firefoxAccessException){if(!isAbort){complete(-1,firefoxAccessException);}}
if(responses){complete(status,statusText,responses,responseHeaders);}};if(!s.async){callback();}else if(xhr.readyState===4){setTimeout(callback,0);}else{handle=++xhrId;if(xhrOnUnloadAbort){if(!xhrCallbacks){xhrCallbacks={};jQuery(window).unload(xhrOnUnloadAbort);}
xhrCallbacks[handle]=callback;}
xhr.onreadystatechange=callback;}},abort:function(){if(callback){callback(0,1);}}};}});}
var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([-+])=|)("+core_pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var end,unit,tween=this.createTween(prop,value),parts=rfxnum.exec(value),target=tween.cur(),start=+target||0,scale=1,maxIterations=20;if(parts){end=+parts[2];unit=parts[3]||(jQuery.cssNumber[prop]?"":"px");if(unit!=="px"&&start){start=jQuery.css(tween.elem,prop,true)||end||1;do{scale=scale||".5";start=start/scale;jQuery.style(tween.elem,prop,start+unit);}while(scale!==(scale=tween.cur()/target)&&scale!==1&&--maxIterations);}
tween.unit=unit;tween.start=start;tween.end=parts[1]?start+(parts[1]+1)*end:end;}
return tween;}]};function createFxNow(){setTimeout(function(){fxNow=undefined;},0);return(fxNow=jQuery.now());}
function createTweens(animation,props){jQuery.each(props,function(prop,value){var collection=(tweeners[prop]||[]).concat(tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(collection[index].call(animation,prop,value)){return;}}});}
function Animation(elem,properties,options){var result,index=0,tweenerIndex=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem;}),tick=function(){var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),percent=1-(remaining/animation.duration||0),index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end,easing){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;for(;index<length;index++){animation.tweens[index].run(1);}
if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}
return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=animationPrefilters[index].call(animation,elem,props,animation.opts);if(result){return result;}}
createTweens(animation,props);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}
jQuery.fx.timer(jQuery.extend(tick,{anim:animation,queue:animation.opts.queue,elem:elem}));return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}
function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}
if(index!==name){props[name]=value;delete props[index];}
hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}
jQuery.Animation=jQuery.extend(Animation,{tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.split(" ");}
var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];tweeners[prop]=tweeners[prop]||[];tweeners[prop].unshift(callback);}},prefilter:function(callback,prepend){if(prepend){animationPrefilters.unshift(callback);}else{animationPrefilters.push(callback);}}});function defaultPrefilter(elem,props,opts){var index,prop,value,length,dataShow,tween,hooks,oldfire,anim=this,style=elem.style,orig={},handled=[],hidden=elem.nodeType&&isHidden(elem);if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}
hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}
if(elem.nodeType===1&&("height"in props||"width"in props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];if(jQuery.css(elem,"display")==="inline"&&jQuery.css(elem,"float")==="none"){if(!jQuery.support.inlineBlockNeedsLayout||css_defaultDisplay(elem.nodeName)==="inline"){style.display="inline-block";}else{style.zoom=1;}}}
if(opts.overflow){style.overflow="hidden";if(!jQuery.support.shrinkWrapBlocks){anim.done(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}}
for(index in props){value=props[index];if(rfxtypes.exec(value)){delete props[index];if(value===(hidden?"hide":"show")){continue;}
handled.push(index);}}
length=handled.length;if(length){dataShow=jQuery._data(elem,"fxshow")||jQuery._data(elem,"fxshow",{});if(hidden){jQuery(elem).show();}else{anim.done(function(){jQuery(elem).hide();});}
anim.done(function(){var prop;jQuery.removeData(elem,"fxshow",true);for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(index=0;index<length;index++){prop=handled[index];tween=anim.createTween(prop,hidden?dataShow[prop]:0);orig[prop]=dataShow[prop]||jQuery.style(elem,prop);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}}}}
function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||"swing";this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}
this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}
if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}
return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem[tween.prop]!=null&&(!tween.elem.style||tween.elem.style[tween.prop]==null)){return tween.elem[tween.prop];}
result=jQuery.css(tween.elem,tween.prop,false,"");return!result||result==="auto"?0:result;},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.style&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"||(!i&&jQuery.isFunction(speed)&&jQuery.isFunction(easing))?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty){anim.stop(true);}};return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
if(clearQueue&&type!==false){this.queue(type||"fx",[]);}
return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=jQuery._data(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});}});function genFx(type,includeWidth){var which,attrs={height:type},i=0;includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}
if(includeWidth){attrs.opacity=attrs.width=type;}
return attrs;}
jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue==null||opt.queue===true){opt.queue="fx";}
opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}
if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;}};jQuery.timers=[];jQuery.fx=Tween.prototype.init;jQuery.fx.tick=function(){var timer,timers=jQuery.timers,i=0;for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}};jQuery.fx.timer=function(timer){if(timer()&&jQuery.timers.push(timer)&&!timerId){timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.interval=13;jQuery.fx.stop=function(){clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fx.step={};if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};}
var rroot=/^(?:body|html)$/i;jQuery.fn.offset=function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
var docElem,body,win,clientTop,clientLeft,scrollTop,scrollLeft,box={top:0,left:0},elem=this[0],doc=elem&&elem.ownerDocument;if(!doc){return;}
if((body=doc.body)===elem){return jQuery.offset.bodyOffset(elem);}
docElem=doc.documentElement;if(!jQuery.contains(docElem,elem)){return box;}
if(typeof elem.getBoundingClientRect!=="undefined"){box=elem.getBoundingClientRect();}
win=getWindow(doc);clientTop=docElem.clientTop||body.clientTop||0;clientLeft=docElem.clientLeft||body.clientLeft||0;scrollTop=win.pageYOffset||docElem.scrollTop;scrollLeft=win.pageXOffset||docElem.scrollLeft;return{top:box.top+scrollTop-clientTop,left:box.left+scrollLeft-clientLeft};};jQuery.offset={bodyOffset:function(body){var top=body.offsetTop,left=body.offsetLeft;if(jQuery.support.doesNotIncludeMarginInBodyOffset){top+=parseFloat(jQuery.css(body,"marginTop"))||0;left+=parseFloat(jQuery.css(body,"marginLeft"))||0;}
return{top:top,left:left};},setOffset:function(elem,options,i){var position=jQuery.css(elem,"position");if(position==="static"){elem.style.position="relative";}
var curElem=jQuery(elem),curOffset=curElem.offset(),curCSSTop=jQuery.css(elem,"top"),curCSSLeft=jQuery.css(elem,"left"),calculatePosition=(position==="absolute"||position==="fixed")&&jQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1,props={},curPosition={},curTop,curLeft;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset);}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({position:function(){if(!this[0]){return;}
var elem=this[0],offsetParent=this.offsetParent(),offset=this.offset(),parentOffset=rroot.test(offsetParent[0].nodeName)?{top:0,left:0}:offsetParent.offset();offset.top-=parseFloat(jQuery.css(elem,"marginTop"))||0;offset.left-=parseFloat(jQuery.css(elem,"marginLeft"))||0;parentOffset.top+=parseFloat(jQuery.css(offsetParent[0],"borderTopWidth"))||0;parentOffset.left+=parseFloat(jQuery.css(offsetParent[0],"borderLeftWidth"))||0;return{top:offset.top-parentOffset.top,left:offset.left-parentOffset.left};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||document.body;while(offsetParent&&(!rroot.test(offsetParent.nodeName)&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent;}
return offsetParent||document.body;});}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top=/Y/.test(prop);jQuery.fn[method]=function(val){return jQuery.access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?(prop in win)?win[prop]:win.document.documentElement[method]:elem[method];}
if(win){win.scrollTo(!top?val:jQuery(win).scrollLeft(),top?val:jQuery(win).scrollTop());}else{elem[method]=val;}},method,val,arguments.length,null);};});function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false;}
jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return jQuery.access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){return elem.document.documentElement["client"+name];}
if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}
return value===undefined?jQuery.css(elem,type,value,extra):jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});window.jQuery=window.$=window.$CQ=jQuery;if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return jQuery;});}})(window);};
if(typeof jQuery!='undefined'&&typeof $.ui=='undefined')
{(function($,undefined){var uuid=0,runiqueId=/^ui-id-\d+$/;$.ui=$.ui||{};$.extend($.ui,{version:"1.10.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});$.fn.extend({focus:(function(orig){return function(delay,fn){return typeof delay==="number"?this.each(function(){var elem=this;setTimeout(function(){$(elem).focus();if(fn){fn.call(elem);}},delay);}):orig.apply(this,arguments);};})($.fn.focus),scrollParent:function(){var scrollParent;if(($.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){scrollParent=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test($.css(this,"position"))&&(/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));}).eq(0);}else{scrollParent=this.parents().filter(function(){return(/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));}).eq(0);}
return(/fixed/).test(this.css("position"))||!scrollParent.length?$(document):scrollParent;},zIndex:function(zIndex){if(zIndex!==undefined){return this.css("zIndex",zIndex);}
if(this.length){var elem=$(this[0]),position,value;while(elem.length&&elem[0]!==document){position=elem.css("position");if(position==="absolute"||position==="relative"||position==="fixed"){value=parseInt(elem.css("zIndex"),10);if(!isNaN(value)&&value!==0){return value;}}
elem=elem.parent();}}
return 0;},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++uuid);}});},removeUniqueId:function(){return this.each(function(){if(runiqueId.test(this.id)){$(this).removeAttr("id");}});}});function focusable(element,isTabIndexNotNaN){var map,mapName,img,nodeName=element.nodeName.toLowerCase();if("area"===nodeName){map=element.parentNode;mapName=map.name;if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){return false;}
img=$("img[usemap=#"+mapName+"]")[0];return!!img&&visible(img);}
return(/input|select|textarea|button|object/.test(nodeName)?!element.disabled:"a"===nodeName?element.href||isTabIndexNotNaN:isTabIndexNotNaN)&&visible(element);}
function visible(element){return $.expr.filters.visible(element)&&!$(element).parents().addBack().filter(function(){return $.css(this,"visibility")==="hidden";}).length;}
$.extend($.expr[":"],{data:$.expr.createPseudo?$.expr.createPseudo(function(dataName){return function(elem){return!!$.data(elem,dataName);};}):function(elem,i,match){return!!$.data(elem,match[3]);},focusable:function(element){return focusable(element,!isNaN($.attr(element,"tabindex")));},tabbable:function(element){var tabIndex=$.attr(element,"tabindex"),isTabIndexNaN=isNaN(tabIndex);return(isTabIndexNaN||tabIndex>=0)&&focusable(element,!isTabIndexNaN);}});if(!$("<a>").outerWidth(1).jquery){$.each(["Width","Height"],function(i,name){var side=name==="Width"?["Left","Right"]:["Top","Bottom"],type=name.toLowerCase(),orig={innerWidth:$.fn.innerWidth,innerHeight:$.fn.innerHeight,outerWidth:$.fn.outerWidth,outerHeight:$.fn.outerHeight};function reduce(elem,size,border,margin){$.each(side,function(){size-=parseFloat($.css(elem,"padding"+this))||0;if(border){size-=parseFloat($.css(elem,"border"+this+"Width"))||0;}
if(margin){size-=parseFloat($.css(elem,"margin"+this))||0;}});return size;}
$.fn["inner"+name]=function(size){if(size===undefined){return orig["inner"+name].call(this);}
return this.each(function(){$(this).css(type,reduce(this,size)+"px");});};$.fn["outer"+name]=function(size,margin){if(typeof size!=="number"){return orig["outer"+name].call(this,size);}
return this.each(function(){$(this).css(type,reduce(this,size,true,margin)+"px");});};});}
if(!$.fn.addBack){$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));};}
if($("<a>").data("a-b","a").removeData("a-b").data("a-b")){$.fn.removeData=(function(removeData){return function(key){if(arguments.length){return removeData.call(this,$.camelCase(key));}else{return removeData.call(this);}};})($.fn.removeData);}
$.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());$.support.selectstart="onselectstart"in document.createElement("div");$.fn.extend({disableSelection:function(){return this.bind(($.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(event){event.preventDefault();});},enableSelection:function(){return this.unbind(".ui-disableSelection");}});$.extend($.ui,{plugin:{add:function(module,option,set){var i,proto=$.ui[module].prototype;for(i in set){proto.plugins[i]=proto.plugins[i]||[];proto.plugins[i].push([option,set[i]]);}},call:function(instance,name,args){var i,set=instance.plugins[name];if(!set||!instance.element[0].parentNode||instance.element[0].parentNode.nodeType===11){return;}
for(i=0;i<set.length;i++){if(instance.options[set[i][0]]){set[i][1].apply(instance.element,args);}}}},hasScroll:function(el,a){if($(el).css("overflow")==="hidden"){return false;}
var scroll=(a&&a==="left")?"scrollLeft":"scrollTop",has=false;if(el[scroll]>0){return true;}
el[scroll]=1;has=(el[scroll]>0);el[scroll]=0;return has;}});})(jQuery);(function($,undefined){var uuid=0,slice=Array.prototype.slice,_cleanData=$.cleanData;$.cleanData=function(elems){for(var i=0,elem;(elem=elems[i])!=null;i++){try{$(elem).triggerHandler("remove");}catch(e){}}
_cleanData(elems);};$.widget=function(name,base,prototype){var fullName,existingConstructor,constructor,basePrototype,proxiedPrototype={},namespace=name.split(".")[0];name=name.split(".")[1];fullName=namespace+"-"+name;if(!prototype){prototype=base;base=$.Widget;}
$.expr[":"][fullName.toLowerCase()]=function(elem){return!!$.data(elem,fullName);};$[namespace]=$[namespace]||{};existingConstructor=$[namespace][name];constructor=$[namespace][name]=function(options,element){if(!this._createWidget){return new constructor(options,element);}
if(arguments.length){this._createWidget(options,element);}};$.extend(constructor,existingConstructor,{version:prototype.version,_proto:$.extend({},prototype),_childConstructors:[]});basePrototype=new base();basePrototype.options=$.widget.extend({},basePrototype.options);$.each(prototype,function(prop,value){if(!$.isFunction(value)){proxiedPrototype[prop]=value;return;}
proxiedPrototype[prop]=(function(){var _super=function(){return base.prototype[prop].apply(this,arguments);},_superApply=function(args){return base.prototype[prop].apply(this,args);};return function(){var __super=this._super,__superApply=this._superApply,returnValue;this._super=_super;this._superApply=_superApply;returnValue=value.apply(this,arguments);this._super=__super;this._superApply=__superApply;return returnValue;};})();});constructor.prototype=$.widget.extend(basePrototype,{widgetEventPrefix:existingConstructor?basePrototype.widgetEventPrefix:name},proxiedPrototype,{constructor:constructor,namespace:namespace,widgetName:name,widgetFullName:fullName});if(existingConstructor){$.each(existingConstructor._childConstructors,function(i,child){var childPrototype=child.prototype;$.widget(childPrototype.namespace+"."+childPrototype.widgetName,constructor,child._proto);});delete existingConstructor._childConstructors;}else{base._childConstructors.push(constructor);}
$.widget.bridge(name,constructor);};$.widget.extend=function(target){var input=slice.call(arguments,1),inputIndex=0,inputLength=input.length,key,value;for(;inputIndex<inputLength;inputIndex++){for(key in input[inputIndex]){value=input[inputIndex][key];if(input[inputIndex].hasOwnProperty(key)&&value!==undefined){if($.isPlainObject(value)){target[key]=$.isPlainObject(target[key])?$.widget.extend({},target[key],value):$.widget.extend({},value);}else{target[key]=value;}}}}
return target;};$.widget.bridge=function(name,object){var fullName=object.prototype.widgetFullName||name;$.fn[name]=function(options){var isMethodCall=typeof options==="string",args=slice.call(arguments,1),returnValue=this;options=!isMethodCall&&args.length?$.widget.extend.apply(null,[options].concat(args)):options;if(isMethodCall){this.each(function(){var methodValue,instance=$.data(this,fullName);if(!instance){return $.error("cannot call methods on "+name+" prior to initialization; "+"attempted to call method '"+options+"'");}
if(!$.isFunction(instance[options])||options.charAt(0)==="_"){return $.error("no such method '"+options+"' for "+name+" widget instance");}
methodValue=instance[options].apply(instance,args);if(methodValue!==instance&&methodValue!==undefined){returnValue=methodValue&&methodValue.jquery?returnValue.pushStack(methodValue.get()):methodValue;return false;}});}else{this.each(function(){var instance=$.data(this,fullName);if(instance){instance.option(options||{})._init();}else{$.data(this,fullName,new object(options,this));}});}
return returnValue;};};$.Widget=function(){};$.Widget._childConstructors=[];$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(options,element){element=$(element||this.defaultElement||this)[0];this.element=$(element);this.uuid=uuid++;this.eventNamespace="."+this.widgetName+this.uuid;this.options=$.widget.extend({},this.options,this._getCreateOptions(),options);this.bindings=$();this.hoverable=$();this.focusable=$();if(element!==this){$.data(element,this.widgetFullName,this);this._on(true,this.element,{remove:function(event){if(event.target===element){this.destroy();}}});this.document=$(element.style?element.ownerDocument:element.document||element);this.window=$(this.document[0].defaultView||this.document[0].parentWindow);}
this._create();this._trigger("create",null,this._getCreateEventData());this._init();},_getCreateOptions:$.noop,_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy:function(){this._destroy();this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus");},_destroy:$.noop,widget:function(){return this.element;},option:function(key,value){var options=key,parts,curOption,i;if(arguments.length===0){return $.widget.extend({},this.options);}
if(typeof key==="string"){options={};parts=key.split(".");key=parts.shift();if(parts.length){curOption=options[key]=$.widget.extend({},this.options[key]);for(i=0;i<parts.length-1;i++){curOption[parts[i]]=curOption[parts[i]]||{};curOption=curOption[parts[i]];}
key=parts.pop();if(value===undefined){return curOption[key]===undefined?null:curOption[key];}
curOption[key]=value;}else{if(value===undefined){return this.options[key]===undefined?null:this.options[key];}
options[key]=value;}}
this._setOptions(options);return this;},_setOptions:function(options){var key;for(key in options){this._setOption(key,options[key]);}
return this;},_setOption:function(key,value){this.options[key]=value;if(key==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!value).attr("aria-disabled",value);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus");}
return this;},enable:function(){return this._setOption("disabled",false);},disable:function(){return this._setOption("disabled",true);},_on:function(suppressDisabledCheck,element,handlers){var delegateElement,instance=this;if(typeof suppressDisabledCheck!=="boolean"){handlers=element;element=suppressDisabledCheck;suppressDisabledCheck=false;}
if(!handlers){handlers=element;element=this.element;delegateElement=this.widget();}else{element=delegateElement=$(element);this.bindings=this.bindings.add(element);}
$.each(handlers,function(event,handler){function handlerProxy(){if(!suppressDisabledCheck&&(instance.options.disabled===true||$(this).hasClass("ui-state-disabled"))){return;}
return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}
if(typeof handler!=="string"){handlerProxy.guid=handler.guid=handler.guid||handlerProxy.guid||$.guid++;}
var match=event.match(/^(\w+)\s*(.*)$/),eventName=match[1]+instance.eventNamespace,selector=match[2];if(selector){delegateElement.delegate(selector,eventName,handlerProxy);}else{element.bind(eventName,handlerProxy);}});},_off:function(element,eventName){eventName=(eventName||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;element.unbind(eventName).undelegate(eventName);},_delay:function(handler,delay){function handlerProxy(){return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}
var instance=this;return setTimeout(handlerProxy,delay||0);},_hoverable:function(element){this.hoverable=this.hoverable.add(element);this._on(element,{mouseenter:function(event){$(event.currentTarget).addClass("ui-state-hover");},mouseleave:function(event){$(event.currentTarget).removeClass("ui-state-hover");}});},_focusable:function(element){this.focusable=this.focusable.add(element);this._on(element,{focusin:function(event){$(event.currentTarget).addClass("ui-state-focus");},focusout:function(event){$(event.currentTarget).removeClass("ui-state-focus");}});},_trigger:function(type,event,data){var prop,orig,callback=this.options[type];data=data||{};event=$.Event(event);event.type=(type===this.widgetEventPrefix?type:this.widgetEventPrefix+type).toLowerCase();event.target=this.element[0];orig=event.originalEvent;if(orig){for(prop in orig){if(!(prop in event)){event[prop]=orig[prop];}}}
this.element.trigger(event,data);return!($.isFunction(callback)&&callback.apply(this.element[0],[event].concat(data))===false||event.isDefaultPrevented());}};$.each({show:"fadeIn",hide:"fadeOut"},function(method,defaultEffect){$.Widget.prototype["_"+method]=function(element,options,callback){if(typeof options==="string"){options={effect:options};}
var hasOptions,effectName=!options?method:options===true||typeof options==="number"?defaultEffect:options.effect||defaultEffect;options=options||{};if(typeof options==="number"){options={duration:options};}
hasOptions=!$.isEmptyObject(options);options.complete=callback;if(options.delay){element.delay(options.delay);}
if(hasOptions&&$.effects&&$.effects.effect[effectName]){element[method](options);}else if(effectName!==method&&element[effectName]){element[effectName](options.duration,options.easing,callback);}else{element.queue(function(next){$(this)[method]();if(callback){callback.call(element[0]);}
next();});}};});})(jQuery);(function($,undefined){var mouseHandled=false;$(document).mouseup(function(){mouseHandled=false;});$.widget("ui.mouse",{version:"1.10.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var that=this;this.element.bind("mousedown."+this.widgetName,function(event){return that._mouseDown(event);}).bind("click."+this.widgetName,function(event){if(true===$.data(event.target,that.widgetName+".preventClickEvent")){$.removeData(event.target,that.widgetName+".preventClickEvent");event.stopImmediatePropagation();return false;}});this.started=false;},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);if(this._mouseMoveDelegate){$(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);}},_mouseDown:function(event){if(mouseHandled){return;}
(this._mouseStarted&&this._mouseUp(event));this._mouseDownEvent=event;var that=this,btnIsLeft=(event.which===1),elIsCancel=(typeof this.options.cancel==="string"&&event.target.nodeName?$(event.target).closest(this.options.cancel).length:false);if(!btnIsLeft||elIsCancel||!this._mouseCapture(event)){return true;}
this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){that.mouseDelayMet=true;},this.options.delay);}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(event)!==false);if(!this._mouseStarted){event.preventDefault();return true;}}
if(true===$.data(event.target,this.widgetName+".preventClickEvent")){$.removeData(event.target,this.widgetName+".preventClickEvent");}
this._mouseMoveDelegate=function(event){return that._mouseMove(event);};this._mouseUpDelegate=function(event){return that._mouseUp(event);};$(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);event.preventDefault();mouseHandled=true;return true;},_mouseMove:function(event){if($.ui.ie&&(!document.documentMode||document.documentMode<9)&&!event.button){return this._mouseUp(event);}
if(this._mouseStarted){this._mouseDrag(event);return event.preventDefault();}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,event)!==false);(this._mouseStarted?this._mouseDrag(event):this._mouseUp(event));}
return!this._mouseStarted;},_mouseUp:function(event){$(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(event.target===this._mouseDownEvent.target){$.data(event.target,this.widgetName+".preventClickEvent",true);}
this._mouseStop(event);}
return false;},_mouseDistanceMet:function(event){return(Math.max(Math.abs(this._mouseDownEvent.pageX-event.pageX),Math.abs(this._mouseDownEvent.pageY-event.pageY))>=this.options.distance);},_mouseDelayMet:function(){return this.mouseDelayMet;},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true;}});})(jQuery);(function($,undefined){$.widget("ui.draggable",$.ui.mouse,{version:"1.10.2",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative";}
if(this.options.addClasses){this.element.addClass("ui-draggable");}
if(this.options.disabled){this.element.addClass("ui-draggable-disabled");}
this._mouseInit();},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();},_mouseCapture:function(event){var o=this.options;if(this.helper||o.disabled||$(event.target).closest(".ui-resizable-handle").length>0){return false;}
this.handle=this._getHandle(event);if(!this.handle){return false;}
$(o.iframeFix===true?"iframe":o.iframeFix).each(function(){$("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css($(this).offset()).appendTo("body");});return true;},_mouseStart:function(event){var o=this.options;this.helper=this._createHelper(event);this.helper.addClass("ui-draggable-dragging");this._cacheHelperProportions();if($.ui.ddmanager){$.ui.ddmanager.current=this;}
this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};$.extend(this.offset,{click:{left:event.pageX-this.offset.left,top:event.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(event);this.originalPageX=event.pageX;this.originalPageY=event.pageY;(o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt));if(o.containment){this._setContainment();}
if(this._trigger("start",event)===false){this._clear();return false;}
this._cacheHelperProportions();if($.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event);}
this._mouseDrag(event,true);if($.ui.ddmanager){$.ui.ddmanager.dragStart(this,event);}
return true;},_mouseDrag:function(event,noPropagation){this.position=this._generatePosition(event);this.positionAbs=this._convertPositionTo("absolute");if(!noPropagation){var ui=this._uiHash();if(this._trigger("drag",event,ui)===false){this._mouseUp({});return false;}
this.position=ui.position;}
if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px";}
if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px";}
if($.ui.ddmanager){$.ui.ddmanager.drag(this,event);}
return false;},_mouseStop:function(event){var element,that=this,elementInDom=false,dropped=false;if($.ui.ddmanager&&!this.options.dropBehaviour){dropped=$.ui.ddmanager.drop(this,event);}
if(this.dropped){dropped=this.dropped;this.dropped=false;}
element=this.element[0];while(element&&(element=element.parentNode)){if(element===document){elementInDom=true;}}
if(!elementInDom&&this.options.helper==="original"){return false;}
if((this.options.revert==="invalid"&&!dropped)||(this.options.revert==="valid"&&dropped)||this.options.revert===true||($.isFunction(this.options.revert)&&this.options.revert.call(this.element,dropped))){$(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(that._trigger("stop",event)!==false){that._clear();}});}else{if(this._trigger("stop",event)!==false){this._clear();}}
return false;},_mouseUp:function(event){$("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this);});if($.ui.ddmanager){$.ui.ddmanager.dragStop(this,event);}
return $.ui.mouse.prototype._mouseUp.call(this,event);},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({});}else{this._clear();}
return this;},_getHandle:function(event){return this.options.handle?!!$(event.target).closest(this.element.find(this.options.handle)).length:true;},_createHelper:function(event){var o=this.options,helper=$.isFunction(o.helper)?$(o.helper.apply(this.element[0],[event])):(o.helper==="clone"?this.element.clone().removeAttr("id"):this.element);if(!helper.parents("body").length){helper.appendTo((o.appendTo==="parent"?this.element[0].parentNode:o.appendTo));}
if(helper[0]!==this.element[0]&&!(/(fixed|absolute)/).test(helper.css("position"))){helper.css("position","absolute");}
return helper;},_adjustOffsetFromHelper:function(obj){if(typeof obj==="string"){obj=obj.split(" ");}
if($.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0};}
if("left"in obj){this.offset.click.left=obj.left+this.margins.left;}
if("right"in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left;}
if("top"in obj){this.offset.click.top=obj.top+this.margins.top;}
if("bottom"in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top;}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var po=this.offsetParent.offset();if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop();}
if((this.offsetParent[0]===document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&$.ui.ie)){po={top:0,left:0};}
return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var p=this.element.position();return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:p.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()};}else{return{top:0,left:0};}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)};},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};},_setContainment:function(){var over,c,ce,o=this.options;if(o.containment==="parent"){o.containment=this.helper[0].parentNode;}
if(o.containment==="document"||o.containment==="window"){this.containment=[o.containment==="document"?0:$(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,o.containment==="document"?0:$(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(o.containment==="document"?0:$(window).scrollLeft())+$(o.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(o.containment==="document"?0:$(window).scrollTop())+($(o.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];}
if(!(/^(document|window|parent)$/).test(o.containment)&&o.containment.constructor!==Array){c=$(o.containment);ce=c[0];if(!ce){return;}
over=($(ce).css("overflow")!=="hidden");this.containment=[(parseInt($(ce).css("borderLeftWidth"),10)||0)+(parseInt($(ce).css("paddingLeft"),10)||0),(parseInt($(ce).css("borderTopWidth"),10)||0)+(parseInt($(ce).css("paddingTop"),10)||0),(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt($(ce).css("borderRightWidth"),10)||0)-(parseInt($(ce).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt($(ce).css("borderBottomWidth"),10)||0)-(parseInt($(ce).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=c;}else if(o.containment.constructor===Array){this.containment=o.containment;}},_convertPositionTo:function(d,pos){if(!pos){pos=this.position;}
var mod=d==="absolute"?1:-1,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);return{top:(pos.top+
this.offset.relative.top*mod+
this.offset.parent.top*mod-
((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop()))*mod)),left:(pos.left+
this.offset.relative.left*mod+
this.offset.parent.left*mod-
((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())*mod))};},_generatePosition:function(event){var containment,co,top,left,o=this.options,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName),pageX=event.pageX,pageY=event.pageY;if(this.originalPosition){if(this.containment){if(this.relative_container){co=this.relative_container.offset();containment=[this.containment[0]+co.left,this.containment[1]+co.top,this.containment[2]+co.left,this.containment[3]+co.top];}
else{containment=this.containment;}
if(event.pageX-this.offset.click.left<containment[0]){pageX=containment[0]+this.offset.click.left;}
if(event.pageY-this.offset.click.top<containment[1]){pageY=containment[1]+this.offset.click.top;}
if(event.pageX-this.offset.click.left>containment[2]){pageX=containment[2]+this.offset.click.left;}
if(event.pageY-this.offset.click.top>containment[3]){pageY=containment[3]+this.offset.click.top;}}
if(o.grid){top=o.grid[1]?this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY;pageY=containment?((top-this.offset.click.top>=containment[1]||top-this.offset.click.top>containment[3])?top:((top-this.offset.click.top>=containment[1])?top-o.grid[1]:top+o.grid[1])):top;left=o.grid[0]?this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX;pageX=containment?((left-this.offset.click.left>=containment[0]||left-this.offset.click.left>containment[2])?left:((left-this.offset.click.left>=containment[0])?left-o.grid[0]:left+o.grid[0])):left;}}
return{top:(pageY-
this.offset.click.top-
this.offset.relative.top-
this.offset.parent.top+
((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop())))),left:(pageX-
this.offset.click.left-
this.offset.relative.left-
this.offset.parent.left+
((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())))};},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove();}
this.helper=null;this.cancelHelperRemoval=false;},_trigger:function(type,event,ui){ui=ui||this._uiHash();$.ui.plugin.call(this,type,[event,ui]);if(type==="drag"){this.positionAbs=this._convertPositionTo("absolute");}
return $.Widget.prototype._trigger.call(this,type,event,ui);},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs};}});$.ui.plugin.add("draggable","connectToSortable",{start:function(event,ui){var inst=$(this).data("ui-draggable"),o=inst.options,uiSortable=$.extend({},ui,{item:inst.element});inst.sortables=[];$(o.connectToSortable).each(function(){var sortable=$.data(this,"ui-sortable");if(sortable&&!sortable.options.disabled){inst.sortables.push({instance:sortable,shouldRevert:sortable.options.revert});sortable.refreshPositions();sortable._trigger("activate",event,uiSortable);}});},stop:function(event,ui){var inst=$(this).data("ui-draggable"),uiSortable=$.extend({},ui,{item:inst.element});$.each(inst.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;inst.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=this.shouldRevert;}
this.instance._mouseStop(event);this.instance.options.helper=this.instance.options._helper;if(inst.options.helper==="original"){this.instance.currentItem.css({top:"auto",left:"auto"});}}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",event,uiSortable);}});},drag:function(event,ui){var inst=$(this).data("ui-draggable"),that=this;$.each(inst.sortables,function(){var innermostIntersecting=false,thisSortable=this;this.instance.positionAbs=inst.positionAbs;this.instance.helperProportions=inst.helperProportions;this.instance.offset.click=inst.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){innermostIntersecting=true;$.each(inst.sortables,function(){this.instance.positionAbs=inst.positionAbs;this.instance.helperProportions=inst.helperProportions;this.instance.offset.click=inst.offset.click;if(this!==thisSortable&&this.instance._intersectsWith(this.instance.containerCache)&&$.contains(thisSortable.instance.element[0],this.instance.element[0])){innermostIntersecting=false;}
return innermostIntersecting;});}
if(innermostIntersecting){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=$(that).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return ui.helper[0];};event.target=this.instance.currentItem[0];this.instance._mouseCapture(event,true);this.instance._mouseStart(event,true,true);this.instance.offset.click.top=inst.offset.click.top;this.instance.offset.click.left=inst.offset.click.left;this.instance.offset.parent.left-=inst.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=inst.offset.parent.top-this.instance.offset.parent.top;inst._trigger("toSortable",event);inst.dropped=this.instance.element;inst.currentItem=inst.element;this.instance.fromOutside=inst;}
if(this.instance.currentItem){this.instance._mouseDrag(event);}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",event,this.instance._uiHash(this.instance));this.instance._mouseStop(event,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove();}
inst._trigger("fromSortable",event);inst.dropped=false;}}});}});$.ui.plugin.add("draggable","cursor",{start:function(){var t=$("body"),o=$(this).data("ui-draggable").options;if(t.css("cursor")){o._cursor=t.css("cursor");}
t.css("cursor",o.cursor);},stop:function(){var o=$(this).data("ui-draggable").options;if(o._cursor){$("body").css("cursor",o._cursor);}}});$.ui.plugin.add("draggable","opacity",{start:function(event,ui){var t=$(ui.helper),o=$(this).data("ui-draggable").options;if(t.css("opacity")){o._opacity=t.css("opacity");}
t.css("opacity",o.opacity);},stop:function(event,ui){var o=$(this).data("ui-draggable").options;if(o._opacity){$(ui.helper).css("opacity",o._opacity);}}});$.ui.plugin.add("draggable","scroll",{start:function(){var i=$(this).data("ui-draggable");if(i.scrollParent[0]!==document&&i.scrollParent[0].tagName!=="HTML"){i.overflowOffset=i.scrollParent.offset();}},drag:function(event){var i=$(this).data("ui-draggable"),o=i.options,scrolled=false;if(i.scrollParent[0]!==document&&i.scrollParent[0].tagName!=="HTML"){if(!o.axis||o.axis!=="x"){if((i.overflowOffset.top+i.scrollParent[0].offsetHeight)-event.pageY<o.scrollSensitivity){i.scrollParent[0].scrollTop=scrolled=i.scrollParent[0].scrollTop+o.scrollSpeed;}else if(event.pageY-i.overflowOffset.top<o.scrollSensitivity){i.scrollParent[0].scrollTop=scrolled=i.scrollParent[0].scrollTop-o.scrollSpeed;}}
if(!o.axis||o.axis!=="y"){if((i.overflowOffset.left+i.scrollParent[0].offsetWidth)-event.pageX<o.scrollSensitivity){i.scrollParent[0].scrollLeft=scrolled=i.scrollParent[0].scrollLeft+o.scrollSpeed;}else if(event.pageX-i.overflowOffset.left<o.scrollSensitivity){i.scrollParent[0].scrollLeft=scrolled=i.scrollParent[0].scrollLeft-o.scrollSpeed;}}}else{if(!o.axis||o.axis!=="x"){if(event.pageY-$(document).scrollTop()<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed);}else if($(window).height()-(event.pageY-$(document).scrollTop())<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()+o.scrollSpeed);}}
if(!o.axis||o.axis!=="y"){if(event.pageX-$(document).scrollLeft()<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()-o.scrollSpeed);}else if($(window).width()-(event.pageX-$(document).scrollLeft())<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()+o.scrollSpeed);}}}
if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(i,event);}}});$.ui.plugin.add("draggable","snap",{start:function(){var i=$(this).data("ui-draggable"),o=i.options;i.snapElements=[];$(o.snap.constructor!==String?(o.snap.items||":data(ui-draggable)"):o.snap).each(function(){var $t=$(this),$o=$t.offset();if(this!==i.element[0]){i.snapElements.push({item:this,width:$t.outerWidth(),height:$t.outerHeight(),top:$o.top,left:$o.left});}});},drag:function(event,ui){var ts,bs,ls,rs,l,r,t,b,i,first,inst=$(this).data("ui-draggable"),o=inst.options,d=o.snapTolerance,x1=ui.offset.left,x2=x1+inst.helperProportions.width,y1=ui.offset.top,y2=y1+inst.helperProportions.height;for(i=inst.snapElements.length-1;i>=0;i--){l=inst.snapElements[i].left;r=l+inst.snapElements[i].width;t=inst.snapElements[i].top;b=t+inst.snapElements[i].height;if(!((l-d<x1&&x1<r+d&&t-d<y1&&y1<b+d)||(l-d<x1&&x1<r+d&&t-d<y2&&y2<b+d)||(l-d<x2&&x2<r+d&&t-d<y1&&y1<b+d)||(l-d<x2&&x2<r+d&&t-d<y2&&y2<b+d))){if(inst.snapElements[i].snapping){(inst.options.snap.release&&inst.options.snap.release.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item})));}
inst.snapElements[i].snapping=false;continue;}
if(o.snapMode!=="inner"){ts=Math.abs(t-y2)<=d;bs=Math.abs(b-y1)<=d;ls=Math.abs(l-x2)<=d;rs=Math.abs(r-x1)<=d;if(ts){ui.position.top=inst._convertPositionTo("relative",{top:t-inst.helperProportions.height,left:0}).top-inst.margins.top;}
if(bs){ui.position.top=inst._convertPositionTo("relative",{top:b,left:0}).top-inst.margins.top;}
if(ls){ui.position.left=inst._convertPositionTo("relative",{top:0,left:l-inst.helperProportions.width}).left-inst.margins.left;}
if(rs){ui.position.left=inst._convertPositionTo("relative",{top:0,left:r}).left-inst.margins.left;}}
first=(ts||bs||ls||rs);if(o.snapMode!=="outer"){ts=Math.abs(t-y1)<=d;bs=Math.abs(b-y2)<=d;ls=Math.abs(l-x1)<=d;rs=Math.abs(r-x2)<=d;if(ts){ui.position.top=inst._convertPositionTo("relative",{top:t,left:0}).top-inst.margins.top;}
if(bs){ui.position.top=inst._convertPositionTo("relative",{top:b-inst.helperProportions.height,left:0}).top-inst.margins.top;}
if(ls){ui.position.left=inst._convertPositionTo("relative",{top:0,left:l}).left-inst.margins.left;}
if(rs){ui.position.left=inst._convertPositionTo("relative",{top:0,left:r-inst.helperProportions.width}).left-inst.margins.left;}}
if(!inst.snapElements[i].snapping&&(ts||bs||ls||rs||first)){(inst.options.snap.snap&&inst.options.snap.snap.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item})));}
inst.snapElements[i].snapping=(ts||bs||ls||rs||first);}}});$.ui.plugin.add("draggable","stack",{start:function(){var min,o=this.data("ui-draggable").options,group=$.makeArray($(o.stack)).sort(function(a,b){return(parseInt($(a).css("zIndex"),10)||0)-(parseInt($(b).css("zIndex"),10)||0);});if(!group.length){return;}
min=parseInt($(group[0]).css("zIndex"),10)||0;$(group).each(function(i){$(this).css("zIndex",min+i);});this.css("zIndex",(min+group.length));}});$.ui.plugin.add("draggable","zIndex",{start:function(event,ui){var t=$(ui.helper),o=$(this).data("ui-draggable").options;if(t.css("zIndex")){o._zIndex=t.css("zIndex");}
t.css("zIndex",o.zIndex);},stop:function(event,ui){var o=$(this).data("ui-draggable").options;if(o._zIndex){$(ui.helper).css("zIndex",o._zIndex);}}});})(jQuery);(function($,undefined){function isOverAxis(x,reference,size){return(x>reference)&&(x<(reference+size));}
$.widget("ui.droppable",{version:"1.10.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var o=this.options,accept=o.accept;this.isover=false;this.isout=true;this.accept=$.isFunction(accept)?accept:function(d){return d.is(accept);};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};$.ui.ddmanager.droppables[o.scope]=$.ui.ddmanager.droppables[o.scope]||[];$.ui.ddmanager.droppables[o.scope].push(this);(o.addClasses&&this.element.addClass("ui-droppable"));},_destroy:function(){var i=0,drop=$.ui.ddmanager.droppables[this.options.scope];for(;i<drop.length;i++){if(drop[i]===this){drop.splice(i,1);}}
this.element.removeClass("ui-droppable ui-droppable-disabled");},_setOption:function(key,value){if(key==="accept"){this.accept=$.isFunction(value)?value:function(d){return d.is(value);};}
$.Widget.prototype._setOption.apply(this,arguments);},_activate:function(event){var draggable=$.ui.ddmanager.current;if(this.options.activeClass){this.element.addClass(this.options.activeClass);}
if(draggable){this._trigger("activate",event,this.ui(draggable));}},_deactivate:function(event){var draggable=$.ui.ddmanager.current;if(this.options.activeClass){this.element.removeClass(this.options.activeClass);}
if(draggable){this._trigger("deactivate",event,this.ui(draggable));}},_over:function(event){var draggable=$.ui.ddmanager.current;if(!draggable||(draggable.currentItem||draggable.element)[0]===this.element[0]){return;}
if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass);}
this._trigger("over",event,this.ui(draggable));}},_out:function(event){var draggable=$.ui.ddmanager.current;if(!draggable||(draggable.currentItem||draggable.element)[0]===this.element[0]){return;}
if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass);}
this._trigger("out",event,this.ui(draggable));}},_drop:function(event,custom){var draggable=custom||$.ui.ddmanager.current,childrenIntersection=false;if(!draggable||(draggable.currentItem||draggable.element)[0]===this.element[0]){return false;}
this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var inst=$.data(this,"ui-droppable");if(inst.options.greedy&&!inst.options.disabled&&inst.options.scope===draggable.options.scope&&inst.accept.call(inst.element[0],(draggable.currentItem||draggable.element))&&$.ui.intersect(draggable,$.extend(inst,{offset:inst.element.offset()}),inst.options.tolerance)){childrenIntersection=true;return false;}});if(childrenIntersection){return false;}
if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass);}
if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass);}
this._trigger("drop",event,this.ui(draggable));return this.element;}
return false;},ui:function(c){return{draggable:(c.currentItem||c.element),helper:c.helper,position:c.position,offset:c.positionAbs};}});$.ui.intersect=function(draggable,droppable,toleranceMode){if(!droppable.offset){return false;}
var draggableLeft,draggableTop,x1=(draggable.positionAbs||draggable.position.absolute).left,x2=x1+draggable.helperProportions.width,y1=(draggable.positionAbs||draggable.position.absolute).top,y2=y1+draggable.helperProportions.height,l=droppable.offset.left,r=l+droppable.proportions.width,t=droppable.offset.top,b=t+droppable.proportions.height;switch(toleranceMode){case"fit":return(l<=x1&&x2<=r&&t<=y1&&y2<=b);case"intersect":return(l<x1+(draggable.helperProportions.width/2)&&x2-(draggable.helperProportions.width/2)<r&&t<y1+(draggable.helperProportions.height/2)&&y2-(draggable.helperProportions.height/2)<b);case"pointer":draggableLeft=((draggable.positionAbs||draggable.position.absolute).left+(draggable.clickOffset||draggable.offset.click).left);draggableTop=((draggable.positionAbs||draggable.position.absolute).top+(draggable.clickOffset||draggable.offset.click).top);return isOverAxis(draggableTop,t,droppable.proportions.height)&&isOverAxis(draggableLeft,l,droppable.proportions.width);case"touch":return((y1>=t&&y1<=b)||(y2>=t&&y2<=b)||(y1<t&&y2>b))&&((x1>=l&&x1<=r)||(x2>=l&&x2<=r)||(x1<l&&x2>r));default:return false;}};$.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,event){var i,j,m=$.ui.ddmanager.droppables[t.options.scope]||[],type=event?event.type:null,list=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();droppablesLoop:for(i=0;i<m.length;i++){if(m[i].options.disabled||(t&&!m[i].accept.call(m[i].element[0],(t.currentItem||t.element)))){continue;}
for(j=0;j<list.length;j++){if(list[j]===m[i].element[0]){m[i].proportions.height=0;continue droppablesLoop;}}
m[i].visible=m[i].element.css("display")!=="none";if(!m[i].visible){continue;}
if(type==="mousedown"){m[i]._activate.call(m[i],event);}
m[i].offset=m[i].element.offset();m[i].proportions={width:m[i].element[0].offsetWidth,height:m[i].element[0].offsetHeight};}},drop:function(draggable,event){var dropped=false;$.each(($.ui.ddmanager.droppables[draggable.options.scope]||[]).slice(),function(){if(!this.options){return;}
if(!this.options.disabled&&this.visible&&$.ui.intersect(draggable,this,this.options.tolerance)){dropped=this._drop.call(this,event)||dropped;}
if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){this.isout=true;this.isover=false;this._deactivate.call(this,event);}});return dropped;},dragStart:function(draggable,event){draggable.element.parentsUntil("body").bind("scroll.droppable",function(){if(!draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event);}});},drag:function(draggable,event){if(draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event);}
$.each($.ui.ddmanager.droppables[draggable.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return;}
var parentInstance,scope,parent,intersects=$.ui.intersect(draggable,this,this.options.tolerance),c=!intersects&&this.isover?"isout":(intersects&&!this.isover?"isover":null);if(!c){return;}
if(this.options.greedy){scope=this.options.scope;parent=this.element.parents(":data(ui-droppable)").filter(function(){return $.data(this,"ui-droppable").options.scope===scope;});if(parent.length){parentInstance=$.data(parent[0],"ui-droppable");parentInstance.greedyChild=(c==="isover");}}
if(parentInstance&&c==="isover"){parentInstance.isover=false;parentInstance.isout=true;parentInstance._out.call(parentInstance,event);}
this[c]=true;this[c==="isout"?"isover":"isout"]=false;this[c==="isover"?"_over":"_out"].call(this,event);if(parentInstance&&c==="isout"){parentInstance.isout=false;parentInstance.isover=true;parentInstance._over.call(parentInstance,event);}});},dragStop:function(draggable,event){draggable.element.parentsUntil("body").unbind("scroll.droppable");if(!draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event);}}};})(jQuery);(function($,undefined){function num(v){return parseInt(v,10)||0;}
function isNumber(value){return!isNaN(parseInt(value,10));}
$.widget("ui.resizable",$.ui.mouse,{version:"1.10.2",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var n,i,handle,axis,hname,that=this,o=this.options;this.element.addClass("ui-resizable");$.extend(this,{_aspectRatio:!!(o.aspectRatio),aspectRatio:o.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:o.helper||o.ghost||o.animate?o.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap($("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize();}
this.handles=o.handles||(!$(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw";}
n=this.handles.split(",");this.handles={};for(i=0;i<n.length;i++){handle=$.trim(n[i]);hname="ui-resizable-"+handle;axis=$("<div class='ui-resizable-handle "+hname+"'></div>");axis.css({zIndex:o.zIndex});if("se"===handle){axis.addClass("ui-icon ui-icon-gripsmall-diagonal-se");}
this.handles[handle]=".ui-resizable-"+handle;this.element.append(axis);}}
this._renderAxis=function(target){var i,axis,padPos,padWrapper;target=target||this.element;for(i in this.handles){if(this.handles[i].constructor===String){this.handles[i]=$(this.handles[i],this.element).show();}
if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){axis=$(this.handles[i],this.element);padWrapper=/sw|ne|nw|se|n|s/.test(i)?axis.outerHeight():axis.outerWidth();padPos=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");target.css(padPos,padWrapper);this._proportionallyResize();}
if(!$(this.handles[i]).length){continue;}}};this._renderAxis(this.element);this._handles=$(".ui-resizable-handle",this.element).disableSelection();this._handles.mouseover(function(){if(!that.resizing){if(this.className){axis=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);}
that.axis=axis&&axis[1]?axis[1]:"se";}});if(o.autoHide){this._handles.hide();$(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(o.disabled){return;}
$(this).removeClass("ui-resizable-autohide");that._handles.show();}).mouseleave(function(){if(o.disabled){return;}
if(!that.resizing){$(this).addClass("ui-resizable-autohide");that._handles.hide();}});}
this._mouseInit();},_destroy:function(){this._mouseDestroy();var wrapper,_destroy=function(exp){$(exp).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove();};if(this.elementIsWrapper){_destroy(this.element);wrapper=this.element;this.originalElement.css({position:wrapper.css("position"),width:wrapper.outerWidth(),height:wrapper.outerHeight(),top:wrapper.css("top"),left:wrapper.css("left")}).insertAfter(wrapper);wrapper.remove();}
this.originalElement.css("resize",this.originalResizeStyle);_destroy(this.originalElement);return this;},_mouseCapture:function(event){var i,handle,capture=false;for(i in this.handles){handle=$(this.handles[i])[0];if(handle===event.target||$.contains(handle,event.target)){capture=true;}}
return!this.options.disabled&&capture;},_mouseStart:function(event){var curleft,curtop,cursor,o=this.options,iniPos=this.element.position(),el=this.element;this.resizing=true;if((/absolute/).test(el.css("position"))){el.css({position:"absolute",top:el.css("top"),left:el.css("left")});}else if(el.is(".ui-draggable")){el.css({position:"absolute",top:iniPos.top,left:iniPos.left});}
this._renderProxy();curleft=num(this.helper.css("left"));curtop=num(this.helper.css("top"));if(o.containment){curleft+=$(o.containment).scrollLeft()||0;curtop+=$(o.containment).scrollTop()||0;}
this.offset=this.helper.offset();this.position={left:curleft,top:curtop};this.size=this._helper?{width:el.outerWidth(),height:el.outerHeight()}:{width:el.width(),height:el.height()};this.originalSize=this._helper?{width:el.outerWidth(),height:el.outerHeight()}:{width:el.width(),height:el.height()};this.originalPosition={left:curleft,top:curtop};this.sizeDiff={width:el.outerWidth()-el.width(),height:el.outerHeight()-el.height()};this.originalMousePosition={left:event.pageX,top:event.pageY};this.aspectRatio=(typeof o.aspectRatio==="number")?o.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);cursor=$(".ui-resizable-"+this.axis).css("cursor");$("body").css("cursor",cursor==="auto"?this.axis+"-resize":cursor);el.addClass("ui-resizable-resizing");this._propagate("start",event);return true;},_mouseDrag:function(event){var data,el=this.helper,props={},smp=this.originalMousePosition,a=this.axis,prevTop=this.position.top,prevLeft=this.position.left,prevWidth=this.size.width,prevHeight=this.size.height,dx=(event.pageX-smp.left)||0,dy=(event.pageY-smp.top)||0,trigger=this._change[a];if(!trigger){return false;}
data=trigger.apply(this,[event,dx,dy]);this._updateVirtualBoundaries(event.shiftKey);if(this._aspectRatio||event.shiftKey){data=this._updateRatio(data,event);}
data=this._respectSize(data,event);this._updateCache(data);this._propagate("resize",event);if(this.position.top!==prevTop){props.top=this.position.top+"px";}
if(this.position.left!==prevLeft){props.left=this.position.left+"px";}
if(this.size.width!==prevWidth){props.width=this.size.width+"px";}
if(this.size.height!==prevHeight){props.height=this.size.height+"px";}
el.css(props);if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize();}
if(!$.isEmptyObject(props)){this._trigger("resize",event,this.ui());}
return false;},_mouseStop:function(event){this.resizing=false;var pr,ista,soffseth,soffsetw,s,left,top,o=this.options,that=this;if(this._helper){pr=this._proportionallyResizeElements;ista=pr.length&&(/textarea/i).test(pr[0].nodeName);soffseth=ista&&$.ui.hasScroll(pr[0],"left")?0:that.sizeDiff.height;soffsetw=ista?0:that.sizeDiff.width;s={width:(that.helper.width()-soffsetw),height:(that.helper.height()-soffseth)};left=(parseInt(that.element.css("left"),10)+(that.position.left-that.originalPosition.left))||null;top=(parseInt(that.element.css("top"),10)+(that.position.top-that.originalPosition.top))||null;if(!o.animate){this.element.css($.extend(s,{top:top,left:left}));}
that.helper.height(that.size.height);that.helper.width(that.size.width);if(this._helper&&!o.animate){this._proportionallyResize();}}
$("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",event);if(this._helper){this.helper.remove();}
return false;},_updateVirtualBoundaries:function(forceAspectRatio){var pMinWidth,pMaxWidth,pMinHeight,pMaxHeight,b,o=this.options;b={minWidth:isNumber(o.minWidth)?o.minWidth:0,maxWidth:isNumber(o.maxWidth)?o.maxWidth:Infinity,minHeight:isNumber(o.minHeight)?o.minHeight:0,maxHeight:isNumber(o.maxHeight)?o.maxHeight:Infinity};if(this._aspectRatio||forceAspectRatio){pMinWidth=b.minHeight*this.aspectRatio;pMinHeight=b.minWidth/this.aspectRatio;pMaxWidth=b.maxHeight*this.aspectRatio;pMaxHeight=b.maxWidth/this.aspectRatio;if(pMinWidth>b.minWidth){b.minWidth=pMinWidth;}
if(pMinHeight>b.minHeight){b.minHeight=pMinHeight;}
if(pMaxWidth<b.maxWidth){b.maxWidth=pMaxWidth;}
if(pMaxHeight<b.maxHeight){b.maxHeight=pMaxHeight;}}
this._vBoundaries=b;},_updateCache:function(data){this.offset=this.helper.offset();if(isNumber(data.left)){this.position.left=data.left;}
if(isNumber(data.top)){this.position.top=data.top;}
if(isNumber(data.height)){this.size.height=data.height;}
if(isNumber(data.width)){this.size.width=data.width;}},_updateRatio:function(data){var cpos=this.position,csize=this.size,a=this.axis;if(isNumber(data.height)){data.width=(data.height*this.aspectRatio);}else if(isNumber(data.width)){data.height=(data.width/this.aspectRatio);}
if(a==="sw"){data.left=cpos.left+(csize.width-data.width);data.top=null;}
if(a==="nw"){data.top=cpos.top+(csize.height-data.height);data.left=cpos.left+(csize.width-data.width);}
return data;},_respectSize:function(data){var o=this._vBoundaries,a=this.axis,ismaxw=isNumber(data.width)&&o.maxWidth&&(o.maxWidth<data.width),ismaxh=isNumber(data.height)&&o.maxHeight&&(o.maxHeight<data.height),isminw=isNumber(data.width)&&o.minWidth&&(o.minWidth>data.width),isminh=isNumber(data.height)&&o.minHeight&&(o.minHeight>data.height),dw=this.originalPosition.left+this.originalSize.width,dh=this.position.top+this.size.height,cw=/sw|nw|w/.test(a),ch=/nw|ne|n/.test(a);if(isminw){data.width=o.minWidth;}
if(isminh){data.height=o.minHeight;}
if(ismaxw){data.width=o.maxWidth;}
if(ismaxh){data.height=o.maxHeight;}
if(isminw&&cw){data.left=dw-o.minWidth;}
if(ismaxw&&cw){data.left=dw-o.maxWidth;}
if(isminh&&ch){data.top=dh-o.minHeight;}
if(ismaxh&&ch){data.top=dh-o.maxHeight;}
if(!data.width&&!data.height&&!data.left&&data.top){data.top=null;}else if(!data.width&&!data.height&&!data.top&&data.left){data.left=null;}
return data;},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return;}
var i,j,borders,paddings,prel,element=this.helper||this.element;for(i=0;i<this._proportionallyResizeElements.length;i++){prel=this._proportionallyResizeElements[i];if(!this.borderDif){this.borderDif=[];borders=[prel.css("borderTopWidth"),prel.css("borderRightWidth"),prel.css("borderBottomWidth"),prel.css("borderLeftWidth")];paddings=[prel.css("paddingTop"),prel.css("paddingRight"),prel.css("paddingBottom"),prel.css("paddingLeft")];for(j=0;j<borders.length;j++){this.borderDif[j]=(parseInt(borders[j],10)||0)+(parseInt(paddings[j],10)||0);}}
prel.css({height:(element.height()-this.borderDif[0]-this.borderDif[2])||0,width:(element.width()-this.borderDif[1]-this.borderDif[3])||0});}},_renderProxy:function(){var el=this.element,o=this.options;this.elementOffset=el.offset();if(this._helper){this.helper=this.helper||$("<div style='overflow:hidden;'></div>");this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++o.zIndex});this.helper.appendTo("body").disableSelection();}else{this.helper=this.element;}},_change:{e:function(event,dx){return{width:this.originalSize.width+dx};},w:function(event,dx){var cs=this.originalSize,sp=this.originalPosition;return{left:sp.left+dx,width:cs.width-dx};},n:function(event,dx,dy){var cs=this.originalSize,sp=this.originalPosition;return{top:sp.top+dy,height:cs.height-dy};},s:function(event,dx,dy){return{height:this.originalSize.height+dy};},se:function(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]));},sw:function(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]));},ne:function(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]));},nw:function(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]));}},_propagate:function(n,event){$.ui.plugin.call(this,n,[event,this.ui()]);(n!=="resize"&&this._trigger(n,event,this.ui()));},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition};}});$.ui.plugin.add("resizable","animate",{stop:function(event){var that=$(this).data("ui-resizable"),o=that.options,pr=that._proportionallyResizeElements,ista=pr.length&&(/textarea/i).test(pr[0].nodeName),soffseth=ista&&$.ui.hasScroll(pr[0],"left")?0:that.sizeDiff.height,soffsetw=ista?0:that.sizeDiff.width,style={width:(that.size.width-soffsetw),height:(that.size.height-soffseth)},left=(parseInt(that.element.css("left"),10)+(that.position.left-that.originalPosition.left))||null,top=(parseInt(that.element.css("top"),10)+(that.position.top-that.originalPosition.top))||null;that.element.animate($.extend(style,top&&left?{top:top,left:left}:{}),{duration:o.animateDuration,easing:o.animateEasing,step:function(){var data={width:parseInt(that.element.css("width"),10),height:parseInt(that.element.css("height"),10),top:parseInt(that.element.css("top"),10),left:parseInt(that.element.css("left"),10)};if(pr&&pr.length){$(pr[0]).css({width:data.width,height:data.height});}
that._updateCache(data);that._propagate("resize",event);}});}});$.ui.plugin.add("resizable","containment",{start:function(){var element,p,co,ch,cw,width,height,that=$(this).data("ui-resizable"),o=that.options,el=that.element,oc=o.containment,ce=(oc instanceof $)?oc.get(0):(/parent/.test(oc))?el.parent().get(0):oc;if(!ce){return;}
that.containerElement=$(ce);if(/document/.test(oc)||oc===document){that.containerOffset={left:0,top:0};that.containerPosition={left:0,top:0};that.parentData={element:$(document),left:0,top:0,width:$(document).width(),height:$(document).height()||document.body.parentNode.scrollHeight};}
else{element=$(ce);p=[];$(["Top","Right","Left","Bottom"]).each(function(i,name){p[i]=num(element.css("padding"+name));});that.containerOffset=element.offset();that.containerPosition=element.position();that.containerSize={height:(element.innerHeight()-p[3]),width:(element.innerWidth()-p[1])};co=that.containerOffset;ch=that.containerSize.height;cw=that.containerSize.width;width=($.ui.hasScroll(ce,"left")?ce.scrollWidth:cw);height=($.ui.hasScroll(ce)?ce.scrollHeight:ch);that.parentData={element:ce,left:co.left,top:co.top,width:width,height:height};}},resize:function(event){var woset,hoset,isParent,isOffsetRelative,that=$(this).data("ui-resizable"),o=that.options,co=that.containerOffset,cp=that.position,pRatio=that._aspectRatio||event.shiftKey,cop={top:0,left:0},ce=that.containerElement;if(ce[0]!==document&&(/static/).test(ce.css("position"))){cop=co;}
if(cp.left<(that._helper?co.left:0)){that.size.width=that.size.width+(that._helper?(that.position.left-co.left):(that.position.left-cop.left));if(pRatio){that.size.height=that.size.width/that.aspectRatio;}
that.position.left=o.helper?co.left:0;}
if(cp.top<(that._helper?co.top:0)){that.size.height=that.size.height+(that._helper?(that.position.top-co.top):that.position.top);if(pRatio){that.size.width=that.size.height*that.aspectRatio;}
that.position.top=that._helper?co.top:0;}
that.offset.left=that.parentData.left+that.position.left;that.offset.top=that.parentData.top+that.position.top;woset=Math.abs((that._helper?that.offset.left-cop.left:(that.offset.left-cop.left))+that.sizeDiff.width);hoset=Math.abs((that._helper?that.offset.top-cop.top:(that.offset.top-co.top))+that.sizeDiff.height);isParent=that.containerElement.get(0)===that.element.parent().get(0);isOffsetRelative=/relative|absolute/.test(that.containerElement.css("position"));if(isParent&&isOffsetRelative){woset-=that.parentData.left;}
if(woset+that.size.width>=that.parentData.width){that.size.width=that.parentData.width-woset;if(pRatio){that.size.height=that.size.width/that.aspectRatio;}}
if(hoset+that.size.height>=that.parentData.height){that.size.height=that.parentData.height-hoset;if(pRatio){that.size.width=that.size.height*that.aspectRatio;}}},stop:function(){var that=$(this).data("ui-resizable"),o=that.options,co=that.containerOffset,cop=that.containerPosition,ce=that.containerElement,helper=$(that.helper),ho=helper.offset(),w=helper.outerWidth()-that.sizeDiff.width,h=helper.outerHeight()-that.sizeDiff.height;if(that._helper&&!o.animate&&(/relative/).test(ce.css("position"))){$(this).css({left:ho.left-cop.left-co.left,width:w,height:h});}
if(that._helper&&!o.animate&&(/static/).test(ce.css("position"))){$(this).css({left:ho.left-cop.left-co.left,width:w,height:h});}}});$.ui.plugin.add("resizable","alsoResize",{start:function(){var that=$(this).data("ui-resizable"),o=that.options,_store=function(exp){$(exp).each(function(){var el=$(this);el.data("ui-resizable-alsoresize",{width:parseInt(el.width(),10),height:parseInt(el.height(),10),left:parseInt(el.css("left"),10),top:parseInt(el.css("top"),10)});});};if(typeof(o.alsoResize)==="object"&&!o.alsoResize.parentNode){if(o.alsoResize.length){o.alsoResize=o.alsoResize[0];_store(o.alsoResize);}
else{$.each(o.alsoResize,function(exp){_store(exp);});}}else{_store(o.alsoResize);}},resize:function(event,ui){var that=$(this).data("ui-resizable"),o=that.options,os=that.originalSize,op=that.originalPosition,delta={height:(that.size.height-os.height)||0,width:(that.size.width-os.width)||0,top:(that.position.top-op.top)||0,left:(that.position.left-op.left)||0},_alsoResize=function(exp,c){$(exp).each(function(){var el=$(this),start=$(this).data("ui-resizable-alsoresize"),style={},css=c&&c.length?c:el.parents(ui.originalElement[0]).length?["width","height"]:["width","height","top","left"];$.each(css,function(i,prop){var sum=(start[prop]||0)+(delta[prop]||0);if(sum&&sum>=0){style[prop]=sum||null;}});el.css(style);});};if(typeof(o.alsoResize)==="object"&&!o.alsoResize.nodeType){$.each(o.alsoResize,function(exp,c){_alsoResize(exp,c);});}else{_alsoResize(o.alsoResize);}},stop:function(){$(this).removeData("resizable-alsoresize");}});$.ui.plugin.add("resizable","ghost",{start:function(){var that=$(this).data("ui-resizable"),o=that.options,cs=that.size;that.ghost=that.originalElement.clone();that.ghost.css({opacity:0.25,display:"block",position:"relative",height:cs.height,width:cs.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof o.ghost==="string"?o.ghost:"");that.ghost.appendTo(that.helper);},resize:function(){var that=$(this).data("ui-resizable");if(that.ghost){that.ghost.css({position:"relative",height:that.size.height,width:that.size.width});}},stop:function(){var that=$(this).data("ui-resizable");if(that.ghost&&that.helper){that.helper.get(0).removeChild(that.ghost.get(0));}}});$.ui.plugin.add("resizable","grid",{resize:function(){var that=$(this).data("ui-resizable"),o=that.options,cs=that.size,os=that.originalSize,op=that.originalPosition,a=that.axis,grid=typeof o.grid==="number"?[o.grid,o.grid]:o.grid,gridX=(grid[0]||1),gridY=(grid[1]||1),ox=Math.round((cs.width-os.width)/gridX)*gridX,oy=Math.round((cs.height-os.height)/gridY)*gridY,newWidth=os.width+ox,newHeight=os.height+oy,isMaxWidth=o.maxWidth&&(o.maxWidth<newWidth),isMaxHeight=o.maxHeight&&(o.maxHeight<newHeight),isMinWidth=o.minWidth&&(o.minWidth>newWidth),isMinHeight=o.minHeight&&(o.minHeight>newHeight);o.grid=grid;if(isMinWidth){newWidth=newWidth+gridX;}
if(isMinHeight){newHeight=newHeight+gridY;}
if(isMaxWidth){newWidth=newWidth-gridX;}
if(isMaxHeight){newHeight=newHeight-gridY;}
if(/^(se|s|e)$/.test(a)){that.size.width=newWidth;that.size.height=newHeight;}else if(/^(ne)$/.test(a)){that.size.width=newWidth;that.size.height=newHeight;that.position.top=op.top-oy;}else if(/^(sw)$/.test(a)){that.size.width=newWidth;that.size.height=newHeight;that.position.left=op.left-ox;}else{that.size.width=newWidth;that.size.height=newHeight;that.position.top=op.top-oy;that.position.left=op.left-ox;}}});})(jQuery);(function($,undefined){$.widget("ui.selectable",$.ui.mouse,{version:"1.10.2",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var selectees,that=this;this.element.addClass("ui-selectable");this.dragged=false;this.refresh=function(){selectees=$(that.options.filter,that.element[0]);selectees.addClass("ui-selectee");selectees.each(function(){var $this=$(this),pos=$this.offset();$.data(this,"selectable-item",{element:this,$element:$this,left:pos.left,top:pos.top,right:pos.left+$this.outerWidth(),bottom:pos.top+$this.outerHeight(),startselected:false,selected:$this.hasClass("ui-selected"),selecting:$this.hasClass("ui-selecting"),unselecting:$this.hasClass("ui-unselecting")});});};this.refresh();this.selectees=selectees.addClass("ui-selectee");this._mouseInit();this.helper=$("<div class='ui-selectable-helper'></div>");},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled");this._mouseDestroy();},_mouseStart:function(event){var that=this,options=this.options;this.opos=[event.pageX,event.pageY];if(this.options.disabled){return;}
this.selectees=$(options.filter,this.element[0]);this._trigger("start",event);$(options.appendTo).append(this.helper);this.helper.css({"left":event.pageX,"top":event.pageY,"width":0,"height":0});if(options.autoRefresh){this.refresh();}
this.selectees.filter(".ui-selected").each(function(){var selectee=$.data(this,"selectable-item");selectee.startselected=true;if(!event.metaKey&&!event.ctrlKey){selectee.$element.removeClass("ui-selected");selectee.selected=false;selectee.$element.addClass("ui-unselecting");selectee.unselecting=true;that._trigger("unselecting",event,{unselecting:selectee.element});}});$(event.target).parents().addBack().each(function(){var doSelect,selectee=$.data(this,"selectable-item");if(selectee){doSelect=(!event.metaKey&&!event.ctrlKey)||!selectee.$element.hasClass("ui-selected");selectee.$element.removeClass(doSelect?"ui-unselecting":"ui-selected").addClass(doSelect?"ui-selecting":"ui-unselecting");selectee.unselecting=!doSelect;selectee.selecting=doSelect;selectee.selected=doSelect;if(doSelect){that._trigger("selecting",event,{selecting:selectee.element});}else{that._trigger("unselecting",event,{unselecting:selectee.element});}
return false;}});},_mouseDrag:function(event){this.dragged=true;if(this.options.disabled){return;}
var tmp,that=this,options=this.options,x1=this.opos[0],y1=this.opos[1],x2=event.pageX,y2=event.pageY;if(x1>x2){tmp=x2;x2=x1;x1=tmp;}
if(y1>y2){tmp=y2;y2=y1;y1=tmp;}
this.helper.css({left:x1,top:y1,width:x2-x1,height:y2-y1});this.selectees.each(function(){var selectee=$.data(this,"selectable-item"),hit=false;if(!selectee||selectee.element===that.element[0]){return;}
if(options.tolerance==="touch"){hit=(!(selectee.left>x2||selectee.right<x1||selectee.top>y2||selectee.bottom<y1));}else if(options.tolerance==="fit"){hit=(selectee.left>x1&&selectee.right<x2&&selectee.top>y1&&selectee.bottom<y2);}
if(hit){if(selectee.selected){selectee.$element.removeClass("ui-selected");selectee.selected=false;}
if(selectee.unselecting){selectee.$element.removeClass("ui-unselecting");selectee.unselecting=false;}
if(!selectee.selecting){selectee.$element.addClass("ui-selecting");selectee.selecting=true;that._trigger("selecting",event,{selecting:selectee.element});}}else{if(selectee.selecting){if((event.metaKey||event.ctrlKey)&&selectee.startselected){selectee.$element.removeClass("ui-selecting");selectee.selecting=false;selectee.$element.addClass("ui-selected");selectee.selected=true;}else{selectee.$element.removeClass("ui-selecting");selectee.selecting=false;if(selectee.startselected){selectee.$element.addClass("ui-unselecting");selectee.unselecting=true;}
that._trigger("unselecting",event,{unselecting:selectee.element});}}
if(selectee.selected){if(!event.metaKey&&!event.ctrlKey&&!selectee.startselected){selectee.$element.removeClass("ui-selected");selectee.selected=false;selectee.$element.addClass("ui-unselecting");selectee.unselecting=true;that._trigger("unselecting",event,{unselecting:selectee.element});}}}});return false;},_mouseStop:function(event){var that=this;this.dragged=false;$(".ui-unselecting",this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");selectee.$element.removeClass("ui-unselecting");selectee.unselecting=false;selectee.startselected=false;that._trigger("unselected",event,{unselected:selectee.element});});$(".ui-selecting",this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");selectee.$element.removeClass("ui-selecting").addClass("ui-selected");selectee.selecting=false;selectee.selected=true;selectee.startselected=true;that._trigger("selected",event,{selected:selectee.element});});this._trigger("stop",event);this.helper.remove();return false;}});})(jQuery);(function($,undefined){function isOverAxis(x,reference,size){return(x>reference)&&(x<(reference+size));}
function isFloating(item){return(/left|right/).test(item.css("float"))||(/inline|table-cell/).test(item.css("display"));}
$.widget("ui.sortable",$.ui.mouse,{version:"1.10.2",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var o=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?o.axis==="x"||isFloating(this.items[0].item):false;this.offset=this.element.offset();this._mouseInit();this.ready=true;},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");this._mouseDestroy();for(var i=this.items.length-1;i>=0;i--){this.items[i].item.removeData(this.widgetName+"-item");}
return this;},_setOption:function(key,value){if(key==="disabled"){this.options[key]=value;this.widget().toggleClass("ui-sortable-disabled",!!value);}else{$.Widget.prototype._setOption.apply(this,arguments);}},_mouseCapture:function(event,overrideHandle){var currentItem=null,validHandle=false,that=this;if(this.reverting){return false;}
if(this.options.disabled||this.options.type==="static"){return false;}
this._refreshItems(event);$(event.target).parents().each(function(){if($.data(this,that.widgetName+"-item")===that){currentItem=$(this);return false;}});if($.data(event.target,that.widgetName+"-item")===that){currentItem=$(event.target);}
if(!currentItem){return false;}
if(this.options.handle&&!overrideHandle){$(this.options.handle,currentItem).find("*").addBack().each(function(){if(this===event.target){validHandle=true;}});if(!validHandle){return false;}}
this.currentItem=currentItem;this._removeCurrentsFromItems();return true;},_mouseStart:function(event,overrideHandle,noActivation){var i,body,o=this.options;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(event);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};$.extend(this.offset,{click:{left:event.pageX-this.offset.left,top:event.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");this.originalPosition=this._generatePosition(event);this.originalPageX=event.pageX;this.originalPageY=event.pageY;(o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt));this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide();}
this._createPlaceholder();if(o.containment){this._setContainment();}
if(o.cursor&&o.cursor!=="auto"){body=this.document.find("body");this.storedCursor=body.css("cursor");body.css("cursor",o.cursor);this.storedStylesheet=$("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(body);}
if(o.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity");}
this.helper.css("opacity",o.opacity);}
if(o.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex");}
this.helper.css("zIndex",o.zIndex);}
if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset();}
this._trigger("start",event,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions();}
if(!noActivation){for(i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("activate",event,this._uiHash(this));}}
if($.ui.ddmanager){$.ui.ddmanager.current=this;}
if($.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event);}
this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(event);return true;},_mouseDrag:function(event){var i,item,itemElement,intersection,o=this.options,scrolled=false;this.position=this._generatePosition(event);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs;}
if(this.options.scroll){if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-event.pageY<o.scrollSensitivity){this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop+o.scrollSpeed;}else if(event.pageY-this.overflowOffset.top<o.scrollSensitivity){this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop-o.scrollSpeed;}
if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-event.pageX<o.scrollSensitivity){this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft+o.scrollSpeed;}else if(event.pageX-this.overflowOffset.left<o.scrollSensitivity){this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft-o.scrollSpeed;}}else{if(event.pageY-$(document).scrollTop()<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed);}else if($(window).height()-(event.pageY-$(document).scrollTop())<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()+o.scrollSpeed);}
if(event.pageX-$(document).scrollLeft()<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()-o.scrollSpeed);}else if($(window).width()-(event.pageX-$(document).scrollLeft())<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()+o.scrollSpeed);}}
if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event);}}
this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px";}
if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px";}
for(i=this.items.length-1;i>=0;i--){item=this.items[i];itemElement=item.item[0];intersection=this._intersectsWithPointer(item);if(!intersection){continue;}
if(item.instance!==this.currentContainer){continue;}
if(itemElement!==this.currentItem[0]&&this.placeholder[intersection===1?"next":"prev"]()[0]!==itemElement&&!$.contains(this.placeholder[0],itemElement)&&(this.options.type==="semi-dynamic"?!$.contains(this.element[0],itemElement):true)){this.direction=intersection===1?"down":"up";if(this.options.tolerance==="pointer"||this._intersectsWithSides(item)){this._rearrange(event,item);}else{break;}
this._trigger("change",event,this._uiHash());break;}}
this._contactContainers(event);if($.ui.ddmanager){$.ui.ddmanager.drag(this,event);}
this._trigger("sort",event,this._uiHash());this.lastPositionAbs=this.positionAbs;return false;},_mouseStop:function(event,noPropagation){if(!event){return;}
if($.ui.ddmanager&&!this.options.dropBehaviour){$.ui.ddmanager.drop(this,event);}
if(this.options.revert){var that=this,cur=this.placeholder.offset(),axis=this.options.axis,animation={};if(!axis||axis==="x"){animation.left=cur.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft);}
if(!axis||axis==="y"){animation.top=cur.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop);}
this.reverting=true;$(this.helper).animate(animation,parseInt(this.options.revert,10)||500,function(){that._clear(event);});}else{this._clear(event,noPropagation);}
return false;},cancel:function(){if(this.dragging){this._mouseUp({target:null});if(this.options.helper==="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");}else{this.currentItem.show();}
for(var i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("deactivate",null,this._uiHash(this));if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",null,this._uiHash(this));this.containers[i].containerCache.over=0;}}}
if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0]);}
if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove();}
$.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){$(this.domPosition.prev).after(this.currentItem);}else{$(this.domPosition.parent).prepend(this.currentItem);}}
return this;},serialize:function(o){var items=this._getItemsAsjQuery(o&&o.connected),str=[];o=o||{};$(items).each(function(){var res=($(o.item||this).attr(o.attribute||"id")||"").match(o.expression||(/(.+)[\-=_](.+)/));if(res){str.push((o.key||res[1]+"[]")+"="+(o.key&&o.expression?res[1]:res[2]));}});if(!str.length&&o.key){str.push(o.key+"=");}
return str.join("&");},toArray:function(o){var items=this._getItemsAsjQuery(o&&o.connected),ret=[];o=o||{};items.each(function(){ret.push($(o.item||this).attr(o.attribute||"id")||"");});return ret;},_intersectsWith:function(item){var x1=this.positionAbs.left,x2=x1+this.helperProportions.width,y1=this.positionAbs.top,y2=y1+this.helperProportions.height,l=item.left,r=l+item.width,t=item.top,b=t+item.height,dyClick=this.offset.click.top,dxClick=this.offset.click.left,isOverElement=(y1+dyClick)>t&&(y1+dyClick)<b&&(x1+dxClick)>l&&(x1+dxClick)<r;if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>item[this.floating?"width":"height"])){return isOverElement;}else{return(l<x1+(this.helperProportions.width/2)&&x2-(this.helperProportions.width/2)<r&&t<y1+(this.helperProportions.height/2)&&y2-(this.helperProportions.height/2)<b);}},_intersectsWithPointer:function(item){var isOverElementHeight=(this.options.axis==="x")||isOverAxis(this.positionAbs.top+this.offset.click.top,item.top,item.height),isOverElementWidth=(this.options.axis==="y")||isOverAxis(this.positionAbs.left+this.offset.click.left,item.left,item.width),isOverElement=isOverElementHeight&&isOverElementWidth,verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();if(!isOverElement){return false;}
return this.floating?(((horizontalDirection&&horizontalDirection==="right")||verticalDirection==="down")?2:1):(verticalDirection&&(verticalDirection==="down"?2:1));},_intersectsWithSides:function(item){var isOverBottomHalf=isOverAxis(this.positionAbs.top+this.offset.click.top,item.top+(item.height/2),item.height),isOverRightHalf=isOverAxis(this.positionAbs.left+this.offset.click.left,item.left+(item.width/2),item.width),verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();if(this.floating&&horizontalDirection){return((horizontalDirection==="right"&&isOverRightHalf)||(horizontalDirection==="left"&&!isOverRightHalf));}else{return verticalDirection&&((verticalDirection==="down"&&isOverBottomHalf)||(verticalDirection==="up"&&!isOverBottomHalf));}},_getDragVerticalDirection:function(){var delta=this.positionAbs.top-this.lastPositionAbs.top;return delta!==0&&(delta>0?"down":"up");},_getDragHorizontalDirection:function(){var delta=this.positionAbs.left-this.lastPositionAbs.left;return delta!==0&&(delta>0?"right":"left");},refresh:function(event){this._refreshItems(event);this.refreshPositions();return this;},_connectWith:function(){var options=this.options;return options.connectWith.constructor===String?[options.connectWith]:options.connectWith;},_getItemsAsjQuery:function(connected){var i,j,cur,inst,items=[],queries=[],connectWith=this._connectWith();if(connectWith&&connected){for(i=connectWith.length-1;i>=0;i--){cur=$(connectWith[i]);for(j=cur.length-1;j>=0;j--){inst=$.data(cur[j],this.widgetFullName);if(inst&&inst!==this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element):$(inst.options.items,inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),inst]);}}}}
queries.push([$.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):$(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(i=queries.length-1;i>=0;i--){queries[i][0].each(function(){items.push(this);});}
return $(items);},_removeCurrentsFromItems:function(){var list=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=$.grep(this.items,function(item){for(var j=0;j<list.length;j++){if(list[j]===item.item[0]){return false;}}
return true;});},_refreshItems:function(event){this.items=[];this.containers=[this];var i,j,cur,inst,targetData,_queries,item,queriesLength,items=this.items,queries=[[$.isFunction(this.options.items)?this.options.items.call(this.element[0],event,{item:this.currentItem}):$(this.options.items,this.element),this]],connectWith=this._connectWith();if(connectWith&&this.ready){for(i=connectWith.length-1;i>=0;i--){cur=$(connectWith[i]);for(j=cur.length-1;j>=0;j--){inst=$.data(cur[j],this.widgetFullName);if(inst&&inst!==this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element[0],event,{item:this.currentItem}):$(inst.options.items,inst.element),inst]);this.containers.push(inst);}}}}
for(i=queries.length-1;i>=0;i--){targetData=queries[i][1];_queries=queries[i][0];for(j=0,queriesLength=_queries.length;j<queriesLength;j++){item=$(_queries[j]);item.data(this.widgetName+"-item",targetData);items.push({item:item,instance:targetData,width:0,height:0,left:0,top:0});}}},refreshPositions:function(fast){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset();}
var i,item,t,p;for(i=this.items.length-1;i>=0;i--){item=this.items[i];if(item.instance!==this.currentContainer&&this.currentContainer&&item.item[0]!==this.currentItem[0]){continue;}
t=this.options.toleranceElement?$(this.options.toleranceElement,item.item):item.item;if(!fast){item.width=t.outerWidth();item.height=t.outerHeight();}
p=t.offset();item.left=p.left;item.top=p.top;}
if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this);}else{for(i=this.containers.length-1;i>=0;i--){p=this.containers[i].element.offset();this.containers[i].containerCache.left=p.left;this.containers[i].containerCache.top=p.top;this.containers[i].containerCache.width=this.containers[i].element.outerWidth();this.containers[i].containerCache.height=this.containers[i].element.outerHeight();}}
return this;},_createPlaceholder:function(that){that=that||this;var className,o=that.options;if(!o.placeholder||o.placeholder.constructor===String){className=o.placeholder;o.placeholder={element:function(){var nodeName=that.currentItem[0].nodeName.toLowerCase(),element=$(that.document[0].createElement(nodeName)).addClass(className||that.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");if(nodeName==="tr"){element.append("<td colspan='99'>&#160;</td>");}else if(nodeName==="img"){element.attr("src",that.currentItem.attr("src"));}
if(!className){element.css("visibility","hidden");}
return element;},update:function(container,p){if(className&&!o.forcePlaceholderSize){return;}
if(!p.height()){p.height(that.currentItem.innerHeight()-parseInt(that.currentItem.css("paddingTop")||0,10)-parseInt(that.currentItem.css("paddingBottom")||0,10));}
if(!p.width()){p.width(that.currentItem.innerWidth()-parseInt(that.currentItem.css("paddingLeft")||0,10)-parseInt(that.currentItem.css("paddingRight")||0,10));}}};}
that.placeholder=$(o.placeholder.element.call(that.element,that.currentItem));that.currentItem.after(that.placeholder);o.placeholder.update(that,that.placeholder);},_contactContainers:function(event){var i,j,dist,itemWithLeastDistance,posProperty,sizeProperty,base,cur,nearBottom,floating,innermostContainer=null,innermostIndex=null;for(i=this.containers.length-1;i>=0;i--){if($.contains(this.currentItem[0],this.containers[i].element[0])){continue;}
if(this._intersectsWith(this.containers[i].containerCache)){if(innermostContainer&&$.contains(this.containers[i].element[0],innermostContainer.element[0])){continue;}
innermostContainer=this.containers[i];innermostIndex=i;}else{if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",event,this._uiHash(this));this.containers[i].containerCache.over=0;}}}
if(!innermostContainer){return;}
if(this.containers.length===1){if(!this.containers[innermostIndex].containerCache.over){this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1;}}else{dist=10000;itemWithLeastDistance=null;floating=innermostContainer.floating||isFloating(this.currentItem);posProperty=floating?"left":"top";sizeProperty=floating?"width":"height";base=this.positionAbs[posProperty]+this.offset.click[posProperty];for(j=this.items.length-1;j>=0;j--){if(!$.contains(this.containers[innermostIndex].element[0],this.items[j].item[0])){continue;}
if(this.items[j].item[0]===this.currentItem[0]){continue;}
if(floating&&!isOverAxis(this.positionAbs.top+this.offset.click.top,this.items[j].top,this.items[j].height)){continue;}
cur=this.items[j].item.offset()[posProperty];nearBottom=false;if(Math.abs(cur-base)>Math.abs(cur+this.items[j][sizeProperty]-base)){nearBottom=true;cur+=this.items[j][sizeProperty];}
if(Math.abs(cur-base)<dist){dist=Math.abs(cur-base);itemWithLeastDistance=this.items[j];this.direction=nearBottom?"up":"down";}}
if(!itemWithLeastDistance&&!this.options.dropOnEmpty){return;}
if(this.currentContainer===this.containers[innermostIndex]){return;}
itemWithLeastDistance?this._rearrange(event,itemWithLeastDistance,null,true):this._rearrange(event,null,this.containers[innermostIndex].element,true);this._trigger("change",event,this._uiHash());this.containers[innermostIndex]._trigger("change",event,this._uiHash(this));this.currentContainer=this.containers[innermostIndex];this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1;}},_createHelper:function(event){var o=this.options,helper=$.isFunction(o.helper)?$(o.helper.apply(this.element[0],[event,this.currentItem])):(o.helper==="clone"?this.currentItem.clone():this.currentItem);if(!helper.parents("body").length){$(o.appendTo!=="parent"?o.appendTo:this.currentItem[0].parentNode)[0].appendChild(helper[0]);}
if(helper[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};}
if(!helper[0].style.width||o.forceHelperSize){helper.width(this.currentItem.width());}
if(!helper[0].style.height||o.forceHelperSize){helper.height(this.currentItem.height());}
return helper;},_adjustOffsetFromHelper:function(obj){if(typeof obj==="string"){obj=obj.split(" ");}
if($.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0};}
if("left"in obj){this.offset.click.left=obj.left+this.margins.left;}
if("right"in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left;}
if("top"in obj){this.offset.click.top=obj.top+this.margins.top;}
if("bottom"in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top;}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var po=this.offsetParent.offset();if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop();}
if(this.offsetParent[0]===document.body||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&$.ui.ie)){po={top:0,left:0};}
return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var p=this.currentItem.position();return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:p.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()};}else{return{top:0,left:0};}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)};},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};},_setContainment:function(){var ce,co,over,o=this.options;if(o.containment==="parent"){o.containment=this.helper[0].parentNode;}
if(o.containment==="document"||o.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,$(o.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,($(o.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];}
if(!(/^(document|window|parent)$/).test(o.containment)){ce=$(o.containment)[0];co=$(o.containment).offset();over=($(ce).css("overflow")!=="hidden");this.containment=[co.left+(parseInt($(ce).css("borderLeftWidth"),10)||0)+(parseInt($(ce).css("paddingLeft"),10)||0)-this.margins.left,co.top+(parseInt($(ce).css("borderTopWidth"),10)||0)+(parseInt($(ce).css("paddingTop"),10)||0)-this.margins.top,co.left+(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt($(ce).css("borderLeftWidth"),10)||0)-(parseInt($(ce).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,co.top+(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt($(ce).css("borderTopWidth"),10)||0)-(parseInt($(ce).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top];}},_convertPositionTo:function(d,pos){if(!pos){pos=this.position;}
var mod=d==="absolute"?1:-1,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);return{top:(pos.top+
this.offset.relative.top*mod+
this.offset.parent.top*mod-
((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop()))*mod)),left:(pos.left+
this.offset.relative.left*mod+
this.offset.parent.left*mod-
((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())*mod))};},_generatePosition:function(event){var top,left,o=this.options,pageX=event.pageX,pageY=event.pageY,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset();}
if(this.originalPosition){if(this.containment){if(event.pageX-this.offset.click.left<this.containment[0]){pageX=this.containment[0]+this.offset.click.left;}
if(event.pageY-this.offset.click.top<this.containment[1]){pageY=this.containment[1]+this.offset.click.top;}
if(event.pageX-this.offset.click.left>this.containment[2]){pageX=this.containment[2]+this.offset.click.left;}
if(event.pageY-this.offset.click.top>this.containment[3]){pageY=this.containment[3]+this.offset.click.top;}}
if(o.grid){top=this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1];pageY=this.containment?((top-this.offset.click.top>=this.containment[1]&&top-this.offset.click.top<=this.containment[3])?top:((top-this.offset.click.top>=this.containment[1])?top-o.grid[1]:top+o.grid[1])):top;left=this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0];pageX=this.containment?((left-this.offset.click.left>=this.containment[0]&&left-this.offset.click.left<=this.containment[2])?left:((left-this.offset.click.left>=this.containment[0])?left-o.grid[0]:left+o.grid[0])):left;}}
return{top:(pageY-
this.offset.click.top-
this.offset.relative.top-
this.offset.parent.top+
((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop())))),left:(pageX-
this.offset.click.left-
this.offset.relative.left-
this.offset.parent.left+
((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())))};},_rearrange:function(event,i,a,hardRefresh){a?a[0].appendChild(this.placeholder[0]):i.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction==="down"?i.item[0]:i.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var counter=this.counter;this._delay(function(){if(counter===this.counter){this.refreshPositions(!hardRefresh);}});},_clear:function(event,noPropagation){this.reverting=false;var i,delayedTriggers=[];if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem);}
this._noFinalSort=null;if(this.helper[0]===this.currentItem[0]){for(i in this._storedCSS){if(this._storedCSS[i]==="auto"||this._storedCSS[i]==="static"){this._storedCSS[i]="";}}
this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");}else{this.currentItem.show();}
if(this.fromOutside&&!noPropagation){delayedTriggers.push(function(event){this._trigger("receive",event,this._uiHash(this.fromOutside));});}
if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!noPropagation){delayedTriggers.push(function(event){this._trigger("update",event,this._uiHash());});}
if(this!==this.currentContainer){if(!noPropagation){delayedTriggers.push(function(event){this._trigger("remove",event,this._uiHash());});delayedTriggers.push((function(c){return function(event){c._trigger("receive",event,this._uiHash(this));};}).call(this,this.currentContainer));delayedTriggers.push((function(c){return function(event){c._trigger("update",event,this._uiHash(this));};}).call(this,this.currentContainer));}}
for(i=this.containers.length-1;i>=0;i--){if(!noPropagation){delayedTriggers.push((function(c){return function(event){c._trigger("deactivate",event,this._uiHash(this));};}).call(this,this.containers[i]));}
if(this.containers[i].containerCache.over){delayedTriggers.push((function(c){return function(event){c._trigger("out",event,this._uiHash(this));};}).call(this,this.containers[i]));this.containers[i].containerCache.over=0;}}
if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);this.storedStylesheet.remove();}
if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity);}
if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex);}
this.dragging=false;if(this.cancelHelperRemoval){if(!noPropagation){this._trigger("beforeStop",event,this._uiHash());for(i=0;i<delayedTriggers.length;i++){delayedTriggers[i].call(this,event);}
this._trigger("stop",event,this._uiHash());}
this.fromOutside=false;return false;}
if(!noPropagation){this._trigger("beforeStop",event,this._uiHash());}
this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.helper[0]!==this.currentItem[0]){this.helper.remove();}
this.helper=null;if(!noPropagation){for(i=0;i<delayedTriggers.length;i++){delayedTriggers[i].call(this,event);}
this._trigger("stop",event,this._uiHash());}
this.fromOutside=false;return true;},_trigger:function(){if($.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel();}},_uiHash:function(_inst){var inst=_inst||this;return{helper:inst.helper,placeholder:inst.placeholder||$([]),position:inst.position,originalPosition:inst.originalPosition,offset:inst.positionAbs,item:inst.currentItem,sender:_inst?_inst.element:null};}});})(jQuery);(function($,undefined){var dataSpace="ui-effects-";$.effects={effect:{}};(function(jQuery,undefined){var stepHooks="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",rplusequals=/^([\-+])=\s*(\d+\.?\d*)/,stringParsers=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[execResult[1],execResult[2],execResult[3],execResult[4]];}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[execResult[1]*2.55,execResult[2]*2.55,execResult[3]*2.55,execResult[4]];}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(execResult){return[parseInt(execResult[1],16),parseInt(execResult[2],16),parseInt(execResult[3],16)];}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(execResult){return[parseInt(execResult[1]+execResult[1],16),parseInt(execResult[2]+execResult[2],16),parseInt(execResult[3]+execResult[3],16)];}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(execResult){return[execResult[1],execResult[2]/100,execResult[3]/100,execResult[4]];}}],color=jQuery.Color=function(color,green,blue,alpha){return new jQuery.Color.fn.parse(color,green,blue,alpha);},spaces={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},propTypes={"byte":{floor:true,max:255},"percent":{max:1},"degrees":{mod:360,floor:true}},support=color.support={},supportElem=jQuery("<p>")[0],colors,each=jQuery.each;supportElem.style.cssText="background-color:rgba(1,1,1,.5)";support.rgba=supportElem.style.backgroundColor.indexOf("rgba")>-1;each(spaces,function(spaceName,space){space.cache="_"+spaceName;space.props.alpha={idx:3,type:"percent",def:1};});function clamp(value,prop,allowEmpty){var type=propTypes[prop.type]||{};if(value==null){return(allowEmpty||!prop.def)?null:prop.def;}
value=type.floor?~~value:parseFloat(value);if(isNaN(value)){return prop.def;}
if(type.mod){return(value+type.mod)%type.mod;}
return 0>value?0:type.max<value?type.max:value;}
function stringParse(string){var inst=color(),rgba=inst._rgba=[];string=string.toLowerCase();each(stringParsers,function(i,parser){var parsed,match=parser.re.exec(string),values=match&&parser.parse(match),spaceName=parser.space||"rgba";if(values){parsed=inst[spaceName](values);inst[spaces[spaceName].cache]=parsed[spaces[spaceName].cache];rgba=inst._rgba=parsed._rgba;return false;}});if(rgba.length){if(rgba.join()==="0,0,0,0"){jQuery.extend(rgba,colors.transparent);}
return inst;}
return colors[string];}
color.fn=jQuery.extend(color.prototype,{parse:function(red,green,blue,alpha){if(red===undefined){this._rgba=[null,null,null,null];return this;}
if(red.jquery||red.nodeType){red=jQuery(red).css(green);green=undefined;}
var inst=this,type=jQuery.type(red),rgba=this._rgba=[];if(green!==undefined){red=[red,green,blue,alpha];type="array";}
if(type==="string"){return this.parse(stringParse(red)||colors._default);}
if(type==="array"){each(spaces.rgba.props,function(key,prop){rgba[prop.idx]=clamp(red[prop.idx],prop);});return this;}
if(type==="object"){if(red instanceof color){each(spaces,function(spaceName,space){if(red[space.cache]){inst[space.cache]=red[space.cache].slice();}});}else{each(spaces,function(spaceName,space){var cache=space.cache;each(space.props,function(key,prop){if(!inst[cache]&&space.to){if(key==="alpha"||red[key]==null){return;}
inst[cache]=space.to(inst._rgba);}
inst[cache][prop.idx]=clamp(red[key],prop,true);});if(inst[cache]&&jQuery.inArray(null,inst[cache].slice(0,3))<0){inst[cache][3]=1;if(space.from){inst._rgba=space.from(inst[cache]);}}});}
return this;}},is:function(compare){var is=color(compare),same=true,inst=this;each(spaces,function(_,space){var localCache,isCache=is[space.cache];if(isCache){localCache=inst[space.cache]||space.to&&space.to(inst._rgba)||[];each(space.props,function(_,prop){if(isCache[prop.idx]!=null){same=(isCache[prop.idx]===localCache[prop.idx]);return same;}});}
return same;});return same;},_space:function(){var used=[],inst=this;each(spaces,function(spaceName,space){if(inst[space.cache]){used.push(spaceName);}});return used.pop();},transition:function(other,distance){var end=color(other),spaceName=end._space(),space=spaces[spaceName],startColor=this.alpha()===0?color("transparent"):this,start=startColor[space.cache]||space.to(startColor._rgba),result=start.slice();end=end[space.cache];each(space.props,function(key,prop){var index=prop.idx,startValue=start[index],endValue=end[index],type=propTypes[prop.type]||{};if(endValue===null){return;}
if(startValue===null){result[index]=endValue;}else{if(type.mod){if(endValue-startValue>type.mod/2){startValue+=type.mod;}else if(startValue-endValue>type.mod/2){startValue-=type.mod;}}
result[index]=clamp((endValue-startValue)*distance+startValue,prop);}});return this[spaceName](result);},blend:function(opaque){if(this._rgba[3]===1){return this;}
var rgb=this._rgba.slice(),a=rgb.pop(),blend=color(opaque)._rgba;return color(jQuery.map(rgb,function(v,i){return(1-a)*blend[i]+a*v;}));},toRgbaString:function(){var prefix="rgba(",rgba=jQuery.map(this._rgba,function(v,i){return v==null?(i>2?1:0):v;});if(rgba[3]===1){rgba.pop();prefix="rgb(";}
return prefix+rgba.join()+")";},toHslaString:function(){var prefix="hsla(",hsla=jQuery.map(this.hsla(),function(v,i){if(v==null){v=i>2?1:0;}
if(i&&i<3){v=Math.round(v*100)+"%";}
return v;});if(hsla[3]===1){hsla.pop();prefix="hsl(";}
return prefix+hsla.join()+")";},toHexString:function(includeAlpha){var rgba=this._rgba.slice(),alpha=rgba.pop();if(includeAlpha){rgba.push(~~(alpha*255));}
return"#"+jQuery.map(rgba,function(v){v=(v||0).toString(16);return v.length===1?"0"+v:v;}).join("");},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString();}});color.fn.parse.prototype=color.fn;function hue2rgb(p,q,h){h=(h+1)%1;if(h*6<1){return p+(q-p)*h*6;}
if(h*2<1){return q;}
if(h*3<2){return p+(q-p)*((2/3)-h)*6;}
return p;}
spaces.hsla.to=function(rgba){if(rgba[0]==null||rgba[1]==null||rgba[2]==null){return[null,null,null,rgba[3]];}
var r=rgba[0]/255,g=rgba[1]/255,b=rgba[2]/255,a=rgba[3],max=Math.max(r,g,b),min=Math.min(r,g,b),diff=max-min,add=max+min,l=add*0.5,h,s;if(min===max){h=0;}else if(r===max){h=(60*(g-b)/diff)+360;}else if(g===max){h=(60*(b-r)/diff)+120;}else{h=(60*(r-g)/diff)+240;}
if(diff===0){s=0;}else if(l<=0.5){s=diff/add;}else{s=diff/(2-add);}
return[Math.round(h)%360,s,l,a==null?1:a];};spaces.hsla.from=function(hsla){if(hsla[0]==null||hsla[1]==null||hsla[2]==null){return[null,null,null,hsla[3]];}
var h=hsla[0]/360,s=hsla[1],l=hsla[2],a=hsla[3],q=l<=0.5?l*(1+s):l+s-l*s,p=2*l-q;return[Math.round(hue2rgb(p,q,h+(1/3))*255),Math.round(hue2rgb(p,q,h)*255),Math.round(hue2rgb(p,q,h-(1/3))*255),a];};each(spaces,function(spaceName,space){var props=space.props,cache=space.cache,to=space.to,from=space.from;color.fn[spaceName]=function(value){if(to&&!this[cache]){this[cache]=to(this._rgba);}
if(value===undefined){return this[cache].slice();}
var ret,type=jQuery.type(value),arr=(type==="array"||type==="object")?value:arguments,local=this[cache].slice();each(props,function(key,prop){var val=arr[type==="object"?key:prop.idx];if(val==null){val=local[prop.idx];}
local[prop.idx]=clamp(val,prop);});if(from){ret=color(from(local));ret[cache]=local;return ret;}else{return color(local);}};each(props,function(key,prop){if(color.fn[key]){return;}
color.fn[key]=function(value){var vtype=jQuery.type(value),fn=(key==="alpha"?(this._hsla?"hsla":"rgba"):spaceName),local=this[fn](),cur=local[prop.idx],match;if(vtype==="undefined"){return cur;}
if(vtype==="function"){value=value.call(this,cur);vtype=jQuery.type(value);}
if(value==null&&prop.empty){return this;}
if(vtype==="string"){match=rplusequals.exec(value);if(match){value=cur+parseFloat(match[2])*(match[1]==="+"?1:-1);}}
local[prop.idx]=value;return this[fn](local);};});});color.hook=function(hook){var hooks=hook.split(" ");each(hooks,function(i,hook){jQuery.cssHooks[hook]={set:function(elem,value){var parsed,curElem,backgroundColor="";if(value!=="transparent"&&(jQuery.type(value)!=="string"||(parsed=stringParse(value)))){value=color(parsed||value);if(!support.rgba&&value._rgba[3]!==1){curElem=hook==="backgroundColor"?elem.parentNode:elem;while((backgroundColor===""||backgroundColor==="transparent")&&curElem&&curElem.style){try{backgroundColor=jQuery.css(curElem,"backgroundColor");curElem=curElem.parentNode;}catch(e){}}
value=value.blend(backgroundColor&&backgroundColor!=="transparent"?backgroundColor:"_default");}
value=value.toRgbaString();}
try{elem.style[hook]=value;}catch(e){}}};jQuery.fx.step[hook]=function(fx){if(!fx.colorInit){fx.start=color(fx.elem,hook);fx.end=color(fx.end);fx.colorInit=true;}
jQuery.cssHooks[hook].set(fx.elem,fx.start.transition(fx.end,fx.pos));};});};color.hook(stepHooks);jQuery.cssHooks.borderColor={expand:function(value){var expanded={};each(["Top","Right","Bottom","Left"],function(i,part){expanded["border"+part+"Color"]=value;});return expanded;}};colors=jQuery.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"};})(jQuery);(function(){var classAnimationActions=["add","remove","toggle"],shorthandStyles={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};$.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(_,prop){$.fx.step[prop]=function(fx){if(fx.end!=="none"&&!fx.setAttr||fx.pos===1&&!fx.setAttr){jQuery.style(fx.elem,prop,fx.end);fx.setAttr=true;}};});function getElementStyles(elem){var key,len,style=elem.ownerDocument.defaultView?elem.ownerDocument.defaultView.getComputedStyle(elem,null):elem.currentStyle,styles={};if(style&&style.length&&style[0]&&style[style[0]]){len=style.length;while(len--){key=style[len];if(typeof style[key]==="string"){styles[$.camelCase(key)]=style[key];}}}else{for(key in style){if(typeof style[key]==="string"){styles[key]=style[key];}}}
return styles;}
function styleDifference(oldStyle,newStyle){var diff={},name,value;for(name in newStyle){value=newStyle[name];if(oldStyle[name]!==value){if(!shorthandStyles[name]){if($.fx.step[name]||!isNaN(parseFloat(value))){diff[name]=value;}}}}
return diff;}
if(!$.fn.addBack){$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));};}
$.effects.animateClass=function(value,duration,easing,callback){var o=$.speed(duration,easing,callback);return this.queue(function(){var animated=$(this),baseClass=animated.attr("class")||"",applyClassChange,allAnimations=o.children?animated.find("*").addBack():animated;allAnimations=allAnimations.map(function(){var el=$(this);return{el:el,start:getElementStyles(this)};});applyClassChange=function(){$.each(classAnimationActions,function(i,action){if(value[action]){animated[action+"Class"](value[action]);}});};applyClassChange();allAnimations=allAnimations.map(function(){this.end=getElementStyles(this.el[0]);this.diff=styleDifference(this.start,this.end);return this;});animated.attr("class",baseClass);allAnimations=allAnimations.map(function(){var styleInfo=this,dfd=$.Deferred(),opts=$.extend({},o,{queue:false,complete:function(){dfd.resolve(styleInfo);}});this.el.animate(this.diff,opts);return dfd.promise();});$.when.apply($,allAnimations.get()).done(function(){applyClassChange();$.each(arguments,function(){var el=this.el;$.each(this.diff,function(key){el.css(key,"");});});o.complete.call(animated[0]);});});};$.fn.extend({addClass:(function(orig){return function(classNames,speed,easing,callback){return speed?$.effects.animateClass.call(this,{add:classNames},speed,easing,callback):orig.apply(this,arguments);};})($.fn.addClass),removeClass:(function(orig){return function(classNames,speed,easing,callback){return arguments.length>1?$.effects.animateClass.call(this,{remove:classNames},speed,easing,callback):orig.apply(this,arguments);};})($.fn.removeClass),toggleClass:(function(orig){return function(classNames,force,speed,easing,callback){if(typeof force==="boolean"||force===undefined){if(!speed){return orig.apply(this,arguments);}else{return $.effects.animateClass.call(this,(force?{add:classNames}:{remove:classNames}),speed,easing,callback);}}else{return $.effects.animateClass.call(this,{toggle:classNames},force,speed,easing);}};})($.fn.toggleClass),switchClass:function(remove,add,speed,easing,callback){return $.effects.animateClass.call(this,{add:add,remove:remove},speed,easing,callback);}});})();(function(){$.extend($.effects,{version:"1.10.2",save:function(element,set){for(var i=0;i<set.length;i++){if(set[i]!==null){element.data(dataSpace+set[i],element[0].style[set[i]]);}}},restore:function(element,set){var val,i;for(i=0;i<set.length;i++){if(set[i]!==null){val=element.data(dataSpace+set[i]);if(val===undefined){val="";}
element.css(set[i],val);}}},setMode:function(el,mode){if(mode==="toggle"){mode=el.is(":hidden")?"show":"hide";}
return mode;},getBaseline:function(origin,original){var y,x;switch(origin[0]){case"top":y=0;break;case"middle":y=0.5;break;case"bottom":y=1;break;default:y=origin[0]/original.height;}
switch(origin[1]){case"left":x=0;break;case"center":x=0.5;break;case"right":x=1;break;default:x=origin[1]/original.width;}
return{x:x,y:y};},createWrapper:function(element){if(element.parent().is(".ui-effects-wrapper")){return element.parent();}
var props={width:element.outerWidth(true),height:element.outerHeight(true),"float":element.css("float")},wrapper=$("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),size={width:element.width(),height:element.height()},active=document.activeElement;try{active.id;}catch(e){active=document.body;}
element.wrap(wrapper);if(element[0]===active||$.contains(element[0],active)){$(active).focus();}
wrapper=element.parent();if(element.css("position")==="static"){wrapper.css({position:"relative"});element.css({position:"relative"});}else{$.extend(props,{position:element.css("position"),zIndex:element.css("z-index")});$.each(["top","left","bottom","right"],function(i,pos){props[pos]=element.css(pos);if(isNaN(parseInt(props[pos],10))){props[pos]="auto";}});element.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"});}
element.css(size);return wrapper.css(props).show();},removeWrapper:function(element){var active=document.activeElement;if(element.parent().is(".ui-effects-wrapper")){element.parent().replaceWith(element);if(element[0]===active||$.contains(element[0],active)){$(active).focus();}}
return element;},setTransition:function(element,list,factor,value){value=value||{};$.each(list,function(i,x){var unit=element.cssUnit(x);if(unit[0]>0){value[x]=unit[0]*factor+unit[1];}});return value;}});function _normalizeArguments(effect,options,speed,callback){if($.isPlainObject(effect)){options=effect;effect=effect.effect;}
effect={effect:effect};if(options==null){options={};}
if($.isFunction(options)){callback=options;speed=null;options={};}
if(typeof options==="number"||$.fx.speeds[options]){callback=speed;speed=options;options={};}
if($.isFunction(speed)){callback=speed;speed=null;}
if(options){$.extend(effect,options);}
speed=speed||options.duration;effect.duration=$.fx.off?0:typeof speed==="number"?speed:speed in $.fx.speeds?$.fx.speeds[speed]:$.fx.speeds._default;effect.complete=callback||options.complete;return effect;}
function standardAnimationOption(option){if(!option||typeof option==="number"||$.fx.speeds[option]){return true;}
if(typeof option==="string"&&!$.effects.effect[option]){return true;}
if($.isFunction(option)){return true;}
if(typeof option==="object"&&!option.effect){return true;}
return false;}
$.fn.extend({effect:function(){var args=_normalizeArguments.apply(this,arguments),mode=args.mode,queue=args.queue,effectMethod=$.effects.effect[args.effect];if($.fx.off||!effectMethod){if(mode){return this[mode](args.duration,args.complete);}else{return this.each(function(){if(args.complete){args.complete.call(this);}});}}
function run(next){var elem=$(this),complete=args.complete,mode=args.mode;function done(){if($.isFunction(complete)){complete.call(elem[0]);}
if($.isFunction(next)){next();}}
if(elem.is(":hidden")?mode==="hide":mode==="show"){elem[mode]();done();}else{effectMethod.call(elem[0],args,done);}}
return queue===false?this.each(run):this.queue(queue||"fx",run);},show:(function(orig){return function(option){if(standardAnimationOption(option)){return orig.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args.mode="show";return this.effect.call(this,args);}};})($.fn.show),hide:(function(orig){return function(option){if(standardAnimationOption(option)){return orig.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args.mode="hide";return this.effect.call(this,args);}};})($.fn.hide),toggle:(function(orig){return function(option){if(standardAnimationOption(option)||typeof option==="boolean"){return orig.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args.mode="toggle";return this.effect.call(this,args);}};})($.fn.toggle),cssUnit:function(key){var style=this.css(key),val=[];$.each(["em","px","%","pt"],function(i,unit){if(style.indexOf(unit)>0){val=[parseFloat(style),unit];}});return val;}});})();(function(){var baseEasings={};$.each(["Quad","Cubic","Quart","Quint","Expo"],function(i,name){baseEasings[name]=function(p){return Math.pow(p,i+2);};});$.extend(baseEasings,{Sine:function(p){return 1-Math.cos(p*Math.PI/2);},Circ:function(p){return 1-Math.sqrt(1-p*p);},Elastic:function(p){return p===0||p===1?p:-Math.pow(2,8*(p-1))*Math.sin(((p-1)*80-7.5)*Math.PI/15);},Back:function(p){return p*p*(3*p-2);},Bounce:function(p){var pow2,bounce=4;while(p<((pow2=Math.pow(2,--bounce))-1)/11){}
return 1/Math.pow(4,3-bounce)-7.5625*Math.pow((pow2*3-2)/22-p,2);}});$.each(baseEasings,function(name,easeIn){$.easing["easeIn"+name]=easeIn;$.easing["easeOut"+name]=function(p){return 1-easeIn(1-p);};$.easing["easeInOut"+name]=function(p){return p<0.5?easeIn(p*2)/2:1-easeIn(p*-2+2)/2;};});})();})(jQuery);(function($,undefined){var uid=0,hideProps={},showProps={};hideProps.height=hideProps.paddingTop=hideProps.paddingBottom=hideProps.borderTopWidth=hideProps.borderBottomWidth="hide";showProps.height=showProps.paddingTop=showProps.paddingBottom=showProps.borderTopWidth=showProps.borderBottomWidth="show";$.widget("ui.accordion",{version:"1.10.2",options:{active:0,animate:{},collapsible:false,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var options=this.options;this.prevShow=this.prevHide=$();this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist");if(!options.collapsible&&(options.active===false||options.active==null)){options.active=0;}
this._processPanels();if(options.active<0){options.active+=this.headers.length;}
this._refresh();},_getCreateEventData:function(){return{header:this.active,panel:!this.active.length?$():this.active.next(),content:!this.active.length?$():this.active.next()};},_createIcons:function(){var icons=this.options.icons;if(icons){$("<span>").addClass("ui-accordion-header-icon ui-icon "+icons.header).prependTo(this.headers);this.active.children(".ui-accordion-header-icon").removeClass(icons.header).addClass(icons.activeHeader);this.headers.addClass("ui-accordion-icons");}},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove();},_destroy:function(){var contents;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id");}});this._destroyIcons();contents=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id");}});if(this.options.heightStyle!=="content"){contents.css("height","");}},_setOption:function(key,value){if(key==="active"){this._activate(value);return;}
if(key==="event"){if(this.options.event){this._off(this.headers,this.options.event);}
this._setupEvents(value);}
this._super(key,value);if(key==="collapsible"&&!value&&this.options.active===false){this._activate(0);}
if(key==="icons"){this._destroyIcons();if(value){this._createIcons();}}
if(key==="disabled"){this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!value);}},_keydown:function(event){if(event.altKey||event.ctrlKey){return;}
var keyCode=$.ui.keyCode,length=this.headers.length,currentIndex=this.headers.index(event.target),toFocus=false;switch(event.keyCode){case keyCode.RIGHT:case keyCode.DOWN:toFocus=this.headers[(currentIndex+1)%length];break;case keyCode.LEFT:case keyCode.UP:toFocus=this.headers[(currentIndex-1+length)%length];break;case keyCode.SPACE:case keyCode.ENTER:this._eventHandler(event);break;case keyCode.HOME:toFocus=this.headers[0];break;case keyCode.END:toFocus=this.headers[length-1];break;}
if(toFocus){$(event.target).attr("tabIndex",-1);$(toFocus).attr("tabIndex",0);toFocus.focus();event.preventDefault();}},_panelKeyDown:function(event){if(event.keyCode===$.ui.keyCode.UP&&event.ctrlKey){$(event.currentTarget).prev().focus();}},refresh:function(){var options=this.options;this._processPanels();if((options.active===false&&options.collapsible===true)||!this.headers.length){options.active=false;this.active=$();}if(options.active===false){this._activate(0);}else if(this.active.length&&!$.contains(this.element[0],this.active[0])){if(this.headers.length===this.headers.find(".ui-state-disabled").length){options.active=false;this.active=$();}else{this._activate(Math.max(0,options.active-1));}}else{options.active=this.headers.index(this.active);}
this._destroyIcons();this._refresh();},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();},_refresh:function(){var maxHeight,options=this.options,heightStyle=options.heightStyle,parent=this.element.parent(),accordionId=this.accordionId="ui-accordion-"+
(this.element.attr("id")||++uid);this.active=this._findActive(options.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");this.active.next().addClass("ui-accordion-content-active").show();this.headers.attr("role","tab").each(function(i){var header=$(this),headerId=header.attr("id"),panel=header.next(),panelId=panel.attr("id");if(!headerId){headerId=accordionId+"-header-"+i;header.attr("id",headerId);}
if(!panelId){panelId=accordionId+"-panel-"+i;panel.attr("id",panelId);}
header.attr("aria-controls",panelId);panel.attr("aria-labelledby",headerId);}).next().attr("role","tabpanel");this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide();if(!this.active.length){this.headers.eq(0).attr("tabIndex",0);}else{this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"});}
this._createIcons();this._setupEvents(options.event);if(heightStyle==="fill"){maxHeight=parent.height();this.element.siblings(":visible").each(function(){var elem=$(this),position=elem.css("position");if(position==="absolute"||position==="fixed"){return;}
maxHeight-=elem.outerHeight(true);});this.headers.each(function(){maxHeight-=$(this).outerHeight(true);});this.headers.next().each(function(){$(this).height(Math.max(0,maxHeight-
$(this).innerHeight()+$(this).height()));}).css("overflow","auto");}else if(heightStyle==="auto"){maxHeight=0;this.headers.next().each(function(){maxHeight=Math.max(maxHeight,$(this).css("height","").height());}).height(maxHeight);}},_activate:function(index){var active=this._findActive(index)[0];if(active===this.active[0]){return;}
active=active||this.active[0];this._eventHandler({target:active,currentTarget:active,preventDefault:$.noop});},_findActive:function(selector){return typeof selector==="number"?this.headers.eq(selector):$();},_setupEvents:function(event){var events={keydown:"_keydown"};if(event){$.each(event.split(" "),function(index,eventName){events[eventName]="_eventHandler";});}
this._off(this.headers.add(this.headers.next()));this._on(this.headers,events);this._on(this.headers.next(),{keydown:"_panelKeyDown"});this._hoverable(this.headers);this._focusable(this.headers);},_eventHandler:function(event){var options=this.options,active=this.active,clicked=$(event.currentTarget),clickedIsActive=clicked[0]===active[0],collapsing=clickedIsActive&&options.collapsible,toShow=collapsing?$():clicked.next(),toHide=active.next(),eventData={oldHeader:active,oldPanel:toHide,newHeader:collapsing?$():clicked,newPanel:toShow};event.preventDefault();if((clickedIsActive&&!options.collapsible)||(this._trigger("beforeActivate",event,eventData)===false)){return;}
options.active=collapsing?false:this.headers.index(clicked);this.active=clickedIsActive?$():clicked;this._toggle(eventData);active.removeClass("ui-accordion-header-active ui-state-active");if(options.icons){active.children(".ui-accordion-header-icon").removeClass(options.icons.activeHeader).addClass(options.icons.header);}
if(!clickedIsActive){clicked.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");if(options.icons){clicked.children(".ui-accordion-header-icon").removeClass(options.icons.header).addClass(options.icons.activeHeader);}
clicked.next().addClass("ui-accordion-content-active");}},_toggle:function(data){var toShow=data.newPanel,toHide=this.prevShow.length?this.prevShow:data.oldPanel;this.prevShow.add(this.prevHide).stop(true,true);this.prevShow=toShow;this.prevHide=toHide;if(this.options.animate){this._animate(toShow,toHide,data);}else{toHide.hide();toShow.show();this._toggleComplete(data);}
toHide.attr({"aria-expanded":"false","aria-hidden":"true"});toHide.prev().attr("aria-selected","false");if(toShow.length&&toHide.length){toHide.prev().attr("tabIndex",-1);}else if(toShow.length){this.headers.filter(function(){return $(this).attr("tabIndex")===0;}).attr("tabIndex",-1);}
toShow.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0});},_animate:function(toShow,toHide,data){var total,easing,duration,that=this,adjust=0,down=toShow.length&&(!toHide.length||(toShow.index()<toHide.index())),animate=this.options.animate||{},options=down&&animate.down||animate,complete=function(){that._toggleComplete(data);};if(typeof options==="number"){duration=options;}
if(typeof options==="string"){easing=options;}
easing=easing||options.easing||animate.easing;duration=duration||options.duration||animate.duration;if(!toHide.length){return toShow.animate(showProps,duration,easing,complete);}
if(!toShow.length){return toHide.animate(hideProps,duration,easing,complete);}
total=toShow.show().outerHeight();toHide.animate(hideProps,{duration:duration,easing:easing,step:function(now,fx){fx.now=Math.round(now);}});toShow.hide().animate(showProps,{duration:duration,easing:easing,complete:complete,step:function(now,fx){fx.now=Math.round(now);if(fx.prop!=="height"){adjust+=fx.now;}else if(that.options.heightStyle!=="content"){fx.now=Math.round(total-toHide.outerHeight()-adjust);adjust=0;}}});},_toggleComplete:function(data){var toHide=data.oldPanel;toHide.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");if(toHide.length){toHide.parent()[0].className=toHide.parent()[0].className;}
this._trigger("activate",null,data);}});})(jQuery);(function($,undefined){var requestIndex=0;$.widget("ui.autocomplete",{version:"1.10.2",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var suppressKeyPress,suppressKeyPressRepeat,suppressInput,nodeName=this.element[0].nodeName.toLowerCase(),isTextarea=nodeName==="textarea",isInput=nodeName==="input";this.isMultiLine=isTextarea?true:isInput?false:this.element.prop("isContentEditable");this.valueMethod=this.element[isTextarea||isInput?"val":"text"];this.isNewMenu=true;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");this._on(this.element,{keydown:function(event){if(this.element.prop("readOnly")){suppressKeyPress=true;suppressInput=true;suppressKeyPressRepeat=true;return;}
suppressKeyPress=false;suppressInput=false;suppressKeyPressRepeat=false;var keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.PAGE_UP:suppressKeyPress=true;this._move("previousPage",event);break;case keyCode.PAGE_DOWN:suppressKeyPress=true;this._move("nextPage",event);break;case keyCode.UP:suppressKeyPress=true;this._keyEvent("previous",event);break;case keyCode.DOWN:suppressKeyPress=true;this._keyEvent("next",event);break;case keyCode.ENTER:case keyCode.NUMPAD_ENTER:if(this.menu.active){suppressKeyPress=true;event.preventDefault();this.menu.select(event);}
break;case keyCode.TAB:if(this.menu.active){this.menu.select(event);}
break;case keyCode.ESCAPE:if(this.menu.element.is(":visible")){this._value(this.term);this.close(event);event.preventDefault();}
break;default:suppressKeyPressRepeat=true;this._searchTimeout(event);break;}},keypress:function(event){if(suppressKeyPress){suppressKeyPress=false;event.preventDefault();return;}
if(suppressKeyPressRepeat){return;}
var keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.PAGE_UP:this._move("previousPage",event);break;case keyCode.PAGE_DOWN:this._move("nextPage",event);break;case keyCode.UP:this._keyEvent("previous",event);break;case keyCode.DOWN:this._keyEvent("next",event);break;}},input:function(event){if(suppressInput){suppressInput=false;event.preventDefault();return;}
this._searchTimeout(event);},focus:function(){this.selectedItem=null;this.previous=this._value();},blur:function(event){if(this.cancelBlur){delete this.cancelBlur;return;}
clearTimeout(this.searching);this.close(event);this._change(event);}});this._initSource();this.menu=$("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({input:$(),role:null}).hide().data("ui-menu");this._on(this.menu.element,{mousedown:function(event){event.preventDefault();this.cancelBlur=true;this._delay(function(){delete this.cancelBlur;});var menuElement=this.menu.element[0];if(!$(event.target).closest(".ui-menu-item").length){this._delay(function(){var that=this;this.document.one("mousedown",function(event){if(event.target!==that.element[0]&&event.target!==menuElement&&!$.contains(menuElement,event.target)){that.close();}});});}},menufocus:function(event,ui){if(this.isNewMenu){this.isNewMenu=false;if(event.originalEvent&&/^mouse/.test(event.originalEvent.type)){this.menu.blur();this.document.one("mousemove",function(){$(event.target).trigger(event.originalEvent);});return;}}
var item=ui.item.data("ui-autocomplete-item");if(false!==this._trigger("focus",event,{item:item})){if(event.originalEvent&&/^key/.test(event.originalEvent.type)){this._value(item.value);}}else{this.liveRegion.text(item.value);}},menuselect:function(event,ui){var item=ui.item.data("ui-autocomplete-item"),previous=this.previous;if(this.element[0]!==this.document[0].activeElement){this.element.focus();this.previous=previous;this._delay(function(){this.previous=previous;this.selectedItem=item;});}
if(false!==this._trigger("select",event,{item:item})){this._value(item.value);}
this.term=this._value();this.close(event);this.selectedItem=item;}});this.liveRegion=$("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element);this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete");}});},_destroy:function(){clearTimeout(this.searching);this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");this.menu.element.remove();this.liveRegion.remove();},_setOption:function(key,value){this._super(key,value);if(key==="source"){this._initSource();}
if(key==="appendTo"){this.menu.element.appendTo(this._appendTo());}
if(key==="disabled"&&value&&this.xhr){this.xhr.abort();}},_appendTo:function(){var element=this.options.appendTo;if(element){element=element.jquery||element.nodeType?$(element):this.document.find(element).eq(0);}
if(!element){element=this.element.closest(".ui-front");}
if(!element.length){element=this.document[0].body;}
return element;},_initSource:function(){var array,url,that=this;if($.isArray(this.options.source)){array=this.options.source;this.source=function(request,response){response($.ui.autocomplete.filter(array,request.term));};}else if(typeof this.options.source==="string"){url=this.options.source;this.source=function(request,response){if(that.xhr){that.xhr.abort();}
that.xhr=$.ajax({url:url,data:request,dataType:"json",success:function(data){response(data);},error:function(){response([]);}});};}else{this.source=this.options.source;}},_searchTimeout:function(event){clearTimeout(this.searching);this.searching=this._delay(function(){if(this.term!==this._value()){this.selectedItem=null;this.search(null,event);}},this.options.delay);},search:function(value,event){value=value!=null?value:this._value();this.term=this._value();if(value.length<this.options.minLength){return this.close(event);}
if(this._trigger("search",event)===false){return;}
return this._search(value);},_search:function(value){this.pending++;this.element.addClass("ui-autocomplete-loading");this.cancelSearch=false;this.source({term:value},this._response());},_response:function(){var that=this,index=++requestIndex;return function(content){if(index===requestIndex){that.__response(content);}
that.pending--;if(!that.pending){that.element.removeClass("ui-autocomplete-loading");}};},__response:function(content){if(content){content=this._normalize(content);}
this._trigger("response",null,{content:content});if(!this.options.disabled&&content&&content.length&&!this.cancelSearch){this._suggest(content);this._trigger("open");}else{this._close();}},close:function(event){this.cancelSearch=true;this._close(event);},_close:function(event){if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.blur();this.isNewMenu=true;this._trigger("close",event);}},_change:function(event){if(this.previous!==this._value()){this._trigger("change",event,{item:this.selectedItem});}},_normalize:function(items){if(items.length&&items[0].label&&items[0].value){return items;}
return $.map(items,function(item){if(typeof item==="string"){return{label:item,value:item};}
return $.extend({label:item.label||item.value,value:item.value||item.label},item);});},_suggest:function(items){var ul=this.menu.element.empty();this._renderMenu(ul,items);this.isNewMenu=true;this.menu.refresh();ul.show();this._resizeMenu();ul.position($.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next();}},_resizeMenu:function(){var ul=this.menu.element;ul.outerWidth(Math.max(ul.width("").outerWidth()+1,this.element.outerWidth()));},_renderMenu:function(ul,items){var that=this;$.each(items,function(index,item){that._renderItemData(ul,item);});},_renderItemData:function(ul,item){return this._renderItem(ul,item).data("ui-autocomplete-item",item);},_renderItem:function(ul,item){return $("<li>").append($("<a>").text(item.label)).appendTo(ul);},_move:function(direction,event){if(!this.menu.element.is(":visible")){this.search(null,event);return;}
if(this.menu.isFirstItem()&&/^previous/.test(direction)||this.menu.isLastItem()&&/^next/.test(direction)){this._value(this.term);this.menu.blur();return;}
this.menu[direction](event);},widget:function(){return this.menu.element;},_value:function(){return this.valueMethod.apply(this.element,arguments);},_keyEvent:function(keyEvent,event){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(keyEvent,event);event.preventDefault();}}});$.extend($.ui.autocomplete,{escapeRegex:function(value){return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");},filter:function(array,term){var matcher=new RegExp($.ui.autocomplete.escapeRegex(term),"i");return $.grep(array,function(value){return matcher.test(value.label||value.value||value);});}});$.widget("ui.autocomplete",$.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(amount){return amount+(amount>1?" results are":" result is")+" available, use up and down arrow keys to navigate.";}}},__response:function(content){var message;this._superApply(arguments);if(this.options.disabled||this.cancelSearch){return;}
if(content&&content.length){message=this.options.messages.results(content.length);}else{message=this.options.messages.noResults;}
this.liveRegion.text(message);}});}(jQuery));(function($,undefined){var lastActive,startXPos,startYPos,clickDragged,baseClasses="ui-button ui-widget ui-state-default ui-corner-all",stateClasses="ui-state-hover ui-state-active ",typeClasses="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",formResetHandler=function(){var buttons=$(this).find(":ui-button");setTimeout(function(){buttons.button("refresh");},1);},radioGroup=function(radio){var name=radio.name,form=radio.form,radios=$([]);if(name){name=name.replace(/'/g,"\\'");if(form){radios=$(form).find("[name='"+name+"']");}else{radios=$("[name='"+name+"']",radio.ownerDocument).filter(function(){return!this.form;});}}
return radios;};$.widget("ui.button",{version:"1.10.2",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,formResetHandler);if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled");}else{this.element.prop("disabled",this.options.disabled);}
this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var that=this,options=this.options,toggleButton=this.type==="checkbox"||this.type==="radio",activeClass=!toggleButton?"ui-state-active":"",focusClass="ui-state-focus";if(options.label===null){options.label=(this.type==="input"?this.buttonElement.val():this.buttonElement.html());}
this._hoverable(this.buttonElement);this.buttonElement.addClass(baseClasses).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(options.disabled){return;}
if(this===lastActive){$(this).addClass("ui-state-active");}}).bind("mouseleave"+this.eventNamespace,function(){if(options.disabled){return;}
$(this).removeClass(activeClass);}).bind("click"+this.eventNamespace,function(event){if(options.disabled){event.preventDefault();event.stopImmediatePropagation();}});this.element.bind("focus"+this.eventNamespace,function(){that.buttonElement.addClass(focusClass);}).bind("blur"+this.eventNamespace,function(){that.buttonElement.removeClass(focusClass);});if(toggleButton){this.element.bind("change"+this.eventNamespace,function(){if(clickDragged){return;}
that.refresh();});this.buttonElement.bind("mousedown"+this.eventNamespace,function(event){if(options.disabled){return;}
clickDragged=false;startXPos=event.pageX;startYPos=event.pageY;}).bind("mouseup"+this.eventNamespace,function(event){if(options.disabled){return;}
if(startXPos!==event.pageX||startYPos!==event.pageY){clickDragged=true;}});}
if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(options.disabled||clickDragged){return false;}});}else if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(options.disabled||clickDragged){return false;}
$(this).addClass("ui-state-active");that.buttonElement.attr("aria-pressed","true");var radio=that.element[0];radioGroup(radio).not(radio).map(function(){return $(this).button("widget")[0];}).removeClass("ui-state-active").attr("aria-pressed","false");});}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(options.disabled){return false;}
$(this).addClass("ui-state-active");lastActive=this;that.document.one("mouseup",function(){lastActive=null;});}).bind("mouseup"+this.eventNamespace,function(){if(options.disabled){return false;}
$(this).removeClass("ui-state-active");}).bind("keydown"+this.eventNamespace,function(event){if(options.disabled){return false;}
if(event.keyCode===$.ui.keyCode.SPACE||event.keyCode===$.ui.keyCode.ENTER){$(this).addClass("ui-state-active");}}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){$(this).removeClass("ui-state-active");});if(this.buttonElement.is("a")){this.buttonElement.keyup(function(event){if(event.keyCode===$.ui.keyCode.SPACE){$(this).click();}});}}
this._setOption("disabled",options.disabled);this._resetButton();},_determineButtonType:function(){var ancestor,labelSelector,checked;if(this.element.is("[type=checkbox]")){this.type="checkbox";}else if(this.element.is("[type=radio]")){this.type="radio";}else if(this.element.is("input")){this.type="input";}else{this.type="button";}
if(this.type==="checkbox"||this.type==="radio"){ancestor=this.element.parents().last();labelSelector="label[for='"+this.element.attr("id")+"']";this.buttonElement=ancestor.find(labelSelector);if(!this.buttonElement.length){ancestor=ancestor.length?ancestor.siblings():this.element.siblings();this.buttonElement=ancestor.filter(labelSelector);if(!this.buttonElement.length){this.buttonElement=ancestor.find(labelSelector);}}
this.element.addClass("ui-helper-hidden-accessible");checked=this.element.is(":checked");if(checked){this.buttonElement.addClass("ui-state-active");}
this.buttonElement.prop("aria-pressed",checked);}else{this.buttonElement=this.element;}},widget:function(){return this.buttonElement;},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass(baseClasses+" "+stateClasses+" "+typeClasses).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());if(!this.hasTitle){this.buttonElement.removeAttr("title");}},_setOption:function(key,value){this._super(key,value);if(key==="disabled"){if(value){this.element.prop("disabled",true);}else{this.element.prop("disabled",false);}
return;}
this._resetButton();},refresh:function(){var isDisabled=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");if(isDisabled!==this.options.disabled){this._setOption("disabled",isDisabled);}
if(this.type==="radio"){radioGroup(this.element[0]).each(function(){if($(this).is(":checked")){$(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true");}else{$(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false");}});}else if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true");}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false");}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label);}
return;}
var buttonElement=this.buttonElement.removeClass(typeClasses),buttonText=$("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(buttonElement.empty()).text(),icons=this.options.icons,multipleIcons=icons.primary&&icons.secondary,buttonClasses=[];if(icons.primary||icons.secondary){if(this.options.text){buttonClasses.push("ui-button-text-icon"+(multipleIcons?"s":(icons.primary?"-primary":"-secondary")));}
if(icons.primary){buttonElement.prepend("<span class='ui-button-icon-primary ui-icon "+icons.primary+"'></span>");}
if(icons.secondary){buttonElement.append("<span class='ui-button-icon-secondary ui-icon "+icons.secondary+"'></span>");}
if(!this.options.text){buttonClasses.push(multipleIcons?"ui-button-icons-only":"ui-button-icon-only");if(!this.hasTitle){buttonElement.attr("title",$.trim(buttonText));}}}else{buttonClasses.push("ui-button-text-only");}
buttonElement.addClass(buttonClasses.join(" "));}});$.widget("ui.buttonset",{version:"1.10.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset");},_init:function(){this.refresh();},_setOption:function(key,value){if(key==="disabled"){this.buttons.button("option",key,value);}
this._super(key,value);},refresh:function(){var rtl=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return $(this).button("widget")[0];}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(rtl?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(rtl?"ui-corner-left":"ui-corner-right").end().end();},_destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return $(this).button("widget")[0];}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");}});}(jQuery));(function($,undefined){$.extend($.ui,{datepicker:{version:"1.10.2"}});var PROP_NAME="datepicker",dpuuid=new Date().getTime(),instActive;function Datepicker(){this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};$.extend(this._defaults,this.regional[""]);this.dpDiv=bindHover($("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));}
$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv;},setDefaults:function(settings){extendRemove(this._defaults,settings||{});return this;},_attachDatepicker:function(target,settings){var nodeName,inline,inst;nodeName=target.nodeName.toLowerCase();inline=(nodeName==="div"||nodeName==="span");if(!target.id){this.uuid+=1;target.id="dp"+this.uuid;}
inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{});if(nodeName==="input"){this._connectDatepicker(target,inst);}else if(inline){this._inlineDatepicker(target,inst);}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:bindHover($("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))};},_connectDatepicker:function(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return;}
this._attachments(input,inst);input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);this._autoSize(inst);$.data(target,PROP_NAME,inst);if(inst.settings.disabled){this._disableDatepicker(target);}},_attachments:function(input,inst){var showOn,buttonText,buttonImage,appendText=this._get(inst,"appendText"),isRTL=this._get(inst,"isRTL");if(inst.append){inst.append.remove();}
if(appendText){inst.append=$("<span class='"+this._appendClass+"'>"+appendText+"</span>");input[isRTL?"before":"after"](inst.append);}
input.unbind("focus",this._showDatepicker);if(inst.trigger){inst.trigger.remove();}
showOn=this._get(inst,"showOn");if(showOn==="focus"||showOn==="both"){input.focus(this._showDatepicker);}
if(showOn==="button"||showOn==="both"){buttonText=this._get(inst,"buttonText");buttonImage=this._get(inst,"buttonImage");inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$("<button type='button'></button>").addClass(this._triggerClass).html(!buttonImage?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?"before":"after"](inst.trigger);inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput===input[0]){$.datepicker._hideDatepicker();}else if($.datepicker._datepickerShowing&&$.datepicker._lastInput!==input[0]){$.datepicker._hideDatepicker();$.datepicker._showDatepicker(input[0]);}else{$.datepicker._showDatepicker(input[0]);}
return false;});}},_autoSize:function(inst){if(this._get(inst,"autoSize")&&!inst.inline){var findMax,max,maxI,i,date=new Date(2009,12-1,20),dateFormat=this._get(inst,"dateFormat");if(dateFormat.match(/[DM]/)){findMax=function(names){max=0;maxI=0;for(i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i;}}
return maxI;};date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?"monthNames":"monthNamesShort"))));date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?"dayNames":"dayNamesShort")))+20-date.getDay());}
inst.input.attr("size",this._formatDate(inst,date).length);}},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName)){return;}
divSpan.addClass(this.markerClassName).append(inst.dpDiv);$.data(target,PROP_NAME,inst);this._setDate(inst,this._getDefaultDate(inst),true);this._updateDatepicker(inst);this._updateAlternate(inst);if(inst.settings.disabled){this._disableDatepicker(target);}
inst.dpDiv.css("display","block");},_dialogDatepicker:function(input,date,onSelect,settings,pos){var id,browserWidth,browserHeight,scrollX,scrollY,inst=this._dialogInst;if(!inst){this.uuid+=1;id="dp"+this.uuid;this._dialogInput=$("<input type='text' id='"+id+"' style='position: absolute; top: -100px; width: 0px;'/>");this._dialogInput.keydown(this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],PROP_NAME,inst);}
extendRemove(inst.settings,settings||{});date=(date&&date.constructor===Date?this._formatDate(inst,date):date);this._dialogInput.val(date);this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){browserWidth=document.documentElement.clientWidth;browserHeight=document.documentElement.clientHeight;scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY];}
this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI){$.blockUI(this.dpDiv);}
$.data(this._dialogInput[0],PROP_NAME,inst);return this;},_destroyDatepicker:function(target){var nodeName,$target=$(target),inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return;}
nodeName=target.nodeName.toLowerCase();$.removeData(target,PROP_NAME);if(nodeName==="input"){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp);}else if(nodeName==="div"||nodeName==="span"){$target.removeClass(this.markerClassName).empty();}},_enableDatepicker:function(target){var nodeName,inline,$target=$(target),inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return;}
nodeName=target.nodeName.toLowerCase();if(nodeName==="input"){target.disabled=false;inst.trigger.filter("button").each(function(){this.disabled=false;}).end().filter("img").css({opacity:"1.0",cursor:""});}else if(nodeName==="div"||nodeName==="span"){inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false);}
this._disabledInputs=$.map(this._disabledInputs,function(value){return(value===target?null:value);});},_disableDatepicker:function(target){var nodeName,inline,$target=$(target),inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return;}
nodeName=target.nodeName.toLowerCase();if(nodeName==="input"){target.disabled=true;inst.trigger.filter("button").each(function(){this.disabled=true;}).end().filter("img").css({opacity:"0.5",cursor:"default"});}else if(nodeName==="div"||nodeName==="span"){inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true);}
this._disabledInputs=$.map(this._disabledInputs,function(value){return(value===target?null:value);});this._disabledInputs[this._disabledInputs.length]=target;},_isDisabledDatepicker:function(target){if(!target){return false;}
for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]===target){return true;}}
return false;},_getInst:function(target){try{return $.data(target,PROP_NAME);}
catch(err){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(target,name,value){var settings,date,minDate,maxDate,inst=this._getInst(target);if(arguments.length===2&&typeof name==="string"){return(name==="defaults"?$.extend({},$.datepicker._defaults):(inst?(name==="all"?$.extend({},inst.settings):this._get(inst,name)):null));}
settings=name||{};if(typeof name==="string"){settings={};settings[name]=value;}
if(inst){if(this._curInst===inst){this._hideDatepicker();}
date=this._getDateDatepicker(target,true);minDate=this._getMinMaxDate(inst,"min");maxDate=this._getMinMaxDate(inst,"max");extendRemove(inst.settings,settings);if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){inst.settings.minDate=this._formatDate(inst,minDate);}
if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){inst.settings.maxDate=this._formatDate(inst,maxDate);}
if("disabled"in settings){if(settings.disabled){this._disableDatepicker(target);}else{this._enableDatepicker(target);}}
this._attachments($(target),inst);this._autoSize(inst);this._setDate(inst,date);this._updateAlternate(inst);this._updateDatepicker(inst);}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value);},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst);}},_setDateDatepicker:function(target,date){var inst=this._getInst(target);if(inst){this._setDate(inst,date);this._updateDatepicker(inst);this._updateAlternate(inst);}},_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);if(inst&&!inst.inline){this._setDateFromField(inst,noDefault);}
return(inst?this._getDate(inst):null);},_doKeyDown:function(event){var onSelect,dateStr,sel,inst=$.datepicker._getInst(event.target),handled=true,isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=true;if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker();handled=false;break;case 13:sel=$("td."+$.datepicker._dayOverClass+":not(."+
$.datepicker._currentClass+")",inst.dpDiv);if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0]);}
onSelect=$.datepicker._get(inst,"onSelect");if(onSelect){dateStr=$.datepicker._formatDate(inst);onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst]);}else{$.datepicker._hideDatepicker();}
return false;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");break;case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");break;case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target);}
handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target);}
handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D");}
handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");}
break;case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D");}
handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D");}
handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");}
break;case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D");}
handled=event.ctrlKey||event.metaKey;break;default:handled=false;}}else if(event.keyCode===36&&event.ctrlKey){$.datepicker._showDatepicker(this);}else{handled=false;}
if(handled){event.preventDefault();event.stopPropagation();}},_doKeyPress:function(event){var chars,chr,inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));chr=String.fromCharCode(event.charCode==null?event.keyCode:event.charCode);return event.ctrlKey||event.metaKey||(chr<" "||!chars||chars.indexOf(chr)>-1);}},_doKeyUp:function(event){var date,inst=$.datepicker._getInst(event.target);if(inst.input.val()!==inst.lastVal){try{date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),(inst.input?inst.input.val():null),$.datepicker._getFormatConfig(inst));if(date){$.datepicker._setDateFromField(inst);$.datepicker._updateAlternate(inst);$.datepicker._updateDatepicker(inst);}}
catch(err){}}
return true;},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!=="input"){input=$("input",input.parentNode)[0];}
if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput===input){return;}
var inst,beforeShow,beforeShowSettings,isFixed,offset,showAnim,duration;inst=$.datepicker._getInst(input);if($.datepicker._curInst&&$.datepicker._curInst!==inst){$.datepicker._curInst.dpDiv.stop(true,true);if(inst&&$.datepicker._datepickerShowing){$.datepicker._hideDatepicker($.datepicker._curInst.input[0]);}}
beforeShow=$.datepicker._get(inst,"beforeShow");beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};if(beforeShowSettings===false){return;}
extendRemove(inst.settings,beforeShowSettings);inst.lastVal=null;$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog){input.value="";}
if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight;}
isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css("position")==="fixed";return!isFixed;});offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.dpDiv.empty();inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){showAnim=$.datepicker._get(inst,"showAnim");duration=$.datepicker._get(inst,"duration");inst.dpDiv.zIndex($(input).zIndex()+1);$.datepicker._datepickerShowing=true;if($.effects&&$.effects.effect[showAnim]){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration);}else{inst.dpDiv[showAnim||"show"](showAnim?duration:null);}
if(inst.input.is(":visible")&&!inst.input.is(":disabled")){inst.input.focus();}
$.datepicker._curInst=inst;}},_updateDatepicker:function(inst){this.maxRows=4;instActive=inst;inst.dpDiv.empty().append(this._generateHTML(inst));this._attachHandlers(inst);inst.dpDiv.find("."+this._dayOverClass+" a").mouseover();var origyearshtml,numMonths=this._getNumberOfMonths(inst),cols=numMonths[1],width=17;inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em");}
inst.dpDiv[(numMonths[0]!==1||numMonths[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst===$.datepicker._curInst&&$.datepicker._datepickerShowing&&inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&inst.input[0]!==document.activeElement){inst.input.focus();}
if(inst.yearshtml){origyearshtml=inst.yearshtml;setTimeout(function(){if(origyearshtml===inst.yearshtml&&inst.yearshtml){inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);}
origyearshtml=inst.yearshtml=null;},0);}},_getBorders:function(elem){var convert=function(value){return{thin:1,medium:2,thick:3}[value]||value;};return[parseFloat(convert(elem.css("border-left-width"))),parseFloat(convert(elem.css("border-top-width")))];},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth(),dpHeight=inst.dpDiv.outerHeight(),inputWidth=inst.input?inst.input.outerWidth():0,inputHeight=inst.input?inst.input.outerHeight():0,viewWidth=document.documentElement.clientWidth+(isFixed?0:$(document).scrollLeft()),viewHeight=document.documentElement.clientHeight+(isFixed?0:$(document).scrollTop());offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);offset.left-=(isFixed&&offset.left===inst.input.offset().left)?$(document).scrollLeft():0;offset.top-=(isFixed&&offset.top===(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight):0);return offset;},_findPos:function(obj){var position,inst=this._getInst(obj),isRTL=this._get(inst,"isRTL");while(obj&&(obj.type==="hidden"||obj.nodeType!==1||$.expr.filters.hidden(obj))){obj=obj[isRTL?"previousSibling":"nextSibling"];}
position=$(obj).offset();return[position.left,position.top];},_hideDatepicker:function(input){var showAnim,duration,postProcess,onClose,inst=this._curInst;if(!inst||(input&&inst!==$.data(input,PROP_NAME))){return;}
if(this._datepickerShowing){showAnim=this._get(inst,"showAnim");duration=this._get(inst,"duration");postProcess=function(){$.datepicker._tidyDialog(inst);};if($.effects&&($.effects.effect[showAnim]||$.effects[showAnim])){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess);}else{inst.dpDiv[(showAnim==="slideDown"?"slideUp":(showAnim==="fadeIn"?"fadeOut":"hide"))]((showAnim?duration:null),postProcess);}
if(!showAnim){postProcess();}
this._datepickerShowing=false;onClose=this._get(inst,"onClose");if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst]);}
this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv);}}
this._inDialog=false;}},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");},_checkExternalClick:function(event){if(!$.datepicker._curInst){return;}
var $target=$(event.target),inst=$.datepicker._getInst($target[0]);if((($target[0].id!==$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length===0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)))||($target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!==inst)){$.datepicker._hideDatepicker();}},_adjustDate:function(id,offset,period){var target=$(id),inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return;}
this._adjustInstDate(inst,offset+
(period==="M"?this._get(inst,"showCurrentAtPos"):0),period);this._updateDatepicker(inst);},_gotoToday:function(id){var date,target=$(id),inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear;}else{date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();}
this._notifyChange(inst);this._adjustDate(target);},_selectMonthYear:function(id,select,period){var target=$(id),inst=this._getInst(target[0]);inst["selected"+(period==="M"?"Month":"Year")]=inst["draw"+(period==="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target);},_selectDay:function(id,month,year,td){var inst,target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return;}
inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$("a",td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear));},_clearDate:function(id){var target=$(id);this._selectDate(target,"");},_selectDate:function(id,dateStr){var onSelect,target=$(id),inst=this._getInst(target[0]);dateStr=(dateStr!=null?dateStr:this._formatDate(inst));if(inst.input){inst.input.val(dateStr);}
this._updateAlternate(inst);onSelect=this._get(inst,"onSelect");if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst]);}else if(inst.input){inst.input.trigger("change");}
if(inst.inline){this._updateDatepicker(inst);}else{this._hideDatepicker();this._lastInput=inst.input[0];if(typeof(inst.input[0])!=="object"){inst.input.focus();}
this._lastInput=null;}},_updateAlternate:function(inst){var altFormat,date,dateStr,altField=this._get(inst,"altField");if(altField){altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");date=this._getDate(inst);dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).each(function(){$(this).val(dateStr);});}},noWeekends:function(date){var day=date.getDay();return[(day>0&&day<6),""];},iso8601Week:function(date){var time,checkDate=new Date(date.getTime());checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));time=checkDate.getTime();checkDate.setMonth(0);checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/86400000)/7)+1;},parseDate:function(format,value,settings){if(format==null||value==null){throw"Invalid arguments";}
value=(typeof value==="object"?value.toString():value+"");if(value===""){return null;}
var iFormat,dim,extra,iValue=0,shortYearCutoffTemp=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff,shortYearCutoff=(typeof shortYearCutoffTemp!=="string"?shortYearCutoffTemp:new Date().getFullYear()%100+parseInt(shortYearCutoffTemp,10)),dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort,dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames,monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort,monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames,year=-1,month=-1,day=-1,doy=-1,literal=false,date,lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)===match);if(matches){iFormat++;}
return matches;},getNumber=function(match){var isDoubled=lookAhead(match),size=(match==="@"?14:(match==="!"?20:(match==="y"&&isDoubled?4:(match==="o"?3:2)))),digits=new RegExp("^\\d{1,"+size+"}"),num=value.substring(iValue).match(digits);if(!num){throw"Missing number at position "+iValue;}
iValue+=num[0].length;return parseInt(num[0],10);},getName=function(match,shortNames,longNames){var index=-1,names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]];}).sort(function(a,b){return-(a[1].length-b[1].length);});$.each(names,function(i,pair){var name=pair[1];if(value.substr(iValue,name.length).toLowerCase()===name.toLowerCase()){index=pair[0];iValue+=name.length;return false;}});if(index!==-1){return index+1;}else{throw"Unknown name at position "+iValue;}},checkLiteral=function(){if(value.charAt(iValue)!==format.charAt(iFormat)){throw"Unexpected literal at position "+iValue;}
iValue++;};for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=false;}else{checkLiteral();}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");break;case"D":getName("D",dayNamesShort,dayNames);break;case"o":doy=getNumber("o");break;case"m":month=getNumber("m");break;case"M":month=getName("M",monthNamesShort,monthNames);break;case"y":year=getNumber("y");break;case"@":date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"!":date=new Date((getNumber("!")-this._ticksTo1970)/10000);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'")){checkLiteral();}else{literal=true;}
break;default:checkLiteral();}}}
if(iValue<value.length){extra=value.substr(iValue);if(!/^\s+/.test(extra)){throw"Extra/unparsed characters found in date: "+extra;}}
if(year===-1){year=new Date().getFullYear();}else if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+
(year<=shortYearCutoff?0:-100);}
if(doy>-1){month=1;day=doy;do{dim=this._getDaysInMonth(year,month-1);if(day<=dim){break;}
month++;day-=dim;}while(true);}
date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!==year||date.getMonth()+1!==month||date.getDate()!==day){throw"Invalid date";}
return date;},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+
Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date){return"";}
var iFormat,dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort,dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames,monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort,monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames,lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)===match);if(matches){iFormat++;}
return matches;},formatNumber=function(match,value,len){var num=""+value;if(lookAhead(match)){while(num.length<len){num="0"+num;}}
return num;},formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value]);},output="",literal=false;if(date){for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=false;}else{output+=format.charAt(iFormat);}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);break;case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case"o":output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);break;case"m":output+=formatNumber("m",date.getMonth()+1,2);break;case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case"y":output+=(lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100);break;case"@":output+=date.getTime();break;case"!":output+=date.getTime()*10000+this._ticksTo1970;break;case"'":if(lookAhead("'")){output+="'";}else{literal=true;}
break;default:output+=format.charAt(iFormat);}}}}
return output;},_possibleChars:function(format){var iFormat,chars="",literal=false,lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)===match);if(matches){iFormat++;}
return matches;};for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=false;}else{chars+=format.charAt(iFormat);}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";break;case"D":case"M":return null;case"'":if(lookAhead("'")){chars+="'";}else{literal=true;}
break;default:chars+=format.charAt(iFormat);}}}
return chars;},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name];},_setDateFromField:function(inst,noDefault){if(inst.input.val()===inst.lastVal){return;}
var dateFormat=this._get(inst,"dateFormat"),dates=inst.lastVal=inst.input?inst.input.val():null,defaultDate=this._getDefaultDate(inst),date=defaultDate,settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate;}catch(event){dates=(noDefault?"":dates);}
inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=(dates?date.getDate():0);inst.currentMonth=(dates?date.getMonth():0);inst.currentYear=(dates?date.getFullYear():0);this._adjustInstDate(inst);},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()));},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date;},offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst));}
catch(e){}
var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date(),year=date.getFullYear(),month=date.getMonth(),day=date.getDate(),pattern=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);break;case"w":case"W":day+=parseInt(matches[1],10)*7;break;case"m":case"M":month+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;case"y":case"Y":year+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;}
matches=pattern.exec(offset);}
return new Date(year,month,day);},newDate=(date==null||date===""?defaultDate:(typeof date==="string"?offsetString(date):(typeof date==="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):new Date(date.getTime()))));newDate=(newDate&&newDate.toString()==="Invalid Date"?defaultDate:newDate);if(newDate){newDate.setHours(0);newDate.setMinutes(0);newDate.setSeconds(0);newDate.setMilliseconds(0);}
return this._daylightSavingAdjust(newDate);},_daylightSavingAdjust:function(date){if(!date){return null;}
date.setHours(date.getHours()>12?date.getHours()+2:0);return date;},_setDate:function(inst,date,noChange){var clear=!date,origMonth=inst.selectedMonth,origYear=inst.selectedYear,newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));inst.selectedDay=inst.currentDay=newDate.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();if((origMonth!==inst.selectedMonth||origYear!==inst.selectedYear)&&!noChange){this._notifyChange(inst);}
this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst));}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()==="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return startDate;},_attachHandlers:function(inst){var stepMonths=this._get(inst,"stepMonths"),id="#"+inst.id.replace(/\\\\/g,"\\");inst.dpDiv.find("[data-handler]").map(function(){var handler={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,-stepMonths,"M");},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,+stepMonths,"M");},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker();},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(id);},selectDay:function(){window["DP_jQuery_"+dpuuid].datepicker._selectDay(id,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return false;},selectMonth:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"M");return false;},selectYear:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"Y");return false;}};$(this).bind(this.getAttribute("data-event"),handler[this.getAttribute("data-handler")]);});},_generateHTML:function(inst){var maxDraw,prevText,prev,nextText,next,currentText,gotoDate,controls,buttonPanel,firstDay,showWeek,dayNames,dayNamesMin,monthNames,monthNamesShort,beforeShowDay,showOtherMonths,selectOtherMonths,defaultDate,html,dow,row,group,col,selectedDate,cornerClass,calender,thead,day,daysInMonth,leadDays,curRows,numRows,printDate,dRow,tbody,daySettings,otherMonth,unselectable,tempDate=new Date(),today=this._daylightSavingAdjust(new Date(tempDate.getFullYear(),tempDate.getMonth(),tempDate.getDate())),isRTL=this._get(inst,"isRTL"),showButtonPanel=this._get(inst,"showButtonPanel"),hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext"),navigationAsDateFormat=this._get(inst,"navigationAsDateFormat"),numMonths=this._getNumberOfMonths(inst),showCurrentAtPos=this._get(inst,"showCurrentAtPos"),stepMonths=this._get(inst,"stepMonths"),isMultiMonth=(numMonths[0]!==1||numMonths[1]!==1),currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay))),minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),drawMonth=inst.drawMonth-showCurrentAtPos,drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--;}
if(maxDate){maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--;}}}
inst.drawMonth=drawMonth;inst.drawYear=drawYear;prevText=this._get(inst,"prevText");prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'"+" title='"+prevText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"e":"w")+"'>"+prevText+"</span></a>":(hideIfNoPrevNext?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+prevText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"e":"w")+"'>"+prevText+"</span></a>"));nextText=this._get(inst,"nextText");nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'"+" title='"+nextText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"w":"e")+"'>"+nextText+"</span></a>":(hideIfNoPrevNext?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+nextText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"w":"e")+"'>"+nextText+"</span></a>"));currentText=this._get(inst,"currentText");gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));controls=(!inst.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+
this._get(inst,"closeText")+"</button>":"");buttonPanel=(showButtonPanel)?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(isRTL?controls:"")+
(this._isInRange(inst,gotoDate)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'"+">"+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=(isNaN(firstDay)?0:firstDay);showWeek=this._get(inst,"showWeek");dayNames=this._get(inst,"dayNames");dayNamesMin=this._get(inst,"dayNamesMin");monthNames=this._get(inst,"monthNames");monthNamesShort=this._get(inst,"monthNamesShort");beforeShowDay=this._get(inst,"beforeShowDay");showOtherMonths=this._get(inst,"showOtherMonths");selectOtherMonths=this._get(inst,"selectOtherMonths");defaultDate=this._getDefaultDate(inst);html="";dow;for(row=0;row<numMonths[0];row++){group="";this.maxRows=4;for(col=0;col<numMonths[1];col++){selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));cornerClass=" ui-corner-all";calender="";if(isMultiMonth){calender+="<div class='ui-datepicker-group";if(numMonths[1]>1){switch(col){case 0:calender+=" ui-datepicker-group-first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+=" ui-datepicker-group-last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+=" ui-datepicker-group-middle";cornerClass="";break;}}
calender+="'>";}
calender+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+cornerClass+"'>"+
(/all|left/.test(cornerClass)&&row===0?(isRTL?next:prev):"")+
(/all|right/.test(cornerClass)&&row===0?(isRTL?prev:next):"")+
this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>";thead=(showWeek?"<th class='ui-datepicker-week-col'>"+this._get(inst,"weekHeader")+"</th>":"");for(dow=0;dow<7;dow++){day=(dow+firstDay)%7;thead+="<th"+((dow+firstDay+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+dayNames[day]+"'>"+dayNamesMin[day]+"</span></th>";}
calender+=thead+"</tr></thead><tbody>";daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear===inst.selectedYear&&drawMonth===inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth);}
leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;curRows=Math.ceil((leadDays+daysInMonth)/7);numRows=(isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows);this.maxRows=numRows;printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(dRow=0;dRow<numRows;dRow++){calender+="<tr>";tbody=(!showWeek?"":"<td class='ui-datepicker-week-col'>"+
this._get(inst,"calculateWeek")(printDate)+"</td>");for(dow=0;dow<7;dow++){daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);otherMonth=(printDate.getMonth()!==drawMonth);unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);tbody+="<td class='"+
((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+
(otherMonth?" ui-datepicker-other-month":"")+
((printDate.getTime()===selectedDate.getTime()&&drawMonth===inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()===printDate.getTime()&&defaultDate.getTime()===selectedDate.getTime())?" "+this._dayOverClass:"")+
(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+
(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+
(printDate.getTime()===currentDate.getTime()?" "+this._currentClass:"")+
(printDate.getTime()===today.getTime()?" ui-datepicker-today":""))+"'"+
((!otherMonth||showOtherMonths)&&daySettings[2]?" title='"+daySettings[2].replace(/'/g,"&#39;")+"'":"")+
(unselectable?"":" data-handler='selectDay' data-event='click' data-month='"+printDate.getMonth()+"' data-year='"+printDate.getFullYear()+"'")+">"+
(otherMonth&&!showOtherMonths?"&#xa0;":(unselectable?"<span class='ui-state-default'>"+printDate.getDate()+"</span>":"<a class='ui-state-default"+
(printDate.getTime()===today.getTime()?" ui-state-highlight":"")+
(printDate.getTime()===currentDate.getTime()?" ui-state-active":"")+
(otherMonth?" ui-priority-secondary":"")+"' href='#'>"+printDate.getDate()+"</a>"))+"</td>";printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate);}
calender+=tbody+"</tr>";}
drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++;}
calender+="</tbody></table>"+(isMultiMonth?"</div>"+
((numMonths[0]>0&&col===numMonths[1]-1)?"<div class='ui-datepicker-row-break'></div>":""):"");group+=calender;}
html+=group;}
html+=buttonPanel;inst._keyEvent=false;return html;},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var inMinYear,inMaxYear,month,years,thisYear,determineYear,year,endYear,changeMonth=this._get(inst,"changeMonth"),changeYear=this._get(inst,"changeYear"),showMonthAfterYear=this._get(inst,"showMonthAfterYear"),html="<div class='ui-datepicker-title'>",monthHtml="";if(secondary||!changeMonth){monthHtml+="<span class='ui-datepicker-month'>"+monthNames[drawMonth]+"</span>";}else{inMinYear=(minDate&&minDate.getFullYear()===drawYear);inMaxYear=(maxDate&&maxDate.getFullYear()===drawYear);monthHtml+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";for(month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+="<option value='"+month+"'"+
(month===drawMonth?" selected='selected'":"")+">"+monthNamesShort[month]+"</option>";}}
monthHtml+="</select>";}
if(!showMonthAfterYear){html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"");}
if(!inst.yearshtml){inst.yearshtml="";if(secondary||!changeYear){html+="<span class='ui-datepicker-year'>"+drawYear+"</span>";}else{years=this._get(inst,"yearRange").split(":");thisYear=new Date().getFullYear();determineYear=function(value){var year=(value.match(/c[+\-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+\-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));return(isNaN(year)?thisYear:year);};year=determineYear(years[0]);endYear=Math.max(year,determineYear(years[1]||""));year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);inst.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";for(;year<=endYear;year++){inst.yearshtml+="<option value='"+year+"'"+
(year===drawYear?" selected='selected'":"")+">"+year+"</option>";}
inst.yearshtml+="</select>";html+=inst.yearshtml;inst.yearshtml=null;}}
html+=this._get(inst,"yearSuffix");if(showMonthAfterYear){html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml;}
html+="</div>";return html;},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period==="Y"?offset:0),month=inst.drawMonth+(period==="M"?offset:0),day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period==="D"?offset:0),date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period==="M"||period==="Y"){this._notifyChange(inst);}},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),newDate=(minDate&&date<minDate?minDate:date);return(maxDate&&newDate>maxDate?maxDate:newDate);},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst]);}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");return(numMonths==null?[1,1]:(typeof numMonths==="number"?[1,numMonths]:numMonths));},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null);},_getDaysInMonth:function(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate();},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay();},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst),date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()));}
return this._isInRange(inst,date);},_isInRange:function(inst,date){var yearSplit,currentYear,minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),minYear=null,maxYear=null,years=this._get(inst,"yearRange");if(years){yearSplit=years.split(":");currentYear=new Date().getFullYear();minYear=parseInt(yearSplit[0],10);maxYear=parseInt(yearSplit[1],10);if(yearSplit[0].match(/[+\-].*/)){minYear+=currentYear;}
if(yearSplit[1].match(/[+\-].*/)){maxYear+=currentYear;}}
return((!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime())&&(!minYear||date.getFullYear()>=minYear)&&(!maxYear||date.getFullYear()<=maxYear));},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=(typeof shortYearCutoff!=="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")};},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear;}
var date=(day?(typeof day==="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst));}});function bindHover(dpDiv){var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return dpDiv.delegate(selector,"mouseout",function(){$(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){$(this).removeClass("ui-datepicker-prev-hover");}
if(this.className.indexOf("ui-datepicker-next")!==-1){$(this).removeClass("ui-datepicker-next-hover");}}).delegate(selector,"mouseover",function(){if(!$.datepicker._isDisabledDatepicker(instActive.inline?dpDiv.parent()[0]:instActive.input[0])){$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");$(this).addClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){$(this).addClass("ui-datepicker-prev-hover");}
if(this.className.indexOf("ui-datepicker-next")!==-1){$(this).addClass("ui-datepicker-next-hover");}}});}
function extendRemove(target,props){$.extend(target,props);for(var name in props){if(props[name]==null){target[name]=props[name];}}
return target;}
$.fn.datepicker=function(options){if(!this.length){return this;}
if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick);$.datepicker.initialized=true;}
if($("#"+$.datepicker._mainDivId).length===0){$("body").append($.datepicker.dpDiv);}
var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options==="string"&&(options==="isDisabled"||options==="getDate"||options==="widget")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs));}
if(options==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs));}
return this.each(function(){typeof options==="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options);});};$.datepicker=new Datepicker();$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.10.2";window["DP_jQuery_"+dpuuid]=$;})(jQuery);(function($,undefined){var sizeRelatedOptions={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},resizableRelatedOptions={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};$.widget("ui.dialog",{version:"1.10.2",options:{appendTo:"body",autoOpen:true,buttons:[],closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(pos){var topOffset=$(this).css(pos).offset().top;if(topOffset<0){$(this).css("top",pos.top-topOffset);}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.originalTitle=this.element.attr("title");this.options.title=this.options.title||this.originalTitle;this._createWrapper();this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);this._createTitlebar();this._createButtonPane();if(this.options.draggable&&$.fn.draggable){this._makeDraggable();}
if(this.options.resizable&&$.fn.resizable){this._makeResizable();}
this._isOpen=false;},_init:function(){if(this.options.autoOpen){this.open();}},_appendTo:function(){var element=this.options.appendTo;if(element&&(element.jquery||element.nodeType)){return $(element);}
return this.document.find(element||"body").eq(0);},_destroy:function(){var next,originalPosition=this.originalPosition;this._destroyOverlay();this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();this.uiDialog.stop(true,true).remove();if(this.originalTitle){this.element.attr("title",this.originalTitle);}
next=originalPosition.parent.children().eq(originalPosition.index);if(next.length&&next[0]!==this.element[0]){next.before(this.element);}else{originalPosition.parent.append(this.element);}},widget:function(){return this.uiDialog;},disable:$.noop,enable:$.noop,close:function(event){var that=this;if(!this._isOpen||this._trigger("beforeClose",event)===false){return;}
this._isOpen=false;this._destroyOverlay();if(!this.opener.filter(":focusable").focus().length){$(this.document[0].activeElement).blur();}
this._hide(this.uiDialog,this.options.hide,function(){that._trigger("close",event);});},isOpen:function(){return this._isOpen;},moveToTop:function(){this._moveToTop();},_moveToTop:function(event,silent){var moved=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;if(moved&&!silent){this._trigger("focus",event);}
return moved;},open:function(){var that=this;if(this._isOpen){if(this._moveToTop()){this._focusTabbable();}
return;}
this._isOpen=true;this.opener=$(this.document[0].activeElement);this._size();this._position();this._createOverlay();this._moveToTop(null,true);this._show(this.uiDialog,this.options.show,function(){that._focusTabbable();that._trigger("focus");});this._trigger("open");},_focusTabbable:function(){var hasFocus=this.element.find("[autofocus]");if(!hasFocus.length){hasFocus=this.element.find(":tabbable");}
if(!hasFocus.length){hasFocus=this.uiDialogButtonPane.find(":tabbable");}
if(!hasFocus.length){hasFocus=this.uiDialogTitlebarClose.filter(":tabbable");}
if(!hasFocus.length){hasFocus=this.uiDialog;}
hasFocus.eq(0).focus();},_keepFocus:function(event){function checkFocus(){var activeElement=this.document[0].activeElement,isActive=this.uiDialog[0]===activeElement||$.contains(this.uiDialog[0],activeElement);if(!isActive){this._focusTabbable();}}
event.preventDefault();checkFocus.call(this);this._delay(checkFocus);},_createWrapper:function(){this.uiDialog=$("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+
this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());this._on(this.uiDialog,{keydown:function(event){if(this.options.closeOnEscape&&!event.isDefaultPrevented()&&event.keyCode&&event.keyCode===$.ui.keyCode.ESCAPE){event.preventDefault();this.close(event);return;}
if(event.keyCode!==$.ui.keyCode.TAB){return;}
var tabbables=this.uiDialog.find(":tabbable"),first=tabbables.filter(":first"),last=tabbables.filter(":last");if((event.target===last[0]||event.target===this.uiDialog[0])&&!event.shiftKey){first.focus(1);event.preventDefault();}else if((event.target===first[0]||event.target===this.uiDialog[0])&&event.shiftKey){last.focus(1);event.preventDefault();}},mousedown:function(event){if(this._moveToTop(event)){this._focusTabbable();}}});if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")});}},_createTitlebar:function(){var uiDialogTitle;this.uiDialogTitlebar=$("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);this._on(this.uiDialogTitlebar,{mousedown:function(event){if(!$(event.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.focus();}}});this.uiDialogTitlebarClose=$("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:false}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);this._on(this.uiDialogTitlebarClose,{click:function(event){event.preventDefault();this.close(event);}});uiDialogTitle=$("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);this._title(uiDialogTitle);this.uiDialog.attr({"aria-labelledby":uiDialogTitle.attr("id")});},_title:function(title){if(!this.options.title){title.html("&#160;");}
title.text(this.options.title);},_createButtonPane:function(){this.uiDialogButtonPane=$("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");this.uiButtonSet=$("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);this._createButtons();},_createButtons:function(){var that=this,buttons=this.options.buttons;this.uiDialogButtonPane.remove();this.uiButtonSet.empty();if($.isEmptyObject(buttons)||($.isArray(buttons)&&!buttons.length)){this.uiDialog.removeClass("ui-dialog-buttons");return;}
$.each(buttons,function(name,props){var click,buttonOptions;props=$.isFunction(props)?{click:props,text:name}:props;props=$.extend({type:"button"},props);click=props.click;props.click=function(){click.apply(that.element[0],arguments);};buttonOptions={icons:props.icons,text:props.showText};delete props.icons;delete props.showText;$("<button></button>",props).button(buttonOptions).appendTo(that.uiButtonSet);});this.uiDialog.addClass("ui-dialog-buttons");this.uiDialogButtonPane.appendTo(this.uiDialog);},_makeDraggable:function(){var that=this,options=this.options;function filteredUi(ui){return{position:ui.position,offset:ui.offset};}
this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(event,ui){$(this).addClass("ui-dialog-dragging");that._blockFrames();that._trigger("dragStart",event,filteredUi(ui));},drag:function(event,ui){that._trigger("drag",event,filteredUi(ui));},stop:function(event,ui){options.position=[ui.position.left-that.document.scrollLeft(),ui.position.top-that.document.scrollTop()];$(this).removeClass("ui-dialog-dragging");that._unblockFrames();that._trigger("dragStop",event,filteredUi(ui));}});},_makeResizable:function(){var that=this,options=this.options,handles=options.resizable,position=this.uiDialog.css("position"),resizeHandles=typeof handles==="string"?handles:"n,e,s,w,se,sw,ne,nw";function filteredUi(ui){return{originalPosition:ui.originalPosition,originalSize:ui.originalSize,position:ui.position,size:ui.size};}
this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:options.maxWidth,maxHeight:options.maxHeight,minWidth:options.minWidth,minHeight:this._minHeight(),handles:resizeHandles,start:function(event,ui){$(this).addClass("ui-dialog-resizing");that._blockFrames();that._trigger("resizeStart",event,filteredUi(ui));},resize:function(event,ui){that._trigger("resize",event,filteredUi(ui));},stop:function(event,ui){options.height=$(this).height();options.width=$(this).width();$(this).removeClass("ui-dialog-resizing");that._unblockFrames();that._trigger("resizeStop",event,filteredUi(ui));}}).css("position",position);},_minHeight:function(){var options=this.options;return options.height==="auto"?options.minHeight:Math.min(options.minHeight,options.height);},_position:function(){var isVisible=this.uiDialog.is(":visible");if(!isVisible){this.uiDialog.show();}
this.uiDialog.position(this.options.position);if(!isVisible){this.uiDialog.hide();}},_setOptions:function(options){var that=this,resize=false,resizableOptions={};$.each(options,function(key,value){that._setOption(key,value);if(key in sizeRelatedOptions){resize=true;}
if(key in resizableRelatedOptions){resizableOptions[key]=value;}});if(resize){this._size();this._position();}
if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",resizableOptions);}},_setOption:function(key,value){var isDraggable,isResizable,uiDialog=this.uiDialog;if(key==="dialogClass"){uiDialog.removeClass(this.options.dialogClass).addClass(value);}
if(key==="disabled"){return;}
this._super(key,value);if(key==="appendTo"){this.uiDialog.appendTo(this._appendTo());}
if(key==="buttons"){this._createButtons();}
if(key==="closeText"){this.uiDialogTitlebarClose.button({label:""+value});}
if(key==="draggable"){isDraggable=uiDialog.is(":data(ui-draggable)");if(isDraggable&&!value){uiDialog.draggable("destroy");}
if(!isDraggable&&value){this._makeDraggable();}}
if(key==="position"){this._position();}
if(key==="resizable"){isResizable=uiDialog.is(":data(ui-resizable)");if(isResizable&&!value){uiDialog.resizable("destroy");}
if(isResizable&&typeof value==="string"){uiDialog.resizable("option","handles",value);}
if(!isResizable&&value!==false){this._makeResizable();}}
if(key==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"));}},_size:function(){var nonContentHeight,minContentHeight,maxContentHeight,options=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});if(options.minWidth>options.width){options.width=options.minWidth;}
nonContentHeight=this.uiDialog.css({height:"auto",width:options.width}).outerHeight();minContentHeight=Math.max(0,options.minHeight-nonContentHeight);maxContentHeight=typeof options.maxHeight==="number"?Math.max(0,options.maxHeight-nonContentHeight):"none";if(options.height==="auto"){this.element.css({minHeight:minContentHeight,maxHeight:maxContentHeight,height:"auto"});}else{this.element.height(Math.max(0,options.height-nonContentHeight));}
if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight());}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var iframe=$(this);return $("<div>").css({position:"absolute",width:iframe.outerWidth(),height:iframe.outerHeight()}).appendTo(iframe.parent()).offset(iframe.offset())[0];});},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();delete this.iframeBlocks;}},_allowInteraction:function(event){if($(event.target).closest(".ui-dialog").length){return true;}
return!!$(event.target).closest(".ui-datepicker").length;},_createOverlay:function(){if(!this.options.modal){return;}
var that=this,widgetFullName=this.widgetFullName;if(!$.ui.dialog.overlayInstances){this._delay(function(){if($.ui.dialog.overlayInstances){this.document.bind("focusin.dialog",function(event){if(!that._allowInteraction(event)){event.preventDefault();$(".ui-dialog:visible:last .ui-dialog-content").data(widgetFullName)._focusTabbable();}});}});}
this.overlay=$("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());this._on(this.overlay,{mousedown:"_keepFocus"});$.ui.dialog.overlayInstances++;},_destroyOverlay:function(){if(!this.options.modal){return;}
if(this.overlay){$.ui.dialog.overlayInstances--;if(!$.ui.dialog.overlayInstances){this.document.unbind("focusin.dialog");}
this.overlay.remove();this.overlay=null;}}});$.ui.dialog.overlayInstances=0;if($.uiBackCompat!==false){$.widget("ui.dialog",$.ui.dialog,{_position:function(){var position=this.options.position,myAt=[],offset=[0,0],isVisible;if(position){if(typeof position==="string"||(typeof position==="object"&&"0"in position)){myAt=position.split?position.split(" "):[position[0],position[1]];if(myAt.length===1){myAt[1]=myAt[0];}
$.each(["left","top"],function(i,offsetPosition){if(+myAt[i]===myAt[i]){offset[i]=myAt[i];myAt[i]=offsetPosition;}});position={my:myAt[0]+(offset[0]<0?offset[0]:"+"+offset[0])+" "+
myAt[1]+(offset[1]<0?offset[1]:"+"+offset[1]),at:myAt.join(" ")};}
position=$.extend({},$.ui.dialog.prototype.options.position,position);}else{position=$.ui.dialog.prototype.options.position;}
isVisible=this.uiDialog.is(":visible");if(!isVisible){this.uiDialog.show();}
this.uiDialog.position(position);if(!isVisible){this.uiDialog.hide();}}});}}(jQuery));(function($,undefined){var rvertical=/up|down|vertical/,rpositivemotion=/up|left|vertical|horizontal/;$.effects.effect.blind=function(o,done){var el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"hide"),direction=o.direction||"up",vertical=rvertical.test(direction),ref=vertical?"height":"width",ref2=vertical?"top":"left",motion=rpositivemotion.test(direction),animation={},show=mode==="show",wrapper,distance,margin;if(el.parent().is(".ui-effects-wrapper")){$.effects.save(el.parent(),props);}else{$.effects.save(el,props);}
el.show();wrapper=$.effects.createWrapper(el).css({overflow:"hidden"});distance=wrapper[ref]();margin=parseFloat(wrapper.css(ref2))||0;animation[ref]=show?distance:0;if(!motion){el.css(vertical?"bottom":"right",0).css(vertical?"top":"left","auto").css({position:"absolute"});animation[ref2]=show?margin:distance+margin;}
if(show){wrapper.css(ref,0);if(!motion){wrapper.css(ref2,margin+distance);}}
wrapper.animate(animation,{duration:o.duration,easing:o.easing,queue:false,complete:function(){if(mode==="hide"){el.hide();}
$.effects.restore(el,props);$.effects.removeWrapper(el);done();}});};})(jQuery);(function($,undefined){$.effects.effect.bounce=function(o,done){var el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"effect"),hide=mode==="hide",show=mode==="show",direction=o.direction||"up",distance=o.distance,times=o.times||5,anims=times*2+(show||hide?1:0),speed=o.duration/anims,easing=o.easing,ref=(direction==="up"||direction==="down")?"top":"left",motion=(direction==="up"||direction==="left"),i,upAnim,downAnim,queue=el.queue(),queuelen=queue.length;if(show||hide){props.push("opacity");}
$.effects.save(el,props);el.show();$.effects.createWrapper(el);if(!distance){distance=el[ref==="top"?"outerHeight":"outerWidth"]()/3;}
if(show){downAnim={opacity:1};downAnim[ref]=0;el.css("opacity",0).css(ref,motion?-distance*2:distance*2).animate(downAnim,speed,easing);}
if(hide){distance=distance/Math.pow(2,times-1);}
downAnim={};downAnim[ref]=0;for(i=0;i<times;i++){upAnim={};upAnim[ref]=(motion?"-=":"+=")+distance;el.animate(upAnim,speed,easing).animate(downAnim,speed,easing);distance=hide?distance*2:distance/2;}
if(hide){upAnim={opacity:0};upAnim[ref]=(motion?"-=":"+=")+distance;el.animate(upAnim,speed,easing);}
el.queue(function(){if(hide){el.hide();}
$.effects.restore(el,props);$.effects.removeWrapper(el);done();});if(queuelen>1){queue.splice.apply(queue,[1,0].concat(queue.splice(queuelen,anims+1)));}
el.dequeue();};})(jQuery);(function($,undefined){$.effects.effect.clip=function(o,done){var el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"hide"),show=mode==="show",direction=o.direction||"vertical",vert=direction==="vertical",size=vert?"height":"width",position=vert?"top":"left",animation={},wrapper,animate,distance;$.effects.save(el,props);el.show();wrapper=$.effects.createWrapper(el).css({overflow:"hidden"});animate=(el[0].tagName==="IMG")?wrapper:el;distance=animate[size]();if(show){animate.css(size,0);animate.css(position,distance/2);}
animation[size]=show?distance:0;animation[position]=show?0:distance/2;animate.animate(animation,{queue:false,duration:o.duration,easing:o.easing,complete:function(){if(!show){el.hide();}
$.effects.restore(el,props);$.effects.removeWrapper(el);done();}});};})(jQuery);(function($,undefined){$.effects.effect.drop=function(o,done){var el=$(this),props=["position","top","bottom","left","right","opacity","height","width"],mode=$.effects.setMode(el,o.mode||"hide"),show=mode==="show",direction=o.direction||"left",ref=(direction==="up"||direction==="down")?"top":"left",motion=(direction==="up"||direction==="left")?"pos":"neg",animation={opacity:show?1:0},distance;$.effects.save(el,props);el.show();$.effects.createWrapper(el);distance=o.distance||el[ref==="top"?"outerHeight":"outerWidth"](true)/2;if(show){el.css("opacity",0).css(ref,motion==="pos"?-distance:distance);}
animation[ref]=(show?(motion==="pos"?"+=":"-="):(motion==="pos"?"-=":"+="))+
distance;el.animate(animation,{queue:false,duration:o.duration,easing:o.easing,complete:function(){if(mode==="hide"){el.hide();}
$.effects.restore(el,props);$.effects.removeWrapper(el);done();}});};})(jQuery);(function($,undefined){$.effects.effect.explode=function(o,done){var rows=o.pieces?Math.round(Math.sqrt(o.pieces)):3,cells=rows,el=$(this),mode=$.effects.setMode(el,o.mode||"hide"),show=mode==="show",offset=el.show().css("visibility","hidden").offset(),width=Math.ceil(el.outerWidth()/cells),height=Math.ceil(el.outerHeight()/rows),pieces=[],i,j,left,top,mx,my;function childComplete(){pieces.push(this);if(pieces.length===rows*cells){animComplete();}}
for(i=0;i<rows;i++){top=offset.top+i*height;my=i-(rows-1)/2;for(j=0;j<cells;j++){left=offset.left+j*width;mx=j-(cells-1)/2;el.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*width,top:-i*height}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:width,height:height,left:left+(show?mx*width:0),top:top+(show?my*height:0),opacity:show?0:1}).animate({left:left+(show?0:mx*width),top:top+(show?0:my*height),opacity:show?1:0},o.duration||500,o.easing,childComplete);}}
function animComplete(){el.css({visibility:"visible"});$(pieces).remove();if(!show){el.hide();}
done();}};})(jQuery);(function($,undefined){$.effects.effect.fade=function(o,done){var el=$(this),mode=$.effects.setMode(el,o.mode||"toggle");el.animate({opacity:mode},{queue:false,duration:o.duration,easing:o.easing,complete:done});};})(jQuery);(function($,undefined){$.effects.effect.fold=function(o,done){var el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"hide"),show=mode==="show",hide=mode==="hide",size=o.size||15,percent=/([0-9]+)%/.exec(size),horizFirst=!!o.horizFirst,widthFirst=show!==horizFirst,ref=widthFirst?["width","height"]:["height","width"],duration=o.duration/2,wrapper,distance,animation1={},animation2={};$.effects.save(el,props);el.show();wrapper=$.effects.createWrapper(el).css({overflow:"hidden"});distance=widthFirst?[wrapper.width(),wrapper.height()]:[wrapper.height(),wrapper.width()];if(percent){size=parseInt(percent[1],10)/100*distance[hide?0:1];}
if(show){wrapper.css(horizFirst?{height:0,width:size}:{height:size,width:0});}
animation1[ref[0]]=show?distance[0]:size;animation2[ref[1]]=show?distance[1]:0;wrapper.animate(animation1,duration,o.easing).animate(animation2,duration,o.easing,function(){if(hide){el.hide();}
$.effects.restore(el,props);$.effects.removeWrapper(el);done();});};})(jQuery);(function($,undefined){$.effects.effect.highlight=function(o,done){var elem=$(this),props=["backgroundImage","backgroundColor","opacity"],mode=$.effects.setMode(elem,o.mode||"show"),animation={backgroundColor:elem.css("backgroundColor")};if(mode==="hide"){animation.opacity=0;}
$.effects.save(elem,props);elem.show().css({backgroundImage:"none",backgroundColor:o.color||"#ffff99"}).animate(animation,{queue:false,duration:o.duration,easing:o.easing,complete:function(){if(mode==="hide"){elem.hide();}
$.effects.restore(elem,props);done();}});};})(jQuery);(function($,undefined){$.effects.effect.pulsate=function(o,done){var elem=$(this),mode=$.effects.setMode(elem,o.mode||"show"),show=mode==="show",hide=mode==="hide",showhide=(show||mode==="hide"),anims=((o.times||5)*2)+(showhide?1:0),duration=o.duration/anims,animateTo=0,queue=elem.queue(),queuelen=queue.length,i;if(show||!elem.is(":visible")){elem.css("opacity",0).show();animateTo=1;}
for(i=1;i<anims;i++){elem.animate({opacity:animateTo},duration,o.easing);animateTo=1-animateTo;}
elem.animate({opacity:animateTo},duration,o.easing);elem.queue(function(){if(hide){elem.hide();}
done();});if(queuelen>1){queue.splice.apply(queue,[1,0].concat(queue.splice(queuelen,anims+1)));}
elem.dequeue();};})(jQuery);(function($,undefined){$.effects.effect.puff=function(o,done){var elem=$(this),mode=$.effects.setMode(elem,o.mode||"hide"),hide=mode==="hide",percent=parseInt(o.percent,10)||150,factor=percent/100,original={height:elem.height(),width:elem.width(),outerHeight:elem.outerHeight(),outerWidth:elem.outerWidth()};$.extend(o,{effect:"scale",queue:false,fade:true,mode:mode,complete:done,percent:hide?percent:100,from:hide?original:{height:original.height*factor,width:original.width*factor,outerHeight:original.outerHeight*factor,outerWidth:original.outerWidth*factor}});elem.effect(o);};$.effects.effect.scale=function(o,done){var el=$(this),options=$.extend(true,{},o),mode=$.effects.setMode(el,o.mode||"effect"),percent=parseInt(o.percent,10)||(parseInt(o.percent,10)===0?0:(mode==="hide"?0:100)),direction=o.direction||"both",origin=o.origin,original={height:el.height(),width:el.width(),outerHeight:el.outerHeight(),outerWidth:el.outerWidth()},factor={y:direction!=="horizontal"?(percent/100):1,x:direction!=="vertical"?(percent/100):1};options.effect="size";options.queue=false;options.complete=done;if(mode!=="effect"){options.origin=origin||["middle","center"];options.restore=true;}
options.from=o.from||(mode==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:original);options.to={height:original.height*factor.y,width:original.width*factor.x,outerHeight:original.outerHeight*factor.y,outerWidth:original.outerWidth*factor.x};if(options.fade){if(mode==="show"){options.from.opacity=0;options.to.opacity=1;}
if(mode==="hide"){options.from.opacity=1;options.to.opacity=0;}}
el.effect(options);};$.effects.effect.size=function(o,done){var original,baseline,factor,el=$(this),props0=["position","top","bottom","left","right","width","height","overflow","opacity"],props1=["position","top","bottom","left","right","overflow","opacity"],props2=["width","height","overflow"],cProps=["fontSize"],vProps=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],hProps=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],mode=$.effects.setMode(el,o.mode||"effect"),restore=o.restore||mode!=="effect",scale=o.scale||"both",origin=o.origin||["middle","center"],position=el.css("position"),props=restore?props0:props1,zero={height:0,width:0,outerHeight:0,outerWidth:0};if(mode==="show"){el.show();}
original={height:el.height(),width:el.width(),outerHeight:el.outerHeight(),outerWidth:el.outerWidth()};if(o.mode==="toggle"&&mode==="show"){el.from=o.to||zero;el.to=o.from||original;}else{el.from=o.from||(mode==="show"?zero:original);el.to=o.to||(mode==="hide"?zero:original);}
factor={from:{y:el.from.height/original.height,x:el.from.width/original.width},to:{y:el.to.height/original.height,x:el.to.width/original.width}};if(scale==="box"||scale==="both"){if(factor.from.y!==factor.to.y){props=props.concat(vProps);el.from=$.effects.setTransition(el,vProps,factor.from.y,el.from);el.to=$.effects.setTransition(el,vProps,factor.to.y,el.to);}
if(factor.from.x!==factor.to.x){props=props.concat(hProps);el.from=$.effects.setTransition(el,hProps,factor.from.x,el.from);el.to=$.effects.setTransition(el,hProps,factor.to.x,el.to);}}
if(scale==="content"||scale==="both"){if(factor.from.y!==factor.to.y){props=props.concat(cProps).concat(props2);el.from=$.effects.setTransition(el,cProps,factor.from.y,el.from);el.to=$.effects.setTransition(el,cProps,factor.to.y,el.to);}}
$.effects.save(el,props);el.show();$.effects.createWrapper(el);el.css("overflow","hidden").css(el.from);if(origin){baseline=$.effects.getBaseline(origin,original);el.from.top=(original.outerHeight-el.outerHeight())*baseline.y;el.from.left=(original.outerWidth-el.outerWidth())*baseline.x;el.to.top=(original.outerHeight-el.to.outerHeight)*baseline.y;el.to.left=(original.outerWidth-el.to.outerWidth)*baseline.x;}
el.css(el.from);if(scale==="content"||scale==="both"){vProps=vProps.concat(["marginTop","marginBottom"]).concat(cProps);hProps=hProps.concat(["marginLeft","marginRight"]);props2=props0.concat(vProps).concat(hProps);el.find("*[width]").each(function(){var child=$(this),c_original={height:child.height(),width:child.width(),outerHeight:child.outerHeight(),outerWidth:child.outerWidth()};if(restore){$.effects.save(child,props2);}
child.from={height:c_original.height*factor.from.y,width:c_original.width*factor.from.x,outerHeight:c_original.outerHeight*factor.from.y,outerWidth:c_original.outerWidth*factor.from.x};child.to={height:c_original.height*factor.to.y,width:c_original.width*factor.to.x,outerHeight:c_original.height*factor.to.y,outerWidth:c_original.width*factor.to.x};if(factor.from.y!==factor.to.y){child.from=$.effects.setTransition(child,vProps,factor.from.y,child.from);child.to=$.effects.setTransition(child,vProps,factor.to.y,child.to);}
if(factor.from.x!==factor.to.x){child.from=$.effects.setTransition(child,hProps,factor.from.x,child.from);child.to=$.effects.setTransition(child,hProps,factor.to.x,child.to);}
child.css(child.from);child.animate(child.to,o.duration,o.easing,function(){if(restore){$.effects.restore(child,props2);}});});}
el.animate(el.to,{queue:false,duration:o.duration,easing:o.easing,complete:function(){if(el.to.opacity===0){el.css("opacity",el.from.opacity);}
if(mode==="hide"){el.hide();}
$.effects.restore(el,props);if(!restore){if(position==="static"){el.css({position:"relative",top:el.to.top,left:el.to.left});}else{$.each(["top","left"],function(idx,pos){el.css(pos,function(_,str){var val=parseInt(str,10),toRef=idx?el.to.left:el.to.top;if(str==="auto"){return toRef+"px";}
return val+toRef+"px";});});}}
$.effects.removeWrapper(el);done();}});};})(jQuery);(function($,undefined){$.effects.effect.shake=function(o,done){var el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"effect"),direction=o.direction||"left",distance=o.distance||20,times=o.times||3,anims=times*2+1,speed=Math.round(o.duration/anims),ref=(direction==="up"||direction==="down")?"top":"left",positiveMotion=(direction==="up"||direction==="left"),animation={},animation1={},animation2={},i,queue=el.queue(),queuelen=queue.length;$.effects.save(el,props);el.show();$.effects.createWrapper(el);animation[ref]=(positiveMotion?"-=":"+=")+distance;animation1[ref]=(positiveMotion?"+=":"-=")+distance*2;animation2[ref]=(positiveMotion?"-=":"+=")+distance*2;el.animate(animation,speed,o.easing);for(i=1;i<times;i++){el.animate(animation1,speed,o.easing).animate(animation2,speed,o.easing);}
el.animate(animation1,speed,o.easing).animate(animation,speed/2,o.easing).queue(function(){if(mode==="hide"){el.hide();}
$.effects.restore(el,props);$.effects.removeWrapper(el);done();});if(queuelen>1){queue.splice.apply(queue,[1,0].concat(queue.splice(queuelen,anims+1)));}
el.dequeue();};})(jQuery);(function($,undefined){$.effects.effect.slide=function(o,done){var el=$(this),props=["position","top","bottom","left","right","width","height"],mode=$.effects.setMode(el,o.mode||"show"),show=mode==="show",direction=o.direction||"left",ref=(direction==="up"||direction==="down")?"top":"left",positiveMotion=(direction==="up"||direction==="left"),distance,animation={};$.effects.save(el,props);el.show();distance=o.distance||el[ref==="top"?"outerHeight":"outerWidth"](true);$.effects.createWrapper(el).css({overflow:"hidden"});if(show){el.css(ref,positiveMotion?(isNaN(distance)?"-"+distance:-distance):distance);}
animation[ref]=(show?(positiveMotion?"+=":"-="):(positiveMotion?"-=":"+="))+
distance;el.animate(animation,{queue:false,duration:o.duration,easing:o.easing,complete:function(){if(mode==="hide"){el.hide();}
$.effects.restore(el,props);$.effects.removeWrapper(el);done();}});};})(jQuery);(function($,undefined){$.effects.effect.transfer=function(o,done){var elem=$(this),target=$(o.to),targetFixed=target.css("position")==="fixed",body=$("body"),fixTop=targetFixed?body.scrollTop():0,fixLeft=targetFixed?body.scrollLeft():0,endPosition=target.offset(),animation={top:endPosition.top-fixTop,left:endPosition.left-fixLeft,height:target.innerHeight(),width:target.innerWidth()},startPosition=elem.offset(),transfer=$("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(o.className).css({top:startPosition.top-fixTop,left:startPosition.left-fixLeft,height:elem.innerHeight(),width:elem.innerWidth(),position:targetFixed?"fixed":"absolute"}).animate(animation,o.duration,o.easing,function(){transfer.remove();done();});};})(jQuery);(function($,undefined){$.widget("ui.menu",{version:"1.10.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;this.mouseHandled=false;this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,$.proxy(function(event){if(this.options.disabled){event.preventDefault();}},this));if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true");}
this._on({"mousedown .ui-menu-item > a":function(event){event.preventDefault();},"click .ui-state-disabled > a":function(event){event.preventDefault();},"click .ui-menu-item:has(a)":function(event){var target=$(event.target).closest(".ui-menu-item");if(!this.mouseHandled&&target.not(".ui-state-disabled").length){this.mouseHandled=true;this.select(event);if(target.has(".ui-menu").length){this.expand(event);}else if(!this.element.is(":focus")){this.element.trigger("focus",[true]);if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer);}}}},"mouseenter .ui-menu-item":function(event){var target=$(event.currentTarget);target.siblings().children(".ui-state-active").removeClass("ui-state-active");this.focus(event,target);},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(event,keepActiveItem){var item=this.active||this.element.children(".ui-menu-item").eq(0);if(!keepActiveItem){this.focus(event,item);}},blur:function(event){this._delay(function(){if(!$.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(event);}});},keydown:"_keydown"});this.refresh();this._on(this.document,{click:function(event){if(!$(event.target).closest(".ui-menu").length){this.collapseAll(event);}
this.mouseHandled=false;}});},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var elem=$(this);if(elem.data("ui-menu-submenu-carat")){elem.remove();}});this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content");},_keydown:function(event){var match,prev,character,skip,regex,preventDefault=true;function escape(value){return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");}
switch(event.keyCode){case $.ui.keyCode.PAGE_UP:this.previousPage(event);break;case $.ui.keyCode.PAGE_DOWN:this.nextPage(event);break;case $.ui.keyCode.HOME:this._move("first","first",event);break;case $.ui.keyCode.END:this._move("last","last",event);break;case $.ui.keyCode.UP:this.previous(event);break;case $.ui.keyCode.DOWN:this.next(event);break;case $.ui.keyCode.LEFT:this.collapse(event);break;case $.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(event);}
break;case $.ui.keyCode.ENTER:case $.ui.keyCode.SPACE:this._activate(event);break;case $.ui.keyCode.ESCAPE:this.collapse(event);break;default:preventDefault=false;prev=this.previousFilter||"";character=String.fromCharCode(event.keyCode);skip=false;clearTimeout(this.filterTimer);if(character===prev){skip=true;}else{character=prev+character;}
regex=new RegExp("^"+escape(character),"i");match=this.activeMenu.children(".ui-menu-item").filter(function(){return regex.test($(this).children("a").text());});match=skip&&match.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):match;if(!match.length){character=String.fromCharCode(event.keyCode);regex=new RegExp("^"+escape(character),"i");match=this.activeMenu.children(".ui-menu-item").filter(function(){return regex.test($(this).children("a").text());});}
if(match.length){this.focus(event,match);if(match.length>1){this.previousFilter=character;this.filterTimer=this._delay(function(){delete this.previousFilter;},1000);}else{delete this.previousFilter;}}else{delete this.previousFilter;}}
if(preventDefault){event.preventDefault();}},_activate:function(event){if(!this.active.is(".ui-state-disabled")){if(this.active.children("a[aria-haspopup='true']").length){this.expand(event);}else{this.select(event);}}},refresh:function(){var menus,icon=this.options.icons.submenu,submenus=this.element.find(this.options.menus);submenus.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var menu=$(this),item=menu.prev("a"),submenuCarat=$("<span>").addClass("ui-menu-icon ui-icon "+icon).data("ui-menu-submenu-carat",true);item.attr("aria-haspopup","true").prepend(submenuCarat);menu.attr("aria-labelledby",item.attr("id"));});menus=submenus.add(this.element);menus.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()});menus.children(":not(.ui-menu-item)").each(function(){var item=$(this);if(!/[^\-\u2014\u2013\s]/.test(item.text())){item.addClass("ui-widget-content ui-menu-divider");}});menus.children(".ui-state-disabled").attr("aria-disabled","true");if(this.active&&!$.contains(this.element[0],this.active[0])){this.blur();}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role];},_setOption:function(key,value){if(key==="icons"){this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(value.submenu);}
this._super(key,value);},focus:function(event,item){var nested,focused;this.blur(event,event&&event.type==="focus");this._scrollIntoView(item);this.active=item.first();focused=this.active.children("a").addClass("ui-state-focus");if(this.options.role){this.element.attr("aria-activedescendant",focused.attr("id"));}
this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");if(event&&event.type==="keydown"){this._close();}else{this.timer=this._delay(function(){this._close();},this.delay);}
nested=item.children(".ui-menu");if(nested.length&&(/^mouse/.test(event.type))){this._startOpening(nested);}
this.activeMenu=item.parent();this._trigger("focus",event,{item:item});},_scrollIntoView:function(item){var borderTop,paddingTop,offset,scroll,elementHeight,itemHeight;if(this._hasScroll()){borderTop=parseFloat($.css(this.activeMenu[0],"borderTopWidth"))||0;paddingTop=parseFloat($.css(this.activeMenu[0],"paddingTop"))||0;offset=item.offset().top-this.activeMenu.offset().top-borderTop-paddingTop;scroll=this.activeMenu.scrollTop();elementHeight=this.activeMenu.height();itemHeight=item.height();if(offset<0){this.activeMenu.scrollTop(scroll+offset);}else if(offset+itemHeight>elementHeight){this.activeMenu.scrollTop(scroll+offset-elementHeight+itemHeight);}}},blur:function(event,fromFocus){if(!fromFocus){clearTimeout(this.timer);}
if(!this.active){return;}
this.active.children("a").removeClass("ui-state-focus");this.active=null;this._trigger("blur",event,{item:this.active});},_startOpening:function(submenu){clearTimeout(this.timer);if(submenu.attr("aria-hidden")!=="true"){return;}
this.timer=this._delay(function(){this._close();this._open(submenu);},this.delay);},_open:function(submenu){var position=$.extend({of:this.active},this.options.position);clearTimeout(this.timer);this.element.find(".ui-menu").not(submenu.parents(".ui-menu")).hide().attr("aria-hidden","true");submenu.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(position);},collapseAll:function(event,all){clearTimeout(this.timer);this.timer=this._delay(function(){var currentMenu=all?this.element:$(event&&event.target).closest(this.element.find(".ui-menu"));if(!currentMenu.length){currentMenu=this.element;}
this._close(currentMenu);this.blur(event);this.activeMenu=currentMenu;},this.delay);},_close:function(startMenu){if(!startMenu){startMenu=this.active?this.active.parent():this.element;}
startMenu.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active");},collapse:function(event){var newItem=this.active&&this.active.parent().closest(".ui-menu-item",this.element);if(newItem&&newItem.length){this._close();this.focus(event,newItem);}},expand:function(event){var newItem=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();if(newItem&&newItem.length){this._open(newItem.parent());this._delay(function(){this.focus(event,newItem);});}},next:function(event){this._move("next","first",event);},previous:function(event){this._move("prev","last",event);},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length;},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length;},_move:function(direction,filter,event){var next;if(this.active){if(direction==="first"||direction==="last"){next=this.active
[direction==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1);}else{next=this.active
[direction+"All"](".ui-menu-item").eq(0);}}
if(!next||!next.length||!this.active){next=this.activeMenu.children(".ui-menu-item")[filter]();}
this.focus(event,next);},nextPage:function(event){var item,base,height;if(!this.active){this.next(event);return;}
if(this.isLastItem()){return;}
if(this._hasScroll()){base=this.active.offset().top;height=this.element.height();this.active.nextAll(".ui-menu-item").each(function(){item=$(this);return item.offset().top-base-height<0;});this.focus(event,item);}else{this.focus(event,this.activeMenu.children(".ui-menu-item")
[!this.active?"first":"last"]());}},previousPage:function(event){var item,base,height;if(!this.active){this.next(event);return;}
if(this.isFirstItem()){return;}
if(this._hasScroll()){base=this.active.offset().top;height=this.element.height();this.active.prevAll(".ui-menu-item").each(function(){item=$(this);return item.offset().top-base+height>0;});this.focus(event,item);}else{this.focus(event,this.activeMenu.children(".ui-menu-item").first());}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight");},select:function(event){this.active=this.active||$(event.target).closest(".ui-menu-item");var ui={item:this.active};if(!this.active.has(".ui-menu").length){this.collapseAll(event,true);}
this._trigger("select",event,ui);}});}(jQuery));(function($,undefined){$.ui=$.ui||{};var cachedScrollbarWidth,max=Math.max,abs=Math.abs,round=Math.round,rhorizontal=/left|center|right/,rvertical=/top|center|bottom/,roffset=/[\+\-]\d+(\.[\d]+)?%?/,rposition=/^\w+/,rpercent=/%$/,_position=$.fn.position;function getOffsets(offsets,width,height){return[parseFloat(offsets[0])*(rpercent.test(offsets[0])?width/100:1),parseFloat(offsets[1])*(rpercent.test(offsets[1])?height/100:1)];}
function parseCss(element,property){return parseInt($.css(element,property),10)||0;}
function getDimensions(elem){var raw=elem[0];if(raw.nodeType===9){return{width:elem.width(),height:elem.height(),offset:{top:0,left:0}};}
if($.isWindow(raw)){return{width:elem.width(),height:elem.height(),offset:{top:elem.scrollTop(),left:elem.scrollLeft()}};}
if(raw.preventDefault){return{width:0,height:0,offset:{top:raw.pageY,left:raw.pageX}};}
return{width:elem.outerWidth(),height:elem.outerHeight(),offset:elem.offset()};}
$.position={scrollbarWidth:function(){if(cachedScrollbarWidth!==undefined){return cachedScrollbarWidth;}
var w1,w2,div=$("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),innerDiv=div.children()[0];$("body").append(div);w1=innerDiv.offsetWidth;div.css("overflow","scroll");w2=innerDiv.offsetWidth;if(w1===w2){w2=div[0].clientWidth;}
div.remove();return(cachedScrollbarWidth=w1-w2);},getScrollInfo:function(within){var overflowX=within.isWindow?"":within.element.css("overflow-x"),overflowY=within.isWindow?"":within.element.css("overflow-y"),hasOverflowX=overflowX==="scroll"||(overflowX==="auto"&&within.width<within.element[0].scrollWidth),hasOverflowY=overflowY==="scroll"||(overflowY==="auto"&&within.height<within.element[0].scrollHeight);return{width:hasOverflowY?$.position.scrollbarWidth():0,height:hasOverflowX?$.position.scrollbarWidth():0};},getWithinInfo:function(element){var withinElement=$(element||window),isWindow=$.isWindow(withinElement[0]);return{element:withinElement,isWindow:isWindow,offset:withinElement.offset()||{left:0,top:0},scrollLeft:withinElement.scrollLeft(),scrollTop:withinElement.scrollTop(),width:isWindow?withinElement.width():withinElement.outerWidth(),height:isWindow?withinElement.height():withinElement.outerHeight()};}};$.fn.position=function(options){if(!options||!options.of){return _position.apply(this,arguments);}
options=$.extend({},options);var atOffset,targetWidth,targetHeight,targetOffset,basePosition,dimensions,target=$(options.of),within=$.position.getWithinInfo(options.within),scrollInfo=$.position.getScrollInfo(within),collision=(options.collision||"flip").split(" "),offsets={};dimensions=getDimensions(target);if(target[0].preventDefault){options.at="left top";}
targetWidth=dimensions.width;targetHeight=dimensions.height;targetOffset=dimensions.offset;basePosition=$.extend({},targetOffset);$.each(["my","at"],function(){var pos=(options[this]||"").split(" "),horizontalOffset,verticalOffset;if(pos.length===1){pos=rhorizontal.test(pos[0])?pos.concat(["center"]):rvertical.test(pos[0])?["center"].concat(pos):["center","center"];}
pos[0]=rhorizontal.test(pos[0])?pos[0]:"center";pos[1]=rvertical.test(pos[1])?pos[1]:"center";horizontalOffset=roffset.exec(pos[0]);verticalOffset=roffset.exec(pos[1]);offsets[this]=[horizontalOffset?horizontalOffset[0]:0,verticalOffset?verticalOffset[0]:0];options[this]=[rposition.exec(pos[0])[0],rposition.exec(pos[1])[0]];});if(collision.length===1){collision[1]=collision[0];}
if(options.at[0]==="right"){basePosition.left+=targetWidth;}else if(options.at[0]==="center"){basePosition.left+=targetWidth/2;}
if(options.at[1]==="bottom"){basePosition.top+=targetHeight;}else if(options.at[1]==="center"){basePosition.top+=targetHeight/2;}
atOffset=getOffsets(offsets.at,targetWidth,targetHeight);basePosition.left+=atOffset[0];basePosition.top+=atOffset[1];return this.each(function(){var collisionPosition,using,elem=$(this),elemWidth=elem.outerWidth(),elemHeight=elem.outerHeight(),marginLeft=parseCss(this,"marginLeft"),marginTop=parseCss(this,"marginTop"),collisionWidth=elemWidth+marginLeft+parseCss(this,"marginRight")+scrollInfo.width,collisionHeight=elemHeight+marginTop+parseCss(this,"marginBottom")+scrollInfo.height,position=$.extend({},basePosition),myOffset=getOffsets(offsets.my,elem.outerWidth(),elem.outerHeight());if(options.my[0]==="right"){position.left-=elemWidth;}else if(options.my[0]==="center"){position.left-=elemWidth/2;}
if(options.my[1]==="bottom"){position.top-=elemHeight;}else if(options.my[1]==="center"){position.top-=elemHeight/2;}
position.left+=myOffset[0];position.top+=myOffset[1];if(!$.support.offsetFractions){position.left=round(position.left);position.top=round(position.top);}
collisionPosition={marginLeft:marginLeft,marginTop:marginTop};$.each(["left","top"],function(i,dir){if($.ui.position[collision[i]]){$.ui.position[collision[i]][dir](position,{targetWidth:targetWidth,targetHeight:targetHeight,elemWidth:elemWidth,elemHeight:elemHeight,collisionPosition:collisionPosition,collisionWidth:collisionWidth,collisionHeight:collisionHeight,offset:[atOffset[0]+myOffset[0],atOffset[1]+myOffset[1]],my:options.my,at:options.at,within:within,elem:elem});}});if(options.using){using=function(props){var left=targetOffset.left-position.left,right=left+targetWidth-elemWidth,top=targetOffset.top-position.top,bottom=top+targetHeight-elemHeight,feedback={target:{element:target,left:targetOffset.left,top:targetOffset.top,width:targetWidth,height:targetHeight},element:{element:elem,left:position.left,top:position.top,width:elemWidth,height:elemHeight},horizontal:right<0?"left":left>0?"right":"center",vertical:bottom<0?"top":top>0?"bottom":"middle"};if(targetWidth<elemWidth&&abs(left+right)<targetWidth){feedback.horizontal="center";}
if(targetHeight<elemHeight&&abs(top+bottom)<targetHeight){feedback.vertical="middle";}
if(max(abs(left),abs(right))>max(abs(top),abs(bottom))){feedback.important="horizontal";}else{feedback.important="vertical";}
options.using.call(this,props,feedback);};}
elem.offset($.extend(position,{using:using}));});};$.ui.position={fit:{left:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollLeft:within.offset.left,outerWidth=within.width,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=withinOffset-collisionPosLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-withinOffset,newOverRight;if(data.collisionWidth>outerWidth){if(overLeft>0&&overRight<=0){newOverRight=position.left+overLeft+data.collisionWidth-outerWidth-withinOffset;position.left+=overLeft-newOverRight;}else if(overRight>0&&overLeft<=0){position.left=withinOffset;}else{if(overLeft>overRight){position.left=withinOffset+outerWidth-data.collisionWidth;}else{position.left=withinOffset;}}}else if(overLeft>0){position.left+=overLeft;}else if(overRight>0){position.left-=overRight;}else{position.left=max(position.left-collisionPosLeft,position.left);}},top:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollTop:within.offset.top,outerHeight=data.within.height,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=withinOffset-collisionPosTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-withinOffset,newOverBottom;if(data.collisionHeight>outerHeight){if(overTop>0&&overBottom<=0){newOverBottom=position.top+overTop+data.collisionHeight-outerHeight-withinOffset;position.top+=overTop-newOverBottom;}else if(overBottom>0&&overTop<=0){position.top=withinOffset;}else{if(overTop>overBottom){position.top=withinOffset+outerHeight-data.collisionHeight;}else{position.top=withinOffset;}}}else if(overTop>0){position.top+=overTop;}else if(overBottom>0){position.top-=overBottom;}else{position.top=max(position.top-collisionPosTop,position.top);}}},flip:{left:function(position,data){var within=data.within,withinOffset=within.offset.left+within.scrollLeft,outerWidth=within.width,offsetLeft=within.isWindow?within.scrollLeft:within.offset.left,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=collisionPosLeft-offsetLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-offsetLeft,myOffset=data.my[0]==="left"?-data.elemWidth:data.my[0]==="right"?data.elemWidth:0,atOffset=data.at[0]==="left"?data.targetWidth:data.at[0]==="right"?-data.targetWidth:0,offset=-2*data.offset[0],newOverRight,newOverLeft;if(overLeft<0){newOverRight=position.left+myOffset+atOffset+offset+data.collisionWidth-outerWidth-withinOffset;if(newOverRight<0||newOverRight<abs(overLeft)){position.left+=myOffset+atOffset+offset;}}
else if(overRight>0){newOverLeft=position.left-data.collisionPosition.marginLeft+myOffset+atOffset+offset-offsetLeft;if(newOverLeft>0||abs(newOverLeft)<overRight){position.left+=myOffset+atOffset+offset;}}},top:function(position,data){var within=data.within,withinOffset=within.offset.top+within.scrollTop,outerHeight=within.height,offsetTop=within.isWindow?within.scrollTop:within.offset.top,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=collisionPosTop-offsetTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-offsetTop,top=data.my[1]==="top",myOffset=top?-data.elemHeight:data.my[1]==="bottom"?data.elemHeight:0,atOffset=data.at[1]==="top"?data.targetHeight:data.at[1]==="bottom"?-data.targetHeight:0,offset=-2*data.offset[1],newOverTop,newOverBottom;if(overTop<0){newOverBottom=position.top+myOffset+atOffset+offset+data.collisionHeight-outerHeight-withinOffset;if((position.top+myOffset+atOffset+offset)>overTop&&(newOverBottom<0||newOverBottom<abs(overTop))){position.top+=myOffset+atOffset+offset;}}
else if(overBottom>0){newOverTop=position.top-data.collisionPosition.marginTop+myOffset+atOffset+offset-offsetTop;if((position.top+myOffset+atOffset+offset)>overBottom&&(newOverTop>0||abs(newOverTop)<overBottom)){position.top+=myOffset+atOffset+offset;}}}},flipfit:{left:function(){$.ui.position.flip.left.apply(this,arguments);$.ui.position.fit.left.apply(this,arguments);},top:function(){$.ui.position.flip.top.apply(this,arguments);$.ui.position.fit.top.apply(this,arguments);}}};(function(){var testElement,testElementParent,testElementStyle,offsetLeft,i,body=document.getElementsByTagName("body")[0],div=document.createElement("div");testElement=document.createElement(body?"div":"body");testElementStyle={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};if(body){$.extend(testElementStyle,{position:"absolute",left:"-1000px",top:"-1000px"});}
for(i in testElementStyle){testElement.style[i]=testElementStyle[i];}
testElement.appendChild(div);testElementParent=body||document.documentElement;testElementParent.insertBefore(testElement,testElementParent.firstChild);div.style.cssText="position: absolute; left: 10.7432222px;";offsetLeft=$(div).offset().left;$.support.offsetFractions=offsetLeft>10&&offsetLeft<11;testElement.innerHTML="";testElementParent.removeChild(testElement);})();}(jQuery));(function($,undefined){$.widget("ui.progressbar",{version:"1.10.2",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue();this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min});this.valueDiv=$("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this._refreshValue();},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.valueDiv.remove();},value:function(newValue){if(newValue===undefined){return this.options.value;}
this.options.value=this._constrainedValue(newValue);this._refreshValue();},_constrainedValue:function(newValue){if(newValue===undefined){newValue=this.options.value;}
this.indeterminate=newValue===false;if(typeof newValue!=="number"){newValue=0;}
return this.indeterminate?false:Math.min(this.options.max,Math.max(this.min,newValue));},_setOptions:function(options){var value=options.value;delete options.value;this._super(options);this.options.value=this._constrainedValue(value);this._refreshValue();},_setOption:function(key,value){if(key==="max"){value=Math.max(this.min,value);}
this._super(key,value);},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min);},_refreshValue:function(){var value=this.options.value,percentage=this._percentage();this.valueDiv.toggle(this.indeterminate||value>this.min).toggleClass("ui-corner-right",value===this.options.max).width(percentage.toFixed(0)+"%");this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate);if(this.indeterminate){this.element.removeAttr("aria-valuenow");if(!this.overlayDiv){this.overlayDiv=$("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv);}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":value});if(this.overlayDiv){this.overlayDiv.remove();this.overlayDiv=null;}}
if(this.oldValue!==value){this.oldValue=value;this._trigger("change");}
if(value===this.options.max){this._trigger("complete");}}});})(jQuery);(function($,undefined){var numPages=5;$.widget("ui.slider",$.ui.mouse,{version:"1.10.2",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider"+" ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all");this._refresh();this._setOption("disabled",this.options.disabled);this._animateOff=false;},_refresh:function(){this._createRange();this._createHandles();this._setupEvents();this._refreshValue();},_createHandles:function(){var i,handleCount,options=this.options,existingHandles=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),handle="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",handles=[];handleCount=(options.values&&options.values.length)||1;if(existingHandles.length>handleCount){existingHandles.slice(handleCount).remove();existingHandles=existingHandles.slice(0,handleCount);}
for(i=existingHandles.length;i<handleCount;i++){handles.push(handle);}
this.handles=existingHandles.add($(handles.join("")).appendTo(this.element));this.handle=this.handles.eq(0);this.handles.each(function(i){$(this).data("ui-slider-handle-index",i);});},_createRange:function(){var options=this.options,classes="";if(options.range){if(options.range===true){if(!options.values){options.values=[this._valueMin(),this._valueMin()];}else if(options.values.length&&options.values.length!==2){options.values=[options.values[0],options.values[0]];}else if($.isArray(options.values)){options.values=options.values.slice(0);}}
if(!this.range||!this.range.length){this.range=$("<div></div>").appendTo(this.element);classes="ui-slider-range"+" ui-widget-header ui-corner-all";}else{this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({"left":"","bottom":""});}
this.range.addClass(classes+
((options.range==="min"||options.range==="max")?" ui-slider-range-"+options.range:""));}else{this.range=$([]);}},_setupEvents:function(){var elements=this.handles.add(this.range).filter("a");this._off(elements);this._on(elements,this._handleEvents);this._hoverable(elements);this._focusable(elements);},_destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider"+" ui-slider-horizontal"+" ui-slider-vertical"+" ui-widget"+" ui-widget-content"+" ui-corner-all");this._mouseDestroy();},_mouseCapture:function(event){var position,normValue,distance,closestHandle,index,allowed,offset,mouseOverHandle,that=this,o=this.options;if(o.disabled){return false;}
this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();position={x:event.pageX,y:event.pageY};normValue=this._normValueFromMouse(position);distance=this._valueMax()-this._valueMin()+1;this.handles.each(function(i){var thisDistance=Math.abs(normValue-that.values(i));if((distance>thisDistance)||(distance===thisDistance&&(i===that._lastChangedValue||that.values(i)===o.min))){distance=thisDistance;closestHandle=$(this);index=i;}});allowed=this._start(event,index);if(allowed===false){return false;}
this._mouseSliding=true;this._handleIndex=index;closestHandle.addClass("ui-state-active").focus();offset=closestHandle.offset();mouseOverHandle=!$(event.target).parents().addBack().is(".ui-slider-handle");this._clickOffset=mouseOverHandle?{left:0,top:0}:{left:event.pageX-offset.left-(closestHandle.width()/2),top:event.pageY-offset.top-
(closestHandle.height()/2)-
(parseInt(closestHandle.css("borderTopWidth"),10)||0)-
(parseInt(closestHandle.css("borderBottomWidth"),10)||0)+
(parseInt(closestHandle.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(event,index,normValue);}
this._animateOff=true;return true;},_mouseStart:function(){return true;},_mouseDrag:function(event){var position={x:event.pageX,y:event.pageY},normValue=this._normValueFromMouse(position);this._slide(event,this._handleIndex,normValue);return false;},_mouseStop:function(event){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(event,this._handleIndex);this._change(event,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false;},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal";},_normValueFromMouse:function(position){var pixelTotal,pixelMouse,percentMouse,valueTotal,valueMouse;if(this.orientation==="horizontal"){pixelTotal=this.elementSize.width;pixelMouse=position.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0);}else{pixelTotal=this.elementSize.height;pixelMouse=position.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0);}
percentMouse=(pixelMouse/pixelTotal);if(percentMouse>1){percentMouse=1;}
if(percentMouse<0){percentMouse=0;}
if(this.orientation==="vertical"){percentMouse=1-percentMouse;}
valueTotal=this._valueMax()-this._valueMin();valueMouse=this._valueMin()+percentMouse*valueTotal;return this._trimAlignValue(valueMouse);},_start:function(event,index){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values();}
return this._trigger("start",event,uiHash);},_slide:function(event,index,newVal){var otherVal,newValues,allowed;if(this.options.values&&this.options.values.length){otherVal=this.values(index?0:1);if((this.options.values.length===2&&this.options.range===true)&&((index===0&&newVal>otherVal)||(index===1&&newVal<otherVal))){newVal=otherVal;}
if(newVal!==this.values(index)){newValues=this.values();newValues[index]=newVal;allowed=this._trigger("slide",event,{handle:this.handles[index],value:newVal,values:newValues});otherVal=this.values(index?0:1);if(allowed!==false){this.values(index,newVal,true);}}}else{if(newVal!==this.value()){allowed=this._trigger("slide",event,{handle:this.handles[index],value:newVal});if(allowed!==false){this.value(newVal);}}}},_stop:function(event,index){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values();}
this._trigger("stop",event,uiHash);},_change:function(event,index){if(!this._keySliding&&!this._mouseSliding){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values();}
this._lastChangedValue=index;this._trigger("change",event,uiHash);}},value:function(newValue){if(arguments.length){this.options.value=this._trimAlignValue(newValue);this._refreshValue();this._change(null,0);return;}
return this._value();},values:function(index,newValue){var vals,newValues,i;if(arguments.length>1){this.options.values[index]=this._trimAlignValue(newValue);this._refreshValue();this._change(null,index);return;}
if(arguments.length){if($.isArray(arguments[0])){vals=this.options.values;newValues=arguments[0];for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(newValues[i]);this._change(null,i);}
this._refreshValue();}else{if(this.options.values&&this.options.values.length){return this._values(index);}else{return this.value();}}}else{return this._values();}},_setOption:function(key,value){var i,valsLength=0;if(key==="range"&&this.options.range===true){if(value==="min"){this.options.value=this._values(0);this.options.values=null;}else if(value==="max"){this.options.value=this._values(this.options.values.length-1);this.options.values=null;}}
if($.isArray(this.options.values)){valsLength=this.options.values.length;}
$.Widget.prototype._setOption.apply(this,arguments);switch(key){case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(i=0;i<valsLength;i+=1){this._change(null,i);}
this._animateOff=false;break;case"min":case"max":this._animateOff=true;this._refreshValue();this._animateOff=false;break;case"range":this._animateOff=true;this._refresh();this._animateOff=false;break;}},_value:function(){var val=this.options.value;val=this._trimAlignValue(val);return val;},_values:function(index){var val,vals,i;if(arguments.length){val=this.options.values[index];val=this._trimAlignValue(val);return val;}else if(this.options.values&&this.options.values.length){vals=this.options.values.slice();for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(vals[i]);}
return vals;}else{return[];}},_trimAlignValue:function(val){if(val<=this._valueMin()){return this._valueMin();}
if(val>=this._valueMax()){return this._valueMax();}
var step=(this.options.step>0)?this.options.step:1,valModStep=(val-this._valueMin())%step,alignValue=val-valModStep;if(Math.abs(valModStep)*2>=step){alignValue+=(valModStep>0)?step:(-step);}
return parseFloat(alignValue.toFixed(5));},_valueMin:function(){return this.options.min;},_valueMax:function(){return this.options.max;},_refreshValue:function(){var lastValPercent,valPercent,value,valueMin,valueMax,oRange=this.options.range,o=this.options,that=this,animate=(!this._animateOff)?o.animate:false,_set={};if(this.options.values&&this.options.values.length){this.handles.each(function(i){valPercent=(that.values(i)-that._valueMin())/(that._valueMax()-that._valueMin())*100;_set[that.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";$(this).stop(1,1)[animate?"animate":"css"](_set,o.animate);if(that.options.range===true){if(that.orientation==="horizontal"){if(i===0){that.range.stop(1,1)[animate?"animate":"css"]({left:valPercent+"%"},o.animate);}
if(i===1){that.range[animate?"animate":"css"]({width:(valPercent-lastValPercent)+"%"},{queue:false,duration:o.animate});}}else{if(i===0){that.range.stop(1,1)[animate?"animate":"css"]({bottom:(valPercent)+"%"},o.animate);}
if(i===1){that.range[animate?"animate":"css"]({height:(valPercent-lastValPercent)+"%"},{queue:false,duration:o.animate});}}}
lastValPercent=valPercent;});}else{value=this.value();valueMin=this._valueMin();valueMax=this._valueMax();valPercent=(valueMax!==valueMin)?(value-valueMin)/(valueMax-valueMin)*100:0;_set[this.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";this.handle.stop(1,1)[animate?"animate":"css"](_set,o.animate);if(oRange==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[animate?"animate":"css"]({width:valPercent+"%"},o.animate);}
if(oRange==="max"&&this.orientation==="horizontal"){this.range[animate?"animate":"css"]({width:(100-valPercent)+"%"},{queue:false,duration:o.animate});}
if(oRange==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[animate?"animate":"css"]({height:valPercent+"%"},o.animate);}
if(oRange==="max"&&this.orientation==="vertical"){this.range[animate?"animate":"css"]({height:(100-valPercent)+"%"},{queue:false,duration:o.animate});}}},_handleEvents:{keydown:function(event){var allowed,curVal,newVal,step,index=$(event.target).data("ui-slider-handle-index");switch(event.keyCode){case $.ui.keyCode.HOME:case $.ui.keyCode.END:case $.ui.keyCode.PAGE_UP:case $.ui.keyCode.PAGE_DOWN:case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:event.preventDefault();if(!this._keySliding){this._keySliding=true;$(event.target).addClass("ui-state-active");allowed=this._start(event,index);if(allowed===false){return;}}
break;}
step=this.options.step;if(this.options.values&&this.options.values.length){curVal=newVal=this.values(index);}else{curVal=newVal=this.value();}
switch(event.keyCode){case $.ui.keyCode.HOME:newVal=this._valueMin();break;case $.ui.keyCode.END:newVal=this._valueMax();break;case $.ui.keyCode.PAGE_UP:newVal=this._trimAlignValue(curVal+((this._valueMax()-this._valueMin())/numPages));break;case $.ui.keyCode.PAGE_DOWN:newVal=this._trimAlignValue(curVal-((this._valueMax()-this._valueMin())/numPages));break;case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:if(curVal===this._valueMax()){return;}
newVal=this._trimAlignValue(curVal+step);break;case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:if(curVal===this._valueMin()){return;}
newVal=this._trimAlignValue(curVal-step);break;}
this._slide(event,index,newVal);},click:function(event){event.preventDefault();},keyup:function(event){var index=$(event.target).data("ui-slider-handle-index");if(this._keySliding){this._keySliding=false;this._stop(event,index);this._change(event,index);$(event.target).removeClass("ui-state-active");}}}});}(jQuery));(function($){function modifier(fn){return function(){var previous=this.element.val();fn.apply(this,arguments);this._refresh();if(previous!==this.element.val()){this._trigger("change");}};}
$.widget("ui.spinner",{version:"1.10.2",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);this._setOption("min",this.options.min);this._setOption("step",this.options.step);this._value(this.element.val(),true);this._draw();this._on(this._events);this._refresh();this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete");}});},_getCreateOptions:function(){var options={},element=this.element;$.each(["min","max","step"],function(i,option){var value=element.attr(option);if(value!==undefined&&value.length){options[option]=value;}});return options;},_events:{keydown:function(event){if(this._start(event)&&this._keydown(event)){event.preventDefault();}},keyup:"_stop",focus:function(){this.previous=this.element.val();},blur:function(event){if(this.cancelBlur){delete this.cancelBlur;return;}
this._stop();this._refresh();if(this.previous!==this.element.val()){this._trigger("change",event);}},mousewheel:function(event,delta){if(!delta){return;}
if(!this.spinning&&!this._start(event)){return false;}
this._spin((delta>0?1:-1)*this.options.step,event);clearTimeout(this.mousewheelTimer);this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(event);}},100);event.preventDefault();},"mousedown .ui-spinner-button":function(event){var previous;previous=this.element[0]===this.document[0].activeElement?this.previous:this.element.val();function checkFocus(){var isActive=this.element[0]===this.document[0].activeElement;if(!isActive){this.element.focus();this.previous=previous;this._delay(function(){this.previous=previous;});}}
event.preventDefault();checkFocus.call(this);this.cancelBlur=true;this._delay(function(){delete this.cancelBlur;checkFocus.call(this);});if(this._start(event)===false){return;}
this._repeat(null,$(event.currentTarget).hasClass("ui-spinner-up")?1:-1,event);},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(event){if(!$(event.currentTarget).hasClass("ui-state-active")){return;}
if(this._start(event)===false){return false;}
this._repeat(null,$(event.currentTarget).hasClass("ui-spinner-up")?1:-1,event);},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var uiSpinner=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton");this.buttons=uiSpinner.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");if(this.buttons.height()>Math.ceil(uiSpinner.height()*0.5)&&uiSpinner.height()>0){uiSpinner.height(uiSpinner.height());}
if(this.options.disabled){this.disable();}},_keydown:function(event){var options=this.options,keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.UP:this._repeat(null,1,event);return true;case keyCode.DOWN:this._repeat(null,-1,event);return true;case keyCode.PAGE_UP:this._repeat(null,options.page,event);return true;case keyCode.PAGE_DOWN:this._repeat(null,-options.page,event);return true;}
return false;},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";},_buttonHtml:function(){return""+"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'>"+"<span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>";},_start:function(event){if(!this.spinning&&this._trigger("start",event)===false){return false;}
if(!this.counter){this.counter=1;}
this.spinning=true;return true;},_repeat:function(i,steps,event){i=i||500;clearTimeout(this.timer);this.timer=this._delay(function(){this._repeat(40,steps,event);},i);this._spin(steps*this.options.step,event);},_spin:function(step,event){var value=this.value()||0;if(!this.counter){this.counter=1;}
value=this._adjustValue(value+step*this._increment(this.counter));if(!this.spinning||this._trigger("spin",event,{value:value})!==false){this._value(value);this.counter++;}},_increment:function(i){var incremental=this.options.incremental;if(incremental){return $.isFunction(incremental)?incremental(i):Math.floor(i*i*i/50000-i*i/500+17*i/200+1);}
return 1;},_precision:function(){var precision=this._precisionOf(this.options.step);if(this.options.min!==null){precision=Math.max(precision,this._precisionOf(this.options.min));}
return precision;},_precisionOf:function(num){var str=num.toString(),decimal=str.indexOf(".");return decimal===-1?0:str.length-decimal-1;},_adjustValue:function(value){var base,aboveMin,options=this.options;base=options.min!==null?options.min:0;aboveMin=value-base;aboveMin=Math.round(aboveMin/options.step)*options.step;value=base+aboveMin;value=parseFloat(value.toFixed(this._precision()));if(options.max!==null&&value>options.max){return options.max;}
if(options.min!==null&&value<options.min){return options.min;}
return value;},_stop:function(event){if(!this.spinning){return;}
clearTimeout(this.timer);clearTimeout(this.mousewheelTimer);this.counter=0;this.spinning=false;this._trigger("stop",event);},_setOption:function(key,value){if(key==="culture"||key==="numberFormat"){var prevValue=this._parse(this.element.val());this.options[key]=value;this.element.val(this._format(prevValue));return;}
if(key==="max"||key==="min"||key==="step"){if(typeof value==="string"){value=this._parse(value);}}
if(key==="icons"){this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(value.up);this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(value.down);}
this._super(key,value);if(key==="disabled"){if(value){this.element.prop("disabled",true);this.buttons.button("disable");}else{this.element.prop("disabled",false);this.buttons.button("enable");}}},_setOptions:modifier(function(options){this._super(options);this._value(this.element.val());}),_parse:function(val){if(typeof val==="string"&&val!==""){val=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(val,10,this.options.culture):+val;}
return val===""||isNaN(val)?null:val;},_format:function(value){if(value===""){return"";}
return window.Globalize&&this.options.numberFormat?Globalize.format(value,this.options.numberFormat,this.options.culture):value;},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())});},_value:function(value,allowAny){var parsed;if(value!==""){parsed=this._parse(value);if(parsed!==null){if(!allowAny){parsed=this._adjustValue(parsed);}
value=this._format(parsed);}}
this.element.val(value);this._refresh();},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.uiSpinner.replaceWith(this.element);},stepUp:modifier(function(steps){this._stepUp(steps);}),_stepUp:function(steps){if(this._start()){this._spin((steps||1)*this.options.step);this._stop();}},stepDown:modifier(function(steps){this._stepDown(steps);}),_stepDown:function(steps){if(this._start()){this._spin((steps||1)*-this.options.step);this._stop();}},pageUp:modifier(function(pages){this._stepUp((pages||1)*this.options.page);}),pageDown:modifier(function(pages){this._stepDown((pages||1)*this.options.page);}),value:function(newVal){if(!arguments.length){return this._parse(this.element.val());}
modifier(this._value).call(this,newVal);},widget:function(){return this.uiSpinner;}});}(jQuery));(function($,undefined){var tabId=0,rhash=/#.*$/;function getNextTabId(){return++tabId;}
function isLocal(anchor){return anchor.hash.length>1&&decodeURIComponent(anchor.href.replace(rhash,""))===decodeURIComponent(location.href.replace(rhash,""));}
$.widget("ui.tabs",{version:"1.10.2",delay:300,options:{active:null,collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var that=this,options=this.options;this.running=false;this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",options.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(event){if($(this).is(".ui-state-disabled")){event.preventDefault();}}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if($(this).closest("li").is(".ui-state-disabled")){this.blur();}});this._processTabs();options.active=this._initialActive();if($.isArray(options.disabled)){options.disabled=$.unique(options.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"),function(li){return that.tabs.index(li);}))).sort();}
if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(options.active);}else{this.active=$();}
this._refresh();if(this.active.length){this.load(options.active);}},_initialActive:function(){var active=this.options.active,collapsible=this.options.collapsible,locationHash=location.hash.substring(1);if(active===null){if(locationHash){this.tabs.each(function(i,tab){if($(tab).attr("aria-controls")===locationHash){active=i;return false;}});}
if(active===null){active=this.tabs.index(this.tabs.filter(".ui-tabs-active"));}
if(active===null||active===-1){active=this.tabs.length?0:false;}}
if(active!==false){active=this.tabs.index(this.tabs.eq(active));if(active===-1){active=collapsible?false:0;}}
if(!collapsible&&active===false&&this.anchors.length){active=0;}
return active;},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?$():this._getPanelForTab(this.active)};},_tabKeydown:function(event){var focusedTab=$(this.document[0].activeElement).closest("li"),selectedIndex=this.tabs.index(focusedTab),goingForward=true;if(this._handlePageNav(event)){return;}
switch(event.keyCode){case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:selectedIndex++;break;case $.ui.keyCode.UP:case $.ui.keyCode.LEFT:goingForward=false;selectedIndex--;break;case $.ui.keyCode.END:selectedIndex=this.anchors.length-1;break;case $.ui.keyCode.HOME:selectedIndex=0;break;case $.ui.keyCode.SPACE:event.preventDefault();clearTimeout(this.activating);this._activate(selectedIndex);return;case $.ui.keyCode.ENTER:event.preventDefault();clearTimeout(this.activating);this._activate(selectedIndex===this.options.active?false:selectedIndex);return;default:return;}
event.preventDefault();clearTimeout(this.activating);selectedIndex=this._focusNextTab(selectedIndex,goingForward);if(!event.ctrlKey){focusedTab.attr("aria-selected","false");this.tabs.eq(selectedIndex).attr("aria-selected","true");this.activating=this._delay(function(){this.option("active",selectedIndex);},this.delay);}},_panelKeydown:function(event){if(this._handlePageNav(event)){return;}
if(event.ctrlKey&&event.keyCode===$.ui.keyCode.UP){event.preventDefault();this.active.focus();}},_handlePageNav:function(event){if(event.altKey&&event.keyCode===$.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));return true;}
if(event.altKey&&event.keyCode===$.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));return true;}},_findNextTab:function(index,goingForward){var lastTabIndex=this.tabs.length-1;function constrain(){if(index>lastTabIndex){index=0;}
if(index<0){index=lastTabIndex;}
return index;}
while($.inArray(constrain(),this.options.disabled)!==-1){index=goingForward?index+1:index-1;}
return index;},_focusNextTab:function(index,goingForward){index=this._findNextTab(index,goingForward);this.tabs.eq(index).focus();return index;},_setOption:function(key,value){if(key==="active"){this._activate(value);return;}
if(key==="disabled"){this._setupDisabled(value);return;}
this._super(key,value);if(key==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",value);if(!value&&this.options.active===false){this._activate(0);}}
if(key==="event"){this._setupEvents(value);}
if(key==="heightStyle"){this._setupHeightStyle(value);}},_tabId:function(tab){return tab.attr("aria-controls")||"ui-tabs-"+getNextTabId();},_sanitizeSelector:function(hash){return hash?hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):"";},refresh:function(){var options=this.options,lis=this.tablist.children(":has(a[href])");options.disabled=$.map(lis.filter(".ui-state-disabled"),function(tab){return lis.index(tab);});this._processTabs();if(options.active===false||!this.anchors.length){options.active=false;this.active=$();}else if(this.active.length&&!$.contains(this.tablist[0],this.active[0])){if(this.tabs.length===options.disabled.length){options.active=false;this.active=$();}else{this._activate(this._findNextTab(Math.max(0,options.active-1),false));}}else{options.active=this.tabs.index(this.active);}
this._refresh();},_refresh:function(){this._setupDisabled(this.options.disabled);this._setupEvents(this.options.event);this._setupHeightStyle(this.options.heightStyle);this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1});this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0);}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0});this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"});}},_processTabs:function(){var that=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist");this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});this.anchors=this.tabs.map(function(){return $("a",this)[0];}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});this.panels=$();this.anchors.each(function(i,anchor){var selector,panel,panelId,anchorId=$(anchor).uniqueId().attr("id"),tab=$(anchor).closest("li"),originalAriaControls=tab.attr("aria-controls");if(isLocal(anchor)){selector=anchor.hash;panel=that.element.find(that._sanitizeSelector(selector));}else{panelId=that._tabId(tab);selector="#"+panelId;panel=that.element.find(selector);if(!panel.length){panel=that._createPanel(panelId);panel.insertAfter(that.panels[i-1]||that.tablist);}
panel.attr("aria-live","polite");}
if(panel.length){that.panels=that.panels.add(panel);}
if(originalAriaControls){tab.data("ui-tabs-aria-controls",originalAriaControls);}
tab.attr({"aria-controls":selector.substring(1),"aria-labelledby":anchorId});panel.attr("aria-labelledby",anchorId);});this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel");},_getList:function(){return this.element.find("ol,ul").eq(0);},_createPanel:function(id){return $("<div>").attr("id",id).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true);},_setupDisabled:function(disabled){if($.isArray(disabled)){if(!disabled.length){disabled=false;}else if(disabled.length===this.anchors.length){disabled=true;}}
for(var i=0,li;(li=this.tabs[i]);i++){if(disabled===true||$.inArray(i,disabled)!==-1){$(li).addClass("ui-state-disabled").attr("aria-disabled","true");}else{$(li).removeClass("ui-state-disabled").removeAttr("aria-disabled");}}
this.options.disabled=disabled;},_setupEvents:function(event){var events={click:function(event){event.preventDefault();}};if(event){$.each(event.split(" "),function(index,eventName){events[eventName]="_eventHandler";});}
this._off(this.anchors.add(this.tabs).add(this.panels));this._on(this.anchors,events);this._on(this.tabs,{keydown:"_tabKeydown"});this._on(this.panels,{keydown:"_panelKeydown"});this._focusable(this.tabs);this._hoverable(this.tabs);},_setupHeightStyle:function(heightStyle){var maxHeight,parent=this.element.parent();if(heightStyle==="fill"){maxHeight=parent.height();maxHeight-=this.element.outerHeight()-this.element.height();this.element.siblings(":visible").each(function(){var elem=$(this),position=elem.css("position");if(position==="absolute"||position==="fixed"){return;}
maxHeight-=elem.outerHeight(true);});this.element.children().not(this.panels).each(function(){maxHeight-=$(this).outerHeight(true);});this.panels.each(function(){$(this).height(Math.max(0,maxHeight-
$(this).innerHeight()+$(this).height()));}).css("overflow","auto");}else if(heightStyle==="auto"){maxHeight=0;this.panels.each(function(){maxHeight=Math.max(maxHeight,$(this).height("").height());}).height(maxHeight);}},_eventHandler:function(event){var options=this.options,active=this.active,anchor=$(event.currentTarget),tab=anchor.closest("li"),clickedIsActive=tab[0]===active[0],collapsing=clickedIsActive&&options.collapsible,toShow=collapsing?$():this._getPanelForTab(tab),toHide=!active.length?$():this._getPanelForTab(active),eventData={oldTab:active,oldPanel:toHide,newTab:collapsing?$():tab,newPanel:toShow};event.preventDefault();if(tab.hasClass("ui-state-disabled")||tab.hasClass("ui-tabs-loading")||this.running||(clickedIsActive&&!options.collapsible)||(this._trigger("beforeActivate",event,eventData)===false)){return;}
options.active=collapsing?false:this.tabs.index(tab);this.active=clickedIsActive?$():tab;if(this.xhr){this.xhr.abort();}
if(!toHide.length&&!toShow.length){$.error("jQuery UI Tabs: Mismatching fragment identifier.");}
if(toShow.length){this.load(this.tabs.index(tab),event);}
this._toggle(event,eventData);},_toggle:function(event,eventData){var that=this,toShow=eventData.newPanel,toHide=eventData.oldPanel;this.running=true;function complete(){that.running=false;that._trigger("activate",event,eventData);}
function show(){eventData.newTab.closest("li").addClass("ui-tabs-active ui-state-active");if(toShow.length&&that.options.show){that._show(toShow,that.options.show,complete);}else{toShow.show();complete();}}
if(toHide.length&&this.options.hide){this._hide(toHide,this.options.hide,function(){eventData.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");show();});}else{eventData.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");toHide.hide();show();}
toHide.attr({"aria-expanded":"false","aria-hidden":"true"});eventData.oldTab.attr("aria-selected","false");if(toShow.length&&toHide.length){eventData.oldTab.attr("tabIndex",-1);}else if(toShow.length){this.tabs.filter(function(){return $(this).attr("tabIndex")===0;}).attr("tabIndex",-1);}
toShow.attr({"aria-expanded":"true","aria-hidden":"false"});eventData.newTab.attr({"aria-selected":"true",tabIndex:0});},_activate:function(index){var anchor,active=this._findActive(index);if(active[0]===this.active[0]){return;}
if(!active.length){active=this.active;}
anchor=active.find(".ui-tabs-anchor")[0];this._eventHandler({target:anchor,currentTarget:anchor,preventDefault:$.noop});},_findActive:function(index){return index===false?$():this.tabs.eq(index);},_getIndex:function(index){if(typeof index==="string"){index=this.anchors.index(this.anchors.filter("[href$='"+index+"']"));}
return index;},_destroy:function(){if(this.xhr){this.xhr.abort();}
this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();this.tabs.add(this.panels).each(function(){if($.data(this,"ui-tabs-destroy")){$(this).remove();}else{$(this).removeClass("ui-state-default ui-state-active ui-state-disabled "+"ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role");}});this.tabs.each(function(){var li=$(this),prev=li.data("ui-tabs-aria-controls");if(prev){li.attr("aria-controls",prev).removeData("ui-tabs-aria-controls");}else{li.removeAttr("aria-controls");}});this.panels.show();if(this.options.heightStyle!=="content"){this.panels.css("height","");}},enable:function(index){var disabled=this.options.disabled;if(disabled===false){return;}
if(index===undefined){disabled=false;}else{index=this._getIndex(index);if($.isArray(disabled)){disabled=$.map(disabled,function(num){return num!==index?num:null;});}else{disabled=$.map(this.tabs,function(li,num){return num!==index?num:null;});}}
this._setupDisabled(disabled);},disable:function(index){var disabled=this.options.disabled;if(disabled===true){return;}
if(index===undefined){disabled=true;}else{index=this._getIndex(index);if($.inArray(index,disabled)!==-1){return;}
if($.isArray(disabled)){disabled=$.merge([index],disabled).sort();}else{disabled=[index];}}
this._setupDisabled(disabled);},load:function(index,event){index=this._getIndex(index);var that=this,tab=this.tabs.eq(index),anchor=tab.find(".ui-tabs-anchor"),panel=this._getPanelForTab(tab),eventData={tab:tab,panel:panel};if(isLocal(anchor[0])){return;}
this.xhr=$.ajax(this._ajaxSettings(anchor,event,eventData));if(this.xhr&&this.xhr.statusText!=="canceled"){tab.addClass("ui-tabs-loading");panel.attr("aria-busy","true");this.xhr.success(function(response){setTimeout(function(){panel.html(response);that._trigger("load",event,eventData);},1);}).complete(function(jqXHR,status){setTimeout(function(){if(status==="abort"){that.panels.stop(false,true);}
tab.removeClass("ui-tabs-loading");panel.removeAttr("aria-busy");if(jqXHR===that.xhr){delete that.xhr;}},1);});}},_ajaxSettings:function(anchor,event,eventData){var that=this;return{url:anchor.attr("href"),beforeSend:function(jqXHR,settings){return that._trigger("beforeLoad",event,$.extend({jqXHR:jqXHR,ajaxSettings:settings},eventData));}};},_getPanelForTab:function(tab){var id=$(tab).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+id));}});})(jQuery);(function($){var increments=0;function addDescribedBy(elem,id){var describedby=(elem.attr("aria-describedby")||"").split(/\s+/);describedby.push(id);elem.data("ui-tooltip-id",id).attr("aria-describedby",$.trim(describedby.join(" ")));}
function removeDescribedBy(elem){var id=elem.data("ui-tooltip-id"),describedby=(elem.attr("aria-describedby")||"").split(/\s+/),index=$.inArray(id,describedby);if(index!==-1){describedby.splice(index,1);}
elem.removeData("ui-tooltip-id");describedby=$.trim(describedby.join(" "));if(describedby){elem.attr("aria-describedby",describedby);}else{elem.removeAttr("aria-describedby");}}
$.widget("ui.tooltip",{version:"1.10.2",options:{content:function(){var title=$(this).attr("title")||"";return $("<a>").text(title).html();},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,tooltipClass:null,track:false,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"});this.tooltips={};this.parents={};if(this.options.disabled){this._disable();}},_setOption:function(key,value){var that=this;if(key==="disabled"){this[value?"_disable":"_enable"]();this.options[key]=value;return;}
this._super(key,value);if(key==="content"){$.each(this.tooltips,function(id,element){that._updateContent(element);});}},_disable:function(){var that=this;$.each(this.tooltips,function(id,element){var event=$.Event("blur");event.target=event.currentTarget=element[0];that.close(event,true);});this.element.find(this.options.items).addBack().each(function(){var element=$(this);if(element.is("[title]")){element.data("ui-tooltip-title",element.attr("title")).attr("title","");}});},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var element=$(this);if(element.data("ui-tooltip-title")){element.attr("title",element.data("ui-tooltip-title"));}});},open:function(event){var that=this,target=$(event?event.target:this.element).closest(this.options.items);if(!target.length||target.data("ui-tooltip-id")){return;}
if(target.attr("title")){target.data("ui-tooltip-title",target.attr("title"));}
target.data("ui-tooltip-open",true);if(event&&event.type==="mouseover"){target.parents().each(function(){var parent=$(this),blurEvent;if(parent.data("ui-tooltip-open")){blurEvent=$.Event("blur");blurEvent.target=blurEvent.currentTarget=this;that.close(blurEvent,true);}
if(parent.attr("title")){parent.uniqueId();that.parents[this.id]={element:this,title:parent.attr("title")};parent.attr("title","");}});}
this._updateContent(target,event);},_updateContent:function(target,event){var content,contentOption=this.options.content,that=this,eventType=event?event.type:null;if(typeof contentOption==="string"){return this._open(event,target,contentOption);}
content=contentOption.call(target[0],function(response){if(!target.data("ui-tooltip-open")){return;}
that._delay(function(){if(event){event.type=eventType;}
this._open(event,target,response);});});if(content){this._open(event,target,content);}},_open:function(event,target,content){var tooltip,events,delayedShow,positionOption=$.extend({},this.options.position);if(!content){return;}
tooltip=this._find(target);if(tooltip.length){tooltip.find(".ui-tooltip-content").html(content);return;}
if(target.is("[title]")){if(event&&event.type==="mouseover"){target.attr("title","");}else{target.removeAttr("title");}}
tooltip=this._tooltip(target);addDescribedBy(target,tooltip.attr("id"));tooltip.find(".ui-tooltip-content").html(content);function position(event){positionOption.of=event;if(tooltip.is(":hidden")){return;}
tooltip.position(positionOption);}
if(this.options.track&&event&&/^mouse/.test(event.type)){this._on(this.document,{mousemove:position});position(event);}else{tooltip.position($.extend({of:target},this.options.position));}
tooltip.hide();this._show(tooltip,this.options.show);if(this.options.show&&this.options.show.delay){delayedShow=this.delayedShow=setInterval(function(){if(tooltip.is(":visible")){position(positionOption.of);clearInterval(delayedShow);}},$.fx.interval);}
this._trigger("open",event,{tooltip:tooltip});events={keyup:function(event){if(event.keyCode===$.ui.keyCode.ESCAPE){var fakeEvent=$.Event(event);fakeEvent.currentTarget=target[0];this.close(fakeEvent,true);}},remove:function(){this._removeTooltip(tooltip);}};if(!event||event.type==="mouseover"){events.mouseleave="close";}
if(!event||event.type==="focusin"){events.focusout="close";}
this._on(true,target,events);},close:function(event){var that=this,target=$(event?event.currentTarget:this.element),tooltip=this._find(target);if(this.closing){return;}
clearInterval(this.delayedShow);if(target.data("ui-tooltip-title")){target.attr("title",target.data("ui-tooltip-title"));}
removeDescribedBy(target);tooltip.stop(true);this._hide(tooltip,this.options.hide,function(){that._removeTooltip($(this));});target.removeData("ui-tooltip-open");this._off(target,"mouseleave focusout keyup");if(target[0]!==this.element[0]){this._off(target,"remove");}
this._off(this.document,"mousemove");if(event&&event.type==="mouseleave"){$.each(this.parents,function(id,parent){$(parent.element).attr("title",parent.title);delete that.parents[id];});}
this.closing=true;this._trigger("close",event,{tooltip:tooltip});this.closing=false;},_tooltip:function(element){var id="ui-tooltip-"+increments++,tooltip=$("<div>").attr({id:id,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+
(this.options.tooltipClass||""));$("<div>").addClass("ui-tooltip-content").appendTo(tooltip);tooltip.appendTo(this.document[0].body);this.tooltips[id]=element;return tooltip;},_find:function(target){var id=target.data("ui-tooltip-id");return id?$("#"+id):$();},_removeTooltip:function(tooltip){tooltip.remove();delete this.tooltips[tooltip.attr("id")];},_destroy:function(){var that=this;$.each(this.tooltips,function(id,element){var event=$.Event("blur");event.target=event.currentTarget=element[0];that.close(event,true);$("#"+id).remove();if(element.data("ui-tooltip-title")){element.attr("title",element.data("ui-tooltip-title"));element.removeData("ui-tooltip-title");}});}});}(jQuery));};
(function($){$.fn.autofill=function(text_value){return this.each(function(){var obj=$(this);if(text_value==null){text_value=obj.attr("title");}
if(document.activeElement!=obj[0]){obj.val(text_value);}
obj.focus(function(){if(obj.val()==text_value){obj.val('');}}).blur(function(){if(obj.val()==''){obj.val(text_value);}});});};})(jQuery);
(function($)
{$.fn.carousel=function(params)
{var params=$.extend({direction:"horizontal",loop:false,dispItems:1,pagination:false,paginationPosition:"inside",paginationType:"all",nextBtn:'<a role="button">Next</a>',prevBtn:'<a role="button">Previous</a>',buttonsAlign:"left",btnsPosition:"inside",nextBtnInsert:"appendTo",prevBtnInsert:"prependTo",nextBtnInsertFn:false,prevBtnInsertFn:false,autoSlide:false,autoSlideInterval:3000,delayAutoSlide:false,combinedClasses:false,effect:"slide",slideEasing:"swing",animSpeed:"normal",equalWidths:"true",verticalMargin:0,callback:function(){},useAddress:false,adressIdentifier:"carousel",tabLabel:function(tabNum)
{return tabNum;}},params);if(params.btnsPosition=="outside")
{params.prevBtnInsert="insertBefore";params.nextBtnInsert="insertAfter";}
params.delayAutoSlide=params.delayAutoSlide||params.autoSlideInterval;return this.each(function()
{var env={$elts:{},params:params,launchOnLoad:[]};env.$elts.carousel=$(this).addClass("js");env.$elts.content=$(this).children().css({position:"absolute","top":0});env.$elts.wrap=env.$elts.content.wrap('<div class="carousel-wrap"></div>').parent().css({overflow:"hidden",position:"relative"});env.steps={first:0,count:env.$elts.content.children().length};env.steps.last=env.steps.count-1;if(env.params.buttonPosition="below"){env.$elts.buttonrow=$(this).parent().children(".carousel-button-row");if(env.$elts.buttonrow.length<1){env.$elts.buttonrow=$(this.appendChild(document.createElement("div"))).addClass("carousel-button-row");$(this).append(env.$elts.buttonrow);}
if(env.params.buttonsAlign=='right')
{env.$elts.buttonrow.addClass("LayoutHAlignRight");env.$elts.buttons=$(env.$elts.buttonrow[0].appendChild(document.createElement("div"))).addClass("LayoutHAlignItems");env.$elts.buttonrow.append(env.$elts.buttons);}
else if(env.params.buttonsAlign=='split')
{env.$elts.buttons=$(env.$elts.buttonrow[0].appendChild(document.createElement("div"))).addClass("LayoutHAlignItems");env.$elts.buttonrow.append(env.$elts.buttons);}
else
{env.$elts.buttons=env.$elts.buttonrow;}
env.$elts.buttons.addClass("carousel-buttons");if($.isFunction(env.params.prevBtnInsertFn))
{env.$elts.prevBtn=env.params.prevBtnInsertFn(env.$elts.buttons);}
else
{env.$elts.prevBtn=$(params.prevBtn)[params.prevBtnInsert](env.$elts.buttons);}
if($.isFunction(env.params.nextBtnInsertFn))
{env.$elts.nextBtn=env.params.nextBtnInsertFn(env.$elts.buttons);}
else
{env.$elts.nextBtn=$(params.nextBtn)[params.nextBtnInsert](env.$elts.buttons);}
if(env.params.buttonsAlign=='right')
{env.$elts.prevBtn.wrap('<div class="LayoutHItem"></div>');env.$elts.nextBtn.wrap('<div class="LayoutHItem"></div>');}
else if(env.params.buttonsAlign=='split')
{env.$elts.prevBtn.wrap('<div class="LayoutHItem"></div>');env.$elts.nextBtn.wrap('<div class="LayoutHItemRight"></div>');}}
env.$elts.nextBtn.addClass("carousel-control next carousel-next");env.$elts.prevBtn.addClass("carousel-control previous carousel-previous");initButtonsEvents(env);if(env.params.pagination)
{initPagination(env);}
initAddress(env);$(function()
{var $items=env.$elts.content.children();var $maxHeight=0;$items.each(function()
{$item=$(this);$itemHeight=$item.outerHeight();if($itemHeight>$maxHeight)
{$maxHeight=$itemHeight;}});if(env.params.verticalMargin>0)
{$maxHeight=$maxHeight+env.params.verticalMargin;}
$items.height($maxHeight);var $firstItem=env.$elts.content.children(":first");env.itemWidth=$firstItem.outerWidth(true);if(params.direction=="vertical")
{env.contentWidth=env.itemWidth;}
else
{if(params.equalWidths)
{env.contentWidth=env.itemWidth*env.steps.count;}
else
{env.contentWidth=(function()
{var totalWidth=0;env.$elts.content.children().each(function()
{totalWidth+=$(this).outerWidth(true);});return totalWidth;})();}}
env.$elts.content.width(env.contentWidth+1);env.itemHeight=$maxHeight;if(params.direction=="vertical")
{env.$elts.content.css({height:env.itemHeight*env.steps.count+"px"});env.$elts.content.parent().css({height:env.itemHeight*env.params.dispItems+"px"});}
else
{env.$elts.content.parent().css({height:env.itemHeight+"px",display:"block"});env.$elts.carousel.css({height:env.itemHeight+"px"});}
updateButtonsState(env);$.each(env.launchOnLoad,function(i,fn)
{fn();});if(env.params.autoSlide)
{window.setTimeout(function()
{env.autoSlideInterval=window.setInterval(function()
{goToStep(env,getRelativeStep(env,"next"));},env.params.autoSlideInterval);},env.params.delayAutoSlide);}});});};function initButtonsEvents(env)
{env.$elts.nextBtn.add(env.$elts.prevBtn).bind("enable",function()
{var $this=$(this).unbind("click").bind("click",function()
{goToStep(env,getRelativeStep(env,($this.is(".next")?"next":"prev")));stopAutoSlide(env);}).removeClass("disabled");if(env.params.combinedClasses)
{$this.removeClass("next-disabled previous-disabled");}}).bind("disable",function()
{var $this=$(this).unbind("click").addClass("disabled");if(env.params.combinedClasses)
{if($this.is(".next"))
{$this.addClass("next-disabled");}
else
{if($this.is(".previous"))
{$this.addClass("previous-disabled");}}}}).hover(function()
{$(this).toggleClass("hover");});}
function initPagination(env)
{if(env.params.btnsPosition="below"){env.$elts.pagination=$('<div class="center-wrap LayoutHItem carousel-pagination"></div>')[((env.params.paginationPosition=="outside")?"insertAfter":"prependTo")](env.$elts.buttons);}
env.$elts.paginationBtns=$([]);if(env.params.paginationType=='single'){var pageTotal;env.$elts.content.find("li").each(function(i)
{if(i%env.params.dispItems==0)
{env.$elts.paginationBtns=env.$elts.paginationBtns.add($('<span class="UIHide"><a role="button">'+env.params.tabLabel(env.$elts.paginationBtns.length+1)+'</a></span>').data("firstStep",i));pageTotal=env.$elts.paginationBtns.length;}});env.$elts.paginationBtns.length=0;env.$elts.content.find("li").each(function(i)
{if(i%env.params.dispItems==0)
{env.$elts.paginationBtns=env.$elts.paginationBtns.add($('<span><span class="LayoutHItem TextStrong LayoutSmallGutterLeft">'+env.params.tabLabel(env.$elts.paginationBtns.length+1)+'</span><span class="LayoutHItem LayoutSmallGutterLeft">of</span><span class="LayoutHItem TextStrong LayoutSmallGutterLeft">'+pageTotal+'</span></span>').data("firstStep",i));}});}
else
{env.$elts.content.find("li").each(function(i)
{if(i%env.params.dispItems==0)
{env.$elts.paginationBtns=env.$elts.paginationBtns.add($('<a role="button"><span>'+env.params.tabLabel(env.$elts.paginationBtns.length+1)+'</span></a>').data("firstStep",i));}});}
env.$elts.paginationBtns.css({display:"none"});env.$elts.paginationBtns.each(function()
{$(this).appendTo(env.$elts.pagination);});env.$elts.paginationBtns.slice(0,1).addClass("active Link LinkPointer");env.launchOnLoad.push(function(){env.$elts.paginationBtns.click(function(e){goToStep(env,$(this).data("firstStep"));stopAutoSlide(env);}).css({display:""});});}
function initAddress(env)
{if(env.params.useAddress&&$.isFunction($.fn.address))
{$.address.init(function(e)
{var pathNames=$.address.pathNames();if(pathNames[0]===env.params.adressIdentifier&&!!pathNames[1])
{goToStep(env,pathNames[1]-1);}
else
{$.address.value('/'+env.params.adressIdentifier+'/1');}}).change(function(e)
{var pathNames=$.address.pathNames();if(pathNames[0]===env.params.adressIdentifier&&!!pathNames[1])
{goToStep(env,pathNames[1]-1);}});}
else
{env.params.useAddress=false;}}
function goToStep(env,step)
{env.params.callback(step);transition(env,step);env.steps.first=step;updateButtonsState(env);if(env.params.useAddress)
{$.address.value('/'+env.params.adressIdentifier+'/'+(step+1));}}
function getRelativeStep(env,position)
{if(position=="prev")
{if((env.steps.first-env.params.dispItems)>=0)
{return env.steps.first-env.params.dispItems;}
else
{return((env.params.loop)?(env.steps.count-env.params.dispItems):false);}}
else
{if(position=="next")
{if((env.steps.first+env.params.dispItems)<env.steps.count)
{return env.steps.first+env.params.dispItems;}
else
{return((env.params.loop)?0:false);}}}}
function transition(env,step)
{switch(env.params.effect)
{case"no":if(env.params.direction=="vertical")
{env.$elts.content.css("top",-(env.itemHeight*step)+"px");}
else
{env.$elts.content.css("left",-(env.itemWidth*step)+"px");}
break;case"fade":if(env.params.direction=="vertical")
{env.$elts.content.fadeOut(env.params.animSpeed).fadeOut(env.params.animSpeed,function()
{env.$elts.content.css("top",-(env.itemHeight*step)+"px");}).fadeIn(env.params.animSpeed);}
else
{env.$elts.content.fadeOut(env.params.animSpeed,function()
{env.$elts.content.css("left",-(env.itemWidth*step)+"px");}).fadeIn(env.params.animSpeed);}
break;default:if(env.params.direction=="vertical")
{env.$elts.content.stop().animate({top:-(env.itemHeight*step)+"px"},env.params.animSpeed,env.params.slideEasing);}
else
{env.$elts.content.stop().animate({left:-(env.itemWidth*step)+"px"},env.params.animSpeed,env.params.slideEasing);}
break;}}
function updateButtonsState(env)
{if(getRelativeStep(env,"prev")!==false)
{env.$elts.prevBtn.trigger("enable");}
else
{env.$elts.prevBtn.trigger("disable");}
if(getRelativeStep(env,"next")!==false)
{env.$elts.nextBtn.trigger("enable");}
else
{env.$elts.nextBtn.trigger("disable");}
if(env.params.pagination&&env.params.paginationType=="all")
{env.$elts.paginationBtns.removeClass("active").addClass("Link LinkPointer").filter(function()
{return($(this).data("firstStep")==env.steps.first)}).addClass("active").removeClass("Link LinkPointer");}
if(env.params.pagination&&env.params.paginationType=="single")
{env.$elts.paginationBtns.removeClass("active").addClass("Link LinkPointer carousel-hidden").filter(function()
{return($(this).data("firstStep")==env.steps.first)}).addClass("active").removeClass("Link LinkPointer carousel-hidden");}}
function stopAutoSlide(env)
{if(!!env.autoSlideInterval)
{window.clearInterval(env.autoSlideInterval);}}})(jQuery);
(function($){if($.fn.caroSlider)
{return;}
$.fn.caroslider=$.fn.caroSlider=function(options,configs)
{if(this.length==0)
{debug(true,'No element found for "'+this.selector+'".');return this;}
if(this.length>1)
{return this.each(function(){$(this).caroSlider(options,configs);});}
var $cfs=this,$tt0=this[0],starting_position=false;if($cfs.data('_cfs_isCarousel'))
{starting_position=$cfs.triggerHandler('_cfs_triggerEvent','currentPosition');$cfs.trigger('_cfs_triggerEvent',['destroy',true]);}
var FN={};FN._cfs_init=function(o,setOrig,start)
{o=go_getObject($tt0,o);o.items=go_getItemsObject($tt0,o.items);o.scroll=go_getScrollObject($tt0,o.scroll);o.auto=go_getAutoObject($tt0,o.auto);o.prev=go_getPrevNextObject($tt0,o.prev);o.next=go_getPrevNextObject($tt0,o.next);o.pagination=go_getPaginationObject($tt0,o.pagination);o.swipe=go_getSwipeObject($tt0,o.swipe);o.mousewheel=go_getMousewheelObject($tt0,o.mousewheel);if(setOrig)
{opts_orig=$.extend(true,{},$.fn.caroSlider.defaults,o);}
opts=$.extend(true,{},$.fn.caroSlider.defaults,o);opts.d=cf_getDimensions(opts);crsl.direction=(opts.direction=='up'||opts.direction=='left')?'next':'prev';var a_itm=$cfs.children(),avail_primary=ms_getParentSize($wrp,opts,'width');if(is_true(opts.cookie))
{opts.cookie='caroslider_cookie_'+conf.serialNumber;}
opts.maxDimension=ms_getMaxDimension(opts,avail_primary);opts.items=in_complementItems(opts.items,opts,a_itm,start);opts[opts.d['width']]=in_complementPrimarySize(opts[opts.d['width']],opts,a_itm);opts[opts.d['height']]=in_complementSecondarySize(opts[opts.d['height']],opts,a_itm);if(opts.responsive)
{if(!is_percentage(opts[opts.d['width']]))
{opts[opts.d['width']]='100%';}}
if(is_percentage(opts[opts.d['width']]))
{crsl.upDateOnWindowResize=true;crsl.primarySizePercentage=opts[opts.d['width']];opts[opts.d['width']]=ms_getPercentage(avail_primary,crsl.primarySizePercentage);if(!opts.items.visible)
{opts.items.visibleConf.variable=true;}}
if(opts.responsive)
{opts.usePadding=false;opts.padding=[0,0,0,0];opts.align=false;opts.items.visibleConf.variable=false;}
else
{if(!opts.items.visible)
{opts=in_complementVisibleItems(opts,avail_primary);}
if(!opts[opts.d['width']])
{if(!opts.items.visibleConf.variable&&is_number(opts.items[opts.d['width']])&&opts.items.filter=='*')
{opts[opts.d['width']]=opts.items.visible*opts.items[opts.d['width']];opts.align=false;}
else
{opts[opts.d['width']]='variable';}}
if(is_undefined(opts.align))
{opts.align=(is_number(opts[opts.d['width']]))?'center':false;}
if(opts.items.visibleConf.variable)
{opts.items.visible=gn_getVisibleItemsNext(a_itm,opts,0);}}
if(opts.items.filter!='*'&&!opts.items.visibleConf.variable)
{opts.items.visibleConf.org=opts.items.visible;opts.items.visible=gn_getVisibleItemsNextFilter(a_itm,opts,0);}
opts.items.visible=cf_getItemsAdjust(opts.items.visible,opts,opts.items.visibleConf.adjust,$tt0);opts.items.visibleConf.old=opts.items.visible;if(opts.responsive)
{if(!opts.items.visibleConf.min)
{opts.items.visibleConf.min=opts.items.visible;}
if(!opts.items.visibleConf.max)
{opts.items.visibleConf.max=opts.items.visible;}
opts=in_getResponsiveValues(opts,a_itm,avail_primary);}
else
{opts.padding=cf_getPadding(opts.padding);if(opts.align=='top')
{opts.align='left';}
else if(opts.align=='bottom')
{opts.align='right';}
switch(opts.align)
{case'center':case'left':case'right':if(opts[opts.d['width']]!='variable')
{opts=in_getAlignPadding(opts,a_itm);opts.usePadding=true;}
break;default:opts.align=false;opts.usePadding=(opts.padding[0]==0&&opts.padding[1]==0&&opts.padding[2]==0&&opts.padding[3]==0)?false:true;break;}}
if(!is_number(opts.scroll.duration))
{opts.scroll.duration=500;}
if(is_undefined(opts.scroll.items))
{opts.scroll.items=(opts.responsive||opts.items.visibleConf.variable||opts.items.filter!='*')?'visible':opts.items.visible;}
opts.auto=$.extend(true,{},opts.scroll,opts.auto);opts.prev=$.extend(true,{},opts.scroll,opts.prev);opts.next=$.extend(true,{},opts.scroll,opts.next);opts.pagination=$.extend(true,{},opts.scroll,opts.pagination);opts.auto=go_complementAutoObject($tt0,opts.auto);opts.prev=go_complementPrevNextObject($tt0,opts.prev);opts.next=go_complementPrevNextObject($tt0,opts.next);opts.pagination=go_complementPaginationObject($tt0,opts.pagination);opts.swipe=go_complementSwipeObject($tt0,opts.swipe);opts.mousewheel=go_complementMousewheelObject($tt0,opts.mousewheel);if(opts.synchronise)
{opts.synchronise=cf_getSynchArr(opts.synchronise);}
if(opts.auto.onPauseStart)
{opts.auto.onTimeoutStart=opts.auto.onPauseStart;deprecated('auto.onPauseStart','auto.onTimeoutStart');}
if(opts.auto.onPausePause)
{opts.auto.onTimeoutPause=opts.auto.onPausePause;deprecated('auto.onPausePause','auto.onTimeoutPause');}
if(opts.auto.onPauseEnd)
{opts.auto.onTimeoutEnd=opts.auto.onPauseEnd;deprecated('auto.onPauseEnd','auto.onTimeoutEnd');}
if(opts.auto.pauseDuration)
{opts.auto.timeoutDuration=opts.auto.pauseDuration;deprecated('auto.pauseDuration','auto.timeoutDuration');}};FN._cfs_build=function(){$cfs.data('_cfs_isCarousel',true);var a_itm=$cfs.children(),orgCSS=in_mapCss($cfs,['textAlign','float','position','top','right','bottom','left','zIndex','width','height','marginTop','marginRight','marginBottom','marginLeft']),newPosition='relative';switch(orgCSS.position)
{case'absolute':case'fixed':newPosition=orgCSS.position;break;}
if(conf.wrapper=='parent')
{sz_storeOrigCss($wrp);}
else
{$wrp.css(orgCSS);}
$wrp.css({'overflow':'hidden','position':newPosition});sz_storeOrigCss($cfs);$cfs.data('_cfs_origCssZindex',orgCSS.zIndex);$cfs.css({'textAlign':'left','float':'none','position':'absolute','top':0,'right':'auto','bottom':'auto','left':0,'marginTop':0,'marginRight':0,'marginBottom':0,'marginLeft':0});sz_storeMargin(a_itm,opts);sz_storeOrigCss(a_itm);if(opts.responsive)
{sz_setResponsiveSizes(opts,a_itm);}};FN._cfs_bind_events=function(){FN._cfs_unbind_events();$cfs.bind(cf_e('stop',conf),function(e,imm){e.stopPropagation();if(!crsl.isStopped)
{if(opts.auto.button)
{opts.auto.button.addClass(cf_c('stopped',conf));}}
crsl.isStopped=true;if(opts.auto.play)
{opts.auto.play=false;$cfs.trigger(cf_e('pause',conf),imm);}
return true;});$cfs.bind(cf_e('finish',conf),function(e){e.stopPropagation();if(crsl.isScrolling)
{sc_stopScroll(scrl);}
return true;});$cfs.bind(cf_e('pause',conf),function(e,imm,res){e.stopPropagation();tmrs=sc_clearTimers(tmrs);if(imm&&crsl.isScrolling)
{scrl.isStopped=true;var nst=getTime()-scrl.startTime;scrl.duration-=nst;if(scrl.pre)
{scrl.pre.duration-=nst;}
if(scrl.post)
{scrl.post.duration-=nst;}
sc_stopScroll(scrl,false);}
if(!crsl.isPaused&&!crsl.isScrolling)
{if(res)
{tmrs.timePassed+=getTime()-tmrs.startTime;}}
if(!crsl.isPaused)
{if(opts.auto.button)
{opts.auto.button.addClass(cf_c('paused',conf));}}
crsl.isPaused=true;if(opts.auto.onTimeoutPause)
{var dur1=opts.auto.timeoutDuration-tmrs.timePassed,perc=100-Math.ceil(dur1*100/opts.auto.timeoutDuration);opts.auto.onTimeoutPause.call($tt0,perc,dur1);}
return true;});$cfs.bind(cf_e('play',conf),function(e,dir,del,res){e.stopPropagation();tmrs=sc_clearTimers(tmrs);var v=[dir,del,res],t=['string','number','boolean'],a=cf_sortParams(v,t);dir=a[0];del=a[1];res=a[2];if(dir!='prev'&&dir!='next')
{dir=crsl.direction;}
if(!is_number(del))
{del=0;}
if(!is_boolean(res))
{res=false;}
if(res)
{crsl.isStopped=false;opts.auto.play=true;}
if(!opts.auto.play)
{e.stopImmediatePropagation();return debug(conf,'Carousel stopped: Not scrolling.');}
if(crsl.isPaused)
{if(opts.auto.button)
{opts.auto.button.removeClass(cf_c('stopped',conf));opts.auto.button.removeClass(cf_c('paused',conf));}}
crsl.isPaused=false;tmrs.startTime=getTime();var dur1=opts.auto.timeoutDuration+del;dur2=dur1-tmrs.timePassed;perc=100-Math.ceil(dur2*100/dur1);if(opts.auto.progress)
{tmrs.progress=setInterval(function(){var pasd=getTime()-tmrs.startTime+tmrs.timePassed,perc=Math.ceil(pasd*100/dur1);opts.auto.progress.updater.call(opts.auto.progress.bar[0],perc);},opts.auto.progress.interval);}
tmrs.auto=setTimeout(function(){if(opts.auto.progress)
{opts.auto.progress.updater.call(opts.auto.progress.bar[0],100);}
if(opts.auto.onTimeoutEnd)
{opts.auto.onTimeoutEnd.call($tt0,perc,dur2);}
if(crsl.isScrolling)
{$cfs.trigger(cf_e('play',conf),dir);}
else
{$cfs.trigger(cf_e(dir,conf),opts.auto);}},dur2);if(opts.auto.onTimeoutStart)
{opts.auto.onTimeoutStart.call($tt0,perc,dur2);}
return true;});$cfs.bind(cf_e('resume',conf),function(e){e.stopPropagation();if(scrl.isStopped)
{scrl.isStopped=false;crsl.isPaused=false;crsl.isScrolling=true;scrl.startTime=getTime();sc_startScroll(scrl,conf);}
else
{$cfs.trigger(cf_e('play',conf));}
return true;});$cfs.bind(cf_e('prev',conf)+' '+cf_e('next',conf),function(e,obj,num,clb,que){e.stopPropagation();if(crsl.isStopped||$cfs.is(':hidden'))
{e.stopImmediatePropagation();return debug(conf,'Carousel stopped or hidden: Not scrolling.');}
var minimum=(is_number(opts.items.minimum))?opts.items.minimum:opts.items.visible+1;if(minimum>itms.total)
{e.stopImmediatePropagation();return debug(conf,'Not enough items ('+itms.total+' total, '+minimum+' needed): Not scrolling.');}
var v=[obj,num,clb,que],t=['object','number/string','function','boolean'],a=cf_sortParams(v,t);obj=a[0];num=a[1];clb=a[2];que=a[3];var eType=e.type.slice(conf.events.prefix.length);if(!is_object(obj))
{obj={};}
if(is_function(clb))
{obj.onAfter=clb;}
if(is_boolean(que))
{obj.queue=que;}
obj=$.extend(true,{},opts[eType],obj);if(obj.conditions&&!obj.conditions.call($tt0,eType))
{e.stopImmediatePropagation();return debug(conf,'Callback "conditions" returned false.');}
if(!is_number(num))
{if(opts.items.filter!='*')
{num='visible';}
else
{var arr=[num,obj.items,opts[eType].items];for(var a=0,l=arr.length;a<l;a++)
{if(is_number(arr[a])||arr[a]=='page'||arr[a]=='visible'){num=arr[a];break;}}}
switch(num){case'page':e.stopImmediatePropagation();return $cfs.triggerHandler(cf_e(eType+'Page',conf),[obj,clb]);break;case'visible':if(!opts.items.visibleConf.variable&&opts.items.filter=='*')
{num=opts.items.visible;}
break;}}
if(scrl.isStopped)
{$cfs.trigger(cf_e('resume',conf));$cfs.trigger(cf_e('queue',conf),[eType,[obj,num,clb]]);e.stopImmediatePropagation();return debug(conf,'Carousel resumed scrolling.');}
if(obj.duration>0)
{if(crsl.isScrolling)
{if(obj.queue)
{if(obj.queue=='last')
{queu=[];}
if(obj.queue!='first'||queu.length==0)
{$cfs.trigger(cf_e('queue',conf),[eType,[obj,num,clb]]);}}
e.stopImmediatePropagation();return debug(conf,'Carousel currently scrolling.');}}
tmrs.timePassed=0;$cfs.trigger(cf_e('slide_'+eType,conf),[obj,num]);if(opts.synchronise)
{var s=opts.synchronise,c=[obj,num];for(var j=0,l=s.length;j<l;j++){var d=eType;if(!s[j][2])
{d=(d=='prev')?'next':'prev';}
if(!s[j][1])
{c[0]=s[j][0].triggerHandler('_cfs_triggerEvent',['configuration',d]);}
c[1]=num+s[j][3];s[j][0].trigger('_cfs_triggerEvent',['slide_'+d,c]);}}
return true;});$cfs.bind(cf_e('slide_prev',conf),function(e,sO,nI){e.stopPropagation();var a_itm=$cfs.children();if(!opts.circular)
{if(itms.first==0)
{if(opts.infinite)
{$cfs.trigger(cf_e('next',conf),itms.total-1);}
return e.stopImmediatePropagation();}}
sz_resetMargin(a_itm,opts);if(!is_number(nI))
{if(opts.items.visibleConf.variable)
{nI=gn_getVisibleItemsPrev(a_itm,opts,itms.total-1);}
else if(opts.items.filter!='*')
{var xI=(is_number(sO.items))?sO.items:gn_getVisibleOrg($cfs,opts);nI=gn_getScrollItemsPrevFilter(a_itm,opts,itms.total-1,xI);}
else
{nI=opts.items.visible;}
nI=cf_getAdjust(nI,opts,sO.items,$tt0);}
if(!opts.circular)
{if(itms.total-nI<itms.first)
{nI=itms.total-itms.first;}}
opts.items.visibleConf.old=opts.items.visible;if(opts.items.visibleConf.variable)
{var vI=cf_getItemsAdjust(gn_getVisibleItemsNext(a_itm,opts,itms.total-nI),opts,opts.items.visibleConf.adjust,$tt0);if(opts.items.visible+nI<=vI&&nI<itms.total)
{nI++;vI=cf_getItemsAdjust(gn_getVisibleItemsNext(a_itm,opts,itms.total-nI),opts,opts.items.visibleConf.adjust,$tt0);}
opts.items.visible=vI;}
else if(opts.items.filter!='*')
{var vI=gn_getVisibleItemsNextFilter(a_itm,opts,itms.total-nI);opts.items.visible=cf_getItemsAdjust(vI,opts,opts.items.visibleConf.adjust,$tt0);}
sz_resetMargin(a_itm,opts,true);if(nI==0)
{e.stopImmediatePropagation();return debug(conf,'0 items to scroll: Not scrolling.');}
debug(conf,'Scrolling '+nI+' items backward.');itms.first+=nI;while(itms.first>=itms.total)
{itms.first-=itms.total;}
if(!opts.circular)
{if(itms.first==0&&sO.onEnd)
{sO.onEnd.call($tt0,'prev');}
if(!opts.infinite)
{nv_enableNavi(opts,itms.first,conf);}}
$cfs.children().slice(itms.total-nI,itms.total).prependTo($cfs);if(itms.total<opts.items.visible+nI)
{$cfs.children().slice(0,(opts.items.visible+nI)-itms.total).clone(true).appendTo($cfs);}
var a_itm=$cfs.children(),i_old=gi_getOldItemsPrev(a_itm,opts,nI),i_new=gi_getNewItemsPrev(a_itm,opts),i_cur_l=a_itm.eq(nI-1),i_old_l=i_old.last(),i_new_l=i_new.last();sz_resetMargin(a_itm,opts);var pL=0,pR=0;if(opts.align)
{var p=cf_getAlignPadding(i_new,opts);pL=p[0];pR=p[1];}
var oL=(pL<0)?opts.padding[opts.d[3]]:0;var hiddenitems=false,i_skp=$();if(opts.items.visible<nI)
{i_skp=a_itm.slice(opts.items.visibleConf.old,nI);if(sO.fx=='directscroll')
{var orgW=opts.items[opts.d['width']];hiddenitems=i_skp;i_cur_l=i_new_l;sc_hideHiddenItems(hiddenitems);opts.items[opts.d['width']]='variable';}}
var $cf2=false,i_siz=ms_getTotalSize(a_itm.slice(0,nI),opts,'width'),w_siz=cf_mapWrapperSizes(ms_getSizes(i_new,opts,true),opts,!opts.usePadding),i_siz_vis=0,a_cfs={},a_wsz={},a_cur={},a_old={},a_new={},a_lef={},a_lef_vis={},a_dur=sc_getDuration(sO,opts,nI,i_siz);switch(sO.fx)
{case'cover':case'cover-fade':i_siz_vis=ms_getTotalSize(a_itm.slice(0,opts.items.visible),opts,'width');break;}
if(hiddenitems)
{opts.items[opts.d['width']]=orgW;}
sz_resetMargin(a_itm,opts,true);if(pR>=0)
{sz_resetMargin(i_old_l,opts,opts.padding[opts.d[1]]);}
if(pL>=0)
{sz_resetMargin(i_cur_l,opts,opts.padding[opts.d[3]]);}
if(opts.align)
{opts.padding[opts.d[1]]=pR;opts.padding[opts.d[3]]=pL;}
a_lef[opts.d['left']]=-(i_siz-oL);a_lef_vis[opts.d['left']]=-(i_siz_vis-oL);a_wsz[opts.d['left']]=w_siz[opts.d['width']];var _s_wrapper=function(){},_a_wrapper=function(){},_s_paddingold=function(){},_a_paddingold=function(){},_s_paddingnew=function(){},_a_paddingnew=function(){},_s_paddingcur=function(){},_a_paddingcur=function(){},_onafter=function(){},_moveitems=function(){},_position=function(){};switch(sO.fx)
{case'crossfade':case'cover':case'cover-fade':case'uncover':case'uncover-fade':$cf2=$cfs.clone(true).appendTo($wrp);break;}
switch(sO.fx)
{case'crossfade':case'uncover':case'uncover-fade':$cf2.children().slice(0,nI).remove();$cf2.children().slice(opts.items.visibleConf.old).remove();break;case'cover':case'cover-fade':$cf2.children().slice(opts.items.visible).remove();$cf2.css(a_lef_vis);break;}
$cfs.css(a_lef);scrl=sc_setScroll(a_dur,sO.easing,conf);a_cfs[opts.d['left']]=(opts.usePadding)?opts.padding[opts.d[3]]:0;if(opts[opts.d['width']]=='variable'||opts[opts.d['height']]=='variable')
{_s_wrapper=function(){$wrp.css(w_siz);};_a_wrapper=function(){scrl.anims.push([$wrp,w_siz]);};}
if(opts.usePadding)
{if(i_new_l.not(i_cur_l).length)
{a_cur[opts.d['marginRight']]=i_cur_l.data('_cfs_origCssMargin');if(pL<0)
{i_cur_l.css(a_cur);}
else
{_s_paddingcur=function(){i_cur_l.css(a_cur);};_a_paddingcur=function(){scrl.anims.push([i_cur_l,a_cur]);};}}
switch(sO.fx)
{case'cover':case'cover-fade':$cf2.children().eq(nI-1).css(a_cur);break;}
if(i_new_l.not(i_old_l).length)
{a_old[opts.d['marginRight']]=i_old_l.data('_cfs_origCssMargin');_s_paddingold=function(){i_old_l.css(a_old);};_a_paddingold=function(){scrl.anims.push([i_old_l,a_old]);};}
if(pR>=0)
{a_new[opts.d['marginRight']]=i_new_l.data('_cfs_origCssMargin')+opts.padding[opts.d[1]];_s_paddingnew=function(){i_new_l.css(a_new);};_a_paddingnew=function(){scrl.anims.push([i_new_l,a_new]);};}}
_position=function(){$cfs.css(a_cfs);};var overFill=opts.items.visible+nI-itms.total;_moveitems=function(){if(overFill>0)
{$cfs.children().slice(itms.total).remove();i_old=$($cfs.children().slice(itms.total-(opts.items.visible-overFill)).get().concat($cfs.children().slice(0,overFill).get()));}
sc_showHiddenItems(hiddenitems);if(opts.usePadding)
{var l_itm=$cfs.children().eq(opts.items.visible+nI-1);l_itm.css(opts.d['marginRight'],l_itm.data('_cfs_origCssMargin'));}};var cb_arguments=sc_mapCallbackArguments(i_old,i_skp,i_new,nI,'prev',a_dur,w_siz);_onafter=function(){sc_afterScroll($cfs,$cf2,sO);crsl.isScrolling=false;clbk.onAfter=sc_fireCallbacks($tt0,sO,'onAfter',cb_arguments,clbk);queu=sc_fireQueue($cfs,queu,conf);if(!crsl.isPaused)
{$cfs.trigger(cf_e('play',conf));}};crsl.isScrolling=true;tmrs=sc_clearTimers(tmrs);clbk.onBefore=sc_fireCallbacks($tt0,sO,'onBefore',cb_arguments,clbk);switch(sO.fx)
{case'none':$cfs.css(a_cfs);_s_wrapper();_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();_onafter();break;case'fade':scrl.anims.push([$cfs,{'opacity':0},function(){_s_wrapper();_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();scrl=sc_setScroll(a_dur,sO.easing,conf);scrl.anims.push([$cfs,{'opacity':1},_onafter]);sc_startScroll(scrl,conf);}]);break;case'crossfade':$cfs.css({'opacity':0});scrl.anims.push([$cf2,{'opacity':0}]);scrl.anims.push([$cfs,{'opacity':1},_onafter]);_a_wrapper();_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();break;case'cover':scrl.anims.push([$cf2,a_cfs,function(){_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();_onafter();}]);_a_wrapper();break;case'cover-fade':scrl.anims.push([$cfs,{'opacity':0}]);scrl.anims.push([$cf2,a_cfs,function(){$cfs.css({'opacity':1});_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();_onafter();}]);_a_wrapper();break;case'uncover':scrl.anims.push([$cf2,a_wsz,_onafter]);_a_wrapper();_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();break;case'uncover-fade':$cfs.css({'opacity':0});scrl.anims.push([$cfs,{'opacity':1}]);scrl.anims.push([$cf2,a_wsz,_onafter]);_a_wrapper();_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();break;default:scrl.anims.push([$cfs,a_cfs,function(){_moveitems();_onafter();}]);_a_wrapper();_a_paddingold();_a_paddingnew();_a_paddingcur();break;}
sc_startScroll(scrl,conf);cf_setCookie(opts.cookie,$cfs,conf);$cfs.trigger(cf_e('updatePageStatus',conf),[false,w_siz]);return true;});$cfs.bind(cf_e('slide_next',conf),function(e,sO,nI){e.stopPropagation();var a_itm=$cfs.children();if(!opts.circular)
{if(itms.first==opts.items.visible)
{if(opts.infinite)
{$cfs.trigger(cf_e('prev',conf),itms.total-1);}
return e.stopImmediatePropagation();}}
sz_resetMargin(a_itm,opts);if(!is_number(nI))
{if(opts.items.filter!='*')
{var xI=(is_number(sO.items))?sO.items:gn_getVisibleOrg($cfs,opts);nI=gn_getScrollItemsNextFilter(a_itm,opts,0,xI);}
else
{nI=opts.items.visible;}
nI=cf_getAdjust(nI,opts,sO.items,$tt0);}
var lastItemNr=(itms.first==0)?itms.total:itms.first;if(!opts.circular)
{if(opts.items.visibleConf.variable)
{var vI=gn_getVisibleItemsNext(a_itm,opts,nI),xI=gn_getVisibleItemsPrev(a_itm,opts,lastItemNr-1);}
else
{var vI=opts.items.visible,xI=opts.items.visible;}
if(nI+vI>lastItemNr)
{nI=lastItemNr-xI;}}
opts.items.visibleConf.old=opts.items.visible;if(opts.items.visibleConf.variable)
{var vI=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(a_itm,opts,nI,lastItemNr),opts,opts.items.visibleConf.adjust,$tt0);while(opts.items.visible-nI>=vI&&nI<itms.total)
{nI++;vI=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(a_itm,opts,nI,lastItemNr),opts,opts.items.visibleConf.adjust,$tt0);}
opts.items.visible=vI;}
else if(opts.items.filter!='*')
{var vI=gn_getVisibleItemsNextFilter(a_itm,opts,nI);opts.items.visible=cf_getItemsAdjust(vI,opts,opts.items.visibleConf.adjust,$tt0);}
sz_resetMargin(a_itm,opts,true);if(nI==0)
{e.stopImmediatePropagation();return debug(conf,'0 items to scroll: Not scrolling.');}
debug(conf,'Scrolling '+nI+' items forward.');itms.first-=nI;while(itms.first<0)
{itms.first+=itms.total;}
if(!opts.circular)
{if(itms.first==opts.items.visible&&sO.onEnd)
{sO.onEnd.call($tt0,'next');}
if(!opts.infinite)
{nv_enableNavi(opts,itms.first,conf);}}
if(itms.total<opts.items.visible+nI)
{$cfs.children().slice(0,(opts.items.visible+nI)-itms.total).clone(true).appendTo($cfs);}
var a_itm=$cfs.children(),i_old=gi_getOldItemsNext(a_itm,opts),i_new=gi_getNewItemsNext(a_itm,opts,nI),i_cur_l=a_itm.eq(nI-1),i_old_l=i_old.last(),i_new_l=i_new.last();sz_resetMargin(a_itm,opts);var pL=0,pR=0;if(opts.align)
{var p=cf_getAlignPadding(i_new,opts);pL=p[0];pR=p[1];}
var hiddenitems=false,i_skp=$();if(opts.items.visibleConf.old<nI)
{i_skp=a_itm.slice(opts.items.visibleConf.old,nI);if(sO.fx=='directscroll')
{var orgW=opts.items[opts.d['width']];hiddenitems=i_skp;i_cur_l=i_old_l;sc_hideHiddenItems(hiddenitems);opts.items[opts.d['width']]='variable';}}
var $cf2=false,i_siz=ms_getTotalSize(a_itm.slice(0,nI),opts,'width'),w_siz=cf_mapWrapperSizes(ms_getSizes(i_new,opts,true),opts,!opts.usePadding),i_siz_vis=0,a_cfs={},a_cfs_vis={},a_cur={},a_old={},a_lef={},a_dur=sc_getDuration(sO,opts,nI,i_siz);switch(sO.fx)
{case'uncover':case'uncover-fade':i_siz_vis=ms_getTotalSize(a_itm.slice(0,opts.items.visibleConf.old),opts,'width');break;}
if(hiddenitems)
{opts.items[opts.d['width']]=orgW;}
if(opts.align)
{if(opts.padding[opts.d[1]]<0)
{opts.padding[opts.d[1]]=0;}}
sz_resetMargin(a_itm,opts,true);sz_resetMargin(i_old_l,opts,opts.padding[opts.d[1]]);if(opts.align)
{opts.padding[opts.d[1]]=pR;opts.padding[opts.d[3]]=pL;}
a_lef[opts.d['left']]=(opts.usePadding)?opts.padding[opts.d[3]]:0;var _s_wrapper=function(){},_a_wrapper=function(){},_s_paddingold=function(){},_a_paddingold=function(){},_s_paddingcur=function(){},_a_paddingcur=function(){},_onafter=function(){},_moveitems=function(){},_position=function(){};switch(sO.fx)
{case'crossfade':case'cover':case'cover-fade':case'uncover':case'uncover-fade':$cf2=$cfs.clone(true).appendTo($wrp);$cf2.children().slice(opts.items.visibleConf.old).remove();break;}
switch(sO.fx)
{case'crossfade':case'cover':case'cover-fade':$cfs.css('zIndex',1);$cf2.css('zIndex',0);break;}
scrl=sc_setScroll(a_dur,sO.easing,conf);a_cfs[opts.d['left']]=-i_siz;a_cfs_vis[opts.d['left']]=-i_siz_vis;if(pL<0)
{a_cfs[opts.d['left']]+=pL;}
if(opts[opts.d['width']]=='variable'||opts[opts.d['height']]=='variable')
{_s_wrapper=function(){$wrp.css(w_siz);};_a_wrapper=function(){scrl.anims.push([$wrp,w_siz]);};}
if(opts.usePadding)
{var i_new_l_m=i_new_l.data('_cfs_origCssMargin');if(pR>=0)
{i_new_l_m+=opts.padding[opts.d[1]];}
i_new_l.css(opts.d['marginRight'],i_new_l_m);if(i_cur_l.not(i_old_l).length)
{a_old[opts.d['marginRight']]=i_old_l.data('_cfs_origCssMargin');}
_s_paddingold=function(){i_old_l.css(a_old);};_a_paddingold=function(){scrl.anims.push([i_old_l,a_old]);};var i_cur_l_m=i_cur_l.data('_cfs_origCssMargin');if(pL>0)
{i_cur_l_m+=opts.padding[opts.d[3]];}
a_cur[opts.d['marginRight']]=i_cur_l_m;_s_paddingcur=function(){i_cur_l.css(a_cur);};_a_paddingcur=function(){scrl.anims.push([i_cur_l,a_cur]);};}
_position=function(){$cfs.css(a_lef);};var overFill=opts.items.visible+nI-itms.total;_moveitems=function(){if(overFill>0)
{$cfs.children().slice(itms.total).remove();}
var l_itm=$cfs.children().slice(0,nI).appendTo($cfs).last();if(overFill>0)
{i_new=gi_getCurrentItems(a_itm,opts);}
sc_showHiddenItems(hiddenitems);if(opts.usePadding)
{if(itms.total<opts.items.visible+nI){var i_cur_l=$cfs.children().eq(opts.items.visible-1);i_cur_l.css(opts.d['marginRight'],i_cur_l.data('_cfs_origCssMargin')+opts.padding[opts.d[1]]);}
l_itm.css(opts.d['marginRight'],l_itm.data('_cfs_origCssMargin'));}};var cb_arguments=sc_mapCallbackArguments(i_old,i_skp,i_new,nI,'next',a_dur,w_siz);_onafter=function(){$cfs.css('zIndex',$cfs.data('_cfs_origCssZindex'));sc_afterScroll($cfs,$cf2,sO);crsl.isScrolling=false;clbk.onAfter=sc_fireCallbacks($tt0,sO,'onAfter',cb_arguments,clbk);queu=sc_fireQueue($cfs,queu,conf);if(!crsl.isPaused)
{$cfs.trigger(cf_e('play',conf));}};crsl.isScrolling=true;tmrs=sc_clearTimers(tmrs);clbk.onBefore=sc_fireCallbacks($tt0,sO,'onBefore',cb_arguments,clbk);switch(sO.fx)
{case'none':$cfs.css(a_cfs);_s_wrapper();_s_paddingold();_s_paddingcur();_position();_moveitems();_onafter();break;case'fade':scrl.anims.push([$cfs,{'opacity':0},function(){_s_wrapper();_s_paddingold();_s_paddingcur();_position();_moveitems();scrl=sc_setScroll(a_dur,sO.easing,conf);scrl.anims.push([$cfs,{'opacity':1},_onafter]);sc_startScroll(scrl,conf);}]);break;case'crossfade':$cfs.css({'opacity':0});scrl.anims.push([$cf2,{'opacity':0}]);scrl.anims.push([$cfs,{'opacity':1},_onafter]);_a_wrapper();_s_paddingold();_s_paddingcur();_position();_moveitems();break;case'cover':$cfs.css(opts.d['left'],$wrp[opts.d['width']]());scrl.anims.push([$cfs,a_lef,_onafter]);_a_wrapper();_s_paddingold();_s_paddingcur();_moveitems();break;case'cover-fade':$cfs.css(opts.d['left'],$wrp[opts.d['width']]());scrl.anims.push([$cf2,{'opacity':0}]);scrl.anims.push([$cfs,a_lef,_onafter]);_a_wrapper();_s_paddingold();_s_paddingcur();_moveitems();break;case'uncover':scrl.anims.push([$cf2,a_cfs_vis,_onafter]);_a_wrapper();_s_paddingold();_s_paddingcur();_position();_moveitems();break;case'uncover-fade':$cfs.css({'opacity':0});scrl.anims.push([$cfs,{'opacity':1}]);scrl.anims.push([$cf2,a_cfs_vis,_onafter]);_a_wrapper();_s_paddingold();_s_paddingcur();_position();_moveitems();break;default:scrl.anims.push([$cfs,a_cfs,function(){_position();_moveitems();_onafter();}]);_a_wrapper();_a_paddingold();_a_paddingcur();break;}
sc_startScroll(scrl,conf);cf_setCookie(opts.cookie,$cfs,conf);$cfs.trigger(cf_e('updatePageStatus',conf),[false,w_siz]);return true;});$cfs.bind(cf_e('slideTo',conf),function(e,num,dev,org,obj,dir,clb){e.stopPropagation();var v=[num,dev,org,obj,dir,clb],t=['string/number/object','number','boolean','object','string','function'],a=cf_sortParams(v,t);obj=a[3];dir=a[4];clb=a[5];num=gn_getItemIndex(a[0],a[1],a[2],itms,$cfs);if(num==0)
{return false;}
if(!is_object(obj))
{obj=false;}
if(dir!='prev'&&dir!='next')
{if(opts.circular)
{dir=(num<=itms.total/2)?'next':'prev';}
else
{dir=(itms.first==0||itms.first>num)?'next':'prev';}}
if(dir=='prev')
{num=itms.total-num;}
$cfs.trigger(cf_e(dir,conf),[obj,num,clb]);return true;});$cfs.bind(cf_e('prevPage',conf),function(e,obj,clb){e.stopPropagation();var cur=$cfs.triggerHandler(cf_e('currentPage',conf));return $cfs.triggerHandler(cf_e('slideToPage',conf),[cur-1,obj,'prev',clb]);});$cfs.bind(cf_e('nextPage',conf),function(e,obj,clb){e.stopPropagation();var cur=$cfs.triggerHandler(cf_e('currentPage',conf));return $cfs.triggerHandler(cf_e('slideToPage',conf),[cur+1,obj,'next',clb]);});$cfs.bind(cf_e('slideToPage',conf),function(e,pag,obj,dir,clb){e.stopPropagation();if(!is_number(pag))
{pag=$cfs.triggerHandler(cf_e('currentPage',conf));}
var ipp=opts.pagination.items||opts.items.visible,max=Math.ceil(itms.total/ipp)-1;if(pag<0)
{pag=max;}
if(pag>max)
{pag=0;}
return $cfs.triggerHandler(cf_e('slideTo',conf),[pag*ipp,0,true,obj,dir,clb]);});$cfs.bind(cf_e('jumpToStart',conf),function(e,s){e.stopPropagation();if(s)
{s=gn_getItemIndex(s,0,true,itms,$cfs);}
else
{s=0;}
s+=itms.first;if(s!=0)
{if(itms.total>0)
{while(s>itms.total)
{s-=itms.total;}}
$cfs.prepend($cfs.children().slice(s,itms.total));}
return true;});$cfs.bind(cf_e('synchronise',conf),function(e,s){e.stopPropagation();if(s)
{s=cf_getSynchArr(s);}
else if(opts.synchronise)
{s=opts.synchronise;}
else
{return debug(conf,'No carousel to synchronise.');}
var n=$cfs.triggerHandler(cf_e('currentPosition',conf)),x=true;for(var j=0,l=s.length;j<l;j++)
{if(!s[j][0].triggerHandler(cf_e('slideTo',conf),[n,s[j][3],true]))
{x=false;}}
return x;});$cfs.bind(cf_e('queue',conf),function(e,dir,opt){e.stopPropagation();if(is_function(dir))
{dir.call($tt0,queu);}
else if(is_array(dir))
{queu=dir;}
else if(!is_undefined(dir))
{queu.push([dir,opt]);}
return queu;});$cfs.bind(cf_e('insertItem',conf),function(e,itm,num,org,dev){e.stopPropagation();var v=[itm,num,org,dev],t=['string/object','string/number/object','boolean','number'],a=cf_sortParams(v,t);itm=a[0];num=a[1];org=a[2];dev=a[3];if(is_object(itm)&&!is_jquery(itm))
{itm=$(itm);}
else if(is_string(itm))
{itm=$(itm);}
if(!is_jquery(itm)||itm.length==0)
{return debug(conf,'Not a valid object.');}
if(is_undefined(num))
{num='end';}
sz_storeMargin(itm,opts);sz_storeOrigCss(itm);var orgNum=num,before='before';if(num=='end')
{if(org)
{if(itms.first==0)
{num=itms.total-1;before='after';}
else
{num=itms.first;itms.first+=itm.length;}
if(num<0)
{num=0;}}
else
{num=itms.total-1;before='after';}}
else
{num=gn_getItemIndex(num,dev,org,itms,$cfs);}
var $cit=$cfs.children().eq(num);if($cit.length)
{$cit[before](itm);}
else
{debug(conf,'Correct insert-position not found! Appending item to the end.');$cfs.append(itm);}
if(orgNum!='end'&&!org)
{if(num<itms.first)
{itms.first+=itm.length;}}
itms.total=$cfs.children().length;if(itms.first>=itms.total)
{itms.first-=itms.total;}
$cfs.trigger(cf_e('updateSizes',conf));$cfs.trigger(cf_e('linkAnchors',conf));return true;});$cfs.bind(cf_e('removeItem',conf),function(e,num,org,dev){e.stopPropagation();var v=[num,org,dev],t=['string/number/object','boolean','number'],a=cf_sortParams(v,t);num=a[0];org=a[1];dev=a[2];var removed=false;if(num instanceof $&&num.length>1)
{$removed=$();num.each(function(i,el){var $rem=$cfs.trigger(cf_e('removeItem',conf),[$(this),org,dev]);if($rem)
{$removed=$removed.add($rem);}});return $removed;}
if(is_undefined(num)||num=='end')
{$removed=$cfs.children().last();}
else
{num=gn_getItemIndex(num,dev,org,itms,$cfs);var $removed=$cfs.children().eq(num);if($removed.length)
{if(num<itms.first)
{itms.first-=$removed.length;}}}
if($removed&&$removed.length)
{$removed.detach();itms.total=$cfs.children().length;$cfs.trigger(cf_e('updateSizes',conf));}
return $removed;});$cfs.bind(cf_e('onBefore',conf)+' '+cf_e('onAfter',conf),function(e,fn){e.stopPropagation();var eType=e.type.slice(conf.events.prefix.length);if(is_array(fn))
{clbk[eType]=fn;}
if(is_function(fn))
{clbk[eType].push(fn);}
return clbk[eType];});$cfs.bind(cf_e('currentPosition',conf),function(e,fn){e.stopPropagation();if(itms.first==0)
{var val=0;}
else
{var val=itms.total-itms.first;}
if(is_function(fn))
{fn.call($tt0,val);}
return val;});$cfs.bind(cf_e('currentPage',conf),function(e,fn){e.stopPropagation();var ipp=opts.pagination.items||opts.items.visible,max=Math.ceil(itms.total/ipp-1),nr;if(itms.first==0)
{nr=0;}
else if(itms.first<itms.total%ipp)
{nr=0;}
else if(itms.first==ipp&&!opts.circular)
{nr=max;}
else
{nr=Math.round((itms.total-itms.first)/ipp);}
if(nr<0)
{nr=0;}
if(nr>max)
{nr=max;}
if(is_function(fn))
{fn.call($tt0,nr);}
return nr;});$cfs.bind(cf_e('currentVisible',conf),function(e,fn){e.stopPropagation();var $i=gi_getCurrentItems($cfs.children(),opts);if(is_function(fn))
{fn.call($tt0,$i);}
return $i;});$cfs.bind(cf_e('slice',conf),function(e,f,l,fn){e.stopPropagation();if(itms.total==0)
{return false;}
var v=[f,l,fn],t=['number','number','function'],a=cf_sortParams(v,t);f=(is_number(a[0]))?a[0]:0;l=(is_number(a[1]))?a[1]:itms.total;fn=a[2];f+=itms.first;l+=itms.first;if(items.total>0)
{while(f>itms.total)
{f-=itms.total;}
while(l>itms.total)
{l-=itms.total;}
while(f<0)
{f+=itms.total;}
while(l<0)
{l+=itms.total;}}
var $iA=$cfs.children(),$i;if(l>f)
{$i=$iA.slice(f,l);}
else
{$i=$($iA.slice(f,itms.total).get().concat($iA.slice(0,l).get()));}
if(is_function(fn))
{fn.call($tt0,$i);}
return $i;});$cfs.bind(cf_e('isPaused',conf)+' '+cf_e('isStopped',conf)+' '+cf_e('isScrolling',conf),function(e,fn){e.stopPropagation();var eType=e.type.slice(conf.events.prefix.length),value=crsl[eType];if(is_function(fn))
{fn.call($tt0,value);}
return value;});$cfs.bind(cf_e('configuration',conf),function(e,a,b,c){e.stopPropagation();var reInit=false;if(is_function(a))
{a.call($tt0,opts);}
else if(is_object(a))
{opts_orig=$.extend(true,{},opts_orig,a);if(b!==false)reInit=true;else opts=$.extend(true,{},opts,a);}
else if(!is_undefined(a))
{if(is_function(b))
{var val=eval('opts.'+a);if(is_undefined(val))
{val='';}
b.call($tt0,val);}
else if(!is_undefined(b))
{if(typeof c!=='boolean')c=true;eval('opts_orig.'+a+' = b');if(c!==false)reInit=true;else eval('opts.'+a+' = b');}
else
{return eval('opts.'+a);}}
if(reInit)
{sz_resetMargin($cfs.children(),opts);FN._cfs_init(opts_orig);FN._cfs_bind_buttons();var sz=sz_setSizes($cfs,opts);$cfs.trigger(cf_e('updatePageStatus',conf),[true,sz]);}
return opts;});$cfs.bind(cf_e('linkAnchors',conf),function(e,$con,sel){e.stopPropagation();if(is_undefined($con))
{$con=$('body');}
else if(is_string($con))
{$con=$($con);}
if(!is_jquery($con)||$con.length==0)
{return debug(conf,'Not a valid object.');}
if(!is_string(sel))
{sel='a.caroslider';}
$con.find(sel).each(function(){var h=this.hash||'';if(h.length>0&&$cfs.children().index($(h))!=-1)
{$(this).unbind('click').click(function(e){e.preventDefault();$cfs.trigger(cf_e('slideTo',conf),h);});}});return true;});$cfs.bind(cf_e('updatePageStatus',conf),function(e,build,sizes){e.stopPropagation();if(!opts.pagination.container)
{return;}
var ipp=opts.pagination.items||opts.items.visible,pgs=Math.ceil(itms.total/ipp);if(build)
{if(opts.pagination.anchorBuilder)
{opts.pagination.container.children().remove();opts.pagination.container.each(function(){for(var a=0;a<pgs;a++)
{var i=$cfs.children().eq(gn_getItemIndex(a*ipp,0,true,itms,$cfs));$(this).append(opts.pagination.anchorBuilder.call(i[0],a+1));}});}
opts.pagination.container.each(function(){$(this).children().unbind(opts.pagination.event).each(function(a){$(this).bind(opts.pagination.event,function(e){e.preventDefault();$cfs.trigger(cf_e('slideTo',conf),[a*ipp,-opts.pagination.deviation,true,opts.pagination]);});});});}
var selected=$cfs.triggerHandler(cf_e('currentPage',conf))+opts.pagination.deviation;if(selected>=pgs)
{selected=0;}
if(selected<0)
{selected=pgs-1;}
opts.pagination.container.each(function(){$(this).children().removeClass(cf_c('selected',conf)).eq(selected).addClass(cf_c('selected',conf));});return true;});$cfs.bind(cf_e('updateSizes',conf),function(e){var vI=opts.items.visible,a_itm=$cfs.children(),avail_primary=ms_getParentSize($wrp,opts,'width');itms.total=a_itm.length;if(crsl.primarySizePercentage)
{opts.maxDimension=avail_primary;opts[opts.d['width']]=ms_getPercentage(avail_primary,crsl.primarySizePercentage);}
else
{opts.maxDimension=ms_getMaxDimension(opts,avail_primary);}
if(opts.responsive)
{opts.items.width=opts.items.sizesConf.width;opts.items.height=opts.items.sizesConf.height;opts=in_getResponsiveValues(opts,a_itm,avail_primary);vI=opts.items.visible;sz_setResponsiveSizes(opts,a_itm);}
else if(opts.items.visibleConf.variable)
{vI=gn_getVisibleItemsNext(a_itm,opts,0);}
else if(opts.items.filter!='*')
{vI=gn_getVisibleItemsNextFilter(a_itm,opts,0);}
if(!opts.circular&&itms.first!=0&&vI>itms.first){if(opts.items.visibleConf.variable)
{var nI=gn_getVisibleItemsPrev(a_itm,opts,itms.first)-itms.first;}
else if(opts.items.filter!='*')
{var nI=gn_getVisibleItemsPrevFilter(a_itm,opts,itms.first)-itms.first;}
else
{var nI=opts.items.visible-itms.first;}
debug(conf,'Preventing non-circular: sliding '+nI+' items backward.');$cfs.trigger(cf_e('prev',conf),nI);}
opts.items.visible=cf_getItemsAdjust(vI,opts,opts.items.visibleConf.adjust,$tt0);opts.items.visibleConf.old=opts.items.visible;opts=in_getAlignPadding(opts,a_itm);var sz=sz_setSizes($cfs,opts);$cfs.trigger(cf_e('updatePageStatus',conf),[true,sz]);nv_showNavi(opts,itms.total,conf);nv_enableNavi(opts,itms.first,conf);return sz;});$cfs.bind(cf_e('destroy',conf),function(e,orgOrder){e.stopPropagation();tmrs=sc_clearTimers(tmrs);$cfs.data('_cfs_isCarousel',false);$cfs.trigger(cf_e('finish',conf));if(orgOrder)
{$cfs.trigger(cf_e('jumpToStart',conf));}
sz_restoreOrigCss($cfs.children());sz_restoreOrigCss($cfs);FN._cfs_unbind_events();FN._cfs_unbind_buttons();if(conf.wrapper=='parent')
{sz_restoreOrigCss($wrp);}
else
{$wrp.replaceWith($cfs);}
return true;});$cfs.bind(cf_e('debug',conf),function(e){debug(conf,'Carousel width: '+opts.width);debug(conf,'Carousel height: '+opts.height);debug(conf,'Item widths: '+opts.items.width);debug(conf,'Item heights: '+opts.items.height);debug(conf,'Number of items visible: '+opts.items.visible);if(opts.auto.play)
{debug(conf,'Number of items scrolled automatically: '+opts.auto.items);}
if(opts.prev.button)
{debug(conf,'Number of items scrolled backward: '+opts.prev.items);}
if(opts.next.button)
{debug(conf,'Number of items scrolled forward: '+opts.next.items);}
return conf.debug;});$cfs.bind('_cfs_triggerEvent',function(e,n,o){e.stopPropagation();return $cfs.triggerHandler(cf_e(n,conf),o);});};FN._cfs_unbind_events=function(){$cfs.unbind(cf_e('',conf));$cfs.unbind(cf_e('',conf,false));$cfs.unbind('_cfs_triggerEvent');};FN._cfs_bind_buttons=function(){FN._cfs_unbind_buttons();nv_showNavi(opts,itms.total,conf);nv_enableNavi(opts,itms.first,conf);if(opts.auto.pauseOnHover)
{var pC=bt_pauseOnHoverConfig(opts.auto.pauseOnHover);$wrp.bind(cf_e('mouseenter',conf,false),function(){$cfs.trigger(cf_e('pause',conf),pC);}).bind(cf_e('mouseleave',conf,false),function(){$cfs.trigger(cf_e('resume',conf));});}
if(opts.auto.button)
{opts.auto.button.bind(cf_e(opts.auto.event,conf,false),function(e){e.preventDefault();var ev=false,pC=null;if(crsl.isPaused)
{ev='play';}
else if(opts.auto.pauseOnEvent)
{ev='pause';pC=bt_pauseOnHoverConfig(opts.auto.pauseOnEvent);}
if(ev)
{$cfs.trigger(cf_e(ev,conf),pC);}});}
if(opts.prev.button)
{opts.prev.button.bind(cf_e(opts.prev.event,conf,false),function(e){e.preventDefault();$cfs.trigger(cf_e('prev',conf));});if(opts.prev.pauseOnHover)
{var pC=bt_pauseOnHoverConfig(opts.prev.pauseOnHover);opts.prev.button.bind(cf_e('mouseenter',conf,false),function(){$cfs.trigger(cf_e('pause',conf),pC);}).bind(cf_e('mouseleave',conf,false),function(){$cfs.trigger(cf_e('resume',conf));});}}
if(opts.next.button)
{opts.next.button.bind(cf_e(opts.next.event,conf,false),function(e){e.preventDefault();$cfs.trigger(cf_e('next',conf));});if(opts.next.pauseOnHover)
{var pC=bt_pauseOnHoverConfig(opts.next.pauseOnHover);opts.next.button.bind(cf_e('mouseenter',conf,false),function(){$cfs.trigger(cf_e('pause',conf),pC);}).bind(cf_e('mouseleave',conf,false),function(){$cfs.trigger(cf_e('resume',conf));});}}
if(opts.pagination.container)
{if(opts.pagination.pauseOnHover)
{var pC=bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);opts.pagination.container.bind(cf_e('mouseenter',conf,false),function(){$cfs.trigger(cf_e('pause',conf),pC);}).bind(cf_e('mouseleave',conf,false),function(){$cfs.trigger(cf_e('resume',conf));});}}
if(opts.prev.key||opts.next.key)
{$(document).bind(cf_e('keyup',conf,false,true,true),function(e){var k=e.keyCode;if(k==opts.next.key)
{e.preventDefault();$cfs.trigger(cf_e('next',conf));}
if(k==opts.prev.key)
{e.preventDefault();$cfs.trigger(cf_e('prev',conf));}});}
if(opts.pagination.keys)
{$(document).bind(cf_e('keyup',conf,false,true,true),function(e){var k=e.keyCode;if(k>=49&&k<58)
{k=(k-49)*opts.items.visible;if(k<=itms.total)
{e.preventDefault();$cfs.trigger(cf_e('slideTo',conf),[k,0,true,opts.pagination]);}}});}
if($.fn.swipe)
{var isTouch='ontouchstart'in window;if((isTouch&&opts.swipe.onTouch)||(!isTouch&&opts.swipe.onMouse))
{var scP=$.extend(true,{},opts.prev,opts.swipe),scN=$.extend(true,{},opts.next,opts.swipe),swP=function(){$cfs.trigger(cf_e('prev',conf),[scP])},swN=function(){$cfs.trigger(cf_e('next',conf),[scN])};switch(opts.direction)
{case'up':case'down':opts.swipe.options.swipeUp=swN;opts.swipe.options.swipeDown=swP;break;default:opts.swipe.options.swipeLeft=swN;opts.swipe.options.swipeRight=swP;}
if(crsl.swipe)
{$cfs.swipe('destroy');}
$wrp.swipe(opts.swipe.options);$wrp.css('cursor','move');crsl.swipe=true;}}
if($.fn.mousewheel)
{if(opts.mousewheel)
{var mcP=$.extend(true,{},opts.prev,opts.mousewheel),mcN=$.extend(true,{},opts.next,opts.mousewheel);if(crsl.mousewheel)
{$wrp.unbind(cf_e('mousewheel',conf,false));}
$wrp.bind(cf_e('mousewheel',conf,false),function(e,delta){e.preventDefault();if(delta>0)
{$cfs.trigger(cf_e('prev',conf),[mcP]);}
else
{$cfs.trigger(cf_e('next',conf),[mcN]);}});crsl.mousewheel=true;}}
if(opts.auto.play)
{$cfs.trigger(cf_e('play',conf),opts.auto.delay);}
if(crsl.upDateOnWindowResize)
{var resizeFn=function(e){$cfs.trigger(cf_e('finish',conf));if(opts.auto.pauseOnResize&&!crsl.isPaused)
{$cfs.trigger(cf_e('play',conf));}
sz_resetMargin($cfs.children(),opts);$cfs.trigger(cf_e('updateSizes',conf));};var $w=$(window),onResize=null;if($.debounce&&conf.onWindowResize=='debounce')
{onResize=$.debounce(200,resizeFn);}
else if($.throttle&&conf.onWindowResize=='throttle')
{onResize=$.throttle(300,resizeFn);}
else
{var _windowWidth=0,_windowHeight=0;onResize=function(){var nw=$w.width(),nh=$w.height();if(nw!=_windowWidth||nh!=_windowHeight)
{resizeFn();_windowWidth=nw;_windowHeight=nh;}};}
$w.bind(cf_e('resize',conf,false,true,true),onResize);}};FN._cfs_unbind_buttons=function(){var ns1=cf_e('',conf),ns2=cf_e('',conf,false);ns3=cf_e('',conf,false,true,true);$(document).unbind(ns3);$(window).unbind(ns3);$wrp.unbind(ns2);if(opts.auto.button)
{opts.auto.button.unbind(ns2);}
if(opts.prev.button)
{opts.prev.button.unbind(ns2);}
if(opts.next.button)
{opts.next.button.unbind(ns2);}
if(opts.pagination.container)
{opts.pagination.container.unbind(ns2);if(opts.pagination.anchorBuilder)
{opts.pagination.container.children().remove();}}
if(crsl.swipe)
{$cfs.swipe('destroy');$wrp.css('cursor','default');crsl.swipe=false;}
if(crsl.mousewheel)
{crsl.mousewheel=false;}
nv_showNavi(opts,'hide',conf);nv_enableNavi(opts,'removeClass',conf);};if(is_boolean(configs))
{configs={'debug':configs};}
var crsl={'direction':'next','isPaused':true,'isScrolling':false,'isStopped':false,'mousewheel':false,'swipe':false},itms={'total':$cfs.children().length,'first':0},tmrs={'auto':null,'progress':null,'startTime':getTime(),'timePassed':0},scrl={'isStopped':false,'duration':0,'startTime':0,'easing':'','anims':[]},clbk={'onBefore':[],'onAfter':[]},queu=[],conf=$.extend(true,{},$.fn.caroSlider.configs,configs),opts={},opts_orig=$.extend(true,{},options),$wrp=(conf.wrapper=='parent')?$cfs.parent():$cfs.wrap('<'+conf.wrapper.element+' class="'+conf.wrapper.classname+'" />').parent();conf.selector=$cfs.selector;conf.serialNumber=$.fn.caroSlider.serialNumber++;conf.transition=(conf.transition&&$.fn.transition)?'transition':'animate';FN._cfs_init(opts_orig,true,starting_position);FN._cfs_build();FN._cfs_bind_events();FN._cfs_bind_buttons();if(is_array(opts.items.start))
{var start_arr=opts.items.start;}
else
{var start_arr=[];if(opts.items.start!=0)
{start_arr.push(opts.items.start);}}
if(opts.cookie)
{start_arr.unshift(parseInt(cf_getCookie(opts.cookie),10));}
if(start_arr.length>0)
{for(var a=0,l=start_arr.length;a<l;a++)
{var s=start_arr[a];if(s==0)
{continue;}
if(s===true)
{s=window.location.hash;if(s.length<1)
{continue;}}
else if(s==='random')
{s=Math.floor(Math.random()*itms.total);}
if($cfs.triggerHandler(cf_e('slideTo',conf),[s,0,true,{fx:'none'}]))
{break;}}}
var siz=sz_setSizes($cfs,opts),itm=gi_getCurrentItems($cfs.children(),opts);if(opts.onCreate)
{opts.onCreate.call($tt0,{'width':siz.width,'height':siz.height,'items':itm});}
$cfs.trigger(cf_e('updatePageStatus',conf),[true,siz]);$cfs.trigger(cf_e('linkAnchors',conf));if(conf.debug)
{$cfs.trigger(cf_e('debug',conf));}
return $cfs;};$.fn.caroSlider.serialNumber=1;$.fn.caroSlider.defaults={'synchronise':false,'infinite':true,'circular':true,'responsive':false,'direction':'left','items':{'start':0},'scroll':{'easing':'swing','duration':500,'pauseOnHover':false,'event':'click','queue':false}};$.fn.caroSlider.configs={'debug':false,'transition':false,'onWindowResize':'throttle','events':{'prefix':'','namespace':'cfs'},'wrapper':{'element':'div','classname':'caroslider_wrapper'},'classnames':{}};$.fn.caroSlider.pageAnchorBuilder=function(nr){return'<a href="#"><span>'+nr+'</span></a>';};$.fn.caroSlider.progressbarUpdater=function(perc){$(this).css('width',perc+'%');};$.fn.caroSlider.cookie={get:function(n){n+='=';var ca=document.cookie.split(';');for(var a=0,l=ca.length;a<l;a++)
{var c=ca[a];while(c.charAt(0)==' ')
{c=c.slice(1);}
if(c.indexOf(n)==0)
{return c.slice(n.length);}}
return 0;},set:function(n,v,d){var e="";if(d)
{var date=new Date();date.setTime(date.getTime()+(d*24*60*60*1000));e="; expires="+date.toGMTString();}
document.cookie=n+'='+v+e+'; path=/';},remove:function(n){$.fn.caroSlider.cookie.set(n,"",-1);}};function sc_setScroll(d,e,c){if(c.transition=='transition')
{if(e=='swing')
{e='ease';}}
return{anims:[],duration:d,orgDuration:d,easing:e,startTime:getTime()};}
function sc_startScroll(s,c){for(var a=0,l=s.anims.length;a<l;a++)
{var b=s.anims[a];if(!b)
{continue;}
b[0][c.transition](b[1],s.duration,s.easing,b[2]);}}
function sc_stopScroll(s,finish){if(!is_boolean(finish))
{finish=true;}
if(is_object(s.pre))
{sc_stopScroll(s.pre,finish);}
for(var a=0,l=s.anims.length;a<l;a++)
{var b=s.anims[a];b[0].stop(true);if(finish)
{b[0].css(b[1]);if(is_function(b[2]))
{b[2]();}}}
if(is_object(s.post))
{sc_stopScroll(s.post,finish);}}
function sc_afterScroll($c,$c2,o){if($c2)
{$c2.remove();}
switch(o.fx){case'fade':case'crossfade':case'cover-fade':case'uncover-fade':$c.css('filter','');$c.css('opacity',1);break;}}
function sc_fireCallbacks($t,o,b,a,c){if(o[b])
{o[b].call($t,a);}
if(c[b].length)
{for(var i=0,l=c[b].length;i<l;i++)
{c[b][i].call($t,a);}}
return[];}
function sc_fireQueue($c,q,c){if(q.length)
{$c.trigger(cf_e(q[0][0],c),q[0][1]);q.shift();}
return q;}
function sc_hideHiddenItems(hiddenitems){hiddenitems.each(function(){var hi=$(this);hi.data('_cfs_isHidden',hi.is(':hidden')).hide();});}
function sc_showHiddenItems(hiddenitems){if(hiddenitems)
{hiddenitems.each(function(){var hi=$(this);if(!hi.data('_cfs_isHidden'))
{hi.show();}});}}
function sc_clearTimers(t){if(t.auto)
{clearTimeout(t.auto);}
if(t.progress)
{clearInterval(t.progress);}
return t;}
function sc_mapCallbackArguments(i_old,i_skp,i_new,s_itm,s_dir,s_dur,w_siz){return{'width':w_siz.width,'height':w_siz.height,'items':{'old':i_old,'skipped':i_skp,'visible':i_new},'scroll':{'items':s_itm,'direction':s_dir,'duration':s_dur}};}
function sc_getDuration(sO,o,nI,siz){var dur=sO.duration;if(sO.fx=='none')
{return 0;}
if(dur=='auto')
{dur=o.scroll.duration/o.scroll.items*nI;}
else if(dur<10)
{dur=siz/dur;}
if(dur<1)
{return 0;}
if(sO.fx=='fade')
{dur=dur/2;}
return Math.round(dur);}
function nv_showNavi(o,t,c){var minimum=(is_number(o.items.minimum))?o.items.minimum:o.items.visible+1;if(t=='show'||t=='hide')
{var f=t;}
else if(minimum>t)
{debug(c,'Not enough items ('+t+' total, '+minimum+' needed): Hiding navigation.');var f='hide';}
else
{var f='show';}
var s=(f=='show')?'removeClass':'addClass',h=cf_c('hidden',c);if(o.auto.button)
{o.auto.button[f]()[s](h);}
if(o.prev.button)
{o.prev.button[f]()[s](h);}
if(o.next.button)
{o.next.button[f]()[s](h);}
if(o.pagination.container)
{o.pagination.container[f]()[s](h);}}
function nv_enableNavi(o,f,c){if(o.circular||o.infinite)return;var fx=(f=='removeClass'||f=='addClass')?f:false,di=cf_c('disabled',c);if(o.auto.button&&fx)
{o.auto.button[fx](di);}
if(o.prev.button)
{var fn=fx||(f==0)?'addClass':'removeClass';o.prev.button[fn](di);}
if(o.next.button)
{var fn=fx||(f==o.items.visible)?'addClass':'removeClass';o.next.button[fn](di);}}
function go_getObject($tt,obj){if(is_function(obj))
{obj=obj.call($tt);}
else if(is_undefined(obj))
{obj={};}
return obj;}
function go_getItemsObject($tt,obj){obj=go_getObject($tt,obj);if(is_number(obj))
{obj={'visible':obj};}
else if(obj=='variable')
{obj={'visible':obj,'width':obj,'height':obj};}
else if(!is_object(obj))
{obj={};}
return obj;}
function go_getScrollObject($tt,obj){obj=go_getObject($tt,obj);if(is_number(obj))
{if(obj<=50)
{obj={'items':obj};}
else
{obj={'duration':obj};}}
else if(is_string(obj))
{obj={'easing':obj};}
else if(!is_object(obj))
{obj={};}
return obj;}
function go_getNaviObject($tt,obj){obj=go_getObject($tt,obj);if(is_string(obj))
{var temp=cf_getKeyCode(obj);if(temp==-1)
{obj=$(obj);}
else
{obj=temp;}}
return obj;}
function go_getAutoObject($tt,obj){obj=go_getNaviObject($tt,obj);if(is_jquery(obj))
{obj={'button':obj};}
else if(is_boolean(obj))
{obj={'play':obj};}
else if(is_number(obj))
{obj={'timeoutDuration':obj};}
if(obj.progress)
{if(is_string(obj.progress)||is_jquery(obj.progress))
{obj.progress={'bar':obj.progress};}}
return obj;}
function go_complementAutoObject($tt,obj){if(is_function(obj.button))
{obj.button=obj.button.call($tt);}
if(is_string(obj.button))
{obj.button=$(obj.button);}
if(!is_boolean(obj.play))
{obj.play=true;}
if(!is_number(obj.delay))
{obj.delay=0;}
if(is_undefined(obj.pauseOnEvent))
{obj.pauseOnEvent=true;}
if(!is_boolean(obj.pauseOnResize))
{obj.pauseOnResize=true;}
if(!is_number(obj.timeoutDuration))
{obj.timeoutDuration=(obj.duration<10)?2500:obj.duration*5;}
if(obj.progress)
{if(is_function(obj.progress.bar))
{obj.progress.bar=obj.progress.bar.call($tt);}
if(is_string(obj.progress.bar))
{obj.progress.bar=$(obj.progress.bar);}
if(obj.progress.bar)
{if(!is_function(obj.progress.updater))
{obj.progress.updater=$.fn.caroSlider.progressbarUpdater;}
if(!is_number(obj.progress.interval))
{obj.progress.interval=50;}}
else
{obj.progress=false;}}
return obj;}
function go_getPrevNextObject($tt,obj){obj=go_getNaviObject($tt,obj);if(is_jquery(obj))
{obj={'button':obj};}
else if(is_number(obj))
{obj={'key':obj};}
return obj;}
function go_complementPrevNextObject($tt,obj){if(is_function(obj.button))
{obj.button=obj.button.call($tt);}
if(is_string(obj.button))
{obj.button=$(obj.button);}
if(is_string(obj.key))
{obj.key=cf_getKeyCode(obj.key);}
return obj;}
function go_getPaginationObject($tt,obj){obj=go_getNaviObject($tt,obj);if(is_jquery(obj))
{obj={'container':obj};}
else if(is_boolean(obj))
{obj={'keys':obj};}
return obj;}
function go_complementPaginationObject($tt,obj){if(is_function(obj.container))
{obj.container=obj.container.call($tt);}
if(is_string(obj.container))
{obj.container=$(obj.container);}
if(!is_number(obj.items))
{obj.items=false;}
if(!is_boolean(obj.keys))
{obj.keys=false;}
if(!is_function(obj.anchorBuilder)&&!is_false(obj.anchorBuilder))
{obj.anchorBuilder=$.fn.caroSlider.pageAnchorBuilder;}
if(!is_number(obj.deviation))
{obj.deviation=0;}
return obj;}
function go_getSwipeObject($tt,obj){if(is_function(obj))
{obj=obj.call($tt);}
if(is_undefined(obj))
{obj={'onTouch':false};}
if(is_true(obj))
{obj={'onTouch':obj};}
else if(is_number(obj))
{obj={'items':obj};}
return obj;}
function go_complementSwipeObject($tt,obj){if(!is_boolean(obj.onTouch))
{obj.onTouch=true;}
if(!is_boolean(obj.onMouse))
{obj.onMouse=false;}
if(!is_object(obj.options))
{obj.options={};}
if(!is_boolean(obj.options.triggerOnTouchEnd))
{obj.options.triggerOnTouchEnd=false;}
return obj;}
function go_getMousewheelObject($tt,obj){if(is_function(obj))
{obj=obj.call($tt);}
if(is_true(obj))
{obj={};}
else if(is_number(obj))
{obj={'items':obj};}
else if(is_undefined(obj))
{obj=false;}
return obj;}
function go_complementMousewheelObject($tt,obj){return obj;}
function gn_getItemIndex(num,dev,org,items,$cfs){if(is_string(num))
{num=$(num,$cfs);}
if(is_object(num))
{num=$(num,$cfs);}
if(is_jquery(num))
{num=$cfs.children().index(num);if(!is_boolean(org))
{org=false;}}
else
{if(!is_boolean(org))
{org=true;}}
if(!is_number(num))
{num=0;}
if(!is_number(dev))
{dev=0;}
if(org)
{num+=items.first;}
num+=dev;if(items.total>0)
{while(num>=items.total)
{num-=items.total;}
while(num<0)
{num+=items.total;}}
return num;}
function gn_getVisibleItemsPrev(i,o,s){var t=0,x=0;for(var a=s;a>=0;a--)
{var j=i.eq(a);t+=(j.is(':visible'))?j[o.d['outerWidth']](true):0;if(t>o.maxDimension)
{return x;}
if(a==0)
{a=i.length;}
x++;}}
function gn_getVisibleItemsPrevFilter(i,o,s){return gn_getItemsPrevFilter(i,o.items.filter,o.items.visibleConf.org,s);}
function gn_getScrollItemsPrevFilter(i,o,s,m){return gn_getItemsPrevFilter(i,o.items.filter,m,s);}
function gn_getItemsPrevFilter(i,f,m,s){var t=0,x=0;for(var a=s,l=i.length;a>=0;a--)
{x++;if(x==l)
{return x;}
var j=i.eq(a);if(j.is(f))
{t++;if(t==m)
{return x;}}
if(a==0)
{a=l;}}}
function gn_getVisibleOrg($c,o){return o.items.visibleConf.org||$c.children().slice(0,o.items.visible).filter(o.items.filter).length;}
function gn_getVisibleItemsNext(i,o,s){var t=0,x=0;for(var a=s,l=i.length-1;a<=l;a++)
{var j=i.eq(a);t+=(j.is(':visible'))?j[o.d['outerWidth']](true):0;if(t>o.maxDimension)
{return x;}
x++;if(x==l+1)
{return x;}
if(a==l)
{a=-1;}}}
function gn_getVisibleItemsNextTestCircular(i,o,s,l){var v=gn_getVisibleItemsNext(i,o,s);if(!o.circular)
{if(s+v>l)
{v=l-s;}}
return v;}
function gn_getVisibleItemsNextFilter(i,o,s){return gn_getItemsNextFilter(i,o.items.filter,o.items.visibleConf.org,s,o.circular);}
function gn_getScrollItemsNextFilter(i,o,s,m){return gn_getItemsNextFilter(i,o.items.filter,m+1,s,o.circular)-1;}
function gn_getItemsNextFilter(i,f,m,s,c){var t=0,x=0;for(var a=s,l=i.length-1;a<=l;a++)
{x++;if(x>=l)
{return x;}
var j=i.eq(a);if(j.is(f))
{t++;if(t==m)
{return x;}}
if(a==l)
{a=-1;}}}
function gi_getCurrentItems(i,o){return i.slice(0,o.items.visible);}
function gi_getOldItemsPrev(i,o,n){return i.slice(n,o.items.visibleConf.old+n);}
function gi_getNewItemsPrev(i,o){return i.slice(0,o.items.visible);}
function gi_getOldItemsNext(i,o){return i.slice(0,o.items.visibleConf.old);}
function gi_getNewItemsNext(i,o,n){return i.slice(n,o.items.visible+n);}
function sz_storeMargin(i,o,d){if(o.usePadding)
{if(!is_string(d))
{d='_cfs_origCssMargin';}
i.each(function(){var j=$(this),m=parseInt(j.css(o.d['marginRight']),10);if(!is_number(m))
{m=0;}
j.data(d,m);});}}
function sz_resetMargin(i,o,m){if(o.usePadding)
{var x=(is_boolean(m))?m:false;if(!is_number(m))
{m=0;}
sz_storeMargin(i,o,'_cfs_tempCssMargin');i.each(function(){var j=$(this);j.css(o.d['marginRight'],((x)?j.data('_cfs_tempCssMargin'):m+j.data('_cfs_origCssMargin')));});}}
function sz_storeOrigCss(i){i.each(function(){var j=$(this);j.data('_cfs_origCss',j.attr('style')||'');});}
function sz_restoreOrigCss(i){i.each(function(){var j=$(this);j.attr('style',j.data('_cfs_origCss')||'');});}
function sz_setResponsiveSizes(o,all){var visb=o.items.visible,newS=o.items[o.d['width']],seco=o[o.d['height']],secp=is_percentage(seco);all.each(function(){var $t=$(this),nw=newS-ms_getPaddingBorderMargin($t,o,'Width');$t[o.d['width']](nw);if(secp)
{$t[o.d['height']](ms_getPercentage(nw,seco));}});}
function sz_setSizes($c,o){var $w=$c.parent(),$i=$c.children(),$v=gi_getCurrentItems($i,o),sz=cf_mapWrapperSizes(ms_getSizes($v,o,true),o,false);$w.css(sz);if(o.usePadding)
{var p=o.padding,r=p[o.d[1]];if(o.align&&r<0)
{r=0;}
var $l=$v.last();$l.css(o.d['marginRight'],$l.data('_cfs_origCssMargin')+r);$c.css(o.d['top'],p[o.d[0]]);$c.css(o.d['left'],p[o.d[3]]);}
$c.css(o.d['width'],sz[o.d['width']]+(ms_getTotalSize($i,o,'width')*2));$c.css(o.d['height'],ms_getLargestSize($i,o,'height'));return sz;}
function ms_getSizes(i,o,wrapper){return[ms_getTotalSize(i,o,'width',wrapper),ms_getLargestSize(i,o,'height',wrapper)];}
function ms_getLargestSize(i,o,dim,wrapper){if(!is_boolean(wrapper))
{wrapper=false;}
if(is_number(o[o.d[dim]])&&wrapper)
{return o[o.d[dim]];}
if(is_number(o.items[o.d[dim]]))
{return o.items[o.d[dim]];}
dim=(dim.toLowerCase().indexOf('width')>-1)?'outerWidth':'outerHeight';return ms_getTrueLargestSize(i,o,dim);}
function ms_getTrueLargestSize(i,o,dim){var s=0;for(var a=0,l=i.length;a<l;a++)
{var j=i.eq(a);var m=(j.is(':visible'))?j[o.d[dim]](true):0;if(s<m)
{s=m;}}
return s;}
function ms_getTotalSize(i,o,dim,wrapper){if(!is_boolean(wrapper))
{wrapper=false;}
if(is_number(o[o.d[dim]])&&wrapper)
{return o[o.d[dim]];}
if(is_number(o.items[o.d[dim]]))
{return o.items[o.d[dim]]*i.length;}
var d=(dim.toLowerCase().indexOf('width')>-1)?'outerWidth':'outerHeight',s=0;for(var a=0,l=i.length;a<l;a++)
{var j=i.eq(a);s+=(j.is(':visible'))?j[o.d[d]](true):0;}
return s;}
function ms_getParentSize($w,o,d){var isVisible=$w.is(':visible');if(isVisible)
{$w.hide();}
var s=$w.parent()[o.d[d]]();if(isVisible)
{$w.show();}
return s;}
function ms_getMaxDimension(o,a){return(is_number(o[o.d['width']]))?o[o.d['width']]:a;}
function ms_hasVariableSizes(i,o,dim){var s=false,v=false;for(var a=0,l=i.length;a<l;a++)
{var j=i.eq(a);var c=(j.is(':visible'))?j[o.d[dim]](true):0;if(s===false)
{s=c;}
else if(s!=c)
{v=true;}
if(s==0)
{v=true;}}
return v;}
function ms_getPaddingBorderMargin(i,o,d){return i[o.d['outer'+d]](true)-i[o.d[d.toLowerCase()]]();}
function ms_getPercentage(s,o){if(is_percentage(o))
{o=parseInt(o.slice(0,-1),10);if(!is_number(o))
{return s;}
s*=o/100;}
return s;}
function cf_e(n,c,pf,ns,rd){if(!is_boolean(pf))
{pf=true;}
if(!is_boolean(ns))
{ns=true;}
if(!is_boolean(rd))
{rd=false;}
if(pf)
{n=c.events.prefix+n;}
if(ns)
{n=n+'.'+c.events.namespace;}
if(ns&&rd)
{n+=c.serialNumber;}
return n;}
function cf_c(n,c){return(is_string(c.classnames[n]))?c.classnames[n]:n;}
function cf_mapWrapperSizes(ws,o,p){if(!is_boolean(p))
{p=true;}
var pad=(o.usePadding&&p)?o.padding:[0,0,0,0];var wra={};wra[o.d['width']]=ws[0]+pad[1]+pad[3];wra[o.d['height']]=ws[1]+pad[0]+pad[2];return wra;}
function cf_sortParams(vals,typs){var arr=[];for(var a=0,l1=vals.length;a<l1;a++)
{for(var b=0,l2=typs.length;b<l2;b++)
{if(typs[b].indexOf(typeof vals[a])>-1&&is_undefined(arr[b]))
{arr[b]=vals[a];break;}}}
return arr;}
function cf_getPadding(p){if(is_undefined(p))
{return[0,0,0,0];}
if(is_number(p))
{return[p,p,p,p];}
if(is_string(p))
{p=p.split('px').join('').split('em').join('').split(' ');}
if(!is_array(p))
{return[0,0,0,0];}
for(var i=0;i<4;i++)
{p[i]=parseInt(p[i],10);}
switch(p.length)
{case 0:return[0,0,0,0];case 1:return[p[0],p[0],p[0],p[0]];case 2:return[p[0],p[1],p[0],p[1]];case 3:return[p[0],p[1],p[2],p[1]];default:return[p[0],p[1],p[2],p[3]];}}
function cf_getAlignPadding(itm,o){var x=(is_number(o[o.d['width']]))?Math.ceil(o[o.d['width']]-ms_getTotalSize(itm,o,'width')):0;switch(o.align)
{case'left':return[0,x];case'right':return[x,0];case'center':default:return[Math.ceil(x/2),Math.floor(x/2)];}}
function cf_getDimensions(o){var dm=[['width','innerWidth','outerWidth','height','innerHeight','outerHeight','left','top','marginRight',0,1,2,3],['height','innerHeight','outerHeight','width','innerWidth','outerWidth','top','left','marginBottom',3,2,1,0]];var dl=dm[0].length,dx=(o.direction=='right'||o.direction=='left')?0:1;var dimensions={};for(var d=0;d<dl;d++)
{dimensions[dm[0][d]]=dm[dx][d];}
return dimensions;}
function cf_getAdjust(x,o,a,$t){var v=x;if(is_function(a))
{v=a.call($t,v);}
else if(is_string(a))
{var p=a.split('+'),m=a.split('-');if(m.length>p.length)
{var neg=true,sta=m[0],adj=m[1];}
else
{var neg=false,sta=p[0],adj=p[1];}
switch(sta)
{case'even':v=(x%2==1)?x-1:x;break;case'odd':v=(x%2==0)?x-1:x;break;default:v=x;break;}
adj=parseInt(adj,10);if(is_number(adj))
{if(neg)
{adj=-adj;}
v+=adj;}}
if(!is_number(v)||v<1)
{v=1;}
return v;}
function cf_getItemsAdjust(x,o,a,$t){return cf_getItemAdjustMinMax(cf_getAdjust(x,o,a,$t),o.items.visibleConf);}
function cf_getItemAdjustMinMax(v,i){if(is_number(i.min)&&v<i.min)
{v=i.min;}
if(is_number(i.max)&&v>i.max)
{v=i.max;}
if(v<1)
{v=1;}
return v;}
function cf_getSynchArr(s){if(!is_array(s))
{s=[[s]];}
if(!is_array(s[0]))
{s=[s];}
for(var j=0,l=s.length;j<l;j++)
{if(is_string(s[j][0]))
{s[j][0]=$(s[j][0]);}
if(!is_boolean(s[j][1]))
{s[j][1]=true;}
if(!is_boolean(s[j][2]))
{s[j][2]=true;}
if(!is_number(s[j][3]))
{s[j][3]=0;}}
return s;}
function cf_getKeyCode(k){if(k=='right')
{return 39;}
if(k=='left')
{return 37;}
if(k=='up')
{return 38;}
if(k=='down')
{return 40;}
return-1;}
function cf_setCookie(n,$c,c){if(n)
{var v=$c.triggerHandler(cf_e('currentPosition',c));$.fn.caroSlider.cookie.set(n,v);}}
function cf_getCookie(n){var c=$.fn.caroSlider.cookie.get(n);return(c=='')?0:c;}
function in_mapCss($elem,props){var css={};for(var p=0,l=props.length;p<l;p++)
{css[props[p]]=$elem.css(props[p]);}
return css;}
function in_complementItems(obj,opt,itm,sta){if(!is_object(obj.visibleConf))
{obj.visibleConf={};}
if(!is_object(obj.sizesConf))
{obj.sizesConf={};}
if(obj.start==0&&is_number(sta))
{obj.start=sta;}
if(is_object(obj.visible))
{obj.visibleConf.min=obj.visible.min;obj.visibleConf.max=obj.visible.max;obj.visible=false;}
else if(is_string(obj.visible))
{if(obj.visible=='variable')
{obj.visibleConf.variable=true;}
else
{obj.visibleConf.adjust=obj.visible;}
obj.visible=false;}
else if(is_function(obj.visible))
{obj.visibleConf.adjust=obj.visible;obj.visible=false;}
if(!is_string(obj.filter))
{obj.filter=(itm.filter(':hidden').length>0)?':visible':'*';}
if(!obj[opt.d['width']])
{if(opt.responsive)
{debug(true,'Set a '+opt.d['width']+' for the items!');obj[opt.d['width']]=ms_getTrueLargestSize(itm,opt,'outerWidth');}
else
{obj[opt.d['width']]=(ms_hasVariableSizes(itm,opt,'outerWidth'))?'variable':itm[opt.d['outerWidth']](true);}}
if(!obj[opt.d['height']])
{obj[opt.d['height']]=(ms_hasVariableSizes(itm,opt,'outerHeight'))?'variable':itm[opt.d['outerHeight']](true);}
obj.sizesConf.width=obj.width;obj.sizesConf.height=obj.height;return obj;}
function in_complementVisibleItems(opt,avl){if(opt.items[opt.d['width']]=='variable')
{opt.items.visibleConf.variable=true;}
if(!opt.items.visibleConf.variable){if(is_number(opt[opt.d['width']]))
{opt.items.visible=Math.floor(opt[opt.d['width']]/opt.items[opt.d['width']]);}
else
{opt.items.visible=Math.floor(avl/opt.items[opt.d['width']]);opt[opt.d['width']]=opt.items.visible*opt.items[opt.d['width']];if(!opt.items.visibleConf.adjust)
{opt.align=false;}}
if(opt.items.visible=='Infinity'||opt.items.visible<1)
{debug(true,'Not a valid number of visible items: Set to "variable".');opt.items.visibleConf.variable=true;}}
return opt;}
function in_complementPrimarySize(obj,opt,all){if(obj=='auto')
{obj=ms_getTrueLargestSize(all,opt,'outerWidth');}
return obj;}
function in_complementSecondarySize(obj,opt,all){if(obj=='auto')
{obj=ms_getTrueLargestSize(all,opt,'outerHeight');}
if(!obj)
{obj=opt.items[opt.d['height']];}
return obj;}
function in_getAlignPadding(o,all){var p=cf_getAlignPadding(gi_getCurrentItems(all,o),o);o.padding[o.d[1]]=p[1];o.padding[o.d[3]]=p[0];return o;}
function in_getResponsiveValues(o,all,avl){var visb=cf_getItemAdjustMinMax(Math.ceil(o[o.d['width']]/o.items[o.d['width']]),o.items.visibleConf);if(visb>all.length)
{visb=all.length;}
var newS=Math.floor(o[o.d['width']]/visb);o.items.visible=visb;o.items[o.d['width']]=newS;o[o.d['width']]=visb*newS;return o;}
function bt_pauseOnHoverConfig(p){if(is_string(p))
{var i=(p.indexOf('immediate')>-1)?true:false,r=(p.indexOf('resume')>-1)?true:false;}
else
{var i=r=false;}
return[i,r];}
function bt_mousesheelNumber(mw){return(is_number(mw))?mw:null}
function is_null(a){return(a===null);}
function is_undefined(a){return(is_null(a)||typeof a=='undefined'||a===''||a==='undefined');}
function is_array(a){return(a instanceof Array);}
function is_jquery(a){return(a instanceof jQuery);}
function is_object(a){return((a instanceof Object||typeof a=='object')&&!is_null(a)&&!is_jquery(a)&&!is_array(a));}
function is_number(a){return((a instanceof Number||typeof a=='number')&&!isNaN(a));}
function is_string(a){return((a instanceof String||typeof a=='string')&&!is_undefined(a)&&!is_true(a)&&!is_false(a));}
function is_function(a){return(a instanceof Function||typeof a=='function');}
function is_boolean(a){return(a instanceof Boolean||typeof a=='boolean'||is_true(a)||is_false(a));}
function is_true(a){return(a===true||a==='true');}
function is_false(a){return(a===false||a==='false');}
function is_percentage(x){return(is_string(x)&&x.slice(-1)=='%');}
function getTime(){return new Date().getTime();}
function deprecated(o,n){debug(true,o+' is DEPRECATED, support for it will be removed. Use '+n+' instead.');}
function debug(d,m){if(!is_undefined(window.console)&&!is_undefined(window.console.log))
{if(is_object(d))
{var s=' ('+d.selector+')';d=d.debug;}
else
{var s='';}
if(!d)
{return false;}
if(is_string(m))
{m='caroSlider'+s+': '+m;}
else
{m=['caroSlider'+s+':',m];}
window.console.log(m);}
return false;}
$.extend($.easing,{'quadratic':function(t){var t2=t*t;return t*(-t2*t+4*t2-6*t+4);},'cubic':function(t){return t*(4*t*t-9*t+6);},'elastic':function(t){var t2=t*t;return t*(33*t2*t2-106*t2*t+126*t2-67*t+15);}});})(jQuery);
if(typeof jQuery!='undefined'&&typeof $.jcarousel=='undefined')
{(function($){var defaults={vertical:false,rtl:false,start:1,offset:1,size:null,scroll:3,visible:null,animation:'normal',easing:'swing',auto:0,wrap:null,initCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,buttonNextHTML:'<div></div>',buttonPrevHTML:'<div></div>',buttonNextEvent:'click',buttonPrevEvent:'click',buttonNextCallback:null,buttonPrevCallback:null,itemFallbackDimension:null},windowLoaded=false;$(window).bind('load.jcarousel',function(){windowLoaded=true;});$.jcarousel=function(e,o){this.options=$.extend({},defaults,o||{});this.locked=false;this.autoStopped=false;this.container=null;this.clip=null;this.list=null;this.buttonNext=null;this.buttonPrev=null;this.buttonNextState=null;this.buttonPrevState=null;if(!o||o.rtl===undefined){this.options.rtl=($(e).attr('dir')||$('html').attr('dir')||'').toLowerCase()=='rtl';}
this.wh=!this.options.vertical?'width':'height';this.lt=!this.options.vertical?(this.options.rtl?'right':'left'):'top';var skin='',split=e.className.split(' ');for(var i=0;i<split.length;i++){if(split[i].indexOf('jcarousel-skin')!=-1){$(e).removeClass(split[i]);skin=split[i];break;}}
if(e.nodeName.toUpperCase()=='UL'||e.nodeName.toUpperCase()=='OL'){this.list=$(e);this.container=this.list.parent();if(this.container.hasClass('jcarousel-clip')){if(!this.container.parent().hasClass('jcarousel-container')){this.container=this.container.wrap('<div></div>');}
this.container=this.container.parent();}else if(!this.container.hasClass('jcarousel-container')){this.container=this.list.wrap('<div></div>').parent();}}else{this.container=$(e);this.list=this.container.find('ul,ol').eq(0);}
if(skin!==''&&this.container.parent()[0].className.indexOf('jcarousel-skin')==-1){this.container.wrap('<div class=" '+skin+'"></div>');}
this.clip=this.list.parent();if(!this.clip.length||!this.clip.hasClass('jcarousel-clip')){this.clip=this.list.wrap('<div></div>').parent();}
this.buttonNext=$('.jcarousel-next',this.container);if(this.buttonNext.size()===0&&this.options.buttonNextHTML!==null){this.buttonNext=this.clip.after(this.options.buttonNextHTML).next();}
this.buttonNext.addClass(this.className('jcarousel-next'));this.buttonPrev=$('.jcarousel-prev',this.container);if(this.buttonPrev.size()===0&&this.options.buttonPrevHTML!==null){this.buttonPrev=this.clip.after(this.options.buttonPrevHTML).next();}
this.buttonPrev.addClass(this.className('jcarousel-prev'));this.clip.addClass(this.className('jcarousel-clip')).css({overflow:'hidden',position:'relative'});this.list.addClass(this.className('jcarousel-list')).css({overflow:'hidden',position:'relative',top:0,margin:0,padding:0}).css((this.options.rtl?'right':'left'),0);this.container.addClass(this.className('jcarousel-container')).css({position:'relative'});if(!this.options.vertical&&this.options.rtl){this.container.addClass('jcarousel-direction-rtl').attr('dir','rtl');}
var di=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null;var li=this.list.children('li');var self=this;if(li.size()>0){var wh=0,j=this.options.offset;li.each(function(){self.format(this,j++);wh+=self.dimension(this,di);});this.list.css(this.wh,(wh+100)+'px');if(!o||o.size===undefined){this.options.size=li.size();}}
this.container.css('display','block');this.buttonNext.css('display','block');this.buttonPrev.css('display','block');this.funcNext=function(){self.next();};this.funcPrev=function(){self.prev();};this.funcResize=function(){self.reload();};if(this.options.initCallback!==null){this.options.initCallback(this,'init');}
if(!windowLoaded&&$.browser.safari){this.buttons(false,false);$(window).bind('load.jcarousel',function(){self.setup();});}else{this.setup();}};var $jc=$.jcarousel;$jc.fn=$jc.prototype={jcarousel:'0.2.7'};$jc.fn.extend=$jc.extend=$.extend;$jc.fn.extend({setup:function(){this.first=null;this.last=null;this.prevFirst=null;this.prevLast=null;this.animating=false;this.timer=null;this.tail=null;this.inTail=false;if(this.locked){return;}
this.list.css(this.lt,this.pos(this.options.offset)+'px');var p=this.pos(this.options.start,true);this.prevFirst=this.prevLast=null;this.animate(p,false);$(window).unbind('resize.jcarousel',this.funcResize).bind('resize.jcarousel',this.funcResize);},reset:function(){this.list.empty();this.list.css(this.lt,'0px');this.list.css(this.wh,'10px');if(this.options.initCallback!==null){this.options.initCallback(this,'reset');}
this.setup();},reload:function(){if(this.tail!==null&&this.inTail){this.list.css(this.lt,$jc.intval(this.list.css(this.lt))+this.tail);}
this.tail=null;this.inTail=false;if(this.options.reloadCallback!==null){this.options.reloadCallback(this);}
if(this.options.visible!==null){var self=this;var di=Math.ceil(this.clipping()/this.options.visible),wh=0,lt=0;this.list.children('li').each(function(i){wh+=self.dimension(this,di);if(i+1<self.first){lt=wh;}});this.list.css(this.wh,wh+'px');this.list.css(this.lt,-lt+'px');}
this.scroll(this.first,false);},lock:function(){this.locked=true;this.buttons();},unlock:function(){this.locked=false;this.buttons();},size:function(s){if(s!==undefined){this.options.size=s;if(!this.locked){this.buttons();}}
return this.options.size;},has:function(i,i2){if(i2===undefined||!i2){i2=i;}
if(this.options.size!==null&&i2>this.options.size){i2=this.options.size;}
for(var j=i;j<=i2;j++){var e=this.get(j);if(!e.length||e.hasClass('jcarousel-item-placeholder')){return false;}}
return true;},get:function(i){return $('.jcarousel-item-'+i,this.list);},add:function(i,s){var e=this.get(i),old=0,n=$(s);if(e.length===0){var c,j=$jc.intval(i);e=this.create(i);while(true){c=this.get(--j);if(j<=0||c.length){if(j<=0){this.list.prepend(e);}else{c.after(e);}
break;}}}else{old=this.dimension(e);}
if(n.get(0).nodeName.toUpperCase()=='LI'){e.replaceWith(n);e=n;}else{e.empty().append(s);}
this.format(e.removeClass(this.className('jcarousel-item-placeholder')),i);var di=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null;var wh=this.dimension(e,di)-old;if(i>0&&i<this.first){this.list.css(this.lt,$jc.intval(this.list.css(this.lt))-wh+'px');}
this.list.css(this.wh,$jc.intval(this.list.css(this.wh))+wh+'px');return e;},remove:function(i){var e=this.get(i);if(!e.length||(i>=this.first&&i<=this.last)){return;}
var d=this.dimension(e);if(i<this.first){this.list.css(this.lt,$jc.intval(this.list.css(this.lt))+d+'px');}
e.remove();this.list.css(this.wh,$jc.intval(this.list.css(this.wh))-d+'px');},next:function(){if(this.tail!==null&&!this.inTail){this.scrollTail(false);}else{this.scroll(((this.options.wrap=='both'||this.options.wrap=='last')&&this.options.size!==null&&this.last==this.options.size)?1:this.first+this.options.scroll);}},prev:function(){if(this.tail!==null&&this.inTail){this.scrollTail(true);}else{this.scroll(((this.options.wrap=='both'||this.options.wrap=='first')&&this.options.size!==null&&this.first==1)?this.options.size:this.first-this.options.scroll);}},scrollTail:function(b){if(this.locked||this.animating||!this.tail){return;}
this.pauseAuto();var pos=$jc.intval(this.list.css(this.lt));pos=!b?pos-this.tail:pos+this.tail;this.inTail=!b;this.prevFirst=this.first;this.prevLast=this.last;this.animate(pos);},scroll:function(i,a){if(this.locked||this.animating){return;}
this.pauseAuto();this.animate(this.pos(i),a);},pos:function(i,fv){var pos=$jc.intval(this.list.css(this.lt));if(this.locked||this.animating){return pos;}
if(this.options.wrap!='circular'){i=i<1?1:(this.options.size&&i>this.options.size?this.options.size:i);}
var back=this.first>i;var f=this.options.wrap!='circular'&&this.first<=1?1:this.first;var c=back?this.get(f):this.get(this.last);var j=back?f:f-1;var e=null,l=0,p=false,d=0,g;while(back?--j>=i:++j<i){e=this.get(j);p=!e.length;if(e.length===0){e=this.create(j).addClass(this.className('jcarousel-item-placeholder'));c[back?'before':'after'](e);if(this.first!==null&&this.options.wrap=='circular'&&this.options.size!==null&&(j<=0||j>this.options.size)){g=this.get(this.index(j));if(g.length){e=this.add(j,g.clone(true));}}}
c=e;d=this.dimension(e);if(p){l+=d;}
if(this.first!==null&&(this.options.wrap=='circular'||(j>=1&&(this.options.size===null||j<=this.options.size)))){pos=back?pos+d:pos-d;}}
var clipping=this.clipping(),cache=[],visible=0,v=0;c=this.get(i-1);j=i;while(++visible){e=this.get(j);p=!e.length;if(e.length===0){e=this.create(j).addClass(this.className('jcarousel-item-placeholder'));if(c.length===0){this.list.prepend(e);}else{c[back?'before':'after'](e);}
if(this.first!==null&&this.options.wrap=='circular'&&this.options.size!==null&&(j<=0||j>this.options.size)){g=this.get(this.index(j));if(g.length){e=this.add(j,g.clone(true));}}}
c=e;d=this.dimension(e);if(d===0){throw new Error('jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...');}
if(this.options.wrap!='circular'&&this.options.size!==null&&j>this.options.size){cache.push(e);}else if(p){l+=d;}
v+=d;if(v>=clipping){break;}
j++;}
for(var x=0;x<cache.length;x++){cache[x].remove();}
if(l>0){this.list.css(this.wh,this.dimension(this.list)+l+'px');if(back){pos-=l;this.list.css(this.lt,$jc.intval(this.list.css(this.lt))-l+'px');}}
var last=i+visible-1;if(this.options.wrap!='circular'&&this.options.size&&last>this.options.size){last=this.options.size;}
if(j>last){visible=0;j=last;v=0;while(++visible){e=this.get(j--);if(!e.length){break;}
v+=this.dimension(e);if(v>=clipping){break;}}}
var first=last-visible+1;if(this.options.wrap!='circular'&&first<1){first=1;}
if(this.inTail&&back){pos+=this.tail;this.inTail=false;}
this.tail=null;if(this.options.wrap!='circular'&&last==this.options.size&&(last-visible+1)>=1){var m=$jc.margin(this.get(last),!this.options.vertical?'marginRight':'marginBottom');if((v-m)>clipping){this.tail=v-clipping-m;}}
if(fv&&i===this.options.size&&this.tail){pos-=this.tail;this.inTail=true;}
while(i-->first){pos+=this.dimension(this.get(i));}
this.prevFirst=this.first;this.prevLast=this.last;this.first=first;this.last=last;return pos;},animate:function(p,a){if(this.locked||this.animating){return;}
this.animating=true;var self=this;var scrolled=function(){self.animating=false;if(p===0){self.list.css(self.lt,0);}
if(!self.autoStopped&&(self.options.wrap=='circular'||self.options.wrap=='both'||self.options.wrap=='last'||self.options.size===null||self.last<self.options.size||(self.last==self.options.size&&self.tail!==null&&!self.inTail))){self.startAuto();}
self.buttons();self.notify('onAfterAnimation');if(self.options.wrap=='circular'&&self.options.size!==null){for(var i=self.prevFirst;i<=self.prevLast;i++){if(i!==null&&!(i>=self.first&&i<=self.last)&&(i<1||i>self.options.size)){self.remove(i);}}}};this.notify('onBeforeAnimation');if(!this.options.animation||a===false){this.list.css(this.lt,p+'px');scrolled();}else{var o=!this.options.vertical?(this.options.rtl?{'right':p}:{'left':p}):{'top':p};this.list.animate(o,this.options.animation,this.options.easing,scrolled);}},startAuto:function(s){if(s!==undefined){this.options.auto=s;}
if(this.options.auto===0){return this.stopAuto();}
if(this.timer!==null){return;}
this.autoStopped=false;var self=this;this.timer=window.setTimeout(function(){self.next();},this.options.auto*1000);},stopAuto:function(){this.pauseAuto();this.autoStopped=true;},pauseAuto:function(){if(this.timer===null){return;}
window.clearTimeout(this.timer);this.timer=null;},buttons:function(n,p){if(n==null){n=!this.locked&&this.options.size!==0&&((this.options.wrap&&this.options.wrap!='first')||this.options.size===null||this.last<this.options.size);if(!this.locked&&(!this.options.wrap||this.options.wrap=='first')&&this.options.size!==null&&this.last>=this.options.size){n=this.tail!==null&&!this.inTail;}}
if(p==null){p=!this.locked&&this.options.size!==0&&((this.options.wrap&&this.options.wrap!='last')||this.first>1);if(!this.locked&&(!this.options.wrap||this.options.wrap=='last')&&this.options.size!==null&&this.first==1){p=this.tail!==null&&this.inTail;}}
var self=this;if(this.buttonNext.size()>0){this.buttonNext.unbind(this.options.buttonNextEvent+'.jcarousel',this.funcNext);if(n){this.buttonNext.bind(this.options.buttonNextEvent+'.jcarousel',this.funcNext);}
this.buttonNext[n?'removeClass':'addClass'](this.className('jcarousel-next-disabled')).attr('disabled',n?false:true);if(this.options.buttonNextCallback!==null&&this.buttonNext.data('jcarouselstate')!=n){this.buttonNext.each(function(){self.options.buttonNextCallback(self,this,n);}).data('jcarouselstate',n);}}else{if(this.options.buttonNextCallback!==null&&this.buttonNextState!=n){this.options.buttonNextCallback(self,null,n);}}
if(this.buttonPrev.size()>0){this.buttonPrev.unbind(this.options.buttonPrevEvent+'.jcarousel',this.funcPrev);if(p){this.buttonPrev.bind(this.options.buttonPrevEvent+'.jcarousel',this.funcPrev);}
this.buttonPrev[p?'removeClass':'addClass'](this.className('jcarousel-prev-disabled')).attr('disabled',p?false:true);if(this.options.buttonPrevCallback!==null&&this.buttonPrev.data('jcarouselstate')!=p){this.buttonPrev.each(function(){self.options.buttonPrevCallback(self,this,p);}).data('jcarouselstate',p);}}else{if(this.options.buttonPrevCallback!==null&&this.buttonPrevState!=p){this.options.buttonPrevCallback(self,null,p);}}
this.buttonNextState=n;this.buttonPrevState=p;},notify:function(evt){var state=this.prevFirst===null?'init':(this.prevFirst<this.first?'next':'prev');this.callback('itemLoadCallback',evt,state);if(this.prevFirst!==this.first){this.callback('itemFirstInCallback',evt,state,this.first);this.callback('itemFirstOutCallback',evt,state,this.prevFirst);}
if(this.prevLast!==this.last){this.callback('itemLastInCallback',evt,state,this.last);this.callback('itemLastOutCallback',evt,state,this.prevLast);}
this.callback('itemVisibleInCallback',evt,state,this.first,this.last,this.prevFirst,this.prevLast);this.callback('itemVisibleOutCallback',evt,state,this.prevFirst,this.prevLast,this.first,this.last);},callback:function(cb,evt,state,i1,i2,i3,i4){if(this.options[cb]==null||(typeof this.options[cb]!='object'&&evt!='onAfterAnimation')){return;}
var callback=typeof this.options[cb]=='object'?this.options[cb][evt]:this.options[cb];if(!$.isFunction(callback)){return;}
var self=this;if(i1===undefined){callback(self,state,evt);}else if(i2===undefined){this.get(i1).each(function(){callback(self,this,i1,state,evt);});}else{var call=function(i){self.get(i).each(function(){callback(self,this,i,state,evt);});};for(var i=i1;i<=i2;i++){if(i!==null&&!(i>=i3&&i<=i4)){call(i);}}}},create:function(i){return this.format('<li></li>',i);},format:function(e,i){e=$(e);var split=e.get(0).className.split(' ');for(var j=0;j<split.length;j++){if(split[j].indexOf('jcarousel-')!=-1){e.removeClass(split[j]);}}
e.addClass(this.className('jcarousel-item')).addClass(this.className('jcarousel-item-'+i)).css({'float':(this.options.rtl?'right':'left'),'list-style':'none'}).attr('jcarouselindex',i);return e;},className:function(c){return c+' '+c+(!this.options.vertical?'-horizontal':'-vertical');},dimension:function(e,d){var el=e.jquery!==undefined?e[0]:e;var old=!this.options.vertical?(el.offsetWidth||$jc.intval(this.options.itemFallbackDimension))+$jc.margin(el,'marginLeft')+$jc.margin(el,'marginRight'):(el.offsetHeight||$jc.intval(this.options.itemFallbackDimension))+$jc.margin(el,'marginTop')+$jc.margin(el,'marginBottom');if(d==null||old==d){return old;}
var w=!this.options.vertical?d-$jc.margin(el,'marginLeft')-$jc.margin(el,'marginRight'):d-$jc.margin(el,'marginTop')-$jc.margin(el,'marginBottom');$(el).css(this.wh,w+'px');return this.dimension(el);},clipping:function(){return!this.options.vertical?this.clip[0].offsetWidth-$jc.intval(this.clip.css('borderLeftWidth'))-$jc.intval(this.clip.css('borderRightWidth')):this.clip[0].offsetHeight-$jc.intval(this.clip.css('borderTopWidth'))-$jc.intval(this.clip.css('borderBottomWidth'));},index:function(i,s){if(s==null){s=this.options.size;}
return Math.round((((i-1)/s)-Math.floor((i-1)/s))*s)+1;}});$jc.extend({defaults:function(d){return $.extend(defaults,d||{});},margin:function(e,p){if(!e){return 0;}
var el=e.jquery!==undefined?e[0]:e;if(p=='marginRight'&&$.browser.safari){var old={'display':'block','float':'none','width':'auto'},oWidth,oWidth2;$.swap(el,old,function(){oWidth=el.offsetWidth;});old.marginRight=0;$.swap(el,old,function(){oWidth2=el.offsetWidth;});return oWidth2-oWidth;}
return $jc.intval($.css(el,p));},intval:function(v){v=parseInt(v,10);return isNaN(v)?0:v;}});$.fn.jcarousel=function(o){if(typeof o=='string'){var instance=$(this).data('jcarousel'),args=Array.prototype.slice.call(arguments,1);return instance[o].apply(instance,args);}else{return this.each(function(){$(this).data('jcarousel',new $jc(this,o));});}};})(jQuery);};
var jaaulde=window.jaaulde||{};jaaulde.utils=jaaulde.utils||{};jaaulde.utils.cookies=(function(){var resolveOptions,assembleOptionsString,parseCookies,constructor,defaultOptions={expiresAt:null,path:'/',domain:null,secure:false};resolveOptions=function(options){var returnValue,expireDate;if(typeof options!=='object'||options===null){returnValue=defaultOptions;}else{returnValue={expiresAt:defaultOptions.expiresAt,path:defaultOptions.path,domain:defaultOptions.domain,secure:defaultOptions.secure};if(typeof options.expiresAt==='object'&&options.expiresAt instanceof Date){returnValue.expiresAt=options.expiresAt;}else if(typeof options.hoursToLive==='number'&&options.hoursToLive!==0){expireDate=new Date();expireDate.setTime(expireDate.getTime()+(options.hoursToLive*60*60*1000));returnValue.expiresAt=expireDate;}
if(typeof options.path==='string'&&options.path!==''){returnValue.path=options.path;}
if(typeof options.domain==='string'&&options.domain!==''){returnValue.domain=options.domain;}
if(options.secure===true){returnValue.secure=options.secure;}}
return returnValue;};assembleOptionsString=function(options){options=resolveOptions(options);return((typeof options.expiresAt==='object'&&options.expiresAt instanceof Date?'; expires='+options.expiresAt.toGMTString():'')+'; path='+options.path+(typeof options.domain==='string'?'; domain='+options.domain:'')+(options.secure===true?'; secure':''));};parseCookies=function(){var cookies={},i,pair,name,value,separated=document.cookie.split(';'),unparsedValue;for(i=0;i<separated.length;i=i+1){pair=separated[i].split('=');name=pair[0].replace(/^\s*/,'').replace(/\s*$/,'');try{value=decodeURIComponent(pair[1]);}catch(e1){value=pair[1];}
if(typeof JSON==='object'&&JSON!==null&&typeof JSON.parse==='function'){try{unparsedValue=value;value=JSON.parse(value);}catch(e2){value=unparsedValue;}}
cookies[name]=value;}
return cookies;};constructor=function(){};constructor.prototype.get=function(cookieName){var returnValue,item,cookies=parseCookies();if(typeof cookieName==='string'){returnValue=(typeof cookies[cookieName]!=='undefined')?cookies[cookieName]:null;}else if(typeof cookieName==='object'&&cookieName!==null){returnValue={};for(item in cookieName){if(typeof cookies[cookieName[item]]!=='undefined'){returnValue[cookieName[item]]=cookies[cookieName[item]];}else{returnValue[cookieName[item]]=null;}}}else{returnValue=cookies;}
return returnValue;};constructor.prototype.filter=function(cookieNameRegExp){var cookieName,returnValue={},cookies=parseCookies();if(typeof cookieNameRegExp==='string'){cookieNameRegExp=new RegExp(cookieNameRegExp);}
for(cookieName in cookies){if(cookieName.match(cookieNameRegExp)){returnValue[cookieName]=cookies[cookieName];}}
return returnValue;};constructor.prototype.set=function(cookieName,value,options){if(typeof options!=='object'||options===null){options={};}
if(typeof value==='undefined'||value===null){value='';options.hoursToLive=-8760;}else if(typeof value!=='string'){if(typeof JSON==='object'&&JSON!==null&&typeof JSON.stringify==='function'){value=JSON.stringify(value);}else{throw new Error('cookies.set() received non-string value and could not serialize.');}}
var optionsString=assembleOptionsString(options);document.cookie=cookieName+'='+encodeURIComponent(value)+optionsString;};constructor.prototype.del=function(cookieName,options){var allCookies={},name;if(typeof options!=='object'||options===null){options={};}
if(typeof cookieName==='boolean'&&cookieName===true){allCookies=this.get();}else if(typeof cookieName==='string'){allCookies[cookieName]=true;}
for(name in allCookies){if(typeof name==='string'&&name!==''){this.set(name,null,options);}}};constructor.prototype.test=function(){var returnValue=false,testName='cT',testValue='data';this.set(testName,testValue);if(this.get(testName)===testValue){this.del(testName);returnValue=true;}
return returnValue;};constructor.prototype.setOptions=function(options){if(typeof options!=='object'){options=null;}
defaultOptions=resolveOptions(options);};return new constructor();})();(function(){if(window.jQuery){(function($){$.cookies=jaaulde.utils.cookies;var extensions={cookify:function(options){return this.each(function(){var i,nameAttrs=['name','id'],name,$this=$(this),value;for(i in nameAttrs){if(!isNaN(i)){name=$this.attr(nameAttrs[i]);if(typeof name==='string'&&name!==''){if($this.is(':checkbox, :radio')){if($this.attr('checked')){value=$this.val();}}else if($this.is(':input')){value=$this.val();}else{value=$this.html();}
if(typeof value!=='string'||value===''){value=null;}
$.cookies.set(name,value,options);break;}}}});},cookieFill:function(){return this.each(function(){var n,getN,nameAttrs=['name','id'],name,$this=$(this),value;getN=function(){n=nameAttrs.pop();return!!n;};while(getN()){name=$this.attr(n);if(typeof name==='string'&&name!==''){value=$.cookies.get(name);if(value!==null){if($this.is(':checkbox, :radio')){if($this.val()===value){$this.attr('checked','checked');}else{$this.removeAttr('checked');}}else if($this.is(':input')){$this.val(value);}else{$this.html(value);}}
break;}}});},cookieBind:function(options){return this.each(function(){var $this=$(this);$this.cookieFill().change(function(){$this.cookify(options);});});}};$.each(extensions,function(i){$.fn[i]=this;});})(window.jQuery);}})();
$(document).ready(function()
{var customSelect=$(".CustomSelect");if(customSelect.length>0)
{customSelect.jqDropDown();}});(function($,window)
{var DropDown=function(element,settings)
{settings=$.extend({},$.fn.jqDropDown.defaults,settings);var $dropdown=$(element),listWidth,$container,defaultOption=settings.defaultOption,selectedLabel,$toggleLink,$options,effect=settings.effect,effectSpeed=settings.effectSpeed,$optList=$('<ul class="'+settings.optionListName+'" style="display:none;"></ul>');listWidth=$dropdown.width();$dropdown.hide().after('<div class="'+settings.containerName+'" style="position:relative;"></div>');if(defaultOption&&defaultOption!=='')
{selectedLabel=defaultOption;}
else
{selectedLabel=$dropdown.find('option[selected]').text()||$dropdown.find('option:eq(0)').text();}
$toggleLink=$('<a href="#" class="'+settings.toggleBtnName+'">'+selectedLabel+'</a>');$container=$dropdown.next('div.'+settings.containerName);$container.append($toggleLink);$optList.append(BuildOptionList($dropdown,settings));$options=$optList.find('a');$toggleLink.after($optList);ApplyStyle($container,listWidth,settings);$(document).bind('mousedown',function(e)
{var $target=$(e.target);if($(document.activeElement).hasClass(settings.toggleBtnName)||$(document.activeElement).hasClass(settings.optionListName))
{if(!$target.hasClass(settings.optionGroupName)&&!$target.hasClass(settings.toggleBtnName))
{if($target.parents().filter($optList).length)
{$toggleLink.data('index',$optList.find('li').index($target.parent())).focus();UpdateValue($toggleLink,$target,settings);}
else if($(document.activeElement).hasClass(settings.toggleBtnName)&&$optList.is(':visible').length)
{effect==='fade'?$optList.fadeOut(effectSpeed):$optList.hide();return false;}
else if($(document.activeElement).hasClass(settings.toggleBtnName)&&!$optList.filter(':visible').length)
{$toggleLink.blur();return false;}
else if(settings.modal)
{return false;}
effect==='fade'?$optList.fadeOut(effectSpeed):$optList.hide();return false;}
else
{return false;}}});$options.bind('mouseenter click',function(e)
{var $this=$(this);e.preventDefault();$optList.find('a.selected').removeClass('selected');$this.addClass('selected');$toggleLink.data('index',$optList.find('li').index($this.parent()));});$toggleLink.bind('mousedown keydown focusout click',function(e)
{var $this=$(this),$targetOption,selectedIndex=$this.data('index')||0,indexChanged=false,$selectedOption,$options=$optList.find('a'),key;if(e.type==='mousedown'&&e.which===1)
{settings.beforeToggle.call(this);UpdateListDirection($this,$optList,settings);$options.removeClass('selected');$this.focus();$optList.find('li:eq('+selectedIndex+') a').addClass('selected');if($optList.is(':hidden'))
{effect==='fade'?$('.'+settings.optionListName).fadeOut(effectSpeed):$('.'+settings.optionListName).hide();effect==='fade'?$optList.fadeIn(effectSpeed):$optList.show();}
else
{effect==='fade'?$optList.fadeOut(effectSpeed):$optList.hide();}
settings.afterToggle.call(this);}
if(e.type==='keydown')
{switch(e.keyCode)
{case 9:case 27:effect==='fade'?$optList.fadeOut(effectSpeed):$optList.hide();break;case 13:$(document).trigger('mousedown',[{target:$optList.find('li:eq('+$this.data('index')+') a:eq(0)')}]);break;case 38:e.preventDefault();$options.removeClass('selected');for(i=selectedIndex-1;i>=0;i--)
{$targetOption=$optList.find('li:eq('+(i)+')');if(!$targetOption.hasClass(settings.optionGroupName))
{selectedIndex=i;break;}}
break;case 40:e.preventDefault();$options.removeClass('selected');for(i=selectedIndex+1;i<$optList.find('li').length;i++)
{$targetOption=$optList.find('li:eq('+(i)+')');if(!$targetOption.hasClass(settings.optionGroupName))
{selectedIndex=i;break;}}
break;default:key=String.fromCharCode(e.which).toLowerCase();for(i=selectedIndex+1;i<$optList.find('li').length;i++)
{$targetOption=$optList.find('li:eq('+(i)+')');if($targetOption.text().slice(0,1).toLowerCase()===key&&!$targetOption.hasClass(settings.optionGroupName))
{$options.removeClass('selected');selectedIndex=i;indexChanged=true;break;}}
if(!indexChanged)
{for(var i=0;i<selectedIndex;i++)
{$targetOption=$optList.find('li:eq('+(i)+')');if($targetOption.text().slice(0,1).toLowerCase()===key&&!$targetOption.hasClass(settings.optionGroupName))
{$options.removeClass('selected');selectedIndex=i;break;}}}
break;}
$this.data('index',selectedIndex);$selectedOption=$optList.find('li:eq('+$this.data('index')+') a:eq(0)');$selectedOption.addClass('selected');UpdateValue($this,$selectedOption,settings);}
else
{return false;}});};function UpdateValue($target,$elem,settings)
{var $ph,val;if($elem&&$elem.text()!=='')
{$target.text($elem.text()).append('<span class="CPodSelectLinkArrow"></span>');}
if(settings.placeholder)
{$ph=$(settings.placeholder);settings.useValue?val=$elem.attr('rel'):val=$elem.text();if($ph.is('input'))
{$ph.val(val);}
else
{$ph.text(val);}}
settings.optionChanged.call(this);}
function BuildOptionList($list,settings)
{var optList,i,listItem='',$curItem,isSelected='';if(settings.data.length)
{optList=settings.data;}
else
{optList=$list.find('option,optgroup');}
if(settings.defaultOption&&settings.defaultOption!=='')
{listItem+='<li class="'+settings.optionName+'"><a href="#">'+settings.defaultOption+'</a></li>';}
for(i=0;i<optList.length;i++)
{$curItem=$(optList[i]);if($curItem.is(':selected')&&!settings.defaultOption)
{isSelected='selected';}
if($curItem.is('option'))
{listItem+='<li class="'+settings.optionName+'"><a class="'+isSelected+'" href="#" rel="'+$curItem.attr('value')+'">'+$curItem.text()+'</a></li>';}
else
{listItem+='<li class="'+settings.optionGroupName+'"><span class="CPodSelectLinkArrow"></span>'+$curItem.attr('label')+'</li>';}
isSelected='';}
return listItem;}
function ApplyStyle($container,lisWidth,settings)
{var $list=$container.find('ul:eq(0)'),$listItems=$container.find('ul > li > a'),$toggleLink=$container.find('a:eq(0)'),toggleLinkPadding=parseInt($toggleLink.css("padding-left"),10)+parseInt($toggleLink.css("padding-right"),10),defaultOpt_padding;UpdateListDirection($toggleLink,$list,settings);if(settings.defaultStyle)
{$container.find('li.'+settings.optionGroupName).length>0?defaultOpt_padding=25:defaultOpt_padding=10;$toggleLink.css({width:lisWidth-toggleLinkPadding}).append('<span class="CPodSelectLinkArrow"></span>');$list.css({width:200+toggleLinkPadding});$listItems.css({'padding-left':defaultOpt_padding});}}
function UpdateListDirection($toggleLink,$list,settings)
{var topPos,toggleLinkPadding,borderWidth,$select=$('select'),counter,direction;toggleLinkPadding=parseInt($toggleLink.css("padding-top"),10)+parseInt($toggleLink.css("padding-bottom"),10)||0;borderWidth=parseInt($toggleLink.css("border-top-width"),10)+parseInt($toggleLink.css("border-bottom-width"),10)||0;if(direction==='up'||(($toggleLink.offset().top+$list.height()+20)>$(window).height()+$(window).scrollTop())&&($toggleLink.offset().top>$list.height()+20))
{topPos=-($list.height()+toggleLinkPadding-borderWidth);direction='up';}
else
{topPos=$toggleLink.height()+toggleLinkPadding+borderWidth;direction='down';}
$list.css({top:topPos});if($.browser.msie&&$.browser.version==='6.0'||$.browser.version==='7.0')
{direction==='up'?counter=0:counter=$select.length;$select.each(function()
{$(this).next('div').css({'z-index':counter});if(direction==='up')
{counter+=1;}
else
{counter-=1;}});}}
$.fn.jqDropDown=function(options)
{return this.each(function()
{var $this=$(this);if($this.data('jqDropDown'))
{return;}
var dropdown=new DropDown(this,options);$this.data('jqDropDown',dropdown);});};$.fn.jqDropDown.Debug=function($obj)
{if(window.console&&window.console.log)
{window.console.log('hilight selection count: '+$obj.text());}};$.fn.jqDropDown.defaults={effect:'default',effectSpeed:400,modal:false,data:{},defaultOption:null,containerName:'ddContainer',toggleBtnName:'ddToggle',optionListName:'ddOptionList',optionGroupName:'optgroup',optionName:'ddOption',defaultStyle:true,placeholder:null,useValue:true,direction:'down',beforeToggle:function()
{},afterToggle:function()
{},optionChanged:function()
{}};}(jQuery,window,undefined));
(function($){$.format=(function(){var parseMonth=function(value){switch(value){case"Jan":return"01";case"Feb":return"02";case"Mar":return"03";case"Apr":return"04";case"May":return"05";case"Jun":return"06";case"Jul":return"07";case"Aug":return"08";case"Sep":return"09";case"Oct":return"10";case"Nov":return"11";case"Dec":return"12";default:return value;}};var parseTime=function(value){var retValue=value;if(retValue.indexOf(".")!==-1){retValue=retValue.substring(0,retValue.indexOf("."));}
var values3=retValue.split(":");if(values3.length===3){hour=values3[0];minute=values3[1];second=values3[2];return{time:retValue,hour:hour,minute:minute,second:second};}else{return{time:"",hour:"",minute:"",second:""};}};return{date:function(value,format){try{var year=null;var month=null;var dayOfMonth=null;var time=null;if(typeof value.getFullYear==="function"){year=value.getFullYear();month=value.getMonth()+1;dayOfMonth=value.getDate();time=parseTime(value.toTimeString());}else{var values=value.split(" ");switch(values.length){case 6:year=values[5];month=parseMonth(values[1]);dayOfMonth=values[2];time=parseTime(values[3]);break;case 2:var values2=values[0].split("-");year=values2[0];month=values2[1];dayOfMonth=values2[2];time=parseTime(values[1]);break;default:return value;}}
var pattern="";var retValue="";for(i=0;i<format.length;i++){var currentPattern=format.charAt(i);pattern+=currentPattern;switch(pattern){case"dd":retValue+=dayOfMonth;pattern="";break;case"MM":retValue+=month;pattern="";break;case"yyyy":retValue+=year;pattern="";break;case"HH":retValue+=time.hour;pattern="";break;case"hh":retValue+=(time.hour===0?12:time.hour<13?time.hour:time.hour-12);pattern="";break;case"mm":retValue+=time.minute;pattern="";break;case"ss":retValue+=time.second;pattern="";break;case"a":retValue+=time.hour>12?"PM":"AM";pattern="";break;case" ":retValue+=currentPattern;pattern="";break;case"/":retValue+=currentPattern;pattern="";break;case":":retValue+=currentPattern;pattern="";break;default:if(pattern.length===2&&pattern.indexOf("y")!==0){retValue+=pattern.substring(0,1);pattern=pattern.substring(1,2);}else if((pattern.length===3&&pattern.indexOf("yyy")===-1)){pattern="";}}}
return retValue;}catch(e){console.log(e);return value;}}};}());}(jQuery));$(document).ready(function(){$(".shortDateFormat").each(function(idx,elem){if($(elem).is(":input")){$(elem).val($.format.date($(elem).val(),'dd/MM/yyyy'));}else{$(elem).text($.format.date($(elem).text(),'dd/MM/yyyy'));}});$(".longDateFormat").each(function(idx,elem){if($(elem).is(":input")){$(elem).val($.format.date($(elem).val(),'dd/MM/yyyy hh:mm:ss'));}else{$(elem).text($.format.date($(elem).text(),'dd/MM/yyyy hh:mm:ss'));}});});
(function($){$.fn.extend({disable:function(){return this.each(function(){$(this).attr({disabled:true});});},enable:function(){return this.each(function(){$(this).removeAttr('disabled');});},toggleDisabled:function(disable){switch(typeof(disable)){case"boolean":break;case"number":disable=disable>0;break;default:disable=!this.is(':disabled');}
return $(this)[disable?"disable":"enable"]();},toggleEnabled:function(enable){switch(typeof(enable)){case"boolean":break;case"number":enable=enable>0;break;default:enable=this.is(':disabled');}
return $(this)[enable?"enable":"disable"]();}});})(jQuery);
if(jQuery)(function($){$.extend($.fn,{selectBox:function(method,data){var typeTimer,typeSearch='',isMac=navigator.platform.match(/mac/i);var init=function(select,data){if(navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i))return false;if(select.tagName.toLowerCase()!=='select')return false;select=$(select);if(select.data('selectBox-control'))return false;select.wrap('<div class="selectBox-wrapper" />');var control=$('<a class="selectBox" />'),options,settings=data||{},multiple=!!select.attr('multiple'),inline=multiple||parseInt(select.attr('size'))>1,lastSelected,formLabel,ariaLabelledBy='';select.data('_tmp',0);control.addClass(select.attr('class')).attr('id','selectBox-control-'+(select.attr('id')?select.attr('id'):select[0][$.expando])).attr('tabindex',(select.attr('tabindex')||0)).css('display','inline-block').bind('focus.selectBox',function(){if(control.hasClass('selectBox-active'))return;control.addClass('selectBox-active');if(control.data('selectBox-last-selected'))addHover(select,control.data('selectBox-last-selected'));select.trigger('focus');}).bind('blur.selectBox',function(){if(!control.hasClass('selectBox-active'))return;control.removeClass('selectBox-active').removeClass('selectBox-multiselect');select.trigger('blur');});if(!$(window).data('selectBox-bindings')){$(window).data('selectBox-bindings',true).bind('scroll.selectBox',hideMenus).bind('resize.selectBox',hideMenus);}
if(select.attr('title'))control.attr('title',select.attr('title'));if(select.attr('disabled'))control.addClass('selectBox-disabled').attr('aria-disabled',true);$('label[for="'+select.attr('id')+'"]').each(function(index,element){if(!element.id)element.id=control.attr('id')+'-label'+index;ariaLabelledBy=control.attr('aria-labelledby')||'';ariaLabelledBy=ariaLabelledBy.length?ariaLabelledBy+' '+element.id:element.id;control.attr('aria-labelledby',ariaLabelledBy)});select.closest('label').each(function(index,element){if(!element.id)element.id=control.attr('id')+'-label'+index;ariaLabelledBy=control.attr('aria-labelledby')||'';ariaLabelledBy=ariaLabelledBy.length?ariaLabelledBy+' '+element.id:element.id;control.attr('aria-labelledby',ariaLabelledBy)});if(select.attr('aria-labelledby'))
{ariaLabelledBy=control.attr('aria-labelledby')||'';ariaLabelledBy=ariaLabelledBy.length?ariaLabelledBy+' '+select.attr('aria-labelledby'):select.attr('aria-labelledby');control.attr('aria-labelledby',ariaLabelledBy);}
if(select.attr('aria-label'))control.attr('aria-label',select.attr('aria-label'));select.bind('click.selectBox',function(event){control.focus();event.preventDefault();});if(inline){options=getOptions(select,'inline');control.attr('role','listbox').attr('aria-multiselectable',multiple).append(options).data('selectBox-options',options).addClass('selectBox-inline selectBox-menuShowing').bind('keydown.selectBox',function(event){handleKeyDown(select,event);}).bind('keypress.selectBox',function(event){handleKeyPress(select,event);}).bind('mousedown.selectBox',function(event){if($(event.target).is('A.selectBox-inline'))event.preventDefault();if(!control.hasClass('selectBox-active'))control.focus();}).insertAfter(select);if(!select[0].style.height){var size=select.attr('size')?parseInt(select.attr('size')):5;var tmp=control.clone().removeAttr('id').css({position:'absolute',top:'-9999em'}).show().appendTo('body');tmp.find('.selectBox-options').html('<li><a>\u00A0</a></li>');var optionHeight=parseInt(tmp.find('.selectBox-options A:first').html('&nbsp;').outerHeight());tmp.remove();control.height(optionHeight*size);}
disableSelection(control);}else{var label=$('<span class="selectBox-label" />'),arrow=$('<span class="selectBox-arrow"><span class="selectBox-arrow-icon"></span></span>');label.attr('id','selectBox-label-'+control.attr('id')).attr('class',getLabelClass(select)).text(getLabelText(select));options=getOptions(select,'dropdown');ariaLabelledBy=ariaLabelledBy.length?label.attr('id')+' '+ariaLabelledBy:label.attr('id');control.attr('role',isMac?'button':'combobox').attr('aria-haspopup',true).attr('aria-readonly',true).attr('aria-expanded',false).attr('aria-owns','selectBox-dropdown-menu-'+(select.attr('id')?select.attr('id'):select[0][$.expando])).attr('aria-labelledby',ariaLabelledBy).data('selectBox-options',options).addClass('selectBox-dropdown').append(label).append(arrow).bind('mousedown.selectBox',function(event){if(control.hasClass('selectBox-menuShowing')){hideMenus();}else{event.stopPropagation();options.data('selectBox-down-at-x',event.screenX).data('selectBox-down-at-y',event.screenY);showMenu(select);}}).bind('keydown.selectBox',function(event){handleKeyDown(select,event);}).bind('keypress.selectBox',function(event){handleKeyPress(select,event);}).bind('open.selectBox',function(event,triggerData){if(triggerData&&triggerData._selectBox===true)return;showMenu(select);}).bind('close.selectBox',function(event,triggerData){if(triggerData&&triggerData._selectBox===true)return;hideMenus();}).insertAfter(select);options.attr('aria-labelledby',ariaLabelledBy).insertAfter(control);var labelWidth=control.width()-arrow.outerWidth()-parseInt(label.css('paddingLeft'))-parseInt(label.css('paddingLeft'));label.width(labelWidth);disableSelection(control);}
select.removeData('_tmp').addClass('selectBox').data('selectBox-control',control).data('selectBox-settings',settings).hide().ready(function(e){var cacheChangeHandler=null;if(settings.change){cacheChangeHandler=settings.change;settings.change=null;}
setValue(select,select.val());if(cacheChangeHandler){settings.change=cacheChangeHandler;}});adjustWidth(select);lastSelected=options.find('.selectBox-selected').last();if(lastSelected.length){control.data('selectBox-last-selected',lastSelected);control.attr('aria-activedescendant',lastSelected.attr('id'));keepOptionInView(select,lastSelected,true);}};var getOptions=function(select,type){var options,option,i=0
_getOptions=function(select,options){select.children('OPTION, OPTGROUP').each(function(){if($(this).is('OPTION')){var parentNode=$(this).parent().is('OPTGROUP')?options.find('.selectBox-optgroup:last ul'):options;if($(this).length>0){option=generateOption($(this),parentNode);option.find('A').attr('id',options.attr('id')+'-'+(i++));}else{parentNode.append('<li role="presentation"><a>\u00A0</a></li>')}}else{i++;var optgroup=$('<li id="selectBox-optgroup-'+i+'" class="selectBox-optgroup" role="presentation" />').append('<span id="selectBox-optgroup-'+i+'-label">'+$(this).attr('label')+'</span>').append('<ul aria-labelledby="selectBox-optgroup-'+i+'-label" role="group"></ul>');options.append(optgroup);options=_getOptions($(this),options);}});return options;};switch(type){case'inline':options=$('<ul class="selectBox-options" role="presentation" />');options.attr('id','selectBox-menu-'+(select.attr('id')?select.attr('id'):select[0][$.expando]));options=_getOptions(select,options);options.find('A').bind('mouseover.selectBox',function(event){addHover(select,$(this).parent());}).bind('mouseout.selectBox',function(event){removeHover(select,$(this).parent());}).bind('mousedown.selectBox',function(event){event.preventDefault();if(!select.selectBox('control').hasClass('selectBox-active'))select.selectBox('control').focus();}).bind('mouseup.selectBox',function(event){hideMenus();addHover(select,$(this).parent());selectOption(select,$(this).parent(),event);keepOptionInView(select,$(this).parent());event.stopPropagation();}).bind('focusin.selectBox',function(event){addHover(select,$(this).parent());keepOptionInView(select,$(this).parent());if(!select.selectBox('control').hasClass('selectBox-active'))select.selectBox('control').focus();});disableSelection(options);return options;case'dropdown':options=$('<ul class="selectBox-dropdown-menu selectBox-options" role="listbox" />');options.attr('id','selectBox-dropdown-menu-'+(select.attr('id')?select.attr('id'):select[0][$.expando]));options=_getOptions(select,options);options.data('selectBox-select',select).css('display','none').find('A').bind('mousedown.selectBox',function(event){event.preventDefault();if(event.screenX===options.data('selectBox-down-at-x')&&event.screenY===options.data('selectBox-down-at-y')){options.removeData('selectBox-down-at-x').removeData('selectBox-down-at-y');hideMenus();}}).bind('mouseup.selectBox',function(event){if(event.screenX===options.data('selectBox-down-at-x')&&event.screenY===options.data('selectBox-down-at-y')){return;}else{options.removeData('selectBox-down-at-x').removeData('selectBox-down-at-y');}
selectOption(select,$(this).parent(),event);hideMenus();options.data('selectBox-select').data('selectBox-control').focus();}).bind('mouseover.selectBox',function(event){addHover(select,$(this).parent());}).bind('mouseout.selectBox',function(event){removeHover(select,$(this).parent());}).bind('click.selectBox',function(event){options.removeData('selectBox-down-at-x').removeData('selectBox-down-at-y');selectOption(select,$(this).parent(),event);hideMenus();options.data('selectBox-select').data('selectBox-control').focus();}).bind('focusin.selectBox',function(event){addHover(select,$(this).parent());keepOptionInView(select,$(this).parent());if(!select.selectBox('control').hasClass('selectBox-active'))select.selectBox('control').focus();});var classes=select.attr('class')||'';if(classes!==''){classes=classes.split(' ');for(var i in classes)options.addClass(classes[i]+'-selectBox-dropdown-menu');}
disableSelection(options);return options;}};var getLabelClass=function(select){var selected=$(select).find('OPTION:selected');return('selectBox-label '+(selected.attr('class')||'')).replace(/\s+$/,'');};var getLabelText=function(select){var selected=$(select).find('OPTION:selected');return selected.text()||'\u00A0';};var setLabel=function(select){select=$(select);var control=select.data('selectBox-control');if(!control)return;control.find('.selectBox-label').attr('class',getLabelClass(select)).text(getLabelText(select));};var adjustWidth=function(select){select=$(select);var settings=select.data('selectBox-settings'),control=select.data('selectBox-control');if(!control)return;var inline=!!select.attr('multiple')||parseInt(select.attr('size'))>1,options=control.data('selectBox-options'),label=control.find('.selectBox-label').first(),arrow=control.find('.selectBox-arrow').first(),len=0,testLength,longestOption,cachedLabelHtml,selectCSSWidth=select[0].style.width,selectCSSMinWidth=select[0].style.minWidth,selectCSSMaxWidth=select[0].style.maxWidth,originalWidth=control.width(),newWidth;control.width(select.width());if(label.length)label.width(control.width()-arrow.outerWidth()-parseInt(label.css('paddingLeft'))-parseInt(label.css('paddingLeft')));if(settings.autoSize&&!select[0].style.width)
{options.find('A').each(function(index,element){testLength=$(element).text().length;if(testLength>len){len=testLength;longestOption=$(element);}});if(longestOption)
{if(!inline){cachedLabelHtml=label.html();label.html(longestOption.html()).css({overflow:'visible',width:'auto'});newWidth=Math.max(label.outerWidth()+arrow.outerWidth(),select.width());if(selectCSSMinWidth)newWidth=Math.max(parseInt(selectCSSMinWidth),newWidth);if(selectCSSMaxWidth)newWidth=Math.min(parseInt(selectCSSMaxWidth),newWidth);control.width(newWidth);label.width(control.width()-arrow.outerWidth()-parseInt(label.css('paddingLeft'))-parseInt(label.css('paddingLeft'))).html(cachedLabelHtml).css({overflow:'hidden'});}else{control.css({overflow:'visible',width:'auto'});if(longestOption.outerWidth()>originalWidth)
{newWidth=Math.max(longestOption.outerWidth(),select.width());if(options.height()>control.height())newWidth+=13;if(selectCSSMinWidth)newWidth=Math.max(parseInt(selectCSSMinWidth),newWidth);if(selectCSSMaxWidth)newWidth=Math.min(parseInt(selectCSSMaxWidth),newWidth);control.css({overflow:'auto'}).width(newWidth);}else
{control.css({overflow:'auto'}).width(originalWidth);}}}}};var destroy=function(select){select=$(select);var control=select.data('selectBox-control');if(!control)return;var options=control.data('selectBox-options');options.remove();control.remove();select.removeClass('selectBox').removeData('selectBox-control').data('selectBox-control',null).removeData('selectBox-settings').data('selectBox-settings',null).show();};var refresh=function(select){select=$(select);select.selectBox('options',select.html());adjustWidth(select);};var showMenu=function(select){select=$(select);var control=select.data('selectBox-control'),settings=select.data('selectBox-settings'),options=control.data('selectBox-options');if(control.hasClass('selectBox-disabled'))return false;hideMenus();positionMenu(select);if(select.triggerHandler('beforeopen'))return false;var dispatchOpenEvent=function(){select.triggerHandler('open',{_selectBox:true});};switch(settings.menuTransition){case'fade':options.fadeIn(settings.menuSpeed,dispatchOpenEvent);break;case'slide':options.slideDown(settings.menuSpeed,dispatchOpenEvent);break;default:options.show(settings.menuSpeed,dispatchOpenEvent);break;}
if(!settings.menuSpeed)dispatchOpenEvent();var li=control.data('selectBox-last-selected')?control.data('selectBox-last-selected'):options.find('.selectBox-selected:last');keepOptionInView(select,li,true);addHover(select,li);control.removeAttr('aria-activedescendant').addClass('selectBox-menuShowing').attr('aria-expanded',true).attr('aria-activedescendant',li.find('A').attr('id'));$(document).bind('mousedown.selectBox',function(event){if($(event.target).parents().andSelf().hasClass('selectBox-options'))return;hideMenus();});};var hideMenus=function(){if($(".selectBox-dropdown-menu:visible").length===0)return;$(document).unbind('mousedown.selectBox');$(".selectBox-dropdown-menu").each(function(){var options=$(this),select=options.data('selectBox-select'),control=select.data('selectBox-control'),settings=select.data('selectBox-settings'),lastSelected=options.find('.selectBox-selected');if(select.triggerHandler('beforeclose'))return false;var dispatchCloseEvent=function(){select.triggerHandler('close',{_selectBox:true});};control.data('selectBox-last-selected',lastSelected).attr('aria-expanded',false).attr('aria-activedescendant',lastSelected.find('A').attr('id'));options.attr('aria-activedescendant',control.attr('aria-activedescendant'));if(settings){switch(settings.menuTransition){case'fade':options.fadeOut(settings.menuSpeed,dispatchCloseEvent);break;case'slide':options.slideUp(settings.menuSpeed,dispatchCloseEvent);break;default:options.hide(settings.menuSpeed,dispatchCloseEvent);break;}
if(!settings.menuSpeed)dispatchCloseEvent();control.removeClass('selectBox-menuShowing');}else{$(this).hide();$(this).triggerHandler('close',{_selectBox:true});$(this).removeClass('selectBox-menuShowing');}});};var positionMenu=function(select){select=$(select);var control=select.data('selectBox-control'),settings=select.data('selectBox-settings'),options=control.data('selectBox-options'),borderBottomWidth=isNaN(control.css('borderBottomWidth'))?0:parseInt(control.css('borderBottomWidth')),controlOffsetTop=control.offset().top,controlOuterHeight=control.outerHeight(),menuOffsetLeft=control.offset().left,menuHeight=options.data("max-height")||options.outerHeight(),menuOffsetTop=controlOffsetTop+controlOuterHeight-borderBottomWidth,windowHeight=$(window).height(),windowScrollTop=$(window).scrollTop(),topToBottom=(menuOffsetTop+menuHeight<=windowHeight+windowScrollTop),bottomReached=!topToBottom,newCSSPosition={bottom:"auto"};if(!options.data("max-height"))
{options.data("max-height",options.outerHeight());}
if(!bottomReached){options.css("max-height",options.data("max-height"));}else if((controlOffsetTop-windowScrollTop)>=menuHeight)
{options.css("max-height",options.data("max-height"));newCSSPosition.bottom=control.outerHeight();}else{var outsideBottomViewport=Math.abs((menuOffsetTop+controlOuterHeight+menuHeight)-(windowHeight+windowScrollTop)),outsideTopViewport=Math.abs((controlOffsetTop-windowScrollTop)-menuHeight);if(outsideBottomViewport<outsideTopViewport)
{options.css("max-height",options.data("max-height")-outsideBottomViewport-(controlOuterHeight/2));}else
{options.css("max-height",options.data("max-height")-outsideTopViewport-(controlOuterHeight/2));newCSSPosition.bottom=control.outerHeight();}}
options.width(control.innerWidth()).css(newCSSPosition);};var selectOption=function(select,li,event){select=$(select);li=$(li);var control=select.data('selectBox-control'),settings=select.data('selectBox-settings'),options=control.data('selectBox-options'),lis=options.find('li:not(.selectBox-optgroup, .selectBox-disabled)'),lastSelected=control.data('selectBox-last-selected'),dir=-1,affectedOptions,selectedOptions;if(control.hasClass('selectBox-disabled'))return false;if(li.length===0||li.hasClass('selectBox-disabled'))return false;if(select.attr('multiple')){if(event.shiftKey&&lastSelected){li.toggleClass('selectBox-selected');if(li.hasClass('selectBox-selected')){li.find('A').attr('aria-selected',true);}else{li.find('A').removeAttr('aria-selected');}
var affectedOptions;if(lis.index(li)>lis.index(lastSelected)){affectedOptions=lis.slice(lis.index(lastSelected),lis.index(li));}else{affectedOptions=lis.slice(lis.index(li),lis.index(lastSelected)+1);}
affectedOptions=affectedOptions.not('.selectBox-optgroup, .selectBox-disabled');if(li.hasClass('selectBox-selected')){affectedOptions.addClass('selectBox-selected').find('A').attr('aria-selected',true);}else{affectedOptions.removeClass('selectBox-selected').find('A').removeAttr('aria-selected');}
if(event.type=='keydown')
{switch(event.keyCode)
{case 37:case 38:{dir=1;break;}
case 39:case 40:{dir=0;break;}}
if(affectedOptions.index(lastSelected)==dir)
{if(li.hasClass('selectBox-selected')&&!lastSelected.hasClass('selectBox-selected')){li.removeClass('selectBox-selected').find('A').removeAttr('aria-selected');}else{li.addClass('selectBox-selected').find('A').attr('aria-selected',true);}}
if(event.keyCode!=13&&event.keyCode!=32)
{selectedOptions=options.find('.selectBox-selected');var startSelected=selectedOptions.index(li),startLi=lis.index(li),lastIndex=startLi,testIndex,i,contiguous=true;for(i=startSelected;i>=0;i--)
{testIndex=lis.index(selectedOptions.eq(i));if(Math.abs(testIndex-lastIndex)>1)
contiguous=false;if(!contiguous)
selectedOptions.eq(i).removeClass('selectBox-selected').find('A').removeAttr('aria-selected');lastIndex=testIndex;}
contiguous=true;lastIndex=startLi;for(i=startSelected;i<selectedOptions.length;i++)
{testIndex=lis.index(selectedOptions.eq(i))
if(Math.abs(testIndex-lastIndex)>1)
contiguous=false;if(!contiguous)
selectedOptions.eq(i).removeClass('selectBox-selected').find('A').removeAttr('aria-selected');lastIndex=testIndex;}}}}else if((isMac&&event.metaKey)||(!isMac&&event.ctrlKey)||control.hasClass('selectBox-multiselect')){if(event.type!='keydown'||(event.keyCode==13||event.keyCode==32||event.keyCode==65)){if(event.keyCode==65){li.addClass('selectBox-selected');}else{li.toggleClass('selectBox-selected');}
if(li.hasClass('selectBox-selected')){li.find('A').attr('aria-selected',true);}else{li.find('A').removeAttr('aria-selected');}}}else{lis.removeClass('selectBox-selected').find('A').removeAttr('aria-selected');li.addClass('selectBox-selected').find('A').attr('aria-selected',true);}}else if((event.type!=='keydown'&&event.type!=='keypress')||(event.keyCode==13||event.keyCode==32)){lis.removeClass('selectBox-selected').find('A').removeAttr('aria-selected');li.addClass('selectBox-selected').find('A').attr('aria-selected',true);}
if(control.hasClass('selectBox-dropdown')&&li.hasClass('selectBox-selected')){control.find('.selectBox-label').text(li.text());}
var i=0,selection=[];if(select.attr('multiple')){control.find('.selectBox-selected A').each(function(){selection[i++]=$(this).attr('rel');});}else{selection=options.find('.selectBox-selected A').attr('rel');}
control.data('selectBox-last-selected',li).attr('aria-activedescendant',li.find('A').attr('id'));options.attr('aria-activedescendant',control.attr('aria-activedescendant'));if(select.val()!==selection){select.val(selection);setLabel(select);select.trigger('change');}
return true;};var addHover=function(select,li){select=$(select);li=$(li);var control=select.data('selectBox-control'),options=control.data('selectBox-options');options.find('.selectBox-hover').removeClass('selectBox-hover');li.addClass('selectBox-hover');};var removeHover=function(select,li){select=$(select);li=$(li);var control=select.data('selectBox-control'),options=control.data('selectBox-options');options.find('.selectBox-hover').removeClass('selectBox-hover');};var keepOptionInView=function(select,li,center){if(!li||li.length===0)return;select=$(select);var control=select.data('selectBox-control'),options=control.data('selectBox-options'),scrollBox=control.hasClass('selectBox-dropdown')?options:options.parent(),top=parseInt(li.offset().top-scrollBox.position().top),bottom=parseInt(top+li.outerHeight());if(center){scrollBox.scrollTop(li.offset().top-scrollBox.offset().top+scrollBox.scrollTop()-(scrollBox.height()/2));}else{if(top<0){scrollBox.scrollTop(li.offset().top-scrollBox.offset().top+scrollBox.scrollTop());}
if(bottom>scrollBox.height()){scrollBox.scrollTop((li.offset().top+li.outerHeight())-scrollBox.offset().top+scrollBox.scrollTop()-scrollBox.height());}}};var handleKeyDown=function(select,event){select=$(select);var control=select.data('selectBox-control'),options=control.data('selectBox-options'),settings=select.data('selectBox-settings'),totalOptions=0,i=0,currentIndex=0,selectableOptions=options.find('LI:not(.selectBox-optgroup, .selectBox-disabled)'),lis=options.find('LI'),lastSelected=control.data('selectBox-last-selected'),lastHovered=options.find('.selectBox-hover:first'),multiple=!!select.attr('multiple'),pageHeight,optionHeight,size;if(control.hasClass('selectBox-disabled'))return;switch(event.keyCode){case 8:event.preventDefault();typeSearch='';break;case 9:case 27:hideMenus();removeHover(select);control.focus();break;case 13:if(control.hasClass('selectBox-menuShowing')){event.preventDefault();selectOption(select,lastHovered,event);keepOptionInView(select,lastHovered);if(control.hasClass('selectBox-dropdown'))
{hideMenus();}
control.focus();}else{showMenu(select);}
break;case 32:if(control.hasClass('selectBox-menuShowing')){event.preventDefault();selectOption(select,lastHovered,event);keepOptionInView(select,lastHovered);}
break;case 33:event.preventDefault();currentIndex=lastSelected?lis.index(lastSelected):lis.index(options.find('.selectBox-hover'));pageHeight=control.hasClass('selectBox-dropdown')?options.height():control.height();optionHeight=parseInt(options.find('A:first').outerHeight());size=(select.attr('size'))?parseInt(select.attr('size')):Math.floor(pageHeight/optionHeight);var newIndex=Math.max(0,currentIndex-size),prev=lis.eq(newIndex);totalOptions=lis.length;i=newIndex;while(prev.length===0||prev.hasClass('selectBox-disabled')||prev.hasClass('selectBox-optgroup')){prev=lis.eq(i-1);if(prev.length===0||i<=0){prev=selectableOptions.eq(0);}
if(--i<=0)break;}
addHover(select,prev);selectOption(select,prev,event);keepOptionInView(select,prev);break;case 34:event.preventDefault();currentIndex=lastSelected?lis.index(lastSelected):lis.index(options.find('.selectBox-hover'));pageHeight=control.hasClass('selectBox-dropdown')?options.height():control.height();optionHeight=parseInt(options.find('A:first').outerHeight());size=(select.attr('size'))?parseInt(select.attr('size')):Math.floor(pageHeight/optionHeight);var newIndex=Math.min(lis.length-1,currentIndex+size),next=lis.eq(newIndex);totalOptions=lis.length;i=newIndex;while(next.length===0||next.hasClass('selectBox-disabled')||next.hasClass('selectBox-optgroup')){next=lis.eq(i+1);if(next.length===0||i>=(totalOptions-1)){next=selectableOptions.eq(selectableOptions.length-1);}
if(++i>=totalOptions)break;}
addHover(select,next);selectOption(select,next,event);keepOptionInView(select,next);break;case 35:event.preventDefault();addHover(select,selectableOptions.last());selectOption(select,selectableOptions.last(),event);keepOptionInView(select,selectableOptions.last());break;case 36:event.preventDefault();addHover(select,selectableOptions.first());selectOption(select,selectableOptions.first(),event);keepOptionInView(select,selectableOptions.first());break;case 38:case 37:event.preventDefault();if(control.hasClass('selectBox-menuShowing')&&!event.altKey){currentIndex=lastSelected?selectableOptions.index(lastSelected):selectableOptions.index(options.find('.selectBox-hover'));if(currentIndex==0&&(!settings.loopOptions||select.attr('multiple')))break;var prev=selectableOptions.eq(currentIndex-1);totalOptions=selectableOptions.length;i=currentIndex-1;while(prev.length===0||prev.hasClass('selectBox-disabled')||prev.hasClass('selectBox-optgroup')){prev=selectableOptions.eq(i-1);if(prev.length===0){if(settings.loopOptions){prev=selectableOptions.eq(selectableOptions.length-1);}else{prev=selectableOptions.eq(0);}
break;}
if(--i<=0)break;}
addHover(select,prev);keepOptionInView(select,prev);selectOption(select,prev,event);}else if(event.altKey){hideMenus();}else{showMenu(select);}
break;case 40:case 39:event.preventDefault();if(control.hasClass('selectBox-menuShowing')){currentIndex=lastSelected?selectableOptions.index(lastSelected):selectableOptions.index(options.find('.selectBox-hover'));if(currentIndex==selectableOptions.length-1&&(!settings.loopOptions||select.attr('multiple')))break;var next=selectableOptions.eq(currentIndex+1);totalOptions=selectableOptions.length;i=currentIndex+1;while(next.length===0||next.hasClass('selectBox-disabled')||next.hasClass('selectBox-optgroup')){next=selectableOptions.eq(i+1);if(next.length===0){if(settings.loopOptions){next=selectableOptions.eq(0);}else{next=selectableOptions.eq(selectableOptions.length-1);}}
if(++i>=totalOptions)break;}
addHover(select,next);keepOptionInView(select,next);selectOption(select,next,event);}else{showMenu(select);}
break;case 119:if(multiple&&event.shiftKey)
{event.preventDefault();control.toggleClass('selectBox-multiselect');}
break;case 65:if(multiple&&((isMac&&event.metaKey)||(!isMac&&event.ctrlKey)))
{event.preventDefault();event.stopPropagation();selectableOptions.not(lastHovered).each(function(index,element){selectOption(select,$(element),event);});addHover(select,lastHovered);selectOption(select,lastHovered,event);keepOptionInView(select,lastHovered);}
break;}};var handleKeyPress=function(select,event){select=$(select);var control=select.data('selectBox-control'),options=control.data('selectBox-options'),i=0,start=0,o,label,found=false,selectableOptions=options.find('LI:not(.selectBox-optgroup, .selectBox-disabled)'),lastHovered=options.find('.selectBox-hover'),newString=String.fromCharCode(event.charCode||event.keyCode);if(control.hasClass('selectBox-disabled'))return;switch(event.keyCode){case 9:case 27:case 13:case 32:case 38:case 37:case 40:case 39:break;default:if(!control.hasClass('selectBox-menuShowing'))showMenu(select);event.preventDefault();clearTimeout(typeTimer);typeSearch+=newString!=typeSearch?newString:'';for(i=0;i<selectableOptions.length;i++)
{o=selectableOptions.eq(i);if(o.is(lastHovered)){start=(typeSearch.length==1)?i+1:i;break;}}
for(i=start;i<selectableOptions.length;i++){o=selectableOptions.eq(i);label=$.trim(o.text());if(label.substring(0,typeSearch.length).toLowerCase()===typeSearch.toLowerCase())
{found=true;addHover(select,o);keepOptionInView(select,o);selectOption(select,o,event);break;}}
if(!found)
{for(i=0;i<start;i++){o=selectableOptions.eq(i);label=$.trim(o.text());if(label.substring(0,typeSearch.length).toLowerCase()===typeSearch.toLowerCase())
{addHover(select,o);keepOptionInView(select,o);selectOption(select,o,event);break;}}}
typeTimer=setTimeout(function(){typeSearch='';},1000);break;}};var enable=function(select){select=$(select);select.attr('disabled',false);var control=select.data('selectBox-control');if(!control)return;control.removeClass('selectBox-disabled').removeAttr('aria-disabled');};var disable=function(select){select=$(select);select.attr('disabled',true);var control=select.data('selectBox-control');if(!control)return;control.addClass('selectBox-disabled').attr('aria-disabled',true);};var setValue=function(select,value){select=$(select);select.val(value);value=select.val();if(value===null){value=select.children().first().val();select.val(value);}
var control=select.data('selectBox-control');if(!control)return;var settings=select.data('selectBox-settings'),options=control.data('selectBox-options');setLabel(select);options.find('.selectBox-selected').removeClass('selectBox-selected').find('A').removeAttr('aria-selected');options.find('A').each(function(){if(typeof(value)==='object'){for(var i=0;i<value.length;i++){if($(this).attr('rel')==value[i]){$(this).attr('aria-selected',true).parent().addClass('selectBox-selected');}}}else{if($(this).attr('rel')==value){$(this).attr('aria-selected',true).parent().addClass('selectBox-selected');}}});if(settings.change)settings.change.call(select);};var setOptions=function(select,options){select=$(select);var control=select.data('selectBox-control'),settings=select.data('selectBox-settings');switch(typeof(data)){case'string':select.html(data);break;case'object':select.html('');for(var i in data){if(data[i]===null)continue;if(typeof(data[i])==='object'){var optgroup=$('<optgroup label="'+i+'" />');for(var j in data[i]){optgroup.append('<option value="'+j+'">'+data[i][j]+'</option>');}
select.append(optgroup);}else{var option=$('<option value="'+i+'">'+data[i]+'</option>');select.append(option);}}
break;}
if(!control)return;control.data('selectBox-options').remove();var type=control.hasClass('selectBox-dropdown')?'dropdown':'inline';options=getOptions(select,type);control.data('selectBox-options',options);switch(type){case'inline':control.append(options);break;case'dropdown':setLabel(select);options.insertAfter(control);break;}};var disableSelection=function(selector){$(selector).css({'MozUserSelect':'none','WebkitUserSelect':'none','MsUserSelect':'none','OUserSelect':'none'}).bind('selectstart',function(event){event.preventDefault();});};var generateOption=function(self,parentNode){var li=$('<li role="presentation" />'),a=$('<a role="option" tabindex="-1" />');li.addClass(self.attr('class'));li.data(self.data());a.attr('rel',self.val()).text(self.text());li.append(a);if(self.attr('disabled'))li.addClass('selectBox-disabled').find('A').attr('aria-disabled',true);if(self.attr('selected'))li.addClass('selectBox-selected').find('A').attr('aria-selected',true);parentNode.append(li);return li;};switch(method){case'control':return $(this).data('selectBox-control');case'settings':if(!data)return $(this).data('selectBox-settings');$(this).each(function(){$(this).data('selectBox-settings',$.extend(true,$(this).data('selectBox-settings'),data));adjustWidth(this);});break;case'options':if(data===undefined)return $(this).data('selectBox-control').data('selectBox-options');$(this).each(function(){setOptions(this,data);});break;case'value':if(data===undefined)return $(this).val();$(this).each(function(){setValue(this,data);});break;case'refresh':$(this).each(function(){refresh(this);});break;case'enable':$(this).each(function(){enable(this);});break;case'disable':$(this).each(function(){disable(this);});break;case'destroy':$(this).each(function(){destroy(this);});break;default:$(this).each(function(){init(this,method);});break;}
return $(this);}});})(jQuery);
$(function(){(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);});
var droidDeviceProfile={id:"Motorola Droid",frag:/droid build/};var nexusDeviceProfile={id:"Google Nexus One",frag:/Android 2/i};var palmPreDeviceProfile={id:"Palm Pre",frag:/525.27.1 pre/i};var genericAndroid2DeviceProfile={id:"Generic Android 2 device",frag:/Android 2/i};var genericAndroid1DeviceProfile={id:"Generic Android 1 device",frag:/Android 1/i};var genericWebOSDeviceProfile={id:"genericWebOS Device",frag:/webos/i};var win311DeviceProfile={id:"Windows 3.11",frag:/win16/i};var win95ADeviceProfile={id:"Windows 95",frag:/windows 95/i};var win95BDeviceProfile={id:"Windows 95",frag:/win95/i};var win95CDeviceProfile={id:"Windows 95",frag:/win_95/i};var win2000ADeviceProfile={id:"Windows 2000",frag:/windows 2000/i};var win2000BDeviceProfile={id:"Windows 2000",frag:/windows nt 5.0/i};var winServer2003DeviceProfile={id:"Windows Server 2003",frag:/windows nt 5.2/i};var winNT40ADeviceProfile={id:"Windows NT 4.0",frag:/windows nt 4.0/i};var winNT40BDeviceProfile={id:"Windows NT 4.0",frag:/winnt/i};var winNT40CDeviceProfile={id:"Windows NT 4.0",frag:/windows nt/i};var winmeDeviceProfile={id:"Windows ME",frag:/windows me/i};var openBSDDeviceProfile={id:"OpenBSD",frag:/openbsd/i};var sunOSDeviceProfile={id:"Sun OS",frag:/sunos/i};var linuxADeviceProfile={id:"Linux",frag:/linux/i};var linuxBDeviceProfile={id:"Linux",frag:/x11/i};var QNXDeviceProfile={id:"QNX",frag:/qnx/i};var beosDeviceProfile={id:"BeOS",frag:/beos/i};var os2DeviceProfile={id:"OS2",frag:/OS\/2/i};var winxpDeviceProfile={id:"Windows XP",frag:/windows xp/i};var winxp2DeviceProfile={id:"Windows XP",frag:/windows nt 5.1/i};var win7ADeviceProfile={id:"Windows 7",frag:/windows nt 6.1/i};var win7BDeviceProfile={id:"Windows 7",frag:/windows nt 7.01/i};var winvistaDeviceProfile={id:"Windows Vista",frag:/windows nt 6.0/i};var macosx106DeviceProfile={id:"Snow Leopard",frag:/mac os x 10.6/i};var macosx105DeviceProfile={id:"Leopard",frag:/mac os x 10.5/i};var macosA={id:"Mac OS",frag:/mac_powerpc/i};var macosB={id:"Mac OS",frag:/macintosh/i};var androidOSFamily={id:"Android OS",frag:/android /i,devices:[droidDeviceProfile,nexusDeviceProfile,genericAndroid1DeviceProfile,genericAndroid2DeviceProfile]};var webOSFamily={id:"webOS",frag:/webOS\/1.3.5/i,devices:[palmPreDeviceProfile,genericWebOSDeviceProfile]};var macOSFamily={id:"Mac OS",frag:/mac os/i,devices:[macosx105DeviceProfile,macosx106DeviceProfile,macosA,macosB]};var winOSFamily={id:"Windows",frag:/windows/i,devices:[winxpDeviceProfile,winxp2DeviceProfile,win7ADeviceProfile,win7BDeviceProfile,winvistaDeviceProfile,win311DeviceProfile,win95ADeviceProfile,win95BDeviceProfile,win95CDeviceProfile,winServer2003DeviceProfile,winNT40ADeviceProfile,winNT40BDeviceProfile,winNT40CDeviceProfile,winmeDeviceProfile]};var linuxOSFamily={id:"Linux",frag:/linux/i,devices:[openBSDDeviceProfile,sunOSDeviceProfile,linuxADeviceProfile,linuxBDeviceProfile,QNXDeviceProfile,beosDeviceProfile,os2DeviceProfile]};var desktopDeviceCategory={id:"Desktop",osFamilies:[macOSFamily,winOSFamily,linuxOSFamily]};var mobileDeviceCategory={id:"Mobile",osFamilies:[androidOSFamily,webOSFamily]};var unknownDeviceCategory={id:"Unidentified Platform"};var categories=[mobileDeviceCategory,desktopDeviceCategory];function identifyDevice(d,ua){if(ua.search(d.frag)>-1){return{device:d.id};}else
return null;}
function identifyOS(os,ua){var deviceInfo=null;var olen=os.devices.length;for(var k=0;k<olen;k++){deviceInfo=identifyDevice(os.devices[k],ua);if(deviceInfo!=null)break;}
if(deviceInfo!=null)deviceInfo.os=os.id;return deviceInfo;}
function identifyCategory(cat,ua){var osInfo=null;var jlen=cat.osFamilies.length;for(var j=0;j<jlen;j++){osInfo=identifyOS(cat.osFamilies[j],ua);if(osInfo!=null)break;}
if(osInfo!=null)osInfo.category=cat.id;return osInfo;}
function identifyCategories(cats,ua){var categoryInfo=null;var clen=cats.length;for(var i=0;i<clen;i++){categoryInfo=identifyCategory(cats[i],ua);if(categoryInfo!=null)break;}
if(!categoryInfo)categoryInfo={};if(!categoryInfo.device)categoryInfo.device='unknown';if(!categoryInfo.os)categoryInfo.os='unknown';if(!categoryInfo.category)categoryInfo.category=unknownDeviceCategory.id;return categoryInfo;}
function getCategoriesInfo(){return identifyCategories(categories,navigator.userAgent.toLowerCase());}
var info=getCategoriesInfo();function displayCategoriesInfo(){alert('isDesktop:'+isDesktop()+', os:'+info.os+', device:'+info.device);}
function isDroid(){return(info.device==droidDeviceProfile.id);}
function isNexus(){return(info.device==nexusDeviceProfile.id);}
function isDesktop(){return(info.category==desktopDeviceCategory.id);}
function isLinuxDesktop(){return(info.os==linuxOSFamily.id);}
function isWinDesktop(){return(info.os==winOSFamily.id);}
function isMacDesktop(){return(info.os==macOSFamily.id);}
function simulateDroid(){info.device=droidDeviceProfile.id;info.category=mobileDeviceCategory.id;info.os=androidOSFamily.id;};
(function($){var LEFT="left",RIGHT="right",UP="up",DOWN="down",NONE="none",AUTO="auto",HORIZONTAL="horizontal",VERTICAL="vertical",ALL_FINGERS="all",PHASE_START="start",PHASE_MOVE="move",PHASE_END="end",PHASE_CANCEL="cancel",SUPPORTS_TOUCH='ontouchstart'in window,PLUGIN_NS='TouchSwipe';var defaults={fingers:1,threshold:75,maxTimeThreshold:null,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:true,allowPageScroll:"auto",fallbackToMouseEvents:true};$.fn.swipe=function(method){var $this=$(this),plugin=$this.data(PLUGIN_NS);if(plugin&&typeof method==='string'){if(plugin[method]){return plugin[method].apply(this,Array.prototype.slice.call(arguments,1));}else{$.error('Method '+method+' does not exist on jQuery.swipe');}}
else if(!plugin&&(typeof method==='object'||!method)){return init.apply(this,arguments);}
return $this;};$.fn.swipe.defaults=defaults;$.fn.swipe.phases={PHASE_START:PHASE_START,PHASE_MOVE:PHASE_MOVE,PHASE_END:PHASE_END,PHASE_CANCEL:PHASE_CANCEL};$.fn.swipe.directions={LEFT:LEFT,RIGHT:RIGHT,UP:UP,DOWN:DOWN};$.fn.swipe.pageScroll={NONE:NONE,HORIZONTAL:HORIZONTAL,VERTICAL:VERTICAL,AUTO:AUTO};$.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:ALL_FINGERS};function init(options){if(options&&(options.allowPageScroll===undefined&&(options.swipe!==undefined||options.swipeStatus!==undefined))){options.allowPageScroll=NONE;}
if(!options){options={};}
options=$.extend({},$.fn.swipe.defaults,options);return this.each(function(){var $this=$(this);var plugin=$this.data(PLUGIN_NS);if(!plugin){plugin=new touchSwipe(this,options);$this.data(PLUGIN_NS,plugin);}});}
function touchSwipe(element,options){var useTouchEvents=(SUPPORTS_TOUCH||!options.fallbackToMouseEvents),START_EV=useTouchEvents?'touchstart':'mousedown',MOVE_EV=useTouchEvents?'touchmove':'mousemove',END_EV=useTouchEvents?'touchend':'mouseup',CANCEL_EV='touchcancel';var distance=0;var direction=null;var duration=0;var $element=$(element);var phase="start";var fingerCount=0;var start={x:0,y:0};var end={x:0,y:0};var delta={x:0,y:0};var startTime=0;var endTime=0;try{$element.bind(START_EV,touchStart);$element.bind(CANCEL_EV,touchCancel);}
catch(e){$.error('events not supported '+START_EV+','+CANCEL_EV+' on jQuery.swipe');}
this.enable=function(){$element.bind(START_EV,touchStart);$element.bind(CANCEL_EV,touchCancel);return $element;};this.disable=function(){removeListeners();return $element;};this.destroy=function(){removeListeners();$element.data(PLUGIN_NS,null);return $element;};function touchStart(event){event=event.originalEvent;var ret,evt=SUPPORTS_TOUCH?event.touches[0]:event;phase=PHASE_START;if(SUPPORTS_TOUCH){fingerCount=event.touches.length;}
else{event.preventDefault();}
distance=0;direction=null;duration=0;if(!SUPPORTS_TOUCH||(fingerCount===options.fingers||options.fingers===ALL_FINGERS)){start.x=end.x=evt.pageX;start.y=end.y=evt.pageY;startTime=getTimeStamp();if(options.swipeStatus){ret=triggerHandler(event,phase);}}
else{touchCancel(event);}
if(ret===false){phase=PHASE_CANCEL;triggerHandler(event,phase);return ret;}
else{$element.bind(MOVE_EV,touchMove);$element.bind(END_EV,touchEnd);}};function touchMove(event){event=event.originalEvent;if(phase===PHASE_END||phase===PHASE_CANCEL)
return;var ret,evt=SUPPORTS_TOUCH?event.touches[0]:event;end.x=evt.pageX;end.y=evt.pageY;endTime=getTimeStamp();direction=calculateDirection();if(SUPPORTS_TOUCH){fingerCount=event.touches.length;}
phase=PHASE_MOVE;validateDefaultEvent(event,direction);if((fingerCount===options.fingers||options.fingers===ALL_FINGERS)||!SUPPORTS_TOUCH){distance=calculateDistance();duration=calculateDuration();if(options.swipeStatus){ret=triggerHandler(event,phase,direction,distance,duration);}
if(!options.triggerOnTouchEnd){var cancel=!validateSwipeTime();if(validateSwipeDistance()===true){phase=PHASE_END;ret=triggerHandler(event,phase);}else if(cancel){phase=PHASE_CANCEL;triggerHandler(event,phase);}}}
else{phase=PHASE_CANCEL;triggerHandler(event,phase);}
if(ret===false){phase=PHASE_CANCEL;triggerHandler(event,phase);}}
function touchEnd(event){event=event.originalEvent;event.preventDefault();endTime=getTimeStamp();distance=calculateDistance();direction=calculateDirection();duration=calculateDuration();if(options.triggerOnTouchEnd||(options.triggerOnTouchEnd===false&&phase===PHASE_MOVE)){phase=PHASE_END;if(((fingerCount===options.fingers||options.fingers===ALL_FINGERS)||!SUPPORTS_TOUCH)&&end.x!==0){var cancel=!validateSwipeTime();if((validateSwipeDistance()===true||validateSwipeDistance()===null)&&!cancel)
{triggerHandler(event,phase);}
else if(cancel||validateSwipeDistance()===false){phase=PHASE_CANCEL;triggerHandler(event,phase);}}
else{phase=PHASE_CANCEL;triggerHandler(event,phase);}}
else if(phase===PHASE_MOVE){phase=PHASE_CANCEL;triggerHandler(event,phase);}
$element.unbind(MOVE_EV,touchMove,false);$element.unbind(END_EV,touchEnd,false);}
function touchCancel(){fingerCount=0;start.x=0;start.y=0;end.x=0;end.y=0;delta.x=0;delta.y=0;endTime=0;startTime=0;}
function triggerHandler(event,phase){var ret=undefined;if(options.swipeStatus){ret=options.swipeStatus.call($element,event,phase,direction||null,distance||0,duration||0,fingerCount);}
if(phase===PHASE_CANCEL){if(options.click&&(fingerCount===1||!SUPPORTS_TOUCH)&&(isNaN(distance)||distance===0)){ret=options.click.call($element,event,event.target);}}
if(phase==PHASE_END){if(options.swipe){ret=options.swipe.call($element,event,direction,distance,duration,fingerCount);}
switch(direction){case LEFT:if(options.swipeLeft){ret=options.swipeLeft.call($element,event,direction,distance,duration,fingerCount);}
break;case RIGHT:if(options.swipeRight){ret=options.swipeRight.call($element,event,direction,distance,duration,fingerCount);}
break;case UP:if(options.swipeUp){ret=options.swipeUp.call($element,event,direction,distance,duration,fingerCount);}
break;case DOWN:if(options.swipeDown){ret=options.swipeDown.call($element,event,direction,distance,duration,fingerCount);}
break;}}
if(phase===PHASE_CANCEL||phase===PHASE_END){touchCancel(event);}
return ret;}
function validateSwipeDistance(){if(options.threshold!==null){return distance>=options.threshold;}
return null;}
function validateSwipeTime(){var result;if(options.maxTimeThreshold){if(duration>=options.maxTimeThreshold){result=false;}else{result=true;}}
else{result=true;}
return result;}
function validateDefaultEvent(event,direction){if(options.allowPageScroll===NONE){event.preventDefault();}else{var auto=options.allowPageScroll===AUTO;switch(direction){case LEFT:if((options.swipeLeft&&auto)||(!auto&&options.allowPageScroll!=HORIZONTAL)){event.preventDefault();}
break;case RIGHT:if((options.swipeRight&&auto)||(!auto&&options.allowPageScroll!=HORIZONTAL)){event.preventDefault();}
break;case UP:if((options.swipeUp&&auto)||(!auto&&options.allowPageScroll!=VERTICAL)){event.preventDefault();}
break;case DOWN:if((options.swipeDown&&auto)||(!auto&&options.allowPageScroll!=VERTICAL)){event.preventDefault();}
break;}}}
function calculateDuration(){return endTime-startTime;}
function calculateDistance(){return Math.round(Math.sqrt(Math.pow(end.x-start.x,2)+Math.pow(end.y-start.y,2)));}
function caluculateAngle(){var x=start.x-end.x;var y=end.y-start.y;var r=Math.atan2(y,x);var angle=Math.round(r*180/Math.PI);if(angle<0){angle=360-Math.abs(angle);}
return angle;}
function calculateDirection(){var angle=caluculateAngle();if((angle<=45)&&(angle>=0)){return LEFT;}else if((angle<=360)&&(angle>=315)){return LEFT;}else if((angle>=135)&&(angle<=225)){return RIGHT;}else if((angle>45)&&(angle<135)){return DOWN;}else{return UP;}}
function getTimeStamp(){var now=new Date();return now.getTime();}
function removeListeners(){$element.unbind(START_EV,touchStart);$element.unbind(CANCEL_EV,touchCancel);$element.unbind(MOVE_EV,touchMove);$element.unbind(END_EV,touchEnd);}}})(jQuery);
$(document).ready(function()
{$('body').append('<div class="ModalCPodSelect" />');var modalCPod=$(".ModalCPodSelect");modalCPod.dialog({modal:false,bgiframe:true,autoOpen:false,resizable:false,draggable:false,closeOnClick:false,closeOnEscape:true,width:200,dialogClass:'CPodSelectDialog',height:'auto',close:function()
{modalCPod.empty();$('body').removeClass('ModalCPodSelectPanel');modalCPod.dialog('option','position',['center','center']);}});$('.ModalCPodSelect-button').click(function(event)
{modalCPod.dialog("close");$('body').addClass('ModalCPodSelectPanel');var offsetX=(event.clientX-100);modalCPod.dialog('option','position',[offsetX,event.clientY]).load(this.href,function()
{$('.ui-dialog-close').hover(function()
{$(this).addClass("ui-state-hover");return false;},function()
{$(this).removeClass("ui-state-hover");return false;});});modalCPod.focus();modalCPod.dialog('open');return false;});$('.ModalCPodSelect-button-inline').click(function(event)
{$('body').addClass('ModalCPodSelectPanel');var urlAry=this.href.split("#");var hiddenDiv=urlAry[1];$('.ModalCPodSelect').empty().html($('#'+hiddenDiv).html());$('.ModalCPodSelect').dialog('option','position',[event.clientX,event.clientY]);$('.ui-dialog-close').hover(function()
{$(this).addClass("ui-state-hover");return false;},function()
{$(this).removeClass("ui-state-hover");return false;});modalCPod.focus();modalCPod.dialog('open');return false;});$('.ModalCPodSelect .CPodSelectAccordian .CPodContent li a').live("click",function(event){event.preventDefault();modalCPod.dialog("close");});});
$(document).ready(function()
{$('body').append('<div class="ModalTip" />');var modalTip=$(".ModalTip");modalTip.dialog({modal:false,bgiframe:true,autoOpen:false,resizable:false,draggable:false,closeOnClick:false,width:340,height:'auto',close:function()
{modalTip.empty();$('body').removeClass('ModalTipPanel');modalTip.dialog('option','position',['center','center']);}});$('.ModalTip-button').click(function(event)
{$('body').addClass('ModalTipPanel');modalTip.dialog('option','position',[event.clientX,event.clientY]).load(this.href,function()
{$('.ui-dialog-close').hover(function()
{$(this).addClass("ui-state-hover");return false;},function()
{$(this).removeClass("ui-state-hover");return false;});});modalTip.focus();modalTip.dialog('open');return false;});$('.ModalTip-Hover').bind({mouseenter:function(){var ipHeight=$('#CheckoutProdInfo').height();$('#CheckoutProdInfoShadow').height(ipHeight+14);$('#CheckoutProdInfoShadow').show();$('#CheckoutProdInfo').show();if($('#SiteFooter')!=null){$('#RegionPanel').hide();}},mouseleave:function(){$('#CheckoutProdInfoShadow').hide();$('#CheckoutProdInfo').hide();}});$('.ModalTip-button-inline').click(function(event)
{$('body').addClass('ModalTipPanel');var urlAry=this.href.split("#");var hiddenDiv=urlAry[1];modalTip.empty().html($('#'+hiddenDiv).html());modalTip.dialog('option','position',[event.clientX,event.clientY]);$('.ui-dialog-close').hover(function()
{$(this).addClass("ui-state-hover");return false;},function()
{$(this).removeClass("ui-state-hover");return false;});modalTip.focus();modalTip.dialog('open');return false;});});
(function($,c,b){$.map("click dblclick mousemove mousedown mouseup mouseover mouseout touchstart touchend touchmove change select submit keydown keypress keyup".split(" "),function(d){a(d)});a("focusin","focus"+b);a("focusout","blur"+b);$.addOutsideEvent=a;function a(g,e){e=e||g+b;var d=$(),h=g+"."+e+"-special-event";$.event.special[e]={setup:function(){d=d.add(this);if(d.length===1){$(c).bind(h,f)}},teardown:function(){d=d.not(this);if(d.length===0){$(c).unbind(h)}},add:function(i){var j=i.handler;i.handler=function(l,k){l.target=k;j.apply(this,arguments)}}};function f(i){$(d).each(function(){var j=$(this);if(this!==i.target&&!j.has(i.target).length){j.triggerHandler(e,[i.target])}})}}})(jQuery,document,"outside");
(function($,window,undefined){'$:nomunge';var elems=$([]),jq_resize=$.resize=$.extend($.resize,{}),timeout_id,str_setTimeout='setTimeout',str_resize='resize',str_data=str_resize+'-special-event',str_delay='delay',str_throttle='throttleWindow';jq_resize[str_delay]=250;jq_resize[str_throttle]=true;$.event.special[str_resize]={setup:function(){if(!jq_resize[str_throttle]&&this[str_setTimeout]){return false;}
var elem=$(this);elems=elems.add(elem);$.data(this,str_data,{w:elem.width(),h:elem.height()});if(elems.length===1){loopy();}},teardown:function(){if(!jq_resize[str_throttle]&&this[str_setTimeout]){return false;}
var elem=$(this);elems=elems.not(elem);elem.removeData(str_data);if(!elems.length){clearTimeout(timeout_id);}},add:function(handleObj){if(!jq_resize[str_throttle]&&this[str_setTimeout]){return false;}
var old_handler;function new_handler(e,w,h){var elem=$(this),data=$.data(this,str_data);data.w=w!==undefined?w:elem.width();data.h=h!==undefined?h:elem.height();old_handler.apply(this,arguments);};if($.isFunction(handleObj)){old_handler=handleObj;return new_handler;}else{old_handler=handleObj.handler;handleObj.handler=new_handler;}}};function loopy(){timeout_id=window[str_setTimeout](function(){elems.each(function(){var elem=$(this),width=elem.width(),height=elem.height(),data=$.data(this,str_data);if(width!==data.w||height!==data.h){elem.trigger(str_resize,[data.w=width,data.h=height]);}});loopy();},jq_resize[str_delay]);};})(jQuery,this);
(function(window,undefined){'$:nomunge';var $=window.jQuery||window.Cowboy||(window.Cowboy={}),jq_throttle;$.throttle=jq_throttle=function(delay,no_trailing,callback,debounce_mode){var timeout_id,last_exec=0;if(typeof no_trailing!=='boolean'){debounce_mode=callback;callback=no_trailing;no_trailing=undefined;}
function wrapper(){var that=this,elapsed=+new Date()-last_exec,args=arguments;function exec(){last_exec=+new Date();callback.apply(that,args);};function clear(){timeout_id=undefined;};if(debounce_mode&&!timeout_id){exec();}
timeout_id&&clearTimeout(timeout_id);if(debounce_mode===undefined&&elapsed>delay){exec();}else if(no_trailing!==true){timeout_id=setTimeout(debounce_mode?clear:exec,debounce_mode===undefined?delay-elapsed:delay);}};if($.guid){wrapper.guid=callback.guid=callback.guid||$.guid++;}
return wrapper;};$.debounce=function(delay,at_begin,callback){return callback===undefined?jq_throttle(delay,at_begin,false):jq_throttle(delay,callback,at_begin!==false);};})(this);
(function($){$.extend({__stringPrototype:function(str){var splitCheck=("a b".split(/\w/)[0]==" ");function makeRegExpGlobal(p){if(!p.source){return p;}
var mods="g"+((p.ignoreCase)?"i":"")+((p.multiline)?"m":"");return new RegExp(p.source,mods);}
this.str=str;this.JSONFilter=/^\/\*-secure-([\s\S]*)\*\/\s*$/;this.ScriptFragment='<script[^>]*>([\\S\\s]*?)<\/script>';this.specialChar={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','\\':'\\\\'};this.blank=function(s){return/^\s*$/.test(this.s(s)||' ');};this.camelize=function(s){var a=this.s(s).split('-'),i;s=[a[0]];for(i=1;i<a.length;i++){s.push(a[i].charAt(0).toUpperCase()+a[i].substring(1));}
this.str=s.join('');return this;};this.capitalize=function(s){s=this.s(s);this.str=s.charAt(0).toUpperCase()+s.substring(1).toLowerCase();return this;};this.dasherize=function(s){this.str=this.s(s).split('_').join('-');return this;};this.empty=function(s){return(s)?(s==''):(this.str=='');};this.endsWith=function(pattern,s){s=this.s(s);var d=s.length-pattern.length;return d>=0&&s.lastIndexOf(pattern)===d;};this.escapeHTML=function(s){this.str=this.s(s).split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;');return this;};this.evalJSON=function(sanitize,s){s=this.s(s);var json=this.unfilterJSON(false,s).str;try{if(!sanitize||this.isJSON(json)){return eval('('+json+')');}}catch(e){}
throw new SyntaxError('Badly formed JSON string: '+s);};this.evalScripts=function(s){var scriptTags=this.extractScripts(this.s(s)),results=[];if(scriptTags.length>0){for(var i=0;i<scriptTags.length;i++){results.push(eval(scriptTags[i]));}}
return results;};this.extractScripts=function(s){var matchAll=new RegExp(this.ScriptFragment,'img'),matchOne=new RegExp(this.ScriptFragment,'im'),scriptMatches=this.s(s).match(matchAll)||[],scriptTags=[];if(scriptMatches.length>0){for(var i=0;i<scriptMatches.length;i++){scriptTags.push(scriptMatches[i].match(matchOne)[1]||'');}}
return scriptTags;};this.gsub=function(pattern,replacement,s){s=this.s(s);if($.isFunction(replacement)){var match=s.match(makeRegExpGlobal(pattern));if(match==null){return this;}
s=this.sub(pattern,replacement,match.length,s).str;}
else{s=s.split(pattern).join(replacement);}
this.str=s;return this;};this.include=function(pattern,s){return this.s(s).indexOf(pattern)>-1;};this.inspect=function(useDoubleQuotes,s){s=this.s(s);var specialChar=this.specialChar,escapedString=this.gsub(/[\x00-\x1f\\]/,function(match){var character=specialChar[match[0]];return character?character:'\\u00'+match[0].charCodeAt().toPaddedString(2,16);},s).str;this.str=(useDoubleQuotes)?'"'+escapedString.replace(/"/g,'\\"')+'"':"'"+escapedString.replace(/'/g,'\\\'')+"'";return this;};this.interpolate=function(obj,pattern,s){s=this.s(s);if(!pattern){pattern=/(^|.|\r|\n)(\#\{\s*(\w+)\s*\})/;}
var count=0,length=s.length,match;while(pattern.match(s)&&count++<length){match=pattern.exec(s);s=this.gsub(match[2],obj[match[3]],s).str;}
this.str=s;return this;};this.isJSON=function(s){s=this.s(s);if(this.blank(s)){return false;}
s=s.replace(/\\./g,'@').replace(/"[^"\\\n\r]*"/g,'');return(/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(s);};this.scan=function(pattern,replacement,s){s=this.s(s);this.gsub(pattern,replacement,s).str=s;return this;};this.startsWith=function(pattern,s){return this.s(s).indexOf(pattern)===0;};this.strip=function(s){this.str=$.trim(this.s(s));return this;};this.stripScripts=function(s){this.str=this.s(s).replace(new RegExp(this.ScriptFragment,'img'),'');return this;};this.stripTags=function(s){this.str=this.s(s).replace(/<\/?[^>]+>/gi,'');return this;};this.sub=function(pattern,replacement,count,s){s=this.s(s);count=(!count)?1:count;if(count<0||isNaN(count)){return this;}
pattern=makeRegExpGlobal(pattern);var sarray=s.split(pattern),matches=s.match(pattern);if(splitCheck&&typeof(pattern)=="object"){if(count==matches.length)++count;if(s.indexOf(matches[0])==0)sarray.unshift("");if(s.lastIndexOf(matches[matches.length-1])==s.length-matches[matches.length-1].length)sarray.push("");}
s=sarray[0];for(var i=1;i<sarray.length;i++){if(i<=count){if($.isFunction(replacement)){s+=replacement(matches[i-1]||matches)+sarray[i];}else{s+=replacement+sarray[i];}}else{s+=(matches[i-1]||matches)+sarray[i];}}
this.str=s;return this;};this.succ=function(s){s=this.s(s);this.str=s.slice(0,s.length-1)+String.fromCharCode(s.charCodeAt(s.length-1)+1);return this;};this.times=function(count,s){this.str=count<1?"":(new Array(count+1)).join(this.s(s));return this;};this.toJSON=function(s){return this.inspect(true,this.s(s));};this.toQueryParams=function(separator,s){s=this.s(s);var paramsList=s.substring(s.indexOf('?')+1).split('#')[0].split(separator||'&'),params={},i,key,value,pair;for(i=0;i<paramsList.length;i++){pair=paramsList[i].split('=');key=decodeURIComponent(pair[0]);value=(pair[1])?decodeURIComponent(pair[1]):undefined;if(params[key]){if(typeof params[key]=="string"){params[key]=[params[key]];}
params[key].push(value);}else{params[key]=value;}}
return params;};this.truncate=function(length,truncation,s){s=this.s(s);length=length||30;truncation=(!truncation)?'...':truncation;s=(s.length>length)?s.slice(0,length-truncation.length)+truncation:String(s);this.str=s;return this;};this.underscore=function(s){this.gsub(/[A-Z]/,function(m){return"_"+m.toLowerCase();},this.s(s));if(this.str.substring(0,1)=="_"){this.str=this.str.substring(1);}
return this;};this.unescapeHTML=function(s){this.str=this.stripTags(this.s(s)).str.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>');return this;};this.unfilterJSON=function(filter,s){s=this.s(s);filter=filter||this.JSONFilter;var filtered=s.match(filter);this.str=(filtered!==null)?filtered[1]:s;return this;};this.value=function(){return this.str;};this.s=function(s){return(s)?s:this.str;};},string:function(str){if(str===String.prototype){$.extend(String.prototype,new $.__stringPrototype());}
else{return new $.__stringPrototype(str);}}});$.__stringPrototype.parseQuery=$.__stringPrototype.toQueryParams;})(jQuery);
(function(){$.widget("jv.treeList",{options:{selectable:true},_create:function()
{var w=this,control=$(this.element);w._initItem(control.find('dl'));var $lisOpen=control.find('dt.ui-treeList-open');w.openNode($lisOpen);control.find('a.treeList').bind('click keypress',function(event)
{if(event.type=='keypress'&&event.which!='13')
{return;}
var treeButtonLength=control.find('dt').length,treeButtonsClosed=control.find('dt.ui-state-default').length;if(treeButtonsClosed<treeButtonLength)
{event.preventDefault();w.closeNode(control.find('dt'));}
else
{event.preventDefault();w.openNode(control.find('dt'));}});control.find('dt a.ui-treeList-toggle').bind('click keypress',function(event)
{if(event.type=='keypress'&&event.which!='13')
{return;}
var t=$(event.target).parents('dt');if(t.hasClass('ui-state-default'))
{event.preventDefault();w.openNode(t);}
else
{event.preventDefault();w.closeNode(t);}});},destroy:function()
{$(this.element+'a.treeList').unbind('click');$(this.element).find('dl').removeClass('ui-treeList ui-widget ui-widget-content').find('dt').unbind('mouseenter mouseleave').removeClass('ui-treeList-item ui-widget-content ui-state-default ui-state-hover').remove().unbind('click');$.Widget.prototype.destroy.call(this);},_initItem:function($lis)
{$lis.addClass('ui-treeList ui-widget ui-widget-content').find('dt').addClass('ui-treeList-item ui-widget-content ui-state-default').hover(function()
{$(this).addClass('ui-state-hover');return false;},function()
{$(this).removeClass('ui-state-hover');return false;}).wrapInner('<div class="TreeListFloat" />').prepend('<div class="TreeListArrow"><span class="ui-widget ui-widget-content ui-icon ui-icon-triangle-1-e"></span></div>').wrapInner('<div class="LayoutBreakAfter TreeListPad" />').end().children('dd').addClass('TreeListPad').hide().end().find('dt a').addClass('ui-treeList-toggle');},openNode:function($lisOpen)
{if($lisOpen)
{$lisOpen.removeClass('ui-state-default').next('dd').show().end().find('.ui-icon-triangle-1-e').removeClass('ui-icon-triangle-1-e').addClass('ui-icon-triangle-1-s');$lisOpen.find(".TreeListPreview").hide();}},closeNode:function($lisClose)
{if($lisClose)
{$lisClose.addClass('ui-state-default').next('dd').hide().end().find('.ui-icon-triangle-1-s').removeClass('ui-icon-triangle-1-s').addClass('ui-icon-triangle-1-e');$lisClose.find(".TreeListPreview").show();}}});})(jQuery);
$(document).ready(function()
{$('.SignInLink').live('click',function(){$('.CreateNewLink').removeClass("ActiveLink");if(!($(this).hasClass("ActiveLink")))
{$(this).addClass("ActiveLink");$(".CreateNewContent").hide();$(".SignInContent").show();}});$('.CreateNewLink').live('click',function(){$('.SignInLink').removeClass("ActiveLink");if(!($(this).hasClass("ActiveLink")))
{$(this).addClass("ActiveLink");$(".SignInContent").hide();$(".CreateNewContent").show();}});});
$(document).ready(function()
{$(".SubscriptionCheckout").click(function(){if($(this).hasClass("DisableFade"))
{return false;}});$(".TermsConditions").click(function(){if($(this).is(":checked"))
{$(".SubscriptionCheckout").removeClass("DisableFade");}
else
{$(".SubscriptionCheckout").addClass("DisableFade");}});$("#CartPromotionApply").click(function(){if($(this).hasClass("DisableFadeGrey"))
{return false;}
else{}});$("#CartPromotion").keyup(function(){if(!($(this).val()==""))
{$("#CartPromotionApply").removeClass("DisableFadeGrey");}
else{$("#CartPromotionApply").addClass("DisableFadeGrey");}});$("#CartShippingApply").click(function(){if($(this).hasClass("DisableFadeGrey"))
{return false;}
else{}});$("#ShippingCode").keyup(function(){if(!($(this).val()==""))
{$("#CartShippingApply").removeClass("DisableFadeGrey");}
else{$("#CartShippingApply").addClass("DisableFadeGrey");}});});
URLParser=(function(){var pageURL=window.location.toString();var urlArray=new Array();var pathArray=new Array();urlArray=pageURL.split('//');pathArray=urlArray[1].split('/');var subDomain=pathArray[0].split('.')[0];var locale=pathArray[1];locale=((locale.length==2)||(locale=="ca_fr")||(locale=="africa")||(locale=="be_en")||(locale=="be_fr")||(locale=="be_nl")||(locale=="eeurope")||(locale=="il_en")||(locale=="il_he")||(locale=="lu_de")||(locale=="lu_en")||(locale=="lu_fr")||(locale=="mena_ar")||(locale=="mena_fr")||(locale=="ch_de")||(locale=="ch_fr")||(locale=="ch_it")||(locale=="hk_zh")||(locale=="hk_en")||(locale=="sea"))?locale:"en_us";if(locale=="en_us"){pathArray.splice(1,0,locale);}
var siteLevel=pathArray[2];var siteSection=pathArray[3];var productName=(siteLevel=="products")?product=pathArray[3]:"";var siteSubSection=pathArray[4];var productSection=(siteLevel=="products")?product=pathArray[4]:"";var productSubSection=(siteLevel=="products")?product=pathArray[5]:"";var fileName;$.each(pathArray,function(part){});return{"url":window.location,"path":window.location.pathname,"protocol":window.location.protocol,"hash":window.location.hash,"subDomain":subDomain,"host":pathArray[0],"locale":locale,"siteLevel":siteLevel,"siteSection":siteSection,"productName":productName,"siteSubSection":siteSubSection,"productSection":productSection,"productSubSection":productSubSection,"fileName":fileName};})();
$(document).ready(function()
{var PageToolsUrl=location.href;var PageToolsTitle=document.title;var bitLySuccess=false;var bitLyShortURL;function bitLy()
{if($.browser.msie)
{bitLySuccess=false;}
else
{var account=$('meta[name=area]').attr("content");switch(account)
{case'devnet':var bitLyLogin='edsulliva';var bitLyApiKey='R_3466dc7c929862c7b400574c56d3eb6b';break;case'products':bitLyLogin='adobesm';bitLyApiKey='R_214c6d683f4ce59a161ce18046883b5d';break;default:bitLyLogin='adobesm';bitLyApiKey='R_214c6d683f4ce59a161ce18046883b5d';}
var bitLyApi='http://api.bit.ly/v3/shorten?';var bitLyFormat='xml';var bitLyURL=bitLyApi+'login='+bitLyLogin+'&apiKey='+bitLyApiKey+'&longUrl='+encodeURIComponent(PageToolsUrl)+'&format='+bitLyFormat;$.ajax({type:'GET',contentType:'application/x-www-form-urlencoded',dataType:bitLyFormat,url:bitLyURL,async:false,success:function(xml)
{$(xml).find("url").each(function()
{bitLySuccess=true;bitLyShortURL=$(this).text();});},error:function()
{}});}}
$('.Facebook-button').click(function(event)
{event.preventDefault();bitLy();if(bitLySuccess)
{window.open('http://www.facebook.com/sharer.php?u='+bitLyShortURL+'&t='+encodeURIComponent(PageToolsTitle),'sharer','toolbar=0,status=0,width=626,height=436');}
else
{window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(PageToolsUrl)+'&t='+encodeURIComponent(PageToolsTitle),'sharer','toolbar=0,status=0,width=626,height=436');}});$('.Twitter-button').click(function(event)
{event.preventDefault();bitLy();if(bitLySuccess)
{window.open('http://twitter.com/share?text='+encodeURIComponent(PageToolsTitle)+'&url='+bitLyShortURL+'&data-counturl='+encodeURIComponent(PageToolsUrl),'sharer','toolbar=0,status=0,width=775,height=436');}
else
{window.open('http://twitter.com/share?text='+encodeURIComponent(PageToolsTitle)+'&url='+encodeURIComponent(PageToolsUrl),'sharer','toolbar=0,status=0,width=775,height=436');}});$('.LinkedIn-button').click(function(event)
{event.preventDefault();bitLy();if(bitLySuccess)
{window.open('http://www.linkedin.com/shareArticle?mini=true&url='+bitLyShortURL+'&title='+encodeURIComponent(PageToolsTitle),'sharer','toolbar=0,status=0,width=626,height=436');}
else
{window.open('http://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(PageToolsUrl)+'&title='+encodeURIComponent(PageToolsTitle),'sharer','toolbar=0,status=0,width=626,height=436');}});$('.Weibo-button').click(function(event)
{event.preventDefault();window.open('http://service.weibo.com/share/share.php?url='+encodeURIComponent(PageToolsUrl)+'&title='+encodeURIComponent(PageToolsTitle),'sharer','toolbar=0,status=0,width=626,height=436');});$('.PayPal-button').click(function(event)
{event.preventDefault();window.open('https://www.paypal.com/us/cgi-bin/webscr?cmd=xpt/Marketing/popup/OLCWhatIsPayPal-outside','olcwhatispaypal','toolbar=0,status=0,width=400,height=350');});if($.browser.msie||window.opera)
{$('.Bookmark-button').click(function(event)
{event.preventDefault();var BookmarkUrl=parent.location.protocol+'//'+location.host+window.location.pathname;var BookmarkTitle=$('title').html();if($.browser.msie)
{window.external.AddFavorite(BookmarkUrl,BookmarkTitle);}
else if(window.opera)
{$(this).attr("href",BookmarkUrl);$(this).attr("title",BookmarkTitle);$(this).attr("rel","sidebar");$(this).click();}});}
else
{$('.IconBookmark').remove();$('.Bookmark-button').remove();}
$('.Print-button').click(function(event)
{event.preventDefault();window.print();});$('.RouterClose').click(function()
{var IconTarget=$(this).attr('rel');$('#'+IconTarget).hide("pulsate",{times:1},600);});$('.LinkDownload').hover(function()
{$(this).find('a').css('cursor','default');var DownloadHover=$(this).find('a').attr('rel');$(this).addClass("Link"+DownloadHover);},function()
{$(this).find('a').css('cursor','');var DownloadHover=$(this).find('a').attr('rel');$(this).removeClass("Link"+DownloadHover);});$('.RouterMore').hover(function()
{$(this).removeClass("RouterMore");$(this).addClass("RouterMoreHover");},function()
{$(this).removeClass("RouterMoreHover");$(this).addClass("RouterMore");});$('.RouterEducation').hover(function()
{$(this).removeClass("RouterEducation");$(this).addClass("RouterEducationHover");},function()
{$(this).removeClass("RouterEducationHover");$(this).addClass("RouterEducation");});$('.RouterFacebook').hover(function()
{$(this).removeClass("RouterFacebook");$(this).addClass("RouterFacebookHover");},function()
{$(this).removeClass("RouterFacebookHover");$(this).addClass("RouterFacebook");});$('.RouterTwitter').hover(function()
{$(this).removeClass("RouterTwitter");$(this).addClass("RouterTwitterHover");},function()
{$(this).removeClass("RouterTwitterHover");$(this).addClass("RouterTwitter");});$('.RouterRSS').hover(function()
{$(this).removeClass("RouterRSS");$(this).addClass("RouterRSSHover");},function()
{$(this).removeClass("RouterRSSHover");$(this).addClass("RouterRSS");});$('.RouterAIGA').hover(function()
{$(this).removeClass("RouterAIGA");$(this).addClass("RouterAIGAHover");},function()
{$(this).removeClass("RouterAIGAHover");$(this).addClass("RouterAIGA");});});
(function($,undefined){$.jCacher=new function(){var cache=this;var $this=$(this);cache.version="1.0.0";cache.count=0;var currentTimeout;var nextKey;var nextCheck;var store=new storage(false);var addMilliseconds=function(date,milliseconds){return new Date(date.getTime()+milliseconds);};var removeItem=function(key,reason){var itm=store.getCacheItem(key);if(key!==null&&key!==undefined&&itm!==null){cache.count--;var mappings=store.getDependencyMappings(key);store.removeCacheItem(key);onitemremoved(itm,reason);for(var i=0;i<mappings.length;i++){removeItem(mappings[i],"dependencyChanged");}}
return itm!==undefined;};var validate=function(){var now=new Date();var items=store.getCacheItems();var rebuildSchedule=false;for(var i=0;i<items.length;i++){var item=items[i];if(item.expires<=now){rebuildSchedule=true;removeItem(item.key,"expired");}}
if(rebuildSchedule){schedule();}};var schedule=function(item){if(item===undefined){nextCheck=null;nextKey=null;if(currentTimeout){clearTimeout(currentTimeout);}
var items=store.getCacheItems();for(var i=0;i<items.length;i++){var itm=items[i];if(nextCheck){if(itm.expires<nextCheck){nextCheck=itm.expires;nextKey=itm.key;}}
else{nextCheck=itm.expires;nextKey=itm.key;}}
if(nextCheck){setTimer();}
else{currentTimeout=null;}}
else if(nextCheck==undefined||(nextCheck&&item.expires<nextCheck)){if(currentTimeout){clearTimeout(currentTimeout);}
nextCheck=item.expires;setTimer();}};var setTimer=function(){if(nextCheck){var now=new Date();var timeUntilNextCheck=nextCheck.getTime()-now.getTime()+100;if(timeUntilNextCheck>0){currentTimeout=setTimeout(validate,timeUntilNextCheck);}
else{validate();}}}
var onitemremoved=function(item,reason){$this.trigger("itemremoved",[item,reason]);};cache.itemremoved=function(fn){$this.bind("itemremoved",fn);};cache.add=function(key,value,slidingExpiration,absoluteExpiration,dependencies,onRemoved){if(value!==undefined){if(store.getCacheKeys().indexOf(key)==-1){cache.count++;}
var expires;if(slidingExpiration||absoluteExpiration){if(slidingExpiration){expires=addMilliseconds(new Date(),(slidingExpiration*1000));}
else if(absoluteExpiration){expires=absoluteExpiration;}}
if(dependencies){store.registerDependencies(key,dependencies);}
var item=new cacheItem(key,value,expires,slidingExpiration)
store.addCacheItem(item);if(expires&&(nextCheck===undefined||expires<nextCheck)||(nextKey==key||nextCheck===null)){schedule(item);}}};cache.get=function(key){var itm=store.getCacheItem(key);if(itm){var now=new Date();if(itm.slidingExpiration){itm.expires=addMilliseconds(now,(itm.slidingExpiration*1000));if((key==nextKey)||(nextCheck&&itm.expires<nextCheck)){schedule();}
else{var b=true;}}
if(itm.expires&&itm.expires<now){return null;}
return itm;}
return null;};cache.remove=function(key){if(key!==undefined&&key!==null&&key!==NaN&&cache.count>0){return removeItem(key,"removed");if(nextKey==key){schedule();}}};cache.clear=function(){if(cache.count>0){cache.count=0;store.clear();if(currentTimeout!==null){clearTimeout(currentTimeout);currentTimeout=null;}}};if(store.getCacheItems().length>0){schedule();}}
function cacheItem(key,value,expires,slidingExpiration){this.key=key;this.value=value;this.expires=expires;this.slidingExpiration=slidingExpiration;}
function dependencyMapper(key,mappings){this.key=key;this.mappings=mappings;}
function storage(useLocalStorage){var _items=[];var _keys=[];var _dependencyMappings=[];(function(){if(useLocalStorage&&window.localStorage){if(!window.localStorage.jCacher){window.localStorage.jCacher=jQuery.toJSON({items:[],dependencyMappings:[]});}
else{var cacheItem=jQuery.parseJSON(window.localStorage.jCacher);for(var i=0;i<cacheItem.items.length;i++){var item=cacheItem.items[i];item.expires=new Date(item.expires);_items.push(item);}
_dependencyMappings=cacheItem.dependencyMappings;}
for(var i=0;i<_items.length;i++){_keys.push(_items[i].key);}}})();this.getCacheItem=function(key){var index=$.inArray(key,_keys);return index>-1?_items[index]:null;};this.getCacheItems=function(){return _items;};this.removeCacheItem=function(key){var indexToRemove=_keys.indexOf(key);if(useLocalStorage&&window.localStorage){var cacheItem=jQuery.parseJSON(window.localStorage.jCacher);cacheItem.dependencyMappings.splice(indexToRemove,1);cacheItem.items.splice(indexToRemove,1);window.localStorage.jCacher=jQuery.toJSON(cacheItem);}
_items.splice(indexToRemove,1);_keys.splice(indexToRemove,1);_dependencyMappings.splice(indexToRemove,1);};this.addCacheItem=function(value){var index=_keys.indexOf(value.key);if(index==-1){var mapper=new dependencyMapper(value.key,[]);_items.push(value);_keys.push(value.key);_dependencyMappings.push(mapper);if(useLocalStorage&&window.localStorage){var cacheItem=jQuery.parseJSON(window.localStorage.jCacher);var jsonValue=(function(){var obj=new Object();obj.expires=value.expires.getTime();obj.key=value.key;obj.value=value.value;obj.slidingExpiration=value.slidingExpiration;return obj;})();cacheItem.items.push(jsonValue);cacheItem.dependencyMappings.push(mapper);window.localStorage.jCacher=jQuery.toJSON(cacheItem);}}
else{_items[index]=value;if(useLocalStorage&&window.localStorage){var cacheItem=jQuery.parseJSON(window.localStorage.jCacher);cacheItem.items[index]=value;window.localStorage.jCacher=jQuery.toJSON(cacheItem);}}};this.getCacheKeys=function(){return _keys;};this.registerDependencies=function(key,dependencies){for(var i=0;i<dependencies.length;i++){var mappingsIndex=_keys.indexOf(dependencies[i]);if(mappingsIndex!=-1){if(_dependencyMappings[mappingsIndex].mappings.indexOf(key)==-1){_dependencyMappings[mappingsIndex].mappings.push(key);if(useLocalStorage&&window.localStorage){var cacheItem=jQuery.parseJSON(window.localStorage.jCacher);cacheItem.dependencyMappings[mappingsIndex].mappings.push(key);window.localStorage.jCacher=jQuery.toJSON(cacheItem);}}}}};this.getDependencyMappings=function(key){var index=_keys.indexOf(key);return index>-1?_dependencyMappings[index].mappings:null;};this.clear=function(){if(window.localStorage){window.localStorage.removeItem("jCacher");}
_items=[];_dependencyMappings=[];_keys=[];};};})(jQuery);
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}
var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
(function(d){function m(a){if(a in j.style)return a;var b=["Moz","Webkit","O","ms"],c=a.charAt(0).toUpperCase()+a.substr(1);if(a in j.style)return a;for(a=0;a<b.length;++a){var d=b[a]+c;if(d in j.style)return d}}
function l(a){"string"===typeof a&&this.parse(a);return this}
function q(a,b,c,e){var h=[];d.each(a,function(a){a=d.camelCase(a);a=d.transit.propertyMap[a]||d.cssProps[a]||a;a=a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()});-1===d.inArray(a,h)&&h.push(a)});d.cssEase[c]&&(c=d.cssEase[c]);var f=""+n(b)+" "+c;0<parseInt(e,10)&&(f+=" "+n(e));var g=[];d.each(h,function(a,b){g.push(b+" "+f)});return g.join(", ")}
function f(a,b){b||(d.cssNumber[a]=!0);d.transit.propertyMap[a]=e.transform;d.cssHooks[a]={get:function(b){return d(b).css("transit:transform").get(a)},set:function(b,e){var h=d(b).css("transit:transform");h.setFromString(a,e);d(b).css({"transit:transform":h})}}}
function g(a,b){return"string"===typeof a&&!a.match(/^[\-0-9\.]+$/)?a:""+a+b}
function n(a){d.fx.speeds[a]&&(a=d.fx.speeds[a]);return g(a,"ms")}
d.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var j=document.createElement("div"),e={},r=-1<navigator.userAgent.toLowerCase().indexOf("chrome");e.transition=m("transition");e.transitionDelay=m("transitionDelay");e.transform=m("transform");e.transformOrigin=m("transformOrigin");j.style[e.transform]="";j.style[e.transform]="rotateY(90deg)";e.transform3d=""!==j.style[e.transform];var p=e.transitionEnd={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"}[e.transition]||null,k;for(k in e)e.hasOwnProperty(k)&&"undefined"===typeof d.support[k]&&(d.support[k]=e[k]);j=null;d.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};d.cssHooks["transit:transform"]={get:function(a){return d(a).data("transform")||new l},set:function(a,b){var c=b;c instanceof l||(c=new l(c));a.style[e.transform]="WebkitTransform"===e.transform&&!r?c.toString(!0):c.toString();d(a).data("transform",c)}};d.cssHooks.transform={set:d.cssHooks["transit:transform"].set};"1.8">d.fn.jquery&&(d.cssHooks.transformOrigin={get:function(a){return a.style[e.transformOrigin]},set:function(a,b){a.style[e.transformOrigin]=b}},d.cssHooks.transition={get:function(a){return a.style[e.transition]},set:function(a,b){a.style[e.transition]=b}});f("scale");f("translate");f("rotate");f("rotateX");f("rotateY");f("rotate3d");f("perspective");f("skewX");f("skewY");f("x",!0);f("y",!0);l.prototype={setFromString:function(a,b){var c="string"===typeof b?b.split(","):b.constructor===Array?b:[b];c.unshift(a);l.prototype.set.apply(this,c)},set:function(a){var b=Array.prototype.slice.apply(arguments,[1]);this.setter[a]?this.setter[a].apply(this,b):this[a]=b.join(",")},get:function(a){return this.getter[a]?this.getter[a].apply(this):this[a]||0},setter:{rotate:function(a){this.rotate=g(a,"deg")},rotateX:function(a){this.rotateX=g(a,"deg")},rotateY:function(a){this.rotateY=g(a,"deg")},scale:function(a,b){void 0===b&&(b=a);this.scale=a+","+b},skewX:function(a){this.skewX=g(a,"deg")},skewY:function(a){this.skewY=g(a,"deg")},perspective:function(a){this.perspective=g(a,"px")},x:function(a){this.set("translate",a,null)},y:function(a){this.set("translate",null,a)},translate:function(a,b){void 0===this._translateX&&(this._translateX=0);void 0===this._translateY&&(this._translateY=0);null!==a&&void 0!==a&&(this._translateX=g(a,"px"));null!==b&&void 0!==b&&(this._translateY=g(b,"px"));this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var a=(this.scale||"1,1").split(",");a[0]&&(a[0]=parseFloat(a[0]));a[1]&&(a[1]=parseFloat(a[1]));return a[0]===a[1]?a[0]:a},rotate3d:function(){for(var a=(this.rotate3d||"0,0,0,0deg").split(","),b=0;3>=b;++b)a[b]&&(a[b]=parseFloat(a[b]));a[3]&&(a[3]=g(a[3],"deg"));return a}},parse:function(a){var b=this;a.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(a,d,e){b.setFromString(d,e)})},toString:function(a){var b=[],c;for(c in this)if(this.hasOwnProperty(c)&&(e.transform3d||!("rotateX"===c||"rotateY"===c||"perspective"===c||"transformOrigin"===c)))"_"!==c[0]&&(a&&"scale"===c?b.push(c+"3d("+this[c]+",1)"):a&&"translate"===c?b.push(c+"3d("+this[c]+",0)"):b.push(c+"("+this[c]+")"));return b.join(" ")}};d.fn.transition=d.fn.transit=function(a,b,c,f){var h=this,g=0,j=!0;"function"===typeof b&&(f=b,b=void 0);"function"===typeof c&&(f=c,c=void 0);"undefined"!==typeof a.easing&&(c=a.easing,delete a.easing);"undefined"!==typeof a.duration&&(b=a.duration,delete a.duration);"undefined"!==typeof a.complete&&(f=a.complete,delete a.complete);"undefined"!==typeof a.queue&&(j=a.queue,delete a.queue);"undefined"!==typeof a.delay&&(g=a.delay,delete a.delay);"undefined"===typeof b&&(b=d.fx.speeds._default);"undefined"===typeof c&&(c=d.cssEase._default);b=n(b);var l=q(a,b,c,g),k=d.transit.enabled&&e.transition?parseInt(b,10)+parseInt(g,10):0;if(0===k)return b=j,c=function(b){h.css(a);f&&f.apply(h);b&&b()},!0===b?h.queue(c):b?h.queue(b,c):c(),h;var m={};b=j;c=function(b){this.offsetWidth;var c=!1,g=function(){c&&h.unbind(p,g);0<k&&h.each(function(){this.style[e.transition]=m[this]||null});"function"===typeof f&&f.apply(h);"function"===typeof b&&b()};0<k&&p&&d.transit.useTransitionEnd?(c=!0,h.bind(p,g)):window.setTimeout(g,k);h.each(function(){0<k&&(this.style[e.transition]=l);d(this).css(a)})};!0===b?h.queue(c):b?h.queue(b,c):c();return this};d.transit.getTransitionValue=q})(jQuery);
adobe={version:"1.0",release:"dotcom",msgs:{TYPERR:"argument is not of type "},vrbls:{},vrbl:function(name,value){if(name===undefined){return adobe.vrbls;}
if(value===undefined){return adobe.vrbls[String(name)];}
return adobe.vrbls[String(name)]=value;}};adobe.dom={};adobe.fn={};adobe.http={};adobe.reflow={dispatchers:{},createDispatcher:function(name,documentElement){return(adobe.reflow.dispatchers[name]=new adobe.reflow.Dispatcher(documentElement||document));},getDispatcherByName:function(name){return adobe.reflow.dispatchers[name];}};adobe.ui={};
var swfobject=function(){var UNDEF="undefined",OBJECT="object",SHOCKWAVE_FLASH="Shockwave Flash",SHOCKWAVE_FLASH_AX="ShockwaveFlash.ShockwaveFlash",FLASH_MIME_TYPE="application/x-shockwave-flash",EXPRESS_INSTALL_ID="SWFObjectExprInst",ON_READY_STATE_CHANGE="onreadystatechange",win=window,doc=document,nav=navigator,plugin=false,domLoadFnArr=[main],regObjArr=[],objIdArr=[],listenersArr=[],storedAltContent,storedAltContentId,storedCallbackFn,storedCallbackObj,isDomLoaded=false,isExpressInstallActive=false,dynamicStylesheet,dynamicStylesheetMedia,autoHideShow=true,ua=function(){var w3cdom=typeof doc.getElementById!=UNDEF&&typeof doc.getElementsByTagName!=UNDEF&&typeof doc.createElement!=UNDEF,u=nav.userAgent.toLowerCase(),p=nav.platform.toLowerCase(),windows=p?/win/.test(p):/win/.test(u),mac=p?/mac/.test(p):/mac/.test(u),webkit=/webkit/.test(u)?parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,ie=eval("/*@cc_on!@*/false"),playerVersion=[0,0,0],d=null;if(typeof nav.plugins!=UNDEF&&typeof nav.plugins[SHOCKWAVE_FLASH]==OBJECT){d=nav.plugins[SHOCKWAVE_FLASH].description;if(d&&!(typeof nav.mimeTypes!=UNDEF&&nav.mimeTypes[FLASH_MIME_TYPE]&&!nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)){plugin=true;ie=false;d=d.replace(/^.*\s+(\S+\s+\S+$)/,"$1");playerVersion[0]=parseInt(d.replace(/^(.*)\..*$/,"$1"),10);playerVersion[1]=parseInt(d.replace(/^.*\.(.*)\s.*$/,"$1"),10);playerVersion[2]=/[a-zA-Z]/.test(d)?parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0;}}
else if(typeof win.ActiveXObject!=UNDEF){try{var a=new ActiveXObject(SHOCKWAVE_FLASH_AX);if(a){d=a.GetVariable("$version");if(d){ie=true;d=d.split(" ")[1].split(",");playerVersion=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)];}}}
catch(e){}}
return{w3:w3cdom,pv:playerVersion,wk:webkit,ie:ie,win:windows,mac:mac};}(),onDomLoad=function(){if(!ua.w3){return;}
if((typeof doc.readyState!=UNDEF&&doc.readyState=="complete")||(typeof doc.readyState==UNDEF&&(doc.getElementsByTagName("body")[0]||doc.body))){callDomLoadFunctions();}
if(!isDomLoaded){if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("DOMContentLoaded",callDomLoadFunctions,false);}
if(ua.ie&&ua.win){doc.attachEvent(ON_READY_STATE_CHANGE,function(){if(doc.readyState=="complete"){doc.detachEvent(ON_READY_STATE_CHANGE,arguments.callee);callDomLoadFunctions();}});if(win==top){(function(){if(isDomLoaded){return;}
try{doc.documentElement.doScroll("left");}
catch(e){setTimeout(arguments.callee,0);return;}
callDomLoadFunctions();})();}}
if(ua.wk){(function(){if(isDomLoaded){return;}
if(!/loaded|complete/.test(doc.readyState)){setTimeout(arguments.callee,0);return;}
callDomLoadFunctions();})();}
addLoadEvent(callDomLoadFunctions);}}();function callDomLoadFunctions(){if(isDomLoaded){return;}
try{var t=doc.getElementsByTagName("body")[0].appendChild(createElement("span"));t.parentNode.removeChild(t);}
catch(e){return;}
isDomLoaded=true;var dl=domLoadFnArr.length;for(var i=0;i<dl;i++){domLoadFnArr[i]();}}
function addDomLoadEvent(fn){if(isDomLoaded){fn();}
else{domLoadFnArr[domLoadFnArr.length]=fn;}}
function addLoadEvent(fn){if(typeof win.addEventListener!=UNDEF){win.addEventListener("load",fn,false);}
else if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("load",fn,false);}
else if(typeof win.attachEvent!=UNDEF){addListener(win,"onload",fn);}
else if(typeof win.onload=="function"){var fnOld=win.onload;win.onload=function(){fnOld();fn();};}
else{win.onload=fn;}}
function main(){if(plugin){testPlayerVersion();}
else{matchVersions();}}
function testPlayerVersion(){var b=doc.getElementsByTagName("body")[0];var o=createElement(OBJECT);o.setAttribute("type",FLASH_MIME_TYPE);var t=b.appendChild(o);if(t){var counter=0;(function(){if(typeof t.GetVariable!=UNDEF){var d=t.GetVariable("$version");if(d){d=d.split(" ")[1].split(",");ua.pv=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)];}}
else if(counter<10){counter++;setTimeout(arguments.callee,10);return;}
b.removeChild(o);t=null;matchVersions();})();}
else{matchVersions();}}
function matchVersions(){var rl=regObjArr.length;if(rl>0){for(var i=0;i<rl;i++){var id=regObjArr[i].id;var cb=regObjArr[i].callbackFn;var cbObj={success:false,id:id};if(ua.pv[0]>0){var obj=getElementById(id);if(obj){if(hasPlayerVersion(regObjArr[i].swfVersion)&&!(ua.wk&&ua.wk<312)){setVisibility(id,true);if(cb){cbObj.success=true;cbObj.ref=getObjectById(id);cb(cbObj);}}
else if(regObjArr[i].expressInstall&&canExpressInstall()){var att={};att.data=regObjArr[i].expressInstall;att.width=obj.getAttribute("width")||"0";att.height=obj.getAttribute("height")||"0";if(obj.getAttribute("class")){att.styleclass=obj.getAttribute("class");}
if(obj.getAttribute("align")){att.align=obj.getAttribute("align");}
var par={};var p=obj.getElementsByTagName("param");var pl=p.length;for(var j=0;j<pl;j++){if(p[j].getAttribute("name").toLowerCase()!="movie"){par[p[j].getAttribute("name")]=p[j].getAttribute("value");}}
showExpressInstall(att,par,id,cb);}
else{displayAltContent(obj);if(cb){cb(cbObj);}}}}
else{setVisibility(id,true);if(cb){var o=getObjectById(id);if(o&&typeof o.SetVariable!=UNDEF){cbObj.success=true;cbObj.ref=o;}
cb(cbObj);}}}}}
function getObjectById(objectIdStr){var r=null;var o=getElementById(objectIdStr);if(o&&o.nodeName=="OBJECT"){if(typeof o.SetVariable!=UNDEF){r=o;}
else{var n=o.getElementsByTagName(OBJECT)[0];if(n){r=n;}}}
return r;}
function canExpressInstall(){return!isExpressInstallActive&&hasPlayerVersion("6.0.65")&&(ua.win||ua.mac)&&!(ua.wk&&ua.wk<312);}
function showExpressInstall(att,par,replaceElemIdStr,callbackFn){isExpressInstallActive=true;storedCallbackFn=callbackFn||null;storedCallbackObj={success:false,id:replaceElemIdStr};var obj=getElementById(replaceElemIdStr);if(obj){if(obj.nodeName=="OBJECT"){storedAltContent=abstractAltContent(obj);storedAltContentId=null;}
else{storedAltContent=obj;storedAltContentId=replaceElemIdStr;}
att.id=EXPRESS_INSTALL_ID;if(typeof att.width==UNDEF||(!/%$/.test(att.width)&&parseInt(att.width,10)<310)){att.width="310";}
if(typeof att.height==UNDEF||(!/%$/.test(att.height)&&parseInt(att.height,10)<137)){att.height="137";}
doc.title=doc.title.slice(0,47)+" - Flash Player Installation";var pt=ua.ie&&ua.win?"ActiveX":"PlugIn",fv="MMredirectURL="+win.location.toString().replace(/&/g,"%26")+"&MMplayerType="+pt+"&MMdoctitle="+doc.title;if(typeof par.flashvars!=UNDEF){par.flashvars+="&"+fv;}
else{par.flashvars=fv;}
if(ua.ie&&ua.win&&obj.readyState!=4){var newObj=createElement("div");replaceElemIdStr+="SWFObjectNew";newObj.setAttribute("id",replaceElemIdStr);obj.parentNode.insertBefore(newObj,obj);obj.style.display="none";(function(){if(obj.readyState==4){obj.parentNode.removeChild(obj);}
else{setTimeout(arguments.callee,10);}})();}
createSWF(att,par,replaceElemIdStr);}}
function displayAltContent(obj){if(ua.ie&&ua.win&&obj.readyState!=4){var el=createElement("div");obj.parentNode.insertBefore(el,obj);el.parentNode.replaceChild(abstractAltContent(obj),el);obj.style.display="none";(function(){if(obj.readyState==4){obj.parentNode.removeChild(obj);}
else{setTimeout(arguments.callee,10);}})();}
else{obj.parentNode.replaceChild(abstractAltContent(obj),obj);}}
function abstractAltContent(obj){var ac=createElement("div");if(ua.win&&ua.ie){ac.innerHTML=obj.innerHTML;}
else{var nestedObj=obj.getElementsByTagName(OBJECT)[0];if(nestedObj){var c=nestedObj.childNodes;if(c){var cl=c.length;for(var i=0;i<cl;i++){if(!(c[i].nodeType==1&&c[i].nodeName=="PARAM")&&!(c[i].nodeType==8)){ac.appendChild(c[i].cloneNode(true));}}}}}
return ac;}
function createSWF(attObj,parObj,id){var r,el=getElementById(id);if(ua.wk&&ua.wk<312){return r;}
if(el){if(typeof attObj.id==UNDEF){attObj.id=id;}
if(ua.ie&&ua.win){var att="";for(var i in attObj){if(attObj[i]!=Object.prototype[i]){if(i.toLowerCase()=="data"){parObj.movie=attObj[i];}
else if(i.toLowerCase()=="styleclass"){att+=' class="'+attObj[i]+'"';}
else if(i.toLowerCase()!="classid"){att+=' '+i+'="'+attObj[i]+'"';}}}
var par="";for(var j in parObj){if(parObj[j]!=Object.prototype[j]){par+='<param name="'+j+'" value="'+parObj[j]+'" />';}}
el.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+att+'>'+par+'</object>';objIdArr[objIdArr.length]=attObj.id;r=getElementById(attObj.id);}
else{var o=createElement(OBJECT);o.setAttribute("type",FLASH_MIME_TYPE);for(var m in attObj){if(attObj[m]!=Object.prototype[m]){if(m.toLowerCase()=="styleclass"){o.setAttribute("class",attObj[m]);}
else if(m.toLowerCase()!="classid"){o.setAttribute(m,attObj[m]);}}}
for(var n in parObj){if(parObj[n]!=Object.prototype[n]&&n.toLowerCase()!="movie"){createObjParam(o,n,parObj[n]);}}
el.parentNode.replaceChild(o,el);r=o;}}
return r;}
function createObjParam(el,pName,pValue){var p=createElement("param");p.setAttribute("name",pName);p.setAttribute("value",pValue);el.appendChild(p);}
function removeSWF(id){var obj=getElementById(id);if(obj&&obj.nodeName=="OBJECT"){if(ua.ie&&ua.win){obj.style.display="none";(function(){if(obj.readyState==4){removeObjectInIE(id);}
else{setTimeout(arguments.callee,10);}})();}
else{obj.parentNode.removeChild(obj);}}}
function removeObjectInIE(id){var obj=getElementById(id);if(obj){for(var i in obj){if(typeof obj[i]=="function"){obj[i]=null;}}
obj.parentNode.removeChild(obj);}}
function getElementById(id){var el=null;try{el=doc.getElementById(id);}
catch(e){}
return el;}
function createElement(el){return doc.createElement(el);}
function addListener(target,eventType,fn){target.attachEvent(eventType,fn);listenersArr[listenersArr.length]=[target,eventType,fn];}
function hasPlayerVersion(rv){var pv=ua.pv,v=rv.split(".");v[0]=parseInt(v[0],10);v[1]=parseInt(v[1],10)||0;v[2]=parseInt(v[2],10)||0;return(pv[0]>v[0]||(pv[0]==v[0]&&pv[1]>v[1])||(pv[0]==v[0]&&pv[1]==v[1]&&pv[2]>=v[2]))?true:false;}
function createCSS(sel,decl,media,newStyle){if(ua.ie&&ua.mac){return;}
var h=doc.getElementsByTagName("head")[0];if(!h){return;}
var m=(media&&typeof media=="string")?media:"screen";if(newStyle){dynamicStylesheet=null;dynamicStylesheetMedia=null;}
if(!dynamicStylesheet||dynamicStylesheetMedia!=m){var s=createElement("style");s.setAttribute("type","text/css");s.setAttribute("media",m);dynamicStylesheet=h.appendChild(s);if(ua.ie&&ua.win&&typeof doc.styleSheets!=UNDEF&&doc.styleSheets.length>0){dynamicStylesheet=doc.styleSheets[doc.styleSheets.length-1];}
dynamicStylesheetMedia=m;}
if(ua.ie&&ua.win){if(dynamicStylesheet&&typeof dynamicStylesheet.addRule==OBJECT){dynamicStylesheet.addRule(sel,decl);}}
else{if(dynamicStylesheet&&typeof doc.createTextNode!=UNDEF){dynamicStylesheet.appendChild(doc.createTextNode(sel+" {"+decl+"}"));}}}
function setVisibility(id,isVisible){if(!autoHideShow){return;}
var v=isVisible?"visible":"hidden";if(isDomLoaded&&getElementById(id)){getElementById(id).style.visibility=v;}
else{createCSS("#"+id,"visibility:"+v);}}
function urlEncodeIfNecessary(s){var regex=/[\\\"<>\.;]/;var hasBadChars=regex.exec(s)!=null;return hasBadChars&&typeof encodeURIComponent!=UNDEF?encodeURIComponent(s):s;}
var cleanup=function(){if(ua.ie&&ua.win){window.attachEvent("onunload",function(){var ll=listenersArr.length;for(var i=0;i<ll;i++){listenersArr[i][0].detachEvent(listenersArr[i][1],listenersArr[i][2]);}
var il=objIdArr.length;for(var j=0;j<il;j++){removeSWF(objIdArr[j]);}
for(var k in ua){ua[k]=null;}
ua=null;for(var l in swfobject){swfobject[l]=null;}
swfobject=null;});}}();return{registerObject:function(objectIdStr,swfVersionStr,xiSwfUrlStr,callbackFn){if(ua.w3&&objectIdStr&&swfVersionStr){var regObj={};regObj.id=objectIdStr;regObj.swfVersion=swfVersionStr;regObj.expressInstall=xiSwfUrlStr;regObj.callbackFn=callbackFn;regObjArr[regObjArr.length]=regObj;setVisibility(objectIdStr,false);}
else if(callbackFn){callbackFn({success:false,id:objectIdStr});}},getObjectById:function(objectIdStr){if(ua.w3){return getObjectById(objectIdStr);}},embedSWF:function(swfUrlStr,replaceElemIdStr,widthStr,heightStr,swfVersionStr,xiSwfUrlStr,flashvarsObj,parObj,attObj,callbackFn){var callbackObj={success:false,id:replaceElemIdStr};if(ua.w3&&!(ua.wk&&ua.wk<312)&&swfUrlStr&&replaceElemIdStr&&widthStr&&heightStr&&swfVersionStr){setVisibility(replaceElemIdStr,false);addDomLoadEvent(function(){widthStr+="";heightStr+="";var att={};if(attObj&&typeof attObj===OBJECT){for(var i in attObj){att[i]=attObj[i];}}
att.data=swfUrlStr;att.width=widthStr;att.height=heightStr;var par={};if(parObj&&typeof parObj===OBJECT){for(var j in parObj){par[j]=parObj[j];}}
if(flashvarsObj&&typeof flashvarsObj===OBJECT){for(var k in flashvarsObj){if(typeof par.flashvars!=UNDEF){par.flashvars+="&"+k+"="+flashvarsObj[k];}
else{par.flashvars=k+"="+flashvarsObj[k];}}}
if(hasPlayerVersion(swfVersionStr)){var obj=createSWF(att,par,replaceElemIdStr);if(att.id==replaceElemIdStr){setVisibility(replaceElemIdStr,true);}
callbackObj.success=true;callbackObj.ref=obj;}
else if(xiSwfUrlStr&&canExpressInstall()){att.data=xiSwfUrlStr;showExpressInstall(att,par,replaceElemIdStr,callbackFn);return;}
else{setVisibility(replaceElemIdStr,true);}
if(callbackFn){callbackFn(callbackObj);}});}
else if(callbackFn){callbackFn(callbackObj);}},switchOffAutoHideShow:function(){autoHideShow=false;},ua:ua,getFlashPlayerVersion:function(){return{major:ua.pv[0],minor:ua.pv[1],release:ua.pv[2]};},hasFlashPlayerVersion:hasPlayerVersion,createSWF:function(attObj,parObj,replaceElemIdStr){if(ua.w3){return createSWF(attObj,parObj,replaceElemIdStr);}
else{return undefined;}},showExpressInstall:function(att,par,replaceElemIdStr,callbackFn){if(ua.w3&&canExpressInstall()){showExpressInstall(att,par,replaceElemIdStr,callbackFn);}},removeSWF:function(objElemIdStr){if(ua.w3){removeSWF(objElemIdStr);}},createCSS:function(selStr,declStr,mediaStr,newStyleBoolean){if(ua.w3){createCSS(selStr,declStr,mediaStr,newStyleBoolean);}},addDomLoadEvent:addDomLoadEvent,addLoadEvent:addLoadEvent,getQueryParamValue:function(param){var q=doc.location.search||doc.location.hash;if(q){if(/\?/.test(q)){q=q.split("?")[1];}
if(param==null){return urlEncodeIfNecessary(q);}
var pairs=q.split("&");for(var i=0;i<pairs.length;i++){if(pairs[i].substring(0,pairs[i].indexOf("="))==param){return urlEncodeIfNecessary(pairs[i].substring((pairs[i].indexOf("=")+1)));}}}
return"";},expressInstallCallback:function(){if(isExpressInstallActive){var obj=getElementById(EXPRESS_INSTALL_ID);if(obj&&storedAltContent){obj.parentNode.replaceChild(storedAltContent,obj);if(storedAltContentId){setVisibility(storedAltContentId,true);if(ua.ie&&ua.win){storedAltContent.style.display="block";}}
if(storedCallbackFn){storedCallbackFn(storedCallbackObj);}}
isExpressInstallActive=false;}}};}();
swfobject.replaceSWF=function(swfUrlStr,replaceElemIdStr,widthStr,heightStr,swfVersionStr,xiSwfUrlStr,flashvarsObj,parObj,attObj,callbackFn){var el=document.getElementById(replaceElemIdStr);if(el.nodeName=="OBJECT"||el.nodeName=="EMBED"){var parent=el.parentNode;swfobject.removeSWF(replaceElemIdStr);parent.appendChild(document.createElement("div")).setAttribute("id",replaceElemIdStr);}
swfobject.embedSWF(swfUrlStr,replaceElemIdStr,widthStr,heightStr,swfVersionStr,xiSwfUrlStr,flashvarsObj,parObj,attObj,callbackFn);};
function setSWFDimensions(objID,width,height){if(objID&&width&&height){var fObj=document.getElementById(objID);var fEmb=document.getElementById(objID+'-embed');if(fObj&&fObj.style){fObj.style.width=width+'px';fObj.style.height=height+'px';}
if(fEmb!=null){fEmb.width=width;fEmb.height=height;if(fEmb.style){fEmb.style.width=width+'px';fEmb.style.height=height+'px';}}}};
adobe.dom.createStyleSheet=function(htmlheadelement,href){if(htmlheadelement===undefined||htmlheadelement.nodeType!=1){throw(new TypeError("argument is not an element"));}
if(htmlheadelement.nodeName!="HEAD"){throw(new TypeError("element argument must be a <head> tag"));}
if(href===undefined){throw(new TypeError("argument is undefined"));}
var sheet=null;if(document.createStyleSheet){document.createStyleSheet(href);sheet=document.styleSheets[document.styleSheets.length-1];}else if(document.createElement){sheet=document.createElement("link");sheet.setAttribute("rel","stylesheet");sheet.setAttribute("href",href);htmlheadelement.appendChild(sheet);}
return sheet;};adobe.dom.getStyleSheetsByProperty=function(prop){var sheets=[];for(var i=0,l=window.document.styleSheets.length;i<l;i++){if(window.document.styleSheets[i].hasOwnProperty(prop)){sheets.push(window.document.styleSheets[i]);}}
return sheets;};adobe.dom.disableStyleSheet=function(sheet){if(sheet===undefined||sheet===null){return sheet;}
sheet.disabled=true;return sheet;};adobe.dom.enableStyleSheet=function(sheet){if(sheet===undefined||sheet===null){return sheet;}
sheet.disabled=false;if(sheet.removeAttribute){sheet.removeAttribute("disabled");}
return sheet;};adobe.dom.CSSStyleSheet=function(href){this.setHref(href);this.disabled=false;this.element=null;};adobe.dom.CSSStyleSheet.prototype={setHref:function(href){this.href=href.toString();},enable:function(htmlheadelement){if(this.element==null){this.element=adobe.dom.createStyleSheet(htmlheadelement,this.href);}else{adobe.dom.enableStyleSheet(this.element);}
this.disabled=false;},disable:function(){adobe.dom.disableStyleSheet(this.element);this.disabled=true;},toString:function(){return"[Object adobe.dom.StyleSheet]"}};
adobe.dom.FaaS=function(target)
{$.ajaxSetup({async:false});this.target=target;this.targetID='#'+this.target;this.targetObj=$('#'+this.target);this.countryChange=false;this.industryChange=false;this.q_Obj=new Object();this.m_Camp=new Array();this.multiCampaignsQuestionId='';this.wsFaaSServerUrl=new Object();this.wsformTemplateTag=new Object();this.wsFaaSSourceSystem=new Object();this.wsSourceSystemQuestionId=new Object();this.wsFormTypeQuestionId=new Object();this.wsFormSubtypeQuestionId=new Object();this.wsProductInterestSKUQuestionId=new Object();this.wsInternalCampaignIdQuestionId=new Object();this.wsQuestionTypeHidden=new Object();this.wsQuestionTypeHiddenList=new Object();this.selectedFormTemplate=new Object();this.wsParameters=new Object();this.formDetailData=new Object();this.templateOptions=new Array();this.formSubtypeString=new Object();return this;};adobe.dom.FaaS.prototype={faasCountryChange:function()
{window.countryChange=$.proxy(this.countryChange,this);$(this.targetID+' div.14 select').each(function()
{if($(this).length>0&&typeof _faas_country_onChange_state=='function')
{$(this).selectBox().unbind('change');$(this).selectBox().change(function()
{_faas_country_onChange_state();if(typeof _faas_country_onChange_state_required=='function'){_faas_country_onChange_state_required();}
if(typeof _faas_country_onChange_zipcode_required=='function'){_faas_country_onChange_zipcode_required();}
if(typeof _faas_country_onChange_southKoreaPermission1=='function'){_faas_country_onChange_southKoreaPermission1();}
if(typeof _faas_country_onChange_southKoreaPermission2=='function'){_faas_country_onChange_southKoreaPermission2();}
if(typeof _faas_country_onChange_southKoreaPermission3=='function'){_faas_country_onChange_southKoreaPermission3();}
if(typeof _faas_country_onChange_southKoreaPermission4=='function'){_faas_country_onChange_southKoreaPermission4();}
if(typeof _faas_country_onChange_southKoreaPermission1_required=='function'){_faas_country_onChange_southKoreaPermission1_required();}
if(typeof _faas_country_onChange_southKoreaPermission2_required=='function'){_faas_country_onChange_southKoreaPermission2_required();}
if(typeof _faas_country_onChange_southKoreaPermission4_required=='function'){_faas_country_onChange_southKoreaPermission4_required();}
if(typeof _faas_country_onChange_salutation=='function'){_faas_country_onChange_salutation();}
if(typeof _faas_country_onChange_disclaimer=='function'){_faas_country_onChange_disclaimer();}
if(typeof _faas_country_onChange_buName=='function'){_faas_country_onChange_buName();}
if(typeof _faas_country_onChange_isdCode=='function'){_faas_country_onChange_isdCode();}
if(typeof _faas_okToSms_onChange_mobileNumber_required=='function'){_faas_okToSms_onChange_mobileNumber_required();}
window.countryChange=true;});}});},countryChangeCallback:function()
{if(window.countryChange)
{window.faasSelectBox=$.proxy(this.faasSelectBox,this);window.targetID=this.targetID;$(window.targetID+' div.15 select').selectBox('destroy');window.faasSelectBox(window.targetID+' div.15 select',true);}},faasIndustryChange:function()
{window.industryChange=$.proxy(this.industryChange,this);$(this.targetID+' div.18 select').each(function()
{if($(this).length>0&&typeof _faas_industry_onChange_numUnits=='function')
{$(this).selectBox().unbind('change');$(this).selectBox().change(function()
{_faas_industry_onChange_numUnits();window.industryChange=true;});}});},industryChangeCallback:function()
{if(window.industryChange)
{window.faasSelectBox=$.proxy(this.faasSelectBox,this);window.targetID=this.targetID;$(window.targetID+' div.23 select').selectBox('destroy');window.faasSelectBox(window.targetID+' div.23 select',false,true);}},faasSelectBox:function(target,country,industry)
{var tar=(target!=null)?target:this.targetID+' div.row select';window.faasCountryChange=$.proxy(this.faasCountryChange,this);window.faasIndustryChange=$.proxy(this.faasIndustryChange,this);$(tar).each(function()
{var selectWidth=$(this).parent().width();$(this).addClass('selectBox-Blue').css('width',selectWidth);adobe.ui.selectBox($(this));if(country)
{window.faasCountryChange();_faas_country_onChange_state_required();}
if(industry)
{window.faasIndustryChange();}});},formReflow:function()
{var dispatcher=adobe.vrbl("reflowDispatcher");if(dispatcher)
{if(dispatcher.hasLayoutEvent("phone")&&dispatcher.getLayoutEvent("phone").active)
{$(this.targetID+' LayoutSlimGrid-1 input, '+this.targetID+' LayoutSlimGrid-1-2 input').each(function()
{$(this).css('maxWidth','349px');});}
else
{$(this.targetID+' LayoutSlimGrid-1 input, '+this.targetID+' LayoutSlimGrid-1-2 input').each(function()
{$(this).css('maxWidth','');});}}},formStyle:function()
{$(this.targetID).css('width','100%');$(this.targetID+' div.row').each(function()
{$(this).addClass('LayoutRow LayoutBreakAfter');});$(this.targetID+' p.note').each(function()
{$(this).addClass('LayoutRow LayoutBreakAfter LayoutCellSides');});$(this.targetID+' div.dropdownlist label, '+this.targetID+' div.textfield label, '+this.targetID+' div.textarea label').each(function()
{$(this).wrap('<div class="LayoutGrid-1 LayoutSlimGrid-1-2"><div class="LayoutCellLeft LayoutSmallRow"></div></div>');});$(this.targetID+' div.dropdownlist input[type=text], '+this.targetID+' div.dropdownlist select, '+this.targetID+' div.dropdownlist textarea, '+this.targetID+' div.textfield input[type=text], '+this.targetID+' div.textfield select, '+this.targetID+' div.textfield textarea, '+this.targetID+' div.textarea textarea').each(function()
{$(this).wrap('<div class="LayoutGrid-2-3 LayoutSlimGrid-1-2" />');});$(this.targetID+' div.checkbox label, '+this.targetID+' div.checkboxlist label').each(function()
{$(this).wrap('<div class="LayoutGrid-2-3 LayoutSlimGrid-2"><div class="LayoutCellRight LayoutSmallRow"></div></div>');});$(this.targetID+' div.row input[type=text], '+this.targetID+' div.row textarea').each(function()
{$(this).addClass('FormInputFull LayoutSmallRow');});$(this.targetID+' div.row input[type=checkbox]').each(function()
{$(this).addClass('LayoutGutter').wrap('<div class="LayoutGrid-1 LayoutSlimGrid-1"><div class="LayoutBreakAfter"><div class="LayoutRight LayoutSmallRow"></div></div></div>');});$(this.targetID+' div.legal h1').each(function()
{$(this).addClass('LayoutCellSides');});$(this.targetID+' div.row input[type=submit]').each(function()
{$(this).addClass('Button ButtonYellow').wrap('<div class="LayoutGrid-1-3 LayoutSlimGrid-1-2 LayoutH"><div class="LayoutHItemRight"></div></div>');});$(this.targetID+' div.errorSummary').wrap('<div class="LayoutHidden LayoutZero" />');$(this.targetID+' .errorMessage, '+this.targetID+' span.required').each(function()
{$(this).addClass('FormError');});$(this.targetID+' .errorMessage').each(function()
{$(this).addClass('LayoutSmallRow TextSmall LayoutCellSides').parent().addClass('LayoutGrid-4 LayoutSlimGrid-1-2');});this.faasSelectBox();this.faasCountryChange();this.faasIndustryChange();this.formReflow();$(this.targetID+' .legalnotice').each(function()
{$(this).addClass('LayoutRow LayoutCellSides').wrap('<div class="LayoutGrid-1-4 LayoutSlimGrid-1-2" />');});$(this.targetID+' .clear-both').each(function()
{$(this).remove();});window.formReflow=$.proxy(this.formReflow,this);$(document).bind("adobe.reflow.LayoutChange",function()
{window.formReflow();});},formQuestions:function(question,value)
{var tempObj=new Object();tempObj[question]=value;this.q_Obj=$.extend(this.q_Obj,tempObj);},setMultipleCampaignsQuestionId:function(multiplecampaign)
{this.multiCampaignsQuestionId=multiplecampaign;},setMultipleCampaigns:function(campaignObject)
{this.m_Camp.push(campaignObject);},formInit:function(id,l,d)
{l=(l!=null)?l:"en_us";d=(d!=null)?d:"http://www.adobe.com";var faasScript=this.wsFaaSServerUrl+"faas/service/jquery.faas-3.0.0.js",hostProtocol=(document.location.protocol=='https:'?'https':'http'),pi=faasScript.indexOf('://');if(pi>=0)
{faasScript=hostProtocol+faasScript.substring(pi);}
else
{faasScript=hostProtocol+'://'+faasScript;}
obj=this.targetObj;var pi=d.indexOf('http');if(pi<0)
{d=document.location.protocol+'//'+window.location.host+d;if(!$.string(d).endsWith('.html')||!$.string(d).endsWith('.htm'))
{d+='.html';}}
window.formStyle=$.proxy(this.formStyle,this);window.countryChangeCallback=$.proxy(this.countryChangeCallback,this);window.industryChangeCallback=$.proxy(this.industryChangeCallback,this);window.getFormSubtypeName=$.proxy(this.getFormSubtypeName,this);window.formQuestions=this.q_Obj;window.multipleCampaignsQuestionId=this.multiCampaignsQuestionId;window.multipleCampaign=this.m_Camp;var q={},q_key=window.multipleCampaignsQuestionId;q[q_key]={"c":window.multipleCampaign};adobe.http.getScript(faasScript).done(function()
{obj.faas({id:id,l:l,d:d,ar:true,test:false,q:q,pc:{1:'js',2:'faas_submission',3:'sfdc',4:'demandbase'},p:{js:window.formQuestions,faas_submission:{},sfdc:{},demandbase:{}},as:false,o:{},e:{formRenderedCallback:function(data,ajax)
{window.formStyle();},afterSubmitCallback:function(data)
{if(data.data.destination.indexOf("?")==-1)
{data.data.destination+="?form_subtype="+window.getFormSubtypeName();}
else
{data.data.destination+="&form_subtype="+window.getFormSubtypeName();}},afterEventFinishedCallback:function()
{window.countryChangeCallback();window.industryChangeCallback();}}});});},setFaaSServerUrl:function(url)
{var newUrl;if(!$.string(url).endsWith('/')){var str1=url;newUrl=str1.concat("/");}else{newUrl=url;}
this.wsFaaSServerUrl=newUrl;},setFormTemplateTag:function(tag)
{this.wsformTemplateTag=tag;},setFormTypeQuestionId:function(qId)
{this.wsFormTypeQuestionId=qId;},setFormSubtypeQuestionId:function(qId)
{this.wsFormSubtypeQuestionId=qId;},setSourceSystemQuestionId:function(qId)
{this.wsSourceSystemQuestionId=qId;},setProductInterestSKUQuestionId:function(qId)
{this.wsProductInterestSKUQuestionId=qId;},setInternalCampaignIdQuestionId:function(qId)
{this.wsInternalCampaignIdQuestionId=qId;},setQuestionTypeHidden:function(q)
{this.wsQuestionTypeHidden=q;},setQuestionTypeHiddenList:function(q)
{this.wsQuestionTypeHiddenList=q;},setSelectedFormTemplate:function(t)
{this.selectedFormTemplate=t;},setWSParameters:function(p)
{this.wsParameters=p;},setFormDetailData:function(d)
{this.formDetailData=d;},setSourceSystem:function(s)
{this.wsFaaSSourceSystem=s;},setFormSubtypeString:function(s){this.formSubtypeString=s;},preloadFormTemplates:function()
{var wsUrl=this.wsFaaSServerUrl+'faas/api/form/?'+this.wsParameters,hostProtocol=(document.location.protocol=='https:'?'https':'http'),pi=wsUrl.indexOf('://');if(pi>=0)
{wsUrl=hostProtocol+wsUrl.substring(pi);}
else
{wsUrl=hostProtocol+'://'+wsUrl;}
window.templateOpt=this.templateOptions;$.getJSON(wsUrl,{tags:this.wsformTemplateTag,active:1},function(data)
{for(var i=0;i<data.length;i++)
{window.templateOpt.push({"value":data[i].id,"text":data[i].name});}}).complete(function()
{});},populateFormData:function(src)
{window.selectedFormTemplate=this.selectedFormTemplate;if(window.selectedFormTemplate>0)
{window.populateFormType=$.proxy(this.populateFormType,this);window.populateFormSubtype=$.proxy(this.populateFormSubtype,this);window.populateProductInterestSKU=$.proxy(this.populateProductInterestSKU,this);window.populateInternalCampaignId=$.proxy(this.populateInternalCampaignId,this);window.populateFormType(src);window.populateFormSubtype(src);window.populateProductInterestSKU(src);window.populateInternalCampaignId(src);}},retrieveFormData:function(formId,src)
{if(formId<=0||formId=='SELECT')
{return;}
window.populateFormData=$.proxy(this.populateFormData,this);window.setSelectedFormTemplate=$.proxy(this.setSelectedFormTemplate,this);window.setFormDetailData=$.proxy(this.setFormDetailData,this);window.setSelectedFormTemplate(formId);var wsformUrl=this.wsFaaSServerUrl,wsUrl=wsformUrl+'faas/api/form/'+formId+'?'+this.wsParameters,hostProtocol=(document.location.protocol=='https:'?'https':'http'),pi=wsUrl.indexOf('://');if(pi>=0)
{wsUrl=hostProtocol+wsUrl.substring(pi);}
else
{wsUrl=hostProtocol+'://'+wsUrl;}
$.getJSON(wsUrl,{tags:this.wsformTemplateTag,active:1},function(data)
{window.setFormDetailData(data);if(src)
{window.populateFormData(src);}}).complete(function()
{}).success(function()
{});},getFormSubtypeId:function(){if(!this.formSubtypeString)
return;var i=(this.formSubtypeString).indexOf('/');if(i>0){return(this.formSubtypeString).substring(0,i);}},getFormSubtypeName:function(){if(!this.formSubtypeString)
return;var i=(this.formSubtypeString).indexOf('/');if(i>0){return(this.formSubtypeString).substring(i+1);}},populateFormType:function(field)
{var options=new Array();var showFormType=false;for(var i=0;i<this.formDetailData.formQuestions.length;i++)
{var curQuestionId=this.formDetailData.formQuestions[i].question.id,curQuestion=this.formDetailData.formQuestions[i].question;if(curQuestionId==this.wsFormTypeQuestionId&&curQuestion.question_type_id==this.wsQuestionTypeHiddenList)
{var questionCollection=curQuestion.collection;for(var j=0;j<questionCollection.collectionValues.length;j++)
{showFormType=true;options.push({"value":questionCollection.collectionValues[j].id,"text":questionCollection.collectionValues[j].displayText.phrase});}}}
var panel=field.findParentByType('tabpanel'),formType=panel.find('name','./formType')[0];if(showFormType)
{formType.setValue();formType.show();formType.setOptions(options);formType.doLayout();}
else
{options.push({"value":"NA","text":"NA"});formType.setOptions(options);formType.setValue(["NA"]);}},populateFormSubtype:function(field)
{var options=new Array(),showFormSubtype=false;for(var i=0;i<this.formDetailData.formQuestions.length;i++)
{var curQuestionId=this.formDetailData.formQuestions[i].question.id,curQuestion=this.formDetailData.formQuestions[i].question;if(curQuestionId==this.wsFormSubtypeQuestionId&&curQuestion.question_type_id==this.wsQuestionTypeHiddenList)
{var questionCollection=curQuestion.collection;for(var j=0;j<questionCollection.collectionValues.length;j++)
{showFormSubtype=true;options.push({"value":questionCollection.collectionValues[j].id+'/'+questionCollection.collectionValues[j].displayText.phrase,"text":questionCollection.collectionValues[j].displayText.phrase});}}}
var panel=field.findParentByType('tabpanel'),formSubtype=panel.find('name','./formSubtype')[0];if(showFormSubtype)
{formSubtype.setValue();formSubtype.show();formSubtype.setOptions(options);formSubtype.doLayout();}
else
{options.push({"value":"NA","text":"NA"});formSubtype.setOptions(options);formSubtype.setValue(["NA"]);}},populateProductInterestSKU:function(field)
{var options=new Array(),showProductInterestSKU=false;for(var i=0;i<this.formDetailData.formQuestions.length;i++)
{var curQuestionId=this.formDetailData.formQuestions[i].question.id,curQuestion=this.formDetailData.formQuestions[i].question;if(curQuestionId==this.wsProductInterestSKUQuestionId&&curQuestion.question_type_id==this.wsQuestionTypeHiddenList)
{var questionCollection=curQuestion.collection;for(var j=0;j<questionCollection.collectionValues.length;j++)
{showProductInterestSKU=true;options.push({"value":questionCollection.collectionValues[j].id,"text":questionCollection.collectionValues[j].displayText.phrase});}}}
var panel=field.findParentByType('tabpanel'),productInterestSKU=panel.find('name','./sku')[0];if(showProductInterestSKU)
{productInterestSKU.setValue();productInterestSKU.show();productInterestSKU.setOptions(options);productInterestSKU.doLayout();}
else
{options.push({"value":"NA","text":"NA"});productInterestSKU.setOptions(options);productInterestSKU.setValue(["NA"]);}},populateInternalCampaignId:function(field)
{var options=new Array(),showInternalCampaignId=false,showMultipleInternalCampaignId=false;for(var i=0;i<this.formDetailData.formQuestions.length;i++)
{var curQuestionId=this.formDetailData.formQuestions[i].question.id,curQuestion=this.formDetailData.formQuestions[i].question;if(curQuestionId=="103"&&curQuestion.question_type_id=="10"){showMultipleInternalCampaignId=true;showInternalCampaignId=false;break;}
if(curQuestionId==this.wsInternalCampaignIdQuestionId&&curQuestion.question_type_id==this.wsQuestionTypeHidden)
{showInternalCampaignId=true;}}
var panel=field.findParentByType('tabpanel'),internalCampaignId=panel.find('name','./intCampaignId')[0],multipleInternalCampaignId=panel.find('name','./multiinternalCampaignId')[0];if(showInternalCampaignId)
{internalCampaignId.setValue();internalCampaignId.show();}
else
{internalCampaignId.setValue("999999999999999999");}
if(showMultipleInternalCampaignId){multipleInternalCampaignId.show();}else{multipleInternalCampaignId.hide();}},getTemplateOptions:function()
{return this.templateOptions;},execute:function()
{}};
adobe.dom.browser=function()
{var html=$('html');function isMobile(device)
{if(navigator.userAgent.toLowerCase().indexOf(device)>-1)
{html.addClass(device);}}
isMobile('android');isMobile('iphone');isMobile('ipad');isMobile('kindle');$.each($.browser,function(i)
{if(i=='mozilla'||i=='opera')
{html.addClass(i);}
else if(i=='msie')
{html.addClass(i+Math.round($.browser.version));}
else if(i=='webkit'||i=='safari')
{if(navigator.userAgent.toLowerCase().indexOf('chrome')>-1)
{html.addClass('chrome');}
else
{html.addClass('safari');}}});};
adobe.dom.param=function(param)
{var query=window.location.search,sep="&",hash='';if(query.indexOf(param)!=-1)
{$('a').each(function()
{var link=$(this).attr('href');if(link!=undefined)
{if(link.indexOf("?")==-1)
{sep="?";}
if(link.indexOf("#")!=-1)
{hash=link.split("#");link=hash[0];hash="#"+hash[1];}
$(this).attr('href',link+sep+param+hash);}});}};
adobe.fn.ApexPageFilter=function(e)
{var menuBarID="#"+e,menuBar=$(menuBarID),menuControlID="MenuControl",menuControl=$('#'+menuControlID);if(menuControl[0]==null)
{$('<div/>',{id:menuControlID}).appendTo('body');menuControl=$('#'+menuControlID);}
var menuDropWidth=$(menuBarID+' .MenuDrop').width();var menuPanelWidth=$(menuBarID+' .MenuDropPanel').width();var menuWidth;if(menuDropWidth>menuPanelWidth)
{menuWidth=menuDropWidth+1+"px";}
else
{menuWidth=menuPanelWidth+1+"px";}
$(menuBarID+' .MenuDrop').css('width','230px');$(menuBarID+' .MenuDropPanel').css('width','230px');var menuCheckHover=function(target)
{if(menuControl.hasClass('MenuClose'))
{target.find("div[class*='MenuDrop']").removeClass("MenuDropHover").unbind('mouseenter mouseleave');target.find("div[class='MenuDrop']").addClass("MenuDropOpen");}
else
{target.find("div[class*='MenuDrop']").removeClass("MenuDropOpen");target.find("div[class='MenuDrop']").hover(function()
{$(this).addClass("MenuDropHover");},function()
{$(this).removeClass("MenuDropHover");});}};menuCheckHover(menuBar);menuBar.find("div[class*='MenuDropName']").bind('click',function()
{var menuPanel=menuBar.find("div[class*='MenuDropPanel']");if(menuControl.hasClass('MenuClose'))
{$('.MenuDropPanel').fadeOut('fast').removeClass('MenuShow');menuControl.removeClass('MenuClose');}
if(menuPanel.hasClass('MenuShow'))
{menuPanel.fadeOut('fast').removeClass('MenuShow');menuControl.removeClass('MenuClose');menuCheckHover(menuBar);}
else
{menuPanel.show(000).addClass('MenuShow');menuControl.addClass('MenuClose');menuCheckHover(menuBar);menuControl.unbind('click');menuControl.bind('click',function()
{$(menuBarID+' .MenuDropPanel').fadeOut('fast').removeClass('MenuShow');menuControl.removeClass('MenuClose');menuCheckHover(menuBar);});$('body').unbind('keyup');$('body').bind('keyup',function(event)
{if(event.keyCode=='27')
{event.preventDefault();$(menuBarID+' .MenuDropPanel').fadeOut('fast').removeClass('MenuShow');menuControl.removeClass('MenuClose');menuCheckHover(menuBar);}});}
return false;});var menuDropItem=new Array();$(menuBarID+' .MenuDropItem').each(function(i)
{$(this).attr('id',e+'MenuDropItem'+[i]);menuDropItem[i]='#'+$(this).attr('id');if($(menuBarID+' .MenuDropItemSelected').size()==0)
{$(menuDropItem[0]).addClass('MenuDropItemSelected');}
$(menuDropItem[i]).bind('click',function()
{$(menuBarID+' .MenuDropItem').removeClass('MenuDropItemSelected');$(this).addClass('MenuDropItemSelected');});});};
adobe.fn.ElementLinkTextDisplaySequencer=function(arrElementsID,arrLinkTexts,strLinkContainerID,strDefaultVisibleElID)
{if(!$.isArray(arrElementsID)||!$.isArray(arrLinkTexts)||!(isString(strLinkContainerID))||!(isString(strLinkContainerID))){throw new Error("Invalid argument/s provided to ElementLinkTextDisplaySequence method");return;}
else{if(!(arrElementsID.length>=2)||!(arrElementsID.length>=2)){throw new Error("A minimum of 2 element and 2 link IDs required");return;}}
var objDisplays={};var strLinkContainerID=strLinkContainerID;var strDefaultVisibleEl=strDefaultVisibleEl;var defaultDisplayID;for(var i=1;i<=arrElementsID.length;i++){objDisplays["objDisplayID"+i]={};objDisplays["objDisplayID"+i].id="objDisplayID"+i;objDisplays["objDisplayID"+i].elementID=String(arrElementsID[i-1]);objDisplays["objDisplayID"+i].linkText=getDecoratedLink(arrLinkTexts[i-1],objDisplays["objDisplayID"+i].elementID);objDisplays["objDisplayID"+i].linkID=getLinkID(objDisplays["objDisplayID"+i].linkText);objDisplays["objDisplayID"+i].nextObjDisplayID=(i==arrElementsID.length)?"objDisplayID"+1:"objDisplayID"+(i+1);$("#"+strLinkContainerID).append(objDisplays["objDisplayID"+i].linkText);$("#"+objDisplays["objDisplayID"+i].linkID).bind('click',function(e)
{e.preventDefault();e.stopPropagation();display(objDisplays[getObjDisplayID(this.id,"linkID")].nextObjDisplayID);});}
defaultDisplayID=getObjDisplayID(strDefaultVisibleElID,"elementID");display(defaultDisplayID);function display(tID){for(var key in objDisplays){var obj=objDisplays[key];(obj.id==tID)?toggle($('#'+obj.elementID),true):toggle($('#'+obj.elementID),false);(obj.id==tID)?toggle($('#'+obj.linkID).parent(),true):toggle($('#'+obj.linkID).parent(),false);}}
function toggle($Obj,bool){(bool==true)?$Obj.attr("aria-hidden","false"):$Obj.attr("aria-hidden","true");$Obj.toggle(bool);}
function getObjDisplayID(value,prop){var tid=null;for(var key in objDisplays){var obj=objDisplays[key];if(obj.hasOwnProperty(prop)){if(obj[prop]==value){tid=obj.id;break;}}}
return tid;}
function getDecoratedLink(txt,id){var el=$('<span>'+String(txt)+'</span>');if($('a',el).length==0){el.html("<a>"+el.text()+"</a>");$('a:first',el).attr('href','#');$('a:first',el).attr('id',id+'_mappedLink');}
if(!$('a:first',el).attr('href')){$('a:first',el).attr('href','#');}
if(!$('a:first',el).attr('id')){$('a:first',el).attr('id',id+'_mappedLink');}
return el;}
function getLinkID(el){return $('a',el).attr('id');}
function isString(str){return(typeof strLinkContainerID==="string");}};
adobe.fn.buildTreeList=function(selectorStr){if(selectorStr.length<1){return;}
var myElement=$(selectorStr);if(myElement.length<1){return;}
myElement.treeList();};
adobe.fn.changeRegionFooter=function(regioncode){if($.string(regioncode).startsWith('be_')){$.cookies.set('international',regioncode,{domain:'adobe.com',hoursToLive:8760});$.cookies.set('storeregion','be',{domain:'adobe.com',hoursToLive:8760});}
else if($.string(regioncode).startsWith('ca')){$.cookies.set('international',regioncode,{domain:'adobe.com',hoursToLive:8760});$.cookies.set('storeregion','ca',{domain:'adobe.com',hoursToLive:8760});}
else if($.string(regioncode).startsWith('eeur')){$.cookies.set('international',regioncode,{domain:'adobe.com',hoursToLive:8760});$.cookies.set('storeregion','eu',{domain:'adobe.com',hoursToLive:8760});}
else if($.string(regioncode).startsWith('hk_')){$.cookies.set('international',regioncode,{domain:'adobe.com',hoursToLive:8760});$.cookies.set('storeregion','cn',{domain:'adobe.com',hoursToLive:8760});}
else if($.string(regioncode).startsWith('lu_')){$.cookies.set('international',regioncode,{domain:'adobe.com',hoursToLive:8760});$.cookies.set('storeregion','lu',{domain:'adobe.com',hoursToLive:8760});}
else if($.string(regioncode).startsWith('uk')){$.cookies.set('international',regioncode,{domain:'adobe.com',hoursToLive:8760});$.cookies.set('storeregion','gb',{domain:'adobe.com',hoursToLive:8760});}
else{$.cookies.set('international',regioncode,{domain:'adobe.com',hoursToLive:8760});$.cookies.set('storeregion',regioncode,{domain:'adobe.com',hoursToLive:8760});}
var currURL=window.location.pathname+window.location.search;if($.string(currURL).startsWith('/content/dotcom/')){currURL=currURL.replace('/content/dotcom/','/');}
else if($.string(currURL).startsWith('/content/help/')){currURL=currURL.replace('/content/help/','/');}
if($.string(currURL).startsWith('/en/')){currURL=currURL.replace('/en/','/');}
var geoArray=["africa","ap","at","au","be_en","be_fr","be_nl","bg","br","ca","ca_fr","ch_de","ch_fr","ch_it","cn","cz","de","dk","eeurope","ee","en","es","fi","fr","hk_en","hk_zh","hr","hu","ie","il_en","il_he","in","it","jp","kr","la","lt","lu_de","lu_en","lu_fr","lv","mena_ar","mena_en","mena_fr","mx","nl","no","nz","pl","pt","ro","ru","si","se","sea","sk","tr","tw","ua","uk"];$.each(geoArray,function(){if($.string(currURL).startsWith('/'+this+'/')){currURL=currURL.replace('/'+this+'/','/');return false;}});if(regioncode!='us'){newURL="/"+regioncode+currURL;homeURL="/"+regioncode+"/";}
else{newURL=currURL;homeURL="/";}
$.ajax({url:newURL,type:'HEAD',error:function(){window.location=homeURL;},success:function(){window.location=newURL;}});};
adobe.fn.colorBox=function(target)
{target=$(target);var cdnPrefix=adobe.http.cdnprefix();if($(window).width()>640)
{$.getScript(cdnPrefix+'/include/script/jquery/plugins/OnDemand/jquery.colorbox.js',function(data,textStatus)
{if(textStatus=="success")
{target.colorbox();}});}
else
{target.click(function()
{return true;});}};
adobe.fn.cookies=function(target,method,cookie,cookieValue,domain,path,expire,secure)
{cookieValue=cookieValue||'';var status=null,traditionalCookie=null,targetDiv=$('#'+target),body=$('body'),special=target+'SpecialCookie',specialObj=$('#'+special),debug=false;if(specialObj.length==0)
{$('<div id="'+special+'" class="LayoutHidden LayoutZero">').appendTo(body);specialObj=$('#'+special);if(debug){console.log("'special' object not found, creating it: "+special+": "+specialObj);}}
if(method==null||method==''||cookie==null||cookie=='')
{if(debug){console.log("'method' or 'cookie' was empty. "+method+" "+cookie);}
return;}
switch(method)
{case'get':if(debug){console.log("method = get");}
adobeGetCookie();break;case'set':if(debug){console.log("method = set");}
adobeSetCookie();break;case'delete':if(debug){console.log("method = delete");}
adobeDelCookie();break;}
function setExpire()
{if(debug){console.log("running setExpire()");}
var today=new Date(),year=today.getFullYear()+30,month=today.getMonth(),date=today.getDate();return new Date(year,month,date);}
function showButtons(status)
{if(status===true||status==null||traditionalCookie==null)
{targetDiv.find('.CookieValid').hide();targetDiv.find('.CookieInvalid').show();targetDiv.find('.CookieOptIn').hide();targetDiv.find('.CookieOptOut').show();targetDiv.find('.CookieValue').html('');}
else
{targetDiv.find('.CookieValid').show();targetDiv.find('.CookieInvalid').hide();targetDiv.find('.CookieOptIn').show();targetDiv.find('.CookieOptOut').hide();targetDiv.find('.CookieValue').html(status);}}
function cookieType(thisCookie)
{var type,imageRegex=/([^\s]+(?=\.(jpg|jpeg|gif|png))\.\2)/gm;if(thisCookie.match(imageRegex)!=null)
{type="image";}
else if(thisCookie.match("^http")!=null)
{type="address";}
else
{type="cookie";}
if(debug){console.log("cookieType found type = "+type);}
return type;}
function adobeGetCookie(cookieItem)
{cookieItem=(cookieItem!=null)?[cookieItem]:cookie;if(debug){console.log("adobeGetCookie running with item(s) = "+cookieItem);}
$.each(cookieItem,function(index,value)
{if(debug){console.log("each cookie value = "+value);}
var findCookieType=cookieType(value);if(findCookieType=="cookie")
{status=$.cookies.get(value);traditionalCookie=1;showButtons(status);}});if(traditionalCookie==null)
{if(debug){console.log("No traditional cookies found, hiding buttons");}
showButtons(status);}
if(debug){console.log("running showButtons(status). status = "+status);}}
function adobeTestCookie(cookieItem)
{if($.cookies.test())
{if(debug){console.log("$.cookies.test() passed "+$.cookies.test());}
var cookieOptions={domain:(domain!=null&&domain!='')?domain:document.domain,path:(path!=null&&path!='')?path:'/',expiresAt:(expire!=null&&expire!='')?new Date(expire):setExpire(),secure:(secure&&secure!='')?true:false};if(debug){console.log("setting the cookie: "+cookieItem);}
$.cookies.set(cookieItem,cookieValue,cookieOptions);adobeGetCookie(cookieItem);}
else
{var noCookies=$('#'+target+'NoCookies');status="There was a problem testing cookies. Either you've disabled this ability, or your browser doesn't seem to support cookies. Please enable cookies and refresh your browser, or update your browser.";if(noCookies.length==0)
{$('<div id="'+noCookies+'" class="LayoutRow LayoutHItem TextWarning">').appendTo(targetDiv).html(status);}}}
function adobeSetCookie()
{if(debug){console.log("cookie(s) being SET = "+cookie);}
$.each(cookie,function(index,value)
{if(debug){console.log("cookie value = "+value);}
var findCookieType=cookieType(value);if(findCookieType!='cookie')
{if(findCookieType=="image")
{if(debug){console.log("Found an 'image' = "+value);}
window.open(value,'_blank');}
else if(findCookieType=="address")
{if(debug){console.log("Found an 'address', using $.get() to grab it = "+value);}
window.open(value,'_blank');}
if(traditionalCookie==null)
{$('#'+target+'-CookiesSet').show();}}
else
{if(debug){console.log("Found a traditional 'cookie', running adobeTestCookie");}
adobeTestCookie(value);}});}
function adobeDelCookie()
{var cookieOptions={domain:(domain!=null&&domain!='')?domain:document.domain,path:(path!=null&&path!='')?path:'/'};$.each(cookie,function(index,value)
{if(debug){console.log("cookie value = "+value);}
var findCookieType=cookieType(value);if(findCookieType=="image")
{specialObj.empty();if(debug){console.log(value+" looked like an 'image' type. Removing it from the DOM. Checking 'specialObj's html: "+specialObj.html());}}
else if(findCookieType=="address")
{if(debug){console.log("Cookie is a URL. Not much we can do here except hope this URL is an actual API to delete the cookie.");}}
else
{$.cookies.del(value,cookieOptions);if(debug){console.log("cookie being DELETED = "+value);}
adobeGetCookie(value);}});}};
var hash=location.hash,deepLinkMap=new Object();if(hash!=null&&hash!='')
{$(function($)
{var deepLink=deepLinkMap[hash];if(deepLink!=undefined&&deepLink!='')
{var el=$(hash),elLink=el.find('a[name='+deepLinkMap[hash]+']');if(el.length>0&&elLink.length>0)
{elLink.click();}}});};
adobe.fn.embedMediaPlayer=(function($){var defaults={defaultType:"flash"};function getDefaults(){if(typeof defaults.autoPlay=="undefined"){defaults.autoPlay=swfobject.getQueryParamValue('autoPlay')||"";}
if(typeof defaults.allowFullScreen=="undefined"){defaults.allowFullScreen=swfobject.getQueryParamValue('allowFullScreen')||"";}
return defaults;}
function getDeepLink(id){var hash=location.hash;var chapterIdDeepLink='';var out={};if(hash!=null&&hash!=''){var hashArray=hash.split("_split_");if(hashArray!=null&&hashArray.length>=2){if(hashArray[0]=='#'+id){chapterIdDeepLink=hashArray[hashArray.length-1];out.chapterID=chapterIdDeepLink;}}}
return out;}
var supportsTouch=Boolean("ontouchstart"in window),expressInstall="/include/flash/expressInstall.swf",flashVersion="10.1";return(function(id,options){if(!id){return;}
options=$.extend({},getDefaults(),options);if(!supportsTouch&&options.defaultType=="flash"){if(options.flash){swfobject.embedSWF(options.flash,id,options.width,options.height,flashVersion,expressInstall,$.extend(options.flashVars,getDeepLink(id)),options.flashParams,options.flashAttrs);}}else{$("#"+id).find(".FlashAltCanvas").remove();var bach_opts={width:"100%"};if(options.height){bach_opts.height=String(options.height);}
if('msgSrcError'in options){bach_opts.msgSrcError=String(options.msgSrcError);}
if('msgUIError'in options){bach_opts.msgUIError=String(options.msgUIError);}
$(options.playlistThis).removeClass("LayoutHidden").bach_player(bach_opts);}});})(jQuery);
adobe.fn.embedVideo=function(srcs,id,attrs){function setAttr(video,user_attrs,config_attr){if(user_attrs[config_attr.attr]===undefined){return;}
var user_attr_value=user_attrs[config_attr.attr];if(user_attr_value===undefined){return;}
if(config_attr.setEvent===undefined){video.setAttribute(String(config_attr.attr),user_attr_value);return;}
if(user_attr_value==config_attr.value||config_attr.value=="*"){if(config_attr.value=="*"){config_attr.setValue=user_attr_value;}else{video.setAttribute(String(config_attr.attr),config_attr.value);}
var set_func=function(event){var video=event.target;if(config_attr.setValue!==undefined){this[config_attr.setAttr]=config_attr.setValue;}
if(typeof config_attr.setFunction=="function"){config_attr.setFunction(video);}
jQuery(video).unbind(config_attr.setEvent,set_func);};jQuery(video).bind(config_attr.setEvent,set_func);}}
function replaceNode(replacement,current){replacement.style.visibility="visible";return current.parentNode.replaceChild(replacement,current);}
function replaceNodeHandler(event){jQuery(this).unbind("error adobe.event.media.nosource",replaceNodeHandler);replaceNode(event.data.replacement,this);}
function attachSources(video,srcs){var srcEl;for(var i=0;i<srcs.length;i++){var src=srcs[i];if(src.src!==undefined){srcEl=window.document.createElement("source");srcEl.setAttribute("src",String(src.src));if(src.type!==undefined){srcEl.setAttribute("type",String(src.type));}
video.appendChild(srcEl);}}
if(srcEl){jQuery(srcEl).bind("error",{video:video},function(event){jQuery(event.data.video).triggerHandler("adobe.event.media.nosource");});}}
if(!srcs||srcs.length<1||!id){return null;}
var altElement=window.document.getElementById(String(id));if(altElement==null||altElement.parentNode==null){return null;}
var video=window.document.createElement('video'),canPlay=Boolean(video.canPlayType);if(!canPlay){return null;}
var allowed_attrs=[{attr:"id"},{attr:"audio",value:"muted",setEvent:"loadstart",setAttr:"muted",setValue:true},{attr:"autoplay",value:"autoplay",setEvent:"canplay",setFunction:function(video){video.play();}},{attr:"controls"},{attr:"height"},{attr:"loop"},{attr:"poster"},{attr:"preload"},{attr:"src"},{attr:"volume",value:"*",setEvent:"loadstart",setAttr:"volume"},{attr:"width"}];attrs=attrs||{};for(var i=0;i<allowed_attrs.length;i++){setAttr(video,attrs,allowed_attrs[i]);}
jQuery(video).bind("error adobe.event.media.nosource",{current:video,replacement:altElement},replaceNodeHandler);attachSources(video,srcs);altElement=replaceNode(video,altElement);return video;};
adobe.fn.evidon=function(trigger)
{var evidonID=$('#'+trigger),d=document,pixel,page_id,URL_SCHEME=(d.location.protocol=='https:'?'https':'http'),CDN_URL=(URL_SCHEME=='https'?'https://info.evidon.com/c/betrad/pub/':'http://cdn.betrad.com/pub/');if((evidonID!=null)&&(hideEvidon!=true)&&isDesktop())
{evidonID.show();if((URLParser.host=="www.adobe.com")||(URLParser.host=="adobe.com")||(URLParser.host=="get.adobe.com"||(URLParser.host=="get2.adobe.com")||(URLParser.host=="get3.adobe.com"))||(URLParser.host=="kb2.adobe.com")||(URLParser.host=="community.adobe.com")||(URLParser.host=="helpx.adobe.com")||(URLParser.host=="store1.adobe.com")||(URLParser.host=="store2.adobe.com")||(URLParser.host=="store3.adobe.com"))
{if(URLParser.locale=="de")
{page_id="322";}
else if(URLParser.locale=="fr")
{page_id="324";}
else if(URLParser.locale=="uk")
{page_id="323";}
else if(URLParser.locale=="se")
{page_id="1013";}
else if(URLParser.locale=="at")
{page_id="1012";}
else if(URLParser.locale=="ch_de")
{page_id="1010";}
else if(URLParser.locale=="ch_fr")
{page_id="1009";}
else if(URLParser.locale=="ch_it")
{page_id="1011";}
else if(URLParser.locale=="es"||URLParser.locale=="es_es")
{page_id="7596";}
else
{page_id="86";}}
else
{if(URLParser.locale=="de")
{page_id="327";}
else if(URLParser.locale=="fr")
{page_id="326";}
else if(URLParser.locale=="uk")
{page_id="328";}
else if(URLParser.locale=="se")
{page_id="1024";}
else if(URLParser.locale=="at")
{page_id="1021";}
else if(URLParser.locale=="ch_de")
{page_id="1020";}
else if(URLParser.locale=="ch_fr")
{page_id="1022";}
else if(URLParser.locale=="ch_it")
{page_id="1023";}
else if(URLParser.locale=="es"||URLParser.locale=="es_es")
{page_id="7596";}
else
{page_id="126";}}
evidonID.bind('click',function(e)
{e.preventDefault();var link=this;function appendScript(url,callback)
{var head=d.getElementsByTagName('head')[0]||d.documentElement,loaded=false,script=d.createElement('script');function onload(){script.onload=script.onreadystatechange=null;head.removeChild(script);callback();}
script.src=url;script.onreadystatechange=function(){if(!loaded&&(this.readyState=='loaded'||this.readyState=='complete')){loaded=true;onload();}};script.onload=onload;head.insertBefore(script,head.firstChild);}
appendScript(URL_SCHEME+'://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js',function(){appendScript(CDN_URL+'pub1.js',function(){BAPW.i(link,{pid:page_id,ocid:414},false);});});});pixel=d.createElement('img');pixel.src=URL_SCHEME+'://l.betrad.com/pub/p.gif?pid='+page_id+'&ocid='+'414'+'&ii=1&r='+Math.random();pixel.height='1';pixel.width='1';pixel.className='SiteFooterEvidonPixel';d.body.appendChild(pixel);}};
adobe.fn.focusHashElement=function(){var hashId=window.location.hash;if(hashId.length<=1){return;}
var node=document.getElementById(hashId);if(node==null){return;}
if(node.nodeType!=1){return;}
var hasIndex=node.getAttribute("tabindex")!=null;var hasRef=node.getAttribute("href")!=null;if(!hasRef&&!hasIndex){if(node.hasAttribute("tabindex")){node.setAttribute("tabindex","0");}else{var target=$(node).find("a");if(target.length<1){target=$(node).find("area");if(target.length<1){target=$(node).find("*[tabindex]");}}
if(target.length>0){node=target.first();}else{node.setAttribute("tabindex","0");}}}
$(node).focus();};
adobe.fn.formcentralIframeResize=function(target,height,width)
{var iframeObj=$('#'+target);var buffer=20;var maxIframeWidth="709px";function pageY(elem){return elem.offsetParent?(elem.offsetTop+pageY(elem.offsetParent)):elem.offsetTop;}
if(height==""||height=="undefined"){height=document.documentElement.clientHeight;height-=pageY(document.getElementById(target))+buffer;height=(height<0)?0:height;height=height+50+'px';}else{height=height+'px';}
if(width==""||width=="undefined"){width='100%';}else{width=width+'px';}
iframeObj.css('width',width).css('maxWidth',maxIframeWidth);iframeObj.css('height',height);};
adobe.fn.handleCartButton=function(event){if(!cart){return;}
var distMethod=event.data.distmethod;var storeType=event.data.storetype;var categoryPath=event.data.categorypath;var productName=event.data.productname;var promoID=event.data.promoid;event.preventDefault();cart.setCategoryPath(categoryPath);cart.setProductName(productName);cart.setDistributionMethod(distMethod);cart.setStoreType(storeType);cart.setEmailTrackingId(promoID);cart.openCartOverlay();};
adobe.fn.handleHashChangeForTreeList=function(){var hashId=window.location.hash;var myTree;if(hashId.length>1){myTree=$(window.document.getElementById(hashId)).closest(".ui-treeList");}else{myTree=$(".ui-treeList").first();}
if(myTree.length==0){return;}
var myNode=$(hashId).closest(".ui-treeList-item");if(myNode.length==0){myNode=myTree.find(".ui-treeList-item");}
$(document).on("pagecreate",function(){myTree.treeList('openNode',myNode);});};
adobe.fn.handleModalButton=function(event){if(event.data===undefined){return;}
if(jQuery(window).width()>(parseInt(event.data.width)||0)){var dispatcher=adobe.vrbl("reflowDispatcher");if(dispatcher)
{if(dispatcher.hasLayoutEvent("phone")&&dispatcher.getLayoutEvent("phone").active)
{window.location=event.data.href;}
else
{event.preventDefault();adobe.fn.openModal(event.data);}}
else
{event.preventDefault();adobe.fn.openModal(event.data);}}};
$.getURLParameter=function(name){return decodeURIComponent((location.search.match(RegExp("[?&]"+name+"=([^&]*)"))||[,""])[1]);}
adobe.fn.initGeorouting=function(){if(($('#Georouting').length)&&!($.cookies.get('georouting_presented'))&&($(window).width()>750)){if((URLParser.siteLevel=="solutions")||(URLParser.siteLevel=="products")||($.string(URLParser.siteLevel).startsWith('solutions.html'))||($.string(URLParser.siteLevel).startsWith('index.html'))||($.string(URLParser.siteLevel).startsWith('?'))||(URLParser.siteLevel=="")){adobe.fn.georoutingModalSearch();}}}
adobe.fn.georoutingModalSearch=function(){var referrerURL=$(document)[0].referrer;if(referrerURL!=""){var referrerDomain=referrerURL.split('/')[2];if($.string(referrerDomain).endsWith('adobe.com')){adobe.fn.georoutingModalIP();}
else{if($.string(referrerDomain).startsWith('www.')){referrerDomain=referrerDomain.replace(/www\./,'');}
var pageName=referrerDomain.replace(/\./g,'_');var fileName="/etc/pagetables/georouting_search/"+pageName+".modal.html";$.ajax({url:fileName,type:'HEAD',cache:true,success:function(){$.cookies.set('georouting_presented','true',{domain:'adobe.com',hoursToLive:720});(function($){adobe.fn.openModal({width:"auto",height:"auto",target:"georouting_modal-ui",href:fileName,title:""});})(jQuery);},error:function(){adobe.fn.georoutingModalIP();}});}}
else{adobe.fn.georoutingModalIP();}}
adobe.fn.georoutingModalIP=function(){var testCountry=$.getURLParameter("testCountry");if(testCountry!=""){tntGeocountry=testCountry;}
if((typeof tntGeocountry!=='undefined')&&(tntGeocountry!="")){var newGeocountry=tntGeocountry.replace(/[^A-Za-z]+/g,'');if(newGeocountry!="unitedstates"){var fileName="/etc/pagetables/georouting_ip/us_"+newGeocountry+".modal.html";$.ajax({url:fileName,type:'HEAD',cache:true,success:function(){$.cookies.set('georouting_presented','true',{domain:'adobe.com',hoursToLive:720});(function($){adobe.fn.openModal({width:"auto",height:"auto",target:"georouting_modal-ui",href:fileName,title:""});})(jQuery);}});}}};
adobe.fn.initGlobalFooter=function(){var countryCode=$.cookies.get('international');if(countryCode){$('#sfRegionSet').show();$('#sfRegion').hide();}
else{$('#sfRegionSet').hide();$('#sfRegion').show();}
if(isDesktop()){$('#RegionPanel').bind("clickoutside focusout",function(){$('#RegionPanel').hide();});$('#sfRegion, #sfRegionChange, #sfRegionClose').bind("click",function(){$('#RegionPanel').toggle();if($('#SiteHeader')!=null){$('#WelcomePanel').hide();$('#WelcomePanelShadow').hide();}
return false;});}};
var supportsTouch='ontouchstart'in window||navigator.msMaxTouchPoints;var ua=navigator.userAgent,myEvent=(ua.match(/iPad/i))?"touchstart":"click";function equalizeHeights(divsToSize){tallestDivHeight=0;divsToSize.each(function(){divHeight=$(this).height();if(divHeight>tallestDivHeight){tallestDivHeight=divHeight;}});divsToSize.height(tallestDivHeight);}
adobe.fn.initGlobalNav=function(){if(!$('#SiteHeader').length||$('.ApexSiteHeaderBar').length>0){return;}
$('a#shSearchButton').removeAttr("style");$('a#shSearchButton').removeAttr("href");var screenName=$('#screenName');IMS_SCOPE="AdobeID,openid,sao.creative_cloud";IMS_AUTH_ENDPOINT=null;IMS_LOGOUT_ENDPOINT=null;IMS_AUTH_CHECK_ENDPOINT=null;IMS_CLIENT_ID=null;if(screenName){WCDServerPresent=$.cookies.get('WCDServer'),RengaRMTPresent=$.cookies.get('RengaRMT'),RmPresent=$.cookies.get('rm'),hostIMSValue=$.cookies.get("gnavHostIMS"),hostIDPValue=$.cookies.get("gnavHostIDP"),clientIDValue=$.cookies.get("gnavClientID");if((hostIMSValue)&&(hostIDPValue)&&(clientIDValue)){IMS_AUTH_ENDPOINT="https://"+hostIMSValue+"/authorize";IMS_LOGOUT_ENDPOINT="https://"+hostIDPValue+"/ims/logout/v1/token";IMS_AUTH_CHECK_ENDPOINT="https://"+hostIDPValue+"/ims/check/v1/token";IMS_CLIENT_ID=clientIDValue;}
if((WCDServerPresent)||(RengaRMTPresent)||(RmPresent)){if((IMS_AUTH_CHECK_ENDPOINT)&&(IMS_CLIENT_ID)){adobe.fn.gnavGetUserName();}
else{adobe.fn.gnavGetIMSInfo();}}
else{adobe.fn.gnavGetSecureCookies();$(document).trigger("profile_loaded");}}
$('#search-input').autofill();$('#globalnav-search').bind('submit',function(){var searchText=$('#search-input').val();if(searchText==""||searchText==null){$('#search-input').blur();return false;}});var signInHREF,signInElementRef;if($('#shSignIn').length>0&&$('#SignInPanel').length==0){signInHREF=$('#shSignIn').attr('href');signInElementRef=$('#shSignIn');if($.string(signInHREF).include('?')){signInHREF=signInHREF+"&returnURL="+encodeURIComponent(window.location.href);}else{signInHREF=signInHREF+"?returnURL="+encodeURIComponent(window.location.href);}
signInElementRef.attr('href',signInHREF);}
$('#shSignOut, #shSignOutMobile').bind('click',function(event){event.preventDefault();if((IMS_LOGOUT_ENDPOINT)&&(IMS_CLIENT_ID)&&(IMS_SCOPE)){$.ajax({url:IMS_LOGOUT_ENDPOINT,data:{client_id:IMS_CLIENT_ID,scope:IMS_SCOPE},dataType:'jsonp',timeout:2000}).done(function(){s_adobe=s_gi(window.s_adobe_account);s_adobe.linkTrackVars="prop17";s_adobe.prop17="cc_NotSignedIn";s_adobe.tl(this,'o','adobe.com:GlobalNav:SignOut');if(typeof CQ_Analytics!='undefined'){if(typeof CQ_Analytics.ClientContext!='undefined'){CQ_Analytics.ClientContext.clear();}}
$.cookies.del('AUID',{domain:'adobe.com'});$.cookies.del('SCREENNAME',{domain:'adobe.com'});$('#shWelcome').hide();$('#shSignInBlock').show();$('#shSignOutMobile').hide();$('#shSignInMobile').show();setTimeout('$(document).trigger("user_signedout")',1000);}).fail(function(){adobe.fn.cfSignOut();});}
else{adobe.fn.cfSignOut();}});if(isDesktop()){var onDiv=false;var onLink=false;var bubbleExists=false;var timeoutID;function addBubbleMouseover(){$("#MyCartLinkContainer").hover(function(event){if(onDiv||onLink){return false;}
onLink=true;showBubble.call(this,event);},function(event){onLink=false;timeoutID=setTimeout(hideBubble,1000);});}
function hideBubble(){clearTimeout(timeoutID);if(bubbleExists&&!onDiv){$("#CartPanelShadow").fadeOut();bubbleExists=false;$("#MyCartLinkContainer").removeClass("MouseOverHoverCart");enableBodyClick();}}
function showBubble(event){if(bubbleExists){hideBubble();}
var cart=Adobe.Cart.Models.Cart;var itemCount=cart.getInstance().cartSession.numberOfItems;if(itemCount>0){if(!cart.modelInSync()){cart.getHoverCart({});}
var ipWidth=485;var ipCartLinkWidth=$('.SiteHeaderCart').width();var cartlinkpos=$('.SiteHeaderCart').position().left;var cartposdiff=ipWidth-ipCartLinkWidth;var cartpos=cartlinkpos-cartposdiff+50;$('#CartPanelShadow').css('left',cartpos+'px').show();if($('#SiteFooter')!=null){$('#RegionPanel').hide();}
enableCartPanel();}
$('#CartPanel').hover(function keepBubbleOpen(){onDiv=true;},function letBubbleClose(event){onDiv=false;hideBubble();});bubbleExists=true;$("#MyCartLinkContainer").addClass("MouseOverHoverCart");}
function keepBubbleOpen(){onDiv=true;}
function letBubbleClose(event){onDiv=false;hideBubble();}
function enableBodyClick(){$('body').click(function(){$('#CartPanelShadow').hide();});}
function enableCartPanel(){$('#CartPanel').click(function(event){event.stopPropagation();});}
addBubbleMouseover();if($('#SiteHeader').is(':visible')){equalizeHeights($("div.SiteHeaderShadowLeft"));}}
if(supportsTouch){$("div.SiteHeaderDropdownLink a.SiteHeaderBarLink").live(myEvent,function(){if($("#"+this.id).parent().hasClass("SiteHeaderBarItemOpen")){$("div.SiteHeaderDropdownLink").removeClass("SiteHeaderBarItemOpen SiteHeaderBarItemHover");$("div.SiteHeaderDropdownLink div.SiteHeaderDropPanel").addClass("SiteHeaderDropPanelHidden");window.location=$("#"+this.id).attr("href");return false;}
else{$("div.SiteHeaderDropdownLink").removeClass("SiteHeaderBarItemOpen SiteHeaderBarItemHover");$("div.SiteHeaderDropdownLink div.SiteHeaderDropPanel").addClass("SiteHeaderDropPanelHidden");$("#"+this.id).parent().find("div.SiteHeaderDropPanel").removeClass("SiteHeaderDropPanelHidden");$("#"+this.id).parent().addClass("SiteHeaderBarItemOpen SiteHeaderBarItemHover");return false;}});$("#SiteHeader").bind(myEvent+"outside",function(el){$("div.SiteHeaderDropdownLink").removeClass("SiteHeaderBarItemOpen SiteHeaderBarItemHover");$("div.SiteHeaderDropdownLink div.SiteHeaderDropPanel").addClass("SiteHeaderDropPanelHidden");});}
var dispatcher=adobe.vrbl("reflowDispatcher");if(dispatcher){dispatcher.addLayoutEvent(new adobe.reflow.LayoutEvent("sitenavMobile",0,940));dispatcher.updateLayout($(window).width());if(dispatcher.hasLayoutEvent("sitenavMobile")&&dispatcher.getLayoutEvent("sitenavMobile").active){$(document).bind("resize",function(){if($(window).width()>940){equalizeHeights($("div.SiteHeaderShadowLeft"));$(document).unbind("resize");}});setupSiteHeaderMobile();}else{var isSetForMobile=false;$(document).bind("adobe.reflow.LayoutChange",function(event,layoutEvent){if(layoutEvent.name=="sitenavMobile"&&layoutEvent.active&&!isSetForMobile){isSetForMobile=true;setupSiteHeaderMobile();$(document).unbind("adobe.reflow.LayoutChange",setupSiteHeaderMobile);}
else{if(isSetForMobile){$('#shProductsMobileSpan, #shProductsMobile').unbind("click");$('#shSectionsSolutionsMobile').unbind("click");$('#shSectionsCompanyMobile').unbind("click");$('#shSectionsHelpMobile').unbind("click");$('#shSectionsLearningMobile').unbind("click");$('#shSectionsMobile, #shSectionsMobileSpan').unbind("click");$('#shSearchMobile, #shSearchMobileSpan').unbind("click");$('#shSectionsMobileSpan').unbind("clickoutside");$('#shSearchMobileSpan').unbind("clickoutside");}
isSetForMobile=false;}});}}else{setupSiteHeaderMobile();}
function setupSiteHeaderMobile(){if(($('#SiteHeader').is(':visible'))&&($(window).width()<=940)){$('#shSearchButton').bind('click',function(event){$('#search-input').autofill();$("#shSearchButton").addClass("SiteHeaderHide");$("div.SiteHeaderBarItem").addClass("SiteHeaderHide");$("div.SiteHeaderSearch").removeClass("SiteHeaderHide").addClass("SiteHeaderShow");$('div.SiteHeaderSearch').bind('clickoutside touchstartoutside',function(el){if($(window).width()<940){$('div.SiteHeaderBarItem').removeClass("SiteHeaderHide");$('div.SiteHeaderSearch').removeClass("SiteHeaderShow");$("#shSearchButton").removeClass("SiteHeaderHide");}
else{$('div.SiteHeaderBarItem').removeClass("SiteHeaderHide");$('div.SiteHeaderSearch').removeClass("SiteHeaderHide").removeClass("SiteHeaderShow");$('#shSearchButton').removeClass("SiteHeaderHide");}
$('div.SiteHeaderSearch').unbind('clickoutside touchstartoutside');});});}
$('#search-input-mobile').autofill();function hideExtendSectionsBar(){$('#shSectionsMobileSpan').removeClass('SiteHeaderBarItemMobileActive');$('#shBarExtend').removeClass('SiteHeaderBarMobileExtendBottomBorder');$('#shBarExtendSections').hide();}
$('#shProductsMobileSpan, #shProductsMobile').bind("click touchstart",function(){hideExtendSectionsBar();window.location=$('a#shProductsMobile').attr("href");return false;});$('#shSectionsSolutionsMobile').bind("click touchstart",function(){hideExtendSectionsBar();window.location=$('a#shSectionsSolutionsMobile').attr("href");return false;});$('#shSectionsCompanyMobile').bind("click touchstart",function(){hideExtendSectionsBar();window.location=$('a#shSectionsCompanyMobile').attr("href");return false;});$('#shSectionsHelpMobile').bind("click touchstart",function(){hideExtendSectionsBar();window.location=$('a#shSectionsHelpMobile').attr("href");return false;});$('#shSectionsLearningMobile').bind("click touchstart",function(){hideExtendSectionsBar();window.location=$('a#shSectionsLearningMobile').attr("href");return false;});$('#shSectionsMobileBuy, #shBuyMobile').bind("click touchstart",function(){hideExtendSectionsBar();window.location=$('a#shBuyMobile').attr("href");return false;});$('#shSectionsMobile, #shSectionsMobileSpan').bind("click touchstart",function(){if($('#shBarExtendSections').css("display")=='none'){$('#shBarExtendSections').show();$('#shBarExtendSearch').hide();$('#shBarExtend').addClass('SiteHeaderBarMobileExtendBottomBorder');$('#shSectionsMobileSpan').addClass('SiteHeaderBarItemMobileActive');$('#shSearchMobileSpan').removeClass('SiteHeaderBarItemMobileActive');}else{$('#shBarExtendSections').hide();$('#shBarExtend').removeClass('SiteHeaderBarMobileExtendBottomBorder');$('#shSectionsMobileSpan').removeClass('SiteHeaderBarItemMobileActive');}
return false;});$('#shSearchMobile, #shSearchMobileSpan').bind("click touchstart",function(){if($('#shBarExtendSearch').css("display")=='none'){$('#shBarExtendSearch').show();$('#shBarExtendSections').hide();$('#shBarExtend').addClass('SiteHeaderBarMobileExtendBottomBorder');$('#shSearchMobileSpan').addClass('SiteHeaderBarItemMobileActive');$('#shSectionsMobileSpan').removeClass('SiteHeaderBarItemMobileActive');$('#search-input-mobile').autofill();}else{$('#shBarExtendSearch').hide();$('#shBarExtend').removeClass('SiteHeaderBarMobileExtendBottomBorder');$('#shSearchMobileSpan').removeClass('SiteHeaderBarItemMobileActive');}
return false;});$('#shSectionsMobileSpan').bind("clickoutside touchendoutside",function(el){if($('#shBarExtendSearch').css("display")=='none'){if((el.target.id!="shBarExtendSections")&&(el.target.id!="shBarExtendSections1")&&(el.target.id!="shBarExtendSections2")&&(el.target.id!="shBarExtend")){$('#shSectionsMobileSpan').removeClass('SiteHeaderBarItemMobileActive');$('#shBarExtend').removeClass('SiteHeaderBarMobileExtendBottomBorder');$('#shBarExtendSections').hide();}}});$('#shSearchMobileSpan').bind("clickoutside touchendoutside",function(el){if($('#shBarExtendSections').css("display")=='none'){if((el.target.id!="search-input-mobile")&&(el.target.id!="shBarExtendSearch")&&(el.target.id!="shBarExtend")){$('#shSearchMobileSpan').removeClass('SiteHeaderBarItemMobileActive');$('#shBarExtend').removeClass('SiteHeaderBarMobileExtendBottomBorder');$('#shBarExtendSearch').hide();}}});$('#globalnav-search-mobile').bind('submit',function(){var searchText=$('#search-input-mobile').val();if(searchText==""||searchText==null){$('#search-input-mobile').blur();return false;}});}};adobe.fn.gnavGetSecureCookies=function(){$.ajax({url:'https://verify.adobe.com/ssocheck/',dataType:'jsonp',jsonp:false,jsonpCallback:"parseSSOData"}).done(function(response){if("hasSSOCookie"in response){hasSSOCookieValue=response.hasSSOCookie;if(hasSSOCookieValue==true){if((IMS_AUTH_CHECK_ENDPOINT)&&(IMS_CLIENT_ID)){adobe.fn.gnavGetUserName();}
else{adobe.fn.gnavGetIMSInfo();}}}});}
adobe.fn.gnavGetIMSInfo=function(){var adobe_host=window.location.hostname,confURL="https://www.adobe.com/svcs/configurations/clients/adobedotcomIMS/client_aliases/adobedotcom?landscape="+adobe_host;if(($.string(adobe_host).include('stage'))||($.string(adobe_host).include('dev'))||($.string(adobe_host).include('qa'))){var confURL="/svcs/configurations/clients/adobedotcomIMS/client_aliases/adobedotcom?landscape="+adobe_host;}
$.ajax({url:confURL,dataType:'jsonp'}).done(function(response){if(response.configurations.clients[0].client_aliases.properties){var properties={},result={},propertiesRoot=response.configurations.clients[0].client_aliases.properties;for(var i=0;i<propertiesRoot.length;i++){properties[propertiesRoot[i].key]=propertiesRoot[i].value;}
result.attributes=properties;if((result.attributes.imsHost)&&(result.attributes.idpHost)&&(result.attributes.actualClient)){$.cookies.set('gnavHostIMS',result.attributes.imsHost,{domain:'adobe.com',hoursToLive:0});$.cookies.set('gnavHostIDP',result.attributes.idpHost,{domain:'adobe.com',hoursToLive:0});$.cookies.set('gnavClientID',result.attributes.actualClient,{domain:'adobe.com',hoursToLive:0});IMS_AUTH_ENDPOINT="https://"+result.attributes.imsHost+"/authorize";IMS_LOGOUT_ENDPOINT="https://"+result.attributes.idpHost+"/ims/logout/v1/token";IMS_AUTH_CHECK_ENDPOINT="https://"+result.attributes.idpHost+"/ims/check/v1/token";IMS_CLIENT_ID=result.attributes.actualClient;adobe.fn.gnavGetUserName();}}});}
adobe.fn.gnavGetUserName=function(){$.ajax({url:IMS_AUTH_CHECK_ENDPOINT,data:{client_id:IMS_CLIENT_ID,scope:IMS_SCOPE},dataType:'jsonp'}).done(function(response){if("displayName"in response){IMS_USER_PROFILE=response;$(document).trigger("profile_loaded");if(typeof CQ_Analytics!='undefined'){var yodaStore=CQ_Analytics.ClientContext.get("yoda");if(yodaStore){var serviceData={};if("serviceAccounts"in response){if(typeof response.serviceAccounts[0]!="undefined"){var servicesResponse=response.serviceAccounts[0];if("serviceCode"in servicesResponse){yodaStore.setProperty("serviceCode",servicesResponse.serviceCode);}
if("serviceStatus"in servicesResponse){yodaStore.setProperty("serviceStatus",servicesResponse.serviceStatus);}
if("serviceLevel"in servicesResponse){yodaStore.setProperty("serviceLevel",servicesResponse.serviceLevel);}}
else{yodaStore.setProperty("serviceCode","creative_cloud");yodaStore.setProperty("serviceStatus","NOTACTIVE");yodaStore.setProperty("serviceLevel","NONE");}}
else{yodaStore.setProperty("serviceCode","creative_cloud");yodaStore.setProperty("serviceStatus","NOTACTIVE");yodaStore.setProperty("serviceLevel","NONE");}}}
gnavUserDisplayName=response.displayName;$('#screenName').text(gnavUserDisplayName);$('#screenName').trigger("screenNameChange");$('#shWelcome').show();$('#shSignInBlock').hide();$('#shSignOutMobile').show();$('#shSignInMobile').hide();}
else{$('#shWelcome').hide();$('#shSignInBlock').show();$('#shSignOutMobile').hide();$('#shSignInMobile').show();}});}
adobe.fn.cfSignOut=function(){s_adobe=s_gi(window.s_adobe_account);s_adobe.linkTrackVars="prop17";s_adobe.prop17="cc_NotSignedIn";s_adobe.tl(this,'o','adobe.com:GlobalNav:SignOut');var signOutHREF=$('#shSignOutLink').attr('href');}
adobe.fn.initGlobalNavAccessibility=function()
{var timeoutInt,focusTimeoutInt,hoverTimeoutInt,tooltipTimeout,flagMouseOver=false,flagEscKey=false,siteHeaderBar,siteHeaderBarDivs,siteHeaderBarItems,siteHeaderDropdownLinks,siteHeaderDropPanels,siteHeaderRows,siteHeaderPanelLinks,siteHeaderLinks,tooltipStringExpandMenu,tooltipStringOpenLink,searchDiv,searchInput,searchInputMobile,shInfo,infoPanel,infoPanelShadow,shSignInButton,signInPanel,signInPanelShadow,signInTimeoutId,signInPanelLinks,shSignOutLink,shWelcome,welcomePanel,welcomePanelShadow,welcomeTimeoutId,mirror,keyCodeMap={48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"},init=function()
{mirror=hasClass(document.body,"Mirror");siteHeader=document.getElementById("SiteHeader");siteHeaderBar=document.getElementById("shBar");siteHeaderBarDivs=siteHeaderBar.getElementsByTagName("DIV");siteHeaderBarItems=getElementsByClassName(siteHeaderBar,"SiteHeaderBarItem");siteHeaderDropdownLinks=getElementsByClassName(siteHeaderBar,"SiteHeaderDropdownLink");siteHeaderDropPanels=getElementsByClassName(siteHeaderBar,"SiteHeaderDropPanel");siteHeaderRows=getElementsByClassName(siteHeaderBar,"SiteHeaderRow");searchDiv=document.getElementById("site-search");searchInput=document.getElementById("search-input");searchDivMobile=document.getElementById("shBarExtendSearch");searchInputMobile=document.getElementById("search-input-mobile");siteHeaderLinks=siteHeaderBar.getElementsByTagName("A");shInfo=document.getElementById("shInfo");infoPanel=document.getElementById("InfoPanel");infoPanelShadow=document.getElementById("InfoPanelShadow");shSignOutLink=document.getElementById("shSignOutLink");shWelcome=document.getElementById("shWelcome");welcomePanel=document.getElementById("WelcomePanel");welcomePanelShadow=document.getElementById("WelcomePanelShadow");if(welcomePanel)welcomePanelLinks=welcomePanel.getElementsByTagName("A");shSignInButton=document.getElementById("shSignIn");signInPanel=document.getElementById("SignInPanel");signInPanelShadow=document.getElementById("SignInPanelShadow");if(signInPanel)signInPanelLinks=signInPanel.getElementsByTagName("A");tooltipStringExpandMenu=document.getElementById("tooltipStringExpandMenu");if(tooltipStringExpandMenu)tooltipStringExpandMenu=tooltipStringExpandMenu.innerHTML;tooltipStringOpenLink=document.getElementById("tooltipStringOpenLink");if(tooltipStringOpenLink)tooltipStringOpenLink=tooltipStringOpenLink.innerHTML;var obj,i;if(navigator.platform.indexOf("Win")!=-1)addClass(siteHeaderBar,"os-windows");siteHeader.setAttribute('role','navigation');for(i=0;i<siteHeaderBarDivs.length;i++)
{obj=siteHeaderBarDivs[i];obj.setAttribute('role','presentation');}
for(i=0;i<siteHeaderBarItems.length;i++)
{obj=siteHeaderBarItems[i];obj['data-index']=i;}
for(i=0;i<siteHeaderDropdownLinks.length;i++)
{obj=siteHeaderDropdownLinks[i];obj['data-index']=i;}
for(i=0;i<siteHeaderDropPanels.length;i++)
{obj=siteHeaderDropPanels[i];obj.setAttribute('aria-hidden','true');addClass(obj,'SiteHeaderDropPanelHidden');obj['data-index']=i;addEvent(obj,'mouseover',mouseOverHandler);addEvent(obj,'mouseout',mouseOutHandler);setLinkTabIndexes(obj,"-1");}
for(i=0;i<siteHeaderLinks.length;i++)
{obj=siteHeaderLinks[i];obj['data-index']=i;if(obj.tabIndex===null)
{obj.tabIndex=(hasClass(obj.parentNode,'SiteHeaderPanelHeader')||hasClass(obj.parentNode,'SiteHeaderPanelRow')||hasClass(obj.parentNode,'SiteHeaderPanelLink'))?'-1':'0';obj.setAttribute('tabindex',obj.tabIndex);}
if(hasClass(obj.parentNode,'SiteHeaderDropdownLink'))
{obj.setAttribute('aria-haspopup','true');obj.setAttribute('aria-expanded','false');obj.setAttribute('aria-owns',siteHeaderDropPanels[obj.parentNode['data-index']].id);obj.setAttribute('aria-controls',siteHeaderDropPanels[obj.parentNode['data-index']].id);}
addEvent(obj,'focus',focusHandler);addEvent(obj,'blur',blurHandler);addEvent(obj,'mouseover',mouseOverHandler);addEvent(obj,'mouseout',mouseOutHandler);addEvent(obj,'keydown',keyDownHandler);addEvent(obj,'click',clickHandler);}
if(shInfo&&infoPanel)
{shInfo.setAttribute('href','#InfoPanel');shInfo.setAttribute('aria-describedby','InfoPanel');infoPanel.setAttribute('role','tooltip');infoPanel.style.display="none";infoPanel.setAttribute('aria-hidden','true');infoPanel.tabIndex='-1';if(infoPanelShadow)infoPanelShadow.style.display="none";addEvent(shInfo,"mouseover",shInfo_mouseOverHandler);addEvent(shInfo,"mouseout",shInfo_mouseOutHandler);addEvent(shInfo,"focus",shInfo_focusHandler);addEvent(shInfo,"blur",shInfo_blurHandler);addEvent(shInfo,"click",shInfo_clickHandler);}
if(shSignInButton&&signInPanel)
{shSignInButton.setAttribute('aria-haspopup','true');shSignInButton.setAttribute('aria-owns','SignInPanel');signInPanel.setAttribute('role','menu');signInPanel.style.display="none";signInPanelShadow.style.display="none";addEvent(shSignInButton,'focus',shSignInButton_focusHandler);addEvent(shSignInButton,'blur',shSignInButton_blurHandler);addEvent(shSignInButton,'mouseover',shSignInButton_mouseOverHandler);addEvent(shSignInButton,'mouseout',shSignInButton_mouseOutHandler);addEvent(shSignInButton,'keydown',shSignInButton_keyDownHandler);addEvent(shSignInButton,'contextmenu',shSignInButton_contextMenuHandler);addEvent(signInPanel,'mouseover',shSignInButton_mouseOverHandler);addEvent(signInPanel,'mouseout',shSignInButton_mouseOutHandler);for(i=0;i<signInPanelLinks.length;i++)
{obj=signInPanelLinks[i];obj.setAttribute('role','menuitem');obj['data-index']=i;obj.tabIndex='-1';addEvent(obj,'focus',shSignInButton_focusHandler);addEvent(obj,'blur',shSignInButton_blurHandler);addEvent(obj,'mouseover',shSignInButton_mouseOverHandler);addEvent(obj,'mouseout',shSignInButton_mouseOutHandler);addEvent(obj,'keydown',shSignInButton_keyDownHandler);addEvent(obj,'contextmenu',shSignInButton_contextMenuHandler);}}
if(shWelcome&&welcomePanel)
{shWelcome.setAttribute('aria-haspopup','true');shWelcome.setAttribute('aria-owns','WelcomePanel');welcomePanel.setAttribute('role','menu');welcomePanel.style.display="none";welcomePanelShadow.style.display="none";addEvent(shWelcome,'focus',shWelcome_focusHandler);addEvent(shWelcome,'blur',shWelcome_blurHandler);addEvent(shWelcome,'mouseover',shWelcome_mouseOverHandler);addEvent(shWelcome,'mouseout',shWelcome_mouseOutHandler);addEvent(shWelcome,'keydown',shWelcome_keyDownHandler);if(!signInPanel){addEvent(shWelcome,'click',shWelcome_clickHandler);}
addEvent(shWelcome,'contextmenu',shWelcome_contextMenuHandler);addEvent(welcomePanel,'mouseover',shWelcome_mouseOverHandler);addEvent(welcomePanel,'mouseout',shWelcome_mouseOutHandler);addEvent(shSignOutLink,'click',shWelcome_hidePanel);for(i=0;i<welcomePanelLinks.length;i++)
{obj=welcomePanelLinks[i];obj.setAttribute('role','menuitem');obj['data-index']=i;obj.tabIndex='-1';addEvent(obj,'focus',shWelcome_focusHandler);addEvent(obj,'blur',shWelcome_blurHandler);addEvent(obj,'mouseover',shWelcome_mouseOverHandler);addEvent(obj,'mouseout',shWelcome_mouseOutHandler);addEvent(obj,'keydown',shWelcome_keyDownHandler);addEvent(obj,'contextmenu',shWelcome_contextMenuHandler);}}
if(searchDiv&&searchInput)
{searchDiv.setAttribute('role','search');searchInput.setAttribute('aria-label','Search');}
if(searchDivMobile&&searchInputMobile)
{searchDivMobile.setAttribute('role','search');searchInputMobile.setAttribute('aria-label','Search');}},shWelcome_contextMenuHandler=function(event)
{event.preventDefault();event.stopPropagation();return false;},shWelcome_mouseOverHandler=function(event)
{clearTimeout(welcomeTimeoutId);clearToolTip();hideAndShowSubmenus(this||event.target,'closeall');shWelcome_showPanel();},shWelcome_mouseOutHandler=function(event)
{clearTimeout(welcomeTimeoutId);if(document.activeElement!=shWelcome)
{var welcomePanelLink,i;for(i=0;i<welcomePanelLinks.length;i++)
{if(document.activeElement==welcomePanelLinks[i])
return true;}
welcomeTimeoutId=setTimeout(shWelcome_hidePanel,450);}},shWelcome_focusHandler=function(event)
{clearTimeout(welcomeTimeoutId);clearToolTip();hideAndShowSubmenus(this||event.target,'closeall');shWelcome_showPanel();},shWelcome_blurHandler=function(event)
{clearTimeout(welcomeTimeoutId);if(document.activeElement!=shWelcome)
{var welcomePanelLink,i;for(i=0;i<welcomePanelLinks.length;i++)
{if(document.activeElement==welcomePanelLinks[i])
return true;}
welcomeTimeoutId=setTimeout(shWelcome_hidePanel,450);}},shWelcome_keyDownHandler=function(event)
{var node,links,start,j,a,label,candidate,found=false,beforeLink=true;switch(event.keyCode)
{case 38:{event.preventDefault();if(this==shWelcome)
{shWelcome_hidePanel();}else{node=nextTabbableElement(this,true,true);if(node){node.focus();if(node==shWelcome)
{shWelcome_hidePanel();}}}
break;}
case 40:{event.preventDefault();shWelcome_showPanel();node=nextTabbableElement(this,false,true);if(node)
{if(node.parentNode.parentNode!=welcomePanel)
{welcomePanelLinks[0].focus();}else
{node.focus();}}
break;}
case 32:{event.preventDefault();event.stopPropagation();if(event.ctrlKey)
{shWelcome_showPanel();if(this==shWelcome)
{welcomePanelLinks[0].focus();}
return false;}else{shWelcome_hidePanel();window.open(this.href,(this.target||"_self"));return false;}
break;}
case 121:{if(event.ctrlKey)
{event.preventDefault();shWelcome_showPanel();if(this==shWelcome)
welcomePanelLinks[0].focus();return false;}
break;}
default:{links=welcomePanelLinks;var start=0;for(j=0;j<links.length;j++){a=links[j];if(a==this){start=j;break;}}
for(j=start+1;j<links.length;j++){a=links[j];label=a.innerText||a.textContent;if(label.substring(0,1).toLowerCase()==keyCodeMap[event.keyCode]){a.focus();found=true;break;}}
if(!found){for(j=0;j<start;j++){a=links[j];label=a.innerText||a.textContent;if(label.substring(0,1).toLowerCase()==keyCodeMap[event.keyCode]){a.focus();break;}}}
break;}}},shWelcome_clickHandler=function(event)
{event.preventDefault();event.stopPropagation();clearToolTip();hideAndShowSubmenus(this||event.target,'closeall');shWelcome_showPanel();welcomePanelLinks[0].focus();return false;},shWelcome_hidePanel=function()
{clearTimeout(welcomeTimeoutId);welcomePanel.style.display='none';welcomePanel.setAttribute('aria-hidden','true');welcomePanelShadow.style.display='none';removeEvent(document,'keydown',shWelcome_escapeKeyHandler);},shWelcome_showPanel=function()
{clearTimeout(welcomeTimeoutId);welcomePanel.style.display='block';welcomePanel.setAttribute('aria-hidden','false');welcomePanelShadow.style.width=(welcomePanel.clientWidth)+'px';welcomePanelShadow.style.height=(welcomePanel.clientHeight)+'px';welcomePanelShadow.style.display='block';addEvent(document,'keydown',shWelcome_escapeKeyHandler);},shWelcome_escapeKeyHandler=function(event){if(event.keyCode==27)
{if(document.activeElement!=shWelcome)
{var welcomePanelLink,i;for(i=0;i<welcomePanelLinks.length;i++)
{if(document.activeElement==welcomePanelLinks[i])
{shWelcome.focus();break;}}}
shWelcome_hidePanel();}},shSignInButton_contextMenuHandler=function(event)
{event.preventDefault();event.stopPropagation();return false;},shSignInButton_mouseOverHandler=function(event)
{clearTimeout(signInTimeoutId);clearToolTip();hideAndShowSubmenus(this||event.target,'closeall');shSignInButton_showPanel();},shSignInButton_mouseOutHandler=function(event)
{clearTimeout(signInTimeoutId);if(document.activeElement!=shSignInButton)
{var signInPanelLink,i;for(i=0;i<signInPanelLinks.length;i++)
{if(document.activeElement==signInPanelLinks[i])
return true;}
signInTimeoutId=setTimeout(shSignInButton_hidePanel,450);}},shSignInButton_focusHandler=function(event)
{clearTimeout(signInTimeoutId);clearToolTip();hideAndShowSubmenus(this||event.target,'closeall');shSignInButton_showPanel();},shSignInButton_blurHandler=function(event)
{clearTimeout(signInTimeoutId);if(document.activeElement!=shSignInButton)
{var signInPanelLink,i;for(i=0;i<signInPanelLinks.length;i++)
{if(document.activeElement==signInPanelLinks[i])
return true;}
signInTimeoutId=setTimeout(shSignInButton_hidePanel,450);}},shSignInButton_keyDownHandler=function(event)
{var node,links,start,j,a,label,candidate,found=false,beforeLink=true;switch(event.keyCode)
{case 38:{event.preventDefault();if(this==shSignInButton)
{shSignInButton_hidePanel();}else{node=nextTabbableElement(this,true,true);if(node){node.focus();if(node==shSignInButton)
{shSignInButton_hidePanel();}}}
break;}
case 40:{event.preventDefault();shSignInButton_showPanel();node=nextTabbableElement(this,false,true);if(node)
{if(node.parentNode.parentNode!=signInPanel)
{signInPanelLinks[0].focus();}else
{node.focus();}}
break;}
case 32:{event.preventDefault();event.stopPropagation();if(event.ctrlKey)
{shSignInButton_showPanel();if(this==shSignInButton)
{signInPanelLinks[0].focus();}
return false;}else{shSignInButton_hidePanel();window.open(this.href,(this.target||"_self"));return false;}
break;}
case 121:{if(event.ctrlKey)
{event.preventDefault();shSignInButton_showPanel();if(this==shSignInButton)
signInPanelLinks[0].focus();return false;}
break;}
default:{links=signInPanelLinks;var start=0;for(j=0;j<links.length;j++){a=links[j];if(a==this){start=j;break;}}
for(j=start+1;j<links.length;j++){a=links[j];label=a.innerText||a.textContent;if(label.substring(0,1).toLowerCase()==keyCodeMap[event.keyCode]){a.focus();found=true;break;}}
if(!found){for(j=0;j<start;j++){a=links[j];label=a.innerText||a.textContent;if(label.substring(0,1).toLowerCase()==keyCodeMap[event.keyCode]){a.focus();break;}}}
break;}}},shSignInButton_hidePanel=function()
{clearTimeout(signInTimeoutId);signInPanel.style.display='none';signInPanel.setAttribute('aria-hidden','true');signInPanelShadow.style.display='none';removeEvent(document,'keydown',shSignInButton_escapeKeyHandler);},shSignInButton_showPanel=function()
{clearTimeout(signInTimeoutId);signInPanel.style.display='block';signInPanel.style.right='0px';signInPanel.setAttribute('aria-hidden','false');signInPanelShadow.style.width=(signInPanel.clientWidth)+'px';signInPanelShadow.style.height=(signInPanel.clientHeight)+'px';signInPanelShadow.style.display='block';signInPanelShadow.style.right='0px';addEvent(document,'keydown',shSignInButton_escapeKeyHandler);},shSignInButton_escapeKeyHandler=function(event){if(event.keyCode==27)
{if(document.activeElement!=shSignInButton)
{var signInPanelLink,i;for(i=0;i<signInPanelLinks.length;i++)
{if(document.activeElement==signInPanelLinks[i])
{shSignInButton.focus();break;}}}
shSignInButton_hidePanel();}},shInfo_mouseOverHandler=function(event)
{clearToolTip();hideAndShowSubmenus(this||event.target,'closeall');shInfo_showPanel();},shInfo_mouseOutHandler=function(event)
{shInfo_hidePanel();},shInfo_focusHandler=function(event)
{clearToolTip();hideAndShowSubmenus(this||event.target,'closeall');shInfo_showPanel();},shInfo_blurHandler=function(event)
{shInfo_hidePanel();},shInfo_clickHandler=function(event)
{clearToolTip();hideAndShowSubmenus(this||event.target,'closeall');shInfo_showPanel();event.preventDefault();return false;},shInfo_hidePanel=function()
{infoPanel.style.display='none';infoPanel.setAttribute('aria-hidden','true');infoPanelShadow.style.display='none';removeEvent(document,'keydown',shInfo_escapeKeyHandler);},shInfo_showPanel=function()
{infoPanel.style.display='block';infoPanel.setAttribute('aria-hidden','false');infoPanelShadow.style.height=(infoPanel.clientHeight)+'px';infoPanelShadow.style.display='block';addEvent(document,'keydown',shInfo_escapeKeyHandler);},shInfo_escapeKeyHandler=function(event){if(event.keyCode==27)
shInfo_hidePanel();},hideAndShowSubmenus=function(eventTarget,eventType)
{var siteHeaderDropdownLink=getClosestSiteHeaderDropdownLink(eventTarget),current,currentDropPanel,i,ariaHidden;if(eventType=='mouseover'&&hasClass(eventTarget,'SiteHeaderBarLink')&&hasClass(siteHeaderBar,'SiteHeaderBarFocus'))
{flagMouseOver=true;flagEscKey=false;addClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen');siteHeaderDropdownLink.getElementsByTagName('A')[0].setAttribute('aria-expanded','true');eventTarget.focus();eventTarget.removeAttribute("title");return;}else if(eventType=='mouseout')
{flagMouseOver=false;}
for(i=0;i<siteHeaderDropdownLinks.length;i++)
{current=siteHeaderDropdownLinks[i];currentDropPanel=siteHeaderDropPanels[i];if(current!=siteHeaderDropdownLink||eventType=='blur')
{removeClass(current,'SiteHeaderBarItemHover');if(current.getElementsByTagName('A')[0]!=document.activeElement)
{removeClass(current,'SiteHeaderBarItemFocus');}
currentDropPanel.setAttribute('aria-hidden','true');current.getElementsByTagName('A')[0].setAttribute('aria-expanded','false');if(eventType=='focus'||eventType=='closeall')
{addClass(currentDropPanel,'SiteHeaderDropPanelHidden');removeClass(current,'SiteHeaderBarItemOpen');setLinkTabIndexes(currentDropPanel,"-1");}}else if(eventType=='mouseout')
{ariaHidden=(siteHeaderDropdownLink&&document.activeElement&&siteHeaderDropdownLink==getClosestSiteHeaderDropdownLink(document.activeElement)&&!hasClass(currentDropPanel,'SiteHeaderDropPanelHidden'))?'false':'true';currentDropPanel.setAttribute('aria-hidden',ariaHidden);current.getElementsByTagName('A')[0].setAttribute('aria-expanded',!ariaHidden);if(ariaHidden=='true')
{removeClass(current,'SiteHeaderBarItemFocus');removeClass(current,'SiteHeaderBarItemHover');removeClass(current,'SiteHeaderBarItemOpen');addClass(currentDropPanel,'SiteHeaderDropPanelHidden');setLinkTabIndexes(currentDropPanel,"-1");}}else
{addClass(current,'SiteHeaderBarItemHover');addClass(current,'SiteHeaderBarItemFocus');if(!hasClass(eventTarget,'SiteHeaderBarLink'))
{addClass(current,'SiteHeaderBarItemOpen');}
if(!flagEscKey&&(eventType==='focus'&&current===siteHeaderDropdownLink&&hasClass(current,'SiteHeaderBarItemOpen'))||eventType==='mouseover')
{currentDropPanel.setAttribute('aria-hidden','false');removeClass(currentDropPanel,'SiteHeaderDropPanelHidden');addClass(current,'SiteHeaderBarItemOpen');setLinkTabIndexes(current,"0");current.getElementsByTagName('A')[0].setAttribute('aria-expanded','true');}}}
if(eventType=='focus')
{addClass(siteHeaderBar,'SiteHeaderBarFocus');if(hasClass(eventTarget,'SiteHeaderBarLink'))
{if(hasClass(eventTarget,'SiteHeaderBarItem'))
{addClass(eventTarget,'SiteHeaderBarItemFocus');}}
flagKeyboardNavigation(true);flagEscKey=false;}else if(eventType=='blur')
{removeClass(siteHeaderBar,'SiteHeaderBarFocus');if(hasClass(eventTarget,'SiteHeaderBarItem')&&hasClass(eventTarget,'SiteHeaderBarLink'))
{removeClass(eventTarget,'SiteHeaderBarItemFocus');}}},focusHandler=function(event)
{clearTimeout(focusTimeoutInt);clearToolTip();var scope=this,siteHeaderDropdownLink=getClosestSiteHeaderDropdownLink(this),eventType=event.type||'focus';if(siteHeaderDropdownLink===scope.parentNode&&siteHeaderDropdownLink===siteHeaderDropdownLinks[0])
{if(!hasClass(siteHeaderDropdownLink,"SiteHeaderBarItemOpen")&&tooltipStringExpandMenu)
{scope.setAttribute("title",tooltipStringExpandMenu);}else if(tooltipStringOpenLink)
{scope.setAttribute("title",tooltipStringOpenLink);}else
{scope.removeAttribute("title");}}
if(this.getAttribute("title")&&!flagMouseOver)
{tooltipTimeout=setTimeout(function(){addToolTip(scope);},450);}
if(hasClass(scope.parentNode,"SiteHeaderDropdownLink"))
{if(hasClass(siteHeaderBar,"SiteHeaderBarKeyboardNavigation"))
{hideAndShowSubmenus(scope,eventType);return;}
focusTimeoutInt=setTimeout(function(){clearTimeout(focusTimeoutInt);hideAndShowSubmenus(scope,eventType);},100);return;}
if(hasClass(scope.parentNode,"SiteHeaderPanelLink"))
{addClass(scope.parentNode,"SiteHeaderPanelLinkHover");}else if(hasClass(scope.parentNode.parentNode,"SiteHeaderPanelLink"))
{addClass(scope.parentNode.parentNode,"SiteHeaderPanelLinkHover");}
hideAndShowSubmenus(scope,eventType);},blurHandler=function(event)
{clearTimeout(focusTimeoutInt);var scope=this,eventType=event.type||'blur';if(hasClass(scope.parentNode,"SiteHeaderDropdownLink"))
{focusTimeoutInt=setTimeout(function(){clearTimeout(focusTimeoutInt);clearToolTip();scope.removeAttribute("title");removeClass(scope.parentNode,"SiteHeaderBarItemOpen");hideAndShowSubmenus(scope,eventType);},99);return;}
clearToolTip();if(hasClass(scope.parentNode,"SiteHeaderPanelLink"))
{removeClass(scope.parentNode,"SiteHeaderPanelLinkHover");}else if(hasClass(scope.parentNode.parentNode,"SiteHeaderPanelLink"))
{removeClass(scope.parentNode.parentNode,"SiteHeaderPanelLinkHover");}
hideAndShowSubmenus(scope,eventType);},mouseOverHandler=function(event)
{clearTimeout(hoverTimeoutInt);clearToolTip();var scope=this,eventType=event.type||'mouseover';if(hasClass(scope.parentNode,"SiteHeaderDropdownLink"))
{scope.removeAttribute("title");}
hideAndShowSubmenus(scope,eventType);if(hasClass(scope.parentNode.parentNode,"SiteHeaderPanelLink"))
{addClass(scope.parentNode.parentNode,"SiteHeaderPanelLinkHover");}},mouseOutHandler=function(event)
{clearTimeout(hoverTimeoutInt);clearToolTip();var scope=this,eventType=event.type||'mouseout';if(hasClass(scope.parentNode.parentNode,"SiteHeaderPanelLink")&&document.activeElement!=scope)
{removeClass(scope.parentNode.parentNode,"SiteHeaderPanelLinkHover");}
hoverTimeoutInt=setTimeout(function(){clearTimeout(hoverTimeoutInt);hideAndShowSubmenus(scope,eventType);},500);},keyDownHandler=function(event)
{var siteHeaderDropdownLink=getClosestSiteHeaderDropdownLink(this),node,nodeHeaderDropdownLink,links,i;flagEscKey=false;switch(event.keyCode)
{case 9:{flagKeyboardNavigation(true);if(hasClass(siteHeaderDropdownLink,"SiteHeaderBarItemOpen"))
{node=nextTabbableElement(this,event.shiftKey,true);if(node)
{nodeHeaderDropdownLink=getClosestSiteHeaderDropdownLink(node);if(siteHeaderDropdownLink&&nodeHeaderDropdownLink!==siteHeaderDropdownLink)
{event.preventDefault();removeClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen');setLinkTabIndexes(siteHeaderDropPanels[siteHeaderDropdownLink['data-index']],"-1");if(nodeHeaderDropdownLink)
{addClass(nodeHeaderDropdownLink,'SiteHeaderBarItemOpen');}
node.focus();return false;}}}
break;}
case 37:case 39:{event.preventDefault();if((event.keyCode==37&&!mirror)||(event.keyCode==39&&mirror))
{flagKeyboardNavigation(true);if(hasClass(this.parentNode.parentNode.parentNode,"SiteHeaderColumn-2"))
{var nextHeaderColumn=(mirror)?nextElementSibling(this.parentNode.parentNode.parentNode):previousElementSibling(this.parentNode.parentNode.parentNode);if(nextHeaderColumn)
{nextHeaderColumn.getElementsByTagName("A")[0].focus();}
return;}
var nextSiteHeaderRow=getNextSiteHeaderRow(this,true);if(nextSiteHeaderRow){nextSiteHeaderRow.getElementsByTagName("A")[0].focus();return;}
if(siteHeaderDropdownLink&&siteHeaderDropdownLink!=this.parentNode)
{node=previousElementSibling(siteHeaderDropdownLink);if(node&&hasClass(node,'SiteHeaderDropdownLink'))
{if(hasClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen'))
{addClass(node,'SiteHeaderBarItemOpen')}
node.getElementsByTagName("A")[0].focus();}else
{siteHeaderDropdownLink.getElementsByTagName("A")[0].focus();}}
else
{node=previousElementSibling(this.parentNode===siteHeaderDropdownLink?this.parentNode:this);if(node)
{if(node.nodeName.toLowerCase()=="a")
{node.focus();}
else if(hasClass(node,'SiteHeaderDropdownLink')&&focusable(firstElementChild(node)))
{if(hasClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen'))
{addClass(node,'SiteHeaderBarItemOpen')}
firstElementChild(node).focus();}}else
{i=siteHeaderBarItems.length;while(i>0)
{i--;node=siteHeaderBarItems[i];if(node.nodeName.toLowerCase()=='a'&&focusable(node))
{node.focus();break;}else if(hasClass(node,'SiteHeaderDropdownLink')&&focusable(firstElementChild(node)))
{if(hasClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen'))
{addClass(node,'SiteHeaderBarItemOpen')}
firstElementChild(node).focus();break;};}}}}
else if((event.keyCode==39&&!mirror)||(event.keyCode==37&&mirror))
{flagKeyboardNavigation(true);if(hasClass(this.parentNode.parentNode.parentNode,"SiteHeaderColumn-1"))
{var nextHeaderColumn=(!mirror)?nextElementSibling(this.parentNode.parentNode.parentNode):previousElementSibling(this.parentNode.parentNode.parentNode);if(nextHeaderColumn)
{nextHeaderColumn.getElementsByTagName("A")[0].focus();}
return;}
var nextSiteHeaderRow=getNextSiteHeaderRow(this);if(nextSiteHeaderRow){nextSiteHeaderRow.getElementsByTagName("A")[0].focus();return;}
node=nextElementSibling(siteHeaderDropdownLink||this);if(node)
{if(node.nodeName.toLowerCase()=='a'&&focusable(node))
{node.focus();}
else if(hasClass(node,'SiteHeaderDropdownLink')&&focusable(firstElementChild(node)))
{if(hasClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen'))
{addClass(node,'SiteHeaderBarItemOpen')}
firstElementChild(node).focus();}
else
{i=0;while(i<siteHeaderBarItems.length)
{node=siteHeaderBarItems[i];if(node.nodeName.toLowerCase()=='a'&&focusable(node))
{node.focus();break;}else if(hasClass(node,'SiteHeaderDropdownLink')&&focusable(firstElementChild(node)))
{if(hasClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen'))
{addClass(node,'SiteHeaderBarItemOpen')}
firstElementChild(node).focus();break;}
i++;}}}}
break;}
case 38:{event.preventDefault();clearToolTip();flagKeyboardNavigation(true);if(event.altKey&&siteHeaderDropdownLink)
{hideDropPanelAndFocusSiteHeaderDropdownLink(siteHeaderDropdownLink,false);return;}
node=nextTabbableElement(this,true,true);if(node)
{nodeHeaderDropdownLink=getClosestSiteHeaderDropdownLink(node);if(siteHeaderDropdownLink&&nodeHeaderDropdownLink!==siteHeaderDropdownLink)
{removeClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen');setLinkTabIndexes(siteHeaderDropPanels[siteHeaderDropdownLink['data-index']],"-1");if(nodeHeaderDropdownLink)
{addClass(nodeHeaderDropdownLink,'SiteHeaderBarItemOpen');}}
node.focus();}
break;}
case 40:{event.preventDefault();clearToolTip();flagKeyboardNavigation(true);node=nextTabbableElement(this,false,true);if(node)
{nodeHeaderDropdownLink=getClosestSiteHeaderDropdownLink(node);if(siteHeaderDropdownLink&&nodeHeaderDropdownLink!==siteHeaderDropdownLink)
{removeClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen');setLinkTabIndexes(siteHeaderDropPanels[siteHeaderDropdownLink['data-index']],"-1");if(nodeHeaderDropdownLink)
{addClass(nodeHeaderDropdownLink,'SiteHeaderBarItemOpen');}}
node.focus();}
break;}
case 27:{event.preventDefault();clearToolTip();hideAndShowSubmenus(this,'focus');flagKeyboardNavigation(false);flagEscKey=true;if(siteHeaderDropdownLink)
{hideDropPanelAndFocusSiteHeaderDropdownLink(siteHeaderDropdownLink,flagEscKey);}
else
{hideAndShowSubmenus(this,'closeall');}
break;}
case 32:case 13:{event.preventDefault();clearToolTip();flagKeyboardNavigation(false);if(siteHeaderDropdownLink)
{if(hasClass(siteHeaderDropPanels[siteHeaderDropdownLink['data-index']],'SiteHeaderDropPanelHidden'))
{addClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen');removeClass(siteHeaderDropPanels[siteHeaderDropdownLink['data-index']],'SiteHeaderDropPanelHidden');siteHeaderDropPanels[siteHeaderDropdownLink['data-index']].setAttribute('aria-hidden','false');setLinkTabIndexes(siteHeaderDropPanels[siteHeaderDropdownLink['data-index']],"0");node=siteHeaderDropdownLink.getElementsByTagName("A")[0];node.setAttribute('aria-expanded','true');if(siteHeaderDropdownLink===siteHeaderDropdownLinks[0])
{if(tooltipStringOpenLink)
{node.setAttribute("title",tooltipStringOpenLink);tooltipTimeout=setTimeout(function(){addToolTip(node);},450);}else
{node.removeAttribute("title");}}}else
{hideDropPanelAndFocusSiteHeaderDropdownLink(siteHeaderDropdownLink,false);window.open(this.href,(this.target||"_self"));}}
break;}
default:{var start,j,a,label,candidate,found=false,beforeLink=true;if(!siteHeaderDropdownLink)return;links=siteHeaderDropdownLink.getElementsByTagName('A');var start=0;for(j=0;j<links.length;j++){a=links[j];if(a==this){start=j;break;}}
for(j=start+1;j<links.length;j++){a=links[j];label=a.innerText||a.textContent;if(label.substring(0,1).toLowerCase()==keyCodeMap[event.keyCode]){a.focus();flagKeyboardNavigation(true);found=true;break;}}
if(!found){for(j=0;j<start;j++){a=links[j];label=a.innerText||a.textContent;if(label.substring(0,1).toLowerCase()==keyCodeMap[event.keyCode]){a.focus();flagKeyboardNavigation(true);break;}}}
break;}}},hideDropPanelAndFocusSiteHeaderDropdownLink=function(siteHeaderDropdownLink,escKey)
{var node;flagEscKey=escKey;removeClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen');addClass(siteHeaderDropPanels[siteHeaderDropdownLink['data-index']],'SiteHeaderDropPanelHidden');siteHeaderDropPanels[siteHeaderDropdownLink['data-index']].setAttribute('aria-hidden','true');setLinkTabIndexes(siteHeaderDropPanels[siteHeaderDropdownLink['data-index']],"-1");node=siteHeaderDropdownLink.getElementsByTagName("A")[0];if(siteHeaderDropdownLink===siteHeaderDropdownLinks[0])
{if(tooltipStringExpandMenu)
{node.setAttribute("title",tooltipStringExpandMenu);tooltipTimeout=setTimeout(function(){addToolTip(node);},450);}else
{node.removeAttribute("title");}}
node.setAttribute('aria-expanded','false');node.focus();flagEscKey=false;},clickHandler=function(event)
{event.stopPropagation();event.preventDefault();event=event||window.event;var scope=event.target;if(scope&&scope.parentNode&&hasClass(scope.parentNode,'SiteHeaderDropdownLink')&&hasClass(siteHeaderDropPanels[scope.parentNode['data-index']],'SiteHeaderDropPanelHidden'))
{clearToolTip();if(scope.parentNode===siteHeaderDropdownLinks[0])
{if(tooltipStringOpenLink)
{scope.setAttribute("title",tooltipStringOpenLink);tooltipTimeout=setTimeout(function(){addToolTip(scope);},450);}else
{scope.removeAttribute("title");}}
scope.setAttribute('aria-expanded','true');addClass(scope.parentNode,'SiteHeaderBarItemOpen');removeClass(siteHeaderDropPanels[scope.parentNode['data-index']],'SiteHeaderDropPanelHidden');siteHeaderDropPanels[scope.parentNode['data-index']].setAttribute('aria-hidden','false');setLinkTabIndexes(siteHeaderDropPanels[scope.parentNode['data-index']],"0");flagKeyboardNavigation(true);}else{var siteHeaderDropdownLink=getClosestSiteHeaderDropdownLink(this);if(siteHeaderDropdownLink)
{hideDropPanelAndFocusSiteHeaderDropdownLink(siteHeaderDropdownLink,false);}
if(event.target){if(hasClass(scope,'SiteHeaderIconNewWindowNoWrap')){window.open(event.target.parentNode.href,(event.target.parentNode.target||"_self"));}
else if(hasClass(scope,'SiteHeaderIconNewWindow')){window.open(event.target.parentNode.parentNode.href,(event.target.parentNode.parentNode.target||"_self"));}
else{window.open(event.target.href,(event.target.target||"_self"));}}
else{if(hasClass(event.srcElement,'SiteHeaderIconNewWindowNoWrap')){window.open(event.srcElement.parentNode.href,(event.srcElement.parentNode.target||"_self"));}
else if(hasClass(event.srcElement,'SiteHeaderIconNewWindow')){window.open(event.srcElement.parentNode.parentNode.href,(event.srcElement.parentNode.parentNode.target||"_self"));}
else{window.open(event.srcElement.href,(event.srcElement.target||"_self"));}}}},mouseMoveHandler=function(event)
{flagKeyboardNavigation(false);},flagKeyboardNavigation=function(bool)
{if(bool)
{addClass(siteHeaderBar,'SiteHeaderBarKeyboardNavigation');addEvent(siteHeaderBar,'mousemove',mouseMoveHandler);addEvent(document.body,"mousedown",bodyClickHandler);}else{removeClass(siteHeaderBar,'SiteHeaderBarKeyboardNavigation');removeEvent(siteHeaderBar,'mousemove',mouseMoveHandler);removeEvent(document.body,"mousedown",bodyClickHandler);}},bodyClickHandler=function(event)
{flagKeyboardNavigation(false);hideAndShowSubmenus(siteHeaderDropdownLinks[0],'closeall');},getClosestSiteHeaderDropdownLink=function(element)
{var siteHeaderBar=document.body,p=element.parentNode;while(p&&p!=siteHeaderBar)
{if(hasClass(p,'SiteHeaderDropdownLink'))
return p;p=p.parentNode;}
return null;},getClosestSiteHeaderRow=function(element)
{var siteHeaderBar=document.body,p=element;while(p&&p!=siteHeaderBar)
{if(hasClass(p,'SiteHeaderRow'))
return p;p=p.parentNode;}
return null;},getNextSiteHeaderRow=function(element,shiftKey)
{var closestSiteHeaderRow=getClosestSiteHeaderRow(element),i,next;if(!closestSiteHeaderRow)return null;for(i=0;i<=siteHeaderRows.length;i++)
{if(closestSiteHeaderRow===siteHeaderRows[i])
break;}
next=(shiftKey)?i-1:i+1;if(next<0||next>siteHeaderRows.length-1)return null;if(getClosestSiteHeaderDropdownLink(siteHeaderRows[next])!=getClosestSiteHeaderDropdownLink(closestSiteHeaderRow))return null;return siteHeaderRows[next];},setLinkTabIndexes=function(element,value)
{var i,ele,elements=element.getElementsByTagName("A");for(i=0;i<elements.length;i++)
{ele=elements[i];if(ele.tabIndex!==null&&ele.tabIndex!=="")
{ele.tabIndex=value;ele.setAttribute('tabindex',value);}}},hasClass=function(element,className)
{var regExp=new RegExp(new RegExp('(\\s*|^)'+className+'(\\s*|$)'));return element.className&&regExp.test(element.className);},addClass=function(element,className)
{if(!hasClass(element,className))element.className+=' '+className;},removeClass=function(element,className)
{if(hasClass(element,className))
{var regExp=new RegExp('^'+className+'(\\s*|$)|\\s*'+className);element.className=element.className.replace(regExp,'');}},getElementsByClassName=function(element,className)
{var a=[],i,ele,elements=element.getElementsByTagName('*');for(i=0;i<elements.length;i++)
{if(hasClass(elements[i],className))a.push(elements[i]);}
return a;},visible=function(element)
{while(element)
{if(element.style&&(element.style.visibility==='hidden'||element.style.display==='none'))
{return false;}
element=element.parentNode;}
return true;},focusable=function(element,isTabIndexNotNaN)
{var nodeName=element.nodeName.toLowerCase(),map,mapName,images,img,i;if('area'===nodeName){map=element.parentNode;mapName=map.name;if(!element.href||!mapName||map.nodeName.toLowerCase()!=='map'){return false;}
images=document.getElementsByTagName('IMG');for(i=0;i<images.length;i++)
{img=images[i];if(img.getAttribute('usemap')==='#'+mapName&&visible(img))
return true;}
return false;}
return(/input|select|textarea|button|object/.test(nodeName)?!element.disabled:'a'==nodeName?element.href||isTabIndexNotNaN:isTabIndexNotNaN)&&visible(element);},tabbable=function(element)
{var tabIndex=element.getAttribute('tabindex')?parseInt(element.getAttribute('tabindex')):NaN,isTabIndexNaN=isNaN(tabIndex);return(isTabIndexNaN||tabIndex>=0)&&focusable(element,!isTabIndexNaN);},nextTabbableElement=function(element,shiftKey,includeFocusable)
{var i,allElements=document.body.getElementsByTagName('*'),afterElement=false,candidate,current;for(i=0;i<allElements.length;i++)
{current=allElements.item(i);if(current==element)
{afterElement=true;if(candidate&&shiftKey)return candidate;}
else if((includeFocusable&&focusable(current))||tabbable(current))
{candidate=current;if(afterElement)
{return candidate;}}}},addToolTip=function(element,message)
{clearTimeout(tooltipTimeout);var title=message||element.getAttribute('title');if(title)
{element.removeAttribute('title');var tooltip=document.createElement('div'),tooltipId='tooltip_'+element.getAttribute('id'),tooltipSpan=document.createElement('span'),tooltipText=document.createTextNode(title);tooltip.setAttribute('id',tooltipId);tooltip.setAttribute('role','tooltip');addClass(tooltip,'SiteHeaderBarTooltip');tooltipSpan.appendChild(tooltipText);tooltip.appendChild(tooltipSpan);addEvent(tooltip,'focus',tooltip_focusHandler);element.setAttribute('aria-describedby',tooltipId);element.parentNode.insertBefore(tooltip,element.nextSibling);}},tooltip_focusHandler=function(event)
{var node=nextTabbableElement(event.target,false,true);if(node)node.focus();},clearToolTip=function()
{clearTimeout(tooltipTimeout);var tooltips=getElementsByClassName(document,'SiteHeaderBarTooltip'),j;for(j=0;j<tooltips.length;j++)
{var tooltip=tooltips[j],tooltipId=tooltip.getAttribute('id');element=document.getElementById(tooltipId.substring(8));if(element)
{element.setAttribute('title',tooltip.firstChild.firstChild.nodeValue);element.removeAttribute('aria-describedby');}
removeEvent(tooltip,'focus',tooltip_focusHandler);tooltip.parentNode.removeChild(tooltip);}},isAllWhitespace=function(node)
{return!(/[^\t\n\r ]/.test(node.data));},isIgnorable=function(node)
{return(node.nodeType==8)||((node.nodeType==3)&&isAllWhitespace(node));},previousElementSibling=function(sibling)
{while(sibling=sibling.previousSibling)
{if(!isIgnorable(sibling))return sibling;}
return null;},nextElementSibling=function(sibling)
{while(sibling=sibling.nextSibling)
{if(!isIgnorable(sibling))return sibling;}
return null;},lastElementChild=function(parentNode)
{var node=parentNode.lastChild;while(node){if(!isIgnorable(node))return node;node=node.previousSibling;}
return null;},firstElementChild=function(parentNode)
{var node=parentNode.firstChild;while(node){if(!isIgnorable(node))return node;node=node.nextSibling;}
return null;},dataOf=function(textNode)
{var data=textNode.data;data=data.replace(/[\t\n\r ]+/g,' ');if(data.charAt(0)==' ')
data=data.substring(1,data.length);if(data.charAt(data.length-1)==' ')
data=data.substring(0,data.length-1);return data;},addEvent=function(element,type,handler)
{if(element.addEventListener)
{element.addEventListener(type,handler,false);}else
{if(!handler['data-guid'])handler['data-guid']=addEvent.guid++;if(!element['data-events'])element['data-events']={};var handlers=element['data-events'][type];if(!handlers)
{handlers=element['data-events'][type]={};if(element['on'+type])handlers[0]=element['on'+type];element['on'+type]=handleEvent;}
handlers[handler['data-guid']]=handler;}},removeEvent=function(element,type,handler)
{if(element.removeEventListener)
{element.removeEventListener(type,handler,false);}else if(element['data-events']&&element['data-events'][type]&&handler['data-guid'])
delete element['data-events'][type][handler['data-guid']];},handleEvent=function(event)
{event=event||fixEvent(window.event);var returnValue=true;var handlers=this['data-events'][event.type];for(var i in handlers)
{if(!Object.prototype[i])
{this['data-handler']=handlers[i];if(this['data-handler'](event)===false)returnValue=false;}}
if(this['data-handler'])this['data-handler']=null;return returnValue;},fixEvent=function(event)
{event.preventDefault=fixEvent.preventDefault;event.stopPropagation=fixEvent.stopPropagation;return event;};fixEvent.preventDefault=function()
{this.returnValue=false;};fixEvent.stopPropagation=function()
{this.cancelBubble=true;};addEvent.guid=1;addEvent(window,'load',init);};$(document).ready(function(){if($("#SignInPanel").length>0){if($("#shMyAdobe").length>0){$("#shMyAdobe").hide();}}
else{if($("#shMyAdobe").length>0){$("#shMyAdobe").show();}}
if((document.getElementById("SiteHeader"))&&(!document.getElementById("loginLinkUrl"))){adobe.fn.initGlobalNavAccessibility();}});
adobe.fn.initReflowComponent=function(dispatcher,headElement,layoutName,cssFile){var css;var dispatcher=dispatcher,head=headElement,layoutName=layoutName,cssFile=cssFile;handleLayoutEvent(null,dispatcher.getLayoutEvent(layoutName));function handleLayoutEvent(event,layoutEvent){if(layoutEvent.name==layoutName){if(!css){css=new adobe.dom.CSSStyleSheet(cssFile);}
css[layoutEvent.active?'enable':'disable'](head);}}
jQuery(document).bind("adobe.reflow.LayoutChange",handleLayoutEvent);};
adobe.fn.initRssFeed=function(id,feedURL)
{function cuttext($text,$max)
{if($text.length>$max)
{$text=$text.substr(0,$max);$text=$text+" [...]";}
return $text;}
if($('#'+id+'feedTitle').length!=0)
{$.getFeed({url:feedURL,success:function(feed)
{$('#'+id+'feedTitle').html(feed.title);$('#'+id+'feedLink .RouterHeadingLink').attr('href',feed.link);var arr=feed.items;var max=140;var textToInsert=[];var i=0;var length=5;for(var a=0;a<length;a+=1)
{var item=arr[a];var date=new Date(item.updated);date=(date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear();textToInsert[i++]='<tr>';textToInsert[i++]='<th class="TableCell TableNumber">'+date+'</th>';textToInsert[i++]='<td>';textToInsert[i++]='<a target="_blank" href="'+item.link+'">'+cuttext(item.title,max)+'</a>';textToInsert[i++]='</td>';textToInsert[i++]='</tr>';}
$('#'+id+'feedItems').append(textToInsert.join(''));}});}};
adobe.fn.slider=function(e)
{var scrollPane=$("#"+e+" .ui-slider-pane"),scrollContent=$("#"+e+" .ui-slider-content"),scrollContentItems=$("#"+e+" .ui-slider-content .ui-slider-item"),scrollContentImages=$("#"+e+" .ui-slider-content .ui-slider-item img");var scrollItemsWidth=20;scrollContentItems.each(function()
{scrollItemsWidth+=$(this).innerWidth();});scrollContent.css('width',scrollItemsWidth);var scrollbar=$("#"+e+" .ui-slider-bar").slider({slide:function(event,ui)
{if(scrollContent.width()>scrollPane.width())
{scrollContent.css("margin-left",Math.round(ui.value/100*(scrollPane.width()-scrollContent.width()))+"px");}
else
{scrollContent.css("margin-left",0);}}});scrollbar.width("99%");scrollPane.css("overflow","hidden");var handleHelper=scrollbar.find(".ui-slider-handle").append("<span class='ui-icon ui-icon-grip-dotted-vertical ui-icon-small'></span>").wrap("<div class='ui-handle-helper-parent'></div>").parent();scrollContentImages.each(function()
{$(this).addClass('LayoutHAlignMiddle');});function sizeScrollbar()
{var remainder=scrollContent.width()-scrollPane.width();var proportion=remainder/scrollContent.width();var handleSize=scrollPane.width()-(proportion*scrollPane.width());scrollbar.find(".ui-slider-handle").css({width:handleSize,"margin-left":-handleSize/2});handleHelper.width("").width(scrollbar.width()-handleSize);}
function resetValue()
{var remainder=scrollPane.width()-scrollContent.width();var leftVal=scrollContent.css("margin-left")==="auto"?0:parseInt(scrollContent.css("margin-left"));var percentage=Math.round(leftVal/remainder*100);scrollbar.slider("value",percentage);}
function reflowContent()
{var showing=scrollContent.width()+parseInt(scrollContent.css("margin-left"),10);var gap=scrollPane.width()-showing;if(gap>0)
{scrollContent.css("margin-left",parseInt(scrollContent.css("margin-left"),10)+gap);}}
$(window).resize(function()
{resetValue();sizeScrollbar();reflowContent();});setTimeout(sizeScrollbar,10);};
adobe.fn.openModal=function(config)
{var $=jQuery;function handleWindowResize(event)
{var dimension=event.data.dimension;if(!dimension){return;}
var newsize=$(window)[dimension]();if(newsize==currentWindowSize[dimension])
{return;}
currentWindowSize[dimension]=newsize;var handler=event.data.handler;if(!handler){return;}
event.data.handler();}
var currentWindowSize={width:0,height:0};function createActiveLayoutHandler(element,dimensionKey,position,failSafePosition,dimensionBuffer)
{var dimensionValue=element.dialog("option",dimensionKey);var isAuto=dimensionValue=="auto";var handler=function()
{var viewSize=$(window)[dimensionKey]();if(isAuto)
{element.dialog("option",dimensionKey,dimensionValue);}
var tooBig=element.dialog("widget")[dimensionKey]()>viewSize;if(isAuto&&tooBig)
{element.dialog("option",dimensionKey,viewSize-dimensionBuffer);}
if(tooBig)
{element.dialog("option","position",failSafePosition);var v=parseInt(element.dialog("widget").css(failSafePosition));}
else
{element.dialog("option","position",position);}};if(dimensionValue=="auto")
{handler();element.resize(handler);}
return handler;}
function getValidDimension(dim,buffer)
{var out=parseInt(dim),finalDim='';if($.browser.msie&&parseFloat($.browser.version)>=7.0&&parseFloat($.browser.version)<8.0)
{finalDim="auto";}
else
{if(isNaN(out))
{finalDim="auto";}
else
{finalDim=(out+parseInt(buffer));}}
return finalDim;}
function createOpenModalHandler(config)
{var modal=$("#"+config.target),marginWidth=40,marginHeight=62;modal.dialog({modal:true,title:config.title||"",height:getValidDimension(config.height,marginHeight),width:getValidDimension(config.width,marginWidth),autoOpen:false,resizable:false,draggable:false,closeOnClick:true,open:function()
{if(config.external=="true"){embedSWF();}
if($.browser.msie&&parseFloat($.browser.version)>=8.0&&isNaN(config.height))
{modal.dialog('option','width',(modal.innerWidth()-20));modalRelocate();}
if($.browser.msie&&parseFloat($.browser.version)>=7.0&&parseFloat($.browser.version)<8.0)
{$('.ui-dialog-titlebar').css('width',(modal.innerWidth()-marginWidth));}
if($.browser.msie&&parseFloat($.browser.version)<=7.0)
{}
else
{$(window).bind("scroll",modalRelocate);}
$(window).bind("resize",{dimension:"height",handler:createActiveLayoutHandler(modal,'height','center','center',marginHeight)},handleWindowResize);$(window).bind("resize",{dimension:"width",handler:createActiveLayoutHandler(modal,'width','center','center',marginWidth)},handleWindowResize);if(modal.dialog("option","closeOnClick"))
{$(".ui-widget-overlay").bind('click',function()
{modal.dialog('close');});}},close:function()
{$(window).unbind("resize",handleWindowResize);if($.browser.msie&&parseFloat($.browser.version)<=7.0)
{}
else
{$(window).unbind("scroll",modalRelocate);}
if($.browser.msie&&parseFloat($.browser.version)>=7.0&&parseFloat($.browser.version)<8.0)
{$('.ui-dialog-titlebar').css('width','');}
if(modal.dialog("option","closeOnClick"))
{$(".ui-widget-overlay").unbind('click');}
modal.remove();}});function modalRelocate()
{modal.dialog('option','position',['center','center']);}
function modalLaunch(combinedXObjects,combinedYObjects)
{var modalX=null;var modalY=null;if(combinedXObjects!=null)
{modalX=($(window).width()-combinedXObjects)/2;modal.dialog('option','width',combinedXObjects);}
if(combinedYObjects!=null)
{modalY=($(window).height()-combinedYObjects)/2;modal.dialog('option','height',combinedYObjects);}
if(modalY!=null&&modalX!=null)
{modal.dialog('option','position',[modalX,modalY]);}
modal.dialog('open');}
function embedSWF(){var hrefValue=config.href;var hrefValues=new Array();hrefValues=hrefValue.split('/');var flashvars={fileID:hrefValues[5],context:hrefValues[4],embeded:"true",autoPlay:"true"};var params={menu:"false",wmode:"transparent",allowfullscreen:"true"};var id={'class':'ui-dialog-content ui-widget-content','name':'ui-dialog-content ui-widget-content'};swfobject.embedSWF("http://images.tv.adobe.com/cdn/swf/player.swf",config.target,config.width,config.height,"9.0.0","expressInstall.swf",flashvars,params,id);}
function openModal()
{modal.load(config.href,function(response,status)
{var external=config.external;if(status=="error"&&external=="undefined")
{return true;}
else
{var browserIE=$.browser.msie,browserVersion=parseFloat($.browser.version);if(browserIE&&browserVersion>=7&&browserVersion<8)
{$("#"+config.target).css('maxWidth',config.width);}
if(browserIE&&browserVersion<7)
{if($("#"+config.target+" img").length!=0)
{var newImg=new Image();newImg.src=modal.find("img").attr('src');var combinedXObjects=(newImg.width+marginWidth)-20;var combinedYObjects=newImg.height+marginHeight+11;modal.dialog('option','width',combinedXObjects);modal.dialog('option','height',combinedYObjects);modal.dialog('open');}
else if($("#"+config.target+" object").length!=0)
{combinedXObjects=(parseInt($("#"+config.target+" object").attr('width'))+marginWidth)-20;combinedYObjects=parseInt($("#"+config.target+" object").attr('height'))+marginHeight+8;modalLaunch(combinedXObjects,combinedYObjects);}
else
{var modalWidth=710;if(config.width>0)
{modalWidth=config.width;}
var modalHeight="auto";modal.dialog('option','width',width);modal.dialog('option','height',height);modal.dialog('open');}}
else
{modal.dialog('open');}}});return false;}
openModal();}
if(config===undefined)
{return;}
currentWindowSize.width=$(window).width();if(currentWindowSize.width>(parseInt(config.width)||0))
{var mid=config.target,e=$("#"+mid);if(e[0]==null)
{$('<div/>',{id:mid}).appendTo('body');}
createOpenModalHandler(config);}};
adobe.fn.optout=function(checkbox,form,input,button)
{var checkboxObj=$('#'+checkbox),formRadioButtons=$('#'+form+" input[type=radio]");function swapValues(target)
{formRadioButtons.each(function()
{$(this).attr('value',($(this).data(target)));});}
function checkOptOut()
{if(checkboxObj.is(":checked"))
{swapValues('trials-checked');}
else
{swapValues('trials-unchecked');}
adobe.ui.formChangeAction(form,input,button);}
checkOptOut();checkboxObj.change(function()
{checkOptOut();});};adobe.fn.optoutsingle=function(checkbox,form,button)
{var checkboxObj=$('#'+checkbox);checkboxObj.change(function()
{if($(this).is(":checked"))
{var newvalchecked=$(this).data('trials-checked');$("#"+form).find(button).attr('href',newvalchecked);}
else
{var newvalunchecked=$(this).data('trials-unchecked');$("#"+form).find(button).attr('href',newvalunchecked);}});};
adobe.fn.pageFilter=function(e)
{adobe.fn.pageFilter={};var menuBarID="#"+e,menuBar=$(menuBarID),menuControlID="MenuControl",menuControl=$('#'+menuControlID),menuShow=$(menuBarID+" .MenuShow"),menuButton=$(menuBarID+' .MenuDropButton'),menuPanel=menuBar.find("div[class*='MenuDropPanel']"),menuOpen=false;if(menuControl[0]==null)
{$('<div/>',{id:menuControlID}).appendTo('body');menuControl=$('#'+menuControlID);}
var menuDropWidth=$(menuBarID+' .MenuDrop').width(),menuPanelWidth=$(menuBarID+' .MenuDropPanel').width(),menuModifier=1,menuWidth;if($.browser.msie&&parseFloat($.browser.version)<=8.0)
{menuModifier=menuModifier+22;}
if(menuDropWidth>menuPanelWidth)
{menuWidth=menuDropWidth+menuModifier+"px";}
else
{menuWidth=menuPanelWidth+menuModifier+"px";}
$(menuBarID+' .MenuDrop').css('width',menuWidth);$(menuBarID+' .MenuDropPanel').css('width',menuWidth);menuShow.each(function()
{var targetShow=$(this).attr('rel'),moreLink=$(this).attr('href');$(this).bind('click',function(event)
{event.preventDefault();var menuToggle=$('.MenuToggle');menuToggle.each(function()
{if($(this).attr('id')!='#'+targetShow)
{menuToggle.addClass('UIHide');}});$('#'+targetShow).removeClass('UIHide');var menuSelected=$(menuBarID+' .MenuDropItemSelected').html();menuBar.parents('td').siblings('.MenuMultiPanel').find('a.RouterLink').attr('href',moreLink);menuBar.find('.MenuButton a').html(menuSelected);$('.MenuDropPanel').slideUp('fast').removeClass('MenuShow');menuButton.removeClass('LayoutFlipV');menuControl.removeClass('MenuClose');});});adobe.fn.pageFilter.toggleMenuOn=function()
{menuPanel.slideDown('fast').addClass('MenuShow');menuControl.addClass('MenuClose');menuButton.addClass('LayoutFlipV');menuControl.unbind('click');menuControl.bind('click',function()
{$(menuBarID+' .MenuDropPanel').slideUp('fast').removeClass('MenuShow');menuButton.removeClass('LayoutFlipV');menuControl.removeClass('MenuClose');});$('body').unbind('keyup');$('body').bind('keyup',function(event)
{if(event.keyCode=='27')
{event.preventDefault();$(menuBarID+' .MenuDropPanel').slideUp('fast').removeClass('MenuShow');menuButton.removeClass('LayoutFlipV');menuControl.removeClass('MenuClose');}});};adobe.fn.pageFilter.toggleMenuOff=function()
{$('.MenuDropPanel').slideUp('fast').removeClass('MenuShow');menuControl.removeClass('MenuClose');menuButton.removeClass('LayoutFlipV');menuPanel.slideUp('fast').removeClass('MenuShow');menuControl.removeClass('MenuClose');menuButton.removeClass('LayoutFlipV');};menuBar.find("div[class*='MenuDropName']").bind('click',function()
{if(menuControl.hasClass('MenuClose')&&menuPanel.hasClass('MenuShow'))
{adobe.fn.pageFilter.toggleMenuOff();menuOpen=false;}
else if(!menuOpen)
{adobe.fn.pageFilter.toggleMenuOn();menuOpen=true;}
else
{adobe.fn.pageFilter.toggleMenuOn();}
return false;});var menuDropItem=new Array();$(menuBarID+' .MenuDropItem').each(function(i)
{$(this).attr('id',e+'MenuDropItem'+[i]);menuDropItem[i]='#'+$(this).attr('id');if($(menuBarID+' .MenuDropItemSelected').size()==0)
{$(menuDropItem[0]).addClass('MenuDropItemSelected');}
$(menuDropItem[i]).bind('click',function()
{$(menuBarID+' .MenuDropItem').removeClass('MenuDropItemSelected');$(this).addClass('MenuDropItemSelected');});});};
adobe.fn.panelToggle=function(triggerId,targetId,isOpen)
{var element=$("#".concat(triggerId));element.attr("tabindex","0");element.css("cursor","default");var target=$("#".concat(targetId)),icon=element.find(".Icon:first"),time=0;open(isOpen);time=140;element.bind("click",click);function click(event)
{open(!isOpen);}
function out()
{open(false);element.bind("mouseout",out);}
function open(yes)
{yes=Boolean(yes);if(yes)
{target.slideDown(time,function()
{isOpen=yes;icon.addClass("IconSmallerMinus");icon.removeClass("IconSmallerAdd");});}
else
{target.slideUp(time,function()
{isOpen=yes;icon.addClass("IconSmallerAdd");icon.removeClass("IconSmallerMinus");});}}};
adobe.fn.ratings=function(target,xml)
{var body=$('body'),rating,num,cdnPrefix=adobe.http.cdnprefix(),xmlInProgress=body.data('XmlDataInProgress'),xmlDataDone=body.data('XmlDataDone');if(xmlDataDone==null)
{if(!body.data('targets'))
{body.data('targets',[target]);}
else
{body.data('targets').push(target);}
if(xmlInProgress==null)
{body.data('XmlDataInProgress','true');var head=$("head")[0],ratingsCss=new adobe.dom.CSSStyleSheet(cdnPrefix+"/include/style/ratings.css");ratingsCss.enable(head);body.bind('XmlDataChange',function(e,id,rating)
{$('#'+id).addClass('StarRatings-'+rating);});$.get(xml,function(dataObject)
{$(dataObject).find("Product").each(function()
{rating=$(this).find('ReviewStatistics').find('AverageOverallRating').text(),num=new Number(rating);rating=num.toFixed(1);rating=rating.replace('.','_');body.data($(this).attr('id'),{productRating:rating});});body.data('XmlDataDone','true');$.each(body.data('targets'),function(index,id)
{renderRating(id);});});}}
else
{renderRating(target);}
function renderRating(pID)
{if(body.data(pID))
{body.trigger('XmlDataChange',[pID,body.data(pID).productRating]);}
else
{$('#'+pID).addClass('LayoutHidden');}}};
adobe.fn.resizeObjectElement=function(objectId,width,height){function setAtt(name,value){if(isNaN(value)){return;}
if(e.hasAttribute(name)){e[name]=value;}
if(e.hasAttribute("style")){e.style[name]=value+"px";}}
var h=parseInt(height),w=parseInt(width),e=window.document.getElementById(objectId.toString());if(e==null){return;}
setAtt("height",h);setAtt("width",w);};
adobe.fn.stockQuote=function(target)
{var stockPod=$('#'+target);if(stockPod!=null&&stockPod!="undefined"){stockPod.find('div.miniQuoteWrapper div.change').each(function(){if(parseFloat($(this).text())>=0){$(this).addClass('StockQuotePositive').html("&#9650;"+$(this).text());}else{$(this).addClass('StockQuoteNegetive').html("&#9660;"+$(this).text());}});stockPod.find('div.miniQuoteWrapper div.symbol').each(function(){if($(this).text().replace(/ /g,'')=="$NASX"){$(this).text("NASDAQ");}});}};adobe.fn.stockQuoteDate=function(d,target){var stockDatePod=$('#'+target);var s=function(a,b){return(1e15+a+"").slice(-b)};if(typeof d==='undefined'){d=new Date();};var dt=s(d.getMonth()+1,2)+'/'+
s(d.getDate(),2)+'/'+
d.getFullYear()+' '+
s(d.getHours(),2)+':'+
s(d.getMinutes(),2)+':'+
s(d.getSeconds(),2);if(stockDatePod!=null&&stockDatePod!="undefined"){stockDatePod.find('div.StockQuoteDate').each(function(){var t=$(this).html()+' '+dt;$(this).html(t);});}};
adobe.fn.toggle=function(click,toggle,toggle2,slide,prevent,swap)
{var toggleId=$("#"+toggle),clickId=$("#"+click);toggleId.attr('aria-hidden','true');if(toggle2!=undefined&&toggle2!='')
{var toggleId2=$("#"+toggle2);toggleId2.attr('aria-hidden','true');}
clickId.bind('click',function(e)
{if(!!prevent){e.preventDefault();}
(toggleId.attr('aria-hidden')=='true')?toggleId.attr('aria-hidden','false'):toggleId.attr('aria-hidden','true');(slide!=undefined&&slide!='')?toggleId.slideToggle(slide):(swap)?swapDivs(toggleId2,toggleId):toggleId.toggle();if(toggle2!=undefined&&toggle2!='')
{(toggleId2.attr('aria-hidden')=='true')?toggleId2.attr('aria-hidden','false'):toggleId2.attr('aria-hidden','true');(slide!=undefined&&slide!='')?toggleId2.slideToggle(slide):(swap)?swapDivs(toggleId,toggleId2):toggleId2.toggle();}});function swapDivs(id1,id2)
{id1.show();id2.hide();}};
adobe.http.cdnprefix=function(environment)
{var cdnPrefix,envObj=[],hostProtocol=(document.location.protocol=='https:'?'https':'http'),host=URLParser.host;var cdnAddy=(hostProtocol=='https')?hostProtocol+'://wwwimages2':hostProtocol+'://wwwimages';if(host.match(/qa/g)!=null)
{host='qa';}
switch(host)
{case"www.adobe.com":case"author.corp.adobe.com":case"author-02.corp.adobe.com:4502":case"adobe.com":cdnPrefix=cdnAddy+".adobe.com/www.adobe.com";break;case"www.stage.adobe.com":case"www.stage2.adobe.com":case"author.stage.corp.adobe.com":case"author-s-02.corp.adobe.com:4502":cdnPrefix=cdnAddy+".stage.adobe.com/www.stage.adobe.com";break;case"qa":cdnPrefix="";break;default:cdnPrefix="";break;}
return(environment!=null)?envObj[environment]:cdnPrefix;};
adobe.http.getCookies=function(cookie){function trim(s){return((s===undefined)?"":String(s).replace(/^\s*/,"").replace(/\s*$/,""));}
var o={};if(typeof cookie=='string'){var cookies=cookie.split(";");for(var i=0,l=cookies.length;i<l;i++){var pieces=cookies[i].split("=");var name=trim(pieces[0]),content=trim(pieces[1]);o[name]=new adobe.http.Cookie(name,content);}}
return o;};adobe.http.Cookie=function(name,content){this.setName(name);this.setContent(content);return this;};adobe.http.Cookie.prototype={setName:function(name){this.name=String(name);return this;},setContent:function(content){this.content=(typeof content=='string')?content:"";return this;},setExpires:function(milliseconds){this.expires=isNaN(milliseconds)?0:milliseconds;return this;},setSecure:function(secure){this.secure=Boolean(secure);return this;},setDomain:function(domain){this.domain=encodeURI(String(domain));return this;},setPath:function(path){this.path=encodeURI(String(path));return this;},destroy:function(){this.content="";this.setExpires(-86400000);return this;},toString:function(){var cookie=this.name+"="+this.content;if(!isNaN(this.expires)){var date=new Date();date.setTime(date.getTime()+this.expires);cookie+=";expires="+date.toGMTString();}
if(this.path){cookie+=";path="+this.path;}
if(this.domain){cookie+=";domain="+this.domain;}
if(this.secure){cookie+=";secure";}
return cookie;}};adobe.http.Cookie.is=function(func){return func!==undefined&&adobe.http.Cookie.prototype.isPrototypeOf(func);};
adobe.http.getScript=function(url,options)
{options=$.extend(options||{},{dataType:"script",cache:true,url:url});return jQuery.ajax(options);};
adobe.ui.CartFacade=function(overlay_id,flash_id){this.overlayElement=null;this.distributionMethod="";this.distributionMethodDisplayed="";this.storeTypeDisplayed="";this.categoryPath="";this.categoryPathDisplayed="";this.contextPath="";this._domain="";this.defaultStore="";this.defaultCountry="";this.requiredFlashVersion="0.0.0";this.detectedFlashVersion="";this.storeRegion="";this.storeRegionCookie=new adobe.http.Cookie("storeregion").setPath('/').setExpires(86400002*365);this.productName="";this.emailTrackingId="";this.storeType="";this.o_id=overlay_id;this.f_id=flash_id;this.flashObject=null;};adobe.ui.CartFacade.prototype={closeCartOverlay:function(){if(!this.overlayElement){return;}
this.overlayElement.dialog('close');},getDetectedFlashVersion:function(){if(!this.detectedFlashVersion){var plVersion=swfobject.getFlashPlayerVersion();this.detectedFlashVersion=plVersion.major+"."+plVersion.minor+"."+plVersion.release;}
return this.detectedFlashVersion;},getStoreRegion:function(){if(this.storeRegion){return this.storeRegion;}else{var cookie=adobe.http.getCookies(window.document.cookie).storeregion;if(cookie){return cookie.content;}}
return"";},isOverlaySupported:function(){var supported=this.isFlashVersionSupported();supported=supported&&!(window.opera&&(/^Win/.test(window.navigator.platform)));return supported;},isFlashVersionSupported:function(){var playerVersion=this.itemizeFlashVersion(this.getDetectedFlashVersion());var requiredVersion=this.itemizeFlashVersion(this.requiredFlashVersion);for(var i=0;i<playerVersion.length;i++){var current=playerVersion[i]||0,required=requiredVersion[i]||0;if(current>required){break;}else if(current==required){continue;}else{return false;}}
return true;},itemizeFlashVersion:function(version){var v=String(version).split("."),r=[];for(var i=0,l=v.length;i<l;i++){r.push(parseFloat(v[i]));}
return r;},openCartOverlay:function(){if((this.overlayElement==null)||(this.distributionMethod!=this.distributionMethodDisplayed)||(this.storeType!=this.storeTypeDisplayed||this.categoryPath!=this.categoryPathDisplayed)){var vars={categorypath:this.categoryPath,contextpath:this.contextPath,defaultstore:this.defaultStore,defaultcountry:this.defaultCountry,distmethod:this.distributionMethod,flashversion:this.getDetectedFlashVersion(),omnitureproductname:this.productName,promoid:this.emailTrackingId,storeregion:this.getStoreRegion(),storetype:this.storeType},params={allowScriptAccess:"sameDomain",id:this.f_id},attrs={id:this.f_id,name:this.f_id,allowScriptAccess:"sameDomain"},_this=this;var overlayElement=document.getElementById(this.o_id);if(!overlayElement){var body=document.getElementsByTagName("body")[0];var div=document.createElement("div");div.setAttribute("id",this.o_id);overlayElement=body.appendChild(div);}
this.overlayElement=$("#"+this.o_id);var flashObject=document.getElementById(this.f_id);if(!flashObject){flashObject=overlayElement.appendChild(document.createElement("div"));flashObject.setAttribute("id",this.f_id);}
this.overlayElement.dialog({modal:true,autoOpen:false,dialogClass:"CartDialog",resizable:false,draggable:false,width:850,height:535,closeOnClick:false,open:function(){swfobject.replaceSWF(_this.contextPath+"/swf/store/flex/StatelessStore.swf",_this.f_id,"850","535",_this.requiredFlashVersion,"",vars,params,attrs,function(event){if(event.success){_this.flashObject=document.getElementById(_this.f_id);}});}});this.distributionMethodDisplayed=this.distributionMethod;this.storeTypeDisplayed=this.storeType;this.categoryPathDisplayed=this.categoryPath;}
this.overlayElement.dialog('open');},resizeCartOverlay:function(width,height){if(!this.overlayElement){return;}
if(this.flashObject){this.flashObject.height=height;this.flashObject.width=width;this.flashObject.sizeChanged(1);}
this.overlayElement.dialog("option",{height:height,width:width,position:"center"});},setCategoryPath:function(catpath){this.categoryPath=String(catpath);},setContextPath:function(path){this.contextPath=String(path);},setDefaultCountry:function(countryid){this.defaultCountry=String(countryid);},setDefaultStore:function(storeid){this.defaultStore=String(storeid);},setDistributionMethod:function(distmethod){this.distributionMethod=String(distmethod);},setDomain:function(domain){this._domain=String(domain);this.storeRegionCookie.setDomain(this._domain);},setEmailTrackingId:function(prmid){this.emailTrackingId=String(prmid);},setProductName:function(productname){this.productName=String(productname);},setRequiredFlashVersion:function(version){this.requiredFlashVersion=String(version);},setStoreRegion:function(region){this.storeRegion=String(region);window.document.cookie=this.storeRegionCookie.setContent(this.storeRegion).toString();},setStoreType:function(typestr){this.storeType=String(typestr);}};
var SearchBuddy=(function(){_SearchBuddyInstance=function(){_SearchBuddy={};_SearchBuddy.IDS={gnavForm:"#globalnav-search",siteSearch:"#site-search",searchInput:"#search-input",searchBuddySubmit:"search-buddy-submit",searchLocField:"#searchbuddy-loc",resultsContainer:"sb-results",resultsBody:"sb-results-body",resultsList:"sb-result-list"};_SearchBuddy.CSS={activated:"activated",highlight:"highlight",noResult:"no-result",searchResult:"search-result",pulloutItem:"pullout-item",pulloutContent:"pullout-content",linkList:"link-list",searchSuggestion:"search-suggestion",searchAll:"txtright search-all"};this.initialize();};_SearchBuddyInstance.prototype={initialize:function(URLS,STRINGS){if($(_SearchBuddy.IDS.gnavForm)==null)return;if(!$(_SearchBuddy.IDS.gnavForm).hasClass("searchbuddy"))return;this.URLS=$.extend({searchBuddy:"/cfusion/search/buddy/searchbuddy.cfm",searchResults:"/cfusion/search/index.cfm"},URLS);this.gnavForm=$(_SearchBuddy.IDS.gnavForm);this.siteSearch=$(_SearchBuddy.IDS.siteSearch);this.input=$(_SearchBuddy.IDS.searchInput);if($(_SearchBuddy.IDS.searchLocField).val()==null){this.loc="en_us";}else{this.loc=$(_SearchBuddy.IDS.searchLocField).val();}
this.locJSON=this.loc;this.input.attr("autocomplete","off");this.term=this.input.val();if((this.loc=="en_us")||(this.loc=="en_gb")||(this.loc=="en_xap")||(this.loc=="au")){this.STRINGS=$.extend({searchForElipsis:"Search for...",searchFor:"Search for",seeAllResults:"See all search results &#8250;",delay:0.015},STRINGS);if(this.loc=="en_xap"){this.locJSON="en_sea";}
if(this.loc=="au"){this.locJSON="en_au";}}
else if(this.loc=="de"){this.locJSON="de_de";this.STRINGS=$.extend({searchForElipsis:"Suchen...",searchFor:"Suchen",seeAllResults:"Alle Suchergebnisse anzeigen &#8250;",delay:0.015},STRINGS);}
else if(this.loc=="es_es"){this.STRINGS=$.extend({searchForElipsis:"Buscar...",searchFor:"Buscar",seeAllResults:"Ver todos los resultados de búsqueda &#8250;",delay:0.015},STRINGS);}
else if(this.loc=="fr_fr"){this.STRINGS=$.extend({searchForElipsis:"Rechercher...",searchFor:"Rechercher",seeAllResults:"Voir les résultats de la recherche &#8250;",delay:0.015},STRINGS);}
else if(this.loc=="ja_jp"){this.STRINGS=$.extend({searchForElipsis:"検索...",searchFor:"検索",seeAllResults:"すべての検索結果を見る &#8250;",delay:0.015},STRINGS);}
this.input.keyup($.proxy(this,"handleKeyCheck"));this.gnavForm.bind("submit",$.proxy(this,"handleFormSubmit"));this.goURL="";this.setupForResults();},setupForResults:function(){this.resultsContainer=$('<div />',{"id":_SearchBuddy.IDS.resultsContainer});this.resultsBody=$('<div />',{"id":_SearchBuddy.IDS.resultsBody});this.resultsContainer.appendTo(this.siteSearch);this.resultsBody.appendTo(this.resultsContainer);this.siteSection=URLParser.siteLevel;this.siteSection=(this.siteSection=="")?"home":this.siteSection;this.siteSection=(URLParser.subdomain=="get")?("get:"+this.siteSection):this.siteSection;this.siteSection=(URLParser.subdomain=="kb")?("kb:"+this.siteSection):this.siteSection;this.siteSection+=(URLParser.siteSection==null||URLParser.siteSection=="")?"":":"+URLParser.siteSection;var siteSection_input=$("<input>",{"name":"siteSection","type":"hidden","value":this.siteSection});siteSection_input.appendTo(this.gnavForm);},handleFormSubmit:function(event){var keyCode=event.keyCode||event.which;this.gnavForm.attr('action','/go/gnav_search');if(this.goURL!=""||this.input.val()==""||this.input.val()==this.input.attr("title")){return false;}
if(event.type=="click"||keyCode=="13"||keyCode=="0"){if(this.input.val()==this.input.attr("title"))this.input.val("");this.gnavForm.trigger("submit");}},handleKeyCheck:function(e){var keyEvent=e.keyCode||e.which;this.keyMap={SHIFT:e.shiftKey,ALT:e.altKey,CTRL:e.ctrlKey,ESC:keyEvent==27,RETURN:keyEvent==13,TAB:keyEvent==9,DELETE:keyEvent==8||keyEvent==46,DOWN:keyEvent==40,UP:keyEvent==38,ALPHANUMERIC:((keyEvent>=48&&keyEvent<=57)||(keyEvent>=65&&keyEvent<=90))};if(this.keyMap.ALPHANUMERIC||this.keyMap.DELETE||this.keyMap.BACKSPACE){this.setTerm();}else{this.handleMenuNavigation(e);}},handleMenuNavigation:function(e){if(!this.json){e.preventDefault();return;}
if(this.keyMap.RETURN){e.preventDefault();if(this.input.val()==""||this.input.val()==this.input.attr("title")){return false;}else if(this.goURL==""){this.gnavForm.submit();return false;}else{window.location.href=this.goURL;return;}}
if(this.keyMap.ESC){this.deactivateMenu();this.goURL="";this.input.value="";}
if(this.keyMap.TAB){if(this.goURL.empty()){this.deactivateMenu();}}
if(this.keyMap.DELETE){this.handleResultsMenu();}
var resultLinks=$('#'+_SearchBuddy.IDS.resultsBody+' a');if(this.keyMap.DOWN){e.preventDefault();if(this.selectedIndex<resultLinks.length){if($(resultLinks[this.selectedIndex]).has("img").length)this.selectedIndex++;var currentLink=$(resultLinks[this.selectedIndex]);if(this.selectedIndex>1){var lastLink=resultLinks[this.selectedIndex-1];if($(resultLinks[this.selectedIndex]).has("img").length)lastLink=resultLinks[this.selectedIndex-2];$(lastLink).removeClass(_SearchBuddy.CSS.highlight);}
currentLink.addClass(_SearchBuddy.CSS.highlight);this.selectedIndex++;var linkString=(currentLink.attr("href"))?currentLink.attr("href").toString():false;window.status=(linkString)?linkString:"";this.goURL=(linkString)?linkString:"";}else if(resultLinks.length==1){$(resultLinks[0]).addClass(_SearchBuddy.CSS.highlight);}}
if(this.keyMap.UP){e.preventDefault();this.selectedIndex--;if(this.selectedIndex==1)this.selectedIndex=2;if(this.selectedIndex>1&&this.selectedIndex<resultLinks.length){if($(resultLinks[this.selectedIndex-1]).has("img").length){$(resultLinks[this.selectedIndex]).removeClass(_SearchBuddy.CSS.highlight);this.selectedIndex--;$(resultLinks[this.selectedIndex-1]).addClass(_SearchBuddy.CSS.highlight);}else{$(resultLinks[this.selectedIndex]).removeClass(_SearchBuddy.CSS.highlight);$(resultLinks[this.selectedIndex-1]).addClass(_SearchBuddy.CSS.highlight);}
var linkString=($(resultLinks[this.selectedIndex-1]).attr("href"))?$(resultLinks[this.selectedIndex-1]).attr("href"):"";window.status=linkString;this.goURL=linkString;}}},setTerm:function(){this.term=this.input.val();this.term=this.term.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');if(this.term==""){this.deactivateMenu();}else{_search=this.search(this.term);setTimeout('_search',this.STRINGS.delay);}},search:function(){this.baseURL=this.URLS.searchBuddy;var sURL=this.baseURL+"?pre="+this.term+"&s="+this.siteSection+"&loc="+this.locJSON;$.getJSON(sURL,$.proxy(this,"loadJSON"));this.selectedIndex=1;this.goURL="";},loadJSON:function(originalRequest){this.json=originalRequest;if($('#'+_SearchBuddy.IDS.resultsList)!=null){$('#'+_SearchBuddy.IDS.resultsList).remove();}
if(this.json.HUBLETS.length==0&&this.json.SUGGESTIONS.length==0){this.renderNoResults();}else{this.renderResults();}},activateMenu:function(){$(_SearchBuddy.IDS.siteSearch).addClass(_SearchBuddy.CSS.activated);},deactivateMenu:function(){this.gnavForm.trigger("searchbuddy:closed");if($("#"+_SearchBuddy.IDS.resultsList)!=null){$("#"+_SearchBuddy.IDS.resultsList).remove();this.siteSearch.removeClass(_SearchBuddy.CSS.activated);this.ignoreMouseHover();}},renderNoResults:function(){this.deactivateMenu();this.activateMenu();var dl=$('<dl/>',{"id":_SearchBuddy.IDS.resultsList});var ddLink=this.URLS.searchResults+"?loc="+this.loc+"&term="+this.term;var ddText=this.STRINGS.searchFor+' "'+this.term+'" &#8250;';var dd=$('<dd/>',{'class':_SearchBuddy.CSS.noResult}).html($('<a/>',{'href':ddLink}).html(ddText));this.resultsBody.append(dl);dl.append(dd);this.goURL="";this.watchDocumentClicks();},renderResults:function(json){this.activateMenu();var hublets=this.json.HUBLETS;var suggestions=this.json.SUGGESTIONS;var dl=$('<dl/>',{id:_SearchBuddy.IDS.resultsList});dl.appendTo(this.resultsBody);$.each(hublets,function(index,hub){var sbrIndex="sbr-"+index;var imgURL="http://wwwimages.adobe.com/www.adobe.com/"+hub.ICONURL;var dd=$('<dd/>',{'id':sbrIndex,'class':_SearchBuddy.CSS.searchResult});var image=$('<div/>',{'class':_SearchBuddy.CSS.pulloutItem}).html($('<a/>',{'href':hub.HOMEPAGEURL}).html($('<img>',{'src':imgURL})));var content=$('<div/>',{'class':_SearchBuddy.CSS.pulloutContent});var h4=$('<h4/>',{'href':hub.HOMEPAGEURL}).html($('<a/>',{'href':hub.HOMEPAGEURL}).html(hub.TITLE));var linklist=$('<ul/>',{'class':_SearchBuddy.CSS.linkList});$.each(hub.LINKS,function(index,link){var li=$('<li/>').html($('<a/>',{'href':link.URL}).html(link.TITLE));linklist.append(li);});dl.append(dd);dd.append(image);dd.append(content);content.append(h4).append(linklist);});$.each(suggestions,function(index,suggest){var dd=$('<dd/>',{'id':"sbs-"+index,'class':_SearchBuddy.CSS.searchSuggestion});var link=$('<h4/>').html($('<a/>',{'href':suggest.DESTINATIONURL}).html(suggest.TITLE));var p=$('<p/>').html(suggest.BLURB);dl.append(dd);dd.append(link);dd.append(p);});var searchAllDD=$('<dd/>',{"class":_SearchBuddy.CSS.searchAll});var searchAllLink=$('<a/>',{'id':_SearchBuddy.IDS.searchBuddySubmit}).html(this.STRINGS.seeAllResults).bind({'click':$.proxy(this,"handleFormSubmit"),'keydown':$.proxy(this,"handleFormSubmit")});searchAllDD.append(searchAllLink);dl.append(searchAllDD);this.watchDocumentClicks();this.watchMouseHover();},handleOutsideClicks:function(event){var inResultsContainer=$(event.target).parents('#'+_SearchBuddy.IDS.resultsContainer).length>0;var isInputField=$(event.target).is("#search-input");if(!inResultsContainer&&!isInputField){this.deactivateMenu();this.ignoreDocumentClicks();}},watchDocumentClicks:function(){$(document).bind('click touchstart',$.proxy(this,"handleOutsideClicks"));},ignoreDocumentClicks:function(){$(document).unbind('click touchstart',$.proxy(this,"handleOutsideClicks"));},handleMouseHover:function(event){$('#'+_SearchBuddy.IDS.resultsList+" a."+_SearchBuddy.CSS.highlight).removeClass(_SearchBuddy.CSS.highlight);this.selectedIndex=1;},watchMouseHover:function(){this.resultsBody.bind('mouseover',$.proxy(this,"handleMouseHover"));},ignoreMouseHover:function(){this.resultsBody.unbind('mouseover',$.proxy(this,"handleMouseHover"));}};return _SearchBuddyInstance;})();$(document).ready(function(){new SearchBuddy();});
adobe.ui.caroSlider=function(target,settings)
{var targetID=$(target),defaultSettings={responsive:true,items:{visible:1,width:950},circular:true,infinite:true,auto:false,direction:"left",align:"left",mousewheel:true,swipe:{onMouse:true,onTouch:true},prev:{button:target+"_prev",key:"left"},next:{button:target+"_next",key:"right"},pagination:target+"_pagination"},allSettings=$.extend(true,defaultSettings,settings);targetID.caroSlider(allSettings);};
adobe.ui.formChangeAction=function(id,type,selector)
{id=$('#'+id);id.unbind('change');function changeAction()
{id.find(selector).attr('href',id.find(type).attr('value'));}
changeAction();id.change(function()
{changeAction();});};
adobe.ui.formClearInput=function(id,input)
{var target=$("#"+id);if(input==undefined)
{target.find(':input').each(function()
{$(this).bind('click',function()
{switch(this.type)
{case'password':case'text':case'textarea':$(this).val('');break;}});});}
else
{input=$("#"+input);input.bind('click',function()
{switch(this.type)
{case'password':case'text':case'textarea':$(this).val('');break;}});}};
adobe.ui.formDestroy=function(target)
{target=$('#'+target);if(target.html()!='')
{var targetDestroy=target.find('select').attr('id');$('#'+targetDestroy).selectBox('destroy');}};
adobe.ui.formLoad=function(formID,target,dir,ext)
{target='#'+target;if(dir===undefined)
{dir="";}
if(ext===undefined)
{ext=".html";}
$(target).empty();if(target=="#MarketSegment-target")
{$('#MemberType-target').empty();}
var formIDValue=$("#"+formID+" option:selected").val();if(formIDValue!==undefined&&formIDValue!='')
{$.get(dir+formIDValue+ext,function(data)
{$(target).html(data);});}};
adobe.ui.selectSwitch=function(e,toggle)
{var target='';$("#"+e).change(function()
{$("#"+e+" option:selected").each(function()
{if(target!='')
{$('#'+target).addClass("LayoutMinV LayoutMask").removeClass("selectDisabled");$('#'+target+' select').selectBox('value',"");$('#'+target+" .selectDisabled").removeClass("LayoutMinV LayoutMask");}
target=$(this).val();if(target!='')
{$('#'+target).removeClass("LayoutMinV LayoutMask").addClass("selectDisabled");$('#'+target+' select').selectBox('value',"");$('#'+target+" .selectDisabled").addClass("LayoutMinV LayoutMask");}});if(toggle!==undefined&&toggle!='')
{if($("#"+toggle).attr('disabled')&&!$('#'+target).hasClass("selectDisabled"))
{$('#'+toggle).selectBox('enable');}
else
{$('#'+toggle).selectBox('disable');}}});};
adobe.ui.formSubmit=function(formID,click)
{var id=$("#"+formID);if(click!=undefined)
{$(click).bind('click',function()
{if(id)
{id.submit();}});}
else
{if(id)
{id.submit();}}};
adobe.ui.formValidate=function(target,thanks,meta,attr)
{meta=(meta==null)?true:meta;var targetForm=$('#'+target),thanksDiv=$('#'+thanks),cdnPrefix=adobe.http.cdnprefix();if(target!==undefined)
{targetForm.attr('novalidate','novalidate');$.getScript(cdnPrefix+'/include/script/jquery/plugins/OnDemand/jquery.form.js');targetForm.find(':submit').before('<div id="SubmitStatus" />');var SubmitStatus=$('#SubmitStatus');var validateOptions={wrapper:"div class='LayoutRow'",errorClass:"FormError",errorPlacement:function(error,element)
{var validator=$.data(targetForm[0],'validator'),elementIdOrName=validator.idOrName(element[0]),elementLabel=$('label[for="'+elementIdOrName+'"]').eq(0),isMacOriOS=navigator.userAgent.match(/Mac|iPhone|iPad/i)!=null;if(elementLabel&&!elementLabel.attr('id'))
{elementLabel.attr('id',elementIdOrName+'Label');}
element.data('aria-labelledby',(!elementLabel||isMacOriOS)?elementIdOrName+this.errorClass:elementLabel.attr('id')+' '+elementIdOrName+this.errorClass);error.insertAfter(element.attr({'aria-invalid':'true','aria-labelledby':element.data('aria-labelledby')})).find(this.errorElement).attr({'id':elementIdOrName+this.errorClass});},showErrors:function(errorMap,errorList)
{for(var i=0;errorList[i];i++)
{var error=errorList[i],element=$(error.element);element.attr({'aria-invalid':'true','aria-labelledby':element.data('aria-labelledby')});}
this.defaultShowErrors();},unhighlight:function(element,errorClass,validClass)
{if(element.type==='radio')
{this.findByName(element.name).removeClass(errorClass).addClass(validClass).removeAttrs("aria-invalid aria-labelledby");}else
{$(element).removeClass(errorClass).addClass(validClass).removeAttrs("aria-invalid aria-labelledby");}}};$.getScript(cdnPrefix+'/include/script/jquery/plugins/OnDemand/jquery.validate.js').done(function()
{if(meta)
{$.getScript(cdnPrefix+'/include/script/jquery/plugins/OnDemand/jquery.metadata.js').done(function()
{attr=(attr==null)?'data-validate':attr;$.metadata.setType("attr",attr);targetForm.find('['+attr+']').each(function()
{if($(this).metadata().required)
{$(this).attr({'aria-required':'true','required':'required'});}});targetForm.validate(validateOptions);});}
else
{targetForm.find('[required]').attr({'aria-required':'true'});targetForm.validate(validateOptions);}});}};
adobe.ui.selectBox=function(target,change,settings)
{var targetID=$(target),dispatcher=adobe.vrbl("reflowDispatcher"),defaultSettings={'menuTransition':'slide','menuSpeed':'fast','autoSize':true},allSettings=$.extend(defaultSettings,settings);if(dispatcher)
{if(dispatcher.hasLayoutEvent("phone")&&!dispatcher.getLayoutEvent("phone").active)
{targetID.selectBox();targetID.selectBox('settings',allSettings);}}
else
{targetID.selectBox();targetID.selectBox('settings',allSettings);}
if(change!=''&&!!change)
{if(change=='toggle')
{var targetOptions=[];targetID.find('option').each(function()
{targetOptions.push($(this).attr('data-toggle'));});targetID.selectBox().change(function()
{var targetShow=$(target+' option:selected').attr('data-toggle'),targetHide=$(this).val();for(i=0;i<targetOptions.length;i++)
{if(targetOptions[i]!=targetShow)
{$('#'+targetOptions[i]).hide();}
else
{$('#'+targetShow).show();}}
targetID.parents('td').siblings('.MenuMultiPanel').find('a.RouterLink').attr('href',targetHide);});}
else
{if(dispatcher)
{if(dispatcher.hasLayoutEvent("phone")&&dispatcher.getLayoutEvent("phone").active)
{targetID.change(function()
{location.href=$(this).val();});}
else
{targetID.selectBox().change(function()
{location.href=$(this).val();});}}
else
{targetID.selectBox().change(function()
{location.href=$(this).val();});}}}};
adobe.ui.tabs=function(target,defaultTab)
{var targetID=$("#"+target),dispatcher=adobe.vrbl("reflowDispatcher"),vertTabs=targetID.find('.ui-tabpanel-vertical'),tabsWidth=targetID.width();if(URLParser.hash!=null)
{try
{if(targetID.find(URLParser.hash).length>0)
{defaultTab=parseInt(URLParser.hash.match(/(\d+)$/)[0],10)-1;}}
catch(e)
{}}
else
{defaultTab=(defaultTab!=null)?defaultTab:0;}
function createTabs()
{targetID.find('.TabsMobile').hide();targetID.tabs({selected:defaultTab});if(vertTabs.length==0)
{var tabsLI=targetID.find('li.ui-state-default'),tabsCount=tabsLI.length,tabsMaxWidth=tabsWidth/tabsCount,allTabs=0,pxPerChar;if($.browser.msie||$.browser.opera||typeof CQClientLibraryManager!="undefined")
{pxPerChar=10;}
else
{pxPerChar=9;}
tabsLI.each(function()
{allTabs=$(this).width()+allTabs;});if(allTabs>tabsWidth)
{tabsLI.each(function()
{$(this).css('maxWidth',tabsMaxWidth);var str=$(this).find('a').text(),strCount=str.length,tabsWholeMaxWidth=Math.floor((tabsMaxWidth-22))/pxPerChar;if(strCount>tabsWholeMaxWidth)
{str=str.slice(0,tabsWholeMaxWidth-2);$(this).find('a').text(str+'..');}});}}
else
{var vertTabsGrid=targetID.find('.ui-tabpanel-vertical .LayoutGrid-4');if(vertTabsGrid.length>0)
{vertTabsGrid.css('width',vertTabsGrid.innerWidth()+11);}
vertTabsGrid=targetID.find('.ui-tabpanel-vertical .LayoutGrid-2');if(targetID.find('.ui-tabpanel-vertical .LayoutGrid-2').length>0)
{vertTabsGrid.css('width',vertTabsGrid.innerWidth()+11);}
vertTabs.css({minHeight:$('.ui-tabs-vertical').innerHeight()});vertTabs.parents('.LayoutFlushLeft').css('width',vertTabs.innerWidth()+11);vertTabs.parents('.LayoutGrid-2-5').css('width',739);}
if(targetID.css('visibility')=='hidden'){targetID.css('visibility','visible');}}
function reflowTabs()
{targetID.tabs("destroy");var tabLink='',tabText='';function mobileTabify(me)
{if(targetID.prev('a[name="'+target+'"]').length==0)
{targetID.prepend('<a name="'+target+'"></a>');}
tabLink=$(me).attr('href');tabText=($(me).attr('title')!='')?$(me).attr('title'):$(me).text();if($(tabLink).length>0)
{if($(tabLink).find('.TabsMobile').length!=0)
{$(tabLink).find('.TabsMobile').show();}
else
{$(tabLink).prepend('<a name="'+tabLink+'"></a>'+'<div class="LayoutBreakAfter TabsMobile">'+'<h2 class="LayoutRow TextH3 LayoutHItem">'+tabText+'</h2>'+'<div class="LayoutHItemRight LayoutRow">'+'<a href="#'+target+'">To the top<span class="LayoutSmallGutterLeft Icon IconSmallerTop"></span></a>'+'</div>'+'</div>')}}}
if(vertTabs.length==0)
{targetID.find('li.LayoutHItem a').each(function()
{mobileTabify($(this));});}
else
{targetID.find('.ui-tabpanel-vertical .LayoutGrid-4').css('width','');vertTabs.parents('.LayoutFlushLeft').css('width','');targetID.find('ul.ui-tabs-vertical li a').each(function()
{mobileTabify($(this));});targetID.find('.TabsMobile').addClass('LayoutCellSides');}}
if(dispatcher)
{if(dispatcher.hasLayoutEvent("phone")&&dispatcher.getLayoutEvent("phone").active)
{reflowTabs();}
else
{createTabs();}}
else
{createTabs();}
$(document).bind("adobe.reflow.LayoutChange",function(event,layoutEvent)
{if(layoutEvent.name=="phone")
{if(layoutEvent.active)
{reflowTabs();}
else
{createTabs();}}});};
adobe.reflow.Dispatcher=function(domElement){this.layoutEvents={};this.domElement=domElement;};adobe.reflow.Dispatcher.prototype={addLayoutEvent:function(layoutEvent){if(adobe.reflow.LayoutEvent.is(layoutEvent)){this.layoutEvents[layoutEvent.name]=layoutEvent;}
return this;},getLayoutEvent:function(name){if(this.hasLayoutEvent(name)){return this.layoutEvents[name];}
return new adobe.reflow.LayoutEvent(name);},hasLayoutEvent:function(name){return adobe.reflow.LayoutEvent.is(this.layoutEvents[name]);},removeLayoutEvent:function(name){if(this.hasLayoutEvent(name)){delete this.layoutEvents[name];}
return this;},updateLayout:function(integer){for(prop in this.layoutEvents){var layoutEvent=this.layoutEvents[prop],active=layoutEvent.isActive(),inRange=layoutEvent.isWithinRange(integer);if(active!=inRange){layoutEvent.setActive(inRange);this.fireLayoutChange(layoutEvent);}}
return this;},fireLayoutChange:function(layoutEvent){$(this.domElement).trigger("adobe.reflow.LayoutChange",layoutEvent);}};
adobe.reflow.LayoutEvent=function(name,minRange,maxRange,snapView){this.setName(name);this.setMinRange(minRange);this.setMaxRange(maxRange);this.setActive(false);};adobe.reflow.LayoutEvent.prototype={setName:function(name){this.name=String(name);},setMinRange:function(integer){this.minRange=parseInt(integer);},setMaxRange:function(integer){var value=parseInt(integer);if(isNaN(value)){value=Infinity;}
this.maxRange=value;},isActive:function(){return this.active;},setActive:function(yes){this.active=Boolean(yes);},setSnapView:function(yes){this.snapView=Boolean(yes);},isWithinRange:function(integer){var i=parseInt(integer);return i>=this.minRange&&i<=this.maxRange;}};adobe.reflow.LayoutEvent.is=function(func){return func!==undefined&&adobe.reflow.LayoutEvent.prototype.isPrototypeOf(func);};
$(document).ready(function()
{var dispatcher=adobe.vrbl("reflowDispatcher");if(dispatcher)
{if(dispatcher.hasLayoutEvent("desktopWide")&&dispatcher.getLayoutEvent("desktopWide").active)
{$("html").addClass('Wide');}
else if(dispatcher.hasLayoutEvent("phone")&&dispatcher.getLayoutEvent("phone").active)
{$("html").addClass('Slim');}
$(document).bind("adobe.reflow.LayoutChange",function(event,layoutEvent)
{if(layoutEvent.name=="desktopWide")
{if(layoutEvent.active)
{$("html").addClass('Wide');}
else
{$("html").removeClass('Wide');}}
else if(layoutEvent.name=="phone")
{if(layoutEvent.active)
{$("html").addClass('Slim');}
else
{$("html").removeClass('Slim');}}});}});
$(document).ready(function(){var LOCALE=0;var CATEGORY_PATH=1;var STORE_URL=2;var PRODUCT_NAME=3;var CART_BUTTON_ID=4;var PRICE_TYPE=5;var TAX_INCLUDE=6;$.each($('.CPodPricePlaceHolder'),function(i,placeHolder){if(placeHolder.attributes.rel!=null){var relValue=placeHolder.attributes.rel.value;var relArray=relValue.split('|');if(relArray.length==7){displayPrices(relArray[LOCALE],relArray[CATEGORY_PATH],placeHolder,null,relArray[STORE_URL],relArray[CART_BUTTON_ID],relArray[PRODUCT_NAME],relArray[PRICE_TYPE],relArray[TAX_INCLUDE]);}}});$('#EDUModalContinuShopping').live("click",function(event){event.preventDefault();var button=event.target;var eduCB=$(button).parent().parent().find('#eduQualifiedCB');var eduCBValue=$(eduCB).val();var curMarketSeg=Adobe.Cart.Models.Cart.getMarketSegment();var newMarketSeg=null;if($(eduCB).attr('checked')=='checked'){Adobe.Cart.Models.Cart.setMarketSegment("EDU");$('#CPodEDUToggle').show();$('#CPodEDUSelector').hide();}else{$('#eduErrorText').show();return;}
newMarketSeg=Adobe.Cart.Models.Cart.getMarketSegment();if(curMarketSeg!=newMarketSeg){OpenAjax.hub.publish("marketsegment.change");if(Adobe.PageInfo.ReloadPageOnContinue==null||!Adobe.PageInfo.ReloadPageOnContinue){var url=window.location.href;url=Adobe.Product.Controller.CPod.EduController.removeMarketSegmentParam(url);window.location=url;}else{$('#EDUModal-ui').dialog('close');}}else{$('#EDUModal-ui').dialog('close');}});});var conversionpod=(function($){var PRICE_MAX_THRESHOLD=10;var PRICE_MAIN_CLASS="CPodCostMain";var PRICE_SMALL_CLASS="CPodCostSmall";var REQUEST_TIMEOUT=30000;this.getMarketSegment=function()
{var mktSegment="COM";if(Adobe&&Adobe.PageInfo&&Adobe.PageInfo.marketSegment&&Adobe.PageInfo.marketSegment.length)
{mktSegment=Adobe.PageInfo.marketSegment;}
return mktSegment;};this.displayPrices=function(countryCode,productPath,vollversion,upgrade,storeUrl,cartButtonId,productName,priceType,taxInclude){var newCC=countryCode.substring(countryCode.indexOf('_')+1,countryCode.length);var marketSegment=getMarketSegment();if(marketSegment==="EDU"&&productPath.indexOf("STE")===-1)
{productPath+="STE";}
var key=countryCode+'-'+productPath;var cachedItem=$.jCacher.get(key);if(cachedItem){printPrices(cachedItem,countryCode,productPath,productName,vollversion,cartButtonId,priceType,taxInclude);}else{var priceData={url:storeUrl+'/cfusion/store/services/stateless/jsonshoppingservice.cfc',data:'method=getCategoryPricesByCountry&countryCode='+newCC+'&categoryPath='+productPath+'&marketSegment='+marketSegment+'&uc=1',dataType:'jsonp',jsonp:'callback',jsonpCallback:'getData'+cartButtonId.replace(/-/g,''),timeout:REQUEST_TIMEOUT,success:function(prices){printPrices(prices,countryCode,productPath,productName,vollversion,cartButtonId,priceType,taxInclude);},error:function(xRequest,textStatus,errorThrown){$(".CPodUpgrade").hide();}};try{$.ajax(priceData);}catch(ex){}}};this.printPrices=function(prices,countryCode,productPath,productName,vollversion,cartButtonId,priceType,taxInclude){var marketSegment=getMarketSegment();var isUpgrade=true;var displayPriceType="UPGRADE";if(prices!=null){var origAndLowestPrice=conversionpod.getOriginalAndLowestPriceItem(prices,countryCode,priceType);var price_obj=origAndLowestPrice.lowestItem;var originalPrice=origAndLowestPrice.originalPrice;if(price_obj!=null&&price_obj.priceType!=undefined){displayPriceType=price_obj.priceType;}else if(prices.length==1){displayPriceType="FULL";}
if(price_obj!=null){var href=window.location.href;var queryParams=href.split("?");var promoID="";if(queryParams.length>1){var indParams=queryParams[1].split("&");for(var i=0;i<indParams.length;i++){if(indParams[i].match(/^promoid=/i)){promoID=indParams[i].substr(8);}}}
if(displayPriceType=="UPGRADE"){$(".CPodUpgrade").show();if(cart.isOverlaySupported()){$("#"+cartButtonId).bind("click",{distmethod:"UPGRADE",storetype:marketSegment,categorypath:productPath,productname:productName,promoid:promoID},adobe.fn.handleCartButton);}
$(vollversion).replaceWith(conversionpod.getPriceDisplayHTML(price_obj,originalPrice,taxInclude));return false;}else if(displayPriceType=="FULL"){$(vollversion).replaceWith(conversionpod.getPriceDisplayHTML(price_obj,originalPrice,taxInclude));if(cart.isOverlaySupported()){$("#"+cartButtonId).bind("click",{distmethod:"FULL",storetype:marketSegment,categorypath:productPath,productname:productName,promoid:promoID},adobe.fn.handleCartButton);}
return false;}else if(displayPriceType=="SUB_NEW"){$(".CPodUpgrade").show();if(cart.isOverlaySupported()){$("#"+cartButtonId).bind("click",{distmethod:"SUB_NEW",storetype:marketSegment,categorypath:productPath,productname:productName,promoid:promoID},adobe.fn.handleCartButton);}
$(vollversion).replaceWith(conversionpod.getPriceDisplayHTML(price_obj,originalPrice,taxInclude));return false;}
$(".CPodUpgrade").show();}}};this.getOriginalAndLowestPriceItem=function(prices,countryCode,priceType){function getRawPrice(pObj,price_string)
{price_string=price_string.replace(pObj.CURRENCYSYMBOL,"").replace(pObj.TAXEXCLUSIVELABEL,"").replace(pObj.TAXINCLUSIVELABEL,"");return trimSpace(price_string);}
function getPriceDollar(rawPrice,dollar_delimitor,cent_delimitor)
{var tempvar=rawPrice.split(dollar_delimitor);if(cent_delimitor!="")
{var tempvarlast=tempvar[tempvar.length-1].split(cent_delimitor);tempvar[tempvar.length-1]=tempvarlast[0];}
return tempvar;}
function getPriceCent(rawPrice,cent_delimitor)
{var centStr="";if(cent_delimitor!="")
{var tempvar=rawPrice.split(cent_delimitor);centStr=trimSpace(tempvar[1]);}
return centStr;}
function trimSpace(str)
{return str.replace(/^\s+|\s+$/g,'');}
var origAndLowestPrice;var lowestPrice=-1;var lowestItem=null;var origPrice=null;var fullPrice=null;var upgradePrice=null;var subPrice=null;for(var i=0;i<prices.length;i++){if(prices[i]['PRICETYPE']!=null&&prices[i]['PRICETYPE']!=undefined){if(priceType.toLowerCase()==prices[i]['PRICETYPE'].toLowerCase()){lowestItem=adobe2.ecomm.Format.getFormattedPriceObj(prices[i],countryCode.toLowerCase());origPrice={dollarAmtTaxInc:prices[i].ORIGINALPRICEWITHTAX!=""?getPriceDollar(getRawPrice(prices[i],prices[i].ORIGINALPRICEWITHTAX),lowestItem.dollarDelim,lowestItem.centDelim):"",centAmtTaxInc:prices[i].ORIGINALPRICEWITHTAX!=""?getPriceCent(getRawPrice(prices[i],prices[i].ORIGINALPRICEWITHTAX),lowestItem.centDelim):"",dollarAmtTaxExc:prices[i].ORIGINALPRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(prices[i],prices[i].ORIGINALPRICEWITHOUTTAX),lowestItem.dollarDelim,lowestItem.centDelim):"",centAmtTaxExc:prices[i].ORIGINALPRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(prices[i],prices[i].ORIGINALPRICEWITHOUTTAX),lowestItem.centDelim):""};origAndLowestPrice={originalPrice:origPrice,lowestItem:lowestItem};break;}else{var price_obj=adobe2.ecomm.Format.getFormattedPriceObj(prices[i],countryCode.toLowerCase());if(lowestPrice==-1||lowestPrice>Number(price_obj.dollarAmtTaxExc)){lowestPrice=Number(price_obj.dollarAmtTaxExc);lowestItem=price_obj;}}}else{var price_obj=adobe2.ecomm.Format.getFormattedPriceObj(prices[i],countryCode.toLowerCase());if((price_obj!=null)&&(lowestPrice==-1||lowestPrice>Number(price_obj.dollarAmtTaxExc))){lowestPrice=Number(price_obj.dollarAmtTaxExc);lowestItem=price_obj;}}
var origPrice={dollarAmtTaxInc:prices[i].ORIGINALPRICEWITHTAX!=""?getPriceDollar(getRawPrice(prices[i],prices[i].ORIGINALPRICEWITHTAX),lowestItem.dollarDelim,lowestItem.centDelim):"",centAmtTaxInc:prices[i].ORIGINALPRICEWITHTAX!=""?getPriceCent(getRawPrice(prices[i],prices[i].ORIGINALPRICEWITHTAX),lowestItem.centDelim):"",dollarAmtTaxExc:prices[i].ORIGINALPRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(prices[i],prices[i].ORIGINALPRICEWITHOUTTAX),lowestItem.dollarDelim,lowestItem.centDelim):"",centAmtTaxExc:prices[i].ORIGINALPRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(prices[i],prices[i].ORIGINALPRICEWITHOUTTAX),lowestItem.centDelim):""}
origAndLowestPrice={originalPrice:origPrice,lowestItem:lowestItem}}
return origAndLowestPrice;};this.getPriceDisplayHTML=function(priceObj,originalPrice,taxInclude){function getDollarPriceHTML(dollarPrice,localeDelimiter){var tempValue="";for(i=0;i<dollarPrice.length;i++){tempValue=tempValue+dollarPrice[i]+localeDelimiter;}
return tempValue.substring(0,tempValue.length-1);}
var symbol=priceObj.symbol;var dPrice=priceObj.dollarAmtTaxExc;var cPrice=priceObj.centAmtTaxExc;var taxLabel=priceObj.taxLabelExc;var dOrigPrice=originalPrice.dollarAmtTaxExc;var cOrigPrice=originalPrice.centAmtTaxExc;if(taxInclude.length>0&&taxInclude=="true"){dPrice=priceObj.dollarAmtTaxInc;cPrice=priceObj.centAmtTaxInc;taxLabel=priceObj.taxLabelInc;dOrigPrice=originalPrice.dollarAmtTaxInc;cOrigPrice=originalPrice.centAmtTaxInc;}
var priceClass=PRICE_MAIN_CLASS;if(PRICE_MAX_THRESHOLD<(symbol.lenght+dPrice.length+cPrice.length)){priceClass=PRICE_SMALL_CLASS;}
if(dOrigPrice!=null&&dOrigPrice!='undefined'&&dOrigPrice!=""){var origPriceObj={"text":"<div><span class=\"TextStrikeThrough\">"+"<span class=\"CPodCurrency \">"+symbol+"</span>"+"<span class=\""+priceClass+" \">"+getDollarPriceHTML(dOrigPrice,priceObj.dollarDelim)+"</span>"+"<span>"+cOrigPrice+"</span></span></div>"}}
var tempObj={"sp":"","TXLAB":"","SYM":"<span class=\"CPodCurrency\">"+symbol+"</span>","DDDD":"<span class=\""+priceClass+"\">"+getDollarPriceHTML(dPrice,priceObj.dollarDelim)+"</span>","CC":cPrice};if(origPriceObj!=null&&origPriceObj!='undefined'){return origPriceObj.text+(priceObj.mask.replace(new RegExp("(sp|SYM|TXLAB|DDDD|CC)","gi"),function($1){return(tempObj[$1]);}))}
else{return priceObj.mask.replace(new RegExp("(sp|SYM|TXLAB|DDDD|CC)","gi"),function($1){return(tempObj[$1]);})}};return this;})(jQuery);
var downloadWindow;var newWindow;var width;var height;var options;var name;var url;function setPageTitle(title)
{window.document.title=title;}
function popVerisign()
{var urlstr="https://seal.verisign.com/splash?form_file=fdf/splash.fdf&dn=WWW.ADOBE.COM&lang=en";var optionsstr="toolbar=0,location=0,directories=0,status=1,menubar=1,scrollbars=1,resizable=1";openPopUpWindow(urlstr,'540','450',optionsstr,'verisignWin');}
function openInfoWindow(urlstr,winName,features)
{openPopUpWindow(urlstr,'700','600');}
function openPopUpWindow(urlstr,w,h,optionsstr,namestr)
{if(!urlstr)return;url=urlstr;var optionstest="";optionstest=optionsstr;width=(typeof w=="undefined")?"800":w;height=(typeof h=="undefined")?"600":h;options=(optionstest=="")?"toolbar=no,location=no,menubar=no,scrollbars=yes,resizable=yes":optionsstr;name=(typeof namestr=="undefined")?"_blank":namestr;newWindow=window.open(url,name,"width="+width+",height="+height+","+options);if(newWindow){newWindow.focus();}
else{try{$('app').handleBlockedPopup(url);}
catch(e){}}}
function mmDownload(downloadURL)
{if(adobe.hostEnv["ieV"]!=7){try{frames['download'].location.replace(downloadURL);}catch(e){document.getElementById('download').src=downloadURL;}}
else{downloadWindow=window.open(downloadURL,"_blank","directories=0,location=0,menubar=0,resizable=0,scrollbars=0,status=1,toolbar=0,width=800,height=600");}}
function setStoreCookie(cookie_name,value)
{exp_date=10*365;adobe.Cookie.set(cookie_name,value,exp_date,'/','.adobe.com');};
(function(jQ){jQ.extend({"log":function(){if(arguments.length>0){var args=(arguments.length>1)?Array.prototype.join.call(arguments," "):arguments[0];try{console.log(args);return true;}catch(e){try{opera.postError(args);return true;}catch(e){}}
return false;}}});})(jQuery);
(function(jQ){jQ.extend({createNs:function(ns)
{var o,a;a=ns.split(".");o=window[a[0]]=window[a[0]]||{};jQ.each(a.slice(1),function(i,n)
{o=o[n]=o[n]||{};});return o;},isBoolean:function(o){return typeof o==='boolean';},isDate:function(o){return this.type(o)==='date';},isNull:function(o){return o===null;},isNumber:function(o){return typeof o==='number'&&isFinite(o);},isString:function(o){return typeof o==='string';},isUndefined:function(o){return typeof o==='undefined';},isValue:function(o){var t=this.type(o);switch(t){case'number':return isFinite(o);case'null':case'undefined':return false;default:return!!(t);}},type:function(o){var TYPES={'undefined':'undefined','number':'number','boolean':'boolean','string':'string','[object Function]':'function','[object RegExp]':'regexp','[object Array]':'array','[object Date]':'date','[object Error]':'error'};return TYPES[typeof o]||TYPES[Object.prototype.toString.call(o)]||(o?'object':'null');},hasKey:function(o,k){return(k in o);},mix:function(r,s,ov,wl,mode,merge){if(!s||!r){return r||jQ;}
if(mode){switch(mode){case 1:return jQ.mix(r.prototype,s.prototype,ov,wl,0,merge);case 2:jQ.mix(r.prototype,s.prototype,ov,wl,0,merge);break;case 3:return jQ.mix(r,s.prototype,ov,wl,0,merge);case 4:return jQ.mix(r.prototype,s,ov,wl,0,merge);default:}}
var arr=merge&&jQ.isArray(r),i,l,p;if(wl&&wl.length){for(i=0,l=wl.length;i<l;++i){p=wl[i];if(p in s){if(merge&&jQ.isPlainObject(r[p],true)){jQ.mix(r[p],s[p]);}else if(!arr&&(ov||!(p in r))){r[p]=s[p];}else if(arr){r.push(s[p]);}}}}else{for(i in s){if(merge&&jQ.isPlainObject(r[i],true)){jQ.mix(r[i],s[i]);}else if(!arr&&(ov||!(i in r))){r[i]=s[i];}else if(arr){r.push(s[i]);}}
if(jQ.hasKey(jQ.browser,"msie")){var fn=s.toString;if(jQ.isFunction(fn)&&fn!=Object.prototype.toString){r.toString=fn;}}}
return r;}});})(jQuery);
(function(jQ){jQ.extend({"Array":{hash:function(k,v){var o={},l=k.length,vl=v&&v.length,i;for(i=0;i<l;i=i+1){o[k[i]]=(vl&&vl>i)?v[i]:true;}
return o;},filter:(Array.prototype.filter)?function(a,f,o){return Array.prototype.filter.call(a,f,o);}:function(a,f,o){var results=[];jQ.Array.each(a,function(item,i,a){if(f.call(o,item,i,a)){results.push(item);}});return results;},each:(Array.prototype.forEach)?function(a,f,o){Array.prototype.forEach.call(a||[],f,o||jQ);return jQ;}:function(a,f,o){var l=(a&&a.length)||0,i;for(i=0;i<l;i=i+1){f.call(o||jQ,a[i],i,a);}
return jQ;},some:(Array.prototype.some)?function(a,f,o){return Array.prototype.some.call(a,f,o);}:function(a,f,o){var l=a.length,i;for(i=0;i<l;i=i+1){if(f.call(o,a[i],i,a)){return true;}}
return false;}}});})(jQuery);
(function(jQ){jQ.extend({"UI":{setControlEnabled:function(control,enable){if(enable)
control.removeAttr("disabled");else
control.attr("disabled","disabled");}}});})(jQuery);
jQuery.createNs("adobe2.ecomm");adobe2.ecomm.Format={getFormattedPriceObj:function(pObj,locale)
{function getRawPrice(price_string)
{price_string=price_string.replace(pObj.CURRENCYSYMBOL,"").replace(pObj.TAXEXCLUSIVELABEL,"").replace(pObj.TAXINCLUSIVELABEL,"");return trimSpace(price_string);}
function getPriceDollar(rawPrice,dollar_delimitor,cent_delimitor)
{var tempvar=rawPrice.split(dollar_delimitor);if(cent_delimitor!="")
{var tempvarlast=tempvar[tempvar.length-1].split(cent_delimitor);tempvar[tempvar.length-1]=tempvarlast[0];}
return tempvar;}
function getPriceCent(rawPrice,cent_delimitor)
{var centStr="";if(cent_delimitor!="")
{var tempvar=rawPrice.split(cent_delimitor);centStr=trimSpace(tempvar[1]);}
return centStr;}
function trimSpace(str)
{return str.replace(/^\s+|\s+$/g,'');}
var tempObj;switch(locale)
{case'de_at':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'de_de':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_au':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_be':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_dk':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_fi':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_gb':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_ie':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_lu':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_nl':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_no':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_nz':tempObj={browsePriceDisplay:"TAX_EXCLUSIVE",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMDDDDCC",priceType:pObj.PRICETYPE};return tempObj;break;case'en_pt':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_us':tempObj={browsePriceDisplay:"TAX_EXCLUSIVE",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMDDDDCC",priceType:pObj.PRICETYPE};return tempObj;break;case'en_xap':tempObj={browsePriceDisplay:"TAX_EXCLUSIVE",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMDDDDCC",priceType:pObj.PRICETYPE};return tempObj;break;case'en_xeu':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'es_es':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'fr_ch':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),"'","."):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),"'","."):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:"'",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'de_ch':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),"'","."):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),"'","."):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:"'",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'fr_fr':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),' ',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),' ',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:"&nbsp;",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'it_it':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'ja_jp':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',',''):[],centAmtTaxInc:"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',',''):[],centAmtTaxExc:"",dollarDelim:",",centDelim:"",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"DDDDspSYMspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'pt_br':tempObj={browsePriceDisplay:"TAX_EXCLUSIVE",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'sv_se':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),' ',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),' ',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:"&nbsp;",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_ca':tempObj={browsePriceDisplay:"TAX_EXCLUSIVE",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMDDDDCC",priceType:pObj.PRICETYPE};return tempObj;break;case'fr_ca':tempObj={browsePriceDisplay:"TAX_EXCLUSIVE",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMDDDDCC",priceType:pObj.PRICETYPE};return tempObj;break;case'es_mx':tempObj={browsePriceDisplay:"TAX_EXCLUSIVE",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMDDDDCC",priceType:pObj.PRICETYPE};return tempObj;break;case'de_lu':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'fr_lu':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'fr_be':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'nl_be':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'it_ch':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),"'","."):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),"'","."):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:"'",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'da_dk':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'fi_fi':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'nl_nl':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'nb_no':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'pt_pt':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_hk':tempObj={browsePriceDisplay:"TAX_EXCLUSIVE",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMDDDDCC",priceType:pObj.PRICETYPE};return tempObj;break;case'zh_hk':tempObj={browsePriceDisplay:"TAX_EXCLUSIVE",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMDDDDCC",priceType:pObj.PRICETYPE};return tempObj;break;case'en_sg':tempObj={browsePriceDisplay:"TAX_EXCLUSIVE",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMDDDDCC",priceType:pObj.PRICETYPE};return tempObj;break;case'hu_hu':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'bg_bg':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'cs_cz':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'et_ee':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'lt_lt':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'lv_lv':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'pl_pl':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'ro_ro':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'sl_si':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'sk_sk':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;}},getPriceHTML:function(pObjforHTML,locale)
{}};
function saveRegionCookie(region){cart.setStoreRegion(region);}
function saveUbiCartCookie(){var cookie=new adobe.http.Cookie("UBICART",window.location.href.replace(/index_.\.html/,""));cookie.setExpires(86400002*365);cookie.setPath("/");cookie.setDomain(".adobe.com");window.document.cookie=cookie.toString();}
var s_products='';var s_eVar45='';var s_events='';var s_eVar2='';var s_eVar34='';var analyticsEventInterval=null;var omnitureVarsQueue=new Array();function reportAnalyticsEvent(data)
{if(!omnitureVarsQueue)
omnitureVarsQueue=new Array();omnitureVarsQueue[omnitureVarsQueue.length]=data;if(analyticsEventInterval==null)
{analyticsEventInterval=setInterval(sendQueuedAnalyticsEvents,200);}}
function sendQueuedAnalyticsEvents()
{if(omnitureVarsQueue&&omnitureVarsQueue.length>=1)
{var data=omnitureVarsQueue[0];omnitureVarsQueue=omnitureVarsQueue.slice(1);for(var prop in data)
{this[prop]=data[prop];if(this.s&&data[prop]=="")
{this.s[prop.substring(2,prop.length)]="";}}
var ns=s_account;this.s['eVar45']="";s_eVar45="";if(s_eVar34=="none")
{this.s['eVar34']="";s_eVar34="";}
void(s_gs(ns));}
if(omnitureVarsQueue.length==0)
{clearInterval(analyticsEventInterval);analyticsEventInterval=null;}};
$(document).ready(function()
{var OmUrl=window.location.toString();OmUrl=unescape(OmUrl.replace(/_sl_/g,"/"));$('.QuickJump a').click(function()
{OmObject=new Object();OmObject.pageName=OmUrl.toLowerCase()+" JUMP: "+$(this).attr('href');s.t(OmObject);});$('.jcarousel-next').click(function()
{OpenAjax.hub.publish("carousel.next.click");});$('.jcarousel-prev').click(function()
{OpenAjax.hub.publish("carousel.previous.click");});function OmSocialMedia(OmSMType)
{var s=s_gi(s_account),OmArea=$('meta[name=area]').attr("content");s.linkTrackVars="prop36";switch(OmArea)
{case'devnet':s.prop36=s_prop36="ADC: Share "+OmSMType+": "+window.location.pathname;s.tl(this,"o","ADC: Share "+OmSMType+": "+window.location.pathname);break;case'products':s.prop36="Share: "+OmSMType+": "+window.location.pathname;s.tl(this,"o","Social Plugin Share: "+OmSMType);break;default:s.prop36="Share: "+OmSMType+": "+window.location.pathname;s.tl(this,"o","Social Plugin Share: "+OmSMType);break;}}
$('.Facebook-button').click(function()
{OmSocialMedia("Facebook");});$('.Twitter-button').click(function()
{OmSocialMedia("Twitter");});$('.LinkedIn-button').click(function()
{OmSocialMedia("LinkedIn");});});