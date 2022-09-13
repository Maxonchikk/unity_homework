// 1 ДЗ
// let numberOfFilms = prompt('Сколько фильмов Вы посмотрели?', '');
// console.log(numberOfFilms);

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false,
// };

// console.log(personalMovieDB.count);


// let question1 = prompt('Один из последних просмотренных фильмов?', '');
// personalMovieDB.movies[question1];
// let question2 = prompt('На сколько оцение его?', '');
// personalMovieDB.movies[question1] = question2;
// let question3 = prompt('Один из последних просмотренных фильмов?', '');
// personalMovieDB.movies[question3];
// let question4 = prompt('На сколько оцение его', '');
// personalMovieDB.movies[question3] = question4;

// let a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцение его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцение его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

// 2 ДЗ
// for (let i = 0; i <= 1; i++) {
//     let a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = +prompt('На сколько оцение его?', '');
//     if (a != null && b != null && a != '' && b!= '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         i--;
//         console.log(i)
//     }
// }

// let i = 0;
// while (i < 2) {
//     let a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = +prompt('На сколько оцение его?', '');
//     if (a != null && b != null && a != '' && b!= '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         i++;
//     } else {
//         i--;
//         console.log(i);
//     }
//     i++;
// }

// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');

// };
// console.log(personalMovieDB);


// 3 ДЗ

// let numberOfFilms = prompt('Сколько фильмов Вы посмотрели?', '');

let personalMovieDB = {
    
    count: function () {
        let numberOfFilms = prompt('Сколько фильмов Вы посмотрели?', '');
        return numberOfFilms;
    },
    movies: function () {
        let obj = {};
        for (let i = 0; i <= 1; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', ''),
                b = +prompt('На сколько оцение его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
               return obj[a] === b;
                // console.log('done');
            } else {
                i--;
                // console.log(i)
            }
        }
    },
    actors: {},
    genres: [],
    private: false,
    start: function () {
        

        

        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        }
        console.log(personalMovieDB);

    },
};




console.log(personalMovieDB.count());
console.log(personalMovieDB);