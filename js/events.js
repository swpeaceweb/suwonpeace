fetch('assets/events.json')
    .then(response => response.json())
    .then(data => {
        const eventList = document.getElementById('event-list');
        eventList.innerHTML = '';
        data.forEach(event => {
            eventList.innerHTML += `
                <div class="mb-3">
                    <h4>${event.title}</h4>
                    <p>${event.date}</p>
                    <p>${event.description}</p>
                </div>
            `;
        });
    });
