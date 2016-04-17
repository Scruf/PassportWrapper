var title = "Avengers Age of Ultron";
var temp=" ";
title.split(" ").filter(function (el) {
    temp+=el+"+";
});
console.log(temp.substring(1,temp.length-1));