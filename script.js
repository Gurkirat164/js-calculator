let button = document.querySelectorAll("button");
let input = document.querySelectorAll("input");

let string = "";

let arr = Array.from(button);
arr.forEach(button => {
      button.addEventListener("click", (e) => {
            if (e.target.innerHTML == "=") {
                  console.log('=')
                  string = eval(string);
                  input[0].value = string;
                  console.log(string);
            }
            else if (e.target.innerHTML == "AC") {
                  console.log('AC')
                  string = "";
                  input[0].value = string;
            }
            else if (e.target.innerHTML == "DEL") {
                  console.log('DEL')
                  string = string.slice(0, -1);
                  input[0].value = string;
            }
            else {
                  console.log(e.target.innerHTML)
                  string += e.target.innerHTML;
                  input[0].value = string;
            }
      })
})

// Add event listener for keydown events
document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
            console.log('=');
            string = eval(string);
            input[0].value = string;
      }
      else if (e.key === "Backspace") {
            string = string.slice(0, -1);
            input[0].value = string;
      }
      else if (e.key === "Escape") {
            string = "";
            input[0].value = string;
      }
      else if ("0123456789+-*/.%".includes(e.key)) {
            string += e.key;
            input[0].value = string;
      }
      else if (e.key === "Delete") {
            string = "";
            input[0].value = string;
      }
})