
module('serialization deep test');

test('simple form test', function () {
	var form = $('form#simple-form');
	var data = form.serializeDeepObject();
	var expected = {
        user: [{
            name: 'John Apple',
            age: '21',
            email: 'john.apple@apple.com',
            password: '',
            legal: {
                age: 'yes'
            }
        }]
	};

	deepEqual(data, expected, 'SimpleKey/value pairs should be identical');
});

test('multi value inputs', function () {
	var form = $('form#multi-value-form');
	var data = form.serializeDeepObject();
	var expected = {
        cate: {
            food: ['Banana', 'Melon'],
            drink: [
                'Water',
                'Milk',
                'Beer',
                'Cocktail'
            ]
        }
	};

	deepEqual(data, expected, 'Multiple values should be an array');
});
