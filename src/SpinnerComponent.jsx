// src/components/LoadingSpinner.jsx
import React from 'react';
import styles from './spinner.module.css'; // Ensure you create appropriate CSS for the spinner



const LoadingSpinner = () => (
  <div className={styles.loadingSpinner}>
    <div className={styles.spinner}></div>
  </div>
);

export default LoadingSpinner;

