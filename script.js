
 
var userName = "walaa";
var hXh = "swimming";
var hop ="hiking";
var userName = prompt("Whats your name ?");
alert("welcome to our websit " + userName )


var favhoppy = prompt("What is your fav hoppy ?");

if(favhoppy === hXh ){

  document.write("<p> Welcome to the club </p>")
}else if(favhoppy === "hiking"){
  document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSUd-zT5MIO4DM0QvP-CwXrQSw0p0ZmKWHdA&usqp=CAU"/>')
}else{
  alert('please next time answer either swimming or hiking ')
}






