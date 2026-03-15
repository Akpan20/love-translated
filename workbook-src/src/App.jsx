import { useState } from "react";

const T = {
  cream: "#faf6f0", parchment: "#f3ece2", blush: "#e8c4b0",
  rose: "#c27b6a", deep: "#3b2a27", deep2: "#2a1e1b",
  gold: "#c9a96e", sage: "#8a9e8c", white: "#ffffff",
};

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
    style={{ width:"100%", minHeight:minH, border:`1px solid rgba(194,123,106,0.22)`, background:T.parchment, borderRadius:4, padding:"10px 14px", fontSize:13, lineHeight:1.7, resize:"vertical", outline:"none", color:T.deep, fontFamily:"'Cormorant Garamond', Georgia, serif", fontWeight:300 }}/>
);

const ULabel = ({ children }) => (
  <div style={{ fontSize:10, letterSpacing:"0.22em", textTransform:"uppercase", color:T.gold, marginBottom:10 }}>{children}</div>
);

const Audit = ({ data, scores, setScores, sk }) => {
  const totalPts = data.reduce((s, c) => s + c.items.length, 0) * 5;
  const scored = Object.values(scores).reduce((a, b) => a + b, 0);
  const pct = totalPts ? scored / totalPts : 0;
  const lbl = pct >= 0.8 ? "Strong foundation 💪" : pct >= 0.6 ? "Room to grow 🌱" : pct >= 0.4 ? "Needs attention ⚠️" : "Critical deficit 🚨";
  let gi = 0;
  return (
    <div>
      <div style={{ display:"flex", alignItems:"center", gap:20, padding:20, background:T.white, border:`1px solid rgba(194,123,106,0.15)`, borderRadius:4, marginBottom:24 }}>
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
      {data.map(cat => (
        <div key={cat.cat} style={{ marginBottom:20 }}>
          <ULabel>{cat.cat}</ULabel>
          {cat.items.map(item => {
            const idx = gi++; const k = `${sk}_${idx}`; const val = scores[k] || 0;
            return (
              <div key={idx} style={{ display:"flex", alignItems:"center", gap:10, padding:"9px 14px", background:T.parchment, borderRadius:4, marginBottom:6 }}>
                <div style={{ flex:1, fontSize:13, lineHeight:1.5, opacity:0.82 }}>{item}</div>
                <div style={{ display:"flex", gap:4, flexShrink:0 }}>
                  {[1,2,3,4,5].map(n => (
                    <button key={n} onClick={() => setScores(p => ({ ...p, [k]:n }))}
                      style={{ width:26, height:26, borderRadius:"50%", border:`1.5px solid`, cursor:"pointer", fontSize:11, fontWeight:600, transition:"all 0.15s", background:val>=n?T.rose:"transparent", borderColor:val>=n?T.rose:"rgba(194,123,106,0.3)", color:val>=n?T.white:T.rose }}>
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

const Challenge = ({ weeks, done, setDone, notes, setNotes, sk }) => {
  const total = weeks.reduce((s, w) => s + w.days.length, 0);
  const comp = Object.values(done).filter(Boolean).length;
  let dn = 0;
  return (
    <div>
      <div style={{ display:"flex", alignItems:"center", gap:20, padding:20, background:T.deep2, borderRadius:4, marginBottom:24 }}>
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
            <div style={{ fontSize:10, letterSpacing:"0.18em", textTransform:"uppercase", color:T.gold }}>{week.theme}</div>
          </div>
          {week.days.map(action => {
            dn++; const d = dn; const k = `${sk}_d${d}`; const isDone = done[k]||false; const nk = `${sk}_n${d}`;
            return (
              <div key={d} style={{ marginBottom:6, padding:"10px 14px", background:isDone?"rgba(194,123,106,0.07)":T.white, border:`1px solid`, borderColor:isDone?T.rose:"rgba(194,123,106,0.12)", borderRadius:4, transition:"all 0.25s" }}>
                <div style={{ display:"flex", alignItems:"flex-start", gap:10 }}>
                  <button onClick={() => setDone(p => ({ ...p, [k]:!isDone }))}
                    style={{ width:20, height:20, borderRadius:4, border:`1.5px solid`, borderColor:isDone?T.rose:"rgba(194,123,106,0.3)", background:isDone?T.rose:"transparent", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:2, transition:"all 0.2s" }}>
                    {isDone && <span style={{ color:T.white, fontSize:11 }}>✓</span>}
                  </button>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:10, color:T.gold, marginBottom:2 }}>Day {d}</div>
                    <div style={{ fontSize:13, lineHeight:1.55, opacity:isDone?0.5:0.85, textDecoration:isDone?"line-through":"none" }}>{action}</div>
                    {isDone && <input value={notes[nk]||""} onChange={e => setNotes(p => ({ ...p, [nk]:e.target.value }))} placeholder="Note their response…"
                      style={{ marginTop:6, width:"100%", border:"none", borderBottom:"1px solid rgba(194,123,106,0.2)", background:"transparent", fontSize:12, padding:"3px 0", color:T.deep, outline:"none" }}/>}
                  </div>
                </div>
              </div>
            );
          })}
          <div style={{ marginTop:10 }}>
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
    <div style={{ overflowX:"auto" }}>
      <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
        <thead><tr>
          <th style={{ textAlign:"left", padding:"6px 10px", fontSize:9, letterSpacing:"0.2em", textTransform:"uppercase", color:T.gold, borderBottom:`1px solid rgba(194,123,106,0.2)` }}>Week</th>
          {cats.map(c => <th key={c} style={{ padding:"6px 8px", fontSize:9, letterSpacing:"0.12em", textTransform:"uppercase", color:T.gold, borderBottom:`1px solid rgba(194,123,106,0.2)`, textAlign:"center" }}>{c.split(" ").slice(-1)[0]}</th>)}
          <th style={{ padding:"6px 8px", fontSize:9, letterSpacing:"0.12em", textTransform:"uppercase", color:T.rose, borderBottom:`1px solid rgba(194,123,106,0.2)`, textAlign:"center" }}>Avg</th>
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
                  <td key={c} style={{ padding:"6px 8px", textAlign:"center" }}>
                    <select value={data[`${label}_w${w}_${c}`]||""} onChange={e => setData(p => ({ ...p, [`${label}_w${w}_${c}`]:Number(e.target.value) }))}
                      style={{ border:`1px solid rgba(194,123,106,0.2)`, background:T.white, borderRadius:3, padding:"3px 6px", fontSize:12, color:T.deep, cursor:"pointer", outline:"none" }}>
                      <option value="">—</option>
                      {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </td>
                ))}
                <td style={{ padding:"6px 8px", textAlign:"center", fontFamily:"'Cormorant Garamond',serif", fontSize:16, color:T.rose }}>{avg?avg.toFixed(1):"—"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    <div style={{ marginTop:14, display:"flex", flexDirection:"column", gap:10 }}>
      {["What improved most?","What still needs work?","Partner's feedback"].map(q => (
        <div key={q}>
          <div style={{ fontSize:11, opacity:0.55, marginBottom:4 }}>{q}</div>
          <input value={data[`${label}_${q}`]||""} onChange={e => setData(p => ({ ...p, [`${label}_${q}`]:e.target.value }))}
            style={{ width:"100%", border:"none", borderBottom:"1px solid rgba(194,123,106,0.22)", background:"transparent", padding:"5px 0", fontSize:13, color:T.deep, outline:"none" }}/>
        </div>
      ))}
    </div>
  </div>
);

const CrisisBlock = ({ title, color, causes, pk, data, onUpdate }) => (
  <div style={{ marginBottom:24, padding:24, background:T.white, border:`1px solid rgba(194,123,106,0.12)`, borderRadius:4 }}>
    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, color, marginBottom:14 }}>{title}</div>
    <ULabel>What caused this?</ULabel>
    <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:18 }}>
      {causes.map(c => (
        <button key={c} onClick={() => onUpdate(`${pk}_${c}`, !data[`${pk}_${c}`])}
          style={{ padding:"5px 12px", borderRadius:20, border:`1.5px solid`, cursor:"pointer", fontSize:11, transition:"all 0.2s", background:data[`${pk}_${c}`]?color:"transparent", borderColor:data[`${pk}_${c}`]?color:"rgba(194,123,106,0.3)", color:data[`${pk}_${c}`]?T.white:T.deep }}>
          {c}
        </button>
      ))}
    </div>
    {[["Acknowledge the breach","What happened and how it affected things"],["Identify the path back","What specific actions could help rebuild?"],["Set boundaries","What is necessary to move forward?"],["Commit to the process","What am I willing to do for 90 days?"]].map(([label,ph],i) => (
      <div key={label} style={{ marginBottom:12 }}>
        <div style={{ fontSize:11, opacity:0.6, marginBottom:5 }}>{i+1}. {label}</div>
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
      <div style={{ padding:16, background:"rgba(194,123,106,0.08)", border:`1px solid rgba(194,123,106,0.2)`, borderRadius:4, marginBottom:20, fontSize:12, lineHeight:1.7, opacity:0.8 }}>
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
      <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:24 }}>
        {SESSIONS.map((ss,i) => (
          <button key={i} onClick={() => setIdx(i)}
            style={{ width:34, height:34, borderRadius:"50%", border:`1.5px solid`, cursor:"pointer", fontSize:12, fontWeight:600, transition:"all 0.2s", fontFamily:"'Cormorant Garamond',serif", background:idx===i?T.rose:"transparent", borderColor:idx===i?T.rose:"rgba(194,123,106,0.3)", color:idx===i?T.white:T.deep }}>
            {ss.num}
          </button>
        ))}
      </div>
      <div style={{ padding:28, background:T.deep2, borderRadius:4, marginBottom:20, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:-20, right:20, fontFamily:"'Cormorant Garamond',serif", fontSize:120, color:"rgba(194,123,106,0.06)", lineHeight:1, pointerEvents:"none" }}>"</div>
        <div style={{ fontSize:9, letterSpacing:"0.25em", textTransform:"uppercase", color:T.gold, marginBottom:6 }}>Session {s.num} of 10</div>
        <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:24, color:T.white, fontStyle:"italic", marginBottom:10 }}>{s.title}</div>
        <div style={{ fontSize:12, color:"rgba(255,255,255,0.5)", lineHeight:1.7, fontStyle:"italic" }}>Opening: {s.opening}</div>
      </div>
      <ULabel>Discussion Questions</ULabel>
      {s.questions.map((q,qi) => (
        <div key={qi} style={{ marginBottom:12, padding:"16px 20px", background:T.white, border:`1px solid rgba(194,123,106,0.12)`, borderRadius:4 }}>
          <div style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:18, color:T.rose, opacity:0.5, flexShrink:0, lineHeight:1, marginTop:2 }}>0{qi+1}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:13, lineHeight:1.6, marginBottom:8, opacity:0.85 }}>{q}</div>
              <TA value={ans[`s${s.num}_q${qi}`]||""} onChange={e => setAns(p => ({ ...p, [`s${s.num}_q${qi}`]:e.target.value }))} placeholder="Your thoughts…" minH={64}/>
            </div>
          </div>
        </div>
      ))}
      <div style={{ padding:20, background:"rgba(201,169,110,0.1)", border:`1px solid rgba(201,169,110,0.25)`, borderRadius:4, margin:"20px 0 16px" }}>
        <ULabel>Commitment</ULabel>
        <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:17, fontStyle:"italic", marginBottom:12, lineHeight:1.55, color:T.deep }}>"{s.commit}"</div>
        <button onClick={() => setCommits(p => ({ ...p, [s.num]:!p[s.num] }))}
          style={{ display:"flex", alignItems:"center", gap:10, background:"none", border:"none", cursor:"pointer", color:T.deep, fontSize:13, padding:0 }}>
          <div style={{ width:20, height:20, borderRadius:4, border:`1.5px solid`, borderColor:commits[s.num]?T.rose:"rgba(194,123,106,0.4)", background:commits[s.num]?T.rose:"transparent", display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.2s" }}>
            {commits[s.num] && <span style={{ color:T.white, fontSize:11 }}>✓</span>}
          </div>
          I commit to this
        </button>
      </div>
      <div style={{ display:"flex", justifyContent:"space-between" }}>
        <button onClick={() => setIdx(Math.max(0,idx-1))} disabled={idx===0}
          style={{ padding:"10px 20px", border:`1px solid rgba(194,123,106,0.3)`, background:"transparent", borderRadius:2, cursor:idx===0?"default":"pointer", fontSize:11, letterSpacing:"0.15em", textTransform:"uppercase", opacity:idx===0?0.3:1 }}>← Prev</button>
        <span style={{ fontSize:11, opacity:0.4, alignSelf:"center" }}>{idx+1}/{SESSIONS.length}</span>
        <button onClick={() => setIdx(Math.min(SESSIONS.length-1,idx+1))} disabled={idx===SESSIONS.length-1}
          style={{ padding:"10px 20px", border:"none", background:T.rose, color:T.white, borderRadius:2, cursor:idx===SESSIONS.length-1?"default":"pointer", fontSize:11, letterSpacing:"0.15em", textTransform:"uppercase", opacity:idx===SESSIONS.length-1?0.3:1 }}>Next →</button>
      </div>
    </div>
  );
};

const NAV = [
  { id:"home",  icon:"🌸", label:"Home" },
  { id:"m1",   icon:"🔍", label:"Discover" },
  { id:"m2",   icon:"🌹", label:"Respect" },
  { id:"m3",   icon:"💛", label:"Appreciate" },
  { id:"m4",   icon:"📊", label:"Progress" },
  { id:"m5",   icon:"🕊️", label:"Recovery" },
  { id:"guide",icon:"💬", label:"Discussion" },
];

const PAGE_META = {
  m1:    { title:"Discovering Your Language",      icon:"🔍" },
  m2:    { title:"30-Day Respect Challenge",        icon:"🌹" },
  m3:    { title:"30-Day Appreciation Challenge",   icon:"💛" },
  m4:    { title:"Progress Trackers",               icon:"📊" },
  m5:    { title:"Crisis Recovery",                 icon:"🕊️" },
  guide: { title:"Discussion Guide",                icon:"💬" },
};

export default function App() {
  const [page, setPage]       = useState("home");
  const [m1tab, setM1tab]     = useState("gap");
  const [gapData, setGapData] = useState({ q1:"", q2:"", q3:"", q4:"", reflection:"", rows:[{ give:"", need:"", response:"" }] });
  const [rScores, setRScores] = useState({});
  const [aScores, setAScores] = useState({});
  const [rdone,   setRdone]   = useState({});
  const [rnotes,  setRnotes]  = useState({});
  const [adone,   setAdone]   = useState({});
  const [anotes,  setAnotes]  = useState({});
  const [progress,setProgress]= useState({});

  const rComp = Object.values(rdone).filter(Boolean).length;
  const aComp = Object.values(adone).filter(Boolean).length;
  const meta  = PAGE_META[page];

  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100vh", width:"100vw", overflow:"hidden", background:T.cream }}>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin:0; padding:0; }
        html, body { height:100%; width:100%; overflow:hidden; }
        #root { height:100%; width:100%; display:flex; flex-direction:column; }
        body {
          font-family:'Jost','Georgia',sans-serif;
          font-weight:300;
          color:${T.deep};
          background:${T.cream};
          /* override the Vite default CSS that sets place-items:center */
          display:block;
          place-items:unset;
          min-height:unset;
          min-width:unset;
        }
        textarea, input, select, button { font-family:inherit; }
        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-thumb { background:${T.blush}; border-radius:3px; }
        button:focus-visible { outline:2px solid ${T.rose}; outline-offset:2px; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .fade { animation: fadeUp 0.4s ease forwards; }
      `}</style>

      {/* ── TOP NAV ── */}
      <header style={{
        flexShrink:0,
        background:"rgba(250,246,240,0.96)", backdropFilter:"blur(14px)",
        borderBottom:`1px solid rgba(194,123,106,0.14)`,
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"0 28px", height:60,
      }}>
        {/* Love Translated button */}
        <button 
          onClick={() => window.location.href = '/index.html'}
          style={{ background:"none", border:"none", padding:0, cursor:"pointer", textAlign:"left" }}
        >
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:19, fontStyle:"italic", color:T.rose, lineHeight:1 }}>Love Translated</div>
          <div style={{ fontSize:8, letterSpacing:"0.22em", textTransform:"uppercase", opacity:0.4, marginTop:2 }}>Workbook & Discussion Guide</div>
        </button>

        <nav style={{ display:"flex", gap:4, flexWrap:"wrap", justifyContent:"flex-end" }}>
          {NAV.map(n => (
            <button key={n.id} onClick={() => setPage(n.id)}
              style={{
                display:"flex", flexDirection:"column", alignItems:"center", gap:2,
                padding:"5px 9px", borderRadius:6, border:`1.5px solid`,
                cursor:"pointer", transition:"all 0.18s",
                background: page===n.id ? T.rose : "transparent",
                borderColor: page===n.id ? T.rose : "rgba(194,123,106,0.22)",
              }}>
              <span style={{ fontSize:15 }}>{n.icon}</span>
              <span style={{ fontSize:8, letterSpacing:"0.1em", textTransform:"uppercase", color: page===n.id ? T.white : T.deep, opacity: page===n.id ? 1 : 0.55 }}>{n.label}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* ── BODY: sidebar + main ── */}
      <div style={{ display:"flex", flex:1, minHeight:0 /* critical: allows children to scroll independently */ }}>

        {/* ── SIDEBAR ── */}
        <aside style={{
          width:220, flexShrink:0, background:T.deep2,
          display:"flex", flexDirection:"column",
          borderRight:`1px solid rgba(194,123,106,0.1)`,
          overflowY:"auto", padding:"28px 0",
        }}>
          <div style={{ padding:"0 20px 24px", borderBottom:`1px solid rgba(255,255,255,0.06)`, marginBottom:24 }}>
            <div style={{ fontSize:8, letterSpacing:"0.22em", textTransform:"uppercase", color:T.gold, marginBottom:14, opacity:0.7 }}>Your Progress</div>
            {[
              { label:"Respect", comp:rComp, total:30, color:T.rose },
              { label:"Appreciation", comp:aComp, total:30, color:T.gold },
            ].map(({ label, comp, total, color }) => (
              <div key={label} style={{ display:"flex", alignItems:"center", gap:12, marginBottom:14 }}>
                <div style={{ position:"relative", flexShrink:0 }}>
                  <Ring pct={comp/total} size={44} stroke={4} color={color} bg="rgba(232,196,176,0.15)"/>
                  <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, fontWeight:700, color }}>{comp}</div>
                </div>
                <div>
                  <div style={{ fontSize:11, color:"rgba(255,255,255,0.6)", marginBottom:1 }}>{label}</div>
                  <div style={{ fontSize:9, color:"rgba(255,255,255,0.3)" }}>{comp}/{total} days</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ padding:"0 12px", flex:1 }}>
            {[
              { id:"home",  icon:"🌸", label:"Home",    sub:"Overview" },
              { id:"m1",   icon:"🔍", label:"Module 1", sub:"Discover" },
              { id:"m2",   icon:"🌹", label:"Module 2", sub:"Respect" },
              { id:"m3",   icon:"💛", label:"Module 3", sub:"Appreciate" },
              { id:"m4",   icon:"📊", label:"Module 4", sub:"Progress" },
              { id:"m5",   icon:"🕊️", label:"Module 5", sub:"Recovery" },
              { id:"guide",icon:"💬", label:"Part 2",   sub:"Discussion" },
            ].map(n => (
              <button key={n.id} onClick={() => setPage(n.id)}
                style={{
                  width:"100%", display:"flex", alignItems:"center", gap:10,
                  padding:"10px 12px", borderRadius:6, border:"none", cursor:"pointer",
                  marginBottom:2, transition:"all 0.18s", textAlign:"left",
                  background: page===n.id ? "rgba(194,123,106,0.18)" : "transparent",
                }}>
                <span style={{ fontSize:16, flexShrink:0 }}>{n.icon}</span>
                <div>
                  <div style={{ fontSize:12, color: page===n.id ? T.blush : "rgba(255,255,255,0.55)", lineHeight:1.2 }}>{n.label}</div>
                  <div style={{ fontSize:9, color:"rgba(255,255,255,0.25)", marginTop:1 }}>{n.sub}</div>
                </div>
                {page===n.id && <div style={{ marginLeft:"auto", width:3, height:20, background:T.rose, borderRadius:2, flexShrink:0 }}/>}
              </button>
            ))}
          </div>

          <div style={{ padding:"24px 20px 0", borderTop:`1px solid rgba(255,255,255,0.06)`, marginTop:24 }}>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:12, fontStyle:"italic", color:"rgba(255,255,255,0.2)", lineHeight:1.7 }}>
              "Translation is a lifelong practice, not a one-time achievement."
            </div>
          </div>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main style={{ flex:1, overflowY:"auto", background:T.cream, display:"flex", flexDirection:"column" }}>

          {meta && (
            <div style={{
              flexShrink:0,
              background:T.parchment, padding:"28px 40px",
              borderBottom:`1px solid rgba(194,123,106,0.14)`,
              display:"flex", alignItems:"center", gap:16,
            }}>
              <span style={{ fontSize:28 }}>{meta.icon}</span>
              <div>
                <div style={{ fontSize:9, letterSpacing:"0.22em", textTransform:"uppercase", color:T.gold, marginBottom:4 }}>
                  {page.startsWith("m") ? `Module ${page.slice(1)}` : "Part 2"}
                </div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, fontWeight:300, color:T.deep }}>
                  {meta.title}
                </div>
              </div>
              <button onClick={() => setPage("home")}
                style={{ marginLeft:"auto", background:"none", border:`1px solid rgba(194,123,106,0.3)`, borderRadius:2, padding:"7px 16px", cursor:"pointer", fontSize:10, letterSpacing:"0.15em", textTransform:"uppercase", color:T.rose }}>
                ← Home
              </button>
            </div>
          )}

          <div className="fade" key={page} style={{ padding:"36px 40px 80px", maxWidth:900, width:"100%" }}>

            {page === "home" && (
              <div>
                <div style={{ background:T.deep2, borderRadius:4, padding:"48px 40px", marginBottom:32, position:"relative", overflow:"hidden" }}>
                  <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 75% 50%,rgba(194,123,106,0.2),transparent 65%)", pointerEvents:"none" }}/>
                  <div style={{ position:"relative", zIndex:1, maxWidth:560 }}>
                    <div style={{ fontSize:9, letterSpacing:"0.3em", textTransform:"uppercase", color:T.gold, marginBottom:12 }}>Complete Companion Resource</div>
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontStyle:"italic", color:T.white, lineHeight:1.1, marginBottom:8 }}>Love Translated</div>
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:18, color:T.blush, marginBottom:18 }}>Workbook & Discussion Guide</div>
                    <div style={{ fontSize:13, lineHeight:1.85, color:"rgba(255,255,255,0.52)", maxWidth:480 }}>
                      A complete companion for <em>Love Translated: The Secret Language of Lasting Marriage</em>. Two parts: a personal workbook and a 10-session discussion guide for couples, small groups, and mentors.
                    </div>
                  </div>
                </div>

                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:14, marginBottom:32 }}>
                  {[
                    { icon:"🔍", title:"Module 1", sub:"Discover Your Language",        page:"m1", desc:"Self-assessments and gap analysis to find your love language." },
                    { icon:"🌹", title:"Module 2", sub:`Respect: ${rComp}/30 days`,      page:"m2", desc:"30 daily actions to build respect, week by week." },
                    { icon:"💛", title:"Module 3", sub:`Appreciation: ${aComp}/30 days`, page:"m3", desc:"30 daily actions to deepen appreciation." },
                    { icon:"📊", title:"Module 4", sub:"Progress Trackers",              page:"m4", desc:"Weekly scoring and monthly reflections." },
                    { icon:"🕊️", title:"Module 5", sub:"Crisis Recovery",               page:"m5", desc:"Rebuilding respect and appreciation after a breach." },
                    { icon:"💬", title:"Part 2",   sub:"10 Discussion Sessions",         page:"guide", desc:"Guided sessions for couples, small groups, and mentors." },
                  ].map(c => (
                    <button key={c.page} onClick={() => setPage(c.page)}
                      style={{ padding:"22px 20px", background:T.white, border:`1px solid rgba(194,123,106,0.14)`, borderRadius:4, cursor:"pointer", textAlign:"left", transition:"all 0.22s" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor=T.rose; e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 12px 32px rgba(59,42,39,0.1)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(194,123,106,0.14)"; e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow=""; }}>
                      <div style={{ fontSize:26, marginBottom:10 }}>{c.icon}</div>
                      <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:16, marginBottom:3, color:T.deep }}>{c.title}</div>
                      <div style={{ fontSize:10, color:T.rose, marginBottom:8, letterSpacing:"0.05em" }}>{c.sub}</div>
                      <div style={{ fontSize:12, opacity:0.55, lineHeight:1.6 }}>{c.desc}</div>
                    </button>
                  ))}
                </div>

                <div style={{ padding:"22px 24px", background:T.parchment, borderLeft:`3px solid ${T.rose}`, borderRadius:2 }}>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:19, fontStyle:"italic", color:T.rose, marginBottom:6 }}>How to use this workbook</div>
                  <div style={{ fontSize:13, lineHeight:1.85, opacity:0.72 }}>Complete each module individually first, then discuss together. Honesty with yourself is the foundation for growth with your partner. The 30-day challenges work best when you commit to one action per day — consistency over perfection.</div>
                </div>
              </div>
            )}

            {page === "m1" && (
              <div>
                <div style={{ display:"flex", gap:4, marginBottom:24, borderBottom:`1px solid rgba(194,123,106,0.18)` }}>
                  {[["gap","Translation Gap"],["respect","Respect Audit"],["appreciate","Appreciation Audit"]].map(([id,label]) => (
                    <button key={id} onClick={() => setM1tab(id)}
                      style={{ padding:"9px 18px", border:"none", background:"none", cursor:"pointer", fontSize:11, letterSpacing:"0.14em", textTransform:"uppercase", transition:"all 0.2s", color:m1tab===id?T.rose:T.deep, borderBottom:`2px solid ${m1tab===id?T.rose:"transparent"}`, opacity:m1tab===id?1:0.5 }}>
                      {label}
                    </button>
                  ))}
                </div>

                {m1tab === "gap" && (
                  <div>
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:24, fontStyle:"italic", marginBottom:20 }}>What's Your <span style={{ color:T.rose }}>Native Tongue?</span></div>
                    {[["q1","When you feel most loved by your partner, what are they doing? (Be specific)"],["q2","When you feel most unloved, what are they doing?"],["q3","What do you naturally do to show love? (List 3–5 things)"],["q4","Does your partner receive these efforts well, or do they seem to miss them?"]].map(([k,q]) => (
                      <div key={k} style={{ marginBottom:18 }}>
                        <div style={{ fontSize:14, opacity:0.8, marginBottom:7, lineHeight:1.5 }}>{q}</div>
                        <TA value={gapData[k]} onChange={e => setGapData(p => ({ ...p, [k]:e.target.value }))} placeholder="Your answer…"/>
                      </div>
                    ))}
                    <div style={{ marginTop:24 }}>
                      <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, marginBottom:14, fontStyle:"italic" }}>Translation Gap Analysis</div>
                      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8, marginBottom:6 }}>
                        {["What I Give","What I Need","Partner's Response"].map(h => <div key={h} style={{ fontSize:9, letterSpacing:"0.18em", textTransform:"uppercase", color:T.gold, padding:"6px 8px" }}>{h}</div>)}
                      </div>
                      {(gapData.rows||[]).map((row,i) => (
                        <div key={i} style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8, marginBottom:7 }}>
                          {["give","need","response"].map(f => (
                            <input key={f} value={row[f]||""} onChange={e => setGapData(p => { const rows=[...(p.rows||[])]; rows[i]={...rows[i],[f]:e.target.value}; return {...p,rows}; })}
                              style={{ border:`1px solid rgba(194,123,106,0.2)`, background:T.white, borderRadius:4, padding:"8px 12px", fontSize:13, outline:"none", color:T.deep }}/>
                          ))}
                        </div>
                      ))}
                      <button onClick={() => setGapData(p => ({ ...p, rows:[...(p.rows||[]),{give:"",need:"",response:""}] }))}
                        style={{ marginTop:8, padding:"7px 16px", border:`1px solid rgba(194,123,106,0.3)`, background:"transparent", borderRadius:2, cursor:"pointer", fontSize:11, color:T.rose }}>
                        + Add Row
                      </button>
                    </div>
                    <div style={{ marginTop:20 }}>
                      <div style={{ fontSize:12, opacity:0.6, marginBottom:6 }}>Reflection: Where is the biggest gap between what you give and what you need?</div>
                      <TA value={gapData.reflection||""} onChange={e => setGapData(p => ({ ...p, reflection:e.target.value }))} placeholder="Your reflection…" minH={80}/>
                    </div>
                  </div>
                )}
                {m1tab === "respect"    && <Audit data={RESPECT_AUDIT}      scores={rScores} setScores={setRScores} sk="r"/>}
                {m1tab === "appreciate" && <Audit data={APPRECIATION_AUDIT} scores={aScores} setScores={setAScores} sk="a"/>}
              </div>
            )}

            {page === "m2"    && <Challenge weeks={RESPECT_CHALLENGE}      done={rdone} setDone={setRdone} notes={rnotes} setNotes={setRnotes} sk="r"/>}
            {page === "m3"    && <Challenge weeks={APPRECIATION_CHALLENGE} done={adone} setDone={setAdone} notes={anotes} setNotes={setAnotes} sk="a"/>}

            {page === "m4" && (
              <div>
                <Progress label="Respect Tracker"      cats={["Public Validation","Private Deference","Trust & Autonomy","Physical Signals"]}                   data={progress} setData={setProgress}/>
                <div style={{ height:1, background:"rgba(194,123,106,0.15)", margin:"28px 0" }}/>
                <Progress label="Appreciation Tracker" cats={["Verbal Recognition","Active Participation","Tangible Thoughtfulness","Emotional Presence"]} data={progress} setData={setProgress}/>
              </div>
            )}

            {page === "m5"    && <Crisis/>}
            {page === "guide" && <Discussion/>}
          </div>
        </main>
      </div>
    </div>
  );
}