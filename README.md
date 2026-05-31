# Open Banking Consent Flow Explorer

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

### Backend

* FastAPI
* Python

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

The application follows the Real Rails standard:

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

These documents validate compliance with project requirements and user acceptance testing.

---

## Author

Gopika T P

POC 16 – Open Banking Consent Flow Explorer
