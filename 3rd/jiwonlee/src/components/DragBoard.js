export default class DragBoard {
    constructor({ $target, items }) {
      this.section = document.createElement('div');
      this.section.className = 'drag-board';
      $target.appendChild(this.section);

      this.items = items;
      
      this.render();
    }

    render() {
      this.items.map((item, i) => {
        const dragItem = document.createElement('div');
        dragItem.className = 'drag-item';
        dragItem.innerHTML = `${item}`;
        dragItem.draggable = 'true';
        dragItem.ondragstart = (event) => { event.currentTarget.style.backgroundColor= 'yellow'; }
        dragItem.ondragend = (event) => { event.currentTarget.style.backgroundColor='#fff'; };

        this.section.appendChild(dragItem);
      });
    }
  }
  