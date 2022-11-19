import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed(" ERROR ") + " " + error);
};

const printSucces = (msg) => {
  console.log(chalk.bgGreen(" SUCCESS ") + " " + msg);
};

const printHelp = () => {
  console.log(
    dedent(`${chalk.bgCyan(" HELP ")}
  Без параметров - вывод погоды
  -s [CITY] для установки города
  -h для вывода помощи
  -t [API KEY] для сохранения токена   
  `)
  );
};

const printWeather = (res, icon) => {
  console.log(
    dedent(`${chalk.bgYellowBright(" WEATHER ")} Погода в город ${res.name}:
    ${icon}  ${res.weather[0].description}
    Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
    Скорость ветра: ${res.wind.speed}
  `)
  );
};

export { printError, printSucces, printHelp, printWeather };
