type EnvType = 'development' | 'stage' | 'production';
const env = (process.env.NODE_ENV || process.env.REACT_APP_ENV || 'development') as EnvType;

type ConfigType = {
  [env in EnvType]: {
    serverUrl: string
  }
};

const config: ConfigType = {
  development: {
    serverUrl: 'http://localhost:4300/api'
  },
  stage: {
    serverUrl: 'http://3.68.29.89/api'
  },
  production: {
    serverUrl: '/api'
  }
};

export default config[env];
