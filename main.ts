import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "Tell the charger I loved it. Tell the Wi-Fi I never really knew it. And tell my owner I died doing what I loved: playing one more video at full brightness.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
