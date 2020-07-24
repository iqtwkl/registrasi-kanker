<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 3/6/2020
 * Time: 5:02 AM
 */

function defaultValue($field, $obj, $value){
    return old($field, is_null($obj)?'':$value);
}