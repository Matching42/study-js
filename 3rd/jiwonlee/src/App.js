import DragBoard from './components/DragBoard.js';

export default class App {
  constructor($target) {
    const items = ['draggable1', 'draggable2', 'draggable3'];

    const dragBoard = new DragBoard({
      $target,
      items,
    });
  }
}
