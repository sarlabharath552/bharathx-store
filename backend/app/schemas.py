from pydantic import BaseModel

class UserCreate(BaseModel):
    name:str
    email:str
    password:str

class UserLogin(BaseModel):
    email:str
    password:str

class ProductCreate(BaseModel):
    name: str
    price: float
    image: str
    category: str
    description: str

class ProductOut(ProductCreate):
    id: int

    class Config:
        orm_mode = True

class OrderCreate(BaseModel):
    email: str
    amount: float