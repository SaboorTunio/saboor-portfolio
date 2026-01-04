# RAG Chatbot Implementation Plan

## Technical Context

### Architecture Overview
- **Data Layer**: `lib/ai-data.ts` containing `PORTFOLIO_CONTEXT` string acting as "Vector DB" substitute
- **Backend API**: `app/api/chat/route.ts` using OpenAI package with OpenRouter base URL
- **Frontend Widget**: `components/chat-widget.tsx` as Client Component with Framer Motion animations
- **Integration**: Mount in `app/layout.tsx`

### Technology Stack
- Next.js 16 (App Router)
- React 19
- OpenAI SDK
- OpenRouter API
- Framer Motion for animations
- Tailwind CSS for styling
- TypeScript with Strict Mode

### Known Constraints
- AI must only respond to questions about Abdul Saboor Tunio's skills, GitHub, and Portfolio
- Chat history resets on page refresh (no persistent storage)
- Must follow Cyberpunk/Neon Glass design aesthetic from constitution
- Data must come exclusively from lib/ai-data.ts

### Resolved Unknowns
- Specific content for PORTFOLIO_CONTEXT in lib/ai-data.ts (defined in research.md)
- OpenRouter API key configuration (defined in research.md)
- Rate limiting and cost considerations for API usage (defined in research.md)
- Exact styling specifications for the "Neon Orb" widget (defined in research.md)

## Constitution Check

### Pre-Design Alignment
- ✅ Uses specified tech stack (Next.js 16, React 19, Tailwind CSS)
- ✅ Follows Cyberpunk/Neon Glass design aesthetic
- ✅ Adheres to AI behavior restrictions (refuses unrelated questions)
- ✅ Uses lib/ai-data.ts for data strategy (Lightweight RAG)

### Post-Design Alignment
- ✅ Implementation follows Tech Stack Standardization principle (Next.js 16, React 19, Tailwind CSS, OpenAI SDK)
- ✅ Implementation follows Design System Implementation principle (Cyberpunk/Neon Glass aesthetic)
- ✅ AI behavior adheres to Identity Verification principle (refuses unrelated questions)
- ✅ Implementation follows Context Injection Protocol (using lib/ai-data.ts)
- ✅ Implementation follows AI Integration Standards (OpenAI SDK with OpenRouter)

### Potential Violations
- None identified - all requirements align with constitution

## Phase 0: Research

### Research Tasks
1. Define comprehensive PORTFOLIO_CONTEXT for lib/ai-data.ts
2. Research OpenRouter API integration best practices
3. Design the "Neon Orb" widget with Cyberpunk aesthetic
4. Investigate streaming response implementation with typewriter effect

## Phase 1: Design & Contracts

### Data Model
- PORTFOLIO_CONTEXT: String containing verified information about Abdul Saboor Tunio
- ChatMessage: {id, role, content, timestamp}
- ChatSession: {sessionId, messages[], createdAt}

### API Contract
- POST `/api/chat` - Process user message and return AI response
- Request: {message: string}
- Response: {response: string, sources: string[]}

### Implementation Steps
1. Create lib/ai-data.ts with PORTFOLIO_CONTEXT
2. Implement app/api/chat/route.ts API endpoint
3. Create components/chat-widget.tsx component
4. Integrate widget in app/layout.tsx
5. Style with Cyberpunk/Neon Glass aesthetic