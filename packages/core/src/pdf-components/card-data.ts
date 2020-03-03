import { TaskMetaData } from '../types';
import { PdfComponentData } from './pdf-component-data';

export default class CardData extends PdfComponentData {
  filePath = '/path/';
  description?: string;

  constructor(
    meta: TaskMetaData,
    passingScore: number,
    failingScore: number,
    result: number,
    description: string
  ) {
    super(meta, passingScore, failingScore, result);
    this.description = description;
  }
}
