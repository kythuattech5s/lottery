/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!************************************************!*\
  !*** ./public/theme/frontend/plinko/js/lib.js ***!
  \************************************************/
function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},_typeof(obj);}(self["webpackChunkplinko"]=self["webpackChunkplinko"]||[]).push([["vendors-node_modules_matter-js_build_matter_js-node_modules_p5_lib_p5_min_js"],{/***/"./node_modules/matter-js/build/matter.js":/*!************************************************!*\
  !*** ./node_modules/matter-js/build/matter.js ***!
  \************************************************/ /***/function node_modulesMatterJsBuildMatterJs(module,__unused_webpack_exports,__nested_webpack_require_734__){/*!
 * matter-js 0.18.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(function webpackUniversalModuleDefinition(root,factory){if(true)module.exports=factory();else{}})(this,function(){return(/******/function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __nested_webpack_require_1787__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__nested_webpack_require_1787__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__nested_webpack_require_1787__.m=modules;/******/ /******/ // expose the module cache
/******/__nested_webpack_require_1787__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__nested_webpack_require_1787__.d=function(exports,name,getter){/******/if(!__nested_webpack_require_1787__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__nested_webpack_require_1787__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__nested_webpack_require_1787__.t=function(value,mode){/******/if(mode&1)value=__nested_webpack_require_1787__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__nested_webpack_require_1787__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__nested_webpack_require_1787__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__nested_webpack_require_1787__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__nested_webpack_require_1787__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__nested_webpack_require_1787__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__nested_webpack_require_1787__.p="";/******/ /******/ /******/ // Load entry module and return exports
/******/return __nested_webpack_require_1787__(__nested_webpack_require_1787__.s=21);/******/}/************************************************************************/ /******/([/* 0 */ /***/function(module,exports){/**
* The `Matter.Common` module contains utility functions that are common to all modules.
*
* @class Common
*/var Common={};module.exports=Common;(function(){Common._nextId=0;Common._seed=0;Common._nowStartTime=+new Date();Common._warnedOnce={};Common._decomp=null;/**
     * Extends the object in the first argument using the object in the second argument.
     * @method extend
     * @param {} obj
     * @param {boolean} deep
     * @return {} obj extended
     */Common.extend=function(obj,deep){var argsStart,args,deepClone;if(typeof deep==='boolean'){argsStart=2;deepClone=deep;}else{argsStart=1;deepClone=true;}for(var i=argsStart;i<arguments.length;i++){var source=arguments[i];if(source){for(var prop in source){if(deepClone&&source[prop]&&source[prop].constructor===Object){if(!obj[prop]||obj[prop].constructor===Object){obj[prop]=obj[prop]||{};Common.extend(obj[prop],deepClone,source[prop]);}else{obj[prop]=source[prop];}}else{obj[prop]=source[prop];}}}}return obj;};/**
     * Creates a new clone of the object, if deep is true references will also be cloned.
     * @method clone
     * @param {} obj
     * @param {bool} deep
     * @return {} obj cloned
     */Common.clone=function(obj,deep){return Common.extend({},deep,obj);};/**
     * Returns the list of keys for the given object.
     * @method keys
     * @param {} obj
     * @return {string[]} keys
     */Common.keys=function(obj){if(Object.keys)return Object.keys(obj);// avoid hasOwnProperty for performance
var keys=[];for(var key in obj){keys.push(key);}return keys;};/**
     * Returns the list of values for the given object.
     * @method values
     * @param {} obj
     * @return {array} Array of the objects property values
     */Common.values=function(obj){var values=[];if(Object.keys){var keys=Object.keys(obj);for(var i=0;i<keys.length;i++){values.push(obj[keys[i]]);}return values;}// avoid hasOwnProperty for performance
for(var key in obj){values.push(obj[key]);}return values;};/**
     * Gets a value from `base` relative to the `path` string.
     * @method get
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} The object at the given path
     */Common.get=function(obj,path,begin,end){path=path.split('.').slice(begin,end);for(var i=0;i<path.length;i+=1){obj=obj[path[i]];}return obj;};/**
     * Sets a value on `base` relative to the given `path` string.
     * @method set
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {} val The value to set
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} Pass through `val` for chaining
     */Common.set=function(obj,path,val,begin,end){var parts=path.split('.').slice(begin,end);Common.get(obj,path,0,-1)[parts[parts.length-1]]=val;return val;};/**
     * Shuffles the given array in-place.
     * The function uses a seeded random generator.
     * @method shuffle
     * @param {array} array
     * @return {array} array shuffled randomly
     */Common.shuffle=function(array){for(var i=array.length-1;i>0;i--){var j=Math.floor(Common.random()*(i+1));var temp=array[i];array[i]=array[j];array[j]=temp;}return array;};/**
     * Randomly chooses a value from a list with equal probability.
     * The function uses a seeded random generator.
     * @method choose
     * @param {array} choices
     * @return {object} A random choice object from the array
     */Common.choose=function(choices){return choices[Math.floor(Common.random()*choices.length)];};/**
     * Returns true if the object is a HTMLElement, otherwise false.
     * @method isElement
     * @param {object} obj
     * @return {boolean} True if the object is a HTMLElement, otherwise false
     */Common.isElement=function(obj){if(typeof HTMLElement!=='undefined'){return obj instanceof HTMLElement;}return!!(obj&&obj.nodeType&&obj.nodeName);};/**
     * Returns true if the object is an array.
     * @method isArray
     * @param {object} obj
     * @return {boolean} True if the object is an array, otherwise false
     */Common.isArray=function(obj){return Object.prototype.toString.call(obj)==='[object Array]';};/**
     * Returns true if the object is a function.
     * @method isFunction
     * @param {object} obj
     * @return {boolean} True if the object is a function, otherwise false
     */Common.isFunction=function(obj){return typeof obj==="function";};/**
     * Returns true if the object is a plain object.
     * @method isPlainObject
     * @param {object} obj
     * @return {boolean} True if the object is a plain object, otherwise false
     */Common.isPlainObject=function(obj){return _typeof(obj)==='object'&&obj.constructor===Object;};/**
     * Returns true if the object is a string.
     * @method isString
     * @param {object} obj
     * @return {boolean} True if the object is a string, otherwise false
     */Common.isString=function(obj){return toString.call(obj)==='[object String]';};/**
     * Returns the given value clamped between a minimum and maximum value.
     * @method clamp
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @return {number} The value clamped between min and max inclusive
     */Common.clamp=function(value,min,max){if(value<min)return min;if(value>max)return max;return value;};/**
     * Returns the sign of the given value.
     * @method sign
     * @param {number} value
     * @return {number} -1 if negative, +1 if 0 or positive
     */Common.sign=function(value){return value<0?-1:1;};/**
     * Returns the current timestamp since the time origin (e.g. from page load).
     * The result is in milliseconds and will use high-resolution timing if available.
     * @method now
     * @return {number} the current timestamp in milliseconds
     */Common.now=function(){if(typeof window!=='undefined'&&window.performance){if(window.performance.now){return window.performance.now();}else if(window.performance.webkitNow){return window.performance.webkitNow();}}if(Date.now){return Date.now();}return new Date()-Common._nowStartTime;};/**
     * Returns a random value between a minimum and a maximum value inclusive.
     * The function uses a seeded random generator.
     * @method random
     * @param {number} min
     * @param {number} max
     * @return {number} A random number between min and max inclusive
     */Common.random=function(min,max){min=typeof min!=="undefined"?min:0;max=typeof max!=="undefined"?max:1;return min+_seededRandom()*(max-min);};var _seededRandom=function _seededRandom(){// https://en.wikipedia.org/wiki/Linear_congruential_generator
Common._seed=(Common._seed*9301+49297)%233280;return Common._seed/233280;};/**
     * Converts a CSS hex colour string into an integer.
     * @method colorToNumber
     * @param {string} colorString
     * @return {number} An integer representing the CSS hex string
     */Common.colorToNumber=function(colorString){colorString=colorString.replace('#','');if(colorString.length==3){colorString=colorString.charAt(0)+colorString.charAt(0)+colorString.charAt(1)+colorString.charAt(1)+colorString.charAt(2)+colorString.charAt(2);}return parseInt(colorString,16);};/**
     * The console logging level to use, where each level includes all levels above and excludes the levels below.
     * The default level is 'debug' which shows all console messages.  
     *
     * Possible level values are:
     * - 0 = None
     * - 1 = Debug
     * - 2 = Info
     * - 3 = Warn
     * - 4 = Error
     * @property Common.logLevel
     * @type {Number}
     * @default 1
     */Common.logLevel=1;/**
     * Shows a `console.log` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method log
     * @param ...objs {} The objects to log.
     */Common.log=function(){if(console&&Common.logLevel>0&&Common.logLevel<=3){console.log.apply(console,['matter-js:'].concat(Array.prototype.slice.call(arguments)));}};/**
     * Shows a `console.info` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method info
     * @param ...objs {} The objects to log.
     */Common.info=function(){if(console&&Common.logLevel>0&&Common.logLevel<=2){console.info.apply(console,['matter-js:'].concat(Array.prototype.slice.call(arguments)));}};/**
     * Shows a `console.warn` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method warn
     * @param ...objs {} The objects to log.
     */Common.warn=function(){if(console&&Common.logLevel>0&&Common.logLevel<=3){console.warn.apply(console,['matter-js:'].concat(Array.prototype.slice.call(arguments)));}};/**
     * Uses `Common.warn` to log the given message one time only.
     * @method warnOnce
     * @param ...objs {} The objects to log.
     */Common.warnOnce=function(){var message=Array.prototype.slice.call(arguments).join(' ');if(!Common._warnedOnce[message]){Common.warn(message);Common._warnedOnce[message]=true;}};/**
     * Shows a deprecated console warning when the function on the given object is called.
     * The target function will be replaced with a new function that first shows the warning
     * and then calls the original function.
     * @method deprecated
     * @param {object} obj The object or module
     * @param {string} name The property name of the function on obj
     * @param {string} warning The one-time message to show if the function is called
     */Common.deprecated=function(obj,prop,warning){obj[prop]=Common.chain(function(){Common.warnOnce('🔅 deprecated 🔅',warning);},obj[prop]);};/**
     * Returns the next unique sequential ID.
     * @method nextId
     * @return {Number} Unique sequential ID
     */Common.nextId=function(){return Common._nextId++;};/**
     * A cross browser compatible indexOf implementation.
     * @method indexOf
     * @param {array} haystack
     * @param {object} needle
     * @return {number} The position of needle in haystack, otherwise -1.
     */Common.indexOf=function(haystack,needle){if(haystack.indexOf)return haystack.indexOf(needle);for(var i=0;i<haystack.length;i++){if(haystack[i]===needle)return i;}return-1;};/**
     * A cross browser compatible array map implementation.
     * @method map
     * @param {array} list
     * @param {function} func
     * @return {array} Values from list transformed by func.
     */Common.map=function(list,func){if(list.map){return list.map(func);}var mapped=[];for(var i=0;i<list.length;i+=1){mapped.push(func(list[i]));}return mapped;};/**
     * Takes a directed graph and returns the partially ordered set of vertices in topological order.
     * Circular dependencies are allowed.
     * @method topologicalSort
     * @param {object} graph
     * @return {array} Partially ordered set of vertices in topological order.
     */Common.topologicalSort=function(graph){// https://github.com/mgechev/javascript-algorithms
// Copyright (c) Minko Gechev (MIT license)
// Modifications: tidy formatting and naming
var result=[],visited=[],temp=[];for(var node in graph){if(!visited[node]&&!temp[node]){Common._topologicalSort(node,visited,temp,graph,result);}}return result;};Common._topologicalSort=function(node,visited,temp,graph,result){var neighbors=graph[node]||[];temp[node]=true;for(var i=0;i<neighbors.length;i+=1){var neighbor=neighbors[i];if(temp[neighbor]){// skip circular dependencies
continue;}if(!visited[neighbor]){Common._topologicalSort(neighbor,visited,temp,graph,result);}}temp[node]=false;visited[node]=true;result.push(node);};/**
     * Takes _n_ functions as arguments and returns a new function that calls them in order.
     * The arguments applied when calling the new function will also be applied to every function passed.
     * The value of `this` refers to the last value returned in the chain that was not `undefined`.
     * Therefore if a passed function does not return a value, the previously returned value is maintained.
     * After all passed functions have been called the new function returns the last returned value (if any).
     * If any of the passed functions are a chain, then the chain will be flattened.
     * @method chain
     * @param ...funcs {function} The functions to chain.
     * @return {function} A new function that calls the passed functions in order.
     */Common.chain=function(){var funcs=[];for(var i=0;i<arguments.length;i+=1){var func=arguments[i];if(func._chained){// flatten already chained functions
funcs.push.apply(funcs,func._chained);}else{funcs.push(func);}}var chain=function chain(){// https://github.com/GoogleChrome/devtools-docs/issues/53#issuecomment-51941358
var lastResult,args=new Array(arguments.length);for(var i=0,l=arguments.length;i<l;i++){args[i]=arguments[i];}for(i=0;i<funcs.length;i+=1){var result=funcs[i].apply(lastResult,args);if(typeof result!=='undefined'){lastResult=result;}}return lastResult;};chain._chained=funcs;return chain;};/**
     * Chains a function to excute before the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathBefore
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */Common.chainPathBefore=function(base,path,func){return Common.set(base,path,Common.chain(func,Common.get(base,path)));};/**
     * Chains a function to excute after the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathAfter
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */Common.chainPathAfter=function(base,path,func){return Common.set(base,path,Common.chain(Common.get(base,path),func));};/**
     * Provide the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module to enable
     * concave vertex decomposition support when using `Bodies.fromVertices` e.g. `Common.setDecomp(require('poly-decomp'))`.
     * @method setDecomp
     * @param {} decomp The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module.
     */Common.setDecomp=function(decomp){Common._decomp=decomp;};/**
     * Returns the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module provided through `Common.setDecomp`,
     * otherwise returns the global `decomp` if set.
     * @method getDecomp
     * @return {} The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module if provided.
     */Common.getDecomp=function(){// get user provided decomp if set
var decomp=Common._decomp;try{// otherwise from window global
if(!decomp&&typeof window!=='undefined'){decomp=window.decomp;}// otherwise from node global
if(!decomp&&typeof __nested_webpack_require_734__.g!=='undefined'){decomp=__nested_webpack_require_734__.g.decomp;}}catch(e){// decomp not available
decomp=null;}return decomp;};})();/***/},/* 1 */ /***/function(module,exports){/**
* The `Matter.Bounds` module contains methods for creating and manipulating axis-aligned bounding boxes (AABB).
*
* @class Bounds
*/var Bounds={};module.exports=Bounds;(function(){/**
     * Creates a new axis-aligned bounding box (AABB) for the given vertices.
     * @method create
     * @param {vertices} vertices
     * @return {bounds} A new bounds object
     */Bounds.create=function(vertices){var bounds={min:{x:0,y:0},max:{x:0,y:0}};if(vertices)Bounds.update(bounds,vertices);return bounds;};/**
     * Updates bounds using the given vertices and extends the bounds given a velocity.
     * @method update
     * @param {bounds} bounds
     * @param {vertices} vertices
     * @param {vector} velocity
     */Bounds.update=function(bounds,vertices,velocity){bounds.min.x=Infinity;bounds.max.x=-Infinity;bounds.min.y=Infinity;bounds.max.y=-Infinity;for(var i=0;i<vertices.length;i++){var vertex=vertices[i];if(vertex.x>bounds.max.x)bounds.max.x=vertex.x;if(vertex.x<bounds.min.x)bounds.min.x=vertex.x;if(vertex.y>bounds.max.y)bounds.max.y=vertex.y;if(vertex.y<bounds.min.y)bounds.min.y=vertex.y;}if(velocity){if(velocity.x>0){bounds.max.x+=velocity.x;}else{bounds.min.x+=velocity.x;}if(velocity.y>0){bounds.max.y+=velocity.y;}else{bounds.min.y+=velocity.y;}}};/**
     * Returns true if the bounds contains the given point.
     * @method contains
     * @param {bounds} bounds
     * @param {vector} point
     * @return {boolean} True if the bounds contain the point, otherwise false
     */Bounds.contains=function(bounds,point){return point.x>=bounds.min.x&&point.x<=bounds.max.x&&point.y>=bounds.min.y&&point.y<=bounds.max.y;};/**
     * Returns true if the two bounds intersect.
     * @method overlaps
     * @param {bounds} boundsA
     * @param {bounds} boundsB
     * @return {boolean} True if the bounds overlap, otherwise false
     */Bounds.overlaps=function(boundsA,boundsB){return boundsA.min.x<=boundsB.max.x&&boundsA.max.x>=boundsB.min.x&&boundsA.max.y>=boundsB.min.y&&boundsA.min.y<=boundsB.max.y;};/**
     * Translates the bounds by the given vector.
     * @method translate
     * @param {bounds} bounds
     * @param {vector} vector
     */Bounds.translate=function(bounds,vector){bounds.min.x+=vector.x;bounds.max.x+=vector.x;bounds.min.y+=vector.y;bounds.max.y+=vector.y;};/**
     * Shifts the bounds to the given position.
     * @method shift
     * @param {bounds} bounds
     * @param {vector} position
     */Bounds.shift=function(bounds,position){var deltaX=bounds.max.x-bounds.min.x,deltaY=bounds.max.y-bounds.min.y;bounds.min.x=position.x;bounds.max.x=position.x+deltaX;bounds.min.y=position.y;bounds.max.y=position.y+deltaY;};})();/***/},/* 2 */ /***/function(module,exports){/**
* The `Matter.Vector` module contains methods for creating and manipulating vectors.
* Vectors are the basis of all the geometry related operations in the engine.
* A `Matter.Vector` object is of the form `{ x: 0, y: 0 }`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vector
*/ // TODO: consider params for reusing vector objects
var Vector={};module.exports=Vector;(function(){/**
     * Creates a new vector.
     * @method create
     * @param {number} x
     * @param {number} y
     * @return {vector} A new vector
     */Vector.create=function(x,y){return{x:x||0,y:y||0};};/**
     * Returns a new vector with `x` and `y` copied from the given `vector`.
     * @method clone
     * @param {vector} vector
     * @return {vector} A new cloned vector
     */Vector.clone=function(vector){return{x:vector.x,y:vector.y};};/**
     * Returns the magnitude (length) of a vector.
     * @method magnitude
     * @param {vector} vector
     * @return {number} The magnitude of the vector
     */Vector.magnitude=function(vector){return Math.sqrt(vector.x*vector.x+vector.y*vector.y);};/**
     * Returns the magnitude (length) of a vector (therefore saving a `sqrt` operation).
     * @method magnitudeSquared
     * @param {vector} vector
     * @return {number} The squared magnitude of the vector
     */Vector.magnitudeSquared=function(vector){return vector.x*vector.x+vector.y*vector.y;};/**
     * Rotates the vector about (0, 0) by specified angle.
     * @method rotate
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} [output]
     * @return {vector} The vector rotated about (0, 0)
     */Vector.rotate=function(vector,angle,output){var cos=Math.cos(angle),sin=Math.sin(angle);if(!output)output={};var x=vector.x*cos-vector.y*sin;output.y=vector.x*sin+vector.y*cos;output.x=x;return output;};/**
     * Rotates the vector about a specified point by specified angle.
     * @method rotateAbout
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} point
     * @param {vector} [output]
     * @return {vector} A new vector rotated about the point
     */Vector.rotateAbout=function(vector,angle,point,output){var cos=Math.cos(angle),sin=Math.sin(angle);if(!output)output={};var x=point.x+((vector.x-point.x)*cos-(vector.y-point.y)*sin);output.y=point.y+((vector.x-point.x)*sin+(vector.y-point.y)*cos);output.x=x;return output;};/**
     * Normalises a vector (such that its magnitude is `1`).
     * @method normalise
     * @param {vector} vector
     * @return {vector} A new vector normalised
     */Vector.normalise=function(vector){var magnitude=Vector.magnitude(vector);if(magnitude===0)return{x:0,y:0};return{x:vector.x/magnitude,y:vector.y/magnitude};};/**
     * Returns the dot-product of two vectors.
     * @method dot
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The dot product of the two vectors
     */Vector.dot=function(vectorA,vectorB){return vectorA.x*vectorB.x+vectorA.y*vectorB.y;};/**
     * Returns the cross-product of two vectors.
     * @method cross
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The cross product of the two vectors
     */Vector.cross=function(vectorA,vectorB){return vectorA.x*vectorB.y-vectorA.y*vectorB.x;};/**
     * Returns the cross-product of three vectors.
     * @method cross3
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} vectorC
     * @return {number} The cross product of the three vectors
     */Vector.cross3=function(vectorA,vectorB,vectorC){return(vectorB.x-vectorA.x)*(vectorC.y-vectorA.y)-(vectorB.y-vectorA.y)*(vectorC.x-vectorA.x);};/**
     * Adds the two vectors.
     * @method add
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB added
     */Vector.add=function(vectorA,vectorB,output){if(!output)output={};output.x=vectorA.x+vectorB.x;output.y=vectorA.y+vectorB.y;return output;};/**
     * Subtracts the two vectors.
     * @method sub
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB subtracted
     */Vector.sub=function(vectorA,vectorB,output){if(!output)output={};output.x=vectorA.x-vectorB.x;output.y=vectorA.y-vectorB.y;return output;};/**
     * Multiplies a vector and a scalar.
     * @method mult
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector multiplied by scalar
     */Vector.mult=function(vector,scalar){return{x:vector.x*scalar,y:vector.y*scalar};};/**
     * Divides a vector and a scalar.
     * @method div
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector divided by scalar
     */Vector.div=function(vector,scalar){return{x:vector.x/scalar,y:vector.y/scalar};};/**
     * Returns the perpendicular vector. Set `negate` to true for the perpendicular in the opposite direction.
     * @method perp
     * @param {vector} vector
     * @param {bool} [negate=false]
     * @return {vector} The perpendicular vector
     */Vector.perp=function(vector,negate){negate=negate===true?-1:1;return{x:negate*-vector.y,y:negate*vector.x};};/**
     * Negates both components of a vector such that it points in the opposite direction.
     * @method neg
     * @param {vector} vector
     * @return {vector} The negated vector
     */Vector.neg=function(vector){return{x:-vector.x,y:-vector.y};};/**
     * Returns the angle between the vector `vectorB - vectorA` and the x-axis in radians.
     * @method angle
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The angle in radians
     */Vector.angle=function(vectorA,vectorB){return Math.atan2(vectorB.y-vectorA.y,vectorB.x-vectorA.x);};/**
     * Temporary vector pool (not thread-safe).
     * @property _temp
     * @type {vector[]}
     * @private
     */Vector._temp=[Vector.create(),Vector.create(),Vector.create(),Vector.create(),Vector.create(),Vector.create()];})();/***/},/* 3 */ /***/function(module,exports,__nested_webpack_require_35378__){/**
* The `Matter.Vertices` module contains methods for creating and manipulating sets of vertices.
* A set of vertices is an array of `Matter.Vector` with additional indexing properties inserted by `Vertices.create`.
* A `Matter.Body` maintains a set of vertices to represent the shape of the object (its convex hull).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vertices
*/var Vertices={};module.exports=Vertices;var Vector=__nested_webpack_require_35378__(2);var Common=__nested_webpack_require_35378__(0);(function(){/**
     * Creates a new set of `Matter.Body` compatible vertices.
     * The `points` argument accepts an array of `Matter.Vector` points orientated around the origin `(0, 0)`, for example:
     *
     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
     *
     * The `Vertices.create` method returns a new array of vertices, which are similar to Matter.Vector objects,
     * but with some additional references required for efficient collision detection routines.
     *
     * Vertices must be specified in clockwise order.
     *
     * Note that the `body` argument is not optional, a `Matter.Body` reference must be provided.
     *
     * @method create
     * @param {vector[]} points
     * @param {body} body
     */Vertices.create=function(points,body){var vertices=[];for(var i=0;i<points.length;i++){var point=points[i],vertex={x:point.x,y:point.y,index:i,body:body,isInternal:false};vertices.push(vertex);}return vertices;};/**
     * Parses a string containing ordered x y pairs separated by spaces (and optionally commas), 
     * into a `Matter.Vertices` object for the given `Matter.Body`.
     * For parsing SVG paths, see `Svg.pathToVertices`.
     * @method fromPath
     * @param {string} path
     * @param {body} body
     * @return {vertices} vertices
     */Vertices.fromPath=function(path,body){var pathPattern=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,points=[];path.replace(pathPattern,function(match,x,y){points.push({x:parseFloat(x),y:parseFloat(y)});});return Vertices.create(points,body);};/**
     * Returns the centre (centroid) of the set of vertices.
     * @method centre
     * @param {vertices} vertices
     * @return {vector} The centre point
     */Vertices.centre=function(vertices){var area=Vertices.area(vertices,true),centre={x:0,y:0},cross,temp,j;for(var i=0;i<vertices.length;i++){j=(i+1)%vertices.length;cross=Vector.cross(vertices[i],vertices[j]);temp=Vector.mult(Vector.add(vertices[i],vertices[j]),cross);centre=Vector.add(centre,temp);}return Vector.div(centre,6*area);};/**
     * Returns the average (mean) of the set of vertices.
     * @method mean
     * @param {vertices} vertices
     * @return {vector} The average point
     */Vertices.mean=function(vertices){var average={x:0,y:0};for(var i=0;i<vertices.length;i++){average.x+=vertices[i].x;average.y+=vertices[i].y;}return Vector.div(average,vertices.length);};/**
     * Returns the area of the set of vertices.
     * @method area
     * @param {vertices} vertices
     * @param {bool} signed
     * @return {number} The area
     */Vertices.area=function(vertices,signed){var area=0,j=vertices.length-1;for(var i=0;i<vertices.length;i++){area+=(vertices[j].x-vertices[i].x)*(vertices[j].y+vertices[i].y);j=i;}if(signed)return area/2;return Math.abs(area)/2;};/**
     * Returns the moment of inertia (second moment of area) of the set of vertices given the total mass.
     * @method inertia
     * @param {vertices} vertices
     * @param {number} mass
     * @return {number} The polygon's moment of inertia
     */Vertices.inertia=function(vertices,mass){var numerator=0,denominator=0,v=vertices,cross,j;// find the polygon's moment of inertia, using second moment of area
// from equations at http://www.physicsforums.com/showthread.php?t=25293
for(var n=0;n<v.length;n++){j=(n+1)%v.length;cross=Math.abs(Vector.cross(v[j],v[n]));numerator+=cross*(Vector.dot(v[j],v[j])+Vector.dot(v[j],v[n])+Vector.dot(v[n],v[n]));denominator+=cross;}return mass/6*(numerator/denominator);};/**
     * Translates the set of vertices in-place.
     * @method translate
     * @param {vertices} vertices
     * @param {vector} vector
     * @param {number} scalar
     */Vertices.translate=function(vertices,vector,scalar){scalar=typeof scalar!=='undefined'?scalar:1;var verticesLength=vertices.length,translateX=vector.x*scalar,translateY=vector.y*scalar,i;for(i=0;i<verticesLength;i++){vertices[i].x+=translateX;vertices[i].y+=translateY;}return vertices;};/**
     * Rotates the set of vertices in-place.
     * @method rotate
     * @param {vertices} vertices
     * @param {number} angle
     * @param {vector} point
     */Vertices.rotate=function(vertices,angle,point){if(angle===0)return;var cos=Math.cos(angle),sin=Math.sin(angle),pointX=point.x,pointY=point.y,verticesLength=vertices.length,vertex,dx,dy,i;for(i=0;i<verticesLength;i++){vertex=vertices[i];dx=vertex.x-pointX;dy=vertex.y-pointY;vertex.x=pointX+(dx*cos-dy*sin);vertex.y=pointY+(dx*sin+dy*cos);}return vertices;};/**
     * Returns `true` if the `point` is inside the set of `vertices`.
     * @method contains
     * @param {vertices} vertices
     * @param {vector} point
     * @return {boolean} True if the vertices contains point, otherwise false
     */Vertices.contains=function(vertices,point){var pointX=point.x,pointY=point.y,verticesLength=vertices.length,vertex=vertices[verticesLength-1],nextVertex;for(var i=0;i<verticesLength;i++){nextVertex=vertices[i];if((pointX-vertex.x)*(nextVertex.y-vertex.y)+(pointY-vertex.y)*(vertex.x-nextVertex.x)>0){return false;}vertex=nextVertex;}return true;};/**
     * Scales the vertices from a point (default is centre) in-place.
     * @method scale
     * @param {vertices} vertices
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     */Vertices.scale=function(vertices,scaleX,scaleY,point){if(scaleX===1&&scaleY===1)return vertices;point=point||Vertices.centre(vertices);var vertex,delta;for(var i=0;i<vertices.length;i++){vertex=vertices[i];delta=Vector.sub(vertex,point);vertices[i].x=point.x+delta.x*scaleX;vertices[i].y=point.y+delta.y*scaleY;}return vertices;};/**
     * Chamfers a set of vertices by giving them rounded corners, returns a new set of vertices.
     * The radius parameter is a single number or an array to specify the radius for each vertex.
     * @method chamfer
     * @param {vertices} vertices
     * @param {number[]} radius
     * @param {number} quality
     * @param {number} qualityMin
     * @param {number} qualityMax
     */Vertices.chamfer=function(vertices,radius,quality,qualityMin,qualityMax){if(typeof radius==='number'){radius=[radius];}else{radius=radius||[8];}// quality defaults to -1, which is auto
quality=typeof quality!=='undefined'?quality:-1;qualityMin=qualityMin||2;qualityMax=qualityMax||14;var newVertices=[];for(var i=0;i<vertices.length;i++){var prevVertex=vertices[i-1>=0?i-1:vertices.length-1],vertex=vertices[i],nextVertex=vertices[(i+1)%vertices.length],currentRadius=radius[i<radius.length?i:radius.length-1];if(currentRadius===0){newVertices.push(vertex);continue;}var prevNormal=Vector.normalise({x:vertex.y-prevVertex.y,y:prevVertex.x-vertex.x});var nextNormal=Vector.normalise({x:nextVertex.y-vertex.y,y:vertex.x-nextVertex.x});var diagonalRadius=Math.sqrt(2*Math.pow(currentRadius,2)),radiusVector=Vector.mult(Common.clone(prevNormal),currentRadius),midNormal=Vector.normalise(Vector.mult(Vector.add(prevNormal,nextNormal),0.5)),scaledVertex=Vector.sub(vertex,Vector.mult(midNormal,diagonalRadius));var precision=quality;if(quality===-1){// automatically decide precision
precision=Math.pow(currentRadius,0.32)*1.75;}precision=Common.clamp(precision,qualityMin,qualityMax);// use an even value for precision, more likely to reduce axes by using symmetry
if(precision%2===1)precision+=1;var alpha=Math.acos(Vector.dot(prevNormal,nextNormal)),theta=alpha/precision;for(var j=0;j<precision;j++){newVertices.push(Vector.add(Vector.rotate(radiusVector,theta*j),scaledVertex));}}return newVertices;};/**
     * Sorts the input vertices into clockwise order in place.
     * @method clockwiseSort
     * @param {vertices} vertices
     * @return {vertices} vertices
     */Vertices.clockwiseSort=function(vertices){var centre=Vertices.mean(vertices);vertices.sort(function(vertexA,vertexB){return Vector.angle(centre,vertexA)-Vector.angle(centre,vertexB);});return vertices;};/**
     * Returns true if the vertices form a convex shape (vertices must be in clockwise order).
     * @method isConvex
     * @param {vertices} vertices
     * @return {bool} `true` if the `vertices` are convex, `false` if not (or `null` if not computable).
     */Vertices.isConvex=function(vertices){// http://paulbourke.net/geometry/polygonmesh/
// Copyright (c) Paul Bourke (use permitted)
var flag=0,n=vertices.length,i,j,k,z;if(n<3)return null;for(i=0;i<n;i++){j=(i+1)%n;k=(i+2)%n;z=(vertices[j].x-vertices[i].x)*(vertices[k].y-vertices[j].y);z-=(vertices[j].y-vertices[i].y)*(vertices[k].x-vertices[j].x);if(z<0){flag|=1;}else if(z>0){flag|=2;}if(flag===3){return false;}}if(flag!==0){return true;}else{return null;}};/**
     * Returns the convex hull of the input vertices as a new array of points.
     * @method hull
     * @param {vertices} vertices
     * @return [vertex] vertices
     */Vertices.hull=function(vertices){// http://geomalgorithms.com/a10-_hull-1.html
var upper=[],lower=[],vertex,i;// sort vertices on x-axis (y-axis for ties)
vertices=vertices.slice(0);vertices.sort(function(vertexA,vertexB){var dx=vertexA.x-vertexB.x;return dx!==0?dx:vertexA.y-vertexB.y;});// build lower hull
for(i=0;i<vertices.length;i+=1){vertex=vertices[i];while(lower.length>=2&&Vector.cross3(lower[lower.length-2],lower[lower.length-1],vertex)<=0){lower.pop();}lower.push(vertex);}// build upper hull
for(i=vertices.length-1;i>=0;i-=1){vertex=vertices[i];while(upper.length>=2&&Vector.cross3(upper[upper.length-2],upper[upper.length-1],vertex)<=0){upper.pop();}upper.push(vertex);}// concatenation of the lower and upper hulls gives the convex hull
// omit last points because they are repeated at the beginning of the other list
upper.pop();lower.pop();return upper.concat(lower);};})();/***/},/* 4 */ /***/function(module,exports,__nested_webpack_require_49501__){/**
* The `Matter.Events` module contains methods to fire and listen to events on other objects.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Events
*/var Events={};module.exports=Events;var Common=__nested_webpack_require_49501__(0);(function(){/**
     * Subscribes a callback function to the given object's `eventName`.
     * @method on
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */Events.on=function(object,eventNames,callback){var names=eventNames.split(' '),name;for(var i=0;i<names.length;i++){name=names[i];object.events=object.events||{};object.events[name]=object.events[name]||[];object.events[name].push(callback);}return callback;};/**
     * Removes the given event callback. If no callback, clears all callbacks in `eventNames`. If no `eventNames`, clears all events.
     * @method off
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */Events.off=function(object,eventNames,callback){if(!eventNames){object.events={};return;}// handle Events.off(object, callback)
if(typeof eventNames==='function'){callback=eventNames;eventNames=Common.keys(object.events).join(' ');}var names=eventNames.split(' ');for(var i=0;i<names.length;i++){var callbacks=object.events[names[i]],newCallbacks=[];if(callback&&callbacks){for(var j=0;j<callbacks.length;j++){if(callbacks[j]!==callback)newCallbacks.push(callbacks[j]);}}object.events[names[i]]=newCallbacks;}};/**
     * Fires all the callbacks subscribed to the given object's `eventName`, in the order they subscribed, if any.
     * @method trigger
     * @param {} object
     * @param {string} eventNames
     * @param {} event
     */Events.trigger=function(object,eventNames,event){var names,name,callbacks,eventClone;var events=object.events;if(events&&Common.keys(events).length>0){if(!event)event={};names=eventNames.split(' ');for(var i=0;i<names.length;i++){name=names[i];callbacks=events[name];if(callbacks){eventClone=Common.clone(event,false);eventClone.name=name;eventClone.source=object;for(var j=0;j<callbacks.length;j++){callbacks[j].apply(object,[eventClone]);}}}}};})();/***/},/* 5 */ /***/function(module,exports,__nested_webpack_require_52699__){/**
* A composite is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite` objects.
*
* They are a container that can represent complex objects made of multiple parts, even if they are not physically connected.
* A composite could contain anything from a single body all the way up to a whole world.
* 
* When making any changes to composites, use the included functions rather than changing their properties directly.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composite
*/var Composite={};module.exports=Composite;var Events=__nested_webpack_require_52699__(4);var Common=__nested_webpack_require_52699__(0);var Bounds=__nested_webpack_require_52699__(1);var Body=__nested_webpack_require_52699__(6);(function(){/**
     * Creates a new composite. The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properites section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} [options]
     * @return {composite} A new composite
     */Composite.create=function(options){return Common.extend({id:Common.nextId(),type:'composite',parent:null,isModified:false,bodies:[],constraints:[],composites:[],label:'Composite',plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},options);};/**
     * Sets the composite's `isModified` flag. 
     * If `updateParents` is true, all parents will be set (default: false).
     * If `updateChildren` is true, all children will be set (default: false).
     * @private
     * @method setModified
     * @param {composite} composite
     * @param {boolean} isModified
     * @param {boolean} [updateParents=false]
     * @param {boolean} [updateChildren=false]
     */Composite.setModified=function(composite,isModified,updateParents,updateChildren){composite.isModified=isModified;if(isModified&&composite.cache){composite.cache.allBodies=null;composite.cache.allConstraints=null;composite.cache.allComposites=null;}if(updateParents&&composite.parent){Composite.setModified(composite.parent,isModified,updateParents,updateChildren);}if(updateChildren){for(var i=0;i<composite.composites.length;i++){var childComposite=composite.composites[i];Composite.setModified(childComposite,isModified,updateParents,updateChildren);}}};/**
     * Generic single or multi-add function. Adds a single or an array of body(s), constraint(s) or composite(s) to the given composite.
     * Triggers `beforeAdd` and `afterAdd` events on the `composite`.
     * @method add
     * @param {composite} composite
     * @param {object|array} object A single or an array of body(s), constraint(s) or composite(s)
     * @return {composite} The original composite with the objects added
     */Composite.add=function(composite,object){var objects=[].concat(object);Events.trigger(composite,'beforeAdd',{object:object});for(var i=0;i<objects.length;i++){var obj=objects[i];switch(obj.type){case'body':// skip adding compound parts
if(obj.parent!==obj){Common.warn('Composite.add: skipped adding a compound body part (you must add its parent instead)');break;}Composite.addBody(composite,obj);break;case'constraint':Composite.addConstraint(composite,obj);break;case'composite':Composite.addComposite(composite,obj);break;case'mouseConstraint':Composite.addConstraint(composite,obj.constraint);break;}}Events.trigger(composite,'afterAdd',{object:object});return composite;};/**
     * Generic remove function. Removes one or many body(s), constraint(s) or a composite(s) to the given composite.
     * Optionally searching its children recursively.
     * Triggers `beforeRemove` and `afterRemove` events on the `composite`.
     * @method remove
     * @param {composite} composite
     * @param {object|array} object
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the objects removed
     */Composite.remove=function(composite,object,deep){var objects=[].concat(object);Events.trigger(composite,'beforeRemove',{object:object});for(var i=0;i<objects.length;i++){var obj=objects[i];switch(obj.type){case'body':Composite.removeBody(composite,obj,deep);break;case'constraint':Composite.removeConstraint(composite,obj,deep);break;case'composite':Composite.removeComposite(composite,obj,deep);break;case'mouseConstraint':Composite.removeConstraint(composite,obj.constraint);break;}}Events.trigger(composite,'afterRemove',{object:object});return composite;};/**
     * Adds a composite to the given composite.
     * @private
     * @method addComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @return {composite} The original compositeA with the objects from compositeB added
     */Composite.addComposite=function(compositeA,compositeB){compositeA.composites.push(compositeB);compositeB.parent=compositeA;Composite.setModified(compositeA,true,true,false);return compositeA;};/**
     * Removes a composite from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @param {boolean} [deep=false]
     * @return {composite} The original compositeA with the composite removed
     */Composite.removeComposite=function(compositeA,compositeB,deep){var position=Common.indexOf(compositeA.composites,compositeB);if(position!==-1){Composite.removeCompositeAt(compositeA,position);}if(deep){for(var i=0;i<compositeA.composites.length;i++){Composite.removeComposite(compositeA.composites[i],compositeB,true);}}return compositeA;};/**
     * Removes a composite from the given composite.
     * @private
     * @method removeCompositeAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the composite removed
     */Composite.removeCompositeAt=function(composite,position){composite.composites.splice(position,1);Composite.setModified(composite,true,true,false);return composite;};/**
     * Adds a body to the given composite.
     * @private
     * @method addBody
     * @param {composite} composite
     * @param {body} body
     * @return {composite} The original composite with the body added
     */Composite.addBody=function(composite,body){composite.bodies.push(body);Composite.setModified(composite,true,true,false);return composite;};/**
     * Removes a body from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeBody
     * @param {composite} composite
     * @param {body} body
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the body removed
     */Composite.removeBody=function(composite,body,deep){var position=Common.indexOf(composite.bodies,body);if(position!==-1){Composite.removeBodyAt(composite,position);}if(deep){for(var i=0;i<composite.composites.length;i++){Composite.removeBody(composite.composites[i],body,true);}}return composite;};/**
     * Removes a body from the given composite.
     * @private
     * @method removeBodyAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the body removed
     */Composite.removeBodyAt=function(composite,position){composite.bodies.splice(position,1);Composite.setModified(composite,true,true,false);return composite;};/**
     * Adds a constraint to the given composite.
     * @private
     * @method addConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @return {composite} The original composite with the constraint added
     */Composite.addConstraint=function(composite,constraint){composite.constraints.push(constraint);Composite.setModified(composite,true,true,false);return composite;};/**
     * Removes a constraint from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the constraint removed
     */Composite.removeConstraint=function(composite,constraint,deep){var position=Common.indexOf(composite.constraints,constraint);if(position!==-1){Composite.removeConstraintAt(composite,position);}if(deep){for(var i=0;i<composite.composites.length;i++){Composite.removeConstraint(composite.composites[i],constraint,true);}}return composite;};/**
     * Removes a body from the given composite.
     * @private
     * @method removeConstraintAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the constraint removed
     */Composite.removeConstraintAt=function(composite,position){composite.constraints.splice(position,1);Composite.setModified(composite,true,true,false);return composite;};/**
     * Removes all bodies, constraints and composites from the given composite.
     * Optionally clearing its children recursively.
     * @method clear
     * @param {composite} composite
     * @param {boolean} keepStatic
     * @param {boolean} [deep=false]
     */Composite.clear=function(composite,keepStatic,deep){if(deep){for(var i=0;i<composite.composites.length;i++){Composite.clear(composite.composites[i],keepStatic,true);}}if(keepStatic){composite.bodies=composite.bodies.filter(function(body){return body.isStatic;});}else{composite.bodies.length=0;}composite.constraints.length=0;composite.composites.length=0;Composite.setModified(composite,true,true,false);return composite;};/**
     * Returns all bodies in the given composite, including all bodies in its children, recursively.
     * @method allBodies
     * @param {composite} composite
     * @return {body[]} All the bodies
     */Composite.allBodies=function(composite){if(composite.cache&&composite.cache.allBodies){return composite.cache.allBodies;}var bodies=[].concat(composite.bodies);for(var i=0;i<composite.composites.length;i++){bodies=bodies.concat(Composite.allBodies(composite.composites[i]));}if(composite.cache){composite.cache.allBodies=bodies;}return bodies;};/**
     * Returns all constraints in the given composite, including all constraints in its children, recursively.
     * @method allConstraints
     * @param {composite} composite
     * @return {constraint[]} All the constraints
     */Composite.allConstraints=function(composite){if(composite.cache&&composite.cache.allConstraints){return composite.cache.allConstraints;}var constraints=[].concat(composite.constraints);for(var i=0;i<composite.composites.length;i++){constraints=constraints.concat(Composite.allConstraints(composite.composites[i]));}if(composite.cache){composite.cache.allConstraints=constraints;}return constraints;};/**
     * Returns all composites in the given composite, including all composites in its children, recursively.
     * @method allComposites
     * @param {composite} composite
     * @return {composite[]} All the composites
     */Composite.allComposites=function(composite){if(composite.cache&&composite.cache.allComposites){return composite.cache.allComposites;}var composites=[].concat(composite.composites);for(var i=0;i<composite.composites.length;i++){composites=composites.concat(Composite.allComposites(composite.composites[i]));}if(composite.cache){composite.cache.allComposites=composites;}return composites;};/**
     * Searches the composite recursively for an object matching the type and id supplied, null if not found.
     * @method get
     * @param {composite} composite
     * @param {number} id
     * @param {string} type
     * @return {object} The requested object, if found
     */Composite.get=function(composite,id,type){var objects,object;switch(type){case'body':objects=Composite.allBodies(composite);break;case'constraint':objects=Composite.allConstraints(composite);break;case'composite':objects=Composite.allComposites(composite).concat(composite);break;}if(!objects)return null;object=objects.filter(function(object){return object.id.toString()===id.toString();});return object.length===0?null:object[0];};/**
     * Moves the given object(s) from compositeA to compositeB (equal to a remove followed by an add).
     * @method move
     * @param {compositeA} compositeA
     * @param {object[]} objects
     * @param {compositeB} compositeB
     * @return {composite} Returns compositeA
     */Composite.move=function(compositeA,objects,compositeB){Composite.remove(compositeA,objects);Composite.add(compositeB,objects);return compositeA;};/**
     * Assigns new ids for all objects in the composite, recursively.
     * @method rebase
     * @param {composite} composite
     * @return {composite} Returns composite
     */Composite.rebase=function(composite){var objects=Composite.allBodies(composite).concat(Composite.allConstraints(composite)).concat(Composite.allComposites(composite));for(var i=0;i<objects.length;i++){objects[i].id=Common.nextId();}return composite;};/**
     * Translates all children in the composite by a given vector relative to their current positions, 
     * without imparting any velocity.
     * @method translate
     * @param {composite} composite
     * @param {vector} translation
     * @param {bool} [recursive=true]
     */Composite.translate=function(composite,translation,recursive){var bodies=recursive?Composite.allBodies(composite):composite.bodies;for(var i=0;i<bodies.length;i++){Body.translate(bodies[i],translation);}return composite;};/**
     * Rotates all children in the composite by a given angle about the given point, without imparting any angular velocity.
     * @method rotate
     * @param {composite} composite
     * @param {number} rotation
     * @param {vector} point
     * @param {bool} [recursive=true]
     */Composite.rotate=function(composite,rotation,point,recursive){var cos=Math.cos(rotation),sin=Math.sin(rotation),bodies=recursive?Composite.allBodies(composite):composite.bodies;for(var i=0;i<bodies.length;i++){var body=bodies[i],dx=body.position.x-point.x,dy=body.position.y-point.y;Body.setPosition(body,{x:point.x+(dx*cos-dy*sin),y:point.y+(dx*sin+dy*cos)});Body.rotate(body,rotation);}return composite;};/**
     * Scales all children in the composite, including updating physical properties (mass, area, axes, inertia), from a world-space point.
     * @method scale
     * @param {composite} composite
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     * @param {bool} [recursive=true]
     */Composite.scale=function(composite,scaleX,scaleY,point,recursive){var bodies=recursive?Composite.allBodies(composite):composite.bodies;for(var i=0;i<bodies.length;i++){var body=bodies[i],dx=body.position.x-point.x,dy=body.position.y-point.y;Body.setPosition(body,{x:point.x+dx*scaleX,y:point.y+dy*scaleY});Body.scale(body,scaleX,scaleY);}return composite;};/**
     * Returns the union of the bounds of all of the composite's bodies.
     * @method bounds
     * @param {composite} composite The composite.
     * @returns {bounds} The composite bounds.
     */Composite.bounds=function(composite){var bodies=Composite.allBodies(composite),vertices=[];for(var i=0;i<bodies.length;i+=1){var body=bodies[i];vertices.push(body.bounds.min,body.bounds.max);}return Bounds.create(vertices);};/*
    *
    *  Events Documentation
    *
    */ /**
    * Fired when a call to `Composite.add` is made, before objects have been added.
    *
    * @event beforeAdd
    * @param {} event An event object
    * @param {} event.object The object(s) to be added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when a call to `Composite.add` is made, after objects have been added.
    *
    * @event afterAdd
    * @param {} event An event object
    * @param {} event.object The object(s) that have been added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when a call to `Composite.remove` is made, before objects have been removed.
    *
    * @event beforeRemove
    * @param {} event An event object
    * @param {} event.object The object(s) to be removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when a call to `Composite.remove` is made, after objects have been removed.
    *
    * @event afterRemove
    * @param {} event An event object
    * @param {} event.object The object(s) that have been removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /*
    *
    *  Properties Documentation
    *
    */ /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */ /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "composite"
     * @readOnly
     */ /**
     * An arbitrary `String` name to help the user identify and manage composites.
     *
     * @property label
     * @type string
     * @default "Composite"
     */ /**
     * A flag that specifies whether the composite has been modified during the current step.
     * This is automatically managed when bodies, constraints or composites are added or removed.
     *
     * @property isModified
     * @type boolean
     * @default false
     */ /**
     * The `Composite` that is the parent of this composite. It is automatically managed by the `Matter.Composite` methods.
     *
     * @property parent
     * @type composite
     * @default null
     */ /**
     * An array of `Body` that are _direct_ children of this composite.
     * To add or remove bodies you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allBodies` method.
     *
     * @property bodies
     * @type body[]
     * @default []
     */ /**
     * An array of `Constraint` that are _direct_ children of this composite.
     * To add or remove constraints you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allConstraints` method.
     *
     * @property constraints
     * @type constraint[]
     * @default []
     */ /**
     * An array of `Composite` that are _direct_ children of this composite.
     * To add or remove composites you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allComposites` method.
     *
     * @property composites
     * @type composite[]
     * @default []
     */ /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */ /**
     * An object used for storing cached results for performance reasons.
     * This is used internally only and is automatically managed.
     *
     * @private
     * @property cache
     * @type {}
     */})();/***/},/* 6 */ /***/function(module,exports,__nested_webpack_require_76386__){/**
* The `Matter.Body` module contains methods for creating and manipulating body models.
* A `Matter.Body` is a rigid body that can be simulated by a `Matter.Engine`.
* Factories for commonly used body configurations (such as rectangles, circles and other polygons) can be found in the module `Matter.Bodies`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).

* @class Body
*/var Body={};module.exports=Body;var Vertices=__nested_webpack_require_76386__(3);var Vector=__nested_webpack_require_76386__(2);var Sleeping=__nested_webpack_require_76386__(7);var Render=__nested_webpack_require_76386__(16);var Common=__nested_webpack_require_76386__(0);var Bounds=__nested_webpack_require_76386__(1);var Axes=__nested_webpack_require_76386__(11);(function(){Body._inertiaScale=4;Body._nextCollidingGroupId=1;Body._nextNonCollidingGroupId=-1;Body._nextCategory=0x0001;/**
     * Creates a new rigid body model. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * Vertices must be specified in clockwise order.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {body} body
     */Body.create=function(options){var defaults={id:Common.nextId(),type:'body',label:'Body',parts:[],plugin:{},angle:0,vertices:Vertices.fromPath('L 0 0 L 40 0 L 40 40 L 0 40'),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:false,isStatic:false,isSleeping:false,motion:0,sleepThreshold:60,density:0.001,restitution:0,friction:0.1,frictionStatic:0.5,frictionAir:0.01,collisionFilter:{category:0x0001,mask:0xFFFFFFFF,group:0},slop:0.05,timeScale:1,render:{visible:true,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,_original:null};var body=Common.extend(defaults,options);_initProperties(body,options);return body;};/**
     * Returns the next unique group index for which bodies will collide.
     * If `isNonColliding` is `true`, returns the next unique group index for which bodies will _not_ collide.
     * See `body.collisionFilter` for more information.
     * @method nextGroup
     * @param {bool} [isNonColliding=false]
     * @return {Number} Unique group index
     */Body.nextGroup=function(isNonColliding){if(isNonColliding)return Body._nextNonCollidingGroupId--;return Body._nextCollidingGroupId++;};/**
     * Returns the next unique category bitfield (starting after the initial default category `0x0001`).
     * There are 32 available. See `body.collisionFilter` for more information.
     * @method nextCategory
     * @return {Number} Unique category bitfield
     */Body.nextCategory=function(){Body._nextCategory=Body._nextCategory<<1;return Body._nextCategory;};/**
     * Initialises body properties.
     * @method _initProperties
     * @private
     * @param {body} body
     * @param {} [options]
     */var _initProperties=function _initProperties(body,options){options=options||{};// init required properties (order is important)
Body.set(body,{bounds:body.bounds||Bounds.create(body.vertices),positionPrev:body.positionPrev||Vector.clone(body.position),anglePrev:body.anglePrev||body.angle,vertices:body.vertices,parts:body.parts||[body],isStatic:body.isStatic,isSleeping:body.isSleeping,parent:body.parent||body});Vertices.rotate(body.vertices,body.angle,body.position);Axes.rotate(body.axes,body.angle);Bounds.update(body.bounds,body.vertices,body.velocity);// allow options to override the automatically calculated properties
Body.set(body,{axes:options.axes||body.axes,area:options.area||body.area,mass:options.mass||body.mass,inertia:options.inertia||body.inertia});// render properties
var defaultFillStyle=body.isStatic?'#14151f':Common.choose(['#f19648','#f5d259','#f55a3c','#063e7b','#ececd1']),defaultStrokeStyle=body.isStatic?'#555':'#ccc',defaultLineWidth=body.isStatic&&body.render.fillStyle===null?1:0;body.render.fillStyle=body.render.fillStyle||defaultFillStyle;body.render.strokeStyle=body.render.strokeStyle||defaultStrokeStyle;body.render.lineWidth=body.render.lineWidth||defaultLineWidth;body.render.sprite.xOffset+=-(body.bounds.min.x-body.position.x)/(body.bounds.max.x-body.bounds.min.x);body.render.sprite.yOffset+=-(body.bounds.min.y-body.position.y)/(body.bounds.max.y-body.bounds.min.y);};/**
     * Given a property and a value (or map of), sets the property(s) on the body, using the appropriate setter functions if they exist.
     * Prefer to use the actual setter functions in performance critical situations.
     * @method set
     * @param {body} body
     * @param {} settings A property name (or map of properties and values) to set on the body.
     * @param {} value The value to set if `settings` is a single property name.
     */Body.set=function(body,settings,value){var property;if(typeof settings==='string'){property=settings;settings={};settings[property]=value;}for(property in settings){if(!Object.prototype.hasOwnProperty.call(settings,property))continue;value=settings[property];switch(property){case'isStatic':Body.setStatic(body,value);break;case'isSleeping':Sleeping.set(body,value);break;case'mass':Body.setMass(body,value);break;case'density':Body.setDensity(body,value);break;case'inertia':Body.setInertia(body,value);break;case'vertices':Body.setVertices(body,value);break;case'position':Body.setPosition(body,value);break;case'angle':Body.setAngle(body,value);break;case'velocity':Body.setVelocity(body,value);break;case'angularVelocity':Body.setAngularVelocity(body,value);break;case'parts':Body.setParts(body,value);break;case'centre':Body.setCentre(body,value);break;default:body[property]=value;}}};/**
     * Sets the body as static, including isStatic flag and setting mass and inertia to Infinity.
     * @method setStatic
     * @param {body} body
     * @param {bool} isStatic
     */Body.setStatic=function(body,isStatic){for(var i=0;i<body.parts.length;i++){var part=body.parts[i];part.isStatic=isStatic;if(isStatic){part._original={restitution:part.restitution,friction:part.friction,mass:part.mass,inertia:part.inertia,density:part.density,inverseMass:part.inverseMass,inverseInertia:part.inverseInertia};part.restitution=0;part.friction=1;part.mass=part.inertia=part.density=Infinity;part.inverseMass=part.inverseInertia=0;part.positionPrev.x=part.position.x;part.positionPrev.y=part.position.y;part.anglePrev=part.angle;part.angularVelocity=0;part.speed=0;part.angularSpeed=0;part.motion=0;}else if(part._original){part.restitution=part._original.restitution;part.friction=part._original.friction;part.mass=part._original.mass;part.inertia=part._original.inertia;part.density=part._original.density;part.inverseMass=part._original.inverseMass;part.inverseInertia=part._original.inverseInertia;part._original=null;}}};/**
     * Sets the mass of the body. Inverse mass, density and inertia are automatically updated to reflect the change.
     * @method setMass
     * @param {body} body
     * @param {number} mass
     */Body.setMass=function(body,mass){var moment=body.inertia/(body.mass/6);body.inertia=moment*(mass/6);body.inverseInertia=1/body.inertia;body.mass=mass;body.inverseMass=1/body.mass;body.density=body.mass/body.area;};/**
     * Sets the density of the body. Mass and inertia are automatically updated to reflect the change.
     * @method setDensity
     * @param {body} body
     * @param {number} density
     */Body.setDensity=function(body,density){Body.setMass(body,density*body.area);body.density=density;};/**
     * Sets the moment of inertia (i.e. second moment of area) of the body. 
     * Inverse inertia is automatically updated to reflect the change. Mass is not changed.
     * @method setInertia
     * @param {body} body
     * @param {number} inertia
     */Body.setInertia=function(body,inertia){body.inertia=inertia;body.inverseInertia=1/body.inertia;};/**
     * Sets the body's vertices and updates body properties accordingly, including inertia, area and mass (with respect to `body.density`).
     * Vertices will be automatically transformed to be orientated around their centre of mass as the origin.
     * They are then automatically translated to world space based on `body.position`.
     *
     * The `vertices` argument should be passed as an array of `Matter.Vector` points (or a `Matter.Vertices` array).
     * Vertices must form a convex hull, concave hulls are not supported.
     *
     * @method setVertices
     * @param {body} body
     * @param {vector[]} vertices
     */Body.setVertices=function(body,vertices){// change vertices
if(vertices[0].body===body){body.vertices=vertices;}else{body.vertices=Vertices.create(vertices,body);}// update properties
body.axes=Axes.fromVertices(body.vertices);body.area=Vertices.area(body.vertices);Body.setMass(body,body.density*body.area);// orient vertices around the centre of mass at origin (0, 0)
var centre=Vertices.centre(body.vertices);Vertices.translate(body.vertices,centre,-1);// update inertia while vertices are at origin (0, 0)
Body.setInertia(body,Body._inertiaScale*Vertices.inertia(body.vertices,body.mass));// update geometry
Vertices.translate(body.vertices,body.position);Bounds.update(body.bounds,body.vertices,body.velocity);};/**
     * Sets the parts of the `body` and updates mass, inertia and centroid.
     * Each part will have its parent set to `body`.
     * By default the convex hull will be automatically computed and set on `body`, unless `autoHull` is set to `false.`
     * Note that this method will ensure that the first part in `body.parts` will always be the `body`.
     * @method setParts
     * @param {body} body
     * @param [body] parts
     * @param {bool} [autoHull=true]
     */Body.setParts=function(body,parts,autoHull){var i;// add all the parts, ensuring that the first part is always the parent body
parts=parts.slice(0);body.parts.length=0;body.parts.push(body);body.parent=body;for(i=0;i<parts.length;i++){var part=parts[i];if(part!==body){part.parent=body;body.parts.push(part);}}if(body.parts.length===1)return;autoHull=typeof autoHull!=='undefined'?autoHull:true;// find the convex hull of all parts to set on the parent body
if(autoHull){var vertices=[];for(i=0;i<parts.length;i++){vertices=vertices.concat(parts[i].vertices);}Vertices.clockwiseSort(vertices);var hull=Vertices.hull(vertices),hullCentre=Vertices.centre(hull);Body.setVertices(body,hull);Vertices.translate(body.vertices,hullCentre);}// sum the properties of all compound parts of the parent body
var total=Body._totalProperties(body);body.area=total.area;body.parent=body;body.position.x=total.centre.x;body.position.y=total.centre.y;body.positionPrev.x=total.centre.x;body.positionPrev.y=total.centre.y;Body.setMass(body,total.mass);Body.setInertia(body,total.inertia);Body.setPosition(body,total.centre);};/**
     * Set the centre of mass of the body. 
     * The `centre` is a vector in world-space unless `relative` is set, in which case it is a translation.
     * The centre of mass is the point the body rotates about and can be used to simulate non-uniform density.
     * This is equal to moving `body.position` but not the `body.vertices`.
     * Invalid if the `centre` falls outside the body's convex hull.
     * @method setCentre
     * @param {body} body
     * @param {vector} centre
     * @param {bool} relative
     */Body.setCentre=function(body,centre,relative){if(!relative){body.positionPrev.x=centre.x-(body.position.x-body.positionPrev.x);body.positionPrev.y=centre.y-(body.position.y-body.positionPrev.y);body.position.x=centre.x;body.position.y=centre.y;}else{body.positionPrev.x+=centre.x;body.positionPrev.y+=centre.y;body.position.x+=centre.x;body.position.y+=centre.y;}};/**
     * Sets the position of the body instantly. Velocity, angle, force etc. are unchanged.
     * @method setPosition
     * @param {body} body
     * @param {vector} position
     */Body.setPosition=function(body,position){var delta=Vector.sub(position,body.position);body.positionPrev.x+=delta.x;body.positionPrev.y+=delta.y;for(var i=0;i<body.parts.length;i++){var part=body.parts[i];part.position.x+=delta.x;part.position.y+=delta.y;Vertices.translate(part.vertices,delta);Bounds.update(part.bounds,part.vertices,body.velocity);}};/**
     * Sets the angle of the body instantly. Angular velocity, position, force etc. are unchanged.
     * @method setAngle
     * @param {body} body
     * @param {number} angle
     */Body.setAngle=function(body,angle){var delta=angle-body.angle;body.anglePrev+=delta;for(var i=0;i<body.parts.length;i++){var part=body.parts[i];part.angle+=delta;Vertices.rotate(part.vertices,delta,body.position);Axes.rotate(part.axes,delta);Bounds.update(part.bounds,part.vertices,body.velocity);if(i>0){Vector.rotateAbout(part.position,delta,body.position,part.position);}}};/**
     * Sets the linear velocity of the body instantly. Position, angle, force etc. are unchanged. See also `Body.applyForce`.
     * @method setVelocity
     * @param {body} body
     * @param {vector} velocity
     */Body.setVelocity=function(body,velocity){body.positionPrev.x=body.position.x-velocity.x;body.positionPrev.y=body.position.y-velocity.y;body.velocity.x=velocity.x;body.velocity.y=velocity.y;body.speed=Vector.magnitude(body.velocity);};/**
     * Sets the angular velocity of the body instantly. Position, angle, force etc. are unchanged. See also `Body.applyForce`.
     * @method setAngularVelocity
     * @param {body} body
     * @param {number} velocity
     */Body.setAngularVelocity=function(body,velocity){body.anglePrev=body.angle-velocity;body.angularVelocity=velocity;body.angularSpeed=Math.abs(body.angularVelocity);};/**
     * Moves a body by a given vector relative to its current position, without imparting any velocity.
     * @method translate
     * @param {body} body
     * @param {vector} translation
     */Body.translate=function(body,translation){Body.setPosition(body,Vector.add(body.position,translation));};/**
     * Rotates a body by a given angle relative to its current angle, without imparting any angular velocity.
     * @method rotate
     * @param {body} body
     * @param {number} rotation
     * @param {vector} [point]
     */Body.rotate=function(body,rotation,point){if(!point){Body.setAngle(body,body.angle+rotation);}else{var cos=Math.cos(rotation),sin=Math.sin(rotation),dx=body.position.x-point.x,dy=body.position.y-point.y;Body.setPosition(body,{x:point.x+(dx*cos-dy*sin),y:point.y+(dx*sin+dy*cos)});Body.setAngle(body,body.angle+rotation);}};/**
     * Scales the body, including updating physical properties (mass, area, axes, inertia), from a world-space point (default is body centre).
     * @method scale
     * @param {body} body
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} [point]
     */Body.scale=function(body,scaleX,scaleY,point){var totalArea=0,totalInertia=0;point=point||body.position;for(var i=0;i<body.parts.length;i++){var part=body.parts[i];// scale vertices
Vertices.scale(part.vertices,scaleX,scaleY,point);// update properties
part.axes=Axes.fromVertices(part.vertices);part.area=Vertices.area(part.vertices);Body.setMass(part,body.density*part.area);// update inertia (requires vertices to be at origin)
Vertices.translate(part.vertices,{x:-part.position.x,y:-part.position.y});Body.setInertia(part,Body._inertiaScale*Vertices.inertia(part.vertices,part.mass));Vertices.translate(part.vertices,{x:part.position.x,y:part.position.y});if(i>0){totalArea+=part.area;totalInertia+=part.inertia;}// scale position
part.position.x=point.x+(part.position.x-point.x)*scaleX;part.position.y=point.y+(part.position.y-point.y)*scaleY;// update bounds
Bounds.update(part.bounds,part.vertices,body.velocity);}// handle parent body
if(body.parts.length>1){body.area=totalArea;if(!body.isStatic){Body.setMass(body,body.density*totalArea);Body.setInertia(body,totalInertia);}}// handle circles
if(body.circleRadius){if(scaleX===scaleY){body.circleRadius*=scaleX;}else{// body is no longer a circle
body.circleRadius=null;}}};/**
     * Performs a simulation step for the given `body`, including updating position and angle using Verlet integration.
     * @method update
     * @param {body} body
     * @param {number} deltaTime
     * @param {number} timeScale
     * @param {number} correction
     */Body.update=function(body,deltaTime,timeScale,correction){var deltaTimeSquared=Math.pow(deltaTime*timeScale*body.timeScale,2);// from the previous step
var frictionAir=1-body.frictionAir*timeScale*body.timeScale,velocityPrevX=body.position.x-body.positionPrev.x,velocityPrevY=body.position.y-body.positionPrev.y;// update velocity with Verlet integration
body.velocity.x=velocityPrevX*frictionAir*correction+body.force.x/body.mass*deltaTimeSquared;body.velocity.y=velocityPrevY*frictionAir*correction+body.force.y/body.mass*deltaTimeSquared;body.positionPrev.x=body.position.x;body.positionPrev.y=body.position.y;body.position.x+=body.velocity.x;body.position.y+=body.velocity.y;// update angular velocity with Verlet integration
body.angularVelocity=(body.angle-body.anglePrev)*frictionAir*correction+body.torque/body.inertia*deltaTimeSquared;body.anglePrev=body.angle;body.angle+=body.angularVelocity;// track speed and acceleration
body.speed=Vector.magnitude(body.velocity);body.angularSpeed=Math.abs(body.angularVelocity);// transform the body geometry
for(var i=0;i<body.parts.length;i++){var part=body.parts[i];Vertices.translate(part.vertices,body.velocity);if(i>0){part.position.x+=body.velocity.x;part.position.y+=body.velocity.y;}if(body.angularVelocity!==0){Vertices.rotate(part.vertices,body.angularVelocity,body.position);Axes.rotate(part.axes,body.angularVelocity);if(i>0){Vector.rotateAbout(part.position,body.angularVelocity,body.position,part.position);}}Bounds.update(part.bounds,part.vertices,body.velocity);}};/**
     * Applies a force to a body from a given world-space position, including resulting torque.
     * @method applyForce
     * @param {body} body
     * @param {vector} position
     * @param {vector} force
     */Body.applyForce=function(body,position,force){body.force.x+=force.x;body.force.y+=force.y;var offset={x:position.x-body.position.x,y:position.y-body.position.y};body.torque+=offset.x*force.y-offset.y*force.x;};/**
     * Returns the sums of the properties of all compound parts of the parent body.
     * @method _totalProperties
     * @private
     * @param {body} body
     * @return {}
     */Body._totalProperties=function(body){// from equations at:
// https://ecourses.ou.edu/cgi-bin/ebook.cgi?doc=&topic=st&chap_sec=07.2&page=theory
// http://output.to/sideway/default.asp?qno=121100087
var properties={mass:0,area:0,inertia:0,centre:{x:0,y:0}};// sum the properties of all compound parts of the parent body
for(var i=body.parts.length===1?0:1;i<body.parts.length;i++){var part=body.parts[i],mass=part.mass!==Infinity?part.mass:1;properties.mass+=mass;properties.area+=part.area;properties.inertia+=part.inertia;properties.centre=Vector.add(properties.centre,Vector.mult(part.position,mass));}properties.centre=Vector.div(properties.centre,properties.mass);return properties;};/*
    *
    *  Events Documentation
    *
    */ /**
    * Fired when a body starts sleeping (where `this` is the body).
    *
    * @event sleepStart
    * @this {body} The body that has started sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when a body ends sleeping (where `this` is the body).
    *
    * @event sleepEnd
    * @this {body} The body that has ended sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /*
    *
    *  Properties Documentation
    *
    */ /**
     * An integer `Number` uniquely identifying number generated in `Body.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */ /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "body"
     * @readOnly
     */ /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Body"
     */ /**
     * An array of bodies that make up this body. 
     * The first body in the array must always be a self reference to the current body instance.
     * All bodies in the `parts` array together form a single rigid compound body.
     * Parts are allowed to overlap, have gaps or holes or even form concave bodies.
     * Parts themselves should never be added to a `World`, only the parent body should be.
     * Use `Body.setParts` when setting parts to ensure correct updates of all properties.
     *
     * @property parts
     * @type body[]
     */ /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */ /**
     * A self reference if the body is _not_ a part of another body.
     * Otherwise this is a reference to the body that this is a part of.
     * See `body.parts`.
     *
     * @property parent
     * @type body
     */ /**
     * A `Number` specifying the angle of the body, in radians.
     *
     * @property angle
     * @type number
     * @default 0
     */ /**
     * An array of `Vector` objects that specify the convex hull of the rigid body.
     * These should be provided about the origin `(0, 0)`. E.g.
     *
     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
     *
     * When passed via `Body.create`, the vertices are translated relative to `body.position` (i.e. world-space, and constantly updated by `Body.update` during simulation).
     * The `Vector` objects are also augmented with additional properties required for efficient collision detection. 
     *
     * Other properties such as `inertia` and `bounds` are automatically calculated from the passed vertices (unless provided via `options`).
     * Concave hulls are not currently supported. The module `Matter.Vertices` contains useful methods for working with vertices.
     *
     * @property vertices
     * @type vector[]
     */ /**
     * A `Vector` that specifies the current world-space position of the body.
     *
     * @property position
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * A `Vector` that specifies the force to apply in the current step. It is zeroed after every `Body.update`. See also `Body.applyForce`.
     *
     * @property force
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * A `Number` that specifies the torque (turning force) to apply in the current step. It is zeroed after every `Body.update`.
     *
     * @property torque
     * @type number
     * @default 0
     */ /**
     * A `Number` that _measures_ the current speed of the body after the last `Body.update`. It is read-only and always positive (it's the magnitude of `body.velocity`).
     *
     * @readOnly
     * @property speed
     * @type number
     * @default 0
     */ /**
     * A `Number` that _measures_ the current angular speed of the body after the last `Body.update`. It is read-only and always positive (it's the magnitude of `body.angularVelocity`).
     *
     * @readOnly
     * @property angularSpeed
     * @type number
     * @default 0
     */ /**
     * A `Vector` that _measures_ the current velocity of the body after the last `Body.update`. It is read-only. 
     * If you need to modify a body's velocity directly, you should either apply a force or simply change the body's `position` (as the engine uses position-Verlet integration).
     *
     * @readOnly
     * @property velocity
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * A `Number` that _measures_ the current angular velocity of the body after the last `Body.update`. It is read-only. 
     * If you need to modify a body's angular velocity directly, you should apply a torque or simply change the body's `angle` (as the engine uses position-Verlet integration).
     *
     * @readOnly
     * @property angularVelocity
     * @type number
     * @default 0
     */ /**
     * A flag that indicates whether a body is considered static. A static body can never change position or angle and is completely fixed.
     * If you need to set a body as static after its creation, you should use `Body.setStatic` as this requires more than just setting this flag.
     *
     * @property isStatic
     * @type boolean
     * @default false
     */ /**
     * A flag that indicates whether a body is a sensor. Sensor triggers collision events, but doesn't react with colliding body physically.
     *
     * @property isSensor
     * @type boolean
     * @default false
     */ /**
     * A flag that indicates whether the body is considered sleeping. A sleeping body acts similar to a static body, except it is only temporary and can be awoken.
     * If you need to set a body as sleeping, you should use `Sleeping.set` as this requires more than just setting this flag.
     *
     * @property isSleeping
     * @type boolean
     * @default false
     */ /**
     * A `Number` that _measures_ the amount of movement a body currently has (a combination of `speed` and `angularSpeed`). It is read-only and always positive.
     * It is used and updated by the `Matter.Sleeping` module during simulation to decide if a body has come to rest.
     *
     * @readOnly
     * @property motion
     * @type number
     * @default 0
     */ /**
     * A `Number` that defines the number of updates in which this body must have near-zero velocity before it is set as sleeping by the `Matter.Sleeping` module (if sleeping is enabled by the engine).
     *
     * @property sleepThreshold
     * @type number
     * @default 60
     */ /**
     * A `Number` that defines the density of the body, that is its mass per unit area.
     * If you pass the density via `Body.create` the `mass` property is automatically calculated for you based on the size (area) of the object.
     * This is generally preferable to simply setting mass and allows for more intuitive definition of materials (e.g. rock has a higher density than wood).
     *
     * @property density
     * @type number
     * @default 0.001
     */ /**
     * A `Number` that defines the mass of the body, although it may be more appropriate to specify the `density` property instead.
     * If you modify this value, you must also modify the `body.inverseMass` property (`1 / mass`).
     *
     * @property mass
     * @type number
     */ /**
     * A `Number` that defines the inverse mass of the body (`1 / mass`).
     * If you modify this value, you must also modify the `body.mass` property.
     *
     * @property inverseMass
     * @type number
     */ /**
     * A `Number` that defines the moment of inertia (i.e. second moment of area) of the body.
     * It is automatically calculated from the given convex hull (`vertices` array) and density in `Body.create`.
     * If you modify this value, you must also modify the `body.inverseInertia` property (`1 / inertia`).
     *
     * @property inertia
     * @type number
     */ /**
     * A `Number` that defines the inverse moment of inertia of the body (`1 / inertia`).
     * If you modify this value, you must also modify the `body.inertia` property.
     *
     * @property inverseInertia
     * @type number
     */ /**
     * A `Number` that defines the restitution (elasticity) of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means collisions may be perfectly inelastic and no bouncing may occur. 
     * A value of `0.8` means the body may bounce back with approximately 80% of its kinetic energy.
     * Note that collision response is based on _pairs_ of bodies, and that `restitution` values are _combined_ with the following formula:
     *
     *     Math.max(bodyA.restitution, bodyB.restitution)
     *
     * @property restitution
     * @type number
     * @default 0
     */ /**
     * A `Number` that defines the friction of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means that the body may slide indefinitely.
     * A value of `1` means the body may come to a stop almost instantly after a force is applied.
     *
     * The effects of the value may be non-linear. 
     * High values may be unstable depending on the body.
     * The engine uses a Coulomb friction model including static and kinetic friction.
     * Note that collision response is based on _pairs_ of bodies, and that `friction` values are _combined_ with the following formula:
     *
     *     Math.min(bodyA.friction, bodyB.friction)
     *
     * @property friction
     * @type number
     * @default 0.1
     */ /**
     * A `Number` that defines the static friction of the body (in the Coulomb friction model). 
     * A value of `0` means the body will never 'stick' when it is nearly stationary and only dynamic `friction` is used.
     * The higher the value (e.g. `10`), the more force it will take to initially get the body moving when nearly stationary.
     * This value is multiplied with the `friction` property to make it easier to change `friction` and maintain an appropriate amount of static friction.
     *
     * @property frictionStatic
     * @type number
     * @default 0.5
     */ /**
     * A `Number` that defines the air friction of the body (air resistance). 
     * A value of `0` means the body will never slow as it moves through space.
     * The higher the value, the faster a body slows when moving through space.
     * The effects of the value are non-linear. 
     *
     * @property frictionAir
     * @type number
     * @default 0.01
     */ /**
     * An `Object` that specifies the collision filtering properties of this body.
     *
     * Collisions between two bodies will obey the following rules:
     * - If the two bodies have the same non-zero value of `collisionFilter.group`,
     *   they will always collide if the value is positive, and they will never collide
     *   if the value is negative.
     * - If the two bodies have different values of `collisionFilter.group` or if one
     *   (or both) of the bodies has a value of 0, then the category/mask rules apply as follows:
     *
     * Each body belongs to a collision category, given by `collisionFilter.category`. This
     * value is used as a bit field and the category should have only one bit set, meaning that
     * the value of this property is a power of two in the range [1, 2^31]. Thus, there are 32
     * different collision categories available.
     *
     * Each body also defines a collision bitmask, given by `collisionFilter.mask` which specifies
     * the categories it collides with (the value is the bitwise AND value of all these categories).
     *
     * Using the category/mask rules, two bodies `A` and `B` collide if each includes the other's
     * category in its mask, i.e. `(categoryA & maskB) !== 0` and `(categoryB & maskA) !== 0`
     * are both true.
     *
     * @property collisionFilter
     * @type object
     */ /**
     * An Integer `Number`, that specifies the collision group this body belongs to.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.group
     * @type object
     * @default 0
     */ /**
     * A bit field that specifies the collision category this body belongs to.
     * The category value should have only one bit set, for example `0x0001`.
     * This means there are up to 32 unique collision categories available.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.category
     * @type object
     * @default 1
     */ /**
     * A bit mask that specifies the collision categories this body may collide with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.mask
     * @type object
     * @default -1
     */ /**
     * A `Number` that specifies a tolerance on how far a body is allowed to 'sink' or rotate into other bodies.
     * Avoid changing this value unless you understand the purpose of `slop` in physics engines.
     * The default should generally suffice, although very large bodies may require larger values for stable stacking.
     *
     * @property slop
     * @type number
     * @default 0.05
     */ /**
     * A `Number` that allows per-body time scaling, e.g. a force-field where bodies inside are in slow-motion, while others are at full speed.
     *
     * @property timeScale
     * @type number
     * @default 1
     */ /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */ /**
     * A flag that indicates if the body should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */ /**
     * Sets the opacity to use when rendering.
     *
     * @property render.opacity
     * @type number
     * @default 1
    */ /**
     * An `Object` that defines the sprite properties to use when rendering, if any.
     *
     * @property render.sprite
     * @type object
     */ /**
     * An `String` that defines the path to the image to use as the sprite texture, if any.
     *
     * @property render.sprite.texture
     * @type string
     */ /**
     * A `Number` that defines the scaling in the x-axis for the sprite, if any.
     *
     * @property render.sprite.xScale
     * @type number
     * @default 1
     */ /**
     * A `Number` that defines the scaling in the y-axis for the sprite, if any.
     *
     * @property render.sprite.yScale
     * @type number
     * @default 1
     */ /**
      * A `Number` that defines the offset in the x-axis for the sprite (normalised by texture width).
      *
      * @property render.sprite.xOffset
      * @type number
      * @default 0
      */ /**
      * A `Number` that defines the offset in the y-axis for the sprite (normalised by texture height).
      *
      * @property render.sprite.yOffset
      * @type number
      * @default 0
      */ /**
     * A `Number` that defines the line width to use when rendering the body outline (if a sprite is not defined).
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 0
     */ /**
     * A `String` that defines the fill style to use when rendering the body (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.fillStyle
     * @type string
     * @default a random colour
     */ /**
     * A `String` that defines the stroke style to use when rendering the body outline (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */ /**
     * An array of unique axis vectors (edge normals) used for collision detection.
     * These are automatically calculated from the given convex hull (`vertices` array) in `Body.create`.
     * They are constantly updated by `Body.update` during the simulation.
     *
     * @property axes
     * @type vector[]
     */ /**
     * A `Number` that _measures_ the area of the body's convex hull, calculated at creation by `Body.create`.
     *
     * @property area
     * @type string
     * @default 
     */ /**
     * A `Bounds` object that defines the AABB region for the body.
     * It is automatically calculated from the given convex hull (`vertices` array) in `Body.create` and constantly updated by `Body.update` during simulation.
     *
     * @property bounds
     * @type bounds
     */})();/***/},/* 7 */ /***/function(module,exports,__nested_webpack_require_119708__){/**
* The `Matter.Sleeping` module contains methods to manage the sleeping state of bodies.
*
* @class Sleeping
*/var Sleeping={};module.exports=Sleeping;var Events=__nested_webpack_require_119708__(4);(function(){Sleeping._motionWakeThreshold=0.18;Sleeping._motionSleepThreshold=0.08;Sleeping._minBias=0.9;/**
     * Puts bodies to sleep or wakes them up depending on their motion.
     * @method update
     * @param {body[]} bodies
     * @param {number} timeScale
     */Sleeping.update=function(bodies,timeScale){var timeFactor=timeScale*timeScale*timeScale;// update bodies sleeping status
for(var i=0;i<bodies.length;i++){var body=bodies[i],motion=body.speed*body.speed+body.angularSpeed*body.angularSpeed;// wake up bodies if they have a force applied
if(body.force.x!==0||body.force.y!==0){Sleeping.set(body,false);continue;}var minMotion=Math.min(body.motion,motion),maxMotion=Math.max(body.motion,motion);// biased average motion estimation between frames
body.motion=Sleeping._minBias*minMotion+(1-Sleeping._minBias)*maxMotion;if(body.sleepThreshold>0&&body.motion<Sleeping._motionSleepThreshold*timeFactor){body.sleepCounter+=1;if(body.sleepCounter>=body.sleepThreshold)Sleeping.set(body,true);}else if(body.sleepCounter>0){body.sleepCounter-=1;}}};/**
     * Given a set of colliding pairs, wakes the sleeping bodies involved.
     * @method afterCollisions
     * @param {pair[]} pairs
     * @param {number} timeScale
     */Sleeping.afterCollisions=function(pairs,timeScale){var timeFactor=timeScale*timeScale*timeScale;// wake up bodies involved in collisions
for(var i=0;i<pairs.length;i++){var pair=pairs[i];// don't wake inactive pairs
if(!pair.isActive)continue;var collision=pair.collision,bodyA=collision.bodyA.parent,bodyB=collision.bodyB.parent;// don't wake if at least one body is static
if(bodyA.isSleeping&&bodyB.isSleeping||bodyA.isStatic||bodyB.isStatic)continue;if(bodyA.isSleeping||bodyB.isSleeping){var sleepingBody=bodyA.isSleeping&&!bodyA.isStatic?bodyA:bodyB,movingBody=sleepingBody===bodyA?bodyB:bodyA;if(!sleepingBody.isStatic&&movingBody.motion>Sleeping._motionWakeThreshold*timeFactor){Sleeping.set(sleepingBody,false);}}}};/**
     * Set a body as sleeping or awake.
     * @method set
     * @param {body} body
     * @param {boolean} isSleeping
     */Sleeping.set=function(body,isSleeping){var wasSleeping=body.isSleeping;if(isSleeping){body.isSleeping=true;body.sleepCounter=body.sleepThreshold;body.positionImpulse.x=0;body.positionImpulse.y=0;body.positionPrev.x=body.position.x;body.positionPrev.y=body.position.y;body.anglePrev=body.angle;body.speed=0;body.angularSpeed=0;body.motion=0;if(!wasSleeping){Events.trigger(body,'sleepStart');}}else{body.isSleeping=false;body.sleepCounter=0;if(wasSleeping){Events.trigger(body,'sleepEnd');}}};})();/***/},/* 8 */ /***/function(module,exports,__nested_webpack_require_123800__){/**
* The `Matter.Collision` module contains methods for detecting collisions between a given pair of bodies.
*
* For efficient detection between a list of bodies, see `Matter.Detector` and `Matter.Query`.
*
* See `Matter.Engine` for collision events.
*
* @class Collision
*/var Collision={};module.exports=Collision;var Vertices=__nested_webpack_require_123800__(3);var Pair=__nested_webpack_require_123800__(9);(function(){var _supports=[];var _overlapAB={overlap:0,axis:null};var _overlapBA={overlap:0,axis:null};/**
     * Creates a new collision record.
     * @method create
     * @param {body} bodyA The first body part represented by the collision record
     * @param {body} bodyB The second body part represented by the collision record
     * @return {collision} A new collision record
     */Collision.create=function(bodyA,bodyB){return{pair:null,collided:false,bodyA:bodyA,bodyB:bodyB,parentA:bodyA.parent,parentB:bodyB.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[]};};/**
     * Detect collision between two bodies.
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {pairs} [pairs] Optionally reuse collision records from existing pairs.
     * @return {collision|null} A collision record if detected, otherwise null
     */Collision.collides=function(bodyA,bodyB,pairs){Collision._overlapAxes(_overlapAB,bodyA.vertices,bodyB.vertices,bodyA.axes);if(_overlapAB.overlap<=0){return null;}Collision._overlapAxes(_overlapBA,bodyB.vertices,bodyA.vertices,bodyB.axes);if(_overlapBA.overlap<=0){return null;}// reuse collision records for gc efficiency
var pair=pairs&&pairs.table[Pair.id(bodyA,bodyB)],collision;if(!pair){collision=Collision.create(bodyA,bodyB);collision.collided=true;collision.bodyA=bodyA.id<bodyB.id?bodyA:bodyB;collision.bodyB=bodyA.id<bodyB.id?bodyB:bodyA;collision.parentA=collision.bodyA.parent;collision.parentB=collision.bodyB.parent;}else{collision=pair.collision;}bodyA=collision.bodyA;bodyB=collision.bodyB;var minOverlap;if(_overlapAB.overlap<_overlapBA.overlap){minOverlap=_overlapAB;}else{minOverlap=_overlapBA;}var normal=collision.normal,supports=collision.supports,minAxis=minOverlap.axis,minAxisX=minAxis.x,minAxisY=minAxis.y;// ensure normal is facing away from bodyA
if(minAxisX*(bodyB.position.x-bodyA.position.x)+minAxisY*(bodyB.position.y-bodyA.position.y)<0){normal.x=minAxisX;normal.y=minAxisY;}else{normal.x=-minAxisX;normal.y=-minAxisY;}collision.tangent.x=-normal.y;collision.tangent.y=normal.x;collision.depth=minOverlap.overlap;collision.penetration.x=normal.x*collision.depth;collision.penetration.y=normal.y*collision.depth;// find support points, there is always either exactly one or two
var supportsB=Collision._findSupports(bodyA,bodyB,normal,1),supportCount=0;// find the supports from bodyB that are inside bodyA
if(Vertices.contains(bodyA.vertices,supportsB[0])){supports[supportCount++]=supportsB[0];}if(Vertices.contains(bodyA.vertices,supportsB[1])){supports[supportCount++]=supportsB[1];}// find the supports from bodyA that are inside bodyB
if(supportCount<2){var supportsA=Collision._findSupports(bodyB,bodyA,normal,-1);if(Vertices.contains(bodyB.vertices,supportsA[0])){supports[supportCount++]=supportsA[0];}if(supportCount<2&&Vertices.contains(bodyB.vertices,supportsA[1])){supports[supportCount++]=supportsA[1];}}// account for the edge case of overlapping but no vertex containment
if(supportCount===0){supports[supportCount++]=supportsB[0];}// update supports array size
supports.length=supportCount;return collision;};/**
     * Find the overlap between two sets of vertices.
     * @method _overlapAxes
     * @private
     * @param {object} result
     * @param {vertices} verticesA
     * @param {vertices} verticesB
     * @param {axes} axes
     */Collision._overlapAxes=function(result,verticesA,verticesB,axes){var verticesALength=verticesA.length,verticesBLength=verticesB.length,verticesAX=verticesA[0].x,verticesAY=verticesA[0].y,verticesBX=verticesB[0].x,verticesBY=verticesB[0].y,axesLength=axes.length,overlapMin=Number.MAX_VALUE,overlapAxisNumber=0,overlap,overlapAB,overlapBA,dot,i,j;for(i=0;i<axesLength;i++){var axis=axes[i],axisX=axis.x,axisY=axis.y,minA=verticesAX*axisX+verticesAY*axisY,minB=verticesBX*axisX+verticesBY*axisY,maxA=minA,maxB=minB;for(j=1;j<verticesALength;j+=1){dot=verticesA[j].x*axisX+verticesA[j].y*axisY;if(dot>maxA){maxA=dot;}else if(dot<minA){minA=dot;}}for(j=1;j<verticesBLength;j+=1){dot=verticesB[j].x*axisX+verticesB[j].y*axisY;if(dot>maxB){maxB=dot;}else if(dot<minB){minB=dot;}}overlapAB=maxA-minB;overlapBA=maxB-minA;overlap=overlapAB<overlapBA?overlapAB:overlapBA;if(overlap<overlapMin){overlapMin=overlap;overlapAxisNumber=i;if(overlap<=0){// can not be intersecting
break;}}}result.axis=axes[overlapAxisNumber];result.overlap=overlapMin;};/**
     * Projects vertices on an axis and returns an interval.
     * @method _projectToAxis
     * @private
     * @param {} projection
     * @param {} vertices
     * @param {} axis
     */Collision._projectToAxis=function(projection,vertices,axis){var min=vertices[0].x*axis.x+vertices[0].y*axis.y,max=min;for(var i=1;i<vertices.length;i+=1){var dot=vertices[i].x*axis.x+vertices[i].y*axis.y;if(dot>max){max=dot;}else if(dot<min){min=dot;}}projection.min=min;projection.max=max;};/**
     * Finds supporting vertices given two bodies along a given direction using hill-climbing.
     * @method _findSupports
     * @private
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {vector} normal
     * @param {number} direction
     * @return [vector]
     */Collision._findSupports=function(bodyA,bodyB,normal,direction){var vertices=bodyB.vertices,verticesLength=vertices.length,bodyAPositionX=bodyA.position.x,bodyAPositionY=bodyA.position.y,normalX=normal.x*direction,normalY=normal.y*direction,nearestDistance=Number.MAX_VALUE,vertexA,vertexB,vertexC,distance,j;// find deepest vertex relative to the axis
for(j=0;j<verticesLength;j+=1){vertexB=vertices[j];distance=normalX*(bodyAPositionX-vertexB.x)+normalY*(bodyAPositionY-vertexB.y);// convex hill-climbing
if(distance<nearestDistance){nearestDistance=distance;vertexA=vertexB;}}// measure next vertex
vertexC=vertices[(verticesLength+vertexA.index-1)%verticesLength];nearestDistance=normalX*(bodyAPositionX-vertexC.x)+normalY*(bodyAPositionY-vertexC.y);// compare with previous vertex
vertexB=vertices[(vertexA.index+1)%verticesLength];if(normalX*(bodyAPositionX-vertexB.x)+normalY*(bodyAPositionY-vertexB.y)<nearestDistance){_supports[0]=vertexA;_supports[1]=vertexB;return _supports;}_supports[0]=vertexA;_supports[1]=vertexC;return _supports;};/*
    *
    *  Properties Documentation
    *
    */ /**
     * A reference to the pair using this collision record, if there is one.
     *
     * @property pair
     * @type {pair|null}
     * @default null
     */ /**
     * A flag that indicates if the bodies were colliding when the collision was last updated.
     * 
     * @property collided
     * @type boolean
     * @default false
     */ /**
     * The first body part represented by the collision (see also `collision.parentA`).
     * 
     * @property bodyA
     * @type body
     */ /**
     * The second body part represented by the collision (see also `collision.parentB`).
     * 
     * @property bodyB
     * @type body
     */ /**
     * The first body represented by the collision (i.e. `collision.bodyA.parent`).
     * 
     * @property parentA
     * @type body
     */ /**
     * The second body represented by the collision (i.e. `collision.bodyB.parent`).
     * 
     * @property parentB
     * @type body
     */ /**
     * A `Number` that represents the minimum separating distance between the bodies along the collision normal.
     *
     * @readOnly
     * @property depth
     * @type number
     * @default 0
     */ /**
     * A normalised `Vector` that represents the direction between the bodies that provides the minimum separating distance.
     *
     * @property normal
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * A normalised `Vector` that is the tangent direction to the collision normal.
     *
     * @property tangent
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * A `Vector` that represents the direction and depth of the collision.
     *
     * @property penetration
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * An array of body vertices that represent the support points in the collision.
     * These are the deepest vertices (along the collision normal) of each body that are contained by the other body's vertices.
     *
     * @property supports
     * @type vector[]
     * @default []
     */})();/***/},/* 9 */ /***/function(module,exports,__nested_webpack_require_135703__){/**
* The `Matter.Pair` module contains methods for creating and manipulating collision pairs.
*
* @class Pair
*/var Pair={};module.exports=Pair;var Contact=__nested_webpack_require_135703__(17);(function(){/**
     * Creates a pair.
     * @method create
     * @param {collision} collision
     * @param {number} timestamp
     * @return {pair} A new pair
     */Pair.create=function(collision,timestamp){var bodyA=collision.bodyA,bodyB=collision.bodyB;var pair={id:Pair.id(bodyA,bodyB),bodyA:bodyA,bodyB:bodyB,collision:collision,contacts:[],activeContacts:[],separation:0,isActive:true,confirmedActive:true,isSensor:bodyA.isSensor||bodyB.isSensor,timeCreated:timestamp,timeUpdated:timestamp,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};Pair.update(pair,collision,timestamp);return pair;};/**
     * Updates a pair given a collision.
     * @method update
     * @param {pair} pair
     * @param {collision} collision
     * @param {number} timestamp
     */Pair.update=function(pair,collision,timestamp){var contacts=pair.contacts,supports=collision.supports,activeContacts=pair.activeContacts,parentA=collision.parentA,parentB=collision.parentB,parentAVerticesLength=parentA.vertices.length;pair.isActive=true;pair.timeUpdated=timestamp;pair.collision=collision;pair.separation=collision.depth;pair.inverseMass=parentA.inverseMass+parentB.inverseMass;pair.friction=parentA.friction<parentB.friction?parentA.friction:parentB.friction;pair.frictionStatic=parentA.frictionStatic>parentB.frictionStatic?parentA.frictionStatic:parentB.frictionStatic;pair.restitution=parentA.restitution>parentB.restitution?parentA.restitution:parentB.restitution;pair.slop=parentA.slop>parentB.slop?parentA.slop:parentB.slop;collision.pair=pair;activeContacts.length=0;for(var i=0;i<supports.length;i++){var support=supports[i],contactId=support.body===parentA?support.index:parentAVerticesLength+support.index,contact=contacts[contactId];if(contact){activeContacts.push(contact);}else{activeContacts.push(contacts[contactId]=Contact.create(support));}}};/**
     * Set a pair as active or inactive.
     * @method setActive
     * @param {pair} pair
     * @param {bool} isActive
     * @param {number} timestamp
     */Pair.setActive=function(pair,isActive,timestamp){if(isActive){pair.isActive=true;pair.timeUpdated=timestamp;}else{pair.isActive=false;pair.activeContacts.length=0;}};/**
     * Get the id for the given pair.
     * @method id
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {string} Unique pairId
     */Pair.id=function(bodyA,bodyB){if(bodyA.id<bodyB.id){return'A'+bodyA.id+'B'+bodyB.id;}else{return'A'+bodyB.id+'B'+bodyA.id;}};})();/***/},/* 10 */ /***/function(module,exports,__nested_webpack_require_139447__){/**
* The `Matter.Constraint` module contains methods for creating and manipulating constraints.
* Constraints are used for specifying that a fixed distance must be maintained between two bodies (or a body and a fixed world-space position).
* The stiffness of constraints can be modified to create springs or elastic.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Constraint
*/var Constraint={};module.exports=Constraint;var Vertices=__nested_webpack_require_139447__(3);var Vector=__nested_webpack_require_139447__(2);var Sleeping=__nested_webpack_require_139447__(7);var Bounds=__nested_webpack_require_139447__(1);var Axes=__nested_webpack_require_139447__(11);var Common=__nested_webpack_require_139447__(0);(function(){Constraint._warming=0.4;Constraint._torqueDampen=1;Constraint._minLength=0.000001;/**
     * Creates a new constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * To simulate a revolute constraint (or pin joint) set `length: 0` and a high `stiffness` value (e.g. `0.7` or above).
     * If the constraint is unstable, try lowering the `stiffness` value and / or increasing `engine.constraintIterations`.
     * For compound bodies, constraints must be applied to the parent body (not one of its parts).
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {constraint} constraint
     */Constraint.create=function(options){var constraint=options;// if bodies defined but no points, use body centre
if(constraint.bodyA&&!constraint.pointA)constraint.pointA={x:0,y:0};if(constraint.bodyB&&!constraint.pointB)constraint.pointB={x:0,y:0};// calculate static length using initial world space points
var initialPointA=constraint.bodyA?Vector.add(constraint.bodyA.position,constraint.pointA):constraint.pointA,initialPointB=constraint.bodyB?Vector.add(constraint.bodyB.position,constraint.pointB):constraint.pointB,length=Vector.magnitude(Vector.sub(initialPointA,initialPointB));constraint.length=typeof constraint.length!=='undefined'?constraint.length:length;// option defaults
constraint.id=constraint.id||Common.nextId();constraint.label=constraint.label||'Constraint';constraint.type='constraint';constraint.stiffness=constraint.stiffness||(constraint.length>0?1:0.7);constraint.damping=constraint.damping||0;constraint.angularStiffness=constraint.angularStiffness||0;constraint.angleA=constraint.bodyA?constraint.bodyA.angle:constraint.angleA;constraint.angleB=constraint.bodyB?constraint.bodyB.angle:constraint.angleB;constraint.plugin={};// render
var render={visible:true,lineWidth:2,strokeStyle:'#ffffff',type:'line',anchors:true};if(constraint.length===0&&constraint.stiffness>0.1){render.type='pin';render.anchors=false;}else if(constraint.stiffness<0.9){render.type='spring';}constraint.render=Common.extend(render,constraint.render);return constraint;};/**
     * Prepares for solving by constraint warming.
     * @private
     * @method preSolveAll
     * @param {body[]} bodies
     */Constraint.preSolveAll=function(bodies){for(var i=0;i<bodies.length;i+=1){var body=bodies[i],impulse=body.constraintImpulse;if(body.isStatic||impulse.x===0&&impulse.y===0&&impulse.angle===0){continue;}body.position.x+=impulse.x;body.position.y+=impulse.y;body.angle+=impulse.angle;}};/**
     * Solves all constraints in a list of collisions.
     * @private
     * @method solveAll
     * @param {constraint[]} constraints
     * @param {number} timeScale
     */Constraint.solveAll=function(constraints,timeScale){// Solve fixed constraints first.
for(var i=0;i<constraints.length;i+=1){var constraint=constraints[i],fixedA=!constraint.bodyA||constraint.bodyA&&constraint.bodyA.isStatic,fixedB=!constraint.bodyB||constraint.bodyB&&constraint.bodyB.isStatic;if(fixedA||fixedB){Constraint.solve(constraints[i],timeScale);}}// Solve free constraints last.
for(i=0;i<constraints.length;i+=1){constraint=constraints[i];fixedA=!constraint.bodyA||constraint.bodyA&&constraint.bodyA.isStatic;fixedB=!constraint.bodyB||constraint.bodyB&&constraint.bodyB.isStatic;if(!fixedA&&!fixedB){Constraint.solve(constraints[i],timeScale);}}};/**
     * Solves a distance constraint with Gauss-Siedel method.
     * @private
     * @method solve
     * @param {constraint} constraint
     * @param {number} timeScale
     */Constraint.solve=function(constraint,timeScale){var bodyA=constraint.bodyA,bodyB=constraint.bodyB,pointA=constraint.pointA,pointB=constraint.pointB;if(!bodyA&&!bodyB)return;// update reference angle
if(bodyA&&!bodyA.isStatic){Vector.rotate(pointA,bodyA.angle-constraint.angleA,pointA);constraint.angleA=bodyA.angle;}// update reference angle
if(bodyB&&!bodyB.isStatic){Vector.rotate(pointB,bodyB.angle-constraint.angleB,pointB);constraint.angleB=bodyB.angle;}var pointAWorld=pointA,pointBWorld=pointB;if(bodyA)pointAWorld=Vector.add(bodyA.position,pointA);if(bodyB)pointBWorld=Vector.add(bodyB.position,pointB);if(!pointAWorld||!pointBWorld)return;var delta=Vector.sub(pointAWorld,pointBWorld),currentLength=Vector.magnitude(delta);// prevent singularity
if(currentLength<Constraint._minLength){currentLength=Constraint._minLength;}// solve distance constraint with Gauss-Siedel method
var difference=(currentLength-constraint.length)/currentLength,stiffness=constraint.stiffness<1?constraint.stiffness*timeScale:constraint.stiffness,force=Vector.mult(delta,difference*stiffness),massTotal=(bodyA?bodyA.inverseMass:0)+(bodyB?bodyB.inverseMass:0),inertiaTotal=(bodyA?bodyA.inverseInertia:0)+(bodyB?bodyB.inverseInertia:0),resistanceTotal=massTotal+inertiaTotal,torque,share,normal,normalVelocity,relativeVelocity;if(constraint.damping){var zero=Vector.create();normal=Vector.div(delta,currentLength);relativeVelocity=Vector.sub(bodyB&&Vector.sub(bodyB.position,bodyB.positionPrev)||zero,bodyA&&Vector.sub(bodyA.position,bodyA.positionPrev)||zero);normalVelocity=Vector.dot(normal,relativeVelocity);}if(bodyA&&!bodyA.isStatic){share=bodyA.inverseMass/massTotal;// keep track of applied impulses for post solving
bodyA.constraintImpulse.x-=force.x*share;bodyA.constraintImpulse.y-=force.y*share;// apply forces
bodyA.position.x-=force.x*share;bodyA.position.y-=force.y*share;// apply damping
if(constraint.damping){bodyA.positionPrev.x-=constraint.damping*normal.x*normalVelocity*share;bodyA.positionPrev.y-=constraint.damping*normal.y*normalVelocity*share;}// apply torque
torque=Vector.cross(pointA,force)/resistanceTotal*Constraint._torqueDampen*bodyA.inverseInertia*(1-constraint.angularStiffness);bodyA.constraintImpulse.angle-=torque;bodyA.angle-=torque;}if(bodyB&&!bodyB.isStatic){share=bodyB.inverseMass/massTotal;// keep track of applied impulses for post solving
bodyB.constraintImpulse.x+=force.x*share;bodyB.constraintImpulse.y+=force.y*share;// apply forces
bodyB.position.x+=force.x*share;bodyB.position.y+=force.y*share;// apply damping
if(constraint.damping){bodyB.positionPrev.x+=constraint.damping*normal.x*normalVelocity*share;bodyB.positionPrev.y+=constraint.damping*normal.y*normalVelocity*share;}// apply torque
torque=Vector.cross(pointB,force)/resistanceTotal*Constraint._torqueDampen*bodyB.inverseInertia*(1-constraint.angularStiffness);bodyB.constraintImpulse.angle+=torque;bodyB.angle+=torque;}};/**
     * Performs body updates required after solving constraints.
     * @private
     * @method postSolveAll
     * @param {body[]} bodies
     */Constraint.postSolveAll=function(bodies){for(var i=0;i<bodies.length;i++){var body=bodies[i],impulse=body.constraintImpulse;if(body.isStatic||impulse.x===0&&impulse.y===0&&impulse.angle===0){continue;}Sleeping.set(body,false);// update geometry and reset
for(var j=0;j<body.parts.length;j++){var part=body.parts[j];Vertices.translate(part.vertices,impulse);if(j>0){part.position.x+=impulse.x;part.position.y+=impulse.y;}if(impulse.angle!==0){Vertices.rotate(part.vertices,impulse.angle,body.position);Axes.rotate(part.axes,impulse.angle);if(j>0){Vector.rotateAbout(part.position,impulse.angle,body.position,part.position);}}Bounds.update(part.bounds,part.vertices,body.velocity);}// dampen the cached impulse for warming next step
impulse.angle*=Constraint._warming;impulse.x*=Constraint._warming;impulse.y*=Constraint._warming;}};/**
     * Returns the world-space position of `constraint.pointA`, accounting for `constraint.bodyA`.
     * @method pointAWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */Constraint.pointAWorld=function(constraint){return{x:(constraint.bodyA?constraint.bodyA.position.x:0)+constraint.pointA.x,y:(constraint.bodyA?constraint.bodyA.position.y:0)+constraint.pointA.y};};/**
     * Returns the world-space position of `constraint.pointB`, accounting for `constraint.bodyB`.
     * @method pointBWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */Constraint.pointBWorld=function(constraint){return{x:(constraint.bodyB?constraint.bodyB.position.x:0)+constraint.pointB.x,y:(constraint.bodyB?constraint.bodyB.position.y:0)+constraint.pointB.y};};/*
    *
    *  Properties Documentation
    *
    */ /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */ /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */ /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Constraint"
     */ /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */ /**
     * A flag that indicates if the constraint should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */ /**
     * A `Number` that defines the line width to use when rendering the constraint outline.
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 2
     */ /**
     * A `String` that defines the stroke style to use when rendering the constraint outline.
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */ /**
     * A `String` that defines the constraint rendering type. 
     * The possible values are 'line', 'pin', 'spring'.
     * An appropriate render type will be automatically chosen unless one is given in options.
     *
     * @property render.type
     * @type string
     * @default 'line'
     */ /**
     * A `Boolean` that defines if the constraint's anchor points should be rendered.
     *
     * @property render.anchors
     * @type boolean
     * @default true
     */ /**
     * The first possible `Body` that this constraint is attached to.
     *
     * @property bodyA
     * @type body
     * @default null
     */ /**
     * The second possible `Body` that this constraint is attached to.
     *
     * @property bodyB
     * @type body
     * @default null
     */ /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyA` if defined, otherwise a world-space position.
     *
     * @property pointA
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyB` if defined, otherwise a world-space position.
     *
     * @property pointB
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * A `Number` that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`.
     * A value of `1` means the constraint should be very stiff.
     * A value of `0.2` means the constraint acts like a soft spring.
     *
     * @property stiffness
     * @type number
     * @default 1
     */ /**
     * A `Number` that specifies the damping of the constraint, 
     * i.e. the amount of resistance applied to each body based on their velocities to limit the amount of oscillation.
     * Damping will only be apparent when the constraint also has a very low `stiffness`.
     * A value of `0.1` means the constraint will apply heavy damping, resulting in little to no oscillation.
     * A value of `0` means the constraint will apply no damping.
     *
     * @property damping
     * @type number
     * @default 0
     */ /**
     * A `Number` that specifies the target resting length of the constraint. 
     * It is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
     *
     * @property length
     * @type number
     */ /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */})();/***/},/* 11 */ /***/function(module,exports,__nested_webpack_require_155865__){/**
* The `Matter.Axes` module contains methods for creating and manipulating sets of axes.
*
* @class Axes
*/var Axes={};module.exports=Axes;var Vector=__nested_webpack_require_155865__(2);var Common=__nested_webpack_require_155865__(0);(function(){/**
     * Creates a new set of axes from the given vertices.
     * @method fromVertices
     * @param {vertices} vertices
     * @return {axes} A new axes from the given vertices
     */Axes.fromVertices=function(vertices){var axes={};// find the unique axes, using edge normal gradients
for(var i=0;i<vertices.length;i++){var j=(i+1)%vertices.length,normal=Vector.normalise({x:vertices[j].y-vertices[i].y,y:vertices[i].x-vertices[j].x}),gradient=normal.y===0?Infinity:normal.x/normal.y;// limit precision
gradient=gradient.toFixed(3).toString();axes[gradient]=normal;}return Common.values(axes);};/**
     * Rotates a set of axes by the given angle.
     * @method rotate
     * @param {axes} axes
     * @param {number} angle
     */Axes.rotate=function(axes,angle){if(angle===0)return;var cos=Math.cos(angle),sin=Math.sin(angle);for(var i=0;i<axes.length;i++){var axis=axes[i],xx;xx=axis.x*cos-axis.y*sin;axis.y=axis.x*sin+axis.y*cos;axis.x=xx;}};})();/***/},/* 12 */ /***/function(module,exports,__nested_webpack_require_157606__){/**
* The `Matter.Bodies` module contains factory methods for creating rigid body models 
* with commonly used body configurations (such as rectangles, circles and other polygons).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Bodies
*/ // TODO: true circle bodies
var Bodies={};module.exports=Bodies;var Vertices=__nested_webpack_require_157606__(3);var Common=__nested_webpack_require_157606__(0);var Body=__nested_webpack_require_157606__(6);var Bounds=__nested_webpack_require_157606__(1);var Vector=__nested_webpack_require_157606__(2);(function(){/**
     * Creates a new rigid body model with a rectangle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method rectangle
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {object} [options]
     * @return {body} A new rectangle body
     */Bodies.rectangle=function(x,y,width,height,options){options=options||{};var rectangle={label:'Rectangle Body',position:{x:x,y:y},vertices:Vertices.fromPath('L 0 0 L '+width+' 0 L '+width+' '+height+' L 0 '+height)};if(options.chamfer){var chamfer=options.chamfer;rectangle.vertices=Vertices.chamfer(rectangle.vertices,chamfer.radius,chamfer.quality,chamfer.qualityMin,chamfer.qualityMax);delete options.chamfer;}return Body.create(Common.extend({},rectangle,options));};/**
     * Creates a new rigid body model with a trapezoid hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method trapezoid
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} slope
     * @param {object} [options]
     * @return {body} A new trapezoid body
     */Bodies.trapezoid=function(x,y,width,height,slope,options){options=options||{};slope*=0.5;var roof=(1-slope*2)*width;var x1=width*slope,x2=x1+roof,x3=x2+x1,verticesPath;if(slope<0.5){verticesPath='L 0 0 L '+x1+' '+-height+' L '+x2+' '+-height+' L '+x3+' 0';}else{verticesPath='L 0 0 L '+x2+' '+-height+' L '+x3+' 0';}var trapezoid={label:'Trapezoid Body',position:{x:x,y:y},vertices:Vertices.fromPath(verticesPath)};if(options.chamfer){var chamfer=options.chamfer;trapezoid.vertices=Vertices.chamfer(trapezoid.vertices,chamfer.radius,chamfer.quality,chamfer.qualityMin,chamfer.qualityMax);delete options.chamfer;}return Body.create(Common.extend({},trapezoid,options));};/**
     * Creates a new rigid body model with a circle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method circle
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {object} [options]
     * @param {number} [maxSides]
     * @return {body} A new circle body
     */Bodies.circle=function(x,y,radius,options,maxSides){options=options||{};var circle={label:'Circle Body',circleRadius:radius};// approximate circles with polygons until true circles implemented in SAT
maxSides=maxSides||25;var sides=Math.ceil(Math.max(10,Math.min(maxSides,radius)));// optimisation: always use even number of sides (half the number of unique axes)
if(sides%2===1)sides+=1;return Bodies.polygon(x,y,sides,radius,Common.extend({},circle,options));};/**
     * Creates a new rigid body model with a regular polygon hull with the given number of sides. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method polygon
     * @param {number} x
     * @param {number} y
     * @param {number} sides
     * @param {number} radius
     * @param {object} [options]
     * @return {body} A new regular polygon body
     */Bodies.polygon=function(x,y,sides,radius,options){options=options||{};if(sides<3)return Bodies.circle(x,y,radius,options);var theta=2*Math.PI/sides,path='',offset=theta*0.5;for(var i=0;i<sides;i+=1){var angle=offset+i*theta,xx=Math.cos(angle)*radius,yy=Math.sin(angle)*radius;path+='L '+xx.toFixed(3)+' '+yy.toFixed(3)+' ';}var polygon={label:'Polygon Body',position:{x:x,y:y},vertices:Vertices.fromPath(path)};if(options.chamfer){var chamfer=options.chamfer;polygon.vertices=Vertices.chamfer(polygon.vertices,chamfer.radius,chamfer.quality,chamfer.qualityMin,chamfer.qualityMax);delete options.chamfer;}return Body.create(Common.extend({},polygon,options));};/**
     * Utility to create a compound body based on set(s) of vertices.
     * 
     * _Note:_ To optionally enable automatic concave vertices decomposition the [poly-decomp](https://github.com/schteppe/poly-decomp.js) 
     * package must be first installed and provided see `Common.setDecomp`, otherwise the convex hull of each vertex set will be used.
     * 
     * The resulting vertices are reorientated about their centre of mass,
     * and offset such that `body.position` corresponds to this point.
     * 
     * The resulting offset may be found if needed by subtracting `body.bounds` from the original input bounds.
     * To later move the centre of mass see `Body.setCentre`.
     * 
     * Note that automatic conconcave decomposition results are not always optimal. 
     * For best results, simplify the input vertices as much as possible first.
     * By default this function applies some addtional simplification to help.
     * 
     * Some outputs may also require further manual processing afterwards to be robust.
     * In particular some parts may need to be overlapped to avoid collision gaps.
     * Thin parts and sharp points should be avoided or removed where possible.
     *
     * The options parameter object specifies any `Matter.Body` properties you wish to override the defaults.
     * 
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method fromVertices
     * @param {number} x
     * @param {number} y
     * @param {array} vertexSets One or more arrays of vertex points e.g. `[[{ x: 0, y: 0 }...], ...]`.
     * @param {object} [options] The body options.
     * @param {bool} [flagInternal=false] Optionally marks internal edges with `isInternal`.
     * @param {number} [removeCollinear=0.01] Threshold when simplifying vertices along the same edge.
     * @param {number} [minimumArea=10] Threshold when removing small parts.
     * @param {number} [removeDuplicatePoints=0.01] Threshold when simplifying nearby vertices.
     * @return {body}
     */Bodies.fromVertices=function(x,y,vertexSets,options,flagInternal,removeCollinear,minimumArea,removeDuplicatePoints){var decomp=Common.getDecomp(),canDecomp,body,parts,isConvex,isConcave,vertices,i,j,k,v,z;// check decomp is as expected
canDecomp=Boolean(decomp&&decomp.quickDecomp);options=options||{};parts=[];flagInternal=typeof flagInternal!=='undefined'?flagInternal:false;removeCollinear=typeof removeCollinear!=='undefined'?removeCollinear:0.01;minimumArea=typeof minimumArea!=='undefined'?minimumArea:10;removeDuplicatePoints=typeof removeDuplicatePoints!=='undefined'?removeDuplicatePoints:0.01;// ensure vertexSets is an array of arrays
if(!Common.isArray(vertexSets[0])){vertexSets=[vertexSets];}for(v=0;v<vertexSets.length;v+=1){vertices=vertexSets[v];isConvex=Vertices.isConvex(vertices);isConcave=!isConvex;if(isConcave&&!canDecomp){Common.warnOnce('Bodies.fromVertices: Install the \'poly-decomp\' library and use Common.setDecomp or provide \'decomp\' as a global to decompose concave vertices.');}if(isConvex||!canDecomp){if(isConvex){vertices=Vertices.clockwiseSort(vertices);}else{// fallback to convex hull when decomposition is not possible
vertices=Vertices.hull(vertices);}parts.push({position:{x:x,y:y},vertices:vertices});}else{// initialise a decomposition
var concave=vertices.map(function(vertex){return[vertex.x,vertex.y];});// vertices are concave and simple, we can decompose into parts
decomp.makeCCW(concave);if(removeCollinear!==false)decomp.removeCollinearPoints(concave,removeCollinear);if(removeDuplicatePoints!==false&&decomp.removeDuplicatePoints)decomp.removeDuplicatePoints(concave,removeDuplicatePoints);// use the quick decomposition algorithm (Bayazit)
var decomposed=decomp.quickDecomp(concave);// for each decomposed chunk
for(i=0;i<decomposed.length;i++){var chunk=decomposed[i];// convert vertices into the correct structure
var chunkVertices=chunk.map(function(vertices){return{x:vertices[0],y:vertices[1]};});// skip small chunks
if(minimumArea>0&&Vertices.area(chunkVertices)<minimumArea)continue;// create a compound part
parts.push({position:Vertices.centre(chunkVertices),vertices:chunkVertices});}}}// create body parts
for(i=0;i<parts.length;i++){parts[i]=Body.create(Common.extend(parts[i],options));}// flag internal edges (coincident part edges)
if(flagInternal){var coincident_max_dist=5;for(i=0;i<parts.length;i++){var partA=parts[i];for(j=i+1;j<parts.length;j++){var partB=parts[j];if(Bounds.overlaps(partA.bounds,partB.bounds)){var pav=partA.vertices,pbv=partB.vertices;// iterate vertices of both parts
for(k=0;k<partA.vertices.length;k++){for(z=0;z<partB.vertices.length;z++){// find distances between the vertices
var da=Vector.magnitudeSquared(Vector.sub(pav[(k+1)%pav.length],pbv[z])),db=Vector.magnitudeSquared(Vector.sub(pav[k],pbv[(z+1)%pbv.length]));// if both vertices are very close, consider the edge concident (internal)
if(da<coincident_max_dist&&db<coincident_max_dist){pav[k].isInternal=true;pbv[z].isInternal=true;}}}}}}}if(parts.length>1){// create the parent body to be returned, that contains generated compound parts
body=Body.create(Common.extend({parts:parts.slice(0)},options));// offset such that body.position is at the centre off mass
Body.setPosition(body,{x:x,y:y});return body;}else{return parts[0];}};})();/***/},/* 13 */ /***/function(module,exports,__nested_webpack_require_171606__){/**
* The `Matter.Mouse` module contains methods for creating and manipulating mouse inputs.
*
* @class Mouse
*/var Mouse={};module.exports=Mouse;var Common=__nested_webpack_require_171606__(0);(function(){/**
     * Creates a mouse input.
     * @method create
     * @param {HTMLElement} element
     * @return {mouse} A new mouse
     */Mouse.create=function(element){var mouse={};if(!element){Common.log('Mouse.create: element was undefined, defaulting to document.body','warn');}mouse.element=element||document.body;mouse.absolute={x:0,y:0};mouse.position={x:0,y:0};mouse.mousedownPosition={x:0,y:0};mouse.mouseupPosition={x:0,y:0};mouse.offset={x:0,y:0};mouse.scale={x:1,y:1};mouse.wheelDelta=0;mouse.button=-1;mouse.pixelRatio=parseInt(mouse.element.getAttribute('data-pixel-ratio'),10)||1;mouse.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null};mouse.mousemove=function(event){var position=Mouse._getRelativeMousePosition(event,mouse.element,mouse.pixelRatio),touches=event.changedTouches;if(touches){mouse.button=0;event.preventDefault();}mouse.absolute.x=position.x;mouse.absolute.y=position.y;mouse.position.x=mouse.absolute.x*mouse.scale.x+mouse.offset.x;mouse.position.y=mouse.absolute.y*mouse.scale.y+mouse.offset.y;mouse.sourceEvents.mousemove=event;};mouse.mousedown=function(event){var position=Mouse._getRelativeMousePosition(event,mouse.element,mouse.pixelRatio),touches=event.changedTouches;if(touches){mouse.button=0;event.preventDefault();}else{mouse.button=event.button;}mouse.absolute.x=position.x;mouse.absolute.y=position.y;mouse.position.x=mouse.absolute.x*mouse.scale.x+mouse.offset.x;mouse.position.y=mouse.absolute.y*mouse.scale.y+mouse.offset.y;mouse.mousedownPosition.x=mouse.position.x;mouse.mousedownPosition.y=mouse.position.y;mouse.sourceEvents.mousedown=event;};mouse.mouseup=function(event){var position=Mouse._getRelativeMousePosition(event,mouse.element,mouse.pixelRatio),touches=event.changedTouches;if(touches){event.preventDefault();}mouse.button=-1;mouse.absolute.x=position.x;mouse.absolute.y=position.y;mouse.position.x=mouse.absolute.x*mouse.scale.x+mouse.offset.x;mouse.position.y=mouse.absolute.y*mouse.scale.y+mouse.offset.y;mouse.mouseupPosition.x=mouse.position.x;mouse.mouseupPosition.y=mouse.position.y;mouse.sourceEvents.mouseup=event;};mouse.mousewheel=function(event){mouse.wheelDelta=Math.max(-1,Math.min(1,event.wheelDelta||-event.detail));event.preventDefault();};Mouse.setElement(mouse,mouse.element);return mouse;};/**
     * Sets the element the mouse is bound to (and relative to).
     * @method setElement
     * @param {mouse} mouse
     * @param {HTMLElement} element
     */Mouse.setElement=function(mouse,element){mouse.element=element;element.addEventListener('mousemove',mouse.mousemove);element.addEventListener('mousedown',mouse.mousedown);element.addEventListener('mouseup',mouse.mouseup);element.addEventListener('mousewheel',mouse.mousewheel);element.addEventListener('DOMMouseScroll',mouse.mousewheel);element.addEventListener('touchmove',mouse.mousemove);element.addEventListener('touchstart',mouse.mousedown);element.addEventListener('touchend',mouse.mouseup);};/**
     * Clears all captured source events.
     * @method clearSourceEvents
     * @param {mouse} mouse
     */Mouse.clearSourceEvents=function(mouse){mouse.sourceEvents.mousemove=null;mouse.sourceEvents.mousedown=null;mouse.sourceEvents.mouseup=null;mouse.sourceEvents.mousewheel=null;mouse.wheelDelta=0;};/**
     * Sets the mouse position offset.
     * @method setOffset
     * @param {mouse} mouse
     * @param {vector} offset
     */Mouse.setOffset=function(mouse,offset){mouse.offset.x=offset.x;mouse.offset.y=offset.y;mouse.position.x=mouse.absolute.x*mouse.scale.x+mouse.offset.x;mouse.position.y=mouse.absolute.y*mouse.scale.y+mouse.offset.y;};/**
     * Sets the mouse position scale.
     * @method setScale
     * @param {mouse} mouse
     * @param {vector} scale
     */Mouse.setScale=function(mouse,scale){mouse.scale.x=scale.x;mouse.scale.y=scale.y;mouse.position.x=mouse.absolute.x*mouse.scale.x+mouse.offset.x;mouse.position.y=mouse.absolute.y*mouse.scale.y+mouse.offset.y;};/**
     * Gets the mouse position relative to an element given a screen pixel ratio.
     * @method _getRelativeMousePosition
     * @private
     * @param {} event
     * @param {} element
     * @param {number} pixelRatio
     * @return {}
     */Mouse._getRelativeMousePosition=function(event,element,pixelRatio){var elementBounds=element.getBoundingClientRect(),rootNode=document.documentElement||document.body.parentNode||document.body,scrollX=window.pageXOffset!==undefined?window.pageXOffset:rootNode.scrollLeft,scrollY=window.pageYOffset!==undefined?window.pageYOffset:rootNode.scrollTop,touches=event.changedTouches,x,y;if(touches){x=touches[0].pageX-elementBounds.left-scrollX;y=touches[0].pageY-elementBounds.top-scrollY;}else{x=event.pageX-elementBounds.left-scrollX;y=event.pageY-elementBounds.top-scrollY;}return{x:x/(element.clientWidth/(element.width||element.clientWidth)*pixelRatio),y:y/(element.clientHeight/(element.height||element.clientHeight)*pixelRatio)};};})();/***/},/* 14 */ /***/function(module,exports,__nested_webpack_require_178610__){/**
* The `Matter.Detector` module contains methods for efficiently detecting collisions between a list of bodies using a broadphase algorithm.
*
* @class Detector
*/var Detector={};module.exports=Detector;var Common=__nested_webpack_require_178610__(0);var Collision=__nested_webpack_require_178610__(8);(function(){/**
     * Creates a new collision detector.
     * @method create
     * @param {} options
     * @return {detector} A new collision detector
     */Detector.create=function(options){var defaults={bodies:[],pairs:null};return Common.extend(defaults,options);};/**
     * Sets the list of bodies in the detector.
     * @method setBodies
     * @param {detector} detector
     * @param {body[]} bodies
     */Detector.setBodies=function(detector,bodies){detector.bodies=bodies.slice(0);};/**
     * Clears the detector including its list of bodies.
     * @method clear
     * @param {detector} detector
     */Detector.clear=function(detector){detector.bodies=[];};/**
     * Efficiently finds all collisions among all the bodies in `detector.bodies` using a broadphase algorithm.
     * 
     * _Note:_ The specific ordering of collisions returned is not guaranteed between releases and may change for performance reasons.
     * If a specific ordering is required then apply a sort to the resulting array.
     * @method collisions
     * @param {detector} detector
     * @return {collision[]} collisions
     */Detector.collisions=function(detector){var collisions=[],pairs=detector.pairs,bodies=detector.bodies,bodiesLength=bodies.length,canCollide=Detector.canCollide,collides=Collision.collides,i,j;bodies.sort(Detector._compareBoundsX);for(i=0;i<bodiesLength;i++){var bodyA=bodies[i],boundsA=bodyA.bounds,boundXMax=bodyA.bounds.max.x,boundYMax=bodyA.bounds.max.y,boundYMin=bodyA.bounds.min.y,bodyAStatic=bodyA.isStatic||bodyA.isSleeping,partsALength=bodyA.parts.length,partsASingle=partsALength===1;for(j=i+1;j<bodiesLength;j++){var bodyB=bodies[j],boundsB=bodyB.bounds;if(boundsB.min.x>boundXMax){break;}if(boundYMax<boundsB.min.y||boundYMin>boundsB.max.y){continue;}if(bodyAStatic&&(bodyB.isStatic||bodyB.isSleeping)){continue;}if(!canCollide(bodyA.collisionFilter,bodyB.collisionFilter)){continue;}var partsBLength=bodyB.parts.length;if(partsASingle&&partsBLength===1){var collision=collides(bodyA,bodyB,pairs);if(collision){collisions.push(collision);}}else{var partsAStart=partsALength>1?1:0,partsBStart=partsBLength>1?1:0;for(var k=partsAStart;k<partsALength;k++){var partA=bodyA.parts[k],boundsA=partA.bounds;for(var z=partsBStart;z<partsBLength;z++){var partB=bodyB.parts[z],boundsB=partB.bounds;if(boundsA.min.x>boundsB.max.x||boundsA.max.x<boundsB.min.x||boundsA.max.y<boundsB.min.y||boundsA.min.y>boundsB.max.y){continue;}var collision=collides(partA,partB,pairs);if(collision){collisions.push(collision);}}}}}}return collisions;};/**
     * Returns `true` if both supplied collision filters will allow a collision to occur.
     * See `body.collisionFilter` for more information.
     * @method canCollide
     * @param {} filterA
     * @param {} filterB
     * @return {bool} `true` if collision can occur
     */Detector.canCollide=function(filterA,filterB){if(filterA.group===filterB.group&&filterA.group!==0)return filterA.group>0;return(filterA.mask&filterB.category)!==0&&(filterB.mask&filterA.category)!==0;};/**
     * The comparison function used in the broadphase algorithm.
     * Returns the signed delta of the bodies bounds on the x-axis.
     * @private
     * @method _sortCompare
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {number} The signed delta used for sorting
     */Detector._compareBoundsX=function(bodyA,bodyB){return bodyA.bounds.min.x-bodyB.bounds.min.x;};/*
    *
    *  Properties Documentation
    *
    */ /**
     * The array of `Matter.Body` between which the detector finds collisions.
     * 
     * _Note:_ The order of bodies in this array _is not fixed_ and will be continually managed by the detector.
     * @property bodies
     * @type body[]
     * @default []
     */ /**
     * Optional. A `Matter.Pairs` object from which previous collision objects may be reused. Intended for internal `Matter.Engine` usage.
     * @property pairs
     * @type {pairs|null}
     * @default null
     */})();/***/},/* 15 */ /***/function(module,exports,__nested_webpack_require_184655__){/**
* The `Matter.Plugin` module contains functions for registering and installing plugins on modules.
*
* @class Plugin
*/var Plugin={};module.exports=Plugin;var Common=__nested_webpack_require_184655__(0);(function(){Plugin._registry={};/**
     * Registers a plugin object so it can be resolved later by name.
     * @method register
     * @param plugin {} The plugin to register.
     * @return {object} The plugin.
     */Plugin.register=function(plugin){if(!Plugin.isPlugin(plugin)){Common.warn('Plugin.register:',Plugin.toString(plugin),'does not implement all required fields.');}if(plugin.name in Plugin._registry){var registered=Plugin._registry[plugin.name],pluginVersion=Plugin.versionParse(plugin.version).number,registeredVersion=Plugin.versionParse(registered.version).number;if(pluginVersion>registeredVersion){Common.warn('Plugin.register:',Plugin.toString(registered),'was upgraded to',Plugin.toString(plugin));Plugin._registry[plugin.name]=plugin;}else if(pluginVersion<registeredVersion){Common.warn('Plugin.register:',Plugin.toString(registered),'can not be downgraded to',Plugin.toString(plugin));}else if(plugin!==registered){Common.warn('Plugin.register:',Plugin.toString(plugin),'is already registered to different plugin object');}}else{Plugin._registry[plugin.name]=plugin;}return plugin;};/**
     * Resolves a dependency to a plugin object from the registry if it exists. 
     * The `dependency` may contain a version, but only the name matters when resolving.
     * @method resolve
     * @param dependency {string} The dependency.
     * @return {object} The plugin if resolved, otherwise `undefined`.
     */Plugin.resolve=function(dependency){return Plugin._registry[Plugin.dependencyParse(dependency).name];};/**
     * Returns a pretty printed plugin name and version.
     * @method toString
     * @param plugin {} The plugin.
     * @return {string} Pretty printed plugin name and version.
     */Plugin.toString=function(plugin){return typeof plugin==='string'?plugin:(plugin.name||'anonymous')+'@'+(plugin.version||plugin.range||'0.0.0');};/**
     * Returns `true` if the object meets the minimum standard to be considered a plugin.
     * This means it must define the following properties:
     * - `name`
     * - `version`
     * - `install`
     * @method isPlugin
     * @param obj {} The obj to test.
     * @return {boolean} `true` if the object can be considered a plugin otherwise `false`.
     */Plugin.isPlugin=function(obj){return obj&&obj.name&&obj.version&&obj.install;};/**
     * Returns `true` if a plugin with the given `name` been installed on `module`.
     * @method isUsed
     * @param module {} The module.
     * @param name {string} The plugin name.
     * @return {boolean} `true` if a plugin with the given `name` been installed on `module`, otherwise `false`.
     */Plugin.isUsed=function(module,name){return module.used.indexOf(name)>-1;};/**
     * Returns `true` if `plugin.for` is applicable to `module` by comparing against `module.name` and `module.version`.
     * If `plugin.for` is not specified then it is assumed to be applicable.
     * The value of `plugin.for` is a string of the format `'module-name'` or `'module-name@version'`.
     * @method isFor
     * @param plugin {} The plugin.
     * @param module {} The module.
     * @return {boolean} `true` if `plugin.for` is applicable to `module`, otherwise `false`.
     */Plugin.isFor=function(plugin,module){var parsed=plugin["for"]&&Plugin.dependencyParse(plugin["for"]);return!plugin["for"]||module.name===parsed.name&&Plugin.versionSatisfies(module.version,parsed.range);};/**
     * Installs the plugins by calling `plugin.install` on each plugin specified in `plugins` if passed, otherwise `module.uses`.
     * For installing plugins on `Matter` see the convenience function `Matter.use`.
     * Plugins may be specified either by their name or a reference to the plugin object.
     * Plugins themselves may specify further dependencies, but each plugin is installed only once.
     * Order is important, a topological sort is performed to find the best resulting order of installation.
     * This sorting attempts to satisfy every dependency's requested ordering, but may not be exact in all cases.
     * This function logs the resulting status of each dependency in the console, along with any warnings.
     * - A green tick ✅ indicates a dependency was resolved and installed.
     * - An orange diamond 🔶 indicates a dependency was resolved but a warning was thrown for it or one if its dependencies.
     * - A red cross ❌ indicates a dependency could not be resolved.
     * Avoid calling this function multiple times on the same module unless you intend to manually control installation order.
     * @method use
     * @param module {} The module install plugins on.
     * @param [plugins=module.uses] {} The plugins to install on module (optional, defaults to `module.uses`).
     */Plugin.use=function(module,plugins){module.uses=(module.uses||[]).concat(plugins||[]);if(module.uses.length===0){Common.warn('Plugin.use:',Plugin.toString(module),'does not specify any dependencies to install.');return;}var dependencies=Plugin.dependencies(module),sortedDependencies=Common.topologicalSort(dependencies),status=[];for(var i=0;i<sortedDependencies.length;i+=1){if(sortedDependencies[i]===module.name){continue;}var plugin=Plugin.resolve(sortedDependencies[i]);if(!plugin){status.push('❌ '+sortedDependencies[i]);continue;}if(Plugin.isUsed(module,plugin.name)){continue;}if(!Plugin.isFor(plugin,module)){Common.warn('Plugin.use:',Plugin.toString(plugin),'is for',plugin["for"],'but installed on',Plugin.toString(module)+'.');plugin._warned=true;}if(plugin.install){plugin.install(module);}else{Common.warn('Plugin.use:',Plugin.toString(plugin),'does not specify an install function.');plugin._warned=true;}if(plugin._warned){status.push('🔶 '+Plugin.toString(plugin));delete plugin._warned;}else{status.push('✅ '+Plugin.toString(plugin));}module.used.push(plugin.name);}if(status.length>0){Common.info(status.join('  '));}};/**
     * Recursively finds all of a module's dependencies and returns a flat dependency graph.
     * @method dependencies
     * @param module {} The module.
     * @return {object} A dependency graph.
     */Plugin.dependencies=function(module,tracked){var parsedBase=Plugin.dependencyParse(module),name=parsedBase.name;tracked=tracked||{};if(name in tracked){return;}module=Plugin.resolve(module)||module;tracked[name]=Common.map(module.uses||[],function(dependency){if(Plugin.isPlugin(dependency)){Plugin.register(dependency);}var parsed=Plugin.dependencyParse(dependency),resolved=Plugin.resolve(dependency);if(resolved&&!Plugin.versionSatisfies(resolved.version,parsed.range)){Common.warn('Plugin.dependencies:',Plugin.toString(resolved),'does not satisfy',Plugin.toString(parsed),'used by',Plugin.toString(parsedBase)+'.');resolved._warned=true;module._warned=true;}else if(!resolved){Common.warn('Plugin.dependencies:',Plugin.toString(dependency),'used by',Plugin.toString(parsedBase),'could not be resolved.');module._warned=true;}return parsed.name;});for(var i=0;i<tracked[name].length;i+=1){Plugin.dependencies(tracked[name][i],tracked);}return tracked;};/**
     * Parses a dependency string into its components.
     * The `dependency` is a string of the format `'module-name'` or `'module-name@version'`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * This function can also handle dependencies that are already resolved (e.g. a module object).
     * @method dependencyParse
     * @param dependency {string} The dependency of the format `'module-name'` or `'module-name@version'`.
     * @return {object} The dependency parsed into its components.
     */Plugin.dependencyParse=function(dependency){if(Common.isString(dependency)){var pattern=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;if(!pattern.test(dependency)){Common.warn('Plugin.dependencyParse:',dependency,'is not a valid dependency string.');}return{name:dependency.split('@')[0],range:dependency.split('@')[1]||'*'};}return{name:dependency.name,range:dependency.range||dependency.version};};/**
     * Parses a version string into its components.  
     * Versions are strictly of the format `x.y.z` (as in [semver](http://semver.org/)).
     * Versions may optionally have a prerelease tag in the format `x.y.z-alpha`.
     * Ranges are a strict subset of [npm ranges](https://docs.npmjs.com/misc/semver#advanced-range-syntax).
     * Only the following range types are supported:
     * - Tilde ranges e.g. `~1.2.3`
     * - Caret ranges e.g. `^1.2.3`
     * - Greater than ranges e.g. `>1.2.3`
     * - Greater than or equal ranges e.g. `>=1.2.3`
     * - Exact version e.g. `1.2.3`
     * - Any version `*`
     * @method versionParse
     * @param range {string} The version string.
     * @return {object} The version range parsed into its components.
     */Plugin.versionParse=function(range){var pattern=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;if(!pattern.test(range)){Common.warn('Plugin.versionParse:',range,'is not a valid version or range.');}var parts=pattern.exec(range);var major=Number(parts[4]);var minor=Number(parts[5]);var patch=Number(parts[6]);return{isRange:Boolean(parts[1]||parts[2]),version:parts[3],range:range,operator:parts[1]||parts[2]||'',major:major,minor:minor,patch:patch,parts:[major,minor,patch],prerelease:parts[7],number:major*1e8+minor*1e4+patch};};/**
     * Returns `true` if `version` satisfies the given `range`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * If a version or range is not specified, then any version (`*`) is assumed to satisfy.
     * @method versionSatisfies
     * @param version {string} The version string.
     * @param range {string} The range string.
     * @return {boolean} `true` if `version` satisfies `range`, otherwise `false`.
     */Plugin.versionSatisfies=function(version,range){range=range||'*';var r=Plugin.versionParse(range),v=Plugin.versionParse(version);if(r.isRange){if(r.operator==='*'||version==='*'){return true;}if(r.operator==='>'){return v.number>r.number;}if(r.operator==='>='){return v.number>=r.number;}if(r.operator==='~'){return v.major===r.major&&v.minor===r.minor&&v.patch>=r.patch;}if(r.operator==='^'){if(r.major>0){return v.major===r.major&&v.number>=r.number;}if(r.minor>0){return v.minor===r.minor&&v.patch>=r.patch;}return v.patch===r.patch;}}return version===range||version==='*';};})();/***/},/* 16 */ /***/function(module,exports,__nested_webpack_require_198010__){/**
* The `Matter.Render` module is a simple canvas based renderer for visualising instances of `Matter.Engine`.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* It includes a number of drawing options including wireframe, vector with support for sprites and viewports.
*
* @class Render
*/var Render={};module.exports=Render;var Common=__nested_webpack_require_198010__(0);var Composite=__nested_webpack_require_198010__(5);var Bounds=__nested_webpack_require_198010__(1);var Events=__nested_webpack_require_198010__(4);var Vector=__nested_webpack_require_198010__(2);var Mouse=__nested_webpack_require_198010__(13);(function(){var _requestAnimationFrame,_cancelAnimationFrame;if(typeof window!=='undefined'){_requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(function(){callback(Common.now());},1000/60);};_cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame;}Render._goodFps=30;Render._goodDelta=1000/60;/**
     * Creates a new renderer. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {render} A new renderer
     */Render.create=function(options){var defaults={controller:Render,engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:'#14151f',wireframeBackground:'#14151f',hasBounds:!!options.bounds,enabled:true,wireframes:true,showSleeping:true,showDebug:false,showStats:false,showPerformance:false,showBounds:false,showVelocity:false,showCollisions:false,showSeparations:false,showAxes:false,showPositions:false,showAngleIndicator:false,showIds:false,showVertexNumbers:false,showConvexHulls:false,showInternalEdges:false,showMousePosition:false}};var render=Common.extend(defaults,options);if(render.canvas){render.canvas.width=render.options.width||render.canvas.width;render.canvas.height=render.options.height||render.canvas.height;}render.mouse=options.mouse;render.engine=options.engine;render.canvas=render.canvas||_createCanvas(render.options.width,render.options.height);render.context=render.canvas.getContext('2d');render.textures={};render.bounds=render.bounds||{min:{x:0,y:0},max:{x:render.canvas.width,y:render.canvas.height}};// for temporary back compatibility only
render.options.showBroadphase=false;if(render.options.pixelRatio!==1){Render.setPixelRatio(render,render.options.pixelRatio);}if(Common.isElement(render.element)){render.element.appendChild(render.canvas);}else if(!render.canvas.parentNode){Common.log('Render.create: options.element was undefined, render.canvas was created but not appended','warn');}return render;};/**
     * Continuously updates the render canvas on the `requestAnimationFrame` event.
     * @method run
     * @param {render} render
     */Render.run=function(render){(function loop(time){render.frameRequestId=_requestAnimationFrame(loop);_updateTiming(render,time);Render.world(render,time);if(render.options.showStats||render.options.showDebug){Render.stats(render,render.context,time);}if(render.options.showPerformance||render.options.showDebug){Render.performance(render,render.context,time);}})();};/**
     * Ends execution of `Render.run` on the given `render`, by canceling the animation frame request event loop.
     * @method stop
     * @param {render} render
     */Render.stop=function(render){_cancelAnimationFrame(render.frameRequestId);};/**
     * Sets the pixel ratio of the renderer and updates the canvas.
     * To automatically detect the correct ratio, pass the string `'auto'` for `pixelRatio`.
     * @method setPixelRatio
     * @param {render} render
     * @param {number} pixelRatio
     */Render.setPixelRatio=function(render,pixelRatio){var options=render.options,canvas=render.canvas;if(pixelRatio==='auto'){pixelRatio=_getPixelRatio(canvas);}options.pixelRatio=pixelRatio;canvas.setAttribute('data-pixel-ratio',pixelRatio);canvas.width=options.width*pixelRatio;canvas.height=options.height*pixelRatio;canvas.style.width=options.width+'px';canvas.style.height=options.height+'px';};/**
     * Positions and sizes the viewport around the given object bounds.
     * Objects must have at least one of the following properties:
     * - `object.bounds`
     * - `object.position`
     * - `object.min` and `object.max`
     * - `object.x` and `object.y`
     * @method lookAt
     * @param {render} render
     * @param {object[]} objects
     * @param {vector} [padding]
     * @param {bool} [center=true]
     */Render.lookAt=function(render,objects,padding,center){center=typeof center!=='undefined'?center:true;objects=Common.isArray(objects)?objects:[objects];padding=padding||{x:0,y:0};// find bounds of all objects
var bounds={min:{x:Infinity,y:Infinity},max:{x:-Infinity,y:-Infinity}};for(var i=0;i<objects.length;i+=1){var object=objects[i],min=object.bounds?object.bounds.min:object.min||object.position||object,max=object.bounds?object.bounds.max:object.max||object.position||object;if(min&&max){if(min.x<bounds.min.x)bounds.min.x=min.x;if(max.x>bounds.max.x)bounds.max.x=max.x;if(min.y<bounds.min.y)bounds.min.y=min.y;if(max.y>bounds.max.y)bounds.max.y=max.y;}}// find ratios
var width=bounds.max.x-bounds.min.x+2*padding.x,height=bounds.max.y-bounds.min.y+2*padding.y,viewHeight=render.canvas.height,viewWidth=render.canvas.width,outerRatio=viewWidth/viewHeight,innerRatio=width/height,scaleX=1,scaleY=1;// find scale factor
if(innerRatio>outerRatio){scaleY=innerRatio/outerRatio;}else{scaleX=outerRatio/innerRatio;}// enable bounds
render.options.hasBounds=true;// position and size
render.bounds.min.x=bounds.min.x;render.bounds.max.x=bounds.min.x+width*scaleX;render.bounds.min.y=bounds.min.y;render.bounds.max.y=bounds.min.y+height*scaleY;// center
if(center){render.bounds.min.x+=width*0.5-width*scaleX*0.5;render.bounds.max.x+=width*0.5-width*scaleX*0.5;render.bounds.min.y+=height*0.5-height*scaleY*0.5;render.bounds.max.y+=height*0.5-height*scaleY*0.5;}// padding
render.bounds.min.x-=padding.x;render.bounds.max.x-=padding.x;render.bounds.min.y-=padding.y;render.bounds.max.y-=padding.y;// update mouse
if(render.mouse){Mouse.setScale(render.mouse,{x:(render.bounds.max.x-render.bounds.min.x)/render.canvas.width,y:(render.bounds.max.y-render.bounds.min.y)/render.canvas.height});Mouse.setOffset(render.mouse,render.bounds.min);}};/**
     * Applies viewport transforms based on `render.bounds` to a render context.
     * @method startViewTransform
     * @param {render} render
     */Render.startViewTransform=function(render){var boundsWidth=render.bounds.max.x-render.bounds.min.x,boundsHeight=render.bounds.max.y-render.bounds.min.y,boundsScaleX=boundsWidth/render.options.width,boundsScaleY=boundsHeight/render.options.height;render.context.setTransform(render.options.pixelRatio/boundsScaleX,0,0,render.options.pixelRatio/boundsScaleY,0,0);render.context.translate(-render.bounds.min.x,-render.bounds.min.y);};/**
     * Resets all transforms on the render context.
     * @method endViewTransform
     * @param {render} render
     */Render.endViewTransform=function(render){render.context.setTransform(render.options.pixelRatio,0,0,render.options.pixelRatio,0,0);};/**
     * Renders the given `engine`'s `Matter.World` object.
     * This is the entry point for all rendering and should be called every time the scene changes.
     * @method world
     * @param {render} render
     */Render.world=function(render,time){var startTime=Common.now(),engine=render.engine,world=engine.world,canvas=render.canvas,context=render.context,options=render.options,timing=render.timing;var allBodies=Composite.allBodies(world),allConstraints=Composite.allConstraints(world),background=options.wireframes?options.wireframeBackground:options.background,bodies=[],constraints=[],i;var event={timestamp:engine.timing.timestamp};Events.trigger(render,'beforeRender',event);// apply background if it has changed
if(render.currentBackground!==background)_applyBackground(render,background);// clear the canvas with a transparent fill, to allow the canvas background to show
context.globalCompositeOperation='source-in';context.fillStyle="transparent";context.fillRect(0,0,canvas.width,canvas.height);context.globalCompositeOperation='source-over';// handle bounds
if(options.hasBounds){// filter out bodies that are not in view
for(i=0;i<allBodies.length;i++){var body=allBodies[i];if(Bounds.overlaps(body.bounds,render.bounds))bodies.push(body);}// filter out constraints that are not in view
for(i=0;i<allConstraints.length;i++){var constraint=allConstraints[i],bodyA=constraint.bodyA,bodyB=constraint.bodyB,pointAWorld=constraint.pointA,pointBWorld=constraint.pointB;if(bodyA)pointAWorld=Vector.add(bodyA.position,constraint.pointA);if(bodyB)pointBWorld=Vector.add(bodyB.position,constraint.pointB);if(!pointAWorld||!pointBWorld)continue;if(Bounds.contains(render.bounds,pointAWorld)||Bounds.contains(render.bounds,pointBWorld))constraints.push(constraint);}// transform the view
Render.startViewTransform(render);// update mouse
if(render.mouse){Mouse.setScale(render.mouse,{x:(render.bounds.max.x-render.bounds.min.x)/render.options.width,y:(render.bounds.max.y-render.bounds.min.y)/render.options.height});Mouse.setOffset(render.mouse,render.bounds.min);}}else{constraints=allConstraints;bodies=allBodies;if(render.options.pixelRatio!==1){render.context.setTransform(render.options.pixelRatio,0,0,render.options.pixelRatio,0,0);}}if(!options.wireframes||engine.enableSleeping&&options.showSleeping){// fully featured rendering of bodies
Render.bodies(render,bodies,context);}else{if(options.showConvexHulls)Render.bodyConvexHulls(render,bodies,context);// optimised method for wireframes only
Render.bodyWireframes(render,bodies,context);}if(options.showBounds)Render.bodyBounds(render,bodies,context);if(options.showAxes||options.showAngleIndicator)Render.bodyAxes(render,bodies,context);if(options.showPositions)Render.bodyPositions(render,bodies,context);if(options.showVelocity)Render.bodyVelocity(render,bodies,context);if(options.showIds)Render.bodyIds(render,bodies,context);if(options.showSeparations)Render.separations(render,engine.pairs.list,context);if(options.showCollisions)Render.collisions(render,engine.pairs.list,context);if(options.showVertexNumbers)Render.vertexNumbers(render,bodies,context);if(options.showMousePosition)Render.mousePosition(render,render.mouse,context);Render.constraints(constraints,context);if(options.hasBounds){// revert view transforms
Render.endViewTransform(render);}Events.trigger(render,'afterRender',event);// log the time elapsed computing this update
timing.lastElapsed=Common.now()-startTime;};/**
     * Renders statistics about the engine and world useful for debugging.
     * @private
     * @method stats
     * @param {render} render
     * @param {RenderingContext} context
     * @param {Number} time
     */Render.stats=function(render,context,time){var engine=render.engine,world=engine.world,bodies=Composite.allBodies(world),parts=0,width=55,height=44,x=0,y=0;// count parts
for(var i=0;i<bodies.length;i+=1){parts+=bodies[i].parts.length;}// sections
var sections={'Part':parts,'Body':bodies.length,'Cons':Composite.allConstraints(world).length,'Comp':Composite.allComposites(world).length,'Pair':engine.pairs.list.length};// background
context.fillStyle='#0e0f19';context.fillRect(x,y,width*5.5,height);context.font='12px Arial';context.textBaseline='top';context.textAlign='right';// sections
for(var key in sections){var section=sections[key];// label
context.fillStyle='#aaa';context.fillText(key,x+width,y+8);// value
context.fillStyle='#eee';context.fillText(section,x+width,y+26);x+=width;}};/**
     * Renders engine and render performance information.
     * @private
     * @method performance
     * @param {render} render
     * @param {RenderingContext} context
     */Render.performance=function(render,context){var engine=render.engine,timing=render.timing,deltaHistory=timing.deltaHistory,elapsedHistory=timing.elapsedHistory,timestampElapsedHistory=timing.timestampElapsedHistory,engineDeltaHistory=timing.engineDeltaHistory,engineElapsedHistory=timing.engineElapsedHistory,lastEngineDelta=engine.timing.lastDelta;var deltaMean=_mean(deltaHistory),elapsedMean=_mean(elapsedHistory),engineDeltaMean=_mean(engineDeltaHistory),engineElapsedMean=_mean(engineElapsedHistory),timestampElapsedMean=_mean(timestampElapsedHistory),rateMean=timestampElapsedMean/deltaMean||0,fps=1000/deltaMean||0;var graphHeight=4,gap=12,width=60,height=34,x=10,y=69;// background
context.fillStyle='#0e0f19';context.fillRect(0,50,gap*4+width*5+22,height);// show FPS
Render.status(context,x,y,width,graphHeight,deltaHistory.length,Math.round(fps)+' fps',fps/Render._goodFps,function(i){return deltaHistory[i]/deltaMean-1;});// show engine delta
Render.status(context,x+gap+width,y,width,graphHeight,engineDeltaHistory.length,lastEngineDelta.toFixed(2)+' dt',Render._goodDelta/lastEngineDelta,function(i){return engineDeltaHistory[i]/engineDeltaMean-1;});// show engine update time
Render.status(context,x+(gap+width)*2,y,width,graphHeight,engineElapsedHistory.length,engineElapsedMean.toFixed(2)+' ut',1-engineElapsedMean/Render._goodFps,function(i){return engineElapsedHistory[i]/engineElapsedMean-1;});// show render time
Render.status(context,x+(gap+width)*3,y,width,graphHeight,elapsedHistory.length,elapsedMean.toFixed(2)+' rt',1-elapsedMean/Render._goodFps,function(i){return elapsedHistory[i]/elapsedMean-1;});// show effective speed
Render.status(context,x+(gap+width)*4,y,width,graphHeight,timestampElapsedHistory.length,rateMean.toFixed(2)+' x',rateMean*rateMean*rateMean,function(i){return(timestampElapsedHistory[i]/deltaHistory[i]/rateMean||0)-1;});};/**
     * Renders a label, indicator and a chart.
     * @private
     * @method status
     * @param {RenderingContext} context
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} count
     * @param {string} label
     * @param {string} indicator
     * @param {function} plotY
     */Render.status=function(context,x,y,width,height,count,label,indicator,plotY){// background
context.strokeStyle='#888';context.fillStyle='#444';context.lineWidth=1;context.fillRect(x,y+7,width,1);// chart
context.beginPath();context.moveTo(x,y+7-height*Common.clamp(0.4*plotY(0),-2,2));for(var i=0;i<width;i+=1){context.lineTo(x+i,y+7-(i<count?height*Common.clamp(0.4*plotY(i),-2,2):0));}context.stroke();// indicator
context.fillStyle='hsl('+Common.clamp(25+95*indicator,0,120)+',100%,60%)';context.fillRect(x,y-7,4,4);// label
context.font='12px Arial';context.textBaseline='middle';context.textAlign='right';context.fillStyle='#eee';context.fillText(label,x+width,y-5);};/**
     * Description
     * @private
     * @method constraints
     * @param {constraint[]} constraints
     * @param {RenderingContext} context
     */Render.constraints=function(constraints,context){var c=context;for(var i=0;i<constraints.length;i++){var constraint=constraints[i];if(!constraint.render.visible||!constraint.pointA||!constraint.pointB)continue;var bodyA=constraint.bodyA,bodyB=constraint.bodyB,start,end;if(bodyA){start=Vector.add(bodyA.position,constraint.pointA);}else{start=constraint.pointA;}if(constraint.render.type==='pin'){c.beginPath();c.arc(start.x,start.y,3,0,2*Math.PI);c.closePath();}else{if(bodyB){end=Vector.add(bodyB.position,constraint.pointB);}else{end=constraint.pointB;}c.beginPath();c.moveTo(start.x,start.y);if(constraint.render.type==='spring'){var delta=Vector.sub(end,start),normal=Vector.perp(Vector.normalise(delta)),coils=Math.ceil(Common.clamp(constraint.length/5,12,20)),offset;for(var j=1;j<coils;j+=1){offset=j%2===0?1:-1;c.lineTo(start.x+delta.x*(j/coils)+normal.x*offset*4,start.y+delta.y*(j/coils)+normal.y*offset*4);}}c.lineTo(end.x,end.y);}if(constraint.render.lineWidth){c.lineWidth=constraint.render.lineWidth;c.strokeStyle=constraint.render.strokeStyle;c.stroke();}if(constraint.render.anchors){c.fillStyle=constraint.render.strokeStyle;c.beginPath();c.arc(start.x,start.y,3,0,2*Math.PI);c.arc(end.x,end.y,3,0,2*Math.PI);c.closePath();c.fill();}}};/**
     * Description
     * @private
     * @method bodies
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */Render.bodies=function(render,bodies,context){var c=context,engine=render.engine,options=render.options,showInternalEdges=options.showInternalEdges||!options.wireframes,body,part,i,k;for(i=0;i<bodies.length;i++){body=bodies[i];if(!body.render.visible)continue;// handle compound parts
for(k=body.parts.length>1?1:0;k<body.parts.length;k++){part=body.parts[k];if(!part.render.visible)continue;if(options.showSleeping&&body.isSleeping){c.globalAlpha=0.5*part.render.opacity;}else if(part.render.opacity!==1){c.globalAlpha=part.render.opacity;}if(part.render.sprite&&part.render.sprite.texture&&!options.wireframes){// part sprite
var sprite=part.render.sprite,texture=_getTexture(render,sprite.texture);c.translate(part.position.x,part.position.y);c.rotate(part.angle);c.drawImage(texture,texture.width*-sprite.xOffset*sprite.xScale,texture.height*-sprite.yOffset*sprite.yScale,texture.width*sprite.xScale,texture.height*sprite.yScale);// revert translation, hopefully faster than save / restore
c.rotate(-part.angle);c.translate(-part.position.x,-part.position.y);}else{// part polygon
if(part.circleRadius){c.beginPath();c.arc(part.position.x,part.position.y,part.circleRadius,0,2*Math.PI);}else{c.beginPath();c.moveTo(part.vertices[0].x,part.vertices[0].y);for(var j=1;j<part.vertices.length;j++){if(!part.vertices[j-1].isInternal||showInternalEdges){c.lineTo(part.vertices[j].x,part.vertices[j].y);}else{c.moveTo(part.vertices[j].x,part.vertices[j].y);}if(part.vertices[j].isInternal&&!showInternalEdges){c.moveTo(part.vertices[(j+1)%part.vertices.length].x,part.vertices[(j+1)%part.vertices.length].y);}}c.lineTo(part.vertices[0].x,part.vertices[0].y);c.closePath();}if(!options.wireframes){c.fillStyle=part.render.fillStyle;if(part.render.lineWidth){c.lineWidth=part.render.lineWidth;c.strokeStyle=part.render.strokeStyle;c.stroke();}c.fill();}else{c.lineWidth=1;c.strokeStyle='#bbb';c.stroke();}}c.globalAlpha=1;}}};/**
     * Optimised method for drawing body wireframes in one pass
     * @private
     * @method bodyWireframes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */Render.bodyWireframes=function(render,bodies,context){var c=context,showInternalEdges=render.options.showInternalEdges,body,part,i,j,k;c.beginPath();// render all bodies
for(i=0;i<bodies.length;i++){body=bodies[i];if(!body.render.visible)continue;// handle compound parts
for(k=body.parts.length>1?1:0;k<body.parts.length;k++){part=body.parts[k];c.moveTo(part.vertices[0].x,part.vertices[0].y);for(j=1;j<part.vertices.length;j++){if(!part.vertices[j-1].isInternal||showInternalEdges){c.lineTo(part.vertices[j].x,part.vertices[j].y);}else{c.moveTo(part.vertices[j].x,part.vertices[j].y);}if(part.vertices[j].isInternal&&!showInternalEdges){c.moveTo(part.vertices[(j+1)%part.vertices.length].x,part.vertices[(j+1)%part.vertices.length].y);}}c.lineTo(part.vertices[0].x,part.vertices[0].y);}}c.lineWidth=1;c.strokeStyle='#bbb';c.stroke();};/**
     * Optimised method for drawing body convex hull wireframes in one pass
     * @private
     * @method bodyConvexHulls
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */Render.bodyConvexHulls=function(render,bodies,context){var c=context,body,part,i,j,k;c.beginPath();// render convex hulls
for(i=0;i<bodies.length;i++){body=bodies[i];if(!body.render.visible||body.parts.length===1)continue;c.moveTo(body.vertices[0].x,body.vertices[0].y);for(j=1;j<body.vertices.length;j++){c.lineTo(body.vertices[j].x,body.vertices[j].y);}c.lineTo(body.vertices[0].x,body.vertices[0].y);}c.lineWidth=1;c.strokeStyle='rgba(255,255,255,0.2)';c.stroke();};/**
     * Renders body vertex numbers.
     * @private
     * @method vertexNumbers
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */Render.vertexNumbers=function(render,bodies,context){var c=context,i,j,k;for(i=0;i<bodies.length;i++){var parts=bodies[i].parts;for(k=parts.length>1?1:0;k<parts.length;k++){var part=parts[k];for(j=0;j<part.vertices.length;j++){c.fillStyle='rgba(255,255,255,0.2)';c.fillText(i+'_'+j,part.position.x+(part.vertices[j].x-part.position.x)*0.8,part.position.y+(part.vertices[j].y-part.position.y)*0.8);}}}};/**
     * Renders mouse position.
     * @private
     * @method mousePosition
     * @param {render} render
     * @param {mouse} mouse
     * @param {RenderingContext} context
     */Render.mousePosition=function(render,mouse,context){var c=context;c.fillStyle='rgba(255,255,255,0.8)';c.fillText(mouse.position.x+'  '+mouse.position.y,mouse.position.x+5,mouse.position.y-5);};/**
     * Draws body bounds
     * @private
     * @method bodyBounds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */Render.bodyBounds=function(render,bodies,context){var c=context,engine=render.engine,options=render.options;c.beginPath();for(var i=0;i<bodies.length;i++){var body=bodies[i];if(body.render.visible){var parts=bodies[i].parts;for(var j=parts.length>1?1:0;j<parts.length;j++){var part=parts[j];c.rect(part.bounds.min.x,part.bounds.min.y,part.bounds.max.x-part.bounds.min.x,part.bounds.max.y-part.bounds.min.y);}}}if(options.wireframes){c.strokeStyle='rgba(255,255,255,0.08)';}else{c.strokeStyle='rgba(0,0,0,0.1)';}c.lineWidth=1;c.stroke();};/**
     * Draws body angle indicators and axes
     * @private
     * @method bodyAxes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */Render.bodyAxes=function(render,bodies,context){var c=context,engine=render.engine,options=render.options,part,i,j,k;c.beginPath();for(i=0;i<bodies.length;i++){var body=bodies[i],parts=body.parts;if(!body.render.visible)continue;if(options.showAxes){// render all axes
for(j=parts.length>1?1:0;j<parts.length;j++){part=parts[j];for(k=0;k<part.axes.length;k++){var axis=part.axes[k];c.moveTo(part.position.x,part.position.y);c.lineTo(part.position.x+axis.x*20,part.position.y+axis.y*20);}}}else{for(j=parts.length>1?1:0;j<parts.length;j++){part=parts[j];for(k=0;k<part.axes.length;k++){// render a single axis indicator
c.moveTo(part.position.x,part.position.y);c.lineTo((part.vertices[0].x+part.vertices[part.vertices.length-1].x)/2,(part.vertices[0].y+part.vertices[part.vertices.length-1].y)/2);}}}}if(options.wireframes){c.strokeStyle='indianred';c.lineWidth=1;}else{c.strokeStyle='rgba(255, 255, 255, 0.4)';c.globalCompositeOperation='overlay';c.lineWidth=2;}c.stroke();c.globalCompositeOperation='source-over';};/**
     * Draws body positions
     * @private
     * @method bodyPositions
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */Render.bodyPositions=function(render,bodies,context){var c=context,engine=render.engine,options=render.options,body,part,i,k;c.beginPath();// render current positions
for(i=0;i<bodies.length;i++){body=bodies[i];if(!body.render.visible)continue;// handle compound parts
for(k=0;k<body.parts.length;k++){part=body.parts[k];c.arc(part.position.x,part.position.y,3,0,2*Math.PI,false);c.closePath();}}if(options.wireframes){c.fillStyle='indianred';}else{c.fillStyle='rgba(0,0,0,0.5)';}c.fill();c.beginPath();// render previous positions
for(i=0;i<bodies.length;i++){body=bodies[i];if(body.render.visible){c.arc(body.positionPrev.x,body.positionPrev.y,2,0,2*Math.PI,false);c.closePath();}}c.fillStyle='rgba(255,165,0,0.8)';c.fill();};/**
     * Draws body velocity
     * @private
     * @method bodyVelocity
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */Render.bodyVelocity=function(render,bodies,context){var c=context;c.beginPath();for(var i=0;i<bodies.length;i++){var body=bodies[i];if(!body.render.visible)continue;c.moveTo(body.position.x,body.position.y);c.lineTo(body.position.x+(body.position.x-body.positionPrev.x)*2,body.position.y+(body.position.y-body.positionPrev.y)*2);}c.lineWidth=3;c.strokeStyle='cornflowerblue';c.stroke();};/**
     * Draws body ids
     * @private
     * @method bodyIds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */Render.bodyIds=function(render,bodies,context){var c=context,i,j;for(i=0;i<bodies.length;i++){if(!bodies[i].render.visible)continue;var parts=bodies[i].parts;for(j=parts.length>1?1:0;j<parts.length;j++){var part=parts[j];c.font="12px Arial";c.fillStyle='rgba(255,255,255,0.5)';c.fillText(part.id,part.position.x+10,part.position.y-10);}}};/**
     * Description
     * @private
     * @method collisions
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */Render.collisions=function(render,pairs,context){var c=context,options=render.options,pair,collision,corrected,bodyA,bodyB,i,j;c.beginPath();// render collision positions
for(i=0;i<pairs.length;i++){pair=pairs[i];if(!pair.isActive)continue;collision=pair.collision;for(j=0;j<pair.activeContacts.length;j++){var contact=pair.activeContacts[j],vertex=contact.vertex;c.rect(vertex.x-1.5,vertex.y-1.5,3.5,3.5);}}if(options.wireframes){c.fillStyle='rgba(255,255,255,0.7)';}else{c.fillStyle='orange';}c.fill();c.beginPath();// render collision normals
for(i=0;i<pairs.length;i++){pair=pairs[i];if(!pair.isActive)continue;collision=pair.collision;if(pair.activeContacts.length>0){var normalPosX=pair.activeContacts[0].vertex.x,normalPosY=pair.activeContacts[0].vertex.y;if(pair.activeContacts.length===2){normalPosX=(pair.activeContacts[0].vertex.x+pair.activeContacts[1].vertex.x)/2;normalPosY=(pair.activeContacts[0].vertex.y+pair.activeContacts[1].vertex.y)/2;}if(collision.bodyB===collision.supports[0].body||collision.bodyA.isStatic===true){c.moveTo(normalPosX-collision.normal.x*8,normalPosY-collision.normal.y*8);}else{c.moveTo(normalPosX+collision.normal.x*8,normalPosY+collision.normal.y*8);}c.lineTo(normalPosX,normalPosY);}}if(options.wireframes){c.strokeStyle='rgba(255,165,0,0.7)';}else{c.strokeStyle='orange';}c.lineWidth=1;c.stroke();};/**
     * Description
     * @private
     * @method separations
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */Render.separations=function(render,pairs,context){var c=context,options=render.options,pair,collision,corrected,bodyA,bodyB,i,j;c.beginPath();// render separations
for(i=0;i<pairs.length;i++){pair=pairs[i];if(!pair.isActive)continue;collision=pair.collision;bodyA=collision.bodyA;bodyB=collision.bodyB;var k=1;if(!bodyB.isStatic&&!bodyA.isStatic)k=0.5;if(bodyB.isStatic)k=0;c.moveTo(bodyB.position.x,bodyB.position.y);c.lineTo(bodyB.position.x-collision.penetration.x*k,bodyB.position.y-collision.penetration.y*k);k=1;if(!bodyB.isStatic&&!bodyA.isStatic)k=0.5;if(bodyA.isStatic)k=0;c.moveTo(bodyA.position.x,bodyA.position.y);c.lineTo(bodyA.position.x+collision.penetration.x*k,bodyA.position.y+collision.penetration.y*k);}if(options.wireframes){c.strokeStyle='rgba(255,165,0,0.5)';}else{c.strokeStyle='orange';}c.stroke();};/**
     * Description
     * @private
     * @method inspector
     * @param {inspector} inspector
     * @param {RenderingContext} context
     */Render.inspector=function(inspector,context){var engine=inspector.engine,selected=inspector.selected,render=inspector.render,options=render.options,bounds;if(options.hasBounds){var boundsWidth=render.bounds.max.x-render.bounds.min.x,boundsHeight=render.bounds.max.y-render.bounds.min.y,boundsScaleX=boundsWidth/render.options.width,boundsScaleY=boundsHeight/render.options.height;context.scale(1/boundsScaleX,1/boundsScaleY);context.translate(-render.bounds.min.x,-render.bounds.min.y);}for(var i=0;i<selected.length;i++){var item=selected[i].data;context.translate(0.5,0.5);context.lineWidth=1;context.strokeStyle='rgba(255,165,0,0.9)';context.setLineDash([1,2]);switch(item.type){case'body':// render body selections
bounds=item.bounds;context.beginPath();context.rect(Math.floor(bounds.min.x-3),Math.floor(bounds.min.y-3),Math.floor(bounds.max.x-bounds.min.x+6),Math.floor(bounds.max.y-bounds.min.y+6));context.closePath();context.stroke();break;case'constraint':// render constraint selections
var point=item.pointA;if(item.bodyA)point=item.pointB;context.beginPath();context.arc(point.x,point.y,10,0,2*Math.PI);context.closePath();context.stroke();break;}context.setLineDash([]);context.translate(-0.5,-0.5);}// render selection region
if(inspector.selectStart!==null){context.translate(0.5,0.5);context.lineWidth=1;context.strokeStyle='rgba(255,165,0,0.6)';context.fillStyle='rgba(255,165,0,0.1)';bounds=inspector.selectBounds;context.beginPath();context.rect(Math.floor(bounds.min.x),Math.floor(bounds.min.y),Math.floor(bounds.max.x-bounds.min.x),Math.floor(bounds.max.y-bounds.min.y));context.closePath();context.stroke();context.fill();context.translate(-0.5,-0.5);}if(options.hasBounds)context.setTransform(1,0,0,1,0,0);};/**
     * Updates render timing.
     * @method _updateTiming
     * @private
     * @param {render} render
     * @param {number} time
     */var _updateTiming=function _updateTiming(render,time){var engine=render.engine,timing=render.timing,historySize=timing.historySize,timestamp=engine.timing.timestamp;timing.delta=time-timing.lastTime||Render._goodDelta;timing.lastTime=time;timing.timestampElapsed=timestamp-timing.lastTimestamp||0;timing.lastTimestamp=timestamp;timing.deltaHistory.unshift(timing.delta);timing.deltaHistory.length=Math.min(timing.deltaHistory.length,historySize);timing.engineDeltaHistory.unshift(engine.timing.lastDelta);timing.engineDeltaHistory.length=Math.min(timing.engineDeltaHistory.length,historySize);timing.timestampElapsedHistory.unshift(timing.timestampElapsed);timing.timestampElapsedHistory.length=Math.min(timing.timestampElapsedHistory.length,historySize);timing.engineElapsedHistory.unshift(engine.timing.lastElapsed);timing.engineElapsedHistory.length=Math.min(timing.engineElapsedHistory.length,historySize);timing.elapsedHistory.unshift(timing.lastElapsed);timing.elapsedHistory.length=Math.min(timing.elapsedHistory.length,historySize);};/**
     * Returns the mean value of the given numbers.
     * @method _mean
     * @private
     * @param {Number[]} values
     * @return {Number} the mean of given values
     */var _mean=function _mean(values){var result=0;for(var i=0;i<values.length;i+=1){result+=values[i];}return result/values.length||0;};/**
     * @method _createCanvas
     * @private
     * @param {} width
     * @param {} height
     * @return canvas
     */var _createCanvas=function _createCanvas(width,height){var canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;canvas.oncontextmenu=function(){return false;};canvas.onselectstart=function(){return false;};return canvas;};/**
     * Gets the pixel ratio of the canvas.
     * @method _getPixelRatio
     * @private
     * @param {HTMLElement} canvas
     * @return {Number} pixel ratio
     */var _getPixelRatio=function _getPixelRatio(canvas){var context=canvas.getContext('2d'),devicePixelRatio=window.devicePixelRatio||1,backingStorePixelRatio=context.webkitBackingStorePixelRatio||context.mozBackingStorePixelRatio||context.msBackingStorePixelRatio||context.oBackingStorePixelRatio||context.backingStorePixelRatio||1;return devicePixelRatio/backingStorePixelRatio;};/**
     * Gets the requested texture (an Image) via its path
     * @method _getTexture
     * @private
     * @param {render} render
     * @param {string} imagePath
     * @return {Image} texture
     */var _getTexture=function _getTexture(render,imagePath){var image=render.textures[imagePath];if(image)return image;image=render.textures[imagePath]=new Image();image.src=imagePath;return image;};/**
     * Applies the background to the canvas using CSS.
     * @method applyBackground
     * @private
     * @param {render} render
     * @param {string} background
     */var _applyBackground=function _applyBackground(render,background){var cssBackground=background;if(/(jpg|gif|png)$/.test(background))cssBackground='url('+background+')';render.canvas.style.background=cssBackground;render.canvas.style.backgroundSize="contain";render.currentBackground=background;};/*
    *
    *  Events Documentation
    *
    */ /**
    * Fired before rendering
    *
    * @event beforeRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired after rendering
    *
    * @event afterRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /*
    *
    *  Properties Documentation
    *
    */ /**
     * A back-reference to the `Matter.Render` module.
     *
     * @property controller
     * @type render
     */ /**
     * A reference to the `Matter.Engine` instance to be used.
     *
     * @property engine
     * @type engine
     */ /**
     * A reference to the element where the canvas is to be inserted (if `render.canvas` has not been specified)
     *
     * @property element
     * @type HTMLElement
     * @default null
     */ /**
     * The canvas element to render to. If not specified, one will be created if `render.element` has been specified.
     *
     * @property canvas
     * @type HTMLCanvasElement
     * @default null
     */ /**
     * A `Bounds` object that specifies the drawing view region.
     * Rendering will be automatically transformed and scaled to fit within the canvas size (`render.options.width` and `render.options.height`).
     * This allows for creating views that can pan or zoom around the scene.
     * You must also set `render.options.hasBounds` to `true` to enable bounded rendering.
     *
     * @property bounds
     * @type bounds
     */ /**
     * The 2d rendering context from the `render.canvas` element.
     *
     * @property context
     * @type CanvasRenderingContext2D
     */ /**
     * The sprite texture cache.
     *
     * @property textures
     * @type {}
     */ /**
     * The mouse to render if `render.options.showMousePosition` is enabled.
     *
     * @property mouse
     * @type mouse
     * @default null
     */ /**
     * The configuration options of the renderer.
     *
     * @property options
     * @type {}
     */ /**
     * The target width in pixels of the `render.canvas` to be created.
     * See also the `options.pixelRatio` property to change render quality.
     *
     * @property options.width
     * @type number
     * @default 800
     */ /**
     * The target height in pixels of the `render.canvas` to be created.
     * See also the `options.pixelRatio` property to change render quality.
     *
     * @property options.height
     * @type number
     * @default 600
     */ /**
     * The [pixel ratio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio) to use when rendering.
     *
     * @property options.pixelRatio
     * @type number
     * @default 1
     */ /**
     * A CSS background color string to use when `render.options.wireframes` is disabled.
     * This may be also set to `'transparent'` or equivalent.
     *
     * @property options.background
     * @type string
     * @default '#14151f'
     */ /**
     * A CSS background color string to use when `render.options.wireframes` is enabled.
     * This may be also set to `'transparent'` or equivalent.
     *
     * @property options.wireframeBackground
     * @type string
     * @default '#14151f'
     */ /**
     * A flag that specifies if `render.bounds` should be used when rendering.
     *
     * @property options.hasBounds
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable all debug information overlays together.  
     * This includes and has priority over the values of:
     *
     * - `render.options.showStats`
     * - `render.options.showPerformance`
     *
     * @property options.showDebug
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the engine stats info overlay.  
     * From left to right, the values shown are:
     *
     * - body parts total
     * - body total
     * - constraints total
     * - composites total
     * - collision pairs total
     *
     * @property options.showStats
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable performance charts.  
     * From left to right, the values shown are:
     *
     * - average render frequency (e.g. 60 fps)
     * - exact engine delta time used for last update (e.g. 16.66ms)
     * - average engine execution duration (e.g. 5.00ms)
     * - average render execution duration (e.g. 0.40ms)
     * - average effective play speed (e.g. '1.00x' is 'real-time')
     *
     * Each value is recorded over a fixed sample of past frames (60 frames).
     *
     * A chart shown below each value indicates the variance from the average over the sample.
     * The more stable or fixed the value is the flatter the chart will appear.
     *
     * @property options.showPerformance
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable rendering entirely.
     *
     * @property options.enabled
     * @type boolean
     * @default false
     */ /**
     * A flag to toggle wireframe rendering otherwise solid fill rendering is used.
     *
     * @property options.wireframes
     * @type boolean
     * @default true
     */ /**
     * A flag to enable or disable sleeping bodies indicators.
     *
     * @property options.showSleeping
     * @type boolean
     * @default true
     */ /**
     * A flag to enable or disable the debug information overlay.
     *
     * @property options.showDebug
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the collision broadphase debug overlay.
     *
     * @deprecated no longer implemented
     * @property options.showBroadphase
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body bounds debug overlay.
     *
     * @property options.showBounds
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body velocity debug overlay.
     *
     * @property options.showVelocity
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body collisions debug overlay.
     *
     * @property options.showCollisions
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the collision resolver separations debug overlay.
     *
     * @property options.showSeparations
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body axes debug overlay.
     *
     * @property options.showAxes
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body positions debug overlay.
     *
     * @property options.showPositions
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body angle debug overlay.
     *
     * @property options.showAngleIndicator
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body and part ids debug overlay.
     *
     * @property options.showIds
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body vertex numbers debug overlay.
     *
     * @property options.showVertexNumbers
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body convex hulls debug overlay.
     *
     * @property options.showConvexHulls
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body internal edges debug overlay.
     *
     * @property options.showInternalEdges
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the mouse position debug overlay.
     *
     * @property options.showMousePosition
     * @type boolean
     * @default false
     */})();/***/},/* 17 */ /***/function(module,exports){/**
* The `Matter.Contact` module contains methods for creating and manipulating collision contacts.
*
* @class Contact
*/var Contact={};module.exports=Contact;(function(){/**
     * Creates a new contact.
     * @method create
     * @param {vertex} vertex
     * @return {contact} A new contact
     */Contact.create=function(vertex){return{vertex:vertex,normalImpulse:0,tangentImpulse:0};};})();/***/},/* 18 */ /***/function(module,exports,__nested_webpack_require_255897__){/**
* The `Matter.Engine` module contains methods for creating and manipulating engines.
* An engine is a controller that manages updating the simulation of the world.
* See `Matter.Runner` for an optional game loop utility.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Engine
*/var Engine={};module.exports=Engine;var Sleeping=__nested_webpack_require_255897__(7);var Resolver=__nested_webpack_require_255897__(19);var Detector=__nested_webpack_require_255897__(14);var Pairs=__nested_webpack_require_255897__(20);var Events=__nested_webpack_require_255897__(4);var Composite=__nested_webpack_require_255897__(5);var Constraint=__nested_webpack_require_255897__(10);var Common=__nested_webpack_require_255897__(0);var Body=__nested_webpack_require_255897__(6);(function(){/**
     * Creates a new engine. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {engine} engine
     */Engine.create=function(options){options=options||{};var defaults={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:false,events:[],plugin:{},gravity:{x:0,y:1,scale:0.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0}};var engine=Common.extend(defaults,options);engine.world=options.world||Composite.create({label:'World'});engine.pairs=options.pairs||Pairs.create();engine.detector=options.detector||Detector.create();// for temporary back compatibility only
engine.grid={buckets:[]};engine.world.gravity=engine.gravity;engine.broadphase=engine.grid;engine.metrics={};return engine;};/**
     * Moves the simulation forward in time by `delta` ms.
     * The `correction` argument is an optional `Number` that specifies the time correction factor to apply to the update.
     * This can help improve the accuracy of the simulation in cases where `delta` is changing between updates.
     * The value of `correction` is defined as `delta / lastDelta`, i.e. the percentage change of `delta` over the last step.
     * Therefore the value is always `1` (no correction) when `delta` constant (or when no correction is desired, which is the default).
     * See the paper on <a href="http://lonesock.net/article/verlet.html">Time Corrected Verlet</a> for more information.
     *
     * Triggers `beforeUpdate` and `afterUpdate` events.
     * Triggers `collisionStart`, `collisionActive` and `collisionEnd` events.
     * @method update
     * @param {engine} engine
     * @param {number} [delta=16.666]
     * @param {number} [correction=1]
     */Engine.update=function(engine,delta,correction){var startTime=Common.now();delta=delta||1000/60;correction=correction||1;var world=engine.world,detector=engine.detector,pairs=engine.pairs,timing=engine.timing,timestamp=timing.timestamp,i;// increment timestamp
timing.timestamp+=delta*timing.timeScale;timing.lastDelta=delta*timing.timeScale;// create an event object
var event={timestamp:timing.timestamp};Events.trigger(engine,'beforeUpdate',event);// get all bodies and all constraints in the world
var allBodies=Composite.allBodies(world),allConstraints=Composite.allConstraints(world);// update the detector bodies if they have changed
if(world.isModified){Detector.setBodies(detector,allBodies);}// reset all composite modified flags
if(world.isModified){Composite.setModified(world,false,false,true);}// update sleeping if enabled
if(engine.enableSleeping)Sleeping.update(allBodies,timing.timeScale);// apply gravity to all bodies
Engine._bodiesApplyGravity(allBodies,engine.gravity);// update all body position and rotation by integration
Engine._bodiesUpdate(allBodies,delta,timing.timeScale,correction,world.bounds);// update all constraints (first pass)
Constraint.preSolveAll(allBodies);for(i=0;i<engine.constraintIterations;i++){Constraint.solveAll(allConstraints,timing.timeScale);}Constraint.postSolveAll(allBodies);// find all collisions
detector.pairs=engine.pairs;var collisions=Detector.collisions(detector);// update collision pairs
Pairs.update(pairs,collisions,timestamp);// wake up bodies involved in collisions
if(engine.enableSleeping)Sleeping.afterCollisions(pairs.list,timing.timeScale);// trigger collision events
if(pairs.collisionStart.length>0)Events.trigger(engine,'collisionStart',{pairs:pairs.collisionStart});// iteratively resolve position between collisions
Resolver.preSolvePosition(pairs.list);for(i=0;i<engine.positionIterations;i++){Resolver.solvePosition(pairs.list,timing.timeScale);}Resolver.postSolvePosition(allBodies);// update all constraints (second pass)
Constraint.preSolveAll(allBodies);for(i=0;i<engine.constraintIterations;i++){Constraint.solveAll(allConstraints,timing.timeScale);}Constraint.postSolveAll(allBodies);// iteratively resolve velocity between collisions
Resolver.preSolveVelocity(pairs.list);for(i=0;i<engine.velocityIterations;i++){Resolver.solveVelocity(pairs.list,timing.timeScale);}// trigger collision events
if(pairs.collisionActive.length>0)Events.trigger(engine,'collisionActive',{pairs:pairs.collisionActive});if(pairs.collisionEnd.length>0)Events.trigger(engine,'collisionEnd',{pairs:pairs.collisionEnd});// clear force buffers
Engine._bodiesClearForces(allBodies);Events.trigger(engine,'afterUpdate',event);// log the time elapsed computing this update
engine.timing.lastElapsed=Common.now()-startTime;return engine;};/**
     * Merges two engines by keeping the configuration of `engineA` but replacing the world with the one from `engineB`.
     * @method merge
     * @param {engine} engineA
     * @param {engine} engineB
     */Engine.merge=function(engineA,engineB){Common.extend(engineA,engineB);if(engineB.world){engineA.world=engineB.world;Engine.clear(engineA);var bodies=Composite.allBodies(engineA.world);for(var i=0;i<bodies.length;i++){var body=bodies[i];Sleeping.set(body,false);body.id=Common.nextId();}}};/**
     * Clears the engine pairs and detector.
     * @method clear
     * @param {engine} engine
     */Engine.clear=function(engine){Pairs.clear(engine.pairs);Detector.clear(engine.detector);};/**
     * Zeroes the `body.force` and `body.torque` force buffers.
     * @method _bodiesClearForces
     * @private
     * @param {body[]} bodies
     */Engine._bodiesClearForces=function(bodies){for(var i=0;i<bodies.length;i++){var body=bodies[i];// reset force buffers
body.force.x=0;body.force.y=0;body.torque=0;}};/**
     * Applys a mass dependant force to all given bodies.
     * @method _bodiesApplyGravity
     * @private
     * @param {body[]} bodies
     * @param {vector} gravity
     */Engine._bodiesApplyGravity=function(bodies,gravity){var gravityScale=typeof gravity.scale!=='undefined'?gravity.scale:0.001;if(gravity.x===0&&gravity.y===0||gravityScale===0){return;}for(var i=0;i<bodies.length;i++){var body=bodies[i];if(body.isStatic||body.isSleeping)continue;// apply gravity
body.force.y+=body.mass*gravity.y*gravityScale;body.force.x+=body.mass*gravity.x*gravityScale;}};/**
     * Applys `Body.update` to all given `bodies`.
     * @method _bodiesUpdate
     * @private
     * @param {body[]} bodies
     * @param {number} deltaTime 
     * The amount of time elapsed between updates
     * @param {number} timeScale
     * @param {number} correction 
     * The Verlet correction factor (deltaTime / lastDeltaTime)
     * @param {bounds} worldBounds
     */Engine._bodiesUpdate=function(bodies,deltaTime,timeScale,correction,worldBounds){for(var i=0;i<bodies.length;i++){var body=bodies[i];if(body.isStatic||body.isSleeping)continue;Body.update(body,deltaTime,timeScale,correction);}};/**
     * A deprecated alias for `Runner.run`, use `Matter.Runner.run(engine)` instead and see `Matter.Runner` for more information.
     * @deprecated use Matter.Runner.run(engine) instead
     * @method run
     * @param {engine} engine
     */ /**
    * Fired just before an update
    *
    * @event beforeUpdate
    * @param {object} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */ /**
    * Fired after engine update and all collision events
    *
    * @event afterUpdate
    * @param {object} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */ /**
    * Fired after engine update, provides a list of all pairs that have started to collide in the current tick (if any)
    *
    * @event collisionStart
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */ /**
    * Fired after engine update, provides a list of all pairs that are colliding in the current tick (if any)
    *
    * @event collisionActive
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */ /**
    * Fired after engine update, provides a list of all pairs that have ended collision in the current tick (if any)
    *
    * @event collisionEnd
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */ /*
    *
    *  Properties Documentation
    *
    */ /**
     * An integer `Number` that specifies the number of position iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property positionIterations
     * @type number
     * @default 6
     */ /**
     * An integer `Number` that specifies the number of velocity iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property velocityIterations
     * @type number
     * @default 4
     */ /**
     * An integer `Number` that specifies the number of constraint iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     * The default value of `2` is usually very adequate.
     *
     * @property constraintIterations
     * @type number
     * @default 2
     */ /**
     * A flag that specifies whether the engine should allow sleeping via the `Matter.Sleeping` module.
     * Sleeping can improve stability and performance, but often at the expense of accuracy.
     *
     * @property enableSleeping
     * @type boolean
     * @default false
     */ /**
     * An `Object` containing properties regarding the timing systems of the engine. 
     *
     * @property timing
     * @type object
     */ /**
     * A `Number` that specifies the global scaling factor of time for all bodies.
     * A value of `0` freezes the simulation.
     * A value of `0.1` gives a slow-motion effect.
     * A value of `1.2` gives a speed-up effect.
     *
     * @property timing.timeScale
     * @type number
     * @default 1
     */ /**
     * A `Number` that specifies the current simulation-time in milliseconds starting from `0`. 
     * It is incremented on every `Engine.update` by the given `delta` argument. 
     *
     * @property timing.timestamp
     * @type number
     * @default 0
     */ /**
     * A `Number` that represents the total execution time elapsed during the last `Engine.update` in milliseconds.
     * It is updated by timing from the start of the last `Engine.update` call until it ends.
     *
     * This value will also include the total execution time of all event handlers directly or indirectly triggered by the engine update.
     *
     * @property timing.lastElapsed
     * @type number
     * @default 0
     */ /**
     * A `Number` that represents the `delta` value used in the last engine update.
     *
     * @property timing.lastDelta
     * @type number
     * @default 0
     */ /**
     * A `Matter.Detector` instance.
     *
     * @property detector
     * @type detector
     * @default a Matter.Detector instance
     */ /**
     * A `Matter.Grid` instance.
     *
     * @deprecated replaced by `engine.detector`
     * @property grid
     * @type grid
     * @default a Matter.Grid instance
     */ /**
     * Replaced by and now alias for `engine.grid`.
     *
     * @deprecated replaced by `engine.detector`
     * @property broadphase
     * @type grid
     * @default a Matter.Grid instance
     */ /**
     * The root `Matter.Composite` instance that will contain all bodies, constraints and other composites to be simulated by this engine.
     *
     * @property world
     * @type composite
     * @default a Matter.Composite instance
     */ /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */ /**
     * The gravity to apply on all bodies in `engine.world`.
     *
     * @property gravity
     * @type object
     */ /**
     * The gravity x component.
     *
     * @property gravity.x
     * @type object
     * @default 0
     */ /**
     * The gravity y component.
     *
     * @property gravity.y
     * @type object
     * @default 1
     */ /**
     * The gravity scale factor.
     *
     * @property gravity.scale
     * @type object
     * @default 0.001
     */})();/***/},/* 19 */ /***/function(module,exports,__nested_webpack_require_272322__){/**
* The `Matter.Resolver` module contains methods for resolving collision pairs.
*
* @class Resolver
*/var Resolver={};module.exports=Resolver;var Vertices=__nested_webpack_require_272322__(3);var Bounds=__nested_webpack_require_272322__(1);(function(){Resolver._restingThresh=4;Resolver._restingThreshTangent=6;Resolver._positionDampen=0.9;Resolver._positionWarming=0.8;Resolver._frictionNormalMultiplier=5;/**
     * Prepare pairs for position solving.
     * @method preSolvePosition
     * @param {pair[]} pairs
     */Resolver.preSolvePosition=function(pairs){var i,pair,activeCount,pairsLength=pairs.length;// find total contacts on each body
for(i=0;i<pairsLength;i++){pair=pairs[i];if(!pair.isActive)continue;activeCount=pair.activeContacts.length;pair.collision.parentA.totalContacts+=activeCount;pair.collision.parentB.totalContacts+=activeCount;}};/**
     * Find a solution for pair positions.
     * @method solvePosition
     * @param {pair[]} pairs
     * @param {number} timeScale
     */Resolver.solvePosition=function(pairs,timeScale){var i,pair,collision,bodyA,bodyB,normal,contactShare,positionImpulse,positionDampen=Resolver._positionDampen,pairsLength=pairs.length;// find impulses required to resolve penetration
for(i=0;i<pairsLength;i++){pair=pairs[i];if(!pair.isActive||pair.isSensor)continue;collision=pair.collision;bodyA=collision.parentA;bodyB=collision.parentB;normal=collision.normal;// get current separation between body edges involved in collision
pair.separation=normal.x*(bodyB.positionImpulse.x+collision.penetration.x-bodyA.positionImpulse.x)+normal.y*(bodyB.positionImpulse.y+collision.penetration.y-bodyA.positionImpulse.y);}for(i=0;i<pairsLength;i++){pair=pairs[i];if(!pair.isActive||pair.isSensor)continue;collision=pair.collision;bodyA=collision.parentA;bodyB=collision.parentB;normal=collision.normal;positionImpulse=(pair.separation-pair.slop)*timeScale;if(bodyA.isStatic||bodyB.isStatic)positionImpulse*=2;if(!(bodyA.isStatic||bodyA.isSleeping)){contactShare=positionDampen/bodyA.totalContacts;bodyA.positionImpulse.x+=normal.x*positionImpulse*contactShare;bodyA.positionImpulse.y+=normal.y*positionImpulse*contactShare;}if(!(bodyB.isStatic||bodyB.isSleeping)){contactShare=positionDampen/bodyB.totalContacts;bodyB.positionImpulse.x-=normal.x*positionImpulse*contactShare;bodyB.positionImpulse.y-=normal.y*positionImpulse*contactShare;}}};/**
     * Apply position resolution.
     * @method postSolvePosition
     * @param {body[]} bodies
     */Resolver.postSolvePosition=function(bodies){var positionWarming=Resolver._positionWarming,bodiesLength=bodies.length,verticesTranslate=Vertices.translate,boundsUpdate=Bounds.update;for(var i=0;i<bodiesLength;i++){var body=bodies[i],positionImpulse=body.positionImpulse,positionImpulseX=positionImpulse.x,positionImpulseY=positionImpulse.y,velocity=body.velocity;// reset contact count
body.totalContacts=0;if(positionImpulseX!==0||positionImpulseY!==0){// update body geometry
for(var j=0;j<body.parts.length;j++){var part=body.parts[j];verticesTranslate(part.vertices,positionImpulse);boundsUpdate(part.bounds,part.vertices,velocity);part.position.x+=positionImpulseX;part.position.y+=positionImpulseY;}// move the body without changing velocity
body.positionPrev.x+=positionImpulseX;body.positionPrev.y+=positionImpulseY;if(positionImpulseX*velocity.x+positionImpulseY*velocity.y<0){// reset cached impulse if the body has velocity along it
positionImpulse.x=0;positionImpulse.y=0;}else{// warm the next iteration
positionImpulse.x*=positionWarming;positionImpulse.y*=positionWarming;}}}};/**
     * Prepare pairs for velocity solving.
     * @method preSolveVelocity
     * @param {pair[]} pairs
     */Resolver.preSolveVelocity=function(pairs){var pairsLength=pairs.length,i,j;for(i=0;i<pairsLength;i++){var pair=pairs[i];if(!pair.isActive||pair.isSensor)continue;var contacts=pair.activeContacts,contactsLength=contacts.length,collision=pair.collision,bodyA=collision.parentA,bodyB=collision.parentB,normal=collision.normal,tangent=collision.tangent;// resolve each contact
for(j=0;j<contactsLength;j++){var contact=contacts[j],contactVertex=contact.vertex,normalImpulse=contact.normalImpulse,tangentImpulse=contact.tangentImpulse;if(normalImpulse!==0||tangentImpulse!==0){// total impulse from contact
var impulseX=normal.x*normalImpulse+tangent.x*tangentImpulse,impulseY=normal.y*normalImpulse+tangent.y*tangentImpulse;// apply impulse from contact
if(!(bodyA.isStatic||bodyA.isSleeping)){bodyA.positionPrev.x+=impulseX*bodyA.inverseMass;bodyA.positionPrev.y+=impulseY*bodyA.inverseMass;bodyA.anglePrev+=bodyA.inverseInertia*((contactVertex.x-bodyA.position.x)*impulseY-(contactVertex.y-bodyA.position.y)*impulseX);}if(!(bodyB.isStatic||bodyB.isSleeping)){bodyB.positionPrev.x-=impulseX*bodyB.inverseMass;bodyB.positionPrev.y-=impulseY*bodyB.inverseMass;bodyB.anglePrev-=bodyB.inverseInertia*((contactVertex.x-bodyB.position.x)*impulseY-(contactVertex.y-bodyB.position.y)*impulseX);}}}}};/**
     * Find a solution for pair velocities.
     * @method solveVelocity
     * @param {pair[]} pairs
     * @param {number} timeScale
     */Resolver.solveVelocity=function(pairs,timeScale){var timeScaleSquared=timeScale*timeScale,restingThresh=Resolver._restingThresh*timeScaleSquared,frictionNormalMultiplier=Resolver._frictionNormalMultiplier,restingThreshTangent=Resolver._restingThreshTangent*timeScaleSquared,NumberMaxValue=Number.MAX_VALUE,pairsLength=pairs.length,tangentImpulse,maxFriction,i,j;for(i=0;i<pairsLength;i++){var pair=pairs[i];if(!pair.isActive||pair.isSensor)continue;var collision=pair.collision,bodyA=collision.parentA,bodyB=collision.parentB,bodyAVelocity=bodyA.velocity,bodyBVelocity=bodyB.velocity,normalX=collision.normal.x,normalY=collision.normal.y,tangentX=collision.tangent.x,tangentY=collision.tangent.y,contacts=pair.activeContacts,contactsLength=contacts.length,contactShare=1/contactsLength,inverseMassTotal=bodyA.inverseMass+bodyB.inverseMass,friction=pair.friction*pair.frictionStatic*frictionNormalMultiplier*timeScaleSquared;// update body velocities
bodyAVelocity.x=bodyA.position.x-bodyA.positionPrev.x;bodyAVelocity.y=bodyA.position.y-bodyA.positionPrev.y;bodyBVelocity.x=bodyB.position.x-bodyB.positionPrev.x;bodyBVelocity.y=bodyB.position.y-bodyB.positionPrev.y;bodyA.angularVelocity=bodyA.angle-bodyA.anglePrev;bodyB.angularVelocity=bodyB.angle-bodyB.anglePrev;// resolve each contact
for(j=0;j<contactsLength;j++){var contact=contacts[j],contactVertex=contact.vertex;var offsetAX=contactVertex.x-bodyA.position.x,offsetAY=contactVertex.y-bodyA.position.y,offsetBX=contactVertex.x-bodyB.position.x,offsetBY=contactVertex.y-bodyB.position.y;var velocityPointAX=bodyAVelocity.x-offsetAY*bodyA.angularVelocity,velocityPointAY=bodyAVelocity.y+offsetAX*bodyA.angularVelocity,velocityPointBX=bodyBVelocity.x-offsetBY*bodyB.angularVelocity,velocityPointBY=bodyBVelocity.y+offsetBX*bodyB.angularVelocity;var relativeVelocityX=velocityPointAX-velocityPointBX,relativeVelocityY=velocityPointAY-velocityPointBY;var normalVelocity=normalX*relativeVelocityX+normalY*relativeVelocityY,tangentVelocity=tangentX*relativeVelocityX+tangentY*relativeVelocityY;// coulomb friction
var normalOverlap=pair.separation+normalVelocity;var normalForce=Math.min(normalOverlap,1);normalForce=normalOverlap<0?0:normalForce;var frictionLimit=normalForce*friction;if(tangentVelocity>frictionLimit||-tangentVelocity>frictionLimit){maxFriction=tangentVelocity>0?tangentVelocity:-tangentVelocity;tangentImpulse=pair.friction*(tangentVelocity>0?1:-1)*timeScaleSquared;if(tangentImpulse<-maxFriction){tangentImpulse=-maxFriction;}else if(tangentImpulse>maxFriction){tangentImpulse=maxFriction;}}else{tangentImpulse=tangentVelocity;maxFriction=NumberMaxValue;}// account for mass, inertia and contact offset
var oAcN=offsetAX*normalY-offsetAY*normalX,oBcN=offsetBX*normalY-offsetBY*normalX,share=contactShare/(inverseMassTotal+bodyA.inverseInertia*oAcN*oAcN+bodyB.inverseInertia*oBcN*oBcN);// raw impulses
var normalImpulse=(1+pair.restitution)*normalVelocity*share;tangentImpulse*=share;// handle high velocity and resting collisions separately
if(normalVelocity*normalVelocity>restingThresh&&normalVelocity<0){// high normal velocity so clear cached contact normal impulse
contact.normalImpulse=0;}else{// solve resting collision constraints using Erin Catto's method (GDC08)
// impulse constraint tends to 0
var contactNormalImpulse=contact.normalImpulse;contact.normalImpulse+=normalImpulse;contact.normalImpulse=Math.min(contact.normalImpulse,0);normalImpulse=contact.normalImpulse-contactNormalImpulse;}// handle high velocity and resting collisions separately
if(tangentVelocity*tangentVelocity>restingThreshTangent){// high tangent velocity so clear cached contact tangent impulse
contact.tangentImpulse=0;}else{// solve resting collision constraints using Erin Catto's method (GDC08)
// tangent impulse tends to -tangentSpeed or +tangentSpeed
var contactTangentImpulse=contact.tangentImpulse;contact.tangentImpulse+=tangentImpulse;if(contact.tangentImpulse<-maxFriction)contact.tangentImpulse=-maxFriction;if(contact.tangentImpulse>maxFriction)contact.tangentImpulse=maxFriction;tangentImpulse=contact.tangentImpulse-contactTangentImpulse;}// total impulse from contact
var impulseX=normalX*normalImpulse+tangentX*tangentImpulse,impulseY=normalY*normalImpulse+tangentY*tangentImpulse;// apply impulse from contact
if(!(bodyA.isStatic||bodyA.isSleeping)){bodyA.positionPrev.x+=impulseX*bodyA.inverseMass;bodyA.positionPrev.y+=impulseY*bodyA.inverseMass;bodyA.anglePrev+=(offsetAX*impulseY-offsetAY*impulseX)*bodyA.inverseInertia;}if(!(bodyB.isStatic||bodyB.isSleeping)){bodyB.positionPrev.x-=impulseX*bodyB.inverseMass;bodyB.positionPrev.y-=impulseY*bodyB.inverseMass;bodyB.anglePrev-=(offsetBX*impulseY-offsetBY*impulseX)*bodyB.inverseInertia;}}}};})();/***/},/* 20 */ /***/function(module,exports,__nested_webpack_require_287595__){/**
* The `Matter.Pairs` module contains methods for creating and manipulating collision pair sets.
*
* @class Pairs
*/var Pairs={};module.exports=Pairs;var Pair=__nested_webpack_require_287595__(9);var Common=__nested_webpack_require_287595__(0);(function(){/**
     * Creates a new pairs structure.
     * @method create
     * @param {object} options
     * @return {pairs} A new pairs structure
     */Pairs.create=function(options){return Common.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},options);};/**
     * Updates pairs given a list of collisions.
     * @method update
     * @param {object} pairs
     * @param {collision[]} collisions
     * @param {number} timestamp
     */Pairs.update=function(pairs,collisions,timestamp){var pairsList=pairs.list,pairsListLength=pairsList.length,pairsTable=pairs.table,collisionsLength=collisions.length,collisionStart=pairs.collisionStart,collisionEnd=pairs.collisionEnd,collisionActive=pairs.collisionActive,collision,pairIndex,pair,i;// clear collision state arrays, but maintain old reference
collisionStart.length=0;collisionEnd.length=0;collisionActive.length=0;for(i=0;i<pairsListLength;i++){pairsList[i].confirmedActive=false;}for(i=0;i<collisionsLength;i++){collision=collisions[i];pair=collision.pair;if(pair){// pair already exists (but may or may not be active)
if(pair.isActive){// pair exists and is active
collisionActive.push(pair);}else{// pair exists but was inactive, so a collision has just started again
collisionStart.push(pair);}// update the pair
Pair.update(pair,collision,timestamp);pair.confirmedActive=true;}else{// pair did not exist, create a new pair
pair=Pair.create(collision,timestamp);pairsTable[pair.id]=pair;// push the new pair
collisionStart.push(pair);pairsList.push(pair);}}// find pairs that are no longer active
var removePairIndex=[];pairsListLength=pairsList.length;for(i=0;i<pairsListLength;i++){pair=pairsList[i];if(!pair.confirmedActive){Pair.setActive(pair,false,timestamp);collisionEnd.push(pair);if(!pair.collision.bodyA.isSleeping&&!pair.collision.bodyB.isSleeping){removePairIndex.push(i);}}}// remove inactive pairs
for(i=0;i<removePairIndex.length;i++){pairIndex=removePairIndex[i]-i;pair=pairsList[pairIndex];pairsList.splice(pairIndex,1);delete pairsTable[pair.id];}};/**
     * Clears the given pairs structure.
     * @method clear
     * @param {pairs} pairs
     * @return {pairs} pairs
     */Pairs.clear=function(pairs){pairs.table={};pairs.list.length=0;pairs.collisionStart.length=0;pairs.collisionActive.length=0;pairs.collisionEnd.length=0;return pairs;};})();/***/},/* 21 */ /***/function(module,exports,__nested_webpack_require_291448__){var Matter=module.exports=__nested_webpack_require_291448__(22);Matter.Axes=__nested_webpack_require_291448__(11);Matter.Bodies=__nested_webpack_require_291448__(12);Matter.Body=__nested_webpack_require_291448__(6);Matter.Bounds=__nested_webpack_require_291448__(1);Matter.Collision=__nested_webpack_require_291448__(8);Matter.Common=__nested_webpack_require_291448__(0);Matter.Composite=__nested_webpack_require_291448__(5);Matter.Composites=__nested_webpack_require_291448__(23);Matter.Constraint=__nested_webpack_require_291448__(10);Matter.Contact=__nested_webpack_require_291448__(17);Matter.Detector=__nested_webpack_require_291448__(14);Matter.Engine=__nested_webpack_require_291448__(18);Matter.Events=__nested_webpack_require_291448__(4);Matter.Grid=__nested_webpack_require_291448__(24);Matter.Mouse=__nested_webpack_require_291448__(13);Matter.MouseConstraint=__nested_webpack_require_291448__(25);Matter.Pair=__nested_webpack_require_291448__(9);Matter.Pairs=__nested_webpack_require_291448__(20);Matter.Plugin=__nested_webpack_require_291448__(15);Matter.Query=__nested_webpack_require_291448__(26);Matter.Render=__nested_webpack_require_291448__(16);Matter.Resolver=__nested_webpack_require_291448__(19);Matter.Runner=__nested_webpack_require_291448__(27);Matter.SAT=__nested_webpack_require_291448__(28);Matter.Sleeping=__nested_webpack_require_291448__(7);Matter.Svg=__nested_webpack_require_291448__(29);Matter.Vector=__nested_webpack_require_291448__(2);Matter.Vertices=__nested_webpack_require_291448__(3);Matter.World=__nested_webpack_require_291448__(30);// temporary back compatibility
Matter.Engine.run=Matter.Runner.run;Matter.Common.deprecated(Matter.Engine,'run','Engine.run ➤ use Matter.Runner.run(engine) instead');/***/},/* 22 */ /***/function(module,exports,__nested_webpack_require_292984__){/**
* The `Matter` module is the top level namespace. It also includes a function for installing plugins on top of the library.
*
* @class Matter
*/var Matter={};module.exports=Matter;var Plugin=__nested_webpack_require_292984__(15);var Common=__nested_webpack_require_292984__(0);(function(){/**
     * The library name.
     * @property name
     * @readOnly
     * @type {String}
     */Matter.name='matter-js';/**
     * The library version.
     * @property version
     * @readOnly
     * @type {String}
     */Matter.version= true?"0.18.0":0;/**
     * A list of plugin dependencies to be installed. These are normally set and installed through `Matter.use`.
     * Alternatively you may set `Matter.uses` manually and install them by calling `Plugin.use(Matter)`.
     * @property uses
     * @type {Array}
     */Matter.uses=[];/**
     * The plugins that have been installed through `Matter.Plugin.install`. Read only.
     * @property used
     * @readOnly
     * @type {Array}
     */Matter.used=[];/**
     * Installs the given plugins on the `Matter` namespace.
     * This is a short-hand for `Plugin.use`, see it for more information.
     * Call this function once at the start of your code, with all of the plugins you wish to install as arguments.
     * Avoid calling this function multiple times unless you intend to manually control installation order.
     * @method use
     * @param ...plugin {Function} The plugin(s) to install on `base` (multi-argument).
     */Matter.use=function(){Plugin.use(Matter,Array.prototype.slice.call(arguments));};/**
     * Chains a function to excute before the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method before
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */Matter.before=function(path,func){path=path.replace(/^Matter./,'');return Common.chainPathBefore(Matter,path,func);};/**
     * Chains a function to excute after the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method after
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */Matter.after=function(path,func){path=path.replace(/^Matter./,'');return Common.chainPathAfter(Matter,path,func);};})();/***/},/* 23 */ /***/function(module,exports,__nested_webpack_require_295892__){/**
* The `Matter.Composites` module contains factory methods for creating composite bodies
* with commonly used configurations (such as stacks and chains).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composites
*/var Composites={};module.exports=Composites;var Composite=__nested_webpack_require_295892__(5);var Constraint=__nested_webpack_require_295892__(10);var Common=__nested_webpack_require_295892__(0);var Body=__nested_webpack_require_295892__(6);var Bodies=__nested_webpack_require_295892__(12);var deprecated=Common.deprecated;(function(){/**
     * Create a new composite containing bodies created in the callback in a grid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method stack
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */Composites.stack=function(xx,yy,columns,rows,columnGap,rowGap,callback){var stack=Composite.create({label:'Stack'}),x=xx,y=yy,lastBody,i=0;for(var row=0;row<rows;row++){var maxHeight=0;for(var column=0;column<columns;column++){var body=callback(x,y,column,row,lastBody,i);if(body){var bodyHeight=body.bounds.max.y-body.bounds.min.y,bodyWidth=body.bounds.max.x-body.bounds.min.x;if(bodyHeight>maxHeight)maxHeight=bodyHeight;Body.translate(body,{x:bodyWidth*0.5,y:bodyHeight*0.5});x=body.bounds.max.x+columnGap;Composite.addBody(stack,body);lastBody=body;i+=1;}else{x+=columnGap;}}y+=maxHeight+rowGap;x=xx;}return stack;};/**
     * Chains all bodies in the given composite together using constraints.
     * @method chain
     * @param {composite} composite
     * @param {number} xOffsetA
     * @param {number} yOffsetA
     * @param {number} xOffsetB
     * @param {number} yOffsetB
     * @param {object} options
     * @return {composite} A new composite containing objects chained together with constraints
     */Composites.chain=function(composite,xOffsetA,yOffsetA,xOffsetB,yOffsetB,options){var bodies=composite.bodies;for(var i=1;i<bodies.length;i++){var bodyA=bodies[i-1],bodyB=bodies[i],bodyAHeight=bodyA.bounds.max.y-bodyA.bounds.min.y,bodyAWidth=bodyA.bounds.max.x-bodyA.bounds.min.x,bodyBHeight=bodyB.bounds.max.y-bodyB.bounds.min.y,bodyBWidth=bodyB.bounds.max.x-bodyB.bounds.min.x;var defaults={bodyA:bodyA,pointA:{x:bodyAWidth*xOffsetA,y:bodyAHeight*yOffsetA},bodyB:bodyB,pointB:{x:bodyBWidth*xOffsetB,y:bodyBHeight*yOffsetB}};var constraint=Common.extend(defaults,options);Composite.addConstraint(composite,Constraint.create(constraint));}composite.label+=' Chain';return composite;};/**
     * Connects bodies in the composite with constraints in a grid pattern, with optional cross braces.
     * @method mesh
     * @param {composite} composite
     * @param {number} columns
     * @param {number} rows
     * @param {boolean} crossBrace
     * @param {object} options
     * @return {composite} The composite containing objects meshed together with constraints
     */Composites.mesh=function(composite,columns,rows,crossBrace,options){var bodies=composite.bodies,row,col,bodyA,bodyB,bodyC;for(row=0;row<rows;row++){for(col=1;col<columns;col++){bodyA=bodies[col-1+row*columns];bodyB=bodies[col+row*columns];Composite.addConstraint(composite,Constraint.create(Common.extend({bodyA:bodyA,bodyB:bodyB},options)));}if(row>0){for(col=0;col<columns;col++){bodyA=bodies[col+(row-1)*columns];bodyB=bodies[col+row*columns];Composite.addConstraint(composite,Constraint.create(Common.extend({bodyA:bodyA,bodyB:bodyB},options)));if(crossBrace&&col>0){bodyC=bodies[col-1+(row-1)*columns];Composite.addConstraint(composite,Constraint.create(Common.extend({bodyA:bodyC,bodyB:bodyB},options)));}if(crossBrace&&col<columns-1){bodyC=bodies[col+1+(row-1)*columns];Composite.addConstraint(composite,Constraint.create(Common.extend({bodyA:bodyC,bodyB:bodyB},options)));}}}}composite.label+=' Mesh';return composite;};/**
     * Create a new composite containing bodies created in the callback in a pyramid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method pyramid
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */Composites.pyramid=function(xx,yy,columns,rows,columnGap,rowGap,callback){return Composites.stack(xx,yy,columns,rows,columnGap,rowGap,function(x,y,column,row,lastBody,i){var actualRows=Math.min(rows,Math.ceil(columns/2)),lastBodyWidth=lastBody?lastBody.bounds.max.x-lastBody.bounds.min.x:0;if(row>actualRows)return;// reverse row order
row=actualRows-row;var start=row,end=columns-1-row;if(column<start||column>end)return;// retroactively fix the first body's position, since width was unknown
if(i===1){Body.translate(lastBody,{x:(column+(columns%2===1?1:-1))*lastBodyWidth,y:0});}var xOffset=lastBody?column*lastBodyWidth:0;return callback(xx+xOffset+column*columnGap,y,column,row,lastBody,i);});};/**
     * This has now moved to the [newtonsCradle example](https://github.com/liabru/matter-js/blob/master/examples/newtonsCradle.js), follow that instead as this function is deprecated here.
     * @deprecated moved to newtonsCradle example
     * @method newtonsCradle
     * @param {number} xx
     * @param {number} yy
     * @param {number} number
     * @param {number} size
     * @param {number} length
     * @return {composite} A new composite newtonsCradle body
     */Composites.newtonsCradle=function(xx,yy,number,size,length){var newtonsCradle=Composite.create({label:'Newtons Cradle'});for(var i=0;i<number;i++){var separation=1.9,circle=Bodies.circle(xx+i*(size*separation),yy+length,size,{inertia:Infinity,restitution:1,friction:0,frictionAir:0.0001,slop:1}),constraint=Constraint.create({pointA:{x:xx+i*(size*separation),y:yy},bodyB:circle});Composite.addBody(newtonsCradle,circle);Composite.addConstraint(newtonsCradle,constraint);}return newtonsCradle;};deprecated(Composites,'newtonsCradle','Composites.newtonsCradle ➤ moved to newtonsCradle example');/**
     * This has now moved to the [car example](https://github.com/liabru/matter-js/blob/master/examples/car.js), follow that instead as this function is deprecated here.
     * @deprecated moved to car example
     * @method car
     * @param {number} xx
     * @param {number} yy
     * @param {number} width
     * @param {number} height
     * @param {number} wheelSize
     * @return {composite} A new composite car body
     */Composites.car=function(xx,yy,width,height,wheelSize){var group=Body.nextGroup(true),wheelBase=20,wheelAOffset=-width*0.5+wheelBase,wheelBOffset=width*0.5-wheelBase,wheelYOffset=0;var car=Composite.create({label:'Car'}),body=Bodies.rectangle(xx,yy,width,height,{collisionFilter:{group:group},chamfer:{radius:height*0.5},density:0.0002});var wheelA=Bodies.circle(xx+wheelAOffset,yy+wheelYOffset,wheelSize,{collisionFilter:{group:group},friction:0.8});var wheelB=Bodies.circle(xx+wheelBOffset,yy+wheelYOffset,wheelSize,{collisionFilter:{group:group},friction:0.8});var axelA=Constraint.create({bodyB:body,pointB:{x:wheelAOffset,y:wheelYOffset},bodyA:wheelA,stiffness:1,length:0});var axelB=Constraint.create({bodyB:body,pointB:{x:wheelBOffset,y:wheelYOffset},bodyA:wheelB,stiffness:1,length:0});Composite.addBody(car,body);Composite.addBody(car,wheelA);Composite.addBody(car,wheelB);Composite.addConstraint(car,axelA);Composite.addConstraint(car,axelB);return car;};deprecated(Composites,'car','Composites.car ➤ moved to car example');/**
     * This has now moved to the [softBody example](https://github.com/liabru/matter-js/blob/master/examples/softBody.js)
     * and the [cloth example](https://github.com/liabru/matter-js/blob/master/examples/cloth.js), follow those instead as this function is deprecated here.
     * @deprecated moved to softBody and cloth examples
     * @method softBody
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {boolean} crossBrace
     * @param {number} particleRadius
     * @param {} particleOptions
     * @param {} constraintOptions
     * @return {composite} A new composite softBody
     */Composites.softBody=function(xx,yy,columns,rows,columnGap,rowGap,crossBrace,particleRadius,particleOptions,constraintOptions){particleOptions=Common.extend({inertia:Infinity},particleOptions);constraintOptions=Common.extend({stiffness:0.2,render:{type:'line',anchors:false}},constraintOptions);var softBody=Composites.stack(xx,yy,columns,rows,columnGap,rowGap,function(x,y){return Bodies.circle(x,y,particleRadius,particleOptions);});Composites.mesh(softBody,columns,rows,crossBrace,constraintOptions);softBody.label='Soft Body';return softBody;};deprecated(Composites,'softBody','Composites.softBody ➤ moved to softBody and cloth examples');})();/***/},/* 24 */ /***/function(module,exports,__nested_webpack_require_308502__){/**
* This module has now been replaced by `Matter.Detector`.
*
* All usage should be migrated to `Matter.Detector` or another alternative.
* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
*
* The `Matter.Grid` module contains methods for creating and manipulating collision broadphase grid structures.
*
* @class Grid
* @deprecated
*/var Grid={};module.exports=Grid;var Pair=__nested_webpack_require_308502__(9);var Common=__nested_webpack_require_308502__(0);var deprecated=Common.deprecated;(function(){/**
     * Creates a new grid.
     * @deprecated replaced by Matter.Detector
     * @method create
     * @param {} options
     * @return {grid} A new grid
     */Grid.create=function(options){var defaults={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return Common.extend(defaults,options);};/**
     * The width of a single grid bucket.
     *
     * @property bucketWidth
     * @type number
     * @default 48
     */ /**
     * The height of a single grid bucket.
     *
     * @property bucketHeight
     * @type number
     * @default 48
     */ /**
     * Updates the grid.
     * @deprecated replaced by Matter.Detector
     * @method update
     * @param {grid} grid
     * @param {body[]} bodies
     * @param {engine} engine
     * @param {boolean} forceUpdate
     */Grid.update=function(grid,bodies,engine,forceUpdate){var i,col,row,world=engine.world,buckets=grid.buckets,bucket,bucketId,gridChanged=false;for(i=0;i<bodies.length;i++){var body=bodies[i];if(body.isSleeping&&!forceUpdate)continue;// temporary back compatibility bounds check
if(world.bounds&&(body.bounds.max.x<world.bounds.min.x||body.bounds.min.x>world.bounds.max.x||body.bounds.max.y<world.bounds.min.y||body.bounds.min.y>world.bounds.max.y))continue;var newRegion=Grid._getRegion(grid,body);// if the body has changed grid region
if(!body.region||newRegion.id!==body.region.id||forceUpdate){if(!body.region||forceUpdate)body.region=newRegion;var union=Grid._regionUnion(newRegion,body.region);// update grid buckets affected by region change
// iterate over the union of both regions
for(col=union.startCol;col<=union.endCol;col++){for(row=union.startRow;row<=union.endRow;row++){bucketId=Grid._getBucketId(col,row);bucket=buckets[bucketId];var isInsideNewRegion=col>=newRegion.startCol&&col<=newRegion.endCol&&row>=newRegion.startRow&&row<=newRegion.endRow;var isInsideOldRegion=col>=body.region.startCol&&col<=body.region.endCol&&row>=body.region.startRow&&row<=body.region.endRow;// remove from old region buckets
if(!isInsideNewRegion&&isInsideOldRegion){if(isInsideOldRegion){if(bucket)Grid._bucketRemoveBody(grid,bucket,body);}}// add to new region buckets
if(body.region===newRegion||isInsideNewRegion&&!isInsideOldRegion||forceUpdate){if(!bucket)bucket=Grid._createBucket(buckets,bucketId);Grid._bucketAddBody(grid,bucket,body);}}}// set the new region
body.region=newRegion;// flag changes so we can update pairs
gridChanged=true;}}// update pairs list only if pairs changed (i.e. a body changed region)
if(gridChanged)grid.pairsList=Grid._createActivePairsList(grid);};deprecated(Grid,'update','Grid.update ➤ replaced by Matter.Detector');/**
     * Clears the grid.
     * @deprecated replaced by Matter.Detector
     * @method clear
     * @param {grid} grid
     */Grid.clear=function(grid){grid.buckets={};grid.pairs={};grid.pairsList=[];};deprecated(Grid,'clear','Grid.clear ➤ replaced by Matter.Detector');/**
     * Finds the union of two regions.
     * @method _regionUnion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} regionA
     * @param {} regionB
     * @return {} region
     */Grid._regionUnion=function(regionA,regionB){var startCol=Math.min(regionA.startCol,regionB.startCol),endCol=Math.max(regionA.endCol,regionB.endCol),startRow=Math.min(regionA.startRow,regionB.startRow),endRow=Math.max(regionA.endRow,regionB.endRow);return Grid._createRegion(startCol,endCol,startRow,endRow);};/**
     * Gets the region a given body falls in for a given grid.
     * @method _getRegion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} body
     * @return {} region
     */Grid._getRegion=function(grid,body){var bounds=body.bounds,startCol=Math.floor(bounds.min.x/grid.bucketWidth),endCol=Math.floor(bounds.max.x/grid.bucketWidth),startRow=Math.floor(bounds.min.y/grid.bucketHeight),endRow=Math.floor(bounds.max.y/grid.bucketHeight);return Grid._createRegion(startCol,endCol,startRow,endRow);};/**
     * Creates a region.
     * @method _createRegion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} startCol
     * @param {} endCol
     * @param {} startRow
     * @param {} endRow
     * @return {} region
     */Grid._createRegion=function(startCol,endCol,startRow,endRow){return{id:startCol+','+endCol+','+startRow+','+endRow,startCol:startCol,endCol:endCol,startRow:startRow,endRow:endRow};};/**
     * Gets the bucket id at the given position.
     * @method _getBucketId
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} column
     * @param {} row
     * @return {string} bucket id
     */Grid._getBucketId=function(column,row){return'C'+column+'R'+row;};/**
     * Creates a bucket.
     * @method _createBucket
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} buckets
     * @param {} bucketId
     * @return {} bucket
     */Grid._createBucket=function(buckets,bucketId){var bucket=buckets[bucketId]=[];return bucket;};/**
     * Adds a body to a bucket.
     * @method _bucketAddBody
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */Grid._bucketAddBody=function(grid,bucket,body){var gridPairs=grid.pairs,pairId=Pair.id,bucketLength=bucket.length,i;// add new pairs
for(i=0;i<bucketLength;i++){var bodyB=bucket[i];if(body.id===bodyB.id||body.isStatic&&bodyB.isStatic)continue;// keep track of the number of buckets the pair exists in
// important for Grid.update to work
var id=pairId(body,bodyB),pair=gridPairs[id];if(pair){pair[2]+=1;}else{gridPairs[id]=[body,bodyB,1];}}// add to bodies (after pairs, otherwise pairs with self)
bucket.push(body);};/**
     * Removes a body from a bucket.
     * @method _bucketRemoveBody
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */Grid._bucketRemoveBody=function(grid,bucket,body){var gridPairs=grid.pairs,pairId=Pair.id,i;// remove from bucket
bucket.splice(Common.indexOf(bucket,body),1);var bucketLength=bucket.length;// update pair counts
for(i=0;i<bucketLength;i++){// keep track of the number of buckets the pair exists in
// important for _createActivePairsList to work
var pair=gridPairs[pairId(body,bucket[i])];if(pair)pair[2]-=1;}};/**
     * Generates a list of the active pairs in the grid.
     * @method _createActivePairsList
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @return [] pairs
     */Grid._createActivePairsList=function(grid){var pair,gridPairs=grid.pairs,pairKeys=Common.keys(gridPairs),pairKeysLength=pairKeys.length,pairs=[],k;// iterate over grid.pairs
for(k=0;k<pairKeysLength;k++){pair=gridPairs[pairKeys[k]];// if pair exists in at least one bucket
// it is a pair that needs further collision testing so push it
if(pair[2]>0){pairs.push(pair);}else{delete gridPairs[pairKeys[k]];}}return pairs;};})();/***/},/* 25 */ /***/function(module,exports,__nested_webpack_require_318832__){/**
* The `Matter.MouseConstraint` module contains methods for creating mouse constraints.
* Mouse constraints are used for allowing user interaction, providing the ability to move bodies via the mouse or touch.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class MouseConstraint
*/var MouseConstraint={};module.exports=MouseConstraint;var Vertices=__nested_webpack_require_318832__(3);var Sleeping=__nested_webpack_require_318832__(7);var Mouse=__nested_webpack_require_318832__(13);var Events=__nested_webpack_require_318832__(4);var Detector=__nested_webpack_require_318832__(14);var Constraint=__nested_webpack_require_318832__(10);var Composite=__nested_webpack_require_318832__(5);var Common=__nested_webpack_require_318832__(0);var Bounds=__nested_webpack_require_318832__(1);(function(){/**
     * Creates a new mouse constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {engine} engine
     * @param {} options
     * @return {MouseConstraint} A new MouseConstraint
     */MouseConstraint.create=function(engine,options){var mouse=(engine?engine.mouse:null)||(options?options.mouse:null);if(!mouse){if(engine&&engine.render&&engine.render.canvas){mouse=Mouse.create(engine.render.canvas);}else if(options&&options.element){mouse=Mouse.create(options.element);}else{mouse=Mouse.create();Common.warn('MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected');}}var constraint=Constraint.create({label:'Mouse Constraint',pointA:mouse.position,pointB:{x:0,y:0},length:0.01,stiffness:0.1,angularStiffness:1,render:{strokeStyle:'#90EE90',lineWidth:3}});var defaults={type:'mouseConstraint',mouse:mouse,element:null,body:null,constraint:constraint,collisionFilter:{category:0x0001,mask:0xFFFFFFFF,group:0}};var mouseConstraint=Common.extend(defaults,options);Events.on(engine,'beforeUpdate',function(){var allBodies=Composite.allBodies(engine.world);MouseConstraint.update(mouseConstraint,allBodies);MouseConstraint._triggerEvents(mouseConstraint);});return mouseConstraint;};/**
     * Updates the given mouse constraint.
     * @private
     * @method update
     * @param {MouseConstraint} mouseConstraint
     * @param {body[]} bodies
     */MouseConstraint.update=function(mouseConstraint,bodies){var mouse=mouseConstraint.mouse,constraint=mouseConstraint.constraint,body=mouseConstraint.body;if(mouse.button===0){if(!constraint.bodyB){for(var i=0;i<bodies.length;i++){body=bodies[i];if(Bounds.contains(body.bounds,mouse.position)&&Detector.canCollide(body.collisionFilter,mouseConstraint.collisionFilter)){for(var j=body.parts.length>1?1:0;j<body.parts.length;j++){var part=body.parts[j];if(Vertices.contains(part.vertices,mouse.position)){constraint.pointA=mouse.position;constraint.bodyB=mouseConstraint.body=body;constraint.pointB={x:mouse.position.x-body.position.x,y:mouse.position.y-body.position.y};constraint.angleB=body.angle;Sleeping.set(body,false);Events.trigger(mouseConstraint,'startdrag',{mouse:mouse,body:body});break;}}}}}else{Sleeping.set(constraint.bodyB,false);constraint.pointA=mouse.position;}}else{constraint.bodyB=mouseConstraint.body=null;constraint.pointB=null;if(body)Events.trigger(mouseConstraint,'enddrag',{mouse:mouse,body:body});}};/**
     * Triggers mouse constraint events.
     * @method _triggerEvents
     * @private
     * @param {mouse} mouseConstraint
     */MouseConstraint._triggerEvents=function(mouseConstraint){var mouse=mouseConstraint.mouse,mouseEvents=mouse.sourceEvents;if(mouseEvents.mousemove)Events.trigger(mouseConstraint,'mousemove',{mouse:mouse});if(mouseEvents.mousedown)Events.trigger(mouseConstraint,'mousedown',{mouse:mouse});if(mouseEvents.mouseup)Events.trigger(mouseConstraint,'mouseup',{mouse:mouse});// reset the mouse state ready for the next step
Mouse.clearSourceEvents(mouse);};/*
    *
    *  Events Documentation
    *
    */ /**
    * Fired when the mouse has moved (or a touch moves) during the last step
    *
    * @event mousemove
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when the mouse is down (or a touch has started) during the last step
    *
    * @event mousedown
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when the mouse is up (or a touch has ended) during the last step
    *
    * @event mouseup
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when the user starts dragging a body
    *
    * @event startdrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when the user ends dragging a body
    *
    * @event enddrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body that has stopped being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /*
    *
    *  Properties Documentation
    *
    */ /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */ /**
     * The `Mouse` instance in use. If not supplied in `MouseConstraint.create`, one will be created.
     *
     * @property mouse
     * @type mouse
     * @default mouse
     */ /**
     * The `Body` that is currently being moved by the user, or `null` if no body.
     *
     * @property body
     * @type body
     * @default null
     */ /**
     * The `Constraint` object that is used to move the body during interaction.
     *
     * @property constraint
     * @type constraint
     */ /**
     * An `Object` that specifies the collision filter properties.
     * The collision filter allows the user to define which types of body this mouse constraint can interact with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter
     * @type object
     */})();/***/},/* 26 */ /***/function(module,exports,__nested_webpack_require_327327__){/**
* The `Matter.Query` module contains methods for performing collision queries.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Query
*/var Query={};module.exports=Query;var Vector=__nested_webpack_require_327327__(2);var Collision=__nested_webpack_require_327327__(8);var Bounds=__nested_webpack_require_327327__(1);var Bodies=__nested_webpack_require_327327__(12);var Vertices=__nested_webpack_require_327327__(3);(function(){/**
     * Returns a list of collisions between `body` and `bodies`.
     * @method collides
     * @param {body} body
     * @param {body[]} bodies
     * @return {collision[]} Collisions
     */Query.collides=function(body,bodies){var collisions=[],bodiesLength=bodies.length,bounds=body.bounds,collides=Collision.collides,overlaps=Bounds.overlaps;for(var i=0;i<bodiesLength;i++){var bodyA=bodies[i],partsALength=bodyA.parts.length,partsAStart=partsALength===1?0:1;if(overlaps(bodyA.bounds,bounds)){for(var j=partsAStart;j<partsALength;j++){var part=bodyA.parts[j];if(overlaps(part.bounds,bounds)){var collision=collides(part,body);if(collision){collisions.push(collision);break;}}}}}return collisions;};/**
     * Casts a ray segment against a set of bodies and returns all collisions, ray width is optional. Intersection points are not provided.
     * @method ray
     * @param {body[]} bodies
     * @param {vector} startPoint
     * @param {vector} endPoint
     * @param {number} [rayWidth]
     * @return {collision[]} Collisions
     */Query.ray=function(bodies,startPoint,endPoint,rayWidth){rayWidth=rayWidth||1e-100;var rayAngle=Vector.angle(startPoint,endPoint),rayLength=Vector.magnitude(Vector.sub(startPoint,endPoint)),rayX=(endPoint.x+startPoint.x)*0.5,rayY=(endPoint.y+startPoint.y)*0.5,ray=Bodies.rectangle(rayX,rayY,rayLength,rayWidth,{angle:rayAngle}),collisions=Query.collides(ray,bodies);for(var i=0;i<collisions.length;i+=1){var collision=collisions[i];collision.body=collision.bodyB=collision.bodyA;}return collisions;};/**
     * Returns all bodies whose bounds are inside (or outside if set) the given set of bounds, from the given set of bodies.
     * @method region
     * @param {body[]} bodies
     * @param {bounds} bounds
     * @param {bool} [outside=false]
     * @return {body[]} The bodies matching the query
     */Query.region=function(bodies,bounds,outside){var result=[];for(var i=0;i<bodies.length;i++){var body=bodies[i],overlaps=Bounds.overlaps(body.bounds,bounds);if(overlaps&&!outside||!overlaps&&outside)result.push(body);}return result;};/**
     * Returns all bodies whose vertices contain the given point, from the given set of bodies.
     * @method point
     * @param {body[]} bodies
     * @param {vector} point
     * @return {body[]} The bodies matching the query
     */Query.point=function(bodies,point){var result=[];for(var i=0;i<bodies.length;i++){var body=bodies[i];if(Bounds.contains(body.bounds,point)){for(var j=body.parts.length===1?0:1;j<body.parts.length;j++){var part=body.parts[j];if(Bounds.contains(part.bounds,point)&&Vertices.contains(part.vertices,point)){result.push(body);break;}}}}return result;};})();/***/},/* 27 */ /***/function(module,exports,__nested_webpack_require_331702__){/**
* The `Matter.Runner` module is an optional utility which provides a game loop, 
* that handles continuously updating a `Matter.Engine` for you within a browser.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* If you are using your own game loop instead, then you do not need the `Matter.Runner` module.
* Instead just call `Engine.update(engine, delta)` in your own loop.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Runner
*/var Runner={};module.exports=Runner;var Events=__nested_webpack_require_331702__(4);var Engine=__nested_webpack_require_331702__(18);var Common=__nested_webpack_require_331702__(0);(function(){var _requestAnimationFrame,_cancelAnimationFrame;if(typeof window!=='undefined'){_requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame;_cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame;}if(!_requestAnimationFrame){var _frameTimeout;_requestAnimationFrame=function _requestAnimationFrame(callback){_frameTimeout=setTimeout(function(){callback(Common.now());},1000/60);};_cancelAnimationFrame=function _cancelAnimationFrame(){clearTimeout(_frameTimeout);};}/**
     * Creates a new Runner. The options parameter is an object that specifies any properties you wish to override the defaults.
     * @method create
     * @param {} options
     */Runner.create=function(options){var defaults={fps:60,correction:1,deltaSampleSize:60,counterTimestamp:0,frameCounter:0,deltaHistory:[],timePrev:null,timeScalePrev:1,frameRequestId:null,isFixed:false,enabled:true};var runner=Common.extend(defaults,options);runner.delta=runner.delta||1000/runner.fps;runner.deltaMin=runner.deltaMin||1000/runner.fps;runner.deltaMax=runner.deltaMax||1000/(runner.fps*0.5);runner.fps=1000/runner.delta;return runner;};/**
     * Continuously ticks a `Matter.Engine` by calling `Runner.tick` on the `requestAnimationFrame` event.
     * @method run
     * @param {engine} engine
     */Runner.run=function(runner,engine){// create runner if engine is first argument
if(typeof runner.positionIterations!=='undefined'){engine=runner;runner=Runner.create();}(function render(time){runner.frameRequestId=_requestAnimationFrame(render);if(time&&runner.enabled){Runner.tick(runner,engine,time);}})();return runner;};/**
     * A game loop utility that updates the engine and renderer by one step (a 'tick').
     * Features delta smoothing, time correction and fixed or dynamic timing.
     * Consider just `Engine.update(engine, delta)` if you're using your own loop.
     * @method tick
     * @param {runner} runner
     * @param {engine} engine
     * @param {number} time
     */Runner.tick=function(runner,engine,time){var timing=engine.timing,correction=1,delta;// create an event object
var event={timestamp:timing.timestamp};Events.trigger(runner,'beforeTick',event);if(runner.isFixed){// fixed timestep
delta=runner.delta;}else{// dynamic timestep based on wall clock between calls
delta=time-runner.timePrev||runner.delta;runner.timePrev=time;// optimistically filter delta over a few frames, to improve stability
runner.deltaHistory.push(delta);runner.deltaHistory=runner.deltaHistory.slice(-runner.deltaSampleSize);delta=Math.min.apply(null,runner.deltaHistory);// limit delta
delta=delta<runner.deltaMin?runner.deltaMin:delta;delta=delta>runner.deltaMax?runner.deltaMax:delta;// correction for delta
correction=delta/runner.delta;// update engine timing object
runner.delta=delta;}// time correction for time scaling
if(runner.timeScalePrev!==0)correction*=timing.timeScale/runner.timeScalePrev;if(timing.timeScale===0)correction=0;runner.timeScalePrev=timing.timeScale;runner.correction=correction;// fps counter
runner.frameCounter+=1;if(time-runner.counterTimestamp>=1000){runner.fps=runner.frameCounter*((time-runner.counterTimestamp)/1000);runner.counterTimestamp=time;runner.frameCounter=0;}Events.trigger(runner,'tick',event);// update
Events.trigger(runner,'beforeUpdate',event);Engine.update(engine,delta,correction);Events.trigger(runner,'afterUpdate',event);Events.trigger(runner,'afterTick',event);};/**
     * Ends execution of `Runner.run` on the given `runner`, by canceling the animation frame request event loop.
     * If you wish to only temporarily pause the engine, see `engine.enabled` instead.
     * @method stop
     * @param {runner} runner
     */Runner.stop=function(runner){_cancelAnimationFrame(runner.frameRequestId);};/**
     * Alias for `Runner.run`.
     * @method start
     * @param {runner} runner
     * @param {engine} engine
     */Runner.start=function(runner,engine){Runner.run(runner,engine);};/*
    *
    *  Events Documentation
    *
    */ /**
    * Fired at the start of a tick, before any updates to the engine or timing
    *
    * @event beforeTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired after engine timing updated, but just before update
    *
    * @event tick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired at the end of a tick, after engine update and after rendering
    *
    * @event afterTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired before update
    *
    * @event beforeUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired after update
    *
    * @event afterUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /*
    *
    *  Properties Documentation
    *
    */ /**
     * A flag that specifies whether the runner is running or not.
     *
     * @property enabled
     * @type boolean
     * @default true
     */ /**
     * A `Boolean` that specifies if the runner should use a fixed timestep (otherwise it is variable).
     * If timing is fixed, then the apparent simulation speed will change depending on the frame rate (but behaviour will be deterministic).
     * If the timing is variable, then the apparent simulation speed will be constant (approximately, but at the cost of determininism).
     *
     * @property isFixed
     * @type boolean
     * @default false
     */ /**
     * A `Number` that specifies the time step between updates in milliseconds.
     * If `engine.timing.isFixed` is set to `true`, then `delta` is fixed.
     * If it is `false`, then `delta` can dynamically change to maintain the correct apparent simulation speed.
     *
     * @property delta
     * @type number
     * @default 1000 / 60
     */})();/***/},/* 28 */ /***/function(module,exports,__nested_webpack_require_340745__){/**
* This module has now been replaced by `Matter.Collision`.
*
* All usage should be migrated to `Matter.Collision`.
* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
*
* The `Matter.SAT` module contains methods for detecting collisions using the Separating Axis Theorem.
*
* @class SAT
* @deprecated
*/var SAT={};module.exports=SAT;var Collision=__nested_webpack_require_340745__(8);var Common=__nested_webpack_require_340745__(0);var deprecated=Common.deprecated;(function(){/**
     * Detect collision between two bodies using the Separating Axis Theorem.
     * @deprecated replaced by Collision.collides
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {collision} collision
     */SAT.collides=function(bodyA,bodyB){return Collision.collides(bodyA,bodyB);};deprecated(SAT,'collides','SAT.collides ➤ replaced by Collision.collides');})();/***/},/* 29 */ /***/function(module,exports,__nested_webpack_require_341815__){/**
* The `Matter.Svg` module contains methods for converting SVG images into an array of vector points.
*
* To use this module you also need the SVGPathSeg polyfill: https://github.com/progers/pathseg
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Svg
*/var Svg={};module.exports=Svg;var Bounds=__nested_webpack_require_341815__(1);var Common=__nested_webpack_require_341815__(0);(function(){/**
     * Converts an SVG path into an array of vector points.
     * If the input path forms a concave shape, you must decompose the result into convex parts before use.
     * See `Bodies.fromVertices` which provides support for this.
     * Note that this function is not guaranteed to support complex paths (such as those with holes).
     * You must load the `pathseg.js` polyfill on newer browsers.
     * @method pathToVertices
     * @param {SVGPathElement} path
     * @param {Number} [sampleLength=15]
     * @return {Vector[]} points
     */Svg.pathToVertices=function(path,sampleLength){if(typeof window!=='undefined'&&!('SVGPathSeg'in window)){Common.warn('Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.');}// https://github.com/wout/svg.topoly.js/blob/master/svg.topoly.js
var i,il,total,point,segment,segments,segmentsQueue,lastSegment,lastPoint,segmentIndex,points=[],lx,ly,length=0,x=0,y=0;sampleLength=sampleLength||15;var addPoint=function addPoint(px,py,pathSegType){// all odd-numbered path types are relative except PATHSEG_CLOSEPATH (1)
var isRelative=pathSegType%2===1&&pathSegType>1;// when the last point doesn't equal the current point add the current point
if(!lastPoint||px!=lastPoint.x||py!=lastPoint.y){if(lastPoint&&isRelative){lx=lastPoint.x;ly=lastPoint.y;}else{lx=0;ly=0;}var point={x:lx+px,y:ly+py};// set last point
if(isRelative||!lastPoint){lastPoint=point;}points.push(point);x=lx+px;y=ly+py;}};var addSegmentPoint=function addSegmentPoint(segment){var segType=segment.pathSegTypeAsLetter.toUpperCase();// skip path ends
if(segType==='Z')return;// map segment to x and y
switch(segType){case'M':case'L':case'T':case'C':case'S':case'Q':x=segment.x;y=segment.y;break;case'H':x=segment.x;break;case'V':y=segment.y;break;}addPoint(x,y,segment.pathSegType);};// ensure path is absolute
Svg._svgPathToAbsolute(path);// get total length
total=path.getTotalLength();// queue segments
segments=[];for(i=0;i<path.pathSegList.numberOfItems;i+=1){segments.push(path.pathSegList.getItem(i));}segmentsQueue=segments.concat();// sample through path
while(length<total){// get segment at position
segmentIndex=path.getPathSegAtLength(length);segment=segments[segmentIndex];// new segment
if(segment!=lastSegment){while(segmentsQueue.length&&segmentsQueue[0]!=segment){addSegmentPoint(segmentsQueue.shift());}lastSegment=segment;}// add points in between when curving
// TODO: adaptive sampling
switch(segment.pathSegTypeAsLetter.toUpperCase()){case'C':case'T':case'S':case'Q':case'A':point=path.getPointAtLength(length);addPoint(point.x,point.y,0);break;}// increment by sample value
length+=sampleLength;}// add remaining segments not passed by sampling
for(i=0,il=segmentsQueue.length;i<il;++i){addSegmentPoint(segmentsQueue[i]);}return points;};Svg._svgPathToAbsolute=function(path){// http://phrogz.net/convert-svg-path-to-all-absolute-commands
// Copyright (c) Gavin Kistner
// http://phrogz.net/js/_ReuseLicense.txt
// Modifications: tidy formatting and naming
var x0,y0,x1,y1,x2,y2,segs=path.pathSegList,x=0,y=0,len=segs.numberOfItems;for(var i=0;i<len;++i){var seg=segs.getItem(i),segType=seg.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(segType)){if('x'in seg)x=seg.x;if('y'in seg)y=seg.y;}else{if('x1'in seg)x1=x+seg.x1;if('x2'in seg)x2=x+seg.x2;if('y1'in seg)y1=y+seg.y1;if('y2'in seg)y2=y+seg.y2;if('x'in seg)x+=seg.x;if('y'in seg)y+=seg.y;switch(segType){case'm':segs.replaceItem(path.createSVGPathSegMovetoAbs(x,y),i);break;case'l':segs.replaceItem(path.createSVGPathSegLinetoAbs(x,y),i);break;case'h':segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x),i);break;case'v':segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y),i);break;case'c':segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x,y,x1,y1,x2,y2),i);break;case's':segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x,y,x2,y2),i);break;case'q':segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x,y,x1,y1),i);break;case't':segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x,y),i);break;case'a':segs.replaceItem(path.createSVGPathSegArcAbs(x,y,seg.r1,seg.r2,seg.angle,seg.largeArcFlag,seg.sweepFlag),i);break;case'z':case'Z':x=x0;y=y0;break;}}if(segType=='M'||segType=='m'){x0=x;y0=y;}}};})();/***/},/* 30 */ /***/function(module,exports,__nested_webpack_require_349276__){/**
* This module has now been replaced by `Matter.Composite`.
*
* All usage should be migrated to the equivalent functions found on `Matter.Composite`.
* For example `World.add(world, body)` now becomes `Composite.add(world, body)`.
*
* The property `world.gravity` has been moved to `engine.gravity`.
*
* For back-compatibility purposes this module will remain as a direct alias to `Matter.Composite` in the short term during migration.
* Eventually this alias module will be marked as deprecated and then later removed in a future release.
*
* @class World
*/var World={};module.exports=World;var Composite=__nested_webpack_require_349276__(5);var Common=__nested_webpack_require_349276__(0);(function(){/**
     * See above, aliases for back compatibility only
     */World.create=Composite.create;World.add=Composite.add;World.remove=Composite.remove;World.clear=Composite.clear;World.addComposite=Composite.addComposite;World.addBody=Composite.addBody;World.addConstraint=Composite.addConstraint;})();/***/}/******/]));});/***/},/***/"./node_modules/p5/lib/p5.min.js":/*!***************************************!*\
  !*** ./node_modules/p5/lib/p5.min.js ***!
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!********************************************************!*\
  !*** ./public/theme/frontend/plinko/js/main.bundle.js ***!
  \********************************************************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/******/
(function () {
  // webpackBootstrap

  /******/
  "use strict";
  /******/

  var __webpack_modules__ = {
    /***/
    "./src/Loader.ts":
    /*!***********************!*\
      !*** ./src/Loader.ts ***!
      \***********************/

    /***/
    function srcLoaderTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_2213__) {
      __nested_webpack_require_2213__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_2213__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });

      var Loader =
      /** @class */
      function () {
        function Loader(P5) {
          this._images = {
            ball_black: "theme/frontend/plinko/assets/images/ball_black.png",
            ball_green: "theme/frontend/plinko/assets/images/ball_xanh.png",
            ball: "theme/frontend/plinko/assets/images/ball1.png",
            light: "theme/frontend/plinko/assets/images/light.png",
            bg: "theme/frontend/plinko/assets/images/bg.jpg",
            hole: "theme/frontend/plinko/assets/images/hole.png"
          };
          this.P5 = P5;
        }

        Loader.prototype.loadImages = function () {
          for (var _i = 0, _a = Object.entries(this._images); _i < _a.length; _i++) {
            var _b = _a[_i],
                key = _b[0],
                value = _b[1];
            var tmp = this.P5.loadImage(value);
            Loader.images[key] = tmp;
          }
        };

        Loader.getImage = function (key) {
          return Loader.images[key];
        };

        Loader.images = {};
        return Loader;
      }();
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = Loader;
      /***/
    },

    /***/
    "./src/MatterWrapper.ts":
    /*!******************************!*\
      !*** ./src/MatterWrapper.ts ***!
      \******************************/

    /***/
    function srcMatterWrapperTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_3958__) {
      __nested_webpack_require_3958__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_3958__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_3958__(
      /*! matter-js */
      "./node_modules/matter-js/build/matter.js");
      /* harmony import */


      var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_3958__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _components_containers_BagContainer__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_3958__(
      /*! ./components/containers/BagContainer */
      "./src/components/containers/BagContainer.ts");
      /* harmony import */


      var _components_containers_DiscContainer__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_3958__(
      /*! ./components/containers/DiscContainer */
      "./src/components/containers/DiscContainer.ts");
      /* harmony import */


      var _components_containers_PegContainer__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_3958__(
      /*! ./components/containers/PegContainer */
      "./src/components/containers/PegContainer.ts");
      /* harmony import */


      var _components_Hole__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_3958__(
      /*! ./components/Hole */
      "./src/components/Hole.ts");
      /* harmony import */


      var _configs_app__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_3958__(
      /*! ./configs/app */
      "./src/configs/app.ts");
      /* harmony import */


      var _events_CollisionProvider__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_3958__(
      /*! ./events/CollisionProvider */
      "./src/events/CollisionProvider.ts");

      var MatterWrapper =
      /** @class */
      function () {
        function MatterWrapper(P5) {
          this.lastCreateDiscTime = 0;
          this.P5 = P5;
          this.engine = matter_js__WEBPACK_IMPORTED_MODULE_0__.Engine.create();
          this.world = this.engine.world;
        }

        MatterWrapper.prototype.init = function () {
          this.createPegs();
          this.initDiscs(this.pegContainer);
          this.createBags(this.pegContainer);
          this.initEvents();
          this.hole = new _components_Hole__WEBPACK_IMPORTED_MODULE_4__.Hole(this.world, this.P5);
        };

        MatterWrapper.prototype.initEvents = function () {
          var _this = this;

          matter_js__WEBPACK_IMPORTED_MODULE_0__.Events.on(this.engine, "collisionStart", function (e) {
            _this.collisionStart(e);
          }); // Matter.Events.on(this.engine, "collisionEnd", (e)=>{this.collisionEnd(e)});
        };

        MatterWrapper.prototype.createPegs = function () {
          this.pegContainer = new _components_containers_PegContainer__WEBPACK_IMPORTED_MODULE_3__["default"](this.world, this.P5);
          this.pegContainer.makePegs(_configs_app__WEBPACK_IMPORTED_MODULE_5__["default"].APP.WIDTH, _configs_app__WEBPACK_IMPORTED_MODULE_5__["default"].APP.TOPBUFFER, _configs_app__WEBPACK_IMPORTED_MODULE_5__["default"].PEG);
          this.pegContainer.makeWalls();
        };

        MatterWrapper.prototype.initDiscs = function (pegContainer) {
          this.discContainer = new _components_containers_DiscContainer__WEBPACK_IMPORTED_MODULE_2__["default"](this.world, this.P5, pegContainer);
        };

        MatterWrapper.prototype.createBags = function (pegContainer) {
          this.bagContainer = new _components_containers_BagContainer__WEBPACK_IMPORTED_MODULE_1__["default"](this.world, this.P5, pegContainer);
          this.bagContainer.createBags();
        };

        MatterWrapper.prototype.createDisc = function () {
          if (this.checkConditionCreateDisc()) {
            this.lastCreateDiscTime = new Date().getTime();
            _configs_app__WEBPACK_IMPORTED_MODULE_5__["default"].RUNTIME.numberDiscInGame++;
            var path = _configs_app__WEBPACK_IMPORTED_MODULE_5__["default"].TEST.paths[_configs_app__WEBPACK_IMPORTED_MODULE_5__["default"].TEST.count % _configs_app__WEBPACK_IMPORTED_MODULE_5__["default"].TEST.paths.length];
            this.discContainer.createDisc(path);
          }
        };

        MatterWrapper.prototype.checkConditionCreateDisc = function () {
          var isSpace = this.P5.keyIsDown(32);
          var isDemo = _configs_app__WEBPACK_IMPORTED_MODULE_5__["default"].APP.DEMO;
          var isEnoughSpace = _configs_app__WEBPACK_IMPORTED_MODULE_5__["default"].RUNTIME.numberDiscInGame < _configs_app__WEBPACK_IMPORTED_MODULE_5__["default"].TEST.maximumDiscInGame;

          var isEnoughTime = new Date().getTime() - this.lastCreateDiscTime > _configs_app__WEBPACK_IMPORTED_MODULE_5__["default"].TEST.minDistanceTime;

          return isSpace && isDemo && isEnoughSpace && isEnoughTime;
        };

        MatterWrapper.prototype.drawPegs = function () {
          this.pegContainer.show();
        };

        MatterWrapper.prototype.drawDiscs = function () {
          this.discContainer.show();
        };

        MatterWrapper.prototype.drawBag = function () {
          this.bagContainer.show();
        };

        MatterWrapper.prototype.drawHole = function () {
          this.hole.show();
        };

        MatterWrapper.prototype.update = function () {
          matter_js__WEBPACK_IMPORTED_MODULE_0__.Engine.update(this.engine);
        };

        MatterWrapper.prototype.collisionStart = function (event) {
          var pairs = event.pairs;

          for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            var bodyA = pair.bodyA;
            var bodyB = pair.bodyB;

            var collision = _events_CollisionProvider__WEBPACK_IMPORTED_MODULE_6__["default"].getCollisionTarget(this.world, this.discContainer, bodyA, bodyB);

            if (collision) {
              collision.action();
            }
          }
        };

        MatterWrapper.prototype.collisionEnd = function (event) {};

        return MatterWrapper;
      }();
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = MatterWrapper;
      /***/
    },

    /***/
    "./src/P5Wrapper.ts":
    /*!**************************!*\
      !*** ./src/P5Wrapper.ts ***!
      \**************************/

    /***/
    function srcP5WrapperTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_10489__) {
      __nested_webpack_require_10489__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_10489__.d(__webpack_exports__, {
        /* harmony export */
        "P5Wrapper": function P5Wrapper() {
          return (
            /* binding */
            _P5Wrapper
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _configs_app__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_10489__(
      /*! ./configs/app */
      "./src/configs/app.ts");
      /* harmony import */


      var _Loader__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_10489__(
      /*! ./Loader */
      "./src/Loader.ts");
      /* harmony import */


      var _MatterWrapper__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_10489__(
      /*! ./MatterWrapper */
      "./src/MatterWrapper.ts");

      var __assign =  false || function () {
        __assign = Object.assign || function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return __assign.apply(this, arguments);
      };

      var _P5Wrapper =
      /** @class */
      function () {
        function P5Wrapper(P5, options) {
          if (options === void 0) {
            options = {};
          }

          this.options = {
            parent: "game"
          };
          this.P5 = P5;
          this.options = __assign(__assign({}, this.options), options);
          this.matterWrapper = new _MatterWrapper__WEBPACK_IMPORTED_MODULE_2__["default"](P5);
          this.loader = new _Loader__WEBPACK_IMPORTED_MODULE_1__["default"](P5);
        }

        P5Wrapper.prototype.preload = function () {
          this.loader.loadImages();
        };

        P5Wrapper.prototype.setup = function () {
          this.mCanvas = this.P5.createCanvas(_configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].APP.WIDTH, _configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].APP.HEIGHT);
          this.mCanvas.parent(this.options.parent);
          this.P5.background("#ccc");
          this.matterWrapper.init();
        };

        P5Wrapper.prototype.draw = function () {
          this.P5.background(_Loader__WEBPACK_IMPORTED_MODULE_1__["default"].getImage("bg"));
          this.debug();
          this.matterWrapper.update();
          this.matterWrapper.drawHole();
          this.matterWrapper.createDisc();
          this.matterWrapper.drawPegs();
          this.matterWrapper.drawDiscs();
          this.matterWrapper.drawBag();
        };

        P5Wrapper.prototype.debug = function () {
          if (!_configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].APP.DEMO) return;
          this.debugLine();
          this.debugFrameRate();
        };

        P5Wrapper.prototype.debugLine = function () {
          this.P5.push();
          this.P5.stroke("#f7a9a9");
          this.P5.line(_configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].APP.WIDTH / 2, 0, _configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].APP.WIDTH / 2, _configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].APP.HEIGHT);
          this.P5.line(0, _configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].APP.HEIGHT / 2, _configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].APP.WIDTH, _configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].APP.HEIGHT / 2);
          this.P5.pop();
        };

        P5Wrapper.prototype.debugFrameRate = function () {
          {
            this.P5.text(this.P5.frameRate(), 10, 10);
          }
        };

        return P5Wrapper;
      }();
      /***/

    },

    /***/
    "./src/components/Bag.ts":
    /*!*******************************!*\
      !*** ./src/components/Bag.ts ***!
      \*******************************/

    /***/
    function srcComponentsBagTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_14466__) {
      __nested_webpack_require_14466__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_14466__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_14466__(
      /*! matter-js */
      "./node_modules/matter-js/build/matter.js");
      /* harmony import */


      var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_14466__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _configs_app__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_14466__(
      /*! ../configs/app */
      "./src/configs/app.ts");
      /* harmony import */


      var _BaseComponent__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_14466__(
      /*! ./BaseComponent */
      "./src/components/BaseComponent.ts");

      var __extends =  false || function () {
        var _extendStatics = function extendStatics(d, b) {
          _extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      var Bag =
      /** @class */
      function (_super) {
        __extends(Bag, _super);

        function Bag(world, P5, x, y, color, text) {
          var _this = _super.call(this, world, P5) || this;

          _this.color = color;
          _this.text = text;
          _this.options = {
            isStatic: true,
            isSensor: true,
            restitution: 1,
            friction: 1,
            game_active: 0,
            game_bag_index: -1
          };
          _this.x = x + 1;
          _this.y = y + _configs_app__WEBPACK_IMPORTED_MODULE_1__["default"].BAG.topBufferFromPeg;
          _this.text = _this.text + "";
          var w = _configs_app__WEBPACK_IMPORTED_MODULE_1__["default"].PEG.spacing - _configs_app__WEBPACK_IMPORTED_MODULE_1__["default"].PEG.radius;
          var h = _configs_app__WEBPACK_IMPORTED_MODULE_1__["default"].BAG.heightBody;
          var ny = _this.y + h * 1.5;
          var nx = _this.x + w / 2;
          _this.body = matter_js__WEBPACK_IMPORTED_MODULE_0__.Bodies.rectangle(nx, ny, w, h, _this.options);
          _this.body.label = "bag";
          _this.body.collisionFilter.group = 2147483647;
          _this.body.collisionFilter.mask = 2147483647;
          _this.body.collisionFilter.category = 2147483647;
          matter_js__WEBPACK_IMPORTED_MODULE_0__.Composite.add(world, _this.body);
          return _this;
        }

        Bag.prototype.setGameBagIndex = function (index) {
          this.body.game_bag_index = index;
        };

        Bag.prototype.show = function () {
          this.P5.push();
          this.showGameItem();
          this.showBody();
          this.P5.pop();
        };

        Bag.prototype.showGameItem = function () {
          this.P5.fill(this.color);
          this.P5.beginShape();
          this.P5.noStroke();
          var addX = this.x;
          var addY = this.y;

          for (var index = 0; index < _configs_app__WEBPACK_IMPORTED_MODULE_1__["default"].BAG.path.length; index++) {
            var element = _configs_app__WEBPACK_IMPORTED_MODULE_1__["default"].BAG.path[index];
            var nx = element.x * 0.35 + addX;
            var ny = element.y * 0.5 + addY;
            this.P5.curveVertex(nx, ny);
          }

          this.P5.endShape();
          this.drawText(addX, addY);
          this.P5.fill(0);
        };

        Bag.prototype.drawText = function (addX, addY) {
          var index = 0;
          var element = _configs_app__WEBPACK_IMPORTED_MODULE_1__["default"].BAG.path[index];
          var nx = element.x * 0.35 + addX;
          var ny = element.y * 0.45 + addY;
          this.P5.fill(0);
          this.P5.textSize(10);
          this.P5.textStyle(this.P5.BOLD);
          this.P5.textAlign(this.P5.CENTER, this.P5.CENTER);
          this.P5.text(this.text, nx - 14, ny + 14);
        };

        return Bag;
      }(_BaseComponent__WEBPACK_IMPORTED_MODULE_2__["default"]);
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = Bag;
      /***/
    },

    /***/
    "./src/components/BaseComponent.ts":
    /*!*****************************************!*\
      !*** ./src/components/BaseComponent.ts ***!
      \*****************************************/

    /***/
    function srcComponentsBaseComponentTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_19704__) {
      __nested_webpack_require_19704__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_19704__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _configs_app__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_19704__(
      /*! ../configs/app */
      "./src/configs/app.ts");

      var BaseComponent =
      /** @class */
      function () {
        function BaseComponent(world, P5) {
          this.world = world;
          this.P5 = P5;
        }

        Object.defineProperty(BaseComponent.prototype, "x", {
          get: function get() {
            return this._x;
          },
          set: function set(value) {
            this._x = value;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(BaseComponent.prototype, "y", {
          get: function get() {
            return this._y;
          },
          set: function set(value) {
            this._y = value;
          },
          enumerable: false,
          configurable: true
        });

        BaseComponent.prototype.getBody = function () {
          return this.body;
        };

        BaseComponent.prototype.showBody = function () {
          if (!_configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].APP.SHOW_BODY) return;
          this.P5.rect(this.body.bounds.min.x, this.body.bounds.min.y, this.body.bounds.max.x - this.body.bounds.min.x, this.body.bounds.max.y - this.body.bounds.min.y);
        };

        return BaseComponent;
      }();
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = BaseComponent;
      /***/
    },

    /***/
    "./src/components/Disc.ts":
    /*!********************************!*\
      !*** ./src/components/Disc.ts ***!
      \********************************/

    /***/
    function srcComponentsDiscTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_21767__) {
      __nested_webpack_require_21767__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_21767__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_21767__(
      /*! matter-js */
      "./node_modules/matter-js/build/matter.js");
      /* harmony import */


      var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_21767__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _configs_app__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_21767__(
      /*! ../configs/app */
      "./src/configs/app.ts");
      /* harmony import */


      var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_21767__(
      /*! ../Loader */
      "./src/Loader.ts");
      /* harmony import */


      var _sprites_Fire__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_21767__(
      /*! ../sprites/Fire */
      "./src/sprites/Fire.ts");
      /* harmony import */


      var _BaseComponent__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_21767__(
      /*! ./BaseComponent */
      "./src/components/BaseComponent.ts");

      var __extends =  false || function () {
        var _extendStatics2 = function extendStatics(d, b) {
          _extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics2(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics2(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      var Disc =
      /** @class */
      function (_super) {
        __extends(Disc, _super);

        function Disc(world, P5, x, y, r, pegContainer, fileType) {
          if (fileType === void 0) {
            fileType = _sprites_Fire__WEBPACK_IMPORTED_MODULE_3__.FireType.NORMAL;
          }

          var _this = _super.call(this, world, P5) || this;

          _this.pegContainer = pegContainer;
          _this.fileType = fileType;
          _this.options = {
            restitution: 1,
            friction: 1,
            frictionAir: 0.01,
            density: 1 // inerita:Infinity

          };
          _this.currentPaths = [];
          _this.body = matter_js__WEBPACK_IMPORTED_MODULE_0__.Bodies.circle(x, y, r, _this.options);
          _this.r = r;
          _this.body.label = "disc";
          _this.body.collisionFilter.group = 1;
          _this.body.collisionFilter.mask = 1;
          _this.body.collisionFilter.category = 1;
          matter_js__WEBPACK_IMPORTED_MODULE_0__.Composite.add(world, _this.body);
          _this.fire = new _sprites_Fire__WEBPACK_IMPORTED_MODULE_3__["default"](P5, fileType);
          _this.width = _configs_app__WEBPACK_IMPORTED_MODULE_1__["default"].DISC.draw_width();
          return _this;
        }

        Disc.prototype.init = function (paths) {
          if (paths === void 0) {
            paths = [];
          }

          this.incrementCount();
          var pow = Math.pow(2, _configs_app__WEBPACK_IMPORTED_MODULE_1__["default"].TEST.count);
          this.body.collisionFilter.group = pow;
          this.body.collisionFilter.mask = pow;
          this.body.collisionFilter.category = pow;
          this.testWall(paths);
        };

        Disc.prototype.incrementCount = function () {
          _configs_app__WEBPACK_IMPORTED_MODULE_1__["default"].TEST.count++;

          if (_configs_app__WEBPACK_IMPORTED_MODULE_1__["default"].TEST.count > 29) {
            _configs_app__WEBPACK_IMPORTED_MODULE_1__["default"].TEST.count = 0;
          }
        };

        Disc.prototype.testWall = function (paths) {
          if (paths === void 0) {
            paths = [];
          } // let path =
          //     AppConfig.TEST.paths[
          //         AppConfig.TEST.count % AppConfig.TEST.paths.length
          //     ];


          if (paths == undefined) return;

          for (var i = 0; i < paths.length - 1; i++) {
            var point = parseInt(paths[i]);
            var nextPoint = parseInt(paths[i + 1]);
            var wallLeft = point - 1 + "_" + (nextPoint - 1);
            var wallRight = point + 1 + "_" + (nextPoint + 1);

            if (this.pegContainer.walls[wallLeft]) {
              this.changeGroupWall(this.pegContainer.walls[wallLeft]);
            }

            if (this.pegContainer.walls[wallRight]) {
              this.changeGroupWall(this.pegContainer.walls[wallRight]);
            }
          }
        };

        Disc.prototype.changeGroupWall = function (wall) {
          var pow = Math.pow(2, _configs_app__WEBPACK_IMPORTED_MODULE_1__["default"].TEST.count);
          wall.body.game_active = _configs_app__WEBPACK_IMPORTED_MODULE_1__["default"].TEST.count + 1;
          wall.body.collisionFilter.mask |= pow;
          wall.body.collisionFilter.category |= pow;
        };

        Disc.prototype.collision = function (discBody, pegBody) {
          var idx = pegBody.game_idx_peg;
        };

        Disc.prototype.retreivePivotPoint = function (checkValue) {
          for (var i = 0; i < this.currentPaths.length; i++) {
            var p = parseInt(this.currentPaths[i]);

            if (p - 1 == checkValue || p + 1 == checkValue) {
              return p;
            }
          }

          return 0;
        };

        Disc.prototype.show = function () {
          this.showFire();
          this.P5.push();
          this.showGameItem();
          this.showBody();
          this.P5.pop();
        };

        Disc.prototype.showFire = function () {
          var pos = this.body.position;
          var posx = pos.x;
          var posy = pos.y;
          this.fire.show(posx, posy);
        };

        Disc.prototype.showGameItem = function () {
          var pos = this.body.position;
          var posx = pos.x;
          var posy = pos.y;
          this.P5.translate(posx, posy); // this.P5.fill("#4e58e4");
          // this.P5.noStroke();
          // this.P5.ellipse(0, 0, this.r * 2);
          // this.P5.ellipse(0, 0, AppConfig.DISC.draw_width());

          this.P5.image(this.getImageRender(), -this.width / 2, -this.width / 2, this.width, this.width);
        };

        Disc.prototype.getImageRender = function () {
          if (this.fileType == _sprites_Fire__WEBPACK_IMPORTED_MODULE_3__.FireType.NORMAL) {
            return _Loader__WEBPACK_IMPORTED_MODULE_2__["default"].getImage("ball_black");
          } else if (this.fileType == _sprites_Fire__WEBPACK_IMPORTED_MODULE_3__.FireType.MID) {
            return _Loader__WEBPACK_IMPORTED_MODULE_2__["default"].getImage("ball_green");
          } else {
            return _Loader__WEBPACK_IMPORTED_MODULE_2__["default"].getImage("ball");
          }
        };

        return Disc;
      }(_BaseComponent__WEBPACK_IMPORTED_MODULE_4__["default"]);
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = Disc;
      /***/
    },

    /***/
    "./src/components/Hole.ts":
    /*!********************************!*\
      !*** ./src/components/Hole.ts ***!
      \********************************/

    /***/
    function srcComponentsHoleTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_29611__) {
      __nested_webpack_require_29611__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_29611__.d(__webpack_exports__, {
        /* harmony export */
        "Hole": function Hole() {
          return (
            /* binding */
            _Hole
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _configs_app__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_29611__(
      /*! ../configs/app */
      "./src/configs/app.ts");
      /* harmony import */


      var _Loader__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_29611__(
      /*! ../Loader */
      "./src/Loader.ts");
      /* harmony import */


      var _BaseComponent__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_29611__(
      /*! ./BaseComponent */
      "./src/components/BaseComponent.ts");

      var __extends =  false || function () {
        var _extendStatics3 = function extendStatics(d, b) {
          _extendStatics3 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics3(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics3(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      var _Hole =
      /** @class */
      function (_super) {
        __extends(Hole, _super);

        function Hole(world, P5) {
          var _this = _super.call(this, world, P5) || this;

          _this.x = _configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].HOLE.DROP_POSITION_X;
          _this.y = _configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].HOLE.DROP_POSITION_Y;
          _this.width = _this.height = _configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].DISC.radius * 2 * 1.5;
          return _this;
        }

        Hole.prototype.show = function () {
          this.P5.push();
          this.showGameItem();
          this.P5.pop();
        };

        Hole.prototype.showGameItem = function () {
          this.P5.noStroke();
          this.P5.translate(this.x, this.y);
          this.P5.imageMode(this.P5.CENTER);
          this.P5.image(_Loader__WEBPACK_IMPORTED_MODULE_1__["default"].getImage("hole"), 0, 0, this.width, this.height);
        };

        return Hole;
      }(_BaseComponent__WEBPACK_IMPORTED_MODULE_2__["default"]);
      /***/

    },

    /***/
    "./src/components/Peg.ts":
    /*!*******************************!*\
      !*** ./src/components/Peg.ts ***!
      \*******************************/

    /***/
    function srcComponentsPegTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_32699__) {
      __nested_webpack_require_32699__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_32699__.d(__webpack_exports__, {
        /* harmony export */
        "Peg": function Peg() {
          return (
            /* binding */
            _Peg
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_32699__(
      /*! matter-js */
      "./node_modules/matter-js/build/matter.js");
      /* harmony import */


      var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_32699__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _sprites_Light__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_32699__(
      /*! ../sprites/Light */
      "./src/sprites/Light.ts");
      /* harmony import */


      var _BaseComponent__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_32699__(
      /*! ./BaseComponent */
      "./src/components/BaseComponent.ts");

      var __extends =  false || function () {
        var _extendStatics4 = function extendStatics(d, b) {
          _extendStatics4 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics4(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics4(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      var _Peg =
      /** @class */
      function (_super) {
        __extends(Peg, _super);

        function Peg(world, P5, x, y, r) {
          var _this = _super.call(this, world, P5) || this;

          _this.countDrawLight = 0;
          _this.options = {
            isStatic: true,
            restitution: 1,
            friction: 0,
            game_idx_peg: 0,
            game_active: 0
          };
          _this.r = r;
          _this.x = x;
          _this.y = y;
          _this.body = matter_js__WEBPACK_IMPORTED_MODULE_0__.Bodies.circle(x, y, r, _this.options);
          _this.body.label = "peg";
          _this.body.collisionFilter.group = 2147483647;
          _this.body.collisionFilter.mask = 2147483647;
          _this.body.collisionFilter.category = 2147483647;
          matter_js__WEBPACK_IMPORTED_MODULE_0__.Composite.add(world, _this.body);
          _this.light = new _sprites_Light__WEBPACK_IMPORTED_MODULE_1__["default"](_this.P5, "light");

          _this.light.finish = function () {
            _this.body.game_active = 0;
          };

          return _this;
        }

        Object.defineProperty(Peg.prototype, "name", {
          get: function get() {
            return this._name;
          },
          set: function set(value) {
            this._name = value;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Peg.prototype, "indexPeg", {
          get: function get() {
            return this._indexPeg;
          },
          set: function set(value) {
            this.body.game_idx_peg = value;
            this._indexPeg = value;
          },
          enumerable: false,
          configurable: true
        });

        Peg.prototype.show = function () {
          this.P5.push();
          this.showGameItem();
          this.showBody();
          this.P5.pop();
        };

        Peg.prototype.showGameItem = function () {
          this.P5.fill("#fff");
          this.P5.noStroke();
          var pos = this.body.position;
          this.P5.translate(pos.x, pos.y);
          this.P5.ellipse(0, 0, this.r * 2);
          this.P5.imageMode(this.P5.CENTER);

          if (this.body.game_active) {
            this.light.show();
          }
        };

        return Peg;
      }(_BaseComponent__WEBPACK_IMPORTED_MODULE_2__["default"]);
      /***/

    },

    /***/
    "./src/components/containers/BagContainer.ts":
    /*!***************************************************!*\
      !*** ./src/components/containers/BagContainer.ts ***!
      \***************************************************/

    /***/
    function srcComponentsContainersBagContainerTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_37383__) {
      __nested_webpack_require_37383__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_37383__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _configs_app__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_37383__(
      /*! ../../configs/app */
      "./src/configs/app.ts");
      /* harmony import */


      var _Bag__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_37383__(
      /*! ../Bag */
      "./src/components/Bag.ts");

      var BagContainer =
      /** @class */
      function () {
        function BagContainer(world, P5, pegContainer) {
          this.world = world;
          this.P5 = P5;
          this.pegContainer = pegContainer;
          this.bags = [];
        }

        BagContainer.prototype.createBags = function () {
          //có 17 bag = 17 lỗ
          for (var index = 0; index < 17; index++) {
            var idx = 150 + index; //150 = peg ngoài cùng bên trái

            var peg = this.pegContainer.pegs[idx];
            var b = new _Bag__WEBPACK_IMPORTED_MODULE_1__["default"](this.world, this.P5, peg.x, peg.y, _configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].BAG.colors[index], _configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].BAG.texts[index]);
            b.setGameBagIndex(index);
            this.bags.push(b);
          }
        };

        BagContainer.prototype.show = function () {
          this.bags.forEach(function (bag, idx) {
            bag.show();
          });
        };

        return BagContainer;
      }();
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = BagContainer;
      /***/
    },

    /***/
    "./src/components/containers/DiscContainer.ts":
    /*!****************************************************!*\
      !*** ./src/components/containers/DiscContainer.ts ***!
      \****************************************************/

    /***/
    function srcComponentsContainersDiscContainerTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_39536__) {
      __nested_webpack_require_39536__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_39536__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_39536__(
      /*! matter-js */
      "./node_modules/matter-js/build/matter.js");
      /* harmony import */


      var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_39536__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _configs_app__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_39536__(
      /*! ../../configs/app */
      "./src/configs/app.ts");
      /* harmony import */


      var _sprites_Fire__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_39536__(
      /*! ../../sprites/Fire */
      "./src/sprites/Fire.ts");
      /* harmony import */


      var _Disc__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_39536__(
      /*! ../Disc */
      "./src/components/Disc.ts");

      var DiscContainer =
      /** @class */
      function () {
        function DiscContainer(world, P5, pegContainer) {
          this.world = world;
          this.P5 = P5;
          this.pegContainer = pegContainer;
          this.discs = [];
        }

        DiscContainer.prototype.createDisc = function (path, fireType) {
          if (path === void 0) {
            path = "";
          }

          if (fireType === void 0) {
            fireType = _sprites_Fire__WEBPACK_IMPORTED_MODULE_2__.FireType.HOT;
          }

          var paths = path.split(" ");
          if (paths.length == 0) return;
          var first = paths[0];
          var direction = first == 16 ? -2 : +2;
          var x = _configs_app__WEBPACK_IMPORTED_MODULE_1__["default"].DISC.x + direction;
          var y = _configs_app__WEBPACK_IMPORTED_MODULE_1__["default"].DISC.y;
          var r = _configs_app__WEBPACK_IMPORTED_MODULE_1__["default"].DISC.radius;
          var d = new _Disc__WEBPACK_IMPORTED_MODULE_3__["default"](this.world, this.P5, x, y, r, this.pegContainer, fireType);
          d.init(paths);
          this.discs.push(d);
        };

        DiscContainer.prototype.collision = function (discBody, pegBody) {
          this.discs.forEach(function (disc, idx) {
            disc.collision(discBody, pegBody);
          });
        };

        DiscContainer.prototype.show = function () {
          this.discs.forEach(function (disc, idx) {
            disc.show();
          });
        };

        DiscContainer.prototype.remove = function () {
          var _this = this;

          this.discs.forEach(function (disc, idx) {
            if (disc.getBody().position.y > 700) {
              matter_js__WEBPACK_IMPORTED_MODULE_0__.Composite.remove(_this.world, disc.getBody());
              delete _this.discs[idx];

              if (_this.removeCallback) {
                _this.removeCallback();
              }
            }
          });
        };

        DiscContainer.prototype.removeById = function (id) {
          for (var index = 0; index < this.discs.length; index++) {
            var element = this.discs[index];

            if (element) {
              if (element.getBody().id == id) {
                matter_js__WEBPACK_IMPORTED_MODULE_0__.Composite.remove(this.world, element.getBody()); // delete this.discs[index];

                this.discs.splice(index, 1);
                return;
              }
            }
          }
        };

        return DiscContainer;
      }();
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = DiscContainer;
      /***/
    },

    /***/
    "./src/components/containers/PegContainer.ts":
    /*!***************************************************!*\
      !*** ./src/components/containers/PegContainer.ts ***!
      \***************************************************/

    /***/
    function srcComponentsContainersPegContainerTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_43657__) {
      __nested_webpack_require_43657__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_43657__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _configs_app__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_43657__(
      /*! ../../configs/app */
      "./src/configs/app.ts");
      /* harmony import */


      var _Peg__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_43657__(
      /*! ../Peg */
      "./src/components/Peg.ts");
      /* harmony import */


      var _wall_CrossLeftWall__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_43657__(
      /*! ../wall/CrossLeftWall */
      "./src/components/wall/CrossLeftWall.ts");
      /* harmony import */


      var _wall_CrossRightWall__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_43657__(
      /*! ../wall/CrossRightWall */
      "./src/components/wall/CrossRightWall.ts");
      /* harmony import */


      var _wall_FunnelDownWall__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_43657__(
      /*! ../wall/FunnelDownWall */
      "./src/components/wall/FunnelDownWall.ts");
      /* harmony import */


      var _wall_FunnelWall__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_43657__(
      /*! ../wall/FunnelWall */
      "./src/components/wall/FunnelWall.ts");
      /* harmony import */


      var _wall_Wall__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_43657__(
      /*! ../wall/Wall */
      "./src/components/wall/Wall.ts");

      var PegContainer =
      /** @class */
      function () {
        function PegContainer(world, P5) {
          this._pegs = [];
          this._walls = {};
          this.funnelwalls = [];
          this.world = world;
          this.P5 = P5;
        }

        Object.defineProperty(PegContainer.prototype, "pegs", {
          get: function get() {
            return this._pegs;
          },
          set: function set(value) {
            this._pegs = value;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(PegContainer.prototype, "walls", {
          get: function get() {
            return this._walls;
          },
          set: function set(value) {
            this._walls = value;
          },
          enumerable: false,
          configurable: true
        });

        PegContainer.prototype.makePegs = function (width, topBuffer, options) {
          if (options === void 0) {
            options = {
              radius: 1,
              spacing: 30,
              rows: 17
            };
          }

          var centerWidth = width / 2;
          var xSpacing = options.spacing * 1;
          var ySpacing = options.spacing * 0.8;
          var startX = centerWidth - xSpacing;
          var count = 0;
          var pegs = [];
          var idxPeg = 15; //Index của Peg đầu tiên

          var add = 28; // Index Peg đầu tiên hàng tiếp theo

          for (var i = 1; i < options.rows; i++) {
            count++;

            for (var j = 1; j < i + 3; j++) {
              var x = startX - 0.5 * (i + 1) * xSpacing + j * xSpacing;
              var y = topBuffer + i * ySpacing;
              var p = new _Peg__WEBPACK_IMPORTED_MODULE_1__.Peg(this.world, this.P5, x, y, options.radius);
              p.indexPeg = idxPeg;
              pegs.push(p);
              idxPeg += 2;
            }

            idxPeg += add;
            add -= 2;
          }

          return this.pegs = pegs;
        };

        PegContainer.prototype.makeWalls = function () {
          this.makeFunnelWalls();
          this.makeHorizontalWalls();
          this.makeCrossWalls();
        };

        PegContainer.prototype.makeFunnelWalls = function () {
          if (this.pegs.length > 3) {
            var peg = this.pegs[0];
            var x2 = peg.x;
            var y2 = peg.y - 100;
            var w = new _wall_FunnelWall__WEBPACK_IMPORTED_MODULE_5__["default"](this.world, this.P5, peg.x, peg.y, x2, y2);
            this.funnelwalls.push(w);
            peg = this.pegs[2];
            x2 = peg.x;
            y2 = peg.y - 100;
            w = new _wall_FunnelWall__WEBPACK_IMPORTED_MODULE_5__["default"](this.world, this.P5, peg.x, peg.y, x2, y2);
            this.funnelwalls.push(w);
          }

          if (this.pegs.length > 167) {
            for (var index = 150; index < this.pegs.length; index++) {
              // peg ngoài cùng bên dưới trái
              var peg = this.pegs[index];
              var x2 = peg.x;
              var y2 = peg.y + 50;
              var w = new _wall_FunnelDownWall__WEBPACK_IMPORTED_MODULE_4__["default"](this.world, this.P5, peg.x, peg.y, x2, y2);
              this.funnelwalls.push(w);
            }
          }
        };

        PegContainer.prototype.makeHorizontalWalls = function () {
          for (var i = 0; i < this.pegs.length - 1; i++) {
            var peg = this.pegs[i];
            var nextPeg = this.pegs[i + 1];
            var pegIndex = peg.indexPeg;
            var nextPegIndex = nextPeg.indexPeg;
            var iPegIndex = pegIndex / 35 | 0;
            var iNextPegIndex = nextPegIndex / 35 | 0;

            if (iPegIndex == iNextPegIndex) {
              var newX1 = peg.x + _configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].PEG.radius;
              var newY1 = peg.y - _configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].WALL.height / 2;
              var newX2 = nextPeg.x - _configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].PEG.radius;
              var newY2 = nextPeg.y - _configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].WALL.height / 2;
              var w = new _wall_Wall__WEBPACK_IMPORTED_MODULE_6__["default"](this.world, this.P5, peg.x, peg.y, nextPeg.x, nextPeg.y);
              w.fromPeg = peg;
              w.toPeg = nextPeg;
              w.fromIndex = pegIndex;
              w.toIndex = nextPegIndex;
              var wallName = pegIndex + "_" + nextPegIndex;
              w.setWallName(wallName);
              this.walls[wallName] = w;
            }
          }
        };

        PegContainer.prototype.makeCrossWalls = function () {
          var currentRow = -1;
          var addLeft = 2;
          var addRight = 3;

          for (var i = 0; i < this.pegs.length; i++) {
            var peg = this.pegs[i];
            var pegIndex = peg.indexPeg;
            var rowPeg = pegIndex / 35 | 0;

            if (currentRow != rowPeg) {
              currentRow = rowPeg;
              addLeft += 1;
              addRight += 1;
            }

            var tmpi = i + addLeft;

            if (tmpi < this.pegs.length) {
              var nextPeg = this.pegs[tmpi];
              this.createWall(peg, nextPeg, true);
            }

            tmpi = i + addRight;

            if (tmpi < this.pegs.length) {
              var nextPeg = this.pegs[tmpi];
              this.createWall(peg, nextPeg, false);
            }
          }
        };

        PegContainer.prototype.createWall = function (peg, nextPeg, isLeft) {
          var w = isLeft ? new _wall_CrossLeftWall__WEBPACK_IMPORTED_MODULE_2__["default"](this.world, this.P5, peg.x, peg.y, nextPeg.x, nextPeg.y) : new _wall_CrossRightWall__WEBPACK_IMPORTED_MODULE_3__["default"](this.world, this.P5, peg.x, peg.y, nextPeg.x, nextPeg.y);
          var nextPegIndex = nextPeg.indexPeg;
          var pegIndex = peg.indexPeg;
          w.fromIndex = pegIndex;
          w.toIndex = nextPegIndex;
          w.fromPeg = peg;
          w.toPeg = nextPeg;
          var wallName = pegIndex + "_" + nextPegIndex;
          w.setWallName(wallName);
          this.walls[wallName] = w;
          return w;
        };

        PegContainer.prototype.show = function () {
          for (var _i = 0, _a = Object.entries(this.walls); _i < _a.length; _i++) {
            var _b = _a[_i],
                key = _b[0],
                wall = _b[1];
            var w = wall;
            w.show();
          }

          this.pegs.forEach(function (peg) {
            peg.show();
          });
          this.funnelwalls.forEach(function (wall) {
            wall.show();
          });
        };

        return PegContainer;
      }();
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = PegContainer;
      /***/
    },

    /***/
    "./src/components/wall/BaseWall.ts":
    /*!*****************************************!*\
      !*** ./src/components/wall/BaseWall.ts ***!
      \*****************************************/

    /***/
    function srcComponentsWallBaseWallTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_52339__) {
      __nested_webpack_require_52339__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_52339__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _configs_app__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_52339__(
      /*! ../../configs/app */
      "./src/configs/app.ts");
      /* harmony import */


      var _BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_52339__(
      /*! ../BaseComponent */
      "./src/components/BaseComponent.ts");

      var __extends =  false || function () {
        var _extendStatics5 = function extendStatics(d, b) {
          _extendStatics5 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics5(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics5(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      var BaseWall =
      /** @class */
      function (_super) {
        __extends(BaseWall, _super);

        function BaseWall(world, P5, x1, y1, x2, y2) {
          var _this = _super.call(this, world, P5) || this;

          _this.options = {
            isStatic: true,
            restitution: 1,
            friction: 1,
            game_active: 0,
            wall_name: ""
          };
          _this.height = _configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].WALL.height;
          return _this;
        }

        Object.defineProperty(BaseWall.prototype, "fromPeg", {
          get: function get() {
            return this._fromPeg;
          },
          set: function set(value) {
            this._fromPeg = value;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(BaseWall.prototype, "toPeg", {
          get: function get() {
            return this._toPeg;
          },
          set: function set(value) {
            this._toPeg = value;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(BaseWall.prototype, "fromIndex", {
          get: function get() {
            return this._fromIndex;
          },
          set: function set(value) {
            this._fromIndex = value;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(BaseWall.prototype, "toIndex", {
          get: function get() {
            return this._toIndex;
          },
          set: function set(value) {
            this._toIndex = value;
          },
          enumerable: false,
          configurable: true
        });

        BaseWall.prototype.setWallName = function (value) {
          this.body.wall_name = value;
        };

        BaseWall.prototype.setStroke = function () {
          this.P5.fill("#45bf36");

          if (this.body.game_active >= 1) {
            this.P5.stroke(_configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].COLORS[this.body.game_active % _configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].COLORS.length]);
          } else {
            this.P5.stroke(255);
          }
        };

        return BaseWall;
      }(_BaseComponent__WEBPACK_IMPORTED_MODULE_1__["default"]);
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = BaseWall;
      /***/
    },

    /***/
    "./src/components/wall/CrossLeftWall.ts":
    /*!**********************************************!*\
      !*** ./src/components/wall/CrossLeftWall.ts ***!
      \**********************************************/

    /***/
    function srcComponentsWallCrossLeftWallTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_56657__) {
      __nested_webpack_require_56657__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_56657__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _CrossWall__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_56657__(
      /*! ./CrossWall */
      "./src/components/wall/CrossWall.ts");

      var __extends =  false || function () {
        var _extendStatics6 = function extendStatics(d, b) {
          _extendStatics6 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics6(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics6(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      var CrossLeftWall =
      /** @class */
      function (_super) {
        __extends(CrossLeftWall, _super);

        function CrossLeftWall() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        CrossLeftWall.prototype.getPoints = function (x1, y1, x2, y2) {
          // y1 += 3;
          // y2 -= 10;
          var translateX = Math.abs(x2 - x1) / 2;
          var translateY = Math.abs(y2 - y1) / 2;
          var thickness = 0.2;
          var cutterY = 1;
          var cutterX = Math.tan(Math.PI * 30 / 180) * cutterY;
          var point1 = {
            x: x1 - translateX - cutterX,
            y: y1 + translateY + cutterY
          };
          var point2 = {
            x: x1 + thickness - translateX - cutterX,
            y: y1 + translateY + cutterY
          };
          var point3 = {
            x: x2 + thickness - translateX + cutterX,
            y: y2 + translateY - cutterY
          };
          var point4 = {
            x: x2 - translateX + cutterX,
            y: y2 + translateY - cutterY
          };
          return [[point1, point2, point3, point4]];
        };

        return CrossLeftWall;
      }(_CrossWall__WEBPACK_IMPORTED_MODULE_0__["default"]);
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = CrossLeftWall;
      /***/
    },

    /***/
    "./src/components/wall/CrossRightWall.ts":
    /*!***********************************************!*\
      !*** ./src/components/wall/CrossRightWall.ts ***!
      \***********************************************/

    /***/
    function srcComponentsWallCrossRightWallTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_59747__) {
      __nested_webpack_require_59747__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_59747__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _CrossWall__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_59747__(
      /*! ./CrossWall */
      "./src/components/wall/CrossWall.ts");

      var __extends =  false || function () {
        var _extendStatics7 = function extendStatics(d, b) {
          _extendStatics7 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics7(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics7(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      var CrossRightWall =
      /** @class */
      function (_super) {
        __extends(CrossRightWall, _super);

        function CrossRightWall() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        CrossRightWall.prototype.getPoints = function (x1, y1, x2, y2) {
          var translateX = Math.abs(x2 - x1) / 2;
          var translateY = Math.abs(y2 - y1) / 2;
          var thickness = 0.2;
          var cutterY = 1;
          var cutterX = Math.tan(Math.PI * 30 / 180) * cutterY;
          var point1 = {
            x: x1 + translateX + cutterX,
            y: y1 + translateY + cutterY
          };
          var point2 = {
            x: x1 + thickness + translateX + cutterX,
            y: y1 + translateY + cutterY
          };
          var point3 = {
            x: x2 + thickness + translateX - cutterX,
            y: y2 + translateY - cutterY
          };
          var point4 = {
            x: x2 + translateX - cutterX,
            y: y2 + translateY - cutterY
          };
          return [[point1, point2, point3, point4]];
        };

        return CrossRightWall;
      }(_CrossWall__WEBPACK_IMPORTED_MODULE_0__["default"]);
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = CrossRightWall;
      /***/
    },

    /***/
    "./src/components/wall/CrossWall.ts":
    /*!******************************************!*\
      !*** ./src/components/wall/CrossWall.ts ***!
      \******************************************/

    /***/
    function srcComponentsWallCrossWallTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_62773__) {
      __nested_webpack_require_62773__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_62773__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_62773__(
      /*! matter-js */
      "./node_modules/matter-js/build/matter.js");
      /* harmony import */


      var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_62773__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _configs_app__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_62773__(
      /*! ../../configs/app */
      "./src/configs/app.ts");
      /* harmony import */


      var _BaseWall__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_62773__(
      /*! ./BaseWall */
      "./src/components/wall/BaseWall.ts");

      var __extends =  false || function () {
        var _extendStatics8 = function extendStatics(d, b) {
          _extendStatics8 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics8(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics8(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      var CrossWall =
      /** @class */
      function (_super) {
        __extends(CrossWall, _super);

        function CrossWall(world, P5, x1, y1, x2, y2) {
          var _this = _super.call(this, world, P5, x1, y1, x2, y2) || this;

          var points = _this.getPoints(x1, y1, x2, y2);

          _this.body = matter_js__WEBPACK_IMPORTED_MODULE_0__.Bodies.fromVertices(points[0][0].x, points[0][0].y, points, _this.options);
          _this.body.label = "wall";
          _this.body.collisionFilter.group = 0;
          _this.body.collisionFilter.mask = 0;
          _this.body.collisionFilter.category = 0;
          matter_js__WEBPACK_IMPORTED_MODULE_0__.Composite.add(world, _this.body);
          return _this;
        }

        CrossWall.prototype.show = function () {
          if (!_configs_app__WEBPACK_IMPORTED_MODULE_1__["default"].WALL.showWall) return;
          this.P5.push();
          this.setStroke();
          var pos = this.body.position; // console.log(this.body.bounds);
          // this.P5.rect(
          //     this.body.bounds.min.x,
          //     this.body.bounds.min.y,
          //     this.body.bounds.max.x - this.body.bounds.min.x,
          //     this.body.bounds.max.y - this.body.bounds.min.y
          // );
          // this.P5.stroke('red')
          // this.P5.circle(this.body.vertices[0].x, this.body.vertices[0].y,1)
          // this.P5.stroke('black')
          // this.P5.circle(this.body.vertices[1].x, this.body.vertices[1].y,1)
          // this.P5.stroke('yellow')
          // this.P5.circle(this.body.vertices[2].x, this.body.vertices[2].y,1)
          // this.P5.stroke('white')
          // this.P5.circle(this.body.vertices[3].x, this.body.vertices[3].y,1)

          this.P5.beginShape();
          this.P5.vertex(this.body.vertices[0].x, this.body.vertices[0].y);
          this.P5.vertex(this.body.vertices[1].x, this.body.vertices[1].y);
          this.P5.vertex(this.body.vertices[2].x, this.body.vertices[2].y);
          this.P5.vertex(this.body.vertices[3].x, this.body.vertices[3].y);
          this.P5.endShape(this.P5.CLOSE); // console.log(this.body.wall_name);
          // console.log( this.body.bounds.min.x,
          //     this.body.bounds.min.y,
          //     this.body.bounds.max.x - this.body.bounds.min.x,
          //     this.body.bounds.max.y - this.body.bounds.min.y);
          // this.P5.translate(pos.x, pos.y);
          // this.P5.beginShape();
          // this.P5.vertex(this.fromPeg.x, this.fromPeg.y);
          // this.P5.vertex(this.fromPeg.x+1, this.fromPeg.y);
          // this.P5.vertex(this.toPeg.x, this.toPeg.y);
          // this.P5.vertex(this.toPeg.x+1, this.toPeg.y);
          // this.P5.endShape(this.P5.CLOSE);

          this.P5.pop();
        };

        return CrossWall;
      }(_BaseWall__WEBPACK_IMPORTED_MODULE_2__["default"]);
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = CrossWall;
      /***/
    },

    /***/
    "./src/components/wall/FunnelDownWall.ts":
    /*!***********************************************!*\
      !*** ./src/components/wall/FunnelDownWall.ts ***!
      \***********************************************/

    /***/
    function srcComponentsWallFunnelDownWallTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_67981__) {
      __nested_webpack_require_67981__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_67981__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_67981__(
      /*! matter-js */
      "./node_modules/matter-js/build/matter.js");
      /* harmony import */


      var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_67981__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _FunnelWall__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_67981__(
      /*! ./FunnelWall */
      "./src/components/wall/FunnelWall.ts");

      var __extends =  false || function () {
        var _extendStatics9 = function extendStatics(d, b) {
          _extendStatics9 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics9(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics9(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      var FunnelDownWall =
      /** @class */
      function (_super) {
        __extends(FunnelDownWall, _super);

        function FunnelDownWall() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        FunnelDownWall.prototype.init = function (x1, y1, x2, y2) {
          var width = this.width = 1;
          var height = this.height = Math.abs(y2 - y1);
          this.body = matter_js__WEBPACK_IMPORTED_MODULE_0__.Bodies.rectangle(x1, y1 + height / 2, width, height, this.options);
          this.body.label = "funnel_wall";
          this.body.collisionFilter.group = 2147483647;
          this.body.collisionFilter.mask = 2147483647;
          this.body.collisionFilter.category = 2147483647;
          matter_js__WEBPACK_IMPORTED_MODULE_0__.Composite.add(this.world, this.body);
        };

        return FunnelDownWall;
      }(_FunnelWall__WEBPACK_IMPORTED_MODULE_1__["default"]);
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = FunnelDownWall;
      /***/
    },

    /***/
    "./src/components/wall/FunnelWall.ts":
    /*!*******************************************!*\
      !*** ./src/components/wall/FunnelWall.ts ***!
      \*******************************************/

    /***/
    function srcComponentsWallFunnelWallTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_71090__) {
      __nested_webpack_require_71090__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_71090__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_71090__(
      /*! matter-js */
      "./node_modules/matter-js/build/matter.js");
      /* harmony import */


      var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_71090__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _configs_app__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_71090__(
      /*! ../../configs/app */
      "./src/configs/app.ts");
      /* harmony import */


      var _BaseWall__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_71090__(
      /*! ./BaseWall */
      "./src/components/wall/BaseWall.ts");

      var __extends =  false || function () {
        var _extendStatics10 = function extendStatics(d, b) {
          _extendStatics10 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics10(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics10(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      var FunnelWall =
      /** @class */
      function (_super) {
        __extends(FunnelWall, _super);

        function FunnelWall(world, P5, x1, y1, x2, y2) {
          var _this = _super.call(this, world, P5, x1, y1, x2, y2) || this;

          _this.init(x1, y1, x2, y2);

          return _this;
        }

        FunnelWall.prototype.init = function (x1, y1, x2, y2) {
          var width = this.width = _configs_app__WEBPACK_IMPORTED_MODULE_1__["default"].WALL.funnel_width;
          var height = this.height = Math.abs(y2 - y1);
          this.body = matter_js__WEBPACK_IMPORTED_MODULE_0__.Bodies.rectangle(x1, y1 - height / 2, width, height, this.options);
          this.body.label = "funnel_wall";
          this.body.collisionFilter.group = 2147483647;
          this.body.collisionFilter.mask = 2147483647;
          this.body.collisionFilter.category = 2147483647;
          matter_js__WEBPACK_IMPORTED_MODULE_0__.Composite.add(this.world, this.body);
        };

        FunnelWall.prototype.show = function () {
          if (!_configs_app__WEBPACK_IMPORTED_MODULE_1__["default"].WALL.showWall) return;
          this.P5.push();
          this.setStroke();
          var pos = this.body.position;
          this.P5.rect(this.body.bounds.min.x, this.body.bounds.min.y, this.body.bounds.max.x - this.body.bounds.min.x, this.body.bounds.max.y - this.body.bounds.min.y); // this.P5.stroke(255);
          // this.P5.translate(pos.x, pos.y);
          // this.P5.rect(pos.x, pos.y,this.width,this.height) ;
          // this.P5.textSize(5)
          // this.P5.text(this.body.wall_name,0,0);

          this.P5.pop();
        };

        return FunnelWall;
      }(_BaseWall__WEBPACK_IMPORTED_MODULE_2__["default"]);
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = FunnelWall;
      /***/
    },

    /***/
    "./src/components/wall/Wall.ts":
    /*!*************************************!*\
      !*** ./src/components/wall/Wall.ts ***!
      \*************************************/

    /***/
    function srcComponentsWallWallTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_75129__) {
      __nested_webpack_require_75129__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_75129__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_75129__(
      /*! matter-js */
      "./node_modules/matter-js/build/matter.js");
      /* harmony import */


      var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_75129__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _configs_app__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_75129__(
      /*! ../../configs/app */
      "./src/configs/app.ts");
      /* harmony import */


      var _BaseWall__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_75129__(
      /*! ./BaseWall */
      "./src/components/wall/BaseWall.ts");

      var __extends =  false || function () {
        var _extendStatics11 = function extendStatics(d, b) {
          _extendStatics11 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics11(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics11(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      var Wall =
      /** @class */
      function (_super) {
        __extends(Wall, _super);

        function Wall(world, P5, x1, y1, x2, y2) {
          var _this = _super.call(this, world, P5, x1, y1, x2, y2) || this;

          _this.wtfSpacing = 15; //Khong hiểu tại sao bị lệch đi 15px???

          _this.width = Math.abs(x2 - x1) - _this.wtfSpacing;
          _this.body = matter_js__WEBPACK_IMPORTED_MODULE_0__.Bodies.rectangle(x1 + _this.wtfSpacing, y1, _this.width, _this.height, _this.options);
          _this.body.label = "wall";
          _this.body.collisionFilter.group = 0;
          _this.body.collisionFilter.mask = 0;
          _this.body.collisionFilter.category = 0;
          matter_js__WEBPACK_IMPORTED_MODULE_0__.Composite.add(world, _this.body);
          return _this;
        }

        Wall.prototype.show = function () {
          if (!_configs_app__WEBPACK_IMPORTED_MODULE_1__["default"].WALL.showWall) return;
          this.P5.push();
          this.setStroke();
          var pos = this.body.position;
          this.P5.rect(this.body.bounds.min.x, this.body.bounds.min.y, this.body.bounds.max.x - this.body.bounds.min.x, this.body.bounds.max.y - this.body.bounds.min.y); // this.P5.stroke(255);
          // this.P5.translate(pos.x, pos.y);
          // this.P5.rect(pos.x, pos.y,this.width,this.height) ;
          // this.P5.textSize(5)
          // this.P5.text(this.body.wall_name,0,0);

          this.P5.pop();
        };

        return Wall;
      }(_BaseWall__WEBPACK_IMPORTED_MODULE_2__["default"]);
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = Wall;
      /***/
    },

    /***/
    "./src/configs/app.ts":
    /*!****************************!*\
      !*** ./src/configs/app.ts ***!
      \****************************/

    /***/
    function srcConfigsAppTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_78932__) {
      __nested_webpack_require_78932__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_78932__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });

      var AppConfig =
      /** @class */
      function () {
        function AppConfig() {}

        AppConfig.APP = {
          WIDTH: 550,
          HEIGHT: 500,
          TOPBUFFER: 50,
          SHOW_BODY: false,
          DEMO: true
        };
        AppConfig.HOLE = {
          DROP_POSITION_X: AppConfig.APP.WIDTH / 2,
          DROP_POSITION_Y: AppConfig.APP.TOPBUFFER - 10
        };
        AppConfig.PEG = {
          spacing: 30,
          rows: 17,
          radius: 2
        };
        AppConfig.DISC = {
          x: AppConfig.HOLE.DROP_POSITION_X,
          y: AppConfig.HOLE.DROP_POSITION_Y,
          tolerance: 1,
          radius: (AppConfig.PEG.spacing - 2 * AppConfig.PEG.radius - 3) / 2,
          real_width: function real_width() {
            return AppConfig.DISC.radius * 2;
          },
          image_ball_width: 29,
          image_ball_height: 29,
          image_width: 39,
          image_height: 39,
          image_ratio: function image_ratio() {
            return AppConfig.DISC.image_ball_width / AppConfig.DISC.image_width;
          },
          translate_x: function translate_x() {
            return (AppConfig.DISC.image_width - AppConfig.DISC.image_ball_width) / 2;
          },
          translate_y: function translate_y() {
            return (AppConfig.DISC.image_height - AppConfig.DISC.image_ball_height) / 2;
          },
          draw_width: function draw_width() {
            return AppConfig.DISC.real_width() / AppConfig.DISC.image_ratio();
          }
        };
        AppConfig.WALL = {
          height: 1,
          funnel_width: 5
        };
        AppConfig.BAG = {
          topBufferFromPeg: 30,
          heightBody: 10,
          texts: [1000, 500, 100, 10, 5, 0.1, 0.02, 0.01, 0.005, 0.01, 0.02, 0.1, 5, 10, 100, 500, 1000],
          colors: [[255, 50, 0], [255, 100, 0], [255, 150, 0], [255, 200, 0], [255, 255, 0], [200, 255, 0], [150, 255, 0], [100, 255, 0], [50, 255, 0], [100, 255, 0], [150, 255, 0], [200, 255, 0], [255, 255, 0], [255, 200, 0], [255, 150, 0], [255, 100, 0], [255, 50, 0]],
          path: [{
            x: 78.41999816894531,
            y: 1
          }, {
            x: 78.81401062011719,
            y: 3.4272117614746094
          }, {
            x: 79.12202453613281,
            y: 5.866900444030762
          }, {
            x: 79.36260223388672,
            y: 8.314196586608887
          }, {
            x: 79.54679870605469,
            y: 10.766397476196289
          }, {
            x: 79.68211364746094,
            y: 13.221792221069336
          }, {
            x: 79.77305603027344,
            y: 15.67923641204834
          }, {
            x: 79.82268524169922,
            y: 18.13786506652832
          }, {
            x: 79.83242797851562,
            y: 20.596975326538086
          }, {
            x: 79.80254364013672,
            y: 23.055925369262695
          }, {
            x: 79.73239135742188,
            y: 25.514053344726562
          }, {
            x: 79.61969757080078,
            y: 27.970590591430664
          }, {
            x: 79.46099090576172,
            y: 30.42458152770996
          }, {
            x: 79.2506103515625,
            y: 32.87466812133789
          }, {
            x: 78.97956085205078,
            y: 35.31877136230469
          }, {
            x: 78.63398742675781,
            y: 37.75339889526367
          }, {
            x: 77.2433853149414,
            y: 39.20463943481445
          }, {
            x: 74.80841064453125,
            y: 39.54740905761719
          }, {
            x: 72.36260223388672,
            y: 39.802310943603516
          }, {
            x: 69.91043090820312,
            y: 39.98651885986328
          }, {
            x: 67.45458984375,
            y: 40.1134147644043
          }, {
            x: 64.99678802490234,
            y: 40.193912506103516
          }, {
            x: 62.538021087646484,
            y: 40.23689651489258
          }, {
            x: 60.078914642333984,
            y: 40.24994659423828
          }, {
            x: 57.619781494140625,
            y: 40.23978042602539
          }, {
            x: 55.16078186035156,
            y: 40.21240234375
          }, {
            x: 52.701934814453125,
            y: 40.173370361328125
          }, {
            x: 50.24319076538086,
            y: 40.12825393676758
          }, {
            x: 47.78445816040039,
            y: 40.08246612548828
          }, {
            x: 45.32564163208008,
            y: 40.04153823852539
          }, {
            x: 42.866676330566406,
            y: 40.01167297363281
          }, {
            x: 40.407554626464844,
            y: 40.00000762939453
          }, {
            x: 37.94843292236328,
            y: 40.01131057739258
          }, {
            x: 35.48944091796875,
            y: 40.039939880371094
          }, {
            x: 33.03060531616211,
            y: 40.079402923583984
          }, {
            x: 30.57185173034668,
            y: 40.12396240234375
          }, {
            x: 28.11309242248535,
            y: 40.16823959350586
          }, {
            x: 25.65424156188965,
            y: 40.207305908203125
          }, {
            x: 23.195261001586914,
            y: 40.236083984375
          }, {
            x: 20.73613929748535,
            y: 40.24959182739258
          }, {
            x: 18.27700424194336,
            y: 40.24214172363281
          }, {
            x: 15.818105697631836,
            y: 40.20783996582031
          }, {
            x: 13.359911918640137,
            y: 40.139854431152344
          }, {
            x: 10.903237342834473,
            y: 40.03022384643555
          }, {
            x: 8.449390411376953,
            y: 39.86946105957031
          }, {
            x: 6.000489711761475,
            y: 39.646026611328125
          }, {
            x: 3.5599782466888428,
            y: 39.34489059448242
          }, {
            x: 1.367630124092102,
            y: 38.713314056396484
          }, {
            x: 0.9830066561698914,
            y: 36.284576416015625
          }, {
            x: 0.6825252771377563,
            y: 33.84394073486328
          }, {
            x: 0.44851380586624146,
            y: 31.39600944519043
          }, {
            x: 0.2700898051261902,
            y: 28.94337272644043
          }, {
            x: 0.14024192094802856,
            y: 26.487682342529297
          }, {
            x: 0.05445803701877594,
            y: 24.030054092407227
          }, {
            x: 0.010028660297393799,
            y: 21.571334838867188
          }, {
            x: 0.005484375171363354,
            y: 19.112194061279297
          }, {
            x: 0.040612947195768356,
            y: 16.653316497802734
          }, {
            x: 0.11625642329454422,
            y: 14.195351600646973
          }, {
            x: 0.23477691411972046,
            y: 11.739079475402832
          }, {
            x: 0.3998337388038635,
            y: 9.285518646240234
          }, {
            x: 0.6173803210258484,
            y: 6.836060523986816
          }, {
            x: 0.8967378735542297,
            y: 4.392895698547363
          }, {
            x: 1.2527118921279907,
            y: 1.9597785472869873
          }, {
            x: 2.8866617679595947,
            y: 0.7684714198112488
          }, {
            x: 5.329389572143555,
            y: 0.4865400195121765
          }, {
            x: 7.780893802642822,
            y: 0.29399389028549194
          }, {
            x: 10.236599922180176,
            y: 0.16445231437683105
          }, {
            x: 12.694310188293457,
            y: 0.08101105690002441
          }, {
            x: 15.152958869934082,
            y: 0.031763285398483276
          }, {
            x: 17.611997604370117,
            y: 0.007386131677776575
          }, {
            x: 20.071136474609375,
            y: 0.0001616298541193828
          }, {
            x: 21.376371383666992,
            y: 1.8802740573883057
          }, {
            x: 22.70690155029297,
            y: 3.946941614151001
          }, {
            x: 24.253293991088867,
            y: 5.8574957847595215
          }, {
            x: 25.997953414916992,
            y: 7.588865756988525
          }, {
            x: 27.92256736755371,
            y: 9.117594718933105
          }, {
            x: 30.0070858001709,
            y: 10.419736862182617
          }, {
            x: 32.22844314575195,
            y: 11.471447944641113
          }, {
            x: 34.559349060058594,
            y: 12.25046157836914
          }, {
            x: 36.96796417236328,
            y: 12.738701820373535
          }, {
            x: 39.4184455871582,
            y: 12.925004959106445
          }, {
            x: 41.873268127441406,
            y: 12.80765438079834
          }, {
            x: 44.29621505737305,
            y: 12.395698547363281
          }, {
            x: 46.65583419799805,
            y: 11.707709312438965
          }, {
            x: 48.92776107788086,
            y: 10.769457817077637
          }, {
            x: 51.199920654296875,
            y: 10
          }, {
            x: 52.97412872314453,
            y: 8.891738891601562
          }, {
            x: 54.882171630859375,
            y: 8
          }, {
            x: 56.244056701660156,
            y: 6.587970733642578
          }, {
            x: 57.41999816894531,
            y: 4.8555908203125
          }, {
            x: 58.854278564453125,
            y: 3.2828590869903564
          }, {
            x: 59.99763870239258,
            y: 1.2670775651931763
          }, {
            x: 61.54353332519531,
            y: 0
          }, {
            x: 64.00270080566406,
            y: 0
          }, {
            x: 66.46185302734375,
            y: 0
          }, {
            x: 68.9210205078125,
            y: 0
          }, {
            x: 71.38017272949219,
            y: 0
          }, {
            x: 73.83932495117188,
            y: 0
          }, {
            x: 76.29849243164062,
            y: 0
          }, {
            x: 78.41999816894531,
            y: 1
          }]
        };
        AppConfig.COLORS = ["#fbff00", "#009580", "#ba00e9", "#4056f1"];
        AppConfig.RUNTIME = {
          numberDiscInGame: 0
        };
        AppConfig.TEST = {
          count: -1,
          maximumDiscInGame: 100,
          minDistanceTime: 100,
          paths: ["18 52 86 120 154 188 222 256 292 326 362 398 434 470 506 542", "18 52 86 120 154 188 222 256 292 328 362 398 434 470 506 542", "18 52 86 120 154 188 222 256 292 328 364 398 434 470 506 542", "18 52 86 120 154 188 222 256 292 328 364 400 434 470 506 542", "18 52 86 120 154 188 222 256 292 328 364 400 436 470 506 542", "18 52 86 120 154 188 222 256 292 328 364 400 436 472 506 542", "18 52 86 120 154 188 222 256 292 328 364 400 436 472 508 542", "18 52 86 120 154 188 222 258 292 326 362 398 434 470 506 542", "18 52 86 120 154 188 222 258 292 328 362 398 434 470 506 542", "18 52 86 120 154 188 222 258 292 328 364 398 434 470 506 542", "18 52 86 120 154 188 222 258 292 328 364 400 434 470 506 542", "18 52 86 120 154 188 222 258 292 328 364 400 436 470 506 542"]
        };
        return AppConfig;
      }();
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = AppConfig;
      /***/
    },

    /***/
    "./src/events/BagDiscCollision.ts":
    /*!****************************************!*\
      !*** ./src/events/BagDiscCollision.ts ***!
      \****************************************/

    /***/
    function srcEventsBagDiscCollisionTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_90968__) {
      __nested_webpack_require_90968__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_90968__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _configs_app__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_90968__(
      /*! ../configs/app */
      "./src/configs/app.ts");
      /* harmony import */


      var _Collision__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_90968__(
      /*! ./Collision */
      "./src/events/Collision.ts");

      var __extends =  false || function () {
        var _extendStatics12 = function extendStatics(d, b) {
          _extendStatics12 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics12(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics12(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      var BagDiscCollision =
      /** @class */
      function (_super) {
        __extends(BagDiscCollision, _super);

        function BagDiscCollision() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        BagDiscCollision.prototype.init = function (disc, bag) {
          this.disc = disc;
          this.enemy = this.bag = bag;
        };

        BagDiscCollision.prototype.action = function () {
          _configs_app__WEBPACK_IMPORTED_MODULE_0__["default"].RUNTIME.numberDiscInGame--;
          this.discContainer.removeById(this.disc.id);
        };

        return BagDiscCollision;
      }(_Collision__WEBPACK_IMPORTED_MODULE_1__["default"]);
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = BagDiscCollision;
      /***/
    },

    /***/
    "./src/events/Collision.ts":
    /*!*********************************!*\
      !*** ./src/events/Collision.ts ***!
      \*********************************/

    /***/
    function srcEventsCollisionTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_93610__) {
      __nested_webpack_require_93610__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_93610__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });

      var Collision =
      /** @class */
      function () {
        function Collision(world, discContainer) {
          this.world = world;
          this.discContainer = discContainer;
        }

        return Collision;
      }();
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = Collision;
      /***/
    },

    /***/
    "./src/events/CollisionProvider.ts":
    /*!*****************************************!*\
      !*** ./src/events/CollisionProvider.ts ***!
      \*****************************************/

    /***/
    function srcEventsCollisionProviderTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_94577__) {
      __nested_webpack_require_94577__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_94577__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _BagDiscCollision__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_94577__(
      /*! ./BagDiscCollision */
      "./src/events/BagDiscCollision.ts");
      /* harmony import */


      var _PegDiscCollision__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_94577__(
      /*! ./PegDiscCollision */
      "./src/events/PegDiscCollision.ts");

      var CollisionProvider =
      /** @class */
      function () {
        function CollisionProvider() {}

        CollisionProvider.getCollisionTarget = function (world, discContainer, bodyA, bodyB) {
          if (bodyA.label == 'bag' && bodyB.label == 'disc' || bodyA.label == 'disc' && bodyB.label == 'bag') {
            var bag = bodyA.label == 'bag' ? bodyA : bodyB;
            var disc = bodyA.label == 'disc' ? bodyA : bodyB;

            if (!CollisionProvider.CollisionItems['BagDiscCollision']) {
              CollisionProvider.CollisionItems['BagDiscCollision'] = new _BagDiscCollision__WEBPACK_IMPORTED_MODULE_0__["default"](world, discContainer);
            }

            var c = CollisionProvider.CollisionItems['BagDiscCollision'];
            c.init(disc, bag);
            return c;
          } else if (bodyA.label == 'peg' && bodyB.label == 'disc' || bodyA.label == 'disc' && bodyB.label == 'peg') {
            var peg = bodyA.label == 'peg' ? bodyA : bodyB;
            var disc = bodyA.label == 'disc' ? bodyA : bodyB;

            if (!CollisionProvider.CollisionItems['PegDiscCollision']) {
              CollisionProvider.CollisionItems['PegDiscCollision'] = new _PegDiscCollision__WEBPACK_IMPORTED_MODULE_1__["default"](world, discContainer);
            }

            var c = CollisionProvider.CollisionItems['PegDiscCollision'];
            c.init(disc, peg);
            return c;
          }

          return null;
        };

        CollisionProvider.CollisionItems = {};
        return CollisionProvider;
      }();
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = CollisionProvider;
      /***/
    },

    /***/
    "./src/events/PegDiscCollision.ts":
    /*!****************************************!*\
      !*** ./src/events/PegDiscCollision.ts ***!
      \****************************************/

    /***/
    function srcEventsPegDiscCollisionTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_97239__) {
      __nested_webpack_require_97239__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_97239__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _Collision__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_97239__(
      /*! ./Collision */
      "./src/events/Collision.ts");

      var __extends =  false || function () {
        var _extendStatics13 = function extendStatics(d, b) {
          _extendStatics13 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics13(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics13(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      var PegDiscCollision =
      /** @class */
      function (_super) {
        __extends(PegDiscCollision, _super);

        function PegDiscCollision() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        PegDiscCollision.prototype.init = function (disc, peg) {
          this.disc = disc;
          this.enemy = this.peg = peg;
        };

        PegDiscCollision.prototype.action = function () {
          this.peg.game_active = 1;
        };

        return PegDiscCollision;
      }(_Collision__WEBPACK_IMPORTED_MODULE_0__["default"]);
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = PegDiscCollision;
      /***/
    },

    /***/
    "./src/index.ts":
    /*!**********************!*\
      !*** ./src/index.ts ***!
      \**********************/

    /***/
    function srcIndexTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_99554__) {
      __nested_webpack_require_99554__.r(__webpack_exports__);
      /* harmony import */


      var p5__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_99554__(
      /*! p5 */
      "./node_modules/p5/lib/p5.min.js");
      /* harmony import */


      var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_99554__.n(p5__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _P5Wrapper__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_99554__(
      /*! ./P5Wrapper */
      "./src/P5Wrapper.ts");

      var currentGame;

      function makeGame() {
        var tmp = function tmp(p) {
          var p5w = currentGame = new _P5Wrapper__WEBPACK_IMPORTED_MODULE_1__.P5Wrapper(p);

          p.preload = function () {
            p5w.preload();
          };

          p.setup = function () {
            p5w.setup();
          };

          p.draw = function () {
            p5w.draw();
          };
        };

        return new p5__WEBPACK_IMPORTED_MODULE_0__(tmp);
      }

      var hostname = window.location.hostname; // if (hostname != "localhost" && hostname != "127.0.0.1") {
      //     document.write("Ahihi Stupid");
      // } else {

      makeGame(); // }

      window["ShortPlinko"] = {
        blurWhenInactive: function blurWhenInactive() {// document.addEventListener("visibilitychange", function (event) {
          //     if (document.hidden) {
          //         document.querySelector("#game").classList.add("inactive");
          //         document
          //             .querySelector("#warning-inactive")
          //             .classList.remove("d-none");
          //     }
          // });
        },
        getGame: function getGame() {
          return currentGame;
        },
        createDisc: function createDisc(path, type) {
          return this.getGame().matterWrapper.discContainer.createDisc(path, type);
        },
        init: function init() {
          this.blurWhenInactive();
        }
      };
      window["ShortPlinko"].init();
      /***/
    },

    /***/
    "./src/sprites/Bug.ts":
    /*!****************************!*\
      !*** ./src/sprites/Bug.ts ***!
      \****************************/

    /***/
    function srcSpritesBugTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_101837__) {
      __nested_webpack_require_101837__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_101837__.d(__webpack_exports__, {
        /* harmony export */
        "Bug": function Bug() {
          return (
            /* binding */
            _Bug
          );
        }
        /* harmony export */

      });

      var _Bug =
      /** @class */
      function () {
        function Bug(P5, x, y, r) {
          this.P5 = P5;
          this.x = x;
          this.y = y;
          this.r = r;
          this.rangex = 3;
          this.rangey = 2;
          this.color = this.P5.color(255);
          var ran = this.P5.random(3);

          if (ran < 1) {
            this.color = this.P5.color(255, 100, 20, 255); // orange
          } else if (ran >= 1 && ran < 2) {
            this.color = this.P5.color(255, 200, 10, 255); // yellow
          } else if (ran >= 2) {
            this.color = this.P5.color(255, 80, 5, 255); // reddish
          }
        }

        Bug.prototype.show = function () {
          this.P5.push(); // this.P5.translate(this.x, this.y);

          this.P5.noStroke();
          this.P5.fill(this.color);
          this.P5.ellipse(this.x, this.y, this.r);
          this.P5.pop();
        };

        Bug.prototype.move = function () {
          this.x += this.P5.random(-this.rangex, this.rangex);
          this.y -= this.P5.random(1, this.rangey);
        };

        Bug.prototype.shrink = function () {
          this.r -= 0.4;
        };

        Bug.prototype.finished = function () {
          return this.r < 0;
        };

        return Bug;
      }();
      /***/

    },

    /***/
    "./src/sprites/Fire.ts":
    /*!*****************************!*\
      !*** ./src/sprites/Fire.ts ***!
      \*****************************/

    /***/
    function srcSpritesFireTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_103726__) {
      __nested_webpack_require_103726__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_103726__.d(__webpack_exports__, {
        /* harmony export */
        "FireType": function FireType() {
          return (
            /* binding */
            _FireType
          );
        },

        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _Bug__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_103726__(
      /*! ./Bug */
      "./src/sprites/Bug.ts");

      var Fire =
      /** @class */
      function () {
        function Fire(P5, fileType) {
          if (fileType === void 0) {
            fileType = _FireType.NORMAL;
          }

          this.P5 = P5;
          this.fileType = fileType;
          this.bugs = [];
          this.numBugs = 1;
          this.numBugs = fileType;
        }

        Fire.prototype.show = function (x, y) {
          if (x === void 0) {
            x = 200;
          }

          if (y === void 0) {
            y = 300;
          }

          for (var i = this.bugs.length - 1; i >= 0; i--) {
            var bug = this.bugs[i];
            bug.move();
            bug.show();
            bug.shrink();

            if (bug.finished()) {
              this.bugs.splice(i, 1);
            }
          }

          for (var i = 0; i < this.numBugs; i++) {
            var radius = this.P5.random(5, 10);
            var b = new _Bug__WEBPACK_IMPORTED_MODULE_0__.Bug(this.P5, x, y, radius);
            this.bugs.push(b);
          }
        };

        return Fire;
      }();
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = Fire;

      var _FireType;

      (function (FireType) {
        FireType[FireType["NORMAL"] = 0] = "NORMAL";
        FireType[FireType["MID"] = 1] = "MID";
        FireType[FireType["HOT"] = 2] = "HOT";
      })(_FireType || (_FireType = {}));
      /***/

    },

    /***/
    "./src/sprites/Light.ts":
    /*!******************************!*\
      !*** ./src/sprites/Light.ts ***!
      \******************************/

    /***/
    function srcSpritesLightTs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_106010__) {
      __nested_webpack_require_106010__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_106010__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _Loader__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_106010__(
      /*! ../Loader */
      "./src/Loader.ts");

      var Light =
      /** @class */
      function () {
        function Light(P5, name, options) {
          if (options === void 0) {
            options = {
              rate: 2,
              time: 15,
              x: 0,
              y: 0,
              percentIncrement: 3,
              width: 20,
              height: 20
            };
          }

          this.P5 = P5;
          this.name = name;
          this.options = options;
          this.tick = 0;
          this.count = 0;
          this.image = _Loader__WEBPACK_IMPORTED_MODULE_0__["default"].getImage(this.name);
        }

        Light.prototype.reset = function () {
          if (this.finish) {
            this.finish();
          }
        };

        Light.prototype.show = function () {
          if (this.count > this.options.time) {
            this.reset();
            this.count = 0;
            return;
          }

          if (this.tick % this.options.rate == 0) {
            this.drawImage();
            this.count++;
          }

          this.tick++;
        };

        Light.prototype.drawImage = function () {
          var p = (100 + this.options.percentIncrement * this.count) / 100;
          var w = this.options.width * p;
          var h = this.options.height * p;

          if (this.image) {
            this.P5.image(this.image, this.options.x, this.options.y, w, h);
          }
        };

        return Light;
      }();
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = Light;
      /***/
    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __nested_webpack_require_108260__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    var cachedModule = __webpack_module_cache__[moduleId];
    /******/

    if (cachedModule !== undefined) {
      /******/
      return cachedModule.exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_108260__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __nested_webpack_require_108260__.m = __webpack_modules__;
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/chunk loaded */

  /******/

  (function () {
    /******/
    var deferred = [];
    /******/

    __nested_webpack_require_108260__.O = function (result, chunkIds, fn, priority) {
      /******/
      if (chunkIds) {
        /******/
        priority = priority || 0;
        /******/

        for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) {
          deferred[i] = deferred[i - 1];
        }
        /******/


        deferred[i] = [chunkIds, fn, priority];
        /******/

        return;
        /******/
      }
      /******/


      var notFulfilled = Infinity;
      /******/

      for (var i = 0; i < deferred.length; i++) {
        /******/
        var _deferred$i = _slicedToArray(deferred[i], 3),
            chunkIds = _deferred$i[0],
            fn = _deferred$i[1],
            priority = _deferred$i[2];
        /******/


        var fulfilled = true;
        /******/

        for (var j = 0; j < chunkIds.length; j++) {
          /******/
          if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__nested_webpack_require_108260__.O).every(function (key) {
            return __nested_webpack_require_108260__.O[key](chunkIds[j]);
          })) {
            /******/
            chunkIds.splice(j--, 1);
            /******/
          } else {
            /******/
            fulfilled = false;
            /******/

            if (priority < notFulfilled) notFulfilled = priority;
            /******/
          }
          /******/

        }
        /******/


        if (fulfilled) {
          /******/
          deferred.splice(i--, 1);
          /******/

          var r = fn();
          /******/

          if (r !== undefined) result = r;
          /******/
        }
        /******/

      }
      /******/


      return result;
      /******/
    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/compat get default export */

  /******/


  (function () {
    /******/
    // getDefaultExport function for compatibility with non-harmony modules

    /******/
    __nested_webpack_require_108260__.n = function (module) {
      /******/
      var getter = module && module.__esModule ?
      /******/
      function () {
        return module['default'];
      } :
      /******/
      function () {
        return module;
      };
      /******/

      __nested_webpack_require_108260__.d(getter, {
        a: getter
      });
      /******/


      return getter;
      /******/
    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/define property getters */

  /******/


  (function () {
    /******/
    // define getter functions for harmony exports

    /******/
    __nested_webpack_require_108260__.d = function (exports, definition) {
      /******/
      for (var key in definition) {
        /******/
        if (__nested_webpack_require_108260__.o(definition, key) && !__nested_webpack_require_108260__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/

      }
      /******/

    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/global */

  /******/


  (function () {
    /******/
    __nested_webpack_require_108260__.g = function () {
      /******/
      if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === 'object') return globalThis;
      /******/

      try {
        /******/
        return this || new Function('return this')();
        /******/
      } catch (e) {
        /******/
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') return window;
        /******/
      }
      /******/

    }();
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/


  (function () {
    /******/
    __nested_webpack_require_108260__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/make namespace object */

  /******/


  (function () {
    /******/
    // define __esModule on exports

    /******/
    __nested_webpack_require_108260__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/jsonp chunk loading */

  /******/


  (function () {
    /******/
    // no baseURI

    /******/

    /******/
    // object to store loaded and loading chunks

    /******/
    // undefined = chunk not loaded, null = chunk preloaded/prefetched

    /******/
    // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded

    /******/
    var installedChunks = {
      /******/
      "main": 0
      /******/

    };
    /******/

    /******/
    // no chunk on demand loading

    /******/

    /******/
    // no prefetching

    /******/

    /******/
    // no preloaded

    /******/

    /******/
    // no HMR

    /******/

    /******/
    // no HMR manifest

    /******/

    /******/

    __nested_webpack_require_108260__.O.j = function (chunkId) {
      return installedChunks[chunkId] === 0;
    };
    /******/

    /******/
    // install a JSONP callback for chunk loading

    /******/


    var webpackJsonpCallback = function webpackJsonpCallback(parentChunkLoadingFunction, data) {
      /******/
      var _data = _slicedToArray(data, 3),
          chunkIds = _data[0],
          moreModules = _data[1],
          runtime = _data[2];
      /******/
      // add "moreModules" to the modules object,

      /******/
      // then flag all "chunkIds" as loaded and fire callback

      /******/


      var moduleId,
          chunkId,
          i = 0;
      /******/

      if (chunkIds.some(function (id) {
        return installedChunks[id] !== 0;
      })) {
        /******/
        for (moduleId in moreModules) {
          /******/
          if (__nested_webpack_require_108260__.o(moreModules, moduleId)) {
            /******/
            __nested_webpack_require_108260__.m[moduleId] = moreModules[moduleId];
            /******/
          }
          /******/

        }
        /******/


        if (runtime) var result = runtime(__nested_webpack_require_108260__);
        /******/
      }
      /******/


      if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      /******/

      for (; i < chunkIds.length; i++) {
        /******/
        chunkId = chunkIds[i];
        /******/

        if (__nested_webpack_require_108260__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
          /******/
          installedChunks[chunkId][0]();
          /******/
        }
        /******/


        installedChunks[chunkId] = 0;
        /******/
      }
      /******/


      return __nested_webpack_require_108260__.O(result);
      /******/
    };
    /******/

    /******/


    var chunkLoadingGlobal = self["webpackChunkplinko"] = self["webpackChunkplinko"] || [];
    /******/

    chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    /******/

    chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
    /******/
  })();
  /******/

  /************************************************************************/

  /******/

  /******/
  // startup

  /******/
  // Load entry module and return exports

  /******/
  // This entry module depends on other loaded chunks and execution need to be delayed

  /******/


  var __webpack_exports__ = __nested_webpack_require_108260__.O(undefined, ["vendors-node_modules_matter-js_build_matter_js-node_modules_p5_lib_p5_min_js"], function () {
    return __nested_webpack_require_108260__("./src/index.ts");
  });
  /******/


  __webpack_exports__ = __nested_webpack_require_108260__.O(__webpack_exports__);
  /******/

  /******/
})();
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!************************************************!*\
  !*** ./public/theme/frontend/plinko/js/gui.js ***!
  \************************************************/
var _GAME_PLINKO = function () {
  var _ = function _(querySelectorAll) {
    return document.querySelector(querySelectorAll);
  };

  var _All = function _All(querySelectorAll) {
    return document.querySelectorAll(querySelectorAll);
  };

  var changeInput = function changeInput() {
    var minus = _(".minus");

    var plus = _(".plus");

    var inputQty = _(".qty_bet input");

    var min = inputQty.getAttribute("min");
    var max = inputQty.getAttribute("max");
    minus.addEventListener("click", function () {
      var valueInput = parseInt(inputQty.value);

      if (valueInput == 1 || valueInput < 1) {
        inputQty.value = 1;
        return false;
      }

      valueInput--;
      valueInput = Math.max(valueInput, min);
      inputQty.value = valueInput;
    });
    plus.addEventListener("click", function () {
      var valueInput = parseInt(inputQty.value);
      valueInput++;
      valueInput = Math.min(valueInput, max);
      inputQty.value = valueInput;
    });
  };

  var changeMode = function changeMode() {
    var lsMode = _All(".label_choose.mode");

    var autoMode = _(".qty_box");

    var inputQty = _(".qty_box input[name='qty']");

    lsMode.forEach(function (e, i) {
      e.addEventListener("click", function () {
        var _modeInput = e.querySelector("input");

        var _modeValue = _modeInput.value;

        if (_modeValue == "auto") {
          autoMode.classList.add("none");
          autoMode.classList.remove("show");
          inputQty.disabled = false;
        } else {
          inputQty.disabled = true;
          autoMode.classList.remove("none");
          autoMode.classList.add("show");
        }
      });
    });
  };

  return {
    _: function _() {
      changeInput();
      changeMode();
    }
  };
}();

window.addEventListener("DOMContentLoaded", function () {
  _GAME_PLINKO._();
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!***************************************************!*\
  !*** ./public/theme/frontend/plinko/js/plinko.js ***!
  \***************************************************/
var PLINKO = {
  _: function _(selector) {
    return document.querySelector(selector);
  },
  playGame: function playGame() {
    XHR.send({
      url: "plinko-play",
      method: "POST",
      data: {
        type: this._("[name=risk]:checked").value,
        mode: this._("[name=mode]:checked").value,
        qty: this._("[name=qty]").value
      }
    }).then(function (res) {});
  }
};
var PLINKO_UI = {
  init: function init() {
    var button = PLINKO._("button.play");

    button.addEventListener("click", function (e) {
      PLINKO.playGame();
    });
  }
};
window.addEventListener("DOMContentLoaded", function () {
  this.setTimeout(function () {
    PLINKO_UI.init();
  }, 100);
});
})();

/******/ })()
;