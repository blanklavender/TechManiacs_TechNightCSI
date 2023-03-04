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


@main.route('/create-entry', methods=['POST'])
@needs_auth()
def set_entry(user):
    if request.method == 'POST':
        start_date = request.form['startDate']
        end_date = request.form['endDate']
        symptoms = json.loads(request.form['symptoms'])
        entries.insert_one({'username': user["email"], 'start_date': start_date, 'end_date': end_date, 'symptoms': symptoms})
        return {"message": "Done"}
