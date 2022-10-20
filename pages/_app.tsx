import type { AppProps } from 'next/app';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../store/index';
import GlobalStyle from '../styles/GlobalStyle';

const logger = createLogger();

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger] as const,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
