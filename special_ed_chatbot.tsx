import React, { useState, useRef, useEffect } from 'react';
import { Send, Book, CheckSquare, Lightbulb, Users, MessageCircle, Trash2, Download } from 'lucide-react';

const SpecialEdChatbot = () => {
  const [messages, setMessages] = useState([{
    type: 'bot',
    content: { text: "Welcome! I'm your SEN Support Assistant for Singapore secondary schools (ages 13-18).\n\nI cover: ADHD, ASD, Dyslexia, SPD, Auditory/Visual Impairment, Executive Function, Access Arrangements, Discipline Management.\n\nAsk me anything!" }
  }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const quickPrompts = [
    { icon: Book, text: "Quick screeners", category: "screeners" },
    { icon: CheckSquare, text: "Discipline management", category: "discipline" },
    { icon: Lightbulb, text: "ADHD strategies", category: "strategies" },
    { icon: Users, text: "Access Arrangements", category: "aa" }
  ];

  const handleDownload = () => {
    const content = "SPECIAL EDUCATION RESOURCES GUIDE\n\nCovers: ADHD, ASD, Dyslexia, SPD, Auditory/Visual Impairment, Executive Function\nIncludes: Screeners, Strategies, Procedures, Discipline Management\n\nFor full details, use the chatbot interface.";
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'SEN_Resources_Guide.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setMessages(prev => [...prev, { type: 'bot', content: { title: "Downloaded", content: "Your guide is ready!" }}]);
  };

  const kb = {
    quick_screeners: { title: "Quick 3-Item Screeners", content: "ASD:\n☐ Avoids eye contact\n☐ Distress with changes\n☐ Difficulty in peer interaction\n\nADHD:\n☐ Easily distracted\n☐ Often forgetful\n☐ Impulsive blurting\n\nDyslexia:\n☐ Reads slowly/inaccurately\n☐ Spelling errors despite practice\n☐ Avoids reading\n\nEF:\n☐ Forgets multi-step instructions\n☐ Struggles with deadlines\n☐ Disorganized materials\n\nSPD:\n☐ Over/under-sensitive to sound\n☐ Aversion to textures\n☐ Seeks constant movement\n\nNext Steps: Document patterns, consult SEN Committee/RGC if 2-3 items present" },
    
    discipline: { title: "Discipline for SEN Students", content: "6-STEP PROCEDURE:\n\n1. ANALYZE: Identify triggers, document incident, determine if SEN-related\n\n2. IMMEDIATE RESPONSE: Ensure safety, stay calm, de-escalate (low voice, reduce stimuli, give space)\n\n3. DISCUSSION: Private setting, restorative approach, validate feelings, help student understand impact\n\n4. ACTION PLAN: Collaborate with student on expectations, supports, replacement behaviors, consequences\n\n5. DOCUMENT: Record incident, intervention, outcome; share with SEN team\n\n6. FOLLOW-UP: Regular check-ins, assess effectiveness, modify as needed\n\nSPECIAL CONSIDERATIONS:\n• Sensory: Breaks, calming strategies\n• Communication: Visual aids, processing time\n• EF: Break steps down, checklists\n• Emotional: Calm zones, self-regulation\n• Transitions: Advance warning, visual schedules\n\nKEY: Behavior is communication, not defiance. Use restorative (repair/learn) not punitive (punishment) approaches." },
    
    meltdowns: { title: "Managing Meltdowns", content: "CALM FRAMEWORK:\nC - Check safety\nA - Avoid power struggle\nL - Let others know (Year Head/RGC)\nM - Make space\n\nWARNING SIGNS: Voice/body language changes, hyperventilation, increased movement\n\nTRIGGERS: Academic stress, routine changes, sensory overload, transitions\n\nUPSET IN CLASS:\n1. Low, soft voice\n2. Ask if wants to be alone/visit RGC\n3. Give time and space\n4. Accompany to safe place\n5. Notify Year Head/RGC\n\nRUNS OUT:\n1. Get help to manage class\n2. Locate student, update Year Head\n3. Return after 10 min if not found\n\nIF AGGRESSIVE: Don't restrain, evacuate class if needed, call Year Head immediately\n\nPREVENTION: Learn triggers, build in breaks, provide warnings, create escape plans" },
    
    adhd_strat: { title: "ADHD: 5 Strategies", content: "1. CHUNK TASKS: One instruction at a time, checklists, mini-deadlines\n2. MOVEMENT: Fidgets, 20-min brain breaks, flexible seating\n3. REDUCE DISTRACTIONS: Strategic seating, visual barriers, headphones\n4. VISUAL SUPPORTS: Post schedules, visible timers, color-code materials\n5. POSITIVE ATTENTION: Catch on-task behavior, specific praise\n\nQuick Win: Break one lesson into 3 visible chunks tomorrow" },
    
    dyslexia_strat: { title: "Dyslexia: 5 Strategies", content: "1. MULTI-SENSORY: Letter tiles, tracing, movement with phonics\n2. TECH: Text-to-speech, audiobooks, speech-to-text\n3. MODIFICATIONS: Colored overlays, larger font, 1.5 spacing\n4. ALT ASSESSMENT: Oral responses, word banks, extra time\n5. PRE-TEACH: Introduce key words before lesson\n\nQuick Win: Offer colored overlay tomorrow" },
    
    spd_strat: { title: "SPD: 5 Strategies", content: "SPD = Sensory Processing Disorder\n\n1. SENSORY SPACES: Calm corner, quiet options\n2. TOOLS: Fidgets, weighted items, ear defenders\n3. WARNINGS: Preview loud events, visual schedules\n4. MODIFY ACTIVITIES: Alternative materials, allow movement\n5. SENSORY DIET: Heavy work tasks, movement breaks\n\nQuick Win: Before assembly, say 'It will be loud. You can cover ears'" },
    
    asd_strat: { title: "ASD: 5 Strategies", content: "1. VISUAL SCHEDULES: Post routine, mark completed tasks\n2. CLEAR LANGUAGE: Avoid idioms, specific instructions\n3. PREDICTABILITY: Warn of changes, transition timers\n4. SENSORY: Allow breaks, quiet spaces\n5. SPECIAL INTERESTS: Incorporate into lessons\n\nQuick Win: Create visual schedule on board tomorrow" },
    
    ef_strat: { title: "Executive Function: 5 Strategies", content: "1. ORGANIZATION: Color-code folders, checklists, planners\n2. THINK ALOUD: Model problem-solving visibly\n3. TASK BOARDS: To Do/Doing/Done\n4. GOAL SETTING: Small achievable targets, celebrate wins\n5. PROMPT CARDS: 'Stop, Breathe, Try Again'\n\nQuick Win: Post visual daily schedule" },
    
    access: { title: "Access Arrangements (AA)", content: "WHAT: Special exam provisions to minimize barriers\n\n3 PRINCIPLES:\n1. Based on student needs, not diagnosis\n2. Reflects normal way of working\n3. Multiple input sources (doctor, school, parents)\n\nCOMMON AA:\n• Extra Time (25%)\n• Modified papers (A3, Font 18)\n• Separate room\n• Assistive tech\n• Reader/Scribe/Prompter\n• Exemptions (specific components)\n\nEVIDENCE NEEDED:\n1. Diagnosis (within 3 years)\n2. Current profile of needs\n3. School Report with observations\n4. Exam results/work samples\n\nTIMELINE:\nPrimary: Trial P3-4, apply P5\nSecondary: Trial Sec 1-2, apply Sec 3\n\nKEY: Start early (assessments take 6+ months), SEAB is final authority, trial at school exams first" },
    
    sen_flow: { title: "SEN Support Procedure", content: "WHEN: After observing 1 term with learning/behavioral challenges\n\n4 PHASES:\n1. OBSERVATION: Committee observes, shares findings\n2. INTERVENTION (1 term): Teachers implement recommendations\n3. EVALUATION: Review progress together\n4. TIER 2 (if needed): RGC assessment\n\nCONTACTS:\nY1: Geraldine & Siti Jeffrey\nY2: Siti Jeffrey & Mei Choo\nY3: Geraldine & Jingjin\nY4: Mei Choo & Xiang Yeow\n\nKEY: Document with dates, collaborative process, focus on strengths" },
    
    adhd_screen: { title: "ADHD Screener", content: "Observe 4-6 weeks. Rate N/S/O.\n\nINATTENTION (8):\n☐ Difficulty sustaining attention\n☐ Doesn't listen\n☐ Fails to finish work\n☐ Difficulty organizing\n☐ Avoids sustained effort\n☐ Loses items\n☐ Easily distracted\n☐ Forgetful\n\nHYPERACTIVITY (6):\n☐ Fidgets constantly\n☐ Leaves seat\n☐ Runs/climbs inappropriately\n☐ Can't play quietly\n☐ Always 'on the go'\n☐ Talks excessively\n\nIMPULSIVITY (3):\n☐ Blurts answers\n☐ Can't wait turn\n☐ Interrupts\n\nNext: Document, discuss with SEN Committee/RGC, arrange parent meeting" },
    
    asd_screen: { title: "ASD Screener", content: "Observe 4-6 weeks. Rate N/S/O.\n\nSOCIAL (7):\n☐ Limited eye contact\n☐ Difficulty with social cues\n☐ Challenges in conversation\n☐ Literal interpretation\n☐ Difficulty with jokes/sarcasm\n☐ Prefers solitary play\n☐ Challenges making friends\n\nREPETITIVE (6):\n☐ Insists on sameness\n☐ Repetitive movements\n☐ Intense focus on interests\n☐ Lines up objects\n☐ Strict routines\n☐ Repetitive speech\n\nSENSORY (4):\n☐ Over/under reaction to stimuli\n☐ Unusual sensory interests\n☐ Adverse to textures\n☐ Seeks/avoids sensory input\n\nNext: Document patterns, consult SEN Committee/RGC" },
    
    dyslexia_screen: { title: "Dyslexia Screener", content: "Observe 1 term (3 months). Rate N/S/O.\n\nREADING ACCURACY & FLUENCY (10):\n☐ Reads slowly vs peers\n☐ Skips/adds words\n☐ Loses place on page\n☐ Guesses at words\n☐ Substitutes similar words\n☐ Can't sound out unfamiliar words\n☐ Word-by-word reading\n☐ Poor expression\n☐ Re-reads lines\n☐ Avoids reading aloud\n\nPHONOLOGICAL (6):\n☐ Difficulty rhyming\n☐ Can't break into syllables\n☐ Struggles blending sounds\n☐ Can't identify beginning/end sounds\n☐ Can't manipulate sounds\n☐ Trouble with tongue twisters\n\nSPELLING & WRITING (9):\n☐ Spelling errors despite practice\n☐ Spells same word differently\n☐ Letter reversals (b/d, p/q)\n☐ Can't remember spelling rules\n☐ Phonetic spelling (sed/said)\n☐ Writes numbers backwards\n☐ Struggles getting ideas on paper\n☐ Very short written work\n☐ Avoids writing\n\nCOMPREHENSION (6):\n☐ Better listening than reading comprehension\n☐ Can answer when text read to them\n☐ Struggles with self-read text\n☐ Can't summarize\n☐ Can't identify main idea\n☐ Takes much longer than peers\n\nWORKING MEMORY (6):\n☐ Forgets sequences (days, months, alphabet)\n☐ Forgets multi-step instructions\n☐ Confuses similar-sounding words\n☐ Can't learn math facts\n☐ Struggles with times tables\n☐ Mixes up left/right\n\nCLASSROOM BEHAVIORS (8):\n☐ Reluctant to read/write\n☐ Frustrated during literacy\n☐ Takes much longer on tasks\n☐ Excellent verbal, poor written\n☐ Avoids reading homework\n☐ Fatigues quickly\n☐ Anxious about reading aloud\n☐ Low confidence in literacy\n\nHIGH CONCERN: 10+ Often OR 5+ in Reading/Fluency OR 3+ in Phonological\n\nNext: Document examples, administer Neale/York assessment, discuss SEN Committee/RGC, inform parents, refer for educational psychologist assessment" },
    
    spd_screen: { title: "SPD Screener", content: "Observe 4-6 weeks. Rate N/S/O.\n\nAUDITORY:\n☐ Covers ears often\n☐ Distressed by normal noise\n☐ Startled by sounds\n☐ Doesn't respond to name\n☐ Makes constant noises\n\nVISUAL:\n☐ Bothered by bright lights\n☐ Squints in normal light\n☐ Doesn't notice visual changes\n☐ Stares at lights/spinning objects\n\nTACTILE:\n☐ Avoids messy activities\n☐ Dislikes certain textures\n☐ Upset by light touch\n☐ High pain tolerance\n☐ Constantly touching things\n☐ Chews non-food items\n\nVESTIBULAR (Movement):\n☐ Fearful of heights/equipment\n☐ Appears clumsy\n☐ Constantly in motion\n☐ Cannot sit still\n\nPROPRIOCEPTIVE (Body Awareness):\n☐ Bumps into people/objects\n☐ Poor personal space\n☐ Seems floppy/weak\n☐ Seeks heavy work\n☐ Stomps when walking\n\nORAL/SMELL/TASTE:\n☐ Very picky eater\n☐ Bothered by strong smells\n☐ Puts objects in mouth\n☐ Chews everything\n\nEMOTIONAL/BEHAVIORAL:\n☐ Frequent meltdowns\n☐ Difficulty with transitions\n☐ Overwhelmed in busy places\n☐ Inflexible routines\n\nHIGH CONCERN: 15+ Often overall OR 8+ in any system\n\nNext: Document triggers, note which senses affected, discuss SEN Committee/RGC, refer to occupational therapist" },
    
    ef_screen: { title: "Executive Function Screener (BRIEF-2)", content: "Observe 6 months. Rate N/S/O. Key items only.\n\nINHIBIT (Self-Control):\n☐ Fidgety\n☐ Explosive outbursts\n☐ Impulsive (doesn't think first)\n☐ Out of control more than peers\n☐ Small events trigger big reactions\n☐ Talks at wrong time\n\nSELF-MONITOR:\n☐ Unaware how behavior affects others\n☐ Poor understanding of strengths/weaknesses\n☐ Doesn't realize actions bother others\n\nSHIFT (Flexibility):\n☐ Resists different solutions\n☐ Trouble with new situations\n☐ Upset with changes\n☐ Mood changes frequently\n☐ Resists change of routine\n\nEMOTIONAL CONTROL:\n☐ Outbursts for little reason\n☐ Becomes upset too easily\n\nINITIATE:\n☐ Not a self-starter\n☐ Needs to be told to begin\n☐ Trouble getting started\n☐ Starts at last minute\n\nWORKING MEMORY:\n☐ Remembers only first/last of 3 things\n☐ Forgets things quickly\n☐ Forgets what was doing\n\nPLAN/ORGANIZE:\n☐ Doesn't plan ahead\n☐ Trouble with multi-step tasks\n☐ Written work poorly organized\n☐ Overwhelmed by large assignments\n\nTASK-MONITOR:\n☐ Doesn't check for mistakes\n☐ Tests poorly even when knows answers\n\nORGANIZATION OF MATERIALS:\n☐ Can't find things\n☐ Loses lunch box, homework, etc\n☐ Leaves trail of belongings\n\nCONCERN: 8+ Often in any category OR 15+ Sometimes/Often overall\n\nNext: Document which EF areas most challenging, discuss SEN Committee/RGC, implement strategies, consider specialist" },
    
    spd_basics: { title: "SPD (Sensory Processing Disorder)", content: "SPD = Sensory Processing Disorder\n\nWHAT: Brain has difficulty receiving and responding to sensory information (sound, touch, movement, taste, smell, sight, body awareness)\n\n3 TYPES:\n• Sensory Seeking (craves input)\n• Sensory Avoiding (overwhelmed)\n• Under-Responsive (doesn't notice)\n\nWHAT TEACHERS SEE:\n• Covers ears during noise\n• Refuses certain textures\n• Constantly moving/touching\n• Difficulty sitting still\n• Over-reactions to bumps\n• Chews on items\n• Avoids messy activities\n\nTRIGGERS:\n• Fluorescent lights\n• Fire drills/bells\n• Cafeteria noise\n• PE activities\n• Art materials\n• Crowded hallways\n\nSTRENGTHS:\n• Heightened awareness\n• Attention to detail\n• Unique perspectives\n\nNote: Often co-occurs with ASD and ADHD" },
    
    case_groupwork: { title: "ASD: Group Work Refusal", content: "WHY: Social anxiety, unclear expectations, sensory overload\n\nSTRATEGIES:\n1. PRE-TEACH: Explain structure, show visual outline\n2. STRUCTURED ROLES: Assign specific job matching strengths\n3. START SMALL: Begin with one partner, gradually increase\n4. SAFE EXIT: Agree on break signal\n5. VISUAL SUPPORTS: Checklists, conversation starters\n\nSAMPLE: 'Group work is challenging. Tomorrow, work with just Sarah. You're timekeeper - tell group when 5 min up. Need break? Put this card on desk.'\n\nQuick Win: Pairs, specific role, visual job description" },
    
    case_callout: { title: "ADHD: Calling Out", content: "WHY: Impulsivity, excitement, seeking attention\n\nSTRATEGIES:\n1. TEACH ALTERNATIVES: Write first, hand signal, talk tickets (3 per lesson)\n2. ACCEPTABLE OUTLETS: Question keeper role, answer first question\n3. NON-VERBAL CUES: Hand on shoulder = wait\n4. POSITIVE REINFORCEMENT: Praise hand-raising\n5. PROACTIVE: Warn before questions, movement break before quiet work\n\nRESPONSE: (Non-verbal signal) 'Remember our signal. Show me hand up.' (When complies) 'Perfect! I see your hand.'\n\nQuick Win: 3 talk tickets per lesson, praise hand-raising" }
  };

  const generateResponse = (input) => {
    const i = input.toLowerCase();
    
    // Navigation & Who to Contact queries
    if (i.includes('who') && (i.includes('approach') || i.includes('contact') || i.includes('speak to') || i.includes('involve') || i.includes('report'))) return kb.navigation;
    if (i.includes('first point') || i.includes('first step') || i.includes('escalat')) return kb.navigation;
    if (i.includes('year head') || i.includes('sen committee') || i.includes('sen support committee')) return kb.navigation;
    if (i.includes('decision tree') || i.includes('navigation') || i.includes('support staff')) return kb.navigation;
    
    // Teacher role queries
    if (i.includes('what can i') || i.includes('my role') || i.includes('teacher') && i.includes('do first')) return kb.teacher_role;
    if (i.includes('before escalat') || i.includes('before refer') || i.includes('simple strateg')) return kb.teacher_role;
    if (i.includes('document') && i.includes('observation')) return kb.teacher_role;
    if (i.includes('what to bring') || i.includes('when to escalate')) return kb.teacher_role;
    
    // Parent communication
    if (i.includes('parent') && (i.includes('when') || i.includes('how') || i.includes('explain') || i.includes('update'))) return kb.navigation;
    
    // Access arrangements who to contact
    if (i.includes('access') && (i.includes('who') || i.includes('speak') || i.includes('approval') || i.includes('qualif'))) return kb.navigation;
    
    // Discipline
    if (i.includes('discipline') || i.includes('behavior management') || i.includes('consequence') || i.includes('threw')) return kb.discipline;
    
    // Meltdowns
    if (i.includes('meltdown') || i.includes('crisis') || i.includes('calm') || i.includes('run')) return kb.meltdowns;
    
    // Case studies
    if (i.includes('group work') || (i.includes('asd') && i.includes('refuse'))) return kb.case_groupwork;
    if (i.includes('calling out') || i.includes('call out') || i.includes('blurt')) return kb.case_callout;
    
    // Screeners
    if (i.includes('quick screener') || i.includes('3 item') || i.includes('3-item') || i.includes('all screener')) return kb.quick_screeners;
    if (i.includes('adhd') && (i.includes('screen') || i.includes('checklist') || i.includes('observe'))) return kb.adhd_screen;
    if ((i.includes('asd') || i.includes('autism')) && (i.includes('screen') || i.includes('checklist'))) return kb.asd_screen;
    if (i.includes('dyslexia') && (i.includes('screen') || i.includes('checklist') || i.includes('observe') || i.includes('assessment'))) return kb.dyslexia_screen;
    if ((i.includes('sensory') || i.includes('spd')) && (i.includes('screen') || i.includes('checklist') || i.includes('observe'))) return kb.spd_screen;
    if ((i.includes('executive') || i.includes(' ef ') || i.includes('brief')) && (i.includes('screen') || i.includes('checklist'))) return kb.ef_screen;
    
    // Strategies
    if (i.includes('adhd') && (i.includes('strat') || i.includes('help') || i.includes('support'))) return kb.adhd_strat;
    if (i.includes('dyslexia') && (i.includes('strat') || i.includes('help'))) return kb.dyslexia_strat;
    if ((i.includes('sensory') || i.includes('spd') || i.includes('sensor')) && (i.includes('strat') || i.includes('help') || i.includes('what is'))) {
      if (i.includes('what is') || i.includes('explain') || i.includes('tell me')) return kb.spd_basics;
      return kb.spd_strat;
    }
    if ((i.includes('asd') || i.includes('autism')) && (i.includes('strat') || i.includes('help'))) return kb.asd_strat;
    if ((i.includes('executive') || i.includes(' ef ')) && (i.includes('strat') || i.includes('help'))) return kb.ef_strat;
    
    // CVD - Colour Vision Deficiency
    if (i.includes('colour') || i.includes('color') || i.includes('cvd') || i.includes('color blind') || i.includes('colour blind')) {
      if (i.includes('what is') || i.includes('explain') || i.includes('tell me') || i.includes('deficiency')) return kb.cvd_basics;
      return kb.cvd_basics; // Default to basics for CVD queries
    }
    
    // Procedures
    if (i.includes('access') && (i.includes('arrangement') || i.includes('exam'))) return kb.access;
    if (i.includes('flowchart') || i.includes('procedure') || i.includes('support committee')) return kb.sen_flow;
    
    // Download
    if (i.includes('download')) { handleDownload(); return { title: "Downloading", content: "Your guide is ready!" }; }
    
    // Help
    if (i.includes('help') || i.includes('what can')) {
      return { title: "I Can Help With:", content: "NAVIGATION & CONTACTS:\n• Who to approach first\n• When to escalate\n• Role of Year Head/SEN Committee\n• Parent communication timing\n• Access arrangements approval\n\nTEACHER'S ROLE:\n• What to try before escalating\n• How to document observations\n• When to involve others\n\nCONDITIONS & SUPPORT:\n• Screeners (ADHD, ASD, Dyslexia, SPD, EF)\n• 5 strategies for each condition\n• Case studies & scenarios\n• Discipline management\n• Meltdowns (CALM framework)\n• Access Arrangements\n\nAsk naturally!" };
    }
    
    // Default
    return { title: "Try Asking:", content: "• Quick 3-item screeners\n• ADHD strategies\n• Student refuses group work\n• Managing meltdowns\n• Discipline for SEN students\n• Access Arrangements guide\n\nOr click a quick prompt!" };
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { type: 'user', content: input }]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', content: generateResponse(input) }]);
      setIsTyping(false);
    }, 800);
  };

  const formatContent = (content) => {
    // Handle undefined or null content
    if (!content) return <div>No content available</div>;
    
    // Handle string content
    if (typeof content === 'string') {
      return content.split('\n').map((line, i) => {
        if (line.startsWith('☐')) return <div key={i} className="ml-4 mb-1 text-gray-700">{line}</div>;
        if (line.trim() === '') return <div key={i} className="h-2"></div>;
        const isBold = line.includes(':') && line.length < 50;
        return <div key={i} className={isBold ? "font-bold mt-2 text-blue-700" : "mb-1"}>{line}</div>;
      });
    }
    
    // Handle object content with title and content properties
    return (
      <div>
        {content.title && <h3 className="text-xl font-bold text-blue-700 mb-3">{content.title}</h3>}
        {content.content && formatContent(content.content)}
        {content.text && <div>{content.text}</div>}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Book className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">SEN Support Assistant</h1>
              <p className="text-sm text-blue-100">Singapore Secondary Schools (Ages 13-18)</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={handleDownload} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              <span className="text-sm">Download</span>
            </button>
            <button onClick={() => setMessages([{ type: 'bot', content: { text: "Welcome back! Ask me anything about SEN support." }}])} className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition-colors">
              <Trash2 className="w-4 h-4" />
              <span className="text-sm">Clear</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-3xl rounded-lg p-4 shadow-md ${msg.type === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}>
                {msg.type === 'bot' && (
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-blue-700">Assistant</span>
                  </div>
                )}
                <div className="prose prose-sm max-w-none">{formatContent(msg.content)}</div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="text-sm text-gray-500">Typing...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="bg-white border-t border-gray-200 p-3">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-600 mb-2 font-semibold">Quick prompts:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {quickPrompts.map((p, i) => (
              <button key={i} onClick={() => setInput(p.text)} className="flex items-center gap-2 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-sm transition-colors border border-blue-200">
                <p.icon className="w-4 h-4" />
                <span className="truncate">{p.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-gray-200 p-4">
        <div className="max-w-4xl mx-auto flex gap-2">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask about ADHD, ASD, dyslexia, discipline, screeners..." className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button onClick={handleSend} disabled={!input.trim()} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2">
            <Send className="w-5 h-5" />
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialEdChatbot;