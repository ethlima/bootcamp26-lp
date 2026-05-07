
import os

filepath = "/home/javier/Documentos/GitHub/bootcamp26-lp/src/components/Footer.astro"
with open(filepath, 'r') as f:
    content = f.read()

target = """        <a href={`mailto:${t.site.contactEmail}`} class="text-sm text-fg-muted hover:text-fg transition block mb-5">
          {t.site.contactEmail}
        </a>
        <div class="flex flex-wrap gap-3">"""

replacement = """        <a href={`mailto:${t.site.contactEmail}`} class="text-sm text-fg-muted hover:text-fg transition block mb-2">
          {t.site.contactEmail}
        </a>
        <a href={t.ecosystem.parent.url} target="_blank" rel="noopener" class="text-sm text-fg-muted hover:text-fg transition block mb-5">
          {t.ecosystem.parent.url.replace("https://", "")}
        </a>
        <div class="flex flex-wrap gap-3">"""

if target in content:
    new_content = content.replace(target, replacement)
    with open(filepath, 'w') as f:
        f.write(new_content)
    print("Successfully updated Footer.astro")
else:
    print("Target not found in Footer.astro")
    # Debug: show content around the area
    start = content.find("t.footer.contactLabel")
    if start != -1:
        print("Content around target:")
        print(content[start:start+200])
