import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed(" ERROR ") + " " + error);
};

const printSucces = (msg) => {
  console.log(chalk.bgGreen(" SUCCES ") + " " + msg);
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

export { printError, printSucces, printHelp };
