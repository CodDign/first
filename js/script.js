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

const film_1 = prompt('Какой последний фильм', '');
const film_1_reviev = prompt('Оценка', '');

const film_2 = prompt('Какой последний фильм', '');
const film_2_reviev = prompt('Оценка', '');

personalMovieDB.movies[film_1] = film_1_reviev; 
personalMovieDB.movies[film_2] = film_2_reviev;

console.log(personalMovieDB);