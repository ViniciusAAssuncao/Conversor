import React from 'react';
import Converter from './components/Converter';

function App() {
   return (
     <div>
       <h1>Conversor de Moedas</h1>
      <Converter coinA="USD" coinB="BRL" />
      <Converter coinA="BRL" coinB="USD" />
      <Converter coinA="KWD" coinB="BRL" />
      <Converter coinA="BRL" coinB="KWD" />
      <Converter coinA="GBP" coinB="BRL" />
      <Converter coinA="BRL" coinB="GBP" />
      <Converter coinA="EUR " coinB="BRL" />
      <Converter coinA="BRL" coinB="EUR" />
      <Converter coinA="EUR" coinB="USD" />
      <div className="centralizeAttribution">Put on happy face Company&trade;</div>
    </div>
  );
}

export default App;
