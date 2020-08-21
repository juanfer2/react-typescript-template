import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import {env} from '../../contants/api.constant'
const { createUploadLink } = require('apollo-upload-client')

const link = createUploadLink({ uri: env.apiUrlGraphql })

const Client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})

export default Client