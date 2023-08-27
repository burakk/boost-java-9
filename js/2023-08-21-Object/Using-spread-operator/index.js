const baseSettings = {
  theme: "dark",
  notifications: false,
  audioMessages: false,
};

const baseSettingsCopy = { ...baseSettings };

console.log(baseSettingsCopy);

const extendedSettings = { passwordProtection: true, ...baseSettings };

//overwrite

const newSettings = { ...baseSettings, theme: "light", audio: true };

console.log(newSettings);



