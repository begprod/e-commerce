export default function auth({ useUserStore, next }) {
  if (!useUserStore().isAuthenticated) {
    next({ name: 'signup' });
  } else {
    next();
  }
}
