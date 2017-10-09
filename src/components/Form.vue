<template>
  <div id="body">
    <div id="container">
      <div class="clearfixs mr_created " id="tab1">
        <div class="section-top">
          <div class="section-top-container" id="section-top-container">
            <div>
              <a class="lt-title">一键闪填</a>
              <a class="rt-title" href="{:U('Resume/customize')}">｜&nbsp;&nbsp;&nbsp;开放性问题(OQ)</a>
              <div class="triangle-up-1"></div>
            </div>
            <div class="rt-progress">
              <div class="complete">高频：</div>
              <div class="progress" id="progress-allresume" style=" width: 170px; ">
                <div class="progress-bar" style=" width:<?php $allnum = 170*$alllist[1]/$alllist[0]; echo sprintf(" %.2f ", $allnum);?>px"></div>
                <span class="counter" style="left:70px"></span>
              </div>
              <div class="lowusetip">低频：</div>
              <div class="progress " id="progress-emptyresume" style=" width: 65px; ">
                <div class="progress-bar" style="width: <?php $lownum= 65*$low_num[1]/$low_num[0]; echo sprintf(" %.2f ", $lownum);?>px"></div>
                <span class="counter" style="left:12px;"></span>
              </div>
              <!-- <div class="blank "></div> -->
              <div id="switchtip">
                <div class="toptriangle"></div>
                <span class="bold">完成度</span>在这里显示,
                <br/>
                <span class="bold">左侧</span>是
                <span class="bold">高频填</span>写项,
                <span class="bold">右侧</span>是
                <span class="bold">低频</span>填写项
                <a id="close-switchtip">知道了</a></div>
              <div id="opentip">
                <div class="toptriangle"></div>可以选择切换高频或全部填写项 填写高频项后,
                <br/>一键闪填的填写比例为70% 完成全部项后,
                <br/>一键闪填的填写比例将高达85%
                <a id="close-opentip">知道了</a></div>
            </div>
          </div>
        </div>
        <section class="container" id="editresume">
          <div class="tabs tabs-style-underline">
            <div class="resumebg-left" id="resumebg-left">
              <div class="resume-button">
                <a class="btn-resume-right mr_preview" target="_blank" href="/resume/myresumepreview">预览</a>
                <button class="btn-resume-right mr_allsave">保存</button>
                <div class="clr"></div>
                <a href="/resumeen/editresumeen/" class="btn btn-secyellow" style="width: 100%; border-radius: 0; margin-top: 5px; ">英文简历</a></div>
              <nav>
                <ul>
                  <li>
                    <a href="#su1" class="icon-resume icon-home">
                      <span>基本信息</span>
                      <span class="countNum" id="infoNum"></span>
                    </a>
                  </li>
                  <li id="section-edu">
                    <a href="#section-underline-2" class="icon-resume icon-gift">
                      <span>教育信息</span>
                      <span class="countNum" id="eduNum"></span>
                    </a>
                  </li>
                  <li id="section-work">
                    <a href="#section-underline-3" class="icon-resume icon-upload">
                      <span>工作经历</span>
                      <span class="countNum" id="jobNum"></span>
                    </a>
                  </li>
                  <li id="section-pro">
                    <a href="#section-underline-4" class="icon-resume icon-coffee">
                      <span>项目经历</span>
                      <span class="countNum" id="proNum"></span>
                    </a>
                  </li>
                  <li id="section-schclub">
                    <a href="#section-underline-7" class="icon-resume icon-schclub">
                      <span>社团经历</span>
                      <span class="countNum" id="schclubNum"></span>
                    </a>
                  </li>
                  <li id="section-schaw">
                    <a href="#section-underline-8" class="icon-resume icon-schawards">
                      <span>获奖经历</span>
                      <span class="countNum" id="schawardNum"></span>
                    </a>
                  </li>
                  <li id="section-">
                    <a href="#section-underline-9" class="icon-resume icon-language">
                      <span>语言能力</span>
                      <span class="countNum" id="skilllangNum"></span>
                    </a>
                  </li>
                  <li id="section-certi">
                    <a href="#section-underline-5" class="icon-resume icon-certificate">
                      <span>已获证书</span>
                      <span class="countNum" id="certiNum"></span>
                    </a>
                  </li>
                  <li id="section-train">
                    <a href="#section-underline-10" class="icon-resume icon-training">
                      <span>培训经历</span>
                      <span class="countNum" id="trainingNum"></span>
                    </a>
                  </li>
                  <li id="section-otherinfo">
                    <a href="#section-underline-11" class="icon-resume icon-otherinfo">
                      <span>其他信息</span>
                      <span class="countNum" id="otherinfoNum"></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
           	 <div class="right-content">
              <div class="content-wrap" id="userAllInfo">
                <div class="swich-container">
                  <div class="switch-resume switch-yellow">
                    <input type="radio" class="switch-input" name="resume-checked" value="high" id="high" checked="">
                    <label for="high" class="switch-label switch-label-off">高频</label>
                    <input type="radio" class="switch-input" name="resume-checked" value="all" id="all">
                    <label for="all" class="switch-label switch-label-on">全部</label>
                    <span class="switch-selection"></span>
                  </div>
                </div>
                <section id="su1">
                  <div class="baseinfo-top">
                    <h3>基本信息</h3></div>
                  <div class="mr_moudle_content">
                    <form id="olinfoForm">
                      <div class="myr_info_list">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="baseinfo">
                          <tr>
                            <th class="pt10">
                              <label>姓名</label></th>
                            <td>
                              <div class="myr_input_div_l">
                                <input type="text" id="mr_name" name="mr_name" class="ed_name valid form-control" autocomplete="off" value="{$info.realname}"></div>
                            </td>
                          </tr>
                          <tr class="lowUse">
                            <th class="pt10">
                              <label>英文名</label>
                              <span class="lowFreqency">低频</span></th>
                            <td>
                              <div class="myr_input_div_l">
                                <input type="text" id="english_name" name="english_name" class="ed_name valid form-control" autocomplete="off" value="{$info.english_name}"></div>
                            </td>
                          </tr>
                          <tr>
                            <th class="pt10">
                              <label>性别</label></th>
                            <td>
                              <div class="myr_radio">
                                <label class="radio">
                                  <input type="radio" name="sex" id="sex1" value="男" data-toggle="radio" class="custom-radio" checked="">
                                  <span class="icons">
                                    <span class="icon-unchecked"></span>
                                    <span class="icon-checked"></span>
                                  </span>男</label>&nbsp;&nbsp;
                                <label class="radio">
                                  <input type="radio" name="sex" id="sex2" value="女" data-toggle="radio" class="custom-radio">
                                  <span class="icons">
                                    <span class="icon-unchecked"></span>
                                    <span class="icon-checked"></span>
                                  </span>女</label>
                                <input id="myysex" name="myysex" type="hidden" value="{$info.sex}"></div>
                            </td>
                          </tr>
                          <tr>
                            <th class="pt10">
                              <label>身高</label></th>
                            <td>
                              <div class="myr_input_div_s">
                                <input type="text" id="height" name="height" class="valid form-control" autocomplete="off" value="{$info.height}">
                                <span class="sticker">cm</span></div>
                            </td>
                          </tr>
                          <tr>
                            <th class="pt10">
                              <label>体重</label></th>
                            <td>
                              <div class="myr_input_div_s">
                                <input id="weight" name="weight" class="form-control" value="{$info.weight}" />
                                <span class="sticker">kg</span>
                                <span class="icon-resume icon-business_bulb tiptab_weight tipright" title="点击查看提示"></span>
                              </div>
                            </td>
                          </tr>
                         
                
                          <tr>
                            <th class="pt10">
                              <label>出生日期</label></th>
                            <td>
                              <div class="date_select">
                                <input type="hidden" class="datetime_val" name="birthday" value="{$info.birthday}">
                                <div class="date_contrainer normal_s" style="*z-index:3;">
                                  <i class="mr_sj"></i>
                                  <input type="button" class="year_val dateselect mr_button" value="" />
                                  <ul class="ul_date  yearselect"></ul>
                                </div>
                                <div class="date_contrainer normal_s" style="*z-index:3;">
                                  <i class="mr_sj"></i>
                                  <input type="button" class="month_val dateselect mr_button" value="" />
                                  <ul class="ul_date monthselect"></ul>
                                </div>
                                <div class="date_contrainer normal_s" style="*z-index:3;">
                                  <i class="mr_sj"></i>
                                  <input type="button" class="day_val dateselect mr_button" value="" />
                                  <ul class="ul_date dayselect"></ul>
                                </div>
                              </div>
                           
                            </td>
                          </tr>
                
                          <tr>
                            <th class="pt10">
                              <label>婚姻状况</label></th>
                            <td>
                              <div class="myr_radio">
                                <label class="radio">
                                  <input type="radio" name="marital" id="maritalstatus1" value="未婚" data-toggle="radio" class="custom-radio">
                                  <span class="icons">
                                    <span class="icon-unchecked"></span>
                                    <span class="icon-checked"></span>
                                  </span>未婚</label>&nbsp;&nbsp;
                                <label class="radio">
                                  <input type="radio" name="marital" id="maritalstatus2" value="已婚" data-toggle="radio" class="custom-radio">
                                  <span class="icons">
                                    <span class="icon-unchecked"></span>
                                    <span class="icon-checked"></span>
                                  </span>已婚</label>&nbsp;&nbsp;
                                <label class="radio">
                                  <input type="radio" name="marital" id="maritalstatus3" value="离婚" data-toggle="radio" class="custom-radio">
                                  <span class="icons">
                                    <span class="icon-unchecked"></span>
                                    <span class="icon-checked"></span>
                                  </span>离婚</label>
                                <input id="mymaritalstatus" name="maritalstatus" type="hidden" value="{$info.maritalstatus}"></div>
                            </td>
                          </tr>
                          <tr>
                            <th class="pt10">
                              <label>现居住城市</label></th>
                            <td>
                              <div class="provicecity">
                                <div class="form_wrap normal_s" style="*z-index:3;">
                                  <input id="live_c_val" type="hidden" name="live_city_val" value="{$info.live_city}" />
                                  <input id="live_c" type="button" name="live_city" class="mr_button form_select" value="{$info.live_city}" />
                                  <i class="mr_sj"></i>
                                  <div class="xl_list dn">
                                    <ul class="ul_live_city" id="live_city">
                                      <li>--选择省--</li></ul>
                                  </div>
                                </div>
                                <div class="form_wrap normal_s" style="*z-index:3;">
                                  <input id="live_city_c_val" type="hidden" name="live_city_city_val" value="{$info.live_city_city}" />
                                  <input id="live_city_c" type="button" name="live_city_city" class="mr_button form_select" value="{$info.live_city_city}" />
                                  <i class="mr_sj"></i>
                                  <div class="xl_list dn">
                                    <ul class="ul_live_city_city" id="live_city_city">
                                      <li>--选择市--</li></ul>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th class="pt10">
                              <label>联系地址</label></th>
                            <td>
                              <div class="myr_input_div_l email_s">
                                <input id="live_address" name="live_address" class="form-control" value="{$info.live_address}" /></div>
                            </td>
                          </tr>
                          <tr>
                            <th class="pt10">
                              <label>邮政编码</label></th>
                            <td>
                              <div class="myr_input_div_l mr_click_flag">
                                <input id="zip" name="zip" class="form-control" value="{$info.zip}" /></div>
                            </td>
                          </tr>
                          <tr class="lowUse">
                            <th class="pt10">
                              <label>家庭地址</label>
                              <span class="lowFreqency">低频</span></th>
                            <td>
                              <div class="myr_input_div_l email_s">
                                <input id="contact_address" name="contact_address" class="form-control" value="{$info.contact_address}" /></div>
                            </td>
                          </tr>
                          <tr>
                            <th class="pt10">
                              <label>最高学历</label></th>
                            <td>
                              <div class="form_wrap normal_s" style="*z-index:4;">
                                <input id="edu_val" name="edu_val" type="hidden" value="{$info.edu}" />
                                <input id="edu" name="edu" type="button" class="mr_button" value="{$info.edu}" />
                                <i class="mr_sj"></i>
                                <div class="xl_list dn">
                                  <ul class="ul_xl">
                                    <li>博士研究生</li>
                                    <li>EMBA</li>
                                    <li>MBA</li>
                                    <li>MPA</li>
                                    <li>硕士研究生</li>
                                    <li>双学士</li>
                                    <li>大学本科-一本</li>
                                    <li>大学本科-二本</li>
                                    <li>大学本科-三本</li>
                                    <li>大学专科</li>
                                    <li>中专</li>
                                    <li>技校/职高</li>
                                    <li>高中</li>
                                    <li>初中及以下</li>
                                    <li>其他</li>
                                    <li>无</li></ul>
                                </div>
                              </div>
                            </td>
                          </tr>
                   
                         
                          <tr>
                            <th class="pt10">
                              <label>当前户口所在地</label></th>
                            <td>
                              <div class="provicecity">
                                <div class="form_wrap normal_s" style="*z-index:3;">
                                  <input id="hukou_city_n_val" type="hidden" name="hukou_city_now_val" value="{$info.hukou_city_now}" />
                                  <input id="hukou_city_n" type="button" name="hukou_city_now" class="mr_button form_select" value="{$info.hukou_city_now}" />
                                  <i class="mr_sj"></i>
                                  <div class="xl_list dn">
                                    <ul class="ul_hukou_city_now" id="hukou_city_now">
                                      <li>--选择省--</li></ul>
                                  </div>
                                </div>
                                <div class="form_wrap normal_s" style="*z-index:3;">
                                  <input id="hukou_now_c_val" type="hidden" name="hukou_city_now_city_val" value="{$info.hukou_city_now_city}" />
                                  <input id="hukou_now_c" type="button" name="hukou_city_now_city" class="mr_button form_select" value="{$info.hukou_city_now_city}" />
                                  <i class="mr_sj"></i>
                                  <div class="xl_list dn">
                                    <ul class="ul_hukou_now_city" id="hukou_now_city">
                                      <li>--选择市--</li></ul>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        
                          <tr>
                            <th class="pt10">
                              <label>紧急联系人</label></th>
                            <td>
                              <div class="myr_input_div_l mr_click_flag">
                                <input id="contact_name" name="contact_name" class="form-control" value="{$info.contact_name}" /></div>
                            </td>
                          </tr>
                          <tr>
                            <th class="lowUse">
                              <label>紧急联系人电话</label></th>
                            <td>
                              <div class="myr_input_div_l mr_click_flag">
                                <input id="contact_phone" name="contact_phone" class="form-control" value="{$info.contact_phone}" /></div>
                            </td>
                          </tr>
                      
                        </table>
                      </div>
                      <div class="btn-group">
                        <input type="submit" class="btn-resumeac mr_save" value="保存" />
                        <input type=button value="保存并下一项" class="btn-resumeac mr_next" onclick="submitInfoFrom(); "></div>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
	

      $(document).ready(function() {
        checkChange();
        $('.content-wrap').find('input').attr('autocomplete','off');
        $('div').delegate(".tiptab_gpa", "click", function(a) {
          var top = $(this).offset().top+$(this).height()+20;
          var left = $(this).offset().left-350;
          $("#tiptab-gpa").css({top:top,left:left});
          $('#tiptab-gpa').css("position","absolute");
          
          $("#tiptab-gpa").removeClass('dn');
          $("#tiptab-gpa .tiptab").rTabs({bind : 'click',animation : 'left'});
        });

        function checkopen(){
            $('.tip-container').each(function () {
              $(this).hasClass('dn') ? '' :$(this).addClass('dn');
            });
        }
       
        $('div').delegate(".tiptab_weight", "click", function(a) {
          checkopen();
          var top = $(this).offset().top+$(this).height()+20;
          var left = $(this).offset().left-50;
          $("#tiptab-weight").css({top:top,left:left});
          $('#tiptab-weight').css("position","absolute");
          $("#tiptab-weight").removeClass('dn');
          $("#tiptab-weight .tiptab").rTabs({bind : 'click',animation : 'left'});
        });

        $('div').delegate(".tiptab_nativecity", "click", function(a) {
          checkopen();
          var top = $(this).offset().top+$(this).height()+20;
          var left = $(this).offset().left-350;
          $("#tiptab-nativecity").css({top:top,left:left});
          $('#tiptab-nativecity').css("position","absolute");
          $("#tiptab-nativecity").removeClass('dn');
          $("#tiptab-nativecity .tiptab").rTabs({bind : 'click',animation : 'left'});
        });

        $('div').delegate(".tiptab_profile", "click", function(a) {
          checkopen();
          var top = $(this).offset().top+$(this).height()+20;
          var left = $(this).offset().left-350;
          $("#tiptab-profile").css({top:top,left:left});
          $('#tiptab-profile').css("position","absolute");
          $("#tiptab-profile").removeClass('dn');
          $("#tiptab-profile .tiptab").rTabs({bind : 'click',animation : 'left'});
        });

        $('div').delegate(".tiptab_fmname", "click", function(a) {
          checkopen();
          var top = $(this).offset().top+$(this).height()+20;
          var left = $(this).offset().left-350;
          $("#tiptab-fmname").css({top:top,left:left});
          $('#tiptab-fmname').css("position","absolute");
          $("#tiptab-fmname").removeClass('dn');
          $("#tiptab-fmname .tiptab").rTabs({bind : 'click',animation : 'left'});
        });

        $('div').delegate(".tiptab_tutorname", "click", function(a) {
          checkopen();
          var top = $(this).offset().top+$(this).height()+20;
          var left = $(this).offset().left-350;
          $("#tiptab-tutorname").css({top:top,left:left});
          $('#tiptab-tutorname').css("position","absolute");
          $("#tiptab-tutorname").removeClass('dn');
          $("#tiptab-tutorname .tiptab").rTabs({bind : 'click',animation : 'left'});
        });

        $('div').delegate(".tiptab_workproperty", "click", function(a) {
          checkopen();
          var top = $(this).offset().top+$(this).height()+20;
          var left = $(this).offset().left-350;
          $("#tiptab-workproperty").css({top:top,left:left});
          $('#tiptab-workproperty').css("position","absolute");
          $("#tiptab-workproperty").removeClass('dn');
          $("#tiptab-workproperty .tiptab").rTabs({bind : 'click',animation : 'left'});
        });

        $('div').delegate(".tiptab_projectDuty", "click", function(a) {
          checkopen();
          var top = $(this).offset().top+$(this).height()+20;
          var left = $(this).offset().left-350;
          $("#tiptab-projectDuty").css({top:top,left:left});
          $('#tiptab-projectDuty').css("position","absolute");
          $("#tiptab-projectDuty").removeClass('dn');
          $("#tiptab-projectDuty .tiptab").rTabs({bind : 'click',animation : 'left'});
        });

        $('div').delegate(".tiptab_projectRemark", "click", function(a) {
          checkopen();
          var top = $(this).offset().top+$(this).height()+20;
          var left = $(this).offset().left-350;
          $("#tiptab-projectRemark").css({top:top,left:left});
          $('#tiptab-projectRemark').css("position","absolute");
          $("#tiptab-projectRemark").removeClass('dn');
          $("#tiptab-projectRemark .tiptab").rTabs({bind : 'click',animation : 'left'});
        });

        $('div').delegate(".tiptab_workDes", "click", function(a) {
          checkopen();
          var top = $(this).offset().top+$(this).height()+20;
          var left = $(this).offset().left-350;
          $("#tiptab-workDes").css({top:top,left:left});
          $('#tiptab-workDes').css("position","absolute");
          $("#tiptab-workDes").removeClass('dn');
          $("#tiptab-workDes .tiptab").rTabs({bind : 'click',animation : 'left'});
        });
         $('div').delegate(".tiptab_awardsName", "click", function(a) {
          checkopen();
          var top = $(this).offset().top+$(this).height()+20;
          var left = $(this).offset().left-350;
          $("#tiptab-awardsName").css({top:top,left:left});
          $('#tiptab-awardsName').css("position","absolute");
          $("#tiptab-awardsName").removeClass('dn');
          $("#tiptab-awardsName .tiptab").rTabs({bind : 'click',animation : 'left'});
        });
         $('div').delegate(".tiptab_awardsDes", "click", function(a) {
          checkopen();
          var top = $(this).offset().top+$(this).height()+20;
          var left = $(this).offset().left-350;
          $("#tiptab-awardsDes").css({top:top,left:left});
          $('#tiptab-awardsDes').css("position","absolute");
          $("#tiptab-awardsDes").removeClass('dn');
          $("#tiptab-awardsDes .tiptab").rTabs({bind : 'click',animation : 'left'});
        });
        $('div').delegate(".tiptab_certiName", "click", function(a) {
          checkopen();
          var top = $(this).offset().top+$(this).height()+20;
          var left = $(this).offset().left-350;
          $("#tiptab-certiName").css({top:top,left:left});
          $('#tiptab-certiName').css("position","absolute");
          $("#tiptab-certiName").removeClass('dn');
          $("#tiptab-certiName .tiptab").rTabs({bind : 'click',animation : 'left'});
        });
        $('div').delegate(".tiptab_certiDes", "click", function(a) {
          checkopen();
          var top = $(this).offset().top+$(this).height()+20;
          var left = $(this).offset().left-350;
          $("#tiptab-certiDes").css({top:top,left:left});
          $('#tiptab-certiDes').css("position","absolute");
          $("#tiptab-certiDes").removeClass('dn');
          $("#tiptab-certiDes .tiptab").rTabs({bind : 'click',animation : 'left'});
        });
        $('div').delegate(".tiptab_trainingDes", "click", function(a) {
          checkopen();
          var top = $(this).offset().top+$(this).height()+20;
          var left = $(this).offset().left-350;
          $("#tiptab-trainingDes").css({top:top,left:left});
          $('#tiptab-trainingDes').css("position","absolute");
          $("#tiptab-trainingDes").removeClass('dn');
          $("#tiptab-trainingDes .tiptab").rTabs({bind : 'click',animation : 'left'});
        });
         $('div').delegate(".tiptab_selfIntro", "click", function(a) {
          checkopen();
          var top = $(this).offset().top+$(this).height()+20;
          var left = $(this).offset().left-350;
          $("#tiptab-selfIntro").css({top:top,left:left});
          $('#tiptab-selfIntro').css("position","absolute");
          $("#tiptab-selfIntro").removeClass('dn');
          $("#tiptab-selfIntro .tiptab").rTabs({bind : 'click',animation : 'left'});
        });
          $('div').delegate(".tiptab_skill", "click", function(a) {
          checkopen();
          var top = $(this).offset().top+$(this).height()+20;
          var left = $(this).offset().left-350;
          $("#tiptab-skill").css({top:top,left:left});
          $('#tiptab-skill').css("position","absolute");
          $("#tiptab-skill").removeClass('dn');
          $("#tiptab-skill .tiptab").rTabs({bind : 'click',animation : 'left'});
        });
           $('div').delegate(".tiptab_hobbies", "click", function(a) {
          checkopen();
          var top = $(this).offset().top+$(this).height()+20;
          var left = $(this).offset().left-350;
          $("#tiptab-hobbies").css({top:top,left:left});
          $('#tiptab-hobbies').css("position","absolute");
          $("#tiptab-hobbies").removeClass('dn');
          $("#tiptab-hobbies .tiptab").rTabs({bind : 'click',animation : 'left'});
        });
            $('div').delegate(".tiptab_achievement", "click", function(a) {
          checkopen();
          var  top = $(this).offset().top+$(this).height()+20;
          var left = $(this).offset().left-350;
          $("#tiptab-achievement").css({top:top,left:left});
          $('#tiptab-achievement').css("position","absolute");
          $("#tiptab-achievement").removeClass('dn');
          $("#tiptab-achievement .tiptab").rTabs({bind : 'click',animation : 'left'});
        });

        $('div').delegate(".tiptab-close", "click", function(a) {
          $(this).parent().parent().addClass('dn');
          $(this).parent().find('.j-tab-nav li').siblings().removeClass('current'); 
          $(this).parent().find('.j-tab-nav li').first().addClass('current');
          $(this).parent().find('.j-tab-con .tiptab-con-item').siblings().css('display','none'); 
          $(this).parent().find('.j-tab-con .tiptab-con-item').first().css('display','block');
          $(this).parent().find('.j-tab-con').css('position','');
          $(this).parent().find('.j-tab-con').css({top:'',left:''});
          $(this).parent().find('.j-tab-con').css('width','');
        });

        $('div').delegate(".tiptab_prodescri", "click", function(a) {
          checkopen();
          var top = $(this).offset().top+$(this).height()+20;
          var left = $(this).offset().left-350;
          $("#tiptab-prodescri").css({top:top,left:left});
          $('#tiptab-prodescri').css("position","absolute");
          $('#tiptab-prodescri').css("z-index","10");
          $("#tiptab-prodescri").removeClass('dn');
          $("#tiptab-prodescri .tiptab").rTabs({bind : 'click',animation : 'left'});
        });
        $('div').delegate(".tiptab_workdescri", "click", function(a) {
          checkopen();
          var top = $(this).offset().top+$(this).height()+20;
          var left = $(this).offset().left-350;
          $("#tiptab-workdescri").css({top:top,left:left});
          $('#tiptab-workdescri').css("position","absolute");
          $('#tiptab-workdescri').css("z-index","10");
          $("#tiptab-workdescri").removeClass('dn');
          $("#tiptab-workdescri .tiptab").rTabs({bind : 'click',animation : 'left'});
        });

      $("input[name=resume-checked]").bind("click",function(){
        $("input[name=resume-checked]").unbind("click");
        checkChange();
          var login_check = true;//<?php echo $info[login_check]?>
          if (login_check == 1) {
              openOnce();
              var login_check = "2";
              $.ajax({
                  url:"Resume/firstOpen",
                  type: "post",
                  data: {"login_check":login_check}, 
                  success: function (result) {
                      console.log(result);
                      clickSwitch();
                  }
              })
          }else{
            clickSwitch();
          }
      });

     
    
      
      // $('.tipright').jBox('Tooltip', {
      //   position: {
      //     x: 'right',
      //     y: 'center'
      //   },
      //   width:150,
      //   outside: 'x' // Horizontal Tooltips need to change their outside position
      // });
      // $('.tiprighttext').jBox('Tooltip', {
      //   position: {
      //     x: 'right',
      //     y: 'center'
      //   },
      //   width:150,
      //   outside: 'x' // Horizontal Tooltips need to change their outside position
      // });

        // $(".form_oldatetime").datetimepicker({
        //     format: "yyyy-mm-dd",
        //     language: 'zh-CN',
        //     weekStart: 1,
        //     todayBtn:  1,
        //     autoclose: 1,
        //     todayHighlight: 1,
        //     startView: 2,
        //     minView: 2,
        //     forceParse: 0

        // });
      //alert(window.location.pathname);
      var realhash = window.location.hash;
      //alert(realhash);
      if (realhash == "#section-underline-2") {
        $("#section-edu").click();
      }else if (realhash == "#section-underline-3") {
         $("#section-work").click();
      }else if (realhash == "#section-underline-4") {
         $("#section-pro").click();
      }else if (realhash == "#section-underline-5") {
         $("#section-certi").click();
      }else if (realhash == "#section-underline-6") {
         $("#section-schpra").click();
      }else if (realhash == "#section-underline-7") {
         $("#section-schclub").click();
      }else if (realhash == "#section-underline-8") {
         $("#section-schaw").click();
      }else if (realhash == "#section-underline-9") {
         $("#section-").click();
      }else if (realhash == "#section-underline-10") {
         $("#section-train").click();
      }else if (realhash == "#section-underline-11") {
         $("#section-otherinfo").click();
      }else{
      }

    /*  $(".section-top").affix({
          offset: { 
          top: 10 
        }
      });
      $("#resumebg-left").affix({
          offset: { 
          top: 10 
        }
      });*/
       
   }); 
  function openOnce() {
    $('#switchtip').css('display','block');
  }
  function clickSwitch(){
    $("input[name=resume-checked]").click(function(){
          checkChange();  
    });
  }
  function checkChange() {
       //  var checkbox = document.getElementById('info-switch');//
       // // alert(checkbox.checked);//是否被选中
       //  if(checkbox.checked){
       //    $(".lowUse").css("display","");
       //  }else{
       //    $(".lowUse").css("display","none");
       //  }
      var rechecked = $("input[name='resume-checked']:checked").val();
        if(rechecked == "all"){
          $(".lowUse").css("display","table-row");
        }else{
          $(".lowUse").css("display","none");
        }
  }
   /* (function() {
      [].slice.call( document.querySelectorAll('.tabs') ).forEach( function( el ) {
        new CBPFWTabs( el );
      });
    })();

    var $t=new CBPFWTabs(document.getElementById( 'tab1' ) )
    document.getElementById('prev1').onclick=function(){
        var current=$t.current;
        var count=$t.items.length;
        current--;
        if(current<0) current=count-1;
        $t._show(current);
    };

    document.getElementById('next1').onclick=function(){
        var current=$t.current;
        var count=$t.items.length;
        current++;
        if(current>=count) current=0;
        $t._show(current);
    };*/

    function tonext(){
       document.getElementById('next1').click();
    }
</script>