import React, { useEffect } from 'react';
import styles from './SwipeLayer.module.css';

interface SwipeLayerProps {
  onFinish?: () => void;
}

export const SwipeLayer: React.FC<SwipeLayerProps> = ({ onFinish }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish && onFinish();
    }, 2200);
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return <div className={styles.layer} aria-hidden />;
};


