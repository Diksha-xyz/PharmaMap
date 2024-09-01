document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('admissionForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('patientName').value;
        const age = document.getElementById('patientAge').value;
        const gender = document.getElementById('patientGender').value;
        const department = document.getElementById('departmentSelect').value;

        if (name && age && gender && department) {
            // Submit data to backend here

            alert('Patient admitted successfully.');
            this.reset();
        } else {
            alert('All fields are required.');
        }
    });
});
