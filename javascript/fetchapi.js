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

function getUser(){
    const ipAddress = form.querySelector('input[type="text"]').value
    // fetch(`https://geo.ipify.org/api/v2/country,city?apiKey={"Put your API Key here"}=${value}`)
    .then(function(res){
        console.log(res.json())
    })
    .then(function(data){
        console.log(data)
    })
}