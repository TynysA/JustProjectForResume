import "./slider";
import modals from "./blocks/modals";
import tabs from "./blocks/tabs";
import forms from "./blocks/forms";
import timer from "./blocks/timer";
import changeModalState from "./blocks/chageMadalState";
import images from "./blocks/images";

window.addEventListener("DOMContentLoaded", () => {
  let modalState = {};
  changeModalState(modalState);

  let deadline = "2023-01-29";

  modals();
  tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
  tabs(
    ".decoration_slider",
    ".no_click",
    ".decoration_content > div > div",
    "after_click"
  );
  tabs(
    ".balcon_icons",
    ".balcon_icons_img",
    ".big_img > img",
    "do_image_more",
    "inline-block"
  );
  forms(modalState);
  timer(".container1", deadline);
  images();
});
