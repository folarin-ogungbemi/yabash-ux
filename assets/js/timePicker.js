function getTimePartsFromPickable(timePickable){
    return {
        hour: "12",
        minute: "45",
        meridiem: "pm"
    }
}

const exampleTimePickable = document.querySelector(".time-pickable");

console.log(getTimePartsFromPickable(exampleTimePickable));