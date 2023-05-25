"use strict";
// const a = 5;
// const b = 7;

// function test() {
//     alert(1);
// }


const personalMovieDB = {
    count: '',
    movies:{},
    actors:{},
    genres:[],
    privat:true,

    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов', '');
    
        while(personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов', '');
        }
    },

    rememberMyFilms: function(){

        for (let i = 0; i < 2; i++) {
        
            const film = prompt('Какой последний фильм', '');
            const reviev = +prompt('Оценка', '');
            
            if (film == "" || film == null || film.length > 50 || reviev == null || isNaN(reviev)) {
        
                i--;
                console.log("no");
        
            } else if (film.trim() == ""){
                i--;
        
            } else {
                personalMovieDB.movies[film] = reviev;
                console.log("yes");
            }
            
        }
    },

    writeYourGenres: function(){
        for(let i = 1; i<=3; i++){

            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

            if (genre != null && genre.trim() != "") {

                personalMovieDB.genres[i-1] = genre;
        
            } else{
                i--;
            }
        }

        personalMovieDB.genres.forEach((item, i) =>{
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
        
    },

    detectPersonalLevel: function(){

        if(personalMovieDB.count<10){
            alert("Мало");
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            alert("Норм");
        } else if(personalMovieDB.count >= 30){
            alert("Класно");
        } else{
            alert("Ошибка");
        }
    },

    showMyDB: function(){

        if(personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
        
    },

    toggleVisibleMyDB: function(callback){
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else{
            personalMovieDB.privat = true;
        }
        callback();
    }
};



personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB(personalMovieDB.showMyDB);