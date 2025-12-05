from flask import jsonify, request, Blueprint
from keys import supabase
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash
from controller.validators import validate_password, validate_phone_number


Bp_modify = Blueprint('Bp_modify', __name__)



@Bp_modify.route('/update/<int:user_id>', methods=['PUT'])
@jwt_required()
def update_user(user_id):
    current_user_identity = get_jwt_identity()
    print(f"Usuario autenticado: {current_user_identity}")
    try:
        data = request.get_json()  
        
        allow_update = ['number', 'password_encrypted']

        check_user = supabase.table("User").select("id_user").eq("id_user", user_id).limit(1).execute()

        if not check_user.data:
            return jsonify({"message": f"User with ID {user_id} not found"}), 404

        update_data = {}
        
        for key, value in data.items(): 
            if key in allow_update:
                
                if key == 'password_encrypted':
                    is_valid, password_message = validate_password(value)
                    if not is_valid:
                        return jsonify({"message": password_message}), 400
                    hashed_password = generate_password_hash(value)
                    update_data[key] = hashed_password
                
                else:
                    update_data[key] = value

        if not update_data:
            return jsonify({"message": "No valid fields to update (only 'number' and 'password_encrypted' are allowed)"}), 400
        
        response = supabase.table("User").update(update_data).eq("id_user", user_id).execute()

        return jsonify({"message": "User updated successfully"}), 200
    
    except Exception as e:
        print(f"ERROR DE SUPABASE: {e}")
        return jsonify({"message": "Internal Server Error"}), 500

