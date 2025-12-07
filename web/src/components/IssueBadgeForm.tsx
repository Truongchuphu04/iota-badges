import React, { useState } from 'react'

type Props = {}

export default function IssueBadgeForm(_props: Props) {
  const [nodeUrl, setNodeUrl] = useState('https://api.testnet.shimmer.network')
  const [index, setIndex] = useState('iota-badge')
  const [payload, setPayload] = useState(JSON.stringify({ badge: 'Example Badge', level: 'gold' }, null, 2))
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    try {
      const body = {
        payload: {
          type: 2,
          index: btoa(index),
          data: btoa(payload),
        },
      }

      const res = await fetch(nodeUrl.replace(/\/+$/, '') + '/api/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      const text = await res.text()
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${text}`)
      setResult(text)
    } catch (err: any) {
      setResult(String(err.message || err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="issue-form" onSubmit={submit}>
      <label>
        Node URL
        <input value={nodeUrl} onChange={(e) => setNodeUrl(e.target.value)} />
      </label>
      <label>
        Index
        <input value={index} onChange={(e) => setIndex(e.target.value)} />
      </label>
      <label>
        Payload (JSON)
        <textarea value={payload} onChange={(e) => setPayload(e.target.value)} rows={6} />
      </label>
      <button type="submit" disabled={loading}>{loading ? 'Sending…' : 'Issue Badge'}</button>

      {result && (
        <pre className="result">{result}</pre>
      )}
    </form>
  )
}
