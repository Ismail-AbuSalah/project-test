const body = document.querySelector("body")
const listname = document.querySelector(".listname")
const listbtn = document.querySelector(".listmaker")
const main = document.querySelector(".test")
const user = {}


listbtn.addEventListener("click", function(){
  if(listname.value!==""){
    
    // Creating div container 
    const lidiv = document.createElement("div")
    lidiv.innerHTML="<p></p>"+"<ul></ul>"+"<p><input><i></i></p>"

    // Selecting Elemnts inside the Div container
    const p = lidiv.querySelector("p")
    const input = lidiv.querySelector("input")
    const addbtn = lidiv.querySelector("i")
    const ul = lidiv.querySelector("ul")
    addbtn.className="far fa-plus-square"
    // Saving input value (List Title) in a variable
    const newname = listname.value
    user[newname]=[]
    // Selecting Elemnts inside the P container & Add Functionality to "Edit listname" & "Delete the list"  Buttons
    p.innerHTML=newname+"<i></i>"
    const modbtn = p.querySelector("i")
    modbtn.className="far fa-times-circle"
    modbtn.onclick=function(){
      lidiv.remove()
    }



    // Adding attributes
    lidiv.className="container"
    input.placeholder="Add ToDo Task!"

    // Append the Container to Body elemnt & reset the list name to Empty String ""
    main.append(lidiv)
    listname.value=""

    // Now Adding functionality to the buttons inside the List Container 
    
    addbtn.onclick=function(){
      if(input.value!==""){
        const licom={}
        user[newname].push(input.value)       
        // Creating li elemnt & append to ul then reset input value to ""
        const li = document.createElement("li")
        li.innerHTML="<i></i>"+input.value+"<i></i>"
        ul.append(li)
        input.value=""
        
        // Selecting Buttons inside the list elemnts & adding functionality 
        const limodbtn = li.querySelectorAll("i")
        limodbtn[0].classList="far fa-check-circle"
        limodbtn[0].style.float="left"
        limodbtn[0].style.color="green"
        limodbtn[0].style.paddingRight="10px"

        limodbtn[0].onclick=function(){
          if(li.style.textDecoration=== "line-through"){
            li.style.textDecoration= "none"
          }else {
            li.style.textDecoration= "line-through"
          }
          
        }
        limodbtn[1].className="far fa-times-circle"
        limodbtn[1].style.float="right"
        limodbtn[1].style.color="red"
        limodbtn[1].onclick=function(){
          li.remove()
        }
      }
    }
  }
})


