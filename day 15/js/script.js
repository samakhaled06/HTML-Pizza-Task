"use strict";
let input=document.querySelector("#input");
let button=document.querySelector("#button");
let Container=document.querySelector("#Container");
let API="https://forkify-api.jonas.io/api/v2/recipes";

async function search(search) {
    let response=await fetch(`${API}?search=${search}`);
    let data= await response.json();
    displayrecipes(data.data.recipes);
}
function displayrecipes(recipes){
    Container.innerHTML="";
    for(let recipe of recipes){
        let {title,publisher,image_url}=recipe;
        Container.innerHTML+=`<div class="card">
        <img src="${image_url}" alt="${title}">
            <h3>${title}</h3>
            <p>${publisher}</p>
            </div>`;
    }
}
button.addEventListener("click",function(){
    let value=input.value;
    if(value===""){
        alert("please enter a value");
        return;
    }
    search(value);
});