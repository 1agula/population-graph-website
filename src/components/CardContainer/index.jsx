import PropTypes from 'prop-types';
import CardComponent from '../CardComponent';
import styles from './index.module.css';

export default function CardContainer({ prefDetail }) {
  return (
    <div className={styles.container}>
      {prefDetail.map((pref) => (
        <CardComponent key={pref.prefCode} pref={pref} />
      ))}
    </div>
  );
}

CardContainer.propTypes = {
  prefDetail: PropTypes.instanceOf(Array).isRequired,
};
