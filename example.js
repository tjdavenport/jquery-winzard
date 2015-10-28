var $ = require('jquery');
require('./index.js')($);

$('#thingy').winzard({
  callbacks: [
    function(winzard, $form, event) {
      event.preventDefault();
      alert('derp');
      winzard.next();
    },
    function(winzard, $form, event) {
      event.preventDefault();
      alert('YES!');
      winzard.next();
    },
    function(winzard, $form, event) {
      event.preventDefault();
      alert('All done!');
    }
  ]
});
