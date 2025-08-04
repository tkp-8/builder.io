import { RawImg } from "@/components/RawImg";

export default function MyComponent(props: any) {
  return (
    <div className="pointer-events-auto text-foreground bg-background font-arial">
      <div hidden className="hidden pointer-events-auto" />
      <html className="h-full text-black border-black outline-black decoration-black emphasis-black font-sans">
        <head className="hidden border-black text-black outline-black decoration-black emphasis-black font-sans">
          <title className="border-black text-black outline-black decoration-black emphasis-black font-sans">
            senury
          </title>
        </head>
        <div className="bg-[rgb(255,255,247)] min-h-full">
          <div 
            role="banner" 
            className="header fixed top-0 left-0 right-0 w-full min-h-[72px] bg-[rgb(255,255,247)] border-transparent flex items-center z-[1000] px-[5%]"
          >
            <div className="flex items-center justify-between h-full w-full max-w-none mx-auto">
              <a
                aria-current="page"
                aria-label="home"
                href="https://www.senury.com/"
                className="float-left relative cursor-pointer"
              >
                <RawImg
                  loading="lazy"
                  alt=""
                  image="https://cdn.prod.website-files.com/688e6502cc4164bdc3225733/688f8ce3149ae9bbfc59979b_logo.svg"
                  className="cursor-pointer inline-block max-w-full overflow-clip align-middle w-[100px]"
                />
              </a>
              <nav role="navigation" className="navigation flex items-center float-right">
                <a
                  href="https://www.senury.com/about-us"
                  className="nav-link border-black text-black cursor-pointer outline-black relative text-left decoration-black emphasis-black align-top mx-auto py-2 px-4 text-base leading-6 font-plus-jakarta"
                >
                  Über Uns
                </a>
                <a
                  href="https://www.senury.com/process"
                  className="nav-link border-black text-black cursor-pointer outline-black relative text-left decoration-black emphasis-black align-top mx-auto py-2 px-4 text-base leading-6 font-plus-jakarta"
                >
                  Ablauf
                </a>
                <a
                  href="https://www.senury.com/safety"
                  className="nav-link border-black text-black cursor-pointer outline-black relative text-left decoration-black emphasis-black align-top mx-auto py-2 px-4 text-base leading-6 font-plus-jakarta"
                >
                  Sicherheit
                </a>
                <a
                  href="https://www.senury.com/articles"
                  className="nav-link border-black text-black cursor-pointer outline-black relative text-left decoration-black emphasis-black align-top mx-auto py-2 px-4 text-base leading-6 font-plus-jakarta"
                >
                  Artikel
                </a>
                <a
                  href="https://www.senury.com/solutions"
                  className="nav-link border-black text-black cursor-pointer outline-black relative text-left decoration-black emphasis-black align-top mx-auto py-2 px-4 text-base leading-6 font-plus-jakarta"
                >
                  Lösungen
                </a>
                <a
                  href="https://www.senury.com/contact"
                  className="cta-button bg-black border border-black text-white cursor-pointer outline-white text-center decoration-white emphasis-white py-2 px-5 text-base leading-6 font-plus-jakarta"
                >
                  Kontakt
                </a>
              </nav>
              <div
                aria-label="menu"
                role="button"
                tabIndex={0}
                aria-controls="w-nav-overlay-0"
                aria-haspopup="menu"
                aria-expanded="false"
                className="mobile-menu-button cursor-pointer hidden float-right text-2xl relative select-text"
              >
                <div className="cursor-pointer text-2xl select-text">
                  <div className="cursor-pointer text-2xl select-text">
                    <div className="cursor-pointer text-2xl select-text" />
                  </div>
                  <div className="cursor-pointer text-2xl select-text">
                    <div className="cursor-pointer text-2xl select-text" />
                  </div>
                  <div className="cursor-pointer text-2xl select-text" />
                </div>
              </div>
            </div>
            <div className="mobile-overlay hidden absolute left-0 right-0 top-full w-full overflow-hidden" />
          </div>

          <section className="hero-section">
            <div className="container px-[5%]">
              <div className="max-w-[1280px] w-full mx-auto">
                <div className="hero-content flex py-28">
                  <div className="content-wrapper flex flex-col gap-[10px] w-full">
                    <h1 className="hero-title border-black text-black outline-black decoration-black emphasis-black my-5 mb-[10px] text-5xl leading-[44px] font-medium font-plus-jakarta">
                      <strong className="border-black text-black outline-black decoration-black emphasis-black text-5xl leading-[44px] font-medium font-plus-jakarta">
                        Ist Ihr Unternehmen bereit für Künstliche Intelligenz?
                      </strong>
                    </h1>
                    <p className="hero-description border-black text-black mb-[10px] outline-black decoration-black emphasis-black text-lg font-plus-jakarta">
                      <span>
                        Vergeuden Sie keine Zeit mehr mit wiederkehrenden
                        Aufgaben!
                      </span>
                      <br className="border-black text-black inline outline-black decoration-black emphasis-black text-lg font-plus-jakarta" />
                      <span>Bei </span>
                      <a
                        href="https://www.senury.com/#"
                        className="text-link border-black text-black cursor-pointer outline-black underline decoration-black emphasis-black text-lg font-plus-jakarta"
                      >
                        senury
                      </a>
                      <span>
                        {" "}
                        entwickeln wir KI-gestützte Systeme, die repetitive
                        Tätigkeiten automatisieren – damit Sie sich auf das
                        Wesentliche konzentrieren können: das große Ganze
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="image-section flex flex-col items-center justify-center">
            <RawImg
              loading="lazy"
              alt=""
              image="https://cdn.prod.website-files.com/688e6502cc4164bdc3225733/688f7db6ed5de26a2b540176_assets_task_01k1r82gt7fjabvxvv9yryp4j7_1754234268_img_1.webp"
              className="max-w-full overflow-clip align-middle w-[1147.2px]"
            />
            <div className="image-caption font-plus-jakarta mt-3 text-right w-[1147.2px]">
              <strong className="font-plus-jakarta font-medium text-right">
                this picture was created using ai.
              </strong>
            </div>
          </section>

          <section className="features-section">
            <div className="container px-[5%]">
              <div className="max-w-[1280px] w-full mx-auto">
                <div className="features-content flex py-28">
                  <div className="content-wrapper flex flex-col gap-[10px] w-full">
                    <h1 className="section-title border-black text-black outline-black decoration-black emphasis-black my-5 mb-[10px] text-5xl leading-[44px] font-medium font-plus-jakarta">
                      <strong className="border-black text-black outline-black decoration-black emphasis-black text-5xl leading-[44px] font-medium font-plus-jakarta">
                        Innovative Lösungen, speziell für Sie entwickelt
                      </strong>
                    </h1>
                    <p className="section-description border-black text-black mb-[10px] outline-black decoration-black emphasis-black text-lg font-plus-jakarta">
                      Bei Senury begleiten wir Unternehmen als spezialisierte KI
                      Agentur dabei, Künstliche Intelligenz schlau zu
                      integrieren. Unser Ziel ist es die Unternehmen bei der
                      digitalen Transformation zu unterstützten indem wir
                      interne Prozesse automatisieren.Unsere Lösungen werden
                      anhand von personalisierten Chatbots über automatisierte
                      Datenverarbeitung bis hin zu AI-Assistenten an ihr
                      Unternehmen angepasst. Unsere Prioritäten sind dabei, das
                      Unternehmen effizienter, resistenter und
                      wettbewerbsfähiger zu machen.Unsere Reise endet aber nicht
                      mit dem ersten Job - Denn bei Senury sind wir ein Team.Wir
                      verfolgen und unterstuetzen Sie langfristig bei der
                      digitalen Transformation ihres Unternehmens.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="process-section">
            <div className="container px-[5%]">
              <div className="max-w-[1280px] w-full mx-auto">
                <div className="process-content flex py-28">
                  <div className="content-wrapper flex flex-col gap-[10px] w-full">
                    <h1 className="section-title border-black text-black outline-black decoration-black emphasis-black my-5 mb-[10px] text-5xl leading-[44px] font-medium font-plus-jakarta">
                      <strong className="border-black text-black outline-black decoration-black emphasis-black text-5xl leading-[44px] font-medium font-plus-jakarta">
                        Ablauf eines Projektes
                      </strong>
                    </h1>
                    <div className="process-steps">
                      {[
                        {
                          number: "1.",
                          title: "Erstgespräch / Kick-off",
                          description: "Gemeinsames Verständnis der Anforderungen schaffen\nZieldefinition und Erwartungsabgleich"
                        },
                        {
                          number: "2.",
                          title: "Entwicklung von Konzepten",
                          description: "Sammeln und Erarbeiten möglicher Lösungsansätze\nAufzeigen von Handlungsoptionen"
                        },
                        {
                          number: "3.",
                          title: "Abstimmungs-Call zur Entwicklung",
                          description: "Gemeinsames Verständnis der Anforderungen schaffen\nZieldefinition und Erwartungsabgleich"
                        },
                        {
                          number: "4.",
                          title: "Prototyp-Entwicklung",
                          description: "Gemeinsames Verständnis der Anforderungen schaffen\nZieldefinition und Erwartungsabgleich"
                        },
                        {
                          number: "5.",
                          title: "Prototyp-Test & Evaluation",
                          description: "Gemeinsames Verständnis der Anforderungen schaffen\nZieldefinition und Erwartungsabgleich"
                        },
                        {
                          number: "6.",
                          title: "Umsetzung & Forschung",
                          description: "Gemeinsames Verständnis der Anforderungen schaffen\nZieldefinition und Erwartungsabgleich"
                        },
                        {
                          number: "7.",
                          title: "Server-Aktivierung & Implementierung",
                          description: "Gemeinsames Verständnis der Anforderungen schaffen\nZieldefinition und Erwartungsabgleich"
                        },
                        {
                          number: "8.",
                          title: "Monitoring & Qualitätssicherung",
                          description: "Gemeinsames Verständnis der Anforderungen schaffen\nZieldefinition und Erwartungsabgleich"
                        },
                        {
                          number: "9.",
                          title: "Optimierung & Weiterentwicklung",
                          description: "Gemeinsames Verständnis der Anforderungen schaffen\nZieldefinition und Erwartungsabgleich"
                        }
                      ].map((step, index) => (
                        <div key={index} className="process-step flex gap-10">
                          <h1 className="step-number border-black text-black outline-black decoration-black emphasis-black my-5 mb-[10px] text-[38px] leading-[44px] font-medium font-plus-jakarta">
                            {step.number}
                          </h1>
                          <div className="step-content flex flex-col">
                            <h1 className="step-title border-black text-black outline-black decoration-black emphasis-black my-5 mb-[10px] text-[38px] leading-[44px] font-medium font-plus-jakarta">
                              {step.title}
                            </h1>
                            <p className="step-description border-black text-black mb-[10px] outline-black decoration-black emphasis-black text-lg font-plus-jakarta">
                              {step.description.split('\n').map((line, i) => (
                                <span key={i}>
                                  {line}
                                  {i < step.description.split('\n').length - 1 && <br />}
                                </span>
                              ))}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="services-section">
            <div className="container px-[5%]">
              <div className="max-w-[1280px] w-full mx-auto">
                <div className="services-content flex py-28">
                  <div className="content-wrapper flex flex-col gap-[10px] w-full">
                    <h1 className="section-title border-black text-black outline-black decoration-black emphasis-black my-5 mb-[10px] text-5xl leading-[44px] font-medium font-plus-jakarta">
                      <strong className="border-black text-black outline-black decoration-black emphasis-black text-5xl leading-[44px] font-medium font-plus-jakarta">
                        Unser Angebot
                      </strong>
                    </h1>
                    <div className="services-grid grid grid-cols-2 gap-[30px] justify-items-stretch">
                      <div className="service-item">
                        <h1 className="service-title border-black text-black outline-black decoration-black emphasis-black my-5 mb-[10px] text-[38px] leading-[44px] font-medium font-plus-jakarta">
                          Ki Agenten
                        </h1>
                        <div className="service-description border-black text-black outline-black decoration-black emphasis-black text-lg font-plus-jakarta">
                          Wir erstellen speziell auf Ihre Bedürfnisse
                          zugeschnittene KI-Agenten, die eigenständigkomplexe
                          Aufgaben erledigen - zuverlassig und effizient.
                        </div>
                      </div>
                      <div className="service-item">
                        <h1 className="service-title border-black text-black outline-black decoration-black emphasis-black my-5 mb-[10px] text-[38px] leading-[44px] font-medium font-plus-jakarta">
                          Ki als Team
                        </h1>
                        <div className="service-description border-black text-black outline-black decoration-black emphasis-black text-lg font-plus-jakarta">
                          Unsere KI-Agenten arbeiten zusammen, tauschen sich aus
                          und finden im Team die besten Lösungen - wie ein
                          digitales Expertenteam, das immer einsatzbereit ist.
                        </div>
                      </div>
                      <div className="service-item">
                        <h1 className="service-title border-black text-black outline-black decoration-black emphasis-black my-5 mb-[10px] text-[38px] leading-[44px] font-medium font-plus-jakarta">
                          Mehr Effizienz, weniger Klicks
                        </h1>
                        <div className="service-description border-black text-black outline-black decoration-black emphasis-black text-lg font-plus-jakarta">
                          Vergessen Sie ständiges Hin- und Herwechseln zwischen
                          Tools. Unsere Lösungen sind nahtlos in Ihre
                          Arbeitsprozesse eingebunden - einfach, effizient und
                          flexibel
                        </div>
                      </div>
                      <div className="service-item">
                        <h1 className="service-title border-black text-black outline-black decoration-black emphasis-black my-5 mb-[10px] text-[38px] leading-[44px] font-medium font-plus-jakarta">
                          Ki Sicherheit und Kontrolle inklusiveAgenten
                        </h1>
                        <div className="service-description border-black text-black outline-black decoration-black emphasis-black text-lg font-plus-jakarta">
                          Wir behalten die Leistung ihrer Ki-Systeme stets im
                          Blick-für maximale Transparenz, Sicherheit und
                          Vertrauen
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="stats-section">
            <div className="container px-[5%]">
              <div className="max-w-[1280px] w-full mx-auto">
                <div className="stats-content flex py-28">
                  <div className="content-wrapper flex flex-col gap-[10px] w-full">
                    <h1 className="section-title border-black text-black outline-black decoration-black emphasis-black my-5 mb-[10px] text-5xl leading-[44px] font-medium font-plus-jakarta">
                      <strong className="border-black text-black inline outline-black decoration-black emphasis-black text-5xl leading-[44px] font-medium font-plus-jakarta">
                        <span>Ki-Strategien jetzt realisieren -</span>
                        <br className="border-black text-black inline outline-black decoration-black emphasis-black text-5xl leading-[44px] font-medium font-plus-jakarta" />
                        <span>Wettbewerbsvorteile sichern</span>
                      </strong>
                    </h1>
                    <p className="section-description border-black text-black mb-[10px] outline-black decoration-black emphasis-black text-lg font-plus-jakarta">
                      Die Entwicklung des ersten Computers, des Internets oder
                      der ersten Suchmaschine – all diese Fortschritte hatten
                      eines gemeinsam: den Beginn eines neuen Zeitalters. Für
                      die Wirtschaft wie auch für unser tägliches Leben.
                      Rückblickend im Jahr 2025 wäre es leichtfertig, diese
                      „Trends" von damals zu unterschätzen. Mit dem rasanten
                      Wachstum an KI erleben wir erneut einen Wendepunkt. Die
                      Spielregeln verändern sich fundamental.
                    </p>
                    <div className="stats-grid grid grid-cols-3 gap-5 items-center justify-items-center">
                      <div className="stat-item">
                        <h1 className="stat-number border-black text-black outline-black decoration-black emphasis-black my-5 mb-[10px] text-[38px] leading-[44px] font-medium font-plus-jakarta">
                          &gt;600 Mrd. S
                        </h1>
                        <p className="stat-description border-black text-black mb-[10px] outline-black decoration-black emphasis-black text-lg font-plus-jakarta">
                          Umsatzprognose im KI-Bereich weltweit bis Ende 2025
                        </p>
                      </div>
                      <div className="stat-item">
                        <h1 className="stat-number border-black text-black outline-black decoration-black emphasis-black my-5 mb-[10px] text-[38px] leading-[44px] font-medium font-plus-jakarta">
                          58%
                        </h1>
                        <p className="stat-description border-black text-black mb-[10px] outline-black decoration-black emphasis-black text-lg font-plus-jakarta">
                          Anteil der deutschen Unternehmen, die noch keine
                          KI-Strategie verfolgen
                        </p>
                      </div>
                      <div className="stat-item">
                        <h1 className="stat-number border-black text-black outline-black decoration-black emphasis-black my-5 mb-[10px] text-[38px] leading-[44px] font-medium font-plus-jakarta">
                          45%
                        </h1>
                        <p className="stat-description border-black text-black mb-[10px] outline-black decoration-black emphasis-black text-lg font-plus-jakarta">
                          Leistungssteigerung bei Wissensarbeit laut , aktueller
                          McKinsey-Studi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="testimonial-section">
            <div className="container px-[5%]">
              <div className="max-w-[1280px] w-full mx-auto">
                <div className="testimonial-content py-28">
                  <div className="testimonial-wrapper flex flex-col items-center text-center w-full">
                    <div className="client-logo text-center">
                      <a
                        target="_blank"
                        href="https://ottochrom.de/"
                        className="border-blue-600 text-blue-600 cursor-pointer inline-block max-w-full outline-blue-600 text-center underline decoration-blue-600 emphasis-blue-600"
                      >
                        <RawImg
                          loading="lazy"
                          alt=""
                          image="https://cdn.prod.website-files.com/688e6502cc4164bdc3225733/688fa84e629a2784c128f8a7_ottochrom-logo.avif"
                          className="border-blue-600 text-blue-600 cursor-pointer inline-block max-h-14 max-w-full outline-blue-600 overflow-clip text-center decoration-blue-600 emphasis-blue-600 align-middle"
                        />
                      </a>
                    </div>
                    <div className="pb-8 text-center w-full" />
                    <div className="testimonial-text max-w-3xl text-center w-full">
                      <div className="border-black text-black outline-black text-center decoration-black emphasis-black text-lg font-plus-jakarta">
                        Die Zusammenarbeit mit den Jungs von senury war
                        wunderbar, es verlief alles wie erwartet, sie waren
                        schnell, professionell und haben mir das Gefühl von
                        Modernität und Sicherheit gegeben.
                      </div>
                    </div>
                    <div className="pb-8 text-center w-full" />
                    <p className="author-name border-black text-black mb-[10px] outline-black text-center decoration-black emphasis-black font-semibold text-base leading-6 font-system">
                      Dirk Salomon
                    </p>
                    <p className="author-title border-black text-black outline-black text-center decoration-black emphasis-black text-base leading-6 font-system">
                      CEO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="faq-section">
            <div className="faq-wrapper flex flex-col py-28 px-[382.4px]">
              <div className="faq-header max-w-3xl text-center w-full">
                <h2 className="faq-title border-black text-black outline-black text-center decoration-black emphasis-black my-5 mb-[10px] text-5xl leading-9 font-medium font-plus-jakarta">
                  Häufig gestellte Fragen
                </h2>
                <div className="pb-6 text-center w-full" />
                <p className="faq-subtitle border-black text-black mb-[10px] outline-black text-center decoration-black emphasis-black text-lg font-plus-jakarta">
                  Hier sind die Antworten auf die am häufigsten gestellten
                  Fragen.
                </p>
              </div>
              <div className="pb-20 w-full" />
              <div className="faq-items border-b border-black">
                <div className="faq-item flex flex-col justify-start">
                  <div className="faq-question border-t border-black cursor-pointer flex items-center justify-between gap-6 py-5">
                    <div className="question-text border-black text-black cursor-pointer outline-black decoration-black emphasis-black text-lg font-plus-jakarta">
                      Wie wird Sicherheit mit Ki hergestellt?
                    </div>
                    <div className="expand-icon self-start cursor-pointer">
                      <div className="icon-wrapper flex flex-col items-center justify-center border-black text-black cursor-pointer h-8 w-8 outline-black decoration-black emphasis-black">
                        <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="border-black text-black cursor-pointer fill-none h-full outline-black overflow-hidden decoration-black emphasis-black w-full">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.5303 20.884C16.2374 21.1769 15.7625 21.1769 15.4696 20.884L7.82315 13.2375C7.53025 12.9446 7.53025 12.4698 7.82315 12.1769L8.1767 11.8233C8.46959 11.5304 8.94447 11.5304 9.23736 11.8233L15.9999 18.5859L22.7625 11.8233C23.0554 11.5304 23.5303 11.5304 23.8231 11.8233L24.1767 12.1769C24.4696 12.4698 24.4696 12.9446 24.1767 13.2375L16.5303 20.884Z" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="faq-answer h-0 overflow-hidden w-full">
                    <div className="answer-content mb-6">
                      <p className="answer-text border-black text-black mb-[10px] outline-black decoration-black emphasis-black text-lg font-plus-jakarta">
                        Wir setzen Monitoring-Tools ein, die alle von der KI
                        generierten Inhalte kontinuierlich überprüfen und auf
                        ihre Richtigkeit einschätzen. Diese Tools ermöglichen es
                        uns, potenzielle Fehler oder Unstimmigkeiten sofort zu
                        erkennen. Sollte es zu einem Problem kommen, erhalten
                        wir umgehend eine Benachrichtigung, sodass wir schnell
                        und manuell eingreifen können, um die Situation zu
                        klären. Auf diese Weise stellen wir sicher, dass die
                        Integrität und Sicherheit unserer KI-Anwendungen stets
                        gewahrt bleibt.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="faq-item flex flex-col justify-start">
                  <div className="faq-question border-t border-black cursor-pointer flex items-center justify-between gap-6 py-5">
                    <div className="question-text border-black text-black cursor-pointer outline-black decoration-black emphasis-black text-lg font-plus-jakarta">
                      Was passiert mit sensiblen Daten?
                    </div>
                    <div className="expand-icon self-start cursor-pointer">
                      <div className="icon-wrapper flex flex-col items-center justify-center border-black text-black cursor-pointer h-8 w-8 outline-black decoration-black emphasis-black">
                        <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="border-black text-black cursor-pointer fill-none h-full outline-black overflow-hidden decoration-black emphasis-black w-full">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.5303 20.884C16.2374 21.1769 15.7625 21.1769 15.4696 20.884L7.82315 13.2375C7.53025 12.9446 7.53025 12.4698 7.82315 12.1769L8.1767 11.8233C8.46959 11.5304 8.94447 11.5304 9.23736 11.8233L15.9999 18.5859L22.7625 11.8233C23.0554 11.5304 23.5303 11.5304 23.8231 11.8233L24.1767 12.1769C24.4696 12.4698 24.4696 12.9446 24.1767 13.2375L16.5303 20.884Z" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="faq-answer h-0 overflow-hidden w-full">
                    <div className="answer-content mb-6">
                      <p className="answer-text border-black text-black mb-[10px] outline-black decoration-black emphasis-black text-lg font-plus-jakarta">
                        Wir verwenden lokale Modelle, die vollständig offline
                        funktionieren. Das bedeutet, dass Ihre sensiblen Daten
                        nicht über das Internet übertragen oder in Cloud-Dienste
                        von Drittanbietern gespeichert werden. Dadurch wird
                        sichergestellt, dass keine externen Firmen im Ausland
                        Zugriff auf Ihre Informationen haben. Ihre Daten bleiben
                        sicher und geschützt auf Ihrem Gerät, ohne dass eine
                        Verbindung zu externen Servern erforderlich ist. Dies
                        minimiert das Risiko von Datenlecks und gewährleistet
                        Ihre Privatsphäre.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-20 w-full" />
              <div className="contact-cta max-w-[560px] text-center w-full">
                <h3 className="cta-title border-black text-black outline-black text-center decoration-black emphasis-black my-5 mb-[10px] text-5xl leading-[30px] font-medium font-plus-jakarta">
                  Noch weitere Fragen?
                </h3>
                <div className="pb-8 text-center w-full" />
                <p className="cta-text border-black text-black mb-[10px] outline-black text-center decoration-black emphasis-black text-lg font-plus-jakarta">
                  Nicht zögern schreib und schnell eine Mail und wir antworten
                  sobald wir die Zeit finden!
                </p>
                <div className="pb-8 text-center w-full" />
                <a
                  href="https://www.senury.com/contact"
                  className="cta-button bg-black border border-black text-white cursor-pointer outline-white text-center decoration-white emphasis-white py-2 px-5 text-base leading-6 font-plus-jakarta"
                >
                  Kontakt
                </a>
              </div>
            </div>
          </section>

          <section className="footer-section">
            <div className="footer-content py-20 px-[5%]">
              <div className="footer-grid grid grid-cols-[1fr_0.5fr] gap-x-[76.48px] gap-y-4 items-start">
                <div className="footer-left">
                  <a
                    href="https://www.senury.com/#"
                    className="footer-logo cursor-pointer inline relative"
                  >
                    <RawImg
                      loading="lazy"
                      width="100"
                      alt=""
                      image="https://cdn.prod.website-files.com/688e6502cc4164bdc3225733/688f8ce3149ae9bbfc59979b_logo.svg"
                      className="cursor-pointer inline-block max-w-full overflow-clip align-middle w-[100px]"
                    />
                  </a>
                  <div className="pb-8 w-full" />
                  <div className="contact-info border-black text-black outline-black decoration-black emphasis-black text-lg font-plus-jakarta">
                    <strong className="border-black text-black outline-black decoration-black emphasis-black font-bold text-lg font-plus-jakarta">
                      Addresse
                    </strong>
                  </div>
                  <div className="address border-black text-black outline-black decoration-black emphasis-black text-lg font-plus-jakarta">
                    Paul-Lincke-Ufer 8c Berlin 10999
                  </div>
                  <div className="pb-6 w-full" />
                  <div className="contact-label border-black text-black outline-black decoration-black emphasis-black text-lg font-plus-jakarta">
                    <strong className="border-black text-black outline-black decoration-black emphasis-black font-bold text-lg font-plus-jakarta">
                      Kontakt
                    </strong>
                  </div>
                  <a
                    href="https://www.senury.com/#"
                    className="contact-phone border-black text-black cursor-pointer inline outline-black underline decoration-black emphasis-black text-lg font-plus-jakarta"
                  >
                    <span>+491792428439</span>
                    <br className="border-black text-black cursor-pointer inline outline-black decoration-black emphasis-black text-lg font-plus-jakarta" />
                  </a>
                  <a
                    href="https://www.senury.com/#"
                    className="contact-email border-black text-black cursor-pointer inline outline-black underline decoration-black emphasis-black text-lg font-plus-jakarta"
                  >
                    <span>contact@senury.com</span>
                    <br className="border-black text-black cursor-pointer inline outline-black decoration-black emphasis-black text-lg font-plus-jakarta" />
                  </a>
                  <div className="pb-8 w-full" />
                  <div className="social-links grid grid-flow-col grid-cols-[max-content] gap-x-3 gap-y-0 justify-items-start items-start">
                    <a
                      href="https://www.senury.com/#"
                      className="social-link flex items-center border-black text-black cursor-pointer max-w-full outline-black decoration-black emphasis-black"
                    >
                      <div className="social-icon border-black text-black cursor-pointer h-6 w-6 outline-black decoration-black emphasis-black">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="border-black text-black cursor-pointer inline fill-none h-6 outline-black overflow-hidden decoration-black emphasis-black w-6">
                          <path d="M16.5 6H13.5C12.9477 6 12.5 6.44772 12.5 7V10H16.5C16.6137 9.99748 16.7216 10.0504 16.7892 10.1419C16.8568 10.2334 16.8758 10.352 16.84 10.46L16.1 12.66C16.0318 12.8619 15.8431 12.9984 15.63 13H12.5V20.5C12.5 20.7761 12.2761 21 12 21H9.5C9.22386 21 9 20.7761 9 20.5V13H7.5C7.22386 13 7 12.7761 7 12.5V10.5C7 10.2239 7.22386 10 7.5 10H9V7C9 4.79086 10.7909 3 13 3H16.5C16.7761 3 17 3.22386 17 3.5V5.5C17 5.77614 16.7761 6 16.5 6Z" fill="CurrentColor"></path>
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.senury.com/#"
                      className="social-link flex items-center border-black text-black cursor-pointer max-w-full outline-black decoration-black emphasis-black"
                    >
                      <div className="social-icon border-black text-black cursor-pointer h-6 w-6 outline-black decoration-black emphasis-black">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="border-black text-black cursor-pointer inline fill-none h-6 outline-black overflow-hidden decoration-black emphasis-black w-6">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z" fill="CurrentColor"></path>
                        </svg>
                      </div>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/senury/"
                      className="social-link flex items-center border-black text-black cursor-pointer max-w-full outline-black decoration-black emphasis-black"
                    >
                      <div className="social-icon border-black text-black cursor-pointer h-6 w-6 outline-black decoration-black emphasis-black">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="border-black text-black cursor-pointer inline fill-none h-6 outline-black overflow-hidden decoration-black emphasis-black w-6">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z" fill="CurrentColor"></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="footer-right grid grid-cols-2 gap-x-8 gap-y-4 items-start">
                  <div className="footer-nav flex flex-col items-start gap-[10px]">
                    <a
                      href="https://www.senury.com/about-us"
                      className="footer-link border-black text-black cursor-pointer outline-black underline decoration-black emphasis-black text-lg font-plus-jakarta"
                    >
                      ‍Über Uns
                    </a>
                    <a
                      href="https://www.senury.com/process"
                      className="footer-link border-black text-black cursor-pointer outline-black underline decoration-black emphasis-black text-lg font-plus-jakarta"
                    >
                      Ablauf
                    </a>
                    <a
                      href="https://www.senury.com/#"
                      className="footer-link border-black text-black cursor-pointer outline-black underline decoration-black emphasis-black text-lg font-plus-jakarta"
                    >
                      Sicherheit
                    </a>
                    <a
                      href="https://www.senury.com/#"
                      className="footer-link border-black text-black cursor-pointer outline-black underline decoration-black emphasis-black text-lg font-plus-jakarta"
                    >
                      Arikel
                    </a>
                    <a
                      href="https://www.senury.com/#"
                      className="footer-link border-black text-black cursor-pointer outline-black underline decoration-black emphasis-black text-lg font-plus-jakarta"
                    >
                      Angebot
                    </a>
                  </div>
                  <div className="footer-nav flex flex-col items-start gap-[10px]">
                    <a
                      href="https://www.senury.com/contact"
                      className="footer-link border-black text-black cursor-pointer outline-black underline decoration-black emphasis-black text-lg font-plus-jakarta"
                    >
                      Kontakt
                    </a>
                  </div>
                </div>
              </div>
              <div className="pb-20 w-full" />
              <div className="footer-divider bg-black h-px w-full" />
              <div className="pb-8 w-full" />
              <div className="footer-bottom flex items-center justify-between">
                <div className="copyright border-black text-black outline-black decoration-black emphasis-black text-lg font-plus-jakarta">
                  © 2025 senury. All right reserved.
                </div>
                <div className="legal-links grid grid-flow-col grid-cols-[max-content] gap-x-6 gap-y-0 justify-center">
                  <a
                    href="https://www.senury.com/imprint"
                    className="legal-link border-black text-black cursor-pointer outline-black underline decoration-black emphasis-black text-lg font-plus-jakarta"
                  >
                    Impressum
                  </a>
                  <a
                    href="https://www.senury.com/data-protection"
                    className="legal-link border-black text-black cursor-pointer outline-black underline decoration-black emphasis-black text-lg font-plus-jakarta"
                  >
                    Datenschutz
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="hidden" />
        </div>
      </html>
      <div className="bg-[rgb(255,255,247)] min-h-full">
        <section>
          <div className="container px-[5%]">
            <div className="max-w-[1280px] w-full mx-auto" />
          </div>
        </section>
        <section>
          <div className="container px-[5%]">
            <div className="max-w-[1280px] w-full mx-auto" />
          </div>
        </section>
        <section>
          <div className="container px-[5%]">
            <div className="max-w-[1280px] w-full mx-auto" />
          </div>
        </section>
        <section>
          <div className="container px-[5%]">
            <div className="max-w-[1280px] w-full mx-auto" />
          </div>
        </section>
        <div className="hidden" />
      </div>
      <title className="pointer-events-auto">
        Create Next App
      </title>
    </div>
  );
}
