import { useState } from "react";
import styles from "./index.module.css";

export default function Cards({ prefDetail }) {
  const [selectedYear, setSelectedYear] = useState(2020);

  return (
    <div className={styles.container}>
      {prefDetail.map((pref) => {
        return (
          <div key={pref.prefCode} className={styles.card}>
            <div className={styles.cardTop}>
              <h3>{pref.prefName}</h3>
            </div>
            <ul className={styles.cardBody}>
              {pref.prefData.map((detail) => {
                return (
                  <li key={detail.label}>
                    {detail.label}: &nbsp;
                    <span>
                      {detail.data
                        .find(({ year }) => {
                          return year === selectedYear;
                        })
                        .value.toLocaleString("en-US")}
                    </span>
                  </li>
                );
              })}
            </ul>
            <select
              className={styles.selecter}
              name="years"
              id="years"
              onChange={(e) => {
                setSelectedYear(parseInt(e.target.value));
              }}
            >
              {pref.prefData[0].data.map(({ year }) => {
                if (year === 2020) {
                  return (
                    <option value={year} key={year} selected>
                      {year + "年"}
                    </option>
                  );
                } else {
                  return (
                    <option value={year} key={year}>
                      {year + "年"}
                    </option>
                  );
                }
              })}
            </select>
          </div>
        );
      })}
    </div>
  );
}
