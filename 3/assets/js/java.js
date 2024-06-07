const btn = document.querySelector("button")
const mensaje = document.querySelector(".mensaje")

btn.addEventListener("click", () => {
  const [{ value: a }, { value: b }, { value: c }] = document.querySelectorAll("select")
  const passowrd = a + b + c
  if (passowrd == "911") mensaje.innerHTML = "Password 1 correcto"
  else if (passowrd == "714") mensaje.innerHTML = "Password 2 correcto"
  else mensaje.innerHTML = "Password incorrecto"
})