"use strict";
// const a = 5;
// const b = 7;

// function test() {
//     alert(1);
// }



let numberOfFilm;

function start(){
    numberOfFilm = +prompt('Сколько фильмов', '');

    while(numberOfFilm == "" || numberOfFilm == null || isNaN(numberOfFilm)){
        numberOfFilm = +prompt('Сколько фильмов', '');
    }
}

// start();
// start


const personalMovieDB = {
    count: numberOfFilm,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

let film;
let reviev;

function rememberMyFilms(){

    for (let i = 0; i < 2; i++) {
    
        film = prompt('Какой последний фильм', '');
        reviev = +prompt('Оценка', '');
        
        if (film == "" || film == null || film.length > 50 || reviev == null || isNaN(reviev)) {
    
            i--;
            console.log("no");
    
        // } else if (film.trim() == ""){
        //     i--;
    
        } else {
            personalMovieDB.movies[film] = reviev;
            console.log("yes");
        }
        
    }
}
// rememberMyFilms();
// rememberMyFilms


function writeYourGenres(){
    for(let i = 1; i<=3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}
writeYourGenres();
// writeYourGenres


function detectPersonalLevel(){

    if(personalMovieDB.count<10){
        alert("Мало");
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert("Норм");
    } else if(personalMovieDB.count >= 30){
        alert("Класно");
    } else{
        alert("Ошибка");
    }
}
// detectPersonalLevel();
// detectPersonalLevel


function showMyDB(){

    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
    
}
showMyDB();
// showMyDB