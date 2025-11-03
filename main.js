const qr__input = document.getElementById("qr__input");
const qr__div = document.getElementById("qr__div");
const img = document.getElementById("img");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (qr__input.value.trim() === "") {
    alert("Enter Text or URL to Generate!");
    return;
  }

  qr__div.style.display = "block";

  img.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=$ " +
    qr__input.value;
});
