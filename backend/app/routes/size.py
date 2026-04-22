from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/ai")

class SizeRequest(BaseModel):
    foot_cm: float

@router.post("/size")
def suggest(req: SizeRequest):
    cm = req.foot_cm

    if cm < 24:
        size = 6
    elif cm < 25:
        size = 7
    elif cm < 26:
        size = 8
    elif cm < 27:
        size = 9
    else:
        size = 10

    return {
        "recommended_size": size
    }