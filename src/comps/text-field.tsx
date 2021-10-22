export function TextField(props) {
  const { placeholder, id, name, icon, iconPosition, label } = props;

  return (
    <input type="text" id={id} name={name || id} placeholder={placeholder} />
  );
}
