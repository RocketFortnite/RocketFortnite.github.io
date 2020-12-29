
const getIP = async() => {

    await fetch('http://ip-api.com/json/')
    .then(res => res.json())
    .then(res => console.log(res))
}

getIP();