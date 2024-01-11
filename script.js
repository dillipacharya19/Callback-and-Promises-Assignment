// String Manipulation.

function manipulateString (inputString, callback) {
    const manipulatedString = inputString.toUpperCase();

    callback(manipulatedString);
}

function logString(manipulatedString){
    console.log(`The manipulated string is: ${manipulatedString}`);
}

// Expected Output:

manipulateString("hello, world!", logString);

// The manipulated string is: HELLO, WORLD!