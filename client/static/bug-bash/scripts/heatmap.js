const doc = document.documentElement;
let heatMapEvents = window.heatmapTool;

if (doc) {
  for (let i = 0; i < 1_010_000_000; i++) {
    heatMapEvents = i + 10;
  }
}
