<template>
  <div id="body">
    <div id="container">
      <div class="clearfixs mr_created " id="tab1">
  
        <section class="container" id="editresume">
          <div class="tabs tabs-style-underline">
            <div class="resumebg-left" id="resumebg-left">

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
                </ul>
              </nav>
            </div>
           	 <div class="right-content">
              <div class="content-wrap" id="userAllInfo">
                <section id="su1">
                  <div class="baseinfo-top">
                    <h3>基本信息</h3>
                   </div>
                </section>
                <section id="section-underline-2">
                  <div class="baseinfo-top">
                    <h3>教育信息</h3>
                   </div>
                </section>
                <section id="section-underline-3">
                  <div class="baseinfo-top">
                    <h3>工作经历</h3>
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
 
   (function() {
      [].slice.call( document.querySelectorAll('.tabs') ).forEach( function( el ) {
        new CBPFWTabs( el );
      });
    })();

    var $t=new CBPFWTabs(document.getElementById( 'tab1' ) )
    document.getElementById('prev1').onclick=new Function("function(){var current=$t.current;var count=$t.items.length;current--;if(current<0) current=count-1;$t._show(current);}");
   // document.getElementById('prev1').onclick=

    document.getElementById('next1').onclick=function(){
        var current=$t.current;
        var count=$t.items.length;
        current++;
        if(current>=count) current=0;
        $t._show(current);
    };

       
   }); 


 

    function tonext(){
       document.getElementById('next1').click();
    }
</script>