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
  // Variables
  const isDataEmpty = labResults.length === 0;

  return (
    <div className="flex flex-col gap-4">
      <header className="flex items-center justify-between gap-3">
        <h1 className="text-xl font-medium">Lab Results</h1>
        <p className="text-sm text-gray-500">
          {isDataEmpty
            ? null
            : labResults.length +
              ' ' +
              (labResults.length === 1 ? 'test' : 'tests')}
        </p>
      </header>
      {isDataEmpty ? (
        <p className="rounded-2xl bg-white p-6 text-center text-sm text-gray-500">
          No Lab Tests
        </p>
      ) : (
        <>
          {/* Mobile View */}
          <ul className="flex flex-col gap-4 md:hidden">
            {labResults.map((result) => (
              <li key={result.id}>
                <LabResultCard labResult={result} />
              </li>
            ))}
          </ul>
          {/* Desktop View */}
          <div className="hidden md:block overflow-x-auto rounded-2xl bg-white shadow-md">
            <table className="w-full text-sm">
              <caption className="sr-only">Lab Results</caption>
              <thead className="bg-gray-50">
                <tr>
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500"
                    scope="col"
                  >
                    Test
                  </th>
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500"
                    scope="col"
                  >
                    Date
                  </th>
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500"
                    scope="col"
                  >
                    Value
                  </th>
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500"
                    scope="col"
                  >
                    Reference Range
                  </th>
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500"
                    scope="col"
                  >
                    Result
                  </th>
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500"
                    scope="col"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {labResults.map((result) => (
                  <tr
                    className="border-t border-gray-100 hover:bg-gray-50"
                    key={result.id}
                  >
                    <th className="px-4 py-3 text-left font-medium" scope="row">
                      {result.testName}
                    </th>
                    <td className="px-4 py-3">{result.date}</td>
                    <td className="px-4 py-3">
                      {result.status === 'completed'
                        ? result.value + ' ' + result.unit
                        : '–'}
                    </td>
                    <td className="px-4 py-3">
                      {formatRange(result.referenceRange, result.unit)}
                    </td>
                    <td className="px-4 py-3">
                      {result.status === 'completed' &&
                        getRangeLabel(
                          getRangeFlag(result.value, result.referenceRange)
                        )}
                      {result.status === 'upcoming' && 'Not available yet'}
                      {result.status === 'cancelled' &&
                        'This test was cancelled'}
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={result.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
