import React from 'react';
import { hoc } from '@core';
import { usePatientsListProps } from './patients-list.props';
import styles from './patients-list.scss';

/**
 * <PatientsList />
 */
const PatientsList = hoc(usePatientsListProps, () => (
  <div className={styles.container}>Patients List</div>
));

export { PatientsList };
