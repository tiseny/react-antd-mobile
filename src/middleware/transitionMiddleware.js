const dispatcher = (action, store, history) => {
  const { type, meta } = action;
  const transitionMetaFunc = meta ? meta.transition : null;

  // const prevState = transitionMetaFunc && store.getState();

  store.dispatch(action);

  const nextState = transitionMetaFunc && store.getState();

  let transitionData = transitionMetaFunc && (
    // transitionMetaFunc(prevState, nextState, action)
    transitionMetaFunc(nextState, action) 
  );

  if (transitionData) {
    const { path: pathname, query: search, replace, state } = transitionData;
    const method = replace ? 'replace' : 'push';

    history[method]({pathname, state, search});
  }

  return action;
}

/**
 * store enhancer
 */
export default history => next => (reducer, initialState) => {   
  const store = next(reducer, initialState);

  return {
    ...store,
    dispatch(action) {
      dispatcher(action, store, history)
    }
  }
}