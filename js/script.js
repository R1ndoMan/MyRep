"Use strict";

const numberOfFilms = prompt("Сколько вы посмотрели фильмов?");

console.log(numberOfFilms);

const lastWachedFilms = prompt("Один из последних просмотренных фильмов?"),
      filmScore = prompt("На сколько оцените его?"),
      lastWachedFilms2 = prompt("Один из последних просмотренных фильмов?"),
      filmScore2 = prompt("На сколько оцените его?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

personalMovieDB.movies[lastWachedFilms] = filmScore;
personalMovieDB.movies[lastWachedFilms2] = filmScore2;

console.log(personalMovieDB);



let num = 0;
while (num < 10) {
    console.log(num);

    num++
};


for (num = 0; num <= 11; num++) {
    console.log(num);
};


function ifNum() {
    if ( num == 10) {
    console.log("все верно")
 } else {
     console.log("Error")
 };

 console.log(num);
};

ifNum();
 