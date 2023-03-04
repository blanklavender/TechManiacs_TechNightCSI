from functools import wraps
from flask import request, jsonify, session

def needs_auth():
    def decorator(f):
        @wraps(f)
        def wrapper(*args, **kwargs):
            # Check if user is authenticated
            user = get_authenticated_user(request)
            if not user:
                return jsonify({'message': 'Authentication required'}), 401
            
            # Call the protected route function
            return f(user, *args, **kwargs)
        return wrapper
    return decorator

def get_authenticated_user(request):
    # Your implementation to get the authenticated user
    # For example, using session:
    return session.get('user')
