<template>
   <!-- 主页 -->
    <div>
      <div class="header_section">
         <div class="header_main">
            <!--纵栏-->
            <div class="mobile_menu">
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <div class="logo_mobile"><router-link to="/"><img src="../images/logo.png"></router-link></div>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                     <ul class="navbar-nav">
                        <li class="nav-item">
                           <router-link to="/" class="nav-link">首页</router-link>
                        </li>
                        <li class="nav-item">
                           <router-link to="/about" class="nav-link">景区风景</router-link>
                        </li>
                        <li class="nav-item">
                           <router-link to="/vlog" class="nav-link">旅行vlog</router-link>
                        </li>
                        <li class="nav-item">
                           <ruter-link to="/contact" class="nav-link">联系我们</ruter-link>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>

            <!-- 横栏 -->
            <div class="container-fluid">
               <div class="logo"><router-link to="/"><img src="../images/logo.png"></router-link></div>
               <div class="menu_main">
                  <ul>
                     <li class="active"><router-link to="/" class="nav-link">首页</router-link></li>
                     <li><router-link to="/about" class="nav-link">景区风景</router-link></li>
                     <li><router-link to="/vlog" class="nav-link">旅行vlog</router-link></li>
                     <li><router-link to="/contact" class="nav-link">联系我们</router-link></li>
                  </ul>
               </div>
            </div>
         </div>

         <!-- 首页轮播图 -->
         <div class="banner_section layout_padding">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <div class="container">
                        <h2 class="banner_taital">沿途有你</h2>
                        <p class="banner_text">为保证体验，请勿在微信内打开，切换至浏览器更流畅哦~</p>
                        <div class="read_bt"><router-link to="/about">了解更多</router-link></div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="container">
                        <h2 class="banner_taital">Travel with U</h2>
                        <p class="banner_text">Avoid WeChat – use a browser for better experience!</p>
                        <div class="read_bt"><router-link to="/about">Learn More</router-link></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
  
      <!-- 景区风景 -->
      <div class="services_section layout_padding">
         <div class="container">
            <h1 class="services_taital">景区风景</h1>
            <p class="services_text">景区有这些美丽的风景。</p>
            <div class="services_section_2">
               <div class="row">
                  <div class="col-md-4">
                     <div><img src="../images/img-1.png" class="services_img"></div>
                     <div class="btn_main"><router-link to="/about">景点1</router-link></div>
                  </div>
                  <div class="col-md-4">
                     <div><img src="../images/img-2.png" class="services_img"></div>
                     <div class="btn_main active"><router-link to="/about">景点2</router-link></div>
                  </div>
                  <div class="col-md-4">
                     <div><img src="../images/img-3.png" class="services_img"></div>
                     <div class="btn_main"><router-link to="/about">景点3</router-link></div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <!-- 旅行VLOG -->
      <div class="about_section layout_padding">
         <div class="container-fluid">
            <div class="row">
               <div class="col-md-6">
                  <div class="about_taital_main">
                     <h1 class="about_taital">旅行VLOG</h1>
                     <p class="about_text">不仅可以看到美丽风景，还可以获取旅行VLOG。</p>
                     <div class="readmore_bt"><router-link to="/vlog">获取VLOG</router-link></div>
                  </div>
               </div>
               <div class="col-md-6 padding_right_0">
                  <div><img src="../images/about-img.png" class="about_img"></div>
               </div>
            </div>
         </div>
      </div>

      <!-- 首页轮播图结束 -->
      <div class="blog_section layout_padding">
         <div class="container">
            <h1 class="blog_taital">旅行vlog</h1>
            <p class="blog_text">您可以获取为您拍摄的专属于您的旅行vlog</p>
            <div class="play_icon_main">
               <div class="play_icon"><router-link to="/vlog"><img src="../images/play-icon.png"></router-link></div>
            </div>
         </div>
      </div>

      <!-- 更多详情 -->
      <div class="choose_section layout_padding">
         <div class="container">
            <div class="newsletter_box">
               <h1 class="let_text">更多详情</h1>
               <div class="getquote_bt"><router-link to="/contact">联系我们</router-link></div>
            </div>
         </div>
      </div>

      <!-- 尾部 -->
      <div class="footer_section layout_padding">
         <div class="container">
            <div class="location_main">
               <div class="call_text"><img src="../images/call-icon.png"></div>
               <div class="call_text"><router-link to="/a">电话：+86 123 1234 1234</router-link></div>
               <div class="call_text"><img src="../images/mail-icon.png"></div>
               <div class="call_text"><router-link to="/a">邮箱：123 123 123@.com</router-link></div>
            </div>
         </div>
      </div>

      <!-- 版权所有 -->
      <div class="copyright_section">
         <div class="container">
            <p class="copyright_text">版权所有 &copy; <a target="_blank" href="#">智旅VLOG</a></p>
         </div>
      </div>
    </div>
</template>

<script>

</script>

<style scoped>

@import url("../css/bootstrap.min.css");

@import url("../css/style.css");

@import url("../css/responsive.css");

@import url("../css/jquery.mCustomScrollbar.min.css");

@import url("../css/font-awesome.css");

@import url("../css/owl.carousel.min.css");
@import url("../css/jquery.fancybox.min.css");
</style>