from fastapi import APIRouter, UploadFile, File

router = APIRouter(prefix="/ai")

@router.post("/image-search")
async def image_search(file: UploadFile = File(...)):
    return {
        "matches": [
            "Air Max Pro",
            "Street Neo",
            "Urban Runner"
        ]
    }