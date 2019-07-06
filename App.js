import React from 'react';
import './App.css';
import Box from './instructeurs'
import Arsslen from './arsslen.PNG'
import Elyess from './elyess.PNG'
import Oumaima from './oumaima.PNG'

function App() {
  



  const instructors=[
    { 
        img:Arsslen,
        nom:"Arsslen", 
        des:"Petit comme ça <===> efficace comme ça <=============>", 
        butt:"Arsslen"
    },
    {
        img:Elyess, 
        nom:"Elyess", 
        des:"dima i9oul ijew bekri amma iji makhir", 
        butt:"Elyess"
    },
    {
        img:Oumaima, 
        nom:"Oumaima", 
        des:"saybouli khdoudi", 
        butt:"Oumaima"},
  ]
  return (
    <div className="App">
      <div className="buttons">
      {instructors.map((e,i) => <Box 
          
         name={e.butt}
         img={e.img} 
         nom={e.nom}
         des={e.butt}
        />
        )}
        

     
      </div>
    </div>
  );
}

export default App;
