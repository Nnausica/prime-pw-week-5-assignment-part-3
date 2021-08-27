console.log('***** Music Collection *****')

// Create a variable `collection` that starts as an empty array.
let collection = []

// Add a function named `addToCollection`. 
//This function creates new object with title, artist, year published
function addToCollection( title, artist, yearPublished){

    let record = {title, artist, yearPublished};

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


let friendsCollection = []
function addToFriendsCollection( title, artist, yearPublished){

    let record = {title, artist, yearPublished};

    //Adds the new object to the end of the `collection` array
    friendsCollection.push( record );
    return record;
}//end add to collection function

//add 6 albums to my collection
addToFriendsCollection( 'I am Easy to Find', 'The National', 2019);
addToFriendsCollection( 'The In the Sky', 'Mallrat', 2018);
addToFriendsCollection( 'Shadows', "Cannons", 2019);
addToFriendsCollection( 'Sleep Well Beast', 'The National', 2017);


// Add a function named `showCollection`. 
// Take in an array parameter.

function showCollection( collection ){
    //Console.log the number of items in the array.
    console.log( collection.length);

    // Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.
    for (i=0; i<collection.length; i++){
        console.log(collection[i].title, 'by', collection[i].artist, 'published in', collection[i].yearPublished);
    };    
}//end showCollection function

console.log( showCollection( collection) );
// - Test the `showCollection` function.



function findByArtist( search ){
    // Create an array to hold any results, empty to start
    let artistFound=[];

    // Loop through the collection and add any objects with a matching artist to the array.
    for(i=0; i<collection.length; i++){
        if (search === collection[i].artist){
            artistFound.push (collection[i]);
            //Return the array with the matching results. 
        }
        // If no results are found, return an empty array.
    }//end for loop
    return artistFound;
}//end findByArtist fuction

console.log (findByArtist( "Taylor Swift"));



//******* stretch goals ************

function search( searchThing ){
    let searchResults = [];
    //search artist
    for(i=0; i<collection.length; i++){
        if (search === collection[i].artist){
            searchResults.push (collection[i]);
            //Return the array with the matching results. 
        }
        if (search === collection[i].title){
            searchResults.push (collection[i]);
            //Return the array with the matching results. 
        }
        if (search === collection[i].yearPublished){
            searchResults.push (collection[i]);
            //Return the array with the matching results. 
        }
        // If no results are found, return an empty array.
    }//end for loop
    return searchResults;

}//end search function

// Take an input parameter for a search criteria object. 

// Create your solution based on a search object that has these properties:
// { artist: 'Ray Charles', year: 1957 }

// The returned output from search should meet these requirements:
// Return a new array of all items in the collection matching all of the search criteria.

// If no results are found, return an empty array.

// If there is no search object or an empty search object provided as input, then return all albums in the collection.// 