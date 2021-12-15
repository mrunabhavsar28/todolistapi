function deleteChild() {
    const e = document.getElementsByTagName("ul")[0];
    if(e){
    e.innerHTML = '';
    }
    
    }
    
    async function funcname(){
    
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    var data = await response.json();
    
    deleteChild()
    var all = document.getElementById("all").checked
    var done = document.getElementById("done").checked
    var cont=document.querySelector(".todo_render")
    
    if(all==true){
    
    for(var i=0;i<data.length;i++){
    const newelem = document.createElement("li")
    var text = document.createTextNode(data[i]["title"])
    newelem.appendChild(text)
    cont.appendChild(newelem)
    if(data[i]["completed"]==true){
    newelem.style["background-color"] = "#ffa500";
    }
    else{
    newelem.style["background-color"] = "#00ff00";
    }
    
    
    }
    }
    else if(done==true){
    
    for(var i=0;i<data.length;i++){
    if(data[i]["completed"]==true){
    const newelem = document.createElement("li")
    var text = document.createTextNode(data[i]["title"])
    newelem.appendChild(text)
    cont.appendChild(newelem)
    if(data[i]["completed"]==true){
    newelem.style["background-color"] = "#ffa500";
    }
    else{
    newelem.style["background-color"] = "#00ff00";
    }
    }
    }
    
    
    }
    else{
    for(var i=0;i<data.length;i++){
    if(data[i]["completed"]==false){
    const newelem = document.createElement("li")
    var text = document.createTextNode(data[i]["title"])
    newelem.appendChild(text)
    cont.appendChild(newelem)
    if(data[i]["completed"]==true){
    newelem.style["background-color"] = "#ffa500";
    }
    else{
    newelem.style["background-color"] = "#00ff00";
    }
    }
    
    
    }
    }}