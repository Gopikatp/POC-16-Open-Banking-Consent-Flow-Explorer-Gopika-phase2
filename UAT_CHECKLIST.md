# UAT Checklist – Open Banking Consent Flow Explorer

## Project Information

**Project:** Open Banking Consent Flow Explorer

**POC Number:** 16

**Application Type:** Infocreon Cinematic Intelligence Platform

**Tester:** Gopika T P

**Batch:** Batch 3 Interns

**Test Date:** June 2026

---

## Objective

This User Acceptance Testing checklist validates dashboard functionality, API integration, visualization rendering, intelligence workflows, Docker deployment, and overall Phase 2 readiness.

---

## Dashboard Validation

| Test Case                  | Expected Result                           | Status |
| -------------------------- | ----------------------------------------- | ------ |
| Dashboard Loads            | Dashboard renders without errors          | PASS   |
| Cinematic Interface Loads  | Full-screen experience renders correctly  | PASS   |
| Dynamic Intelligence Panel | Opens and closes correctly                | PASS   |
| Professional Dark Theme    | High contrast styling displayed correctly | PASS   |
| Responsive Layout          | Dashboard usable across screen sizes      | PASS   |
| Developer Signature Modal  | Metadata modal opens correctly            | PASS   |
| Infocreon Branding         | Branding displayed correctly              | PASS   |

---

## API Validation

| Test Case             | Expected Result                           | Status |
| --------------------- | ----------------------------------------- | ------ |
| Metrics API           | Active, Revoked, Expired values displayed | PASS   |
| Consent API           | Consent records retrieved successfully    | PASS   |
| Scope API             | Scope analytics retrieved successfully    | PASS   |
| Token Analytics API   | Token lifecycle data retrieved            | PASS   |
| Swagger Documentation | API documentation accessible              | PASS   |

---

## Visualization Validation

| Test Case            | Expected Result                 | Status |
| -------------------- | ------------------------------- | ------ |
| Scope Chart Renders  | Permission scope chart visible  | PASS   |
| Chart Data Accuracy  | Scope counts match backend data | PASS   |
| Consent Flow Diagram | Flow visualization visible      | PASS   |
| Tooltips Display     | Tooltips appear on hover        | PASS   |
| Metrics Cards Render | Metrics displayed accurately    | PASS   |

---

## Consent Workflow Validation

| Test Case            | Expected Result                      | Status |
| -------------------- | ------------------------------------ | ------ |
| Audit Log Loads      | Consent records displayed            | PASS   |
| Select Consent       | Intelligence panel updates correctly | PASS   |
| Consent Details View | Selected consent visible             | PASS   |
| Revoke Consent       | Consent status changes               | PASS   |
| Metrics Update       | Dashboard metrics update             | PASS   |
| Audit Log Update     | Audit history reflects changes       | PASS   |

---

## Filtering Validation

| Test Case        | Expected Result                    | Status |
| ---------------- | ---------------------------------- | ------ |
| Bank Filter      | Audit log filtered correctly       | PASS   |
| Status Filter    | Audit log filtered correctly       | PASS   |
| Scope Filter     | Audit log filtered correctly       | PASS   |
| Multiple Filters | Combined filtering works           | PASS   |
| Filter Reset     | Dashboard returns to default state | PASS   |

---

## Token Lifecycle Validation

| Test Case             | Expected Result           | Status |
| --------------------- | ------------------------- | ------ |
| Token Simulator Loads | Simulator visible         | PASS   |
| Expiry Calculation    | Days remaining calculated | PASS   |
| Expiry Warning        | Risk indicator updates    | PASS   |
| Expired State         | Expired status displayed  | PASS   |

---

## Export Validation

| Test Case       | Expected Result               | Status |
| --------------- | ----------------------------- | ------ |
| Download JSON   | File downloads successfully   | PASS   |
| Export Accuracy | Export matches displayed data | PASS   |

---

## Intelligence Layer Validation

| Test Case                     | Expected Result                  | Status |
| ----------------------------- | -------------------------------- | ------ |
| Why This Matters              | Information displayed correctly  | PASS   |
| Who Controls The Rail         | Information displayed correctly  | PASS   |
| Dashboard Intelligence        | Contextual insights visible      | PASS   |
| Selected Consent Intelligence | Consent details update correctly | PASS   |
| Dynamic Intelligence Panel    | Opens and closes correctly       | PASS   |

---

## Docker Deployment Validation

| Test Case                 | Expected Result                      | Status |
| ------------------------- | ------------------------------------ | ------ |
| Docker Installed          | Docker operational                   | PASS   |
| Docker Compose Installed  | Compose operational                  | PASS   |
| WSL2 Integration          | Functional                           | PASS   |
| Backend Image Build       | Image created successfully           | PASS   |
| Frontend Image Build      | Image created successfully           | PASS   |
| Docker Compose Build      | Build completed successfully         | PASS   |
| Backend Container Starts  | Container running                    | PASS   |
| Frontend Container Starts | Container running                    | PASS   |
| Container Networking      | Services communicate successfully    | PASS   |
| Frontend Accessible       | http://localhost:3000 reachable      | PASS   |
| Backend Accessible        | http://localhost:8000 reachable      | PASS   |
| Swagger Accessible        | http://localhost:8000/docs reachable | PASS   |
| API Communication         | Frontend receives backend data       | PASS   |
| Container Restart Test    | Application remains functional       | PASS   |

---

## Local Container Mirror Validation

| Test Case                  | Expected Result | Status |
| -------------------------- | --------------- | ------ |
| Local Mirror Build         | Successful      | PASS   |
| Frontend Service Available | PASS            |        |
| Backend Service Available  | PASS            |        |
| API Endpoints Reachable    | PASS            |        |
| Docker Network Functional  | PASS            |        |

---

## Developer Signature Validation

| Test Case                   | Expected Result            | Status |
| --------------------------- | -------------------------- | ------ |
| Developer Name Displayed    | Correct name displayed     | PASS   |
| PoC ID Displayed            | Correct PoC ID displayed   | PASS   |
| GitHub Username Displayed   | Correct username displayed | PASS   |
| Batch Information Displayed | Correct batch displayed    | PASS   |
| Technology Stack Displayed  | Correct stack displayed    | PASS   |

---

## Selenium Automation Checklist

- [x] Application launches successfully
- [x] Dashboard renders correctly
- [x] Metrics cards display correctly
- [x] Charts render correctly
- [x] Consent Flow Diagram renders
- [x] Audit Log loads
- [x] Intelligence Panel interaction verified
- [x] Backend API communication verified
- [x] Automated Selenium execution completed successfully

---

## Final Acceptance Summary

### Acceptance Criteria

* Dashboard operational
* API endpoints operational
* Visualizations functional
* Intelligence panel functional
* Consent workflows validated
* Token lifecycle simulation operational
* Export functionality verified
* Docker deployment verified
* Local Container Mirror verified
* Developer Signature requirements satisfied

---

## Result

### Overall UAT Status: PASS

The Open Banking Consent Flow Explorer satisfies all functional and deployment requirements for PoC #16 Phase 2.

---

## Sign-Off

**Tester:** Gopika T P

**PoC ID:** 16

**Status:** APPROVED

**Ready for Submission:** YES

**Ready for Cloud Deployment Preparation:** YES

**Ready for Phase 2 Evaluation:** YES
