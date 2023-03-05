from bson import json_util
from flask import Blueprint, request
from db import entries
import json
from middleware import needs_auth

main = Blueprint('main', __name__)


@main.route('/get-entries/', methods=['GET'])
@needs_auth()
def index(user):
    if request.method == "GET":
        return json_util.dumps(entries.find({}))


@main.route('/entry', methods=['POST'])
@needs_auth()
def set_entry(user):
    if request.method == 'POST':
        age = request.form.get['age']
        gender = request.form.get['gender']
        height = request.form.get['height']
        weight = request.form.get['weight']
        new_entry = {'username': user["email"], 'age': age, 'gender': gender, 'height': height, 'weight' : weight}
        entries.insert_one(new_entry)
        return {"message": "Done"}
    
# @main.route('/set-entry', methods=['POST'])
# @needs_auth()
# def set_entry(user):
#     if request.method == 'POST':
#         Duration = request.form.get['Duration']
#         intensity = request.form.get['intensity']
       
#         new_entry = {'username': user["email"], 'Duration': Duration, 'intensity': intensity, }
#         entries.insert_one(new_entry)
#         return {"message": "Done"}
    
