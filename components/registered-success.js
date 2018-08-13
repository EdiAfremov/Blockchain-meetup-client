import { CSSTransition } from 'react-transition-group';
import Ionicon from 'react-ionicons';
const Success = props => {
  return (
    <div className="success-msg">
      <Ionicon
        icon="ios-checkmark-circle-outline"
        fontSize="100px"
        color="#52c41a"
      />

      <h2>תודה שנרשמת, מספר המקומות מוגבל.</h2>
      <span style="white-space: pre-line">
        אישור להזמנה ולמקום במפגש יישלח אליך כשבוע לפני המועד.
      </span>
    </div>
  );
};

export default Success;
