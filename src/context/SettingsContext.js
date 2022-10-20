import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const SettingsContext = createContext();

const defaultSettings = {
  theme: 'light'
};

export function SettingsProvider() {
  const [currentSettings, setCurrentSettings] = useState(defaultSettings);

  const handleSaveSettings = (theme) => {
    setCurrentSettings(theme);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        saveSettings: handleSaveSettings
      }}></SettingsContext.Provider>
  );
}

SettingsProvider.propTypes = {
  settings: PropTypes.object
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
