// Home.tsx
// The landing "About" page of the portfolio.
// Introduces who I am, what I do, tools I use, and contact information.
// Structured with <section> blocks and styled dividers.

export default function Home() {
  return (
    <div>
      <section>
        <h2>About Me</h2>
        <p>
          I'm a data engineer and analytics professional focused on building scalable, reliable, and insightful data
          solutions. I specialize in transforming raw data into actionable insights through well-designed infrastructure,
          dashboards, and automation.
        </p>
      </section>

      <hr className="section-divider" />

      <section>
        <h2>What I Do</h2>
        <p>
          I enjoy designing ETL pipelines, developing interactive dashboards, and using cloud platforms to deliver
          analytics solutions that support decision-making. I work best where business insight meets engineering
          precision.
        </p>
      </section>

      <hr className="section-divider" />

      <section>
        <h2>Tools I Use</h2>
        <ul>
          <li>Python, SQL, PySpark</li>
          <li>Power BI, Azure, AWS</li>
          <li>Docker, Kubernetes, GitHub Actions</li>
          <li>Grafana, Recharts, Plotly</li>
        </ul>
      </section>

      <hr className="section-divider" />

      <section>
        <h2>Let’s Connect</h2>
        <p>
          <a href="mailto:jmanders93@gmail.com">jmanders93@gmail.com</a><br />
          <a href="https://linkedin.com/in/jan-manders" target="_blank">LinkedIn</a>
        </p>
      </section>
    </div>
  )
}
