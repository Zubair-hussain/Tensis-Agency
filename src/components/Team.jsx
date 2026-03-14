import styles from './Team.module.css'

const athletes = [
  { rank: 'World #3',  name: 'Kai Zhang',   pos: 'Attacker · China',   win: '94%', titles: '12' },
  { rank: 'World #7',  name: 'Lena Müller', pos: 'Defender · Germany', win: '89%', titles: '8'  },
  { rank: 'World #11', name: 'Ryu Tanaka',  pos: 'All-Round · Japan',  win: '86%', titles: '6'  },
  { rank: 'World #18', name: 'Priya Nair',  pos: 'Attacker · India',   win: '82%', titles: '4'  },
]

function PlayerSVG({ flip }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="white"
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    >
      <ellipse cx="60" cy="25" rx="18" ry="20" />
      <path d="M28 58 Q60 44 92 58 L96 128 L78 128 L73 178 L47 178 L42 128 L24 128 Z" />
      <rect x="20" y="58" width="22" height="52" rx="8" transform="rotate(-18 31 84)" />
      <rect x="78" y="52" width="22" height="56" rx="8" transform="rotate(22 89 80)" />
    </svg>
  )
}

export default function Team() {
  return (
    <section id="team" className={styles.section}>
      <div className="section-header reveal">
        <div>
          <div className="section-tag">Roster</div>
          <h2 className="section-title">OUR<br />ATHLETES</h2>
        </div>
        <p className="section-desc">
          A carefully curated roster of the world's most exciting table tennis talent.
        </p>
      </div>

      <div className={styles.grid}>
        {athletes.map((a, i) => (
          <div
            className={`${styles.card} reveal stagger-${i + 1}`}
            key={a.name}
          >
            <div className={styles.bg}>
              <PlayerSVG flip={i % 2 !== 0} />
            </div>
            <div className={styles.overlay} />
            <div className={styles.accent} />
            <div className={styles.info}>
              <div className={styles.rankLabel}>{a.rank}</div>
              <div className={styles.name}>{a.name}</div>
              <div className={styles.pos}>{a.pos}</div>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <strong>{a.win}</strong>Win Rate
                </div>
                <div className={styles.stat}>
                  <strong>{a.titles}</strong>Titles
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
