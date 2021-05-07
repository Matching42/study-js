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

    const hihiModalBttn = document.createElement('button');
    hihiModalBttn.className = 'custom-btn';
    hihiModalBttn.innerHTML = 'HIHI';

    const rate_section = document.createElement('section');
    rate_section.setAttribute("id","rate")

    // <section id="rate"></section>


    const modalTitle = document.createElement('h1');
    modalTitle.className = 'modalTitle';
    modalTitle.innerHTML = 'My Modal';

    const closeModalBttn = document.createElement('button');
    closeModalBttn.className = 'closeModalBttn';
    closeModalBttn.innerHTML = 'x';

    /* append */
    modalFrame.appendChild(modalBackground);
    modalBox.appendChild(modalTitle);
    modalBox.appendChild(closeModalBttn);
    modalBox.appendChild(rate_section);
    modalBox.appendChild(hihiModalBttn);

    // modal.appendChild(openModalBttn);
    modal.appendChild(modalFrame);

    modalFrame.appendChild(modalBox);

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
    hihiModalBttn.addEventListener('click', closeModal);
}());
