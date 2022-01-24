import { useEffect, useState, Fragment } from "react";
import styles from "./index.module.css";
import { fetchPref } from "../../api";
export default function Check() {
  const [pref, setPref] = useState();
  useEffect(() => {
    const fetchAPI = async () => {
      setPref(await fetchPref());
    };
    fetchAPI();
  }, []);
  return (
    <div className={styles.container}>
      {pref?.map((data) => {
        return (
          <Fragment key={data}>
            <label htmlFor={data}>{data}</label>
            <input name={data} type="checkbox" />
          </Fragment>
        );
      })}
    </div>
  );
}
