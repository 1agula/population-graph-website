import { useEffect, useState, Fragment } from "react";
import styles from "./index.module.css";
import { fetchPref } from "../../api";

export default function Check({ handleCheck }) {
  const [pref, setPref] = useState();

  useEffect(() => {
    const fetchAPI = async () => {
      setPref(await fetchPref());
    };
    fetchAPI();
  }, []);

  return (
    <div className={styles.container}>
      {pref?.map(({ prefCode, prefName }) => {
        return (
          <Fragment key={prefCode}>
            <input
              name={prefCode}
              type="checkbox"
              onChange={() => {
                handleCheck({ prefCode, prefName });
              }}
            />
            <label htmlFor={prefCode}>{prefName}</label>
          </Fragment>
        );
      })}
    </div>
  );
}
