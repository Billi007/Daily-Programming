let counter = 0;
const getData = () => {
    // calls an API and gets the data
    console.log("Fetching data...", counter++);
}

const betterFun = (fn, d) => {
    let timer;
    return function(){
    clearTimeout(timer);
    timer = setTimeout(() => getData(),d)}
}

const debouncedFunc =  betterFun(getData, 300) 