/**
 * Generate a manifest based on static assets
 */

import fs from "fs";
import path from "path";
import jsonfile from "jsonfile";
jsonfile.spaces = 2;

const fuseManifestToConfigJson = () => {
  jsonfile.readFile(path.join(process.cwd(), "public/assets/manifest.json"), (err, manifestContents) => {
    jsonfile.readFile(path.join(process.cwd(), "config.json"), (err, configContents) => {
      configContents.params = configContents.params || {};
      configContents.params.manifest = {};
      for (const k in manifestContents) {
        configContents.params.manifest[k.replace(".", "")] = manifestContents[k];
      }
      jsonfile.writeFile(path.join(process.cwd(), "config.json"), configContents, (err) => {
        if (err) { throw err; }
        console.log("the asset manifest has been written to the config.json");
      });
    });
  });
};

fuseManifestToConfigJson();
