export default function guest({ userStore, next }) {
  if (userStore().isAuthenticated) {
    next({ name: 'home' });
  } else {
    next();
  }
}
