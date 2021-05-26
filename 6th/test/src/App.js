import Test from "./components/Test.js";

export default class App {
  constructor($target) {
    const test = new Test({
      $target,
    });
  }
}
