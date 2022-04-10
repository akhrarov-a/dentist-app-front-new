import React from 'react';
import { hoc } from '@core';
import { usePatientProps } from './patient.props';
import styles from './patient.scss';

/**
 * <Patient />
 */
const Patient = hoc(usePatientProps, ({ id }) => (
  <div className={styles.container}>Patient with id {id}</div>
));

export { Patient };
