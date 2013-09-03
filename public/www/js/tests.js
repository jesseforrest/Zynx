/**
 * This Javascript file holds unit tests for the Javascript code
 * 
 * @author Jesse Forrest <jesse@jesseforrest@gmail.com> 
 * @package Zynx
 * @copyright Copyright (c) 2013
 * @filesource 
 */


test("Testing roundNearestCent Function", function() {
   equal($(document).roundNearestCent(1.230), 1.23, "Rounding 1.230 down to nearest cent");
   equal($(document).roundNearestCent(1.234), 1.23, "Rounding 1.234 down to nearest cent");
   equal($(document).roundNearestCent(1.235), 1.24, "Rounding 1.235 up to nearest cent");
   equal($(document).roundNearestCent(1.239), 1.24, "Rounding 1.239 up to nearest cent");
   equal($(document).roundNearestCent(0.1), 0.10, "Rounding one digit to 2 digits");
   equal($(document).roundNearestCent(1), 1.00, "Rounding integer to float");
   equal($(document).roundNearestCent(null), 0.00, "Rounding null equates to 0.00");
});

test("Testing ceilNearestCent Function", function() {
   equal($(document).ceilNearestCent(1.230), 1.23, "Ceiling 1.230 up to nearest cent");
   equal($(document).ceilNearestCent(1.234), 1.24, "Ceiling 1.234 up to nearest cent");
   equal($(document).ceilNearestCent(1.235), 1.24, "Ceiling 1.235 up to nearest cent");
   equal($(document).ceilNearestCent(1.239), 1.24, "Ceiling 1.239 up to nearest cent");
   equal($(document).ceilNearestCent(0.1), 0.10, "Ceiling one digit to 2 digits");
   equal($(document).ceilNearestCent(1), 1.00, "Ceiling integer to float");
   equal($(document).ceilNearestCent(null), 0.00, "Ceiling null equates to 0.00");
});

test("Testing nearestSevenCents Function", function() {
   equal($(document).nearestSevenCents(0), 0.00, "Rounding 0 to nearest 7 cents");
   equal($(document).nearestSevenCents(0.01), 0.07, "Rounding 0.01 to nearest 7 cents");
   equal($(document).nearestSevenCents(1.230), 1.26, "Rounding 1.230 to nearest 7 cents");
   equal($(document).nearestSevenCents(1.234), 1.26, "Rounding 1.230 to nearest 7 cents");
   equal($(document).nearestSevenCents(1.235), 1.26, "Rounding 1.230 to nearest 7 cents");
   equal($(document).nearestSevenCents(1.239), 1.26, "Rounding 1.230 to nearest 7 cents");
   equal($(document).nearestSevenCents(0.1), 0.14, "Rounding 1.230 to nearest 7 cents");
   equal($(document).nearestSevenCents(1), 1.05, "Rounding integer 1 to nearest 7 cents");
   equal($(document).nearestSevenCents(null), 0.00, "Rounding null to nearest 7 cents");
});
