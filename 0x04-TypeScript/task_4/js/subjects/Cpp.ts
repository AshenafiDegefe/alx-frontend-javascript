/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    /**
     * Returns the list of requirements for Cpp.
     * @returns A string of requirements.
     */
    public getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    /**
     * Checks for an available teacher with C++ experience.
     * @returns A string with the available teacher's name or a lack-of-teacher message.
     */
    public getAvailableTeacher(): string {
      
      if (this.teacher && this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
