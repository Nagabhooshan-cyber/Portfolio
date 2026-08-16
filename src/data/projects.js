export const projects = [
  {
    id: 'ds-career-navigator',
    name: 'Data Science Career Navigator',
    tagline: 'End-to-end career intelligence platform',
    description:
      'An end-to-end Data Science platform that helps users analyze career opportunities, understand skill gaps, estimate salaries and discover suitable job roles.',
    problem:
      'Job seekers often struggle to translate their existing skills into a clear picture of the roles they qualify for, the gaps they need to close, and realistic salary expectations. This platform brings those signals together in one place.',
    objective:
      'Build a data-driven career intelligence tool that automates skill gap analysis, salary prediction, and job recommendation using machine learning.',
    features: [
      'Salary Prediction',
      'Resume vs Job Description Analysis',
      'Skill Extraction',
      'Skill Gap Detection',
      'Personalized Learning Recommendations',
      'Job Recommendation Engine',
      'Job Market Analytics',
      'Interactive Streamlit Dashboard',
    ],
    tech: ['Python', 'MySQL', 'Scikit-Learn', 'NLP', 'Streamlit', 'Plotly'],
    categories: ['ai-ml', 'data-science'],
    githubUrl: 'https://github.com/Nagabhooshan-cyber/Career-Navigator',
    liveUrl: '',
    image: '/projects/career-navigator.svg',
  },
  {
    id: 'fixit-marketplace',
    name: 'FixIt: Real-Time Local Service Marketplace',
    tagline: 'Full-stack, location-aware service matching',
    description:
      'A full-stack platform connecting users with nearby service providers through real-time communication and location-based matchmaking.',
    problem:
      'Finding a trustworthy, nearby service provider quickly is hard. FixIt matches users to available providers in real time and keeps both sides in sync through live chat, GPS tracking and instant notifications.',
    objective:
      'Create a production-ready marketplace platform with real-time features, location intelligence, and seamless payment integration.',
    features: [
      'Real-time chat',
      'Location-based service matching',
      'GPS tracking',
      'Service provider discovery',
      'Authentication',
      'Online payments',
      'Notifications',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Leaflet', 'Tailwind CSS', 'Razorpay'],
    categories: ['full-stack', 'web'],
    githubUrl: 'https://github.com/Nagabhooshan-cyber/fixit',
    liveUrl: 'https://fixit-india.vercel.app/',
    image: '/projects/fixit.svg',
  },
  {
    id: 'fraudshield',
    name: 'FraudShield',
    tagline: 'Full-stack AI-powered fraud detection system',
    description:
      'A full-stack AI-powered fraud detection system using Machine Learning, Flask REST APIs, Railway MySQL database, Vercel frontend, and Render backend deployment.',
    problem:
      'Financial fraud causes significant losses and is difficult to detect manually at scale. Traditional rule-based systems miss complex, evolving fraud patterns that machine learning models can identify.',
    objective:
      'Build an end-to-end fraud detection platform with a trained ML model served via a Flask API, a cloud MySQL database, and a deployed frontend — all connected in a production-ready architecture.',
    features: [
      'ML-based fraud/legitimate classification',
      'Flask REST API backend',
      'Railway MySQL cloud database',
      'Vercel frontend deployment',
      'Render backend deployment',
      'Trained ML model (fraud_model.pkl)',
      'Feature scaling with scaler.pkl',
      'Interactive prediction interface',
    ],
    tech: ['Python', 'Scikit-Learn', 'Flask', 'MySQL', 'Railway', 'Vercel', 'Render', 'HTML/CSS'],
    categories: ['ai-ml', 'data-science', 'full-stack'],
    githubUrl: 'https://github.com/Nagabhooshan-cyber/fraudshield',
    liveUrl: 'https://fraudshield-ten.vercel.app/',
    image: '/projects/fraudshield.svg',
  },
  {
    id: 'weather-app',
    name: 'Weather Voice App',
    tagline: 'Real-time weather with browser voice feedback',
    description:
      'A responsive weather application that delivers real-time weather data with dynamic backgrounds and browser-native voice readout — no installation needed.',
    problem:
      'Most weather apps display data silently and use static visuals. This app adds voice feedback using the Web Speech API directly in the browser, and adapts its visual theme to match live weather conditions.',
    objective:
      'Build a lightweight, accessible weather app using Streamlit that reads weather aloud, adjusts visuals dynamically, and handles API keys securely without any exposure on GitHub.',
    features: [
      'Live weather via OpenWeatherMap API',
      'Browser voice feedback (Web Speech API)',
      'Dynamic backgrounds per weather condition',
      'Humidity-aware temperature adjustment',
      'Search weather by city',
      'Temperature, humidity & wind speed',
      'Safe API key handling (no GitHub exposure)',
      'Responsive Streamlit interface',
    ],
    tech: ['Python', 'Streamlit', 'Requests', 'OpenWeatherMap API', 'Web Speech API'],
    categories: ['web'],
    githubUrl: 'https://github.com/Nagabhooshan-cyber/weather-voice-app',
    liveUrl: 'https://weather-voice-app.streamlit.app/',
    image: '/projects/weather-app.svg',
  },
]
