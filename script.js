$(window).on('load',function(){	
    var grid = new Muuri('.grid', {
    
    
    showDuration: 600,
    showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    hideDuration: 600,
    hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        
    
      visibleStyles: {
        opacity: '1',
        transform: 'scale(1)'
      },
      hiddenStyles: {
        opacity: '0',
        transform: 'scale(0.5)'
      }    
    });
    
    
    $('.sort-btn li').on('click',function(){			
        $(".sort-btn .active").removeClass("active");	
        className = className.split(' ');				
        $("."+className[0]).addClass("active");			
        if(className[0] == "sort00"){						
             grid.show('');								
        }else{										
            grid.filter("."+className[0]); 				
        }
    });
    

    $('[data-fancybox]').fancybox({
     thumbs: {
        autoStart: true, 
      },	
    });
        
    });

		
	// fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=f6c45f66b34eff6e25f9444469156891&photoset_id=72157719506903444&user_id=193401748@N04&extras=url_o&format=json&nojsoncallback=1`)
	//   .then((response) => {
	// 	return response.json();
	//   })
	//   .then((data) => {

  //       let newURL = document.getElementById("h")
  //       let newIMG = document.getElementById("i")
	  
	
	//     const newData = data.photoset.photo
		// var newData = JSON.stringify(data)
	   // console.log(data.photoset.photo[0].url_o)
		  // newData.forEach(obj => {
			// Object.entries(obj).forEach(([key, value]) => {
			//   console.log(obj.url_o)
				// console.log(`${key} ${value}`);
			  // console.log(newURL, newIMG)
            // var list = document.getElementById("newGrid")
            
			//   list.documentWrite += `
			//   <li class="item sort01">
			// 	  <div class="item-content">
			// 	  <a href='${obj.url_o}' data-caption=""><img src='${obj.url_o}' alt=""></a>
			// 	  </div>
			// </li>`
    //         newURL.href=obj.url_o
    //         newIMG.src=obj.url_o
		// 	});
		// 	console.log('huh');
		// });
	  // });
