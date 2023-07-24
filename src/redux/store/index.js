import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Importa el almacenamiento que deseas utilizar (por ejemplo, localStorage)
import rootReducer from '../reducer/index.js';
import thunk from 'redux-thunk';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// Configuración de Redux Persist
const persistConfig = {
  key: 'root', // La clave raíz para el almacenamiento en el navegador
  storage, // El almacenamiento que deseas utilizar
  // Aquí puedes configurar más opciones, como las listas blancas o negras para persistir solo ciertas partes del estado
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default store;