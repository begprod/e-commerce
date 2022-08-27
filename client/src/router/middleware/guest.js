export default function guest({ store, next }) {
  if (store.getters['auth/isAuthenticated']) {
    next({ name: 'home' });
  } else {
    next();
  }
}
