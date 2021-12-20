//import { initializeApollo } from '@/services/apollo'
// import { CURRENT_ORDER } from '@/graphql/queries'

import { useAuthUser, withAuthUser, withAuthUserTokenSSR, AuthAction } from 'next-firebase-auth'

const MyLoader = () => <div>Loading...</div>

function Spot(props) {
  console.log('props', props.data)

  const AuthUser = useAuthUser()

  return <>{AuthUser.email && <div />}</>
}

export async function getServerSideProps() {
  withAuthUserTokenSSR()
  // const apolloClient = initializeApollo()

  // const { data } = await apolloClient.query({ query: CURRENT_ORDER })

  // original
  /*return {
    props: { data: data, initialApolloState: apolloClient.cache.extract() },
  }*/

  return {
    props: { data: [], initialApolloState: [] },
  }
}

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  LoaderComponent: MyLoader,
  authPageURL: '/auth/login/',
})(Spot)
