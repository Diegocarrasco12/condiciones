let borderShow = false
const img = document.querySelector("img")

img.addEventListener("click",  () => {
  if (!borderShow) {
    img.style.border = "solid red 2px"
    borderShow = true
  }
  else {
    img.style.border = "none"
    borderShow = false
  }
})