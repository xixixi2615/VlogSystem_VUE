<template>
   <!-- 联系我们 -->
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

      <!-- 智旅VLOG介绍 -->
      <div class="contact_section layout_padding">
        <div class="container">
          <h1 class="contact_taital">智旅VLOG：景区智能旅拍新方案</h1>
          <div class="about_content">
            <p class="intro_text">智旅VLOG是专为各类景区打造的智能旅拍服务，通过"智能抓拍+自动剪辑+一键获取"的模式，为游客记录游玩中的精彩瞬间，同时为景区增添特色服务亮点。</p>
          </div>
        </div>
      </div>

      <!-- 核心功能与优势 -->
       <div class="client_section layout_padding">
         <div class="container">
            <h1 class="about_taital">核心功能与优势</h1>
            <div class="features_section">
               <div class="row">
                  <div class="col-md-6 mb-4">
                     <div class="feature_box">
                        <div class="feature_icon">🎥</div>
                        <h3 class="feature_title">全场景智能拍摄</h3>
                        <p class="feature_text">景区在热门打卡点、游乐项目沿线等关键位置布设专用摄像头，全程捕捉游客游玩动态，覆盖观景、互动、体验项目等多元场景。</p>
                     </div>
                  </div>
                  <div class="col-md-6 mb-4">
                     <div class="feature_box">
                        <div class="feature_icon">🎬</div>
                        <h3 class="feature_title">快速生成专属Vlog</h3>
                        <p class="feature_text">依托人脸识别技术，游客扫码授权后，系统自动比对素材并剪辑包装，快速生成带特效、配乐的完整Vlog。</p>
                     </div>
                  </div>
                  <div class="col-md-6 mb-4">
                     <div class="feature_box">
                        <div class="feature_icon">📱</div>
                        <h3 class="feature_title">便捷获取与分享</h3>
                        <p class="feature_text">游客可通过景区小程序查看样片，付费（9.9元起）即可获取无水印完整版，直接分享至社交平台，满足传播需求。</p>
                     </div>
                  </div>
                  <div class="col-md-6 mb-4">
                     <div class="feature_box">
                        <div class="feature_icon">💰</div>
                        <h3 class="feature_title">景区增收新路径</h3>
                        <p class="feature_text">无需景区额外投入大量人力，通过设备布设与运营分成模式，为景区开辟轻量化增收渠道，提升游客二次消费率。</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <!-- 适用场景 -->
      <div class="about_section layout_padding" style="background-color: #f8f9fa;">
        <div class="container">
          <h1 class="about_taital">适用场景</h1>
          <div class="about_content">
            <p class="about_text" style="font-size: 18px; text-align: center; color: #555;">覆盖自然山水景区、主题游乐园、文化古迹园区、户外体验基地等各类旅游场所，尤其适配过山车、漂流、徒步栈道等游客不便自行拍摄的场景。</p>
          </div>
        </div>
      </div>

      <!-- 合规与隐私保障 -->
      <div class="services_section layout_padding">
        <div class="container">
          <h1 class="about_taital">合规与隐私保障</h1>
          <div class="compliance_section">
            <div class="compliance_item">
              <h4 class="compliance_title">显著位置提示</h4>
              <p class="compliance_text">在拍摄区域设置清晰标识，告知游客拍摄用途与获取方式，保障知情权。</p>
            </div>
            <div class="compliance_item">
              <h4 class="compliance_title">规范信息存储</h4>
              <p class="compliance_text">严格遵循个人信息保护相关法规，规范处理和存储拍摄素材及相关信息。</p>
            </div>
            <div class="compliance_item">
              <h4 class="compliance_title">自愿授权机制</h4>
              <p class="compliance_text">游客需主动完成人脸识别授权，未授权则不进行素材比对与使用，规避合规风险。</p>
            </div>
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

/* 自定义样式 */
.feature_title {
  color: #2b2278;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
}

.feature_box {
  background: #fff;
  border-radius: 10px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  height: 100%;
  border: 1px solid #f0f0f0;
}

.feature_box:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(43, 34, 120, 0.15);
}

.feature_icon {
  font-size: 48px;
  margin-bottom: 20px;
  display: block;
}

.feature_text {
  color: #666;
  font-size: 16px;
  line-height: 1.6;
  text-align: left;
  margin: 0;
}

.features_section {
  margin-top: 50px;
}

.intro_text {
  font-size: 18px;
  line-height: 1.8;
  text-align: center;
  color: #333;
  margin: 20px 0;
}

.about_taital {
  text-align: center;
  color: #2b2278;
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 30px;
}

.compliance_section {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.compliance_item {
  background: #fff;
  border-radius: 8px;
  padding: 30px 35px;
  margin-bottom: 25px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #2b2278;
  transition: all 0.3s ease;
  overflow: hidden;
}

.compliance_item:hover {
  transform: translateX(5px);
  box-shadow: 0 5px 15px rgba(43, 34, 120, 0.15);
}

.compliance_title {
  color: #2b2278;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 5px;
  text-align: left;
  line-height: 1.4;
  clear: both;
}

.compliance_text {
  color: #666;
  font-size: 16px;
  line-height: 1.6;
  text-align: left;
  margin: 0;
  padding-top: 5px;
  clear: both;
}

.icon_1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.icon_main {
  text-align: center;
  margin-bottom: 20px;
}

.internet_text {
  color: #2b2278;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
}
</style>