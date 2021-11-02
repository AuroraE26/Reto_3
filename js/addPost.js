
function addPost(){
    let inputTitle=document.querySelector("input[name='title']");
    let inputTags=document.querySelector("input[name='tags']");
    let inputContent=document.querySelector("input[name='content']");
    let inputImg=document.querySelector("input[name='image']");
    let inputDate=document.querySelector("input[name='trip-start']");
    
    let title=inputTitle.value;
    let tags=inputTags.value;
    let content=inputContent.value;
    let image=inputImg.value;
    let date=inputDate.value;

    objData={
        title:"",
        tags:["",""],
        content:"",
        image:"",
        date:"",
        reactions:{
            likes:0,
            unicorn:0,
            save:0,
        },
    }

    const xhr=new XMLHttpRequest();
    const URL=`https://reto-3-77f5a-default-rtdb.firebaseio.com/.json`;
    xhr.open("POST",URL,true);
    xhr.send(JSON.stringify({title,tags,content,image, date}))
}

const btnAdd=document.querySelector("#btnAddPost");
btnAdd.addEventListener("click", addPost);