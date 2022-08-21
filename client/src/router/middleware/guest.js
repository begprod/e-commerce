export default function guest({ store, next }) {
  if (store.getters['auth/isSignedIn']) {
    next({ name: 'home' });
  } else {
    next();
  }
}
