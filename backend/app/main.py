from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.consents import router as consent_router

app = FastAPI(
    title="Open Banking Consent Flow Explorer"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://openbank-frontend.calmcoast-c9142dd2.centralindia.azurecontainerapps.io",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(consent_router)

@app.get("/")
def root():
    return {
        "message": "Open Banking Consent API Running"
    }