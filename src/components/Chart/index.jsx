import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './index.module.css';

export default function Chart({ checked }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const dataset = checked.map((arr) => ({
    data: arr.prefData.map(({ value }) => value),
    label: arr.prefName,
    borderColor: arr.borderColor,
    fill: true,
  }));

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
                label: '地域を選択してください',
              },
            ],
      }}
    />
  );

  return <div className={styles.container}>{lineChart}</div>;
}

Chart.propTypes = {
  checked: PropTypes.instanceOf(Array).isRequired,
};
