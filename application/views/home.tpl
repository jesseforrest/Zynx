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
      	   <h3 class="panel-title">Add Ingredients</h3>
         </div>
         <div class="panel-body">      
         	<div id="ingredient_alert" class="alert alert-danger"></div>
         	1 <input type="text"
         	   class="form-control" 
         	   id="ingredient_name"
         	   placeholder="Ingredient Name"/> = 
      	   $<input type="text"
      	      class="form-control" 
         	   id="ingredient_price"
         	   placeholder="0.00"/>
            <input 
               type="button"
               class="btn btn-success"
               id="ingredient_add"
               value="Add"/>
         </div>
      </div>
      
      <div class="panel panel-default">
         <div class="panel-heading">
	         <input 
               type="button"
               class="btn btn-sm btn-success"
               id="ingredient_add_small"
               value="Add Ingredients"/>
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
</div>
