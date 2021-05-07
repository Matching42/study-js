const modal = (function () {
    /* create Elements */
    const modal = document.querySelector('#modal');

    const openModalBttn = document.querySelectorAll(".custom-btn");
    console.log(openModalBttn)
  

    const modalFrame = document.createElement('div');
    modalFrame.className = 'modal';
    modalFrame.classList.add('hidden');

    const modalBackground = document.createElement('div');
    modalBackground.className = 'modalBackground';

    const modalBox = document.createElement('div');
    modalBox.className = 'modalBox';

    const modalTitle = document.createElement('h1');
    modalTitle.className = 'modalTitle';
    modalTitle.innerHTML = 'My Modal';

    const closeModalBttn = document.createElement('button');
    closeModalBttn.className = 'closeModalBttn';
    closeModalBttn.innerHTML = 'x';

    /* append */
    modalFrame.appendChild(modalBackground);
    modalFrame.appendChild(modalBox);
    modalBox.appendChild(modalTitle);
    modalBox.appendChild(closeModalBttn);

   // modal.appendChild(openModalBttn);
    modal.appendChild(modalFrame);

    /* event handling */
    const openModal = () => {
        modalFrame.classList.remove('hidden');
    }

    const closeModal = () => {
        modalFrame.classList.add('hidden');
    }
    for(var i = 0; i < openModalBttn.length; i++)
    {
    openModalBttn[i].addEventListener('click', openModal);
    }
    closeModalBttn.addEventListener('click', closeModal);
    modalBackground.addEventListener('click', closeModal);
}());