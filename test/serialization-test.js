
module('serialization test');

test('simple form test', function () {
	var form = $('form#simple-form');
	var data = form.serializeObject();
	var expected = {
		name: 'John Apple',
		age: '21',
		email: 'john.apple@apple.com',
		password: '',
		'legal-age': 'yes'
	};

	deepEqual(data, expected, 'Key/value pairs should be identical');
});

test('multi value inputs', function () {
	var form = $('form#multi-value-form');
	var data = form.serializeObject();
	var expected = {
		food: ['Banana', 'Melon'],
		drink: [
			'Water',
			'Milk',
			'Beer',
			'Cocktail'
		]
	};

	deepEqual(data, expected, 'Multiple values should be an array');
});
