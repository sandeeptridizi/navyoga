#!/usr/bin/env python3
import re

files = [
    '/tmp/sandbox/src/app/pages/Leads.tsx',
    '/tmp/sandbox/src/app/pages/Employees.tsx',
    '/tmp/sandbox/src/app/pages/Classes.tsx',
    '/tmp/sandbox/src/app/pages/Attendance.tsx',
    '/tmp/sandbox/src/app/pages/Financials.tsx'
]

for filepath in files:
    try:
        with open(filepath, 'r') as f:
            content = f.read()
        
        # Remove " required" attribute
        content = re.sub(r' required(?=\s|/>|>)', '', content)
        
        with open(filepath, 'w') as f:
            f.write(content)
        
        print(f"✓ Processed: {filepath}")
    except Exception as e:
        print(f"✗ Error processing {filepath}: {e}")

print("\nAll required attributes removed!")
