interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExprience: number;
    location: string;
    contract: boolean;
}

const teacher1: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
  yearsOfExprience: 5
};

console.log(teacher1);

interface Directors extends Teacher {
    numberOfReports: number;
}
const director1: Directors = {
    firstName: 'Ashuu',
    lastName: 'Dege',
    location: 'Addis Ababa',
    fullTimeEmployee: false,
    yearsOfExprience: 3,
    contract: true,
    numberOfReports: 18
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;

}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0).toUpperCase();
  return `${firstInitial}. ${lastName}`;
};

interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}
interface StudentConstructor {
  new (firstName: string, lastName: string): Student;
}

class StudentClass implements Student {
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
