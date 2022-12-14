// array api quiz

// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];

  console.log(fruits.toString());
  // apple,banana,orange

  const result = fruits.join();
  console.log(result);
  // apple,banana,orange

  const result2 = fruits.join(', ');
  console.log(result2);
  // apple, banana, orange

  const result3 = fruits.join(', and ');
  console.log(result3);
  // apple, and banana, and orange
}

// Q2. make an array out of a string
{
  const fruits = 'π, π₯, π, π';
  console.log([fruits]);
  // ['π, π₯, π, π'] -> μ΄κ±΄ μνλ λͺ¨μμ λ°°μ΄μ΄ μλ

  const result = fruits.split(', '); // joinκ³Ό λ¬λ¦¬ splitμ κ΅¬λΆμλ₯Ό λ°λμ μ λ¬ν΄μΌ ν¨ // λ¬Έμμ΄ λ©μλλ‘, κ΅¬λΆμ κΈ°μ€μΌλ‘ λλ μ λ°°μ΄λ‘ λ§λ€μ΄ λ°ν
  console.log(result);
  // ['π', 'π₯', 'π', 'π']
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  // console.log(array.sort((a, b) => b - a)); // μλ [5, 4, 3, 2, 1] λμ΄

  const reverseArray = [...array.reverse()]; // reverseλ λ°°μ΄ μμ²΄λ₯Ό μμ νλ λ©μλλκΉ μ΄λ κ² μ νλ€! κ·Όλ°, λ¬Έμ μμ μ λ°°μ΄ λ°ννλΌ ν κ² μλλΌ μ  λ°°μ΄μ μ λ κ² λ°κΎΈλΌ νμΌλ―λ‘, κ·Έλ₯ λ°λ‘ array.reverse(); νλ κ² λ μ νν λ΅μΈ κ² κ°κΈ°λ.
  console.log(reverseArray);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // const newArray = array.splice(0, 2);
  // console.log(newArray); // [1, 2] <- spliceλ μ­μ λ μμλ₯Ό λ°ννκΈ° λλ¬Έ!

  // array.splice(0, 2);
  // console.log(array);
  // array μΆλ ₯νλλ° [3, 4, 5]κ° λμ¨ κ²μμ νμΈν  μ μλ―μ΄, spliceλ λ°°μ΄ κ·Έ μμ²΄λ₯Ό μμ νλλ°, *μλ‘μ΄ λ°°μ΄*μ λ§λ€λΌκ³  νμ...

  // μ΄λ΄ λλ slice μ¬μ©! -> λ°°μ΄μμ *μνλ λΆλΆλ§* λ¦¬ν΄ν΄ λ°μ μ΄
  const result = array.slice(2);
  console.log(result); // [3, 4, 5]
  console.log(array); // [1, 2, 3, 4, 5]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  // μλ, { name: 'A', age: 29, enrolled: true, score: 45 } μ κ°μ κ²μ
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  console.log(students.filter((student) => student.score === 90)[0]);
  // StudentΒ {name: 'C', age: 30, enrolled: true, score: 90}

  const result = students.find((student) => student.score === 90);
  console.log(result);
  // StudentΒ {name: 'C', age: 30, enrolled: true, score: 90}
}

// Q6. make an array of enrolled students
{
  // const enrolledStudents = [
  //   students.filter((student) => student.enrolled === true),
  // ];
  // μλ‘μ΄ λ°°μ΄μ λ£μ΄μ€ νμ X, λ°°μ΄ μ λ°°μ΄μ΄ λ¨...
  // filter μμ²΄κ° μ λ°°μ΄μ λ°ννκΈ° λλ¬Έ
  const enrolledStudents = students.filter(
    (student) => student.enrolled === true
  );
  console.log(enrolledStudents);
  // [Student, Student, Student]

  const result = students.filter((student) => student.enrolled); // enrolledκ° μ°Έμ΄λΌλ©΄ μ  κ°μ΄ trueμΌ κ²μ΄λ―λ‘, // filterλ μ½λ°±ν¨μλ‘ μ‘°κ±΄μ?μ μ£Όλκ΅¬λ
  console.log(result);
  // [Student, Student, Student]
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  console.log(students.map((student) => student.score));
}

// Q8. check if there is a student with the score lower than 50
{
  console.log(
    students.some((student) => {
      student.score < 50;
    })
  );
  // false

  console.log(students.some((student) => student.score < 50));
  // true // ....??

  const result = students.some((student) => student.score < 50);
  console.log(result);
  // true // μ..?
}

// Q9. compute students' average score
{
  // const scores = students.map((student) => student.score);

  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  // λ°°μ΄μ λλ©΄μ μ μ©
  // μ²« prev κ°μ 0μΌλ‘ νκ³ , curr.scoreλ₯Ό 0μ λνλ€.
  // 0 + curr.scoreν κ°μ΄, λ λ²μ§Έ λ°°μ΄ μμλ₯Ό λ λ prev κ°μ΄ λλ€.
  // κ·Έλ κ² λͺ¨λ  κ°μ λν κ°μ λ°ν
  // 0 κ°μ΄ μ΄κΈ° κ°μ μ ν΄μ£Όμ§ μμ μ, λ°°μ΄μ μ μΌ μ²« μμλ₯Ό μ΄κΈ° κ°μΌλ‘ νλ€.
  // reduceRightλ λ€μμλΆν° μμ
  console.log(result); // 369
  console.log(result / students.length); // 73.8
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const scores = students.map((student) => student.score);
  console.log(scores.toString()); // 45,80,90,66,88

  const result = students.map((student) => student.score).join();
  console.log(result); // 45,80,90,66,88
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const scores = students.map((student) => student.score);
  console.log(scores.sort().toString()); // 45,66,80,88,90

  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result); // 45,66,80,88,90
}
