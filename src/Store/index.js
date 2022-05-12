import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import { authReducer } from "./Auth/reducer";
import { cartReducer } from "./Cart/reducer";
import { goodsReducer } from "./Goods/reducer";
import { productReducer } from "./Product/reducer";
import { sagaWatcher } from "./Sagas/sagas"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  goods: goodsReducer,
  product: productReducer,
  cart: cartReducer,
  auth: authReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagaWatcher)

export const persistor = persistStore(store);


// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAxF_1kf_LFo8-4H2BHAHzaO0FFOBS5rvY",
//   authDomain: "product-react-cec7c.firebaseapp.com",
//   projectId: "product-react-cec7c",
//   storageBucket: "product-react-cec7c.appspot.com",
//   messagingSenderId: "266626741466",
//   appId: "1:266626741466:web:83deb9771fd58d9fa621e3"
// };

// const app = initializeApp(firebaseConfig);