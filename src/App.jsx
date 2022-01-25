import { useState } from "react";
import { Cards, Chart, Check } from "./components";
import styles from "./App.module.css";
import { fetchPop } from "./api";

export default function App() {
  const [checked, setChecked] = useState([]);

  //random color for chart border
  const getRandomColor = () => {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleCheckBox = async (pref) => {
    if (checked.some((previous) => pref.prefName === previous.prefName)) {
      setChecked(
        checked.filter((previous) => pref.prefName !== previous.prefName)
      );
    } else {
      pref.prefData = await fetchPop(pref.prefCode);
      pref.borderColor = getRandomColor();
      setChecked([...checked, pref]);
    }
  };

  return (
    <div className={styles.container}>
      <Chart checked={checked} />
      <Check handleCheckBox={handleCheckBox} />
      <Cards />
    </div>
  );
}
