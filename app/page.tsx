export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Apex ATS
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Best-in-Class AI-Native Applicant Tracking System
        </p>
        <div className="space-y-2 text-left max-w-2xl">
          <div className="p-4 bg-green-50 border border-green-200 rounded">
            <h2 className="font-semibold text-green-800">✓ Production Deployment Active</h2>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded">
            <h3 className="font-semibold mb-2">Core Features Designed:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Candidate Operating System with AI parsing</li>
              <li>Intelligent semantic job matching</li>
              <li>Omnichannel communications (Voice, SMS, Email)</li>
              <li>DOT compliance workflows (MVR, PSP, CDLIS)</li>
              <li>Workflow automation with AI</li>
              <li>Analytics & forecasting</li>
            </ul>
          </div>
          <div className="p-4 bg-purple-50 border border-purple-200 rounded">
            <h3 className="font-semibold mb-2">Tech Stack:</h3>
            <p className="text-sm">Next.js 14 • TypeScript • Tailwind • Prisma • Supabase • OpenAI • Anthropic • Twilio</p>
          </div>
        </div>
      </div>
    </main>
  );
}
