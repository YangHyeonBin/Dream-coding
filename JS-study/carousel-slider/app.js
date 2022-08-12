// DOM으로 요소 선택
const $firstSlide = document.querySelector('.slider__item:first-child');

// 클래스명 상수 선언
const SHOWING_CLASS = 'showing';

// 조건문 이용, 가장 위에 놓일 요소를 선택하는 함수 정의
const slide = () => {
  // 이 함수가 실행될 때마다 currentSlide가 바뀌어야 하므로 여기에 써야 함
  const $currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if ($currentSlide) {
    $currentSlide.classList.remove(SHOWING_CLASS);
    // 제거 후엔 자신의 형제 요소가 보이게 해야 함
    const $nextSlide = $currentSlide.nextElementSibling;
    if ($nextSlide) {
      $nextSlide.classList.add(SHOWING_CLASS);
    } else {
      $firstSlide.classList.add(SHOWING_CLASS);
    }
    // 위 아래 코드가 같아서 위 코드를 주석 처리 -> 마지막(5)에서 처음(1)으로 넘어갈 때 화면에 아무것도 없는 채로 2초의 딜레이 발생
  } else {
    $firstSlide.classList.add(SHOWING_CLASS);
    // DOM 지식
    // nextSibling은 태그와 태그 사이의 공백인 텍스트 노드임
    // console.log($firstSlide.nextSibling); // #text
    // nextElementSibling이 형제 요소!
    // console.log($firstSlide.nextElementSibling); // <div class="slider__item">...</div>
  }
};

// 함수는 호출해야 실행됨
slide();

// 함수가 자동으로 여러 번 실행되게 하기: setInterval();
// Parameters
// 첫 인자: 코드나 콜백함수 -> 두 번째 인자로 전달한 시간이 흐른 뒤 실행할.
// 두 번째 인자: 시간. 단위는 ms(단위 쓰지 말 것), optional
let intervalId = setInterval(slide, 2000);
// 제거하기 위해 id 저장,
// 다시 시작하게 하기 위해, 재할당이 가능한 let 사용!

// 화살표 추가해보기
// DOM 이용해 요소 선택
const $leftArrow = document.querySelectorAll('.before');
const $rightArrow = document.querySelectorAll('.after');

// 이벤트 핸들러 정의
const $lastSlide = document.querySelector('.slider__item:last-child');

const leftArrowClickHandler = () => {
  clearInterval(intervalId);
  const $currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  const $prevSlide = $currentSlide.previousElementSibling;
  $currentSlide.classList.remove(SHOWING_CLASS);

  // 조건문: if else 문
  // if ($currentSlide === $firstSlide) {
  //   $lastSlide.classList.add(SHOWING_CLASS);
  // } else {
  //   $prevSlide.classList.add(SHOWING_CLASS);
  // }

  // 삼항연산자
  $currentSlide === $firstSlide
    ? $lastSlide.classList.add(SHOWING_CLASS)
    : $prevSlide.classList.add(SHOWING_CLASS);

  intervalId = setInterval(slide, 2000);
};

const rightArrowClickHandler = () => {
  clearInterval(intervalId);
  const $currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  const $nextSlide = $currentSlide.nextElementSibling;
  $currentSlide.classList.remove(SHOWING_CLASS);
  if ($currentSlide === $lastSlide) {
    $firstSlide.classList.add(SHOWING_CLASS);
  } else {
    $nextSlide.classList.add(SHOWING_CLASS);
  }
  intervalId = setInterval(slide, 2000);
};

// 이벤트 등록
$leftArrow[0].addEventListener('click', leftArrowClickHandler);
$rightArrow[0].addEventListener('click', rightArrowClickHandler);

$leftArrow[1].addEventListener('click', leftArrowClickHandler);
$rightArrow[1].addEventListener('click', rightArrowClickHandler);

$leftArrow[2].addEventListener('click', leftArrowClickHandler);
$rightArrow[2].addEventListener('click', rightArrowClickHandler);

$leftArrow[3].addEventListener('click', leftArrowClickHandler);
$rightArrow[3].addEventListener('click', rightArrowClickHandler);

$leftArrow[4].addEventListener('click', leftArrowClickHandler);
$rightArrow[4].addEventListener('click', rightArrowClickHandler);

// 유저가 화살표 누를 땐 자동으로 변하는 게 다시 2초를 기다렸으면 좋겠다.
// -> setInterval을 삭제하는 clearInterval() 사용,
// setInterval()의 반환값인 intervalId를 변수에 저장해 식별자로 사용!
// 영원히 멈추는 게 아니라 유저 클릭하고 또 2초가 지나면 다시 자동으로 혼자 변했으면 좋겠다.
// -> setInterval()을 다시 호출해야 함,
// 재할당이 가능한 변수가 되도록 let 키워드 사용해 intervalId를 저장!
