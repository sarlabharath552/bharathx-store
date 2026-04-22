from fastapi import APIRouter

router = APIRouter(prefix="/ai")

@router.post("/refund")
def refund(data: dict):
    order_id = data.get("order_id")

    return {
        "message": f"Refund request created for Order {order_id}"
    }