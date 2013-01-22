//
// Use internal $.serializeArray to get list of form elements which is consistent with $.serialize
//
// And to avoid names such as
// => object["favorite-color"]
//
// We camelcase the name part, so the notation becomes
// => object["favoriteColor"]
//
// Conveniently, this allows period notation to be used.
// => object.favoriteColor
//
// This behaviour is similar to $(element).data()
//
// $('<div data-favorite-color="yellow"></div>').data()
// => { favoriteColor: 'yellow' }
//
$.fn.serializeObject = function (camelCase) {
  var result = Object.create(null);
  var mapper = function (element) {
    if ('undefined' !== typeof camelCase && camelCase === true) {
      element.name = $.camelCase(element.name);
    }
    return element;
  };
  var extend = function (i, element) {
    var node = result[element.name];

// If node with same name exists already, need to convert it to an array as it
// is a multi-value field (i.e., checkboxes)

    if ('undefined' !== typeof node && node !== null) {
      node.push ? result[element.name].push(element.value) : result[element.name] = [node, element.value];
    } else {
      result[element.name] = element.value;
    }
  };

// For each serialzable element, convert element names to camelCasing and
// extend each of them to a JSON object

  $.each($.map(this.serializeArray(), mapper), extend);
  return result;
};
