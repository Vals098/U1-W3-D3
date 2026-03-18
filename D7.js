const input = document.querySelector("input")
const button = document.querySelector("button")
const list = document.querySelector("ul")

//save the value as an li
button.addEventListener("click", function () {
  const value = input.value

  const li = document.createElement("li")
  li.innerText = value

  const deleteButton = document.createElement("button")
  const icon = document.createElement("ion-icon")
  icon.setAttribute("name", "trash-bin-outline")

  deleteButton.appendChild(icon)

  deleteButton.addEventListener("click", function(){
      li.remove()
      })

  li.appendChild(deleteButton)
  list.appendChild(li)

  //reset the input box
  input.value = ""
})


list.addEventListener("click", function (event) {
  //mark as completed --> .add
  //unmark if clicked again --> .toggle
  event.target.classList.toggle("completed")
})

//EXTRA
//add pointer to cursor when it hovers on a li
//add that eventListener to trigger the button with the click on the "enter" key
//add bin icon to the deleteButton // done
