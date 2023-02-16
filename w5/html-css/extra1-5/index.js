const loader = document.getElementById("loader");
const button = document.getElementById("button");
button.addEventListener("click", function () {
  if (loader.className === "loading") {
    loader.className = "";
  } else {
    loader.className = "loading";
  }
});
