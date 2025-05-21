import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store,  persistor } from "./redux/store"; //
import { AppContextProvider } from "./contexts/ThemeContext";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </PersistGate>
   </Provider>
);

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
