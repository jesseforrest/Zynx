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
         'Clove of Garlic' => array(
            'cost' => '0.67',
            'is_organic' => '1',
            'is_produce' => '1'
         ), 
         'Lemon' => array(
            'cost' => '2.03',
            'is_organic' => '0',
            'is_produce' => '1'
         ),    
         'Cup of Corn' => array(
            'cost' => '0.87',
            'is_organic' => '0',
            'is_produce' => '1'
         ),
         'Chicken Breast'  => array(
            'cost' => '2.19',
            'is_organic' => '0',
            'is_produce' => '0'
         ),
         'Slice of Bacon' => array(
            'cost' => '0.24',
            'is_organic' => '0',
            'is_produce' => '0'
         ),
         'Ounce of Pasta' => array(
            'cost' => '0.31',
            'is_organic' => '0',
            'is_produce' => '0'
         ),
         'Cup of Olive Oil' => array(
            'cost' => '1.92',
            'is_organic' => '1',
            'is_produce' => '0'
         ),
         'Cup of Vinegar' => array(
            'cost' => '1.26',
            'is_organic' => '0',
            'is_produce' => '0'
         ),
         'Teaspoon of Salt' => array(
            'cost' => '0.16',
            'is_organic' => '0',
            'is_produce' => '0'
         ),
         'Teaspoon of Pepper' => array(
            'cost' => '0.17',
            'is_organic' => '0',
            'is_produce' => '0'
         )
      );
      
      ksort($ingredients);
      return $ingredients;
   } 
}
