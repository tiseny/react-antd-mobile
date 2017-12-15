function redirect(path) {
  return function (nextState, replaceState) {
    replaceState(path);
  }
}

export {
  redirect
}
