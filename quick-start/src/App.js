import "./App.css";
import { useState } from "react";

// -----Creating and nesting components-----
// function MyButton() {
//   return <button>I'm a button</button>;
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }

// -----Displaying data-----
// const user = {
//   name: "Hedy Lamarr",
//   imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
//   imageSize: 90,
// };
// function Profile() {
//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <img
//         src={user.imageUrl}
//         alt=""
//         className="avatar"
//         style={{
//           width: user.imageSize,
//           height: user.imageSize,
//         }}
//       />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Profile />
//     </div>
//   );
// }

// -----Rendering lists-----
// const products = [
//   { title: "Cabbage", isFruit: false, id: 1 },
//   { title: "Garlic", isFruit: false, id: 2 },
//   { title: "Apple", isFruit: true, id: 3 },
// ];

// const listItems = products.map((product) => (
//   <li
//     key={product.id}
//     style={{ color: product.isFruit ? "magenta" : "darkgreen" }}
//   >
//     {product.title}
//   </li>
// ));

// function App() {
//   return (
//     <div className="App">
//       <ul>{listItems}</ul>
//     </div>
//   );
// }

// -----Responding to events-----
// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return <button onClick={handleClick}>Click {count} times</button>;
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>Counters that update separately</h1>
//       <MyButton />
//       <MyButton />
//     </div>
//   );
// }

// -----Sharing data between components-----
function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Click {count} times</button>;
}

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
export default App;
