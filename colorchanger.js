const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const textColor = document.querySelectorAll('.text1')
console.log(textColor);

 
// Without The Tect Color

// buttons.forEach(function (button) {
//     console.log(button);
//    button.addEventListener('click' , function(e){
//     console.log(e);
//     console.log(e.target);
//     if(e.target.id === 'grey'){
//         body.style.backgroundColor = e.target.id
//     }if(e.target.id === 'white'){
//         body.style.backgroundColor = e.target.id
//     }if(e.target.id === 'blue'){
//         body.style.backgroundColor = e.target.id
//     }if(e.target.id === 'yellow'){
//         body.style.backgroundColor = e.target.id
//     }
//    })
// });

// textColor.forEach(function (textchange){
//     textchange.addEventListener('click' ,function(s){
//         if(s.target.id === 'grey'){
//             s.target.style.backgroundColor = "green"
//         }
//     })
// })



// Without The Tect Color

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey') {
            // Change the background color of the body to grey
            body.style.backgroundColor = e.target.id;
            
            // Change the text color to green
            textColor.forEach(function (textchange) {
                textchange.style.color = 'green';
            });
        }
        if(e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
            textColor.forEach(function (textchange) {
                textchange.style.color = 'red';
            });
        }
        if(e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;

            textColor.forEach(function (textchange) {
                textchange.style.color = 'yellow';
            });
        }
        if(e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
            textColor.forEach(function (textchange) {
                textchange.style.color = 'blue';
            });
        }
        if(e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
            textColor.forEach(function (textchange) {
                textchange.style.color = 'green';
            });
        }
    });
});
