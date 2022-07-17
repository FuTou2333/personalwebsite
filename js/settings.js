//将元素存入变量
bodyTag = document.getElementById("body"); //身体
mainTag = document.getElementById("mainId"); //页面主体
searchEngineDivTag = document.getElementById("searchEngineDiv"); //搜索框
navTag = document.getElementById("nav"); //导航区
weatherTag = document.getElementById("weather"); //天气组件
navSelectTag = document.getElementById("navSelect"); //导航选择区
searchEngineSelectTag = document.getElementById("searchEngineSelect"); //搜索设置-搜索引擎下拉框
darkModeTag = document.getElementById("darkMode"); //外观设置设置-深色模式勾选框
meiRiYiTuTag = document.getElementById("meiRiYiTu"); //背景设置-每日一图单选框
ziDingYiTag = document.getElementById("ziDingYi"); //背景设置-自定义单选框
ziDingYiInputDivTag = document.getElementById("ziDingYiInputDiv"); //背景设置-自定义输入部分
ziDingYiInputBoxTag = document.getElementById("ziDingYiInputBox"); //背景设置-自定义背景图片链接输入框
xianShiDaoHangTag = document.getElementById("xianShiDaoHang"); //页面布局设置-显示导航勾选框
xianShiTianQiTag = document.getElementById("xianShiTianQi"); //页面布局设置-显示天气勾选框

//搜索设置

searchEngineSelectTag.addEventListener("change", setSearchEngine); //每当下拉框改变时执行setSearchEngine函数
function setSearchEngine() {
  let choice = searchEngineSelectTag.value;
  if (choice === "百度") {
    searchEngineDivTag.innerHTML =
      '<form action="https://www.baidu.com/s" target="_blank" id="searchEngineForm"><div style="display: flex;justify-content: center;align-items:center;margin-bottom: 110px;"><span style="position: relative;left: 30px;cursor:pointer;" onclick="changeSettings()"><img src="./assets/engineBaidu.png" style="height:22px;width:22px;" id="searchEngineIcon"></span><input class="searchEngine" name="wd" placeholder="搜索" onclick="hideSettings()"><button type="submit" class="searchEngine_button"style="position: relative;right: 32px;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><img src="./assets/search.png" style="height:25px;width:25px;"></div></form>';
    window.localStorage.setItem("searchEngine", "百度");
  } else if (choice === "必应") {
    searchEngineDivTag.innerHTML =
      '<form action="https://cn.bing.com/search" target="_blank" id="searchEngineForm"><div style="display: flex;justify-content: center;align-items:center;margin-bottom: 110px;"><span style="position: relative;left: 30px;cursor:pointer;" onclick="changeSettings()"><img src="./assets/engineBing.png" style="height:22px;width:22px;" id="searchEngineIcon"></span><input class="searchEngine" name="q" placeholder="搜索" onclick="hideSettings()"><button type="submit" class="searchEngine_button"style="position: relative;right: 32px;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><img src="./assets/search.png" style="height:25px;width:25px;"></div></form>';
    window.localStorage.setItem("searchEngine", "必应");
  }
}

//外观设置

document.querySelector('link[href="./css/cloudsnav-dark.css"]').disabled = true; //找到深色模式css并默认不启用
disableDarkMode = false; //取消忽略深色模式css，但仅仅更改了变量，还要执行函数才能有效果

function change_darkMode() {
  document.querySelector('link[href="./css/cloudsnav-dark.css"]').disabled = disableDarkMode;
  disableDarkMode = !disableDarkMode;
  if (darkMode.checked) {
    window.localStorage.setItem("darkMode", "是");
  } else {
    window.localStorage.setItem("darkMode", "否");
  }
}

//背景设置

//每日一图
meiRiYiTuTag.addEventListener("change", setMeiRiYiTu);
function setMeiRiYiTu() {
  ziDingYiInputDivTag.style.display = "none";
  bodyTag.style.backgroundImage = "url(https://api.mfstudio.cc/bing/)";
  window.localStorage.setItem("backgroundImage", "每日一图");
}

//自定义
ziDingYiTag.addEventListener("change", setziDingYi);
function setziDingYi() {
  ziDingYiTag.checked = true; //勾选“自定义”，此时“每日一图”会自动取消勾选
  ziDingYiInputDivTag.style.display = "flex";
  window.localStorage.setItem("backgroundImage", "自定义");
}

function applyBackgroundImage() {
  ziDingYiInputBoxValue = document.getElementById("ziDingYiInputBox").value; //将自定义背景图片链接输入框的值存入变量
  bodyTag.style.backgroundImage = "url(" + ziDingYiInputBoxValue + ")";
  window.localStorage.setItem("backgroundImageURL", ziDingYiInputBoxValue);
}

//页面布局设置

xianShiDaoHang = false;
xianShiTianQi = false;

//显示导航
function change_xianShiDaoHang() {
  if (xianShiDaoHang) {
    xianShiDaoHangTag.checked = true; //勾选“显示导航”
    navTag.style.display = "flex";
    navSelectTag.style.display = "flex";
    bodyTag.style.height = "auto";
    mainTag.style.height = "auto";
    window.localStorage.setItem("xianShiDaoHang", "是");
  } else {
    xianShiDaoHangTag.checked = false; //取消勾选“显示导航”
    navTag.style.display = "none";
    navSelectTag.style.display = "none";
    bodyTag.style.height = "100vh";
    mainTag.style.height = "100%";
    window.localStorage.setItem("xianShiDaoHang", "否");
  }
  xianShiDaoHang = !xianShiDaoHang;
}

//显示天气
function change_xianShiTianQi() {
  if (xianShiTianQi) {
    xianShiTianQiTag.checked = true; //勾选“显示天气”
    weatherTag.style.display = "block";
    window.localStorage.setItem("xianShiTianQi", "是");
  } else {
    xianShiTianQiTag.checked = false; //取消勾选“显示天气”
    weatherTag.style.display = "none";
    window.localStorage.setItem("xianShiTianQi", "否");
  }
  xianShiTianQi = !xianShiTianQi;
}

//恢复默认设置
function setDefultSettings() {
  if (confirm("确定恢复默认？")) {
    window.localStorage.removeItem("searchEngine");
    window.localStorage.removeItem("darkMode");
    window.localStorage.removeItem("backgroundImage");
    window.localStorage.removeItem("xianShiDaoHang");
    window.localStorage.removeItem("xianShiTianQi");
    window.location.reload(); //刷新页面
  }
}

//数据库

//搜索设置数据库
searchEngineData = window.localStorage.getItem("searchEngine");
if (searchEngineData) {
  searchEngineSelectTag.value = searchEngineData; //将下拉框内的内容变为数据库中的内容
  setSearchEngine();
}

//外观设置数据库
darkModeData = window.localStorage.getItem("darkMode");
if (darkModeData) {
  if (darkModeData === "是") {
    darkMode.checked = true;
    disableDarkMode = false;
    change_darkMode();
  } else if (darkModeData === "否") {
    darkMode.checked = false;
    disableDarkMode = true;
    change_darkMode();
  }
}

//背景设置数据库
backgroundImageData = window.localStorage.getItem("backgroundImage");
backgroundImageURLData = window.localStorage.getItem("backgroundImageURL");
if (backgroundImageData) {
  if (backgroundImageData === "每日一图") {
    setMeiRiYiTu();
  } else if (backgroundImageData === "自定义") {
    ziDingYiInputBoxTag.value = backgroundImageURLData; //将自定义背景图片链接输入框内的内容变为数据库中的内容
    setziDingYi();
    applyBackgroundImage();
  }
}

//页面布局设置数据库
xianShiDaoHangData = window.localStorage.getItem("xianShiDaoHang");
if (xianShiDaoHangData) {
  if (xianShiDaoHangData === "是") {
    xianShiDaoHang = true;
    change_xianShiDaoHang();
  } else if (xianShiDaoHangData === "否") {
    xianShiDaoHang = false;
    change_xianShiDaoHang();
  }
}

xianShiTianQiData = window.localStorage.getItem("xianShiTianQi");
if (xianShiTianQiData) {
  if (xianShiTianQiData === "是") {
    xianShiTianQi = true;
    change_xianShiTianQi();
  } else if (xianShiTianQiData === "否") {
    xianShiTianQi = false;
    change_xianShiTianQi();
  }
}

//隐藏菜单（曲 线 救 国）
function hideSettings() {
  settingsTag.style.display = "none";
}