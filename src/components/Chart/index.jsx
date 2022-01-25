import styles from "./index.module.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function Chart({ checked }) {
  let dataset = checked.map((arr) => {
    return {
      data: arr.prefData.map(({ value }) => value),
      label: arr.prefName,
      borderColor: arr.borderColor,
      fill: true,
    };
  });

  const lineChart = (
    <Line
      data={{
        labels: checked.length
          ? checked[0].prefData.map(({ year }) => year)
          : [1960, 2045],
        datasets: dataset.length
          ? dataset
          : [
              {
                label: "地域を選択してください",
              },
            ],
      }}
    />
  );

  return <div className={styles.container}>{lineChart}</div>;
}
