$(function(){
	// 先取得 #abgne-block-20110111 , 必要參數及輪播間隔
	var $block = $('#abgne-block-20110111'), 
		timrt, speed = 3000;
 
	// 幫 #abgne-block-20110111 .title ul li 加上 hover() 事件
	var $li = $('.title ul li', $block).hover(function(){
		// 當滑鼠移上時加上 .over 樣式
		$(this).addClass('over').siblings('.over').removeClass('over');
	}, function(){
		// 當滑鼠移出時移除 .over 樣式
		$(this).removeClass('over');
	}).click(function(){
		// 當滑鼠點擊時, 顯示相對應的 div.info
		// 並加上 .on 樣式
		var $this = $(this);
		$this.add($('.bd div.info', $block).eq($this.index())).addClass('on').siblings('.on').removeClass('on');
	});
 
	// 幫 $block 加上 hover() 事件
	$block.hover(function(){
		// 當滑鼠移上時停止計時器
		clearTimeout(timer);
	}, function(){
		// 當滑鼠移出時啟動計時器
		timer = setTimeout(move, speed);
	});
 
	// 控制輪播
	function move(){
		var _index = $('.title ul li.on', $block).index();
			_index = (_index + 1) % $li.length;
		$li.eq(_index).click();
 
		timer = setTimeout(move, speed);
	}
 
	// 啟動計時器
	timer = setTimeout(move, speed);
});



// 首先會先寫ㄧ個函式來判斷瀏覽器是否支援 javascript 讀取 XML的功能

    function loadXMLFile(file){

      var xmlDoc;

// 這ㄧ個判斷式是針對IE，判斷是不是支援ActiveXObject 這個物件

      if (window.ActiveXObject){

//如果支援這個物件，就建立ㄧ個讀取XML的物件

         xmlDoc=new ActiveXObject("Microsoft.XMLDOM");

//判斷是否進行異步處理，true代表在瀏覽器送出訊息後即立即更新(就是底下send方法)，false代表在任何情況下，會直接向伺服器提取資料做更新

         xmlDoc.async = false;

//載入xml檔案

         xmlDoc.load(file);

//載入後回傳

         return xmlDoc;

      }

// 這個判斷針對飛IE瀏覽器設置，判斷是不是能夠處理DOM模型物件

      else if (document.implementation && document.implementation.createDocument){

//建立ㄧ個讀取XML的物件

         var xmlInfo = new XMLHttpRequest();  

//用GET的方式取回XML資料，第三個參數是判斷是否異步處理，true代表在瀏覽器送出訊息後即立即更新(就是底下send方法)，false代表在任何情況下，會直接向伺服器提取資料做更新

         xmlInfo.open("GET", file, false);

//是否傳回資料，因為這裡不傳送資料給伺服器，因此填上null

         xmlInfo.send(null); 

//把取得的XML回傳

         xmlDoc = xmlInfo.responseXML;

         return xmlDoc;

      }

//如果瀏覽器不支援就輸出Error

      else{

         alert("您的瀏覽器不支援Javascript!! ");

      }

}

//瀏覽器載入後執行

window.onload=function() { 

      xmlFile="http://cabu.kcg.gov.tw/Web/opendata/?category=temple&type=xml";

//載入指定的xml檔案

      xmlData=loadXMLFile(xmlFile);

//取得DOM節點內的值

//這邊特別解釋一下

//getElementsByTagName("userid")[0]  >> 指的是在這份文件中第一個節點名稱為userid的節點；因為有可能ㄧ份文件內有很多個節點名稱為userid

//要找第二個節點名稱為userid的節點就變成  >> getElementsByTagName("userid")[1] (如下圖)

//firstChild  >> 第一個子節點

//nodeValue  >> 節點的值

      var Name = xmlData.getElementsByTagName("userid")[i].firstChild.nodeValue;

//下面則是使用innerHTML方法把值放入div內，但是要預先在html檔內先寫入<div id="content"></div> ，javascript才找得到這個div的位置

      document.getElementById('Name').innerHTML +='userid = '+userid+'<br>';

}  
