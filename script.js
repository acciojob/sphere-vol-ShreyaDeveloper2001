function volume_sphere() {
    //Write your code hereevent.preventDefault(); // Prevent the form from submitting

    // Get the radius value entered by the user
    const radius = parseFloat(document.getElementById("radius").value);

    // Check if the radius is a valid number
    if (!isNaN(radius) && radius >= 0) {
        // Calculate the volume of the sphere
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  event.preventDefault(); // Prevent the form from submitting

    // Get the radius value entered by the user
    const radius = parseFloat(document.getElementById("radius").value);

    // Check if the radius is a valid number
    if (!isNaN(radius) && radius >= 0) {
        // Calculate the volume of the sphere
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
