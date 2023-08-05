/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@electron/remote/dist/src/common/get-electron-binding.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@electron/remote/dist/src/common/get-electron-binding.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getElectronBinding = void 0;\nconst getElectronBinding = (name) => {\n    if (process._linkedBinding) {\n        return process._linkedBinding('electron_common_' + name);\n    }\n    else if (process.electronBinding) {\n        return process.electronBinding(name);\n    }\n    else {\n        return null;\n    }\n};\nexports.getElectronBinding = getElectronBinding;\n\n\n//# sourceURL=webpack://ElDa/./node_modules/@electron/remote/dist/src/common/get-electron-binding.js?");

/***/ }),

/***/ "./node_modules/@electron/remote/dist/src/common/module-names.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@electron/remote/dist/src/common/module-names.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.browserModuleNames = exports.commonModuleNames = void 0;\nconst get_electron_binding_1 = __webpack_require__(/*! ./get-electron-binding */ \"./node_modules/@electron/remote/dist/src/common/get-electron-binding.js\");\nexports.commonModuleNames = [\n    'clipboard',\n    'nativeImage',\n    'shell',\n];\nexports.browserModuleNames = [\n    'app',\n    'autoUpdater',\n    'BaseWindow',\n    'BrowserView',\n    'BrowserWindow',\n    'contentTracing',\n    'crashReporter',\n    'dialog',\n    'globalShortcut',\n    'ipcMain',\n    'inAppPurchase',\n    'Menu',\n    'MenuItem',\n    'nativeTheme',\n    'net',\n    'netLog',\n    'MessageChannelMain',\n    'Notification',\n    'powerMonitor',\n    'powerSaveBlocker',\n    'protocol',\n    'pushNotifications',\n    'safeStorage',\n    'screen',\n    'session',\n    'ShareMenu',\n    'systemPreferences',\n    'TopLevelWindow',\n    'TouchBar',\n    'Tray',\n    'utilityProcess',\n    'View',\n    'webContents',\n    'WebContentsView',\n    'webFrameMain',\n].concat(exports.commonModuleNames);\nconst features = get_electron_binding_1.getElectronBinding('features');\nif (!features || !features.isDesktopCapturerEnabled || features.isDesktopCapturerEnabled()) {\n    exports.browserModuleNames.push('desktopCapturer');\n}\nif (!features || features.isViewApiEnabled()) {\n    exports.browserModuleNames.push('ImageView');\n}\n\n\n//# sourceURL=webpack://ElDa/./node_modules/@electron/remote/dist/src/common/module-names.js?");

/***/ }),

/***/ "./node_modules/@electron/remote/dist/src/common/type-utils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@electron/remote/dist/src/common/type-utils.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deserialize = exports.serialize = exports.isSerializableObject = exports.isPromise = void 0;\nconst electron_1 = __webpack_require__(/*! electron */ \"electron\");\nfunction isPromise(val) {\n    return (val &&\n        val.then &&\n        val.then instanceof Function &&\n        val.constructor &&\n        val.constructor.reject &&\n        val.constructor.reject instanceof Function &&\n        val.constructor.resolve &&\n        val.constructor.resolve instanceof Function);\n}\nexports.isPromise = isPromise;\nconst serializableTypes = [\n    Boolean,\n    Number,\n    String,\n    Date,\n    Error,\n    RegExp,\n    ArrayBuffer\n];\n// https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#Supported_types\nfunction isSerializableObject(value) {\n    return value === null || ArrayBuffer.isView(value) || serializableTypes.some(type => value instanceof type);\n}\nexports.isSerializableObject = isSerializableObject;\nconst objectMap = function (source, mapper) {\n    const sourceEntries = Object.entries(source);\n    const targetEntries = sourceEntries.map(([key, val]) => [key, mapper(val)]);\n    return Object.fromEntries(targetEntries);\n};\nfunction serializeNativeImage(image) {\n    const representations = [];\n    const scaleFactors = image.getScaleFactors();\n    // Use Buffer when there's only one representation for better perf.\n    // This avoids compressing to/from PNG where it's not necessary to\n    // ensure uniqueness of dataURLs (since there's only one).\n    if (scaleFactors.length === 1) {\n        const scaleFactor = scaleFactors[0];\n        const size = image.getSize(scaleFactor);\n        const buffer = image.toBitmap({ scaleFactor });\n        representations.push({ scaleFactor, size, buffer });\n    }\n    else {\n        // Construct from dataURLs to ensure that they are not lost in creation.\n        for (const scaleFactor of scaleFactors) {\n            const size = image.getSize(scaleFactor);\n            const dataURL = image.toDataURL({ scaleFactor });\n            representations.push({ scaleFactor, size, dataURL });\n        }\n    }\n    return { __ELECTRON_SERIALIZED_NativeImage__: true, representations };\n}\nfunction deserializeNativeImage(value) {\n    const image = electron_1.nativeImage.createEmpty();\n    // Use Buffer when there's only one representation for better perf.\n    // This avoids compressing to/from PNG where it's not necessary to\n    // ensure uniqueness of dataURLs (since there's only one).\n    if (value.representations.length === 1) {\n        const { buffer, size, scaleFactor } = value.representations[0];\n        const { width, height } = size;\n        image.addRepresentation({ buffer, scaleFactor, width, height });\n    }\n    else {\n        // Construct from dataURLs to ensure that they are not lost in creation.\n        for (const rep of value.representations) {\n            const { dataURL, size, scaleFactor } = rep;\n            const { width, height } = size;\n            image.addRepresentation({ dataURL, scaleFactor, width, height });\n        }\n    }\n    return image;\n}\nfunction serialize(value) {\n    if (value && value.constructor && value.constructor.name === 'NativeImage') {\n        return serializeNativeImage(value);\n    }\n    if (Array.isArray(value)) {\n        return value.map(serialize);\n    }\n    else if (isSerializableObject(value)) {\n        return value;\n    }\n    else if (value instanceof Object) {\n        return objectMap(value, serialize);\n    }\n    else {\n        return value;\n    }\n}\nexports.serialize = serialize;\nfunction deserialize(value) {\n    if (value && value.__ELECTRON_SERIALIZED_NativeImage__) {\n        return deserializeNativeImage(value);\n    }\n    else if (Array.isArray(value)) {\n        return value.map(deserialize);\n    }\n    else if (isSerializableObject(value)) {\n        return value;\n    }\n    else if (value instanceof Object) {\n        return objectMap(value, deserialize);\n    }\n    else {\n        return value;\n    }\n}\nexports.deserialize = deserialize;\n\n\n//# sourceURL=webpack://ElDa/./node_modules/@electron/remote/dist/src/common/type-utils.js?");

/***/ }),

/***/ "./node_modules/@electron/remote/dist/src/renderer/callbacks-registry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@electron/remote/dist/src/renderer/callbacks-registry.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CallbacksRegistry = void 0;\nclass CallbacksRegistry {\n    constructor() {\n        this.nextId = 0;\n        this.callbacks = {};\n        this.callbackIds = new WeakMap();\n        this.locationInfo = new WeakMap();\n    }\n    add(callback) {\n        // The callback is already added.\n        let id = this.callbackIds.get(callback);\n        if (id != null)\n            return id;\n        id = this.nextId += 1;\n        this.callbacks[id] = callback;\n        this.callbackIds.set(callback, id);\n        // Capture the location of the function and put it in the ID string,\n        // so that release errors can be tracked down easily.\n        const regexp = /at (.*)/gi;\n        const stackString = (new Error()).stack;\n        if (!stackString)\n            return id;\n        let filenameAndLine;\n        let match;\n        while ((match = regexp.exec(stackString)) !== null) {\n            const location = match[1];\n            if (location.includes('(native)'))\n                continue;\n            if (location.includes('(<anonymous>)'))\n                continue;\n            if (location.includes('callbacks-registry.js'))\n                continue;\n            if (location.includes('remote.js'))\n                continue;\n            if (location.includes('@electron/remote/dist'))\n                continue;\n            const ref = /([^/^)]*)\\)?$/gi.exec(location);\n            if (ref)\n                filenameAndLine = ref[1];\n            break;\n        }\n        this.locationInfo.set(callback, filenameAndLine);\n        return id;\n    }\n    get(id) {\n        return this.callbacks[id] || function () { };\n    }\n    getLocation(callback) {\n        return this.locationInfo.get(callback);\n    }\n    apply(id, ...args) {\n        return this.get(id).apply(global, ...args);\n    }\n    remove(id) {\n        const callback = this.callbacks[id];\n        if (callback) {\n            this.callbackIds.delete(callback);\n            delete this.callbacks[id];\n        }\n    }\n}\nexports.CallbacksRegistry = CallbacksRegistry;\n\n\n//# sourceURL=webpack://ElDa/./node_modules/@electron/remote/dist/src/renderer/callbacks-registry.js?");

/***/ }),

/***/ "./node_modules/@electron/remote/dist/src/renderer/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@electron/remote/dist/src/renderer/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nif (process.type === 'browser')\n    throw new Error(`\"@electron/remote\" cannot be required in the browser process. Instead require(\"@electron/remote/main\").`);\n__exportStar(__webpack_require__(/*! ./remote */ \"./node_modules/@electron/remote/dist/src/renderer/remote.js\"), exports);\n\n\n//# sourceURL=webpack://ElDa/./node_modules/@electron/remote/dist/src/renderer/index.js?");

/***/ }),

/***/ "./node_modules/@electron/remote/dist/src/renderer/remote.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@electron/remote/dist/src/renderer/remote.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createFunctionWithReturnValue = exports.getGlobal = exports.getCurrentWebContents = exports.getCurrentWindow = exports.getBuiltin = void 0;\nconst callbacks_registry_1 = __webpack_require__(/*! ./callbacks-registry */ \"./node_modules/@electron/remote/dist/src/renderer/callbacks-registry.js\");\nconst type_utils_1 = __webpack_require__(/*! ../common/type-utils */ \"./node_modules/@electron/remote/dist/src/common/type-utils.js\");\nconst electron_1 = __webpack_require__(/*! electron */ \"electron\");\nconst module_names_1 = __webpack_require__(/*! ../common/module-names */ \"./node_modules/@electron/remote/dist/src/common/module-names.js\");\nconst get_electron_binding_1 = __webpack_require__(/*! ../common/get-electron-binding */ \"./node_modules/@electron/remote/dist/src/common/get-electron-binding.js\");\nconst { Promise } = global;\nconst callbacksRegistry = new callbacks_registry_1.CallbacksRegistry();\nconst remoteObjectCache = new Map();\nconst finalizationRegistry = new FinalizationRegistry((id) => {\n    const ref = remoteObjectCache.get(id);\n    if (ref !== undefined && ref.deref() === undefined) {\n        remoteObjectCache.delete(id);\n        electron_1.ipcRenderer.send(\"REMOTE_BROWSER_DEREFERENCE\" /* BROWSER_DEREFERENCE */, contextId, id, 0);\n    }\n});\nconst electronIds = new WeakMap();\nconst isReturnValue = new WeakSet();\nfunction getCachedRemoteObject(id) {\n    const ref = remoteObjectCache.get(id);\n    if (ref !== undefined) {\n        const deref = ref.deref();\n        if (deref !== undefined)\n            return deref;\n    }\n}\nfunction setCachedRemoteObject(id, value) {\n    const wr = new WeakRef(value);\n    remoteObjectCache.set(id, wr);\n    finalizationRegistry.register(value, id);\n    return value;\n}\nfunction getContextId() {\n    const v8Util = get_electron_binding_1.getElectronBinding('v8_util');\n    if (v8Util) {\n        return v8Util.getHiddenValue(global, 'contextId');\n    }\n    else {\n        throw new Error('Electron >=v13.0.0-beta.6 required to support sandboxed renderers');\n    }\n}\n// An unique ID that can represent current context.\nconst contextId = process.contextId || getContextId();\n// Notify the main process when current context is going to be released.\n// Note that when the renderer process is destroyed, the message may not be\n// sent, we also listen to the \"render-view-deleted\" event in the main process\n// to guard that situation.\nprocess.on('exit', () => {\n    const command = \"REMOTE_BROWSER_CONTEXT_RELEASE\" /* BROWSER_CONTEXT_RELEASE */;\n    electron_1.ipcRenderer.send(command, contextId);\n});\nconst IS_REMOTE_PROXY = Symbol('is-remote-proxy');\n// Convert the arguments object into an array of meta data.\nfunction wrapArgs(args, visited = new Set()) {\n    const valueToMeta = (value) => {\n        // Check for circular reference.\n        if (visited.has(value)) {\n            return {\n                type: 'value',\n                value: null\n            };\n        }\n        if (value && value.constructor && value.constructor.name === 'NativeImage') {\n            return { type: 'nativeimage', value: type_utils_1.serialize(value) };\n        }\n        else if (Array.isArray(value)) {\n            visited.add(value);\n            const meta = {\n                type: 'array',\n                value: wrapArgs(value, visited)\n            };\n            visited.delete(value);\n            return meta;\n        }\n        else if (value instanceof Buffer) {\n            return {\n                type: 'buffer',\n                value\n            };\n        }\n        else if (type_utils_1.isSerializableObject(value)) {\n            return {\n                type: 'value',\n                value\n            };\n        }\n        else if (typeof value === 'object') {\n            if (type_utils_1.isPromise(value)) {\n                return {\n                    type: 'promise',\n                    then: valueToMeta(function (onFulfilled, onRejected) {\n                        value.then(onFulfilled, onRejected);\n                    })\n                };\n            }\n            else if (electronIds.has(value)) {\n                return {\n                    type: 'remote-object',\n                    id: electronIds.get(value)\n                };\n            }\n            const meta = {\n                type: 'object',\n                name: value.constructor ? value.constructor.name : '',\n                members: []\n            };\n            visited.add(value);\n            for (const prop in value) { // eslint-disable-line guard-for-in\n                meta.members.push({\n                    name: prop,\n                    value: valueToMeta(value[prop])\n                });\n            }\n            visited.delete(value);\n            return meta;\n        }\n        else if (typeof value === 'function' && isReturnValue.has(value)) {\n            return {\n                type: 'function-with-return-value',\n                value: valueToMeta(value())\n            };\n        }\n        else if (typeof value === 'function') {\n            return {\n                type: 'function',\n                id: callbacksRegistry.add(value),\n                location: callbacksRegistry.getLocation(value),\n                length: value.length\n            };\n        }\n        else {\n            return {\n                type: 'value',\n                value\n            };\n        }\n    };\n    return args.map(valueToMeta);\n}\n// Populate object's members from descriptors.\n// The |ref| will be kept referenced by |members|.\n// This matches |getObjectMemebers| in rpc-server.\nfunction setObjectMembers(ref, object, metaId, members) {\n    if (!Array.isArray(members))\n        return;\n    for (const member of members) {\n        if (Object.prototype.hasOwnProperty.call(object, member.name))\n            continue;\n        const descriptor = { enumerable: member.enumerable };\n        if (member.type === 'method') {\n            const remoteMemberFunction = function (...args) {\n                let command;\n                if (this && this.constructor === remoteMemberFunction) {\n                    command = \"REMOTE_BROWSER_MEMBER_CONSTRUCTOR\" /* BROWSER_MEMBER_CONSTRUCTOR */;\n                }\n                else {\n                    command = \"REMOTE_BROWSER_MEMBER_CALL\" /* BROWSER_MEMBER_CALL */;\n                }\n                const ret = electron_1.ipcRenderer.sendSync(command, contextId, metaId, member.name, wrapArgs(args));\n                return metaToValue(ret);\n            };\n            let descriptorFunction = proxyFunctionProperties(remoteMemberFunction, metaId, member.name);\n            descriptor.get = () => {\n                descriptorFunction.ref = ref; // The member should reference its object.\n                return descriptorFunction;\n            };\n            // Enable monkey-patch the method\n            descriptor.set = (value) => {\n                descriptorFunction = value;\n                return value;\n            };\n            descriptor.configurable = true;\n        }\n        else if (member.type === 'get') {\n            descriptor.get = () => {\n                const command = \"REMOTE_BROWSER_MEMBER_GET\" /* BROWSER_MEMBER_GET */;\n                const meta = electron_1.ipcRenderer.sendSync(command, contextId, metaId, member.name);\n                return metaToValue(meta);\n            };\n            if (member.writable) {\n                descriptor.set = (value) => {\n                    const args = wrapArgs([value]);\n                    const command = \"REMOTE_BROWSER_MEMBER_SET\" /* BROWSER_MEMBER_SET */;\n                    const meta = electron_1.ipcRenderer.sendSync(command, contextId, metaId, member.name, args);\n                    if (meta != null)\n                        metaToValue(meta);\n                    return value;\n                };\n            }\n        }\n        Object.defineProperty(object, member.name, descriptor);\n    }\n}\n// Populate object's prototype from descriptor.\n// This matches |getObjectPrototype| in rpc-server.\nfunction setObjectPrototype(ref, object, metaId, descriptor) {\n    if (descriptor === null)\n        return;\n    const proto = {};\n    setObjectMembers(ref, proto, metaId, descriptor.members);\n    setObjectPrototype(ref, proto, metaId, descriptor.proto);\n    Object.setPrototypeOf(object, proto);\n}\n// Wrap function in Proxy for accessing remote properties\nfunction proxyFunctionProperties(remoteMemberFunction, metaId, name) {\n    let loaded = false;\n    // Lazily load function properties\n    const loadRemoteProperties = () => {\n        if (loaded)\n            return;\n        loaded = true;\n        const command = \"REMOTE_BROWSER_MEMBER_GET\" /* BROWSER_MEMBER_GET */;\n        const meta = electron_1.ipcRenderer.sendSync(command, contextId, metaId, name);\n        setObjectMembers(remoteMemberFunction, remoteMemberFunction, meta.id, meta.members);\n    };\n    return new Proxy(remoteMemberFunction, {\n        set: (target, property, value) => {\n            if (property !== 'ref')\n                loadRemoteProperties();\n            target[property] = value;\n            return true;\n        },\n        get: (target, property) => {\n            if (property === IS_REMOTE_PROXY)\n                return true;\n            if (!Object.prototype.hasOwnProperty.call(target, property))\n                loadRemoteProperties();\n            const value = target[property];\n            if (property === 'toString' && typeof value === 'function') {\n                return value.bind(target);\n            }\n            return value;\n        },\n        ownKeys: (target) => {\n            loadRemoteProperties();\n            return Object.getOwnPropertyNames(target);\n        },\n        getOwnPropertyDescriptor: (target, property) => {\n            const descriptor = Object.getOwnPropertyDescriptor(target, property);\n            if (descriptor)\n                return descriptor;\n            loadRemoteProperties();\n            return Object.getOwnPropertyDescriptor(target, property);\n        }\n    });\n}\n// Convert meta data from browser into real value.\nfunction metaToValue(meta) {\n    if (meta.type === 'value') {\n        return meta.value;\n    }\n    else if (meta.type === 'array') {\n        return meta.members.map((member) => metaToValue(member));\n    }\n    else if (meta.type === 'nativeimage') {\n        return type_utils_1.deserialize(meta.value);\n    }\n    else if (meta.type === 'buffer') {\n        return Buffer.from(meta.value.buffer, meta.value.byteOffset, meta.value.byteLength);\n    }\n    else if (meta.type === 'promise') {\n        return Promise.resolve({ then: metaToValue(meta.then) });\n    }\n    else if (meta.type === 'error') {\n        return metaToError(meta);\n    }\n    else if (meta.type === 'exception') {\n        if (meta.value.type === 'error') {\n            throw metaToError(meta.value);\n        }\n        else {\n            throw new Error(`Unexpected value type in exception: ${meta.value.type}`);\n        }\n    }\n    else {\n        let ret;\n        if ('id' in meta) {\n            const cached = getCachedRemoteObject(meta.id);\n            if (cached !== undefined) {\n                return cached;\n            }\n        }\n        // A shadow class to represent the remote function object.\n        if (meta.type === 'function') {\n            const remoteFunction = function (...args) {\n                let command;\n                if (this && this.constructor === remoteFunction) {\n                    command = \"REMOTE_BROWSER_CONSTRUCTOR\" /* BROWSER_CONSTRUCTOR */;\n                }\n                else {\n                    command = \"REMOTE_BROWSER_FUNCTION_CALL\" /* BROWSER_FUNCTION_CALL */;\n                }\n                const obj = electron_1.ipcRenderer.sendSync(command, contextId, meta.id, wrapArgs(args));\n                return metaToValue(obj);\n            };\n            ret = remoteFunction;\n        }\n        else {\n            ret = {};\n        }\n        setObjectMembers(ret, ret, meta.id, meta.members);\n        setObjectPrototype(ret, ret, meta.id, meta.proto);\n        if (ret.constructor && ret.constructor[IS_REMOTE_PROXY]) {\n            Object.defineProperty(ret.constructor, 'name', { value: meta.name });\n        }\n        // Track delegate obj's lifetime & tell browser to clean up when object is GCed.\n        electronIds.set(ret, meta.id);\n        setCachedRemoteObject(meta.id, ret);\n        return ret;\n    }\n}\nfunction metaToError(meta) {\n    const obj = meta.value;\n    for (const { name, value } of meta.members) {\n        obj[name] = metaToValue(value);\n    }\n    return obj;\n}\nfunction handleMessage(channel, handler) {\n    electron_1.ipcRenderer.on(channel, (event, passedContextId, id, ...args) => {\n        if (event.senderId !== 0) {\n            console.error(`Message ${channel} sent by unexpected WebContents (${event.senderId})`);\n            return;\n        }\n        if (passedContextId === contextId) {\n            handler(id, ...args);\n        }\n        else {\n            // Message sent to an un-exist context, notify the error to main process.\n            electron_1.ipcRenderer.send(\"REMOTE_BROWSER_WRONG_CONTEXT_ERROR\" /* BROWSER_WRONG_CONTEXT_ERROR */, contextId, passedContextId, id);\n        }\n    });\n}\nconst enableStacks = process.argv.includes('--enable-api-filtering-logging');\nfunction getCurrentStack() {\n    const target = { stack: undefined };\n    if (enableStacks) {\n        Error.captureStackTrace(target, getCurrentStack);\n    }\n    return target.stack;\n}\n// Browser calls a callback in renderer.\nhandleMessage(\"REMOTE_RENDERER_CALLBACK\" /* RENDERER_CALLBACK */, (id, args) => {\n    callbacksRegistry.apply(id, metaToValue(args));\n});\n// A callback in browser is released.\nhandleMessage(\"REMOTE_RENDERER_RELEASE_CALLBACK\" /* RENDERER_RELEASE_CALLBACK */, (id) => {\n    callbacksRegistry.remove(id);\n});\nexports.require = (module) => {\n    const command = \"REMOTE_BROWSER_REQUIRE\" /* BROWSER_REQUIRE */;\n    const meta = electron_1.ipcRenderer.sendSync(command, contextId, module, getCurrentStack());\n    return metaToValue(meta);\n};\n// Alias to remote.require('electron').xxx.\nfunction getBuiltin(module) {\n    const command = \"REMOTE_BROWSER_GET_BUILTIN\" /* BROWSER_GET_BUILTIN */;\n    const meta = electron_1.ipcRenderer.sendSync(command, contextId, module, getCurrentStack());\n    return metaToValue(meta);\n}\nexports.getBuiltin = getBuiltin;\nfunction getCurrentWindow() {\n    const command = \"REMOTE_BROWSER_GET_CURRENT_WINDOW\" /* BROWSER_GET_CURRENT_WINDOW */;\n    const meta = electron_1.ipcRenderer.sendSync(command, contextId, getCurrentStack());\n    return metaToValue(meta);\n}\nexports.getCurrentWindow = getCurrentWindow;\n// Get current WebContents object.\nfunction getCurrentWebContents() {\n    const command = \"REMOTE_BROWSER_GET_CURRENT_WEB_CONTENTS\" /* BROWSER_GET_CURRENT_WEB_CONTENTS */;\n    const meta = electron_1.ipcRenderer.sendSync(command, contextId, getCurrentStack());\n    return metaToValue(meta);\n}\nexports.getCurrentWebContents = getCurrentWebContents;\n// Get a global object in browser.\nfunction getGlobal(name) {\n    const command = \"REMOTE_BROWSER_GET_GLOBAL\" /* BROWSER_GET_GLOBAL */;\n    const meta = electron_1.ipcRenderer.sendSync(command, contextId, name, getCurrentStack());\n    return metaToValue(meta);\n}\nexports.getGlobal = getGlobal;\n// Get the process object in browser.\nObject.defineProperty(exports, \"process\", ({\n    enumerable: true,\n    get: () => exports.getGlobal('process')\n}));\n// Create a function that will return the specified value when called in browser.\nfunction createFunctionWithReturnValue(returnValue) {\n    const func = () => returnValue;\n    isReturnValue.add(func);\n    return func;\n}\nexports.createFunctionWithReturnValue = createFunctionWithReturnValue;\nconst addBuiltinProperty = (name) => {\n    Object.defineProperty(exports, name, {\n        enumerable: true,\n        get: () => exports.getBuiltin(name)\n    });\n};\nmodule_names_1.browserModuleNames\n    .forEach(addBuiltinProperty);\n\n\n//# sourceURL=webpack://ElDa/./node_modules/@electron/remote/dist/src/renderer/remote.js?");

/***/ }),

/***/ "./node_modules/@electron/remote/renderer/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@electron/remote/renderer/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ../dist/src/renderer */ \"./node_modules/@electron/remote/dist/src/renderer/index.js\")\n\n\n//# sourceURL=webpack://ElDa/./node_modules/@electron/remote/renderer/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/renderer/stylesheets/application.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/renderer/stylesheets/application.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html, body {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n\nbody {\n  font-family: -apple-system, \"Helvetica Neue\", Helvetica, sans-serif;\n  background-color: #778beb;\n}\n\n.message {\n  position: absolute;\n  width: 500px;\n  height: 250px;\n  top: 50%;\n  left: 50%;\n  color: #fff;\n  font-weight: 200;\n  text-align: center;\n  margin-top: -125px;\n  margin-left: -250px;\n}\n\n.message h1 {\n  font-size: 50px;\n  font-weight: 100;\n  color: #333;\n}\n\n.message div {\n  margin-bottom: 10px;\n}\n\n.titlebar {\n  height: 30px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color:#333;\n  -webkit-app-region: drag;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ElDa/./src/renderer/stylesheets/application.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://ElDa/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ElDa/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/renderer/stylesheets/application.css":
/*!**************************************************!*\
  !*** ./src/renderer/stylesheets/application.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_application_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./application.css */ \"./node_modules/css-loader/dist/cjs.js!./src/renderer/stylesheets/application.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_application_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_application_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_application_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_application_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ElDa/./src/renderer/stylesheets/application.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ElDa/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ElDa/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ElDa/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ElDa/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ElDa/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ElDa/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/renderer/javascripts/index.js":
/*!*******************************************!*\
  !*** ./src/renderer/javascripts/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var application_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! application.css */ \"./src/renderer/stylesheets/application.css\");\n\nconst {ipcRenderer} = __webpack_require__(/*! electron */ \"electron\");\n\nconst remote = __webpack_require__(/*! @electron/remote */ \"./node_modules/@electron/remote/renderer/index.js\");\nconst { BrowserWindow } = remote;\n\n\n\nipcRenderer.on('mainchannel', (_, data) => {\n  alert(data.message);\n});\n\nconst loadAndDisplayData = () => {\n  loadData().then(data => {\n    document.getElementById('message').innerHTML = data.number\n  });\n};\n\nconst loadData = () => {\n  return new Promise((res, rej) => {\n    ipcRenderer.send('loaddata');\n    ipcRenderer.once('data', (_, data) => res(data))\n  })\n};\n\n\nwindow.onload = () => {\n  const action = document.getElementById('action');\n  action.addEventListener('click', () => {\n    let win = new BrowserWindow({\n      width: 500,\n      height: 500,\n    });\n    // dialog.showMessageBox({message: 'You have clicked here!?'})\n  });\n};\n\n// window.onload = () => {\n//   const action = document.getElementById('action');\n//   action.addEventListener('click', loadAndDisplayData);\n// }\n\n//# sourceURL=webpack://ElDa/./src/renderer/javascripts/index.js?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/renderer/javascripts/index.js");
/******/ 	
/******/ })()
;