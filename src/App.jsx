import { useState } from "react";
import { Cards, Chart, Check } from "./components";
import styles from "./App.module.css";
import { fetchPop } from "./api";

export default function App() {
  const [checked, setChecked] = useState([]);

  const handleCheck = async (pref) => {
    if (checked.some((previous) => pref.prefName === previous.prefName)) {
      setChecked(
        checked.filter((previous) => pref.prefName !== previous.prefName)
      );
    } else {
      pref.prefData = await fetchPop(pref.prefCode);
      setChecked([...checked, pref]);
    }
  };

  return (
    <div className={styles.container}>
      <Check handleCheck={handleCheck} />
      <Chart checked={checked} />
      <Cards />
    </div>
  );
}
