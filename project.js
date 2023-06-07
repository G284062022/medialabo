let b = document.querySelector('#bt');
b.addEventListener('click', bt);

// 通信を開始する処理
function bt() {
    var selectElement = document.getElementById('lang');
    var selectedOptionId = selectElement.options[selectElement.selectedIndex].id;
    console.log(selectedOptionId); 

    // URL を設定
    let url = `https://www.nishita-lab.org/web-contents/jsons/nhk/${selectedOptionId}.json`;

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

    document.getElementById("act").innerHTML = data.act;
    document.getElementById("content").innerHTML = data.content;
    document.getElementById("subtitle").innerHTML = data.subtitle;
    document.getElementById("title").innerHTML = data.title;
    document.getElementById("service.name").innerHTML = data.service.name;
    document.getElementById("end_time").innerHTML = data.end_time;
    document.getElementById("start_time").innerHTML = data.start_time;

}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}
