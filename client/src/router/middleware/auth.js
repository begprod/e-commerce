export default function auth({ store, next }) {
  if (!store.getters['auth/isAuthenticated']) {
    next({ name: 'signup' });
  } else {
    next();
  }
}
