import dotenv from "dotenv";
dotenv.config();
import Sequelize from "sequelize";
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Connection made successfully!"))
  .catch((error) =>
    console.log(
      `An error occurred while trying to connect to the database [${error.message}]`
    )
  );

export default sequelize;
