const endpoint = "https://jsonplaceholder.typicode.com/users";

fetch(endpoint).then(async response => {
  let data = await response.json();

  for(const user of data){
    createDiv(user);
  }

})

function createDiv(user){

  const element = document.createElement("h3");
  element.innerHTML = user.name;

  document.getElementById("users").append(element);

}
