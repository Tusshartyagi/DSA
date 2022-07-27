#single inheritence

class Parents:
  def func1(self):
    print("this is the object of parent class")

class Child(Parents):
  def func2(self):
    print("this is the object of child class")

obj = Child()
obj.func2()
obj.func1()
