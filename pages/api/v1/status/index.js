import database from "../../../../infra/database.js";

async function status(request, resoponse) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  resoponse.status(200).json({ chave: "valor" });
}

export default status;
