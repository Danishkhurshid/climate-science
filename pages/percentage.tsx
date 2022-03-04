import { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import {scoreData} from '../data/scoreData.json';
import {calcPercentile} from '../utils/percentile';

const Percetange: NextPage  = () => {

  interface percentilesValues {
    percentile: string| number;
    value: number;
  }

  // Percentile code starts.
  let scores: Array<number> = [];

  scoreData.map((entry) => {
    scores.push(entry.score);
  });
  let percentiles: Array<number> = [10, 50, 90];

  // Calculated Percentile Values
  let calculatedPercentileValues: Array<percentilesValues> = [];

  percentiles.map((percentile) => {
    let percent = calcPercentile(scores, percentile);
    calculatedPercentileValues.push({percentile: percentile , value: percent});
  });

 // Percentile code ends.


  return (
      <div className={styles.container}>
    
      <main className={styles.main}>
        {
          calculatedPercentileValues.map((cPercent, key)=>{
            return (
              <div key={key}>
              Percentile {cPercent.percentile} =  value {cPercent.value}
              </div>
            )
          })
        }
      </main>
    </div>
    )
}

export default Percetange;