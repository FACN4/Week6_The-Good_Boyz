const error_500 = res => {
  res.writeHead(500, { "content-type": "text/plain" });
  res.end("server error");
};

module.exports = error_500;
