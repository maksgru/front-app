type EnvType = 'development' | 'stage' | 'production';
const env = (process.env.NODE_ENV || process.env.REACT_APP_ENV || 'development') as EnvType;

type ConfigType = {
  [env in EnvType]: {
    serverUrl: string;
    googleOAuthClientId: string;
    firebaseConfig: {
      apiKey: string,
      authDomain: string,
      projectId: string,
      storageBucket: string,
      messagingSenderId: string,
      appId: string,
      measurementId: string
    }
  }
};

const config: ConfigType = {
  development: {
    serverUrl: 'http://localhost:4300',
    googleOAuthClientId: '13238098549-nd5e3rd2qeunhrkcbro4ge0os336i09k.apps.googleusercontent.com',
    firebaseConfig: {
      apiKey: 'AIzaSyAPHswG78_TLOgrq0hGil9p7KJEuk4dvvY',
      authDomain: 'robotic-weft-282719.firebaseapp.com',
      projectId: 'robotic-weft-282719',
      storageBucket: 'robotic-weft-282719.appspot.com',
      messagingSenderId: '13238098549',
      appId: '1:13238098549:web:ff30e1ac9e864ddf1a363c',
      measurementId: 'G-59KTD1E779'
    }
  },
  stage: {
    serverUrl: 'http://3.68.29.89',
    googleOAuthClientId: '13238098549-nd5e3rd2qeunhrkcbro4ge0os336i09k.apps.googleusercontent.com',
    firebaseConfig: {
      apiKey: 'AIzaSyAPHswG78_TLOgrq0hGil9p7KJEuk4dvvY',
      authDomain: 'robotic-weft-282719.firebaseapp.com',
      projectId: 'robotic-weft-282719',
      storageBucket: 'robotic-weft-282719.appspot.com',
      messagingSenderId: '13238098549',
      appId: '1:13238098549:web:ff30e1ac9e864ddf1a363c',
      measurementId: 'G-59KTD1E779'
    }
  },
  production: {
    serverUrl: '',
    googleOAuthClientId: '13238098549-nd5e3rd2qeunhrkcbro4ge0os336i09k.apps.googleusercontent.com',
    firebaseConfig: {
      apiKey: 'AIzaSyAPHswG78_TLOgrq0hGil9p7KJEuk4dvvY',
      authDomain: 'robotic-weft-282719.firebaseapp.com',
      projectId: 'robotic-weft-282719',
      storageBucket: 'robotic-weft-282719.appspot.com',
      messagingSenderId: '13238098549',
      appId: '1:13238098549:web:ff30e1ac9e864ddf1a363c',
      measurementId: 'G-59KTD1E779'
    }
  }
};

export default config[env];
