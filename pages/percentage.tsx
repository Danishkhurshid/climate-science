import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import {scoreData} from '../data/scoreData.json';
import {calcPercentile} from '../utils';
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../firebase/clientApp";


const Percetange: NextPage  = () => {

  // Percentile code starts.
  let scores: Array<number> = [];

  scoreData.map((entry) => {
    scores.push(entry.score);
  });
  let percentiles: Array<number> = [10, 50, 90];

  // Calculated Percentile Values
  let calculatedPercentileValues: Array<number> = [];

  percentiles.map((percentile) => {
    let percent = calcPercentile(scores, percentile);
    calculatedPercentileValues.push({percentile: percentile , value: percent});
  });

 // Percentile code ends.



  // Firebase code starts
  // Currently failing to connect to firebase.
  const [teamScore, teamScoreLoading, teamScoreError] = useCollection(
    firebase.firestore().collection("teamScore"),
    {}
  );


  if(!teamScoreLoading && teamScore) {
    teamScore.docs.map((doc) => console.log(doc.data()));
  }
  // Firebase ends.

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