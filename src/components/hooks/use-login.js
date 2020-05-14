import firebase from 'firebase/app';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { updateUser } from '../../redux/actions';

const getProviderForProviderId = provider => {
  switch (provider) {
    case 'google.com':
      return new firebase.auth.GoogleAuthProvider();
    case 'github.com':
      return new firebase.auth.GithubAuthProvider();
    default:
      return null;
  }
};

const useLogin = () => {
  const dispatch = useDispatch();

  const onLogoutError = useCallback(() => {}, []);

  const onLogoutSuccess = useCallback(() => {
    dispatch(updateUser());
  }, [dispatch]);

  const onLoginSuccess = useCallback(
    ({ user }) => {
      dispatch(updateUser(user));
    },
    [dispatch]
  );

  const onLoginError = useCallback(
    err => {
      const auth = firebase.auth();
      const { code, credential, email, message } = err;
      if (code === 'auth/account-exists-with-different-credential') {
        // NOTE documentation auth
        // https://firebase.google.com/docs/auth/web/google-signin#expandable-1-label
        auth.fetchSignInMethodsForEmail(email).then(methods => {
          console.log('methods', methods);
          const [method] = methods;
          console.log('method', method);
          if (method === 'email') {
            // TODO something
            return;
          }
          const provider = getProviderForProviderId(method);
          if (!provider) {
            // TODO throw error
            return;
          }
          auth.signInWithPopup(provider).then(({ user }) => {
            user
              .linkAndRetrieveDataWithCredential(credential)
              .then(onLoginSuccess);
          });
        });
      } else {
        throw new Error(message);
      }
    },
    [onLoginSuccess]
  );

  return { onLoginError, onLoginSuccess, onLogoutError, onLogoutSuccess };
};

export default useLogin;
