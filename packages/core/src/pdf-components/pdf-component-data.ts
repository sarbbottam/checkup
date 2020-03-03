import { TaskMetaData, Grade } from '../types';

export abstract class PdfComponentData {
  meta: TaskMetaData;
  grade: Grade;
  result: number;

  scoreToLetter(numericalScore: number): Grade {
    switch (numericalScore) {
      case 0:
        return Grade.A;
      case 1:
        return Grade.B;
      case 2:
        return Grade.C;
      case 3:
        return Grade.D;
      default:
        return Grade.F;
    }
  }

  calculateGrade(passingScore: number, failingScore: number, result: number): Grade {
    const scoreBand = (passingScore - failingScore) / 5; // there are 5 grades
    return this.scoreToLetter(Math.round((passingScore - result) / scoreBand)); // TODO: @ckessler improve on this business logic
  }

  constructor(meta: TaskMetaData, passingScore: number, failingScore: number, result: number) {
    this.meta = meta;
    this.result = result;
    this.grade = this.calculateGrade(passingScore, failingScore, result);
  }
}
