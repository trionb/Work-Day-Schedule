
let currentDate = document.getElementById("currentDay");
let currentDay = moment();
//let currentHour = document.getElementsByClassName("hour")
let currentHour = moment().format("H");

let saveButton = document.getElementById("saveBtn")
let saveButton1 = document.getElementById("saveBtn1")
let saveButton2 = document.getElementById("saveBtn2")
let saveButton3 = document.getElementById("saveBtn3")
let saveButton4 = document.getElementById("saveBtn4")
let saveButton5 = document.getElementById("saveBtn5")
let saveButton6 = document.getElementById("saveBtn6")
let saveButton7 = document.getElementById("saveBtn7")
let saveButton8 = document.getElementById("saveBtn8")


saveButton.addEventListener("click", function () {
    // console.log("btnclicked")
})

saveButton1.addEventListener("click", function () {
    //console.log("btnclicked")
})
saveButton2.addEventListener("click", function () {
    //console.log("btnclicked")
})
saveButton3.addEventListener("click", function () {
    //console.log("btnclicked")
})
saveButton4.addEventListener("click", function () {
    //console.log("btnclicked")
})
saveButton5.addEventListener("click", function () {
    //console.log("btnclicked")
})
saveButton6.addEventListener("click", function () {
    //console.log("btnclicked")
})
saveButton7.addEventListener("click", function () {
    //console.log("btnclicked")
})
saveButton8.addEventListener("click", function () {
    //console.log("btnclicked")
})

// $("#saveBtn").on("click",function(){
//  console.log("saved")
// })

//console.log(currentDay.format("dddd MMMM Do YYYY"));
currentDate.innerHTML = (currentDay.format("dddd MMMM Do YYYY"));

//   moment().hour(Number);
//   moment().hour(); 


let workHours = ["9Am", "10Am", "11Am", "12Pm", "1Pm", "2Pm", "3Pm", "4Pm", "5Pm"];
for (let i = 0; i < workHours.length; i++) {
    let diff = moment([currentHour]).diff(moment([workHours[i]]));
    if (diff > 0) {

        $("#tr" + i).addClass("past");
        console.log(diff);
    } else if (diff === 0) {
        $("#row" + i).addClass("present");
        //console.log("this color is grey");
    } else if (diff < 0) {
        $("#row" + i).addClass("future");

    };

}
let workHours_serialized = JSON.stringify(workHours);
//console.log(workHours_serialized)
localStorage.setItem("myobject", workHours_serialized);
    //onsole.log(localStorage)

    let workHours_deserialized = JSON.parse(localStorage.getItem("workHours"))
    console.log(workHours_deserialized)





// use Jquery to select all of the rows 
// get current hour using moment
// create for loop of all rows 
//and isolate each hour
// do checks for past, present or future using if statements

