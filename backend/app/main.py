from fastapi import FastAPI

app = FastAPI(
    title="Open Banking Consent Flow Explorer"
)

@app.get("/")
def root():
    return {
        "message":"Open Banking Consent API Running"
    }