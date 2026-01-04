# RAG Chatbot Quickstart Guide

## Overview
This guide provides a quick setup for the RAG Chatbot feature that allows users to ask questions about Abdul Saboor Tunio's portfolio and get AI-powered responses.

## Prerequisites
- Next.js 16 with App Router
- React 19
- OpenAI SDK installed
- OpenRouter API key

## Files to Create
1. `lib/ai-data.ts` - Contains portfolio context
2. `app/api/chat/route.ts` - API endpoint for chat
3. `components/chat-widget.tsx` - The floating chat widget

## Setup Steps

### 1. Create Portfolio Context
Create `lib/ai-data.ts` with the PORTFOLIO_CONTEXT string containing all relevant information about Abdul Saboor Tunio.

### 2. Set up API Route
Create `app/api/chat/route.ts` to handle chat requests and connect to OpenRouter API using the portfolio context as a system message.

### 3. Create Chat Widget
Create `components/chat-widget.tsx` as a Client Component with:
- Floating "Neon Orb" design
- Open/close animations using Framer Motion
- Form for user input
- Display area for conversation history

### 4. Integrate Widget
Add the chat widget to your main layout in `app/layout.tsx` to make it available on all pages.

## Environment Variables
- `OPENROUTER_API_KEY` - Your OpenRouter API key

## Key Features
- Streaming responses with typewriter effect
- Cyberpunk/Neon Glass design aesthetic
- AI refuses questions outside portfolio scope
- Chat history resets on page refresh