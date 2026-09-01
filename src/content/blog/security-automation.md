---
title: My tools for finding and fixing vulnerabilities
description: A quick look at the security automation I maintain for CI/CD workflows.
pubDate: 2026-08-15
---

A short note on the tooling that shows up in my day-to-day: custom security automation that plugs straight into CI/CD, so code is checked before it ever ships.

## The idea

Most of security is boring repetition. The good kind of automation takes the repeatable checks and runs them every time, in the same place developers already work.

## What that looks like

- static analysis wired into pull requests
- secrets scanning with fast, loud failures
- dependency checks with a clear path to fix
- custom rules for the stuff off-the-shelf tools miss

## Closing the loop

The part that matters most is the feedback loop: a finding is only useful if it reaches the right person with enough context to act on it.
