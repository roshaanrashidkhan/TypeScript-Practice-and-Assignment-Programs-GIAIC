// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, textToBePrinted) {
    if (size === void 0) { size = "large"; }
    if (textToBePrinted === void 0) { textToBePrinted = "I love TypeScript!"; }
    console.log("Your shirt size is \"".concat(size, "\" with the text (message): \"").concat(textToBePrinted, "\" to be printed on it"));
}
;
make_shirt();
make_shirt("medium");
make_shirt("small", "I love Writing Code");
