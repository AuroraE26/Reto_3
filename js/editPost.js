const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// console.log(urlParams.get('id'))

function getPostById(id){
    const xhr = new XMLHttpRequest();
    const URL = `https://reto-3-77f5a-default-rtdb.firebaseio.com/${id}/.json`;
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            printDataInput(response)
            //   printInput(response, userId);
            //aqui va funcion print Datos
        } else {
            console.log(xhr.readyState);
        }
    });
    xhr.open("GET", URL, true);
    xhr.send();
};

function getDatos(){
    let id = urlParams.get('id')
    getPostById(id)

}
getDatos()

function printDataInput(response){
    const inputTitle = document.querySelector("#title");
    inputTitle.value = response.title;
    const inputTags = document.querySelector("#addTags")
    inputTags.value = response.addTags;
    const inputImg = document.querySelector("#pIMG")
    inputImg.value = response.pIMG;
    const inputContent = document.querySelector("#content")
    inputContent.value = response.content;
    const inputDate = document.querySelector("#start")
    inputDate.value = response.start;

}






// function getUserById()

//   function updateUser(userId, data){
//     const xhr = new XMLHttpRequest();
//     const URL = `https://js-14va-default-rtdb.firebaseio.com/odonml/${userId}/.json`;
//     xhr.addEventListener("readystatechange", () => {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//           console.log(xhr.status);
//           cleanTable();
//             getUsers();
//       } else {
//         console.log(xhr.readyState);
//       }
//     });
//     xhr.open("PUT", URL, true);
//     xhr.send(JSON.stringify(data));
//   };

// const btnSave = document.querySelector("#btn-save");
// btnSave.addEventListener("click", addPerson)


// getUsers();
