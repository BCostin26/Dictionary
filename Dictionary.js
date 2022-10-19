let dictionary = new Map();
let aux = 1;
function addWord() {
    let inputWord = document.getElementById("inputWord").value;
    if (!dictionary.has(inputWord)) {
        dictionary.set(inputWord);
        alert("The word has beed added in your dictionary!")
    } else {
        alert("The word is allready in your dictionary!")
    }
}

function searchWord() {
    let inputWord = document.getElementById("inputWord").value;
    if (dictionary.has(inputWord)) {
        alert("The word is in your dictionary!");
        if (aux == 1) {
            let btn = document.createElement("button");
            btn.innerHTML = "Delete the word from dictionary!";
            btn.className = "deleteWord";
            document.body.appendChild(btn);
            btn.onclick = function () {
                if (dictionary.has(inputWord)) {
                    dictionary.delete(inputWord);
                    alert("The word has been deleted!")
                } else {
                    alert("The word is not in your dictionary!");
                }
            }
            aux = 0;
        }
    } else {
        alert("The word is not in your dictionary!");
    }
}