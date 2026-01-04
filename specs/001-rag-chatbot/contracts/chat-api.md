# RAG Chatbot API Contract

## Chat API

### POST /api/chat
Process user message and return AI response based on portfolio context.

#### Request
```json
{
  "message": "What is the Open-Ai-Agent-SDK?"
}
```

#### Response
```json
{
  "id": "msg_1234567890",
  "response": "It is a custom SDK built by Saboor for creating autonomous agents using Python...",
  "sources": ["lib/ai-data.ts"],
  "timestamp": "2026-01-04T09:30:00.000Z"
}
```

#### Error Responses
- `400 Bad Request`: Missing or invalid message in request body
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: AI service unavailable

#### Headers
- Content-Type: application/json
- Accept: application/json

#### Security
- No authentication required for this endpoint
- Rate limiting applied per client IP

## Data Flow
1. Client sends user message to `/api/chat`
2. Server combines message with PORTFOLIO_CONTEXT as system message
3. Server makes request to OpenRouter API with combined context
4. Server streams response back to client
5. Client displays response with typewriter effect