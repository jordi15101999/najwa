var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 0 < 10) {
  greeting = "Good Morning ! Have a nice Day :)";
} 
else if (hourNow > 10 < 15){
  greeting = "Good Afternoon ! You can do it ! :)";
} 
else if (hourNow > 15 < 19) {
  greeting = "Good Evening ! ";
} 
else if (hourNow > 19 < 0){
  greeting = "Good Night ! Have a nice Dream :)";
} 
else {
  greeting = "Hallo Stranger!";
}

document.write('<h1>' + greeting + '</h1>');