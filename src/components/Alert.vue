<template>
	<div> 
		<div class="alert-box" style="display:block;">
			<h4 class="line-title">提示</h4>
			<p class="text-content">提示提示提示</p>
			<a href="javascript:;" class="btn btn-close"></a>
		</div>
		<!-- ===================toast======================= -->
		<!-- <div class="alert-tips alert-tips-success" style="display:block">
			<p><span class="alert-icon"><i class="nc-icon-glyph ui-1_check-bold"></i></span><span class="alert-content">成功</span></p>
		</div>
		<div class="alert-tips alert-tips-error">
			<p><span class="alert-icon"><i class="nc-icon-glyph ui-1_check-bold"></i></span><span class="alert-content">失败</span></p>
		</div> -->
		<!-- 
		<div class="alert-success">alert-success</div>
		<div class="alert-danger">alert-danger</div>
		<div class="alert-warning">alert-warning</div>
		<div class="alert-info">alert-info</div>

		<div class="alert-box">
			<button class="close">关闭</button>
			<h4>提示</h4>
			<p>提示提示提示</p>
		</div>

		<div class="alert-box" style="display:block;">
			<h4 class="line-title">提示</h4>
			<p class="text-content">提示提示提示</p>
			<a href="javascript:;" class="btn"></a>
		</div>

		<div class="stick_tips flash_tips" style="display:block;">
			<i class="top_triangle"></i>
			<p>提示提示提示提示提示提示</p>
			<a class="btn"></a>
		</div>
		<div class="check_stick_tips collect-tips" style="display:block;">
			<i class="top_triangle"></i>
			<img src="" class="left-img">
			<p class="pull-right">提示提示提示提示提示提示</p>
			<div class="check_detail">
				<div class="checkboxCheck">
					
				</div>
			</div>
			<a class="btn"></a>
		</div>
		<div class="check_stick_tips collect-tips" style="display:block; position: absolute; top:10px;left: 125px;width: 290px; height:145px;">
			<div class="top_triangle"></div>
			<img class="pull-left left-img" src="../assets/images/logo.png" />
			<p class="pull-right">收藏后可进入「我的收藏」对网申信息进行「备注」。</p>
			<div class="row check_detail">
				<div class="checkboxCheck pull-left">
					<input type="checkbox" name="collectTips" value="collectTips" id="collectTips" checked>
					<label for="collectTips"><span class="for_check">下次不再提醒</span></label>
				</div>
				<a id="close-collect-tips" class="btn btn-primary btn-circle-sm pull-right close_tips pull-right">知道了</a>
			</div>
		</div>

		<div class="ic-dialog" style="display:block;">
			<i class="ic-dialog-close"></i>
			<h3>提示提示提示提示提示提示</h3>
			<p>提示提示提示提示提示提示</p>
		</div>

		<div class="left-notice">
			<a class="btn">提示</a>
		</div> -->
		
		<a class="vp-dialog-trigger ic-btn ic-btn-brown" dialog-target="vp-dialog-locked">点击触发dialog1</a>
		<a class="vp-dialog-trigger ic-btn ic-btn-brown" dialog-target="vp-dialog-buycourse">点击触发dialog2</a>
		<a class="btn btn-secondary showToastSuccess" href="javascript:;">触发alert tips - success</a>
		<a href="javascript:;" class="btn btn-secondary showToastError" target-el="error">触发alert tips - error</a>
	<!-- 	<div class="vp-dialog" dialog-target="vp-dialog-locked" style="dispaly:block;height: 190px; padding-top: 54px; min-height: 190px;text-align: center;">
			<i class="nc-icon-outline ui-1_simple-remove btn-dialog-close"></i>
			<p class="vp-content">当前积分：<span class="ic-mycredit text-taro">100分</span>。确认解锁？</p>
			<div class="btn-group clearfloat">
				<a class="ic-btn ic-btn-brown width150 pull-left btn-dialog-close">取消</a>
				<a class="ic-btn ic-btn-brown width150 pull-right ic-chapter-unlocked">确认</a>
			</div>
		</div>
		<div class="vp-dialog" dialog-target="vp-dialog-buycourse" style="dispaly:block; height: 230px; padding-top: 54px;min-height: 180px;text-align: center;">
			<i class="nc-icon-outline ui-1_simple-remove vp-dialog-close"></i>
			<p style="margin-bottom: 30px; text-align: left;">积分不够解锁，当前积分：<span class="ic-mycredit text-taro">100分</span></p>
			<div class="btn-group clearfloat">
				<a class="ic-btn ic-btn-brown width150 pull-left btn-dialog-close">取消</a>
				<a class="ic-btn ic-btn-brown width150 pull-right ic-chapter-unlocked">确认</a>
			</div>
			<p class="center mgtop12 ftnormal" style="margin-top: 20px">（解锁过的课程不计入总价）</p>
		</div> -->
		</div>
</template>
<style type="text/css">
	
</style>
<script type="text/javascript">
$('body').on('click', '.ic-alert-trigger', function(event) {
	event.preventDefault();
	var $this = $(this), targetEl = this.attr('target-el');
	targetEl == 'success' ? alertTipSuccess() : alertTipError();
});

(function () {
	$('body').on('click', '.showToastSuccess', function(event) {
		$('body').icToast({
			position:'fixed',
			duration:1500,
			isCenter:false,
			background:'#fff',
			content: '成功',
			
			// animateIn:'bounceIn-hastrans',
			// animateOut:'bounceOut-hastrans',
		});
	});
	$('body').on('click', '.showToastError', function(event) {
		$('body').icToast({
			position:'fixed',
			duration:1500,
			isCenter:false,
			background:'#fff',
			content: '失败',
			type: 'error',
		});
	});
})();
</script>