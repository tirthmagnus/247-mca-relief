"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Clock3, FileText, Layers3, MessageSquareWarning, Quote, ShieldCheck, Siren, WalletCards, Zap } from "lucide-react";
import LeadCapture from "@/components/LeadCapture";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";
import s from "./page.module.css";

const steps=[
  ["01","Request","Share your name and phone. Add business details only if you want to."],
  ["02","Review","A team member reviews the payment structure, active positions, and immediate operating concerns."],
  ["03","Callback","You speak with a real person about what is happening and what information may matter next."],
  ["04","Next steps","You decide whether any available path makes sense for the business."],
];

const stories=[
  {name:"Restaurant operator",role:"Hospitality · sample review",image:"https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1200",quote:"I needed a fast way to explain what the daily withdrawals were doing to payroll and inventory without filling out another long application."},
  {name:"Construction owner",role:"Construction · sample review",image:"https://images.pexels.com/photos/8961001/pexels-photo-8961001.jpeg?auto=compress&cs=tinysrgb&w=1200",quote:"The first conversation stayed focused on the business and the numbers. It was direct without feeling like another financing pitch."},
  {name:"Retail operator",role:"Retail · sample review",image:"https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1200",quote:"I liked that I could start with only my contact details and explain the rest to a person instead of forcing everything into a form."},
];

const resources=[
  ["DAILY WITHDRAWALS","What to review when MCA debits are interfering with payroll","A practical checklist for business owners who need to see the immediate cash-flow picture clearly."],
  ["STACKED ADVANCES","Why multiple MCAs should be reviewed together","Looking at each position separately can hide the real weekly burden on the business."],
  ["BEFORE THE CALL","Documents worth gathering before a business debt review","Statements, agreements, balances, notices, and payment schedules can make the first conversation more useful."],
];

export default function Home(){
  const [open,setOpen]=useState(false);
  const [story,setStory]=useState(0);
  const active=stories[story];
  const move=(dir:number)=>setStory((story+dir+stories.length)%stories.length);
  return <main className={s.site}>
    <header className={s.nav}><a className={s.brand} href="#top"><b>24/7</b> MCA RELIEF</a><nav className={s.navLinks}><a href="#situations">Situations</a><a href="#process">How it works</a><a href="#stories">Stories</a><a href="#resources">Resources</a></nav><button className={s.navCta} onClick={()=>setOpen(true)}>Request a callback</button></header>

    <section id="top" className={s.hero}><div className={`${s.wrap} ${s.heroGrid}`}><div className={s.heroCopy}><span className={s.eyebrow}><Siren/> HELP WITH MCA PAYMENT DIFFICULTY</span><h1>When daily withdrawals disrupt the business, act early.</h1><p>A fast, confidential first step for business owners dealing with merchant cash advance payments that are colliding with payroll, inventory, taxes, rent, or vendors.</p><div className={s.heroActions}><button onClick={()=>setOpen(true)}>Get help with my MCA <ArrowRight/></button><a href="#process">See how it works</a></div><div className={s.trust}><span><Check/>Name + phone only required</span><span><ShieldCheck/>Confidential intake</span><span><Check/>Business-purpose inquiries</span></div></div><div className={s.formWrap}><LeadCapture title="Request a callback" button="Send my request" source="hero"/></div></div><div className={s.signalBand}><div><strong>Daily debits</strong><span>See what is hitting the account and when.</span></div><div><strong>Multiple positions</strong><span>Understand the combined weekly draw.</span></div><div><strong>Operating cash</strong><span>Keep payroll, inventory, and vendors visible.</span></div><div><strong>Next action</strong><span>Move from reaction to an organized review.</span></div></div></section>

    <section className={s.contentSection}><div className={`${s.wrap} ${s.contentGrid}`}><div><span className={s.eyebrow}>WHAT TO LOOK AT FIRST</span><h2>Start with the operating reality, not another funding offer.</h2><p>If MCA withdrawals are arriving before payroll clears, inventory is purchased, or key vendors are paid, the immediate question is not simply how much is owed. It is how the payment schedule is interacting with the business week.</p><p>That means reviewing debit frequency, stacked obligations, average weekly revenue, major fixed expenses, and any notices or collection activity together. A clearer picture can help the owner prepare for a more useful conversation about available options.</p></div><div className={s.contentCallout}><strong>USEFUL BEFORE YOU SPEAK WITH SOMEONE</strong><p>Recent bank statements, MCA agreements, estimated balances, payment schedules, and any notices received. These are not required to submit the initial form.</p></div></div></section>

    <section id="situations" className={s.situations}><div className={s.wrap}><div className={s.sectionHead}><span>COMMON BUSINESS SITUATIONS</span><h2>Recognize the issue before the next withdrawal lands.</h2><p>These are operating symptoms business owners often notice when MCA payments no longer fit the current cash-flow cycle.</p></div><div className={s.situationGrid}><article><Zap/><h3>Daily ACH squeeze</h3><p>Withdrawals are landing before payroll, inventory, taxes, or essential vendors are funded.</p></article><article><Layers3/><h3>Multiple advances</h3><p>Several positions are pulling from the same revenue and hiding the true weekly burden.</p></article><article><WalletCards/><h3>Revenue mismatch</h3><p>Sales changed, but the withdrawal cadence stayed the same.</p></article><article><MessageSquareWarning/><h3>Escalating contact</h3><p>Calls and notices are consuming time that should be spent running the business.</p></article></div></div></section>

    <section id="process" className={s.process}><div className={s.wrap}><div className={s.processIntro}><span>HOW IT WORKS</span><h2>Four clear stages, from request to next step.</h2><p>No vague circles and no filler. The visitor should immediately understand what happens after submitting the form.</p></div><div className={s.tracker}>{steps.map((x,i)=><article key={x[0]} className={s.step}><div className={s.stepNode}>{i+1}</div><div className={s.stepCard}><small>{x[0]}</small><h3>{x[1]}</h3><p>{x[2]}</p></div></article>)}</div></div></section>

    <section id="stories" className={s.stories}><div className={s.wrap}><div className={s.sectionHead}><span>BUSINESS-OWNER STORIES</span><h2>Different businesses, different operating realities.</h2><p>Sample staging content only. Replace with client-approved testimonials before production.</p></div><div className={s.storyShell}><div className={s.storyMain}><img src={active.image} alt={active.name}/><div className={s.storyCopy}><Quote/><p>“{active.quote}”</p><strong>{active.name}</strong><span>{active.role}</span></div></div><div className={s.storyControls}><div className={s.arrows}><button onClick={()=>move(-1)} aria-label="Previous story"><ArrowLeft size={18}/></button><button onClick={()=>move(1)} aria-label="Next story"><ArrowRight size={18}/></button></div><div className={s.dots}>{stories.map((_,i)=><button aria-label={`Story ${i+1}`} key={i} onClick={()=>setStory(i)} className={`${s.dot} ${i===story?s.dotActive:""}`}/>)}</div></div><div className={s.storyStrip}>{stories.map((r,i)=><button key={r.name} className={s.storyThumb} onClick={()=>setStory(i)}><img src={r.image} alt=""/><strong>{r.name}</strong></button>)}</div></div></div></section>

    <section id="resources" className={s.resources}><div className={s.wrap}><div className={s.sectionHead}><span>RESOURCE CENTER</span><h2>Useful answers before someone submits a form.</h2><p>Educational content gives the site substance and helps visitors understand the situation before speaking with the team.</p></div><div className={s.resourceGrid}>{resources.map(r=><a href="/insights" key={r[1]}><span>{r[0]}</span><FileText/><h3>{r[1]}</h3><p>{r[2]}</p></a>)}</div></div></section>

    <section className={s.close}><div className={`${s.wrap} ${s.closeGrid}`}><div><h2>Need to talk through an MCA situation?</h2><p>Start with your name and phone. A real person can handle the rest of the conversation.</p></div><button onClick={()=>setOpen(true)}>Request a callback</button></div></section>
    <Footer/><ChatWidget/>{open&&<div className={s.modalBack} onClick={()=>setOpen(false)}><div className={s.modal} onClick={e=>e.stopPropagation()}><button className={s.modalX} onClick={()=>setOpen(false)}>×</button><LeadCapture title="Request a private callback" button="Send my request" source="modal"/></div></div>}
  </main>
}
