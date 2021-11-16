"Use strict";

const numberOfFilms = prompt("Сколько вы посмотрели фильмов?");

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++){
    const   lastWachedFilms = prompt("Один из последних просмотренных фильмов?"),
            filmScore = prompt("На сколько оцените его?");

            if (lastWachedFilms != null && filmScore != null && lastWachedFilms != '' && filmScore != '' && lastWachedFilms.length < 50) {
                personalMovieDB.movies[lastWachedFilms] = filmScore;
                console.log("Done");
            } else {
                console.log("error");
                i--;
            }

            
      }

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Да ты чертов киноман! горжусь тобой!');
} else alert('Произошла ошибка');

console.log(personalMovieDB);






let num = 0;

for (num = 0; num <= 10; num++) {
    console.log(num);
};


function ifNum() {
    if ( num == 11) {
    console.log("все верно")
 } else {
     console.log("Error")
 };

 console.log(num);
};

ifNum();
 