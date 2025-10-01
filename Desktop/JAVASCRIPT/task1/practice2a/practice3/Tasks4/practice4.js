// ## 🎯 Practice Exercise 1

// **Task:** Movie Collection Tracker  

// **Requirements:**  
// 1. Create an object `movie` with properties: `title`, `director`, `releaseYear`, and `rating`  
// 2. Add a method `getSummary()` that returns a string like:  
//    `"Inception (2010), directed by Christopher Nolan, rated 9/10"`  
// 3. Add a new property `isWatched` and update it to `true`  

// **Challenge:**  
// Create an array of at least 3 movies and write a function to display only the movies with `rating ≥ 8`.
let movie = {
    title: "The waiter",
   director:"Adetiba kemi" ,
   releaseYear :2025,
   rating: 8/10,
   
   getSummary: function() {
   return `${this.title} (${this.releaseYear}), directed by ${this.director} , rated ${this.rating}/10`;
   }
};
   
        
    
movie.isWatched= true;
console.log(movie.getSummary());
console.log(movie.isWatched);
//challege

let movie= [
    {
    title: "The waiter",
   director:"Adetiba kemi" ,
   releaseYear :2025,
   rating: 8/10,

    },
    {
    title: "inception",
   director:"Christoper Nolan" ,
   releaseYear :2025,
   rating: 9/10,
    },
     {
    title: "Avatar",
   director:"James Cameron" ,
   releaseYear :2023,
   rating: 8/10,
     }
];
function getTopRatedMovies(movies){
    return movies.filter(movie => movie.rating >=8);
} 
console.log(getTopRatedMovies(movie));



//excercise2

