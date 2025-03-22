# keylogger
Ethical Keylogger Dashboard

🚀 A professional, ethical keylogger built using Flask (Python) and a modern frontend (HTML, CSS, JavaScript). It logs keystrokes and displays them on a user-friendly dashboard.

🔹 Features

✔️ Real-time Keystroke Logging – Captures and displays keystrokes dynamically.
✔️ Flask API Backend – Manages keylogging and log retrieval.
✔️ Modern UI – Built with HTML, CSS, and JavaScript for an interactive dashboard.
✔️ Start/Stop Logging – Control the keylogger via a simple interface.
✔️ Live Log Updates – Fetches keystroke data every few seconds.
✔️ Cross-Device Access (Same Network) – Can be accessed from different devices on the same network.

⸻

🔹 Installation & Setup

📌 1. Clone the Repository
git clone https://github.com/Aniketh123456789/ethical-keylogger.git
cd ethical-keylogger
📌 2. Install Dependencies
pip install flask pynput
📌 3. Run the Keylogger Backend
python keylogger.py
📌 4. Run the Frontend

Simply open index.html in a browser.

⸻

🔹 How It Works
	1.	Click “Start Logging” to begin capturing keystrokes.
	2.	The keystrokes will appear in the log section in real-time.
	3.	Click “Stop Logging” to end the session.

⸻

🔹 Access from Another Device (Same Network)

To access from another device:
	•	Run the backend with:
 python keylogger.py
 •	Find your local IP address (e.g., 192.168.1.100).
	•	Open a browser on another device and go to:
 http://192.168.1.100:5002

 🔹 Disclaimer ⚠️

🚨 This project is for ethical purposes and personal use only. Unauthorized keylogging is illegal.

⸻

🔹 Contributing

Want to improve this project? Feel free to fork the repo, make changes, and submit a pull request. 🚀
