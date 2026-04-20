🧩 Project Overview
This project demonstrates end-to-end testing using Playwright on a real production-like one-page application.

Focus:
- UI validation
- Navigation flows
- External integration (Formspree)
- Cross-browser consistency

⚙️ Tech Stack
- Playwright (E2E)
- TypeScript
- GitHub Actions (CI)

🧪 Test Coverage
- Page load validation
- Title assertion
- LinkedIn navigation (new tab handling)
- Cross-browser execution (Chromium, Firefox, WebKit)

🔌 API Strategy
The project combines:
- Real external integration (Formspree)
- Mocked API responses (Playwright route interception)

This allows:
- Deterministic testing
- Isolation of UI logic
- Simulation of edge cases

🚀 Run Locally
```bash
npm install
npx playwright test
```

🧠 QA Philosophy
This project focuses on realistic QA practices:


- Testing user behavior, not just elements
- Avoiding brittle selectors
- Combining real and mocked environments
- Prioritizing reliability over coverage
