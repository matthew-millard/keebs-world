import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/pro-light-svg-icons';
import styles from './Account.module.css';

function Account() {
  return (
    <div className={styles.account}>
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
}

export default Account;
