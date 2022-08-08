// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];

  console.log(fruits.toString());
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  console.log([fruits]);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  // console.log(array.sort((a, b) => b - a)); // 얘도 [5, 4, 3, 2, 1] 나옴

  const reverseArray = [...array.reverse()];
  console.log(reverseArray);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // const newArray = array.splice(0, 2);
  // console.log(newArray); // [1, 2] <- splice는 삭제된 요소를 반환하기 때문!
  array.splice(0, 2);
  console.log(array);
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
  // 얘는, { name: 'A', age: 29, enrolled: true, score: 45 } 와 같을 것임
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  console.log(students.filter((student) => student.score === 90)[0]);
}

// Q6. make an array of enrolled students
{
  const enrolledStudents = [
    students.filter((student) => student.enrolled === true),
  ];
  console.log(enrolledStudents);
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
}

// Q9. compute students' average score
{
  const scores = students.map((student) => student.score);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const scores = students.map((student) => student.score);
  console.log(scores.toString());
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const scores = students.map((student) => student.score);
  console.log(scores.sort().toString());
}
