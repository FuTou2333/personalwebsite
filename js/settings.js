//搜索设置

searchEngineSelectTag = document.getElementById("searchEngineSelect"); //将下拉框存入变量
searchEngineSelectTag.addEventListener("change", setSearchEngine); //每当下拉框改变时执行setSearchEngine函数
searchEngineDivTag = document.getElementById("searchEngineDiv"); //将整个搜索框存入变量
function setSearchEngine() {
  let choice = searchEngineSelectTag.value;
  if (choice === "百度") {
    searchEngineDivTag.innerHTML =
      '<form action="https://www.baidu.com/s" target="_blank" id="searchEngineForm"><div style="display: flex;justify-content: center;align-items:center;margin-bottom: 110px;"><span style="position: relative;left: 30px;cursor:pointer;" onclick="changeSettings()"><img src="./assets/engineBaidu.png" style="height:22px;width:22px;" id="searchEngineIcon"></span><input class="searchEngine" name="wd" placeholder="搜索"><button type="submit" class="searchEngine_button"style="position: relative;right: 32px;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><img src="./assets/search.png" style="height:25px;width:25px;"></div></form>';
  } else if (choice === "必应") {
    searchEngineDivTag.innerHTML =
      '<form action="https://cn.bing.com/search" target="_blank" id="searchEngineForm"><div style="display: flex;justify-content: center;align-items:center;margin-bottom: 110px;"><span style="position: relative;left: 30px;cursor:pointer;" onclick="changeSettings()"><img src="./assets/engineBing.png" style="height:22px;width:22px;" id="searchEngineIcon"></span><input class="searchEngine" name="q" placeholder="搜索"><button type="submit" class="searchEngine_button"style="position: relative;right: 32px;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><img src="./assets/search.png" style="height:25px;width:25px;"></div></form>';
  }
}

//背景设置

bodyTag = document.getElementById("bodyId"); //将身体元素存入变量

//每日一图
meiRiYiTuTag = document.getElementById("meiRiYiTu");
meiRiYiTuTag.addEventListener("change", setMeiRiYiTu);
function setMeiRiYiTu() {
  ziDingYiInputDivTag.style.display = "none";
  bodyTag.style.backgroundImage = "url(https://api.mfstudio.cc/bing/)";
}

//自定义
ziDingYiTag = document.getElementById("ziDingYi");
ziDingYiTag.addEventListener("change", setziDingYi);
ziDingYiInputDivTag = document.getElementById("ziDingYiInputDiv");
function setziDingYi() {
  ziDingYiInputDivTag.style.display = "flex";
}

function applyBackgroundImage() {
  ziDingYiInputBoxValue = document.getElementById("ziDingYiInputBox").value; //将背景图片链接输入框的值存入变量
  bodyTag.style.backgroundImage = "url(" + ziDingYiInputBoxValue + ")";
}

//页面布局设置

mainTag = document.getElementById("mainId")
navTag = document.getElementById("navId");
weatherTag = document.getElementById("weatherId");
xianShiDaoHang = false;
xianShiTianQi = false;

//显示导航
function change_xianShiDaoHang() {
  if (xianShiDaoHang) {
    navTag.style.display = 'flex';
    bodyTag.style.height = '100vh';
    mainTag.style.height = '100%';
  } else {
    navTag.style.display = 'none';
    bodyTag.style.height = 'auto';
    mainTag.style.height = 'auto';
  }
  xianShiDaoHang = !xianShiDaoHang;
}

//显示天气
function change_xianShiTianQi() {
  if (xianShiTianQi) {
    weatherTag.style.display = 'block';
  } else {
    weatherTag.style.display = 'none';
  }
  xianShiTianQi = !xianShiTianQi;
}
