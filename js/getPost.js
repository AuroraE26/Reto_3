objData={
    title:"",
    cover:"",
    //tags:["",""],
    content:"",
    image:"",
    date:"",
    hour:"",
    reactions:{
        likes:0,
        unicorn:0,
        save:0,
    },
    
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

    //listPost
    let uno=document.querySelector("span[id='firstCardTxt']");
    uno.textContent="Hola";
    listPost.forEach(item => {
    //     const titulo=document.createElement("h1");
    //     titulo.dataset.id=item.id;
    });
    // console.log(listPost);
}

document.getElementById('botoncito').onclick = function getUsers(){
    console.log("GET");
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

