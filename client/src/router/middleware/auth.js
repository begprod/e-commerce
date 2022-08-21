export default function auth({ store, next }) {
  if (!store.getters['auth/isSignedIn']) {
    next({ name: 'signup' });
  } else {
    next();
  }
}
