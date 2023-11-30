function meanCheck(num) {
    me = document.querySelectorAll(".meanAnswer")[num]
    me.style = "display: block"

    inputbox = document.querySelectorAll(".meanA")[num]
    inputbox.disabled = "true"

    button = document.querySelectorAll(".meanCheck")[num]
    button.disabled = "true"
} 

function wordCheck(num) {
    me = document.querySelectorAll(".wordAnswer")[num]
    me.style = "display: block"

    inputbox = document.querySelectorAll(".wordA")[num]
    inputbox.disabled = "true"

    button = document.querySelectorAll(".wordCheck")[num]
    button.disabled = "true"
}