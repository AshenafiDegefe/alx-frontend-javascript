interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExprience?: number;
    location: string;
    contract: boolean;
    data: any;
}

const teacher1: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
  yearsOfExprience: 5,
  data: null
};

console.log(teacher1);

interface Director extends Teacher {
    numberOfReports: number;
}
const director1: Director = {
    firstName: 'Ashuu',
    lastName: 'Dege',
    location: 'Addis Ababa',
    fullTimeEmployee: false,
    yearsOfExprience: 3,
    contract: true,
    numberOfReports: 18,
    data: null
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
