import data from './data/data';
import './App.css';
import { useState } from 'react';

function App() {
  const [ index, setIndex ] = useState(0);

  const checkNumber = (number) => {
    if( number > data.length - 1 ) {
      return 0;
    }
    if( number < 0 ) {
      return data.length - 1;
    } 
    return number;
  }

  const prevReview = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex)
    });
  }
  
  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex)
    });
  }

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if( randomNumber === index ){
      randomNumber = index + 1;
    }
    console.log(randomNumber);
    setIndex(checkNumber(randomNumber));
  }
  return (
    <>
      <h1>Reviews</h1>
      <div className="reviews-wrapper">
        <button className='btn-prev' onClick={ prevReview }> Previous </button>
        <ul className='reviews-wrapper'>
          {
            <li key={data[index].id}>
              <img src={data[index].image} alt={data[index].name} />
              <h3>{data[index].name}</h3>
              <span>{data[index].job}</span>
              <p>{data[index].text}</p>
            </li>
          }
        </ul>
        <button className='btn-prev' onClick={ nextReview }> Next </button>
      </div>

      <button className='btn-random' onClick={ randomReview }> Random Review </button>
    </>
  );
}

export default App;
