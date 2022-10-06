import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../store/index';

const logger = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger)),
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
