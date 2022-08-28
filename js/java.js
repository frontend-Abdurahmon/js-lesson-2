alert("Hush kelibsiz \nIltimos ro'yhatni to'ldiring")
var firstName = prompt("ismingiz:", "").trim().toUpperCase();
var lastName = prompt("familyangiz:", "").trim().toUpperCase();
var age = parseInt(prompt("yoshingiz:" , "").trim(), 10);
var year = 2022 - age;
var month = age * 12;
var week = month * 7;
var day = week * 30;
var clock = day * 24;
var minut = clock * 60;

var yosh = 12;
var yoshingiz = prompt("Yoshingiz 18+ yoshdan yuqori bo'lsa saytimizdan foydalanishingiz mumkin");

if (yoshingiz >= yosh) {
}

else {
    ("yoshingiz saytimizdan foydalanishga kichiklik qiladi!");
}


alert(`hurmatli ${firstName}, ${lastName}, siz ${year}-yilda tugulgansiz. siz ${month}-oy ${week}-hafta ${day}-kun ${clock}-soat ${minut}-daqiqa yashadingiz. saytimizdan foydalanishingiz mumkin`);


var body = document.querySelector("body").style.backgroundColor = "red"
var box = document.createElement("div");
document.body.append(box);
var heading = document.createElement("h1");
heading.textContent = "HELLO WELCOME!"
document = box.append(heading)
var heading = document.querySelector("h1").style.color = "white", fontSize = "60px";
var heading = document.querySelector("h1").style.fontSize = "90px";
var heading = document.querySelector("h1").style.textAlign = "center";

var paragraph = document.createElement("p");
paragraph.textContent = "Xush kelibsiz";
document = box.append(paragraph)
var paragraph = document.querySelector("p").style.color = "indigo", fontSize = "90px";
var paragraph = document.querySelector("p").style.fontSize = "70px";
var tugma = document.querySelector("p").style.textAlign = "center"

var tugma = document.createElement("button");
tugma.textContent = "button";
document = box.append(tugma);
var tugma = document.querySelector("button").style.backgroundColor = "chocolate"
var tugma = document.querySelector("button").style.width = "150px"
var tugma = document.querySelector("button").style.height = "45px"
var tugma = document.querySelector("button").style.border = "none"
var tugma = document.querySelector("button").style.borderRadius = "20px"
var tugma = document.querySelector("button").style.color = "aqua"
var tugma = document.querySelector("button").style.fontSize = "25px"
var tugma = document.querySelector("button").style.display = "block"
var tugma = document.querySelector("button").style.marginLeft = "auto"
var tugma = document.querySelector("button").style.marginRight = "auto"