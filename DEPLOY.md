# How I deploy jolaandco.com — THE one way

> Golden rule: **GitHub `main` = the live website.**
> Vercel watches the GitHub repo. Every push to `main` auto-builds and deploys in ~2 minutes.
> I never run `npm run build` for deployment. I never upload files anywhere.

## The everyday flow (VS Code, always the same)

1. **Edit** files, save (`Ctrl+S`).
2. **Preview locally** (optional but smart): in the terminal, `npm start` → check http://localhost:3000 → `Ctrl+C` to stop.
3. **Commit & push** — Source Control panel (the branch icon in the left sidebar, `Ctrl+Shift+G`):
   - Hover over changed files → click **+** to stage them
   - Type a short message describing the change (e.g. "Add Excel Rescue package")
   - Click **✓ Commit**
   - Click **Sync Changes** (this is the push)
4. **Verify**: after ~2 min, refresh www.jolaandco.com (hard refresh: `Ctrl+F5`).

That's it. Four steps, same every time.

## Terminal equivalent (same result, if I prefer typing)

```powershell
git add -A
git commit -m "describe the change"
git push
```

## Rules that prevent chaos

- **One editing place.** All edits happen locally in VS Code — never edit files directly on github.com. (If I ever do, run `git pull` in VS Code terminal BEFORE making local changes.)
- **Commit messages**: one short sentence, present tense, says what changed. Future me will thank present me.
- **Small commits** beat giant ones. Finished a coherent change? Commit it.

## When something's off

| Symptom | Fix |
|---|---|
| Live site not updating after push | Check vercel.com dashboard → jolaandco project → Deployments. A red ❌ means the build failed — open the log, the error names the file/line. |
| "Sync Changes" complains / rejected push | `git pull` first, then push again. |
| VS Code shows conflicts after pull | Open the conflicted file, VS Code shows "Accept Current / Incoming" buttons — pick the right version, save, commit. |
| Broke something on the live site | Vercel dashboard → Deployments → previous good deployment → "…" menu → **Instant Rollback**. Fix calmly, push again. |
