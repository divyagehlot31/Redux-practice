import React  from "react";
import { RouterProvider } from "react-router-dom";
// import "./App.css";
import router from "./routes/Router";
import { AppContextProvider, ThemeContext} from "./contexts/ThemeContext";

// import { ThemeContext } from "./contexts/ThemeContext";

  // const { Theme } = useContext(ThemeContext);

const App = ()=> {
  // const {Theme} = useContext(ThemeContext)


  return (
  <AppContextProvider>

      <RouterProvider router={router} />;
        </AppContextProvider>


  )
}

export default App;




// import React, {Component} from "react";
// import FilterClass from "./components/FilterClass";
// import ProductClass from "./components/ProductClass";
// // import ProductList from './components/ProductList';
// // import Filter from './components/Filter';

// // const App = () => {
// //   return (
// //     <div className="container py-4">
// //       <h2 className="mb-4 text-center">Product Filter</h2>
// //       <Filter />
// //       <ProductList />
// //     </div>
// //   );
// // };

// class App extends Component{
//   render() {
//     return (
//       <div className="container py-4">
//         <h2 className="mb-4 text-center">Product Filter</h2>
//         <FilterClass />
//         <ProductClass />
//       </div>
//     );
//   }
// }

// export default App;

