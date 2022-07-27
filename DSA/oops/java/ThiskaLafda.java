/*
Here is given the 6 usage of java this keyword.

this can be used to refer current class instance variable.
this can be used to invoke current class method (implicitly)
this() can be used to invoke current class constructor.
this can be passed as an argument in the method call.
this can be passed as argument in the constructor call.
this can be used to return the current class instance from the method.
 */
class Student1 {
    int rollno;
    String name, course;
    float fee;

    Student1(int rollno, String name, String course) {
        this.rollno = rollno;
        this.name = name;
        this.course = course;
    }

    Student1(int rollno, String name, String course, float fee) {
        this(rollno, name, course);//resusing constructor
        this.fee = fee;
        //this(rollno, name, course);// Compile time error
    }

    void display() {
        System.out.println(rollno + " " + name + " " + course + " " + fee);
    }
}

class ThiskaLafda{
    public static void main(String args[]) {
        Student1 s1 = new Student1(111, "ankit", "java");
        Student1 s2 = new Student1(112, "sumit", "java", 6000f);
        s1.display();
        s2.display();
    }
}