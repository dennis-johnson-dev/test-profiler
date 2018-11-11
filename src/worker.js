onmessage = function(event) {
  fetch("http://localhost:3000", {
    body: JSON.stringify(event.data),
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => console.log("Success:", JSON.stringify(response)))
    .catch(error => console.error("Error:", error));
};
