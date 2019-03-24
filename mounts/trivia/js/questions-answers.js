// The array of all 20 questions and answers
function getAllQuestionsAndAnswers() {
  return [
    {
      question: "What are the different primitive types in javascript?",
      answers: [
        "string, number, boolean",
        "string, number, boolean, null",
        "string, number, boolean, null, function, undefined, object",
        "string, number, boolean, null, undefined"
      ],
      correctAnswerIndex: 3
    },
    {
      question:
        "What is the proper way to nest an object inside an object literal?",
      answers: [
        `var person = {
        name: ‘Jon Doe’,
        address = {
          number: 301,
          street: ‘Elm St.’,
          zip: 80000
        }
      }`,
        `var person = function() {
        name: ‘Jon Doe’,
	      address = {
          number: 301,
          street: ‘Elm St.’,
          zip: 80000
        }
      }`,
        `var person = {
        name: ‘Jon Doe’,
        address: {
          number: 301,
          street: ‘Elm St.’,
          zip: 80000
        }
      }`,
        `var person = {
        var name: ‘Jon Doe’;
        var address: {
          number: 301,
          street: ‘Elm St.’,
          zip: 80000
        }
      }`
      ],
      correctAnswerIndex: 2
    },
    {
      question: `
    Take the following array:
    const musicians = [
      { name: 'Kurt Cobain', band: 'Nirvana' },
      { name: 'Dave Grohl', band: 'Foo Fighters' },
      { name: 'Bradley Nowell', band: 'Sublime' },
      { name: 'Gwen Stefani', band: 'No Doubt' }
    ];

    In order to return the following array:
      ["Name: Kurt Cobain Band: Nirvana",
        "Name: Dave Grohl Band: Foo Fighters",
        "Name: Bradley Nowell Band: Sublime",
        "Name: Gwen Stefani Band: No Doubt"]

    Which is the correct Array prototype function name to put in the
    following function(inside the angle brackets)?

    const finalArray = musicians.<>(function(musician) {
      return 'Name: ' + musician.name + ', Band: ' + musician.band;
    });
    `,
      answers: ["forEach", "map", "mapEach", "entries"],
      correctAnswerIndex: 1
    },
    {
      question:
        "What is the proper way to bring an external" +
        "javascript file into a different" +
        "javascript file when using the debugger in" +
        "VSCode?",
      answers: [
        "const externalLibrary = module.imports(‘jquery.min.js’);",
        "const externalLibrary = module.require(‘jquery.min.js’);",
        "const externalLibrary = import(‘jquery.min.js’);",
        "const externalLibrary = require(‘jquery.min.js’);"
      ],
      correctAnswerIndex: 3
    },
    {
      question:
        "What is the correct way to alter the text" +
        "inside the following html element?",
      answers: [
        "document.getElement(‘container’).innerHTML = ‘This is the new text’;",
        "document.queryId(‘container’).innerHTML = ‘This is the new text’;",
        "document.getElementById(‘#container’).innerHTML = ‘This is the new text’;",
        "document.getElementById(‘container’).innerHTML = ‘This is the new text’;"
      ],
      correctAnswerIndex: 3
    },
    {
      question: "Which of these best describes the “Execution Context”?",
      answers: [
        "A wrapper that helps to manage the code that is currently running",
        "A wrapper that helps to manage ALL of your code, not just the code that is currently running",
        "Where something sits physically in the code that you write",
        "Where your code sits in memory"
      ],
      correctAnswerIndex: 0
    },
    {
      question:
        "Which of these is the correct way to build a function constructor?",
      answers: [
        `Function Constructor(javascript) { this.javascript = javascript; }`,
        `function Constructor(javascript) { this.javascript = javascript; }`,
        `function constructor(javascript) { this.javascript = javascript; }`,
        `function Constructor(javascript) { This.javascript = javascript; }`
      ],
      correctAnswerIndex: 1
    },
    {
      question: "Which of these events is not a valid event?",
      answers: ["onLoad", "onButtonClick", "onClick", "onMouseover"],
      correctAnswerIndex: 1
    },
    {
      question: `
    What does This function do:
	    function example(val) {
		    return val ? js : javascript;
	    }
    `,
      answers: [
        "It returns the value",
        "It will always return 2",
        "It will always return 1",
        "It will return 1 if val is true, otherwise, it will return 2"
      ],
      correctAnswerIndex: 3
    },
    {
      question: `Which operator matches this definition: “a strict equality"
        "operator that returns true when two operands have the same value"
        "without coercion.“`,
      answers: ["===", "==", "+=", "-="],
      correctAnswerIndex: 0
    },
    {
      question: "What is an example of an integer?",
      answers: ["One", "13", "-10", "Both 13 & -10"],
      correctAnswerIndex: 3
    },
    {
      question:
        "What word means to link strings together in a series or chain" +
        "(or put two things together)?",
      answers: ["Sequence", "Concatenate", "Integrate", "Divide"],
      correctAnswerIndex: 1
    },
    {
      question: "For what do you use the “%” symbol?",
      answers: ["Errors", "NaN", "Booleans", "Division remainder"],
      correctAnswerIndex: 3
    },
    {
      question: "What are you checking with >= ?",
      answers: [
        "Not equal",
        "Greater than or equal to",
        "Less than or equal to",
        "Shift left"
      ],
      correctAnswerIndex: 1
    },
    {
      question: `
    What index number is “Red” in the following array?
    Var color = [“Red”, “Blue”, “Green”];
    `,
      answers: ["0", "1", "2", "3"],
      correctAnswerIndex: 0
    },
    {
      question:
        "What is the proper way embed an external JavaScript" +
        "file in an HTML document?",
      answers: [
        `<script link=”main.js”></script>`,
        `<script src=”main.js”></script>`,
        `<script href=”main.js”></script>`,
        `<script url=”main.js”></script>`
      ],
      correctAnswerIndex: 1
    },
    {
      question: "Which of the following is not a method of the global object?",
      answers: ["call()", "apply()", "bind()", "handle()"],
      correctAnswerIndex: 3
    },
    {
      question: `
    In the code below, for which value of x (fill in the angle brackets) will y
    equal 4?

    x = <>
      if (x) {
        y = 2;
      } else {
        y = 4;
      }
    console.log(a);
    `,
      answers: ["x = 2", "x = 4", "x = 0", "x = 1"],
      correctAnswerIndex: 2
    },
    {
      question:
        "What type of object do other objects inherit properties" +
        "and methods from?",
      answers: ["Prototype", "Native", "Host", "User-Defined"],
      correctAnswerIndex: 0
    },
    {
      question: "Which of the following is not a proper array?",
      answers: [
        "[-10, 1, 10.3826, 14]",
        "[true, 'a', 14, null]",
        "['B', 'r',,'Donny']",
        "They are all proper arrays"
      ],
      correctAnswerIndex: 3
    }
  ];
  //   return [
  //     {
  //       question: `
  //     What are the different primitive types in javascript?
  //     `,
  //       answers: [
  //         `string, number, boolean`,
  //         `string, number, boolean, null`,
  //         `string, number, boolean, null, function, undefined, object`,
  //         `string, number, boolean, null, undefined`
  //       ],
  //       correctAnswerIndex: 3
  //     },
  //     {
  //       question: `
  //     What is the proper way to nest an object inside an object literal?
  //     `,
  //       answers: [
  //         `var person = {
  //         name: ‘Jon Doe’,
  //         address = {
  //           number: 301,
  //           street: ‘Elm St.’,
  //           zip: 80000
  //         }
  //       }`,
  //         `var person = function() {
  //         name: ‘Jon Doe’,
  // 	      address = {
  //           number: 301,
  //           street: ‘Elm St.’,
  //           zip: 80000
  //         }
  //       }`,
  //         `var person = {
  //         name: ‘Jon Doe’,
  //         address: {
  //           number: 301,
  //           street: ‘Elm St.’,
  //           zip: 80000
  //         }
  //       }`,
  //         `var person = {
  //         var name: ‘Jon Doe’;
  //         var address: {
  //           number: 301,
  //           street: ‘Elm St.’,
  //           zip: 80000
  //         }
  //       }`
  //       ],
  //       correctAnswerIndex: 2
  //     },
  //     {
  //       question: `
  //     Take the following array:
  //     const musicians = [
  //       { name: 'Kurt Cobain', band: 'Nirvana' },
  //       { name: 'Dave Grohl', band: 'Foo Fighters' },
  //       { name: 'Bradley Nowell', band: 'Sublime' },
  //       { name: 'Gwen Stefani', band: 'No Doubt' }
  //     ];

  //     In order to return the following array:
  //       ["Name: Kurt Cobain Band: Nirvana",
  //         "Name: Dave Grohl Band: Foo Fighters",
  //         "Name: Bradley Nowell Band: Sublime",
  //         "Name: Gwen Stefani Band: No Doubt"]

  //     Which is the correct Array prototype function name to put in the
  //     following function(inside the angle brackets)?

  //     const finalArray = musicians.<>(function(musician) {
  //       return 'Name: ' + musician.name + ', Band: ' + musician.band;
  //     });
  //     `,
  //       answers: [`forEach`, `map`, `mapEach`, `entries`],
  //       correctAnswerIndex: 1
  //     },
  //     {
  //       question: `
  //     What is the proper way to bring an external
  //     javascript file into a different
  //     javascript file when using the debugger in
  //     VSCode?
  //     `,
  //       answers: [
  //         `const externalLibrary = module.imports(‘jquery.min.js’);`,
  //         `const externalLibrary = module.require(‘jquery.min.js’);`,
  //         `const externalLibrary = import(‘jquery.min.js’);`,
  //         `const externalLibrary = require(‘jquery.min.js’);`
  //       ],
  //       correctAnswerIndex: 3
  //     },
  //     {
  //       question: `
  //     What is the correct way to alter the text inside the following
  //     html element?
  //     `,
  //       answers: [
  //         `document.getElement(‘container’).innerHTML = ‘This is the new text’;`,
  //         `document.queryId(‘container’).innerHTML = ‘This is the new text’;`,
  //         `document.getElementById(‘#container’).innerHTML = ‘This is the new text’;`,
  //         `document.getElementById(‘container’).innerHTML = ‘This is the new text’;`
  //       ],
  //       correctAnswerIndex: 3
  //     },
  //     {
  //       question: `
  //     Which of these best describes the “Execution Context”?
  //     `,
  //       answers: [
  //         `A wrapper that helps to manage the code that is currently running`,
  //         `A wrapper that helps to manage ALL of your code, not just the code that is currently running`,
  //         `Where something sits physically in the code that you write`,
  //         `Where your code sits in memory`
  //       ],
  //       correctAnswerIndex: 0
  //     },
  //     {
  //       question: `
  //     Which of these is the correct way to build a function constructor?
  //     `,
  //       answers: [
  //         `Function Constructor(javascript) { this.javascript = javascript; }`,
  //         `function Constructor(javascript) { this.javascript = javascript; }`,
  //         `function constructor(javascript) { this.javascript = javascript; }`,
  //         `function Constructor(javascript) { This.javascript = javascript; }`
  //       ],
  //       correctAnswerIndex: 1
  //     },
  //     {
  //       question: `
  //     Which of these events is not a valid event?
  //     `,
  //       answers: [`onLoad`, `onButtonClick`, `onClick`, `onMouseover`],
  //       correctAnswerIndex: 1
  //     },
  //     {
  //       question: `
  //     What does This function do:
  // 	    function example(val) {
  // 		    return val ? js : javascript;
  // 	    }
  // `,
  //       answers: [
  //         `It returns the value`,
  //         `It will always return 2`,
  //         `It will always return 1`,
  //         `It will return 1 if val is true, otherwise, it will return 2`
  //       ],
  //       correctAnswerIndex: 3
  //     },
  //     {
  //       question: `
  //     Which operator matches this definition: “a strict equality operator that
  //     returns true when two operands have the same value without coercion.“
  //     `,
  //       answers: [`===`, `==`, `+=`, `-=`],
  //       correctAnswerIndex: 0
  //     },
  //     {
  //       question: `
  //     What is an example of an integer?
  //     `,
  //       answers: [`One`, `13`, `-10`, `Both 13 & -10`],
  //       correctAnswerIndex: 3
  //     },
  //     {
  //       question: `
  //     What word means to link together in a series or chain (or put to things
  //     together). Example “Hello ” + “World!”
  //     `,
  //       answers: [`Sequence`, `Concatenate`, `Integrate`, `Divide`],
  //       correctAnswerIndex: 1
  //     },
  //     {
  //       question: `
  //     For what do you use the “%” symbol?
  //     `,
  //       answers: [`Errors`, `NaN`, `Booleans`, `Division remainder`],
  //       correctAnswerIndex: 3
  //     },
  //     {
  //       question: `
  //     What are you checking with >= ?
  //     `,
  //       answers: [
  //         `Not equal`,
  //         `Greater than or equal to`,
  //         `Less than or equal to`,
  //         `Shift left`
  //       ],
  //       correctAnswerIndex: 1
  //     },
  //     {
  //       question: `
  //     What index number is “Red” in the following array?
  //     Var color = [“Red”, “Blue”, “Green”];
  //     `,
  //       answers: [`0`, `1`, `2`, `3`],
  //       correctAnswerIndex: 0
  //     },
  //     {
  //       question: `
  //     What is the proper way embed an external JavaScript file in an HTML
  //     document?
  //     `,
  //       answers: [
  //         `<script link=”main.js”></script>`,
  //         `<script src=”main.js”></script>`,
  //         `<script href=”main.js”></script>`,
  //         `<script url=”main.js”></script>`
  //       ],
  //       correctAnswerIndex: 1
  //     },
  //     {
  //       question: `
  //     Which of the following is not a method of the global object?
  //     `,
  //       answers: [`call()`, `apply()`, `bind()`, `handle()`],
  //       correctAnswerIndex: 3
  //     },
  //     {
  //       question: `
  //     In the code below, for which value of x (fill in the angle brackets) will y
  //     equal 4?

  //     x = <>
  //       if (x) {
  //         y = 2;
  //       } else {
  //         y = 4;
  //       }
  //     console.log(a);
  //     `,
  //       answers: [`x = 2`, `x = 4`, `x = 0`, `x = 1`],
  //       correctAnswerIndex: 2
  //     },
  //     {
  //       question: `
  //     What type of object do other objects inherit properties and methods from?
  //     `,
  //       answers: [`Prototype`, `Native`, `Host`, `User-Defined`],
  //       correctAnswerIndex: 0
  //     },
  //     {
  //       question: `
  //     Which of the following is not a proper array?
  //     `,
  //       answers: [
  //         `[-10, 1, 10.3826, 14]`,
  //         `[true, “a”, 14, null]`,
  //         `[“B”, “r”,,”Donny”]`,
  //         `They are all proper arrays`
  //       ],
  //       correctAnswerIndex: 3
  //     }
  //   ];
}
