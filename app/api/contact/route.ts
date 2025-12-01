import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  description?: string
  journey?: string
  interests?: string[]
  message?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Validate that at least one of journey or message is provided
    if (!body.journey && !body.message) {
      return NextResponse.json(
        { error: 'Please provide either a faith journey description or a message' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Get SMTP configuration from environment variables
    const smtpHost = process.env.SMTP_HOST
    const smtpPort = process.env.SMTP_PORT
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const contactToEmail = process.env.CONTACT_TO_EMAIL || 'kylesmcinnes@gmail.com'

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      console.error('Missing SMTP configuration')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: parseInt(smtpPort, 10) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    // Build email body
    let emailBody = `New Narrow Trail Brotherhood inquiry from ${body.name}\n\n`
    emailBody += `Name: ${body.name}\n`
    emailBody += `Email: ${body.email}\n\n`

    if (body.description) {
      emailBody += `Description: ${body.description}\n\n`
    }

    if (body.journey) {
      emailBody += `Faith Journey:\n${body.journey}\n\n`
    }

    if (body.interests && body.interests.length > 0) {
      emailBody += `Interests:\n${body.interests.join(', ')}\n\n`
    }

    if (body.message) {
      emailBody += `Message:\n${body.message}\n\n`
    }

    // Send email
    await transporter.sendMail({
      from: smtpUser,
      to: contactToEmail,
      replyTo: body.email,
      subject: `New Narrow Trail Brotherhood inquiry from ${body.name}`,
      text: emailBody,
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}

