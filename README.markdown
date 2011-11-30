
# What is it?

`$.serializeObject` is a variant of existing `$.serialize` method which, instead
of encoding form elements to string, converts form elements to a valid JSON
object.

# Why?

Whilst it isn't necessary in most cases, and by that I mean 99.99% kind of most,
there are times when we manipulate form data on client side. Personally I find
JSON much easier to work with than DOM or string manipulation.

# How do I use it?

If you want to see the code and demo first: http://jsfiddle.net/davidhong/gP9bh/

Simple include the `jQuery.serializeObject.js` along with any `jQuery` instance
and use it like `$.serialize`.

If you have a `form` like the following:

    <form id="minutes">
      <input type="text" name="subject" />
      <input type="text" name="minute-taker" />
      <input type="text" name="attendees" />
      ...
    </form>

and wish to convert them to a JSON object:

    var minutes = $('form#minutes').serializeObject();

will return:

    {
      subject: '',
      minuteTaker: '',
      attendees: ''
    }

