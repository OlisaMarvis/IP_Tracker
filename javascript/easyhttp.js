//Declare DOM Elements
const address = document.querySelector('.ip-add')
const position = document.querySelector('.country')
const postCode = document.querySelector('.postcode')
const timeZone = document.querySelector('.timeZone')
const network = document.querySelector('.network')

//Create event listeners for DOM Manipulation
const finalLoad = form.addEventListener('submit', getUser)
let initLoad = document.addEventListener('DOMContentLoaded', getIP)

//Globally declare map setView and set longitude and latitude at [0, 0]
const map = L.map('map').setView([0, 0], 13);

//Function for the page onload
//Using fetch API, fetch ip owner ip address, parse it and store in value
//Pass the ip value into the open request to fetch the geolocation data and use JSON.parse to parse it
function getIP(){
    fetch('https://api.ipify.org/?format=json')
    .then(response => response.json())
    .then(data => getUser(data))
}

//Function for INPUT IP Address (repeat same operations as above)
function getUser(e){
    const ipAddress = form.querySelector('input[type="text"]').value
    const xhr = new XMLHttpRequest()

    // xhr.open('GET', `https://geo.ipify.org/api/v2/country,city?apiKey={Put your API Key here}=${ipAddress}`, true)

    xhr.onload = function(){
        if(this.status = 200){
            const data = JSON.parse(this.responseText)
            
            address.innerHTML = data.ip
            position.innerHTML = data.location.region
            postCode.innerHTML = data.location.postalCode
            timeZone.innerHTML = data.location.timezone
            network.innerHTML = data.isp


            const latitude = data.location.lat
            const longitude = data.location.lng


            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([latitude, longitude]).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();
                    
                form.querySelector('input[type="text"]').value = ""

        } 
    }
    xhr.send()
    e.preventDefault()
}




