const DEEP_LINK_URL = 'gpsmapcamera://open';
const PLAY_STORE_LINK = 'https://play.google.com/store/apps/details?id=com.gpsmapcamera.geotagginglocationonphoto';

function getJoinFormUrl(userNumber) {
    return `https://your-ngrok-url/join.html?userId=${encodeURIComponent(userNumber)}`;
}

module.exports = {
  /**
   * Get the deep link or Play Store link based on the user's device.
   * @returns {string} The deep link URL to be used in WhatsApp.
   */
  getCameraAppLink: () => {
    return DEEP_LINK_URL;
  },

  /**
   * Get the instruction message for the user with just the raw links
   * which WhatsApp will automatically make clickable.
   * @returns {string} The instruction message with clickable links.
   */
  getInstructionMessage: () => {
    // WhatsApp automatically makes URLs clickable, so we just provide them directly
    return `To ensure your images contain GPS data, please use the GPS Map Camera app:

1. Open the app and capture the image or download it from Play Store: ${PLAY_STORE_LINK}

2. After capturing the image, share it with us on WhatsApp. with description and location.`;
  },

  /**
   * Get a message with multiple link options
   * @returns {string} Text with multiple opening strategies
   */
  getUniversalLink: () => {
    return `Try opening GPS Map Camera:

Direct link: ${DEEP_LINK_URL}

Play Store: ${PLAY_STORE_LINK}`;
  },
  
  /**
   * Get the server URL based on environment variables or default
   * @returns {string} The server URL
   */
  getServerUrl: () => {
    return process.env.SERVER_URL || 'http://localhost:3000';
  },
  
  /**
   * Generate a URL for capture with user ID and report type parameters
   * @param {string} userId - The user's ID
   * @param {string} reportType - The type of report being created
   * @returns {string} The capture URL with query parameters
   */
  getCaptureUrl: (userId, reportType) => {
    const serverUrl = module.exports.getServerUrl();
    return `${serverUrl}/capture.html?userId=${encodeURIComponent(userId)}&reportType=${reportType}`;
  },

  /**
   * Get optimized instruction message with clickable capture link
   * @param {string} captureUrl - The URL to the capture page
   * @param {string} language - Language code ('en' or 'mr')
   * @returns {string} Formatted message with visible clickable link
   */
  getReportInstructionMessage: (captureUrl, language = 'en') => {
    if (language === 'mr') {
      return `📸 *अहवाल सादर करण्यासाठी खाली दिलेल्या लिंकवर क्लिक करा:*
      
📱 *📷 अहवाल सादर करा 📷*
👇👇👇👇👇👇👇👇

${captureUrl}
👆👆👆👆👆👆👆👆

वरील लिंकवर टॅप करून, आपले स्थान आणि फोटो सादर करा.`;
    }
    
    return `📸 *Click the link below to submit your report:*
    
📱 *📷 CAPTURE & REPORT 📷*
👇👇👇👇👇👇👇👇
${captureUrl}
👆👆👆👆👆👆👆👆

Tap the link above to submit your location and photo.`;
  },
  
  /**
   * Get a simple link message that's likely to be clickable in WhatsApp
   * @param {string} captureUrl - The URL to the capture page
   * @param {string} reportTypeName - Name of the report type
   * @param {string} language - Language code ('en' or 'mr')
   * @returns {string} Simple message with link
   */
  getSimpleReportLink: (captureUrl, reportTypeName, language = 'en') => {
    if (language === 'mr') {
      return `*${reportTypeName} अहवाल*\n\n${captureUrl}\n\nवरील लिंकवर क्लिक करा.`;
    }
    return `*${reportTypeName} Report*\n\n${captureUrl}\n\nClick on the link above.`;
  },

  getJoinFormUrl
};