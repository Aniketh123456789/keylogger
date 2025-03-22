document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("logOutput").textContent = "Logging started...";
    document.getElementById("startBtn").disabled = true;
    document.getElementById("stopBtn").disabled = false;
    document.getElementById("startBtn").classList.add("disabled");

    // Call backend to start logging
    fetch("http://127.0.0.1:5050/start", { method: "POST" })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            document.getElementById("logOutput").textContent += "\n" + data.message;
        })
        .catch(error => console.error("Error starting logging:", error));
});

document.getElementById("stopBtn").addEventListener("click", () => {
    document.getElementById("logOutput").textContent += "\nLogging stopped.";
    document.getElementById("startBtn").disabled = false;
    document.getElementById("stopBtn").disabled = true;
    document.getElementById("startBtn").classList.remove("disabled");

    // Call backend to stop logging
    fetch("http://127.0.0.1:5050/stop", { method: "POST" })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            document.getElementById("logOutput").textContent += "\n" + data.message;
        })
        .catch(error => console.error("Error stopping logging:", error));
});

// Function to fetch logs from the backend
function updateLogs() {
    fetch("http://127.0.0.1:5050/logs")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch logs");
            }
            return response.json();
        })
        .then(data => {
            const logElement = document.getElementById("logOutput");
            if (data.logs && data.logs.length > 0) {
                logElement.textContent = data.logs.join("\n");
            } else {
                logElement.textContent = "No logs yet...";
            }
            console.log("Logs updated:", data.logs);
        })
        .catch(error => {
            console.error("Error fetching logs:", error);
            document.getElementById("logOutput").textContent = "Error fetching logs...";
        });
}

// Automatically update logs every 2 seconds
setInterval(updateLogs, 2000);