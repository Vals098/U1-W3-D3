const input = document.querySelector("input")
const button = document.querySelector("button")
const list = document.querySelector("ul")

//event by click
button.addEventListener("click", function () {
  const value = input.value

  const li = document.createElement("li")
  li.innerText = value

  const deleteButton = document.createElement("button")
  const icon = document.createElement("ion-icon")
  icon.setAttribute("name", "trash-bin-outline")

  deleteButton.appendChild(icon)

  deleteButton.addEventListener("click", function () {
    li.remove()
  })

  li.appendChild(deleteButton)
  list.appendChild(li)

  //reset the input box
  input.value = ""
})

//event by keydown !!!!!!!!!!!!!!!!!!
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    button.click()
  }
})

//event by clicking the li
list.addEventListener("click", function (event) {
  //mark as completed --> .add
  //unmark if clicked again --> .toggle
  event.target.classList.toggle("completed")
})

//EXTRA
//add pointer to cursor when it hovers on a li or button // done
//add that eventListener to trigger the button with the click on the "enter" key  // done
//add bin icon to the deleteButton // done
