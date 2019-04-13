function handleClicks(){
console.log("handleclicks function ran")
    $("form").submit(function (event){
        event.preventDefault();
        let b = $(".breed").val();
        console.log(b);
        getBreed(b);
    });
}

function getBreed(b){
    console.log(`getBreed function ran; searching for breed ${b}`);

        fetch(`https://dog.ceo/api/breed/${b}/images`)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then(response => response.json())
        .then(responseJson => showDog(responseJson))
        .catch(error => alert("Try again! Maybe the breed doesn't exist; check your spelling!"));   
}

function showDog(responseJson){
    console.log("function showDog ran");
    console.log(responseJson);
    length = responseJson.message.length;
    console.log(length);
    let r = Math.floor(Math.random() * (length+1));      // returns a random integer from 0 to length
    console.log(r);
    let display = `<img src=${responseJson.message[r]}>`
    $(".container").html(display);
}

$(handleClicks(console.log("form loaded")));