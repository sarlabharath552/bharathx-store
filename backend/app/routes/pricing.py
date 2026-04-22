from fastapi import APIRouter

router = APIRouter(prefix="/ai")

@router.get("/price")
def smart_price(stock: int, demand: int):
    price = 5000

    if demand > 80:
        price += 1000

    if stock < 10:
        price += 500

    return {"price": price}