const testimonials = [
    {
        name: "Cherise G",
        photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "When You Have The Money You Have The Power So Don't Waste Your Time And Don't Sit like Losers And Start Earning It :)"
    },
    {
        name: "Fed Rech",
        photoUrl: "https://images.unsplash.com/photo-1610394068204-33349fe939e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Money Is EveryThing Start Focusing On It :)"
    },
    {
        name: "Mad Rey",
        photoUrl: "https://images.unsplash.com/photo-1523307730650-594bc63f9d67?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "In This Fake World Only Money Can Help You So Why Not It :)"
    },
    {
        name: "Mad Reina",
        photoUrl: "https://images.unsplash.com/photo-1732893288493-068c3f9f0b71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text: "This Is The World In Which Only Money Matters :)"
    },
];

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")


let idx = 0;
updateTestimonail()

function updateTestimonail() {
    const {name, photoUrl, text} =  
    testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;

    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonail()
    },6000)
}