////////////////////////////////////////////////////////
// 1. イベントハンドラの登録

let b1 = document.querySelector('button#blue');
b1.addEventListener('click', changeH1ColorRed);

//// 以下，練習5-2 でコードを追加


////////////////////////////////////////////////////////
// 2. イベントハンドラ（イベントが発生したら実行する関数）

function changeH1ColorRed() {
	// 見出し h1 要素を検索
	let h1 = document.querySelector('h1');

	// h1 の文字を青色に設定
	h1.style.color = 'blue';
}

function changeBackgroundColorRandom() {
	// ランダムな RGB の色
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	// 色のプロパティ値を作る
	let color = 'rgb(' + r + ',' + g + ',' + b + ')';

	let body = document.querySelector('body');
	body.style.backgroundColor = color;
}

