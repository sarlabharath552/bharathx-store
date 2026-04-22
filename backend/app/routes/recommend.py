from fastapi import APIRouter

router = APIRouter(prefix="/ai")

@router.post("/recommend")
def recommend(data: dict):
    viewed = data.get("viewed", [])

    if "running" in str(viewed).lower():
        return {
            "items": [
                "Air Zoom Elite",
                "Run Pro Max",
                "Neo Speed"
            ]
        }

    return {
        "items": [
            "Street Force",
            "Urban Lite"
        ]
    }

@router.post("/recommend")
def recommend(data: dict):
    history = data.get("history", [])

    if "men" in str(history).lower():
        return {"items": ["Air Zoom X", "Street Pro"]}

    if "women" in str(history).lower():
        return {"items": ["Flex Yoga", "Pink Run"]}

    return {"items": ["Trending Neo", "Urban Max"]}