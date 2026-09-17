---
name: GitHub source publishing
description: GitHub App git remotes may reject CLI pushes; the GitHub API connector can publish the full tracked tree instead.
---

When publishing a complete source tree to an empty GitHub repository, use the connected GitHub API rather than assuming the Git CLI is authenticated. An empty repository may require a small bootstrap commit through the Contents API before Git Data API blobs and trees can be created.

**Why:** The GitHub App connection can report healthy while HTTPS and SSH git pushes still fail, while the authenticated GitHub API remains usable.

**How to apply:** Prefer the connected GitHub API proxy for repository writes; create blobs, build the tree incrementally when large, create one commit, and update the target branch only after confirming it is empty or contains the expected bootstrap commit.