<!-- 
<link rel="stylesheet" type="text/css" href="../../static/Huploadify/Huploadify.css"/>
<script type="text/javascript" src="../../assets/js/jquery.1.10.1.min.js"></script>
<script type="text/javascript" src="../../assets/js/core.min.js"></script>
<script type="text/javascript" src='../../static/Huploadify/jquery.Huploadify.js'></script>
 -->
<template>
    <div>
        
        <div class="setting-container">
            <div class="container">
                <div class="row">

                    <div class="span12 tab-content">
                        <div class="tab-pane fade in active setting-content" id="plugin">
                            <div class="st-block">
                                <p class="st-title">基本设置</p>
                                <div class="head-container headUpload row">
                                    <div id="head">
                                        <div class="head-tigger head-cover"></div>
                                        <a class="head-tigger head-cover-text change-head">更换头像</a></div>
                                    <div class="span9 upload-action">
                                        <p class="upload-tips">支持文件PNG、JPG、 JPEG，大小不超过600KB</p>
                                        <span class="upload-error error" style="margin: 0;display: none;" id="updatehead_beError">上传失败！支持文件PNG、JPG、 JPEG，大小不超过600KB</span>
                                        <a id="upload">
                                            <input type="hidden" name="path" id="path" value="" /></a>
                                        <input class="btn updateheadsubmit" id="updateheadsubmit" type="submit" value="保存" />
                                        <a class="btn cancel-head cancel-change-head">取消</a></div>
                                </div>
                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    </div>

</template>
<style type="text/css">
    .setting-content #head{
        /*background: url("../../assets/images/missing_face.png") no-repeat center;*/
        background-size: cover;
    }
</style>
<script type="text/javascript">
    jQuery(function($){   
        // $(".phonebound-pop").fancybox({
        //     'closeBtn' : false,
        //     helpers : {
        //         overlay : {
        //           closeClick: false,
        //             css : {
        //                  'frameWidth': 300,
        //                 'frameHeight': 82,
        //                 'background' : 'rgba(255, 215, 50, 0.9)',
        //                 'overlayOpacity'    : 0.9
        //             }
        //         }

        //     }
        // });
        /* 判断是否没有绑定过手机号自动弹窗 */
        // var phonebound = {$first_bind_mobile};
        // if(phonebound) {
        //     $('.phonebound-pop').click();
        // }

        $('#unbound-phone').click(function(event) {
            /* Act on the event */
            $('.reg-tip span.tip-text').text('注意：更换手机号后，登录账号会替换成新的手机号，原来的手机号就不能作为登录账号使用了唷。');
            $('input[name="boundphone"]').attr('placeholder','新手机号');
        });

        $('.hover-wechat-unbound').hover(function() {
            $(this).text('解绑').addClass('bound-blue');
        }, function() {
            $(this).text('已绑定').removeClass('bound-blue');
        });
        $('.hover-phone-unbound').hover(function() {
            $(this).text('更换号码').addClass('bound-blue');
        }, function() {
            $(this).text('已绑定').removeClass('bound-blue');
        });

        $(".head-container #head").hover(function(){
            $('.head-tigger').animate({opacity:0.6},300);
            $('.head-cover-text').animate({opacity:1},200);
        },function(){
             $('.head-tigger').animate({opacity:0});
        });

        $('.change-head').click(function(event) {
            $("#head").addClass('active').animate({right:'20px',left:'0'});
            $('#updatehead_beError').css('display', 'none');
            $('.upload-tips').css('display', 'block').text('支持文件PNG、JPG、 JPEG，大小不超过600KB');
            $('.upload-action').fadeIn('300');
            $('.upload-action #upload').css('display', 'inline-block');
            $('#updateheadsubmit').css('display', 'none');
            $('#head').children().hide();
        });

        $('.cancel-change-head').click(function(event) {
            var head = $('.head-container #head');
            head.css("backgroundImage","url({:($info['head']=='')?'/Public/images/missing_face.png':$info['head']})");
            head.children().show();
            $('.upload-action').fadeOut('300');
            head.animate({left:'120px',right:'0'});
        });

    });

/*上传头像*/
    $(function(){
        $('#upload').Huploadify({
            auto:true,
            fileTypeExts:'*.png;*.PNG;*.jpg;*.JPG;*.jpeg;*.JPEG', //由于该插件对大小写敏感区分
            method:'post',
            multi:false,
            formData:{},
            fileObjName:'download',
            fileSizeLimit:600, //文件大小限制为600kb
            showUploadedPercent:true,//是否实时显示上传的百分比，如20%
            showUploadedSize:true,
            buttonText:'上传头像',
            removeTimeout:1,
            uploader:"{:U('File/uploadPicture',array('session_id'=>session_id()))}",
            onUploadStart:null,//上传开始时的动作,你给我动一下啊！同步啊！！
            onUploadSuccess:null,//上传成功的动作
            onUploadComplete:function(file, xhr){
                var data = $.parseJSON(xhr);
                //console.log(data);
                if(1 == data.status){
                    $('.head-container #head').css("backgroundImage","url("+data.path+")");
                    $('#path').val(data.path);
                    $('.upload-tips').text('上传成功！').removeClass('error');
                    //$('#updateheadsubmit').trigger("click");
                    $('#updateheadsubmit').css('display','inline-block');
                    $('#upload').css('display','none');
                    $('.head-container .error').css('display', 'none');
                } else {
                    $('.upload-tips').text('上传失败！支持文件PNG、JPG、 JPEG，大小不超过600KB').addClass('error');
                }
            },
            onUploadError:function(){ alert('头像上传失败');}
        });
    });
    var changesessionobj = {
        sessionajax : function(path){
            $.ajax({
                type : 'post',
                url : '/user/cgsession',
                data : {
                    'path' : path,
                },
                success : function(data){
                    data = JSON.parse(data);
                    if(data.status){
                        return true;
                    }else{
                        return false;
                    }
                },
            })
        }
    }
</script>

