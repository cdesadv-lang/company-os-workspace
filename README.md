# Company OS delivery workspace

Dedicated repository for bounded AI-generated software increments. The Founder owns all approvals and release decisions.

Generated implementation and test files are confined to `src/generated/<project-id>/`. Agents open draft pull requests, and the trusted Company OS QA workflow runs tests in a network-isolated, read-only container. No automatic merge or production release is authorized.

This repository contains delivery artifacts; the Company OS dashboard and its secrets are configured separately. Never commit credentials or production data here.
