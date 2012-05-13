// Create a new YUI instance and populate it with the required modules.
YUI({ logInclude: { TestRunner: true } }).use('node', 'test-console', 'test', function (Y) {
	// Test is available and ready for use. Add implementation code here.


	// TestSuites are used to combine several TestCases of a single area
	// Think of applications parts here ('Marktplaats', 'Berichten')
	var exampleTestSuite = new Y.Test.Suite({
		name: 'Example'
	});
	
	// You need to add the testSuite to the runner so the tests get executed
	Y.Test.Runner.add(exampleTestSuite);
	
	// A test case is meant for a single user story; it can contain multple tests
	exampleTestSuite.add(new Y.Test.Case({
		// Name for Test Case
		name: "Test types",
		
		// Here you can do some preparations for your tests; like setting up fake
		// data and initializing objects
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
			}
	}));
	
	exampleTestSuite.add(new Y.Test.Case({
		// Name for Test Case
		name: "Test values",
		
		// Here you can do some preparations for your tests; like setting up fake
		// data and initializing objects
		setUp : function () {
			this.data = { name : "Nicholas", age : 28 };
		},
		
		// And you can ofcourse clean up after yourself
		tearDown : function () {
			delete this.data;
		},

		// Tests
		testName: function () {
			Y.Assert.areEqual("Nicholas", this.data.name, "Name should be 'Nicholas'");
		},
		testAge: function () {
			Y.Assert.areEqual(28, this.data.age, "Age should be 28");
			Y.Assert.areEqual('28', this.data.age, "Age should be 28");
		},
		testEqualityAsserts : function () {
			// NOT recommended
			Y.Assert.areEqual(5, 5);     //passes
			Y.Assert.areEqual(5, "5");     //passes
			Y.Assert.areNotEqual(5, 6);  //passes
		},
		testSamenessAsserts : function () {
			// Sameness is preferred over Equality.
			// Equality: '1' == 1 (true)
			// Sameness: '1' === 1 (false, string vs number)
			Y.Assert.areSame(5, 5);      //passes
			Y.Assert.areSame(5, "5");    //fails
			Y.Assert.areNotSame(5, 6);   //passes
			Y.Assert.areNotSame(5, "5"); //passes
		},
		testSpecialValues : function () {
			// These functions use the Samenes
			Y.Assert.isFalse(false);      //passes
			Y.Assert.isTrue(true);        //passes
			Y.Assert.isNaN(NaN);          //passes
			Y.Assert.isNaN(5 / "5");      //passes
			Y.Assert.isNotNaN(5);         //passes
			Y.Assert.isNull(null);        //passes
			Y.Assert.isNotNull(undefined);    //passes
			Y.Assert.isUndefined(undefined);  //passes
			Y.Assert.isNotUndefined(null);    //passes
		}
	}));


	var messagesTestSuite = new Y.Test.Suite({
		name: 'Messages'
	});
	Y.Test.Runner.add(messagesTestSuite);

	messagesTestSuite.add(new Y.Test.Case({
		name: "Get messages",

		setUp : function () {
			this.json = '[{"id": 5, "user": {"name": "piet", "avatar": "http://example.com/piet.jpeg"}, "date": "2012-03-12 14:00T01:00"}]';
		},

		tearDown : function () {
			delete this.json;
		},

		testObject: function () {
			var messages = JSON.parse(this.json);
			Y.Assert.areSame("piet", messages[0].user.name);
			Y.Assert.areSame("2012-03-12 14:00T01:00", messages[0].date);
		},
	}));

	//initialize the console
	(new Y.Test.Console({
	  newestOnTop: false
	})).render('#log');

	//run the tests
	Y.Test.Runner.run();

});