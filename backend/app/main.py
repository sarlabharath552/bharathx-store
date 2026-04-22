from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


from .database import Base, engine
from .routes import auth, products, orders, chat, search, recommend, size, memory_chat, image_search, analytics, refund, fraud, pricing




Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(products.router)
app.include_router(orders.router)
app.include_router(chat.router)
app.include_router(search.router)
app.include_router(recommend.router)
app.include_router(size.router)
app.include_router(memory_chat.router)
app.include_router(image_search.router)
app.include_router(analytics.router)
app.include_router(refund.router)
app.include_router(fraud.router)
app.include_router(pricing.router)



@app.get("/")
def home():
    return {"message": "Backend Running"}