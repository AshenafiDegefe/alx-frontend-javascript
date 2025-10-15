export interface MajorCredits {
  _majorCreditBrand: void;
  credits: number;
}

export interface MinorCredits {
  _minorCreditBrand: void;
  credits: number;
}

/**
 * Calculates the sum of credits from two MajorCredits subjects.
 *
 * @param subject1 The first subject with MajorCredits.
 * @param subject2 The second subject with MajorCredits.
 * @returns A new MajorCredits object with the summed credits.
 */
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits } as MajorCredits;
}

/**
 * Calculates the sum of credits from two MinorCredits subjects.
 *
 * @param subject1 The first subject with MinorCredits.
 * @param subject2 The second subject with MinorCredits.
 * @returns A new MinorCredits object with the summed credits.
 */
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits } as MinorCredits;
}


