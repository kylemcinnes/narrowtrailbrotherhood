# Narrow Trail Brotherhood

> "Enter through the narrow gate. For wide is the gate and broad is the road that leads to destruction, and many enter through it. But small is the gate and narrow the road that leads to life, and only a few find it." - Matthew 7:13-14

A production-ready marketing website for Narrow Trail Brotherhood, a Christian men's fellowship and discipleship community based near Mississauga. This site serves as a digital gateway for men seeking real brotherhood, authentic discipleship, and encounter with God through the outdoors.

## Purpose

This project exists to glorify God by connecting men with a community that:
- Calls men into real brotherhood and discipleship
- Uses the outdoors as a tool for building trust and opening Scripture
- Welcomes both men of faith and those who are faith curious
- Points men back to their local churches and families

> "As iron sharpens iron, so one person sharpens another." - Proverbs 27:17

## Technology Stack

- **Next.js 14** - React framework with App Router (static export)
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Formspree** - Form submission service for contact form

## Project Structure

```
narrowtrailbrotherhood/
├── app/
│   ├── globals.css                # Global Tailwind styles
│   ├── layout.tsx                 # Root layout with metadata
│   └── page.tsx                   # Main landing page
├── components/
│   ├── AboutSection.tsx           # Our Mission section
│   ├── BeliefsSection.tsx         # What We Believe section
│   ├── ContactSection.tsx         # Contact form (client component)
│   ├── FaqSection.tsx             # Frequently Asked Questions
│   ├── Footer.tsx                 # Site footer
│   ├── Hero.tsx                   # Hero section with CTA
│   ├── LandownersSection.tsx      # Information for landowners
│   ├── Navbar.tsx                 # Sticky navigation (client component)
│   ├── OutdoorsSection.tsx        # The Outdoors and God's Provision
│   ├── ProcessSection.tsx         # The Path - three phase process
│   ├── SafetySection.tsx          # Safety and Responsibility
│   ├── Section.tsx                # Reusable section wrapper
│   └── WhoSection.tsx             # Who It Is For section
├── package.json                   # Dependencies and scripts
├── tailwind.config.ts             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
└── next.config.js                 # Next.js configuration
```

## Environment Variables

### For Local Development

Create a `.env.local` file in the root directory:

```env
# Formspree Form ID (get this from formspree.io after creating a form)
NEXT_PUBLIC_FORMSPREE_ID=your-formspree-form-id
```

### For Cloudflare Pages

Add the environment variable in your Cloudflare Pages dashboard:
- Variable name: `NEXT_PUBLIC_FORMSPREE_ID`
- Value: Your Formspree form ID

### Setting Up Formspree

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy your form ID (it will look like `xvgkqyzw` or similar)
4. Set the form's email recipient to `kylesmcinnes@gmail.com`
5. Add the form ID to your environment variables

The free tier includes 50 submissions per month, which should be sufficient for most use cases.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git (for version control)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd narrowtrailbrotherhood
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env.local` file with your Formspree form ID (see Environment Variables above)

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This will create a static export in the `out/` directory that can be hosted on any static hosting service (Cloudflare Pages, Netlify, etc.).

**Note:** This is a static export, so API routes are not available. The contact form uses Formspree for form submissions.

## Deployment to Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Set the build configuration:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node version**: 18 or higher
3. Add environment variable:
   - **Variable name**: `NEXT_PUBLIC_FORMSPREE_ID`
   - **Value**: Your Formspree form ID
4. Deploy! Cloudflare Pages will automatically build and deploy on every push to your main branch.

## Features

- **Single Page Design**: All content on one scrollable page with smooth navigation
- **Responsive Layout**: Optimized for mobile, tablet, and desktop
- **Contact Form**: Functional form submission via Formspree
- **Static Export**: Fully static site that can be hosted anywhere
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Modern Design**: Clean, masculine, reverent aesthetic with nature imagery
- **TypeScript**: Full type safety throughout the codebase

## Design Philosophy

The design reflects the ministry's values:
- **Masculine**: Strong, grounded, authentic
- **Outdoors**: Nature imagery, earthy colors, wilderness themes
- **Reverent**: Clean, uncluttered, respectful of the sacred
- **Welcoming**: Accessible to both believers and faith curious men

Color palette emphasizes:
- Deep greens (emerald) - nature, growth, life
- Earthy browns (stone) - grounded, natural
- Dark charcoal (zinc/slate) - strength, depth
- Off white - clarity, purity

## Scripture Foundation

This project is built on the truth that:

> "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do." - Ephesians 2:10

> "Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up. But pity anyone who falls and has no one to help them up." - Ecclesiastes 4:9-10

> "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" - 2 Corinthians 5:17

## Contributing

This is a ministry project. All contributions should:
- Honor God and serve the mission
- Maintain biblical fidelity in content
- Preserve the welcoming, Christ-centered tone
- Follow existing code style and patterns

## License

This project is created for the ministry of Narrow Trail Brotherhood. All work is done for the glory of God.

## Support

For questions or issues, contact: kylesmcinnes@gmail.com

---

> "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters." - Colossians 3:23

*May this digital tool serve to bring men into real fellowship, deeper discipleship, and closer relationship with Jesus Christ.*

