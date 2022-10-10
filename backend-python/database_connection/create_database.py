import pymongo
from pymongo import MongoClient
def create_database():
    myclient = MongoClient("mongodb+srv://navjotdadwal:2019UEC1657@cluster0.lbdurre.mongodb.net/?retryWrites=true&w=majority")
    mydb = myclient["Flipr"]
    mycol = mydb["Admin Collection"]
    record = { "_id": 5,
          "name": "Raju",
          "Roll No": "1005",
          "Branch": "CSE"}
    rec_id1 = mycol.insert_one(record)

create_database()