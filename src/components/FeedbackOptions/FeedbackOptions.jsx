// import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ onLeaveFeedback }) => {
  console.log(onLeaveFeedback);
  return (
    <div className={css.btnWrapper}>
      <button className={`${css.btn} ${css.good}`} id="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button className={`${css.btn} ${css.neutral}`} id="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button className={`${css.btn} ${css.bad}`} id="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
