import Drawer from '@/components/Drawer'

import { useAuthUser, withAuthUser, withAuthUserTokenSSR, AuthAction } from 'next-firebase-auth'

const MyLoader = () => <div>Loading...</div>

function Setting() {
  const AuthUser = useAuthUser()

  return <>{AuthUser.email && <Drawer />}</>
}

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  LoaderComponent: MyLoader,
  authPageURL: '/auth/login/',
})(Setting)
