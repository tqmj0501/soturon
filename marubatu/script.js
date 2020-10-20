var qa = [
  ['「テトリス（ゲーム）」を開発したのは、日本人だ。', 2],
  ['生きている間は、有名な人であっても広辞苑に載ることはない。 ', 1],
  ['現在、2000円札は製造を停止している。', 1],
  ['パトカーは、取り締まっている最中であれば、どこでも駐車違反になることはない。', 2],
  ['昆虫の中には、口で呼吸する昆虫もいる。 ', 2],
  ['一般的に体の水分は、男性より女性のほうが多く含まれている。', 2],
  ['たとえ１ｃｍの高さであっても、地震によって起こるのは全て「津波」である。', 1],
  ['1円玉の直径は、ちょうど１ｃｍになっている。', 2],
  ['塩はカロリー０である。 ', 1],
  ['「小中学校は、PTAを作らなければならない」と法律で定められている。', 2]
];

var count = 0;
var correctNum = 0;

window.onload = function() {
  // 最初の問題を表示
  var question = document.getElementById('question');
  question.innerHTML = (count + 1) + '問目：' + qa[count][0];
};

// クリック時の答え判定
function hantei(btnNo) {
  if (qa[count][1] == btnNo) {
    correctNum++;
  }

  if (count == 9) {
    alert('あなたの正解数は' + correctNum + '問です！');
    location.reload(); //アラート後に最初に戻る
  }




  // 次の問題表示
  count++;
  var question = document.getElementById('question');
  question.innerHTML = (count + 1) + '問目：' + qa[count][0];
}

/*
//操作なしで10秒~20秒後の間にランダムアラート
var timer;

 function countDown() {
     alert("count down");
     return true;
 }

 function restartTimer() {
     clearTimeout(timer);

     let random = Math.floor(Math.random() * 10001);　//Math.random()は0以上、1未満の値を返す。Math.floor()で小数点以下を切り捨てる
     timer = setTimeout('countDown()', 10000 + random);

     return true;
 }
 function load() {

     let random = Math.floor(Math.random() * 10001);
     timer = setTimeout('countDown()', 10000 + random);

     document.body.addEventListener("mousedown", restartTimer, false);
     document.body.addEventListener("keypress", restartTimer, false);
 }
 document.addEventListener("DOMContentLoaded", load, false);
 */
