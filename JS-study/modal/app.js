// DOM
// document에서
const $openButton = document.querySelector('.open');
const $modal = document.querySelector('.modal');
// const $closeButton = document.querySelector('.close');
// const $modalOverlay = document.querySelector('.modal-overlay');

// 이미 선택한 변수에서도 querySelector 사용 가능!
const $closeButton = $modal.querySelector('.close');
const $modalOverlay = $modal.querySelector('.modal-overlay');

// 이벤트 핸들러 정의
// function 키워드
function openModal() {
  $modal.classList.remove('hidden');
}

// 화살표 함수
const closeModal = () => {
  $modal.classList.add('hidden');
};

// addEventListener
$openButton.addEventListener('click', openModal);
$closeButton.addEventListener('click', closeModal);
$modalOverlay.addEventListener('click', closeModal);
