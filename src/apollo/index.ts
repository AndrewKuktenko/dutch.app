import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

const apiUrl = 'https://mock.shop/api'

const httpLink = createHttpLink({
  uri: apiUrl,
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

export { apolloClient }
