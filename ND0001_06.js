// D01
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 26, 24).toDefs();
var migi = Paper.image('img/migi.png', 0, 0, 21, 23).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단 바 부분
var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
  'fill': '#FDE8E5'
});

home.use().transform('t14, 8').appendTo(topBox).click(handlerHome).attr({
  'cursor': 'pointer'
});

function handlerHome() {
  location.replace('ND0001.html');
}

topBox.text(180, 30, 'D01').attr({
  'font-size': 22,
  'text-anchor': 'middle'
});

migi.use().transform('t325, 9').appendTo(topBox).click(handlerNext).attr({
  'cursor': 'pointer'
});

function handlerNext() {
  location.replace('ND0001_07.html');
}

// 상단
var topArea = Paper.g();

topArea.text(180, 85, '6 / 8').attr({
  'font-size': 20,
  'fill': 'gray',
  'text-anchor': 'middle'
});

topArea.text(144, 160, 'き').click(playAud01).attr({
  'font-size': 30,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

var t1 = topArea.text(180, 250, ['聞く', '듣다']).click(playAud01).attr({
  'font-size': 90,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});
t1.selectAll('tspan')[1].attr({
  x: 180,
  y: 330,
  'font-size': 30,
  'fill': 'gray',
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

function playAud01() {
  var audio1 = new Audio('aud/voca06.wav');
  audio1.play();
}

// 하단
var bottomArea = Paper.g();

bottomArea.rect(15, 430, 330, 170, 6).attr({
  'fill': '#FFF7DE'
});

bottomArea.text(180, 462, '자주 들어?').attr({
  'font-size': 18,
  'text-anchor': 'middle'
});

bottomArea.rect(25, 480, 310, 100, 6).click(handler).attr({
  'fill': 'white',
  'cursor': 'pointer'
});

var t2 = bottomArea.text(180, 545, '?').click(handler).attr({
  'font-size': 30,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

function handler() {
  t2.attr({
    'fill': 'none'
  });

  var t3 = bottomArea.text(185, 540, ['よく', ' 聞く', '？']).click(naru).attr({
    'font-size': 30,
    'fill': 'gray',
    'text-anchor': 'middle'
  });
  t3.selectAll('tspan')[1].attr({
    'fill': 'blue'
  });
  t3.selectAll('tspan')[2].attr({
    'fill': 'gray'
  });
  function naru() {
    var audio3 = new Audio('aud/sen06.wav');
    audio3.play();
  }

  var audio2 = new Audio('aud/sen06.wav');
  audio2.play();
}
