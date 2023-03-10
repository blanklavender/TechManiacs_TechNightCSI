from bson import json_util
from flask import Blueprint, request
from db import entries
import json
from middleware import needs_auth

main = Blueprint('main', __name__)


@main.route('/get-entries', methods=['GET'])
@needs_auth()
def index(user):
    if request.method == "GET":
        return json_util.dumps(entries.find({}))


@main.route('/create-entry', methods=['POST'])
@needs_auth()
def set_entry(user):
    print(request.form)
    if request.method == 'POST':
        print(request.form)
        age = request.form['age']
        gender = request.form['gender']
        height = request.form['height']
        weight = request.form['weight']
        entries.insert_one({'username': user["email"], 'age': age, 'gender':gender, 'height': height, 'weight': weight})
        return {"message": "Done"}