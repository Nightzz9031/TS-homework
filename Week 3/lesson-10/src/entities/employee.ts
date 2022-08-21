import Person from './person.js';

abstract class Employee extends Person {
    abstract calcPay(): number;
}
export default Employee;