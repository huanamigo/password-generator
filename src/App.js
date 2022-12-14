import Options from './components/Options/Options';
import Password from './components/Password/Password';
import styles from './App.module.scss';
import { useState } from 'react';

function App() {
  const [passLength, changeLength] = useState(16);
  const [pass, generatePass] = useState('N@tTheB3stP@ss12');

  return (
    <div className={styles.container}>
      <Password passLength={passLength} pass={pass} />
      <Options
        passLength={passLength}
        changeLength={changeLength}
        generatePass={generatePass}
      />
    </div>
  );
}

export default App;
