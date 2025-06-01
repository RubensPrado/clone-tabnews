function status(request, resoponse) {
  resoponse.status(200).json({ chave: "valor" });
}

export default status;
