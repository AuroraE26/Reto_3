objData={
    title:"",
    cover:"",
    //tags:["",""],
    content:"",
    image:"",
    //date:"",
    /*reactions:{
        likes:0,
        unicorn:0,
        save:0,
    },
    */
}
function renderTable(data){
    let listPost = [];
    for(let key in data){
        let obj = {
            id: key,
            ...data[key],
        }
        listPost.push(obj);
    }
    console.log(listPost);

    const titulo=document.createElement("h1");
    titulo.dataset.id=5;
}

document.getElementById('btn3').onclick = function getUsers(){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState === 4 && xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            renderTable(response);
        }
    })
    const URL = `https://reto-3-77f5a-default-rtdb.firebaseio.com/.json`;
    xhr.open("GET", URL, true);
    xhr.send();

}

