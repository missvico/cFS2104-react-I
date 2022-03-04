import {useState, useEffect} from 'react';
import Number from './Number.js';
import Button from './Button.js';

function Counter(){
    const [number, setNumber] = useState(0)

    // useEffect(() => {
    //     console.log(`render - ${number}`);
    //     return () => {
    //         console.log(`unmount - ${number}`);
    //     };
    // },[number]);

    const handleAdd = () => {
        setNumber(number+1)
    }

    const handleSubs = () => {
        setNumber(number-1)
    }

    // const handleAdd = function(){
    //     console.log("AGREGUE UNO")
    // }

    // const personas = ["Victoria","Juan"]
    // // const primeraPersona = personas[0]
    // // const segundaPersona = personas[1]
    // const [primeraPersona, segundaPersona] = personas
    return(
        <section>
            <h1>Contador</h1>
            <Button sign={"-"} handleClick={handleSubs}/>
            <Number currentNumber={number}/>
            <Button sign={"+"} handleClick={handleAdd}/>
        </section>
    )
}

export default Counter;