// src/components/LoadingSpinner.jsx
import React from 'react';
import styles from './spinner.module.css'; // Ensure you create appropriate CSS for the spinner



const LoadingSpinner = () => {

  // <div className={styles.allContentContainer}>
  //    <div className={styles.loadingSpinner}>
  //        <div className={styles.spinner}></div>
  //     </div>

  //     <div className={styles.loadingSpinner}>
  //        <div className={styles.spinner}></div>
  //     </div>
  // </div>


  // <div className={styles.allContentContainer}>
  //     {[...Array(6)].map((_, index) => (
  //       <div key={index} className={styles.loadingCard}>
  //         <div className={styles.spinner}></div>
  //       </div>
  //     ))}
  //   </div>

  return (
    <div className={styles.allContentContainer}>
      {[...Array(10)].map((_, index) => (
        <div key={index} className={styles.loadingCard}>
          <div className={`${styles.shimmerBlock} ${styles.imagePlaceholder} ${styles.shimmer}`}></div>
          <div className={`${styles.shimmerBlock} ${styles.titlePlaceholder} ${styles.shimmer}`}></div>
          <div className={`${styles.shimmerBlock} ${styles.textPlaceholder} ${styles.shimmer}`}></div>
          <div className={`${styles.shimmerBlock} ${styles.textPlaceholder} ${styles.shimmer}`}></div>
          <div className={`${styles.shimmerBlock} ${styles.buttonPlaceholder} ${styles.shimmer}`}></div>
        </div>
      ))}
    </div>
  );
 
}

export default LoadingSpinner;

