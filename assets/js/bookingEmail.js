
function reserve(event) {
    let bookEvent = document.getElementById('selectEvent').value;
    let date = document.getElementById('selectDate').value;
    let time = document.getElementById('selectTime').value;
    let guest = document.getElementById('selectPeople').value;
    let confirmationText = `You have made the following reservation: \n\n *Event: ${bookEvent}\n *Date: ${date} \n *Time: ${time}\n *Number of Guest: ${guest} \n\n Confirm Reservation?`;
    let valid = confirm(confirmationText);
    if (valid == false){
        event.preventDefault();
    }
}

// function sendMail(contactForm) {
//     emailjs.send('service_4frrkbj', 'yabash GmbH', {
//         "from_name": 'Customer',
//         "from_email": 'Customer@gmail.com',
//         "message":  `Date : ${contactForm.selectDate.value}
//             Time : ${contactForm.selectTime.value}
//             Number of Guest : ${contactForm.selectPeople.value}
//             Type of Event : ${contactForm.selectEvent.value}
//             Additional Information : ${contactForm.eventInfo.value}`
//     })
//     .then(
//         function(response) {
//             alert("Thank you. Your Email has been received!", response);
//         },
//         function(error) {
//             alert("Oooops!, It appears something went Wrong.", error);
//         }
//     );
//     return false;  // To block from loading a new page
// }
