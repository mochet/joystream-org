/* eslint-disable max-len */

import React from 'react';
import { object } from 'prop-types';

import WidgetHeading from '../../WidgetHeading';
import Feature from '../../../Feature';

import { ReactComponent as SuccessIcon } from '../../../../assets/svg/dashboard/success.svg';
import { ReactComponent as ErrorIcon } from '../../../../assets/svg/dashboard/error.svg';

import { columns, getData } from './data';

import './style.scss';

const propTypes = {
  dynamicData: object,
};

const Positioning = ({ dynamicData }) => {
  const data = getData(dynamicData);

  const fdvsRowData = data.find(val => val.indicator === 'FDV');
  const fdvs = Object.values(fdvsRowData || {}).filter(val => typeof val === 'number');

  const getFdvBarHeight = fdv => {
    const range = fdv >= 1000 ? 'over1B' : fdv >= 100 ? 'between100MAnd1B' : 'under100M';
    const fdvsInRange = fdvs.filter(fdv => {
      switch (range) {
        case 'over1B':
          return fdv >= 1000;
        case 'between100MAnd1B':
          return fdv >= 100 && fdv < 1000;
        default:
          return fdv < 100;
      }
    });
    const maxFdvInRange = Math.max(...fdvsInRange);
    // Assume vals > 1B max-height: 100%; 100M <= vals < 1B max-height: 50% and vals < 100M max-height: 25%
    const rangeMaxPercentage = range === 'over1B' ? 100 : range === 'between100MAnd1B' ? 50 : 25;

    return (fdv * rangeMaxPercentage) / maxFdvInRange;
  };

  const renderCell = cellData => {
    switch (typeof cellData) {
      case 'string':
        return cellData;
      case 'number':
        const height = `${getFdvBarHeight(cellData)}%`;
        return (
          <div
            className="dashboard-comparison-positioning__bar"
            style={{
              height,
              ...(cellData < 100
                ? {
                    paddingBlock: 0,
                    alignItems: 'center',
                  }
                : {}),
            }}
          >
            {cellData > 1000 ? `$${Math.round(cellData / 1000)}B` : `$${cellData}M`}
          </div>
        );
      case 'boolean':
        return cellData ? <SuccessIcon /> : <ErrorIcon />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-comparison-positioning">
      <Feature disabled>
        <WidgetHeading heading="Positioning" termDefinitionKey="positioning" />
      </Feature>
      <div className="dashboard-comparison-positioning__table-wrapper">
        <table className="dashboard-comparison-positioning__table">
          <thead className="__head">
            <tr className="dashboard-comparison-positioning__table-row">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="dashboard-comparison-positioning__table-cell dashboard-comparison-positioning__table-head-cell"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="dashboard-comparison-positioning__table-body">
            {data.map((rowData, index) => (
              <tr key={index} className="dashboard-comparison-positioning__table-row">
                {columns.map((column, index) => {
                  return (
                    <td
                      key={index}
                      className="dashboard-comparison-positioning__table-cell dashboard-comparison-positioning__table-body-cell"
                    >
                      {renderCell(rowData[column.accessorKey])}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Positioning.propTypes = propTypes;

export default Positioning;
