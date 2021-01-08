// "use strict";


let numberOfFilms;
let count = 0;

start();
rememberMyFilms();
// detectPersonalLevel();
// showMyDB(personalMovieDB.privat);
// writeYourGenres();

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while(numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        let a, b;

        a = prompt('Один из последних просмотренных фильмов?', '');
        b = prompt('На сколько оцените его?', '');

        if (a !== null & b !== null & a !== '' & b !== '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else{
            i--;
        }
    }
}
console.log(personalMovieDB.count);
function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}
}

function showMyDB(privat){
    if(!privat){
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
