import { ChakraProvider } from '@chakra-ui/react';
import { I18nextProvider } from 'react-i18next';
import { RecoilRoot } from 'recoil';
import { createContext, useMemo, useState } from 'react';
import theme from './theme/theme';
import i18n from './i18n';
import { AppRoutes } from './routes';

type TLoadContextType = {
  isLoad: boolean;
  setIsLoad: (value: boolean) => void;
};

export const LoadComponentContext = createContext<TLoadContextType>({
  isLoad: true,
  setIsLoad: () => {},
});

function App() {
  const [isLoad, setIsLoad] = useState(true);
  const loadValue = useMemo(
    () => ({
      isLoad,
      setIsLoad,
    }),
    [isLoad, setIsLoad]
  );

  return (
    <RecoilRoot>
      <I18nextProvider i18n={i18n}>
        <LoadComponentContext.Provider value={loadValue}>
          <ChakraProvider theme={theme}>
            <AppRoutes />
          </ChakraProvider>
        </LoadComponentContext.Provider>
      </I18nextProvider>
    </RecoilRoot>
  );
}

export default App;
