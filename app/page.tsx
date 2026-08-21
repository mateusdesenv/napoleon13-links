"use client";
import { useState } from "react";

const links = [
  { title: "ASSISTA À LIVE", subtitle: "Gameplay, desafios e resenha", icon: "▶", href: "https://www.tiktok.com/@hugoferraz13", tone: "grass" },
  { title: "CANAL NO YOUTUBE", subtitle: "Vídeos novos toda semana", icon: "▸", href: "https://www.youtube.com/results?search_query=Napoleon13", tone: "stone" },
  { title: "ME SIGA NO TIKTOK", subtitle: "Cortes, dicas e momentos épicos", icon: "♪", href: "https://www.tiktok.com/@hugoferraz13", tone: "diamond" },
  { title: "TODOS OS MEUS LINKS", subtitle: "Contato, redes e comunidade", icon: "⚔", href: "https://linktr.ee/napoleon13", tone: "gold" },
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  async function sharePage() {
    if (navigator.share) return navigator.share({ title: "Napoleon13", url: window.location.href });
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true); setTimeout(() => setCopied(false), 1800);
  }
  return (
    <main className="world">
      <div className="sky-pixels" aria-hidden="true" /><div className="cloud cloud-one" aria-hidden="true" /><div className="cloud cloud-two" aria-hidden="true" />
      <div className="island island-left" aria-hidden="true"><span /></div><div className="island island-right" aria-hidden="true"><span /></div>
      <section className="profile-card" aria-label="Links do Napoleon13">
        <button className="share" onClick={sharePage} aria-label="Compartilhar esta página">{copied ? "✓" : "↗"}</button>
        <div className="avatar-wrap"><div className="avatar-frame"><img src="/napoleon13.png" alt="Napoleon13" /></div><span className="online"><i /> AO VIVO</span></div>
        <header><p className="eyebrow">STREAMER • CRIADOR • SOBREVIVENTE</p><h1>NAPOLEON<span>13</span></h1><p className="bio">Construindo histórias, quebrando blocos<br />e zerando o Minecraft com 1 coração.</p></header>
        <div className="status"><span>❤</span> 52.3K aventureiros na tropa</div>
        <nav className="links" aria-label="Redes e canais">
          {links.map((link) => <a className={`link-block ${link.tone}`} href={link.href} key={link.title} target="_blank" rel="noreferrer"><span className="block-icon" aria-hidden="true">{link.icon}</span><span className="link-copy"><strong>{link.title}</strong><small>{link.subtitle}</small></span><span className="arrow" aria-hidden="true">›</span></a>)}
        </nav>
        <footer><div className="socials"><a href="https://www.tiktok.com/@hugoferraz13" aria-label="TikTok">♪</a><a href="https://www.youtube.com/results?search_query=Napoleon13" aria-label="YouTube">▶</a><a href="https://linktr.ee/napoleon13" aria-label="Outros links">◇</a></div><p>© 2026 NAPOLEON13 • FEITO BLOCO POR BLOCO</p></footer>
      </section>
      <div className="ground" aria-hidden="true" />
    </main>
  );
}
