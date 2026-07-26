import { useState, useEffect, useRef } from 'react'
import logoImg from '@/imports/image.png'
import familyCouple from '@/imports/image-2.png'
import portrait3 from '@/imports/image-3.png'
import portrait4 from '@/imports/image-4.png'
import familyGroup from '@/imports/image-5.png'
import portrait6 from '@/imports/image-6.png'

/* ─── Color tokens ─── */
const GOLD = '#C49A3C'
const CHARCOAL = '#111111'
const BURGUNDY = '#8B1F2A'
const CREAM = '#FAF6F0'
const CREAM2 = '#F0EAE0'
const LIGHT_GOLD = '#EDD98A'

/* ─── Nav ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const links = ['Home', 'About', 'Journey', 'Leadership', 'Media', 'Contact']

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? '10px 40px' : '16px 40px',
          background: scrolled ? `${CHARCOAL}F0` : `${CHARCOAL}CC`,
          backdropFilter: 'blur(14px)',
          transition: 'all 0.4s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}
      >
        {/* Logo — always white so it's visible at top and after scroll */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img
            src={logoImg}
            alt="Bimpe Benson"
            style={{
              height: '72px',
              width: 'auto',
              filter: 'brightness(0) invert(1)',
            }}
          />
        </a>

        {/* Nav links — full row on desktop, hidden on mobile in favor of hamburger */}
        <div
          className="bb-nav-links"
          style={{
            display: 'flex',
            gap: '28px',
            alignItems: 'center',
            overflowX: 'auto',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#FAF6F0',
                textDecoration: 'none',
                fontWeight: 400,
                whiteSpace: 'nowrap',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = GOLD)}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#FAF6F0')}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              padding: '9px 22px',
              background: GOLD,
              color: CHARCOAL,
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              flexShrink: 0,
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.background = LIGHT_GOLD)}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = GOLD)}
          >
            Meet Bimpe
          </a>
        </div>

        {/* Hamburger toggle — mobile only */}
        <button
          className="bb-hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          style={{
            width: '44px',
            height: '44px',
            flexShrink: 0,
            background: 'transparent',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              borderRadius: '2px',
              background: '#FAF6F0',
              transition: 'transform 0.25s ease, opacity 0.25s ease',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              borderRadius: '2px',
              background: '#FAF6F0',
              transition: 'opacity 0.2s ease',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              borderRadius: '2px',
              background: '#FAF6F0',
              transition: 'transform 0.25s ease, opacity 0.25s ease',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="bb-mobile-menu"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99,
            background: CHARCOAL,
            paddingTop: '104px',
            flexDirection: 'column',
            alignItems: 'stretch',
            padding: '104px 40px 40px',
            overflowY: 'auto',
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '26px',
                color: '#FAF6F0',
                textDecoration: 'none',
                fontWeight: 400,
                padding: '16px 0',
                borderBottom: `1px solid rgba(250,246,240,0.1)`,
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: '32px',
              padding: '16px 28px',
              background: GOLD,
              color: CHARCOAL,
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Meet Bimpe
          </a>
        </div>
      )}
    </>
  )
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section
      id="home"
      className="bb-hero-grid"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Text side */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(80px,10vw,140px) clamp(32px,6vw,96px)',
          background: CHARCOAL,
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Decorative gold line */}
        <div style={{ width: '60px', height: '2px', background: GOLD, marginBottom: '32px' }} />

        <span
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: GOLD,
            marginBottom: '24px',
            fontWeight: 500,
          }}
        >
          Financial Executive · Entrepreneur · Leader
        </span>

        <h1
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(42px, 5.5vw, 72px)',
            lineHeight: 1.12,
            color: '#FAF6F0',
            marginBottom: '28px',
            fontWeight: 400,
          }}
        >
          Leading with
          <br />
          <em style={{ color: GOLD }}>Purpose.</em>
          <br />
          Building
          <br />
          Businesses.
          <br />
          <span style={{ fontSize: '0.7em', fontWeight: 300 }}>Empowering People.</span>
        </h1>

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '15px',
            lineHeight: 1.8,
            color: 'rgba(250,246,240,0.7)',
            marginBottom: '44px',
            maxWidth: '440px',
            fontWeight: 300,
          }}
        >
          A trailblazing Nigerian executive shaping global finance and technology — driven by faith, family, and an unwavering commitment to legacy.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a
            href="#contact"
            style={{
              padding: '16px 36px',
              border: `1px solid rgba(250,246,240,0.35)`,
              color: '#FAF6F0',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontWeight: 400,
              transition: 'all 0.25s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor = GOLD
              ;(e.currentTarget as HTMLElement).style.color = GOLD
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(250,246,240,0.35)'
              ;(e.currentTarget as HTMLElement).style.color = '#FAF6F0'
            }}
          >
            Meet Bimpe Benson
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '40px', marginTop: '60px', flexWrap: 'wrap' }}>
          {[
            { n: '20+', label: 'Years in Finance' },
            { n: '8+', label: 'Board Appointments' },
            { n: '500+', label: 'Mentees Impacted' },
          ].map(({ n, label }) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '32px',
                  color: GOLD,
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(250,246,240,0.5)',
                  marginTop: '6px',
                  fontWeight: 300,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Portrait side */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '60vh',
        }}
        className="bb-hero-img"
      >
        <img
          src={portrait6}
          alt="Bimpe Benson — Executive Portrait"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />
        {/* Subtle overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to right, ${CHARCOAL}30, transparent 50%)`,
          }}
        />
        {/* Bottom caption tag */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '32px',
            background: 'rgba(17,17,17,0.75)',
            backdropFilter: 'blur(8px)',
            padding: '12px 20px',
            borderLeft: `3px solid ${GOLD}`,
          }}
        >
          <div
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '16px',
              color: '#FAF6F0',
              fontStyle: 'italic',
            }}
          >
            Bimpe Benson
          </div>
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: GOLD,
              marginTop: '4px',
              fontWeight: 300,
            }}
          >
            Financial Executive · Entrepreneur
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Divider ─── */
function GoldDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'center', padding: '0 40px' }}>
      <div style={{ flex: 1, height: '1px', background: `linear-gradient(to right, transparent, ${GOLD}60)` }} />
      <div style={{ width: '6px', height: '6px', background: GOLD, transform: 'rotate(45deg)' }} />
      <div style={{ flex: 1, height: '1px', background: `linear-gradient(to left, transparent, ${GOLD}60)` }} />
    </div>
  )
}

/* ─── About ─── */
function ZigZagRow({
  imageLeft,
  image,
  imageAlt,
  eyebrow,
  heading,
  body,
  caption,
  bg = CREAM,
}: {
  imageLeft: boolean
  image: string
  imageAlt: string
  eyebrow: string
  heading: React.ReactNode
  body: React.ReactNode
  caption?: string
  bg?: string
}) {
  const imgCol = imageLeft ? 1 : 2
  const txtCol = imageLeft ? 2 : 1

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '520px',
        background: bg,
      }}
      className="bb-zigzag-row"
    >
      {/* Image */}
      <div
        style={{
          gridColumn: imgCol,
          gridRow: 1,
          position: 'relative',
          overflow: 'hidden',
        }}
        className="bb-zigzag-img"
      >
        <img
          src={image}
          alt={imageAlt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
        />
        {caption && (
          <div
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              background: 'rgba(17,17,17,0.8)',
              backdropFilter: 'blur(8px)',
              padding: '10px 16px',
              borderLeft: `2px solid ${GOLD}`,
            }}
          >
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, fontWeight: 300 }}>
              {caption}
            </span>
          </div>
        )}
      </div>

      {/* Text */}
      <div
        style={{
          gridColumn: txtCol,
          gridRow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(48px,6vw,96px) clamp(32px,5vw,80px)',
        }}
        className="bb-zigzag-txt"
      >
        <span
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: GOLD,
            fontWeight: 500,
            marginBottom: '20px',
            display: 'block',
          }}
        >
          {eyebrow}
        </span>
        <h3
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(26px,3vw,40px)',
            color: bg === CHARCOAL ? '#FAF6F0' : CHARCOAL,
            fontWeight: 400,
            fontStyle: 'italic',
            marginBottom: '24px',
            lineHeight: 1.25,
          }}
        >
          {heading}
        </h3>
        <div style={{ width: '40px', height: '2px', background: GOLD, marginBottom: '28px' }} />
        {body}
      </div>
    </div>
  )
}

function About() {
  const textStyle: React.CSSProperties = {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '15px',
    lineHeight: 1.9,
    color: '#555',
    fontWeight: 300,
    marginBottom: '16px',
  }

  return (
    <section id="about" style={{ background: CREAM }}>
      {/* Section label */}
      <div style={{ textAlign: 'center', padding: 'clamp(80px,10vw,120px) 24px 64px' }}>
        <span
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: GOLD,
            fontWeight: 500,
          }}
        >
          Her Story
        </span>
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(34px, 4vw, 56px)',
            color: CHARCOAL,
            fontWeight: 400,
            marginTop: '16px',
            fontStyle: 'italic',
          }}
        >
          About Bimpe
        </h2>
        <GoldDivider />
      </div>

      {/* Row 1: image left, text right */}
      <ZigZagRow
        imageLeft={true}
        image={portrait3}
        imageAlt="Bimpe Benson — executive portrait"
        eyebrow="Origins"
        heading="Roots that run deep"
        body={
          <>
            <p style={textStyle}>
              Born and raised in Ibadan, Nigeria, Bimpe was shaped by parents who understood that education and discipline were the most powerful gifts they could give. That foundation became the bedrock of a remarkable career spanning financial services, technology, real estate, and corporate governance.
            </p>
            <p style={textStyle}>
              Raised with one guiding belief — that excellence is not optional, it is the only standard worth keeping — she carried that conviction into every institution she entered.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '24px' }}>
              {['Finance', 'Technology', 'Real Estate'].map((tag) => (
                <span key={tag} style={{ padding: '7px 16px', border: `1px solid ${GOLD}50`, fontFamily: 'DM Sans, sans-serif', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: CHARCOAL, fontWeight: 400 }}>{tag}</span>
              ))}
            </div>
          </>
        }
      />

      {/* Row 2: text left, image right */}
      <ZigZagRow
        imageLeft={false}
        image={familyCouple}
        imageAlt="Bimpe and Ley Benson"
        eyebrow="Executive & Leader"
        heading={<>Building institutions,<br />shaping futures</>}
        caption="With husband, Ley Benson"
        bg={CREAM2}
        body={
          <>
            <p style={{ ...textStyle, color: '#555' }}>
              Today, Bimpe serves as a Financial Services Executive, Technology Entrepreneur, and Non-Executive Director across several leading institutions. She is a sought-after advisory board member and a passionate champion for women in leadership.
            </p>
            <p style={{ ...textStyle, color: '#555' }}>
              A dedicated advocate for financial inclusion across Africa, her career spans every layer of the financial ecosystem — from street-level fintech to the highest governance boards.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '24px' }}>
              {['Mentorship', 'Board Governance', 'Women in Leadership'].map((tag) => (
                <span key={tag} style={{ padding: '7px 16px', border: `1px solid ${GOLD}50`, fontFamily: 'DM Sans, sans-serif', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: CHARCOAL, fontWeight: 400 }}>{tag}</span>
              ))}
            </div>
          </>
        }
      />

      {/* Row 3: image left, text right */}
      <ZigZagRow
        imageLeft={true}
        image={familyGroup}
        imageAlt="Bimpe with family"
        eyebrow="Wife · Mother · Mentor"
        heading={<>Purpose beyond<br />the boardroom</>}
        body={
          <>
            <p style={textStyle}>
              Beyond the boardroom, she is a wife to Ley Benson, a devoted mother, and a mentor to hundreds of emerging leaders across Africa.
            </p>
            <p style={textStyle}>
              Her life is a testament that purpose-driven leadership and personal fulfilment are not in conflict — they are inseparable. She refuses to choose between ambition and love, between legacy and presence.
            </p>
            <blockquote
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '16px',
                lineHeight: 1.7,
                color: CHARCOAL,
                fontStyle: 'italic',
                borderLeft: `3px solid ${GOLD}`,
                paddingLeft: '20px',
                marginTop: '24px',
              }}
            >
              "Excellence is not optional — it is the only standard worth keeping."
            </blockquote>
          </>
        }
      />
    </section>
  )
}

/* ─── Journey / Timeline ─── */
const timelineItems = [
  {
    year: '1990s',
    title: 'Roots in Ibadan',
    desc: 'Grew up in a family that valued education, discipline, and excellence. Her parents instilled in her a hunger for knowledge and an uncompromising standard of achievement.',
    icon: '🌱',
  },
  {
    year: '2000',
    title: 'First Steps in Finance',
    desc: 'Launched her banking career, rapidly distinguishing herself through intellectual rigour and a rare ability to build trust across institutional hierarchies.',
    icon: '🏦',
  },
  {
    year: '2008',
    title: 'Rising Executive',
    desc: 'Rose to senior leadership in financial services, overseeing portfolios spanning retail banking, institutional investment, and credit operations.',
    icon: '📈',
  },
  {
    year: '2013',
    title: 'First Board Appointment',
    desc: 'Accepted her first Non-Executive Director role — stepping into the boardroom not just as an advisor, but as a strategic voice for governance and transformation.',
    icon: '⚖️',
  },
  {
    year: '2017',
    title: 'Technology Entrepreneur',
    desc: 'Co-founded a fintech venture aimed at democratising access to financial services for underserved communities across West Africa.',
    icon: '💡',
  },
  {
    year: '2020',
    title: 'Real Estate & Advisory',
    desc: 'Expanded her portfolio into real estate investment while serving on advisory boards of global institutions, championing financial inclusion and women in leadership.',
    icon: '🏛️',
  },
  {
    year: 'Present',
    title: 'Global Leader & Mentor',
    desc: 'Continues to lead, inspire, and build — serving on multiple boards, mentoring emerging leaders, and living her legacy at the intersection of purpose and excellence.',
    icon: '✦',
  },
]

function Journey() {
  const [active, setActive] = useState(0)

  return (
    <section id="journey" style={{ background: CHARCOAL, padding: 'clamp(80px,10vw,140px) 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <span
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: GOLD,
            fontWeight: 500,
          }}
        >
          The Path
        </span>
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(34px, 4vw, 56px)',
            color: '#FAF6F0',
            fontWeight: 400,
            marginTop: '16px',
            fontStyle: 'italic',
          }}
        >
          Career Journey
        </h2>
      </div>

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 clamp(24px,5vw,80px)',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '60px',
          alignItems: 'start',
        }}
        className="bb-journey-grid"
      >
        {/* Timeline nav */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {timelineItems.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px 20px',
                background: active === i ? `${GOLD}15` : 'transparent',
                border: 'none',
                borderLeft: `3px solid ${active === i ? GOLD : 'transparent'}`,
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.25s',
              }}
            >
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '13px', color: GOLD, fontWeight: 700, minWidth: '48px' }}>
                {item.year}
              </span>
              <span
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  color: active === i ? '#FAF6F0' : 'rgba(250,246,240,0.45)',
                  fontWeight: active === i ? 500 : 300,
                  transition: 'color 0.25s',
                }}
              >
                {item.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active content */}
        <div
          key={active}
          style={{
            padding: '48px',
            background: 'rgba(250,246,240,0.04)',
            borderTop: `1px solid ${GOLD}40`,
            animation: 'fadeIn 0.4s ease',
          }}
        >
          <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '52px', color: `${GOLD}50`, marginBottom: '8px' }}>
            {timelineItems[active].year}
          </div>
          <h3
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '28px',
              color: '#FAF6F0',
              fontWeight: 400,
              fontStyle: 'italic',
              marginBottom: '24px',
            }}
          >
            {timelineItems[active].title}
          </h3>
          <div style={{ width: '40px', height: '2px', background: GOLD, marginBottom: '28px' }} />
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              lineHeight: 1.9,
              color: 'rgba(250,246,240,0.7)',
              fontWeight: 300,
            }}
          >
            {timelineItems[active].desc}
          </p>

          {/* Navigation arrows */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '40px' }}>
            <button
              onClick={() => setActive(Math.max(0, active - 1))}
              disabled={active === 0}
              style={{
                width: '44px',
                height: '44px',
                border: `1px solid ${GOLD}60`,
                background: 'transparent',
                color: active === 0 ? `${GOLD}30` : GOLD,
                cursor: active === 0 ? 'default' : 'pointer',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
            >
              ←
            </button>
            <button
              onClick={() => setActive(Math.min(timelineItems.length - 1, active + 1))}
              disabled={active === timelineItems.length - 1}
              style={{
                width: '44px',
                height: '44px',
                border: `1px solid ${GOLD}60`,
                background: 'transparent',
                color: active === timelineItems.length - 1 ? `${GOLD}30` : GOLD,
                cursor: active === timelineItems.length - 1 ? 'default' : 'pointer',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
            >
              →
            </button>
            <span
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                color: 'rgba(250,246,240,0.4)',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '8px',
                letterSpacing: '0.1em',
              }}
            >
              {active + 1} / {timelineItems.length}
            </span>
          </div>
        </div>
      </div>

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }`}</style>
    </section>
  )
}

/* ─── Leadership Philosophy ─── */
const pillars = [
  {
    title: 'Integrity',
    desc: 'Every decision, every relationship, every deal — anchored in honesty and transparency. Integrity is not a policy; it is a way of being.',
    icon: '◈',
  },
  {
    title: 'Excellence',
    desc: 'The highest standard is the only standard. Raised in a family that rewarded discipline, Bimpe carries that ethos into every institution she touches.',
    icon: '✦',
  },
  {
    title: 'Service',
    desc: 'Leadership is stewardship. True authority is earned by putting people first — before profit, before prestige, before personal gain.',
    icon: '⟳',
  },
  {
    title: 'Innovation',
    desc: 'Change is not a threat — it is an invitation. Bimpe embraces technology and disruption as instruments of progress and inclusion.',
    icon: '◐',
  },
  {
    title: 'Financial Inclusion',
    desc: 'Access to capital is a human right. Bimpe fights to ensure that geography and gender are never barriers to financial empowerment.',
    icon: '⊕',
  },
  {
    title: 'Mentorship',
    desc: 'Success is incomplete if it is not shared. Bimpe invests deeply in the next generation — because every leader was once someone\'s mentee.',
    icon: '❧',
  },
]

/* Bento layout config: each card gets a gridColumn / gridRow span */
const bentoCells = [
  { col: 'span 2', row: 'span 1' }, // Integrity — wide
  { col: 'span 1', row: 'span 2' }, // Excellence — tall
  { col: 'span 1', row: 'span 1' }, // Service
  { col: 'span 1', row: 'span 1' }, // Innovation
  { col: 'span 1', row: 'span 1' }, // Financial Inclusion
  { col: 'span 2', row: 'span 1' }, // Mentorship — wide
]

function Leadership() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="leadership" style={{ background: CHARCOAL, padding: 'clamp(80px,10vw,140px) 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '72px' }}>
        <span
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: GOLD,
            fontWeight: 500,
          }}
        >
          What She Believes
        </span>
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(34px, 4vw, 56px)',
            color: '#FAF6F0',
            fontWeight: 400,
            marginTop: '16px',
            fontStyle: 'italic',
          }}
        >
          Leadership Philosophy
        </h2>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            color: 'rgba(250,246,240,0.45)',
            maxWidth: '520px',
            margin: '20px auto 0',
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          Six principles that define how Bimpe leads — in the boardroom, in business, and in life.
        </p>
      </div>

      {/* Bento grid */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(24px,5vw,80px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: '220px',
          gap: '10px',
        }}
        className="bb-bento-grid"
      >
        {pillars.map((p, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              gridColumn: bentoCells[i].col,
              gridRow: bentoCells[i].row,
              padding: '40px 36px',
              background: hovered === i ? `${GOLD}18` : 'rgba(250,246,240,0.04)',
              border: `1px solid ${hovered === i ? GOLD + '50' : 'rgba(250,246,240,0.08)'}`,
              transition: 'all 0.35s ease',
              cursor: 'default',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Large background number */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                right: '24px',
                fontFamily: 'Playfair Display, serif',
                fontSize: '80px',
                color: `${GOLD}10`,
                fontWeight: 700,
                lineHeight: 1,
                userSelect: 'none',
                transition: 'color 0.35s',
                color: hovered === i ? `${GOLD}22` : `${GOLD}10`,
              } as React.CSSProperties}
            >
              {String(i + 1).padStart(2, '0')}
            </div>

            <div
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '28px',
                color: GOLD,
                marginBottom: '14px',
                lineHeight: 1,
              }}
            >
              {p.icon}
            </div>
            <h3
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: bentoCells[i].col === 'span 2' ? '26px' : '20px',
                color: '#FAF6F0',
                fontWeight: 400,
                marginBottom: '12px',
              }}
            >
              {p.title}
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                lineHeight: 1.85,
                color: 'rgba(250,246,240,0.55)',
                fontWeight: 300,
                maxWidth: bentoCells[i].col === 'span 2' ? '600px' : '100%',
              }}
            >
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Board & Advisory ─── */
const boardRoles = [
  { org: 'First Heritage Bank', role: 'Non-Executive Director', sector: 'Banking & Finance' },
  { org: 'Lagos Business School', role: 'Advisory Board Member', sector: 'Education' },
  { org: 'African Development Finance', role: 'Board Director', sector: 'Development Finance' },
  { org: 'Women in Tech Africa', role: 'Co-Founder & Chair', sector: 'Technology' },
  { org: 'Heritage Real Estate Group', role: 'Strategic Advisor', sector: 'Real Estate' },
  { org: 'FinTech Africa Alliance', role: 'Advisory Board Member', sector: 'Fintech' },
  { org: 'Pan-African Investment Forum', role: 'Board Member', sector: 'Investment' },
  { org: 'National Financial Inclusion Council', role: 'Commissioner', sector: 'Policy' },
]

function BoardAdvisory() {
  return (
    <section style={{ background: CHARCOAL, padding: 'clamp(80px,10vw,140px) 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <span
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: GOLD,
            fontWeight: 500,
          }}
        >
          Governance
        </span>
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(34px, 4vw, 56px)',
            color: '#FAF6F0',
            fontWeight: 400,
            marginTop: '16px',
            fontStyle: 'italic',
          }}
        >
          Board &amp; Advisory Roles
        </h2>
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(24px,5vw,80px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px',
          background: `${GOLD}20`,
        }}
        className="bb-board-grid"
      >
        {boardRoles.map((b, i) => (
          <div
            key={i}
            style={{
              background: CHARCOAL,
              padding: '40px 28px',
              transition: 'background 0.25s',
              borderTop: `1px solid ${GOLD}20`,
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#1a1a1a')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = CHARCOAL)}
          >
            <div
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: GOLD,
                fontWeight: 500,
                marginBottom: '16px',
              }}
            >
              {b.sector}
            </div>
            <div
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '18px',
                color: '#FAF6F0',
                fontWeight: 400,
                marginBottom: '10px',
                lineHeight: 1.3,
              }}
            >
              {b.org}
            </div>
            <div
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                color: 'rgba(250,246,240,0.45)',
                fontWeight: 300,
                letterSpacing: '0.05em',
              }}
            >
              {b.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Speaking & Media ─── */
const mediaItems = [
  {
    type: 'Interview',
    title: '"Building Institutions That Outlast You"',
    outlet: 'Arise News TV',
    date: 'March 2024',
    desc: 'Bimpe unpacks what it means to build resilient financial institutions in volatile economies, and why leadership must always think generationally.',
    href: 'https://www.arise.tv/programmes/arise-morning-show/',
  },
  {
    type: 'Podcast',
    title: '"Women at the Top: The Unfiltered Truth"',
    outlet: 'The Africa Leaders Podcast',
    date: 'January 2024',
    desc: 'A candid conversation about the invisible barriers women face in corporate Africa — and the mindset shifts that dissolve them.',
    href: 'https://podcasts.apple.com/ng/podcast/the-africa-leaders-podcast/id1500450297',
  },
  {
    type: 'Article',
    title: '"Financial Inclusion Is Not Charity — It Is Strategy"',
    outlet: 'BusinessDay Nigeria',
    date: 'November 2023',
    desc: 'Why the next wave of African economic growth depends on extending financial access to the 60% currently left behind by the traditional banking system.',
    href: 'https://businessday.ng/opinion/article/financial-inclusion-is-not-charity-it-is-strategy/',
  },
  {
    type: 'Keynote',
    title: 'Opening Keynote — Africa Fintech Summit',
    outlet: 'Lagos, Nigeria',
    date: 'October 2023',
    desc: "Delivered the opening address to 1,200 delegates on harnessing technology to build Africa's financial future from the inside out.",
    href: 'https://africafintechsummit.com/speakers/',
  },
  {
    type: 'Interview',
    title: '"What Boards Get Wrong About Risk"',
    outlet: 'The Economist Africa Edition',
    date: 'August 2023',
    desc: 'A sharp analysis of how African boards can evolve their governance frameworks to match the speed of disruption facing every industry.',
    href: 'https://www.economist.com/middle-east-and-africa/',
  },
  {
    type: 'Podcast',
    title: '"Raising Leaders at Home and in the Boardroom"',
    outlet: 'HerCycle Podcast',
    date: 'June 2023',
    desc: "On the rare balancing act of motherhood, marriage, and executive leadership — and why Bimpe refuses to choose between any of them.",
    href: 'https://podcasts.apple.com/ng/podcast/hercycle/id1608002366',
  },
]

function Media() {
  return (
    <section id="media" style={{ background: CREAM, padding: 'clamp(80px,10vw,140px) 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <span
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: GOLD,
            fontWeight: 500,
          }}
        >
          Voice &amp; Presence
        </span>
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(34px, 4vw, 56px)',
            color: CHARCOAL,
            fontWeight: 400,
            marginTop: '16px',
            fontStyle: 'italic',
          }}
        >
          Speaking &amp; Media
        </h2>
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(24px,5vw,80px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}
        className="bb-media-grid"
      >
        {mediaItems.map((m, i) => (
          <a
            key={i}
            href={m.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#FFFFFF',
              padding: '36px',
              borderTop: `3px solid ${GOLD}`,
              transition: 'transform 0.25s, box-shadow 0.25s',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'block',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.transform = 'none'
              ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
              <span
                style={{
                  padding: '4px 12px',
                  background: `${GOLD}18`,
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: CHARCOAL,
                  fontWeight: 500,
                }}
              >
                {m.type}
              </span>
              <span
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  color: '#999',
                  fontWeight: 300,
                }}
              >
                {m.date}
              </span>
            </div>
            <h3
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '18px',
                color: CHARCOAL,
                fontWeight: 400,
                fontStyle: 'italic',
                marginBottom: '12px',
                lineHeight: 1.4,
              }}
            >
              {m.title}
            </h3>
            <div
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                color: GOLD,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 500,
                marginBottom: '16px',
              }}
            >
              {m.outlet}
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                lineHeight: 1.8,
                color: '#666',
                fontWeight: 300,
              }}
            >
              {m.desc}
            </p>
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '6px', color: GOLD }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500 }}>Read / Listen</span>
              <span style={{ fontSize: '13px' }}>→</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

/* ─── Charity & Impact ─── */
const charityItems = [
  {
    icon: '◈',
    title: 'Women in Finance Initiative',
    category: 'Financial Empowerment',
    desc: 'A scholarship and mentorship programme funding the university education of 50 young women from underserved communities annually, with guaranteed internship placements in leading financial institutions.',
    impact: '200+ Scholars Supported',
  },
  {
    icon: '⊕',
    title: 'Access for All — Fintech Inclusion Drive',
    category: 'Financial Inclusion',
    desc: "Co-founded this initiative to bring mobile banking and micro-credit tools to market traders and rural farmers across Nigeria's south-west corridor, removing the barriers of documentation and distance.",
    impact: '40,000+ People Reached',
  },
  {
    icon: '❧',
    title: 'The Emerging Leaders Foundation',
    category: 'Youth Development',
    desc: 'A non-profit Bimpe co-chairs that provides leadership training, career coaching, and seed funding to young entrepreneurs between the ages of 18 and 30 across West Africa.',
    impact: '500+ Mentees Impacted',
  },
  {
    icon: '✦',
    title: 'Board Diversity & Governance Project',
    category: 'Corporate Governance',
    desc: "Working with institutions across Africa to increase women's representation on corporate boards — through policy advocacy, peer networks, and a curated directory of board-ready women leaders.",
    impact: '8 Partner Institutions',
  },
  {
    icon: '◐',
    title: 'Ibadan Schools Literacy Campaign',
    category: 'Education & Community',
    desc: "A grassroots initiative returning to her hometown, equipping public primary schools in Ibadan with books, digital resources, and trained reading coaches — honouring the education her parents gave her.",
    impact: '12 Schools Equipped',
  },
  {
    icon: '⟳',
    title: 'She Leads Africa Partnership',
    category: 'Women in Leadership',
    desc: "An ongoing partnership championing African women in executive and entrepreneurial roles, through conferences, fellowships, and a mentorship matching platform that connects rising leaders with C-suite sponsors.",
    impact: 'Pan-African Reach',
  },
]

function Charity() {
  return (
    <section style={{ background: CREAM, padding: 'clamp(80px,10vw,140px) 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: GOLD, fontWeight: 500 }}>
          Giving Back
        </span>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(34px, 4vw, 56px)', color: CHARCOAL, fontWeight: 400, marginTop: '16px', fontStyle: 'italic' }}>
          Charity &amp; Impact
        </h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#666', maxWidth: '560px', margin: '20px auto 0', lineHeight: 1.8, fontWeight: 300 }}>
          Success measured not just by titles held, but by lives changed. These are the causes closest to Bimpe's heart.
        </p>
      </div>

      <div
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(24px,5vw,80px)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}
        className="bb-media-grid"
      >
        {charityItems.map((c, i) => (
          <div
            key={i}
            style={{ background: '#FFFFFF', padding: '40px 32px', borderBottom: `3px solid ${GOLD}`, position: 'relative', transition: 'box-shadow 0.25s, transform 0.25s' }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.07)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.transform = 'none'
              ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
            }}
          >
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', color: GOLD, marginBottom: '16px' }}>{c.icon}</div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: GOLD, fontWeight: 500, marginBottom: '12px' }}>
              {c.category}
            </div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: CHARCOAL, fontWeight: 400, marginBottom: '16px', lineHeight: 1.35 }}>
              {c.title}
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', lineHeight: 1.85, color: '#666', fontWeight: 300, marginBottom: '24px' }}>
              {c.desc}
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', background: `${GOLD}14`, borderLeft: `2px solid ${GOLD}` }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: CHARCOAL, fontWeight: 500, letterSpacing: '0.08em' }}>{c.impact}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Gallery ─── */
function Gallery() {
  // 3-col × 2-row grid: col1 tall | col2 top | col2 bottom wide (spans 2) | col3 tall
  const photos = [
    { src: portrait3,   alt: 'Bimpe Benson — dramatic portrait',   col: '1 / span 1', row: '1 / span 2' },
    { src: familyCouple,alt: 'Bimpe and Ley Benson',               col: '2 / span 1', row: '1 / span 1' },
    { src: portrait6,   alt: 'Bimpe Benson — editorial portrait',  col: '3 / span 1', row: '1 / span 2' },
    { src: familyGroup, alt: 'Bimpe with family',                  col: '2 / span 1', row: '2 / span 1' },
    { src: portrait4,   alt: 'Bimpe Benson — joyful portrait',     col: '4 / span 1', row: '1 / span 2' },
  ]

  return (
    <section style={{ background: CHARCOAL, padding: 'clamp(80px,10vw,140px) 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: GOLD,
            fontWeight: 500,
          }}
        >
          Portraits &amp; Moments
        </span>
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(34px, 4vw, 56px)',
            color: '#FAF6F0',
            fontWeight: 400,
            marginTop: '16px',
            fontStyle: 'italic',
          }}
        >
          Gallery
        </h2>
      </div>

      {/* Desktop grid */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(24px,5vw,60px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(2, 360px)',
          gap: '8px',
        }}
        className="bb-gallery-desktop"
      >
        {photos.map((p, i) => (
          <div
            key={i}
            style={{
              gridColumn: p.col,
              gridRow: p.row,
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img
              src={p.src}
              alt={p.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
                transition: 'transform 0.5s ease',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.transform = 'scale(1.04)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.transform = 'none')}
            />
          </div>
        ))}
      </div>

      {/* Mobile grid */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(24px,5vw,60px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}
        className="bb-gallery-mobile"
      >
        {[portrait6, portrait3, familyCouple, portrait4, familyGroup].map((src, i) => (
          <div key={i} style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
            <img
              src={src}
              alt={`Bimpe Benson photo ${i + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Testimonials ─── */
const testimonials = [
  {
    quote:
      "Bimpe doesn't just sit on boards — she transforms them. Her ability to cut through complexity and articulate what actually matters for long-term institutional health is unmatched. She is the kind of director every organisation needs but rarely finds.",
    name: 'Chukwuemeka Okafor',
    title: 'Group Managing Director, Pan-African Capital',
  },
  {
    quote:
      "I have worked with many executives across Africa's financial sector over three decades. Few have the combination of intellectual depth, emotional intelligence, and strategic courage that Bimpe brings to every room she enters.",
    name: 'Dr. Funmilayo Adeyemi',
    title: 'Professor of Finance, Lagos Business School',
  },
  {
    quote:
      "She called me three years ago when I was ready to quit. She didn't give me a motivational speech — she gave me a strategy, a network, and her personal time. That's not mentorship by title. That's mentorship by character.",
    name: 'Adaeze Nwosu',
    title: 'CEO, Crescendo Fintech',
  },
  {
    quote:
      "Bimpe sees what others miss and says what others won't. She has shaped the direction of our institution in ways that will be felt for the next twenty years. She leads with both fire and wisdom — a rare combination.",
    name: 'Ibrahim Al-Rashid',
    title: 'Chairman, Heritage Real Estate Group',
  },
]

function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section style={{ background: CREAM, padding: 'clamp(80px,10vw,140px) 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <span
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: GOLD,
            fontWeight: 500,
          }}
        >
          What They Say
        </span>
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(34px, 4vw, 56px)',
            color: CHARCOAL,
            fontWeight: 400,
            marginTop: '16px',
            fontStyle: 'italic',
          }}
        >
          Testimonials
        </h2>
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 clamp(24px,5vw,80px)' }}>
        {/* Quote */}
        <div
          key={active}
          style={{
            textAlign: 'center',
            animation: 'fadeIn 0.4s ease',
          }}
        >
          <div
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '80px',
              lineHeight: 0.6,
              color: GOLD,
              marginBottom: '32px',
              opacity: 0.4,
            }}
          >
            "
          </div>
          <p
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(18px,2vw,24px)',
              lineHeight: 1.75,
              color: CHARCOAL,
              fontStyle: 'italic',
              fontWeight: 400,
              marginBottom: '40px',
            }}
          >
            {testimonials[active].quote}
          </p>
          <div style={{ width: '40px', height: '1px', background: GOLD, margin: '0 auto 24px' }} />
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: CHARCOAL, fontWeight: 600 }}>
            {testimonials[active].name}
          </div>
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              color: '#999',
              fontWeight: 300,
              marginTop: '6px',
              letterSpacing: '0.05em',
            }}
          >
            {testimonials[active].title}
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '52px' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? '28px' : '8px',
                height: '8px',
                background: i === active ? GOLD : `${GOLD}40`,
                border: 'none',
                cursor: 'pointer',
                borderRadius: '4px',
                transition: 'all 0.3s',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '32px' }}>
          <button
            onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
            style={{
              width: '48px',
              height: '48px',
              border: `1px solid ${GOLD}50`,
              background: 'transparent',
              color: CHARCOAL,
              cursor: 'pointer',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = CHARCOAL
              ;(e.currentTarget as HTMLElement).style.color = '#FAF6F0'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = 'transparent'
              ;(e.currentTarget as HTMLElement).style.color = CHARCOAL
            }}
          >
            ←
          </button>
          <button
            onClick={() => setActive((active + 1) % testimonials.length)}
            style={{
              width: '48px',
              height: '48px',
              border: `1px solid ${GOLD}50`,
              background: 'transparent',
              color: CHARCOAL,
              cursor: 'pointer',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = CHARCOAL
              ;(e.currentTarget as HTMLElement).style.color = '#FAF6F0'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = 'transparent'
              ;(e.currentTarget as HTMLElement).style.color = CHARCOAL
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

/* ─── Contact ─── */
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    background: 'rgba(250,246,240,0.06)',
    border: `1px solid rgba(250,246,240,0.15)`,
    color: '#FAF6F0',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '14px',
    fontWeight: 300,
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  }

  return (
    <section id="contact" style={{ background: CHARCOAL, padding: 'clamp(80px,10vw,140px) 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <span
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: GOLD,
            fontWeight: 500,
          }}
        >
          Get in Touch
        </span>
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(34px, 4vw, 56px)',
            color: '#FAF6F0',
            fontWeight: 400,
            marginTop: '16px',
            fontStyle: 'italic',
          }}
        >
          Connect with Bimpe
        </h2>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '15px',
            color: 'rgba(250,246,240,0.5)',
            maxWidth: '480px',
            margin: '20px auto 0',
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          For speaking engagements, board advisory inquiries, media requests, or to share how Bimpe has impacted your journey.
        </p>
      </div>

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 clamp(24px,5vw,80px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1.6fr',
          gap: '80px',
          alignItems: 'start',
        }}
        className="bb-contact-grid"
      >
        {/* Contact info */}
        <div>
          <h3
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '24px',
              color: '#FAF6F0',
              fontWeight: 400,
              fontStyle: 'italic',
              marginBottom: '36px',
            }}
          >
            Let's start a conversation.
          </h3>

          {[
            { label: 'Email', value: 'hello@bimpebenson.com', href: 'mailto:hello@bimpebenson.com', icon: '✉' },
            { label: 'LinkedIn', value: 'linkedin.com/in/bimpebenson', href: '#', icon: 'in' },
            { label: 'WhatsApp', value: '+234 800 000 0000', href: 'https://wa.me/2348000000000', icon: '✆' },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                marginBottom: '28px',
                textDecoration: 'none',
                padding: '20px',
                border: `1px solid rgba(250,246,240,0.08)`,
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = `${GOLD}60`)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(250,246,240,0.08)')}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  border: `1px solid ${GOLD}50`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: GOLD,
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  flexShrink: 0,
                }}
              >
                {c.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: GOLD,
                    fontWeight: 500,
                    marginBottom: '4px',
                  }}
                >
                  {c.label}
                </div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'rgba(250,246,240,0.7)', fontWeight: 300 }}>
                  {c.value}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <div>
          {sent ? (
            <div
              style={{
                padding: '48px',
                textAlign: 'center',
                border: `1px solid ${GOLD}40`,
              }}
            >
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', color: GOLD, marginBottom: '16px' }}>✦</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#FAF6F0', fontStyle: 'italic', fontWeight: 400 }}>
                Message Received
              </h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'rgba(250,246,240,0.5)', marginTop: '12px', fontWeight: 300 }}>
                Bimpe's team will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="bb-form-row">
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '10px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: GOLD,
                      marginBottom: '8px',
                      fontWeight: 500,
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = GOLD)}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(250,246,240,0.15)')}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '10px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: GOLD,
                      marginBottom: '8px',
                      fontWeight: 500,
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = GOLD)}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(250,246,240,0.15)')}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: GOLD,
                    marginBottom: '8px',
                    fontWeight: 500,
                  }}
                >
                  Subject
                </label>
                <select
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  style={{ ...inputStyle, appearance: 'none' }}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = GOLD)}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(250,246,240,0.15)')}
                >
                  <option value="" disabled style={{ background: CHARCOAL }}>
                    Select a subject
                  </option>
                  {['Speaking Engagement', 'Board & Advisory', 'Media Request', 'Mentorship', 'General Inquiry'].map((s) => (
                    <option key={s} value={s} style={{ background: CHARCOAL }}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: GOLD,
                    marginBottom: '8px',
                    fontWeight: 500,
                  }}
                >
                  Message
                </label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell Bimpe about your inquiry..."
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = GOLD)}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(250,246,240,0.15)')}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '16px',
                  background: GOLD,
                  color: CHARCOAL,
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '12px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = LIGHT_GOLD)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = GOLD)}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer style={{ background: '#0A0A0A', padding: '60px 0 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(24px,5vw,80px)' }}>
        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '40px',
            marginBottom: '60px',
            paddingBottom: '60px',
            borderBottom: `1px solid rgba(250,246,240,0.07)`,
          }}
          className="bb-footer-grid"
        >
          {/* Brand */}
          <div>
            <img src={logoImg} alt="Bimpe Benson" style={{ height: '70px', filter: 'invert(1)', marginBottom: '20px' }} />
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                lineHeight: 1.8,
                color: 'rgba(250,246,240,0.4)',
                fontWeight: 300,
                maxWidth: '260px',
              }}
            >
              Financial Services Executive. Technology Entrepreneur. Non-Executive Director. Wife. Mother.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: GOLD,
                fontWeight: 500,
                marginBottom: '20px',
              }}
            >
              Explore
            </div>
            {['Home', 'About', 'Journey', 'Leadership', 'Media', 'Contact'].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{
                  display: 'block',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  color: 'rgba(250,246,240,0.4)',
                  textDecoration: 'none',
                  marginBottom: '10px',
                  fontWeight: 300,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#FAF6F0')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(250,246,240,0.4)')}
              >
                {l}
              </a>
            ))}
          </div>

          {/* Resources */}
          <div>
            <div
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: GOLD,
                fontWeight: 500,
                marginBottom: '20px',
              }}
            >
              Resources
            </div>
            {['Blog', 'Resources', 'Comparison', 'Glossary', 'Privacy Policy', 'Terms of Use'].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  display: 'block',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  color: 'rgba(250,246,240,0.4)',
                  textDecoration: 'none',
                  marginBottom: '10px',
                  fontWeight: 300,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#FAF6F0')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(250,246,240,0.4)')}
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(250,246,240,0.25)', fontWeight: 300 }}>
            © 2024 Bimpe Benson. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <div style={{ width: '4px', height: '4px', background: GOLD, borderRadius: '50%' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: GOLD, fontWeight: 300, letterSpacing: '0.1em' }}>
              Leading with Purpose
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─── AI Chat Assistant ─── */
const botResponses: Record<string, string> = {
  default:
    "Hello! I'm Bimpe's digital assistant. I can help you learn about her work in finance, technology, speaking engagements, or board advisory roles. What would you like to know?",
  speaking:
    "Bimpe is available for keynote addresses, panel discussions, and corporate workshops on leadership, financial inclusion, and women in executive roles. Please use the contact form to submit a booking request.",
  board:
    "Bimpe currently serves on boards in banking, technology, real estate, and development finance. For board and advisory inquiries, please reach out via the contact form.",
  mentorship:
    "Bimpe is deeply committed to mentoring emerging leaders. She has impacted 500+ mentees across Africa. Reach out via contact to learn more about mentorship opportunities.",
  finance:
    "With 20+ years in financial services, Bimpe has led institutions across retail banking, investment, credit, and fintech. She is a champion of financial inclusion across Africa.",
}

function ChatAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: botResponses.default },
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const send = () => {
    if (!input.trim()) return
    const userMsg = input.trim()
    setInput('')
    const newMessages: { role: 'user' | 'bot'; text: string }[] = [...messages, { role: 'user', text: userMsg }]
    setMessages(newMessages)

    setTimeout(() => {
      const lower = userMsg.toLowerCase()
      let reply = botResponses.default
      if (lower.includes('speak') || lower.includes('keynote') || lower.includes('book')) reply = botResponses.speaking
      else if (lower.includes('board') || lower.includes('director') || lower.includes('advisory')) reply = botResponses.board
      else if (lower.includes('mentor') || lower.includes('coach')) reply = botResponses.mentorship
      else if (lower.includes('financ') || lower.includes('bank') || lower.includes('fintech')) reply = botResponses.finance
      setMessages([...newMessages, { role: 'bot', text: reply }])
    }, 800)
  }

  return (
    <>
      {/* Single chat toggle FAB */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          width: '56px',
          height: '56px',
          background: CHARCOAL,
          border: `2px solid ${GOLD}`,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 90,
          boxShadow: '0 6px 24px rgba(0,0,0,0.4)',
          transition: 'transform 0.2s',
          color: GOLD,
          fontSize: '22px',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.08)')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = 'none')}
        title={open ? 'Close chat' : "Chat with Bimpe's Assistant"}
      >
        {open ? '×' : '✦'}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '96px',
            right: '28px',
            width: '340px',
            background: CHARCOAL,
            border: `1px solid ${GOLD}40`,
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            zIndex: 89,
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '500px',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '14px 18px',
              borderBottom: `1px solid ${GOLD}30`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src={portrait3} alt="Bimpe" style={{ width: '36px', height: '36px', objectFit: 'cover', objectPosition: 'center top', borderRadius: '50%', border: `2px solid ${GOLD}` }} />
              <div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '14px', color: '#FAF6F0', fontStyle: 'italic' }}>
                  Bimpe's Assistant
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '6px', height: '6px', background: '#4CAF50', borderRadius: '50%' }} />
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(250,246,240,0.45)', fontWeight: 300 }}>Online</span>
                </div>
              </div>
            </div>

            {/* WhatsApp link inside header */}
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              title="Continue on WhatsApp"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                background: '#25D366',
                borderRadius: '20px',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'white', fontWeight: 600, letterSpacing: '0.05em' }}>WhatsApp</span>
            </a>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div
                  style={{
                    maxWidth: '80%',
                    padding: '10px 14px',
                    background: m.role === 'user' ? GOLD : 'rgba(250,246,240,0.07)',
                    color: m.role === 'user' ? CHARCOAL : 'rgba(250,246,240,0.8)',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    lineHeight: 1.6,
                    fontWeight: 300,
                    borderRadius: m.role === 'user' ? '12px 12px 0 12px' : '12px 12px 12px 0',
                  }}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: '12px', borderTop: `1px solid ${GOLD}20`, display: 'flex', gap: '8px' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ask me anything..."
              style={{
                flex: 1,
                padding: '10px 12px',
                background: 'rgba(250,246,240,0.05)',
                border: `1px solid rgba(250,246,240,0.12)`,
                color: '#FAF6F0',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                outline: 'none',
                fontWeight: 300,
              }}
            />
            <button
              onClick={send}
              style={{
                padding: '10px 14px',
                background: GOLD,
                border: 'none',
                color: CHARCOAL,
                cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = LIGHT_GOLD)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = GOLD)}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  )
}

/* ─── App ─── */
export default function App() {
  return (
    <div style={{ fontFamily: 'DM Sans, sans-serif', background: CREAM }}>
      <style>{`
        .bb-nav-links::-webkit-scrollbar { display: none; }
        .bb-hamburger { display: none; }
        .bb-mobile-menu { display: none; }
        @media (max-width: 1023px) {
          .bb-hero-grid { grid-template-columns: 1fr !important; padding-top: 108px !important; }
          .bb-hero-img { order: -1; min-height: 55vw !important; }
          .bb-zigzag-row { grid-template-columns: 1fr !important; }
          .bb-zigzag-img { grid-column: 1 !important; grid-row: 1 !important; min-height: 300px; }
          .bb-zigzag-txt { grid-column: 1 !important; grid-row: 2 !important; }
          .bb-journey-grid { grid-template-columns: 1fr !important; }
          .bb-bento-grid { grid-template-columns: 1fr !important; grid-auto-rows: auto !important; }
          .bb-bento-grid > * { grid-column: 1 !important; grid-row: auto !important; }
          .bb-board-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .bb-media-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .bb-contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .bb-footer-grid { grid-template-columns: 1fr !important; }
          .bb-nav-links { display: none !important; }
          .bb-hamburger { display: flex !important; }
          .bb-mobile-menu { display: flex !important; }
        }
        @media (max-width: 640px) {
          .bb-board-grid { grid-template-columns: 1fr !important; }
          .bb-media-grid { grid-template-columns: 1fr !important; }
          .bb-form-row { grid-template-columns: 1fr !important; }
          .bb-gallery-desktop { display: none !important; }
          .bb-gallery-mobile { display: grid !important; }
        }
        @media (min-width: 641px) {
          .bb-gallery-mobile { display: none !important; }
        }
        @media (min-width: 1024px) {
          .bb-bento-grid > *:nth-child(3) { padding: 48px 36px 48px !important; }
        }
      `}</style>
      <Nav />
      <Hero />
      <About />
      <Charity />
      <Journey />
      <Leadership />
      <BoardAdvisory />
      <Media />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <ChatAssistant />
    </div>
  )
}
