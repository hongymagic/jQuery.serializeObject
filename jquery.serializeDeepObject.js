/**
 * for complex data structures.
 * specially, for some application use mongodb.
 */
(function($) {

function isExist(value) {
    return 'undefined' !== typeof value && null !== value;
}

function getNumber(val) {
    return isNaN(val) && '' !== val ? val : parseInt(val, 10);
}
function formatObject(name, value, result) {
    var nameList = name.split('.'),
        node,
        key,
        k,
        setValue = function (k, v) {
            if (!isExist(result[k])) {
                result[k] = v || {};
            }
            result = result[k];
        };

    while((key = nameList.shift())) {
        // array
        if (~key.indexOf('[')) {
            key = key.split('[');
            setValue(key.shift(), []);
            while((k = key.shift())) {
                k = k.slice(0, -1);
                if (key.length) {
                    setValue(k, []);
                } else {
                    // not end
                    if (nameList.length) {
                        setValue(k);
                    } else {
                        result[k] = value;
                    }
                }
            }
        } else {
            // not end. means it is a object
            if (nameList.length) {
                setValue(key);
            } else {
                if (isExist(result[key])) {
                    if ($.isArray(result[key])) {
                        result[key].push(value);
                    } else {
                        result[key] = [result[key], value];
                    }
                } else {
                    result[key] = value;
                }
            }
        }
    }
}
$.fn.serializeDeepObject = function () {
    "use strict";
    var result = {};
    $.each(this.serializeArray(), function(i, elem) {
        formatObject(elem.name, elem.value, result);
    });
    return result;
};

})(jQuery);
