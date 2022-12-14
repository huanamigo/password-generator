import React from 'react';
import styles from './Password.module.scss';

const Password = (props) => {
  return (
    <div className={styles.container}>
      <input type="text" name="password" id="" disabled value={props.pass} />
      <button className={styles.copy}>
        <i className="fa-regular fa-copy"></i>
      </button>
    </div>
  );
};

export default Password;
