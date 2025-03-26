from fastapi import APIRouter, Depends, HTTPException
from utils.security import verify_password

router = APIRouter(prefix="/auth",tags=["auth"])

@router.post("/auth/login")
async def login(email:str,password:str):
    return {"message":"funciona"}
