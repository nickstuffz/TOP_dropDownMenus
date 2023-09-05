import "./style.css";
import { initImageSlider } from "./imageSlider";
import { initListeners } from "./apiPrac";

function intializePage() {
  initImageSlider();
  initListeners();
}

intializePage();
