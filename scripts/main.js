// first i create a new xmthttp-request object

let http = new XMLHttpRequest();

// next i prepare the request with the open() method
http.open('get', 'workouts.json', true);
// the first argument sets the http method
// in the second argument we pass the file where our data lives
// and last the keyword true, sets the request to be async

// sending the request
http.send();

// i have to catch the response
// i will check the onload eventlistener
http.onload = function(){
    // inside the function i need to check the readystate and status properties
    if(this.readyState == 4 && this.status == 200){
        // if we have a successful response, i have to parse the json data
        // and convert them to a javascript array
        let exercise = JSON.parse(this.responseText);

        // next i need an empty variable to add the incoming data
        let output = "";

        // now i have to loop through the products, and in every iteration
        // i add an html template to the output variable
        for(let item of exercise){
            output += `
            <div class="exercise">
                 <div id="staff">
                    <img src="${item.image}" alt="${item.image}">
                    <p class="name">${item.name}</p>
                    <p class="description">${item.description}</p>
                </div>
            </div>
            `;
        }
        // and last i target the products container and add the data that the output variables holds

        document.querySelector(".exercise").innerHTML = output;
    }
}