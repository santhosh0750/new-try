const getallcountrys = async() => {
    const res = await fetch("https://restcountries.com/v3.1/all")
    const data = await res.json();
    console.log(data);
}
getallcountrys()