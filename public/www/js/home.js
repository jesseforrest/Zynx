/**
 * This Javascript file is used to add functionality to the home page.
 * 
 * @author Jesse Forrest <jesse@jesseforrest@gmail.com> 
 * @package Zynx
 * @copyright Copyright (c) 2013
 * @filesource 
 */

/*jslint browser: true, white: true, maxerr: 50, indent: 4, nomen: true, sub: true, */
/*global $: false */
/**
 * On document ready state
 */ 
$(document).ready(function() {
   // If ingredients exist
   if ($('.ingredients').length) {
      var ingredients = $('.ingredients').data('json');
      $.each(ingredients, function(name, price) {
         $('.ingredients_list').append("<p>1 " + name + " = $" + price + "</p>");
      });
   }   
   
   $("#ingredient_add").click(function() {
      var error = null,
         ingredients = $('.ingredients').data('json'),
         name = $.trim($("#ingredient_name").val()),
         price = $.trim($("#ingredient_price").val());
      
      if (name == "") {
         error = "Enter an ingredient name";
      } else if (price == "") {
         error = "Enter an ingredient price";
      } 
      
      // Show errors
      if (error != null) {
         $("#ingredient_alert").html(error);
         $("#ingredient_alert").fadeIn('fast');
      } else {
         var ingredients = $('.ingredients').data('json');
         // Set the ingredients back to the 
         $('.ingredients').data('json', ingredients);
         // Append new ingredient
         $('.ingredients_list').append("<p>1 " + name + " = $" + price + "</p>");
         // Reset input field
         $("#ingredient_alert").hide();
         $("#ingredient_name").val("");
         $("#ingredient_price").val("");
      }
   });
});
