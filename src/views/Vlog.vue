<template>
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

      <!-- 旅行VLOG -->
      <div class="about_section layout_padding">
         <div class="container-fluid">
            <div class="row">
               <!-- 左侧内容 -->
               <div class="col-md-6">
                  <div class="about_taital_main" style="padding-right: 30px;">
 
                      <h1 class="about_taital">上传人脸图像</h1>
                      <p class="about_text">上传人脸图像，您将得到专属于您的景区旅行视频。</p>
                      <p>用户ID: {{ userId }}</p>
                      
                      <!--字体-->
                      <p class="about_text">
 
                      <!-- 人脸图片上传部分 -->
  
  
                      <div>
                        <p><label for="file-upload" class="upload-label">选择人脸图像
                            <input type="file" id="file-upload" @change="selectFacePic" accept="image/jpeg, image/png" />
                        </label>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                        <el-button type="primary" @click="uploadFacePic" :disabled="facePic==null" round size="large" color="#2b2278" style="width: 100px;">
                        上传
                        </el-button></p>
                        <div v-if="imageRemoteUrl || imageUrl">
                            <p>预览人脸图像：</p>
                            <div v-if="imageUrl"><img :src="imageUrl" alt="预览" width="300" /></div>
                            <div v-else-if="imageRemoteUrl"><img :src="imageRemoteUrl" alt="预览" width="300" /></div>
                        </div>
                        <div v-if="facePicInfo">
                            <p>{{ facePicInfo }}</p>
                        </div>
                      </div>

                      <p></p> 
    
 
                      <p>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </p>

                      <!--选择背景音乐类型-->
                     <div>
                     <p>
                        <p>请选择背景音乐：</p>
                        <el-select v-model="selectedMusicType" placeholder="选择背景音乐" style="width: 200px;" class="musicSelect">
                           <el-option label="古风" value="bgm01_gufeng"></el-option>
                           <el-option label="气势" value="bgm02_qishi"></el-option>
                           <el-option label="送别" value="bgm03_songbie"></el-option>
                           <el-option label="激昂" value="bgm04_jiang"></el-option>
                           <el-option label="哀伤" value="bgm05_aishang"></el-option>
                           <el-option label="希望" value="bgm06_xiwang"></el-option>
                        </el-select>
                     </p>
                     </div>


                      <!-- 获取Vlog按钮 -->
                     <p><el-button type="primary" :loading="loading" :disabled="loading" @click="GetVideos" round size="large" color="#2b2278" style="width: 300px;">
                        {{ loading ? '旅行VLOG加载中...' : '获取旅行VLOG' }}
                     </el-button></p>

                     <!--<div v-if="taskStatus" class="status-container">
                     <p>任务状态: {{ taskStatusText }}</p>
                     <el-progress :percentage="progress" stroke-width="6" v-if="progress > 0"></el-progress>
                     <p v-if="taskStatus === 'failed'" class="error-message">
                     任务失败，请重试
                     </p>
                     </div>-->
 
                    </p>
 
                  </div>
               </div>
 
               <!-- 右侧内容 --> 
               <div class="col-md-6 padding_right_0">
                   <div>
                      <!--图片-->
                     <div v-if="!videoUrl">
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <img src="../images/about-img.png" class="about_img">
                     </div>
                      
 
                      <!-- vlog预览 -->
                     <div v-if="videoUrl" class="about_taital_main">
                        <h1 class="about_taital">旅行VLOG预览</h1>
                        <p class="about_text">预览版本为带水印版本，付费后可下载高清无水印版本。</p>

                        <div style="margin-top: 30px;">
                          <!-- 付费前的下载 -->
                          <div v-if="!isPaid" class="payment-section">
                             <p class="about_text">
                                <strong>高清无水印版本下载</strong><br>
                                价格：￥{{ paymentAmount }}
                             </p>
                             <p>
                                <el-button type="primary" @click="showPaymentDialog = true" round size="large" color="#2b2278" class="payment-btn">
                                   付费下载无水印版本
                                </el-button>
                             </p>
                          </div>

                          <!-- 付费后的下载 -->
                          <div v-if="isPaid" class="paid-download-section">
                             <p class="about_text" style="margin-bottom: 20px;">
                                <span style="background-color: white; border: 2px solid #2b2278; color: #2b2278; padding: 8px 16px; border-radius: 20px; font-weight: 700; font-size: 16px; display: inline-block;">已付费 ✓</span>
                             </p>
                             <p>
                                <el-button type="primary" @click="downloadVideo" round size="large" color="#2b2278" class="payment-btn">
                                   下载高清无水印版本
                                </el-button>
                             </p>
                          </div>
                        </div>

                        <!-- 视频预览 -->
                        <div class="video-preview" style="margin-top: 25px;">
                           <video controls :src="videoUrl" style="width: 100%; max-width: 100%; height: auto;"></video>
                           <p class="video-watermark-notice">* 当前为带水印预览版本</p>
                        </div>                      
                     </div>                                               
                   </div>
               </div>

            </div>
         </div>
      </div>     

      <!-- 付费对话框 -->
      <el-dialog 
         v-model="showPaymentDialog" 
         width="600px" 
         center
         :close-on-click-modal="false"
         class="payment-dialog-wrapper">
         <div class="payment-dialog">
            <div class="payment-header">
               <div class="payment-icon">
                  <i class="fa fa-video-camera"></i>
               </div>
               <h2>高清无水印版本</h2>
               <div class="price-tag">￥{{ paymentAmount }}</div>
            </div>

            <div class="payment-features">
               <h4>付费版本特色</h4>
               <div class="features-grid">
                  <div class="feature-item">
                     <i class="fa fa-hd-video"></i>
                     <span>1080P高清画质</span>
                  </div>
                  <div class="feature-item">
                     <i class="fa fa-eye-slash"></i>
                     <span>无水印版本</span>
                  </div>
                  <div class="feature-item">
                     <i class="fa fa-music"></i>
                     <span>更好的音频质量</span>
                  </div>
                  <div class="feature-item">
                     <i class="fa fa-download"></i>
                     <span>永久下载权限</span>
                  </div>
               </div>
            </div>
            
            <div class="payment-methods">
               <h4>选择支付方式</h4>
               <el-radio-group v-model="selectedPaymentMethod" class="payment-options-horizontal">
                  <el-radio label="alipay" class="payment-radio-horizontal">
                     支付宝
                  </el-radio>
               </el-radio-group>
            </div>
         </div>
         
         <template #footer>
            <div class="payment-footer">
               <el-button @click="showPaymentDialog = false" class="cancel-btn">
                  <i class="fa fa-times"></i>
                  取消
               </el-button>
               <el-button 
                  type="primary" 
                  @click="processPayment" 
                  :loading="paymentProcessing" 
                  class="pay-btn"
                  color="#2b2278">
                  <i class="fa fa-credit-card" v-if="!paymentProcessing"></i>
                  {{ paymentProcessing ? '支付处理中...' : `立即支付 ￥${paymentAmount}` }}
               </el-button>
            </div>
         </template>
      </el-dialog>
     
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
  import { BASE_URL } from '../utils/apiConfig'; 

  export default {
    data() {
      return {
        stream: null,//摄像头的媒体流
        intervalIdFrame: null,//时间间隔
        isCamera:false,//摄像头是否开启

        intervalIdRecord:null,//录制状态检查时间间隔
        mediaRecorder: null,//MediaRecorder对象
        recordedChunks: [],//存储录制视频的片段
        recording: false,//录制状态(前端)

        facePic:null,//人脸图片
        imageUrl:null,//人脸图像URL方便预览
        imageRemoteUrl:null,//后端返回的人脸图像URL方便预览
        facePicInfo:null,//人脸上传失败的具体原因

        selectedMusicType: 'bgm01_gufeng',// 音乐：默认选择类型1

        //测试使用——方便切换景点录制视频
        selectedViewPosition:'view1',//景点位置：默认选择景点1

        loading: false, // 加载状态

        videoUrl: '', // 最终合成的视频URL

        userId: null, // 用户ID

        // taskId: null, // 后端任务ID
        // taskStatus: null, // 任务状态
        // statusPolling: null, // 轮询状态ID
        // progeress: 0, // 进度(0-100)
        
        // 付费下载相关
        isPaid: false, // 是否已付费
        showPaymentDialog: false, // 是否显示付费对话框
        paymentAmount: 29.99, // 付费金额
        selectedPaymentMethod: 'alipay', // 选择的支付方式
        paymentProcessing: false, // 支付处理中状态
        currentOrderNo: null, // 当前订单号
        paymentPolling: null, // 支付状态轮询定时器
      };
    },
    
  methods: {

      // // 启动状态轮询
      // startStatusPolling() {
      //   // 清除可能存在的旧定时器
      //   if (this.statusPolling) {
      //     clearInterval(this.statusPolling);
      //   }

      //   // 每3秒查询一次状态
      //   this.statusPolling = setInterval(async () => {
      //     await this.checkTaskStatus();
      //   }, 3000);
      // },

      // // 查询任务状态
      // async checkTaskStatus() {
      //   if (!this.taskId) return;

      //   try {
      //     const response = await fetch(`${BASE_URL}/taskStatus?taskId=${this.taskId}`);
      //     const status = await response.json();

      //     this.taskStatus = status.status;
      //     this.progress = status.progress || 0; // 更新进度

      //     // 任务完成或失败时停止轮询
      //     if (status.status === 'completed') {
      //       this.videoUrl = `${BASE_URL}${status.outputPath}`; // 使用后端返回的视频路径
            
      //       // 保存视频URL到本地存储
      //       const userId = this.getUserId();
      //       if (userId) {
      //         try {
      //           localStorage.setItem(`videoUrl_${userId}`, this.videoUrl);
      //           localStorage.setItem(`videoTime_${userId}`, new Date().toISOString());
      //           localStorage.setItem(`musicType_${userId}`, this.selectedMusicType);
      //           console.log('任务完成，视频URL已保存到 localStorage:', this.videoUrl);
      //         } catch (e) {
      //           console.warn('保存视频URL失败:', e);
      //         }
      //       }
            
      //       this.stopStatusPolling();
      //       this.loading = false;
      //     } else if (status.status === 'failed') {
      //       alert(`任务失败: ${status.message || '未知错误'}`);
      //       this.stopStatusPolling();
      //       this.loading = false;
      //     }
      //   } catch (error) {
      //     console.error('Error checking task status:', error);
      //   }
      // },

      // // 停止轮询
      // stopStatusPolling() {
      //   if (this.statusPolling) {
      //     clearInterval(this.statusPolling);
      //     this.statusPolling = null;
      //   }
      // },

      //开启摄像头
      async startCamera() {
        this.isCamera=true;
        try {
          //获取摄像头和麦克风流
          this.stream = await navigator.mediaDevices.getUserMedia({ video: true,audio: true});
          this.$refs.CameraVideo.srcObject = this.stream;
          // 每秒获取 8 次状态
          this.intervalIdRecord = setInterval(this.checkRecordingStatus, 125);
          // 每秒获取 8 帧
          this.intervalIdFrame = setInterval(this.captureFrame, 125);
        } catch (error) {
          console.error("Error accessing camera: ", error);
        }
    },
      //关闭摄像头
      stopCamera() {
        if (this.stream) {
          //视频流
          this.stream.getTracks().forEach(track => track.stop());
          this.stream = null;
          //抓帧时间间隔
          clearInterval(this.intervalIdFrame);
          clearInterval(this.intervalIdRecord);
          this.intervalIdFrame = null;
          this.intervalIdRecord = null;
          //摄像头开启状态
          this.isCamera=false;
        }
    },


    //抓帧
      captureFrame() {
        const canvas = document.createElement('canvas');
        canvas.width = 640; // 与视频宽度一致
        canvas.height = 480; // 与视频高度一致
  
        const context = canvas.getContext('2d');
        context.drawImage(this.$refs.CameraVideo, 0, 0, canvas.width, canvas.height);
  
        // 将图像数据转换为 base64 URL
        const frameData = canvas.toDataURL('image/jpeg');
  
        // 发送数据到后端
        this.sendFrameToBackend(frameData);
    },
    //发送帧
      async sendFrameToBackend(frameData) {
        try {
          await fetch(`${BASE_URL}/uploadFrames`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
               image: frameData,
               viewPosition: this.selectedViewPosition//传输景点位置
             }),
          });
        } catch (error) {
          console.error("Error sending frame to backend: ", error);
        }
    },


      //检查录制状态
      async checkRecordingStatus() {
        const response = await fetch(`${BASE_URL}/isRecording`);
        const data = await response.json();

        if (data.isRecording && !this.recording) {//录制开始
          this.startRecording();    
          //开始录制时停止发送帧 
          clearInterval(this.intervalIdFrame);    
        } else if (!data.isRecording && this.recording) {//录制结束
          this.stopRecording();
          //结束录制时恢复发送帧
          this.intervalIdFrame = setInterval(this.captureFrame, 125);
        }  
    },
    //开始录制
      startRecording() {
      //初始化
      this.mediaRecorder = new MediaRecorder(this.stream, { mimeType: 'video/webm' });
      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.recordedChunks.push(event.data);
        }
      };
      this.mediaRecorder.onstop=this.uploadVideo;
      this.mediaRecorder.start();
      this.recording = true;
      console.log("开始录制");
    },
    //停止录制
    stopRecording() {
        if (this.mediaRecorder) {
        this.mediaRecorder.stop();
        this.recording = false;
        console.log("停止录制");
      }
    },
    //上传录制视频
    async uploadVideo() {
      const blob = new Blob(this.recordedChunks, { type: 'video/webm' });
      const mp4File = await this.convertWebmToMp4(blob, 'peopleVideo.mp4');
      const formData = new FormData();
      formData.append('video', mp4File);

      //测试使用——方便切换景点录制视频
      formData.append('viewPosition', this.selectedViewPosition); // 将选择的景点位置添加到 FormData 中

      await fetch(`${BASE_URL}/uploadVideo`, {
        method: 'POST',
        body: formData,
      });

      this.recordedChunks = [];
      console.log("视频上传成功");
    },

    // =========================== 以上功能作废 ===========================

    //选择人脸图像
    selectFacePic(event) {
      this.facePic = event.target.files[0];
      if (this.facePic) {
        this.imageUrl = URL.createObjectURL(this.facePic); // 预览图像
      }
    },

    // 浏览器本地保存 userId，确保同一用户多次使用时 ID 一致
    getUserId() {
      // 优先返回内存中的 userId
      if (!this.userId) {
        // 再尝试从 localStorage 恢复
        try {
          const stored = localStorage.getItem('userId');
          if (stored) {
            this.userId = stored;
            console.log('从 localStorage 恢复 userId:', stored);
          } else {
            console.log('没有 userid 存在');
          }
        } catch (e) {
          console.warn('读取 localStorage 失败', e);
        }
      } else {
        console.log('已存在 userId:', this.userId);
      }
      return this.userId;
    },

    generateUserId() {
      // 生成新的随机 ID（每次上传新人脸都生成新ID）
      const userId = 'user_' + Math.random().toString(36).substr(2, 9) ;
      this.userId = userId;
      
      // ID持久化到 localStorage
      try {
        localStorage.setItem('userId', userId);
        console.log('新 userId 已生成并保存:', userId);
      } catch (e) {
        console.warn('localStorage.setItem 失败:', e);
      }
      return this.userId;
    },

    // 清理指定用户的所有本地数据
    clearUserLocalData(userId) {
      if (!userId) return;
      
      console.log('清理用户数据:', userId);
      
      try {
        // 清除视频相关
        localStorage.removeItem(`videoUrl_${userId}`);
        localStorage.removeItem(`videoTime_${userId}`);
        localStorage.removeItem(`musicType_${userId}`);
        
        // 清除支付相关
        localStorage.removeItem(`paid_${userId}`);
        localStorage.removeItem(`paymentMethod_${userId}`);
        localStorage.removeItem(`paymentTime_${userId}`);
        localStorage.removeItem(`orderNo_${userId}`);
        
        // 重置组件状态
        this.videoUrl = '';
        this.isPaid = false;
        this.currentOrderNo = null;
        
        // 停止支付轮询
        if (this.paymentPolling) {
          clearInterval(this.paymentPolling);
          this.paymentPolling = null;
        }
        
        console.log('用户数据清理完成');
      } catch (e) {
        console.warn('清理用户数据失败:', e);
      }
    },

    //上传人脸图像
    async uploadFacePic() {
      if (!this.facePic) {
        alert("请先选择一张图片！");
        return;
      }

      // 先获取旧的 userId（如果存在），用于清理旧数据
      const oldUserId = this.getUserId();
      if (oldUserId) {
        console.log('检测到旧用户数据，清理中...', oldUserId);
        this.clearUserLocalData(oldUserId);
      }

      // 生成新的 userId
      const userId = this.generateUserId();
      const formData = new FormData();
      formData.append('userId', userId); // 将 userId 添加到 FormData 中
      formData.append('facePic', this.facePic);

      try {
        const response = await fetch(`${BASE_URL}/uploadFacePic`, {
        //const response = await fetch('http://10.21.140.30:5000/uploadFacePic', {
          method: 'POST',
          body: formData,
        });
        const temp = await response.json();
        this.facePicInfo = temp.message;
        console.log(this.facePicInfo);

        // 后端返回的人脸图像URL方便预览
        this.imageRemoteUrl = `/facepics/${userId}.jpg`;//服务器
        //this.imageRemoteUrl = `${BASE_URL}/facepics/${userId}.jpg`;//本地####
        console.log('Generated Remote Image URL:', this.imageRemoteUrl); // 添加日志，方便调试

      } catch (error) {
        console.error('上传失败:', error);
      }
    },

    //获取旅行vlog
    async GetVideos(){
        const userId = this.getUserId();
    
        // 检查用户ID是否存在（确保已上传人脸）
        if (!userId) {
            alert('请先上传人脸图像以生成用户信息');
            this.loading = false;
            return;
        }

        // 清空视频预览链接，避免显示旧视频
        this.videoUrl = '';

        // 检查是否已有相同音乐类型的视频
        const storedVideoUrl = localStorage.getItem(`videoUrl_${userId}`);
        const storedMusicType = localStorage.getItem(`musicType_${userId}`);
        if (storedVideoUrl && storedMusicType === this.selectedMusicType) {
          const confirmRegenerate = confirm('您已经有一个相同音乐类型的视频了，是否要重新生成？');
          if (!confirmRegenerate) {
            // 用户选择不重新生成，直接显示已有视频
            this.videoUrl = storedVideoUrl;
            return;
          }
          // 如果用户选择重新生成，清除旧的localStorage数据
          localStorage.removeItem(`videoUrl_${userId}`);
          localStorage.removeItem(`videoTime_${userId}`);
          localStorage.removeItem(`musicType_${userId}`);
        }
    
        const formData = new FormData();
        formData.append('musicType', this.selectedMusicType);
        formData.append('userId', userId); // 传递用户ID到后端

        this.loading = true; // 开始加载
        // this.taskStatus = null; // 重置任务状态
        // this.progeress = 0; // 重置进度

        try {
          const response = await fetch(`${BASE_URL}/getVideo`, {
            method: 'POST',
            body: formData
          });
          const result = await response.json();
          console.log('GetVideos response:', result); // 添加日志，方便调试

          //this.videoUrl = `${BASE_URL}/outputs/${userId}_output.mp4`; // 重置视频URL//本地####
          this.videoUrl = `/outputs/${userId}_output.mp4`; // 重置视频URL//服务器
          
          // 保存视频URL到本地存储
          try {
            localStorage.setItem(`videoUrl_${userId}`, this.videoUrl);
            localStorage.setItem(`videoTime_${userId}`, new Date().toISOString());
            localStorage.setItem(`musicType_${userId}`, this.selectedMusicType);
            console.log('视频URL已保存到 localStorage:', this.videoUrl);
          } catch (e) {
            console.warn('保存视频URL失败:', e);
          }

        } catch (error) {
          console.error('Error uploading videos:', error);
        } finally {
          this.loading = false; // 结束加载
        }
    },
    // 下载合成的视频
    downloadVideo() {
        const userId = this.getUserId();
        if (!userId) {
            alert('请先上传人脸图像以生成用户信息');
            return;
        }
        
        // 验证是否已付费
        if (!this.isPaid) {
            this.$message.warning('请先完成付费才能下载高清无水印版本');
            this.showPaymentDialog = true;
            return;
        }
        
        // 付费后下载无水印版本
        window.open(`${BASE_URL}/downloadVideo?userId=${userId}`);
        this.$message.success('开始下载高清无水印版本');
    },

    // 处理付费流程
    async processPayment() {
      this.paymentProcessing = true;
      
      try {
        const userId = this.getUserId();
        if (!userId) {
          this.$message.error('请先上传人脸图像');
          this.paymentProcessing = false;
          return;
        }

        // 创建支付订单
        const orderData = {
          subject: 'VLog高清视频下载',
          total_amount: this.paymentAmount,
          userId: userId
        };

        const response = await fetch(`${BASE_URL}/createOrder`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData)
        });

        const result = await response.json();
        
        if (result.code === 200) {
          // 保存订单号以供后续查询
          this.currentOrderNo = result.data.out_trade_no;
          localStorage.setItem(`orderNo_${userId}`, this.currentOrderNo);
          
          // 打开支付宝支付页面
          window.open(result.data.pay_url, '_blank'); // '_blank' - 新标签页/新窗口 '_self' - 当前窗口
          
          // 开始轮询订单状态
          this.startPaymentPolling();
          
          this.$message.info('请在新窗口完成支付，支付完成后会自动更新状态');
        } else {
          this.$message.error(result.msg || '创建订单失败');
        }
      } catch (error) {
        console.error('支付处理错误:', error);
        this.$message.error('支付处理出错，请重试');
      } finally {
        this.paymentProcessing = false;
      }
    },

    // 开始轮询支付状态——每3秒检查一次支付状态
    startPaymentPolling() {
      if (this.paymentPolling) {
        clearInterval(this.paymentPolling);
      }
      
      this.paymentPolling = setInterval(async () => {
        await this.checkPaymentStatus();
      }, 3000); // 每3秒检查一次
    },

    // 检查支付状态
    async checkPaymentStatus() {
      if (!this.currentOrderNo) return;
      
      try {
        const response = await fetch(`${BASE_URL}/queryOrder?out_trade_no=${this.currentOrderNo}`);
        const result = await response.json();
        
        if (result.code === 200) {
          const status = result.data.status;
          
          if (status === 'paid') {
            // 支付成功
            this.isPaid = true;
            this.showPaymentDialog = false;
            
            // 保存付费状态到本地存储
            const userId = this.getUserId();
            try {
              localStorage.setItem(`paid_${userId}`, 'true');
              localStorage.setItem(`paymentMethod_${userId}`, this.selectedPaymentMethod);
              localStorage.setItem(`paymentTime_${userId}`, new Date().toISOString());
              localStorage.setItem(`orderNo_${userId}`, this.currentOrderNo);
            } catch (e) {
              console.warn('保存付费状态失败:', e);
            }
            
            // 停止轮询
            if (this.paymentPolling) {
              clearInterval(this.paymentPolling);
              this.paymentPolling = null;
            }
            
            this.$message.success('付费成功！现在可以下载高清无水印版本了');
          } else if (status === 'closed') {
            // 订单关闭
            this.$message.error('订单已关闭，请重新发起支付');
            if (this.paymentPolling) {
              clearInterval(this.paymentPolling);
              this.paymentPolling = null;
            }
          }
          // 如果是 waiting 状态，继续轮询
        } else {
          console.error('查询订单状态失败:', result.msg);
        }
      } catch (error) {
        console.error('查询支付状态错误:', error);
      }
    },

    // 检查支付回调
    checkPaymentCallback() {
      const urlParams = new URLSearchParams(window.location.search);
      const payment = urlParams.get('payment');
      const userId = urlParams.get('userId');
      const orderNo = urlParams.get('orderNo');
      
      if (payment === 'success') {
        this.$message.success('支付成功！现在可以下载高清无水印版本了');
        if (userId) {
          this.userId = userId;
          this.isPaid = true;
          // 保存付费状态
          try {
            localStorage.setItem(`paid_${userId}`, 'true');
            localStorage.setItem(`paymentTime_${userId}`, new Date().toISOString());
            if (orderNo) {
              localStorage.setItem(`orderNo_${userId}`, orderNo);
            }
          } catch (e) {
            console.warn('保存付费状态失败:', e);
          }
        }
        // 清除URL参数
        window.history.replaceState({}, document.title, window.location.pathname);
      } else if (payment === 'failed') {
        this.$message.error('支付失败，请重试');
        // 清除URL参数
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    },

    // 将webm格式转换为mp4格式
    convertWebmToMp4(blob, fileName) {
        return new Promise((resolve) => {
          const file = new File([blob], fileName, { type: 'video/mp4' });
          resolve(file);
        });
    },
},
    // 页面挂载时自动恢复 userId、imageRemoteUrl、videoUrl 和付费状态
    mounted() {
      // 检查URL参数中的支付结果
      this.checkPaymentCallback();
      
      try {
        const stored = localStorage.getItem('userId');
        if (stored) {
          this.userId = stored;
          this.imageRemoteUrl = `/facepics/${this.userId}.jpg`;//服务器
          //this.imageRemoteUrl = `${BASE_URL}/facepics/${this.userId}.jpg`;//本地####
          console.log('mounted: 恢复 userId:', this.userId);
          console.log('mounted: 恢复 imageRemoteUrl:', this.imageRemoteUrl);
          
          // 恢复付费状态
          const paidStatus = localStorage.getItem(`paid_${this.userId}`);
          if (paidStatus === 'true') {
            this.isPaid = true;
            console.log('mounted：恢复 isPaid: 已付费');
          }
          
          // 恢复订单号
          const storedOrderNo = localStorage.getItem(`orderNo_${this.userId}`);
          if (storedOrderNo) {
            this.currentOrderNo = storedOrderNo;
          }
          
          // 恢复视频URL
          const storedVideoUrl = localStorage.getItem(`videoUrl_${this.userId}`);
          if (storedVideoUrl) {
            this.videoUrl = storedVideoUrl;
            console.log('mounted：恢复 videoUrl:', this.videoUrl);
            
            // 恢复音乐类型
            const storedMusicType = localStorage.getItem(`musicType_${this.userId}`);
            if (storedMusicType) {
              this.selectedMusicType = storedMusicType;
              console.log('mounted：恢复 selectedMusicType:', this.selectedMusicType);
            }
          }
        }
      } catch (e) {
        console.warn('mounted: 读取 localStorage 失败', e);
      }
    },
    //生命周期钩子用于在组件销毁之前执行一些清理操作
    beforeDestroy() {
      clearInterval(this.intervalIdFrame);
      clearInterval(this.intervalIdRecord);
      
      // 清除支付轮询定时器
      if (this.paymentPolling) {
        clearInterval(this.paymentPolling);
      }
      
      this.stopCamera(); // 组件销毁时停止摄像头
    },

computed: {
    
}
  };
 </script>
 
 <style scoped>
 
 @import url("../css/bootstrap.min.css");
 
 @import url("../css/style.css");
 
 @import url("../css/responsive.css");
 
 @import url("../css/jquery.mCustomScrollbar.min.css");
 
 @import url("../css/font-awesome.css");
 
 @import url("../css/owl.carousel.min.css");
 @import url("../css/jquery.fancybox.min.css");
 
   /* 上传按钮 */
   .upload-label {
     display: inline-block;
     padding: 10px 20px;
     background-color: #2b2278;
     color: white;
     border-radius: 4px;
     cursor: pointer;
     margin-bottom: 10px;
   }
   .upload-label input {
     display: none; /* 隐藏原始文件输入 */
   }
   /* 视频预览 */
   .video-preview {
     margin-top: 20px;
     display: flex; /* 使用 Flexbox */
     flex-direction: column; /* 垂直排列 */
     align-items: center; /* 水平居中 */
   }
   .video-preview video {
     width: 100% !important; /* 自适应宽度 */
     max-width: 100% !important; /* 最大宽度 */
     height: auto !important; /* 保持视频比例 */
     border-radius: 8px; /* 圆角 */
     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 阴影效果 */
   }

   /* 右侧列内边距优化 */
   .col-md-6.padding_right_0 {
     padding-right: 20px !important; /* 恢复右侧内边距 */
     padding-left: 30px !important; /* 增加左侧内边距，与左栏拉开距离 */
   }

   /* 左侧列内边距优化 */
   .col-md-6:not(.padding_right_0) {
     padding-left: 20px !important; /* 左侧与浏览器边沿的距离 */
     padding-right: 15px !important; /* 与右栏的距离 */
   }

   /* 付费模块容器优化 */
   .about_taital_main {
     padding: 0 15px; /* 左右内边距 */
     margin: 0 auto; /* 居中 */
     max-width: 100%; /* 最大宽度 */
   }
   /* 录制预览 */
   .preview-container {
     margin-top: 20px;
   }
   .preview-container video {
     border: 1px solid #dcdfe6;
     border-radius: 4px;
   }

   /* 付费下载相关样式 */
   .payment-section {
     margin: 20px 10px; /* 左右增加间距 */
     padding: 20px;
     border: 2px dashed #2b2278;
     border-radius: 8px;
     background-color: #f5f5f5;
     text-align: center;
     clear: both;
     position: relative;
     z-index: 1;
     max-width: calc(100% - 20px); /* 确保不会超出容器 */
   }

   .paid-download-section {
     margin: 20px 10px; /* 左右增加间距 */
     padding: 20px;
     border: 2px dashed #2b2278; /* 改为虚线边框 */
     border-radius: 8px;
     background-color: #f5f5f5;
     text-align: center;
     clear: both;
     position: relative;
     z-index: 1;
     max-width: calc(100% - 20px); /* 确保不会超出容器 */
   }

   /* 付费按钮响应式样式 */
   .payment-btn {
     width: 100%;
     max-width: 280px;
     min-width: 200px;
   }

   /* 付费对话框样式优化 */
   .payment-dialog-wrapper {
     border-radius: 15px !important;
   }

   .payment-dialog-wrapper :deep(.el-dialog) {
     border-radius: 15px;
     box-shadow: 0 8px 32px rgba(43, 34, 120, 0.2);
     background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
   }

   .payment-dialog-wrapper :deep(.el-dialog__header) {
     background: linear-gradient(135deg, #2b2278 0%, #3d2e8a 100%);
     color: white;
     border-radius: 15px 15px 0 0;
     padding: 25px;
     text-align: center;
   }

   .payment-dialog-wrapper :deep(.el-dialog__title) {
     font-size: 20px;
     font-weight: 600;
     color: white;
     text-align: center;
     width: 100%;
     display: block;
   }

   .payment-dialog-wrapper :deep(.el-dialog__body) {
     padding: 30px 40px;
   }

   .payment-header {
     text-align: center;
     margin-bottom: 30px;
     padding-bottom: 20px;
     border-bottom: 2px solid #f0f2f5;
   }

   .payment-icon {
     display: inline-block;
     width: 60px;
     height: 60px;
     background: linear-gradient(135deg, #2b2278 0%, #3d2e8a 100%);
     border-radius: 50%;
     line-height: 60px;
     text-align: center;
     color: white;
     font-size: 24px;
     margin-bottom: 15px;
     box-shadow: 0 4px 15px rgba(43, 34, 120, 0.3);
   }

   .payment-header h2 {
     color: #2b2278;
     font-size: 22px;
     font-weight: 600;
     margin: 10px 0;
   }

   .price-tag {
     display: inline-block;
     background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
     color: white;
     padding: 8px 20px;
     border-radius: 20px;
     font-size: 18px;
     font-weight: 600;
     box-shadow: 0 3px 10px rgba(255, 107, 107, 0.3);
   }

   .payment-features {
     margin-bottom: 30px;
   }

   .payment-features h4 {
     color: #2b2278;
     font-size: 16px;
     font-weight: 600;
     margin-bottom: 20px;
     text-align: center;
   }

   .features-grid {
     display: grid;
     grid-template-columns: repeat(2, 1fr);
     gap: 15px;
     margin-bottom: 10px;
   }

   .feature-item {
     display: flex;
     align-items: center;
     padding: 12px 15px;
     background: #f8f9fa;
     border-radius: 8px;
     border-left: 4px solid #2b2278;
     transition: all 0.3s ease;
   }

   .feature-item:hover {
     background: #e9ecef;
     transform: translateY(-2px);
     box-shadow: 0 4px 12px rgba(43, 34, 120, 0.1);
   }

   .feature-item i {
     color: #2b2278;
     font-size: 16px;
     margin-right: 10px;
     min-width: 20px;
     text-align: center;
   }

   .feature-item span {
     color: #333;
     font-size: 14px;
     font-weight: 500;
   }

   .payment-methods {
     margin-bottom: 20px;
   }

   .payment-methods h4 {
     color: #2b2278;
     font-size: 16px;
     font-weight: 600;
     margin-bottom: 20px;
     text-align: center;
   }

   .payment-options {
     display: flex;
     flex-direction: column;
     gap: 12px;
   }

   /* 横向支付方式样式 */
   .payment-options-horizontal {
     display: flex;
     justify-content: center;
     gap: 30px;
     flex-wrap: wrap;
   }

   .payment-radio-horizontal {
     margin-right: 0 !important;
     font-size: 16px;
     font-weight: 500;
   }

   .payment-radio-horizontal :deep(.el-radio__input.is-checked .el-radio__inner) {
     background-color: #2b2278;
     border-color: #2b2278;
   }

   .payment-radio-horizontal :deep(.el-radio__label) {
     color: #2b2278;
     font-weight: 500;
     font-size: 16px;
   }

   .payment-radio-horizontal :deep(.el-radio__input.is-checked + .el-radio__label) {
     color: #2b2278;
     font-weight: 600;
   }

   .payment-radio {
     margin-right: 0 !important;
   }

   .payment-radio :deep(.el-radio__input) {
     margin-right: 15px;
   }

   .payment-radio :deep(.el-radio__input.is-checked .el-radio__inner) {
     background-color: #2b2278;
     border-color: #2b2278;
   }

   .payment-method-item {
     display: flex;
     align-items: center;
     padding: 15px 20px;
     background: #f8f9fa;
     border-radius: 10px;
     border: 2px solid transparent;
     transition: all 0.3s ease;
     cursor: pointer;
     width: 100%;
   }

   .payment-radio.is-checked .payment-method-item {
     background: linear-gradient(135deg, #2b2278 0%, #3d2e8a 100%);
     color: white;
     border-color: #2b2278;
     box-shadow: 0 4px 15px rgba(43, 34, 120, 0.3);
   }

   .payment-method-item:hover {
     background: #e9ecef;
     transform: translateY(-2px);
     box-shadow: 0 4px 12px rgba(43, 34, 120, 0.1);
   }

   .payment-radio.is-checked .payment-method-item:hover {
     background: linear-gradient(135deg, #2b2278 0%, #3d2e8a 100%);
   }

   .payment-method-item i {
     font-size: 20px;
     margin-right: 15px;
     min-width: 24px;
     text-align: center;
   }

   .payment-method-item span {
     font-size: 16px;
     font-weight: 500;
   }

   .payment-footer {
     display: flex;
     justify-content: center;
     gap: 20px;
     padding: 20px 40px 30px;
     background: #f8f9fa;
     border-radius: 0 0 15px 15px;
     margin: 0 -40px -30px;
   }

   .cancel-btn {
     padding: 12px 30px;
     border-radius: 25px;
     font-size: 16px;
     font-weight: 500;
     border: 2px solid #6c757d;
     background: white;
     color: #6c757d;
     transition: all 0.3s ease;
   }

   .cancel-btn:hover {
     background: #6c757d;
     color: white;
     transform: translateY(-2px);
     box-shadow: 0 4px 12px rgba(108, 117, 125, 0.3);
   }

   .pay-btn {
     padding: 12px 35px;
     border-radius: 25px;
     font-size: 16px;
     font-weight: 600;
     background: linear-gradient(135deg, #2b2278 0%, #3d2e8a 100%) !important;
     border: none;
     color: white;
     transition: all 0.3s ease;
     box-shadow: 0 4px 15px rgba(43, 34, 120, 0.3);
   }

   .pay-btn:hover {
     transform: translateY(-2px);
     box-shadow: 0 6px 20px rgba(43, 34, 120, 0.4);
     background: linear-gradient(135deg, #1e1a5f 0%, #2d2070 100%) !important;
   }

   .pay-btn i {
     margin-right: 8px;
   }

   .video-preview {
     margin: 25px 10px 10px 10px; /* 四周都有间距 */
     text-align: center;
     clear: both;
     position: relative;
     z-index: 1;
   }

   .video-watermark-notice {
     margin-top: 10px;
     font-size: 12px;
     color: #999;
     font-style: italic;
     padding: 0 10px; /* 左右内边距 */
   }

   /* 确保标题区域有足够空间 */
   .about_taital {
     margin-bottom: 15px !important;
     clear: both;
     padding: 0 10px; /* 标题也增加左右内边距 */
   }

   .about_taital_main {
     position: relative;
     overflow: visible;
     padding: 0 5px; /* 减少容器内边距，由子元素控制 */
     margin: 0 auto; /* 居中 */
     max-width: 100%; /* 最大宽度 */
   }

   /* 左侧上传区域特殊样式 */
   .col-md-6:first-child .about_taital_main {
     padding: 0 10px 0 0; /* 左侧区域：右侧内边距，左侧无内边距（由列控制） */
   }

   /* 右侧预览区域特殊样式 */
   .col-md-6.padding_right_0 .about_taital_main {
     padding: 0 5px; /* 右侧区域：左右都有少量内边距 */
   }

   /* 响应式设计 */
   @media (max-width: 768px) {
     .payment-section,
     .paid-download-section {
       margin: 20px 5px; /* 移动设备上减少间距 */
     }
     
     .video-preview {
       margin: 25px 5px 10px 5px;
     }
     
     .about_taital {
       padding: 0 5px;
     }

     /* 移动设备上的列间距调整 */
     .col-md-6:not(.padding_right_0) {
       padding-left: 15px !important;
       padding-right: 15px !important;
     }

     .col-md-6.padding_right_0 {
       padding-left: 15px !important;
       padding-right: 15px !important;
     }

     /* 移动设备上的按钮样式 */
     .payment-btn {
       width: 100% !important;
       max-width: 100% !important;
       min-width: auto !important;
       font-size: 14px !important;
     }
   }

   /* 中等屏幕设备优化 */
   @media (min-width: 769px) and (max-width: 1024px) {
     .col-md-6:not(.padding_right_0) {
       padding-right: 20px !important; /* 中等屏幕上增加右侧间距 */
     }

     .col-md-6.padding_right_0 {
       padding-left: 25px !important; /* 中等屏幕上调整左侧间距 */
     }

     /* 中等屏幕设备上的按钮样式 */
     .payment-btn {
       max-width: 240px !important;
     }
   }

   /* 小屏幕设备优化 */
   @media (min-width: 480px) and (max-width: 768px) {
     .payment-btn {
       max-width: 90% !important;
       font-size: 15px !important;
     }
   }
 </style>