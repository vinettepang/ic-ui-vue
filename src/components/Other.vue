<template>
	<div>
		<div class="collect-detail edit-collect-detail"><ul class="detail"><li>工作城市：<input name="location" value="" words-deal="16" ></li><li>部门/事业群：<input name="department" value="" words-deal="14"></li><li>岗位：<input name="post" value="" words-deal="16"></li></ul><ul class="action"><li>投递状态：<div class="myr_input_div_l form_wrap normal_s" style="*z-index:3;"><input name="deliver_status" type="button" class="mr_button form_select select-val" value="选择"><i class="nc-icon-outline arrows-1_minimal-down tick-down"></i><div class="xl_list" style="display:none"><ul id="cid" class="deliver-status"><li class="">已投递</li><li class="">已笔试</li><li class="">已面试</li><li class="">已终面</li><li class="">已拿offer</li></ul></div></div></li><li class="longtext">备注：<input class="longtext" name="mark" value="" words-deal="48"></li></ul></div>
		<br>
	   <div class="dialog-container dialog-recommendReg" style="display:block; height: 211px;width: 330px;">
            <i class="nc-icon-outline ui-1_simple-remove dialog-close"></i>
            <ul>
                <li style="padding-right:0;">
                    <a id="copy-trigger" data-src="{$recommend_link}"><img src="/Public/Home/images/assets/share-link.png" alt="" class="img"><p class="share-tip ft14">复制链接</p></a>
                </li>
                <li>
                    <a id="wxshare-trigger"><img src="/Public/Home/images/assets/share-wx.png" alt="" class="img"> <p class="share-tip ft14">微信分享</p></a>
                </li>
            </ul> 
            <p class="copy-success">（复制成功，把你的专属推荐链接发给小伙伴吧！）</p>
            <p class="copy-error">（复制失败，请稍后再试）</p>
        </div>
	</div>
</template>
<script >
	 $(function(){
		var clipboard = new $.Clipboard('#copy-trigger', {
		text: function(trigger) {
		return trigger.getAttribute('data-src');
		}
		});
		clipboard.on('success', function(e) {
		$('.copy-success').fadeIn();
		setTimeout('$(".copy-success").fadeOut();', 3000);
		e.clearSelection();
		});

		clipboard.on('error', function(e) {
		$('.copy-error').css('display', 'block');
		});
	$("input").keyup(function(evt){

  //--- only accepts accepts number and 2 decimal place value
  // var theEvent = evt || window.event;
  // var key = theEvent.keyCode || theEvent.which;
  // key = String.fromCharCode(key);
  // var regex = /^[0-9]{1,14}\.[0-9]{0,2}$/; // number with 2 decimal places
  // if (!regex.test(key)) {
  //     theEvent.returnValue = false;
  //     //--- this prevents the character from being displayed
  //     if (theEvent.preventDefault) theEvent.preventDefault();
  // }
 var self =  $(this);
 var words_deal = self.attr('words-deal');
 var content = self.val();
	    var realLength = 0;
	    for (var i = 0; i < content.length; i++) {
	        charCode = content.charCodeAt(i);
	        if (charCode >= 0 && charCode <= 128)
	            realLength += 1;
	        else
	            realLength += 2;
	    }
	    if (realLength > words_deal) {
	        var num = String.cutByte(content, words_deal, '');
	        //var num = countsubstr(content, words_deal); 
	        console.log(num);
	        self.css('color', 'red');
	        self.val(num);
	        //self.attr("value", num);
	    } else {
	        self.css('color', '#482929');
	    }
});
 //    function words_deal(obj, v) {
	//     var content = obj.value;
	//     var realLength = 0;
	//     for (var i = 0; i < content.length; i++) {
	//         charCode = content.charCodeAt(i);
	//         if (charCode >= 0 && charCode <= 128)
	//             realLength += 1;
	//         else
	//             realLength += 2;
	//     }
	//     if (realLength > v) {
	//         var num = String.cutByte(content, v, '');
	//         //var num = countsubstr(content, v); 
	//         console.log(num);
	//         $(obj).css('color', 'red');
	//         obj.value = num;
	//         //$(obj).attr("value", num);
	//     } else {
	//         $(obj).css('color', '#482929');
	//     }
	// }
String.getBlength = function(str) {
    for (var i = str.length, n = 0; i--;) {
        n += str.charCodeAt(i) > 255 ? 2 : 1;
    }
    return n;
}
String.cutByte = function(str, len, endstr) {
        var len = +len,
            endstr = typeof(endstr) == 'undefined' ? "..." : endstr.toString(),
            endstrBl = this.getBlength(endstr);

        function n2(a) {
            var n = a / 2 | 0;
            return (n > 0 ? n : 1)
        } //用于二分法查找
        if (!(str + "").length || !len || len <= 0) {
            return "";
        }
        if (len < endstrBl) {
            endstr = "";
            endstrBl = 0;
        }
        var lenS = len - endstrBl,
            _lenS = 0,
            _strl = 0;
        while (_strl <= lenS) {
            var _lenS1 = n2(lenS - _strl),
                addn = this.getBlength(str.substr(_lenS, _lenS1));
            if (addn == 0) {
                return str;
            }
            _strl += addn
            _lenS += _lenS1
        }
        if (str.length - _lenS > endstrBl || this.getBlength(str.substring(_lenS - 1)) > endstrBl) {
            return str.substr(0, _lenS - 1) + endstr
        } else {
            return str;
        }
    }
  });
</script>