import PropTypes from 'prop-types';
import { createContext } from 'react';
import { useLocalStorage } from '../hooks';
import { defaultSettings } from '../config';

const initialState = {
  ...defaultSettings,
};

const SettingsContext = createContext(initialState);

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function SettingsProvider({ children }) {
  const [settings] = useLocalStorage('base-app-settings', {
    ...defaultSettings,
  });


  return (
    <SettingsContext.Provider
      value={{
        ...settings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
