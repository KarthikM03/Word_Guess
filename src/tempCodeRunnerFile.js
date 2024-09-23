function Deemo(word) {
  let inpRef = createRef()
  useEffect(() => {
    inpRef.current.focus()
  })
  let [value, setValue] = useState('')
  let wordd = 'karthik'
  let w = 0
  let v = 0
  let c = 0
  const checkLen = () => {
    if (wordd.length === value.length) {
      if (wordd === value) {
        const div = document.createElement('div')
        div.setAttribute('id', `div${c}`)
        div.classList.add('gap-2', 'flex')
        document.getElementById('myDIV').appendChild(div)
        for (let i = 0; i < value.length; i++) {
          const para = document.createElement("span")
          para.innerText = `${value[i]}`
          para.classList.add('bg-green-500', 'p-2', 'w-6', 'rounded-md', 'shadow-lg', 'shadow-green-500')
          document.getElementById(`div${c}`).appendChild(para)
        }
        c += 1
      }
      else {
        const div = document.createElement('div')
        div.setAttribute('id', `div${c}`)
        div.classList.add('gap-2', 'flex')
        document.getElementById('myDIV').appendChild(div)
        let i = 0
        while (i < wordd.length) {
          if(wordd[w]!== value[v]){
            if(w<wordd.length){
              w=0
              v+=1
            }
            else{
              w+=1
            }

          }
          else if(wordd[w]===value[v]){
            if(v===w){
              console.log('indexed Matched')

            }
            else{
              console.log('index not matched')
            }
          }
          }
        }
        c += 1
      }
    
    else { alert(`Enter remaining ${wordd.length - value.length} Letters`) }
  }

  return (
    <div >
      <div>It is a <b> {wordd.length} letters </b>word</div>
      <input ref={inpRef} onChange={(e) => { setValue(e.target.value) }} maxLength={wordd.length} value={value} type="text" className='border-black border-2' />
      <button onClick={checkLen}>Click</button>
      <div className='flex flex-col gap-5 my-5' id='myDIV'>
      </div>
    </div>
  )
}