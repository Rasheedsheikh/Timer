import React, { useEffect ,useState } from 'react'

export const Timer = () => {
    const[seconds, setSeconds]=useState(0)
    const[minutes ,setMinutes]=useState(0)

    let timer;
    useEffect(()=>{
     
        timer=setInterval(()=>{

            setSeconds(seconds+1)
            // setMinutes(minutes+1)

            if(seconds>59){
                setMinutes(minutes+1)
                setSeconds(0)
            }
        },1000);
        return ()=>clearInterval(timer)

    });

    const restart =()=>{
      setSeconds(0)
      setMinutes(0)
    }
    const stop=()=>{
      clearInterval(timer)
    }
    
  return (
    <div>
<h1>Time</h1>
<h1>{minutes}:{seconds}</h1>

<button className='restart' onClick={restart}>Restart</button>
<button className='stop' onClick={stop}>Stop</button>
</div>

    
  )
}
