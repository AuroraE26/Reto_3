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
    //titulo.dataset.id=item.id;
    //let num="1"
    //listPost
   //document.querySelector("span[id='firstCardTxt1']").textContent=listPost[0].title;
   // uno.textContent="Hola";
//    document.getElementById('firstCardTxt'+num).textContent=listPost[0].title;

     listPost.forEach((item,index) => {
        const list = document.querySelector("#card-list")
        const card = document.createElement("div");
        const titulo = document.createElement("h1");
        const btnDelete = document.createElement("button");
        const btnUpdate = document.createElement("button");

        const aUpdate=document.createElement("a");
        aUpdate.href=`./editPost.html?id=${item.id}`

        card.classList.add("cardPost");
        titulo.textContent = item.title;
        btnUpdate.dataset.id = item.id;
        btnUpdate.textContent = "Actualizar";
        btnDelete.dataset.id = item.id;
        btnDelete.textContent = "Eliminar";
        btnDelete.addEventListener("click", deleteBtn)
        aUpdate.appendChild(btnUpdate);

        card.append(titulo, aUpdate, btnDelete);
        list.appendChild(card)
          
    //     let idName='firstCardTxt'+index;
    //     document.getElementById(idName).textContent=item.title;
    });
    // console.log(listPost);
}

function deleteBtn(){
    let id= this.dataset.id;
    deleteUser(id);
}

function deleteUser(userId){
    const xhr = new XMLHttpRequest();
    const URL = `https://reto-3-77f5a-default-rtdb.firebaseio.com/${userId}/.json`;
    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseText);
        //   cleanTable();
        //   Aqui tiene que ir la funcion que actualice la lista de los posts.
      } else {
        console.log(xhr.readyState);
      }
    });
    xhr.open("DELETE", URL, true);
    xhr.send();
  };

  function getUsers(){
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
getUsers();






