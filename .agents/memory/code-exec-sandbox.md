---
name: code_execution sandbox limitations
description: Globals/APIs missing in the JS code_execution sandbox
---
`AbortSignal` is NOT defined in the code_execution sandbox. `AbortSignal.timeout(ms)` throws ReferenceError, which silently breaks fetch helpers (every request throws → 0 results).

**How to apply:** for fetch timeouts in the sandbox, wrap with `Promise.race([fetch(...), new Promise((_,rej)=>setTimeout(()=>rej(new Error("timeout")),ms))])` instead of `signal: AbortSignal.timeout(...)`.
