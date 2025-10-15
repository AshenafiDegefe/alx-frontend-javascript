// Dependencies for the Java class
/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  // Declaration Merging: Add a Java experience attribute to the Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  /**
   * Java class extending the base Subject class.
   */
  export class Java extends Subject {
    /**
     * Returns the list of requirements for Java.
     * @returns A string of requirements.
     */
    public getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    /**
     * Checks for an available teacher with Java experience.
     * @returns A string with the available teacher's name or a lack-of-teacher message.
     */
    public getAvailableTeacher(): string {
      // Check if the teacher is assigned and has Java experience > 0
      if (this.teacher && this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
