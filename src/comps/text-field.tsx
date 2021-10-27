import { useEffect, useRef } from "preact/hooks";

export function TextField(props) {
  const { placeholder, id, name, class: cls, type } = props;
  const ref = useRef();
  useEffect(() => {
    if (props.autofocus) {
      ref.current.focus();
    }
  }, []);

  return (
    <input
      ref={ref}
      {...props}
      type={type || "text"}
      id={id}
      name={name || id}
      placeholder={placeholder}
      class={cls || "txtField"}
    />
  );
}
