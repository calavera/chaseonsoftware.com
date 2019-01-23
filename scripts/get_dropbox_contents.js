require("dotenv").load();
const fetch = require("isomorphic-fetch");
const path = require("path");
const fs = require("fs-extra");
const Dropbox = require("dropbox").Dropbox;

// Setup our interface for the Dropbox API with our token
// If there's no token, we'll just go ahead and exit this script now.
if (!process.env.DBX_ACCESS_TOKEN) {
  console.log(
    "Error: could not find a Dropbox access token. Make sure you have a `.env` file with a `DBX_ACCESS_TOKEN` key/value pair for accessing the Dropbox API."
  );
  process.exit(1);
}
const dbx = new Dropbox({
  accessToken: process.env.DBX_ACCESS_TOKEN,
  fetch: fetch
});

// Clean anything up that exists already, since we'll be re-building this folder
// everytime we run a build
const POSTS_DIR = path.resolve(__dirname, "../src/content");
fs.removeSync(POSTS_DIR);
fs.ensureDirSync(POSTS_DIR);

downloadContent("");

function downloadContent(dir_path) {
  // Get all the posts in the root of our our Dropbox App's directory and save
  // them all to our local posts folder.
  dbx
    .filesListFolder({ path: dir_path })
    .then(response => {
      response.entries.forEach(entry => {
        const { name, path_lower } = entry;

        if (entry[".tag"] === "folder") {
          fs.mkdirp(POSTS_DIR + "/" + path_lower);
          downloadContent(path_lower);
        }

        if (entry[".tag"] === "file") {
          dbx
            .filesDownload({ path: path_lower })
            .then(data => {
              const filename = path.resolve(
                path.join(POSTS_DIR, dir_path),
                name
              );
              const filecontents = data.fileBinary.toString();

              fs.outputFile(filename, filecontents).catch(error => {
                if (error) {
                  return console.log(
                    "Error: file failed to write",
                    name,
                    error
                  );
                }
              });
            })
            .catch(error => {
              console.log("Error: file failed to download", name, error);
            });
        }
      });
    })
    .catch(error => {
      console.log(error);
    });
}
