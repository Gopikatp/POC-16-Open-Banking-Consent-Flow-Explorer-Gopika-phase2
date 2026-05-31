# UAT Checklist – Open Banking Consent Flow Explorer

## Project Information

**Project:** Open Banking Consent Flow Explorer

**POC Number:** 16

**Application Type:** Real Rails Intelligence Dashboard

**Tester:** Gopika T P

**Test Date:** May 2026

---

## Objective

This User Acceptance Testing (UAT) checklist validates that all required functionality, dashboard interactions, visualizations, intelligence panels, and export capabilities operate as expected.

---

## Dashboard Validation

| Test Case          | Expected Result                                    | Status |
| ------------------ | -------------------------------------------------- | ------ |
| Dashboard Loads    | Dashboard renders without errors                   | PASS   |
| Obsidian Theme     | Background uses #030712 theme                      | PASS   |
| 70/30 Layout       | Main stage and sidebar render correctly            | PASS   |
| Responsive Layout  | Dashboard remains usable on different screen sizes | PASS   |
| Sidebar Visibility | Intelligence sidebar remains visible               | PASS   |

---

## API Validation

| Test Case           | Expected Result                             | Status |
| ------------------- | ------------------------------------------- | ------ |
| Metrics API         | Active, Revoked, Expired values displayed   | PASS   |
| Consent API         | Consent records retrieved successfully      | PASS   |
| Scope API           | Scope analytics data retrieved successfully | PASS   |
| Token Analytics API | Token lifecycle data available              | PASS   |

---

## Visualization Validation

| Test Case            | Expected Result                 | Status |
| -------------------- | ------------------------------- | ------ |
| Scope Chart Renders  | Permission scope chart visible  | PASS   |
| Chart Data Accuracy  | Scope counts match backend data | PASS   |
| Consent Flow Diagram | Flow visualization visible      | PASS   |
| Tooltips Display     | Tooltips appear on hover        | PASS   |

---

## Consent Workflow Validation

| Test Case            | Expected Result                       | Status |
| -------------------- | ------------------------------------- | ------ |
| Audit Log Loads      | Consent records displayed             | PASS   |
| Select Consent       | Sidebar updates with selected consent | PASS   |
| Consent Details View | Selected consent information visible  | PASS   |
| Revoke Consent       | Consent status changes to revoked     | PASS   |
| Metrics Update       | Metrics reflect revocation action     | PASS   |
| Audit Log Update     | Audit history reflects status change  | PASS   |

---

## Filtering Validation

| Test Case        | Expected Result                      | Status |
| ---------------- | ------------------------------------ | ------ |
| Bank Filter      | Audit log updates correctly          | PASS   |
| Status Filter    | Audit log updates correctly          | PASS   |
| Scope Filter     | Audit log updates correctly          | PASS   |
| Multiple Filters | Combined filtering behaves correctly | PASS   |
| Filter Reset     | Dashboard returns to default state   | PASS   |

---

## Token Lifecycle Validation

| Test Case             | Expected Result                          | Status |
| --------------------- | ---------------------------------------- | ------ |
| Token Simulator Loads | Simulator visible                        | PASS   |
| Expiry Calculation    | Days remaining updates correctly         | PASS   |
| Expiry Warning        | Risk status changes appropriately        | PASS   |
| Expired State         | Expired status displayed when applicable | PASS   |

---

## Export Validation

| Test Case              | Expected Result                        | Status |
| ---------------------- | -------------------------------------- | ------ |
| Download JSON          | JSON file downloads successfully       | PASS   |
| Exported Data Accuracy | Downloaded data matches displayed data | PASS   |

---

## Intelligence Layer Validation

| Test Case                     | Expected Result                  | Status |
| ----------------------------- | -------------------------------- | ------ |
| Why This Matters Panel        | Information displayed correctly  | PASS   |
| Who Controls The Rail Panel   | Information displayed correctly  | PASS   |
| Dashboard Intelligence        | Contextual insights visible      | PASS   |
| Selected Consent Intelligence | Consent details update correctly | PASS   |

---

## Final Acceptance Summary

### Acceptance Criteria

* All required APIs operational
* All dashboard visualizations functional
* All filters working correctly
* Consent workflows validated
* Token lifecycle simulation operational
* Export functionality verified
* Intelligence sidebar functioning correctly

### Result

**Overall UAT Status:** PASS

The Open Banking Consent Flow Explorer satisfies all functional requirements defined for POC #16 and is approved for submission.

---

## Sign-off

**Tester:** Gopika T P

**Status:** APPROVED

**Ready for Submission:** YES
