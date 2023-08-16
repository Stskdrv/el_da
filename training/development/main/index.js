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

/***/ "./node_modules/@electron/remote/dist/src/common/type-utils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@electron/remote/dist/src/common/type-utils.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deserialize = exports.serialize = exports.isSerializableObject = exports.isPromise = void 0;\nconst electron_1 = __webpack_require__(/*! electron */ \"electron\");\nfunction isPromise(val) {\n    return (val &&\n        val.then &&\n        val.then instanceof Function &&\n        val.constructor &&\n        val.constructor.reject &&\n        val.constructor.reject instanceof Function &&\n        val.constructor.resolve &&\n        val.constructor.resolve instanceof Function);\n}\nexports.isPromise = isPromise;\nconst serializableTypes = [\n    Boolean,\n    Number,\n    String,\n    Date,\n    Error,\n    RegExp,\n    ArrayBuffer\n];\n// https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#Supported_types\nfunction isSerializableObject(value) {\n    return value === null || ArrayBuffer.isView(value) || serializableTypes.some(type => value instanceof type);\n}\nexports.isSerializableObject = isSerializableObject;\nconst objectMap = function (source, mapper) {\n    const sourceEntries = Object.entries(source);\n    const targetEntries = sourceEntries.map(([key, val]) => [key, mapper(val)]);\n    return Object.fromEntries(targetEntries);\n};\nfunction serializeNativeImage(image) {\n    const representations = [];\n    const scaleFactors = image.getScaleFactors();\n    // Use Buffer when there's only one representation for better perf.\n    // This avoids compressing to/from PNG where it's not necessary to\n    // ensure uniqueness of dataURLs (since there's only one).\n    if (scaleFactors.length === 1) {\n        const scaleFactor = scaleFactors[0];\n        const size = image.getSize(scaleFactor);\n        const buffer = image.toBitmap({ scaleFactor });\n        representations.push({ scaleFactor, size, buffer });\n    }\n    else {\n        // Construct from dataURLs to ensure that they are not lost in creation.\n        for (const scaleFactor of scaleFactors) {\n            const size = image.getSize(scaleFactor);\n            const dataURL = image.toDataURL({ scaleFactor });\n            representations.push({ scaleFactor, size, dataURL });\n        }\n    }\n    return { __ELECTRON_SERIALIZED_NativeImage__: true, representations };\n}\nfunction deserializeNativeImage(value) {\n    const image = electron_1.nativeImage.createEmpty();\n    // Use Buffer when there's only one representation for better perf.\n    // This avoids compressing to/from PNG where it's not necessary to\n    // ensure uniqueness of dataURLs (since there's only one).\n    if (value.representations.length === 1) {\n        const { buffer, size, scaleFactor } = value.representations[0];\n        const { width, height } = size;\n        image.addRepresentation({ buffer, scaleFactor, width, height });\n    }\n    else {\n        // Construct from dataURLs to ensure that they are not lost in creation.\n        for (const rep of value.representations) {\n            const { dataURL, size, scaleFactor } = rep;\n            const { width, height } = size;\n            image.addRepresentation({ dataURL, scaleFactor, width, height });\n        }\n    }\n    return image;\n}\nfunction serialize(value) {\n    if (value && value.constructor && value.constructor.name === 'NativeImage') {\n        return serializeNativeImage(value);\n    }\n    if (Array.isArray(value)) {\n        return value.map(serialize);\n    }\n    else if (isSerializableObject(value)) {\n        return value;\n    }\n    else if (value instanceof Object) {\n        return objectMap(value, serialize);\n    }\n    else {\n        return value;\n    }\n}\nexports.serialize = serialize;\nfunction deserialize(value) {\n    if (value && value.__ELECTRON_SERIALIZED_NativeImage__) {\n        return deserializeNativeImage(value);\n    }\n    else if (Array.isArray(value)) {\n        return value.map(deserialize);\n    }\n    else if (isSerializableObject(value)) {\n        return value;\n    }\n    else if (value instanceof Object) {\n        return objectMap(value, deserialize);\n    }\n    else {\n        return value;\n    }\n}\nexports.deserialize = deserialize;\n\n\n//# sourceURL=webpack://ElDa/./node_modules/@electron/remote/dist/src/common/type-utils.js?");

/***/ }),

/***/ "./node_modules/@electron/remote/dist/src/main/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@electron/remote/dist/src/main/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.enable = exports.initialize = void 0;\nvar server_1 = __webpack_require__(/*! ./server */ \"./node_modules/@electron/remote/dist/src/main/server.js\");\nObject.defineProperty(exports, \"initialize\", ({ enumerable: true, get: function () { return server_1.initialize; } }));\nObject.defineProperty(exports, \"enable\", ({ enumerable: true, get: function () { return server_1.enable; } }));\n\n\n//# sourceURL=webpack://ElDa/./node_modules/@electron/remote/dist/src/main/index.js?");

/***/ }),

/***/ "./node_modules/@electron/remote/dist/src/main/objects-registry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@electron/remote/dist/src/main/objects-registry.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst getOwnerKey = (webContents, contextId) => {\n    return `${webContents.id}-${contextId}`;\n};\nclass ObjectsRegistry {\n    constructor() {\n        this.nextId = 0;\n        // Stores all objects by ref-counting.\n        // (id) => {object, count}\n        this.storage = {};\n        // Stores the IDs + refCounts of objects referenced by WebContents.\n        // (ownerKey) => { id: refCount }\n        this.owners = {};\n        this.electronIds = new WeakMap();\n    }\n    // Register a new object and return its assigned ID. If the object is already\n    // registered then the already assigned ID would be returned.\n    add(webContents, contextId, obj) {\n        // Get or assign an ID to the object.\n        const id = this.saveToStorage(obj);\n        // Add object to the set of referenced objects.\n        const ownerKey = getOwnerKey(webContents, contextId);\n        let owner = this.owners[ownerKey];\n        if (!owner) {\n            owner = this.owners[ownerKey] = new Map();\n            this.registerDeleteListener(webContents, contextId);\n        }\n        if (!owner.has(id)) {\n            owner.set(id, 0);\n            // Increase reference count if not referenced before.\n            this.storage[id].count++;\n        }\n        owner.set(id, owner.get(id) + 1);\n        return id;\n    }\n    // Get an object according to its ID.\n    get(id) {\n        const pointer = this.storage[id];\n        if (pointer != null)\n            return pointer.object;\n    }\n    // Dereference an object according to its ID.\n    // Note that an object may be double-freed (cleared when page is reloaded, and\n    // then garbage collected in old page).\n    remove(webContents, contextId, id) {\n        const ownerKey = getOwnerKey(webContents, contextId);\n        const owner = this.owners[ownerKey];\n        if (owner && owner.has(id)) {\n            const newRefCount = owner.get(id) - 1;\n            // Only completely remove if the number of references GCed in the\n            // renderer is the same as the number of references we sent them\n            if (newRefCount <= 0) {\n                // Remove the reference in owner.\n                owner.delete(id);\n                // Dereference from the storage.\n                this.dereference(id);\n            }\n            else {\n                owner.set(id, newRefCount);\n            }\n        }\n    }\n    // Clear all references to objects refrenced by the WebContents.\n    clear(webContents, contextId) {\n        const ownerKey = getOwnerKey(webContents, contextId);\n        const owner = this.owners[ownerKey];\n        if (!owner)\n            return;\n        for (const id of owner.keys())\n            this.dereference(id);\n        delete this.owners[ownerKey];\n    }\n    // Saves the object into storage and assigns an ID for it.\n    saveToStorage(object) {\n        let id = this.electronIds.get(object);\n        if (!id) {\n            id = ++this.nextId;\n            this.storage[id] = {\n                count: 0,\n                object: object\n            };\n            this.electronIds.set(object, id);\n        }\n        return id;\n    }\n    // Dereference the object from store.\n    dereference(id) {\n        const pointer = this.storage[id];\n        if (pointer == null) {\n            return;\n        }\n        pointer.count -= 1;\n        if (pointer.count === 0) {\n            this.electronIds.delete(pointer.object);\n            delete this.storage[id];\n        }\n    }\n    // Clear the storage when renderer process is destroyed.\n    registerDeleteListener(webContents, contextId) {\n        // contextId => ${processHostId}-${contextCount}\n        const processHostId = contextId.split('-')[0];\n        const listener = (_, deletedProcessHostId) => {\n            if (deletedProcessHostId &&\n                deletedProcessHostId.toString() === processHostId) {\n                webContents.removeListener('render-view-deleted', listener);\n                this.clear(webContents, contextId);\n            }\n        };\n        // Note that the \"render-view-deleted\" event may not be emitted on time when\n        // the renderer process get destroyed because of navigation, we rely on the\n        // renderer process to send \"ELECTRON_BROWSER_CONTEXT_RELEASE\" message to\n        // guard this situation.\n        webContents.on('render-view-deleted', listener);\n    }\n}\nexports[\"default\"] = new ObjectsRegistry();\n\n\n//# sourceURL=webpack://ElDa/./node_modules/@electron/remote/dist/src/main/objects-registry.js?");

/***/ }),

/***/ "./node_modules/@electron/remote/dist/src/main/server.js":
/*!***************************************************************!*\
  !*** ./node_modules/@electron/remote/dist/src/main/server.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.initialize = exports.enable = exports.isRemoteModuleEnabled = void 0;\nconst events_1 = __webpack_require__(/*! events */ \"events\");\nconst objects_registry_1 = __importDefault(__webpack_require__(/*! ./objects-registry */ \"./node_modules/@electron/remote/dist/src/main/objects-registry.js\"));\nconst type_utils_1 = __webpack_require__(/*! ../common/type-utils */ \"./node_modules/@electron/remote/dist/src/common/type-utils.js\");\nconst electron_1 = __webpack_require__(/*! electron */ \"electron\");\nconst get_electron_binding_1 = __webpack_require__(/*! ../common/get-electron-binding */ \"./node_modules/@electron/remote/dist/src/common/get-electron-binding.js\");\nconst { Promise } = global;\nconst v8Util = get_electron_binding_1.getElectronBinding('v8_util');\nconst hasWebPrefsRemoteModuleAPI = (() => {\n    var _a, _b;\n    const electronVersion = Number((_b = (_a = process.versions.electron) === null || _a === void 0 ? void 0 : _a.split(\".\")) === null || _b === void 0 ? void 0 : _b[0]);\n    return Number.isNaN(electronVersion) || electronVersion < 14;\n})();\n// The internal properties of Function.\nconst FUNCTION_PROPERTIES = [\n    'length', 'name', 'arguments', 'caller', 'prototype'\n];\n// The remote functions in renderer processes.\nconst rendererFunctionCache = new Map();\n// eslint-disable-next-line no-undef\nconst finalizationRegistry = new FinalizationRegistry((fi) => {\n    const mapKey = fi.id[0] + '~' + fi.id[1];\n    const ref = rendererFunctionCache.get(mapKey);\n    if (ref !== undefined && ref.deref() === undefined) {\n        rendererFunctionCache.delete(mapKey);\n        if (!fi.webContents.isDestroyed()) {\n            try {\n                fi.webContents.sendToFrame(fi.frameId, \"REMOTE_RENDERER_RELEASE_CALLBACK\" /* RENDERER_RELEASE_CALLBACK */, fi.id[0], fi.id[1]);\n            }\n            catch (error) {\n                console.warn(`sendToFrame() failed: ${error}`);\n            }\n        }\n    }\n});\nfunction getCachedRendererFunction(id) {\n    const mapKey = id[0] + '~' + id[1];\n    const ref = rendererFunctionCache.get(mapKey);\n    if (ref !== undefined) {\n        const deref = ref.deref();\n        if (deref !== undefined)\n            return deref;\n    }\n}\nfunction setCachedRendererFunction(id, wc, frameId, value) {\n    // eslint-disable-next-line no-undef\n    const wr = new WeakRef(value);\n    const mapKey = id[0] + '~' + id[1];\n    rendererFunctionCache.set(mapKey, wr);\n    finalizationRegistry.register(value, {\n        id,\n        webContents: wc,\n        frameId\n    });\n    return value;\n}\nconst locationInfo = new WeakMap();\n// Return the description of object's members:\nconst getObjectMembers = function (object) {\n    let names = Object.getOwnPropertyNames(object);\n    // For Function, we should not override following properties even though they\n    // are \"own\" properties.\n    if (typeof object === 'function') {\n        names = names.filter((name) => {\n            return !FUNCTION_PROPERTIES.includes(name);\n        });\n    }\n    // Map properties to descriptors.\n    return names.map((name) => {\n        const descriptor = Object.getOwnPropertyDescriptor(object, name);\n        let type;\n        let writable = false;\n        if (descriptor.get === undefined && typeof object[name] === 'function') {\n            type = 'method';\n        }\n        else {\n            if (descriptor.set || descriptor.writable)\n                writable = true;\n            type = 'get';\n        }\n        return { name, enumerable: descriptor.enumerable, writable, type };\n    });\n};\n// Return the description of object's prototype.\nconst getObjectPrototype = function (object) {\n    const proto = Object.getPrototypeOf(object);\n    if (proto === null || proto === Object.prototype)\n        return null;\n    return {\n        members: getObjectMembers(proto),\n        proto: getObjectPrototype(proto)\n    };\n};\n// Convert a real value into meta data.\nconst valueToMeta = function (sender, contextId, value, optimizeSimpleObject = false) {\n    // Determine the type of value.\n    let type;\n    switch (typeof value) {\n        case 'object':\n            // Recognize certain types of objects.\n            if (value instanceof Buffer) {\n                type = 'buffer';\n            }\n            else if (value && value.constructor && value.constructor.name === 'NativeImage') {\n                type = 'nativeimage';\n            }\n            else if (Array.isArray(value)) {\n                type = 'array';\n            }\n            else if (value instanceof Error) {\n                type = 'error';\n            }\n            else if (type_utils_1.isSerializableObject(value)) {\n                type = 'value';\n            }\n            else if (type_utils_1.isPromise(value)) {\n                type = 'promise';\n            }\n            else if (Object.prototype.hasOwnProperty.call(value, 'callee') && value.length != null) {\n                // Treat the arguments object as array.\n                type = 'array';\n            }\n            else if (optimizeSimpleObject && v8Util.getHiddenValue(value, 'simple')) {\n                // Treat simple objects as value.\n                type = 'value';\n            }\n            else {\n                type = 'object';\n            }\n            break;\n        case 'function':\n            type = 'function';\n            break;\n        default:\n            type = 'value';\n            break;\n    }\n    // Fill the meta object according to value's type.\n    if (type === 'array') {\n        return {\n            type,\n            members: value.map((el) => valueToMeta(sender, contextId, el, optimizeSimpleObject))\n        };\n    }\n    else if (type === 'nativeimage') {\n        return { type, value: type_utils_1.serialize(value) };\n    }\n    else if (type === 'object' || type === 'function') {\n        return {\n            type,\n            name: value.constructor ? value.constructor.name : '',\n            // Reference the original value if it's an object, because when it's\n            // passed to renderer we would assume the renderer keeps a reference of\n            // it.\n            id: objects_registry_1.default.add(sender, contextId, value),\n            members: getObjectMembers(value),\n            proto: getObjectPrototype(value)\n        };\n    }\n    else if (type === 'buffer') {\n        return { type, value };\n    }\n    else if (type === 'promise') {\n        // Add default handler to prevent unhandled rejections in main process\n        // Instead they should appear in the renderer process\n        value.then(function () { }, function () { });\n        return {\n            type,\n            then: valueToMeta(sender, contextId, function (onFulfilled, onRejected) {\n                value.then(onFulfilled, onRejected);\n            })\n        };\n    }\n    else if (type === 'error') {\n        return {\n            type,\n            value,\n            members: Object.keys(value).map(name => ({\n                name,\n                value: valueToMeta(sender, contextId, value[name])\n            }))\n        };\n    }\n    else {\n        return {\n            type: 'value',\n            value\n        };\n    }\n};\nconst throwRPCError = function (message) {\n    const error = new Error(message);\n    error.code = 'EBADRPC';\n    error.errno = -72;\n    throw error;\n};\nconst removeRemoteListenersAndLogWarning = (sender, callIntoRenderer) => {\n    const location = locationInfo.get(callIntoRenderer);\n    let message = 'Attempting to call a function in a renderer window that has been closed or released.' +\n        `\\nFunction provided here: ${location}`;\n    if (sender instanceof events_1.EventEmitter) {\n        const remoteEvents = sender.eventNames().filter((eventName) => {\n            return sender.listeners(eventName).includes(callIntoRenderer);\n        });\n        if (remoteEvents.length > 0) {\n            message += `\\nRemote event names: ${remoteEvents.join(', ')}`;\n            remoteEvents.forEach((eventName) => {\n                sender.removeListener(eventName, callIntoRenderer);\n            });\n        }\n    }\n    console.warn(message);\n};\nconst fakeConstructor = (constructor, name) => new Proxy(Object, {\n    get(target, prop, receiver) {\n        if (prop === 'name') {\n            return name;\n        }\n        else {\n            return Reflect.get(target, prop, receiver);\n        }\n    }\n});\n// Convert array of meta data from renderer into array of real values.\nconst unwrapArgs = function (sender, frameId, contextId, args) {\n    const metaToValue = function (meta) {\n        switch (meta.type) {\n            case 'nativeimage':\n                return type_utils_1.deserialize(meta.value);\n            case 'value':\n                return meta.value;\n            case 'remote-object':\n                return objects_registry_1.default.get(meta.id);\n            case 'array':\n                return unwrapArgs(sender, frameId, contextId, meta.value);\n            case 'buffer':\n                return Buffer.from(meta.value.buffer, meta.value.byteOffset, meta.value.byteLength);\n            case 'promise':\n                return Promise.resolve({\n                    then: metaToValue(meta.then)\n                });\n            case 'object': {\n                const ret = meta.name !== 'Object' ? Object.create({\n                    constructor: fakeConstructor(Object, meta.name)\n                }) : {};\n                for (const { name, value } of meta.members) {\n                    ret[name] = metaToValue(value);\n                }\n                return ret;\n            }\n            case 'function-with-return-value': {\n                const returnValue = metaToValue(meta.value);\n                return function () {\n                    return returnValue;\n                };\n            }\n            case 'function': {\n                // Merge contextId and meta.id, since meta.id can be the same in\n                // different webContents.\n                const objectId = [contextId, meta.id];\n                // Cache the callbacks in renderer.\n                const cachedFunction = getCachedRendererFunction(objectId);\n                if (cachedFunction !== undefined) {\n                    return cachedFunction;\n                }\n                const callIntoRenderer = function (...args) {\n                    let succeed = false;\n                    if (!sender.isDestroyed()) {\n                        try {\n                            succeed = sender.sendToFrame(frameId, \"REMOTE_RENDERER_CALLBACK\" /* RENDERER_CALLBACK */, contextId, meta.id, valueToMeta(sender, contextId, args)) !== false;\n                        }\n                        catch (error) {\n                            console.warn(`sendToFrame() failed: ${error}`);\n                        }\n                    }\n                    if (!succeed) {\n                        removeRemoteListenersAndLogWarning(this, callIntoRenderer);\n                    }\n                };\n                locationInfo.set(callIntoRenderer, meta.location);\n                Object.defineProperty(callIntoRenderer, 'length', { value: meta.length });\n                setCachedRendererFunction(objectId, sender, frameId, callIntoRenderer);\n                return callIntoRenderer;\n            }\n            default:\n                throw new TypeError(`Unknown type: ${meta.type}`);\n        }\n    };\n    return args.map(metaToValue);\n};\nconst isRemoteModuleEnabledImpl = function (contents) {\n    const webPreferences = contents.getLastWebPreferences() || {};\n    return webPreferences.enableRemoteModule != null ? !!webPreferences.enableRemoteModule : false;\n};\nconst isRemoteModuleEnabledCache = new WeakMap();\nconst isRemoteModuleEnabled = function (contents) {\n    if (hasWebPrefsRemoteModuleAPI && !isRemoteModuleEnabledCache.has(contents)) {\n        isRemoteModuleEnabledCache.set(contents, isRemoteModuleEnabledImpl(contents));\n    }\n    return isRemoteModuleEnabledCache.get(contents);\n};\nexports.isRemoteModuleEnabled = isRemoteModuleEnabled;\nfunction enable(contents) {\n    isRemoteModuleEnabledCache.set(contents, true);\n}\nexports.enable = enable;\nconst handleRemoteCommand = function (channel, handler) {\n    electron_1.ipcMain.on(channel, (event, contextId, ...args) => {\n        let returnValue;\n        if (!exports.isRemoteModuleEnabled(event.sender)) {\n            event.returnValue = {\n                type: 'exception',\n                value: valueToMeta(event.sender, contextId, new Error('@electron/remote is disabled for this WebContents. Call require(\"@electron/remote/main\").enable(webContents) to enable it.'))\n            };\n            return;\n        }\n        try {\n            returnValue = handler(event, contextId, ...args);\n        }\n        catch (error) {\n            returnValue = {\n                type: 'exception',\n                value: valueToMeta(event.sender, contextId, error),\n            };\n        }\n        if (returnValue !== undefined) {\n            event.returnValue = returnValue;\n        }\n    });\n};\nconst emitCustomEvent = function (contents, eventName, ...args) {\n    const event = { sender: contents, returnValue: undefined, defaultPrevented: false };\n    electron_1.app.emit(eventName, event, contents, ...args);\n    contents.emit(eventName, event, ...args);\n    return event;\n};\nconst logStack = function (contents, code, stack) {\n    if (stack) {\n        console.warn(`WebContents (${contents.id}): ${code}`, stack);\n    }\n};\nlet initialized = false;\nfunction initialize() {\n    if (initialized)\n        throw new Error('@electron/remote has already been initialized');\n    initialized = true;\n    handleRemoteCommand(\"REMOTE_BROWSER_WRONG_CONTEXT_ERROR\" /* BROWSER_WRONG_CONTEXT_ERROR */, function (event, contextId, passedContextId, id) {\n        const objectId = [passedContextId, id];\n        const cachedFunction = getCachedRendererFunction(objectId);\n        if (cachedFunction === undefined) {\n            // Do nothing if the error has already been reported before.\n            return;\n        }\n        removeRemoteListenersAndLogWarning(event.sender, cachedFunction);\n    });\n    handleRemoteCommand(\"REMOTE_BROWSER_REQUIRE\" /* BROWSER_REQUIRE */, function (event, contextId, moduleName, stack) {\n        logStack(event.sender, `remote.require('${moduleName}')`, stack);\n        const customEvent = emitCustomEvent(event.sender, 'remote-require', moduleName);\n        if (customEvent.returnValue === undefined) {\n            if (customEvent.defaultPrevented) {\n                throw new Error(`Blocked remote.require('${moduleName}')`);\n            }\n            else {\n                customEvent.returnValue = process.mainModule.require(moduleName);\n            }\n        }\n        return valueToMeta(event.sender, contextId, customEvent.returnValue);\n    });\n    handleRemoteCommand(\"REMOTE_BROWSER_GET_BUILTIN\" /* BROWSER_GET_BUILTIN */, function (event, contextId, moduleName, stack) {\n        logStack(event.sender, `remote.getBuiltin('${moduleName}')`, stack);\n        const customEvent = emitCustomEvent(event.sender, 'remote-get-builtin', moduleName);\n        if (customEvent.returnValue === undefined) {\n            if (customEvent.defaultPrevented) {\n                throw new Error(`Blocked remote.getBuiltin('${moduleName}')`);\n            }\n            else {\n                customEvent.returnValue = __webpack_require__(/*! electron */ \"electron\")[moduleName];\n            }\n        }\n        return valueToMeta(event.sender, contextId, customEvent.returnValue);\n    });\n    handleRemoteCommand(\"REMOTE_BROWSER_GET_GLOBAL\" /* BROWSER_GET_GLOBAL */, function (event, contextId, globalName, stack) {\n        logStack(event.sender, `remote.getGlobal('${globalName}')`, stack);\n        const customEvent = emitCustomEvent(event.sender, 'remote-get-global', globalName);\n        if (customEvent.returnValue === undefined) {\n            if (customEvent.defaultPrevented) {\n                throw new Error(`Blocked remote.getGlobal('${globalName}')`);\n            }\n            else {\n                customEvent.returnValue = global[globalName];\n            }\n        }\n        return valueToMeta(event.sender, contextId, customEvent.returnValue);\n    });\n    handleRemoteCommand(\"REMOTE_BROWSER_GET_CURRENT_WINDOW\" /* BROWSER_GET_CURRENT_WINDOW */, function (event, contextId, stack) {\n        logStack(event.sender, 'remote.getCurrentWindow()', stack);\n        const customEvent = emitCustomEvent(event.sender, 'remote-get-current-window');\n        if (customEvent.returnValue === undefined) {\n            if (customEvent.defaultPrevented) {\n                throw new Error('Blocked remote.getCurrentWindow()');\n            }\n            else {\n                customEvent.returnValue = event.sender.getOwnerBrowserWindow();\n            }\n        }\n        return valueToMeta(event.sender, contextId, customEvent.returnValue);\n    });\n    handleRemoteCommand(\"REMOTE_BROWSER_GET_CURRENT_WEB_CONTENTS\" /* BROWSER_GET_CURRENT_WEB_CONTENTS */, function (event, contextId, stack) {\n        logStack(event.sender, 'remote.getCurrentWebContents()', stack);\n        const customEvent = emitCustomEvent(event.sender, 'remote-get-current-web-contents');\n        if (customEvent.returnValue === undefined) {\n            if (customEvent.defaultPrevented) {\n                throw new Error('Blocked remote.getCurrentWebContents()');\n            }\n            else {\n                customEvent.returnValue = event.sender;\n            }\n        }\n        return valueToMeta(event.sender, contextId, customEvent.returnValue);\n    });\n    handleRemoteCommand(\"REMOTE_BROWSER_CONSTRUCTOR\" /* BROWSER_CONSTRUCTOR */, function (event, contextId, id, args) {\n        args = unwrapArgs(event.sender, event.frameId, contextId, args);\n        const constructor = objects_registry_1.default.get(id);\n        if (constructor == null) {\n            throwRPCError(`Cannot call constructor on missing remote object ${id}`);\n        }\n        return valueToMeta(event.sender, contextId, new constructor(...args));\n    });\n    handleRemoteCommand(\"REMOTE_BROWSER_FUNCTION_CALL\" /* BROWSER_FUNCTION_CALL */, function (event, contextId, id, args) {\n        args = unwrapArgs(event.sender, event.frameId, contextId, args);\n        const func = objects_registry_1.default.get(id);\n        if (func == null) {\n            throwRPCError(`Cannot call function on missing remote object ${id}`);\n        }\n        try {\n            return valueToMeta(event.sender, contextId, func(...args), true);\n        }\n        catch (error) {\n            const err = new Error(`Could not call remote function '${func.name || \"anonymous\"}'. Check that the function signature is correct. Underlying error: ${error}\\n` +\n                (error instanceof Error ? `Underlying stack: ${error.stack}\\n` : \"\"));\n            err.cause = error;\n            throw err;\n        }\n    });\n    handleRemoteCommand(\"REMOTE_BROWSER_MEMBER_CONSTRUCTOR\" /* BROWSER_MEMBER_CONSTRUCTOR */, function (event, contextId, id, method, args) {\n        args = unwrapArgs(event.sender, event.frameId, contextId, args);\n        const object = objects_registry_1.default.get(id);\n        if (object == null) {\n            throwRPCError(`Cannot call constructor '${method}' on missing remote object ${id}`);\n        }\n        return valueToMeta(event.sender, contextId, new object[method](...args));\n    });\n    handleRemoteCommand(\"REMOTE_BROWSER_MEMBER_CALL\" /* BROWSER_MEMBER_CALL */, function (event, contextId, id, method, args) {\n        args = unwrapArgs(event.sender, event.frameId, contextId, args);\n        const object = objects_registry_1.default.get(id);\n        if (object == null) {\n            throwRPCError(`Cannot call method '${method}' on missing remote object ${id}`);\n        }\n        try {\n            return valueToMeta(event.sender, contextId, object[method](...args), true);\n        }\n        catch (error) {\n            const err = new Error(`Could not call remote method '${method}'. Check that the method signature is correct. Underlying error: ${error}` +\n                (error instanceof Error ? `Underlying stack: ${error.stack}\\n` : \"\"));\n            err.cause = error;\n            throw err;\n        }\n    });\n    handleRemoteCommand(\"REMOTE_BROWSER_MEMBER_SET\" /* BROWSER_MEMBER_SET */, function (event, contextId, id, name, args) {\n        args = unwrapArgs(event.sender, event.frameId, contextId, args);\n        const obj = objects_registry_1.default.get(id);\n        if (obj == null) {\n            throwRPCError(`Cannot set property '${name}' on missing remote object ${id}`);\n        }\n        obj[name] = args[0];\n        return null;\n    });\n    handleRemoteCommand(\"REMOTE_BROWSER_MEMBER_GET\" /* BROWSER_MEMBER_GET */, function (event, contextId, id, name) {\n        const obj = objects_registry_1.default.get(id);\n        if (obj == null) {\n            throwRPCError(`Cannot get property '${name}' on missing remote object ${id}`);\n        }\n        return valueToMeta(event.sender, contextId, obj[name]);\n    });\n    handleRemoteCommand(\"REMOTE_BROWSER_DEREFERENCE\" /* BROWSER_DEREFERENCE */, function (event, contextId, id) {\n        objects_registry_1.default.remove(event.sender, contextId, id);\n    });\n    handleRemoteCommand(\"REMOTE_BROWSER_CONTEXT_RELEASE\" /* BROWSER_CONTEXT_RELEASE */, (event, contextId) => {\n        objects_registry_1.default.clear(event.sender, contextId);\n        return null;\n    });\n}\nexports.initialize = initialize;\n\n\n//# sourceURL=webpack://ElDa/./node_modules/@electron/remote/dist/src/main/server.js?");

/***/ }),

/***/ "./node_modules/@electron/remote/main/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@electron/remote/main/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ../dist/src/main */ \"./node_modules/@electron/remote/dist/src/main/index.js\")\n\n\n//# sourceURL=webpack://ElDa/./node_modules/@electron/remote/main/index.js?");

/***/ }),

/***/ "./resources/eliconTemplate.png":
/*!**************************************!*\
  !*** ./resources/eliconTemplate.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"resources/eliconTemplate.png\");\n\n//# sourceURL=webpack://ElDa/./resources/eliconTemplate.png?");

/***/ }),

/***/ "./node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1! ***!
  \*************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("(()=>{\"use strict\";var e={n:r=>{var o=r&&r.__esModule?()=>r.default:()=>r;return e.d(o,{a:o}),o},d:(r,o)=>{for(var t in o)e.o(o,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:o[t]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})}},r={};e.r(r);const o=__webpack_require__(/*! electron */ \"electron\"),t=__webpack_require__(/*! fs */ \"fs\");var n=e.n(t);const a=__webpack_require__(/*! path */ \"path\");var l=e.n(a),d=[];o.app.on(\"browser-window-created\",((e,r)=>{d.push(r),r.on(\"closed\",(()=>{console.log(d.indexOf(r)),d.splice(d.indexOf(r),1)}))})),n().watch(l().resolve(__dirname,\"..\",\"renderer\"),{},(()=>{Object.values(d).forEach((e=>{e&&e.webContents.reloadIgnoringCache()}))})),module.exports=r})();\n\n//# sourceURL=webpack://ElDa/?./node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1");

/***/ }),

/***/ "./src/main/index.js":
/*!***************************!*\
  !*** ./src/main/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var eliconTemplate_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! eliconTemplate.png */ \"./resources/eliconTemplate.png\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n// In this file you can include the rest of your app's specific main process\n// code. You can also put them in separate files and require them here.\n\n\n\nconst remoteMain = __webpack_require__(/*! @electron/remote/main */ \"./node_modules/@electron/remote/main/index.js\");\nremoteMain.initialize();\n\nelectron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on('offline', () => {\n  console.log('App is offline');\n});\n\nelectron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on('online', () => {\n  console.log('App is offline');\n});\n\nconst createWindow = (width, height) => {\n  let window = new electron__WEBPACK_IMPORTED_MODULE_0__.BrowserWindow({\n    minWidth: 400,\n    minHeight: 400,\n    width: 800,\n    height: 800,\n    maxHeight: height,\n    maxWidth: width,\n    show: false,\n    backgroundColor: '#778beb',\n    titleBarStyle: 'hidden',\n    webPreferences: {\n      preload: path__WEBPACK_IMPORTED_MODULE_2___default().join(electron__WEBPACK_IMPORTED_MODULE_0__.app.getAppPath(), 'preload', 'index.js'),\n      // contextIsolation: false\n    }\n  });\n\n  const tray = new electron__WEBPACK_IMPORTED_MODULE_0__.Tray(path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, eliconTemplate_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n\n  tray.setToolTip('Hey bro!');\n\n\n  const trayMenu = new electron__WEBPACK_IMPORTED_MODULE_0__.Menu.buildFromTemplate([\n    {\n      label: 'show/hide',\n      click() {\n        window.isVisible() ? window.hide() : window.show();\n      }\n    },\n    {\n      role: 'quit'\n    },\n  ]);\n\n  tray.setContextMenu(trayMenu);\n\n  window.loadFile('renderer/index.html');\n  window.webContents.openDevTools({ mode: 'detach' });\n\n  window.on('ready-to-show', () => {\n    window.show()\n  });\n\n}\n\n\n\nelectron__WEBPACK_IMPORTED_MODULE_0__.app.on('ready', () => {\n  const { width, height } = electron__WEBPACK_IMPORTED_MODULE_0__.screen.getPrimaryDisplay().workAreaSize;\n  createWindow(width, height);\n\n})\n\n//# sourceURL=webpack://ElDa/./src/main/index.js?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main/index.js");
/******/ 	
/******/ })()
;