let b = document.querySelector('#bt');
b.addEventListener('click', bt);

// 通信を開始する処理
function bt() {
    var selectElement = document.getElementById('lang');
    var selectedOptionId = selectElement.options[selectElement.selectedIndex].id;
    console.log(selectedOptionId); 

    // URL を設定
    let url = `https://www.nishita-lab.org/web-contents/jsons/openweather/${selectedOptionId}.json`;

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    document.getElementById("name").innerHTML = data.name;
    document.getElementById("coord.lon").innerHTML = data.coord.lon;
    document.getElementById("coord.lat").innerHTML = data.coord.lat;
    document.getElementById("weather.description").innerHTML = data.weather[0].description;
    document.getElementById("main.temp_min").innerHTML = data.main.temp_min;
    document.getElementById("main.temp_max").innerHTML = data.main.temp_max;
    document.getElementById("main.humidity").innerHTML = data.main.humidity;
    document.getElementById("wind.speed").innerHTML = data.wind.speed;
    document.getElementById("wind.deg").innerHTML = data.wind.deg;
    

}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}
