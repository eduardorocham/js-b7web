function info(obj) {
    let novasInfo = {
        ...obj,
        status: 0,
        data: 12
    }

    return novasInfo;
}

console.log(info({nome:'Boniey', sobrenome:'Lacerda'}));