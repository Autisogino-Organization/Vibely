from fastapi import APIRouter, Depends, HTTPException


router = APIRouter(prefix="/auth",tags=["auth"])

@router.post("/auth/login")
async def login():
    return {"message":"funciona"}
