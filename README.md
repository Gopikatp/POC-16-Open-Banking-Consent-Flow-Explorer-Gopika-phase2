# Open Banking Consent Flow Explorer

Real Rails Intelligence Dashboard for visualizing Open Banking consent management, permission scopes, token lifecycle events, and audit workflows.

---


## Dashboard Preview

![Dashboard Preview](screenshots/Dashboard.png)

---

## Overview

Open Banking Consent Flow Explorer is an intelligence dashboard that visualizes how customer consent is managed within Open Banking ecosystems.

The dashboard provides operational visibility into:

* Consent status tracking
* Permission scope analytics
* Token lifecycle monitoring
* Consent revocation workflows
* Audit history
* Open Banking consent flow visualization

The project follows the Real Rails Intelligence Dashboard architecture using a FastAPI backend and Next.js frontend.

---

## Technology Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui
* Recharts
* Axios

### Backend

* FastAPI
* Python
* Pandas

---

## Data Sources

The project references publicly available Open Banking resources and uses synthetic data where event-level data is unavailable.

Sources:

* Open Banking UK
* Plaid Documentation
* TrueLayer Documentation

Mock Data:

* Synthetic user consent events
* Token refresh history
* Consent status records

---

## Features

### Permission Scope Analytics

Visualizes distribution of Open Banking permission scopes.

Examples:

* accounts.read
* balances.read
* transactions.read
* payments.write

---

### Consent Audit Log

Displays consent history including:

* Consent ID
* Bank
* Scope
* Status

Selecting a consent updates the intelligence sidebar.

---

### Token Expiry Simulator

Allows simulation of token lifetime.

Displays:

* Days remaining
* Expiry status
* Risk indicators

---

### Consent Revocation Workflow

Users can revoke consent and immediately observe:

* Status updates
* Metric updates
* Dashboard changes

---

### Dashboard Filters

Supports filtering by:

#### Bank

* HSBC
* Barclays
* Lloyds
* Monzo
* Santander

#### Status

* Active
* Expired
* Revoked

#### Scope

* accounts.read
* balances.read
* transactions.read
* payments.write

---

### Download Sample Data

Exports currently filtered consent records as:

```json
consents.json
```

---

### Consent Flow Visualization

Illustrates the Open Banking data-sharing process:

Customer

↓

Consent Granted

↓

Bank

↓

Aggregator

↓

Third Party App

---

### Intelligence Sidebar

Provides contextual insights:

* Why This Matters
* Who Controls The Rail
* Dashboard Intelligence
* Selected Consent Details

---

## Dashboard Layout

The application follows the Real Rails dashboard standard.

### Main Stage (70%)

* Metrics Cards
* Permission Scope Chart
* Consent Flow Diagram
* Audit Log

### Intelligence Sidebar (30%)

* Why This Matters
* Who Controls The Rail
* Selected Consent
* Token Simulator
* Dashboard Intelligence
* Filters
* Download Data

---

## System Architecture

```text
Frontend (Next.js)
        │
        ▼
FastAPI Backend
        │
        ▼
Mock Consent Dataset
        │
        ▼
Analytics + Visualizations
```

---

## API Endpoints

### Metrics

```http
GET /api/metrics
```

### Consent Records

```http
GET /api/consents
```

### Permission Scopes

```http
GET /api/scopes
```

### Token Analytics

```http
GET /api/token-analytics
```

---

## Project Structure

```text
POC-16-Open-Banking-Consent-Flow-Explorer

├── backend
├── frontend
├── screenshots
│   └── dashboard.png
├── README.md
├── VAR_REPORT.md
└── UAT_CHECKLIST.md
```

---

## Local Setup

### Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Runs on:

```text
http://localhost:8000
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Runs on:

```text
http://localhost:3000
```

---

## Validation

The project includes:

* VAR_REPORT.md
* UAT_CHECKLIST.md

These documents validate visualization quality and user acceptance testing requirements.

---

## Future Enhancements

* Real Open Banking provider integrations
* OAuth consent flow simulation
* Real-time token lifecycle monitoring
* Regulatory compliance insights
* Multi-bank consent analytics

---

## Author

**Gopika T P**

POC #16 – Open Banking Consent Flow Explorer

Real Rails Intelligence Library
