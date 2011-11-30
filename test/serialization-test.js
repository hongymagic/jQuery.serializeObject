
module('serialization test');

test('simple form test', function () {
  var form = $('form#simple-form'),
      data = form.serializeObject(),
      expected = {                                                                                                                                                                      
        name: 'John Apple',                                                    
        age: '21',                                                               
        email: 'john.apple@apple.com',                                         
        password: '',                                                          
        legalAge: 'yes'
      };

  deepEqual(data, expected, 'Key/value pairs should be identical');
});

