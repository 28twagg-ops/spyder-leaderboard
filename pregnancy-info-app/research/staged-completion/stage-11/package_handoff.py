#!/usr/bin/env python3
"""Create a handoff ZIP from a local Git checkout; run from pregnancy-info-app. No network."""
import subprocess, pathlib, sys
out=pathlib.Path(sys.argv[1] if len(sys.argv)>1 else "../everwell-research-handoff.zip").resolve()
prefix=subprocess.check_output(["git","rev-parse","--show-prefix"],text=True).strip()
if prefix!="pregnancy-info-app/": raise SystemExit("Run from pregnancy-info-app/ in the repository")
root=subprocess.check_output(["git","rev-parse","--show-toplevel"],text=True).strip()
subprocess.run(["git","-C",root,"archive","--format=zip","--output",str(out),"HEAD","pregnancy-info-app"],check=True)
print(out)
