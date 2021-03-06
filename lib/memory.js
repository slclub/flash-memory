/**
 * flash-memory
 */

'use strict';
module.exports = exports = createFlash;

/**
 * const key separator
 */
const _SEP = '.';

var flash = null;
function createFlash(mod = false) {

    if (mod == false) {
        new Memory;
    }
    //singeton mode
    if (flash instanceof Memory) {
        return flash;
    }
    flash = new Memory();
    return flash;
}

/**
 * flash function
 *
 * @private
 */
var Memory = function () {
    this._memory = {};
    // this._keys = [];
}

Memory.prototype.name = 'flash-Memory';

/**
 * Obtain the value from memory according to the indexs.
 *
 * @public
 */
Memory.prototype.get = function (key, defaultValue = false) {
    let arrKey = this.dealKey(key);
    let values = {};

    if ('*' === key) {
        return this._memory;
    }

    if (!arrKey.length) {
        return {};
    }

    let kln = arrKey.length;
    let curObj = this._memory;

    for (let i in arrKey) {

        let attr = arrKey[i];
        if (!curObj[attr] || (typeof curObj[attr] != 'object' && (i < kln - 1))) {
            return defaultValue;
        }

        curObj = curObj[attr];
    }

    return curObj;
}

/**
 * Add the data to memory.
 *
 * @public
 */
Memory.prototype.add = function (key, value) {
    let arrKey = this.dealKey(key);
    let curObj = this._memory;
    let len = arrKey.length;
    if (!key) {
        return false;
    }

    for (let i in arrKey){
        //The father object exists.
        if (curObj.hasOwnProperty(i) && i < (len - 1)) {
            continue;
        }

        let attr = arrKey[i];
        curObj[attr] = curObj[attr] || {};
        if (i == (len - 1)) {
            curObj[attr] = value;
        }

        curObj = curObj[attr];
    }
    //  this._keys = this._keys.concat(this.dealKey(key));
    return true;
}

/**
 * Add mutilple values to memory.
 *
 * @public
 */
Memory.prototype.mutliAdd = function (obj = {}) {
    if (typeof obj !== 'object') {
        return false;
    }
    for (let key in obj) {
        this.add(key, obj[key]);
    }
    return true;
}

/**
 * Delete a single data from memory.
 *
 */
Memory.prototype.del = function (key) {
    if (key === '*') {
        this._memory = {};
    }

    let arrKey = this.dealKey(key);

    let len = arrKey.length;
    let curObj = this._memory;

    for (var i = 0; i < len; i++) {
        let attr = arrKey[i];
        if (!curObj.hasOwnProperty(attr)) {
            return false;
        }

        if (i === (len - 1)) {
            delete curObj[attr];
            continue;
        };

        curObj = curObj[attr];
    }

    return true;
}

Memory.prototype.dealKey = function (key) {
    if (!key) {
        return [];
    }

    let arrKey = key.split(_SEP);

    return arrKey ? arrKey : [];
}

/**
 * clear memory.
 *
 * @public
 */
Memory.prototype.clear = function () {
    this._memory = {};
}

Memory.prototype.cc = function (obj) {
    let newObj = new Memory();
    newObj.mutliAdd(obj);
    return newObj;
}
