// cell1: クリックすると色が変わる
let c1 = document.querySelector('#cell1');
c1.addEventListener('click', changeColor);

// cell2: ダブルクリックすると色が変わる
let c2 = document.querySelector('#cell2');
c2.addEventListener('click', changeColor);

// cell3: マウスポインタが上に来ると色が変わる
let c3 = document.querySelector('#cell3');
c3.addEventListener('click', changeColor);

// cell4: マウスポインタをここで動かすと色が変わる
let c4 = document.querySelector('#cell4');
c4.addEventListener('click', changeColor);

// cell5: マウスポインタがここから離れると色が変わる
let c5 = document.querySelector('#cell5');
c5.addEventListener('click', changeColor);

// cell6: フォーカスすると色が変わる
let c6 = document.querySelector('#cell6');
c6.addEventListener('click', changeColor);

// cell7: フォーカスが外れると色が変わる
let c7 = document.querySelector('#cell7');
c7.addEventListener('click', changeColor);

// cell8: キーボードのキー入力すると色が変わる
let c8 = document.querySelector('#cell8');
c8.addEventListener('click', changeColor);

// cell9: キーボードのキーを押すと色が変わる
let c9 = document.querySelector('#cell9');
c9.addEventListener('click', changeColor);

// cell10: キーボードのキーを離すと色が変わる
let c10 = document.querySelector('#cell10');
c10.addEventListener('click', changeColor);

function changeColor(event) {
	// ランダムな RGB の色
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	// 色のプロパティ値を作る
	let color = 'rgb(' + r + ',' + g + ',' + b + ')';

	let div = event.target;
	div.style.backgroundColor = color;
}

