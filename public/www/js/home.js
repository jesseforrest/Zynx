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
   
   // If recipes exist
   if ($('.recipes').length) {
      var recipes = $('.recipes').data('json');
      $.each(recipes, function(name, contents) {
         $('.recipes_list').append(''
            + '<div class="list-group-item">'
               + '<input ' 
                  + 'type="button" '
                  + 'class="btn btn-sm btn-danger recipe_remove" '
                  + 'value="Remove"/>'
               + '<h4 class="list-group-item-heading">' + name + '</h4>'
            + '</div>');
         $.each(contents, function(ingredient_name, ingredient_amount) {
            $('.recipes .list-group-item').last().append(''
               + '<p class="list-group-item-text">'
                  + ingredient_amount + ' ' + ingredient_name
               + '</p>');
         });
      });
   }   
   
   /**
    * Remove recipe clicked
    */
   $(".recipe_remove").click(function(){
      $(this).parent().remove();
   });
   
   $(".list-group-item").hover(
      function(el){
         $(this).children(".btn").not("#recipe_add").fadeIn('fast');
      }, function(){
         $(this).children(".btn").not("#recipe_add").hide();
      }
   );
   
   $("#ingredient_add_small").click(function(){
      $(this).fadeOut('fast');
      $("#add_ingredients").slideDown('slow');
   });
   
   $("#ingredient_add").click(function() {
      var error = null,
         ingredients = $('.ingredients').data('json'),
         name = $.trim($("#ingredient_name").val()),
         price = $.trim($("#ingredient_price").val());
      
      if (name == "") {
         error = "Enter an ingredient name";
      } else if (name in ingredients) {
         error = "Ingredient already exists on list";
      } else if (price == "") {
         error = "Enter an ingredient price";
      } else if ($.isNumeric(price) == false) {
         error = "Ingredient price must be numeric";
      }
      
      // Show errors
      if (error != null) {
         $("#ingredient_alert").html(error);
         $("#ingredient_alert").fadeIn('fast');
      } else {
         var ingredients = $('.ingredients').data('json');         
         price = parseFloat(price).toFixed(2);
         // Aad current ingredient to ingredients array
         ingredients[name] = price;
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
