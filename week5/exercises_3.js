//
// Logic Challenge: Highest Score
//
// Implementasikan function highestScore untuk mendapatkan student dengan nilai tertinggi dari setiap class:
//
// Output yang diharapkan berupa Object Literal dengan format sebagai berikut:
//
// {
//   <class>: { name: <name>, score: <score> },
//   <class>: { name: <name>, score: <score> },
//   <class>: { name: <name>, score: <score> }
// }

function highestScore (students) {
  // Code disini
  var obj = {}
  for (var i = 0; i < students.length; i++) {
    var klas = students[i].class //get class
    if (obj[klas] === undefined || students[i].score > obj[klas].score) {
// jika obj[klas] undefined masuk sini OR score student[i] > obj[klas].score masuk sini
      obj[klas] = {} // reset class menjadi object keys object tidak boleh double
      obj[klas].name = students[i].name // set nama akan menggikuti score punya siapa
      obj[klas].score = students[i].score // set score
    }
  }
  return obj
}

// TEST CASE
// console.log(highestScore([
//   {
//     name: 'Dimitri',
//     score: 90,
//     class: 'foxes'
//   },
//   {
//     name: 'Alexei',
//     score: 85,
//     class: 'wolves'
//   },
//   {
//     name: 'Sergei',
//     score: 74,
//     class: 'foxes'
//   },
//   {
//     name: 'Anastasia',
//     score: 78,
//     class: 'wolves'
//   }
// ]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    // score: 71,
    score: 89,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}
