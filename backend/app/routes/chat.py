from fastapi import APIRouter
from pydantic import BaseModel
from openai import OpenAI
import os

router = APIRouter(prefix="/ai")

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

class ChatRequest(BaseModel):
    message: str

@router.post("/chat")
def chat(req: ChatRequest):
    prompt = f"""
You are an ecommerce assistant.
Help users choose shoes, sizes, products, delivery, returns.

User: {req.message}
"""

    res = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role":"user","content":prompt}
        ]
    )

    return {
        "reply": res.choices[0].message.content
    }