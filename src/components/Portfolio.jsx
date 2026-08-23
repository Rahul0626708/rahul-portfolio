const PROJECTS = [
  {
    icon: "bx bx-bot",
    title: "Job Auto Pilot",
    desc: "Self-hosted n8n pipeline that scrapes 12+ job portals, scores listings locally with a custom skill dictionary, and publishes to WordPress, Notion, Telegram, WhatsApp, and LinkedIn.",
    link: "#",
  },
  {
  icon: "bx bx-car",
  title: "Uber Clone – Real-Time Ride Booking",
  desc: "A full-stack Uber-inspired ride booking platform built with Node.js, Express.js, MongoDB, and JWT, featuring user/captain authentication, vehicle management, fare estimation, location services, distance calculation, and ride booking APIs.",
  link: "https://github.com/Rahul0626708/uber-clone-Real-Time-Interactive-Web-Application",
},
  {
    icon: "bx bx-code-block",
    title: "This Portfolio",
    desc: "A responsive React rebuild of a static HTML/CSS/JS portfolio, with animated skill bars, scroll-spy navigation, and a dark red/black theme.",
    link: "#",
  },
  {
    icon: "bx bx-brain",
    title: "AI Business Intelligence Agent",
    desc: "An Agentic AI platform that uses LLMs and multi-agent workflows to analyze business data, answer natural-language queries, detect anomalies, generate insights, and create automated reports.",
    link: "#",
},
{
    icon: "bx bx-code-alt",
    title: "Autonomous Software Engineering Agent",
    desc: "An AI-powered coding agent that understands codebases, breaks development tasks into steps, generates code, runs tests, debugs issues, and performs automated code review using LLM-powered workflows.",
    link: "",
},
  {
    icon: "bx bx-wallet",
    title: "Payout Management System",
    desc: "A Node.js and MongoDB backend for managing user commissions, advance payouts, sales reconciliation, wallets, withdrawals, and failed payout recovery with secure REST APIs.",
    link: "https://github.com/Rahul0626708/payout-management-system",
  },
  {
    icon: "bx bx-bar-chart-alt-2",
    title: "Binance Futures Trading Bot",
    desc: "A Python CLI trading bot for Binance Futures Testnet that executes MARKET and LIMIT BUY/SELL orders with input validation, environment-based API credentials, structured architecture, and comprehensive request and error logging.",
    link: "https://github.com/Rahul0626708/binance-trading-bot",
},
  {
    icon: "bx bx-line-chart",
    title: "Stock Market Trend Forecasting",
    desc: "A Python-based time series forecasting project that analyzes historical stock market data, identifies trends and patterns, and predicts future market movements using statistical and machine learning techniques.",
    link: "https://github.com/Rahul0626708/-forecast-stock-market-trends-using-time-series-analysis-techniques",
},
];

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="main-text">
        <h2>
          Latest<span> Projects</span>
        </h2>

        <div className="portfolio-content">
          {PROJECTS.map((p) => (
            <div className="row" key={p.title}>
              <div className="row-icon">
                <i className={p.icon}></i>
              </div>
              <div className="layer">
                <h5>{p.title}</h5>
                <p>{p.desc}</p>
                <a href={p.link} aria-label={`View ${p.title}`}>
                  <i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
