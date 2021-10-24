export function TextField(props) {
  const { placeholder, id, name, type, icon, iconPosition, label } = props;

  return (
    <input
      type={type || "text"}
      id={id}
      name={name || id}
      placeholder={placeholder}
    />
  );
}
