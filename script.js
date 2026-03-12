const destinations = {

north: [

{
name:"Ladakh",
img:"images/ladakh.jpg",
desc:"Famous for Pangong Lake and Himalayan landscapes.",
bestTime:"May to September",
food:"Thukpa, Momos",
hotels:"Grand Dragon Ladakh, Zostel Ladakh",
cost:"₹15,000 - ₹25,000",
plan:"Day1 Leh city, Day2 Pangong Lake, Day3 Nubra Valley"
},

{
name:"Rajasthan",
img:"images/rajasthan.jpg",
desc:"Known for royal forts and desert culture.",
bestTime:"October to March",
food:"Dal Baati Churma",
hotels:"Umaid Bhawan Palace, Pearl Palace Hotel",
cost:"₹10,000 - ₹18,000",
plan:"Jaipur forts, Udaipur lakes, Jaisalmer desert safari"
},

{
name:"Himachal Pradesh",
img:"images/himachal.jpg",
desc:"Hill stations like Manali and Shimla.",
bestTime:"March to June",
food:"Siddu, Chana Madra",
hotels:"Snow Valley Resort",
cost:"₹12,000 - ₹20,000",
plan:"Shimla sightseeing, Manali adventure"
},

{
name:"Jammu & Kashmir",
img:"images/kashmir.jpg",
desc:"Called Paradise on Earth with Dal Lake.",
bestTime:"April to October",
food:"Rogan Josh, Kahwa",
hotels:"The Lalit Grand Palace",
cost:"₹15,000 - ₹25,000",
plan:"Srinagar houseboat, Gulmarg snow"
},

{
name:"Delhi",
img:"images/delhi.jpg",
desc:"Capital city with historical monuments.",
bestTime:"October to March",
food:"Chole Bhature",
hotels:"Taj Palace, The Leela",
cost:"₹8,000 - ₹12,000",
plan:"Red Fort, India Gate, Qutub Minar"
}

],

south:[

{
name:"Kerala",
img:"images/kerala.jpg",
desc:"God’s Own Country famous for backwaters.",
bestTime:"September to March",
food:"Appam, Kerala Fish Curry",
hotels:"Kumarakom Lake Resort",
cost:"₹12,000 - ₹20,000",
plan:"Kochi, Alleppey houseboat, Munnar hills"
},

{
name:"Karnataka",
img:"images/karnataka.jpg",
desc:"Includes Bangalore and Mysore Palace.",
bestTime:"October to February",
food:"Bisi Bele Bath",
hotels:"Radisson Blu Bangalore",
cost:"₹10,000 - ₹15,000",
plan:"Bangalore city, Mysore Palace"
},

{
name:"Tamil Nadu",
img:"images/tamilnadu.jpg",
desc:"Famous for temples and beaches.",
bestTime:"November to February",
food:"Dosa, Chettinad Chicken",
hotels:"ITC Grand Chola",
cost:"₹9,000 - ₹14,000",
plan:"Chennai beach, Madurai temple"
},

{
name:"Andhra Pradesh",
img:"images/andhra.jpg",
desc:"Known for Tirupati temple.",
bestTime:"October to February",
food:"Pulihora, Gongura Pachadi",
hotels:"Fortune Select Tirupati",
cost:"₹8,000 - ₹13,000",
plan:"Tirupati temple visit"
},

{
name:"Telangana",
img:"images/telangana.jpg",
desc:"Hyderabad city and Charminar.",
bestTime:"October to March",
food:"Hyderabadi Biryani",
hotels:"Taj Falaknuma Palace",
cost:"₹8,000 - ₹12,000",
plan:"Charminar, Golconda Fort"
}

],

west:[

{
name:"Goa",
img:"images/goa.jpg",
desc:"India’s most famous beach destination.",
bestTime:"November to February",
food:"Goan Fish Curry",
hotels:"Taj Exotica Goa",
cost:"₹10,000 - ₹18,000",
plan:"North Goa beaches, water sports"
},

{
name:"Gujarat",
img:"images/gujarat.jpg",
desc:"Home of Statue of Unity.",
bestTime:"October to February",
food:"Dhokla, Thepla",
hotels:"Tent City Narmada",
cost:"₹9,000 - ₹14,000",
plan:"Statue of Unity tour"
},

{
name:"Maharashtra",
img:"images/maharashtra.jpg",
desc:"Mumbai city and Ajanta Ellora caves.",
bestTime:"October to March",
food:"Vada Pav",
hotels:"Taj Mahal Palace Mumbai",
cost:"₹10,000 - ₹16,000",
plan:"Gateway of India, Marine Drive"
}

],

east:[

{
name:"Sikkim",
img:"images/sikkim.jpg",
desc:"Beautiful Himalayan mountains.",
bestTime:"March to June",
food:"Momos",
hotels:"Mayfair Spa Resort",
cost:"₹14,000 - ₹22,000",
plan:"Gangtok, Tsomgo Lake"
},

{
name:"Assam",
img:"images/assam.jpg",
desc:"Tea gardens and Kaziranga Park.",
bestTime:"October to April",
food:"Fish Tenga",
hotels:"Brahmaputra Jungle Resort",
cost:"₹10,000 - ₹16,000",
plan:"Kaziranga safari"
},

{
name:"Meghalaya",
img:"images/meghalaya.jpg",
desc:"Living root bridges and waterfalls.",
bestTime:"October to April",
food:"Jadoh rice dish",
hotels:"Ri Kynjai Resort",
cost:"₹12,000 - ₹18,000",
plan:"Shillong, Cherrapunji"
}

],

central:[

{
name:"Bhopal",
img:"images/bhopal.jpg",
desc:"City of lakes and historic sites.",
bestTime:"October to February",
food:"Bhopali Pulao",
hotels:"Jehan Numa Palace",
cost:"₹7,000 - ₹12,000",
plan:"Upper Lake, Sanchi Stupa"
},

{
name:"Khajuraho",
img:"images/khajuraho.jpg",
desc:"UNESCO temples famous for sculptures.",
bestTime:"October to March",
food:"Poha",
hotels:"Ramada Khajuraho",
cost:"₹8,000 - ₹14,000",
plan:"Western temple group tour"
},

{
name:"Kanha National Park",
img:"images/kanha.jpg",
desc:"Famous tiger reserve.",
bestTime:"October to June",
food:"Local tribal cuisine",
hotels:"Kanha Jungle Lodge",
cost:"₹10,000 - ₹16,000",
plan:"Jungle safari"
}

]

};



function showRegion(region){

let container=document.getElementById("destinationContainer");

container.innerHTML="";

destinations[region].forEach(place=>{

container.innerHTML+=`

<div class="col-md-4">

<div class="card">

<img src="${place.img}" class="card-img-top">

<div class="card-body">

<h5>${place.name}</h5>

<p>${place.desc}</p>

<p><b>Best Time:</b> ${place.bestTime}</p>

<p><b>Famous Food:</b> ${place.food}</p>

<p><b>Nearby Hotels:</b> ${place.hotels}</p>

<p><b>Estimated Cost:</b> ${place.cost}</p>

<p><b>Travel Plan:</b> ${place.plan}</p>

</div>

</div>

</div>

`;

});

}
