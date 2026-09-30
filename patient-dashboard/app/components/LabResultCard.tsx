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

// Lab Result Card Props
type LabResultCardProps = {
  labResult: LabResult;
};

export default function LabResultCard({ labResult }: LabResultCardProps) {
  return (
    <article>
      <div>
        <div>
          <h2>{labResult.testName}</h2>
          <p>{labResult.date}</p>
        </div>
        <StatusBadge status={labResult.status} />
      </div>
      {labResult.status === 'completed' && (
        <>
          <dl>
            <div>
              <dt>Value</dt>
              <dd>{labResult.value + ' ' + labResult.unit}</dd>
            </div>
            <div>
              <dt>Reference</dt>
              <dd>{formatRange(labResult.referenceRange, labResult.unit)}</dd>
            </div>
          </dl>
          <p>
            {getRangeLabel(
              getRangeFlag(labResult.value, labResult.referenceRange)
            )}
          </p>
        </>
      )}
      {labResult.status === 'upcoming' && (
        <p>
          Results not available yet. Reference range:{' '}
          {formatRange(labResult.referenceRange, labResult.unit)}
        </p>
      )}
      {labResult.status === 'cancelled' && <p>This test was cancelled</p>}
    </article>
  );
}
