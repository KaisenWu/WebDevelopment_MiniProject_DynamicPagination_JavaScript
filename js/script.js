// Declare a variable to store all contact info.
const originalContactInfo = document.querySelectorAll("li");

// Store the number of contact, number of contacts on each page and number of pages.
const contactNum = originalContactInfo.length;
const contactEachPageNum = 10;
const pageNum = Math.floor(originalContactInfo.length/contactEachPageNum + 1);
// Call the function to replace the original page to the first one.
loadFirstPageContact(originalContactInfo);

// Store the content of all buttons.
const btns = document.querySelectorAll("button");

// Define a function to extract the contacts of the first page.
function loadFirstPageContact(originalContactInfo) {
    var firstPageContactHTML = '';
    for(var i=0;i<contactEachPageNum;i++) {
        firstPageContactHTML += `<li class="contact-item cf">${originalContactInfo[i].innerHTML}</li>`;
    }
    document.querySelector("ul").innerHTML = firstPageContactHTML;
    generatePagination();
}

// Define a funtion to generate pagination.
function generatePagination() {
    var paginationHTML = "";
    for(var i=1;i<=pageNum;i++) {
        paginationHTML += `<button id="${i}">${i}</button>`;
    }
    document.querySelector(".pagination").innerHTML = paginationHTML;
}

//Define a function when clicking a button.
function buttonPressed(event) {
    var currentPageNum = event.target.id;
    var currentPageContactHTML = "";
    for(var i=(currentPageNum-1)*contactEachPageNum;
        i<(currentPageNum-1)*contactEachPageNum+contactEachPageNum;i++) {
            if(i>=contactNum) {
                break;
            }
        currentPageContactHTML += `<li class="contact-item cf">${originalContactInfo[i].innerHTML}</li>`;
    }
    document.querySelector("ul").innerHTML = currentPageContactHTML;
}

// Add the the event function to each button.
for (let btn of btns) {
    btn.addEventListener("click", buttonPressed);
}