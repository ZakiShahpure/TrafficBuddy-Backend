const translations = {
    // Main menu translations
    'WELCOME_MESSAGE': {
      'en': `*Welcome to Traffic Buddy PCMC!* 🚦
  
  Choose an option by typing the number:
  1️⃣ Report Traffic Violation
  2️⃣ Report Traffic Congestion
  3️⃣ Report Accident
  4️⃣ Report Road Damage
  5️⃣ Report Illegal Parking
  6️⃣ Traffic Signal Information
  7️⃣ Share Suggestion
  8️⃣ Join Traffic Buddy Team
  
  Reply with a number 1-8.`,
      'mr': `*ट्रॅफिक बडी PCMC मध्ये आपले स्वागत आहे!* 🚦
  
  नंबर टाइप करून पर्याय निवडा:
  1️⃣ वाहतूक नियम उल्लंघन नोंदवा
  2️⃣ वाहतूक कोंडी नोंदवा
  3️⃣ अपघात नोंदवा
  4️⃣ रस्ता खराबी नोंदवा
  5️⃣ अवैध पार्किंग नोंदवा
  6️⃣ वाहतूक सिग्नल माहिती
  7️⃣ सूचना शेअर करा
  8️⃣ ट्रॅफिक बडी टीममध्ये सामील व्हा
  
  1-8 क्रमांकासह उत्तर द्या.`
    },
    
    // Camera instruction translations
    // Update the CAMERA_INSTRUCTIONS to better handle the instruction message in both languages

// 'CAMERA_INSTRUCTIONS': {
//     'en': (instructionMessage) => `Please capture the image using GPS Map Camera:
  
//   ${instructionMessage}
  
//   After capturing, share the image with us on WhatsApp. Also Mention the Description of the Violation With Location.`,
//     'mr': (instructionMessage) => {
//       // Replace English URLs with the same URLs but surrounded by Marathi text
//       let marathiInstructions = instructionMessage;
      
//       return `कृपया GPS मॅप कॅमेरा वापरून इमेज कॅप्चर करा:
  
//   ${marathiInstructions}
  
//   कॅप्चर केल्यानंतर, ती इमेज आमच्याशी व्हाट्सअॅपवर शेअर करा. तसेच उल्लंघनाचे वर्णन आणि स्थान नमूद करा.`;
//     }
//   },

// 'CAMERA_INSTRUCTIONS': {
//   'en': (instructionMessage) => `Please capture the image and share your location:
  
// ${instructionMessage}

// Tap the link to capture and upload in one step.`,
//   'mr': (instructionMessage) => {
//     return `कृपया इमेज कॅप्चर करा आणि आपले स्थान शेअर करा:
  
// ${instructionMessage}

// एका पायरीत कॅप्चर आणि अपलोड करण्यासाठी लिंकवर टॅप करा.`;
//   }
// },

'CAMERA_INSTRUCTIONS': {
  'en': (instructionMessage) => `${instructionMessage}`,
  'mr': (instructionMessage) => `${instructionMessage}`
},
    
// Specific report type responses
'REPORT_RESPONSE': {
  'en': (reportType, hasImage) => `Thank you for your ${reportType.toLowerCase()} report. It has been recorded.${hasImage ? ' Image received and uploaded.' : ''}\n\nType "menu" to return to the main menu.`,
  'mr': (reportType, hasImage) => `तुमच्या ${getMarathiReportType(reportType)} अहवालाबद्दल धन्यवाद. ते नोंदवले गेले आहे.${hasImage ? ' इमेज प्राप्त झाली आणि अपलोड केली गेली.' : ''}\n\nमुख्य मेनूकडे परत जाण्यासाठी "menu" टाइप करा.`
},

// Traffic signal information
'TRAFFIC_SIGNAL_INFO': {
  'en': (instructionMessage) => `${instructionMessage}`,
  'mr': (instructionMessage) => `${instructionMessage}`
},

// Join team request
'JOIN_REQUEST': {
  'en': (joinUrl) => {
    console.log('Generating join request message with URL:', joinUrl);
    return `📝 *Click the link below to join our team:*

👥 *JOIN TRAFFIC BUDDY TEAM*
👇👇👇👇👇👇👇👇
${joinUrl || '[Error: Missing URL]'}
👆👆👆👆👆👆👆👆

Tap the link above to submit your application.`;
      },
      'mr': (joinUrl) => {
        console.log('Generating Marathi join request message with URL:', joinUrl);
        return `📝 *आमच्या टीममध्ये सामील होण्यासाठी खालील लिंकवर क्लिक करा:*
    
👥 *ट्रॅफिक बडी टीममध्ये सामील व्हा*
👇👇👇👇👇👇👇👇
${joinUrl || '[Error: Missing URL]'}
👆👆👆👆👆👆👆👆

अर्ज सादर करण्यासाठी वरील लिंकवर टॅप करा.`;
      }
    },

    'JOIN_REQUEST': {
      'en': (joinUrl) => {
        // Simple direct link format
        return `📝 *Click below to join our team:*\n\n${joinUrl}\n\nTap the link to continue.`;
      },
      'mr': (joinUrl) => {
        // Simple direct link format in Marathi
        return `📝 *आमच्या टीममध्ये सामील होण्यासाठी खालील लिंक वर क्लिक करा:*\n\n${joinUrl}\n\nपुढे जाण्यासाठी लिंक वर टॅप करा.`;
      }
    },
    
    'JOIN_RESPONSE': {
      'en': 'Thank you for your interest in joining Traffic Buddy! Our team will review your information and contact you soon.\n\nType "menu" to return to the main menu.',
      'mr': 'ट्रॅफिक बडीमध्ये सामील होण्याच्या तुमच्या इच्छेबद्दल धन्यवाद! आमची टीम तुमची माहिती तपासेल आणि लवकरच तुमच्याशी संपर्क साधेल.\n\nमुख्य मेनूकडे परत जाण्यासाठी "menu" टाइप करा.'
    },

    'JOIN_TEAM_INSTRUCTIONS': {
      'en': (joinUrl) => `📝 *Click the link below to join our team:*
    
👥 *JOIN TRAFFIC BUDDY TEAM*
👇👇👇👇👇👇👇👇
${joinUrl}
👆👆👆👆👆👆👆👆

Tap the link above to submit your application. You'll need to:
1. Select your preferred team
2. Provide your details
  तुमची पसंतीची भाषा निवडा:
  1️⃣ इंग्रजी (English)
  2️⃣ मराठी
  
  1 किंवा 2 उत्तर द्या.`
    },
    // Add these entries to the translations object
    'NAME_REQUEST': {
      'en': 'Please share your name to continue. Your personal information will remain unknown and will not be shared with anyone.',
      'mr': 'कृपया सुरू ठेवण्यासाठी आपले नाव शेअर करा. तुमची वैयक्तिक माहिती गोपनीय राहील आणि कोणाशीही शेअर केली जाणार नाही.'
    },
    'NAME_CONFIRMATION': {
      'en': (name) => `Thank you, ${name}!`,
      'mr': (name) => `धन्यवाद, ${name}! तुमचे नाव सुरक्षित जतन केले आहे. तुमची गोपनीयता आमच्यासाठी महत्वाची आहे.`
    },
    // Status notification messages - updated for proper parameter replacement
  'STATUS_IN_PROGRESS': {
    'en': '🔄 Your {0} report is now being reviewed by our team. We will update you soon.',
    'mr': '🔄 तुमचा {0} अहवाल आमच्या टीमकडून आता तपासला जात आहे. आम्ही तुम्हाला लवकरच अपडेट करू.'
  },
  
  'STATUS_RESOLVED': {
    'en': '✅ Good news! Your {0} report has been resolved.\n\nResolution details: {1}\n\nThank you for making our roads safer!',
    'mr': '✅ चांगली बातमी! तुमचा {0} अहवाल निकाली काढला गेला आहे.\n\nनिराकरण तपशील: {1}\n\nआमचे रस्ते सुरक्षित बनवण्यासाठी धन्यवाद!'
  },
  
  'STATUS_REJECTED': {
    'en': '❌ We reviewed your {0} report, but we were unable to proceed further with it.\n\nReason: {1}\n\nPlease feel free to submit another report if needed.',
    'mr': '❌ आम्ही तुमचा {0} अहवाल तपासला, परंतु आम्ही त्यावर पुढे जाऊ शकलो नाही.\n\nकारण: {1}\n\nआवश्यक असल्यास कृपया दुसरा अहवाल सबमिट करा.'
  }
  };
  
  // Helper function to translate Marathi report types
  function getMarathiReportType(reportType) {
    const reportTypeMap = {
      'Traffic Violation': 'वाहतूक नियम उल्लंघन',
      'Traffic Congestion': 'वाहतूक कोंडी',
      'Accident': 'अपघात',
      'Road Damage': 'रस्ता खराबी',
      'Illegal Parking': 'अवैध पार्किंग',
      'Suggestion': 'सूचना',
      'General Report': 'सामान्य अहवाल'
    };
    return reportTypeMap[reportType] || reportType;
  }
  
  // Get translated text based on the key and language
  function getText(key, language = 'en', ...params) {
    const translationEntry = translations[key];
    if (!translationEntry) return `[Missing translation: ${key}]`;
    
    const translation = translationEntry[language];
    if (!translation) return translationEntry['en'] || `[Missing translation: ${key}.${language}]`;
    
    if (typeof translation === 'function') {
      return translation(...params);
    }
    
    // Handle string templates with {0}, {1}, etc. placeholders
    let result = translation;
    if (params && params.length > 0) {
      params.forEach((param, index) => {
        result = result.replace(new RegExp(`\\{${index}\\}`, 'g'), param);
      });
    }
    
    return result;
  }
  
  // Get language selection prompt in a specific language
  function getLanguagePrompt(language = 'en') {
    return translations['LANGUAGE_PROMPT'][language];
  }
  
  module.exports = {
    getText,
    getLanguagePrompt
  };