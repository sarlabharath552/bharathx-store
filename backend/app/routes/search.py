from fastapi import APIRouter
from sentence_transformers import SentenceTransformer
import numpy as np

router = APIRouter(prefix="/ai")

model = None
embeddings = None

products = [
    {"name": "Air Max Pro", "text": "lightweight running shoe black men"},
    {"name": "Street Neo", "text": "casual white sneaker lifestyle"},
    {"name": "Flex Run", "text": "women pink running gym shoe"},
]

def load_model():
    global model, embeddings

    if model is None:
        model = SentenceTransformer("all-MiniLM-L6-v2")
        embeddings = model.encode(
            [p["text"] for p in products]
        )

@router.get("/search")
def semantic_search(q: str):
    load_model()

    q_emb = model.encode([q])[0]
    scores = np.dot(embeddings, q_emb)

    idx = int(np.argmax(scores))

    return {"result": products[idx]}