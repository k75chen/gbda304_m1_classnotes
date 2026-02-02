import { useState } from "react";

const chapters = [
  {
    id: 1,
    title: "Overview of Marketing",
    color: "#e8533f",
    accent: "#fde8e5",
    icon: "📢",
    summary: `Marketing is the set of business practices designed to plan for and present an organization's products or services in ways that build effective customer relationships. At its core, marketing is about creating, communicating, and delivering value to customers — and managing customer relationships to benefit the organization.`,
    sections: [
      {
        heading: "The 4 Ps (Marketing Mix)",
        content: `Every marketing decision revolves around the marketing mix — four key levers a firm controls:`,
        points: [
          {
            label: "Product",
            desc: "What you're offering — goods, services, or ideas. Value is created through the product itself.",
            example:
              "Rolex doesn't just sell a watch — it sells status and prestige.",
          },
          {
            label: "Price",
            desc: "Everything the buyer gives up in exchange: money, time, and energy.",
            example:
              "A luxury car priced at $80K+ signals exclusivity to a specific target market.",
          },
          {
            label: "Place",
            desc: "All activities to get the product to the right customer at the right time (distribution & supply chain).",
            example:
              "Amazon's logistics network ensures next-day delivery almost anywhere.",
          },
          {
            label: "Promotion",
            desc: "Communication activities to inform, persuade, and remind customers.",
            example:
              "Oatly first promoted oat milk to coffee shops, then used eye-catching packaging in supermarkets.",
          },
        ],
      },
      {
        heading: "Satisfying Needs vs. Wants",
        content: `Marketers must distinguish between needs (basic necessities) and wants (how a consumer chooses to fulfill that need). Identifying the right target market is critical.`,
        points: [
          {
            label: "Need",
            desc: "The basic requirement.",
            example: "Staying hydrated.",
          },
          {
            label: "Want",
            desc: "How they choose to fulfill it.",
            example: "A Hydro Flask — sturdy, reusable, keeps water cold.",
          },
        ],
      },
      {
        heading: "The Four Orientations of Marketing",
        content: `Firms have evolved through four major orientations over time:`,
        points: [
          {
            label: "Product Orientation",
            desc: "Focus on making the best product, assuming customers will buy it.",
          },
          {
            label: "Sales Orientation",
            desc: "Focus on selling and aggressive promotion to move products.",
          },
          {
            label: "Market Orientation",
            desc: "Focus on understanding customer needs first, then building products.",
          },
          {
            label: "Value-Based Orientation",
            desc: "Focus on balancing customer benefits with costs, building long-term relationships, and leveraging technology (e.g., social media).",
            example:
              "Starbucks developed a strawless lid to meet sustainability demands — showing a value-based approach.",
          },
        ],
      },
      {
        heading: "How Firms Become Value-Driven",
        content: `Four key activities drive value:`,
        points: [
          {
            label: "Share information",
            desc: "Be transparent with customers about what you offer.",
          },
          {
            label: "Balance benefits & costs",
            desc: "IKEA focuses on low prices and great design — cutting less strategic extras.",
            example: "",
          },
          {
            label: "Build relationships",
            desc: "Take a long-term view; use data to maintain customer connections.",
          },
          {
            label: "Connect via social media",
            desc: "91% of North American companies use social media for marketing.",
          },
        ],
      },
    ],
    keyTerms: [
      {
        term: "Marketing",
        def: "Business practices to plan and present products/services to build customer relationships.",
      },
      {
        term: "Marketing Mix (4 Ps)",
        def: "Product, Price, Place, and Promotion — the four controllable variables.",
      },
      {
        term: "Target Market",
        def: "The customer segment a firm wants to sell to.",
      },
      {
        term: "Value-Based Orientation",
        def: "A marketing approach focused on delivering value by balancing customer benefits and costs.",
      },
      {
        term: "Exchange",
        def: "The act of trading something of value (money, time) for a product or service.",
      },
    ],
  },
  {
    id: 2,
    title: "Marketing Strategies & Plans",
    color: "#3a7bd5",
    accent: "#e5eef8",
    icon: "🎯",
    summary: `A marketing strategy identifies a firm's target market(s), its marketing mix (4 Ps), and the basis for building a sustainable competitive advantage. A marketing plan is the roadmap that outlines how the strategy will be executed step by step.`,
    sections: [
      {
        heading: "Sustainable Competitive Advantage",
        content: `A firm's edge over competitors that is maintained over time. Built through:`,
        points: [
          {
            label: "Customer Excellence",
            desc: "Retaining loyal customers and providing outstanding service.",
          },
          {
            label: "Operational Excellence",
            desc: "Efficient operations, great supply chain, and strong supplier relationships.",
          },
          {
            label: "Product Excellence",
            desc: "High perceived value + effective branding and positioning.",
          },
          {
            label: "Locational Excellence",
            desc: "Being in the right place.",
            example:
              "Starbucks and Tim Hortons are masters of location strategy.",
          },
        ],
      },
      {
        heading: "The 5-Step Marketing Plan",
        content: `The marketing plan is not strictly sequential — steps can loop back based on environmental forces.`,
        points: [
          {
            label: "Step 1: Define Mission & Objectives",
            desc: "Set the 'why' for the business.",
            example:
              "Tim Hortons: 'We work hard to deliver the highest-quality products and services and strive to be a leader in everything we do.'",
          },
          {
            label: "Step 2: Situation Analysis (SWOT)",
            desc: "Evaluate internal strengths/weaknesses and external opportunities/threats.",
          },
          {
            label: "Step 3: Identify Opportunities (STP)",
            desc: "Segment the market, choose a target, and position your brand.",
          },
          {
            label: "Step 4: Implement Marketing Mix",
            desc: "Execute the 4 Ps and allocate resources.",
          },
          {
            label: "Step 5: Evaluate with Metrics",
            desc: "Measure performance using financial and social responsibility metrics.",
          },
        ],
      },
      {
        heading: "SWOT Analysis",
        content: `A strategic tool that examines four dimensions:`,
        points: [
          {
            label: "Strengths (Internal +)",
            desc: "Superior resources, strong brand, loyal customers, proprietary tech.",
          },
          {
            label: "Weaknesses (Internal −)",
            desc: "Lack of brand recognition, limited resources, poor location.",
          },
          {
            label: "Opportunities (External +)",
            desc: "New markets, competitors exiting, acquisitions.",
          },
          {
            label: "Threats (External −)",
            desc: "New competitors, regulation changes, economic downturns, disruptive tech.",
          },
        ],
      },
      {
        heading: "Growth Strategies & BCG Matrix",
        content: `The Boston Consulting Group (BCG) Matrix is a portfolio analysis tool that plots a firm's products/divisions on two axes: market growth rate and relative market share. It classifies them as Stars, Cash Cows, Question Marks, or Dogs to guide resource allocation.`,
        points: [],
      },
    ],
    keyTerms: [
      {
        term: "Marketing Strategy",
        def: "A plan that identifies target market(s), marketing mix, and basis for competitive advantage.",
      },
      {
        term: "Marketing Plan",
        def: "A written roadmap detailing how a marketing strategy will be carried out.",
      },
      {
        term: "SWOT Analysis",
        def: "A tool analyzing Strengths, Weaknesses, Opportunities, and Threats.",
      },
      {
        term: "Sustainable Competitive Advantage",
        def: "A long-lasting edge over competitors.",
      },
      {
        term: "BCG Matrix",
        def: "A portfolio tool classifying business units by growth and market share (Stars, Cash Cows, Question Marks, Dogs).",
      },
      {
        term: "Marketing Metrics",
        def: "Measures used to evaluate performance and justify marketing spend.",
      },
    ],
  },
  {
    id: 3,
    title: "Analyzing the Marketing Environment",
    color: "#27ae60",
    accent: "#e5f5eb",
    icon: "🌍",
    summary: `Firms don't operate in a vacuum. Understanding the marketing environment — both internal and external — is essential for strategic decision-making. Three layers of analysis matter: the macro environment, the micro environment, and the internal environment.`,
    sections: [
      {
        heading: "The Three Layers of Environment",
        content: ``,
        points: [
          {
            label: "Macro Environment (PESTEL)",
            desc: "The big-picture external forces that affect all firms in an industry.",
            example:
              "Political, Economic, Sociocultural, Technological, Environmental, Legal factors.",
          },
          {
            label: "Micro Environment (Porter's 5 Forces)",
            desc: "Industry-specific competitive dynamics.",
            example:
              "Rivalry among competitors, threat of new entrants, buyer/supplier power, substitute products.",
          },
          {
            label: "Internal Environment",
            desc: "The firm's own resources, capabilities, and assets.",
          },
        ],
      },
      {
        heading: "PESTEL Analysis",
        content: `A macro-level framework for scanning the external environment:`,
        points: [
          {
            label: "P – Political",
            desc: "Government policies, regulations, political stability.",
          },
          {
            label: "E – Economic",
            desc: "Interest rates, GDP, inflation, consumer spending.",
          },
          {
            label: "S – Sociocultural",
            desc: "Demographics, cultural trends, consumer attitudes.",
          },
          {
            label: "T – Technological",
            desc: "Innovation, tech adoption, digital transformation.",
          },
          {
            label: "E – Environmental",
            desc: "Climate change, sustainability demands, natural disasters.",
          },
          {
            label: "L – Legal",
            desc: "Laws and regulations affecting the industry.",
          },
        ],
      },
      {
        heading: "Porter's Five Forces",
        content: `Developed by Harvard professor Michael Porter, this tool evaluates competitive intensity in an industry:`,
        points: [
          {
            label: "1. Rivalry Among Existing Competitors",
            desc: "How intense is the competition within the industry?",
          },
          {
            label: "2. Threat of New Entrants",
            desc: "How easy is it for new firms to enter?",
          },
          {
            label: "3. Bargaining Power of Buyers",
            desc: "How much control do customers have?",
          },
          {
            label: "4. Bargaining Power of Suppliers",
            desc: "How much control do suppliers have?",
          },
          {
            label: "5. Threat of Substitutes",
            desc: "Are there alternative products that could replace yours?",
          },
        ],
      },
      {
        heading: "VRIO Framework & Competitive Strategies",
        content: `VRIO helps assess whether a firm's resources provide a competitive advantage:`,
        points: [
          { label: "Valuable + Rare", desc: "= Competitive Advantage" },
          {
            label: "Valuable but Not Rare",
            desc: "= Competitive Parity (everyone has it)",
          },
          {
            label: "Valuable + Rare + Hard to Imitate + Organized",
            desc: "= Sustained Competitive Advantage",
          },
          {
            label: "Porter's Generic Strategies",
            desc: "Cost Leadership (lowest cost producer) or Differentiation (unique offering that justifies a premium).",
            example: "IKEA = Cost Leadership. Apple = Differentiation.",
          },
        ],
      },
    ],
    keyTerms: [
      {
        term: "PESTEL",
        def: "Framework for analyzing Political, Economic, Sociocultural, Technological, Environmental, and Legal factors.",
      },
      {
        term: "Porter's Five Forces",
        def: "Tool to evaluate competitive intensity in an industry across five dimensions.",
      },
      {
        term: "VRIO Framework",
        def: "Assesses resources as Valuable, Rare, hard to Imitate, and Organized.",
      },
      {
        term: "Cost Leadership",
        def: "Strategy of being the lowest-cost producer in an industry.",
      },
      {
        term: "Differentiation",
        def: "Strategy of offering something unique that justifies a higher price.",
      },
      {
        term: "Strategic Positioning",
        def: "A firm's decisions on how to serve customers and compete against rivals.",
      },
      {
        term: "Value Chain",
        def: "The sequence of activities a firm performs to deliver value from raw materials to the end customer.",
      },
    ],
  },
  {
    id: 4,
    title: "Consumer Behaviour",
    color: "#9b59b6",
    accent: "#f0ebf5",
    icon: "🧠",
    summary: `Understanding how and why consumers make purchasing decisions is fundamental to marketing. The consumer decision process is a 5-step journey, and marketers must understand the psychological, social, and situational forces that shape it.`,
    sections: [
      {
        heading: "The 5-Step Consumer Decision Process",
        content: ``,
        points: [
          {
            label: "1. Need Recognition",
            desc: "The consumer identifies a gap — either functional (practical) or psychological (emotional).",
            example:
              "A Dior clutch satisfies a psychological need (status), not a functional one.",
          },
          {
            label: "2. Information Search",
            desc: "Internal search (memory/experience) or external search (internet, ads, friends). Driven by perceived benefits vs. costs, locus of control, and perceived risk.",
            example:
              "Lauren sees Zendaya wearing a turtleneck in a magazine and searches online to buy it.",
          },
          {
            label: "3. Alternative Evaluation",
            desc: "Consumers compare options using evaluative criteria. They may use compensatory rules (weigh all factors) or non-compensatory rules (one factor is a dealbreaker).",
            example:
              "A car buyer ranks Toyota, Honda, Nissan on mileage, style, price, and accessories with weighted importance scores.",
          },
          {
            label: "4. Purchase Decision",
            desc: "The customer is ready to buy. Firms can help by reducing friction: easy checkout, items in stock, short wait times.",
            example:
              "Reducing abandoned carts online by streamlining the checkout process.",
          },
          {
            label: "5. Post-Purchase",
            desc: "Three outcomes: satisfaction, dissatisfaction, or cognitive dissonance. Loyalty develops over repeated positive experiences.",
            example:
              "Negative word-of-mouth spreads fast online — marketers must respond quickly.",
          },
        ],
      },
      {
        heading: "Factors Influencing Consumer Behaviour",
        content: `Three broad categories shape decisions:`,
        points: [
          {
            label: "Psychological Factors",
            desc: "Motives, attitudes, perceptions, and learning.",
            example:
              "Subway satisfies the physiological need for food while positioning healthy eating as delicious.",
          },
          {
            label: "Social Factors",
            desc: "Family, reference groups, and culture.",
            example:
              "Family members act as decision makers or influencers. Culture shapes beliefs and customs — e.g., marketing halal meats to specific communities.",
          },
          {
            label: "Situational Factors",
            desc: "Timing, shopping context, and occasion.",
            example:
              "Buying jewelry for yourself → browse clearance. Buying a gift for a friend's birthday → go to Tiffany & Co.",
          },
        ],
      },
      {
        heading: "Types of Buying Decisions",
        content: `The amount of effort a consumer invests depends on involvement:`,
        points: [
          {
            label: "Extended Problem Solving",
            desc: "High involvement, lots of research. Common for big purchases.",
            example: "Buying a car or a luxury fashion item.",
          },
          {
            label: "Limited Problem Solving",
            desc: "Moderate involvement. Some comparison but not exhaustive.",
            example: "Choosing a new brand of cereal.",
          },
          {
            label: "Habitual Decision Making",
            desc: "Very low involvement — autopilot purchases.",
            example: "Buying the same coffee every morning.",
          },
          {
            label: "Impulse Buying",
            desc: "Unplanned purchases driven by emotion or opportunity.",
            example: "Grabbing a candy bar at the checkout counter.",
          },
        ],
      },
    ],
    keyTerms: [
      {
        term: "Need Recognition",
        def: "The first step where a consumer realizes they have an unmet need.",
      },
      {
        term: "Evaluative Criteria",
        def: "The standards consumers use to compare products.",
      },
      {
        term: "Compensatory Decision Rule",
        def: "Weighing all attributes together; a strength in one area can offset a weakness in another.",
      },
      {
        term: "Non-Compensatory Decision Rule",
        def: "One attribute is a dealbreaker; no trade-offs allowed.",
      },
      {
        term: "Cognitive Dissonance",
        def: "Discomfort felt when a purchase doesn't meet expectations.",
      },
      {
        term: "Reference Groups",
        def: "Groups (family, friends, celebrities) that influence a consumer's decisions and self-image.",
      },
      {
        term: "Locus of Control",
        def: "Internal (I control outcomes → more searching) vs. External (fate controls → less searching).",
      },
      {
        term: "Customer Loyalty",
        def: "Repeated purchases of the same brand/store without considering alternatives.",
      },
    ],
  },
  {
    id: 6,
    title: "Segmentation, Targeting & Positioning (STP)",
    color: "#e67e22",
    accent: "#fdf0e5",
    icon: "🎪",
    summary: `STP is the core of marketing strategy. Segmentation divides the market into groups. Targeting selects which groups to pursue. Positioning defines how your brand will be perceived relative to competitors.`,
    sections: [
      {
        heading: "Step 1 & 2: Segmentation Bases",
        content: `Segmentation is about dividing the market into distinct groups with similar needs. There are four main bases:`,
        points: [
          {
            label: "Geographic",
            desc: "Location-based: country, region, city, climate.",
            example:
              "A ski resort brand targets consumers in mountain regions during winter.",
          },
          {
            label: "Demographic",
            desc: "Age, gender, income, education, family size, etc. Most common method. Census data is a key source.",
            example:
              "Gap Kids targets families with young children; Gap targets young adults.",
          },
          {
            label: "Psychographic",
            desc: "Lifestyle, values, personality, and self-concept. Uses frameworks like VALS (Values And Lifestyle).",
            example:
              "MEC (Mountain Equipment Co-op) appeals to 'Experiencers' — people who seek adventure and self-expression.",
          },
          {
            label: "Behavioural",
            desc: "Benefits sought, usage rate, loyalty level, and occasion.",
            example:
              "Heavy users of a gym vs. occasional users require very different marketing messages.",
          },
        ],
      },
      {
        heading: "VALS Categories (Psychographic)",
        content: `VALS splits consumers into 8 types based on values and buying behaviour:`,
        points: [
          {
            label: "Innovators",
            desc: "Sophisticated, change leaders, open to new ideas and tech.",
          },
          {
            label: "Thinkers",
            desc: "Well-educated, mature, carefully research before buying.",
          },
          {
            label: "Believers",
            desc: "Conservative, loyal to familiar brands, value family and tradition.",
          },
          {
            label: "Achievers",
            desc: "Goal-oriented professionals, favour prestige products.",
          },
          {
            label: "Strivers",
            desc: "Trendy, money defines success, favour stylish products.",
          },
          {
            label: "Experiencers",
            desc: "Enthusiastic, impulsive, want it all, active in sports and social life.",
          },
          {
            label: "Makers",
            desc: "Practical, self-sufficient, traditional views, suspicious of new ideas.",
          },
          {
            label: "Survivors",
            desc: "Oldest segment, cautious, risk-averse, loyal to favourites, focused on needs over wants.",
          },
        ],
      },
      {
        heading: "Step 3: Evaluating Segment Attractiveness",
        content: `Not every segment is worth pursuing. A good segment must be:`,
        points: [
          {
            label: "Identifiable",
            desc: "Can you clearly define who's in the group?",
          },
          {
            label: "Reachable",
            desc: "Can you communicate with them? Do they know your product exists?",
          },
          {
            label: "Responsive",
            desc: "Will they react positively and move toward your product?",
          },
          {
            label: "Substantial & Profitable",
            desc: "Is the segment large and profitable enough to justify the investment?",
            example:
              "Profitability formula: (Segment Size × Adoption % × Purchase $ × Frequency) × Profit Margin − Fixed Costs",
          },
        ],
      },
      {
        heading: "Step 4: Targeting Strategies",
        content: `Once segments are evaluated, pick a targeting approach:`,
        points: [
          {
            label: "Undifferentiated (Mass Marketing)",
            desc: "One strategy for everyone — when the product benefits all.",
            example: "A basic utility product like table salt.",
          },
          {
            label: "Differentiated",
            desc: "Multiple segments, each with a tailored offering.",
            example:
              "Condé Nast publishes 26+ magazines: Vogue, GQ, Wired, The New Yorker — each for a different audience.",
          },
          {
            label: "Concentrated (Niche)",
            desc: "All resources focused on one segment.",
            example:
              "Newton Running targets not all runners, but those who want to improve their form.",
          },
          {
            label: "Micromarketing (One-to-One)",
            desc: "Tailored to individual customer needs.",
            example:
              "Build-A-Bear lets every customer design a unique stuffed animal.",
          },
        ],
      },
      {
        heading: "Step 5: Positioning",
        content: `Positioning defines how you want customers to perceive your brand vs. competitors. Common positioning methods:`,
        points: [
          {
            label: "Value",
            desc: "Price-to-quality relationship.",
            example:
              "KIND bars = natural & healthy. PowerBar = athletic performance.",
          },
          {
            label: "Product Attributes",
            desc: "Highlight key features.",
            example:
              "Audi Quattro positions on all-wheel-drive performance in snow and ice.",
          },
          {
            label: "Benefits & Symbolism",
            desc: "Emotional meaning of the brand.",
            example:
              "SoCIAL LITE Vodka positions on functional benefits: great taste, all-natural, low-calorie.",
          },
          {
            label: "Competition",
            desc: "Position against a rival or an entire category.",
            example: "'We're not Coca-Cola — we're Pepsi.'",
          },
          {
            label: "Perceptual Mapping",
            desc: "A visual tool that plots brands on axes (e.g., price vs. quality) to find open market positions.",
          },
        ],
      },
    ],
    keyTerms: [
      {
        term: "Segmentation",
        def: "Dividing the market into groups with similar needs or characteristics.",
      },
      { term: "Targeting", def: "Selecting which segment(s) to pursue." },
      {
        term: "Positioning",
        def: "How you want your brand perceived relative to competitors.",
      },
      {
        term: "VALS",
        def: "Values And Lifestyle — a psychographic segmentation framework with 8 consumer types.",
      },
      {
        term: "Geodemographic Segmentation",
        def: "Combines geographic, demographic, and lifestyle data ('Birds of a feather flock together').",
      },
      {
        term: "Undifferentiated Targeting",
        def: "Mass marketing — one strategy for everyone.",
      },
      {
        term: "Concentrated Targeting",
        def: "Niche strategy — all focus on one segment.",
      },
      {
        term: "Micromarketing",
        def: "One-to-one marketing tailored to individual customers.",
      },
      {
        term: "Perceptual Map",
        def: "A visual tool plotting brands on two axes to show competitive positioning.",
      },
      {
        term: "Positioning Statement",
        def: "A statement that addresses the buyer's pain, shows value, and differentiates the brand.",
      },
    ],
  },
];

export default function StudyGuide() {
  const [activeChapter, setActiveChapter] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [showTerms, setShowTerms] = useState({});
  const [quizMode, setQuizMode] = useState(false);
  const [flippedTerms, setFlippedTerms] = useState({});

  const toggleSection = (chId, secIdx) => {
    const key = `${chId}-${secIdx}`;
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleTerms = (chId) => {
    setShowTerms((prev) => ({ ...prev, [chId]: !prev[chId] }));
  };

  const flipTerm = (chId, tIdx) => {
    const key = `${chId}-${tIdx}`;
    setFlippedTerms((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f1117",
        color: "#e8e8ec",
        fontFamily: "'Georgia', serif",
        padding: "0",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a1c2e 0%, #16181f 100%)",
          borderBottom: "1px solid #2a2d3a",
          padding: "32px 24px 28px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -40,
            left: -40,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(58,123,213,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -30,
            right: -30,
            width: 160,
            height: 160,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(233,83,63,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              margin: 0,
              fontSize: 11,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#6b6e7e",
              marginBottom: 8,
            }}
          >
            Marketing — Grewal 6th Edition
          </p>
          <h1
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 400,
              color: "#fff",
              letterSpacing: -0.5,
            }}
          >
            📖 Study Guide
          </h1>
          <p style={{ margin: "8px 0 0", fontSize: 13, color: "#5c5f6e" }}>
            Chapters 1, 2, 3, 4 & 6 — Click a chapter to expand
          </p>
        </div>
      </div>

      {/* Flip Cards Toggle */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          padding: "18px 16px 4px",
        }}
      >
        <button
          onClick={() => setQuizMode(false)}
          style={{
            padding: "7px 18px",
            borderRadius: 20,
            border: "1px solid",
            borderColor: !quizMode ? "#3a7bd5" : "#2a2d3a",
            background: !quizMode ? "rgba(58,123,213,0.15)" : "transparent",
            color: !quizMode ? "#3a7bd5" : "#6b6e7e",
            fontSize: 13,
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "all 0.2s",
          }}
        >
          📝 Summary View
        </button>
        <button
          onClick={() => setQuizMode(true)}
          style={{
            padding: "7px 18px",
            borderRadius: 20,
            border: "1px solid",
            borderColor: quizMode ? "#e67e22" : "#2a2d3a",
            background: quizMode ? "rgba(230,126,34,0.15)" : "transparent",
            color: quizMode ? "#e67e22" : "#6b6e7e",
            fontSize: 13,
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "all 0.2s",
          }}
        >
          🔄 Flashcard Quiz
        </button>
      </div>

      {/* Chapters */}
      <div
        style={{ maxWidth: 780, margin: "0 auto", padding: "16px 16px 40px" }}
      >
        {chapters.map((ch) => {
          const isOpen = activeChapter === ch.id;
          return (
            <div key={ch.id} style={{ marginBottom: 12 }}>
              {/* Chapter Header */}
              <button
                onClick={() => setActiveChapter(isOpen ? null : ch.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  background: isOpen ? "#1e2030" : "#171921",
                  border: `1px solid ${isOpen ? ch.color + "55" : "#2a2d3a"}`,
                  borderRadius: 14,
                  padding: "16px 20px",
                  cursor: "pointer",
                  transition: "all 0.25s",
                  textAlign: "left",
                }}
              >
                <span style={{ fontSize: 22 }}>{ch.icon}</span>
                <div style={{ flex: 1 }}>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: 1.5,
                        textTransform: "uppercase",
                        color: ch.color,
                        fontFamily: "sans-serif",
                      }}
                    >
                      Chapter {ch.id}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 17,
                      fontWeight: 400,
                      color: "#fff",
                      marginTop: 2,
                    }}
                  >
                    {ch.title}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 18,
                    color: "#5c5f6e",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s",
                  }}
                >
                  ▾
                </span>
              </button>

              {/* Chapter Content */}
              {isOpen && (
                <div
                  style={{
                    background: "#171921",
                    border: `1px solid ${ch.color}33`,
                    borderTop: "none",
                    borderRadius: "0 0 14px 14px",
                    padding: "20px",
                    animation: "fadeIn 0.3s ease",
                  }}
                >
                  {/* Summary */}
                  <div
                    style={{
                      background: "#1e2030",
                      borderRadius: 10,
                      padding: "14px 18px",
                      borderLeft: `3px solid ${ch.color}`,
                      marginBottom: 20,
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontSize: 13.5,
                        lineHeight: 1.65,
                        color: "#c4c6d0",
                      }}
                    >
                      {ch.summary}
                    </p>
                  </div>

                  {!quizMode ? (
                    <>
                      {/* Sections */}
                      {ch.sections.map((sec, sIdx) => {
                        const secKey = `${ch.id}-${sIdx}`;
                        const secOpen = expandedSections[secKey] !== false;
                        return (
                          <div key={sIdx} style={{ marginBottom: 14 }}>
                            <button
                              onClick={() => toggleSection(ch.id, sIdx)}
                              style={{
                                width: "100%",
                                textAlign: "left",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: "8px 0",
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                              }}
                            >
                              <span style={{ fontSize: 11, color: ch.color }}>
                                {secOpen ? "▼" : "▶"}
                              </span>
                              <span
                                style={{
                                  fontSize: 15,
                                  fontWeight: 600,
                                  color: "#fff",
                                  fontFamily: "sans-serif",
                                }}
                              >
                                {sec.heading}
                              </span>
                            </button>
                            {secOpen && (
                              <div style={{ paddingLeft: 18 }}>
                                {sec.content && (
                                  <p
                                    style={{
                                      margin: "0 0 10px",
                                      fontSize: 13,
                                      color: "#9a9caa",
                                      lineHeight: 1.6,
                                    }}
                                  >
                                    {sec.content}
                                  </p>
                                )}
                                {sec.points.map((pt, pIdx) => (
                                  <div
                                    key={pIdx}
                                    style={{
                                      background: "#1e2030",
                                      borderRadius: 8,
                                      padding: "10px 14px",
                                      marginBottom: 8,
                                      borderLeft: `2px solid ${ch.color}88`,
                                    }}
                                  >
                                    <div
                                      style={{
                                        fontSize: 13,
                                        fontWeight: 700,
                                        color: ch.color,
                                        fontFamily: "sans-serif",
                                        marginBottom: 3,
                                      }}
                                    >
                                      {pt.label}
                                    </div>
                                    <div
                                      style={{
                                        fontSize: 12.5,
                                        color: "#b0b2bd",
                                        lineHeight: 1.55,
                                      }}
                                    >
                                      {pt.desc}
                                    </div>
                                    {pt.example && (
                                      <div
                                        style={{
                                          marginTop: 6,
                                          padding: "5px 10px",
                                          background: "#252836",
                                          borderRadius: 6,
                                          fontSize: 12,
                                          color: "#7aab6d",
                                          fontStyle: "italic",
                                        }}
                                      >
                                        💡 {pt.example}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}

                      {/* Key Terms Toggle */}
                      <div style={{ marginTop: 18 }}>
                        <button
                          onClick={() => toggleTerms(ch.id)}
                          style={{
                            width: "100%",
                            padding: "10px 16px",
                            borderRadius: 8,
                            border: `1px solid ${ch.color}44`,
                            background: `${ch.color}0a`,
                            color: ch.color,
                            fontSize: 13,
                            cursor: "pointer",
                            fontFamily: "sans-serif",
                            fontWeight: 600,
                            letterSpacing: 0.5,
                          }}
                        >
                          {showTerms[ch.id] ? "▲ Hide" : "▼ Show"} Key Terms (
                          {ch.keyTerms.length})
                        </button>
                        {showTerms[ch.id] && (
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns:
                                "repeat(auto-fill, minmax(220px, 1fr))",
                              gap: 8,
                              marginTop: 10,
                            }}
                          >
                            {ch.keyTerms.map((kt, tIdx) => (
                              <div
                                key={tIdx}
                                style={{
                                  background: "#1e2030",
                                  borderRadius: 8,
                                  padding: "10px 12px",
                                  border: `1px solid #2a2d3a`,
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: 12.5,
                                    fontWeight: 700,
                                    color: "#fff",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  {kt.term}
                                </div>
                                <div
                                  style={{
                                    fontSize: 11.5,
                                    color: "#8a8c99",
                                    marginTop: 3,
                                    lineHeight: 1.5,
                                  }}
                                >
                                  {kt.def}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    /* Flashcard Quiz Mode */
                    <div>
                      <p
                        style={{
                          fontSize: 13,
                          color: "#6b6e7e",
                          marginBottom: 12,
                          textAlign: "center",
                          fontFamily: "sans-serif",
                        }}
                      >
                        Click each card to reveal the definition
                      </p>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fill, minmax(210px, 1fr))",
                          gap: 10,
                        }}
                      >
                        {ch.keyTerms.map((kt, tIdx) => {
                          const fKey = `${ch.id}-${tIdx}`;
                          const flipped = flippedTerms[fKey];
                          return (
                            <div
                              key={tIdx}
                              onClick={() => flipTerm(ch.id, tIdx)}
                              style={{
                                background: flipped ? "#1e2a1e" : "#1e2030",
                                border: `1px solid ${flipped ? "#27ae6044" : ch.color + "33"}`,
                                borderRadius: 10,
                                padding: "14px",
                                cursor: "pointer",
                                minHeight: 80,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                transition: "all 0.25s",
                                textAlign: "center",
                              }}
                            >
                              {!flipped ? (
                                <>
                                  <div
                                    style={{
                                      fontSize: 13.5,
                                      fontWeight: 700,
                                      color: "#fff",
                                      fontFamily: "sans-serif",
                                    }}
                                  >
                                    {kt.term}
                                  </div>
                                  <div
                                    style={{
                                      fontSize: 10,
                                      color: "#5c5f6e",
                                      marginTop: 4,
                                    }}
                                  >
                                    tap to reveal →
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div
                                    style={{
                                      fontSize: 11,
                                      fontWeight: 700,
                                      color: ch.color,
                                      fontFamily: "sans-serif",
                                      marginBottom: 4,
                                    }}
                                  >
                                    {kt.term}
                                  </div>
                                  <div
                                    style={{
                                      fontSize: 11.5,
                                      color: "#9a9caa",
                                      lineHeight: 1.5,
                                    }}
                                  >
                                    {kt.def}
                                  </div>
                                  <div
                                    style={{
                                      fontSize: 9.5,
                                      color: "#5c5f6e",
                                      marginTop: 5,
                                    }}
                                  >
                                    tap to flip back
                                  </div>
                                </>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
        button { outline: none; }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}
