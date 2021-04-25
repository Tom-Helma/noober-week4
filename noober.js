window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code

  //create a variable "rideData" to hold the ride array

  let rideData = json

  //create a for loop to cycle through the ride data
  for (i = 0; i < rideData.length; i++){

    //create variables to hold the data (passenger details, pickup location, drop off location, number of passengers, noober purple) of the current ride of the loop (index i)
    let passDetails = rideData[i].passengerDetails
    let pickupLocation = rideData[i].pickupLocation
    let dropoffLocation = rideData[i].dropoffLocation
    let numPass = rideData[i].numberOfPassengers
    let wantsPurple = rideData[i].purpleRequested

    // create an element for the HTML data that will be appended
    let rideElement = document.querySelector(`.rides`)

    //checks to see if a noober purple is selected
    if (wantsPurple == true)
    {
      //appends the HTML with the ride data
      rideElement.insertAdjacentHTML(`beforeend`,`
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>Noober Purple</span>
        </h1>

        <div class="border-4 border-gray-500 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${passDetails.first} ${passDetails.last}</h2>
              <p class="font-bold text-gray-600">${passDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
                ${numPass} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${pickupLocation.address}</p>
              <p>${pickupLocation.city}, ${pickupLocation.state} ${pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${dropoffLocation.address}</p>
              <p>${dropoffLocation.city}, ${dropoffLocation.state} ${dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
        
      `)
    }

    //checks to see if a noober XL is required
    else if(numPass > 3){
      //appends HTML with the ride data
      rideElement.insertAdjacentHTML(`beforeend`,`
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>Noober XL</span>
        </h1>

        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${passDetails.first} ${passDetails.last}</h2>
              <p class="font-bold text-gray-600">${passDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
                ${numPass} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${pickupLocation.address}</p>
              <p>${pickupLocation.city}, ${pickupLocation.state} ${pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${dropoffLocation.address}</p>
              <p>${dropoffLocation.city}, ${dropoffLocation.state} ${dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
        
      `)

    }

    //selects noober x
    else{

      //appends HTML with the ride data
      rideElement.insertAdjacentHTML(`beforeend`,`
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>Noober X</span>
        </h1>

        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${passDetails.first} ${passDetails.last}</h2>
              <p class="font-bold text-gray-600">${passDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
                ${numPass} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${pickupLocation.address}</p>
              <p>${pickupLocation.city}, ${pickupLocation.state} ${pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${dropoffLocation.address}</p>
              <p>${dropoffLocation.city}, ${dropoffLocation.state} ${dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      
    `)

    }

  }
  
})