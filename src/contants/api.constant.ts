import {envApi} from '../interfaces/apiContant.interface'
export const env: envApi = {
  nodeEnv: process.env.NODE_ENV,
  publicUrl: process.env.PUBLIC_URL,
  enviroment: process.env.REACT_APP_ENVIROMENT,
  apiUrl: process.env.REACT_APP_GRAPHQL_URL,
  apiUrlGraphql: process.env.REACT_APP_API_URL
}