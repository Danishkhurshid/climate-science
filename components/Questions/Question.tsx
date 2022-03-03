
import { useState, useEffect } from "react";
import styles from './Question.module.scss';

const Question = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<String>();
  const [toggleClass, setToggleClass] = useState<boolean>(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setToggleClass(!toggleClass);
    }, 3000);
    return () => clearInterval(interval);
  }, [toggleClass]);


   // This function will be triggered when a radio button is selected
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
  };

  return (
      <div className={`${styles.formContainer } ${toggleClass && styles.flash}`}>
      <fieldset>
        <legend className={styles.formHeading}>Which of the below statements about electricity is not true?</legend>
        <div className={styles.wrapper}>
          <div className={styles.radio}>
            <input
              type="radio"
              name="question"
              value="one"
              id="one"
            />
            <label className={styles.radioLabel} htmlFor="one">Electricity is measured in units called watts</label>
          </div>

          <div className={styles.radio}>
            <input
              type="radio"
              name="question"
              value="two"
              id="two"
            />
            <label className={styles.radioLabel} htmlFor="two">Electricity flows at the speed of light</label>
          </div>

          <div className={styles.radio}>
            <input
              type="radio"
              name="question"
              value="three"
              id="three"
            />
            <label className={styles.radioLabel} htmlFor="three">Electricity is a primary energy source</label>
          </div>
          </div>
      </fieldset>
      </div>
  )
    
}
export default Question;