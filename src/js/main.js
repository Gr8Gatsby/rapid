/* TODO: add code */

function getRandomFact() {
    fetch("https://numbersapi.p.rapidapi.com/random/trivia?min=1&max=25&fragment=true&json=true", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "numbersapi.p.rapidapi.com",
            "x-rapidapi-key": "7cf9911ea0msh906fb923a0b1080p190b95jsn263f33e084a8"
        }
    }).then(response => {
        console.log(response);
    }).catch(err => {
        console.error(err);
    });
}

window.addEventListener('DOMContentLoaded', (event) =>{
    getRandomFact()
})