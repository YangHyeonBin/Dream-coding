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
  const fruits = '🍎, 🥝, 🍌, 🍒';
  console.log([fruits]);
  // ['🍎, 🥝, 🍌, 🍒'] -> 이건 원하는 모양의 배열이 아님

  const result = fruits.split(', '); // join과 달리 split은 구분자를 반드시 전달해야 함 // 문자열 메서드로, 구분자 기준으로 나눠서 배열로 만들어 반환
  console.log(result);
  // ['🍎', '🥝', '🍌', '🍒']
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  // console.log(array.sort((a, b) => b - a)); // 얘도 [5, 4, 3, 2, 1] 나옴

  const reverseArray = [...array.reverse()]; // reverse는 배열 자체를 수정하는 메서드니까 이렇게 잘 했다! 근데, 문제에서 새 배열 반환하라 한 게 아니라 저 배열을 저렇게 바꾸라 했으므로, 그냥 바로 array.reverse(); 하는 게 더 정확한 답인 것 같기도.
  console.log(reverseArray);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // const newArray = array.splice(0, 2);
  // console.log(newArray); // [1, 2] <- splice는 삭제된 요소를 반환하기 때문!

  // array.splice(0, 2);
  // console.log(array);
  // array 출력했는데 [3, 4, 5]가 나온 것에서 확인할 수 있듯이, splice는 배열 그 자체를 수정하는데, *새로운 배열*을 만들라고 했음...

  // 이럴 때는 slice 사용! -> 배열에서 *원하는 부분만* 리턴해 받아 옴
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
  // 얘는, { name: 'A', age: 29, enrolled: true, score: 45 } 와 같을 것임
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  console.log(students.filter((student) => student.score === 90)[0]);
  // Student {name: 'C', age: 30, enrolled: true, score: 90}

  const result = students.find((student) => student.score === 90);
  console.log(result);
  // Student {name: 'C', age: 30, enrolled: true, score: 90}
}

// Q6. make an array of enrolled students
{
  // const enrolledStudents = [
  //   students.filter((student) => student.enrolled === true),
  // ];
  // 새로운 배열에 넣어줄 필요 X, 배열 속 배열이 됨...
  // filter 자체가 새 배열을 반환하기 때문
  const enrolledStudents = students.filter(
    (student) => student.enrolled === true
  );
  console.log(enrolledStudents);
  // [Student, Student, Student]

  const result = students.filter((student) => student.enrolled); // enrolled가 참이라면 저 값이 true일 것이므로, // filter도 콜백함수로 조건식?을 주는구나
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
  // true // 왜..?
}

// Q9. compute students' average score
{
  // const scores = students.map((student) => student.score);

  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  // 배열을 돌면서 적용
  // 첫 prev 값은 0으로 하고, curr.score를 0에 더한다.
  // 0 + curr.score한 값이, 두 번째 배열 요소를 돌 땐 prev 값이 된다.
  // 그렇게 모든 값을 더한 값을 반환
  // 0 같이 초기 값을 정해주지 않을 시, 배열의 제일 첫 요소를 초기 값으로 한다.
  // reduceRight는 뒤에서부터 시작
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
