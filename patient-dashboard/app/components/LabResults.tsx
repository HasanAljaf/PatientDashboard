// Util Imports
import {
  formatRange,
  getRangeFlag,
  getRangeLabel,
} from '../Utils/labResultUtils';

// Shared Imports
import type { LabResult } from '../sharedPropTypes/LabResultTypes';

// Component Imports
import LabResultCard from './LabResultCard';
import StatusBadge from './StatusBadge';

// Lab Results Props
type LabResultsProps = {
  labResults: LabResult[];
};

export default function LabResults({ labResults }: LabResultsProps) {
  return (
    <div>
      <header>
        <h1>Lab Results</h1>
        <p>
          {labResults.length} {labResults.length === 1 ? 'test' : 'tests'}
        </p>
      </header>

      {labResults.length === 0 ? (
        <p>No lab results yet.</p>
      ) : (
        <section>
          <div>
            {/* Mobile View */}
            <ul>
              {labResults.map((result) => (
                <li key={result.id}>
                  <LabResultCard labResult={result} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            {/* Desktop View */}
            <table>
              <caption>Lab Results</caption>
              <thead>
                <tr>
                  <th scope="col">Test</th>
                  <th scope="col">Date</th>
                  <th scope="col">Value</th>
                  <th scope="col">Reference Range</th>
                  <th scope="col">Result</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {labResults.map((result) => (
                  <tr key={result.id}>
                    <th scope="row">{result.testName}</th>
                    <td>{result.date}</td>
                    <td>
                      {result.status === 'completed'
                        ? result.value + ' ' + result.unit
                        : '–'}
                    </td>
                    <td>{formatRange(result.referenceRange, result.unit)}</td>
                    <td>
                      {result.status === 'completed' &&
                        getRangeLabel(
                          getRangeFlag(result.value, result.referenceRange)
                        )}
                      {result.status === 'upcoming' && 'Not available yet'}
                      {result.status === 'cancelled' &&
                        'This test was cancelled'}
                    </td>
                    <td>
                      <StatusBadge status={result.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
