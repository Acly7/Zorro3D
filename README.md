# Labo AR — Zorro

1. Abre esta carpeta en VS Code.
2. Ejecuta `npm install` y luego `npm run dev`.
3. Abre `http://localhost:5173`, concede acceso a la cámara y muestra el marcador Hiro completo.
4. «Ver personaje» alterna zorro/cubo. «Tamaño» aumenta progresivamente el tamaño. «Clics» cuenta ambos botones.

El modelo Fox.glb se normaliza al cargar para que no resulte gigantesco. El salto es vertical y está anclado al centro del marcador. Si el render aparece lejos del marcador aun con la escena centrada, revisa que no se esté escalando la página (zoom del navegador al 100 %), que el marcador esté completamente visible y que la cámara no esté en modo espejo o con recorte de imagen. El seguimiento exacto depende de la cámara, navegador y AR.js; no se puede garantizar sin probarlo en ese dispositivo.
