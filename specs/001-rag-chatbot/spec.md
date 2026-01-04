# RAG Chatbot Feature Specification

## 1. Functional Goal
Create a context-aware AI assistant that answers questions about Abdul Saboor Tunio using **only** the provided verified data (Lightweight RAG).

## 2. Key Features
* **Floating Widget:** A non-intrusive "Neon Orb" button in the bottom-right corner.
* **Smart Context:** The AI must know about the specific GitHub projects (`Open-Ai-Agent-SDK`) and the exact education timeline (2023-2025).
* **Streaming Responses:** The chat must feel real-time (typewriter effect).
* **Persistence:** The chat history should ideally reset on refresh (simple state) to keep costs low and logic simple.

## 3. User Interaction Flow
1. User clicks the "Message" icon.
2. Panel opens with a fade-in animation.
3. User types: "What is the Open-Ai-Agent-SDK?"
4. AI responds: "It is a custom SDK built by Saboor for creating autonomous agents using Python..." (Source: `lib/ai-data.ts`).

## 4. User Scenarios & Testing

### Primary Scenario: User Queries About Projects
- **Actor**: Website visitor
- **Action**: User clicks the floating "Neon Orb" widget and asks about a specific project
- **Expected outcome**: AI provides accurate information about the project from verified data sources

### Secondary Scenario: User Queries About Education
- **Actor**: Website visitor
- **Action**: User asks about Abdul Saboor Tunio's educational background
- **Expected outcome**: AI provides accurate information about GIAIC and other educational details

### Edge Case: Irrelevant Questions
- **Actor**: Website visitor
- **Action**: User asks questions unrelated to Saboor's skills, GitHub, or Portfolio
- **Expected outcome**: AI politely refuses to answer and redirects to relevant topics

## 5. Functional Requirements

### FR-1: Floating Widget Implementation
- The chat widget must appear as a "Neon Orb" in the bottom-right corner of the screen
- The widget must be visible on all pages of the portfolio website
- The widget must have a subtle animation to attract attention without being intrusive

### FR-2: Context-Aware AI Responses
- The AI must only respond to questions about Abdul Saboor Tunio's skills, GitHub projects, and portfolio
- The AI must pull information exclusively from verified data sources (lib/ai-data.ts)
- The AI must refuse to answer questions outside the specified scope

### FR-3: Streaming Response Display
- Responses must be displayed with a typewriter effect to simulate real-time typing
- The response speed should be realistic but not too slow to maintain engagement
- The typewriter effect should be smooth and visually appealing

### FR-4: Chat Session Management
- Each page refresh should reset the chat history to maintain simplicity
- The chat panel should close when the user clicks outside the widget or panel
- The input field should be cleared after each successful query

### FR-5: Data Source Integration
- The system must integrate with lib/ai-data.ts as the primary data source
- The AI must accurately reference data from this source in responses
- The system must handle cases where requested information is not available in the data source

## 6. Success Criteria

### Quantitative Measures:
- 100% of user queries about specified topics (projects, education, skills) are answered with relevant information
- Response time for AI answers is under 3 seconds
- 95% of users successfully interact with the chat widget without confusion
- 0% of responses contain information outside the approved scope

### Qualitative Measures:
- Users find the chat experience helpful and engaging
- The floating widget is noticeable but not intrusive
- The typewriter effect enhances the user experience
- Users understand the scope limitations of the AI assistant

## 7. Key Entities

### Chat Session
- Temporary state that exists only during the current page session
- Contains user messages and AI responses
- Resets on page refresh

### Data Source (lib/ai-data.ts)
- Contains verified information about Abdul Saboor Tunio
- Includes details about projects, education, and skills
- Serves as the single source of truth for AI responses

### UI Components
- Floating "Neon Orb" widget
- Chat panel with message history
- Input field for user queries
- Typewriter effect display for responses

## 8. Assumptions
- The lib/ai-data.ts file contains comprehensive and accurate information about Abdul Saboor Tunio
- The OpenAI SDK is properly configured and connected to OpenRouter
- The UI design follows the Cyberpunk/Neon Glass aesthetic as per the constitution
- Users will understand that the AI only responds to specific topics related to Saboor's portfolio

## 9. Dependencies
- OpenAI SDK connected to OpenRouter for AI functionality
- lib/ai-data.ts containing verified information
- Tailwind CSS for styling the chat interface
- Next.js 16 and React 19 for component implementation

## 10. Constraints
- The AI must strictly adhere to the constitution and refuse questions outside the approved scope
- Chat history must reset on page refresh (no persistent storage)
- The widget must maintain the Cyberpunk/Neon Glass design aesthetic
- Responses must be pulled exclusively from lib/ai-data.ts