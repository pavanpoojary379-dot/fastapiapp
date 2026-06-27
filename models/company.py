from sqlalchemy import Column,Integer,String,Enum,relationship
from sqlalchemy.orm import declarative_base
from database import Base,engine,Sessionlocal

class Company(Base):
    _tablename_="companies"
    id=Column(Integer,primary_key=True,index=True)
    name=Column(String,nullable=False,index=True)
    email=Column(String,Unique=True)
    phone=Column(String,Unique=True)
    jobs=relationship("job",back_populates="company")
