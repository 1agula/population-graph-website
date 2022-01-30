import { useState } from 'react';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';
import styles from './index.module.css';

export default function CardComponent({ pref }) {
  const { prefCode, prefName, prefData } = pref;

  const [selectedYear, setSelectedYear] = useState(2020);

  return (
    <div key={prefCode} className={styles.card}>
      <div className={styles.cardTop}>
        <h3>{prefName}</h3>
      </div>
      <ul className={styles.cardBody}>
        {prefData.map((detail) => (
          <li key={detail.label}>
            {detail.label}: &nbsp;
            <CountUp
              start={0}
              duration={1}
              separator=","
              end={
                // セレクトボックスで指定された年の詳細人口数を取得する
                detail.data.find(({ year }) => year === selectedYear).value
              }
            />
          </li>
        ))}
      </ul>
      <select
        defaultValue={2020}
        className={styles.selecter}
        name="years"
        id="years"
        onChange={(e) => {
          setSelectedYear(parseInt(e.target.value, 10));
        }}
      >
        {prefData[0].data.map(({ year }) => (
          <option value={year} key={year}>
            {`${year}年`}
          </option>
        ))}
      </select>
    </div>
  );
}

CardComponent.propTypes = {
  pref: PropTypes.instanceOf(Object).isRequired,
};
