// ========================================================
// РЫБЫ — ОТРИСОВКА (общая для index.html и inventory.html)
// ========================================================

// === ОБЫЧНЫЕ ПАЛИТРЫ ===
const PALETTES = {
    pike:      { main: '#4a6b2a', dark: '#2a3f1a', light: '#6b8a4a', belly: '#8fa860', fin: '#3a5020', eye: '#ffd700', pupil: '#000', gill: '#2a3f1a', spot: '#1a2810', stripe: '#2a3f1a' },
    zander:    { main: '#707880', dark: '#404850', light: '#98a0a8', belly: '#c0c8d0', fin: '#586068', eye: '#ffd700', pupil: '#000', gill: '#404850', spot: '#3a4048', stripe: '#3a4048' },
    perch:     { main: '#5a7a3a', dark: '#3a5020', light: '#7a9a5a', belly: '#9ab070', fin: '#4a6b2a', eye: '#ffd700', pupil: '#000', gill: '#3a5020', spot: '#2a3f1a', stripe: '#2a3f1a' },
    ruffe:     { main: '#8a7a5a', dark: '#5a4a30', light: '#b0a080', belly: '#c8b8a0', fin: '#6a5a40', eye: '#ffd700', pupil: '#000', gill: '#5a4a30', spot: '#3a2a18', stripe: '#3a2a18' },
    catfish:   { main: '#3a2a1a', dark: '#1a1208', light: '#5a4030', belly: '#7a6050', fin: '#2a1a0a', eye: '#f0f0f0', pupil: '#000', gill: '#1a1208', spot: '#1a1208', stripe: '#1a1208' },
    burbot:    { main: '#5a5a4a', dark: '#3a3a2a', light: '#7a7a6a', belly: '#a0a090', fin: '#4a4a3a', eye: '#ffd700', pupil: '#000', gill: '#3a3a2a', spot: '#2a2a1a', stripe: '#2a2a1a' },
    piranha:   { main: '#a01818', dark: '#6a0808', light: '#c04040', belly: '#d88080', fin: '#800000', eye: '#ffd700', pupil: '#000', gill: '#6a0808', spot: '#4a0808', stripe: '#4a0808' },
    snakehead: { main: '#5a5a3a', dark: '#3a3a1a', light: '#7a7a5a', belly: '#a0a080', fin: '#4a4a2a', eye: '#ffd700', pupil: '#000', gill: '#3a3a1a', spot: '#2a2a0a', stripe: '#2a2a0a' },
    carp:      { main: '#8b6f3a', dark: '#5a4520', light: '#a88a50', belly: '#c4a870', fin: '#6b5028', eye: '#ffd700', pupil: '#000', gill: '#5a4520', spot: '#6b5028', stripe: '#5a4520' },
    carp_big:  { main: '#8a6a3a', dark: '#5a4020', light: '#b08a5a', belly: '#d0b080', fin: '#6a5028', eye: '#ffd700', pupil: '#000', gill: '#5a4020', spot: '#5a4020', stripe: '#5a4020' },
    crucian:   { main: '#c8a830', dark: '#8a7020', light: '#e0c050', belly: '#f0d878', fin: '#a08830', eye: '#ffd700', pupil: '#000', gill: '#8a7020', spot: '#8a7020', stripe: '#8a7020' },
    bream:     { main: '#7a8090', dark: '#505868', light: '#a0a8b8', belly: '#c8d0e0', fin: '#606878', eye: '#ffd700', pupil: '#000', gill: '#505868', spot: '#505868', stripe: '#505868' },
    silvercarp:{ main: '#b8c0c8', dark: '#8890a0', light: '#e0e8f0', belly: '#ffffff', fin: '#98a0b0', eye: '#ffd700', pupil: '#000', gill: '#8890a0', spot: '#8890a0', stripe: '#8890a0' },
    tench:     { main: '#5a7a4a', dark: '#3a5a2a', light: '#8aa07a', belly: '#a8b898', fin: '#4a6a3a', eye: '#ffd700', pupil: '#000', gill: '#3a5a2a', spot: '#3a5a2a', stripe: '#3a5a2a' },
    ide:       { main: '#a08858', dark: '#6a5830', light: '#c8a878', belly: '#e0c898', fin: '#8a7040', eye: '#ffd700', pupil: '#000', gill: '#6a5830', spot: '#6a5830', stripe: '#6a5830' },
    trout:     { main: '#d97645', dark: '#8a4a28', light: '#e89a6a', belly: '#f0b890', fin: '#b05530', eye: '#ffd700', pupil: '#000', gill: '#8a4a28', spot: '#c0392b', stripe: '#8a4a28' },
    salmon:    { main: '#e07050', dark: '#a04830', light: '#f0a080', belly: '#f8c8a8', fin: '#c05838', eye: '#ffd700', pupil: '#000', gill: '#a04830', spot: '#d06040', stripe: '#a04830' },
    char:      { main: '#7a8090', dark: '#4a5060', light: '#a0a8b8', belly: '#d0d8e0', fin: '#606878', eye: '#ffd700', pupil: '#000', gill: '#4a5060', spot: '#c0392b', stripe: '#4a5060' },
    whitefish: { main: '#a8b0b8', dark: '#708088', light: '#d0d8e0', belly: '#f0f8ff', fin: '#8890a0', eye: '#ffd700', pupil: '#000', gill: '#708088', spot: '#708088', stripe: '#708088' },
    grayling:  { main: '#9098a8', dark: '#606878', light: '#b8c0d0', belly: '#e0e8f0', fin: '#7880a0', eye: '#ffd700', pupil: '#000', gill: '#606878', spot: '#4a5a6a', stripe: '#4a5a6a' },
    bleak:     { main: '#c0d0e0', dark: '#8090a0', light: '#e0f0ff', belly: '#ffffff', fin: '#a0b0c0', eye: '#000', pupil: '#000', gill: '#8090a0', spot: '#a0b0c0', stripe: '#a0b0c0' },
    roach:     { main: '#a0a8b0', dark: '#707880', light: '#c8d0d8', belly: '#e8f0f8', fin: '#8a9298', eye: '#ffd700', pupil: '#000', gill: '#707880', spot: '#c0392b', stripe: '#707880' },
    chub:      { main: '#9098a0', dark: '#606870', light: '#b8c0c8', belly: '#e0e8f0', fin: '#788088', eye: '#ffd700', pupil: '#000', gill: '#606870', spot: '#606870', stripe: '#606870' },
    rudd:      { main: '#b09070', dark: '#806040', light: '#d8b898', belly: '#f0d8b8', fin: '#c03028', eye: '#ffd700', pupil: '#000', gill: '#806040', spot: '#806040', stripe: '#806040' },
    sabrefish: { main: '#b0b8c0', dark: '#808890', light: '#d8e0e8', belly: '#f0f8ff', fin: '#9098a0', eye: '#ffd700', pupil: '#000', gill: '#808890', spot: '#808890', stripe: '#808890' },
    gudgeon:   { main: '#8a7a5a', dark: '#5a4a30', light: '#b0a080', belly: '#c8b8a0', fin: '#6a5a40', eye: '#ffd700', pupil: '#000', gill: '#5a4a30', spot: '#3a2a18', stripe: '#3a2a18' },
    sturgeon:  { main: '#5a6a7a', dark: '#3a4a5a', light: '#7a8a9a', belly: '#a0b0c0', fin: '#4a5a6a', eye: '#ffd700', pupil: '#000', gill: '#3a4a5a', spot: '#3a4a5a', stripe: '#3a4a5a' },
    eel:       { main: '#3a5a3a', dark: '#1a3a1a', light: '#5a7a5a', belly: '#8aa08a', fin: '#2a4a2a', eye: '#ffd700', pupil: '#000', gill: '#1a3a1a', spot: '#1a3a1a', stripe: '#1a3a1a' },
    lamprey:   { main: '#6a6a7a', dark: '#3a3a4a', light: '#9a9aaa', belly: '#c0c0d0', fin: '#4a4a5a', eye: '#ffd700', pupil: '#000', gill: '#3a3a4a', spot: '#3a3a4a', stripe: '#3a3a4a' }
};

// === ОБЩАЯ ПАЛИТРА НЕЖИТИ (fallback) ===
const UNDEAD_PALETTE = {
    main: '#6a7a4a', dark: '#0a0a0a', light: '#a8b878', belly: '#c8d098',
    fin: '#4a5a2a', eye: '#c0ff00', pupil: '#000000', gill: '#3a4a1a',
    spot: '#3a4a1a', stripe: '#3a4a1a'
};

// === КОНСТАНТЫ ДЛЯ КОСТЕЙ И ВНУТРЕННОСТЕЙ ===
const UNDEAD_BONE = '#f0e8c8';
const UNDEAD_BONE_DARK = '#a89878';
const UNDEAD_GUTS = '#d02040';
const UNDEAD_GUTS_LIGHT = '#ff6080';

// === ИНДИВИДУАЛЬНЫЕ ПАЛИТРЫ НЕЖИТИ ===
const UNDEAD_FISH_PALETTES = {
    pike:      { main: '#c0d040', dark: '#4a5020', light: '#f0f860', belly: '#f8f8a0', fin: '#90a020', eye: '#ffffff', pupil: '#ff0000', gill: '#606820', spot: '#d04060', stripe: '#505820' },
    zander:    { main: '#60c0c0', dark: '#205050', light: '#a0f0f0', belly: '#c8f8f8', fin: '#409090', eye: '#ffffff', pupil: '#ff0000', gill: '#307070', spot: '#d04080', stripe: '#205050' },
    perch:     { main: '#8ac040', dark: '#2a3a10', light: '#c8f060', belly: '#e8f0a0', fin: '#6a9030', eye: '#ffffff', pupil: '#ff0000', gill: '#4a6020', spot: '#c03060', stripe: '#3a5020' },
    ruffe:     { main: '#c0a060', dark: '#605020', light: '#f0d090', belly: '#f8e0c0', fin: '#907030', eye: '#ffffff', pupil: '#ff0000', gill: '#705020', spot: '#d06070', stripe: '#605020' },
    catfish:   { main: '#302838', dark: '#0a0810', light: '#605070', belly: '#907080', fin: '#201820', eye: '#ff0000', pupil: '#ffff00', gill: '#0a0810', spot: '#c04080', stripe: '#201820' },
    burbot:    { main: '#90a060', dark: '#405020', light: '#c0d090', belly: '#e0e8b0', fin: '#607040', eye: '#ffffff', pupil: '#ff0000', gill: '#506030', spot: '#b04060', stripe: '#506030' },
    piranha:   { main: '#d02040', dark: '#500010', light: '#ff6080', belly: '#ffa0b0', fin: '#900020', eye: '#ffff00', pupil: '#000000', gill: '#700018', spot: '#ff0000', stripe: '#500010' },
    snakehead: { main: '#a0b040', dark: '#405010', light: '#d0e070', belly: '#e8f0a0', fin: '#708030', eye: '#ffffff', pupil: '#ff0000', gill: '#506020', spot: '#c03060', stripe: '#405010' },
    carp:      { main: '#e0c040', dark: '#705020', light: '#fff080', belly: '#fff8c0', fin: '#b09020', eye: '#ffffff', pupil: '#ff0000', gill: '#805020', spot: '#d04060', stripe: '#705020' },
    carp_big:  { main: '#e0a030', dark: '#704010', light: '#ffd080', belly: '#ffe8b0', fin: '#b07020', eye: '#ffffff', pupil: '#ff0000', gill: '#805020', spot: '#d04070', stripe: '#704010' },
    crucian:   { main: '#f0d030', dark: '#806010', light: '#fff890', belly: '#fffcc0', fin: '#c0a020', eye: '#ffffff', pupil: '#ff0000', gill: '#907010', spot: '#d04060', stripe: '#806010' },
    bream:     { main: '#8080c0', dark: '#303060', light: '#c0c0f0', belly: '#e0e0f8', fin: '#6060a0', eye: '#ffffff', pupil: '#ff0000', gill: '#505090', spot: '#c04080', stripe: '#303060' },
    silvercarp:{ main: '#a0b0c8', dark: '#506070', light: '#d0e0f0', belly: '#f0f8ff', fin: '#8090a8', eye: '#ffffff', pupil: '#ff0000', gill: '#607080', spot: '#c06090', stripe: '#506070' },
    tench:     { main: '#a0c050', dark: '#405020', light: '#d8f080', belly: '#e8f8b0', fin: '#709030', eye: '#ffffff', pupil: '#ff0000', gill: '#506020', spot: '#c04080', stripe: '#405020' },
    ide:       { main: '#d0a040', dark: '#604010', light: '#f8d080', belly: '#ffe8b0', fin: '#a08020', eye: '#ffffff', pupil: '#ff0000', gill: '#806020', spot: '#d04070', stripe: '#604010' },
    trout:     { main: '#f07050', dark: '#802020', light: '#ffb8a0', belly: '#ffd8c8', fin: '#c04030', eye: '#ffff00', pupil: '#ff0000', gill: '#902828', spot: '#ff00a0', stripe: '#802020' },
    salmon:    { main: '#ff7060', dark: '#902820', light: '#ffb0a0', belly: '#ffd8d0', fin: '#d05040', eye: '#ffff00', pupil: '#ff0000', gill: '#a03028', spot: '#ff10a0', stripe: '#902820' },
    char:      { main: '#8080a0', dark: '#303050', light: '#c0c0e0', belly: '#e0e0f0', fin: '#606080', eye: '#ffffff', pupil: '#ff0000', gill: '#505070', spot: '#ff00a0', stripe: '#303050' },
    whitefish: { main: '#b0c0d0', dark: '#506070', light: '#e8f0f8', belly: '#ffffff', fin: '#9098a8', eye: '#ffffff', pupil: '#ff0000', gill: '#607080', spot: '#c06090', stripe: '#506070' },
    grayling:  { main: '#90a0c0', dark: '#405070', light: '#c0d0f0', belly: '#e0e8f8', fin: '#7080a0', eye: '#ffffff', pupil: '#ff0000', gill: '#506078', spot: '#c040a0', stripe: '#405070' },
    bleak:     { main: '#60d0e0', dark: '#205060', light: '#a0f0ff', belly: '#d0f8ff', fin: '#4090a0', eye: '#ffffff', pupil: '#ff0000', gill: '#307080', spot: '#c04080', stripe: '#205060' },
    roach:     { main: '#b0a0c0', dark: '#504070', light: '#e0d0f0', belly: '#f8f0ff', fin: '#9080a0', eye: '#ffffff', pupil: '#ff0000', gill: '#706090', spot: '#d04090', stripe: '#504070' },
    chub:      { main: '#c0a0a0', dark: '#705050', light: '#f0d0d0', belly: '#f8e8e8', fin: '#a08080', eye: '#ffffff', pupil: '#ff0000', gill: '#806060', spot: '#c05080', stripe: '#705050' },
    rudd:      { main: '#e0a080', dark: '#805040', light: '#ffd0b0', belly: '#ffe8d0', fin: '#d04030', eye: '#ffffff', pupil: '#ff0000', gill: '#905040', spot: '#ff00a0', stripe: '#805040' },
    sabrefish: { main: '#b0b8c8', dark: '#505868', light: '#e0e8f0', belly: '#f8fcff', fin: '#9098a8', eye: '#ffffff', pupil: '#ff0000', gill: '#606878', spot: '#c06090', stripe: '#505868' },
    gudgeon:   { main: '#c0a878', dark: '#605030', light: '#f0d8b0', belly: '#f8e8c8', fin: '#907040', eye: '#ffffff', pupil: '#ff0000', gill: '#705020', spot: '#c05080', stripe: '#605030' },
    sturgeon:  { main: '#5060a0', dark: '#202850', light: '#8898d0', belly: '#b8c0e0', fin: '#405078', eye: '#ffffff', pupil: '#ff0000', gill: '#303868', spot: '#a04080', stripe: '#202850' },
    eel:       { main: '#4ac060', dark: '#1a5020', light: '#90f0a0', belly: '#c0f8c8', fin: '#3a8040', eye: '#ffffff', pupil: '#ff0000', gill: '#2a6030', spot: '#c04080', stripe: '#1a5020' },
    lamprey:   { main: '#9080b0', dark: '#403060', light: '#c8b8e0', belly: '#e8e0f0', fin: '#705890', eye: '#ffffff', pupil: '#ff0000', gill: '#504070', spot: '#c05090', stripe: '#403060' }
};

// === ФОРМЫ РЫБ ===
const FISH_FORMS = {
    'Щука':       { bodyLen: 26, bodyH: 10, bodyY: 11, headShape: 'pointed', headLen: 7, tailType: 'fork', tailSize: 6, topFin: 'small-back', topFinSize: 4, bottomFin: 'small', spots: [[10,2],[15,4],[19,3],[12,5],[17,2]], stripes: null, whiskers: false, spikes: false, palette: 'pike' },
    'Судак':      { bodyLen: 24, bodyH: 10, bodyY: 11, headShape: 'pointed', headLen: 6, tailType: 'fork', tailSize: 6, topFin: 'spiky', topFinSize: 6, bottomFin: 'small', spots: null, stripes: [[8,2],[12,2],[16,2],[20,2]], whiskers: false, spikes: false, palette: 'zander' },
    'Окунь':      { bodyLen: 18, bodyH: 14, bodyY: 9, headShape: 'round', headLen: 5, tailType: 'fork', tailSize: 5, topFin: 'high-spiky', topFinSize: 8, bottomFin: 'medium', spots: null, stripes: [[7,0],[10,0],[13,0],[16,0],[19,0]], whiskers: false, spikes: true, palette: 'perch' },
    'Ёрш':        { bodyLen: 18, bodyH: 12, bodyY: 10, headShape: 'round', headLen: 5, tailType: 'fan', tailSize: 5, topFin: 'very-spiky', topFinSize: 7, bottomFin: 'small', spots: [[8,3],[12,5],[15,3]], stripes: null, whiskers: false, spikes: true, palette: 'ruffe' },
    'Сом':        { bodyLen: 26, bodyH: 15, bodyY: 8, headShape: 'flat', headLen: 8, tailType: 'fan', tailSize: 6, topFin: 'tiny', topFinSize: 2, bottomFin: 'long-anal', spots: null, stripes: null, whiskers: true, spikes: false, palette: 'catfish' },
    'Налим':      { bodyLen: 24, bodyH: 12, bodyY: 10, headShape: 'round', headLen: 6, tailType: 'fan', tailSize: 5, topFin: 'small-back', topFinSize: 4, bottomFin: 'long-anal', spots: [[10,3],[14,5],[18,3],[12,7]], stripes: null, whiskers: true, spikes: false, palette: 'burbot' },
    'Пиранья':    { bodyLen: 18, bodyH: 14, bodyY: 9, headShape: 'blunt', headLen: 5, tailType: 'fork', tailSize: 5, topFin: 'medium', topFinSize: 4, bottomFin: 'medium', spots: null, stripes: null, whiskers: false, spikes: false, teeth: true, palette: 'piranha' },
    'Змееголов':  { bodyLen: 28, bodyH: 9, bodyY: 11, headShape: 'snake', headLen: 7, tailType: 'fan', tailSize: 6, topFin: 'long-back', topFinSize: 12, bottomFin: 'long-anal', spots: null, stripes: [[10,0],[15,0],[20,0]], whiskers: false, spikes: false, palette: 'snakehead' },
    'Карп':       { bodyLen: 20, bodyH: 16, bodyY: 8, headShape: 'round', headLen: 5, tailType: 'fork', tailSize: 5, topFin: 'medium', topFinSize: 5, bottomFin: 'medium', spots: null, stripes: null, whiskers: true, spikes: false, palette: 'carp', bigScales: true },
    'Сазан':      { bodyLen: 22, bodyH: 14, bodyY: 9, headShape: 'round', headLen: 6, tailType: 'fork', tailSize: 6, topFin: 'medium', topFinSize: 5, bottomFin: 'medium', spots: null, stripes: null, whiskers: true, spikes: false, palette: 'carp_big' },
    'Карась':     { bodyLen: 16, bodyH: 17, bodyY: 7, headShape: 'round', headLen: 4, tailType: 'fork', tailSize: 5, topFin: 'long-back', topFinSize: 8, bottomFin: 'medium', spots: null, stripes: null, whiskers: false, spikes: false, palette: 'crucian' },
    'Лещ':        { bodyLen: 18, bodyH: 18, bodyY: 7, headShape: 'small', headLen: 4, tailType: 'fork', tailSize: 6, topFin: 'small-back', topFinSize: 4, bottomFin: 'long-anal', spots: null, stripes: null, whiskers: false, spikes: false, palette: 'bream' },
    'Толстолобик':{ bodyLen: 20, bodyH: 15, bodyY: 8, headShape: 'big-head', headLen: 8, tailType: 'fork', tailSize: 6, topFin: 'small-back', topFinSize: 4, bottomFin: 'long-anal', spots: null, stripes: null, whiskers: false, spikes: false, palette: 'silvercarp' },
    'Белый амур': { bodyLen: 24, bodyH: 13, bodyY: 9, headShape: 'pointed', headLen: 5, tailType: 'fork', tailSize: 6, topFin: 'medium', topFinSize: 5, bottomFin: 'medium', spots: null, stripes: null, whiskers: false, spikes: false, palette: 'silvercarp' },
    'Линь':       { bodyLen: 19, bodyH: 14, bodyY: 9, headShape: 'small', headLen: 5, tailType: 'round', tailSize: 5, topFin: 'medium', topFinSize: 5, bottomFin: 'medium', spots: null, stripes: null, whiskers: true, spikes: false, palette: 'tench', slime: true },
    'Язь':        { bodyLen: 20, bodyH: 13, bodyY: 9, headShape: 'round', headLen: 5, tailType: 'fork', tailSize: 5, topFin: 'medium', topFinSize: 5, bottomFin: 'medium', spots: null, stripes: null, whiskers: false, spikes: false, palette: 'ide' },
    'Форель':     { bodyLen: 20, bodyH: 13, bodyY: 9, headShape: 'pointed', headLen: 5, tailType: 'fan', tailSize: 6, topFin: 'medium', topFinSize: 5, bottomFin: 'small-adipose', spots: [[7,3],[11,5],[15,3],[9,6],[13,7],[17,5]], stripes: null, whiskers: false, spikes: false, palette: 'trout' },
    'Лосось':     { bodyLen: 22, bodyH: 14, bodyY: 8, headShape: 'pointed', headLen: 6, tailType: 'fork', tailSize: 7, topFin: 'medium', topFinSize: 5, bottomFin: 'small-adipose', spots: [[8,4],[12,6],[16,4]], stripes: null, whiskers: false, spikes: false, palette: 'salmon', hump: true },
    'Голец':      { bodyLen: 22, bodyH: 12, bodyY: 10, headShape: 'pointed', headLen: 5, tailType: 'fork', tailSize: 6, topFin: 'medium', topFinSize: 5, bottomFin: 'small-adipose', spots: [[8,3],[12,5],[16,3],[10,7],[14,4]], stripes: null, whiskers: false, spikes: false, palette: 'char' },
    'Сиг':        { bodyLen: 22, bodyH: 12, bodyY: 10, headShape: 'small', headLen: 4, tailType: 'fork', tailSize: 6, topFin: 'medium', topFinSize: 5, bottomFin: 'small-adipose', spots: null, stripes: null, whiskers: false, spikes: false, palette: 'whitefish' },
    'Хариус':     { bodyLen: 20, bodyH: 13, bodyY: 9, headShape: 'pointed', headLen: 5, tailType: 'fork', tailSize: 6, topFin: 'sail', topFinSize: 12, bottomFin: 'small-adipose', spots: [[9,4],[13,6],[17,4]], stripes: null, whiskers: false, spikes: false, palette: 'grayling' },
    'Уклейка':    { bodyLen: 16, bodyH: 8, bodyY: 12, headShape: 'pointed', headLen: 4, tailType: 'fork', tailSize: 5, topFin: 'small', topFinSize: 3, bottomFin: 'small', spots: null, stripes: null, whiskers: false, spikes: false, palette: 'bleak' },
    'Плотва':     { bodyLen: 18, bodyH: 11, bodyY: 10, headShape: 'round', headLen: 4, tailType: 'fork', tailSize: 5, topFin: 'small', topFinSize: 4, bottomFin: 'small', spots: null, stripes: null, whiskers: false, spikes: false, palette: 'roach' },
    'Голавль':    { bodyLen: 20, bodyH: 12, bodyY: 10, headShape: 'big-head', headLen: 7, tailType: 'fork', tailSize: 6, topFin: 'medium', topFinSize: 5, bottomFin: 'medium', spots: null, stripes: null, whiskers: false, spikes: false, palette: 'chub' },
    'Краснопёрка':{ bodyLen: 18, bodyH: 12, bodyY: 10, headShape: 'round', headLen: 4, tailType: 'fork', tailSize: 5, topFin: 'small', topFinSize: 4, bottomFin: 'red-fins', spots: null, stripes: null, whiskers: false, spikes: false, palette: 'rudd' },
    'Чоп':        { bodyLen: 22, bodyH: 10, bodyY: 11, headShape: 'pointed', headLen: 5, tailType: 'fork', tailSize: 5, topFin: 'medium', topFinSize: 5, bottomFin: 'medium', spots: null, stripes: null, whiskers: false, spikes: false, palette: 'sabrefish' },
    'Пескарь':    { bodyLen: 16, bodyH: 9, bodyY: 11, headShape: 'round', headLen: 4, tailType: 'fork', tailSize: 4, topFin: 'small', topFinSize: 3, bottomFin: 'small', spots: [[7,3],[10,5],[13,3]], stripes: null, whiskers: true, spikes: false, palette: 'gudgeon' },
    'Осётр':      { bodyLen: 26, bodyH: 11, bodyY: 10, headShape: 'long-snout', headLen: 9, tailType: 'asymmetric-fork', tailSize: 7, topFin: 'small-back', topFinSize: 4, bottomFin: 'small', spots: null, stripes: null, whiskers: true, spikes: true, scutes: true, palette: 'sturgeon' },
    'Угорь':      { bodyLen: 28, bodyH: 7, bodyY: 12, headShape: 'small', headLen: 4, tailType: 'long', tailSize: 6, topFin: 'long-back-merged', topFinSize: 14, bottomFin: 'long-anal-merged', spots: null, stripes: null, whiskers: false, spikes: false, palette: 'eel', snakeLike: true },
    'Минога':     { bodyLen: 28, bodyH: 6, bodyY: 13, headShape: 'trumpet', headLen: 3, tailType: 'leaf', tailSize: 5, topFin: 'dorsal-long', topFinSize: 10, bottomFin: 'none', spots: null, stripes: null, whiskers: false, spikes: false, palette: 'lamprey', snakeLike: true }
};

// ========================================================
// ФУНКЦИЯ ОТРИСОВКИ (с палитрой по ключу)
// ========================================================
function makeFishSVG(paletteKey, form, scale) {
    scale = scale || 1;
    const p = (paletteKey === 'undead') ? UNDEAD_PALETTE : PALETTES[paletteKey];
    if (!p) return '';
    const f = form;
    const isUndead = paletteKey === 'undead';

    const bodyLen = f.bodyLen;
    const bodyH = f.bodyH;
    const bodyY = f.bodyY || Math.floor((32 - bodyH) / 2);
    const headX = 3;
    const cy = bodyY + bodyH / 2;
    const x1 = headX, x2 = headX + bodyLen;
    let s = '';

    s += `<rect x="${x1}" y="${bodyY+2}" width="${bodyLen}" height="${bodyH-4}" fill="${p.main}"/>`;
    s += `<rect x="${x1+1}" y="${bodyY+1}" width="${bodyLen-2}" height="${bodyH-2}" fill="${p.main}"/>`;
    s += `<rect x="${x1+2}" y="${bodyY}" width="${bodyLen-4}" height="${bodyH}" fill="${p.main}"/>`;

    const bellyH = Math.max(2, Math.floor(bodyH * 0.25));
    s += `<rect x="${x1+2}" y="${bodyY+bodyH-bellyH}" width="${bodyLen-4}" height="${bellyH}" fill="${p.belly}" opacity="0.9"/>`;

    s += `<rect x="${x1+2}" y="${bodyY}" width="${bodyLen-4}" height="1" fill="${p.dark}"/>`;
    s += `<rect x="${x1+3}" y="${bodyY+1}" width="${bodyLen-6}" height="1" fill="${p.dark}" opacity="0.6"/>`;

    if (f.bigScales) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                const sx = x1 + 4 + i * 4;
                const sy = bodyY + 3 + j * 3;
                if (sx < x2 - 2 && sy < bodyY + bodyH - 3) {
                    s += `<rect x="${sx}" y="${sy}" width="2" height="2" fill="${p.light}" opacity="0.4"/>`;
                }
            }
        }
    } else {
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 2; j++) {
                const sx = x1 + 4 + i * 3;
                const sy = bodyY + 3 + j * 4;
                if (sx < x2 - 2 && sy < bodyY + bodyH - 2) {
                    s += `<rect x="${sx}" y="${sy}" width="1" height="1" fill="${p.light}" opacity="0.5"/>`;
                }
            }
        }
    }

    if (f.stripes) {
        for (const [sx] of f.stripes) {
            const sxAbs = x1 + sx;
            if (sxAbs < x2 - 2) {
                s += `<rect x="${sxAbs}" y="${bodyY+1}" width="1" height="${bodyH-2}" fill="${p.stripe}" opacity="0.5"/>`;
            }
        }
    }

    if (f.spots) {
        for (const [sx, sy] of f.spots) {
            const sxAbs = x1 + sx;
            const syAbs = bodyY + sy;
            if (sxAbs < x2 - 2 && syAbs < bodyY + bodyH - 1) {
                s += `<rect x="${sxAbs}" y="${syAbs}" width="2" height="2" fill="${p.spot}" opacity="0.8"/>`;
                s += `<rect x="${sxAbs}" y="${syAbs}" width="1" height="1" fill="${p.dark}" opacity="0.4"/>`;
            }
        }
    }

    const headLen = f.headLen || 5;
    if (f.headShape === 'pointed') {
        s += `<rect x="${x1}" y="${bodyY+3}" width="2" height="${bodyH-6}" fill="${p.main}"/>`;
        s += `<rect x="${x1+1}" y="${bodyY+2}" width="1" height="${bodyH-4}" fill="${p.main}"/>`;
    } else if (f.headShape === 'snake') {
        s += `<rect x="${x1-1}" y="${bodyY+3}" width="3" height="${bodyH-6}" fill="${p.main}"/>`;
    } else if (f.headShape === 'flat') {
        s += `<rect x="${x1-1}" y="${bodyY+4}" width="3" height="${bodyH-8}" fill="${p.main}"/>`;
    } else if (f.headShape === 'long-snout') {
        s += `<rect x="${x1-3}" y="${cy-1}" width="4" height="2" fill="${p.main}"/>`;
        s += `<rect x="${x1-3}" y="${cy-2}" width="3" height="1" fill="${p.dark}"/>`;
    } else if (f.headShape === 'trumpet') {
        s += `<rect x="${x1-3}" y="${cy-2}" width="3" height="4" fill="${p.dark}"/>`;
        s += `<rect x="${x1-3}" y="${cy-1}" width="2" height="2" fill="${p.spot}"/>`;
    } else if (f.headShape === 'big-head') {
        s += `<rect x="${x1-1}" y="${bodyY+2}" width="3" height="${bodyH-4}" fill="${p.main}"/>`;
    } else if (f.headShape === 'blunt') {
        s += `<rect x="${x1}" y="${bodyY+2}" width="3" height="${bodyH-4}" fill="${p.main}"/>`;
    } else if (f.headShape === 'small') {
        s += `<rect x="${x1}" y="${bodyY+3}" width="2" height="${bodyH-6}" fill="${p.main}"/>`;
    }

    s += `<rect x="${x1}" y="${bodyY+3}" width="1" height="${bodyH-6}" fill="${p.dark}" opacity="0.4"/>`;

    const gillX = x1 + headLen;
    s += `<rect x="${gillX}" y="${bodyY+2}" width="1" height="2" fill="${p.gill}" opacity="0.8"/>`;
    s += `<rect x="${gillX+1}" y="${bodyY+3}" width="1" height="${bodyH-6}" fill="${p.gill}" opacity="0.8"/>`;
    s += `<rect x="${gillX}" y="${bodyY+bodyH-4}" width="1" height="2" fill="${p.gill}" opacity="0.8"/>`;

    const eyeX = x1 + 2;
    const eyeY = bodyY + Math.floor(bodyH / 3);
    s += `<rect x="${eyeX}" y="${eyeY}" width="3" height="3" fill="${p.eye}"/>`;
    s += `<rect x="${eyeX+1}" y="${eyeY+1}" width="2" height="2" fill="${p.pupil}"/>`;
    s += `<rect x="${eyeX}" y="${eyeY}" width="1" height="1" fill="#ffffff" opacity="0.8"/>`;

    s += `<rect x="${x1-1}" y="${cy}" width="2" height="1" fill="${p.dark}"/>`;

    if (f.teeth) {
        s += `<rect x="${x1}" y="${cy+1}" width="1" height="1" fill="#ffffff"/>`;
        s += `<rect x="${x1+1}" y="${cy+1}" width="1" height="1" fill="#ffffff"/>`;
    }

    if (f.whiskers) {
        s += `<rect x="${x1-2}" y="${cy-2}" width="2" height="1" fill="${p.dark}"/>`;
        s += `<rect x="${x1-3}" y="${cy-3}" width="1" height="1" fill="${p.dark}"/>`;
        s += `<rect x="${x1-2}" y="${cy+2}" width="2" height="1" fill="${p.dark}"/>`;
        s += `<rect x="${x1-3}" y="${cy+3}" width="1" height="1" fill="${p.dark}"/>`;
    }

    const topFinSize = f.topFinSize || 4;
    const topFinType = f.topFin || 'medium';
    const finStart = x1 + headLen + 2;

    if (topFinType === 'high-spiky' || topFinType === 'very-spiky') {
        for (let i = 0; i < topFinSize; i++) {
            const fx = finStart + i;
            const fh = 3 + (i % 2 === 0 ? 2 : 0);
            s += `<rect x="${fx}" y="${bodyY-fh}" width="1" height="${fh}" fill="${p.fin}"/>`;
        }
    } else if (topFinType === 'sail') {
        for (let i = 0; i < topFinSize; i++) {
            const fx = finStart + i;
            const fh = Math.min(topFinSize - i, 8);
            if (fh > 0) s += `<rect x="${fx}" y="${bodyY-fh}" width="1" height="${fh}" fill="${p.fin}"/>`;
        }
    } else if (topFinType === 'spiky') {
        s += `<rect x="${finStart}" y="${bodyY-3}" width="1" height="3" fill="${p.fin}"/>`;
        s += `<rect x="${finStart+1}" y="${bodyY-4}" width="1" height="4" fill="${p.fin}"/>`;
        s += `<rect x="${finStart+2}" y="${bodyY-4}" width="1" height="4" fill="${p.fin}"/>`;
        s += `<rect x="${finStart+3}" y="${bodyY-3}" width="1" height="3" fill="${p.fin}"/>`;
        s += `<rect x="${finStart+4}" y="${bodyY-2}" width="1" height="2" fill="${p.fin}"/>`;
    } else if (topFinType === 'long-back' || topFinType === 'long-back-merged') {
        for (let i = 0; i < topFinSize; i++) {
            const fx = finStart + i;
            s += `<rect x="${fx}" y="${bodyY-2}" width="1" height="2" fill="${p.fin}"/>`;
        }
    } else if (topFinType === 'small-back') {
        s += `<rect x="${finStart+2}" y="${bodyY-2}" width="3" height="2" fill="${p.fin}"/>`;
    } else if (topFinType === 'dorsal-long') {
        s += `<rect x="${finStart}" y="${bodyY-2}" width="${topFinSize}" height="2" fill="${p.fin}"/>`;
    } else if (topFinType === 'tiny') {
        s += `<rect x="${finStart}" y="${bodyY-2}" width="1" height="2" fill="${p.fin}"/>`;
    } else if (topFinType === 'small') {
        s += `<rect x="${finStart+1}" y="${bodyY-2}" width="2" height="2" fill="${p.fin}"/>`;
    } else {
        s += `<rect x="${finStart}" y="${bodyY-3}" width="1" height="3" fill="${p.fin}"/>`;
        s += `<rect x="${finStart+1}" y="${bodyY-4}" width="4" height="4" fill="${p.fin}"/>`;
        s += `<rect x="${finStart+5}" y="${bodyY-3}" width="2" height="3" fill="${p.fin}"/>`;
        s += `<rect x="${finStart+1}" y="${bodyY-4}" width="3" height="1" fill="${p.light}" opacity="0.6"/>`;
    }

    const bottomFinStart = x1 + headLen + 2;
    if (f.bottomFin === 'long-anal' || f.bottomFin === 'long-anal-merged') {
        for (let i = 0; i < 8; i++) {
            const fx = bottomFinStart + i;
            s += `<rect x="${fx}" y="${bodyY+bodyH}" width="1" height="2" fill="${p.fin}"/>`;
        }
    } else if (f.bottomFin === 'medium') {
        s += `<rect x="${bottomFinStart}" y="${bodyY+bodyH}" width="4" height="3" fill="${p.fin}"/>`;
        s += `<rect x="${bottomFinStart+4}" y="${bodyY+bodyH}" width="2" height="2" fill="${p.fin}"/>`;
    } else if (f.bottomFin === 'small-adipose') {
        s += `<rect x="${bottomFinStart+6}" y="${bodyY+bodyH}" width="2" height="2" fill="${p.fin}"/>`;
    } else if (f.bottomFin === 'red-fins') {
        s += `<rect x="${bottomFinStart}" y="${bodyY+bodyH}" width="4" height="3" fill="#c03028"/>`;
        s += `<rect x="${bottomFinStart+4}" y="${bodyY+bodyH}" width="2" height="2" fill="#c03028"/>`;
    } else if (f.bottomFin === 'small') {
        s += `<rect x="${bottomFinStart+1}" y="${bodyY+bodyH}" width="3" height="2" fill="${p.fin}"/>`;
    }

    s += `<rect x="${x1+headLen+1}" y="${cy+1}" width="3" height="3" fill="${p.fin}" opacity="0.85"/>`;
    s += `<rect x="${x1+headLen+4}" y="${cy+2}" width="2" height="2" fill="${p.fin}" opacity="0.7"/>`;

    const tailX = x2;
    const tailSize = f.tailSize || 6;
    const midY = cy;

    if (f.tailType === 'fork') {
        s += `<path d="M ${tailX} ${midY-1} L ${tailX+2} ${midY-1} L ${tailX+tailSize} ${midY-tailSize-1} Q ${tailX+tailSize+1} ${midY-tailSize-2} ${tailX+tailSize-1} ${midY-tailSize-3} L ${tailX+2} ${midY-1} Z" fill="${p.fin}"/>`;
        s += `<path d="M ${tailX} ${midY+1} L ${tailX+2} ${midY+1} L ${tailX+tailSize} ${midY+tailSize+1} Q ${tailX+tailSize+1} ${midY+tailSize+2} ${tailX+tailSize-1} ${midY+tailSize+3} L ${tailX+2} ${midY+1} Z" fill="${p.fin}"/>`;
        s += `<rect x="${tailX}" y="${midY-1}" width="3" height="2" fill="${p.main}"/>`;
    } else if (f.tailType === 'fan') {
        s += `<rect x="${tailX}" y="${midY-2}" width="2" height="4" fill="${p.main}"/>`;
        s += `<path d="M ${tailX+2} ${midY-5} Q ${tailX+tailSize-1} ${midY-tailSize-3} ${tailX+tailSize+1} ${midY} Q ${tailX+tailSize-1} ${midY+tailSize+3} ${tailX+2} ${midY+5} Z" fill="${p.fin}"/>`;
        for (let i = -2; i <= 2; i++) {
            s += `<rect x="${tailX+4+i}" y="${midY + i*3 - 1}" width="1" height="2" fill="${p.dark}" opacity="0.5"/>`;
        }
    } else if (f.tailType === 'long') {
        s += `<rect x="${tailX}" y="${midY-1}" width="5" height="3" fill="${p.main}"/>`;
        s += `<path d="M ${tailX+4} ${midY-2} Q ${tailX+9} ${midY-4} ${tailX+11} ${midY-1} Q ${tailX+11} ${midY+1} ${tailX+4} ${midY+2} Z" fill="${p.fin}"/>`;
        s += `<rect x="${tailX+9}" y="${midY-3}" width="2" height="6" fill="${p.dark}" opacity="0.5"/>`;
    } else if (f.tailType === 'round') {
        s += `<rect x="${tailX}" y="${midY-2}" width="2" height="4" fill="${p.main}"/>`;
        s += `<ellipse cx="${tailX+4}" cy="${midY}" rx="3" ry="4" fill="${p.fin}"/>`;
    } else if (f.tailType === 'asymmetric-fork') {
        s += `<rect x="${tailX}" y="${midY-1}" width="3" height="2" fill="${p.main}"/>`;
        s += `<path d="M ${tailX+3} ${midY-1} L ${tailX+7} ${midY-7} Q ${tailX+8} ${midY-7} ${tailX+8} ${midY-5} L ${tailX+4} ${midY-1} Z" fill="${p.fin}"/>`;
        s += `<path d="M ${tailX+3} ${midY+1} L ${tailX+6} ${midY+4} Q ${tailX+7} ${midY+4} ${tailX+7} ${midY+3} L ${tailX+4} ${midY+1} Z" fill="${p.fin}"/>`;
    } else if (f.tailType === 'leaf') {
        s += `<rect x="${tailX}" y="${midY-1}" width="2" height="2" fill="${p.main}"/>`;
        s += `<path d="M ${tailX+2} ${midY} Q ${tailX+5} ${midY-5} ${tailX+9} ${midY} Q ${tailX+5} ${midY+5} ${tailX+2} ${midY} Z" fill="${p.fin}"/>`;
    }

    if (f.spikes) {
        for (let i = 0; i < 4; i++) {
            const sx = x1 + headLen + 1 + i * 3;
            s += `<rect x="${sx}" y="${bodyY-1}" width="1" height="1" fill="${p.dark}"/>`;
        }
    }
    if (f.scutes) {
        for (let i = 0; i < 5; i++) {
            const sx = x1 + headLen + 3 + i * 4;
            s += `<rect x="${sx}" y="${bodyY-1}" width="2" height="2" fill="${p.dark}"/>`;
            s += `<rect x="${sx}" y="${bodyY+bodyH-1}" width="2" height="2" fill="${p.dark}"/>`;
        }
    }
    if (f.hump) {
        s += `<rect x="${x1+8}" y="${bodyY-2}" width="6" height="2" fill="${p.main}"/>`;
        s += `<rect x="${x1+9}" y="${bodyY-3}" width="4" height="1" fill="${p.main}"/>`;
    }
    if (f.slime) {
        for (let i = 0; i < 6; i++) {
            const sx = x1 + 5 + i * 3;
            const sy = bodyY + 2 + (i % 2) * 3;
            s += `<rect x="${sx}" y="${sy}" width="1" height="1" fill="#ffffff" opacity="0.4"/>`;
        }
    }

    if (isUndead) {
        const ribPositions = [6, 10, 14, 18];
        for (const rx of ribPositions) {
            const ribX = x1 + rx;
            if (ribX < x2 - 4) {
                s += `<rect x="${ribX}" y="${bodyY + 3}" width="1" height="${bodyH - 6}" fill="${UNDEAD_BONE}"/>`;
                s += `<rect x="${ribX + 1}" y="${bodyY + 3}" width="1" height="${bodyH - 6}" fill="${UNDEAD_BONE_DARK}" opacity="0.7"/>`;
                s += `<rect x="${ribX - 1}" y="${bodyY + 3}" width="3" height="1" fill="${UNDEAD_BONE}"/>`;
                s += `<rect x="${ribX - 1}" y="${bodyY + bodyH - 4}" width="3" height="1" fill="${UNDEAD_BONE}"/>`;
            }
        }
        s += `<rect x="${x1 + 4}" y="${cy}" width="${bodyLen - 8}" height="1" fill="${UNDEAD_BONE}" opacity="0.8"/>`;
        const woundPositions = [[8, 4], [16, bodyH - 6]];
        for (const [wx, wy] of woundPositions) {
            const woundX = x1 + wx;
            const woundY = bodyY + wy;
            if (woundX < x2 - 6 && woundY < bodyY + bodyH - 3) {
                s += `<rect x="${woundX}" y="${woundY}" width="4" height="3" fill="${UNDEAD_GUTS}"/>`;
                s += `<rect x="${woundX + 1}" y="${woundY + 1}" width="2" height="1" fill="${UNDEAD_GUTS_LIGHT}"/>`;
            }
        }
    }

    return 'data:image/svg+xml;utf8,' + encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges" ${scale !== 1 ? `width="${32*scale}" height="${32*scale}"` : ''}>${s}</svg>`
    );
}

// ========================================================
// ФУНКЦИЯ ОТРИСОВКИ (с готовой палитрой — для нежити)
// ========================================================
function makeFishSVGWithCustomPalette(palette, form, scale) {
    scale = scale || 1;
    const p = palette;
    if (!p) return '';
    const f = form;
    const isUndead = true;

    const bodyLen = f.bodyLen;
    const bodyH = f.bodyH;
    const bodyY = f.bodyY || Math.floor((32 - bodyH) / 2);
    const headX = 3;
    const cy = bodyY + bodyH / 2;
    const x1 = headX, x2 = headX + bodyLen;
    let s = '';

    s += `<rect x="${x1}" y="${bodyY+2}" width="${bodyLen}" height="${bodyH-4}" fill="${p.main}"/>`;
    s += `<rect x="${x1+1}" y="${bodyY+1}" width="${bodyLen-2}" height="${bodyH-2}" fill="${p.main}"/>`;
    s += `<rect x="${x1+2}" y="${bodyY}" width="${bodyLen-4}" height="${bodyH}" fill="${p.main}"/>`;

    const bellyH = Math.max(2, Math.floor(bodyH * 0.25));
    s += `<rect x="${x1+2}" y="${bodyY+bodyH-bellyH}" width="${bodyLen-4}" height="${bellyH}" fill="${p.belly}" opacity="0.9"/>`;

    s += `<rect x="${x1+2}" y="${bodyY}" width="${bodyLen-4}" height="1" fill="${p.dark}"/>`;
    s += `<rect x="${x1+3}" y="${bodyY+1}" width="${bodyLen-6}" height="1" fill="${p.dark}" opacity="0.6"/>`;

    if (f.bigScales) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                const sx = x1 + 4 + i * 4;
                const sy = bodyY + 3 + j * 3;
                if (sx < x2 - 2 && sy < bodyY + bodyH - 3) {
                    s += `<rect x="${sx}" y="${sy}" width="2" height="2" fill="${p.light}" opacity="0.4"/>`;
                }
            }
        }
    } else {
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 2; j++) {
                const sx = x1 + 4 + i * 3;
                const sy = bodyY + 3 + j * 4;
                if (sx < x2 - 2 && sy < bodyY + bodyH - 2) {
                    s += `<rect x="${sx}" y="${sy}" width="1" height="1" fill="${p.light}" opacity="0.5"/>`;
                }
            }
        }
    }

    if (f.stripes) {
        for (const [sx] of f.stripes) {
            const sxAbs = x1 + sx;
            if (sxAbs < x2 - 2) {
                s += `<rect x="${sxAbs}" y="${bodyY+1}" width="1" height="${bodyH-2}" fill="${p.stripe}" opacity="0.5"/>`;
            }
        }
    }

    if (f.spots) {
        for (const [sx, sy] of f.spots) {
            const sxAbs = x1 + sx;
            const syAbs = bodyY + sy;
            if (sxAbs < x2 - 2 && syAbs < bodyY + bodyH - 1) {
                s += `<rect x="${sxAbs}" y="${syAbs}" width="2" height="2" fill="${p.spot}" opacity="0.8"/>`;
                s += `<rect x="${sxAbs}" y="${syAbs}" width="1" height="1" fill="${p.dark}" opacity="0.4"/>`;
            }
        }
    }

    const headLen = f.headLen || 5;
    if (f.headShape === 'pointed') {
        s += `<rect x="${x1}" y="${bodyY+3}" width="2" height="${bodyH-6}" fill="${p.main}"/>`;
        s += `<rect x="${x1+1}" y="${bodyY+2}" width="1" height="${bodyH-4}" fill="${p.main}"/>`;
    } else if (f.headShape === 'snake') {
        s += `<rect x="${x1-1}" y="${bodyY+3}" width="3" height="${bodyH-6}" fill="${p.main}"/>`;
    } else if (f.headShape === 'flat') {
        s += `<rect x="${x1-1}" y="${bodyY+4}" width="3" height="${bodyH-8}" fill="${p.main}"/>`;
    } else if (f.headShape === 'long-snout') {
        s += `<rect x="${x1-3}" y="${cy-1}" width="4" height="2" fill="${p.main}"/>`;
        s += `<rect x="${x1-3}" y="${cy-2}" width="3" height="1" fill="${p.dark}"/>`;
    } else if (f.headShape === 'trumpet') {
        s += `<rect x="${x1-3}" y="${cy-2}" width="3" height="4" fill="${p.dark}"/>`;
        s += `<rect x="${x1-3}" y="${cy-1}" width="2" height="2" fill="${p.spot}"/>`;
    } else if (f.headShape === 'big-head') {
        s += `<rect x="${x1-1}" y="${bodyY+2}" width="3" height="${bodyH-4}" fill="${p.main}"/>`;
    } else if (f.headShape === 'blunt') {
        s += `<rect x="${x1}" y="${bodyY+2}" width="3" height="${bodyH-4}" fill="${p.main}"/>`;
    } else if (f.headShape === 'small') {
        s += `<rect x="${x1}" y="${bodyY+3}" width="2" height="${bodyH-6}" fill="${p.main}"/>`;
    }

    s += `<rect x="${x1}" y="${bodyY+3}" width="1" height="${bodyH-6}" fill="${p.dark}" opacity="0.4"/>`;

    const gillX = x1 + headLen;
    s += `<rect x="${gillX}" y="${bodyY+2}" width="1" height="2" fill="${p.gill}" opacity="0.8"/>`;
    s += `<rect x="${gillX+1}" y="${bodyY+3}" width="1" height="${bodyH-6}" fill="${p.gill}" opacity="0.8"/>`;
    s += `<rect x="${gillX}" y="${bodyY+bodyH-4}" width="1" height="2" fill="${p.gill}" opacity="0.8"/>`;

    const eyeX = x1 + 2;
    const eyeY = bodyY + Math.floor(bodyH / 3);
    s += `<rect x="${eyeX}" y="${eyeY}" width="3" height="3" fill="${p.eye}"/>`;
    s += `<rect x="${eyeX+1}" y="${eyeY+1}" width="2" height="2" fill="${p.pupil}"/>`;
    s += `<rect x="${eyeX}" y="${eyeY}" width="1" height="1" fill="#ffffff" opacity="0.8"/>`;

    s += `<rect x="${x1-1}" y="${cy}" width="2" height="1" fill="${p.dark}"/>`;

    if (f.teeth) {
        s += `<rect x="${x1}" y="${cy+1}" width="1" height="1" fill="#ffffff"/>`;
        s += `<rect x="${x1+1}" y="${cy+1}" width="1" height="1" fill="#ffffff"/>`;
    }

    if (f.whiskers) {
        s += `<rect x="${x1-2}" y="${cy-2}" width="2" height="1" fill="${p.dark}"/>`;
        s += `<rect x="${x1-3}" y="${cy-3}" width="1" height="1" fill="${p.dark}"/>`;
        s += `<rect x="${x1-2}" y="${cy+2}" width="2" height="1" fill="${p.dark}"/>`;
        s += `<rect x="${x1-3}" y="${cy+3}" width="1" height="1" fill="${p.dark}"/>`;
    }

    const topFinSize = f.topFinSize || 4;
    const topFinType = f.topFin || 'medium';
    const finStart = x1 + headLen + 2;

    if (topFinType === 'high-spiky' || topFinType === 'very-spiky') {
        for (let i = 0; i < topFinSize; i++) {
            const fx = finStart + i;
            const fh = 3 + (i % 2 === 0 ? 2 : 0);
            s += `<rect x="${fx}" y="${bodyY-fh}" width="1" height="${fh}" fill="${p.fin}"/>`;
        }
    } else if (topFinType === 'sail') {
        for (let i = 0; i < topFinSize; i++) {
            const fx = finStart + i;
            const fh = Math.min(topFinSize - i, 8);
            if (fh > 0) s += `<rect x="${fx}" y="${bodyY-fh}" width="1" height="${fh}" fill="${p.fin}"/>`;
        }
    } else if (topFinType === 'spiky') {
        s += `<rect x="${finStart}" y="${bodyY-3}" width="1" height="3" fill="${p.fin}"/>`;
        s += `<rect x="${finStart+1}" y="${bodyY-4}" width="1" height="4" fill="${p.fin}"/>`;
        s += `<rect x="${finStart+2}" y="${bodyY-4}" width="1" height="4" fill="${p.fin}"/>`;
        s += `<rect x="${finStart+3}" y="${bodyY-3}" width="1" height="3" fill="${p.fin}"/>`;
        s += `<rect x="${finStart+4}" y="${bodyY-2}" width="1" height="2" fill="${p.fin}"/>`;
    } else if (topFinType === 'long-back' || topFinType === 'long-back-merged') {
        for (let i = 0; i < topFinSize; i++) {
            const fx = finStart + i;
            s += `<rect x="${fx}" y="${bodyY-2}" width="1" height="2" fill="${p.fin}"/>`;
        }
    } else if (topFinType === 'small-back') {
        s += `<rect x="${finStart+2}" y="${bodyY-2}" width="3" height="2" fill="${p.fin}"/>`;
    } else if (topFinType === 'dorsal-long') {
        s += `<rect x="${finStart}" y="${bodyY-2}" width="${topFinSize}" height="2" fill="${p.fin}"/>`;
    } else if (topFinType === 'tiny') {
        s += `<rect x="${finStart}" y="${bodyY-2}" width="1" height="2" fill="${p.fin}"/>`;
    } else if (topFinType === 'small') {
        s += `<rect x="${finStart+1}" y="${bodyY-2}" width="2" height="2" fill="${p.fin}"/>`;
    } else {
        s += `<rect x="${finStart}" y="${bodyY-3}" width="1" height="3" fill="${p.fin}"/>`;
        s += `<rect x="${finStart+1}" y="${bodyY-4}" width="4" height="4" fill="${p.fin}"/>`;
        s += `<rect x="${finStart+5}" y="${bodyY-3}" width="2" height="3" fill="${p.fin}"/>`;
        s += `<rect x="${finStart+1}" y="${bodyY-4}" width="3" height="1" fill="${p.light}" opacity="0.6"/>`;
    }

    const bottomFinStart = x1 + headLen + 2;
    if (f.bottomFin === 'long-anal' || f.bottomFin === 'long-anal-merged') {
        for (let i = 0; i < 8; i++) {
            const fx = bottomFinStart + i;
            s += `<rect x="${fx}" y="${bodyY+bodyH}" width="1" height="2" fill="${p.fin}"/>`;
        }
    } else if (f.bottomFin === 'medium') {
        s += `<rect x="${bottomFinStart}" y="${bodyY+bodyH}" width="4" height="3" fill="${p.fin}"/>`;
        s += `<rect x="${bottomFinStart+4}" y="${bodyY+bodyH}" width="2" height="2" fill="${p.fin}"/>`;
    } else if (f.bottomFin === 'small-adipose') {
        s += `<rect x="${bottomFinStart+6}" y="${bodyY+bodyH}" width="2" height="2" fill="${p.fin}"/>`;
    } else if (f.bottomFin === 'red-fins') {
        s += `<rect x="${bottomFinStart}" y="${bodyY+bodyH}" width="4" height="3" fill="#c03028"/>`;
        s += `<rect x="${bottomFinStart+4}" y="${bodyY+bodyH}" width="2" height="2" fill="#c03028"/>`;
    } else if (f.bottomFin === 'small') {
        s += `<rect x="${bottomFinStart+1}" y="${bodyY+bodyH}" width="3" height="2" fill="${p.fin}"/>`;
    }

    s += `<rect x="${x1+headLen+1}" y="${cy+1}" width="3" height="3" fill="${p.fin}" opacity="0.85"/>`;
    s += `<rect x="${x1+headLen+4}" y="${cy+2}" width="2" height="2" fill="${p.fin}" opacity="0.7"/>`;

    const tailX = x2;
    const tailSize = f.tailSize || 6;
    const midY = cy;

    if (f.tailType === 'fork') {
        s += `<path d="M ${tailX} ${midY-1} L ${tailX+2} ${midY-1} L ${tailX+tailSize} ${midY-tailSize-1} Q ${tailX+tailSize+1} ${midY-tailSize-2} ${tailX+tailSize-1} ${midY-tailSize-3} L ${tailX+2} ${midY-1} Z" fill="${p.fin}"/>`;
        s += `<path d="M ${tailX} ${midY+1} L ${tailX+2} ${midY+1} L ${tailX+tailSize} ${midY+tailSize+1} Q ${tailX+tailSize+1} ${midY+tailSize+2} ${tailX+tailSize-1} ${midY+tailSize+3} L ${tailX+2} ${midY+1} Z" fill="${p.fin}"/>`;
        s += `<rect x="${tailX}" y="${midY-1}" width="3" height="2" fill="${p.main}"/>`;
    } else if (f.tailType === 'fan') {
        s += `<rect x="${tailX}" y="${midY-2}" width="2" height="4" fill="${p.main}"/>`;
        s += `<path d="M ${tailX+2} ${midY-5} Q ${tailX+tailSize-1} ${midY-tailSize-3} ${tailX+tailSize+1} ${midY} Q ${tailX+tailSize-1} ${midY+tailSize+3} ${tailX+2} ${midY+5} Z" fill="${p.fin}"/>`;
        for (let i = -2; i <= 2; i++) {
            s += `<rect x="${tailX+4+i}" y="${midY + i*3 - 1}" width="1" height="2" fill="${p.dark}" opacity="0.5"/>`;
        }
    } else if (f.tailType === 'long') {
        s += `<rect x="${tailX}" y="${midY-1}" width="5" height="3" fill="${p.main}"/>`;
        s += `<path d="M ${tailX+4} ${midY-2} Q ${tailX+9} ${midY-4} ${tailX+11} ${midY-1} Q ${tailX+11} ${midY+1} ${tailX+4} ${midY+2} Z" fill="${p.fin}"/>`;
        s += `<rect x="${tailX+9}" y="${midY-3}" width="2" height="6" fill="${p.dark}" opacity="0.5"/>`;
    } else if (f.tailType === 'round') {
        s += `<rect x="${tailX}" y="${midY-2}" width="2" height="4" fill="${p.main}"/>`;
        s += `<ellipse cx="${tailX+4}" cy="${midY}" rx="3" ry="4" fill="${p.fin}"/>`;
    } else if (f.tailType === 'asymmetric-fork') {
        s += `<rect x="${tailX}" y="${midY-1}" width="3" height="2" fill="${p.main}"/>`;
        s += `<path d="M ${tailX+3} ${midY-1} L ${tailX+7} ${midY-7} Q ${tailX+8} ${midY-7} ${tailX+8} ${midY-5} L ${tailX+4} ${midY-1} Z" fill="${p.fin}"/>`;
        s += `<path d="M ${tailX+3} ${midY+1} L ${tailX+6} ${midY+4} Q ${tailX+7} ${midY+4} ${tailX+7} ${midY+3} L ${tailX+4} ${midY+1} Z" fill="${p.fin}"/>`;
    } else if (f.tailType === 'leaf') {
        s += `<rect x="${tailX}" y="${midY-1}" width="2" height="2" fill="${p.main}"/>`;
        s += `<path d="M ${tailX+2} ${midY} Q ${tailX+5} ${midY-5} ${tailX+9} ${midY} Q ${tailX+5} ${midY+5} ${tailX+2} ${midY} Z" fill="${p.fin}"/>`;
    }

    if (f.spikes) {
        for (let i = 0; i < 4; i++) {
            const sx = x1 + headLen + 1 + i * 3;
            s += `<rect x="${sx}" y="${bodyY-1}" width="1" height="1" fill="${p.dark}"/>`;
        }
    }
    if (f.scutes) {
        for (let i = 0; i < 5; i++) {
            const sx = x1 + headLen + 3 + i * 4;
            s += `<rect x="${sx}" y="${bodyY-1}" width="2" height="2" fill="${p.dark}"/>`;
            s += `<rect x="${sx}" y="${bodyY+bodyH-1}" width="2" height="2" fill="${p.dark}"/>`;
        }
    }
    if (f.hump) {
        s += `<rect x="${x1+8}" y="${bodyY-2}" width="6" height="2" fill="${p.main}"/>`;
        s += `<rect x="${x1+9}" y="${bodyY-3}" width="4" height="1" fill="${p.main}"/>`;
    }
    if (f.slime) {
        for (let i = 0; i < 6; i++) {
            const sx = x1 + 5 + i * 3;
            const sy = bodyY + 2 + (i % 2) * 3;
            s += `<rect x="${sx}" y="${sy}" width="1" height="1" fill="#ffffff" opacity="0.4"/>`;
        }
    }

    if (isUndead) {
        const ribPositions = [6, 10, 14, 18];
        for (const rx of ribPositions) {
            const ribX = x1 + rx;
            if (ribX < x2 - 4) {
                s += `<rect x="${ribX}" y="${bodyY + 3}" width="1" height="${bodyH - 6}" fill="${UNDEAD_BONE}"/>`;
                s += `<rect x="${ribX + 1}" y="${bodyY + 3}" width="1" height="${bodyH - 6}" fill="${UNDEAD_BONE_DARK}" opacity="0.7"/>`;
                s += `<rect x="${ribX - 1}" y="${bodyY + 3}" width="3" height="1" fill="${UNDEAD_BONE}"/>`;
                s += `<rect x="${ribX - 1}" y="${bodyY + bodyH - 4}" width="3" height="1" fill="${UNDEAD_BONE}"/>`;
            }
        }
        s += `<rect x="${x1 + 4}" y="${cy}" width="${bodyLen - 8}" height="1" fill="${UNDEAD_BONE}" opacity="0.8"/>`;
        const woundPositions = [[8, 4], [16, bodyH - 6]];
        for (const [wx, wy] of woundPositions) {
            const woundX = x1 + wx;
            const woundY = bodyY + wy;
            if (woundX < x2 - 6 && woundY < bodyY + bodyH - 3) {
                s += `<rect x="${woundX}" y="${woundY}" width="4" height="3" fill="${UNDEAD_GUTS}"/>`;
                s += `<rect x="${woundX + 1}" y="${woundY + 1}" width="2" height="1" fill="${UNDEAD_GUTS_LIGHT}"/>`;
            }
        }
    }

    return 'data:image/svg+xml;utf8,' + encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges" ${scale !== 1 ? `width="${32*scale}" height="${32*scale}"` : ''}>${s}</svg>`
    );
}

// ========================================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ========================================================

function getFishForm(fishName) {
    const isUndead = fishName.toLowerCase().startsWith('нежить ');
    const baseName = isUndead ? fishName.substring(7).trim() : fishName;

    let form = null;
    for (const key in FISH_FORMS) {
        if (key.toLowerCase().replace('ё', 'е') === baseName.toLowerCase().replace('ё', 'е')) {
            form = FISH_FORMS[key];
            break;
        }
    }
    if (!form) form = FISH_FORMS['Плотва'];

    return { isUndead, baseName, form };
}

function getFishIcon(fishName, scale) {
    const info = getFishForm(fishName);

    if (info.isUndead) {
        // Используем индивидуальную палитру нежити, если есть
        const undeadKey = info.form.palette;
        if (typeof UNDEAD_FISH_PALETTES !== 'undefined' && UNDEAD_FISH_PALETTES[undeadKey]) {
            return makeFishSVGWithCustomPalette(UNDEAD_FISH_PALETTES[undeadKey], info.form, scale);
        }
        // Fallback на общую палитру нежити
        return makeFishSVG('undead', info.form, scale);
    }

    return makeFishSVG(info.form.palette, info.form, scale);
}
