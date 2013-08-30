<?php require 'header.tpl'; ?>
<div class="video-section">
	<h2>A delightfully simple way to calculate your recipe expenses.</h2>
	<img
		src="img/zynx-splash.jpg" 
		class="img-responsive"
		alt="Zynx Splash" />
</div>
<div class="container content home">
   <div class="ingredients panel panel-default" 
      data-json="<?=htmlentities(json_encode($view['ingredients'])); ?>">
      <div class="panel-heading">
   	   <h3 class="panel-title">Available Ingredients</h3>
      </div>
      <div class="panel-body">
      	<div class="ingredients_list">
      	</div>
   
      	<br/>
      	<h4>Add Another Ingredient</h4>
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
	
	<div class="recipes" data-json="<?=htmlentities(json_encode($view['recipes'])); ?>">
   	<h1>Recipes</h1>
   	<p>Click on a recipe below to see details about it.</p>
	</div>
</div>
