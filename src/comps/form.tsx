export function Form({ onSubmit, children, autocomplete, ...otherProps }) {
  function onS(e) {
    e.preventDefault();
    const txtInputs: NodeListOf<HTMLInputElement> = e.target.querySelectorAll(
      'input[type="text"],input[type="password"]'
    );
    const retValue = onSubmit(e);
    txtInputs.forEach((t) => (t.value = ""));
    return retValue;
  }
  return (
    <form autocomplete={autocomplete || "off"} onSubmit={onS} {...otherProps}>
      {children}
    </form>
  );
}
