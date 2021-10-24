import useGlobal from "../../store";

export function CompleteWidget({ data }) {
  const [, globalActions] = useGlobal();
  function onClick(e) {
    if (e.target.textContent.toLowerCase() === "no") {
      globalActions.setShowWidget(false);
    } else {
      globalActions.logout();
    }
  }

  return (
    <div>
      {data.map((d) => (
        <button onClick={onClick}>{d}</button>
      ))}
    </div>
  );
}
