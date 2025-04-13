#!/bin/bash

# Exit immediately if a command fails
set -e

# Install root, client, and server dependencies
npm install
npm run install-all

# Build frontend
npm run build-client