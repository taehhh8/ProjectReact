import request from "request";
const my_coin ="BTC"

request({
    method:'GET',
    uri:'https://api.bithumb.com/public/ticker/' + my_coin
},(err, res, result) => {
    if(err) {
        console.log(err);
        return;
    }
     // console.log(result["data"]) // 문자열의 값이기 때문에 object값으로 바꿔줘야함
    const coin_info = JSON.parse(result) //JSON 형식
    console.log(coin_info["data"])  
})