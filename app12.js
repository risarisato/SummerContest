/*
 配列[]の中にオブジェクト{}入れて、さらに配列にする
 quiz = [ { 問題1:__ 選択:['A','B','C','D'],答え:__},
          { 問題2:__ 選択:['A','B','C','D'],答え:__} ];
 これをJSONというらしい。
*/
const quiz = [
    {
    question: '問題1、K先生が伝える「プログラミング学習」を続けるコツは？',
    answers : [
        'お金をたくさん支払う',
        '書籍をたくさん購入する',
        'ともだちをつくる',
        'ググれば、学習が続けられる',
    ],
    correct : 'ともだちをつくる'
    }, {
    question: '問題2、ラベネコ先生が伝える、「ユーザに納得するwebページ」でユーザに遅いと感じさせない秘訣は？',
    answers : [
        '天才ハッカーと名乗ればなんとかなる',
        'APIに1秒間に108回連打するとBANされると伝える',
        '結果表示が遅くなるとあらかじめ表示させておく',
        'ロードしているような表示で結果表示をお待ちいただく',
    ],
    correct : 'ロードしているような表示で結果表示をお待ちいただく'
    }, {
        question: '問題3, 月額1.100円で、IT知識プログラミングや中学復習から大学受験まで最新の傾向まで幅広く学べて、生放送でだけでなく去年アーカイブも見放題のこれからの時代になりそうなオンライン学習といえば？',
        answers : [
        'KADOKAWA',
        'N予備校',
        'dowango',
        'ニコニコ動画',
        ],
        correct : 'N予備校'
    }, {
    question: '問題4, 製作者が個人的に、N予備校の授業に最も付け加えて欲しい機能と言えば？',
    answers : [
    '運営コメントに履歴をつけて欲しい',
    'できたかどうかアンケートは…予習をしないでの授業は基本無理',
    'スマホにもコメビュなどの機能を追加して欲しい',
    '授業のアーカイブに「日本語」字幕対応をして欲しい',
    ],
    correct : '授業のアーカイブに「日本語」字幕対応をして欲しい',
    }
];

// 上記の問題をwhile文で回すのでIndexにする
const quizLength = quiz.length;
let quizIndex = 0;

// 正解数だけの総履歴を表示する
let score = 0;

// 問題数の正解履歴
let history = 0;

// ボタン変数・定数
const button = document.getElementsByTagName('button');
const buttonLength = button.length;


// クイズの問題文だけを問題数だけ繰り返す関数にする
const setupQuiz = () => {
    // 配列[]の中にオブジェクト{}入れて、さらに配列quiz[quizIndex].question
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        // // 配列[]の中にオブジェクト{}入れて、さらに配列quiz[quizIndex].回答の[ボタン]
        button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
// 関数をここで呼び出す
setupQuiz();



// ボタンをクリックしたら正解判定
const clickHandler = (e) => {
    document.createElement("loading").innerHTML = "クリックされた！";
    // 配列[]の中にオブジェクト{}入れて、さらに配列quiz[quizIndex].正解判定
    if(quiz[quizIndex].correct === e.target.textContent){
        const resultDivided = document.getElementById('result-area'); // result.areaに表示
        const h4 = document.createElement('h4'); // h4タグの大きさで、新規にHTML表示
        history++
        // h4タグに表示したい文字を設定はinnertext
        h4.innerText = ('問題' + history + '正解です');
        resultDivided.appendChild(h4); // result.area(結果)をappendChild(追加)する

        // 正解での画像
        const img = document.createElement('img');
        img.width = 100;
        img.height = 75;
        img.setAttribute('src','seikai.png');
        resultDivided.appendChild(img);

        // 正解数を加算させるscore
        score++;

    } else {

        // 不正解の判定
        const resultDivided = document.getElementById('result-area');
        const h4 = document.createElement('h4');
        history++
        h4.innerText = ('問題' + history + 'ブッブーー間違えです');
        resultDivided.appendChild(h4);

        // 不正解の画像
        const img = document.createElement('img');
        img.width = 100;
        img.height = 75;
        img.setAttribute('src','ng.png');
        resultDivided.appendChild(img);

        }
        // クイズ回数をインクリメント
        quizIndex++;

        if(quizIndex < quizLength) {
        // 問題数があればsetupQuizを呼び出す
            setupQuiz();
        } else {
            // 問題Indexがなくなった
            window.alert('終了！' + score + '/' + quizLength + 'です！最後まで遊んでくれてありがとうございます。「F5キーでリトライ」できます。' );
        }
};

// clickHandlerをbutton = document.getElementsByTagName('button')数でループ
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
