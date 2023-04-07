/* variable declaration */
var practice_img = [ // images used in practice trials
    'imgs/img-prac-1.png',
    'imgs/img-prac-2.png',
    'imgs/img-prac-3.png',
    'imgs/img-prac-4.png']

var img_set = [ // images used in actual experiment 
    'imgs/img-1.png',
    'imgs/img-2.png',
    'imgs/img-3.png',
    'imgs/img-4.png',
    'imgs/img-5.png',
    'imgs/img-6.png',
    'imgs/img-7.png',
    'imgs/img-8.png',
    'imgs/img-9.png',
    'imgs/img-10.png',
    'imgs/img-11.png',
    'imgs/img-12.png',
    'imgs/img-13.png',
    'imgs/img-14.png',
    'imgs/img-15.png',
    'imgs/img-16.png',
    'imgs/img-17.png',
    'imgs/img-18.png',
    'imgs/img-19.png',
    'imgs/img-20.png',
    'imgs/img-21.png',
    'imgs/img-22.png',
    'imgs/img-23.png',
    'imgs/img-24.png',
    'imgs/img-25.png',
    'imgs/img-26.png',
    'imgs/img-27.png',
    'imgs/img-28.png',
    'imgs/img-29.png',
    'imgs/img-30.png',
    'imgs/img-31.png',
    'imgs/img-32.png',
    'imgs/img-33.png',
    'imgs/img-34.png',
    'imgs/img-35.png',
    'imgs/img-36.png',
    'imgs/img-37.png',
    'imgs/img-38.png',
    'imgs/img-39.png',
    'imgs/img-40.png',
    'imgs/img-41.png',
    'imgs/img-42.png'
]

var stimuli_set = [ // array of the images along with their upvotes **upcoming images & upvote counts add here**
    { id: 1, file: "imgs/img-1.png", upvote: 2059 },
    { id: 1, file: "imgs/img-2.png", upvote: 2979 },
    { id: 3, file: "imgs/img-3.png", upvote: 1756 },
    { id: 4, file: "imgs/img-4.png", upvote: 1617 },
    { id: 5, file: "imgs/img-5.png", upvote: 1302 },
    { id: 6, file: "imgs/img-6.png", upvote: 1072 },
    { id: 7, file: "imgs/img-7.png", upvote: 1055 },
    { id: 8, file: "imgs/img-8.png", upvote: 976 },
    { id: 9, file: "imgs/img-9.png", upvote: 686 },
    { id: 10, file: "imgs/img-10.png", upvote: 3817 },
    { id: 11, file: "imgs/img-11.png", upvote: 3043 },
    { id: 12, file: "imgs/img-12.png", upvote: 1676 },
    { id: 13, file: "imgs/img-13.png", upvote: 1416 },
    { id: 14, file: "imgs/img-14.png", upvote: 656 },
    { id: 15, file: "imgs/img-15.png", upvote: 875 },
    { id: 16, file: "imgs/img-16.png", upvote: 845 },
    { id: 17, file: "imgs/img-17.png", upvote: 836 },
    { id: 18, file: "imgs/img-18.png", upvote: 743 },
    { id: 19, file: "imgs/img-19.png", upvote: 600 },
    { id: 20, file: "imgs/img-20.png", upvote: 558 },
    { id: 21, file: "imgs/img-21.png", upvote: 510 },
    { id: 22, file: "imgs/img-22.png", upvote: 499 },
    { id: 23, file: "imgs/img-23.png", upvote: 394 },
    { id: 24, file: "imgs/img-24.png", upvote: 682 },
    { id: 25, file: "imgs/img-25.png", upvote: 384 },
    { id: 26, file: "imgs/img-26.png", upvote: 355 },
    { id: 27, file: "imgs/img-27.png", upvote: 280 },
    { id: 28, file: "imgs/img-28.png", upvote: 312 },
    { id: 29, file: "imgs/img-29.png", upvote: 265 },
    { id: 30, file: "imgs/img-30.png", upvote: 206 },
    { id: 31, file: "imgs/img-31.png", upvote: 241 },
    { id: 32, file: "imgs/img-32.png", upvote: 171 },
    { id: 33, file: "imgs/img-33.png", upvote: 134 },
    { id: 34, file: "imgs/img-34.png", upvote: 124 },
    { id: 35, file: "imgs/img-35.png", upvote: 114 },
    { id: 36, file: "imgs/img-36.png", upvote: 105 },
    { id: 37, file: "imgs/img-37.png", upvote: 99 },
    { id: 38, file: "imgs/img-38.png", upvote: 24 },
    { id: 39, file: "imgs/img-39.png", upvote: 70 },
    { id: 40, file: "imgs/img-40.png", upvote: 46 },
    { id: 41, file: "imgs/img-41.png", upvote: 64 },
    { id: 42, file: "imgs/img-42.png", upvote: 763 }
]

/*function declaration */

//shuffle objects in array "a"
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

// split the array "arr" into groups of any integer "chunkSize" 
function chunk(arr, chunkSize) {
    var array = [];
    for (var i = 0; i < arr.length; i += chunkSize)
        array.push(arr.slice(i, i + chunkSize));
    return array;
}

// create an array of numbers between "min" and "max"
function randomBlur(min, max) {
    var array = [];
    for (let i = 0; i < stimuli_set.length; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(randomNumber);
    }
    return array;
}