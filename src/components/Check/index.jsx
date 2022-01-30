import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchPref } from '../../api';
import styles from './index.module.css';

export default function Check({ handleCheckBox }) {
  const [pref, setPref] = useState();

  useEffect(() => {
    const fetchAPI = async () => {
      setPref(await fetchPref());
    };
    fetchAPI();
  }, []);

  return (
    <ul className={styles.container}>
      {pref?.map(({ prefCode, prefName }) => (
        <li key={prefCode}>
          <input
            id={prefCode}
            name={prefCode}
            type="checkbox"
            onChange={() => {
              handleCheckBox({ prefCode, prefName });
            }}
          />
          <label htmlFor={prefCode}>{prefName}</label>
        </li>
      ))}
    </ul>
  );
}

Check.propTypes = {
  handleCheckBox: PropTypes.func.isRequired,
};
