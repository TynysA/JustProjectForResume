const modals = () => {
  function bindModal(
    triggerSelcetor,
    modalSelcetor,
    closeSelcetor,
    closeClick = true
  ) {
    const trigger = document.querySelectorAll(triggerSelcetor);
    const modal = document.querySelector(modalSelcetor);
    const close = document.querySelector(closeSelcetor);
    const windows = document.querySelectorAll("[data-modal]");

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach((item) => {
          item.style.display = "none";
        });

        modal.style.display = "block";
        document.body.classList.add("modal-open");
      });
    });
    close.addEventListener("click", (e) => {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
      windows.forEach((item) => {
        item.style.display = "none";
      });
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal && closeClick) {
        windows.forEach((item) => {
          item.style.display = "none";
        });

        modal.style.display = "none";
        document.body.classList.remove("modal-open");
      }
    });
  }

  function showModalbyTime(selctor, time) {
    setTimeout(function () {
      document.querySelector(selctor).style.display = "block";
      document.body.classList.add("modal-open");
    }, time);
  }

  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close",
  );
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindModal(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false);
  bindModal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);
  // showModalbyTime(".popup", 60000);
};

export default modals;
