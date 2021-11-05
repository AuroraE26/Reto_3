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



    
    let inputTitle=document.querySelector("input[name='title']");
    let inputTags=document.querySelector("input[name='tags']");
    let inputContent=document.querySelector("input[name='content']");
    let inputCover=document.querySelector("p[name='PCOVER']");
    let inputImg=document.querySelector("p[name='pIMG']");
    let inputDate=document.querySelector("input[name='trip-start']");
    //titulo.dataset.id=item.id;
    //let num="1"
    //listPost
   //document.querySelector("span[id='firstCardTxt1']").textContent=listPost[0].title;
   // uno.textContent="Hola";
//    document.getElementById('firstCardTxt'+num).textContent=listPost[0].title;

    // listPost.forEach((item,index) => {
          
    //     let idName='firstCardTxt'+index;
    //     document.getElementById(idName).textContent=item.title;
    // });
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





