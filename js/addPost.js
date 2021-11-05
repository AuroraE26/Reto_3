objData={
    title:"",
    cover:"",
    tags:["",""],
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


document.getElementById('btnCover').onclick = function addCover(){
    let promptCover=prompt("Add a cover image"); 
    document.getElementById("pCover").value= promptCover;
}

document.getElementById('btnImg').onclick = function addImg(){
    let promptIMG=prompt("Add an image"); 
    document.getElementById("pIMG").value= promptIMG;
}

function setHour(objData){
    let getTime = new Date();
    let hora = getTime.getHours() + ':' + getTime.getMinutes() + ':' + getTime.getSeconds();
    objData.hour=hora;
}


document.getElementById('btn3').onclick = function fillObj(objData){
    let inputTitle=document.querySelector("input[name='title']");
    let inputTags=document.querySelector("input[name='tags']");
    let inputContent=document.querySelector("input[name='content']");
    let inputCover=document.querySelector("p[name='PCOVER']");
    let inputImg=document.querySelector("p[name='pIMG']");
    let inputDate=document.querySelector("input[name='trip-start']");

    tags=inputTags.value.split(",");
    let finalTags=[];
    tags.forEach(element => {
        tagsHT="#"+element;
        finalTags.push(tagsHT);
    });
    

    objData.title=inputTitle.value;
    objData.content=inputContent.value; 
    objData.cover=inputCover.value;
    objData.image=inputImg.value;
    objData.date=inputDate.value;
    objData.tags=finalTags;
    
    setHour(objData);

    const xhr=new XMLHttpRequest();
    const URL=`https://reto-3-77f5a-default-rtdb.firebaseio.com/.json`;
    xhr.open("POST",URL,true);
    xhr.send(JSON.stringify({id:(objData.id),title:(objData.title), content:(objData.content), cover:(objData.cover), tags:(objData.tags),
    image:(objData.image), date:(objData.date), hour:(objData.hour), reactions:{likes:0, unicorn:0, save:0}}));
    console.log("SEND");
    console.log(objData)
    
}

