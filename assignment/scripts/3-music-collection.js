console.log('***** Music Collection *****')

// Create a variable `collection` that starts as an empty array.
let collection = []

// Add a function named `addToCollection`. 
//This function creates new object with title, artist, year published
function addToCollection( title, artist, yearPublished){

    let record = { title, artist, yearPublished};

    //Adds the new object to the end of the `collection` array
    collection.push( record );
    return record;
}//end add to collection function

//add 6 albums to my collection
addToCollection( 'The Fragile', 'Nine Inch Nails', 1999);
addToCollection( 'The Moon and Antarctica', 'Modest Mouse', 2000);
addToCollection( 'Sleep Well Beast', "The National", 2017);
addToCollection( 'Fantasies', 'Metric', 2009);
addToCollection( 'The Golden Casket', 'Modest Mouse', 2021);
addToCollection( 'Medicine at Midnight', 'Foo Fighters', 2021)

// Returns the newly created object
console.log('Newly Added Record:', collection[collection.length-1])

//   [ ] Console.log each album as added using the returned value. 
//RETURNED VALUE_ IM NOT DOING THIS RIGHT NOW
for (i=0; i<collection.length; i++){
    console.log(collection[i]);
}

// console.log the added records in the `collection` array.
console.log(collection);

// [ ] Add a function named `showCollection`. This function should:
function showCollection( [collection]){
    console.log(collection.length);``

    for (i=0; i<collection.length; i++){
        console.log([i].title, 'by' [i].artist, 'published in' [i].yearPublished);
    }
    
}//end showCollection function

console.log( showCollection( collection) );

//   [ ] Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   [ ] Console.log the number of items in the array.
//   [ ] Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

// - Test the `showCollection` function.