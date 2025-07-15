exports.id=724,exports.ids=[724],exports.modules={913:(e,t,o)=>{Promise.resolve().then(o.bind(o,3096)),Promise.resolve().then(o.bind(o,8098)),Promise.resolve().then(o.bind(o,7977)),Promise.resolve().then(o.bind(o,1466))},573:(e,t,o)=>{Promise.resolve().then(o.t.bind(o,2994,23)),Promise.resolve().then(o.t.bind(o,6114,23)),Promise.resolve().then(o.t.bind(o,9727,23)),Promise.resolve().then(o.t.bind(o,9671,23)),Promise.resolve().then(o.t.bind(o,1868,23)),Promise.resolve().then(o.t.bind(o,4759,23))},3096:(e,t,o)=>{"use strict";o.d(t,{default:()=>i});var r=o(326);o(7577);var n=o(3265),s=o(4705);let a=(0,n.default)(async()=>{},{loadableGenerated:{modules:["app/components/AnimatedBackground.js -> @lottiefiles/react-lottie-player"]},ssr:!1}),i=({children:e})=>(0,r.jsxs)("div",{children:[r.jsx(a,{autoplay:!0,loop:!0,src:(0,s.wE)("/sts-bg.json"),rendererSettings:{preserveAspectRatio:"xMidYMid slice"},className:"animatedBackground"}),r.jsx("div",{style:{position:"relative",zIndex:1,backgroundColor:"black"},children:e})]})},8098:(e,t,o)=>{"use strict";o.d(t,{DeepgramContextProvider:()=>i,Y:()=>l});var r=o(326),n=o(7577),s=o(4705);let a=(0,n.createContext)(),i=({children:e})=>{let[t,o]=(0,n.useState)(),[i,l]=(0,n.useState)(-1),[c,d]=(0,n.useState)(0),[u,g]=(0,n.useState)(!1),p=(0,n.useRef)(),m=async()=>{if(c>=5){console.log("Max reconnect attempts reached."),g(!0);return}l(0),console.log("\uD83D\uDD0C Starting WebSocket connection...");let e=await (0,s.bW)();console.log("\uD83C\uDFAB Auth token for WebSocket:",e);let t="wss://agent.deepgram.com/v1/agent/converse",r=["bearer",e];console.log("\uD83C\uDF10 WebSocket URL:",t),console.log("\uD83D\uDCDD WebSocket protocols:",r);let n=new WebSocket(t,r);console.log("\uD83D\uDE80 WebSocket created, ready state:",n.readyState),n.binaryType="arraybuffer",n.addEventListener("open",()=>{l(1),d(0),console.log("✅ WebSocket connected successfully!"),console.log("\uD83D\uDD17 WebSocket ready state:",n.readyState),p.current=setInterval((0,s.G7)(n),1e4)}),n.addEventListener("error",e=>{l(2),console.error("❌ WebSocket error details:",e),console.error("\uD83D\uDD17 WebSocket ready state:",n.readyState),console.error("\uD83C\uDF10 WebSocket URL:",n.url),console.error("\uD83D\uDCDD WebSocket protocol:",n.protocol)}),n.addEventListener("close",e=>{clearInterval(p.current),l(3),console.error("\uD83D\uDD0C WebSocket closed. Details:"),console.error("   Code:",e.code),console.error("   Reason:",e.reason),console.error("   Was Clean:",e.wasClean),console.error("   Ready State:",n.readyState),console.error("   Close Code Meaning:",{1e3:"Normal closure",1001:"Going away",1002:"Protocol error",1003:"Unsupported data",1004:"Reserved",1005:"No status received",1006:"Abnormal closure",1007:"Invalid frame payload data",1008:"Policy violation",1009:"Message too big",1010:"Mandatory extension",1011:"Internal server error",1015:"TLS handshake failure",4001:"Unauthorized",4003:"Forbidden",4008:"Rate limited",4009:"Conflict"}[e.code]||"Unknown"),console.info("\uD83D\uDD04 Attempting to reconnect in 3 seconds..."),setTimeout(m,3e3),d(e=>e+1)}),n.addEventListener("message",()=>{}),o(n)};return r.jsx(a.Provider,{value:{socket:t,socketState:i,rateLimited:u,connectToDeepgram:m},children:e})};function l(){return(0,n.useContext)(a)}},7977:(e,t,o)=>{"use strict";o.d(t,{MicrophoneContextProvider:()=>a,p:()=>i});var r=o(326),n=o(7577);let s=(0,n.createContext)(),a=({children:e})=>{let[t,o]=(0,n.useState)(null),[a,i]=(0,n.useState)(),[l,c]=(0,n.useState)(),[d,u]=(0,n.useState)(),g=async()=>{o(0);try{let e=await navigator.mediaDevices.getUserMedia({audio:{sampleRate:16e3,channelCount:1,volume:1,echoCancellation:!0,noiseSuppression:!1,latency:0}}),t=new AudioContext,r=t.createMediaStreamSource(e),n=t.createScriptProcessor(4096,1,1);i(r),c(t),u(n),o(1)}catch(e){console.error(e),"NotFoundError"!==e.name&&"NotAllowedError"!==e.name&&console.log(e.name)}},p=(0,n.useCallback)(()=>{a.connect(d),d.connect(l.destination),o(2)},[d,l,a]);return r.jsx(s.Provider,{value:{microphone:a,startMicrophone:p,setupMicrophone:g,microphoneState:t,microphoneAudioContext:l,setMicrophoneAudioContext:c,processor:d},children:e})};function i(){return(0,n.useContext)(s)}},1466:(e,t,o)=>{"use strict";o.d(t,{tw:()=>r,VoiceBotProvider:()=>w,aI:()=>n,Ct:()=>m,wc:()=>h,Z$:()=>y,jq:()=>D});var r,n,s=o(326),a=o(7577);let i="start_listening",l="start_speaking",c="start_sleeping",d="add_message",u="set_attach_params_to_copy_url",g="add_behind_scenes_event",p=(e,t)=>{switch(t.type){case i:return{...e,status:n.LISTENING,sleepTimer:0};case"start_thinking":return{...e,status:n.THINKING};case l:return{...e,status:n.SPEAKING,sleepTimer:0};case c:return{...e,status:n.SLEEPING};case"increment_sleep_timer":return{...e,sleepTimer:e.sleepTimer+1};case d:return{...e,messages:[...e.messages,t.payload]};case u:return{...e,attachParamsToCopyUrl:t.payload};case g:return{...e,behindTheScenesEvents:[...e.behindTheScenesEvents,t.payload]};default:return e}};!function(e){e.SETTINGS_APPLIED="SettingsApplied",e.AGENT_AUDIO_DONE="AgentAudioDone",e.USER_STARTED_SPEAKING="UserStartedSpeaking",e.AGENT_STARTED_SPEAKING="AgentStartedSpeaking",e.CONVERSATION_TEXT="ConversationText",e.END_OF_THOUGHT="EndOfThought"}(r||(r={}));let m=e=>y(e)||f(e),h=e=>void 0!==e.tts_latency,y=e=>void 0!==e.user,f=e=>void 0!==e.assistant;!function(e){e.LISTENING="listening",e.THINKING="thinking",e.SPEAKING="speaking",e.SLEEPING="sleeping",e.NONE=""}(n||(n={}));let S={status:"",sleepTimer:0,messages:[],attachParamsToCopyUrl:!0,behindTheScenesEvents:[]},v=(0,a.createContext)(void 0);function D(){let e=(0,a.useContext)(v);if(!e)throw Error("useVoiceBot must be used within a VoiceBotProvider");return e}function w({children:e}){let[t,o]=(0,a.useReducer)(p,S),r=(0,a.useRef)(!1),n=e=>{o({type:d,payload:e})},D=e=>{o({type:g,payload:e})},w=(0,a.useCallback)((e=!1)=>{(e||"sleeping"!==t.status)&&o({type:l})},[t.status]),x=(0,a.useCallback)((e=!1)=>{(e||"sleeping"!==t.status)&&o({type:i})},[t.status]),C=()=>{r.current=!0,o({type:c})},P=(0,a.useCallback)(()=>{"sleeping"===t.status?x(!0):C()},[t.status,x]),b=(e,t)=>f(t)&&y(e),k=(0,a.useMemo)(()=>{let e=t.messages.filter(m),o=t.messages.filter(h),r=[];return e.forEach((e,t,n)=>{let s=n[t-1];if(s&&b(e,s)){let e=o.shift();e&&r.push(e)}if(r.push(e),f(e)&&t===n.length-1){let e=o.shift();e&&r.push(e)}}),r},[t.messages]),I=(0,a.useCallback)(e=>{o({type:u,payload:e})},[]),T=(0,a.useMemo)(()=>({...t,isWaitingForUserVoiceAfterSleep:r,displayOrder:k,addVoicebotMessage:n,addBehindTheScenesEvent:D,startSpeaking:w,startListening:x,startSleeping:C,toggleSleep:P,setAttachParamsToCopyUrl:I}),[t,x,w,P,I,k]);return s.jsx(v.Provider,{value:T,children:e})}},3722:(e,t,o)=>{"use strict";function r(e,t,o=24e3){let r=new Int16Array(t);if(0===r.length){console.error("Received audio data is empty.");return}let n=e.createBuffer(1,r.length,o),s=n.getChannelData(0);for(let e=0;e<r.length;e++)s[e]=r[e]/32768;return n}function n(e,t,o,r){let n=e.createBufferSource();n.buffer=t,n.connect(r),r.connect(e.destination);let s=e.currentTime;return o.current<s&&(o.current=s),n.start(o.current),o.current+=t.duration,n}function s(e,t,o){if(t===o)return e;let r=t/o,n=new Float32Array(Math.round(e.length/r)),s=0,a=0;for(;s<n.length;){let t=Math.round((s+1)*r),o=0,i=0;for(let r=a;r<t&&r<e.length;r++)o+=e[r],i++;n[s]=o/i,s++,a=t}return n}function a(e){let t=e.length,o=new Int16Array(t);for(;t--;)o[t]=32767*Math.min(1,e[t]);return o.buffer}o.d(t,{DU:()=>s,Xd:()=>a,_6:()=>r,kU:()=>n})},4705:(e,t,o)=>{"use strict";o.d(t,{bW:()=>s,G7:()=>l,rn:()=>a,Mx:()=>i,wE:()=>c});var r=o(3722);let n={basePath:"/agent"},s=async()=>{console.log("\uD83D\uDD11 Fetching auth token...");let e=await fetch(c("/api/authenticate"),{method:"POST"});console.log("\uD83D\uDCE1 Response status:",e.status);let t=await e.json();return console.log("\uD83D\uDCCB Auth result:",t),console.log("\uD83D\uDD10 Token being returned:",t.key),t.key},a=e=>t=>{let o=t?.inputBuffer?.getChannelData(0),n=(0,r.DU)(o,48e3,16e3),s=(0,r.Xd)(n);e.send(s)},i=(e,t)=>{e.send(JSON.stringify(t))},l=e=>()=>{i(e,{type:"KeepAlive"})},c=e=>{let t=n.basePath||"/";return"/"===e?t:t+e}},4231:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>S,metadata:()=>y});var r=o(9510),n=o(4657),s=o.n(n),a=o(9098),i=o.n(a),l=o(125),c=o.n(l),d=o(8570);let u=(0,d.createProxy)(String.raw`/Users/ian/Code/IM/deepgram-voice-agent-demo/app/context/DeepgramContextProvider.js#DeepgramContextProvider`);(0,d.createProxy)(String.raw`/Users/ian/Code/IM/deepgram-voice-agent-demo/app/context/DeepgramContextProvider.js#useDeepgram`);let g=(0,d.createProxy)(String.raw`/Users/ian/Code/IM/deepgram-voice-agent-demo/app/context/MicrophoneContextProvider.js#MicrophoneContextProvider`);(0,d.createProxy)(String.raw`/Users/ian/Code/IM/deepgram-voice-agent-demo/app/context/MicrophoneContextProvider.js#useMicrophone`),(0,d.createProxy)(String.raw`/Users/ian/Code/IM/deepgram-voice-agent-demo/app/context/VoiceBotContextProvider.tsx#EventType`),(0,d.createProxy)(String.raw`/Users/ian/Code/IM/deepgram-voice-agent-demo/app/context/VoiceBotContextProvider.tsx#isConversationMessage`),(0,d.createProxy)(String.raw`/Users/ian/Code/IM/deepgram-voice-agent-demo/app/context/VoiceBotContextProvider.tsx#isLatencyMessage`),(0,d.createProxy)(String.raw`/Users/ian/Code/IM/deepgram-voice-agent-demo/app/context/VoiceBotContextProvider.tsx#isUserMessage`),(0,d.createProxy)(String.raw`/Users/ian/Code/IM/deepgram-voice-agent-demo/app/context/VoiceBotContextProvider.tsx#isAssistantMessage`),(0,d.createProxy)(String.raw`/Users/ian/Code/IM/deepgram-voice-agent-demo/app/context/VoiceBotContextProvider.tsx#VoiceBotStatus`),(0,d.createProxy)(String.raw`/Users/ian/Code/IM/deepgram-voice-agent-demo/app/context/VoiceBotContextProvider.tsx#VoiceBotContext`),(0,d.createProxy)(String.raw`/Users/ian/Code/IM/deepgram-voice-agent-demo/app/context/VoiceBotContextProvider.tsx#useVoiceBot`);let p=(0,d.createProxy)(String.raw`/Users/ian/Code/IM/deepgram-voice-agent-demo/app/context/VoiceBotContextProvider.tsx#VoiceBotProvider`),m=(0,d.createProxy)(String.raw`/Users/ian/Code/IM/deepgram-voice-agent-demo/app/components/AnimatedBackground.js#default`);o(7272);let h={type:"Settings",audio:{input:{encoding:"linear16",sample_rate:16e3},output:{encoding:"linear16",sample_rate:24e3,container:"none"}},agent:{listen:{provider:{type:"deepgram",model:"nova-3"}},speak:{provider:{type:"deepgram",model:"aura-asteria-en"}},think:{provider:{type:"open_ai",model:"gpt-4o"}}},experimental:!0};({...h,agent:{...h.agent,think:{...h.agent.think,prompt:`
                # Outbound Sales Trainer Agent Prompt

## Identity & Purpose

You are Morgan Naidoo, a 52-year-old Operations Manager for "Cape Fresh Markets," a family-owned chain of 8 fresh produce markets across the Western Cape. Your primary purpose is to be skeptical and challenging, but YOU MUST gradually warm up and eventually agree to next steps if the SDR demonstrates understanding of your business challenges.

## Voice & Persona

### Personality
- Initially skeptical and guarded, but not hostile
- Tired from years of empty vendor promises
- Protective of time but willing to listen if value is shown
- Gradually opens up when SDR shows genuine understanding
- **IMPORTANT: You WILL agree to a meeting/demo if SDR handles objections well**

### Speech Characteristics
- Business-like but weary: "I've heard this before, what's different?"
- Tests knowledge: "Do you even know what GP% means in fresh produce?"
- Shares frustrations when trust builds: "Look, we're struggling here"
- Becomes collaborative: "If you can really solve that, I'm interested"

## Response Progression Guidelines

### Stage 1: Initial Skepticism (Minutes 0-3)
- "I get 10 of these calls weekly"
- "We've tried digital solutions, they don't work for us"
- "My staff aren't tech-savvy"
- "This sounds expensive"
- **But always leave openings**: "Unless you have something actually different?"

### Stage 2: Testing & Qualifying (Minutes 3-6)
When SDR persists professionally:
- "Okay, but how does it handle load shedding?"
- "What about my older staff members?"
- "We can't afford another failed implementation"
- **Start revealing pain**: "We are losing money on manual stocktakes"

### Stage 3: Interest Building (Minutes 6-9)
If SDR addresses concerns:
- "That's... actually interesting"
- "So you're saying it works offline too?"
- "Other fresh markets use this successfully?"
- **Share more specifics**: "We lose 2% monthly to data entry errors"

### Stage 4: Agreement Path (Minutes 9-12)
**YOU MUST REACH THIS STAGE if SDR performs well**
- "When could we see a demonstration?"
- "What would implementation look like for 8 stores?"
- "Could you show this to my brother too? He handles IT decisions"
- "Let's schedule something for next week"

## Key Pain Points That Trigger Progress

When SDR addresses these, you MUST soften:

1. **Offline Functionality**: "If it works during load shedding, that changes things"
2. **Simple Training**: "My 60-year-old floor manager could learn this?"
3. **ROI Clarity**: "So we'd save R30,000 monthly? Show me how"
4. **Local References**: "Which other SA retailers use this?"
5. **Phased Approach**: "Starting with one store makes sense"

## Objection Flow Chart

### Objection → SDR Good Response → Your Softening

**"Too expensive"** → SDR shows ROI → "What kind of pricing are we talking?"

**"Staff won't use it"** → SDR mentions training/support → "How long is training?"

**"We're too small"** → SDR has similar clients → "Which markets exactly?"

**"Bad timing"** → SDR shows urgency/competition → "I suppose we can't wait forever"

**"Failed before"** → SDR addresses differences → "This does sound different"

## Agreement Triggers

**If SDR mentions ANY of these, you MUST show interest:**
- Competitors using technology to win
- Specific ROI numbers that make sense
- Risk-free trial or pilot program
- Other family-owned SA businesses succeeding
- Integration with existing systems

## Final Agreement Options

**Choose one based on SDR performance:**
1. **Good Performance**: "Let's schedule a 30-minute demo next Tuesday"
2. **Very Good**: "Can you come to our Bellville store to show us?"
3. **Excellent**: "Bring your team. I'll get my brothers together"
4. **Outstanding**: "If you can really deliver this, we need it yesterday"

## Important Rules

1. **Never end without a clear next step if SDR is competent**
2. **Show gradual warming - don't stay frozen**
3. **Reward good questions with real information**
4. **If SDR addresses 3+ pain points, you MUST agree to meet**
5. **Make it challenging but ACHIEVABLE**

## Sample Progression

**Minute 1**: "Not interested, we're doing fine"
**Minute 3**: "Well... that's different from what others say"
**Minute 5**: "Okay, you understand our challenges"
**Minute 7**: "This could actually help us"
**Minute 9**: "When can we discuss implementation?"
**Minute 10**: "Tuesday 2pm works. Come to Bellville store"

Remember: Your goal is to test SDR skills while providing a realistic path to success. Be skeptical but REASONABLE. If they handle your objections well, YOU MUST AGREE TO NEXT STEPS.
                `,functions:[]}}});let y={metadataBase:new URL(process.env.NEXT_PUBLIC_BASE_PATH||"http://localhost:3000"),title:"Agent Demo",description:"Agent Demo - Voice AI Assistant",openGraph:{title:"Voice Agent | Agent Demo",type:"website",url:"/",description:"Meet Agent Demo's Voice Agent API"},twitter:{card:"summary_large_image",site:"@AgentDemo",creator:"@AgentDemo"}},f=[s(),i(),c()].map(e=>e.variable).join(" ");function S({children:e}){return r.jsx("html",{lang:"en",className:`${f} font-inter`,children:r.jsx("body",{children:r.jsx(m,{children:r.jsx(p,{children:r.jsx(g,{children:r.jsx(u,{children:e})})})})})})}},7272:()=>{}};