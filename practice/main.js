// "use strict";

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function(){
        do{
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        } while (this.count === '' || this.count === null || isNaN(this.count))
    },

    toggleVisibleMyDB: function(){
        this.privat = !this.privat;
    },

    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++) {
            let a, b;

            a = prompt('Один из последних просмотренных фильмов?', '');
            b = prompt('На сколько оцените его?', '');

            if (a !== null & b !== null & a !== '' & b !== '' && a.length < 50) {
                this.movies.a = a;
                this.genres[i] = b;
            } else {
                i--;
            }
        }
    },

    detectPersonalLevel: function(){
        if (this.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (this.count > 10 && this.count < 30) {
            alert("Вы классический зритель");
        } else if (this.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },

    showMyDB: function(){
        if (!this.privat) {
            console.log(this);
        }
    },

    writeYourGenres: function(){
        for (let i = 0; i < 3; i++) {
            do{
                this.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            } while (this.genres[i] === '' || this.genres[i] === null)
        }
        this.genres.forEach((i, j)=>{
            console.log(`Любимый жанр ${j + 1}- это ${i}`);
        })
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();

console.log(personalMovieDB);

