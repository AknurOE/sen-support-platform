const capabilities = [
  {
    title: 'Планирование занятий',
    description: 'Расписание встреч, статусы и напоминания для семьи и специалистов.',
  },
  {
    title: 'Дневник развития',
    description: 'Единая история наблюдений, достижений и рекомендаций.',
  },
  {
    title: 'Команда сопровождения',
    description: 'Безопасное взаимодействие родителей и профильных специалистов.',
  },
]

function App() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="SEN Support Platform">
          SEN <span>Support</span>
        </a>
        <span className="status">В разработке</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Платформа поддержки семей</p>
        <h1 id="hero-title">Вместе отслеживаем развитие и планируем поддержку ребёнка.</h1>
        <p className="hero-copy">
          SEN Support объединит семью и специалистов в одном бережном, безопасном цифровом пространстве.
        </p>
        <div className="hero-actions">
          <button type="button">Скоро начать</button>
          <a href="#capabilities">О возможностях</a>
        </div>
      </section>

      <section className="capabilities" id="capabilities" aria-label="Возможности платформы">
        {capabilities.map((capability, index) => (
          <article className="capability-card" key={capability.title}>
            <span className="card-number">0{index + 1}</span>
            <h2>{capability.title}</h2>
            <p>{capability.description}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
