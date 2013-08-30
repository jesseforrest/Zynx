<?php
/**
 * This file holds the Recipe Model class
 *
 * PHP version 5
 *
 * @category  PHP
 * @package   Zynx
 * @author    Jesse Forrest <jesseforrest@gmail.com>
 * @copyright 2013 Zynx
 * @license   https://github.com/jesseforrest/Zynx License 1.0
 * @link      https://github.com/jesseforrest/Zynx/wiki
 */

/**
 * This class handles functionality to retrieve recipes
 *
 * @category  PHP
 * @package   Zynx
 * @author    Jesse Forrest <jesseforrest@gmail.com>
 * @copyright 2013 Zynx
 * @license   https://github.com/jesseforrest/Zynx License 1.0
 * @link      https://github.com/jesseforrest/Zynx/wiki
 */
class ModelRecipe
{
   /**
    * Get all default recipes
    *
    * @return array Returns an associative array of available recipes and their
    * ingredients. 
    */
   static public function getRecipes()
   {
      $recipes = array(
         'Recipe 1' => array(
            'Clove of Organic Garlic' => 1,
            'Lemon' => 1,
            'Cup of Organic Olive Oil' => 0.75,
            'Teaspoon of Salt' => 0.75,
            'Teaspoon of Pepper' => 0.5
         ),
         'Recipe 2' => array(
            'Clove of Organic Garlic' => 1,
            'Chicken Breast' => 4,
            'Cup of Organic Olive Oil' => 0.5,
            'Cup of Vinegar' => 0.5
         ),
         'Recipe 3' => array(
            'Clove of Organic Garlic' => 1,
            'Cup of Corn' => 4,
            'Slice of Bacon' => 4,
            'Ounce of Pasta' => 8,
            'Cup of Organic Olive Oil' => 0.33,
            'Teaspoon of Salt' => 1.25,
            'Teaspoon of Pepper' => 0.75
         )           
      );
      
      return $recipes;
   } 
}
