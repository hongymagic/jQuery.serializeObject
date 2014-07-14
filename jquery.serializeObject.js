//
// Use internal $.serializeArray to get list of form elements which is
// consistent with $.serialize
//
// From version 2.0.0, $.serializeObject will stop converting [name] values
// to camelCase format. This is *consistent* with other serialize methods:
//
//   - $.serialize
//   - $.serializeArray
//
// If you require camel casing, you can either download version 1.0.4 or map
// them yourself.
//

(function($){
  $.fn.serializeObject = function (options) {
    "use strict";

    var default_options = {
      splitCharacter: '['
    };

    options = $.extend({}, default_options, options || {});

    var result = {};
    var pathArray = function(name) {
      return name.replace(/\]/g,'').split(options.splitCharacter);
    };
    var setValue = function(path, value, result){
      if(path.length) {
        var name = path.shift();
        if (name) {
          if ($.isNumeric(name)) {
            name = parseInt(name, 10);
          }
          if (!path.length && result[name]) {
            path.push('');
            if (!$.isArray(result[name])) {
              result[name] = [result[name]];
            }
          }
          result[name] = setValue(path, value, result[name] || ((path.length && $.isNumeric(path[0]) ? [] : {})));
          return result;
        } else {
          if($.isArray(result)) {
            result.push(value);
            return result;
          } else {
            return [value];
          }
        }
      } else {
        return value;
      }
    };
    var extend = function (i, element) {
      var path = pathArray(element.name);
      setValue(path, element.value, result);
    };

    $.each(this.serializeArray(), extend);
    return result;
  };
})(jQuery);
