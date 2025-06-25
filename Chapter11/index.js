// ------12-13------
// QUESTION # 01;
// var input = prompt("Enter any character");
// var code = input.charCodeAt(0);
// if(code >= 48 && code <= 57){
//     alert("You entered a number");
// }else if (code >= 65 && code <= 90){
//     alert("You entered an Uppercase letter");
// }else if(code >= 97 && code <=122 ){
//     alert("You entered a lowercase letter");
// }else{
//     alert("Unknown character");
// }
// QUESTION # 02;
// let num1 = +prompt("Enter first number");
// let num2 = +prompt("Enter second number");
// if(num1 > num2){
//     alert("1st number is greater: " + num1);
// }else if(num1 < num2){
//     alert("2nd number is greater: " + num2);
// }else{
//     alert("1st and 2nd numbers are equal")
// }
// QUESTION # 03;
// let number = +prompt("Enter any number");
// if(number > 0){
//     alert("The number is positve");
// }else if(number < 0){
//     alert("The number is negative");
// }else{
//     alert("The number is 0");
// }
// QUESTION 04:
// var letter = prompt("Enter a single letter").toLocaleLowerCase();
// if (letter === "a" || letter === "e" || letter === "i" ||letter === "o" || letter === "u"){
//     alert("It's a vowel");
// }else{
//     alert("It's not a vowel");
// }
// QUESTION # 05;
// var password = prompt("Enter your password:");
// var correctPassword = "JavaScript1234";
// if(password === correctPassword){
//     alert("Correct!!!The password you entered matches the original password:");
// }else{
//     alert("Incorrect Password!!!");
// }
// QUESTION # 06:Correcting code;
// var greeting;
// var hour = +prompt("Enter hours",13);
// if(hour < 18){
//     greeting = "Good day";
//     alert("Good day");
// }else{
//     greeting = "Good evening";
//     alert("Good evening");
// }
// QUESTION # 07;
// var time = +prompt("Enter time in 24-hours format(eg: 19:00 = 7pm):");
// if(time >= 0 && time < 1200){
//     alert("Good Morning");
// }else if(time >=1200 && time < 1700){
//     alert("Good afternoon");
// }else if(time >= 1700 && time < 2100){
//     alert("Good evening");
// }else if(time >= 2100 && time < 2359){
//     alert("Good night");
// }else{
//     alert("Invalid time format");
// }

// -----end-----


// -----start 14-16-------
// ARRAY:QUESTION # 01;
// let studentNames = [];
// QUESTION # 02;
// let names = new Array();
// QUESTION # 03;
// var fruits = ["apple" , "banana" , "mango"];
// QUESTION # 04;
// var number = [1,2,4,6];
// QUESTION # 05;
// var boolean = [true,false,true,false];
// QUESTION # 06;
// var mixed = ["apple" , 9 , false];
// QUESTION # 07;
// var qualification = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil." , "PhD"];
// document.write("<h1><b>QUALIFICATION:</h1>");
// for(let i = 0; i < qualification.length; i++){
//     document.write((i + 1) + ")" + "<b>" + qualification[i] + "<br>");
// }
// QUESTION # 08;
// let nameStudents = ["Nimra","Urooj", "Sadaf"];
// let scores = [480 , 300 , 490];
// let totalMarks = 500;
// document.write("<h1><b>Student Scores:</h1>");
// for (let j = 0; j < nameStudents.length; j++){
//     let percentage = ((scores[j] / totalMarks) * 100);
//     document.write("Scores of " + nameStudents[j] + " is " + scores[j] + "<br>" + " Percentage is: " + percentage + "%<br>" );
// }
// QUESTION # 09 :part a;adding a color at the begining of an array;
// var colors = ["Red" , "Green" , "Blue"];
// document.write("<b><h3>Original Colors: </b> " + colors + "<br><br></h3>");
// let addColorStart = prompt("Enter the color to add at the begining :");
// colors.unshift(addColorStart);
// document.write("After adding at begining: " + colors + "<br><br>");
// part:b;adding color at the end;
// let addColorEnd = prompt("Enter the color to add at the end:");
// colors.push(addColorEnd);
// document.write("After adding at the end: " + colors + "<br><br>");
// part c:adding 2 more colors at the begining;
// colors.unshift("Purple" , "Yellow");
// document.write("After adding 2 more colors at the begining: " + colors + "<br><br>");
// part d:deleting 1st color;
// colors.shift();
// document.write("After deleting 1st color from the begining: " + colors + "<br><br>");
// part e :deleting last color;
// colors.pop();
// document.write("After deleting the last color: " + colors + "<br><br>");
// part f:adding color at specific index;
// let colorIndex = +prompt("At which index u want to add color?");
// let colorName = prompt("Which color do you want to add?");
// colors.splice(colorIndex,0,colorName);
// document.write("After adding color at index " + colorIndex + ":" + colors + "<br><br>");
// part g:deleting colors from user define index;
// let delIndex = +prompt("Enter index to start deleting colors:");
// let noOfcolors = +prompt("How many colors to delete?");
// colors.splice(delIndex,noOfcolors);
// document.write("After deleting colors from index " + delIndex + ":" + colors + "<br><br>");
// QUESTION # 10;
// let scoreStudent = [320, 230, 480, 120];
// scoresStudent.sort()
// document.write("<h4>Scores of students: " + scoreStudent + "</h4><br><br>");
// document.write("<b>Ordered score of students:<b> 120, 230, 320, 480" + "<br>");
// QUESTION # 11;
// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// let selectedCities = cities.slice(2,5);
// document.write("Cities list: " + cities + "<br>");
// document.write("Selected cities:" + selectedCities + "<br>");
// QUESTION # 12;
// var arr = ["This", "is" , "my" , "cat"];
// document.write("<h1>Array:" + arr + "</h1><br>");
// var singleString = arr.join(" ");
// document.write("<h1>String:" + singleString + "</h1><br>");
// QUESTION # 13: FIFO (FIRST IN FIRST OUT);
// var devices = [];
// devices.push("Keyboard");
// devices.push("Mouse");
// devices.push("Printer");
// devices.push("Monitor");
// document.write("<b>Devices: </b>" + devices + "<br><br>");
// document.write("BY FIFO Method :" + "<br>");
// document.write("<b><h2>Out:</b><br></h2>" + devices.shift() + "<br>");
// document.write("<b><h2>Out:</b><br></h2>" + devices.shift() + "<br>");
// document.write("<b><h2>Out:</b><br></h2>" + devices.shift() + "<br>");
// document.write("<b><h2>Out:</b><br></h2>" + devices.shift() + "<br>");
// QUESTION # 14: LIFO (LAST IN FIRST OUT);
// var devices = [];
// devices.push("Keyboard");
// devices.push("Mouse");
// devices.push("Printer");
// devices.push("Monitor");
// document.write("<b>Devices: </b>" + devices + "<br><br>");
// document.write("BY LIFO Method :" + "<br>");
// document.write("<b><h2>Out:</b><br></h2>" + devices.pop() + "<br>");
// document.write("<b><h2>Out:</b><br></h2>" + devices.pop() + "<br>");
// document.write("<b><h2>Out:</b><br></h2>" + devices.pop() + "<br>");
// document.write("<b><h2>Out:</b><br></h2>" + devices.pop() + "<br><br>");
// QUESTION # 15;
// let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for (let k = 0; k < manufacturers.length; k++){
//     document.write("<option>" + manufacturers[k] + "</option>");
// }
//     document.write("</select>");

// ------end------





