document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function showTab(tabId) {
        tabContents.forEach(content => {
            if (content.id === tabId) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });

        tabs.forEach(tab => {
            if (tab.getAttribute('onclick') && tab.getAttribute('onclick').includes(tabId)) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }

    function updateBeds() {
        // Example content update for beds tab
        document.getElementById('bedsContent').innerHTML = `
            <p>Total Beds: 100</p>
            <p>Occupied Beds: 75</p>
            <p>Available Beds: 25</p>
        `;
    }

    function updatePatients() {
        // Example content update for patients tab
        document.getElementById('patientsContent').innerHTML = `
            <p>Total Patients: 150</p>
            <p>Patients in OPD: 50</p>
            <p>Patients in ICU: 20</p>
            <p>Patients in General Ward: 40</p>
            <p>Patients in Emergency: 40</p>
        `;
    }

    function updateOPDQueue() {
        // Example content update for OPD Queue tab
        document.getElementById('opdQueueStatus').textContent = '10';
    }

    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('onclick') ? this.getAttribute('onclick').split('\'')[1] : this.getAttribute('id');
            showTab(tabId);
            if (tabId === 'beds') updateBeds();
            if (tabId === 'patients') updatePatients();
            if (tabId === 'opdQueue') updateOPDQueue();
        });
    });

    // Initialize with the first tab
    showTab('beds');
    updateBeds();
    updatePatients();
    updateOPDQueue();
});
