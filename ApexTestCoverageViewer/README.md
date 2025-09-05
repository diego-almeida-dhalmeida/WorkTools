````markdown
# Apex Test Coverage Viewer

A lightweight **HTML + Vanilla JavaScript** tool to visualize Apex test coverage.  
It accepts data from Salesforce Tooling API (or any exported file) and renders it in an interactive coverage table.

---

## ✨ Features

- **Multiple input formats**:
  - **JSON** (direct from Tooling API query results).
  - **CSV or TSV** (raw exports).
- **Main table**:
  - Displays all classes/triggers with covered lines, uncovered lines, and coverage percentage.
  - Rows with **coverage < 80% are highlighted in red**.
  - Search by name in real time.
  - Select rows with checkboxes (individual, all visible, or all).
- **Refined table**:
  - Shows only selected items.
  - Calculates totals and average coverage for the selected subset.
  - Export refined results to **CSV**.
- **Modern UI** with dark theme, no external dependencies.
- **Tooling API integration** (manual):  
  The exact SOQL query you need is:
  ```sql
  SELECT ApexClassOrTrigger.Name, NumLinesCovered, NumLinesUncovered
  FROM ApexCodeCoverageAggregate
````

> ⚠️ Authentication and execution of this query must be done outside the tool (e.g., with `sfdx force:data:soql:query -t -q "..." --json`).
> Paste the exported JSON/CSV/TSV into the textarea.

---

## 🚀 How to Use

1. Download or clone this repository or access the link https://diego-almeida-dhalmeida.github.io/WorkTools/ApexTestCoverageViewer/index.html.
2. Open [`coverage.html`](coverage.html) in your browser.
3. Paste your data (JSON, CSV, or TSV) into the **Input** textarea.
4. Click **Load Data**.
5. Use the search and checkboxes to refine the selection.

---

## 📦 Input Examples

### JSON (from Tooling API)

```json
[
  {"ApexClassOrTrigger.Name":"AccountTrigger","NumLinesCovered":5,"NumLinesUncovered":1},
  {"ApexClassOrTrigger.Name":"ATL_Utils","NumLinesCovered":92,"NumLinesUncovered":446}
]
```

### CSV

```csv
ApexClassOrTrigger.Name,NumLinesCovered,NumLinesUncovered
AccountTrigger,5,1
ATL_Utils,92,446
```

### TSV

```tsv
ApexClassOrTrigger.Name	NumLinesCovered	NumLinesUncovered
AccountTrigger	5	1
ATL_Utils	92	446
```

---

## 📊 Output

* Each row shows:

  * Class/Trigger name
  * Covered lines
  * Uncovered lines
  * Coverage percentage
* **>= 80% coverage → green**
* **< 80% coverage → red**

---

## 🔧 Roadmap

* [ ] Direct login and query execution with Salesforce Tooling API.
* [ ] Filters by coverage percentage ranges.
* [ ] Visual charts (bar/pie).
* [ ] File upload instead of paste-only.

---

## 📝 License

MIT — use, fork, and break it freely. Just remember: if your coverage is 2%, the problem isn’t this tool.

```

Do you want me to also update the **HTML code** itself so it can auto-detect TSV/CSV and parse it correctly, or just keep the README at this point?
```
