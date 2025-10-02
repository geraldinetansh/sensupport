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
  };

  const kb = {
    adhd_basics: { title: "What is ADHD?", content: "ADHD = Attention-Deficit/Hyperactivity Disorder\n\nWHAT: A neurodevelopmental condition affecting attention, impulse control, and activity levels. Not about being lazy or lacking discipline—it's about how the brain processes information and regulates behavior.\n\n3 TYPES:\n• Inattentive: Difficulty focusing, easily distracted, forgetful\n• Hyperactive-Impulsive: Restless, fidgety, acts without thinking\n• Combined: Both inattentive and hyperactive symptoms\n\nWHAT TEACHERS SEE:\n• Difficulty completing tasks\n• Losing materials (books, pencils, homework)\n• Blurting out answers\n• Trouble waiting turn\n• Fidgeting constantly\n• Appearing to not listen\n• Disorganized work\n• Avoids tasks requiring sustained focus\n\nSTRENGTHS:\n• Creative thinking\n• High energy when interested\n• Spontaneous and enthusiastic\n• Often empathetic\n• Can hyperfocus on topics of interest\n\nKEY POINT: ADHD students WANT to focus—their brains just work differently. With the right support, they can thrive!\n\nNext: Ask for ADHD strategies or ADHD screener" },
    
    asd_basics: { title: "What is ASD?", content: "ASD = Autism Spectrum Disorder\n\nWHAT: A neurodevelopmental condition affecting social communication, sensory processing, and behavior patterns. Spectrum means it presents differently in everyone—some students need significant support, others need minimal accommodations.\n\n2 CORE AREAS:\n1. SOCIAL COMMUNICATION:\n• Difficulty reading social cues\n• Literal interpretation of language\n• Challenges with unwritten social rules\n• Different ways of expressing emotions\n• Preference for direct communication\n\n2. REPETITIVE BEHAVIORS & INTERESTS:\n• Intense focus on specific topics\n• Need for routine and predictability\n• Repetitive movements (stimming)\n• Sensory sensitivities\n\nWHAT TEACHERS SEE:\n• Avoiding eye contact\n• Difficulty with group work\n• Upset by schedule changes\n• Literal understanding (misses sarcasm/idioms)\n• Strong memory for details\n• Sensory reactions (covering ears, avoiding textures)\n• Prefers solitary activities\n\nSTRENGTHS:\n• Exceptional memory\n• Attention to detail\n• Honest and direct\n• Deep knowledge in areas of interest\n• Logical thinking\n• Pattern recognition\n\nKEY POINT: Autistic students are not being rude or difficult—they are navigating a world designed for neurotypical brains. Clear expectations and predictability help!\n\nNext: Ask for ASD strategies or ASD screener" },
    
    dyslexia_basics: { title: "What is Dyslexia?", content: "Dyslexia = A specific learning difficulty affecting reading and spelling\n\nWHAT: A neurological condition where the brain processes written language differently. NOT about intelligence—many dyslexic students are gifted in other areas. Specifically about decoding written text.\n\nCORE DIFFICULTIES:\n• Phonological processing (connecting sounds to letters)\n• Reading fluency and accuracy\n• Spelling despite practice\n• Working memory for sequences\n\nWHAT TEACHERS SEE:\n• Reads slowly and laboriously\n• Skips or adds words\n• Letter reversals (b/d, p/q) beyond age 8\n• Spells same word differently in one piece\n• Strong verbal skills but weak written work\n• Avoids reading aloud\n• Takes much longer than peers on written tasks\n• Can explain answers orally but struggles to write them\n\nWHAT IT IS NOT:\n• Not laziness\n• Not poor vision (though may co-occur)\n• Not lack of practice\n• Not low intelligence\n\nSTRENGTHS:\n• Creative problem-solving\n• Big-picture thinking\n• Strong oral communication\n• Spatial reasoning\n• Empathy and emotional intelligence\n\nKEY POINT: Dyslexic students often spend 2-3x longer on reading/writing tasks. They are working harder, not less hard!\n\nNext: Ask for Dyslexia strategies or Dyslexia screener" },
    
    spd_basics: { title: "What is SPD?", content: "SPD = Sensory Processing Disorder\n\nWHAT: A condition where the brain has difficulty receiving and responding to sensory information (sound, touch, movement, taste, smell, sight, body awareness). What feels normal to most people can be overwhelming or barely noticeable to someone with SPD.\n\n3 TYPES:\n• Sensory Seeking (craves input—constantly moving, touching)\n• Sensory Avoiding (overwhelmed easily—covers ears, avoids textures)\n• Under-Responsive (does not notice—high pain tolerance, seems unaware)\n\n7 SENSORY SYSTEMS:\n1. Auditory (sound)\n2. Visual (sight)\n3. Tactile (touch)\n4. Gustatory (taste)\n5. Olfactory (smell)\n6. Vestibular (movement/balance)\n7. Proprioceptive (body awareness)\n\nWHAT TEACHERS SEE:\n• Covers ears during normal noise\n• Refuses certain textures (art materials, fabrics)\n• Constantly moving or touching things\n• Difficulty sitting still\n• Over-reactions to accidental bumps\n• Chews on pencils, collars, sleeves\n• Avoids messy activities\n• Easily distracted by background noise\n• Seems clumsy or uncoordinated\n\nTRIGGERS IN SCHOOL:\n• Fluorescent lights\n• Fire drills/bells\n• Cafeteria noise\n• PE activities\n• Art materials (paint, glue)\n• Crowded hallways\n• Certain smells (markers, food)\n\nSTRENGTHS:\n• Heightened awareness in some areas\n• Attention to detail\n• Unique perspectives\n• Creative adaptations\n\nKEY POINT: SPD behaviors are not attention-seeking or misbehavior—they are the brain's way of regulating overwhelming input or seeking necessary input.\n\nNote: Often co-occurs with ASD and ADHD\n\nNext: Ask for SPD strategies or SPD screener" },
    
    ef_basics: { title: "What is Executive Function?", content: "Executive Function (EF) = The brain's management system\n\nWHAT: A set of mental skills that help us plan, focus, remember instructions, and juggle multiple tasks. Think of it as the brain's CEO—organizing, prioritizing, and managing everything we do.\n\n9 KEY SKILLS:\n1. INHIBIT: Self-control, thinking before acting\n2. SHIFT: Flexibility, adapting to changes\n3. EMOTIONAL CONTROL: Managing feelings\n4. INITIATE: Starting tasks without prompting\n5. WORKING MEMORY: Holding info while using it\n6. PLAN/ORGANIZE: Creating steps to reach goals\n7. TASK-MONITOR: Checking your own work\n8. ORGANIZE MATERIALS: Keeping track of belongings\n9. SELF-MONITOR: Awareness of how you are doing\n\nWHAT TEACHERS SEE:\n• Forgets multi-step instructions\n• Cannot get started without prompting\n• Loses materials constantly\n• Difficulty with long-term projects\n• Messy desk/locker\n• Does not plan ahead\n• Makes careless errors\n• Explosive reactions to small events\n• Rigid thinking (cannot adapt)\n• Leaves trail of belongings\n• Trouble prioritizing tasks\n\nWHAT IT IS NOT:\n• Not laziness or not caring\n• Not lack of intelligence\n• Not deliberate defiance\n\nSTRENGTHS:\n• Often creative when structure provided\n• Can be spontaneous and flexible in other ways\n• Respond well to visual supports\n\nKEY POINT: EF weaknesses are developmental delays, not character flaws. These students need external structure until internal structure develops.\n\nCOMMON WITH: ADHD, ASD, learning difficulties\n\nNext: Ask for Executive function strategies or EF screener" },
    
    cvd_basics: { title: "What is Colour Vision Deficiency?", content: "CVD = Colour Vision Deficiency (Colour Blindness)\n\nWHAT: A condition where a person has difficulty distinguishing certain colours. Usually inherited and caused by a lack of certain colour-detecting cells (cones) in the retina.\n\n3 MAIN TYPES:\n• Red-Green (most common, 8% of males, 0.5% of females)\n• Blue-Yellow (rare)\n• Complete (very rare, sees only shades of grey)\n\nWHAT TEACHERS SEE:\n• Confusion with colour-coded materials\n• Difficulty with colour-based instructions (Use the red pen)\n• Challenges in subjects using colour (art, geography, science diagrams)\n• May not volunteer for colour-related tasks\n• Hesitation when asked to identify colours\n\nCLASSROOM CHALLENGES:\n• Colour-coded notes and charts\n• Graphs and maps with similar shades\n• Science experiments with colour changes\n• Art projects requiring colour matching\n• PE teams identified by colour bibs\n• Highlighting in different colours\n\nSTRATEGIES:\n• Label colours with words\n• Use patterns/shapes in addition to colour\n• Provide high contrast materials\n• Use colour-blind friendly palettes\n• Do not rely solely on colour for critical info\n• Pair colour with text labels\n\nEXAM ACCOMMODATIONS:\n• Modified papers with patterns/labels\n• Black and white versions\n• Clarification of colour-dependent questions\n\nKEY POINT: CVD is permanent and cannot be cured. Simple adaptations make a huge difference!\n\nNext: Ask about Access Arrangements for exam support" },
    
    auditory_basics: { title: "What is Auditory Impairment?", content: "Auditory Impairment = Hearing loss or difficulty processing auditory information\n\nWHAT: Ranges from mild hearing loss to profound deafness. Can be present from birth or acquired. May use hearing aids, cochlear implants, or no amplification.\n\nTYPES:\n• Conductive (outer/middle ear, often temporary)\n• Sensorineural (inner ear/nerve, usually permanent)\n• Mixed (both types)\n• Central (brain processing, not ear problem)\n\nWHAT TEACHERS SEE:\n• Asks for repetition frequently\n• Watches speaker face intently\n• Turns one ear toward speaker\n• Difficulty in noisy environments\n• Misses verbal instructions\n• May respond inappropriately to questions\n• Fatigue from intense listening\n\nCLASSROOM STRATEGIES:\n• Face student when speaking\n• Ensure good lighting on your face\n• Reduce background noise\n• Use visual supports\n• Check for understanding\n• Provide written instructions\n• Use FM systems if available\n• Seat near front, away from noise sources\n• Repeat peer questions/comments\n\nCOMMUNICATION:\n• Some use sign language\n• Some lip-read\n• Some use spoken language with amplification\n• Some use combination\n\nEXAM ACCOMMODATIONS:\n• Separate quiet room\n• Modified listening components\n• Extra time\n• Visual instructions\n\nKEY POINT: Hearing loss is invisible—student may seem inattentive when they simply did not hear.\n\nNext: Ask about Access Arrangements" },
    
    visual_basics: { title: "What is Visual Impairment?", content: "Visual Impairment = Reduced vision that cannot be fully corrected with glasses/contacts\n\nWHAT: Ranges from low vision to blindness. May be present from birth or acquired. Not the same as needing glasses!\n\nTYPES:\n• Low Vision (partially sighted, uses remaining vision with aids)\n• Blind (little to no functional vision, uses non-visual methods)\n\nWHAT TEACHERS SEE:\n• Holds materials very close or very far\n• Difficulty reading standard print\n• Trouble seeing board from assigned seat\n• Takes longer to complete visual tasks\n• Squints or tilts head\n• Difficulty with diagrams/graphs\n• Fatigue from visual tasks\n• May use cane, guide dog, or sighted guide\n\nCLASSROOM STRATEGIES:\n• Enlarged print (18-24 point)\n• High contrast materials (black on white)\n• Reduce glare (avoid shiny paper)\n• Provide front seating\n• Verbalize what is written on board\n• Tactile materials when possible\n• Electronic materials for screen readers\n• Extra time for visual tasks\n• Allow recording of lessons\n\nTECHNOLOGY:\n• Screen readers\n• Magnification software\n• Braille displays\n• Audio books\n• Large print textbooks\n\nEXAM ACCOMMODATIONS:\n• Enlarged papers (A3, 18-24pt font)\n• Reader/Scribe\n• Extra time (often 50-100%)\n• Separate room\n• Computer with screen reader/magnification\n• Braille papers\n\nKEY POINT: Do not assume what student can or cannot see—always ask!\n\nNext: Ask about Access Arrangements" },
    
    quick_screeners: { title: "Quick 3-Item Screeners", content: "ASD:\n☐ Avoids eye contact\n☐ Distress with changes\n☐ Difficulty in peer interaction\n\nADHD:\n☐ Easily distracted\n☐ Often forgetful\n☐ Impulsive blurting\n\nDyslexia:\n☐ Reads slowly/inaccurately\n☐ Spelling errors despite practice\n☐ Avoids reading\n\nEF:\n☐ Forgets multi-step instructions\n☐ Struggles with deadlines\n☐ Disorganized materials\n\nSPD:\n☐ Over/under-sensitive to sound\n☐ Aversion to textures\n☐ Seeks constant movement\n\nNext Steps: Document patterns, consult SEN Committee/RGC if 2-3 items present" },
    
    discipline: { title: "Discipline for SEN Students", content: "6-STEP PROCEDURE:\n\n1. ANALYZE: Identify triggers, document incident, determine if SEN-related\n\n2. IMMEDIATE RESPONSE: Ensure safety, stay calm, de-escalate (low voice, reduce stimuli, give space)\n\n3. DISCUSSION: Private setting, restorative approach, validate feelings, help student understand impact\n\n4. ACTION PLAN: Collaborate with student on expectations, supports, replacement behaviors, consequences\n\n5. DOCUMENT: Record incident, intervention, outcome; share with SEN team\n\n6. FOLLOW-UP: Regular check-ins, assess effectiveness, modify as needed\n\nSPECIAL CONSIDERATIONS:\n• Sensory: Breaks, calming strategies\n• Communication: Visual aids, processing time\n• EF: Break steps down, checklists\n• Emotional: Calm zones, self-regulation\n• Transitions: Advance warning, visual schedules\n\nKEY: Behavior is communication, not defiance. Use restorative (repair/learn) not punitive (punishment) approaches." },
    
    meltdowns: { title: "Managing Meltdowns", content: "CALM FRAMEWORK:\nC - Check safety\nA - Avoid power struggle\nL - Let others know (Year Head/RGC)\nM - Make space\n\nWARNING SIGNS: Voice/body language changes, hyperventilation, increased movement\n\nTRIGGERS: Academic stress, routine changes, sensory overload, transitions\n\nUPSET IN CLASS:\n1. Low, soft voice\n2. Ask if wants to be alone/visit RGC\n3. Give time and space\n4. Accompany to safe place\n5. Notify Year Head/RGC\n\nRUNS OUT:\n1. Get help to manage class\n2. Locate student, update Year Head\n3. Return after 10 min if not found\n\nIF AGGRESSIVE: Do not restrain, evacuate class if needed, call Year Head immediately\n\nPREVENTION: Learn triggers, build in breaks, provide warnings, create escape plans" },
    
    adhd_strat: { title: "ADHD: 5 Strategies", content: "1. CHUNK TASKS: One instruction at a time, checklists, mini-deadlines\n2. MOVEMENT: Fidgets, 20-min brain breaks, flexible seating\n3. REDUCE DISTRACTIONS: Strategic seating, visual barriers, headphones\n4. VISUAL SUPPORTS: Post schedules, visible timers, color-code materials\n5. POSITIVE ATTENTION: Catch on-task behavior, specific praise\n\nQuick Win: Break one lesson into 3 visible chunks tomorrow" },
    
    dyslexia_strat: { title: "Dyslexia: 5 Strategies", content: "1. MULTI-SENSORY: Letter tiles, tracing, movement with phonics\n2. TECH: Text-to-speech, audiobooks, speech-to-text\n3. MODIFICATIONS: Colored overlays, larger font, 1.5 spacing\n4. ALT ASSESSMENT: Oral responses, word banks, extra time\n5. PRE-TEACH: Introduce key words before lesson\n\nQuick Win: Offer colored overlay tomorrow" },
    
    spd_strat: { title: "SPD: 5 Strategies", content: "SPD = Sensory Processing Disorder\n\n1. SENSORY SPACES: Calm corner, quiet options\n2. TOOLS: Fidgets, weighted items, ear defenders\n3. WARNINGS: Preview loud events, visual schedules\n4. MODIFY ACTIVITIES: Alternative materials, allow movement\n5. SENSORY DIET: Heavy work tasks, movement breaks\n\nQuick Win: Before assembly, say It will be loud. You can cover ears" },
    
    asd_strat: { title: "ASD: 5 Strategies", content: "1. VISUAL SCHEDULES: Post routine, mark completed tasks\n2. CLEAR LANGUAGE: Avoid idioms, specific instructions\n3. PREDICTABILITY: Warn of changes, transition timers\n4. SENSORY: Allow breaks, quiet spaces\n5. SPECIAL INTERESTS: Incorporate into lessons\n\nQuick Win: Create visual schedule on board tomorrow" },
    
    ef_strat: { title: "Executive Function: 5 Strategies", content: "1. ORGANIZATION: Color-code folders, checklists, planners\n2. THINK ALOUD: Model problem-solving visibly\n3. TASK BOARDS: To Do/Doing/Done\n4. GOAL SETTING: Small achievable targets, celebrate wins\n5. PROMPT CARDS: Stop, Breathe, Try Again\n\nQuick Win: Post visual daily schedule" },
    
    access: { title: "Access Arrangements (AA)", content: "WHAT: Special exam provisions to minimize barriers\n\n3 PRINCIPLES:\n1. Based on student needs, not diagnosis\n2. Reflects normal way of working\n3. Multiple input sources (doctor, school, parents)\n\nCOMMON AA:\n• Extra Time (25%)\n• Modified papers (A3, Font 18)\n• Separate room\n• Assistive tech\n• Reader/Scribe/Prompter\n• Exemptions (specific components)\n\nEVIDENCE NEEDED:\n1. Diagnosis (within 3 years)\n2. Current profile of needs\n3. School Report with observations\n4. Exam results/work samples\n\nTIMELINE:\nPrimary: Trial P3-4, apply P5\nSecondary: Trial Sec 1-2, apply Sec 3\n\nKEY: Start early (assessments take 6+ months), SEAB is final authority, trial at school exams first" },
    
    sen_flow: { title: "SEN Support Procedure", content: "WHEN: After observing 1 term with learning/behavioral challenges\n\n4 PHASES:\n1. OBSERVATION: Committee observes, shares findings\n2. INTERVENTION (1 term): Teachers implement recommendations\n3. EVALUATION: Review progress together\n4. TIER 2 (if needed): RGC assessment\n\nCONTACTS:\nY1: Geraldine & Siti Jeffrey\nY2: Siti Jeffrey & Mei Choo\nY3: Geraldine & Jingjin\nY4: Mei Choo & Xiang Yeow\n\nKEY: Document with dates, collaborative process, focus on strengths" },
    
    adhd_screen: { title: "ADHD Screener", content: "Observe 4-6 weeks. Rate N/S/O.\n\nINATTENTION (8):\n☐ Difficulty sustaining attention\n☐ Does not listen\n☐ Fails to finish work\n☐ Difficulty organizing\n☐ Avoids sustained effort\n☐ Loses items\n☐ Easily distracted\n☐ Forgetful\n\nHYPERACTIVITY (6):\n☐ Fidgets constantly\n☐ Leaves seat\n☐ Runs/climbs inappropriately\n☐ Cannot play quietly\n☐ Always on the go\n☐ Talks excessively\n\nIMPULSIVITY (3):\n☐ Blurts answers\n☐ Cannot wait turn\n☐ Interrupts\n\nNext: Document, discuss with SEN Committee/RGC, arrange parent meeting" },
    
    asd_screen: { title: "ASD Screener", content: "Observe 4-6 weeks. Rate N/S/O.\n\nSOCIAL (7):\n☐ Limited eye contact\n☐ Difficulty with social cues\n☐ Challenges in conversation\n☐ Literal interpretation\n☐ Difficulty with jokes/sarcasm\n☐ Prefers solitary play\n☐ Challenges making friends\n\nREPETITIVE (6):\n☐ Insists on sameness\n☐ Repetitive movements\n☐ Intense focus on interests\n☐ Lines up objects\n☐ Strict routines\n☐ Repetitive speech\n\nSENSORY (4):\n☐ Over/under reaction to stimuli\n☐ Unusual sensory interests\n☐ Adverse to textures\n☐ Seeks/avoids sensory input\n\nNext: Document patterns, consult SEN Committee/RGC" },
    
    dyslexia_screen: { title: "Dyslexia Screener", content: "Observe 1 term (3 months). Rate N/S/O.\n\nREADING ACCURACY & FLUENCY (10):\n☐ Reads slowly vs peers\n☐ Skips/adds words\n☐ Loses place on page\n☐ Guesses at words\n☐ Substitutes similar words\n☐ Cannot sound out unfamiliar words\n☐ Word-by-word reading\n☐ Poor expression\n☐ Re-reads lines\n☐ Avoids reading aloud\n\nPHONOLOGICAL (6):\n☐ Difficulty rhyming\n☐ Cannot break into syllables\n☐ Struggles blending sounds\n☐ Cannot identify beginning/end sounds\n☐ Cannot manipulate sounds\n☐ Trouble with tongue twisters\n\nSPELLING & WRITING (9):\n☐ Spelling errors despite practice\n☐ Spells same word differently\n☐ Letter reversals (b/d, p/q)\n☐ Cannot remember spelling rules\n☐ Phonetic spelling (sed/said)\n☐ Writes numbers backwards\n☐ Struggles getting ideas on paper\n☐ Very short written work\n☐ Avoids writing\n\nCOMPREHENSION (6):\n☐ Better listening than reading comprehension\n☐ Can answer when text read to them\n☐ Struggles with self-read text\n☐ Cannot summarize\n☐ Cannot identify main idea\n☐ Takes much longer than peers\n\nWORKING MEMORY (6):\n☐ Forgets sequences (days, months, alphabet)\n☐ Forgets multi-step instructions\n☐ Confuses similar-sounding words\n☐ Cannot learn math facts\n☐ Struggles with times tables\n☐ Mixes up left/right\n\nCLASSROOM BEHAVIORS (8):\n☐ Reluctant to read/write\n☐ Frustrated during literacy\n☐ Takes much longer on tasks\n☐ Excellent verbal, poor written\n☐ Avoids reading homework\n☐ Fatigues quickly\n☐ Anxious about reading aloud\n☐ Low confidence in literacy\n\nHIGH CONCERN: 10+ Often OR 5+ in Reading/Fluency OR 3+ in Phonological\n\nNext: Document examples, administer Neale/York assessment, discuss SEN Committee/RGC, inform parents, refer for educational psychologist assessment" },
    
    spd_screen: { title: "SPD Screener", content: "Observe 4-6 weeks. Rate N/S/O.\n\nAUDITORY:\n☐ Covers ears often\n☐ Distressed by normal noise\n☐ Startled by sounds\n☐ Does not respond to name\n☐ Makes constant noises\n\nVISUAL:\n☐ Bothered by bright lights\n☐ Squints in normal light\n☐ Does not notice visual changes\n☐ Stares at lights/spinning objects\n\nTACTILE:\n☐ Avoids messy activities\n☐ Dislikes certain textures\n☐ Upset by light touch\n☐ High pain tolerance\n☐ Constantly touching things\n☐ Chews non-food items\n\nVESTIBULAR (Movement):\n☐ Fearful of heights/equipment\n☐ Appears clumsy\n☐ Constantly in motion\n☐ Cannot sit still\n\nPROPRIOCEPTIVE (Body Awareness):\n☐ Bumps into people/objects\n☐ Poor personal space\n☐ Seems floppy/weak\n☐ Seeks heavy work\n☐ Stomps when walking\n\nORAL/SMELL/TASTE:\n☐ Very picky eater\n☐ Bothered by strong smells\n☐ Puts objects in mouth\n☐ Chews everything\n\nEMOTIONAL/BEHAVIORAL:\n☐ Frequent meltdowns\n☐ Difficulty with transitions\n☐ Overwhelmed in busy places\n☐ Inflexible routines\n\nHIGH CONCERN: 15+ Often overall OR 8+ in any system\n\nNext: Document triggers, note which senses affected, discuss SEN Committee/RGC, refer to occupational therapist" },
    
    ef_screen: { title: "Executive Function Screener (BRIEF-2)", content: "Observe 6 months. Rate N/S/O. Key items only.\n\nINHIBIT (Self-Control):\n☐ Fidgety\n☐ Explosive outbursts\n☐ Impulsive (does not think first)\n☐ Out of control more than peers\n☐ Small events trigger big reactions\n☐ Talks at wrong time\n\nSELF-MONITOR:\n☐ Unaware how behavior affects others\n☐ Poor understanding of strengths/weaknesses\n☐ Does not realize actions bother others\n\nSHIFT (Flexibility):\n☐ Resists different solutions\n☐ Trouble with new situations\n☐ Upset with changes\n☐ Mood changes frequently\n☐ Resists change of routine\n\nEMOTIONAL CONTROL:\n☐ Outbursts for little reason\n☐ Becomes upset too easily\n\nINITIATE:\n☐ Not a self-starter\n☐ Needs to be told to begin\n☐ Trouble getting started\n☐ Starts at last minute\n\nWORKING MEMORY:\n☐ Remembers only first/last of 3 things\n☐ Forgets things quickly\n☐ Forgets what was doing\n\nPLAN/ORGANIZE:\n☐ Does not plan ahead\n☐ Trouble with multi-step tasks\n☐ Written work poorly organized\n☐ Overwhelmed by large assignments\n\nTASK-MONITOR:\n☐ Does not check for mistakes\n☐ Tests poorly even when knows answers\n\nORGANIZATION OF MATERIALS:\n☐ Cannot find things\n☐ Loses lunch box, homework, etc\n☐ Leaves trail of belongings\n\nCONCERN: 8+ Often in any category OR 15+ Sometimes/Often overall\n\nNext: Document which EF areas most challenging, discuss SEN Committee/RGC, implement strategies, consider specialist" },
    
    case_groupwork: { title: "ASD: Group Work Refusal", content: "WHY: Social anxiety, unclear expectations, sensory overload\n\nSTRATEGIES:\n1. PRE-TEACH: Explain structure, show visual outline\n2. STRUCTURED ROLES: Assign specific job matching strengths\n3. START SMALL: Begin with one partner, gradually increase\n4. SAFE EXIT: Agree on break signal\n5. VISUAL SUPPORTS: Checklists, conversation starters\n\nSAMPLE: Group work is challenging. Tomorrow, work with just Sarah. You are timekeeper - tell group when 5 min up. Need break? Put this card on desk.\n\nQuick Win: Pairs, specific role, visual job description" },
    
    case_callout: { title: "ADHD: Calling Out", content: "WHY: Impulsivity, excitement, seeking attention\n\nSTRATEGIES:\n1. TEACH ALTERNATIVES: Write first, hand signal, talk tickets (3 per lesson)\n2. ACCEPTABLE OUTLETS: Question keeper role, answer first question\n3. NON-VERBAL CUES: Hand on shoulder = wait\n4. POSITIVE REINFORCEMENT: Praise hand-raising\n5. PROACTIVE: Warn before questions, movement break before quiet work\n\nRESPONSE: (Non-verbal signal) Remember our signal. Show me hand up. (When complies) Perfect! I see your hand.\n\nQuick Win: 3 talk tickets per lesson, praise hand-raising" }
  };

  const generateResponse = (input) => {
    const i = input.toLowerCase();
    
    // BASIC "WHAT IS" QUERIES - NEW PRIORITY
    if (i.includes('what is') || i.includes('what\'s') || i.includes('define') || i.includes('explain') || i.includes('tell me about')) {
      if (i.includes('adhd')) return kb.adhd_basics;
      if (i.includes('asd') || i.includes('autism')) return kb.asd_basics;
      if (i.includes('dyslexia')) return kb.dyslexia_basics;
      if (i.includes('spd') || i.includes('sensory')) return kb.spd_basics;
      if (i.includes('executive') || i.includes(' ef ')) return kb.ef_basics;
      if (i.includes('colour') || i.includes('color') || i.includes('cvd')) return kb.cvd_basics;
      if (i.includes('auditory') || i.includes('hearing')) return kb.auditory_basics;
      if (i.includes('visual') || i.includes('sight') || i.includes('blind')) return kb.visual_basics;
    }
    
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
    if ((i.includes('sensory') || i.includes('spd')) && (i.includes('strat') || i.includes('help'))) return kb.spd_strat;
    if ((i.includes('asd') || i.includes('autism')) && (i.includes('strat') || i.includes('help'))) return kb.asd_strat;
    if ((i.includes('executive') || i.includes(' ef ')) && (i.includes('strat') || i.includes('help'))) return kb.ef_strat;
    
    // Procedures
    if (i.includes('access') && (i.includes('arrangement') || i.includes('exam'))) return kb.access;
    if (i.includes('flowchart') || i.includes('procedure') || i.includes('support committee')) return kb.sen_flow;
    
    // Download
    if (i.includes('download')) { handleDownload(); return { title: "Downloading", content: "Your guide is ready!" }; }
    
    // Help
    if (i.includes('help') || i.includes('what can')) {
      return { title: "I Can Help With:", content: "UNDERSTANDING CONDITIONS:\n• What is ADHD?\n• What is ASD/Autism?\n• What is Dyslexia?\n• What is SPD?\n• What is Executive Function?\n• What is Colour Blindness?\n• What is Auditory/Visual Impairment?\n\nPRACTICAL SUPPORT:\n• Screeners (ADHD, ASD, Dyslexia, SPD, EF)\n• 5 strategies for each condition\n• Case studies & scenarios\n• Discipline management\n• Meltdowns (CALM framework)\n• Access Arrangements\n\nAsk naturally!" };
    }
    
    // Default
    return { title: "Try Asking:", content: "• What is ADHD?\n• What is colour blindness?\n• Quick 3-item screeners\n• ADHD strategies\n• Student refuses group work\n• Managing meltdowns\n• Discipline for SEN students\n• Access Arrangements guide\n\nOr click a quick prompt!" };
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
    if (!content) return <div>No content available</div>;
    
    if (typeof content === 'string') {
      return content.split('\n').map((line, i) => {
        if (line.startsWith('☐')) return <div key={i} className="ml-4 mb-1 text-gray-700">{line}</div>;
        if (line.trim() === '') return <div key={i} className="h-2"></div>;
        const isBold = line.includes(':') && line.length < 50;
        return <div key={i} className={isBold ? "font-bold mt-2 text-blue-700" : "mb-1"}>{line}</div>;
      });
    }
    
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
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask: What is ADHD? What is colour blindness?" className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
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