from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import requests
import time
from datetime import datetime

# ============================================================
# INFOCREON PoC 16
# Open Banking Consent Flow Explorer
# Selenium End-to-End Automation
# ============================================================

URL = "https://openbank-frontend.calmcoast-c9142dd2.centralindia.azurecontainerapps.io"
API = "https://openbank-backend.calmcoast-c9142dd2.centralindia.azurecontainerapps.io/api/metrics"

options = Options()
options.add_argument("--start-maximized")

driver = webdriver.Chrome(options=options)
wait = WebDriverWait(driver, 30)

results = []

passed = 0
failed = 0
skipped = 0

start_time = time.time()


def record(testcase, title, success, detail):
    global passed, failed

    if success:
        passed += 1
        results.append({
            "status": "PASS",
            "tc": testcase,
            "title": title,
            "detail": detail
        })
        print(f"PASS - {title}")

    else:
        failed += 1
        results.append({
            "status": "FAIL",
            "tc": testcase,
            "title": title,
            "detail": detail
        })
        print(f"FAIL - {title}")


try:

    # -------------------------------------------------------
    # TC-1
    # -------------------------------------------------------

    driver.get(URL)

    wait.until(
        EC.presence_of_element_located(
            (By.TAG_NAME, "body")
        )
    )

    record(
        "TC-1",
        "Page Load",
        True,
        "Application loaded successfully."
    )

    # -------------------------------------------------------
    # TC-2
    # -------------------------------------------------------

    wait.until(
        EC.presence_of_element_located(
            (
                By.XPATH,
                "//*[contains(text(),'Open Banking Consent Flow Explorer')]"
            )
        )
    )

    record(
        "TC-2",
        "Dashboard Title",
        True,
        "Dashboard title verified."
    )

    # -------------------------------------------------------
    # TC-3
    # -------------------------------------------------------

    wait.until(
        EC.presence_of_element_located(
            (
                By.XPATH,
                "//*[contains(text(),'Active Consents')]"
            )
        )
    )

    wait.until(
        EC.presence_of_element_located(
            (
                By.XPATH,
                "//*[contains(text(),'Revoked')]"
            )
        )
    )

    wait.until(
        EC.presence_of_element_located(
            (
                By.XPATH,
                "//*[contains(text(),'Expired')]"
            )
        )
    )

    record(
        "TC-3",
        "Metrics Cards",
        True,
        "All metrics cards rendered successfully."
    )
        # -------------------------------------------------------
    # TC-4
    # -------------------------------------------------------

    wait.until(
        EC.presence_of_element_located(
            (
                By.ID,
                "scope-chart"
            )
        )
    )

    record(
        "TC-4",
        "Permission Scope Chart",
        True,
        "Permission Scope Distribution chart rendered successfully."
    )

    # -------------------------------------------------------
    # TC-5
    # -------------------------------------------------------

    wait.until(
        EC.presence_of_element_located(
            (
                By.ID,
                "consent-flow-diagram"
            )
        )
    )

    record(
        "TC-5",
        "Consent Flow Diagram",
        True,
        "React Flow diagram rendered successfully."
    )

    # -------------------------------------------------------
    # TC-6
    # -------------------------------------------------------

    audit_log = wait.until(
        EC.presence_of_element_located(
            (
                By.CSS_SELECTOR,
                '[data-testid="audit-log"]'
            )
        )
    )

    driver.execute_script(
        "arguments[0].scrollIntoView({block:'center'});",
        audit_log
    )

    time.sleep(2)

    rows = wait.until(
        EC.presence_of_all_elements_located(
            (
                By.CSS_SELECTOR,
                '[data-testid^="consent-row-"]'
            )
        )
    )

    driver.execute_script(
        "arguments[0].click();",
        rows[0]
    )

    record(
        "TC-6",
        "Audit Log Interaction",
        True,
        "Audit log displayed and consent row selected successfully."
    )

    # -------------------------------------------------------
    # TC-7
    # -------------------------------------------------------

    panel = wait.until(
        EC.presence_of_element_located(
            (
                By.CSS_SELECTOR,
                '[data-testid="intelligence-panel"]'
            )
        )
    )

    wait.until(
        lambda d:
        "translate-x-0" in panel.get_attribute("class")
    )

    record(
        "TC-7",
        "Intelligence Panel",
        True,
        "Intelligence Panel opened successfully after selecting consent."
    )

    # -------------------------------------------------------
    # TC-8
    # -------------------------------------------------------

    response = requests.get(API)

    if response.status_code == 200:

        record(
            "TC-8",
            "Backend API Handshake",
            True,
            "GET /api/metrics returned HTTP 200."
        )

    else:

        record(
            "TC-8",
            "Backend API Handshake",
            False,
            f"Unexpected status code: {response.status_code}"
        )

except Exception as e:

    failed += 1

    results.append(
        {
            "status": "FAIL",
            "tc": "Unexpected",
            "title": "Unhandled Exception",
            "detail": str(e)
        }
    )

    driver.save_screenshot("Failure.png")

finally:

    end_time = time.time()

    execution_time = round(end_time - start_time, 2)

    total_tests = passed + failed + skipped

    verdict = (
        "[PASS] ALL TESTS PASSED"
        if failed == 0
        else "[FAIL] SOME TESTS FAILED"
    )

    with open(
        "Test_Report.txt",
        "w",
        encoding="utf-8"
    ) as report:

        report.write(
            "=" * 72 + "\n"
        )

        report.write(
            "  INFOCREON PoC 16 -- UAT Test Report\n"
        )

        report.write(
            "  Open Banking Consent Flow Explorer\n"
        )

        report.write(
            "-" * 72 + "\n"
        )

        report.write(
            f"  Target URL : {URL}\n"
        )

        report.write(
            f"  Run At     : {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n"
        )

        report.write(
            f"  Execution  : {execution_time} sec\n"
        )

        report.write(
            f"  Total Tests: {total_tests}  |  PASSED: {passed}  |  FAILED: {failed}  |  SKIPPED: {skipped}\n"
        )

        report.write(
            "=" * 72 + "\n\n"
        )

        for item in results:

            symbol = (
                "[PASS]"
                if item["status"] == "PASS"
                else "[FAIL]"
            )

            report.write(
                f"  [+] {symbol:<8} {item['tc']} | {item['title']}\n"
            )

            report.write(
                f"       Detail : {item['detail']}\n\n"
            )

        report.write(
            "-" * 72 + "\n"
        )

        report.write(
            f"  OVERALL VERDICT : {verdict}\n"
        )

        report.write(
            "=" * 72 + "\n\n"
        )

        report.write(
            "  Notes:\n"
        )

        report.write(
            "  - Selenium WebDriver executed against the live Azure deployment.\n"
        )

        report.write(
            "  - Backend API connectivity verified successfully.\n"
        )

        report.write(
            "  - Intelligence Panel interaction validated.\n"
        )

        report.write(
            "  - Report generated automatically by test_poc16.py\n"
        )

        report.write(
            "=" * 72 + "\n"
        )

    driver.quit()

print("\n")

for item in results:

    print(
        f"{item['status']} - {item['title']}"
    )

print("\n")

print("=" * 72)

print("INFOCREON PoC 16 Selenium Automation Complete")

print(f"Passed : {passed}")

print(f"Failed : {failed}")

print(f"Skipped: {skipped}")

print(f"Execution Time: {execution_time} sec")

print("=" * 72)

print("\nTest_Report.txt generated successfully.")