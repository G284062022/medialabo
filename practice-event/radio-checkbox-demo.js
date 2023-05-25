// 1. イベントハンドラの登録

let b = document.querySelector('#answer');
b.addEventListener('click', printAnswer);


// 2. イベントハンドラの定義

function printAnswer() {
	// name 属性が year の input 要素をすべて検索
	let rs = document.querySelectorAll('input[name="year"]');
	for (let r of rs) {
		if (r.checked) {		// r が選択されていたら
			console.log(r.value);
		}
	}

	// name 属性が hobby の input 要素をすべて検索
	let cs = document.querySelectorAll('input[name="hobby"]');
	for (let c of cs) {
		if (c.checked) {
			console.log(c.value);
		}
	}
}
