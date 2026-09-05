# Security and Publication Scope

This repository is a curated portfolio showcase for HeartNote. It is intentionally separated from the live production repository.

## Publication rules

The showcase should contain only:

- product and UX documentation
- approved product screenshots
- selected front-end examples relevant to my contribution
- public links to the live product

It should not contain:

- environment files
- database credentials or connection strings
- authentication secrets
- OAuth credentials
- API keys
- AWS or deployment configuration
- production logs
- user or customer data
- private operational scripts
- the full production source tree or Git history

## Screenshots

The screenshots included in `assets/screenshots/` were selected for portfolio use and do not intentionally expose private account data, credentials or customer information.

## Production separation

The live HeartNote application and its collaborative repository remain separate from this showcase. Changes to this repository do not deploy or modify the live product.

## Before future public updates

When new material is added, review the exact files for:

- credential-like strings
- account or customer information
- production URLs that should remain private
- internal infrastructure details
- screenshots containing personal or sensitive data

If a production security issue is ever discovered, fix it in the production system first and only then refresh the showcase if needed.
