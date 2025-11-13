from flask import Blueprint, request, jsonify
from keys import supabase
import os
from datetime import date, timedelta
import uuid
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()
plans_bp = Blueprint('plans', __name__) 
methods_bp = Blueprint('methods', __name__)
create_payment_bp = Blueprint('create_payment', __name__)
user_payments_bp = Blueprint('user_payments', __name__) 
exchange_bp = Blueprint('exchange', __name__)

# RUTAS DEL BLUEPRINT
@plans_bp.route('/', methods=['GET'])
def get_plans():
    """Obtener todos los planes activos"""
    try:
        response = supabase.table('subscription_plans')\
            .select('*')\
            .eq('active', True)\
            .execute()
        
        # Calcular precios en Bs.D para cada plan
        plans_with_bsd = []
        for plan in response.data:
            plan['price_bsd'] = payment_service.calculate_bsd_price(plan['price_usd'])
            plans_with_bsd.append(plan)
        
        return jsonify(plans_with_bsd), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@methods_bp.route('/', methods=['GET'])
def get_payment_methods():
    """Obtener métodos de pago activos"""
    try:
        response = supabase.table('payment_methods')\
            .select('*')\
            .eq('active', True)\
            .execute()
        
        return jsonify(response.data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@create_payment_bp.route('/', methods=['POST'])
def create_payment():
    """Crear una nueva intención de pago"""
    data = request.get_json()
    user_id = data.get('user_id')
    plan_id = data.get('plan_id')
    payment_method_id = data.get('payment_method_id')
    
    result, status_code = payment_service.create_payment_intent(
        user_id, plan_id, payment_method_id
    )
    
    return jsonify(result), status_code

@exchange_bp.route('/', methods=['GET']) 
def get_exchange_rate():
    """Obtener tasa de cambio actual"""
    return jsonify({
        'exchange_rate': payment_service.exchange_rate,
        'last_updated': date.today().isoformat()
    }), 200

@user_payments_bp.route('/<int:user_id>', methods=['GET'])
def get_user_payments(user_id):
    """Obtener historial de pagos del usuario"""
    try:
        response = supabase.table('payments').select('*, subscription_plans(*), payment_methods(*)').eq('id_user', user_id).order('created_at', desc=True).execute()
        
        return jsonify(response.data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
        
# src/routes/payments/payment_service.py
class _PaymentServiceStub:
    def __init__(self):
        self.exchange_rate = 24.5  # ejemplo: Bs.D por USD

    def calculate_bsd_price(self, price_usd):
        return round(price_usd * self.exchange_rate, 2)

    def create_payment_intent(self, user_id, plan_id, payment_method_id):
        # Simula la creación de una intención de pago
        intent = {
            "id": str(uuid.uuid4()),
            "user_id": user_id,
            "plan_id": plan_id,
            "payment_method_id": payment_method_id,
            "status": "requires_payment_method",
        }
        return {"intent": intent}, 201

payment_service = _PaymentServiceStub()
