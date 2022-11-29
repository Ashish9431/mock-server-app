
var formdata = document.getElementById("entryform")
const main = document.getElementById("container")
const url = "https://curd-application.onrender.com/users"

fetch(url)
.then(res=>res.json())
.then(data=> append(data))

function append(data){
    const main = document.getElementById("container")
    console.log(data);
    
    data.forEach(function (el,index){

        var box = document.createElement("div")
        box.id="_body"
        inside = document.createElement("div")
        inside.id=el.id;

        var title1 = document.createElement("p")
        title1.textContent=el.title;
        title1.id="_title"
        var body1 = document.createElement("h5");
        body1.textContent=el.body
        body1.id="_body"
        var edit = document.createElement("div")
        edit.id="_sidebar"
        var btn1 = document.createElement("button")
        btn1.innerText="Edit"
        btn1.id="_edit"
        var btn2 = document.createElement("button")
        btn2.innerText="Delete"
        btn2.id="-delete"

        edit.append(btn1,btn2)
        
         inside.append(title1,body1 , edit)
         box.append(inside);
         main.append(box)
    })
   
    
}

main.addEventListener("click",(e)=>{
    e.preventDefault();
    // console.log(e.target.id)
    let editButtonIsPressed = e.target.id =="_edit"
    let delButtonIsPressed = e.target.id == "-delete"
    
    //  if(delButtonIsPressed){
    //    fetch(`${url}/`)
    //  }


})





formdata.addEventListener("submit",(event)=>{
    var titledata = document.getElementById("addtitle")
    var bodydata = document.getElementById("addbody")
    event.preventDefault()
    console.log(bodydata.value)
    fetch(url,{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify({
            title:titledata.value,
            body:bodydata.value
        })

    })
    .then(res=>res.json())
    .then(data=>{
        const dataArr=[];
        dataArr.push(data);
         append(dataArr);

        })
})




// append(data);