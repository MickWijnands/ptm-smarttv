<?php

class Example_TypeTest extends PHPUnit_Framework_TestCase
{


    public function testName() {
	$this->assertSame('string', 'string');
}
/*
		setUp : function () {
			this.data = { name : "Nicholas", age : 28 };
		},
		
		// And you can ofcourse clean up after yourself
		tearDown : function () {
			delete this.data;
		},

		// Tests
		testName: function () {
			Y.Assert.isString(this.data.name, "Name should be a string");
		},
		testAge: function () {
			Y.Assert.isNumber(this.data.age, "Age should be a number");
		},
		testDataTypeAsserts : function () {
			Y.Assert.isString("Hello world");     //passes
			Y.Assert.isNumber(1);                 //passes
			Y.Assert.isArray([]);                 //passes
			Y.Assert.isObject([]);                //passes
			Y.Assert.isFunction(function(){});    //passes
			Y.Assert.isBoolean(true);             //passes
			Y.Assert.isObject(function(){});      //passes
			}*/
}