#!/usr/bin/env node

import { existsSync, writeFileSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

const args = process.argv.slice(2);
const force = args.includes('-f') || args.includes('--force');
const rootDir = process.cwd();

const createIfDoesntExist = (filePath, data) => {
  if (!filePath) throw new Error('File path is required.');
  if (!data) throw new Error('Data is required.');
  if (force || !existsSync(filePath)) {
    writeFileSync(filePath, data);
    console.debug(`${filePath} has been created.`);
  } else {
    console.debug(`${filePath} already exists.`);
  }
}

// Install @cjmosure/style
const detectPackageManager = () => {
  if (existsSync(join(rootDir, 'yarn.lock'))) {
    return 'yarn';
  } else if (existsSync(join(rootDir, 'pnpm-lock.yaml'))) {
    return 'pnpm';
  } else {
    return 'npm';
  }
};

const installStylePackage = () => {
  const packageManager = detectPackageManager();
  const installCommand = {
    npm: 'npm install @cjmosure/style -D',
    yarn: 'yarn add @cjmosure/style -D',
    pnpm: 'pnpm add @cjmosure/style -D'
  }[packageManager];

  try {
    execSync(installCommand, { stdio: 'inherit' });
    console.debug(`@cjmosure/style has been installed using ${packageManager}.`);
  } catch (error) {
    console.error(`Failed to install @cjmosure/style using ${packageManager}.`, error);
  }
};

installStylePackage();

console.log('✅ @cjmosure/style installed.');

// Install peer dependencies
const pkg = JSON.parse(execSync('npm list @cjmosure/style --json').toString());
const peerDeps = pkg.dependencies['@cjmosure/style'].peerDependencies;

if (peerDeps) {
    const deps = Object.entries(peerDeps)
        .map(([name, version]) => `${name}@${version}`)
        .join(' ');

    console.debug('Installing peer dependencies...');
    execSync(`npm install --save-dev ${deps}`, { stdio: 'inherit' });
}

console.log('✅ Installed and saved dev dependencies.');


// Create prettier config
createIfDoesntExist(join(rootDir, '.prettierignore'), `**\n`);

console.log('✅ .prettierignore created.');

// Create ESLint config
createIfDoesntExist(join(rootDir, '.eslintrc.js'), `const { generateEslintConfig } = require('@cjmosure/style');
import { execSync } from 'child_process';
import { program } from 'commander';

module.exports = generateEslintConfig();
`);

console.log('✅ .eslintrc.js');

console.log('✅ Installed and saved dev dependencies.');