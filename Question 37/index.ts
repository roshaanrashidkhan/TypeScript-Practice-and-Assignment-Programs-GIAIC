// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size: string = "large", textToBePrinted: string = "I love TypeScript!") {
    console.log(`Your shirt size is "${size}" with the text (message): "${textToBePrinted}" to be printed on it`);
};

make_shirt();
make_shirt("medium");
make_shirt("small","I love Writing Code");