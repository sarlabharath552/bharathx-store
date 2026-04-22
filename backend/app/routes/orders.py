from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import Order
from ..schemas import OrderCreate

router = APIRouter(prefix="/orders", tags=["Orders"])

@router.post("/")
def place_order(order: OrderCreate, db: Session = Depends(get_db)):
    new_order = Order(**order.dict())

    db.add(new_order)
    db.commit()
    db.refresh(new_order)

    return {
        "message": "Order Placed",
        "order": new_order
    }

@router.get("/{email}")
def get_orders(email: str, db: Session = Depends(get_db)):
    return db.query(Order).filter(
        Order.email == email
    ).all()


@router.delete("/{id}")
def delete_order(id: int, db: Session = Depends(get_db)):
    order = db.query(Order).filter(Order.id == id).first()

    if order:
        db.delete(order)
        db.commit()

    return {"message":"Deleted"}