function changeText() {
    const p = document.querySelectorAll("p");


    p.forEach((element) => {
        const textarea = document.createElement("textarea");
        const defaultText = element.innerText;
        const save = document.createElement("button");

        textarea.value = defaultText;
        textarea.style.height = "100px";
        textarea.style.width = "650px";
        save.innerText = "Save";

        function textareaChange() {
            element.innerText = textarea.value;
            textarea.remove();
            save.remove();

        }

        save.addEventListener("click", textareaChange)
        element.insertAdjacentElement("afterend", textarea);
        element.insertAdjacentElement("afterend", save);
    })

    change.removeEventListener("click", changeText);

}

const change = document.getElementById("change");
change.addEventListener("click", changeText);


