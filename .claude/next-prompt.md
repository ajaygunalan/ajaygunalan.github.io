# Next Session: Recreate GitHub repo to remove "generated from" tag

## Context
The repo `ajaygunalan/ajaygunalan.github.io` shows "generated from pmichaillat/hugo-website" because it was forked from a template. This can't be removed via API. The fix is to delete and recreate the repo.

The site `ajaygunalan.com` is served by Obsidian Publish via Cloudflare — completely independent of GitHub. Nothing will break except the `ajaygunalan.github.io` → `ajaygunalan.com` redirect temporarily.

## Steps (all CLI via `gh`)

### 1. Delete the old repo
```bash
gh repo delete ajaygunalan/ajaygunalan.github.io --yes
```

### 2. Create a fresh repo with the same name
```bash
gh repo create ajaygunalan/ajaygunalan.github.io --public --confirm
```

### 3. Update the remote and push
```bash
cd ~/ajaygunalan.github.io
git remote set-url origin https://github.com/ajaygunalan/ajaygunalan.github.io.git
git push -u origin main
```

### 4. Set repo description and homepage
```bash
gh api repos/ajaygunalan/ajaygunalan.github.io -X PATCH -f description="Personal site — ajaygunalan.com" -f homepage="https://ajaygunalan.com"
```

### 5. Re-enable GitHub Pages with custom domain (for the redirect)
```bash
gh api repos/ajaygunalan/ajaygunalan.github.io/pages -X POST -f source='{"branch":"main","path":"/"}' -f cname="ajaygunalan.com"
```
If that fails, do it via https://github.com/ajaygunalan/ajaygunalan.github.io/settings/pages — set Source to `main`, custom domain to `ajaygunalan.com`.

### 6. Verify
```bash
curl -sI https://ajaygunalan.github.io 2>&1 | head -5  # Should 301 to ajaygunalan.com
curl -sI https://ajaygunalan.com 2>&1 | head -5        # Should 200 from Obsidian Publish
```

### 7. Also commit the Compressive-OCT edit (done but uncommitted)
The file `projects/Compressive-OCT.md` was simplified (removed download bar, citation, condensed abstract into one paragraph) but not yet committed. Commit and push after the repo is recreated.
