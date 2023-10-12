import styles from './PercentProgress.module.css';

interface PercentProgressProps {
  progress: number;
}

function PercentProgress({ progress }: PercentProgressProps) {
  return <span className={styles.pp__percent}>{progress}%</span>;
}

export default PercentProgress;
