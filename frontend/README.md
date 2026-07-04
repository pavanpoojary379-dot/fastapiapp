npm install vite@latest
npm create vite@latest talentspark
cd talentspark/
npm run dev




Architecture
backend/
    app/
    --main.py
    --database.py
models/
    --users.py
    --company.py
    --job.py
routers/
    --users.py
    --company.py
    --job.py
utils/
    --token.py
    --security.py
    --oauth2.py
    