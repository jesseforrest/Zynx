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
   
   $.fn.refreshIngredients = function(){
      var ingredients = $('.ingredients').data('json');
      $('.ingredients_list').html("");
      $.each(ingredients, function(name, details) {
         var is_organic = (details.is_organic == '1') ? true : false,
            is_produce = (details.is_produce == '1') ? true : false,
            extra_html = '';
         if (is_organic || is_produce) {
            extra_html += ' (';
            if (is_organic) {
               extra_html += 'organic';
            }
            if (is_organic && is_produce) {
               extra_html += ' &amp; ';
            }
            if (is_produce) {
               extra_html += 'produce';
            }
            extra_html += ')';
         }
         $('.ingredients_list').append(""
            + "<p>"
               + "1 " + name + " = $" + details.cost + extra_html 
            + "</p>");
      });      
   };
   
   // If ingredients exist
   if ($('.ingredients').length) {
      $(this).refreshIngredients();
   }
   
   // If recipes exist
   if ($('.recipes').length) {
      var recipes = $('.recipes').data('json'),
         ingredients = $('.ingredients').data('json'),
         sub_total = 0.00,
         tax = 0.00,
         discount = 0.00,
         total = 0.00;
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
            var ingredient_cost = ingredient_amount * ingredients[ingredient_name].cost;
            $('.recipes .list-group-item').last().append(''
               + '<p class="list-group-item-text">'
                  + ingredient_amount + ' ' + ingredient_name
                  //@todo Remove later
                  + ' = $' + ingredient_cost.toFixed(2)
               + '</p>');
            sub_total += ingredient_cost; 
         });
         
         $('.recipes .list-group-item').last().append(''
               + '<div>'
                  + 'Sub Total: $' + sub_total.toFixed(2)
               + '</div>'
               + '<div class="sales_tax">'
                  + 'Sales Tax: $' + tax.toFixed(2)
               + '</div>'
               + '<div>'
                  + 'Wellness Discount: ($' + discount.toFixed(2) + ')'
               + '</div>'
               + '<div>'
                  + 'Total Cost: <strong>$' + total.toFixed(2) + '</strong>'
               + '</div>');
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
         price = $.trim($("#ingredient_price").val()),
         is_organic = ($("#is_organic:checked").length > 0) ? '1' : '0',
         is_produce = ($("#is_produce:checked").length > 0) ? '1' : '0';
      
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
         $("#ingredient_success").hide();
         $("#ingredient_alert").html(error);
         $("#ingredient_alert").fadeIn('fast');
      } else {
         var ingredients = $('.ingredients').data('json');         
         price = parseFloat(price).toFixed(2);
         // Aad current ingredient to ingredients array
         ingredients[name] = {};
         ingredients[name]['cost'] = price;
         ingredients[name]['is_organic'] = is_organic;
         ingredients[name]['is_produce'] = is_produce;
         
         // Set the ingredients back to the 
         $('.ingredients').data('json', ingredients);
         // Append new ingredient
         $(this).refreshIngredients();
         // Show success message
         $("#ingredient_alert").hide();
         $("#ingredient_success").html('Successfully added ' + name);
         $("#ingredient_success").fadeIn('fast');
         // Reset input field
         $("#ingredient_alert").hide();
         $("#ingredient_name").val("");
         $("#ingredient_price").val("");
      }
   });
});
