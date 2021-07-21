// JavaScript Sample
// body の背景色を変える
function MyFunction01() {
  var obj = document.body;
  obj.style.backgroundColor = '#ffc0cb';
}

// ID要素の背景色を変える
function MyFunction02(){
  var obj = document.getElementById('ID01');
  obj.style.backgroundColor = '#ff69b4';
}
// CLASS要素の背景色を変える
function MyFunction03(){

    // Class01の把握（情報が line[0], line[1] ,line[2]・・に一括で入る）
    var lines = document.getElementsByClassName('Class01');

    //  i 番目の pタグ部分の背景を green に
    for( var i=0; i<lines.length; i++ ){
          lines[i].style.backgroundColor = '#db7093';
    }
}
// HTML要素の背景色を変える
function MyFunction04() {
  // pタグの把握（複数の情報が obj[0], obj[1] ,obj[2]・・に一括で入る）
  var obj = document.getElementsByTagName("p");

  // pタグの存在する数だけ処理をくりかえす
  for( var i=0; i<obj.length; i++ ) {
       //  i 番目の pタグ部分の背景を blue に
      obj[ i ].style.backgroundColor = "#f0e68c";
  }
}
function MyFunctionR(){
  var obj = document.body;
  obj.style.backgroundColor = '#ff69b4';
}

function MyFunctionG(){
  var obj = document.body;
  obj.style.backgroundColor = '#9370db';
}

function MyFunctionB(){
  var obj = document.body;
  obj.style.backgroundColor = '#87cefa';
}
// 引数を用いた背景色の変更
function MyFunction05( col ){
  var obj = document.body;
  obj.style.backgroundColor = col;
}
//ランダムな16進6桁のカラーコードを生成（汎用性のある関数）
function RandomColor(){
    var col = Math.floor( Math.random() * 0xFFFFFF ).toString(16);
    for( var i = col.length; i<6; i++ ) { col = '0' + col; }
    return '#' + col;
}
// 背景色の変更
function MyFunction06( ){
  var obj = document.body;
  obj.style.backgroundColor = RandomColor();
}
