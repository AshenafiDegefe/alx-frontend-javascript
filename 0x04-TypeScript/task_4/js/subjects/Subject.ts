/// <reference path="Teacher.ts" />

namespace Subjects {
  
  export class Subject {

    protected teacher: Teacher;

    /**
     * Setter method to assign a teacher to the subject.
     * @param teacher - An object implementing the Teacher interface.
     */
    public setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
