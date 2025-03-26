import bcrypt



def verify_password(password:str, hashed_password:str):
    """
    Transforma ambas contraseñas en formato de bytes
    """
    password_bytes = password.encode()
    hashed_bytes = hashed_password.encode() 
    #Se valida si los bytes coinciden
    is_valid = bcrypt.checkpw(password_bytes,hashed_bytes)
    return is_valid


