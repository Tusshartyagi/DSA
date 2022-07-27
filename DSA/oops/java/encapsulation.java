/**
 * encapsulation
 */
public class encapsulation {
    private String name; //We can create a fully encapsulated class in Java by making all the data members of the class private.
    public String getName(){
        return name;
    }
    public void setName(String name) { 
        this.name = name;
    }
        
}
//we can wrap our code and data together into a single unit.
//we can use setter and getter methods to set and get the data in it.
class useencap {
    public static void main(String[] args) {
        encapsulation e1 = new encapsulation();
        e1.setName("vijay");
        System.out.println(e1.getName());
    }
}
