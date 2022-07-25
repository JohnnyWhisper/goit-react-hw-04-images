import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onClickLoadMore }) => {
  return (
    <button
      type="button"
      className={styles.Button}
      onClick={() => onClickLoadMore()}
    >
      Load more
    </button>
  );
};
Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;
