# Apex ATS - Best-in-Class Applicant Tracking System

## Production-Ready AI-Native Recruiting Operating System

Apex ATS is a next-generation Applicant Tracking System built specifically for regulated and high-volume hiring, with deep specialization in trucking and transportation recruiting.

## Architecture Overview

### Core Stack
- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS + Radix UI
- **Backend**: Next.js API Routes + Server Actions
- **Database**: PostgreSQL (via Supabase)
- **ORM**: Prisma
- **Authentication**: NextAuth.js v5
- **Deployment**: Vercel
- **File Storage**: Supabase Storage

### AI Layer (Multi-Model Routing)
- **OpenAI**: GPT-4 for reasoning, matching, and copilot
- **Anthropic Claude**: Document analysis and compliance review
- **Google Gemini**: Multimodal document extraction
- **AI SDK**: Vercel AI SDK for unified interface

### Integrations
- **Communications**: Twilio (Voice, SMS, Video)
- **Calendar**: Google Calendar / Outlook
- **Background Checks**: Checkr
- **Compliance**: MVR, PSP, CDLIS, Clearinghouse APIs
- **Email**: SMTP / SendGrid
- **Analytics**: Custom BI dashboard

## Production Release Status

✅ Core architecture designed
✅ Dependencies configured
✅ Environment structure defined
✅ Vercel deployment initiated

🚧 **In Progress**:
- Database schema creation
- Frontend components
- API routes
- AI services integration
- Authentication flow

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database (or Supabase account)
- API keys for: OpenAI, Anthropic, Google AI, Twilio

### Installation

```bash
# Clone repository
git clone https://github.com/3bi-io/apex-ats.git
cd apex-ats

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Configure .env with your credentials

# Generate Prisma client
npm run db:generate

# Run migrations
npm run db:migrate

# Seed database
npm run db:seed

# Start development server
npm run dev
```

## Key Features

### 1. Candidate Operating System
- Unified candidate graph with complete interaction history
- AI-powered resume parsing and entity extraction
- Duplicate detection and identity resolution
- Relationship mapping (referrals, household, previous employers)

### 2. Intelligent Matching Engine
- Semantic job-candidate matching
- Multi-factor scoring (experience, location, qualifications, availability)
- Explainable AI recommendations
- Reverse matching (show best jobs for candidate)

### 3. Omnichannel Communications
- Native calling with live transcription
- AI conversation summaries and coaching
- SMS/Email sequences with journey logic
- Voice AI agents for screening and reminders

### 4. Compliance & Verification
- DOT-specific workflows (MVR, PSP, CDLIS, Clearinghouse)
- VOE (Verification of Employment) orchestration
- Document classification and validation
- Complete audit trail

### 5. Workflow Automation
- Event-driven architecture
- Visual workflow builder
- Human-in-the-loop approval gates
- SLA tracking and escalations

### 6. Analytics & Intelligence
- Funnel analytics by source, recruiter, campaign
- Pipeline forecasting
- Recruiter performance dashboards
- Next-best-action recommendations

## Project Structure

```
apex-ats/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Main app routes
│   │   ├── candidates/
│   │   ├── jobs/
│   │   ├── pipelines/
│   │   ├── communications/
│   │   ├── compliance/
│   │   ├── automations/
│   │   └── analytics/
│   ├── api/               # API routes
│   │   ├── candidates/
│   │   ├── jobs/
│   │   ├── ai/
│   │   ├── communications/
│   │   └── webhooks/
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # Base UI components (Radix)
│   ├── candidates/
│   ├── jobs/
│   ├── communications/
│   └── shared/
├── lib/                   # Core libraries
│   ├── ai/               # AI service clients
│   ├── db/               # Database utilities
│   ├── integrations/     # Third-party integrations
│   └── utils/
├── prisma/               # Database schema and migrations
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
├── public/               # Static assets
└── types/                # TypeScript definitions
```

## Database Schema (Core Entities)

### Candidates
- Profile (identity, contact, demographics)
- Experience & employment history
- Licenses & endorsements
- Documents & verification status
- Interaction timeline
- Match scores

### Jobs
- Listing details
- Requirements (required vs preferred)
- Geo constraints
- Pay packages
- Application funnel stages

### Communications
- Calls, SMS, emails
- Transcripts & recordings
- AI summaries
- Campaign sequences

### Compliance
- VOE records
- MVR / PSP / CDLIS / Clearinghouse
- Background checks
- Drug/alcohol screens
- Audit logs

### Workflows
- Automation rules
- Workflow runs
- Approval chains
- SLA tracking

## Deployment

### Vercel (Frontend + API)
Automatically deploys from `main` branch.

### Supabase (Database + Storage)
1. Create Supabase project
2. Copy connection string to `DATABASE_URL`
3. Run migrations: `npm run db:migrate`

### Environment Variables
See `.env.example` for complete list.

Critical variables:
- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `OPENAI_API_KEY`
- `TWILIO_ACCOUNT_SID`
- `NEXT_PUBLIC_SUPABASE_URL`

## Security

- Row-level security (RLS) via Supabase
- Role-based access control (RBAC)
- API rate limiting
- Data encryption at rest and in transit
- PII vaulting for sensitive data
- SOC 2 Type II compliance ready

## Development Roadmap

### Phase 1: MVP (Current)
- [ ] Database schema
- [ ] Authentication
- [ ] Candidate management
- [ ] Job management
- [ ] Basic matching
- [ ] Communications hub
- [ ] Compliance workflows

### Phase 2: Intelligence
- [ ] AI copilot everywhere
- [ ] Voice AI agents
- [ ] Advanced forecasting
- [ ] Source ROI optimizer
- [ ] Recruiter coaching

### Phase 3: Platform
- [ ] Client portal
- [ ] Candidate self-service
- [ ] Marketplace / app ecosystem
- [ ] White-labeling
- [ ] Multi-tenant controls

## Contributing

This is a production system under active development. Contact the maintainers for contribution guidelines.

## License

Proprietary - All rights reserved

## Support

For deployment assistance or additional resources:
- Technical lead: See repository maintainers
- Documentation: [In progress]
- Issue tracker: GitHub Issues

---

**Built with ❤️ for the future of recruiting**
