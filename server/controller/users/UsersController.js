// aqui vai o código que acessa o banco de dados

const getAllUsers = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Ver todos os usuarios")
}

const postUser = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Criar usuario")
}

module.exports = { getAllExamples }