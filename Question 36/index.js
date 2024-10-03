// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, textToBePrinted) {
    console.log("Your size of the shirt is \"".concat(size, "\" and the text that you want to be printed on it is \"").concat(textToBePrinted, "\""));
}
make_shirt("Large", "Let's Heal the World with our Positive Side");
