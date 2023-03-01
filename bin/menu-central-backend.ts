#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { MenuCentralBackendStack } from '../lib/menu-central-backend-stack';

const app = new cdk.App();
new MenuCentralBackendStack(app, 'MenuCentralBackendStack', {
  
});