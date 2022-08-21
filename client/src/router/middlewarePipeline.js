function middlewarePipeline(context, middleware, index) {
  const nextMiddleware = middleware[index];

  if (!nextMiddleware) {
    return context.next;
  }

  return () => {
    nextMiddleware({
      ...context,
      next: middlewarePipeline(context, middleware, 1),
    });
  };
}

export default middlewarePipeline;
