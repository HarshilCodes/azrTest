from flask import Flask
app = Flask(__name__)

@app.route("/API")

def API():
    return { 
        "Members": ["User1", "User2", "User3"]
    }

if __name__ == "__main__":
    app.run(debug =True)