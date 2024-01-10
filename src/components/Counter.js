import { useState } from 'react';

const Counter = () => {
  //   let counter = 0;

  const [counter, setCounter] = useState(0);
  console.log('render'); // why is it synchro !!!!! <----

  const handleIncrement = () => {
    // console.log('+1 event');
    // counter = counter + 1;
    // console.log('counter +1 = ', counter);

    // counter++;

    setCounter(prevState => prevState + 1); // operation asynchrone
  };

  return (
    <>
      <div
        style={{
          marginTop: '100px',
        }}
      >
        Counter :{' '}
        <span
          style={{
            backgroundColor: counter < 0 ? 'purple' : 'peachpuff',
            padding: '10px',
          }}
        >
          {counter}
        </span>
      </div>
      <div>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
      </div>
    </>
  );
};

export default Counter;
