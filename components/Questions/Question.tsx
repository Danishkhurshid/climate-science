
import { useState } from "react";
import styles from './Question.module.scss';

const Question = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<String>();

   // This function will be triggered when a radio button is selected
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
  };

  return (
      <div className={styles.formContainer}>
      <fieldset>
        <legend className={styles.formHeading}>Which of the below statements about electricity is not true?</legend>
        <p className={styles.formItem}>
          <input
            type="radio"
            name="question"
            value="one"
            id="one"
            onChange={radioHandler}
            className={styles.formRadioButton}
          />
          <span className={styles.radioLook}></span>
          <label htmlFor="one">Electricity is measured in units called watts</label>
        </p>

        <p className={styles.formItem}>
          <input
            type="radio"
            name="question"
            value="two"
            id="two"
            onChange={radioHandler}
            className={styles.formRadioButton}
          />
           <span className={styles.radioLook}></span>
          <label htmlFor="two">Electricity flows at the speed of light</label>
        </p>

        <p className={styles.formItem}>
          <input
            type="radio"
            name="question"
            value="three"
            id="three"
            onChange={radioHandler}
            className={styles.formRadioButton}
          />
          <span className={styles.radioLook}></span>
          <label htmlFor="three">Electricity is a primary energy source</label>
        </p>
      </fieldset>
      </div>
  )
    
}
export default Question;