const buttons = document.getElementsByClassName("changeImageButton");

for (let button of buttons) {
  button.addEventListener("click", function () {
    const newImageUrl = "./images/rick-roll-rick-rolled.gif";

    const allImages = document.getElementsByTagName("img");

    for (let img of allImages) {
      img.src = newImageUrl;
    }
    document.getElementById("rickroll").play();
  });
}
