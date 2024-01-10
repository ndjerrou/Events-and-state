import { useState } from 'react';
import Counter from './components/Counter';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const handleClick = () => {
    alert('tu viens de cliquer sur le bouton');
  };

  //   let theme = 'dark';
  //   console.log('top level theme = ', theme);

  const calculateBgColor = () => {
    return theme === 'dark' ? 'green' : 'gold';
  };

  //   const handleTheme = () => {
  //     if (theme === 'dark') {
  //       theme = 'light';
  //     } else {
  //       theme = 'dark';
  //     }

  //     // console.log('handletheme fired : ', theme);
  //   };
  const handleTheme = () => {
    setTheme(prevState => {
      if (theme === 'dark') {
        return 'light';
      }
      return 'dark';
    });
  };

  return (
    <>
      <h1
        style={{
          backgroundColor: calculateBgColor(),
        }}
      >
        Un peu d'interaction !!
      </h1>
      <button onClick={handleClick}>click me</button>
      <button onMouseOver={() => console.log('on mouse over fired')}>
        come here
      </button>
      <button onClick={handleTheme}>Change bgColor du h1</button>

      {/* Create a component named Counter */}
      {/* It should display un compteur et deux boutons */}
      {/* bouton + pour incrémenter */}
      {/* bouton - pour in décrémenter */}

      <Counter />
    </>
  );
};

export default App;

// document.querySelector('unelement').addEventListener('click', () => {

// })
