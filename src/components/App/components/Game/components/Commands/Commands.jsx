import Button from "./components/Button";
import Display from "./components/Display";
import Place from "./components/Place";

const commands = ["Move", "Left", "Right", "Report"];
const Commands = () => (
  <div className="space-y-8">
    <div>
      <Place />
    </div>
    <ul className="space-y-8">
      {commands.map((command) => (
        <li
          key={command}
          className="text-black-600 hover:cursor:pointer rounded-b-lg border-4 border-green-600 text-center hover:bg-green-600 hover:text-white"
        >
          <Button>{command}</Button>
        </li>
      ))}
    </ul>
    <Display />
  </div>
);

console.log(Commands);

export default Commands;
