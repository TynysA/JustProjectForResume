import checkNumInputs from "./checkNumnputs";

const forms = (state) => {
  const form = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input");

  checkNumInputs("[data-number]");

  const messages = {
    loading: "Loading...",
    success: "Success",
    failed: "Failed...",
  };

  const postDate = async (url, date) => {
    document.querySelector(".status").textContent = messages.loading;

    let res = await fetch(url, {
      method: "POST",
      body: date,
    });

    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();
      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");

      item.appendChild(statusMessage);
      const formDate = new FormData(item);

      if (item.getAttribute("data-cacl") === "end") {
        for (let key in state) {
          formDate.append(key, state[key]);
        }
      }
      //   inputs.forEach((input) => {
      //     console.log(input.value);
      //   });
      postDate("assets/server", formDate)
        .then((res) => {
          //   console.log(res);
          statusMessage.textContent = messages.success;
        })
        .catch((err) => {
          statusMessage.textContent = messages.failed;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 10000);
        });
    });
  });
};

export default forms;
