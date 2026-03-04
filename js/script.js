const FORMSPREE_URL = "https://formspree.io/f/meelwnpa";

const contentData = {
    student: {
        heroSubtitle: "zamiast zakuwania",
        heroDesc: "Nie walcz o każdy punkt na maturze! Zbuduj projekt, który da Ci wstęp wolny na studia. Zero zakuwania, 100% strategii i mentoring, który prowadzi Cię za rękę do zdobycia indeksu",
        sections: `
            <section class="section-block" id="glitch">
                <div class="container section-content">
                    <h2 class="section-title"><span class="accent-text">Luka </span>systemowa</h2>
                    
                    <div class="chart-container">
                    <div class="chart-y-axis">
                        <span class="y-label">Panika / Kucie</span>
                        <span class="y-label">Chill / Spokój</span>
                    </div>
                    
                    <div class="chart-grid"></div>
                    
                    <div class="success-marker">
                        <div class="marker-glow"></div>
                    </div>

                    <span class="chart-label label-start">Wrzesień</span>
                    <span class="chart-label label-jan">STYCZEŃ (Finał)</span>
                    <span class="chart-label label-may">MAJ (Matura)</span>

                    <svg class="glitch-svg" viewBox="0 0 100 50" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="grad-red" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stop-color="#ff4d4d" stop-opacity="0.3" />
                                <stop offset="100%" stop-color="#ff4d4d" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="grad-green" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stop-color="var(--color-accent, #4ade80)" stop-opacity="0.4" />
                                <stop offset="100%" stop-color="var(--color-accent, #4ade80)" stop-opacity="0" />
                            </linearGradient>
                        </defs>

                        <path class="area area-red" d="M0,45 C 40,45 60,35 100,5 L100,50 L0,50 Z" fill="url(#grad-red)"></path>
                        <path class="area area-green" d="M0,25 C 20,15 40,10 55,10 L 55,48 L 100,48 L100,50 L0,50 Z" fill="url(#grad-green)"></path>

                        <path class="line line-red" d="M0,45 C 40,45 60,35 100,5" vector-effect="non-scaling-stroke"></path>
                        
                        <path class="line line-green" d="M0,25 C 20,15 40,10 55,10 L 55,48 L 100,48" vector-effect="non-scaling-stroke"></path>
                    </svg>
                </div>

                    <div class="comparison-box">
                        <div class="compare-item bad">
                            <h3 style="color: #ff4d4d">😑 Ścieżka Standardowa</h3>
                            <ul>
                                <li><span>📉</span> Inni zakuwają do maja</li>
                                <li><span>🎲</span> Matura to czysta losowość</li>
                                <li><span>😰</span> Stres rośnie z czasem</li>
                            </ul>
                        </div>
                        <div class="compare-item good">
                            <h3 style="color: var(--color-accent)">😎 Podejście strategiczne</h3>
                            <ul>
                                <li><span>🏖️</span> Ty masz wolne od stycznia</li>
                                <li><span>🤖</span> Olimpiada to algorytm</li>
                                <li><span>📈</span> Wynik znasz przed egzaminem</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="section-block" id="cheat-code-process">
                <div class="container section-content">
                    <h2 class="section-title">Nasz <span class="accent-text">Cheat Code</span></h2>
                    
                    <div class="social-proof-banner">
                        <span class="proof-emoji">🎮</span>
                        <p>Przeszliśmy tę grę. Dostałem się na studia mając <strong>więcej indeksów, niż potrzebowałem</strong>. My już zhakowaliśmy ten system – teraz jesteśmy Twoimi <em>buddies</em> i wsparciem na tej samej trasie.</p>
                    </div>

                    <div class="quest-timeline">
                        
                        <div class="quest-step">
                            <div class="step-marker">Lvl 1</div>
                            <div class="step-content">
                                <div class="step-header">
                                    <h3>Rozpoznanie Terenu</h3>
                                    <span class="badge free-badge">FREE</span>
                                </div>
                                <p>Bezpłatna kalibracja. Sprawdzamy Twoje mocne strony, pokazujemy możliwości i dobieramy olimpiadę idealnie pod Twój profil. Nic nie tracisz, a zyskujesz plan.</p>
                            </div>
                        </div>

                        <div class="quest-step">
                            <div class="step-marker">Lvl 2</div>
                            <div class="step-content">
                                <h3>Zaczynamy</h3>
                                <p>Wchodzimy do gry. Ty realizujesz projekt, a my jako Twoi Buddies robimy za nawigację. Omijamy ślepe zaułki, optymalizujemy Twój czas i wspólnie pompujemy Twój pomysł, aż będzie gotowy na finał.</p>
                            </div>
                        </div>

                        <div class="quest-step highlight-step">
                            <div class="step-marker winner-marker">Lvl 3</div>
                            <div class="step-content">
                                <h3>Indeks zdobyty!</h3>
                                <p>Wygrywasz. Odbierasz indeks na wymarzone studia jeszcze zanim Twoi znajomi zaczną na poważnie stresować się próbną maturą z matematyki.</p>
                            </div>
                        </div>

                        <div class="quest-step">
                            <div class="step-marker">Boost</div>
                            <div class="step-content">
                                <h3>Wyciśnij Maksa</h3>
                                <p>Masz indeks, co dalej? Pokazujemy Ci, jak zamienić go na stypendia, jak wbić się do najlepszych kół naukowych i zacząć studia jak prawdziwy VIP. Only sky is the limit</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="section-block" id="founder-student">
                <div class="container section-content">                    
                    <div class="founder-card">
                        <div class="founder-avatar-wrapper">
                            <div class="founder-avatar placeholder-parent">
                                <img src="img/founder.png" alt="MŁ">
                            </div>
                        </div>
                        <div class="founder-bio">
                            <h3>Cześć, jestem Michał.</h3>
                            <p>Kilka lat temu zorientowałem się, że standardowa ścieżka kucia do matury to pułapka. Zamiast liczyć na szczęście w maju, postanowiłem zagrać w inną grę.</p>
                            <p>Wynik? <strong>Zgromadziłem więcej indeksów na uczelnie, niż mogłem wykorzystać</strong>, zanim moi rówieśnicy w ogóle zaczęli powtarzać materiał. Jako wielokrotny laureat i finalista ogólnopolskich oraz międzynarodowych konkursów, zgarnąłem też prestiżowe stypendia. <strong> Wiem też, jak wygląda to od środka - pracowałem przy organizacji największego konkursu naukowego w Polsce</strong>.</p>
                            <p>Teraz pomagam takim jak Ty zrobić dokładnie to samo. Moi podopieczni pozyskali już łącznie ponad <strong>100 000 zł</strong> z dofinansowań i stypendiów na realizację swoich pomysłów. Pokażę Ci, jak zhakować ten system.</p>
                            
                            <div class="founder-stats">
                                <span class="stat-pill">🏆 Laureat & Finalista</span>
                                <span class="stat-pill">💰 100k+ PLN dla uczniów</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-block" id="student-contact">
                <div class="container section-content">
                    <h2 class="section-title"> <span class="accent-text">Zgadajmy się</span></h2>
                    <p style="margin-bottom: 30px; opacity: 0.8;">Zostawmy nudne formularze na później. Przeklikaj swój status, rzuć namiar, a my odezwiemy się z konkretnym planem gry😉</p>

                    <div class="anti-form-container">
                        <div class="form-step">
                            <h3 class="step-title">1. Trochę o Tobie:</h3>
                            <div class="chip-group">
                                <label class="chip">
                                    <input type="radio" name="skill" value="Koder">
                                    <span class="chip-label">💻 Kodowanie / IT</span>
                                </label>
                                <label class="chip">
                                    <input type="radio" name="skill" value="Matfiz">
                                    <span class="chip-label">📐 Mat-Fiz</span>
                                </label>
                                <label class="chip">
                                    <input type="radio" name="skill" value="Kreatywny">
                                    <span class="chip-label">🎨 Kreatywny</span>
                                </label>
                                <label class="chip">
                                    <input type="radio" name="skill" value="Inne">
                                    <span class="chip-label">🤷 Jeszcze szukam</span>
                                </label>
                            </div>
                        </div>

                        <div class="form-step">
                            <h3 class="step-title">2. Co ci siedzi w głowie?</h3>
                            <div class="chip-group">
                                <label class="chip">
                                    <input type="radio" name="status" value="Mam pomysl">
                                    <span class="chip-label">💡 Mam genialny pomysł</span>
                                </label>
                                <label class="chip">
                                    <input type="radio" name="status" value="Zaczynam">
                                    <span class="chip-label">🔍 Mam chęci, brak pomysłu</span>
                                </label>
                                <label class="chip">
                                    <input type="radio" name="status" value="Panika">
                                    <span class="chip-label">🔥 Matura mnie przeraża, ratujcie</span>
                                </label>
                            </div>
                        </div>

                        <div class="form-step final-step">
                            <h3 class="step-title">3. Gdzie mamy Cię pingnąć?</h3>
                            <div class="input-wrapper">
                                <span class="input-icon">@</span>
                                <input type="text" id="contact-handle" placeholder="Twój Discord, Instagram lub E-mail" autocomplete="off">
                            </div>
                        </div>

                        <button class="cta-button glitch-btn" onclick="submitAntiForm()">Odblokuj Strategię 🚀</button>
                        <div id="success-terminal" class="hidden-terminal">
                            <div class="terminal-header">
                                <span class="dot red"></span>
                                <span class="dot yellow"></span>
                                <span class="dot green"></span>
                                <span class="terminal-title">system_override.exe</span>
                            </div>
                            <div class="terminal-body">
                                <p class="typing-text">> Ustanawianie bezpiecznego połączenia...</p>
                                <p class="typing-text delay-1">> Analiza skilli zakończona. [OK]</p>
                                <p class="typing-text delay-2">> Kompilacja strategii...</p>
                                <p class="typing-text delay-3 success-text">>> ZGŁOSZENIE ZAAKCEPTOWANE. Oczekuj na pinga 🚀</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    parent: {
        heroSubtitle: "zamiast ryzyka",
        heroDesc: "Oferujemy mentoring projektowy, umożliwiający bezstresowy start na uczelni. To inwestycja, która zwraca się w stypendiach i braku czesnego",
        sections: `
            <section class="section-block" id="risk">
                <div class="container section-content">
                    <h2 class="section-title">Zarządzanie <span class="accent-text">Ryzykiem</span></h2>
                    <p style="margin-bottom: 40px; opacity: 0.8; font-size: 1.1rem;">Edukacja to opłacalna inwestycja. <br/>Czy stać Państwa na opłacanie losowości i maturalnej loterii?</p>
                    
                    <div class="premium-matrix-container">
                        
                        <div class="matrix-card risk-card">
                            <div class="matrix-header">
                                <div class="matrix-icon">📉</div>
                                <h3>Standardowe Korepetycje</h3>
                                <p>Model oparty na nadziei i stresie</p>
                            </div>
                            
                            <div class="matrix-body">
                                <div class="data-row">
                                    <span class="data-label">Poziom Ryzyka</span>
                                    <div class="bar-track">
                                        <div class="bar-fill high-risk" style="width: 85%;"></div>
                                    </div>
                                    <span class="data-value text-red">Wysokie</span>
                                </div>
                                <div class="data-row">
                                    <span class="data-label">Przewidywalność</span>
                                    <span class="data-value">Loteria (zależy od arkusza i stresu)</span>
                                </div>
                                <div class="data-row">
                                    <span class="data-label">Model Kosztowy</span>
                                    <span class="data-value text-red">Studnia bez dna (Koszty do maja)</span>
                                </div>
                            </div>
                        </div>

                        <div class="matrix-card safe-card">
                            <div class="matrix-header">
                                <div class="matrix-icon">🏆</div>
                                <h3>Mentoring Projektowy</h3>
                                <p>Zabezpieczony indeks przed maturą</p>
                            </div>
                            
                            <div class="matrix-body">
                                <div class="data-row">
                                    <span class="data-label">Poziom Ryzyka</span>
                                    <div class="bar-track">
                                        <div class="bar-fill low-risk" style="width: 10%;"></div>
                                    </div>
                                    <span class="data-value text-green">Minimalne</span>
                                </div>
                                <div class="data-row">
                                    <span class="data-label">Przewidywalność</span>
                                    <span class="data-value text-green">Gwarancja przed maturą</span>
                                </div>
                                <div class="data-row">
                                    <span class="data-label">Model Kosztowy</span>
                                    <span class="data-value">Pełna świadomość kosztów już teraz</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <div class="roi-summary">
                        <strong>Kalkulacja Zysków:</strong> Zdobyty indeks to nie tylko spokój. To oszczędność na czesnym (do kilkunastu tysięcy złotych rocznie) oraz otwarte drzwi do stypendiów rektorskich już na 1. roku studiów.
                    </div>

                </div>
            </section>
            
            <section class="section-block" id="parent-process">
                <div class="container section-content">
                    <h2 class="section-title">Transparentna <span class="accent-text">Ścieżka Współpracy</span></h2>
                    
                    <div class="social-proof-banner" style="border-left-color: var(--color-accent); background: rgba(74, 222, 128, 0.05);">
                        <span class="proof-emoji">🤝</span>
                        <p>Koniec z nerwicą maturalną w domu. <strong>Zdejmiemy z Państwa barków tę część obowiązków.</strong> <br/>Wyznaczamy cele, pilnujemy terminów i dowozimy wynik, dając pełen wgląd w sytuację.</p>
                    </div>

                    <div class="quest-timeline">
                        
                        <div class="quest-step">
                            <div class="step-marker">01</div>
                            <div class="step-content">
                                <div class="step-header">
                                    <h3>Audyt Potencjału</h3>
                                    <span class="badge free-badge">BEZ ZOBOWIĄZAŃ</span>
                                </div>
                                <p>Zaczynamy od weryfikacji. Sprawdzamy mocne strony ucznia i dopasowujemy optymalną olimpiadę. Gramy w otwarte karty: jeśli nie widzimy szans na sukces w tym modelu, mówimy o tym otwarcie na samym początku. Nic Państwo nie ryzykują, a zyskują konkretny plan.</p>
                            </div>
                        </div>

                        <div class="quest-step">
                            <div class="step-marker">02</div>
                            <div class="step-content">
                                <h3>Mentoring i Raportowanie</h3>
                                <p>Dziecko wchodzi w zorganizowany tryb pracy projektowej z dedykowanym mentorem. Omijamy ślepe zaułki i optymalizujemy czas nauki. Co najważniejsze: <strong>otrzymują Państwo regularne raporty postępów</strong>. Wiesz dokładnie, za co płacisz i na jakim etapie jesteśmy.</p>
                            </div>
                        </div>

                        <div class="quest-step highlight-step">
                            <div class="step-marker winner-marker">03</div>
                            <div class="step-content">
                                <h3>Zabezpieczenie Indeksu</h3>
                                <p>Sukces osiągamy przed dzwonkiem. Tytuł finalisty lub laureata uzyskujemy najczęściej na początku roku. W tym momencie uczeń ma już zagwarantowany wstęp na wymarzoną uczelnię. Maj to formalność, a w domu panuje święty spokój.</p>
                            </div>
                        </div>

                        <div class="quest-step">
                            <div class="step-marker" style="font-size: 1.1rem;">📈</div>
                            <div class="step-content">
                                <h3>Dodatkowe korzyści</h3>
                                <p>Laureaci i finaliści konkursów mają otwarte drzwi do stypendiów rektorskich już na pierwszym roku. Państwo z kolei oszczędzają nerwy i nierzadko kilkadziesiąt tysięcy złotych na czesnym uczelni niepublicznych.</p>
                            </div>
                        </div>
                        </div> <div class="guarantee-box" style="margin-top: 40px;">
                        <div class="guarantee-icon-wrapper">
                            <span class="guarantee-icon">🛡️</span>
                        </div>
                        <div class="guarantee-text">
                            <h3 class="guarantee-title">Co, jeśli plan się nie powiedzie?</h3>
                            <p>Wierzymy w naszą metodykę. Jeśli uczeń zrealizuje założony plan, a mimo to nie przejdzie drugiego etapu olimpiady, <strong>zwracamy 50% zainwestowanych środków</strong>.</p>
                            <p style="margin-top: 10px;">Ponadto, nasz model rozliczeń opiera się w dużej mierze na <em>Success Fee</em> (premii za sukces) – zarabiamy najwięcej wtedy, gdy Państwa dziecko fizycznie zdobywa indeks. <strong>Dzielimy ryzyko na pół.</strong> Jesteśmy w tym razem.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section class="section-block" id="founder-parent">
                <div class="container section-content">                    
                    <div class="founder-card parent-founder-card">
                        <div class="founder-avatar-wrapper">
                            <div class="founder-avatar placeholder-parent">
                                <img src="img/founder.png" alt="MŁ">
                            </div>
                        </div>
                        <div class="founder-bio">
                            <h3>Michał Łukasiak</h3>
                            <span class="founder-title">FOUNDER PROJEKTU</span>
                            
                            <p>Stworzyłem ten program, ponieważ z własnego doświadczenia wiem, jak skutecznie przełożyć potencjał ucznia na wymierne sukcesy naukowe i finansowe.</p>
                            <p>Jako wielokrotny laureat i finalista konkursów ogólnopolskich oraz zdobywca czołowych miejsc na arenie międzynarodowej, <strong>zagwarantowałem sobie wstęp na wymarzone studia na długo przed maturą</strong>. Dziś tę samą metodykę przekazuję Państwa dzieciom. <strong>Co więcej, przez ponad rok pracowałem przy organizacji największego konkursu naukowego w Polsce</strong>.</p>
                            <p>Od lat wspieram zdolną młodzież. Moim celem jest nie tylko zabezpieczenie ich przyszłości akademickiej, ale też budowanie realnego kapitału. Do tej pory pomogłem moim podopiecznym w uzyskaniu dofinansowań i stypendiów o łącznej wartości przekraczającej <strong>100 000 zł</strong></p>
                            
                            <div class="founder-stats parent-stats">
                                <span class="stat-pill">🥇 Międzynarodowe Sukcesy</span>
                                <span class="stat-pill">✅ Sprawdzona metodyka</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="section-block" id="parent-contact">
                <div class="container section-content">
                    <h2 class="section-title"><span class="accent-text">Porozmawiajmy 👋</span></h2>
                    <p style="margin-bottom: 30px; opacity: 0.8;">Ten formularz ułatwi stworzenie przewidywalnej ścieżki na studia. <br/>Po przesłaniu danych, skontaktujemy się z Tobą aby zaprojektować plan rozwoju</p>

                    <div class="parent-form-container" id="parent-form-wrapper">
                        <div class="form-step">
                            <h3 class="step-title">1. Jaki jest główny cel na ten moment?</h3>
                            <div class="chip-group parent-chips">
                                <label class="chip">
                                    <input type="radio" name="parent-status" value="Presja">
                                    <span class="chip-label">📉 Zdjęcie z dziecka presji maturalnej</span>
                                </label>
                                <label class="chip">
                                    <input type="radio" name="parent-status" value="Kierunek">
                                    <span class="chip-label">🧭 Znalezienie konkretnego kierunku</span>
                                </label>
                                <label class="chip">
                                    <input type="radio" name="parent-status" value="Ambicja">
                                    <span class="chip-label">🏆 Dostanie się na topową uczelnię</span>
                                </label>
                            </div>
                        </div>

                        <div class="form-step final-step">
                            <h3 class="step-title">2. Gdzie możemy przesłać propozycję terminu?</h3>
                            <div class="input-row">
                                <div class="input-wrapper">
                                    <span class="input-icon">👤</span>
                                    <input type="text" id="parent-name" placeholder="Imię i Nazwisko" autocomplete="off">
                                </div>
                                <div class="input-wrapper">
                                    <span class="input-icon">✉️</span>
                                    <input type="text" id="parent-contact-info" placeholder="Telefon lub E-mail" autocomplete="off">
                                </div>
                            </div>
                        </div>

                        <button class="cta-button vip-btn" onclick="submitParentForm()">Zarezerwuj Bezpłatną Konsultację</button>

                        <div id="parent-success-card" class="hidden-card">
                            <div class="card-icon">🤝</div>
                            <h3>Formularz przyjęty priorytetowo</h3>
                            <p>Dziękujemy, otrzymaliśmy Twoje dane. <br/>Skontaktujemy się w ciągu 24 godzin</p>
                            <div class="status-badge">
                                <span class="pulse-dot"></span> Status: Oczekuje na kontakt
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    }
};

// --- GLOBALNA FUNKCJA FORMULARZA DLA UCZNIA ---
window.submitAntiForm = function() {
    const handleInput = document.getElementById('contact-handle');
    const handle = handleInput ? handleInput.value : '';

    if (!handle.trim()) {
        alert("Ziomek, zostaw chociaż jakiś namiar na siebie! 😅");
        if(handleInput) handleInput.focus();
        return;
    }

    const container = document.querySelector('.anti-form-container');
    const allSteps = container.querySelectorAll('.form-step');
    const btn = document.querySelector('.glitch-btn');
    const terminal = document.getElementById('success-terminal');
    const typingLines = terminal.querySelectorAll('.typing-text');

    // 1. Zabezpieczenie przycisku
    btn.disabled = true;
    btn.textContent = "HACKING IN PROGRESS...";
    btn.style.opacity = "0.5";
    btn.style.pointerEvents = "none";

    // 2. Zbieranie danych
    const skill = document.querySelector('input[name="skill"]:checked');
    const status = document.querySelector('input[name="status"]:checked');
    
    const formData = {
        Zgloszenie: "UCZEŃ 🎓",
        Klasa_Postaci: skill ? skill.value : "Nie wybrano",
        Status_Misji: status ? status.value : "Nie wybrano",
        Kontakt: handle
    };

    // 3. Wysyłka do Formspree w tle
    fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then(response => {
        if (response.ok) {
            console.log("Dane wysłane do Formspree!");
        } else {
            console.error("Błąd wysyłki do Formspree.");
        }
    }).catch(error => console.error("Błąd sieci:", error));

    // 4. Odpalenie animacji (niezależnie od tego, jak szybko serwer odpowie, robimy show)
    setTimeout(() => {
        allSteps.forEach(step => step.style.display = 'none');
        btn.style.display = 'none';

        container.style.padding = '0';
        container.style.background = 'transparent';
        container.style.border = 'none';
        container.style.boxShadow = 'none';

        terminal.classList.add('show-terminal');

        typingLines.forEach(line => {
            line.classList.add('type-animation');
        });
    }, 800);
};

// --- GLOBALNA FUNKCJA FORMULARZA DLA RODZICA ---
window.submitParentForm = function() {
    const contactInput = document.getElementById('parent-contact-info');
    const nameInput = document.getElementById('parent-name');
    
    const contact = contactInput ? contactInput.value : '';
    const name = nameInput ? nameInput.value : '';

    if (!contact.trim() || !name.trim()) {
        alert("Szanowni Państwo, prosimy o podanie imienia oraz danych kontaktowych, abyśmy mogli się skontaktować.");
        if(!name.trim() && nameInput) nameInput.focus();
        else if(contactInput) contactInput.focus();
        return;
    }

    const container = document.getElementById('parent-form-wrapper');
    const allSteps = container.querySelectorAll('.form-step');
    const btn = document.querySelector('.vip-btn');
    const successCard = document.getElementById('parent-success-card');

    // 1. Stan ładowania
    btn.disabled = true;
    btn.innerHTML = '<span class="pulse-dot" style="display:inline-block; margin-right: 10px;"></span> Przetwarzanie...';
    btn.style.opacity = "0.8";
    btn.style.pointerEvents = "none";

    // 2. Zbieranie danych
    const status = document.querySelector('input[name="parent-status"]:checked');
    
    const formData = {
        Zgloszenie: "RODZIC 👔",
        Główny_Cel: status ? status.value : "Nie wybrano",
        Imie_i_Nazwisko: name,
        Kontakt: contact
    };

    // 3. Wysyłka do Formspree w tle
    fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then(response => {
        if (response.ok) {
            console.log("Dane rodzica wysłane do Formspree!");
        } else {
            console.error("Błąd wysyłki do Formspree.");
        }
    }).catch(error => console.error("Błąd sieci:", error));

    // 4. Eleganckie zniknięcie formularza i pojawienie się potwierdzenia
    setTimeout(() => {
        allSteps.forEach(step => {
            step.style.opacity = '0';
            setTimeout(() => step.style.display = 'none', 300);
        });
        
        btn.style.opacity = '0';
        setTimeout(() => btn.style.display = 'none', 300);

        setTimeout(() => {
            successCard.classList.add('show-card');
        }, 350);
    }, 800);
};

document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[name="user-role"]');
    const heroTextWrapper = document.getElementById('hero-text-wrapper');
    const subtitleEl = document.getElementById('hero-subtitle-dynamic');
    const descEl = document.getElementById('hero-desc-dynamic');
    const dynamicContentEl = document.getElementById('dynamic-content');
    const scrollIndicator = document.getElementById('scroll-indicator');
    const body = document.body;

    function initChartAnimation() {
        const chart = document.querySelector('.chart-container');
        
        if (!chart) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.3 
        });

        observer.observe(chart);
    }

    function switchRole(role) {
        const data = contentData[role];
        
        heroTextWrapper.classList.remove('revealed-state');
        heroTextWrapper.classList.add('blurred-state');

        setTimeout(() => {
            subtitleEl.textContent = data.heroSubtitle;
            descEl.textContent = data.heroDesc;
            
            dynamicContentEl.innerHTML = data.sections;

            if (role === 'student') {
                requestAnimationFrame(() => {
                    initChartAnimation();
                });
            }

            heroTextWrapper.classList.remove('blurred-state');
            heroTextWrapper.classList.add('revealed-state');
            
            body.classList.remove('scroll-locked');
            
            scrollIndicator.classList.add('visible');

        }, 400); 
    }

    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if(e.target.checked) {
                switchRole(e.target.value);
            }
        });
    });
    
    radios.forEach(r => r.checked = false);
});