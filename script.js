$(window).on('load',function(){	//画面遷移時にギャラリーの画像が被らないように、すべての読み込みが終わった後に実行する
    //＝＝＝Muuriギャラリープラグイン設定
    var grid = new Muuri('.grid', {
    
    //アイテムの表示速度※オプション。入れなくても動作します
    showDuration: 600,
    showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    hideDuration: 600,
    hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        
    // アイテムの表示/非表示状態のスタイル※オプション。入れなくても動作します
      visibleStyles: {
        opacity: '1',
        transform: 'scale(1)'
      },
      hiddenStyles: {
        opacity: '0',
        transform: 'scale(0.5)'
      }    
    });
    
    //＝＝＝並び替えボタン設定
    $('.sort-btn li').on('click',function(){			//並び替えボタンをクリックしたら
        $(".sort-btn .active").removeClass("active");	//並び替えボタンに付与されているactiveクラスを全て取り除き
        var className = $(this).attr("class");			//クラス名を取得
        className = className.split(' ');				//「sortXX active」のクラス名を分割して配列にする
        $("."+className[0]).addClass("active");			//並び替えボタンに付与されているクラス名とギャラリー内のリストのクラス名が同じボタンにactiveクラスを付与
        if(className[0] == "sort00"){						//クラス名がsort00（全て）のボタンの場合は、
             grid.show('');								//全ての要素を出す
        }else{											//それ以外の場合は
            grid.filter("."+className[0]); 				//フィルターを実行
        }
    });
    
    //＝＝＝ Fancyboxの設定
    $('[data-fancybox]').fancybox({
     thumbs: {
        autoStart: true, //グループのサムネイル一覧をデフォルトで出す。不必要であればfalseに
      },	
    });
        
    });

		
	fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=f6c45f66b34eff6e25f9444469156891&photoset_id=72157719506903444&user_id=193401748@N04&extras=url_o&format=json&nojsoncallback=1`)
	  .then((response) => {
		return response.json();
	  })
	  .then((data) => {

        // let newURL = document.getElementById("h")
        // let newIMG = document.getElementById("i")
	  
	
	    const newData = data.photoset.photo
		// var newData = JSON.stringify(data)
	   // console.log(data.photoset.photo[0].url_o)
		  newData.forEach(obj => {
			Object.entries(obj).forEach(([key, value]) => {
			  // console.log(obj.url_o)
				// console.log(`${key} ${value}`);
			  console.log(newURL, newIMG)
			  document.getElementById(newGrid).innerHTML += `
			  <li class="item sort01">
				  <div class="item-content">
				  <a href='${obj.url_o}' data-caption=""><img src='${obj.url_o}' alt=""></a>
				  </div>
			</li>`
            // newURL.href=obj.url_o
            // newIMG.src=obj.url_o
			});
			console.log('huh');
		});
	  });
