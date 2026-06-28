from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import requests
import time

URL = "https://openbank-frontend.calmcoast-c9142dd2.centralindia.azurecontainerapps.io"
API = "https://openbank-backend.calmcoast-c9142dd2.centralindia.azurecontainerapps.io/api/metrics"

results = []

options = Options()
options.add_argument("--start-maximized")

driver = webdriver.Chrome(options=options)
wait = WebDriverWait(driver, 30)

try:
    driver.get(URL)

    wait.until(
        EC.presence_of_element_located(
            (By.TAG_NAME, "body")
        )
    )

    results.append("PASS - Page Loaded")

    wait.until(
        EC.presence_of_element_located(
            (
                By.XPATH,
                "//*[contains(text(),'Open Banking Consent Flow Explorer')]"
            )
        )
    )

    results.append("PASS - Dashboard Title")

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

    results.append("PASS - Metrics Cards")

    wait.until(
        EC.presence_of_element_located(
            (
                By.ID,
                "scope-chart"
            )
        )
    )

    results.append("PASS - Scope Chart")

    wait.until(
        EC.presence_of_element_located(
            (
                By.ID,
                "consent-flow-diagram"
            )
        )
    )

    results.append("PASS - Consent Flow Diagram")

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

    results.append("PASS - Audit Log Visible")

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

    panel = wait.until(
        EC.presence_of_element_located(
            (
                By.CSS_SELECTOR,
                '[data-testid="intelligence-panel"]'
            )
        )
    )

    wait.until(
        lambda d: "translate-x-0" in panel.get_attribute("class")
    )

    results.append("PASS - Intelligence Panel Opened")

    response = requests.get(API)

    if response.status_code == 200:
        results.append("PASS - Backend API")
    else:
        results.append("FAIL - Backend API")

except Exception as e:

    results.append(f"FAIL - {e}")

    driver.save_screenshot("Failure.png")

finally:

    with open("Test_Report.txt", "w") as report:

        report.write("POC 16 Selenium Test Report\n")
        report.write("=" * 40 + "\n\n")

        for item in results:
            report.write(item + "\n")

    driver.quit()

print("\n".join(results))
print("\nTest_Report.txt generated.")