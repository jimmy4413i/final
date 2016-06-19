
$(function(){
	// 先取得 #abgne-block-20110111
	var $block = $('#abgne');
 
	// 幫 #abgne-block-20110111 .title ul li 加上 hover() 事件
	$('#abgne .title ul li').hover(function(){
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


//xml讀取
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
    xmlFile="temple.xml";
    xmlData=loadXMLFile(xmlFile);
    // $('tbody').sortable();

    // for(i=0;i<=1658;i++){

    //   var Name1 = xmlData.getElementsByTagName("Name")[i].firstChild.nodeValue;
    //   var Religion1 = xmlData.getElementsByTagName("Religion")[i].firstChild.nodeValue;
    //   var Address1 = xmlData.getElementsByTagName("District")[i].firstChild.nodeValue + xmlData.getElementsByTagName("Address")[i].firstChild.nodeValue;
    //   var District1 = xmlData.getElementsByTagName("District")[i].firstChild.nodeValue;

    //   if(District1 == '高雄市楠梓區'){
    //     $('.tb1').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td>'+Name1+'</td><td>'+Religion1+'</td><td>'+Address1+'</td></tr>');
    //   }
    // }

    for(i=0;i<=1658;i++){

      var Name = xmlData.getElementsByTagName("Name")[i].firstChild.nodeValue;
      var Religion = xmlData.getElementsByTagName("Religion")[i].firstChild.nodeValue;
      var Address = xmlData.getElementsByTagName("District")[i].firstChild.nodeValue + xmlData.getElementsByTagName("Address")[i].firstChild.nodeValue;
      var District = xmlData.getElementsByTagName("District")[i].firstChild.nodeValue;

      switch(District){
      	case '高雄市楠梓區':
      		$('.tb1').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市左營區':
      		$('.tb2').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市鼓山區':
      		$('.tb3').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市三民區':
      		$('.tb4').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市鹽埕區':
      		$('.tb5').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市前金區':
      		$('.tb6').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市新興區':
      		$('.tb7').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市苓雅區':
      		$('.tb8').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      	case '高雄市前鎮區':
      		$('.tb9').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市旗津區':
      		$('.tb10').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市小港區':
      		$('.tb11').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市鳳山區':
      		$('.tb12').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市大寮區':
      		$('.tb13').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市鳥松區':
      		$('.tb14').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市林園區':
      		$('.tb15').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市仁武區':
      		$('.tb16').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市大樹區':
      		$('.tb17').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市大社區':
      		$('.tb18').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市岡山區':
      		$('.tb19').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市路竹區':
      		$('.tb20').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市橋頭區':
      		$('.tb21').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市梓官區':
      		$('.tb22').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市彌陀區':
      		$('.tb23').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市永安區':
      		$('.tb24').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市燕巢區':
      		$('.tb25').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市田寮區':
      		$('.tb26').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市阿蓮區':
      		$('.tb27').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市茄萣區':
      		$('.tb28').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市湖內區':
      		$('.tb29').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市旗山區':
      		$('.tb30').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市美濃區':
      		$('.tb31').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市內門區':
      		$('.tb32').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市杉林區':
      		$('.tb33').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市甲仙區':
      		$('.tb34').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市六龜區':
      		$('.tb35').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市茂林區':
      		$('.tb36').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市桃源區':
      		$('.tb37').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      	case '高雄市那瑪夏區':
      		$('.tb38').append('<tr><td><input type="checkbox" id="tr'+i+1+'" /></td><td id="name'+i+1+'">'+Name+'</td><td id="religion'+i+1+'">'+Religion+'</td><td id="address'+i+1+'">'+Address+'</td></tr>');
      		break;
      }

      
}

function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 22.6540087, lng: 120.2768955}
  });
  directionsDisplay.setMap(map);

  document.getElementById('submit').addEventListener('click', function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var waypts = [];
  var checkboxArray = document.getElementById('waypoints');
  for (var i = 0; i < checkboxArray.length; i++) {
    if (checkboxArray.options[i].selected) {
      waypts.push({
        location: checkboxArray[i].value, //途經地點的位置
        stopover: true
      });
    }
  }

  directionsService.route({
    origin: document.getElementById('start').value,  //開始地
    destination: document.getElementById('end').value, //結束地
    waypoints: waypts, //途經地點
    optimizeWaypoints: true, //提供可能的最短路線
    travelMode: google.maps.TravelMode.DRIVING  //運輸方式
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      var route = response.routes[0];
      var summaryPanel = document.getElementById('directions-panel');
      summaryPanel.innerHTML = '';
      // For each route, display summary information.
      for (var i = 0; i < route.legs.length; i++) {
        var routeSegment = i + 1;
        summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
            '</b><br>';
        summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
        summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
        summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
      }
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}


function gogo(){

  for(i=0;i<=1658;i++){
    if ( $(".tr"+i+1).attr('checked') ) {
      var Name = document.getElementsByClass(".name"+i+1).innerText;
      var Religion = document.getElementsByClass(".religion"+i+1).innerText;
      var Address = document.getElementsByClass(".address"+i+1).innerText;
      $('.dtb').append('<tr><td>'+Name+'</td><td>'+Religion+'</td><td>'+Address+'</td></tr>');
    }
  }
  $('.dtb').sortable(); //可拖曳
}

});
