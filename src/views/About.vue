<template>
   <!-- 景区风景 -->
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
                           <router-link to="/contact" class="nav-link">联系我们</router-link>
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
                     <div class="btn_main"><router-link to="#">景点1</router-link></div>
                  </div>
                  <div class="col-md-4">
                     <div><img src="../images/img-2.png" class="services_img"></div>
                     <div class="btn_main active"><router-link to="#">景点2</router-link></div>
                  </div>
                  <div class="col-md-4">
                     <div><img src="../images/img-3.png" class="services_img"></div>
                     <div class="btn_main"><router-link to="#">景点3</router-link></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
      <!-- 尾部 -->
      <div class="footer_section layout_padding">
         <div class="container">
            <div class="location_main">
               <div class="call_text"><img src="../images/call-icon.png"></div>
               <div class="call_text">电话：+86 123 1234 1234</div>
               <div class="call_text"><img src="../images/mail-icon.png"></div>
               <div class="call_text">邮箱：123 123 123@.com</div>
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