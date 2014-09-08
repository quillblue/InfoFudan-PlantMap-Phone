var ISBIRD=0;
var CreatureData=[plantList,birdList];

$(document).ready(function(){
	loadContest();
	
	$("#menu > div").click(function(){
		var i = $(this).index();
		ISBIRD=i;
		$(".location_panel").hide();
		$("#menu div").removeClass("btnnav_now");
		$(".content > div").eq(ISBIRD).show();
		$(this).addClass("btnnav_now");
		console.log(this);
		console.log(i);
	});

	$(".location_panel > div").click(function(){
		var i = $(this).index();
		console.log(i);
		loadDetail(i);
	});

	$("#ad_close").click(function(){
		$("#ad").hide();
	});
})

function loadContest(){
	for(i=0;i<plantLoc.length;i++){
		var html='<div class="location"><div class="loc_img"><img src="'+plantLoc[i].icon+'"></div><div class="loc_text">'+plantLoc[i].name+'</div></div>';
		$("#plant_panel").append(html)
	}
	$("#plant_panel").append('<div class="clear"></div>');
	for(i=0;i<birdLoc.length;i++){
		var html='<div class="location"><div class="loc_img"><img src="'+birdLoc[i].icon+'"></div><div class="loc_text">'+birdLoc[i].name+'</div></div>';
		$("#bird_panel").append(html)
	}
	$("#bird_panel").append('<div class="clear"></div>');
	$("#bird_panel").hide();
}

function loadDetail(id){
	var html="";
	if(ISBIRD==0){
		html='<div class="detail_header"><div class="detail_loc_title"><span>'+plantLoc[id].name+'</span>'+plantLoc[id].description+'</div><div class="detail_loc_exit">X</div></div><div class="detail_content">';
		for(i=0;i<plantLoc[id].plant.length;i++){
			var listIndex=plantLoc[id].plant[i];
			html+='<div class="li"><div class="li_title">'+plantList[listIndex-1].mon+' | '+plantList[listIndex-1].flower+'</div><div class="li_descrption">'+plantList[listIndex-1].description+'</div><div class="li_img"><img src="'+plantList[listIndex-1].pic+'"></div></div>';
		}
		html+='</div>'
	}
	else{
		html='<div class="detail_header"><div class="detail_loc_title"><span>'+birdLoc[id].name+'</span>'+birdLoc[id].description+'</div><div class="detail_loc_exit">X</div></div><div class="detail_content">';
		for(i=0;i<birdLoc[id].bird.length;i++){
			var listIndex=birdLoc[id].bird[i];
			html+='<div class="li"><div class="li_title">'+birdList[listIndex-1].category+' | '+birdList[listIndex-1].bird+'</div><div class="li_descrption">'+birdList[listIndex-1].description+'</div><div class="li_img"><img src="'+birdList[listIndex-1].pic+'"></div></div>';
		}
		html+='</div>'
	}
	$("#detail").html(html);
	$("#main").hide();
	$("#footer").hide();
	$("#detail").show();
	$(".detail_loc_exit").click(function(){
		$("#detail").hide();
		$("#main").show();
		$("#footer").show();
	});
}
