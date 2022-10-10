from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Task(BaseModel):
    description : str
    task_type : str
    start_date : str
    time_taken : str

class Data(BaseModel):
    date: str
    content : []

class Item(BaseModel):
    name : str
    mailID : str
    contactNumber : str
    department : str
    joiningDate : str
    password : str
    data : []

@app.get("/")
def read_root():
    return {"Hello": "World"}

