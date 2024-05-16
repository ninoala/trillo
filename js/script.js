const popup = document.querySelector('.btn-popup');
const popupLinks = document.querySelectorAll('.popup-link');
popupLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        popup.style.display = 'flex'; //display the popup overlay

        //clear previous setTimeout if it exists
        clearTimeout(popup.dataset.timerId);
        
        //automatically close the popup after two seconds
        const timerId = setTimeout(() => {
            popup.style.display = 'none'; // Hide the popup overlay
        }, 2000);
        
        //store the timerId in a data attribute for reference
        popup.dataset.timerId = timerId;
    });
});

//close btn for the explanation popup
document.querySelector('.btn-popup__close-btn').addEventListener('click', () => {
    popup.style.display = 'none'; //hide the popup overlay
});

//automatically close the popup after two seconds
setTimeout(() => {
  document.querySelector('.btn-popup').style.display = 'none';
}, 3000);