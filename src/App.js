const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Sunglasses", quantity: 1, packed: false },
  { id: 3, description: "Water Bottle", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Starts />
    </div>
  );
}

function Logo() {
  return <h1> 🏝 Far Away 💼</h1>;
}

function Form() {
  function handeleSubmit(e) {
    e.prevebtDefault();
  }
  return (
    <form className="add-form" onSubmit={(e) => handeleSubmit(e)}>
      <h3>What do you need for your trip?💖</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.quantity} {item.description}
      </span>
      <button onClick={() => {}}>❌</button>
    </li>
  );
}

function Starts() {
  return (
    <footer className="stats">
      <em>
        💼 You have 0 items on your packing list, and you already packed 0 (0%)
      </em>
    </footer>
  );
}
