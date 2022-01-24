import styles from "./index.module.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function Chart({ checked }) {
  console.log(checked);

  const dataset = checked.map((arr) => {
    return {
      data: arr.prefData.map(({ value }) => value),
      label: arr.prefName,
      borderColor: "#3333ff",
      fill: true,
    };
  });

  const lineChart = checked[0] && (
    <Line
      data={{
        labels: checked[0].prefData.map(({ year }) => year),
        datasets: dataset,
      }}
    />
  );

  return <div className={styles.container}>{lineChart}</div>;
}
