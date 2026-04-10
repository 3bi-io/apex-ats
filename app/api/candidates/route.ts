import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET all candidates
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const search = searchParams.get('search');

    const where: any = {};
    
    if (status && status !== 'all') {
      where.status = status;
    }
    
    if (search) {
      where.OR = [
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
      ];
    }

    const candidates = await prisma.candidate.findMany({
      where,
      include: {
        applications: {
          include: {
            job: true,
          },
        },
        documents: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(candidates);
  } catch (error) {
    console.error('Error fetching candidates:', error);
    return NextResponse.json(
      { error: 'Failed to fetch candidates' },
      { status: 500 }
    );
  }
}

// POST create new candidate
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const candidate = await prisma.candidate.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        location: body.location,
        source: body.source || 'Direct',
        status: body.status || 'New',
        resumeUrl: body.resumeUrl,
        linkedinUrl: body.linkedinUrl,
        portfolioUrl: body.portfolioUrl,
        skills: body.skills || [],
        experience: body.experience,
        education: body.education,
      },
    });

    return NextResponse.json(candidate, { status: 201 });
  } catch (error) {
    console.error('Error creating candidate:', error);
    return NextResponse.json(
      { error: 'Failed to create candidate' },
      { status: 500 }
    );
  }
}
