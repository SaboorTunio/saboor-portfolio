# RAG Chatbot Data Model

## Entities

### PORTFOLIO_CONTEXT
- **Type**: String
- **Description**: Contains the complete context about Abdul Saboor Tunio including personal information, education, projects, and skills
- **Fields**:
  - content (string): The complete context string used as the system message for the AI
- **Validation**: Must contain comprehensive information about the portfolio owner
- **Source**: lib/ai-data.ts

### ChatMessage
- **Type**: Object
- **Description**: Represents a single message in the chat conversation
- **Fields**:
  - id (string): Unique identifier for the message
  - role (string): Either "user" or "assistant"
  - content (string): The text content of the message
  - timestamp (Date): When the message was created
- **Validation**:
  - role must be either "user" or "assistant"
  - content must not be empty
  - timestamp must be a valid date

### ChatSession
- **Type**: Object
- **Description**: Represents a single chat session (exists only for the current page visit)
- **Fields**:
  - sessionId (string): Unique identifier for the session
  - messages (ChatMessage[]): Array of messages in the session
  - createdAt (Date): When the session was started
- **Validation**:
  - messages array should not exceed a reasonable size
  - createdAt must be a valid date
- **State Transitions**: Created when widget is first opened, destroyed when page refreshes

## Relationships
- ChatSession contains multiple ChatMessage instances
- PORTFOLIO_CONTEXT is referenced during API calls to provide context to the AI

## Constraints
- ChatSession data is not persisted across page refreshes
- All data must comply with the portfolio owner's verified information
- Messages must follow the AI behavior restrictions as per the constitution