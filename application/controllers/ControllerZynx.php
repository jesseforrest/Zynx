<?php
/**
 * This file holds the Zynx Controller class
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

require_once 'lib/DiamondForrest/Controller.php';
require_once 'application/models/ModelIngredient.php';
require_once 'application/models/ModelRecipe.php';

/**
 * This class handles the main website pages for Zynx
 *
 * @category  PHP
 * @package   Zynx
 * @author    Jesse Forrest <jesseforrest@gmail.com>
 * @copyright 2013 Zynx
 * @license   https://github.com/jesseforrest/Zynx License 1.0
 * @link      https://github.com/jesseforrest/Zynx/wiki
 */
class ControllerZynx extends Controller
{
   /**
    * Class constructor
    * 
    * @return void
    */
   public function __construct()
   {
      parent::__construct();
      $this->setupCss();
      $this->setupJs();
   }
   
   /**
    * This will show the home page
    *
    * @return void
    */
   public function home()
   {
      $this->page->setTitle(PRODUCT_NAME . ' - Recipe Calculator');
      $this->page->setKeywords(PRODUCT_NAME, 'recipe', 'calculator');
      $this->page->setDescription('A simple way to calculate recipe expenses.');
      $this->page->setJavascriptUrls(Revision::getUrl('/js/home.js'));
      $this->page->setViewData('ingredients', ModelIngredient::getIngredients());
      $this->page->setViewData('recipes', ModelRecipe::getRecipes());
      $this->page->setView('application/views/home.tpl');
      $this->page->printPage();
   }
   
   /**
    * Setup the CSS that's included by default in pages
    *
    * @return void
    */
   protected function setupCss()
   {
      $this->page->setCssUrls(
         Revision::getUrl('/css/bootstrap.css'),
         Revision::getUrl('/css/global.css'));
   }
   
   /**
    * Setup the Javascript that's included by default in pages
    *
    * @return void
    */
   protected function setupJs()
   {
      $this->page->setJavascriptUrls(
         Revision::getUrl('/js/jquery-1.10.2.min.js'),
         Revision::getUrl('/js/bootstrap.js'));
   }
}
