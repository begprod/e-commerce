export default function auth({ store, next }) {
  if (!store.getters.isLoggedIn) {
    next({ name: 'signup' });
  } else {
    next();
  }
}
