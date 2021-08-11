function unique(array) {
    return array.reduce((arr, num) => {
        if(arr.indexOf(num) === -1) {
          arr.push(array.find((n) => n === num))          
        }
        return arr;
    }, [])
  }