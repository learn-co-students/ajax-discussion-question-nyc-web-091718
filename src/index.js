const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  let randomUser = []

  const button = document.querySelector('div.col button')
  console.log(button)
  const userContainer = document.querySelector('.container')
  console.log(userContainer)

  button.addEventListener('click', function() {
    const url = 'https://randomuser.me/api/';
    fetch(url, {
      method: 'GET'
    }).then(function(responseObj) {
      return responseObj.json()
    }).then(function(parsedJSON) {
      let randomUser = parsedJSON.results
      // randomUser = JSON.stringify(randomUserObj)
      console.dir(randomUser)
      console.log(randomUser.gender)
      // appendUserToDom(randomUser)
      userContainer.innerHTML = appendUserToDom(randomUser)
    })
  })

const appendUserToDom = (obj) => {
console.log(obj)
// debugger
  return obj.map((user) => {
    return `
    <div class="row align-items-start">

    <div class="col">

    <img src="Profile Picture Url" alt="" id="profile_picture"/>

    </div>

    <div class="col">

    <label for="fullname">
    Name:
    </label>
    <h3 id="fullname">${user.name.title} ${user.name.first} ${user.name.last}</h3>

    </div>

    <div class="col">

    <label for="email">
    Email:
    </label>
    <h4 id="email">${user.email}</h4>

    </div>
    </div>

    <div class="row align-items-center">
    <div class="col">

    <label for="street">Street:</label>
    <h4 id="street">${user.location.street}</h4>

    <label for="city">City:</label>
    <h4 id="city">${user.location.city}</h4>

    <label for="state">State:</label>
    <h4 id="state">${user.location.state}</h4>

    <label for="postcode">Post Code:</label>
    <h4 id="postcode">${user.location.postcode}</h4>

    </div>

    <div class="col">

    <label for="phone">Phone:</label>
    <h4 id="phone">${user.phone}</h4>

    <label for="cell">Cell:</label>
    <h4 id="cell">${user.cell}</h4>

    </div>

    <div class="col">

    <label for="date_of_birth">Date of Birth:</label>
    <h4 id="date_of_birth">${user.dob.date}</h4>

    </div>
    </div>
    `
  }).join('')
}




}); // end of DOMContentLoaded
