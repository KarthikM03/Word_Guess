import React, { createRef, useEffect, useState } from 'react'
import RandomData from './Components/RandomData.js'
let c = 0
function Deemo() {
  let inpRef = createRef()
  let [value, setValue] = useState('')
  let [lock, setLock] = useState(false)
  let [wordd, setW] = useState('')
  let [b, setB] = useState({})
  let [score, setScore] = useState(0)
  let [wrong, setWrong] = useState(0)
  let choice = 5
  let [word, a] = RandomData()
  useEffect(() => {
    inpRef.current.focus()
    setW(word)
    setB(a)
  }, [])
  wordd = wordd.toUpperCase()
  let w = 0
  let v = 0
  const next = () => {
    setW(word)
    setB(a)
    setWrong(0)
    setLock(false)
    setValue('')
    let ele = document.getElementById('myDIV')
    ele.innerHTML = ''
    inpRef.current.focus()
  }
  const reset = () => {
    if (wrong === choice) {
      // restart
      setB(a)
      setW(word)
      setWrong(0)
      setScore(0)
      setLock(false)
      setValue('')
      let ele = document.getElementById('myDIV')
      ele.innerHTML = ''
      inpRef.current.focus()
    }
    else {
      // reset
      if (window.confirm('Your Score will be lost if you reset')) {
        setB(a)
        setW(word)
        setWrong(0)
        setScore(0)
        setLock(false)
        setValue('')
        let ele = document.getElementById('myDIV')
        ele.innerHTML = ''
        inpRef.current.focus()
      }
    }
  }
  const checkLen = () => {
    // console.log(wordd)
    if (lock === false && wrong < choice) {
      if (wordd.length === value.length) {
        setValue('')
        inpRef.current.focus()
        const div = document.createElement('div')
        div.setAttribute('id', `div${c}`)
        div.classList.add('gap-2', 'flex')
        document.getElementById('myDIV').appendChild(div)
        if (wordd === value) {
          for (let i = 0; i < value.length; i++) {
            const para = document.createElement("span")
            para.innerText = `${value[i]}`
            para.classList.add('bg-green-400', 'py-2', 'w-6', 'rounded-md', 'shadow-lg', 'shadow-green-500', 'correct')
            document.getElementById(`div${c}`).appendChild(para)
          }
          c += 1
          setLock(true)
          setScore(prev => prev + 1)
          setWrong(0)
          
        }
        else {
          let i = 0
          while (i < wordd.length) {
            if (wordd[w] !== value[v]) {
              if (w > wordd.length) {
                const para = document.createElement("span")
                para.innerText = `${value[i]}`
                para.classList.add('bg-white', 'py-2', 'w-6', 'rounded-md', 'shadow-lg', 'shadow-white-500')
                document.getElementById(`div${c}`).appendChild(para)
                w = 0
                v += 1
                i += 1

              }
              else {
                w += 1
              }

            }
            else if (wordd[w] === value[v]) {
              if (v === w) {
                const para = document.createElement("span")
                para.innerText = `${value[i]}`
                para.classList.add('bg-green-400', 'py-2', 'w-6', 'rounded-md', 'shadow-lg', 'shadow-green-500', 'correct')
                document.getElementById(`div${c}`).appendChild(para)
              }
              else {
                const para = document.createElement("span")
                para.innerText = `${value[i]}`
                para.classList.add('bg-yellow-400', 'py-2', 'w-6', 'rounded-md', 'shadow-lg', 'shadow-yellow-500')
                document.getElementById(`div${c}`).appendChild(para)
              }
              w = 0
              i += 1
              v += 1
            }
          }
          v = 0
          setWrong(prev => prev+1)
        }
        c += 1
      }
      else { alert(`Enter remaining ${wordd.length - value.length} Letters`) }
      
    }else{alert('Click on Next')}
    
  }
  

  return (
    <div className='min-h-screen justify-center items-center flex bg-slate-700'>
      <div className='flex flex-col justify-center gap-3 items-center bg-slate-500 p-3 rounded-lg shadow-xl ' >
        <div className='text-white text-xl w-full text-center m-0 bg-orange-400 py-1 rounded-md'>Topic :- <b>{b.topic} </b></div>
        <div className='text-white text-xl'>It is a <b> {wordd.length} letters </b>word </div>
        <div className={wrong >= choice ? 'hidden' :'flex gap-5'}>
          <input ref={inpRef} id='value' onChange={(e) => { setValue(e.target.value.toUpperCase()) }} maxLength={wordd.length} value={value} type="text" className='border-black border-2 rounded-md' />
          <button className='border-slate-950 rounded-md bg-slate-700 px-3 text-white text-xl active:bg-green-400' onClick={checkLen}>Click</button>
        </div>
        <div className='border h-0 w-full'></div>
        <div className={wrong >= choice ?  `text-2xl text-center min-h-60  p-3 flex flex-col  justify-center items-center text-white`:'hidden'} id='scoreboard'>
            <span>Anwser is <b className='text-green-500 drop-shadow-md'>{wordd}</b></span>
            <span className='bg-blue-400 rounded-md p-1 px-2 my-3'>Your Score is <b >{score}</b></span>
        </div> 
        <div className={wrong < choice ?  `flex flex-col gap-5 text-xl text-center min-h-80  p-3`:'hidden'} id='myDIV'></div>
        <div className='border h-0 w-full'></div>
        <div id='score' className={wrong >= choice ? 'hidden' : `text-white text-l font-semibold flex justify-center items-center gap-5`}>
          <span className='border-orange-500 bg-white text-black border-2 p-1 rounded-md'>Score: {score}</span>
          <span className='border-orange-500 bg-white text-black border-2 p-1 rounded-md'>Choices: {choice - wrong}</span>
          </div>
        <div className='flex gap-5'>
          {lock ?
            <button onClick={next} className='border-slate-950 rounded-md bg-green-600  px-3 text-white text-xl text-center'>Next</button> :
            <button onClick={reset} className='border-slate-950 rounded-md bg-red-600 px-3 active:bg-red-700 text-white text-xl text-center'>{wrong < choice ? 'Reset' : 'Restart'}</button>}
            <button onClick={()=>{if(window.confirm('Did you want to end the GAME?')){setWrong(choice)}}} className={wrong >= choice?'hidden': 'border-slate-950 rounded-md bg-blue-600  px-3 text-white text-xl text-center' }>End game</button>
        </div>
      </div>
    </div>
  )
}

export default Deemo