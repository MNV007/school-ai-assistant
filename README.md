# SchoolAI Assistant

An early-stage, open-source prototype exploring practical AI support for school workflows.

## What this prototype includes

- A teacher-facing lesson/activity idea generator (demo mode, no AI API connected).
- Draft templates for parent announcements.
- A simple classroom activity planner.
- A proposed integration boundary for future school systems and classroom robots.

**Status:** Prototype / educational demonstration. This is not a production school ERP and does not connect to real student records, parent accounts, or physical robots.

## Run locally

No installation or build tools are needed.

1. Download or clone this repository.
2. Open `index.html` in a modern browser.

## Run tests

With Node.js 18 or newer, run `node --test` from the project folder. No packages are needed.

## Roadmap

- [ ] Add a pluggable AI provider interface (keep API keys on a backend, never in browser code).
- [x] Add tests for message templates and input validation.
- [ ] Design role-based access for teachers and administrators.
- [ ] Add privacy-by-design data handling and retention rules.
- [ ] Define a safe, permissioned adapter interface for classroom robots.
- [ ] Explore optional integrations with existing school management systems.

## Privacy and safety

- Do not enter children's names, contact details, health information, photos, or other personal data.
- This demo stores no data on a server and does not send data to an AI provider.
- Any future deployment involving children must include appropriate consent, access controls, security review, and applicable legal compliance.
- Robot control is not implemented. Any future robot integration should require explicit authorization, safety limits, and adult supervision.

## Contributing

Issues, suggestions, documentation improvements, and pull requests are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT. See [LICENSE](LICENSE).
