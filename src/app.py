from flask import Flask, jsonify, request
from flask_cors import CORS
from routes.Bp_modify import Bp_modify
from routes.sign_up import sign_up
from routes.delete_user import delete_user
from routes.get_users import get_users
from routes.login import login
from routes.payments import plans_bp, methods_bp, create_payment_bp, user_payments_bp, exchange_bp 
from keys import supabase
from dotenv import load_dotenv
from supabase import create_client, Client
import os


load_dotenv()

app = Flask(__name__)
CORS(app)



supabase_url = os.environ.get('SUPABASE_URL')
supabase_key = os.environ.get('SUPABASE_KEY')

if not supabase_url or not supabase_key:
    raise RuntimeError('Set url and key environment variables')

supabase = create_client(supabase_url, supabase_key)


app.register_blueprint(Bp_modify, url_prefix='/api/user')
app.register_blueprint(plans_bp, url_prefix='/api/payments/plans') 
app.register_blueprint(methods_bp, url_prefix='/api/payments/methods') 
app.register_blueprint(create_payment_bp, url_prefix='/api/payments/create')
app.register_blueprint(user_payments_bp, url_prefix='/api/payments/user') 
app.register_blueprint(exchange_bp, url_prefix='/api/exchange/rate') 
app.register_blueprint(sign_up, url_prefix='/signup')
app.register_blueprint(delete_user, url_prefix='/user/delete')
app.register_blueprint(get_users, url_prefix= '/user')
app.register_blueprint(login, url_prefix='/login')




@app.route('/api/users', methods=['GET'])
def get_all_users():
    try:
        response = supabase.table('User').select('*').execute()
        user_data = response.data
        
        if user_data:
            return jsonify(user_data), 200
        else:
            return jsonify({"message": "No users found"}), 404

    except Exception as e:
        print(f"ERROR DE SUPABASE: {e}")
        return jsonify({"message": "Internal Server Error"}), 500



if __name__ == '__main__':
    app.run(debug=True)