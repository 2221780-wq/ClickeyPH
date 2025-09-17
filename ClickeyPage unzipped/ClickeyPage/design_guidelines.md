# Design Guidelines: MPIN Authentication Web Application

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern banking and financial service applications like mobile banking apps and secure authentication systems. The design prioritizes trust, security, and ease of use while maintaining the clean, professional aesthetic shown in the PDF.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Light mode: Clean whites (#ffffff) with subtle blue-gray accents (210 20% 98%)
- Dark mode: Deep navy backgrounds (220 30% 8%) with lighter blue-gray text (210 15% 85%)
- Accent: Professional blue (210 100% 50%) for CTAs and active states
- Success: Soft green (140 50% 45%) for confirmations
- Neutral: Light grays (220 10% 95%) for borders and subtle backgrounds

### B. Typography
- Primary font: Inter or similar clean sans-serif via Google Fonts CDN
- Headings: Semi-bold (600) for page titles and section headers
- Body text: Regular (400) with good readability contrast
- MPIN input: Monospace font for secure, consistent digit display
- Hierarchy: Large headings for page titles, medium for sections, standard for body content

### C. Layout System
**Spacing System**: Tailwind units of 2, 4, 8, and 16 (p-2, m-4, h-8, gap-16)
- Consistent 8px grid system throughout
- Generous whitespace around form elements
- Centered layouts for authentication flows
- Card-based design with subtle shadows and rounded corners (rounded-lg)

### D. Component Library

**Authentication Components:**
- MPIN input: 4 separate input fields with clear focus states and masking
- Clean login form with minimal distractions
- Success/error states with subtle animations

**Navigation Elements:**
- Top navigation bar with profile image (clickable for page 2 access)
- Clean button styles matching the professional aesthetic
- Breadcrumb navigation for context

**Dashboard Components:**
- Service cards/buttons for PNP, Hospitals, BFP with clear iconography
- Welcome message area with user greeting
- Grid layout for service organization

**Profile/Information Page:**
- Clean form layouts with proper field grouping
- Input fields with consistent styling and focus states
- Save/update buttons with clear feedback

**Security Features:**
- MPIN masking with option to show/hide
- Session timeout indicators
- Secure logout functionality

### E. Interaction Design
- Minimal animations focused on user feedback (button states, form validation)
- Smooth page transitions between login → home → profile flow
- Clear loading states for authentication processes
- Tactile feedback for MPIN entry with subtle highlights

## Images
**No large hero images required** - this is a utility-focused application prioritizing functionality and security. Any imagery should be:
- Small profile placeholder icons
- Service category icons (medical, police, fire - simple line icons)
- Security-related iconography (lock icons, checkmarks)
- All images should be clean, minimal, and professional

## Key Design Principles
1. **Trust and Security**: Clean, uncluttered design that inspires confidence
2. **Accessibility**: High contrast ratios and clear interactive elements
3. **Mobile-First**: Responsive design optimized for mobile MPIN entry
4. **Consistency**: Uniform spacing, typography, and component styling throughout
5. **User Flow Clarity**: Clear navigation path from login → home → profile