// select the entire date picker wrapper

const date_picker_el = document.querySelector(".date-picker-wrapper");

const selected_date_el = document.querySelector(".selected-date");
const dates_el = document.querySelector(".dates-container");
const month_el = document.querySelector(".month .month-item");
const next_month_el = document.querySelector(".month .next-month");
const prev_month_el = document.querySelector(".month .prev-month");
const days_el = document.querySelector('.days-container');
const times_el = document.querySelector('.times-container');

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let timeCode = date.getTime();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

// Bookable times
let bookableTimes = [
    "09:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 noon",
    "13:00 pm",
    "14:00 pm",
    "15:00 pm",
    "16:00 pm",
    "17:00 pm",
    "18:00 pm",
    "19:00 pm",
    "20:00 pm",
    "21:00 pm",
    "22:00 pm",
    "23:00 pm",]
let eventDateTime;



function makeDate(){
    let times = [];
    for (let i = 0; i < bookableTimes.length; i++){
        const times_element = document.createElement("div");
        times_element.classList.add("time");
        times_element.textContent = bookableTimes[i];
        times.push(bookableTimes[i]);
        times_element.addEventListener("click", function(){
            times_element.classList.add("selected");
        })
    }
    times_el.appendChild(times_element);
}


month_el.textContent = months[month] + " " + year;

// format selected-date
selected_date_el.textContent = formatDate(date);

date_picker_el.addEventListener("click", function(){
    date_picker_el.onclick = toggleDatePicker;
    next_month_el.onclick = goToNextMonth;
    prev_month_el.onclick = goToPreviousMonth;
    populateDates();
})

function toggleDatePicker(e){
    if (!checkClassExist(e.path, "dates-container")){
        dates_el.classList.toggle("active");
    }   
}

function checkClassExist(path, element){
    for (let i = 0; i < path.length; i++){
        if ( path[i].classList && path[i].classList.contains(element)){
            return true;
        }
    }
    return false;
}

function populateDates(){
    // show the available dates in the month
    days_el.innerHTML = "";
    let total_days;

    if(month === 1){
        total_days = 28;
    }
    else if(
        month === 3 ||
        month === 5 ||
        month === 8 ||
        month === 10){
        total_days = 30;
    }
    else{
        total_days = 31
    }

    for(let i = 0; i < total_days; i++){
        const day_element = document.createElement("div");
        day_element.classList.add("day");
        day_element.textContent = i + 1;
           
        if(
        selectedDay == i + 1 &&
        selectedYear == year &&
        selectedMonth == month
        ){
            day_element.classList.add("selected");
            let prop = day_element;
            eventDateTime = {[prop]: bookableTimes};            
        }

        day_element.addEventListener("click", function(){
            selectedDate = new Date(year + "-" + (month+1) + "-" + (i + 1));
            selectedDay = i + 1;
            selectedMonth = month;
            selectedYear = year;

            selected_date_el.textContent = formatDate(selectedDate);
            populateDates();
        });
        days_el.appendChild(day_element);
           // make past dates unclickable.
        let availableDate = new Date(year + "-" + (month+1) + "-" + (i + 1));
        if (date.getTime() > availableDate.getTime()){
            day_element.removeEventListener("click", populateDates);
        }      
    }
}

function formatDate(selectedDate){
    // date outlook
    let day = selectedDate.getDate();
    if (day < 10){
        day = "0" + day;
    }
    let month = selectedDate.getMonth() + 1;
    if (month < 10){
        month = "0" + month;
    }
    let year = selectedDate.getFullYear();
    return day + " / " + month + " / " + year;
}


function goToNextMonth(){

// show upcoming month when arrow-next is clicked

    month++;
    if(month > 11){
        month = 0;
        year++;
    }
    month_el.textContent = months[month] + " " + year;
    populateDates();
}

function goToPreviousMonth(){
    // backdate month when arrow-prev is clicked
    month--;
    if(month < 0){
        month = 11;
        year--;
    }
    month_el.textContent = months[month] + " " + year;
    populateDates();
}
