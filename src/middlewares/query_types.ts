import qs from 'qs';
import Koa from 'koa';

function isObject(val) {
    return val.constructor === Object;
}

function isNumber(val) {
    return !isNaN(parseFloat(val)) && isFinite(val);
}

function isBoolean(val) {
    return val === 'false' || val === 'true';
}

function isArray(val) {
    return Array.isArray(val);
}

function parseValue(val) {
    if (typeof val == 'undefined' || val == '') {
        return null;
    } else if (isBoolean(val)) {
        return parseBoolean(val);
    } else if (isArray(val)) {
        return parseArray(val);
    } else if (isObject(val)) {
        return parseObject(val);
    } else if (isNumber(val)) {
        return parseNumber(val);
    } else {
        if (val[0] == '"' || val[0] == "'") {
            val = val.substring(1, val.length - 1);
        }
        return val;
    }
}

function parseObject(obj) {
    var result = {};
    var key, val;
    for (key in obj) {
        val = parseValue(obj[key]);
        if (val !== null) result[key] = val; // ignore null values
    }
    return result;
}

function parseArray(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result[i] = parseValue(arr[i]);
    }
    return result;
}

function parseNumber(val) {
    return Number(val);
}

function parseBoolean(val) {
    return val === 'true';
}

async function middleware(ctx: Koa.Context, next: Koa.Next) {
    ctx.querymap = parseObject(qs.parse(ctx.querystring));
    await next();
}

export default {
    middleware,
};