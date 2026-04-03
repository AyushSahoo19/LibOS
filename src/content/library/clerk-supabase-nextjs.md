---
title: "Clerk + Supabase Next.js"
description: "Official Clerk + Supabase template: custom RLS policies using Clerk JWTs, third-party auth provider configuration, and the definitive reference for combining both platforms."
domain: "Repository"
stars: 780
links:
  github: "https://github.com/clerk/clerk-supabase-nextjs"
  website: "https://clerk.com"
tags: ["Clerk", "Supabase", "Next.js", "Auth", "RLS", "JWT", "Official"]
---

## Overview
The official integration reference for using Clerk authentication with Supabase as your database. Demonstrates how to configure Supabase RLS policies that validate Clerk JWTs, enabling Clerk's enterprise-grade auth with Supabase's row-level security.

## Features
- **Clerk JWT in RLS:** Custom RLS policies that read `auth.jwt()` claims from Clerk tokens.
- **Third-Party Auth Config:** How to configure Supabase to trust Clerk as the JWT provider.
- **Next.js App Router:** Correctly integrated Server Components + Client Components with both auth systems.
- **Protected API Routes:** Middleware patterns for protecting Next.js API routes with Clerk + Supabase.

## Use Cases
- Using Clerk for auth (social login, MFA, org management) while keeping Supabase for the database.
- Moving an existing Clerk app to Supabase for the database layer.
- Learning the Supabase third-party auth provider configuration for any JWT-based auth system.

## Technical Advantages
- Official from Clerk — the JWT and RLS configuration is exact, not community guesswork.
- Enables the best of both: Clerk's auth UX + Supabase's Postgres power.
- Clerk handles org/team management that would be complex to build on raw Supabase auth.
