function addtodo(){
    var ol = document.getElementById("ol")
    var inputfield = document.getElementById("inputfield")

    if(inputfield.value.length > 3){

    var div_li = document.createElement("div")
    div_li.setAttribute("id" , "new_div")


    var li = document.createElement("li")
    li.innerHTML = inputfield.value
    console.log(li)
    // div_li.appendChild(li);

    var EditBtn = document.createElement("button")
    var DeleteBtn = document.createElement("button")
    EditBtn.setAttribute("id" , "EditBtn")
    EditBtn.innerHTML = "Edit Todo"

    DeleteBtn.setAttribute("id",  "DeleteBtn")
    DeleteBtn.innerHTML = "Delete Todo"
    DeleteBtn.setAttribute("onClick" , "delete_todo(this)")
    console.log(DeleteBtn)

    div_li.appendChild(EditBtn)
    div_li.appendChild(DeleteBtn)
    
    li.appendChild(div_li)


    ol.appendChild(li)
    // console.log(li)
    }
else{
    alert("Input Length is not Valid ");
    return
}
}


function deleteAll() {
    var ol = document.getElementById("ol")
    console.log(ol.innerHTML)
    ol.innerHTML = ""
}

function delete_todo(element){
    element.parentNode.parentNode.remove()

}