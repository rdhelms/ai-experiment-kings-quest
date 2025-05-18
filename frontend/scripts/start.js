#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

// Get the absolute path to the frontend directory
const frontendDir = path.resolve(__dirname, '..');

try {
  // Start the Vue development server
  console.log('Starting the King\'s Quest I Browser Edition...');
  execSync('npx vue-cli-service serve', { 
    cwd: frontendDir,
    stdio: 'inherit'
  });
} catch (error) {
  console.error('Error starting the application:', error.message);
  process.exit(1);
}
