
pagination = (function() {
    "use strict";

    const pagination_sec = document.getElementById('pagination');
    const tableList = document.createElement('div');
    tableList.setAttribute("class","tableList");
    tableList.setAttribute("id","listingTable");
    pagination_sec.appendChild(tableList);

    const pagination_block = document.createElement('div');
    pagination_block.setAttribute("class","pagination-block");
    const button_prev = document.createElement('span');
    button_prev.setAttribute("class","pageButton outline-none");
    button_prev.setAttribute("id","button_prev");
    button_prev.innerHTML = "≪";
    const page_num = document.createElement('span');
    page_num.setAttribute("class","outline-none");
    page_num.setAttribute("id","page_number");
    const button_next = document.createElement('span');
    button_next.setAttribute("class","pageButton outline-none");
    button_next.setAttribute("id","button_next");
    button_next.innerHTML = "≫";
    pagination_block.appendChild(button_prev);
    pagination_block.appendChild(page_num);
    pagination_block.appendChild(button_next);
    pagination_sec.appendChild(pagination_block);






    function Pagination() {

       const objJson = [
          { adName: "adName 1"},
          { adName: "adName 2"},
          { adName: "adName 3"},
          { adName: "adName 4"},
          { adName: "adName 5"},
          { adName: "adName 6"},
          { adName: "adName 7"},
          { adName: "adName 8"},
          { adName: "adName 9"},
          { adName: "adName 10"},
          { adName: "adName 11"},
          { adName: "adName 12"},
          { adName: "adName 13"},
          { adName: "adName 14"},
          { adName: "adName 15"},
          { adName: "adName 16"}
      ];

      const prevButton = document.getElementById('button_prev');
      const nextButton = document.getElementById('button_next');
      const clickPageNumber = document.querySelectorAll('.clickPageNumber');

      let current_page = 1;
      let records_per_page = 5;

      this.init = function() {
          changePage(1);
          pageNumbers();
          selectedPage();
          clickPage();
          addEventListeners();
     }

      let addEventListeners = function() {
          prevButton.addEventListener('click', prevPage);
          nextButton.addEventListener('click', nextPage);
      }

      let selectedPage = function() {
          let page_number = document.getElementById('page_number').getElementsByClassName('clickPageNumber');
          for (let i = 0; i < page_number.length; i++) {
              if (i == current_page - 1) {
                  page_number[i].style.opacity = "1.0";
                  page_number[i].style.color = "white";
                  page_number[i].style.backgroundColor = "#0077ff";
              }
              else {
                  page_number[i].style.opacity = "0.5";
                  page_number[i].style.color = "black";
                  page_number[i].style.backgroundColor = "white";
              }
          }
      }

      let checkButtonOpacity = function() {
        current_page == 1 ? prevButton.classList.add('opacity') : prevButton.classList.remove('opacity');
        current_page == numPages() ? nextButton.classList.add('opacity') : nextButton.classList.remove('opacity');
      }

      let changePage = function(page) {
          const listingTable = document.getElementById('listingTable');

          if (page < 1) {
              page = 1;
          }
          if (page > (numPages() -1)) {
              page = numPages();
          }

          listingTable.innerHTML = "";

          for(var i = (page -1) * records_per_page; i < (page * records_per_page) && i < objJson.length; i++) {
              listingTable.innerHTML += "<div class='objectBlock'>" + objJson[i].adName + "</div>";
          }
          checkButtonOpacity();
          selectedPage();
      }

      let prevPage = function() {
          if(current_page > 1) {
              current_page--;
              changePage(current_page);
          }
      }

      let nextPage = function() {
          if(current_page < numPages()) {
              current_page++;
              changePage(current_page);
          }
      }

      let clickPage = function() {
          document.addEventListener('click', function(e) {
              if(e.target.nodeName == "SPAN" && e.target.classList.contains("clickPageNumber")) {
                  current_page = e.target.textContent;
                  changePage(current_page);
              }
          });
      }

      let pageNumbers = function() {
          let pageNumber = document.getElementById('page_number');
              pageNumber.innerHTML = "";

          for(let i = 1; i < numPages() + 1; i++) {
              pageNumber.innerHTML += "<span class='clickPageNumber'>" + i + "</span>";
          }
      }

      let numPages = function() {
          return Math.ceil(objJson.length / records_per_page);
      }
   }
  let pagination = new Pagination();
  pagination.init();
})();
