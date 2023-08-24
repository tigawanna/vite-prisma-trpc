interface ThemeToggleProps {

}

export function ThemeToggle({}:ThemeToggleProps){
return (
  <ul className="h-full flex items-center justify-center">
    <li className="flex items-center justify-evenly">
      <select data-choose-theme className=" select select-sm">
        <option value="">Default</option>
        <option value="bumblebee">BumbleBee</option>
        <option value="dark">Dark</option>
        <option value="light">light</option>
        <option value="lofi">lofi</option>
        <option value="cupcake">Cupcake</option>
      </select>
    </li>
  </ul>
);
}
