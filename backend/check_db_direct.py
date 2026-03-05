import sqlite3
import os

def check_db():
    db_path = 'backend/sql_app.db'
    if not os.path.exists(db_path):
        print(f"Database not found at {db_path}")
        return

    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    try:
        # Check if table exists
        cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='index_documents'")
        if not cursor.fetchone():
            print("Table 'index_documents' does not exist")
            return

        # Check tickers
        cursor.execute("SELECT id, ticker FROM index_tickers")
        tickers = cursor.fetchall()
        print(f"Tickers found: {len(tickers)}")
        
        for t_id, ticker in tickers:
            cursor.execute("SELECT COUNT(*) FROM index_documents WHERE ticker_id = ?", (t_id,))
            count = cursor.fetchone()[0]
            print(f"Ticker {ticker} (ID {t_id}) has {count} documents")
            
            if count > 0:
                cursor.execute("SELECT title, url FROM index_documents WHERE ticker_id = ? LIMIT 2", (t_id,))
                docs = cursor.fetchall()
                for doc in docs:
                    print(f"  - {doc[0]} ({doc[1]})")
    except Exception as e:
        print(f"Error: {e}")
    finally:
        conn.close()

if __name__ == "__main__":
    check_db()
