window.addEventListener('DOMContentLoaded', function () {
  const resultEl = document.getElementById('result');
  const restartBtn = document.getElementById('restart-button');
  const mbtiResult = localStorage.getItem('mbti_result');

  if (mbtiResult) {
    resultEl.textContent = `${mbtiResult}입니다!`;
    // 버튼은 그대로 "다시하기" 유지 (아래 else에서만 바꿈)
  } else {
    resultEl.textContent = "아직 테스트를 진행하지 않았습니다!";
    restartBtn.textContent = "테스트 하러 가기";
  }
});
