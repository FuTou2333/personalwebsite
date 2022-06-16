//将磁贴元素存入变量
let quanBu_biaoQian = document.getElementById('quanBu');
let zongHe_biaoQian = document.getElementById('zongHe');
let daoHang_biaoQian = document.getElementById('daoHang');
let baiKe_biaoQian = document.getElementById('baiKe');
let lunTan_biaoQian = document.getElementById('lunTan');
let xiaoShuo_biaoQian = document.getElementById('xiaoShuo');
let tuPian_biaoQian = document.getElementById('tuPian');
let youXi_biaoQian = document.getElementById('youXi');
let yinYue_biaoQian = document.getElementById('yinYue');
let gongJu_biaoQian = document.getElementById('gongJu');

//将筛选按钮元素存入变量
let quanBu_button_biaoQian = document.getElementById('quanBu_button');
let zongHe_button_biaoQian = document.getElementById('zongHe_button');
let daoHang_button_biaoQian = document.getElementById('daoHang_button');
let baiKe_button_biaoQian = document.getElementById('baiKe_button');
let lunTan_button_biaoQian = document.getElementById('lunTan_button');
let xiaoShuo_button_biaoQian = document.getElementById('xiaoShuo_button');
let tuPian_button_biaoQian = document.getElementById('tuPian_button');
let youXi_button_biaoQian = document.getElementById('youXi_button');
let yinYue_button_biaoQian = document.getElementById('yinYue_button');
let gongJu_button_biaoQian = document.getElementById('gongJu_button');

//与导航分类按钮绑定的函数
function change_quanBu() {
  choice = 'quanBu';
}
function change_zongHe() {
  choice = 'zongHe';
}
function change_daoHang() {
  choice = 'daoHang';
}
function change_baiKe() {
  choice = 'baiKe';
}
function change_lunTan() {
  choice = 'lunTan';
}
function change_xiaoShuo() {
  choice = 'xiaoShuo';
}
function change_tuPian() {
  choice = 'tuPian';
}
function change_youXi() {
  choice = 'youXi';
}
function change_yinYue() {
  choice = 'yinYue';
}
function change_gongJu() {
  choice = 'gongJu';
}

//检查函数
function check() {

  //先每次重置样式
  quanBu_button_biaoQian.style.background = 'transparent'
  zongHe_biaoQian.style.display = 'none';
  zongHe_button_biaoQian.style.background = 'transparent'
  daoHang_biaoQian.style.display = 'none';
  daoHang_button_biaoQian.style.background = 'transparent'
  baiKe_biaoQian.style.display = 'none';
  baiKe_button_biaoQian.style.background = 'transparent'
  lunTan_biaoQian.style.display = 'none';
  lunTan_button_biaoQian.style.background = 'transparent'
  xiaoShuo_biaoQian.style.display = 'none';
  xiaoShuo_button_biaoQian.style.background = 'transparent'
  tuPian_biaoQian.style.display = 'none';
  tuPian_button_biaoQian.style.background = 'transparent'
  youXi_biaoQian.style.display = 'none';
  youXi_button_biaoQian.style.background = 'transparent'
  yinYue_biaoQian.style.display = 'none';
  yinYue_button_biaoQian.style.background = 'transparent'
  gongJu_biaoQian.style.display = 'none';
  gongJu_button_biaoQian.style.background = 'transparent'

  //再根据choice变量应用对应的样式
  if (choice === 'quanBu') {
    quanBu_button_biaoQian.style.backgroundColor = '#ffffff37';
    zongHe_biaoQian.style.display = 'flex';
    daoHang_biaoQian.style.display = 'flex';
    baiKe_biaoQian.style.display = 'flex';
    lunTan_biaoQian.style.display = 'flex';
    xiaoShuo_biaoQian.style.display = 'flex';
    tuPian_biaoQian.style.display = 'flex';
    youXi_biaoQian.style.display = 'flex';
    yinYue_biaoQian.style.display = 'flex';
    gongJu_biaoQian.style.display = 'flex';
  } else if (choice === 'zongHe') {
    zongHe_button_biaoQian.style.backgroundColor = '#ffffff37';
    zongHe_biaoQian.style.display = 'flex';
  } else if (choice === 'daoHang') {
    daoHang_button_biaoQian.style.backgroundColor = '#ffffff37';
    daoHang_biaoQian.style.display = 'flex';
  } else if (choice === 'baiKe') {
    baiKe_button_biaoQian.style.backgroundColor = '#ffffff37';
    baiKe_biaoQian.style.display = 'flex';
  } else if (choice === 'lunTan') {
    lunTan_button_biaoQian.style.backgroundColor = '#ffffff37';
    lunTan_biaoQian.style.display = 'flex';
  } else if (choice === 'xiaoShuo') {
    xiaoShuo_button_biaoQian.style.backgroundColor = '#ffffff37';
    xiaoShuo_biaoQian.style.display = 'flex';
  } else if (choice === 'tuPian') {
    tuPian_button_biaoQian.style.backgroundColor = '#ffffff37';
    tuPian_biaoQian.style.display = 'flex';
  } else if (choice === 'youXi') {
    youXi_button_biaoQian.style.backgroundColor = '#ffffff37';
    youXi_biaoQian.style.display = 'flex';
  } else if (choice === 'yinYue') {
    yinYue_button_biaoQian.style.backgroundColor = '#ffffff37';
    yinYue_biaoQian.style.display = 'flex';
  } else if (choice === 'gongJu') {
    gongJu_button_biaoQian.style.backgroundColor = '#ffffff37';
    gongJu_biaoQian.style.display = 'flex';
  }
}