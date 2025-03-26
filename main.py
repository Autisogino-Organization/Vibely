from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite todos los orígenes (ajústalo según sea necesario)
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos los métodos HTTP
    allow_headers=["*"],  # Permite todos los encabezados
    expose_headers=["*"],  # Asegurar que el frontend pueda leer las respuestas del servidor
)




@app.get("/")
async def root():
    return {"message": "api activa"}