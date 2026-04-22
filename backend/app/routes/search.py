from fastapi import APIRouter
from sentence_transformers import SentenceTransformer
import numpy as np

router = APIRouter(prefix="/ai")

model = SentenceTransformer("all-MiniLM-L6-v2")

products = [
    {"name":"Air Max Pro", "text":"lightweight running shoe black men"},
    {"name":"Street Neo", "text":"casual white sneaker lifestyle"},
    {"name":"Flex Run", "text":"women pink running gym shoe"},
]

embeddings = model.encode([p["text"] for p in products])

@router.get("/search")
def semantic_search(q: str):
    q_emb = model.encode([q])[0]

    scores = np.dot(embeddings, q_emb)

    idx = int(np.argmax(scores))

    return {
        "result": products[idx]
    }