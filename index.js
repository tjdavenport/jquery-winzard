module.exports = function(jQuery) {
  'use strict';

  var $ = jQuery;

  jQuery.fn.winzard = function(passed) {
    var defaults = {
      transition: function($current, $next) {
        $current.fadeOut('fast', function() {
          $next.fadeIn('fast');
        });
      },
      callbacks: [],
      toHide: function($form) {
        $form.hide();
      },
      toShow: function($form) {
        $form.show();
      }
    };
    var options = $.extend({}, defaults, passed);

    var winzard = new Winzard(
      this.find('> form'),
      options.callbacks,
      options.transition,
      options.toHide,
      options.toShow
    );

  };

  function Winzard($forms, callbacks, transition, toHide, toShow) {
    this.$forms = $forms;
    this.transition = transition;
    this.toHide = toHide;
    this.toShow = toShow;

    $.each(callbacks, function(index, callback) {
      var that = this;
      var $form = $(this.$forms[index]);
      $form.submit(function(event) {
        callback(that, $form, event);
      });
    }.bind(this));

    this.hideAll();
    this.current = 0;
    this.toShow($(this.$forms[0]));
  }

  Winzard.prototype.hideAll = function() {
    $.each(this.$forms, function(index, form) {
      var $form = $(form);
      this.toHide($form);
    }.bind(this))
  };

  Winzard.prototype.goTo = function(index) {
    var currentCache = this.current;
    this.current = index;

    this.transition($(this.$forms[currentCache]), $(this.$forms[index]));
  };

  Winzard.prototype.next = function() {
    this.goTo(this.current + 1);
  };

  Winzard.prototype.previous = function() {
    this.goTo(this.current - 1);
  }

}
