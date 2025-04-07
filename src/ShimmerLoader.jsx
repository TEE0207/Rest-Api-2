// src/components/LoadingSpinner.jsx
import React from 'react';
import styles from './shimmer.module.css'; // Ensure you create appropriate CSS for the spinner



const ShimmerLoader = () => {

 

  return (
    <div className={styles.allContentContainer}>
      {[...Array(8)].map((_, index) => (
        <div key={index} className={styles.loadingCard}>
          <div className={`${styles.imageContainer} ${styles.shimmer}`}></div>

          <div className={styles.titleAndDescriptionContainer}>
            <div className={`${styles.title} ${styles.shimmer}`}></div>
            <div className={`${styles.textLine} ${styles.shimmer}`}></div>
            <div className={`${styles.textLine} ${styles.shimmer}`}></div>
            <div className={`${styles.textLine} ${styles.shimmer}`}></div>
          </div>
        </div>
      ))}
    </div>
  );
 
}

export default ShimmerLoader;

