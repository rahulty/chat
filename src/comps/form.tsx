export function Form({ onSubmit, children, ...otherProps }) {
  function onS(e) {
    e.preventDefault();
    return onSubmit(e);
  }
  return (
    <form onSubmit={onS} {...otherProps}>
      {children}
    </form>
  );
}
