const bookings = [
    { id: 1, service: "Hotel Booking", date: "July 20, 2026", status: "Confirmed" },
    { id: 2, service: "Flight Ticket", date: "August 25, 2026", status: "Pending" }
];

const list = document.getElementById('booking-list');

bookings.forEach(booking => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${booking.service}</h3>
        <p>Date: ${booking.date}</p>
        <p>Status: <span class="status">${booking.status}</span></p>
    `;
    list.appendChild(card);
});





// 1. Dark Mode Toggle
document.getElementById('toggle-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 2. Fetch data from API
async function fetchBookings() {
    try {
        const response = await fetch('https://api.example.com/my-bookings'); // Replace with your actual API URL
        const bookings = await response.json();
        renderBookings(bookings);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// 3. Render bookings and handle cancel function
function renderBookings(bookings) {
    const list = document.getElementById('booking-list');
    list.innerHTML = '';
    bookings.forEach(b => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${b.service}</h3>
            <p>Date: ${b.date}</p>
            <button class="cancel-btn" onclick="cancelBooking(${b.id})">Cancel Booking</button>
        `;
        list.appendChild(card);
    });
}

function cancelBooking(id) {
    alert("Booking ID " + id + " has been cancelled.");
    // You can send a DELETE request here: 
    // fetch(`api/bookings/${id}`, {method: 'DELETE'})
}

// Initialize the fetch
fetchBookings();