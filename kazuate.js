let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 1;

function hantei() {
    let yoso = parseInt(document.getElementById("guess").value);
    document.getElementById("kaisu").textContent = kaisu;
    document.getElementById("answer").textContent = yoso;

    if(kaisu < 4){
        if(kaisu === 3){
            if(yoso === kotae){
                document.getElementById("result").textContent = '正解です．おめでとう!';
                kaisu = 4;
            }else{
                document.getElementById("result").textContent = 'まちがい．残念でした答えは' + kotae + 'です．';
            }
        }else{
            if(yoso === kotae){
                document.getElementById("result").textContent = '正解です．おめでとう!';
                kaisu = 4;
            }else if(yoso < kotae){
                document.getElementById("result").textContent = 'まちがい．答えはもっと大きいですよ';
            }else{
                document.getElementById("result").textContent = 'まちがい．答えはもっと小さいですよ';
            }
        }
    }else{
        document.getElementById("result").textContent = "答えは" + kotae + "でした．すでにゲームは終わっています";
    }
    kaisu++;
}

document.getElementById("submit").addEventListener("click", hantei);