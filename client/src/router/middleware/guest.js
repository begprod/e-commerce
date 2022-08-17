export default function guest({ store, next }) {
  if (store.getters.isLoggedIn) {
    next({ name: 'home' });
  } else {
    next();
  }
}
