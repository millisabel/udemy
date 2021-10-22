'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const advs = document.querySelectorAll('.promo__adv img');
    const poster = document.querySelector('.promo__bg');
    const genre = poster.querySelector('.promo__genre');
    const list = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('.add');
    const addingInput = document.querySelector('.adding__input');
    const btn = document.querySelector('.add button');
    const yes = document.querySelector('.add input[type="checkbox"]');

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let nameMovie = addingInput.value;
        const favorite = yes.checked;

        if (nameMovie.length > 21) {
            nameMovie = `${nameMovie.substring(0, 22)}...`;
        }
        if (nameMovie) {
            movieDB.movies.push(nameMovie);
            createMovieList(movieDB.movies, list);
        }

        if (favorite) {
            console.log('Добавляем любимый фильм');
        }
        e.target.reset();
    });

    const deleteAdvs = (arr) => {
        arr.forEach(item => item.remove());
    };

    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(arr, parent) {
        parent.innerHTML = '';
        sortArr(arr);
        arr.forEach((item, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i+1}. ${item}
            <div class="delete"></div>
            </li>`;
        });

        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', () => {
                item.onclick = item.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(arr, parent);
            });
        });
    }

    deleteAdvs(advs);
    makeChanges();
    createMovieList(movieDB.movies, list);
})
