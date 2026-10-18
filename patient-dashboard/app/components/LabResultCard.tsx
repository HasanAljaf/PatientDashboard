// Util Imports
import {
  formatRange,
  getRangeFlag,
  getRangeLabel,
} from '../Utils/labResultUtils';

// Shared Imports
import type { LabResult } from '../sharedPropTypes/LabResultTypes';

// Component Imports
import StatusBadge from './StatusBadge';
import Card from './Card';

// Lab Result Card Props
type LabResultCardProps = {
  labResult: LabResult;
};

export default function LabResultCard({ labResult }: LabResultCardProps) {
  return (
    <Card>
      <header className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-medium">{labResult.testName}</h2>
          <p className="text-sm text-gray-500">{labResult.date}</p>
        </div>
        <StatusBadge status={labResult.status} />
      </header>
      {labResult.status === 'completed' && (
        <>
          <dl className="flex flex-col gap-2">
            <div className="flex justify-between gap-4 text-sm">
              <dt className="text-gray-500">Value</dt>
              <dd className="text-right">
                {labResult.value + ' ' + labResult.unit}
              </dd>
            </div>
            <div className="flex justify-between gap-4 text-sm">
              <dt className="text-gray-500">Reference</dt>
              <dd className="text-right">
                {formatRange(labResult.referenceRange, labResult.unit)}
              </dd>
            </div>
          </dl>
          <p className="text-sm font-medium">
            {getRangeLabel(
              getRangeFlag(labResult.value, labResult.referenceRange)
            )}
          </p>
        </>
      )}
      {labResult.status === 'upcoming' && (
        <p className="text-sm text-gray-500">
          Results not available yet. Reference range:{' '}
          {formatRange(labResult.referenceRange, labResult.unit)}
        </p>
      )}
      {labResult.status === 'cancelled' && (
        <p className="text-sm text-gray-500">This test was cancelled</p>
      )}
    </Card>
  );
}
