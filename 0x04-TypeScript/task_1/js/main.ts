
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

interface DirectorInterface{
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface{
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface{
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string{
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface{
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string{
    return "Getting to work"
  }
}
function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

function printTeacher({ firstName, lastName }: { firstName: string, lastName: string }): string {
  return `${firstName}. ${lastName}`;
}
const Student: StudentConstructor = StudentClass;



console.log(printTeacher({ firstName: "John", lastName: "Doe" })); 

const student1 = new Student("Azeezah", "Abdulazeez");
console.log(student1.displayName());     
console.log(student1.workOnHomework());

// Test createEmployee function
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));   
