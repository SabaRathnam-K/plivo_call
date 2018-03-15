
        $(function() {
			$("[name='country']").on('select2:select', function (e) {
				$('.screen').show();
    			var srcdata = e.params.data;
				$.ajax({
					type: "GET",
					url: "./csv/inbound_call.csv",
					dataType: "text",
					success: function(data) {processData(data,srcdata.val);}
				});
			});

			function processData(allText,srcdata) {
				$('.screen').hide();
				var allTextLines = allText.split(/\r\n|\n/);
				for(var i=0; i<allTextLines.length; i++){
					var entries = allTextLines[i].split(',');
					if(entries[2] == srcdata){
						//alert(entries);
						$('.out_regular_sms').html(entries[5]);
						$('.in_regular_sms').html('$ '+entries[6]);
						$('.out_voice_unit').html('$ '+entries[7]);
						$('.in_rental_rate').html('$ '+entries[8]);
					}
				}
			}
		});
		
		$(function() {
			$('.down_csv').click(function(e) {
				e.preventDefault();
				var this_id = $(this).attr('id');
				window.location.href = './csv/'+this_id+'.csv';
			});
		});
		
		$(function() {
			$(".voice_subtab").click(function(){
				if($('.sms_subtab').hasClass('tab-caption-active')){
					$('.sms_subtab').removeClass('tab-caption-active');
					$('.voice_subtab').addClass('tab-caption-active');
					$('#sms').removeClass('tab_display_active');
					$('#call').addClass('tab_display_active');
				}
			});
			$(".sms_subtab").click(function(){
				if($('.voice_subtab').hasClass('tab-caption-active')){
					$('.voice_subtab').removeClass('tab-caption-active');
					$('.sms_subtab').addClass('tab-caption-active');
					$('#call').removeClass('tab_display_active');
					$('#sms').addClass('tab_display_active');
				}
			});
		});