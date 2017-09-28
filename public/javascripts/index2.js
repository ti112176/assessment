/* global $ _ */

var userAgent = window.navigator.userAgent.toLowerCase();
console.log(userAgent);
if(userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1 ) {
    alert('Internet Explorerは使えません');
} else if(userAgent.indexOf('edge') != -1) {
    alert('Edgeは使えません');
}

_.templateSettings = {
	evaluate: /\{\{([\s\S]+?)\}\}/g,
	interpolate: /\{\{=([\s\S]+?)\}\}/g,
	escape: /\{\{-([\s\S]+?)\}\}/g
};

var app = app || {
	data : []
};

app.dataFilled = function(){
	return app.data.every((c, i, a) => {
		return c.point;
	});
};

$(function(){
	$.ajax({
		url : "/resources/questions2.json",
		method : "GET",
		dataType : "json"
	})
	.done((data, status, jqXHR) => {
		app.data = data;
		var tpl_q= _.template($('#question_template').text());
		var tpl_s= _.template($('#selection_template').text());
		app.data.forEach((c, i, a) => {
			if($('#'+c.key).length){
				var elm_q = $(tpl_q(c));
				c.selections.forEach((cc, ii, aa) => {
					var o = $.extend(true, {},cc);
					o.key = c.key;
					var elm_s = $(tpl_s(o));
					elm_q.find('._selection-holder').append(elm_s);
				});
				$('#'+c.key).append(elm_q);
			}
		});
		$('._select-button').click((e) => {
			var t = e.target;
			if(t.tagName === 'SPAN'){
				t = t.parentNode;
			}
			t = $(t);
			var key = t.find('._key').val();
			var d = app.data.find((c, i, a) => {
				return (c.key === key);
			});
			if(d){
				d.point = t.find('._point').val();
			}
			t.addClass('active');
			t.parent().siblings().each((i, e) => {
				$(e).find('._select-button').removeClass('active');
			});
			if(app.dataFilled()){
				 $('._btn-check').removeClass('invisible');
			}else{
				 $('._btn-check').addClass('invisible');
			}
		});
	})
	.fail((jqXHR,textStatus, errorThrown) => {
	});
	
	$('#assessSlide').carousel();
	
	$('._btn-next').click(function(){
         $('#assessSlide').carousel('next');
    });

    $('._btn-prev').click(function(){
         $('#assessSlide').carousel('prev');
    });

    $('._btn-check').click(function(){
    	$.ajax({
    		method : "POST",
    		url : "/api/assessment",
    		data : {
    			answers : app.data,
    			mailAddress : "test@test.com",
    			telNo : "0120-444-444",
    			tanto : "苗字名前",
    			company : "暴力照会株式会社"
    		},
    		dataType :"json"
    	})
    	.done(function(data, textStatus, jqXHR){
    		console.log(data);
    	})
    	.fail(function(jqXHR, textStatus, errorThrown){
    		console.log(textStatus);
    	});
    	
    });

	$('.msg_unsupported').addClass('invisible');

});