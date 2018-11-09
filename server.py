from flask import Flask, render_template, request, send_from_directory, make_response, jsonify
from flask_socketio import SocketIO
import os, sys
from flask_cors import CORS

#initialize library variables
app = Flask(__name__, static_folder='client/build/static')
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
socketio = SocketIO(app)



#functions to manage user list
users = {}    
def kickUsers():
    users = {}

def removeUser(idOfUser):
    return users.pop(idOfUser, None)

def addUser(idOfUser, alias):
    for idOfOtherUsers in users.keys():
        if alias is users[idOfOtherUsers]:
            #duplicate aliases are not allowed
            return None
    users[idOfUser] = alias
    return alias #successful

def getUsers():
    return [users[idOfUser] for idOfUser in users.keys()]

def update_users():
    socketio.emit('new user', {'users':getUsers()})

admin_mute = False
def getAdminMute():
    return admin_mute

def setAdminMute(newValue):
    admin_mute = newValue


@app.route('/', defaults={'path':'/'})
@app.route('/<path:path>', methods=['GET', 'POST'])
def router(path):
    if 'api' in path:
        pass
    
    #return homepage
    elif path is '/':
        return send_from_directory('client/build', 'index.html')

    #retrieve static files
    elif path and os.path.exists('client/build/' + path):
        return send_from_directory('client/build/', path)

@socketio.on('send emote')
def recieved_emote(json, methods=['GET', 'POST']):
    socketio.emit('server message', json)

@socketio.on('send message')
def recieved_message(json, methods=['GET', 'POST']):
    if json['message'] == '4549admin_kick':
        socketio.emit('admin kick')
        kickUsers()
        return

    if json['message'] == '4549admin_mute':
        print(getAdminMute(), file=sys.stdout)
        setAdminMute(not getAdminMute()) #toggle
        return
        
    if not getAdminMute():
        socketio.emit('server message', json) 

@socketio.on('user login')
def user_login(json, methods=['GET', 'POST']):
    usersUniqueSocketID = request.sid
    addUser(usersUniqueSocketID, json['alias'])
    update_users()

@socketio.on('disconnect')
def remove_user(methods=['GET', 'POST']):
    usersUniqueSocketID = request.sid
    removeUser(usersUniqueSocketID)
    update_users()

#entry point
if __name__ == '__main__':
    
    cors = CORS(app)
    app.run()
    #socketio.run(app, debug=True)
    