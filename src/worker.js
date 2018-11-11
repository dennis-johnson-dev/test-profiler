onmessage = function(event) {
  fetch("http://localhost:3000/metrics", {
    body: JSON.stringify(event.data),
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {})
    .catch(error => console.error("Error:", error));
};
