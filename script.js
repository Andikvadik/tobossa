function showCake() {
  document.getElementById('cake').classList.remove('hidden');

  // запуск конфеті
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 }
  });
}
