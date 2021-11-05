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

function getUserById(userId){
    const xhr = new XMLHttpRequest();
    const URL = `https://js-14va-default-rtdb.firebaseio.com/odonml/${userId}/.json`;
    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          printInput(response, userId);
      } else {
        console.log(xhr.readyState);
      }
    });
    xhr.open("GET", URL, true);
    xhr.send();
  };

  function updateUser(userId, data){
    const xhr = new XMLHttpRequest();
    const URL = `https://js-14va-default-rtdb.firebaseio.com/odonml/${userId}/.json`;
    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.status);
          cleanTable();
            getUsers();
      } else {
        console.log(xhr.readyState);
      }
    });
    xhr.open("PUT", URL, true);
    xhr.send(JSON.stringify(data));
  };

const btnSave = document.querySelector("#btn-save");
btnSave.addEventListener("click", addPerson)


getUsers();