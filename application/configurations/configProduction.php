<?php
/**
 * This file is used to define paths and database configurations for your 
 * production environment.
 *
 * PHP version 5
 *
 * @category  PHP
 * @package   DiamondForrest
 * @author    Jesse Forrest <jesseforrest@gmail.com>
 * @copyright 2012 DiamondForrest
 * @license   https://github.com/jesseforrest/DiamondForrest License 1.0
 * @link      https://github.com/jesseforrest/DiamondForrest/wiki
 */

/**
 * Holds whether or not the current code base is running on your local machine.
 * 
 * @var boolean
 */
define('IS_LOCAL', false);

/**
 * Holds whether or not the current code base is running on a development 
 * machine.
 * 
 * @var boolean
 */
define('IS_DEVELOPMENT', false);

/**
 * Holds whether or not the current code base is running on a staging 
 * machine.
 * 
 * @var boolean
 */
define('IS_STAGING', false);

/**
 * Holds whether or not the current code base is running on a production 
 * machine.
 * 
 * @var boolean
 */
define('IS_PRODUCTION', true);

/**
 * The name of the product as it should appear in media
 *
 * @var string
 */
define('PRODUCT_NAME', 'Zynx');
