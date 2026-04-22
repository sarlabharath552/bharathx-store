from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import Product
from ..schemas import ProductCreate

router = APIRouter(prefix="/products", tags=["Products"])

@router.get("/")
def get_products(db: Session = Depends(get_db)):
    return db.query(Product).all()

@router.post("/")
def add_product(product: ProductCreate, db: Session = Depends(get_db)):
    new_product = Product(**product.dict())

    db.add(new_product)
    db.commit()
    db.refresh(new_product)

    return {
        "message": "Product Added",
        "product": new_product
    }

@router.delete("/{id}")
def delete_product(id: int, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == id).first()

    if product:
        db.delete(product)
        db.commit()

    return {"message": "Deleted"}