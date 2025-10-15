// Dependencies for the React class
/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  // Declaration Merging: Add a React experience attribute to the Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number;
  }


  export class React extends Subject {
    /**
     * Returns the list of requirements for React.
     * @returns A string of requirements.
     */
    public getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    /**
     * Checks for an available teacher with React experience.
     * @returns A string with the available teacher's name or a lack-of-teacher message.
     */
    public getAvailableTeacher(): string {
      // Check if the teacher is assigned and has React experience > 0
      if (this.teacher && this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
