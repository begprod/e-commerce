export default function guest({ useUserStore, next }) {
  if (useUserStore().isAuthenticated) {
    next({ name: 'home' });
  } else {
    next();
  }
}
