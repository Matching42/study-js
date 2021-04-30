import DragBoard from './components/DragBoard.js';

export default class App {
  constructor($target) {
    const items = ['LightBlue', 'LightSalmon', 'LightPink', 'LightGray'];
    const itemBoxs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

    const dragBoard = new DragBoard({
      $target,
      items,
      itemBoxs,
    });
  }
}
