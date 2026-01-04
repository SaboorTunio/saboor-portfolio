# RAG Chatbot Research Document

## Decision: PORTFOLIO_CONTEXT Content Structure
- **Rationale**: The PORTFOLIO_CONTEXT needs to contain comprehensive information about Abdul Saboor Tunio to serve as the knowledge base for the AI
- **Content**: Personal information, education details, project descriptions, skills, and other relevant portfolio information
- **Format**: Structured text that can be used as a system message for the AI model
- **Alternatives considered**: JSON format vs. plain text vs. markdown - plain text was chosen for simplicity and direct use as a system message

## Decision: OpenRouter API Configuration
- **Rationale**: OpenRouter provides access to various AI models with competitive pricing and good performance
- **Implementation**: Use environment variables for API key and model selection
- **Model choice**: Initially use a model suitable for question-answering based on context
- **Alternatives considered**: Direct OpenAI API vs. OpenRouter vs. other providers - OpenRouter was chosen as specified in requirements

## Decision: Neon Orb Widget Design
- **Rationale**: The widget needs to be visually appealing while following the Cyberpunk/Neon aesthetic
- **Design**: Circular floating button with neon glow effect, subtle pulsing animation to attract attention
- **Position**: Bottom-right corner with appropriate z-index to stay above other content
- **Alternatives considered**: Different shapes (rectangle, rounded rectangle) - circle chosen for orb metaphor

## Decision: Streaming Response Implementation
- **Rationale**: To create a more realistic chat experience, responses should appear to be typed in real-time
- **Implementation**: Use fetch with streaming capabilities and implement a typewriter effect in the UI
- **Speed**: Simulate human typing speed (approximately 10-15 characters per second)
- **Alternatives considered**: Immediate response vs. streaming - streaming chosen for better UX as specified

## Decision: Rate Limiting and Cost Management
- **Rationale**: To prevent excessive API usage and associated costs
- **Implementation**: Client-side measures to limit request frequency, potentially server-side rate limiting later
- **Approach**: Implement basic debouncing and potential user session tracking
- **Alternatives considered**: No limits vs. strict limits vs. basic measures - basic measures chosen as balance

## Additional Considerations
- Error handling for API failures
- Loading states during API requests
- Accessibility considerations for the chat interface
- Mobile responsiveness for the chat widget