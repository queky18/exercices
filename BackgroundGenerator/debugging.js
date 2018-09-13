const flattened0 = [ [0, 1], [2, 3], [4, 5] ].reduce( (a,b) => a.concat(b), [] );

// same as the below one

const flattened = [ [0, 1], [2, 3], [4, 5] ].reduce(
    (accumulator, array) => {
        // console.log('array', array);
        // console.log('accumulator', accumulator);
        debugger;
        return accumulator.concat(array);
    },
[]);

// call stack

// web api

// callback queue

// event loop
