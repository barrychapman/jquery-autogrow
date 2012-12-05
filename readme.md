# jQuery-Autogrow

A plugin to automatically extend the height of textareas as content is added

## Setup

Extract this to your jQuery plugins folder 

The only limitation, is that it requires you to set the `cols` and `rows` attributes of the textarea in your markup.

```html
	<textarea rows="6" cols="28" name="mytextarea" id="my_textarea"></textarea>
```


After you have jQuery loaded, initialize like so:

```javascript
	$(function() {
		$('.my-autogrow-class').autoGrow();
	}
```

Easy as that!