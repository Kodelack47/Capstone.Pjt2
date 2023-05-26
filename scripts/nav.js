const navMenu=[
    {
        name:"Home",
        link:"index.html"
    },
    {
        name: "Mountains",
        link: "mountain.html"
    },

{
    name: "National Park",
    link: "nationalPark.html"
},
{
    name:"Bookings",
    link:"bookings.html"
},
{
    name: "About Us",
    link: "about.html"
},

]


function navLink(item){
    const link = document.createElement("a")
    link.innerHTML = item.name
    link.href = item.link
    return link
}

document.addEventListener("DOMContentLoaded", ()=>{

    const nav = document.getElementById("nav")
    navMenu.forEach( (item) => nav.appendChild(navLink(item)));
})