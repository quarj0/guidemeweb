import SidebarItem from "../Python/SideBarItem";
import items from "../Python/data/python.json";

export default function Sidebar() {
  return (
    <div className="main">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
      <Sidebar />
      <div className="PyContainer">
        <h1 className="Pytitle">My React App</h1>
        <p className="Pyinfo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="Pybtn">Explore now</button>
      </div>
    </div>
  );
}
