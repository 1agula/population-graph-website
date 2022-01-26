import styles from "./index.module.css";
import CardComponent from "../CardComponent";

export default function Cards({ prefDetail }) {
  return (
    <div className={styles.container}>
      {prefDetail.map((pref) => {
        return <CardComponent key={pref.prefCode} pref={pref} />;
      })}
    </div>
  );
}
