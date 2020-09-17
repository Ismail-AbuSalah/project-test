const body = document.querySelector("body")
const listname = document.querySelector(".listname")
const listbtn = document.querySelector(".listmaker")
const user = {}


listbtn.addEventListener("click", function(){
  if(listname.value!==""){
    
    // Creating div container 
    const lidiv = document.createElement("div")
    lidiv.innerHTML="<p></p>"+"<ul></ul>"+"<input><button>Add</button>"

    // Selecting Elemnts inside the Div container
    const p = lidiv.querySelector("p")
    const input = lidiv.querySelector("input")
    const addbtn = lidiv.querySelector("button")
    const ul = lidiv.querySelector("ul")

    // Saving input value (List Title) in a variable
    const newname = listname.value
    user[newname]=[]
    // Selecting Elemnts inside the P container & Add Functionality to "Edit listname" & "Delete the list"  Buttons
    p.innerHTML=newname+"<button>Edit</button><button>Delete</button>"
    const modbtn = p.querySelectorAll("button")

    modbtn[0].onclick
    modbtn[1].onclick=function(){
      lidiv.remove()
    }



    // Adding attributes
    lidiv.className="container"
    input.placeholder="Add ToDo Task!"

    // Append the Container to Body elemnt & reset the list name to Empty String ""
    body.append(lidiv)
    listname.value=""

    // Now Adding functionality to the buttons inside the List Container 
    
    addbtn.onclick=function(){
      if(input.value!==""){
        const licom={}
        user[newname].push(input.value)       
        // Creating li elemnt & append to ul then reset input value to ""
        const li = document.createElement("li")
        li.innerHTML="<button>C</button>"+input.value+"<button>rm</button>"
        ul.append(li)
        input.value=""
        
        // Selecting Buttons inside the list elemnts & adding functionality 
        const limodbtn = li.querySelectorAll("button")

        limodbtn[0].onclick=function(){
          if(li.style.textDecoration=== "line-through"){
            li.style.textDecoration= "none"
          }else {
            li.style.textDecoration= "line-through"
          }
          
        }

        limodbtn[1].onclick=function(){
          li.remove()
        }
      }
    }
  }
})


