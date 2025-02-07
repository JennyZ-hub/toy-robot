import Button from "./components/Button";
const commands = ["Place", "Move", "Left", "Right", "Report"];
const Commands = () => (
  <ul className="space-y-8">
    {commands.map((command) => (
      <li
        key={command}
        className="rounded-lg border-2 border-green-600 p-[4px] text-center hover:cursor-pointer hover:bg-green-600 hover:text-white"
      >
        <Button>{command}</Button>
      </li>
    ))}
  </ul>
);

console.log(Commands);

export default Commands;
