function showCake() {
  const cake = document.getElementById('cake');
  cake.classList.remove('hidden');

  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });
}

