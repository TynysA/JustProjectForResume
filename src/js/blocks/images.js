const images = () => {
  const imgPup = document.createElement("div"),
    workSection = document.querySelector(".works"),
    bigImage = document.createElement("img");

  imgPup.classList.add("popup");
  workSection.appendChild(imgPup);

  imgPup.style.justifyContent = "center";
  imgPup.style.alignContent = "center";
  imgPup.style.display = "none";

  imgPup.appendChild(bigImage);

  workSection.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;

    if (target && target.classList.contains("preview")) {
      imgPup.style.display = "flex";
      const path = target.parentNode.getAttribute("href");
      bigImage.setAttribute("src", path);
    }
    if (target && target.matches("div.popup")) {
      imgPup.style.display = "none";
    }
  });
};

export default images;
