/* ========= StudentClass task ========= */

/** Interface describing the shape of the Student class instances */
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

/** Interface describing the constructor signature for StudentClass */
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

/** Class implementing the interfaces above */
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

/** Optional: use the constructor interface as a type for the class itself */
const Student: StudentConstructor = StudentClass;

/* Quick sanity checks (can be removed): */
const student1 = new Student("Azeezah", "Abdulazeez");
console.log(student1.displayName());      // "Azeezah"
console.log(student1.workOnHomework());   // "Currently working"
