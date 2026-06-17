import { describe, it, expect } from 'vitest'
import { services, getService } from '../data/services.js'
import { posts, getPost } from '../data/blog.js'
import { groups, tiers, addons } from '../data/local.js'

const hasDash = (s) => /[—–]/.test(s)

// Walk every string value in an object/array tree.
function collectStrings(node, out = []) {
  if (typeof node === 'string') out.push(node)
  else if (Array.isArray(node)) node.forEach((n) => collectStrings(n, out))
  else if (node && typeof node === 'object') Object.values(node).forEach((n) => collectStrings(n, out))
  return out
}

describe('services data', () => {
  it('has the six Captive8 solutions', () => {
    expect(services).toHaveLength(6)
  })
  it('every service has the required fields', () => {
    for (const s of services) {
      expect(s.slug).toBeTruthy()
      expect(s.name).toBeTruthy()
      expect(s.short).toBeTruthy()
      expect(s.icon).toMatch(/^\/images\//)
      expect(Array.isArray(s.capabilities)).toBe(true)
      expect(s.features.length).toBeGreaterThan(0)
    }
  })
  it('slugs are unique', () => {
    const slugs = services.map((s) => s.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })
  it('getService resolves and rejects correctly', () => {
    expect(getService('seo').name).toBe('SEO')
    expect(getService('nope')).toBeUndefined()
  })
})

describe('blog data', () => {
  it('has all eleven posts', () => {
    expect(posts).toHaveLength(11)
  })
  it('every post is well formed', () => {
    for (const p of posts) {
      expect(p.slug).toBeTruthy()
      expect(p.title).toBeTruthy()
      expect(p.excerpt).toBeTruthy()
      expect(p.image).toMatch(/^\/images\//)
      expect(Array.isArray(p.body)).toBe(true)
      expect(p.body.length).toBeGreaterThan(3)
      for (const b of p.body) {
        expect(['p', 'h2', 'pull', 'ul']).toContain(b.type)
        if (b.type === 'ul') expect(Array.isArray(b.items)).toBe(true)
        else expect(typeof b.text).toBe('string')
      }
    }
  })
  it('slugs are unique', () => {
    const slugs = posts.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })
  it('getPost resolves and rejects correctly', () => {
    expect(getPost('stop-chasing-lambos')).toBeTruthy()
    expect(getPost('missing')).toBeUndefined()
  })
})

describe('local influence data', () => {
  it('has three pricing tiers with prices', () => {
    expect(tiers).toHaveLength(3)
    for (const t of tiers) expect(t.price).toMatch(/^\d+$/)
    expect(tiers.filter((t) => t.popular)).toHaveLength(1)
  })
  it('has twelve community groups, each linking to Facebook', () => {
    expect(groups).toHaveLength(12)
    for (const g of groups) {
      expect(g.url).toMatch(/facebook\.com/)
      expect(g.img).toMatch(/^\/images\//)
      expect(g.members).toBeTruthy()
    }
  })
  it('has add-ons', () => {
    expect(addons.length).toBeGreaterThan(0)
  })
})

describe('house style: no em or en dashes anywhere in copy', () => {
  it('services copy is dash-free', () => {
    expect(collectStrings(services).filter(hasDash)).toEqual([])
  })
  it('blog copy is dash-free', () => {
    expect(collectStrings(posts).filter(hasDash)).toEqual([])
  })
  it('local copy is dash-free', () => {
    expect(collectStrings([groups, tiers, addons]).filter(hasDash)).toEqual([])
  })
})
