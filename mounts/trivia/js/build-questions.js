/**
 * This function takes an array of questionsAnswers objects, and returns an
 * array with length of second argument. In this case it's 10 but can be
 * any number that is less than the first argument array length
 *
 * @param {[]} initialArray
 */
function buildQuestions(initialArray, newArrayLength) {
  // Make sure the new array length is less than the first argument length
  if (initialArray.length < newArrayLength) {
    newArrayLength = initialArray.length - 1;
  }

  // Make a copy of the input array so we don't mutate it
  const initialArrayCopy = initialArray.slice();
  // Initialize new array to return
  let newArray = [];

  for (let i = 0; i < newArrayLength; i++) {
    // Generate random number of LESS than the copied array length so we never
    // go out of array bounds
    const randomNum = Math.floor(Math.random() * (initialArrayCopy.length - 1));
    // Splice the array copy at the random number index, thus removing that
    // object, adding it to our new array, and shortening the copied array by
    // 1
    const splicedObject = initialArrayCopy.splice(randomNum, 1);
    // Build a QuestionAnswers object
    const qa = new QuestionAnswers(
      splicedObject[0].question,
      splicedObject[0].answers,
      splicedObject[0].correctAnswerIndex
    );
    // Push the randomly pulled object to our new array
    newArray.push(qa);
  }
  // Return the new array
  return newArray;
}

function QuestionAnswers(question, answers, correctAnswerIndex) {
  this.question = question;
  this.answers = ko.observable(answers);
  this.correctAnswerIndex = correctAnswerIndex;
  this.isCorrect = false;
}
