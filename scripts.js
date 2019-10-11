var list = document.getElementById("list"),
addBtn = document.getElementById("addBtn"),
inputF = document.getElementById("input");

// naujas task'as
function newElement() {
  var li = document.createElement("div"),
  del = document.createElement("span");
  li.classList.add("thingsToDo-block");
  del.classList.add("close");
  inputValue = inputF.value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  li.appendChild(del);
  if (inputValue === '') {
    alert("Tuščia");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("input").value = "";
  closeBtn();
}

// deletinam įkeltus
function closeBtn() {
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
};