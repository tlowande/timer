
let array = process.argv.slice(2)

// let time = []
// for(let i = 0; i < array.length; i++){
// time.push(Number(array[i]))
// }

let time = array.map(each => Number(each))


  for (let i = 0; i<time.length; i++){
    if (time[i] < 0 || isNaN(time[i])){
      null;
    } else {
     setTimeout(()=> {process.stdout.write('\x07');}, time[i] * 1000)
    }
}
