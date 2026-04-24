from flask import Flask
from flask_cors import CORS
from config import Config
from models import db, Produto
from routes import routes
from flask_migrate import Migrate


app = Flask(__name__)
app.config.from_object(Config)

CORS(app)  # Permite Angular acessar

db.init_app(app)

Migrate = Migrate(app, db)

with app.app_context():
    db.create_all()  # cria banco automaticamente

app.register_blueprint(routes, url_prefix='/')

if __name__ == '__main__':
    app.run(debug=True)

@app.route('/')
def home():
    return {"msg": "API rodando"}