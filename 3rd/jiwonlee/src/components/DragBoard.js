export default class DragBoard {
  constructor({ $target, items, itemBoxs }) {
    this.state = {
      items: items,
      itemBoxs: itemBoxs,
      currentColor: null,
    };
    this.section = document.createElement('div');
    this.section.className = 'drag-board';
    $target.appendChild(this.section);

    this.render();
  }

  onDragStart = (event) => {
    this.state.currentColor = event.currentTarget.innerHTML;

    event.currentTarget.style.backgroundColor = this.state.currentColor;
  };

  onDragOver = (event) => {
    event.preventDefault();
  };

  onDrop = (event) => {
    event.currentTarget.style.backgroundColor = this.state.currentColor;

    event.stopPropagation();
  };

  render() {
    const dragSection = document.createElement('div');
    dragSection.className = 'drag-section';
    this.section.appendChild(dragSection);

    this.state.itemBoxs.map((itemBox) => {
      const dragSectionBox = document.createElement('div');
      dragSectionBox.className = 'drag-section-box';
      dragSectionBox.innerHTML = `${itemBox}`;
      dragSectionBox.ondragover = this.onDragOver;
      dragSectionBox.ondrop = this.onDrop;

      dragSection.appendChild(dragSectionBox);
    });
    
    const dragItemSection = document.createElement('div');
    dragItemSection.className = 'drag-item-section';
    this.section.appendChild(dragItemSection);

    this.state.items.map((item) => {
      const dragItem = document.createElement('div');
      dragItem.className = 'drag-item';
      dragItem.innerHTML = `${item}`;
      dragItem.draggable = 'true';
      dragItem.ondragstart = this.onDragStart;
      dragItem.ondragend = (event) => { event.currentTarget.style.backgroundColor='#fff'; };

      dragItemSection.appendChild(dragItem);
    });
  }
}
