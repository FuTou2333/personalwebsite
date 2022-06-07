//将磁贴元素存入变量
let quanBu= document.getElementById('quanBu');
let zongHe= document.getElementById('zongHe');
let daoHang= document.getElementById('daoHang');
let baiKe= document.getElementById('baiKe');
let lunTan= document.getElementById('lunTan');
let xiaoShuo= document.getElementById('xiaoShuo');
let tuPian= document.getElementById('tuPian');
let youXi= document.getElementById('youXi');
let yinYue= document.getElementById('yinYue');
let gongJu= document.getElementById('gongJu');
//与导航分类按钮绑定的函数
function change_quanBu(){
  choice = 'quanBu';
}
function change_zongHe(){
  choice = 'zongHe';
}
function change_daoHang(){
  choice = 'daoHang';
}
function change_baiKe(){
  choice = 'baiKe';
}
function change_lunTan(){
  choice = 'lunTan';
}
function change_xiaoShuo(){
  choice = 'xiaoShuo';
}
function change_tuPian(){
  choice = 'tuPian';
}
function change_youXi(){
  choice = 'youXi';
}
function change_yinYue(){
  choice = 'yinYue';
}
function change_gongJu(){
  choice = 'gongJu';
}
//检查函数
function check(){
  //先每次重置样式
  quanBu_button.style.background = 'transparent'
  zongHe.style.display = 'none';
  zongHe_button.style.background = 'transparent'
  daoHang.style.display = 'none';
  daoHang_button.style.background = 'transparent'
  baiKe.style.display = 'none';
  baiKe_button.style.background = 'transparent'
  lunTan.style.display = 'none';
  lunTan_button.style.background = 'transparent'
  xiaoShuo.style.display = 'none';
  xiaoShuo_button.style.background = 'transparent'
  tuPian.style.display = 'none';
  tuPian_button.style.background = 'transparent'
  youXi.style.display = 'none';
  youXi_button.style.background = 'transparent'
  yinYue.style.display = 'none';
  yinYue_button.style.background = 'transparent'
  gongJu.style.display = 'none';
  gongJu_button.style.background = 'transparent'
  //再根据choice变量应用对应的样式
  if (choice === 'quanBu'){
    quanBu_button.style.backgroundColor = '#ffffff37';
    zongHe.style.display = 'flex';
    daoHang.style.display = 'flex';
    baiKe.style.display = 'flex';
    lunTan.style.display = 'flex';
    xiaoShuo.style.display = 'flex';
    tuPian.style.display = 'flex';
    youXi.style.display = 'flex';
    yinYue.style.display = 'flex';
    gongJu.style.display = 'flex';
  }else if (choice ==='zongHe'){
    zongHe_button.style.backgroundColor = '#ffffff37';
    zongHe.style.display = 'flex';
  }else if (choice ==='daoHang'){
    daoHang_button.style.backgroundColor = '#ffffff37';
    daoHang.style.display = 'flex';
  }else if (choice ==='baiKe'){
    baiKe_button.style.backgroundColor = '#ffffff37';
    baiKe.style.display = 'flex';
  }else if (choice ==='lunTan'){
    lunTan_button.style.backgroundColor = '#ffffff37';
    lunTan.style.display = 'flex';
  }else if (choice ==='xiaoShuo'){
    xiaoShuo_button.style.backgroundColor = '#ffffff37';
    xiaoShuo.style.display = 'flex';
  }else if (choice ==='tuPian'){
    tuPian_button.style.backgroundColor = '#ffffff37';
    tuPian.style.display = 'flex';
  }else if (choice ==='youXi'){
    youXi_button.style.backgroundColor = '#ffffff37';
    youXi.style.display = 'flex';
  }else if (choice ==='yinYue'){
    yinYue_button.style.backgroundColor = '#ffffff37';
    yinYue.style.display = 'flex';
  }else if (choice ==='gongJu'){
    gongJu_button.style.backgroundColor = '#ffffff37';
    gongJu.style.display = 'flex';
  }
}