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
   
   $.fn.refreshRecipeAddForm = function(){
      var ingredients = $('.ingredients').data('json');
      $('#recipe_ingredients').html("");
      $.each(ingredients, function(name, details) {
         $('#recipe_ingredients').append(""
            + "<p>"
               + '<input type="text" '
                  + 'class="form-control amount_field" '
                  + 'placeholder="0.00" '
                  + 'data-name="' + name + '" '
                  + ' /> ' + name  
            + "</p>");
      });      
   };
   
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
   
   $.fn.refreshRecipes = function(){
      var recipes = $('.recipes').data('json'),
         ingredients = $('.ingredients').data('json'),
         sub_total = 0.00,
         tax = 0.00,
         discount = 0.00,
         total = 0.00;
      $('.recipes_list').html("");
      $.each(recipes, function(name, contents) {
         sub_total = 0.00;
         tax = 0.00;
         discount = 0.00;
         total = 0.00;
         
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
            ingredient_cost = $(this).ceilNearestCent(ingredient_cost);
            
            $('.recipes .list-group-item').last().append(''
               + '<p class="list-group-item-text">'
                  + ingredient_amount + ' ' + ingredient_name
                  + ' = $' + ingredient_cost
               + '</p>');
            sub_total += ingredient_cost;
            if (ingredients[ingredient_name].is_produce == '0') {
               tax += ingredient_cost;
            }
            if (ingredients[ingredient_name].is_organic == '1') {
               discount += ingredient_cost;
            }
         });
         tax = $(this).nearestSevenCents(tax * .086);
         discount = $(this).ceilNearestCent(discount * .05);
         sub_total = $(this).roundNearestCent(sub_total);
         
         total = sub_total + tax - discount;
         $('.recipes .list-group-item').last().append(''
               + '<div class="sub_total">'
                  + 'Sub Total: $' + sub_total
               + '</div>'
               + '<div>'
                  + 'Sales Tax: $' + tax
               + '</div>'
               + '<div>'
                  + 'Wellness Discount: ($' + discount + ')'
               + '</div>'
               + '<div>'
                  + 'Total Cost: <strong>$' + total.toFixed(2) + '</strong>'
               + '</div>');
      });
   };
   
   /**
    * Move up to nearest .07 cents
    * 
    * @return float
    */
   $.fn.nearestSevenCents = function(amount){
      return ((Math.ceil((amount * 100) / 7) * 7) / 100);
   };
   
   /**
    * Round up to nearest cent
    * 
    * @return float
    */
   $.fn.ceilNearestCent = function(amount){
      return ((Math.ceil((amount * 100) / 1) * 1) / 100);
   };
   
   /**
    * Round to nearest cent
    * 
    * @return float
    */
   $.fn.roundNearestCent = function(amount){
      return ((Math.round((amount * 100) / 1) * 1) / 100);
   };
   
   // If ingredients exist
   if ($('.ingredients').length) {
      $(this).refreshIngredients();
      $(this).refreshRecipeAddForm();
   }
   
   // If recipes exist
   if ($('.recipes').length) {
      $(this).refreshRecipes();
   }   
   
   /**
    * Remove recipe clicked
    */
   $(".recipe_remove").click(function(){
      $(this).parent().remove();
   });
   
   $(".list-group-item").hover(
      function(el){
         $(this).children(".btn").not("#recipe_add_small").fadeIn('fast');
      }, function(){
         $(this).children(".btn").not("#recipe_add_small").hide();
      }
   );

   $("#recipe_add_small").click(function(){
      $(this).fadeOut('fast');
      $("#add_recipes").slideDown('slow');
   });
   
   $("#ingredient_add_small").click(function(){
      $(this).fadeOut('fast');
      $("#add_ingredients").slideDown('slow');
   });
   
   $("#recipe_add").click(function() {
      var error = null,
         ingredients = $('.ingredients').data('json'),
         recipes = $('.recipes').data('json'),
         name = $.trim($("#recipe_name").val());
      
      if (name == "") {
         error = "Enter a recipe name";
      } else if (name in recipes) {
         error = "That recipe name already exists";
      }
      
      // Show errors
      if (error != null) {
         $("#recipe_success").hide();
         $("#recipe_alert").html(error);
         $("#recipe_alert").fadeIn('fast');
      } else {
         // Add current recipe to recipes array
         recipes[name] = {};
         
         $("#recipe_ingredients input[type=text]").each(function() {
            if ((this.value != "") 
               && (this.value != "0.00") 
               && ($.isNumeric(this.value))) {
               recipes[name][$(this).data('name')] = this.value;
            }
         });
         
         // Set the recipes back to the JSON array 
         $('.recipes').data('json', recipes);
         // Append new recipe
         $(this).refreshRecipes();
         // Show success message
         $("#recipe_alert").hide();
         $("#recipe_success").html('Successfully added ' + name);
         $("#recipe_success").fadeIn('fast');
         // Reset input field
         $("#recipe_alert").hide();
         $("#recipe_name").val("");
         $("#recipe_ingredients input[type=text]").val("");
      }
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
         // Add current ingredient to ingredients array
         ingredients[name] = {};
         ingredients[name]['cost'] = price;
         ingredients[name]['is_organic'] = is_organic;
         ingredients[name]['is_produce'] = is_produce;
         
         // Set the ingredients back to the 
         $('.ingredients').data('json', ingredients);
         // Refresh necessary areas
         $(this).refreshIngredients();
         $(this).refreshRecipeAddForm();
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
