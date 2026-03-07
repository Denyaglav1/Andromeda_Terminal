import requests
import sys

def check_api():
    base_url = "http://localhost:8000"
    endpoints = ["/", "/api/indices", "/api/companies", "/health"]
    
    for endpoint in endpoints:
        url = base_url + endpoint
        try:
            response = requests.get(url, timeout=5)
            print(f"GET {endpoint}: {response.status_code}")
            if response.status_code == 200:
                print(f" - Response length: {len(response.text)}")
                if endpoint == "/api/companies":
                    data = response.json()
                    print(f" - Found {len(data)} companies")
            else:
                print(f" - Content: {response.text[:100]}")
        except Exception as e:
            print(f"GET {endpoint}: Failed - {e}")

if __name__ == "__main__":
    check_api()
