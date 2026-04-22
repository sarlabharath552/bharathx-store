from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/ai")

memory = []

class ChatRequest(BaseModel):
    message: str

@router.post("/memory-chat")
def memory_chat(req: ChatRequest):
    memory.append(req.message)

    return {
        "reply": f"You said: {req.message}",
        "history": memory[-5:]
    }