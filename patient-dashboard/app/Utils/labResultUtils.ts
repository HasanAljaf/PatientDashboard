// Shared Imports
import type {
  RefRange,
  RangeFlag,
  LabStatus,
} from '../sharedPropTypes/LabResultTypes';

function formatRange(range: RefRange, unit: string) {
  if (range.low === null) {
    return `< ${range.high} ${unit}`;
  }
  if (range.high === null) {
    return `> ${range.low} ${unit}`;
  }
  return `${range.low}-${range.high} ${unit}`;
}

function getRangeFlag(value: number, range: RefRange): RangeFlag {
  if (range.low !== null && value < range.low) {
    return 'low';
  }
  if (range.high !== null && value > range.high) {
    return 'high';
  }
  return 'normal';
}

const rangeLabel: Record<RangeFlag, string> = {
  low: 'Below reference range',
  normal: 'Within normal reference range',
  high: 'Above reference range',
};

function getRangeLabel(flag: RangeFlag): string {
  return rangeLabel[flag];
}

export { formatRange, getRangeFlag, getRangeLabel };
