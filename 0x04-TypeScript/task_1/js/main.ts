
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}


interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}


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

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher({ firstName, lastName }: { firstName: string, lastName: string }): string {
  return `${firstName}. ${lastName}`;
}
const Student: StudentConstructor = StudentClass;



console.log(printTeacher({ firstName: "John", lastName: "Doe" })); 

const student1 = new Student("Azeezah", "Abdulazeez");
console.log(student1.displayName());     
console.log(student1.workOnHomework());   
