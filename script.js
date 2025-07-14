function chng() {
            let inputBox = document.getElementById("text").value.trim();
            let list = document.getElementById("list")

            if (inputBox === "") {
                alert("please enter items");
                return;
            }
            let newEl = document.createElement("li");
            newEl.textContent = inputBox + " "

            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "❌";

            deleteBtn.addEventListener("click", function () {
                list.removeChild(newEl);

            })
            newEl.appendChild(deleteBtn)
            list.appendChild(newEl)
            document.getElementById("text").value = ""
        };


 