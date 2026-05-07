
import os

filepath = "/home/javier/Documentos/GitHub/bootcamp26-lp/src/components/FinalCTA.astro"
with open(filepath, 'r') as f:
    content = f.read()

target = """      <Button href={`mailto:${t.site.contactEmail}`} variant="ghost" size="lg">
        {t.ui.iHaveAQuestion}
      </Button>"""

replacement = """      <Button href={`mailto:${t.site.contactEmail}`} variant="ghost" size="lg">
        {t.ui.iHaveAQuestion}
      </Button>
      <Button href={t.ecosystem.parent.url} external variant="ghost" size="lg">
        {t.ecosystem.parent.url.replace("https://", "")}
      </Button>"""

if target in content:
    new_content = content.replace(target, replacement)
    with open(filepath, 'w') as f:
        f.write(new_content)
    print("Successfully updated FinalCTA.astro")
else:
    print("Target not found in FinalCTA.astro")
