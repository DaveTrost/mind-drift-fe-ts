import * as React from 'react';
const styles = require('./Progress.css');

export interface IProgressProps { 
  now: number; 
}

/* Helpful tutorial on progress bars: 
https://medium.com/@ItsMeDannyZ/how-to-build-a-progress-bar-with-react-8c5e79731d1f
https://codepen.io/DZuz14/pen/oqeMpY?editors=0100
*/
const Progress = ({ now }: IProgressProps) => (
  <div className={styles.ProgressBar}>
    <div className={styles.ProgressFill} style={{ width: `${now}%` }} />
  </div>
);

export default Progress;
