from fastapi import APIRouter

router = APIRouter(prefix="/ai")

@router.get("/analytics")
def analytics():
    return {
        "top_category": "Men Shoes",
        "best_product": "Air Max Pro",
        "repeat_users": 41,
        "monthly_revenue": 124000
    }


@router.get("/forecast")
def forecast():
    return {
        "next_month_sales": "₹2,40,000",
        "growth": "18%"
    }