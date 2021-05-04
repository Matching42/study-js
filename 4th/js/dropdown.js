dropdown = (function () {
  const dropdown = document.getElementById('dropdown');
  
  const dropdownItem = document.createElement('p');
  dropdownItem.className = 'dropdown-item';
  dropdownItem.innerHTML = 'dropdown item';
  dropdown.appendChild(dropdownItem);
}());
