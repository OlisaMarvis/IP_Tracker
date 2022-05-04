# The challenge
# Frontend Mentor - IP address tracker solution
This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). 

## Overview
In this project. I tried to consolidate on various things I have learnt so far. Like consuming an API, responsiveness of my web pages, using fetch and Ajax to get values from my API etc.

## My process
-I designed and built the UI using Semantic HTML5 and CSS. And ensured that the page is mobile responsive.
- Did my research on the API docuentation of [IP Geolocation API by IPify](https://geo.ipify.org/) and [LeafletJS](https://leafletjs.com/) so that I'll undestand how I can consume their endpoints fetch the data I need to update in my UI.
- Broke down the different function of the project and wrote the javascript functions for each.
- Wrote the program in Javascript 
- After a lot of more research and debugging, I was done.
- Wrote comments to describe variuos aspects of my Javascript codes for easy understanding when I return to it in te future.

## built-with
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

## What I learned

Building this project consolidated my knowledge of 
1. DOM manipulation 
2. Javascript functions
3. AJAX and fetch API
4. Responsive web pages

# Really proud of this code
```
```js
fetch('https://api.ipify.org/?format=json')
    .then(response => response.json())
    .then(data =>{
        let value = data.ip
}
```
### Continued development
  I will build more projects like this to further perfect my skills using these tools.
Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources
If you decide to use another API, like Google Maps or Mapbox, be sure to secure your API Key. Here are guides for both Google Maps and Mapbox that would help.
- [API Key best practices from Google Developers](https://developers.google.com/maps/api-key-best-practices)
- [How to use Mapbox securely](https://docs.mapbox.com/help/troubleshooting/how-to-use-mapbox-securely/)

## Author
Okpala Olisaemeka

### Acknowledgments
My acknowledgement to frontend mentor for providing the challenge and my team-mates for their encouragement and support.

## Important
Use only the javascript file at easyhttp.js as the fetchapi.js is still a work in progress