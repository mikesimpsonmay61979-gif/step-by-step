export function buildSrcDoc(html: string, css: string, js: string): string {
  const safeCss = css.replace(/<\/style/gi, "");
  const safeHtml = html.replace(/<\/(?:body|html)/gi, "");
  const payload = JSON.stringify(js).replace(/</g, "\\u003c");
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>
  body { margin: 0; }
  ${safeCss}
</style>
</head>
<body>
${safeHtml}
<p id="__err" style="color:#7c2d12;font-family:sans-serif;font-size:20px;padding:12px;"></p>
<script>
try {
  const run = new Function(${payload});
  run();
} catch (err) {
  const box = document.getElementById("__err");
  if (box) box.textContent = "This code hit a snag: " + (err && err.message ? err.message : "something is not quite right");
}
</script>
</body>
</html>`;
}
