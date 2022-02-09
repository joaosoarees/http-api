function bodyParser(request, callback) {
  let body = '';

  const teste = 0;
  const teste = 0;

  request.on('data', (chunk) => {
    body += chunk;
  });

  request.on('end', () => {
    body = JSON.parse(body);
    request.body = body;
    
    callback();
  });
};

module.exports = bodyParser;