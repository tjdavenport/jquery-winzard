 Tiny and readable way to define multistep form wizards!
 
 Take some HTML
 ``` HTML
 <!-- Winzard should be called in an element that directly contains a number of forms -->
<div id="thingy">
  <form>
    <label for="exampleInputEmail1">herp</label>
    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="YES">
    <button class="btn btn-default" id="reset" type="submit">OK</button>
  </form>
  <form>
    <label for="exampleInputEmail1">herp</label>
    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="YES">
    <button class="btn btn-default" id="reset" type="submit">OK</button>
  </form>
  <form>
    <label for="exampleInputEmail1">herp</label>
    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="YES">
    <button class="btn btn-default" id="reset" type="submit">OK</button>
  </form>
</div>
 ```
 
Call some magic on it
``` javascript

$('#thingy').winzard({
  transition: function($current, $next) {
    // define a transition to tell Winzard how to transition from one step to the next.
    // the default will use jQuery's fade animations.
  },
  toHide: function($form) {
    // Winzard hides all form steps when called, and then shows the first.
    // You can set this method if you need to hide your forms in a specific way.
    // Uses .hide() by default
  },
  toShow: function($form) {
    // Similar to toHide(), but uses .show() instead
  },
 /**
  * Winzard expects an array of callbacks. Each callback will be bound to a form.
  * Callback at index 0 will be bound to form at index 0. This syntax allows you to
  * define your wizard, step by step!
  */
  callbacks: [
    function(winzard, $form, event) {
      event.preventDefault();
      alert('derp');
      winzard.next();
      // You can also call winzard.previous() to go backwards!
    },
    function(winzard, $form, event) {
      event.preventDefault();
      
      // You could send of ajax requests or validate data in these callbacks
      
      alert('YES!');
      winzard.next();
    },
    function(winzard, $form, event) {
      event.preventDefault();
      alert('All done!');
    }
  ]
});
```
