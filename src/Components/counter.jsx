 //                                                 ===> counter with use state and use effect
// import { useEffect, useState } from 'react'
// //nom d'un composant doit commencer par une majuscule
// //useState est un hook qui permet de gérer l'état d'un composant fonctionnel
// //useEffect est un hook qui  sert à exécuter du code secondaire (side effects) lors un composant est mis a jour
// export default function Counter() {
//     const [count, setCount] = useState(0);
//  const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);
//   const reset = () => setCount(0);
// useEffect(() => {
//     console.log(`Le compteur a été mis à jour : ${count}`);
//   }, [count]); 

//   return (
//     <div>
//       <p>Compteur : {count}</p>
//       <button onClick={increment}>+1</button>
//         <button onClick={decrement}>-1</button>
//         <button onClick={reset}>Reset</button>
//     </div>
//   )
// }
 //                                                 ===> counter with props and state to make it more dynamic 

 import {useState} from 'react'
 export default function counter({ initialCount = 5, step = 2 }) {
    const [count, setCount] = useState(initialCount);
    const increment = () => setCount(prev => prev + step);
  const decrement = () => setCount(prev => prev - step);
  const reset = () => setCount(initialCount);
   return (
     <div>
        <p>Compteur : {count}</p>
      <button onClick={increment}>+{step}</button>
      <button onClick={decrement}>-{step}</button>
      <button onClick={reset}>Reset</button>
     </div>
   )
 }
 