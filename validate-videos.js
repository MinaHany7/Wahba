#!/usr/bin/env node
/* ==========================================================================
   VIDEO & IMAGE VALIDATION SCRIPT
   Run with:  node validate-videos.js
   No external dependencies — uses only Node's built-in "fs" and "path".
   Checks every project in js/projects.js for:
     - video file exists, is .mp4, and is <= 24 MB
     - poster image exists
     - dashboard image exists
     - no local computer paths ("C:\" or "/home/" or "/Users/")
     - no base64 media
   ========================================================================== */

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const MAX_VIDEO_BYTES = 24 * 1024 * 1024; // 24 MB

function readProjects(){
  const file = fs.readFileSync(path.join(ROOT, "js", "projects.js"), "utf8");
  // Extract the PROJECTS array via a safe sandboxed eval (no external deps)
  const marker = "const PROJECTS = ";
  const start = file.indexOf(marker);
  if(start === -1) throw new Error("Could not find PROJECTS array in js/projects.js");
  const arrayText = file.slice(start + marker.length);
  const endIdx = arrayText.lastIndexOf("];") + 2;
  const jsonish = arrayText.slice(0, endIdx);
  // eslint-disable-next-line no-eval
  const PROJECTS = eval(jsonish);
  return PROJECTS;
}

function isLocalPath(p){
  return /^[A-Za-z]:\\/.test(p) || p.startsWith("/home/") || p.startsWith("/Users/") || p.startsWith("/mnt/");
}

function fmtSize(bytes){
  return (bytes / (1024*1024)).toFixed(1) + " MB";
}

function main(){
  let errors = 0;
  let warnings = 0;
  const projects = readProjects();

  console.log("Validating " + projects.length + " projects...\n");

  projects.forEach(function(p){
    const label = "[" + p.id + "] " + p.title;

    // Video checks
    if(p.videoType === "mp4"){
      if(!p.videoUrl){
        console.log("Error: " + label + " has videoType 'mp4' but no videoUrl");
        errors++;
      } else if(isLocalPath(p.videoUrl)){
        console.log("Error: " + label + " uses a local computer path: " + p.videoUrl);
        errors++;
      } else if(p.videoUrl.startsWith("data:")){
        console.log("Error: " + label + " uses a Base64 video (not allowed)");
        errors++;
      } else {
        const full = path.join(ROOT, p.videoUrl);
        if(!fs.existsSync(full)){
          console.log("Error: " + label + " — missing video file: " + p.videoUrl);
          errors++;
        } else {
          const size = fs.statSync(full).size;
          if(!p.videoUrl.toLowerCase().endsWith(".mp4")){
            console.log("Error: " + label + " video is not .mp4: " + p.videoUrl);
            errors++;
          } else if(size > MAX_VIDEO_BYTES){
            console.log("Error: " + p.videoUrl + " is larger than 24 MB (" + fmtSize(size) + ")");
            errors++;
          } else {
            console.log("Video passed: " + p.videoUrl + " — " + fmtSize(size));
          }
        }
      }
      if(!p.videoPoster){
        console.log("Error: " + label + " — missing poster image");
        errors++;
      } else if(!fs.existsSync(path.join(ROOT, p.videoPoster))){
        console.log("Error: " + label + " — poster image path does not exist: " + p.videoPoster);
        errors++;
      }
    } else if(p.videoType === "none"){
      console.log("Info: " + label + " has no video yet — will show \"Project video coming soon\"");
    }

    // Dashboard image checks
    if(!p.dashboardImage){
      console.log("Warning: " + label + " has no dashboardImage set");
      warnings++;
    } else if(!fs.existsSync(path.join(ROOT, p.dashboardImage))){
      console.log("Error: " + label + " — dashboard image path does not exist: " + p.dashboardImage);
      errors++;
    }
  });

  console.log("\n----------------------------------------");
  console.log(errors === 0 ? "All checks passed." : errors + " error(s) found.");
  if(warnings > 0) console.log(warnings + " warning(s).");
  console.log("----------------------------------------");

  if(errors > 0) process.exit(1);
}

main();
