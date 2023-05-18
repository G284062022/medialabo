console.log('===== 要素の検索 =====');
let p1 = document.querySelector('p#strawberry');	// p#strawberry(id=straberryのp要素)を検索
console.log(p1);									// 検索結果のp要素のオブジェクトを表示
console.log(p1.textContent);						// p要素の内容（テキスト）を表示

console.log('----------------------');
let ps2 = document.querySelectorAll('p.cands');		// p.cands(class=candsのp要素)を全て検索
for (let p2 of ps2) {								// 検索結果のp要素それぞれに対して繰り返し..
	console.log(p2.textContent);					// 要素のテキストを表示
}

console.log('----------------------');
let ps3 = document.querySelectorAll('p');			// p要素を全て検索
for (let p3 of ps3) {								// 検索結果のp要素それぞれに対して繰り返し..
	console.log(p3.textContent);					// 要素のテキストを表示
}

//// テキストの変更
let p4 = document.querySelector('p#yacht');			// p#yacht 要素を検索
p4.textContent = '夜更かししないでね';				// 要素のテキストを設定

let s5 = document.querySelector('span#solt');		// span#solt 要素を検索
s5.textContent = 'あざらし';						// 要素のテキストを設定

//// CSSプロパティの変更
let p6 = document.querySelector('p#rocket');		// p#rocket を検索
p6.style.color='blue';								// 要素の color プロパティを設定
p6.style.backgroundColor='#ffaf2f';					// 要素の background-color プロパティを設定

//// 新しい要素の追加（その1）
let h2 = document.querySelector('h2#addition');		// h2#addition 要素を検索

let p = document.createElement('p');				// 新しい p要素を作成
p.textContent = '七面鳥';							// p要素のテキストを設定

h2.insertAdjacentElement('afterend', p);			// p要素をh2要素の直後に追加

//// 新しい要素の追加（その2）
let div = document.querySelector('div#sarukani');		// div#sarukani 要素を検索

let beeLink = document.createElement('a');			// 新しい a要素を作成
beeLink.textContent = 'ハチ';						// a要素のテキストを設定
beeLink.setAttribute('href', 'https://ja.wikipedia.org/wiki/ハチ');
													// a要素の src属性を設定

div.insertAdjacentElement('beforeend', beeLink);	// a要素を div要素の中の最後に追加

//// 要素の削除
let w = document.querySelector('li#whale');			// li#whale 要素を検索
w.remove();											// 要素を削除

