let numberOfFilms = prompt('Сколько фильмов Вы посмотрели?', '');
// console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

// console.log(personalMovieDB.count);


// let question1 = prompt('Один из последних просмотренных фильмов?', '');
// personalMovieDB.movies[question1];
// let question2 = prompt('На сколько оцение его?', '');
// personalMovieDB.movies[question1] = question2;
// let question3 = prompt('Один из последних просмотренных фильмов?', '');
// personalMovieDB.movies[question3];
// let question4 = prompt('На сколько оцение его', '');
// personalMovieDB.movies[question3] = question4;


let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцение его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцение его?', '');

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;
console.log(personalMovieDB);


