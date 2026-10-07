// 公开配置只能填写后端HTTPS网址；禁止放入任何API密钥。
window.RED_PUBLICATION_CONFIG={aiEndpoint:'',ttsEndpoint:''};
window.RED_AI_GUIDE_CONFIG={endpoint:window.RED_PUBLICATION_CONFIG.aiEndpoint||'/api/chat',ttsEndpoint:window.RED_PUBLICATION_CONFIG.ttsEndpoint||'/api/tts'};
