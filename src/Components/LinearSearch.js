function LinearSearch() {
    let word = 'tree'
    let key = 'tear'
    let j = 0
    let k = 0
    let i = 0
    if (word === key) {
        console.log("key Matched...")
    }

    else {
        while (i < word.length) {
            if (word[j] !== key[k]) {
                if (j > word.length) {
                    console.log(i + 1, ' ', key[k], 'is not in the list')
                    k += 1
                    j = 0
                    i += 1
                }
                // console.log('Not matched',j,k)
                else { j += 1 }
            }
            else if (word[j] === key[k]) {
                if (j === k) {
                    console.log(i + 1, ' ', 'index Matched')
                    k += 1
                    j = 0
                    i += 1
                }
                else {
                    console.log(i + 1, ' ', 'index not Mathed')
                    k += 1
                    j = 0
                    i += 1
                }

            }
        }
    }

}

LinearSearch()