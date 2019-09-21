#!/usr/bin/env bash
aws s3 sync ./dist/web-app/ "s3://$WEBSITE_BUCKET/website/"