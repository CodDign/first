"use strict";
// const a = 5;
// const b = 7;

// function test() {
//     alert(1);
// }



const numberOfFilm = +prompt('Сколько фильмов', '');

const personalMovieDB = {
    count: numberOfFilm,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

let film;
let reviev;

for (let i = 0; i < 2; i++) {
    
    film = prompt('Какой последний фильм', '');
    reviev = +prompt('Оценка', '');
    
    if (film == "" || film == null || film.length > 50 || reviev == null || reviev == "" || isNaN(reviev)) {

        i--;
        console.log("no");
    } else {
        personalMovieDB.movies[film] = reviev; 
        console.log("yes");
    }
    
}

console.log(personalMovieDB);

if(personalMovieDB.count<10){
    alert("Мало");
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    alert("Норм");
} else if(personalMovieDB.count >= 30){
    alert("Класно");
} else{
    alert("Ошибка");
}