const { Command } = require('commander');
const express = require('express');
const http = require('http');
const fs = require('fs');
const app = express();
const program = new Command();

program
  .option('-h, --host <host>', 'Server host address')
  .option('-p, --port <port>', 'Server port')
  .option('-c, --cache <cachePath>', 'Path to cache directory')
  .parse(process.argv);

const options = program.opts();

if (!options.host || !options.port || !options.cache) {
    console.log('Error: All required options must be specified.');
    process.exit(1);
  }
  
  const server = http.createServer(app);

  server.listen(options.port, options.host, () => {
    console.log(`Server running at http://${options.host}:${options.port}/`);
  });

  app.get('/', (req, res) => {
    res.send('This is a caching server.');
  });
