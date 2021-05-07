dropdown = (function () {
  const dropdown = document.getElementById('dropdown');

  const dropdownButton = document.createElement('div');
  dropdownButton.className = 'dropdown-button';
  dropdownButton.innerHTML = 'Dropdown';
  dropdown.appendChild(dropdownButton);

  const dropdownBox = document.createElement('div');
  dropdownBox.className = 'dropdown-box';
  dropdown.appendChild(dropdownBox);

  for (var i = 0; i < 3; i++) {
    const dropdownItem = document.createElement('a');
    dropdownItem.className = 'dropdown-item';
    dropdownItem.innerHTML = `item ${i}`;
    dropdownBox.appendChild(dropdownItem);
  }

  dropdownButton.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
    dropdownBox.classList.toggle('active');
  });
}());
