import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect("mongodb://localhost/crud-mongodb");
    console.log("Conectado a:", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
