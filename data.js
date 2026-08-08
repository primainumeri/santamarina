"use strict";

// ────────────────────────────────────────────────────────────────────────────
// CONFIGURAZIONE GLOBALE DEL SITO
// ────────────────────────────────────────────────────────────────────────────
var SITE = {
  title:       "Prima i numeri, poi il cemento — Guida civica al PUC di Santa Marina",
  description: "Quattro osservazioni al PUC di Santa Marina spiegate in parole semplici, con documenti completi, fonti e aggiornamenti sul procedimento.",
  canonical:   "https://santamarina.primainumeri.it/",
  version:     "1.0",
  lastUpdated: "6 agosto 2026",
  ogImage:     "QUALINUMERI.png",
};

// ────────────────────────────────────────────────────────────────────────────
// DOCUMENTI
// Per ogni documento: impostare published: true e compilare file, date,
// version, protocollo quando il documento è disponibile.
// ────────────────────────────────────────────────────────────────────────────
var DOCUMENTS = [
  {
    id:          "guida",
    title:       "Guida civica illustrata",
    description: "Le quattro osservazioni spiegate in parole semplici.",
    file:        "Prima_i_numeri_PUC_Santa_Marina_guida_civica.pdf",
    version:     "",
    date:        "",
    status:      "disponibile",
    protocollo:  "",
    pagine:      null,
    published:   true,
    highlight:   true,
  },
  {
    id:          "verbale-conferenza-2013",
    title:       "Verbale della Conferenza provinciale (2013)",
    description: "Documento richiamato nel primo aggiornamento tecnico sul fabbisogno residenziale complessivo di Santa Marina.",
    file:        "./20130606_Verbale_provincia_assegnazione_alloggi.pdf",
    version:     "",
    date:        "2013",
    status:      "disponibile",
    protocollo:  "",
    pagine:      null,
    published:   true,
    highlight:   false,
  },
  {
    id:          "obs1",
    title:       "Osservazione 1 — Nuove abitazioni private e AT/rcu",
    description: "Analisi delle previsioni di nuove abitazioni private e degli ambiti di trasformazione residenziale.",
    file:        "osservazione_1_without-ocr_redacted.pdf",
    version:     "",
    date:        "",
    status:      "disponibile",
    protocollo:  "",
    pagine:      null,
    published:   true,
    highlight:   false,
  },
  {
    id:          "obs2",
    title:       "Osservazione 2 — Edilizia sociale e AT/erp",
    description: "Analisi delle previsioni di edilizia residenziale pubblica.",
    file:        "osservazione_2_without-ocr_redacted.pdf",
    version:     "",
    date:        "",
    status:      "disponibile",
    protocollo:  "",
    pagine:      null,
    published:   true,
    highlight:   false,
  },
  {
    id:          "obs3",
    title:       "Osservazione 3 — Dimensionamento turistico e AT/prt",
    description: "Analisi delle previsioni turistico-ricettive.",
    file:        "osservazione_3_without-ocr_redacted.pdf",
    version:     "",
    date:        "",
    status:      "disponibile",
    protocollo:  "",
    pagine:      null,
    published:   true,
    highlight:   false,
  },
  {
    id:          "obs4",
    title:       "Osservazione 4 — Valutazione Ambientale Strategica",
    description: "Analisi del Rapporto ambientale e della Sintesi non tecnica della VAS.",
    file:        "osservazione_4_without-ocr_redacted.pdf",
    version:     "",
    date:        "",
    status:      "disponibile",
    protocollo:  "",
    pagine:      null,
    published:   true,
    highlight:   false,
  },
];

// ────────────────────────────────────────────────────────────────────────────
// ATTI SUCCESSIVI
// Aggiungere qui nota al Commissario (oscurata nei dati sensibili),
// ricevute, risposte e controdeduzioni.
// La sezione appare nella pagina solo quando almeno un atto ha published: true.
// Esempio:
// {
//   id: "nota-commissario", title: "Nota al Commissario",
//   description: "Richiesta di valutazione separata delle quattro osservazioni.",
//   file: "documents/nota-commissario.pdf", version: "1.0", date: "",
//   status: "protocollata", protocollo: "", pagine: null, published: false,
// },
// ────────────────────────────────────────────────────────────────────────────
var SUBSEQUENT_ACTS = [];

// ────────────────────────────────────────────────────────────────────────────
// AGGIORNAMENTI
// Ordinare con la data ISO (YYYY-MM-DD): i più recenti hanno dataISO maggiore.
// ────────────────────────────────────────────────────────────────────────────
var UPDATES = [
  {
    id: "contributo-tecnico-1-2026-08-05",
    dateISO: "2026-08-05",
    dateLabel: "05 agosto 2026",
    title: "Contributo tecnico 1",
    paragraphs: [
      {
        textBefore: "Un architetto interessato al tema ha condiviso il ",
        linkLabel: "verbale della Conferenza provinciale del 2013",
        linkHref: "./index.html#documenti",
        textAfter: ", che indica espressamente per Santa Marina un fabbisogno residenziale di 90 alloggi, riferito a un orizzonte decennale e soggetto a verifica quinquennale.",
      },
      "Secondo il contributo, i 90 alloggi rappresentano il fabbisogno complessivo da attuare nel periodo del PUC, distribuendone eventualmente la realizzazione nel tempo.",
      "Restano da chiarire l'aggiornamento dei dati demografici, la ripartizione tra 54 alloggi privati e 36 ERP e il rapporto con il patrimonio esistente e recuperabile. I rilievi ricevuti rafforzano inoltre le richieste di chiarimento sul dimensionamento turistico e sulla qualità della VAS.",
    ],
  },
  {
    id: "contributo-tecnico-2-2026-08-05",
    dateISO: "2026-08-05",
    dateLabel: "05 agosto 2026",
    title: "Contributo tecnico 2",
    paragraphs: [
      "Un geologo interessato al tema ha evidenziato che il PUC contiene un quadro generale geologico e idrogeologico, ma non una valutazione quantitativa degli effetti delle nuove trasformazioni sulle acque meteoriche, sui fossi, sulle condotte e sui recapiti esistenti.",
      "Secondo il contributo, i calcoli di dettaglio possono essere rinviati ai piani attuativi o ai singoli progetti, ma il PUC dovrebbe già chiarire la fattibilità generale degli interventi.",
      "Ogni nuova edificazione dovrebbe quindi essere subordinata alla verifica delle portate prima e dopo l'impermeabilizzazione, della capacità dei recapiti e alla realizzazione delle opere necessarie. In caso di esito negativo, le previsioni dovrebbero essere ridotte, modificate o non attuate.",
    ],
  },
];

// ────────────────────────────────────────────────────────────────────────────
// STATO DEL PROCEDIMENTO
// Per ogni passaggio: impostare status ("completed" | "current" | "pending")
// e compilare description, date, protocollo, link quando disponibili.
// Esempio di voce aggiornata:
// { id: "deposito", label: "Deposito al protocollo", status: "completed",
//   description: "Quattro osservazioni depositate allo sportello del Comune.",
//   date: "luglio 2025", protocollo: "PROT/2025/XXXX", link: "" },
// ────────────────────────────────────────────────────────────────────────────
var TIMELINE = [
  { id: "lettura",          label: "Lettura degli elaborati",             status: "completed", description: "", date: "", protocollo: "", link: "" },
  { id: "preparazione",    label: "Preparazione delle osservazioni",     status: "completed", description: "", date: "", protocollo: "", link: "" },
  { id: "deposito",        label: "Deposito al protocollo",              status: "completed", description: "", date: "", protocollo: "", link: "" },
  { id: "nota",            label: "Nota al Commissario",                 status: "completed", description: "", date: "", protocollo: "", link: "" },
  { id: "incontro",        label: "Richiesta di incontro tecnico",       status: "pending", description: "", date: "", protocollo: "", link: "" },
  { id: "esame",           label: "Esame delle osservazioni",            status: "pending", description: "", date: "", protocollo: "", link: "" },
  { id: "controdeduzioni", label: "Pubblicazione delle controdeduzioni", status: "pending", description: "", date: "", protocollo: "", link: "" },
  { id: "verifica",        label: "Verifica delle risposte",             status: "pending", description: "", date: "", protocollo: "", link: "" },
];

// ────────────────────────────────────────────────────────────────────────────
// FONTI
// Aggiungere l'URL ufficiale quando disponibile; lasciare "" per ometterlo.
// Non inventare URL.
// ────────────────────────────────────────────────────────────────────────────
var SOURCES = {
  puc: {
    label: "PUC di Santa Marina",
    items: [
      { label: "R.01 — Relazione generale",         url: "" },
      { label: "NTA — Norme Tecniche di Attuazione", url: "" },
      { label: "PO.02.a",                            url: "" },
      { label: "PO.02.b",                            url: "" },
      { label: "PO.02.c",                            url: "" },
      { label: "PO.03",                              url: "" },
      { label: "R.06 — Rapporto ambientale VAS",     url: "" },
      { label: "R.06.all.2 — Sintesi non tecnica VAS", url: "" },
    ],
  },
  ptcp: {
    label: "PTCP — Piano Territoriale di Coordinamento Provinciale",
    items: [
      { label: "PTCP Provincia di Salerno",                  url: "" },
      { label: "Articoli richiamati nelle osservazioni",     url: "" },
      { label: "Verbale della Conferenza provinciale (2013)", url: "./20130606_Verbale_provincia_assegnazione_alloggi.pdf" },
    ],
  },
  vas: {
    label: "VAS — Valutazione Ambientale Strategica",
    items: [
      { label: "Direttiva 2001/42/CE",                    url: "https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32001L0042" },
      { label: "D.Lgs. 152/2006 (Codice dell'ambiente)",  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2006-04-03;152" },
      { label: "Regolamento Regione Campania n. 17/2009", url: "" },
    ],
  },
  erp: {
    label: "ERP ed espropri",
    items: [
      { label: "D.P.R. 327/2001 (limitatamente agli aspetti richiamati)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:2001-06-08;327" },
    ],
  },
};
