import React, { useState } from 'react';
import styles from './Options.module.scss';
import './Slider.css';

const Options = (props) => {
  const handleChange = (e) => {
    props.changeLength(e.target.value);
  };

  const handleToggle = (e) => {
    toggleChars({
      ...chars,
      [e.target.name]: e.target.checked,
    });
  };

  const [chars, toggleChars] = useState({
    upper: true,
    lower: true,
    numbers: true,
    symbols: true,
  });

  const characters = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+=',
  };

  const generate = () => {
    //holy shit this took me 2 hours
    let passChars = '';
    Object.entries(chars).forEach((key) => {
      if (key[1]) {
        Object.entries(characters).forEach((k) => {
          if (k[0] === key[0]) {
            passChars += k[1];
          }
        });
      }
    });
    let pass = '';
    for (let i = 0; i < props.passLength; i++) {
      pass += passChars[Math.floor(Math.random() * passChars.length)];
    }

    props.generatePass(pass);
  };

  return (
    <div className={styles.container}>
      <div className={styles.length}>
        <p>Password length</p>
        <p className={styles.bold}>{props.passLength}</p>
      </div>
      <input
        type="range"
        name="length"
        id=""
        min="1"
        max="40"
        value={props.passLength}
        onChange={handleChange}
      />
      <label htmlFor="upper">
        <input
          type="checkbox"
          name="upper"
          id="upper"
          checked={chars.upper}
          onChange={handleToggle}
        />
        Include Uppercase Letters
      </label>

      <label htmlFor="lower">
        <input
          type="checkbox"
          name="lower"
          id="lower"
          checked={chars.lower}
          onChange={handleToggle}
        />
        Include Lowercase Letters
      </label>

      <label htmlFor="numbers">
        <input
          type="checkbox"
          name="numbers"
          id="numbers"
          checked={chars.numbers}
          onChange={handleToggle}
        />
        Include Numbers
      </label>

      <label htmlFor="symbols">
        <input
          type="checkbox"
          name="symbols"
          id="symbols"
          checked={chars.symbols}
          onChange={handleToggle}
        />
        Include Symbols
      </label>

      <button className={styles.generateBtn} onClick={generate}>
        GENERATE
      </button>
    </div>
  );
};

export default Options;
