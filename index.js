function checkIP() {
    // Use a service like ipinfo.io to get the real IP address dynamically
    fetch('https://ipinfo.io/json')
      .then(response => response.json())
      .then(data => {
        // Display the IP address in a pop-up alert
        alert('Checking Done, Please Click on Done');

        // Optionally, update the content of the card
        document.getElementById("ipAddress").innerText = data.ip;
        document.getElementById("ipCountry").innerText = data.country;
        document.getElementById("ipCity").innerText = data.city;
        document.getElementById("ipOrg").innerText = data.org;
       
      })
      .catch(error => {
        console.error('Error fetching IP address:', error);
      });
  }