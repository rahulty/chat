import useGlobal from "../../store";

const addDays = (currDate: Date, days: number) => {
  const date = new Date(currDate.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};
export function DateWidget({ data: commandData }) {
  const [, globalActions] = useGlobal();
  function onClick(e) {
    globalActions.onDayClick(e.target.textContent);
  }
  return (
    <div id="dateWidget">
      {Array(7)
        .fill(new Date(commandData))
        .map((d, i) => (
          <div class="btn" onClick={onClick}>
            {addDays(d, i).toLocaleString("en-us", {
              weekday: "long"
            })}
          </div>
        ))}
    </div>
  );
}
