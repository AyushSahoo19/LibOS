---
title: "Supabase Auth with SSR (ElectricCodeGuy)"
description: "Complete AI + Supabase stack: RAG, web search, vector search (pgvector), multi-LLM support, persistent chat history, and incremental message saving."
domain: "Repository"
stars: 2800
links:
  github: "https://github.com/ElectricCodeGuy/SupabaseAuthWithSSR"
tags: ["Supabase", "Next.js", "AI", "pgvector", "RAG", "SSR", "Auth"]
---

## Overview
The most complete reference implementation for combining Supabase authentication with a full AI stack. Demonstrates the entire production pattern: SSR auth, RAG pipeline, pgvector semantic search, multi-LLM switching, and persistent conversation history.

## Features
- **SSR Authentication:** Server-side Supabase auth with RLS policies enforced via `on_auth_user_created` triggers.
- **pgvector Search:** Semantic vector search integrated directly into Postgres — no separate vector database needed.
- **RAG Pipeline:** Full retrieval-augmented generation pipeline with document chunking and embedding.
- **Persistent Chat:** Incremental message saving so long conversations survive page refreshes.
- **Multi-LLM:** Switch between OpenAI, Anthropic, and other providers with a unified interface.

## Use Cases
- Building an AI chat application with user authentication and persistent history.
- Implementing a RAG system over user-uploaded documents with Supabase as the backend.
- Learning the correct SSR auth pattern for Supabase in Next.js App Router.

## Technical Advantages
- pgvector eliminates the need for a separate vector database (Pinecone, Weaviate, etc.) — everything in Postgres.
- RLS triggers ensure users can only access their own data — security is baked in at the database level.
- Incremental saving means you never lose conversation state even in long AI sessions.
