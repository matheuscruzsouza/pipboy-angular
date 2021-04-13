(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.sass":
  /*!************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.sass ***!
    \************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesSassLoaderDistCjsJsSrcStylesSass(module, exports, __webpack_require__) {
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
    /*! ../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js");

    exports = ___CSS_LOADER_API_IMPORT___(true); // Module

    exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* Source tutorial: https://codemyui.com/fallout-pip-boy-screen-in-css-and-html/ */\nbody {\n  background-color: #000;\n  margin: 0;\n  overflow: hidden;\n  padding: 0;\n}\n.screen {\n  -webkit-animation: colorPulse 5s infinite ease-in-out;\n          animation: colorPulse 5s infinite ease-in-out;\n  background-image: radial-gradient(#444, #111);\n  box-shadow: 0 0 5vmin 1vmin #000 inset;\n  box-sizing: border-box;\n  font-family: \"Fira Mono\", monospace;\n  font-size: 20px;\n  height: 100vh;\n  overflow: hidden;\n  padding: 7vmin;\n  width: 100vw;\n}\n.screen:before {\n  -webkit-animation: wave 10s infinite ease-in-out;\n          animation: wave 10s infinite ease-in-out;\n  content: \"\";\n  height: 20vh;\n  left: 0;\n  opacity: 0.5;\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  pointer-events: none;\n}\n.screen:after {\n  background-image: linear-gradient(transparent, transparent 3px, #222);\n  background-size: 4px 4px;\n  bottom: 0;\n  content: \"\";\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 2;\n}\np.cursor:last-child:after {\n  -webkit-animation: blink 1s infinite;\n          animation: blink 1s infinite;\n  content: \"_\";\n}\n@-webkit-keyframes colorPulse {\n  0%,\n  100% {\n    color: #0c0;\n  }\n  48%,\n  52% {\n    color: #090;\n  }\n  50% {\n    color: #060;\n  }\n}\n@keyframes colorPulse {\n  0%,\n  100% {\n    color: #0c0;\n  }\n  48%,\n  52% {\n    color: #090;\n  }\n  50% {\n    color: #060;\n  }\n}\n@-webkit-keyframes wave {\n  0% {\n    box-shadow: 0 -10vh 20vh #0c0;\n    top: -100vh;\n  }\n  48%,\n  52% {\n    box-shadow: 0 -10vh 20vh #090;\n  }\n  50% {\n    box-shadow: 0 -10vh 20vh #060;\n  }\n  100% {\n    box-shadow: 0 -10vh 20vh #0c0;\n    top: 200vh;\n  }\n}\n@keyframes wave {\n  0% {\n    box-shadow: 0 -10vh 20vh #0c0;\n    top: -100vh;\n  }\n  48%,\n  52% {\n    box-shadow: 0 -10vh 20vh #090;\n  }\n  50% {\n    box-shadow: 0 -10vh 20vh #060;\n  }\n  100% {\n    box-shadow: 0 -10vh 20vh #0c0;\n    top: 200vh;\n  }\n}\n@-webkit-keyframes blink {\n  50% {\n    opacity: 0;\n  }\n}\n@keyframes blink {\n  50% {\n    opacity: 0;\n  }\n}\n.info-bar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.info-bar p {\n  margin-top: 35px;\n  text-align: center;\n}\n.weapon {\n  background: url(\"/assets/images/HUD/Menu/icon_52.svg\") center no-repeat;\n  background-size: 70px;\n  width: 100px;\n  height: 65px;\n  background-color: #0c02;\n}\n.aim {\n  background: url(\"/assets/images/HUD/Menu/icon_26.svg\") center no-repeat;\n  background-size: 20px;\n  background-position-y: 8px;\n  margin: 0 5px;\n  color: var(--text-color);\n  font-family: \"Monofonto\";\n  width: 35px;\n  height: 65px;\n  background-color: #0c02;\n}\n.helmet {\n  background: url(\"/assets/images/HUD/Menu/icon_54.svg\") center no-repeat;\n  background-size: 70px;\n  width: 85px;\n  height: 65px;\n  background-color: #0c02;\n}\n.shield {\n  background: url(\"/assets/images/HUD/Menu/icon_14.svg\") center no-repeat;\n  background-size: 20px;\n  background-position-y: 6px;\n  margin: 0 2.5px 0 5px;\n  font-family: \"Monofonto\";\n  width: 35px;\n  height: 65px;\n  background-color: #0c02;\n}\n.voltage {\n  background: url(\"/assets/images/HUD/Menu/icon_20.svg\") center no-repeat;\n  background-size: 18px;\n  background-position-y: 6px;\n  margin: 0 2.5px;\n  font-family: \"Monofonto\";\n  width: 35px;\n  height: 65px;\n  background-color: #0c02;\n}\n.nuclear {\n  background: url(\"/assets/images/HUD/Menu/icon_24.svg\") center no-repeat;\n  background-size: 20px;\n  background-position-y: 8px;\n  margin: 0 2.5px;\n  font-family: \"Monofonto\";\n  width: 35px;\n  height: 65px;\n  background-color: #0c02;\n}\n/* container properties */\n.scrollbar {\n  width: 100%;\n  max-width: 100%;\n  height: 400px;\n  background-color: #004100;\n  overflow-y: scroll;\n}\n/* customize scrollbar css */\n#scrollbar-custom::-webkit-scrollbar {\n  display: none;\n  width: 5px;\n  background-color: #cccccc;\n}\n#scrollbar-custom::-webkit-scrollbar:horizontal {\n  height: 5px;\n}\n#scrollbar-custom::-webkit-scrollbar-track {\n  border: 1px #222222 solid;\n  border-radius: 10px;\n  box-shadow: 0 0 6px #222222 inset;\n}\n#scrollbar-custom::-webkit-scrollbar-thumb {\n  background-color: #00cc00;\n  border: 1px solid #004100;\n  border-radius: 16px;\n}\n#scrollbar-custom::-webkit-scrollbar-thumb:hover {\n  background-color: #00cc00;\n  border: 1px solid #00cc00;\n}\n#scrollbar-custom::-webkit-scrollbar-thumb:active {\n  background-color: #00cc00;\n  border: 1px solid #004100;\n}\n@font-face {\n    font-family: 'Monofonto';\n    src: url('Monofonto-Regular.woff2') format('woff2'),\n        url('Monofonto-Regular.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n:root {\n  --text-color: #0c0;\n  --section-color: #004100;\n  --background-color: #222;\n}\n* {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n*:focus {\n  outline: none !important;\n}\nbody {\n  background-color: var(--background-color);\n  height: 95vh;\n  filter: blur(1);\n  cursor: url(\"/assets/images/cursor.png\"), auto;\n}\n.row {\n  display: flex;\n  flex-direction: row;\n}", "", {
      "version": 3,
      "sources": ["/home/matheus/Documents/Programação/Projetos/Pipboy-angular/pipboy-angular/src/styles.sass", "assets/css/pipboy.css", "assets/css/pipboy2.css", "assets/font/monofonto/stylesheet.css", "styles.sass"],
      "names": [],
      "mappings": "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",
      "file": "styles.sass",
      "sourcesContent": ["/* You can add global styles to this file, and also import other style files */\n\n@import \"assets/css/pipboy.css\"\n@import \"assets/css/pipboy2.css\"\n@import \"assets/font/monofonto/stylesheet.css\"\n\n:root\n  --text-color: #0c0\n  --section-color: #004100\n  --background-color: #222\n\n*\n  -webkit-touch-callout: none\n  -webkit-user-select: none\n  -khtml-user-select: none\n  -moz-user-select: none\n  -ms-user-select: none\n  user-select: none\n\n*:focus\n  outline: none !important\n\nbody\n  background-color: var(--background-color)\n  height: 95vh\n  filter: blur(1)\n  cursor: url('/assets/images/cursor.png'), auto\n\n.row\n  display: flex\n  flex-direction: row\n\n.main-screen\n  // Conversor de branco para colorido\n  // filter: invert(20%) sepia(50%) hue-rotate(80deg) saturate(15)\n  // filter: invert(26%) sepia(5%) saturate(533%) hue-rotate(-376deg) brightness(71%) contrast(174%)\n", "/* Source tutorial: https://codemyui.com/fallout-pip-boy-screen-in-css-and-html/ */\n\nbody {\n  background-color: #000;\n  margin: 0;\n  overflow: hidden;\n  padding: 0;\n}\n\n.screen {\n  animation: colorPulse 5s infinite ease-in-out;\n  background-image: radial-gradient(#444, #111);\n  box-shadow: 0 0 5vmin 1vmin #000 inset;\n  box-sizing: border-box;\n  font-family: \"Fira Mono\", monospace;\n  font-size: 20px;\n  height: 100vh;\n  overflow: hidden;\n  padding: 7vmin;\n  width: 100vw;\n}\n\n.screen:before {\n  animation: wave 10s infinite ease-in-out;\n  content: \"\";\n  height: 20vh;\n  left: 0;\n  opacity: 0.5;\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  pointer-events: none;\n}\n\n.screen:after {\n  background-image: linear-gradient(transparent, transparent 3px, #222);\n  background-size: 4px 4px;\n  bottom: 0;\n  content: \"\";\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 2;\n}\n\np.cursor:last-child:after {\n  animation: blink 1s infinite;\n  content: \"_\";\n}\n\n@keyframes colorPulse {\n  0%,\n  100% {\n    color: #0c0;\n  }\n  48%,\n  52% {\n    color: #090;\n  }\n  50% {\n    color: #060;\n  }\n}\n\n@keyframes wave {\n  0% {\n    box-shadow: 0 -10vh 20vh #0c0;\n    top: -100vh;\n  }\n  48%,\n  52% {\n    box-shadow: 0 -10vh 20vh #090;\n  }\n  50% {\n    box-shadow: 0 -10vh 20vh #060;\n  }\n  100% {\n    box-shadow: 0 -10vh 20vh #0c0;\n    top: 200vh;\n  }\n}\n\n@keyframes blink {\n  50% {\n    opacity: 0;\n  }\n}\n", ".info-bar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.info-bar p {\n  margin-top: 35px;\n  text-align: center;\n}\n\n.weapon {\n  background: url(\"/assets/images/HUD/Menu/icon_52.svg\") center no-repeat;\n  background-size: 70px;\n  width: 100px;\n  height: 65px;\n  background-color: #0c02;\n}\n\n.aim {\n  background: url(\"/assets/images/HUD/Menu/icon_26.svg\") center no-repeat;\n  background-size: 20px;\n  background-position-y: 8px;\n  margin: 0 5px;\n  color: var(--text-color);\n  font-family: \"Monofonto\";\n  width: 35px;\n  height: 65px;\n  background-color: #0c02;\n}\n\n.helmet {\n  background: url(\"/assets/images/HUD/Menu/icon_54.svg\") center no-repeat;\n  background-size: 70px;\n  width: 85px;\n  height: 65px;\n  background-color: #0c02;\n}\n\n.shield {\n  background: url(\"/assets/images/HUD/Menu/icon_14.svg\") center no-repeat;\n  background-size: 20px;\n  background-position-y: 6px;\n  margin: 0 2.5px 0 5px;\n  font-family: \"Monofonto\";\n  width: 35px;\n  height: 65px;\n  background-color: #0c02;\n}\n\n.voltage {\n  background: url(\"/assets/images/HUD/Menu/icon_20.svg\") center no-repeat;\n  background-size: 18px;\n  background-position-y: 6px;\n  margin: 0 2.5px;\n  font-family: \"Monofonto\";\n  width: 35px;\n  height: 65px;\n  background-color: #0c02;\n}\n\n.nuclear {\n  background: url(\"/assets/images/HUD/Menu/icon_24.svg\") center no-repeat;\n  background-size: 20px;\n  background-position-y: 8px;\n  margin: 0 2.5px;\n  font-family: \"Monofonto\";\n  width: 35px;\n  height: 65px;\n  background-color: #0c02;\n}\n\n/* container properties */\n.scrollbar {\n  width: 100%;\n  max-width: 100%;\n  height: 400px;\n  background-color: #004100;\n  overflow-y: scroll;\n}\n\n/* customize scrollbar css */\n#scrollbar-custom::-webkit-scrollbar {\n  display: none;\n  width: 5px;\n  background-color: #cccccc;\n}\n#scrollbar-custom::-webkit-scrollbar:horizontal {\n  height: 5px;\n}\n#scrollbar-custom::-webkit-scrollbar-track {\n  border: 1px #222222 solid;\n  border-radius: 10px;\n  -webkit-box-shadow: 0 0 6px #222222 inset;\n  box-shadow: 0 0 6px #222222 inset;\n}\n#scrollbar-custom::-webkit-scrollbar-thumb {\n  background-color: #00cc00;\n  border: 1px solid #004100;\n  border-radius: 16px;\n}\n#scrollbar-custom::-webkit-scrollbar-thumb:hover {\n  background-color: #00cc00;\n  border: 1px solid #00cc00;\n}\n#scrollbar-custom::-webkit-scrollbar-thumb:active {\n  background-color: #00cc00;\n  border: 1px solid #004100;\n}\n", "@font-face {\n    font-family: 'Monofonto';\n    src: url('Monofonto-Regular.woff2') format('woff2'),\n        url('Monofonto-Regular.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n\n", "/* You can add global styles to this file, and also import other style files */\n@import \"assets/css/pipboy.css\";\n@import \"assets/css/pipboy2.css\";\n@import \"assets/font/monofonto/stylesheet.css\";\n:root {\n  --text-color: #0c0;\n  --section-color: #004100;\n  --background-color: #222;\n}\n\n* {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n*:focus {\n  outline: none !important;\n}\n\nbody {\n  background-color: var(--background-color);\n  height: 95vh;\n  filter: blur(1);\n  cursor: url(\"/assets/images/cursor.png\"), auto;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n}"]
    }]); // Exports

    module.exports = exports;
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
    "use strict";
    /*
      MIT License http://www.opensource.org/licenses/mit-license.php
      Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    // eslint-disable-next-line func-names

    module.exports = function (useSourceMap) {
      var list = []; // return the list of modules as css string

      list.toString = function toString() {
        return this.map(function (item) {
          var content = cssWithMappingToString(item, useSourceMap);

          if (item[2]) {
            return "@media ".concat(item[2], " {").concat(content, "}");
          }

          return content;
        }).join('');
      }; // import a list of modules into the list
      // eslint-disable-next-line func-names


      list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
          // eslint-disable-next-line no-param-reassign
          modules = [[null, modules, '']];
        }

        var alreadyImportedModules = {};

        if (dedupe) {
          for (var i = 0; i < this.length; i++) {
            // eslint-disable-next-line prefer-destructuring
            var id = this[i][0];

            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
        }

        for (var _i = 0; _i < modules.length; _i++) {
          var item = [].concat(modules[_i]);

          if (dedupe && alreadyImportedModules[item[0]]) {
            // eslint-disable-next-line no-continue
            continue;
          }

          if (mediaQuery) {
            if (!item[2]) {
              item[2] = mediaQuery;
            } else {
              item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
            }
          }

          list.push(item);
        }
      };

      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

      var cssMapping = item[3];

      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
          return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    } // Adapted from convert-source-map (MIT)


    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
      return "/*# ".concat(data, " */");
    }
    /***/

  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    var stylesInDom = [];

    function getIndexByIdentifier(identifier) {
      var result = -1;

      for (var i = 0; i < stylesInDom.length; i++) {
        if (stylesInDom[i].identifier === identifier) {
          result = i;
          break;
        }
      }

      return result;
    }

    function modulesToDom(list, options) {
      var idCountMap = {};
      var identifiers = [];

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var count = idCountMap[id] || 0;
        var identifier = "".concat(id, " ").concat(count);
        idCountMap[id] = count + 1;
        var index = getIndexByIdentifier(identifier);
        var obj = {
          css: item[1],
          media: item[2],
          sourceMap: item[3]
        };

        if (index !== -1) {
          stylesInDom[index].references++;
          stylesInDom[index].updater(obj);
        } else {
          stylesInDom.push({
            identifier: identifier,
            updater: addStyle(obj, options),
            references: 1
          });
        }

        identifiers.push(identifier);
      }

      return identifiers;
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');
      var attributes = options.attributes || {};

      if (typeof attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          attributes.nonce = nonce;
        }
      }

      Object.keys(attributes).forEach(function (key) {
        style.setAttribute(key, attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      } else {
        style.removeAttribute('media');
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      list = list || [];
      var lastIdentifiers = modulesToDom(list, options);
      return function update(newList) {
        newList = newList || [];

        if (Object.prototype.toString.call(newList) !== '[object Array]') {
          return;
        }

        for (var i = 0; i < lastIdentifiers.length; i++) {
          var identifier = lastIdentifiers[i];
          var index = getIndexByIdentifier(identifier);
          stylesInDom[index].references--;
        }

        var newLastIdentifiers = modulesToDom(newList, options);

        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
          var _identifier = lastIdentifiers[_i];

          var _index = getIndexByIdentifier(_identifier);

          if (stylesInDom[_index].references === 0) {
            stylesInDom[_index].updater();

            stylesInDom.splice(_index, 1);
          }
        }

        lastIdentifiers = newLastIdentifiers;
      };
    };
    /***/

  },

  /***/
  "./src/styles.sass":
  /*!*************************!*\
    !*** ./src/styles.sass ***!
    \*************************/

  /*! no static exports found */

  /***/
  function srcStylesSass(module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.sass */
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.sass");

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    var exported = content.locals ? content.locals : {};
    module.exports = exported;
    /***/
  },

  /***/
  3:
  /*!*******************************!*\
    !*** multi ./src/styles.sass ***!
    \*******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/matheus/Documents/Programação/Projetos/Pipboy-angular/pipboy-angular/src/styles.sass */
    "./src/styles.sass");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map