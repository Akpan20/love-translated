import { useState } from "react";

const T = {
  cream: "#faf6f0", parchment: "#f3ece2", blush: "#e8c4b0",
  rose: "#c27b6a", deep: "#3b2a27", deep2: "#2a1e1b",
  gold: "#c9a96e", sage: "#8a9e8c", white: "#ffffff",
};

// ─────────────────────────────────────────────
// BOOK DATA
// ─────────────────────────────────────────────
const BOOK_CHAPTERS = [
  {
    num: 1, title: "The Problem with Fluency",
    subtitle: "Why knowing how to love isn't the same as being understood",
    content: [
      { type: "p", text: "Maria and David had been married for eleven years when she first said the words that changed everything: \"I feel invisible.\" David was stunned. He had spent the last decade doing what he believed any devoted husband would do — working long hours to provide for their family, fixing the leaky faucet before she noticed it, making sure her car was always filled with gas. He showed up. He contributed. He loved her with every action he knew." },
      { type: "p", text: "And she felt invisible." },
      { type: "p", text: "This is the central tragedy of so many marriages: two people who genuinely love each other, who are fluent in the language of their own love, yet speak entirely past one another. David was communicating in the language of provision and practical care. Maria was waiting to hear words — spoken affirmation, verbal acknowledgment, someone noticing not just the broken faucet but the exhaustion behind her eyes." },
      { type: "pull", text: "\"The greatest love story isn't about falling — it's about the daily, deliberate work of translation.\"" },
      { type: "p", text: "We come to our marriages carrying languages we didn't choose. The dialects of love we speak were shaped long before we ever met our partners — in the homes we grew up in, in the relationships we watched, in the wounds we carry and the hungers we've never named. Most of us speak our native tongue fluently. The problem is we assume our partner speaks the same one." },
      { type: "p", text: "They almost never do." },
      { type: "h2", text: "The Fluency Illusion" },
      { type: "p", text: "Psychologists call this the \"closeness-communication bias\" — the more intimate we are with someone, the more we assume they understand us without explanation. The cruel irony of long-term love is that familiarity breeds not understanding, but assumption. We stop translating because we believe we no longer need to." },
      { type: "p", text: "But love is never self-evident. It requires active transmission and active reception. It requires the willingness to speak a language that doesn't come naturally to you, for the sake of the person who needs to hear it in their own tongue." },
      { type: "insight", label: "Key Insight", text: "Loving someone well is not about loving them the way you want to love them. It's about discovering how they receive love — and choosing to speak that language even when it feels foreign." },
      { type: "p", text: "This book is not a theory of love. It is a practice. In the chapters ahead, we will identify the two most fundamental languages in every lasting marriage: respect and appreciation. We will examine the anti-languages — contempt and invisibility — that quietly erode even the strongest foundations. And we will build, together, a vocabulary that might finally allow you and your partner to hear each other." },
      { type: "p", text: "But first, we must confront the hardest truth of all: the love you've been giving may not be the love your partner has been receiving. The gap between the two is not a failure of love. It is a failure of translation — and translation, thank God, can be learned." },
    ]
  },
  {
    num: 2, title: "Two Languages That Matter Most",
    subtitle: "Respect and appreciation — the twin pillars of lasting love",
    content: [
      { type: "p", text: "Of all the ways we express love, two rise above the rest in their power to sustain a marriage through every season: respect and appreciation. These are not simply emotions or attitudes. They are active languages — patterns of behavior that communicate to your partner, day after day, that they are seen, valued, and worthy." },
      { type: "p", text: "Strip away the romance, the passion, the grand gestures, and what remains at the core of a lasting marriage is this: does my partner respect me? Does my partner appreciate me? These are not questions we ask aloud. They are questions our nervous systems ask constantly, scanning every interaction for evidence of the answer." },
      { type: "pull", text: "\"Respect says: I see who you are. Appreciation says: I'm glad you exist. A marriage needs both — and most receive neither.\"" },
      { type: "h2", text: "Respect: The Foundation" },
      { type: "p", text: "Respect, in the context of marriage, is not deference. It is not silence in the face of disagreement, or endless accommodation of another person's preferences. True respect is the active practice of honoring your partner's dignity — in public and in private, in moments of agreement and in the heat of conflict." },
      { type: "p", text: "When you speak well of your partner to others, you are speaking respect. When you ask for their opinion before making decisions that affect you both, you are speaking respect. When you manage your own contempt — the eye-rolls, the sighs, the dismissive gestures — you are choosing respect over its opposite. Every one of these choices is a sentence in a language your partner is always listening for." },
      { type: "insight", label: "Key Insight", text: "Respect is not a feeling you have about your partner. It is a practice — a series of daily choices that communicate your partner's worth back to them." },
      { type: "h2", text: "Appreciation: The Nourishment" },
      { type: "p", text: "Where respect addresses your partner's dignity, appreciation addresses their contributions. It answers the invisible question every partner asks: does what I do matter? Do you notice? Do you care?" },
      { type: "p", text: "The labor of marriage is largely invisible. The meals prepared, the bills managed, the children bathed and read to, the appointments remembered, the emotional labor of keeping a household humming — most of it goes unacknowledged. Not because partners don't care, but because they've stopped noticing. Familiarity, again, works against us." },
      { type: "p", text: "Appreciation is the antidote to invisibility. It is specific, deliberate notice. Not a generic \"thanks for everything you do,\" but the kind of particularized acknowledgment that says: I saw what you did. I know what it cost you. I am grateful." },
      { type: "p", text: "Together, respect and appreciation form a kind of emotional ecosystem. Respect tells your partner they are worthy of love as a person. Appreciation tells them their presence and effort make a real difference. Without both, a marriage begins to starve — slowly, quietly, in ways that are difficult to name until the hunger becomes desperate." },
    ]
  },
  {
    num: 3, title: "The Anti-Languages",
    subtitle: "How contempt and invisibility quietly dismantle love",
    content: [
      { type: "p", text: "Every language has an opposite. The opposite of respect is contempt. The opposite of appreciation is invisibility. And unlike their counterparts, the anti-languages require no deliberate practice to develop — they arrive naturally, uninvited, when we stop being intentional about how we treat the person we love most." },
      { type: "p", text: "John Gottman's decades of research on marriages identified contempt as the single most destructive force in a relationship — more predictive of divorce than conflict, incompatibility, or financial stress. Contempt is not anger. Anger says: I am hurt by what you did. Contempt says: I am superior to what you are. It is love curdled into disdain, and it poisons everything it touches." },
      { type: "pull", text: "\"Contempt is not the opposite of love. It is the corpse of love — what remains when love has stopped being tended.\"" },
      { type: "h2", text: "The Face of Contempt" },
      { type: "p", text: "Contempt wears many disguises. It arrives as a sigh when your partner speaks. It shows up in the slight curl of a lip, the roll of an eye, the dismissive wave of a hand. It lives in the way we interrupt, the way we talk over, the way we explain — patiently, condescendingly — something our partner \"clearly doesn't understand.\"" },
      { type: "p", text: "It flourishes in the stories we tell ourselves about our partners: the narrative of their incompetence, their selfishness, their fundamental inadequacy. Once that narrative takes root, it colors every interaction. Their good acts are explained away. Their flaws become evidence of who they really are." },
      { type: "insight", label: "Key Insight", text: "Contempt is a habit before it is a feeling. We train ourselves into it through repeated small dismissals — and we can train ourselves out of it through repeated small acts of respect." },
      { type: "h2", text: "The Silence of Invisibility" },
      { type: "p", text: "Invisibility is quieter than contempt. It doesn't announce itself. It accumulates in the meals that go unthanked, the efforts that go unnoticed, the emotions that go unasked about. It builds in the moments when your partner is looking at a screen when you speak, when they change the subject from your story to theirs, when the particular details of your inner life seem to slide off them like water off glass." },
      { type: "p", text: "Invisibility is not usually malicious. Most partners who make their spouses feel invisible are not doing so intentionally. They are distracted, overwhelmed, caught in the magnetic pull of their own inner world. But intention is irrelevant to the person who is disappearing." },
      { type: "p", text: "The good news is that both contempt and invisibility are reversible. They are not character traits but habits — patterns of attention and response that can be interrupted, examined, and replaced. The thirty-day challenges in the modules ahead are built precisely for this purpose: to interrupt the anti-language patterns and replace them, one day at a time, with the languages of respect and appreciation." },
    ]
  },
  {
    num: 4, title: "Learning to Listen Again",
    subtitle: "The forgotten art of hearing what your partner is actually saying",
    content: [
      { type: "p", text: "There is a kind of listening that most long-term couples have forgotten how to do. It is not the listening of waiting for your turn to speak, nor the listening of preparing your rebuttal, nor even the compassionate listening of wanting to fix what is broken. It is the listening of genuine curiosity — the kind that assumes you do not yet know what your partner is really trying to say." },
      { type: "p", text: "After years together, we develop what researchers call \"person knowledge\" — a comprehensive mental model of our partner. We know how they think, how they react, what they're going to say before they say it. And while this knowledge is a gift in many ways, it is also a trap. It causes us to listen to the person we remember rather than the person in front of us." },
      { type: "pull", text: "\"The longest relationships suffer from the shortest attention spans. Familiarity breeds not contempt but assumption — and assumption is the enemy of true listening.\"" },
      { type: "h2", text: "The Four Layers of a Message" },
      { type: "p", text: "Communication theorists describe every message as having four layers: what is literally said, what the speaker intends, what the listener hears, and what the listener infers. In early relationships, these layers roughly align. In long-term partnerships, the gaps between them can become chasms." },
      { type: "p", text: "When your partner says \"I'm fine,\" they may mean any number of things — none of which are fine. When they say \"You never help around the house,\" the literal complaint may be the least important part of the message; underneath it may be a plea for partnership, for visibility, for the sense that their labor is shared and their exhaustion recognized." },
      { type: "insight", label: "Practice", text: "Before responding to your partner in a moment of tension, pause and ask yourself: \"What might they actually be trying to tell me beneath the words they're using?\" Then ask them — gently, openly — if you've understood correctly." },
      { type: "h2", text: "Listening as an Act of Love" },
      { type: "p", text: "Full listening — the kind that puts down phones, quiets the internal monologue, makes eye contact, leans in — is one of the most intimate acts available to a couple. It communicates something that no gift, no declaration, no grand gesture can: you matter enough to have my complete attention." },
      { type: "p", text: "In a world engineered for distraction, the willingness to be fully present with another human being is increasingly rare and increasingly precious. It is also, like all the practices in this book, a skill — one that atrophies without use and strengthens with deliberate practice. The exercises in Module 1 are designed to help you begin rebuilding this capacity: the capacity to hear your partner as if for the first time." },
    ]
  },
  {
    num: 5, title: "The Language of Respect",
    subtitle: "Thirty ways to tell your partner they are worthy",
    content: [
      { type: "p", text: "Respect is demonstrated before it is felt. This is perhaps the most counterintuitive truth in this book: we do not wait until we feel respect to act respectfully. We act respectfully, consistently, deliberately — and the feeling follows. Love, in this sense, is more verb than noun." },
      { type: "p", text: "The four domains of respect correspond to the four categories in your workbook's Respect Audit: public validation, private deference, trust and autonomy, and physical and emotional signals. Each domain represents a distinct vocabulary — a set of behaviors that communicate, in their own register, that your partner is worthy of honor." },
      { type: "pull", text: "\"What you say about your partner when they are not in the room is a more honest measure of your respect than anything you say to their face.\"" },
      { type: "h2", text: "Public Validation" },
      { type: "p", text: "How we speak of our partners in public is a mirror of how we see them in private. Partners who speak positively about each other in social settings — who defend rather than mock, who credit rather than diminish — are doing something far more important than social performance. They are reinforcing, in the presence of witnesses, the dignity of the person they chose." },
      { type: "p", text: "The opposite — the joke at a partner's expense, the casual complaint shared with friends, the slightly contemptuous summary of a spouse's failings at a dinner table — is one of the more corrosive habits in marriage. It is so normalized as to seem harmless. It is not harmless." },
      { type: "h2", text: "Private Deference" },
      { type: "p", text: "Private deference is the practice of honoring your partner's perspective in the intimate space of your relationship, before the world has any opportunity to witness it. It is asking rather than demanding. It is listening until they have finished before you begin. It is supporting decisions you disagree with, because you trust your partner's judgment and their right to make their own choices." },
      { type: "insight", label: "This Week", text: "Choose one domain of respect that feels most difficult for you. Commit to one deliberate act within it every day for seven days. Notice what changes — in your partner, and in yourself." },
      { type: "p", text: "Trust and autonomy are forms of respect most often violated without awareness. The micromanagement of a partner's tasks, the correction of their parenting in front of the children, the subtle but constant signaling that you could do it better — these are all forms of disrespect dressed in the costume of helpfulness. True respect trusts your partner's competence and allows them the dignity of doing things their own way." },
    ]
  },
  {
    num: 6, title: "The Language of Appreciation",
    subtitle: "Making the invisible visible, one acknowledgment at a time",
    content: [
      { type: "p", text: "The most reliable indicator of whether a partner feels appreciated is not whether their partner says thank you — it is whether their partner notices. Appreciation begins with attention: the deliberate practice of seeing what your partner actually does, day after day, that keeps your shared life running." },
      { type: "p", text: "We live in an age of spectacular attention deficit. Our devices compete for our awareness with algorithmic precision; our minds run on the fuel of the urgent. In this environment, the quiet, repetitive, unglamorous labor of a partner — the school lunches packed, the bills reviewed, the sick child tended to at three in the morning — becomes effectively invisible." },
      { type: "pull", text: "\"Appreciation is not a feeling that leads to action. It is an action — deliberate, specific, chosen — that eventually becomes a feeling.\"" },
      { type: "h2", text: "The Specificity Principle" },
      { type: "p", text: "Generic appreciation (\"thanks for everything you do\") is better than nothing, but barely. What partners truly hunger for is specific acknowledgment — the kind that proves you actually saw what they did, understood what it cost them, and chose to name it aloud." },
      { type: "p", text: "There is a significant difference between \"thanks for dinner\" and \"I noticed you were exhausted tonight, and you still made something from scratch instead of ordering out. That meant something to me.\" The second version proves attention. It requires the speaker to have actually seen their partner — which is, in the end, the deepest thing appreciation communicates: I see you." },
      { type: "insight", label: "Key Practice", text: "For one week, make a daily list of three specific things your partner did that you noticed and are grateful for. Share at least one of them with your partner each day. The practice of noticing will transform how you see them." },
      { type: "h2", text: "The Four Appreciation Languages" },
      { type: "p", text: "Just as respect divides into four domains, appreciation manifests in four registers: verbal recognition, active participation, tangible thoughtfulness, and emotional presence. Some partners are most nourished by words; others by actions; others by the sense that their inner life is tracked and remembered. The Appreciation Audit in your workbook will help you identify which register speaks most powerfully to your partner — and where your own natural vocabulary falls short." },
      { type: "p", text: "The thirty-day Appreciation Challenge is not a performance. It is a training program for your attention — a systematic effort to rewire the neural pathways of habit so that notice, acknowledgment, and gratitude become your default response to the person you love." },
    ]
  },
  {
    num: 7, title: "Seasons of a Marriage",
    subtitle: "How love must evolve to survive the life you build together",
    content: [
      { type: "p", text: "A marriage is not a single relationship. It is a series of relationships shared by two people who keep each other's names. The couple who married at twenty-four are not the same couple raising teenagers at forty-five, nor the same couple navigating retirement at sixty-eight. The love that sustains a marriage must be elastic enough to stretch across these seasons — and wise enough to translate itself anew at each one." },
      { type: "p", text: "The early years are characterized by discovery: the intoxicating work of learning another person, finding your rhythms together, negotiating the infinite small compromises of shared life. Love at this stage often requires no translation — the desire to understand and be understood is strong enough to fuel the effort naturally." },
      { type: "pull", text: "\"The marriages that last are not the ones that remain unchanged. They are the ones that change together — updating their translation, season by season, year by year.\"" },
      { type: "h2", text: "The Middle Seasons" },
      { type: "p", text: "The middle years — the years of parenting, career pressure, aging parents, financial stress — are the most dangerous for love. Not because the love is less real, but because the demands on attention are so ferocious that the relationship itself can become a thing that runs in the background: assumed, untended, slowly draining." },
      { type: "p", text: "Couples in the middle seasons often report that they feel like business partners, co-parents, logistics coordinators — but not lovers. The vocabulary of romance has been crowded out by the vocabulary of function. What is needed is not a grand romantic gesture, but a sustained small practice: the daily recommitment to speaking each other's language." },
      { type: "insight", label: "Seasonal Translation", text: "At the start of each year, or each major life transition, ask your partner: \"What does love need to look like for you right now, in this season?\" Their answer may surprise you — and the question itself is an act of love." },
      { type: "h2", text: "The Later Years" },
      { type: "p", text: "Partners who have navigated the middle years with their love intact often discover something unexpected in the later seasons: a depth of connection unavailable in youth. The shared history, the mutual witnessing of each other's becoming, the accumulated evidence of having been chosen — again and again, through every season — becomes its own language, spoken in glances and small gestures and the particular intimacy of two people who have seen each other at their worst and stayed." },
    ]
  },
  {
    num: 8, title: "When the Translation Breaks Down",
    subtitle: "Rebuilding trust after contempt, betrayal, or long neglect",
    content: [
      { type: "p", text: "There are seasons in every marriage when the translation does not merely falter — it fails entirely. The accumulated weight of unspoken resentments, repeated disappointments, breaches of trust, or simply the long erosion of two people who have stopped trying to understand each other can bring a relationship to a place that feels irreparable." },
      { type: "p", text: "It is not always irreparable. But the work of repair is different in kind from the work of maintenance. It requires something more than good intentions or practiced appreciation. It requires a willingness to look honestly at what broke, and why — and to do the slow, often painful work of rebuilding on a clearer foundation." },
      { type: "pull", text: "\"Repair is not the same as return. You cannot go back to who you were before the breaking. You can only go forward as people who have been broken and chose, together, to rebuild.\"" },
      { type: "h2", text: "The Anatomy of a Breach" },
      { type: "p", text: "Trust breaks in recognizable patterns. There is the sudden rupture — the infidelity, the lie discovered, the betrayal that arrives without warning and leaves nothing unchanged. And there is the slow erosion — the years of contempt, the mounting invisibility, the gradual accumulation of small disrespects that eventually outweigh the love they were layered over." },
      { type: "insight", label: "The Path Back", text: "Repair begins with a specific acknowledgment of what happened and how it affected your partner — not a general apology, but a demonstrated understanding of the particular harm. \"I know that when I did X, you felt Y, and that mattered\" is the beginning." },
      { type: "h2", text: "When Professional Help Is Needed" },
      { type: "p", text: "This book cannot substitute for professional support when a marriage has sustained serious harm. A skilled therapist is not a last resort — it is a wise choice, and often an early one. The stigma around couples therapy is a relic of a cultural moment that has largely passed; the couples most likely to repair significant damage are those who seek help before the situation becomes critical." },
      { type: "p", text: "The crisis module in your workbook provides a framework for beginning the conversation about what broke and what it would take to rebuild. But if you find yourselves unable to move through that framework without escalating conflict, or if one partner remains fundamentally unwilling to engage, please consider reaching out to a licensed professional." },
    ]
  },
  {
    num: 9, title: "The Upward Spiral",
    subtitle: "How small consistent actions create compounding love",
    content: [
      { type: "p", text: "Here is what the research consistently shows, and what the experience of couples who have done this work confirms: small positive actions, sustained consistently over time, do not merely add to a relationship's wellbeing. They compound it. Like interest in a savings account, acts of respect and appreciation accrue — not just in goodwill and positive feeling, but in the partner's neurological response to the relationship itself." },
      { type: "p", text: "When a partner receives consistent respect, their nervous system begins to associate the relationship with safety. When they receive consistent appreciation, it begins to associate it with worth. Over time, this changes not only how they feel in the relationship, but how they behave in it — and a partner who feels safe and worthy is far more likely to offer safety and worthiness in return." },
      { type: "pull", text: "\"You cannot manufacture the upward spiral by willing it into existence. You can only create the conditions for it — through small, consistent, chosen acts of translated love.\"" },
      { type: "h2", text: "The Trap of Reciprocity" },
      { type: "p", text: "The most common obstacle to the upward spiral is the expectation of reciprocity: I will do my part when my partner does theirs. I will respect when I feel respected. I will appreciate when I feel appreciated. This is an understandable impulse. It is also a prescription for stalemate." },
      { type: "p", text: "The transformed marriages described in the research on positive relationship interventions are almost never the result of both partners changing simultaneously. They begin with one partner deciding to change regardless of the other — to begin the practice of translated love unilaterally, without waiting for permission or reciprocation." },
      { type: "insight", label: "The 30-Day Commitment", text: "The challenges in Modules 2 and 3 are designed to be undertaken individually, not as a couple project. Your job is not to monitor your partner's progress. It is to show up for yours — and to trust that the spiral, once started, has its own momentum." },
      { type: "p", text: "The couples who have used this workbook to transform their relationships share a common thread: they stopped waiting. They stopped auditing their partner's contributions relative to their own. They chose, as an act of faith and love, to give the language freely — and found, with time, that the language was returned." },
    ]
  },
  {
    num: 10, title: "The Practice of Daily Translation",
    subtitle: "Building rituals that keep love fluent through every season",
    content: [
      { type: "p", text: "Translation is not a project you complete. It is a practice you maintain — as ongoing and unglamorous as any other maintenance work that keeps something you love from deteriorating. The couples who sustain the gains they make through the thirty-day challenges are not the ones who had the most dramatic transformation. They are the ones who built daily rituals small enough to survive exhaustion." },
      { type: "p", text: "Rituals are the infrastructure of translated love. They are the recurring moments in the day when you choose, again, to speak your partner's language — not because you feel inspired, but because the structure of your shared life makes the choice automatic. A daily check-in, a moment of specific appreciation before sleep, a rule about phones at dinner: these tiny scaffoldings hold a love that might otherwise drift." },
      { type: "pull", text: "\"A marriage is not kept alive by grand gestures. It is kept alive by the accumulation of small, ordinary moments of genuine presence.\"" },
      { type: "h2", text: "Designing Your Translation Practice" },
      { type: "p", text: "The best translation rituals are ones you design together, with honest knowledge of your own patterns and constraints. If mornings are chaotic, a morning check-in ritual will not survive the first week. The ritual must fit your actual life — not the life you intend to live, but the one you are living now." },
      { type: "p", text: "Begin with the smallest possible version. Not a thirty-minute daily check-in, but a two-minute one. Not a handwritten note each morning, but a text. Not a weekly date night, but a weekly walk. The goal is not intensity but consistency — the accumulated signal, sent day after day, that your partner is someone you have not forgotten to see." },
      { type: "insight", label: "Start Here", text: "Choose one ritual from each language — one act of respect and one act of appreciation — that you can genuinely commit to for the next thirty days. Write them down. Tell your partner. Begin tomorrow." },
      { type: "p", text: "The practice of daily translation is, in the end, a practice of faith — faith that the person across from you at the breakfast table is still worth the effort of being truly known, and that you are still capable of growing into the partner they need you to be. That faith, practiced daily in small acts, is what love actually looks like when the falling is long over and the choosing has begun." },
    ]
  },
  {
    num: 11, title: "Becoming Bilingual",
    subtitle: "When speaking your partner's language becomes second nature",
    content: [
      { type: "p", text: "There is a moment, in language learning, when the dictionary disappears. The conscious effort of translation — the searching for the right word, the constructing of grammar, the self-conscious sense of speaking a tongue not your own — gives way to something more fluid. You begin to think in the new language. Words arrive without retrieval. The effort becomes invisible because it has been absorbed." },
      { type: "p", text: "This is what becoming bilingual in love feels like. After months of deliberate practice — of choosing respect when contempt would have come more easily, of choosing appreciation when invisibility was the path of least resistance — the deliberate begins to become natural." },
      { type: "pull", text: "\"Bilingualism in love is not the end of effort. It is the transformation of effort into grace — the point at which doing the right thing begins to feel like being yourself.\"" },
      { type: "h2", text: "The Signs of Fluency" },
      { type: "p", text: "You will know you are becoming bilingual when your partner stops being surprised by your acts of respect and appreciation. Early in the practice, every acknowledgment lands with a particular weight — the weight of unexpectedness. As fluency grows, the startlement fades. Not because the acts of love mean less, but because they have become part of the weather of the relationship — expected, ambient, quietly sustaining." },
      { type: "insight", label: "Reflection", text: "Ask your partner: \"When do you feel most loved by me?\" and \"When do you feel most unseen?\" Their answers will tell you where your fluency is growing and where it still needs work." },
      { type: "p", text: "Bilingualism does not mean you will always get it right. You will have bad days, exhausted days, days when the anti-languages surface despite your best intentions. Fluency is not perfection. It is the orientation of your defaults — the language you return to when you are at your best, and reach for even when you are not." },
    ]
  },
  {
    num: 12, title: "The Legacy of Translated Love",
    subtitle: "What we model becomes what we give to the world",
    content: [
      { type: "p", text: "The love we practice in private does not stay private. It teaches. It shapes the children who watch it, the friends who witness it, the communities it flows through. Every marriage that sustains the practice of translated love — imperfectly, faithfully, over decades — becomes a model of what is possible, and a gift to everyone in its radius." },
      { type: "pull", text: "\"The greatest thing you will ever teach your children is not a lesson. It is a marriage — the daily evidence that love, practiced faithfully, can last.\"" },
      { type: "h2", text: "What You Are Building" },
      { type: "p", text: "When you work through this book — honestly, consistently, even in the weeks when the challenges feel difficult and the discussion questions sit uncomfortably close to truths you'd rather avoid — you are building something that extends beyond your own relationship. You are building a template. A story. A piece of evidence that will outlast you." },
      { type: "p", text: "Your children will carry the image of how you treated each other into their own relationships. Your friends will bring something of what they observed in your marriage to their own. The influence of a well-translated love radiates outward in ways that are rarely visible but never entirely absent." },
      { type: "insight", label: "Your 10-Year Vision", text: "Imagine your relationship ten years from now, having practiced translated love consistently. What does it feel like? What does it look like? Write it down — and share it with your partner. The vision you hold together shapes the love you build." },
      { type: "p", text: "The work of translation is never finished. The languages of love continue to evolve as we evolve — as seasons change, as losses accumulate, as the people we married continue to become people we are still learning. The commitment this book asks of you is not to master a fixed vocabulary but to maintain a posture: the perpetual orientation of curiosity and care toward the one you chose." },
      { type: "p", text: "Keep translating. Keep noticing. Keep choosing. Not because it is easy, but because the person beside you is worth the fluency — and because the love you practice is, in the end, the love you leave behind." },
    ]
  },
];

// ─────────────────────────────────────────────
// WORKBOOK DATA
// ─────────────────────────────────────────────
const RESPECT_AUDIT = [
  { cat: "Public Validation", items: ["I speak positively about my partner to others","I defend them when criticized","I ask their opinion before announcing decisions","I use their name with honor in conversation","I acknowledge their contributions in front of others"] },
  { cat: "Private Deference", items: ["I ask rather than demand","I listen fully before responding","I support their decisions even when I disagree","I give them space to process problems","I use 'I' statements rather than accusations"] },
  { cat: "Trust & Autonomy", items: ["I avoid micromanaging their tasks","I allow them to parent differently without correction","I trust their judgment on practical matters","I respect their need for alone time","I avoid comparing them to others"] },
  { cat: "Physical & Emotional Signals", items: ["I make eye contact when they speak","I maintain relaxed body language during disagreements","I show affection not conditional on performance","I avoid sighs, eye-rolls, dismissive gestures","I turn toward them during important conversations"] },
];

const APPRECIATION_AUDIT = [
  { cat: "Verbal Recognition", items: ["I give specific thank-yous for daily tasks","I compliment their appearance with details","I acknowledge their invisible labor","I praise their character, not just actions","I remember and mention things they said days ago"] },
  { cat: "Active Participation", items: ["I notice when they're tired and take initiative","I ask about their day with genuine curiosity","I participate in their interests without being asked","I protect their time from others' demands","I publicly credit them for joint successes"] },
  { cat: "Tangible Thoughtfulness", items: ["I give small gifts showing I know their preferences","I take photos of them (not just the kids)","I plan dates without them coordinating","I handle tasks they mentioned dreading","I preserve mementos from shared experiences"] },
  { cat: "Emotional Presence", items: ["I'm mentally present when physically together","I remember important dates and conversations","I acknowledge their achievements and struggles","I offer empathy before solutions","I initiate affection and connection"] },
];

const RESPECT_CHALLENGE = [
  { week: 1, theme: "Public Validation", days: ["Tell them one thing you admire about them in front of others","Post something positive about them (with permission)","Ask their opinion before making a small decision","Thank them publicly for something they did","Introduce them using words of respect","Defend them if someone criticizes them","Share why you're proud to be their partner"] },
  { week: 2, theme: "Private Deference", days: ["Ask 'What do you think?' before sharing your opinion","Listen for 5 minutes without interrupting","Support a decision they made that you disagreed with","Give them 30 minutes alone without asking what's wrong","Use 'I feel…' instead of 'You always…'","Ask how you can support them today","Thank them for leading/providing in a specific way"] },
  { week: 3, theme: "Trust & Autonomy", days: ["Don't 'help' them with a task they're handling","Let them make decisions without your input","Trust their judgment without questioning","Encourage them to spend time on a hobby","Avoid any comparison to others for 24 hours","Ask for their help instead of assuming they won't do it right","Apologize for a time you micromanaged them"] },
  { week: 4, theme: "Physical & Emotional Signals", days: ["Make eye contact during every conversation today","Keep body language open during a disagreement","Initiate affection without them performing first","Eliminate sighs and eye-rolls for 24 hours","Turn toward them when they speak","Smile when they enter the room","Hold their hand in public","Write them a note expressing respect","Ask: 'What makes you feel most respected?'"] },
];

const APPRECIATION_CHALLENGE = [
  { week: 1, theme: "Verbal Recognition", days: ["Give a specific thank-you for one daily task","Compliment their appearance with details","Acknowledge one invisible thing they do","Praise their character (patience, kindness, strength)","Mention something they told you days ago","Thank them for how they care for the family","Tell them why you're grateful they're your partner"] },
  { week: 2, theme: "Active Participation", days: ["Notice they're tired and take over a task","Ask about their day and listen for 10 minutes","Join them in one of their interests/hobbies","Protect their time by saying 'no' on their behalf","Publicly credit them for something you did together","Ask 'How can I help you today?' and follow through","Plan a date (all details) without their input"] },
  { week: 3, theme: "Tangible Thoughtfulness", days: ["Bring home a small gift showing you know their taste","Take a photo of just them","Handle a task they mentioned dreading","Preserve a memento from a recent shared experience","Write them a handwritten note","Cook their favorite meal or order their favorite food","Create something (playlist, photo album) just for them"] },
  { week: 4, theme: "Emotional Presence", days: ["Put away your phone during all conversations today","Remember an important date or conversation","Acknowledge a struggle they're facing without offering solutions","Initiate affection without them asking","Ask their feelings about something and just listen","Tell them you noticed something that usually goes unseen","Apologize for a time you took them for granted","Write down 10 things you appreciate about them","Ask: 'What makes you feel most appreciated?'"] },
];

const SESSIONS = [
  { num:1, title:"The Translation Gap", opening:"Share a time you felt loved but your partner didn't realize it.", questions:["What do I naturally do to show love? Why?","When have I felt my partner 'missed' my love language?","What does it cost me to speak my partner's language?","How would our relationship change if we became 'bilingual'?"], commit:"This week, I will notice when my partner speaks my language, even if it's imperfect." },
  { num:2, title:"The Language of Respect", opening:"What did you learn about respect from your upbringing?", questions:["Which respectful action would mean most to your partner? Ask them.","When have you felt most respected? Describe the moment.","What triggers disrespect in you? How can you manage it?","How does disrespect feel physically/emotionally?"], commit:"I will eliminate one disrespectful habit this week." },
  { num:3, title:"The Language of Appreciation", opening:"What did you learn about appreciation from your upbringing?", questions:["Which appreciative action would mean most to your partner?","When have you felt most appreciated? Describe the moment.","What makes appreciation feel difficult for you?","How does invisibility feel physically/emotionally?"], commit:"I will eliminate one unappreciative habit this week." },
  { num:4, title:"The Anti-Languages", opening:"Share a time you experienced contempt or invisibility.", questions:["Which disrespectful action do I do most often? Why?","Which unappreciative action do I do most often? Why?","How do these 'anti-languages' become habits?","What would it take to replace them with positive actions?"], commit:"I will catch myself in one anti-language moment this week and choose differently." },
  { num:5, title:"The Respect Audit", opening:"What's one area where respect is hardest for me to give?", questions:["What was your lowest-scoring area? Why is that difficult?","Where do you feel most disrespected currently?","What stressors are making respect harder right now?","How can we create 'respect zones'?"], commit:"I will begin the 30-Day Respect Challenge this week." },
  { num:6, title:"The Appreciation Audit", opening:"What's one area where appreciation is hardest for me to give?", questions:["What was your lowest-scoring area? Why?","Where do you feel most invisible currently?","What demands are making appreciation harder?","How can we create 'appreciation rituals'?"], commit:"I will begin the 30-Day Appreciation Challenge this week." },
  { num:7, title:"The Upward Spiral", opening:"Share a time when one positive change led to another.", questions:["How has my challenge affected my partner so far?","What positive changes have I noticed in myself?","How do we prevent the 'I will when they do' trap?","What would our relationship look like in 1 year with this momentum?"], commit:"We will celebrate progress monthly and adjust goals quarterly." },
  { num:8, title:"When It Feels Impossible", opening:"What makes speaking your partner's language feel impossible?", questions:["What breaches of trust have we experienced? How did we recover?","What resentments block my respect/appreciation?","How do we differentiate unconditional love from blind trust?","When is professional help needed?"], commit:"We will seek help if we cannot move forward alone." },
  { num:9, title:"Seasonal Translations", opening:"What season of your relationship has been hardest?", questions:["How did our needs change as our relationship evolved?","What life stages do we anticipate?","How can we prepare for future seasons?","What 'seasonal translation' do we need most right now?"], commit:"We will adapt our love languages as our seasons change." },
  { num:10, title:"Legacy of Love", opening:"What do we want others to learn about love from us?", questions:["How are we currently modeling respect and appreciation?","What would 'becoming bilingual' look like for us?","How can we support other couples?","What is our 10-year vision?"], commit:"We will leave a legacy of translated love." },
];

// ─────────────────────────────────────────────
// SHARED COMPONENTS
// ─────────────────────────────────────────────
const Ring = ({ pct, size = 72, stroke = 6, color = T.rose, bg = T.blush }) => {
  const r = (size - stroke * 2) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={bg} strokeWidth={stroke} opacity={0.25}/>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={circ * (1 - pct)} strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.7s ease" }}/>
    </svg>
  );
};

const TA = ({ value, onChange, placeholder, minH = 80 }) => (
  <textarea value={value} onChange={onChange} placeholder={placeholder}
    style={{ width:"100%", minHeight:minH, border:`1px solid rgba(194,123,106,0.22)`, background:T.parchment, borderRadius:6, padding:"10px 14px", fontSize:16, lineHeight:1.7, resize:"vertical", outline:"none", color:T.deep, fontFamily:"'Cormorant Garamond', Georgia, serif", fontWeight:300, WebkitAppearance:"none", boxSizing:"border-box" }}/>
);

const ULabel = ({ children }) => (
  <div style={{ fontSize:10, letterSpacing:"0.22em", textTransform:"uppercase", color:T.gold, marginBottom:10 }}>{children}</div>
);

// ─────────────────────────────────────────────
// BOOK READER COMPONENT
// ─────────────────────────────────────────────
const BookReader = () => {
  const [chIdx, setChIdx] = useState(0);
  const [fontSize, setFontSize] = useState(19);
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const ch = BOOK_CHAPTERS[chIdx];

  const goTo = (i) => {
    setChIdx(i);
    setDrawerOpen(false);
    const el = document.getElementById("book-scroll-area");
    if (el) el.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bg = darkMode ? "#1a1210" : T.cream;
  const textColor = darkMode ? "#e8ddd4" : T.deep;
  const parchmentColor = darkMode ? "rgba(255,255,255,0.04)" : T.parchment;
  const pullBg = darkMode ? "rgba(194,123,106,0.13)" : "rgba(194,123,106,0.06)";
  const sidebarBg = darkMode ? "#110d0c" : T.deep2;

  const renderBlock = (block, i) => {
    const pStyle = { fontFamily:"'Cormorant Garamond',serif", fontSize, lineHeight:1.9, color:textColor, marginBottom:"1.4em", fontWeight:300 };
    switch(block.type) {
      case "p": return <p key={i} style={pStyle}>{block.text}</p>;
      case "h2": return (
        <h2 key={i} style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:fontSize*1.3, fontWeight:500, color:textColor, margin:"2.2em 0 0.7em", lineHeight:1.3 }}>{block.text}</h2>
      );
      case "pull": return (
        <div key={i} style={{ margin:"2em 0", padding:"20px 24px", borderLeft:`3px solid ${T.rose}`, background:pullBg, borderRadius:"0 6px 6px 0" }}>
          <p style={{ ...pStyle, fontStyle:"italic", color:T.rose, margin:0, fontSize:fontSize*1.05 }}>{block.text}</p>
        </div>
      );
      case "insight": return (
        <div key={i} style={{ margin:"2em 0", padding:"18px 22px", background:parchmentColor, borderRadius:8, borderTop:`3px solid ${T.gold}` }}>
          <div style={{ fontSize:9, letterSpacing:"0.22em", textTransform:"uppercase", color:T.gold, marginBottom:8 }}>{block.label}</div>
          <p style={{ ...pStyle, margin:0, fontSize:fontSize*0.95 }}>{block.text}</p>
        </div>
      );
      default: return null;
    }
  };

  return (
    <div style={{ display:"flex", height:"100%", overflow:"hidden", background:bg, position:"relative" }}>
      {/* Mobile overlay */}
      {drawerOpen && (
        <div onClick={() => setDrawerOpen(false)}
          style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.4)", zIndex:199 }}/>
      )}

      {/* Sidebar */}
      <aside style={{
        width:240, flexShrink:0, background:sidebarBg,
        display:"flex", flexDirection:"column",
        borderRight:`1px solid rgba(194,123,106,0.1)`,
        overflowY:"auto", transition:"transform 0.28s ease",
        position: "relative", zIndex: 10,
      }}>
        <div style={{ padding:"20px 18px 14px", borderBottom:"1px solid rgba(255,255,255,0.07)", flexShrink:0 }}>
          <div style={{ fontSize:9, letterSpacing:"0.22em", textTransform:"uppercase", color:T.gold, opacity:0.6, marginBottom:8 }}>Contents</div>
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:14, color:T.rose }}>{BOOK_CHAPTERS.length} Chapters</div>
        </div>
        <div style={{ flex:1, overflowY:"auto", padding:"8px 0" }}>
          {BOOK_CHAPTERS.map((c, i) => (
            <button key={i} onClick={() => goTo(i)}
              style={{
                display:"flex", alignItems:"flex-start", gap:10,
                width:"100%", background:"none",
                borderLeft: i === chIdx ? `3px solid ${T.rose}` : "3px solid transparent",
                borderTop:"none", borderRight:"none", borderBottom:"none",
                cursor:"pointer", padding:"10px 18px", textAlign:"left",  transition:"background 0.15s",
              }}>
              <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:12, color:T.rose, opacity:0.55, flexShrink:0, marginTop:1 }}>{String(c.num).padStart(2,"0")}</span>
              <span style={{ fontSize:11, color: i === chIdx ? T.blush : "rgba(255,255,255,0.5)", lineHeight:1.45 }}>{c.title}</span>
            </button>
          ))}
        </div>
        <div style={{ padding:"16px 18px", borderTop:"1px solid rgba(255,255,255,0.07)", fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:11, color:"rgba(255,255,255,0.2)", lineHeight:1.7 }}>
          "Translation is a lifelong practice, not a one-time achievement."
        </div>
      </aside>

      {/* Main reading pane */}
      <div style={{ flex:1, display:"flex", flexDirection:"column", overflow:"hidden" }}>
        {/* Reader toolbar */}
        <div style={{
          flexShrink:0, height:52,
          background: darkMode ? "rgba(26,18,16,0.97)" : "rgba(250,246,240,0.97)",
          backdropFilter:"blur(14px)",
          borderBottom:`1px solid rgba(194,123,106,0.14)`,
          display:"flex", alignItems:"center", padding:"0 24px", gap:12,
        }}>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontSize:9, letterSpacing:"0.2em", textTransform:"uppercase", color:T.gold }}>Chapter {ch.num}</div>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:15, fontStyle:"italic", color:textColor, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{ch.title}</div>
          </div>
          <div style={{ display:"flex", gap:6, alignItems:"center" }}>
            {[["A−", -1], ["A+", 1]].map(([label, d]) => (
              <button key={label} onClick={() => setFontSize(s => Math.max(15, Math.min(26, s + d)))}
                style={{ width:30, height:30, borderRadius:6, border:`1px solid rgba(194,123,106,0.25)`, background:"transparent", cursor:"pointer", fontFamily:"'Cormorant Garamond',serif", color:T.rose, fontSize:12 }}>
                {label}
              </button>
            ))}
            <button onClick={() => setDarkMode(d => !d)}
              style={{ padding:"5px 10px", borderRadius:6, border:`1px solid rgba(194,123,106,0.25)`, background:"transparent", cursor:"pointer", fontSize:9, letterSpacing:"0.1em", textTransform:"uppercase", color:T.rose }}>
              {darkMode ? "☀ Light" : "☾ Dark"}
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div id="book-scroll-area" style={{ flex:1, overflowY:"auto", overflowX:"hidden" }}>
          <div style={{ maxWidth:660, margin:"0 auto", padding:"48px 36px 60px" }}>
            <div style={{ fontSize:9, letterSpacing:"0.3em", textTransform:"uppercase", color:T.gold, marginBottom:10 }}>
              Chapter {ch.num} of {BOOK_CHAPTERS.length}
            </div>
            <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.9rem,4vw,2.9rem)", fontWeight:300, color:textColor, lineHeight:1.15, marginBottom:8 }}>
              {ch.title}
            </h1>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:18, fontStyle:"italic", color:T.rose, marginBottom:28, lineHeight:1.45 }}>
              {ch.subtitle}
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:32 }}>
              <div style={{ flex:1, height:1, background:"rgba(194,123,106,0.22)" }}/>
              <div style={{ width:6, height:6, borderRadius:"50%", background:T.rose, opacity:0.45 }}/>
              <div style={{ flex:1, height:1, background:"rgba(194,123,106,0.22)" }}/>
            </div>
            {ch.content.map((block, i) => renderBlock(block, i))}
          </div>

          {/* Chapter navigation */}
          <div style={{ maxWidth:660, margin:"0 auto", padding:"16px 36px 48px", borderTop:`1px solid rgba(194,123,106,0.14)`, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <button onClick={() => goTo(Math.max(0, chIdx - 1))} disabled={chIdx === 0}
              style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 16px", border:`1px solid rgba(194,123,106,0.25)`, background:"transparent", borderRadius:8, cursor:chIdx===0?"default":"pointer", fontSize:11, letterSpacing:"0.1em", textTransform:"uppercase", color:T.rose, opacity:chIdx===0?0.25:1 }}>
              ← Prev
            </button>
            <span style={{ fontSize:10, color:T.rose, opacity:0.4 }}>{chIdx+1} / {BOOK_CHAPTERS.length}</span>
            <button onClick={() => goTo(Math.min(BOOK_CHAPTERS.length-1, chIdx+1))} disabled={chIdx===BOOK_CHAPTERS.length-1}
              style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 16px", border:"none", background:T.rose, color:T.white, borderRadius:8, cursor:chIdx===BOOK_CHAPTERS.length-1?"default":"pointer", fontSize:11, letterSpacing:"0.1em", textTransform:"uppercase", opacity:chIdx===BOOK_CHAPTERS.length-1?0.3:1 }}>
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// WORKBOOK COMPONENTS (unchanged from original)
// ─────────────────────────────────────────────
const Audit = ({ data, scores, setScores, sk }) => {
  const totalPts = data.reduce((s, c) => s + c.items.length, 0) * 5;
  const scored = Object.values(scores).reduce((a, b) => a + b, 0);
  const pct = totalPts ? scored / totalPts : 0;
  const lbl = pct >= 0.8 ? "Strong foundation 💪" : pct >= 0.6 ? "Room to grow 🌱" : pct >= 0.4 ? "Needs attention ⚠️" : "Critical deficit 🚨";
  let gi = 0;
  return (
    <div>
      <div style={{ display:"flex", alignItems:"center", gap:16, padding:16, background:T.white, border:`1px solid rgba(194,123,106,0.15)`, borderRadius:8, marginBottom:20 }}>
        <div style={{ position:"relative", flexShrink:0 }}>
          <Ring pct={pct}/>
          <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:700, color:T.rose }}>{Math.round(pct*100)}%</div>
        </div>
        <div>
          <div style={{ fontSize:18, fontFamily:"'Cormorant Garamond',serif", marginBottom:4 }}>Score: <b style={{ color:T.rose }}>{scored}</b> / {totalPts}</div>
          <div style={{ fontSize:13, color:T.rose }}>{lbl}</div>
          <div style={{ fontSize:11, opacity:0.45, marginTop:4 }}>Rate 1 (Never) → 5 (Always)</div>
        </div>
      </div>
      {data.map(cat => {
        return (
          <div key={cat.cat} style={{ marginBottom:20 }}>
            <ULabel>{cat.cat}</ULabel>
            {cat.items.map(item => {
              const idx = gi++; const k = `${sk}_${idx}`; const val = scores[k] || 0;
              return (
                <div key={idx} style={{ padding:"12px 14px", background:T.parchment, borderRadius:8, marginBottom:8 }}>
                  <div style={{ fontSize:14, lineHeight:1.6, opacity:0.85, marginBottom:10 }}>{item}</div>
                  <div style={{ display:"flex", gap:6 }}>
                    {[1,2,3,4,5].map(n => (
                      <button key={n} onClick={() => setScores(p => ({ ...p, [k]:n }))}
                        style={{ flex:1, height:38, borderRadius:6, border:`1.5px solid`, cursor:"pointer", fontSize:14, fontWeight:600, transition:"all 0.15s", background:val>=n?T.rose:"transparent", borderColor:val>=n?T.rose:"rgba(194,123,106,0.3)", color:val>=n?T.white:T.rose, minWidth:0, WebkitTapHighlightColor:"transparent" }}>
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const Challenge = ({ weeks, done, setDone, notes, setNotes, sk }) => {
  const total = weeks.reduce((s, w) => s + w.days.length, 0);
  const comp = Object.values(done).filter(Boolean).length;
  let dn = 0;
  return (
    <div>
      <div style={{ display:"flex", alignItems:"center", gap:16, padding:16, background:T.deep2, borderRadius:8, marginBottom:20 }}>
        <div style={{ position:"relative", flexShrink:0 }}>
          <Ring pct={comp/total} color={T.gold} bg="rgba(232,196,176,0.3)"/>
          <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:600, color:T.gold }}>{comp}/{total}</div>
        </div>
        <div>
          <div style={{ fontSize:18, fontFamily:"'Cormorant Garamond',serif", color:T.white, marginBottom:4 }}>30-Day Challenge</div>
          <div style={{ fontSize:13, color:T.blush }}>{comp===0?"Not started":comp===total?"🎉 Complete!":`${total-comp} days remaining`}</div>
        </div>
      </div>
      {weeks.map(week => (
        <div key={week.week} style={{ marginBottom:24 }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:18 }}>Week {week.week}</div>
            <div style={{ height:1, flex:1, background:"rgba(194,123,106,0.2)" }}/>
            <div style={{ fontSize:10, letterSpacing:"0.15em", textTransform:"uppercase", color:T.gold }}>{week.theme}</div>
          </div>
          {week.days.map(action => {
            dn++; const d = dn; const k = `${sk}_d${d}`; const isDone = done[k]||false; const nk = `${sk}_n${d}`;
            return (
              <div key={d} style={{ marginBottom:8, padding:"12px 14px", background:isDone?"rgba(194,123,106,0.07)":T.white, border:`1px solid`, borderColor:isDone?T.rose:"rgba(194,123,106,0.12)", borderRadius:8, transition:"all 0.25s" }}>
                <div style={{ display:"flex", alignItems:"flex-start", gap:12 }}>
                  <button onClick={() => setDone(p => ({ ...p, [k]:!isDone }))}
                    style={{ width:26, height:26, borderRadius:6, border:`1.5px solid`, borderColor:isDone?T.rose:"rgba(194,123,106,0.3)", background:isDone?T.rose:"transparent", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1, transition:"all 0.2s", WebkitTapHighlightColor:"transparent" }}>
                    {isDone && <span style={{ color:T.white, fontSize:13 }}>✓</span>}
                  </button>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:10, color:T.gold, marginBottom:3 }}>Day {d}</div>
                    <div style={{ fontSize:14, lineHeight:1.55, opacity:isDone?0.5:0.85, textDecoration:isDone?"line-through":"none" }}>{action}</div>
                    {isDone && <input value={notes[nk]||""} onChange={e => setNotes(p => ({ ...p, [nk]:e.target.value }))} placeholder="Note their response…"
                      style={{ marginTop:8, width:"100%", border:"none", borderBottom:"1px solid rgba(194,123,106,0.2)", background:"transparent", fontSize:16, padding:"4px 0", color:T.deep, outline:"none" }}/>}
                  </div>
                </div>
              </div>
            );
          })}
          <div style={{ marginTop:12 }}>
            <div style={{ fontSize:10, letterSpacing:"0.15em", textTransform:"uppercase", color:T.gold, marginBottom:6, opacity:0.7 }}>Week {week.week} Reflection</div>
            <TA value={notes[`${sk}_r${week.week}`]||""} onChange={e => setNotes(p => ({ ...p, [`${sk}_r${week.week}`]:e.target.value }))} placeholder={`How did ${week.theme.toLowerCase()} go?`} minH={72}/>
          </div>
        </div>
      ))}
    </div>
  );
};

const Progress = ({ label, cats, data, setData }) => (
  <div style={{ marginBottom:32 }}>
    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, marginBottom:14, color:T.deep }}>{label}</div>
    <div style={{ overflowX:"auto", WebkitOverflowScrolling:"touch" }}>
      <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12, minWidth:300 }}>
        <thead><tr>
          <th style={{ textAlign:"left", padding:"6px 10px", fontSize:9, letterSpacing:"0.18em", textTransform:"uppercase", color:T.gold, borderBottom:`1px solid rgba(194,123,106,0.2)` }}>Wk</th>
          {cats.map(c => <th key={c} style={{ padding:"6px 4px", fontSize:9, letterSpacing:"0.06em", textTransform:"uppercase", color:T.gold, borderBottom:`1px solid rgba(194,123,106,0.2)`, textAlign:"center" }}>{c.split(" ").slice(-1)[0]}</th>)}
          <th style={{ padding:"6px 4px", fontSize:9, color:T.rose, borderBottom:`1px solid rgba(194,123,106,0.2)`, textAlign:"center" }}>Avg</th>
        </tr></thead>
        <tbody>
          {[1,2,3,4].map(w => {
            const vals = cats.map(c => data[`${label}_w${w}_${c}`]||0);
            const filled = vals.filter(Boolean);
            const avg = filled.length ? filled.reduce((a,b)=>a+b,0)/filled.length : 0;
            return (
              <tr key={w} style={{ background:w%2?T.white:T.parchment }}>
                <td style={{ padding:"8px 10px", fontFamily:"'Cormorant Garamond',serif", fontSize:16, color:T.rose }}>W{w}</td>
                {cats.map(c => (
                  <td key={c} style={{ padding:"4px 3px", textAlign:"center" }}>
                    <select value={data[`${label}_w${w}_${c}`]||""} onChange={e => setData(p => ({ ...p, [`${label}_w${w}_${c}`]:Number(e.target.value) }))}
                      style={{ border:`1px solid rgba(194,123,106,0.2)`, background:T.white, borderRadius:4, padding:"4px 2px", fontSize:13, color:T.deep, cursor:"pointer", outline:"none", width:"100%", maxWidth:42 }}>
                      <option value="">—</option>
                      {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </td>
                ))}
                <td style={{ padding:"4px 4px", textAlign:"center", fontFamily:"'Cormorant Garamond',serif", fontSize:16, color:T.rose }}>{avg?avg.toFixed(1):"—"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    <div style={{ marginTop:14, display:"flex", flexDirection:"column", gap:12 }}>
      {["What improved most?","What still needs work?","Partner's feedback"].map(q => (
        <div key={q}>
          <div style={{ fontSize:11, opacity:0.55, marginBottom:5 }}>{q}</div>
          <input value={data[`${label}_${q}`]||""} onChange={e => setData(p => ({ ...p, [`${label}_${q}`]:e.target.value }))}
            style={{ width:"100%", border:"none", borderBottom:"1px solid rgba(194,123,106,0.22)", background:"transparent", padding:"6px 0", fontSize:16, color:T.deep, outline:"none" }}/>
        </div>
      ))}
    </div>
  </div>
);

const CrisisBlock = ({ title, color, causes, pk, data, onUpdate }) => (
  <div style={{ marginBottom:20, padding:18, background:T.white, border:`1px solid rgba(194,123,106,0.12)`, borderRadius:8 }}>
    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, color, marginBottom:14 }}>{title}</div>
    <ULabel>What caused this?</ULabel>
    <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:16 }}>
      {causes.map(c => (
        <button key={c} onClick={() => onUpdate(`${pk}_${c}`, !data[`${pk}_${c}`])}
          style={{ padding:"9px 14px", borderRadius:20, border:`1.5px solid`, cursor:"pointer", fontSize:13, transition:"all 0.2s", background:data[`${pk}_${c}`]?color:"transparent", borderColor:data[`${pk}_${c}`]?color:"rgba(194,123,106,0.3)", color:data[`${pk}_${c}`]?T.white:T.deep, WebkitTapHighlightColor:"transparent" }}>
          {c}
        </button>
      ))}
    </div>
    {[["Acknowledge the breach","What happened and how it affected things"],["Identify the path back","What specific actions could help rebuild?"],["Set boundaries","What is necessary to move forward?"],["Commit to the process","What am I willing to do for 90 days?"]].map(([label,ph],i) => (
      <div key={label} style={{ marginBottom:14 }}>
        <div style={{ fontSize:12, opacity:0.6, marginBottom:6 }}>{i+1}. {label}</div>
        <TA value={data[`${pk}_${i}`]||""} onChange={e => onUpdate(`${pk}_${i}`, e.target.value)} placeholder={ph} minH={72}/>
      </div>
    ))}
  </div>
);

const Crisis = () => {
  const [d, setD] = useState({});
  const upd = (k,v) => setD(p => ({ ...p, [k]:v }));
  return (
    <div>
      <div style={{ padding:14, background:"rgba(194,123,106,0.08)", border:`1px solid rgba(194,123,106,0.2)`, borderRadius:8, marginBottom:20, fontSize:13, lineHeight:1.7, opacity:0.8 }}>
        ⚠️ This module is for deeply strained seasons. If you're in immediate danger or experiencing abuse, please reach out to a professional.
      </div>
      <CrisisBlock title="When Respect Has Been Broken" color={T.rose} pk="resp" causes={["Their actions","My actions","Mutual patterns","External stress"]} data={d} onUpdate={upd}/>
      <CrisisBlock title="When Appreciation Has Been Broken" color={T.gold} pk="appr" causes={["My actions","Their actions","Mutual patterns","Life stage demands"]} data={d} onUpdate={upd}/>
    </div>
  );
};

const Discussion = () => {
  const [idx, setIdx] = useState(0);
  const [ans, setAns] = useState({});
  const [commits, setCommits] = useState({});
  const s = SESSIONS[idx];
  return (
    <div>
      <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:20 }}>
        {SESSIONS.map((ss,i) => (
          <button key={i} onClick={() => setIdx(i)}
            style={{ width:38, height:38, borderRadius:"50%", border:`1.5px solid`, cursor:"pointer", fontSize:13, fontWeight:600, transition:"all 0.2s", fontFamily:"'Cormorant Garamond',serif", background:idx===i?T.rose:"transparent", borderColor:idx===i?T.rose:"rgba(194,123,106,0.3)", color:idx===i?T.white:T.deep, WebkitTapHighlightColor:"transparent" }}>
            {ss.num}
          </button>
        ))}
      </div>
      <div style={{ padding:20, background:T.deep2, borderRadius:8, marginBottom:16, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:-20, right:16, fontFamily:"'Cormorant Garamond',serif", fontSize:100, color:"rgba(194,123,106,0.06)", lineHeight:1, pointerEvents:"none" }}>"</div>
        <div style={{ fontSize:9, letterSpacing:"0.25em", textTransform:"uppercase", color:T.gold, marginBottom:6 }}>Session {s.num} of 10</div>
        <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, color:T.white, fontStyle:"italic", marginBottom:10 }}>{s.title}</div>
        <div style={{ fontSize:13, color:"rgba(255,255,255,0.5)", lineHeight:1.7, fontStyle:"italic" }}>Opening: {s.opening}</div>
      </div>
      <ULabel>Discussion Questions</ULabel>
      {s.questions.map((q,qi) => (
        <div key={qi} style={{ marginBottom:12, padding:"14px 16px", background:T.white, border:`1px solid rgba(194,123,106,0.12)`, borderRadius:8 }}>
          <div style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:18, color:T.rose, opacity:0.5, flexShrink:0, lineHeight:1, marginTop:2 }}>0{qi+1}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:14, lineHeight:1.6, marginBottom:8, opacity:0.85 }}>{q}</div>
              <TA value={ans[`s${s.num}_q${qi}`]||""} onChange={e => setAns(p => ({ ...p, [`s${s.num}_q${qi}`]:e.target.value }))} placeholder="Your thoughts…" minH={64}/>
            </div>
          </div>
        </div>
      ))}
      <div style={{ padding:16, background:"rgba(201,169,110,0.1)", border:`1px solid rgba(201,169,110,0.25)`, borderRadius:8, margin:"16px 0" }}>
        <ULabel>Commitment</ULabel>
        <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:16, fontStyle:"italic", marginBottom:12, lineHeight:1.55, color:T.deep }}>"{s.commit}"</div>
        <button onClick={() => setCommits(p => ({ ...p, [s.num]:!p[s.num] }))}
          style={{ display:"flex", alignItems:"center", gap:10, background:"none", border:"none", cursor:"pointer", color:T.deep, fontSize:14, padding:0, WebkitTapHighlightColor:"transparent" }}>
          <div style={{ width:24, height:24, borderRadius:6, border:`1.5px solid`, borderColor:commits[s.num]?T.rose:"rgba(194,123,106,0.4)", background:commits[s.num]?T.rose:"transparent", display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.2s", flexShrink:0 }}>
            {commits[s.num] && <span style={{ color:T.white, fontSize:13 }}>✓</span>}
          </div>
          I commit to this
        </button>
      </div>
      <div style={{ display:"flex", justifyContent:"space-between", gap:10 }}>
        <button onClick={() => setIdx(Math.max(0,idx-1))} disabled={idx===0}
          style={{ flex:1, padding:"14px 12px", border:`1px solid rgba(194,123,106,0.3)`, background:"transparent", borderRadius:8, cursor:idx===0?"default":"pointer", fontSize:12, letterSpacing:"0.1em", textTransform:"uppercase", opacity:idx===0?0.3:1 }}>← Prev</button>
        <span style={{ fontSize:11, opacity:0.4, alignSelf:"center", whiteSpace:"nowrap" }}>{idx+1}/{SESSIONS.length}</span>
        <button onClick={() => setIdx(Math.min(SESSIONS.length-1,idx+1))} disabled={idx===SESSIONS.length-1}
          style={{ flex:1, padding:"14px 12px", border:"none", background:T.rose, color:T.white, borderRadius:8, cursor:idx===SESSIONS.length-1?"default":"pointer", fontSize:12, letterSpacing:"0.1em", textTransform:"uppercase", opacity:idx===SESSIONS.length-1?0.3:1 }}>Next →</button>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// NAV + LAYOUT
// ─────────────────────────────────────────────
const NAV = [
  { id:"home",  icon:"🌸", label:"Home" },
  { id:"book",  icon:"📖", label:"Book" },
  { id:"m1",   icon:"🔍", label:"Discover" },
  { id:"m2",   icon:"🌹", label:"Respect" },
  { id:"m3",   icon:"💛", label:"Appreciate" },
  { id:"m4",   icon:"📊", label:"Progress" },
  { id:"m5",   icon:"🕊️", label:"Recovery" },
  { id:"guide",icon:"💬", label:"Discussion" },
];

const PAGE_META = {
  book:  { title:"Read the Book",                    icon:"📖" },
  m1:    { title:"Discovering Your Language",         icon:"🔍" },
  m2:    { title:"30-Day Respect Challenge",          icon:"🌹" },
  m3:    { title:"30-Day Appreciation Challenge",     icon:"💛" },
  m4:    { title:"Progress Trackers",                 icon:"📊" },
  m5:    { title:"Crisis Recovery",                   icon:"🕊️" },
  guide: { title:"Discussion Guide",                  icon:"💬" },
};

function SidebarContents({ page, rComp, aComp, navigateTo }) {
  return (
    <>
      <div style={{ padding:"0 16px 20px", borderBottom:`1px solid rgba(255,255,255,0.06)`, marginBottom:20 }}>
        <div style={{ fontSize:8, letterSpacing:"0.22em", textTransform:"uppercase", color:T.gold, marginBottom:12, opacity:0.7 }}>Your Progress</div>
        {[
          { label:"Respect", comp:rComp, total:30, color:T.rose },
          { label:"Appreciation", comp:aComp, total:30, color:T.gold },
        ].map(({ label, comp, total, color }) => (
          <div key={label} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
            <div style={{ position:"relative", flexShrink:0 }}>
              <Ring pct={comp/total} size={40} stroke={4} color={color} bg="rgba(232,196,176,0.15)"/>
              <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, fontWeight:700, color }}>{comp}</div>
            </div>
            <div>
              <div style={{ fontSize:11, color:"rgba(255,255,255,0.6)", marginBottom:1 }}>{label}</div>
              <div style={{ fontSize:9, color:"rgba(255,255,255,0.3)" }}>{comp}/{total} days</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding:"0 10px", flex:1 }}>
        {[
          { id:"home",  icon:"🌸", label:"Home",    sub:"Overview" },
          { id:"book",  icon:"📖", label:"Book",    sub:"Read Online" },
          { id:"m1",   icon:"🔍", label:"Module 1", sub:"Discover" },
          { id:"m2",   icon:"🌹", label:"Module 2", sub:"Respect" },
          { id:"m3",   icon:"💛", label:"Module 3", sub:"Appreciate" },
          { id:"m4",   icon:"📊", label:"Module 4", sub:"Progress" },
          { id:"m5",   icon:"🕊️", label:"Module 5", sub:"Recovery" },
          { id:"guide",icon:"💬", label:"Part 2",   sub:"Discussion" },
        ].map(n => (
          <button key={n.id} onClick={() => navigateTo(n.id)}
            style={{ width:"100%", display:"flex", alignItems:"center", gap:10, padding:"11px 10px", borderRadius:6, border:"none", cursor:"pointer", marginBottom:2, transition:"all 0.18s", textAlign:"left", background:page===n.id?"rgba(194,123,106,0.18)":"transparent", WebkitTapHighlightColor:"transparent" }}>
            <span style={{ fontSize:16, flexShrink:0 }}>{n.icon}</span>
            <div>
              <div style={{ fontSize:12, color:page===n.id?T.blush:"rgba(255,255,255,0.55)", lineHeight:1.2 }}>{n.label}</div>
              <div style={{ fontSize:9, color:"rgba(255,255,255,0.25)", marginTop:1 }}>{n.sub}</div>
            </div>
            {page===n.id && <div style={{ marginLeft:"auto", width:3, height:18, background:T.rose, borderRadius:2, flexShrink:0 }}/>}
          </button>
        ))}
      </div>
      <div style={{ padding:"20px 16px 0", borderTop:`1px solid rgba(255,255,255,0.06)`, marginTop:20 }}>
        <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:11, fontStyle:"italic", color:"rgba(255,255,255,0.2)", lineHeight:1.7 }}>
          "Translation is a lifelong practice, not a one-time achievement."
        </div>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────
// ROOT APP
// ─────────────────────────────────────────────
export default function App() {
  const [page, setPage]           = useState("home");
  const [m1tab, setM1tab]         = useState("gap");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [gapData, setGapData]     = useState({ q1:"", q2:"", q3:"", q4:"", reflection:"", rows:[{ give:"", need:"", response:"" }] });
  const [rScores, setRScores]     = useState({});
  const [aScores, setAScores]     = useState({});
  const [rdone,   setRdone]       = useState({});
  const [rnotes,  setRnotes]      = useState({});
  const [adone,   setAdone]       = useState({});
  const [anotes,  setAnotes]      = useState({});
  const [progress,setProgress]    = useState({});

  const rComp = Object.values(rdone).filter(Boolean).length;
  const aComp = Object.values(adone).filter(Boolean).length;
  const meta  = PAGE_META[page];

  const navigateTo = (id) => { setPage(id); setSidebarOpen(false); };

  // Book page uses its own full-height layout — no padding wrapper
  const isBook = page === "book";

  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100vh", width:"100vw", overflow:"hidden", background:T.cream }}>

      <style>{`
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html, body { height:100%; width:100%; overflow:hidden; }
        #root { height:100%; width:100%; display:flex; flex-direction:column; }
        body {
          font-family:'Jost','Georgia',sans-serif; font-weight:300;
          color:${T.deep}; background:${T.cream};
          display:block; place-items:unset; min-height:unset; min-width:unset;
          -webkit-text-size-adjust:100%;
        }
        textarea, input, select, button { font-family:inherit; }
        input, textarea, select { font-size:16px !important; }
        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-thumb { background:${T.blush}; border-radius:3px; }
        button { -webkit-tap-highlight-color:transparent; touch-action:manipulation; }
        button:focus-visible { outline:2px solid ${T.rose}; outline-offset:2px; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slideIn { from{transform:translateX(-100%)} to{transform:translateX(0)} }
        .fade { animation:fadeUp 0.3s ease forwards; }

        @media (max-width:768px) {
          .desktop-sidebar { display:none !important; }
          .desktop-nav     { display:none !important; }
          .mobile-burger   { display:flex !important; }
          .main-pad        { padding:16px 16px 76px !important; }
          .page-hdr        { padding:14px 16px !important; }
          .page-hdr-title  { font-size:19px !important; }
          .hero-pad        { padding:22px 16px 18px !important; }
          .hero-h          { font-size:clamp(1.5rem,6vw,2rem) !important; }
          .mod-grid        { grid-template-columns:1fr 1fr !important; gap:10px !important; }
          .mod-card        { padding:14px 12px !important; }
          .book-sidebar    { display:none !important; }
        }
        @media (max-width:400px) {
          .mod-grid        { grid-template-columns:1fr !important; }
        }

        .bottom-nav {
          display:none;
          position:fixed; bottom:0; left:0; right:0;
          background:rgba(250,246,240,0.97); backdrop-filter:blur(20px);
          border-top:1px solid rgba(194,123,106,0.14);
          z-index:300;
          padding-bottom:env(safe-area-inset-bottom,0px);
        }
        @media (max-width:768px) { .bottom-nav { display:block; } }
        .bottom-nav-inner {
          display:flex; justify-content:space-around; align-items:center; height:56px;
        }
        .bnav-btn {
          display:flex; flex-direction:column; align-items:center; gap:2px;
          background:none; border:none; cursor:pointer;
          padding:4px 6px; border-radius:8px; flex:1;
          -webkit-tap-highlight-color:transparent;
        }
        .bnav-lbl {
          font-size:9px; letter-spacing:0.04em; text-transform:uppercase;
          color:${T.deep}; opacity:0.4;
        }
        .bnav-btn.active .bnav-lbl { color:${T.rose}; opacity:1; }
        .bnav-btn.active { background:rgba(194,123,106,0.08); }
      `}</style>

      {/* ── HEADER ── */}
      <header style={{ flexShrink:0, background:"rgba(250,246,240,0.96)", backdropFilter:"blur(14px)", borderBottom:`1px solid rgba(194,123,106,0.14)`, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 20px", height:60, zIndex:100 }}>
        <button onClick={() => setPage("home")}
          style={{ background:"none", border:"none", cursor:"pointer", padding:0, textAlign:"left", flexShrink:0 }}>
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:19, fontStyle:"italic", color:T.rose, lineHeight:1 }}>Love Translated</div>
          <div style={{ fontSize:8, letterSpacing:"0.22em", textTransform:"uppercase", opacity:0.4, marginTop:2 }}>Workbook & Discussion Guide</div>
        </button>
        <nav className="desktop-nav" style={{ display:"flex", gap:4, flexWrap:"wrap", justifyContent:"flex-end" }}>
          {NAV.map(n => (
            <button key={n.id} onClick={() => setPage(n.id)}
              style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:2, padding:"5px 9px", borderRadius:6, border:`1.5px solid`, cursor:"pointer", transition:"all 0.18s", background:page===n.id?T.rose:"transparent", borderColor:page===n.id?T.rose:"rgba(194,123,106,0.22)" }}>
              <span style={{ fontSize:15 }}>{n.icon}</span>
              <span style={{ fontSize:8, letterSpacing:"0.1em", textTransform:"uppercase", color:page===n.id?T.white:T.deep, opacity:page===n.id?1:0.55 }}>{n.label}</span>
            </button>
          ))}
        </nav>
        <button className="mobile-burger" onClick={() => setSidebarOpen(o => !o)}
          style={{ display:"none", alignItems:"center", justifyContent:"center", width:40, height:40, background:"none", border:`1px solid rgba(194,123,106,0.25)`, borderRadius:8, cursor:"pointer", flexDirection:"column", gap:5, padding:8, flexShrink:0 }}>
          <span style={{ display:"block", width:18, height:1.5, background:T.rose }}/>
          <span style={{ display:"block", width:14, height:1.5, background:T.rose }}/>
          <span style={{ display:"block", width:18, height:1.5, background:T.rose }}/>
        </button>
      </header>

      {/* ── BODY ── */}
      <div style={{ display:"flex", flex:1, minHeight:0, position:"relative" }}>

        {sidebarOpen && (
          <div onClick={() => setSidebarOpen(false)}
            style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.4)", zIndex:199 }}/>
        )}

        <aside className="desktop-sidebar" style={{ width:220, flexShrink:0, background:T.deep2, display:"flex", flexDirection:"column", borderRight:`1px solid rgba(194,123,106,0.1)`, overflowY:"auto", padding:"24px 0" }}>
          <SidebarContents page={page} rComp={rComp} aComp={aComp} navigateTo={navigateTo}/>
        </aside>

        {sidebarOpen && (
          <aside style={{ position:"fixed", top:60, left:0, bottom:0, width:260, background:T.deep2, display:"flex", flexDirection:"column", borderRight:`1px solid rgba(194,123,106,0.1)`, overflowY:"auto", padding:"20px 0", zIndex:200, animation:"slideIn 0.22s ease" }}>
            <SidebarContents page={page} rComp={rComp} aComp={aComp} navigateTo={navigateTo}/>
          </aside>
        )}

        <main style={{ flex:1, overflow:"hidden", background:T.cream, display:"flex", flexDirection:"column" }}>

          {/* Page header — hidden for book (has its own toolbar) */}
          {meta && !isBook && (
            <div className="page-hdr" style={{ flexShrink:0, background:T.parchment, padding:"20px 28px", borderBottom:`1px solid rgba(194,123,106,0.14)`, display:"flex", alignItems:"center", gap:12 }}>
              <span style={{ fontSize:24 }}>{meta.icon}</span>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontSize:9, letterSpacing:"0.22em", textTransform:"uppercase", color:T.gold, marginBottom:3 }}>
                  {page === "book" ? "Full Text" : page.startsWith("m") ? `Module ${page.slice(1)}` : "Part 2"}
                </div>
                <div className="page-hdr-title" style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:300, color:T.deep, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>
                  {meta.title}
                </div>
              </div>
              <button onClick={() => setPage("home")}
                style={{ flexShrink:0, background:"none", border:`1px solid rgba(194,123,106,0.3)`, borderRadius:6, padding:"7px 12px", cursor:"pointer", fontSize:10, letterSpacing:"0.12em", textTransform:"uppercase", color:T.rose }}>
                ← Home
              </button>
            </div>
          )}

          {/* Book page — full height, no padding wrapper */}
          {isBook && (
            <div className="fade" style={{ flex:1, overflow:"hidden" }}>
              <BookReader />
            </div>
          )}

          {/* All other pages */}
          {!isBook && (
            <div className="fade main-pad" key={page} style={{ flex:1, overflowY:"auto", overflowX:"hidden", padding:"24px 28px 80px", WebkitOverflowScrolling:"touch" }}>
              <div style={{ maxWidth:860, width:"100%" }}>

                {/* ── HOME ── */}
                {page === "home" && (
                  <div>
                    <div className="hero-pad" style={{ background:T.deep2, borderRadius:8, padding:"32px 28px", marginBottom:22, position:"relative", overflow:"hidden" }}>
                      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 75% 50%,rgba(194,123,106,0.2),transparent 65%)", pointerEvents:"none" }}/>
                      <div style={{ position:"relative", zIndex:1 }}>
                        <div style={{ fontSize:9, letterSpacing:"0.3em", textTransform:"uppercase", color:T.gold, marginBottom:10 }}>Complete Companion Resource</div>
                        <div className="hero-h" style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontStyle:"italic", color:T.white, lineHeight:1.15, marginBottom:8 }}>Love Translated</div>
                        <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:16, color:T.blush, marginBottom:12 }}>Workbook & Discussion Guide</div>
                        <div style={{ fontSize:13, lineHeight:1.85, color:"rgba(255,255,255,0.52)" }}>
                          A complete companion for <em>Love Translated: The Secret Language of Lasting Marriage</em>.
                        </div>
                      </div>
                    </div>

                    <div className="mod-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:12, marginBottom:22 }}>
                      {[
                        { icon:"📖", title:"The Book",   sub:"Read Online",                page:"book",  desc:"All 12 chapters with dark mode & font controls." },
                        { icon:"🔍", title:"Module 1",   sub:"Discover Your Language",      page:"m1",    desc:"Self-assessments and gap analysis." },
                        { icon:"🌹", title:"Module 2",   sub:`Respect: ${rComp}/30`,         page:"m2",    desc:"30 daily actions to build respect." },
                        { icon:"💛", title:"Module 3",   sub:`Appreciation: ${aComp}/30`,    page:"m3",    desc:"30 daily actions to appreciate more." },
                        { icon:"📊", title:"Module 4",   sub:"Progress Trackers",            page:"m4",    desc:"Weekly scoring and reflections." },
                        { icon:"🕊️", title:"Module 5",  sub:"Crisis Recovery",              page:"m5",    desc:"Rebuilding after a breach." },
                        { icon:"💬", title:"Part 2",     sub:"10 Discussion Sessions",       page:"guide", desc:"Guided sessions for couples." },
                      ].map(c => (
                        <button key={c.page} onClick={() => setPage(c.page)}
                          className="mod-card"
                          style={{ padding:"18px 16px", background:T.white, border:`1px solid rgba(194,123,106,0.14)`, borderRadius:8, cursor:"pointer", textAlign:"left", transition:"all 0.2s" }}
                          onMouseEnter={e => { e.currentTarget.style.borderColor=T.rose; e.currentTarget.style.boxShadow="0 6px 20px rgba(59,42,39,0.1)"; }}
                          onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(194,123,106,0.14)"; e.currentTarget.style.boxShadow=""; }}>
                          <div style={{ fontSize:22, marginBottom:8 }}>{c.icon}</div>
                          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:15, marginBottom:2, color:T.deep }}>{c.title}</div>
                          <div style={{ fontSize:10, color:T.rose, marginBottom:6 }}>{c.sub}</div>
                          <div style={{ fontSize:12, opacity:0.55, lineHeight:1.5 }}>{c.desc}</div>
                        </button>
                      ))}
                    </div>

                    <div style={{ padding:"16px 18px", background:T.parchment, borderLeft:`3px solid ${T.rose}`, borderRadius:4 }}>
                      <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:17, fontStyle:"italic", color:T.rose, marginBottom:6 }}>How to use this workbook</div>
                      <div style={{ fontSize:13, lineHeight:1.85, opacity:0.72 }}>Read the book first, then complete each module individually. Discuss together in Part 2. Consistency over perfection.</div>
                    </div>
                  </div>
                )}

                {/* ── MODULE 1 ── */}
                {page === "m1" && (
                  <div>
                    <div style={{ display:"flex", marginBottom:20, borderBottom:`1px solid rgba(194,123,106,0.18)`, overflowX:"auto", WebkitOverflowScrolling:"touch" }}>
                      {[["gap","Translation Gap"],["respect","Respect Audit"],["appreciate","Appreciation Audit"]].map(([id,label]) => (
                        <button key={id} onClick={() => setM1tab(id)}
                          style={{ padding:"10px 14px", border:"none", background:"none", cursor:"pointer", fontSize:11, letterSpacing:"0.1em", textTransform:"uppercase", transition:"all 0.2s", color:m1tab===id?T.rose:T.deep, borderBottom:`2px solid ${m1tab===id?T.rose:"transparent"}`, opacity:m1tab===id?1:0.5, whiteSpace:"nowrap", flexShrink:0 }}>
                          {label}
                        </button>
                      ))}
                    </div>
                    {m1tab === "gap" && (
                      <div>
                        <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontStyle:"italic", marginBottom:16 }}>What's Your <span style={{ color:T.rose }}>Native Tongue?</span></div>
                        {[["q1","When you feel most loved by your partner, what are they doing?"],["q2","When you feel most unloved, what are they doing?"],["q3","What do you naturally do to show love? (List 3–5 things)"],["q4","Does your partner receive these efforts well, or do they miss them?"]].map(([k,q]) => (
                          <div key={k} style={{ marginBottom:16 }}>
                            <div style={{ fontSize:14, opacity:0.8, marginBottom:8, lineHeight:1.5 }}>{q}</div>
                            <TA value={gapData[k]} onChange={e => setGapData(p => ({ ...p, [k]:e.target.value }))} placeholder="Your answer…"/>
                          </div>
                        ))}
                        <div style={{ marginTop:20 }}>
                          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:18, marginBottom:12, fontStyle:"italic" }}>Translation Gap Analysis</div>
                          <div style={{ overflowX:"auto", WebkitOverflowScrolling:"touch" }}>
                            <div style={{ minWidth:300 }}>
                              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8, marginBottom:6 }}>
                                {["What I Give","What I Need","Their Response"].map(h => <div key={h} style={{ fontSize:9, letterSpacing:"0.12em", textTransform:"uppercase", color:T.gold, padding:"4px 6px" }}>{h}</div>)}
                              </div>
                              {(gapData.rows||[]).map((row,i) => (
                                <div key={i} style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8, marginBottom:8 }}>
                                  {["give","need","response"].map(f => (
                                    <input key={f} value={row[f]||""} onChange={e => setGapData(p => { const rows=[...(p.rows||[])]; rows[i]={...rows[i],[f]:e.target.value}; return {...p,rows}; })}
                                      style={{ border:`1px solid rgba(194,123,106,0.2)`, background:T.white, borderRadius:6, padding:"10px 8px", fontSize:16, outline:"none", color:T.deep, width:"100%" }}/>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                          <button onClick={() => setGapData(p => ({ ...p, rows:[...(p.rows||[]),{give:"",need:"",response:""}] }))}
                            style={{ marginTop:8, padding:"10px 18px", border:`1px solid rgba(194,123,106,0.3)`, background:"transparent", borderRadius:6, cursor:"pointer", fontSize:13, color:T.rose }}>
                            + Add Row
                          </button>
                        </div>
                        <div style={{ marginTop:16 }}>
                          <div style={{ fontSize:12, opacity:0.6, marginBottom:6 }}>Reflection: Where is the biggest gap?</div>
                          <TA value={gapData.reflection||""} onChange={e => setGapData(p => ({ ...p, reflection:e.target.value }))} placeholder="Your reflection…" minH={80}/>
                        </div>
                      </div>
                    )}
                    {m1tab === "respect"    && <Audit data={RESPECT_AUDIT}      scores={rScores} setScores={setRScores} sk="r"/>}
                    {m1tab === "appreciate" && <Audit data={APPRECIATION_AUDIT} scores={aScores} setScores={setAScores} sk="a"/>}
                  </div>
                )}

                {page === "m2" && <Challenge weeks={RESPECT_CHALLENGE}      done={rdone} setDone={setRdone} notes={rnotes} setNotes={setRnotes} sk="r"/>}
                {page === "m3" && <Challenge weeks={APPRECIATION_CHALLENGE} done={adone} setDone={setAdone} notes={anotes} setNotes={setAnotes} sk="a"/>}

                {page === "m4" && (
                  <div>
                    <Progress label="Respect Tracker"      cats={["Public Validation","Private Deference","Trust & Autonomy","Physical Signals"]} data={progress} setData={setProgress}/>
                    <div style={{ height:1, background:"rgba(194,123,106,0.15)", margin:"24px 0" }}/>
                    <Progress label="Appreciation Tracker" cats={["Verbal Recognition","Active Participation","Tangible Thoughtfulness","Emotional Presence"]} data={progress} setData={setProgress}/>
                  </div>
                )}

                {page === "m5"    && <Crisis/>}
                {page === "guide" && <Discussion/>}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ── MOBILE BOTTOM NAV ── */}
      <nav className="bottom-nav">
        <div className="bottom-nav-inner">
          {NAV.map(n => (
            <button key={n.id} className={`bnav-btn${page===n.id?" active":""}`} onClick={() => setPage(n.id)}>
              <span style={{ fontSize:19 }}>{n.icon}</span>
              <span className="bnav-lbl">{n.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}