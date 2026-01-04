# RAG Chatbot Implementation Tasks

## Feature: RAG Chatbot

Context-aware AI assistant that answers questions about Abdul Saboor Tunio using verified data (Lightweight RAG).

## Phase 1: Setup

### Goal
Initialize the project with necessary dependencies and configuration for the RAG Chatbot feature.

### Tasks
- [x] T001 Install required dependencies (openai, framer-motion)
- [x] T002 Verify OpenRouter API key is configured in environment variables

## Phase 2: Foundational

### Goal
Create the foundational data layer that will serve as the knowledge base for the AI assistant.

### Tasks
- [x] T003 [P] Create lib/ai-data.ts with PORTFOLIO_CONTEXT containing Abdul Saboor Tunio's information (education, projects, skills)

## Phase 3: User Story 1 - AI Chat API

### Goal
User can send messages to the AI assistant and receive responses based on the portfolio context.

### Independent Test Criteria
- Send a message to the API
- Receive a response that references the portfolio context
- Verify the response is relevant to the question asked

### Tasks
- [x] T004 [US1] Create app/api/chat/route.ts API endpoint
- [x] T005 [US1] Configure OpenAI client with OpenRouter base URL in the API route
- [x] T006 [US1] Implement context injection by passing PORTFOLIO_CONTEXT as system message
- [x] T007 [US1] Implement streaming response functionality
- [x] T008 [US1] Add error handling for API failures
- [x] T009 [US1] Add rate limiting to prevent excessive API usage

## Phase 4: User Story 2 - Chat Widget UI

### Goal
User can interact with a floating "Neon Orb" chat widget that opens a chat interface with typewriter effect.

### Independent Test Criteria
- Click the floating widget
- See the chat panel open with animation
- Type a message and see it appear in the chat
- Receive response with typewriter effect
- Close the widget by clicking outside

### Tasks
- [x] T010 [P] [US2] Create components/chat-widget.tsx component
- [x] T011 [US2] Implement floating "Neon Orb" button with Cyberpunk/Neon Glass styling
- [x] T012 [US2] Add Framer Motion animations for opening/closing the chat panel
- [x] T013 [US2] Implement chat panel UI with message history display
- [x] T014 [US2] Add input field for user messages
- [x] T015 [US2] Implement typewriter effect for AI responses
- [x] T016 [US2] Add functionality to close panel when clicking outside
- [x] T017 [US2] Clear input field after each successful query

## Phase 5: User Story 3 - Integration

### Goal
Chat widget is integrated into the global layout and follows all portfolio constraints.

### Independent Test Criteria
- Chat widget appears on all pages
- Widget maintains its position in bottom-right corner
- Chat history resets on page refresh
- AI refuses to answer questions outside portfolio scope

### Tasks
- [x] T018 [P] [US3] Import ChatWidget component in app/layout.tsx
- [x] T019 [US3] Add ChatWidget to the global layout
- [x] T020 [US3] Implement chat session state that resets on page refresh
- [x] T021 [US3] Add logic to handle responses that are outside portfolio scope
- [x] T022 [US3] Ensure widget follows Cyberpunk/Neon Glass design aesthetic
- [x] T023 [US3] Verify all UI elements are responsive on different screen sizes

## Phase 6: Polish & Cross-Cutting Concerns

### Goal
Final touches and quality improvements to ensure the feature is production-ready.

### Tasks
- [x] T024 Add accessibility features to the chat widget
- [x] T025 Add loading states during API requests
- [x] T026 Add error messages for failed API requests
- [x] T027 Optimize component performance and minimize re-renders
- [x] T028 Add TypeScript strict typing throughout the implementation
- [x] T029 Test the complete user flow from opening widget to receiving response
- [x] T030 Verify all constitution requirements are met

## Dependencies

- User Story 1 (API) must be completed before User Story 2 (UI) can make API calls
- Foundational (data layer) must be completed before User Story 1 (API) can access PORTFOLIO_CONTEXT

## Parallel Execution Opportunities

- T001, T002 (Setup) can run in parallel with T003 (Foundational)
- T010, T011, T012, T013, T014, T015, T016, T017 (UI tasks) can run in parallel after foundational data is created
- T024-T030 (Polish tasks) can run in parallel after all user stories are implemented

## Implementation Strategy

1. **MVP Scope**: Complete User Story 1 (API) and User Story 2 (UI) with basic functionality
2. **Incremental Delivery**: Add integration and polish in subsequent iterations
3. **Test Early**: Each user story is independently testable to ensure functionality at every step