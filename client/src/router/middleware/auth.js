export default function auth({ userStore, next }) {
  if (!userStore().isAuthenticated) {
    next({ name: 'signup' });
  } else {
    next();
  }
}
