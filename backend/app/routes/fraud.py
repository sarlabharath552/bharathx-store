from fastapi import APIRouter

router = APIRouter(prefix="/ai")

@router.post("/fraud-check")
def fraud(data: dict):
    amount = data.get("amount", 0)

    if amount > 50000:
        return {"risk": "High Risk"}

    return {"risk": "Safe"}