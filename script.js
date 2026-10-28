let now = new Date();
let d = now.getDay();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[d];
document.getElementById("warmUpDate").innerHTML = day;
let m = now.getMonth()+1;
let dom = now.getDate();
let y = now.getFullYear();
document.getElementById("myDate").innerHTML = m+"/"+dom+"/"+y;
let start = now.getTime();
let timerID = setInterval(function(){
    let cur = new Date().getTime();
    document.getElementById("myTimer").innerHTML = (cur-start)/1000;
}, 10);
// ============================================
//  PART 3: Start/Stop Toggle Button
// ============================================
// The button starts as "Stop" (timer is running).
// Clicking it should:
//   - If timer is running: stop it (clearInterval) and
//     change button text to "Start"
//   - If timer is stopped: restart it from 0 and change
//     button text to "Stop"

// STEP 13: Create a variable to track whether the timer is
//          currently running (let running = true;)
let running = true;
document.getElementById("myBtn").addEventListener(function(){
    if(running){
        clearInterval(timerID);
        running=false;
    }
    else{
        start = new Date().getTime();
        timerID = setInterval(function(){
            let cur = new Date().getTime();
            document.getElementById("myTimer").innerHTML = (cur-start)/1000;
        }, 10);
        document.getElementById("myBtn").innerHTML = "Stop";
        running=true;
    }
});

// STEP 14: Add a click event listener to the button (ID "myBtn").
//          Inside the listener:
//          a) If running is true:
//             - Use clearInterval() to stop the timer
//             - Change button innerHTML to "Start"
//             - Set running to false
//          b) If running is false:
//             - Record a new start time
//             - Start a new setInterval (same as STEP 12)
//             - Change button innerHTML to "Stop"
//             - Set running to true
