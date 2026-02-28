# ajaygunalan.github.io

Personal site for Ajay Gunalan — served by **Obsidian Publish** at [ajaygunalan.com](https://ajaygunalan.com).

## This is an Obsidian vault

- The working directory is an Obsidian vault (`ajaygunalan.github.io`)
- Use Obsidian CLI (`obsidian`) for all vault interactions
- Obsidian skills are in `.claude/skills/` (from [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills))

## Publishing

Publish changes via Obsidian Publish, NOT git push:

```bash
obsidian publish:status          # Check what needs publishing
obsidian publish:add changed     # Publish all changed files
obsidian publish:add path="X"    # Publish a specific file
```

## Git

- GitHub repo: https://github.com/ajaygunalan/ajaygunalan.github.io
- GitHub Pages has custom domain `ajaygunalan.com` set (redirects to Obsidian Publish)
- Git is for version control only — publishing is via Obsidian Publish
