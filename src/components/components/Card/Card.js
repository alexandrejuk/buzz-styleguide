import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

/**
 * Card Component
 */
const Card = ({ children, title }) => (
  <div
    className={styles.card}
  >
    {title && <div className={styles.title}>{title}</div>}
    <div className={styles.content}>
      {children}
    </div>
  </div>
);

Card.propTypes = {
  /** Card content */
  children: PropTypes.node.isRequired,
  /** Card title */
  title: PropTypes.string,
};

export default Card;
