const userSettings = {
  theme: "dark",
  fontSize: "xl",
  notifications: false,
  backupMessages: false,
};

const userTheme = userSettings.theme;
const userFontSize = userSettings.fontSize;

const { theme, fontSize } = userSettings;

console.log(theme, fontSize);

// rest operator
const likedPlace = {
  name: "Paris",
  country: "France",
  visited: false,
};

const { name, ...rest } = likedPlace;

console.log(rest);

// accessing with a different name

const { name: cityName, country } = likedPlace;

console.log(cityName);

//default values

const { flag = "notfound.png" } = likedPlace;

console.log(flag);



//destructuring in function parameter paranthesis

function carousel( {speed, hasBullets }  ){

  console.log(speed, hasBullets);

}


carousel( {speed:"120ms", hasBullets:false});