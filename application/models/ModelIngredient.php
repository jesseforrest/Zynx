<?php
/**
 * This file holds the Ingredient Model class
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
 * This class handles functionality to retrieve ingredients
 *
 * @category  PHP
 * @package   Zynx
 * @author    Jesse Forrest <jesseforrest@gmail.com>
 * @copyright 2013 Zynx
 * @license   https://github.com/jesseforrest/Zynx License 1.0
 * @link      https://github.com/jesseforrest/Zynx/wiki
 */
class ModelIngredient
{
   /**
    * Get all default ingredient
    *
    * @return array Returns an associative array of available ingredients
    */
   static public function getIngredients()
   {
      $ingredients = array(
         'Clove of Organic Garlic' => '0.67',
         'Lemon' => '2.03',
         'Cup of Corn' => '0.87',
         'Chicken Breast' => '2.19',
         'Slice of Bacon' => '0.24',
         'Ounce of Pasta' => '0.31',
         'Cup of Organic Olive Oil' => '1.92',
         'Cup of Vinegar' => '1.26',
         'Teaspoon of Salt' => '0.16',
         'Teaspoon of Pepper' => '0.17'
      );
      
      ksort($ingredients);
      return $ingredients;
   } 
}
