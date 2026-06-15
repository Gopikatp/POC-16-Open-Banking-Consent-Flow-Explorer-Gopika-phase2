import json
from pathlib import Path
from fastapi import APIRouter

router = APIRouter(prefix="/api")

DATA_FILE = Path(__file__).parent.parent / "mock_data" / "consents.json"


def load_data():
    with open(DATA_FILE, "r") as file:
        return json.load(file)
    
def save_data(data):
    with open(DATA_FILE, "w") as file:
        json.dump(data, file, indent=2)


@router.get("/consents")
def get_consents():
    return load_data()


@router.get("/consents/{consent_id}")
def get_consent(consent_id: str):
    consents = load_data()

    for consent in consents:
        if consent["id"] == consent_id:
            return consent

    return {"error": "Consent not found"}


@router.get("/metrics")
def get_metrics():
    consents = load_data()

    active = sum(1 for c in consents if c["status"] == "active")
    revoked = sum(1 for c in consents if c["status"] == "revoked")
    expired = sum(1 for c in consents if c["status"] == "expired")

    return {
        "active_consents": active,
        "revoked_consents": revoked,
        "expired_consents": expired
    }


@router.get("/scopes")
def get_scope_summary():
    consents = load_data()

    result = {}

    for consent in consents:
        scope = consent["scope"]
        result[scope] = result.get(scope, 0) + 1

    return result


@router.get("/token-analytics")
def token_analytics():
    consents = load_data()

    total_refresh = sum(c["refresh_count"] for c in consents)

    return {
        "total_refresh_count": total_refresh,
        "average_refresh_count": round(total_refresh / len(consents), 2)
    }

@router.post("/revoke/{consent_id}")
def revoke_consent(consent_id: str):
    consents = load_data()

    for consent in consents:
        if consent["id"] == consent_id:
            consent["status"] = "revoked"
            save_data(consents)

            return {
                "message": "Consent revoked successfully"
            }

    return {
        "error": "Consent not found"
    }