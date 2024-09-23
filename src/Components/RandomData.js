import {Data} from "../Assets/Data"
function RandomData() {
    // let words = Data
    // let k = Math.floor(Math.random()*words.length)
    // let kk = words[k]
     // console.log(kk)

    let word1 = Data
    let a = Math.floor(Math.random()*word1.length)
    // console.log('A',a)
    let b = word1[a]
    // console.log('B',b)
    let c=  Math.floor(Math.random()*b.words.length)
    // console.log('C',c)
    let word = b.words[c]
    // console.log('Word',word)
    // console.log('word is',word,'and topic is ',b.topic)
    return [word,b]
}

export default RandomData