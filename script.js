document.addEventListener("DOMContentLoaded", function () {
    // Selecting elements
    const eventForm = document.getElementById("event-form");
    const eventList = document.getElementById("events"); // FIXED ID
    const noEventsMsg = document.getElementById("no-events");

    // Debugging logs to check if elements exist
    console.log("eventForm:", eventForm);
    console.log("eventList:", eventList);
    console.log("noEventsMsg:", noEventsMsg);

    if (!eventForm || !eventList || !noEventsMsg) {
        console.error(" ERROR: One or more elements not found! Check your HTML.");
        return;
    }

    // Add event listener to form
    eventForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const eventName = document.getElementById("eventname").value.trim();
        const eventDate = document.getElementById("eventdate").value;
        const eventTime = document.getElementById("eventtime").value;
        const eventLocation = document.getElementById("eventlocation").value.trim();

        if (!eventName || !eventDate || !eventTime || !eventLocation) {
            alert(" Please fill out all fields!");
            return;
        }

        const eventItem = document.createElement("li");
        eventItem.innerHTML = `
            <strong>${eventName}</strong> - ${eventDate} at ${eventTime}, ${eventLocation} 
            <button class="delete-btn">Delete</button>
        `;

        eventList.appendChild(eventItem);
        noEventsMsg.style.display = "none";
        eventForm.reset();
    });

    // Delete event on click
    eventList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-btn")) {
            e.target.parentElement.remove();

            if (eventList.children.length === 0) {
                noEventsMsg.style.display = "block";
            }
        }
    });
});

