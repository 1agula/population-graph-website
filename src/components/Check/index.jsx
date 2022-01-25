import { useEffect, useState, Fragment } from "react";
import styles from "./index.module.css";
import { fetchPref } from "../../api";

export default function Check({ handleCheckBox }) {
  const [pref, setPref] = useState();

  useEffect(() => {
    const fetchAPI = async () => {
      setPref(await fetchPref());
    };
    fetchAPI();
  }, []);

  return (
    <ul>
      {pref?.map(({ prefCode, prefName }) => {
        return (
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
        );
      })}
    </ul>
  );
}
