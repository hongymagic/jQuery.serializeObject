/**
 * for complex data structures.
 * specially, for some application use mongodb.
 */
(function($) {

function isCheckBox(elem) {
    return (elem.length ? elem[0] : elem).type === 'checkbox';
}

function isExist(value) {
    return 'undefined' !== typeof value && null !== value;
}

function formatObject(name, value, result, isArray) {
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
        
   if (/^\d+$/.test(value)) {
       value = parseInt(value, 10);
   }

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
                        result[k] = isArray ? [value] : value;
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
                    result[key] = isArray ? [value] : value;
                }
            }
        }
    }
}
$.fn.serializeObject = function (callback) {
    "use strict";
    var result = {}, _this = this;
    $.each(_this.serializeArray(), function(i, elem) {
        formatObject(elem.name, elem.value, result, isCheckBox(_this[0].elements[elem.name]));
    });
    callback && callback(result);
    return result;
};
})(jQuery);
