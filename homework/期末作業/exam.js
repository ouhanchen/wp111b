// 顯示或隱藏按鈕
window.onscroll = function() {
  showScrollButton();
};

function showScrollButton() {
  var scrollBtn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// 滾動至頂部
function scrollToTop() {
  document.body.scrollTop = 0; // 针对 Safari
  document.documentElement.scrollTop = 0; // 针对 Chrome、Firefox、IE 和 Opera
}

// 職業導引按鈕
var professionDropdownContent = document.querySelector(".profession-dropdown-content");

function showProfessionDropdownContent() {
  professionDropdownContent.style.display = "block";
}

function hideProfessionDropdownContent() {
  professionDropdownContent.style.display = "none";
}

// 先鋒幹員導引按鈕
var pioneeroperatorDropdownContent = document.querySelector(".pioneer-operator-dropdown-content");

function pioneertoggleOperatorDropdown() {
  pioneeroperatorDropdownContent.style.display = pioneeroperatorDropdownContent.style.display === "block" ? "none" : "block";
}
// 近衛幹員導引按鈕
var konoeoperatorDropdownContent = document.querySelector(".konoe-operator-dropdown-content");

function konoetoggleOperatorDropdown() {
  konoeoperatorDropdownContent.style.display = konoeoperatorDropdownContent.style.display === "block" ? "none" : "block";
}
//狙擊幹員導引按鈕
var snipeoperatorDropdownContent = document.querySelector(".snipe-operator-dropdown-content");

function snipetoggleOperatorDropdown() {
  snipeoperatorDropdownContent.style.display = snipeoperatorDropdownContent.style.display === "block" ? "none" : "block";
}
//重裝幹員導引按鈕
var reinstalloperatorDropdownContent = document.querySelector(".reinstall-operator-dropdown-content");

function reinstalltoggleOperatorDropdown() {
  reinstalloperatorDropdownContent.style.display = reinstalloperatorDropdownContent.style.display === "block" ? "none" : "block";
}
//醫療幹員導引按鈕
var medicaloperatorDropdownContent = document.querySelector(".medical-operator-dropdown-content");

function medicaltoggleOperatorDropdown() {
  medicaloperatorDropdownContent.style.display = medicaloperatorDropdownContent.style.display === "block" ? "none" : "block";
}
//輔助幹員導引按鈕
var auxiliaryoperatorDropdownContent = document.querySelector(".auxiliary-operator-dropdown-content");

function auxiliarytoggleOperatorDropdown() {
  auxiliaryoperatorDropdownContent.style.display = auxiliaryoperatorDropdownContent.style.display === "block" ? "none" : "block";
}
//術士幹員導引按鈕
var warlockoperatorDropdownContent = document.querySelector(".warlock-operator-dropdown-content");

function warlocktoggleOperatorDropdown() {
  warlockoperatorDropdownContent.style.display = warlockoperatorDropdownContent.style.display === "block" ? "none" : "block";
}
//特種幹員導引按鈕
var specialoperatorDropdownContent = document.querySelector(".special-operator-dropdown-content");

function specialtoggleOperatorDropdown() {
  specialoperatorDropdownContent.style.display = specialoperatorDropdownContent.style.display === "block" ? "none" : "block";
}




//先鋒
//繆爾賽思
document.getElementById('button-繆爾賽思-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-繆爾賽思-精零');
  imageA.src = '圖/幹員/繆爾賽思/精二.png';
});

document.getElementById('button-繆爾賽思-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-繆爾賽思-精零');
  imageA.src = '圖/幹員/繆爾賽思/精零.png';
});
//伊內絲
document.getElementById('button-伊內絲-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-伊內絲-精零');
  imageA.src = '圖/幹員/伊內絲/精二.png';
});

document.getElementById('button-伊內絲-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-伊內絲-精零');
  imageA.src = '圖/幹員/伊內絲/精零.png';
});



//近衛
//聖約送葬人
document.getElementById('button-聖約送葬人-精二').addEventListener('click', function() {
  var imageC = document.getElementById('image-聖約送葬人-精零');
  imageC.src = '圖/幹員/聖約送葬人/精二.png';
});

document.getElementById('button-聖約送葬人-精零').addEventListener('click', function() {
  var imageC = document.getElementById('image-聖約送葬人-精零');
  imageC.src = '圖/幹員/聖約送葬人/精零.png';
});
//仇白
document.getElementById('button-仇白-精二').addEventListener('click', function() {
  var imageC = document.getElementById('image-仇白-精零');
  imageC.src = '圖/幹員/仇白/精二.png';
});

document.getElementById('button-仇白-精零').addEventListener('click', function() {
  var imageC = document.getElementById('image-仇白-精零');
  imageC.src = '圖/幹員/仇白/精零.png';
});




//狙擊
//鴻雪
document.getElementById('button-鴻雪-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-鴻雪-精零');
  imageA.src = '圖/幹員/鴻雪/精二.png';
});

document.getElementById('button-鴻雪-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-鴻雪-精零');
  imageA.src = '圖/幹員/鴻雪/精零.png';
});

document.getElementById('button-鴻雪-造型').addEventListener('click', function() {
  var imageA = document.getElementById('image-鴻雪-精零');
  imageA.src = '圖/幹員/鴻雪/字句中的雪原.png';
});
//菲亞梅塔
document.getElementById('button-菲亞梅塔-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-菲亞梅塔-精零');
  imageA.src = '圖/幹員/菲亞梅塔/精二.png';
});

document.getElementById('button-菲亞梅塔-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-菲亞梅塔-精零');
  imageA.src = '圖/幹員/菲亞梅塔/精零.png';
});




//重裝
//斥罪
document.getElementById('button-斥罪-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-斥罪-精零');
  imageA.src = '圖/幹員/斥罪/精二.png';
});

document.getElementById('button-斥罪-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-斥罪-精零');
  imageA.src = '圖/幹員/斥罪/精零.png';
});
//號角
document.getElementById('button-號角-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-號角-精零');
  imageA.src = '圖/幹員/號角/精二.png';
});

document.getElementById('button-號角-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-號角-精零');
  imageA.src = '圖/幹員/號角/精零.png';
});

document.getElementById('button-號角-造型').addEventListener('click', function() {
  var imageA = document.getElementById('image-號角-精零');
  imageA.src = '圖/幹員/號角/化花.png';
});



//醫療
//焰影葦草
document.getElementById('button-焰影葦草-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-焰影葦草-精零');
  imageA.src = '圖/幹員/焰影葦草/精二.png';
});

document.getElementById('button-焰影葦草-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-焰影葦草-精零');
  imageA.src = '圖/幹員/焰影葦草/精零.png';
});
//流明
document.getElementById('button-流明-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-流明-精零');
  imageA.src = '圖/幹員/流明/精二.png';
});

document.getElementById('button-流明-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-流明-精零');
  imageA.src = '圖/幹員/流明/精零.png';
});

document.getElementById('button-流明-造型').addEventListener('click', function() {
  var imageA = document.getElementById('image-流明-精零');
  imageA.src = '圖/幹員/流明/燦海浮夢.png';
});




//輔助
//淬羽赫默
document.getElementById('button-淬羽赫默-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-淬羽赫默-精零');
  imageA.src = '圖/幹員/淬羽赫默/精二.png';
});

document.getElementById('button-淬羽赫默-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-淬羽赫默-精零');
  imageA.src = '圖/幹員/淬羽赫默/精零.png';
});
//白鐵
document.getElementById('button-白鐵-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-白鐵-精零');
  imageA.src = '圖/幹員/白鐵/精二.png';
});

document.getElementById('button-白鐵-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-白鐵-精零');
  imageA.src = '圖/幹員/白鐵/精零.png';
});



//術士
//霍爾海雅
document.getElementById('button-霍爾海雅-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-霍爾海雅-精零');
  imageA.src = '圖/幹員/霍爾海雅/精二.png';
});

document.getElementById('button-霍爾海雅-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-霍爾海雅-精零');
  imageA.src = '圖/幹員/霍爾海雅/精零.png';
});
//林
document.getElementById('button-林-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-林-精零');
  imageA.src = '圖/幹員/林/精二.png';
});

document.getElementById('button-林-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-林-精零');
  imageA.src = '圖/幹員/林/精零.png';
});




//特種
//麒麟X夜刀
document.getElementById('button-麒麟X夜刀-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-麒麟X夜刀-精零');
  imageA.src = '圖/幹員/麒麟X夜刀/精二.png';
});

document.getElementById('button-麒麟X夜刀-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-麒麟X夜刀-精零');
  imageA.src = '圖/幹員/麒麟X夜刀/精零.png';
});
//緘默德克薩斯
document.getElementById('button-緘默德克薩斯-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-緘默德克薩斯-精零');
  imageA.src = '圖/幹員/緘默德克薩斯/精二.png';
});

document.getElementById('button-緘默德克薩斯-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-緘默德克薩斯-精零');
  imageA.src = '圖/幹員/緘默德克薩斯/精零.png';
});
