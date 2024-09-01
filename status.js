document.addEventListener('DOMContentLoaded', function() {
    // Simulated patient data, replace with actual data from backend
    const patientStatus = [
        { name: 'John Doe', doctor: 'Dr. Smith', department: 'OPD' },
        { name: 'Jane Doe', doctor: 'Dr. Johnson', department: 'ICU' }
    ];

    document.getElementById('statusContent').innerHTML = patientStatus.map(patient => 
        `<p>Name: ${patient.name}, Assigned Doctor: ${patient.doctor}, Department: ${patient.department}</p>`
    ).join('');
});
