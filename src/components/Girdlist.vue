<template>
	<div class="right-content">
	    <div class="content-wrap">
	        <section id="su1">
	            <div id="cbp-vm" class="cbp-vm-switcher cbp-vm-view-grid">
	                <div id="ot-add">
	                    <a class="nc-icon-outline ui-1_circle-add icon-resume-icon">
	                        <span style="font-family: 'Microsoft YaHei','PingFang';">新建</span></a>
	                </div>
	                <div class="cbp-vm-options">
	                    <a href="javascript:;" class="nc-icon-glyph ui-2_alert-circle open-questions" data-view="cbp-vm-view-grid"></a>
	                    <a href="javascript:;" class="nc-icon-glyph media-1_grid cbp-vm-selected" data-view="cbp-vm-view-grid"></a>
	                    <a href="javascript:;" class="nc-icon-glyph ui-2_menu-bold" data-view="cbp-vm-view-list"></a>
	                </div>
	                <div class="all-questions dn">
	                    <i class="triangle-up"></i>
	                    <i class="triangle-up-transparent"></i>
	                    <a href="#" class="close-question">
	                        <i class="nc-icon-glyph ui-1_simple-remove"></i>
	                    </a>
	                    <div class="wd490">
	                        <h4>常见问题参考</h4>
	                        <ul class="questions">
	                                <li>{$public_arr.title}</li>
	                        </ul>
	                    </div>
	                </div>
	                <form id="addCustomForm" method="post">
	                    <div id="ot-addform" class="myr_info_list" >
	                        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="baseinfo">
	                            <tr>
	                                <th class="pt10">
	                                    <label>标题</label></th>
	                                <td>
	                                    <div class="myr_input_div_l">
	                                        <input type="text" id="ot_title" name="title" class="ed_name form-control"></div>
	                                </td>
	                            </tr>
	                            <tr>
	                                <th class="pt10">
	                                    <label>内容</label></th>
	                                <td class="tb_textarea">
	                                    <textarea class="ot_textarea form-control" id="ot_content" name="content"></textarea>
	                                </td>
	                            </tr>
	                        </table>
	                        <div class="btn-group">
	                            <a type="reset" class="btn-resumeac btn_cancel">取消</a>
	                            <input type="submit" class="btn-resumeac mr_save" value="保存" />
	                            </div>
	                    </div>
	                </form>
	                <form id="upCustomForm" method="post" class="dn">
	                    <div id="ot-upform" class="myr_info_list">
	                        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="baseinfo">
	                            <tr>
	                                <th class="pt10">
	                                    <label>标题</label></th>
	                                <td>
	                                    <div class="myr_input_div_l">
	                                        <input type="text" id="ot_uptitle" name="title" class="ed_name form-control"></div>
	                                </td>
	                            </tr>
	                            <tr>
	                                <th class="pt10">
	                                    <label>内容</label></th>
	                                <td class="tb_textarea">
	                                    <textarea class="ot_textarea form-control" id="ot_upcontent" name="content"></textarea>
	                                </td>
	                            </tr>
	                        </table>
	                        <div class="btn-group">
	                            <a type="reset" class="btn-resumeac btn_cancel">取消</a>
	                            <input type="submit" class="btn-resumeac mr_save" value="保存" />
	                            <input name="customid" value="" type="hidden" /></div>
	                    </div>
	                </form>
	                <div class="cuslist_contrainer">
	                    <ul class="tab-nav" id="customize_list">
	                        <li class="z_i">
	                            <h3 class="cbp-vm-title">测试数据
	                                <div id="ot-righticon" data-customid="{$vo.id}" data-title="{$vo.title}" data-content="{$vo.content}">
	                                    <!-- <a class="icon-resume icon-ottrush ot-delete"></a>
	                                    <a class="icon-resume icon-otedit" ></a> -->
	                                    <a class="nc-icon-glyph ui-1_trash icon-resume-icon ot-delete"></a>
	                                    <a class="nc-icon-glyph ui-1_pencil icon-resume-icon icon-otedit"></a>
	                                </div>
	                            </h3>
	                            <div class="cbp-vm-details">
	                                <pre>测试数据</pre></div>
	                        </li>
	                    </ul>
	                </div>
	            </div>
	        </section>
	        <section id="section-underline-2">
	            <div class="cbp-vm-options"></div>
	          <!--   <div id="ot-questions">
	                <img src="/Public/Home/images/myresume/ot-questions.png"></div> -->
	        </section>
	    </div>
    </div>
</template>
<style type="text/css">
	.dn{
		display: none;
	}
</style>
<script type="text/javascript">

   (function() {
      [].slice.call( document.querySelectorAll( '.tabs' ) ).forEach( function( el ) {
        new CBPFWTabs( el );
      });

		 setTimeout(function () {
		 	//gridlist();
		 }, 1000);
	
    function gridlist(){
      var container = document.getElementById('cbp-vm');
       console.log(container);
       var optionSwitch = Array.prototype.slice.call( container.querySelectorAll( 'div.cbp-vm-options > a' ) );

      function init() {
        optionSwitch.forEach( function( el, i ) {
          el.addEventListener( 'click', function( ev ) {
            ev.preventDefault();
            console.log(ev);
            _switch( this );
          }, false );
        } );
      }

      function _switch( opt ) {
        // remove other view classes and any any selected option
        optionSwitch.forEach(function(el) { 
         //   window.classie.remove( container, el.getAttribute('data-view') );
         // window.classie.remove( el, 'cbp-vm-selected' );
          container.classList.remove(el.getAttribute('data-view'));
          el.classList.remove('cbp-vm-selected');
        });
        // add the view class for this option
       // window.classie.add( container, opt.getAttribute( 'data-view' ) );
        // // this option stays selected
         //window.classie.add( opt, 'cbp-vm-selected' );
        container.classList.add(opt.getAttribute('data-view'));
        opt.classList.add('cbp-vm-selected');
      }
      
     init();
    }
       })();
</script>