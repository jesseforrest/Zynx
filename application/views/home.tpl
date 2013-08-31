<?php require 'header.tpl'; ?>
<div class="video-section">
	<h2>A delightfully simple way to calculate your recipe expenses.</h2>
	<img
		src="img/zynx-splash.jpg" 
		class="img-responsive"
		alt="Zynx Splash" />
</div>
<div class="container content home">
   <div class="ingredients" 
      data-json="<?=htmlentities(json_encode($view['ingredients'])); ?>">
      
      <div id="add_ingredients" class="panel panel-success">
         <div class="panel-heading">
      	   <h3 class="panel-title">Add Ingredient</h3>
         </div>
         <div class="panel-body">
            <div id="ingredient_success" class="alert alert-success"></div>      
         	<div id="ingredient_alert" class="alert alert-danger"></div>
         	1 <input type="text"
         	   class="form-control" 
         	   id="ingredient_name"
         	   placeholder="Ingredient Name"/> = 
      	   $<input type="text"
      	      class="form-control" 
         	   id="ingredient_price"
         	   placeholder="0.00"/>
            <div>
               <input 
                  type="checkbox"
                  id="is_organic"
                  value="1"/>
               <label for="is_organic">Ingredient is Organic</label> 
            </div>
            <div>
               <input 
                  type="checkbox"
                  id="is_produce"
                  value="1"/>
               <label for="is_produce">Ingredient is Produce</label> 
            </div>
            <div class="align_right">
               <input 
                  type="button"
                  class="btn btn-success"
                  id="ingredient_add"
                  value="Add Ingredient"/>
            </div>
         </div>
      </div>
      
      <div class="panel panel-default">
         <div class="panel-heading">
	         <input 
               type="button"
               class="btn btn-sm btn-success"
               id="ingredient_add_small"
               value="Add Ingredient"/>
      	   <h3 class="panel-title ingredients_title">Ingredients</h3>
         </div>
         <div class="panel-body">
         	<div class="ingredients_list">
         	</div>
         </div>
      </div>
	</div>
	
	<div class="recipes" data-json="<?=htmlentities(json_encode($view['recipes'])); ?>">
	   <div class="list-group">
	      <div class="list-group-item active">
	         <input 
               type="button"
               class="btn btn-sm btn-success"
               id="recipe_add"
               value="Add Recipe"/>
         	<h1 class="list-group-item-heading">Recipes</h1>
				<p class="list-group-item-text">Below are all of your available recipes.</p>
			</div>
			<div class="recipes_list"></div>
   	</div>
	</div>
	
	<div class="well">
	   <p><sup>1</sup> Sales Tax (8.6% of the total price rounded up to the nearest 7 cents, applies to everything except produce)</p>
      <p><sup>2</sup> Wellness Discount (-5% of the total price rounded up to the nearest cent, applies only to organic items)</p>
      <p><sup>3</sup> Total Cost (should include the sales tax and the discount)</p>
	</div>
	
	<div class="copy">Copyright &copy; 2013 Jesse Forrest</div>
</div>
