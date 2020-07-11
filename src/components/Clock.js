import React, { useEffect, useState } from 'react';

export default function Clock() {
    let [time, setTime] = useState(Date.now())

    function humanReadable(seconds) {
        
        let hours = Math.floor((seconds / 3600))
        let h = hours%24
        let minutes = Math.floor(seconds%3600/60)
        let second = seconds -hours*3600 - minutes*60
        return [h, minutes, second].map(x => x<10? '0'+x : x ).join(":")
      }
    //   useEffect(() => {
    //       let int = setInterval(() => {
            
    //         setTime(Date.now())
    //       }, 1000)
    //       return () => {
    //           clearInterval(int)
    //       }
    //   })
return <div>{ humanReadable(time) }</div>
}