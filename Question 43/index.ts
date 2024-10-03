// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


let magicians:string[] = ["Criss Angel", "Derren Brown", "Iqbal Hussain"];

function show_magicians(magicians: string[]){
    magicians.forEach(magician=>{
        console.log(magician);
    });
};

function make_great(magicians: string[]){
    let greatMagicians: string[] = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} The Great`);
    });
    return greatMagicians;
};

let greatMagicians = make_great(magicians);

console.log("Original Magicians:");
show_magicians(magicians);

console.log("Modified Magicians:");
show_magicians(greatMagicians);