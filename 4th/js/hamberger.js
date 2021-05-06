hamberger = (function () {
  const hamberger = document.getElementById('hamberger');
  const hambergerItem = document.createElement('div');
  hambergerItem.className = 'hamberger-item';
  hamberger.appendChild(hambergerItem);
  for (var i = 0; i < 3; i++){
    hambergerItem.appendChild(document.createElement('span'));
  }
  hambergerItem.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
    hamberger.classList.toggle('active');
  });
}());