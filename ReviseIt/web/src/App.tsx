import React, { useState } from 'react';

const API = 'http://localhost:4000';

export default function App() {
  const [email, setEmail] = useState('dev@example.com');
  const [deck, setDeck] = useState<any>(null);
  const [item, setItem] = useState<any>(null);
  const [log, setLog] = useState<string>('');

  async function createDeck() {
    const res = await fetch(API + '/decks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userEmail: email, name: 'Estudos' })
    });
    const data = await res.json();
    setDeck(data);
    setLog(l => l + "\nDeck criado: " + JSON.stringify(data, null, 2));
  }

  async function createItem() {
    if (!deck) return alert('crie um deck primeiro');
    const res = await fetch(API + '/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ deckId: deck.id, title: 'Árvore AVL', url: 'https://example.com/avl' })
    });
    const data = await res.json();
    setItem(data);
    setLog(l => l + "\nItem criado: " + JSON.stringify(data, null, 2));
  }

  async function review(grade: number) {
    if (!item) return alert('crie um item primeiro');
    const res = await fetch(API + '/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userEmail: email, itemId: item.id, grade, pushCalendar: false })
    });
    const data = await res.json();
    setLog(l => l + "\nReview: " + JSON.stringify(data, null, 2));
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20, maxWidth: 800 }}>
      <h1>Revise.it — Web utilitário</h1>
      <p>Pequena UI para exercitar a API.</p>
      <label>Email:&nbsp;
        <input value={email} onChange={e=>setEmail(e.target.value)} />
      </label>

      <div style={{ marginTop: 16 }}>
        <button onClick={createDeck}>Criar Deck</button>
        <button onClick={createItem} style={{ marginLeft: 8 }}>Criar Item</button>
        <span style={{ marginLeft: 16 }}>
          Review: 
          {[0,1,2,3,4,5].map(g => (
            <button key={g} onClick={()=>review(g)} style={{ marginLeft: 4 }}>{g}</button>
          ))}
        </span>
      </div>

      <pre style={{ background: '#111', color: '#0f0', padding: 12, marginTop: 24, whiteSpace: 'pre-wrap' }}>
        {log || 'Logs aparecerão aqui...'}
      </pre>
    </div>
  );
}
