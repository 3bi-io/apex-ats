import { GoogleGenerativeAI } from '@google/generative-ai';

interface ParsedResume {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  skills: string[];
  experience: any[];
  education: any[];
  summary: string;
}

export async function parseResumeWithAI(resumeText: string): Promise<ParsedResume | null> {
  try {
    const apiKey = process.env.GOOGLE_AI_API_KEY;
    if (!apiKey) {
      console.error('Google AI API key not configured');
      return null;
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `
Analyze the following resume and extract structured information.
Return ONLY a valid JSON object with this exact structure:
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string",
  "location": "string",
  "skills": ["skill1", "skill2"],
  "experience": [
    {
      "title": "string",
      "company": "string",
      "duration": "string",
      "description": "string"
    }
  ],
  "education": [
    {
      "degree": "string",
      "institution": "string",
      "year": "string"
    }
  ],
  "summary": "string"
}

Resume Text:
${resumeText}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Extract JSON from response (handle markdown code blocks)
    const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/) || text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No JSON found in response');
    }
    
    const jsonText = jsonMatch[1] || jsonMatch[0];
    const parsed: ParsedResume = JSON.parse(jsonText);
    
    return parsed;
  } catch (error) {
    console.error('Error parsing resume with AI:', error);
    return null;
  }
}

export async function matchCandidateToJob(
  candidateSkills: string[],
  candidateExperience: any[],
  jobDescription: string
): Promise<{ score: number; reasoning: string } | null> {
  try {
    const apiKey = process.env.GOOGLE_AI_API_KEY;
    if (!apiKey) {
      console.error('Google AI API key not configured');
      return null;
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `
Analyze how well this candidate matches the job description.
Provide a match score from 0-100 and reasoning.

Candidate Skills: ${candidateSkills.join(', ')}
Candidate Experience: ${JSON.stringify(candidateExperience)}

Job Description:
${jobDescription}

Return ONLY a valid JSON object:
{
  "score": 85,
  "reasoning": "Detailed explanation of the match"
}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/) || text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No JSON found in response');
    }
    
    const jsonText = jsonMatch[1] || jsonMatch[0];
    const parsed = JSON.parse(jsonText);
    
    return parsed;
  } catch (error) {
    console.error('Error matching candidate to job:', error);
    return null;
  }
}
