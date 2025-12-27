# Data Model: Neon Glass AI Portfolio

**Feature**: 1-neon-glass-portfolio
**Date**: 2025-12-28

## Entity: Portfolio Visitor
- **Description**: A person browsing the portfolio website to assess the developer's skills and experience
- **Attributes**: None (represents user interaction, not stored data)

## Entity: Contact Form Submission
- **Description**: Data containing Name, Email, and Message from the contact form that may be processed or stored
- **Attributes**:
  - id: string (unique identifier)
  - name: string (visitor's name)
  - email: string (visitor's email address)
  - message: string (visitor's message)
  - timestamp: Date (when the submission was made)
  - status: "pending" | "sent" | "failed" (status of email delivery)

## Entity: Developer Profile
- **Description**: Information about the developer including skills, education, certifications, and current focus areas
- **Attributes**:
  - name: string (developer's name)
  - title: string (AI Engineer & Full Stack Developer)
  - headline: string ("Building Intelligent Systems with Agentic AI")
  - subhead: string ("Full Stack Developer bridging the gap between Next.js and Autonomous Agents")

## Entity: Education Entry
- **Description**: An educational program or course in the developer's background
- **Attributes**:
  - id: number (unique identifier)
  - program: string (name of the program)
  - duration: string (time period of the program)
  - status: "completed" | "in-progress" | "planned"
  - items: EducationItem[] (list of specific courses/quarters)

## Entity: Education Item
- **Description**: A specific course or quarter within an educational program
- **Attributes**:
  - quarter: string (e.g., "Q1", "Q2")
  - subject: string (name of the subject/course)
  - status: string (e.g., "Completed")

## Entity: Skill
- **Description**: A specific skill in the developer's skill matrix
- **Attributes**:
  - name: string (name of the skill)
  - level: number (proficiency percentage, 0-100)
  - category: "frontend" | "backend" | "ai" (classification of the skill)

## Entity: Certification
- **Description**: A professional certification displayed on the portfolio
- **Attributes**:
  - id: number (unique identifier)
  - title: string (name of the certification)
  - brandColor: string (hex color for brand-specific styling)

## Entity: Current Focus Item
- **Description**: An item in the current focus section of the portfolio
- **Attributes**:
  - title: string (name of the focus area)

## Entity: Social Link
- **Description**: A link to the developer's social media or contact information
- **Attributes**:
  - id: number (unique identifier)
  - name: string (platform name, e.g., "GitHub")
  - url: string (URL to the profile)
  - icon: string (icon identifier for Lucide React)

## Relationships
- Developer Profile has many Education Entries
- Developer Profile has many Skills
- Developer Profile has many Certifications
- Developer Profile has many Current Focus Items
- Developer Profile has many Social Links
- Contact Form Submission is created by Portfolio Visitor