const checkNumInputs = (selctor) => {
  const numInputs = document.querySelectorAll(selctor);

  numInputs.forEach((item) => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/, "");
    });
  });
};

export default checkNumInputs;
