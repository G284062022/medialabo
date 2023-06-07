let b = document.querySelector('#button');
b.addEventListener('click', button);

// 通信を開始する処理
function button() {
    var selectElement = document.getElementById('1');
    var selectedOptionId = selectElement.options[selectElement.selectedIndex].id;

    // URL を設定
    let url = `https://www.nishita-lab.org/web-contents/jsons/hotpepper/${selectedOptionId}.json`;
    
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
    document.getElementById("access").innerHTML = data.results.shop[0].access;
    document.getElementById("address").innerHTML = data.results.shop[0].address;
    document.getElementById("budget.name").innerHTML = data.results.shop[0].budget.name;
    document.getElementById("catch").innerHTML = data.results.shop[0].catch;
    document.getElementById("genre.name").innerHTML = data.results.shop[0].name;
    document.getElementById("name").innerHTML = data.results.shop[0].name;
    document.getElementById("open").innerHTML = data.results.shop[0].open;
    document.getElementById("station_name").innerHTML = data.results.shop[0].station_name;
    document.getElementById("subgenre_name").innerHTML = data.results.shop[0].sub_genre.name;

}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}
