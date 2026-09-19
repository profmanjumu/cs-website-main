'use client'

import { useEffect, useRef } from 'react'

const FILL = 'rgba(62, 29, 150, 0.22)'
const STROKE = 'rgba(62, 29, 150, 0.30)'
const RADIUS = 7
const EDGE_WIDTH = 1.2
const INSET = 24
const BASE_Y = 26
const LEVEL_Y = 30
const EASE = 0.07
const FADE_OUT = 0.03
const FADE_IN = 0.06
const SPAWN_LIFT = 28
const OP_MS = 1900
const KEY_MIN = 1
const KEY_MAX = 40

type BstNode = {
  key: number
  left: BstNode | null
  right: BstNode | null
}

type Visual = {
  key: number
  x: number
  y: number
  tx: number
  ty: number
  alpha: number
  dying: boolean
}

function insertNode(root: BstNode | null, key: number): BstNode {
  if (!root) return { key, left: null, right: null }
  if (key < root.key) root.left = insertNode(root.left, key)
  else if (key > root.key) root.right = insertNode(root.right, key)
  return root
}

function minNode(node: BstNode): BstNode {
  let current = node
  while (current.left) current = current.left
  return current
}

function deleteNode(root: BstNode | null, key: number): BstNode | null {
  if (!root) return null
  if (key < root.key) {
    root.left = deleteNode(root.left, key)
    return root
  }
  if (key > root.key) {
    root.right = deleteNode(root.right, key)
    return root
  }
  if (!root.left) return root.right
  if (!root.right) return root.left
  const successor = minNode(root.right)
  root.key = successor.key
  root.right = deleteNode(root.right, successor.key)
  return root
}

function collectKeys(root: BstNode | null, keys: number[] = []): number[] {
  if (!root) return keys
  keys.push(root.key)
  collectKeys(root.left, keys)
  collectKeys(root.right, keys)
  return keys
}

function collectEdges(root: BstNode | null, edges: [number, number][] = []) {
  if (!root) return edges
  if (root.left) {
    edges.push([root.key, root.left.key])
    collectEdges(root.left, edges)
  }
  if (root.right) {
    edges.push([root.key, root.right.key])
    collectEdges(root.right, edges)
  }
  return edges
}

function inorderLayout(
  root: BstNode | null,
  width: number
): { key: number; x: number; y: number }[] {
  const ordered: { key: number; depth: number }[] = []
  const walk = (node: BstNode | null, depth: number) => {
    if (!node) return
    walk(node.left, depth + 1)
    ordered.push({ key: node.key, depth })
    walk(node.right, depth + 1)
  }
  walk(root, 0)
  const count = ordered.length
  const span = Math.max(width - INSET * 2, 0)
  return ordered.map((item, index) => ({
    key: item.key,
    x: count <= 1 ? width / 2 : INSET + (index / (count - 1)) * span,
    y: BASE_Y + item.depth * LEVEL_Y,
  }))
}

function unusedKey(used: number[]): number {
  const taken = new Set(used)
  const open: number[] = []
  for (let key = KEY_MIN; key <= KEY_MAX; key += 1) {
    if (!taken.has(key)) open.push(key)
  }
  if (open.length === 0) {
    let extra = KEY_MAX + 1
    while (taken.has(extra)) extra += 1
    return extra
  }
  return open[Math.floor(Math.random() * open.length)]
}

function seedTree(): BstNode {
  const keys = [20, 10, 30, 5, 15, 25, 35]
  return keys.reduce<BstNode | null>((root, key) => insertNode(root, key), null)!
}

export function BstCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let root: BstNode | null = seedTree()
    let visuals: Visual[] = []
    let running = true
    let raf = 0
    let timer = 0
    let width = 0
    let height = 0

    const visualMap = () => new Map(visuals.map((node) => [node.key, node]))

    const layout = () => {
      const targets = inorderLayout(root, width)
      const live = new Set(targets.map((item) => item.key))
      const byKey = visualMap()
      const seeding = visuals.length === 0

      for (const target of targets) {
        const existing = byKey.get(target.key)
        if (existing && !existing.dying) {
          existing.tx = target.x
          existing.ty = target.y
        } else {
          visuals.push({
            key: target.key,
            x: target.x,
            y: seeding ? target.y : target.y - SPAWN_LIFT,
            tx: target.x,
            ty: target.y,
            alpha: seeding ? 1 : 0,
            dying: false,
          })
        }
      }

      for (const visual of visuals) {
        if (!live.has(visual.key)) visual.dying = true
      }
    }

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      width = bounds.width
      height = bounds.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.round(width * dpr))
      canvas.height = Math.max(1, Math.round(height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      layout()
      draw()
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const byKey = visualMap()
      ctx.lineWidth = EDGE_WIDTH
      ctx.strokeStyle = STROKE
      ctx.fillStyle = FILL

      for (const [fromKey, toKey] of collectEdges(root)) {
        const from = byKey.get(fromKey)
        const to = byKey.get(toKey)
        if (!from || !to || from.dying || to.dying) continue
        ctx.globalAlpha = Math.min(from.alpha, to.alpha)
        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.stroke()
      }

      for (const visual of visuals) {
        ctx.globalAlpha = visual.alpha
        ctx.beginPath()
        ctx.arc(visual.x, visual.y, RADIUS, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()
      }
      ctx.globalAlpha = 1
    }

    const operate = () => {
      const keys = collectKeys(root)
      const count = keys.length
      if (count > 12 || (count > 6 && Math.random() < 0.45)) {
        const key = keys[Math.floor(Math.random() * keys.length)]
        root = deleteNode(root, key)
      } else {
        root = insertNode(root, unusedKey(keys))
      }
      layout()
    }

    const tick = () => {
      raf = window.requestAnimationFrame(tick)
      if (!running) return
      for (const visual of visuals) {
        visual.x += (visual.tx - visual.x) * EASE
        visual.y += (visual.ty - visual.y) * EASE
        if (visual.dying) visual.alpha = Math.max(0, visual.alpha - FADE_OUT)
        else visual.alpha = Math.min(1, visual.alpha + FADE_IN)
      }
      visuals = visuals.filter((visual) => !(visual.dying && visual.alpha <= 0))
      draw()
    }

    resize()

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      for (const visual of visuals) {
        visual.x = visual.tx
        visual.y = visual.ty
        visual.alpha = 1
      }
      draw()
      const observer = new ResizeObserver(resize)
      observer.observe(canvas)
      window.addEventListener('resize', resize)
      return () => {
        observer.disconnect()
        window.removeEventListener('resize', resize)
      }
    }

    running = true
    const onVisibility = () => {
      running = !document.hidden
    }
    document.addEventListener('visibilitychange', onVisibility)
    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting
    })
    io.observe(canvas.parentElement ?? canvas)

    raf = window.requestAnimationFrame(tick)
    timer = window.setInterval(() => {
      if (!running) return
      operate()
    }, OP_MS)

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    window.addEventListener('resize', resize)

    return () => {
      window.cancelAnimationFrame(raf)
      window.clearInterval(timer)
      observer.disconnect()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="home-bst"
      aria-hidden="true"
    />
  )
}
