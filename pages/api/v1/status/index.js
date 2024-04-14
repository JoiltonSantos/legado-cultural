function status(request, response) {
  response.status(200).json({ status: "Está funcionando." });
}

export default status;
