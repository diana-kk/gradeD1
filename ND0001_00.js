// D01
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 26, 24).toDefs();
var migi = Paper.image('img/migi.png', 0, 0, 21, 23).toDefs();
var voca = Paper.image('img/voca.jpg', 0, 0, 340, 470).toDefs();

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
  location.replace('ND0001_01.html');
}

// 상단
var topArea = Paper.g();

voca.use().transform('t10, 70').appendTo(topArea);

// 하단
var bottomArea = Paper.g();

bottomArea.text(180, 585, '* 단어를 클릭해 보세요! *').attr({
  'font-size': 22,
  'text-anchor': 'middle'
});

// 1) 만나다
bottomArea.rect(130, 260, 85, 35, 6).click(pop01).attr({
  'stroke': 'blue',
  'fill': 'skyblue',
  'opacity': 0,
  'cursor': 'pointer'
});

function pop01() {
  var group = Paper.g();
  group.rect(50, 240, 255, 180, 5).attr({
    'stroke': 'gray',
    'fill': 'white',
    'opacity': 0.9
  });
  group.text(180, 330, '会う').attr({
    'font-size': 70,
    'text-anchor': 'middle'
  });
  group.text(180, 390, '만나다').attr({
    'font-size': 25,
    'text-anchor': 'middle'
  });

    var audio1 = new Audio('aud/voca01.wav');
    audio1.play();

  setTimeout(function() {
    group.remove();
  }, 1500);
}

// 2) 기다리다
bottomArea.rect(20, 205, 85, 35, 6).click(pop02).attr({
  'stroke': 'blue',
  'fill': 'skyblue',
  'opacity': 0,
  'cursor': 'pointer'
});

function pop02() {
  var group = Paper.g();
  group.rect(50, 240, 255, 180, 5).attr({
    'stroke': 'gray',
    'fill': 'white',
    'opacity': 0.9
  });
  group.text(180, 330, '待つ').attr({
    'font-size': 70,
    'text-anchor': 'middle'
  });
  group.text(180, 390, '기다리다').attr({
    'font-size': 25,
    'text-anchor': 'middle'
  });

    var audio2 = new Audio('aud/voca02.wav');
    audio2.play();

  setTimeout(function() {
    group.remove();
  }, 1500);
}

// 3) 만들다
bottomArea.rect(120, 360, 85, 35, 6).click(pop03).attr({
  'stroke': 'blue',
  'fill': 'skyblue',
  'opacity': 0,
  'cursor': 'pointer'
});

function pop03() {
  var group = Paper.g();
  group.rect(50, 240, 255, 180, 5).attr({
    'stroke': 'gray',
    'fill': 'white',
    'opacity': 0.9
  });
  group.text(180, 330, '作る').attr({
    'font-size': 70,
    'text-anchor': 'middle'
  });
  group.text(180, 390, '만들다').attr({
    'font-size': 25,
    'text-anchor': 'middle'
  });

    var audio3 = new Audio('aud/voca03.wav');
    audio3.play();

  setTimeout(function() {
    group.remove();
  }, 1500);
}

// 4) 마시다
bottomArea.rect(25, 355, 80, 35, 6).click(pop04).attr({
  'stroke': 'blue',
  'fill': 'skyblue',
  'opacity': 0,
  'cursor': 'pointer'
});

function pop04() {
  var group = Paper.g();
  group.rect(50, 240, 255, 180, 5).attr({
    'stroke': 'gray',
    'fill': 'white',
    'opacity': 0.9
  });
  group.text(180, 330, '飲む').attr({
    'font-size': 70,
    'text-anchor': 'middle'
  });
  group.text(180, 390, '마시다').attr({
    'font-size': 25,
    'text-anchor': 'middle'
  });

    var audio4 = new Audio('aud/voca04.wav');
    audio4.play();

  setTimeout(function() {
    group.remove();
  }, 1500);
}

// 5) 놀다
bottomArea.rect(255, 422, 75, 35, 6).click(pop05).attr({
  'stroke': 'blue',
  'fill': 'skyblue',
  'opacity': 0,
  'cursor': 'pointer'
});

function pop05() {
  var group = Paper.g();
  group.rect(50, 240, 255, 180, 5).attr({
    'stroke': 'gray',
    'fill': 'white',
    'opacity': 0.9
  });
  group.text(180, 330, '遊ぶ').attr({
    'font-size': 70,
    'text-anchor': 'middle'
  });
  group.text(180, 390, '놀다').attr({
    'font-size': 25,
    'text-anchor': 'middle'
  });

    var audio5 = new Audio('aud/voca05.wav');
    audio5.play();

  setTimeout(function() {
    group.remove();
  }, 1500);
}

// 6) 듣다
bottomArea.rect(215, 145, 70, 35, 6).click(pop06).attr({
  'stroke': 'blue',
  'fill': 'skyblue',
  'opacity': 0,
  'cursor': 'pointer'
});

function pop06() {
  var group = Paper.g();
  group.rect(50, 240, 255, 180, 5).attr({
    'stroke': 'gray',
    'fill': 'white',
    'opacity': 0.9
  });
  group.text(180, 330, '聞く').attr({
    'font-size': 70,
    'text-anchor': 'middle'
  });
  group.text(180, 390, '듣다').attr({
    'font-size': 25,
    'text-anchor': 'middle'
  });

    var audio6 = new Audio('aud/voca06.wav');
    audio6.play();

  setTimeout(function() {
    group.remove();
  }, 1500);
}

// 7) 헤엄치다
bottomArea.rect(180, 475, 80, 35, 6).click(pop07).attr({
  'stroke': 'blue',
  'fill': 'skyblue',
  'opacity': 0,
  'cursor': 'pointer'
});

function pop07() {
  var group = Paper.g();
  group.rect(50, 240, 255, 180, 5).attr({
    'stroke': 'gray',
    'fill': 'white',
    'opacity': 0.9
  });
  group.text(180, 330, '泳ぐ').attr({
    'font-size': 70,
    'text-anchor': 'middle'
  });
  group.text(180, 390, '헤엄치다').attr({
    'font-size': 25,
    'text-anchor': 'middle'
  });

    var audio7 = new Audio('aud/voca07.wav');
    audio7.play();

  setTimeout(function() {
    group.remove();
  }, 1500);
}

// 8) 이야기하다
bottomArea.rect(247, 325, 80, 35, 6).click(pop08).attr({
  'stroke': 'blue',
  'fill': 'skyblue',
  'opacity': 0,
  'cursor': 'pointer'
});

function pop08() {
  var group = Paper.g();
  group.rect(50, 240, 255, 180, 5).attr({
    'stroke': 'gray',
    'fill': 'white',
    'opacity': 0.9
  });
  group.text(180, 330, '話す').attr({
    'font-size': 70,
    'text-anchor': 'middle'
  });
  group.text(180, 390, '이야기하다').attr({
    'font-size': 25,
    'text-anchor': 'middle'
  });

    var audio8 = new Audio('aud/voca08.wav');
    audio8.play();

  setTimeout(function() {
    group.remove();
  }, 1500);
}
