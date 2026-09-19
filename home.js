document.addEventListener("DOMContentLoaded", function() {
   const seeAllBtn = document.getElementById('see-all-btn');
if (seeAllBtn) {
    seeAllBtn.addEventListener('click', function(event) {
        window.location.href = 'see-all.html';
    });
}
    
    if (seeAllBtn) {
        seeAllBtn.addEventListener('click', function(event) {
            event.preventDefault();
            
            var moreDestinations = document.getElementById('more-destinations');
            if (moreDestinations) {
                if (moreDestinations.style.display === "none" || moreDestinations.style.display === "") {
                    moreDestinations.style.display = "grid";
                    this.innerText = "See Less";
                } else {
                    moreDestinations.style.display = "none";
                    this.innerText = "See All";
                }
            }
        });
    }
});



window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});



function toggleMenu() {
     document.getElementById("navLinks").classList.toggle("active");
      }

     function showTab(evt, tabId) {
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
        evt.currentTarget.classList.add('active');
    }







// Complexity is 3 Everything is cool!
function showTab(evt, tabId) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    // यहाँ आपकी पुरानी गलती (1 की जगह 'l') को ठीक कर दिया गया है
    document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// Complexity is 6 It's time to do something...

// Complexity is 3 Everything is cool!
function showTab(evt, tabId) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    // यहाँ आपकी पुरानी गलती (1 की जगह 'l') को ठीक कर दिया गया है
    document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');
}


// पेज को रीफ्रेश होने से रोकें
const flightForm = document.getElementById('flightSearchForm');
    if (flightForm) 
                 
        flightForm.addEventListener('submit', function(event) {
                  event.preventDefault();

                 // सही ID से वैल्यू प्राप्त करें
                 const originElement = document.getElementById('origin');
                 const destinationElement = document.getElementById('destination');
                  const dateElement = document.getElementById('flight-dates');
                  const travelersElement = document.getElementById('travellers');
    
                 if (originElement && destinationElement && dateElement && travelersElement) {
                  const origin = originElement.value.trim();
                  const destination = destinationElement.value.trim();
                 const date = dateElement.value;
                 const travelers =travelersElement.value ;

                   // चेक करें कि कोई फील्ड खाली तो नहीं है
            if (!origin || !destination || !date || !travelers) {
                alert("Please fill in all required fields!");
               return;
            }

              // अगर सभी फील्ड्स भरी हैं, तो अगले पेज पर भेजें
             window.location.href = 'searchflight2.html';
    }    
        
        
 });
    


// If all fields are filled, run the further search process
console.log("Searching for flights...");

    // Mock flight and airport details that will appear after searching
    const mockFlights = [
        { id: 1, airline: "IndiGo", flightNo: "6E-204", departure: "10:00 AM", arrival: "12:30 PM", duration: "2h 30m", price: "₹5,500" },
        { id: 2, airline: "Air India", flightNo: "AI-882", departure: "01:15 PM", arrival: "03:45 PM", duration: "2h 30m", price: "₹6,200" },
        { id: 3, airline: "Akasa Air", flightNo: "QP-115", departure: "06:00 PM", arrival: "08:30 PM", duration: "2h 30m", price: "₹4,800" }
    ];

const resultsContainer = document.getElementById('resultsContainer');
const flightList = document.getElementById('flightList');

if (flightList) {
    flightList.innerHTML = ""; // Clear previous results

    mockFlights.forEach(flight => {
        const flightCard = document.createElement('div');
        flightCard.classList.add('flight-card');
        
        // सुरक्षित तरीके से ओरिजिन और डेस्टिनेशन का उपयोग करें (ताकि undefined होने पर क्रैश न हो)
const originInput = document.getElementById('origin');
const destinationInput = document.getElementById('destination');
const dateInput = document.getElementById('date');
const travelersInput = document.getElementById('travelers');

const safeOrigin = originInput && originInput.value ? originInput.value.toUpperCase() : 'N/A';
const safeDestination = destinationInput && destinationInput.value ? destinationInput.value.toUpperCase() : 'N/A';
const safeDate = dateInput ? dateInput.value : '';
const safeTravelers = travelersInput ? travelersInput.value : '';
        flightCard.innerHTML = `
            <strong>✈️ ${flight.airline} (${flight.flightNo})</strong><br>
            <b>Route:</b> ${safeOrigin} -> ${safeDestination}<br>
            <b>Time:</b> ${flight.departure} - ${flight.arrival} (${flight.duration})<br>
            <b>Date:</b> ${safeDate} | 👥 <b>Travelers:</b> ${safeTravelers}<br>
            <b>Price:</b> <span style="color: #d9534f; font-size: 18px;">${flight.price}</span><br>
            <button class="book-btn" onclick="openBookingForm('${flight.airline}', '${flight.flightNo}', '${flight.price}')">Book Now</button>
        `;
        flightList.appendChild(flightCard);
    });
}

// Show the results section safely
if (resultsContainer) {
    resultsContainer.classList.remove('hidden');
}

const bookingModal = document.getElementById('bookingModal');
if (bookingModal) {
    bookingModal.classList.add('hidden'); // Hide booking form if a new search is made
}





// Opens the passenger details form when the user clicks 'Book Now'
function openBookingForm(airline, flightNo, price) {
    const bookingModal = document.getElementById('bookingModal');
    const flightInfoText = document.getElementById('selectedFlightInfo');
    
    flightInfoText.innerText = `Selected Flight: ${airline} (${flightNo}) - Price: ${price}`;
    bookingModal.classList.remove('hidden');
    
    // Scroll smoothly to the booking form
    bookingModal.scrollIntoView({ behavior: 'smooth' });
}

// Finalizes the booking
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('passengerName').value;
    const email = document.getElementById('passengerEmail').value;
    
    const successDiv = document.getElementById('successMessage');
    successDiv.innerHTML = `🎉 Congratulations ${name}! Your flight has been successfully booked. Ticket details have been sent to ${email}.`;
    successDiv.classList.remove('hidden');

    // Reset the form and hide the booking section
    document.getElementById('bookingModal').classList.add('hidden');
    successDiv.scrollIntoView({ behavior: 'smooth' });
});