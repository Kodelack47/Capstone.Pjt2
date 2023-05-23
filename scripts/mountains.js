mountainsArray.forEach(mountain => {
    console.log(mountain.name)
    let mo = document.createElement("option")
    mo.value = mountain.name
    mo.innerHTML = mountain.name
    mountains.appendChild(mo)
    });

function displayMountain(mo){ //come back here
    //  <p>${mount.name}</p>
    // <p>${mount.location}</p>
    // <p>${mount.description}</p>
    return`
    <img src="images/${mo.img}">
    <p>Description:<br>
    ${mo.desc}</p>
    <h2> elevation: ${mo.elevation} </h2>
    `;
}

function onClickMountain(){
    let name = mountains.selectedOptions[0].value
    mountainsArray.forEach(mountain => {
        if(mountain.name === name){
            // let mountain = mountainsArray.find(m => m.name === name)
            mountain_details.innerHTML = displayMountain(mountain)
        }
    });
}
mountains.addEventListener("change", onClickMountain)