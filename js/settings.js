searchEngineSelectTag = document.getElementById('searchEngineSelect');//将下拉框存入变量
searchEngineSelectTag.addEventListener('change', setSearchEngine);//每当下拉框改变时执行setSearchEngine函数
searchEngineDivTag = document.getElementById('searchEngineDiv');//将整个搜索框存入变量
function setSearchEngine() {
    let choice = searchEngineSelectTag.value;
    if (choice === '百度') {
        searchEngineDivTag.innerHTML = '<form action="https://www.baidu.com/s" target="_blank" id="searchEngineForm"><div style="display: flex;justify-content: center;align-items:center;margin-bottom: 110px;"><span style="position: relative;left: 30px;"><img src="./assets/engineBaidu.png" style="height:22px;width:22px;"></span><input class="searchEngine" name="wd" placeholder="搜索"><button type="submit" class="searchEngine_button"style="position: relative;right: 32px;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><img src="./assets/search.png" style="height:25px;width:25px;"></div></form>'
    } else if (choice === '必应') {
        searchEngineDivTag.innerHTML = '<form action="https://cn.bing.com/search" target="_blank" id="searchEngineForm"><div style="display: flex;justify-content: center;align-items:center;margin-bottom: 110px;"><span style="position: relative;left: 30px;"><img src="./assets/engineBing.png" style="height:22px;width:22px;"></span><input class="searchEngine" name="q" placeholder="搜索"><button type="submit" class="searchEngine_button"style="position: relative;right: 32px;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><img src="./assets/search.png" style="height:25px;width:25px;"></div></form>'
    }
}