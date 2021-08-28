console.log('***** Music Collection *****')

// Create a variable `collection` that starts as an empty array.
let collection = []

let NINtracks = {
    tracks:['somewhat damaged', 'The day the world went away', 'the frail'],
    trackLength:[ '4:32', '4.34', '1.54']};

let MMouseTracks = {
    tracks:['3rd Planet', 'Gravity Rides Everything', 'Dark Center of the Universe'] ,
    trackLength: ['3:59', '4:20', '5:03']};

let NationalTracks = {
    tracks:['Nobody else will be there', 'Day I Die', 'Walk it Back'],
    trackLength: ['4:40', '4:32', '5:59']};

let MetricTracks = {
    tracks:['Help im Alive', "Gimme Sympathy", "Sick Muse"],
    trackLength: ['4:46', '4:17', '3:43']};

let ModestMouseTracks = {
    tracks: ['fuck your acid trip', 'we are between', 'Were Lucky'],
    trackLength: ['3:12', '3:53', '2:45']};

let FooTracks = {
    tracks: ['Making a Fire', 'Shame Shame', 'Cloudspotter'],
    trackLength: ['4:15', '4:17', '3:53']};


// Add a function named `addToCollection`. 
//This function creates new object with title, artist, year published
    // Add an array of tracks to your album objects. 
    // Each track should have a name and duration. You will need to update the functions to support this new property:
function addToCollection( title, artist, yearPublished, track){

    let record = {title, artist, yearPublished, track};

    //Adds the new object to the end of the `collection` array
    collection.push( record );
    return record;
}//end add to collection function

//add 6 albums to my collection
addToCollection( 'The Fragile', 'Nine Inch Nails', 1999, NINtracks);
addToCollection( 'The Moon and Antarctica', 'Modest Mouse', 2000, MMouseTracks);
addToCollection( 'Sleep Well Beast', "The National", 2017, NationalTracks);
addToCollection( 'Fantasies', 'Metric', 2009, MetricTracks);
addToCollection( 'The Golden Casket', 'Modest Mouse', 2021, ModestMouseTracks);
addToCollection( 'Medicine at Midnight', 'Foo Fighters', 2021, FooTracks)

// Returns the newly created object
console.log('Newly Added Record:', collection[collection.length-1])

//   [ ] Console.log each album as added using the returned value. 
for (i=0; i<collection.length; i++){
    console.log(collection[i]);
}

// console.log the added records in the `collection` array.
console.log(collection);

// Add a function named `showCollection`. 
// Take in an array parameter.
function showCollection( collection ){

    //Console.log the number of items in the array.
    console.log( collection.length);

    // Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.
    for (i=0; i<collection.length; i++){
        
        console.log(collection[i].title, 'by', collection[i].artist, 
        'published in', collection[i].yearPublished)

            //loop through the array and console.log track name:track length.
            for (j=0; j<collection[i].track.tracks.length; j++){
            console.log(collection[i].track.tracks[j], ':', collection[i].track.trackLength[j]) }; //end track loop
        };//end first for loop ARTIST/TITLE/YEAR
       
};//end showCollection function

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


// Take an input parameter for a search criteria object.
function search( searchThing ){
    // Return a new array of all items in the collection matching all of the search criteria.
    let searchResults = [];
    //search artist

    if(!searchThing){
        console.log(`collection:`, collection)  //Not sure why this gets me collection x6?
    }
    else {
    for (i=0; i<collection.length; i++){
         // If there is no search object/empty search, return all albums in the collection.// 
         if (searchThing === collection[i].artist){
            searchResults.push (collection[i]);
            //Return the array with the matching artist results. 
        }
        else if (searchThing === collection[i].title){
            searchResults.push (collection[i]);
            //Return the array with the matching title results. 
        }
        else if (searchThing === collection[i].yearPublished){
            searchResults.push (collection[i]);
            //Return the array with the matching year results. 
        }
        // If no results are found, return an empty array.
        
        

    };//end for loop
    };

    // Create your solution based on a search object that has these properties:
    // { artist: 'Ray Charles', year: 1957 }
    console.log(searchResults);
    
    return searchResults;
   
};//end search function

search('Modest Mouse')
search('Taylor Swift')
search()

// Add an array of tracks to your album objects. 
let trackArray = []


// Each track should have a name and duration. 

//You will need to update the functions to support this new property:

// Update the addToCollection function to also take an input parameter for the array of tracks.
// Update search to allow a trackName search criteria.
// Update the showCollection function to display the list of tracks for each album with its name and duration.
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION