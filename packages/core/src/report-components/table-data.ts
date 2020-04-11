import { TaskMetaData, ReportComponentType, DependencyResult } from '../types';
import { ReportComponentData } from './report-component-data';

export default class TableData extends ReportComponentData {
  tableHeaders: Array<string>;

  constructor(meta: TaskMetaData, public taskResult: DependencyResult[]) {
    super(meta, ReportComponentType.Table);
    this.tableHeaders = this._deriveTableHeaders(taskResult);
  }
  _deriveTableHeaders(taskResult: DependencyResult[]): Array<string> {
    return Object.keys(taskResult[0]);
  }
}
