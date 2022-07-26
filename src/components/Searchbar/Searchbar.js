import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      return toast.error('Enter something');
    }
    onSubmit(searchQuery);
    setSearchQuery(event.currentTarget.value);
  };

  const handleInput = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <button type="submit" className={styles.Button}>
          <BsSearch style={{ width: 20, height: 20 }} />
        </button>

        <input
          className={styles.Input}
          type="text"
          value={searchQuery}
          onChange={handleInput}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
