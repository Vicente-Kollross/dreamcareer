// ── DADOS ──────────────────────────────────────────────

const questions = [
    {
        text: "In 10 years, what feeling do you want waking up every morning to give you?",
        options: [
            { text: "Excited about the day ahead", scores: { builder: 2, leader: 1 } },
            { text: "Calm and secure", scores: { analyzer: 2, helper: 1 } },
            { text: "Proud of what I've built", scores: { builder: 2, leader: 2 } },
            { text: "I honestly have no idea", scores: {} }
        ]
    },
    {
        text: "What would make you feel your career is truly successful?",
        options: [
            { text: "Making enough to never worry about money", scores: { analyzer: 2, leader: 2 } },
            { text: "Doing work that actually matters", scores: { helper: 3 } },
            { text: "Being known as the best at what I do", scores: { builder: 3 } },
            { text: "Having time for the people I love", scores: { helper: 2 } }
        ]
    },
    {
        text: "If money didn't matter for the next five years, how would you spend your time?",
        options: [
            { text: "Building or creating something", scores: { builder: 3 } },
            { text: "Helping or teaching people", scores: { helper: 3 } },
            { text: "Solving complex problems", scores: { analyzer: 3 } },
            { text: "Leading and influencing others", scores: { leader: 3 } }
        ]
    },
    {
        text: "What does the environment where you do your best work look like?",
        options: [
            { text: "Alone, deep in focus, no interruptions", scores: { builder: 2, analyzer: 2 } },
            { text: "Collaborating with a team toward something bigger", scores: { leader: 2, helper: 1 } },
            { text: "One-on-one, really connecting with someone", scores: { helper: 3 } },
            { text: "Constantly moving, different challenges every day", scores: { leader: 2, builder: 1 } }
        ]
    },
    {
        text: "How do you really think about money?",
        options: [
            { text: "It's the scoreboard — I want a lot of it", scores: { leader: 2, analyzer: 2 } },
            { text: "It's security — I just never want to worry about it", scores: { analyzer: 2, helper: 1 } },
            { text: "It's freedom — enough to live how I want", scores: { builder: 2, leader: 1 } },
            { text: "It's complicated — I feel guilty wanting more", scores: { helper: 2 } }
        ]
    },
    {
        text: "At the end of your career, what legacy do you want to leave?",
        options: [
            { text: "Something I built that still exists", scores: { builder: 3 } },
            { text: "People whose lives I changed", scores: { helper: 3 } },
            { text: "A system or solution that still works", scores: { analyzer: 3 } },
            { text: "A team or movement I inspired", scores: { leader: 3 } }
        ]
    },
    {
        text: "How do you handle uncertainty?",
        options: [
            { text: "I hate it — I need to know what's coming", scores: { analyzer: 2, helper: 1 } },
            { text: "I tolerate it if the reward is worth it", scores: { builder: 2, leader: 1 } },
            { text: "I thrive in it — stability bores me", scores: { leader: 3, builder: 2 } },
            { text: "I've never really thought about it", scores: {} }
        ]
    },
    {
        text: "What's the single biggest thing holding you back right now, if you're honest?",
        options: [
            { text: "I don't know what I actually want", scores: {} },
            { text: "I know what I want but don't know how to get there", scores: { analyzer: 1 } },
            { text: "I'm afraid I'm not good enough", scores: { helper: 1 } },
            { text: "I keep waiting for the right moment", scores: { leader: 1, builder: 1 } }
        ]
    },
    {
        text: "How much time can you realistically invest in changing your career path right now?",
        options: [
            { text: "A few hours a week — life is busy", scores: { analyzer: 1, helper: 1 } },
            { text: "I can go all in if I know it's worth it", scores: { builder: 2, leader: 2 } },
            { text: "I'm not sure — depends on what it takes", scores: {} },
            { text: "I've been ready, I just needed a direction", scores: { leader: 1, builder: 1 } }
        ]
    },
    {
        text: "Have you tried to change your career path before?",
        options: [
            { text: "Yes, and I gave up — it got too hard", scores: { helper: 1 } },
            { text: "Yes, but I went in the wrong direction", scores: { analyzer: 1 } },
            { text: "No, I never knew where to start", scores: {} },
            { text: "I'm in the middle of trying right now", scores: { leader: 1, builder: 1 } }
        ]
    },
    {
        text: "What does your ideal week look like?",
        options: [
            { text: "Working remotely, anywhere in the world", scores: { builder: 2, analyzer: 1 } },
            { text: "In an office, surrounded by people and energy", scores: { leader: 2, helper: 1 } },
            { text: "Flexible — sometimes office, sometimes home", scores: { analyzer: 1, builder: 1 } },
            { text: "Outdoors, moving, not stuck at a desk", scores: { helper: 2 } }
        ]
    },
    {
        text: "What's the one thing about your current path that keeps you awake at night?",
        options: [
            { text: "That I chose wrong and it's too late", scores: { helper: 1 } },
            { text: "That I'm wasting time", scores: { builder: 1, leader: 1 } },
            { text: "That I'll never make enough", scores: { analyzer: 2, leader: 1 } },
            { text: "That I don't even know what I want", scores: {} }
        ]
    },
    {
        text: "How much of your current life matches the life you once imagined for yourself?",
        options: [
            { text: "Almost none", scores: { leader: 1 } },
            { text: "Some parts, but not the important ones", scores: { builder: 1 } },
            { text: "More than I expected", scores: { analyzer: 1 } },
            { text: "Pretty close actually", scores: { helper: 1 } }
        ]
    },
    {
        text: "Imagine a Monday you actually look forward to—what does that day look like?",
        options: [
            { text: "Shipping something I built or designed", scores: { builder: 2 } },
            { text: "Helping someone solve a real problem", scores: { helper: 2 } },
            { text: "Diving deep into data or a complex case", scores: { analyzer: 2 } },
            { text: "Leading a team toward a big goal", scores: { leader: 2 } }
        ]
    },
    {
        text: "If you woke up tomorrow in the career that's truly right for you, what would you feel first?",
        options: [
            { text: "Relief — finally", scores: { helper: 1, analyzer: 1 } },
            { text: "Excitement — like I can't wait to start", scores: { builder: 2, leader: 1 } },
            { text: "Peace — like everything finally makes sense", scores: { analyzer: 2, helper: 1 } },
            { text: "Disbelief — I'm not sure I deserve that", scores: { helper: 1 } }
        ]
    }
]

const profiles = {
    builder: {
        name: "The Builder",
        tagline: "You're driven by building things from the ground up and seeing tangible results.",
        careers: ["Software Engineering", "Product Management", "Architecture"],
        target: "CTO or VP of Product",
        salaryBase: "$130,000 – $180,000/year",
        salaryTop: "$350,000 – $800,000+/year",
        timeToTop: "8 to 15 years",
        universities: "MIT, Stanford, Carnegie Mellon, UC Berkeley",
        wisdom: "The market doesn't reward perfection — it rewards speed. Learn to ship."
    },
    helper: {
        name: "The Helper",
        tagline: "You're driven by healing, supporting, and elevating the human condition.",
        careers: ["Healthcare / Nursing", "Clinical Psychology", "Social Work"],
        target: "Chief Nursing Officer or Private Practice Owner",
        salaryBase: "$75,000 – $100,000/year",
        salaryTop: "$200,000 – $400,000+/year",
        timeToTop: "6 to 12 years",
        universities: "Johns Hopkins, NYU, UCSF, UPenn, Columbia",
        wisdom: "You save more lives by building efficient systems than by seeing one patient at a time."
    },
    analyzer: {
        name: "The Analyzer",
        tagline: "You're driven by pure logic, uncovering hidden patterns, and data-backed decisions.",
        careers: ["Data Science & AI", "Quantitative Finance", "Actuarial Science"],
        target: "Chief Data Officer or Managing Director on Wall Street",
        salaryBase: "$110,000 – $160,000/year",
        salaryTop: "$300,000 – $1,000,000+/year",
        timeToTop: "8 to 15 years",
        universities: "Harvard, UChicago, Wharton, Princeton, MIT",
        wisdom: "Data doesn't make decisions — people do. Master Data Storytelling."
    },
    leader: {
        name: "The Leader",
        tagline: "You're driven by inspiring vision, driving strategy, and aligning talent toward collective victory.",
        careers: ["Management Consulting", "Corporate Operations", "Sales Leadership"],
        target: "CEO, McKinsey/BCG Partner, or Chief Revenue Officer",
        salaryBase: "$120,000 – $180,000/year",
        salaryTop: "$500,000 – several million/year",
        timeToTop: "15 to 20 years",
        universities: "Harvard Business School, Stanford GSB, Wharton, Kellogg, Booth",
        wisdom: "Your value is not measured by what you do, but by who you empower."
    }
}

const results = {
    builder: {
        preview: {
            hook: "Your answers reveal someone who measures life by what they create — not what they're told to do.",
            partial: "We identified 3 high-income careers where Builders consistently report the highest satisfaction rates — and the clearest path from where you are now to a life you'd actually want.",
            teaser: "One of them has an average starting salary above $130,000 — with a realistic path to $500k+ within a decade."
        },
        full: {
            intro: "Builders are rare. Most people consume — you create. That instinct is the foundation of the highest-earning and most fulfilling careers in the modern economy.",
            careers: [
                {
                    title: "Software Engineering",
                    why: "The most direct path for a Builder. You write code that becomes a product millions use. Every feature you ship is something you made from nothing.",
                    levels: [
                        { level: "Entry Level (0–2 years)", salary: "$95,000 – $130,000/year", focus: "Learn the stack, ship small features, survive code reviews." },
                        { level: "Mid-Level (2–5 years)", salary: "$130,000 – $180,000/year", focus: "Own entire features. Lead small squads." },
                        { level: "Senior (5–10 years)", salary: "$180,000 – $280,000/year", focus: "Architect systems. Make technical decisions that affect millions." },
                        { level: "Staff / Principal (10+ years)", salary: "$280,000 – $500,000+/year", focus: "Define the technical direction of the company." }
                    ],
                    path: "CS degree or strong portfolio. Target: Google, Meta, Stripe, or a Series B startup for maximum learning and equity.",
                    secret: "In Silicon Valley, the engineer who ships the fastest and communicates clearly wins. Learn to write. Learn to speak in meetings. Code is 60% of the job."
                },
                {
                    title: "Product Management",
                    why: "Builders who understand both technology and people become PMs — and PMs decide what gets built, why, and for whom.",
                    levels: [
                        { level: "Associate PM (0–2 years)", salary: "$100,000 – $140,000/year", focus: "Write specs. Talk to users. Prioritize ruthlessly." },
                        { level: "PM (2–5 years)", salary: "$140,000 – $190,000/year", focus: "Own a product line. Work with engineering and design." },
                        { level: "Senior PM (5–8 years)", salary: "$190,000 – $260,000/year", focus: "Drive product strategy. Influence company roadmap." },
                        { level: "VP of Product (8–15 years)", salary: "$300,000 – $800,000+/year", focus: "Define the vision. Manage a team of PMs. Massive equity." }
                    ],
                    path: "Start in engineering or design, then transition. APM programs at Google, Meta, and Microsoft are the fastest entry points.",
                    secret: "The best PMs are obsessive about the user's problem — not in love with their own solution. Every week, talk to at least 3 real users."
                },
                {
                    title: "Technical Entrepreneurship",
                    why: "The highest-risk, highest-reward path for a Builder. You build the company, not just the product.",
                    levels: [
                        { level: "Pre-revenue (Year 0–1)", salary: "$0 – ramen money", focus: "Validate the idea. Find 10 people who pay before you build." },
                        { level: "Early Stage (Year 1–3)", salary: "Depends on fundraising", focus: "Product-market fit. First 100 customers." },
                        { level: "Growth Stage (Year 3–7)", salary: "$200,000 – $500,000+/year + equity", focus: "Scale what works. Stop doing everything yourself." },
                        { level: "Exit / Scale (Year 7+)", salary: "$1,000,000 – unlimited", focus: "Acquisition, IPO, or profitable independence." }
                    ],
                    path: "Apply to YCombinator. Build in public on X/Twitter. Your first startup will probably fail. The second has a much higher chance.",
                    secret: "Spend 50% of your first year selling, not coding. The market doesn't care how elegant your architecture is."
                }
            ],
            universities: "MIT, Stanford, Carnegie Mellon, UC Berkeley, Caltech — for engineering. Wharton or Harvard MBA opens the VP Product track faster.",
            timeline: "Realistic timeline to $200k+: 5–7 years. To $500k+: 10–12 years, or earlier with significant startup equity.",
            finalMessage: "The Builder's advantage is that you create value that didn't exist before. In the US economy, that is the most rewarded skill of the 21st century. The only thing standing between you and that life is years of showing up and shipping things — even when they're not perfect."
        }
    },
    helper: {
        preview: {
            hook: "Your answers reveal someone who finds no meaning in work unless it changes someone's life.",
            partial: "We identified 3 careers where Helpers report the highest rates of long-term fulfillment — and earn far more than most people assume.",
            teaser: "One of them has a path to $300,000+/year — while genuinely improving people's lives every single day."
        },
        full: {
            intro: "Helpers are the backbone of civilization. But the mistake most Helpers make is choosing impact over income — as if the two are mutually exclusive. They are not.",
            careers: [
                {
                    title: "Advanced Practice Nursing",
                    why: "The fastest-growing and highest-paid clinical role that doesn't require a medical degree. Nurse Practitioners diagnose, treat, and prescribe with significant autonomy.",
                    levels: [
                        { level: "Registered Nurse (0–3 years)", salary: "$75,000 – $100,000/year", focus: "Master clinical skills. Choose your specialty." },
                        { level: "Nurse Practitioner (3–6 years)", salary: "$110,000 – $150,000/year", focus: "Diagnose and treat independently." },
                        { level: "Specialized NP (6–12 years)", salary: "$150,000 – $220,000/year", focus: "Psychiatric, anesthesia, or acute care specializations." },
                        { level: "Private Practice / Director (12+ years)", salary: "$200,000 – $400,000+/year", focus: "Own your practice. Set your hours. Choose your patients." }
                    ],
                    path: "BSN (4 years) → RN license → MSN or DNP (2–3 more years). Best states: California, New York, Texas.",
                    secret: "The Helpers who reach the top don't just care deeply — they learn healthcare management. One administrator makes more impact than ten individual clinicians."
                },
                {
                    title: "Clinical Psychology / Private Therapy",
                    why: "The mental health crisis in the US has created massive demand for skilled therapists. Private practice therapists choose their own hours, clients, and specializations.",
                    levels: [
                        { level: "Intern / Associate (0–3 years)", salary: "$45,000 – $65,000/year", focus: "Supervised hours. Find your therapeutic approach." },
                        { level: "Licensed Therapist (3–6 years)", salary: "$75,000 – $110,000/year", focus: "Build a caseload. Specialize in a niche." },
                        { level: "Established Private Practice (6–12 years)", salary: "$120,000 – $200,000/year", focus: "Full caseload, premium rates." },
                        { level: "Group Practice Owner (12+ years)", salary: "$200,000 – $350,000+/year", focus: "Hire other therapists. Passive income." }
                    ],
                    path: "Master's in Counseling or Clinical Psychology → state licensure. Columbia, NYU, and Northwestern are top programs.",
                    secret: "The therapists who earn the most build a cash-pay practice targeting high-income clients. Learning marketing is not selling out — it's how you help more people."
                },
                {
                    title: "Healthcare Administration",
                    why: "Every hospital needs leaders who understand both the human side of healthcare and how to run an organization.",
                    levels: [
                        { level: "Administrator (0–3 years)", salary: "$60,000 – $85,000/year", focus: "Operations, scheduling, compliance." },
                        { level: "Department Manager (3–7 years)", salary: "$90,000 – $130,000/year", focus: "Lead a clinical or operational department." },
                        { level: "Director of Operations (7–12 years)", salary: "$130,000 – $200,000/year", focus: "Multi-department oversight. Strategic planning." },
                        { level: "Chief Nursing Officer (12+ years)", salary: "$200,000 – $450,000+/year", focus: "C-suite. Hospital-wide decisions. Maximum impact." }
                    ],
                    path: "Undergraduate in health administration → MHA or MBA with healthcare focus. Johns Hopkins, Michigan, and Minnesota are the best programs.",
                    secret: "If you want the C-suite, start taking management responsibilities within your first 5 years — not 10."
                }
            ],
            universities: "Johns Hopkins, UCSF, UPenn, NYU, Columbia, Northwestern — for clinical. Michigan and Minnesota for healthcare administration.",
            timeline: "Realistic timeline to $150k+: 6–8 years. To $300k+: 12–15 years in private practice or hospital leadership.",
            finalMessage: "The Helper's greatest trap is believing that wanting to earn well is selfish. It is not. A financially secure Helper helps more people, for longer, without burning out. Build your career like you mean it."
        }
    },
    analyzer: {
        preview: {
            hook: "Your answers reveal someone who sees patterns where others see noise — one of the most valuable skills in the modern economy.",
            partial: "We identified 3 careers where Analyzers consistently outperform their peers in income and career longevity.",
            teaser: "One of these paths has a realistic trajectory to $1,000,000+/year in total compensation — and it starts with skills you can begin building today."
        },
        full: {
            intro: "The world runs on data, but very few people can actually think with it. Analyzers are rare — and the US economy pays a premium for rare.",
            careers: [
                {
                    title: "Data Science & Machine Learning",
                    why: "Every major company is hiring people who can turn raw data into decisions. Data Scientists are among the highest-paid professionals under 35 in the US.",
                    levels: [
                        { level: "Junior Data Scientist (0–2 years)", salary: "$95,000 – $130,000/year", focus: "Clean data, build models, present findings." },
                        { level: "Data Scientist (2–5 years)", salary: "$130,000 – $180,000/year", focus: "Own analytical projects end-to-end." },
                        { level: "Senior DS / ML Engineer (5–10 years)", salary: "$180,000 – $280,000/year", focus: "Production ML systems. Cross-functional influence." },
                        { level: "Principal / Staff DS (10+ years)", salary: "$280,000 – $600,000+/year", focus: "Define data strategy. Massive equity at top companies." }
                    ],
                    path: "Strong foundation in Python, statistics, and SQL. Target: Google, Meta, Apple, Amazon, or high-growth startups for equity upside.",
                    secret: "Learn to communicate like a storyteller — every analysis needs a clear 'so what?' that a non-technical executive can act on in 60 seconds."
                },
                {
                    title: "Quantitative Finance",
                    why: "Wall Street pays more for mathematical precision than almost any other field. Quants build the algorithms that move billions of dollars.",
                    levels: [
                        { level: "Junior Quant (0–3 years)", salary: "$150,000 – $250,000/year", focus: "Build and backtest trading models." },
                        { level: "Quant Researcher (3–7 years)", salary: "$300,000 – $600,000/year", focus: "Develop original alpha-generating strategies." },
                        { level: "Senior Quant (7–15 years)", salary: "$500,000 – $2,000,000+/year", focus: "Manage capital. P&L responsibility." },
                        { level: "Partner / Fund Manager (15+ years)", salary: "$1,000,000 – $10,000,000+/year", focus: "Run strategies independently." }
                    ],
                    path: "PhD or Master's in Mathematics, Physics, or Statistics. Target firms: Two Sigma, Citadel, Jane Street, DE Shaw.",
                    secret: "Jane Street tests how you think under pressure and explain your reasoning out loud. Practice competitive programming and walk through your logic clearly in real time."
                },
                {
                    title: "Management Consulting (Analytics Track)",
                    why: "McKinsey, BCG, and Bain hire Analyzers to solve the most complex business problems in the world — then pay them to travel, learn fast, and build a network that opens every door.",
                    levels: [
                        { level: "Business Analyst (0–2 years)", salary: "$100,000 – $140,000/year", focus: "Analyze data, build models, present to clients." },
                        { level: "Associate (2–5 years)", salary: "$150,000 – $220,000/year", focus: "Lead workstreams. Client management." },
                        { level: "Engagement Manager (5–8 years)", salary: "$220,000 – $350,000/year", focus: "Run projects. Develop client relationships." },
                        { level: "Partner (8–15 years)", salary: "$500,000 – $2,000,000+/year", focus: "Bring in clients. Lead the firm." }
                    ],
                    path: "Top GPA + case interview preparation. MBA from an M7 school is the most reliable path to the Associate level.",
                    secret: "Consulting is a people business disguised as an analytics business. Develop your emotional intelligence as deliberately as your Excel skills."
                }
            ],
            universities: "Harvard, MIT, UChicago, Princeton, Wharton — for finance and consulting. Stanford and CMU for data science.",
            timeline: "Realistic timeline to $200k+: 3–5 years in finance or consulting. To $500k+: 7–10 years with consistent performance.",
            finalMessage: "The Analyzer's superpower is seeing what others miss. In a world drowning in data and starving for insight, that superpower is worth more every year. The only upgrade you need is learning to make other people feel what you see."
        }
    },
    leader: {
        preview: {
            hook: "Your answers reveal someone who doesn't just want to succeed — you want to bring others with you.",
            partial: "We identified 3 careers where Leaders reach the highest levels of income and influence in the US market.",
            teaser: "One of these paths has performance bonuses that alone can exceed $1,000,000 — with no ceiling."
        },
        full: {
            intro: "Leaders are not born — they are built through repeated, high-stakes decisions made under pressure. The US economy has one rule: the person who aligns people toward a result gets paid more than anyone who executes that result.",
            careers: [
                {
                    title: "Management Consulting",
                    why: "The fastest education in business that money can buy — except they pay you. Consultants solve C-suite problems across industries, building a network no MBA alone can replicate.",
                    levels: [
                        { level: "Business Analyst (0–2 years)", salary: "$100,000 – $140,000/year", focus: "Learn how companies work from the inside." },
                        { level: "Associate (2–5 years)", salary: "$150,000 – $230,000/year", focus: "Lead client workstreams. Present to executives." },
                        { level: "Engagement Manager (5–8 years)", salary: "$230,000 – $380,000/year", focus: "Own client relationships. Build your book of business." },
                        { level: "Partner (8–15 years)", salary: "$600,000 – $2,000,000+/year", focus: "You are the business. Maximum autonomy." }
                    ],
                    path: "Top GPA + relentless case interview prep. McKinsey, BCG, and Bain recruit from Harvard, Wharton, Princeton, Yale, MIT, Stanford, and Dartmouth.",
                    secret: "Most candidates prepare for the analytical part and neglect the leadership narrative. Partners hire people they want to put in front of their most important clients."
                },
                {
                    title: "Corporate Operations & General Management",
                    why: "Every company needs someone who can translate strategy into execution. This is the core of what Leaders do — and the path to CEO runs directly through it.",
                    levels: [
                        { level: "Operations Analyst (0–2 years)", salary: "$70,000 – $100,000/year", focus: "Process improvement. Cross-functional projects." },
                        { level: "Operations Manager (2–6 years)", salary: "$100,000 – $160,000/year", focus: "Lead teams. Own KPIs. Drive quarterly results." },
                        { level: "Director of Operations (6–12 years)", salary: "$160,000 – $280,000/year", focus: "Run business units. Report to C-suite." },
                        { level: "COO / CEO (12–20 years)", salary: "$400,000 – several million/year", focus: "Run the company. Equity. Legacy." }
                    ],
                    path: "Business or Engineering undergraduate → 3–5 years of execution → MBA from M7 → accelerated VP track. Best training grounds: Amazon, P&G, high-growth tech.",
                    secret: "The Leaders who become CEOs made the most decisions under uncertainty — and learned fastest from the ones that failed. Seek high-stakes situations early, even when you feel unready."
                },
                {
                    title: "Sales Leadership & Revenue",
                    why: "The person who brings in the revenue has more job security and earning potential than almost anyone else. Sales Leaders who build and scale teams are among the highest-paid in tech.",
                    levels: [
                        { level: "Account Executive (0–3 years)", salary: "$80,000 – $150,000/year", focus: "Close deals. Learn the full sales cycle." },
                        { level: "Sales Manager (3–6 years)", salary: "$130,000 – $200,000/year", focus: "Lead a team of AEs. Hit team quota." },
                        { level: "VP of Sales (6–12 years)", salary: "$200,000 – $400,000/year", focus: "Build the sales org. Own revenue targets." },
                        { level: "Chief Revenue Officer (12+ years)", salary: "$400,000 – $1,500,000+/year", focus: "Own all revenue. Report to CEO. Significant equity." }
                    ],
                    path: "No specific degree required — results are the credential. Start as an AE at a high-growth SaaS company. Salesforce and HubSpot have the best sales training in the industry.",
                    secret: "The best sales leaders don't micromanage — they recruit obsessively and remove obstacles. Your job is to make your team's number, not to be the best individual seller."
                }
            ],
            universities: "Harvard Business School, Stanford GSB, Wharton, Kellogg, Booth, Columbia, MIT Sloan. For undergrad: Harvard, Princeton, Yale, Dartmouth, Penn.",
            timeline: "Realistic timeline to $200k+: 5–8 years. To $500k+: 10–15 years in consulting or corporate. To $1M+: 15–20 years as Partner or C-suite.",
            finalMessage: "The Leader's defining moment is not when they succeed — it's when their team succeeds because of the environment they created. Build that skill deliberately, from day one. Because the higher you go, the less it matters what you know — and the more it matters who follows you."
        }
    }
}

// ── ESTADO ─────────────────────────────────────────────

let currentQuestion = 0
let builder = 0
let helper = 0
let analyzer = 0
let leader = 0

// ── FUNÇÕES DE NAVEGAÇÃO ────────────────────────────────

function show(id) {
    document.querySelectorAll('section').forEach(s => s.style.display = 'none')
    document.getElementById(id).style.display = 'flex'
    document.getElementById(id).style.flexDirection = 'column'
}

function startQuiz() {
    show('quiz')
    showQuestion()
}

// ── QUIZ ────────────────────────────────────────────────

function showQuestion() {
    const q = questions[currentQuestion]
    const progress = ((currentQuestion) / questions.length) * 100

    document.getElementById('progress-fill').style.width = progress + '%'
    document.getElementById('question-count').textContent = `Question ${currentQuestion + 1} of ${questions.length}`
    document.getElementById('question-text').textContent = q.text

    const grid = document.getElementById('options-grid')
    grid.innerHTML = ''

    q.options.forEach(option => {
        const btn = document.createElement('button')
        btn.className = 'option-btn'
        btn.textContent = option.text
        btn.onclick = () => selectOption(option.scores)
        grid.appendChild(btn)
    })
}

function selectOption(scores) {
    if (scores.builder) builder += scores.builder
    if (scores.helper) helper += scores.helper
    if (scores.analyzer) analyzer += scores.analyzer
    if (scores.leader) leader += scores.leader

    currentQuestion++

    if (currentQuestion < questions.length) {
        showQuestion()
    } else {
        showLoading()
    }
}

// ── LOADING ─────────────────────────────────────────────

function showLoading() {
    show('loading')
    setTimeout(showResult, 3000)
}

// ── RESULTADO ───────────────────────────────────────────

function showResult() {
    let topProfile = 'builder'
    if (helper > builder && helper > analyzer && helper > leader) topProfile = 'helper'
    else if (analyzer > builder && analyzer > helper && analyzer > leader) topProfile = 'analyzer'
    else if (leader > builder && leader > helper && leader > analyzer) topProfile = 'leader'

    const profile = profiles[topProfile]
    const result = results[topProfile]

    document.getElementById('profile-tag').textContent = profile.name
    document.getElementById('result-title').textContent = profile.name
    document.getElementById('result-hook').textContent = result.preview.hook

    document.getElementById('preview-card').innerHTML = `
        <p>${result.preview.partial}</p>
        <p class="teaser">${result.preview.teaser}</p>
    `

    document.getElementById('paywall-block').innerHTML = `
        <div class="paywall-block">
            <div class="paywall-icon">🔒</div>
            <h3 class="paywall-title">Unlock your full career report</h3>
            <p class="paywall-sub">Get your complete personalized analysis — careers, salaries by level, exact timelines, and the path to get there.</p>
            <div class="paywall-items">
                <div class="paywall-item">3 careers matched to your exact profile</div>
                <div class="paywall-item">Salary at every career level</div>
                <div class="paywall-item">Realistic timeline to reach each level</div>
                <div class="paywall-item">The insider secret most people learn too late</div>
                <div class="paywall-item">Best universities and programs in the US</div>
            </div>
            <button class="btn-primary" onclick="window.open('https://mydreamcareer.gumroad.com/l/dreamcareer', '_blank')">Unlock my report — $7</button>
            <p class="paywall-price">One-time payment · Instant access · Based on real US market data</p>
        </div>
    `

    show('result')
}

function unlockResult() {
    const topProfile = document.getElementById('profile-tag').textContent.toLowerCase().replace('the ', '')
    const result = results[topProfile] || results['builder']

    document.getElementById('paywall-block').style.display = 'none'

    document.getElementById('full-result').innerHTML = `
        <p class="result-intro">${result.full.intro}</p>
        ${result.full.careers.map((career, i) => `
            <div class="career-block">
                <p class="career-number">Career ${i + 1} of 3</p>
                <h3 class="career-title">${career.title}</h3>
                <p class="career-why">${career.why}</p>
                <div class="levels-table">
                    ${career.levels.map(l => `
                        <div class="level-row">
                            <span class="level-name">${l.level}</span>
                            <span class="level-salary">${l.salary}</span>
                            <span class="level-focus">${l.focus}</span>
                        </div>
                    `).join('')}
                </div>
                <p class="section-label">The path</p>
                <p class="section-text">${career.path}</p>
                <p class="section-label">The insider secret</p>
                <div class="secret-box">${career.secret}</div>
            </div>
        `).join('')}
        <div class="career-block">
            <p class="section-label">Best universities & programs</p>
            <p class="section-text">${result.full.universities}</p>
            <p class="section-label">Realistic timeline</p>
            <p class="section-text">${result.full.timeline}</p>
        </div>
        <div class="final-message">
            <p class="final-message-text">"${result.full.finalMessage}"</p>
        </div>
    `

    document.getElementById('full-result').style.display = 'block'
}