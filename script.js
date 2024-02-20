var img = document.querySelector("#img");
var inp = document.querySelector("textarea");
inp.addEventListener("keyup", () => {
  fetch(
    `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inp.value}`
  )
    .then((response) => {
      return response.blob();
    })
    .then((blob) => {
      var objectURL = URL.createObjectURL(blob);
      img.innerHTML = `<img src="${objectURL}" height="200px" width="200px">`;
    })
    .catch((error) => {
      console.log("error", error);
    });
});
function demo() {
  var inn = document.querySelector("img");
  var imgsrc = inn.getAttribute("src");
  var a = document.querySelector("a");
  a.setAttribute("href", imgsrc);
}
