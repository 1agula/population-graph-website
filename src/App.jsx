import { useState } from "react";
import { Header, Cards, Chart, Check } from "./components";
import styles from "./App.module.css";
import { fetchPop } from "./api";

export default function App() {
  const [checked, setChecked] = useState([]);
  const [prefDetail, setprefDetail] = useState([]);

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
      setprefDetail(
        prefDetail.filter((previous) => pref.prefName !== previous.prefName)
      );
    } else {
      const prefData = await fetchPop(pref.prefCode);

      setChecked([
        ...checked,
        { ...pref, prefData: prefData[0].data, borderColor: getRandomColor() },
      ]);
      setprefDetail([...prefDetail, { ...pref, prefData: prefData }]);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <Chart checked={checked} />
      <Check handleCheckBox={handleCheckBox} />
      <Cards prefDetail={prefDetail} />
    </div>
  );
}
