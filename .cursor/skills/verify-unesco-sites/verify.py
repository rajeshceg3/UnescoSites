#!/usr/bin/env python3
"""Purpose-fit verification for UnescoSites (Warm heritage journey).

Static build plus the repo's own warm-design browser suite in real
Chrome at four widths. Exit 0 and FAILURES=0 mean green.
"""
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile

REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '..'))
CHROME = os.environ.get('CHROME_BIN', '/usr/bin/google-chrome')

checks = []
failures = []


def record(name, ok, detail=''):
    checks.append({'name': name, 'ok': bool(ok), 'detail': detail})
    print(('PASS' if ok else 'FAIL') + ' ' + name + (' :: ' + detail if detail else ''))
    if not ok:
        failures.append(name)


def main():
    record('doctor: node on PATH', shutil.which('node') is not None, shutil.which('node') or 'not found')
    record('doctor: chrome available', os.path.exists(CHROME), CHROME)
    if failures:
        return finish()

    if not os.path.isdir(os.path.join(REPO_ROOT, 'node_modules', 'playwright')):
        npm = shutil.which('npm')
        record('doctor: npm on PATH', npm is not None, npm or 'not found')
        if not npm:
            return finish()
        ci = subprocess.run([npm, 'install', '--no-audit', '--no-fund'], cwd=REPO_ROOT,
                            capture_output=True, text=True, timeout=900)
        record('npm install (playwright)', ci.returncode == 0, ci.stderr.strip()[-200:])
        if ci.returncode != 0:
            return finish()

    build = subprocess.run(['node', 'scripts/build-static.mjs'], cwd=REPO_ROOT,
                           capture_output=True, text=True, timeout=300)
    record('static build green', build.returncode == 0 and os.path.isfile(os.path.join(REPO_ROOT, 'dist', 'index.html')),
           (build.stdout.strip().splitlines() or [''])[-1] if build.returncode == 0
           else (build.stdout + build.stderr).strip()[-200:])

    suite = subprocess.run(['node', 'tests/warm-design.mjs'], cwd=REPO_ROOT,
                           capture_output=True, text=True, timeout=900)
    passes = re.findall(r'PASS (\d+)', suite.stdout)
    record('warm-design browser suite green', suite.returncode == 0 and len(passes) == 4,
           ('widths %s pass' % ', '.join(passes)) if passes else (suite.stdout + suite.stderr).strip()[-200:])
    return finish()


def finish():
    evidence_dir = tempfile.mkdtemp(prefix='verify-unesco-sites-')
    with open(os.path.join(evidence_dir, 'evidence.json'), 'w') as f:
        json.dump({'repo': 'UnescoSites', 'checks': checks, 'failures': failures}, f, indent=2)
    print('EVIDENCE_DIR=' + evidence_dir)
    print('FAILURES=%d' % len(failures))
    return 0 if not failures else 1


if __name__ == '__main__':
    sys.exit(main())
